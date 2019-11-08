<template>
  <div>
    <navbar @logout="logout" @home="home"></navbar>
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-3" style="margin-bottom: 0px;">
          <div style="position: sticky; top: 20px;">
            <div class="list is-hoverable" >
              <SideBar @userFetch="userFetch"></SideBar>
            </div>
            <div class="box">
              <div class="title">Upload your image</div>
              <b-field class="file">
                <b-upload v-model="file">
                    <a class="button is-primary">
                        <b-icon icon="upload"></b-icon>
                        <span>Click to upload</span>
                    </a>
                </b-upload>
                <span class="file-name" v-if="file">
                    {{ file.name }}
                </span>
              </b-field>
              <section>
                  <b-button type="is-primary" @click.prevent="uploadImage()" expanded>Click Me</b-button>
              </section>
            </div>
          </div>
        </div>
        <div class="column">
          <div style="display: flex; flex-wrap: wrap;">
            <card v-for="(image, index) in images" :key="index" :image="image" @userFetch="userFetch">
              <div v-html="button" @click.prevent="deleteUser(image._id)"></div>
            </card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '../components/card';
import navbar from '../components/navbar';
import SideBar from '../components/SideBar';
import axios from '../config/axios'
import Swal from 'sweetalert2';
export default {
  name: 'mainpage',
  components:{
    card,
    navbar,
    SideBar
  },
  data: function(){
    return {
      file: null,
      images: [],
      user: false
    }
  },
  computed: {
    imagesComputed(test) {
      return this.images.slice(0, test)
    },
    button(){
      if(this.user){
        return `<button class="button">
                  <span class="icon is-small">
                    <i class="fas fa-times"></i>
                  </span>
                </button>`
      }
      else{
        return ''
      }
    }
  },
  methods:{
    fetchImage(){
      axios({
        method : 'get',
        url: '/images'
      })
        .then(({ data })=>{
          console.log(data);
          this.images = []
          this.images = data
        })
        .catch(err=>{
          console.log(err)
        })
    },
    uploadImage(){
      const formData = new FormData()
      formData.append('img', this.file)
      console.log(this.file);
      
      Swal.showLoading()
      axios({
        method: 'post',
        url: '/images',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: formData
      })
        .then(({ data })=>{
          this.fetchImage()
          Swal.close()
          Swal.fire({
            icon: 'success',
            title: 'Upload image success'
          })
        })
        .catch(err=>{
          console.log(err);
          
          Swal.fire({
            icon: 'error',
            title: 'error upload'
          })
        })
    },
    logout(){
      this.$emit('logout')
    },
    userFetch(){
      axios({
        url: 'http://35.198.202.197/images/user',
        method: 'get',
        headers: {
          "access_token": localStorage.getItem('token')
        }
      })
        .then(({ data })=>{
          this.images = []
          this.images = data
          this.user = true
        })
        .catch(err=>{
          console.log(err);
          
        })
    },
    home(){
      this.fetchImage()
      this.user = true
    },
    deleteUser(id){
      axios({
        method: 'delete',
        url: `/images/${id}`
      })
        .then(({ data })=>{
          this.userFetch()
        })
        .catch(err=>{
          Swal.fire({
            icon: 'error',
            title: 'error delete'
          })
        })
    }
  },
  created(){
    this.fetchImage()
  }
}
</script>

<style scoped>
  container{
    margin-top: 200px;
  }
</style>