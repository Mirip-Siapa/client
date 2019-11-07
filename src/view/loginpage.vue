<template>
    <div class="container">
        <login v-if="page === 'login'"></login>
        <register v-else></register>
    </div>
</template>

<script>
    import login from "../components/login"
    import register from "../components/register"

    export default {
        data() {
            return {
                name: 'John Silver',
                page: "login"
            }
        },
        components: {
            login,
            register
        }
    }
</script>