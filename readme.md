# Radio4000

A starter for self-hosted Radio4000 frontend.  
See an example on https://beta.radio4000.com.

## Local development

- Download/clone this project on your machine
- Run `npm run dev`, if you have `node` (js) installed (or any other static file server, in the current directory).

## Deployment

This project loads the latest version of https://github.com/radio4000/components from [npm](https://www.npmjs.com/package/@radio4000/components) in the `index.html` file.

To deploy on a live domain:

1. Customize the values of `.env.json` and `.env.production.json`
2. Deploy all files in this repo (except the `.git` repository), like you would do for any other static website

> Be sure to have your webserver/host handle redirects to index.html (see the `_redirects` file example).

> The github deploy action removes the `.env.json` file,
> and `mv .env.production.json .env.json` to switch to production environment

## `.env.json`

The environment variables, are used to setup the specificities of the app we will be running, such as the address of the domain it will be hosted at.

- `href` is the value of the base URL for the app. In a browser developer console, use `window.location` and find the value of `href`, to find out what is the base URL of your application (online or locally).

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
