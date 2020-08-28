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
                  <a to="/styleguide" class="btn color-bg-neon-blue">Styleguide</a>
                </div>
              </div>
              <div class="hello-card border-right">
                <div>
                  <div class="title font-rozha mb-3">Another Title</div>
                  <div class="sub-title mb-2">Another subtitle</div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, velit.</p>
                </div>
                <div class="my-4">
                  <a to="/styleguide" class="cta">Styleguide</a>
                </div>
              </div>
              <div class="hello-card">
                <div>
                  <div class="title font-rozha mb-3">Another Title</div>
                  <div class="sub-title mb-2">Another subtitle</div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur recusandae sequi reiciendis quas molestiae ipsum, velit ullam impedit odio maiores voluptatum commodi maxime deleniti laudantium nulla! Odit in fugiat nisi.</p>
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



