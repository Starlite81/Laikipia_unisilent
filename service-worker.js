const CACHE_NAME = 'laikipia-chat-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './style.css' // if you have external CSS
];

// Install service worker and cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch cached content
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
