import Vue from 'vue'; // Импортируем Vue из vue
import App from './App.vue';

new Vue({
    render: h => h(App)
}).$mount('#app');