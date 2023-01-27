export default defineEventHandler(async () => {
  let token = useRuntimeConfig().storyblokToken;
  let landingApiResponse = await $fetch(
    `https://api.storyblok.com/v2/cdn/stories?token=${token}&starts_with=instagram&per_page=100`,
    { parseResponse: JSON.parse }
  );

  if (landingApiResponse.stories) {
    let posts = landingApiResponse.stories;
    return {
      posts: posts,
    };
  } else {
    return landingApiResponse;
  }
});
