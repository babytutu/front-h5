import{j as c,v as s,l as i,q as v,y as _,z as p,A as y,F as d,E as b,x as P,C as k,K as f,M as u,r as m,B as g}from"./api-f9b91622.js";const h=c({__name:"T-group",props:{title:null,list:null},setup(t){return(n,a)=>{const r=k,o=b;return s(),i(o,{title:t.title},{default:v(()=>[(s(!0),_(d,null,p(t.list,e=>y(n.$slots,"default",{key:e.id,data:e},()=>[P(r,{title:e.title,label:e.label,value:e.value,"is-link":e.isLink||!!e.to,to:e.to},null,8,["title","label","value","is-link","to"])])),128))]),_:3},8,["title"])}}});f.defaults.headers.common["Content-Type"]="application/json;charset=utf-8";const q={timeout:60*100,withCredentials:!0},l=f.create(q);l.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)});l.interceptors.response.use(function(t){const{data:n,infocode:a="10000"}=t.data;return a!=="10000"?(u("查询失败"),Promise.reject(n)):n},function(t){return u("查询失败"),Promise.reject(t)});const j={list:{list:"data/list.json",qa:"data/qa.json"},weather:{city:"data/city.json"}},C=c({__name:"homePage",setup(t){const n=m([]);return g(async()=>{const a=await l.get(j.list.list);n.value=a.list}),(a,r)=>{const o=h;return s(),i(o,{title:"Home",list:n.value},null,8,["list"])}}}),x=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),T=c({__name:"qaPage",setup(t){const n=m([]);return g(async()=>{const a=await l.get(j.list.qa);n.value=a.data}),(a,r)=>{const o=h;return s(!0),_(d,null,p(n.value,e=>(s(),i(o,{key:e.id,title:e.title,list:e.list},null,8,["title","list"]))),128)}}}),S=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));export{x as h,S as q};
