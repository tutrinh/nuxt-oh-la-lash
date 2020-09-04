<template>
  <div>
    <Hero
      class="color-bg-red"
      :has-nav="true"
      :is-fullheight="true"
      bg-img="images/lashes/alexander-krivitskiy-PoogTvXLv8U-unsplash.jpg"
      bg-position="bg-position-top"
    >
      <div class="row">
        <div class="col-md-6">
          <!-- <div class="title jumbo my-4">Welcome</div> -->
          <!-- <img class="mt-4" src="images/hellotu-logo.svg" alt /> -->
          <div
            class="sub-title my-4"
          >Subtitle - Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, pariatur?</div>

          <div class="spacer"></div>
          <div class="spacer"></div>

          <tu-card
            class="has-shadow p-5 is-rounded color-bg-neutral color-black"
            bg-img="images/lashes/autumn-goodman-vTL_qy03D1I-unsplash.jpg"
            bg-position="bg-position-bottom"
          >
            <div class="d-flex flex-column justify-content-end align-items-center">
              <div class="spacer"></div>
              <div class="spacer"></div>
              <div class="spacer"></div>
              <div class="spacer"></div>
              <h1 class="title jumbo gradient-text font-rozha">Hello You</h1>
            </div>
          </tu-card>

          <div class="row">
            <div class="col my-4">
              <div class>
                <div class="title font-rozha mb-2 color-neon-green">Lorem ipsum dolor sit amet.</div>
                <div
                  class="sub-title"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta?</div>
              </div>
            </div>
          </div>

          <a href="/styleguide" class="btn color-bg-neon-blue">
            Styleguide
            <span class="link-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </a>
          <br />
          <a href="/styleguide" class="cta py-4">
            Styleguide
            <span class="link-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </Hero>

    <div class="section color-bg-white">
      <div class="container container-fluid py-4">
        <div class="grid-three grid-gap-1">
          <div class="has-shadow">
            <tu-img
              img="images/lashes/atikh-bana-zPFws4toKhg-unsplash.jpg"
              :height="75"
              position="object-position-top"
            ></tu-img>
          </div>
          <div class="has-shadow">
            <tu-img img="images/lashes/hayley-kim-design-sRSRuxkOuzI-unsplash.jpg" :height="75"></tu-img>
          </div>
          <div class="has-shadow">
            <tu-img img="images/lashes/semen-zhuravlev-UtSk30R6i5c-unsplash.jpg" :height="75"></tu-img>
          </div>
        </div>
      </div>
    </div>

    <!-- Section -->
    <div class="section color-bg-white">
      <div class="container container-fluid py-4">
        <div class="grid-half grid-gap-1">
          <tu-card
            class="has-shadow p-5 is-rounded color-bg-neutral color-black"
            bg-img="images/lashes/autumn-goodman-vTL_qy03D1I-unsplash.jpg"
            bg-position="bg-position-bottom"
          >
            <div class="d-flex flex-column justify-content-between">
              <h1 class="title jumbo gradient-text font-rozha">Hello Again And Again</h1>
              <div class="spacer"></div>
              <div class="spacer"></div>
              <div>
                <div class="title font-montserrat font-weight-700 color-red">Another Card</div>
                <p
                  class="line-height-tight"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam tenetur quod quibusdam hic veniam inventore eaque repudiandae, eos optio velit, ipsa excepturi? Iste sapiente natus ipsam sint quo nemo quis?</p>
              </div>
            </div>
          </tu-card>
          <tu-card
            class="has-shadow p-5 is-rounded color-bg-coral"
            bg-img
            bg-position="bg-position-bottom"
          >
            <h1 class="title jumbo gradient-text font-rozha">Hello Again And Again</h1>
            <div class="sub-title">Another Card</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam tenetur quod quibusdam hic veniam inventore eaque repudiandae, eos optio velit, ipsa excepturi? Iste sapiente natus ipsam sint quo nemo quis?</p>
          </tu-card>
        </div>
      </div>
    </div>

    <!-- Section -->
    <div class="section color-bg-white">
      <div class="container container-fluid py-4">
        <div class="row">
          <div class="col">
            <card-half-image
              img="images/lashes/alexander-krivitskiy-PoogTvXLv8U-unsplash.jpg"
              position="object-position-top"
            >
              <!-- Slot for content -->
              <div class="title accent-line-right jumbo mb-4">Services</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a qui sequi, consectetur, numquam similique facere ea cupiditate nisi expedita exercitationem aspernatur vero nulla blanditiis. Tenetur dolores distinctio explicabo facere.</p>

              <div class="py-4">
                <a href="/styleguide" class="btn color-bg-black">
                  Styleguide
                  <span class="link-icon">
                    <svg
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path d="M13.5 7.5l-4-4m4 4l-4 4m4-4H1" stroke="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
              <!-- End for content -->
            </card-half-image>
          </div>
        </div>
      </div>
    </div>
    <!-- End -->

    <div class="section">
      <div class="container container-fluid">
        <div class="row">
          <div class="col py-4 grid-item-center">
            <div class="title jumbo font-rozha mt-4 gradient-text">Oh Lá Lash</div>
            <div class="spacer"></div>

            <!-- Grid 3 Cols -->
            <div class="grid-three">
              <div class="hello-card border-right">
                <div>
                  <div class="title font-rozha mb-3">Another Title</div>
                  <div class="sub-title mb-2">Another subtitle</div>
                  <p>ipsum, velit ullam impedit odio maiores voluptatum commodi maxime deleniti laudantium nulla! Odit in fugiat nisi.</p>
                </div>
                <div class="my-4">
                  <a href="/styleguide" class="btn color-bg-red btn-round color-white">
                    Map It
                    <span class="link-icon">
                      <svg
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                      >
                        <path d="M13.5 7.5l-4-4m4 4l-4 4m4-4H1" stroke="currentColor" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div class="hello-card border-right">
                <div>
                  <div class="title font-rozha mb-3">Another Title 2</div>
                  <div class="sub-title mb-2">Another subtitle</div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, velit.</p>
                </div>
                <div class="my-4">
                  <a href="/styleguide" class="cta">
                    Styleguide
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
              <div class="hello-card">
                <div>
                  <div class="title font-rozha mb-3">Another Title 3</div>
                  <div class="sub-title mb-2">Another subtitle</div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur recusandae sequi reiciendis quas molestiae ipsum, velit ullam impedit odio maiores voluptatum commodi maxime deleniti laudantium nulla! Odit in fugiat nisi.</p>
                  <div class="title font-marker color-red">VOTE!</div>
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
export default {
  name: "index",
  layout: "home",
  mounted() {
    var windowLocation =
      "https://sitecoretest.heart.org/en/test_pages/impact-map";

    var regMatch = /\/impact-map/;

    console.log("REG MATCH");
    console.log(window.location.href);

    console.log(regMatch.test(windowLocation)); //Worked output true

    //     html {
    //   scroll-behavior: smooth;
    // }

    // if there is a value in the state dropdown then scroll to map
    // document.getElementById('state').value !== "" then scroll to id #map-results

    // var main = document.body
    // var mapContainer = document.querySelector('.container-fluid.impact-map')
    // main.scrollTop = mapContainer.offsetTop
  },
};
</script>



