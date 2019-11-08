<template>
<div class="nav">
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../../images/mirip.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#" @click.prevent="home">
                Home
            </b-navbar-item>
        </template>
        
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-light" @click.prevent="logoutUser()">
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
  name:'navbar',
  methods:{
      logoutUser(){
        this.$emit('logout')
      },
      home(){
          this.$emit('home')
      }
  }
}
</script>

<style scoped>
    .nav{
        margin-bottom: 20px !important;
    }
</style>