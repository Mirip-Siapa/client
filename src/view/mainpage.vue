<template>
  <div>
    <div class="container is-fluid">
    <navbar></navbar>
      <div class="columns">
        <div class="column is-3 box">
          Left Menu
        </div>
        <div class="column box">
          <card></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '../components/card';
import navbar from '../components/navbar';
export default {
  name: 'mainpage',
  components:{
    card,
    navbar
  },
  data: function(){
    return {

    }
  }

}
</script>

<style scoped>
  container{
    margin-top: 200px;
  }
</style>