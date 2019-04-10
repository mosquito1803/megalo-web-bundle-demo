<template>
  <div class="ph-list"
       :class="[
        type ? 'ph-list--' + type : '',
          {
            'is-hasSubTitle': subTitle,
            'is-hasIcon': rightIcon,
            'is-hasLeftIcon':leftIcon,
            'is-hasDesc':desc,
            'is-active':active,
            'is-hasBTborder':hasBTborder
          }
        ]"
        @click="handleClick"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
  >
    <PhIcon class="ph-list--leftIcon" v-if="leftIcon" :type="leftIcon" size=36></PhIcon>
    <div class="ph-list--box">
      <div class="ph-list--title" v-text="title"></div>
      <div class="ph-list--subTitle" v-if="subTitle" v-text="subTitle"></div>
    </div>
    <div class="ph-list--desc" v-if="desc" v-text="desc"></div>
    <slot></slot>
    <PhIcon v-if="rightIcon" :type="rightIcon" size=28></PhIcon>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PhIcon from '../PhIcon/index'

@Component({
  components: { PhIcon }
})
export default class PhList extends Vue {

  @Prop({ default: '我是文字' })
  private title!: string;

  @Prop({ default: true })
  private hasBTborder!: Boolean;

  @Prop({ default: '' })
  private desc!: string;

  @Prop({ default: 'default' })
  private type!: string;

  @Prop({ default: '' })
  private rightIcon!: string;

  @Prop({ default: '' })
  private leftIcon!: string;

  @Prop({ default: '' })
  private subTitle!: string;

  private active: boolean = false;

  handleClick(e: any) {
    // this.active = true;
    this.$emit('click', e);
  }

  handleTouchStart(e: any) {
    this.active = true;
  }

  handleTouchEnd(e: any) {
    this.active = false;
  }
}
</script>

<style lang="scss" src="./PhList.scss">

</style>
