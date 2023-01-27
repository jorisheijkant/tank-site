export default defineEventHandler(async(event) =>{
  if(event && event.context && event.context.params && event.context.params.blog) {
    let token = useRuntimeConfig().storyblokToken;
    let landingApiResponse = await $fetch(`https://api.storyblok.com/v2/cdn/stories/blogs/${event.context.params.blog}?token=${token}`, {parseResponse: JSON.parse});
    
    return landingApiResponse;
  } else {
    return {
      "error": "No blog slug provided"
    }
  }
})