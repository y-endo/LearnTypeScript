<template>
  <button @click="handleClick">MyButton</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ModuleButton extends Vue {
  @Prop()
  public greet?: string;

  public handleClick() {
    alert(this.greet);
  }
}
</script>
