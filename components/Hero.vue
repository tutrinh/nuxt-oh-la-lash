<template>
  <div>
    <div
      class="hero"
      :class="{isFullheight}"
      style="background-image: url('images/lighthouse.jpg')"
    >
    <Navbar/>
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

            <a href="cnn.com" class="btn color-bg-neon-green color-white">
              <span>vote</span>
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

