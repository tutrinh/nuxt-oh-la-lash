<template>
  <div>
    <nuxtLink to="/articles">Articles</nuxtLink>
    <h2>{{article.title}}</h2>
    <nuxt-content :document="article"></nuxt-content>
    <nuxtLink
      v-if="prev"
      :to="{ name: 'articles-slug', params: { slug: prev.slug } }"
    >{{prev.title}}</nuxtLink>
    <nuxtLink
      v-if="next"
      :to="{ name: 'articles-slug', params: { slug: next.slug} }"
    >{{ next.title}}</nuxtLink>
  </div>
</template>

<script>
export default {
  layout: "content",
  async asyncData({ $content, params, error }) {
    let article;

    try {
      // artcile = await $content("articles", params.slug).fetch();
      article = await $content(`articles/${params.slug}`).fetch();
    } catch (e) {
      error({ message: " Artilce not found sdfssfa " });
    }

    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("date", "desc")
      .surround(params.slug)
      .fetch();

    return {
      article,
      prev,
      next,
    };
  },
};
</script>
