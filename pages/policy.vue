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
              >Lashes make everything better</div>
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
          bg-img="../images/lashes/zulmaury-saavedra-kXC0dbqtRe4-unsplash.jpg"
          bg-position="bg-position-top"
        >
          <div class="d-flex flex-column justify-content-end align-items-center h-100 text-center">
            <div class="spacer"></div>
            <h1 class="title gradient-text font-rozha">
              Perfect lashes,
              <br />easy morning
            </h1>
          </div>
        </tu-card>
      </div>

      <!-- End -->
    </Hero>

    <div class="section">
      <div class="container container-fluid">
        <div class="row">
          <div class="col py-5">
            <div class="title font-weight-700 p-3 mt-4 mt-md-5 text-center color-black">Our Policy</div>
            <div
              class="heading font-weight-500 radient-text text-center mb-4 color-gray"
            >Please Read</div>

            <div class="py-4 color-black font-weight-500">
              <p>Prior to arriving at your appointment, we ask that you thoroughly remove any mascara or liquid eye liner you have on your eyes. (Or can be removed for small fee.) If your make up is not properly removed, the bonding agent will get mixed with the makeup residue, making it impossible to apply lashes successfully.</p>
            </div>

            <p
              class="font-weight-500 color-black px-3 border-left-red"
            >First day will start on day of serviced.</p>

            <p class="color-black font-weight-500 px-3 border-left-red">
              Week 1 = 9 days
              <br />Week 2 = 16 days
              <br />Week 3 = 23 days
              <br />Week 4 = 24+ days
              <br />
            </p>

            <div class="color-black font-weight-500">
              <p class="px-3 border-left-red">NO REFUNDS.</p>
              <p
                class="px-3 border-left-red"
              >Cancellation requires 24 hours advance notification. If not then a deposit will be required on the next visit.</p>
              <p
                class="px-3 border-left-red"
              >Your appointment will be rescheduled if you are more than 10 minutes late.</p>
              <p
                class="px-3 border-left-red"
              >Please arrive 10 minutes before your scheduled appointment</p>
              <p class="px-3 border-left-red">No eye makeup & mascara on day of service.</p>
              <p
                class="px-3 border-left-red"
              >Do not get the lashes wet for at least 48 hours for adhesive to completely bond.</p>
              <p
                class="px-3 border-left-red"
              >If you lose more than 75% of your lashes it will be considered a full set, please let us know so that we can book you properly in order for the technician to have time for your service.</p>
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



