// Button.stories.js

import HelloWorld from './HelloWorld.vue';

export default {
  title: 'HelloWorld',
  component: HelloWorld,
};

export const Main = () => ({
  components: { HelloWorld },
  template: '<HelloWorld msg="Hello" />',
});