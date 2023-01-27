<template>
  <div class="block block-image">
    <img
      class="image"
      v-if="data && data.image && data.image.filename"
      :class="`image-${data.size}`"
      :src="data.image.filename"
      :alt="data.image.alt"
    />
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>
