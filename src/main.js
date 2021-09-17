import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from '@/plugins/elementPlus'
import '@/styles/index.scss'

createApp(App).use(router).use(ElementPlus).mount('#app')
