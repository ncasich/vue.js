/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app',
    data: {
        show: true,
        ingridients: ['meat', 'fruit', 'coockies'],
        persons: [
            {name: 'Akkakiy Zyablikov', age: '34', sex: 'male'},
            {name: 'Dazdraperma Pryanichkina', age: '26', sex: 'female'},
        ],
    },
    computed: {
        output: function () {
            console.log('computed: igridients changed');
            return this.ingridients;
        }
    },
    watch: {
        ingrdients: function (value) {
            console.log('watch: igridients changed');
        }
    },
});
