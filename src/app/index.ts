import Vue, { CreateElement, VNode } from 'vue';

import App from './components/app.vue';

const app = new Vue({
    el: '#app',
    render: (createElement: CreateElement): VNode => createElement(App)
});