// public/service-worker.js

// Cache versioning for easy update
const CACHE_NAME = "my-pwa-cache-v1";
const urlsToCache = [
  "/", // Cache the root page
  "/favicon.ico",
  "/manifest.json",
  "/offline", // You can set an offline fallback page
  // Add additional URLs as needed
];

// Install event - cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event - clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});

// Fetch event - serve from cache, then network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => {
          return caches.match("/offline"); // Serve fallback if offline
        })
      );
    })
  );
});
