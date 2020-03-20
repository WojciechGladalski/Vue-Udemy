import Vue from 'vue'
import App from './App.vue'
//import globalnego komponentu
//import Home from './Home.vue'

Vue.config.productionTip = false

//Vue.component('app-servers', Home)
//globalny komponent

//customowe dyrektywy
Vue.directive('highlight', {
    //są różne metody podczas ustawianie dyrektyw (mają różny moment generowania się)
    // eslint-disable-next-line no-unused-vars
    bind(el, binding, vnode) {
        el.style.backgroundColor = 'green'
    }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
