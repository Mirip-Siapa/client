<template>
<div class="nav">
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-light">
                        Log out
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    </div>
</template>

<script>

export default {
  name:'navbar'
}
</script>

<style scoped>
    .nav{
        margin-bottom: 20px !important;
    }
</style>