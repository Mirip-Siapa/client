<template>
  <div>
<<<<<<< HEAD
    <div class="container is-fluid">
    <navbar></navbar>
=======
    <navbar></navbar>
    <div class="container is-fluid">
>>>>>>> layout
      <div class="columns">
        <div class="column is-3" style="margin-bottom: 0px;">
          <div style="position: sticky; top: 20px;">
            <div class="list is-hoverable" >
              <SideBar></SideBar>
            </div>
            <div class="box">
              <div class="title">Upload your image</div>
              <div class="file has-name">
                <label class="file-label">
                  <input class="file-input" type="file" name="resume">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                      Choose a file…
                    </span>
                  </span>
                  <span class="file-name">
                    Screen Shot 2017-07-29 at 15.54.25.png
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div style="display: flex; flex-wrap: wrap;">
            <card v-for="(image, index) in images.slice(0, count)" :key="index"></card>
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
      images: ['ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok'    ],
      count: 6
    }
  },
  computed: {
    imagesComputed(test) {
      return this.images.slice(0, test)
    }
  },
  methods:{
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow) {
          console.log(123)
          this.count += 4
        }
      };
    }
  },
  mounted() {
    this.scroll()
  }
}
</script>

<<<<<<< HEAD
<style scoped>
  container{
    margin-top: 200px;
  }
=======
<style>
>>>>>>> layout
</style>