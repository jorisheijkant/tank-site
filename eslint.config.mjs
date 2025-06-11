import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  {
    rules: {
      "no-cond-assign": "warn",
      "no-const-assign": "warn",
      "no-console": "warn",
      "no-dupe-args": "warn",
      "no-dupe-keys": "warn",
      "for-direction": "warn",
      "no-undef": "warn",
      "valid-typeof": "warn",
      "vue/no-v-html": "off",
      "vue/html-self-closing": "off"
    }
  },
]);
