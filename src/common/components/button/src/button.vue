<template>
  <button
    class="ui-button"
    @click="handleClick"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    :disabled="disabled"
    :type="nativeType"
    :radius="radiusType"
    :size="size"
    :class="[
      type ? 'ui-button--' + buttonType : '',
      buttonSize ? 'ui-button--' + buttonSize : '',
      radius ? 'ui-button--' + radiusType : '',
      {
        'is-disabled': disabled,
        'is-active': active
      }
    ]"
  >
  <span>
    <slot></slot>
  </span>
  
  </button>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UiButton extends Vue {

  @Prop({ default: '' })
  private nativeType!: string;

  @Prop({ default: 'default' })
  private type!: string;

  @Prop({ default: 'normal' })
  private size!: string;

  @Prop({ default: 'round' })
  private radius!: string;

  @Prop({ default: false, type: Boolean })
  private disabled!: boolean;

  @Prop({ default: false, type: Boolean })
  private plain!: boolean;

  @Prop({ default: false, type: Boolean })
  private underline!: boolean;

  private active: boolean = false;

  get buttonType() {
    return this.type;
  }

  get buttonSize() {
    if (this.type == 'special') {
      return '';
    }
    return this.size;
  }

  get radiusType() {
    return this.radius;
  }

  handleClick(e: any) {
    if (this.disabled !== true) {
      this.$emit('click', e);
    }
  }

  handleTouchStart(e: any) {
    this.active = true;
  }

  handleTouchEnd(e: any) {
    this.active = false;
  }
}
</script>

<style lang="scss" src="./button.scss">

</style>
