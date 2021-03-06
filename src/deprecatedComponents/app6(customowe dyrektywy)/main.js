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
        //el.style.backgroundColor = 'green'
        //el.style.backgroundColor = binding.value
        var delay = 0;
        if (binding.modifiers['delayed']) {
            delay = 3000
        }
        setTimeout(()=> {
            if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value
            }
        }, delay)
    }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
