import Post from '../models/postSchema.js'
import asyncHandler from 'express-async-handler'

const createPost = asyncHandler(async (req, res) => {

  const { title, body } = req.body;

  if(!title) {
    res.status(400)
    throw new Error('You need to enter a title')
  }
  if(!body) {
    res.status(400)
    throw new Error('You need to enter a body')
  }

  const post = await Post.create({
    title,
    body,
    user: req.userId
  })

  res.status(201).json(post)

})



export {
  createPost
}