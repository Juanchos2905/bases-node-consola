const { crearArchivo } = require('./helpers/multiplicar')
require('colors')

console.clear()

const base = 5

crearArchivo(base)
  .then((nombreArchivo) => console.log(`Se ha creado el ${nombreArchivo}`))
  .catch(console.error)
