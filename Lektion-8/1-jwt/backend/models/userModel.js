import User from '../schemas/userSchema.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import generateToken from '../utils/generateToken.js';

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if(!firstName || !lastName || !email || !password) {
    res.status(400)
    throw new Error('You need to enter all the fields')
  }

  const userExists = await User.exists({ email })
  if(userExists) {
    res.status(400)
    throw new Error('The email address is already taken')
  }

  // const salt = await bcrypt.genSalt(15)
  // const hashed = await bcrypt.hash(password, salt)
  
  // const user = await User.create({
  //   firstName,
  //   lastName,
  //   email,
  //   passwordHash: hashed
  // })

  const user = await User.create({
    firstName,
    lastName,
    email,
    passwordHash: password
  })

  // TODO: Generate token
  const token = generateToken(user)

  res.status(201).json({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    displayName: user.displayName,
    token
  })

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