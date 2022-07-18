<template>
  <div class="hello">
    <p>{{ msg }}</p>
    This is a hello world component
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<style scoped>
.hello {
  border: 1px solid #000;
  padding: 20px 0;
  margin-top: 20px;
}
</style>
