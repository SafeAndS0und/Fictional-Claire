importScripts('/fictional-claire/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/fictional-claire/_nuxt/075afef1f35cf0da3abe.js",
    "revision": "94895d139b3569fd4ad9757cfb436ee8"
  },
  {
    "url": "/fictional-claire/_nuxt/17e7f059a3ecc787a6e3.js",
    "revision": "95a9667b4a44fe1147ca9ba9d3173f3b"
  },
  {
    "url": "/fictional-claire/_nuxt/1ad72160985257dbd0bf.js",
    "revision": "910ce25f9c09da9853cb3587e0c0cea0"
  },
  {
    "url": "/fictional-claire/_nuxt/37956cf0b7c45671cf8b.js",
    "revision": "886b2e744ffb39c75cb1b17596787b67"
  },
  {
    "url": "/fictional-claire/_nuxt/669c719cfaad98e5b4c3.js",
    "revision": "bc6239c9009deb118ce40a3c5fa09000"
  },
  {
    "url": "/fictional-claire/_nuxt/87dbef6405f75b0942aa.js",
    "revision": "0f425645ca0237b1d9a128741bb58d4b"
  },
  {
    "url": "/fictional-claire/_nuxt/db5cf7e6ed6081eb7090.js",
    "revision": "da1892db4e9abd59114e54f298ea1faf"
  },
  {
    "url": "/fictional-claire/_nuxt/ee4e5777fbbbac9715a3.js",
    "revision": "c26e241ab76699361ae43661308a0bbf"
  },
  {
    "url": "/fictional-claire/_nuxt/f05bb8b2024408fe34c9.js",
    "revision": "ce61d19a33e364c4298039979d15d8a6"
  }
], {
  "cacheId": "fictional-claire",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/fictional-claire/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/fictional-claire/.*'), workbox.strategies.networkFirst({}), 'GET')
