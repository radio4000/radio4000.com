# Radio4000

This repository is is auto deployed to https://radio4000.com. 

You can also use it to host your own Radio4000 front-end. See deployment below.

The `index.html` imports all [@radio4000/components](https://github.com/radio4000/components) and renders the `<r4-app>` component.

## Local development

- Download/clone this project on your machine
- Run `npm run dev`, if you have `node` (js) installed (or any other static file server, in the current directory).

## Deployment

To deploy on a live domain:

1. Customize the attributes on `<r4-app>` inside `index.html`
2. Deploy all files in this repo (except the `.git` repository), like you would do for any other static website

- The `href` attribute of `<r4-app>` is the base URL for the app. In a browser developer console, use `window.location` and find the value of `href`, to find out what is the base URL of your application (online or locally).

> Be sure to have your webserver/host handle redirects to index.html (see the `_redirects` file example).

### Note on CDN latest version purge/refresh

If the CDN (jsdelivr) is not giving the latest version, because of caching, put these URLs into  https://www.jsdelivr.com/tools/purge.

```
https://cdn.jsdelivr.net/npm/@radio4000/components@latest/dist/r4.css
https://cdn.jsdelivr.net/npm/@radio4000/components@latest/dist/r4.js
https://cdn.jsdelivr.net/npm/@radio4000/components@latest/dist/themes/classic.css
https://cdn.jsdelivr.net/npm/@radio4000/components@latest/dist/themes/hash.css
https://cdn.jsdelivr.net/npm/@radio4000/components@latest/dist/themes/jellybeans.css
https://cdn.jsdelivr.net/npm/@radio4000/components@latest/dist/themes/minimal.css
```
