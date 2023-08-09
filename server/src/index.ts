import 'express-async-errors'
import 'reflect-metadata'

import '@config/env'
import '@infra/database/connection'

import express from 'express'
import { PORT } from '@config/env/app'

import cors from 'cors'

import { appRoutes } from '@infra/http/routes'
import { errorHandler } from '@infra/http/middlewares/error-handler'

async function bootstrap() {
  const app = express()

  app.use(cors())
  app.use(express.json())

  app.use('/api/v1', appRoutes)

  app.use(errorHandler)

  app.listen(PORT, () => {
    console.log(`🚀 HTTP server running on port ${PORT}`)
  })
}

bootstrap()
