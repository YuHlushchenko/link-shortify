// import './../@types/express'
import express, { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import routes from '@routes/index'
import { errorMiddleware } from '@middlewares/error.midelware'

import { ENV_VARIABLES } from 'configs/envSettings'

const app = express()
const PORT = ENV_VARIABLES.PORT || 3001

app.use(express.json()) // Middleware for parsing JSON
app.use(cookieParser())
app.use(cors())
app.use('/api', routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorMiddleware(err, req, res, next)
}) // Error handling middleware should be the last one cuz Express will pass the errors to it

const startServer = async () => {
  try {
    await mongoose
      .connect(ENV_VARIABLES.MONGO_DB_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      })
      .then(() => {
        // eslint-disable-next-line no-console
        console.log(`✅ Connected to MongoDB (${ENV_VARIABLES.MONGO_DB_URI})`)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('❌ Error connecting to MongoDB:', error)
      })

    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(
        `🚀 Server is running on port ${PORT} in ${ENV_VARIABLES.DEV_MODE} mode`,
      )
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('❌ Error starting server:', error)
  }
}

// Test route
app.get('/', (_, res) => {
  res.send('Hello World!')
})

startServer()
