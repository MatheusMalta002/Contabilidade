function filtroDados(linha, Municipios, coluna){

    const arrayS = linha['Instituicao'].split(' - ')

    const cidade = arrayS[0]

    const arraySeparador = linha['Conta'].split(' - ')

    const funcao = Number(arraySeparador[0])


    if(arraySeparador.length == 1){
            null;                  //tratar quando não tiver nenhum numero
    }else{

        if(coluna == 'Despesas Empenhadas' || coluna == 'Despesas Liquidadas' || coluna == 'Despesas Pagas'){

            //SEGURANÇA PÚBLICA
            if(funcao == 6){

                const valorSoma = linha['Valor'].replace(/\./g, '')

                const valorFinal = valorSoma.replace(',', ".")

                Municipios[cidade][coluna]["Segurança Pública"] += Number(valorFinal)             
            }
            
            //ASSISTÊNCIA SOCIAL
            if(funcao == 8){

                const valorSoma = linha['Valor'].replace(/\./g, '')

                const valorFinal = valorSoma.replace(',', ".")

                Municipios[cidade][coluna]["Assistência Social"] += Number(valorFinal)
                Municipios[cidade]['Seguridade Social'] += Number(valorFinal)
            }

            //PREVIDÊNCIA SOCIAL
            if(funcao == 9){

                const valorSoma = linha['Valor'].replace(/\./g, '')
                const valorFinal = valorSoma.replace(',', ".")

                Municipios[cidade][coluna]["Previdência Social"] += Number(valorFinal)
                Municipios[cidade]["Seguridade Social"] += Number(valorFinal)
            }

            // SAÚDE
            if(funcao == 10){

                const valorSoma = linha['Valor'].replace(/\./g, '')

                const valorFinal = valorSoma.replace(',', ".")

                Municipios[cidade][coluna]["Saúde"] += Number(valorFinal)
                Municipios[cidade]["Seguridade Social"] += Number(valorFinal)
            }

            //EDUCAÇÃO
            if(funcao == 12){

                const valorSoma = linha['Valor'].replace(/\./g, '')

                const valorFinal = valorSoma.replace(',', ".")

                Municipios[cidade][coluna]["Educação"] += Number(valorFinal)
            }

        }
    }

}
    

export default filtroDados;
