<template>
  <div class="m-index">
    <ul>
      <li v-for="item in categoryL" :key="item">
        <!-- <template platform="wechat">
          <a :href="'/pages/' + item + '/index'">{{ item }}</a>
        </template> -->
        <template platform="web">
          <PhList :title="item.cname" :subTitle="item.desc" icon="right" leftIcon="time" @click.handleClick='handleClick(item.id)'></PhList>
        </template>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import components from '@/common/components/';
import config from '@/modules/javascript/config';

@Component

export default class index extends Vue {
  get categoryL(){
    return config.categoryList;
  } 

  get componentL(){
    return Object.keys(components);
  }
  handleClick(v:string){
    
      let _route = this.$route,
        _router = this.$router;
      _router.push({
        name : v
      })
    }
};
</script>
