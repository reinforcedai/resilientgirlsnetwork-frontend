import{K as ee,L as q,t as x,M as gt,N as Y,w as A,O as Ie,z as k,P as R,j as v,Q as D,R as Ee,S as ye,k as u,F as Le,u as be,f as B,m as X,p as J,U as Ne,V,W as ht,v as Ve,A as yt,X as bt,h as pt,D as Be,Y as _t,Z as St,$ as Ct,a0 as kt,r as $t,a1 as wt,a2 as xt,l as $,I as te,a3 as It,a4 as Et,a5 as ie,a6 as Lt,a7 as Nt,a8 as pe,i as Vt,a9 as Bt,aa as _e,C as Te,x as ne,y as Re,ab as re,E as Tt,T as Rt,ac as zt,B as Pt,ad as oe}from"./entry.6329342c.js";const At=["top","bottom"],Ot=["start","end","left","right"];function jt(e,t){let[s,n]=e.split(" ");return n||(n=ee(At,s)?"start":ee(Ot,s)?"top":"center"),{side:Se(s,t),align:Se(n,t)}}function Se(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function z(e){const t=q("useRender");t.render=e}function Mt(e){const t=x(),s=x();if(gt){const n=new ResizeObserver(a=>{e==null||e(a,n),a.length&&(s.value=a[0].contentRect)});Y(()=>{n.disconnect()}),A(t,(a,l)=>{l&&(n.unobserve(l),s.value=void 0),a&&n.observe(a)},{flush:"post"})}return{resizeRef:t,contentRect:Ie(s)}}const ze=k({border:[Boolean,Number,String]},"border");function Pe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{borderClasses:v(()=>{const n=D(e)?e.value:e.border,a=[];if(n===!0||n==="")a.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const l of String(n).split(" "))a.push(`border-${l}`);return a})}}const Wt=[null,"default","comfortable","compact"],Ae=k({density:{type:String,default:"default",validator:e=>Wt.includes(e)}},"density");function Oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{densityClasses:v(()=>`${t}--density-${e.density}`)}}const je=k({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Me(e){return{elevationClasses:v(()=>{const s=D(e)?e.value:e.elevation,n=[];return s==null||n.push(`elevation-${s}`),n})}}const We=k({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ge(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{roundedClasses:v(()=>{const n=D(e)?e.value:e.rounded,a=[];if(n===!0||n==="")a.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const l of String(n).split(" "))a.push(`rounded-${l}`);return a})}}const O=k({tag:{type:String,default:"div"}},"tag");function ue(e){return Ee(()=>{const t=[],s={};return e.value.background&&(ye(e.value.background)?s.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(ye(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:s}})}function se(e,t){const s=v(()=>({text:D(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:a}=ue(s);return{textColorClasses:n,textColorStyles:a}}function Rn(e,t){const s=v(()=>({background:D(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:a}=ue(s);return{backgroundColorClasses:n,backgroundColorStyles:a}}const Gt=["elevated","flat","tonal","outlined","text","plain"];function Dt(e,t){return u(Le,null,[e&&u("span",{key:"overlay",class:`${t}__overlay`},null),u("span",{key:"underlay",class:`${t}__underlay`},null)])}const De=k({color:String,variant:{type:String,default:"elevated",validator:e=>Gt.includes(e)}},"variant");function Ht(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();const s=v(()=>{const{variant:l}=be(e);return`${t}--variant-${l}`}),{colorClasses:n,colorStyles:a}=ue(v(()=>{const{variant:l,color:i}=be(e);return{[["elevated","flat"].includes(l)?"background":"text"]:i}}));return{colorClasses:n,colorStyles:a,variantClasses:s}}const Ft=B({name:"VBtnGroup",props:{divided:Boolean,...ze(),...Ae(),...je(),...We(),...O(),...X(),...De()},setup(e,t){let{slots:s}=t;const{themeClasses:n}=J(e),{densityClasses:a}=Oe(e),{borderClasses:l}=Pe(e),{elevationClasses:i}=Me(e),{roundedClasses:r}=Ge(e);Ne({VBtn:{height:"auto",color:V(e,"color"),density:V(e,"density"),flat:!0,variant:V(e,"variant")}}),z(()=>u(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,l.value,a.value,i.value,r.value]},s))}}),Ut=k({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),qt=k({value:null,disabled:Boolean,selectedClass:String},"group-item");function Yt(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=q("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=ht();Ve(Symbol.for(`${t.description}:id`),a);const l=yt(t,null);if(!l){if(!s)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const i=V(e,"value"),r=v(()=>l.disabled.value||e.disabled);l.register({id:a,value:i,disabled:r},n),Y(()=>{l.unregister(a)});const o=v(()=>l.isSelected(a)),f=v(()=>o.value&&[l.selectedClass.value,e.selectedClass]);return A(o,h=>{n.emit("group:selected",{value:h})}),{id:a,isSelected:o,toggle:()=>l.select(a,!o.value),select:h=>l.select(a,h),selectedClass:f,value:i,disabled:r,group:l}}function Xt(e,t){let s=!1;const n=bt([]),a=pt(e,"modelValue",[],c=>c==null?[]:He(n,St(c)),c=>{const d=Qt(n,c);return e.multiple?d:d[0]}),l=q("useGroup");function i(c,d){const p=c,m=Symbol.for(`${t.description}:id`),S=Ct(m,l==null?void 0:l.vnode).indexOf(d);S>-1?n.splice(S,0,p):n.push(p)}function r(c){if(s)return;o();const d=n.findIndex(p=>p.id===c);n.splice(d,1)}function o(){const c=n.find(d=>!d.disabled);c&&e.mandatory==="force"&&!a.value.length&&(a.value=[c.id])}Be(()=>{o()}),Y(()=>{s=!0});function f(c,d){const p=n.find(m=>m.id===c);if(!(d&&p!=null&&p.disabled))if(e.multiple){const m=a.value.slice(),_=m.findIndex(b=>b===c),S=~_;if(d=d!=null?d:!S,S&&e.mandatory&&m.length<=1||!S&&e.max!=null&&m.length+1>e.max)return;_<0&&d?m.push(c):_>=0&&!d&&m.splice(_,1),a.value=m}else{const m=a.value.includes(c);if(e.mandatory&&m)return;a.value=(d!=null?d:!m)?[c]:[]}}function h(c){if(e.multiple&&kt('This method is not supported when using "multiple" prop'),a.value.length){const d=a.value[0],p=n.findIndex(S=>S.id===d);let m=(p+c)%n.length,_=n[m];for(;_.disabled&&m!==p;)m=(m+c)%n.length,_=n[m];if(_.disabled)return;a.value=[n[m].id]}else{const d=n.find(p=>!p.disabled);d&&(a.value=[d.id])}}const y={register:i,unregister:r,selected:a,select:f,disabled:V(e,"disabled"),prev:()=>h(n.length-1),next:()=>h(1),isSelected:c=>a.value.includes(c),selectedClass:v(()=>e.selectedClass),items:v(()=>n),getItemIndex:c=>Jt(n,c)};return Ve(t,y),y}function Jt(e,t){const s=He(e,[t]);return s.length?e.findIndex(n=>n.id===s[0]):-1}function He(e,t){const s=[];for(let n=0;n<e.length;n++){const a=e[n];a.value!=null?t.find(l=>_t(l,a.value))!=null&&s.push(a.id):t.includes(n)&&s.push(a.id)}return s}function Qt(e,t){const s=[];for(let n=0;n<e.length;n++){const a=e[n];t.includes(a.id)&&s.push(a.value!=null?a.value:n)}return s}const Fe=Symbol.for("vuetify:v-btn-toggle");$t()({name:"VBtnToggle",props:Ut(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const{isSelected:n,next:a,prev:l,select:i,selected:r}=Xt(e,Fe);return z(()=>{var o;return u(Ft,{class:"v-btn-toggle"},{default:()=>[(o=s.default)==null?void 0:o.call(s,{isSelected:n,next:a,prev:l,select:i,selected:r})]})}),{next:a,prev:l,select:i}}});const Q=wt({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:s}=t;const{defaults:n,reset:a,root:l,scoped:i}=xt(e);return Ne(n,{reset:a,root:l,scoped:i}),()=>{var r;return(r=s.default)==null?void 0:r.call(s)}}});const Zt=["x-small","small","default","large","x-large"],ce=k({size:{type:[String,Number],default:"default"}},"size");function de(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return Ee(()=>{let s,n;return ee(Zt,e.size)?s=`${t}--size-${e.size}`:e.size&&(n={width:$(e.size),height:$(e.size)}),{sizeClasses:s,sizeStyles:n}})}const Kt=k({color:String,start:Boolean,end:Boolean,icon:te,...ce(),...O({tag:"i"}),...X()},"v-icon"),Z=B({name:"VIcon",props:Kt(),setup(e,t){let{attrs:s,slots:n}=t,a;n.default&&(a=v(()=>{var h,y;const c=(h=n.default)==null?void 0:h.call(n);if(!!c)return(y=It(c).filter(d=>d.children&&typeof d.children=="string")[0])==null?void 0:y.children}));const{themeClasses:l}=J(e),{iconData:i}=Et(a||e),{sizeClasses:r}=de(e),{textColorClasses:o,textColorStyles:f}=se(V(e,"color"));return z(()=>u(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",l.value,r.value,o.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[r.value?void 0:{fontSize:$(e.size),height:$(e.size),width:$(e.size)},f.value],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},null)),{}}});function en(e){const t=x(),s=x(!1);if(ie){const n=new IntersectionObserver(a=>{e==null||e(a,n),s.value=!!a.find(l=>l.isIntersecting)});Y(()=>{n.disconnect()}),A(t,(a,l)=>{l&&(n.unobserve(l),s.value=!1),a&&n.observe(a)},{flush:"post"})}return{intersectionRef:t,isIntersecting:s}}const tn=B({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...ce(),...O({tag:"div"}),...X()},setup(e,t){let{slots:s}=t;const n=20,a=2*Math.PI*n,l=x(),{themeClasses:i}=J(e),{sizeClasses:r,sizeStyles:o}=de(e),{textColorClasses:f,textColorStyles:h}=se(V(e,"color")),{textColorClasses:y,textColorStyles:c}=se(V(e,"bgColor")),{intersectionRef:d,isIntersecting:p}=en(),{resizeRef:m,contentRect:_}=Mt(),S=v(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),b=v(()=>Number(e.width)),I=v(()=>o.value?Number(e.size):_.value?_.value.width:Math.max(b.value,32)),T=v(()=>n/(1-b.value/I.value)*2),N=v(()=>b.value/I.value*T.value),P=v(()=>$((100-S.value)/100*a));return Lt(()=>{d.value=l.value,m.value=l.value}),z(()=>u(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":p.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},i.value,r.value,f.value],style:[o.value,h.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[u("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${T.value} ${T.value}`},[u("circle",{class:["v-progress-circular__underlay",y.value],style:c.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":N.value,"stroke-dasharray":a,"stroke-dashoffset":0},null),u("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":N.value,"stroke-dasharray":a,"stroke-dashoffset":P.value},null)]),s.default&&u("div",{class:"v-progress-circular__content"},[s.default({value:S.value})])]})),{}}});const ae=Symbol("rippleStop"),nn=80;function Ce(e,t){e.style.transform=t,e.style.webkitTransform=t}function K(e,t){e.style.opacity=`calc(${t} * var(--v-theme-overlay-multiplier))`}function le(e){return e.constructor.name==="TouchEvent"}function Ue(e){return e.constructor.name==="KeyboardEvent"}const sn=function(e,t){var s;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,l=0;if(!Ue(e)){const c=t.getBoundingClientRect(),d=le(e)?e.touches[e.touches.length-1]:e;a=d.clientX-c.left,l=d.clientY-c.top}let i=0,r=.3;(s=t._ripple)!=null&&s.circle?(r=.15,i=t.clientWidth/2,i=n.center?i:i+Math.sqrt((a-i)**2+(l-i)**2)/4):i=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-i*2)/2}px`,f=`${(t.clientHeight-i*2)/2}px`,h=n.center?o:`${a-i}px`,y=n.center?f:`${l-i}px`;return{radius:i,scale:r,x:h,y,centerX:o,centerY:f}},U={show(e,t){var s;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(t!=null&&(s=t._ripple)!=null&&s.enabled))return;const a=document.createElement("span"),l=document.createElement("span");a.appendChild(l),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:i,scale:r,x:o,y:f,centerX:h,centerY:y}=sn(e,t,n),c=`${i*2}px`;l.className="v-ripple__animation",l.style.width=c,l.style.height=c,t.appendChild(a);const d=window.getComputedStyle(t);d&&d.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),l.classList.add("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--visible"),Ce(l,`translate(${o}, ${f}) scale3d(${r},${r},${r})`),K(l,0),l.dataset.activated=String(performance.now()),setTimeout(()=>{l.classList.remove("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--in"),Ce(l,`translate(${h}, ${y}) scale3d(1,1,1)`),K(l,.08)},0)},hide(e){var t;if(!(e!=null&&(t=e._ripple)!=null&&t.enabled))return;const s=e.getElementsByClassName("v-ripple__animation");if(s.length===0)return;const n=s[s.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),l=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),K(n,0),setTimeout(()=>{e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode&&e.removeChild(n.parentNode)},300)},l)}};function qe(e){return typeof e>"u"||!!e}function W(e){const t={},s=e.currentTarget;if(!(!(s!=null&&s._ripple)||s._ripple.touched||e[ae])){if(e[ae]=!0,le(e))s._ripple.touched=!0,s._ripple.isTouch=!0;else if(s._ripple.isTouch)return;if(t.center=s._ripple.centered||Ue(e),s._ripple.class&&(t.class=s._ripple.class),le(e)){if(s._ripple.showTimerCommit)return;s._ripple.showTimerCommit=()=>{U.show(e,s,t)},s._ripple.showTimer=window.setTimeout(()=>{var n;s!=null&&(n=s._ripple)!=null&&n.showTimerCommit&&(s._ripple.showTimerCommit(),s._ripple.showTimerCommit=null)},nn)}else U.show(e,s,t)}}function ke(e){e[ae]=!0}function w(e){const t=e.currentTarget;if(!(!t||!t._ripple)){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{w(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),U.hide(t)}}function Ye(e){const t=e.currentTarget;!t||!t._ripple||(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let G=!1;function Xe(e){!G&&(e.keyCode===pe.enter||e.keyCode===pe.space)&&(G=!0,W(e))}function Je(e){G=!1,w(e)}function Qe(e){G&&(G=!1,w(e))}function Ze(e,t,s){var i;const{value:n,modifiers:a}=t,l=qe(n);if(l||U.hide(e),e._ripple=(i=e._ripple)!=null?i:{},e._ripple.enabled=l,e._ripple.centered=a.center,e._ripple.circle=a.circle,Nt(n)&&n.class&&(e._ripple.class=n.class),l&&!s){if(a.stop){e.addEventListener("touchstart",ke,{passive:!0}),e.addEventListener("mousedown",ke);return}e.addEventListener("touchstart",W,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",Ye,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",W),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",Xe),e.addEventListener("keyup",Je),e.addEventListener("blur",Qe),e.addEventListener("dragstart",w,{passive:!0})}else!l&&s&&Ke(e)}function Ke(e){e.removeEventListener("mousedown",W),e.removeEventListener("touchstart",W),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",Ye),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",Xe),e.removeEventListener("keyup",Je),e.removeEventListener("dragstart",w),e.removeEventListener("blur",Qe)}function an(e,t){Ze(e,t,!1)}function ln(e){delete e._ripple,Ke(e)}function rn(e,t){if(t.value===t.oldValue)return;const s=qe(t.oldValue);Ze(e,t,s)}const on={mounted:an,unmounted:ln,updated:rn},et=k({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function tt(e){return{dimensionStyles:v(()=>({height:$(e.height),maxHeight:$(e.maxHeight),maxWidth:$(e.maxWidth),minHeight:$(e.minHeight),minWidth:$(e.minWidth),width:$(e.width)}))}}const un=k({loading:Boolean},"loader");function cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{loaderClasses:v(()=>({[`${t}--loading`]:e.loading}))}}const $e={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},dn=k({location:String},"location");function vn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Vt();return{locationStyles:v(()=>{if(!e.location)return{};const{side:l,align:i}=jt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function r(f){return s?s(f):0}const o={};return l!=="center"&&(t?o[$e[l]]=`calc(100% - ${r(l)}px)`:o[l]=0),i!=="center"?t?o[$e[i]]=`calc(100% - ${r(i)}px)`:o[i]=0:(l==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),o})}}const fn=["static","relative","fixed","absolute","sticky"],mn=k({position:{type:String,validator:e=>fn.includes(e)}},"position");function gn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{positionClasses:v(()=>e.position?`${t}--${e.position}`:void 0)}}function zn(){var e,t;return(e=q("useRouter"))==null||(t=e.proxy)==null?void 0:t.$router}function hn(e,t){const s=Bt("RouterLink"),n=v(()=>!!(e.href||e.to)),a=v(()=>(n==null?void 0:n.value)||_e(t,"click")||_e(e,"click"));if(typeof s=="string")return{isLink:n,isClickable:a,href:V(e,"href")};const l=e.to?s.useLink(e):void 0;return{isLink:n,isClickable:a,route:l==null?void 0:l.route,navigate:l==null?void 0:l.navigate,isActive:l&&v(()=>{var i,r;return e.exact?(i=l.isExactActive)==null?void 0:i.value:(r=l.isActive)==null?void 0:r.value}),href:v(()=>e.to?l==null?void 0:l.route.value.href:e.href)}}const yn=k({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function bn(e,t){A(()=>{var s;return(s=e.isActive)==null?void 0:s.value},s=>{e.isLink.value&&s&&t&&Te(()=>{t(!0)})},{immediate:!0})}const Pn=B({name:"VBtn",directives:{Ripple:on},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:Fe},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:te,appendIcon:te,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...ze(),...We(),...Ae(),...et(),...je(),...qt(),...un(),...dn(),...mn(),...yn(),...ce(),...O({tag:"button"}),...X(),...De({variant:"elevated"})},emits:{"group:selected":e=>!0},setup(e,t){let{attrs:s,slots:n}=t;const{themeClasses:a}=J(e),{borderClasses:l}=Pe(e),{colorClasses:i,colorStyles:r,variantClasses:o}=Ht(e),{densityClasses:f}=Oe(e),{dimensionStyles:h}=tt(e),{elevationClasses:y}=Me(e),{loaderClasses:c}=cn(e),{locationStyles:d}=vn(e),{positionClasses:p}=gn(e),{roundedClasses:m}=Ge(e),{sizeClasses:_,sizeStyles:S}=de(e),b=Yt(e,e.symbol,!1),I=hn(e,s),T=v(()=>{var g;return e.active!==!1&&(e.active||((g=I.isActive)==null?void 0:g.value)||(b==null?void 0:b.isSelected.value))}),N=v(()=>(b==null?void 0:b.disabled.value)||e.disabled),P=v(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border));return bn(I,b==null?void 0:b.select),z(()=>{var g,C,E,j;const M=I.isLink.value?"a":e.tag,ge=!b||b.isSelected.value,ft=!!(e.prependIcon||n.prepend),mt=!!(e.appendIcon||n.append),he=!!(e.icon&&e.icon!==!0);return ne(u(M,{type:M==="a"?void 0:"button",class:["v-btn",b==null?void 0:b.selectedClass.value,{"v-btn--active":T.value,"v-btn--block":e.block,"v-btn--disabled":N.value,"v-btn--elevated":P.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},a.value,l.value,ge?i.value:void 0,f.value,y.value,c.value,p.value,m.value,_.value,o.value],style:[ge?r.value:void 0,h.value,d.value,S.value],disabled:N.value||void 0,href:I.href.value,onClick:H=>{var L;N.value||((L=I.navigate)==null||L.call(I,H),b==null||b.toggle())}},{default:()=>{var H;return[Dt(!0,"v-btn"),!e.icon&&ft&&u(Q,{key:"prepend",defaults:{VIcon:{icon:e.prependIcon}}},{default:()=>{var L;return[u("span",{class:"v-btn__prepend"},[(L=(g=n.prepend)==null?void 0:g.call(n))!=null?L:u(Z,null,null)])]}}),u("span",{class:"v-btn__content","data-no-activator":""},[u(Q,{key:"content",defaults:{VIcon:{icon:he?e.icon:void 0}}},{default:()=>{var L;return[(L=(C=n.default)==null?void 0:C.call(n))!=null?L:he&&u(Z,{key:"icon"},null)]}})]),!e.icon&&mt&&u(Q,{key:"append",defaults:{VIcon:{icon:e.appendIcon}}},{default:()=>{var L;return[u("span",{class:"v-btn__append"},[(L=(E=n.append)==null?void 0:E.call(n))!=null?L:u(Z,null,null)])]}}),!!e.loading&&u("span",{key:"loader",class:"v-btn__loader"},[(H=(j=n.loader)==null?void 0:j.call(n))!=null?H:u(tn,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Re("ripple"),!N.value&&e.ripple,null]])}),{}}}),pn=k({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),F=(e,t)=>{let{slots:s}=t;const{transition:n,...a}=e,{component:l=Rt,...i}=typeof n=="object"?n:{};return re(l,Tt(typeof n=="string"?{name:n}:i,a),s)};function An(){const e=x(!1);return Be(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:Ie(e)}}function _n(e){return{aspectStyles:v(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const Sn=B({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...et()},setup(e,t){let{slots:s}=t;const{aspectStyles:n}=_n(e),{dimensionStyles:a}=tt(e);return z(()=>{var l;return u("div",{class:"v-responsive",style:a.value},[u("div",{class:"v-responsive__sizer",style:n.value},null),(l=s.additional)==null?void 0:l.call(s),s.default&&u("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}});function Cn(e,t){if(!ie)return;const s=t.modifiers||{},n=t.value,{handler:a,options:l}=typeof n=="object"?n:{handler:n,options:{}},i=new IntersectionObserver(function(){var r;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const h=(r=e._observe)==null?void 0:r[t.instance.$.uid];if(!h)return;const y=o.some(c=>c.isIntersecting);a&&(!s.quiet||h.init)&&(!s.once||y||h.init)&&a(y,o,f),y&&s.once?nt(e,t):h.init=!0},l);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function nt(e,t){var s;const n=(s=e._observe)==null?void 0:s[t.instance.$.uid];!n||(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const kn={mounted:Cn,unmounted:nt},$n=kn,On=B({name:"VImg",directives:{intersect:$n},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...pn()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:s,slots:n}=t;const a=x(""),l=x(),i=x(e.eager?"loading":"idle"),r=x(),o=x(),f=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),h=v(()=>f.value.aspect||r.value/o.value||0);A(()=>e.src,()=>{y(i.value!=="idle")}),zt(()=>y());function y(g){if(!(e.eager&&g)&&!(ie&&!g&&!e.eager)){if(i.value="loading",f.value.lazySrc){const C=new Image;C.src=f.value.lazySrc,m(C,null)}!f.value.src||Te(()=>{var C,E;if(s("loadstart",((C=l.value)==null?void 0:C.currentSrc)||f.value.src),(E=l.value)!=null&&E.complete){if(l.value.naturalWidth||d(),i.value==="error")return;h.value||m(l.value,null),c()}else h.value||m(l.value),p()})}}function c(){var g;p(),i.value="loaded",s("load",((g=l.value)==null?void 0:g.currentSrc)||f.value.src)}function d(){var g;i.value="error",s("error",((g=l.value)==null?void 0:g.currentSrc)||f.value.src)}function p(){const g=l.value;g&&(a.value=g.currentSrc||g.src)}function m(g){let C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const E=()=>{const{naturalHeight:j,naturalWidth:M}=g;j||M?(r.value=M,o.value=j):!g.complete&&i.value==="loading"&&C!=null?setTimeout(E,C):(g.currentSrc.endsWith(".svg")||g.currentSrc.startsWith("data:image/svg+xml"))&&(r.value=1,o.value=1)};E()}const _=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),S=()=>{var g;if(!f.value.src||i.value==="idle")return null;const C=u("img",{class:["v-img__img",_.value],src:f.value.src,srcset:f.value.srcset,alt:"",sizes:e.sizes,ref:l,onLoad:c,onError:d},null),E=(g=n.sources)==null?void 0:g.call(n);return u(F,{transition:e.transition,appear:!0},{default:()=>[ne(E?u("picture",{class:"v-img__picture"},[E,C]):C,[[Pt,i.value==="loaded"]])]})},b=()=>u(F,{transition:e.transition},{default:()=>[f.value.lazySrc&&i.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",_.value],src:f.value.lazySrc,alt:""},null)]}),I=()=>n.placeholder?u(F,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!n.error)&&u("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,T=()=>n.error?u(F,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&u("div",{class:"v-img__error"},[n.error()])]}):null,N=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,P=x(!1);{const g=A(h,C=>{C&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{P.value=!0})}),g())})}return z(()=>ne(u(Sn,{class:["v-img",{"v-img--booting":!P.value}],style:{width:$(e.width==="auto"?r.value:e.width)},aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>u(Le,null,[u(S,null,null),u(b,null,null),u(N,null,null),u(I,null,null),u(T,null,null)]),default:n.default}),[[Re("intersect"),{handler:y,options:e.options},null,{once:!0}]])),{currentSrc:a,image:l,state:i,naturalWidth:r,naturalHeight:o}}});const ve=["sm","md","lg","xl","xxl"],st=(()=>ve.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),at=(()=>ve.reduce((e,t)=>(e["offset"+oe(t)]={type:[String,Number],default:null},e),{}))(),lt=(()=>ve.reduce((e,t)=>(e["order"+oe(t)]={type:[String,Number],default:null},e),{}))(),we={col:Object.keys(st),offset:Object.keys(at),order:Object.keys(lt)};function wn(e,t,s){let n=e;if(!(s==null||s===!1)){if(t){const a=t.replace(e,"");n+=`-${a}`}return e==="col"&&(n="v-"+n),e==="col"&&(s===""||s===!0)||(n+=`-${s}`),n.toLowerCase()}}const xn=["auto","start","end","center","baseline","stretch"],jn=B({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...st,offset:{type:[String,Number],default:null},...at,order:{type:[String,Number],default:null},...lt,alignSelf:{type:String,default:null,validator:e=>xn.includes(e)},...O()},setup(e,t){let{slots:s}=t;const n=v(()=>{const a=[];let l;for(l in we)we[l].forEach(r=>{const o=e[r],f=wn(l,r,o);f&&a.push(f)});const i=a.some(r=>r.startsWith("v-col-"));return a.push({"v-col":!i||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return re(e.tag,{class:n.value},(a=s.default)==null?void 0:a.call(s))}}}),In=["sm","md","lg","xl","xxl"],fe=["start","end","center"],it=["space-between","space-around","space-evenly"];function me(e,t){return In.reduce((s,n)=>(s[e+oe(n)]=t(),s),{})}const En=[...fe,"baseline","stretch"],rt=e=>En.includes(e),ot=me("align",()=>({type:String,default:null,validator:rt})),Ln=[...fe,...it],ut=e=>Ln.includes(e),ct=me("justify",()=>({type:String,default:null,validator:ut})),Nn=[...fe,...it,"stretch"],dt=e=>Nn.includes(e),vt=me("alignContent",()=>({type:String,default:null,validator:dt})),xe={align:Object.keys(ot),justify:Object.keys(ct),alignContent:Object.keys(vt)},Vn={align:"align",justify:"justify",alignContent:"align-content"};function Bn(e,t,s){let n=Vn[e];if(s!=null){if(t){const a=t.replace(e,"");n+=`-${a}`}return n+=`-${s}`,n.toLowerCase()}}const Mn=B({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:rt},...ot,justify:{type:String,default:null,validator:ut},...ct,alignContent:{type:String,default:null,validator:dt},...vt,...O()},setup(e,t){let{slots:s}=t;const n=v(()=>{const a=[];let l;for(l in xe)xe[l].forEach(i=>{const r=e[i],o=Bn(l,i,r);o&&a.push(o)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return re(e.tag,{class:["v-row",n.value]},(a=s.default)==null?void 0:a.call(s))}}});export{Z as A,Dt as B,et as C,yn as D,hn as E,tt as F,zn as G,Se as H,F as M,on as R,Pn as V,O as a,Rn as b,Ge as c,en as d,z as e,Xt as f,qt as g,Yt as h,An as i,Q as j,On as k,Mn as l,We as m,jn as n,Mt as o,ze as p,je as q,Pe as r,Me as s,De as t,se as u,Ae as v,ce as w,Ht as x,Oe as y,de as z};
