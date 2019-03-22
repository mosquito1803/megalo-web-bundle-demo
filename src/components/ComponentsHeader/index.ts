import ComponentsHeader from './src/ComponentsHeader.vue';

ComponentsHeader.install = (Vue: any, options: any) => {
  Vue.component('ComponentsHeader', ComponentsHeader);
};

export default ComponentsHeader;

