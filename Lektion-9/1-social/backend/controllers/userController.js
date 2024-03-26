import User from '../models/userSchema.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import generateToken from '../helpers/generateToken.js';


const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if(!username || !email || !password) {
    res.status(400)
    throw new Error('you need to enter all the fields')
  }

  const exists = await User.exists({ email })

  if(exists) {
    res.status(409)
    throw new Error('The email address is already taken')
  }

  const salt = await bcrypt.genSalt(13)
  const hashed = await bcrypt.hash(password, salt)

  const user = await User.create({
    username,
    email,
    password: hashed
  })

  if(user) {
    
    generateToken(user._id, res)
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email
    })
  }

})
const login = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if(!password) {
    res.status(400)
    throw new Error('you need to enter a password')
  }

  if(!username && !email) {
    res.status(400)
    throw new Error('You need to enter a username/email')
  }


  const query = username ? { username } : { email }

  const user = await User.findOne(query)

  if(!user) {
    res.status(401)
    throw new Error('Invalid credentials')
  }

  const result = await bcrypt.compare(password, user.password)
  if(!result) {
    res.status(401)
    throw new Error('Invalid credentials')
  }

  generateToken(user._id, res)
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email
    })

})
const logout = asyncHandler(async (req, res) => {
  res.cookie('jwtToken', '', {
    httpOnly: true,
    expires: new Date(0)
  })

  res.status(200).json({ message: 'Logged out' })
})

export {
  register,
  login,
  logout
}