import { Router } from 'express'
const crew = Router()

crew.get('/', (req, res) => {
  res.send('Hello from crew route')
})

crew.get('/:id', (req, res) => {
  res.send('About the crew')
})

export default crew
