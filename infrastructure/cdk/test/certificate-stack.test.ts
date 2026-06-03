import * as cdk from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { CertificateStack } from '../lib/certificate-stack'

describe('CertificateStack', () => {
  it('dev matches snapshot', () => {
    const app = new cdk.App()
    const stack = new CertificateStack(app, 'TestStack', {
      stage: 'dev',
      domainName: 'test.example.com',
    })
    expect(Template.fromStack(stack).toJSON()).toMatchSnapshot()
  })

  it('prod matches snapshot', () => {
    const app = new cdk.App()
    const stack = new CertificateStack(app, 'TestStack', {
      stage: 'prod',
      domainName: 'test.example.com',
    })
    expect(Template.fromStack(stack).toJSON()).toMatchSnapshot()
  })
})
