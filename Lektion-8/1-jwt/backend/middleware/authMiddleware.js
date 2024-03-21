import jwt from 'jsonwebtoken'


const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.userId = decoded.userId
    next()
  } catch (err) {

    res.status(401)
    let message = 'Access restricted Please Login!'

    if(err.name === 'TokenExpiredError') {
      message = 'Session expired, please login'
    }
    throw new Error(message)
  }
}

export { verifyToken }




// fetch('kajsd', {
//   method: 'POST',
//   headers: {
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZjMDkxYTNmM2RjZTEzODRhMmI0YTEiLCJpYXQiOjE3MTEwMTgwNzksImV4cCI6MTcxMTAxODEzOX0.XdhcKF1x4TacHTkPEgSsQf3BIwWPfsuKK0jfVQl0-Pc'
//   }
// })

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyS'


// const obj = {
//   grej: 'hej'
// }
// obj.entillgrej = 'då'



// console.log(obj) 
// /*
// const obj = {
//   grej: 'hej',
//   entillgrej: 'då
// }
// */