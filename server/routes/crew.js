import { Router } from 'express'
import CrewMember from '../models/crewMember.js'
const crew = Router()

crew.get('/', async (req, res) => {
  try {
    const crewMembers = await CrewMember.find()
    res.json(crewMembers)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

crew.get('/:id', getCrewMember, (req, res) => {
  res.send(res.crewMember)
})

crew.post('/', async (req, res) => {
  const crewMember = new CrewMember({
    name: req.body.name,
    role: req.body.role,
    bio: req.body.bio,
    images: {
      png: req.body.images.png,
      webp: req.body.images.webp
    }
  })

  try {
    const newCrewMember = await crewMember.save()
    res.status(201).json(newCrewMember)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

async function getCrewMember (req, res, next) {
  let crewMember
  try {
    crewMember = await CrewMember.findById(req.params.id)
    if (crewMember === null) {
      return res.status(404).json({ message: 'Cannot find crew member' })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

  res.crewMember = crewMember
  next()
}

export default crew
