<template>
  <div class="g-bd g-bd-nomargin">
    <div class="m-index">
      <ul>
        <li v-for="item in categoryL">
          <PhList :title="item.cname" :subTitle="item.desc" icon="right" leftIcon="time" @click.handleClick='handleClick(item.id)'></PhList>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PhList from "@/components/PhList";
import config from "@/modules/javascript/config";
import components from "@/components"

@Component({
  components: { PhList }
})
export default class index extends Vue {
  get categoryL(){
    return config.categoryList;
  } 

  get componentL(){
    return Object.keys(components);
  }

  handleClick(v:number){
    if (window && location) { // web
      location.hash = "#/views/category/index";    
    } else {
      wx.navigateTo({
        url: "/views/category/index"
      })
    }
  }
};
</script>
