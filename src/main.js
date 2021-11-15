import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import auth from '@/plugins/firebase/auth'

Vue.config.productionTip = false

auth.onAuthStateChanged(user => {
    store.state.auth.user = user

    if (user && router.currentRoute.name.startsWith('auth.')) {
        router.push({name: 'dashboard'})
    }

    if (!user && !router.currentRoute.name.startsWith('auth.')) {
        router.push({name: 'auth.login'})
    }

})

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')
