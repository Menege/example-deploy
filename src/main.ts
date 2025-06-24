import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Message from 'primevue/message'
import ProgressSpinner from 'primevue/progressspinner'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
const app = createApp(App)
const pinia = createPinia()
app.use(PrimeVue, { ripple: true })
app.use(pinia)
app.use(router)
app.component('Message', Message)
app.component('ProgressSpinner', ProgressSpinner)

app.mount('#app')
