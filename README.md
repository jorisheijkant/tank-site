# TANK site

A simple showcase site for [TANK Kollektiv](https://tankkollektiv.com). Built with Nuxt 3. 

## Development
Simply install dependencies and tun `yarn dev` or `npm run dev` to start the development server. When developing, the site makes live requests to the Storyblok API where the content is hosted. 

## Deployment

Nuxt 3 is a static site generator, which means it renders static html and does not make direct requests to the CMS content. This is good because it means the site is fast and not dependent on the CMS being up.

It makes the deployment process a bit more complicated though. We use Github Actions to generate a new version of the site and rsync that to the server. This happens automatically when Storyblok content is being published through a Storyblok webhook. It can be run from this repo manually as well. 

## Code quality
This project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to ensure code quality. Run `yarn format` every time before you commit to make sure the code adheres to our formatting. Use `yarn lint` to check for linting errors. However, this will show you a lot of errors that are due to Nuxt 3, which is still in its early stages and confuses the linter a bit.