// next.config.js
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      // Cache all static assets
      urlPattern: /^https:\/\/sharifi-pwa.liara.run\/_next\/static\/.*/,
      handler: "CacheFirst",
      options: {
        cacheName: "static-assets",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
        },
      },
    },
    {
      // Cache general pages
      urlPattern: /^https:\/\/sharifi-pwa.liara.run\/.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "pages",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60, // 1 day
        },
      },
    },
    {
      // Cache all /testi pages and sub-pages (e.g., /products, /products/1, /products/2)
      urlPattern: /^https:\/\/sharifi-pwa.liara.run\/products\/?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "testi-pages",
        expiration: {
          maxEntries: 100, // Increase max entries for larger apps
          maxAgeSeconds: 24 * 60 * 60, // 1 day
        },
      },
    },
    {
      // Cache all /posts pages and sub-pages (e.g., /posts, /posts/1, /posts/2)
      urlPattern: /^https:\/\/sharifi-pwa.liara.run\/posts\/?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "post-pages",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 24 * 60 * 60, // 1 day
        },
      },
    },
    {
      // Cache all /posts pages and sub-pages (e.g., /posts, /posts/1, /posts/2)
      urlPattern: /^https:\/\/sharifi-pwa.liara.run\/login\/?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "login-pages",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 24 * 60 * 60, // 1 day
        },
      },
    },
  ],
});

const nextConfig = {
  reactStrictMode: true,
};
module.exports = withPWA(nextConfig);
