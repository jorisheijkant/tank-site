export default defineEventHandler(async() =>{
    let token = useRuntimeConfig().storyblokToken;
    let landingApiResponse = await $fetch(`https://api.storyblok.com/v2/cdn/stories?token=${token}&starts_with=blogs&per_page=100`, {parseResponse: JSON.parse});
    
    if(landingApiResponse.stories) {
        let blogs = landingApiResponse.stories;
        return {
            blogs: blogs,
            latestBlogs: blogs.slice(0, 3)
        }
    } else {
        return landingApiResponse
    }
})