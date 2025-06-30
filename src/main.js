import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/main.css'

import VueGtag from 'vue-gtag-next'

const app = createApp(App)

app.use(store)

app.use(VueGtag, {
  property: {
    id: 'G-JNNZE4JN5L' 
  }
})

app.mount('#app')
