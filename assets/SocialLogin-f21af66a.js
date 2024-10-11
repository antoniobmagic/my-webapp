import{aP as de,aT as Ue,aG as r,aH as t,aK as y,aJ as w,aS as qe,aQ as he,be as We,b2 as Qe,aR as Ke,cB as ce,a$ as ke,b0 as g,b5 as I,bt as re,bx as se,ba as J,b8 as Ye,cC as Je,cD as ie,w as oe,cl as ae,bz as Xe,aO as ge,aZ as Ze}from"./index-85f30e3b.js";import{preAuthenticate as Ie}from"./index-ada8b120.js";import{hasStoredPasskey as et}from"./passkeys-96ca43fd.js";import{l as tt}from"./oauth-0547ff36.js";import{o as nt}from"./useInAppWalletLocale-89583f4d.js";const xe=de({animation:`${Ue} 0.15s ease-in`});var rt=Object.defineProperty,it=Object.defineProperties,ot=Object.getOwnPropertyDescriptors,ue=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,Ae=(e,n,i)=>n in e?rt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,at=(e,n)=>{for(var i in n||(n={}))Oe.call(n,i)&&Ae(e,i,n[i]);if(ue)for(var i of ue(n))Re.call(n,i)&&Ae(e,i,n[i]);return e},lt=(e,n)=>it(e,ot(n)),ct=(e,n)=>{var i={};for(var d in e)Oe.call(e,d)&&n.indexOf(d)<0&&(i[d]=e[d]);if(e!=null&&ue)for(var d of ue(e))n.indexOf(d)<0&&Re.call(e,d)&&(i[d]=e[d]);return i},st="^\\d+$";function ut(e){let n=setTimeout(e,0),i=setTimeout(e,10),d=setTimeout(e,50);return[n,i,d]}function dt(e){let n=r.useRef();return r.useEffect(()=>{n.current=e}),n.current}var ht=18,Be=40,gt=`${Be}px`,ft=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function mt({containerRef:e,inputRef:n,pushPasswordManagerStrategy:i,isFocused:d}){let u=r.useRef({done:!1,refocused:!1}),[c,v]=r.useState(!1),[h,S]=r.useState(!1),[m,x]=r.useState(!1),L=r.useMemo(()=>i==="none"?!1:(i==="increase-width"||i==="experimental-no-flickering")&&c&&h,[c,h,i]),A=r.useCallback(()=>{let b=e.current,l=n.current;if(!b||!l||m||i==="none")return;let s=b,M=s.getBoundingClientRect().left+s.offsetWidth,T=s.getBoundingClientRect().top+s.offsetHeight/2,j=M-ht,z=T;if(!(document.querySelectorAll(ft).length===0&&document.elementFromPoint(j,z)===b)&&(v(!0),x(!0),!u.current.refocused&&document.activeElement===l)){let O=[l.selectionStart,l.selectionEnd];l.blur(),l.focus(),l.setSelectionRange(O[0],O[1]),u.current.refocused=!0}},[e,n,m,i]);return r.useEffect(()=>{let b=e.current;if(!b||i==="none")return;function l(){let M=window.innerWidth-b.getBoundingClientRect().right;S(M>=Be)}l();let s=setInterval(l,1e3);return()=>{clearInterval(s)}},[e,i]),r.useEffect(()=>{let b=d||document.activeElement===n.current;if(i==="none"||!b)return;let l=setTimeout(A,0),s=setTimeout(A,2e3),M=setTimeout(A,5e3),T=setTimeout(()=>{x(!0)},6e3);return()=>{clearTimeout(l),clearTimeout(s),clearTimeout(M),clearTimeout(T)}},[n,d,i,A]),{hasPWMBadge:c,willPushPWMBadge:L,PWM_BADGE_SPACE_WIDTH:gt}}var pt=r.createContext({}),je=r.forwardRef((e,n)=>{var i=e,{value:d,onChange:u,maxLength:c,textAlign:v="left",pattern:h=st,inputMode:S="numeric",onComplete:m,pushPasswordManagerStrategy:x="increase-width",containerClassName:L,noScriptCSSFallback:A=yt,render:b,children:l}=i,s=ct(i,["value","onChange","maxLength","textAlign","pattern","inputMode","onComplete","pushPasswordManagerStrategy","containerClassName","noScriptCSSFallback","render","children"]),M,T,j,z,O;let[$,p]=r.useState(typeof s.defaultValue=="string"?s.defaultValue:""),f=d??$,C=dt(f),X=r.useCallback(o=>{u==null||u(o),p(o)},[u]),B=r.useMemo(()=>h?typeof h=="string"?new RegExp(h):h:null,[h]),E=r.useRef(null),fe=r.useRef(null),me=r.useRef({value:f,onChange:X,isIOS:typeof window<"u"&&((T=(M=window==null?void 0:window.CSS)==null?void 0:M.supports)==null?void 0:T.call(M,"-webkit-touch-callout","none"))}),le=r.useRef({prev:[(j=E.current)==null?void 0:j.selectionStart,(z=E.current)==null?void 0:z.selectionEnd,(O=E.current)==null?void 0:O.selectionDirection]});r.useImperativeHandle(n,()=>E.current,[]),r.useEffect(()=>{let o=E.current,a=fe.current;if(!o||!a)return;me.current.value!==o.value&&me.current.onChange(o.value),le.current.prev=[o.selectionStart,o.selectionEnd,o.selectionDirection];function P(){if(document.activeElement!==o){ee(null),te(null);return}let k=o.selectionStart,R=o.selectionEnd,_=o.selectionDirection,V=o.maxLength,G=o.value,Y=le.current.prev,F=-1,H=-1,U;if(G.length!==0&&k!==null&&R!==null){let Ne=k===R,Ve=k===G.length&&G.length<V;if(Ne&&!Ve){let q=k;if(q===0)F=0,H=1,U="forward";else if(q===V)F=q-1,H=q,U="backward";else if(V>1&&G.length>1){let ve=0;if(Y[0]!==null&&Y[1]!==null){U=q<Y[1]?"backward":"forward";let Ge=Y[0]===Y[1]&&Y[0]<V;U==="backward"&&!Ge&&(ve=-1)}F=ve+q,H=ve+q+1}}F!==-1&&H!==-1&&F!==H&&E.current.setSelectionRange(F,H,U)}let Me=F!==-1?F:k,Te=H!==-1?H:R,$e=U??_;ee(Me),te(Te),le.current.prev=[Me,Te,$e]}if(document.addEventListener("selectionchange",P,{capture:!0}),P(),document.activeElement===o&&pe(!0),!document.getElementById("input-otp-style")){let k=document.createElement("style");if(k.id="input-otp-style",document.head.appendChild(k),k.sheet){let R="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";ne(k.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),ne(k.sheet,`[data-input-otp]:autofill { ${R} }`),ne(k.sheet,`[data-input-otp]:-webkit-autofill { ${R} }`),ne(k.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),ne(k.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let W=()=>{a&&a.style.setProperty("--root-height",`${o.clientHeight}px`)};W();let D=new ResizeObserver(W);return D.observe(o),()=>{document.removeEventListener("selectionchange",P,{capture:!0}),D.disconnect()}},[]);let[Se,be]=r.useState(!1),[Z,pe]=r.useState(!1),[N,ee]=r.useState(null),[Q,te]=r.useState(null);r.useEffect(()=>{ut(()=>{var o,a,P,W;(o=E.current)==null||o.dispatchEvent(new Event("input"));let D=(a=E.current)==null?void 0:a.selectionStart,k=(P=E.current)==null?void 0:P.selectionEnd,R=(W=E.current)==null?void 0:W.selectionDirection;D!==null&&k!==null&&(ee(D),te(k),le.current.prev=[D,k,R])})},[f,Z]),r.useEffect(()=>{C!==void 0&&f!==C&&C.length<c&&f.length===c&&(m==null||m(f))},[c,m,C,f]);let K=mt({containerRef:fe,inputRef:E,pushPasswordManagerStrategy:x,isFocused:Z}),Ce=r.useCallback(o=>{let a=o.currentTarget.value.slice(0,c);if(a.length>0&&B&&!B.test(a)){o.preventDefault();return}typeof C=="string"&&a.length<C.length&&document.dispatchEvent(new Event("selectionchange")),X(a)},[c,X,C,B]),Ee=r.useCallback(()=>{var o;if(E.current){let a=Math.min(E.current.value.length,c-1),P=E.current.value.length;(o=E.current)==null||o.setSelectionRange(a,P),ee(a),te(P)}pe(!0)},[c]),Le=r.useCallback(o=>{var a,P;let W=E.current;if(!me.current.isIOS||!o.clipboardData||!W)return;let D=o.clipboardData.getData("text/plain");o.preventDefault();let k=(a=E.current)==null?void 0:a.selectionStart,R=(P=E.current)==null?void 0:P.selectionEnd,_=(k!==R?f.slice(0,k)+D+f.slice(R):f.slice(0,k)+D+f.slice(k)).slice(0,c);if(_.length>0&&B&&!B.test(_))return;W.value=_,X(_);let V=Math.min(_.length,c-1),G=_.length;W.setSelectionRange(V,G),ee(V),te(G)},[c,X,B,f]),_e=r.useMemo(()=>({position:"relative",cursor:s.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[s.disabled]),Pe=r.useMemo(()=>({position:"absolute",inset:0,width:K.willPushPWMBadge?`calc(100% + ${K.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:K.willPushPWMBadge?`inset(0 ${K.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:v,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[K.PWM_BADGE_SPACE_WIDTH,K.willPushPWMBadge,v]),Fe=r.useMemo(()=>r.createElement("input",lt(at({autoComplete:s.autoComplete||"one-time-code"},s),{"data-input-otp":!0,"data-input-otp-mss":N,"data-input-otp-mse":Q,inputMode:S,pattern:B==null?void 0:B.source,style:Pe,maxLength:c,value:f,ref:E,onPaste:o=>{var a;Le(o),(a=s.onPaste)==null||a.call(s,o)},onChange:Ce,onMouseOver:o=>{var a;be(!0),(a=s.onMouseOver)==null||a.call(s,o)},onMouseLeave:o=>{var a;be(!1),(a=s.onMouseLeave)==null||a.call(s,o)},onFocus:o=>{var a;Ee(),(a=s.onFocus)==null||a.call(s,o)},onBlur:o=>{var a;pe(!1),(a=s.onBlur)==null||a.call(s,o)}})),[Ce,Ee,Le,S,Pe,c,Q,N,s,B==null?void 0:B.source,f]),ye=r.useMemo(()=>({slots:Array.from({length:c}).map((o,a)=>{let P=Z&&N!==null&&Q!==null&&(N===Q&&a===N||a>=N&&a<Q),W=f[a]!==void 0?f[a]:null;return{char:W,isActive:P,hasFakeCaret:P&&W===null}}),isFocused:Z,isHovering:!s.disabled&&Se}),[Z,Se,c,Q,N,s.disabled,f]),He=r.useMemo(()=>b?b(ye):r.createElement(pt.Provider,{value:ye},l),[l,ye,b]);return r.createElement(r.Fragment,null,A!==null&&r.createElement("noscript",null,r.createElement("style",null,A)),r.createElement("div",{ref:fe,"data-input-otp-container":!0,style:_e,className:L},He,r.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},Fe)))});je.displayName="Input";function ne(e,n){try{e.insertRule(n)}catch{console.error("input-otp could not insert CSS rule:",n)}}var yt=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;function vt(e){return t(xt,{children:t(je,{onComplete:()=>{e.onEnter()},maxLength:6,value:e.value,render:({slots:n})=>t(y,{flex:"row",gap:"xs",center:"both",children:n.map((i,d)=>t(kt,{...i,isInvalid:e.isInvalid},d))}),onChange:n=>{e.setValue(n)}})})}const xt=de({"& input":{maxWidth:"100%"}});function kt(e){return w(bt,{"data-active":e.isActive,"data-error":e.isInvalid,children:[e.char!==null&&t("div",{children:e.char}),e.hasFakeCaret&&t(St,{})]})}const wt=qe`
  0%, 100% {
    opacity: 0;
  },
  50% {
    opacity: 1;
  }
  `,St=de(e=>{const n=he();return{position:"absolute",pointerEvents:"none",inset:0,display:"flex",alignItems:"center",justifyContent:"center",animation:`${wt} 1s infinite`,"&::before":{content:"''",display:"block",width:"1.5px",height:"1em",backgroundColor:n.colors.primaryText}}}),bt=de(e=>{const n=he();return{position:"relative",width:"40px",height:"40px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",fontSize:We.md,padding:Qe.xs,boxSizing:"border-box",transition:"color 200ms ease",border:`2px solid ${n.colors.borderColor}`,"&[data-active='true']":{borderColor:n.colors.accentText},color:n.colors.primaryText,borderRadius:Ke.lg,"&[data-error='true']":{borderColor:n.colors.danger}}});function Ot(e){const{wallet:n,done:i,goBack:d,userInfo:u}=e,c=e.size==="wide",v=e.locale,[h,S]=r.useState(""),[m,x]=r.useState("idle"),[L,A]=r.useState(),[b,l]=r.useState("sending"),s=r.useMemo(()=>ce(n.id),[n.id]),[M]=r.useState("base"),T=r.useCallback(async()=>{var p,f;S(""),x("idle"),l("sending");try{if("email"in u)await Ie({ecosystem:s?{id:n.id,partnerId:(p=n.getConfig())==null?void 0:p.partnerId}:void 0,email:u.email,strategy:"email",client:e.client}),l("sent");else if("phone"in u)await Ie({ecosystem:s?{id:n.id,partnerId:(f=n.getConfig())==null?void 0:f.partnerId}:void 0,phoneNumber:u.phone,strategy:"phone",client:e.client}),l("sent");else throw new Error("Invalid userInfo")}catch(C){console.error(C),x("idle"),l("error")}},[e.client,u,n,s]);async function j(p){if("email"in u)await n.connect({chain:e.chain,strategy:"email",email:u.email,verificationCode:p,client:e.client}),await ie("email",oe);else if("phone"in u)await n.connect({chain:e.chain,strategy:"phone",phoneNumber:u.phone,verificationCode:p,client:e.client}),await ie("phone",oe);else throw new Error("Invalid userInfo")}async function z(p){"email"in u?await ae(n,{strategy:"email",email:u.email,verificationCode:p}):"phone"in u&&await ae(n,{strategy:"phone",phoneNumber:u.phone,verificationCode:p})}const O=async p=>{var f;if(p.length===6){x("verifying");try{e.isLinking?await z(p):await j(p),i(),x("valid")}catch(C){C instanceof Error&&((f=C==null?void 0:C.message)!=null&&f.includes("PAYMENT_METHOD_REQUIRED"))?x("payment_required"):C instanceof Error&&(C.message.toLowerCase().includes("link")||C.message.toLowerCase().includes("profile"))?(x("linking_error"),A(C.message)):x("invalid"),console.error("Authentication Error",C)}}},$=r.useRef(!1);return r.useEffect(()=>{$.current||($.current=!0,T())},[T]),M==="base"?w(y,{fullHeight:!0,flex:"column",animate:"fadein",children:[t(y,{p:"lg",children:t(ke,{title:v.signIn,onBack:d})}),t(y,{expand:!0,flex:"column",center:"y",children:w("form",{onSubmit:p=>{p.preventDefault()},children:[w(y,{flex:"column",center:"x",px:"lg",children:[!c&&t(g,{y:"xl"}),t(I,{children:v.emailLoginScreen.enterCodeSendTo}),t(g,{y:"sm"}),t(I,{color:"primaryText",children:"email"in u?u.email:u.phone}),t(g,{y:"xl"})]}),t(vt,{isInvalid:m==="invalid",digits:6,value:h,setValue:p=>{S(p),x("idle")},onEnter:()=>{O(h)}}),m==="invalid"&&w(xe,{children:[t(g,{y:"md"}),t(I,{size:"sm",color:"danger",center:!0,children:v.emailLoginScreen.invalidCode})]}),m==="linking_error"&&w(xe,{children:[t(g,{y:"md"}),t(I,{size:"sm",color:"danger",center:!0,children:L||"Failed to verify code"})]}),m==="payment_required"&&w(xe,{children:[t(g,{y:"md"}),t(I,{size:"sm",color:"danger",center:!0,children:v.maxAccountsExceeded})]}),t(g,{y:"xl"}),t(y,{px:c?"xxl":"lg",children:m==="verifying"?t(re,{children:t(y,{flex:"row",center:"x",animate:"fadein",children:t(se,{size:"lg",color:"accentText"})})}):t(y,{animate:"fadein",children:t(J,{onClick:()=>O(h),variant:"accent",type:"submit",style:{width:"100%"},children:v.emailLoginScreen.verify})},"btn-container")}),t(g,{y:"xl"}),!c&&t(Ye,{}),w(y,{p:c?void 0:"lg",children:[b==="error"&&t(re,{children:t(I,{size:"sm",center:!0,color:"danger",children:v.emailLoginScreen.failedToSendCode})}),b==="sending"&&w(y,{flex:"row",center:"both",gap:"xs",style:{textAlign:"center"},children:[t(I,{size:"sm",children:v.emailLoginScreen.sendingCode}),t(se,{size:"xs",color:"secondaryText"})]}),b==="sent"&&t(Ct,{onClick:T,type:"button",children:v.emailLoginScreen.resendCode})]})]})})]}):null}const Ct=Je(e=>{const n=he();return{all:"unset",color:n.colors.accentText,fontSize:We.sm,cursor:"pointer",textAlign:"center",fontWeight:500,width:"100%","&:hover":{color:n.colors.primaryText}}}),we=e=>w("svg",{width:e.size,height:e.size,viewBox:"0 0 36 36",fill:"none","aria-hidden":"true",children:[t("path",{d:"M18.0001 15C17.2045 15 16.4414 15.3161 15.8788 15.8787C15.3162 16.4413 15.0001 17.2044 15.0001 18C15.0001 19.53 14.8501 21.765 14.6101 24",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M21.0002 19.6801C21.0002 23.2501 21.0002 29.2501 19.5002 33.0001",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M25.9348 31.53C26.1148 30.63 26.5798 28.08 26.6848 27",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M2.99976 18C2.99976 14.8518 3.99032 11.7833 5.83112 9.22935C7.67193 6.67536 10.2697 4.76531 13.2563 3.76975C16.243 2.77419 19.4672 2.74359 22.4723 3.6823C25.4773 4.621 28.1108 6.48141 29.9998 9",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M2.99976 24H3.01628",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M32.7 24C33 21 32.8965 15.969 32.7 15",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M7.49976 29.25C8.24976 27 8.99976 22.5 8.99976 18C8.99824 16.9783 9.17071 15.9638 9.50976 15",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M12.9751 33C13.2901 32.01 13.6501 31.02 13.8301 30",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M13.5 10.2C14.8686 9.40988 16.4211 8.99401 18.0014 8.99426C19.5818 8.99452 21.1342 9.41088 22.5025 10.2015C23.8708 10.9921 25.0069 12.129 25.7964 13.498C26.5859 14.867 27.001 16.4197 27 18V21",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})]});function ze(e){return w(y,{animate:"fadein",children:[t(g,{y:"xxl"}),t(y,{flex:"row",center:"x",children:t(Xe,{size:ge["3xl"]})}),t(g,{y:"lg"}),t(I,{center:!0,color:"primaryText",size:"md",children:e.title}),t(g,{y:"xl"}),t(g,{y:"xxl"}),t(J,{variant:"accent",fullWidth:!0,onClick:e.onTryAgain,children:"Try Again"})]})}function De(e){return w(y,{animate:"fadein",children:[t(g,{y:"xxl"}),w(y,{flex:"row",center:"x",style:{position:"relative"},children:[t(se,{size:"4xl",color:"accentText"}),t(y,{color:"accentText",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:e.icon})]}),t(g,{y:"xl"}),t(I,{center:!0,color:"primaryText",size:"lg",children:e.title}),t(g,{y:"md"}),t(I,{multiline:!0,center:!0,children:e.subtitle}),t(g,{y:"xxl"}),t(g,{y:"xxl"})]})}function Rt(e){const{wallet:n,done:i,client:d,chain:u,size:c,locale:v}=e,[h,S]=r.useState("loading"),m=r.useRef(!1);return r.useEffect(()=>{m.current||(m.current=!0,et(d,ce(n.id)?n.id:void 0).then(x=>{S(x?"login":"select")}).catch(()=>{S("select")}))},[d,n.id]),w(y,{animate:"fadein",fullHeight:!0,flex:"column",children:[t(y,{p:"lg",children:t(ke,{title:e.isLinking?v.passkeys.linkPasskey:v.passkeys.title,onBack:e.onBack})}),t(y,{px:c==="wide"?"xxl":"lg",expand:!0,flex:"column",center:"y",children:w("div",{children:[h==="loading"&&w(re,{children:[t(Ze,{}),t(g,{y:"xxl"})]}),h==="select"&&t(Pt,{onSignin:()=>{S("login")},onSignup:()=>{S("signup")}}),h==="login"&&t(Et,{wallet:n,client:d,done:i,onCreate:()=>{S("signup")},chain:u,isLinking:e.isLinking}),h==="signup"&&t(Lt,{wallet:n,client:d,done:i,chain:u,isLinking:e.isLinking})]})})]})}function Et(e){const{wallet:n,done:i,client:d,chain:u}=e,[c,v]=r.useState("loading"),[h,S]=r.useState();async function m(){v("loading");try{e.isLinking?await ae(n,{strategy:"passkey",type:"sign-in"}).catch(L=>{throw S(L.message),L}):(await n.connect({client:d,strategy:"passkey",type:"sign-in",chain:u}),await ie("passkey",oe)),i()}catch{v("error")}}const x=r.useRef(!1);return r.useEffect(()=>{x.current||(x.current=!0,m())}),c==="loading"?t(De,{title:"Requesting Passkey",subtitle:"A pop-up prompt will appear to sign-in and verify your passkey",icon:t(we,{size:ge.xxl})}):c==="error"?w(re,{children:[t(ze,{onTryAgain:m,title:h||"Failed to Login"}),t(g,{y:"sm"}),t(J,{variant:"outline",fullWidth:!0,onClick:e.onCreate,children:"Create a new Passkey"}),t(g,{y:"lg"})]}):null}function Lt(e){const{wallet:n,done:i,client:d,chain:u}=e,[c,v]=r.useState(),[h,S]=r.useState("loading");async function m(){S("loading");try{e.isLinking?await ae(n,{strategy:"passkey",type:"sign-up"}):(await n.connect({client:d,strategy:"passkey",type:"sign-up",chain:u}),await ie("passkey",oe)),i()}catch(L){console.error(L),L instanceof Error&&v(`Error creating passkey: ${L.message}`),S("error")}}const x=r.useRef(!1);return r.useEffect(()=>{x.current||(x.current=!0,m())}),h==="loading"?t(De,{title:"Creating Passkey",subtitle:"A pop-up prompt will appear to sign-in and verify your passkey",icon:t(we,{size:ge.xxl})}):h==="error"?w(re,{children:[t(ze,{onTryAgain:m,title:c||"Failed to create passkey"}),t(g,{y:"lg"})]}):null}function Pt(e){return w(y,{children:[t(g,{y:"xxl"}),t(y,{flex:"row",center:"x",color:"accentText",children:t(we,{size:ge["4xl"]})}),t(g,{y:"xl"}),t(g,{y:"xxl"}),t(J,{variant:"accent",onClick:e.onSignup,fullWidth:!0,children:"Create a Passkey"}),t(g,{y:"sm"}),t(J,{variant:"outline",onClick:e.onSignin,fullWidth:!0,children:"I have a Passkey"}),t(g,{y:"lg"})]})}function Bt(e){var b;const n=e.locale,i=n.socialLoginScreen,d=he(),[u,c]=r.useState(void 0),{done:v,wallet:h}=e,[S,m]=r.useState("connecting"),x=async()=>{var M,T,j,z,O,$;const l=h.getConfig(),s=l&&"auth"in l?((M=l==null?void 0:l.auth)==null?void 0:M.mode)??"popup":"popup";if(l&&"auth"in l&&s!=="popup"&&!e.isLinking)return tt({authOption:e.socialAuth,client:e.client,ecosystem:ce(h)?{id:h.id,partnerId:(T=h.getConfig())==null?void 0:T.partnerId}:void 0,redirectUrl:(j=l==null?void 0:l.auth)==null?void 0:j.redirectUrl,mode:(z=l==null?void 0:l.auth)==null?void 0:z.mode});try{const p=nt({authOption:e.socialAuth,themeObj:d,client:e.client,ecosystem:ce(h)?{id:h.id,partnerId:(O=h.getConfig())==null?void 0:O.partnerId}:void 0});if(!p)throw new Error(`Failed to open ${e.socialAuth} login window`);m("connecting"),e.isLinking?await ae(h,{strategy:e.socialAuth,openedWindow:p,closeOpenedWindow:f=>{f.close()}}).catch(f=>{throw c(f.message),f}):await h.connect({chain:e.chain,strategy:e.socialAuth,openedWindow:p,closeOpenedWindow:f=>{f.close()},client:e.client}),await ie(e.socialAuth,oe),m("connected"),v()}catch(p){m("error"),p instanceof Error&&(($=p==null?void 0:p.message)!=null&&$.includes("PAYMENT_METHOD_REQUIRED"))&&c(n.maxAccountsExceeded),console.error(`Error sign in with ${e.socialAuth}`,p)}},L=(b=e.state)==null?void 0:b.socialLogin,A=r.useRef(!1);return r.useEffect(()=>{A.current||L&&(A.current=!0,m("connecting"),L.connectionPromise.then(()=>{v(),m("connected")}).catch(l=>{c(l.message),m("error")}))},[v,L]),t(y,{animate:"fadein",flex:"column",fullHeight:!0,children:w(y,{flex:"column",expand:!0,p:"lg",style:{paddingBottom:0},children:[e.goBack&&t(ke,{title:e.isLinking?e.connectLocale.manageWallet.linkProfile:i.title,onBack:e.goBack}),e.size==="compact"?t(g,{y:"xl"}):null,w(y,{flex:"column",center:"both",expand:!0,style:{textAlign:"center",minHeight:"250px"},children:[S!=="error"&&w(y,{animate:"fadein",children:[t(I,{color:"primaryText",center:!0,multiline:!0,style:{maxWidth:"250px"},children:i.instruction}),t(g,{y:"xl"}),t(y,{center:"x",flex:"row",children:t(se,{size:"lg",color:"accentText"})}),t(g,{y:"xxl"})]}),S==="error"&&w(y,{animate:"fadein",children:[u?t(I,{center:!0,color:"danger",children:u}):t(I,{color:"danger",children:i.failed}),t(g,{y:"lg"}),t(J,{variant:"primary",onClick:x,children:i.retry}),t(g,{y:"xxl"})]})]})]})})}export{ze as E,De as L,Ot as O,Rt as P,Bt as S};
