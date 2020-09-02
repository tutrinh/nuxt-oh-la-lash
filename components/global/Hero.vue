<template>
  <div>
    <div class="hero" :class="{isFullheight}" :style="`background-image: url('${bgImg}')`">
      <Navbar v-if="hasNav" :has-border="true" />
      <div class="hero-container container container-fluid">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    isFullheight: false,
    bgImg: {
      type: String,
    },
    hasNav: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

