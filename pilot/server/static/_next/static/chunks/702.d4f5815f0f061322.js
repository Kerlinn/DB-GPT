"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{57931:function(e,t,a){a.d(t,{ZP:function(){return c},Cg:function(){return l}});var n=a(9268),r=a(89081),o=a(89749),i=a(86006);let[l,s]=function(){let e=i.createContext(void 0);return[function(){let t=i.useContext(e);if(void 0===t)throw Error("useCtx must be inside a Provider with a value");return t},e.Provider]}();var c=e=>{let{children:t}=e,{run:a,data:i,refresh:l}=(0,r.Z)(async()=>await (0,o.T)("/v1/chat/dialogue/list"),{manual:!0});return(0,n.jsx)(s,{value:{dialogueList:i,queryDialogueList:a,refreshDialogList:l},children:t})}},49702:function(e,t,a){a.r(t);var n=a(9268),r=a(89081),o=a(89749),i=a(66487),l=a(34605),s=a(57931);t.default=e=>{var t,a,c,u,d,h;let{refreshDialogList:m}=(0,s.Cg)(),{data:v}=(0,r.Z)(async()=>{var t;return await (0,o.T)("/v1/chat/dialogue/messages/history",{con_uid:null===(t=e.params)||void 0===t?void 0:t.agentId})},{ready:!!(null===(t=e.params)||void 0===t?void 0:t.agentId)}),{data:x}=(0,r.Z)(async()=>{var t;return await (0,o.K)("/v1/chat/mode/params/list?chat_mode=".concat(null===(t=e.searchParams)||void 0===t?void 0:t.scene))},{ready:!!(null===(a=e.searchParams)||void 0===a?void 0:a.scene)}),{history:g,handleChatSubmit:p}=(0,i.Z)({queryAgentURL:"http://30.183.153.109:5000/v1/chat/completions",queryBody:{conv_uid:null===(c=e.params)||void 0===c?void 0:c.agentId,chat_mode:(null===(u=e.searchParams)||void 0===u?void 0:u.scene)||"chat_normal"},initHistory:null==v?void 0:v.data});return(0,n.jsx)("div",{className:"mx-auto flex h-full max-w-3xl flex-col gap-6 px-5 py-6 sm:gap-8 xl:max-w-5xl ",children:(0,n.jsx)(l.Z,{initialMessage:(null==v?void 0:v.data)&&(null==v?void 0:null===(d=v.data)||void 0===d?void 0:d.length)<=0?null===(h=e.searchParams)||void 0===h?void 0:h.initMessage:void 0,clearIntialMessage:async()=>{await m()},messages:g||[],onSubmit:p,paramsList:null==x?void 0:x.data})})}},34605:function(e,t,a){var n=a(9268),r=a(67830),o=a(54842),i=a(70900),l=a(62414),s=a(94244),c=a(33155),u=a(7354),d=a(35891),h=a(35086),m=a(53047),v=a(86006),x=a(19700),g=a(92391),p=a(70321),y=a(75403),f=a(99398),w=a(49064);let j=g.z.object({query:g.z.string().min(1)});t.Z=e=>{let{messages:t,onSubmit:a,initialMessage:g,readOnly:Z,paramsList:b,clearIntialMessage:S}=e,P=v.useRef(null),[C,O]=(0,v.useState)(!1),[R,N]=(0,v.useState)(),[k,E]=(0,v.useState)(),_=(0,x.cI)({resolver:(0,r.F)(j),defaultValues:{}}),L=async e=>{let{query:t}=e;try{O(!0),_.reset(),await a(t,{select_param:null==b?void 0:b[k]})}catch(e){}finally{O(!1)}},T=async()=>{try{let e=new URLSearchParams(window.location.search);e.delete("initMessage"),window.history.replaceState(null,null,"?".concat(e.toString())),await L({query:g})}catch(e){console.log(e)}finally{null==S||S()}},z={overrides:{code:e=>{let{children:t}=e;return(0,n.jsx)(f.Z,{language:"javascript",style:w.Z,children:t})}}};return v.useEffect(()=>{P.current&&P.current.scrollTo(0,P.current.scrollHeight)},[null==t?void 0:t.length]),v.useEffect(()=>{g&&t.length<=0&&T()},[g]),v.useEffect(()=>{var e,t;b&&(null===(e=Object.keys(b||{}))||void 0===e?void 0:e.length)>0&&E(null===(t=Object.keys(b||{}))||void 0===t?void 0:t[0])},[b]),(0,n.jsxs)(i.Z,{direction:"column",gap:2,sx:{display:"flex",flex:1,flexBasis:"100%",width:"100%",height:"100%",maxHeight:"100%",minHeight:"100%",mx:"auto"},children:[(0,n.jsxs)(i.Z,{ref:P,direction:"column",gap:2,sx:{boxSizing:"border-box",maxWidth:"100%",width:"100%",mx:"auto",flex:1,maxHeight:"100%",overflowY:"auto",p:2,border:"1px solid",borderColor:"var(--joy-palette-divider)"},children:[R&&(0,n.jsx)(l.Z,{size:"sm",variant:"outlined",color:"primary",className:"message-agent",sx:{mr:"auto",ml:"none",whiteSpace:"pre-wrap"},children:null==R?void 0:R.context}),t.filter(e=>["view","human"].includes(e.role)).map((e,t)=>{var a;return(0,n.jsx)(i.Z,{sx:{mr:"view"===e.role?"auto":"none",ml:"human"===e.role?"auto":"none"},children:(0,n.jsx)(l.Z,{size:"sm",variant:"outlined",className:"view"===e.role?"message-agent":"message-human",color:"view"===e.role?"primary":"neutral",sx:e=>({px:2,"ol, ul":{my:0,pl:2},ol:{listStyle:"numeric"},ul:{listStyle:"disc",mb:2},li:{my:1},a:{textDecoration:"underline"}}),children:(0,n.jsx)(y.Z,{options:z,children:null===(a=e.context)||void 0===a?void 0:a.replaceAll("\\n","\n")})})},t)}),C&&(0,n.jsx)(s.Z,{variant:"soft",color:"neutral",size:"sm",sx:{mx:"auto",my:2}})]}),!Z&&(0,n.jsxs)("form",{style:{maxWidth:"100%",width:"100%",position:"relative",display:"flex",marginTop:"auto",overflow:"visible",background:"none",justifyContent:"center",marginLeft:"auto",marginRight:"auto",flexDirection:"column",gap:"12px"},onSubmit:e=>{e.stopPropagation(),_.handleSubmit(L)(e)},children:[Object.keys(b||{}).length>0&&(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)(c.Z,{value:k,onChange:(e,t)=>{E(t)},className:"max-w-xs",children:Object.keys(b||{}).map(e=>(0,n.jsx)(u.Z,{value:e,children:null==b?void 0:b[e]},e))}),(0,n.jsx)(d.Z,{className:"cursor-pointer",title:k,placement:"top",variant:"outlined",children:(0,n.jsx)(p.Z,{})})]}),(0,n.jsx)(h.ZP,{sx:{width:"100%"},variant:"outlined",endDecorator:(0,n.jsx)(m.ZP,{type:"submit",disabled:C,children:(0,n.jsx)(o.Z,{})}),..._.register("query")})]})]})}},66487:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(71990),r=a(86006),o=e=>{let t=(0,r.useReducer)((e,t)=>({...e,...t}),{...e});return t},i=a(57931),l=e=>{let{queryAgentURL:t,channel:a,queryBody:l,initHistory:s}=e,[c,u]=o({history:s||[]}),{refreshDialogList:d}=(0,i.Cg)();(0,r.useEffect)(()=>{s&&u({history:s})},[s]);let h=async(e,r)=>{if(!e)return;let o=[...c.history,{role:"human",context:e}],i=o.length;u({history:o});try{let s=new AbortController;await (0,n.L)(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...r,...l,user_input:e,channel:a}),signal:s.signal,async onopen(e){if(o.length<=1){d();let e=new URLSearchParams(window.location.search);e.delete("initMessage"),window.history.replaceState(null,null,"?".concat(e.toString()))}(!e.ok||e.headers.get("content-type")!==n.a)&&e.status>=400&&e.status<500&&429!==e.status&&e.status},onclose(){console.log("onclose")},onerror(e){throw Error(e)},onmessage:e=>{var t;if(console.log(e,"e"),e.data=e.data.replaceAll("\\n","\n"),"[DONE]"===e.data)s.abort();else if(null===(t=e.data)||void 0===t?void 0:t.startsWith("[ERROR]"))s.abort(),u({history:[...o,{role:"view",context:e.data.replace("[ERROR]","")}]});else{let t=[...o];e.data&&((null==t?void 0:t[i])?t[i].context="".concat(e.data):t.push({role:"view",context:e.data}),u({history:t}))}}})}catch(e){console.log("---e",e),u({history:[...o,{role:"view",context:"请求出错"}]})}};return{handleChatSubmit:h,history:c.history}}},89749:function(e,t,a){a.d(t,{K:function(){return c},T:function(){return s}});var n=a(3748),r=a(24214),o=a(84835);r.Z.defaults.baseURL="http://127.0.0.1:5000",r.Z.defaults.timeout=1e4,r.Z.interceptors.response.use(e=>e.data,e=>Promise.reject(e));let i={"content-type":"application/json"},l=e=>{if(!(0,o.isPlainObject)(e))return JSON.stringify(e);let t={...e};for(let e in t){let a=t[e];"string"==typeof a&&(t[e]=a.trim())}return JSON.stringify(t)},s=(e,t)=>{if(t){let a=Object.keys(t).filter(e=>void 0!==t[e]&&""!==t[e]).map(e=>"".concat(e,"=").concat(t[e])).join("&");a&&(e+="?".concat(a))}return r.Z.get(e,{headers:i}).then(e=>e).catch(e=>{n.ZP.error(e),Promise.reject(e)})},c=(e,t)=>{let a=l(t);return r.Z.post(e,{body:a,headers:i}).then(e=>e).catch(e=>{n.ZP.error(e),Promise.reject(e)})}}}]);