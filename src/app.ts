import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { config as dotenv } from 'dotenv'
import routes from './routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    dotenv()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database () {
    mongoose.connect('mongodb://localhost:27017/pokedb', {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
    )
  }

  private routes () {
    this.express.use(routes)
  }
}

export default new App().express
