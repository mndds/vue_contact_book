import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { initializeApp } from 'firebase/app'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAle0qohP3JalhWmu4Fc4EZNbXby48q_28",
  authDomain: "itstep-contact-book.firebaseapp.com",
  projectId: "itstep-contact-book",
  storageBucket: "itstep-contact-book.appspot.com",
  messagingSenderId: "758182291646",
  appId: "1:758182291646:web:eefd11bff4c0fb0f0616ef"
}

initializeApp(firebaseConfig)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
