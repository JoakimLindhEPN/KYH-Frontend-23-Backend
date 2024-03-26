import jwt from 'jsonwebtoken'

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  })

  res.cookie('jwt-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 60 * 60 * 1000,
    // sameSite: 'strict'
  })
}


export default generateToken