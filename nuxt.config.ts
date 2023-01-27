// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    storyblokToken: "I5Xclvhsp8PETrgkYZ1imAtt", // This is a public token
    public: {
      baseUrl: process.env.NODE_ENV === "production"
          ? "https://tankkollektiv.com"
          : "http://localhost:3000",
    },
  },

  css: ["~/styles/style.scss"]
});
