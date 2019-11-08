<template>
  <div>
    <b-menu>
      <b-menu-list label="Menu">
        <b-menu-item
          icon="settings"
          :active="isActive"
          :expanded="isActive"
          @click="isActive = !isActive">
          <template slot="label" slot-scope="props">
            Featured
            <b-icon
              class="is-pulled-right"
              :icon="props.expanded ? 'menu-down' : 'menu-up'">
            </b-icon>
          </template>
          <b-menu-item label="Users"></b-menu-item>
          <b-menu-item label="Payments"></b-menu-item>
        </b-menu-item>
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
}
}
</script>

<style>

</style>