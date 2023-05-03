

function dataTable(cidade){

    fetch('./arquivos_json/municipios.json')
          .then(response => response.json())
          .then(Municipios => {

            const municipios = Municipios[cidade]

            //Adicionando Despesas Empenhadas na web//

            const DES = document.getElementById("Desp_Emp_Seg")
            const DEA = document.getElementById("Desp_Emp_Ass")
            const DEP = document.getElementById("Desp_Emp_Prev")
            const DESA = document.getElementById("Desp_Emp_Sau")
            const DEE = document.getElementById("Desp_Emp_Edu")
            
            //Segurança
            const desp_emp_seg = municipios['Despesas Empenhadas']['Segurança Pública']
            const resul_desp_emp_seg = desp_emp_seg.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DES.innerHTML= `<b>06 - Segurança Pública:</b> ${resul_desp_emp_seg}`

            //Assistencia social
            const desp_emp_ass = municipios['Despesas Empenhadas']['Assistência Social']
            const resul_desp_emp_ass = desp_emp_ass.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DEA.innerHTML= `<b>08 - Assistência Social:</b> ${resul_desp_emp_ass}`

            //Previdencia social
            const desp_emp_prev = municipios['Despesas Empenhadas']['Previdência Social']
            const resul_desp_emp_prev = desp_emp_prev.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DEP.innerHTML= `<b>09 - Previdência Social:</b> ${resul_desp_emp_prev}`
            
            //Saude
            const desp_emp_sau = municipios['Despesas Empenhadas']['Saúde']
            const resul_desp_emp_sau = desp_emp_sau.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DESA.innerHTML= `<b>10 - Saúde:</b> ${resul_desp_emp_sau}`

            //Educaçao
            const desp_emp_edu = municipios['Despesas Empenhadas']['Educação']
            const resul_desp_emp_edu = desp_emp_edu.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DEE.innerHTML= `<b>12 - Educação:</b> ${resul_desp_emp_edu}`

            //Adicionando despesas liquidadas//

            const DLS = document.getElementById("Desp_Liq_Seg")
            const DLA = document.getElementById("Desp_Liq_Ass")
            const DLP = document.getElementById("Desp_Liq_Prev")
            const DLSA = document.getElementById("Desp_Liq_Sau")
            const DLE = document.getElementById("Desp_Liq_Edu")

            //Segurança
            const desp_liq_seg = municipios['Despesas Liquidadas']['Segurança Pública']
            const resul_desp_liq_seg = desp_liq_seg.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DLS.innerHTML= `<b>06 - Segurança Pública:</b> ${resul_desp_liq_seg}`

            //Assistencia social
            const desp_liq_ass = municipios['Despesas Liquidadas']['Assistência Social']
            const resul_desp_liq_ass = desp_liq_ass.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DLA.innerHTML= `<b>08 - Assistência Social:</b> ${resul_desp_liq_ass}`

            //Previdencia social
            const desp_liq_prev = municipios['Despesas Liquidadas']['Previdência Social']
            const resul_desp_liq_prev = desp_liq_prev.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DLP.innerHTML= `<b>09 - Previdência Social:</b> ${resul_desp_liq_prev}`
            
            //Saude
            const desp_liq_sau = municipios['Despesas Liquidadas']['Saúde']
            const resul_desp_liq_sau = desp_liq_sau.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DLSA.innerHTML= `<b>10 - Saúde:</b> ${resul_desp_liq_sau}`

            //Educaçao
            const desp_liq_edu = municipios['Despesas Liquidadas']['Educação']
            const resul_desp_liq_edu = desp_liq_edu.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DLE.innerHTML= `<b>12 - Educação:</b> ${resul_desp_liq_edu}`


            //Adicionando Despesas Pagas//

            const DPS = document.getElementById("Desp_Pag_Seg")
            const DPA = document.getElementById("Desp_Pag_Ass")
            const DPP = document.getElementById("Desp_Pag_Prev")
            const DPSA = document.getElementById("Desp_Pag_Sau")
            const DPE = document.getElementById("Desp_Pag_Edu")

            //Segurança
            const desp_pag_seg = municipios['Despesas Pagas']['Segurança Pública']
            const resul_desp_pag_seg = desp_pag_seg.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DPS.innerHTML= `<b>06 - Segurança Pública:</b> ${resul_desp_pag_seg}`

            //Assistencia social
            const desp_pag_ass = municipios['Despesas Pagas']['Assistência Social']
            const resul_desp_pag_ass = desp_pag_ass.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DPA.innerHTML= `<b>08 - Assistência Social:</b> ${resul_desp_pag_ass}`

            //Previdencia social
            const desp_pag_prev = municipios['Despesas Pagas']['Previdência Social']
            const resul_desp_pag_prev = desp_pag_prev.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DPP.innerHTML= `<b>09 - Previdência Social:</b> ${resul_desp_pag_prev}`
            
            //Saude
            const desp_pag_sau = municipios['Despesas Pagas']['Saúde']
            const resul_desp_pag_sau = desp_pag_sau.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DPSA.innerHTML= `<b>10 - Saúde:</b> ${resul_desp_pag_sau}`

            //Educaçao
            const desp_pag_edu = municipios['Despesas Pagas']['Educação']
            const resul_desp_pag_edu = desp_pag_edu.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DPE.innerHTML= `<b>12 - Educação:</b> ${resul_desp_pag_edu}`

            const IRPNP_Seg = document.getElementById("IRPNP_Seg")
            const IRPNP_Ass = document.getElementById("IRPNP_Ass")
            const IRPNP_Prev = document.getElementById("IRPNP_Prev")
            const IRPNP_Sau = document.getElementById("IRPNP_Sau")
            const IRPNP_Edu = document.getElementById("IRPNP_Edu")

             //Segurança
             const irpnp_seg = municipios['Inscrição de Restos a Pagar Não Processados']['Segurança Pública']
             const resul_irpnp_seg = irpnp_seg.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
             IRPNP_Seg.innerHTML= `<b>06 - Segurança Pública:</b> ${resul_irpnp_seg}`
 
             //Assistencia social
             const irpnp_ass = municipios['Inscrição de Restos a Pagar Não Processados']['Assistência Social']
             const resul_irpnp_ass = irpnp_ass.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
             IRPNP_Ass.innerHTML= `<b>08 - Assistência Social:</b> ${resul_irpnp_ass}`
 
             //Previdencia social
             const irpnp_prev = municipios['Inscrição de Restos a Pagar Não Processados']['Previdência Social']
             const resul_irpnp_prev = irpnp_prev.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
             IRPNP_Prev.innerHTML= `<b>09 - Previdência Social:</b> ${resul_irpnp_prev}`
             
             //Saude
             const irpnp_sau = municipios['Inscrição de Restos a Pagar Não Processados']['Saúde']
             const resul_irpnp_sau= irpnp_sau.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
             IRPNP_Sau.innerHTML= `<b>10 - Saúde:</b> ${resul_irpnp_sau}`
 
             //Educaçao
             const irpnp_edu= municipios['Inscrição de Restos a Pagar Não Processados']['Educação']
             const resul_irpnp_edu = irpnp_edu.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
             IRPNP_Edu.innerHTML= `<b>12 - Educação:</b> ${resul_irpnp_edu}`


             const IRPP_Seg = document.getElementById("IRPP_Seg")
             const IRPP_Ass = document.getElementById("IRPP_Ass")
             const IRPP_Prev = document.getElementById("IRPP_Prev")
             const IRPP_Sau = document.getElementById("IRPP_Sau")
             const IRPP_Edu = document.getElementById("IRPP_Edu")
 
              //Segurança
              const irpp_seg = municipios['Inscrição de Restos a Pagar Processados']['Segurança Pública']
              const resul_irpp_seg = irpp_seg.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              IRPP_Seg.innerHTML= `<b>06 - Segurança Pública:</b> ${resul_irpp_seg}`
  
              //Assistencia social
              const irpp_ass = municipios['Inscrição de Restos a Pagar Processados']['Assistência Social']
              const resul_irpp_ass = irpp_ass.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              IRPP_Ass.innerHTML= `<b>08 - Assistência Social:</b> ${resul_irpp_ass}`
  
              //Previdencia social
              const irpp_prev = municipios['Inscrição de Restos a Pagar Processados']['Previdência Social']
              const resul_irpp_prev = irpp_prev.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              IRPP_Prev.innerHTML= `<b>09 - Previdência Social:</b> ${resul_irpp_prev}`
              
              //Saude
              const irpp_sau = municipios['Inscrição de Restos a Pagar Processados']['Saúde']
              const resul_irpp_sau= irpp_sau.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              IRPP_Sau.innerHTML= `<b>10 -Saúde:</b> ${resul_irpp_sau}`
  
              //Educaçao
              const irpp_edu= municipios['Inscrição de Restos a Pagar Processados']['Educação']
              const resul_irpp_edu = irpp_edu.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              IRPP_Edu.innerHTML= `<b>12 - Educação:</b> ${resul_irpp_edu}`


              //Seguridade Social

              const Seg_Social = document.getElementById("Seg_Social")

              const sc = municipios['Seguridade Social']
              const resul_sc = sc.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              Seg_Social.innerHTML= `<b>Seguridade Social:</b> ${resul_sc}`

}); 


}


