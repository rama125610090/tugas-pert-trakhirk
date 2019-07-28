/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const cacheName = 'cache-v1';
const precacheResources = [
  '/',
  'index.html',
  'kuliner.html',
  'detail.html',
  'about.html',
  'manifest.json',
  'css/bootstrap.css',
  'css/style.css',
  'css/responsive.css',
  'css/color-themes/default-theme.css',
  'js/jquery.js',
  'js/bootstrap.min.js',
  'js/jquery.fancybox.pack.js',
  'js/jquery.fancybox-media.js',
  'js/owl.js',
  'js/appear.js',
  'js/wow.js',
  'js/jquery.mCustomScrollbar.concat.min.js',
  'js/script.js',
  'js/color-settings.js',
  'images/kuliner/1.jpg',
  'images/kuliner/2.jpg',
  'images/kuliner/3.jpg',
  'images/kuliner/4.jpg',
  'images/kuliner/5.jpg',
  'images/kuliner/6.jpg',
  'images/kuliner/7.jpg',
  'images/kuliner/8.jpg',
  'images/kuliner/imagebesar.jpg',
  'images/kuliner/user.png',
  'images/kuliner/iconreal.png',
  'images/kuliner/iconreal2.png'
  
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
    );
});
