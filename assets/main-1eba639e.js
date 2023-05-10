import{j as E,I as y,M as L,l as _,q as g,u as k,v as d,H as u,x as A,N as P,O as w,Q as O}from"./api-e3f31d76.js";import{c as R,a as b,b as I}from"./tool-565656f8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const T={class:"warper"},V={class:"app-content"},D=u("div",{class:"van-safe-area-bottom"},null,-1),C=E({__name:"App",setup(o){const r=window.matchMedia("(prefers-color-scheme: dark)").matches;return(a,n)=>{const e=w("router-view"),t=y,i=L;return d(),_(i,{theme:k(r)?"dark":"light"},{default:g(()=>[u("div",T,[u("div",V,[A(e)]),D]),a.$route.path!=="/"?(d(),_(t,{key:0,name:"wap-home",class:"backToHome",onClick:n[0]||(n[0]=p=>a.$router.push("/"))})):P("",!0)]),_:1},8,["theme"])}}});const N="modulepreload",M=function(o,r){return new URL(o,r).href},h={},s=function(r,a,n){if(!a||a.length===0)return r();const e=document.getElementsByTagName("link");return Promise.all(a.map(t=>{if(t=M(t,n),t in h)return;h[t]=!0;const i=t.endsWith(".css"),p=i?'[rel="stylesheet"]':"";if(!!n)for(let l=e.length-1;l>=0;l--){const m=e[l];if(m.href===t&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${p}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":N,i||(c.as="script",c.crossOrigin=""),c.href=t,document.head.appendChild(c),i)return new Promise((l,m)=>{c.addEventListener("load",l),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>r())},q=[{path:"/",name:"home",meta:{title:"前端集中营",home:!0},component:()=>s(()=>import("./other-06d8777c.js").then(o=>o.h),["./other-06d8777c.js","./api-e3f31d76.js","./api-3ed964a9.css"],import.meta.url)},{path:"/qa",name:"qa",meta:{title:"常见问题"},component:()=>s(()=>import("./other-06d8777c.js").then(o=>o.q),["./other-06d8777c.js","./api-e3f31d76.js","./api-3ed964a9.css"],import.meta.url)},{path:"/list",name:"list",meta:{title:"列表"},component:()=>s(()=>import("./tool-565656f8.js").then(o=>o.l),["./tool-565656f8.js","./api-e3f31d76.js","./api-3ed964a9.css","./tool-9b8edad0.css"],import.meta.url)},{path:"/counter",name:"counter",meta:{title:"计数器"},component:()=>s(()=>import("./tool-565656f8.js").then(o=>o.d),["./tool-565656f8.js","./api-e3f31d76.js","./api-3ed964a9.css","./tool-9b8edad0.css"],import.meta.url)},{path:"/weather",name:"weather",meta:{title:"天气预报"},component:()=>s(()=>import("./api-e3f31d76.js").then(o=>o.Y),["./api-e3f31d76.js","./api-3ed964a9.css"],import.meta.url)},{path:"/MacApps",name:"MacApps",meta:{title:"MacApps"},component:()=>s(()=>import("./api-e3f31d76.js").then(o=>o.Z),["./api-e3f31d76.js","./api-3ed964a9.css"],import.meta.url)},{path:"/books",name:"books",meta:{title:"books"},component:()=>s(()=>import("./bookList-e1de54e7.js"),["./bookList-e1de54e7.js","./api-e3f31d76.js","./api-3ed964a9.css"],import.meta.url)},{path:"/yLibrary",name:"yLibrary",meta:{title:"图书馆"},component:()=>s(()=>import("./yLibrary-0ce7df24.js"),["./yLibrary-0ce7df24.js","./api-e3f31d76.js","./api-3ed964a9.css","./tool-565656f8.js","./tool-9b8edad0.css","./yLibrary-faec78d2.css"],import.meta.url)},{path:"/url/:url/:title",name:"url",meta:{title:"组件库"},component:()=>s(()=>import("./tool-565656f8.js").then(o=>o.i),["./tool-565656f8.js","./api-e3f31d76.js","./api-3ed964a9.css","./tool-9b8edad0.css"],import.meta.url)}],f=R({history:b(),routes:[...q,{path:"/:pathMatch(.*)*",name:"NotFound",redirect:"/"}]});const B=I(),v=O(C);v.use(B);v.use(f).mount("#app");const $=window;f.beforeEach((o,r,a)=>{const{meta:{title:n},params:{title:e}}=o;(e||n)&&($.document.title=e||n),a()});