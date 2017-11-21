<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Fill a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userData.age">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <label for="message">Message</label>
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control" v-model="message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"> Send Mail
                            </label>
                        <label for="sendInfoMail">
                            <input
                                    type="checkbox"
                                    id="sendInfoMail"
                                    value="SendInfoMail"> Send Infomail
                            </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="male">
                            <input
                                    type="radio"
                                    id="male"
                                    value="Male"> Male
                            </label>
                        <label for="female">
                            <input
                                    type="radio"
                                    id="female"
                                    value="Female"> Female
                            </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="priority">Priority</label>
                        <select id="priority" class="form-control" v-model="priority">
                            <option></option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: <strong>{{userData.email}}</strong></p>
                        <p>Password: <strong>{{userData.password}}</strong></p>
                        <p>Age: <strong>{{userData.age}}</strong></p>
                        <p>Message: <strong>{{message}}</strong></p>
                        <p><strong>Send Mail?</strong><strong></strong></p>
                        <ul>
                            <li></li>
                        </ul>
                        <p>Gender: <strong>{{gender}}</strong></p>
                        <p>Priority: <strong>{{priority}}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                userData: {
                    email: '',
                    password: '',
                    age: 34,
                },
                message: '',
                gender: '',
                priority: '',
            }
        }
    }
</script>

<style>

</style>