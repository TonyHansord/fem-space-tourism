import mongoose from 'mongoose'

const crewMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  bio: {
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

const CrewMember = mongoose.model('crewmembers', crewMemberSchema)

export default CrewMember
