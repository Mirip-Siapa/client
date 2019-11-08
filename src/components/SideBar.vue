<template>
  <div>
    <b-menu>
        <b-menu-list label="Menu">
            <b-menu-item icon="account" label="User" @click.prevent="userFetch"></b-menu-item>
        </b-menu-list>
    </b-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true
    }
  },
  methods:{
    userFetch(){
      this.$emit('userFetch')
    }
  }
}
</script>

<style>

</style>