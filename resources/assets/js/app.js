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
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack(){
            if (!this.playerAttack(3, 10)) {
                this.monsterAttack();
            }
        },
        specialAttack(){
            if (!this.playerAttack(10, 20)) {
                this.monsterAttack();
            }
        },
        playerAttack(min, max){
            let damage = this.calculateDamage(min, max);
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
            this.monsterHealth -= damage;
            return this.checkWin();
        },
        monsterAttack(){
            let damage = this.calculateDamage(5, 12);
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });
            this.playerHealth -= damage;
            this.checkWin();
        },
        heal(){
            this.playerHealth += 10;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });
            this.monsterAttack();
        },
        giveUp(){
            this.gameIsRunning = false;
        },
        calculateDamage(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin(){
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                    return true;
                }
                this.gameIsRunning = false;
                return false;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                    return true;
                }
                this.gameIsRunning = false;
                return false;
            }
        },
    },
});
