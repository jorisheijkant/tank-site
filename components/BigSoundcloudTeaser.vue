<template>
  <a class="teaser big-teaser" :href="item.link" target="_blank">
    <div class="teaser-wrapper">
      <nuxt-img
        class="teaser-image"
        v-if="item && item.image"
        loading="lazy"
        :src="item.image"
        alt=""
      />
      <div class="teaser-content">
        <h4 class="teaser-heading" v-if="item && item.title">
          {{ item.title }}
        </h4>
        <p class="teaser-text" v-if="item && item.description">
          {{ item.description }}
        </p>
        <button class="tank-button">Listen</button>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "BigSoundcloudTeaser",

  props: ["item"],
};
</script>

<style scoped></style>
