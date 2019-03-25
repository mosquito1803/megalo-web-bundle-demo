<template>
  <div class="g-bd g-bd-nomargin">
    <div class="m-index">
      <ul>
        <li v-for="item in categoryL">
          <!-- <template platform="wechat">
            <a :href="'/pages/' + item + '/index'">{{ item }}</a>
          </template> -->
          <template platform="web">
            <PhList :title="item.cname" :subTitle="item.desc" icon="right" leftIcon="time" @click.handleClick='handleClick(item.id)'></PhList>
          </template>
        </li>
      </ul>
    </div>
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
  handleClick(v:number){
      let _route:any = this.$route,
        _router:any = this.$router;
      _router.push({
        name : 'category',
        params: {id : v}
      })
    }
};
</script>
