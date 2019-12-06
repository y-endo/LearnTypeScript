<template>
  <button @click="handleClick">MyButton</button>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator';

@Component
export default class ModuleButton extends Vue {
  // data
  private count: number = 0;

  // prop
  @Prop()
  public greet?: string;

  // get ~~ = computed
  public get isRegulars(): boolean {
    return this.count >= 3;
  }

  // watch
  @Watch('count')
  public countCharged() {
    if (this.count === 3) {
      alert('常連さん');
    }
  }

  // $emit
  @Emit()
  // @Emit('click')だけでも可能
  public click(count: number) {}

  // methods
  public handleClick() {
    alert(this.greet);
    this.count += 1;
    this.click(this.count);
  }
}
</script>
