(()=>{var e,r,t,i,a,s={9875:(e,t,s)=>{var o=s(3373),n=s(8788);let a=e=>"object"==typeof e?!e:Array.isArray(e)?0===e.length:"string"==typeof e?!e.trim()||"undefined"===e||"null"===e:"number"==typeof e?0===e:void 0===e;o.p(new class{constructor(){this.seenOn={},this.subs={},this.relays={},this.pool=new n.lo,this.poolCreated=Date.now()}setRelays(e){this.relays=e}getPool(){return 12e4<Date.now()-this.poolCreated&&(this.pool.close(this.relays),this.pool=new n.lo,this.poolCreated=Date.now()),this.pool}fetch(l){let h=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;return new Promise((e,t)=>{let s=this.getPool(),o=s.sub(this.relays,l),n=[],r=()=>{o.unsub(),e(n)},i=0<h?setTimeout(()=>{r()},h):null;o.on("event",e=>{n.push(e),this.seenOn[e.id]=s.seenOn(e.id),0<h&&(clearTimeout(i),i=setTimeout(()=>{r()},h))}),a(h)&&o.on("eose",()=>{r()})})}sub(e,t){let s=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,n=Math.random().toString().slice(2),r=this.getPool(),i=r.sub(this.relays,e,{id:n});return i.on("event",e=>{this.seenOn[e.id]=r.seenOn(e.id),t(e)}),i.on("eose",()=>{s&&this.unsub(n),o()}),this.subs[n]=i,n}unsub(e){var t;t=this.subs[e],a(t)||(this.subs[e].unsub(),delete this.subs[e])}async findHealthyRelay(e){var t,s=this.getPool();for(t of e)try{return await s.ensureRelay(t),t}catch(e){}throw new Error("Couldn't find a working relay.")}async where(e){let t=0;for(;a(this.seenOn[e])&&(await this.fetch([{ids:[e]}]),3!==++t););if(a(this.seenOn[e]))throw new Error("Couldn't find root event.");return this.findHealthyRelay(this.seenOn[e])}})}},o={};function u(e){var t=o[e];return void 0!==t||(t=o[e]={exports:{}},s[e](t,t.exports,u)),t.exports}u.m=s,u.x=()=>{var e=u.O(void 0,[704],()=>u(9875));return u.O(e)},a=[],u.O=(e,t,s,o)=>{if(!t){for(var n=1/0,r=0;r<a.length;r++){t=a[r][0],s=a[r][1],o=a[r][2];for(var i,l=!0,h=0;h<t.length;h++)(!1&o||o<=n)&&Object.keys(u.O).every(e=>u.O[e](t[h]))?t.splice(h--,1):(l=!1,o<n&&(n=o));l&&(a.splice(r--,1),void 0!==(i=s()))&&(e=i)}return e}o=o||0;for(var r=a.length;0<r&&a[r-1][2]>o;r--)a[r]=a[r-1];a[r]=[t,s,o]},u.d=(e,t)=>{for(var s in t)u.o(t,s)&&!u.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},u.f={},u.e=s=>Promise.all(Object.keys(u.f).reduce((e,t)=>(u.f[t](s,e),e),[])),u.u=e=>"static/js/"+e+".1d33b919.chunk.js",u.miniCssF=e=>{},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.p="/",r={875:1},u.f.i=(e,t)=>{r[e]||importScripts(u.p+u.u(e))},t=self.webpackChunknostr_chat=self.webpackChunknostr_chat||[],i=t.push.bind(t),t.push=e=>{var t,s=e[0],o=e[1],n=e[2];for(t in o)u.o(o,t)&&(u.m[t]=o[t]);for(n&&n(u);s.length;)r[s.pop()]=1;i(e)},e=u.x,(u.x=()=>u.e(704).then(e))()})();