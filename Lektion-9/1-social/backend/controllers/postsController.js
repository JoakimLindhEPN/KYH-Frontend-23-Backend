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

const getAll = asyncHandler(async (req, res) => {
  const posts = await Post.find({}).populate('user', 'username')
  res.status(200).json(posts)
})

const getUserOwnPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.userId })
  res.status(200).json(posts)
})

const editPost = asyncHandler(async (req, res) => {
  const { title, body } = req.body

  const toUpdate = {}

  if(title) {
    toUpdate.title = title
  }
  if(body) {
    toUpdate.body = body
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, toUpdate, { new: true })

  if(!updatedPost) {
    res.status(404)
    throw new Error('Could not find the post')
  }

  // TODO: Check if needed
  // const doc = await updatedPost.populate(['likes'])
  // res.status(200).json(doc)
  res.status(200).json(updatedPost)
})

export {
  createPost,
  getAll,
  getUserOwnPosts,
  editPost
}