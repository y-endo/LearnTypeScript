<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <module-button :greet="greetText"></module-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ModuleButton from './components/modules/Button.vue';

@Component({
  components: {
    ModuleButton
  }
})
export default class App extends Vue {
  private greetText: string = 'Hello World';
}
</script>
