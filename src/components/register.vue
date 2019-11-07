<template>
    <div style="padding-top:120px">
        <div class="card">
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
                <b-field 
                    label="Username"
                    :type="flagError"
                    :message="messageError">
                    <b-input 
                        placeholder="Username" 
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
                <div class="container">
                    <b-button @click.prevent="register" type="is-primary" id="register-btn">Register</b-button>
                    <small><a href="#" @click.prevent="login" style="text-align:center;">← Back to login</a></small>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2';

export default {
    data : function() {
        return {
            flagError: "",
            messageError: "",
            email: "",
            username: "",
            password: ""
        }
    },
    props: {
        isLogin: Boolean
    },
    methods: {
        register() {
            axios({
                method: "POST",
                url: "http://localhost:3000/users/register",
                data: {
                    email: this.email,
                    username: this.username,
                    password: this.password
                }
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                this.$emit("set-login");
                this.email = "";
                this.username = "";
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
        login() {
            this.$emit("set-page", "login");
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