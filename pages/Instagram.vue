<template>
  <div class="main instagram">
    <tank-nav />

    <div class="content">
      <h2 class="insta-header">Instagram</h2>
      <p class="lead">
        Lees hier de verhalen die horen bij onze Instaposts. Klik op een plaatje
        om het verhaal te laden.
      </p>

      <div class="insta-grid">
        <template v-for="post in instagram_posts">
          <a
            class="insta-teaser"
            v-if="post.content.url && post.content.url.url"
            :key="`insta-${post.content._uid}`"
            :href="post.content.url.url"
            target="_blank"
          >
            <img
              class="teaser-image"
              :src="`https://${parseUrl(post.content.image)}`"
            />
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstagramPage",

  methods: {
    parseUrl(url) {
      return url.replace("//a.storyblok.com/", "//img2.storyblok.com/500x500/");
    },
  },
};
</script>

<style scoped></style>
