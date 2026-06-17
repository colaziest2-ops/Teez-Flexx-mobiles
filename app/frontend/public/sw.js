const CACHE_NAME = 'teez-flexx-v1';
const STATIC_ASSETS = [
  '/',
  '/shop',
  '/book',
  '/shipping',
  '/contact',
  '/offline.html'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).catch((err) => {
      console.error('Cache install failed:', err);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and API calls
  if (request.method !== 'GET' || url.pathname.startsWith('/api/')) {
    return;
  }

  // Skip external resources
  if (url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      // Return cached version if available
      if (cached) {
        // Still fetch in background for updates
        fetch(request).then((response) => {
          if (response.ok) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, response);
            });
          }
        }).catch(() => {
          // Network failed, cached version is already being used
        });
        return cached;
      }

      // Fetch from network
      return fetch(request).then((response) => {
        if (!response || !response.ok) {
          throw new Error('Network response was not ok');
        }

        // Clone response before caching
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseToCache);
        });

        return response;
      }).catch(() => {
        // Network failed, try to serve offline page for navigation requests
        if (request.mode === 'navigate') {
          return caches.match('/offline.html');
        }
        // Otherwise just fail
        throw new Error('Network request failed and no cache available');
      });
    })
  );
});
