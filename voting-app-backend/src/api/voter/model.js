import mongoose, { Schema } from 'mongoose'

const voterSchema = new Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  description: {
    type: String
  }
}, {
  timestamps: true
})

voterSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      username: this.username,
      email: this.email,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Voter', voterSchema)

export const schema = model.schema
export default model
