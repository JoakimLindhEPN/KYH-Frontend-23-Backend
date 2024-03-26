import { Schema, model, Types } from 'mongoose'

const likesSchema = new Schema({
  user: {
    type: Types.ObjectId, 
    ref: 'User', 
    required: true
  },
  post: {
    type: Types.ObjectId,
    ref: 'Post',
    required: true
  }
})

const Like = model('Like', likesSchema)
export default Like