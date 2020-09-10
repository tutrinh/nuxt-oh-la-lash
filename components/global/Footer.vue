<template>
  <div class="footer font-alata py-4 color-nvy">
    <div class="container border-top py-4">
      <div class="row">
        <div class="col-sm-12 col-md-8">
          <NuxtLink to="/">
            <span class="title gradient-text font-rozha logo-text small pl-0">Oh Lá Lash</span>
          </NuxtLink>

          <div class>
            <div class="pb-0 pb-md-4">
              <div class="color-navy text-uppercase">Appointments are available.</div>
              <a href="tel:9722070093" class="color-navy">BOOK TODAY (972) 207-0093</a>
            </div>
            <p class="small color-navy d-none d-md-block">
              Copyright &copy; {{year}} Oh Lá Lash.
              All rights reserved.
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 footer-text-right py-4 py-md-0">
          <div class="w-100 ml-sm-0 pl-sm-0">
            <a class="color-navy footer-nav--item" href="/" active>Home</a>

            <a class="color-navy footer-nav--item" href="/pricing">Pricing</a>

            <a class="color-navy footer-nav--item" href="/care">Care Tips</a>

            <a class="color-navy footer-nav--item" href="/policy">Policy</a>
          </div>
        </div>
      </div>
      <div class="d-md-none">
        <p class="small color-navy">
          Copyright &copy; {{year}} Oh Lá Lash.
          All rights reserved.
        </p>
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
