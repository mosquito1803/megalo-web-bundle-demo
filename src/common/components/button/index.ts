import Button from './src/button.vue';

Button.install = (Vue: any, options: any) => {
  Vue.component('UiButton', Button);
};

export default Button;

