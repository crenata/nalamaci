if(!self.define){let e,c={};const s=(s,i)=>(s=new URL(s+".js",i).href,c[s]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=c,document.head.appendChild(e)}else e=s,importScripts(s),c()})).then((()=>{let e=c[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(c[t])return;let r={};const f=e=>s(e,t),o={module:{uri:t},exports:r,require:f};c[t]=Promise.all(i.map((e=>o[e]||f(e)))).then((e=>(n(...e),r)))}}define(["./workbox-6736c28b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"static/css/main.bc655c70.css",revision:"4f7a7387c6c4113d4fcbd512859b4e22"},{url:"static/js/488.47e900ca.chunk.js",revision:"fdae53d18f5e5df92de1fa81b745fa19"},{url:"static/js/704.1d33b919.chunk.js",revision:"34c6ec4f7d134ce1207ba209af5b157e"},{url:"static/js/875.ca9e28ce.chunk.js",revision:"acd6acb7180e3f6f7f72fd6546ff4a88"},{url:"static/js/main.45fe6c0c.js",revision:"b34338cf95e34f0bced31acd7fc3501e"},{url:"index.html",revision:"a6e6b0517e9a2b12aac066dccd65e061"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxAgeSeconds:31536e3})]}),"GET")}));
//# sourceMappingURL=sw.js.map
