<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <h1>Signup Form - Exercise 1</h1>
                    <div class="form-row">
                        <div class="form-group col-md-5">
                            <label for="firstName">First Name</label>
                            <input 
                                type="text"
                                id="firstName"
                                class="form-control"
                                v-model.lazy="userData.firstName">
                        </div>
                        <div class="form-group col-md-7">
                            <label for="lastName">Last Name</label>
                            <input 
                                type="text"
                                id="lastName"
                                class="form-control"
                                v-model.lazy="userData.lastName">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="fullName">Full Name</label>
                            <p id="fullName">{{ fullName = userData.firstName + ' ' + userData.lastName }}</p>
                        </div>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="email">E-mail</label>
                        <input 
                            type="text"
                            id="email"
                            class="form-control"
                            v-model="userData.email">
                    </div>
                    <div class="form-group col-md-12">
                        <label for="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            class="form-control"
                            v-model="userData.password">
                    </div>
                    <div class="form-row">
                        <div class="form-check form-check-inline col-md-4">
                            <input 
                                class="form-check-input" 
                                type="radio" 
                                name="storeData" 
                                id="storeDataYes"
                                value="Yes"
                                v-model="storeData">
                            <label for="storeDataYes">Store Data - Yes</label>
                        </div>
                        <div class="form-check form-check-inline col-md-4">
                            <input 
                                class="form-check-input"
                                type="radio"
                                name="storeData"
                                id="storeDataNo"
                                value="No"
                                v-model="storeData">
                            <label for="storeDataNo">Store Data - No</label>
                        </div>
                    </div>
                    <hr>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <div class="form-row">
                        <button
                            type="button"
                            class="btn btn-primary btn-lg btn-block"
                            @click.prevent="submitted"
                        >Submit
                        </button>
                    </div>
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                userData: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                },
                fullName: '',
                storeData: 'Yes',
                isSubmitted: false
            };
        },
        methods: {
            submitted() {
                this.isSubmitted = true;
            }
        },
    }
</script>

<style>
</style>
