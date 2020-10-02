<template>
  <div id="app">
    <img src="./assets/logo.png" class="mt-5" />
    <hr>
    <Simulacao />
  </div>
</template>

<script>
import Simulacao from './components/Simulacao.vue'
import '@/assets/app.scss'
export default {
  name: 'App',
  components: {
    Simulacao
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
