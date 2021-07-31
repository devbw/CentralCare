import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'vue-multiselect/dist/vue-multiselect.css'

createApp(App).use(router).mount('#app')
