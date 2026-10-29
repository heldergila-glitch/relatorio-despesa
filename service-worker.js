// Instalação do Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
  // Necessário estar presente para o navegador liberar a opção "Adicionar à Tela Inicial"
});
