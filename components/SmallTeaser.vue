<template>
    <a class="teaser small-teaser" :href="item.link" target="_blank">
        <div class="teaser-wrapper">
            <img class="teaser-image" v-if="item && item.image" :src="item.image" alt="">
            <div class="teaser-content">
                <h4 class="teaser-heading" v-if="item && item.title">{{item.title}}</h4>
<!--                <p class="teaser-text" v-if="item && item.title">{{item.description}}</p>-->
                <p class="link">Listen</p>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        name: "small-teaser",
        
        props: ['item']
    }
</script>

<style scoped>

</style>