import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import ErrorPage404 from "@/views/ErrorPage404.vue";
import TermsOfServiceView from "@/views/TermsOfServiceView.vue";
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/terms-of-service',
        name: 'termsOfService',
        component: TermsOfServiceView
    },
    {
        path: '/privacy-policy',
        name: 'privacyPolicy',
        component: PrivacyPolicyView
    },
    {
        path: '/:username',
        name: 'profile',
        component: ProfileView
    },
    {
        path: '/error404',
        name: 'error404',
        component: ErrorPage404
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
