<template>
  <div class="main listen">
    <tank-nav />
    <div class="content">
      <h2>Our Spotify lists</h2>
      <a class="listen-link"
        >We have some nice playlists on our Spotify.
        <a
          href="https://open.spotify.com/user/tankgroningen?si=PQBn-5KnT_i0NvxWBcer-A"
          target="_blank"
          class="listen-link-span"
          >Listen here.</a
        ></a
      >

      <h2>Our podcasts</h2>

      <div class="teaser-grid" v-if="podcasts && podcasts.podcasts">
        <big-soundcloud-teaser
          v-for="podcast in podcasts.podcasts"
          :item="podcast"
          :key="podcast.guid"
        ></big-soundcloud-teaser>
      </div>
    </div>

    <tank-footer />
  </div>
</template>

<script setup>
const { data: podcasts } = await useFetch("api/podcasts", {key: "podcasts", initialCache: false});
</script>
 