function somaArray(obj, estado){

    let resultad = 0
  
    obj[estado].map((el)=>{
      resultad +=Number(el)
    })
  
    return resultad
  }



//Pega do arquivo arrayEstados todos os estados e cria um option pra cada

function dataStates(){

    fetch('./arquivos_json/arrayEstados.json')
        .then(response => response.json())
        .then(arrayStates => {
        
        const uf = document.getElementById("uf")
        
        arrayStates.sort()
        arrayStates.map((el)=>{

        const newElement = document.createElement("option")
        newElement.innerHTML= el
        newElement.setAttribute("value", `${el}`)
        uf.appendChild(newElement)

        })
    })
}



// recebe o estado que foi clicado e cria um novo array com as cidades
function dataCity(estadoSelecionado){

    fetch('./arquivos_json/estados.json')
        .then(response => response.json())
        .then(estados => {
            
        const arrayEstado = estados[estadoSelecionado].sort() 
        const city = document.getElementById("city")
        

        while (city.firstChild) {

            city.removeChild(city.firstChild);
        }

        const firstElement = document.createElement("option")
        firstElement.innerHTML='Selecione um Município'
        firstElement.disabled=true
        firstElement.selected=true
        city.appendChild(firstElement)

        arrayEstado.map((el)=>{
            const newElement = document.createElement("option")
            newElement.innerHTML= el
            newElement.setAttribute("value", `${el}`)
            newElement.setAttribute("id", "cidade")
            city.appendChild(newElement)
        })

    })

}



const selectState = document.getElementById('uf');

    selectState.addEventListener('change', (event) => {
        const opcaoSelecionada = event.target.value;

        const uf = document.getElementById("nome_estado")
        uf.innerHTML=`Estado: ${opcaoSelecionada}`
  
        dataCity(opcaoSelecionada)

        fetch('./arquivos_json/filtroDespesas.json')
        .then(response => response.json())
        .then(despesasEmpenhadas => { 

            const resultado = somaArray(despesasEmpenhadas, opcaoSelecionada)

            const res = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

            const resultado_total = document.getElementById("DE_total")
            resultado_total.innerHTML=res
        })



        
});

function run(){

    const selectElement = document.getElementById('city');

    selectElement.addEventListener('change', (event) => {

        const opcaoSelecionada = event.target.value;

        const botao = document.getElementById("botao");

        botao.addEventListener("click", () => {

        dataTable(opcaoSelecionada)

        const tagname = document.getElementById("nome_Municipio")

        tagname.innerHTML=opcaoSelecionada


    });
    
});

}

dataStates()
run()












