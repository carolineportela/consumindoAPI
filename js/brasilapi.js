'use strict'

export const pesquisarCep = async (cepPesquisa) => {
    const url = `https://brasilapi.com.br/api/cep/v1/{${cepPesquisa}}`

    // o fetch faz a requisicoa pela url
    const response = await fetch(url)

    //await é o que aguarda a promessa,ele aguarda pq nem toda promessa é comprida.
    const data = await response.json()

    

    // console.log('Dados da API: ', data);

    return {
        
        logradouro: data.street,
        bairro :data.neighborhood,
        cidade : data.city,
        estado : data.state
    }

}