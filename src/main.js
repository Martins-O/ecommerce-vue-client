import { createApp } from 'vue'
import App from './App.vue'
import routers from './router/index.js'


window.axios = require('axios')

createApp(App).use(routers).mount('#app');