import { createApp } from 'vue';
// import Vue from 'vue';
import App from './App.vue';

//** */ v3 way:
createApp(App).mount('#app');

//** */ v2 way:
// new Vue({
//     render: (createElement) => {
//         return createElement(App)
//     }
// })
