const fs = require('fs')

// Läsa filer
// fs.readFile('./mapp/text.txt', 'utf8', (err, data) => {
//   if(err) {
//     console.log(err)
//     return
//   }

//   console.log(data)
// })

// const data = fs.readFileSync('./mapp/text2.txt', 'utf8')

// console.log(data)
// console.log('det här ligger efter data')


// Skriva till filer

// fs.writeFile('./mapp/text.txt', 'Ny text', (err) => {
//   if(err) {
//     console.log(err)
//     return
//   }

//   console.log('write file - success')
// })

// Lägga till i slutet på en fil
// fs.appendFile('./mapp/text.txt', '\n Det här är en text som vi har lagt till', () => {
//   console.log('appended text - sucess')
// })


// fs.readFile('./mapp/users.json', 'utf8', (err, data) => {
//   if(err) {
//     console.log(err)
//     return
//   }

//   const users = JSON.parse(data)
//   users.push({
//     firstName: 'Hans',
//     lastName: 'Mattin-Lassei'
//   })

//   fs.writeFile('./mapp/users.json', JSON.stringify(users), err => {
//     if(err) {
//       console.log(err)
//       return
//     }
//     console.log('user added')
//   })
// })


// Skapa en ny fil
// fs.writeFile('./mapp/text3.txt', 'Det här blir en ny fil', err => {
//   if(err) {
//     console.log(err)
//     return
//   }

//   console.log('file created')
// })



// Döpa om en fil
// if(fs.existsSync('./mapp/text3.txt')) {

//   fs.rename('./mapp/text3.txt', './mapp/text2.txt', err => {
//     if(err) {
//       console.log(err)
//       return
//     }
  
//     console.log('changed filename')
//   })
// } else {
//   console.log('filen finns inte')
// }




// kolla om mappen inte finns
// if(!fs.existsSync('./NyMapp')) {
  
//   // Skapa en ny mapp
//   fs.mkdir('./NyMapp', err => {
//     if(err) {
//       console.log(err)
//     }
//   })
// } else {

//   // Ta bort mapp
//   fs.rmdir('./NyMapp', err => {
//     if(err) console.log(err)
//   })
// }



// if(fs.existsSync('./mapp/text2.txt')) {

//   // Ta bort fil
//   fs.unlink('./mapp/text2.txt', err => {
//     if(err) {
//       console.log(err)
//       return
//     }

//     console.log('removed file')
//   })
// }


const path = require('path')

const pathname = path.join(__dirname, 'mapp', 'text.txt')

if(fs.existsSync(pathname)) {

  fs.appendFile(pathname, '\nNu lägger jag till text igen!', err => {
    console.log('done')
  })
  
}