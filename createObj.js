function criaObjeto(Municipios, linha){

    const arrayS = linha['Instituicao'].split(' - ')

    const cidade = arrayS[0]

    if(!Municipios[cidade]){

        Municipios[cidade] = {
            'Despesas Empenhadas': {
            "Segurança Pública": 0,
            "Assistência Social": 0,
            "Previdência Social": 0,
            "Saúde": 0,
            "Educação": 0},

            'Despesas Liquidadas': {
                "Segurança Pública": 0,
                "Assistência Social": 0,
                "Previdência Social": 0,
                "Saúde": 0,
                "Educação": 0},


            'Despesas Pagas': {
                "Segurança Pública": 0,
                "Assistência Social": 0,
                "Previdência Social": 0,
                "Saúde": 0,
                "Educação": 0},
<<<<<<< HEAD

            'Inscrição de Restos a Pagar Processados':{
                "Segurança Pública": 0,
                "Assistência Social": 0,
                "Previdência Social": 0,
                "Saúde": 0,
                "Educação": 0
            },
            

            'Inscrição de Restos a Pagar Não Processados': {
                "Segurança Pública": 0,
                "Assistência Social": 0,
                "Previdência Social": 0,
                "Saúde": 0,
                "Educação": 0
            },

            'Seguridade Social': 0,
        
        }
=======
            
            'Seguridade Social': 0,

            'Inscrição de Restos a Pagar Não Processados': 0}
>>>>>>> c73c878d8528b562d4b7bcf506cad3e84d28168d
    }

}

<<<<<<< HEAD

=======
>>>>>>> c73c878d8528b562d4b7bcf506cad3e84d28168d
export default criaObjeto;