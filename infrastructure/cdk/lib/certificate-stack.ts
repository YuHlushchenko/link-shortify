import * as cdk from 'aws-cdk-lib'
import * as acm from 'aws-cdk-lib/aws-certificatemanager'
import { Construct } from 'constructs'
import { type Stage } from '../utils/stage'

interface CertificateStackProps extends cdk.StackProps {
  stage: Stage
  domainName: string
}

export class CertificateStack extends cdk.Stack {
  public readonly certificateArn: string

  constructor(scope: Construct, id: string, props: CertificateStackProps) {
    super(scope, id, props)

    const certificate = new acm.Certificate(this, 'Certificate', {
      domainName: props.domainName,
      subjectAlternativeNames: [`*.${props.domainName}`],
      // DNS validation — add the CNAME records from AWS Console → ACM to Cloudflare
      validation: acm.CertificateValidation.fromDns(),
    })

    this.certificateArn = certificate.certificateArn

    new cdk.CfnOutput(this, 'CertificateArn', {
      value: certificate.certificateArn,
      description: 'Add to .env as CERTIFICATE_ARN and to GitHub Actions workflow env',
      exportName: `${props.stage}-CertificateArn`,
    })
  }
}
