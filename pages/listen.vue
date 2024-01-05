<template>
  <div class="main listen">
    <tank-nav />
    <div class="content">
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
const { data: podcasts } = await useFetch("/api/podcasts");
</script>
