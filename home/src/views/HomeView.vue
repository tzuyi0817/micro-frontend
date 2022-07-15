<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';

const isLoadingExpose1 = ref(true);
const exposes1 = defineAsyncComponent(() => import('exposes_1/HelloWorld.vue'))
  .finally(() => isLoadingExpose1.value = false);
</script>

<template>
  <div class="home">
    This is home component
    <div v-if="isLoadingExpose1">Loading exposes1</div>
    <exposes1 />
  </div>
</template>
