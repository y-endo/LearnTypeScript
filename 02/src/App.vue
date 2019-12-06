<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>挨拶: {{ greetText }}</p>
    <p>挨拶した回数: {{ count }}</p>
    <module-button :greet="greetText" @click="handleModuleButtonClick"></module-button>
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
  private count: number = 0;

  public handleModuleButtonClick(count: number) {
    this.count = count;
    this.greetText = 'こんにちは';
  }
}
</script>
