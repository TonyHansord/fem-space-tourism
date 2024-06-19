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
app.use(cors())

import crew from './routes/crew.js'
import destinations from './routes/destinations.js'
import technology from './routes/technology.js'

app.use('/api/crew', crew)
app.use('/api/destinations', destinations)
app.use('/api/technology', technology)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
