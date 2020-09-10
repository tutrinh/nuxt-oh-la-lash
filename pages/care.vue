<template>
  <div>
    <Hero class :has-nav="true" :is-fullheight="false">
      <!-- Section -->
      <div class="spacer"></div>
      <div class="spacer"></div>
      <div class="spacer"></div>
      <div class="spacer"></div>
      <div class="grid-half grid-gap-1">
        <tu-card
          class="py-5 order-2 order-md-1 text-center"
          bg-img
          bg-position="bg-position-bottom"
        >
          <div class="d-flex flex-column h-100 justify-content-center">
            <div class="quote">
              <div
                class="pb-5 title jumbo color-navy-alt font-weight-700 gradient-text-orange"
              >Clean lashes are happy lashes!</div>
            </div>
            <div class="sub-title py-3 color-navy-alt">
              Appointments
              <br />are available
            </div>
            <div>
              <a
                href="tel:972-207-0093"
                class="btn jumbo color-bg-red btn-round color-white font-weight-500"
              >Book Now</a>
            </div>
          </div>
        </tu-card>

        <tu-card
          class="h-400 has-shadow p-2 is-rounded color-bg-neutral color-black order-md-2 order-1 d-flex flex-column justify-content-end"
          bg-img="../images/lashes/mihai-stefan-GARQnVRF8oM-unsplash.jpg"
          bg-position="bg-position-top"
        >
          <div class="d-flex flex-column justify-content-end align-items-center h-100 text-center">
            <div class="spacer"></div>
            <h1 class="title gradient-text font-rozha">LIVE. LOVE. LASH.</h1>
          </div>
        </tu-card>
      </div>

      <!-- End -->
    </Hero>

    <div class="section">
      <div class="container container-fluid">
        <div class="row">
          <div class="col py-5">
            <div class="title font-weight-700 p-3 my-5 mt-md-5 text-center color-black">Care Tips</div>

            <div class="color-black font-weight-500">
              <p>After your initial visit make sure you do not get the lashes wet for 24 hours, the glue need at least that amount of time for it to completely bond. Do keep in mind that any changes to the environment does affect the bonding agent. Also any oil product does disolved the glue quicker.</p>
              <p>Facial and spray tanning can be done 72 hours before or after lash appointment.</p>
            </div>

            <div
              class="sub-title font-weight-700 mb-4 mt-5 mt-md-5 color-black accent-line-right"
            >DON'T</div>

            <div class="color-black font-weight-500">
              <p
                class="px-3 border-left-red"
              >DON’T use cleansers, makeup removers, or moisturizers that contain oil on your eyes. It will loosen the bonding product used to attach your extensions.</p>
              <p
                class="px-3 border-left-red"
              >DON’T rub your eyes. Instead, you should get used to patting your eyes very carefully & gently. Doing this is better for the lashes & even more to sensitive skin around the eyes. (It can cause major wrinkles in the future by harsh rubbing)</p>
              <p
                class="px-3 border-left-red"
              >DON’T perm or tint your eyelash extensions! No eyelash curlers either!</p>
              <p
                class="px-3 border-left-red"
              >DON’T use cotton/Q-tips to remove make up, it will snag on lashes. Instead, use a make-up sponge.</p>
            </div>

            <div
              class="sub-title font-weight-700 mb-4 mt-5 mt-md-5 color-black accent-line-right"
            >DO</div>

            <div class="color-black font-weight-500">
              <p
                class="px-3 border-left-red"
              >DO keep a towel in easy reach when you shower, to gently pat around your eyes between steps in shower for locating items you need.</p>
              <p class="px-3 border-left-red">DO our blowdryer technique!</p>
              <p
                class="px-3 border-left-red"
              >Use disposable mascara wand to GENTLY brush tips to align lashes if needed.</p>
              <p
                class="px-3 border-left-red"
              >The best way to take care of your lashes is to NOT take care of them. The less you touch, the better! Again, DO our blowdryer technique!</p>
            </div>

            <!-- <div class="spacer"></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import Flickity from "vue-flickity-2";
import FsLightbox from "fslightbox-vue";

export default {
  layout: "home",
  data() {
    return {
      toggler: false,
      slide: 1,
      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
        autoPlay: 8000,
        // any options from Flickity can be used
      },
    };
  },
  methods: {
    openLightboxOnSlide: function (number) {
      this.slide = number;
      this.toggler = !this.toggler;
    },
  },
};
</script>



