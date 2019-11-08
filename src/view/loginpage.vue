<template>
<<<<<<< HEAD
    <div class="container">
        <login v-if="page === 'login'" :is-login="isLogin" @set-login="setLogin" @set-page="setPage"></login>
        <register v-else :is-login="isLogin" @set-login="setLogin" @set-page="setPage"></register>
    </div>
</template>

<script>
    import login from "../components/login"
    import register from "../components/register"

    export default {
        data() {
            return {
                page: "login"
            }
        },
        methods: {
            setLogin() {
                this.$emit("set-login");
            },
            setPage(page) {
                this.page = page;
            }
        },
        props: {
            isLogin: Boolean
        },
        components: {
            login,
            register
        }
    }
</script>

<style scoped>
    
=======
  
</template>

<script>
export default {

}
</script>

<style>

>>>>>>> layout
</style>