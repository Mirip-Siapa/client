<template>
  <div>
    <mainpage></mainpage>
  </div>
</template>

<script>
import mainpage from "./view/mainpage";

export default {
  name:'App',
  components:{
    mainpage
  },
  data: function(){
    return {
      hello: 'haii'
    }
  }
}
</script>

<style>

</style>