<template>
  <div class="navbar-layout mb-4" :class="{'border-bottom': hasBorder}">
    <div class="container">
      <!-- Desktop -->
      <div class="d-flex justify-content-between py-4">
        <div class="container__logo">
          <NuxtLink to="/">
            <img class src="images/hellotu-logo.svg" alt="Personal site of Tu Trinh" />
          </NuxtLink>
        </div>
        <div class="container__menu">
          <b-nav>
            <b-nav-item active to="/" class="border-right py-0">Home</b-nav-item>
            <b-nav-item to="/styleguide" class="px-0 border-right">Styleguide</b-nav-item>
            <b-nav-item to="/articles" class="px-0">Articles</b-nav-item>
          </b-nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    hasBorder: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>