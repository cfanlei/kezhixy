<template>
  <left-bar />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import LeftBar from './LeftBar.vue';
  export default defineComponent({
    components: {
      LeftBar,
    },
  });
</script>

<style scoped></style>
