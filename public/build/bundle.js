var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function l(t){t.forEach(r)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){return null==t?"":t}const u="undefined"!=typeof window;let i=u?()=>window.performance.now():()=>Date.now(),d=u?t=>requestAnimationFrame(t):t;const f=new Set;function m(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&d(m)}function p(t,e){t.appendChild(e)}function h(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function g(t){const e=_("style");return function(t,e){p(t.head||t,e)}(h(t),e),e}function b(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function k(){return y(" ")}function x(){return y("")}function w(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function N(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}const T=new Set;let j,M=0;function F(t,e,n,r,o,l,s,c=0){const a=16.666/r;let u="{\n";for(let t=0;t<=1;t+=a){const r=e+(n-e)*l(t);u+=100*t+`%{${s(r,1-r)}}\n`}const i=u+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(i)}_${c}`,f=h(t);T.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=g(t).sheet),p=f.__svelte_rules||(f.__svelte_rules={});p[d]||(p[d]=!0,m.insertRule(`@keyframes ${d} ${i}`,m.cssRules.length));const b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${d} ${r}ms linear ${o}ms 1 both`,M+=1,d}function O(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),M-=o,M||d((()=>{M||(T.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),T.clear())})))}function S(t){j=t}function A(){if(!j)throw new Error("Function called outside component initialization");return j}const L=[],P=[],R=[],B=[],D=Promise.resolve();let z=!1;function H(t){R.push(t)}let W=!1;const q=new Set;function U(){if(!W){W=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];S(e),I(e.$$)}for(S(null),L.length=0;P.length;)P.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];q.has(e)||(q.add(e),e())}R.length=0}while(L.length);for(;B.length;)B.pop()();z=!1,W=!1,q.clear()}}function I(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let K;function G(t,e,n){t.dispatchEvent(function(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}(`${e?"intro":"outro"}${n}`))}const J=new Set;let Q;function V(){Q={r:0,c:[],p:Q}}function X(){Q.r||l(Q.c),Q=Q.p}function Y(t,e){t&&t.i&&(J.delete(t),t.i(e))}function Z(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),Q.c.push((()=>{J.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const tt={duration:0};function et(n,r,o,c){let a=r(n,o),u=c?0:1,p=null,h=null,g=null;function b(){g&&O(n,g)}function v(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function $(r){const{delay:o=0,duration:s=300,easing:c=e,tick:$=t,css:_}=a||tt,y={start:i()+o,b:r};r||(y.group=Q,Q.r+=1),p||h?h=y:(_&&(b(),g=F(n,u,r,s,o,c,_)),r&&$(0,1),p=v(y,s),H((()=>G(n,r,"start"))),function(t){let e;0===f.size&&d(m),new Promise((n=>{f.add(e={c:t,f:n})}))}((t=>{if(h&&t>h.start&&(p=v(h,s),h=null,G(n,p.b,"start"),_&&(b(),g=F(n,u,p.b,p.duration,0,c,a.css))),p)if(t>=p.end)$(u=p.b,1-u),G(n,p.b,"end"),h||(p.b?b():--p.group.r||l(p.group.c)),p=null;else if(t>=p.start){const e=t-p.start;u=p.a+p.d*c(e/p.duration),$(u,1-u)}return!(!p&&!h)})))}return{run(t){s(a)?(K||(K=Promise.resolve(),K.then((()=>{K=null}))),K).then((()=>{a=a(),$(t)})):$(t)},end(){b(),p=h=null}}}function nt(t,e){const n=e.token={};function r(t,r,o,l){if(e.token!==n)return;e.resolved=l;let s=e.ctx;void 0!==o&&(s=s.slice(),s[o]=l);const c=t&&(e.current=t)(s);let a=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==r&&t&&(V(),Z(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),X())})):e.block.d(1),c.c(),Y(c,1),c.m(e.mount(),e.anchor),a=!0),e.block=c,e.blocks&&(e.blocks[r]=c),a&&U()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=A();if(t.then((t=>{S(n),r(e.then,1,e.value,t),S(null)}),(t=>{if(S(n),r(e.catch,2,e.error,t),S(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var o}function rt(t,e,n){const r=e.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,n)}function ot(t,e){Z(t,1,1,(()=>{e.delete(t.key)}))}function lt(t){t&&t.c()}function st(t,e,n,o){const{fragment:c,on_mount:a,on_destroy:u,after_update:i}=t.$$;c&&c.m(e,n),o||H((()=>{const e=a.map(r).filter(s);u?u.push(...e):l(e),t.$$.on_mount=[]})),i.forEach(H)}function ct(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){-1===t.$$.dirty[0]&&(L.push(t),z||(z=!0,D.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ut(e,n,r,s,c,a,u,i=[-1]){const d=j;S(e);const f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:i,skip_bound:!1,root:n.target||d.$$.root};u&&u(f.root);let m=!1;if(f.ctx=r?r(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),m&&at(e,t)),n})):[],f.update(),m=!0,l(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(v)}else f.fragment&&f.fragment.c();n.intro&&Y(e.$$.fragment),st(e,n.target,n.anchor,n.customElement),U()}S(d)}class it{$destroy(){ct(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function dt(t){const e=t-1;return e*e*e+1}function ft(t,{delay:e=0,duration:n=400,easing:r=dt}={}){const o=getComputedStyle(t),l=+o.opacity,s=parseFloat(o.height),c=parseFloat(o.paddingTop),a=parseFloat(o.paddingBottom),u=parseFloat(o.marginTop),i=parseFloat(o.marginBottom),d=parseFloat(o.borderTopWidth),f=parseFloat(o.borderBottomWidth);return{delay:e,duration:n,easing:r,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*l};height: ${t*s}px;padding-top: ${t*c}px;padding-bottom: ${t*a}px;margin-top: ${t*u}px;margin-bottom: ${t*i}px;border-top-width: ${t*d}px;border-bottom-width: ${t*f}px;`}}function mt(e){let n;return{c(){n=_("div"),n.innerHTML='<div class="svelte-bbsaio"></div><div class="svelte-bbsaio"></div><div class="svelte-bbsaio"></div><div class="svelte-bbsaio"></div>',E(n,"class","lds-ellipsis svelte-bbsaio")},m(t,e){b(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}class pt extends it{constructor(t){super(),ut(this,t,null,mt,c,{})}}function ht(t,e,n){const r=t.slice();return r[15]=e[n],r}function gt(t,e,n){const r=t.slice();return r[15]=e[n],r}function bt(e){let n,r,o=e[6].message+"";return{c(){n=_("p"),r=y(o),N(n,"color","red")},m(t,e){b(t,n,e),p(n,r)},p(t,e){512&e&&o!==(o=t[6].message+"")&&C(r,o)},i:t,o:t,d(t){t&&v(n)}}}function vt(t){let e,n,r,o,l,s,c,a,u,i,d,f,m,h,g,$,x,w,N,T,j,M,F,O,S,A=""!=t[6]&&$t(t),L=t[3]<=0&&_t(t),P=""!=t[4].kraken.version&&Lt(t);return{c(){e=_("div"),n=_("div"),r=_("p"),o=_("b"),l=y(t[1]),c=k(),a=_("p"),u=y(t[2]),i=y(" ["),d=y(t[0]),f=y("]"),m=k(),A&&A.c(),h=k(),L&&L.c(),g=k(),$=_("div"),x=_("div"),w=k(),N=_("div"),T=_("div"),P&&P.c(),j=k(),M=_("span"),F=y("Update: "),O=y(t[5]),E(r,"class",s="customer "+(t[3]<=2?"status-green":"status-red")+" svelte-8b11yd"),E(n,"class","column"),E(e,"class","row"),E(x,"class","column column-80"),E(M,"class","small_text svelte-8b11yd"),E(T,"class","flexing-box svelte-8b11yd"),E(N,"class","column column-20"),E($,"class","row")},m(t,s){b(t,e,s),p(e,n),p(n,r),p(r,o),p(o,l),p(n,c),p(n,a),p(a,u),p(a,i),p(a,d),p(a,f),b(t,m,s),A&&A.m(t,s),b(t,h,s),L&&L.m(t,s),b(t,g,s),b(t,$,s),p($,x),p($,w),p($,N),p(N,T),P&&P.m(T,null),p(T,j),p(T,M),p(M,F),p(M,O),S=!0},p(t,e){(!S||2&e)&&C(l,t[1]),(!S||8&e&&s!==(s="customer "+(t[3]<=2?"status-green":"status-red")+" svelte-8b11yd"))&&E(r,"class",s),(!S||4&e)&&C(u,t[2]),(!S||1&e)&&C(d,t[0]),""!=t[6]?A?A.p(t,e):(A=$t(t),A.c(),A.m(h.parentNode,h)):A&&(A.d(1),A=null),t[3]<=0?L?(L.p(t,e),8&e&&Y(L,1)):(L=_t(t),L.c(),Y(L,1),L.m(g.parentNode,g)):L&&(V(),Z(L,1,1,(()=>{L=null})),X()),""!=t[4].kraken.version?P?P.p(t,e):(P=Lt(t),P.c(),P.m(T,j)):P&&(P.d(1),P=null),(!S||32&e)&&C(O,t[5])},i(t){S||(Y(L),S=!0)},o(t){Z(L),S=!1},d(t){t&&v(e),t&&v(m),A&&A.d(t),t&&v(h),L&&L.d(t),t&&v(g),t&&v($),P&&P.d()}}}function $t(t){let e,n,r,o;return{c(){e=_("div"),n=_("div"),r=_("p"),o=y(t[6]),N(r,"color","red"),E(n,"class","column"),E(e,"class","row")},m(t,l){b(t,e,l),p(e,n),p(n,r),p(r,o)},p(t,e){64&e&&C(o,t[6])},d(t){t&&v(e)}}}function _t(t){let e,n,r,o,l,s,c,a,u,i,d,f,m,h,g,$,w,N,T,j,M,F,O,S,A,L,P,R,B,D,z,H,W,q,U,I,K,G,J,Q,tt,et,nt,rt,ot,lt=t[4].platform.name+"",st=t[4].platform.version+"",ct=t[4].interpreter.name+"",at=t[4].interpreter.version+"",ut=t[4].web_server.name+"",it=t[4].web_server.server_signature+"",dt=0!==Object.entries(t[4].extra).length,ft=t[4].database_server.client_info&&yt(t),mt=t[4].database_server.server_info&&kt(t),pt=t[4].database_server.host_info&&xt(t),ht=t[4].os.name&&wt(t),gt=t[4].os.raw&&Et(t),bt=dt&&Ct(t);return{c(){e=_("div"),n=_("div"),r=_("table"),o=_("tbody"),l=_("tr"),s=_("td"),c=_("b"),c.textContent="Platform",a=k(),u=y(lt),i=k(),d=y(st),f=k(),m=_("tr"),h=_("td"),g=_("b"),g.textContent="Interpreter",$=k(),w=y(ct),N=k(),T=y(at),j=k(),M=_("tr"),F=_("td"),O=_("b"),O.textContent="Webserver",S=k(),A=y(ut),L=k(),P=y(it),R=k(),B=_("div"),D=_("table"),z=_("thead"),z.innerHTML="<tr><th>Datenbank</th></tr>",H=k(),W=_("tbody"),ft&&ft.c(),q=k(),mt&&mt.c(),U=k(),pt&&pt.c(),I=k(),K=_("div"),G=_("table"),J=_("thead"),J.innerHTML="<tr><th>Os</th></tr>",Q=k(),tt=_("tbody"),ht&&ht.c(),et=k(),gt&&gt.c(),nt=k(),bt&&bt.c(),rt=x(),E(n,"class","column"),E(B,"class","column"),E(K,"class","column"),E(e,"class","row")},m(t,v){b(t,e,v),p(e,n),p(n,r),p(r,o),p(o,l),p(l,s),p(s,c),p(s,a),p(s,u),p(s,i),p(s,d),p(o,f),p(o,m),p(m,h),p(h,g),p(h,$),p(h,w),p(h,N),p(h,T),p(o,j),p(o,M),p(M,F),p(F,O),p(F,S),p(F,A),p(F,L),p(F,P),p(e,R),p(e,B),p(B,D),p(D,z),p(D,H),p(D,W),ft&&ft.m(W,null),p(W,q),mt&&mt.m(W,null),p(W,U),pt&&pt.m(W,null),p(e,I),p(e,K),p(K,G),p(G,J),p(G,Q),p(G,tt),ht&&ht.m(tt,null),p(tt,et),gt&&gt.m(tt,null),b(t,nt,v),bt&&bt.m(t,v),b(t,rt,v),ot=!0},p(t,e){(!ot||16&e)&&lt!==(lt=t[4].platform.name+"")&&C(u,lt),(!ot||16&e)&&st!==(st=t[4].platform.version+"")&&C(d,st),(!ot||16&e)&&ct!==(ct=t[4].interpreter.name+"")&&C(w,ct),(!ot||16&e)&&at!==(at=t[4].interpreter.version+"")&&C(T,at),(!ot||16&e)&&ut!==(ut=t[4].web_server.name+"")&&C(A,ut),(!ot||16&e)&&it!==(it=t[4].web_server.server_signature+"")&&C(P,it),t[4].database_server.client_info?ft?ft.p(t,e):(ft=yt(t),ft.c(),ft.m(W,q)):ft&&(ft.d(1),ft=null),t[4].database_server.server_info?mt?mt.p(t,e):(mt=kt(t),mt.c(),mt.m(W,U)):mt&&(mt.d(1),mt=null),t[4].database_server.host_info?pt?pt.p(t,e):(pt=xt(t),pt.c(),pt.m(W,null)):pt&&(pt.d(1),pt=null),t[4].os.name?ht?ht.p(t,e):(ht=wt(t),ht.c(),ht.m(tt,et)):ht&&(ht.d(1),ht=null),t[4].os.raw?gt?gt.p(t,e):(gt=Et(t),gt.c(),gt.m(tt,null)):gt&&(gt.d(1),gt=null),16&e&&(dt=0!==Object.entries(t[4].extra).length),dt?bt?(bt.p(t,e),16&e&&Y(bt,1)):(bt=Ct(t),bt.c(),Y(bt,1),bt.m(rt.parentNode,rt)):bt&&(V(),Z(bt,1,1,(()=>{bt=null})),X())},i(t){ot||(Y(bt),ot=!0)},o(t){Z(bt),ot=!1},d(t){t&&v(e),ft&&ft.d(),mt&&mt.d(),pt&&pt.d(),ht&&ht.d(),gt&&gt.d(),t&&v(nt),bt&&bt.d(t),t&&v(rt)}}}function yt(t){let e,n,r,o=t[4].database_server.client_info+"";return{c(){e=_("tr"),n=_("td"),r=y(o)},m(t,o){b(t,e,o),p(e,n),p(n,r)},p(t,e){16&e&&o!==(o=t[4].database_server.client_info+"")&&C(r,o)},d(t){t&&v(e)}}}function kt(t){let e,n,r,o=t[4].database_server.server_info+"";return{c(){e=_("tr"),n=_("td"),r=y(o)},m(t,o){b(t,e,o),p(e,n),p(n,r)},p(t,e){16&e&&o!==(o=t[4].database_server.server_info+"")&&C(r,o)},d(t){t&&v(e)}}}function xt(t){let e,n,r,o=t[4].database_server.host_info+"";return{c(){e=_("tr"),n=_("td"),r=y(o)},m(t,o){b(t,e,o),p(e,n),p(n,r)},p(t,e){16&e&&o!==(o=t[4].database_server.host_info+"")&&C(r,o)},d(t){t&&v(e)}}}function wt(t){let e,n,r,o=t[4].os.name+"";return{c(){e=_("tr"),n=_("td"),r=y(o)},m(t,o){b(t,e,o),p(e,n),p(n,r)},p(t,e){16&e&&o!==(o=t[4].os.name+"")&&C(r,o)},d(t){t&&v(e)}}}function Et(t){let e,n,r,o=t[4].os.raw+"";return{c(){e=_("tr"),n=_("td"),r=y(o)},m(t,o){b(t,e,o),p(e,n),p(n,r)},p(t,e){16&e&&o!==(o=t[4].os.raw+"")&&C(r,o)},d(t){t&&v(e)}}}function Ct(t){let e,n,r,o,l,s=void 0!==t[4].extra.plugins&&Nt(t),c=void 0!==t[4].extra.themes&&Ft(t);return{c(){e=_("div"),n=_("div"),s&&s.c(),r=k(),o=_("div"),c&&c.c(),E(n,"class","column column-50"),E(o,"class","column column-50"),E(e,"class","row")},m(t,a){b(t,e,a),p(e,n),s&&s.m(n,null),p(e,r),p(e,o),c&&c.m(o,null),l=!0},p(t,e){void 0!==t[4].extra.plugins?s?(s.p(t,e),16&e&&Y(s,1)):(s=Nt(t),s.c(),Y(s,1),s.m(n,null)):s&&(V(),Z(s,1,1,(()=>{s=null})),X()),void 0!==t[4].extra.themes?c?(c.p(t,e),16&e&&Y(c,1)):(c=Ft(t),c.c(),Y(c,1),c.m(o,null)):c&&(V(),Z(c,1,1,(()=>{c=null})),X())},i(t){l||(Y(s),Y(c),l=!0)},o(t){Z(s),Z(c),l=!1},d(t){t&&v(e),s&&s.d(),c&&c.d()}}}function Nt(t){let e,n,r,o,l,s,c,a=t[7]&&Tt(t);return{c(){e=_("button"),n=y("Plugins"),r=k(),a&&a.c(),o=x(),E(e,"aria-expanded",t[7])},m(u,i){b(u,e,i),p(e,n),b(u,r,i),a&&a.m(u,i),b(u,o,i),l=!0,s||(c=w(e,"click",t[10]),s=!0)},p(t,n){(!l||128&n)&&E(e,"aria-expanded",t[7]),t[7]?a?(a.p(t,n),128&n&&Y(a,1)):(a=Tt(t),a.c(),Y(a,1),a.m(o.parentNode,o)):a&&(V(),Z(a,1,1,(()=>{a=null})),X())},i(t){l||(Y(a),l=!0)},o(t){Z(a),l=!1},d(t){t&&v(e),t&&v(r),a&&a.d(t),t&&v(o),s=!1,c()}}}function Tt(t){let e,n,r,o=t[4].extra.plugins,l=[];for(let e=0;e<o.length;e+=1)l[e]=Mt(gt(t,o,e));return{c(){e=_("dl");for(let t=0;t<l.length;t+=1)l[t].c()},m(t,n){b(t,e,n);for(let t=0;t<l.length;t+=1)l[t].m(e,null);r=!0},p(t,n){if(16&n){let r;for(o=t[4].extra.plugins,r=0;r<o.length;r+=1){const s=gt(t,o,r);l[r]?l[r].p(s,n):(l[r]=Mt(s),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=o.length}},i(t){r||(H((()=>{n||(n=et(e,ft,{duration:500},!0)),n.run(1)})),r=!0)},o(t){n||(n=et(e,ft,{duration:500},!1)),n.run(0),r=!1},d(t){t&&v(e),$(l,t),t&&n&&n.end()}}}function jt(t){let e,n,r=t[15].alerts+"";return{c(){e=_("dd"),n=y(r),N(e,"color","orange")},m(t,r){b(t,e,r),p(e,n)},p(t,e){16&e&&r!==(r=t[15].alerts+"")&&C(n,r)},d(t){t&&v(e)}}}function Mt(t){let e,n,r,o,l,s,c,u=t[15].name+"",i=t[15].version+"",d=""!=t[15].alerts&&jt(t);return{c(){e=_("dt"),n=y(u),r=y(" ("),o=y(i),l=y(")"),d&&d.c(),c=x(),E(e,"class",s=a(t[15].active?"status-green":"status-red")+" svelte-8b11yd")},m(t,s){b(t,e,s),p(e,n),p(e,r),p(e,o),p(e,l),d&&d.m(t,s),b(t,c,s)},p(t,r){16&r&&u!==(u=t[15].name+"")&&C(n,u),16&r&&i!==(i=t[15].version+"")&&C(o,i),16&r&&s!==(s=a(t[15].active?"status-green":"status-red")+" svelte-8b11yd")&&E(e,"class",s),""!=t[15].alerts?d?d.p(t,r):(d=jt(t),d.c(),d.m(c.parentNode,c)):d&&(d.d(1),d=null)},d(t){t&&v(e),d&&d.d(t),t&&v(c)}}}function Ft(t){let e,n,r,o,l,s,c,a=t[8]&&Ot(t);return{c(){e=_("button"),n=y("Themes"),r=k(),a&&a.c(),o=x(),E(e,"aria-expanded",t[8])},m(u,i){b(u,e,i),p(e,n),b(u,r,i),a&&a.m(u,i),b(u,o,i),l=!0,s||(c=w(e,"click",t[11]),s=!0)},p(t,n){(!l||256&n)&&E(e,"aria-expanded",t[8]),t[8]?a?(a.p(t,n),256&n&&Y(a,1)):(a=Ot(t),a.c(),Y(a,1),a.m(o.parentNode,o)):a&&(V(),Z(a,1,1,(()=>{a=null})),X())},i(t){l||(Y(a),l=!0)},o(t){Z(a),l=!1},d(t){t&&v(e),t&&v(r),a&&a.d(t),t&&v(o),s=!1,c()}}}function Ot(t){let e,n,r,o=t[4].extra.themes,l=[];for(let e=0;e<o.length;e+=1)l[e]=At(ht(t,o,e));return{c(){e=_("dl");for(let t=0;t<l.length;t+=1)l[t].c()},m(t,n){b(t,e,n);for(let t=0;t<l.length;t+=1)l[t].m(e,null);r=!0},p(t,n){if(16&n){let r;for(o=t[4].extra.themes,r=0;r<o.length;r+=1){const s=ht(t,o,r);l[r]?l[r].p(s,n):(l[r]=At(s),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=o.length}},i(t){r||(H((()=>{n||(n=et(e,ft,{duration:500},!0)),n.run(1)})),r=!0)},o(t){n||(n=et(e,ft,{duration:500},!1)),n.run(0),r=!1},d(t){t&&v(e),$(l,t),t&&n&&n.end()}}}function St(t){let e,n,r=t[15].alerts+"";return{c(){e=_("dd"),n=y(r),N(e,"color","orange")},m(t,r){b(t,e,r),p(e,n)},p(t,e){16&e&&r!==(r=t[15].alerts+"")&&C(n,r)},d(t){t&&v(e)}}}function At(t){let e,n,r,o,l,s,c,u=t[15].name+"",i=t[15].version+"",d=""!=t[15].alerts&&St(t);return{c(){e=_("dt"),n=y(u),r=y(" ("),o=y(i),l=y(")"),d&&d.c(),c=x(),E(e,"class",s=a(t[15].active?"status-green":"status-red")+" svelte-8b11yd")},m(t,s){b(t,e,s),p(e,n),p(e,r),p(e,o),p(e,l),d&&d.m(t,s),b(t,c,s)},p(t,r){16&r&&u!==(u=t[15].name+"")&&C(n,u),16&r&&i!==(i=t[15].version+"")&&C(o,i),16&r&&s!==(s=a(t[15].active?"status-green":"status-red")+" svelte-8b11yd")&&E(e,"class",s),""!=t[15].alerts?d?d.p(t,r):(d=St(t),d.c(),d.m(c.parentNode,c)):d&&(d.d(1),d=null)},d(t){t&&v(e),d&&d.d(t),t&&v(c)}}}function Lt(t){let e,n,r,o=t[4].kraken.version+"";return{c(){e=_("span"),n=y("Kraken: "),r=y(o),E(e,"class","small_text svelte-8b11yd")},m(t,o){b(t,e,o),p(e,n),p(e,r)},p(t,e){16&e&&o!==(o=t[4].kraken.version+"")&&C(r,o)},d(t){t&&v(e)}}}function Pt(e){let n,r;return n=new pt({}),{c(){lt(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(Y(n.$$.fragment,t),r=!0)},o(t){Z(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function Rt(t){let e,n,r,o={ctx:t,current:null,token:null,hasCatch:!0,pending:Pt,then:vt,catch:bt,value:14,error:6,blocks:[,,,]};return nt(n=t[9],o),{c(){e=_("div"),o.block.c(),E(e,"class","kraken-element svelte-8b11yd")},m(t,n){b(t,e,n),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=null,r=!0},p(e,[r]){t=e,o.ctx=t,512&r&&n!==(n=t[9])&&nt(n,o)||rt(o,t,r)},i(t){r||(Y(o.block),r=!0)},o(t){for(let t=0;t<3;t+=1){Z(o.blocks[t])}r=!1},d(t){t&&v(e),o.block.d(),o.token=null,o=null}}}function Bt(t,e,n){let{statuscode:r}=e,{customer:o}=e,{url:l}=e,{error:s}=e,{errorcode:c}=e,{body:a}=e,{lastupdate:u}=e,i=!1;let d=!1;return t.$$set=t=>{"statuscode"in t&&n(0,r=t.statuscode),"customer"in t&&n(1,o=t.customer),"url"in t&&n(2,l=t.url),"error"in t&&n(6,s=t.error),"errorcode"in t&&n(3,c=t.errorcode),"body"in t&&n(4,a=t.body),"lastupdate"in t&&n(5,u=t.lastupdate)},[r,o,l,c,a,u,s,i,d,undefined,()=>n(7,i=!i),()=>n(8,d=!d)]}class Dt extends it{constructor(t){super(),ut(this,t,Bt,Rt,c,{statuscode:0,customer:1,url:2,error:6,errorcode:3,body:4,lastupdate:5})}}function zt(t,e,n){const r=t.slice();return r[1]=e[n],r}function Ht(t){let e,n,r=[],o=new Map,l=t[0];const s=t=>t[1].id;for(let e=0;e<l.length;e+=1){let n=zt(t,l,e),c=s(n);o.set(c,r[e]=Wt(c,n))}return{c(){e=_("ul");for(let t=0;t<r.length;t+=1)r[t].c()},m(t,o){b(t,e,o);for(let t=0;t<r.length;t+=1)r[t].m(e,null);n=!0},p(t,n){1&n&&(l=t[0],V(),r=function(t,e,n,r,o,l,s,c,a,u,i,d){let f=t.length,m=l.length,p=f;const h={};for(;p--;)h[t[p].key]=p;const g=[],b=new Map,v=new Map;for(p=m;p--;){const t=d(o,l,p),c=n(t);let a=s.get(c);a?r&&a.p(t,e):(a=u(c,t),a.c()),b.set(c,g[p]=a),c in h&&v.set(c,Math.abs(p-h[c]))}const $=new Set,_=new Set;function y(t){Y(t,1),t.m(c,i),s.set(t.key,t),i=t.first,m--}for(;f&&m;){const e=g[m-1],n=t[f-1],r=e.key,o=n.key;e===n?(i=e.first,f--,m--):b.has(o)?!s.has(r)||$.has(r)?y(e):_.has(o)?f--:v.get(r)>v.get(o)?(_.add(r),y(e)):($.add(o),f--):(a(n,s),f--)}for(;f--;){const e=t[f];b.has(e.key)||a(e,s)}for(;m;)y(g[m-1]);return g}(r,n,s,1,t,l,o,e,ot,Wt,null,zt),X())},i(t){if(!n){for(let t=0;t<l.length;t+=1)Y(r[t]);n=!0}},o(t){for(let t=0;t<r.length;t+=1)Z(r[t]);n=!1},d(t){t&&v(e);for(let t=0;t<r.length;t+=1)r[t].d()}}}function Wt(t,e){let r,o,l,s,c;const a=[e[1]];let u={};for(let t=0;t<a.length;t+=1)u=n(u,a[t]);return o=new Dt({props:u}),{key:t,first:null,c(){r=_("li"),lt(o.$$.fragment),l=k(),this.first=r},m(t,e){b(t,r,e),st(o,r,null),p(r,l),c=!0},p(t,n){e=t;const r=1&n?function(t,e){const n={},r={},o={$$scope:1};let l=t.length;for(;l--;){const s=t[l],c=e[l];if(c){for(const t in s)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[l]=c}else for(const t in s)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}(a,[(l=e[1],"object"==typeof l&&null!==l?l:{})]):{};var l;o.$set(r)},i(t){c||(Y(o.$$.fragment,t),t&&H((()=>{s||(s=et(r,ft,{},!0)),s.run(1)})),c=!0)},o(t){Z(o.$$.fragment,t),t&&(s||(s=et(r,ft,{},!1)),s.run(0)),c=!1},d(t){t&&v(r),ct(o),t&&s&&s.end()}}}function qt(t){let e,n,r=null!=t[0]&&Ht(t);return{c(){r&&r.c(),e=x()},m(t,o){r&&r.m(t,o),b(t,e,o),n=!0},p(t,[n]){null!=t[0]?r?(r.p(t,n),1&n&&Y(r,1)):(r=Ht(t),r.c(),Y(r,1),r.m(e.parentNode,e)):r&&(V(),Z(r,1,1,(()=>{r=null})),X())},i(t){n||(Y(r),n=!0)},o(t){Z(r),n=!1},d(t){r&&r.d(t),t&&v(e)}}}function Ut(t,e,n){let{list_data:r}=e;return console.log(r),t.$$set=t=>{"list_data"in t&&n(0,r=t.list_data)},[r]}class It extends it{constructor(t){super(),ut(this,t,Ut,qt,c,{list_data:0})}}function Kt(e){let n,r,o=e[5].message+"";return{c(){n=_("p"),r=y(o),N(n,"color","red")},m(t,e){b(t,n,e),p(n,r)},p(t,e){1&e&&o!==(o=t[5].message+"")&&C(r,o)},i:t,o:t,d(t){t&&v(n)}}}function Gt(t){let e,n;return e=new It({props:{list_data:t[4]}}),{c(){lt(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.list_data=t[4]),e.$set(r)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){Z(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Jt(e){let n,r;return n=new pt({}),{c(){lt(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(Y(n.$$.fragment,t),r=!0)},o(t){Z(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function Qt(t){let e,n,r,o,l,s,c,a,u={ctx:t,current:null,token:null,hasCatch:!0,pending:Jt,then:Gt,catch:Kt,value:4,error:5,blocks:[,,,]};return nt(l=t[0],u),{c(){e=_("nav"),n=_("button"),n.textContent="Liste neu laden",r=k(),o=_("article"),u.block.c(),E(e,"class","svelte-19b762m")},m(l,i){b(l,e,i),p(e,n),b(l,r,i),b(l,o,i),u.block.m(o,u.anchor=null),u.mount=()=>o,u.anchor=null,s=!0,c||(a=w(n,"click",t[1]),c=!0)},p(e,[n]){t=e,u.ctx=t,1&n&&l!==(l=t[0])&&nt(l,u)||rt(u,t,n)},i(t){s||(Y(u.block),s=!0)},o(t){for(let t=0;t<3;t+=1){Z(u.blocks[t])}s=!1},d(t){t&&v(e),t&&v(r),t&&v(o),u.block.d(),u.token=null,u=null,c=!1,a()}}}function Vt(t,e,n){let r=null;var o;return o=()=>{n(0,r=async function(){const t=await fetch("/getlist/all",{headers:{"Content-Type":"application/json"}}),e=await t.json();if(t.ok)return e;throw new Error(e)}())},A().$$.on_mount.push(o),[r,function(){n(0,r=async function(){if(!(await fetch("/refresh")).ok)throw new Error("Url nicht erreichbar?");location.reload()}())}]}return new class extends it{constructor(t){super(),ut(this,t,Vt,Qt,c,{})}}({target:document.getElementsByTagName("main")[0]})}();
//# sourceMappingURL=bundle.js.map
