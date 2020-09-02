<template>
  <div>
    <div class="grid-sidebar">
      <div class="sidebar">
        <input id="search" v-model="q" placeholder="Search document" />
        <ul class="content-sidebar-nav">
          <li v-for="article in articles" :key="article.slug">
            <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="main">
        <h1>{{article.title}}</h1>
        <nuxt-content :document="article"></nuxt-content>

        <div class="article-bottom-nav d-flex justify-content-between py-4">
          <nuxtLink
            v-if="prev"
            class="prev"
            :to="{ name: 'styleguide-slug', params: { slug: prev.slug } }"
          >
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
            >
              <path d="M10 14L3 7.5 10 1" stroke="currentColor" stroke-linecap="square" />
            </svg>
            {{prev.title}}
          </nuxtLink>
          <nuxtLink
            v-if="next"
            class="next"
            :to="{ name: 'styleguide-slug', params: { slug: next.slug} }"
          >
            {{ next.title}}
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
            >
              <path d="M5 14l7-6.5L5 1" stroke="currentColor" stroke-linecap="square" />
            </svg>
          </nuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "styleguide",
  watchQuery: true,
  async asyncData({ $content, params, error, route }) {
    const q = route.query.q;
    let query = $content("styleguide", { deep: true }).sortBy(
      "position",
      "asc"
    );

    if (q) {
      query = query.search(q);
    }

    const articles = await query.fetch();

    let article;

    try {
      // artcile = await $content("articles", params.slug).fetch();
      article = await $content(`styleguide/${params.slug}`).fetch();
    } catch (e) {
      error({ message: " Artilce not found " });
    }

    const [prev, next] = await $content("styleguide")
      .only(["title", "slug"])
      .sortBy("position", "asc")
      .surround(params.slug)
      .fetch();

    return {
      q,
      articles,
      article,
      prev,
      next,
    };
  },
  watch: {
    q() {
      this.$router
        .replace({ query: this.q ? { q: this.q } : undefined })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss">
</style>
