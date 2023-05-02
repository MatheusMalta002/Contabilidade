import fs from 'fs'
import csv from 'csv-parser'
import { Writable, Transform } from 'stream'
import filtroDados from './filtro.js'
import criaObjeto from './createObj.js';


function run(){

    const Municipios = {}

    const Estados = {}

    const arrayEstados = []

    const despesasEmpenhadasUF = {}


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

        filtroDados(rowData, Municipios, rowData['Coluna'], Estados, arrayEstados, despesasEmpenhadasUF)
        

        next()
      
    },})


    console.log('lendo arquivo...', Date())
    readableStreamFile
      .pipe(transformToObject)
      .pipe(transformToString)
      .pipe(writableStreamFile)
      .on('close', () => {console.log('Finalizou', Date())

      // console.log(somaArray(despesasEmpenhadasUF))

      // const  despesasJSON = JSON.stringify(despesasEmpenhadasUF)

      // fs.writeFile('arrayEstados.json', arrayEstadosJSON, err => {
      //       if (err) throw err;
      //       console.log('JSON saved to file'); 
      //   });

      // fs.writeFile('filtroDespesas.json', despesasJSON, err => {
      //   if (err) throw err;
      //   console.log('JSON saved to file'); 
    // });
    }) 

}





