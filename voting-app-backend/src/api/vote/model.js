import mongoose, { Schema } from 'mongoose'

const voteSchema = new Schema({
  voter: {
    type: String
  },
  pollOption: {
    type: String
  },
  poll: {
    type: String
  }
}, {
  timestamps: true
})

voteSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      voter: this.voter,
      pollOption: this.pollOption,
      poll: this.poll,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Vote', voteSchema)

export const schema = model.schema
export default model
