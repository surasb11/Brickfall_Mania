(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function $_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ch={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function kS(){if(Hg)return Oo;Hg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var Gg;function XS(){return Gg||(Gg=1,ch.exports=kS()),ch.exports}var Ct=XS(),uh={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function WS(){if(Vg)return se;Vg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function x(N,nt,gt){this.props=N,this.context=nt,this.refs=M,this.updater=gt||b}x.prototype.isReactComponent={},x.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=x.prototype;function L(N,nt,gt){this.props=N,this.context=nt,this.refs=M,this.updater=gt||b}var U=L.prototype=new O;U.constructor=L,C(U,x.prototype),U.isPureReactComponent=!0;var z=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function R(N,nt,gt){var Tt=gt.ref;return{$$typeof:o,type:N,key:nt,ref:Tt!==void 0?Tt:null,props:gt}}function w(N,nt){return R(N.type,nt,N.props)}function k(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function st(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(gt){return nt[gt]})}var at=/\/+/g;function dt(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?st(""+N.key):nt.toString(36)}function ut(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(F,F):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function I(N,nt,gt,Tt,Ft){var et=typeof N;(et==="undefined"||et==="boolean")&&(N=null);var ct=!1;if(N===null)ct=!0;else switch(et){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(N.$$typeof){case o:case e:ct=!0;break;case _:return ct=N._init,I(ct(N._payload),nt,gt,Tt,Ft)}}if(ct)return Ft=Ft(N),ct=Tt===""?"."+dt(N,0):Tt,z(Ft)?(gt="",ct!=null&&(gt=ct.replace(at,"$&/")+"/"),I(Ft,nt,gt,"",function(Ht){return Ht})):Ft!=null&&(k(Ft)&&(Ft=w(Ft,gt+(Ft.key==null||N&&N.key===Ft.key?"":(""+Ft.key).replace(at,"$&/")+"/")+ct)),nt.push(Ft)),1;ct=0;var Dt=Tt===""?".":Tt+":";if(z(N))for(var kt=0;kt<N.length;kt++)Tt=N[kt],et=Dt+dt(Tt,kt),ct+=I(Tt,nt,gt,et,Ft);else if(kt=y(N),typeof kt=="function")for(N=kt.call(N),kt=0;!(Tt=N.next()).done;)Tt=Tt.value,et=Dt+dt(Tt,kt++),ct+=I(Tt,nt,gt,et,Ft);else if(et==="object"){if(typeof N.then=="function")return I(ut(N),nt,gt,Tt,Ft);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ct}function H(N,nt,gt){if(N==null)return N;var Tt=[],Ft=0;return I(N,Tt,"","",function(et){return nt.call(gt,et,Ft++)}),Tt}function it(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(gt){(N._status===0||N._status===-1)&&(N._status=1,N._result=gt)},function(gt){(N._status===0||N._status===-1)&&(N._status=2,N._result=gt)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var Mt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},xt={map:H,forEach:function(N,nt,gt){H(N,function(){nt.apply(this,arguments)},gt)},count:function(N){var nt=0;return H(N,function(){nt++}),nt},toArray:function(N){return H(N,function(nt){return nt})||[]},only:function(N){if(!k(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return se.Activity=g,se.Children=xt,se.Component=x,se.Fragment=i,se.Profiler=l,se.PureComponent=L,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,se.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},se.cache=function(N){return function(){return N.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(N,nt,gt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Tt=C({},N.props),Ft=N.key;if(nt!=null)for(et in nt.key!==void 0&&(Ft=""+nt.key),nt)!Z.call(nt,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&nt.ref===void 0||(Tt[et]=nt[et]);var et=arguments.length-2;if(et===1)Tt.children=gt;else if(1<et){for(var ct=Array(et),Dt=0;Dt<et;Dt++)ct[Dt]=arguments[Dt+2];Tt.children=ct}return R(N.type,Ft,Tt)},se.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},se.createElement=function(N,nt,gt){var Tt,Ft={},et=null;if(nt!=null)for(Tt in nt.key!==void 0&&(et=""+nt.key),nt)Z.call(nt,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Ft[Tt]=nt[Tt]);var ct=arguments.length-2;if(ct===1)Ft.children=gt;else if(1<ct){for(var Dt=Array(ct),kt=0;kt<ct;kt++)Dt[kt]=arguments[kt+2];Ft.children=Dt}if(N&&N.defaultProps)for(Tt in ct=N.defaultProps,ct)Ft[Tt]===void 0&&(Ft[Tt]=ct[Tt]);return R(N,et,Ft)},se.createRef=function(){return{current:null}},se.forwardRef=function(N){return{$$typeof:d,render:N}},se.isValidElement=k,se.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:it}},se.memo=function(N,nt){return{$$typeof:p,type:N,compare:nt===void 0?null:nt}},se.startTransition=function(N){var nt=P.T,gt={};P.T=gt;try{var Tt=N(),Ft=P.S;Ft!==null&&Ft(gt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(F,Mt)}catch(et){Mt(et)}finally{nt!==null&&gt.types!==null&&(nt.types=gt.types),P.T=nt}},se.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},se.use=function(N){return P.H.use(N)},se.useActionState=function(N,nt,gt){return P.H.useActionState(N,nt,gt)},se.useCallback=function(N,nt){return P.H.useCallback(N,nt)},se.useContext=function(N){return P.H.useContext(N)},se.useDebugValue=function(){},se.useDeferredValue=function(N,nt){return P.H.useDeferredValue(N,nt)},se.useEffect=function(N,nt){return P.H.useEffect(N,nt)},se.useEffectEvent=function(N){return P.H.useEffectEvent(N)},se.useId=function(){return P.H.useId()},se.useImperativeHandle=function(N,nt,gt){return P.H.useImperativeHandle(N,nt,gt)},se.useInsertionEffect=function(N,nt){return P.H.useInsertionEffect(N,nt)},se.useLayoutEffect=function(N,nt){return P.H.useLayoutEffect(N,nt)},se.useMemo=function(N,nt){return P.H.useMemo(N,nt)},se.useOptimistic=function(N,nt){return P.H.useOptimistic(N,nt)},se.useReducer=function(N,nt,gt){return P.H.useReducer(N,nt,gt)},se.useRef=function(N){return P.H.useRef(N)},se.useState=function(N){return P.H.useState(N)},se.useSyncExternalStore=function(N,nt,gt){return P.H.useSyncExternalStore(N,nt,gt)},se.useTransition=function(){return P.H.useTransition()},se.version="19.2.4",se}var kg;function jd(){return kg||(kg=1,uh.exports=WS()),uh.exports}var on=jd();const qS=$_(on);var fh={exports:{}},Po={},hh={exports:{}},dh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function YS(){return Xg||(Xg=1,(function(o){function e(I,H){var it=I.length;I.push(H);t:for(;0<it;){var Mt=it-1>>>1,xt=I[Mt];if(0<l(xt,H))I[Mt]=H,I[it]=xt,it=Mt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var H=I[0],it=I.pop();if(it!==H){I[0]=it;t:for(var Mt=0,xt=I.length,N=xt>>>1;Mt<N;){var nt=2*(Mt+1)-1,gt=I[nt],Tt=nt+1,Ft=I[Tt];if(0>l(gt,it))Tt<xt&&0>l(Ft,gt)?(I[Mt]=Ft,I[Tt]=it,Mt=Tt):(I[Mt]=gt,I[nt]=it,Mt=nt);else if(Tt<xt&&0>l(Ft,it))I[Mt]=Ft,I[Tt]=it,Mt=Tt;else break t}}return H}function l(I,H){var it=I.sortIndex-H.sortIndex;return it!==0?it:I.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,S=3,y=!1,b=!1,C=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=I)s(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function z(I){if(C=!1,U(I),!b)if(i(m)!==null)b=!0,F||(F=!0,st());else{var H=i(p);H!==null&&ut(z,H.startTime-I)}}var F=!1,P=-1,Z=5,R=-1;function w(){return M?!0:!(o.unstable_now()-R<Z)}function k(){if(M=!1,F){var I=o.unstable_now();R=I;var H=!0;try{t:{b=!1,C&&(C=!1,O(P),P=-1),y=!0;var it=S;try{e:{for(U(I),g=i(m);g!==null&&!(g.expirationTime>I&&w());){var Mt=g.callback;if(typeof Mt=="function"){g.callback=null,S=g.priorityLevel;var xt=Mt(g.expirationTime<=I);if(I=o.unstable_now(),typeof xt=="function"){g.callback=xt,U(I),H=!0;break e}g===i(m)&&s(m),U(I)}else s(m);g=i(m)}if(g!==null)H=!0;else{var N=i(p);N!==null&&ut(z,N.startTime-I),H=!1}}break t}finally{g=null,S=it,y=!1}H=void 0}}finally{H?st():F=!1}}}var st;if(typeof L=="function")st=function(){L(k)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,dt=at.port2;at.port1.onmessage=k,st=function(){dt.postMessage(null)}}else st=function(){x(k,0)};function ut(I,H){P=x(function(){I(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(I){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var it=S;S=H;try{return I()}finally{S=it}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var it=S;S=I;try{return H()}finally{S=it}},o.unstable_scheduleCallback=function(I,H,it){var Mt=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?Mt+it:Mt):it=Mt,I){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=it+xt,I={id:_++,callback:H,priorityLevel:I,startTime:it,expirationTime:xt,sortIndex:-1},it>Mt?(I.sortIndex=it,e(p,I),i(m)===null&&I===i(p)&&(C?(O(P),P=-1):C=!0,ut(z,it-Mt))):(I.sortIndex=xt,e(m,I),b||y||(b=!0,F||(F=!0,st()))),I},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(I){var H=S;return function(){var it=S;S=H;try{return I.apply(this,arguments)}finally{S=it}}}})(dh)),dh}var Wg;function jS(){return Wg||(Wg=1,hh.exports=YS()),hh.exports}var ph={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function ZS(){if(qg)return Ln;qg=1;var o=jd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Ln.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ln.version="19.2.4",Ln}var Yg;function KS(){if(Yg)return ph.exports;Yg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ph.exports=ZS(),ph.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function QS(){if(jg)return Po;jg=1;var o=jS(),e=jd(),i=KS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,r=f;break}if(T===r){v=!0,r=u,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,r=u;break}if(T===r){v=!0,r=f,a=u;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case F:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case L:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:dt(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return dt(t(n))}catch{}}return null}var ut=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},Mt=[],xt=-1;function N(t){return{current:t}}function nt(t){0>xt||(t.current=Mt[xt],Mt[xt]=null,xt--)}function gt(t,n){xt++,Mt[xt]=t.current,t.current=n}var Tt=N(null),Ft=N(null),et=N(null),ct=N(null);function Dt(t,n){switch(gt(et,n),gt(Ft,t),gt(Tt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?cg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=cg(n),t=ug(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nt(Tt),gt(Tt,t)}function kt(){nt(Tt),nt(Ft),nt(et)}function Ht(t){t.memoizedState!==null&&gt(ct,t);var n=Tt.current,a=ug(n,t.type);n!==a&&(gt(Ft,t),gt(Tt,a))}function pe(t){Ft.current===t&&(nt(Tt),nt(Ft)),ct.current===t&&(nt(ct),Do._currentValue=it)}var $e,ve;function me(t){if($e===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$e=n&&n[1]||"",ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+t+ve}var we=!1;function re(t,n){if(!t||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var tt=ot}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(ot){tt=ot}t.call(mt.prototype)}}else{try{throw Error()}catch(ot){tt=ot}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&tt&&typeof ot.stack=="string")return[ot.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var B=v.split(`
`),Q=T.split(`
`);for(u=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(r===B.length||u===Q.length)for(r=B.length-1,u=Q.length-1;1<=r&&0<=u&&B[r]!==Q[u];)u--;for(;1<=r&&0<=u;r--,u--)if(B[r]!==Q[u]){if(r!==1||u!==1)do if(r--,u--,0>u||B[r]!==Q[u]){var ft=`
`+B[r].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=r&&0<=u);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?me(a):""}function tn(t,n){switch(t.tag){case 26:case 27:case 5:return me(t.type);case 16:return me("Lazy");case 13:return t.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return re(t.type,!1);case 11:return re(t.type.render,!1);case 1:return re(t.type,!0);case 31:return me("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=tn(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ze=Object.prototype.hasOwnProperty,Ee=o.unstable_scheduleCallback,Oe=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,D=o.unstable_requestPaint,E=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,Xt=o.log,ee=o.unstable_setDisableYieldValue,yt=null,Et=null;function zt(t){if(typeof Xt=="function"&&ee(t),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(yt,t)}catch{}}var Pt=Math.clz32?Math.clz32:X,wt=Math.log,le=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(wt(t)/le|0)|0}var Nt=256,bt=262144,It=4194304;function St(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _t(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?u=St(r):(v&=T,v!==0?u=St(v):a||(a=T&~t,a!==0&&(u=St(a))))):(T=r&~f,T!==0?u=St(T):v!==0?u=St(v):a||(a=r&~t,a!==0&&(u=St(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function At(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var t=It;return It<<=1,(It&62914560)===0&&(It=4194304),t}function be(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Si(t,n,a,r,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,Q=t.hiddenUpdates;for(a=v&~a;0<a;){var ft=31-Pt(a),mt=1<<ft;T[ft]=0,B[ft]=-1;var tt=Q[ft];if(tt!==null)for(Q[ft]=null,ft=0;ft<tt.length;ft++){var ot=tt[ft];ot!==null&&(ot.lane&=-536870913)}a&=~mt}r!==0&&el(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function el(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Pt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Gr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Pt(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Ps(t,n){var a=n&-n;return a=(a&42)!==0?1:Vr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Vr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Is(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function kr(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Lg(t.type))}function Li(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var si=Math.random().toString(36).slice(2),ln="__reactFiber$"+si,Mn="__reactProps$"+si,Mi="__reactContainer$"+si,zs="__reactEvents$"+si,Bs="__reactListeners$"+si,nl="__reactHandles$"+si,Xr="__reactResources$"+si,as="__reactMarker$"+si;function Wr(t){delete t[ln],delete t[Mn],delete t[zs],delete t[Bs],delete t[nl]}function Ea(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Mi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=_g(t);t!==null;){if(a=t[ln])return a;t=_g(t)}return n}t=a,a=t.parentNode}return null}function ba(t){if(t=t[ln]||t[Mi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ss(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ta(t){var n=t[Xr];return n||(n=t[Xr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(t){t[as]=!0}var q=new Set,rt={};function $(t,n){j(t,n),j(t+"Capture",n)}function j(t,n){for(rt[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},Lt={};function Gt(t){return Ze.call(Lt,t)?!0:Ze.call(Bt,t)?!1:Ut.test(t)?Lt[t]=!0:(Bt[t]=!0,!1)}function Wt(t,n,a){if(Gt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Jt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qt(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function $t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function De(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function We(t){if(!t._valueTracker){var n=De(t)?"checked":"value";t._valueTracker=Ke(t,n,""+t[n])}}function Pe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=De(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ue=/[\n"\\]/g;function ae(t){return t.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(t,n,a,r,u,f,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$t(n)):t.value!==""+$t(n)&&(t.value=""+$t(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?En(t,v,$t(n)):a!=null?En(t,v,$t(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+$t(T):t.removeAttribute("name")}function Yi(t,n,a,r,u,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){We(t);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=T?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),We(t)}function En(t,n,a){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ri(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ze(t,n,a){if(n!=null&&(n=""+$t(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$t(a):""}function bn(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ut(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=$t(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),We(t)}function pn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function An(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Tn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Fs(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&An(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&An(t,f,n[f])}function yi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(t){return Hv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var su=null;function ru(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hs=null,Gs=null;function lp(t){var n=ba(t);if(n&&(t=n.stateNode)){var a=t[Mn]||null;t:switch(t=n.stateNode,n.type){case"input":if(yn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ae(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[Mn]||null;if(!u)throw Error(s(90));yn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Pe(r)}break t;case"textarea":ze(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ri(t,!!a.multiple,n,!1)}}}var ou=!1;function cp(t,n,a){if(ou)return t(n,a);ou=!0;try{var r=t(n);return r}finally{if(ou=!1,(Hs!==null||Gs!==null)&&(Xl(),Hs&&(n=Hs,t=Gs,Gs=Hs=null,lp(n),t)))for(n=0;n<t.length;n++)lp(t[n])}}function qr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Mn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(Zi)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{lu=!1}var Aa=null,cu=null,al=null;function up(){if(al)return al;var t,n=cu,a=n.length,r,u="value"in Aa?Aa.value:Aa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return al=u.slice(t,1<r?1-r:void 0)}function sl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function fp(){return!1}function Hn(t){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:fp,this.isPropagationStopped=fp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Hn(rs),jr=g({},rs,{view:0,detail:0}),Gv=Hn(jr),uu,fu,Zr,ll=g({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zr&&(Zr&&t.type==="mousemove"?(uu=t.screenX-Zr.screenX,fu=t.screenY-Zr.screenY):fu=uu=0,Zr=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),hp=Hn(ll),Vv=g({},ll,{dataTransfer:0}),kv=Hn(Vv),Xv=g({},jr,{relatedTarget:0}),hu=Hn(Xv),Wv=g({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),qv=Hn(Wv),Yv=g({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jv=Hn(Yv),Zv=g({},rs,{data:0}),dp=Hn(Zv),Kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $v(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Jv[t])?!!n[t]:!1}function du(){return $v}var tx=g({},jr,{key:function(t){if(t.key){var n=Kv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ex=Hn(tx),nx=g({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=Hn(nx),ix=g({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),ax=Hn(ix),sx=g({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),rx=Hn(sx),ox=g({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lx=Hn(ox),cx=g({},rs,{newState:0,oldState:0}),ux=Hn(cx),fx=[9,13,27,32],pu=Zi&&"CompositionEvent"in window,Kr=null;Zi&&"documentMode"in document&&(Kr=document.documentMode);var hx=Zi&&"TextEvent"in window&&!Kr,mp=Zi&&(!pu||Kr&&8<Kr&&11>=Kr),gp=" ",_p=!1;function vp(t,n){switch(t){case"keyup":return fx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function dx(t,n){switch(t){case"compositionend":return xp(n);case"keypress":return n.which!==32?null:(_p=!0,gp);case"textInput":return t=n.data,t===gp&&_p?null:t;default:return null}}function px(t,n){if(Vs)return t==="compositionend"||!pu&&vp(t,n)?(t=up(),al=cu=Aa=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return mp&&n.locale!=="ko"?null:n.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!mx[t.type]:n==="textarea"}function Mp(t,n,a,r){Hs?Gs?Gs.push(r):Gs=[r]:Hs=r,n=Ql(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Qr=null,Jr=null;function gx(t){ig(t,0)}function cl(t){var n=ss(t);if(Pe(n))return t}function yp(t,n){if(t==="change")return n}var Ep=!1;if(Zi){var mu;if(Zi){var gu="oninput"in document;if(!gu){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),gu=typeof bp.oninput=="function"}mu=gu}else mu=!1;Ep=mu&&(!document.documentMode||9<document.documentMode)}function Tp(){Qr&&(Qr.detachEvent("onpropertychange",Ap),Jr=Qr=null)}function Ap(t){if(t.propertyName==="value"&&cl(Jr)){var n=[];Mp(n,Jr,t,ru(t)),cp(gx,n)}}function _x(t,n,a){t==="focusin"?(Tp(),Qr=n,Jr=a,Qr.attachEvent("onpropertychange",Ap)):t==="focusout"&&Tp()}function vx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(Jr)}function xx(t,n){if(t==="click")return cl(n)}function Sx(t,n){if(t==="input"||t==="change")return cl(n)}function Mx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:Mx;function $r(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Ze.call(n,u)||!jn(t[u],n[u]))return!1}return!0}function Rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cp(t,n){var a=Rp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Rp(a)}}function wp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?wp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Dp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kt(t.document)}return n}function _u(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var yx=Zi&&"documentMode"in document&&11>=document.documentMode,ks=null,vu=null,to=null,xu=!1;function Up(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xu||ks==null||ks!==Kt(r)||(r=ks,"selectionStart"in r&&_u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),to&&$r(to,r)||(to=r,r=Ql(vu,"onSelect"),0<r.length&&(n=new ol("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ks)))}function os(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Xs={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionrun:os("Transition","TransitionRun"),transitionstart:os("Transition","TransitionStart"),transitioncancel:os("Transition","TransitionCancel"),transitionend:os("Transition","TransitionEnd")},Su={},Np={};Zi&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function ls(t){if(Su[t])return Su[t];if(!Xs[t])return t;var n=Xs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Np)return Su[t]=n[a];return t}var Lp=ls("animationend"),Op=ls("animationiteration"),Pp=ls("animationstart"),Ex=ls("transitionrun"),bx=ls("transitionstart"),Tx=ls("transitioncancel"),Ip=ls("transitionend"),zp=new Map,Mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mu.push("scrollEnd");function Ei(t,n){zp.set(t,n),$(n,[t])}var ul=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],Ws=0,yu=0;function fl(){for(var t=Ws,n=yu=Ws=0;n<t;){var a=oi[n];oi[n++]=null;var r=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&Bp(a,u,f)}}function hl(t,n,a,r){oi[Ws++]=t,oi[Ws++]=n,oi[Ws++]=a,oi[Ws++]=r,yu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Eu(t,n,a,r){return hl(t,n,a,r),dl(t)}function cs(t,n){return hl(t,null,null,n),dl(t)}function Bp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Pt(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function dl(t){if(50<Eo)throw Eo=0,Lf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var qs={};function Ax(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,r){return new Ax(t,n,a,r)}function bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ki(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Fp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function pl(t,n,a,r,u,f){var v=0;if(r=t,typeof t=="function")bu(t)&&(v=1);else if(typeof t=="string")v=US(t,a,Tt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case R:return t=Zn(31,a,n,u),t.elementType=R,t.lanes=f,t;case C:return us(a.children,u,f,n);case M:v=8,u|=24;break;case x:return t=Zn(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case z:return t=Zn(13,a,n,u),t.elementType=z,t.lanes=f,t;case F:return t=Zn(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:v=10;break t;case O:v=9;break t;case U:v=11;break t;case P:v=14;break t;case Z:v=16,r=null;break t}v=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Zn(v,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function us(t,n,a,r){return t=Zn(7,t,r,n),t.lanes=a,t}function Tu(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function Hp(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function Au(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Gp=new WeakMap;function li(t,n){if(typeof t=="object"&&t!==null){var a=Gp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},Gp.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Ys=[],js=0,ml=null,eo=0,ci=[],ui=0,Ra=null,Oi=1,Pi="";function Qi(t,n){Ys[js++]=eo,Ys[js++]=ml,ml=t,eo=n}function Vp(t,n,a){ci[ui++]=Oi,ci[ui++]=Pi,ci[ui++]=Ra,Ra=t;var r=Oi;t=Pi;var u=32-Pt(r)-1;r&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Oi=1<<32-Pt(n)+u|a<<u|r,Pi=f+t}else Oi=1<<f|a<<u|r,Pi=t}function Ru(t){t.return!==null&&(Qi(t,1),Vp(t,1,0))}function Cu(t){for(;t===ml;)ml=Ys[--js],Ys[js]=null,eo=Ys[--js],Ys[js]=null;for(;t===Ra;)Ra=ci[--ui],ci[ui]=null,Pi=ci[--ui],ci[ui]=null,Oi=ci[--ui],ci[ui]=null}function kp(t,n){ci[ui++]=Oi,ci[ui++]=Pi,ci[ui++]=Ra,Oi=n.id,Pi=n.overflow,Ra=t}var Rn=null,qe=null,Me=!1,Ca=null,fi=!1,wu=Error(s(519));function wa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(li(n,t)),wu}function Xp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[ln]=t,n[Mn]=r,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)_e(To[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Yi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),bn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||og(n.textContent,a)?(r.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),r.onScroll!=null&&_e("scroll",n),r.onScrollEnd!=null&&_e("scrollend",n),r.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||wa(t,!0)}function Wp(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Rn=Rn.return}}function Zs(t){if(t!==Rn)return!1;if(!Me)return Wp(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||jf(t.type,t.memoizedProps)),a=!a),a&&qe&&wa(t),Wp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qe=gg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qe=gg(t)}else n===27?(n=qe,ka(t.type)?(t=$f,$f=null,qe=t):qe=n):qe=Rn?di(t.stateNode.nextSibling):null;return!0}function fs(){qe=Rn=null,Me=!1}function Du(){var t=Ca;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),Ca=null),t}function no(t){Ca===null?Ca=[t]:Ca.push(t)}var Uu=N(null),hs=null,Ji=null;function Da(t,n,a){gt(Uu,n._currentValue),n._currentValue=a}function $i(t){t._currentValue=Uu.current,nt(Uu)}function Nu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Lu(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Nu(f.return,a,t),r||(v=null);break t}f=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Nu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Ks(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=u.type;jn(u.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(u===ct.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}u=u.return}t!==null&&Lu(n,t,a,r),n.flags|=262144}function gl(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ds(t){hs=t,Ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return qp(hs,t)}function _l(t,n){return hs===null&&ds(t),qp(t,n)}function qp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(t===null)throw Error(s(308));Ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ji=Ji.next=n;return a}var Rx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Cx=o.unstable_scheduleCallback,wx=o.unstable_NormalPriority,cn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new Rx,data:new Map,refCount:0}}function io(t){t.refCount--,t.refCount===0&&Cx(wx,function(){t.controller.abort()})}var ao=null,Pu=0,Qs=0,Js=null;function Dx(t,n){if(ao===null){var a=ao=[];Pu=0,Qs=Ff(),Js={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Pu++,n.then(Yp,Yp),n}function Yp(){if(--Pu===0&&ao!==null){Js!==null&&(Js.status="fulfilled");var t=ao;ao=null,Qs=0,Js=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ux(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var jp=I.S;I.S=function(t,n){U0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Dx(t,n),jp!==null&&jp(t,n)};var ps=N(null);function Iu(){var t=ps.current;return t!==null?t:Xe.pooledCache}function vl(t,n){n===null?gt(ps,ps.current):gt(ps,n.pool)}function Zp(){var t=Iu();return t===null?null:{parent:cn._currentValue,pool:t}}var $s=Error(s(460)),zu=Error(s(474)),xl=Error(s(542)),Sl={then:function(){}};function Kp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Qp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$p(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$p(t),t}throw gs=n,$s}}function ms(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gs=a,$s):a}}var gs=null;function Jp(){if(gs===null)throw Error(s(459));var t=gs;return gs=null,t}function $p(t){if(t===$s||t===xl)throw Error(s(483))}var tr=null,so=0;function Ml(t){var n=so;return so+=1,tr===null&&(tr=[]),Qp(tr,t,n)}function ro(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function yl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function tm(t){function n(Y,V){if(t){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function r(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function u(Y,V){return Y=Ki(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=67108866,V):K):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function v(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,V,K,pt){return V===null||V.tag!==6?(V=Tu(K,Y.mode,pt),V.return=Y,V):(V=u(V,K),V.return=Y,V)}function B(Y,V,K,pt){var Qt=K.type;return Qt===C?ft(Y,V,K.props.children,pt,K.key):V!==null&&(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===Z&&ms(Qt)===V.type)?(V=u(V,K.props),ro(V,K),V.return=Y,V):(V=pl(K.type,K.key,K.props,null,Y.mode,pt),ro(V,K),V.return=Y,V)}function Q(Y,V,K,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Au(K,Y.mode,pt),V.return=Y,V):(V=u(V,K.children||[]),V.return=Y,V)}function ft(Y,V,K,pt,Qt){return V===null||V.tag!==7?(V=us(K,Y.mode,pt,Qt),V.return=Y,V):(V=u(V,K),V.return=Y,V)}function mt(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Tu(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return K=pl(V.type,V.key,V.props,null,Y.mode,K),ro(K,V),K.return=Y,K;case b:return V=Au(V,Y.mode,K),V.return=Y,V;case Z:return V=ms(V),mt(Y,V,K)}if(ut(V)||st(V))return V=us(V,Y.mode,K,null),V.return=Y,V;if(typeof V.then=="function")return mt(Y,Ml(V),K);if(V.$$typeof===L)return mt(Y,_l(Y,V),K);yl(Y,V)}return null}function tt(Y,V,K,pt){var Qt=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Qt!==null?null:T(Y,V,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case y:return K.key===Qt?B(Y,V,K,pt):null;case b:return K.key===Qt?Q(Y,V,K,pt):null;case Z:return K=ms(K),tt(Y,V,K,pt)}if(ut(K)||st(K))return Qt!==null?null:ft(Y,V,K,pt,null);if(typeof K.then=="function")return tt(Y,V,Ml(K),pt);if(K.$$typeof===L)return tt(Y,V,_l(Y,K),pt);yl(Y,K)}return null}function ot(Y,V,K,pt,Qt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(K)||null,T(V,Y,""+pt,Qt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case y:return Y=Y.get(pt.key===null?K:pt.key)||null,B(V,Y,pt,Qt);case b:return Y=Y.get(pt.key===null?K:pt.key)||null,Q(V,Y,pt,Qt);case Z:return pt=ms(pt),ot(Y,V,K,pt,Qt)}if(ut(pt)||st(pt))return Y=Y.get(K)||null,ft(V,Y,pt,Qt,null);if(typeof pt.then=="function")return ot(Y,V,K,Ml(pt),Qt);if(pt.$$typeof===L)return ot(Y,V,K,_l(V,pt),Qt);yl(V,pt)}return null}function Vt(Y,V,K,pt){for(var Qt=null,Ae=null,jt=V,ce=V=0,Se=null;jt!==null&&ce<K.length;ce++){jt.index>ce?(Se=jt,jt=null):Se=jt.sibling;var Re=tt(Y,jt,K[ce],pt);if(Re===null){jt===null&&(jt=Se);break}t&&jt&&Re.alternate===null&&n(Y,jt),V=f(Re,V,ce),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re,jt=Se}if(ce===K.length)return a(Y,jt),Me&&Qi(Y,ce),Qt;if(jt===null){for(;ce<K.length;ce++)jt=mt(Y,K[ce],pt),jt!==null&&(V=f(jt,V,ce),Ae===null?Qt=jt:Ae.sibling=jt,Ae=jt);return Me&&Qi(Y,ce),Qt}for(jt=r(jt);ce<K.length;ce++)Se=ot(jt,Y,ce,K[ce],pt),Se!==null&&(t&&Se.alternate!==null&&jt.delete(Se.key===null?ce:Se.key),V=f(Se,V,ce),Ae===null?Qt=Se:Ae.sibling=Se,Ae=Se);return t&&jt.forEach(function(ja){return n(Y,ja)}),Me&&Qi(Y,ce),Qt}function te(Y,V,K,pt){if(K==null)throw Error(s(151));for(var Qt=null,Ae=null,jt=V,ce=V=0,Se=null,Re=K.next();jt!==null&&!Re.done;ce++,Re=K.next()){jt.index>ce?(Se=jt,jt=null):Se=jt.sibling;var ja=tt(Y,jt,Re.value,pt);if(ja===null){jt===null&&(jt=Se);break}t&&jt&&ja.alternate===null&&n(Y,jt),V=f(ja,V,ce),Ae===null?Qt=ja:Ae.sibling=ja,Ae=ja,jt=Se}if(Re.done)return a(Y,jt),Me&&Qi(Y,ce),Qt;if(jt===null){for(;!Re.done;ce++,Re=K.next())Re=mt(Y,Re.value,pt),Re!==null&&(V=f(Re,V,ce),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return Me&&Qi(Y,ce),Qt}for(jt=r(jt);!Re.done;ce++,Re=K.next())Re=ot(jt,Y,ce,Re.value,pt),Re!==null&&(t&&Re.alternate!==null&&jt.delete(Re.key===null?ce:Re.key),V=f(Re,V,ce),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return t&&jt.forEach(function(VS){return n(Y,VS)}),Me&&Qi(Y,ce),Qt}function ke(Y,V,K,pt){if(typeof K=="object"&&K!==null&&K.type===C&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case y:t:{for(var Qt=K.key;V!==null;){if(V.key===Qt){if(Qt=K.type,Qt===C){if(V.tag===7){a(Y,V.sibling),pt=u(V,K.props.children),pt.return=Y,Y=pt;break t}}else if(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===Z&&ms(Qt)===V.type){a(Y,V.sibling),pt=u(V,K.props),ro(pt,K),pt.return=Y,Y=pt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}K.type===C?(pt=us(K.props.children,Y.mode,pt,K.key),pt.return=Y,Y=pt):(pt=pl(K.type,K.key,K.props,null,Y.mode,pt),ro(pt,K),pt.return=Y,Y=pt)}return v(Y);case b:t:{for(Qt=K.key;V!==null;){if(V.key===Qt)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(Y,V.sibling),pt=u(V,K.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}pt=Au(K,Y.mode,pt),pt.return=Y,Y=pt}return v(Y);case Z:return K=ms(K),ke(Y,V,K,pt)}if(ut(K))return Vt(Y,V,K,pt);if(st(K)){if(Qt=st(K),typeof Qt!="function")throw Error(s(150));return K=Qt.call(K),te(Y,V,K,pt)}if(typeof K.then=="function")return ke(Y,V,Ml(K),pt);if(K.$$typeof===L)return ke(Y,V,_l(Y,K),pt);yl(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(Y,V.sibling),pt=u(V,K),pt.return=Y,Y=pt):(a(Y,V),pt=Tu(K,Y.mode,pt),pt.return=Y,Y=pt),v(Y)):a(Y,V)}return function(Y,V,K,pt){try{so=0;var Qt=ke(Y,V,K,pt);return tr=null,Qt}catch(jt){if(jt===$s||jt===xl)throw jt;var Ae=Zn(29,jt,null,Y.mode);return Ae.lanes=pt,Ae.return=Y,Ae}finally{}}}var _s=tm(!0),em=tm(!1),Ua=!1;function Bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Na(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function La(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ne&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=dl(t),Bp(t,null,a),n}return hl(t,r,n,a),dl(t)}function oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Gr(t,a)}}function Hu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Gu=!1;function lo(){if(Gu){var t=Js;if(t!==null)throw t}}function co(t,n,a,r){Gu=!1;var u=t.updateQueue;Ua=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,Q=B.next;B.next=null,v===null?f=Q:v.next=Q,v=B;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,T=ft.lastBaseUpdate,T!==v&&(T===null?ft.firstBaseUpdate=Q:T.next=Q,ft.lastBaseUpdate=B))}if(f!==null){var mt=u.baseState;v=0,ft=Q=B=null,T=f;do{var tt=T.lane&-536870913,ot=tt!==T.lane;if(ot?(xe&tt)===tt:(r&tt)===tt){tt!==0&&tt===Qs&&(Gu=!0),ft!==null&&(ft=ft.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Vt=t,te=T;tt=n;var ke=a;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){mt=Vt.call(ke,mt,tt);break t}mt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,tt=typeof Vt=="function"?Vt.call(ke,mt,tt):Vt,tt==null)break t;mt=g({},mt,tt);break t;case 2:Ua=!0}}tt=T.callback,tt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[tt]:ot.push(tt))}else ot={lane:tt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ft===null?(Q=ft=ot,B=mt):ft=ft.next=ot,v|=tt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ft===null&&(B=mt),u.baseState=B,u.firstBaseUpdate=Q,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Ba|=v,t.lanes=v,t.memoizedState=mt}}function nm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function im(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)nm(a[t],n)}var er=N(null),El=N(0);function am(t,n){t=la,gt(El,t),gt(er,n),la=t|n.baseLanes}function Vu(){gt(El,la),gt(er,er.current)}function ku(){la=El.current,nt(er),nt(El)}var Kn=N(null),hi=null;function Oa(t){var n=t.alternate;gt(sn,sn.current&1),gt(Kn,t),hi===null&&(n===null||er.current!==null||n.memoizedState!==null)&&(hi=t)}function Xu(t){gt(sn,sn.current),gt(Kn,t),hi===null&&(hi=t)}function sm(t){t.tag===22?(gt(sn,sn.current),gt(Kn,t),hi===null&&(hi=t)):Pa()}function Pa(){gt(sn,sn.current),gt(Kn,Kn.current)}function Qn(t){nt(Kn),hi===t&&(hi=null),nt(sn)}var sn=N(0);function bl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qf(a)||Jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,oe=null,Ge=null,un=null,Tl=!1,nr=!1,vs=!1,Al=0,uo=0,ir=null,Nx=0;function en(){throw Error(s(321))}function Wu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function qu(t,n,a,r,u,f){return ta=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Vm:lf,vs=!1,f=a(r,u),vs=!1,nr&&(f=om(n,a,r,u)),rm(t),f}function rm(t){I.H=po;var n=Ge!==null&&Ge.next!==null;if(ta=0,un=Ge=oe=null,Tl=!1,uo=0,ir=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&gl(t)&&(fn=!0))}function om(t,n,a,r){oe=t;var u=0;do{if(nr&&(ir=null),uo=0,nr=!1,25<=u)throw Error(s(301));if(u+=1,un=Ge=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=km,f=n(a,r)}while(nr);return f}function Lx(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?fo(n):n,t=t.useState()[0],(Ge!==null?Ge.memoizedState:null)!==t&&(oe.flags|=1024),n}function Yu(){var t=Al!==0;return Al=0,t}function ju(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Zu(t){if(Tl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Tl=!1}ta=0,un=Ge=oe=null,nr=!1,uo=Al=0,ir=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?oe.memoizedState=un=t:un=un.next=t,un}function rn(){if(Ge===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var n=un===null?oe.memoizedState:un.next;if(n!==null)un=n,Ge=t;else{if(t===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?oe.memoizedState=un=t:un=un.next=t}return un}function Rl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(t){var n=uo;return uo+=1,ir===null&&(ir=[]),t=Qp(ir,t,n),n=oe,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Vm:lf),t}function Cl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fo(t);if(t.$$typeof===L)return Cn(t)}throw Error(s(438,String(t)))}function Ku(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Rl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=w;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function wl(t){var n=rn();return Qu(n,Ge,t)}function Qu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=v=null,B=null,Q=n,ft=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(xe&mt)===mt:(ta&mt)===mt){var tt=Q.revertLane;if(tt===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===Qs&&(ft=!0);else if((ta&tt)===tt){Q=Q.next,tt===Qs&&(ft=!0);continue}else mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},B===null?(T=B=mt,v=f):B=B.next=mt,oe.lanes|=tt,Ba|=tt;mt=Q.action,vs&&a(f,mt),f=Q.hasEagerState?Q.eagerState:a(f,mt)}else tt={lane:mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},B===null?(T=B=tt,v=f):B=B.next=tt,oe.lanes|=mt,Ba|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(B===null?v=f:B.next=T,!jn(f,t.memoizedState)&&(fn=!0,ft&&(a=Js,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=B,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Ju(t){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);jn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function lm(t,n,a){var r=oe,u=rn(),f=Me;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!jn((Ge||u).memoizedState,a);if(v&&(u.memoizedState=a,fn=!0),u=u.queue,ef(fm.bind(null,r,u,t),[t]),u.getSnapshot!==n||v||un!==null&&un.memoizedState.tag&1){if(r.flags|=2048,ar(9,{destroy:void 0},um.bind(null,r,u,a,n),null),Xe===null)throw Error(s(349));f||(ta&127)!==0||cm(r,n,a)}return a}function cm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Rl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function um(t,n,a,r){n.value=a,n.getSnapshot=r,hm(n)&&dm(t)}function fm(t,n,a){return a(function(){hm(n)&&dm(t)})}function hm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function dm(t){var n=cs(t,2);n!==null&&Wn(n,t,2)}function $u(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),vs){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function pm(t,n,a,r){return t.baseState=a,Qu(t,Ge,typeof r=="function"?r:ea)}function Ox(t,n,a,r,u){if(Nl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};I.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,mm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function mm(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=I.T,v={};I.T=v;try{var T=a(u,r),B=I.S;B!==null&&B(v,T),gm(t,n,T)}catch(Q){tf(t,n,Q)}finally{f!==null&&v.types!==null&&(f.types=v.types),I.T=f}}else try{f=a(u,r),gm(t,n,f)}catch(Q){tf(t,n,Q)}}function gm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){_m(t,n,r)},function(r){return tf(t,n,r)}):_m(t,n,a)}function _m(t,n,a){n.status="fulfilled",n.value=a,vm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,mm(t,a)))}function tf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,vm(n),n=n.next;while(n!==r)}t.action=null}function vm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function xm(t,n){return n}function Sm(t,n){if(Me){var a=Xe.formState;if(a!==null){t:{var r=oe;if(Me){if(qe){e:{for(var u=qe,f=fi;u.nodeType!==8;){if(!f){u=null;break e}if(u=di(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qe=di(u.nextSibling),r=u.data==="F!";break t}}wa(r)}r=!1}r&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xm,lastRenderedState:n},a.queue=r,a=Fm.bind(null,oe,r),r.dispatch=a,r=$u(!1),f=of.bind(null,oe,!1,r.queue),r=zn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=Ox.bind(null,oe,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function Mm(t){var n=rn();return ym(n,Ge,t)}function ym(t,n,a){if(n=Qu(t,n,xm)[0],t=wl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=fo(n)}catch(v){throw v===$s?xl:v}else r=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,ar(9,{destroy:void 0},Px.bind(null,u,a),null)),[r,f,t]}function Px(t,n){t.action=n}function Em(t){var n=rn(),a=Ge;if(a!==null)return ym(n,a,t);rn(),n=n.memoizedState,a=rn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ar(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Rl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function bm(){return rn().memoizedState}function Dl(t,n,a,r){var u=zn();oe.flags|=t,u.memoizedState=ar(1|n,{destroy:void 0},a,r===void 0?null:r)}function Ul(t,n,a,r){var u=rn();r=r===void 0?null:r;var f=u.memoizedState.inst;Ge!==null&&r!==null&&Wu(r,Ge.memoizedState.deps)?u.memoizedState=ar(n,f,a,r):(oe.flags|=t,u.memoizedState=ar(1|n,f,a,r))}function Tm(t,n){Dl(8390656,8,t,n)}function ef(t,n){Ul(2048,8,t,n)}function Ix(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Rl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Am(t){var n=rn().memoizedState;return Ix({ref:n,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Rm(t,n){return Ul(4,2,t,n)}function Cm(t,n){return Ul(4,4,t,n)}function wm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Dm(t,n,a){a=a!=null?a.concat([t]):null,Ul(4,4,wm.bind(null,n,t),a)}function nf(){}function Um(t,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Wu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Nm(t,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Wu(n,r[1]))return r[0];if(r=t(),vs){zt(!0);try{t()}finally{zt(!1)}}return a.memoizedState=[r,n],r}function af(t,n,a){return a===void 0||(ta&1073741824)!==0&&(xe&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=L0(),oe.lanes|=t,Ba|=t,a)}function Lm(t,n,a,r){return jn(a,n)?a:er.current!==null?(t=af(t,a,r),jn(t,n)||(fn=!0),t):(ta&42)===0||(ta&1073741824)!==0&&(xe&261930)===0?(fn=!0,t.memoizedState=a):(t=L0(),oe.lanes|=t,Ba|=t,n)}function Om(t,n,a,r,u){var f=H.p;H.p=f!==0&&8>f?f:8;var v=I.T,T={};I.T=T,of(t,!1,n,a);try{var B=u(),Q=I.S;if(Q!==null&&Q(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ft=Ux(B,r);ho(t,n,ft,ti(t))}else ho(t,n,r,ti(t))}catch(mt){ho(t,n,{then:function(){},status:"rejected",reason:mt},ti())}finally{H.p=f,v!==null&&T.types!==null&&(v.types=T.types),I.T=v}}function zx(){}function sf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Pm(t).queue;Om(t,u,n,it,a===null?zx:function(){return Im(t),a(r)})}function Pm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:it},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Im(t){var n=Pm(t);n.next===null&&(n=t.alternate.memoizedState),ho(t,n.next.queue,{},ti())}function rf(){return Cn(Do)}function zm(){return rn().memoizedState}function Bm(){return rn().memoizedState}function Bx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();t=Na(a);var r=La(n,t,a);r!==null&&(Wn(r,n,a),oo(r,n,a)),n={cache:Ou()},t.payload=n;return}n=n.return}}function Fx(t,n,a){var r=ti();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(t)?Hm(n,a):(a=Eu(t,n,a,r),a!==null&&(Wn(a,t,r),Gm(a,n,r)))}function Fm(t,n,a){var r=ti();ho(t,n,a,r)}function ho(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(t))Hm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(u.hasEagerState=!0,u.eagerState=T,jn(T,v))return hl(t,n,u,0),Xe===null&&fl(),!1}catch{}finally{}if(a=Eu(t,n,u,r),a!==null)return Wn(a,t,r),Gm(a,n,r),!0}return!1}function of(t,n,a,r){if(r={lane:2,revertLane:Ff(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Nl(t)){if(n)throw Error(s(479))}else n=Eu(t,a,r,2),n!==null&&Wn(n,t,2)}function Nl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function Hm(t,n){nr=Tl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Gm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Gr(t,a)}}var po={readContext:Cn,use:Cl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};po.useEffectEvent=en;var Vm={readContext:Cn,use:Cl,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:Tm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Dl(4194308,4,wm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Dl(4194308,4,t,n)},useInsertionEffect:function(t,n){Dl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var r=t();if(vs){zt(!0);try{t()}finally{zt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=zn();if(a!==void 0){var u=a(n);if(vs){zt(!0);try{a(n)}finally{zt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=Fx.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=$u(t);var n=t.queue,a=Fm.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(t,n){var a=zn();return af(a,t,n)},useTransition:function(){var t=$u(!1);return t=Om.bind(null,oe,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=oe,u=zn();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(xe&127)!==0||cm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Tm(fm.bind(null,r,f,t),[t]),r.flags|=2048,ar(9,{destroy:void 0},um.bind(null,r,f,a,n),null),a},useId:function(){var t=zn(),n=Xe.identifierPrefix;if(Me){var a=Pi,r=Oi;a=(r&~(1<<32-Pt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Al++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Nx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:rf,useFormState:Sm,useActionState:Sm,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ku,useCacheRefresh:function(){return zn().memoizedState=Bx.bind(null,oe)},useEffectEvent:function(t){var n=zn(),a={impl:t};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},lf={readContext:Cn,use:Cl,useCallback:Um,useContext:Cn,useEffect:ef,useImperativeHandle:Dm,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:Nm,useReducer:wl,useRef:bm,useState:function(){return wl(ea)},useDebugValue:nf,useDeferredValue:function(t,n){var a=rn();return Lm(a,Ge.memoizedState,t,n)},useTransition:function(){var t=wl(ea)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:lm,useId:zm,useHostTransitionStatus:rf,useFormState:Mm,useActionState:Mm,useOptimistic:function(t,n){var a=rn();return pm(a,Ge,t,n)},useMemoCache:Ku,useCacheRefresh:Bm};lf.useEffectEvent=Am;var km={readContext:Cn,use:Cl,useCallback:Um,useContext:Cn,useEffect:ef,useImperativeHandle:Dm,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:Nm,useReducer:Ju,useRef:bm,useState:function(){return Ju(ea)},useDebugValue:nf,useDeferredValue:function(t,n){var a=rn();return Ge===null?af(a,t,n):Lm(a,Ge.memoizedState,t,n)},useTransition:function(){var t=Ju(ea)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:lm,useId:zm,useHostTransitionStatus:rf,useFormState:Em,useActionState:Em,useOptimistic:function(t,n){var a=rn();return Ge!==null?pm(a,Ge,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:Bm};km.useEffectEvent=Am;function cf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var uf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ti(),u=Na(r);u.payload=n,a!=null&&(u.callback=a),n=La(t,u,r),n!==null&&(Wn(n,t,r),oo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ti(),u=Na(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(t,u,r),n!==null&&(Wn(n,t,r),oo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ti(),r=Na(a);r.tag=2,n!=null&&(r.callback=n),n=La(t,r,a),n!==null&&(Wn(n,t,a),oo(n,t,a))}};function Xm(t,n,a,r,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!$r(a,r)||!$r(u,f):!0}function Wm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&uf.enqueueReplaceState(n,n.state,null)}function xs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function qm(t){ul(t)}function Ym(t){console.error(t)}function jm(t){ul(t)}function Ll(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Zm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ff(t,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(t,n)},a}function Km(t){return t=Na(t),t.tag=3,t}function Qm(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){Zm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Zm(n,a,r),typeof u!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function Hx(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?Wl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),If(t,r,u)),!1;case 22:return a.flags|=65536,r===Sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),If(t,r,u)),!1}throw Error(s(435,a.tag))}return If(t,r,u),Wl(),!1}if(Me)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==wu&&(t=Error(s(422),{cause:r}),no(li(t,a)))):(r!==wu&&(n=Error(s(423),{cause:r}),no(li(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=li(r,a),u=ff(t.stateNode,r,u),Hu(t,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:r});if(f=li(f,a),yo===null?yo=[f]:yo.push(f),nn!==4&&(nn=2),n===null)return!0;r=li(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ff(a.stateNode,r,t),Hu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Fa===null||!Fa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Km(u),Qm(u,t,a,r),Hu(a,u),!1}a=a.return}while(a!==null);return!1}var hf=Error(s(461)),fn=!1;function wn(t,n,a,r){n.child=t===null?em(n,null,a,r):_s(n,t.child,a,r)}function Jm(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var T in r)T!=="ref"&&(v[T]=r[T])}else v=r;return ds(n),r=qu(t,n,a,v,f,u),T=Yu(),t!==null&&!fn?(ju(t,n,u),na(t,n,u)):(Me&&T&&Ru(n),n.flags|=1,wn(t,n,r,u),n.child)}function $m(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!bu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,t0(t,n,f,r,u)):(t=pl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Sf(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:$r,a(v,r)&&t.ref===n.ref)return na(t,n,u)}return n.flags|=1,t=Ki(f,r),t.ref=n.ref,t.return=n,n.child=t}function t0(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if($r(f,r)&&t.ref===n.ref)if(fn=!1,n.pendingProps=r=f,Sf(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,na(t,n,u)}return df(t,n,a,r,u)}function e0(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return n0(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&vl(n,f!==null?f.cachePool:null),f!==null?am(n,f):Vu(),sm(n);else return r=n.lanes=536870912,n0(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(vl(n,f.cachePool),am(n,f),Pa(),n.memoizedState=null):(t!==null&&vl(n,null),Vu(),Pa());return wn(t,n,u,a),n.child}function mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function n0(t,n,a,r,u){var f=Iu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&vl(n,null),Vu(),sm(n),t!==null&&Ks(t,n,r,!0),n.childLanes=u,null}function Ol(t,n){return n=Il({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function i0(t,n,a){return _s(n,t.child,null,a),t=Ol(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function Gx(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(r.mode==="hidden")return t=Ol(n,r),n.lanes=536870912,mo(null,t);if(Xu(n),(t=qe)?(t=mg(t,fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ra!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Hp(t),a.return=n,n.child=a,Rn=n,qe=null)):t=null,t===null)throw wa(n);return n.lanes=536870912,null}return Ol(n,r)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Xu(n),u)if(n.flags&256)n.flags&=-257,n=i0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Ks(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(r=Xe,r!==null&&(v=Ps(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,cs(t,v),Wn(r,t,v),hf;Wl(),n=i0(t,n,a)}else t=f.treeContext,qe=di(v.nextSibling),Rn=n,Me=!0,Ca=null,fi=!1,t!==null&&kp(n,t),n=Ol(n,r),n.flags|=4096;return n}return t=Ki(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Pl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function df(t,n,a,r,u){return ds(n),a=qu(t,n,a,r,void 0,u),r=Yu(),t!==null&&!fn?(ju(t,n,u),na(t,n,u)):(Me&&r&&Ru(n),n.flags|=1,wn(t,n,a,u),n.child)}function a0(t,n,a,r,u,f){return ds(n),n.updateQueue=null,a=om(n,r,a,u),rm(t),r=Yu(),t!==null&&!fn?(ju(t,n,f),na(t,n,f)):(Me&&r&&Ru(n),n.flags|=1,wn(t,n,a,f),n.child)}function s0(t,n,a,r,u){if(ds(n),n.stateNode===null){var f=qs,v=a.contextType;typeof v=="object"&&v!==null&&(f=Cn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=uf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Bu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Cn(v):qs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(cf(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&uf.enqueueReplaceState(f,f.state,null),co(n,r,f,u),lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=xs(a,T);f.props=B;var Q=f.context,ft=a.contextType;v=qs,typeof ft=="object"&&ft!==null&&(v=Cn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==v)&&Wm(n,f,r,v),Ua=!1;var tt=n.memoizedState;f.state=tt,co(n,r,f,u),lo(),Q=n.memoizedState,T||tt!==Q||Ua?(typeof mt=="function"&&(cf(n,a,mt,r),Q=n.memoizedState),(B=Ua||Xm(n,a,B,r,tt,Q,v))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),f.props=r,f.state=Q,f.context=v,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Fu(t,n),v=n.memoizedProps,ft=xs(a,v),f.props=ft,mt=n.pendingProps,tt=f.context,Q=a.contextType,B=qs,typeof Q=="object"&&Q!==null&&(B=Cn(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==mt||tt!==B)&&Wm(n,f,r,B),Ua=!1,tt=n.memoizedState,f.state=tt,co(n,r,f,u),lo();var ot=n.memoizedState;v!==mt||tt!==ot||Ua||t!==null&&t.dependencies!==null&&gl(t.dependencies)?(typeof T=="function"&&(cf(n,a,T,r),ot=n.memoizedState),(ft=Ua||Xm(n,a,ft,r,tt,ot,B)||t!==null&&t.dependencies!==null&&gl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=B,r=ft):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Pl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=_s(n,t.child,null,u),n.child=_s(n,null,a,u)):wn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=na(t,n,u),t}function r0(t,n,a,r){return fs(),n.flags|=256,wn(t,n,a,r),n.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(t){return{baseLanes:t,cachePool:Zp()}}function gf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function o0(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(u?Oa(n):Pa(),(t=qe)?(t=mg(t,fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ra!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Hp(t),a.return=n,n.child=a,Rn=n,qe=null)):t=null,t===null)throw wa(n);return Jf(t)?n.lanes=32:n.lanes=536870912,null}var T=r.children;return r=r.fallback,u?(Pa(),u=n.mode,T=Il({mode:"hidden",children:T},u),r=us(r,u,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,r=n.child,r.memoizedState=mf(a),r.childLanes=gf(t,v,a),n.memoizedState=pf,mo(null,r)):(Oa(n),_f(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(Oa(n),n.flags&=-257,n=vf(t,n,a)):n.memoizedState!==null?(Pa(),n.child=t.child,n.flags|=128,n=null):(Pa(),T=r.fallback,u=n.mode,r=Il({mode:"visible",children:r.children},u),T=us(T,u,a,null),T.flags|=2,r.return=n,T.return=n,r.sibling=T,n.child=r,_s(n,t.child,null,a),r=n.child,r.memoizedState=mf(a),r.childLanes=gf(t,v,a),n.memoizedState=pf,n=mo(null,r));else if(Oa(n),Jf(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var Q=v.dgst;v=Q,r=Error(s(419)),r.stack="",r.digest=v,no({value:r,source:null,stack:null}),n=vf(t,n,a)}else if(fn||Ks(t,n,a,!1),v=(a&t.childLanes)!==0,fn||v){if(v=Xe,v!==null&&(r=Ps(v,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,cs(t,r),Wn(v,t,r),hf;Qf(T)||Wl(),n=vf(t,n,a)}else Qf(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,qe=di(T.nextSibling),Rn=n,Me=!0,Ca=null,fi=!1,t!==null&&kp(n,t),n=_f(n,r.children),n.flags|=4096);return n}return u?(Pa(),T=r.fallback,u=n.mode,B=t.child,Q=B.sibling,r=Ki(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,Q!==null?T=Ki(Q,T):(T=us(T,u,a,null),T.flags|=2),T.return=n,r.return=n,r.sibling=T,n.child=r,mo(null,r),r=n.child,T=t.child.memoizedState,T===null?T=mf(a):(u=T.cachePool,u!==null?(B=cn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Zp(),T={baseLanes:T.baseLanes|a,cachePool:u}),r.memoizedState=T,r.childLanes=gf(t,v,a),n.memoizedState=pf,mo(t.child,r)):(Oa(n),a=t.child,t=a.sibling,a=Ki(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function _f(t,n){return n=Il({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Il(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function vf(t,n,a){return _s(n,t.child,null,a),t=_f(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function l0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Nu(t.return,n,a)}function xf(t,n,a,r,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function c0(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=sn.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,gt(sn,v),wn(t,n,r,a),r=Me?eo:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&l0(t,a,n);else if(t.tag===19)l0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&bl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),xf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&bl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}xf(n,!0,a,null,f,r);break;case"together":xf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function na(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ks(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Sf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&gl(t)))}function Vx(t,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),Da(n,cn,t.memoizedState.cache),fs();break;case 27:case 5:Ht(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?o0(t,n,a):(Oa(n),t=na(t,n,a),t!==null?t.sibling:null);Oa(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ks(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return c0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(sn,sn.current),r)break;return null;case 22:return n.lanes=0,e0(t,n,a,n.pendingProps);case 24:Da(n,cn,t.memoizedState.cache)}return na(t,n,a)}function u0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Sf(t,a)&&(n.flags&128)===0)return fn=!1,Vx(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,Me&&(n.flags&1048576)!==0&&Vp(n,eo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ms(n.elementType),n.type=t,typeof t=="function")bu(t)?(r=xs(t,r),n.tag=1,n=s0(null,n,t,r,a)):(n.tag=0,n=df(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===U){n.tag=11,n=Jm(null,n,t,r,a);break t}else if(u===P){n.tag=14,n=$m(null,n,t,r,a);break t}}throw n=dt(t)||t,Error(s(306,n,""))}}return n;case 0:return df(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=xs(r,n.pendingProps),s0(t,n,r,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Fu(t,n),co(n,r,null,a);var v=n.memoizedState;if(r=v.cache,Da(n,cn,r),r!==f.cache&&Lu(n,[cn],a,!0),lo(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=r0(t,n,r,a);break t}else if(r!==u){u=li(Error(s(424)),n),no(u),n=r0(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qe=di(t.firstChild),Rn=n,Me=!0,Ca=null,fi=!0,a=em(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fs(),r===u){n=na(t,n,a);break t}wn(t,n,r,a)}n=n.child}return n;case 26:return Pl(t,n),t===null?(a=Mg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,t=n.pendingProps,r=Jl(et.current).createElement(a),r[ln]=n,r[Mn]=t,Dn(r,a,t),A(r),n.stateNode=r):n.memoizedState=Mg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ht(n),t===null&&Me&&(r=n.stateNode=vg(n.type,n.pendingProps,et.current),Rn=n,fi=!0,u=qe,ka(n.type)?($f=u,qe=di(r.firstChild)):qe=u),wn(t,n,n.pendingProps.children,a),Pl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((u=r=qe)&&(r=vS(r,n.type,n.pendingProps,fi),r!==null?(n.stateNode=r,Rn=n,qe=di(r.firstChild),fi=!1,u=!0):u=!1),u||wa(n)),Ht(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,r=f.children,jf(u,f)?r=null:v!==null&&jf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(t,n,Lx,null,null,a),Do._currentValue=u),Pl(t,n),wn(t,n,r,a),n.child;case 6:return t===null&&Me&&((t=a=qe)&&(a=xS(a,n.pendingProps,fi),a!==null?(n.stateNode=a,Rn=n,qe=null,t=!0):t=!1),t||wa(n)),null;case 13:return o0(t,n,a);case 4:return Dt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=_s(n,null,r,a):wn(t,n,r,a),n.child;case 11:return Jm(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Da(n,n.type,r.value),wn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,ds(n),u=Cn(u),r=r(u),n.flags|=1,wn(t,n,r,a),n.child;case 14:return $m(t,n,n.type,n.pendingProps,a);case 15:return t0(t,n,n.type,n.pendingProps,a);case 19:return c0(t,n,a);case 31:return Gx(t,n,a);case 22:return e0(t,n,a,n.pendingProps);case 24:return ds(n),r=Cn(cn),t===null?(u=Iu(),u===null&&(u=Xe,f=Ou(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Bu(n),Da(n,cn,u)):((t.lanes&a)!==0&&(Fu(t,n),co(n,null,null,a),lo()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Da(n,cn,r)):(r=f.cache,Da(n,cn,r),r!==u.cache&&Lu(n,[cn],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ia(t){t.flags|=4}function Mf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(z0())t.flags|=8192;else throw gs=Sl,zu}else t.flags&=-16777217}function f0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ag(n))if(z0())t.flags|=8192;else throw gs=Sl,zu}function zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ie():536870912,t.lanes|=n,lr|=n)}function go(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function kx(t,n,a){var r=n.pendingProps;switch(Cu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),$i(cn),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zs(n)?ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Du())),Ye(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ia(n),f!==null?(Ye(n),f0(n,f)):(Ye(n),Mf(n,u,null,r,a))):f?f!==t.memoizedState?(ia(n),Ye(n),f0(n,f)):(Ye(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ia(n),Ye(n),Mf(n,u,t,r,a)),null;case 27:if(pe(n),a=et.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}t=Tt.current,Zs(n)?Xp(n):(t=vg(u,r,a),n.stateNode=t,ia(n))}return Ye(n),null;case 5:if(pe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}if(f=Tt.current,Zs(n))Xp(n);else{var v=Jl(et.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[ln]=n,f[Mn]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Dn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ia(n)}}return Ye(n),Mf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ia(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=et.current,Zs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||og(t.nodeValue,a)),t||wa(n,!0)}else t=Jl(t).createTextNode(r),t[ln]=n,n.stateNode=t}return Ye(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Zs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ln]=n}else fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),t=!1}else a=Du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ye(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Zs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=Du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),Ye(n),null);case 4:return kt(),t===null&&kf(n.stateNode.containerInfo),Ye(n),null;case 10:return $i(n.type),Ye(n),null;case 19:if(nt(sn),r=n.memoizedState,r===null)return Ye(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)go(r,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=bl(t),f!==null){for(n.flags|=128,go(r,!1),t=f.updateQueue,n.updateQueue=t,zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Fp(a,t),a=a.sibling;return gt(sn,sn.current&1|2),Me&&Qi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&E()>Vl&&(n.flags|=128,u=!0,go(r,!1),n.lanes=4194304)}else{if(!u)if(t=bl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,zl(n,t),go(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Me)return Ye(n),null}else 2*E()-r.renderingStartTime>Vl&&a!==536870912&&(n.flags|=128,u=!0,go(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=E(),t.sibling=null,a=sn.current,gt(sn,u?a&1|2:a&1),Me&&Qi(n,r.treeForkCount),t):(Ye(n),null);case 22:case 23:return Qn(n),ku(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&nt(ps),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(cn),Ye(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Xx(t,n){switch(Cu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return $i(cn),kt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pe(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(s(340));fs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));fs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nt(sn),null;case 4:return kt(),null;case 10:return $i(n.type),null;case 22:case 23:return Qn(n),ku(),t!==null&&nt(ps),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return $i(cn),null;case 25:return null;default:return null}}function h0(t,n){switch(Cu(n),n.tag){case 3:$i(cn),kt();break;case 26:case 27:case 5:pe(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:nt(sn);break;case 10:$i(n.type);break;case 22:case 23:Qn(n),ku(),t!==null&&nt(ps);break;case 24:$i(cn)}}function _o(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(T){Fe(n,n.return,T)}}function Ia(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var v=r.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var B=a,Q=T;try{Q()}catch(ft){Fe(u,B,ft)}}}r=r.next}while(r!==f)}}catch(ft){Fe(n,n.return,ft)}}function d0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{im(n,a)}catch(r){Fe(t,t.return,r)}}}function p0(t,n,a){a.props=xs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Fe(t,n,r)}}function vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){Fe(t,n,u)}}function Ii(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Fe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(t,n,u)}else a.current=null}function m0(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Fe(t,t.return,u)}}function yf(t,n,a){try{var r=t.stateNode;hS(r,t.type,a,n),r[Mn]=n}catch(u){Fe(t,t.return,u)}}function g0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ka(t.type)||t.tag===4}function Ef(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||g0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(r!==4&&(r===27&&ka(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(bf(t,n,a),t=t.sibling;t!==null;)bf(t,n,a),t=t.sibling}function Bl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&ka(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Bl(t,n,a),t=t.sibling;t!==null;)Bl(t,n,a),t=t.sibling}function _0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,r,a),n[ln]=t,n[Mn]=a}catch(f){Fe(t,t.return,f)}}var aa=!1,hn=!1,Tf=!1,v0=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Wx(t,n){if(t=t.containerInfo,qf=sc,t=Dp(t),_u(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,B=-1,Q=0,ft=0,mt=t,tt=null;e:for(;;){for(var ot;mt!==a||u!==0&&mt.nodeType!==3||(T=v+u),mt!==f||r!==0&&mt.nodeType!==3||(B=v+r),mt.nodeType===3&&(v+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)tt=mt,mt=ot;for(;;){if(mt===t)break e;if(tt===a&&++Q===u&&(T=v),tt===f&&++ft===r&&(B=v),(ot=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=ot}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yf={focusedElem:t,selectionRange:a},sc=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Vt=xs(a.type,u);t=r.getSnapshotBeforeUpdate(Vt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(te){Fe(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function x0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ra(t,a),r&4&&_o(5,a);break;case 1:if(ra(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Fe(a,a.return,v)}else{var u=xs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Fe(a,a.return,v)}}r&64&&d0(a),r&512&&vo(a,a.return);break;case 3:if(ra(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{im(t,n)}catch(v){Fe(a,a.return,v)}}break;case 27:n===null&&r&4&&_0(a);case 26:case 5:ra(t,a),n===null&&r&4&&m0(a),r&512&&vo(a,a.return);break;case 12:ra(t,a);break;case 31:ra(t,a),r&4&&y0(t,a);break;case 13:ra(t,a),r&4&&E0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=tS.bind(null,a),SS(t,a))));break;case 22:if(r=a.memoizedState!==null||aa,!r){n=n!==null&&n.memoizedState!==null||hn,u=aa;var f=hn;aa=r,(hn=n)&&!f?oa(t,a,(a.subtreeFlags&8772)!==0):ra(t,a),aa=u,hn=f}break;case 30:break;default:ra(t,a)}}function S0(t){var n=t.alternate;n!==null&&(t.alternate=null,S0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Wr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qe=null,Gn=!1;function sa(t,n,a){for(a=a.child;a!==null;)M0(t,n,a),a=a.sibling}function M0(t,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:hn||Ii(a,n),sa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Ii(a,n);var r=Qe,u=Gn;ka(a.type)&&(Qe=a.stateNode,Gn=!1),sa(t,n,a),Ro(a.stateNode),Qe=r,Gn=u;break;case 5:hn||Ii(a,n);case 6:if(r=Qe,u=Gn,Qe=null,sa(t,n,a),Qe=r,Gn=u,Qe!==null)if(Gn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Qe.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Qe!==null&&(Gn?(t=Qe,dg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),gr(t)):dg(Qe,a.stateNode));break;case 4:r=Qe,u=Gn,Qe=a.stateNode.containerInfo,Gn=!0,sa(t,n,a),Qe=r,Gn=u;break;case 0:case 11:case 14:case 15:Ia(2,a,n),hn||Ia(4,a,n),sa(t,n,a);break;case 1:hn||(Ii(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&p0(a,n,r)),sa(t,n,a);break;case 21:sa(t,n,a);break;case 22:hn=(r=hn)||a.memoizedState!==null,sa(t,n,a),hn=r;break;default:sa(t,n,a)}}function y0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{gr(t)}catch(a){Fe(n,n.return,a)}}}function E0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gr(t)}catch(a){Fe(n,n.return,a)}}function qx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new v0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new v0),n;default:throw Error(s(435,t.tag))}}function Fl(t,n){var a=qx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=eS.bind(null,t,r);r.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(ka(T.type)){Qe=T.stateNode,Gn=!1;break t}break;case 5:Qe=T.stateNode,Gn=!1;break t;case 3:case 4:Qe=T.stateNode.containerInfo,Gn=!0;break t}T=T.return}if(Qe===null)throw Error(s(160));M0(f,v,u),Qe=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)b0(n,t),n=n.sibling}var bi=null;function b0(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),r&4&&(Ia(3,t,t.return),_o(3,t),Ia(5,t,t.return));break;case 1:Vn(n,t),kn(t),r&512&&(hn||a===null||Ii(a,a.return)),r&64&&aa&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=bi;if(Vn(n,t),kn(t),r&512&&(hn||a===null||Ii(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[as]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,r,a),f[ln]=t,A(f),r=f;break t;case"link":var v=bg("link","href",u).get(r+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=u.createElement(r),Dn(f,r,a),u.head.appendChild(f);break;case"meta":if(v=bg("meta","content",u).get(r+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=u.createElement(r),Dn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[ln]=t,A(f),r=f}t.stateNode=r}else Tg(u,t.type,t.stateNode);else t.stateNode=Eg(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Tg(u,t.type,t.stateNode):Eg(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&yf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),r&512&&(hn||a===null||Ii(a,a.return)),a!==null&&r&4&&yf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),r&512&&(hn||a===null||Ii(a,a.return)),t.flags&32){u=t.stateNode;try{pn(u,"")}catch(Vt){Fe(t,t.return,Vt)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,yf(t,u,a!==null?a.memoizedProps:u)),r&1024&&(Tf=!0);break;case 6:if(Vn(n,t),kn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Vt){Fe(t,t.return,Vt)}}break;case 3:if(ec=null,u=bi,bi=$l(n.containerInfo),Vn(n,t),bi=u,kn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{gr(n.containerInfo)}catch(Vt){Fe(t,t.return,Vt)}Tf&&(Tf=!1,T0(t));break;case 4:r=bi,bi=$l(t.stateNode.containerInfo),Vn(n,t),kn(t),bi=r;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Fl(t,r)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gl=E()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Fl(t,r)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,Q=aa,ft=hn;if(aa=Q||u,hn=ft||B,Vn(n,t),hn=ft,aa=Q,kn(t),r&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||aa||hn||Ss(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=B.stateNode;var mt=B.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Vt){Fe(B,B.return,Vt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Vt){Fe(B,B.return,Vt)}}}else if(n.tag===18){if(a===null){B=n;try{var ot=B.stateNode;u?pg(ot,!0):pg(B.stateNode,!1)}catch(Vt){Fe(B,B.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Fl(t,a))));break;case 19:Vn(n,t),kn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Fl(t,r)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(g0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Ef(t);Bl(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(pn(v,""),a.flags&=-33);var T=Ef(t);Bl(t,T,v);break;case 3:case 4:var B=a.stateNode.containerInfo,Q=Ef(t);bf(t,Q,B);break;default:throw Error(s(161))}}catch(ft){Fe(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function T0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;T0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)x0(t,n.alternate,n),n=n.sibling}function Ss(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),Ss(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&p0(n,n.return,a),Ss(n);break;case 27:Ro(n.stateNode);case 26:case 5:Ii(n,n.return),Ss(n);break;case 22:n.memoizedState===null&&Ss(n);break;case 30:Ss(n);break;default:Ss(n)}t=t.sibling}}function oa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:oa(u,f,a),_o(4,f);break;case 1:if(oa(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){Fe(r,r.return,Q)}if(r=f,u=r.updateQueue,u!==null){var T=r.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)nm(B[u],T)}catch(Q){Fe(r,r.return,Q)}}a&&v&64&&d0(f),vo(f,f.return);break;case 27:_0(f);case 26:case 5:oa(u,f,a),a&&r===null&&v&4&&m0(f),vo(f,f.return);break;case 12:oa(u,f,a);break;case 31:oa(u,f,a),a&&v&4&&y0(u,f);break;case 13:oa(u,f,a),a&&v&4&&E0(u,f);break;case 22:f.memoizedState===null&&oa(u,f,a),vo(f,f.return);break;case 30:break;default:oa(u,f,a)}n=n.sibling}}function Af(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&io(a))}function Rf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t))}function Ti(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)A0(t,n,a,r),n=n.sibling}function A0(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,r),u&2048&&_o(9,n);break;case 1:Ti(t,n,a,r);break;case 3:Ti(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t)));break;case 12:if(u&2048){Ti(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Fe(n,n.return,B)}}else Ti(t,n,a,r);break;case 31:Ti(t,n,a,r);break;case 13:Ti(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(t,n,a,r):xo(t,n):f._visibility&2?Ti(t,n,a,r):(f._visibility|=2,sr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Af(v,n);break;case 24:Ti(t,n,a,r),u&2048&&Rf(n.alternate,n);break;default:Ti(t,n,a,r)}}function sr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,T=a,B=r,Q=v.flags;switch(v.tag){case 0:case 11:case 15:sr(f,v,T,B,u),_o(8,v);break;case 23:break;case 22:var ft=v.stateNode;v.memoizedState!==null?ft._visibility&2?sr(f,v,T,B,u):xo(f,v):(ft._visibility|=2,sr(f,v,T,B,u)),u&&Q&2048&&Af(v.alternate,v);break;case 24:sr(f,v,T,B,u),u&&Q&2048&&Rf(v.alternate,v);break;default:sr(f,v,T,B,u)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:xo(a,r),u&2048&&Af(r.alternate,r);break;case 24:xo(a,r),u&2048&&Rf(r.alternate,r);break;default:xo(a,r)}n=n.sibling}}var So=8192;function rr(t,n,a){if(t.subtreeFlags&So)for(t=t.child;t!==null;)R0(t,n,a),t=t.sibling}function R0(t,n,a){switch(t.tag){case 26:rr(t,n,a),t.flags&So&&t.memoizedState!==null&&NS(a,bi,t.memoizedState,t.memoizedProps);break;case 5:rr(t,n,a);break;case 3:case 4:var r=bi;bi=$l(t.stateNode.containerInfo),rr(t,n,a),bi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=So,So=16777216,rr(t,n,a),So=r):rr(t,n,a));break;default:rr(t,n,a)}}function C0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,D0(r,t)}C0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)w0(t),t=t.sibling}function w0(t){switch(t.tag){case 0:case 11:case 15:Mo(t),t.flags&2048&&Ia(9,t,t.return);break;case 3:Mo(t);break;case 12:Mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hl(t)):Mo(t);break;default:Mo(t)}}function Hl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,D0(r,t)}C0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),Hl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hl(n));break;default:Hl(n)}t=t.sibling}}function D0(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:io(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,vn=r;else t:for(a=t;vn!==null;){r=vn;var u=r.sibling,f=r.return;if(S0(r),r===a){vn=null;break t}if(u!==null){u.return=f,vn=u;break t}vn=f}}}var Yx={getCacheForType:function(t){var n=Cn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(cn).controller.signal}},jx=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Xe=null,ge=null,xe=0,Be=0,Jn=null,za=!1,or=!1,Cf=!1,la=0,nn=0,Ba=0,Ms=0,wf=0,$n=0,lr=0,yo=null,Xn=null,Df=!1,Gl=0,U0=0,Vl=1/0,kl=null,Fa=null,mn=0,Ha=null,cr=null,ca=0,Uf=0,Nf=null,N0=null,Eo=0,Lf=null;function ti(){return(Ne&2)!==0&&xe!==0?xe&-xe:I.T!==null?Ff():kr()}function L0(){if($n===0)if((xe&536870912)===0||Me){var t=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),$n=t}else $n=536870912;return t=Kn.current,t!==null&&(t.flags|=32),$n}function Wn(t,n,a){(t===Xe&&(Be===2||Be===9)||t.cancelPendingCommit!==null)&&(ur(t,0),Ga(t,xe,$n,!1)),Nn(t,a),((Ne&2)===0||t!==Xe)&&(t===Xe&&((Ne&2)===0&&(Ms|=a),nn===4&&Ga(t,xe,$n,!1)),zi(t))}function O0(t,n,a){if((Ne&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||At(t,n),u=r?Qx(t,n):Pf(t,n,!0),f=r;do{if(u===0){or&&!r&&Ga(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Zx(a)){u=Pf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=t;u=yo;var B=T.current.memoizedState.isDehydrated;if(B&&(ur(T,v).flags|=256),v=Pf(T,v,!1),v!==2){if(Cf&&!B){T.errorRecoveryDisabledLanes|=f,Ms|=f,u=4;break t}f=Xn,Xn=u,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){ur(t,0),Ga(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ga(r,n,$n,!za);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Gl+300-E(),10<u)){if(Ga(r,n,$n,!za),_t(r,0,!0)!==0)break t;ca=n,r.timeoutHandle=fg(P0.bind(null,r,a,Xn,kl,Df,n,$n,Ms,lr,za,f,"Throttled",-0,0),u);break t}P0(r,a,Xn,kl,Df,n,$n,Ms,lr,za,f,null,-0,0)}}break}while(!0);zi(t)}function P0(t,n,a,r,u,f,v,T,B,Q,ft,mt,tt,ot){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},R0(n,f,mt);var Vt=(f&62914560)===f?Gl-E():(f&4194048)===f?U0-E():0;if(Vt=LS(mt,Vt),Vt!==null){ca=f,t.cancelPendingCommit=Vt(k0.bind(null,t,n,f,a,r,u,v,T,B,ft,mt,null,tt,ot)),Ga(t,f,v,!Q);return}}k0(t,n,f,a,r,u,v,T,B)}function Zx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(t,n,a,r){n&=~wf,n&=~Ms,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&el(t,a,n)}function Xl(){return(Ne&6)===0?(bo(0),!1):!0}function Of(){if(ge!==null){if(Be===0)var t=ge.return;else t=ge,Ji=hs=null,Zu(t),tr=null,so=0,t=ge;for(;t!==null;)h0(t.alternate,t),t=t.return;ge=null}}function ur(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,mS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ca=0,Of(),Xe=t,ge=a=Ki(t.current,null),xe=n,Be=0,Jn=null,za=!1,or=At(t,n),Cf=!1,lr=$n=wf=Ms=Ba=nn=0,Xn=yo=null,Df=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Pt(r),f=1<<u;n|=t[u],r&=~f}return la=n,fl(),a}function I0(t,n){oe=null,I.H=po,n===$s||n===xl?(n=Jp(),Be=3):n===zu?(n=Jp(),Be=4):Be=n===hf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,ge===null&&(nn=1,Ll(t,li(n,t.current)))}function z0(){var t=Kn.current;return t===null?!0:(xe&4194048)===xe?hi===null:(xe&62914560)===xe||(xe&536870912)!==0?t===hi:!1}function B0(){var t=I.H;return I.H=po,t===null?po:t}function F0(){var t=I.A;return I.A=Yx,t}function Wl(){nn=4,za||(xe&4194048)!==xe&&Kn.current!==null||(or=!0),(Ba&134217727)===0&&(Ms&134217727)===0||Xe===null||Ga(Xe,xe,$n,!1)}function Pf(t,n,a){var r=Ne;Ne|=2;var u=B0(),f=F0();(Xe!==t||xe!==n)&&(kl=null,ur(t,n)),n=!1;var v=nn;t:do try{if(Be!==0&&ge!==null){var T=ge,B=Jn;switch(Be){case 8:Of(),v=6;break t;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var Q=Be;if(Be=0,Jn=null,fr(t,T,B,Q),a&&or){v=0;break t}break;default:Q=Be,Be=0,Jn=null,fr(t,T,B,Q)}}Kx(),v=nn;break}catch(ft){I0(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Ji=hs=null,Ne=r,I.H=u,I.A=f,ge===null&&(Xe=null,xe=0,fl()),v}function Kx(){for(;ge!==null;)H0(ge)}function Qx(t,n){var a=Ne;Ne|=2;var r=B0(),u=F0();Xe!==t||xe!==n?(kl=null,Vl=E()+500,ur(t,n)):or=At(t,n);t:do try{if(Be!==0&&ge!==null){n=ge;var f=Jn;e:switch(Be){case 1:Be=0,Jn=null,fr(t,n,f,1);break;case 2:case 9:if(Kp(f)){Be=0,Jn=null,G0(n);break}n=function(){Be!==2&&Be!==9||Xe!==t||(Be=7),zi(t)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Kp(f)?(Be=0,Jn=null,G0(n)):(Be=0,Jn=null,fr(t,n,f,7));break;case 5:var v=null;switch(ge.tag){case 26:v=ge.memoizedState;case 5:case 27:var T=ge;if(v?Ag(v):T.stateNode.complete){Be=0,Jn=null;var B=T.sibling;if(B!==null)ge=B;else{var Q=T.return;Q!==null?(ge=Q,ql(Q)):ge=null}break e}}Be=0,Jn=null,fr(t,n,f,5);break;case 6:Be=0,Jn=null,fr(t,n,f,6);break;case 8:Of(),nn=6;break t;default:throw Error(s(462))}}Jx();break}catch(ft){I0(t,ft)}while(!0);return Ji=hs=null,I.H=r,I.A=u,Ne=a,ge!==null?0:(Xe=null,xe=0,fl(),nn)}function Jx(){for(;ge!==null&&!Yt();)H0(ge)}function H0(t){var n=u0(t.alternate,t,la);t.memoizedProps=t.pendingProps,n===null?ql(t):ge=n}function G0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=a0(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=a0(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Zu(n);default:h0(a,n),n=ge=Fp(n,la),n=u0(a,n,la)}t.memoizedProps=t.pendingProps,n===null?ql(t):ge=n}function fr(t,n,a,r){Ji=hs=null,Zu(n),tr=null,so=0;var u=n.return;try{if(Hx(t,u,n,a,xe)){nn=1,Ll(t,li(a,t.current)),ge=null;return}}catch(f){if(u!==null)throw ge=u,f;nn=1,Ll(t,li(a,t.current)),ge=null;return}n.flags&32768?(Me||r===1?t=!0:or||(xe&536870912)!==0?t=!1:(za=t=!0,(r===2||r===9||r===3||r===6)&&(r=Kn.current,r!==null&&r.tag===13&&(r.flags|=16384))),V0(n,t)):ql(n)}function ql(t){var n=t;do{if((n.flags&32768)!==0){V0(n,za);return}t=n.return;var a=kx(n.alternate,n,la);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=t}while(n!==null);nn===0&&(nn=5)}function V0(t,n){do{var a=Xx(t.alternate,t);if(a!==null){a.flags&=32767,ge=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ge=t;return}ge=t=a}while(t!==null);nn=6,ge=null}function k0(t,n,a,r,u,f,v,T,B){t.cancelPendingCommit=null;do Yl();while(mn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=yu,Si(t,a,f,v,T,B),t===Xe&&(ge=Xe=null,xe=0),cr=n,Ha=t,ca=a,Uf=f,Nf=u,N0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,nS(lt,function(){return j0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=I.T,I.T=null,u=H.p,H.p=2,v=Ne,Ne|=4;try{Wx(t,n,a)}finally{Ne=v,H.p=u,I.T=r}}mn=1,X0(),W0(),q0()}}function X0(){if(mn===1){mn=0;var t=Ha,n=cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var r=H.p;H.p=2;var u=Ne;Ne|=4;try{b0(n,t);var f=Yf,v=Dp(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&wp(T.ownerDocument.documentElement,T)){if(B!==null&&_u(T)){var Q=B.start,ft=B.end;if(ft===void 0&&(ft=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ft,T.value.length);else{var mt=T.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var ot=tt.getSelection(),Vt=T.textContent.length,te=Math.min(B.start,Vt),ke=B.end===void 0?te:Math.min(B.end,Vt);!ot.extend&&te>ke&&(v=ke,ke=te,te=v);var Y=Cp(T,te),V=Cp(T,ke);if(Y&&V&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var K=mt.createRange();K.setStart(Y.node,Y.offset),ot.removeAllRanges(),te>ke?(ot.addRange(K),ot.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),ot.addRange(K))}}}}for(mt=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}sc=!!qf,Yf=qf=null}finally{Ne=u,H.p=r,I.T=a}}t.current=n,mn=2}}function W0(){if(mn===2){mn=0;var t=Ha,n=cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var r=H.p;H.p=2;var u=Ne;Ne|=4;try{x0(t,n.alternate,n)}finally{Ne=u,H.p=r,I.T=a}}mn=3}}function q0(){if(mn===4||mn===3){mn=0,D();var t=Ha,n=cr,a=ca,r=N0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,cr=Ha=null,Y0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Fa=null),Is(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=I.T,u=H.p,H.p=2,I.T=null;try{for(var f=t.onRecoverableError,v=0;v<r.length;v++){var T=r[v];f(T.value,{componentStack:T.stack})}}finally{I.T=n,H.p=u}}(ca&3)!==0&&Yl(),zi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Lf?Eo++:(Eo=0,Lf=t):Eo=0,bo(0)}}function Y0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,io(n)))}function Yl(){return X0(),W0(),q0(),j0()}function j0(){if(mn!==5)return!1;var t=Ha,n=Uf;Uf=0;var a=Is(ca),r=I.T,u=H.p;try{H.p=32>a?32:a,I.T=null,a=Nf,Nf=null;var f=Ha,v=ca;if(mn=0,cr=Ha=null,ca=0,(Ne&6)!==0)throw Error(s(331));var T=Ne;if(Ne|=4,w0(f.current),A0(f,f.current,v,a),Ne=T,bo(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{H.p=u,I.T=r,Y0(t,n)}}function Z0(t,n,a){n=li(a,n),n=ff(t.stateNode,n,2),t=La(t,n,2),t!==null&&(Nn(t,2),zi(t))}function Fe(t,n,a){if(t.tag===3)Z0(t,t,a);else for(;n!==null;){if(n.tag===3){Z0(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fa===null||!Fa.has(r))){t=li(a,t),a=Km(2),r=La(n,a,2),r!==null&&(Qm(a,r,n,t),Nn(r,2),zi(r));break}}n=n.return}}function If(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new jx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Cf=!0,u.add(a),t=$x.bind(null,t,n,a),n.then(t,t))}function $x(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(xe&a)===a&&(nn===4||nn===3&&(xe&62914560)===xe&&300>E()-Gl?(Ne&2)===0&&ur(t,0):wf|=a,lr===xe&&(lr=0)),zi(t)}function K0(t,n){n===0&&(n=Ie()),t=cs(t,n),t!==null&&(Nn(t,n),zi(t))}function tS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),K0(t,a)}function eS(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),K0(t,a)}function nS(t,n){return Ee(t,n)}var jl=null,hr=null,zf=!1,Zl=!1,Bf=!1,Va=0;function zi(t){t!==hr&&t.next===null&&(hr===null?jl=hr=t:hr=hr.next=t),Zl=!0,zf||(zf=!0,aS())}function bo(t,n){if(!Bf&&Zl){Bf=!0;do for(var a=!1,r=jl;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=u&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,tg(r,f))}else f=xe,f=_t(r,r===Xe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||At(r,f)||(a=!0,tg(r,f));r=r.next}while(a);Bf=!1}}function iS(){Q0()}function Q0(){Zl=zf=!1;var t=0;Va!==0&&pS()&&(t=Va);for(var n=E(),a=null,r=jl;r!==null;){var u=r.next,f=J0(r,n);f===0?(r.next=null,a===null?jl=u:a.next=u,u===null&&(hr=a)):(a=r,(t!==0||(f&3)!==0)&&(Zl=!0)),r=u}mn!==0&&mn!==5||bo(t),Va!==0&&(Va=0)}function J0(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Pt(f),T=1<<v,B=u[v];B===-1?((T&a)===0||(T&r)!==0)&&(u[v]=ne(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=Xe,a=xe,a=_t(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Be===2||Be===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||At(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Oe(r),Is(a)){case 2:case 8:a=vt;break;case 32:a=lt;break;case 268435456:a=Rt;break;default:a=lt}return r=$0.bind(null,t),a=Ee(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Oe(r),t.callbackPriority=2,t.callbackNode=null,2}function $0(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yl()&&t.callbackNode!==a)return null;var r=xe;return r=_t(t,t===Xe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(O0(t,r,n),J0(t,E()),t.callbackNode!=null&&t.callbackNode===a?$0.bind(null,t):null)}function tg(t,n){if(Yl())return null;O0(t,n,!0)}function aS(){gS(function(){(Ne&6)!==0?Ee(ht,iS):Q0()})}function Ff(){if(Va===0){var t=Qs;t===0&&(t=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),Va=t}return Va}function eg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:il(""+t)}function ng(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function sS(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=eg((u[Mn]||null).action),v=r.submitter;v&&(n=(n=v[Mn]||null)?eg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new ol("action","action",null,r,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Va!==0){var B=v?ng(u,v):new FormData(u);sf(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=v?ng(u,v):new FormData(u),sf(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Hf=0;Hf<Mu.length;Hf++){var Gf=Mu[Hf],rS=Gf.toLowerCase(),oS=Gf[0].toUpperCase()+Gf.slice(1);Ei(rS,"on"+oS)}Ei(Lp,"onAnimationEnd"),Ei(Op,"onAnimationIteration"),Ei(Pp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Ex,"onTransitionRun"),Ei(bx,"onTransitionStart"),Ei(Tx,"onTransitionCancel"),Ei(Ip,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function ig(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var T=r[v],B=T.instance,Q=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ft){ul(ft)}u.currentTarget=null,f=B}else for(v=0;v<r.length;v++){if(T=r[v],B=T.instance,Q=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ft){ul(ft)}u.currentTarget=null,f=B}}}}function _e(t,n){var a=n[zs];a===void 0&&(a=n[zs]=new Set);var r=t+"__bubble";a.has(r)||(ag(n,t,2,!1),a.add(r))}function Vf(t,n,a){var r=0;n&&(r|=4),ag(a,t,r,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function kf(t){if(!t[Kl]){t[Kl]=!0,q.forEach(function(a){a!=="selectionchange"&&(lS.has(a)||Vf(a,!1,t),Vf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,Vf("selectionchange",!1,n))}}function ag(t,n,a,r){switch(Lg(n)){case 2:var u=IS;break;case 8:u=zS;break;default:u=ah}a=u.bind(null,n,a,t),u=void 0,!lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Xf(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var T=r.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=r.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=Ea(T),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){r=f=v;continue t}T=T.parentNode}}r=r.return}cp(function(){var Q=f,ft=ru(a),mt=[];t:{var tt=zp.get(t);if(tt!==void 0){var ot=ol,Vt=t;switch(t){case"keypress":if(sl(a)===0)break t;case"keydown":case"keyup":ot=ex;break;case"focusin":Vt="focus",ot=hu;break;case"focusout":Vt="blur",ot=hu;break;case"beforeblur":case"afterblur":ot=hu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=ax;break;case Lp:case Op:case Pp:ot=qv;break;case Ip:ot=rx;break;case"scroll":case"scrollend":ot=Gv;break;case"wheel":ot=lx;break;case"copy":case"cut":case"paste":ot=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=pp;break;case"toggle":case"beforetoggle":ot=ux}var te=(n&4)!==0,ke=!te&&(t==="scroll"||t==="scrollend"),Y=te?tt!==null?tt+"Capture":null:tt;te=[];for(var V=Q,K;V!==null;){var pt=V;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||Y===null||(pt=qr(V,Y),pt!=null&&te.push(Ao(V,pt,K))),ke)break;V=V.return}0<te.length&&(tt=new ot(tt,Vt,null,a,ft),mt.push({event:tt,listeners:te}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",tt&&a!==su&&(Vt=a.relatedTarget||a.fromElement)&&(Ea(Vt)||Vt[Mi]))break t;if((ot||tt)&&(tt=ft.window===ft?ft:(tt=ft.ownerDocument)?tt.defaultView||tt.parentWindow:window,ot?(Vt=a.relatedTarget||a.toElement,ot=Q,Vt=Vt?Ea(Vt):null,Vt!==null&&(ke=c(Vt),te=Vt.tag,Vt!==ke||te!==5&&te!==27&&te!==6)&&(Vt=null)):(ot=null,Vt=Q),ot!==Vt)){if(te=hp,pt="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(te=pp,pt="onPointerLeave",Y="onPointerEnter",V="pointer"),ke=ot==null?tt:ss(ot),K=Vt==null?tt:ss(Vt),tt=new te(pt,V+"leave",ot,a,ft),tt.target=ke,tt.relatedTarget=K,pt=null,Ea(ft)===Q&&(te=new te(Y,V+"enter",Vt,a,ft),te.target=K,te.relatedTarget=ke,pt=te),ke=pt,ot&&Vt)e:{for(te=cS,Y=ot,V=Vt,K=0,pt=Y;pt;pt=te(pt))K++;pt=0;for(var Qt=V;Qt;Qt=te(Qt))pt++;for(;0<K-pt;)Y=te(Y),K--;for(;0<pt-K;)V=te(V),pt--;for(;K--;){if(Y===V||V!==null&&Y===V.alternate){te=Y;break e}Y=te(Y),V=te(V)}te=null}else te=null;ot!==null&&sg(mt,tt,ot,te,!1),Vt!==null&&ke!==null&&sg(mt,ke,Vt,te,!0)}}t:{if(tt=Q?ss(Q):window,ot=tt.nodeName&&tt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&tt.type==="file")var Ae=yp;else if(Sp(tt))if(Ep)Ae=Sx;else{Ae=vx;var jt=_x}else ot=tt.nodeName,!ot||ot.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?Q&&yi(Q.elementType)&&(Ae=yp):Ae=xx;if(Ae&&(Ae=Ae(t,Q))){Mp(mt,Ae,a,ft);break t}jt&&jt(t,tt,Q),t==="focusout"&&Q&&tt.type==="number"&&Q.memoizedProps.value!=null&&En(tt,"number",tt.value)}switch(jt=Q?ss(Q):window,t){case"focusin":(Sp(jt)||jt.contentEditable==="true")&&(ks=jt,vu=Q,to=null);break;case"focusout":to=vu=ks=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,Up(mt,a,ft);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":Up(mt,a,ft)}var ce;if(pu)t:{switch(t){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Vs?vp(t,a)&&(Se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(mp&&a.locale!=="ko"&&(Vs||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Vs&&(ce=up()):(Aa=ft,cu="value"in Aa?Aa.value:Aa.textContent,Vs=!0)),jt=Ql(Q,Se),0<jt.length&&(Se=new dp(Se,t,null,a,ft),mt.push({event:Se,listeners:jt}),ce?Se.data=ce:(ce=xp(a),ce!==null&&(Se.data=ce)))),(ce=hx?dx(t,a):px(t,a))&&(Se=Ql(Q,"onBeforeInput"),0<Se.length&&(jt=new dp("onBeforeInput","beforeinput",null,a,ft),mt.push({event:jt,listeners:Se}),jt.data=ce)),sS(mt,t,Q,a,ft)}ig(mt,n)})}function Ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ql(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=qr(t,a),u!=null&&r.unshift(Ao(t,u,f)),u=qr(t,n),u!=null&&r.push(Ao(t,u,f))),t.tag===3)return r;t=t.return}return[]}function cS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function sg(t,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var T=a,B=T.alternate,Q=T.stateNode;if(T=T.tag,B!==null&&B===r)break;T!==5&&T!==26&&T!==27||Q===null||(B=Q,u?(Q=qr(a,f),Q!=null&&v.unshift(Ao(a,Q,B))):u||(Q=qr(a,f),Q!=null&&v.push(Ao(a,Q,B)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var uS=/\r\n?/g,fS=/\u0000|\uFFFD/g;function rg(t){return(typeof t=="string"?t:""+t).replace(uS,`
`).replace(fS,"")}function og(t,n){return n=rg(n),rg(t)===n}function Ve(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||pn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&pn(t,""+r);break;case"className":Jt(t,"class",r);break;case"tabIndex":Jt(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(t,a,r);break;case"style":Fs(t,r,f);break;case"data":if(n!=="object"){Jt(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=il(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(t,n,"name",u.name,u,null),Ve(t,n,"formEncType",u.formEncType,u,null),Ve(t,n,"formMethod",u.formMethod,u,null),Ve(t,n,"formTarget",u.formTarget,u,null)):(Ve(t,n,"encType",u.encType,u,null),Ve(t,n,"method",u.method,u,null),Ve(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=il(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ji);break;case"onScroll":r!=null&&_e("scroll",t);break;case"onScrollEnd":r!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=il(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":_e("beforetoggle",t),_e("toggle",t),Wt(t,"popover",r);break;case"xlinkActuate":qt(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":qt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":qt(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":qt(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":qt(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":qt(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":qt(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":qt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":qt(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Wt(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fv.get(a)||a,Wt(t,a,r))}}function Wf(t,n,a,r,u,f){switch(a){case"style":Fs(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?pn(t,r):(typeof r=="number"||typeof r=="bigint")&&pn(t,""+r);break;case"onScroll":r!=null&&_e("scroll",t);break;case"onScrollEnd":r!=null&&_e("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Wt(t,a,r)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(t,n,f,v,a,null)}}u&&Ve(t,n,"srcSet",a.srcSet,a,null),r&&Ve(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var T=f=v=u=null,B=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":u=ft;break;case"type":v=ft;break;case"checked":B=ft;break;case"defaultChecked":Q=ft;break;case"value":f=ft;break;case"defaultValue":T=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Ve(t,n,r,ft,a,null)}}Yi(t,f,T,B,Q,v,u,!1);return;case"select":_e("invalid",t),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":r=T;default:Ve(t,n,u,T,a,null)}n=f,a=v,t.multiple=!!r,n!=null?ri(t,!!r,n,!1):a!=null&&ri(t,!!r,a,!0);return;case"textarea":_e("invalid",t),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":r=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ve(t,n,v,T,a,null)}bn(t,r,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ve(t,n,B,r,a,null)}return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(r=0;r<To.length;r++)_e(To[r],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(t,n,Q,r,a,null)}return;default:if(yi(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&Wf(t,n,ft,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Ve(t,n,T,r,a,null))}function hS(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,T=null,B=null,Q=null,ft=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=mt;default:r.hasOwnProperty(ot)||Ve(t,n,ot,null,r,mt)}}for(var tt in r){var ot=r[tt];if(mt=a[tt],r.hasOwnProperty(tt)&&(ot!=null||mt!=null))switch(tt){case"type":f=ot;break;case"name":u=ot;break;case"checked":Q=ot;break;case"defaultChecked":ft=ot;break;case"value":v=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==mt&&Ve(t,n,tt,ot,r,mt)}}yn(t,v,T,B,Q,ft,f,u);return;case"select":ot=v=T=tt=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ot=B;default:r.hasOwnProperty(f)||Ve(t,n,f,null,r,B)}for(u in r)if(f=r[u],B=a[u],r.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":tt=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==B&&Ve(t,n,u,f,r,B)}n=T,a=v,r=ot,tt!=null?ri(t,!!a,tt,!1):!!r!=!!a&&(n!=null?ri(t,!!a,n,!0):ri(t,!!a,a?[]:"",!1));return;case"textarea":ot=tt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ve(t,n,T,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":tt=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(t,n,v,u,r,f)}ze(t,tt,ot);return;case"option":for(var Vt in a)if(tt=a[Vt],a.hasOwnProperty(Vt)&&tt!=null&&!r.hasOwnProperty(Vt))switch(Vt){case"selected":t.selected=!1;break;default:Ve(t,n,Vt,null,r,tt)}for(B in r)if(tt=r[B],ot=a[B],r.hasOwnProperty(B)&&tt!==ot&&(tt!=null||ot!=null))switch(B){case"selected":t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:Ve(t,n,B,tt,r,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)tt=a[te],a.hasOwnProperty(te)&&tt!=null&&!r.hasOwnProperty(te)&&Ve(t,n,te,null,r,tt);for(Q in r)if(tt=r[Q],ot=a[Q],r.hasOwnProperty(Q)&&tt!==ot&&(tt!=null||ot!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:Ve(t,n,Q,tt,r,ot)}return;default:if(yi(n)){for(var ke in a)tt=a[ke],a.hasOwnProperty(ke)&&tt!==void 0&&!r.hasOwnProperty(ke)&&Wf(t,n,ke,void 0,r,tt);for(ft in r)tt=r[ft],ot=a[ft],!r.hasOwnProperty(ft)||tt===ot||tt===void 0&&ot===void 0||Wf(t,n,ft,tt,r,ot);return}}for(var Y in a)tt=a[Y],a.hasOwnProperty(Y)&&tt!=null&&!r.hasOwnProperty(Y)&&Ve(t,n,Y,null,r,tt);for(mt in r)tt=r[mt],ot=a[mt],!r.hasOwnProperty(mt)||tt===ot||tt==null&&ot==null||Ve(t,n,mt,tt,r,ot)}function lg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,T=u.duration;if(f&&T&&lg(v)){for(v=0,T=u.responseEnd,r+=1;r<a.length;r++){var B=a[r],Q=B.startTime;if(Q>T)break;var ft=B.transferSize,mt=B.initiatorType;ft&&lg(mt)&&(B=B.responseEnd,v+=ft*(B<T?1:(T-Q)/(B-Q)))}if(--r,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var qf=null,Yf=null;function Jl(t){return t.nodeType===9?t:t.ownerDocument}function cg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ug(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function jf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function pS(){var t=window.event;return t&&t.type==="popstate"?t===Zf?!1:(Zf=t,!0):(Zf=null,!1)}var fg=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,gS=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(t){return hg.resolve(null).then(t).catch(_S)}:fg;function _S(t){setTimeout(function(){throw t})}function ka(t){return t==="head"}function dg(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),gr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Ro(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[as]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Ro(t.ownerDocument.body);a=u}while(a);gr(n)}function pg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Kf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),Wr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function vS(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[as])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function xS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function mg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function Qf(t){return t.data==="$?"||t.data==="$~"}function Jf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function SS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var $f=null;function gg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function _g(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function vg(t,n,a){switch(n=Jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Wr(t)}var pi=new Map,xg=new Set;function $l(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=H.d;H.d={f:MS,r:yS,D:ES,C:bS,L:TS,m:AS,X:CS,S:RS,M:wS};function MS(){var t=ua.f(),n=Xl();return t||n}function yS(t){var n=ba(t);n!==null&&n.tag===5&&n.type==="form"?Im(n):ua.r(t)}var dr=typeof document>"u"?null:document;function Sg(t,n,a){var r=dr;if(r&&typeof n=="string"&&n){var u=ae(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),xg.has(u)||(xg.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Dn(n,"link",t),A(n),r.head.appendChild(n)))}}function ES(t){ua.D(t),Sg("dns-prefetch",t,null)}function bS(t,n){ua.C(t,n),Sg("preconnect",t,n)}function TS(t,n,a){ua.L(t,n,a);var r=dr;if(r&&t&&n){var u='link[rel="preload"][as="'+ae(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ae(a.imageSizes)+'"]')):u+='[href="'+ae(t)+'"]';var f=u;switch(n){case"style":f=pr(t);break;case"script":f=mr(t)}pi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),pi.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(Co(f))||n==="script"&&r.querySelector(wo(f))||(n=r.createElement("link"),Dn(n,"link",t),A(n),r.head.appendChild(n)))}}function AS(t,n){ua.m(t,n);var a=dr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ae(r)+'"][href="'+ae(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=mr(t)}if(!pi.has(f)&&(t=g({rel:"modulepreload",href:t},n),pi.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(f)))return}r=a.createElement("link"),Dn(r,"link",t),A(r),a.head.appendChild(r)}}}function RS(t,n,a){ua.S(t,n,a);var r=dr;if(r&&t){var u=Ta(r).hoistableStyles,f=pr(t);n=n||"default";var v=u.get(f);if(!v){var T={loading:0,preload:null};if(v=r.querySelector(Co(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=pi.get(f))&&th(t,a);var B=v=r.createElement("link");A(B),Dn(B,"link",t),B._p=new Promise(function(Q,ft){B.onload=Q,B.onerror=ft}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,tc(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(f,v)}}}function CS(t,n){ua.X(t,n);var a=dr;if(a&&t){var r=Ta(a).hoistableScripts,u=mr(t),f=r.get(u);f||(f=a.querySelector(wo(u)),f||(t=g({src:t,async:!0},n),(n=pi.get(u))&&eh(t,n),f=a.createElement("script"),A(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function wS(t,n){ua.M(t,n);var a=dr;if(a&&t){var r=Ta(a).hoistableScripts,u=mr(t),f=r.get(u);f||(f=a.querySelector(wo(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=pi.get(u))&&eh(t,n),f=a.createElement("script"),A(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Mg(t,n,a,r){var u=(u=et.current)?$l(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=pr(a.href),a=Ta(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=pr(a.href);var f=Ta(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(Co(t)))&&!f._p&&(v.instance=f,v.state.loading=5),pi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(t,a),f||DS(u,t,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mr(a),a=Ta(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function pr(t){return'href="'+ae(t)+'"'}function Co(t){return'link[rel="stylesheet"]['+t+"]"}function yg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function DS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Dn(n,"link",a),A(n),t.head.appendChild(n))}function mr(t){return'[src="'+ae(t)+'"]'}function wo(t){return"script[async]"+t}function Eg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+ae(a.href)+'"]');if(r)return n.instance=r,A(r),r;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),A(r),Dn(r,"style",u),tc(r,a.precedence,t),n.instance=r;case"stylesheet":u=pr(a.href);var f=t.querySelector(Co(u));if(f)return n.state.loading|=4,n.instance=f,A(f),f;r=yg(a),(u=pi.get(u))&&th(r,u),f=(t.ownerDocument||t).createElement("link"),A(f);var v=f;return v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Dn(f,"link",r),n.state.loading|=4,tc(f,a.precedence,t),n.instance=f;case"script":return f=mr(a.src),(u=t.querySelector(wo(f)))?(n.instance=u,A(u),u):(r=a,(u=pi.get(f))&&(r=g({},a),eh(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),A(u),Dn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,tc(r,a.precedence,t));return n.instance}function tc(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var T=r[v];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function th(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function eh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ec=null;function bg(t,n,a){if(ec===null){var r=new Map,u=ec=new Map;u.set(a,r)}else u=ec,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[as]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var T=r.get(v);T?T.push(f):r.set(v,[f])}}return r}function Tg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function US(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ag(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function NS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=pr(r.href),f=n.querySelector(Co(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,A(f);return}f=n.ownerDocument||n,r=yg(r),(u=pi.get(u))&&th(r,u),f=f.createElement("link"),A(f);var v=f;v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Dn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=nc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var nh=0;function LS(t,n){return t.stylesheets&&t.count===0&&ac(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&nh===0&&(nh=62500*dS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>nh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function nc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ac(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ic=null;function ac(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ic=new Map,n.forEach(OS,t),ic=null,nc.call(t))}function OS(t,n){if(!(n.state.loading&4)){var a=ic.get(t);if(a)var r=a.get(null);else{a=new Map,ic.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=nc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Do={$$typeof:L,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function PS(t,n,a,r,u,f,v,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Rg(t,n,a,r,u,f,v,T,B,Q,ft,mt){return t=new PS(t,n,a,v,B,Q,ft,mt,T),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),t.current=f,f.stateNode=t,n=Ou(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Bu(f),t}function Cg(t){return t?(t=qs,t):qs}function wg(t,n,a,r,u,f){u=Cg(u),r.context===null?r.context=u:r.pendingContext=u,r=Na(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=La(t,r,n),a!==null&&(Wn(a,t,n),oo(a,t,n))}function Dg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ih(t,n){Dg(t,n),(t=t.alternate)&&Dg(t,n)}function Ug(t){if(t.tag===13||t.tag===31){var n=cs(t,67108864);n!==null&&Wn(n,t,67108864),ih(t,67108864)}}function Ng(t){if(t.tag===13||t.tag===31){var n=ti();n=Vr(n);var a=cs(t,n);a!==null&&Wn(a,t,n),ih(t,n)}}var sc=!0;function IS(t,n,a,r){var u=I.T;I.T=null;var f=H.p;try{H.p=2,ah(t,n,a,r)}finally{H.p=f,I.T=u}}function zS(t,n,a,r){var u=I.T;I.T=null;var f=H.p;try{H.p=8,ah(t,n,a,r)}finally{H.p=f,I.T=u}}function ah(t,n,a,r){if(sc){var u=sh(r);if(u===null)Xf(t,n,r,rc,a),Og(t,r);else if(FS(u,t,n,a,r))r.stopPropagation();else if(Og(t,r),n&4&&-1<BS.indexOf(t)){for(;u!==null;){var f=ba(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=St(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var B=1<<31-Pt(v);T.entanglements[1]|=B,v&=~B}zi(f),(Ne&6)===0&&(Vl=E()+500,bo(0))}}break;case 31:case 13:T=cs(f,2),T!==null&&Wn(T,f,2),Xl(),ih(f,2)}if(f=sh(r),f===null&&Xf(t,n,r,rc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Xf(t,n,r,null,a)}}function sh(t){return t=ru(t),rh(t)}var rc=null;function rh(t){if(rc=null,t=Ea(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return rc=t,null}function Lg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ht:return 2;case vt:return 8;case lt:case Zt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var oh=!1,Xa=null,Wa=null,qa=null,Uo=new Map,No=new Map,Ya=[],BS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Og(t,n){switch(t){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Lo(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ba(n),n!==null&&Ug(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function FS(t,n,a,r,u){switch(n){case"focusin":return Xa=Lo(Xa,t,n,a,r,u),!0;case"dragenter":return Wa=Lo(Wa,t,n,a,r,u),!0;case"mouseover":return qa=Lo(qa,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,Lo(Uo.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,No.set(f,Lo(No.get(f)||null,t,n,a,r,u)),!0}return!1}function Pg(t){var n=Ea(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Li(t.priority,function(){Ng(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Li(t.priority,function(){Ng(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=sh(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);su=r,a.target.dispatchEvent(r),su=null}else return n=ba(a),n!==null&&Ug(n),t.blockedOn=a,!1;n.shift()}return!0}function Ig(t,n,a){oc(t)&&a.delete(n)}function HS(){oh=!1,Xa!==null&&oc(Xa)&&(Xa=null),Wa!==null&&oc(Wa)&&(Wa=null),qa!==null&&oc(qa)&&(qa=null),Uo.forEach(Ig),No.forEach(Ig)}function lc(t,n){t.blockedOn===n&&(t.blockedOn=null,oh||(oh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,HS)))}var cc=null;function zg(t){cc!==t&&(cc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){cc===t&&(cc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(rh(r||a)===null)continue;break}var f=ba(a);f!==null&&(t.splice(n,3),n-=3,sf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function gr(t){function n(B){return lc(B,t)}Xa!==null&&lc(Xa,t),Wa!==null&&lc(Wa,t),qa!==null&&lc(qa,t),Uo.forEach(n),No.forEach(n);for(var a=0;a<Ya.length;a++){var r=Ya[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)Pg(a),a.blockedOn===null&&Ya.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[Mn]||null;if(typeof f=="function")v||zg(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[Mn]||null)T=v.formAction;else if(rh(u)!==null)continue}else T=v.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),zg(a)}}}function Bg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function lh(t){this._internalRoot=t}uc.prototype.render=lh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ti();wg(a,r,t,n,null,null)},uc.prototype.unmount=lh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;wg(t.current,2,null,t,null,null),Xl(),n[Mi]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var n=kr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ya.length&&n!==0&&n<Ya[a].priority;a++);Ya.splice(a,0,t),a===0&&Pg(t)}};var Fg=e.version;if(Fg!=="19.2.4")throw Error(s(527,Fg,"19.2.4"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var GS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{yt=fc.inject(GS),Et=fc}catch{}}return Po.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=qm,f=Ym,v=jm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Rg(t,1,!1,null,null,a,r,null,u,f,v,Bg),t[Mi]=n.current,kf(t),new lh(n)},Po.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=qm,v=Ym,T=jm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Rg(t,1,!0,n,a??null,r,u,B,f,v,T,Bg),n.context=Cg(null),a=n.current,r=ti(),r=Vr(r),u=Na(r),u.callback=null,La(a,u,r),a=r,n.current.lanes=a,Nn(n,a),zi(n),t[Mi]=n.current,kf(t),new uc(n)},Po.version="19.2.4",Po}var Zg;function JS(){if(Zg)return fh.exports;Zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),fh.exports=QS(),fh.exports}var $S=JS();const tM=$_($S);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zd="182",eM=0,Kg=1,nM=2,Gc=1,tv=2,Xo=3,is=0,Yn=1,ga=2,xa=0,Ur=1,Jh=2,Qg=3,Jg=4,iM=5,ws=100,aM=101,sM=102,rM=103,oM=104,lM=200,cM=201,uM=202,fM=203,$h=204,td=205,hM=206,dM=207,pM=208,mM=209,gM=210,_M=211,vM=212,xM=213,SM=214,ed=0,nd=1,id=2,Or=3,ad=4,sd=5,rd=6,od=7,ev=0,MM=1,yM=2,Vi=0,nv=1,iv=2,av=3,sv=4,rv=5,ov=6,lv=7,cv=300,Ls=301,Pr=302,ld=303,cd=304,tu=306,ud=1e3,_a=1001,fd=1002,Un=1003,EM=1004,hc=1005,In=1006,mh=1007,Us=1008,ii=1009,uv=1010,fv=1011,Yo=1012,Kd=1013,Xi=1014,Hi=1015,Ma=1016,Qd=1017,Jd=1018,jo=1020,hv=35902,dv=35899,pv=1021,mv=1022,Ui=1023,ya=1026,Ns=1027,gv=1028,$d=1029,Ir=1030,tp=1031,ep=1033,Vc=33776,kc=33777,Xc=33778,Wc=33779,hd=35840,dd=35841,pd=35842,md=35843,gd=36196,_d=37492,vd=37496,xd=37488,Sd=37489,Md=37490,yd=37491,Ed=37808,bd=37809,Td=37810,Ad=37811,Rd=37812,Cd=37813,wd=37814,Dd=37815,Ud=37816,Nd=37817,Ld=37818,Od=37819,Pd=37820,Id=37821,zd=36492,Bd=36494,Fd=36495,Hd=36283,Gd=36284,Vd=36285,kd=36286,bM=3200,_v=0,TM=1,es="",gi="srgb",zr="srgb-linear",Zc="linear",He="srgb",_r=7680,$g=519,AM=512,RM=513,CM=514,np=515,wM=516,DM=517,ip=518,UM=519,t_=35044,e_="300 es",Gi=2e3,Kc=2001;function vv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Qc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function NM(){const o=Qc("canvas");return o.style.display="block",o}const n_={};function i_(...o){const e="THREE."+o.shift();console.log(e,...o)}function ie(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Ce(...o){const e="THREE."+o.shift();console.error(e,...o)}function Zo(...o){const e=o.join(" ");e in n_||(n_[e]=!0,ie(...o))}function LM(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Fr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qc=Math.PI/180,Xd=180/Math.PI;function Qo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function ye(o,e,i){return Math.max(e,Math.min(i,o))}function OM(o,e){return(o%e+e)%e}function gh(o,e,i){return(1-i)*o+i*e}function Io(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function qn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Le{constructor(e=0,i=0){Le.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3],S=c[h+0],y=c[h+1],b=c[h+2],C=c[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(d>=1){e[i+0]=S,e[i+1]=y,e[i+2]=b,e[i+3]=C;return}if(g!==C||m!==S||p!==y||_!==b){let M=m*S+p*y+_*b+g*C;M<0&&(S=-S,y=-y,b=-b,C=-C,M=-M);let x=1-d;if(M<.9995){const O=Math.acos(M),L=Math.sin(O);x=Math.sin(x*O)/L,d=Math.sin(d*O)/L,m=m*x+S*d,p=p*x+y*d,_=_*x+b*d,g=g*x+C*d}else{m=m*x+S*d,p=p*x+y*d,_=_*x+b*d,g=g*x+C*d;const O=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=O,p*=O,_*=O,g*=O}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=c[h],S=c[h+1],y=c[h+2],b=c[h+3];return e[i]=d*b+_*g+m*y-p*S,e[i+1]=m*b+_*S+p*g-d*y,e[i+2]=p*b+_*y+d*S-m*g,e[i+3]=_*b-d*g-m*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),g=d(c/2),S=m(s/2),y=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=S*_*g+p*y*b,this._y=p*y*g-S*_*b,this._z=p*_*b+S*y*g,this._w=p*_*g-S*y*b;break;case"YXZ":this._x=S*_*g+p*y*b,this._y=p*y*g-S*_*b,this._z=p*_*b-S*y*g,this._w=p*_*g+S*y*b;break;case"ZXY":this._x=S*_*g-p*y*b,this._y=p*y*g+S*_*b,this._z=p*_*b+S*y*g,this._w=p*_*g-S*y*b;break;case"ZYX":this._x=S*_*g-p*y*b,this._y=p*y*g+S*_*b,this._z=p*_*b-S*y*g,this._w=p*_*g+S*y*b;break;case"YZX":this._x=S*_*g+p*y*b,this._y=p*y*g+S*_*b,this._z=p*_*b-S*y*g,this._w=p*_*g-S*y*b;break;case"XZY":this._x=S*_*g-p*y*b,this._y=p*y*g-S*_*b,this._z=p*_*b+S*y*g,this._w=p*_*g+S*y*b;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],S=s+d+g;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>g){const y=2*Math.sqrt(1+s-d-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>g){const y=2*Math.sqrt(1+d-s-g);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,i=0,s=0){J.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(a_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(a_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),_=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*_,this.y=s+m*_+d*p-c*g,this.z=l+m*g+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new J,a_=new Jo;class ue{constructor(e,i,s,l,c,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p)}set(e,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],g=s[7],S=s[2],y=s[5],b=s[8],C=l[0],M=l[3],x=l[6],O=l[1],L=l[4],U=l[7],z=l[2],F=l[5],P=l[8];return c[0]=h*C+d*O+m*z,c[3]=h*M+d*L+m*F,c[6]=h*x+d*U+m*P,c[1]=p*C+_*O+g*z,c[4]=p*M+_*L+g*F,c[7]=p*x+_*U+g*P,c[2]=S*C+y*O+b*z,c[5]=S*M+y*L+b*F,c[8]=S*x+y*U+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=_*h-d*p,S=d*m-_*c,y=p*c-h*m,b=i*g+s*S+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=g*C,e[1]=(l*p-_*s)*C,e[2]=(d*s-l*h)*C,e[3]=S*C,e[4]=(_*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=y*C,e[7]=(s*m-p*i)*C,e[8]=(h*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(vh.makeScale(e,i)),this}rotate(e){return this.premultiply(vh.makeRotation(-e)),this}translate(e,i){return this.premultiply(vh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new ue,s_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PM(){const o={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===He&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=Nr(l.r),l.g=Nr(l.g),l.b=Nr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===es?Zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[zr]:{primaries:e,whitePoint:s,transfer:Zc,toXYZ:s_,fromXYZ:r_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:s,transfer:He,toXYZ:s_,fromXYZ:r_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),o}const Te=PM();function Sa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Nr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vr;class IM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{vr===void 0&&(vr=Qc("canvas")),vr.width=e.width,vr.height=e.height;const l=vr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=vr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Qc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Sa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Sa(i[s]/255)*255):i[s]=Sa(i[s]);return{data:i,width:e.width,height:e.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zM=0;class ap{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(xh(l[h].image)):c.push(xh(l[h]))}else c=xh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function xh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?IM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let BM=0;const Sh=new J;class Fn extends Fr{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=_a,l=_a,c=In,h=Us,d=Ui,m=ii,p=Fn.DEFAULT_ANISOTROPY,_=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Qo(),this.name="",this.source=new ap(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ud:e.x=e.x-Math.floor(e.x);break;case _a:e.x=e.x<0?0:1;break;case fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ud:e.y=e.y-Math.floor(e.y);break;case _a:e.y=e.y<0?0:1;break;case fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=cv;Fn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],_=m[4],g=m[8],S=m[1],y=m[5],b=m[9],C=m[2],M=m[6],x=m[10];if(Math.abs(_-S)<.01&&Math.abs(g-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+C)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,U=(y+1)/2,z=(x+1)/2,F=(_+S)/4,P=(g+C)/4,Z=(b+M)/4;return L>U&&L>z?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=F/s,c=P/s):U>z?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=F/l,c=Z/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=P/c,l=Z/c),this.set(s,l,c,i),this}let O=Math.sqrt((M-b)*(M-b)+(g-C)*(g-C)+(S-_)*(S-_));return Math.abs(O)<.001&&(O=1),this.x=(M-b)/O,this.y=(g-C)/O,this.z=(S-_)/O,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this.w=ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this.w=ye(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FM extends Fr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Fn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new ap(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends FM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class xv extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HM extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o{constructor(e=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ai):Ai.fromBufferAttribute(c,h),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),dc.copy(s.boundingBox)),dc.applyMatrix4(e.matrixWorld),this.union(dc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),pc.subVectors(this.max,zo),xr.subVectors(e.a,zo),Sr.subVectors(e.b,zo),Mr.subVectors(e.c,zo),Za.subVectors(Sr,xr),Ka.subVectors(Mr,Sr),ys.subVectors(xr,Mr);let i=[0,-Za.z,Za.y,0,-Ka.z,Ka.y,0,-ys.z,ys.y,Za.z,0,-Za.x,Ka.z,0,-Ka.x,ys.z,0,-ys.x,-Za.y,Za.x,0,-Ka.y,Ka.x,0,-ys.y,ys.x,0];return!Mh(i,xr,Sr,Mr,pc)||(i=[1,0,0,0,1,0,0,0,1],!Mh(i,xr,Sr,Mr,pc))?!1:(mc.crossVectors(Za,Ka),i=[mc.x,mc.y,mc.z],Mh(i,xr,Sr,Mr,pc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fa=[new J,new J,new J,new J,new J,new J,new J,new J],Ai=new J,dc=new $o,xr=new J,Sr=new J,Mr=new J,Za=new J,Ka=new J,ys=new J,zo=new J,pc=new J,mc=new J,Es=new J;function Mh(o,e,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Es.fromArray(o,c);const d=l.x*Math.abs(Es.x)+l.y*Math.abs(Es.y)+l.z*Math.abs(Es.z),m=e.dot(Es),p=i.dot(Es),_=s.dot(Es);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const GM=new $o,Bo=new J,yh=new J;class tl{constructor(e=new J,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):GM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Bo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(yh)),this.expandByPoint(Bo.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ha=new J,Eh=new J,gc=new J,Qa=new J,bh=new J,_c=new J,Th=new J;class sp{constructor(e=new J,i=new J(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ha)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ha.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Eh.copy(e).add(i).multiplyScalar(.5),gc.copy(i).sub(e).normalize(),Qa.copy(this.origin).sub(Eh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(gc),d=Qa.dot(this.direction),m=-Qa.dot(gc),p=Qa.lengthSq(),_=Math.abs(1-h*h);let g,S,y,b;if(_>0)if(g=h*m-d,S=h*d-m,b=c*_,g>=0)if(S>=-b)if(S<=b){const C=1/_;g*=C,S*=C,y=g*(g+h*S+2*d)+S*(h*g+S+2*m)+p}else S=c,g=Math.max(0,-(h*S+d)),y=-g*g+S*(S+2*m)+p;else S=-c,g=Math.max(0,-(h*S+d)),y=-g*g+S*(S+2*m)+p;else S<=-b?(g=Math.max(0,-(-h*c+d)),S=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+S*(S+2*m)+p):S<=b?(g=0,S=Math.min(Math.max(-c,-m),c),y=S*(S+2*m)+p):(g=Math.max(0,-(h*c+d)),S=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+S*(S+2*m)+p);else S=h>0?-c:c,g=Math.max(0,-(h*S+d)),y=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Eh).addScaledVector(gc,S),y}intersectSphere(e,i){ha.subVectors(e.center,this.origin);const s=ha.dot(this.direction),l=ha.dot(ha)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),_>=0?(c=(e.min.y-S.y)*_,h=(e.max.y-S.y)*_):(c=(e.max.y-S.y)*_,h=(e.min.y-S.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(d=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ha)!==null}intersectTriangle(e,i,s,l,c){bh.subVectors(i,e),_c.subVectors(s,e),Th.crossVectors(bh,_c);let h=this.direction.dot(Th),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Qa.subVectors(this.origin,e);const m=d*this.direction.dot(_c.crossVectors(Qa,_c));if(m<0)return null;const p=d*this.direction.dot(bh.cross(Qa));if(p<0||m+p>h)return null;const _=-d*Qa.dot(Th);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,i,s,l,c,h,d,m,p,_,g,S,y,b,C,M){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p,_,g,S,y,b,C,M)}set(e,i,s,l,c,h,d,m,p,_,g,S,y,b,C,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=S,x[3]=y,x[7]=b,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/yr.setFromMatrixColumn(e,0).length(),c=1/yr.setFromMatrixColumn(e,1).length(),h=1/yr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const S=h*_,y=h*g,b=d*_,C=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+b*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=b+y*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*_,y=m*g,b=p*_,C=p*g;i[0]=S+C*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=y*d-b,i[6]=C+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*_,y=m*g,b=p*_,C=p*g;i[0]=S-C*d,i[4]=-h*g,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*_,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*_,y=h*g,b=d*_,C=d*g;i[0]=m*_,i[4]=b*p-y,i[8]=S*p+C,i[1]=m*g,i[5]=C*p+S,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*_,i[4]=C-S*g,i[8]=b*g+y,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*g+b,i[10]=S-C*g}else if(e.order==="XZY"){const S=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=S*g+C,i[5]=h*_,i[9]=y*g-b,i[2]=b*g-y,i[6]=d*_,i[10]=C*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VM,e,kM)}lookAt(e,i,s){const l=this.elements;return ei.subVectors(e,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ja.crossVectors(s,ei),Ja.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ja.crossVectors(s,ei)),Ja.normalize(),vc.crossVectors(ei,Ja),l[0]=Ja.x,l[4]=vc.x,l[8]=ei.x,l[1]=Ja.y,l[5]=vc.y,l[9]=ei.y,l[2]=Ja.z,l[6]=vc.z,l[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],g=s[5],S=s[9],y=s[13],b=s[2],C=s[6],M=s[10],x=s[14],O=s[3],L=s[7],U=s[11],z=s[15],F=l[0],P=l[4],Z=l[8],R=l[12],w=l[1],k=l[5],st=l[9],at=l[13],dt=l[2],ut=l[6],I=l[10],H=l[14],it=l[3],Mt=l[7],xt=l[11],N=l[15];return c[0]=h*F+d*w+m*dt+p*it,c[4]=h*P+d*k+m*ut+p*Mt,c[8]=h*Z+d*st+m*I+p*xt,c[12]=h*R+d*at+m*H+p*N,c[1]=_*F+g*w+S*dt+y*it,c[5]=_*P+g*k+S*ut+y*Mt,c[9]=_*Z+g*st+S*I+y*xt,c[13]=_*R+g*at+S*H+y*N,c[2]=b*F+C*w+M*dt+x*it,c[6]=b*P+C*k+M*ut+x*Mt,c[10]=b*Z+C*st+M*I+x*xt,c[14]=b*R+C*at+M*H+x*N,c[3]=O*F+L*w+U*dt+z*it,c[7]=O*P+L*k+U*ut+z*Mt,c[11]=O*Z+L*st+U*I+z*xt,c[15]=O*R+L*at+U*H+z*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],g=e[6],S=e[10],y=e[14],b=e[3],C=e[7],M=e[11],x=e[15],O=m*y-p*S,L=d*y-p*g,U=d*S-m*g,z=h*y-p*_,F=h*S-m*_,P=h*g-d*_;return i*(C*O-M*L+x*U)-s*(b*O-M*z+x*F)+l*(b*L-C*z+x*P)-c*(b*U-C*F+M*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=e[9],S=e[10],y=e[11],b=e[12],C=e[13],M=e[14],x=e[15],O=g*M*p-C*S*p+C*m*y-d*M*y-g*m*x+d*S*x,L=b*S*p-_*M*p-b*m*y+h*M*y+_*m*x-h*S*x,U=_*C*p-b*g*p+b*d*y-h*C*y-_*d*x+h*g*x,z=b*g*m-_*C*m-b*d*S+h*C*S+_*d*M-h*g*M,F=i*O+s*L+l*U+c*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return e[0]=O*P,e[1]=(C*S*c-g*M*c-C*l*y+s*M*y+g*l*x-s*S*x)*P,e[2]=(d*M*c-C*m*c+C*l*p-s*M*p-d*l*x+s*m*x)*P,e[3]=(g*m*c-d*S*c-g*l*p+s*S*p+d*l*y-s*m*y)*P,e[4]=L*P,e[5]=(_*M*c-b*S*c+b*l*y-i*M*y-_*l*x+i*S*x)*P,e[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*x-i*m*x)*P,e[7]=(h*S*c-_*m*c+_*l*p-i*S*p-h*l*y+i*m*y)*P,e[8]=U*P,e[9]=(b*g*c-_*C*c-b*s*y+i*C*y+_*s*x-i*g*x)*P,e[10]=(h*C*c-b*d*c+b*s*p-i*C*p-h*s*x+i*d*x)*P,e[11]=(_*d*c-h*g*c-_*s*p+i*g*p+h*s*y-i*d*y)*P,e[12]=z*P,e[13]=(_*C*l-b*g*l+b*s*S-i*C*S-_*s*M+i*g*M)*P,e[14]=(b*d*l-h*C*l-b*s*m+i*C*m+h*s*M-i*d*M)*P,e[15]=(h*g*l-_*d*l+_*s*m-i*g*m-h*s*S+i*d*S)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,m=e.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,g=d+d,S=c*p,y=c*_,b=c*g,C=h*_,M=h*g,x=d*g,O=m*p,L=m*_,U=m*g,z=s.x,F=s.y,P=s.z;return l[0]=(1-(C+x))*z,l[1]=(y+U)*z,l[2]=(b-L)*z,l[3]=0,l[4]=(y-U)*F,l[5]=(1-(S+x))*F,l[6]=(M+O)*F,l[7]=0,l[8]=(b+L)*P,l[9]=(M-O)*P,l[10]=(1-(S+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=yr.set(l[0],l[1],l[2]).length();const h=yr.set(l[4],l[5],l[6]).length(),d=yr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ri.copy(this);const p=1/c,_=1/h,g=1/d;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=_,Ri.elements[5]*=_,Ri.elements[6]*=_,Ri.elements[8]*=g,Ri.elements[9]*=g,Ri.elements[10]*=g,i.setFromRotationMatrix(Ri),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=Gi,m=!1){const p=this.elements,_=2*c/(i-e),g=2*c/(s-l),S=(i+e)/(i-e),y=(s+l)/(s-l);let b,C;if(m)b=c/(h-c),C=h*c/(h-c);else if(d===Gi)b=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===Kc)b=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=Gi,m=!1){const p=this.elements,_=2/(i-e),g=2/(s-l),S=-(i+e)/(i-e),y=-(s+l)/(s-l);let b,C;if(m)b=1/(h-c),C=h/(h-c);else if(d===Gi)b=-2/(h-c),C=-(h+c)/(h-c);else if(d===Kc)b=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const yr=new J,Ri=new Je,VM=new J(0,0,0),kM=new J(1,1,1),Ja=new J,vc=new J,ei=new J,o_=new Je,l_=new Jo;class Wi{constructor(e=0,i=0,s=0,l=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return o_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(o_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return l_.setFromEuler(this),this.setFromQuaternion(l_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class Sv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XM=0;const c_=new J,Er=new Jo,da=new Je,xc=new J,Fo=new J,WM=new J,qM=new Jo,u_=new J(1,0,0),f_=new J(0,1,0),h_=new J(0,0,1),d_={type:"added"},YM={type:"removed"},br={type:"childadded",child:null},Ah={type:"childremoved",child:null};class Sn extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new J,i=new Wi,s=new Jo,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new ue}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Er.setFromAxisAngle(e,i),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,i){return Er.setFromAxisAngle(e,i),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(u_,e)}rotateY(e){return this.rotateOnAxis(f_,e)}rotateZ(e){return this.rotateOnAxis(h_,e)}translateOnAxis(e,i){return c_.copy(e).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(u_,e)}translateY(e){return this.translateOnAxis(f_,e)}translateZ(e){return this.translateOnAxis(h_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?xc.copy(e):xc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Fo,xc,this.up):da.lookAt(xc,Fo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),Er.setFromRotationMatrix(da),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(d_),br.child=e,this.dispatchEvent(br),br.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(YM),Ah.child=e,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(d_),br.child=e,this.dispatchEvent(br),br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,WM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,qM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),g=h(e.shapes),S=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Sn.DEFAULT_UP=new J(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new J,pa=new J,Rh=new J,ma=new J,Tr=new J,Ar=new J,p_=new J,Ch=new J,wh=new J,Dh=new J,Uh=new an,Nh=new an,Lh=new an;class _i{constructor(e=new J,i=new J,s=new J){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ci.subVectors(e,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ci.subVectors(l,i),pa.subVectors(s,i),Rh.subVectors(e,i);const h=Ci.dot(Ci),d=Ci.dot(pa),m=Ci.dot(Rh),p=pa.dot(pa),_=pa.dot(Rh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const S=1/g,y=(p*m-d*_)*S,b=(h*_-d*m)*S;return c.set(1-y-b,b,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(e,i,s,l,c,h,d,m){return this.getBarycoord(e,i,s,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(h,ma.y),m.addScaledVector(d,ma.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return Uh.setScalar(0),Nh.setScalar(0),Lh.setScalar(0),Uh.fromBufferAttribute(e,i),Nh.fromBufferAttribute(e,s),Lh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Uh,c.x),h.addScaledVector(Nh,c.y),h.addScaledVector(Lh,c.z),h}static isFrontFacing(e,i,s,l){return Ci.subVectors(s,i),pa.subVectors(e,i),Ci.cross(pa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ci.cross(pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return _i.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return _i.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;Tr.subVectors(l,s),Ar.subVectors(c,s),Ch.subVectors(e,s);const m=Tr.dot(Ch),p=Ar.dot(Ch);if(m<=0&&p<=0)return i.copy(s);wh.subVectors(e,l);const _=Tr.dot(wh),g=Ar.dot(wh);if(_>=0&&g<=_)return i.copy(l);const S=m*g-_*p;if(S<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Tr,h);Dh.subVectors(e,c);const y=Tr.dot(Dh),b=Ar.dot(Dh);if(b>=0&&y<=b)return i.copy(c);const C=y*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Ar,d);const M=_*b-y*g;if(M<=0&&g-_>=0&&y-b>=0)return p_.subVectors(c,l),d=(g-_)/(g-_+(y-b)),i.copy(l).addScaledVector(p_,d);const x=1/(M+C+S);return h=C*x,d=S*x,i.copy(s).addScaledVector(Tr,h).addScaledVector(Ar,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Oh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class de{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=s,Te.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Te.workingColorSpace){if(e=OM(e,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Oh(h,c,e+1/3),this.g=Oh(h,c,e),this.b=Oh(h,c,e-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(e,i=gi){function s(c){c!==void 0&&parseFloat(c)<1&&ie("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ie("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=gi){const s=Mv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Te.workingToColorSpace(Pn.copy(this),e),Math.round(ye(Pn.r*255,0,255))*65536+Math.round(ye(Pn.g*255,0,255))*256+Math.round(ye(Pn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Te.workingColorSpace){return Te.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=gi){Te.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,s=Pn.g,l=Pn.b;return e!==gi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL($a),this.setHSL($a.h+e,$a.s+i,$a.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL($a),e.getHSL(Sc);const s=gh($a.h,Sc.h,i),l=gh($a.s,Sc.s,i),c=gh($a.l,Sc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new de;de.NAMES=Mv;let jM=0;class Os extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=Ur,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=td,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ie(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(s.blending=this.blending),this.side!==is&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==$h&&(s.blendSrc=this.blendSrc),this.blendDst!==td&&(s.blendDst=this.blendDst),this.blendEquation!==ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$g&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(s.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yv extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new J,Mc=new Le;let ZM=0;class Ni{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=t_,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(e),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Io(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=qn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array),c=qn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==t_&&(e.usage=this.usage),e}}class Ev extends Ni{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class bv extends Ni{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class vi extends Ni{constructor(e,i,s){super(new Float32Array(e),i,s)}}let KM=0;const mi=new Je,Ph=new Sn,Rr=new J,ni=new $o,Ho=new $o,xn=new J;class ai extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vv(e)?bv:Ev)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ue().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,i,s){return mi.makeTranslation(e,i,s),this.applyMatrix4(mi),this}scale(e,i,s){return mi.makeScale(e,i,s),this.applyMatrix4(mi),this}lookAt(e){return Ph.lookAt(e),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new vi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ni.min,Ho.min),ni.expandByPoint(xn),xn.addVectors(ni.max,Ho.max),ni.expandByPoint(xn)):(ni.expandByPoint(Ho.min),ni.expandByPoint(Ho.max))}ni.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)xn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)xn.fromBufferAttribute(d,p),m&&(Rr.fromBufferAttribute(e,p),xn.add(Rr)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<s.count;Z++)d[Z]=new J,m[Z]=new J;const p=new J,_=new J,g=new J,S=new Le,y=new Le,b=new Le,C=new J,M=new J;function x(Z,R,w){p.fromBufferAttribute(s,Z),_.fromBufferAttribute(s,R),g.fromBufferAttribute(s,w),S.fromBufferAttribute(c,Z),y.fromBufferAttribute(c,R),b.fromBufferAttribute(c,w),_.sub(p),g.sub(p),y.sub(S),b.sub(S);const k=1/(y.x*b.y-b.x*y.y);isFinite(k)&&(C.copy(_).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(k),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(k),d[Z].add(C),d[R].add(C),d[w].add(C),m[Z].add(M),m[R].add(M),m[w].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let Z=0,R=O.length;Z<R;++Z){const w=O[Z],k=w.start,st=w.count;for(let at=k,dt=k+st;at<dt;at+=3)x(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const L=new J,U=new J,z=new J,F=new J;function P(Z){z.fromBufferAttribute(l,Z),F.copy(z);const R=d[Z];L.copy(R),L.sub(z.multiplyScalar(z.dot(R))).normalize(),U.crossVectors(F,R);const k=U.dot(m[Z])<0?-1:1;h.setXYZW(Z,L.x,L.y,L.z,k)}for(let Z=0,R=O.length;Z<R;++Z){const w=O[Z],k=w.start,st=w.count;for(let at=k,dt=k+st;at<dt;at+=3)P(e.getX(at+0)),P(e.getX(at+1)),P(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,y=s.count;S<y;S++)s.setXYZ(S,0,0,0);const l=new J,c=new J,h=new J,d=new J,m=new J,p=new J,_=new J,g=new J;if(e)for(let S=0,y=e.count;S<y;S+=3){const b=e.getX(S+0),C=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,g=d.normalized,S=new p.constructor(m.length*_);let y=0,b=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*_;for(let x=0;x<_;x++)S[b++]=p[y++]}return new Ni(S,_,g)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ai,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const S=p[_],y=e(S,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,S=p.length;g<S;g++){const y=p[g];_.push(y.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],g=c[p];for(let S=0,y=g.length;S<y;S++)_.push(g[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const m_=new Je,bs=new sp,yc=new tl,g_=new J,Ec=new J,bc=new J,Tc=new J,Ih=new J,Ac=new J,__=new J,Rc=new J;class xi extends Sn{constructor(e=new ai,i=new yv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Ac.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(Ih.fromBufferAttribute(g,e),h?Ac.addScaledVector(Ih,_):Ac.addScaledVector(Ih.sub(i),_))}i.add(Ac)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),yc.copy(s.boundingSphere),yc.applyMatrix4(c),bs.copy(e.ray).recast(e.near),!(yc.containsPoint(bs.origin)===!1&&(bs.intersectSphere(yc,g_)===null||bs.origin.distanceToSquared(g_)>(e.far-e.near)**2))&&(m_.copy(c).invert(),bs.copy(e.ray).applyMatrix4(m_),!(s.boundingBox!==null&&bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,bs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,S=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const M=S[b],x=h[M.materialIndex],O=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=O,z=L;U<z;U+=3){const F=d.getX(U),P=d.getX(U+1),Z=d.getX(U+2);l=Cc(this,x,e,s,p,_,g,F,P,Z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=b,x=C;M<x;M+=3){const O=d.getX(M),L=d.getX(M+1),U=d.getX(M+2);l=Cc(this,h,e,s,p,_,g,O,L,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const M=S[b],x=h[M.materialIndex],O=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=O,z=L;U<z;U+=3){const F=U,P=U+1,Z=U+2;l=Cc(this,x,e,s,p,_,g,F,P,Z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=b,x=C;M<x;M+=3){const O=M,L=M+1,U=M+2;l=Cc(this,h,e,s,p,_,g,O,L,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function QM(o,e,i,s,l,c,h,d){let m;if(e.side===Yn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,e.side===is,d),m===null)return null;Rc.copy(d),Rc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Rc);return p<i.near||p>i.far?null:{distance:p,point:Rc.clone(),object:o}}function Cc(o,e,i,s,l,c,h,d,m,p){o.getVertexPosition(d,Ec),o.getVertexPosition(m,bc),o.getVertexPosition(p,Tc);const _=QM(o,e,i,s,Ec,bc,Tc,__);if(_){const g=new J;_i.getBarycoord(__,Ec,bc,Tc,g),l&&(_.uv=_i.getInterpolatedAttribute(l,d,m,p,g,new Le)),c&&(_.uv1=_i.getInterpolatedAttribute(c,d,m,p,g,new Le)),h&&(_.normal=_i.getInterpolatedAttribute(h,d,m,p,g,new J),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new J,materialIndex:0};_i.getNormal(Ec,bc,Tc,S.normal),_.face=S,_.barycoord=g}return _}class va extends ai{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],g=[];let S=0,y=0;b("z","y","x",-1,-1,s,i,e,h,c,0),b("z","y","x",1,-1,s,i,-e,h,c,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new vi(p,3)),this.setAttribute("normal",new vi(_,3)),this.setAttribute("uv",new vi(g,2));function b(C,M,x,O,L,U,z,F,P,Z,R){const w=U/P,k=z/Z,st=U/2,at=z/2,dt=F/2,ut=P+1,I=Z+1;let H=0,it=0;const Mt=new J;for(let xt=0;xt<I;xt++){const N=xt*k-at;for(let nt=0;nt<ut;nt++){const gt=nt*w-st;Mt[C]=gt*O,Mt[M]=N*L,Mt[x]=dt,p.push(Mt.x,Mt.y,Mt.z),Mt[C]=0,Mt[M]=0,Mt[x]=F>0?1:-1,_.push(Mt.x,Mt.y,Mt.z),g.push(nt/P),g.push(1-xt/Z),H+=1}}for(let xt=0;xt<Z;xt++)for(let N=0;N<P;N++){const nt=S+N+ut*xt,gt=S+N+ut*(xt+1),Tt=S+(N+1)+ut*(xt+1),Ft=S+(N+1)+ut*xt;m.push(nt,gt,Ft),m.push(gt,Tt,Ft),it+=6}d.addGroup(y,it,R),y+=it,S+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Br(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Bn(o){const e={};for(let i=0;i<o.length;i++){const s=Br(o[i]);for(const l in s)e[l]=s[l]}return e}function JM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Tv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const $M={clone:Br,merge:Bn};var ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ty,this.fragmentShader=ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=JM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Av extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new J,v_=new Le,x_=new Le;class Di extends Av{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Xd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xd*2*Math.atan(Math.tan(qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,i){return this.getViewBounds(e,v_,x_),i.subVectors(x_,v_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(qc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Cr=-90,wr=1;class ny extends Sn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Di(Cr,wr,e,i);l.layers=this.layers,this.add(l);const c=new Di(Cr,wr,e,i);c.layers=this.layers,this.add(c);const h=new Di(Cr,wr,e,i);h.layers=this.layers,this.add(h);const d=new Di(Cr,wr,e,i);d.layers=this.layers,this.add(d);const m=new Di(Cr,wr,e,i);m.layers=this.layers,this.add(m);const p=new Di(Cr,wr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(g,S,y),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Rv extends Fn{constructor(e=[],i=Ls,s,l,c,h,d,m,p,_){super(e,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cv extends ki{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Rv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new va(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:xa});c.uniforms.tEquirect.value=i;const h=new xi(l,c),d=i.minFilter;return i.minFilter===Us&&(i.minFilter=In),new ny(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class wc extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iy={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,s),x=this._getHandJoint(p,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=_.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&S>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(iy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new wc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class rp{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new de(e),this.near=i,this.far=s}clone(){return new rp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ay extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class sy extends Fn{constructor(e=null,i=1,s=1,l,c,h,d,m,p=Un,_=Un,g,S){super(null,h,d,m,p,_,l,c,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bh=new J,ry=new J,oy=new ue;class Cs{constructor(e=new J(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Bh.subVectors(s,i).cross(ry.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Bh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||oy.getNormalMatrix(e),l=this.coplanarPoint(Bh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new tl,ly=new Le(.5,.5),Dc=new J;class op{constructor(e=new Cs,i=new Cs,s=new Cs,l=new Cs,c=new Cs,h=new Cs){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Gi,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],S=c[6],y=c[7],b=c[8],C=c[9],M=c[10],x=c[11],O=c[12],L=c[13],U=c[14],z=c[15];if(l[0].setComponents(p-h,y-_,x-b,z-O).normalize(),l[1].setComponents(p+h,y+_,x+b,z+O).normalize(),l[2].setComponents(p+d,y+g,x+C,z+L).normalize(),l[3].setComponents(p-d,y-g,x-C,z-L).normalize(),s)l[4].setComponents(m,S,M,U).normalize(),l[5].setComponents(p-m,y-S,x-M,z-U).normalize();else if(l[4].setComponents(p-m,y-S,x-M,z-U).normalize(),i===Gi)l[5].setComponents(p+m,y+S,x+M,z+U).normalize();else if(i===Kc)l[5].setComponents(m,S,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const i=ly.distanceTo(e.center);return Ts.radius=.7071067811865476+i,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Dc.x=l.normal.x>0?e.max.x:e.min.x,Dc.y=l.normal.y>0?e.max.y:e.min.y,Dc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wo extends Os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jc=new J,$c=new J,S_=new Je,Go=new sp,Uc=new tl,Fh=new J,M_=new J;class cy extends Sn{constructor(e=new ai,i=new Wo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Jc.fromBufferAttribute(i,l-1),$c.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Jc.distanceTo($c);e.setAttribute("lineDistance",new vi(s,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(l),Uc.radius+=c,e.ray.intersectsSphere(Uc)===!1)return;S_.copy(l).invert(),Go.copy(e.ray).applyMatrix4(S_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,S=s.attributes.position;if(_!==null){const y=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let C=y,M=b-1;C<M;C+=p){const x=_.getX(C),O=_.getX(C+1),L=Nc(this,e,Go,m,x,O,C);L&&i.push(L)}if(this.isLineLoop){const C=_.getX(b-1),M=_.getX(y),x=Nc(this,e,Go,m,C,M,b-1);x&&i.push(x)}}else{const y=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let C=y,M=b-1;C<M;C+=p){const x=Nc(this,e,Go,m,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=Nc(this,e,Go,m,b-1,y,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Nc(o,e,i,s,l,c,h){const d=o.geometry.attributes.position;if(Jc.fromBufferAttribute(d,l),$c.fromBufferAttribute(d,c),i.distanceSqToSegment(Jc,$c,Fh,M_)>s)return;Fh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Fh);if(!(p<e.near||p>e.far))return{distance:p,point:M_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const y_=new J,E_=new J;class Lc extends cy{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)y_.fromBufferAttribute(i,l),E_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+y_.distanceTo(E_);e.setAttribute("lineDistance",new vi(s,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wv extends Os{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const b_=new Je,Wd=new sp,Oc=new tl,Pc=new J;class uy extends Sn{constructor(e=new ai,i=new wv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Oc.copy(s.boundingSphere),Oc.applyMatrix4(l),Oc.radius+=c,e.ray.intersectsSphere(Oc)===!1)return;b_.copy(l).invert(),Wd.copy(e.ray).applyMatrix4(b_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let b=S,C=y;b<C;b++){const M=p.getX(b);Pc.fromBufferAttribute(g,M),T_(Pc,M,m,l,e,i,this)}}else{const S=Math.max(0,h.start),y=Math.min(g.count,h.start+h.count);for(let b=S,C=y;b<C;b++)Pc.fromBufferAttribute(g,b),T_(Pc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function T_(o,e,i,s,l,c,h){const d=Wd.distanceSqToPoint(o);if(d<i){const m=new J;Wd.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class Ko extends Fn{constructor(e,i,s=Xi,l,c,h,d=Un,m=Un,p,_=ya,g=1){if(_!==ya&&_!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ap(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class fy extends Ko{constructor(e,i=Xi,s=Ls,l,c,h=Un,d=Un,m,p=ya){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,s,l,c,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dv extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const Ic=new J,zc=new J,Hh=new J,Bc=new _i;class Gh extends ai{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),c=Math.cos(qc*i),h=e.getIndex(),d=e.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],_=["a","b","c"],g=new Array(3),S={},y=[];for(let b=0;b<m;b+=3){h?(p[0]=h.getX(b),p[1]=h.getX(b+1),p[2]=h.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:C,b:M,c:x}=Bc;if(C.fromBufferAttribute(d,p[0]),M.fromBufferAttribute(d,p[1]),x.fromBufferAttribute(d,p[2]),Bc.getNormal(Hh),g[0]=`${Math.round(C.x*l)},${Math.round(C.y*l)},${Math.round(C.z*l)}`,g[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,g[2]=`${Math.round(x.x*l)},${Math.round(x.y*l)},${Math.round(x.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let O=0;O<3;O++){const L=(O+1)%3,U=g[O],z=g[L],F=Bc[_[O]],P=Bc[_[L]],Z=`${U}_${z}`,R=`${z}_${U}`;R in S&&S[R]?(Hh.dot(S[R].normal)<=c&&(y.push(F.x,F.y,F.z),y.push(P.x,P.y,P.z)),S[R]=null):Z in S||(S[Z]={index0:p[O],index1:p[L],normal:Hh.clone()})}}for(const b in S)if(S[b]){const{index0:C,index1:M}=S[b];Ic.fromBufferAttribute(d,C),zc.fromBufferAttribute(d,M),y.push(Ic.x,Ic.y,Ic.z),y.push(zc.x,zc.y,zc.z)}this.setAttribute("position",new vi(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class eu extends ai{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,g=e/d,S=i/m,y=[],b=[],C=[],M=[];for(let x=0;x<_;x++){const O=x*S-h;for(let L=0;L<p;L++){const U=L*g-c;b.push(U,-O,0),C.push(0,0,1),M.push(L/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<d;O++){const L=O+p*x,U=O+p*(x+1),z=O+1+p*(x+1),F=O+1+p*x;y.push(L,U,F),y.push(U,z,F)}this.setIndex(y),this.setAttribute("position",new vi(b,3)),this.setAttribute("normal",new vi(C,3)),this.setAttribute("uv",new vi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.width,e.height,e.widthSegments,e.heightSegments)}}class hy extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vh extends Os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_v,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dy extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class py extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Uv extends Sn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const kh=new Je,A_=new J,R_=new J;class my{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new op,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;A_.setFromMatrixPosition(e.matrixWorld),i.position.copy(A_),R_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(R_),i.updateMatrixWorld(),kh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nu extends Av{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class gy extends my{constructor(){super(new nu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _y extends Uv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new gy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class vy extends Uv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class xy extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Sy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function C_(o,e,i,s){const l=My(s);switch(i){case pv:return o*e;case gv:return o*e/l.components*l.byteLength;case $d:return o*e/l.components*l.byteLength;case Ir:return o*e*2/l.components*l.byteLength;case tp:return o*e*2/l.components*l.byteLength;case mv:return o*e*3/l.components*l.byteLength;case Ui:return o*e*4/l.components*l.byteLength;case ep:return o*e*4/l.components*l.byteLength;case Vc:case kc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Xc:case Wc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dd:case md:return Math.max(o,16)*Math.max(e,8)/4;case hd:case pd:return Math.max(o,8)*Math.max(e,8)/2;case gd:case _d:case xd:case Sd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case vd:case Md:case yd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Td:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case wd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Od:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Id:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case zd:case Bd:case Fd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Hd:case Gd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Vd:case kd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function My(o){switch(o){case ii:case uv:return{byteLength:1,components:1};case Yo:case fv:case Ma:return{byteLength:2,components:1};case Qd:case Jd:return{byteLength:2,components:4};case Xi:case Kd:case Hi:return{byteLength:4,components:1};case hv:case dv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zd}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nv(){let o=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function yy(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,_);else{g.sort((y,b)=>y.start-b.start);let S=0;for(let y=1;y<g.length;y++){const b=g[S],C=g[y];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++S,g[S]=C)}g.length=S+1;for(let y=0,b=g.length;y<b;y++){const C=g[y];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var Ey=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,by=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ty=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ay=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ry=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ny=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ly=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Oy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Py=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Iy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ky=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$y="gl_FragColor = linearToOutputTexel( gl_FragColor );",tE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_E=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ME=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,EE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,JE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,o1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,l1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,u1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,h1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,g1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,M1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,w1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,k1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Y1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:Ey,alphahash_pars_fragment:by,alphamap_fragment:Ty,alphamap_pars_fragment:Ay,alphatest_fragment:Ry,alphatest_pars_fragment:Cy,aomap_fragment:wy,aomap_pars_fragment:Dy,batching_pars_vertex:Uy,batching_vertex:Ny,begin_vertex:Ly,beginnormal_vertex:Oy,bsdfs:Py,iridescence_fragment:Iy,bumpmap_pars_fragment:zy,clipping_planes_fragment:By,clipping_planes_pars_fragment:Fy,clipping_planes_pars_vertex:Hy,clipping_planes_vertex:Gy,color_fragment:Vy,color_pars_fragment:ky,color_pars_vertex:Xy,color_vertex:Wy,common:qy,cube_uv_reflection_fragment:Yy,defaultnormal_vertex:jy,displacementmap_pars_vertex:Zy,displacementmap_vertex:Ky,emissivemap_fragment:Qy,emissivemap_pars_fragment:Jy,colorspace_fragment:$y,colorspace_pars_fragment:tE,envmap_fragment:eE,envmap_common_pars_fragment:nE,envmap_pars_fragment:iE,envmap_pars_vertex:aE,envmap_physical_pars_fragment:mE,envmap_vertex:sE,fog_vertex:rE,fog_pars_vertex:oE,fog_fragment:lE,fog_pars_fragment:cE,gradientmap_pars_fragment:uE,lightmap_pars_fragment:fE,lights_lambert_fragment:hE,lights_lambert_pars_fragment:dE,lights_pars_begin:pE,lights_toon_fragment:gE,lights_toon_pars_fragment:_E,lights_phong_fragment:vE,lights_phong_pars_fragment:xE,lights_physical_fragment:SE,lights_physical_pars_fragment:ME,lights_fragment_begin:yE,lights_fragment_maps:EE,lights_fragment_end:bE,logdepthbuf_fragment:TE,logdepthbuf_pars_fragment:AE,logdepthbuf_pars_vertex:RE,logdepthbuf_vertex:CE,map_fragment:wE,map_pars_fragment:DE,map_particle_fragment:UE,map_particle_pars_fragment:NE,metalnessmap_fragment:LE,metalnessmap_pars_fragment:OE,morphinstance_vertex:PE,morphcolor_vertex:IE,morphnormal_vertex:zE,morphtarget_pars_vertex:BE,morphtarget_vertex:FE,normal_fragment_begin:HE,normal_fragment_maps:GE,normal_pars_fragment:VE,normal_pars_vertex:kE,normal_vertex:XE,normalmap_pars_fragment:WE,clearcoat_normal_fragment_begin:qE,clearcoat_normal_fragment_maps:YE,clearcoat_pars_fragment:jE,iridescence_pars_fragment:ZE,opaque_fragment:KE,packing:QE,premultiplied_alpha_fragment:JE,project_vertex:$E,dithering_fragment:t1,dithering_pars_fragment:e1,roughnessmap_fragment:n1,roughnessmap_pars_fragment:i1,shadowmap_pars_fragment:a1,shadowmap_pars_vertex:s1,shadowmap_vertex:r1,shadowmask_pars_fragment:o1,skinbase_vertex:l1,skinning_pars_vertex:c1,skinning_vertex:u1,skinnormal_vertex:f1,specularmap_fragment:h1,specularmap_pars_fragment:d1,tonemapping_fragment:p1,tonemapping_pars_fragment:m1,transmission_fragment:g1,transmission_pars_fragment:_1,uv_pars_fragment:v1,uv_pars_vertex:x1,uv_vertex:S1,worldpos_vertex:M1,background_vert:y1,background_frag:E1,backgroundCube_vert:b1,backgroundCube_frag:T1,cube_vert:A1,cube_frag:R1,depth_vert:C1,depth_frag:w1,distance_vert:D1,distance_frag:U1,equirect_vert:N1,equirect_frag:L1,linedashed_vert:O1,linedashed_frag:P1,meshbasic_vert:I1,meshbasic_frag:z1,meshlambert_vert:B1,meshlambert_frag:F1,meshmatcap_vert:H1,meshmatcap_frag:G1,meshnormal_vert:V1,meshnormal_frag:k1,meshphong_vert:X1,meshphong_frag:W1,meshphysical_vert:q1,meshphysical_frag:Y1,meshtoon_vert:j1,meshtoon_frag:Z1,points_vert:K1,points_frag:Q1,shadow_vert:J1,shadow_frag:$1,sprite_vert:tb,sprite_frag:eb},Ot={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Fi={basic:{uniforms:Bn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Bn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Bn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Bn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Bn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Bn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Bn([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Bn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Bn([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Bn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Bn([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Bn([Ot.common,Ot.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Bn([Ot.lights,Ot.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Fi.physical={uniforms:Bn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Fc={r:0,b:0,g:0},As=new Wi,nb=new Je;function ib(o,e,i,s,l,c,h){const d=new de(0);let m=c===!0?0:1,p,_,g=null,S=0,y=null;function b(L){let U=L.isScene===!0?L.background:null;return U&&U.isTexture&&(U=(L.backgroundBlurriness>0?i:e).get(U)),U}function C(L){let U=!1;const z=b(L);z===null?x(d,m):z&&z.isColor&&(x(z,1),U=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(L,U){const z=b(U);z&&(z.isCubeTexture||z.mapping===tu)?(_===void 0&&(_=new xi(new va(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Br(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,P,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),As.copy(U.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(nb.makeRotationFromEuler(As)),_.material.toneMapped=Te.getTransfer(z.colorSpace)!==He,(g!==z||S!==z.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=z,S=z.version,y=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new xi(new eu(2,2),new qi({name:"BackgroundMaterial",uniforms:Br(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Te.getTransfer(z.colorSpace)!==He,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||S!==z.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=z,S=z.version,y=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,U){L.getRGB(Fc,Tv(o)),s.buffers.color.setClear(Fc.r,Fc.g,Fc.b,U,h)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,U=1){d.set(L),m=U,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(d,m)},render:C,addToRenderList:M,dispose:O}}function ab(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(w,k,st,at,dt){let ut=!1;const I=g(at,st,k);c!==I&&(c=I,p(c.object)),ut=y(w,at,st,dt),ut&&b(w,at,st,dt),dt!==null&&e.update(dt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,U(w,k,st,at),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function g(w,k,st){const at=st.wireframe===!0;let dt=s[w.id];dt===void 0&&(dt={},s[w.id]=dt);let ut=dt[k.id];ut===void 0&&(ut={},dt[k.id]=ut);let I=ut[at];return I===void 0&&(I=S(m()),ut[at]=I),I}function S(w){const k=[],st=[],at=[];for(let dt=0;dt<i;dt++)k[dt]=0,st[dt]=0,at[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:st,attributeDivisors:at,object:w,attributes:{},index:null}}function y(w,k,st,at){const dt=c.attributes,ut=k.attributes;let I=0;const H=st.getAttributes();for(const it in H)if(H[it].location>=0){const xt=dt[it];let N=ut[it];if(N===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),xt===void 0||xt.attribute!==N||N&&xt.data!==N.data)return!0;I++}return c.attributesNum!==I||c.index!==at}function b(w,k,st,at){const dt={},ut=k.attributes;let I=0;const H=st.getAttributes();for(const it in H)if(H[it].location>=0){let xt=ut[it];xt===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));const N={};N.attribute=xt,xt&&xt.data&&(N.data=xt.data),dt[it]=N,I++}c.attributes=dt,c.attributesNum=I,c.index=at}function C(){const w=c.newAttributes;for(let k=0,st=w.length;k<st;k++)w[k]=0}function M(w){x(w,0)}function x(w,k){const st=c.newAttributes,at=c.enabledAttributes,dt=c.attributeDivisors;st[w]=1,at[w]===0&&(o.enableVertexAttribArray(w),at[w]=1),dt[w]!==k&&(o.vertexAttribDivisor(w,k),dt[w]=k)}function O(){const w=c.newAttributes,k=c.enabledAttributes;for(let st=0,at=k.length;st<at;st++)k[st]!==w[st]&&(o.disableVertexAttribArray(st),k[st]=0)}function L(w,k,st,at,dt,ut,I){I===!0?o.vertexAttribIPointer(w,k,st,dt,ut):o.vertexAttribPointer(w,k,st,at,dt,ut)}function U(w,k,st,at){C();const dt=at.attributes,ut=st.getAttributes(),I=k.defaultAttributeValues;for(const H in ut){const it=ut[H];if(it.location>=0){let Mt=dt[H];if(Mt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),Mt!==void 0){const xt=Mt.normalized,N=Mt.itemSize,nt=e.get(Mt);if(nt===void 0)continue;const gt=nt.buffer,Tt=nt.type,Ft=nt.bytesPerElement,et=Tt===o.INT||Tt===o.UNSIGNED_INT||Mt.gpuType===Kd;if(Mt.isInterleavedBufferAttribute){const ct=Mt.data,Dt=ct.stride,kt=Mt.offset;if(ct.isInstancedInterleavedBuffer){for(let Ht=0;Ht<it.locationSize;Ht++)x(it.location+Ht,ct.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ht=0;Ht<it.locationSize;Ht++)M(it.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let Ht=0;Ht<it.locationSize;Ht++)L(it.location+Ht,N/it.locationSize,Tt,xt,Dt*Ft,(kt+N/it.locationSize*Ht)*Ft,et)}else{if(Mt.isInstancedBufferAttribute){for(let ct=0;ct<it.locationSize;ct++)x(it.location+ct,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ct=0;ct<it.locationSize;ct++)M(it.location+ct);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let ct=0;ct<it.locationSize;ct++)L(it.location+ct,N/it.locationSize,Tt,xt,N*Ft,N/it.locationSize*ct*Ft,et)}}else if(I!==void 0){const xt=I[H];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(it.location,xt);break;case 3:o.vertexAttrib3fv(it.location,xt);break;case 4:o.vertexAttrib4fv(it.location,xt);break;default:o.vertexAttrib1fv(it.location,xt)}}}}O()}function z(){Z();for(const w in s){const k=s[w];for(const st in k){const at=k[st];for(const dt in at)_(at[dt].object),delete at[dt];delete k[st]}delete s[w]}}function F(w){if(s[w.id]===void 0)return;const k=s[w.id];for(const st in k){const at=k[st];for(const dt in at)_(at[dt].object),delete at[dt];delete k[st]}delete s[w.id]}function P(w){for(const k in s){const st=s[k];if(st[w.id]===void 0)continue;const at=st[w.id];for(const dt in at)_(at[dt].object),delete at[dt];delete st[w.id]}}function Z(){R(),h=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:R,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:M,disableUnusedAttributes:O}}function sb(o,e,i){let s;function l(p){s=p}function c(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,g){g!==0&&(o.drawArraysInstanced(s,p,_,g),i.update(_,s,g))}function d(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let y=0;for(let b=0;b<g;b++)y+=_[b];i.update(y,s,1)}function m(p,_,g,S){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],_[b],S[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,S,0,g);let b=0;for(let C=0;C<g;C++)b+=_[C]*S[C];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function rb(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Ui&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const Z=P===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ii&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Hi&&!Z)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ie("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),F=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:U,maxSamples:z,samples:F}}function ob(o){const e=this;let i=null,s=0,l=!1,c=!1;const h=new Cs,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const y=g.length!==0||S||s!==0||l;return l=S,s=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,S){i=_(g,S,0)},this.setState=function(g,S,y){const b=g.clippingPlanes,C=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const O=c?0:s,L=O*4;let U=x.clippingState||null;m.value=U,U=_(b,S,L,y);for(let z=0;z!==L;++z)U[z]=i[z];x.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(g,S,y,b){const C=g!==null?g.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const x=y+C*4,O=S.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<x)&&(M=new Float32Array(x));for(let L=0,U=y;L!==C;++L,U+=4)h.copy(g[L]).applyMatrix4(O,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function lb(o){let e=new WeakMap;function i(h,d){return d===ld?h.mapping=Ls:d===cd&&(h.mapping=Pr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ld||d===cd)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Cv(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const ns=4,w_=[.125,.215,.35,.446,.526,.582],Ds=20,cb=256,Vo=new nu,D_=new de;let Xh=null,Wh=0,qh=0,Yh=!1;const ub=new J;class U_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=ub}=c;Xh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,Wh,qh),this._renderer.xr.enabled=Yh,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ls||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:Ma,format:Ui,colorSpace:zr,depthBuffer:!1},l=N_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fb(c)),this._blurMaterial=db(c,e,i),this._ggxMaterial=hb(c,e,i)}return l}_compileMaterial(e){const i=new xi(new ai,e);this._renderer.compile(i,Vo)}_sceneToCubeUV(e,i,s,l,c){const m=new Di(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(D_),g.toneMapping=Vi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xi(new va,new yv({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let x=!1;const O=e.background;O?O.isColor&&(M.color.copy(O),e.background=null,x=!0):(M.color.copy(D_),x=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):U===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const z=this._cubeSize;Dr(l,U*z,L>2?z:0,z,z),g.setRenderTarget(l),x&&g.render(C,m),g.render(e,m)}g.toneMapping=y,g.autoClear=S,e.background=O}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ls||e.mapping===Pr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=O_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Dr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Vo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),S=0+p*1.25,y=g*S,{_lodMax:b}=this,C=this._sizeLods[s],M=3*C*(s>b-ns?s-b+ns:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=b-i,Dr(c,M,x,3*C,2*C),l.setRenderTarget(c),l.render(d,Vo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Dr(e,M,x,3*C,2*C),l.setRenderTarget(e),l.render(d,Vo)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ds-1),C=c/b,M=isFinite(c)?1+Math.floor(_*C):Ds;M>Ds&&ie(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ds}`);const x=[];let O=0;for(let P=0;P<Ds;++P){const Z=P/C,R=Math.exp(-Z*Z/2);x.push(R),P===0?O+=R:P<M&&(O+=2*R)}for(let P=0;P<x.length;P++)x[P]=x[P]/O;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=b,S.mipInt.value=L-s;const U=this._sizeLods[l],z=3*U*(l>L-ns?l-L+ns:0),F=4*(this._cubeSize-U);Dr(i,z,F,3*U,2*U),m.setRenderTarget(i),m.render(g,Vo)}}function fb(o){const e=[],i=[],s=[];let l=o;const c=o-ns+1+w_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-ns?m=w_[h-o+ns-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,S=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,b=6,C=3,M=2,x=1,O=new Float32Array(C*b*y),L=new Float32Array(M*b*y),U=new Float32Array(x*b*y);for(let F=0;F<y;F++){const P=F%3*2/3-1,Z=F>2?0:-1,R=[P,Z,0,P+2/3,Z,0,P+2/3,Z+1,0,P,Z,0,P+2/3,Z+1,0,P,Z+1,0];O.set(R,C*b*F),L.set(S,M*b*F);const w=[F,F,F,F,F,F];U.set(w,x*b*F)}const z=new ai;z.setAttribute("position",new Ni(O,C)),z.setAttribute("uv",new Ni(L,M)),z.setAttribute("faceIndex",new Ni(U,x)),s.push(new xi(z,null)),l>ns&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function N_(o,e,i){const s=new ki(o,e,i);return s.texture.mapping=tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function hb(o,e,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function db(o,e,i){const s=new Float32Array(Ds),l=new J(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function L_(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function O_(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pb(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===ld||m===cd,_=m===Ls||m===Pr;if(p||_){let g=e.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new U_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new U_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function mb(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Zo("WebGLRenderer: "+s+" extension not supported."),l}}}function gb(o,e,i,s){const l={},c=new WeakMap;function h(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const y=c.get(S);y&&(e.remove(y),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function p(g){const S=[],y=g.index,b=g.attributes.position;let C=0;if(y!==null){const O=y.array;C=y.version;for(let L=0,U=O.length;L<U;L+=3){const z=O[L+0],F=O[L+1],P=O[L+2];S.push(z,F,F,P,P,z)}}else if(b!==void 0){const O=b.array;C=b.version;for(let L=0,U=O.length/3-1;L<U;L+=3){const z=L+0,F=L+1,P=L+2;S.push(z,F,F,P,P,z)}}else return;const M=new(vv(S)?bv:Ev)(S,1);M.version=C;const x=c.get(g);x&&e.remove(x),c.set(g,M)}function _(g){const S=c.get(g);if(S){const y=g.index;y!==null&&S.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function _b(o,e,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,y){o.drawElements(s,y,c,S*h),i.update(y,s,1)}function p(S,y,b){b!==0&&(o.drawElementsInstanced(s,y,c,S*h,b),i.update(y,s,b))}function _(S,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,S,0,b);let M=0;for(let x=0;x<b;x++)M+=y[x];i.update(M,s,1)}function g(S,y,b,C){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<S.length;x++)p(S[x]/h,y[x],C[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,S,0,C,0,b);let x=0;for(let O=0;O<b;O++)x+=y[O]*C[O];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function vb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Ce("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function xb(o,e,i){const s=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let S=s.get(d);if(S===void 0||S.count!==g){let w=function(){Z.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var y=w;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),C===!0&&(U=2),M===!0&&(U=3);let z=d.attributes.position.count*U,F=1;z>e.maxTextureSize&&(F=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const P=new Float32Array(z*F*4*g),Z=new xv(P,z,F,g);Z.type=Hi,Z.needsUpdate=!0;const R=U*4;for(let k=0;k<g;k++){const st=x[k],at=O[k],dt=L[k],ut=z*F*4*k;for(let I=0;I<st.count;I++){const H=I*R;b===!0&&(l.fromBufferAttribute(st,I),P[ut+H+0]=l.x,P[ut+H+1]=l.y,P[ut+H+2]=l.z,P[ut+H+3]=0),C===!0&&(l.fromBufferAttribute(at,I),P[ut+H+4]=l.x,P[ut+H+5]=l.y,P[ut+H+6]=l.z,P[ut+H+7]=0),M===!0&&(l.fromBufferAttribute(dt,I),P[ut+H+8]=l.x,P[ut+H+9]=l.y,P[ut+H+10]=l.z,P[ut+H+11]=dt.itemSize===4?l.w:1)}}S={count:g,texture:Z,size:new Le(z,F)},s.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function Sb(o,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Mb={[nv]:"LINEAR_TONE_MAPPING",[iv]:"REINHARD_TONE_MAPPING",[av]:"CINEON_TONE_MAPPING",[sv]:"ACES_FILMIC_TONE_MAPPING",[ov]:"AGX_TONE_MAPPING",[lv]:"NEUTRAL_TONE_MAPPING",[rv]:"CUSTOM_TONE_MAPPING"};function yb(o,e,i,s,l){const c=new ki(e,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new ki(e,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),d=new ai;d.setAttribute("position",new vi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new vi([0,2,0,0,2,0],2));const m=new hy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new xi(d,m),_=new nu(-1,1,1,-1,0,1);let g=null,S=null,y=!1,b,C=null,M=[],x=!1;this.setSize=function(O,L){c.setSize(O,L),h.setSize(O,L);for(let U=0;U<M.length;U++){const z=M[U];z.setSize&&z.setSize(O,L)}},this.setEffects=function(O){M=O,x=M.length>0&&M[0].isRenderPass===!0;const L=c.width,U=c.height;for(let z=0;z<M.length;z++){const F=M[z];F.setSize&&F.setSize(L,U)}},this.begin=function(O,L){if(y||O.toneMapping===Vi&&M.length===0)return!1;if(C=L,L!==null){const U=L.width,z=L.height;(c.width!==U||c.height!==z)&&this.setSize(U,z)}return x===!1&&O.setRenderTarget(c),b=O.toneMapping,O.toneMapping=Vi,!0},this.hasRenderPass=function(){return x},this.end=function(O,L){O.toneMapping=b,y=!0;let U=c,z=h;for(let F=0;F<M.length;F++){const P=M[F];if(P.enabled!==!1&&(P.render(O,z,U,L),P.needsSwap!==!1)){const Z=U;U=z,z=Z}}if(g!==O.outputColorSpace||S!==O.toneMapping){g=O.outputColorSpace,S=O.toneMapping,m.defines={},Te.getTransfer(g)===He&&(m.defines.SRGB_TRANSFER="");const F=Mb[S];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,O.setRenderTarget(C),O.render(p,_),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Lv=new Fn,qd=new Ko(1,1),Ov=new xv,Pv=new HM,Iv=new Rv,P_=[],I_=[],z_=new Float32Array(16),B_=new Float32Array(9),F_=new Float32Array(4);function Hr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=P_[l];if(c===void 0&&(c=new Float32Array(l),P_[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function _n(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function au(o,e){let i=I_[e];i===void 0&&(i=new Int32Array(e),I_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function Eb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function bb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),_n(i,e)}}function Tb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),_n(i,e)}}function Ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),_n(i,e)}}function Rb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;F_.set(s),o.uniformMatrix2fv(this.addr,!1,F_),_n(i,s)}}function Cb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;B_.set(s),o.uniformMatrix3fv(this.addr,!1,B_),_n(i,s)}}function wb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;z_.set(s),o.uniformMatrix4fv(this.addr,!1,z_),_n(i,s)}}function Db(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function Ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),_n(i,e)}}function Nb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),_n(i,e)}}function Lb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),_n(i,e)}}function Ob(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Pb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),_n(i,e)}}function Ib(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),_n(i,e)}}function zb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),_n(i,e)}}function Bb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(qd.compareFunction=i.isReversedDepthBuffer()?ip:np,c=qd):c=Lv,i.setTexture2D(e||c,l)}function Fb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Pv,l)}function Hb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Iv,l)}function Gb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Ov,l)}function Vb(o){switch(o){case 5126:return Eb;case 35664:return bb;case 35665:return Tb;case 35666:return Ab;case 35674:return Rb;case 35675:return Cb;case 35676:return wb;case 5124:case 35670:return Db;case 35667:case 35671:return Ub;case 35668:case 35672:return Nb;case 35669:case 35673:return Lb;case 5125:return Ob;case 36294:return Pb;case 36295:return Ib;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return Gb}}function kb(o,e){o.uniform1fv(this.addr,e)}function Xb(o,e){const i=Hr(e,this.size,2);o.uniform2fv(this.addr,i)}function Wb(o,e){const i=Hr(e,this.size,3);o.uniform3fv(this.addr,i)}function qb(o,e){const i=Hr(e,this.size,4);o.uniform4fv(this.addr,i)}function Yb(o,e){const i=Hr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function jb(o,e){const i=Hr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Zb(o,e){const i=Hr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Kb(o,e){o.uniform1iv(this.addr,e)}function Qb(o,e){o.uniform2iv(this.addr,e)}function Jb(o,e){o.uniform3iv(this.addr,e)}function $b(o,e){o.uniform4iv(this.addr,e)}function tT(o,e){o.uniform1uiv(this.addr,e)}function eT(o,e){o.uniform2uiv(this.addr,e)}function nT(o,e){o.uniform3uiv(this.addr,e)}function iT(o,e){o.uniform4uiv(this.addr,e)}function aT(o,e,i){const s=this.cache,l=e.length,c=au(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=qd:h=Lv;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function sT(o,e,i){const s=this.cache,l=e.length,c=au(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Pv,c[h])}function rT(o,e,i){const s=this.cache,l=e.length,c=au(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Iv,c[h])}function oT(o,e,i){const s=this.cache,l=e.length,c=au(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Ov,c[h])}function lT(o){switch(o){case 5126:return kb;case 35664:return Xb;case 35665:return Wb;case 35666:return qb;case 35674:return Yb;case 35675:return jb;case 35676:return Zb;case 5124:case 35670:return Kb;case 35667:case 35671:return Qb;case 35668:case 35672:return Jb;case 35669:case 35673:return $b;case 5125:return tT;case 36294:return eT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return aT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return rT;case 36289:case 36303:case 36311:case 36292:return oT}}class cT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Vb(i.type)}}class uT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=lT(i.type)}}class fT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const jh=/(\w+)(\])?(\[|\.)?/g;function H_(o,e){o.seq.push(e),o.map[e.id]=e}function hT(o,e,i){const s=o.name,l=s.length;for(jh.lastIndex=0;;){const c=jh.exec(s),h=jh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){H_(i,p===void 0?new cT(d,o,e):new uT(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new fT(d),H_(i,g)),i=g}}}class Yc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);hT(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function G_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const dT=37297;let pT=0;function mT(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const V_=new ue;function gT(o){Te._getMatrix(V_,Te.workingColorSpace,o);const e=`mat3( ${V_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case Zc:return[e,"LinearTransferOETF"];case He:return[e,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function k_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+mT(o.getShaderSource(e),d)}else return c}function _T(o,e){const i=gT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const vT={[nv]:"Linear",[iv]:"Reinhard",[av]:"Cineon",[sv]:"ACESFilmic",[ov]:"AgX",[lv]:"Neutral",[rv]:"Custom"};function xT(o,e){const i=vT[e];return i===void 0?(ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new J;function ST(){Te.getLuminanceCoefficients(Hc);const o=Hc.x.toFixed(4),e=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function yT(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function ET(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function qo(o){return o!==""}function X_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function W_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(o){return o.replace(bT,AT)}const TT=new Map;function AT(o,e){let i=fe[e];if(i===void 0){const s=TT.get(e);if(s!==void 0)i=fe[s],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Yd(i)}const RT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q_(o){return o.replace(RT,CT)}function CT(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Y_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const wT={[Gc]:"SHADOWMAP_TYPE_PCF",[Xo]:"SHADOWMAP_TYPE_VSM"};function DT(o){return wT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const UT={[Ls]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[tu]:"ENVMAP_TYPE_CUBE_UV"};function NT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":UT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const LT={[Pr]:"ENVMAP_MODE_REFRACTION"};function OT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":LT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const PT={[ev]:"ENVMAP_BLENDING_MULTIPLY",[MM]:"ENVMAP_BLENDING_MIX",[yM]:"ENVMAP_BLENDING_ADD"};function IT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":PT[o.combine]||"ENVMAP_BLENDING_NONE"}function zT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function BT(o,e,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=DT(i),p=NT(i),_=OT(i),g=IT(i),S=zT(i),y=MT(i),b=yT(c),C=l.createProgram();let M,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(qo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(qo).join(`
`),x.length>0&&(x+=`
`)):(M=[Y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),x=[Y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?fe.tonemapping_pars_fragment:"",i.toneMapping!==Vi?xT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,_T("linearToOutputTexel",i.outputColorSpace),ST(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),h=Yd(h),h=X_(h,i),h=W_(h,i),d=Yd(d),d=X_(d,i),d=W_(d,i),h=q_(h),d=q_(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===e_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===e_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=O+M+h,U=O+x+d,z=G_(l,l.VERTEX_SHADER,L),F=G_(l,l.FRAGMENT_SHADER,U);l.attachShader(C,z),l.attachShader(C,F),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(k){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(C)||"",at=l.getShaderInfoLog(z)||"",dt=l.getShaderInfoLog(F)||"",ut=st.trim(),I=at.trim(),H=dt.trim();let it=!0,Mt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(it=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,z,F);else{const xt=k_(l,z,"vertex"),N=k_(l,F,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ut+`
`+xt+`
`+N)}else ut!==""?ie("WebGLProgram: Program Info Log:",ut):(I===""||H==="")&&(Mt=!1);Mt&&(k.diagnostics={runnable:it,programLog:ut,vertexShader:{log:I,prefix:M},fragmentShader:{log:H,prefix:x}})}l.deleteShader(z),l.deleteShader(F),Z=new Yc(l,C),R=ET(l,C)}let Z;this.getUniforms=function(){return Z===void 0&&P(this),Z};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,dT)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pT++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=F,this}let FT=0;class HT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new GT(e),i.set(e,s)),s}}class GT{constructor(e){this.id=FT++,this.code=e,this.usedTimes=0}}function VT(o,e,i,s,l,c,h){const d=new Sv,m=new HT,p=new Set,_=[],g=new Map,S=l.logarithmicDepthBuffer;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,w,k,st,at){const dt=st.fog,ut=at.geometry,I=R.isMeshStandardMaterial?st.environment:null,H=(R.isMeshStandardMaterial?i:e).get(R.envMap||I),it=H&&H.mapping===tu?H.image.height:null,Mt=b[R.type];R.precision!==null&&(y=l.getMaxPrecision(R.precision),y!==R.precision&&ie("WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const xt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,N=xt!==void 0?xt.length:0;let nt=0;ut.morphAttributes.position!==void 0&&(nt=1),ut.morphAttributes.normal!==void 0&&(nt=2),ut.morphAttributes.color!==void 0&&(nt=3);let gt,Tt,Ft,et;if(Mt){const be=Fi[Mt];gt=be.vertexShader,Tt=be.fragmentShader}else gt=R.vertexShader,Tt=R.fragmentShader,m.update(R),Ft=m.getVertexShaderID(R),et=m.getFragmentShaderID(R);const ct=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),kt=at.isInstancedMesh===!0,Ht=at.isBatchedMesh===!0,pe=!!R.map,$e=!!R.matcap,ve=!!H,me=!!R.aoMap,we=!!R.lightMap,re=!!R.bumpMap,tn=!!R.normalMap,G=!!R.displacementMap,Ze=!!R.emissiveMap,Ee=!!R.metalnessMap,Oe=!!R.roughnessMap,Yt=R.anisotropy>0,D=R.clearcoat>0,E=R.dispersion>0,W=R.iridescence>0,ht=R.sheen>0,vt=R.transmission>0,lt=Yt&&!!R.anisotropyMap,Zt=D&&!!R.clearcoatMap,Rt=D&&!!R.clearcoatNormalMap,Xt=D&&!!R.clearcoatRoughnessMap,ee=W&&!!R.iridescenceMap,yt=W&&!!R.iridescenceThicknessMap,Et=ht&&!!R.sheenColorMap,zt=ht&&!!R.sheenRoughnessMap,Pt=!!R.specularMap,wt=!!R.specularColorMap,le=!!R.specularIntensityMap,X=vt&&!!R.transmissionMap,Nt=vt&&!!R.thicknessMap,bt=!!R.gradientMap,It=!!R.alphaMap,St=R.alphaTest>0,_t=!!R.alphaHash,At=!!R.extensions;let ne=Vi;R.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Ie={shaderID:Mt,shaderType:R.type,shaderName:R.name,vertexShader:gt,fragmentShader:Tt,defines:R.defines,customVertexShaderID:Ft,customFragmentShaderID:et,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:Ht,batchingColor:Ht&&at._colorsTexture!==null,instancing:kt,instancingColor:kt&&at.instanceColor!==null,instancingMorph:kt&&at.morphTexture!==null,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:zr,alphaToCoverage:!!R.alphaToCoverage,map:pe,matcap:$e,envMap:ve,envMapMode:ve&&H.mapping,envMapCubeUVHeight:it,aoMap:me,lightMap:we,bumpMap:re,normalMap:tn,displacementMap:G,emissiveMap:Ze,normalMapObjectSpace:tn&&R.normalMapType===TM,normalMapTangentSpace:tn&&R.normalMapType===_v,metalnessMap:Ee,roughnessMap:Oe,anisotropy:Yt,anisotropyMap:lt,clearcoat:D,clearcoatMap:Zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:W,iridescenceMap:ee,iridescenceThicknessMap:yt,sheen:ht,sheenColorMap:Et,sheenRoughnessMap:zt,specularMap:Pt,specularColorMap:wt,specularIntensityMap:le,transmission:vt,transmissionMap:X,thicknessMap:Nt,gradientMap:bt,opaque:R.transparent===!1&&R.blending===Ur&&R.alphaToCoverage===!1,alphaMap:It,alphaTest:St,alphaHash:_t,combine:R.combine,mapUv:pe&&C(R.map.channel),aoMapUv:me&&C(R.aoMap.channel),lightMapUv:we&&C(R.lightMap.channel),bumpMapUv:re&&C(R.bumpMap.channel),normalMapUv:tn&&C(R.normalMap.channel),displacementMapUv:G&&C(R.displacementMap.channel),emissiveMapUv:Ze&&C(R.emissiveMap.channel),metalnessMapUv:Ee&&C(R.metalnessMap.channel),roughnessMapUv:Oe&&C(R.roughnessMap.channel),anisotropyMapUv:lt&&C(R.anisotropyMap.channel),clearcoatMapUv:Zt&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:zt&&C(R.sheenRoughnessMap.channel),specularMapUv:Pt&&C(R.specularMap.channel),specularColorMapUv:wt&&C(R.specularColorMap.channel),specularIntensityMapUv:le&&C(R.specularIntensityMap.channel),transmissionMapUv:X&&C(R.transmissionMap.channel),thicknessMapUv:Nt&&C(R.thicknessMap.channel),alphaMapUv:It&&C(R.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(tn||Yt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ut.attributes.uv&&(pe||It),fog:!!dt,useFog:R.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Dt,skinning:at.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:pe&&R.map.isVideoTexture===!0&&Te.getTransfer(R.map.colorSpace)===He,decodeVideoTextureEmissive:Ze&&R.emissiveMap.isVideoTexture===!0&&Te.getTransfer(R.emissiveMap.colorSpace)===He,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ga,flipSided:R.side===Yn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:At&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&R.extensions.multiDraw===!0||Ht)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function x(R){const w=[];if(R.shaderID?w.push(R.shaderID):(w.push(R.customVertexShaderID),w.push(R.customFragmentShaderID)),R.defines!==void 0)for(const k in R.defines)w.push(k),w.push(R.defines[k]);return R.isRawShaderMaterial===!1&&(O(w,R),L(w,R),w.push(o.outputColorSpace)),w.push(R.customProgramCacheKey),w.join()}function O(R,w){R.push(w.precision),R.push(w.outputColorSpace),R.push(w.envMapMode),R.push(w.envMapCubeUVHeight),R.push(w.mapUv),R.push(w.alphaMapUv),R.push(w.lightMapUv),R.push(w.aoMapUv),R.push(w.bumpMapUv),R.push(w.normalMapUv),R.push(w.displacementMapUv),R.push(w.emissiveMapUv),R.push(w.metalnessMapUv),R.push(w.roughnessMapUv),R.push(w.anisotropyMapUv),R.push(w.clearcoatMapUv),R.push(w.clearcoatNormalMapUv),R.push(w.clearcoatRoughnessMapUv),R.push(w.iridescenceMapUv),R.push(w.iridescenceThicknessMapUv),R.push(w.sheenColorMapUv),R.push(w.sheenRoughnessMapUv),R.push(w.specularMapUv),R.push(w.specularColorMapUv),R.push(w.specularIntensityMapUv),R.push(w.transmissionMapUv),R.push(w.thicknessMapUv),R.push(w.combine),R.push(w.fogExp2),R.push(w.sizeAttenuation),R.push(w.morphTargetsCount),R.push(w.morphAttributeCount),R.push(w.numDirLights),R.push(w.numPointLights),R.push(w.numSpotLights),R.push(w.numSpotLightMaps),R.push(w.numHemiLights),R.push(w.numRectAreaLights),R.push(w.numDirLightShadows),R.push(w.numPointLightShadows),R.push(w.numSpotLightShadows),R.push(w.numSpotLightShadowsWithMaps),R.push(w.numLightProbes),R.push(w.shadowMapType),R.push(w.toneMapping),R.push(w.numClippingPlanes),R.push(w.numClipIntersection),R.push(w.depthPacking)}function L(R,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),R.push(d.mask)}function U(R){const w=b[R.type];let k;if(w){const st=Fi[w];k=$M.clone(st.uniforms)}else k=R.uniforms;return k}function z(R,w){let k=g.get(w);return k!==void 0?++k.usedTimes:(k=new BT(o,w,R,c),_.push(k),g.set(w,k)),k}function F(R){if(--R.usedTimes===0){const w=_.indexOf(R);_[w]=_[_.length-1],_.pop(),g.delete(R.cacheKey),R.destroy()}}function P(R){m.remove(R)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:U,acquireProgram:z,releaseProgram:F,releaseShaderCache:P,programs:_,dispose:Z}}function kT(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function XT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function j_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Z_(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(g,S,y,b,C,M){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:S,material:y,groupOrder:b,renderOrder:g.renderOrder,z:C,group:M},o[e]=x):(x.id=g.id,x.object=g,x.geometry=S,x.material=y,x.groupOrder=b,x.renderOrder=g.renderOrder,x.z=C,x.group=M),e++,x}function d(g,S,y,b,C,M){const x=h(g,S,y,b,C,M);y.transmission>0?s.push(x):y.transparent===!0?l.push(x):i.push(x)}function m(g,S,y,b,C,M){const x=h(g,S,y,b,C,M);y.transmission>0?s.unshift(x):y.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,S){i.length>1&&i.sort(g||XT),s.length>1&&s.sort(S||j_),l.length>1&&l.sort(S||j_)}function _(){for(let g=e,S=o.length;g<S;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function WT(){let o=new WeakMap;function e(s,l){const c=o.get(s);let h;return c===void 0?(h=new Z_,o.set(s,[h])):l>=c.length?(h=new Z_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function qT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new J,color:new de};break;case"SpotLight":i={position:new J,direction:new J,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new de,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new de,groundColor:new de};break;case"RectAreaLight":i={color:new de,position:new J,halfWidth:new J,halfHeight:new J};break}return o[e.id]=i,i}}}function YT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let jT=0;function ZT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function KT(o){const e=new qT,i=YT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,c=new Je,h=new Je;function d(p){let _=0,g=0,S=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let y=0,b=0,C=0,M=0,x=0,O=0,L=0,U=0,z=0,F=0,P=0;p.sort(ZT);for(let R=0,w=p.length;R<w;R++){const k=p[R],st=k.color,at=k.intensity,dt=k.distance;let ut=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Ir?ut=k.shadow.map.texture:ut=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=st.r*at,g+=st.g*at,S+=st.b*at;else if(k.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(k.sh.coefficients[I],at);P++}else if(k.isDirectionalLight){const I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,it=i.get(k);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,s.directionalShadow[y]=it,s.directionalShadowMap[y]=ut,s.directionalShadowMatrix[y]=k.shadow.matrix,O++}s.directional[y]=I,y++}else if(k.isSpotLight){const I=e.get(k);I.position.setFromMatrixPosition(k.matrixWorld),I.color.copy(st).multiplyScalar(at),I.distance=dt,I.coneCos=Math.cos(k.angle),I.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),I.decay=k.decay,s.spot[C]=I;const H=k.shadow;if(k.map&&(s.spotLightMap[z]=k.map,z++,H.updateMatrices(k),k.castShadow&&F++),s.spotLightMatrix[C]=H.matrix,k.castShadow){const it=i.get(k);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,s.spotShadow[C]=it,s.spotShadowMap[C]=ut,U++}C++}else if(k.isRectAreaLight){const I=e.get(k);I.color.copy(st).multiplyScalar(at),I.halfWidth.set(k.width*.5,0,0),I.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=I,M++}else if(k.isPointLight){const I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),I.distance=k.distance,I.decay=k.decay,k.castShadow){const H=k.shadow,it=i.get(k);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,it.shadowCameraNear=H.camera.near,it.shadowCameraFar=H.camera.far,s.pointShadow[b]=it,s.pointShadowMap[b]=ut,s.pointShadowMatrix[b]=k.shadow.matrix,L++}s.point[b]=I,b++}else if(k.isHemisphereLight){const I=e.get(k);I.skyColor.copy(k.color).multiplyScalar(at),I.groundColor.copy(k.groundColor).multiplyScalar(at),s.hemi[x]=I,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=S;const Z=s.hash;(Z.directionalLength!==y||Z.pointLength!==b||Z.spotLength!==C||Z.rectAreaLength!==M||Z.hemiLength!==x||Z.numDirectionalShadows!==O||Z.numPointShadows!==L||Z.numSpotShadows!==U||Z.numSpotMaps!==z||Z.numLightProbes!==P)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=M,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=U+z-F,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=P,Z.directionalLength=y,Z.pointLength=b,Z.spotLength=C,Z.rectAreaLength=M,Z.hemiLength=x,Z.numDirectionalShadows=O,Z.numPointShadows=L,Z.numSpotShadows=U,Z.numSpotMaps=z,Z.numLightProbes=P,s.version=jT++)}function m(p,_){let g=0,S=0,y=0,b=0,C=0;const M=_.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const L=p[x];if(L.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),g++}else if(L.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),h.identity(),c.copy(L.matrixWorld),c.premultiply(M),h.extractRotation(c),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(L.isPointLight){const U=s.point[S];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),S++}else if(L.isHemisphereLight){const U=s.hemi[C];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:s}}function K_(o){const e=new KT(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function QT(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new K_(o),e.set(l,[d])):c>=h.length?(d=new K_(o),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const JT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$T=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tA=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],eA=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Q_=new Je,ko=new J,Zh=new J;function nA(o,e,i){let s=new op;const l=new Le,c=new Le,h=new an,d=new dy,m=new py,p={},_=i.maxTextureSize,g={[is]:Yn,[Yn]:is,[ga]:ga},S=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:JT,fragmentShader:$T}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const b=new ai;b.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new xi(b,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let x=this.type;this.render=function(F,P,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;F.type===tv&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Gc);const R=o.getRenderTarget(),w=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),st=o.state;st.setBlending(xa),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const at=x!==this.type;at&&P.traverse(function(dt){dt.material&&(Array.isArray(dt.material)?dt.material.forEach(ut=>ut.needsUpdate=!0):dt.material.needsUpdate=!0)});for(let dt=0,ut=F.length;dt<ut;dt++){const I=F[dt],H=I.shadow;if(H===void 0){ie("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const it=H.getFrameExtents();if(l.multiply(it),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/it.x),l.x=c.x*it.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/it.y),l.y=c.y*it.y,H.mapSize.y=c.y)),H.map===null||at===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Xo){if(I.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ki(l.x,l.y,{format:Ir,type:Ma,minFilter:In,magFilter:In,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new Ko(l.x,l.y,Hi),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=ya,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un}else{I.isPointLight?(H.map=new Cv(l.x),H.map.depthTexture=new fy(l.x,Xi)):(H.map=new ki(l.x,l.y),H.map.depthTexture=new Ko(l.x,l.y,Xi)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=ya;const xt=o.state.buffers.depth.getReversed();this.type===Gc?(H.map.depthTexture.compareFunction=xt?ip:np,H.map.depthTexture.minFilter=In,H.map.depthTexture.magFilter=In):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un)}H.camera.updateProjectionMatrix()}const Mt=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<Mt;xt++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(H.map),o.clear());const N=H.getViewport(xt);h.set(c.x*N.x,c.y*N.y,c.x*N.z,c.y*N.w),st.viewport(h)}if(I.isPointLight){const N=H.camera,nt=H.matrix,gt=I.distance||N.far;gt!==N.far&&(N.far=gt,N.updateProjectionMatrix()),ko.setFromMatrixPosition(I.matrixWorld),N.position.copy(ko),Zh.copy(N.position),Zh.add(tA[xt]),N.up.copy(eA[xt]),N.lookAt(Zh),N.updateMatrixWorld(),nt.makeTranslation(-ko.x,-ko.y,-ko.z),Q_.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Q_,N.coordinateSystem,N.reversedDepth)}else H.updateMatrices(I);s=H.getFrustum(),U(P,Z,H.camera,I,this.type)}H.isPointLightShadow!==!0&&this.type===Xo&&O(H,Z),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(R,w,k)};function O(F,P){const Z=e.update(C);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ki(l.x,l.y,{format:Ir,type:Ma})),S.uniforms.shadow_pass.value=F.map.depthTexture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(P,null,Z,S,C,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(P,null,Z,y,C,null)}function L(F,P,Z,R){let w=null;const k=Z.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)w=k;else if(w=Z.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const st=w.uuid,at=P.uuid;let dt=p[st];dt===void 0&&(dt={},p[st]=dt);let ut=dt[at];ut===void 0&&(ut=w.clone(),dt[at]=ut,P.addEventListener("dispose",z)),w=ut}if(w.visible=P.visible,w.wireframe=P.wireframe,R===Xo?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:g[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,Z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const st=o.properties.get(w);st.light=Z}return w}function U(F,P,Z,R,w){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===Xo)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,F.matrixWorld);const at=e.update(F),dt=F.material;if(Array.isArray(dt)){const ut=at.groups;for(let I=0,H=ut.length;I<H;I++){const it=ut[I],Mt=dt[it.materialIndex];if(Mt&&Mt.visible){const xt=L(F,Mt,R,w);F.onBeforeShadow(o,F,P,Z,at,xt,it),o.renderBufferDirect(Z,null,at,xt,F,it),F.onAfterShadow(o,F,P,Z,at,xt,it)}}}else if(dt.visible){const ut=L(F,dt,R,w);F.onBeforeShadow(o,F,P,Z,at,ut,null),o.renderBufferDirect(Z,null,at,ut,F,null),F.onAfterShadow(o,F,P,Z,at,ut,null)}}const st=F.children;for(let at=0,dt=st.length;at<dt;at++)U(st[at],P,Z,R,w)}function z(F){F.target.removeEventListener("dispose",z);for(const Z in p){const R=p[Z],w=F.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}const iA={[ed]:nd,[id]:rd,[ad]:od,[Or]:sd,[nd]:ed,[rd]:id,[od]:ad,[sd]:Or};function aA(o,e){function i(){let X=!1;const Nt=new an;let bt=null;const It=new an(0,0,0,0);return{setMask:function(St){bt!==St&&!X&&(o.colorMask(St,St,St,St),bt=St)},setLocked:function(St){X=St},setClear:function(St,_t,At,ne,Ie){Ie===!0&&(St*=ne,_t*=ne,At*=ne),Nt.set(St,_t,At,ne),It.equals(Nt)===!1&&(o.clearColor(St,_t,At,ne),It.copy(Nt))},reset:function(){X=!1,bt=null,It.set(-1,0,0,0)}}}function s(){let X=!1,Nt=!1,bt=null,It=null,St=null;return{setReversed:function(_t){if(Nt!==_t){const At=e.get("EXT_clip_control");_t?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Nt=_t;const ne=St;St=null,this.setClear(ne)}},getReversed:function(){return Nt},setTest:function(_t){_t?ct(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(_t){bt!==_t&&!X&&(o.depthMask(_t),bt=_t)},setFunc:function(_t){if(Nt&&(_t=iA[_t]),It!==_t){switch(_t){case ed:o.depthFunc(o.NEVER);break;case nd:o.depthFunc(o.ALWAYS);break;case id:o.depthFunc(o.LESS);break;case Or:o.depthFunc(o.LEQUAL);break;case ad:o.depthFunc(o.EQUAL);break;case sd:o.depthFunc(o.GEQUAL);break;case rd:o.depthFunc(o.GREATER);break;case od:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=_t}},setLocked:function(_t){X=_t},setClear:function(_t){St!==_t&&(Nt&&(_t=1-_t),o.clearDepth(_t),St=_t)},reset:function(){X=!1,bt=null,It=null,St=null,Nt=!1}}}function l(){let X=!1,Nt=null,bt=null,It=null,St=null,_t=null,At=null,ne=null,Ie=null;return{setTest:function(be){X||(be?ct(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(be){Nt!==be&&!X&&(o.stencilMask(be),Nt=be)},setFunc:function(be,Nn,Si){(bt!==be||It!==Nn||St!==Si)&&(o.stencilFunc(be,Nn,Si),bt=be,It=Nn,St=Si)},setOp:function(be,Nn,Si){(_t!==be||At!==Nn||ne!==Si)&&(o.stencilOp(be,Nn,Si),_t=be,At=Nn,ne=Si)},setLocked:function(be){X=be},setClear:function(be){Ie!==be&&(o.clearStencil(be),Ie=be)},reset:function(){X=!1,Nt=null,bt=null,It=null,St=null,_t=null,At=null,ne=null,Ie=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},S=new WeakMap,y=[],b=null,C=!1,M=null,x=null,O=null,L=null,U=null,z=null,F=null,P=new de(0,0,0),Z=0,R=!1,w=null,k=null,st=null,at=null,dt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,H=0;const it=o.getParameter(o.VERSION);it.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(it)[1]),I=H>=1):it.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),I=H>=2);let Mt=null,xt={};const N=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),gt=new an().fromArray(N),Tt=new an().fromArray(nt);function Ft(X,Nt,bt,It){const St=new Uint8Array(4),_t=o.createTexture();o.bindTexture(X,_t),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let At=0;At<bt;At++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,St):o.texImage2D(Nt+At,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,St);return _t}const et={};et[o.TEXTURE_2D]=Ft(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=Ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=Ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=Ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc(Or),re(!1),tn(Kg),ct(o.CULL_FACE),me(xa);function ct(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function Dt(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function kt(X,Nt){return g[X]!==Nt?(o.bindFramebuffer(X,Nt),g[X]=Nt,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Nt),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Ht(X,Nt){let bt=y,It=!1;if(X){bt=S.get(Nt),bt===void 0&&(bt=[],S.set(Nt,bt));const St=X.textures;if(bt.length!==St.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,At=St.length;_t<At;_t++)bt[_t]=o.COLOR_ATTACHMENT0+_t;bt.length=St.length,It=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,It=!0);It&&o.drawBuffers(bt)}function pe(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const $e={[ws]:o.FUNC_ADD,[aM]:o.FUNC_SUBTRACT,[sM]:o.FUNC_REVERSE_SUBTRACT};$e[rM]=o.MIN,$e[oM]=o.MAX;const ve={[lM]:o.ZERO,[cM]:o.ONE,[uM]:o.SRC_COLOR,[$h]:o.SRC_ALPHA,[gM]:o.SRC_ALPHA_SATURATE,[pM]:o.DST_COLOR,[hM]:o.DST_ALPHA,[fM]:o.ONE_MINUS_SRC_COLOR,[td]:o.ONE_MINUS_SRC_ALPHA,[mM]:o.ONE_MINUS_DST_COLOR,[dM]:o.ONE_MINUS_DST_ALPHA,[_M]:o.CONSTANT_COLOR,[vM]:o.ONE_MINUS_CONSTANT_COLOR,[xM]:o.CONSTANT_ALPHA,[SM]:o.ONE_MINUS_CONSTANT_ALPHA};function me(X,Nt,bt,It,St,_t,At,ne,Ie,be){if(X===xa){C===!0&&(Dt(o.BLEND),C=!1);return}if(C===!1&&(ct(o.BLEND),C=!0),X!==iM){if(X!==M||be!==R){if((x!==ws||U!==ws)&&(o.blendEquation(o.FUNC_ADD),x=ws,U=ws),be)switch(X){case Ur:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Jh:o.blendFunc(o.ONE,o.ONE);break;case Qg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Jg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ce("WebGLState: Invalid blending: ",X);break}else switch(X){case Ur:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Jh:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Qg:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jg:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",X);break}O=null,L=null,z=null,F=null,P.set(0,0,0),Z=0,M=X,R=be}return}St=St||Nt,_t=_t||bt,At=At||It,(Nt!==x||St!==U)&&(o.blendEquationSeparate($e[Nt],$e[St]),x=Nt,U=St),(bt!==O||It!==L||_t!==z||At!==F)&&(o.blendFuncSeparate(ve[bt],ve[It],ve[_t],ve[At]),O=bt,L=It,z=_t,F=At),(ne.equals(P)===!1||Ie!==Z)&&(o.blendColor(ne.r,ne.g,ne.b,Ie),P.copy(ne),Z=Ie),M=X,R=!1}function we(X,Nt){X.side===ga?Dt(o.CULL_FACE):ct(o.CULL_FACE);let bt=X.side===Yn;Nt&&(bt=!bt),re(bt),X.blending===Ur&&X.transparent===!1?me(xa):me(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const It=X.stencilWrite;d.setTest(It),It&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ze(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function re(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function tn(X){X!==eM?(ct(o.CULL_FACE),X!==k&&(X===Kg?o.cullFace(o.BACK):X===nM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),k=X}function G(X){X!==st&&(I&&o.lineWidth(X),st=X)}function Ze(X,Nt,bt){X?(ct(o.POLYGON_OFFSET_FILL),(at!==Nt||dt!==bt)&&(o.polygonOffset(Nt,bt),at=Nt,dt=bt)):Dt(o.POLYGON_OFFSET_FILL)}function Ee(X){X?ct(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function Oe(X){X===void 0&&(X=o.TEXTURE0+ut-1),Mt!==X&&(o.activeTexture(X),Mt=X)}function Yt(X,Nt,bt){bt===void 0&&(Mt===null?bt=o.TEXTURE0+ut-1:bt=Mt);let It=xt[bt];It===void 0&&(It={type:void 0,texture:void 0},xt[bt]=It),(It.type!==X||It.texture!==Nt)&&(Mt!==bt&&(o.activeTexture(bt),Mt=bt),o.bindTexture(X,Nt||et[X]),It.type=X,It.texture=Nt)}function D(){const X=xt[Mt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function ht(){try{o.texSubImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function vt(){try{o.texSubImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Rt(){try{o.texStorage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Xt(){try{o.texStorage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function ee(){try{o.texImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function yt(){try{o.texImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Et(X){gt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),gt.copy(X))}function zt(X){Tt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Tt.copy(X))}function Pt(X,Nt){let bt=p.get(Nt);bt===void 0&&(bt=new WeakMap,p.set(Nt,bt));let It=bt.get(X);It===void 0&&(It=o.getUniformBlockIndex(Nt,X.name),bt.set(X,It))}function wt(X,Nt){const It=p.get(Nt).get(X);m.get(Nt)!==It&&(o.uniformBlockBinding(Nt,It,X.__bindingPointIndex),m.set(Nt,It))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Mt=null,xt={},g={},S=new WeakMap,y=[],b=null,C=!1,M=null,x=null,O=null,L=null,U=null,z=null,F=null,P=new de(0,0,0),Z=0,R=!1,w=null,k=null,st=null,at=null,dt=null,gt.set(0,0,o.canvas.width,o.canvas.height),Tt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ct,disable:Dt,bindFramebuffer:kt,drawBuffers:Ht,useProgram:pe,setBlending:me,setMaterial:we,setFlipSided:re,setCullFace:tn,setLineWidth:G,setPolygonOffset:Ze,setScissorTest:Ee,activeTexture:Oe,bindTexture:Yt,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:ee,texImage3D:yt,updateUBOMapping:Pt,uniformBlockBinding:wt,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:ht,texSubImage3D:vt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Zt,scissor:Et,viewport:zt,reset:le}}function sA(o,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Le,_=new WeakMap;let g;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(D,E){return y?new OffscreenCanvas(D,E):Qc("canvas")}function C(D,E,W){let ht=1;const vt=Yt(D);if((vt.width>W||vt.height>W)&&(ht=W/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const lt=Math.floor(ht*vt.width),Zt=Math.floor(ht*vt.height);g===void 0&&(g=b(lt,Zt));const Rt=E?b(lt,Zt):g;return Rt.width=lt,Rt.height=Zt,Rt.getContext("2d").drawImage(D,0,0,lt,Zt),ie("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+lt+"x"+Zt+")."),Rt}else return"data"in D&&ie("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),D;return D}function M(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function O(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(D,E,W,ht,vt=!1){if(D!==null){if(o[D]!==void 0)return o[D];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let lt=E;if(E===o.RED&&(W===o.FLOAT&&(lt=o.R32F),W===o.HALF_FLOAT&&(lt=o.R16F),W===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.R8UI),W===o.UNSIGNED_SHORT&&(lt=o.R16UI),W===o.UNSIGNED_INT&&(lt=o.R32UI),W===o.BYTE&&(lt=o.R8I),W===o.SHORT&&(lt=o.R16I),W===o.INT&&(lt=o.R32I)),E===o.RG&&(W===o.FLOAT&&(lt=o.RG32F),W===o.HALF_FLOAT&&(lt=o.RG16F),W===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RG8UI),W===o.UNSIGNED_SHORT&&(lt=o.RG16UI),W===o.UNSIGNED_INT&&(lt=o.RG32UI),W===o.BYTE&&(lt=o.RG8I),W===o.SHORT&&(lt=o.RG16I),W===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),W===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),W===o.UNSIGNED_INT&&(lt=o.RGB32UI),W===o.BYTE&&(lt=o.RGB8I),W===o.SHORT&&(lt=o.RGB16I),W===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),W===o.UNSIGNED_INT&&(lt=o.RGBA32UI),W===o.BYTE&&(lt=o.RGBA8I),W===o.SHORT&&(lt=o.RGBA16I),W===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),E===o.RGBA){const Zt=vt?Zc:Te.getTransfer(ht);W===o.FLOAT&&(lt=o.RGBA32F),W===o.HALF_FLOAT&&(lt=o.RGBA16F),W===o.UNSIGNED_BYTE&&(lt=Zt===He?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function U(D,E){let W;return D?E===null||E===Xi||E===jo?W=o.DEPTH24_STENCIL8:E===Hi?W=o.DEPTH32F_STENCIL8:E===Yo&&(W=o.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===jo?W=o.DEPTH_COMPONENT24:E===Hi?W=o.DEPTH_COMPONENT32F:E===Yo&&(W=o.DEPTH_COMPONENT16),W}function z(D,E){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Un&&D.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function F(D){const E=D.target;E.removeEventListener("dispose",F),Z(E),E.isVideoTexture&&_.delete(E)}function P(D){const E=D.target;E.removeEventListener("dispose",P),w(E)}function Z(D){const E=s.get(D);if(E.__webglInit===void 0)return;const W=D.source,ht=S.get(W);if(ht){const vt=ht[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&R(D),Object.keys(ht).length===0&&S.delete(W)}s.remove(D)}function R(D){const E=s.get(D);o.deleteTexture(E.__webglTexture);const W=D.source,ht=S.get(W);delete ht[E.__cacheKey],h.memory.textures--}function w(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let vt=0;vt<E.__webglFramebuffer[ht].length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[ht][vt]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=D.textures;for(let ht=0,vt=W.length;ht<vt;ht++){const lt=s.get(W[ht]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),s.remove(W[ht])}s.remove(D)}let k=0;function st(){k=0}function at(){const D=k;return D>=l.maxTextures&&ie("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),k+=1,D}function dt(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ut(D,E){const W=s.get(D);if(D.isVideoTexture&&Ee(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const ht=D.image;if(ht===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{et(W,D,E);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+E)}function I(D,E){const W=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){et(W,D,E);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+E)}function H(D,E){const W=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){et(W,D,E);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+E)}function it(D,E){const W=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){ct(W,D,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+E)}const Mt={[ud]:o.REPEAT,[_a]:o.CLAMP_TO_EDGE,[fd]:o.MIRRORED_REPEAT},xt={[Un]:o.NEAREST,[EM]:o.NEAREST_MIPMAP_NEAREST,[hc]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[mh]:o.LINEAR_MIPMAP_NEAREST,[Us]:o.LINEAR_MIPMAP_LINEAR},N={[AM]:o.NEVER,[UM]:o.ALWAYS,[RM]:o.LESS,[np]:o.LEQUAL,[CM]:o.EQUAL,[ip]:o.GEQUAL,[wM]:o.GREATER,[DM]:o.NOTEQUAL};function nt(D,E){if(E.type===Hi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===mh||E.magFilter===hc||E.magFilter===Us||E.minFilter===In||E.minFilter===mh||E.minFilter===hc||E.minFilter===Us)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Mt[E.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Mt[E.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Mt[E.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,xt[E.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==hc&&E.minFilter!==Us||E.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function gt(D,E){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",F));const ht=E.source;let vt=S.get(ht);vt===void 0&&(vt={},S.set(ht,vt));const lt=dt(E);if(lt!==D.__cacheKey){vt[lt]===void 0&&(vt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),vt[lt].usedTimes++;const Zt=vt[D.__cacheKey];Zt!==void 0&&(vt[D.__cacheKey].usedTimes--,Zt.usedTimes===0&&R(E)),D.__cacheKey=lt,D.__webglTexture=vt[lt].texture}return W}function Tt(D,E,W){return Math.floor(Math.floor(D/W)/E)}function Ft(D,E,W,ht){const lt=D.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,W,ht,E.data);else{lt.sort((yt,Et)=>yt.start-Et.start);let Zt=0;for(let yt=1;yt<lt.length;yt++){const Et=lt[Zt],zt=lt[yt],Pt=Et.start+Et.count,wt=Tt(zt.start,E.width,4),le=Tt(Et.start,E.width,4);zt.start<=Pt+1&&wt===le&&Tt(zt.start+zt.count-1,E.width,4)===wt?Et.count=Math.max(Et.count,zt.start+zt.count-Et.start):(++Zt,lt[Zt]=zt)}lt.length=Zt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let yt=0,Et=lt.length;yt<Et;yt++){const zt=lt[yt],Pt=Math.floor(zt.start/4),wt=Math.ceil(zt.count/4),le=Pt%E.width,X=Math.floor(Pt/E.width),Nt=wt,bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,le,X,Nt,bt,W,ht,E.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function et(D,E,W){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const vt=gt(D,E),lt=E.source;i.bindTexture(ht,D.__webglTexture,o.TEXTURE0+W);const Zt=s.get(lt);if(lt.version!==Zt.__version||vt===!0){i.activeTexture(o.TEXTURE0+W);const Rt=Te.getPrimaries(Te.workingColorSpace),Xt=E.colorSpace===es?null:Te.getPrimaries(E.colorSpace),ee=E.colorSpace===es||Rt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let yt=C(E.image,!1,l.maxTextureSize);yt=Oe(E,yt);const Et=c.convert(E.format,E.colorSpace),zt=c.convert(E.type);let Pt=L(E.internalFormat,Et,zt,E.colorSpace,E.isVideoTexture);nt(ht,E);let wt;const le=E.mipmaps,X=E.isVideoTexture!==!0,Nt=Zt.__version===void 0||vt===!0,bt=lt.dataReady,It=z(E,yt);if(E.isDepthTexture)Pt=U(E.format===Ns,E.type),Nt&&(X?i.texStorage2D(o.TEXTURE_2D,1,Pt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Pt,yt.width,yt.height,0,Et,zt,null));else if(E.isDataTexture)if(le.length>0){X&&Nt&&i.texStorage2D(o.TEXTURE_2D,It,Pt,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)wt=le[St],X?bt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,wt.width,wt.height,Et,zt,wt.data):i.texImage2D(o.TEXTURE_2D,St,Pt,wt.width,wt.height,0,Et,zt,wt.data);E.generateMipmaps=!1}else X?(Nt&&i.texStorage2D(o.TEXTURE_2D,It,Pt,yt.width,yt.height),bt&&Ft(E,yt,Et,zt)):i.texImage2D(o.TEXTURE_2D,0,Pt,yt.width,yt.height,0,Et,zt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,Pt,le[0].width,le[0].height,yt.depth);for(let St=0,_t=le.length;St<_t;St++)if(wt=le[St],E.format!==Ui)if(Et!==null)if(X){if(bt)if(E.layerUpdates.size>0){const At=C_(wt.width,wt.height,E.format,E.type);for(const ne of E.layerUpdates){const Ie=wt.data.subarray(ne*At/wt.data.BYTES_PER_ELEMENT,(ne+1)*At/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,ne,wt.width,wt.height,1,Et,Ie)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,wt.width,wt.height,yt.depth,Et,wt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,St,Pt,wt.width,wt.height,yt.depth,0,wt.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,wt.width,wt.height,yt.depth,Et,zt,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,St,Pt,wt.width,wt.height,yt.depth,0,Et,zt,wt.data)}else{X&&Nt&&i.texStorage2D(o.TEXTURE_2D,It,Pt,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)wt=le[St],E.format!==Ui?Et!==null?X?bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,St,0,0,wt.width,wt.height,Et,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,St,Pt,wt.width,wt.height,0,wt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?bt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,wt.width,wt.height,Et,zt,wt.data):i.texImage2D(o.TEXTURE_2D,St,Pt,wt.width,wt.height,0,Et,zt,wt.data)}else if(E.isDataArrayTexture)if(X){if(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,Pt,yt.width,yt.height,yt.depth),bt)if(E.layerUpdates.size>0){const St=C_(yt.width,yt.height,E.format,E.type);for(const _t of E.layerUpdates){const At=yt.data.subarray(_t*St/yt.data.BYTES_PER_ELEMENT,(_t+1)*St/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,yt.width,yt.height,1,Et,zt,At)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Et,zt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,yt.width,yt.height,yt.depth,0,Et,zt,yt.data);else if(E.isData3DTexture)X?(Nt&&i.texStorage3D(o.TEXTURE_3D,It,Pt,yt.width,yt.height,yt.depth),bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Et,zt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,yt.width,yt.height,yt.depth,0,Et,zt,yt.data);else if(E.isFramebufferTexture){if(Nt)if(X)i.texStorage2D(o.TEXTURE_2D,It,Pt,yt.width,yt.height);else{let St=yt.width,_t=yt.height;for(let At=0;At<It;At++)i.texImage2D(o.TEXTURE_2D,At,Pt,St,_t,0,Et,zt,null),St>>=1,_t>>=1}}else if(le.length>0){if(X&&Nt){const St=Yt(le[0]);i.texStorage2D(o.TEXTURE_2D,It,Pt,St.width,St.height)}for(let St=0,_t=le.length;St<_t;St++)wt=le[St],X?bt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Et,zt,wt):i.texImage2D(o.TEXTURE_2D,St,Pt,Et,zt,wt);E.generateMipmaps=!1}else if(X){if(Nt){const St=Yt(yt);i.texStorage2D(o.TEXTURE_2D,It,Pt,St.width,St.height)}bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,zt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Pt,Et,zt,yt);M(E)&&x(ht),Zt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ct(D,E,W){if(E.image.length!==6)return;const ht=gt(D,E),vt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+W);const lt=s.get(vt);if(vt.version!==lt.__version||ht===!0){i.activeTexture(o.TEXTURE0+W);const Zt=Te.getPrimaries(Te.workingColorSpace),Rt=E.colorSpace===es?null:Te.getPrimaries(E.colorSpace),Xt=E.colorSpace===es||Zt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ee=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!ee&&!yt?Et[_t]=C(E.image[_t],!0,l.maxCubemapSize):Et[_t]=yt?E.image[_t].image:E.image[_t],Et[_t]=Oe(E,Et[_t]);const zt=Et[0],Pt=c.convert(E.format,E.colorSpace),wt=c.convert(E.type),le=L(E.internalFormat,Pt,wt,E.colorSpace),X=E.isVideoTexture!==!0,Nt=lt.__version===void 0||ht===!0,bt=vt.dataReady;let It=z(E,zt);nt(o.TEXTURE_CUBE_MAP,E);let St;if(ee){X&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,It,le,zt.width,zt.height);for(let _t=0;_t<6;_t++){St=Et[_t].mipmaps;for(let At=0;At<St.length;At++){const ne=St[At];E.format!==Ui?Pt!==null?X?bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ne.width,ne.height,Pt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ne.width,ne.height,0,ne.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ne.width,ne.height,Pt,wt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ne.width,ne.height,0,Pt,wt,ne.data)}}}else{if(St=E.mipmaps,X&&Nt){St.length>0&&It++;const _t=Yt(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,It,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(yt){X?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Pt,wt,Et[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Et[_t].width,Et[_t].height,0,Pt,wt,Et[_t].data);for(let At=0;At<St.length;At++){const Ie=St[At].image[_t].image;X?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Ie.width,Ie.height,Pt,wt,Ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,Ie.width,Ie.height,0,Pt,wt,Ie.data)}}else{X?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt,wt,Et[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Pt,wt,Et[_t]);for(let At=0;At<St.length;At++){const ne=St[At];X?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Pt,wt,ne.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,Pt,wt,ne.image[_t])}}}M(E)&&x(o.TEXTURE_CUBE_MAP),lt.__version=vt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Dt(D,E,W,ht,vt,lt){const Zt=c.convert(W.format,W.colorSpace),Rt=c.convert(W.type),Xt=L(W.internalFormat,Zt,Rt,W.colorSpace),ee=s.get(E),yt=s.get(W);if(yt.__renderTarget=E,!ee.__hasExternalTextures){const Et=Math.max(1,E.width>>lt),zt=Math.max(1,E.height>>lt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,lt,Xt,Et,zt,E.depth,0,Zt,Rt,null):i.texImage2D(vt,lt,Xt,Et,zt,0,Zt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Ze(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,vt,yt.__webglTexture,0,G(E)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,vt,yt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(D,E,W){if(o.bindRenderbuffer(o.RENDERBUFFER,D),E.depthBuffer){const ht=E.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,lt=U(E.stencilBuffer,vt),Zt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ze(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),lt,E.width,E.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,D)}else{const ht=E.textures;for(let vt=0;vt<ht.length;vt++){const lt=ht[vt],Zt=c.convert(lt.format,lt.colorSpace),Rt=c.convert(lt.type),Xt=L(lt.internalFormat,Zt,Rt,lt.colorSpace);Ze(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),Xt,E.width,E.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),Xt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(D,E,W){const ht=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=s.get(E.depthTexture);if(vt.__renderTarget=E,(!vt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),nt(o.TEXTURE_CUBE_MAP,E.depthTexture);const ee=c.convert(E.depthTexture.format),yt=c.convert(E.depthTexture.type);let Et;E.depthTexture.format===ya?Et=o.DEPTH_COMPONENT24:E.depthTexture.format===Ns&&(Et=o.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Et,E.width,E.height,0,ee,yt,null)}}else ut(E.depthTexture,0);const lt=vt.__webglTexture,Zt=G(E),Rt=ht?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Xt=E.depthTexture.format===Ns?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===ya)Ze(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Rt,lt,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Rt,lt,0);else if(E.depthTexture.format===Ns)Ze(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Rt,lt,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Rt,lt,0);else throw new Error("Unknown depthTexture format")}function pe(D){const E=s.get(D),W=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ht=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ht}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let ht=0;ht<6;ht++)Ht(E.__webglFramebuffer[ht],D,ht);else{const ht=D.texture.mipmaps;ht&&ht.length>0?Ht(E.__webglFramebuffer[0],D,0):Ht(E.__webglFramebuffer,D,0)}else if(W){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),kt(E.__webglDepthbuffer[ht],D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}else{const ht=D.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),kt(E.__webglDepthbuffer,D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function $e(D,E,W){const ht=s.get(D);E!==void 0&&Dt(ht.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&pe(D)}function ve(D){const E=D.texture,W=s.get(D),ht=s.get(E);D.addEventListener("dispose",P);const vt=D.textures,lt=D.isWebGLCubeRenderTarget===!0,Zt=vt.length>1;if(Zt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),lt){W.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)W.__webglFramebuffer[Rt][Xt]=o.createFramebuffer()}else W.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)W.__webglFramebuffer[Rt]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ee=s.get(vt[Rt]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&Ze(D)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const Xt=vt[Rt];W.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Rt]);const ee=c.convert(Xt.format,Xt.colorSpace),yt=c.convert(Xt.type),Et=L(Xt.internalFormat,ee,yt,Xt.colorSpace,D.isXRRenderTarget===!0),zt=G(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Et,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,W.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(W.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),nt(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Dt(W.__webglFramebuffer[Rt][Xt],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else Dt(W.__webglFramebuffer[Rt],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(E)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ee=vt[Rt],yt=s.get(ee);let Et=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Et=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,yt.__webglTexture),nt(Et,ee),Dt(W.__webglFramebuffer,D,ee,o.COLOR_ATTACHMENT0+Rt,Et,0),M(ee)&&x(Et)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Rt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ht.__webglTexture),nt(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Dt(W.__webglFramebuffer[Xt],D,E,o.COLOR_ATTACHMENT0,Rt,Xt);else Dt(W.__webglFramebuffer,D,E,o.COLOR_ATTACHMENT0,Rt,0);M(E)&&x(Rt),i.unbindTexture()}D.depthBuffer&&pe(D)}function me(D){const E=D.textures;for(let W=0,ht=E.length;W<ht;W++){const vt=E[W];if(M(vt)){const lt=O(D),Zt=s.get(vt).__webglTexture;i.bindTexture(lt,Zt),x(lt),i.unbindTexture()}}}const we=[],re=[];function tn(D){if(D.samples>0){if(Ze(D)===!1){const E=D.textures,W=D.width,ht=D.height;let vt=o.COLOR_BUFFER_BIT;const lt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=s.get(D),Rt=E.length>1;if(Rt)for(let ee=0;ee<E.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Xt=D.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ee=0;ee<E.length;ee++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const yt=s.get(E[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,W,ht,0,0,W,ht,vt,o.NEAREST),m===!0&&(we.length=0,re.length=0,we.push(o.COLOR_ATTACHMENT0+ee),D.depthBuffer&&D.resolveDepthBuffer===!1&&(we.push(lt),re.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,re)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let ee=0;ee<E.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const yt=s.get(E[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function G(D){return Math.min(l.maxSamples,D.samples)}function Ze(D){const E=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ee(D){const E=h.render.frame;_.get(D)!==E&&(_.set(D,E),D.update())}function Oe(D,E){const W=D.colorSpace,ht=D.format,vt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==zr&&W!==es&&(Te.getTransfer(W)===He?(ht!==Ui||vt!==ii)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",W)),E}function Yt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=st,this.setTexture2D=ut,this.setTexture2DArray=I,this.setTexture3D=H,this.setTextureCube=it,this.rebindTextures=$e,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function rA(o,e){function i(s,l=es){let c;const h=Te.getTransfer(l);if(s===ii)return o.UNSIGNED_BYTE;if(s===Qd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Jd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===hv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===dv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===uv)return o.BYTE;if(s===fv)return o.SHORT;if(s===Yo)return o.UNSIGNED_SHORT;if(s===Kd)return o.INT;if(s===Xi)return o.UNSIGNED_INT;if(s===Hi)return o.FLOAT;if(s===Ma)return o.HALF_FLOAT;if(s===pv)return o.ALPHA;if(s===mv)return o.RGB;if(s===Ui)return o.RGBA;if(s===ya)return o.DEPTH_COMPONENT;if(s===Ns)return o.DEPTH_STENCIL;if(s===gv)return o.RED;if(s===$d)return o.RED_INTEGER;if(s===Ir)return o.RG;if(s===tp)return o.RG_INTEGER;if(s===ep)return o.RGBA_INTEGER;if(s===Vc||s===kc||s===Xc||s===Wc)if(h===He)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hd||s===dd||s===pd||s===md)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===hd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gd||s===_d||s===vd||s===xd||s===Sd||s===Md||s===yd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===gd||s===_d)return h===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===vd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===xd)return c.COMPRESSED_R11_EAC;if(s===Sd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Md)return c.COMPRESSED_RG11_EAC;if(s===yd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Nd||s===Ld||s===Od||s===Pd||s===Id)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ed)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===bd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Td)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ad)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Cd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ud)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ld)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Od)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Id)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zd||s===Bd||s===Fd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===zd)return h===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Hd||s===Gd||s===Vd||s===kd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Hd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Gd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const oA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Dv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new qi({vertexShader:oA,fragmentShader:lA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new xi(new eu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uA extends Fr{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,S=null,y=null,b=null;const C=typeof XRWebGLBinding<"u",M=new cA,x={},O=i.getContextAttributes();let L=null,U=null;const z=[],F=[],P=new Le;let Z=null;const R=new Di;R.viewport=new an;const w=new Di;w.viewport=new an;const k=[R,w],st=new xy;let at=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ct=z[et];return ct===void 0&&(ct=new zh,z[et]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(et){let ct=z[et];return ct===void 0&&(ct=new zh,z[et]=ct),ct.getGripSpace()},this.getHand=function(et){let ct=z[et];return ct===void 0&&(ct=new zh,z[et]=ct),ct.getHandSpace()};function ut(et){const ct=F.indexOf(et.inputSource);if(ct===-1)return;const Dt=z[ct];Dt!==void 0&&(Dt.update(et.inputSource,et.frame,p||h),Dt.dispatchEvent({type:et.type,data:et.inputSource}))}function I(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",H);for(let et=0;et<z.length;et++){const ct=F[et];ct!==null&&(F[et]=null,z[et].disconnect(ct))}at=null,dt=null,M.reset();for(const et in x)delete x[et];e.setRenderTarget(L),y=null,S=null,g=null,l=null,U=null,Ft.stop(),s.isPresenting=!1,e.setPixelRatio(Z),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,s.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,s.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",I),l.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,kt=null,Ht=null;O.depth&&(Ht=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=O.stencil?Ns:ya,kt=O.stencil?jo:Xi);const pe={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:c};g=this.getBinding(),S=g.createProjectionLayer(pe),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),U=new ki(S.textureWidth,S.textureHeight,{format:Ui,type:ii,depthTexture:new Ko(S.textureWidth,S.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Dt={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new ki(y.framebufferWidth,y.framebufferHeight,{format:Ui,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ft.setContext(l),Ft.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(et){for(let ct=0;ct<et.removed.length;ct++){const Dt=et.removed[ct],kt=F.indexOf(Dt);kt>=0&&(F[kt]=null,z[kt].disconnect(Dt))}for(let ct=0;ct<et.added.length;ct++){const Dt=et.added[ct];let kt=F.indexOf(Dt);if(kt===-1){for(let pe=0;pe<z.length;pe++)if(pe>=F.length){F.push(Dt),kt=pe;break}else if(F[pe]===null){F[pe]=Dt,kt=pe;break}if(kt===-1)break}const Ht=z[kt];Ht&&Ht.connect(Dt)}}const it=new J,Mt=new J;function xt(et,ct,Dt){it.setFromMatrixPosition(ct.matrixWorld),Mt.setFromMatrixPosition(Dt.matrixWorld);const kt=it.distanceTo(Mt),Ht=ct.projectionMatrix.elements,pe=Dt.projectionMatrix.elements,$e=Ht[14]/(Ht[10]-1),ve=Ht[14]/(Ht[10]+1),me=(Ht[9]+1)/Ht[5],we=(Ht[9]-1)/Ht[5],re=(Ht[8]-1)/Ht[0],tn=(pe[8]+1)/pe[0],G=$e*re,Ze=$e*tn,Ee=kt/(-re+tn),Oe=Ee*-re;if(ct.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Oe),et.translateZ(Ee),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Ht[10]===-1)et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Yt=$e+Ee,D=ve+Ee,E=G-Oe,W=Ze+(kt-Oe),ht=me*ve/D*Yt,vt=we*ve/D*Yt;et.projectionMatrix.makePerspective(E,W,ht,vt,Yt,D),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function N(et,ct){ct===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ct.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let ct=et.near,Dt=et.far;M.texture!==null&&(M.depthNear>0&&(ct=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),st.near=w.near=R.near=ct,st.far=w.far=R.far=Dt,(at!==st.near||dt!==st.far)&&(l.updateRenderState({depthNear:st.near,depthFar:st.far}),at=st.near,dt=st.far),st.layers.mask=et.layers.mask|6,R.layers.mask=st.layers.mask&3,w.layers.mask=st.layers.mask&5;const kt=et.parent,Ht=st.cameras;N(st,kt);for(let pe=0;pe<Ht.length;pe++)N(Ht[pe],kt);Ht.length===2?xt(st,R,w):st.projectionMatrix.copy(R.projectionMatrix),nt(et,st,kt)};function nt(et,ct,Dt){Dt===null?et.matrix.copy(ct.matrixWorld):(et.matrix.copy(Dt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ct.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Xd*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(et){m=et,S!==null&&(S.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(st)},this.getCameraTexture=function(et){return x[et]};let gt=null;function Tt(et,ct){if(_=ct.getViewerPose(p||h),b=ct,_!==null){const Dt=_.views;y!==null&&(e.setRenderTargetFramebuffer(U,y.framebuffer),e.setRenderTarget(U));let kt=!1;Dt.length!==st.cameras.length&&(st.cameras.length=0,kt=!0);for(let ve=0;ve<Dt.length;ve++){const me=Dt[ve];let we=null;if(y!==null)we=y.getViewport(me);else{const tn=g.getViewSubImage(S,me);we=tn.viewport,ve===0&&(e.setRenderTargetTextures(U,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(U))}let re=k[ve];re===void 0&&(re=new Di,re.layers.enable(ve),re.viewport=new an,k[ve]=re),re.matrix.fromArray(me.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(me.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(we.x,we.y,we.width,we.height),ve===0&&(st.matrix.copy(re.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),kt===!0&&st.cameras.push(re)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const ve=g.getDepthInformation(Dt[0]);ve&&ve.isValid&&ve.texture&&M.init(ve,l.renderState)}if(Ht&&Ht.includes("camera-access")&&C){e.state.unbindTexture(),g=s.getBinding();for(let ve=0;ve<Dt.length;ve++){const me=Dt[ve].camera;if(me){let we=x[me];we||(we=new Dv,x[me]=we);const re=g.getCameraImage(me);we.sourceTexture=re}}}}for(let Dt=0;Dt<z.length;Dt++){const kt=F[Dt],Ht=z[Dt];kt!==null&&Ht!==void 0&&Ht.update(kt,ct,p||h)}gt&&gt(et,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),b=null}const Ft=new Nv;Ft.setAnimationLoop(Tt),this.setAnimationLoop=function(et){gt=et},this.dispose=function(){}}}const Rs=new Wi,fA=new Je;function hA(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,Tv(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,O,L,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x)):x.isMeshStandardMaterial?(c(M,x),S(M,x),x.isMeshPhysicalMaterial&&y(M,x,U)):x.isMeshMatcapMaterial?(c(M,x),b(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),C(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,O,L):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Yn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Yn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const O=e.get(x),L=O.envMap,U=O.envMapRotation;L&&(M.envMap.value=L,Rs.copy(U),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),M.envMapRotation.value.setFromMatrix4(fA.makeRotationFromEuler(Rs)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,O,L){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*O,M.scale.value=L*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function S(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,O){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Yn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){const O=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function dA(o,e,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,L){const U=L.program;s.uniformBlockBinding(O,U)}function p(O,L){let U=l[O.id];U===void 0&&(b(O),U=_(O),l[O.id]=U,O.addEventListener("dispose",M));const z=L.program;s.updateUBOMapping(O,z);const F=e.render.frame;c[O.id]!==F&&(S(O),c[O.id]=F)}function _(O){const L=g();O.__bindingPointIndex=L;const U=o.createBuffer(),z=O.__size,F=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,z,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,U),U}function g(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(O){const L=l[O.id],U=O.uniforms,z=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let F=0,P=U.length;F<P;F++){const Z=Array.isArray(U[F])?U[F]:[U[F]];for(let R=0,w=Z.length;R<w;R++){const k=Z[R];if(y(k,F,R,z)===!0){const st=k.__offset,at=Array.isArray(k.value)?k.value:[k.value];let dt=0;for(let ut=0;ut<at.length;ut++){const I=at[ut],H=C(I);typeof I=="number"||typeof I=="boolean"?(k.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,st+dt,k.__data)):I.isMatrix3?(k.__data[0]=I.elements[0],k.__data[1]=I.elements[1],k.__data[2]=I.elements[2],k.__data[3]=0,k.__data[4]=I.elements[3],k.__data[5]=I.elements[4],k.__data[6]=I.elements[5],k.__data[7]=0,k.__data[8]=I.elements[6],k.__data[9]=I.elements[7],k.__data[10]=I.elements[8],k.__data[11]=0):(I.toArray(k.__data,dt),dt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(O,L,U,z){const F=O.value,P=L+"_"+U;if(z[P]===void 0)return typeof F=="number"||typeof F=="boolean"?z[P]=F:z[P]=F.clone(),!0;{const Z=z[P];if(typeof F=="number"||typeof F=="boolean"){if(Z!==F)return z[P]=F,!0}else if(Z.equals(F)===!1)return Z.copy(F),!0}return!1}function b(O){const L=O.uniforms;let U=0;const z=16;for(let P=0,Z=L.length;P<Z;P++){const R=Array.isArray(L[P])?L[P]:[L[P]];for(let w=0,k=R.length;w<k;w++){const st=R[w],at=Array.isArray(st.value)?st.value:[st.value];for(let dt=0,ut=at.length;dt<ut;dt++){const I=at[dt],H=C(I),it=U%z,Mt=it%H.boundary,xt=it+Mt;U+=Mt,xt!==0&&z-xt<H.storage&&(U+=z-xt),st.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=U,U+=H.storage}}}const F=U%z;return F>0&&(U+=z-F),O.__size=U,O.__cache={},this}function C(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ie("WebGLRenderer: Unsupported uniform value type.",O),L}function M(O){const L=O.target;L.removeEventListener("dispose",M);const U=h.indexOf(L.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function x(){for(const O in l)o.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const pA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function mA(){return Bi===null&&(Bi=new sy(pA,16,16,Ir,Ma),Bi.name="DFG_LUT",Bi.minFilter=In,Bi.magFilter=In,Bi.wrapS=_a,Bi.wrapT=_a,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class gA{constructor(e={}){const{canvas:i=NM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:y=ii}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const C=y,M=new Set([ep,tp,$d]),x=new Set([ii,Xi,Yo,jo,Qd,Jd]),O=new Uint32Array(4),L=new Int32Array(4);let U=null,z=null;const F=[],P=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let w=!1;this._outputColorSpace=gi;let k=0,st=0,at=null,dt=-1,ut=null;const I=new an,H=new an;let it=null;const Mt=new de(0);let xt=0,N=i.width,nt=i.height,gt=1,Tt=null,Ft=null;const et=new an(0,0,N,nt),ct=new an(0,0,N,nt);let Dt=!1;const kt=new op;let Ht=!1,pe=!1;const $e=new Je,ve=new J,me=new an,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function tn(){return at===null?gt:1}let G=s;function Ze(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Zd}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",be,!1),G===null){const q="webgl2";if(G=Ze(q,A),G===null)throw Ze(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ce("WebGLRenderer: "+A.message),A}let Ee,Oe,Yt,D,E,W,ht,vt,lt,Zt,Rt,Xt,ee,yt,Et,zt,Pt,wt,le,X,Nt,bt,It,St;function _t(){Ee=new mb(G),Ee.init(),bt=new rA(G,Ee),Oe=new rb(G,Ee,e,bt),Yt=new aA(G,Ee),Oe.reversedDepthBuffer&&S&&Yt.buffers.depth.setReversed(!0),D=new vb(G),E=new kT,W=new sA(G,Ee,Yt,E,Oe,bt,D),ht=new lb(R),vt=new pb(R),lt=new yy(G),It=new ab(G,lt),Zt=new gb(G,lt,D,It),Rt=new Sb(G,Zt,lt,D),le=new xb(G,Oe,W),zt=new ob(E),Xt=new VT(R,ht,vt,Ee,Oe,It,zt),ee=new hA(R,E),yt=new WT,Et=new QT(Ee),wt=new ib(R,ht,vt,Yt,Rt,b,m),Pt=new nA(R,Rt,Oe),St=new dA(G,D,Oe,Yt),X=new sb(G,Ee,D),Nt=new _b(G,Ee,D),D.programs=Xt.programs,R.capabilities=Oe,R.extensions=Ee,R.properties=E,R.renderLists=yt,R.shadowMap=Pt,R.state=Yt,R.info=D}_t(),C!==ii&&(Z=new yb(C,i.width,i.height,l,c));const At=new uA(R,G);this.xr=At,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(A){A!==void 0&&(gt=A,this.setSize(N,nt,!1))},this.getSize=function(A){return A.set(N,nt)},this.setSize=function(A,q,rt=!0){if(At.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,nt=q,i.width=Math.floor(A*gt),i.height=Math.floor(q*gt),rt===!0&&(i.style.width=A+"px",i.style.height=q+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(N*gt,nt*gt).floor()},this.setDrawingBufferSize=function(A,q,rt){N=A,nt=q,gt=rt,i.width=Math.floor(A*rt),i.height=Math.floor(q*rt),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===ii){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(et)},this.setViewport=function(A,q,rt,$){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,q,rt,$),Yt.viewport(I.copy(et).multiplyScalar(gt).round())},this.getScissor=function(A){return A.copy(ct)},this.setScissor=function(A,q,rt,$){A.isVector4?ct.set(A.x,A.y,A.z,A.w):ct.set(A,q,rt,$),Yt.scissor(H.copy(ct).multiplyScalar(gt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(A){Yt.setScissorTest(Dt=A)},this.setOpaqueSort=function(A){Tt=A},this.setTransparentSort=function(A){Ft=A},this.getClearColor=function(A){return A.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,rt=!0){let $=0;if(A){let j=!1;if(at!==null){const Ut=at.texture.format;j=M.has(Ut)}if(j){const Ut=at.texture.type,Bt=x.has(Ut),Lt=wt.getClearColor(),Gt=wt.getClearAlpha(),Wt=Lt.r,Jt=Lt.g,qt=Lt.b;Bt?(O[0]=Wt,O[1]=Jt,O[2]=qt,O[3]=Gt,G.clearBufferuiv(G.COLOR,0,O)):(L[0]=Wt,L[1]=Jt,L[2]=qt,L[3]=Gt,G.clearBufferiv(G.COLOR,0,L))}else $|=G.COLOR_BUFFER_BIT}q&&($|=G.DEPTH_BUFFER_BIT),rt&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",be,!1),wt.dispose(),yt.dispose(),Et.dispose(),E.dispose(),ht.dispose(),vt.dispose(),Rt.dispose(),It.dispose(),St.dispose(),Xt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Is),At.removeEventListener("sessionend",kr),Li.stop()};function ne(A){A.preventDefault(),i_("WebGLRenderer: Context Lost."),w=!0}function Ie(){i_("WebGLRenderer: Context Restored."),w=!1;const A=D.autoReset,q=Pt.enabled,rt=Pt.autoUpdate,$=Pt.needsUpdate,j=Pt.type;_t(),D.autoReset=A,Pt.enabled=q,Pt.autoUpdate=rt,Pt.needsUpdate=$,Pt.type=j}function be(A){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Nn(A){const q=A.target;q.removeEventListener("dispose",Nn),Si(q)}function Si(A){el(A),E.remove(A)}function el(A){const q=E.get(A).programs;q!==void 0&&(q.forEach(function(rt){Xt.releaseProgram(rt)}),A.isShaderMaterial&&Xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,rt,$,j,Ut){q===null&&(q=we);const Bt=j.isMesh&&j.matrixWorld.determinant()<0,Lt=as(A,q,rt,$,j);Yt.setMaterial($,Bt);let Gt=rt.index,Wt=1;if($.wireframe===!0){if(Gt=Zt.getWireframeAttribute(rt),Gt===void 0)return;Wt=2}const Jt=rt.drawRange,qt=rt.attributes.position;let $t=Jt.start*Wt,De=(Jt.start+Jt.count)*Wt;Ut!==null&&($t=Math.max($t,Ut.start*Wt),De=Math.min(De,(Ut.start+Ut.count)*Wt)),Gt!==null?($t=Math.max($t,0),De=Math.min(De,Gt.count)):qt!=null&&($t=Math.max($t,0),De=Math.min(De,qt.count));const Ke=De-$t;if(Ke<0||Ke===1/0)return;It.setup(j,$,Lt,rt,Gt);let We,Pe=X;if(Gt!==null&&(We=lt.get(Gt),Pe=Nt,Pe.setIndex(We)),j.isMesh)$.wireframe===!0?(Yt.setLineWidth($.wireframeLinewidth*tn()),Pe.setMode(G.LINES)):Pe.setMode(G.TRIANGLES);else if(j.isLine){let Kt=$.linewidth;Kt===void 0&&(Kt=1),Yt.setLineWidth(Kt*tn()),j.isLineSegments?Pe.setMode(G.LINES):j.isLineLoop?Pe.setMode(G.LINE_LOOP):Pe.setMode(G.LINE_STRIP)}else j.isPoints?Pe.setMode(G.POINTS):j.isSprite&&Pe.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Zo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Pe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,Ue=j._multiDrawCounts,ae=j._multiDrawCount,yn=Gt?lt.get(Gt).bytesPerElement:1,Yi=E.get($).currentProgram.getUniforms();for(let En=0;En<ae;En++)Yi.setValue(G,"_gl_DrawID",En),Pe.render(Kt[En]/yn,Ue[En])}else if(j.isInstancedMesh)Pe.renderInstances($t,Ke,j.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ue=Math.min(rt.instanceCount,Kt);Pe.renderInstances($t,Ke,Ue)}else Pe.render($t,Ke)};function Gr(A,q,rt){A.transparent===!0&&A.side===ga&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,Bs(A,q,rt),A.side=is,A.needsUpdate=!0,Bs(A,q,rt),A.side=ga):Bs(A,q,rt)}this.compile=function(A,q,rt=null){rt===null&&(rt=A),z=Et.get(rt),z.init(q),P.push(z),rt.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(z.pushLight(j),j.castShadow&&z.pushShadow(j))}),A!==rt&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(z.pushLight(j),j.castShadow&&z.pushShadow(j))}),z.setupLights();const $=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ut=j.material;if(Ut)if(Array.isArray(Ut))for(let Bt=0;Bt<Ut.length;Bt++){const Lt=Ut[Bt];Gr(Lt,rt,j),$.add(Lt)}else Gr(Ut,rt,j),$.add(Ut)}),z=P.pop(),$},this.compileAsync=function(A,q,rt=null){const $=this.compile(A,q,rt);return new Promise(j=>{function Ut(){if($.forEach(function(Bt){E.get(Bt).currentProgram.isReady()&&$.delete(Bt)}),$.size===0){j(A);return}setTimeout(Ut,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Ps=null;function Vr(A){Ps&&Ps(A)}function Is(){Li.stop()}function kr(){Li.start()}const Li=new Nv;Li.setAnimationLoop(Vr),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(A){Ps=A,At.setAnimationLoop(A),A===null?Li.stop():Li.start()},At.addEventListener("sessionstart",Is),At.addEventListener("sessionend",kr),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const rt=At.enabled===!0&&At.isPresenting===!0,$=Z!==null&&(at===null||rt)&&Z.begin(R,at);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(q),q=At.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,q,at),z=Et.get(A,P.length),z.init(q),P.push(z),$e.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),kt.setFromProjectionMatrix($e,Gi,q.reversedDepth),pe=this.localClippingEnabled,Ht=zt.init(this.clippingPlanes,pe),U=yt.get(A,F.length),U.init(),F.push(U),At.enabled===!0&&At.isPresenting===!0){const Bt=R.xr.getDepthSensingMesh();Bt!==null&&si(Bt,q,-1/0,R.sortObjects)}si(A,q,0,R.sortObjects),U.finish(),R.sortObjects===!0&&U.sort(Tt,Ft),re=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,re&&wt.addToRenderList(U,A),this.info.render.frame++,Ht===!0&&zt.beginShadows();const j=z.state.shadowsArray;if(Pt.render(j,A,q),Ht===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&Z.hasRenderPass())===!1){const Bt=U.opaque,Lt=U.transmissive;if(z.setupLights(),q.isArrayCamera){const Gt=q.cameras;if(Lt.length>0)for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];Mn(Bt,Lt,A,qt)}re&&wt.render(A);for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];ln(U,A,qt,qt.viewport)}}else Lt.length>0&&Mn(Bt,Lt,A,q),re&&wt.render(A),ln(U,A,q)}at!==null&&st===0&&(W.updateMultisampleRenderTarget(at),W.updateRenderTargetMipmap(at)),$&&Z.end(R),A.isScene===!0&&A.onAfterRender(R,A,q),It.resetDefaultState(),dt=-1,ut=null,P.pop(),P.length>0?(z=P[P.length-1],Ht===!0&&zt.setGlobalState(R.clippingPlanes,z.state.camera)):z=null,F.pop(),F.length>0?U=F[F.length-1]:U=null};function si(A,q,rt,$){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)z.pushLight(A),A.castShadow&&z.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||kt.intersectsSprite(A)){$&&me.setFromMatrixPosition(A.matrixWorld).applyMatrix4($e);const Bt=Rt.update(A),Lt=A.material;Lt.visible&&U.push(A,Bt,Lt,rt,me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||kt.intersectsObject(A))){const Bt=Rt.update(A),Lt=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),me.copy(A.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),me.copy(Bt.boundingSphere.center)),me.applyMatrix4(A.matrixWorld).applyMatrix4($e)),Array.isArray(Lt)){const Gt=Bt.groups;for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt],$t=Lt[qt.materialIndex];$t&&$t.visible&&U.push(A,Bt,$t,rt,me.z,qt)}}else Lt.visible&&U.push(A,Bt,Lt,rt,me.z,null)}}const Ut=A.children;for(let Bt=0,Lt=Ut.length;Bt<Lt;Bt++)si(Ut[Bt],q,rt,$)}function ln(A,q,rt,$){const{opaque:j,transmissive:Ut,transparent:Bt}=A;z.setupLightsView(rt),Ht===!0&&zt.setGlobalState(R.clippingPlanes,rt),$&&Yt.viewport(I.copy($)),j.length>0&&Mi(j,q,rt),Ut.length>0&&Mi(Ut,q,rt),Bt.length>0&&Mi(Bt,q,rt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Mn(A,q,rt,$){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[$.id]===void 0){const $t=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[$.id]=new ki(1,1,{generateMipmaps:!0,type:$t?Ma:ii,minFilter:Us,samples:Oe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Ut=z.state.transmissionRenderTarget[$.id],Bt=$.viewport||I;Ut.setSize(Bt.z*R.transmissionResolutionScale,Bt.w*R.transmissionResolutionScale);const Lt=R.getRenderTarget(),Gt=R.getActiveCubeFace(),Wt=R.getActiveMipmapLevel();R.setRenderTarget(Ut),R.getClearColor(Mt),xt=R.getClearAlpha(),xt<1&&R.setClearColor(16777215,.5),R.clear(),re&&wt.render(rt);const Jt=R.toneMapping;R.toneMapping=Vi;const qt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),z.setupLightsView($),Ht===!0&&zt.setGlobalState(R.clippingPlanes,$),Mi(A,rt,$),W.updateMultisampleRenderTarget(Ut),W.updateRenderTargetMipmap(Ut),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let De=0,Ke=q.length;De<Ke;De++){const We=q[De],{object:Pe,geometry:Kt,material:Ue,group:ae}=We;if(Ue.side===ga&&Pe.layers.test($.layers)){const yn=Ue.side;Ue.side=Yn,Ue.needsUpdate=!0,zs(Pe,rt,$,Kt,Ue,ae),Ue.side=yn,Ue.needsUpdate=!0,$t=!0}}$t===!0&&(W.updateMultisampleRenderTarget(Ut),W.updateRenderTargetMipmap(Ut))}R.setRenderTarget(Lt,Gt,Wt),R.setClearColor(Mt,xt),qt!==void 0&&($.viewport=qt),R.toneMapping=Jt}function Mi(A,q,rt){const $=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Ut=A.length;j<Ut;j++){const Bt=A[j],{object:Lt,geometry:Gt,group:Wt}=Bt;let Jt=Bt.material;Jt.allowOverride===!0&&$!==null&&(Jt=$),Lt.layers.test(rt.layers)&&zs(Lt,q,rt,Gt,Jt,Wt)}}function zs(A,q,rt,$,j,Ut){A.onBeforeRender(R,q,rt,$,j,Ut),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(R,q,rt,$,A,Ut),j.transparent===!0&&j.side===ga&&j.forceSinglePass===!1?(j.side=Yn,j.needsUpdate=!0,R.renderBufferDirect(rt,q,$,j,A,Ut),j.side=is,j.needsUpdate=!0,R.renderBufferDirect(rt,q,$,j,A,Ut),j.side=ga):R.renderBufferDirect(rt,q,$,j,A,Ut),A.onAfterRender(R,q,rt,$,j,Ut)}function Bs(A,q,rt){q.isScene!==!0&&(q=we);const $=E.get(A),j=z.state.lights,Ut=z.state.shadowsArray,Bt=j.state.version,Lt=Xt.getParameters(A,j.state,Ut,q,rt),Gt=Xt.getProgramCacheKey(Lt);let Wt=$.programs;$.environment=A.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(A.isMeshStandardMaterial?vt:ht).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",Nn),Wt=new Map,$.programs=Wt);let Jt=Wt.get(Gt);if(Jt!==void 0){if($.currentProgram===Jt&&$.lightsStateVersion===Bt)return Xr(A,Lt),Jt}else Lt.uniforms=Xt.getUniforms(A),A.onBeforeCompile(Lt,R),Jt=Xt.acquireProgram(Lt,Gt),Wt.set(Gt,Jt),$.uniforms=Lt.uniforms;const qt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=zt.uniform),Xr(A,Lt),$.needsLights=Ea(A),$.lightsStateVersion=Bt,$.needsLights&&(qt.ambientLightColor.value=j.state.ambient,qt.lightProbe.value=j.state.probe,qt.directionalLights.value=j.state.directional,qt.directionalLightShadows.value=j.state.directionalShadow,qt.spotLights.value=j.state.spot,qt.spotLightShadows.value=j.state.spotShadow,qt.rectAreaLights.value=j.state.rectArea,qt.ltc_1.value=j.state.rectAreaLTC1,qt.ltc_2.value=j.state.rectAreaLTC2,qt.pointLights.value=j.state.point,qt.pointLightShadows.value=j.state.pointShadow,qt.hemisphereLights.value=j.state.hemi,qt.directionalShadowMap.value=j.state.directionalShadowMap,qt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,qt.spotShadowMap.value=j.state.spotShadowMap,qt.spotLightMatrix.value=j.state.spotLightMatrix,qt.spotLightMap.value=j.state.spotLightMap,qt.pointShadowMap.value=j.state.pointShadowMap,qt.pointShadowMatrix.value=j.state.pointShadowMatrix),$.currentProgram=Jt,$.uniformsList=null,Jt}function nl(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Yc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Xr(A,q){const rt=E.get(A);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function as(A,q,rt,$,j){q.isScene!==!0&&(q=we),W.resetTextureUnits();const Ut=q.fog,Bt=$.isMeshStandardMaterial?q.environment:null,Lt=at===null?R.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:zr,Gt=($.isMeshStandardMaterial?vt:ht).get($.envMap||Bt),Wt=$.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Jt=!!rt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qt=!!rt.morphAttributes.position,$t=!!rt.morphAttributes.normal,De=!!rt.morphAttributes.color;let Ke=Vi;$.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ke=R.toneMapping);const We=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Pe=We!==void 0?We.length:0,Kt=E.get($),Ue=z.state.lights;if(Ht===!0&&(pe===!0||A!==ut)){const Tn=A===ut&&$.id===dt;zt.setState($,A,Tn)}let ae=!1;$.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ue.state.version||Kt.outputColorSpace!==Lt||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==Gt||$.fog===!0&&Kt.fog!==Ut||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==zt.numPlanes||Kt.numIntersection!==zt.numIntersection)||Kt.vertexAlphas!==Wt||Kt.vertexTangents!==Jt||Kt.morphTargets!==qt||Kt.morphNormals!==$t||Kt.morphColors!==De||Kt.toneMapping!==Ke||Kt.morphTargetsCount!==Pe)&&(ae=!0):(ae=!0,Kt.__version=$.version);let yn=Kt.currentProgram;ae===!0&&(yn=Bs($,q,j));let Yi=!1,En=!1,ri=!1;const ze=yn.getUniforms(),bn=Kt.uniforms;if(Yt.useProgram(yn.program)&&(Yi=!0,En=!0,ri=!0),$.id!==dt&&(dt=$.id,En=!0),Yi||ut!==A){Yt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ze.setValue(G,"projectionMatrix",A.projectionMatrix),ze.setValue(G,"viewMatrix",A.matrixWorldInverse);const An=ze.map.cameraPosition;An!==void 0&&An.setValue(G,ve.setFromMatrixPosition(A.matrixWorld)),Oe.logarithmicDepthBuffer&&ze.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ze.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),ut!==A&&(ut=A,En=!0,ri=!0)}if(Kt.needsLights&&(Ue.state.directionalShadowMap.length>0&&ze.setValue(G,"directionalShadowMap",Ue.state.directionalShadowMap,W),Ue.state.spotShadowMap.length>0&&ze.setValue(G,"spotShadowMap",Ue.state.spotShadowMap,W),Ue.state.pointShadowMap.length>0&&ze.setValue(G,"pointShadowMap",Ue.state.pointShadowMap,W)),j.isSkinnedMesh){ze.setOptional(G,j,"bindMatrix"),ze.setOptional(G,j,"bindMatrixInverse");const Tn=j.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),ze.setValue(G,"boneTexture",Tn.boneTexture,W))}j.isBatchedMesh&&(ze.setOptional(G,j,"batchingTexture"),ze.setValue(G,"batchingTexture",j._matricesTexture,W),ze.setOptional(G,j,"batchingIdTexture"),ze.setValue(G,"batchingIdTexture",j._indirectTexture,W),ze.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&ze.setValue(G,"batchingColorTexture",j._colorsTexture,W));const pn=rt.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&le.update(j,rt,yn),(En||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,ze.setValue(G,"receiveShadow",j.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(bn.envMap.value=Gt,bn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&q.environment!==null&&(bn.envMapIntensity.value=q.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=mA()),En&&(ze.setValue(G,"toneMappingExposure",R.toneMappingExposure),Kt.needsLights&&Wr(bn,ri),Ut&&$.fog===!0&&ee.refreshFogUniforms(bn,Ut),ee.refreshMaterialUniforms(bn,$,gt,nt,z.state.transmissionRenderTarget[A.id]),Yc.upload(G,nl(Kt),bn,W)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Yc.upload(G,nl(Kt),bn,W),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ze.setValue(G,"center",j.center),ze.setValue(G,"modelViewMatrix",j.modelViewMatrix),ze.setValue(G,"normalMatrix",j.normalMatrix),ze.setValue(G,"modelMatrix",j.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Tn=$.uniformsGroups;for(let An=0,Fs=Tn.length;An<Fs;An++){const yi=Tn[An];St.update(yi,yn),St.bind(yi,yn)}}return yn}function Wr(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Ea(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(A,q,rt){const $=E.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=q,E.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:rt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const rt=E.get(A);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const ba=G.createFramebuffer();this.setRenderTarget=function(A,q=0,rt=0){at=A,k=q,st=rt;let $=null,j=!1,Ut=!1;if(A){const Lt=E.get(A);if(Lt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(G.FRAMEBUFFER,Lt.__webglFramebuffer),I.copy(A.viewport),H.copy(A.scissor),it=A.scissorTest,Yt.viewport(I),Yt.scissor(H),Yt.setScissorTest(it),dt=-1;return}else if(Lt.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Lt.__hasExternalTextures)W.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Jt=A.depthTexture;if(Lt.__boundDepthTexture!==Jt){if(Jt!==null&&E.has(Jt)&&(A.width!==Jt.image.width||A.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Ut=!0);const Wt=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[q])?$=Wt[q][rt]:$=Wt[q],j=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?$=E.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?$=Wt[rt]:$=Wt,I.copy(A.viewport),H.copy(A.scissor),it=A.scissorTest}else I.copy(et).multiplyScalar(gt).floor(),H.copy(ct).multiplyScalar(gt).floor(),it=Dt;if(rt!==0&&($=ba),Yt.bindFramebuffer(G.FRAMEBUFFER,$)&&Yt.drawBuffers(A,$),Yt.viewport(I),Yt.scissor(H),Yt.setScissorTest(it),j){const Lt=E.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Lt.__webglTexture,rt)}else if(Ut){const Lt=q;for(let Gt=0;Gt<A.textures.length;Gt++){const Wt=E.get(A.textures[Gt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,rt,Lt)}}else if(A!==null&&rt!==0){const Lt=E.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,rt)}dt=-1},this.readRenderTargetPixels=function(A,q,rt,$,j,Ut,Bt,Lt=0){if(!(A&&A.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt){Yt.bindFramebuffer(G.FRAMEBUFFER,Gt);try{const Wt=A.textures[Lt],Jt=Wt.format,qt=Wt.type;if(!Oe.textureFormatReadable(Jt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(qt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-$&&rt>=0&&rt<=A.height-j&&(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(q,rt,$,j,bt.convert(Jt),bt.convert(qt),Ut))}finally{const Wt=at!==null?E.get(at).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,q,rt,$,j,Ut,Bt,Lt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt)if(q>=0&&q<=A.width-$&&rt>=0&&rt<=A.height-j){Yt.bindFramebuffer(G.FRAMEBUFFER,Gt);const Wt=A.textures[Lt],Jt=Wt.format,qt=Wt.type;if(!Oe.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.bufferData(G.PIXEL_PACK_BUFFER,Ut.byteLength,G.STREAM_READ),A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(q,rt,$,j,bt.convert(Jt),bt.convert(qt),0);const De=at!==null?E.get(at).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,De);const Ke=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await LM(G,Ke,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ut),G.deleteBuffer($t),G.deleteSync(Ke),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,rt=0){const $=Math.pow(2,-rt),j=Math.floor(A.image.width*$),Ut=Math.floor(A.image.height*$),Bt=q!==null?q.x:0,Lt=q!==null?q.y:0;W.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Bt,Lt,j,Ut),Yt.unbindTexture()};const ss=G.createFramebuffer(),Ta=G.createFramebuffer();this.copyTextureToTexture=function(A,q,rt=null,$=null,j=0,Ut=null){Ut===null&&(j!==0?(Zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=j,j=0):Ut=0);let Bt,Lt,Gt,Wt,Jt,qt,$t,De,Ke;const We=A.isCompressedTexture?A.mipmaps[Ut]:A.image;if(rt!==null)Bt=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Gt=rt.isBox3?rt.max.z-rt.min.z:1,Wt=rt.min.x,Jt=rt.min.y,qt=rt.isBox3?rt.min.z:0;else{const pn=Math.pow(2,-j);Bt=Math.floor(We.width*pn),Lt=Math.floor(We.height*pn),A.isDataArrayTexture?Gt=We.depth:A.isData3DTexture?Gt=Math.floor(We.depth*pn):Gt=1,Wt=0,Jt=0,qt=0}$!==null?($t=$.x,De=$.y,Ke=$.z):($t=0,De=0,Ke=0);const Pe=bt.convert(q.format),Kt=bt.convert(q.type);let Ue;q.isData3DTexture?(W.setTexture3D(q,0),Ue=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Ue=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Ue=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const ae=G.getParameter(G.UNPACK_ROW_LENGTH),yn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Yi=G.getParameter(G.UNPACK_SKIP_PIXELS),En=G.getParameter(G.UNPACK_SKIP_ROWS),ri=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,We.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,We.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Wt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qt);const ze=A.isDataArrayTexture||A.isData3DTexture,bn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const pn=E.get(A),Tn=E.get(q),An=E.get(pn.__renderTarget),Fs=E.get(Tn.__renderTarget);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,An.__webglFramebuffer),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Fs.__webglFramebuffer);for(let yi=0;yi<Gt;yi++)ze&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(A).__webglTexture,j,qt+yi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Ut,Ke+yi)),G.blitFramebuffer(Wt,Jt,Bt,Lt,$t,De,Bt,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||E.has(A)){const pn=E.get(A),Tn=E.get(q);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,ss),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ta);for(let An=0;An<Gt;An++)ze?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,j,qt+An):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,j),bn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Tn.__webglTexture,Ut,Ke+An):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Tn.__webglTexture,Ut),j!==0?G.blitFramebuffer(Wt,Jt,Bt,Lt,$t,De,Bt,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):bn?G.copyTexSubImage3D(Ue,Ut,$t,De,Ke+An,Wt,Jt,Bt,Lt):G.copyTexSubImage2D(Ue,Ut,$t,De,Wt,Jt,Bt,Lt);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else bn?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Ue,Ut,$t,De,Ke,Bt,Lt,Gt,Pe,Kt,We.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ue,Ut,$t,De,Ke,Bt,Lt,Gt,Pe,We.data):G.texSubImage3D(Ue,Ut,$t,De,Ke,Bt,Lt,Gt,Pe,Kt,We):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ut,$t,De,Bt,Lt,Pe,Kt,We.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ut,$t,De,We.width,We.height,Pe,We.data):G.texSubImage2D(G.TEXTURE_2D,Ut,$t,De,Bt,Lt,Pe,Kt,We);G.pixelStorei(G.UNPACK_ROW_LENGTH,ae),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Yi),G.pixelStorei(G.UNPACK_SKIP_ROWS,En),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ri),Ut===0&&q.generateMipmaps&&G.generateMipmap(Ue),Yt.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),Yt.unbindTexture()},this.resetState=function(){k=0,st=0,at=null,Yt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}var wi=(o=>(o.MENU="MENU",o.PLAYING="PLAYING",o.GAME_OVER="GAME_OVER",o))(wi||{}),Lr=(o=>(o.STANDARD="STANDARD",o.SPEEDY="SPEEDY",o))(Lr||{}),he=(o=>(o.MIDNIGHT="MIDNIGHT",o.SUNSET="SUNSET",o.GLACIER="GLACIER",o))(he||{});const Kh={CAVE:{bg:1709330,fog:1709330,hue:.08},SUNSET:{bg:3017242,fog:3017242,hue:.04},SPACE:{bg:131589,fog:131589,hue:.62}},Qh={[he.MIDNIGHT]:{bg:131589,fog:131589,hue:.62},[he.SUNSET]:{bg:1706542,fog:1706542,hue:.04},[he.GLACIER]:{bg:15660533,fog:15660533,hue:.5}};class _A{constructor(e){this.selection=he.MIDNIGHT,this.scene=e,this.currentColor=new de(Qh[he.MIDNIGHT].bg),this.currentBaseHue=Qh[he.MIDNIGHT].hue}setSelection(e){this.selection=e;const i=Qh[e];this.currentColor.setHex(i.bg),this.currentBaseHue=i.hue,this.scene.background=this.currentColor.clone(),this.scene.fog&&this.scene.fog.color.copy(this.currentColor)}update(e,i){let s;e<20?s=Kh.CAVE:e<50?s=Kh.SUNSET:s=Kh.SPACE;const l=new de(s.bg);this.currentColor.equals(l)||(this.currentColor.lerp(l,1*i),this.scene.background=this.currentColor.clone(),this.scene.fog&&this.scene.fog.color.copy(this.currentColor)),this.currentBaseHue=s.hue}getBrickColor(e,i){const s=this.currentBaseHue,l=e*.008,c=i*.015;return new de().setHSL((s+l+c)%1,.75,.5)}}class vA{constructor(){this.ctx=null,this.isMuted=!1}init(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&this.ctx.resume()}playLand(e){if(!this.ctx||this.isMuted)return;const i=this.ctx.currentTime,s=this.ctx.createOscillator(),l=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(150,i),s.frequency.exponentialRampToValueAtTime(40,i+.1),l.gain.setValueAtTime(.15,i),l.gain.exponentialRampToValueAtTime(.01,i+.1),s.connect(l),l.connect(this.ctx.destination),s.start(),s.stop(i+.1)}playPerfect(e){if(!this.ctx||this.isMuted)return;const i=this.ctx.currentTime,s=this.ctx.createOscillator(),l=this.ctx.createGain(),c=440+Math.min(e,10)*80;s.type="sine",s.frequency.setValueAtTime(c,i),l.gain.setValueAtTime(.25,i),l.gain.exponentialRampToValueAtTime(.01,i+.3),s.connect(l),l.connect(this.ctx.destination),s.start(),s.stop(i+.3)}playGameOver(){if(!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(100,e),i.frequency.linearRampToValueAtTime(30,e+.5),s.gain.setValueAtTime(.3,e),s.gain.linearRampToValueAtTime(0,e+.5),i.connect(s),s.connect(this.ctx.destination),i.start(),i.stop(e+.5)}}const jc=new vA,je={BOX_HEIGHT:2,ORIGINAL_SIZE:20,SPEED_INC:.5,MAX_SPEED:100,PERFECT_THRESHOLD:.25,BOUNCE_LIMIT:26,VIEW_DISTANCE:50,PARTICLE_COUNT:400};class xA{constructor(e,i){this.stack=[],this.debris=[],this.moving=null,this.particles=null,this.particleVelocities=null,this.score=0,this.combo=0,this.axis="x",this.dir=1,this.speed=25,this.isGameOver=!1,this.isPlaying=!1,this.fever=!1,this.isTransitioning=!1,this.weatherPhase=0,this.frameId=null,this.config={difficulty:Lr.STANDARD,theme:he.MIDNIGHT},this.loop=()=>{this.frameId=requestAnimationFrame(this.loop);const c=Math.min(this.clock.getDelta(),.1),h=Date.now()*.005;let d=this.speed;if(this.isPlaying&&this.moving){const _=d*c*this.dir;this.axis==="x"?(this.moving.position.x+=_,Math.abs(this.moving.position.x)>=je.BOUNCE_LIMIT&&(this.dir*=-1,this.moving.position.x=Math.sign(this.moving.position.x)*je.BOUNCE_LIMIT)):(this.moving.position.z+=_,Math.abs(this.moving.position.z)>=je.BOUNCE_LIMIT&&(this.dir*=-1,this.moving.position.z=Math.sign(this.moving.position.z)*je.BOUNCE_LIMIT))}this.stack.forEach(_=>{if(_.bounceTime>0){_.bounceTime-=c*3;const g=Math.sin(_.bounceTime*10)*_.bounceTime*.12;_.mesh.scale.set(1+g,1-g,1+g)}else _.mesh.scale.set(1,1,1)});for(let _=this.debris.length-1;_>=0;_--){const g=this.debris[_];g.vy-=20*c,g.mesh.position.y+=g.vy*c,g.mesh.position.x+=g.vx*c,g.mesh.position.z+=g.vz*c,g.mesh.rotation.x+=g.rot*c,g.life-=1.2*c,g.mesh.material.opacity=g.life,g.life<=0&&(this.scene.remove(g.mesh),g.mesh.geometry.dispose(),g.mesh.material.dispose(),this.debris.splice(_,1))}if(this.themeManager.update(this.score,c),this.updateParticles(c),this.fever){const _=(Math.sin(h*2)+1)/2,g=this.themeManager.currentColor.clone(),S=new de(3342387),y=g.lerp(S,_*.5);this.scene.background=y,this.scene.fog.color.copy(y)}const m=this.stack.length>0?this.stack[this.stack.length-1].y:0,p=m+10;this.camera.position.y+=(p-this.camera.position.y)*2*c,this.camera.lookAt(0,m,0),this.dirLight.position.y=m+40,this.dirLight.target.position.set(0,m,0),this.render()},this.callbacks=i,this.clock=new Sy,this.scene=new ay,this.scene.background=new de(131589),this.scene.fog=new rp(131589,25,50);const s=e.clientWidth/e.clientHeight,l=je.VIEW_DISTANCE;this.camera=new nu(-l*s,l*s,l,-l,-100,1e3),this.camera.position.set(15,15,15),this.camera.lookAt(0,0,0),this.renderer=new gA({antialias:!0,alpha:!1}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=tv,e.appendChild(this.renderer.domElement),this.scene.add(new vy(16777215,.5)),this.dirLight=new _y(16777215,.8),this.dirLight.position.set(10,40,20),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=1024,this.dirLight.shadow.mapSize.height=1024,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target),this.themeManager=new _A(this.scene),this.render()}initParticles(e){this.particles&&(this.scene.remove(this.particles),this.particles.geometry.dispose(),this.particles.material.dispose());const i=new ai,s=new Float32Array(je.PARTICLE_COUNT*3),l=new Float32Array(je.PARTICLE_COUNT*3);for(let p=0;p<je.PARTICLE_COUNT;p++)s[p*3]=(Math.random()-.5)*80,s[p*3+1]=(Math.random()-.5)*80,s[p*3+2]=(Math.random()-.5)*80,e===he.SUNSET?(l[p*3]=(Math.random()-.5)*2,l[p*3+1]=2+Math.random()*5,l[p*3+2]=(Math.random()-.5)*2):e===he.GLACIER?(l[p*3]=(Math.random()-.5)*3,l[p*3+1]=-2-Math.random()*4,l[p*3+2]=(Math.random()-.5)*3):(l[p*3]=(Math.random()-.5)*.5,l[p*3+1]=(Math.random()-.5)*.5,l[p*3+2]=(Math.random()-.5)*.5);i.setAttribute("position",new Ni(s,3)),this.particleVelocities=l;let c=16777215,h=.1,d=.3;e===he.SUNSET?(c=16755268,h=.12,d=.5):e===he.GLACIER&&(c=13434879,h=.15,d=.4);const m=new wv({color:c,size:h,transparent:!0,opacity:d,blending:Jh,sizeAttenuation:!0});this.particles=new uy(i,m),this.scene.add(this.particles)}updateParticles(e){if(!this.particles||!this.particleVelocities)return;const i=this.particles.geometry.attributes.position.array,s=this.particleVelocities;for(let l=0;l<je.PARTICLE_COUNT;l++){i[l*3]+=s[l*3]*e,i[l*3+1]+=s[l*3+1]*e,i[l*3+2]+=s[l*3+2]*e;const c=this.stack.length>0?this.stack[this.stack.length-1].y:0,h=40;i[l*3]<-h&&(i[l*3]=h),i[l*3]>h&&(i[l*3]=-h),i[l*3+1]<c-h&&(i[l*3+1]=c+h),i[l*3+1]>c+h&&(i[l*3+1]=c-h),i[l*3+2]<-h&&(i[l*3+2]=h),i[l*3+2]>h&&(i[l*3+2]=-h)}this.particles.geometry.attributes.position.needsUpdate=!0}resize(e,i){const s=e/i,l=je.VIEW_DISTANCE;this.camera.left=-l*s,this.camera.right=l*s,this.camera.top=l,this.camera.bottom=-l,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,i)}startGame(e){this.config=e,this.isPlaying=!0,this.isGameOver=!1,this.score=0,this.combo=0,this.axis="x",this.dir=1,this.fever=!1,this.isTransitioning=!1,this.weatherPhase=0,this.speed=e.difficulty===Lr.STANDARD?25:20,this.cleanupMeshes(),this.themeManager.setSelection(e.theme),this.initParticles(e.theme),this.addLayer(0,0,je.ORIGINAL_SIZE,je.ORIGINAL_SIZE,0),this.spawnNext(),this.callbacks.onScore(0,!1),this.frameId||(this.clock.start(),this.loop())}handleInput(){if(!this.isPlaying||this.isGameOver||!this.moving||this.isTransitioning)return;this.isTransitioning=!0;const e=this.stack[this.stack.length-1],i=this.moving;let s,l,c=!1;if(this.axis==="x"){if(s=i.position.x-e.x,l=e.w-Math.abs(s),l<=0){this.stop(!1);return}if(Math.abs(s)<je.PERFECT_THRESHOLD)s=0,l=e.w,c=!0;else{this.combo=0;const h=Math.abs(s),d=e.x+(s>0?e.w/2+h/2:-e.w/2-h/2);this.spawnDebris(d,i.position.y,i.position.z,h,e.d,e.color)}this.scene.remove(i),this.addLayer(e.x+s/2,e.z,l,e.d,this.score)}else{if(s=i.position.z-e.z,l=e.d-Math.abs(s),l<=0){this.stop(!1);return}if(Math.abs(s)<je.PERFECT_THRESHOLD)s=0,l=e.d,c=!0;else{this.combo=0;const h=Math.abs(s),d=e.z+(s>0?e.d/2+h/2:-e.d/2-h/2);this.spawnDebris(i.position.x,i.position.y,d,e.w,h,e.color)}this.scene.remove(i),this.addLayer(e.x,e.z+s/2,e.w,l,this.score)}c?(this.combo++,jc.playPerfect(this.combo),this.combo>0&&this.combo%5===0&&this.regrowStack(1.2),this.combo>=10&&(this.fever=!0),this.callbacks.onPerfect(this.combo,this.fever)):(this.fever=!1,jc.playLand(0)),this.score+=this.fever?2:1,this.callbacks.onScore(this.score,this.fever),this.config.difficulty===Lr.SPEEDY&&(this.speed=Math.min(this.speed+je.SPEED_INC,je.MAX_SPEED)),this.axis=this.axis==="x"?"z":"x",this.spawnNext()}addLayer(e,i,s,l,c){const h=this.stack.length,d=h*je.BOX_HEIGHT,m=this.themeManager.getBrickColor(c,h),p=new va(s,je.BOX_HEIGHT,l),_=new Vh({color:m,emissive:m,emissiveIntensity:.1,roughness:.2,metalness:.3}),g=new xi(p,_);g.position.set(e,d,i),g.castShadow=!0,g.receiveShadow=!0;const S=new Gh(p),y=new Lc(S,new Wo({color:m,transparent:!0,opacity:.45})),b=new Lc(S,new Wo({color:16777215,transparent:!0,opacity:.2}));g.add(y),g.add(b),this.scene.add(g),this.stack.push({mesh:g,x:e,z:i,w:s,d:l,y:d,color:m,bounceTime:1})}spawnNext(){const e=this.stack[this.stack.length-1],i=e.y+je.BOX_HEIGHT,s=this.themeManager.getBrickColor(this.score,this.stack.length),l=new va(e.w,je.BOX_HEIGHT,e.d),c=new Vh({color:s,emissive:s,emissiveIntensity:.1,roughness:.2,metalness:.3});this.moving=new xi(l,c),this.moving.castShadow=!0;const h=new Gh(l),d=new Lc(h,new Wo({color:s,transparent:!0,opacity:.45})),m=new Lc(h,new Wo({color:16777215,transparent:!0,opacity:.2}));this.moving.add(d),this.moving.add(m),this.dir=Math.random()>.5?1:-1;const p=this.dir===1?-26:je.BOUNCE_LIMIT;this.axis==="x"?this.moving.position.set(p,i,e.z):this.moving.position.set(e.x,i,p),this.scene.add(this.moving),this.isTransitioning=!1}spawnDebris(e,i,s,l,c,h){const d=new va(l,je.BOX_HEIGHT,c),m=new Vh({color:h,transparent:!0,opacity:.7}),p=new xi(d,m);p.position.set(e,i,s),p.castShadow=!0,this.scene.add(p),this.debris.push({mesh:p,vy:0,vx:(Math.random()-.5)*5,vz:(Math.random()-.5)*5,rot:Math.random()*5,life:1})}regrowStack(e){const i=this.stack[this.stack.length-1];i.w=Math.min(i.w+e,je.ORIGINAL_SIZE),i.d=Math.min(i.d+e,je.ORIGINAL_SIZE),i.mesh.geometry.dispose(),i.mesh.geometry=new va(i.w,je.BOX_HEIGHT,i.d),i.mesh.children.forEach(s=>{s.geometry&&s.geometry.dispose(),s.geometry=new Gh(i.mesh.geometry)})}stop(e=!1){this.isPlaying=!1,this.isGameOver=!0,this.fever=!1,jc.playGameOver(),this.moving&&(this.scene.remove(this.moving),this.moving.geometry.dispose(),this.moving.material.dispose(),this.moving=null),e||this.callbacks.onGameOver(this.score)}render(){this.renderer.render(this.scene,this.camera)}cleanupMeshes(){this.stack.forEach(e=>{this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose()}),this.stack=[],this.debris.forEach(e=>{this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose()}),this.debris=[],this.moving&&(this.scene.remove(this.moving),this.moving.geometry.dispose(),this.moving.material.dispose(),this.moving=null),this.particles&&(this.scene.remove(this.particles),this.particles.geometry.dispose(),this.particles.material.dispose(),this.particles=null)}dispose(){this.frameId&&cancelAnimationFrame(this.frameId),this.renderer.dispose(),this.cleanupMeshes()}}const zv=on.forwardRef(({onScore:o,onGameOver:e,onPerfect:i,config:s,isPlaying:l},c)=>{const h=on.useRef(null),d=on.useRef(null),m=on.useRef({onScore:o,onGameOver:e,onPerfect:i});return on.useEffect(()=>{m.current={onScore:o,onGameOver:e,onPerfect:i}},[o,e,i]),on.useImperativeHandle(c,()=>({handleInput:()=>{var p;(p=d.current)==null||p.handleInput()},stop:()=>{var p;(p=d.current)==null||p.stop(!0)}})),on.useEffect(()=>{if(!h.current)return;const p=new xA(h.current,{onScore:(g,S)=>m.current.onScore(g,S),onGameOver:g=>m.current.onGameOver(g),onPerfect:(g,S)=>m.current.onPerfect(g,S)});d.current=p;const _=()=>{h.current&&p.resize(h.current.clientWidth,h.current.clientHeight)};return window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),p.dispose()}},[]),on.useEffect(()=>{l&&d.current&&d.current.startGame(s)},[l,s]),Ct.jsx("div",{ref:h,className:"absolute inset-0 w-full h-full outline-none",style:{touchAction:"none"}})});zv.displayName="GameCanvas";const SA=({config:o,setConfig:e,onStart:i})=>{const s=h=>{switch(h){case he.MIDNIGHT:return Ct.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6 md:w-8 md:h-8 drop-shadow-lg",children:Ct.jsx("path",{fillRule:"evenodd",d:"M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z",clipRule:"evenodd"})});case he.SUNSET:return Ct.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6 md:w-8 md:h-8 drop-shadow-lg",children:Ct.jsx("path",{fillRule:"evenodd",d:"M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm9.193 8.197a.75.75 0 01-1.06 0 1.503 1.503 0 01-2.193 0 .75.75 0 01-1.06-1.06 3.003 3.003 0 004.313 0 .75.75 0 010 1.06zm-8.8 0a.75.75 0 01-1.06 0 3.003 3.003 0 004.313 0 .75.75 0 01-1.06 1.06 1.503 1.503 0 01-2.192 0 .75.75 0 010-1.06zm-6.04-1.393a.75.75 0 010 1.06l-1.5 1.5a.75.75 0 11-1.06-1.06l1.5-1.5a.75.75 0 011.06 0zm19.313 1.06a.75.75 0 011.06 0l1.5 1.5a.75.75 0 01-1.06 1.06l-1.5-1.5a.75.75 0 010-1.06zM3.75 12a8.25 8.25 0 0116.5 0v1.5a.75.75 0 01-1.5 0V12a6.75 6.75 0 00-13.5 0v1.5a.75.75 0 01-1.5 0V12z",clipRule:"evenodd"})});case he.GLACIER:return Ct.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"w-6 h-6 md:w-8 md:h-8 drop-shadow-lg",children:Ct.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 2.25v19.5M2.25 12h19.5M5.106 5.106l13.788 13.788M5.106 18.894L18.894 5.106"})})}},l=(h,d)=>{const m="flex-1 flex flex-col items-center justify-center py-5 px-2 rounded-2xl gap-2 transition-all duration-500 border relative overflow-hidden group";return h===he.MIDNIGHT?`${m} ${d?"bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 border-indigo-400 shadow-[0_0_30px_rgba(79,70,229,0.5)] scale-105":"bg-slate-900/40 border-white/5 opacity-40 hover:opacity-100 hover:bg-slate-900/60"}`:h===he.SUNSET?`${m} ${d?"bg-gradient-to-br from-orange-800 via-red-950 to-orange-950 border-orange-400 shadow-[0_0_30px_rgba(234,88,12,0.5)] scale-105":"bg-orange-950/20 border-white/5 opacity-40 hover:opacity-100 hover:bg-orange-950/40"}`:h===he.GLACIER?`${m} ${d?"bg-gradient-to-br from-cyan-800 via-blue-950 to-cyan-950 border-cyan-300 shadow-[0_0_30px_rgba(8,145,178,0.5)] scale-105":"bg-cyan-950/20 border-white/5 opacity-40 hover:opacity-100 hover:bg-cyan-950/40"}`:m},c=()=>{switch(o.theme){case he.MIDNIGHT:return"rgba(79, 70, 229, 0.4)";case he.SUNSET:return"rgba(234, 88, 12, 0.4)";case he.GLACIER:return"rgba(8, 145, 178, 0.4)";default:return"rgba(255, 255, 255, 0.2)"}};return Ct.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/60 backdrop-blur-md pointer-events-auto transition-all duration-500 p-6",children:[Ct.jsxs("div",{className:"flex flex-col items-center justify-center mb-12 transform -skew-y-2 scale-110 md:scale-125",children:[Ct.jsxs("div",{className:"flex items-end justify-center gap-2 md:gap-4 leading-none",children:[Ct.jsx("span",{className:"text-5xl md:text-8xl logo-text logo-brick",children:"BRICK"}),Ct.jsx("span",{className:"text-5xl md:text-8xl logo-text logo-fall",children:"FALL"})]}),Ct.jsx("div",{className:"mt-[-5px] md:mt-[-10px] z-10",children:Ct.jsx("span",{className:"text-6xl md:text-[7rem] logo-text logo-mania tracking-wide",children:"MANIA"})})]}),Ct.jsxs("div",{className:"w-full max-w-[420px] mb-8",children:[Ct.jsx("span",{className:"text-xs md:text-sm font-extrabold text-white/50 uppercase tracking-[3px] block mb-3 pl-1",children:"Game Mode"}),Ct.jsx("div",{className:"flex bg-white/5 border border-white/10 p-1.5 rounded-2xl gap-2 backdrop-blur-xl shadow-inner",children:Object.values(Lr).map(h=>Ct.jsxs("button",{onClick:()=>e({...o,difficulty:h}),className:`flex-1 py-4 rounded-xl text-sm md:text-base font-bold transition-all duration-300 relative overflow-hidden ${o.difficulty===h?"bg-white text-black shadow-[0_10px_20px_-5px_rgba(255,255,255,0.3)] scale-[1.02] z-10":"text-white/60 hover:text-white hover:bg-white/5"}`,children:[o.difficulty===h&&Ct.jsx("div",{className:"absolute inset-0 bg-white/10 animate-shimmer pointer-events-none"}),Ct.jsx("span",{className:"relative z-10",children:h})]},h))})]}),Ct.jsxs("div",{className:"w-full max-w-[420px] mb-12",children:[Ct.jsx("span",{className:"text-xs md:text-sm font-extrabold text-white/50 uppercase tracking-[3px] block mb-3 pl-1",children:"Environment"}),Ct.jsx("div",{className:"flex bg-white/5 border border-white/10 p-2 rounded-2xl gap-3 backdrop-blur-xl",children:[he.MIDNIGHT,he.SUNSET,he.GLACIER].map(h=>Ct.jsxs("button",{onClick:()=>e({...o,theme:h}),className:l(h,o.theme===h),children:[o.theme===h&&Ct.jsxs(Ct.Fragment,{children:[Ct.jsx("div",{className:"absolute inset-0 bg-white/5 animate-glow pointer-events-none"}),Ct.jsx("div",{className:"absolute inset-0 animate-shimmer pointer-events-none opacity-30"})]}),Ct.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-2",children:[s(h),Ct.jsx("span",{className:"text-[10px] md:text-xs font-bold uppercase tracking-widest",children:h})]})]},h))})]}),Ct.jsx("button",{onClick:i,className:"btn-7 w-full max-w-[320px] font-[Outfit] font-black text-xl md:text-2xl",style:{boxShadow:`0 10px 40px -10px ${c()}`,borderColor:o.theme===he.MIDNIGHT?"rgba(79, 70, 229, 0.4)":o.theme===he.SUNSET?"rgba(234, 88, 12, 0.4)":"rgba(8, 145, 178, 0.4)"},children:Ct.jsx("span",{children:"START CLIMB"})})]})},MA=({score:o,best:e,fever:i,theme:s,onBack:l})=>{const h=(()=>{switch(s){case he.SUNSET:return"#ea580c";case he.GLACIER:return"#0891b2";case he.MIDNIGHT:default:return"#4f46e5"}})(),d=()=>{switch(s){case he.MIDNIGHT:return Ct.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden transition-all duration-1000",children:Ct.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-indigo-950/40 to-transparent"})});case he.SUNSET:return Ct.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden transition-all duration-1000",children:Ct.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-orange-500/15 via-purple-900/10 to-transparent"})});case he.GLACIER:return Ct.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden transition-all duration-1000",children:Ct.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-cyan-400/10 via-blue-900/5 to-transparent border-t border-white/5"})});default:return null}};return Ct.jsxs(Ct.Fragment,{children:[Ct.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col items-center z-10",children:[d(),Ct.jsxs("div",{className:"w-full flex justify-between items-start p-4 md:p-8 pt-6 md:pt-10 relative z-20",children:[Ct.jsx("button",{onClick:l,className:"pointer-events-auto w-14 h-14 flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-110 transition-all active:scale-95",children:Ct.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",fillRule:"evenodd",className:"w-full h-full drop-shadow-xl",children:Ct.jsx("path",{fill:h,d:"M4 14v36c0 5.523 4.477 10 10 10h36a10.001 10.001 0 0 0 10-10V14A10.001 10.001 0 0 0 50 4H14C8.477 4 4 8.477 4 14zm4 36V14a6 6 0 0 1 6-6h36c1.591 0 3.117.632 4.243 1.757A6.003 6.003 0 0 1 56 14v36a6.003 6.003 0 0 1-1.757 4.243A6.003 6.003 0 0 1 50 56H14a6 6 0 0 1-6-6zm23-25.971V16a2 2 0 0 0-3.371-1.456l-17 16a1.999 1.999 0 0 0 .021 2.931l17 15.559A1.999 1.999 0 0 0 31 47.559v-8.697c8.086-.29 13.189 3.561 18.323 11.463A1.998 1.998 0 0 0 53 49.235v-8.13c0-9.292-7.46-16.862-16.75-16.999L31 24.029zM27 26a2 2 0 0 0 1.971 2l7.22.106C43.296 28.21 49 33.999 49 41.105v2.036c-5.429-6.398-11.428-9.043-20.207-8.13A2 2 0 0 0 27 37v6.017L14.94 31.98 27 20.629z"})})}),Ct.jsxs("div",{className:"absolute top-10 md:top-12 left-1/2 -translate-x-1/2 text-center transition-opacity duration-500 pointer-events-none",children:[Ct.jsxs("p",{className:"text-xs md:text-sm font-bold opacity-60 uppercase tracking-[3px] mb-2",style:{color:i?"var(--fever-color)":"white"},children:["Best: ",e]}),Ct.jsx("h2",{className:`text-6xl md:text-8xl font-extrabold leading-none tracking-tighter transition-all duration-300 drop-shadow-2xl ${i?"fever-text scale-110":"text-white"}`,children:o})]})]})]}),i&&Ct.jsx("div",{className:"fixed top-[140px] left-1/2 -translate-x-1/2 font-extrabold text-2xl md:text-4xl tracking-[6px] uppercase fever-text pointer-events-none z-20 animate-pulse whitespace-nowrap drop-shadow-2xl",children:"FEVER MODE"})]})},yA=({score:o,best:e,difficulty:i,theme:s,onRetry:l,onMenu:c})=>{const h=()=>{switch(s){case he.SUNSET:return"text-orange-500";case he.GLACIER:return"text-cyan-500";case he.MIDNIGHT:default:return"text-indigo-500"}},d=()=>{switch(s){case he.SUNSET:return"#f97316";case he.GLACIER:return"#06b6d4";case he.MIDNIGHT:default:return"#6366f1"}},m=h(),p=d();return Ct.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/90 backdrop-blur-md p-6",children:[Ct.jsxs("div",{className:`text-xs md:text-sm font-extrabold uppercase tracking-[4px] mb-12 ${m}`,children:["Game Mode: ",i]}),Ct.jsxs("div",{className:"flex gap-8 md:gap-16 items-start justify-center w-full max-w-lg",children:[Ct.jsxs("div",{className:"flex flex-col items-center flex-1 text-center",children:[Ct.jsxs("div",{className:"mb-10 md:mb-14",children:[Ct.jsx("span",{className:"block text-xs md:text-sm font-extrabold opacity-50 uppercase tracking-[3px] mb-3",children:"Score"}),Ct.jsx("span",{className:"text-5xl md:text-7xl font-extrabold leading-none tracking-tight",children:o})]}),Ct.jsxs("button",{onClick:l,className:"flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform opacity-100 hover:opacity-80 group py-2",children:[Ct.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",className:"w-14 h-14 md:w-16 md:h-16 transition-transform group-active:scale-95 drop-shadow-lg",children:Ct.jsxs("g",{fill:p,children:[Ct.jsx("path",{d:"m45.534 23.057-2.447 1.259v-1.54c0-3.706-.933-7.385-2.935-10.508-5.562-8.689-17.049-11.505-25.981-5.835-1.574 1.003-.467 3.583 1.376 3.019 3.889-1.191 7.779-.523 10.725 1.215 3.682 2.145 6.289 6.051 6.289 10.728 0 1.283 0 2.912.008 2.92l-2.413-1.25c-1.583-.813-3.209 1.035-2.191 2.499l8.471 12.185c.676.976 2.131.976 2.807 0l8.479-12.193c1.021-1.472-.604-3.32-2.188-2.499z"}),Ct.jsx("path",{d:"m32.452 38.549c-3.888 1.191-7.779.523-10.725-1.216-3.672-2.139-6.289-6.04-6.289-10.728 0-1.284 0-2.912-.008-2.92l2.413 1.25c1.583.813 3.209-1.036 2.191-2.498l-8.471-12.185c-.676-.976-2.131-.976-2.807 0l-8.48 12.193c-1.018 1.472.608 3.32 2.191 2.499l2.447-1.258c0 3.968.235 7.837 2.935 12.048 2.772 4.33 6.965 7.11 11.338 8.206 5.004 1.263 10.222.435 14.643-2.373 1.574-1 .466-3.584-1.378-3.018z"})]})}),Ct.jsx("span",{className:`text-xs md:text-sm font-extrabold uppercase tracking-widest ${m}`,children:"Try Again"})]})]}),Ct.jsxs("div",{className:"flex flex-col items-center flex-1 text-center",children:[Ct.jsxs("div",{className:"mb-10 md:mb-14",children:[Ct.jsx("span",{className:"block text-xs md:text-sm font-extrabold opacity-50 uppercase tracking-[3px] mb-3",children:"Best Score"}),Ct.jsx("span",{className:"text-5xl md:text-7xl font-extrabold leading-none opacity-60",children:e})]}),Ct.jsxs("button",{onClick:c,className:"flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform opacity-100 hover:opacity-80 group py-2",children:[Ct.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8.467 8.467",className:"w-14 h-14 md:w-16 md:h-16 transition-transform group-active:scale-95 drop-shadow-lg",children:[Ct.jsx("path",{fill:p,d:"M1.587.794a.798.798 0 0 0-.793.795v1.39c0 .435.357.793.793.793h1.39a.798.798 0 0 0 .795-.793V1.59a.8.8 0 0 0-.795-.795zm0 .529h1.39a.26.26 0 0 1 .266.266v1.39a.259.259 0 0 1-.266.264h-1.39a.259.259 0 0 1-.266-.264V1.59a.26.26 0 0 1 .266-.266z"}),Ct.jsx("path",{fill:p,style:{opacity:.7},d:"M6.495 1.027a.801.801 0 0 0-1.128-.001l-.945.944c-.31.31-.31.82 0 1.13l.945.945c.31.31.818.308 1.128-.001l.945-.945a.8.8 0 0 0 0-1.127zm-.374.374.944.945c.11.108.11.27.001.38l-.944.944a.263.263 0 0 1-.381 0l-.944.944a.263.263 0 0 1 0-.38l.945-.945a.262.262 0 0 1 .38 0z"}),Ct.jsx("g",{fill:p,children:Ct.jsx("path",{d:"M1.587 4.429a.797.797 0 0 0-.793.792V6.88c0 .435.357.793.793.793h1.39a.798.798 0 0 0 .795-.793V5.22a.798.798 0 0 0-.795-.792zm0 .529h1.39c.151 0 .266.112.266.263V6.88a.259.259 0 0 1-.266.263h-1.39a.259.259 0 0 1-.266-.263V5.22c0-.15.114-.263.266-.263zM5.212 4.688a.8.8 0 0 0-.795.795V6.88c0 .435.36.793.795.793h1.666a.798.798 0 0 0 .795-.793V5.483a.8.8 0 0 0-.795-.795zm0 .53h1.666a.26.26 0 0 1 .265.265V6.88a.259.259 0 0 1-.265.263H5.212a.259.259 0 0 1-.266-.263V5.483a.26.26 0 0 1 .266-.265z"})})]}),Ct.jsx("span",{className:`text-xs md:text-sm font-extrabold uppercase tracking-widest ${m}`,children:"Main Menu"})]})]})]})]})},J_="brickfall_best_";function EA(){const[o,e]=on.useState(wi.MENU),[i,s]=on.useState(0),[l,c]=on.useState(0),[h,d]=on.useState(!1),[m,p]=on.useState({difficulty:Lr.STANDARD,theme:he.MIDNIGHT}),[_,g]=on.useState([]),S=on.useRef(0),y=on.useRef(null);on.useEffect(()=>{const U=`${J_}${m.difficulty}`,z=localStorage.getItem(U);c(z?parseInt(z,10):0)},[m.difficulty]);const b=()=>{jc.init(),s(0),d(!1),e(wi.PLAYING),g([])},C=()=>{var U;(U=y.current)==null||U.stop(),e(wi.MENU)},M=on.useCallback((U,z)=>{s(U),d(z)},[]),x=on.useCallback(U=>{s(U);const z=`${J_}${m.difficulty}`,F=localStorage.getItem(z),P=F?parseInt(F,10):0;U>P?(localStorage.setItem(z,U.toString()),c(U)):c(P),e(wi.GAME_OVER)},[m.difficulty]),O=on.useCallback((U,z)=>{const F=S.current++,P=z?`FEVER x${U}!`:U>1?`PERFECT x${U}`:"PERFECT!";g(Z=>[...Z,{id:F,text:P,x:50,y:40}]),setTimeout(()=>{g(Z=>Z.filter(R=>R.id!==F))},800)},[]),L=U=>{var z;o===wi.PLAYING&&((z=y.current)==null||z.handleInput())};return Ct.jsxs("div",{className:"relative w-full h-screen bg-black overflow-hidden font-outfit select-none",onMouseDown:L,onTouchStart:L,children:[Ct.jsx(zv,{ref:y,onScore:M,onGameOver:x,onPerfect:O,config:m,isPlaying:o===wi.PLAYING}),_.map(U=>Ct.jsx("div",{className:"fixed pointer-events-none text-3xl font-black text-white uppercase z-50 animate-perfect whitespace-nowrap",style:{left:`${U.x}%`,top:`${U.y}%`,textShadow:"0 0 15px rgba(255,255,255,0.5)"},children:U.text},U.id)),o===wi.MENU&&Ct.jsx(SA,{config:m,setConfig:p,onStart:b}),o===wi.PLAYING&&Ct.jsx(MA,{score:i,best:l,fever:h,theme:m.theme,onBack:C}),o===wi.GAME_OVER&&Ct.jsx(yA,{score:i,best:l,difficulty:m.difficulty,theme:m.theme,onRetry:b,onMenu:()=>e(wi.MENU)})]})}const Bv=document.getElementById("root");if(!Bv)throw new Error("Could not find root element");const bA=tM.createRoot(Bv);bA.render(Ct.jsx(qS.StrictMode,{children:Ct.jsx(EA,{})}));
