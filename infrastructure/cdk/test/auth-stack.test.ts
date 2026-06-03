import * as cdk from 'aws-cdk-lib'
import { Template, Match } from 'aws-cdk-lib/assertions'
import { AuthStack } from '../lib/auth-stack'

const CERT_ARN = 'arn:aws:acm:us-east-1:123456789012:certificate/test-cert-id'

beforeAll(() => {
  process.env.GOOGLE_CLIENT_SECRET = 'test-google-secret'
})

describe('AuthStack', () => {
  describe('dev', () => {
    let template: Template

    beforeAll(() => {
      const app = new cdk.App()
      const stack = new AuthStack(app, 'TestStack', {
        stage: 'dev',
        domainName: 'test.example.com',
        certificateArn: CERT_ARN,
      })
      template = Template.fromStack(stack)
    })

    it('matches snapshot', () => {
      expect(template.toJSON()).toMatchSnapshot()
    })

    it('UserPool allows self sign-up via email', () => {
      template.hasResourceProperties('AWS::Cognito::UserPool', {
        AdminCreateUserConfig: { AllowAdminCreateUserOnly: false },
        UsernameAttributes: ['email'],
      })
    })

    it('UserPool enforces password policy', () => {
      template.hasResourceProperties('AWS::Cognito::UserPool', {
        Policies: {
          PasswordPolicy: {
            MinimumLength: 8,
            RequireUppercase: true,
            RequireLowercase: true,
            RequireNumbers: true,
            RequireSymbols: false,
          },
        },
      })
    })

    it('UserPoolClient uses SRP auth only and has no client secret', () => {
      template.hasResourceProperties('AWS::Cognito::UserPoolClient', {
        GenerateSecret: false,
        ExplicitAuthFlows: Match.arrayWith(['ALLOW_USER_SRP_AUTH']),
      })
    })

    it('UserPoolClient does not enable password auth', () => {
      const clients = template.findResources('AWS::Cognito::UserPoolClient')
      Object.values(clients).forEach((client: any) => {
        expect(client.Properties.ExplicitAuthFlows ?? []).not.toContain('ALLOW_USER_PASSWORD_AUTH')
      })
    })

    it('Google OAuth provider is configured', () => {
      template.resourceCountIs('AWS::Cognito::UserPoolIdentityProvider', 1)
      template.hasResourceProperties('AWS::Cognito::UserPoolIdentityProvider', {
        ProviderType: 'Google',
      })
    })

    it('UserPool has DESTROY removal policy', () => {
      template.hasResource('AWS::Cognito::UserPool', {
        DeletionPolicy: 'Delete',
        UpdateReplacePolicy: 'Delete',
      })
    })

    it('dev callback URLs include localhost and dev subdomain', () => {
      template.hasResourceProperties('AWS::Cognito::UserPoolClient', {
        CallbackURLs: Match.arrayWith([
          'http://localhost:3000/api/auth/callback',
          'https://dev.test.example.com/api/auth/callback',
        ]),
      })
    })
  })

  describe('prod', () => {
    let template: Template

    beforeAll(() => {
      const app = new cdk.App()
      const stack = new AuthStack(app, 'TestStack', {
        stage: 'prod',
        domainName: 'test.example.com',
        certificateArn: CERT_ARN,
      })
      template = Template.fromStack(stack)
    })

    it('matches snapshot', () => {
      expect(template.toJSON()).toMatchSnapshot()
    })

    it('UserPool has RETAIN removal policy', () => {
      template.hasResource('AWS::Cognito::UserPool', {
        DeletionPolicy: 'Retain',
        UpdateReplacePolicy: 'Retain',
      })
    })

    it('prod creates SES email identity', () => {
      template.resourceCountIs('AWS::SES::EmailIdentity', 1)
      template.hasResourceProperties('AWS::SES::EmailIdentity', {
        EmailIdentity: 'test.example.com',
      })
    })

    it('prod callback URLs do not include dev subdomain', () => {
      const clients = template.findResources('AWS::Cognito::UserPoolClient')
      Object.values(clients).forEach((client: any) => {
        expect(client.Properties.CallbackURLs).not.toContain('https://dev.test.example.com/api/auth/callback')
      })
    })
  })
})
