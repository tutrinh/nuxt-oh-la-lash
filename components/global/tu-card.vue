<template>
  <div class="tu-card" :class="bgPosition" :style="`background-image: url('${bgImg}')`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tu-card",
  props: {
    bgImg: {
      type: String,
    },
    bgPosition: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>