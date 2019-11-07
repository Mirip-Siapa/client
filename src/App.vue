<template>
  <div>
    <h1>
      {{ hello }}
      <loginpage></loginpage>
    </h1>
  </div>
</template>

<script>
import loginpage from "./view/loginpage"

export default {
  data: function(){
   return {
     hello: ''
   }
  },
  components: {
    loginpage
  }
}
</script>

<style>

</style>