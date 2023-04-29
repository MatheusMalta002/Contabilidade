import fs from 'fs'
import csv from 'csv-parser'
import { Writable, Transform } from 'stream'
import filtroDados from './filtro.js'
import criaObjeto from './createObj.js';



const Municipios = {}


const readableStreamFile = fs.createReadStream('paia.csv')
const transformToObject = csv({ separator: ',' })

const transformToString = new Transform({

  objectMode: true,

  transform(chunk, encoding, callback) {

    callback(null, JSON.stringify(chunk))
  },

})


const writableStreamFile = new Writable({

  write(chunk, encoding, next) {

    const stringifyer = chunk.toString()
    const rowData = JSON.parse(stringifyer)


    criaObjeto(Municipios, rowData)

    filtroDados(rowData, Municipios, rowData['Coluna'])
    

    next()
  
},})



console.log('lendo arquivo...', Date())
readableStreamFile
  .pipe(transformToObject)
  .pipe(transformToString)
  .pipe(writableStreamFile)
  .on('close', () => {console.log('Finalizou', Date()), console.log(Municipios['Prefeitura Municipal de Calçoene'])
  }) //Botei essa prefeitura pra ela imprimir só um valor
  // se quiser que imprime tudo é só deixar console.log(Municipios).


