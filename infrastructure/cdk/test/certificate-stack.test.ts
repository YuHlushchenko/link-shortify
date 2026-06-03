import * as cdk from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { CertificateStack } from '../lib/certificate-stack'

describe('CertificateStack', () => {
  describe('dev', () => {
    let template: Template

    beforeAll(() => {
      const app = new cdk.App()
      const stack = new CertificateStack(app, 'TestStack', {
        stage: 'dev',
        domainName: 'test.example.com',
      })
      template = Template.fromStack(stack)
    })

    it('matches snapshot', () => {
      expect(template.toJSON()).toMatchSnapshot()
    })

    it('covers apex and wildcard domains', () => {
      template.hasResourceProperties('AWS::CertificateManager::Certificate', {
        DomainName: 'test.example.com',
        SubjectAlternativeNames: ['*.test.example.com'],
      })
    })

    it('uses DNS validation', () => {
      template.hasResourceProperties('AWS::CertificateManager::Certificate', {
        ValidationMethod: 'DNS',
      })
    })
  })

  describe('prod', () => {
    let template: Template

    beforeAll(() => {
      const app = new cdk.App()
      const stack = new CertificateStack(app, 'TestStack', {
        stage: 'prod',
        domainName: 'test.example.com',
      })
      template = Template.fromStack(stack)
    })

    it('matches snapshot', () => {
      expect(template.toJSON()).toMatchSnapshot()
    })

    it('covers apex and wildcard domains', () => {
      template.hasResourceProperties('AWS::CertificateManager::Certificate', {
        DomainName: 'test.example.com',
        SubjectAlternativeNames: ['*.test.example.com'],
      })
    })

    it('uses DNS validation', () => {
      template.hasResourceProperties('AWS::CertificateManager::Certificate', {
        ValidationMethod: 'DNS',
      })
    })
  })
})
