<template>
  <div class="main blog" v-if="blog">
    <tank-nav />

    <article class="article" v-if="blog.story && blog.story.content">
      <header class="article-header">
        <h1 class="title" v-if="blog.story.content.title">
          {{ blog.story.content.title }}
        </h1>
        <p class="lead" v-if="blog.story.content.intro">
          {{ blog.story.content.intro }}
        </p>
        <time class="pub-time">{{ parseDate(blog.story.published_at) }}</time>

        <img
          class="header-image"
          v-if="blog.story.content.image && blog.story.content.image.filename"
          :src="blog.story.content.image.filename"
        />
      </header>

      <section class="article-content">
        <component
          v-for="block in blog.story.content.content_blocks"
          :key="block._uid"
          :is="`${parseBlockName(block.component)}`"
          :data="block"
        />
      </section>

      <nuxt-link to="/blogs" class="tank-button">More articles</nuxt-link>
    </article>

    <tank-footer />
  </div>
</template>

<script setup>
const BlockText = resolveComponent("BlockText");
const BlockImage = resolveComponent("BlockImage");
const BlockSubheading = resolveComponent("BlockSubheading");
const BlockIframe = resolveComponent("BlockIframe");

const { params } = useRoute();
const { data: blog, execute: fetchBlog } = useFetch(`/api/blog/${params.id}/`);

const setHead = () => {
  if (blog && blog.value) {
    useHead({
      title: `${blog.value.story.content.title} - TANK Kollektiv`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: blog.value.story.content.intro,
        },
      ],
    });

    useSeoMeta({
      title: `${blog.value.story.content.title} - TANK Kollektiv`,
      ogTitle: `${blog.value.story.content.title} - TANK Kollektiv`,
      description: blog.value.story.content.intro,
      ogDescription: blog.value.story.content.intro,
      image: blog.value.story.content.image.filename,
      ogImage: blog.value.story.content.image.filename,
      url: `https://tank-kollektiv.com/blogs/${blog.value.story.slug}`,
      ogUrl: `https://tank-kollektiv.com/blogs/${blog.value.story.slug}`,
      type: "article",
      publishedTime: blog.value.story.published_at,
      modifiedTime: blog.value.story.updated_at,
    });
  }
};

onMounted(() => {
  fetchBlog().then(setHead);
});

// Set a method
const parseDate = (date) => {
  // return date;
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const parseBlockName = (name) => {
  let nameParts = name.split("_");
  return `block-${nameParts[0]}`;
};

// Set head and seo data
</script>
