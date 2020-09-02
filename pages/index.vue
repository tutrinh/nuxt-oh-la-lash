<template>
  <div>
    <Hero class="color-bg-red" :has-nav="true" :is-fullheight="true" bg-img="images/lighthouse.jpg">
      <div class="row">
        <div class="col-md-6">
          <!-- <div class="title jumbo my-4">Welcome</div> -->
          <!-- <img class="mt-4" src="images/hellotu-logo.svg" alt /> -->
          <div
            class="sub-title my-4"
          >Subtitle - Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, pariatur?</div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti fugiat inventore velit culpa incidunt ea aliquam, quaerat unde. Eum praesentium quam incidunt eos numquam laudantium harum laboriosam dolorem in?</p>

          <div class="spacer"></div>
          <div class="spacer"></div>

          <div class="row my-4">
            <div class="col border-right">
              <div class="sub-title color-sunset">hello</div>
              <p
                class="line-height-tight"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vero quasi sunt?</p>
            </div>
            <div class="col">
              <div class="sub-title color-neon-green">hello</div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempora eius soluta est!
            </div>
            <div class="col">
              <div class="isCard hasShadow">
                <div class="sub-title color-neon-blue">hello</div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div class="col">
              <div class="isCard hasShadow color-bg-white color-black">
                <div class="sub-title color-neon-blue">hello</div>
                <p class="line-height-tight">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>

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

    <!-- Section -->
    <div class="section color-bg-white">
      <div class="container container-fluid py-4">
        <div class="row">
          <div class="col">
            <card-half-image img="images/lashes/hayley-kim-design-sRSRuxkOuzI-unsplash.jpg">
              <!-- Slot for content -->
              <div class="title jumbo font-rozha mb-4">Services</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a qui sequi, consectetur, numquam similique facere ea cupiditate nisi expedita exercitationem aspernatur vero nulla blanditiis. Tenetur dolores distinctio explicabo facere.</p>

              <div class>
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
            <div class="title jumbo font-rozha mt-4">Another Section</div>
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
                  <a href="/styleguide" class="btn color-bg-neon-blue">
                    Styleguide
                    <span class="link-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
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
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
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
};
</script>



