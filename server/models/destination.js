import mongoose from 'mongoose'

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  distance: {
    type: String,
    required: true
  },
  travel: {
    type: String,
    required: true
  },
  images: {
    png: {
      type: String,
      required: true
    },
    webp: {
      type: String,
      required: true
    }
  } 
})

const Destination = mongoose.model('destinations', destinationSchema)

export default Destination
