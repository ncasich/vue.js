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
            title: 'Laravel',
            link: 'http://google.com/',
            message: 'Class demo',
            counter: 0,
            secondCounter: 0,
            attachRed: false,
            color: 'gray',

        },
        computed: {
            output: function () {
                console.log('Computed');
                return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
            },
            divClasses(){
                return {
                    red: this.attachRed,
                    blue: !this.attachRed
                };
            }


        },
        watch: {
            counter(value){
                console.log(value);
                let vm = this;
                setTimeout(function () {
                    vm.counter = 0;
                }, 2000)
            }
        },
        methods: {
            changeTitle: function (e) {
                this.title = e.target.value;
            },
            result: function () {
                console.log('Result');
                return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
            }
        }
    })
;
