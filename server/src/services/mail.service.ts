import nodemailer from 'nodemailer'
import { google } from 'googleapis'

import { ENV_VARIABLES } from '@configs/envSettings'

import ApiError from '@exeptions/apiError'

class MailService {
  // TODO: rewrite this class and its methods
  private transporter: nodemailer.Transporter
  private OAuth2Client = new google.auth.OAuth2(
    ENV_VARIABLES.EMAIL_CLIENT_ID,
    ENV_VARIABLES.EMAIL_CLIENT_SECRET,
    ENV_VARIABLES.EMAIL_REDIRECT_URI,
  )

  constructor() {
    this.OAuth2Client.setCredentials({
      refresh_token: ENV_VARIABLES.EMAIL_REFRESH_TOKEN,
    })
    this.transporter = nodemailer.createTransport({
      host: ENV_VARIABLES.SMTP_HOST,
      port: ENV_VARIABLES.SMTP_PORT, //? 465 for SSL, 587 for TLS
      secure: false, //? true for 465, false for other ports
      auth: {
        type: 'OAuth2',
        user: ENV_VARIABLES.EMAIL_USER,
        clientId: ENV_VARIABLES.EMAIL_CLIENT_ID,
        clientSecret: ENV_VARIABLES.EMAIL_CLIENT_SECRET,
        refreshToken: ENV_VARIABLES.EMAIL_REFRESH_TOKEN,
        accessToken: async () => {
          try {
            const { token } = await this.OAuth2Client.getAccessToken()
            if (!token)
              throw ApiError.Internal('Error while getting accessToken')

            return token
          } catch (error) {
            throw ApiError.Internal(`Error while getting accessToken: ${error}`)
          }
        },
      },
    } as nodemailer.TransportOptions)
  }

  async sendActivationMail(to: string, link: string) {
    try {
      const mailOptions = {
        from: `"Support" <${ENV_VARIABLES.EMAIL_USER}>`, // sender address
        to,
        subject: `Account Activation on ${ENV_VARIABLES.CLIENT_DOMAIN}`,
        html: `
          <p>To activate your account, please click the link below:</p>
          <a href="${link}" style="display:inline-block; padding:10px 20px; color:white; background-color:#007bff; text-decoration:none; border-radius:5px;">
            Activate Account
          </a>
          <p>If you did not request this, please ignore this email.</p>
        `,
      }

      await this.transporter.sendMail(mailOptions)
    } catch (error) {
      throw ApiError.Internal(
        `Error while sending email with activation link: ${error}`,
      )
    }
  }
}

export default new MailService()
