<template>
  <div>
    <div class="grid-sidebar">
      <div class="sidebar">
        <input id="search" v-model="q" placeholder="Search document" />
        <h5>Table of Contents</h5>
        <ul class="content-sidebar-nav">
          <li v-for="article in articles" :key="article.slug">
            <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="main">
        <nuxt-content :document="article"></nuxt-content>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "styleguide",
  watchQuery: true,
  async asyncData({ $content, route, error }) {
    const q = route.query.q;

    let query = $content("styleguide", { deep: true }).sortBy(
      "position",
      "asc"
    );

    if (q) {
      query = query.search(q);
      // OR query = query.search('title', q)
    }

    const articles = await query.fetch();

    // Get index.md from styleguide directory
    let article;

    try {
      article = await $content("styleguide/index").fetch();
    } catch (e) {
      error({ message: "Article not found" });
    }

    return {
      q,
      articles,
      article,
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
