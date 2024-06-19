import { Router } from 'express'
import Technology from '../models/technology.js'
const technology = Router()

technology.get('/', async (req, res) => {
  try {
    const technologies = await Technology.find()
    res.json(technologies)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

technology.get('/:id', getTechnology, (req, res) => {
  res.send(res.tech)
})

technology.post('/', async (req, res) => {
  const tech = new Technology({
    name: req.body.name,
    description: req.body.description,
    images: {
      portrait: req.body.images.portrait,
      landscape: req.body.images.landscape
    }
  })

  try {
    const newTechnology = await tech.save()
    res.status(201).json(newTechnology)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

async function getTechnology (req, res, next) {
  let tech
  try {
    tech = await Technology.findById(req.params.id)
    if (tech === null) {
      return res.status(404).json({ message: 'Cannot find technology' })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

  res.tech = tech
  next()
}

export default technology
