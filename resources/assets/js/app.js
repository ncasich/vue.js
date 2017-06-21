/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import App from './components/App.vue';
import Home from './components/Home.vue';
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example', require('./components/Example.vue'));
// Vue.component('example', {
//     data (){
//         return {message: 'Hello, World!'}
//     },
//     template: '<p>  Vue message: {{message}} </p>'
// });

Vue.component('app-servers', Home);

const app = new Vue({
    el: '#content',
    render: h => h(App)
});
