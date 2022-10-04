const fs = require('fs')
const { argv } = require('process')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let tabla = ''
    let tablArchivo = ''

    console.log(' _____________')
    for (let i = 1; i <= hasta; i++) {
      tabla += `${'|'.red} ${base.toString().yellow} x ${i.toString().cyan} = ${
        (base * i).toString().rainbow
      }\n`
      tablArchivo += `| ${base} x ${i} = ${base * i} \n`
    }

    if (listar == true) {
      console.log('================='.red)
      console.log('   Tabla del '.cyan, base.toString().cyan)
      console.log('================='.red)
      console.log(tabla)
      console.log('---------------'.red)
    }

    const nombreArchivo = `tabla-${base}.txt`

    fs.writeFile(`./tablas/${nombreArchivo}`, tablArchivo, (err) => {
      if (err) throw err
    })

    return nombreArchivo
  } catch (error) {
    throw error
  }
}

module.exports = {
  crearArchivo,
}
