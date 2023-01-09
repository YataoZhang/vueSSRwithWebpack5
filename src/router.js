import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default function () {
    const router = new VueRouter({
        mode: 'history',
        base: '/',
        routes: [
            {
                path: '/',
                redirect: '/index'
            }, {
                path: '/index',
                component: () => import(
                    /* webpackChunkName: "index" */
                    '@/pages/index.vue'
                )
            }, {
                path: '/about',
                component: () => import(
                    /* webpackChunkName: "about" */
                    '@/pages/about.vue'
                )
            }],
    });

    return router;
}