import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'

const verifyToken = asyncHandler(async (req, res, next) => {

  let token = req.cookies.jwtToken

  if(!token) {
    res.status(401)
    throw new Error('No token present')
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = decoded.userId

    next()
  } catch (err) {
    res.status(401)
    throw new Error('Unauthorized')
  }

})

export default verifyToken