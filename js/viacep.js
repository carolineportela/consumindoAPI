'use strict'

export const pesquisarCep = async (cepPesquisa) => {
    const url = `https://viacep.com.br/ws/${cepPesquisa}/json/`

    // o fetch faz a requisicoa pela url
    const response = await fetch(url)

    //await é o que aguarda a promessa,ele aguarda pq nem toda promessa é comprida.
    const data = await response.json()

    

    // console.log('Dados da API: ', data);

    return {
        logradouro: data.logradouro,
        bairro :data.bairro,
        municipio : data.localidade,
        estado : data.uf
    }

}