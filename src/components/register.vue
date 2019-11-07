<template>
    <form @submit.prevent="login()" method="POST">
        <b-field 
            label="Email"
            :type="flagError"
            :message="errorMessage">
            <b-input 
                type="email"
                placeholder="jonsnow@stark.com"
                maxlength="30"
                v-model="email">
            </b-input>
        </b-field>
        <b-field 
            label="Username"
            :type="flagError"
            :message="errorMessage">
            <b-input 
                placeholder="jonsnow" 
                maxlength="30"
                v-model="username">
            </b-input>
        </b-field>
        <b-field label="Password">
            <b-input 
                type="password"
                placeholder="*******"
                password-reveal
                v-model="password">
            </b-input>
        </b-field>
        <b-button type="is-primary">Login</b-button>
    </form>
</template>

<script>
export default {

}
</script>

<style>

</style>