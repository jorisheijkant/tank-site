<template>
  <div class="main landing">
    <tank-nav />

    <rotating-jumbo />

    <!-- Latest podcasts block -->

    <section
      class="section"
      v-if="
        podcasts &&
        podcasts.latestPodcasts &&
        podcasts.latestPodcasts.length > 0
      "
    >
      <h3>Latest podcasts</h3>
      <div class="teaser-grid">
        <small-teaser
          v-for="podcast in podcasts.latestPodcasts"
          :item="podcast"
          :key="podcast.guid"
        />
      </div>

      <nuxt-link to="listen" class="tank-button">All podcasts</nuxt-link>

      <hr class="section-close" />
    </section>

    <!-- Blog block -->

    <section
      class="section"
      v-if="blogs && blogs.latestBlogs && blogs.latestBlogs.length > 0"
    >
      <h3>Blog</h3>
      <div class="teaser-grid">
        <big-teaser
          v-for="blog in blogs.latestBlogs"
          :item="blog"
          :key="blog._uid"
        ></big-teaser>
      </div>

      <nuxt-link to="/blogs" class="tank-button">More articles</nuxt-link>
      <hr class="section-close" />
    </section>

    <tank-footer></tank-footer>
  </div>
</template>

<script setup>
const { data: blogs } = await useFetch("/api/blogs");
const { data: podcasts } = await useFetch("/api/podcasts");
</script>
