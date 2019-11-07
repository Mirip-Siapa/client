<template>
  <div>
    <loginpage :is-login="isLogin" @set-login="setLogin"></loginpage>
    <!-- <mainpage></mainpage> -->
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
    }
  }
}
</script>

<style>

</style>