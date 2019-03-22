<template>
  <div class="">
    <div class="m-index">
      <ul>
        <li v-for="item in componentList" :key="item">
          <template platform="wechat">
            <a :href="'/pages/' + item + '/index'">{{ item }}</a>
          </template>
          <template platform="web">
            <router-link :to="{name:item}">{{ item }}</router-link>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.g-bd{padding-top:1rem;}
.m-index li{height:1rem;line-height:1rem;font-size:0.3rem;}
.m-index li a{position:relative;display:block;width:100%;color:#333;text-indent:0.3rem;overflow:hidden;}
.m-index li a:after{content:'';position:absolute;bottom:0;left:0.3rem;width:100%;height:1px;background:#ccc;-webkit-translate:scaleY(0.5);}
.m-index li:last-child a:after{display:none;}
.m-component{position: relative;}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import ComponentsHeader from '@/components/ComponentsHeader/';
import components from '@/common/components';

// Vue.use(ComponentsHeader)

@Component({})

export default class index extends Vue {
  
  get componentList(){
    return Object.keys(components);
  }
};
</script>
