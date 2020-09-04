<template>
  <div class="image-placeholder" :style="`padding-bottom: ${height}%`">
    <b-img-lazy fluid :src="img" :class="position" />
  </div>
</template>

<script>
export default {
  name: "tu-img",
  props: {
    img: {
      type: String,
    },
    height: {
      type: Number,
    },
    position: {
      type: String,
      default: "",
    },
  },
};
</script>
