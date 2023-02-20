import{e as st,r as z,m as he,w as ot,a as Le,i as pe,b as rt,t as wt,c as J,g as Ct,o as kt,n as ct,d as Ot,f as At,h as N,s as xt,u as X,j as oe,k as at,p as Pe,L as jt,P as $t,l as it,q as W,v as ue,x as q,y as Me,z as Lt,A as Mt,F as lt,C as It,B as Nt,I as Bt,D as Vt,S as Ht,E as zt,G as Tt,H as Dt,J as qt}from"./api-bdb4cd54.js";var Gt=!1;/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let ut;const ge=e=>ut=e,ft=Symbol();function Oe(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ae;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ae||(ae={}));function is(){const e=st(!0),t=e.run(()=>z({}));let n=[],s=[];const o=he({install(c){ge(o),o._a=c,c.provide(ft,o),c.config.globalProperties.$pinia=o,s.forEach(d=>n.push(d)),s=[]},use(c){return!this._a&&!Gt?s.push(c):n.push(c),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const dt=()=>{};function ze(e,t,n,s=dt){e.push(t);const o=()=>{const c=e.indexOf(t);c>-1&&(e.splice(c,1),s())};return!n&&Ct()&&kt(o),o}function Z(e,...t){e.slice().forEach(n=>{n(...t)})}function Ae(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,s)=>e.set(s,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],o=e[n];Oe(o)&&Oe(s)&&e.hasOwnProperty(n)&&!pe(s)&&!rt(s)?e[n]=Ae(o,s):e[n]=s}return e}const Ut=Symbol();function Kt(e){return!Oe(e)||!e.hasOwnProperty(Ut)}const{assign:F}=Object;function Ft(e){return!!(pe(e)&&e.effect)}function Qt(e,t,n,s){const{state:o,actions:c,getters:d}=t,h=n.state.value[e];let a;function f(){h||(n.state.value[e]=o?o():{});const r=At(n.state.value[e]);return F(r,c,Object.keys(d||{}).reduce((l,u)=>(l[u]=he(N(()=>{ge(n);const m=n._s.get(e);return d[u].call(m,m)})),l),{}))}return a=ht(e,f,t,n,s,!0),a.$reset=function(){const l=o?o():{};this.$patch(u=>{F(u,l)})},a}function ht(e,t,n={},s,o,c){let d;const h=F({actions:{}},n),a={deep:!0};let f,r,l=he([]),u=he([]),m;const y=s.state.value[e];!c&&!y&&(s.state.value[e]={}),z({});let S;function C(w){let O;f=r=!1,typeof w=="function"?(w(s.state.value[e]),O={type:ae.patchFunction,storeId:e,events:m}):(Ae(s.state.value[e],w),O={type:ae.patchObject,payload:w,storeId:e,events:m});const V=S=Symbol();ct().then(()=>{S===V&&(f=!0)}),r=!0,Z(l,O,s.state.value[e])}const R=dt;function E(){d.stop(),l=[],u=[],s._s.delete(e)}function $(w,O){return function(){ge(s);const V=Array.from(arguments),G=[],U=[];function Y(M){G.push(M)}function ye(M){U.push(M)}Z(u,{args:V,name:w,store:j,after:Y,onError:ye});let T;try{T=O.apply(this&&this.$id===e?this:j,V)}catch(M){throw Z(U,M),M}return T instanceof Promise?T.then(M=>(Z(G,M),M)).catch(M=>(Z(U,M),Promise.reject(M))):(Z(G,T),T)}}const B={_p:s,$id:e,$onAction:ze.bind(null,u),$patch:C,$reset:R,$subscribe(w,O={}){const V=ze(l,w,O.detached,()=>G()),G=d.run(()=>ot(()=>s.state.value[e],U=>{(O.flush==="sync"?r:f)&&w({storeId:e,type:ae.direct,events:m},U)},F({},a,O)));return V},$dispose:E},j=Le(B);s._s.set(e,j);const L=s._e.run(()=>(d=st(),d.run(()=>t())));for(const w in L){const O=L[w];if(pe(O)&&!Ft(O)||rt(O))c||(y&&Kt(O)&&(pe(O)?O.value=y[w]:Ae(O,y[w])),s.state.value[e][w]=O);else if(typeof O=="function"){const V=$(w,O);L[w]=V,h.actions[w]=O}}return F(j,L),F(wt(j),L),Object.defineProperty(j,"$state",{get:()=>s.state.value[e],set:w=>{C(O=>{F(O,w)})}}),s._p.forEach(w=>{F(j,d.run(()=>w({store:j,app:s._a,pinia:s,options:h})))}),y&&c&&n.hydrate&&n.hydrate(j.$state,y),f=!0,r=!0,j}function Wt(e,t,n){let s,o;const c=typeof t=="function";typeof e=="string"?(s=e,o=c?n:t):(o=e,s=e.id);function d(h,a){const f=Ot();return h=h||f&&J(ft,null),h&&ge(h),h=ut,h._s.has(s)||(c?ht(s,t,o,h):Qt(s,o,h)),h._s.get(s)}return d.$id=s,d}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const te=typeof window<"u";function Yt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const P=Object.assign;function we(e,t){const n={};for(const s in t){const o=t[s];n[s]=H(o)?o.map(e):e(o)}return n}const ie=()=>{},H=Array.isArray,Xt=/\/$/,Jt=e=>e.replace(Xt,"");function Ce(e,t,n="/"){let s,o={},c="",d="";const h=t.indexOf("#");let a=t.indexOf("?");return h<a&&h>=0&&(a=-1),a>-1&&(s=t.slice(0,a),c=t.slice(a+1,h>-1?h:t.length),o=e(c)),h>-1&&(s=s||t.slice(0,h),d=t.slice(h,t.length)),s=nn(s??t,n),{fullPath:s+(c&&"?")+c+d,path:s,query:o,hash:d}}function Zt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Te(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function en(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&ne(t.matched[s],n.matched[o])&&pt(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ne(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function pt(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!tn(e[n],t[n]))return!1;return!0}function tn(e,t){return H(e)?De(e,t):H(t)?De(t,e):e===t}function De(e,t){return H(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function nn(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let o=n.length-1,c,d;for(c=0;c<s.length;c++)if(d=s[c],d!==".")if(d==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(c-(c===s.length?1:0)).join("/")}var fe;(function(e){e.pop="pop",e.push="push"})(fe||(fe={}));var le;(function(e){e.back="back",e.forward="forward",e.unknown=""})(le||(le={}));function sn(e){if(!e)if(te){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Jt(e)}const on=/^[^#]+#/;function rn(e,t){return e.replace(on,"#")+t}function cn(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const ve=()=>({left:window.pageXOffset,top:window.pageYOffset});function an(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=cn(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function qe(e,t){return(history.state?history.state.position-t:-1)+e}const xe=new Map;function ln(e,t){xe.set(e,t)}function un(e){const t=xe.get(e);return xe.delete(e),t}let fn=()=>location.protocol+"//"+location.host;function mt(e,t){const{pathname:n,search:s,hash:o}=t,c=e.indexOf("#");if(c>-1){let h=o.includes(e.slice(c))?e.slice(c).length:1,a=o.slice(h);return a[0]!=="/"&&(a="/"+a),Te(a,"")}return Te(n,e)+s+o}function dn(e,t,n,s){let o=[],c=[],d=null;const h=({state:u})=>{const m=mt(e,location),y=n.value,S=t.value;let C=0;if(u){if(n.value=m,t.value=u,d&&d===y){d=null;return}C=S?u.position-S.position:0}else s(m);o.forEach(R=>{R(n.value,y,{delta:C,type:fe.pop,direction:C?C>0?le.forward:le.back:le.unknown})})};function a(){d=n.value}function f(u){o.push(u);const m=()=>{const y=o.indexOf(u);y>-1&&o.splice(y,1)};return c.push(m),m}function r(){const{history:u}=window;u.state&&u.replaceState(P({},u.state,{scroll:ve()}),"")}function l(){for(const u of c)u();c=[],window.removeEventListener("popstate",h),window.removeEventListener("beforeunload",r)}return window.addEventListener("popstate",h),window.addEventListener("beforeunload",r),{pauseListeners:a,listen:f,destroy:l}}function Ge(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?ve():null}}function hn(e){const{history:t,location:n}=window,s={value:mt(e,n)},o={value:t.state};o.value||c(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function c(a,f,r){const l=e.indexOf("#"),u=l>-1?(n.host&&document.querySelector("base")?e:e.slice(l))+a:fn()+e+a;try{t[r?"replaceState":"pushState"](f,"",u),o.value=f}catch(m){console.error(m),n[r?"replace":"assign"](u)}}function d(a,f){const r=P({},t.state,Ge(o.value.back,a,o.value.forward,!0),f,{position:o.value.position});c(a,r,!0),s.value=a}function h(a,f){const r=P({},o.value,t.state,{forward:a,scroll:ve()});c(r.current,r,!0);const l=P({},Ge(s.value,a,null),{position:r.position+1},f);c(a,l,!1),s.value=a}return{location:s,state:o,push:h,replace:d}}function pn(e){e=sn(e);const t=hn(e),n=dn(e,t.state,t.location,t.replace);function s(c,d=!0){d||n.pauseListeners(),history.go(c)}const o=P({location:"",base:e,go:s,createHref:rn.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function ls(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),pn(e)}function mn(e){return typeof e=="string"||e&&typeof e=="object"}function gt(e){return typeof e=="string"||typeof e=="symbol"}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vt=Symbol("");var Ue;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ue||(Ue={}));function se(e,t){return P(new Error,{type:e,[vt]:!0},t)}function D(e,t){return e instanceof Error&&vt in e&&(t==null||!!(e.type&t))}const Ke="[^/]+?",gn={sensitive:!1,strict:!1,start:!0,end:!0},vn=/[.+*?^${}()[\]/\\]/g;function yn(e,t){const n=P({},gn,t),s=[];let o=n.start?"^":"";const c=[];for(const f of e){const r=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let l=0;l<f.length;l++){const u=f[l];let m=40+(n.sensitive?.25:0);if(u.type===0)l||(o+="/"),o+=u.value.replace(vn,"\\$&"),m+=40;else if(u.type===1){const{value:y,repeatable:S,optional:C,regexp:R}=u;c.push({name:y,repeatable:S,optional:C});const E=R||Ke;if(E!==Ke){m+=10;try{new RegExp(`(${E})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${y}" (${E}): `+B.message)}}let $=S?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;l||($=C&&f.length<2?`(?:/${$})`:"/"+$),C&&($+="?"),o+=$,m+=20,C&&(m+=-8),S&&(m+=-20),E===".*"&&(m+=-50)}r.push(m)}s.push(r)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const d=new RegExp(o,n.sensitive?"":"i");function h(f){const r=f.match(d),l={};if(!r)return null;for(let u=1;u<r.length;u++){const m=r[u]||"",y=c[u-1];l[y.name]=m&&y.repeatable?m.split("/"):m}return l}function a(f){let r="",l=!1;for(const u of e){(!l||!r.endsWith("/"))&&(r+="/"),l=!1;for(const m of u)if(m.type===0)r+=m.value;else if(m.type===1){const{value:y,repeatable:S,optional:C}=m,R=y in f?f[y]:"";if(H(R)&&!S)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const E=H(R)?R.join("/"):R;if(!E)if(C)u.length<2&&(r.endsWith("/")?r=r.slice(0,-1):l=!0);else throw new Error(`Missing required param "${y}"`);r+=E}}return r||"/"}return{re:d,score:s,keys:c,parse:h,stringify:a}}function _n(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Rn(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const c=_n(s[n],o[n]);if(c)return c;n++}if(Math.abs(o.length-s.length)===1){if(Fe(s))return 1;if(Fe(o))return-1}return o.length-s.length}function Fe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const En={type:0,value:""},bn=/[a-zA-Z0-9_]/;function Sn(e){if(!e)return[[]];if(e==="/")return[[En]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=0,s=n;const o=[];let c;function d(){c&&o.push(c),c=[]}let h=0,a,f="",r="";function l(){f&&(n===0?c.push({type:0,value:f}):n===1||n===2||n===3?(c.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:f,regexp:r,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),f="")}function u(){f+=a}for(;h<e.length;){if(a=e[h++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(f&&l(),d()):a===":"?(l(),n=1):u();break;case 4:u(),n=s;break;case 1:a==="("?n=2:bn.test(a)?u():(l(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&h--);break;case 2:a===")"?r[r.length-1]=="\\"?r=r.slice(0,-1)+a:n=3:r+=a;break;case 3:l(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&h--,r="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),l(),d(),o}function Pn(e,t,n){const s=yn(Sn(e.path),n),o=P(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function wn(e,t){const n=[],s=new Map;t=Ye({strict:!1,end:!0,sensitive:!1},t);function o(r){return s.get(r)}function c(r,l,u){const m=!u,y=Cn(r);y.aliasOf=u&&u.record;const S=Ye(t,r),C=[y];if("alias"in r){const $=typeof r.alias=="string"?[r.alias]:r.alias;for(const B of $)C.push(P({},y,{components:u?u.record.components:y.components,path:B,aliasOf:u?u.record:y}))}let R,E;for(const $ of C){const{path:B}=$;if(l&&B[0]!=="/"){const j=l.record.path,L=j[j.length-1]==="/"?"":"/";$.path=l.record.path+(B&&L+B)}if(R=Pn($,l,S),u?u.alias.push(R):(E=E||R,E!==R&&E.alias.push(R),m&&r.name&&!We(R)&&d(r.name)),y.children){const j=y.children;for(let L=0;L<j.length;L++)c(j[L],R,u&&u.children[L])}u=u||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&a(R)}return E?()=>{d(E)}:ie}function d(r){if(gt(r)){const l=s.get(r);l&&(s.delete(r),n.splice(n.indexOf(l),1),l.children.forEach(d),l.alias.forEach(d))}else{const l=n.indexOf(r);l>-1&&(n.splice(l,1),r.record.name&&s.delete(r.record.name),r.children.forEach(d),r.alias.forEach(d))}}function h(){return n}function a(r){let l=0;for(;l<n.length&&Rn(r,n[l])>=0&&(r.record.path!==n[l].record.path||!yt(r,n[l]));)l++;n.splice(l,0,r),r.record.name&&!We(r)&&s.set(r.record.name,r)}function f(r,l){let u,m={},y,S;if("name"in r&&r.name){if(u=s.get(r.name),!u)throw se(1,{location:r});S=u.record.name,m=P(Qe(l.params,u.keys.filter(E=>!E.optional).map(E=>E.name)),r.params&&Qe(r.params,u.keys.map(E=>E.name))),y=u.stringify(m)}else if("path"in r)y=r.path,u=n.find(E=>E.re.test(y)),u&&(m=u.parse(y),S=u.record.name);else{if(u=l.name?s.get(l.name):n.find(E=>E.re.test(l.path)),!u)throw se(1,{location:r,currentLocation:l});S=u.record.name,m=P({},l.params,r.params),y=u.stringify(m)}const C=[];let R=u;for(;R;)C.unshift(R.record),R=R.parent;return{name:S,path:y,params:m,matched:C,meta:On(C)}}return e.forEach(r=>c(r)),{addRoute:c,resolve:f,removeRoute:d,getRoutes:h,getRecordMatcher:o}}function Qe(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Cn(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:kn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function kn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function We(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function On(e){return e.reduce((t,n)=>P(t,n.meta),{})}function Ye(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function yt(e,t){return t.children.some(n=>n===e||yt(e,n))}const _t=/#/g,An=/&/g,xn=/\//g,jn=/=/g,$n=/\?/g,Rt=/\+/g,Ln=/%5B/g,Mn=/%5D/g,Et=/%5E/g,In=/%60/g,bt=/%7B/g,Nn=/%7C/g,St=/%7D/g,Bn=/%20/g;function Ie(e){return encodeURI(""+e).replace(Nn,"|").replace(Ln,"[").replace(Mn,"]")}function Vn(e){return Ie(e).replace(bt,"{").replace(St,"}").replace(Et,"^")}function je(e){return Ie(e).replace(Rt,"%2B").replace(Bn,"+").replace(_t,"%23").replace(An,"%26").replace(In,"`").replace(bt,"{").replace(St,"}").replace(Et,"^")}function Hn(e){return je(e).replace(jn,"%3D")}function zn(e){return Ie(e).replace(_t,"%23").replace($n,"%3F")}function Tn(e){return e==null?"":zn(e).replace(xn,"%2F")}function me(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Dn(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const c=s[o].replace(Rt," "),d=c.indexOf("="),h=me(d<0?c:c.slice(0,d)),a=d<0?null:me(c.slice(d+1));if(h in t){let f=t[h];H(f)||(f=t[h]=[f]),f.push(a)}else t[h]=a}return t}function Xe(e){let t="";for(let n in e){const s=e[n];if(n=Hn(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(H(s)?s.map(c=>c&&je(c)):[s&&je(s)]).forEach(c=>{c!==void 0&&(t+=(t.length?"&":"")+n,c!=null&&(t+="="+c))})}return t}function qn(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=H(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const Gn=Symbol(""),Je=Symbol(""),Ne=Symbol(""),Be=Symbol(""),$e=Symbol("");function ce(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Q(e,t,n,s,o){const c=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((d,h)=>{const a=l=>{l===!1?h(se(4,{from:n,to:t})):l instanceof Error?h(l):mn(l)?h(se(2,{from:t,to:l})):(c&&s.enterCallbacks[o]===c&&typeof l=="function"&&c.push(l),d())},f=e.call(s&&s.instances[o],t,n,a);let r=Promise.resolve(f);e.length<3&&(r=r.then(a)),r.catch(l=>h(l))})}function ke(e,t,n,s){const o=[];for(const c of e)for(const d in c.components){let h=c.components[d];if(!(t!=="beforeRouteEnter"&&!c.instances[d]))if(Un(h)){const f=(h.__vccOpts||h)[t];f&&o.push(Q(f,n,s,c,d))}else{let a=h();o.push(()=>a.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${c.path}"`));const r=Yt(f)?f.default:f;c.components[d]=r;const u=(r.__vccOpts||r)[t];return u&&Q(u,n,s,c,d)()}))}}return o}function Un(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ze(e){const t=J(Ne),n=J(Be),s=N(()=>t.resolve(X(e.to))),o=N(()=>{const{matched:a}=s.value,{length:f}=a,r=a[f-1],l=n.matched;if(!r||!l.length)return-1;const u=l.findIndex(ne.bind(null,r));if(u>-1)return u;const m=et(a[f-2]);return f>1&&et(r)===m&&l[l.length-1].path!==m?l.findIndex(ne.bind(null,a[f-2])):u}),c=N(()=>o.value>-1&&Wn(n.params,s.value.params)),d=N(()=>o.value>-1&&o.value===n.matched.length-1&&pt(n.params,s.value.params));function h(a={}){return Qn(a)?t[X(e.replace)?"replace":"push"](X(e.to)).catch(ie):Promise.resolve()}return{route:s,href:N(()=>s.value.href),isActive:c,isExactActive:d,navigate:h}}const Kn=oe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ze,setup(e,{slots:t}){const n=Le(Ze(e)),{options:s}=J(Ne),o=N(()=>({[tt(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[tt(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const c=t.default&&t.default(n);return e.custom?c:at("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},c)}}}),Fn=Kn;function Qn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Wn(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!H(o)||o.length!==s.length||s.some((c,d)=>c!==o[d]))return!1}return!0}function et(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const tt=(e,t,n)=>e??t??n,Yn=oe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=J($e),o=N(()=>e.route||s.value),c=J(Je,0),d=N(()=>{let f=X(c);const{matched:r}=o.value;let l;for(;(l=r[f])&&!l.components;)f++;return f}),h=N(()=>o.value.matched[d.value]);Pe(Je,N(()=>d.value+1)),Pe(Gn,h),Pe($e,o);const a=z();return ot(()=>[a.value,h.value,e.name],([f,r,l],[u,m,y])=>{r&&(r.instances[l]=f,m&&m!==r&&f&&f===u&&(r.leaveGuards.size||(r.leaveGuards=m.leaveGuards),r.updateGuards.size||(r.updateGuards=m.updateGuards))),f&&r&&(!m||!ne(r,m)||!u)&&(r.enterCallbacks[l]||[]).forEach(S=>S(f))},{flush:"post"}),()=>{const f=o.value,r=e.name,l=h.value,u=l&&l.components[r];if(!u)return nt(n.default,{Component:u,route:f});const m=l.props[r],y=m?m===!0?f.params:typeof m=="function"?m(f):m:null,C=at(u,P({},y,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(l.instances[r]=null)},ref:a}));return nt(n.default,{Component:C,route:f})||C}}});function nt(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Xn=Yn;function us(e){const t=wn(e.routes,e),n=e.parseQuery||Dn,s=e.stringifyQuery||Xe,o=e.history,c=ce(),d=ce(),h=ce(),a=xt(K);let f=K;te&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const r=we.bind(null,i=>""+i),l=we.bind(null,Tn),u=we.bind(null,me);function m(i,g){let p,v;return gt(i)?(p=t.getRecordMatcher(i),v=g):v=i,t.addRoute(v,p)}function y(i){const g=t.getRecordMatcher(i);g&&t.removeRoute(g)}function S(){return t.getRoutes().map(i=>i.record)}function C(i){return!!t.getRecordMatcher(i)}function R(i,g){if(g=P({},g||a.value),typeof i=="string"){const _=Ce(n,i,g.path),x=t.resolve({path:_.path},g),re=o.createHref(_.fullPath);return P(_,x,{params:u(x.params),hash:me(_.hash),redirectedFrom:void 0,href:re})}let p;if("path"in i)p=P({},i,{path:Ce(n,i.path,g.path).path});else{const _=P({},i.params);for(const x in _)_[x]==null&&delete _[x];p=P({},i,{params:l(i.params)}),g.params=l(g.params)}const v=t.resolve(p,g),k=i.hash||"";v.params=r(u(v.params));const A=Zt(s,P({},i,{hash:Vn(k),path:v.path})),b=o.createHref(A);return P({fullPath:A,hash:k,query:s===Xe?qn(i.query):i.query||{}},v,{redirectedFrom:void 0,href:b})}function E(i){return typeof i=="string"?Ce(n,i,a.value.path):P({},i)}function $(i,g){if(f!==i)return se(8,{from:g,to:i})}function B(i){return w(i)}function j(i){return B(P(E(i),{replace:!0}))}function L(i){const g=i.matched[i.matched.length-1];if(g&&g.redirect){const{redirect:p}=g;let v=typeof p=="function"?p(i):p;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=E(v):{path:v},v.params={}),P({query:i.query,hash:i.hash,params:"path"in v?{}:i.params},v)}}function w(i,g){const p=f=R(i),v=a.value,k=i.state,A=i.force,b=i.replace===!0,_=L(p);if(_)return w(P(E(_),{state:typeof _=="object"?P({},k,_.state):k,force:A,replace:b}),g||p);const x=p;x.redirectedFrom=g;let re;return!A&&en(s,v,p)&&(re=se(16,{to:x,from:v}),Ve(v,v,!0,!1)),(re?Promise.resolve(re):V(x,v)).catch(I=>D(I)?D(I,2)?I:Re(I):_e(I,x,v)).then(I=>{if(I){if(D(I,2))return w(P({replace:b},E(I.to),{state:typeof I.to=="object"?P({},k,I.to.state):k,force:A}),g||x)}else I=U(x,v,!0,b,k);return G(x,v,I),I})}function O(i,g){const p=$(i,g);return p?Promise.reject(p):Promise.resolve()}function V(i,g){let p;const[v,k,A]=Jn(i,g);p=ke(v.reverse(),"beforeRouteLeave",i,g);for(const _ of v)_.leaveGuards.forEach(x=>{p.push(Q(x,i,g))});const b=O.bind(null,i,g);return p.push(b),ee(p).then(()=>{p=[];for(const _ of c.list())p.push(Q(_,i,g));return p.push(b),ee(p)}).then(()=>{p=ke(k,"beforeRouteUpdate",i,g);for(const _ of k)_.updateGuards.forEach(x=>{p.push(Q(x,i,g))});return p.push(b),ee(p)}).then(()=>{p=[];for(const _ of i.matched)if(_.beforeEnter&&!g.matched.includes(_))if(H(_.beforeEnter))for(const x of _.beforeEnter)p.push(Q(x,i,g));else p.push(Q(_.beforeEnter,i,g));return p.push(b),ee(p)}).then(()=>(i.matched.forEach(_=>_.enterCallbacks={}),p=ke(A,"beforeRouteEnter",i,g),p.push(b),ee(p))).then(()=>{p=[];for(const _ of d.list())p.push(Q(_,i,g));return p.push(b),ee(p)}).catch(_=>D(_,8)?_:Promise.reject(_))}function G(i,g,p){for(const v of h.list())v(i,g,p)}function U(i,g,p,v,k){const A=$(i,g);if(A)return A;const b=g===K,_=te?history.state:{};p&&(v||b?o.replace(i.fullPath,P({scroll:b&&_&&_.scroll},k)):o.push(i.fullPath,k)),a.value=i,Ve(i,g,p,b),Re()}let Y;function ye(){Y||(Y=o.listen((i,g,p)=>{if(!He.listening)return;const v=R(i),k=L(v);if(k){w(P(k,{replace:!0}),v).catch(ie);return}f=v;const A=a.value;te&&ln(qe(A.fullPath,p.delta),ve()),V(v,A).catch(b=>D(b,12)?b:D(b,2)?(w(b.to,v).then(_=>{D(_,20)&&!p.delta&&p.type===fe.pop&&o.go(-1,!1)}).catch(ie),Promise.reject()):(p.delta&&o.go(-p.delta,!1),_e(b,v,A))).then(b=>{b=b||U(v,A,!1),b&&(p.delta&&!D(b,8)?o.go(-p.delta,!1):p.type===fe.pop&&D(b,20)&&o.go(-1,!1)),G(v,A,b)}).catch(ie)}))}let T=ce(),M=ce(),de;function _e(i,g,p){Re(i);const v=M.list();return v.length?v.forEach(k=>k(i,g,p)):console.error(i),Promise.reject(i)}function Pt(){return de&&a.value!==K?Promise.resolve():new Promise((i,g)=>{T.add([i,g])})}function Re(i){return de||(de=!i,ye(),T.list().forEach(([g,p])=>i?p(i):g()),T.reset()),i}function Ve(i,g,p,v){const{scrollBehavior:k}=e;if(!te||!k)return Promise.resolve();const A=!p&&un(qe(i.fullPath,0))||(v||!p)&&history.state&&history.state.scroll||null;return ct().then(()=>k(i,g,A)).then(b=>b&&an(b)).catch(b=>_e(b,i,g))}const Ee=i=>o.go(i);let be;const Se=new Set,He={currentRoute:a,listening:!0,addRoute:m,removeRoute:y,hasRoute:C,getRoutes:S,resolve:R,options:e,push:B,replace:j,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:c.add,beforeResolve:d.add,afterEach:h.add,onError:M.add,isReady:Pt,install(i){const g=this;i.component("RouterLink",Fn),i.component("RouterView",Xn),i.config.globalProperties.$router=g,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>X(a)}),te&&!be&&a.value===K&&(be=!0,B(o.location).catch(k=>{}));const p={};for(const k in K)p[k]=N(()=>a.value[k]);i.provide(Ne,g),i.provide(Be,Le(p)),i.provide($e,a);const v=i.unmount;Se.add(i),i.unmount=function(){Se.delete(i),Se.size<1&&(f=K,Y&&Y(),Y=null,a.value=K,be=!1,de=!1),v()}}};return He}function ee(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Jn(e,t){const n=[],s=[],o=[],c=Math.max(t.matched.length,e.matched.length);for(let d=0;d<c;d++){const h=t.matched[d];h&&(e.matched.find(f=>ne(f,h))?s.push(h):n.push(h));const a=e.matched[d];a&&(t.matched.find(f=>ne(f,a))||o.push(a))}return[n,s,o]}function Zn(){return J(Be)}const es=oe({__name:"T-list",emits:["getData"],setup(e,{expose:t,emit:n}){const s=z(!1),o=z(!1),c=z(!1),d=z([]),h=z(1);function a(l,u){d.value=d.value.concat(l),o.value=u,c.value=!1,s.value=!1,u||h.value++}function f(){s.value=!0,c.value&&(d.value=[]),n("getData",h.value)}function r(){c.value=!0,d.value=[],h.value=1,f()}return t({renderList:a}),(l,u)=>{const m=jt,y=$t;return ue(),it(y,{modelValue:c.value,"onUpdate:modelValue":u[1]||(u[1]=S=>c.value=S),onRefresh:r},{default:W(()=>[q(m,{loading:s.value,"onUpdate:loading":u[0]||(u[0]=S=>s.value=S),finished:o.value,"finished-text":"没有更多了",onLoad:f},{default:W(()=>[(ue(!0),Me(lt,null,Lt(d.value,S=>Mt(l.$slots,"default",{key:S.id,data:S})),128))]),_:3},8,["loading","finished"])]),_:3},8,["modelValue"])}}}),ts=oe({__name:"listPage",setup(e){const n=z(null);function s(c){setTimeout(()=>{var a;const{arr:d,length:h}=o(c);(a=n.value)==null||a.renderList(d,h<30)},500)}function o(c){const d=[];if(c<5)for(let h=1;h<31;h++){const a=(c-1)*30+h;d.push({title:`序号 ${a}`,value:`页码 ${c}`,id:a})}return{arr:d,length:d.length}}return(c,d)=>{const h=It;return ue(),it(es,{ref_key:"list",ref:n,onGetData:s},{default:W(a=>[q(h,{title:a.data.title,value:a.data.value,label:a.data.label},null,8,["title","value","label"])]),_:1},512)}}}),fs=Object.freeze(Object.defineProperty({__proto__:null,default:ts},Symbol.toStringTag,{value:"Module"}));const ns=Wt("counter",{state:()=>({count:1}),actions:{changeCount(e){this.count=e},add(){this.count++}}}),ss={class:"bottom-btn"},os=oe({__name:"counterPage",setup(e){const t=z(0),n=ns(),s=N(()=>n.count);function o(){n.$reset(),t.value=n.count}function c(){n.changeCount(t.value)}function d(){n.add()}return Nt(()=>{t.value=n.count}),(h,a)=>{const f=Bt,r=Vt,l=Ht,u=zt,m=Tt;return ue(),Me(lt,null,[q(u,{title:"状态管理",inset:""},{default:W(()=>[q(r,{center:"","model-value":X(s),label:"计数器",readonly:""},{button:W(()=>[q(f,{name:"plus",onClick:d})]),_:1},8,["model-value"]),q(r,{name:"stepper",label:"步进器"},{input:W(()=>[q(l,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=y=>t.value=y),modelModifiers:{number:!0},min:"0",max:"100"},null,8,["modelValue"])]),button:W(()=>[q(f,{name:"success",onClick:c})]),_:1})]),_:1}),Dt("div",ss,[q(m,{round:"",block:"",type:"primary","native-type":"submit",onClick:o},{default:W(()=>[qt(" 重置 ")]),_:1})])],64)}}});const ds=Object.freeze(Object.defineProperty({__proto__:null,default:os},Symbol.toStringTag,{value:"Module"})),rs=["src"],cs=oe({__name:"iframePage",setup(e){const t=Zn(),n=N(()=>t.params.url);return(s,o)=>(ue(),Me("iframe",{src:X(n),frameborder:"0",width:"100%",height:"100%"},null,8,rs))}}),hs=Object.freeze(Object.defineProperty({__proto__:null,default:cs},Symbol.toStringTag,{value:"Module"}));export{ls as a,is as b,us as c,ds as d,hs as i,fs as l};
