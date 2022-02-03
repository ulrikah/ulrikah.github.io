var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}function l(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function a(t,e,n,r,o,s,c){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=l(e,n,r,c);t.p(o,i)}}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function m(){return C(" ")}function h(){return C("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let v;function b(t){v=t}function k(){if(!v)throw new Error("Function called outside component initialization");return v}function x(){const t=k();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((e=>{e.call(t,o)}))}}}function y(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const j=[],E=[],_=[],L=[],M=Promise.resolve();let T=!1;function A(){T||(T=!0,M.then(B))}function O(t){_.push(t)}let S=!1;const N=new Set;function B(){if(!S){S=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];b(e),R(e.$$)}for(b(null),j.length=0;E.length;)E.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];N.has(e)||(N.add(e),e())}_.length=0}while(j.length);for(;L.length;)L.pop()();T=!1,S=!1,N.clear()}}function R(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const q=new Set;let I;function P(){I={r:0,c:[],p:I}}function Z(){I.r||o(I.c),I=I.p}function D(t,e){t&&t.i&&(q.delete(t),t.i(e))}function H(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),I.c.push((()=>{q.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function W(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Y(t){return"object"==typeof t&&null!==t?t:{}}function U(t){t&&t.c()}function X(t,e,r){const{fragment:c,on_mount:i,on_destroy:l,after_update:a}=t.$$;c&&c.m(e,r),O((()=>{const e=i.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(O)}function z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(e,n,s,c,i,l,a=[-1]){const u=v;b(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:a,skip_bound:!1};let d=!1;if(p.ctx=s?s(e,f,((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),d&&function(t,e){-1===t.$$.dirty[0]&&(j.push(t),A(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),d=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach($)}else p.fragment&&p.fragment.c();n.intro&&D(e.$$.fragment),X(e,n.target,n.anchor),B()}b(u)}class G{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const J=[];function K(t,e){return{subscribe:Q(t,e).subscribe}}function Q(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!J.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),J.push(n,e)}if(t){for(let t=0;t<J.length;t+=2)J[t][0](J[t+1]);J.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const l=[c,i];return o.push(l),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function V(e,n,r){const c=!Array.isArray(e),i=c?[e]:e,l=n.length<2;return K(r,(e=>{let r=!1;const a=[];let u=0,f=t;const $=()=>{if(u)return;f();const r=n(c?a[0]:a,e);l?e(r):f=s(r)?r:t},p=i.map(((e,n)=>function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(e,(t=>{a[n]=t,u&=~(1<<n),r&&$()}),(()=>{u|=1<<n}))));return r=!0,$(),function(){o(p),f()}}))}function tt(t){let n,r,o;const s=[t[2]];var c=t[0];function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i()),n.$on("routeEvent",t[7])),{c(){n&&U(n.$$.fragment),r=h()},m(t,e){n&&X(n,t,e),f(t,r,e),o=!0},p(t,e){const o=4&e?W(s,[Y(t[2])]):{};if(c!==(c=t[0])){if(n){P();const t=n;H(t.$$.fragment,1,0,(()=>{z(t,1)})),Z()}c?(n=new c(i()),n.$on("routeEvent",t[7]),U(n.$$.fragment),D(n.$$.fragment,1),X(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&D(n.$$.fragment,t),o=!0)},o(t){n&&H(n.$$.fragment,t),o=!1},d(t){t&&$(r),n&&z(n,t)}}}function et(t){let n,r,o;const s=[{params:t[1]},t[2]];var c=t[0];function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i()),n.$on("routeEvent",t[6])),{c(){n&&U(n.$$.fragment),r=h()},m(t,e){n&&X(n,t,e),f(t,r,e),o=!0},p(t,e){const o=6&e?W(s,[2&e&&{params:t[1]},4&e&&Y(t[2])]):{};if(c!==(c=t[0])){if(n){P();const t=n;H(t.$$.fragment,1,0,(()=>{z(t,1)})),Z()}c?(n=new c(i()),n.$on("routeEvent",t[6]),U(n.$$.fragment),D(n.$$.fragment,1),X(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&D(n.$$.fragment,t),o=!0)},o(t){n&&H(n.$$.fragment,t),o=!1},d(t){t&&$(r),n&&z(n,t)}}}function nt(t){let e,n,r,o;const s=[et,tt],c=[];function i(t,e){return t[1]?0:1}return e=i(t),n=c[e]=s[e](t),{c(){n.c(),r=h()},m(t,n){c[e].m(t,n),f(t,r,n),o=!0},p(t,[o]){let l=e;e=i(t),e===l?c[e].p(t,o):(P(),H(c[l],1,1,(()=>{c[l]=null})),Z(),n=c[e],n?n.p(t,o):(n=c[e]=s[e](t),n.c()),D(n,1),n.m(r.parentNode,r))},i(t){o||(D(n),o=!0)},o(t){H(n),o=!1},d(t){c[e].d(t),t&&$(r)}}}function rt(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const ot=K(null,(function(t){t(rt());const e=()=>{t(rt())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));V(ot,(t=>t.location)),V(ot,(t=>t.querystring));function st(t,e){if(!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return ct(t,e||t.getAttribute("href")),{update(e){ct(t,e)}}}function ct(t,e){if(!e||e.length<1||"/"!=e.charAt(0))throw Error('Invalid value for "href" attribute: '+e);t.setAttribute("href","#"+e),t.addEventListener("click",it)}function it(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");history.replaceState({scrollX:window.scrollX,scrollY:window.scrollY},void 0,void 0),window.location.hash=e}function lt(t,e,n){let{routes:r={}}=e,{prefix:o=""}=e,{restoreScrollState:s=!1}=e;class c{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:r}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,o,s,c=[],i="",l=t.split("/");for(l[0]||l.shift();o=l.shift();)"*"===(n=o[0])?(c.push("wild"),i+="/(.*)"):":"===n?(r=o.indexOf("?",1),s=o.indexOf(".",1),c.push(o.substring(1,~r?r:~s?s:o.length)),i+=~r&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(i+=(~r?"?":"")+"\\"+o.substring(s))):i+="/"+o;return{keys:c,pattern:new RegExp("^"+i+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=r}match(t){if(o)if("string"==typeof o){if(!t.startsWith(o))return null;t=t.substr(o.length)||"/"}else if(o instanceof RegExp){const e=t.match(o);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let r=0;for(;r<this._keys.length;){try{n[this._keys[r]]=decodeURIComponent(e[r+1]||"")||null}catch(t){n[this._keys[r]]=null}r++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const i=[];r instanceof Map?r.forEach(((t,e)=>{i.push(new c(e,t))})):Object.keys(r).forEach((t=>{i.push(new c(t,r[t]))}));let l=null,a=null,u={};const f=x();async function $(t,e){await(A(),M),f(t,e)}let p=null;var d;s&&(window.addEventListener("popstate",(t=>{p=t.state&&t.state.scrollY?t.state:null})),d=()=>{p?window.scrollTo(p.scrollX,p.scrollY):window.scrollTo(0,0)},k().$$.after_update.push(d));let C=null,m=null;return ot.subscribe((async t=>{C=t;let e=0;for(;e<i.length;){const r=i[e].match(t.location);if(!r){e++;continue}const o={route:i[e].path,location:t.location,querystring:t.querystring,userData:i[e].userData};if(!await i[e].checkConditions(o))return n(0,l=null),m=null,void $("conditionsFailed",o);$("routeLoading",Object.assign({},o));const s=i[e].component;if(m!=s){s.loading?(n(0,l=s.loading),m=s,n(1,a=s.loadingParams),n(2,u={}),$("routeLoaded",Object.assign({},o,{component:l,name:l.name}))):(n(0,l=null),m=null);const e=await s();if(t!=C)return;n(0,l=e&&e.default||e),m=s}return r&&"object"==typeof r&&Object.keys(r).length?n(1,a=r):n(1,a=null),n(2,u=i[e].props),void $("routeLoaded",Object.assign({},o,{component:l,name:l.name}))}n(0,l=null),m=null})),t.$$set=t=>{"routes"in t&&n(3,r=t.routes),"prefix"in t&&n(4,o=t.prefix),"restoreScrollState"in t&&n(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[l,a,u,r,o,s,function(e){y(t,e)},function(e){y(t,e)}]}class at extends G{constructor(t){super(),F(this,t,lt,nt,c,{routes:3,prefix:4,restoreScrollState:5})}}function ut(t){let e,n;const r=t[1].default,o=i(r,t,t[0],null);return{c(){e=p("div"),o&&o.c(),g(e,"class","flex-item svelte-95b4ff")},m(t,r){f(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&a(o,r,t,t[0],e,null,null)},i(t){n||(D(o,t),n=!0)},o(t){H(o,t),n=!1},d(t){t&&$(e),o&&o.d(t)}}}function ft(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class $t extends G{constructor(t){super(),F(this,t,ft,ut,c,{})}}function pt(e){let n,r,o;return{c(){n=d("svg"),r=d("path"),o=d("path"),g(r,"d","M160.544 57.8397C167.03 52.5821 171.986 50.8713 176.346 44.2277C177.728 40.7699 176.677 38.2041 175.776 34.842C174.901 31.5776 173.225 30.3991 170.736 28.1312C168.877 26.436 165.811 25.2582 163.728 23.618C161.576 21.9229 158.571 20.25 155.668 20.2859C152.666 20.3229 149.773 18.9447 146.677 19.2587C145.115 19.4171 143.456 19.7175 141.882 19.6442C138.43 19.4836 135.108 19.1867 131.686 19.2289C124.171 19.3216 116.274 18.5643 108.801 19.58C105.423 20.0391 101.058 21.3045 97.846 22.5154C94.2689 23.864 90.95 25.6634 87.4253 27.0418C85.8445 27.6601 82.77 28.668 81.7298 29.981C80.3986 31.6616 76.193 31.2358 74.3163 32.2886C72.853 33.1096 71.4251 33.6093 69.5802 34.1037C63.5131 35.7293 57.9424 38.3782 51.8237 40.0177C47.5663 41.1584 43.1761 43.6527 39.2625 45.6958C36.4818 47.1475 33.249 49.0208 31.3925 51.2731C29.6316 53.4094 26.3622 56.1293 24.0132 57.8751C20.7428 60.3056 18.2399 63.423 15.2171 66.045C13.6416 67.4115 8.67767 71.2046 9.12691 73.4256C9.74424 76.4777 11.4172 78.5145 12.5045 81.1919C13.6577 84.0315 16.0779 87.1903 19.051 88.6872C20.5857 89.4598 21.9625 90.2084 23.5474 90.9509C25.4055 91.8214 27.7628 90.9233 29.5694 91.6497C32.4035 92.7891 37.0627 92.1461 40.227 92.7121C45.208 93.6031 50.3115 93.8169 55.3596 93.539C59.0102 93.338 62.0421 93.9323 65.718 92.9473L78.8909 89.4177C85.1846 87.7313 91.6081 86.2944 97.6642 83.9378C103.268 81.7569 109.202 81.2958 115.049 79.7291C119.547 78.5239 123.355 76.9601 127.565 75.0909C131.786 73.2168 136.317 71.7819 140.358 69.6074C143.94 67.6803 148.03 65.505 151.846 64.0886C155.325 62.7974 157.806 60.0592 160.544 57.8397Z"),g(r,"stroke","black"),g(r,"stroke-linecap","round"),g(r,"stroke-linejoin","round"),g(r,"class","svelte-a3bmpp"),g(o,"d","M159.897 55.4226C166.382 50.165 171.338 48.4542 175.698 41.8106C177.08 38.3527 176.029 35.787 175.128 32.4249C174.254 29.1605 172.577 27.9819 170.089 25.7141C168.229 24.0189 165.164 22.8411 163.081 21.2009C160.928 19.5058 157.923 17.8329 155.02 17.8687C152.019 17.9058 149.125 16.5275 146.029 16.8416C144.467 16.9999 142.808 17.3004 141.234 17.2271C137.782 17.0665 134.461 16.7696 131.038 16.8118C123.523 16.9045 115.626 16.1472 108.153 17.1629C104.775 17.622 100.41 18.8874 97.1983 20.0983C93.6212 21.4469 90.3023 23.2463 86.7776 24.6247C85.1968 25.243 82.1223 26.2509 81.0821 27.5639C79.7509 29.2444 75.5452 28.8187 73.6686 29.8715C72.2053 30.6925 70.7774 31.1922 68.9325 31.6865C62.8654 33.3122 57.2947 35.9611 51.176 37.6006C46.9186 38.7413 42.5284 41.2356 38.6148 43.2787C35.8341 44.7304 32.6013 46.6037 30.7448 48.856C28.9839 50.9923 25.7145 53.7122 23.3655 55.458C20.0951 57.8884 17.5922 61.0059 14.5694 63.6279C12.9939 64.9944 8.02996 68.7875 8.4792 71.0085C9.09654 74.0606 10.7694 76.0973 11.8568 78.7748C13.01 81.6144 15.4301 84.7732 18.4033 86.2701C19.938 87.0427 21.3148 87.7913 22.8997 88.5338C24.7578 89.4043 27.1151 88.5062 28.9217 89.2325C31.7558 90.372 36.415 89.729 39.5793 90.295C44.5602 91.1859 49.6638 91.3997 54.7119 91.1219C58.3625 90.9209 61.3944 91.5152 65.0703 90.5302L78.2432 87.0005C84.5369 85.3142 90.9604 83.8773 97.0165 81.5207C102.621 79.3398 108.555 78.8786 114.402 77.312C118.899 76.1068 122.708 74.543 126.917 72.6738C131.138 70.7996 135.669 69.3647 139.711 67.1903C143.293 65.2632 147.382 63.0879 151.198 61.6715C154.677 60.3803 157.159 57.6421 159.897 55.4226Z"),g(o,"stroke","black"),g(o,"stroke-linecap","round"),g(o,"stroke-linejoin","round"),g(o,"class","svelte-a3bmpp"),g(n,"width","90%"),g(n,"height","90%"),g(n,"viewBox","0 0 184 107"),g(n,"fill","none"),g(n,"xmlns","http://www.w3.org/2000/svg"),g(n,"class","svelte-a3bmpp")},m(t,e){f(t,n,e),u(n,r),u(n,o)},p:t,i:t,o:t,d(t){t&&$(n)}}}class dt extends G{constructor(t){super(),F(this,t,null,pt,c,{})}}function Ct(e){let n,r,o;return{c(){n=d("svg"),r=d("path"),o=d("path"),g(r,"d","M5.38177 18.9749C8.79061 14.7138 9.90126 14.115 15.6174 14.115C19.148 14.115 19.9345 12.73 22.4592 10.2054C25.0584 7.60616 30.2434 10.2792 33.455 8.49493C38.5341 5.67321 41.4239 0.920044 47.8988 0.920044C52.561 0.920044 56.4267 1.85076 60.1164 4.80251C64.3022 8.15117 68.6736 12.5423 73.6643 14.6037C77.5947 16.2271 80.1095 16.5585 84.3615 16.5585C88.215 16.5585 91.7664 15.5811 95.5473 15.5811C98.099 15.5811 100.652 15.5545 103.204 15.5811C108.063 15.6317 111.064 17.6079 115.475 19.2735C119.308 20.7204 124.588 21.1014 126.526 25.1379C128.055 28.3246 126.982 33.1613 127.774 36.6496C128.462 39.675 128.996 43.0172 128.996 46.125C128.996 49.8255 128.917 53.436 128.508 57.1208C128.062 61.1295 127.153 62.3852 124.598 64.94C121.775 67.7625 120.939 71.8706 118.245 74.7141C115.595 77.5115 112.196 79.5539 109.665 82.4247C108.168 84.1233 107.137 86.1315 105.647 87.8004C104.741 88.8151 104.738 90.0154 103.475 90.8412C102.197 91.6771 100.546 91.665 99.1854 92.3073C97.2717 93.211 95.4687 94.244 93.5925 95.2124C89.0383 97.563 84.6004 97.1944 79.6102 97.1944C74.7346 97.1944 69.3539 97.3907 64.9491 94.968C60.5528 92.5501 55.9587 90.8142 51.8085 87.909C47.4912 84.887 42.4396 85.5628 37.5004 84.8682C32.9825 84.2329 27.7275 81.752 23.8167 79.4925C21.9846 78.4339 19.9641 77.5609 18.441 76.0716C16.5103 74.1838 14.8759 71.4287 12.7937 69.827C10.6916 68.21 8.95353 65.6317 7.79813 63.2567C6.49408 60.5762 6.25842 57.5576 5.73472 54.6773C5.41593 52.924 4.27127 51.5127 3.88851 49.7903C3.12396 46.3498 0.956299 43.6663 0.956299 40.0162C0.956299 36.9555 1.4548 34.4299 1.9337 31.4368C2.54806 27.597 2.87676 22.1061 5.38177 18.9749Z"),g(r,"stroke","black"),g(r,"stroke-linecap","round"),g(r,"stroke-linejoin","round"),g(r,"class","svelte-a3bmpp"),g(o,"d","M7.38177 20.9749C10.7906 16.7138 11.9013 16.115 17.6174 16.115C21.148 16.115 21.9345 14.73 24.4592 12.2054C27.0584 9.60616 32.2434 12.2792 35.455 10.4949C40.5341 7.67321 43.4239 2.92004 49.8988 2.92004C54.561 2.92004 58.4267 3.85076 62.1164 6.80251C66.3022 10.1512 70.6736 14.5423 75.6643 16.6037C79.5947 18.2271 82.1095 18.5585 86.3615 18.5585C90.215 18.5585 93.7664 17.5811 97.5473 17.5811C100.099 17.5811 102.652 17.5545 105.204 17.5811C110.063 17.6317 113.064 19.6079 117.475 21.2735C121.308 22.7204 126.588 23.1014 128.526 27.1379C130.055 30.3246 128.982 35.1613 129.774 38.6496C130.462 41.675 130.996 45.0172 130.996 48.125C130.996 51.8255 130.917 55.436 130.508 59.1208C130.062 63.1295 129.153 64.3852 126.598 66.94C123.775 69.7625 122.939 73.8706 120.245 76.7141C117.595 79.5115 114.196 81.5539 111.665 84.4247C110.168 86.1233 109.137 88.1315 107.647 89.8004C106.741 90.8151 106.738 92.0154 105.475 92.8412C104.197 93.6771 102.546 93.665 101.185 94.3073C99.2717 95.211 97.4687 96.244 95.5925 97.2124C91.0383 99.563 86.6004 99.1944 81.6102 99.1944C76.7346 99.1944 71.3539 99.3907 66.9491 96.968C62.5528 94.5501 57.9587 92.8142 53.8085 89.909C49.4912 86.887 44.4396 87.5628 39.5004 86.8682C34.9825 86.2329 29.7275 83.752 25.8167 81.4925C23.9846 80.4339 21.9641 79.5609 20.441 78.0716C18.5103 76.1838 16.8759 73.4287 14.7937 71.827C12.6916 70.21 10.9535 67.6317 9.79813 65.2567C8.49408 62.5762 8.25842 59.5576 7.73472 56.6773C7.41593 54.924 6.27127 53.5127 5.88851 51.7903C5.12396 48.3498 2.9563 45.6663 2.9563 42.0162C2.9563 38.9555 3.4548 36.4299 3.9337 33.4368C4.54806 29.597 4.87676 24.1061 7.38177 20.9749Z"),g(o,"stroke","black"),g(o,"stroke-linecap","round"),g(o,"stroke-linejoin","round"),g(o,"class","svelte-a3bmpp"),g(n,"width","80%"),g(n,"height","80%"),g(n,"viewBox","0 0 132 100"),g(n,"fill","none"),g(n,"xmlns","http://www.w3.org/2000/svg"),g(n,"class","svelte-a3bmpp")},m(t,e){f(t,n,e),u(n,r),u(n,o)},p:t,i:t,o:t,d(t){t&&$(n)}}}class mt extends G{constructor(t){super(),F(this,t,null,Ct,c,{})}}function ht(e){let n,r,o;return{c(){n=d("svg"),r=d("path"),o=d("path"),g(r,"d","M75.2519 4.84797C64.1068 23.4232 77.9445 31.0656 61.0793 52.2544C61.0793 70.0912 30.8788 74.495 25.2179 71.979C-16.1479 70.2312 9.05854 83.8138 17.393 83.8138C22.3025 83.8138 30.2091 85.3499 34.7798 83.5216C41.382 80.8807 50.7211 78.8833 57.7919 77.312C66.1538 75.4538 61.2372 87.2728 58.4494 90.3887C51.7611 97.8638 49.782 107.543 45.9571 115.958C43.7841 120.738 44.8392 131.76 46.9068 136.413C49.7048 142.708 56.7885 137.195 60.273 134.483L60.4218 134.367C67.8286 128.606 71.3785 116.975 75.2519 108.798C77.9392 103.125 82.119 97.4254 82.119 91.0462C82.119 83.4456 88.7991 86.7393 92.3466 90.6809C96.0182 94.7605 100.418 101.956 103.159 106.753C106.377 112.386 112.987 114.682 117.623 119.318C120.97 122.664 123.718 126.824 127.486 129.838C131.012 132.659 127.441 145.618 132.745 145.618C141.703 145.618 143.923 145.925 143.923 136.413C143.923 127.916 141.996 122.215 138.663 114.716C135.61 107.846 127.404 103.261 123.906 96.9635C121.368 92.3952 115.08 85.7612 110.391 83.1563C105.145 80.2418 97.9648 78.9308 102.136 71.979C107.862 62.4349 120.412 63.2833 130.042 61.5323C138.636 59.9698 146.553 61.1014 146.553 50.9394C146.553 46.7277 147.606 41.1494 146.48 37.2053C146.04 35.6681 139.351 36.4747 137.932 36.4747C127.331 36.4747 115.486 35.2786 105.789 40.1274C99.4769 43.2833 91.8631 46.4552 86.7214 51.5969C84.0795 54.2388 82.119 57.9032 82.119 51.9622C82.119 48.1147 87.5576 7.46985 83.188 5.43069C78.7698 -0.249919 77.5856 0.958423 75.2519 4.84797Z"),g(r,"stroke","black"),g(r,"stroke-width","0.582615"),g(r,"stroke-linecap","round"),g(r,"stroke-linejoin","round"),g(r,"class","svelte-a3bmpp"),g(o,"d","M73.504 4.26539C62.3589 22.8406 76.1966 30.4831 59.3315 51.6718C59.3315 69.5086 29.131 73.9124 23.47 71.3965C-17.8957 69.6486 7.31067 83.2312 15.6451 83.2312C20.5547 83.2312 28.4612 84.7673 33.032 82.939C39.6341 80.2981 48.9732 78.3007 56.044 76.7294C64.4059 74.8712 59.4894 86.6902 56.7015 89.8061C50.0132 97.2813 48.0342 106.96 44.2093 115.375C42.0363 120.156 43.0913 131.178 45.159 135.83C47.957 142.126 55.0407 136.612 58.5251 133.9L58.674 133.785C66.0808 128.024 69.6307 116.393 73.504 108.216C76.1914 102.542 80.3711 96.8428 80.3711 90.4636C80.3711 82.863 87.0513 86.1567 90.5987 90.0983C94.2704 94.1779 98.6699 101.374 101.411 106.17C104.629 111.803 111.239 114.099 115.875 118.736C119.222 122.082 121.97 126.241 125.738 129.255C129.264 132.076 125.693 145.035 130.998 145.035C139.955 145.035 142.175 145.342 142.175 135.83C142.175 127.334 140.248 121.632 136.915 114.133C133.862 107.263 125.657 102.678 122.158 96.381C119.62 91.8126 113.332 85.1786 108.643 82.5737C103.397 79.6592 96.2169 78.3482 100.388 71.3965C106.114 61.8523 118.664 62.7007 128.295 60.9497C136.888 59.3872 144.805 60.5188 144.805 50.3569C144.805 46.1451 145.859 40.5668 144.732 36.6227C144.292 35.0855 137.603 35.8922 136.184 35.8922C125.583 35.8922 113.738 34.696 104.041 39.5449C97.729 42.7007 90.1152 45.8726 84.9735 51.0144C82.3316 53.6562 80.3711 57.3206 80.3711 51.3796C80.3711 47.5321 85.8098 6.88727 81.4402 4.84811C77.0219 -0.8325 75.8378 0.375842 73.504 4.26539Z"),g(o,"stroke","black"),g(o,"stroke-width","0.582615"),g(o,"stroke-linecap","round"),g(o,"stroke-linejoin","round"),g(o,"class","svelte-a3bmpp"),g(n,"width","80%"),g(n,"height","80%"),g(n,"viewBox","0 0 148 146"),g(n,"fill","none"),g(n,"xmlns","http://www.w3.org/2000/svg"),g(n,"class","svelte-a3bmpp")},m(t,e){f(t,n,e),u(n,r),u(n,o)},p:t,i:t,o:t,d(t){t&&$(n)}}}class gt extends G{constructor(t){super(),F(this,t,null,ht,c,{})}}function wt(e){let n,r,o;return{c(){n=d("svg"),r=d("path"),o=d("path"),g(r,"d","M11.9665 58.8908C8.94155 54.0901 11.1715 47.8065 12.2473 42.7452C12.683 40.6955 12.576 39.1296 11.9811 37.1904C11.4252 35.3784 12.5538 32.9123 11.6834 31.1787C10.1697 28.1637 13.6876 21.9139 14.8862 19.2875C16.0078 16.8297 19.1837 15.6284 21.6248 14.9644C29.2316 12.8954 36.0923 9.0355 43.9725 7.84993C49.2825 7.05103 56.5576 9.83751 61.8165 11.0319C68.4413 12.5365 72.4211 15.2851 77.3956 19.4236C84.1441 25.0379 94.7528 27.2929 103.236 29.096L103.248 29.0987C113.57 31.2926 124.443 30.113 134.599 33.4796C139.195 35.0031 143.415 36.4788 148.214 37.4988C153.377 38.5963 158.587 39.5618 163.719 40.7945C168.654 41.98 173.873 44.0764 178.105 46.7785C181.783 49.1265 181.941 51.802 179.472 55.1717C177.855 57.3786 177.555 60.1069 177 62.7168C176.524 64.9582 177.652 66.4192 177.941 68.5758C178.481 72.5879 178.188 77.2421 179.197 81.1252C181.547 90.1699 173.06 94.2753 165.821 95.645C158.292 97.0697 151.513 101.002 143.923 101.858C138.885 102.426 134.384 102.853 129.341 101.781L114.39 98.6032C109.616 97.5884 105.652 95.1838 101.023 94.0256C96.81 92.9717 92.5837 91.6531 88.2506 90.732C85.3169 90.1085 82.5933 88.9508 79.6622 88.3278C76.4304 87.6408 74.2583 84.3376 70.7141 83.532C64.6025 82.1427 58.4481 80.9248 52.3175 79.6217C43.0304 77.6476 34.2954 74.6607 25.6776 70.776C20.3572 68.3777 15.0597 63.7999 11.9665 58.8908Z"),g(r,"stroke","black"),g(r,"stroke-width","1.19032"),g(r,"stroke-linecap","round"),g(r,"stroke-linejoin","round"),g(r,"class","svelte-a3bmpp"),g(o,"d","M12.9665 61.8908C9.94155 57.0901 12.1715 50.8065 13.2473 45.7452C13.683 43.6955 13.576 42.1296 12.9811 40.1904C12.4252 38.3784 13.5538 35.9123 12.6834 34.1787C11.1697 31.1637 14.6876 24.9139 15.8862 22.2875C17.0078 19.8297 20.1837 18.6284 22.6248 17.9644C30.2316 15.8954 37.0923 12.0355 44.9725 10.8499C50.2825 10.051 57.5576 12.8375 62.8165 14.0319C69.4413 15.5365 73.4211 18.2851 78.3956 22.4236C85.1441 28.0379 95.7528 30.2929 104.236 32.096L104.248 32.0987C114.57 34.2926 125.443 33.113 135.599 36.4796C140.195 38.0031 144.415 39.4788 149.214 40.4988C154.377 41.5963 159.587 42.5618 164.719 43.7945C169.654 44.98 174.873 47.0764 179.105 49.7785C182.783 52.1265 182.941 54.802 180.472 58.1717C178.855 60.3786 178.555 63.1069 178 65.7168C177.524 67.9582 178.652 69.4192 178.941 71.5758C179.481 75.5879 179.188 80.2421 180.197 84.1252C182.547 93.1699 174.06 97.2753 166.821 98.645C159.292 100.07 152.513 104.002 144.923 104.858C139.885 105.426 135.384 105.853 130.341 104.781L115.39 101.603C110.616 100.588 106.652 98.1838 102.023 97.0256C97.81 95.9717 93.5837 94.6531 89.2506 93.732C86.3169 93.1085 83.5933 91.9508 80.6622 91.3278C77.4304 90.6408 75.2583 87.3376 71.7141 86.532C65.6025 85.1427 59.4481 83.9248 53.3175 82.6217C44.0304 80.6476 35.2954 77.6607 26.6776 73.776C21.3572 71.3777 16.0597 66.7999 12.9665 61.8908Z"),g(o,"stroke","black"),g(o,"stroke-width","1.19032"),g(o,"stroke-linecap","round"),g(o,"stroke-linejoin","round"),g(o,"class","svelte-a3bmpp"),g(n,"width","90%"),g(n,"height","90%"),g(n,"viewBox","0 0 192 115"),g(n,"fill","none"),g(n,"xmlns","http://www.w3.org/2000/svg"),g(n,"class","svelte-a3bmpp")},m(t,e){f(t,n,e),u(n,r),u(n,o)},p:t,i:t,o:t,d(t){t&&$(n)}}}class vt extends G{constructor(t){super(),F(this,t,null,wt,c,{})}}function bt(e){let n,r,o,c,l;const u=e[2].default,d=i(u,e,e[1],null);return{c(){n=p("a"),d&&d.c(),g(n,"href",e[0]),g(n,"class","svelte-1ye3l6n")},m(e,i){var a;f(e,n,i),d&&d.m(n,null),o=!0,c||(a=r=st.call(null,n),l=a&&s(a.destroy)?a.destroy:t,c=!0)},p(t,e){d&&d.p&&2&e&&a(d,u,t,t[1],e,null,null),(!o||1&e)&&g(n,"href",t[0])},i(t){o||(D(d,t),o=!0)},o(t){H(d,t),o=!1},d(t){t&&$(n),d&&d.d(t),c=!1,l()}}}function kt(t){let e,n;const r=t[2].default,o=i(r,t,t[1],null);return{c(){e=p("a"),o&&o.c(),g(e,"href",t[0]),g(e,"class","svelte-1ye3l6n")},m(t,r){f(t,e,r),o&&o.m(e,null),n=!0},p(t,s){o&&o.p&&2&s&&a(o,r,t,t[1],s,null,null),(!n||1&s)&&g(e,"href",t[0])},i(t){n||(D(o,t),n=!0)},o(t){H(o,t),n=!1},d(t){t&&$(e),o&&o.d(t)}}}function xt(t){let e,n,r,o,s;const c=[kt,bt],i=[];function l(t,n){return 1&n&&(e=!!t[0].startsWith("http")),e?0:1}return n=l(t,-1),r=i[n]=c[n](t),{c(){r.c(),o=h()},m(t,e){i[n].m(t,e),f(t,o,e),s=!0},p(t,[e]){let s=n;n=l(t,e),n===s?i[n].p(t,e):(P(),H(i[s],1,1,(()=>{i[s]=null})),Z(),r=i[n],r?r.p(t,e):(r=i[n]=c[n](t),r.c()),D(r,1),r.m(o.parentNode,o))},i(t){s||(D(r),s=!0)},o(t){H(r),s=!1},d(t){i[n].d(t),t&&$(o)}}}function yt(t,e,n){let{$$slots:r={},$$scope:o}=e,{href:s}=e;return t.$$set=t=>{"href"in t&&n(0,s=t.href),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class jt extends G{constructor(t){super(),F(this,t,yt,xt,c,{href:0})}}function Et(t){let e,n;return{c(){e=p("p"),n=C(t[1]),g(e,"class","svelte-lmrirw")},m(t,r){f(t,e,r),u(e,n)},p(t,e){2&e&&w(n,t[1])},d(t){t&&$(e)}}}function _t(e){let n,r,o,s,c=e[1]&&Et(e);return{c(){n=p("div"),r=p("h3"),o=C(e[0]),s=m(),c&&c.c(),g(r,"class","svelte-lmrirw"),g(n,"class","svelte-lmrirw")},m(t,e){f(t,n,e),u(n,r),u(r,o),u(n,s),c&&c.m(n,null)},p(t,[e]){1&e&&w(o,t[0]),t[1]?c?c.p(t,e):(c=Et(t),c.c(),c.m(n,null)):c&&(c.d(1),c=null)},i:t,o:t,d(t){t&&$(n),c&&c.d()}}}function Lt(t,e,n){let{tittel:r}=e,{beskrivelse:o}=e;return t.$$set=t=>{"tittel"in t&&n(0,r=t.tittel),"beskrivelse"in t&&n(1,o=t.beskrivelse)},[r,o]}class Mt extends G{constructor(t){super(),F(this,t,Lt,_t,c,{tittel:0,beskrivelse:1})}}function Tt(e){let n,r,o;return{c(){n=d("svg"),r=d("path"),o=d("path"),g(r,"d","M0.944092 122.214C1.20773 106.133 9.7084 88.7785 27.2663 88.1932C38.8856 87.8059 50.2646 90.6692 59.7389 82.7739C68.195 75.7272 74.0979 71.1182 85.674 71.1182C95.2604 71.1182 106.676 72.9815 115.48 68.8386C124.688 64.5055 128.632 58.5004 134.103 50.2153C138.457 43.6221 138.813 35.7703 142.791 29.1403C146.726 22.5822 152.385 20.2284 159.823 18.6458C167.619 16.9872 171.823 8.06551 175.135 1.44177"),g(r,"stroke","black"),g(r,"stroke-width","0.7"),g(r,"stroke-linecap","round"),g(r,"class","svelte-a3bmpp"),g(o,"d","M2.94409 125.214C3.20773 109.133 11.7084 91.7785 29.2663 91.1932C40.8856 90.8059 52.2646 93.6692 61.7389 85.7739C70.195 78.7272 76.0979 74.1182 87.674 74.1182C97.2604 74.1182 108.676 75.9815 117.48 71.8386C126.688 67.5055 130.632 61.5004 136.103 53.2153C140.457 46.6221 140.813 38.7703 144.791 32.1403C148.726 25.5822 154.385 23.2284 161.823 21.6458C169.619 19.9872 173.823 11.0655 177.135 4.44177"),g(o,"stroke","black"),g(o,"stroke-width","0.7"),g(o,"stroke-linecap","round"),g(o,"class","svelte-a3bmpp"),g(n,"width","90%"),g(n,"height","90%"),g(n,"viewBox","0 0 178 126"),g(n,"fill","none"),g(n,"xmlns","http://www.w3.org/2000/svg"),g(n,"class","svelte-a3bmpp")},m(t,e){f(t,n,e),u(n,r),u(n,o)},p:t,i:t,o:t,d(t){t&&$(n)}}}class At extends G{constructor(t){super(),F(this,t,null,Tt,c,{})}}function Ot(t){let e;return{c(){e=p("p"),e.textContent="Here are some projects I've worked on the last couple of years",g(e,"class","svelte-1p96143")},m(t,n){f(t,e,n)},d(t){t&&$(e)}}}function St(e){let n,r;return n=new Mt({props:{tittel:"Peers",beskrivelse:"Platform for peer-to-peer voice and video communication"}}),{c(){U(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p:t,i(t){r||(D(n.$$.fragment,t),r=!0)},o(t){H(n.$$.fragment,t),r=!1},d(t){z(n,t)}}}function Nt(t){let e,n;return e=new mt({}),{c(){U(e.$$.fragment)},m(t,r){X(e,t,r),n=!0},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function Bt(t){let e,n,r,o;return e=new jt({props:{href:"/posts/peers",$$slots:{default:[St]},$$scope:{ctx:t}}}),r=new jt({props:{href:"/posts/peers",$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),n=m(),U(r.$$.fragment)},m(t,s){X(e,t,s),f(t,n,s),X(r,t,s),o=!0},p(t,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s)},i(t){o||(D(e.$$.fragment,t),D(r.$$.fragment,t),o=!0)},o(t){H(e.$$.fragment,t),H(r.$$.fragment,t),o=!1},d(t){z(e,t),t&&$(n),z(r,t)}}}function Rt(t){let e,n;return e=new gt({}),{c(){U(e.$$.fragment)},m(t,r){X(e,t,r),n=!0},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function qt(e){let n,r;return n=new Mt({props:{tittel:"Rave",beskrivelse:"Adaptive audio processing with reinforcement learning"}}),{c(){U(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p:t,i(t){r||(D(n.$$.fragment,t),r=!0)},o(t){H(n.$$.fragment,t),r=!1},d(t){z(n,t)}}}function It(t){let e,n,r,o;return e=new jt({props:{href:"https://github.com/ulrikah/rave",$$slots:{default:[Rt]},$$scope:{ctx:t}}}),r=new jt({props:{href:"https://github.com/ulrikah/rave",$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),n=m(),U(r.$$.fragment)},m(t,s){X(e,t,s),f(t,n,s),X(r,t,s),o=!0},p(t,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s)},i(t){o||(D(e.$$.fragment,t),D(r.$$.fragment,t),o=!0)},o(t){H(e.$$.fragment,t),H(r.$$.fragment,t),o=!1},d(t){z(e,t),t&&$(n),z(r,t)}}}function Pt(e){let n,r;return n=new Mt({props:{tittel:"Blank",beskrivelse:"Exploration of musical interactions in virtual reality. This project was developed as part of a scholarship that I received from Blank"}}),{c(){U(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p:t,i(t){r||(D(n.$$.fragment,t),r=!0)},o(t){H(n.$$.fragment,t),r=!1},d(t){z(n,t)}}}function Zt(t){let e,n;return e=new vt({}),{c(){U(e.$$.fragment)},m(t,r){X(e,t,r),n=!0},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function Dt(t){let e,n,r,o;return e=new jt({props:{href:"https://blogg.blank.no/interaktive-musikkopplevelser-i-vr-36ceb2f9b9b7",$$slots:{default:[Pt]},$$scope:{ctx:t}}}),r=new jt({props:{href:"https://blogg.blank.no/interaktive-musikkopplevelser-i-vr-36ceb2f9b9b7",$$slots:{default:[Zt]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),n=m(),U(r.$$.fragment)},m(t,s){X(e,t,s),f(t,n,s),X(r,t,s),o=!0},p(t,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s)},i(t){o||(D(e.$$.fragment,t),D(r.$$.fragment,t),o=!0)},o(t){H(e.$$.fragment,t),H(r.$$.fragment,t),o=!1},d(t){z(e,t),t&&$(n),z(r,t)}}}function Ht(t){let e,n;return e=new dt({}),{c(){U(e.$$.fragment)},m(t,r){X(e,t,r),n=!0},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function Wt(e){let n,r;return n=new Mt({props:{tittel:"Morph",beskrivelse:"Experiments with morphogenesis"}}),{c(){U(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p:t,i(t){r||(D(n.$$.fragment,t),r=!0)},o(t){H(n.$$.fragment,t),r=!1},d(t){z(n,t)}}}function Yt(t){let e,n,r,o;return e=new jt({props:{href:"https://ulrikah.no/morph",$$slots:{default:[Ht]},$$scope:{ctx:t}}}),r=new jt({props:{href:"https://ulrikah.no/morph",$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),n=m(),U(r.$$.fragment)},m(t,s){X(e,t,s),f(t,n,s),X(r,t,s),o=!0},p(t,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s)},i(t){o||(D(e.$$.fragment,t),D(r.$$.fragment,t),o=!0)},o(t){H(e.$$.fragment,t),H(r.$$.fragment,t),o=!1},d(t){z(e,t),t&&$(n),z(r,t)}}}function Ut(e){let n,r;return n=new Mt({props:{tittel:"Bølger",beskrivelse:"Drawable, audible waveforms in the browser"}}),{c(){U(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p:t,i(t){r||(D(n.$$.fragment,t),r=!0)},o(t){H(n.$$.fragment,t),r=!1},d(t){z(n,t)}}}function Xt(t){let e,n;return e=new At({}),{c(){U(e.$$.fragment)},m(t,r){X(e,t,r),n=!0},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function zt(t){let e,n,r,o;return e=new jt({props:{href:"https://ulrikah.no/tegne",$$slots:{default:[Ut]},$$scope:{ctx:t}}}),r=new jt({props:{href:"https://ulrikah.no/tegne",$$slots:{default:[Xt]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),n=m(),U(r.$$.fragment)},m(t,s){X(e,t,s),f(t,n,s),X(r,t,s),o=!0},p(t,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s)},i(t){o||(D(e.$$.fragment,t),D(r.$$.fragment,t),o=!0)},o(t){H(e.$$.fragment,t),H(r.$$.fragment,t),o=!1},d(t){z(e,t),t&&$(n),z(r,t)}}}function Ft(t){let e,n,r,o,s,c,i,l,a,d,C,h,w;return n=new $t({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),o=new $t({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),c=new $t({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),l=new $t({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),d=new $t({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),h=new $t({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){e=p("main"),U(n.$$.fragment),r=m(),U(o.$$.fragment),s=m(),U(c.$$.fragment),i=m(),U(l.$$.fragment),a=m(),U(d.$$.fragment),C=m(),U(h.$$.fragment),g(e,"class","svelte-1p96143")},m(t,$){f(t,e,$),X(n,e,null),u(e,r),X(o,e,null),u(e,s),X(c,e,null),u(e,i),X(l,e,null),u(e,a),X(d,e,null),u(e,C),X(h,e,null),w=!0},p(t,[e]){const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),o.$set(s);const i={};1&e&&(i.$$scope={dirty:e,ctx:t}),c.$set(i);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),l.$set(a);const u={};1&e&&(u.$$scope={dirty:e,ctx:t}),d.$set(u);const f={};1&e&&(f.$$scope={dirty:e,ctx:t}),h.$set(f)},i(t){w||(D(n.$$.fragment,t),D(o.$$.fragment,t),D(c.$$.fragment,t),D(l.$$.fragment,t),D(d.$$.fragment,t),D(h.$$.fragment,t),w=!0)},o(t){H(n.$$.fragment,t),H(o.$$.fragment,t),H(c.$$.fragment,t),H(l.$$.fragment,t),H(d.$$.fragment,t),H(h.$$.fragment,t),w=!1},d(t){t&&$(e),z(n),z(o),z(c),z(l),z(d),z(h)}}}class Gt extends G{constructor(t){super(),F(this,t,null,Ft,c,{})}}function Jt(e){let n;return{c(){n=p("div"),n.innerHTML='<h3 class="svelte-18szxcj">Ulrik Antoniussen Halmøy</h3>'},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&$(n)}}}class Kt extends G{constructor(t){super(),F(this,t,null,Jt,c,{})}}function Qt(e){let n,r,o,s,c;return r=new Gt({}),s=new Kt({}),{c(){n=p("div"),U(r.$$.fragment),o=m(),U(s.$$.fragment),g(n,"class","svelte-1lrrh7y")},m(t,e){f(t,n,e),X(r,n,null),u(n,o),X(s,n,null),c=!0},p:t,i(t){c||(D(r.$$.fragment,t),D(s.$$.fragment,t),c=!0)},o(t){H(r.$$.fragment,t),H(s.$$.fragment,t),c=!1},d(t){t&&$(n),z(r),z(s)}}}class Vt extends G{constructor(t){super(),F(this,t,null,Qt,c,{})}}function te(e){let n;return{c(){n=p("main"),n.innerHTML='<h1>Peers</h1> \n\n    <code class="svelte-14e8rmj">peers</code> is an application for peer-to-peer multi-user video and\n    audio streaming over WebRTC. It was developed fall 2020 to learn about\n    WebRTC and to investigate the latency limitations of &quot;naïve&quot; multi-user P2P\n    communication when scaling up the number of participants.\n\n    <p>The platform is <a href="https://handshakers.herokuapp.com/">running on Heroku</a>. Currently, there is only one room to join. If you want to test it you\n        can do so by opening a connection to yourself on two different devices,\n        or invite a friend to join. The platform doesn&#39;t require any\n        authentication, so the link above is, in theory, the only thing you need\n        to connect.</p> \n\n    <p>The source code is available at <a href="https://github.com/ulrikah/peers">Github</a></p> \n    <br/> \n\n    <figure><img src="/peers.png" alt="Demonstration of four connected peers" class="svelte-14e8rmj"/> \n        <figcaption class="svelte-14e8rmj">User testing of the application</figcaption></figure> \n\n    <br/> \n    <br/>',g(n,"class","svelte-14e8rmj")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&$(n)}}}class ee extends G{constructor(t){super(),F(this,t,null,te,c,{})}}function ne(e){let n,r,o,s,c;return s=new at({props:{routes:e[0],prefix:re}}),{c(){n=p("main"),r=p("div"),r.innerHTML='<a href="/" class="svelte-1x8hapc">../</a>',o=m(),U(s.$$.fragment),g(r,"class","svelte-1x8hapc")},m(t,e){f(t,n,e),u(n,r),u(n,o),X(s,n,null),c=!0},p:t,i(t){c||(D(s.$$.fragment,t),c=!0)},o(t){H(s.$$.fragment,t),c=!1},d(t){t&&$(n),z(s)}}}const re="/posts";function oe(t){return[{"/peers":ee}]}class se extends G{constructor(t){super(),F(this,t,oe,ne,c,{})}}function ce(e){let n;return{c(){n=p("main"),n.innerHTML="<p>This doesn&#39;t seem to be a valid page</p>"},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&$(n)}}}class ie extends G{constructor(t){super(),F(this,t,null,ce,c,{})}}function le(e){let n,r,o;return r=new at({props:{routes:e[0]}}),{c(){n=p("body"),U(r.$$.fragment)},m(t,e){f(t,n,e),X(r,n,null),o=!0},p:t,i(t){o||(D(r.$$.fragment,t),o=!0)},o(t){H(r.$$.fragment,t),o=!1},d(t){t&&$(n),z(r)}}}function ae(t){return[{"/":Vt,"/posts":se,"/posts/*":se,"*":ie}]}return new class extends G{constructor(t){super(),F(this,t,ae,le,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
