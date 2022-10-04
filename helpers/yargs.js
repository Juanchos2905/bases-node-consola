const argv = require('yargs')
  .option('b', {
    alias: 'ba se',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Listar o no la tabla de multiplicar',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Hasta donde quiero multiplicar',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base debe ser númerica'
    }
    if (isNaN(argv.h)) {
      throw "La variable 'hasta' debe ser númerica"
    }
    return true
  }).argv

module.exports = argv
