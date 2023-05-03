

function filtroDados(linha, Municipios, coluna, Estados, arrayEstados, despesasEmpenhadasUF){

    const arrayS = linha['Instituicao'].split(' - ')

    const cidade = arrayS[0]

    const arraySeparador = linha['Conta'].split(' - ')

    const funcao = Number(arraySeparador[0])

    const UF = linha['UF']

    UF in Estados ? null : Estados[UF] = []

    Estados[UF].includes(cidade) ? null : Estados[UF].push(cidade)

    arrayEstados.includes(UF) ? null : arrayEstados.push(UF)


    if(arraySeparador.length == 1){
            // console.log()          //tratar quando não tiver nenhum numero
    }else{

        if(coluna == 'Despesas Empenhadas' || coluna == 'Despesas Liquidadas' || coluna == 'Despesas Pagas' ){

            //SEGURANÇA PÚBLICA
            if(funcao == 6){

                const valorSoma = linha['Valor'].replace(/\./g, '')

                const valorFinal = valorSoma.replace(',', ".")

                Municipios[cidade][coluna]["Segurança Pública"] += Number(valorFinal)

                if(coluna == 'Despesas Empenhadas'){

                    UF in despesasEmpenhadasUF ? null : despesasEmpenhadasUF[UF] = []

                    despesasEmpenhadasUF[UF].push(valorFinal)
                }
                
                
            }
            
            //ASSISTÊNCIA SOCIAL
            if(funcao == 8){

                const valorSoma = linha['Valor'].replace(/\./g, '')

                const valorFinal = valorSoma.replace(',', ".")

                Municipios[cidade][coluna]["Assistência Social"] += Number(valorFinal)

                if(coluna == 'Despesas Empenhadas'){
                    Municipios[cidade]['Seguridade Social'] += Number(valorFinal)
                    UF in despesasEmpenhadasUF ? null : despesasEmpenhadasUF[UF] = []
                    despesasEmpenhadasUF[UF].push(valorFinal)
                }
                
            }

            //PREVIDÊNCIA SOCIAL
            if(funcao == 9){

                const valorSoma = linha['Valor'].replace(/\./g, '')
                const valorFinal = valorSoma.replace(',', ".")

                Municipios[cidade][coluna]["Previdência Social"] += Number(valorFinal)

                if(coluna == 'Despesas Empenhadas'){
                    Municipios[cidade]["Seguridade Social"] += Number(valorFinal)
                    UF in despesasEmpenhadasUF ? null : despesasEmpenhadasUF[UF] = []
                    despesasEmpenhadasUF[UF].push(valorFinal)
                }
                
            }

            // SAÚDE
            if(funcao == 10){

                const valorSoma = linha['Valor'].replace(/\./g, '')

                const valorFinal = valorSoma.replace(',', ".")

                Municipios[cidade][coluna]["Saúde"] += Number(valorFinal)

                if(coluna == 'Despesas Empenhadas'){
                    Municipios[cidade]["Seguridade Social"] += Number(valorFinal)
                    UF in despesasEmpenhadasUF ? null : despesasEmpenhadasUF[UF] = []
                    despesasEmpenhadasUF[UF].push(valorFinal)
                }
            }

            if(funcao == 10.301){

                    const valorSoma = linha['Valor'].replace(/\./g, '')
    
                    const valorFinal = valorSoma.replace(',', ".")

                    Municipios[cidade][coluna]["Atenção Básica"] += Number(valorFinal)        
    
                }
            
            if(funcao == 10.302){

                    const valorSoma = linha['Valor'].replace(/\./g, '')
    
                    const valorFinal = valorSoma.replace(',', ".")
    
                    Municipios[cidade][coluna]["Assistência Hospitalar e Ambulatorial"] += Number(valorFinal)
    
                }

            if(funcao == 10.303){

                    const valorSoma = linha['Valor'].replace(/\./g, '')
    
                    const valorFinal = valorSoma.replace(',', ".")
    
                    Municipios[cidade][coluna]["Suporte Profilático e Terapêutico"] += Number(valorFinal)
    
                }

            if(funcao == 10.304){

                    const valorSoma = linha['Valor'].replace(/\./g, '')
    
                    const valorFinal = valorSoma.replace(',', ".")
    
                    Municipios[cidade][coluna]["Vigilância Sanitária"] += Number(valorFinal)
    
                }

            if(funcao == 10.305){

                    const valorSoma = linha['Valor'].replace(/\./g, '')
    
                    const valorFinal = valorSoma.replace(',', ".")
    
                    Municipios[cidade][coluna]["Vigilância Epidemiológica"] += Number(valorFinal)
    
                }

            if(funcao == 10.306){

                    const valorSoma = linha['Valor'].replace(/\./g, '')
    
                    const valorFinal = valorSoma.replace(',', ".")
    
                    Municipios[cidade][coluna]["Alimentação e Nutrição"] += Number(valorFinal)
    
                }
                
                
            

            //EDUCAÇÃO
            if(funcao == 12){

                const valorSoma = linha['Valor'].replace(/\./g, '')

                const valorFinal = valorSoma.replace(',', ".")

                Municipios[cidade][coluna]["Educação"] += Number(valorFinal)
                
                if(coluna == 'Despesas Empenhadas'){

                    UF in despesasEmpenhadasUF ? null : despesasEmpenhadasUF[UF] = []
                    despesasEmpenhadasUF[UF].push(valorFinal)
                }
            }

        }

        if(coluna == 'Inscrição de Restos a Pagar Processados' ||  coluna == 'Inscrição de Restos a Pagar Não Processados'){

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
            }

            //PREVIDÊNCIA SOCIAL
            if(funcao == 9){

                const valorSoma = linha['Valor'].replace(/\./g, '')
                const valorFinal = valorSoma.replace(',', ".")

                Municipios[cidade][coluna]["Previdência Social"] += Number(valorFinal)
            }

            // SAÚDE
            if(funcao == 10){

                const valorSoma = linha['Valor'].replace(/\./g, '')

                const valorFinal = valorSoma.replace(',', ".")

                Municipios[cidade][coluna]["Saúde"] += Number(valorFinal)
            }

            if(funcao == 10.301){

                const valorSoma = linha['Valor'].replace(/\./g, '')

                const valorFinal = valorSoma.replace(',', ".")

                Municipios[cidade][coluna]["Atenção Básica"] += Number(valorFinal)

            }
        
            if(funcao == 10.302){

                    const valorSoma = linha['Valor'].replace(/\./g, '')

                    const valorFinal = valorSoma.replace(',', ".")

                    Municipios[cidade][coluna]["Assistência Hospitalar e Ambulatorial"] += Number(valorFinal)

                }

            if(funcao == 10.303){

                    const valorSoma = linha['Valor'].replace(/\./g, '')

                    const valorFinal = valorSoma.replace(',', ".")

                    Municipios[cidade][coluna]["Suporte Profilático e Terapêutico"] += Number(valorFinal)

                }

            if(funcao == 10.304){

                    const valorSoma = linha['Valor'].replace(/\./g, '')

                    const valorFinal = valorSoma.replace(',', ".")

                    Municipios[cidade][coluna]["Vigilância Sanitária"] += Number(valorFinal)

                }

            if(funcao == 10.305){

                    const valorSoma = linha['Valor'].replace(/\./g, '')

                    const valorFinal = valorSoma.replace(',', ".")

                    Municipios[cidade][coluna]["Vigilância Epidemiológica"] += Number(valorFinal)

                }

            if(funcao == 10.306){

                    const valorSoma = linha['Valor'].replace(/\./g, '')

                    const valorFinal = valorSoma.replace(',', ".")

                    Municipios[cidade][coluna]["Alimentação e Nutrição"] += Number(valorFinal)

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
