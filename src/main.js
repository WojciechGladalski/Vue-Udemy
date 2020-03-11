import Vue from 'vue'
import App from './App.vue'
//import globalnego komponentu
//import Home from './Home.vue'

Vue.config.productionTip = false

//Vue.component('app-servers', Home)
//globalny komponent

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
