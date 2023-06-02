import{d as O,r as m,c as A,a as h,h as a,w as o,F as C,p as g,f as I,b as $,s as z,$ as U,k as F,l as N,q as M,v as j,i as H,P as J,o as i,n as _,t as s,x as D,y as E,z as K,B as Q,S as W,A as X,D as Y,_ as Z}from"./api-370e1c7d.js";import"./tool-12a4cb0a.js";const ee=B=>{function b(r,c,f){if(r.createTextRange){const d=r.createTextRange();d.collapse(!0),d.moveStart("character",c),d.moveEnd("character",f-c),d.select()}else r.setSelectionRange(c,f),r.focus()}const n=B.toString();let l=document.querySelector("#copy-input");l||(l=document.createElement("input"),l.id="copy-input",l.readOnly="readOnly",l.style.position="absolute",l.style.left="-1000px",l.style.zIndex="-1000",document.body.appendChild(l)),l.value=n,b(l,0,n.length);let u=!1;return document.execCommand("copy")&&(document.execCommand("copy"),u=!0),l.blur(),u},te={key:0},ae={key:1},oe={key:2},le=["src"],ne=O({__name:"yLibrary",setup(B){const b=m([]),n=m(1),l=m("福尔摩斯"),u=m(0),r=A(()=>Math.ceil(u.value/20)),c=m(["epub"]),f=m([]),d=m(!1),T=m(""),G=()=>{n.value=1,S()},w=v=>{f.value=v.length?b.value.filter(t=>v.includes(t.extension)):b.value},S=async()=>{z({duration:0,message:"加载中...",forbidClick:!0});const v=await U.post(F.api("http"),{url:"https://api.ylibrary.org/api/search/",data:{keyword:l.value,page:n.value,sensitive:!1},method:"post"}),{hits:t,data:y}=v;u.value=t,b.value=y,w(c.value),N()},P=async v=>{z({duration:0,message:"加载中...",forbidClick:!0});const t=await U.post(F.api("http"),{url:"https://api.ylibrary.org/api/detail/",data:{id:v,source:"zlibrary"},method:"post"}),{ipfs_cid:y}=t;N(),y||E("暂无下载");const p=`https://ipfs-checker.1kbtool.com/${y}`;K({title:"IPFS下载",confirmButtonText:"访问",cancelButtonText:"复制",message:p}).then(()=>{T.value=p,d.value=!0}).catch(()=>{const k=ee(p);E({type:k?"success":"fail",message:`复制${k?"成功":"失败"}`})})};return(v,t)=>{const y=Q,p=M,k=j,x=H,L=W,V=X,q=Y,R=J;return i(),h(C,null,[a(k,{onSubmit:G},{default:o(()=>[a(p,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),name:"关键字",label:"关键字",placeholder:"请填写关键字",center:"",clearable:"",rules:[{required:!0,message:"请填写关键字"}]},{button:o(()=>[a(y,{size:"small",type:"primary","native-type":"submit"},{default:o(()=>[_("查询")]),_:1})]),_:1},8,["modelValue"])]),_:1}),u.value?(i(),h(C,{key:0},[a(x,null,{default:o(()=>[_("第 "+s(n.value)+" 页， 共 "+s(u.value)+" 条 / "+s(r.value)+" 页",1)]),_:1}),a(p,{name:"stepper",label:"页数"},{input:o(()=>[a(L,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=e=>n.value=e),min:"1",max:r.value,onChange:S},null,8,["modelValue","max"])]),_:1}),a(p,{name:"checkboxGroup",label:"格式"},{input:o(()=>[a(q,{onChange:w,modelValue:c.value,"onUpdate:modelValue":t[2]||(t[2]=e=>c.value=e),direction:"horizontal"},{default:o(()=>[a(V,{name:"epub",shape:"square"},{default:o(()=>[_("epub")]),_:1}),a(V,{name:"pdf",shape:"square"},{default:o(()=>[_("pdf")]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)):g("",!0),f.value.length?(i(!0),h(C,{key:1},I(f.value,e=>(i(),$(x,{onClick:se=>P(e.id),title:e.title,label:e.publisher,key:e},{extra:o(()=>[_(s(e.year),1)]),label:o(()=>[e.publisher?(i(),h("p",te,"出版社:"+s(e.publisher),1)):g("",!0),e.isbn?(i(),h("p",ae,"ISBN: "+s(e.isbn),1)):g("",!0),D("p",null,"格式: "+s(e.extension),1),e.author?(i(),h("p",oe,"作者："+s(e.author),1)):g("",!0)]),_:2},1032,["onClick","title","label"]))),128)):(i(),$(x,{key:2,title:"暂无结果"})),u.value?(i(),h(C,{key:3},[a(x,null,{default:o(()=>[_("第 "+s(n.value)+" 页， 共 "+s(u.value)+" 条 / "+s(r.value)+" 页",1)]),_:1}),a(p,{name:"stepper",label:"页数"},{input:o(()=>[a(L,{modelValue:n.value,"onUpdate:modelValue":t[3]||(t[3]=e=>n.value=e),min:"1",max:r.value,onChange:S},null,8,["modelValue","max"])]),_:1}),a(p,{name:"checkboxGroup",label:"格式"},{input:o(()=>[a(q,{onChange:w,modelValue:c.value,"onUpdate:modelValue":t[4]||(t[4]=e=>c.value=e),direction:"horizontal"},{default:o(()=>[a(V,{name:"epub",shape:"square"},{default:o(()=>[_("epub")]),_:1}),a(V,{name:"pdf",shape:"square"},{default:o(()=>[_("pdf")]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)):g("",!0),a(R,{show:d.value,"onUpdate:show":t[5]||(t[5]=e=>d.value=e),position:"bottom",closeable:"","close-icon":"close",style:{height:"100%"}},{default:o(()=>[D("iframe",{src:T.value,class:"iframe"},null,8,le)]),_:1},8,["show"])],64)}}});const ce=Z(ne,[["__scopeId","data-v-2d55b921"]]);export{ce as default};
