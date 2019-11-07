<template>
  <div>
<<<<<<< HEAD
    <loginpage :is-login="isLogin" @set-login="setLogin"></loginpage>
    <!-- <mainpage></mainpage> -->
=======
    <mainpage></mainpage>
>>>>>>> layout
  </div>
</template>

<script>
import mainpage from "./view/mainpage";
<<<<<<< HEAD
import loginpage from "./view/loginpage"
=======
>>>>>>> layout

export default {
  name:'App',
  components:{
<<<<<<< HEAD
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
=======
    mainpage
  },
  data: function(){
    return {
      hello: 'haii'
>>>>>>> layout
    }
  }
}
</script>

<style>

</style>