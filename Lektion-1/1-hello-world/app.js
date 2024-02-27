// console.log('Hello world')

// console.log(global)

// setTimeout(() => {
//   console.log('timed out')
// }, 2000)

// import User from './user.js'
const User = require('./user')
const { names, ages } = require('./module')

const user2 = new User('Hans', 'Mattin-Lassei')
// user2.greet()


console.log(names, ages)