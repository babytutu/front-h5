import{r as p,b as ee,f as ne,L as te,H as G,g as ae}from"./index-4fb87c62.js";import{c as J,Q as ie,m as x,j as B,d as X,h as c,I as le,L as R,q as Y,B as y,t as T,r as H,a as N,b as W,a8 as oe,w as $,a7 as se,k as q,a3 as A,p as j,ac as K,i as Q,n as ue,ad as ce,ae as de}from"./main-2a870cc2.js";import{c as re}from"./use-expose-d9e11254.js";const[me,S]=J("button"),ge=ie({},p,{tag:x("button"),text:String,icon:String,type:x("default"),size:x("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:x("button"),loadingSize:B,loadingText:String,loadingType:String,iconPosition:x("left")});var fe=X({name:me,props:ge,emits:["click"],setup(e,{emit:s,slots:l}){const z=ee(),d=()=>l.loading?l.loading():c(te,{size:e.loadingSize,type:e.loadingType,class:S("loading")},null),v=()=>{if(e.loading)return d();if(l.icon)return c("div",{class:S("icon")},[l.icon()]);if(e.icon)return c(le,{name:e.icon,class:S("icon"),classPrefix:e.iconPrefix},null)},t=()=>{let a;if(e.loading?a=e.loadingText:a=l.default?l.default():e.text,a)return c("span",{class:S("text")},[a])},f=()=>{const{color:a,plain:m}=e;if(a){const r={color:m?a:"white"};return m||(r.background=a),a.includes("gradient")?r.border=0:r.borderColor=a,r}},b=a=>{e.loading?R(a):e.disabled||(s("click",a),z())};return()=>{const{tag:a,type:m,size:r,block:I,round:P,plain:M,square:D,loading:F,disabled:h,hairline:g,nativeType:w,iconPosition:V}=e,k=[S([m,r,{plain:M,block:I,round:P,square:D,loading:F,disabled:h,hairline:g}]),{[ne]:g}];return c(a,{type:w,class:k,style:f(),disabled:h,onClick:b},{default:()=>[c("div",{class:S("content")},[V==="left"&&v(),t(),V==="right"&&v()])]})}}});const Te=Y(fe),[be,E]=J("stepper"),he=200,_=(e,s)=>String(e)===String(s),Se={min:y(1),max:y(1/0),name:y(""),step:y(1),theme:String,integer:Boolean,disabled:Boolean,showPlus:T,showMinus:T,showInput:T,longPress:T,autoFixed:T,allowEmpty:Boolean,modelValue:B,inputWidth:B,buttonSize:B,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,beforeChange:Function,defaultValue:y(1),decimalLength:B};var ve=X({name:be,props:Se,emits:["plus","blur","minus","focus","change","overlimit","update:modelValue"],setup(e,{emit:s}){const l=(n,i=!0)=>{const{min:o,max:C,allowEmpty:u,decimalLength:L}=e;return u&&n===""||(n=K(String(n),!e.integer),n=n===""?0:+n,n=Number.isNaN(n)?+o:n,n=i?Math.max(Math.min(+C,n),+o):n,Q(L)&&(n=n.toFixed(+L))),n},z=()=>{var n;const i=(n=e.modelValue)!=null?n:e.defaultValue,o=l(i);return _(o,e.modelValue)||s("update:modelValue",o),o};let d;const v=H(),t=H(z()),f=N(()=>e.disabled||e.disableMinus||+t.value<=+e.min),b=N(()=>e.disabled||e.disablePlus||+t.value>=+e.max),a=N(()=>({width:W(e.inputWidth),height:W(e.buttonSize)})),m=N(()=>oe(e.buttonSize)),r=()=>{const n=l(t.value);_(n,t.value)||(t.value=n)},I=n=>{e.beforeChange?re(e.beforeChange,{args:[n],done(){t.value=n}}):t.value=n},P=()=>{if(d==="plus"&&b.value||d==="minus"&&f.value){s("overlimit",d);return}const n=d==="minus"?-e.step:+e.step,i=l(de(+t.value,n));I(i),s(d)},M=n=>{const i=n.target,{value:o}=i,{decimalLength:C}=e;let u=K(String(o),!e.integer);if(Q(C)&&u.includes(".")){const U=u.split(".");u=`${U[0]}.${U[1].slice(0,+C)}`}e.beforeChange?i.value=String(t.value):_(o,u)||(i.value=u);const L=u===String(+u);I(L?+u:u)},D=n=>{var i;e.disableInput?(i=v.value)==null||i.blur():s("focus",n)},F=n=>{const i=n.target,o=l(i.value,e.autoFixed);i.value=String(o),t.value=o,ue(()=>{s("blur",n),ce()})};let h,g;const w=()=>{g=setTimeout(()=>{P(),w()},he)},V=()=>{e.longPress&&(h=!1,clearTimeout(g),g=setTimeout(()=>{h=!0,P(),w()},ae))},k=n=>{e.longPress&&(clearTimeout(g),h&&R(n))},Z=n=>{e.disableInput&&R(n)},O=n=>({onClick:i=>{R(i),d=n,P()},onTouchstartPassive:()=>{d=n,V()},onTouchend:k,onTouchcancel:k});return $(()=>[e.max,e.min,e.integer,e.decimalLength],r),$(()=>e.modelValue,n=>{_(n,t.value)||(t.value=l(n))}),$(t,n=>{s("update:modelValue",n),s("change",n,{name:e.name})}),se(()=>e.modelValue),()=>c("div",{role:"group",class:E([e.theme])},[q(c("button",j({type:"button",style:m.value,class:[E("minus",{disabled:f.value}),{[G]:!f.value}],"aria-disabled":f.value||void 0},O("minus")),null),[[A,e.showMinus]]),q(c("input",{ref:v,type:e.integer?"tel":"text",role:"spinbutton",class:E("input"),value:t.value,style:a.value,disabled:e.disabled,readonly:e.disableInput,inputmode:e.integer?"numeric":"decimal",placeholder:e.placeholder,"aria-valuemax":e.max,"aria-valuemin":e.min,"aria-valuenow":t.value,onBlur:F,onInput:M,onFocus:D,onMousedown:Z},null),[[A,e.showInput]]),q(c("button",j({type:"button",style:m.value,class:[E("plus",{disabled:b.value}),{[G]:!b.value}],"aria-disabled":b.value||void 0},O("plus")),null),[[A,e.showPlus]])])}});const Be=Y(ve);export{Te as B,Be as S};
