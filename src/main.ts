import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import router from "@/router";
import {pageTitle} from "vue-page-title";


createApp(App)
    .use(store)
    .use(router)
    .use(pageTitle({
        suffix: ' - DogLink'
    }))
    .mount('#app')
