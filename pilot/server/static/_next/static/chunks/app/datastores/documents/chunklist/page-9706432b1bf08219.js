(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{55254:function(e,t,n){Promise.resolve().then(n.bind(n,26257))},26257:function(e,t,n){"use strict";n.r(t);var a=n(9268),i=n(56008),s=n(86006),o=n(78635),c=n(70900),r=n(44334),l=n(311),d=n(22046),h=n(83192),u=n(23910),g=n(1031);t.default=()=>{let e=(0,i.useRouter)(),{mode:t}=(0,o.tv)(),n=(0,i.useSearchParams)().get("spacename"),x=(0,i.useSearchParams)().get("documentid"),[j,p]=(0,s.useState)(0),[m,f]=(0,s.useState)(0),[S,y]=(0,s.useState)([]);return(0,s.useEffect)(()=>{(async function(){let e=await fetch("".concat("http://localhost:5000","/knowledge/").concat(n,"/chunk/list"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({document_id:x,page:1,page_size:20})}),t=await e.json();t.success&&(y(t.data.data),p(t.data.total),f(t.data.page))})()},[]),(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)(c.Z,{direction:"row",justifyContent:"flex-start",alignItems:"center",sx:{marginBottom:"20px"},children:(0,a.jsxs)(r.Z,{"aria-label":"breadcrumbs",children:[(0,a.jsx)(l.Z,{onClick:()=>{e.push("/datastores")},underline:"hover",color:"neutral",fontSize:"inherit",children:"Knowledge Space"},"Knowledge Space"),(0,a.jsx)(l.Z,{onClick:()=>{e.push("/datastores/documents?name=".concat(n))},underline:"hover",color:"neutral",fontSize:"inherit",children:"Documents"},"Knowledge Space"),(0,a.jsx)(d.ZP,{fontSize:"inherit",children:"Chunks"})]})}),(0,a.jsx)("div",{className:"p-4",children:S.length?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(h.Z,{color:"primary",variant:"plain",size:"lg",sx:{"& tbody tr: hover":{backgroundColor:"light"===t?"rgb(246, 246, 246)":"rgb(33, 33, 40)"},"& tbody tr: hover a":{textDecoration:"underline"}},children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Content"}),(0,a.jsx)("th",{children:"Meta Data"})]})}),(0,a.jsx)("tbody",{children:S.map(e=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.doc_name}),(0,a.jsx)("td",{children:(0,a.jsx)(u.Z,{content:e.content,trigger:"hover",children:e.content.length>10?"".concat(e.content.slice(0,10),"..."):e.content})}),(0,a.jsx)("td",{children:(0,a.jsx)(u.Z,{content:JSON.stringify(e.meta_info||"{}",null,2),trigger:"hover",children:e.meta_info.length>10?"".concat(e.meta_info.slice(0,10),"..."):e.meta_info})})]},e.id))})]}),(0,a.jsx)(c.Z,{direction:"row",justifyContent:"flex-end",sx:{marginTop:"20px"},children:(0,a.jsx)(g.Z,{defaultPageSize:20,showSizeChanger:!1,current:m,total:j,onChange:async e=>{let t=await fetch("".concat("http://localhost:5000","/knowledge/").concat(n,"/chunk/list"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({document_id:x,page:e,page_size:20})}),a=await t.json();a.success&&(y(a.data.data),p(a.data.total),f(a.data.page))},hideOnSinglePage:!0})})]}):(0,a.jsx)(a.Fragment,{})})]})}}},function(e){e.O(0,[430,635,456,585,440,232,253,769,744],function(){return e(e.s=55254)}),_N_E=e.O()}]);