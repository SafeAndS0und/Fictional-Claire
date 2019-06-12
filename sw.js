importScripts('/Fictional-Claire/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/Fictional-Claire/_nuxt/17e7f059a3ecc787a6e3.js",
    "revision": "95a9667b4a44fe1147ca9ba9d3173f3b"
  },
  {
    "url": "/Fictional-Claire/_nuxt/1ad72160985257dbd0bf.js",
    "revision": "910ce25f9c09da9853cb3587e0c0cea0"
  },
  {
    "url": "/Fictional-Claire/_nuxt/291c74e09a0fb79e01ed.js",
    "revision": "933e50e822d7f5d5a8833466b7962f17"
  },
  {
    "url": "/Fictional-Claire/_nuxt/669c719cfaad98e5b4c3.js",
    "revision": "bc6239c9009deb118ce40a3c5fa09000"
  },
  {
    "url": "/Fictional-Claire/_nuxt/87dbef6405f75b0942aa.js",
    "revision": "0f425645ca0237b1d9a128741bb58d4b"
  },
  {
    "url": "/Fictional-Claire/_nuxt/db5cf7e6ed6081eb7090.js",
    "revision": "da1892db4e9abd59114e54f298ea1faf"
  },
  {
    "url": "/Fictional-Claire/_nuxt/e3a2a1d3005c978b274a.js",
    "revision": "5fdce51eac3cdc5df6aaeb0c7d596cc2"
  },
  {
    "url": "/Fictional-Claire/_nuxt/ee4e5777fbbbac9715a3.js",
    "revision": "c26e241ab76699361ae43661308a0bbf"
  },
  {
    "url": "/Fictional-Claire/_nuxt/f05bb8b2024408fe34c9.js",
    "revision": "ce61d19a33e364c4298039979d15d8a6"
  }
], {
  "cacheId": "fictional-claire",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/Fictional-Claire/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/Fictional-Claire/.*'), workbox.strategies.networkFirst({}), 'GET')
