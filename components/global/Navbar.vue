<template>
  <div class="navbar-layout mb-4" :class="{'border-bottom': hasBorder}">
    <div class="container">
      <!-- Desktop -->
      <div class="d-flex justify-content-between py-4">
        <div class="container__logo">
          <NuxtLink to="/">
            <!-- <img class src="images/hellotu-logo.svg" alt="Personal site of Tu Trinh" /> -->
            <span class="title gradient-text jumbo font-rozha logo-text">Oh Lá Lash</span>
          </NuxtLink>
        </div>
        <div class="container__menu">
          <a
            href="#"
            @click.prevent="openMenu"
            class="icon--menu d-flex flex-column justify-content-center p-2 d-md-none"
          >
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 4H0V3h15v1zm0 4H0V7h15v1zm0 4H0v-1h15v1z"
                fill="currentColor"
              />
            </svg>
          </a>
          <b-nav class="d-none d-md-flex">
            <b-nav-item active to="/" class="py-0">Home</b-nav-item>
            <b-nav-item to="/pricing" class="px-0">Pricing</b-nav-item>
            <b-nav-item to="/care" class="px-0">Care Tips</b-nav-item>
            <b-nav-item to="/policy" class="px-0">Policy</b-nav-item>
          </b-nav>
        </div>
      </div>
    </div>
    <div class="mobile-menu active" ref="menu">
      <div class="mobile-menu--close">
        <a href="#" @click.prevent="closeMenu">
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.793 7.5L1.146 1.854l.708-.708L7.5 6.793l5.646-5.647.708.708L8.207 7.5l5.647 5.646-.707.707L7.5 8.207l-5.646 5.646-.708-.707L6.793 7.5z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
      <div class="mobile-menu__nav">
        <div class="mobile-menu--items">
          <a class="color-navy mobile-menu--item" href="/" active>Home</a>
          <br />
          <a class="color-navy mobile-menu--item" href="/pricing">Pricing</a>
          <br />
          <a class="color-navy mobile-menu--item" href="/care">Care Tips</a>
          <br />
          <a class="color-navy mobile-menu--item" href="/policy">Policy</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      menu: null,
      body: null,
    };
  },

  props: {
    hasBorder: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeMenu() {
      this.menu.classList.toggle("active");
      this.body.classList.toggle("mobile-menu-open");
    },
    openMenu() {
      // this.menu.classList.toggle("active");
      //const menu = this.$el.querySelector(".mobile-menu");
      this.menu.classList.toggle("active");
      this.body.classList.toggle("mobile-menu-open");
    },
  },
  mounted() {
    console.log("This");
    // console.log(this.$el.querySelector(".mobile-menu"));
    const menu = this.$el.querySelector(".mobile-menu");
    this.menu = menu;
    const body = document.body;
    this.body = body;
  },
};
</script>

<style lang="scss" scoped>
</style>;