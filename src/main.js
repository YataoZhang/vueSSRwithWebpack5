import Vue from 'vue'
import App from './App.vue'
import getRouter from './router.js';

Vue.config.productionTip = false

export const createApp = () => {
    const router = getRouter();
    const app = new Vue({
        render: h => h(App),
        router
    }).$mount('#app')
    return { app, router };
}

