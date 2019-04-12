<template>
  <div class="g-bd">
    <div class="m-index">
      <ul>
        <li v-for="item in cList">
          <PhList
            :title="item.cname"
            icon="right"
            leftIcon="time"
            @click.handleClick="handleClick(item.pathName)"
          ></PhList>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import config from "@/modules/javascript/config";
import PhList from "@/components/PhList";
import test from "@/modules/javascript/test"

@Component({
  components: { PhList }
})
export default class category extends Vue {
  get cList() {
    return config.componentList;
  }

  created () {
    test.test();
  }

  handleClick(v: string) {
    if (Megalo.ENV_TYPE.WEB == Megalo.getEnv()) { // web
      location.hash = '#/components/' + v + '/__demo__/App';
    } else {
      Megalo.navigateTo({
        url: '/components/' + v + '/__demo__/App'
      })
    }
  }
}
</script>
