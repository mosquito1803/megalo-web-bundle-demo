import UiButton from './src/uibutton.vue';

UiButton.install = (Vue: any, options: any) => {
  Vue.component('UiButton', UiButton);
};

export default UiButton;

