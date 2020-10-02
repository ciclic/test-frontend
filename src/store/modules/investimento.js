import axios from 'axios';
const state = {
    nome: '',
    valor: 0,
    taxa_juros: 0.00517,
    tempo: 12,
    resultado: null,
    periodos: [
        {
            label: '1 Mês',
            code: 1
        },
        {
            label: '3 Meses',
            code: 3
        },
        {
            label: '6 Meses',
            code: 6
        },
        {
            label: '1 Ano',
            code: 12
        },
        {
            label: '2 Anos',
            code: 24
        },
        {
            label: '3 Anos',
            code: 36
        },
        {
            label: '4 Anos',
            code: 48
        },
        {
            label: '5 Anos',
            code: 60
        }
    ]
}
const getters = {
    periodo(state){
        return state.periodos.find( p => p.code == state.tempo )
    }
}
const actions = {
    async simular({state,commit}){

        let response = await axios.post('http://api.mathjs.org/v4/',{
            expr: `${state.valor} * (((1 + ${state.taxa_juros}) ^ ${state.tempo} - 1) / ${state.taxa_juros})`
        })

        commit('SET_RESULTADO',response.data.result)

    },
    resetar({commit}){
        commit('SET_VALOR',0)
        commit('SET_TEMPO',24)
        commit('SET_RESULTADO',null)
    },
}
const mutations = {
    SET_NOME(state,payload){ state.nome = payload },
    SET_VALOR(state,payload){ state.valor = payload },
    SET_TEMPO(state,payload){ state.tempo = payload },
    SET_RESULTADO(state,payload){ state.resultado = payload },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}