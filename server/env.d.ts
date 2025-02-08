declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string
    NODE_ENV: 'development' | 'production'
    JWT_EXPIRES_IN: string
    JWT_ACCESS_SECRET: string
    JWT_REFRESH_SECRET: string
    MONGO_URI: string
  }
}
