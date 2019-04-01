<template>
  <div class="app">
      <img class="img" :src="logo" @touchstart="changeStat">
      <h1 class="txt" v-show="t%2==1">click logo::{{t}}</h1>
      <HelloWorld><Layout/></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Layout from '@/components/layout.vue'

export default {
  components: {
      HelloWorld, Layout
  },
  data() {
    return {
      logo: 'https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png',
      t: 1,
      color: '#007d37'
    }
  },

  beforeCreate() {
    console.log('Page [hello] Vue beforeCreate')
  },
  created() {
    console.log('Page [hello] Vue created')
  },
  beforeMount() {
    console.log('Page [hello] Vue beforeMount')
  },
  mounted() {
    console.log('Page [hello] Vue mounted')
  },
  onLoad: function(options) {
    // Do some initialize when page load.
    console.log('Page [hello] onLoad')
  },
  onReady: function() {
    // Do something when page ready.
    console.log('Page [hello] onReady')
  },
  onShow: function() {
    // Do something when page show.
    console.log(this.$store.state.count)
    console.log('Page [hello] onShow')
  },
  onHide: function() {
    // Do something when page hide.
    console.log('Page [hello] onHide')
  },
  onUnload: function() {
    // Do something when page close.
    console.log('Page [hello] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods:{
    changeStat: function(){
      this.$store.commit("increase")
      this.t++
      this.color = '#'+Math.floor(Math.random()*0xffffff).toString(16)
    }
  }
}
</script>

<style lang="scss"> 
.app{
  padding-top: 100px;
  .img {
    display: block;
    height: 120px;
    width: 138px;
    margin: 20px auto;
  }
  .txt {
      color: #567567;
      font-size: 13px;
      text-align: center;
  }
}
</style>
