var CACHE_NAME = 'hex-map-v1';
var coreAssets = [
  '/',
  '/css/hex_map.css',
  '/js/data.js',
  '/js/hex_map.js'
];

var images = ['/img/'];

// Grab the files we want to cache
self.addEventListener('install', (event) => {
  event.waitUntil(async function() {
    // Open the cache
    const cache = await caches.open(CACHE_NAME);
    // Add images
    cache.addAll(images);
    // Await core assets
    await cache.addAll(coreAssets);
  }());
});

// Clean up old caches
self.addEventListener('activate', function(event) {

  var cacheAllowlist = ['hex-map-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(async function() {
    const response = await caches.match(event.request);
    return response || fetch(event.request);
  }());
});
