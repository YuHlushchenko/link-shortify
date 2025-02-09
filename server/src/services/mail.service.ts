import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import { envVariables } from '@configs/env'

class MailService {
  // TODO: rewrite this class and its methods
  private transporter: nodemailer.Transporter
  private OAuth2Client = new google.auth.OAuth2(
    envVariables.EMAIL_CLIENT_ID,
    envVariables.EMAIL_CLIENT_SECRET,
    envVariables.EMAIL_REDIRECT_URI,
  )

  constructor() {
    this.OAuth2Client.setCredentials({
      refresh_token: envVariables.EMAIL_REFRESH_TOKEN,
    })
    this.transporter = nodemailer.createTransport({
      host: envVariables.SMTP_HOST,
      port: envVariables.SMTP_PORT, //? 465 for SSL, 587 for TLS
      secure: false, //? true for 465, false for other ports
      auth: {
        type: 'OAuth2',
        user: envVariables.EMAIL_USER,
        clientId: envVariables.EMAIL_CLIENT_ID,
        clientSecret: envVariables.EMAIL_CLIENT_SECRET,
        refreshToken: envVariables.EMAIL_REFRESH_TOKEN,
        accessToken: async () => {
          try {
            const { token } = await this.OAuth2Client.getAccessToken()
            if (!token) throw new Error('❌ Error while getting accessToken')
            console.log('✅ accessToken has been successfully received:', token)
            return token
          } catch (error) {
            console.error('❌ Error while getting accessToken:', error)
            throw error
          }
        },
      },
    } as nodemailer.TransportOptions)
  }

  async sendActivationMail(to: string, link: string) {
    try {
      console.log(`📩 Sending email to ${to}...`)

      const mailOptions = {
        from: `"Support" <${process.env.EMAIL_USER}>`, // sender address
        to,
        // subject: `Account Activation on ${process.env.CLIENT_DOMAIN}`,
        subject: `Account Activation on ${process.env.API_URL}`,
        html: `
          <p>To activate your account, please click the link below:</p>
          <a href="${link}" style="display:inline-block; padding:10px 20px; color:white; background-color:#007bff; text-decoration:none; border-radius:5px;">
            Activate Account
          </a>
          <p>If you did not request this, please ignore this email.</p>
        `,
      }

      const result = await this.transporter.sendMail(mailOptions)
      console.log('✅ Email sent successfully:', result)
    } catch (error) {
      console.error('❌ Error while sending email:', error)
    }
  }
}

export default new MailService()
