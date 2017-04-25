import mongoose, { Schema } from 'mongoose'

const pollOptionSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  pollId: {
      type: String
  }
}, {
  timestamps: true
})

pollOptionSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      description: this.description,
      pollId: this.pollId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('PollOption', pollOptionSchema)

export const schema = model.schema
export default model
