<template>
    <div>
        <h1 class="display-5 font-weight-bold mt-5 ">Olá, {{nome}}</h1>
        <h2 style="line-height:1.5em" class="text-muted">
            Juntando <strong>R$ {{valor}}</strong> todo mês,<br> você terá <strong class="text-primary">R$ {{resultado}}</strong> em {{periodo.label}}
        </h2>
        <a href @click.prevent="$store.dispatch('investimento/resetar')" class="btn btn-outline-primary my-5">Simular Novamente</a>
    </div>
</template>

<script>
    export default {
        computed: {
            periodo() {
                return this.$store.getters['investimento/periodo'] 
            },
            nome() {
                return this.$store.state.investimento.nome
            },
            valor() {
                return this.$store.state.investimento.valor.toRealNumber()
            },
            resultado() {
                return Number(this.$store.state.investimento.resultado).toRealNumber()
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>