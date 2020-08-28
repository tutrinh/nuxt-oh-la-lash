<template>
  <div class="footer font-alata py-4 color-bg-black">
    <div class="container border-top py-4">
      <div class="row">
        <div class="col">
          <NuxtLink to="/">
            <img class="logo--small" src="images/hellotu-logo.svg" alt="Personal site of Tu Trinh" />
          </NuxtLink>
        </div>
        <div class="col"></div>
        <div class="col">
          <b-nav vertical class="text-right">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/styleguide">Styleguide</b-nav-item>
            <b-nav-item>Privacy Policy</b-nav-item>
          </b-nav>
        </div>
      </div>
      <div class="my-3">
        <div class="col">
          <p
            class="small text-right"
          >Copyright &copy; {{year}} tinytouchgames.com & hellotu.com All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      //year: ''
    };
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>
