import User from '../schemas/userSchema.js'
import asyncHandler from 'express-async-handler'

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: 'register user'})

})

const loginUser = asyncHandler(async (req, res) => {

  res.json({ message: 'login user'})
})

const getUserProfile = asyncHandler(async (req, res) => {

  res.json({ message: 'get user profile'})
})

const updateUserProfile = asyncHandler(async (req, res) => {

  res.json({ message: 'update user profile'})
})


export {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile
}