import { Schema, model, Types } from 'mongoose'

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    reuquired: true
  },
  user: {
    type: Types.ObjectId, 
    ref: 'User', 
    required: true
  },
  likes: {
    type: [{ type: Types.ObjectId, ref: 'Like' }]
  }
}, { timestamps: true })

const Post = model('Post', postSchema)

export default Post
