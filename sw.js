if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let r={};const o=e=>c(e,t),d={module:{uri:t},exports:r,require:o};s[t]=Promise.all(i.map((e=>d[e]||o(e)))).then((e=>(n(...e),r)))}}define(["./workbox-6736c28b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"static/css/main.5cd5ed74.css",revision:"761f9da2f774fce865a05c48e83b954c"},{url:"static/js/488.47e900ca.chunk.js",revision:"fdae53d18f5e5df92de1fa81b745fa19"},{url:"static/js/704.1d33b919.chunk.js",revision:"34c6ec4f7d134ce1207ba209af5b157e"},{url:"static/js/875.15606831.chunk.js",revision:"53736be358aa14c499c57ae61873e9d3"},{url:"static/js/main.c68390c6.js",revision:"8bc1112e47061fd902f9e98e87d7f097"},{url:"index.html",revision:"47c6c2051ce5e98d220a2cce3e4d37cf"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxAgeSeconds:31536e3})]}),"GET")}));
//# sourceMappingURL=sw.js.map
