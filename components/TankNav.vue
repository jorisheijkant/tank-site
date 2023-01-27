<template>
    <div class="navbar-wrapper">
        <nav class="navbar">
            <div class="nav-left"></div>
            
            <div class="nav-middle">
                <nuxt-link to="/" class="nav-heading"><span class="boldspan">TANK</span> kollektiv</nuxt-link>
            </div>
            
            <div class="nav-right">
                <nuxt-link to="/listen" class="listen-link">Listen ↗</nuxt-link>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "TankNav"
    }
</script>