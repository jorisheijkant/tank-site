<template>
    <div class="rotating-jumbo">
        <div class="image-container">
            <img :class="{'visible': active === 1}" src="~/assets/img/podcasts.jpg" alt="" class="image">
            <img :class="{'visible': active === 2}" src="~/assets/img/events.jpg" alt="" class="image">
            <img :class="{'visible': active === 3}" src="~/assets/img/write.jpg" alt="" class="image">
        </div>
        <p class="jumbo-text">
            We do <nuxt-link to="listen" :class="{'span-active': active === 1}">a monthly podcast</nuxt-link> focused on dark disco, organize <a href="https://www.facebook.com/tankkollektiv" target="_blank" :class="{'span-active': active === 2}">events</a> to promote local dj's and <nuxt-link to="/blogs" :class="{'span-active': active === 3}">write</nuxt-link> about electronic music culture.
        </p>
    </div>
</template>

<script>
    export default {
        name: "rotating-jumbo",
        
        data() {
            return {
                active: 1,
                interval: null
            }
        },
        
        mounted() {
            this.interval = setInterval(() => {
                this.active++;
                if(this.active > 3) {
                    this.active = 1;
                }
            }, 4000)
        },

        beforeDestroy() {
            clearInterval(this.interval);
        }
    }
</script>