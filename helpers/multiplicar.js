const fs = require('fs')

const crearArchivo = async (base) => {
  try {
    console.log('=================')
    console.log('   Tabla del ', base)
    console.log('=================')

    let tabla = ''

    console.log(' _____________')
    for (let i = 1; i < 11; i++) {
      tabla += `| ${base.toString().yellow} x ${i} = ${
        (base * i).toString().rainbow
      }\n`
    }

    console.log(tabla)
    console.log('---------------')

    const nombreArchivo = `tabla-${base}.txt`

    fs.writeFile(`tabla-${base}.txt`, tabla, (err) => {
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
