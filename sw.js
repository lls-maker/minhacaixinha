const CACHE_NAME = 'caixinha-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Instala o app no armazenamento do celular/computador
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

// Permite que o app abra mesmo se o usuário estiver totalmente sem internet
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    );
});