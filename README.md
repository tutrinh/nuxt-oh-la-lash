# portfolio-nuxt

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Deploy

https://app.netlify.com/teams/tutrinh/sites

[![Netlify Status](https://api.netlify.com/api/v1/badges/45a30f24-79c7-4d6b-a666-7bdd74d18d5f/deploy-status)](https://app.netlify.com/sites/laughing-carson-39350b/deploys)

## Fonts

<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Alata&family=Cutive+Mono&family=Josefin+Sans:wght@300;400;500&family=Permanent+Marker&family=Rozha+One&display=swap" rel="stylesheet">

```css
font-family: "Abril Fatface", cursive;
font-family: "Alata", sans-serif;
font-family: "Cutive Mono", monospace;
font-family: "Josefin Sans", sans-serif;
font-family: "Permanent Marker", cursive;
font-family: "Rozha One", serif;
```

## Colors

https://colorhunt.co/palette/171239
https://colorhunt.co/palette/183392
https://colorhunt.co/palette/114174

## Background Full Parallax

{
display: block; _/
/_ background: rgba(255,255,255,0); \*/
background-image: url(//d9hhrg4mnvzow.cloudfront.net/www.voyagerliving.co/8a323ddb-ddd3.png);
background-attachment: fixed;
background-repeat: no-repeat;
background-position: left top;
background-size: cover;
border-style: none;
margin-left: auto;
margin-right: auto;
margin-bottom: 0px;
border-radius: 0px;
width: 100%;
height: 720px;
position: relative;

}

Use the images for css background

```
url('~assets/images/image.png')
```

```
<template>
  <img src="~/assets/images/image.png" />
</template>
```

<!-- webpacked image from assets directory -->
<img src="~/assets/my-image-2.png" />

## Utility Classes

### Typography

.title &.jumbo
.sub-title
.line-height-tight

.font-abril
.font-alata
.font-josefin
.font-marker
.font-rozha

### Colors

.color-navy
.color-bg-navy

.color-coral
.color-bg-coral

.color-sunset
.color-bg-sunset

.color-light-gray
.color-bg-light-gray

.color-white
.color-bg-white

.color-black
.color-bg-black

.color-gold
.color-bg-gold

.color-red
.color-bg-red

.color-light-blue
.color-bg-light-blue

.color-neon-green
.color-bg-neon-green

.color-neon-blue
.color-bg-neon-blue

### Hero

.isFullheight

### Card

.is-card
.has-shadow
