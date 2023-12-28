<template>
  <div class="block block-text">
    <div
      class="paragraph"
      v-for="(paragraph, index) in data.text.content"
      :key="`${data._uid}-p-${index}`"
    >
      <p class="paragraph-content" v-if="paragraph.content">
        <template
          v-for="(item, paragraphIndex) in paragraph.content"
          :key="`${data._uid}-p-${index}-${paragraphIndex}`"
        >
          <template v-if="!item.marks || (item.marks.length === 1 && item.marks.find((m) => m.type === 'textStyle'))">{{ item.text }}</template>
          <strong v-else-if="item.marks.find((m) => m.type === 'bold')">{{
            item.text
          }}</strong>
          <em v-else-if="item.marks.find((m) => m.type === 'italic')">
            {{ item.text }}</em
          >
          <a
            v-else-if="item.marks.find((m) => m.type === 'link')"
            :href="item.marks.find((m) => m.type === 'link').attrs.href"
            target="_blank"
          >
            {{ item.text }}</a
          >
        </template>
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>
