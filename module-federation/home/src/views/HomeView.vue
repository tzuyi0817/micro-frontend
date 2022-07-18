<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';

const isLoadingExpose1 = ref(true);
const exposes1 = defineAsyncComponent(() => import('exposes_1/HelloWorld.vue')
  .finally(() => {
    isLoadingExpose1.value = false;
  }));
</script>

<template>
  <div class="home">
    This is home component
    <div v-if="isLoadingExpose1">Loading exposes1</div>
    <exposes1 msg="exposes_1 hello world" />

    <div class="hello"></div>
  </div>
</template>

<style scoped>
.hello {
  border: 1px solid red;
  padding: 20px 0;
  margin-top: 20px;
}
</style>
