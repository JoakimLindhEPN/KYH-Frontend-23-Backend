const EventEmitter = require('events')

const myEmitter = new EventEmitter()

// Liknande addEventListener()
// myEmitter.on('lunch', (mat) => {
//   console.log(`idag blir det ${mat} till lunch!`)
// })


// Skapar ett event
// myEmitter.emit('lunch', 'pizza')
// myEmitter.emit('lunch', 'kebab')


myEmitter.on('click', () => {
  console.log('clickade')
})


myEmitter.emit('click')