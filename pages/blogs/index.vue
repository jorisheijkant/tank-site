<template>
    <div class="main blogs">
        <tank-nav />
        <div class="content">
            <h2>Articles</h2>

            <div class="teaser-grid" v-if="blogs && blogs.blogs && blogs.blogs.length > 0">
                <big-teaser v-for="blog in blogs.blogs" :item="blog" :key="blog._uid"></big-teaser>
            </div>
        </div>

        <tank-footer />
    </div>
</template>

<script setup>
const {data: blogs} = await useFetch('/api/blogs')
</script>
