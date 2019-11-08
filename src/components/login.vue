<template>
    <div style="padding-top:150px">
        <div class="card">
            <div style="display: flex; justify-content: center">
                <img src="../../images/mirip.png" alt="" style="width: 300px; margin: 0px auto">
            </div>
            <form>
                <b-field 
                    label="Email"
                    :type="flagError"
                    :message="messageError">
                    <b-input 
                        type="email"
                        placeholder="Email address"
                        maxlength="30"
                        v-model="email">
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
                <div class="container">
                    <b-button @click.prevent="login" type="is-primary" id="login-btn">Login</b-button>
                    <small>Don't have account? <a href="#" @click.prevent="register" style="text-align:center;">Register here.</a></small>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from '../config/axios'

export default {
    data : function() {
        return {
            flagError: "",
            messageError: "",
            email: "",
            password: ""
        }
    },
    props: {
        isLogin: Boolean
    },
    methods: {
        login() {
            axios({
                method: "POST",
                url: "/users/login",
                data: {
                    email: this.email,
                    password: this.password
                }
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                this.$emit("set-login");
                this.email = "";
                this.password = "";
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'errror',
                    title: 'Error!',
                    text: err.response.data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            });
        },
        register() {
            this.$emit("set-page", "register");
        }
    }
}
</script>

<style scoped>
    .card {
        width: 50%;
        margin: 0px auto;
        padding: 30px;
        border-radius: 10px;
    }
    .button {
        width: 100%;
        margin: 30px auto;
    }
</style>