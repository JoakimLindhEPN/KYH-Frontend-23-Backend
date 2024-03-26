import { Schema, model, Types } from 'mongoose'

const commentSchema = new Schema({
  user: {
    type: Types.ObjectId, 
    ref: 'User', 
    required: true
  },
  post: {
    type: Types.ObjectId,
    ref: 'Post',
    required: true
  },
  text: {
    type: String,
    required: true
  }
})

const Comment = model('Comment', commentSchema)
export default Comment