'use strict';

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v9';

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
  './offline.html',
  './index.html',
  './app/Game/Character.js',
  './app/Game/Entity.js',
  './app/Game/Game.js',
  './app/Game/Opponent.js',
  './app/Game/Player.js',
  './app/Game/Shot.js',
  './app/Game/utils.js',
  './app/libs/anime.min.js',
  './app/libs/swiper.css',
  './app/libs/swiper.min.js',
  './app/Animations.js',
  './app/main.js',
  './app/Navigation.js',
  './app/UI.js',
  './assets/css/main.css',
  './assets/css/main.css.map',
  './assets/css/materialdesignicons.css',
  './assets/css/materialdesignicons.css.map',
  './assets/fonts/material-icons/materialdesignicons-webfont.eot',
  './assets/fonts/material-icons/materialdesignicons-webfont.ttf',
  './assets/fonts/material-icons/materialdesignicons-webfont.woff',
  './assets/fonts/material-icons/materialdesignicons-webfont.woff2',
  './assets/fonts/nunito/Nunito-Bold.ttf',
  './assets/fonts/nunito/Nunito-Bold.woff',
  './assets/fonts/nunito/Nunito-Bold.woff2',
  './assets/fonts/nunito/Nunito-Regular.ttf',
  './assets/fonts/nunito/Nunito-Regular.woff',
  './assets/fonts/nunito/Nunito-Regular.woff2',
  './assets/img/characters/char_01.png',
  './assets/img/characters/char_02.png',
  './assets/img/characters/char_03.png',
  './assets/img/boton1.png',
  './assets/img/boton2.png',
  './assets/img/boton3.png',
  './assets/img/boton4.png',
  './assets/img/boton5.png',
  './assets/img/bueno_muerto.png',
  './assets/img/bueno.png',
  './assets/img/check.png',
  './assets/img/check2.png',
  './assets/img/game_over.png',
  './assets/img/jefe_muerto.png',
  './assets/img/jefe.png',
  './assets/img/malo_muerto.png',
  './assets/img/malo.png',
  './assets/img/music_note.ico',
  './assets/img/screenshot.png',
  './assets/img/shot1.png',
  './assets/img/shot2.png',
  './assets/img/volume.ico',
  './assets/img/volver.png',
  './assets/img/you_win.png',
  './assets/sass/lib/_colors.scss',
  './assets/sass/lib/_fontface.scss',
  './assets/sass/lib/_keyframes.scss',
  './assets/sass/lib/_reboot.scss',
  './assets/sass/lib/_typo.scss',
  './assets/sass/lib/_utils.scss',
  './assets/sass/lib/_vars.scss',
  './assets/sass/material_icons/_animated.scss',
  './assets/sass/material_icons/_core.scss',
  './assets/sass/material_icons/_extras.scss',
  './assets/sass/material_icons/_functions.scss',
  './assets/sass/material_icons/_icons.scss',
  './assets/sass/material_icons/_path.scss',
  './assets/sass/material_icons/_variables.scss',
  './assets/sass/material_icons/materialdesignicons.scss',
  './assets/sass/partials/_layout.scss',
  './assets/sass/partials/_modals.scss',
  './assets/sass/main.scss',
  './files/icons/camera128.png',
  './files/icons/camera192.png',
  './files/icons/camera256.png',
  './files/icons/camera512.png',
  './files/icons/camera640.png',
  './files/icons/maskable_icon.png',  
  './files/manifest.json',
  './files/install.js',
];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // CODELAB: Precache static resources here.
  evt.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // CODELAB: Remove previous cached data from disk.
  evt.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  // CODELAB: Add fetch event handler here.
  // if (evt.request.mode !== 'navigate') {
  //   // Not a page navigation, bail.
  //   console.log("Fetch no navigate");
  //   return;
  // }
  console.log('[ServiceWorker] Fetch', evt.request.url);
  evt.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(evt.request)
            .then((response) => {
              console.log("RESP", response);
              return response || fetch(evt.request);
            });
      })
  );
});
