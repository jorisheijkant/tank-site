<template>
    <div class="block block-iframe">
        <div class="iframe-wrapper" :class="`type-${data.iframe_type[0]}`" v-if="data && data.iframe_url && data.iframe_type && data.iframe_type[0]" v-html="data.iframe_url"></div>
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>
