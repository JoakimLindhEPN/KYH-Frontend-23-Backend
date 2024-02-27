const path = require('path')

// console.log(__dirname)
// console.log(path.dirname(__filename))
// console.log(path.extname(__filename))


// Absolut sökväg = hela vägen från Root mappen på datorn - C:\Users\joaki\Documents\Utbildning\KYH\KYHSFE23\Backend\Lektion-1\2-modules\mapp\index.html
// Relativ sökväg = relativ från där filen ligger - ./mapp/index.html
const pathname = path.join(__dirname, 'mapp', 'index.html')

console.log(pathname)