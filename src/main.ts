import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import router from "@/router";
import {pageTitle} from "vue-page-title";
import { createHead } from "@vueuse/head";

const head = createHead()

createApp(App)
    .use(store)
    .use(router)
    .use(head)
    .use(pageTitle({
        suffix: ' - DogLink'
    })).mount('#app')
