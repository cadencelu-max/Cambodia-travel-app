/* 离线缓存：网络优先，离线时用缓存兜底 */
const CACHE = "cambodia-travel-v10";
// 发布新版本时：把 index.html 里的 ?v= 版本号同步升级，并改这里的缓存名

self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  // 只缓存本站资源（地图瓦片、外部 CDN 等跨域资源不缓存）
  if (url.origin !== location.origin) return;

  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      try {
        const res = await fetch(req);
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      } catch (err) {
        const cached = await cache.match(req);
        if (cached) return cached;
        // 完全离线且没缓存过：返回一个简单提示
        if (req.mode === "navigate") {
          const html = new Response("<!DOCTYPE html><html><head><meta charset='utf-8'><title>离线</title></head><body style='font-family:system-ui;padding:40px;text-align:center'><h2>当前处于离线状态</h2><p>请连接网络后刷新，或先打开过本页后再离线使用。</p></body></html>", {
            headers: { "Content-Type": "text/html" }
          });
          return html;
        }
        throw err;
      }
    })
  );
});
