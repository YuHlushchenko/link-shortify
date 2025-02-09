import { SignOptions } from 'jsonwebtoken'

declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string
    DEV_MODE: 'development' | 'production'

    JWT_EXPIRES_IN: SignOptions['expiresIn'] // 1h | 1d | 1m | 1y
    JWT_REFRESH_EXPIRES_IN: SignOptions['expiresIn'] // 1h | 1d | 1m | 1y
    JWT_ACCESS_SECRET: string
    JWT_REFRESH_SECRET: string

    MONGO_DB_PROTOCOL: string
    MONGO_DB_HOST: string
    MONGO_DB_PORT: string
    MONGO_DB_NAME: string

    SMTP_HOST: string
    SMTP_PORT: string
    SMTP_USER: string

    CLIENT_DOMAIN: string

    EMAIL_USER: string
    EMAIL_CLIENT_ID: string
    EMAIL_CLIENT_SECRET: string
    EMAIL_REFRESH_TOKEN: string
    EMAIL_REDIRECT_URI: string
  }
}
