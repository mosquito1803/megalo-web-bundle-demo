<template>
  <div class="g-bd">
    <div class="m-index">
      <ul>
        <li v-for="item in cList">
          <!-- <template platform="wechat">
            <a :href="'/pages/' + item + '/index'">{{ item }}</a>
          </template> -->
          <template platform="web">
            <PhList :title="item.cname" icon="right" leftIcon="time" @click.handleClick='handleClick(item.pathName)'></PhList>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import config from '@/modules/javascript/config';

@Component

export default class category extends Vue {
  get cList(){
    let _list:Object[] = [],
      _route:any = this.$route;
    config.componentList.forEach((val:any) => {
      if(val.category == _route.params.id){
        _list.push(val);
      }
    });
    return _list;
  } 

  handleClick(v:string){
      let _route:any = this.$route,
        _router:any = this.$router;
      _router.push({
        name : v
      })
    }
};
</script>
