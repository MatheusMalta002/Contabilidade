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
            
            'Seguridade Social': 0,

            'Inscrição de Restos a Pagar Não Processados': 0}
    }

}

export default criaObjeto;