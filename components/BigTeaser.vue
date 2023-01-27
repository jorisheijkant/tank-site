<template>
    <nuxt-link :to="`blogs/${item.slug}`" class="teaser big-teaser">
        <div class="teaser-wrapper">
            <img class="teaser-image" v-if="item.content && item.content.image && item.content.image.filename" :src="item.content.image.filename" alt="">
            <div class="teaser-content">
                <h4 class="teaser-heading" v-if="item.content && item.content.title">{{item.content.title}}</h4>
                <p class="teaser-text" v-if="item.content && item.content.intro">{{item.content.intro}}</p>
                <button class="tank-button">Read more</button>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
    export default {
        name: "BigTeaser",
        
        props: ['item']
    }
</script>

<style scoped>

</style>