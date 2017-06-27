<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>My name is {{name}}!</p>
        <p>I'm {{age}} years old</p>
        <button @click="changeName">Change Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                        :name="name"
                        :age="age"
                        @nameWasReset="name = $event"
                        :resetFn="resetName"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :age="age" @ageChanged="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data(){
            return {
                name: 'Nickolay',
                age: 35
            };
        },
        methods: {
            changeName(){
                this.name = this.name === 'Nick' ? 'Nickolay' : 'Nick';
            },
            resetName(){
                this.name = 'Fedor Sumkin';
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
