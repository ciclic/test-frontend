import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import money from 'v-money'

Vue.use(money, {
    precision: 2,
    decimal: ',',
    thousands: '.',
    prefix: 'R$ '
})
Vue.use(Vuelidate)

String.prototype.toDecimalNumber = function () {
    if (this.indexOf(",") === -1) return Number(this);
    return Number(this.replace(/\./g, '').replace(/,/g, '.'))
}
Number.prototype.toRealNumber = function (decimal = 2) {
    return Number(Number(this).toFixed(decimal)).toLocaleString('pt-br', { minimumFractionDigits: 2 })
}

import store from './store';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
