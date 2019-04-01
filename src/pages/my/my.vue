<template>
  <div class="app">
      <button @click="selectedIndex = 0">news page</button>
      <button @click="selectedIndex = 1">video page</button>
      <div>111</div>
      <img class="img" :src="logo" @touchstart="changeStat">
      <HelloWorld :msg="acc" :color="color"></HelloWorld>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
const home = require('assets/image/home.png');
import layout from '@/components/layout'

export default {
  components: {
      HelloWorld
  },
  data() {
    return {
      selectedIndex: 1,
      logo: 'https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png',
      color: '#007d37',
      acc: 'zxc'
    }
  },
  beforeCreate() {
    console.log('Page [my] Vue beforeCreate')
  },
  created() {
    console.log('Page [my] Vue created')
  },
  beforeMount() {
    console.log('Page [my] Vue beforeMount')
  },
  mounted() {
    console.log('Page [my] Vue mounted')
  },
  onLoad: function(options) {
    // Do some initialize when page load.
    console.log('Page [my] onLoad')
  },
  onReady: function() {
    // Do something when page ready.
    console.log('Page [my] onReady')
  },
  onShow: function() {
    // Do something when page show.
    console.log(this.$store.state.count)
    console.log('Page [my] onShow')
  },
  onHide: function() {
    // Do something when page hide.
    console.log('Page [my] onHide')
  },
  onUnload: function() {
    // Do something when page close.
    console.log('Page [my] onUnload')
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

<style lang="scss" scoped> 
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
<style platform="alipay" scoped>
.test {
  width: 100px;
}
</style>
<style platform="wechat" src="./test.css">

</style>
<style platform="alipay" src="./test.css">

</style>
