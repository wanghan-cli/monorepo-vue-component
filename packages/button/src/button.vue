<script setup lang="ts">
import { hello } from '@template/shared';

const props = withDefaults(defineProps<{
  text?: string;
}>(), {
  text: 'World',
});

function clickHandler() {
  hello(props.text);
}
</script>

<template>
  <button
    class="button"
    @click="clickHandler"
  >
    <slot />
  </button>
</template>

<style lang="scss">
.button {
  width: 200px;
}

.test-class {
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
</style>
