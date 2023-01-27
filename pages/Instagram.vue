<template>
  <div class="main instagram">
    <tank-nav />

    <div class="content">
      <h2 class="insta-header">Instagram</h2>
      <p class="lead">
        Lees hier de verhalen die horen bij onze Instaposts. Klik op een plaatje
        om het verhaal te laden.
      </p>

      <div class="insta-grid" v-if="instagram_posts && instagram_posts.posts">
        <template v-for="post in instagram_posts.posts">
          <a
            class="insta-teaser"
            v-if="post.content && post.content.url && post.content.url.url"
            :key="`insta-${post.content._uid}`"
            :href="post.content.url.url"
            target="_blank"
          >
            <nuxt-img
              class="teaser-image"
              :src="`https://${parseUrl(post.content.image)}`"
              loading="lazy"
              :alt="post.content.title"
            />
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: instagram_posts } = await useFetch("/api/insta");

const parseUrl = (url) => {
  return url.replace("//a.storyblok.com/", "//img2.storyblok.com/500x500/");
};
</script>
