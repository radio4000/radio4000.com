# Radio4000

A starter for self hosted radio4000 frontend

## Usage

> To use on your local machine, see #development section

## Development

- download/clone this project on your machine
- run `npm run dev`, if you have `node` (js) installed (or any other static file server, in the current directory).

## Deployment

To deploy this project on a live domain:

- customize the values of `.env.json`
- deploy all files in this repo (except the `.git` repository), like you would do for any other static website

> be sure to have your host let our application router handle the redirects (see the `_redirects` file example).

## `.env.json`

The environment variables, are used to setup the specificities of the app we will be running, such as the address of the domain it will be hosted at.

- `href` is the value of the base URL for the app. In a browser developer console, use `window.location` and find the value of `href`, to find out what is the base URL of your application (online or locally).
