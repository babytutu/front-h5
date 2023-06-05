import{e as i,r as u,m as l,d as p,u as f,c as _,a as m,o as h}from"./api-6a119f2e.js";var d=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const b=Symbol();var c;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(c||(c={}));function S(){const e=i(!0),s=e.run(()=>u({}));let a=[],r=[];const o=l({install(t){o._a=t,t.provide(b,o),t.config.globalProperties.$pinia=o,r.forEach(n=>a.push(n)),r=[]},use(t){return!this._a&&!d?r.push(t):a.push(t),this},_p:a,_a:null,_e:e,_s:new Map,state:s});return o}const g=["src"],v=p({__name:"iframePage",setup(e){const s=f(),a=_(()=>s.params.url);return(r,o)=>(h(),m("iframe",{src:a.value,frameborder:"0",width:"100%",height:"100%"},null,8,g))}}),j=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));export{S as c,j as i};
