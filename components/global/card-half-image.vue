<template>
  <div class="card-half-image has-shadow">
    <div class="c-card-half-image grid-half">
      <div class="card-media">
        <div class="image-placeholder">
          <!-- <img :src="img" alt /> -->
          <b-img-lazy fluid :src="img" :class="position" />
        </div>
      </div>
      <div class="content d-flex flex-column color-black">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-half-image",
  props: {
    img: {
      type: String,
    },
    position: {
      type: String,
    },
  },
};
</script>

