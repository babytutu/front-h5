import{N as v,d as b,r as C,a as g,f as h,s as x,h as e,u as n,O as y,F as V,y as k,P as B,I as F,_ as N}from"./main-2a870cc2.js";import"./index-4fb87c62.js";import{B as P,S}from"./index-b19cc401.js";import{C as I}from"./index-43d3dc5c.js";import{F as M}from"./index-d97cc732.js";import"./use-expose-d9e11254.js";const w=v("counter",{state:()=>({count:1}),actions:{changeCount(a){this.count=a},add(){this.count++}}}),E={class:"bottom-btn"},G=b({__name:"counterPage",setup(a){const o=C(0),t=w(),l=g(()=>t.count);function r(){t.$reset(),o.value=t.count}function _(){t.changeCount(o.value)}function d(){t.add()}return h(()=>{o.value=t.count}),(O,s)=>{const c=F,u=M,i=S,m=I,p=P;return k(),x(V,null,[e(m,{title:"状态管理",inset:""},{default:n(()=>[e(u,{center:"","model-value":l.value,label:"计数器",readonly:""},{button:n(()=>[e(c,{name:"plus",onClick:d})]),_:1},8,["model-value"]),e(u,{name:"stepper",label:"步进器"},{input:n(()=>[e(i,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=f=>o.value=f),modelModifiers:{number:!0},min:"0",max:"100"},null,8,["modelValue"])]),button:n(()=>[e(c,{name:"success",onClick:_})]),_:1})]),_:1}),y("div",E,[e(p,{round:"",block:"",type:"primary","native-type":"submit",onClick:r},{default:n(()=>[B(" 重置 ")]),_:1})])],64)}}});const A=N(G,[["__scopeId","data-v-7152bc5d"]]);export{A as default};
