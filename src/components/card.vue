<template>
  <div class="column is-one-third">
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="image.url">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <div style="display: flex; justify-content: space-between">
            <p class="subtitle is-6">{{ image.user_id.email }}</p>
            <button class="button" @click.prevent="deleteUser(image._id)" v-if="user">
              <span class="icon is-small">
                <i class="fas fa-times"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="content">
        <div>Lookalike:</div>
        <small>
          {{ image.name }} {{ persen }}%
        </small>
        <br>
        <div style="display: flex; justify-content: space-between; margin-top: 10px">
          <time datetime="2016-1-1">{{ moment }}</time>
          <div style="display: flex; align-items: center">
            <a class="twitter-share-button"
              :href="`https://twitter.com/intent/tweet?text=${url}`" style="margin:5px">
              <img src="../../icons/tw.png" style="width: 40px; height: 40px">
            </a>
            <div class="" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="small" style="margin: 5px">
              <a target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?u=${url}&amp;src=sdkpreparse`" class="fb-xfbml-parse-ignore">
                <img src="../../icons/fb.png" style="width: 30px; height: 30px">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import axios from '../config/axios'
import Swal from 'sweetalert2'
export default {
  name:'card',
  computed: {
    persen(){
      if(this.image.value < 0.1){
        return String(this.image.value * 1000).slice(0, 4)
      }
      else{
        return String(this.image.value * 100).slice(0, 4)
      }
    },
    moment(){
      return moment(this.image.createdAt).fromNow()
    },
    url(){
      return this.image.url.split(' ').join('%20')
    }
  },
  created(){
    console.log(this.image.url.split(' ').join('%20'))
  },
  methods: {
    deleteUser(id){
      axios({
        method: 'delete',
        url: `/images/${id}`
      })
        .then(({ data })=>{
          this.$emit('userFetch')
        })
        .catch(err=>{
          Swal.fire({
            icon: 'error',
            title: 'error delete'
          })
        })
    }
  },
  props:['image', 'user']
}
</script>

<style>

</style>