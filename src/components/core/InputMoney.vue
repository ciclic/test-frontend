<template>
   <money type="text" :class="theClass" v-model="valor" :prefix="thePrefix" :suffix="theSuffix"/>
</template>
<script>
   export default {
      props: ['value','prefix','suffix'],
      data() {
         return {
            theValor: this.value
         }
      },
      computed: {
         valor: {
            get(){
               return Number(this.theValor).toRealNumber()
            },
            set(valor){
               this.theValor = String(valor).toDecimalNumber()
            }
         },
         theClass(){
            return this.class
         },
         thePrefix(){
            return this.prefix
         
         },
         theSuffix(){
            return this.suffix
         }
      },
      watch: {
         value(value){
             this.theValor = value
         },
         theValor(newValue) {
            this.$emit('input',newValue)
         }
      },
   }
</script>
<style scoped>
</style>