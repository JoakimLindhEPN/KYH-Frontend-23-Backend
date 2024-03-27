import Like from '../models/likesSchema.js'
import Post from '../models/postSchema.js'
import asyncHandler from 'express-async-handler'

const likePost = asyncHandler(async (req, res) => {
  const userId = req.userId
  const postId = req.params.postId

  
  const post = await Post.findById(postId)
  
  if(!post) {
    res.status(404)
    throw new Error('Could not find the post')
  }
  
  const exists = await Like.exists({ user: userId, post: post._id })

  if(exists) {
    const like = await Like.findOneAndDelete({ user: userId, post: post._id })
    const index = post.likes.findIndex(like => like.user === userId)
    post.likes.splice(index, 1)
    await post.save()
    return res.status(200).json(like)
  }

  const like = await Like.create({ user: userId, post: post._id })
  post.likes.push(like._id)
  await post.save()

  res.status(201).json(like)

})

export {
  likePost
}