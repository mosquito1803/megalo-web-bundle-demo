<template>
  <div class="g-hd">
    <!-- <template platform="wechat">
      <a href="/pages/index/index" ></a>
    </template> -->
    <div class="m-hd">
      <template platform="web">
        <PhNavBar :title="msg"
          :leftIcon="leftIcon"
          @onLeftIconClick="handleClick"
        ></PhNavBar>
      </template>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component

export default class ComponentsHeader extends Vue {
  get msg (){
    return this.$route.name;
  }

  handleClick(e:any){
    this.$router.go(-1);
  }

  get leftIcon(){
    return ["left"]
  }
  get rightTxts(){
    return [{id:1,txt:'按钮'}]
  }

}
</script>

<style lang="scss">
.m-hd{
  position:fixed;
  top:0;left:0;
  width:100%;
  height:1rem;
}
// .m-hd a{display:block;position: absolute;top:0;left:0;width:1rem;height:1rem;}
</style>
