<template>
    <div class="container">
        <div class="card bg-transarent">
            <div class="card-body">
                <Simular v-if="!$store.state.investimento.resultado" />
                <Resultado v-else />
            </div>
        </div>
    </div>
</template>

<script>
    import Simular from '@/components/Simular.vue';
    import Resultado from '@/components/Resultado.vue';
    export default {
        components: {
            Simular,
            Resultado
        },
    }
</script>

<style lang="scss" scoped>

</style>