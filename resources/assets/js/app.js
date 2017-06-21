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

//Vue.component('example', require('./components/Example.vue'));

const app1 = new Vue({
    el: '#app1',
    data: {
        title: 'The VueJS 1st instance',
        showParagraph: false
    },
    methods: {
        show(){
            this.showParagraph = true;
            this.updateTitle('The VueJS 1st instance (updated)');
        },
        updateTitle(title){
            this.title = title;
        },
        destroy(){
            this.$destroy();
        }

    },
    computed: {
        lowerCaseTitle(){
            return this.title.toLowerCase();
        }
    },
    beforeCreate(){
        console.log('beforeCreate');
    },

    created(){
        console.log('created');
    },

    beforeMount(){
        console.log('beforeMount');
    },

    beforeUpdate(){
        console.log('beforeUpdate');
    },

    mounted(){
        console.log('mounted');
    },

    updated(){
        console.log('updated');
    },
    beforeDestroy(){
        console.log('beforeDestroy');
    },
    destroyed(){
        console.log('destroyed');
    }
});

const app2 = new Vue({
    el: '#app2',
    data: {
        title: 'The VueJS 2nd instance',
        showParagraph: false
    },
    methods: {
        onChange(){
            app1.title = 'Changed from vm2!';
        },
        updateTitle(title){
            this.title = title;
        }
    },
    computed: {
        lowerCaseTitle(){
            return this.title.toLowerCase();
        }
    },
});

const app3 = new Vue({
    template: '<h1>Hello, World!</h1>'
});

app3.$mount();

$('div#content').append(app3.$el);



