const CACHE_NAME = "ubicuo-cache-v1"; // Nombre del caché
const urlsToCache = [
  "/", // La raíz del proyecto
  "/index.html", // Tu página principal
  "/styles1.css", // Archivo de estilos
  "/styles2.css", // Archivo de estilos
  "/styles3.css", // Archivo de estilos
  "/script.js", // Archivo JavaScript
  "/manifest.json", // El archivo manifest
  "/ubi-192.png", // Icono 192x192
  "/ubi-512.png", // Icono 512x512
];

// Instala el Service Worker y almacena los archivos en caché
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Archivos en caché correctamente");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activa el Service Worker y elimina cachés antiguos si existen
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Borrando caché antiguo:", cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Intercepta las solicitudes y responde desde el caché si es posible
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Devuelve el recurso desde el caché si está disponible
      return response || fetch(event.request);
    })
  );
});
