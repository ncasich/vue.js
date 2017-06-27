<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{age}}</p>
        <button @click="editAge">Edit Age</button>
        <button @click="editAgeWithEventBus">Edit Age with Event Bus</button>
    </div>
</template>

<script>
    import {eventBus} from '../app';

    export default {
        props: {
            age: Number
        },
        data(){
            return {}
        },
        methods: {
            editAge(){
                this.$emit('ageChanged', 30);
            },
            editAgeWithEventBus(){
                eventBus.$emit('ageChanged', 100);
            }

        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
