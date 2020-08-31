<template>
  <div>
    <article>
      <h1>Home</h1>
      <input id="search" v-model="q" placeholder="Search..." />
      <ul>
        <li v-for="article in articles" :key="article.slug">
          <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  layout: "content",
  watchQuery: true,
  async asyncData({ $content, route }) {
    const q = route.query.q;

    let query = $content("articles", { deep: true }).sortBy("date", "desc");

    if (q) {
      query = query.search(q);
      // OR query = query.search('title', q)
    }

    const articles = await query.fetch();

    return {
      q,
      articles,
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
