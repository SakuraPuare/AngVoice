import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { vueMedia } from 'vue-media'

const vue = createApp(App)
vue.use(vueMedia)
vue.mount('#app')
