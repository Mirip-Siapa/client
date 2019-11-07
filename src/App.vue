<template>
  <div>
    <loginpage></loginpage>
    <mainpage></mainpage>
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
     hello: ''
   }
  }
}
</script>

<style>

</style>