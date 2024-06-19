import { Router } from 'express'
import Destination from '../models/destination.js'
const destination = Router()

destination.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find()
    res.json(destinations)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

destination.get('/:id', getDestination, (req, res) => {
  res.send(res.location)
})

destination.post('/', async (req, res) => {
  const location = new Destination({
    name: req.body.name,
    description: req.body.description,
    distance: req.body.distance,
    travel: req.body.travel,
    images: {
      png: req.body.images.png,
      webp: req.body.images.webp
    }
  })

  try {
    const newDestination = await location.save()
    res.status(201).json(newDestination)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

async function getDestination (req, res, next) {
  let location
  try {
    location = await Destination.findById(req.params.id)
    if (location === null) {
      return res.status(404).json({ message: 'Cannot find destination' })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

  res.location = location
  next()
}

export default destination
