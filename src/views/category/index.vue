<template>
  <div class="g-bd">
    <div class="m-index">
      <ul>
        <li v-for="item in cList">
          <template platform="wechat">
            <a :href="'/views/' + item + '/__demo/App'">{{ item }}</a>
          </template>
          <template platform="web">
            <PhList
              :title="item.cname"
              icon="right"
              leftIcon="time"
              @click.handleClick="handleClick(item.pathName)"
            ></PhList>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import config from "@/modules/javascript/config";
import PhList from "@/components/PhList/index.vue";

@Component({
  components: { PhList }
})
export default class category extends Vue {
  get cList() {
    return config.componentList;
  }

  handleClick(v: string) {
    location.hash = '#/views/' + v + '/__demo/App';
  }
}
</script>
