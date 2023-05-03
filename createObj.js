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
            "Educação": 0,
            "Atenção Básica": 0,
            "Assistência Hospitalar e Ambulatorial": 0,
            "Suporte Profilático e Terapêutico": 0,
            "Vigilância Sanitária": 0,
            "Vigilância Epidemiológica": 0,
            "Alimentação e Nutrição": 0},

            'Despesas Liquidadas': {
                "Segurança Pública": 0,
                "Assistência Social": 0,
                "Previdência Social": 0,
                "Saúde": 0,
                "Educação": 0,
                "Atenção Básica": 0,
                "Assistência Hospitalar e Ambulatorial": 0,
                "Suporte Profilático e Terapêutico": 0,
                "Vigilância Sanitária": 0,
                "Vigilância Epidemiológica": 0,
                "Alimentação e Nutrição": 0},


            'Despesas Pagas': {
                "Segurança Pública": 0,
                "Assistência Social": 0,
                "Previdência Social": 0,
                "Saúde": 0,
                "Educação": 0,
                "Atenção Básica": 0,
                "Assistência Hospitalar e Ambulatorial": 0,
                "Suporte Profilático e Terapêutico": 0,
                "Vigilância Sanitária": 0,
                "Vigilância Epidemiológica": 0,
                "Alimentação e Nutrição": 0},

            'Inscrição de Restos a Pagar Processados':{
                "Segurança Pública": 0,
                "Assistência Social": 0,
                "Previdência Social": 0,
                "Saúde": 0,
                "Educação": 0,
                "Atenção Básica": 0,
                "Assistência Hospitalar e Ambulatorial": 0,
                "Suporte Profilático e Terapêutico": 0,
                "Vigilância Sanitária": 0,
                "Vigilância Epidemiológica": 0,
                "Alimentação e Nutrição": 0
            },
            

            'Inscrição de Restos a Pagar Não Processados': {
                "Segurança Pública": 0,
                "Assistência Social": 0,
                "Previdência Social": 0,
                "Saúde": 0,
                "Educação": 0,
                "Atenção Básica": 0,
                "Assistência Hospitalar e Ambulatorial": 0,
                "Suporte Profilático e Terapêutico": 0,
                "Vigilância Sanitária": 0,
                "Vigilância Epidemiológica": 0,
                "Alimentação e Nutrição": 0
            },

            'Seguridade Social': 0,
        
        }
    }

}

export default criaObjeto;