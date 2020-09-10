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
              >When life gives you lemons sell them for lashes</div>
            </div>
            <div class="sub-title py-3 color-navy-alt">Appointments <br> are available</div>
            <div>
              <a href="tel:972-207-0093" class="btn jumbo color-bg-red btn-round color-white font-weight-500">
                Book Now
               
              </a>
            </div>
          </div>
        </tu-card>

        <tu-card
          class="has-shadow p-2 is-rounded color-bg-neutral color-black order-md-2 order-1 d-flex flex-column justify-content-end"
          bg-img="images/lashes/autumn-goodman-vTL_qy03D1I-unsplash.jpg"
          bg-position="bg-position-bottom"
        >
          <div class="d-flex flex-column justify-content-end align-items-center h-100">
            <div class="spacer"></div>
            <h1 class="title jumbo gradient-text font-rozha">Hello You</h1>
          </div>
        </tu-card>
      </div>

      <!-- End -->
    </Hero>

    <div class="section">
      <div class="container container-fluid py-5">
        <div class="row">
          <div class="col col-md-10 margin-auto">
            <div class="row">
              <div class="col col-md-12 color-black font-weight-500">
                <p>We add length & give fullness to your eyelashes. We use our single synthetic fiber polyester thread-like materials, applied individually utilizing your natural lash as base. Bonding them by using cyanoacrylate adhesive. This Adhesive is designed to bond to your natural eyelash, creating a fuller, longer look. Our extensions come in various lengths, and thickness to perfect your everyday needs. No need to waste valuable time massively applying mascara resulting in tarantula legs! Extensions will also give eyeliner effect giving you one less thing to worry about in the mornings.</p>
                <p>Come in and use that time to treat yourself for a well deserved nap, wake up looking and feeling beautiful. Once you try our eyelash extensions, you will SURELY trash your mascara forever! Fair warning, it’s highly addicting!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  

    <!-- End -->

    <!-- Section -->
    <div class="section d-none d-lg-none  d-md-block">
      <div class="container container-fluid py-4">
        <div class="row">
          <div class="col-md-10 col margin-auto">
            <a href="#" @click.prevent="toggler = !toggler">
              <card-half-image
                img="images/lashes/hayley-kim-design-sRSRuxkOuzI-unsplash.jpg"
                position
                class="is-rounded color-bg-navy"
              >
                <!-- Slot for content -->
                <div class="title mb-4 font-rozha font-weight-500 color-coral">Gallery</div>
                <div class=" color-coral"></div>
                <div class=" color-coral">
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    style="vertical-align: text-top"
                  >
                    <path
                      d="M2 1h5v1H2V1zm6 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 12.5A1.5 1.5 0 001.5 14h12a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0013.5 3h-12A1.5 1.5 0 000 4.5v8zM9.5 6a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                      fill="currentColor"
                    />
                  </svg>
                  See Our Great Work
                </div>
                <!-- End for content -->
              </card-half-image>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- End -->

    <!-- Section -->
    <div class="section">
      <div class="container container-fluid py-4">
        <div class="row">
          <div class="col col-md-10 margin-auto">
            <div class="row">
              <div class="col-sm-12 d-md-none d-lg-block col-lg-4 h-400">
                <a href="#" @click.prevent="toggler = !toggler">
                <tu-card
                  class="has-shadow p-5 is-rounded color-bg-neutral color-black h-100"
                  bg-img="images/lashes/hayley-kim-design-sRSRuxkOuzI-unsplash.jpg"
                  bg-position
                >
                  <div class="d-flex flex-column justify-content-between h-100">
                    <div class="sub-title gradient-text-pink font-rozha">See our amazing work</div>
                    <div class="color-coral">
                      <svg
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        style="vertical-align: text-top"
                      >
                        <path
                          d="M2 1h5v1H2V1zm6 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                          fill="currentColor"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 12.5A1.5 1.5 0 001.5 14h12a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0013.5 3h-12A1.5 1.5 0 000 4.5v8zM9.5 6a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                          fill="currentColor"
                        />
                      </svg>
                      Click here
                    </div>
                  </div>
                </tu-card>
                </a>
                <div class="d-flex flex-column justify-content-center"></div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-4 h-400 mt-5 mt-md-0">
                <tu-card
                  class="has-shadow p-5 is-rounded color-bg-neutral color-black h-100"
                  bg-img="images/lashes/zulmaury-saavedra-kXC0dbqtRe4-unsplash.jpg"
                  bg-position
                >
                  <div class="d-flex flex-column justify-content-end h-100">
                    <div class="sub-title gradient-text font-rozha">Lashes speak louder than words</div>
                  </div>
                </tu-card>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center h-400 mt-4 mt-md-0">
                <!-- Card -->
                <tu-card class bg-img bg-position="bg-position-bottom">
                  <div class="d-flex flex-column h-100">
                    <!-- <div class="title color-navy-alt">Testimonials</div> -->
                    <div class="font-weight-500">
                      <div class="carousel-cell">
                        <blockquote class="color-black">
                          "Honest advice when it comes to the length of your lashes & what looks good on you.".
                          <span
                            class="color-navy-alt"
                          >-Kelly L</span>
                        </blockquote>
                      </div>
                      <div class="carousel-cell">
                        <blockquote class="color-black">
                          "Takes the time to get to know you and make recommendation on what looks best. .
                          <span
                            class="color-navy-alt"
                          >-Mimi N</span>
                        </blockquote>
                      </div>
                      <div class="carousel-cell">
                        <blockquote class=" color-black">
                          "Absolutely love my lashes..."
                          <span class="color-navy-alt">-Linda K.</span>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </tu-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section -->
    <div class="section d-none">
      <div class="container container-fluid py-4">
        <div class="row">
          <div class="col-md-10 col margin-auto">
            
              <card-half-image
                img="images/lashes/hayley-kim-design-sRSRuxkOuzI-unsplash.jpg"
                position
                class="is-rounded color-bg-navy"
              >
                <!-- Slot for content -->
                <div class="title mb-4 font-rozha font-weight-500 color-coral">Gallery</div>
                <div class="sub-title color-coral"></div>
                <div class="sub-title color-coral">
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    style="vertical-align: text-top"
                  >
                    <path
                      d="M2 1h5v1H2V1zm6 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 12.5A1.5 1.5 0 001.5 14h12a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0013.5 3h-12A1.5 1.5 0 000 4.5v8zM9.5 6a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                      fill="currentColor"
                    />
                  </svg>
                  See Our Great Work
                </div>
                <p class="color-coral font-gilda font-weight-500"></p>
                <!-- End for content -->
              </card-half-image>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- End -->

    <div class="section">
      <div class="container container-fluid">
        <div class>
          <div class="py-5">
            <div class="title font-weight-700 mt-4 mt-md-5 gradient-text text-center">Locations</div>
            <div class="spacer"></div>

            <!-- Grid 3 Cols -->
            <div class="row">
              <div class="hello-card col-md-4">
                <div class="text-center">
                  <div class="title font-rozha mb-3 color-navy">Plano</div>
                  <div class="heading mb-2 font-weight-500">Phenix Salon Suites</div>
                  <p class="color-navy-alt font-weight-500">
                    5964 W Parker Rd. #116
                    <br />Studio 127
                    <br />Plano, TX 75093
                    <br />
                  </p>
                </div>
                <div class="my-4 text-center">
                  <a
                    href="https://goo.gl/maps/BWo4WJzHdum"
                    class="btn color-bg-red btn-round color-white"
                  >
                    Direction
                    <span class="link-icon">
                      <svg
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M7.5 8.495a2 2 0 002-1.999 2 2 0 00-4 0 2 2 0 002 1.999z"
                          stroke="currentColor"
                          stroke-linecap="square"
                        />
                        <path
                          clip-rule="evenodd"
                          d="M13.5 6.496c0 4.997-5 7.995-6 7.995s-6-2.998-6-7.995A5.999 5.999 0 017.5.5c3.313 0 6 2.685 6 5.996z"
                          stroke="currentColor"
                          stroke-linecap="square"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div class="hello-card mt-5 mt-md-0 col-md-4">
                <div class="text-center">
                  <div class="title font-rozha mb-3 color-navy">Garland / Rowlett</div>
                  <div class="heading mb-2 color-navy-alt font-weight-500">Firewheel Salons</div>

                  <p class="color-navy-alt font-weight-500">
                    4280 Lavon Dr. #280
                    <br />Studio 56
                    <br />Garland, TX 75040
                    <br />
                  </p>
                </div>
                <div class="my-4 text-center">
                  <a
                    href="https://goo.gl/maps/jxA9PM8cRYm"
                    class="btn color-bg-red btn-round color-white"
                  >
                    Direction
                    <span class="link-icon">
                      <svg
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M7.5 8.495a2 2 0 002-1.999 2 2 0 00-4 0 2 2 0 002 1.999z"
                          stroke="currentColor"
                          stroke-linecap="square"
                        />
                        <path
                          clip-rule="evenodd"
                          d="M13.5 6.496c0 4.997-5 7.995-6 7.995s-6-2.998-6-7.995A5.999 5.999 0 017.5.5c3.313 0 6 2.685 6 5.996z"
                          stroke="currentColor"
                          stroke-linecap="square"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div class="hello-card mt-5 mt-md-0 col-md-4">
                <div class="text-center">
                  <div class="title font-rozha mb-3 color-navy">Southlake</div>
                  <div class="heading mb-2 color-navy-alt font-weight-500">Phenix Salon Suites</div>
                  <p class="color-navy-alt font-weight-500">
                    2750 E. Southlake Blvd.
                    <br />Studio 125
                    <br />Southlake, TX 76092
                    <br />
                  </p>
                </div>
                <div class="my-4 text-center">
                  <a
                    href="https://goo.gl/maps/8mxnN9z36PYnLn4g6"
                    class="btn color-bg-red btn-round color-white"
                  >
                    Direction
                    <span class="link-icon">
                      <svg
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M7.5 8.495a2 2 0 002-1.999 2 2 0 00-4 0 2 2 0 002 1.999z"
                          stroke="currentColor"
                          stroke-linecap="square"
                        />
                        <path
                          clip-rule="evenodd"
                          d="M13.5 6.496c0 4.997-5 7.995-6 7.995s-6-2.998-6-7.995A5.999 5.999 0 017.5.5c3.313 0 6 2.685 6 5.996z"
                          stroke="currentColor"
                          stroke-linecap="square"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <FsLightbox
      :toggler="toggler"
      :slide="slide"
      :sources="[
'images/gallery/gal_01.png',
'images/gallery/gal_02.png',
'images/gallery/gal_03.png',
'images/gallery/gal_04.png',
]"
    />

    <!-- End lightbox -->
  </div>
</template>


<script>
// import Flickity from "vue-flickity-2";
import FsLightbox from "fslightbox-vue";

export default {
  layout: "home",
  components: { FsLightbox },
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



