import nodemailer from 'nodemailer'
import { google } from 'googleapis'

class MailService {
  private transporter: nodemailer.Transporter
  private OAuth2Client = new google.auth.OAuth2(
    process.env.EMAIL_CLIENT_ID,
    process.env.EMAIL_CLIENT_SECRET,
    process.env.EMAIL_REDIRECT_URI,
  )

  constructor() {
    this.OAuth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN,
    })

    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587, // Використовуємо порт 465 (SSL)
      secure: false, // Обов’язково true для 465
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.EMAIL_CLIENT_ID,
        clientSecret: process.env.EMAIL_CLIENT_SECRET,
        refreshToken: process.env.EMAIL_REFRESH_TOKEN,
        accessToken: async () => {
          try {
            const { token } = await this.OAuth2Client.getAccessToken()
            if (!token) throw new Error('❌ Не вдалося отримати accessToken')
            console.log('✅ Отримано accessToken:', token)
            return token
          } catch (error) {
            console.error('❌ Помилка отримання accessToken:', error)
            throw error
          }
        },
      },
    } as nodemailer.TransportOptions)
  }

  async sendActivationMail(to: string, link: string) {
    try {
      console.log(`📩 Надсилаємо email на ${to}...`)

      const mailOptions = {
        from: `"Support" <${process.env.EMAIL_USER}>`, // Відправник
        to,
        subject: `Account Activation on ${process.env.CLIENT_DOMAIN}`,
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
