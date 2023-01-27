module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ["plugin:vue/essential"],
  rules: {
    "no-cond-assign": "warn",
    "no-const-assign": "warn",
    "no-console": "warn",
    "no-dupe-args": "warn",
    "no-dupe-keys": "warn",
    "for-direction": "warn",
    "no-undef": "warn",
    "valid-typeof": "warn",
  },
};
