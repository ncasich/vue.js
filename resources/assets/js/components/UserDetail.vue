<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{name}}</p>
        <p>User age: {{age}}</p>
        <button @click="resetName">Reset Name</button>
        <!--using callback as a property-->
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
    import {eventBus} from '../app';

    export default {
        props: {
            name: {
                type: String,
                required: true,
                default: 'Noname'
            },
            resetFn: Function,
            age: Number
        },
        computed: {

        },
        methods: {
            switchName(){
                return this.name.split('').reverse().join('');
            },
            resetName(){
                this.$emit('nameWasReset', 'Akkakiy');
            }
        },
        created(){
            eventBus.$on('ageChanged', (age) => {
                this.age = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
