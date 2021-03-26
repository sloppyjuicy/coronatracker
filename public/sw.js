self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('cache_v1').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/favicon.ico',
        '/icon192.png',
        '/icon512.png',
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request));
});
