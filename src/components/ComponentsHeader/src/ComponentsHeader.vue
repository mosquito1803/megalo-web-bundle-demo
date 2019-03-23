<template>
  <header class="m-hd">
    <template platform="wechat">
      <a href="/pages/index/index" ></a>
    </template>
    <template platform="web">
      <router-link :to="{name:'index'}"></router-link>
    </template>
    {{msg}}
  </header>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ComponentsHeader extends Vue {
  get msg (){
    return this.$route.name;
  }
}
</script>

<style lang="scss" platform="alipay">
.m-hd{
  width:100%;
  height:1rem;
  text-align: center;
  line-height:1rem;
  border-bottom:1px solid #ccc;
  font-size:.3rem;
  background:#eee;
}
.m-hd a{display:block;position: absolute;top:0;left:0;width:1rem;height:1rem;}
.m-hd a:after{content:"";position: absolute;top:50%;left:50%;width:0.3rem;height:0.3rem;border-left:2px solid #333;border-top:2px solid #333;-webkit-transform: translate(-50%,-50%) rotateZ(-45deg);}
</style>
