<template>
    <div class="card">
        <form>
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
            <b-button @click.prevent="login()" type="is-primary">Login</b-button>
        </form>
    </div>
</template>

<script>
export default {
    data : function() {
        return {
            flagError: "",
            messageError: "",
            email: "",
            password: ""
        }
    },
    methods: {
        login() {
            alert("OK");
        }
    }

}
</script>

<style scoped>
    .card {
        width: 50%;
        margin: 0px auto;
    }
</style>