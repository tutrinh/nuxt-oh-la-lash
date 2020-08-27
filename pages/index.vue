<template>
  <div>
    <Hero :is-fullheight="true" />
    <div class="container">
      
      <h1 class="title">
        portfolio-nuxt
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <NuxtLink to="/styleguide">Style Guide</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>


