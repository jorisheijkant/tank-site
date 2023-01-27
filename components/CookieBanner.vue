<template>
	<client-only>
		<vue-cookie-accept-decline
				:ref="'myPanel1'"
				:elementId="'myPanel1'"
				:debug="false"
				:position="'bottom-left'"
				:type="'floating'"
				:disableDecline="false"
				:transitionName="'slideFromBottom'"
				:showPostponeButton="false"
				@status="cookieStatus"
				@clicked-accept="cookieClickedAccept"
				@clicked-decline="cookieClickedDecline">
			
			<!-- Optional -->
			<!--<p slot="postponeContent">&times;</p>-->
			
			<!-- Optional -->
			<p slot="message">We'd like to use analytics cookies to measure traffic on our website.</p>
			
			<!-- Optional -->
			<p slot="declineContent">OPT OUT</p>
			
			<!-- Optional -->
			<p slot="acceptContent">THAT'S OK</p>
		</vue-cookie-accept-decline>
	</client-only>
</template>

<script>
    export default {
        name: "CookieBanner",
	    
	    methods : {
            cookieClickedAccept() {
                console.log('yes, cookies!');
                window.location.reload(false);
            },
            cookieClickedDecline() {
                console.log('No cookies for me please!');
            },
		    cookieStatus() {
                // console.log('s')
		    }
	    }
    }
</script>
