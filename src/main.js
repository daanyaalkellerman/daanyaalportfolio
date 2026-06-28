import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import './assets/main.css'
import VueGtag from 'vue-gtag-next'
import { initNavigationAwareScrollDepthTracking } from './utils/scrollDepthTracking'


const firebaseConfig = {
  apiKey: "AIzaSyD69OJgyj4tkK8_M5XLFyh0Eof6r99CT-E",
  authDomain: "daanyaal-kellerman.firebaseapp.com",
  projectId: "daanyaal-kellerman",
  storageBucket: "daanyaal-kellerman.firebasestorage.app",
  messagingSenderId: "589793059785",
  appId: "1:589793059785:web:2c60797c5e59fe846c7e18",
  measurementId: "G-6KYHJ3FVGC"
};


// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(firebaseapp);

const app = createApp(App)

app.use(store)

app.use(VueGtag, {
  property: {
    id: 'G-JNNZE4JN5L' 
  }
})

app.mount('#app')

initNavigationAwareScrollDepthTracking()
