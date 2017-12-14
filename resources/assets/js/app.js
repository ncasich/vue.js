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

import App from './App.vue'

export const eventBus = new Vue();

Vue.directive('highlight', {
	bind(el, binding, vnode){
		// el.style.backgroundColor = 'green';
		// el.style.backgroundColor = binding.value;

		let delay = 0;
		if(binding.modifiers['delayed']){
			delay = 5000;
		}

		setTimeout(()=> {
            if (binding.arg === 'background') {
                el.style.backgroundColor = binding.value;
            } else {
                el.style.color = binding.value;
            }
        }, delay);

	}
});

new Vue({
	el: '#content',
	render: h => h(App)
});

Vue.config.devtools = false;
Vue.config.productionTip = false;