import mongoose, { Schema } from 'mongoose'

const pollSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  }
}, {
  timestamps: true
})

pollSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
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

const model = mongoose.model('Poll', pollSchema)

export const schema = model.schema
export default model
