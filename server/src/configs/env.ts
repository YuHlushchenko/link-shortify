import dotenv from 'dotenv'

dotenv.config()

export const envVariables = {
  PORT: process.env.PORT || 3001,
  DEV_MODE: process.env.DEV_MODE || 'development',

  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || '30d',
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,

  MONGO_DB_PROTOCOL: process.env.MONGO_DB_PROTOCOL || 'mongodb',
  MONGO_DB_HOST: process.env.MONGO_DB_HOST || 'localhost',
  MONGO_DB_PORT: process.env.MONGO_DB_PORT || 27017,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME || 'link-shortify',
  MONGO_DB_URI: '',

  SMTP_HOST: process.env.SMTP_HOST || 'smtp.gmail.com',
  SMTP_PORT: process.env.SMTP_PORT || 587,
  SMTP_USER: process.env.SMTP_USER,

  API_URL: process.env.API_URL || 'http://localhost:3001', 
  CLIENT_DOMAIN: process.env.CLIENT_DOMAIN || 'http://localhost:3000',

  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_CLIENT_ID: process.env.EMAIL_CLIENT_ID,
  EMAIL_CLIENT_SECRET: process.env.EMAIL_CLIENT_SECRET,
  EMAIL_REFRESH_TOKEN: process.env.EMAIL_REFRESH_TOKEN,
  EMAIL_REDIRECT_URI:
    process.env.EMAIL_REDIRECT_URI ||
    'https://developers.google.com/oauthplayground',
}

const createMongoUri = (): void => {
  envVariables.MONGO_DB_URI = `${envVariables.MONGO_DB_PROTOCOL}://${
    envVariables.MONGO_DB_HOST
  }:${envVariables.MONGO_DB_PORT}/${envVariables.MONGO_DB_NAME}`
}

createMongoUri()

// TODO: add validation for env variables

// const validateEnvVariables = (): void => {
//     const envVariableEntries = Object.entries(envVariables)
    
//     envVariableEntries.forEach(([key, value]) => {
//         if (!value) {
//         throw new Error(`❌ ${key} is not defined in .env file`)
//         }
//     })
// }