import dotenv from 'dotenv'
dotenv.config()

import express, { json } from 'express'
import cors from 'cors'
import pkg from 'mongoose'
const { connect, connection } = pkg

const app = express()
const PORT = process.env.PORT || 5050

connect(process.env.ATLAS_URI, {})

const db = connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(json())

import crew from './routes/crew.js'

app.use('/crew', crew)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
