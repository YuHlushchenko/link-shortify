import * as cdk from 'aws-cdk-lib'
import * as acm from 'aws-cdk-lib/aws-certificatemanager'
import * as cognito from 'aws-cdk-lib/aws-cognito'
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager'
import { Construct } from 'constructs'
import { type Stage, getResourcePrefix, getStackPrefix } from '../utils/stage'

interface AuthStackProps extends cdk.StackProps {
  stage: Stage
  domainName: string
  // Wildcard cert ARN from CertificateStack (must be in us-east-1)
  certificateArn: string
  // Extra callback/logout URLs (e.g. Vercel preview URLs)
  extraCallbackUrls?: string[]
  extraLogoutUrls?: string[]
}

export class AuthStack extends cdk.Stack {
  public readonly userPoolId: string
  public readonly userPoolClientId: string
  public readonly cognitoDomain: string

  constructor(scope: Construct, id: string, props: AuthStackProps) {
    super(scope, id, props)

    const resourcePrefix = getResourcePrefix(props.stage)
    const stackPrefix = getStackPrefix(props.stage)

    const googleSecret = secretsmanager.Secret.fromSecretNameV2(
      this,
      'GoogleOauthSecret',
      `${props.stage}/link-shortify/google-oauth`,
    )

    const userPool = new cognito.UserPool(this, 'UserPool', {
      userPoolName: `${resourcePrefix}link-shortify`,
      selfSignUpEnabled: true,
      signInAliases: { email: true },
      autoVerify: { email: true },
      // Verification code sent to email on sign-up
      userVerification: {
        emailStyle: cognito.VerificationEmailStyle.CODE,
        emailSubject: 'Verify your Link-Shortify account',
        emailBody: 'Your verification code is {####}',
      },
      passwordPolicy: {
        minLength: 8,
        requireUppercase: true,
        requireLowercase: true,
        requireDigits: true,
        requireSymbols: false,
      },
      standardAttributes: {
        email: { required: true, mutable: true },
        givenName: { required: false, mutable: true },
        familyName: { required: false, mutable: true },
        profilePicture: { required: false, mutable: true },
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
      removalPolicy:
        props.stage === 'prod' ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY,
    })

    const googleProvider = new cognito.UserPoolIdentityProviderGoogle(this, 'GoogleProvider', {
      userPool,
      // clientId is not a secret — appears in OAuth consent screen URLs
      clientId: googleSecret.secretValueFromJson('GOOGLE_CLIENT_ID').unsafeUnwrap(),
      clientSecretValue: googleSecret.secretValueFromJson('GOOGLE_CLIENT_SECRET'),
      scopes: ['openid', 'email', 'profile'],
      attributeMapping: {
        email: cognito.ProviderAttribute.GOOGLE_EMAIL,
        givenName: cognito.ProviderAttribute.GOOGLE_GIVEN_NAME,
        familyName: cognito.ProviderAttribute.GOOGLE_FAMILY_NAME,
        profilePicture: cognito.ProviderAttribute.GOOGLE_PICTURE,
      },
    })

    const callbackUrls = [
      'http://localhost:3000/api/auth/callback',
      `https://${props.domainName}/api/auth/callback`,
      ...(props.extraCallbackUrls ?? []),
    ]
    const logoutUrls = [
      'http://localhost:3000',
      `https://${props.domainName}`,
      ...(props.extraLogoutUrls ?? []),
    ]

    if (props.stage === 'dev') {
      callbackUrls.push(`https://dev.${props.domainName}/api/auth/callback`)
      logoutUrls.push(`https://dev.${props.domainName}`)
    }

    const userPoolClient = new cognito.UserPoolClient(this, 'UserPoolClient', {
      userPool,
      userPoolClientName: `${resourcePrefix}link-shortify-web`,
      generateSecret: false,
      // SRP is what Amplify uses for email+password auth
      authFlows: {
        userSrp: true,
        userPassword: false,
      },
      oAuth: {
        flows: { authorizationCodeGrant: true },
        scopes: [cognito.OAuthScope.OPENID, cognito.OAuthScope.EMAIL, cognito.OAuthScope.PROFILE],
        callbackUrls,
        logoutUrls,
      },
      supportedIdentityProviders: [
        cognito.UserPoolClientIdentityProvider.COGNITO,
        cognito.UserPoolClientIdentityProvider.GOOGLE,
      ],
    })
    userPoolClient.node.addDependency(googleProvider)

    // Custom domain: dev-auth.julab.space (dev) / auth.julab.space (prod)
    // UserPoolDomain must wait for UserPoolClient (OAuth config) to exist
    const authSubdomain = `${resourcePrefix}auth.${props.domainName}`

    const certificate = acm.Certificate.fromCertificateArn(this, 'Certificate', props.certificateArn)

    const userPoolDomain = new cognito.UserPoolDomain(this, 'UserPoolDomain', {
      userPool,
      customDomain: {
        domainName: authSubdomain,
        certificate,
      },
    })
    userPoolDomain.node.addDependency(userPoolClient)

    this.userPoolId = userPool.userPoolId
    this.userPoolClientId = userPoolClient.userPoolClientId
    this.cognitoDomain = userPoolDomain.domainName

    new cdk.CfnOutput(this, 'UserPoolId', {
      value: userPool.userPoolId,
      exportName: `${stackPrefix}UserPoolId`,
    })

    new cdk.CfnOutput(this, 'UserPoolClientId', {
      value: userPoolClient.userPoolClientId,
      exportName: `${stackPrefix}UserPoolClientId`,
    })

    new cdk.CfnOutput(this, 'CognitoDomain', {
      value: userPoolDomain.cloudFrontEndpoint,
      description: `Add CNAME in Cloudflare: ${authSubdomain} → <this value>`,
      exportName: `${stackPrefix}CognitoDomain`,
    })
  }
}
