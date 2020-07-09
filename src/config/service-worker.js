/* eslint-disable-line no-restricted-globals */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

