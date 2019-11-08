<template>
  <div>
    <loginpage :is-login="isLogin" @set-login="setLogin" v-if="!isLogin"></loginpage>
    <mainpage v-else @logout="logout"></mainpage>
  </div>
</template>

<script>
import mainpage from "./view/mainpage";
import loginpage from "./view/loginpage"

export default {
  name:'App',
  components:{
    mainpage,
    loginpage
  },
  data: function(){
   return {
     isLogin: false
   }
  },
  methods: {
    setLogin() {
      this.isLogin = true;
    },
    login(){
      if(localStorage.getItem('token')){
        this.isLogin = true
      }
      else{
        this.isLogin = false
      }
    },
    logout(){
      localStorage.removeItem('token')
      this.isLogin = false
    }
  },
  created(){
    this.login()
  }
}
</script>

<style>

</style>