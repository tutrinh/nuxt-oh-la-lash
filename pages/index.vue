<template>
  <div>
    <Hero :is-fullheight="true" />
    <div class="section color-bg-black">
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



