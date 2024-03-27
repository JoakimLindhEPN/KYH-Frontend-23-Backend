import Comment from '../models/commentSchema.js'
import Post from '../models/postSchema.js'
import asyncHandler from 'express-async-handler'

const addComment = asyncHandler(async (req, res) => {
  const { text } = req.body;
  const userId = req.userId;
  const postId = req.params.postId

  if(!text) {
    res.status(400)
    throw new Error('did you have something to say?')
  }

  const post = await Post.findById(postId)
  
  if(!post) {
    res.status(404)
    throw new Error('Could not find the post')
  }

  const comment =  await Comment.create({
    user: userId,
    post: post._id,
    text
  })

  post.comments.push(comment._id)

  await post.save()

  res.status(201).json(comment)
})


const removeComment = asyncHandler(async (req, res) => {
  const userId = req.userId;
  const postId = req.params.postId
  const { commentId } = req.body

  const post = await Post.findById(postId)
  
  if(!post) {
    res.status(404)
    throw new Error('Could not find the post')
  }

  
  if(post.user != userId) {
    res.status(401)
    throw new Error('You can only remove comments from your own posts')
  }

  const comment = await Comment.findByIdAndDelete(commentId)

  res.status(200).json(comment)

})

export {
  addComment,
  removeComment
}