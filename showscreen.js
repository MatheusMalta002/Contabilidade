

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
            const DESA_301 = document.getElementById("At_basica")
            const DESA_302 = document.getElementById("As_hospitalar")
            const DESA_303 = document.getElementById("Su_terapeutico")
            const DESA_304 = document.getElementById("Vi_sanitaria")
            const DESA_305 = document.getElementById("Vi_epidemiologica")
            const DESA_306 = document.getElementById("Al_nutricao")
            
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

            //Atenção Básica
            const desp_emp_sau_301 = municipios['Despesas Empenhadas']["Atenção Básica"]
            const resul_desp_emp_sau_301 = desp_emp_sau_301.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DESA_301.innerHTML= `<b>10.301 - Atenção Básica:</b> ${resul_desp_emp_sau_301}`

            //Saude Assistência Hospitalar e Ambulatorial
            const desp_emp_sau_302 = municipios['Despesas Empenhadas']['Assistência Hospitalar e Ambulatorial']
            const resul_desp_emp_sau_302 = desp_emp_sau_302.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DESA_302.innerHTML= `<b title="Assistência Hospitalar e Ambulatorial">10.302 - Ass. H. e Ambu.:</b> ${resul_desp_emp_sau_302}`

            //Saude Suporte Profilático e Terapêutico
            const desp_emp_sau_303 = municipios['Despesas Empenhadas']["Suporte Profilático e Terapêutico"]
            const resul_desp_emp_sau_303 = desp_emp_sau_303.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DESA_303.innerHTML= `<b title="Suporte Profilático e Terapêutico">10.303 - Sup. P. e Terap.:</b> ${resul_desp_emp_sau_303}`

            //Saude Vigilância Sanitária
            const desp_emp_sau_304 = municipios['Despesas Empenhadas']['Vigilância Sanitária']
            const resul_desp_emp_sau_304 = desp_emp_sau_304.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DESA_304.innerHTML= `<b title="Vigilância Sanitária">10.304 - Vigi. Sanit.:</b> ${resul_desp_emp_sau_304}`

            //Saude Vigilância Epidemiológica
            const desp_emp_sau_305 = municipios['Despesas Empenhadas']['Vigilância Epidemiológica']
            const resul_desp_emp_sau_305 = desp_emp_sau_305.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DESA_305.innerHTML= `<b title="Vigilância Epidemiológica">10.305 - Vigi. Epid.:</b> ${resul_desp_emp_sau_305}`

            //Saude  Alimentação e Nutrição
            const desp_emp_sau_306 = municipios['Despesas Empenhadas']['Alimentação e Nutrição']
            const resul_desp_emp_sau_306 = desp_emp_sau_306.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DESA_306.innerHTML= `<b title="Alimentação e Nutrição">10.306 - Alim. e Nutri.:</b> ${resul_desp_emp_sau_306}`

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
            const DLSA_301 = document.getElementById("At_basica_L")
            const DLSA_302 = document.getElementById("As_hospitalar_L")
            const DLSA_303 = document.getElementById("Su_terapeutico_L")
            const DLSA_304 = document.getElementById("Vi_sanitaria_L")
            const DLSA_305 = document.getElementById("Vi_epidemiologica_L")
            const DLSA_306 = document.getElementById("Al_nutricao_L")

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

            //Atenção Básica
            const desp_l_sau_301 = municipios['Despesas Liquidadas']["Atenção Básica"]
            const resul_desp_l_sau_301 = desp_l_sau_301.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DLSA_301.innerHTML= `<b>10.301 - Atenção Básica:</b> ${resul_desp_l_sau_301}`


            //Saude Assistência Hospitalar e Ambulatorial
            const desp_l_sau_302 = municipios['Despesas Liquidadas']['Assistência Hospitalar e Ambulatorial']
            const resul_desp_l_sau_302 = desp_l_sau_302.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DLSA_302.innerHTML= `<b title="Assistência Hospitalar e Ambulatorial">10.302 - Ass. H. e Ambu.:</b> ${resul_desp_l_sau_302}`

            //Saude Suporte Profilático e Terapêutico
            const desp_l_sau_303 = municipios['Despesas Liquidadas']["Suporte Profilático e Terapêutico"]
            const resul_desp_l_sau_303 = desp_l_sau_303.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DLSA_303.innerHTML= `<b title="Suporte Profilático e Terapêutico">10.303 - Sup. P. e Terap.:</b> ${resul_desp_l_sau_303}`

            //Saude Vigilância Sanitária
            const desp_l_sau_304 = municipios['Despesas Liquidadas']['Vigilância Sanitária']
            const resul_desp_l_sau_304 = desp_l_sau_304.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DLSA_304.innerHTML= `<b title="Vigilância Sanitária">10.304 - Vigi. Sanit.:</b> ${resul_desp_l_sau_304}`

            //Saude Vigilância Epidemiológica
            const desp_l_sau_305 = municipios['Despesas Liquidadas']['Vigilância Epidemiológica']
            const resul_desp_l_sau_305 = desp_l_sau_305.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DLSA_305.innerHTML= `<b title="Vigilância Epidemiológica">10.305 - Vigi. Epid.:</b> ${resul_desp_l_sau_305}`

            //Saude  Alimentação e Nutrição
            const desp_l_sau_306 = municipios['Despesas Liquidadas']['Alimentação e Nutrição']
            const resul_desp_l_sau_306 = desp_l_sau_306.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DLSA_306.innerHTML= `<b title="Alimentação e Nutrição">10.306 - Alim. e Nutri.:</b> ${resul_desp_l_sau_306}`


            //Adicionando Despesas Pagas//

            const DPS = document.getElementById("Desp_Pag_Seg")
            const DPA = document.getElementById("Desp_Pag_Ass")
            const DPP = document.getElementById("Desp_Pag_Prev")
            const DPSA = document.getElementById("Desp_Pag_Sau")
            const DPE = document.getElementById("Desp_Pag_Edu")
            const DPSA_301 = document.getElementById("At_basica_P")
            const DPSA_302 = document.getElementById("As_hospitalar_P")
            const DPSA_303 = document.getElementById("Su_terapeutico_P")
            const DPSA_304 = document.getElementById("Vi_sanitaria_P")
            const DPSA_305 = document.getElementById("Vi_epidemiologica_P")
            const DPSA_306 = document.getElementById("Al_nutricao_P")

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

            const desp_p_sau_301 = municipios['Despesas Pagas']["Atenção Básica"]
            const resul_desp_p_sau_301 = desp_p_sau_301.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DPSA_301.innerHTML= `<b>10.301 - Atenção Básica:</b> ${resul_desp_p_sau_301}`

            const desp_p_sau_302 = municipios['Despesas Pagas']["Assistência Hospitalar e Ambulatorial"]
            const resul_desp_p_sau_302 = desp_p_sau_302.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DPSA_302.innerHTML= `<b title="Assistência Hospitalar e Ambulatorial">10.302 - Ass. H. e Ambu.:</b> ${resul_desp_p_sau_302}`

            const desp_p_sau_303 = municipios['Despesas Pagas']["Suporte Profilático e Terapêutico"]
            const resul_desp_p_sau_303 = desp_p_sau_303.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DPSA_303.innerHTML= `<b title="Suporte Profilático e Terapêutico">10.303 - Sup. P. e Terap.:</b> ${resul_desp_p_sau_303}`

            const desp_p_sau_304 = municipios['Despesas Pagas']["Vigilância Sanitária"]
            const resul_desp_p_sau_304 = desp_p_sau_304.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DPSA_304.innerHTML= `<b title="Vigilância Sanitária">10.304 - Vigi. Sanit.:</b> ${resul_desp_p_sau_304}`

            const desp_p_sau_305 = municipios['Despesas Pagas']['Vigilância Epidemiológica']
            const resul_desp_p_sau_305 = desp_p_sau_305.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DPSA_305.innerHTML= `<b title="Vigilância Epidemiológica">10.305 - Vigi. Epid.:</b> ${resul_desp_p_sau_305}`

            const desp_p_sau_306 = municipios['Despesas Pagas']['Alimentação e Nutrição']
            const resul_desp_p_sau_306 = desp_p_sau_306.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            DPSA_306.innerHTML= `<b title="Alimentação e Nutrição">10.306 - Alim. e Nutri.:</b> ${resul_desp_p_sau_306}`

            const IRPNP_Seg = document.getElementById("IRPNP_Seg")
            const IRPNP_Ass = document.getElementById("IRPNP_Ass")
            const IRPNP_Prev = document.getElementById("IRPNP_Prev")
            const IRPNP_Sau = document.getElementById("IRPNP_Sau")
            const IRPNP_Edu = document.getElementById("IRPNP_Edu")
            const IRPNP_301 = document.getElementById("At_basicaN")
            const IRPNP_302 = document.getElementById("As_hospitalarN")
            const IRPNP_303 = document.getElementById("Su_terapeuticoN")
            const IRPNP_304 = document.getElementById("Vi_sanitariaN")
            const IRPNP_305 = document.getElementById("Vi_epidemiologicaN")
            const IRPNP_306 = document.getElementById("Al_nutricaoN")


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

             //SUBFUNÇÕES DA SAUDE

             const irpnp_301 = municipios['Inscrição de Restos a Pagar Não Processados']["Atenção Básica"]
             const resul_irpnp_301 = irpnp_301.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
             IRPNP_301.innerHTML= `<b>10.301 - Atenção Básica:</b> ${resul_irpnp_301}`

             const irpnp_302 = municipios['Inscrição de Restos a Pagar Não Processados']["Assistência Hospitalar e Ambulatorial"]
             const resul_irpnp_302 = irpnp_302.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
             IRPNP_302.innerHTML= `<b title="Assistência Hospitalar e Ambulatorial">10.302 - Ass. H. e Ambu.:</b> ${resul_irpnp_302}`

             const irpnp_303 = municipios['Inscrição de Restos a Pagar Não Processados']["Suporte Profilático e Terapêutico"]
             const resul_irpnp_303 = irpnp_303.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
             IRPNP_303.innerHTML= `<b title="Suporte Profilático e Terapêutico">10.303 - Sup. P. e Terap.:</b> ${resul_irpnp_303}`

             const irpnp_304 = municipios['Inscrição de Restos a Pagar Não Processados']["Vigilância Sanitária"]
             const resul_irpnp_304 = irpnp_304.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
             IRPNP_304.innerHTML= `<b title="Vigilância Sanitária">10.304 - Vigi. Sanit.:</b> ${resul_irpnp_304}`

             const irpnp_305 = municipios['Inscrição de Restos a Pagar Não Processados']['Vigilância Epidemiológica']
             const resul_irpnp_305 = irpnp_305.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
             IRPNP_305.innerHTML= `<b title="Vigilância Epidemiológica">10.305 - Vigi. Epide.:</b> ${resul_irpnp_305}`

             const irpnp_306 = municipios['Inscrição de Restos a Pagar Não Processados']['Alimentação e Nutrição']
             const resul_irpnp_306 = irpnp_306.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
             IRPNP_306.innerHTML= `<b title="Alimentação e Nutrição">10.306 - Alime. e Nutri.:</b> ${resul_irpnp_306}`


             const IRPP_Seg = document.getElementById("IRPP_Seg")
             const IRPP_Ass = document.getElementById("IRPP_Ass")
             const IRPP_Prev = document.getElementById("IRPP_Prev")
             const IRPP_Sau = document.getElementById("IRPP_Sau")
             const IRPP_Edu = document.getElementById("IRPP_Edu")
             const IRPP_301 = document.getElementById("At_basica_LP")
             const IRPP_302 = document.getElementById("As_hospitalar_LP")
             const IRPP_303 = document.getElementById("Su_terapeutico_LP")
             const IRPP_304 = document.getElementById("Vi_sanitaria_LP")
             const IRPP_305 = document.getElementById("Vi_epidemiologica_LP")
             const IRPP_306 = document.getElementById("Al_nutricao_LP")
 
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

              const irpp_301= municipios['Inscrição de Restos a Pagar Processados']["Atenção Básica"]
              const resul_irpp_301 = irpp_301.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              IRPP_301.innerHTML= `<b>10.301 - Atenção Básica:</b> ${resul_irpp_301}`

              const irpp_302= municipios['Inscrição de Restos a Pagar Processados']["Assistência Hospitalar e Ambulatorial"]
              const resul_irpp_302 = irpp_302.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              IRPP_302.innerHTML= `<b title="Assistência Hospitalar e Ambulatorial">10.302 - Ass. H. e Ambu.:</b> ${resul_irpp_302}`

              const irpp_303= municipios['Inscrição de Restos a Pagar Processados']["Suporte Profilático e Terapêutico"]
              const resul_irpp_303 = irpp_303.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              IRPP_303.innerHTML= `<b title="Suporte Profilático e Terapêutico">10.303 - Sup. P. e Terap.:</b> ${resul_irpp_303}`

              const irpp_304= municipios['Inscrição de Restos a Pagar Processados']["Vigilância Sanitária"]
              const resul_irpp_304 = irpp_304.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              IRPP_304.innerHTML= `<b title="Vigilância Sanitária">10.304 - Vigi. Sanit.:</b> ${resul_irpp_304}`

              const irpp_305= municipios['Inscrição de Restos a Pagar Processados']["Vigilância Epidemiológica"]
              const resul_irpp_305 = irpp_305.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              IRPP_305.innerHTML= `<b title="Vigilância Epidemiológica">10.305 - Vigi. Epide.:</b> ${resul_irpp_305}`

              const irpp_306= municipios['Inscrição de Restos a Pagar Processados']["Alimentação e Nutrição"]
              const resul_irpp_306 = irpp_306.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              IRPP_306.innerHTML= `<b title="Alimentação e Nutrição">10.306 - Alime. e Nutri.:</b> ${resul_irpp_306}`
            


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












