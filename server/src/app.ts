// src/app.ts
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import userRoutes from '@routes/user.routes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json()) // Middleware for parsing JSON
app.use(cookieParser())
app.use(cors())

app.use('/api/users', userRoutes)

const startServer = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI || '', {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      })
      .then(() => {
        console.log('✅ Connected to MongoDB')
      })
      .catch((error) => {
        console.error('❌ Error connecting to MongoDB:', error)
      })

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.error('❌ Error starting server:', error)
  }
}

// Default route
app.get('/', (req, res) => {
  res.send('Server is running')
})

startServer()
