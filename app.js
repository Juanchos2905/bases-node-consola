const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./helpers/yargs')

require('colors')
console.clear()

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(`Se ha creado el ${nombreArchivo}`))
  .catch(console.error)
