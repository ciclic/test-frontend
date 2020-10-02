<template>
<div>
    <h1 class="display-5 font-weight-bold mt-3 ">Simulador</h1>
    <div class="text-left">
        <div class="form-group">
            <label for="nome">Seu nome</label>
            <input v-model="$v.nome.$model" type="text" id="nome" class="form-control" :class="{'is-invalid':$v.nome.$error}">
        </div>
        <div class="form-group">
            <label for="valor">Valor da mensálidade</label>
            <InputMoney v-model="$v.valor.$model" id="valor" class="form-control" :class="{'is-invalid':$v.valor.$error}"/>
        </div>
        
        <div class="form-group">
            <label for="tempo">Tempo de contribuição</label>
            <select v-model="$v.tempo.$model" id="tempo" class="form-control" :class="{'is-invalid':$v.tempo.$error}">
                <template v-for="(periodo,key) of $store.state.investimento.periodos">
                    <option :key="key" :value="periodo.code">{{periodo.label}}</option>
                </template>
            </select>
        </div>
        
    </div>
    <a href @click.prevent="simular" class="btn btn-primary btn-lg mt-3 btn-block">Simular</a>
</div>
</template>

<script>
import InputMoney from '@/components/core/InputMoney.vue';
const { required, minValue } = require('vuelidate/lib/validators')
export default {
    components: {
        InputMoney,
    },
    computed: {
        nome:{
            get(){ return this.$store.state.investimento.nome },
            set(payload){ this.$store.commit('investimento/SET_NOME',payload)},
        },
        valor:{
            get(){ return this.$store.state.investimento.valor },
            set(payload){ this.$store.commit('investimento/SET_VALOR',payload)},
        },
        tempo:{
            get(){ return this.$store.state.investimento.tempo },
            set(payload){ this.$store.commit('investimento/SET_TEMPO',payload)},
        }
    },
    methods: {
        simular() {

            this.$v.$touch()
            if(this.$v.$invalid) return;

            this.$store.dispatch('investimento/simular')
        }
    },
    validations:{
        nome:{
            required
        },
        valor:{
            required,
            minValue: minValue(0.01)
        },
        tempo:{
            required
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
