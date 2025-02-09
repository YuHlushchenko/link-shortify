import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import authRoutes from '@routes/auth.routes'

import { envVariables } from 'configs/env'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json()) // Middleware for parsing JSON
app.use(cookieParser())
app.use(cors())

app.use('/api/auth', authRoutes) // TODO: create Router

const startServer = async () => {
  try {
    await mongoose
      .connect(envVariables.MONGO_DB_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      })
      .then(() => {
        console.log(`✅ Connected to MongoDB (${envVariables.MONGO_DB_URI})`)
      })
      .catch((error) => {
        console.error('❌ Error connecting to MongoDB:', error)
      })

    app.listen(PORT, () => {
      console.log(
        `🚀 Server is running on port ${PORT} in ${envVariables.DEV_MODE} mode`,
      )
    })
  } catch (error) {
    console.error('❌ Error starting server:', error)
  }
}

// Test route
app.get('/', (_, res) => {
  res.send('Hello World!')
})

startServer()
