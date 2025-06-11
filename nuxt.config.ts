export default defineNuxtConfig({
  ssr: true,

  runtimeConfig: {
    storyblokToken: "I5Xclvhsp8PETrgkYZ1imAtt", // This is a public token
    public: {
      baseUrl:
        process.env.NODE_ENV === "production"
          ? "https://tankkollektiv.com"
          : "http://localhost:3000",
    },
  },

  css: ["~/styles/style.scss"],

  nitro: {
    compatibilityDate: "2025-06-11",
    preset: "netlify",
    prerender: {
      crawlLinks: true,
      routes: ["/", "/404.html", "/200.html"],
    },
  },

  experimental: {
    payloadExtraction: false,
  },

  routeRules: {
    "/api/*": { headers: { "Content-Type": "application/json" } },
  },

  modules: ["@nuxt/image", "@nuxt/eslint"],

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "TANK Kollektiv",
      meta: [
        {
          name: "description",
          content:
            "A platform for electronic music focusing mostly on dark disco and bordering genres. We have a monthly podcast and do events in The Netherlands.",
        },
        { property: "og:title", content: "TANK Kollektiv" },
        {
          property: "og:description",
          content:
            "A platform for electronic music focusing mostly on dark disco and bordering genres. We have a monthly podcast and do events in The Netherlands.",
        },
        {
          property: "og:image",
          content: "https://tankkollektiv.com/thumbnail.jpg",
        },
        {
          property: "og:url",
          content: "https://tankkollektiv.com",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:site_name",
          content: "TANK Kollektiv",
        },
      ],
    },
  },
});
