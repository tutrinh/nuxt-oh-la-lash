<template>
  <div>
    <div
      class="hero"
      :class="{isFullheight}"
      style="background-image: url('images/lighthouse.jpg')"
    >
      <Navbar :has-border="true" />
      <div class="hero-container container container-fluid">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    isFullheight: false,
  },
};
</script>

