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
              >Lashes are girl's best friend</div>
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
          bg-img="../images/lashes/lash01.jpg"
          bg-position="bg-position-center"
        >
          <div class="d-flex flex-column justify-content-end align-items-center h-100">
            <div class="spacer"></div>
            <h1 class="title gradient-text font-rozha">Hey Girl, nice lashes</h1>
          </div>
        </tu-card>
      </div>

      <!-- End -->
    </Hero>

    <div class="section py-md-5">
      <div class="container container-fluid">
        <div class>
          <div class="py-5">
            <!-- <div class="title font-weight-700 mt-4 mt-md-5 gradient-text text-center">Prices</div> -->
            <!-- <div class="spacer"></div> -->

            <!-- Grid 3 Cols -->
            <div class="row my-5">
              <!-- col -->
              <div class="col-sm-12 col-md-12 col-lg-4">
                <div class="d-flex flex-column justify-content-center text-center h-100">
                  <div
                    class="title jumbo font-rozha gradient-text pb-5 pb-md-5 pb-lg-0"
                  >Our Most Popular</div>
                </div>
              </div>

              <!-- col -->
              <div class="col-sm-12 col-md-6 col-lg-4 px-md-4 mb-5">
                <div class="is-rounded has-shadow p-4 color-bg-white-alt featured-price-card">
                  <div class="color-black text-center">
                    <div class="h5 mt-4 font-weight-700 color-red">3D / 6D Volume Lashes</div>
                    <h1 class="font-weight-700 title jumbo color-red">250</h1>
                    <h6 class="color-red">Fullset</h6>
                  </div>

                  <table class="table mt-5 color-red">
                    <tbody>
                      <tr>
                        <th scope="row" class="border-0">Fullset</th>
                        <td class="border-0 text-right">250</td>
                      </tr>
                      <tr>
                        <th scope="row">1 week fill</th>
                        <td class="text-right">50</td>
                      </tr>
                      <tr>
                        <th scope="row">2 weeks fill</th>
                        <td class="text-right">75</td>
                      </tr>
                      <tr>
                        <th scope="row">3 weeks fill</th>
                        <td class="text-right">100</td>
                      </tr>
                      <tr>
                        <th scope="row">4 weeks fill</th>
                        <td class="text-right">150</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="col-sm-10 col-md-6 col-lg-4 px-md-4">
                <div class="is-rounded has-shadow p-4 color-bg-red featured-price-card">
                  <div class="color-black text-center">
                    <div class="h5 mt-4 font-weight-700 color-white-alt">Eyelash Extensions</div>
                    <h1 class="font-weight-700 title jumbo color-white">200</h1>
                    <h6 class="color-white-alt">Fullset</h6>
                  </div>

                  <table class="table mt-5 color-white">
                    <tbody>
                      <tr>
                        <th scope="row" class="border-0">Fullset</th>
                        <td class="border-0 text-right">200</td>
                      </tr>
                      <tr>
                        <th scope="row">1 week fill</th>
                        <td class="text-right">25</td>
                      </tr>
                      <tr>
                        <th scope="row">2 weeks fill</th>
                        <td class="text-right">50</td>
                      </tr>
                      <tr>
                        <th scope="row">3 weeks fill</th>
                        <td class="text-right">75</td>
                      </tr>
                      <tr>
                        <th scope="row">4 weeks fill</th>
                        <td class="text-right">99</td>
                      </tr>
                      <tr>
                        <th scope="row">Natural full set</th>
                        <td class="text-right">99</td>
                      </tr>
                      <tr>
                        <th scope="row">Bottom full set</th>
                        <td class="text-right">20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Row -->
            <div class="row">
              <div class="col-sm-12 text-center py-md-5">
                <div class="title jumbo font-rozha gradient-text py-5 py-md-0">We Also Offer</div>
              </div>
              <!-- col -->
              <div class="col-sm-12 col-md-6 col-lg-4 px-5">
                <div class="price-group color-navy">
                  <!-- <div class="heading font-weight-700 pb-3 color-red">Tinting</div> -->

                  <table class="table table-borderless color-black-alt">
                    <thead>
                      <tr>
                        <th class="h4 font-weight-700">Tinting</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Combo</th>
                        <td>40</td>
                      </tr>
                      <tr>
                        <th scope="row">Lash</th>
                        <td>25</td>
                      </tr>
                      <tr>
                        <th scope="row">Eyebrows</th>
                        <td>25</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- col -->
              <div class="col-sm-12 col-md-6 col-lg-4 px-5">
                <div class="price-group color-navy">
                  <!-- <div class="heading font-weight-700 pb-3 color-red">Waxing</div> -->

                  <table class="table table-borderless color-black-alt">
                    <thead>
                      <tr>
                        <th class="h4 font-weight-700">Waxing</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Lips</th>
                        <td>8</td>
                      </tr>
                      <tr>
                        <th scope="row">Eyebrows</th>
                        <td>12</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- col -->
              <div class="col-sm-12 col-md-6 col-lg-4 px-5">
                <div class="price-group color-navy">
                  <!-- <div class="heading font-weight-700 pb-3 color-red">Removal</div> -->

                  <table class="table table-borderless color-black-alt">
                    <thead>
                      <tr>
                        <th class="h4 font-weight-700">Removal</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Removal</th>
                        <td>20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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



