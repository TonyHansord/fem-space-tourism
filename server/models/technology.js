import mongoose from 'mongoose'

const technologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: {
    portrait: {
      type: String,
      required: true
    },
    landscape: {
      type: String,
      required: true
    }
  } 
})

const Technology = mongoose.model('technologies', technologySchema)

export default Technology
