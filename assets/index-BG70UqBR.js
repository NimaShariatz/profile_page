(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var Wh={exports:{}},tu={},Xh={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function yM(){if(tv)return bt;tv=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;function g(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(k,re,Oe){this.props=k,this.context=re,this.refs=M,this.updater=Oe||v}S.prototype.isReactComponent={},S.prototype.setState=function(k,re){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,re,"setState")},S.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function y(){}y.prototype=S.prototype;function L(k,re,Oe){this.props=k,this.context=re,this.refs=M,this.updater=Oe||v}var P=L.prototype=new y;P.constructor=L,E(P,S.prototype),P.isPureReactComponent=!0;var w=Array.isArray,F=Object.prototype.hasOwnProperty,U={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function O(k,re,Oe){var Z,he={},ye=null,ge=null;if(re!=null)for(Z in re.ref!==void 0&&(ge=re.ref),re.key!==void 0&&(ye=""+re.key),re)F.call(re,Z)&&!D.hasOwnProperty(Z)&&(he[Z]=re[Z]);var we=arguments.length-2;if(we===1)he.children=Oe;else if(1<we){for(var Pe=Array(we),Je=0;Je<we;Je++)Pe[Je]=arguments[Je+2];he.children=Pe}if(k&&k.defaultProps)for(Z in we=k.defaultProps,we)he[Z]===void 0&&(he[Z]=we[Z]);return{$$typeof:o,type:k,key:ye,ref:ge,props:he,_owner:U.current}}function C(k,re){return{$$typeof:o,type:k.type,key:re,ref:k.ref,props:k.props,_owner:k._owner}}function T(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function B(k){var re={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Oe){return re[Oe]})}var Y=/\/+/g;function K(k,re){return typeof k=="object"&&k!==null&&k.key!=null?B(""+k.key):re.toString(36)}function oe(k,re,Oe,Z,he){var ye=typeof k;(ye==="undefined"||ye==="boolean")&&(k=null);var ge=!1;if(k===null)ge=!0;else switch(ye){case"string":case"number":ge=!0;break;case"object":switch(k.$$typeof){case o:case e:ge=!0}}if(ge)return ge=k,he=he(ge),k=Z===""?"."+K(ge,0):Z,w(he)?(Oe="",k!=null&&(Oe=k.replace(Y,"$&/")+"/"),oe(he,re,Oe,"",function(Je){return Je})):he!=null&&(T(he)&&(he=C(he,Oe+(!he.key||ge&&ge.key===he.key?"":(""+he.key).replace(Y,"$&/")+"/")+k)),re.push(he)),1;if(ge=0,Z=Z===""?".":Z+":",w(k))for(var we=0;we<k.length;we++){ye=k[we];var Pe=Z+K(ye,we);ge+=oe(ye,re,Oe,Pe,he)}else if(Pe=g(k),typeof Pe=="function")for(k=Pe.call(k),we=0;!(ye=k.next()).done;)ye=ye.value,Pe=Z+K(ye,we++),ge+=oe(ye,re,Oe,Pe,he);else if(ye==="object")throw re=String(k),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ge}function ce(k,re,Oe){if(k==null)return k;var Z=[],he=0;return oe(k,Z,"","",function(ye){return re.call(Oe,ye,he++)}),Z}function te(k){if(k._status===-1){var re=k._result;re=re(),re.then(function(Oe){(k._status===0||k._status===-1)&&(k._status=1,k._result=Oe)},function(Oe){(k._status===0||k._status===-1)&&(k._status=2,k._result=Oe)}),k._status===-1&&(k._status=0,k._result=re)}if(k._status===1)return k._result.default;throw k._result}var Q={current:null},H={transition:null},le={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:H,ReactCurrentOwner:U};function I(){throw Error("act(...) is not supported in production builds of React.")}return bt.Children={map:ce,forEach:function(k,re,Oe){ce(k,function(){re.apply(this,arguments)},Oe)},count:function(k){var re=0;return ce(k,function(){re++}),re},toArray:function(k){return ce(k,function(re){return re})||[]},only:function(k){if(!T(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},bt.Component=S,bt.Fragment=t,bt.Profiler=r,bt.PureComponent=L,bt.StrictMode=n,bt.Suspense=d,bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,bt.act=I,bt.cloneElement=function(k,re,Oe){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Z=E({},k.props),he=k.key,ye=k.ref,ge=k._owner;if(re!=null){if(re.ref!==void 0&&(ye=re.ref,ge=U.current),re.key!==void 0&&(he=""+re.key),k.type&&k.type.defaultProps)var we=k.type.defaultProps;for(Pe in re)F.call(re,Pe)&&!D.hasOwnProperty(Pe)&&(Z[Pe]=re[Pe]===void 0&&we!==void 0?we[Pe]:re[Pe])}var Pe=arguments.length-2;if(Pe===1)Z.children=Oe;else if(1<Pe){we=Array(Pe);for(var Je=0;Je<Pe;Je++)we[Je]=arguments[Je+2];Z.children=we}return{$$typeof:o,type:k.type,key:he,ref:ye,props:Z,_owner:ge}},bt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:a,_context:k},k.Consumer=k},bt.createElement=O,bt.createFactory=function(k){var re=O.bind(null,k);return re.type=k,re},bt.createRef=function(){return{current:null}},bt.forwardRef=function(k){return{$$typeof:c,render:k}},bt.isValidElement=T,bt.lazy=function(k){return{$$typeof:p,_payload:{_status:-1,_result:k},_init:te}},bt.memo=function(k,re){return{$$typeof:h,type:k,compare:re===void 0?null:re}},bt.startTransition=function(k){var re=H.transition;H.transition={};try{k()}finally{H.transition=re}},bt.unstable_act=I,bt.useCallback=function(k,re){return Q.current.useCallback(k,re)},bt.useContext=function(k){return Q.current.useContext(k)},bt.useDebugValue=function(){},bt.useDeferredValue=function(k){return Q.current.useDeferredValue(k)},bt.useEffect=function(k,re){return Q.current.useEffect(k,re)},bt.useId=function(){return Q.current.useId()},bt.useImperativeHandle=function(k,re,Oe){return Q.current.useImperativeHandle(k,re,Oe)},bt.useInsertionEffect=function(k,re){return Q.current.useInsertionEffect(k,re)},bt.useLayoutEffect=function(k,re){return Q.current.useLayoutEffect(k,re)},bt.useMemo=function(k,re){return Q.current.useMemo(k,re)},bt.useReducer=function(k,re,Oe){return Q.current.useReducer(k,re,Oe)},bt.useRef=function(k){return Q.current.useRef(k)},bt.useState=function(k){return Q.current.useState(k)},bt.useSyncExternalStore=function(k,re,Oe){return Q.current.useSyncExternalStore(k,re,Oe)},bt.useTransition=function(){return Q.current.useTransition()},bt.version="18.3.1",bt}var nv;function Qm(){return nv||(nv=1,Xh.exports=yM()),Xh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function SM(){if(iv)return tu;iv=1;var o=Qm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,_={},g=null,v=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(v=d.ref);for(p in d)n.call(d,p)&&!a.hasOwnProperty(p)&&(_[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)_[p]===void 0&&(_[p]=d[p]);return{$$typeof:e,type:c,key:g,ref:v,props:_,_owner:r.current}}return tu.Fragment=t,tu.jsx=u,tu.jsxs=u,tu}var rv;function MM(){return rv||(rv=1,Wh.exports=SM()),Wh.exports}var $=MM(),pr=Qm(),$c={},jh={exports:{}},Pi={},Yh={exports:{}},qh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function EM(){return sv||(sv=1,function(o){function e(H,le){var I=H.length;H.push(le);e:for(;0<I;){var k=I-1>>>1,re=H[k];if(0<r(re,le))H[k]=le,H[I]=re,I=k;else break e}}function t(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var le=H[0],I=H.pop();if(I!==le){H[0]=I;e:for(var k=0,re=H.length,Oe=re>>>1;k<Oe;){var Z=2*(k+1)-1,he=H[Z],ye=Z+1,ge=H[ye];if(0>r(he,I))ye<re&&0>r(ge,he)?(H[k]=ge,H[ye]=I,k=ye):(H[k]=he,H[Z]=I,k=Z);else if(ye<re&&0>r(ge,I))H[k]=ge,H[ye]=I,k=ye;else break e}}return le}function r(H,le){var I=H.sortIndex-le.sortIndex;return I!==0?I:H.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();o.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,_=null,g=3,v=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(H){for(var le=t(h);le!==null;){if(le.callback===null)n(h);else if(le.startTime<=H)n(h),le.sortIndex=le.expirationTime,e(d,le);else break;le=t(h)}}function w(H){if(M=!1,P(H),!E)if(t(d)!==null)E=!0,te(F);else{var le=t(h);le!==null&&Q(w,le.startTime-H)}}function F(H,le){E=!1,M&&(M=!1,y(O),O=-1),v=!0;var I=g;try{for(P(le),_=t(d);_!==null&&(!(_.expirationTime>le)||H&&!B());){var k=_.callback;if(typeof k=="function"){_.callback=null,g=_.priorityLevel;var re=k(_.expirationTime<=le);le=o.unstable_now(),typeof re=="function"?_.callback=re:_===t(d)&&n(d),P(le)}else n(d);_=t(d)}if(_!==null)var Oe=!0;else{var Z=t(h);Z!==null&&Q(w,Z.startTime-le),Oe=!1}return Oe}finally{_=null,g=I,v=!1}}var U=!1,D=null,O=-1,C=5,T=-1;function B(){return!(o.unstable_now()-T<C)}function Y(){if(D!==null){var H=o.unstable_now();T=H;var le=!0;try{le=D(!0,H)}finally{le?K():(U=!1,D=null)}}else U=!1}var K;if(typeof L=="function")K=function(){L(Y)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ce=oe.port2;oe.port1.onmessage=Y,K=function(){ce.postMessage(null)}}else K=function(){S(Y,0)};function te(H){D=H,U||(U=!0,K())}function Q(H,le){O=S(function(){H(o.unstable_now())},le)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_continueExecution=function(){E||v||(E=!0,te(F))},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(H){switch(g){case 1:case 2:case 3:var le=3;break;default:le=g}var I=g;g=le;try{return H()}finally{g=I}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(H,le){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var I=g;g=H;try{return le()}finally{g=I}},o.unstable_scheduleCallback=function(H,le,I){var k=o.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?k+I:k):I=k,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=I+re,H={id:p++,callback:le,priorityLevel:H,startTime:I,expirationTime:re,sortIndex:-1},I>k?(H.sortIndex=I,e(h,H),t(d)===null&&H===t(h)&&(M?(y(O),O=-1):M=!0,Q(w,I-k))):(H.sortIndex=re,e(d,H),E||v||(E=!0,te(F))),H},o.unstable_shouldYield=B,o.unstable_wrapCallback=function(H){var le=g;return function(){var I=g;g=le;try{return H.apply(this,arguments)}finally{g=I}}}}(qh)),qh}var ov;function TM(){return ov||(ov=1,Yh.exports=EM()),Yh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function wM(){if(av)return Pi;av=1;var o=Qm(),e=TM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,r={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(r[i]=s,i=0;i<s.length;i++)n.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},_={};function g(i){return d.call(_,i)?!0:d.call(p,i)?!1:h.test(i)?_[i]=!0:(p[i]=!0,!1)}function v(i,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,l,f){if(s===null||typeof s>"u"||v(i,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(i,s,l,f,m,x,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=x,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new M(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function L(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,L);S[s]=new M(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,L);S[s]=new M(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,L);S[s]=new M(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,s,l,f){var m=S.hasOwnProperty(s)?S[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,m,f)&&(l=null),f||m===null?g(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,f=m.attributeNamespace,l===null?i.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?i.setAttributeNS(f,s,l):i.setAttribute(s,l))))}var w=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),U=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),B=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),H=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var I=Object.assign,k;function re(i){if(k===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);k=s&&s[1]||""}return`
`+k+i}var Oe=!1;function Z(i,s){if(!i||Oe)return"";Oe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ue){var f=ue}Reflect.construct(i,[],s)}else{try{s.call()}catch(ue){f=ue}i.call(s.prototype)}else{try{throw Error()}catch(ue){f=ue}i()}}catch(ue){if(ue&&f&&typeof ue.stack=="string"){for(var m=ue.stack.split(`
`),x=f.stack.split(`
`),A=m.length-1,z=x.length-1;1<=A&&0<=z&&m[A]!==x[z];)z--;for(;1<=A&&0<=z;A--,z--)if(m[A]!==x[z]){if(A!==1||z!==1)do if(A--,z--,0>z||m[A]!==x[z]){var X=`
`+m[A].replace(" at new "," at ");return i.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",i.displayName)),X}while(1<=A&&0<=z);break}}}finally{Oe=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?re(i):""}function he(i){switch(i.tag){case 5:return re(i.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return i=Z(i.type,!1),i;case 11:return i=Z(i.type.render,!1),i;case 1:return i=Z(i.type,!0),i;default:return""}}function ye(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case D:return"Fragment";case U:return"Portal";case C:return"Profiler";case O:return"StrictMode";case K:return"Suspense";case oe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case B:return(i.displayName||"Context")+".Consumer";case T:return(i._context.displayName||"Context")+".Provider";case Y:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ce:return s=i.displayName||null,s!==null?s:ye(i.type)||"Memo";case te:s=i._payload,i=i._init;try{return ye(i(s))}catch{}}return null}function ge(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(s);case 8:return s===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function we(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Pe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Je(i){var s=Pe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,x=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(A){f=""+A,x.call(this,A)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(A){f=""+A},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function St(i){i._valueTracker||(i._valueTracker=Je(i))}function gt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return i&&(f=Pe(i)?i.checked?"true":"false":i.value),i=f,i!==l?(s.setValue(i),!0):!1}function tt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function G(i,s){var l=s.checked;return I({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Xt(i,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=we(s.value!=null?s.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function dt(i,s){s=s.checked,s!=null&&P(i,"checked",s,!1)}function J(i,s){dt(i,s);var l=we(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?wt(i,s.type,l):s.hasOwnProperty("defaultValue")&&wt(i,s.type,we(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Ve(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function wt(i,s,l){(s!=="number"||tt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Xe=Array.isArray;function N(i,s,l,f){if(i=i.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=s.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&f&&(i[l].defaultSelected=!0)}else{for(l=""+we(l),s=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,f&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function R(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return I({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ne(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Xe(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:we(l)}}function ve(i,s){var l=we(s.value),f=we(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function _e(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function me(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?me(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ce,Ne=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,m){MSApp.execUnsafeLocalFunction(function(){return i(s,l,f,m)})}:i}(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ce.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function mt(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(i){be.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ee[s]=Ee[i]})});function it(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ee.hasOwnProperty(i)&&Ee[i]?(""+s).trim():s+"px"}function rt(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=it(l,s[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,m):i[l]=m}}var Be=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yt(i,s){if(s){if(Be[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function st(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function V(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var De=null,fe=null,pe=null;function Le(i){if(i=Bl(i)){if(typeof De!="function")throw Error(t(280));var s=i.stateNode;s&&(s=cc(s),De(i.stateNode,i.type,s))}}function Ue(i){fe?pe?pe.push(i):pe=[i]:fe=i}function ht(){if(fe){var i=fe,s=pe;if(pe=fe=null,Le(i),s)for(i=0;i<s.length;i++)Le(s[i])}}function Ut(i,s){return i(s)}function rn(){}var ke=!1;function qe(i,s,l){if(ke)return i(s,l);ke=!0;try{return Ut(i,s,l)}finally{ke=!1,(fe!==null||pe!==null)&&(rn(),ht())}}function vt(i,s){var l=i.stateNode;if(l===null)return null;var f=cc(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Fe=!1;if(c)try{var pt={};Object.defineProperty(pt,"passive",{get:function(){Fe=!0}}),window.addEventListener("test",pt,pt),window.removeEventListener("test",pt,pt)}catch{Fe=!1}function Qe(i,s,l,f,m,x,A,z,X){var ue=Array.prototype.slice.call(arguments,3);try{s.apply(l,ue)}catch(Me){this.onError(Me)}}var ot=!1,en=null,Mt=!1,jt=null,yn={onError:function(i){ot=!0,en=i}};function Yt(i,s,l,f,m,x,A,z,X){ot=!1,en=null,Qe.apply(yn,arguments)}function qt(i,s,l,f,m,x,A,z,X){if(Yt.apply(this,arguments),ot){if(ot){var ue=en;ot=!1,en=null}else throw Error(t(198));Mt||(Mt=!0,jt=ue)}}function Ct(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,s.flags&4098&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Kn(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function $t(i){if(Ct(i)!==i)throw Error(t(188))}function Xn(i){var s=i.alternate;if(!s){if(s=Ct(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,f=s;;){var m=l.return;if(m===null)break;var x=m.alternate;if(x===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===l)return $t(m),i;if(x===f)return $t(m),s;x=x.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=x;else{for(var A=!1,z=m.child;z;){if(z===l){A=!0,l=m,f=x;break}if(z===f){A=!0,f=m,l=x;break}z=z.sibling}if(!A){for(z=x.child;z;){if(z===l){A=!0,l=x,f=m;break}if(z===f){A=!0,f=x,l=m;break}z=z.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function ci(i){return i=Xn(i),i!==null?_n(i):null}function _n(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=_n(i);if(s!==null)return s;i=i.sibling}return null}var b=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,se=e.unstable_shouldYield,ae=e.unstable_requestPaint,W=e.unstable_now,xe=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,He=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,at=e.unstable_LowPriority,nt=e.unstable_IdlePriority,Ke=null,_t=null;function Rt(i){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Ke,i,void 0,(i.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:lt,ln=Math.log,zt=Math.LN2;function lt(i){return i>>>=0,i===0?32:31-(ln(i)/zt|0)|0}var gn=64,Nt=4194304;function jn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function gr(i,s){var l=i.pendingLanes;if(l===0)return 0;var f=0,m=i.suspendedLanes,x=i.pingedLanes,A=l&268435455;if(A!==0){var z=A&~m;z!==0?f=jn(z):(x&=A,x!==0&&(f=jn(x)))}else A=l&~m,A!==0?f=jn(A):x!==0&&(f=jn(x));if(f===0)return 0;if(s!==0&&s!==f&&!(s&m)&&(m=f&-f,x=s&-s,m>=x||m===16&&(x&4194240)!==0))return s;if(f&4&&(f|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)l=31-Ht(s),m=1<<l,f|=i[l],s&=~m;return f}function fi(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function co(i,s){for(var l=i.suspendedLanes,f=i.pingedLanes,m=i.expirationTimes,x=i.pendingLanes;0<x;){var A=31-Ht(x),z=1<<A,X=m[A];X===-1?(!(z&l)||z&f)&&(m[A]=fi(z,s)):X<=s&&(i.expiredLanes|=z),x&=~z}}function Kt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function di(){var i=gn;return gn<<=1,!(gn&4194240)&&(gn=64),i}function Zn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Sn(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Ht(s),i[s]=l}function Qn(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-Ht(l),x=1<<m;s[m]=0,f[m]=-1,i[m]=-1,l&=~x}}function fo(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var f=31-Ht(l),m=1<<f;m&s|i[f]&s&&(i[f]|=s),l&=~m}}var Dt=0;function I_(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var U_,pd,N_,F_,O_,md=!1,$u=[],Ss=null,Ms=null,Es=null,Tl=new Map,wl=new Map,Ts=[],Gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function k_(i,s){switch(i){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":Ms=null;break;case"mouseover":case"mouseout":Es=null;break;case"pointerover":case"pointerout":Tl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(s.pointerId)}}function Al(i,s,l,f,m,x){return i===null||i.nativeEvent!==x?(i={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:x,targetContainers:[m]},s!==null&&(s=Bl(s),s!==null&&pd(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function Wy(i,s,l,f,m){switch(s){case"focusin":return Ss=Al(Ss,i,s,l,f,m),!0;case"dragenter":return Ms=Al(Ms,i,s,l,f,m),!0;case"mouseover":return Es=Al(Es,i,s,l,f,m),!0;case"pointerover":var x=m.pointerId;return Tl.set(x,Al(Tl.get(x)||null,i,s,l,f,m)),!0;case"gotpointercapture":return x=m.pointerId,wl.set(x,Al(wl.get(x)||null,i,s,l,f,m)),!0}return!1}function z_(i){var s=ho(i.target);if(s!==null){var l=Ct(s);if(l!==null){if(s=l.tag,s===13){if(s=Kn(l),s!==null){i.blockedOn=s,O_(i.priority,function(){N_(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Ku(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=gd(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);At=f,l.target.dispatchEvent(f),At=null}else return s=Bl(l),s!==null&&pd(s),i.blockedOn=l,!1;s.shift()}return!0}function B_(i,s,l){Ku(i)&&l.delete(s)}function Xy(){md=!1,Ss!==null&&Ku(Ss)&&(Ss=null),Ms!==null&&Ku(Ms)&&(Ms=null),Es!==null&&Ku(Es)&&(Es=null),Tl.forEach(B_),wl.forEach(B_)}function Cl(i,s){i.blockedOn===s&&(i.blockedOn=null,md||(md=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Xy)))}function Rl(i){function s(m){return Cl(m,i)}if(0<$u.length){Cl($u[0],i);for(var l=1;l<$u.length;l++){var f=$u[l];f.blockedOn===i&&(f.blockedOn=null)}}for(Ss!==null&&Cl(Ss,i),Ms!==null&&Cl(Ms,i),Es!==null&&Cl(Es,i),Tl.forEach(s),wl.forEach(s),l=0;l<Ts.length;l++)f=Ts[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<Ts.length&&(l=Ts[0],l.blockedOn===null);)z_(l),l.blockedOn===null&&Ts.shift()}var aa=w.ReactCurrentBatchConfig,Zu=!0;function jy(i,s,l,f){var m=Dt,x=aa.transition;aa.transition=null;try{Dt=1,_d(i,s,l,f)}finally{Dt=m,aa.transition=x}}function Yy(i,s,l,f){var m=Dt,x=aa.transition;aa.transition=null;try{Dt=4,_d(i,s,l,f)}finally{Dt=m,aa.transition=x}}function _d(i,s,l,f){if(Zu){var m=gd(i,s,l,f);if(m===null)Ud(i,s,f,Qu,l),k_(i,f);else if(Wy(m,i,s,l,f))f.stopPropagation();else if(k_(i,f),s&4&&-1<Gy.indexOf(i)){for(;m!==null;){var x=Bl(m);if(x!==null&&U_(x),x=gd(i,s,l,f),x===null&&Ud(i,s,f,Qu,l),x===m)break;m=x}m!==null&&f.stopPropagation()}else Ud(i,s,f,null,l)}}var Qu=null;function gd(i,s,l,f){if(Qu=null,i=V(f),i=ho(i),i!==null)if(s=Ct(i),s===null)i=null;else if(l=s.tag,l===13){if(i=Kn(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Qu=i,null}function H_(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xe()){case Re:return 1;case He:return 4;case We:case at:return 16;case nt:return 536870912;default:return 16}default:return 16}}var ws=null,vd=null,Ju=null;function V_(){if(Ju)return Ju;var i,s=vd,l=s.length,f,m="value"in ws?ws.value:ws.textContent,x=m.length;for(i=0;i<l&&s[i]===m[i];i++);var A=l-i;for(f=1;f<=A&&s[l-f]===m[x-f];f++);return Ju=m.slice(i,1<f?1-f:void 0)}function ec(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function tc(){return!0}function G_(){return!1}function Bi(i){function s(l,f,m,x,A){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var z in i)i.hasOwnProperty(z)&&(l=i[z],this[z]=l?l(x):x[z]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?tc:G_,this.isPropagationStopped=G_,this}return I(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=tc)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=tc)},persist:function(){},isPersistent:tc}),s}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xd=Bi(la),bl=I({},la,{view:0,detail:0}),qy=Bi(bl),yd,Sd,Pl,nc=I({},bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Pl&&(Pl&&i.type==="mousemove"?(yd=i.screenX-Pl.screenX,Sd=i.screenY-Pl.screenY):Sd=yd=0,Pl=i),yd)},movementY:function(i){return"movementY"in i?i.movementY:Sd}}),W_=Bi(nc),$y=I({},nc,{dataTransfer:0}),Ky=Bi($y),Zy=I({},bl,{relatedTarget:0}),Md=Bi(Zy),Qy=I({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),Jy=Bi(Qy),eS=I({},la,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),tS=Bi(eS),nS=I({},la,{data:0}),X_=Bi(nS),iS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oS(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=sS[i])?!!s[i]:!1}function Ed(){return oS}var aS=I({},bl,{key:function(i){if(i.key){var s=iS[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=ec(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?rS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(i){return i.type==="keypress"?ec(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ec(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),lS=Bi(aS),uS=I({},nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),j_=Bi(uS),cS=I({},bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),fS=Bi(cS),dS=I({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),hS=Bi(dS),pS=I({},nc,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),mS=Bi(pS),_S=[9,13,27,32],Td=c&&"CompositionEvent"in window,Dl=null;c&&"documentMode"in document&&(Dl=document.documentMode);var gS=c&&"TextEvent"in window&&!Dl,Y_=c&&(!Td||Dl&&8<Dl&&11>=Dl),q_=" ",$_=!1;function K_(i,s){switch(i){case"keyup":return _S.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ua=!1;function vS(i,s){switch(i){case"compositionend":return Z_(s);case"keypress":return s.which!==32?null:($_=!0,q_);case"textInput":return i=s.data,i===q_&&$_?null:i;default:return null}}function xS(i,s){if(ua)return i==="compositionend"||!Td&&K_(i,s)?(i=V_(),Ju=vd=ws=null,ua=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Y_&&s.locale!=="ko"?null:s.data;default:return null}}var yS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Q_(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!yS[i.type]:s==="textarea"}function J_(i,s,l,f){Ue(f),s=ac(s,"onChange"),0<s.length&&(l=new xd("onChange","change",null,l,f),i.push({event:l,listeners:s}))}var Ll=null,Il=null;function SS(i){g0(i,0)}function ic(i){var s=pa(i);if(gt(s))return i}function MS(i,s){if(i==="change")return s}var e0=!1;if(c){var wd;if(c){var Ad="oninput"in document;if(!Ad){var t0=document.createElement("div");t0.setAttribute("oninput","return;"),Ad=typeof t0.oninput=="function"}wd=Ad}else wd=!1;e0=wd&&(!document.documentMode||9<document.documentMode)}function n0(){Ll&&(Ll.detachEvent("onpropertychange",i0),Il=Ll=null)}function i0(i){if(i.propertyName==="value"&&ic(Il)){var s=[];J_(s,Il,i,V(i)),qe(SS,s)}}function ES(i,s,l){i==="focusin"?(n0(),Ll=s,Il=l,Ll.attachEvent("onpropertychange",i0)):i==="focusout"&&n0()}function TS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ic(Il)}function wS(i,s){if(i==="click")return ic(s)}function AS(i,s){if(i==="input"||i==="change")return ic(s)}function CS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var vr=typeof Object.is=="function"?Object.is:CS;function Ul(i,s){if(vr(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(s,m)||!vr(i[m],s[m]))return!1}return!0}function r0(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function s0(i,s){var l=r0(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=s&&f>=s)return{node:l,offset:s-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=r0(l)}}function o0(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?o0(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function a0(){for(var i=window,s=tt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=tt(i.document)}return s}function Cd(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function RS(i){var s=a0(),l=i.focusedElem,f=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&o0(l.ownerDocument.documentElement,l)){if(f!==null&&Cd(l)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,x=Math.min(f.start,m);f=f.end===void 0?x:Math.min(f.end,m),!i.extend&&x>f&&(m=f,f=x,x=m),m=s0(l,x);var A=s0(l,f);m&&A&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),x>f?(i.addRange(s),i.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var bS=c&&"documentMode"in document&&11>=document.documentMode,ca=null,Rd=null,Nl=null,bd=!1;function l0(i,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;bd||ca==null||ca!==tt(f)||(f=ca,"selectionStart"in f&&Cd(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Nl&&Ul(Nl,f)||(Nl=f,f=ac(Rd,"onSelect"),0<f.length&&(s=new xd("onSelect","select",null,s,l),i.push({event:s,listeners:f}),s.target=ca)))}function rc(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var fa={animationend:rc("Animation","AnimationEnd"),animationiteration:rc("Animation","AnimationIteration"),animationstart:rc("Animation","AnimationStart"),transitionend:rc("Transition","TransitionEnd")},Pd={},u0={};c&&(u0=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition);function sc(i){if(Pd[i])return Pd[i];if(!fa[i])return i;var s=fa[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in u0)return Pd[i]=s[l];return i}var c0=sc("animationend"),f0=sc("animationiteration"),d0=sc("animationstart"),h0=sc("transitionend"),p0=new Map,m0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function As(i,s){p0.set(i,s),a(s,[i])}for(var Dd=0;Dd<m0.length;Dd++){var Ld=m0[Dd],PS=Ld.toLowerCase(),DS=Ld[0].toUpperCase()+Ld.slice(1);As(PS,"on"+DS)}As(c0,"onAnimationEnd"),As(f0,"onAnimationIteration"),As(d0,"onAnimationStart"),As("dblclick","onDoubleClick"),As("focusin","onFocus"),As("focusout","onBlur"),As(h0,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fl));function _0(i,s,l){var f=i.type||"unknown-event";i.currentTarget=l,qt(f,s,void 0,i),i.currentTarget=null}function g0(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],m=f.event;f=f.listeners;e:{var x=void 0;if(s)for(var A=f.length-1;0<=A;A--){var z=f[A],X=z.instance,ue=z.currentTarget;if(z=z.listener,X!==x&&m.isPropagationStopped())break e;_0(m,z,ue),x=X}else for(A=0;A<f.length;A++){if(z=f[A],X=z.instance,ue=z.currentTarget,z=z.listener,X!==x&&m.isPropagationStopped())break e;_0(m,z,ue),x=X}}}if(Mt)throw i=jt,Mt=!1,jt=null,i}function sn(i,s){var l=s[Bd];l===void 0&&(l=s[Bd]=new Set);var f=i+"__bubble";l.has(f)||(v0(s,i,2,!1),l.add(f))}function Id(i,s,l){var f=0;s&&(f|=4),v0(l,i,f,s)}var oc="_reactListening"+Math.random().toString(36).slice(2);function Ol(i){if(!i[oc]){i[oc]=!0,n.forEach(function(l){l!=="selectionchange"&&(LS.has(l)||Id(l,!1,i),Id(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[oc]||(s[oc]=!0,Id("selectionchange",!1,s))}}function v0(i,s,l,f){switch(H_(s)){case 1:var m=jy;break;case 4:m=Yy;break;default:m=_d}l=m.bind(null,s,l,i),m=void 0,!Fe||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?i.addEventListener(s,l,{capture:!0,passive:m}):i.addEventListener(s,l,!0):m!==void 0?i.addEventListener(s,l,{passive:m}):i.addEventListener(s,l,!1)}function Ud(i,s,l,f,m){var x=f;if(!(s&1)&&!(s&2)&&f!==null)e:for(;;){if(f===null)return;var A=f.tag;if(A===3||A===4){var z=f.stateNode.containerInfo;if(z===m||z.nodeType===8&&z.parentNode===m)break;if(A===4)for(A=f.return;A!==null;){var X=A.tag;if((X===3||X===4)&&(X=A.stateNode.containerInfo,X===m||X.nodeType===8&&X.parentNode===m))return;A=A.return}for(;z!==null;){if(A=ho(z),A===null)return;if(X=A.tag,X===5||X===6){f=x=A;continue e}z=z.parentNode}}f=f.return}qe(function(){var ue=x,Me=V(l),Te=[];e:{var Se=p0.get(i);if(Se!==void 0){var Ge=xd,$e=i;switch(i){case"keypress":if(ec(l)===0)break e;case"keydown":case"keyup":Ge=lS;break;case"focusin":$e="focus",Ge=Md;break;case"focusout":$e="blur",Ge=Md;break;case"beforeblur":case"afterblur":Ge=Md;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=W_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=Ky;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=fS;break;case c0:case f0:case d0:Ge=Jy;break;case h0:Ge=hS;break;case"scroll":Ge=qy;break;case"wheel":Ge=mS;break;case"copy":case"cut":case"paste":Ge=tS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=j_}var Ze=(s&4)!==0,Mn=!Ze&&i==="scroll",ee=Ze?Se!==null?Se+"Capture":null:Se;Ze=[];for(var q=ue,ie;q!==null;){ie=q;var Ae=ie.stateNode;if(ie.tag===5&&Ae!==null&&(ie=Ae,ee!==null&&(Ae=vt(q,ee),Ae!=null&&Ze.push(kl(q,Ae,ie)))),Mn)break;q=q.return}0<Ze.length&&(Se=new Ge(Se,$e,null,l,Me),Te.push({event:Se,listeners:Ze}))}}if(!(s&7)){e:{if(Se=i==="mouseover"||i==="pointerover",Ge=i==="mouseout"||i==="pointerout",Se&&l!==At&&($e=l.relatedTarget||l.fromElement)&&(ho($e)||$e[$r]))break e;if((Ge||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,Ge?($e=l.relatedTarget||l.toElement,Ge=ue,$e=$e?ho($e):null,$e!==null&&(Mn=Ct($e),$e!==Mn||$e.tag!==5&&$e.tag!==6)&&($e=null)):(Ge=null,$e=ue),Ge!==$e)){if(Ze=W_,Ae="onMouseLeave",ee="onMouseEnter",q="mouse",(i==="pointerout"||i==="pointerover")&&(Ze=j_,Ae="onPointerLeave",ee="onPointerEnter",q="pointer"),Mn=Ge==null?Se:pa(Ge),ie=$e==null?Se:pa($e),Se=new Ze(Ae,q+"leave",Ge,l,Me),Se.target=Mn,Se.relatedTarget=ie,Ae=null,ho(Me)===ue&&(Ze=new Ze(ee,q+"enter",$e,l,Me),Ze.target=ie,Ze.relatedTarget=Mn,Ae=Ze),Mn=Ae,Ge&&$e)t:{for(Ze=Ge,ee=$e,q=0,ie=Ze;ie;ie=da(ie))q++;for(ie=0,Ae=ee;Ae;Ae=da(Ae))ie++;for(;0<q-ie;)Ze=da(Ze),q--;for(;0<ie-q;)ee=da(ee),ie--;for(;q--;){if(Ze===ee||ee!==null&&Ze===ee.alternate)break t;Ze=da(Ze),ee=da(ee)}Ze=null}else Ze=null;Ge!==null&&x0(Te,Se,Ge,Ze,!1),$e!==null&&Mn!==null&&x0(Te,Mn,$e,Ze,!0)}}e:{if(Se=ue?pa(ue):window,Ge=Se.nodeName&&Se.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&Se.type==="file")var et=MS;else if(Q_(Se))if(e0)et=AS;else{et=TS;var ut=ES}else(Ge=Se.nodeName)&&Ge.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(et=wS);if(et&&(et=et(i,ue))){J_(Te,et,l,Me);break e}ut&&ut(i,Se,ue),i==="focusout"&&(ut=Se._wrapperState)&&ut.controlled&&Se.type==="number"&&wt(Se,"number",Se.value)}switch(ut=ue?pa(ue):window,i){case"focusin":(Q_(ut)||ut.contentEditable==="true")&&(ca=ut,Rd=ue,Nl=null);break;case"focusout":Nl=Rd=ca=null;break;case"mousedown":bd=!0;break;case"contextmenu":case"mouseup":case"dragend":bd=!1,l0(Te,l,Me);break;case"selectionchange":if(bS)break;case"keydown":case"keyup":l0(Te,l,Me)}var ct;if(Td)e:{switch(i){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else ua?K_(i,l)&&(xt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(xt="onCompositionStart");xt&&(Y_&&l.locale!=="ko"&&(ua||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&ua&&(ct=V_()):(ws=Me,vd="value"in ws?ws.value:ws.textContent,ua=!0)),ut=ac(ue,xt),0<ut.length&&(xt=new X_(xt,i,null,l,Me),Te.push({event:xt,listeners:ut}),ct?xt.data=ct:(ct=Z_(l),ct!==null&&(xt.data=ct)))),(ct=gS?vS(i,l):xS(i,l))&&(ue=ac(ue,"onBeforeInput"),0<ue.length&&(Me=new X_("onBeforeInput","beforeinput",null,l,Me),Te.push({event:Me,listeners:ue}),Me.data=ct))}g0(Te,s)})}function kl(i,s,l){return{instance:i,listener:s,currentTarget:l}}function ac(i,s){for(var l=s+"Capture",f=[];i!==null;){var m=i,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=vt(i,l),x!=null&&f.unshift(kl(i,x,m)),x=vt(i,s),x!=null&&f.push(kl(i,x,m))),i=i.return}return f}function da(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function x0(i,s,l,f,m){for(var x=s._reactName,A=[];l!==null&&l!==f;){var z=l,X=z.alternate,ue=z.stateNode;if(X!==null&&X===f)break;z.tag===5&&ue!==null&&(z=ue,m?(X=vt(l,x),X!=null&&A.unshift(kl(l,X,z))):m||(X=vt(l,x),X!=null&&A.push(kl(l,X,z)))),l=l.return}A.length!==0&&i.push({event:s,listeners:A})}var IS=/\r\n?/g,US=/\u0000|\uFFFD/g;function y0(i){return(typeof i=="string"?i:""+i).replace(IS,`
`).replace(US,"")}function lc(i,s,l){if(s=y0(s),y0(i)!==s&&l)throw Error(t(425))}function uc(){}var Nd=null,Fd=null;function Od(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var kd=typeof setTimeout=="function"?setTimeout:void 0,NS=typeof clearTimeout=="function"?clearTimeout:void 0,S0=typeof Promise=="function"?Promise:void 0,FS=typeof queueMicrotask=="function"?queueMicrotask:typeof S0<"u"?function(i){return S0.resolve(null).then(i).catch(OS)}:kd;function OS(i){setTimeout(function(){throw i})}function zd(i,s){var l=s,f=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){i.removeChild(m),Rl(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);Rl(s)}function Cs(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function M0(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var ha=Math.random().toString(36).slice(2),Lr="__reactFiber$"+ha,zl="__reactProps$"+ha,$r="__reactContainer$"+ha,Bd="__reactEvents$"+ha,kS="__reactListeners$"+ha,zS="__reactHandles$"+ha;function ho(i){var s=i[Lr];if(s)return s;for(var l=i.parentNode;l;){if(s=l[$r]||l[Lr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=M0(i);i!==null;){if(l=i[Lr])return l;i=M0(i)}return s}i=l,l=i.parentNode}return null}function Bl(i){return i=i[Lr]||i[$r],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function pa(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function cc(i){return i[zl]||null}var Hd=[],ma=-1;function Rs(i){return{current:i}}function on(i){0>ma||(i.current=Hd[ma],Hd[ma]=null,ma--)}function tn(i,s){ma++,Hd[ma]=i.current,i.current=s}var bs={},Jn=Rs(bs),wi=Rs(!1),po=bs;function _a(i,s){var l=i.type.contextTypes;if(!l)return bs;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in l)m[x]=s[x];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function Ai(i){return i=i.childContextTypes,i!=null}function fc(){on(wi),on(Jn)}function E0(i,s,l){if(Jn.current!==bs)throw Error(t(168));tn(Jn,s),tn(wi,l)}function T0(i,s,l){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,ge(i)||"Unknown",m));return I({},l,f)}function dc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||bs,po=Jn.current,tn(Jn,i),tn(wi,wi.current),!0}function w0(i,s,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=T0(i,s,po),f.__reactInternalMemoizedMergedChildContext=i,on(wi),on(Jn),tn(Jn,i)):on(wi),tn(wi,l)}var Kr=null,hc=!1,Vd=!1;function A0(i){Kr===null?Kr=[i]:Kr.push(i)}function BS(i){hc=!0,A0(i)}function Ps(){if(!Vd&&Kr!==null){Vd=!0;var i=0,s=Dt;try{var l=Kr;for(Dt=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}Kr=null,hc=!1}catch(m){throw Kr!==null&&(Kr=Kr.slice(i+1)),b(Re,Ps),m}finally{Dt=s,Vd=!1}}return null}var ga=[],va=0,pc=null,mc=0,er=[],tr=0,mo=null,Zr=1,Qr="";function _o(i,s){ga[va++]=mc,ga[va++]=pc,pc=i,mc=s}function C0(i,s,l){er[tr++]=Zr,er[tr++]=Qr,er[tr++]=mo,mo=i;var f=Zr;i=Qr;var m=32-Ht(f)-1;f&=~(1<<m),l+=1;var x=32-Ht(s)+m;if(30<x){var A=m-m%5;x=(f&(1<<A)-1).toString(32),f>>=A,m-=A,Zr=1<<32-Ht(s)+m|l<<m|f,Qr=x+i}else Zr=1<<x|l<<m|f,Qr=i}function Gd(i){i.return!==null&&(_o(i,1),C0(i,1,0))}function Wd(i){for(;i===pc;)pc=ga[--va],ga[va]=null,mc=ga[--va],ga[va]=null;for(;i===mo;)mo=er[--tr],er[tr]=null,Qr=er[--tr],er[tr]=null,Zr=er[--tr],er[tr]=null}var Hi=null,Vi=null,un=!1,xr=null;function R0(i,s){var l=sr(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function b0(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Hi=i,Vi=Cs(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Hi=i,Vi=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=mo!==null?{id:Zr,overflow:Qr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=sr(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Hi=i,Vi=null,!0):!1;default:return!1}}function Xd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function jd(i){if(un){var s=Vi;if(s){var l=s;if(!b0(i,s)){if(Xd(i))throw Error(t(418));s=Cs(l.nextSibling);var f=Hi;s&&b0(i,s)?R0(f,l):(i.flags=i.flags&-4097|2,un=!1,Hi=i)}}else{if(Xd(i))throw Error(t(418));i.flags=i.flags&-4097|2,un=!1,Hi=i}}}function P0(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Hi=i}function _c(i){if(i!==Hi)return!1;if(!un)return P0(i),un=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Od(i.type,i.memoizedProps)),s&&(s=Vi)){if(Xd(i))throw D0(),Error(t(418));for(;s;)R0(i,s),s=Cs(s.nextSibling)}if(P0(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Vi=Cs(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Vi=null}}else Vi=Hi?Cs(i.stateNode.nextSibling):null;return!0}function D0(){for(var i=Vi;i;)i=Cs(i.nextSibling)}function xa(){Vi=Hi=null,un=!1}function Yd(i){xr===null?xr=[i]:xr.push(i)}var HS=w.ReactCurrentBatchConfig;function Hl(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var m=f,x=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(A){var z=m.refs;A===null?delete z[x]:z[x]=A},s._stringRef=x,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function gc(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function L0(i){var s=i._init;return s(i._payload)}function I0(i){function s(ee,q){if(i){var ie=ee.deletions;ie===null?(ee.deletions=[q],ee.flags|=16):ie.push(q)}}function l(ee,q){if(!i)return null;for(;q!==null;)s(ee,q),q=q.sibling;return null}function f(ee,q){for(ee=new Map;q!==null;)q.key!==null?ee.set(q.key,q):ee.set(q.index,q),q=q.sibling;return ee}function m(ee,q){return ee=ks(ee,q),ee.index=0,ee.sibling=null,ee}function x(ee,q,ie){return ee.index=ie,i?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<q?(ee.flags|=2,q):ie):(ee.flags|=2,q)):(ee.flags|=1048576,q)}function A(ee){return i&&ee.alternate===null&&(ee.flags|=2),ee}function z(ee,q,ie,Ae){return q===null||q.tag!==6?(q=kh(ie,ee.mode,Ae),q.return=ee,q):(q=m(q,ie),q.return=ee,q)}function X(ee,q,ie,Ae){var et=ie.type;return et===D?Me(ee,q,ie.props.children,Ae,ie.key):q!==null&&(q.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===te&&L0(et)===q.type)?(Ae=m(q,ie.props),Ae.ref=Hl(ee,q,ie),Ae.return=ee,Ae):(Ae=Hc(ie.type,ie.key,ie.props,null,ee.mode,Ae),Ae.ref=Hl(ee,q,ie),Ae.return=ee,Ae)}function ue(ee,q,ie,Ae){return q===null||q.tag!==4||q.stateNode.containerInfo!==ie.containerInfo||q.stateNode.implementation!==ie.implementation?(q=zh(ie,ee.mode,Ae),q.return=ee,q):(q=m(q,ie.children||[]),q.return=ee,q)}function Me(ee,q,ie,Ae,et){return q===null||q.tag!==7?(q=To(ie,ee.mode,Ae,et),q.return=ee,q):(q=m(q,ie),q.return=ee,q)}function Te(ee,q,ie){if(typeof q=="string"&&q!==""||typeof q=="number")return q=kh(""+q,ee.mode,ie),q.return=ee,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case F:return ie=Hc(q.type,q.key,q.props,null,ee.mode,ie),ie.ref=Hl(ee,null,q),ie.return=ee,ie;case U:return q=zh(q,ee.mode,ie),q.return=ee,q;case te:var Ae=q._init;return Te(ee,Ae(q._payload),ie)}if(Xe(q)||le(q))return q=To(q,ee.mode,ie,null),q.return=ee,q;gc(ee,q)}return null}function Se(ee,q,ie,Ae){var et=q!==null?q.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return et!==null?null:z(ee,q,""+ie,Ae);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case F:return ie.key===et?X(ee,q,ie,Ae):null;case U:return ie.key===et?ue(ee,q,ie,Ae):null;case te:return et=ie._init,Se(ee,q,et(ie._payload),Ae)}if(Xe(ie)||le(ie))return et!==null?null:Me(ee,q,ie,Ae,null);gc(ee,ie)}return null}function Ge(ee,q,ie,Ae,et){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return ee=ee.get(ie)||null,z(q,ee,""+Ae,et);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case F:return ee=ee.get(Ae.key===null?ie:Ae.key)||null,X(q,ee,Ae,et);case U:return ee=ee.get(Ae.key===null?ie:Ae.key)||null,ue(q,ee,Ae,et);case te:var ut=Ae._init;return Ge(ee,q,ie,ut(Ae._payload),et)}if(Xe(Ae)||le(Ae))return ee=ee.get(ie)||null,Me(q,ee,Ae,et,null);gc(q,Ae)}return null}function $e(ee,q,ie,Ae){for(var et=null,ut=null,ct=q,xt=q=0,zn=null;ct!==null&&xt<ie.length;xt++){ct.index>xt?(zn=ct,ct=null):zn=ct.sibling;var Vt=Se(ee,ct,ie[xt],Ae);if(Vt===null){ct===null&&(ct=zn);break}i&&ct&&Vt.alternate===null&&s(ee,ct),q=x(Vt,q,xt),ut===null?et=Vt:ut.sibling=Vt,ut=Vt,ct=zn}if(xt===ie.length)return l(ee,ct),un&&_o(ee,xt),et;if(ct===null){for(;xt<ie.length;xt++)ct=Te(ee,ie[xt],Ae),ct!==null&&(q=x(ct,q,xt),ut===null?et=ct:ut.sibling=ct,ut=ct);return un&&_o(ee,xt),et}for(ct=f(ee,ct);xt<ie.length;xt++)zn=Ge(ct,ee,xt,ie[xt],Ae),zn!==null&&(i&&zn.alternate!==null&&ct.delete(zn.key===null?xt:zn.key),q=x(zn,q,xt),ut===null?et=zn:ut.sibling=zn,ut=zn);return i&&ct.forEach(function(zs){return s(ee,zs)}),un&&_o(ee,xt),et}function Ze(ee,q,ie,Ae){var et=le(ie);if(typeof et!="function")throw Error(t(150));if(ie=et.call(ie),ie==null)throw Error(t(151));for(var ut=et=null,ct=q,xt=q=0,zn=null,Vt=ie.next();ct!==null&&!Vt.done;xt++,Vt=ie.next()){ct.index>xt?(zn=ct,ct=null):zn=ct.sibling;var zs=Se(ee,ct,Vt.value,Ae);if(zs===null){ct===null&&(ct=zn);break}i&&ct&&zs.alternate===null&&s(ee,ct),q=x(zs,q,xt),ut===null?et=zs:ut.sibling=zs,ut=zs,ct=zn}if(Vt.done)return l(ee,ct),un&&_o(ee,xt),et;if(ct===null){for(;!Vt.done;xt++,Vt=ie.next())Vt=Te(ee,Vt.value,Ae),Vt!==null&&(q=x(Vt,q,xt),ut===null?et=Vt:ut.sibling=Vt,ut=Vt);return un&&_o(ee,xt),et}for(ct=f(ee,ct);!Vt.done;xt++,Vt=ie.next())Vt=Ge(ct,ee,xt,Vt.value,Ae),Vt!==null&&(i&&Vt.alternate!==null&&ct.delete(Vt.key===null?xt:Vt.key),q=x(Vt,q,xt),ut===null?et=Vt:ut.sibling=Vt,ut=Vt);return i&&ct.forEach(function(xM){return s(ee,xM)}),un&&_o(ee,xt),et}function Mn(ee,q,ie,Ae){if(typeof ie=="object"&&ie!==null&&ie.type===D&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case F:e:{for(var et=ie.key,ut=q;ut!==null;){if(ut.key===et){if(et=ie.type,et===D){if(ut.tag===7){l(ee,ut.sibling),q=m(ut,ie.props.children),q.return=ee,ee=q;break e}}else if(ut.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===te&&L0(et)===ut.type){l(ee,ut.sibling),q=m(ut,ie.props),q.ref=Hl(ee,ut,ie),q.return=ee,ee=q;break e}l(ee,ut);break}else s(ee,ut);ut=ut.sibling}ie.type===D?(q=To(ie.props.children,ee.mode,Ae,ie.key),q.return=ee,ee=q):(Ae=Hc(ie.type,ie.key,ie.props,null,ee.mode,Ae),Ae.ref=Hl(ee,q,ie),Ae.return=ee,ee=Ae)}return A(ee);case U:e:{for(ut=ie.key;q!==null;){if(q.key===ut)if(q.tag===4&&q.stateNode.containerInfo===ie.containerInfo&&q.stateNode.implementation===ie.implementation){l(ee,q.sibling),q=m(q,ie.children||[]),q.return=ee,ee=q;break e}else{l(ee,q);break}else s(ee,q);q=q.sibling}q=zh(ie,ee.mode,Ae),q.return=ee,ee=q}return A(ee);case te:return ut=ie._init,Mn(ee,q,ut(ie._payload),Ae)}if(Xe(ie))return $e(ee,q,ie,Ae);if(le(ie))return Ze(ee,q,ie,Ae);gc(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,q!==null&&q.tag===6?(l(ee,q.sibling),q=m(q,ie),q.return=ee,ee=q):(l(ee,q),q=kh(ie,ee.mode,Ae),q.return=ee,ee=q),A(ee)):l(ee,q)}return Mn}var ya=I0(!0),U0=I0(!1),vc=Rs(null),xc=null,Sa=null,qd=null;function $d(){qd=Sa=xc=null}function Kd(i){var s=vc.current;on(vc),i._currentValue=s}function Zd(i,s,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===l)break;i=i.return}}function Ma(i,s){xc=i,qd=Sa=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&s&&(Ci=!0),i.firstContext=null)}function nr(i){var s=i._currentValue;if(qd!==i)if(i={context:i,memoizedValue:s,next:null},Sa===null){if(xc===null)throw Error(t(308));Sa=i,xc.dependencies={lanes:0,firstContext:i}}else Sa=Sa.next=i;return s}var go=null;function Qd(i){go===null?go=[i]:go.push(i)}function N0(i,s,l,f){var m=s.interleaved;return m===null?(l.next=l,Qd(s)):(l.next=m.next,m.next=l),s.interleaved=l,Jr(i,f)}function Jr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Ds=!1;function Jd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function F0(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function es(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Ls(i,s,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,Bt&2){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,Jr(i,l)}return m=f.interleaved,m===null?(s.next=s,Qd(f)):(s.next=m.next,m.next=s),f.interleaved=s,Jr(i,l)}function yc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,fo(i,l)}}function O0(i,s){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?m=x=A:x=x.next=A,l=l.next}while(l!==null);x===null?m=x=s:x=x.next=s}else m=x=s;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Sc(i,s,l,f){var m=i.updateQueue;Ds=!1;var x=m.firstBaseUpdate,A=m.lastBaseUpdate,z=m.shared.pending;if(z!==null){m.shared.pending=null;var X=z,ue=X.next;X.next=null,A===null?x=ue:A.next=ue,A=X;var Me=i.alternate;Me!==null&&(Me=Me.updateQueue,z=Me.lastBaseUpdate,z!==A&&(z===null?Me.firstBaseUpdate=ue:z.next=ue,Me.lastBaseUpdate=X))}if(x!==null){var Te=m.baseState;A=0,Me=ue=X=null,z=x;do{var Se=z.lane,Ge=z.eventTime;if((f&Se)===Se){Me!==null&&(Me=Me.next={eventTime:Ge,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var $e=i,Ze=z;switch(Se=s,Ge=l,Ze.tag){case 1:if($e=Ze.payload,typeof $e=="function"){Te=$e.call(Ge,Te,Se);break e}Te=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Ze.payload,Se=typeof $e=="function"?$e.call(Ge,Te,Se):$e,Se==null)break e;Te=I({},Te,Se);break e;case 2:Ds=!0}}z.callback!==null&&z.lane!==0&&(i.flags|=64,Se=m.effects,Se===null?m.effects=[z]:Se.push(z))}else Ge={eventTime:Ge,lane:Se,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Me===null?(ue=Me=Ge,X=Te):Me=Me.next=Ge,A|=Se;if(z=z.next,z===null){if(z=m.shared.pending,z===null)break;Se=z,z=Se.next,Se.next=null,m.lastBaseUpdate=Se,m.shared.pending=null}}while(!0);if(Me===null&&(X=Te),m.baseState=X,m.firstBaseUpdate=ue,m.lastBaseUpdate=Me,s=m.shared.interleaved,s!==null){m=s;do A|=m.lane,m=m.next;while(m!==s)}else x===null&&(m.shared.lanes=0);yo|=A,i.lanes=A,i.memoizedState=Te}}function k0(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var Vl={},Ir=Rs(Vl),Gl=Rs(Vl),Wl=Rs(Vl);function vo(i){if(i===Vl)throw Error(t(174));return i}function eh(i,s){switch(tn(Wl,s),tn(Gl,i),tn(Ir,Vl),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ie(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Ie(s,i)}on(Ir),tn(Ir,s)}function Ea(){on(Ir),on(Gl),on(Wl)}function z0(i){vo(Wl.current);var s=vo(Ir.current),l=Ie(s,i.type);s!==l&&(tn(Gl,i),tn(Ir,l))}function th(i){Gl.current===i&&(on(Ir),on(Gl))}var fn=Rs(0);function Mc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var nh=[];function ih(){for(var i=0;i<nh.length;i++)nh[i]._workInProgressVersionPrimary=null;nh.length=0}var Ec=w.ReactCurrentDispatcher,rh=w.ReactCurrentBatchConfig,xo=0,dn=null,Dn=null,On=null,Tc=!1,Xl=!1,jl=0,VS=0;function ei(){throw Error(t(321))}function sh(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!vr(i[l],s[l]))return!1;return!0}function oh(i,s,l,f,m,x){if(xo=x,dn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ec.current=i===null||i.memoizedState===null?jS:YS,i=l(f,m),Xl){x=0;do{if(Xl=!1,jl=0,25<=x)throw Error(t(301));x+=1,On=Dn=null,s.updateQueue=null,Ec.current=qS,i=l(f,m)}while(Xl)}if(Ec.current=Cc,s=Dn!==null&&Dn.next!==null,xo=0,On=Dn=dn=null,Tc=!1,s)throw Error(t(300));return i}function ah(){var i=jl!==0;return jl=0,i}function Ur(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return On===null?dn.memoizedState=On=i:On=On.next=i,On}function ir(){if(Dn===null){var i=dn.alternate;i=i!==null?i.memoizedState:null}else i=Dn.next;var s=On===null?dn.memoizedState:On.next;if(s!==null)On=s,Dn=i;else{if(i===null)throw Error(t(310));Dn=i,i={memoizedState:Dn.memoizedState,baseState:Dn.baseState,baseQueue:Dn.baseQueue,queue:Dn.queue,next:null},On===null?dn.memoizedState=On=i:On=On.next=i}return On}function Yl(i,s){return typeof s=="function"?s(i):s}function lh(i){var s=ir(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=Dn,m=f.baseQueue,x=l.pending;if(x!==null){if(m!==null){var A=m.next;m.next=x.next,x.next=A}f.baseQueue=m=x,l.pending=null}if(m!==null){x=m.next,f=f.baseState;var z=A=null,X=null,ue=x;do{var Me=ue.lane;if((xo&Me)===Me)X!==null&&(X=X.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),f=ue.hasEagerState?ue.eagerState:i(f,ue.action);else{var Te={lane:Me,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};X===null?(z=X=Te,A=f):X=X.next=Te,dn.lanes|=Me,yo|=Me}ue=ue.next}while(ue!==null&&ue!==x);X===null?A=f:X.next=z,vr(f,s.memoizedState)||(Ci=!0),s.memoizedState=f,s.baseState=A,s.baseQueue=X,l.lastRenderedState=f}if(i=l.interleaved,i!==null){m=i;do x=m.lane,dn.lanes|=x,yo|=x,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function uh(i){var s=ir(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,m=l.pending,x=s.memoizedState;if(m!==null){l.pending=null;var A=m=m.next;do x=i(x,A.action),A=A.next;while(A!==m);vr(x,s.memoizedState)||(Ci=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,f]}function B0(){}function H0(i,s){var l=dn,f=ir(),m=s(),x=!vr(f.memoizedState,m);if(x&&(f.memoizedState=m,Ci=!0),f=f.queue,ch(W0.bind(null,l,f,i),[i]),f.getSnapshot!==s||x||On!==null&&On.memoizedState.tag&1){if(l.flags|=2048,ql(9,G0.bind(null,l,f,m,s),void 0,null),kn===null)throw Error(t(349));xo&30||V0(l,s,m)}return m}function V0(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=dn.updateQueue,s===null?(s={lastEffect:null,stores:null},dn.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function G0(i,s,l,f){s.value=l,s.getSnapshot=f,X0(s)&&j0(i)}function W0(i,s,l){return l(function(){X0(s)&&j0(i)})}function X0(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!vr(i,l)}catch{return!0}}function j0(i){var s=Jr(i,1);s!==null&&Er(s,i,1,-1)}function Y0(i){var s=Ur();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yl,lastRenderedState:i},s.queue=i,i=i.dispatch=XS.bind(null,dn,i),[s.memoizedState,i]}function ql(i,s,l,f){return i={tag:i,create:s,destroy:l,deps:f,next:null},s=dn.updateQueue,s===null?(s={lastEffect:null,stores:null},dn.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,s.lastEffect=i)),i}function q0(){return ir().memoizedState}function wc(i,s,l,f){var m=Ur();dn.flags|=i,m.memoizedState=ql(1|s,l,void 0,f===void 0?null:f)}function Ac(i,s,l,f){var m=ir();f=f===void 0?null:f;var x=void 0;if(Dn!==null){var A=Dn.memoizedState;if(x=A.destroy,f!==null&&sh(f,A.deps)){m.memoizedState=ql(s,l,x,f);return}}dn.flags|=i,m.memoizedState=ql(1|s,l,x,f)}function $0(i,s){return wc(8390656,8,i,s)}function ch(i,s){return Ac(2048,8,i,s)}function K0(i,s){return Ac(4,2,i,s)}function Z0(i,s){return Ac(4,4,i,s)}function Q0(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function J0(i,s,l){return l=l!=null?l.concat([i]):null,Ac(4,4,Q0.bind(null,s,i),l)}function fh(){}function eg(i,s){var l=ir();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&sh(s,f[1])?f[0]:(l.memoizedState=[i,s],i)}function tg(i,s){var l=ir();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&sh(s,f[1])?f[0]:(i=i(),l.memoizedState=[i,s],i)}function ng(i,s,l){return xo&21?(vr(l,s)||(l=di(),dn.lanes|=l,yo|=l,i.baseState=!0),s):(i.baseState&&(i.baseState=!1,Ci=!0),i.memoizedState=l)}function GS(i,s){var l=Dt;Dt=l!==0&&4>l?l:4,i(!0);var f=rh.transition;rh.transition={};try{i(!1),s()}finally{Dt=l,rh.transition=f}}function ig(){return ir().memoizedState}function WS(i,s,l){var f=Fs(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},rg(i))sg(s,l);else if(l=N0(i,s,l,f),l!==null){var m=pi();Er(l,i,f,m),og(l,s,f)}}function XS(i,s,l){var f=Fs(i),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(rg(i))sg(s,m);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var A=s.lastRenderedState,z=x(A,l);if(m.hasEagerState=!0,m.eagerState=z,vr(z,A)){var X=s.interleaved;X===null?(m.next=m,Qd(s)):(m.next=X.next,X.next=m),s.interleaved=m;return}}catch{}finally{}l=N0(i,s,m,f),l!==null&&(m=pi(),Er(l,i,f,m),og(l,s,f))}}function rg(i){var s=i.alternate;return i===dn||s!==null&&s===dn}function sg(i,s){Xl=Tc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function og(i,s,l){if(l&4194240){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,fo(i,l)}}var Cc={readContext:nr,useCallback:ei,useContext:ei,useEffect:ei,useImperativeHandle:ei,useInsertionEffect:ei,useLayoutEffect:ei,useMemo:ei,useReducer:ei,useRef:ei,useState:ei,useDebugValue:ei,useDeferredValue:ei,useTransition:ei,useMutableSource:ei,useSyncExternalStore:ei,useId:ei,unstable_isNewReconciler:!1},jS={readContext:nr,useCallback:function(i,s){return Ur().memoizedState=[i,s===void 0?null:s],i},useContext:nr,useEffect:$0,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,wc(4194308,4,Q0.bind(null,s,i),l)},useLayoutEffect:function(i,s){return wc(4194308,4,i,s)},useInsertionEffect:function(i,s){return wc(4,2,i,s)},useMemo:function(i,s){var l=Ur();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var f=Ur();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=WS.bind(null,dn,i),[f.memoizedState,i]},useRef:function(i){var s=Ur();return i={current:i},s.memoizedState=i},useState:Y0,useDebugValue:fh,useDeferredValue:function(i){return Ur().memoizedState=i},useTransition:function(){var i=Y0(!1),s=i[0];return i=GS.bind(null,i[1]),Ur().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var f=dn,m=Ur();if(un){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),kn===null)throw Error(t(349));xo&30||V0(f,s,l)}m.memoizedState=l;var x={value:l,getSnapshot:s};return m.queue=x,$0(W0.bind(null,f,x,i),[i]),f.flags|=2048,ql(9,G0.bind(null,f,x,l,s),void 0,null),l},useId:function(){var i=Ur(),s=kn.identifierPrefix;if(un){var l=Qr,f=Zr;l=(f&~(1<<32-Ht(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=jl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=VS++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},YS={readContext:nr,useCallback:eg,useContext:nr,useEffect:ch,useImperativeHandle:J0,useInsertionEffect:K0,useLayoutEffect:Z0,useMemo:tg,useReducer:lh,useRef:q0,useState:function(){return lh(Yl)},useDebugValue:fh,useDeferredValue:function(i){var s=ir();return ng(s,Dn.memoizedState,i)},useTransition:function(){var i=lh(Yl)[0],s=ir().memoizedState;return[i,s]},useMutableSource:B0,useSyncExternalStore:H0,useId:ig,unstable_isNewReconciler:!1},qS={readContext:nr,useCallback:eg,useContext:nr,useEffect:ch,useImperativeHandle:J0,useInsertionEffect:K0,useLayoutEffect:Z0,useMemo:tg,useReducer:uh,useRef:q0,useState:function(){return uh(Yl)},useDebugValue:fh,useDeferredValue:function(i){var s=ir();return Dn===null?s.memoizedState=i:ng(s,Dn.memoizedState,i)},useTransition:function(){var i=uh(Yl)[0],s=ir().memoizedState;return[i,s]},useMutableSource:B0,useSyncExternalStore:H0,useId:ig,unstable_isNewReconciler:!1};function yr(i,s){if(i&&i.defaultProps){s=I({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function dh(i,s,l,f){s=i.memoizedState,l=l(f,s),l=l==null?s:I({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Rc={isMounted:function(i){return(i=i._reactInternals)?Ct(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var f=pi(),m=Fs(i),x=es(f,m);x.payload=s,l!=null&&(x.callback=l),s=Ls(i,x,m),s!==null&&(Er(s,i,m,f),yc(s,i,m))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var f=pi(),m=Fs(i),x=es(f,m);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=Ls(i,x,m),s!==null&&(Er(s,i,m,f),yc(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=pi(),f=Fs(i),m=es(l,f);m.tag=2,s!=null&&(m.callback=s),s=Ls(i,m,f),s!==null&&(Er(s,i,f,l),yc(s,i,f))}};function ag(i,s,l,f,m,x,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,x,A):s.prototype&&s.prototype.isPureReactComponent?!Ul(l,f)||!Ul(m,x):!0}function lg(i,s,l){var f=!1,m=bs,x=s.contextType;return typeof x=="object"&&x!==null?x=nr(x):(m=Ai(s)?po:Jn.current,f=s.contextTypes,x=(f=f!=null)?_a(i,m):bs),s=new s(l,x),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Rc,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=x),s}function ug(i,s,l,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==i&&Rc.enqueueReplaceState(s,s.state,null)}function hh(i,s,l,f){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs={},Jd(i);var x=s.contextType;typeof x=="object"&&x!==null?m.context=nr(x):(x=Ai(s)?po:Jn.current,m.context=_a(i,x)),m.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(dh(i,s,x,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Rc.enqueueReplaceState(m,m.state,null),Sc(i,l,m,f),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function Ta(i,s){try{var l="",f=s;do l+=he(f),f=f.return;while(f);var m=l}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:s,stack:m,digest:null}}function ph(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function mh(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var $S=typeof WeakMap=="function"?WeakMap:Map;function cg(i,s,l){l=es(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){Nc||(Nc=!0,Ph=f),mh(i,s)},l}function fg(i,s,l){l=es(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;l.payload=function(){return f(m)},l.callback=function(){mh(i,s)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){mh(i,s),typeof f!="function"&&(Us===null?Us=new Set([this]):Us.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function dg(i,s,l){var f=i.pingCache;if(f===null){f=i.pingCache=new $S;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(l)||(m.add(l),i=uM.bind(null,i,s,l),s.then(i,i))}function hg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function pg(i,s,l,f,m){return i.mode&1?(i.flags|=65536,i.lanes=m,i):(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=es(-1,1),s.tag=2,Ls(l,s,1))),l.lanes|=1),i)}var KS=w.ReactCurrentOwner,Ci=!1;function hi(i,s,l,f){s.child=i===null?U0(s,null,l,f):ya(s,i.child,l,f)}function mg(i,s,l,f,m){l=l.render;var x=s.ref;return Ma(s,m),f=oh(i,s,l,f,x,m),l=ah(),i!==null&&!Ci?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,ts(i,s,m)):(un&&l&&Gd(s),s.flags|=1,hi(i,s,f,m),s.child)}function _g(i,s,l,f,m){if(i===null){var x=l.type;return typeof x=="function"&&!Oh(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,gg(i,s,x,f,m)):(i=Hc(l.type,null,f,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(x=i.child,!(i.lanes&m)){var A=x.memoizedProps;if(l=l.compare,l=l!==null?l:Ul,l(A,f)&&i.ref===s.ref)return ts(i,s,m)}return s.flags|=1,i=ks(x,f),i.ref=s.ref,i.return=s,s.child=i}function gg(i,s,l,f,m){if(i!==null){var x=i.memoizedProps;if(Ul(x,f)&&i.ref===s.ref)if(Ci=!1,s.pendingProps=f=x,(i.lanes&m)!==0)i.flags&131072&&(Ci=!0);else return s.lanes=i.lanes,ts(i,s,m)}return _h(i,s,l,f,m)}function vg(i,s,l){var f=s.pendingProps,m=f.children,x=i!==null?i.memoizedState:null;if(f.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},tn(Aa,Gi),Gi|=l;else{if(!(l&1073741824))return i=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,tn(Aa,Gi),Gi|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:l,tn(Aa,Gi),Gi|=f}else x!==null?(f=x.baseLanes|l,s.memoizedState=null):f=l,tn(Aa,Gi),Gi|=f;return hi(i,s,m,l),s.child}function xg(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function _h(i,s,l,f,m){var x=Ai(l)?po:Jn.current;return x=_a(s,x),Ma(s,m),l=oh(i,s,l,f,x,m),f=ah(),i!==null&&!Ci?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,ts(i,s,m)):(un&&f&&Gd(s),s.flags|=1,hi(i,s,l,m),s.child)}function yg(i,s,l,f,m){if(Ai(l)){var x=!0;dc(s)}else x=!1;if(Ma(s,m),s.stateNode===null)Pc(i,s),lg(s,l,f),hh(s,l,f,m),f=!0;else if(i===null){var A=s.stateNode,z=s.memoizedProps;A.props=z;var X=A.context,ue=l.contextType;typeof ue=="object"&&ue!==null?ue=nr(ue):(ue=Ai(l)?po:Jn.current,ue=_a(s,ue));var Me=l.getDerivedStateFromProps,Te=typeof Me=="function"||typeof A.getSnapshotBeforeUpdate=="function";Te||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==f||X!==ue)&&ug(s,A,f,ue),Ds=!1;var Se=s.memoizedState;A.state=Se,Sc(s,f,A,m),X=s.memoizedState,z!==f||Se!==X||wi.current||Ds?(typeof Me=="function"&&(dh(s,l,Me,f),X=s.memoizedState),(z=Ds||ag(s,l,z,f,Se,X,ue))?(Te||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=X),A.props=f,A.state=X,A.context=ue,f=z):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{A=s.stateNode,F0(i,s),z=s.memoizedProps,ue=s.type===s.elementType?z:yr(s.type,z),A.props=ue,Te=s.pendingProps,Se=A.context,X=l.contextType,typeof X=="object"&&X!==null?X=nr(X):(X=Ai(l)?po:Jn.current,X=_a(s,X));var Ge=l.getDerivedStateFromProps;(Me=typeof Ge=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==Te||Se!==X)&&ug(s,A,f,X),Ds=!1,Se=s.memoizedState,A.state=Se,Sc(s,f,A,m);var $e=s.memoizedState;z!==Te||Se!==$e||wi.current||Ds?(typeof Ge=="function"&&(dh(s,l,Ge,f),$e=s.memoizedState),(ue=Ds||ag(s,l,ue,f,Se,$e,X)||!1)?(Me||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(f,$e,X),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(f,$e,X)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||z===i.memoizedProps&&Se===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&Se===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=$e),A.props=f,A.state=$e,A.context=X,f=ue):(typeof A.componentDidUpdate!="function"||z===i.memoizedProps&&Se===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&Se===i.memoizedState||(s.flags|=1024),f=!1)}return gh(i,s,l,f,x,m)}function gh(i,s,l,f,m,x){xg(i,s);var A=(s.flags&128)!==0;if(!f&&!A)return m&&w0(s,l,!1),ts(i,s,x);f=s.stateNode,KS.current=s;var z=A&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&A?(s.child=ya(s,i.child,null,x),s.child=ya(s,null,z,x)):hi(i,s,z,x),s.memoizedState=f.state,m&&w0(s,l,!0),s.child}function Sg(i){var s=i.stateNode;s.pendingContext?E0(i,s.pendingContext,s.pendingContext!==s.context):s.context&&E0(i,s.context,!1),eh(i,s.containerInfo)}function Mg(i,s,l,f,m){return xa(),Yd(m),s.flags|=256,hi(i,s,l,f),s.child}var vh={dehydrated:null,treeContext:null,retryLane:0};function xh(i){return{baseLanes:i,cachePool:null,transitions:null}}function Eg(i,s,l){var f=s.pendingProps,m=fn.current,x=!1,A=(s.flags&128)!==0,z;if((z=A)||(z=i!==null&&i.memoizedState===null?!1:(m&2)!==0),z?(x=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),tn(fn,m&1),i===null)return jd(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(s.mode&1?i.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(A=f.children,i=f.fallback,x?(f=s.mode,x=s.child,A={mode:"hidden",children:A},!(f&1)&&x!==null?(x.childLanes=0,x.pendingProps=A):x=Vc(A,f,0,null),i=To(i,f,l,null),x.return=s,i.return=s,x.sibling=i,s.child=x,s.child.memoizedState=xh(l),s.memoizedState=vh,i):yh(s,A));if(m=i.memoizedState,m!==null&&(z=m.dehydrated,z!==null))return ZS(i,s,A,f,z,m,l);if(x){x=f.fallback,A=s.mode,m=i.child,z=m.sibling;var X={mode:"hidden",children:f.children};return!(A&1)&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=X,s.deletions=null):(f=ks(m,X),f.subtreeFlags=m.subtreeFlags&14680064),z!==null?x=ks(z,x):(x=To(x,A,l,null),x.flags|=2),x.return=s,f.return=s,f.sibling=x,s.child=f,f=x,x=s.child,A=i.child.memoizedState,A=A===null?xh(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=i.childLanes&~l,s.memoizedState=vh,f}return x=i.child,i=x.sibling,f=ks(x,{mode:"visible",children:f.children}),!(s.mode&1)&&(f.lanes=l),f.return=s,f.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=f,s.memoizedState=null,f}function yh(i,s){return s=Vc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function bc(i,s,l,f){return f!==null&&Yd(f),ya(s,i.child,null,l),i=yh(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function ZS(i,s,l,f,m,x,A){if(l)return s.flags&256?(s.flags&=-257,f=ph(Error(t(422))),bc(i,s,A,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(x=f.fallback,m=s.mode,f=Vc({mode:"visible",children:f.children},m,0,null),x=To(x,m,A,null),x.flags|=2,f.return=s,x.return=s,f.sibling=x,s.child=f,s.mode&1&&ya(s,i.child,null,A),s.child.memoizedState=xh(A),s.memoizedState=vh,x);if(!(s.mode&1))return bc(i,s,A,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var z=f.dgst;return f=z,x=Error(t(419)),f=ph(x,f,void 0),bc(i,s,A,f)}if(z=(A&i.childLanes)!==0,Ci||z){if(f=kn,f!==null){switch(A&-A){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=m&(f.suspendedLanes|A)?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,Jr(i,m),Er(f,i,m,-1))}return Fh(),f=ph(Error(t(421))),bc(i,s,A,f)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=cM.bind(null,i),m._reactRetry=s,null):(i=x.treeContext,Vi=Cs(m.nextSibling),Hi=s,un=!0,xr=null,i!==null&&(er[tr++]=Zr,er[tr++]=Qr,er[tr++]=mo,Zr=i.id,Qr=i.overflow,mo=s),s=yh(s,f.children),s.flags|=4096,s)}function Tg(i,s,l){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),Zd(i.return,s,l)}function Sh(i,s,l,f,m){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=l,x.tailMode=m)}function wg(i,s,l){var f=s.pendingProps,m=f.revealOrder,x=f.tail;if(hi(i,s,f.children,l),f=fn.current,f&2)f=f&1|2,s.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Tg(i,l,s);else if(i.tag===19)Tg(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(tn(fn,f),!(s.mode&1))s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)i=l.alternate,i!==null&&Mc(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),Sh(s,!1,m,l,x);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&Mc(i)===null){s.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}Sh(s,!0,l,null,x);break;case"together":Sh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Pc(i,s){!(s.mode&1)&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function ts(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),yo|=s.lanes,!(l&s.childLanes))return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=ks(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=ks(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function QS(i,s,l){switch(s.tag){case 3:Sg(s),xa();break;case 5:z0(s);break;case 1:Ai(s.type)&&dc(s);break;case 4:eh(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;tn(vc,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(tn(fn,fn.current&1),s.flags|=128,null):l&s.child.childLanes?Eg(i,s,l):(tn(fn,fn.current&1),i=ts(i,s,l),i!==null?i.sibling:null);tn(fn,fn.current&1);break;case 19:if(f=(l&s.childLanes)!==0,i.flags&128){if(f)return wg(i,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),tn(fn,fn.current),f)break;return null;case 22:case 23:return s.lanes=0,vg(i,s,l)}return ts(i,s,l)}var Ag,Mh,Cg,Rg;Ag=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Mh=function(){},Cg=function(i,s,l,f){var m=i.memoizedProps;if(m!==f){i=s.stateNode,vo(Ir.current);var x=null;switch(l){case"input":m=G(i,m),f=G(i,f),x=[];break;case"select":m=I({},m,{value:void 0}),f=I({},f,{value:void 0}),x=[];break;case"textarea":m=R(i,m),f=R(i,f),x=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=uc)}yt(l,f);var A;l=null;for(ue in m)if(!f.hasOwnProperty(ue)&&m.hasOwnProperty(ue)&&m[ue]!=null)if(ue==="style"){var z=m[ue];for(A in z)z.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(r.hasOwnProperty(ue)?x||(x=[]):(x=x||[]).push(ue,null));for(ue in f){var X=f[ue];if(z=m!=null?m[ue]:void 0,f.hasOwnProperty(ue)&&X!==z&&(X!=null||z!=null))if(ue==="style")if(z){for(A in z)!z.hasOwnProperty(A)||X&&X.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in X)X.hasOwnProperty(A)&&z[A]!==X[A]&&(l||(l={}),l[A]=X[A])}else l||(x||(x=[]),x.push(ue,l)),l=X;else ue==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,z=z?z.__html:void 0,X!=null&&z!==X&&(x=x||[]).push(ue,X)):ue==="children"?typeof X!="string"&&typeof X!="number"||(x=x||[]).push(ue,""+X):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(r.hasOwnProperty(ue)?(X!=null&&ue==="onScroll"&&sn("scroll",i),x||z===X||(x=[])):(x=x||[]).push(ue,X))}l&&(x=x||[]).push("style",l);var ue=x;(s.updateQueue=ue)&&(s.flags|=4)}},Rg=function(i,s,l,f){l!==f&&(s.flags|=4)};function $l(i,s){if(!un)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function ti(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(s)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=f,i.childLanes=l,s}function JS(i,s,l){var f=s.pendingProps;switch(Wd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ti(s),null;case 1:return Ai(s.type)&&fc(),ti(s),null;case 3:return f=s.stateNode,Ea(),on(wi),on(Jn),ih(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(_c(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,xr!==null&&(Ih(xr),xr=null))),Mh(i,s),ti(s),null;case 5:th(s);var m=vo(Wl.current);if(l=s.type,i!==null&&s.stateNode!=null)Cg(i,s,l,f,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return ti(s),null}if(i=vo(Ir.current),_c(s)){f=s.stateNode,l=s.type;var x=s.memoizedProps;switch(f[Lr]=s,f[zl]=x,i=(s.mode&1)!==0,l){case"dialog":sn("cancel",f),sn("close",f);break;case"iframe":case"object":case"embed":sn("load",f);break;case"video":case"audio":for(m=0;m<Fl.length;m++)sn(Fl[m],f);break;case"source":sn("error",f);break;case"img":case"image":case"link":sn("error",f),sn("load",f);break;case"details":sn("toggle",f);break;case"input":Xt(f,x),sn("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},sn("invalid",f);break;case"textarea":ne(f,x),sn("invalid",f)}yt(l,x),m=null;for(var A in x)if(x.hasOwnProperty(A)){var z=x[A];A==="children"?typeof z=="string"?f.textContent!==z&&(x.suppressHydrationWarning!==!0&&lc(f.textContent,z,i),m=["children",z]):typeof z=="number"&&f.textContent!==""+z&&(x.suppressHydrationWarning!==!0&&lc(f.textContent,z,i),m=["children",""+z]):r.hasOwnProperty(A)&&z!=null&&A==="onScroll"&&sn("scroll",f)}switch(l){case"input":St(f),Ve(f,x,!0);break;case"textarea":St(f),_e(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=uc)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{A=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=me(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=A.createElement(l,{is:f.is}):(i=A.createElement(l),l==="select"&&(A=i,f.multiple?A.multiple=!0:f.size&&(A.size=f.size))):i=A.createElementNS(i,l),i[Lr]=s,i[zl]=f,Ag(i,s,!1,!1),s.stateNode=i;e:{switch(A=st(l,f),l){case"dialog":sn("cancel",i),sn("close",i),m=f;break;case"iframe":case"object":case"embed":sn("load",i),m=f;break;case"video":case"audio":for(m=0;m<Fl.length;m++)sn(Fl[m],i);m=f;break;case"source":sn("error",i),m=f;break;case"img":case"image":case"link":sn("error",i),sn("load",i),m=f;break;case"details":sn("toggle",i),m=f;break;case"input":Xt(i,f),m=G(i,f),sn("invalid",i);break;case"option":m=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},m=I({},f,{value:void 0}),sn("invalid",i);break;case"textarea":ne(i,f),m=R(i,f),sn("invalid",i);break;default:m=f}yt(l,m),z=m;for(x in z)if(z.hasOwnProperty(x)){var X=z[x];x==="style"?rt(i,X):x==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&Ne(i,X)):x==="children"?typeof X=="string"?(l!=="textarea"||X!=="")&&mt(i,X):typeof X=="number"&&mt(i,""+X):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(r.hasOwnProperty(x)?X!=null&&x==="onScroll"&&sn("scroll",i):X!=null&&P(i,x,X,A))}switch(l){case"input":St(i),Ve(i,f,!1);break;case"textarea":St(i),_e(i);break;case"option":f.value!=null&&i.setAttribute("value",""+we(f.value));break;case"select":i.multiple=!!f.multiple,x=f.value,x!=null?N(i,!!f.multiple,x,!1):f.defaultValue!=null&&N(i,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=uc)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return ti(s),null;case 6:if(i&&s.stateNode!=null)Rg(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=vo(Wl.current),vo(Ir.current),_c(s)){if(f=s.stateNode,l=s.memoizedProps,f[Lr]=s,(x=f.nodeValue!==l)&&(i=Hi,i!==null))switch(i.tag){case 3:lc(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&lc(f.nodeValue,l,(i.mode&1)!==0)}x&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Lr]=s,s.stateNode=f}return ti(s),null;case 13:if(on(fn),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(un&&Vi!==null&&s.mode&1&&!(s.flags&128))D0(),xa(),s.flags|=98560,x=!1;else if(x=_c(s),f!==null&&f.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Lr]=s}else xa(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;ti(s),x=!1}else xr!==null&&(Ih(xr),xr=null),x=!0;if(!x)return s.flags&65536?s:null}return s.flags&128?(s.lanes=l,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,s.mode&1&&(i===null||fn.current&1?Ln===0&&(Ln=3):Fh())),s.updateQueue!==null&&(s.flags|=4),ti(s),null);case 4:return Ea(),Mh(i,s),i===null&&Ol(s.stateNode.containerInfo),ti(s),null;case 10:return Kd(s.type._context),ti(s),null;case 17:return Ai(s.type)&&fc(),ti(s),null;case 19:if(on(fn),x=s.memoizedState,x===null)return ti(s),null;if(f=(s.flags&128)!==0,A=x.rendering,A===null)if(f)$l(x,!1);else{if(Ln!==0||i!==null&&i.flags&128)for(i=s.child;i!==null;){if(A=Mc(i),A!==null){for(s.flags|=128,$l(x,!1),f=A.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)x=l,i=f,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,i=A.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return tn(fn,fn.current&1|2),s.child}i=i.sibling}x.tail!==null&&W()>Ca&&(s.flags|=128,f=!0,$l(x,!1),s.lanes=4194304)}else{if(!f)if(i=Mc(A),i!==null){if(s.flags|=128,f=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),$l(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!un)return ti(s),null}else 2*W()-x.renderingStartTime>Ca&&l!==1073741824&&(s.flags|=128,f=!0,$l(x,!1),s.lanes=4194304);x.isBackwards?(A.sibling=s.child,s.child=A):(l=x.last,l!==null?l.sibling=A:s.child=A,x.last=A)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=W(),s.sibling=null,l=fn.current,tn(fn,f?l&1|2:l&1),s):(ti(s),null);case 22:case 23:return Nh(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&s.mode&1?Gi&1073741824&&(ti(s),s.subtreeFlags&6&&(s.flags|=8192)):ti(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function eM(i,s){switch(Wd(s),s.tag){case 1:return Ai(s.type)&&fc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Ea(),on(wi),on(Jn),ih(),i=s.flags,i&65536&&!(i&128)?(s.flags=i&-65537|128,s):null;case 5:return th(s),null;case 13:if(on(fn),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));xa()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return on(fn),null;case 4:return Ea(),null;case 10:return Kd(s.type._context),null;case 22:case 23:return Nh(),null;case 24:return null;default:return null}}var Dc=!1,ni=!1,tM=typeof WeakSet=="function"?WeakSet:Set,je=null;function wa(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){vn(i,s,f)}else l.current=null}function Eh(i,s,l){try{l()}catch(f){vn(i,s,f)}}var bg=!1;function nM(i,s){if(Nd=Zu,i=a0(),Cd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var A=0,z=-1,X=-1,ue=0,Me=0,Te=i,Se=null;t:for(;;){for(var Ge;Te!==l||m!==0&&Te.nodeType!==3||(z=A+m),Te!==x||f!==0&&Te.nodeType!==3||(X=A+f),Te.nodeType===3&&(A+=Te.nodeValue.length),(Ge=Te.firstChild)!==null;)Se=Te,Te=Ge;for(;;){if(Te===i)break t;if(Se===l&&++ue===m&&(z=A),Se===x&&++Me===f&&(X=A),(Ge=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=Ge}l=z===-1||X===-1?null:{start:z,end:X}}else l=null}l=l||{start:0,end:0}}else l=null;for(Fd={focusedElem:i,selectionRange:l},Zu=!1,je=s;je!==null;)if(s=je,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,je=i;else for(;je!==null;){s=je;try{var $e=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Ze=$e.memoizedProps,Mn=$e.memoizedState,ee=s.stateNode,q=ee.getSnapshotBeforeUpdate(s.elementType===s.type?Ze:yr(s.type,Ze),Mn);ee.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var ie=s.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){vn(s,s.return,Ae)}if(i=s.sibling,i!==null){i.return=s.return,je=i;break}je=s.return}return $e=bg,bg=!1,$e}function Kl(i,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&i)===i){var x=m.destroy;m.destroy=void 0,x!==void 0&&Eh(s,l,x)}m=m.next}while(m!==f)}}function Lc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function Th(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function Pg(i){var s=i.alternate;s!==null&&(i.alternate=null,Pg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Lr],delete s[zl],delete s[Bd],delete s[kS],delete s[zS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Dg(i){return i.tag===5||i.tag===3||i.tag===4}function Lg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Dg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function wh(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=uc));else if(f!==4&&(i=i.child,i!==null))for(wh(i,s,l),i=i.sibling;i!==null;)wh(i,s,l),i=i.sibling}function Ah(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Ah(i,s,l),i=i.sibling;i!==null;)Ah(i,s,l),i=i.sibling}var Yn=null,Sr=!1;function Is(i,s,l){for(l=l.child;l!==null;)Ig(i,s,l),l=l.sibling}function Ig(i,s,l){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Ke,l)}catch{}switch(l.tag){case 5:ni||wa(l,s);case 6:var f=Yn,m=Sr;Yn=null,Is(i,s,l),Yn=f,Sr=m,Yn!==null&&(Sr?(i=Yn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Yn.removeChild(l.stateNode));break;case 18:Yn!==null&&(Sr?(i=Yn,l=l.stateNode,i.nodeType===8?zd(i.parentNode,l):i.nodeType===1&&zd(i,l),Rl(i)):zd(Yn,l.stateNode));break;case 4:f=Yn,m=Sr,Yn=l.stateNode.containerInfo,Sr=!0,Is(i,s,l),Yn=f,Sr=m;break;case 0:case 11:case 14:case 15:if(!ni&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var x=m,A=x.destroy;x=x.tag,A!==void 0&&(x&2||x&4)&&Eh(l,s,A),m=m.next}while(m!==f)}Is(i,s,l);break;case 1:if(!ni&&(wa(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(z){vn(l,s,z)}Is(i,s,l);break;case 21:Is(i,s,l);break;case 22:l.mode&1?(ni=(f=ni)||l.memoizedState!==null,Is(i,s,l),ni=f):Is(i,s,l);break;default:Is(i,s,l)}}function Ug(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new tM),s.forEach(function(f){var m=fM.bind(null,i,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Mr(i,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var x=i,A=s,z=A;e:for(;z!==null;){switch(z.tag){case 5:Yn=z.stateNode,Sr=!1;break e;case 3:Yn=z.stateNode.containerInfo,Sr=!0;break e;case 4:Yn=z.stateNode.containerInfo,Sr=!0;break e}z=z.return}if(Yn===null)throw Error(t(160));Ig(x,A,m),Yn=null,Sr=!1;var X=m.alternate;X!==null&&(X.return=null),m.return=null}catch(ue){vn(m,s,ue)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Ng(s,i),s=s.sibling}function Ng(i,s){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Mr(s,i),Nr(i),f&4){try{Kl(3,i,i.return),Lc(3,i)}catch(Ze){vn(i,i.return,Ze)}try{Kl(5,i,i.return)}catch(Ze){vn(i,i.return,Ze)}}break;case 1:Mr(s,i),Nr(i),f&512&&l!==null&&wa(l,l.return);break;case 5:if(Mr(s,i),Nr(i),f&512&&l!==null&&wa(l,l.return),i.flags&32){var m=i.stateNode;try{mt(m,"")}catch(Ze){vn(i,i.return,Ze)}}if(f&4&&(m=i.stateNode,m!=null)){var x=i.memoizedProps,A=l!==null?l.memoizedProps:x,z=i.type,X=i.updateQueue;if(i.updateQueue=null,X!==null)try{z==="input"&&x.type==="radio"&&x.name!=null&&dt(m,x),st(z,A);var ue=st(z,x);for(A=0;A<X.length;A+=2){var Me=X[A],Te=X[A+1];Me==="style"?rt(m,Te):Me==="dangerouslySetInnerHTML"?Ne(m,Te):Me==="children"?mt(m,Te):P(m,Me,Te,ue)}switch(z){case"input":J(m,x);break;case"textarea":ve(m,x);break;case"select":var Se=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var Ge=x.value;Ge!=null?N(m,!!x.multiple,Ge,!1):Se!==!!x.multiple&&(x.defaultValue!=null?N(m,!!x.multiple,x.defaultValue,!0):N(m,!!x.multiple,x.multiple?[]:"",!1))}m[zl]=x}catch(Ze){vn(i,i.return,Ze)}}break;case 6:if(Mr(s,i),Nr(i),f&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,x=i.memoizedProps;try{m.nodeValue=x}catch(Ze){vn(i,i.return,Ze)}}break;case 3:if(Mr(s,i),Nr(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Rl(s.containerInfo)}catch(Ze){vn(i,i.return,Ze)}break;case 4:Mr(s,i),Nr(i);break;case 13:Mr(s,i),Nr(i),m=i.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||(bh=W())),f&4&&Ug(i);break;case 22:if(Me=l!==null&&l.memoizedState!==null,i.mode&1?(ni=(ue=ni)||Me,Mr(s,i),ni=ue):Mr(s,i),Nr(i),f&8192){if(ue=i.memoizedState!==null,(i.stateNode.isHidden=ue)&&!Me&&i.mode&1)for(je=i,Me=i.child;Me!==null;){for(Te=je=Me;je!==null;){switch(Se=je,Ge=Se.child,Se.tag){case 0:case 11:case 14:case 15:Kl(4,Se,Se.return);break;case 1:wa(Se,Se.return);var $e=Se.stateNode;if(typeof $e.componentWillUnmount=="function"){f=Se,l=Se.return;try{s=f,$e.props=s.memoizedProps,$e.state=s.memoizedState,$e.componentWillUnmount()}catch(Ze){vn(f,l,Ze)}}break;case 5:wa(Se,Se.return);break;case 22:if(Se.memoizedState!==null){kg(Te);continue}}Ge!==null?(Ge.return=Se,je=Ge):kg(Te)}Me=Me.sibling}e:for(Me=null,Te=i;;){if(Te.tag===5){if(Me===null){Me=Te;try{m=Te.stateNode,ue?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(z=Te.stateNode,X=Te.memoizedProps.style,A=X!=null&&X.hasOwnProperty("display")?X.display:null,z.style.display=it("display",A))}catch(Ze){vn(i,i.return,Ze)}}}else if(Te.tag===6){if(Me===null)try{Te.stateNode.nodeValue=ue?"":Te.memoizedProps}catch(Ze){vn(i,i.return,Ze)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===i)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===i)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===i)break e;Me===Te&&(Me=null),Te=Te.return}Me===Te&&(Me=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:Mr(s,i),Nr(i),f&4&&Ug(i);break;case 21:break;default:Mr(s,i),Nr(i)}}function Nr(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(Dg(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(mt(m,""),f.flags&=-33);var x=Lg(i);Ah(i,x,m);break;case 3:case 4:var A=f.stateNode.containerInfo,z=Lg(i);wh(i,z,A);break;default:throw Error(t(161))}}catch(X){vn(i,i.return,X)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function iM(i,s,l){je=i,Fg(i)}function Fg(i,s,l){for(var f=(i.mode&1)!==0;je!==null;){var m=je,x=m.child;if(m.tag===22&&f){var A=m.memoizedState!==null||Dc;if(!A){var z=m.alternate,X=z!==null&&z.memoizedState!==null||ni;z=Dc;var ue=ni;if(Dc=A,(ni=X)&&!ue)for(je=m;je!==null;)A=je,X=A.child,A.tag===22&&A.memoizedState!==null?zg(m):X!==null?(X.return=A,je=X):zg(m);for(;x!==null;)je=x,Fg(x),x=x.sibling;je=m,Dc=z,ni=ue}Og(i)}else m.subtreeFlags&8772&&x!==null?(x.return=m,je=x):Og(i)}}function Og(i){for(;je!==null;){var s=je;if(s.flags&8772){var l=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:ni||Lc(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!ni)if(l===null)f.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:yr(s.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&k0(s,x,f);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}k0(s,A,l)}break;case 5:var z=s.stateNode;if(l===null&&s.flags&4){l=z;var X=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&l.focus();break;case"img":X.src&&(l.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ue=s.alternate;if(ue!==null){var Me=ue.memoizedState;if(Me!==null){var Te=Me.dehydrated;Te!==null&&Rl(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}ni||s.flags&512&&Th(s)}catch(Se){vn(s,s.return,Se)}}if(s===i){je=null;break}if(l=s.sibling,l!==null){l.return=s.return,je=l;break}je=s.return}}function kg(i){for(;je!==null;){var s=je;if(s===i){je=null;break}var l=s.sibling;if(l!==null){l.return=s.return,je=l;break}je=s.return}}function zg(i){for(;je!==null;){var s=je;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Lc(4,s)}catch(X){vn(s,l,X)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(X){vn(s,m,X)}}var x=s.return;try{Th(s)}catch(X){vn(s,x,X)}break;case 5:var A=s.return;try{Th(s)}catch(X){vn(s,A,X)}}}catch(X){vn(s,s.return,X)}if(s===i){je=null;break}var z=s.sibling;if(z!==null){z.return=s.return,je=z;break}je=s.return}}var rM=Math.ceil,Ic=w.ReactCurrentDispatcher,Ch=w.ReactCurrentOwner,rr=w.ReactCurrentBatchConfig,Bt=0,kn=null,An=null,qn=0,Gi=0,Aa=Rs(0),Ln=0,Zl=null,yo=0,Uc=0,Rh=0,Ql=null,Ri=null,bh=0,Ca=1/0,ns=null,Nc=!1,Ph=null,Us=null,Fc=!1,Ns=null,Oc=0,Jl=0,Dh=null,kc=-1,zc=0;function pi(){return Bt&6?W():kc!==-1?kc:kc=W()}function Fs(i){return i.mode&1?Bt&2&&qn!==0?qn&-qn:HS.transition!==null?(zc===0&&(zc=di()),zc):(i=Dt,i!==0||(i=window.event,i=i===void 0?16:H_(i.type)),i):1}function Er(i,s,l,f){if(50<Jl)throw Jl=0,Dh=null,Error(t(185));Sn(i,l,f),(!(Bt&2)||i!==kn)&&(i===kn&&(!(Bt&2)&&(Uc|=l),Ln===4&&Os(i,qn)),bi(i,f),l===1&&Bt===0&&!(s.mode&1)&&(Ca=W()+500,hc&&Ps()))}function bi(i,s){var l=i.callbackNode;co(i,s);var f=gr(i,i===kn?qn:0);if(f===0)l!==null&&j(l),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(l!=null&&j(l),s===1)i.tag===0?BS(Hg.bind(null,i)):A0(Hg.bind(null,i)),FS(function(){!(Bt&6)&&Ps()}),l=null;else{switch(I_(f)){case 1:l=Re;break;case 4:l=He;break;case 16:l=We;break;case 536870912:l=nt;break;default:l=We}l=$g(l,Bg.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function Bg(i,s){if(kc=-1,zc=0,Bt&6)throw Error(t(327));var l=i.callbackNode;if(Ra()&&i.callbackNode!==l)return null;var f=gr(i,i===kn?qn:0);if(f===0)return null;if(f&30||f&i.expiredLanes||s)s=Bc(i,f);else{s=f;var m=Bt;Bt|=2;var x=Gg();(kn!==i||qn!==s)&&(ns=null,Ca=W()+500,Mo(i,s));do try{aM();break}catch(z){Vg(i,z)}while(!0);$d(),Ic.current=x,Bt=m,An!==null?s=0:(kn=null,qn=0,s=Ln)}if(s!==0){if(s===2&&(m=Kt(i),m!==0&&(f=m,s=Lh(i,m))),s===1)throw l=Zl,Mo(i,0),Os(i,f),bi(i,W()),l;if(s===6)Os(i,f);else{if(m=i.current.alternate,!(f&30)&&!sM(m)&&(s=Bc(i,f),s===2&&(x=Kt(i),x!==0&&(f=x,s=Lh(i,x))),s===1))throw l=Zl,Mo(i,0),Os(i,f),bi(i,W()),l;switch(i.finishedWork=m,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:Eo(i,Ri,ns);break;case 3:if(Os(i,f),(f&130023424)===f&&(s=bh+500-W(),10<s)){if(gr(i,0)!==0)break;if(m=i.suspendedLanes,(m&f)!==f){pi(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=kd(Eo.bind(null,i,Ri,ns),s);break}Eo(i,Ri,ns);break;case 4:if(Os(i,f),(f&4194240)===f)break;for(s=i.eventTimes,m=-1;0<f;){var A=31-Ht(f);x=1<<A,A=s[A],A>m&&(m=A),f&=~x}if(f=m,f=W()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*rM(f/1960))-f,10<f){i.timeoutHandle=kd(Eo.bind(null,i,Ri,ns),f);break}Eo(i,Ri,ns);break;case 5:Eo(i,Ri,ns);break;default:throw Error(t(329))}}}return bi(i,W()),i.callbackNode===l?Bg.bind(null,i):null}function Lh(i,s){var l=Ql;return i.current.memoizedState.isDehydrated&&(Mo(i,s).flags|=256),i=Bc(i,s),i!==2&&(s=Ri,Ri=l,s!==null&&Ih(s)),i}function Ih(i){Ri===null?Ri=i:Ri.push.apply(Ri,i)}function sM(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],x=m.getSnapshot;m=m.value;try{if(!vr(x(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Os(i,s){for(s&=~Rh,s&=~Uc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Ht(s),f=1<<l;i[l]=-1,s&=~f}}function Hg(i){if(Bt&6)throw Error(t(327));Ra();var s=gr(i,0);if(!(s&1))return bi(i,W()),null;var l=Bc(i,s);if(i.tag!==0&&l===2){var f=Kt(i);f!==0&&(s=f,l=Lh(i,f))}if(l===1)throw l=Zl,Mo(i,0),Os(i,s),bi(i,W()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Eo(i,Ri,ns),bi(i,W()),null}function Uh(i,s){var l=Bt;Bt|=1;try{return i(s)}finally{Bt=l,Bt===0&&(Ca=W()+500,hc&&Ps())}}function So(i){Ns!==null&&Ns.tag===0&&!(Bt&6)&&Ra();var s=Bt;Bt|=1;var l=rr.transition,f=Dt;try{if(rr.transition=null,Dt=1,i)return i()}finally{Dt=f,rr.transition=l,Bt=s,!(Bt&6)&&Ps()}}function Nh(){Gi=Aa.current,on(Aa)}function Mo(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,NS(l)),An!==null)for(l=An.return;l!==null;){var f=l;switch(Wd(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&fc();break;case 3:Ea(),on(wi),on(Jn),ih();break;case 5:th(f);break;case 4:Ea();break;case 13:on(fn);break;case 19:on(fn);break;case 10:Kd(f.type._context);break;case 22:case 23:Nh()}l=l.return}if(kn=i,An=i=ks(i.current,null),qn=Gi=s,Ln=0,Zl=null,Rh=Uc=yo=0,Ri=Ql=null,go!==null){for(s=0;s<go.length;s++)if(l=go[s],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,x=l.pending;if(x!==null){var A=x.next;x.next=m,f.next=A}l.pending=f}go=null}return i}function Vg(i,s){do{var l=An;try{if($d(),Ec.current=Cc,Tc){for(var f=dn.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Tc=!1}if(xo=0,On=Dn=dn=null,Xl=!1,jl=0,Ch.current=null,l===null||l.return===null){Ln=1,Zl=s,An=null;break}e:{var x=i,A=l.return,z=l,X=s;if(s=qn,z.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var ue=X,Me=z,Te=Me.tag;if(!(Me.mode&1)&&(Te===0||Te===11||Te===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Ge=hg(A);if(Ge!==null){Ge.flags&=-257,pg(Ge,A,z,x,s),Ge.mode&1&&dg(x,ue,s),s=Ge,X=ue;var $e=s.updateQueue;if($e===null){var Ze=new Set;Ze.add(X),s.updateQueue=Ze}else $e.add(X);break e}else{if(!(s&1)){dg(x,ue,s),Fh();break e}X=Error(t(426))}}else if(un&&z.mode&1){var Mn=hg(A);if(Mn!==null){!(Mn.flags&65536)&&(Mn.flags|=256),pg(Mn,A,z,x,s),Yd(Ta(X,z));break e}}x=X=Ta(X,z),Ln!==4&&(Ln=2),Ql===null?Ql=[x]:Ql.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var ee=cg(x,X,s);O0(x,ee);break e;case 1:z=X;var q=x.type,ie=x.stateNode;if(!(x.flags&128)&&(typeof q.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Us===null||!Us.has(ie)))){x.flags|=65536,s&=-s,x.lanes|=s;var Ae=fg(x,z,s);O0(x,Ae);break e}}x=x.return}while(x!==null)}Xg(l)}catch(et){s=et,An===l&&l!==null&&(An=l=l.return);continue}break}while(!0)}function Gg(){var i=Ic.current;return Ic.current=Cc,i===null?Cc:i}function Fh(){(Ln===0||Ln===3||Ln===2)&&(Ln=4),kn===null||!(yo&268435455)&&!(Uc&268435455)||Os(kn,qn)}function Bc(i,s){var l=Bt;Bt|=2;var f=Gg();(kn!==i||qn!==s)&&(ns=null,Mo(i,s));do try{oM();break}catch(m){Vg(i,m)}while(!0);if($d(),Bt=l,Ic.current=f,An!==null)throw Error(t(261));return kn=null,qn=0,Ln}function oM(){for(;An!==null;)Wg(An)}function aM(){for(;An!==null&&!se();)Wg(An)}function Wg(i){var s=qg(i.alternate,i,Gi);i.memoizedProps=i.pendingProps,s===null?Xg(i):An=s,Ch.current=null}function Xg(i){var s=i;do{var l=s.alternate;if(i=s.return,s.flags&32768){if(l=eM(l,s),l!==null){l.flags&=32767,An=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Ln=6,An=null;return}}else if(l=JS(l,s,Gi),l!==null){An=l;return}if(s=s.sibling,s!==null){An=s;return}An=s=i}while(s!==null);Ln===0&&(Ln=5)}function Eo(i,s,l){var f=Dt,m=rr.transition;try{rr.transition=null,Dt=1,lM(i,s,l,f)}finally{rr.transition=m,Dt=f}return null}function lM(i,s,l,f){do Ra();while(Ns!==null);if(Bt&6)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=l.lanes|l.childLanes;if(Qn(i,x),i===kn&&(An=kn=null,qn=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Fc||(Fc=!0,$g(We,function(){return Ra(),null})),x=(l.flags&15990)!==0,l.subtreeFlags&15990||x){x=rr.transition,rr.transition=null;var A=Dt;Dt=1;var z=Bt;Bt|=4,Ch.current=null,nM(i,l),Ng(l,i),RS(Fd),Zu=!!Nd,Fd=Nd=null,i.current=l,iM(l),ae(),Bt=z,Dt=A,rr.transition=x}else i.current=l;if(Fc&&(Fc=!1,Ns=i,Oc=m),x=i.pendingLanes,x===0&&(Us=null),Rt(l.stateNode),bi(i,W()),s!==null)for(f=i.onRecoverableError,l=0;l<s.length;l++)m=s[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(Nc)throw Nc=!1,i=Ph,Ph=null,i;return Oc&1&&i.tag!==0&&Ra(),x=i.pendingLanes,x&1?i===Dh?Jl++:(Jl=0,Dh=i):Jl=0,Ps(),null}function Ra(){if(Ns!==null){var i=I_(Oc),s=rr.transition,l=Dt;try{if(rr.transition=null,Dt=16>i?16:i,Ns===null)var f=!1;else{if(i=Ns,Ns=null,Oc=0,Bt&6)throw Error(t(331));var m=Bt;for(Bt|=4,je=i.current;je!==null;){var x=je,A=x.child;if(je.flags&16){var z=x.deletions;if(z!==null){for(var X=0;X<z.length;X++){var ue=z[X];for(je=ue;je!==null;){var Me=je;switch(Me.tag){case 0:case 11:case 15:Kl(8,Me,x)}var Te=Me.child;if(Te!==null)Te.return=Me,je=Te;else for(;je!==null;){Me=je;var Se=Me.sibling,Ge=Me.return;if(Pg(Me),Me===ue){je=null;break}if(Se!==null){Se.return=Ge,je=Se;break}je=Ge}}}var $e=x.alternate;if($e!==null){var Ze=$e.child;if(Ze!==null){$e.child=null;do{var Mn=Ze.sibling;Ze.sibling=null,Ze=Mn}while(Ze!==null)}}je=x}}if(x.subtreeFlags&2064&&A!==null)A.return=x,je=A;else e:for(;je!==null;){if(x=je,x.flags&2048)switch(x.tag){case 0:case 11:case 15:Kl(9,x,x.return)}var ee=x.sibling;if(ee!==null){ee.return=x.return,je=ee;break e}je=x.return}}var q=i.current;for(je=q;je!==null;){A=je;var ie=A.child;if(A.subtreeFlags&2064&&ie!==null)ie.return=A,je=ie;else e:for(A=q;je!==null;){if(z=je,z.flags&2048)try{switch(z.tag){case 0:case 11:case 15:Lc(9,z)}}catch(et){vn(z,z.return,et)}if(z===A){je=null;break e}var Ae=z.sibling;if(Ae!==null){Ae.return=z.return,je=Ae;break e}je=z.return}}if(Bt=m,Ps(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Ke,i)}catch{}f=!0}return f}finally{Dt=l,rr.transition=s}}return!1}function jg(i,s,l){s=Ta(l,s),s=cg(i,s,1),i=Ls(i,s,1),s=pi(),i!==null&&(Sn(i,1,s),bi(i,s))}function vn(i,s,l){if(i.tag===3)jg(i,i,l);else for(;s!==null;){if(s.tag===3){jg(s,i,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Us===null||!Us.has(f))){i=Ta(l,i),i=fg(s,i,1),s=Ls(s,i,1),i=pi(),s!==null&&(Sn(s,1,i),bi(s,i));break}}s=s.return}}function uM(i,s,l){var f=i.pingCache;f!==null&&f.delete(s),s=pi(),i.pingedLanes|=i.suspendedLanes&l,kn===i&&(qn&l)===l&&(Ln===4||Ln===3&&(qn&130023424)===qn&&500>W()-bh?Mo(i,0):Rh|=l),bi(i,s)}function Yg(i,s){s===0&&(i.mode&1?(s=Nt,Nt<<=1,!(Nt&130023424)&&(Nt=4194304)):s=1);var l=pi();i=Jr(i,s),i!==null&&(Sn(i,s,l),bi(i,l))}function cM(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Yg(i,l)}function fM(i,s){var l=0;switch(i.tag){case 13:var f=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Yg(i,l)}var qg;qg=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||wi.current)Ci=!0;else{if(!(i.lanes&l)&&!(s.flags&128))return Ci=!1,QS(i,s,l);Ci=!!(i.flags&131072)}else Ci=!1,un&&s.flags&1048576&&C0(s,mc,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Pc(i,s),i=s.pendingProps;var m=_a(s,Jn.current);Ma(s,l),m=oh(null,s,f,i,m,l);var x=ah();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Ai(f)?(x=!0,dc(s)):x=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Jd(s),m.updater=Rc,s.stateNode=m,m._reactInternals=s,hh(s,f,i,l),s=gh(null,s,f,!0,x,l)):(s.tag=0,un&&x&&Gd(s),hi(null,s,m,l),s=s.child),s;case 16:f=s.elementType;e:{switch(Pc(i,s),i=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=hM(f),i=yr(f,i),m){case 0:s=_h(null,s,f,i,l);break e;case 1:s=yg(null,s,f,i,l);break e;case 11:s=mg(null,s,f,i,l);break e;case 14:s=_g(null,s,f,yr(f.type,i),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:yr(f,m),_h(i,s,f,m,l);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:yr(f,m),yg(i,s,f,m,l);case 3:e:{if(Sg(s),i===null)throw Error(t(387));f=s.pendingProps,x=s.memoizedState,m=x.element,F0(i,s),Sc(s,f,null,l);var A=s.memoizedState;if(f=A.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){m=Ta(Error(t(423)),s),s=Mg(i,s,f,l,m);break e}else if(f!==m){m=Ta(Error(t(424)),s),s=Mg(i,s,f,l,m);break e}else for(Vi=Cs(s.stateNode.containerInfo.firstChild),Hi=s,un=!0,xr=null,l=U0(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(xa(),f===m){s=ts(i,s,l);break e}hi(i,s,f,l)}s=s.child}return s;case 5:return z0(s),i===null&&jd(s),f=s.type,m=s.pendingProps,x=i!==null?i.memoizedProps:null,A=m.children,Od(f,m)?A=null:x!==null&&Od(f,x)&&(s.flags|=32),xg(i,s),hi(i,s,A,l),s.child;case 6:return i===null&&jd(s),null;case 13:return Eg(i,s,l);case 4:return eh(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=ya(s,null,f,l):hi(i,s,f,l),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:yr(f,m),mg(i,s,f,m,l);case 7:return hi(i,s,s.pendingProps,l),s.child;case 8:return hi(i,s,s.pendingProps.children,l),s.child;case 12:return hi(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,x=s.memoizedProps,A=m.value,tn(vc,f._currentValue),f._currentValue=A,x!==null)if(vr(x.value,A)){if(x.children===m.children&&!wi.current){s=ts(i,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var z=x.dependencies;if(z!==null){A=x.child;for(var X=z.firstContext;X!==null;){if(X.context===f){if(x.tag===1){X=es(-1,l&-l),X.tag=2;var ue=x.updateQueue;if(ue!==null){ue=ue.shared;var Me=ue.pending;Me===null?X.next=X:(X.next=Me.next,Me.next=X),ue.pending=X}}x.lanes|=l,X=x.alternate,X!==null&&(X.lanes|=l),Zd(x.return,l,s),z.lanes|=l;break}X=X.next}}else if(x.tag===10)A=x.type===s.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=l,z=A.alternate,z!==null&&(z.lanes|=l),Zd(A,l,s),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===s){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}hi(i,s,m.children,l),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,Ma(s,l),m=nr(m),f=f(m),s.flags|=1,hi(i,s,f,l),s.child;case 14:return f=s.type,m=yr(f,s.pendingProps),m=yr(f.type,m),_g(i,s,f,m,l);case 15:return gg(i,s,s.type,s.pendingProps,l);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:yr(f,m),Pc(i,s),s.tag=1,Ai(f)?(i=!0,dc(s)):i=!1,Ma(s,l),lg(s,f,m),hh(s,f,m,l),gh(null,s,f,!0,i,l);case 19:return wg(i,s,l);case 22:return vg(i,s,l)}throw Error(t(156,s.tag))};function $g(i,s){return b(i,s)}function dM(i,s,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sr(i,s,l,f){return new dM(i,s,l,f)}function Oh(i){return i=i.prototype,!(!i||!i.isReactComponent)}function hM(i){if(typeof i=="function")return Oh(i)?1:0;if(i!=null){if(i=i.$$typeof,i===Y)return 11;if(i===ce)return 14}return 2}function ks(i,s){var l=i.alternate;return l===null?(l=sr(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Hc(i,s,l,f,m,x){var A=2;if(f=i,typeof i=="function")Oh(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case D:return To(l.children,m,x,s);case O:A=8,m|=8;break;case C:return i=sr(12,l,s,m|2),i.elementType=C,i.lanes=x,i;case K:return i=sr(13,l,s,m),i.elementType=K,i.lanes=x,i;case oe:return i=sr(19,l,s,m),i.elementType=oe,i.lanes=x,i;case Q:return Vc(l,m,x,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case T:A=10;break e;case B:A=9;break e;case Y:A=11;break e;case ce:A=14;break e;case te:A=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=sr(A,l,s,m),s.elementType=i,s.type=f,s.lanes=x,s}function To(i,s,l,f){return i=sr(7,i,f,s),i.lanes=l,i}function Vc(i,s,l,f){return i=sr(22,i,f,s),i.elementType=Q,i.lanes=l,i.stateNode={isHidden:!1},i}function kh(i,s,l){return i=sr(6,i,null,s),i.lanes=l,i}function zh(i,s,l){return s=sr(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function pM(i,s,l,f,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zn(0),this.expirationTimes=Zn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Bh(i,s,l,f,m,x,A,z,X){return i=new pM(i,s,l,z,X),s===1?(s=1,x===!0&&(s|=8)):s=0,x=sr(3,null,null,s),i.current=x,x.stateNode=i,x.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jd(x),i}function mM(i,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:f==null?null:""+f,children:i,containerInfo:s,implementation:l}}function Kg(i){if(!i)return bs;i=i._reactInternals;e:{if(Ct(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Ai(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Ai(l))return T0(i,l,s)}return s}function Zg(i,s,l,f,m,x,A,z,X){return i=Bh(l,f,!0,i,m,x,A,z,X),i.context=Kg(null),l=i.current,f=pi(),m=Fs(l),x=es(f,m),x.callback=s??null,Ls(l,x,m),i.current.lanes=m,Sn(i,m,f),bi(i,f),i}function Gc(i,s,l,f){var m=s.current,x=pi(),A=Fs(m);return l=Kg(l),s.context===null?s.context=l:s.pendingContext=l,s=es(x,A),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=Ls(m,s,A),i!==null&&(Er(i,m,A,x),yc(i,m,A)),A}function Wc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Qg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Hh(i,s){Qg(i,s),(i=i.alternate)&&Qg(i,s)}var Jg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Vh(i){this._internalRoot=i}Xc.prototype.render=Vh.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Gc(i,s,null,null)},Xc.prototype.unmount=Vh.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;So(function(){Gc(null,i,null,null)}),s[$r]=null}};function Xc(i){this._internalRoot=i}Xc.prototype.unstable_scheduleHydration=function(i){if(i){var s=F_();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Ts.length&&s!==0&&s<Ts[l].priority;l++);Ts.splice(l,0,i),l===0&&z_(i)}};function Gh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function jc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function ev(){}function _M(i,s,l,f,m){if(m){if(typeof f=="function"){var x=f;f=function(){var ue=Wc(A);x.call(ue)}}var A=Zg(s,f,i,0,null,!1,!1,"",ev);return i._reactRootContainer=A,i[$r]=A.current,Ol(i.nodeType===8?i.parentNode:i),So(),A}for(;m=i.lastChild;)i.removeChild(m);if(typeof f=="function"){var z=f;f=function(){var ue=Wc(X);z.call(ue)}}var X=Bh(i,0,!1,null,null,!1,!1,"",ev);return i._reactRootContainer=X,i[$r]=X.current,Ol(i.nodeType===8?i.parentNode:i),So(function(){Gc(s,X,l,f)}),X}function Yc(i,s,l,f,m){var x=l._reactRootContainer;if(x){var A=x;if(typeof m=="function"){var z=m;m=function(){var X=Wc(A);z.call(X)}}Gc(s,A,i,m)}else A=_M(l,s,i,m,f);return Wc(A)}U_=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=jn(s.pendingLanes);l!==0&&(fo(s,l|1),bi(s,W()),!(Bt&6)&&(Ca=W()+500,Ps()))}break;case 13:So(function(){var f=Jr(i,1);if(f!==null){var m=pi();Er(f,i,1,m)}}),Hh(i,1)}},pd=function(i){if(i.tag===13){var s=Jr(i,134217728);if(s!==null){var l=pi();Er(s,i,134217728,l)}Hh(i,134217728)}},N_=function(i){if(i.tag===13){var s=Fs(i),l=Jr(i,s);if(l!==null){var f=pi();Er(l,i,s,f)}Hh(i,s)}},F_=function(){return Dt},O_=function(i,s){var l=Dt;try{return Dt=i,s()}finally{Dt=l}},De=function(i,s,l){switch(s){case"input":if(J(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==i&&f.form===i.form){var m=cc(f);if(!m)throw Error(t(90));gt(f),J(f,m)}}}break;case"textarea":ve(i,l);break;case"select":s=l.value,s!=null&&N(i,!!l.multiple,s,!1)}},Ut=Uh,rn=So;var gM={usingClientEntryPoint:!1,Events:[Bl,pa,cc,Ue,ht,Uh]},eu={findFiberByHostInstance:ho,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vM={bundleType:eu.bundleType,version:eu.version,rendererPackageName:eu.rendererPackageName,rendererConfig:eu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ci(i),i===null?null:i.stateNode},findFiberByHostInstance:eu.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{Ke=qc.inject(vM),_t=qc}catch{}}return Pi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gM,Pi.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gh(s))throw Error(t(200));return mM(i,s,null,l)},Pi.createRoot=function(i,s){if(!Gh(i))throw Error(t(299));var l=!1,f="",m=Jg;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=Bh(i,1,!1,null,null,l,!1,f,m),i[$r]=s.current,Ol(i.nodeType===8?i.parentNode:i),new Vh(s)},Pi.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ci(s),i=i===null?null:i.stateNode,i},Pi.flushSync=function(i){return So(i)},Pi.hydrate=function(i,s,l){if(!jc(s))throw Error(t(200));return Yc(null,i,s,!0,l)},Pi.hydrateRoot=function(i,s,l){if(!Gh(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,x="",A=Jg;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=Zg(s,null,i,1,l??null,m,!1,x,A),i[$r]=s.current,Ol(i),f)for(i=0;i<f.length;i++)l=f[i],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new Xc(s)},Pi.render=function(i,s,l){if(!jc(s))throw Error(t(200));return Yc(null,i,s,!1,l)},Pi.unmountComponentAtNode=function(i){if(!jc(i))throw Error(t(40));return i._reactRootContainer?(So(function(){Yc(null,null,i,!1,function(){i._reactRootContainer=null,i[$r]=null})}),!0):!1},Pi.unstable_batchedUpdates=Uh,Pi.unstable_renderSubtreeIntoContainer=function(i,s,l,f){if(!jc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Yc(i,s,l,!1,f)},Pi.version="18.3.1-next-f1338f8080-20240426",Pi}var lv;function AM(){if(lv)return jh.exports;lv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),jh.exports=wM(),jh.exports}var uv;function CM(){if(uv)return $c;uv=1;var o=AM();return $c.createRoot=o.createRoot,$c.hydrateRoot=o.hydrateRoot,$c}var RM=CM();function us(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Bx(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Qi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ll={duration:.5,overwrite:!1,delay:0},Jm,li,cn,dr=1e8,nn=1/dr,Hp=Math.PI*2,bM=Hp/4,PM=0,Hx=Math.sqrt,DM=Math.cos,LM=Math.sin,Wn=function(e){return typeof e=="string"},xn=function(e){return typeof e=="function"},vs=function(e){return typeof e=="number"},e_=function(e){return typeof e>"u"},Yr=function(e){return typeof e=="object"},Ii=function(e){return e!==!1},t_=function(){return typeof window<"u"},Kc=function(e){return xn(e)||Wn(e)},Vx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ui=Array.isArray,Vp=/(?:-?\.?\d|\.)+/gi,Gx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$a=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$h=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wx=/[+-]=-?[.\d]+/,Xx=/[^,'"\[\]\s]+/gi,IM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pn,Fr,Gp,n_,Ji={},Yf={},jx,Yx=function(e){return(Yf=Qo(e,Ji))&&zi},i_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Pu=function(e,t){return!t&&console.warn(e)},qx=function(e,t){return e&&(Ji[e]=t)&&Yf&&(Yf[e]=t)||Ji},Du=function(){return 0},UM={suppressEvents:!0,isStart:!0,kill:!1},Lf={suppressEvents:!0,kill:!1},NM={suppressEvents:!0},r_={},Js=[],Wp={},$x,qi={},Kh={},cv=30,If=[],s_="",o_=function(e){var t=e[0],n,r;if(Yr(t)||xn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=If.length;r--&&!If[r].targetTest(t););n=If[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new x1(e[r],n)))||e.splice(r,1);return e},Wo=function(e){return e._gsap||o_(hr(e))[0]._gsap},Kx=function(e,t,n){return(n=e[t])&&xn(n)?e[t]():e_(n)&&e.getAttribute&&e.getAttribute(t)||n},Ui=function(e,t){return(e=e.split(",")).forEach(t)||e},En=function(e){return Math.round(e*1e5)/1e5||0},Gn=function(e){return Math.round(e*1e7)/1e7||0},Ja=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},FM=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},qf=function(){var e=Js.length,t=Js.slice(0),n,r;for(Wp={},Js.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Zx=function(e,t,n,r){Js.length&&!li&&qf(),e.render(t,n,li&&t<0&&(e._initted||e._startAt)),Js.length&&!li&&qf()},Qx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Xx).length<2?t:Wn(e)?e.trim():e},Jx=function(e){return e},_r=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},OM=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Qo=function(e,t){for(var n in t)e[n]=t[n];return e},fv=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Yr(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},$f=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},vu=function(e){var t=e.parent||pn,n=e.keyframes?OM(ui(e.keyframes)):_r;if(Ii(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},kM=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},e1=function(e,t,n,r,a){var u=e[r],c;if(a)for(c=t[a];u&&u[a]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=u,t.parent=t._dp=e,t},ad=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t._prev,u=t._next;a?a._next=u:e[n]===t&&(e[n]=u),u?u._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},ro=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Xo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},zM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Xp=function(e,t,n,r){return e._startAt&&(li?e._startAt.revert(Lf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},BM=function o(e){return!e||e._ts&&o(e.parent)},dv=function(e){return e._repeat?ul(e._tTime,e=e.duration()+e._rDelay)*e:0},ul=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Kf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ld=function(e){return e._end=Gn(e._start+(e._tDur/Math.abs(e._ts||e._rts||nn)||0))},ud=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Gn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ld(e),n._dirty||Xo(n,e)),e},t1=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Kf(e.rawTime(),t),(!t._dur||Vu(0,t.totalDuration(),n)-t._tTime>nn)&&t.render(n,!0)),Xo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-nn}},zr=function(e,t,n,r){return t.parent&&ro(t),t._start=Gn((vs(n)?n:n||e!==pn?ar(e,n,t):e._time)+t._delay),t._end=Gn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),e1(e,t,"_first","_last",e._sort?"_start":0),jp(t)||(e._recent=t),r||t1(e,t),e._ts<0&&ud(e,e._tTime),e},n1=function(e,t){return(Ji.ScrollTrigger||i_("scrollTrigger",t))&&Ji.ScrollTrigger.create(t,e)},i1=function(e,t,n,r,a){if(l_(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!li&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$x!==$i.frame)return Js.push(e),e._lazy=[a,r],1},HM=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},jp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},VM=function(e,t,n,r){var a=e.ratio,u=t<0||!t&&(!e._start&&HM(e)&&!(!e._initted&&jp(e))||(e._ts<0||e._dp._ts<0)&&!jp(e))?0:1,c=e._rDelay,d=0,h,p,_;if(c&&e._repeat&&(d=Vu(0,e._tDur,t),p=ul(d,c),e._yoyo&&p&1&&(u=1-u),p!==ul(e._tTime,c)&&(a=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==a||li||r||e._zTime===nn||!t&&e._zTime){if(!e._initted&&i1(e,t,r,n,d))return;for(_=e._zTime,e._zTime=t||(n?nn:0),n||(n=t&&!_),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=d,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&Xp(e,t,n,!0),e._onUpdate&&!n&&Zi(e,"onUpdate"),d&&e._repeat&&!n&&e.parent&&Zi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&ro(e,1),!n&&!li&&(Zi(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},GM=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},cl=function(e,t,n,r){var a=e._repeat,u=Gn(t)||0,c=e._tTime/e._tDur;return c&&!r&&(e._time*=u/e._dur),e._dur=u,e._tDur=a?a<0?1e10:Gn(u*(a+1)+e._rDelay*a):u,c>0&&!r&&ud(e,e._tTime=e._tDur*c),e.parent&&ld(e),n||Xo(e.parent,e),e},hv=function(e){return e instanceof Si?Xo(e):cl(e,e._dur)},WM={_start:0,endTime:Du,totalDuration:Du},ar=function o(e,t,n){var r=e.labels,a=e._recent||WM,u=e.duration()>=dr?a.endTime(!1):e._dur,c,d,h;return Wn(t)&&(isNaN(t)||t in r)?(d=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),d==="<"||d===">"?(c>=0&&(t=t.replace(/=/,"")),(d==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?a:n).totalDuration()/100:1)):c<0?(t in r||(r[t]=u),r[t]):(d=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&n&&(d=d/100*(ui(n)?n[0]:n).totalDuration()),c>1?o(e,t.substr(0,c-1),n)+d:u+d)):t==null?u:+t},xu=function(e,t,n){var r=vs(t[1]),a=(r?2:1)+(e<2?0:1),u=t[a],c,d;if(r&&(u.duration=t[1]),u.parent=n,e){for(c=u,d=n;d&&!("immediateRender"in c);)c=d.vars.defaults||{},d=Ii(d.vars.inherit)&&d.parent;u.immediateRender=Ii(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[a-1]}return new bn(t[0],u,t[a+1])},uo=function(e,t){return e||e===0?t(e):t},Vu=function(e,t,n){return n<e?e:n>t?t:n},ai=function(e,t){return!Wn(e)||!(t=IM.exec(e))?"":t[1]},XM=function(e,t,n){return uo(n,function(r){return Vu(e,t,r)})},Yp=[].slice,r1=function(e,t){return e&&Yr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Yr(e[0]))&&!e.nodeType&&e!==Fr},jM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var a;return Wn(r)&&!t||r1(r,1)?(a=n).push.apply(a,hr(r)):n.push(r)})||n},hr=function(e,t,n){return cn&&!t&&cn.selector?cn.selector(e):Wn(e)&&!n&&(Gp||!fl())?Yp.call((t||n_).querySelectorAll(e),0):ui(e)?jM(e,n):r1(e)?Yp.call(e,0):e?[e]:[]},qp=function(e){return e=hr(e)[0]||Pu("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return hr(t,n.querySelectorAll?n:n===e?Pu("Invalid scope")||n_.createElement("div"):e)}},s1=function(e){return e.sort(function(){return .5-Math.random()})},o1=function(e){if(xn(e))return e;var t=Yr(e)?e:{each:e},n=jo(t.ease),r=t.from||0,a=parseFloat(t.base)||0,u={},c=r>0&&r<1,d=isNaN(r)||c,h=t.axis,p=r,_=r;return Wn(r)?p=_={center:.5,edges:.5,end:1}[r]||0:!c&&d&&(p=r[0],_=r[1]),function(g,v,E){var M=(E||t).length,S=u[M],y,L,P,w,F,U,D,O,C;if(!S){if(C=t.grid==="auto"?0:(t.grid||[1,dr])[1],!C){for(D=-dr;D<(D=E[C++].getBoundingClientRect().left)&&C<M;);C<M&&C--}for(S=u[M]=[],y=d?Math.min(C,M)*p-.5:r%C,L=C===dr?0:d?M*_/C-.5:r/C|0,D=0,O=dr,U=0;U<M;U++)P=U%C-y,w=L-(U/C|0),S[U]=F=h?Math.abs(h==="y"?w:P):Hx(P*P+w*w),F>D&&(D=F),F<O&&(O=F);r==="random"&&s1(S),S.max=D-O,S.min=O,S.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(C>M?M-1:h?h==="y"?M/C:C:Math.max(C,M/C))||0)*(r==="edges"?-1:1),S.b=M<0?a-M:a,S.u=ai(t.amount||t.each)||0,n=n&&M<0?_1(n):n}return M=(S[g]-S.min)/S.max||0,Gn(S.b+(n?n(M):M)*S.v)+S.u}},$p=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Gn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(vs(n)?0:ai(n))}},a1=function(e,t){var n=ui(e),r,a;return!n&&Yr(e)&&(r=n=e.radius||dr,e.values?(e=hr(e.values),(a=!vs(e[0]))&&(r*=r)):e=$p(e.increment)),uo(t,n?xn(e)?function(u){return a=e(u),Math.abs(a-u)<=r?a:u}:function(u){for(var c=parseFloat(a?u.x:u),d=parseFloat(a?u.y:0),h=dr,p=0,_=e.length,g,v;_--;)a?(g=e[_].x-c,v=e[_].y-d,g=g*g+v*v):g=Math.abs(e[_]-c),g<h&&(h=g,p=_);return p=!r||h<=r?e[p]:u,a||p===u||vs(u)?p:p+ai(u)}:$p(e))},l1=function(e,t,n,r){return uo(ui(e)?!t:n===!0?!!(n=0):!r,function(){return ui(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},YM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(a,u){return u(a)},r)}},qM=function(e,t){return function(n){return e(parseFloat(n))+(t||ai(n))}},$M=function(e,t,n){return c1(e,t,0,1,n)},u1=function(e,t,n){return uo(n,function(r){return e[~~t(r)]})},KM=function o(e,t,n){var r=t-e;return ui(e)?u1(e,o(0,e.length),t):uo(n,function(a){return(r+(a-e)%r)%r+e})},ZM=function o(e,t,n){var r=t-e,a=r*2;return ui(e)?u1(e,o(0,e.length-1),t):uo(n,function(u){return u=(a+(u-e)%a)%a||0,e+(u>r?a-u:u)})},Lu=function(e){for(var t=0,n="",r,a,u,c;~(r=e.indexOf("random(",t));)u=e.indexOf(")",r),c=e.charAt(r+7)==="[",a=e.substr(r+7,u-r-7).match(c?Xx:Vp),n+=e.substr(t,r-t)+l1(c?a:+a[0],c?0:+a[1],+a[2]||1e-5),t=u+1;return n+e.substr(t,e.length-t)},c1=function(e,t,n,r,a){var u=t-e,c=r-n;return uo(a,function(d){return n+((d-e)/u*c||0)})},QM=function o(e,t,n,r){var a=isNaN(e+t)?0:function(v){return(1-v)*e+v*t};if(!a){var u=Wn(e),c={},d,h,p,_,g;if(n===!0&&(r=1)&&(n=null),u)e={p:e},t={p:t};else if(ui(e)&&!ui(t)){for(p=[],_=e.length,g=_-2,h=1;h<_;h++)p.push(o(e[h-1],e[h]));_--,a=function(E){E*=_;var M=Math.min(g,~~E);return p[M](E-M)},n=t}else r||(e=Qo(ui(e)?[]:{},e));if(!p){for(d in t)a_.call(c,e,d,"get",t[d]);a=function(E){return f_(E,c)||(u?e.p:e)}}}return uo(n,a)},pv=function(e,t,n){var r=e.labels,a=dr,u,c,d;for(u in r)c=r[u]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(d=u,a=c);return d},Zi=function(e,t,n){var r=e.vars,a=r[t],u=cn,c=e._ctx,d,h,p;if(a)return d=r[t+"Params"],h=r.callbackScope||e,n&&Js.length&&qf(),c&&(cn=c),p=d?a.apply(h,d):a.call(h),cn=u,p},cu=function(e){return ro(e),e.scrollTrigger&&e.scrollTrigger.kill(!!li),e.progress()<1&&Zi(e,"onInterrupt"),e},Ka,f1=[],d1=function(e){if(e)if(e=!e.name&&e.default||e,t_()||e.headless){var t=e.name,n=xn(e),r=t&&!n&&e.init?function(){this._props=[]}:e,a={init:Du,render:f_,add:a_,kill:pE,modifier:hE,rawVars:0},u={targetTest:0,get:0,getSetter:c_,aliases:{},register:0};if(fl(),e!==r){if(qi[t])return;_r(r,_r($f(e,a),u)),Qo(r.prototype,Qo(a,$f(e,u))),qi[r.prop=t]=r,e.targetTest&&(If.push(r),r_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qx(t,r),e.register&&e.register(zi,r,Ni)}else f1.push(e)},Jt=255,fu={aqua:[0,Jt,Jt],lime:[0,Jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Jt],navy:[0,0,128],white:[Jt,Jt,Jt],olive:[128,128,0],yellow:[Jt,Jt,0],orange:[Jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Jt,0,0],pink:[Jt,192,203],cyan:[0,Jt,Jt],transparent:[Jt,Jt,Jt,0]},Zh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Jt+.5|0},h1=function(e,t,n){var r=e?vs(e)?[e>>16,e>>8&Jt,e&Jt]:0:fu.black,a,u,c,d,h,p,_,g,v,E;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fu[e])r=fu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+a+a+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Jt,r&Jt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Jt,e&Jt]}else if(e.substr(0,3)==="hsl"){if(r=E=e.match(Vp),!t)d=+r[0]%360/360,h=+r[1]/100,p=+r[2]/100,u=p<=.5?p*(h+1):p+h-p*h,a=p*2-u,r.length>3&&(r[3]*=1),r[0]=Zh(d+1/3,a,u),r[1]=Zh(d,a,u),r[2]=Zh(d-1/3,a,u);else if(~e.indexOf("="))return r=e.match(Gx),n&&r.length<4&&(r[3]=1),r}else r=e.match(Vp)||fu.transparent;r=r.map(Number)}return t&&!E&&(a=r[0]/Jt,u=r[1]/Jt,c=r[2]/Jt,_=Math.max(a,u,c),g=Math.min(a,u,c),p=(_+g)/2,_===g?d=h=0:(v=_-g,h=p>.5?v/(2-_-g):v/(_+g),d=_===a?(u-c)/v+(u<c?6:0):_===u?(c-a)/v+2:(a-u)/v+4,d*=60),r[0]=~~(d+.5),r[1]=~~(h*100+.5),r[2]=~~(p*100+.5)),n&&r.length<4&&(r[3]=1),r},p1=function(e){var t=[],n=[],r=-1;return e.split(eo).forEach(function(a){var u=a.match($a)||[];t.push.apply(t,u),n.push(r+=u.length+1)}),t.c=n,t},mv=function(e,t,n){var r="",a=(e+r).match(eo),u=t?"hsla(":"rgba(",c=0,d,h,p,_;if(!a)return e;if(a=a.map(function(g){return(g=h1(g,t,1))&&u+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),n&&(p=p1(e),d=n.c,d.join(r)!==p.c.join(r)))for(h=e.replace(eo,"1").split($a),_=h.length-1;c<_;c++)r+=h[c]+(~d.indexOf(c)?a.shift()||u+"0,0,0,0)":(p.length?p:a.length?a:n).shift());if(!h)for(h=e.split(eo),_=h.length-1;c<_;c++)r+=h[c]+a[c];return r+h[_]},eo=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fu)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),JM=/hsl[a]?\(/,m1=function(e){var t=e.join(" "),n;if(eo.lastIndex=0,eo.test(t))return n=JM.test(t),e[1]=mv(e[1],n),e[0]=mv(e[0],n,p1(e[1])),!0},Iu,$i=function(){var o=Date.now,e=500,t=33,n=o(),r=n,a=1e3/240,u=a,c=[],d,h,p,_,g,v,E=function M(S){var y=o()-r,L=S===!0,P,w,F,U;if((y>e||y<0)&&(n+=y-t),r+=y,F=r-n,P=F-u,(P>0||L)&&(U=++_.frame,g=F-_.time*1e3,_.time=F=F/1e3,u+=P+(P>=a?4:a-P),w=1),L||(d=h(M)),w)for(v=0;v<c.length;v++)c[v](F,g,U,S)};return _={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return g/(1e3/(S||60))},wake:function(){jx&&(!Gp&&t_()&&(Fr=Gp=window,n_=Fr.document||{},Ji.gsap=zi,(Fr.gsapVersions||(Fr.gsapVersions=[])).push(zi.version),Yx(Yf||Fr.GreenSockGlobals||!Fr.gsap&&Fr||{}),f1.forEach(d1)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&_.sleep(),h=p||function(S){return setTimeout(S,u-_.time*1e3+1|0)},Iu=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(d),Iu=0,h=Du},lagSmoothing:function(S,y){e=S||1/0,t=Math.min(y||33,e)},fps:function(S){a=1e3/(S||240),u=_.time*1e3+a},add:function(S,y,L){var P=y?function(w,F,U,D){S(w,F,U,D),_.remove(P)}:S;return _.remove(S),c[L?"unshift":"push"](P),fl(),P},remove:function(S,y){~(y=c.indexOf(S))&&c.splice(y,1)&&v>=y&&v--},_listeners:c},_}(),fl=function(){return!Iu&&$i.wake()},kt={},eE=/^[\d.\-M][\d.\-,\s]/,tE=/["']/g,nE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],a=1,u=n.length,c,d,h;a<u;a++)d=n[a],c=a!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,c),t[r]=isNaN(h)?h.replace(tE,"").trim():+h,r=d.substr(c+1).trim();return t},iE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},rE=function(e){var t=(e+"").split("("),n=kt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[nE(t[1])]:iE(e).split(",").map(Qx)):kt._CE&&eE.test(e)?kt._CE("",e):n},_1=function(e){return function(t){return 1-e(1-t)}},g1=function o(e,t){for(var n=e._first,r;n;)n instanceof Si?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},jo=function(e,t){return e&&(xn(e)?e:kt[e]||rE(e))||t},sa=function(e,t,n,r){n===void 0&&(n=function(d){return 1-t(1-d)}),r===void 0&&(r=function(d){return d<.5?t(d*2)/2:1-t((1-d)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:r},u;return Ui(e,function(c){kt[c]=Ji[c]=a,kt[u=c.toLowerCase()]=n;for(var d in a)kt[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=kt[c+"."+d]=a[d]}),a},v1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Qh=function o(e,t,n){var r=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),u=a/Hp*(Math.asin(1/r)||0),c=function(p){return p===1?1:r*Math.pow(2,-10*p)*LM((p-u)*a)+1},d=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:v1(c);return a=Hp/a,d.config=function(h,p){return o(e,h,p)},d},Jh=function o(e,t){t===void 0&&(t=1.70158);var n=function(u){return u?--u*u*((t+1)*u+t)+1:0},r=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:v1(n);return r.config=function(a){return o(e,a)},r};Ui("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;sa(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});kt.Linear.easeNone=kt.none=kt.Linear.easeIn;sa("Elastic",Qh("in"),Qh("out"),Qh());(function(o,e){var t=1/e,n=2*t,r=2.5*t,a=function(c){return c<t?o*c*c:c<n?o*Math.pow(c-1.5/e,2)+.75:c<r?o*(c-=2.25/e)*c+.9375:o*Math.pow(c-2.625/e,2)+.984375};sa("Bounce",function(u){return 1-a(1-u)},a)})(7.5625,2.75);sa("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});sa("Circ",function(o){return-(Hx(1-o*o)-1)});sa("Sine",function(o){return o===1?1:-DM(o*bM)+1});sa("Back",Jh("in"),Jh("out"),Jh());kt.SteppedEase=kt.steps=Ji.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),a=t?1:0,u=1-nn;return function(c){return((r*Vu(0,u,c)|0)+a)*n}}};ll.ease=kt["quad.out"];Ui("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return s_+=o+","+o+"Params,"});var x1=function(e,t){this.id=PM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Kx,this.set=t?t.getSetter:c_},Uu=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,cl(this,+t.duration,1,1),this.data=t.data,cn&&(this._ctx=cn,cn.data.push(this)),Iu||$i.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,cl(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(fl(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(ud(this,n),!a._dp||a.parent||t1(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===nn||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zx(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+dv(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+dv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?ul(this._tTime,a)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-nn?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?Kf(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-nn?0:this._rts,this.totalTime(Vu(-Math.abs(this._delay),this._tDur,a),r!==!1),ld(this),zM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==nn&&(this._tTime-=nn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&zr(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ii(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Kf(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=NM);var r=li;return li=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),li=r,this},e.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,hv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(ar(this,n),Ii(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Ii(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-nn:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-nn,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-nn)},e.eventCallback=function(n,r,a){var u=this.vars;return arguments.length>1?(r?(u[n]=r,a&&(u[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete u[n],this):u[n]},e.then=function(n){var r=this;return new Promise(function(a){var u=xn(n)?n:Jx,c=function(){var h=r.then;r.then=null,xn(u)&&(u=u(r))&&(u.then||u===r)&&(r.then=h),a(u),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?c():r._prom=c})},e.kill=function(){cu(this)},o}();_r(Uu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-nn,_prom:0,_ps:!1,_rts:1});var Si=function(o){Bx(e,o);function e(n,r){var a;return n===void 0&&(n={}),a=o.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=Ii(n.sortChildren),pn&&zr(n.parent||pn,us(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&n1(us(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,u){return xu(0,arguments,this),this},t.from=function(r,a,u){return xu(1,arguments,this),this},t.fromTo=function(r,a,u,c){return xu(2,arguments,this),this},t.set=function(r,a,u){return a.duration=0,a.parent=this,vu(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new bn(r,a,ar(this,u),1),this},t.call=function(r,a,u){return zr(this,bn.delayedCall(0,r,a),u)},t.staggerTo=function(r,a,u,c,d,h,p){return u.duration=a,u.stagger=u.stagger||c,u.onComplete=h,u.onCompleteParams=p,u.parent=this,new bn(r,u,ar(this,d)),this},t.staggerFrom=function(r,a,u,c,d,h,p){return u.runBackwards=1,vu(u).immediateRender=Ii(u.immediateRender),this.staggerTo(r,a,u,c,d,h,p)},t.staggerFromTo=function(r,a,u,c,d,h,p,_){return c.startAt=u,vu(c).immediateRender=Ii(c.immediateRender),this.staggerTo(r,a,c,d,h,p,_)},t.render=function(r,a,u){var c=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=r<=0?0:Gn(r),_=this._zTime<0!=r<0&&(this._initted||!h),g,v,E,M,S,y,L,P,w,F,U,D;if(this!==pn&&p>d&&r>=0&&(p=d),p!==this._tTime||u||_){if(c!==this._time&&h&&(p+=this._time-c,r+=this._time-c),g=p,w=this._start,P=this._ts,y=!P,_&&(h||(c=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(U=this._yoyo,S=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(S*100+r,a,u);if(g=Gn(p%S),p===d?(M=this._repeat,g=h):(M=~~(p/S),M&&M===p/S&&(g=h,M--),g>h&&(g=h)),F=ul(this._tTime,S),!c&&this._tTime&&F!==M&&this._tTime-F*S-this._dur<=0&&(F=M),U&&M&1&&(g=h-g,D=1),M!==F&&!this._lock){var O=U&&F&1,C=O===(U&&M&1);if(M<F&&(O=!O),c=O?0:p%h?h:p,this._lock=1,this.render(c||(D?0:Gn(M*S)),a,!h)._lock=0,this._tTime=p,!a&&this.parent&&Zi(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1),c&&c!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,C&&(this._lock=2,c=O?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;g1(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(L=GM(this,Gn(c),Gn(g)),L&&(p-=g-(g=L._start))),this._tTime=p,this._time=g,this._act=!P,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,c=0),!c&&g&&!a&&!M&&(Zi(this,"onStart"),this._tTime!==p))return this;if(g>=c&&r>=0)for(v=this._first;v;){if(E=v._next,(v._act||g>=v._start)&&v._ts&&L!==v){if(v.parent!==this)return this.render(r,a,u);if(v.render(v._ts>0?(g-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(g-v._start)*v._ts,a,u),g!==this._time||!this._ts&&!y){L=0,E&&(p+=this._zTime=-nn);break}}v=E}else{v=this._last;for(var T=r<0?r:g;v;){if(E=v._prev,(v._act||T<=v._end)&&v._ts&&L!==v){if(v.parent!==this)return this.render(r,a,u);if(v.render(v._ts>0?(T-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(T-v._start)*v._ts,a,u||li&&(v._initted||v._startAt)),g!==this._time||!this._ts&&!y){L=0,E&&(p+=this._zTime=T?-nn:nn);break}}v=E}}if(L&&!a&&(this.pause(),L.render(g>=c?0:-nn)._zTime=g>=c?1:-1,this._ts))return this._start=w,ld(this),this.render(r,a,u);this._onUpdate&&!a&&Zi(this,"onUpdate",!0),(p===d&&this._tTime>=this.totalDuration()||!p&&c)&&(w===this._start||Math.abs(P)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(p===d&&this._ts>0||!p&&this._ts<0)&&ro(this,1),!a&&!(r<0&&!c)&&(p||c||!d)&&(Zi(this,p===d&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<d&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var u=this;if(vs(a)||(a=ar(this,a,r)),!(r instanceof Uu)){if(ui(r))return r.forEach(function(c){return u.add(c,a)}),this;if(Wn(r))return this.addLabel(r,a);if(xn(r))r=bn.delayedCall(0,r);else return this}return this!==r?zr(this,r,a):this},t.getChildren=function(r,a,u,c){r===void 0&&(r=!0),a===void 0&&(a=!0),u===void 0&&(u=!0),c===void 0&&(c=-dr);for(var d=[],h=this._first;h;)h._start>=c&&(h instanceof bn?a&&d.push(h):(u&&d.push(h),r&&d.push.apply(d,h.getChildren(!0,a,u)))),h=h._next;return d},t.getById=function(r){for(var a=this.getChildren(1,1,1),u=a.length;u--;)if(a[u].vars.id===r)return a[u]},t.remove=function(r){return Wn(r)?this.removeLabel(r):xn(r)?this.killTweensOf(r):(ad(this,r),r===this._recent&&(this._recent=this._last),Xo(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gn($i.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=ar(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,u){var c=bn.delayedCall(0,a||Du,u);return c.data="isPause",this._hasPause=1,zr(this,c,ar(this,r))},t.removePause=function(r){var a=this._first;for(r=ar(this,r);a;)a._start===r&&a.data==="isPause"&&ro(a),a=a._next},t.killTweensOf=function(r,a,u){for(var c=this.getTweensOf(r,u),d=c.length;d--;)qs!==c[d]&&c[d].kill(r,a);return this},t.getTweensOf=function(r,a){for(var u=[],c=hr(r),d=this._first,h=vs(a),p;d;)d instanceof bn?FM(d._targets,c)&&(h?(!qs||d._initted&&d._ts)&&d.globalTime(0)<=a&&d.globalTime(d.totalDuration())>a:!a||d.isActive())&&u.push(d):(p=d.getTweensOf(c,a)).length&&u.push.apply(u,p),d=d._next;return u},t.tweenTo=function(r,a){a=a||{};var u=this,c=ar(u,r),d=a,h=d.startAt,p=d.onStart,_=d.onStartParams,g=d.immediateRender,v,E=bn.to(u,_r({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale())||nn,onStart:function(){if(u.pause(),!v){var S=a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale());E._dur!==S&&cl(E,S,0,1).render(E._time,!0,!0),v=1}p&&p.apply(E,_||[])}},a));return g?E.render(0):E},t.tweenFromTo=function(r,a,u){return this.tweenTo(a,_r({startAt:{time:ar(this,r)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),pv(this,ar(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),pv(this,ar(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+nn)},t.shiftChildren=function(r,a,u){u===void 0&&(u=0);for(var c=this._first,d=this.labels,h;c;)c._start>=u&&(c._start+=r,c._end+=r),c=c._next;if(a)for(h in d)d[h]>=u&&(d[h]+=r);return Xo(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return o.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,u;a;)u=a._next,this.remove(a),a=u;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Xo(this)},t.totalDuration=function(r){var a=0,u=this,c=u._last,d=dr,h,p,_;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-r:r));if(u._dirty){for(_=u.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>d&&u._sort&&c._ts&&!u._lock?(u._lock=1,zr(u,c,p-c._delay,1)._lock=0):d=p,p<0&&c._ts&&(a-=p,(!_&&!u._dp||_&&_.smoothChildTiming)&&(u._start+=p/u._ts,u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),d=0),c._end>a&&c._ts&&(a=c._end),c=h;cl(u,u===pn&&u._time>a?u._time:a,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(r){if(pn._ts&&(Zx(pn,Kf(r,pn)),$x=$i.frame),$i.frame>=cv){cv+=Qi.autoSleep||120;var a=pn._first;if((!a||!a._ts)&&Qi.autoSleep&&$i._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||$i.sleep()}}},e}(Uu);_r(Si.prototype,{_lock:0,_hasPause:0,_forcing:0});var sE=function(e,t,n,r,a,u,c){var d=new Ni(this._pt,e,t,0,1,w1,null,a),h=0,p=0,_,g,v,E,M,S,y,L;for(d.b=n,d.e=r,n+="",r+="",(y=~r.indexOf("random("))&&(r=Lu(r)),u&&(L=[n,r],u(L,e,t),n=L[0],r=L[1]),g=n.match($h)||[];_=$h.exec(r);)E=_[0],M=r.substring(h,_.index),v?v=(v+1)%5:M.substr(-5)==="rgba("&&(v=1),E!==g[p++]&&(S=parseFloat(g[p-1])||0,d._pt={_next:d._pt,p:M||p===1?M:",",s:S,c:E.charAt(1)==="="?Ja(S,E)-S:parseFloat(E)-S,m:v&&v<4?Math.round:0},h=$h.lastIndex);return d.c=h<r.length?r.substring(h,r.length):"",d.fp=c,(Wx.test(r)||y)&&(d.e=0),this._pt=d,d},a_=function(e,t,n,r,a,u,c,d,h,p){xn(r)&&(r=r(a||0,e,u));var _=e[t],g=n!=="get"?n:xn(_)?h?e[t.indexOf("set")||!xn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():_,v=xn(_)?h?cE:E1:u_,E;if(Wn(r)&&(~r.indexOf("random(")&&(r=Lu(r)),r.charAt(1)==="="&&(E=Ja(g,r)+(ai(g)||0),(E||E===0)&&(r=E))),!p||g!==r||Kp)return!isNaN(g*r)&&r!==""?(E=new Ni(this._pt,e,t,+g||0,r-(g||0),typeof _=="boolean"?dE:T1,0,v),h&&(E.fp=h),c&&E.modifier(c,this,e),this._pt=E):(!_&&!(t in e)&&i_(t,r),sE.call(this,e,t,g,r,v,d||Qi.stringFilter,h))},oE=function(e,t,n,r,a){if(xn(e)&&(e=yu(e,a,t,n,r)),!Yr(e)||e.style&&e.nodeType||ui(e)||Vx(e))return Wn(e)?yu(e,a,t,n,r):e;var u={},c;for(c in e)u[c]=yu(e[c],a,t,n,r);return u},y1=function(e,t,n,r,a,u){var c,d,h,p;if(qi[e]&&(c=new qi[e]).init(a,c.rawVars?t[e]:oE(t[e],r,a,u,n),n,r,u)!==!1&&(n._pt=d=new Ni(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==Ka))for(h=n._ptLookup[n._targets.indexOf(a)],p=c._props.length;p--;)h[c._props[p]]=d;return c},qs,Kp,l_=function o(e,t,n){var r=e.vars,a=r.ease,u=r.startAt,c=r.immediateRender,d=r.lazy,h=r.onUpdate,p=r.runBackwards,_=r.yoyoEase,g=r.keyframes,v=r.autoRevert,E=e._dur,M=e._startAt,S=e._targets,y=e.parent,L=y&&y.data==="nested"?y.vars.targets:S,P=e._overwrite==="auto"&&!Jm,w=e.timeline,F,U,D,O,C,T,B,Y,K,oe,ce,te,Q;if(w&&(!g||!a)&&(a="none"),e._ease=jo(a,ll.ease),e._yEase=_?_1(jo(_===!0?a:_,ll.ease)):0,_&&e._yoyo&&!e._repeat&&(_=e._yEase,e._yEase=e._ease,e._ease=_),e._from=!w&&!!r.runBackwards,!w||g&&!r.stagger){if(Y=S[0]?Wo(S[0]).harness:0,te=Y&&r[Y.prop],F=$f(r,r_),M&&(M._zTime<0&&M.progress(1),t<0&&p&&c&&!v?M.render(-1,!0):M.revert(p&&E?Lf:UM),M._lazy=0),u){if(ro(e._startAt=bn.set(S,_r({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!M&&Ii(d),startAt:null,delay:0,onUpdate:h&&function(){return Zi(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(li||!c&&!v)&&e._startAt.revert(Lf),c&&E&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(c=!1),D=_r({overwrite:!1,data:"isFromStart",lazy:c&&!M&&Ii(d),immediateRender:c,stagger:0,parent:y},F),te&&(D[Y.prop]=te),ro(e._startAt=bn.set(S,D)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(li?e._startAt.revert(Lf):e._startAt.render(-1,!0)),e._zTime=t,!c)o(e._startAt,nn,nn);else if(!t)return}for(e._pt=e._ptCache=0,d=E&&Ii(d)||d&&!E,U=0;U<S.length;U++){if(C=S[U],B=C._gsap||o_(S)[U]._gsap,e._ptLookup[U]=oe={},Wp[B.id]&&Js.length&&qf(),ce=L===S?U:L.indexOf(C),Y&&(K=new Y).init(C,te||F,e,ce,L)!==!1&&(e._pt=O=new Ni(e._pt,C,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(H){oe[H]=O}),K.priority&&(T=1)),!Y||te)for(D in F)qi[D]&&(K=y1(D,F,e,ce,C,L))?K.priority&&(T=1):oe[D]=O=a_.call(e,C,D,"get",F[D],ce,L,0,r.stringFilter);e._op&&e._op[U]&&e.kill(C,e._op[U]),P&&e._pt&&(qs=e,pn.killTweensOf(C,oe,e.globalTime(t)),Q=!e.parent,qs=0),e._pt&&d&&(Wp[B.id]=1)}T&&A1(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!Q,g&&t<=0&&w.render(dr,!0,!0)},aE=function(e,t,n,r,a,u,c,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,_,g,v;if(!h)for(h=e._ptCache[t]=[],g=e._ptLookup,v=e._targets.length;v--;){if(p=g[v][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return Kp=1,e.vars[t]="+=0",l_(e,c),Kp=0,d?Pu(t+" not eligible for reset"):1;h.push(p)}for(v=h.length;v--;)_=h[v],p=_._pt||_,p.s=(r||r===0)&&!a?r:p.s+(r||0)+u*p.c,p.c=n-p.s,_.e&&(_.e=En(n)+ai(_.e)),_.b&&(_.b=p.s+ai(_.b))},lE=function(e,t){var n=e[0]?Wo(e[0]).harness:0,r=n&&n.aliases,a,u,c,d;if(!r)return t;a=Qo({},t);for(u in r)if(u in a)for(d=r[u].split(","),c=d.length;c--;)a[d[c]]=a[u];return a},uE=function(e,t,n,r){var a=t.ease||r||"power1.inOut",u,c;if(ui(t))c=n[e]||(n[e]=[]),t.forEach(function(d,h){return c.push({t:h/(t.length-1)*100,v:d,e:a})});else for(u in t)c=n[u]||(n[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:a})},yu=function(e,t,n,r,a){return xn(e)?e.call(t,n,r,a):Wn(e)&&~e.indexOf("random(")?Lu(e):e},S1=s_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",M1={};Ui(S1+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return M1[o]=1});var bn=function(o){Bx(e,o);function e(n,r,a,u){var c;typeof r=="number"&&(a.duration=r,r=a,a=null),c=o.call(this,u?r:vu(r))||this;var d=c.vars,h=d.duration,p=d.delay,_=d.immediateRender,g=d.stagger,v=d.overwrite,E=d.keyframes,M=d.defaults,S=d.scrollTrigger,y=d.yoyoEase,L=r.parent||pn,P=(ui(n)||Vx(n)?vs(n[0]):"length"in r)?[n]:hr(n),w,F,U,D,O,C,T,B;if(c._targets=P.length?o_(P):Pu("GSAP target "+n+" not found. https://gsap.com",!Qi.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=v,E||g||Kc(h)||Kc(p)){if(r=c.vars,w=c.timeline=new Si({data:"nested",defaults:M||{},targets:L&&L.data==="nested"?L.vars.targets:P}),w.kill(),w.parent=w._dp=us(c),w._start=0,g||Kc(h)||Kc(p)){if(D=P.length,T=g&&o1(g),Yr(g))for(O in g)~S1.indexOf(O)&&(B||(B={}),B[O]=g[O]);for(F=0;F<D;F++)U=$f(r,M1),U.stagger=0,y&&(U.yoyoEase=y),B&&Qo(U,B),C=P[F],U.duration=+yu(h,us(c),F,C,P),U.delay=(+yu(p,us(c),F,C,P)||0)-c._delay,!g&&D===1&&U.delay&&(c._delay=p=U.delay,c._start+=p,U.delay=0),w.to(C,U,T?T(F,C,P):0),w._ease=kt.none;w.duration()?h=p=0:c.timeline=0}else if(E){vu(_r(w.vars.defaults,{ease:"none"})),w._ease=jo(E.ease||r.ease||"none");var Y=0,K,oe,ce;if(ui(E))E.forEach(function(te){return w.to(P,te,">")}),w.duration();else{U={};for(O in E)O==="ease"||O==="easeEach"||uE(O,E[O],U,E.easeEach);for(O in U)for(K=U[O].sort(function(te,Q){return te.t-Q.t}),Y=0,F=0;F<K.length;F++)oe=K[F],ce={ease:oe.e,duration:(oe.t-(F?K[F-1].t:0))/100*h},ce[O]=oe.v,w.to(P,ce,Y),Y+=ce.duration;w.duration()<h&&w.to({},{duration:h-w.duration()})}}h||c.duration(h=w.duration())}else c.timeline=0;return v===!0&&!Jm&&(qs=us(c),pn.killTweensOf(P),qs=0),zr(L,us(c),a),r.reversed&&c.reverse(),r.paused&&c.paused(!0),(_||!h&&!E&&c._start===Gn(L._time)&&Ii(_)&&BM(us(c))&&L.data!=="nested")&&(c._tTime=-nn,c.render(Math.max(0,-p)||0)),S&&n1(us(c),S),c}var t=e.prototype;return t.render=function(r,a,u){var c=this._time,d=this._tDur,h=this._dur,p=r<0,_=r>d-nn&&!p?d:r<nn?0:r,g,v,E,M,S,y,L,P,w;if(!h)VM(this,r,a,u);else if(_!==this._tTime||!r||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p){if(g=_,P=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+r,a,u);if(g=Gn(_%M),_===d?(E=this._repeat,g=h):(E=~~(_/M),E&&E===Gn(_/M)&&(g=h,E--),g>h&&(g=h)),y=this._yoyo&&E&1,y&&(w=this._yEase,g=h-g),S=ul(this._tTime,M),g===c&&!u&&this._initted&&E===S)return this._tTime=_,this;E!==S&&(P&&this._yEase&&g1(P,y),this.vars.repeatRefresh&&!y&&!this._lock&&this._time!==M&&this._initted&&(this._lock=u=1,this.render(Gn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(i1(this,p?r:g,u,a,_))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&E!==S))return this;if(h!==this._dur)return this.render(r,a,u)}if(this._tTime=_,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=L=(w||this._ease)(g/h),this._from&&(this.ratio=L=1-L),g&&!c&&!a&&!E&&(Zi(this,"onStart"),this._tTime!==_))return this;for(v=this._pt;v;)v.r(L,v.d),v=v._next;P&&P.render(r<0?r:P._dur*P._ease(g/this._dur),a,u)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(p&&Xp(this,r,a,u),Zi(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!a&&this.parent&&Zi(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(p&&!this._onUpdate&&Xp(this,r,!0,!0),(r||!h)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&ro(this,1),!a&&!(p&&!c)&&(_||c||y)&&(Zi(this,_===d?"onComplete":"onReverseComplete",!0),this._prom&&!(_<d&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,u,c,d){Iu||$i.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||l_(this,h),p=this._ease(h/this._dur),aE(this,r,a,u,c,p,h,d)?this.resetTo(r,a,u,c,1):(ud(this,0),this.parent||e1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?cu(this):this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,qs&&qs.vars.overwrite!==!0)._first||cu(this),this.parent&&u!==this.timeline.totalDuration()&&cl(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,d=r?hr(r):c,h=this._ptLookup,p=this._pt,_,g,v,E,M,S,y;if((!a||a==="all")&&kM(c,d))return a==="all"&&(this._pt=0),cu(this);for(_=this._op=this._op||[],a!=="all"&&(Wn(a)&&(M={},Ui(a,function(L){return M[L]=1}),a=M),a=lE(c,a)),y=c.length;y--;)if(~d.indexOf(c[y])){g=h[y],a==="all"?(_[y]=a,E=g,v={}):(v=_[y]=_[y]||{},E=a);for(M in E)S=g&&g[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&ad(this,S,"_pt"),delete g[M]),v!=="all"&&(v[M]=1)}return this._initted&&!this._pt&&p&&cu(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return xu(1,arguments)},e.delayedCall=function(r,a,u,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(r,a,u){return xu(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,u){return pn.killTweensOf(r,a,u)},e}(Uu);_r(bn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ui("staggerTo,staggerFrom,staggerFromTo",function(o){bn[o]=function(){var e=new Si,t=Yp.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var u_=function(e,t,n){return e[t]=n},E1=function(e,t,n){return e[t](n)},cE=function(e,t,n,r){return e[t](r.fp,n)},fE=function(e,t,n){return e.setAttribute(t,n)},c_=function(e,t){return xn(e[t])?E1:e_(e[t])&&e.setAttribute?fE:u_},T1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},dE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},w1=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},f_=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},hE=function(e,t,n,r){for(var a=this._pt,u;a;)u=a._next,a.p===r&&a.modifier(e,t,n),a=u},pE=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?ad(this,t,"_pt"):t.dep||(n=1),t=r;return!n},mE=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},A1=function(e){for(var t=e._pt,n,r,a,u;t;){for(n=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:u)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:u=t,t=n}e._pt=a},Ni=function(){function o(t,n,r,a,u,c,d,h,p){this.t=n,this.s=a,this.c=u,this.p=r,this.r=c||T1,this.d=d||this,this.set=h||u_,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=mE,this.m=n,this.mt=a,this.tween=r},o}();Ui(s_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return r_[o]=1});Ji.TweenMax=Ji.TweenLite=bn;Ji.TimelineLite=Ji.TimelineMax=Si;pn=new Si({sortChildren:!1,defaults:ll,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qi.stringFilter=m1;var Yo=[],Uf={},_E=[],_v=0,gE=0,ep=function(e){return(Uf[e]||_E).map(function(t){return t()})},Zp=function(){var e=Date.now(),t=[];e-_v>2&&(ep("matchMediaInit"),Yo.forEach(function(n){var r=n.queries,a=n.conditions,u,c,d,h;for(c in r)u=Fr.matchMedia(r[c]).matches,u&&(d=1),u!==a[c]&&(a[c]=u,h=1);h&&(n.revert(),d&&t.push(n))}),ep("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),_v=e,ep("matchMedia"))},C1=function(){function o(t,n){this.selector=n&&qp(n),this.data=[],this._r=[],this.isReverted=!1,this.id=gE++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,r,a){xn(n)&&(a=r,r=n,n=xn);var u=this,c=function(){var h=cn,p=u.selector,_;return h&&h!==u&&h.data.push(u),a&&(u.selector=qp(a)),cn=u,_=r.apply(u,arguments),xn(_)&&u._r.push(_),cn=h,u.selector=p,u.isReverted=!1,_};return u.last=c,n===xn?c(u,function(d){return u.add(null,d)}):n?u[n]=c:c},e.ignore=function(n){var r=cn;cn=null,n(this),cn=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof o?n.push.apply(n,r.getTweens()):r instanceof bn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var a=this;if(n?function(){for(var c=a.getTweens(),d=a.data.length,h;d--;)h=a.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,_){return _.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),d=a.data.length;d--;)h=a.data[d],h instanceof Si?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof bn)&&h.revert&&h.revert(n);a._r.forEach(function(p){return p(n,a)}),a.isReverted=!0}():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),r)for(var u=Yo.length;u--;)Yo[u].id===this.id&&Yo.splice(u,1)},e.revert=function(n){this.kill(n||{})},o}(),vE=function(){function o(t){this.contexts=[],this.scope=t,cn&&cn.data.push(this)}var e=o.prototype;return e.add=function(n,r,a){Yr(n)||(n={matches:n});var u=new C1(0,a||this.scope),c=u.conditions={},d,h,p;cn&&!u.selector&&(u.selector=cn.selector),this.contexts.push(u),r=u.add("onMatch",r),u.queries=n;for(h in n)h==="all"?p=1:(d=Fr.matchMedia(n[h]),d&&(Yo.indexOf(u)<0&&Yo.push(u),(c[h]=d.matches)&&(p=1),d.addListener?d.addListener(Zp):d.addEventListener("change",Zp)));return p&&r(u,function(_){return u.add(null,_)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},o}(),Zf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return d1(r)})},timeline:function(e){return new Si(e)},getTweensOf:function(e,t){return pn.getTweensOf(e,t)},getProperty:function(e,t,n,r){Wn(e)&&(e=hr(e)[0]);var a=Wo(e||{}).get,u=n?Jx:Qx;return n==="native"&&(n=""),e&&(t?u((qi[t]&&qi[t].get||a)(e,t,n,r)):function(c,d,h){return u((qi[c]&&qi[c].get||a)(e,c,d,h))})},quickSetter:function(e,t,n){if(e=hr(e),e.length>1){var r=e.map(function(p){return zi.quickSetter(p,t,n)}),a=r.length;return function(p){for(var _=a;_--;)r[_](p)}}e=e[0]||{};var u=qi[t],c=Wo(e),d=c.harness&&(c.harness.aliases||{})[t]||t,h=u?function(p){var _=new u;Ka._pt=0,_.init(e,n?p+n:p,Ka,0,[e]),_.render(1,_),Ka._pt&&f_(1,Ka)}:c.set(e,d);return u?h:function(p){return h(e,d,n?p+n:p,c,1)}},quickTo:function(e,t,n){var r,a=zi.to(e,Qo((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),u=function(d,h,p){return a.resetTo(t,d,h,p)};return u.tween=a,u},isTweening:function(e){return pn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=jo(e.ease,ll.ease)),fv(ll,e||{})},config:function(e){return fv(Qi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,a=e.defaults,u=e.extendTimeline;(r||"").split(",").forEach(function(c){return c&&!qi[c]&&!Ji[c]&&Pu(t+" effect requires "+c+" plugin.")}),Kh[t]=function(c,d,h){return n(hr(c),_r(d||{},a),h)},u&&(Si.prototype[t]=function(c,d,h){return this.add(Kh[t](c,Yr(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,t){kt[e]=jo(t)},parseEase:function(e,t){return arguments.length?jo(e,t):kt},getById:function(e){return pn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Si(e),r,a;for(n.smoothChildTiming=Ii(e.smoothChildTiming),pn.remove(n),n._dp=0,n._time=n._tTime=pn._time,r=pn._first;r;)a=r._next,(t||!(!r._dur&&r instanceof bn&&r.vars.onComplete===r._targets[0]))&&zr(n,r,r._start-r._delay),r=a;return zr(pn,n,0),n},context:function(e,t){return e?new C1(e,t):cn},matchMedia:function(e){return new vE(e)},matchMediaRefresh:function(){return Yo.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Zp()},addEventListener:function(e,t){var n=Uf[e]||(Uf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Uf[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:KM,wrapYoyo:ZM,distribute:o1,random:l1,snap:a1,normalize:$M,getUnit:ai,clamp:XM,splitColor:h1,toArray:hr,selector:qp,mapRange:c1,pipe:YM,unitize:qM,interpolate:QM,shuffle:s1},install:Yx,effects:Kh,ticker:$i,updateRoot:Si.updateRoot,plugins:qi,globalTimeline:pn,core:{PropTween:Ni,globals:qx,Tween:bn,Timeline:Si,Animation:Uu,getCache:Wo,_removeLinkedListItem:ad,reverting:function(){return li},context:function(e){return e&&cn&&(cn.data.push(e),e._ctx=cn),cn},suppressOverwrites:function(e){return Jm=e}}};Ui("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Zf[o]=bn[o]});$i.add(Si.updateRoot);Ka=Zf.to({},{duration:0});var xE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},yE=function(e,t){var n=e._targets,r,a,u;for(r in t)for(a=n.length;a--;)u=e._ptLookup[a][r],u&&(u=u.d)&&(u._pt&&(u=xE(u,r)),u&&u.modifier&&u.modifier(t[r],e,n[a],r))},tp=function(e,t){return{name:e,rawVars:1,init:function(r,a,u){u._onInit=function(c){var d,h;if(Wn(a)&&(d={},Ui(a,function(p){return d[p]=1}),a=d),t){d={};for(h in a)d[h]=t(a[h]);a=d}yE(c,a)}}}},zi=Zf.registerPlugin({name:"attr",init:function(e,t,n,r,a){var u,c,d;this.tween=n;for(u in t)d=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(d||0)+"",t[u],r,a,0,0,u),c.op=u,c.b=d,this._props.push(u)},render:function(e,t){for(var n=t._pt;n;)li?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},tp("roundProps",$p),tp("modifiers"),tp("snap",a1))||Zf;bn.version=Si.version=zi.version="3.12.5";jx=1;t_()&&fl();kt.Power0;kt.Power1;kt.Power2;kt.Power3;kt.Power4;kt.Linear;kt.Quad;kt.Cubic;kt.Quart;kt.Quint;kt.Strong;kt.Elastic;kt.Back;kt.SteppedEase;kt.Bounce;kt.Sine;kt.Expo;kt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var gv,$s,el,d_,Bo,vv,h_,SE=function(){return typeof window<"u"},xs={},Io=180/Math.PI,tl=Math.PI/180,ba=Math.atan2,xv=1e8,p_=/([A-Z])/g,ME=/(left|right|width|margin|padding|x)/i,EE=/[\s,\(]\S/,Br={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},TE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},AE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},R1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},b1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},CE=function(e,t,n){return e.style[t]=n},RE=function(e,t,n){return e.style.setProperty(t,n)},bE=function(e,t,n){return e._gsap[t]=n},PE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},DE=function(e,t,n,r,a){var u=e._gsap;u.scaleX=u.scaleY=n,u.renderTransform(a,u)},LE=function(e,t,n,r,a){var u=e._gsap;u[t]=n,u.renderTransform(a,u)},mn="transform",Fi=mn+"Origin",IE=function o(e,t){var n=this,r=this.target,a=r.style,u=r._gsap;if(e in xs&&a){if(this.tfm=this.tfm||{},e!=="transform")e=Br[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=cs(r,c)}):this.tfm[e]=u.x?u[e]:cs(r,e),e===Fi&&(this.tfm.zOrigin=u.zOrigin);else return Br.transform.split(",").forEach(function(c){return o.call(n,c,t)});if(this.props.indexOf(mn)>=0)return;u.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Fi,t,"")),e=mn}(a||t)&&this.props.push(e,t,a[e])},P1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},UE=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,a,u;for(a=0;a<e.length;a+=3)e[a+1]?t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(p_,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)r[u]=this.tfm[u];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=h_(),(!a||!a.isStart)&&!n[mn]&&(P1(n),r.zOrigin&&n[Fi]&&(n[Fi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},D1=function(e,t){var n={target:e,props:[],revert:UE,save:IE};return e._gsap||zi.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},L1,Jp=function(e,t){var n=$s.createElementNS?$s.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):$s.createElement(e);return n&&n.style?n:$s.createElement(e)},Wr=function o(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(p_,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&o(e,dl(t)||t,1)||""},yv="O,Moz,ms,Ms,Webkit".split(","),dl=function(e,t,n){var r=t||Bo,a=r.style,u=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(yv[u]+e in a););return u<0?null:(u===3?"ms":u>=0?yv[u]:"")+e},em=function(){SE()&&window.document&&(gv=window,$s=gv.document,el=$s.documentElement,Bo=Jp("div")||{style:{}},Jp("div"),mn=dl(mn),Fi=mn+"Origin",Bo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",L1=!!dl("perspective"),h_=zi.core.reverting,d_=1)},np=function o(e){var t=Jp("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,a=this.style.cssText,u;if(el.appendChild(t),t.appendChild(this),this.style.display="block",e)try{u=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(u=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),el.removeChild(t),this.style.cssText=a,u},Sv=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},I1=function(e){var t;try{t=e.getBBox()}catch{t=np.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===np||(t=np.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Sv(e,["x","cx","x1"])||0,y:+Sv(e,["y","cy","y1"])||0,width:0,height:0}:t},U1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&I1(e))},Jo=function(e,t){if(t){var n=e.style,r;t in xs&&t!==Fi&&(t=mn),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(p_,"-$1").toLowerCase())):n.removeAttribute(t)}},Ks=function(e,t,n,r,a,u){var c=new Ni(e._pt,t,n,0,1,u?b1:R1);return e._pt=c,c.b=r,c.e=a,e._props.push(n),c},Mv={deg:1,rad:1,turn:1},NE={grid:1,flex:1},so=function o(e,t,n,r){var a=parseFloat(n)||0,u=(n+"").trim().substr((a+"").length)||"px",c=Bo.style,d=ME.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(d?"Width":"Height"),_=100,g=r==="px",v=r==="%",E,M,S,y;if(r===u||!a||Mv[r]||Mv[u])return a;if(u!=="px"&&!g&&(a=o(e,t,n,"px")),y=e.getCTM&&U1(e),(v||u==="%")&&(xs[t]||~t.indexOf("adius")))return E=y?e.getBBox()[d?"width":"height"]:e[p],En(v?a/E*_:a/100*E);if(c[d?"width":"height"]=_+(g?u:r),M=~t.indexOf("adius")||r==="em"&&e.appendChild&&!h?e:e.parentNode,y&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===$s||!M.appendChild)&&(M=$s.body),S=M._gsap,S&&v&&S.width&&d&&S.time===$i.time&&!S.uncache)return En(a/S.width*_);if(v&&(t==="height"||t==="width")){var L=e.style[t];e.style[t]=_+r,E=e[p],L?e.style[t]=L:Jo(e,t)}else(v||u==="%")&&!NE[Wr(M,"display")]&&(c.position=Wr(e,"position")),M===e&&(c.position="static"),M.appendChild(Bo),E=Bo[p],M.removeChild(Bo),c.position="absolute";return d&&v&&(S=Wo(M),S.time=$i.time,S.width=M[p]),En(g?E*a/_:E&&a?_/E*a:0)},cs=function(e,t,n,r){var a;return d_||em(),t in Br&&t!=="transform"&&(t=Br[t],~t.indexOf(",")&&(t=t.split(",")[0])),xs[t]&&t!=="transform"?(a=Fu(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:Jf(Wr(e,Fi))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=Qf[t]&&Qf[t](e,t,n)||Wr(e,t)||Kx(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?so(e,t,a,n)+n:a},FE=function(e,t,n,r){if(!n||n==="none"){var a=dl(t,e,1),u=a&&Wr(e,a,1);u&&u!==n?(t=a,n=u):t==="borderColor"&&(n=Wr(e,"borderTopColor"))}var c=new Ni(this._pt,e.style,t,0,1,w1),d=0,h=0,p,_,g,v,E,M,S,y,L,P,w,F;if(c.b=n,c.e=r,n+="",r+="",r==="auto"&&(M=e.style[t],e.style[t]=r,r=Wr(e,t)||r,M?e.style[t]=M:Jo(e,t)),p=[n,r],m1(p),n=p[0],r=p[1],g=n.match($a)||[],F=r.match($a)||[],F.length){for(;_=$a.exec(r);)S=_[0],L=r.substring(d,_.index),E?E=(E+1)%5:(L.substr(-5)==="rgba("||L.substr(-5)==="hsla(")&&(E=1),S!==(M=g[h++]||"")&&(v=parseFloat(M)||0,w=M.substr((v+"").length),S.charAt(1)==="="&&(S=Ja(v,S)+w),y=parseFloat(S),P=S.substr((y+"").length),d=$a.lastIndex-P.length,P||(P=P||Qi.units[t]||w,d===r.length&&(r+=P,c.e+=P)),w!==P&&(v=so(e,t,M,P)||0),c._pt={_next:c._pt,p:L||h===1?L:",",s:v,c:y-v,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=d<r.length?r.substring(d,r.length):""}else c.r=t==="display"&&r==="none"?b1:R1;return Wx.test(r)&&(c.e=0),this._pt=c,c},Ev={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},OE=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Ev[n]||n,t[1]=Ev[r]||r,t.join(" ")},kE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,a=t.u,u=n._gsap,c,d,h;if(a==="all"||a===!0)r.cssText="",d=1;else for(a=a.split(","),h=a.length;--h>-1;)c=a[h],xs[c]&&(d=1,c=c==="transformOrigin"?Fi:mn),Jo(n,c);d&&(Jo(n,mn),u&&(u.svg&&n.removeAttribute("transform"),Fu(n,1),u.uncache=1,P1(r)))}},Qf={clearProps:function(e,t,n,r,a){if(a.data!=="isFromStart"){var u=e._pt=new Ni(e._pt,t,n,0,0,kE);return u.u=r,u.pr=-10,u.tween=a,e._props.push(n),1}}},Nu=[1,0,0,1,0,0],N1={},F1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Tv=function(e){var t=Wr(e,mn);return F1(t)?Nu:t.substr(7).match(Gx).map(En)},m_=function(e,t){var n=e._gsap||Wo(e),r=e.style,a=Tv(e),u,c,d,h;return n.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,a=[d.a,d.b,d.c,d.d,d.e,d.f],a.join(",")==="1,0,0,1,0,0"?Nu:a):(a===Nu&&!e.offsetParent&&e!==el&&!n.svg&&(d=r.display,r.display="block",u=e.parentNode,(!u||!e.offsetParent)&&(h=1,c=e.nextElementSibling,el.appendChild(e)),a=Tv(e),d?r.display=d:Jo(e,"display"),h&&(c?u.insertBefore(e,c):u?u.appendChild(e):el.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},tm=function(e,t,n,r,a,u){var c=e._gsap,d=a||m_(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,_=c.xOffset||0,g=c.yOffset||0,v=d[0],E=d[1],M=d[2],S=d[3],y=d[4],L=d[5],P=t.split(" "),w=parseFloat(P[0])||0,F=parseFloat(P[1])||0,U,D,O,C;n?d!==Nu&&(D=v*S-E*M)&&(O=w*(S/D)+F*(-M/D)+(M*L-S*y)/D,C=w*(-E/D)+F*(v/D)-(v*L-E*y)/D,w=O,F=C):(U=I1(e),w=U.x+(~P[0].indexOf("%")?w/100*U.width:w),F=U.y+(~(P[1]||P[0]).indexOf("%")?F/100*U.height:F)),r||r!==!1&&c.smooth?(y=w-h,L=F-p,c.xOffset=_+(y*v+L*M)-y,c.yOffset=g+(y*E+L*S)-L):c.xOffset=c.yOffset=0,c.xOrigin=w,c.yOrigin=F,c.smooth=!!r,c.origin=t,c.originIsAbsolute=!!n,e.style[Fi]="0px 0px",u&&(Ks(u,c,"xOrigin",h,w),Ks(u,c,"yOrigin",p,F),Ks(u,c,"xOffset",_,c.xOffset),Ks(u,c,"yOffset",g,c.yOffset)),e.setAttribute("data-svg-origin",w+" "+F)},Fu=function(e,t){var n=e._gsap||new x1(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,u="px",c="deg",d=getComputedStyle(e),h=Wr(e,Fi)||"0",p,_,g,v,E,M,S,y,L,P,w,F,U,D,O,C,T,B,Y,K,oe,ce,te,Q,H,le,I,k,re,Oe,Z,he;return p=_=g=M=S=y=L=P=w=0,v=E=1,n.svg=!!(e.getCTM&&U1(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(r[mn]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[mn]!=="none"?d[mn]:"")),r.scale=r.rotate=r.translate="none"),D=m_(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),h=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Q=""):Q=!t&&e.getAttribute("data-svg-origin"),tm(e,Q||h,!!Q||n.originIsAbsolute,n.smooth!==!1,D)),F=n.xOrigin||0,U=n.yOrigin||0,D!==Nu&&(B=D[0],Y=D[1],K=D[2],oe=D[3],p=ce=D[4],_=te=D[5],D.length===6?(v=Math.sqrt(B*B+Y*Y),E=Math.sqrt(oe*oe+K*K),M=B||Y?ba(Y,B)*Io:0,L=K||oe?ba(K,oe)*Io+M:0,L&&(E*=Math.abs(Math.cos(L*tl))),n.svg&&(p-=F-(F*B+U*K),_-=U-(F*Y+U*oe))):(he=D[6],Oe=D[7],I=D[8],k=D[9],re=D[10],Z=D[11],p=D[12],_=D[13],g=D[14],O=ba(he,re),S=O*Io,O&&(C=Math.cos(-O),T=Math.sin(-O),Q=ce*C+I*T,H=te*C+k*T,le=he*C+re*T,I=ce*-T+I*C,k=te*-T+k*C,re=he*-T+re*C,Z=Oe*-T+Z*C,ce=Q,te=H,he=le),O=ba(-K,re),y=O*Io,O&&(C=Math.cos(-O),T=Math.sin(-O),Q=B*C-I*T,H=Y*C-k*T,le=K*C-re*T,Z=oe*T+Z*C,B=Q,Y=H,K=le),O=ba(Y,B),M=O*Io,O&&(C=Math.cos(O),T=Math.sin(O),Q=B*C+Y*T,H=ce*C+te*T,Y=Y*C-B*T,te=te*C-ce*T,B=Q,ce=H),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,y=180-y),v=En(Math.sqrt(B*B+Y*Y+K*K)),E=En(Math.sqrt(te*te+he*he)),O=ba(ce,te),L=Math.abs(O)>2e-4?O*Io:0,w=Z?1/(Z<0?-Z:Z):0),n.svg&&(Q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!F1(Wr(e,mn)),Q&&e.setAttribute("transform",Q))),Math.abs(L)>90&&Math.abs(L)<270&&(a?(v*=-1,L+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,L+=L<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+u,n.y=_-((n.yPercent=_&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-_)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+u,n.z=g+u,n.scaleX=En(v),n.scaleY=En(E),n.rotation=En(M)+c,n.rotationX=En(S)+c,n.rotationY=En(y)+c,n.skewX=L+c,n.skewY=P+c,n.transformPerspective=w+u,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Fi]=Jf(h)),n.xOffset=n.yOffset=0,n.force3D=Qi.force3D,n.renderTransform=n.svg?BE:L1?O1:zE,n.uncache=0,n},Jf=function(e){return(e=e.split(" "))[0]+" "+e[1]},ip=function(e,t,n){var r=ai(t);return En(parseFloat(t)+parseFloat(so(e,"x",n+"px",r)))+r},zE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,O1(e,t)},wo="0deg",nu="0px",Ao=") ",O1=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,u=n.x,c=n.y,d=n.z,h=n.rotation,p=n.rotationY,_=n.rotationX,g=n.skewX,v=n.skewY,E=n.scaleX,M=n.scaleY,S=n.transformPerspective,y=n.force3D,L=n.target,P=n.zOrigin,w="",F=y==="auto"&&e&&e!==1||y===!0;if(P&&(_!==wo||p!==wo)){var U=parseFloat(p)*tl,D=Math.sin(U),O=Math.cos(U),C;U=parseFloat(_)*tl,C=Math.cos(U),u=ip(L,u,D*C*-P),c=ip(L,c,-Math.sin(U)*-P),d=ip(L,d,O*C*-P+P)}S!==nu&&(w+="perspective("+S+Ao),(r||a)&&(w+="translate("+r+"%, "+a+"%) "),(F||u!==nu||c!==nu||d!==nu)&&(w+=d!==nu||F?"translate3d("+u+", "+c+", "+d+") ":"translate("+u+", "+c+Ao),h!==wo&&(w+="rotate("+h+Ao),p!==wo&&(w+="rotateY("+p+Ao),_!==wo&&(w+="rotateX("+_+Ao),(g!==wo||v!==wo)&&(w+="skew("+g+", "+v+Ao),(E!==1||M!==1)&&(w+="scale("+E+", "+M+Ao),L.style[mn]=w||"translate(0, 0)"},BE=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,u=n.x,c=n.y,d=n.rotation,h=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,v=n.target,E=n.xOrigin,M=n.yOrigin,S=n.xOffset,y=n.yOffset,L=n.forceCSS,P=parseFloat(u),w=parseFloat(c),F,U,D,O,C;d=parseFloat(d),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,d+=p),d||h?(d*=tl,h*=tl,F=Math.cos(d)*_,U=Math.sin(d)*_,D=Math.sin(d-h)*-g,O=Math.cos(d-h)*g,h&&(p*=tl,C=Math.tan(h-p),C=Math.sqrt(1+C*C),D*=C,O*=C,p&&(C=Math.tan(p),C=Math.sqrt(1+C*C),F*=C,U*=C)),F=En(F),U=En(U),D=En(D),O=En(O)):(F=_,O=g,U=D=0),(P&&!~(u+"").indexOf("px")||w&&!~(c+"").indexOf("px"))&&(P=so(v,"x",u,"px"),w=so(v,"y",c,"px")),(E||M||S||y)&&(P=En(P+E-(E*F+M*D)+S),w=En(w+M-(E*U+M*O)+y)),(r||a)&&(C=v.getBBox(),P=En(P+r/100*C.width),w=En(w+a/100*C.height)),C="matrix("+F+","+U+","+D+","+O+","+P+","+w+")",v.setAttribute("transform",C),L&&(v.style[mn]=C)},HE=function(e,t,n,r,a){var u=360,c=Wn(a),d=parseFloat(a)*(c&&~a.indexOf("rad")?Io:1),h=d-r,p=r+h+"deg",_,g;return c&&(_=a.split("_")[1],_==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),_==="cw"&&h<0?h=(h+u*xv)%u-~~(h/u)*u:_==="ccw"&&h>0&&(h=(h-u*xv)%u-~~(h/u)*u)),e._pt=g=new Ni(e._pt,t,n,r,h,TE),g.e=p,g.u="deg",e._props.push(n),g},wv=function(e,t){for(var n in t)e[n]=t[n];return e},VE=function(e,t,n){var r=wv({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",u=n.style,c,d,h,p,_,g,v,E;r.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),u[mn]=t,c=Fu(n,1),Jo(n,mn),n.setAttribute("transform",h)):(h=getComputedStyle(n)[mn],u[mn]=t,c=Fu(n,1),u[mn]=h);for(d in xs)h=r[d],p=c[d],h!==p&&a.indexOf(d)<0&&(v=ai(h),E=ai(p),_=v!==E?so(n,d,h,E):parseFloat(h),g=parseFloat(p),e._pt=new Ni(e._pt,c,d,_,g-_,Qp),e._pt.u=E||0,e._props.push(d));wv(c,r)};Ui("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",r="Bottom",a="Left",u=(e<3?[t,n,r,a]:[t+a,t+n,r+n,r+a]).map(function(c){return e<2?o+c:"border"+c+o});Qf[e>1?"border"+o:o]=function(c,d,h,p,_){var g,v;if(arguments.length<4)return g=u.map(function(E){return cs(c,E,h)}),v=g.join(" "),v.split(g[0]).length===5?g[0]:v;g=(p+"").split(" "),v={},u.forEach(function(E,M){return v[E]=g[M]=g[M]||g[(M-1)/2|0]}),c.init(d,v,_)}});var k1={name:"css",register:em,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var u=this._props,c=e.style,d=n.vars.startAt,h,p,_,g,v,E,M,S,y,L,P,w,F,U,D,O;d_||em(),this.styles=this.styles||D1(e),O=this.styles.props,this.tween=n;for(M in t)if(M!=="autoRound"&&(p=t[M],!(qi[M]&&y1(M,t,n,r,e,a)))){if(v=typeof p,E=Qf[M],v==="function"&&(p=p.call(n,r,e,a),v=typeof p),v==="string"&&~p.indexOf("random(")&&(p=Lu(p)),E)E(this,e,M,p,n)&&(D=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",eo.lastIndex=0,eo.test(h)||(S=ai(h),y=ai(p)),y?S!==y&&(h=so(e,M,h,y)+y):S&&(p+=S),this.add(c,"setProperty",h,p,r,a,0,0,M),u.push(M),O.push(M,0,c[M]);else if(v!=="undefined"){if(d&&M in d?(h=typeof d[M]=="function"?d[M].call(n,r,e,a):d[M],Wn(h)&&~h.indexOf("random(")&&(h=Lu(h)),ai(h+"")||h==="auto"||(h+=Qi.units[M]||ai(cs(e,M))||""),(h+"").charAt(1)==="="&&(h=cs(e,M))):h=cs(e,M),g=parseFloat(h),L=v==="string"&&p.charAt(1)==="="&&p.substr(0,2),L&&(p=p.substr(2)),_=parseFloat(p),M in Br&&(M==="autoAlpha"&&(g===1&&cs(e,"visibility")==="hidden"&&_&&(g=0),O.push("visibility",0,c.visibility),Ks(this,c,"visibility",g?"inherit":"hidden",_?"inherit":"hidden",!_)),M!=="scale"&&M!=="transform"&&(M=Br[M],~M.indexOf(",")&&(M=M.split(",")[0]))),P=M in xs,P){if(this.styles.save(M),w||(F=e._gsap,F.renderTransform&&!t.parseTransform||Fu(e,t.parseTransform),U=t.smoothOrigin!==!1&&F.smooth,w=this._pt=new Ni(this._pt,c,mn,0,1,F.renderTransform,F,0,-1),w.dep=1),M==="scale")this._pt=new Ni(this._pt,F,"scaleY",F.scaleY,(L?Ja(F.scaleY,L+_):_)-F.scaleY||0,Qp),this._pt.u=0,u.push("scaleY",M),M+="X";else if(M==="transformOrigin"){O.push(Fi,0,c[Fi]),p=OE(p),F.svg?tm(e,p,0,U,0,this):(y=parseFloat(p.split(" ")[2])||0,y!==F.zOrigin&&Ks(this,F,"zOrigin",F.zOrigin,y),Ks(this,c,M,Jf(h),Jf(p)));continue}else if(M==="svgOrigin"){tm(e,p,1,U,0,this);continue}else if(M in N1){HE(this,F,M,g,L?Ja(g,L+p):p);continue}else if(M==="smoothOrigin"){Ks(this,F,"smooth",F.smooth,p);continue}else if(M==="force3D"){F[M]=p;continue}else if(M==="transform"){VE(this,p,e);continue}}else M in c||(M=dl(M)||M);if(P||(_||_===0)&&(g||g===0)&&!EE.test(p)&&M in c)S=(h+"").substr((g+"").length),_||(_=0),y=ai(p)||(M in Qi.units?Qi.units[M]:S),S!==y&&(g=so(e,M,h,y)),this._pt=new Ni(this._pt,P?F:c,M,g,(L?Ja(g,L+_):_)-g,!P&&(y==="px"||M==="zIndex")&&t.autoRound!==!1?AE:Qp),this._pt.u=y||0,S!==y&&y!=="%"&&(this._pt.b=h,this._pt.r=wE);else if(M in c)FE.call(this,e,M,h,L?L+p:p);else if(M in e)this.add(e,M,h||e[M],L?L+p:p,r,a);else if(M!=="parseTransform"){i_(M,p);continue}P||(M in c?O.push(M,0,c[M]):O.push(M,1,h||e[M])),u.push(M)}}D&&A1(this)},render:function(e,t){if(t.tween._time||!h_())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:cs,aliases:Br,getSetter:function(e,t,n){var r=Br[t];return r&&r.indexOf(",")<0&&(t=r),t in xs&&t!==Fi&&(e._gsap.x||cs(e,"x"))?n&&vv===n?t==="scale"?PE:bE:(vv=n||{})&&(t==="scale"?DE:LE):e.style&&!e_(e.style[t])?CE:~t.indexOf("-")?RE:c_(e,t)},core:{_removeProperty:Jo,_getMatrix:m_}};zi.utils.checkPrefix=dl;zi.core.getStyleSaver=D1;(function(o,e,t,n){var r=Ui(o+","+e+","+t,function(a){xs[a]=1});Ui(e,function(a){Qi.units[a]="deg",N1[a]=1}),Br[r[13]]=o+","+e,Ui(n,function(a){var u=a.split(":");Br[u[1]]=r[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ui("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Qi.units[o]="px"});zi.registerPlugin(k1);var ft=zi.registerPlugin(k1)||zi;ft.core.Tween;const GE="/profile_page/assets/images/uofa3.jpg",WE="/profile_page/assets/images/NimaV2.webp",XE="/profile_page/assets/images/react_logo.png",jE="/profile_page/assets/images/android_logo.jpg",YE="/profile_page/assets/images/assembly_logo.jpg",qE="/profile_page/assets/images/c_logo.png",$E="/profile_page/assets/images/css_logo.png",KE="/profile_page/assets/images/figma_logo.png",ZE="/profile_page/assets/images/html_logo.jpg",QE="/profile_page/assets/images/java_logo.png",JE="/profile_page/assets/images/javascript_logo.png",eT="/profile_page/assets/images/junit_logo.jpg",tT="/profile_page/assets/images/python_logo.png",nT="/profile_page/assets/images/sql_logo.png",iT="/profile_page/assets/images/project_header.png",rT="/profile_page/assets/images/RenewWool.png",sT="/profile_page/assets/images/code_img.png",oT="/profile_page/assets/images/FoodUpcycling.png",aT="/profile_page/assets/images/henning_logo.png",lT=GE,uT=WE,cT=XE,fT=jE,dT=YE,hT=qE,pT=$E,mT=KE,_T=ZE,gT=QE,vT=JE,xT=eT,yT=tT,ST=nT,MT=rT,ET=iT,TT=oT,wT=sT,AT=aT,Gu=window.innerWidth,CT=window.innerHeight,RT=()=>{pr.useEffect(()=>{Gu>760?ft.fromTo("#navigation",{x:-100,ease:"power2.out"},{x:10,opacity:.4,duration:1.8,delay:2}):ft.to("#navigation",{x:-100})},[]),pr.useEffect(()=>{const n=()=>{window.innerWidth<=760?ft.to("#navigation",{x:-100,duration:1}):ft.to("#navigation",{x:10,opacity:.4,duration:1})};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]);const o=()=>{ft.to("#navigation",{opacity:1})},e=()=>{ft.to("#navigation",{opacity:.4})},t=n=>{ft.to("#navigation",{borderColor:n})};return $.jsxs("nav",{id:"navigation",onMouseEnter:o,onMouseLeave:e,children:[$.jsx("a",{className:"anchor",href:"#Education",onMouseOver:()=>t("#bedde8"),onMouseOut:()=>t("rgba(205, 205, 205, 0.702)"),children:$.jsx("svg",{className:"option_svg1",xmlns:"http://www.w3.org/2000/svg",height:"35px",viewBox:"0 -960 960 960",width:"35px",children:$.jsx("path",{d:"M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"})})}),$.jsx("a",{className:"anchor",href:"#Projects",onMouseOver:()=>t("#e9adc4"),onMouseOut:()=>t("rgba(205, 205, 205, 0.702)"),children:$.jsx("svg",{className:"option_svg2",xmlns:"http://www.w3.org/2000/svg",height:"35px",viewBox:"0 -960 960 960",width:"35px",children:$.jsx("path",{d:"M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h400q33 0 56.5 23.5T600-680v400q0 33-23.5 56.5T520-200H120Zm0-80h400v-400H120v400Zm560 80v-560h80v560h-80Zm160 0v-560h80v560h-80Zm-720-80v-400 400Z"})})}),$.jsx("a",{className:"anchor",href:"#Experience",onMouseOver:()=>t("#edb563"),onMouseOut:()=>t("rgba(205, 205, 205, 0.702)"),children:$.jsx("svg",{className:"option_svg3",xmlns:"http://www.w3.org/2000/svg",height:"35px",viewBox:"0 -960 960 960",width:"35px",children:$.jsx("path",{d:"M320-600q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm0 160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0 160q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H600v-160H200v560Zm0-560v160-160 560-560Z"})})})]})},bT=()=>{pr.useEffect(()=>{ft.to("#uofa_img_border",{width:"92%",duration:3,ease:"back.out",delay:1,opacity:1,onComplete:()=>{ft.to("#uofa_img_border",{width:"85%",duration:8,ease:"sine.inOut",yoyo:!0,repeat:-1}),ft.to("#uofa_img_border",{width:"94%",duration:8,ease:"sine.inOut",yoyo:!0,repeat:-1,delay:1})}}),ft.to("#uofa_div",{width:"91%",duration:3,ease:"back.out",delay:1,opacity:1,onComplete:()=>{ft.to("#uofa_div",{width:"85%",duration:6,ease:"sine.inOut",yoyo:!0,repeat:-1}),ft.to("#uofa_div",{width:"91%",duration:6,ease:"sine.inOut",yoyo:!0,repeat:-1,delay:1})}}),Gu>760?(ft.to("#edu_card_container",{left:"9%",duration:3,ease:"back.out",delay:1}),ft.to("#education_focus_card",{right:"5%",duration:3,ease:"back.out",delay:1})):(ft.to("#edu_card_container",{left:"8%",duration:2,ease:"ease"}),ft.to("#education_focus_card",{right:"12%",duration:2,ease:"ease"}))},[]),pr.useEffect(()=>{const t=()=>{window.innerWidth>760?(ft.to("#edu_card_container",{left:"9%",duration:3,ease:"ease"}),ft.to("#education_focus_card",{right:"5%",duration:3,ease:"ease"})):(ft.to("#edu_card_container",{left:"8%",duration:2,ease:"ease"}),ft.to("#education_focus_card",{right:"12%",duration:2,ease:"ease"}))};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const o=()=>{ft.to("#uofa_div",{opacity:.5})},e=()=>{ft.to("#uofa_div",{opacity:1})};return $.jsxs("div",{id:"Education",children:[$.jsx("div",{id:"uofa_img_border"}),$.jsxs("div",{children:[$.jsx("div",{className:"linear_gradient_uofa",id:"uofa_div",onMouseEnter:o,onMouseLeave:e}),$.jsx("img",{className:"uofa_img",src:lT,alt:"University of Alberta"}),$.jsx("svg",{className:"svg",children:$.jsx("clipPath",{id:"clip_edu",clipPathUnits:"objectBoundingBox",children:$.jsx("path",{d:"M0.727,0.487 C0.921,0.36,0.725,0.131,1,0.001 H0.001 V1 C0.001,0.915,0.152,0.917,0.227,0.952 C0.269,0.969,0.372,1,0.453,1 C0.534,1,0.603,0.991,0.655,0.952 C0.713,0.911,0.683,0.815,0.629,0.761 C0.561,0.694,0.659,0.531,0.727,0.487"})})}),$.jsxs("div",{id:"edu_card_container",children:[$.jsx("div",{id:"profile_card",children:$.jsxs("div",{style:{display:"flex"},children:[$.jsx("img",{className:"profile_img",src:uT,alt:"Nima Shariatzadeh"}),$.jsx("h1",{style:{paddingLeft:"10px",color:"#fff"},children:"Nima Shariatzadeh"})]})}),$.jsxs("div",{id:"edu_card",children:[$.jsx("h1",{style:{color:"var(--blue2)"},children:"University of Alberta"}),$.jsx("h2",{children:"Bachelor of Science, Computing Science-Major "})]})]}),$.jsx("div",{id:"education_focus_card",children:$.jsxs("h1",{children:["With a Focus on ",$.jsx("p",{children:"Front-end Development"})]})})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const __="171",PT=0,Av=1,DT=2,z1=1,LT=2,ls=3,oo=0,Oi=1,fs=2,to=0,nl=1,Cv=2,Rv=3,bv=4,IT=5,ko=100,UT=101,NT=102,FT=103,OT=104,kT=200,zT=201,BT=202,HT=203,nm=204,im=205,VT=206,GT=207,WT=208,XT=209,jT=210,YT=211,qT=212,$T=213,KT=214,rm=0,sm=1,om=2,hl=3,am=4,lm=5,um=6,cm=7,B1=0,ZT=1,QT=2,no=0,JT=1,ew=2,tw=3,nw=4,iw=5,rw=6,sw=7,H1=300,pl=301,ml=302,fm=303,dm=304,cd=306,Ou=1e3,Ho=1001,hm=1002,Dr=1003,ow=1004,Zc=1005,Hr=1006,rp=1007,Vo=1008,ys=1009,V1=1010,G1=1011,ku=1012,g_=1013,ea=1014,hs=1015,Wu=1016,v_=1017,x_=1018,_l=1020,W1=35902,X1=1021,j1=1022,Pr=1023,Y1=1024,q1=1025,il=1026,gl=1027,$1=1028,y_=1029,K1=1030,S_=1031,M_=1033,Nf=33776,Ff=33777,Of=33778,kf=33779,pm=35840,mm=35841,_m=35842,gm=35843,vm=36196,xm=37492,ym=37496,Sm=37808,Mm=37809,Em=37810,Tm=37811,wm=37812,Am=37813,Cm=37814,Rm=37815,bm=37816,Pm=37817,Dm=37818,Lm=37819,Im=37820,Um=37821,zf=36492,Nm=36494,Fm=36495,Z1=36283,Om=36284,km=36285,zm=36286,aw=3200,lw=3201,Q1=0,uw=1,Ys="",lr="srgb",vl="srgb-linear",ed="linear",Zt="srgb",Pa=7680,Pv=519,cw=512,fw=513,dw=514,J1=515,hw=516,pw=517,mw=518,_w=519,Dv=35044,Lv="300 es",ps=2e3,td=2001;class Sl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,u=r.length;a<u;a++)r[a].call(this,e);e.target=null}}}const ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sp=Math.PI/180,Bm=180/Math.PI;function Xu(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ii[o&255]+ii[o>>8&255]+ii[o>>16&255]+ii[o>>24&255]+"-"+ii[e&255]+ii[e>>8&255]+"-"+ii[e>>16&15|64]+ii[e>>24&255]+"-"+ii[t&63|128]+ii[t>>8&255]+"-"+ii[t>>16&255]+ii[t>>24&255]+ii[n&255]+ii[n>>8&255]+ii[n>>16&255]+ii[n>>24&255]).toLowerCase()}function Ot(o,e,t){return Math.max(e,Math.min(t,o))}function gw(o,e){return(o%e+e)%e}function op(o,e,t){return(1-t)*o+t*e}function iu(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Di(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Qt{constructor(e=0,t=0){Qt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ot(this.x,e.x,t.x),this.y=Ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ot(this.x,e,t),this.y=Ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*r+e.x,this.y=a*r+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(e,t,n,r,a,u,c,d,h){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,u,c,d,h)}set(e,t,n,r,a,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=a,p[5]=d,p[6]=n,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],c=n[3],d=n[6],h=n[1],p=n[4],_=n[7],g=n[2],v=n[5],E=n[8],M=r[0],S=r[3],y=r[6],L=r[1],P=r[4],w=r[7],F=r[2],U=r[5],D=r[8];return a[0]=u*M+c*L+d*F,a[3]=u*S+c*P+d*U,a[6]=u*y+c*w+d*D,a[1]=h*M+p*L+_*F,a[4]=h*S+p*P+_*U,a[7]=h*y+p*w+_*D,a[2]=g*M+v*L+E*F,a[5]=g*S+v*P+E*U,a[8]=g*y+v*w+E*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-n*a*p+n*c*d+r*a*h-r*u*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],_=p*u-c*h,g=c*d-p*a,v=h*a-u*d,E=t*_+n*g+r*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=_*M,e[1]=(r*h-p*n)*M,e[2]=(c*n-r*u)*M,e[3]=g*M,e[4]=(p*t-r*d)*M,e[5]=(r*a-c*t)*M,e[6]=v*M,e[7]=(n*d-h*t)*M,e[8]=(u*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,u,c){const d=Math.cos(a),h=Math.sin(a);return this.set(n*d,n*h,-n*(d*u+h*c)+u+e,-r*h,r*d,-r*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ap.makeScale(e,t)),this}rotate(e){return this.premultiply(ap.makeRotation(-e)),this}translate(e,t){return this.premultiply(ap.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ap=new Et;function ey(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function zu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function vw(){const o=zu("canvas");return o.style.display="block",o}const Iv={};function ja(o){o in Iv||(Iv[o]=!0,console.warn(o))}function xw(o,e,t){return new Promise(function(n,r){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function yw(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Sw(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Uv=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nv=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mw(){const o={enabled:!0,workingColorSpace:vl,spaces:{},convert:function(r,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===Zt&&(r.r=_s(r.r),r.g=_s(r.g),r.b=_s(r.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Zt&&(r.r=rl(r.r),r.g=rl(r.g),r.b=rl(r.b))),r},fromWorkingColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},toWorkingColorSpace:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ys?ed:this.spaces[r].transfer},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,u){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return o.define({[vl]:{primaries:e,whitePoint:n,transfer:ed,toXYZ:Uv,fromXYZ:Nv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:lr},outputColorSpaceConfig:{drawingBufferColorSpace:lr}},[lr]:{primaries:e,whitePoint:n,transfer:Zt,toXYZ:Uv,fromXYZ:Nv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:lr}}}),o}const Gt=Mw();function _s(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function rl(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Da;class Ew{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Da===void 0&&(Da=zu("canvas")),Da.width=e.width,Da.height=e.height;const n=Da.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Da}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zu("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let u=0;u<a.length;u++)a[u]=_s(a[u]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_s(t[n]/255)*255):t[n]=_s(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tw=0;class ty{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=Xu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let u=0,c=r.length;u<c;u++)r[u].isDataTexture?a.push(lp(r[u].image)):a.push(lp(r[u]))}else a=lp(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function lp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ew.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ww=0;class Ti extends Sl{constructor(e=Ti.DEFAULT_IMAGE,t=Ti.DEFAULT_MAPPING,n=Ho,r=Ho,a=Hr,u=Vo,c=Pr,d=ys,h=Ti.DEFAULT_ANISOTROPY,p=Ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=Xu(),this.name="",this.source=new ty(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==H1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ou:e.x=e.x-Math.floor(e.x);break;case Ho:e.x=e.x<0?0:1;break;case hm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ou:e.y=e.y-Math.floor(e.y);break;case Ho:e.y=e.y<0?0:1;break;case hm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ti.DEFAULT_IMAGE=null;Ti.DEFAULT_MAPPING=H1;Ti.DEFAULT_ANISOTROPY=1;class Tn{constructor(e=0,t=0,n=0,r=1){Tn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*r+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*r+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*r+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*r+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const d=e.elements,h=d[0],p=d[4],_=d[8],g=d[1],v=d[5],E=d[9],M=d[2],S=d[6],y=d[10];if(Math.abs(p-g)<.01&&Math.abs(_-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+M)<.1&&Math.abs(E+S)<.1&&Math.abs(h+v+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,w=(v+1)/2,F=(y+1)/2,U=(p+g)/4,D=(_+M)/4,O=(E+S)/4;return P>w&&P>F?P<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(P),r=U/n,a=D/n):w>F?w<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),n=U/r,a=O/r):F<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(F),n=D/a,r=O/a),this.set(n,r,a,t),this}let L=Math.sqrt((S-E)*(S-E)+(_-M)*(_-M)+(g-p)*(g-p));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(_-M)/L,this.z=(g-p)/L,this.w=Math.acos((h+v+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ot(this.x,e.x,t.x),this.y=Ot(this.y,e.y,t.y),this.z=Ot(this.z,e.z,t.z),this.w=Ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ot(this.x,e,t),this.y=Ot(this.y,e,t),this.z=Ot(this.z,e,t),this.w=Ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Aw extends Sl{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tn(0,0,e,t),this.scissorTest=!1,this.viewport=new Tn(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Ti(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ty(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ta extends Aw{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ny extends Ti{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dr,this.minFilter=Dr,this.wrapR=Ho,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cw extends Ti{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dr,this.minFilter=Dr,this.wrapR=Ho,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ju{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,u,c){let d=n[r+0],h=n[r+1],p=n[r+2],_=n[r+3];const g=a[u+0],v=a[u+1],E=a[u+2],M=a[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=_;return}if(c===1){e[t+0]=g,e[t+1]=v,e[t+2]=E,e[t+3]=M;return}if(_!==M||d!==g||h!==v||p!==E){let S=1-c;const y=d*g+h*v+p*E+_*M,L=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const F=Math.sqrt(P),U=Math.atan2(F,y*L);S=Math.sin(S*U)/F,c=Math.sin(c*U)/F}const w=c*L;if(d=d*S+g*w,h=h*S+v*w,p=p*S+E*w,_=_*S+M*w,S===1-c){const F=1/Math.sqrt(d*d+h*h+p*p+_*_);d*=F,h*=F,p*=F,_*=F}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,r,a,u){const c=n[r],d=n[r+1],h=n[r+2],p=n[r+3],_=a[u],g=a[u+1],v=a[u+2],E=a[u+3];return e[t]=c*E+p*_+d*v-h*g,e[t+1]=d*E+p*g+h*_-c*v,e[t+2]=h*E+p*v+c*g-d*_,e[t+3]=p*E-c*_-d*g-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(n/2),p=c(r/2),_=c(a/2),g=d(n/2),v=d(r/2),E=d(a/2);switch(u){case"XYZ":this._x=g*p*_+h*v*E,this._y=h*v*_-g*p*E,this._z=h*p*E+g*v*_,this._w=h*p*_-g*v*E;break;case"YXZ":this._x=g*p*_+h*v*E,this._y=h*v*_-g*p*E,this._z=h*p*E-g*v*_,this._w=h*p*_+g*v*E;break;case"ZXY":this._x=g*p*_-h*v*E,this._y=h*v*_+g*p*E,this._z=h*p*E+g*v*_,this._w=h*p*_-g*v*E;break;case"ZYX":this._x=g*p*_-h*v*E,this._y=h*v*_+g*p*E,this._z=h*p*E-g*v*_,this._w=h*p*_+g*v*E;break;case"YZX":this._x=g*p*_+h*v*E,this._y=h*v*_+g*p*E,this._z=h*p*E-g*v*_,this._w=h*p*_-g*v*E;break;case"XZY":this._x=g*p*_-h*v*E,this._y=h*v*_-g*p*E,this._z=h*p*E+g*v*_,this._w=h*p*_+g*v*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],_=t[10],g=n+c+_;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(p-d)*v,this._y=(a-h)*v,this._z=(u-r)*v}else if(n>c&&n>_){const v=2*Math.sqrt(1+n-c-_);this._w=(p-d)/v,this._x=.25*v,this._y=(r+u)/v,this._z=(a+h)/v}else if(c>_){const v=2*Math.sqrt(1+c-n-_);this._w=(a-h)/v,this._x=(r+u)/v,this._y=.25*v,this._z=(d+p)/v}else{const v=2*Math.sqrt(1+_-n-c);this._w=(u-r)/v,this._x=(a+h)/v,this._y=(d+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=n*p+u*c+r*h-a*d,this._y=r*p+u*d+a*c-n*h,this._z=a*p+u*h+n*d-r*c,this._w=u*p-n*c-r*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,u=this._w;let c=u*e._w+n*e._x+r*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=r,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const v=1-t;return this._w=v*u+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,c),_=Math.sin((1-t)*p)/h,g=Math.sin(t*p)/h;return this._w=u*_+this._w*g,this._x=n*_+this._x*g,this._y=r*_+this._y*g,this._z=a*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class de{constructor(e=0,t=0,n=0){de.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*r-c*n),p=2*(c*t-a*r),_=2*(a*n-u*t);return this.x=t+d*h+u*_-c*p,this.y=n+d*p+c*h-a*_,this.z=r+d*_+a*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ot(this.x,e.x,t.x),this.y=Ot(this.y,e.y,t.y),this.z=Ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ot(this.x,e,t),this.y=Ot(this.y,e,t),this.z=Ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,u=t.x,c=t.y,d=t.z;return this.x=r*d-a*c,this.y=a*u-n*d,this.z=n*c-r*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return up.copy(this).projectOnVector(e),this.sub(up)}reflect(e){return this.sub(up.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const up=new de,Fv=new ju;class Yu{constructor(e=new de(1/0,1/0,1/0),t=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Tr):Tr.fromBufferAttribute(a,u),Tr.applyMatrix4(e.matrixWorld),this.expandByPoint(Tr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qc.copy(n.boundingBox)),Qc.applyMatrix4(e.matrixWorld),this.union(Qc)}const r=e.children;for(let a=0,u=r.length;a<u;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tr),Tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ru),Jc.subVectors(this.max,ru),La.subVectors(e.a,ru),Ia.subVectors(e.b,ru),Ua.subVectors(e.c,ru),Bs.subVectors(Ia,La),Hs.subVectors(Ua,Ia),Co.subVectors(La,Ua);let t=[0,-Bs.z,Bs.y,0,-Hs.z,Hs.y,0,-Co.z,Co.y,Bs.z,0,-Bs.x,Hs.z,0,-Hs.x,Co.z,0,-Co.x,-Bs.y,Bs.x,0,-Hs.y,Hs.x,0,-Co.y,Co.x,0];return!cp(t,La,Ia,Ua,Jc)||(t=[1,0,0,0,1,0,0,0,1],!cp(t,La,Ia,Ua,Jc))?!1:(ef.crossVectors(Bs,Hs),t=[ef.x,ef.y,ef.z],cp(t,La,Ia,Ua,Jc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(is),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const is=[new de,new de,new de,new de,new de,new de,new de,new de],Tr=new de,Qc=new Yu,La=new de,Ia=new de,Ua=new de,Bs=new de,Hs=new de,Co=new de,ru=new de,Jc=new de,ef=new de,Ro=new de;function cp(o,e,t,n,r){for(let a=0,u=o.length-3;a<=u;a+=3){Ro.fromArray(o,a);const c=r.x*Math.abs(Ro.x)+r.y*Math.abs(Ro.y)+r.z*Math.abs(Ro.z),d=e.dot(Ro),h=t.dot(Ro),p=n.dot(Ro);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const Rw=new Yu,su=new de,fp=new de;class E_{constructor(e=new de,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rw.setFromPoints(e).getCenter(n);let r=0;for(let a=0,u=e.length;a<u;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;su.subVectors(e,this.center);const t=su.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(su,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(su.copy(e.center).add(fp)),this.expandByPoint(su.copy(e.center).sub(fp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rs=new de,dp=new de,tf=new de,Vs=new de,hp=new de,nf=new de,pp=new de;class bw{constructor(e=new de,t=new de(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rs.copy(this.origin).addScaledVector(this.direction,t),rs.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){dp.copy(e).add(t).multiplyScalar(.5),tf.copy(t).sub(e).normalize(),Vs.copy(this.origin).sub(dp);const a=e.distanceTo(t)*.5,u=-this.direction.dot(tf),c=Vs.dot(this.direction),d=-Vs.dot(tf),h=Vs.lengthSq(),p=Math.abs(1-u*u);let _,g,v,E;if(p>0)if(_=u*d-c,g=u*c-d,E=a*p,_>=0)if(g>=-E)if(g<=E){const M=1/p;_*=M,g*=M,v=_*(_+u*g+2*c)+g*(u*_+g+2*d)+h}else g=a,_=Math.max(0,-(u*g+c)),v=-_*_+g*(g+2*d)+h;else g=-a,_=Math.max(0,-(u*g+c)),v=-_*_+g*(g+2*d)+h;else g<=-E?(_=Math.max(0,-(-u*a+c)),g=_>0?-a:Math.min(Math.max(-a,-d),a),v=-_*_+g*(g+2*d)+h):g<=E?(_=0,g=Math.min(Math.max(-a,-d),a),v=g*(g+2*d)+h):(_=Math.max(0,-(u*a+c)),g=_>0?a:Math.min(Math.max(-a,-d),a),v=-_*_+g*(g+2*d)+h);else g=u>0?-a:a,_=Math.max(0,-(u*g+c)),v=-_*_+g*(g+2*d)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(dp).addScaledVector(tf,g),v}intersectSphere(e,t){rs.subVectors(e.center,this.origin);const n=rs.dot(this.direction),r=rs.dot(rs)-n*n,a=e.radius*e.radius;if(r>a)return null;const u=Math.sqrt(a-r),c=n-u,d=n+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,r=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,r=(e.min.x-g.x)*h),p>=0?(a=(e.min.y-g.y)*p,u=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,u=(e.min.y-g.y)*p),n>u||a>r||((a>n||isNaN(n))&&(n=a),(u<r||isNaN(r))&&(r=u),_>=0?(c=(e.min.z-g.z)*_,d=(e.max.z-g.z)*_):(c=(e.max.z-g.z)*_,d=(e.min.z-g.z)*_),n>d||c>r)||((c>n||n!==n)&&(n=c),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,rs)!==null}intersectTriangle(e,t,n,r,a){hp.subVectors(t,e),nf.subVectors(n,e),pp.crossVectors(hp,nf);let u=this.direction.dot(pp),c;if(u>0){if(r)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Vs.subVectors(this.origin,e);const d=c*this.direction.dot(nf.crossVectors(Vs,nf));if(d<0)return null;const h=c*this.direction.dot(hp.cross(Vs));if(h<0||d+h>u)return null;const p=-c*Vs.dot(pp);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pn{constructor(e,t,n,r,a,u,c,d,h,p,_,g,v,E,M,S){Pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,u,c,d,h,p,_,g,v,E,M,S)}set(e,t,n,r,a,u,c,d,h,p,_,g,v,E,M,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=r,y[1]=a,y[5]=u,y[9]=c,y[13]=d,y[2]=h,y[6]=p,y[10]=_,y[14]=g,y[3]=v,y[7]=E,y[11]=M,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Na.setFromMatrixColumn(e,0).length(),a=1/Na.setFromMatrixColumn(e,1).length(),u=1/Na.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),d=Math.cos(r),h=Math.sin(r),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const g=u*p,v=u*_,E=c*p,M=c*_;t[0]=d*p,t[4]=-d*_,t[8]=h,t[1]=v+E*h,t[5]=g-M*h,t[9]=-c*d,t[2]=M-g*h,t[6]=E+v*h,t[10]=u*d}else if(e.order==="YXZ"){const g=d*p,v=d*_,E=h*p,M=h*_;t[0]=g+M*c,t[4]=E*c-v,t[8]=u*h,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=v*c-E,t[6]=M+g*c,t[10]=u*d}else if(e.order==="ZXY"){const g=d*p,v=d*_,E=h*p,M=h*_;t[0]=g-M*c,t[4]=-u*_,t[8]=E+v*c,t[1]=v+E*c,t[5]=u*p,t[9]=M-g*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const g=u*p,v=u*_,E=c*p,M=c*_;t[0]=d*p,t[4]=E*h-v,t[8]=g*h+M,t[1]=d*_,t[5]=M*h+g,t[9]=v*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const g=u*d,v=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=M-g*_,t[8]=E*_+v,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=v*_+E,t[10]=g-M*_}else if(e.order==="XZY"){const g=u*d,v=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=-_,t[8]=h*p,t[1]=g*_+M,t[5]=u*p,t[9]=v*_-E,t[2]=E*_-v,t[6]=c*p,t[10]=M*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pw,e,Dw)}lookAt(e,t,n){const r=this.elements;return Wi.subVectors(e,t),Wi.lengthSq()===0&&(Wi.z=1),Wi.normalize(),Gs.crossVectors(n,Wi),Gs.lengthSq()===0&&(Math.abs(n.z)===1?Wi.x+=1e-4:Wi.z+=1e-4,Wi.normalize(),Gs.crossVectors(n,Wi)),Gs.normalize(),rf.crossVectors(Wi,Gs),r[0]=Gs.x,r[4]=rf.x,r[8]=Wi.x,r[1]=Gs.y,r[5]=rf.y,r[9]=Wi.y,r[2]=Gs.z,r[6]=rf.z,r[10]=Wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],c=n[4],d=n[8],h=n[12],p=n[1],_=n[5],g=n[9],v=n[13],E=n[2],M=n[6],S=n[10],y=n[14],L=n[3],P=n[7],w=n[11],F=n[15],U=r[0],D=r[4],O=r[8],C=r[12],T=r[1],B=r[5],Y=r[9],K=r[13],oe=r[2],ce=r[6],te=r[10],Q=r[14],H=r[3],le=r[7],I=r[11],k=r[15];return a[0]=u*U+c*T+d*oe+h*H,a[4]=u*D+c*B+d*ce+h*le,a[8]=u*O+c*Y+d*te+h*I,a[12]=u*C+c*K+d*Q+h*k,a[1]=p*U+_*T+g*oe+v*H,a[5]=p*D+_*B+g*ce+v*le,a[9]=p*O+_*Y+g*te+v*I,a[13]=p*C+_*K+g*Q+v*k,a[2]=E*U+M*T+S*oe+y*H,a[6]=E*D+M*B+S*ce+y*le,a[10]=E*O+M*Y+S*te+y*I,a[14]=E*C+M*K+S*Q+y*k,a[3]=L*U+P*T+w*oe+F*H,a[7]=L*D+P*B+w*ce+F*le,a[11]=L*O+P*Y+w*te+F*I,a[15]=L*C+P*K+w*Q+F*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],_=e[6],g=e[10],v=e[14],E=e[3],M=e[7],S=e[11],y=e[15];return E*(+a*d*_-r*h*_-a*c*g+n*h*g+r*c*v-n*d*v)+M*(+t*d*v-t*h*g+a*u*g-r*u*v+r*h*p-a*d*p)+S*(+t*h*_-t*c*v-a*u*_+n*u*v+a*c*p-n*h*p)+y*(-r*c*p-t*d*_+t*c*g+r*u*_-n*u*g+n*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],_=e[9],g=e[10],v=e[11],E=e[12],M=e[13],S=e[14],y=e[15],L=_*S*h-M*g*h+M*d*v-c*S*v-_*d*y+c*g*y,P=E*g*h-p*S*h-E*d*v+u*S*v+p*d*y-u*g*y,w=p*M*h-E*_*h+E*c*v-u*M*v-p*c*y+u*_*y,F=E*_*d-p*M*d-E*c*g+u*M*g+p*c*S-u*_*S,U=t*L+n*P+r*w+a*F;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/U;return e[0]=L*D,e[1]=(M*g*a-_*S*a-M*r*v+n*S*v+_*r*y-n*g*y)*D,e[2]=(c*S*a-M*d*a+M*r*h-n*S*h-c*r*y+n*d*y)*D,e[3]=(_*d*a-c*g*a-_*r*h+n*g*h+c*r*v-n*d*v)*D,e[4]=P*D,e[5]=(p*S*a-E*g*a+E*r*v-t*S*v-p*r*y+t*g*y)*D,e[6]=(E*d*a-u*S*a-E*r*h+t*S*h+u*r*y-t*d*y)*D,e[7]=(u*g*a-p*d*a+p*r*h-t*g*h-u*r*v+t*d*v)*D,e[8]=w*D,e[9]=(E*_*a-p*M*a-E*n*v+t*M*v+p*n*y-t*_*y)*D,e[10]=(u*M*a-E*c*a+E*n*h-t*M*h-u*n*y+t*c*y)*D,e[11]=(p*c*a-u*_*a-p*n*h+t*_*h+u*n*v-t*c*v)*D,e[12]=F*D,e[13]=(p*M*r-E*_*r+E*n*g-t*M*g-p*n*S+t*_*S)*D,e[14]=(E*c*r-u*M*r-E*n*d+t*M*d+u*n*S-t*c*S)*D,e[15]=(u*_*r-p*c*r+p*n*d-t*_*d-u*n*g+t*c*g)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,u=e.x,c=e.y,d=e.z,h=a*u,p=a*c;return this.set(h*u+n,h*c-r*d,h*d+r*c,0,h*c+r*d,p*c+n,p*d-r*u,0,h*d-r*c,p*d+r*u,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,u){return this.set(1,n,a,0,e,1,u,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,u=t._y,c=t._z,d=t._w,h=a+a,p=u+u,_=c+c,g=a*h,v=a*p,E=a*_,M=u*p,S=u*_,y=c*_,L=d*h,P=d*p,w=d*_,F=n.x,U=n.y,D=n.z;return r[0]=(1-(M+y))*F,r[1]=(v+w)*F,r[2]=(E-P)*F,r[3]=0,r[4]=(v-w)*U,r[5]=(1-(g+y))*U,r[6]=(S+L)*U,r[7]=0,r[8]=(E+P)*D,r[9]=(S-L)*D,r[10]=(1-(g+M))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Na.set(r[0],r[1],r[2]).length();const u=Na.set(r[4],r[5],r[6]).length(),c=Na.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],wr.copy(this);const h=1/a,p=1/u,_=1/c;return wr.elements[0]*=h,wr.elements[1]*=h,wr.elements[2]*=h,wr.elements[4]*=p,wr.elements[5]*=p,wr.elements[6]*=p,wr.elements[8]*=_,wr.elements[9]*=_,wr.elements[10]*=_,t.setFromRotationMatrix(wr),n.x=a,n.y=u,n.z=c,this}makePerspective(e,t,n,r,a,u,c=ps){const d=this.elements,h=2*a/(t-e),p=2*a/(n-r),_=(t+e)/(t-e),g=(n+r)/(n-r);let v,E;if(c===ps)v=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===td)v=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=p,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=v,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,r,a,u,c=ps){const d=this.elements,h=1/(t-e),p=1/(n-r),_=1/(u-a),g=(t+e)*h,v=(n+r)*p;let E,M;if(c===ps)E=(u+a)*_,M=-2*_;else if(c===td)E=a*_,M=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-v,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Na=new de,wr=new Pn,Pw=new de(0,0,0),Dw=new de(1,1,1),Gs=new de,rf=new de,Wi=new de,Ov=new Pn,kv=new ju;class qr{constructor(e=0,t=0,n=0,r=qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],u=r[4],c=r[8],d=r[1],h=r[5],p=r[9],_=r[2],g=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Ot(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ov.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ov,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kv.setFromEuler(this),this.setFromQuaternion(kv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qr.DEFAULT_ORDER="XYZ";class iy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lw=0;const zv=new de,Fa=new ju,ss=new Pn,sf=new de,ou=new de,Iw=new de,Uw=new ju,Bv=new de(1,0,0),Hv=new de(0,1,0),Vv=new de(0,0,1),Gv={type:"added"},Nw={type:"removed"},Oa={type:"childadded",child:null},mp={type:"childremoved",child:null};class ki extends Sl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=Xu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ki.DEFAULT_UP.clone();const e=new de,t=new qr,n=new ju,r=new de(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pn},normalMatrix:{value:new Et}}),this.matrix=new Pn,this.matrixWorld=new Pn,this.matrixAutoUpdate=ki.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ki.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fa.setFromAxisAngle(e,t),this.quaternion.multiply(Fa),this}rotateOnWorldAxis(e,t){return Fa.setFromAxisAngle(e,t),this.quaternion.premultiply(Fa),this}rotateX(e){return this.rotateOnAxis(Bv,e)}rotateY(e){return this.rotateOnAxis(Hv,e)}rotateZ(e){return this.rotateOnAxis(Vv,e)}translateOnAxis(e,t){return zv.copy(e).applyQuaternion(this.quaternion),this.position.add(zv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bv,e)}translateY(e){return this.translateOnAxis(Hv,e)}translateZ(e){return this.translateOnAxis(Vv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ss.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sf.copy(e):sf.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ou.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ss.lookAt(ou,sf,this.up):ss.lookAt(sf,ou,this.up),this.quaternion.setFromRotationMatrix(ss),r&&(ss.extractRotation(r.matrixWorld),Fa.setFromRotationMatrix(ss),this.quaternion.premultiply(Fa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gv),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nw),mp.child=e,this.dispatchEvent(mp),mp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ss.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ss.multiply(e.parent.matrixWorld)),e.applyMatrix4(ss),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gv),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,u=r.length;a<u;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ou,e,Iw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ou,Uw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,u=r.length;a<u;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const _=d[h];a(e.shapes,_)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];r.animations.push(a(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),_=u(e.shapes),g=u(e.skeletons),v=u(e.animations),E=u(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),_.length>0&&(n.shapes=_),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),E.length>0&&(n.nodes=E)}return n.object=r,n;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ki.DEFAULT_UP=new de(0,1,0);ki.DEFAULT_MATRIX_AUTO_UPDATE=!0;ki.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ar=new de,os=new de,_p=new de,as=new de,ka=new de,za=new de,Wv=new de,gp=new de,vp=new de,xp=new de,yp=new Tn,Sp=new Tn,Mp=new Tn;class br{constructor(e=new de,t=new de,n=new de){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ar.subVectors(e,t),r.cross(Ar);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Ar.subVectors(r,t),os.subVectors(n,t),_p.subVectors(e,t);const u=Ar.dot(Ar),c=Ar.dot(os),d=Ar.dot(_p),h=os.dot(os),p=os.dot(_p),_=u*h-c*c;if(_===0)return a.set(0,0,0),null;const g=1/_,v=(h*d-c*p)*g,E=(u*p-c*d)*g;return a.set(1-v-E,E,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,as)===null?!1:as.x>=0&&as.y>=0&&as.x+as.y<=1}static getInterpolation(e,t,n,r,a,u,c,d){return this.getBarycoord(e,t,n,r,as)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,as.x),d.addScaledVector(u,as.y),d.addScaledVector(c,as.z),d)}static getInterpolatedAttribute(e,t,n,r,a,u){return yp.setScalar(0),Sp.setScalar(0),Mp.setScalar(0),yp.fromBufferAttribute(e,t),Sp.fromBufferAttribute(e,n),Mp.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(yp,a.x),u.addScaledVector(Sp,a.y),u.addScaledVector(Mp,a.z),u}static isFrontFacing(e,t,n,r){return Ar.subVectors(n,t),os.subVectors(e,t),Ar.cross(os).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ar.subVectors(this.c,this.b),os.subVectors(this.a,this.b),Ar.cross(os).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return br.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return br.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return br.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return br.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return br.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let u,c;ka.subVectors(r,n),za.subVectors(a,n),gp.subVectors(e,n);const d=ka.dot(gp),h=za.dot(gp);if(d<=0&&h<=0)return t.copy(n);vp.subVectors(e,r);const p=ka.dot(vp),_=za.dot(vp);if(p>=0&&_<=p)return t.copy(r);const g=d*_-p*h;if(g<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(n).addScaledVector(ka,u);xp.subVectors(e,a);const v=ka.dot(xp),E=za.dot(xp);if(E>=0&&v<=E)return t.copy(a);const M=v*h-d*E;if(M<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(n).addScaledVector(za,c);const S=p*E-v*_;if(S<=0&&_-p>=0&&v-E>=0)return Wv.subVectors(a,r),c=(_-p)/(_-p+(v-E)),t.copy(r).addScaledVector(Wv,c);const y=1/(S+M+g);return u=M*y,c=g*y,t.copy(n).addScaledVector(ka,u).addScaledVector(za,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ry={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ws={h:0,s:0,l:0},of={h:0,s:0,l:0};function Ep(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Wt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Gt.workingColorSpace){if(e=gw(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=Ep(u,a,e+1/3),this.g=Ep(u,a,e),this.b=Ep(u,a,e-1/3)}return Gt.toWorkingColorSpace(this,r),this}setStyle(e,t=lr){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=r[1],c=r[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lr){const n=ry[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=rl(e.r),this.g=rl(e.g),this.b=rl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lr){return Gt.fromWorkingColorSpace(ri.copy(this),e),Math.round(Ot(ri.r*255,0,255))*65536+Math.round(Ot(ri.g*255,0,255))*256+Math.round(Ot(ri.b*255,0,255))}getHexString(e=lr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.fromWorkingColorSpace(ri.copy(this),t);const n=ri.r,r=ri.g,a=ri.b,u=Math.max(n,r,a),c=Math.min(n,r,a);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const _=u-c;switch(h=p<=.5?_/(u+c):_/(2-u-c),u){case n:d=(r-a)/_+(r<a?6:0);break;case r:d=(a-n)/_+2;break;case a:d=(n-r)/_+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(ri.copy(this),t),e.r=ri.r,e.g=ri.g,e.b=ri.b,e}getStyle(e=lr){Gt.fromWorkingColorSpace(ri.copy(this),e);const t=ri.r,n=ri.g,r=ri.b;return e!==lr?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ws),this.setHSL(Ws.h+e,Ws.s+t,Ws.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ws),e.getHSL(of);const n=op(Ws.h,of.h,t),r=op(Ws.s,of.s,t),a=op(Ws.l,of.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ri=new Wt;Wt.NAMES=ry;let Fw=0;class qu extends Sl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=Xu(),this.name="",this.type="Material",this.blending=nl,this.side=oo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nm,this.blendDst=im,this.blendEquation=ko,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=hl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pa,this.stencilZFail=Pa,this.stencilZPass=Pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nl&&(n.blending=this.blending),this.side!==oo&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nm&&(n.blendSrc=this.blendSrc),this.blendDst!==im&&(n.blendDst=this.blendDst),this.blendEquation!==ko&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pv&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pa&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pa&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pa&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}if(t){const a=r(e.textures),u=r(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sy extends qu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.combine=B1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cn=new de,af=new Qt;class Xr{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dv,this.updateRanges=[],this.gpuType=hs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)af.fromBufferAttribute(this,t),af.applyMatrix3(e),this.setXY(t,af.x,af.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix3(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=iu(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Di(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=iu(t,this.array)),t}setX(e,t){return this.normalized&&(t=Di(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=iu(t,this.array)),t}setY(e,t){return this.normalized&&(t=Di(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=iu(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Di(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=iu(t,this.array)),t}setW(e,t){return this.normalized&&(t=Di(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Di(t,this.array),n=Di(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Di(t,this.array),n=Di(n,this.array),r=Di(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Di(t,this.array),n=Di(n,this.array),r=Di(r,this.array),a=Di(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dv&&(e.usage=this.usage),e}}class oy extends Xr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ay extends Xr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qo extends Xr{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ow=0;const or=new Pn,Tp=new ki,Ba=new de,Xi=new Yu,au=new Yu,Bn=new de;class oa extends Sl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ow++}),this.uuid=Xu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ey(e)?ay:oy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Et().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return or.makeRotationFromQuaternion(e),this.applyMatrix4(or),this}rotateX(e){return or.makeRotationX(e),this.applyMatrix4(or),this}rotateY(e){return or.makeRotationY(e),this.applyMatrix4(or),this}rotateZ(e){return or.makeRotationZ(e),this.applyMatrix4(or),this}translate(e,t,n){return or.makeTranslation(e,t,n),this.applyMatrix4(or),this}scale(e,t,n){return or.makeScale(e,t,n),this.applyMatrix4(or),this}lookAt(e){return Tp.lookAt(e),Tp.updateMatrix(),this.applyMatrix4(Tp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ba).negate(),this.translate(Ba.x,Ba.y,Ba.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new qo(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Xi.setFromBufferAttribute(a),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Xi.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Xi.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Xi.min),this.boundingBox.expandByPoint(Xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new E_);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const n=this.boundingSphere.center;if(Xi.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];au.setFromBufferAttribute(c),this.morphTargetsRelative?(Bn.addVectors(Xi.min,au.min),Xi.expandByPoint(Bn),Bn.addVectors(Xi.max,au.max),Xi.expandByPoint(Bn)):(Xi.expandByPoint(au.min),Xi.expandByPoint(au.max))}Xi.getCenter(n);let r=0;for(let a=0,u=e.count;a<u;a++)Bn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Bn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)Bn.fromBufferAttribute(c,h),d&&(Ba.fromBufferAttribute(e,h),Bn.add(Ba)),r=Math.max(r,n.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xr(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let O=0;O<n.count;O++)c[O]=new de,d[O]=new de;const h=new de,p=new de,_=new de,g=new Qt,v=new Qt,E=new Qt,M=new de,S=new de;function y(O,C,T){h.fromBufferAttribute(n,O),p.fromBufferAttribute(n,C),_.fromBufferAttribute(n,T),g.fromBufferAttribute(a,O),v.fromBufferAttribute(a,C),E.fromBufferAttribute(a,T),p.sub(h),_.sub(h),v.sub(g),E.sub(g);const B=1/(v.x*E.y-E.x*v.y);isFinite(B)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(_,-v.y).multiplyScalar(B),S.copy(_).multiplyScalar(v.x).addScaledVector(p,-E.x).multiplyScalar(B),c[O].add(M),c[C].add(M),c[T].add(M),d[O].add(S),d[C].add(S),d[T].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let O=0,C=L.length;O<C;++O){const T=L[O],B=T.start,Y=T.count;for(let K=B,oe=B+Y;K<oe;K+=3)y(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const P=new de,w=new de,F=new de,U=new de;function D(O){F.fromBufferAttribute(r,O),U.copy(F);const C=c[O];P.copy(C),P.sub(F.multiplyScalar(F.dot(C))).normalize(),w.crossVectors(U,C);const B=w.dot(d[O])<0?-1:1;u.setXYZW(O,P.x,P.y,P.z,B)}for(let O=0,C=L.length;O<C;++O){const T=L[O],B=T.start,Y=T.count;for(let K=B,oe=B+Y;K<oe;K+=3)D(e.getX(K+0)),D(e.getX(K+1)),D(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const r=new de,a=new de,u=new de,c=new de,d=new de,h=new de,p=new de,_=new de;if(e)for(let g=0,v=e.count;g<v;g+=3){const E=e.getX(g+0),M=e.getX(g+1),S=e.getX(g+2);r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),u.fromBufferAttribute(t,S),p.subVectors(u,a),_.subVectors(r,a),p.cross(_),c.fromBufferAttribute(n,E),d.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),c.add(p),d.add(p),h.add(p),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(M,d.x,d.y,d.z),n.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,v=t.count;g<v;g+=3)r.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),p.subVectors(u,a),_.subVectors(r,a),p.cross(_),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bn.fromBufferAttribute(e,t),Bn.normalize(),e.setXYZ(t,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,_=c.normalized,g=new h.constructor(d.length*p);let v=0,E=0;for(let M=0,S=d.length;M<S;M++){c.isInterleavedBufferAttribute?v=d[M]*c.data.stride+c.offset:v=d[M]*p;for(let y=0;y<p;y++)g[E++]=h[v++]}return new Xr(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new oa,n=this.index.array,r=this.attributes;for(const c in r){const d=r[c],h=e(d,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let p=0,_=h.length;p<_;p++){const g=h[p],v=e(g,n);d.push(v)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const h=n[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let _=0,g=h.length;_<g;_++){const v=h[_];p.push(v.toJSON(e.data))}p.length>0&&(r[d]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const p=r[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],_=a[h];for(let g=0,v=_.length;g<v;g++)p.push(_[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xv=new Pn,bo=new bw,lf=new E_,jv=new de,uf=new de,cf=new de,ff=new de,wp=new de,df=new de,Yv=new de,hf=new de;class Vr extends ki{constructor(e=new oa,t=new sy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){df.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=c[d],_=a[d];p!==0&&(wp.fromBufferAttribute(_,e),u?df.addScaledVector(wp,p):df.addScaledVector(wp.sub(t),p))}t.add(df)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lf.copy(n.boundingSphere),lf.applyMatrix4(a),bo.copy(e.ray).recast(e.near),!(lf.containsPoint(bo.origin)===!1&&(bo.intersectSphere(lf,jv)===null||bo.origin.distanceToSquared(jv)>(e.far-e.near)**2))&&(Xv.copy(a).invert(),bo.copy(e.ray).applyMatrix4(Xv),!(n.boundingBox!==null&&bo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bo)))}_computeIntersections(e,t,n){let r;const a=this.geometry,u=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,g=a.groups,v=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const S=g[E],y=u[S.materialIndex],L=Math.max(S.start,v.start),P=Math.min(c.count,Math.min(S.start+S.count,v.start+v.count));for(let w=L,F=P;w<F;w+=3){const U=c.getX(w),D=c.getX(w+1),O=c.getX(w+2);r=pf(this,y,e,n,h,p,_,U,D,O),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const E=Math.max(0,v.start),M=Math.min(c.count,v.start+v.count);for(let S=E,y=M;S<y;S+=3){const L=c.getX(S),P=c.getX(S+1),w=c.getX(S+2);r=pf(this,u,e,n,h,p,_,L,P,w),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const S=g[E],y=u[S.materialIndex],L=Math.max(S.start,v.start),P=Math.min(d.count,Math.min(S.start+S.count,v.start+v.count));for(let w=L,F=P;w<F;w+=3){const U=w,D=w+1,O=w+2;r=pf(this,y,e,n,h,p,_,U,D,O),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const E=Math.max(0,v.start),M=Math.min(d.count,v.start+v.count);for(let S=E,y=M;S<y;S+=3){const L=S,P=S+1,w=S+2;r=pf(this,u,e,n,h,p,_,L,P,w),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}}}function kw(o,e,t,n,r,a,u,c){let d;if(e.side===Oi?d=n.intersectTriangle(u,a,r,!0,c):d=n.intersectTriangle(r,a,u,e.side===oo,c),d===null)return null;hf.copy(c),hf.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(hf);return h<t.near||h>t.far?null:{distance:h,point:hf.clone(),object:o}}function pf(o,e,t,n,r,a,u,c,d,h){o.getVertexPosition(c,uf),o.getVertexPosition(d,cf),o.getVertexPosition(h,ff);const p=kw(o,e,t,n,uf,cf,ff,Yv);if(p){const _=new de;br.getBarycoord(Yv,uf,cf,ff,_),r&&(p.uv=br.getInterpolatedAttribute(r,c,d,h,_,new Qt)),a&&(p.uv1=br.getInterpolatedAttribute(a,c,d,h,_,new Qt)),u&&(p.normal=br.getInterpolatedAttribute(u,c,d,h,_,new de),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:d,c:h,normal:new de,materialIndex:0};br.getNormal(uf,cf,ff,g.normal),p.face=g,p.barycoord=_}return p}class Ml extends oa{constructor(e=1,t=1,n=1,r=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:u};const c=this;r=Math.floor(r),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],p=[],_=[];let g=0,v=0;E("z","y","x",-1,-1,n,t,e,u,a,0),E("z","y","x",1,-1,n,t,-e,u,a,1),E("x","z","y",1,1,e,n,t,r,u,2),E("x","z","y",1,-1,e,n,-t,r,u,3),E("x","y","z",1,-1,e,t,n,r,a,4),E("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(d),this.setAttribute("position",new qo(h,3)),this.setAttribute("normal",new qo(p,3)),this.setAttribute("uv",new qo(_,2));function E(M,S,y,L,P,w,F,U,D,O,C){const T=w/D,B=F/O,Y=w/2,K=F/2,oe=U/2,ce=D+1,te=O+1;let Q=0,H=0;const le=new de;for(let I=0;I<te;I++){const k=I*B-K;for(let re=0;re<ce;re++){const Oe=re*T-Y;le[M]=Oe*L,le[S]=k*P,le[y]=oe,h.push(le.x,le.y,le.z),le[M]=0,le[S]=0,le[y]=U>0?1:-1,p.push(le.x,le.y,le.z),_.push(re/D),_.push(1-I/O),Q+=1}}for(let I=0;I<O;I++)for(let k=0;k<D;k++){const re=g+k+ce*I,Oe=g+k+ce*(I+1),Z=g+(k+1)+ce*(I+1),he=g+(k+1)+ce*I;d.push(re,Oe,he),d.push(Oe,Z,he),H+=6}c.addGroup(v,H,C),v+=H,g+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xl(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const r=o[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function gi(o){const e={};for(let t=0;t<o.length;t++){const n=xl(o[t]);for(const r in n)e[r]=n[r]}return e}function zw(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function ly(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Gt.workingColorSpace}const Bw={clone:xl,merge:gi};var Hw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ao extends qu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hw,this.fragmentShader=Vw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xl(e.uniforms),this.uniformsGroups=zw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?t.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[r]={type:"m4",value:u.toArray()}:t.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uy extends ki{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pn,this.projectionMatrix=new Pn,this.projectionMatrixInverse=new Pn,this.coordinateSystem=ps}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xs=new de,qv=new Qt,$v=new Qt;class ur extends uy{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bm*2*Math.atan(Math.tan(sp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xs.x,Xs.y).multiplyScalar(-e/Xs.z),Xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xs.x,Xs.y).multiplyScalar(-e/Xs.z)}getViewSize(e,t){return this.getViewBounds(e,qv,$v),t.subVectors($v,qv)}setViewOffset(e,t,n,r,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sp*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*r/d,t-=u.offsetY*n/h,r*=u.width/d,n*=u.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ha=-90,Va=1;class Gw extends ki{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ur(Ha,Va,e,t);r.layers=this.layers,this.add(r);const a=new ur(Ha,Va,e,t);a.layers=this.layers,this.add(a);const u=new ur(Ha,Va,e,t);u.layers=this.layers,this.add(u);const c=new ur(Ha,Va,e,t);c.layers=this.layers,this.add(c);const d=new ur(Ha,Va,e,t);d.layers=this.layers,this.add(d);const h=new ur(Ha,Va,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,u,c,d]=t;for(const h of t)this.remove(h);if(e===ps)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===td)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,d,h,p]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,u),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,d),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(_,g,v),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class cy extends Ti{constructor(e,t,n,r,a,u,c,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:pl,super(e,t,n,r,a,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ww extends ta{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new cy(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ml(5,5,5),a=new ao({name:"CubemapFromEquirect",uniforms:xl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oi,blending:to});a.uniforms.tEquirect.value=t;const u=new Vr(r,a),c=t.minFilter;return t.minFilter===Vo&&(t.minFilter=Hr),new Gw(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,r);e.setRenderTarget(a)}}class Xw extends ki{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qr,this.environmentIntensity=1,this.environmentRotation=new qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ap=new de,jw=new de,Yw=new Et;class Uo{constructor(e=new de(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ap.subVectors(n,t).cross(jw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ap),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yw.getNormalMatrix(e),r=this.coplanarPoint(Ap).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Po=new E_,mf=new de;class fy{constructor(e=new Uo,t=new Uo,n=new Uo,r=new Uo,a=new Uo,u=new Uo){this.planes=[e,t,n,r,a,u]}set(e,t,n,r,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ps){const n=this.planes,r=e.elements,a=r[0],u=r[1],c=r[2],d=r[3],h=r[4],p=r[5],_=r[6],g=r[7],v=r[8],E=r[9],M=r[10],S=r[11],y=r[12],L=r[13],P=r[14],w=r[15];if(n[0].setComponents(d-a,g-h,S-v,w-y).normalize(),n[1].setComponents(d+a,g+h,S+v,w+y).normalize(),n[2].setComponents(d+u,g+p,S+E,w+L).normalize(),n[3].setComponents(d-u,g-p,S-E,w-L).normalize(),n[4].setComponents(d-c,g-_,S-M,w-P).normalize(),t===ps)n[5].setComponents(d+c,g+_,S+M,w+P).normalize();else if(t===td)n[5].setComponents(c,_,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Po.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Po.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Po)}intersectsSprite(e){return Po.center.set(0,0,0),Po.radius=.7071067811865476,Po.applyMatrix4(e.matrixWorld),this.intersectsSphere(Po)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(mf.x=r.normal.x>0?e.max.x:e.min.x,mf.y=r.normal.y>0?e.max.y:e.min.y,mf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _f extends ki{constructor(){super(),this.isGroup=!0,this.type="Group"}}class dy extends Ti{constructor(e,t,n,r,a,u,c,d,h,p=il){if(p!==il&&p!==gl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===il&&(n=ea),n===void 0&&p===gl&&(n=_l),super(null,r,a,u,c,d,p,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Dr,this.minFilter=d!==void 0?d:Dr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fd extends oa{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,u=t/2,c=Math.floor(n),d=Math.floor(r),h=c+1,p=d+1,_=e/c,g=t/d,v=[],E=[],M=[],S=[];for(let y=0;y<p;y++){const L=y*g-u;for(let P=0;P<h;P++){const w=P*_-a;E.push(w,-L,0),M.push(0,0,1),S.push(P/c),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let L=0;L<c;L++){const P=L+h*y,w=L+h*(y+1),F=L+1+h*(y+1),U=L+1+h*y;v.push(P,w,U),v.push(w,F,U)}this.setIndex(v),this.setAttribute("position",new qo(E,3)),this.setAttribute("normal",new qo(M,3)),this.setAttribute("uv",new qo(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fd(e.width,e.height,e.widthSegments,e.heightSegments)}}class qw extends qu{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Q1,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $w extends qu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kw extends qu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kv={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Zw{constructor(e,t,n){const r=this;let a=!1,u=0,c=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){c++,a===!1&&r.onStart!==void 0&&r.onStart(p,u,c),a=!0},this.itemEnd=function(p){u++,r.onProgress!==void 0&&r.onProgress(p,u,c),u===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,_){return h.push(p,_),this},this.removeHandler=function(p){const _=h.indexOf(p);return _!==-1&&h.splice(_,2),this},this.getHandler=function(p){for(let _=0,g=h.length;_<g;_+=2){const v=h[_],E=h[_+1];if(v.global&&(v.lastIndex=0),v.test(p))return E}return null}}}const Qw=new Zw;class T_{constructor(e){this.manager=e!==void 0?e:Qw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}T_.DEFAULT_MATERIAL_NAME="__DEFAULT";class Jw extends T_{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=Kv.get(e);if(u!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u;const c=zu("img");function d(){p(),Kv.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(_){p(),r&&r(_),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){c.removeEventListener("load",d,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class e2 extends T_{constructor(e){super(e)}load(e,t,n,r){const a=new Ti,u=new Jw(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class t2 extends ki{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class n2 extends uy{constructor(e=-1,t=1,n=1,r=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class i2 extends t2{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class r2 extends ur{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Zv(o,e,t,n){const r=s2(n);switch(t){case X1:return o*e;case Y1:return o*e;case q1:return o*e*2;case $1:return o*e/r.components*r.byteLength;case y_:return o*e/r.components*r.byteLength;case K1:return o*e*2/r.components*r.byteLength;case S_:return o*e*2/r.components*r.byteLength;case j1:return o*e*3/r.components*r.byteLength;case Pr:return o*e*4/r.components*r.byteLength;case M_:return o*e*4/r.components*r.byteLength;case Nf:case Ff:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Of:case kf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case mm:case gm:return Math.max(o,16)*Math.max(e,8)/4;case pm:case _m:return Math.max(o,8)*Math.max(e,8)/2;case vm:case xm:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ym:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sm:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Mm:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Em:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Tm:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case wm:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Am:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Cm:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Rm:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case bm:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Pm:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Dm:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Lm:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Im:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Um:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case zf:case Nm:case Fm:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Z1:case Om:return Math.ceil(o/4)*Math.ceil(e/4)*8;case km:case zm:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function s2(o){switch(o){case ys:case V1:return{byteLength:1,components:1};case ku:case G1:case Wu:return{byteLength:2,components:1};case v_:case x_:return{byteLength:2,components:4};case ea:case g_:case hs:return{byteLength:4,components:1};case W1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:__}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=__);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hy(){let o=null,e=!1,t=null,n=null;function r(a,u){t(a,u),n=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function o2(o){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,_=h.byteLength,g=o.createBuffer();o.bindBuffer(d,g),o.bufferData(d,h,p),c.onUploadCallback();let v;if(h instanceof Float32Array)v=o.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?v=o.HALF_FLOAT:v=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=o.SHORT;else if(h instanceof Uint32Array)v=o.UNSIGNED_INT;else if(h instanceof Int32Array)v=o.INT;else if(h instanceof Int8Array)v=o.BYTE;else if(h instanceof Uint8Array)v=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:_}}function n(c,d,h){const p=d.array,_=d.updateRanges;if(o.bindBuffer(h,c),_.length===0)o.bufferSubData(h,0,p);else{_.sort((v,E)=>v.start-E.start);let g=0;for(let v=1;v<_.length;v++){const E=_[g],M=_[v];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++g,_[g]=M)}_.length=g+1;for(let v=0,E=_.length;v<E;v++){const M=_[v];o.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(o.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,d),h.version=c.version}}return{get:r,remove:a,update:u}}var a2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l2=`#ifdef USE_ALPHAHASH
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
#endif`,u2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h2=`#ifdef USE_AOMAP
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
#endif`,p2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m2=`#ifdef USE_BATCHING
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
#endif`,_2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y2=`#ifdef USE_IRIDESCENCE
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
#endif`,S2=`#ifdef USE_BUMPMAP
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
#endif`,M2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,P2=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,D2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L2=`vec3 transformedNormal = objectNormal;
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
#endif`,I2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O2="gl_FragColor = linearToOutputTexel( gl_FragColor );",k2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z2=`#ifdef USE_ENVMAP
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
#endif`,B2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H2=`#ifdef USE_ENVMAP
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
#endif`,V2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G2=`#ifdef USE_ENVMAP
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
#endif`,W2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q2=`#ifdef USE_GRADIENTMAP
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
}`,$2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q2=`uniform bool receiveShadow;
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
#endif`,J2=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,eA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,sA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oA=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,aA=`#if defined( RE_IndirectDiffuse )
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
#endif`,lA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_A=`#if defined( USE_POINTS_UV )
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
#endif`,gA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MA=`#ifdef USE_MORPHTARGETS
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
#endif`,EA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bA=`#ifdef USE_NORMALMAP
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
#endif`,PA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,FA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,GA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,XA=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,jA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YA=`#ifdef USE_SKINNING
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
#endif`,qA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$A=`#ifdef USE_SKINNING
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
#endif`,KA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eC=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tC=`#ifdef USE_TRANSMISSION
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
#endif`,nC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aC=`uniform sampler2D t2D;
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
}`,lC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dC=`#include <common>
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
}`,hC=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pC=`#define DISTANCE
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
}`,mC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,_C=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vC=`uniform float scale;
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
}`,xC=`uniform vec3 diffuse;
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
}`,yC=`#include <common>
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
}`,SC=`uniform vec3 diffuse;
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
}`,MC=`#define LAMBERT
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
}`,EC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,TC=`#define MATCAP
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
}`,wC=`#define MATCAP
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
}`,AC=`#define NORMAL
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
}`,CC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RC=`#define PHONG
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
}`,bC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,PC=`#define STANDARD
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
}`,DC=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,LC=`#define TOON
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
}`,IC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,UC=`uniform float size;
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
}`,NC=`uniform vec3 diffuse;
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
}`,FC=`#include <common>
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
}`,OC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,kC=`uniform float rotation;
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
}`,zC=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:a2,alphahash_pars_fragment:l2,alphamap_fragment:u2,alphamap_pars_fragment:c2,alphatest_fragment:f2,alphatest_pars_fragment:d2,aomap_fragment:h2,aomap_pars_fragment:p2,batching_pars_vertex:m2,batching_vertex:_2,begin_vertex:g2,beginnormal_vertex:v2,bsdfs:x2,iridescence_fragment:y2,bumpmap_pars_fragment:S2,clipping_planes_fragment:M2,clipping_planes_pars_fragment:E2,clipping_planes_pars_vertex:T2,clipping_planes_vertex:w2,color_fragment:A2,color_pars_fragment:C2,color_pars_vertex:R2,color_vertex:b2,common:P2,cube_uv_reflection_fragment:D2,defaultnormal_vertex:L2,displacementmap_pars_vertex:I2,displacementmap_vertex:U2,emissivemap_fragment:N2,emissivemap_pars_fragment:F2,colorspace_fragment:O2,colorspace_pars_fragment:k2,envmap_fragment:z2,envmap_common_pars_fragment:B2,envmap_pars_fragment:H2,envmap_pars_vertex:V2,envmap_physical_pars_fragment:J2,envmap_vertex:G2,fog_vertex:W2,fog_pars_vertex:X2,fog_fragment:j2,fog_pars_fragment:Y2,gradientmap_pars_fragment:q2,lightmap_pars_fragment:$2,lights_lambert_fragment:K2,lights_lambert_pars_fragment:Z2,lights_pars_begin:Q2,lights_toon_fragment:eA,lights_toon_pars_fragment:tA,lights_phong_fragment:nA,lights_phong_pars_fragment:iA,lights_physical_fragment:rA,lights_physical_pars_fragment:sA,lights_fragment_begin:oA,lights_fragment_maps:aA,lights_fragment_end:lA,logdepthbuf_fragment:uA,logdepthbuf_pars_fragment:cA,logdepthbuf_pars_vertex:fA,logdepthbuf_vertex:dA,map_fragment:hA,map_pars_fragment:pA,map_particle_fragment:mA,map_particle_pars_fragment:_A,metalnessmap_fragment:gA,metalnessmap_pars_fragment:vA,morphinstance_vertex:xA,morphcolor_vertex:yA,morphnormal_vertex:SA,morphtarget_pars_vertex:MA,morphtarget_vertex:EA,normal_fragment_begin:TA,normal_fragment_maps:wA,normal_pars_fragment:AA,normal_pars_vertex:CA,normal_vertex:RA,normalmap_pars_fragment:bA,clearcoat_normal_fragment_begin:PA,clearcoat_normal_fragment_maps:DA,clearcoat_pars_fragment:LA,iridescence_pars_fragment:IA,opaque_fragment:UA,packing:NA,premultiplied_alpha_fragment:FA,project_vertex:OA,dithering_fragment:kA,dithering_pars_fragment:zA,roughnessmap_fragment:BA,roughnessmap_pars_fragment:HA,shadowmap_pars_fragment:VA,shadowmap_pars_vertex:GA,shadowmap_vertex:WA,shadowmask_pars_fragment:XA,skinbase_vertex:jA,skinning_pars_vertex:YA,skinning_vertex:qA,skinnormal_vertex:$A,specularmap_fragment:KA,specularmap_pars_fragment:ZA,tonemapping_fragment:QA,tonemapping_pars_fragment:JA,transmission_fragment:eC,transmission_pars_fragment:tC,uv_pars_fragment:nC,uv_pars_vertex:iC,uv_vertex:rC,worldpos_vertex:sC,background_vert:oC,background_frag:aC,backgroundCube_vert:lC,backgroundCube_frag:uC,cube_vert:cC,cube_frag:fC,depth_vert:dC,depth_frag:hC,distanceRGBA_vert:pC,distanceRGBA_frag:mC,equirect_vert:_C,equirect_frag:gC,linedashed_vert:vC,linedashed_frag:xC,meshbasic_vert:yC,meshbasic_frag:SC,meshlambert_vert:MC,meshlambert_frag:EC,meshmatcap_vert:TC,meshmatcap_frag:wC,meshnormal_vert:AC,meshnormal_frag:CC,meshphong_vert:RC,meshphong_frag:bC,meshphysical_vert:PC,meshphysical_frag:DC,meshtoon_vert:LC,meshtoon_frag:IC,points_vert:UC,points_frag:NC,shadow_vert:FC,shadow_frag:OC,sprite_vert:kC,sprite_frag:zC},ze={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},kr={basic:{uniforms:gi([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:gi([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:gi([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:gi([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:gi([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:gi([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:gi([ze.points,ze.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:gi([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:gi([ze.common,ze.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:gi([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:gi([ze.sprite,ze.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:gi([ze.common,ze.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:gi([ze.lights,ze.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};kr.physical={uniforms:gi([kr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const gf={r:0,b:0,g:0},Do=new qr,BC=new Pn;function HC(o,e,t,n,r,a,u){const c=new Wt(0);let d=a===!0?0:1,h,p,_=null,g=0,v=null;function E(P){let w=P.isScene===!0?P.background:null;return w&&w.isTexture&&(w=(P.backgroundBlurriness>0?t:e).get(w)),w}function M(P){let w=!1;const F=E(P);F===null?y(c,d):F&&F.isColor&&(y(F,1),w=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,u):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(o.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(P,w){const F=E(w);F&&(F.isCubeTexture||F.mapping===cd)?(p===void 0&&(p=new Vr(new Ml(1,1,1),new ao({name:"BackgroundCubeMaterial",uniforms:xl(kr.backgroundCube.uniforms),vertexShader:kr.backgroundCube.vertexShader,fragmentShader:kr.backgroundCube.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Do.copy(w.backgroundRotation),Do.x*=-1,Do.y*=-1,Do.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Do.y*=-1,Do.z*=-1),p.material.uniforms.envMap.value=F,p.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(BC.makeRotationFromEuler(Do)),p.material.toneMapped=Gt.getTransfer(F.colorSpace)!==Zt,(_!==F||g!==F.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,_=F,g=F.version,v=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):F&&F.isTexture&&(h===void 0&&(h=new Vr(new fd(2,2),new ao({name:"BackgroundMaterial",uniforms:xl(kr.background.uniforms),vertexShader:kr.background.vertexShader,fragmentShader:kr.background.fragmentShader,side:oo,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=F,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=Gt.getTransfer(F.colorSpace)!==Zt,F.matrixAutoUpdate===!0&&F.updateMatrix(),h.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||g!==F.version||v!==o.toneMapping)&&(h.material.needsUpdate=!0,_=F,g=F.version,v=o.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function y(P,w){P.getRGB(gf,ly(o)),n.buffers.color.setClear(gf.r,gf.g,gf.b,w,u)}function L(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(P,w=1){c.set(P),d=w,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,y(c,d)},render:M,addToRenderList:S,dispose:L}}function VC(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},r=g(null);let a=r,u=!1;function c(T,B,Y,K,oe){let ce=!1;const te=_(K,Y,B);a!==te&&(a=te,h(a.object)),ce=v(T,K,Y,oe),ce&&E(T,K,Y,oe),oe!==null&&e.update(oe,o.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,w(T,B,Y,K),oe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function d(){return o.createVertexArray()}function h(T){return o.bindVertexArray(T)}function p(T){return o.deleteVertexArray(T)}function _(T,B,Y){const K=Y.wireframe===!0;let oe=n[T.id];oe===void 0&&(oe={},n[T.id]=oe);let ce=oe[B.id];ce===void 0&&(ce={},oe[B.id]=ce);let te=ce[K];return te===void 0&&(te=g(d()),ce[K]=te),te}function g(T){const B=[],Y=[],K=[];for(let oe=0;oe<t;oe++)B[oe]=0,Y[oe]=0,K[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:K,object:T,attributes:{},index:null}}function v(T,B,Y,K){const oe=a.attributes,ce=B.attributes;let te=0;const Q=Y.getAttributes();for(const H in Q)if(Q[H].location>=0){const I=oe[H];let k=ce[H];if(k===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(k=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(k=T.instanceColor)),I===void 0||I.attribute!==k||k&&I.data!==k.data)return!0;te++}return a.attributesNum!==te||a.index!==K}function E(T,B,Y,K){const oe={},ce=B.attributes;let te=0;const Q=Y.getAttributes();for(const H in Q)if(Q[H].location>=0){let I=ce[H];I===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(I=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(I=T.instanceColor));const k={};k.attribute=I,I&&I.data&&(k.data=I.data),oe[H]=k,te++}a.attributes=oe,a.attributesNum=te,a.index=K}function M(){const T=a.newAttributes;for(let B=0,Y=T.length;B<Y;B++)T[B]=0}function S(T){y(T,0)}function y(T,B){const Y=a.newAttributes,K=a.enabledAttributes,oe=a.attributeDivisors;Y[T]=1,K[T]===0&&(o.enableVertexAttribArray(T),K[T]=1),oe[T]!==B&&(o.vertexAttribDivisor(T,B),oe[T]=B)}function L(){const T=a.newAttributes,B=a.enabledAttributes;for(let Y=0,K=B.length;Y<K;Y++)B[Y]!==T[Y]&&(o.disableVertexAttribArray(Y),B[Y]=0)}function P(T,B,Y,K,oe,ce,te){te===!0?o.vertexAttribIPointer(T,B,Y,oe,ce):o.vertexAttribPointer(T,B,Y,K,oe,ce)}function w(T,B,Y,K){M();const oe=K.attributes,ce=Y.getAttributes(),te=B.defaultAttributeValues;for(const Q in ce){const H=ce[Q];if(H.location>=0){let le=oe[Q];if(le===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(le=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(le=T.instanceColor)),le!==void 0){const I=le.normalized,k=le.itemSize,re=e.get(le);if(re===void 0)continue;const Oe=re.buffer,Z=re.type,he=re.bytesPerElement,ye=Z===o.INT||Z===o.UNSIGNED_INT||le.gpuType===g_;if(le.isInterleavedBufferAttribute){const ge=le.data,we=ge.stride,Pe=le.offset;if(ge.isInstancedInterleavedBuffer){for(let Je=0;Je<H.locationSize;Je++)y(H.location+Je,ge.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Je=0;Je<H.locationSize;Je++)S(H.location+Je);o.bindBuffer(o.ARRAY_BUFFER,Oe);for(let Je=0;Je<H.locationSize;Je++)P(H.location+Je,k/H.locationSize,Z,I,we*he,(Pe+k/H.locationSize*Je)*he,ye)}else{if(le.isInstancedBufferAttribute){for(let ge=0;ge<H.locationSize;ge++)y(H.location+ge,le.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ge=0;ge<H.locationSize;ge++)S(H.location+ge);o.bindBuffer(o.ARRAY_BUFFER,Oe);for(let ge=0;ge<H.locationSize;ge++)P(H.location+ge,k/H.locationSize,Z,I,k*he,k/H.locationSize*ge*he,ye)}}else if(te!==void 0){const I=te[Q];if(I!==void 0)switch(I.length){case 2:o.vertexAttrib2fv(H.location,I);break;case 3:o.vertexAttrib3fv(H.location,I);break;case 4:o.vertexAttrib4fv(H.location,I);break;default:o.vertexAttrib1fv(H.location,I)}}}}L()}function F(){O();for(const T in n){const B=n[T];for(const Y in B){const K=B[Y];for(const oe in K)p(K[oe].object),delete K[oe];delete B[Y]}delete n[T]}}function U(T){if(n[T.id]===void 0)return;const B=n[T.id];for(const Y in B){const K=B[Y];for(const oe in K)p(K[oe].object),delete K[oe];delete B[Y]}delete n[T.id]}function D(T){for(const B in n){const Y=n[B];if(Y[T.id]===void 0)continue;const K=Y[T.id];for(const oe in K)p(K[oe].object),delete K[oe];delete Y[T.id]}}function O(){C(),u=!0,a!==r&&(a=r,h(a.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:O,resetDefaultState:C,dispose:F,releaseStatesOfGeometry:U,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:S,disableUnusedAttributes:L}}function GC(o,e,t){let n;function r(h){n=h}function a(h,p){o.drawArrays(n,h,p),t.update(p,n,1)}function u(h,p,_){_!==0&&(o.drawArraysInstanced(n,h,p,_),t.update(p,n,_))}function c(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,p,0,_);let v=0;for(let E=0;E<_;E++)v+=p[E];t.update(v,n,1)}function d(h,p,_,g){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let E=0;E<h.length;E++)u(h[E],p[E],g[E]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,p,0,g,0,_);let E=0;for(let M=0;M<_;M++)E+=p[M]*g[M];t.update(E,n,1)}}this.setMode=r,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function WC(o,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(D){return!(D!==Pr&&n.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const O=D===Wu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==ys&&n.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==hs&&!O)}function d(D){if(D==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const _=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,U=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:_,reverseDepthBuffer:g,maxTextures:v,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:w,vertexTextures:F,maxSamples:U}}function XC(o){const e=this;let t=null,n=0,r=!1,a=!1;const u=new Uo,c=new Et,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const v=_.length!==0||g||n!==0||r;return r=g,n=_.length,v},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,g){t=p(_,g,0)},this.setState=function(_,g,v){const E=_.clippingPlanes,M=_.clipIntersection,S=_.clipShadows,y=o.get(_);if(!r||E===null||E.length===0||a&&!S)a?p(null):h();else{const L=a?0:n,P=L*4;let w=y.clippingState||null;d.value=w,w=p(E,g,P,v);for(let F=0;F!==P;++F)w[F]=t[F];y.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(_,g,v,E){const M=_!==null?_.length:0;let S=null;if(M!==0){if(S=d.value,E!==!0||S===null){const y=v+M*4,L=g.matrixWorldInverse;c.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,w=v;P!==M;++P,w+=4)u.copy(_[P]).applyMatrix4(L,c),u.normal.toArray(S,w),S[w+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function jC(o){let e=new WeakMap;function t(u,c){return c===fm?u.mapping=pl:c===dm&&(u.mapping=ml),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===fm||c===dm)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new Ww(d.height);return h.fromEquirectangularTexture(o,u),e.set(u,h),u.addEventListener("dispose",r),t(h.texture,u.mapping)}else return null}}return u}function r(u){const c=u.target;c.removeEventListener("dispose",r);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Za=4,Qv=[.125,.215,.35,.446,.526,.582],zo=20,Cp=new n2,Jv=new Wt;let Rp=null,bp=0,Pp=0,Dp=!1;const No=(1+Math.sqrt(5))/2,Ga=1/No,ex=[new de(-No,Ga,0),new de(No,Ga,0),new de(-Ga,0,No),new de(Ga,0,No),new de(0,No,-Ga),new de(0,No,Ga),new de(-1,1,-1),new de(1,1,-1),new de(-1,1,1),new de(1,1,1)];class tx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Rp=this._renderer.getRenderTarget(),bp=this._renderer.getActiveCubeFace(),Pp=this._renderer.getActiveMipmapLevel(),Dp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ix(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rp,bp,Pp),this._renderer.xr.enabled=Dp,e.scissorTest=!1,vf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pl||e.mapping===ml?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rp=this._renderer.getRenderTarget(),bp=this._renderer.getActiveCubeFace(),Pp=this._renderer.getActiveMipmapLevel(),Dp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hr,minFilter:Hr,generateMipmaps:!1,type:Wu,format:Pr,colorSpace:vl,depthBuffer:!1},r=nx(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nx(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YC(a)),this._blurMaterial=qC(a,e,t)}return r}_compileMaterial(e){const t=new Vr(this._lodPlanes[0],e);this._renderer.compile(t,Cp)}_sceneToCubeUV(e,t,n,r){const c=new ur(90,1,t,n),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor(Jv),p.toneMapping=no,p.autoClear=!1;const v=new sy({name:"PMREM.Background",side:Oi,depthWrite:!1,depthTest:!1}),E=new Vr(new Ml,v);let M=!1;const S=e.background;S?S.isColor&&(v.color.copy(S),e.background=null,M=!0):(v.color.copy(Jv),M=!0);for(let y=0;y<6;y++){const L=y%3;L===0?(c.up.set(0,d[y],0),c.lookAt(h[y],0,0)):L===1?(c.up.set(0,0,d[y]),c.lookAt(0,h[y],0)):(c.up.set(0,d[y],0),c.lookAt(0,0,h[y]));const P=this._cubeSize;vf(r,L*P,y>2?P:0,P,P),p.setRenderTarget(r),M&&p.render(E,c),p.render(e,c)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=g,p.autoClear=_,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===pl||e.mapping===ml;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ix());const a=r?this._cubemapMaterial:this._equirectMaterial,u=new Vr(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;vf(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(u,Cp)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=ex[(r-a-1)%ex.length];this._blur(e,a-1,a,u,c)}t.autoClear=n}_blur(e,t,n,r,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,r,"latitudinal",a),this._halfBlur(u,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new Vr(this._lodPlanes[r],h),g=h.uniforms,v=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*zo-1),M=a/E,S=isFinite(a)?1+Math.floor(p*M):zo;S>zo&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${zo}`);const y=[];let L=0;for(let D=0;D<zo;++D){const O=D/M,C=Math.exp(-O*O/2);y.push(C),D===0?L+=C:D<S&&(L+=2*C)}for(let D=0;D<y.length;D++)y[D]=y[D]/L;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=u==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:P}=this;g.dTheta.value=E,g.mipInt.value=P-n;const w=this._sizeLods[r],F=3*w*(r>P-Za?r-P+Za:0),U=4*(this._cubeSize-w);vf(t,F,U,3*w,2*w),d.setRenderTarget(t),d.render(_,Cp)}}function YC(o){const e=[],t=[],n=[];let r=o;const a=o-Za+1+Qv.length;for(let u=0;u<a;u++){const c=Math.pow(2,r);t.push(c);let d=1/c;u>o-Za?d=Qv[u-o+Za-1]:u===0&&(d=0),n.push(d);const h=1/(c-2),p=-h,_=1+h,g=[p,p,_,p,_,_,p,p,_,_,p,_],v=6,E=6,M=3,S=2,y=1,L=new Float32Array(M*E*v),P=new Float32Array(S*E*v),w=new Float32Array(y*E*v);for(let U=0;U<v;U++){const D=U%3*2/3-1,O=U>2?0:-1,C=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];L.set(C,M*E*U),P.set(g,S*E*U);const T=[U,U,U,U,U,U];w.set(T,y*E*U)}const F=new oa;F.setAttribute("position",new Xr(L,M)),F.setAttribute("uv",new Xr(P,S)),F.setAttribute("faceIndex",new Xr(w,y)),e.push(F),r>Za&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nx(o,e,t){const n=new ta(o,e,t);return n.texture.mapping=cd,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vf(o,e,t,n,r){o.viewport.set(e,t,n,r),o.scissor.set(e,t,n,r)}function qC(o,e,t){const n=new Float32Array(zo),r=new de(0,1,0);return new ao({name:"SphericalGaussianBlur",defines:{n:zo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:w_(),fragmentShader:`

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
		`,blending:to,depthTest:!1,depthWrite:!1})}function ix(){return new ao({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:w_(),fragmentShader:`

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
		`,blending:to,depthTest:!1,depthWrite:!1})}function rx(){return new ao({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:w_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:to,depthTest:!1,depthWrite:!1})}function w_(){return`

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
	`}function $C(o){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const d=c.mapping,h=d===fm||d===dm,p=d===pl||d===ml;if(h||p){let _=e.get(c);const g=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new tx(o)),_=h?t.fromEquirectangular(c,_):t.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),_.texture;if(_!==void 0)return _.texture;{const v=c.image;return h&&v&&v.height>0||p&&v&&r(v)?(t===null&&(t=new tx(o)),_=h?t.fromEquirectangular(c):t.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),c.addEventListener("dispose",a),_.texture):null}}}return c}function r(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function KC(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ja("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ZC(o,e,t,n){const r={},a=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete r[g.id];const v=a.get(g);v&&(e.remove(v),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(_,g){return r[g.id]===!0||(g.addEventListener("dispose",u),r[g.id]=!0,t.memory.geometries++),g}function d(_){const g=_.attributes;for(const v in g)e.update(g[v],o.ARRAY_BUFFER)}function h(_){const g=[],v=_.index,E=_.attributes.position;let M=0;if(v!==null){const L=v.array;M=v.version;for(let P=0,w=L.length;P<w;P+=3){const F=L[P+0],U=L[P+1],D=L[P+2];g.push(F,U,U,D,D,F)}}else if(E!==void 0){const L=E.array;M=E.version;for(let P=0,w=L.length/3-1;P<w;P+=3){const F=P+0,U=P+1,D=P+2;g.push(F,U,U,D,D,F)}}else return;const S=new(ey(g)?ay:oy)(g,1);S.version=M;const y=a.get(_);y&&e.remove(y),a.set(_,S)}function p(_){const g=a.get(_);if(g){const v=_.index;v!==null&&g.version<v.version&&h(_)}else h(_);return a.get(_)}return{get:c,update:d,getWireframeAttribute:p}}function QC(o,e,t){let n;function r(g){n=g}let a,u;function c(g){a=g.type,u=g.bytesPerElement}function d(g,v){o.drawElements(n,v,a,g*u),t.update(v,n,1)}function h(g,v,E){E!==0&&(o.drawElementsInstanced(n,v,a,g*u,E),t.update(v,n,E))}function p(g,v,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,a,g,0,E);let S=0;for(let y=0;y<E;y++)S+=v[y];t.update(S,n,1)}function _(g,v,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<g.length;y++)h(g[y]/u,v[y],M[y]);else{S.multiDrawElementsInstancedWEBGL(n,v,0,a,g,0,M,0,E);let y=0;for(let L=0;L<E;L++)y+=v[L]*M[L];t.update(y,n,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function JC(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=c*(a/3);break;case o.LINES:t.lines+=c*(a/2);break;case o.LINE_STRIP:t.lines+=c*(a-1);break;case o.LINE_LOOP:t.lines+=c*a;break;case o.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function eR(o,e,t){const n=new WeakMap,r=new Tn;function a(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=p!==void 0?p.length:0;let g=n.get(c);if(g===void 0||g.count!==_){let T=function(){O.dispose(),n.delete(c),c.removeEventListener("dispose",T)};var v=T;g!==void 0&&g.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],L=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let w=0;E===!0&&(w=1),M===!0&&(w=2),S===!0&&(w=3);let F=c.attributes.position.count*w,U=1;F>e.maxTextureSize&&(U=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const D=new Float32Array(F*U*4*_),O=new ny(D,F,U,_);O.type=hs,O.needsUpdate=!0;const C=w*4;for(let B=0;B<_;B++){const Y=y[B],K=L[B],oe=P[B],ce=F*U*4*B;for(let te=0;te<Y.count;te++){const Q=te*C;E===!0&&(r.fromBufferAttribute(Y,te),D[ce+Q+0]=r.x,D[ce+Q+1]=r.y,D[ce+Q+2]=r.z,D[ce+Q+3]=0),M===!0&&(r.fromBufferAttribute(K,te),D[ce+Q+4]=r.x,D[ce+Q+5]=r.y,D[ce+Q+6]=r.z,D[ce+Q+7]=0),S===!0&&(r.fromBufferAttribute(oe,te),D[ce+Q+8]=r.x,D[ce+Q+9]=r.y,D[ce+Q+10]=r.z,D[ce+Q+11]=oe.itemSize===4?r.w:1)}}g={count:_,texture:O,size:new Qt(F,U)},n.set(c,g),c.addEventListener("dispose",T)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<h.length;S++)E+=h[S];const M=c.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:a}}function tR(o,e,t,n){let r=new WeakMap;function a(d){const h=n.render.frame,p=d.geometry,_=e.get(d,p);if(r.get(_)!==h&&(e.update(_),r.set(_,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),r.get(d)!==h&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),r.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return _}function u(){r=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:u}}const py=new Ti,sx=new dy(1,1),my=new ny,_y=new Cw,gy=new cy,ox=[],ax=[],lx=new Float32Array(16),ux=new Float32Array(9),cx=new Float32Array(4);function El(o,e,t){const n=o[0];if(n<=0||n>0)return o;const r=e*t;let a=ox[r];if(a===void 0&&(a=new Float32Array(r),ox[r]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,o[u].toArray(a,c)}return a}function Nn(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Fn(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function dd(o,e){let t=ax[e];t===void 0&&(t=new Int32Array(e),ax[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function nR(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function iR(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;o.uniform2fv(this.addr,e),Fn(t,e)}}function rR(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nn(t,e))return;o.uniform3fv(this.addr,e),Fn(t,e)}}function sR(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;o.uniform4fv(this.addr,e),Fn(t,e)}}function oR(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Fn(t,e)}else{if(Nn(t,n))return;cx.set(n),o.uniformMatrix2fv(this.addr,!1,cx),Fn(t,n)}}function aR(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Fn(t,e)}else{if(Nn(t,n))return;ux.set(n),o.uniformMatrix3fv(this.addr,!1,ux),Fn(t,n)}}function lR(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Fn(t,e)}else{if(Nn(t,n))return;lx.set(n),o.uniformMatrix4fv(this.addr,!1,lx),Fn(t,n)}}function uR(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function cR(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;o.uniform2iv(this.addr,e),Fn(t,e)}}function fR(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;o.uniform3iv(this.addr,e),Fn(t,e)}}function dR(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;o.uniform4iv(this.addr,e),Fn(t,e)}}function hR(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function pR(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;o.uniform2uiv(this.addr,e),Fn(t,e)}}function mR(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;o.uniform3uiv(this.addr,e),Fn(t,e)}}function _R(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;o.uniform4uiv(this.addr,e),Fn(t,e)}}function gR(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r);let a;this.type===o.SAMPLER_2D_SHADOW?(sx.compareFunction=J1,a=sx):a=py,t.setTexture2D(e||a,r)}function vR(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||_y,r)}function xR(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||gy,r)}function yR(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||my,r)}function SR(o){switch(o){case 5126:return nR;case 35664:return iR;case 35665:return rR;case 35666:return sR;case 35674:return oR;case 35675:return aR;case 35676:return lR;case 5124:case 35670:return uR;case 35667:case 35671:return cR;case 35668:case 35672:return fR;case 35669:case 35673:return dR;case 5125:return hR;case 36294:return pR;case 36295:return mR;case 36296:return _R;case 35678:case 36198:case 36298:case 36306:case 35682:return gR;case 35679:case 36299:case 36307:return vR;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return yR}}function MR(o,e){o.uniform1fv(this.addr,e)}function ER(o,e){const t=El(e,this.size,2);o.uniform2fv(this.addr,t)}function TR(o,e){const t=El(e,this.size,3);o.uniform3fv(this.addr,t)}function wR(o,e){const t=El(e,this.size,4);o.uniform4fv(this.addr,t)}function AR(o,e){const t=El(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function CR(o,e){const t=El(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function RR(o,e){const t=El(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function bR(o,e){o.uniform1iv(this.addr,e)}function PR(o,e){o.uniform2iv(this.addr,e)}function DR(o,e){o.uniform3iv(this.addr,e)}function LR(o,e){o.uniform4iv(this.addr,e)}function IR(o,e){o.uniform1uiv(this.addr,e)}function UR(o,e){o.uniform2uiv(this.addr,e)}function NR(o,e){o.uniform3uiv(this.addr,e)}function FR(o,e){o.uniform4uiv(this.addr,e)}function OR(o,e,t){const n=this.cache,r=e.length,a=dd(t,r);Nn(n,a)||(o.uniform1iv(this.addr,a),Fn(n,a));for(let u=0;u!==r;++u)t.setTexture2D(e[u]||py,a[u])}function kR(o,e,t){const n=this.cache,r=e.length,a=dd(t,r);Nn(n,a)||(o.uniform1iv(this.addr,a),Fn(n,a));for(let u=0;u!==r;++u)t.setTexture3D(e[u]||_y,a[u])}function zR(o,e,t){const n=this.cache,r=e.length,a=dd(t,r);Nn(n,a)||(o.uniform1iv(this.addr,a),Fn(n,a));for(let u=0;u!==r;++u)t.setTextureCube(e[u]||gy,a[u])}function BR(o,e,t){const n=this.cache,r=e.length,a=dd(t,r);Nn(n,a)||(o.uniform1iv(this.addr,a),Fn(n,a));for(let u=0;u!==r;++u)t.setTexture2DArray(e[u]||my,a[u])}function HR(o){switch(o){case 5126:return MR;case 35664:return ER;case 35665:return TR;case 35666:return wR;case 35674:return AR;case 35675:return CR;case 35676:return RR;case 5124:case 35670:return bR;case 35667:case 35671:return PR;case 35668:case 35672:return DR;case 35669:case 35673:return LR;case 5125:return IR;case 36294:return UR;case 36295:return NR;case 36296:return FR;case 35678:case 36198:case 36298:case 36306:case 35682:return OR;case 35679:case 36299:case 36307:return kR;case 35680:case 36300:case 36308:case 36293:return zR;case 36289:case 36303:case 36311:case 36292:return BR}}class VR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=SR(t.type)}}class GR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HR(t.type)}}class WR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,u=r.length;a!==u;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const Lp=/(\w+)(\])?(\[|\.)?/g;function fx(o,e){o.seq.push(e),o.map[e.id]=e}function XR(o,e,t){const n=o.name,r=n.length;for(Lp.lastIndex=0;;){const a=Lp.exec(n),u=Lp.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===r){fx(t,h===void 0?new VR(c,o,e):new GR(c,o,e));break}else{let _=t.map[c];_===void 0&&(_=new WR(c),fx(t,_)),t=_}}}class Bf{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),u=e.getUniformLocation(t,a.name);XR(a,u,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,u=t.length;a!==u;++a){const c=t[a],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const u=e[r];u.id in t&&n.push(u)}return n}}function dx(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const jR=37297;let YR=0;function qR(o,e){const t=o.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=r;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const hx=new Et;function $R(o){Gt._getMatrix(hx,Gt.workingColorSpace,o);const e=`mat3( ${hx.elements.map(t=>t.toFixed(4))} )`;switch(Gt.getTransfer(o)){case ed:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function px(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),r=o.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+qR(o.getShaderSource(e),u)}else return r}function KR(o,e){const t=$R(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ZR(o,e){let t;switch(e){case JT:t="Linear";break;case ew:t="Reinhard";break;case tw:t="Cineon";break;case nw:t="ACESFilmic";break;case rw:t="AgX";break;case sw:t="Neutral";break;case iw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xf=new de;function QR(){Gt.getLuminanceCoefficients(xf);const o=xf.x.toFixed(4),e=xf.y.toFixed(4),t=xf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(du).join(`
`)}function e3(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function t3(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=o.getActiveAttrib(e,r),u=a.name;let c=1;a.type===o.FLOAT_MAT2&&(c=2),a.type===o.FLOAT_MAT3&&(c=3),a.type===o.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:o.getAttribLocation(e,u),locationSize:c}}return t}function du(o){return o!==""}function mx(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _x(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hm(o){return o.replace(n3,r3)}const i3=new Map;function r3(o,e){let t=Tt[e];if(t===void 0){const n=i3.get(e);if(n!==void 0)t=Tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hm(t)}const s3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gx(o){return o.replace(s3,o3)}function o3(o,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function vx(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function a3(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===z1?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===LT?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ls&&(e="SHADOWMAP_TYPE_VSM"),e}function l3(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case pl:case ml:e="ENVMAP_TYPE_CUBE";break;case cd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u3(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ml:e="ENVMAP_MODE_REFRACTION";break}return e}function c3(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case B1:e="ENVMAP_BLENDING_MULTIPLY";break;case ZT:e="ENVMAP_BLENDING_MIX";break;case QT:e="ENVMAP_BLENDING_ADD";break}return e}function f3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function d3(o,e,t,n){const r=o.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=a3(t),h=l3(t),p=u3(t),_=c3(t),g=f3(t),v=JR(t),E=e3(a),M=r.createProgram();let S,y,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(du).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(du).join(`
`),y.length>0&&(y+=`
`)):(S=[vx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(du).join(`
`),y=[vx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==no?"#define TONE_MAPPING":"",t.toneMapping!==no?Tt.tonemapping_pars_fragment:"",t.toneMapping!==no?ZR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,KR("linearToOutputTexel",t.outputColorSpace),QR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(du).join(`
`)),u=Hm(u),u=mx(u,t),u=_x(u,t),c=Hm(c),c=mx(c,t),c=_x(c,t),u=gx(u),c=gx(c),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===Lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=L+S+u,w=L+y+c,F=dx(r,r.VERTEX_SHADER,P),U=dx(r,r.FRAGMENT_SHADER,w);r.attachShader(M,F),r.attachShader(M,U),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function D(B){if(o.debug.checkShaderErrors){const Y=r.getProgramInfoLog(M).trim(),K=r.getShaderInfoLog(F).trim(),oe=r.getShaderInfoLog(U).trim();let ce=!0,te=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ce=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,M,F,U);else{const Q=px(r,F,"vertex"),H=px(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Y+`
`+Q+`
`+H)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(K===""||oe==="")&&(te=!1);te&&(B.diagnostics={runnable:ce,programLog:Y,vertexShader:{log:K,prefix:S},fragmentShader:{log:oe,prefix:y}})}r.deleteShader(F),r.deleteShader(U),O=new Bf(r,M),C=t3(r,M)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let C;this.getAttributes=function(){return C===void 0&&D(this),C};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(M,jR)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YR++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=F,this.fragmentShader=U,this}let h3=0;class p3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new m3(e),t.set(e,n)),n}}class m3{constructor(e){this.id=h3++,this.code=e,this.usedTimes=0}}function _3(o,e,t,n,r,a,u){const c=new iy,d=new p3,h=new Set,p=[],_=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(C){return h.add(C),C===0?"uv":`uv${C}`}function S(C,T,B,Y,K){const oe=Y.fog,ce=K.geometry,te=C.isMeshStandardMaterial?Y.environment:null,Q=(C.isMeshStandardMaterial?t:e).get(C.envMap||te),H=Q&&Q.mapping===cd?Q.image.height:null,le=E[C.type];C.precision!==null&&(v=r.getMaxPrecision(C.precision),v!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",v,"instead."));const I=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,k=I!==void 0?I.length:0;let re=0;ce.morphAttributes.position!==void 0&&(re=1),ce.morphAttributes.normal!==void 0&&(re=2),ce.morphAttributes.color!==void 0&&(re=3);let Oe,Z,he,ye;if(le){const ke=kr[le];Oe=ke.vertexShader,Z=ke.fragmentShader}else Oe=C.vertexShader,Z=C.fragmentShader,d.update(C),he=d.getVertexShaderID(C),ye=d.getFragmentShaderID(C);const ge=o.getRenderTarget(),we=o.state.buffers.depth.getReversed(),Pe=K.isInstancedMesh===!0,Je=K.isBatchedMesh===!0,St=!!C.map,gt=!!C.matcap,tt=!!Q,G=!!C.aoMap,Xt=!!C.lightMap,dt=!!C.bumpMap,J=!!C.normalMap,Ve=!!C.displacementMap,wt=!!C.emissiveMap,Xe=!!C.metalnessMap,N=!!C.roughnessMap,R=C.anisotropy>0,ne=C.clearcoat>0,ve=C.dispersion>0,_e=C.iridescence>0,me=C.sheen>0,Ie=C.transmission>0,Ce=R&&!!C.anisotropyMap,Ne=ne&&!!C.clearcoatMap,mt=ne&&!!C.clearcoatNormalMap,Ee=ne&&!!C.clearcoatRoughnessMap,be=_e&&!!C.iridescenceMap,it=_e&&!!C.iridescenceThicknessMap,rt=me&&!!C.sheenColorMap,Be=me&&!!C.sheenRoughnessMap,yt=!!C.specularMap,st=!!C.specularColorMap,At=!!C.specularIntensityMap,V=Ie&&!!C.transmissionMap,De=Ie&&!!C.thicknessMap,fe=!!C.gradientMap,pe=!!C.alphaMap,Le=C.alphaTest>0,Ue=!!C.alphaHash,ht=!!C.extensions;let Ut=no;C.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ut=o.toneMapping);const rn={shaderID:le,shaderType:C.type,shaderName:C.name,vertexShader:Oe,fragmentShader:Z,defines:C.defines,customVertexShaderID:he,customFragmentShaderID:ye,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:v,batching:Je,batchingColor:Je&&K._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&K.instanceColor!==null,instancingMorph:Pe&&K.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ge===null?o.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:vl,alphaToCoverage:!!C.alphaToCoverage,map:St,matcap:gt,envMap:tt,envMapMode:tt&&Q.mapping,envMapCubeUVHeight:H,aoMap:G,lightMap:Xt,bumpMap:dt,normalMap:J,displacementMap:g&&Ve,emissiveMap:wt,normalMapObjectSpace:J&&C.normalMapType===uw,normalMapTangentSpace:J&&C.normalMapType===Q1,metalnessMap:Xe,roughnessMap:N,anisotropy:R,anisotropyMap:Ce,clearcoat:ne,clearcoatMap:Ne,clearcoatNormalMap:mt,clearcoatRoughnessMap:Ee,dispersion:ve,iridescence:_e,iridescenceMap:be,iridescenceThicknessMap:it,sheen:me,sheenColorMap:rt,sheenRoughnessMap:Be,specularMap:yt,specularColorMap:st,specularIntensityMap:At,transmission:Ie,transmissionMap:V,thicknessMap:De,gradientMap:fe,opaque:C.transparent===!1&&C.blending===nl&&C.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:Ue,combine:C.combine,mapUv:St&&M(C.map.channel),aoMapUv:G&&M(C.aoMap.channel),lightMapUv:Xt&&M(C.lightMap.channel),bumpMapUv:dt&&M(C.bumpMap.channel),normalMapUv:J&&M(C.normalMap.channel),displacementMapUv:Ve&&M(C.displacementMap.channel),emissiveMapUv:wt&&M(C.emissiveMap.channel),metalnessMapUv:Xe&&M(C.metalnessMap.channel),roughnessMapUv:N&&M(C.roughnessMap.channel),anisotropyMapUv:Ce&&M(C.anisotropyMap.channel),clearcoatMapUv:Ne&&M(C.clearcoatMap.channel),clearcoatNormalMapUv:mt&&M(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&M(C.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&M(C.iridescenceMap.channel),iridescenceThicknessMapUv:it&&M(C.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&M(C.sheenColorMap.channel),sheenRoughnessMapUv:Be&&M(C.sheenRoughnessMap.channel),specularMapUv:yt&&M(C.specularMap.channel),specularColorMapUv:st&&M(C.specularColorMap.channel),specularIntensityMapUv:At&&M(C.specularIntensityMap.channel),transmissionMapUv:V&&M(C.transmissionMap.channel),thicknessMapUv:De&&M(C.thicknessMap.channel),alphaMapUv:pe&&M(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(J||R),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ce.attributes.uv&&(St||pe),fog:!!oe,useFog:C.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:we,skinning:K.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ut,decodeVideoTexture:St&&C.map.isVideoTexture===!0&&Gt.getTransfer(C.map.colorSpace)===Zt,decodeVideoTextureEmissive:wt&&C.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(C.emissiveMap.colorSpace)===Zt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===fs,flipSided:C.side===Oi,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ht&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&C.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return rn.vertexUv1s=h.has(1),rn.vertexUv2s=h.has(2),rn.vertexUv3s=h.has(3),h.clear(),rn}function y(C){const T=[];if(C.shaderID?T.push(C.shaderID):(T.push(C.customVertexShaderID),T.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)T.push(B),T.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(L(T,C),P(T,C),T.push(o.outputColorSpace)),T.push(C.customProgramCacheKey),T.join()}function L(C,T){C.push(T.precision),C.push(T.outputColorSpace),C.push(T.envMapMode),C.push(T.envMapCubeUVHeight),C.push(T.mapUv),C.push(T.alphaMapUv),C.push(T.lightMapUv),C.push(T.aoMapUv),C.push(T.bumpMapUv),C.push(T.normalMapUv),C.push(T.displacementMapUv),C.push(T.emissiveMapUv),C.push(T.metalnessMapUv),C.push(T.roughnessMapUv),C.push(T.anisotropyMapUv),C.push(T.clearcoatMapUv),C.push(T.clearcoatNormalMapUv),C.push(T.clearcoatRoughnessMapUv),C.push(T.iridescenceMapUv),C.push(T.iridescenceThicknessMapUv),C.push(T.sheenColorMapUv),C.push(T.sheenRoughnessMapUv),C.push(T.specularMapUv),C.push(T.specularColorMapUv),C.push(T.specularIntensityMapUv),C.push(T.transmissionMapUv),C.push(T.thicknessMapUv),C.push(T.combine),C.push(T.fogExp2),C.push(T.sizeAttenuation),C.push(T.morphTargetsCount),C.push(T.morphAttributeCount),C.push(T.numDirLights),C.push(T.numPointLights),C.push(T.numSpotLights),C.push(T.numSpotLightMaps),C.push(T.numHemiLights),C.push(T.numRectAreaLights),C.push(T.numDirLightShadows),C.push(T.numPointLightShadows),C.push(T.numSpotLightShadows),C.push(T.numSpotLightShadowsWithMaps),C.push(T.numLightProbes),C.push(T.shadowMapType),C.push(T.toneMapping),C.push(T.numClippingPlanes),C.push(T.numClipIntersection),C.push(T.depthPacking)}function P(C,T){c.disableAll(),T.supportsVertexTextures&&c.enable(0),T.instancing&&c.enable(1),T.instancingColor&&c.enable(2),T.instancingMorph&&c.enable(3),T.matcap&&c.enable(4),T.envMap&&c.enable(5),T.normalMapObjectSpace&&c.enable(6),T.normalMapTangentSpace&&c.enable(7),T.clearcoat&&c.enable(8),T.iridescence&&c.enable(9),T.alphaTest&&c.enable(10),T.vertexColors&&c.enable(11),T.vertexAlphas&&c.enable(12),T.vertexUv1s&&c.enable(13),T.vertexUv2s&&c.enable(14),T.vertexUv3s&&c.enable(15),T.vertexTangents&&c.enable(16),T.anisotropy&&c.enable(17),T.alphaHash&&c.enable(18),T.batching&&c.enable(19),T.dispersion&&c.enable(20),T.batchingColor&&c.enable(21),C.push(c.mask),c.disableAll(),T.fog&&c.enable(0),T.useFog&&c.enable(1),T.flatShading&&c.enable(2),T.logarithmicDepthBuffer&&c.enable(3),T.reverseDepthBuffer&&c.enable(4),T.skinning&&c.enable(5),T.morphTargets&&c.enable(6),T.morphNormals&&c.enable(7),T.morphColors&&c.enable(8),T.premultipliedAlpha&&c.enable(9),T.shadowMapEnabled&&c.enable(10),T.doubleSided&&c.enable(11),T.flipSided&&c.enable(12),T.useDepthPacking&&c.enable(13),T.dithering&&c.enable(14),T.transmission&&c.enable(15),T.sheen&&c.enable(16),T.opaque&&c.enable(17),T.pointsUvs&&c.enable(18),T.decodeVideoTexture&&c.enable(19),T.decodeVideoTextureEmissive&&c.enable(20),T.alphaToCoverage&&c.enable(21),C.push(c.mask)}function w(C){const T=E[C.type];let B;if(T){const Y=kr[T];B=Bw.clone(Y.uniforms)}else B=C.uniforms;return B}function F(C,T){let B;for(let Y=0,K=p.length;Y<K;Y++){const oe=p[Y];if(oe.cacheKey===T){B=oe,++B.usedTimes;break}}return B===void 0&&(B=new d3(o,T,C,a),p.push(B)),B}function U(C){if(--C.usedTimes===0){const T=p.indexOf(C);p[T]=p[p.length-1],p.pop(),C.destroy()}}function D(C){d.remove(C)}function O(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:w,acquireProgram:F,releaseProgram:U,releaseShaderCache:D,programs:p,dispose:O}}function g3(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let c=o.get(u);return c===void 0&&(c={},o.set(u,c)),c}function n(u){o.delete(u)}function r(u,c,d){o.get(u)[c]=d}function a(){o=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function v3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function xx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function yx(){const o=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function u(_,g,v,E,M,S){let y=o[e];return y===void 0?(y={id:_.id,object:_,geometry:g,material:v,groupOrder:E,renderOrder:_.renderOrder,z:M,group:S},o[e]=y):(y.id=_.id,y.object=_,y.geometry=g,y.material=v,y.groupOrder=E,y.renderOrder=_.renderOrder,y.z=M,y.group=S),e++,y}function c(_,g,v,E,M,S){const y=u(_,g,v,E,M,S);v.transmission>0?n.push(y):v.transparent===!0?r.push(y):t.push(y)}function d(_,g,v,E,M,S){const y=u(_,g,v,E,M,S);v.transmission>0?n.unshift(y):v.transparent===!0?r.unshift(y):t.unshift(y)}function h(_,g){t.length>1&&t.sort(_||v3),n.length>1&&n.sort(g||xx),r.length>1&&r.sort(g||xx)}function p(){for(let _=e,g=o.length;_<g;_++){const v=o[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:d,finish:p,sort:h}}function x3(){let o=new WeakMap;function e(n,r){const a=o.get(n);let u;return a===void 0?(u=new yx,o.set(n,[u])):r>=a.length?(u=new yx,a.push(u)):u=a[r],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function y3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new de,color:new Wt};break;case"SpotLight":t={position:new de,direction:new de,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new de,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new de,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":t={color:new Wt,position:new de,halfWidth:new de,halfHeight:new de};break}return o[e.id]=t,t}}}function S3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let M3=0;function E3(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function T3(o){const e=new y3,t=S3(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new de);const r=new de,a=new Pn,u=new Pn;function c(h){let p=0,_=0,g=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let v=0,E=0,M=0,S=0,y=0,L=0,P=0,w=0,F=0,U=0,D=0;h.sort(E3);for(let C=0,T=h.length;C<T;C++){const B=h[C],Y=B.color,K=B.intensity,oe=B.distance,ce=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=Y.r*K,_+=Y.g*K,g+=Y.b*K;else if(B.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(B.sh.coefficients[te],K);D++}else if(B.isDirectionalLight){const te=e.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Q=B.shadow,H=t.get(B);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.directionalShadow[v]=H,n.directionalShadowMap[v]=ce,n.directionalShadowMatrix[v]=B.shadow.matrix,L++}n.directional[v]=te,v++}else if(B.isSpotLight){const te=e.get(B);te.position.setFromMatrixPosition(B.matrixWorld),te.color.copy(Y).multiplyScalar(K),te.distance=oe,te.coneCos=Math.cos(B.angle),te.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),te.decay=B.decay,n.spot[M]=te;const Q=B.shadow;if(B.map&&(n.spotLightMap[F]=B.map,F++,Q.updateMatrices(B),B.castShadow&&U++),n.spotLightMatrix[M]=Q.matrix,B.castShadow){const H=t.get(B);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=ce,w++}M++}else if(B.isRectAreaLight){const te=e.get(B);te.color.copy(Y).multiplyScalar(K),te.halfWidth.set(B.width*.5,0,0),te.halfHeight.set(0,B.height*.5,0),n.rectArea[S]=te,S++}else if(B.isPointLight){const te=e.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity),te.distance=B.distance,te.decay=B.decay,B.castShadow){const Q=B.shadow,H=t.get(B);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,n.pointShadow[E]=H,n.pointShadowMap[E]=ce,n.pointShadowMatrix[E]=B.shadow.matrix,P++}n.point[E]=te,E++}else if(B.isHemisphereLight){const te=e.get(B);te.skyColor.copy(B.color).multiplyScalar(K),te.groundColor.copy(B.groundColor).multiplyScalar(K),n.hemi[y]=te,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=_,n.ambient[2]=g;const O=n.hash;(O.directionalLength!==v||O.pointLength!==E||O.spotLength!==M||O.rectAreaLength!==S||O.hemiLength!==y||O.numDirectionalShadows!==L||O.numPointShadows!==P||O.numSpotShadows!==w||O.numSpotMaps!==F||O.numLightProbes!==D)&&(n.directional.length=v,n.spot.length=M,n.rectArea.length=S,n.point.length=E,n.hemi.length=y,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=w+F-U,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=D,O.directionalLength=v,O.pointLength=E,O.spotLength=M,O.rectAreaLength=S,O.hemiLength=y,O.numDirectionalShadows=L,O.numPointShadows=P,O.numSpotShadows=w,O.numSpotMaps=F,O.numLightProbes=D,n.version=M3++)}function d(h,p){let _=0,g=0,v=0,E=0,M=0;const S=p.matrixWorldInverse;for(let y=0,L=h.length;y<L;y++){const P=h[y];if(P.isDirectionalLight){const w=n.directional[_];w.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(S),_++}else if(P.isSpotLight){const w=n.spot[v];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(S),v++}else if(P.isRectAreaLight){const w=n.rectArea[E];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(S),u.identity(),a.copy(P.matrixWorld),a.premultiply(S),u.extractRotation(a),w.halfWidth.set(P.width*.5,0,0),w.halfHeight.set(0,P.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const w=n.point[g];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(S),g++}else if(P.isHemisphereLight){const w=n.hemi[M];w.direction.setFromMatrixPosition(P.matrixWorld),w.direction.transformDirection(S),M++}}}return{setup:c,setupView:d,state:n}}function Sx(o){const e=new T3(o),t=[],n=[];function r(p){h.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function u(p){n.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:u}}function w3(o){let e=new WeakMap;function t(r,a=0){const u=e.get(r);let c;return u===void 0?(c=new Sx(o),e.set(r,[c])):a>=u.length?(c=new Sx(o),u.push(c)):c=u[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const A3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R3(o,e,t){let n=new fy;const r=new Qt,a=new Qt,u=new Tn,c=new $w({depthPacking:lw}),d=new Kw,h={},p=t.maxTextureSize,_={[oo]:Oi,[Oi]:oo,[fs]:fs},g=new ao({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:A3,fragmentShader:C3}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const E=new oa;E.setAttribute("position",new Xr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Vr(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=z1;let y=this.type;this.render=function(U,D,O){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;const C=o.getRenderTarget(),T=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(to),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const K=y!==ls&&this.type===ls,oe=y===ls&&this.type!==ls;for(let ce=0,te=U.length;ce<te;ce++){const Q=U[ce],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const le=H.getFrameExtents();if(r.multiply(le),a.copy(H.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/le.x),r.x=a.x*le.x,H.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/le.y),r.y=a.y*le.y,H.mapSize.y=a.y)),H.map===null||K===!0||oe===!0){const k=this.type!==ls?{minFilter:Dr,magFilter:Dr}:{};H.map!==null&&H.map.dispose(),H.map=new ta(r.x,r.y,k),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}o.setRenderTarget(H.map),o.clear();const I=H.getViewportCount();for(let k=0;k<I;k++){const re=H.getViewport(k);u.set(a.x*re.x,a.y*re.y,a.x*re.z,a.y*re.w),Y.viewport(u),H.updateMatrices(Q,k),n=H.getFrustum(),w(D,O,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===ls&&L(H,O),H.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(C,T,B)};function L(U,D){const O=e.update(M);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,v.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ta(r.x,r.y)),g.uniforms.shadow_pass.value=U.map.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(D,null,O,g,M,null),v.uniforms.shadow_pass.value=U.mapPass.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(D,null,O,v,M,null)}function P(U,D,O,C){let T=null;const B=O.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(B!==void 0)T=B;else if(T=O.isPointLight===!0?d:c,o.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const Y=T.uuid,K=D.uuid;let oe=h[Y];oe===void 0&&(oe={},h[Y]=oe);let ce=oe[K];ce===void 0&&(ce=T.clone(),oe[K]=ce,D.addEventListener("dispose",F)),T=ce}if(T.visible=D.visible,T.wireframe=D.wireframe,C===ls?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:_[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Y=o.properties.get(T);Y.light=O}return T}function w(U,D,O,C,T){if(U.visible===!1)return;if(U.layers.test(D.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&T===ls)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,U.matrixWorld);const K=e.update(U),oe=U.material;if(Array.isArray(oe)){const ce=K.groups;for(let te=0,Q=ce.length;te<Q;te++){const H=ce[te],le=oe[H.materialIndex];if(le&&le.visible){const I=P(U,le,C,T);U.onBeforeShadow(o,U,D,O,K,I,H),o.renderBufferDirect(O,null,K,I,U,H),U.onAfterShadow(o,U,D,O,K,I,H)}}}else if(oe.visible){const ce=P(U,oe,C,T);U.onBeforeShadow(o,U,D,O,K,ce,null),o.renderBufferDirect(O,null,K,ce,U,null),U.onAfterShadow(o,U,D,O,K,ce,null)}}const Y=U.children;for(let K=0,oe=Y.length;K<oe;K++)w(Y[K],D,O,C,T)}function F(U){U.target.removeEventListener("dispose",F);for(const O in h){const C=h[O],T=U.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}const b3={[rm]:sm,[om]:um,[am]:cm,[hl]:lm,[sm]:rm,[um]:om,[cm]:am,[lm]:hl};function P3(o,e){function t(){let V=!1;const De=new Tn;let fe=null;const pe=new Tn(0,0,0,0);return{setMask:function(Le){fe!==Le&&!V&&(o.colorMask(Le,Le,Le,Le),fe=Le)},setLocked:function(Le){V=Le},setClear:function(Le,Ue,ht,Ut,rn){rn===!0&&(Le*=Ut,Ue*=Ut,ht*=Ut),De.set(Le,Ue,ht,Ut),pe.equals(De)===!1&&(o.clearColor(Le,Ue,ht,Ut),pe.copy(De))},reset:function(){V=!1,fe=null,pe.set(-1,0,0,0)}}}function n(){let V=!1,De=!1,fe=null,pe=null,Le=null;return{setReversed:function(Ue){if(De!==Ue){const ht=e.get("EXT_clip_control");De?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Le;Le=null,this.setClear(Ut)}De=Ue},getReversed:function(){return De},setTest:function(Ue){Ue?ge(o.DEPTH_TEST):we(o.DEPTH_TEST)},setMask:function(Ue){fe!==Ue&&!V&&(o.depthMask(Ue),fe=Ue)},setFunc:function(Ue){if(De&&(Ue=b3[Ue]),pe!==Ue){switch(Ue){case rm:o.depthFunc(o.NEVER);break;case sm:o.depthFunc(o.ALWAYS);break;case om:o.depthFunc(o.LESS);break;case hl:o.depthFunc(o.LEQUAL);break;case am:o.depthFunc(o.EQUAL);break;case lm:o.depthFunc(o.GEQUAL);break;case um:o.depthFunc(o.GREATER);break;case cm:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}pe=Ue}},setLocked:function(Ue){V=Ue},setClear:function(Ue){Le!==Ue&&(De&&(Ue=1-Ue),o.clearDepth(Ue),Le=Ue)},reset:function(){V=!1,fe=null,pe=null,Le=null,De=!1}}}function r(){let V=!1,De=null,fe=null,pe=null,Le=null,Ue=null,ht=null,Ut=null,rn=null;return{setTest:function(ke){V||(ke?ge(o.STENCIL_TEST):we(o.STENCIL_TEST))},setMask:function(ke){De!==ke&&!V&&(o.stencilMask(ke),De=ke)},setFunc:function(ke,qe,vt){(fe!==ke||pe!==qe||Le!==vt)&&(o.stencilFunc(ke,qe,vt),fe=ke,pe=qe,Le=vt)},setOp:function(ke,qe,vt){(Ue!==ke||ht!==qe||Ut!==vt)&&(o.stencilOp(ke,qe,vt),Ue=ke,ht=qe,Ut=vt)},setLocked:function(ke){V=ke},setClear:function(ke){rn!==ke&&(o.clearStencil(ke),rn=ke)},reset:function(){V=!1,De=null,fe=null,pe=null,Le=null,Ue=null,ht=null,Ut=null,rn=null}}}const a=new t,u=new n,c=new r,d=new WeakMap,h=new WeakMap;let p={},_={},g=new WeakMap,v=[],E=null,M=!1,S=null,y=null,L=null,P=null,w=null,F=null,U=null,D=new Wt(0,0,0),O=0,C=!1,T=null,B=null,Y=null,K=null,oe=null;const ce=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,Q=0;const H=o.getParameter(o.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),te=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),te=Q>=2);let le=null,I={};const k=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),Oe=new Tn().fromArray(k),Z=new Tn().fromArray(re);function he(V,De,fe,pe){const Le=new Uint8Array(4),Ue=o.createTexture();o.bindTexture(V,Ue),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ht=0;ht<fe;ht++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(De,0,o.RGBA,1,1,pe,0,o.RGBA,o.UNSIGNED_BYTE,Le):o.texImage2D(De+ht,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Le);return Ue}const ye={};ye[o.TEXTURE_2D]=he(o.TEXTURE_2D,o.TEXTURE_2D,1),ye[o.TEXTURE_CUBE_MAP]=he(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[o.TEXTURE_2D_ARRAY]=he(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ye[o.TEXTURE_3D]=he(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ge(o.DEPTH_TEST),u.setFunc(hl),dt(!1),J(Av),ge(o.CULL_FACE),G(to);function ge(V){p[V]!==!0&&(o.enable(V),p[V]=!0)}function we(V){p[V]!==!1&&(o.disable(V),p[V]=!1)}function Pe(V,De){return _[V]!==De?(o.bindFramebuffer(V,De),_[V]=De,V===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=De),V===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=De),!0):!1}function Je(V,De){let fe=v,pe=!1;if(V){fe=g.get(De),fe===void 0&&(fe=[],g.set(De,fe));const Le=V.textures;if(fe.length!==Le.length||fe[0]!==o.COLOR_ATTACHMENT0){for(let Ue=0,ht=Le.length;Ue<ht;Ue++)fe[Ue]=o.COLOR_ATTACHMENT0+Ue;fe.length=Le.length,pe=!0}}else fe[0]!==o.BACK&&(fe[0]=o.BACK,pe=!0);pe&&o.drawBuffers(fe)}function St(V){return E!==V?(o.useProgram(V),E=V,!0):!1}const gt={[ko]:o.FUNC_ADD,[UT]:o.FUNC_SUBTRACT,[NT]:o.FUNC_REVERSE_SUBTRACT};gt[FT]=o.MIN,gt[OT]=o.MAX;const tt={[kT]:o.ZERO,[zT]:o.ONE,[BT]:o.SRC_COLOR,[nm]:o.SRC_ALPHA,[jT]:o.SRC_ALPHA_SATURATE,[WT]:o.DST_COLOR,[VT]:o.DST_ALPHA,[HT]:o.ONE_MINUS_SRC_COLOR,[im]:o.ONE_MINUS_SRC_ALPHA,[XT]:o.ONE_MINUS_DST_COLOR,[GT]:o.ONE_MINUS_DST_ALPHA,[YT]:o.CONSTANT_COLOR,[qT]:o.ONE_MINUS_CONSTANT_COLOR,[$T]:o.CONSTANT_ALPHA,[KT]:o.ONE_MINUS_CONSTANT_ALPHA};function G(V,De,fe,pe,Le,Ue,ht,Ut,rn,ke){if(V===to){M===!0&&(we(o.BLEND),M=!1);return}if(M===!1&&(ge(o.BLEND),M=!0),V!==IT){if(V!==S||ke!==C){if((y!==ko||w!==ko)&&(o.blendEquation(o.FUNC_ADD),y=ko,w=ko),ke)switch(V){case nl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cv:o.blendFunc(o.ONE,o.ONE);break;case Rv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case bv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case nl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cv:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Rv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case bv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}L=null,P=null,F=null,U=null,D.set(0,0,0),O=0,S=V,C=ke}return}Le=Le||De,Ue=Ue||fe,ht=ht||pe,(De!==y||Le!==w)&&(o.blendEquationSeparate(gt[De],gt[Le]),y=De,w=Le),(fe!==L||pe!==P||Ue!==F||ht!==U)&&(o.blendFuncSeparate(tt[fe],tt[pe],tt[Ue],tt[ht]),L=fe,P=pe,F=Ue,U=ht),(Ut.equals(D)===!1||rn!==O)&&(o.blendColor(Ut.r,Ut.g,Ut.b,rn),D.copy(Ut),O=rn),S=V,C=!1}function Xt(V,De){V.side===fs?we(o.CULL_FACE):ge(o.CULL_FACE);let fe=V.side===Oi;De&&(fe=!fe),dt(fe),V.blending===nl&&V.transparent===!1?G(to):G(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),a.setMask(V.colorWrite);const pe=V.stencilWrite;c.setTest(pe),pe&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),wt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ge(o.SAMPLE_ALPHA_TO_COVERAGE):we(o.SAMPLE_ALPHA_TO_COVERAGE)}function dt(V){T!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),T=V)}function J(V){V!==PT?(ge(o.CULL_FACE),V!==B&&(V===Av?o.cullFace(o.BACK):V===DT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):we(o.CULL_FACE),B=V}function Ve(V){V!==Y&&(te&&o.lineWidth(V),Y=V)}function wt(V,De,fe){V?(ge(o.POLYGON_OFFSET_FILL),(K!==De||oe!==fe)&&(o.polygonOffset(De,fe),K=De,oe=fe)):we(o.POLYGON_OFFSET_FILL)}function Xe(V){V?ge(o.SCISSOR_TEST):we(o.SCISSOR_TEST)}function N(V){V===void 0&&(V=o.TEXTURE0+ce-1),le!==V&&(o.activeTexture(V),le=V)}function R(V,De,fe){fe===void 0&&(le===null?fe=o.TEXTURE0+ce-1:fe=le);let pe=I[fe];pe===void 0&&(pe={type:void 0,texture:void 0},I[fe]=pe),(pe.type!==V||pe.texture!==De)&&(le!==fe&&(o.activeTexture(fe),le=fe),o.bindTexture(V,De||ye[V]),pe.type=V,pe.texture=De)}function ne(){const V=I[le];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ve(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(V){Oe.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Oe.copy(V))}function Be(V){Z.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function yt(V,De){let fe=h.get(De);fe===void 0&&(fe=new WeakMap,h.set(De,fe));let pe=fe.get(V);pe===void 0&&(pe=o.getUniformBlockIndex(De,V.name),fe.set(V,pe))}function st(V,De){const pe=h.get(De).get(V);d.get(De)!==pe&&(o.uniformBlockBinding(De,pe,V.__bindingPointIndex),d.set(De,pe))}function At(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},le=null,I={},_={},g=new WeakMap,v=[],E=null,M=!1,S=null,y=null,L=null,P=null,w=null,F=null,U=null,D=new Wt(0,0,0),O=0,C=!1,T=null,B=null,Y=null,K=null,oe=null,Oe.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:ge,disable:we,bindFramebuffer:Pe,drawBuffers:Je,useProgram:St,setBlending:G,setMaterial:Xt,setFlipSided:dt,setCullFace:J,setLineWidth:Ve,setPolygonOffset:wt,setScissorTest:Xe,activeTexture:N,bindTexture:R,unbindTexture:ne,compressedTexImage2D:ve,compressedTexImage3D:_e,texImage2D:be,texImage3D:it,updateUBOMapping:yt,uniformBlockBinding:st,texStorage2D:mt,texStorage3D:Ee,texSubImage2D:me,texSubImage3D:Ie,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ne,scissor:rt,viewport:Be,reset:At}}function D3(o,e,t,n,r,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Qt,p=new WeakMap;let _;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,R){return v?new OffscreenCanvas(N,R):zu("canvas")}function M(N,R,ne){let ve=1;const _e=Xe(N);if((_e.width>ne||_e.height>ne)&&(ve=ne/Math.max(_e.width,_e.height)),ve<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const me=Math.floor(ve*_e.width),Ie=Math.floor(ve*_e.height);_===void 0&&(_=E(me,Ie));const Ce=R?E(me,Ie):_;return Ce.width=me,Ce.height=Ie,Ce.getContext("2d").drawImage(N,0,0,me,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+me+"x"+Ie+")."),Ce}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),N;return N}function S(N){return N.generateMipmaps}function y(N){o.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(N,R,ne,ve,_e=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let me=R;if(R===o.RED&&(ne===o.FLOAT&&(me=o.R32F),ne===o.HALF_FLOAT&&(me=o.R16F),ne===o.UNSIGNED_BYTE&&(me=o.R8)),R===o.RED_INTEGER&&(ne===o.UNSIGNED_BYTE&&(me=o.R8UI),ne===o.UNSIGNED_SHORT&&(me=o.R16UI),ne===o.UNSIGNED_INT&&(me=o.R32UI),ne===o.BYTE&&(me=o.R8I),ne===o.SHORT&&(me=o.R16I),ne===o.INT&&(me=o.R32I)),R===o.RG&&(ne===o.FLOAT&&(me=o.RG32F),ne===o.HALF_FLOAT&&(me=o.RG16F),ne===o.UNSIGNED_BYTE&&(me=o.RG8)),R===o.RG_INTEGER&&(ne===o.UNSIGNED_BYTE&&(me=o.RG8UI),ne===o.UNSIGNED_SHORT&&(me=o.RG16UI),ne===o.UNSIGNED_INT&&(me=o.RG32UI),ne===o.BYTE&&(me=o.RG8I),ne===o.SHORT&&(me=o.RG16I),ne===o.INT&&(me=o.RG32I)),R===o.RGB_INTEGER&&(ne===o.UNSIGNED_BYTE&&(me=o.RGB8UI),ne===o.UNSIGNED_SHORT&&(me=o.RGB16UI),ne===o.UNSIGNED_INT&&(me=o.RGB32UI),ne===o.BYTE&&(me=o.RGB8I),ne===o.SHORT&&(me=o.RGB16I),ne===o.INT&&(me=o.RGB32I)),R===o.RGBA_INTEGER&&(ne===o.UNSIGNED_BYTE&&(me=o.RGBA8UI),ne===o.UNSIGNED_SHORT&&(me=o.RGBA16UI),ne===o.UNSIGNED_INT&&(me=o.RGBA32UI),ne===o.BYTE&&(me=o.RGBA8I),ne===o.SHORT&&(me=o.RGBA16I),ne===o.INT&&(me=o.RGBA32I)),R===o.RGB&&ne===o.UNSIGNED_INT_5_9_9_9_REV&&(me=o.RGB9_E5),R===o.RGBA){const Ie=_e?ed:Gt.getTransfer(ve);ne===o.FLOAT&&(me=o.RGBA32F),ne===o.HALF_FLOAT&&(me=o.RGBA16F),ne===o.UNSIGNED_BYTE&&(me=Ie===Zt?o.SRGB8_ALPHA8:o.RGBA8),ne===o.UNSIGNED_SHORT_4_4_4_4&&(me=o.RGBA4),ne===o.UNSIGNED_SHORT_5_5_5_1&&(me=o.RGB5_A1)}return(me===o.R16F||me===o.R32F||me===o.RG16F||me===o.RG32F||me===o.RGBA16F||me===o.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function w(N,R){let ne;return N?R===null||R===ea||R===_l?ne=o.DEPTH24_STENCIL8:R===hs?ne=o.DEPTH32F_STENCIL8:R===ku&&(ne=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ea||R===_l?ne=o.DEPTH_COMPONENT24:R===hs?ne=o.DEPTH_COMPONENT32F:R===ku&&(ne=o.DEPTH_COMPONENT16),ne}function F(N,R){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Dr&&N.minFilter!==Hr?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function U(N){const R=N.target;R.removeEventListener("dispose",U),O(R),R.isVideoTexture&&p.delete(R)}function D(N){const R=N.target;R.removeEventListener("dispose",D),T(R)}function O(N){const R=n.get(N);if(R.__webglInit===void 0)return;const ne=N.source,ve=g.get(ne);if(ve){const _e=ve[R.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&C(N),Object.keys(ve).length===0&&g.delete(ne)}n.remove(N)}function C(N){const R=n.get(N);o.deleteTexture(R.__webglTexture);const ne=N.source,ve=g.get(ne);delete ve[R.__cacheKey],u.memory.textures--}function T(N){const R=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(R.__webglFramebuffer[ve]))for(let _e=0;_e<R.__webglFramebuffer[ve].length;_e++)o.deleteFramebuffer(R.__webglFramebuffer[ve][_e]);else o.deleteFramebuffer(R.__webglFramebuffer[ve]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[ve])}else{if(Array.isArray(R.__webglFramebuffer))for(let ve=0;ve<R.__webglFramebuffer.length;ve++)o.deleteFramebuffer(R.__webglFramebuffer[ve]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ve=0;ve<R.__webglColorRenderbuffer.length;ve++)R.__webglColorRenderbuffer[ve]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[ve]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ne=N.textures;for(let ve=0,_e=ne.length;ve<_e;ve++){const me=n.get(ne[ve]);me.__webglTexture&&(o.deleteTexture(me.__webglTexture),u.memory.textures--),n.remove(ne[ve])}n.remove(N)}let B=0;function Y(){B=0}function K(){const N=B;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),B+=1,N}function oe(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function ce(N,R){const ne=n.get(N);if(N.isVideoTexture&&Ve(N),N.isRenderTargetTexture===!1&&N.version>0&&ne.__version!==N.version){const ve=N.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(ne,N,R);return}}t.bindTexture(o.TEXTURE_2D,ne.__webglTexture,o.TEXTURE0+R)}function te(N,R){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){Z(ne,N,R);return}t.bindTexture(o.TEXTURE_2D_ARRAY,ne.__webglTexture,o.TEXTURE0+R)}function Q(N,R){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){Z(ne,N,R);return}t.bindTexture(o.TEXTURE_3D,ne.__webglTexture,o.TEXTURE0+R)}function H(N,R){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){he(ne,N,R);return}t.bindTexture(o.TEXTURE_CUBE_MAP,ne.__webglTexture,o.TEXTURE0+R)}const le={[Ou]:o.REPEAT,[Ho]:o.CLAMP_TO_EDGE,[hm]:o.MIRRORED_REPEAT},I={[Dr]:o.NEAREST,[ow]:o.NEAREST_MIPMAP_NEAREST,[Zc]:o.NEAREST_MIPMAP_LINEAR,[Hr]:o.LINEAR,[rp]:o.LINEAR_MIPMAP_NEAREST,[Vo]:o.LINEAR_MIPMAP_LINEAR},k={[cw]:o.NEVER,[_w]:o.ALWAYS,[fw]:o.LESS,[J1]:o.LEQUAL,[dw]:o.EQUAL,[mw]:o.GEQUAL,[hw]:o.GREATER,[pw]:o.NOTEQUAL};function re(N,R){if(R.type===hs&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Hr||R.magFilter===rp||R.magFilter===Zc||R.magFilter===Vo||R.minFilter===Hr||R.minFilter===rp||R.minFilter===Zc||R.minFilter===Vo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,le[R.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,le[R.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,le[R.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,I[R.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,I[R.minFilter]),R.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,k[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Dr||R.minFilter!==Zc&&R.minFilter!==Vo||R.type===hs&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Oe(N,R){let ne=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",U));const ve=R.source;let _e=g.get(ve);_e===void 0&&(_e={},g.set(ve,_e));const me=oe(R);if(me!==N.__cacheKey){_e[me]===void 0&&(_e[me]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,ne=!0),_e[me].usedTimes++;const Ie=_e[N.__cacheKey];Ie!==void 0&&(_e[N.__cacheKey].usedTimes--,Ie.usedTimes===0&&C(R)),N.__cacheKey=me,N.__webglTexture=_e[me].texture}return ne}function Z(N,R,ne){let ve=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ve=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ve=o.TEXTURE_3D);const _e=Oe(N,R),me=R.source;t.bindTexture(ve,N.__webglTexture,o.TEXTURE0+ne);const Ie=n.get(me);if(me.version!==Ie.__version||_e===!0){t.activeTexture(o.TEXTURE0+ne);const Ce=Gt.getPrimaries(Gt.workingColorSpace),Ne=R.colorSpace===Ys?null:Gt.getPrimaries(R.colorSpace),mt=R.colorSpace===Ys||Ce===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Ee=M(R.image,!1,r.maxTextureSize);Ee=wt(R,Ee);const be=a.convert(R.format,R.colorSpace),it=a.convert(R.type);let rt=P(R.internalFormat,be,it,R.colorSpace,R.isVideoTexture);re(ve,R);let Be;const yt=R.mipmaps,st=R.isVideoTexture!==!0,At=Ie.__version===void 0||_e===!0,V=me.dataReady,De=F(R,Ee);if(R.isDepthTexture)rt=w(R.format===gl,R.type),At&&(st?t.texStorage2D(o.TEXTURE_2D,1,rt,Ee.width,Ee.height):t.texImage2D(o.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,be,it,null));else if(R.isDataTexture)if(yt.length>0){st&&At&&t.texStorage2D(o.TEXTURE_2D,De,rt,yt[0].width,yt[0].height);for(let fe=0,pe=yt.length;fe<pe;fe++)Be=yt[fe],st?V&&t.texSubImage2D(o.TEXTURE_2D,fe,0,0,Be.width,Be.height,be,it,Be.data):t.texImage2D(o.TEXTURE_2D,fe,rt,Be.width,Be.height,0,be,it,Be.data);R.generateMipmaps=!1}else st?(At&&t.texStorage2D(o.TEXTURE_2D,De,rt,Ee.width,Ee.height),V&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee.width,Ee.height,be,it,Ee.data)):t.texImage2D(o.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,be,it,Ee.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){st&&At&&t.texStorage3D(o.TEXTURE_2D_ARRAY,De,rt,yt[0].width,yt[0].height,Ee.depth);for(let fe=0,pe=yt.length;fe<pe;fe++)if(Be=yt[fe],R.format!==Pr)if(be!==null)if(st){if(V)if(R.layerUpdates.size>0){const Le=Zv(Be.width,Be.height,R.format,R.type);for(const Ue of R.layerUpdates){const ht=Be.data.subarray(Ue*Le/Be.data.BYTES_PER_ELEMENT,(Ue+1)*Le/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,fe,0,0,Ue,Be.width,Be.height,1,be,ht)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,fe,0,0,0,Be.width,Be.height,Ee.depth,be,Be.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,fe,rt,Be.width,Be.height,Ee.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?V&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,fe,0,0,0,Be.width,Be.height,Ee.depth,be,it,Be.data):t.texImage3D(o.TEXTURE_2D_ARRAY,fe,rt,Be.width,Be.height,Ee.depth,0,be,it,Be.data)}else{st&&At&&t.texStorage2D(o.TEXTURE_2D,De,rt,yt[0].width,yt[0].height);for(let fe=0,pe=yt.length;fe<pe;fe++)Be=yt[fe],R.format!==Pr?be!==null?st?V&&t.compressedTexSubImage2D(o.TEXTURE_2D,fe,0,0,Be.width,Be.height,be,Be.data):t.compressedTexImage2D(o.TEXTURE_2D,fe,rt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?V&&t.texSubImage2D(o.TEXTURE_2D,fe,0,0,Be.width,Be.height,be,it,Be.data):t.texImage2D(o.TEXTURE_2D,fe,rt,Be.width,Be.height,0,be,it,Be.data)}else if(R.isDataArrayTexture)if(st){if(At&&t.texStorage3D(o.TEXTURE_2D_ARRAY,De,rt,Ee.width,Ee.height,Ee.depth),V)if(R.layerUpdates.size>0){const fe=Zv(Ee.width,Ee.height,R.format,R.type);for(const pe of R.layerUpdates){const Le=Ee.data.subarray(pe*fe/Ee.data.BYTES_PER_ELEMENT,(pe+1)*fe/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,be,it,Le)}R.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,be,it,Ee.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,rt,Ee.width,Ee.height,Ee.depth,0,be,it,Ee.data);else if(R.isData3DTexture)st?(At&&t.texStorage3D(o.TEXTURE_3D,De,rt,Ee.width,Ee.height,Ee.depth),V&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,be,it,Ee.data)):t.texImage3D(o.TEXTURE_3D,0,rt,Ee.width,Ee.height,Ee.depth,0,be,it,Ee.data);else if(R.isFramebufferTexture){if(At)if(st)t.texStorage2D(o.TEXTURE_2D,De,rt,Ee.width,Ee.height);else{let fe=Ee.width,pe=Ee.height;for(let Le=0;Le<De;Le++)t.texImage2D(o.TEXTURE_2D,Le,rt,fe,pe,0,be,it,null),fe>>=1,pe>>=1}}else if(yt.length>0){if(st&&At){const fe=Xe(yt[0]);t.texStorage2D(o.TEXTURE_2D,De,rt,fe.width,fe.height)}for(let fe=0,pe=yt.length;fe<pe;fe++)Be=yt[fe],st?V&&t.texSubImage2D(o.TEXTURE_2D,fe,0,0,be,it,Be):t.texImage2D(o.TEXTURE_2D,fe,rt,be,it,Be);R.generateMipmaps=!1}else if(st){if(At){const fe=Xe(Ee);t.texStorage2D(o.TEXTURE_2D,De,rt,fe.width,fe.height)}V&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,be,it,Ee)}else t.texImage2D(o.TEXTURE_2D,0,rt,be,it,Ee);S(R)&&y(ve),Ie.__version=me.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function he(N,R,ne){if(R.image.length!==6)return;const ve=Oe(N,R),_e=R.source;t.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+ne);const me=n.get(_e);if(_e.version!==me.__version||ve===!0){t.activeTexture(o.TEXTURE0+ne);const Ie=Gt.getPrimaries(Gt.workingColorSpace),Ce=R.colorSpace===Ys?null:Gt.getPrimaries(R.colorSpace),Ne=R.colorSpace===Ys||Ie===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const mt=R.isCompressedTexture||R.image[0].isCompressedTexture,Ee=R.image[0]&&R.image[0].isDataTexture,be=[];for(let pe=0;pe<6;pe++)!mt&&!Ee?be[pe]=M(R.image[pe],!0,r.maxCubemapSize):be[pe]=Ee?R.image[pe].image:R.image[pe],be[pe]=wt(R,be[pe]);const it=be[0],rt=a.convert(R.format,R.colorSpace),Be=a.convert(R.type),yt=P(R.internalFormat,rt,Be,R.colorSpace),st=R.isVideoTexture!==!0,At=me.__version===void 0||ve===!0,V=_e.dataReady;let De=F(R,it);re(o.TEXTURE_CUBE_MAP,R);let fe;if(mt){st&&At&&t.texStorage2D(o.TEXTURE_CUBE_MAP,De,yt,it.width,it.height);for(let pe=0;pe<6;pe++){fe=be[pe].mipmaps;for(let Le=0;Le<fe.length;Le++){const Ue=fe[Le];R.format!==Pr?rt!==null?st?V&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Ue.width,Ue.height,rt,Ue.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,yt,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Ue.width,Ue.height,rt,Be,Ue.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,yt,Ue.width,Ue.height,0,rt,Be,Ue.data)}}}else{if(fe=R.mipmaps,st&&At){fe.length>0&&De++;const pe=Xe(be[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,De,yt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){st?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,be[pe].width,be[pe].height,rt,Be,be[pe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,yt,be[pe].width,be[pe].height,0,rt,Be,be[pe].data);for(let Le=0;Le<fe.length;Le++){const ht=fe[Le].image[pe].image;st?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,ht.width,ht.height,rt,Be,ht.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,yt,ht.width,ht.height,0,rt,Be,ht.data)}}else{st?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,rt,Be,be[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,yt,rt,Be,be[pe]);for(let Le=0;Le<fe.length;Le++){const Ue=fe[Le];st?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,rt,Be,Ue.image[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,yt,rt,Be,Ue.image[pe])}}}S(R)&&y(o.TEXTURE_CUBE_MAP),me.__version=_e.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function ye(N,R,ne,ve,_e,me){const Ie=a.convert(ne.format,ne.colorSpace),Ce=a.convert(ne.type),Ne=P(ne.internalFormat,Ie,Ce,ne.colorSpace),mt=n.get(R),Ee=n.get(ne);if(Ee.__renderTarget=R,!mt.__hasExternalTextures){const be=Math.max(1,R.width>>me),it=Math.max(1,R.height>>me);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?t.texImage3D(_e,me,Ne,be,it,R.depth,0,Ie,Ce,null):t.texImage2D(_e,me,Ne,be,it,0,Ie,Ce,null)}t.bindFramebuffer(o.FRAMEBUFFER,N),J(R)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ve,_e,Ee.__webglTexture,0,dt(R)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ve,_e,Ee.__webglTexture,me),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ge(N,R,ne){if(o.bindRenderbuffer(o.RENDERBUFFER,N),R.depthBuffer){const ve=R.depthTexture,_e=ve&&ve.isDepthTexture?ve.type:null,me=w(R.stencilBuffer,_e),Ie=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=dt(R);J(R)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ce,me,R.width,R.height):ne?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ce,me,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,me,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ie,o.RENDERBUFFER,N)}else{const ve=R.textures;for(let _e=0;_e<ve.length;_e++){const me=ve[_e],Ie=a.convert(me.format,me.colorSpace),Ce=a.convert(me.type),Ne=P(me.internalFormat,Ie,Ce,me.colorSpace),mt=dt(R);ne&&J(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,mt,Ne,R.width,R.height):J(R)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,mt,Ne,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function we(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=n.get(R.depthTexture);ve.__renderTarget=R,(!ve.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ce(R.depthTexture,0);const _e=ve.__webglTexture,me=dt(R);if(R.depthTexture.format===il)J(R)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0,me):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0);else if(R.depthTexture.format===gl)J(R)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0,me):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Pe(N){const R=n.get(N),ne=N.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==N.depthTexture){const ve=N.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ve){const _e=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ve.removeEventListener("dispose",_e)};ve.addEventListener("dispose",_e),R.__depthDisposeCallback=_e}R.__boundDepthTexture=ve}if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");we(R.__webglFramebuffer,N)}else if(ne){R.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[ve]),R.__webglDepthbuffer[ve]===void 0)R.__webglDepthbuffer[ve]=o.createRenderbuffer(),ge(R.__webglDepthbuffer[ve],N,!1);else{const _e=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,me=R.__webglDepthbuffer[ve];o.bindRenderbuffer(o.RENDERBUFFER,me),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,me)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),ge(R.__webglDepthbuffer,N,!1);else{const ve=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_e=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_e),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,_e)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Je(N,R,ne){const ve=n.get(N);R!==void 0&&ye(ve.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ne!==void 0&&Pe(N)}function St(N){const R=N.texture,ne=n.get(N),ve=n.get(R);N.addEventListener("dispose",D);const _e=N.textures,me=N.isWebGLCubeRenderTarget===!0,Ie=_e.length>1;if(Ie||(ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture()),ve.__version=R.version,u.memory.textures++),me){ne.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(R.mipmaps&&R.mipmaps.length>0){ne.__webglFramebuffer[Ce]=[];for(let Ne=0;Ne<R.mipmaps.length;Ne++)ne.__webglFramebuffer[Ce][Ne]=o.createFramebuffer()}else ne.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ce=0;Ce<R.mipmaps.length;Ce++)ne.__webglFramebuffer[Ce]=o.createFramebuffer()}else ne.__webglFramebuffer=o.createFramebuffer();if(Ie)for(let Ce=0,Ne=_e.length;Ce<Ne;Ce++){const mt=n.get(_e[Ce]);mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture(),u.memory.textures++)}if(N.samples>0&&J(N)===!1){ne.__webglMultisampledFramebuffer=o.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Ne=_e[Ce];ne.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ne.__webglColorRenderbuffer[Ce]);const mt=a.convert(Ne.format,Ne.colorSpace),Ee=a.convert(Ne.type),be=P(Ne.internalFormat,mt,Ee,Ne.colorSpace,N.isXRRenderTarget===!0),it=dt(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,it,be,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,ne.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(ne.__webglDepthRenderbuffer=o.createRenderbuffer(),ge(ne.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(me){t.bindTexture(o.TEXTURE_CUBE_MAP,ve.__webglTexture),re(o.TEXTURE_CUBE_MAP,R);for(let Ce=0;Ce<6;Ce++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ne=0;Ne<R.mipmaps.length;Ne++)ye(ne.__webglFramebuffer[Ce][Ne],N,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ne);else ye(ne.__webglFramebuffer[Ce],N,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(R)&&y(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let Ce=0,Ne=_e.length;Ce<Ne;Ce++){const mt=_e[Ce],Ee=n.get(mt);t.bindTexture(o.TEXTURE_2D,Ee.__webglTexture),re(o.TEXTURE_2D,mt),ye(ne.__webglFramebuffer,N,mt,o.COLOR_ATTACHMENT0+Ce,o.TEXTURE_2D,0),S(mt)&&y(o.TEXTURE_2D)}t.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ce=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ve.__webglTexture),re(Ce,R),R.mipmaps&&R.mipmaps.length>0)for(let Ne=0;Ne<R.mipmaps.length;Ne++)ye(ne.__webglFramebuffer[Ne],N,R,o.COLOR_ATTACHMENT0,Ce,Ne);else ye(ne.__webglFramebuffer,N,R,o.COLOR_ATTACHMENT0,Ce,0);S(R)&&y(Ce),t.unbindTexture()}N.depthBuffer&&Pe(N)}function gt(N){const R=N.textures;for(let ne=0,ve=R.length;ne<ve;ne++){const _e=R[ne];if(S(_e)){const me=L(N),Ie=n.get(_e).__webglTexture;t.bindTexture(me,Ie),y(me),t.unbindTexture()}}}const tt=[],G=[];function Xt(N){if(N.samples>0){if(J(N)===!1){const R=N.textures,ne=N.width,ve=N.height;let _e=o.COLOR_BUFFER_BIT;const me=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=n.get(N),Ce=R.length>1;if(Ce)for(let Ne=0;Ne<R.length;Ne++)t.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ne=0;Ne<R.length;Ne++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),Ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ne]);const mt=n.get(R[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,mt,0)}o.blitFramebuffer(0,0,ne,ve,0,0,ne,ve,_e,o.NEAREST),d===!0&&(tt.length=0,G.length=0,tt.push(o.COLOR_ATTACHMENT0+Ne),N.depthBuffer&&N.resolveDepthBuffer===!1&&(tt.push(me),G.push(me),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,G)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let Ne=0;Ne<R.length;Ne++){t.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ne]);const mt=n.get(R[Ne]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,mt,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&d){const R=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function dt(N){return Math.min(r.maxSamples,N.samples)}function J(N){const R=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ve(N){const R=u.render.frame;p.get(N)!==R&&(p.set(N,R),N.update())}function wt(N,R){const ne=N.colorSpace,ve=N.format,_e=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ne!==vl&&ne!==Ys&&(Gt.getTransfer(ne)===Zt?(ve!==Pr||_e!==ys)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),R}function Xe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=Y,this.setTexture2D=ce,this.setTexture2DArray=te,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=Je,this.setupRenderTarget=St,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=J}function L3(o,e){function t(n,r=Ys){let a;const u=Gt.getTransfer(r);if(n===ys)return o.UNSIGNED_BYTE;if(n===v_)return o.UNSIGNED_SHORT_4_4_4_4;if(n===x_)return o.UNSIGNED_SHORT_5_5_5_1;if(n===W1)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===V1)return o.BYTE;if(n===G1)return o.SHORT;if(n===ku)return o.UNSIGNED_SHORT;if(n===g_)return o.INT;if(n===ea)return o.UNSIGNED_INT;if(n===hs)return o.FLOAT;if(n===Wu)return o.HALF_FLOAT;if(n===X1)return o.ALPHA;if(n===j1)return o.RGB;if(n===Pr)return o.RGBA;if(n===Y1)return o.LUMINANCE;if(n===q1)return o.LUMINANCE_ALPHA;if(n===il)return o.DEPTH_COMPONENT;if(n===gl)return o.DEPTH_STENCIL;if(n===$1)return o.RED;if(n===y_)return o.RED_INTEGER;if(n===K1)return o.RG;if(n===S_)return o.RG_INTEGER;if(n===M_)return o.RGBA_INTEGER;if(n===Nf||n===Ff||n===Of||n===kf)if(u===Zt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Nf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ff)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Of)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Nf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ff)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Of)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pm||n===mm||n===_m||n===gm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===pm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_m)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vm||n===xm||n===ym)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===vm||n===xm)return u===Zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ym)return u===Zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sm||n===Mm||n===Em||n===Tm||n===wm||n===Am||n===Cm||n===Rm||n===bm||n===Pm||n===Dm||n===Lm||n===Im||n===Um)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Sm)return u===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mm)return u===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Em)return u===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tm)return u===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wm)return u===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Am)return u===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cm)return u===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rm)return u===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bm)return u===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pm)return u===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dm)return u===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lm)return u===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Im)return u===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Um)return u===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zf||n===Nm||n===Fm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===zf)return u===Zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Z1||n===Om||n===km||n===zm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===zf)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Om)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===km)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_l?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:t}}const I3={type:"move"};class Ip{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _f,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _f,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _f,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,n),y=this._getHandJoint(h,M);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const p=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=p.position.distanceTo(_.position),v=.02,E=.005;h.inputState.pinching&&g>v+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=v-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(I3)))}return c!==null&&(c.visible=r!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _f;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const U3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N3=`
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

}`;class F3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Ti,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ao({vertexShader:U3,fragmentShader:N3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vr(new fd(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O3 extends Sl{constructor(e,t){super();const n=this;let r=null,a=1,u=null,c="local-floor",d=1,h=null,p=null,_=null,g=null,v=null,E=null;const M=new F3,S=t.getContextAttributes();let y=null,L=null;const P=[],w=[],F=new Qt;let U=null;const D=new ur;D.viewport=new Tn;const O=new ur;O.viewport=new Tn;const C=[D,O],T=new r2;let B=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=P[Z];return he===void 0&&(he=new Ip,P[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=P[Z];return he===void 0&&(he=new Ip,P[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=P[Z];return he===void 0&&(he=new Ip,P[Z]=he),he.getHandSpace()};function K(Z){const he=w.indexOf(Z.inputSource);if(he===-1)return;const ye=P[he];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,h||u),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function oe(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",oe),r.removeEventListener("inputsourceschange",ce);for(let Z=0;Z<P.length;Z++){const he=w[Z];he!==null&&(w[Z]=null,P[Z].disconnect(he))}B=null,Y=null,M.reset(),e.setRenderTarget(y),v=null,g=null,_=null,r=null,L=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){c=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",oe),r.addEventListener("inputsourceschange",ce),S.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){const he={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),L=new ta(v.framebufferWidth,v.framebufferHeight,{format:Pr,type:ys,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let he=null,ye=null,ge=null;S.depth&&(ge=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=S.stencil?gl:il,ye=S.stencil?_l:ea);const we={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:a};_=new XRWebGLBinding(r,t),g=_.createProjectionLayer(we),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new ta(g.textureWidth,g.textureHeight,{format:Pr,type:ys,depthTexture:new dy(g.textureWidth,g.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await r.requestReferenceSpace(c),Oe.setContext(r),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ce(Z){for(let he=0;he<Z.removed.length;he++){const ye=Z.removed[he],ge=w.indexOf(ye);ge>=0&&(w[ge]=null,P[ge].disconnect(ye))}for(let he=0;he<Z.added.length;he++){const ye=Z.added[he];let ge=w.indexOf(ye);if(ge===-1){for(let Pe=0;Pe<P.length;Pe++)if(Pe>=w.length){w.push(ye),ge=Pe;break}else if(w[Pe]===null){w[Pe]=ye,ge=Pe;break}if(ge===-1)break}const we=P[ge];we&&we.connect(ye)}}const te=new de,Q=new de;function H(Z,he,ye){te.setFromMatrixPosition(he.matrixWorld),Q.setFromMatrixPosition(ye.matrixWorld);const ge=te.distanceTo(Q),we=he.projectionMatrix.elements,Pe=ye.projectionMatrix.elements,Je=we[14]/(we[10]-1),St=we[14]/(we[10]+1),gt=(we[9]+1)/we[5],tt=(we[9]-1)/we[5],G=(we[8]-1)/we[0],Xt=(Pe[8]+1)/Pe[0],dt=Je*G,J=Je*Xt,Ve=ge/(-G+Xt),wt=Ve*-G;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(wt),Z.translateZ(Ve),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),we[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Xe=Je+Ve,N=St+Ve,R=dt-wt,ne=J+(ge-wt),ve=gt*St/N*Xe,_e=tt*St/N*Xe;Z.projectionMatrix.makePerspective(R,ne,ve,_e,Xe,N),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let he=Z.near,ye=Z.far;M.texture!==null&&(M.depthNear>0&&(he=M.depthNear),M.depthFar>0&&(ye=M.depthFar)),T.near=O.near=D.near=he,T.far=O.far=D.far=ye,(B!==T.near||Y!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),B=T.near,Y=T.far),D.layers.mask=Z.layers.mask|2,O.layers.mask=Z.layers.mask|4,T.layers.mask=D.layers.mask|O.layers.mask;const ge=Z.parent,we=T.cameras;le(T,ge);for(let Pe=0;Pe<we.length;Pe++)le(we[Pe],ge);we.length===2?H(T,D,O):T.projectionMatrix.copy(D.projectionMatrix),I(Z,T,ge)};function I(Z,he,ye){ye===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Bm*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(g===null&&v===null))return d},this.setFoveation=function(Z){d=Z,g!==null&&(g.fixedFoveation=Z),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(T)};let k=null;function re(Z,he){if(p=he.getViewerPose(h||u),E=he,p!==null){const ye=p.views;v!==null&&(e.setRenderTargetFramebuffer(L,v.framebuffer),e.setRenderTarget(L));let ge=!1;ye.length!==T.cameras.length&&(T.cameras.length=0,ge=!0);for(let Pe=0;Pe<ye.length;Pe++){const Je=ye[Pe];let St=null;if(v!==null)St=v.getViewport(Je);else{const tt=_.getViewSubImage(g,Je);St=tt.viewport,Pe===0&&(e.setRenderTargetTextures(L,tt.colorTexture,g.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(L))}let gt=C[Pe];gt===void 0&&(gt=new ur,gt.layers.enable(Pe),gt.viewport=new Tn,C[Pe]=gt),gt.matrix.fromArray(Je.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Je.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(St.x,St.y,St.width,St.height),Pe===0&&(T.matrix.copy(gt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ge===!0&&T.cameras.push(gt)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const Pe=_.getDepthInformation(ye[0]);Pe&&Pe.isValid&&Pe.texture&&M.init(e,Pe,r.renderState)}}for(let ye=0;ye<P.length;ye++){const ge=w[ye],we=P[ye];ge!==null&&we!==void 0&&we.update(ge,he,h||u)}k&&k(Z,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),E=null}const Oe=new hy;Oe.setAnimationLoop(re),this.setAnimationLoop=function(Z){k=Z},this.dispose=function(){}}}const Lo=new qr,k3=new Pn;function z3(o,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function n(S,y){y.color.getRGB(S.fogColor.value,ly(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function r(S,y,L,P,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(S,y):y.isMeshToonMaterial?(a(S,y),_(S,y)):y.isMeshPhongMaterial?(a(S,y),p(S,y)):y.isMeshStandardMaterial?(a(S,y),g(S,y),y.isMeshPhysicalMaterial&&v(S,y,w)):y.isMeshMatcapMaterial?(a(S,y),E(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),M(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&c(S,y)):y.isPointsMaterial?d(S,y,L,P):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Oi&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Oi&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=e.get(y),P=L.envMap,w=L.envMapRotation;P&&(S.envMap.value=P,Lo.copy(w),Lo.x*=-1,Lo.y*=-1,Lo.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Lo.y*=-1,Lo.z*=-1),S.envMapRotation.value.setFromMatrix4(k3.makeRotationFromEuler(Lo)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function c(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,L,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=P*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function v(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Oi&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function M(S,y){const L=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function B3(o,e,t,n){let r={},a={},u=[];const c=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,P){const w=P.program;n.uniformBlockBinding(L,w)}function h(L,P){let w=r[L.id];w===void 0&&(E(L),w=p(L),r[L.id]=w,L.addEventListener("dispose",S));const F=P.program;n.updateUBOMapping(L,F);const U=e.render.frame;a[L.id]!==U&&(g(L),a[L.id]=U)}function p(L){const P=_();L.__bindingPointIndex=P;const w=o.createBuffer(),F=L.__size,U=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,F,U),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,w),w}function _(){for(let L=0;L<c;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(L){const P=r[L.id],w=L.uniforms,F=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let U=0,D=w.length;U<D;U++){const O=Array.isArray(w[U])?w[U]:[w[U]];for(let C=0,T=O.length;C<T;C++){const B=O[C];if(v(B,U,C,F)===!0){const Y=B.__offset,K=Array.isArray(B.value)?B.value:[B.value];let oe=0;for(let ce=0;ce<K.length;ce++){const te=K[ce],Q=M(te);typeof te=="number"||typeof te=="boolean"?(B.__data[0]=te,o.bufferSubData(o.UNIFORM_BUFFER,Y+oe,B.__data)):te.isMatrix3?(B.__data[0]=te.elements[0],B.__data[1]=te.elements[1],B.__data[2]=te.elements[2],B.__data[3]=0,B.__data[4]=te.elements[3],B.__data[5]=te.elements[4],B.__data[6]=te.elements[5],B.__data[7]=0,B.__data[8]=te.elements[6],B.__data[9]=te.elements[7],B.__data[10]=te.elements[8],B.__data[11]=0):(te.toArray(B.__data,oe),oe+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function v(L,P,w,F){const U=L.value,D=P+"_"+w;if(F[D]===void 0)return typeof U=="number"||typeof U=="boolean"?F[D]=U:F[D]=U.clone(),!0;{const O=F[D];if(typeof U=="number"||typeof U=="boolean"){if(O!==U)return F[D]=U,!0}else if(O.equals(U)===!1)return O.copy(U),!0}return!1}function E(L){const P=L.uniforms;let w=0;const F=16;for(let D=0,O=P.length;D<O;D++){const C=Array.isArray(P[D])?P[D]:[P[D]];for(let T=0,B=C.length;T<B;T++){const Y=C[T],K=Array.isArray(Y.value)?Y.value:[Y.value];for(let oe=0,ce=K.length;oe<ce;oe++){const te=K[oe],Q=M(te),H=w%F,le=H%Q.boundary,I=H+le;w+=le,I!==0&&F-I<Q.storage&&(w+=F-I),Y.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=Q.storage}}}const U=w%F;return U>0&&(w+=F-U),L.__size=w,L.__cache={},this}function M(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function S(L){const P=L.target;P.removeEventListener("dispose",S);const w=u.indexOf(P.__bindingPointIndex);u.splice(w,1),o.deleteBuffer(r[P.id]),delete r[P.id],delete a[P.id]}function y(){for(const L in r)o.deleteBuffer(r[L]);u=[],r={},a={}}return{bind:d,update:h,dispose:y}}class H3{constructor(e={}){const{canvas:t=vw(),context:n=null,depth:r=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=u;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,y=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lr,this.toneMapping=no,this.toneMappingExposure=1;const w=this;let F=!1,U=0,D=0,O=null,C=-1,T=null;const B=new Tn,Y=new Tn;let K=null;const oe=new Wt(0);let ce=0,te=t.width,Q=t.height,H=1,le=null,I=null;const k=new Tn(0,0,te,Q),re=new Tn(0,0,te,Q);let Oe=!1;const Z=new fy;let he=!1,ye=!1;const ge=new Pn,we=new Pn,Pe=new de,Je=new Tn,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function tt(){return O===null?H:1}let G=n;function Xt(b,j){return t.getContext(b,j)}try{const b={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${__}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),G===null){const j="webgl2";if(G=Xt(j,b),G===null)throw Xt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let dt,J,Ve,wt,Xe,N,R,ne,ve,_e,me,Ie,Ce,Ne,mt,Ee,be,it,rt,Be,yt,st,At,V;function De(){dt=new KC(G),dt.init(),st=new L3(G,dt),J=new WC(G,dt,e,st),Ve=new P3(G,dt),J.reverseDepthBuffer&&g&&Ve.buffers.depth.setReversed(!0),wt=new JC(G),Xe=new g3,N=new D3(G,dt,Ve,Xe,J,st,wt),R=new jC(w),ne=new $C(w),ve=new o2(G),At=new VC(G,ve),_e=new ZC(G,ve,wt,At),me=new tR(G,_e,ve,wt),rt=new eR(G,J,N),Ee=new XC(Xe),Ie=new _3(w,R,ne,dt,J,At,Ee),Ce=new z3(w,Xe),Ne=new x3,mt=new w3(dt),it=new HC(w,R,ne,Ve,me,v,d),be=new R3(w,me,J),V=new B3(G,wt,J,Ve),Be=new GC(G,dt,wt),yt=new QC(G,dt,wt),wt.programs=Ie.programs,w.capabilities=J,w.extensions=dt,w.properties=Xe,w.renderLists=Ne,w.shadowMap=be,w.state=Ve,w.info=wt}De();const fe=new O3(w,G);this.xr=fe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=dt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=dt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(te,Q,!1))},this.getSize=function(b){return b.set(te,Q)},this.setSize=function(b,j,se=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,Q=j,t.width=Math.floor(b*H),t.height=Math.floor(j*H),se===!0&&(t.style.width=b+"px",t.style.height=j+"px"),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set(te*H,Q*H).floor()},this.setDrawingBufferSize=function(b,j,se){te=b,Q=j,H=se,t.width=Math.floor(b*se),t.height=Math.floor(j*se),this.setViewport(0,0,b,j)},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(k)},this.setViewport=function(b,j,se,ae){b.isVector4?k.set(b.x,b.y,b.z,b.w):k.set(b,j,se,ae),Ve.viewport(B.copy(k).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,j,se,ae){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,j,se,ae),Ve.scissor(Y.copy(re).multiplyScalar(H).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(b){Ve.setScissorTest(Oe=b)},this.setOpaqueSort=function(b){le=b},this.setTransparentSort=function(b){I=b},this.getClearColor=function(b){return b.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(b=!0,j=!0,se=!0){let ae=0;if(b){let W=!1;if(O!==null){const xe=O.texture.format;W=xe===M_||xe===S_||xe===y_}if(W){const xe=O.texture.type,Re=xe===ys||xe===ea||xe===ku||xe===_l||xe===v_||xe===x_,He=it.getClearColor(),We=it.getClearAlpha(),at=He.r,nt=He.g,Ke=He.b;Re?(E[0]=at,E[1]=nt,E[2]=Ke,E[3]=We,G.clearBufferuiv(G.COLOR,0,E)):(M[0]=at,M[1]=nt,M[2]=Ke,M[3]=We,G.clearBufferiv(G.COLOR,0,M))}else ae|=G.COLOR_BUFFER_BIT}j&&(ae|=G.DEPTH_BUFFER_BIT),se&&(ae|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),it.dispose(),Ne.dispose(),mt.dispose(),Xe.dispose(),R.dispose(),ne.dispose(),me.dispose(),At.dispose(),V.dispose(),Ie.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Fe),fe.removeEventListener("sessionend",pt),Qe.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const b=wt.autoReset,j=be.enabled,se=be.autoUpdate,ae=be.needsUpdate,W=be.type;De(),wt.autoReset=b,be.enabled=j,be.autoUpdate=se,be.needsUpdate=ae,be.type=W}function Ue(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){const j=b.target;j.removeEventListener("dispose",ht),Ut(j)}function Ut(b){rn(b),Xe.remove(b)}function rn(b){const j=Xe.get(b).programs;j!==void 0&&(j.forEach(function(se){Ie.releaseProgram(se)}),b.isShaderMaterial&&Ie.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,se,ae,W,xe){j===null&&(j=St);const Re=W.isMesh&&W.matrixWorld.determinant()<0,He=Kn(b,j,se,ae,W);Ve.setMaterial(ae,Re);let We=se.index,at=1;if(ae.wireframe===!0){if(We=_e.getWireframeAttribute(se),We===void 0)return;at=2}const nt=se.drawRange,Ke=se.attributes.position;let _t=nt.start*at,Rt=(nt.start+nt.count)*at;xe!==null&&(_t=Math.max(_t,xe.start*at),Rt=Math.min(Rt,(xe.start+xe.count)*at)),We!==null?(_t=Math.max(_t,0),Rt=Math.min(Rt,We.count)):Ke!=null&&(_t=Math.max(_t,0),Rt=Math.min(Rt,Ke.count));const Ht=Rt-_t;if(Ht<0||Ht===1/0)return;At.setup(W,ae,He,se,We);let ln,zt=Be;if(We!==null&&(ln=ve.get(We),zt=yt,zt.setIndex(ln)),W.isMesh)ae.wireframe===!0?(Ve.setLineWidth(ae.wireframeLinewidth*tt()),zt.setMode(G.LINES)):zt.setMode(G.TRIANGLES);else if(W.isLine){let lt=ae.linewidth;lt===void 0&&(lt=1),Ve.setLineWidth(lt*tt()),W.isLineSegments?zt.setMode(G.LINES):W.isLineLoop?zt.setMode(G.LINE_LOOP):zt.setMode(G.LINE_STRIP)}else W.isPoints?zt.setMode(G.POINTS):W.isSprite&&zt.setMode(G.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)zt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))zt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const lt=W._multiDrawStarts,gn=W._multiDrawCounts,Nt=W._multiDrawCount,jn=We?ve.get(We).bytesPerElement:1,gr=Xe.get(ae).currentProgram.getUniforms();for(let fi=0;fi<Nt;fi++)gr.setValue(G,"_gl_DrawID",fi),zt.render(lt[fi]/jn,gn[fi])}else if(W.isInstancedMesh)zt.renderInstances(_t,Ht,W.count);else if(se.isInstancedBufferGeometry){const lt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,gn=Math.min(se.instanceCount,lt);zt.renderInstances(_t,Ht,gn)}else zt.render(_t,Ht)};function ke(b,j,se){b.transparent===!0&&b.side===fs&&b.forceSinglePass===!1?(b.side=Oi,b.needsUpdate=!0,Yt(b,j,se),b.side=oo,b.needsUpdate=!0,Yt(b,j,se),b.side=fs):Yt(b,j,se)}this.compile=function(b,j,se=null){se===null&&(se=b),y=mt.get(se),y.init(j),P.push(y),se.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),b!==se&&b.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),y.setupLights();const ae=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xe=W.material;if(xe)if(Array.isArray(xe))for(let Re=0;Re<xe.length;Re++){const He=xe[Re];ke(He,se,W),ae.add(He)}else ke(xe,se,W),ae.add(xe)}),P.pop(),y=null,ae},this.compileAsync=function(b,j,se=null){const ae=this.compile(b,j,se);return new Promise(W=>{function xe(){if(ae.forEach(function(Re){Xe.get(Re).currentProgram.isReady()&&ae.delete(Re)}),ae.size===0){W(b);return}setTimeout(xe,10)}dt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let qe=null;function vt(b){qe&&qe(b)}function Fe(){Qe.stop()}function pt(){Qe.start()}const Qe=new hy;Qe.setAnimationLoop(vt),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(b){qe=b,fe.setAnimationLoop(b),b===null?Qe.stop():Qe.start()},fe.addEventListener("sessionstart",Fe),fe.addEventListener("sessionend",pt),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(j),j=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,j,O),y=mt.get(b,P.length),y.init(j),P.push(y),we.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Z.setFromProjectionMatrix(we),ye=this.localClippingEnabled,he=Ee.init(this.clippingPlanes,ye),S=Ne.get(b,L.length),S.init(),L.push(S),fe.enabled===!0&&fe.isPresenting===!0){const xe=w.xr.getDepthSensingMesh();xe!==null&&ot(xe,j,-1/0,w.sortObjects)}ot(b,j,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(le,I),gt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,gt&&it.addToRenderList(S,b),this.info.render.frame++,he===!0&&Ee.beginShadows();const se=y.state.shadowsArray;be.render(se,b,j),he===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=S.opaque,W=S.transmissive;if(y.setupLights(),j.isArrayCamera){const xe=j.cameras;if(W.length>0)for(let Re=0,He=xe.length;Re<He;Re++){const We=xe[Re];Mt(ae,W,b,We)}gt&&it.render(b);for(let Re=0,He=xe.length;Re<He;Re++){const We=xe[Re];en(S,b,We,We.viewport)}}else W.length>0&&Mt(ae,W,b,j),gt&&it.render(b),en(S,b,j);O!==null&&(N.updateMultisampleRenderTarget(O),N.updateRenderTargetMipmap(O)),b.isScene===!0&&b.onAfterRender(w,b,j),At.resetDefaultState(),C=-1,T=null,P.pop(),P.length>0?(y=P[P.length-1],he===!0&&Ee.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function ot(b,j,se,ae){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)se=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){ae&&Je.setFromMatrixPosition(b.matrixWorld).applyMatrix4(we);const Re=me.update(b),He=b.material;He.visible&&S.push(b,Re,He,se,Je.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){const Re=me.update(b),He=b.material;if(ae&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Je.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Je.copy(Re.boundingSphere.center)),Je.applyMatrix4(b.matrixWorld).applyMatrix4(we)),Array.isArray(He)){const We=Re.groups;for(let at=0,nt=We.length;at<nt;at++){const Ke=We[at],_t=He[Ke.materialIndex];_t&&_t.visible&&S.push(b,Re,_t,se,Je.z,Ke)}}else He.visible&&S.push(b,Re,He,se,Je.z,null)}}const xe=b.children;for(let Re=0,He=xe.length;Re<He;Re++)ot(xe[Re],j,se,ae)}function en(b,j,se,ae){const W=b.opaque,xe=b.transmissive,Re=b.transparent;y.setupLightsView(se),he===!0&&Ee.setGlobalState(w.clippingPlanes,se),ae&&Ve.viewport(B.copy(ae)),W.length>0&&jt(W,j,se),xe.length>0&&jt(xe,j,se),Re.length>0&&jt(Re,j,se),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Mt(b,j,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ae.id]===void 0&&(y.state.transmissionRenderTarget[ae.id]=new ta(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Wu:ys,minFilter:Vo,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));const xe=y.state.transmissionRenderTarget[ae.id],Re=ae.viewport||B;xe.setSize(Re.z,Re.w);const He=w.getRenderTarget();w.setRenderTarget(xe),w.getClearColor(oe),ce=w.getClearAlpha(),ce<1&&w.setClearColor(16777215,.5),w.clear(),gt&&it.render(se);const We=w.toneMapping;w.toneMapping=no;const at=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),y.setupLightsView(ae),he===!0&&Ee.setGlobalState(w.clippingPlanes,ae),jt(b,se,ae),N.updateMultisampleRenderTarget(xe),N.updateRenderTargetMipmap(xe),dt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ke=0,_t=j.length;Ke<_t;Ke++){const Rt=j[Ke],Ht=Rt.object,ln=Rt.geometry,zt=Rt.material,lt=Rt.group;if(zt.side===fs&&Ht.layers.test(ae.layers)){const gn=zt.side;zt.side=Oi,zt.needsUpdate=!0,yn(Ht,se,ae,ln,zt,lt),zt.side=gn,zt.needsUpdate=!0,nt=!0}}nt===!0&&(N.updateMultisampleRenderTarget(xe),N.updateRenderTargetMipmap(xe))}w.setRenderTarget(He),w.setClearColor(oe,ce),at!==void 0&&(ae.viewport=at),w.toneMapping=We}function jt(b,j,se){const ae=j.isScene===!0?j.overrideMaterial:null;for(let W=0,xe=b.length;W<xe;W++){const Re=b[W],He=Re.object,We=Re.geometry,at=ae===null?Re.material:ae,nt=Re.group;He.layers.test(se.layers)&&yn(He,j,se,We,at,nt)}}function yn(b,j,se,ae,W,xe){b.onBeforeRender(w,j,se,ae,W,xe),b.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(w,j,se,ae,b,xe),W.transparent===!0&&W.side===fs&&W.forceSinglePass===!1?(W.side=Oi,W.needsUpdate=!0,w.renderBufferDirect(se,j,ae,W,b,xe),W.side=oo,W.needsUpdate=!0,w.renderBufferDirect(se,j,ae,W,b,xe),W.side=fs):w.renderBufferDirect(se,j,ae,W,b,xe),b.onAfterRender(w,j,se,ae,W,xe)}function Yt(b,j,se){j.isScene!==!0&&(j=St);const ae=Xe.get(b),W=y.state.lights,xe=y.state.shadowsArray,Re=W.state.version,He=Ie.getParameters(b,W.state,xe,j,se),We=Ie.getProgramCacheKey(He);let at=ae.programs;ae.environment=b.isMeshStandardMaterial?j.environment:null,ae.fog=j.fog,ae.envMap=(b.isMeshStandardMaterial?ne:R).get(b.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&b.envMap===null?j.environmentRotation:b.envMapRotation,at===void 0&&(b.addEventListener("dispose",ht),at=new Map,ae.programs=at);let nt=at.get(We);if(nt!==void 0){if(ae.currentProgram===nt&&ae.lightsStateVersion===Re)return Ct(b,He),nt}else He.uniforms=Ie.getUniforms(b),b.onBeforeCompile(He,w),nt=Ie.acquireProgram(He,We),at.set(We,nt),ae.uniforms=He.uniforms;const Ke=ae.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ke.clippingPlanes=Ee.uniform),Ct(b,He),ae.needsLights=Xn(b),ae.lightsStateVersion=Re,ae.needsLights&&(Ke.ambientLightColor.value=W.state.ambient,Ke.lightProbe.value=W.state.probe,Ke.directionalLights.value=W.state.directional,Ke.directionalLightShadows.value=W.state.directionalShadow,Ke.spotLights.value=W.state.spot,Ke.spotLightShadows.value=W.state.spotShadow,Ke.rectAreaLights.value=W.state.rectArea,Ke.ltc_1.value=W.state.rectAreaLTC1,Ke.ltc_2.value=W.state.rectAreaLTC2,Ke.pointLights.value=W.state.point,Ke.pointLightShadows.value=W.state.pointShadow,Ke.hemisphereLights.value=W.state.hemi,Ke.directionalShadowMap.value=W.state.directionalShadowMap,Ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ke.spotShadowMap.value=W.state.spotShadowMap,Ke.spotLightMatrix.value=W.state.spotLightMatrix,Ke.spotLightMap.value=W.state.spotLightMap,Ke.pointShadowMap.value=W.state.pointShadowMap,Ke.pointShadowMatrix.value=W.state.pointShadowMatrix),ae.currentProgram=nt,ae.uniformsList=null,nt}function qt(b){if(b.uniformsList===null){const j=b.currentProgram.getUniforms();b.uniformsList=Bf.seqWithValue(j.seq,b.uniforms)}return b.uniformsList}function Ct(b,j){const se=Xe.get(b);se.outputColorSpace=j.outputColorSpace,se.batching=j.batching,se.batchingColor=j.batchingColor,se.instancing=j.instancing,se.instancingColor=j.instancingColor,se.instancingMorph=j.instancingMorph,se.skinning=j.skinning,se.morphTargets=j.morphTargets,se.morphNormals=j.morphNormals,se.morphColors=j.morphColors,se.morphTargetsCount=j.morphTargetsCount,se.numClippingPlanes=j.numClippingPlanes,se.numIntersection=j.numClipIntersection,se.vertexAlphas=j.vertexAlphas,se.vertexTangents=j.vertexTangents,se.toneMapping=j.toneMapping}function Kn(b,j,se,ae,W){j.isScene!==!0&&(j=St),N.resetTextureUnits();const xe=j.fog,Re=ae.isMeshStandardMaterial?j.environment:null,He=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:vl,We=(ae.isMeshStandardMaterial?ne:R).get(ae.envMap||Re),at=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,nt=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ke=!!se.morphAttributes.position,_t=!!se.morphAttributes.normal,Rt=!!se.morphAttributes.color;let Ht=no;ae.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ht=w.toneMapping);const ln=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,zt=ln!==void 0?ln.length:0,lt=Xe.get(ae),gn=y.state.lights;if(he===!0&&(ye===!0||b!==T)){const Sn=b===T&&ae.id===C;Ee.setState(ae,b,Sn)}let Nt=!1;ae.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==gn.state.version||lt.outputColorSpace!==He||W.isBatchedMesh&&lt.batching===!1||!W.isBatchedMesh&&lt.batching===!0||W.isBatchedMesh&&lt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&lt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&lt.instancing===!1||!W.isInstancedMesh&&lt.instancing===!0||W.isSkinnedMesh&&lt.skinning===!1||!W.isSkinnedMesh&&lt.skinning===!0||W.isInstancedMesh&&lt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&lt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&lt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&lt.instancingMorph===!1&&W.morphTexture!==null||lt.envMap!==We||ae.fog===!0&&lt.fog!==xe||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==Ee.numPlanes||lt.numIntersection!==Ee.numIntersection)||lt.vertexAlphas!==at||lt.vertexTangents!==nt||lt.morphTargets!==Ke||lt.morphNormals!==_t||lt.morphColors!==Rt||lt.toneMapping!==Ht||lt.morphTargetsCount!==zt)&&(Nt=!0):(Nt=!0,lt.__version=ae.version);let jn=lt.currentProgram;Nt===!0&&(jn=Yt(ae,j,W));let gr=!1,fi=!1,co=!1;const Kt=jn.getUniforms(),di=lt.uniforms;if(Ve.useProgram(jn.program)&&(gr=!0,fi=!0,co=!0),ae.id!==C&&(C=ae.id,fi=!0),gr||T!==b){Ve.buffers.depth.getReversed()?(ge.copy(b.projectionMatrix),yw(ge),Sw(ge),Kt.setValue(G,"projectionMatrix",ge)):Kt.setValue(G,"projectionMatrix",b.projectionMatrix),Kt.setValue(G,"viewMatrix",b.matrixWorldInverse);const Qn=Kt.map.cameraPosition;Qn!==void 0&&Qn.setValue(G,Pe.setFromMatrixPosition(b.matrixWorld)),J.logarithmicDepthBuffer&&Kt.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Kt.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),T!==b&&(T=b,fi=!0,co=!0)}if(W.isSkinnedMesh){Kt.setOptional(G,W,"bindMatrix"),Kt.setOptional(G,W,"bindMatrixInverse");const Sn=W.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Kt.setValue(G,"boneTexture",Sn.boneTexture,N))}W.isBatchedMesh&&(Kt.setOptional(G,W,"batchingTexture"),Kt.setValue(G,"batchingTexture",W._matricesTexture,N),Kt.setOptional(G,W,"batchingIdTexture"),Kt.setValue(G,"batchingIdTexture",W._indirectTexture,N),Kt.setOptional(G,W,"batchingColorTexture"),W._colorsTexture!==null&&Kt.setValue(G,"batchingColorTexture",W._colorsTexture,N));const Zn=se.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&rt.update(W,se,jn),(fi||lt.receiveShadow!==W.receiveShadow)&&(lt.receiveShadow=W.receiveShadow,Kt.setValue(G,"receiveShadow",W.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(di.envMap.value=We,di.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&j.environment!==null&&(di.envMapIntensity.value=j.environmentIntensity),fi&&(Kt.setValue(G,"toneMappingExposure",w.toneMappingExposure),lt.needsLights&&$t(di,co),xe&&ae.fog===!0&&Ce.refreshFogUniforms(di,xe),Ce.refreshMaterialUniforms(di,ae,H,Q,y.state.transmissionRenderTarget[b.id]),Bf.upload(G,qt(lt),di,N)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Bf.upload(G,qt(lt),di,N),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Kt.setValue(G,"center",W.center),Kt.setValue(G,"modelViewMatrix",W.modelViewMatrix),Kt.setValue(G,"normalMatrix",W.normalMatrix),Kt.setValue(G,"modelMatrix",W.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Sn=ae.uniformsGroups;for(let Qn=0,fo=Sn.length;Qn<fo;Qn++){const Dt=Sn[Qn];V.update(Dt,jn),V.bind(Dt,jn)}}return jn}function $t(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function Xn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,j,se){Xe.get(b.texture).__webglTexture=j,Xe.get(b.depthTexture).__webglTexture=se;const ae=Xe.get(b);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=se===void 0,ae.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,j){const se=Xe.get(b);se.__webglFramebuffer=j,se.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(b,j=0,se=0){O=b,U=j,D=se;let ae=!0,W=null,xe=!1,Re=!1;if(b){const We=Xe.get(b);if(We.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(G.FRAMEBUFFER,null),ae=!1;else if(We.__webglFramebuffer===void 0)N.setupRenderTarget(b);else if(We.__hasExternalTextures)N.rebindTextures(b,Xe.get(b.texture).__webglTexture,Xe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ke=b.depthTexture;if(We.__boundDepthTexture!==Ke){if(Ke!==null&&Xe.has(Ke)&&(b.width!==Ke.image.width||b.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(b)}}const at=b.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Re=!0);const nt=Xe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(nt[j])?W=nt[j][se]:W=nt[j],xe=!0):b.samples>0&&N.useMultisampledRTT(b)===!1?W=Xe.get(b).__webglMultisampledFramebuffer:Array.isArray(nt)?W=nt[se]:W=nt,B.copy(b.viewport),Y.copy(b.scissor),K=b.scissorTest}else B.copy(k).multiplyScalar(H).floor(),Y.copy(re).multiplyScalar(H).floor(),K=Oe;if(Ve.bindFramebuffer(G.FRAMEBUFFER,W)&&ae&&Ve.drawBuffers(b,W),Ve.viewport(B),Ve.scissor(Y),Ve.setScissorTest(K),xe){const We=Xe.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,We.__webglTexture,se)}else if(Re){const We=Xe.get(b.texture),at=j||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,We.__webglTexture,se||0,at)}C=-1},this.readRenderTargetPixels=function(b,j,se,ae,W,xe,Re){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(He=He[Re]),He){Ve.bindFramebuffer(G.FRAMEBUFFER,He);try{const We=b.texture,at=We.format,nt=We.type;if(!J.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-ae&&se>=0&&se<=b.height-W&&G.readPixels(j,se,ae,W,st.convert(at),st.convert(nt),xe)}finally{const We=O!==null?Xe.get(O).__webglFramebuffer:null;Ve.bindFramebuffer(G.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(b,j,se,ae,W,xe,Re){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(He=He[Re]),He){const We=b.texture,at=We.format,nt=We.type;if(!J.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=b.width-ae&&se>=0&&se<=b.height-W){Ve.bindFramebuffer(G.FRAMEBUFFER,He);const Ke=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ke),G.bufferData(G.PIXEL_PACK_BUFFER,xe.byteLength,G.STREAM_READ),G.readPixels(j,se,ae,W,st.convert(at),st.convert(nt),0);const _t=O!==null?Xe.get(O).__webglFramebuffer:null;Ve.bindFramebuffer(G.FRAMEBUFFER,_t);const Rt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await xw(G,Rt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ke),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,xe),G.deleteBuffer(Ke),G.deleteSync(Rt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,j=null,se=0){b.isTexture!==!0&&(ja("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,b=arguments[1]);const ae=Math.pow(2,-se),W=Math.floor(b.image.width*ae),xe=Math.floor(b.image.height*ae),Re=j!==null?j.x:0,He=j!==null?j.y:0;N.setTexture2D(b,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,Re,He,W,xe),Ve.unbindTexture()};const ci=G.createFramebuffer(),_n=G.createFramebuffer();this.copyTextureToTexture=function(b,j,se=null,ae=null,W=0,xe=null){b.isTexture!==!0&&(ja("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,b=arguments[1],j=arguments[2],xe=arguments[3]||0,se=null),xe===null&&(W!==0?(ja("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=W,W=0):xe=0);let Re,He,We,at,nt,Ke,_t,Rt,Ht;const ln=b.isCompressedTexture?b.mipmaps[xe]:b.image;if(se!==null)Re=se.max.x-se.min.x,He=se.max.y-se.min.y,We=se.isBox3?se.max.z-se.min.z:1,at=se.min.x,nt=se.min.y,Ke=se.isBox3?se.min.z:0;else{const Zn=Math.pow(2,-W);Re=Math.floor(ln.width*Zn),He=Math.floor(ln.height*Zn),b.isDataArrayTexture?We=ln.depth:b.isData3DTexture?We=Math.floor(ln.depth*Zn):We=1,at=0,nt=0,Ke=0}ae!==null?(_t=ae.x,Rt=ae.y,Ht=ae.z):(_t=0,Rt=0,Ht=0);const zt=st.convert(j.format),lt=st.convert(j.type);let gn;j.isData3DTexture?(N.setTexture3D(j,0),gn=G.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(N.setTexture2DArray(j,0),gn=G.TEXTURE_2D_ARRAY):(N.setTexture2D(j,0),gn=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const Nt=G.getParameter(G.UNPACK_ROW_LENGTH),jn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),gr=G.getParameter(G.UNPACK_SKIP_PIXELS),fi=G.getParameter(G.UNPACK_SKIP_ROWS),co=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ln.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ln.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,at),G.pixelStorei(G.UNPACK_SKIP_ROWS,nt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ke);const Kt=b.isDataArrayTexture||b.isData3DTexture,di=j.isDataArrayTexture||j.isData3DTexture;if(b.isDepthTexture){const Zn=Xe.get(b),Sn=Xe.get(j),Qn=Xe.get(Zn.__renderTarget),fo=Xe.get(Sn.__renderTarget);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,Qn.__webglFramebuffer),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,fo.__webglFramebuffer);for(let Dt=0;Dt<We;Dt++)Kt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xe.get(b).__webglTexture,W,Ke+Dt),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xe.get(j).__webglTexture,xe,Ht+Dt)),G.blitFramebuffer(at,nt,Re,He,_t,Rt,Re,He,G.DEPTH_BUFFER_BIT,G.NEAREST);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Xe.has(b)){const Zn=Xe.get(b),Sn=Xe.get(j);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,ci),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,_n);for(let Qn=0;Qn<We;Qn++)Kt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Zn.__webglTexture,W,Ke+Qn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Zn.__webglTexture,W),di?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Sn.__webglTexture,xe,Ht+Qn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Sn.__webglTexture,xe),W!==0?G.blitFramebuffer(at,nt,Re,He,_t,Rt,Re,He,G.COLOR_BUFFER_BIT,G.NEAREST):di?G.copyTexSubImage3D(gn,xe,_t,Rt,Ht+Qn,at,nt,Re,He):G.copyTexSubImage2D(gn,xe,_t,Rt,at,nt,Re,He);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else di?b.isDataTexture||b.isData3DTexture?G.texSubImage3D(gn,xe,_t,Rt,Ht,Re,He,We,zt,lt,ln.data):j.isCompressedArrayTexture?G.compressedTexSubImage3D(gn,xe,_t,Rt,Ht,Re,He,We,zt,ln.data):G.texSubImage3D(gn,xe,_t,Rt,Ht,Re,He,We,zt,lt,ln):b.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,xe,_t,Rt,Re,He,zt,lt,ln.data):b.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,xe,_t,Rt,ln.width,ln.height,zt,ln.data):G.texSubImage2D(G.TEXTURE_2D,xe,_t,Rt,Re,He,zt,lt,ln);G.pixelStorei(G.UNPACK_ROW_LENGTH,Nt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,jn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,gr),G.pixelStorei(G.UNPACK_SKIP_ROWS,fi),G.pixelStorei(G.UNPACK_SKIP_IMAGES,co),xe===0&&j.generateMipmaps&&G.generateMipmap(gn),Ve.unbindTexture()},this.copyTextureToTexture3D=function(b,j,se=null,ae=null,W=0){return b.isTexture!==!0&&(ja("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,ae=arguments[1]||null,b=arguments[2],j=arguments[3],W=arguments[4]||0),ja('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,j,se,ae,W)},this.initRenderTarget=function(b){Xe.get(b).__webglFramebuffer===void 0&&N.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?N.setTextureCube(b,0):b.isData3DTexture?N.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?N.setTexture2DArray(b,0):N.setTexture2D(b,0),Ve.unbindTexture()},this.resetState=function(){U=0,D=0,O=null,Ve.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ps}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Gt._getUnpackColorSpace()}}function V3(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function G3(o,e,t){return V3(o.prototype,e),o}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $n,Hf,Ki,Zs,Qs,sl,vy,Fo,Su,xy,ms,Cr,yy,Sy=function(){return $n||typeof window<"u"&&($n=window.gsap)&&$n.registerPlugin&&$n},My=1,Qa=[],Lt=[],jr=[],Mu=Date.now,Vm=function(e,t){return t},W3=function(){var e=Su.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Lt),r.push.apply(r,jr),Lt=n,jr=r,Vm=function(u,c){return t[u](c)}},io=function(e,t){return~jr.indexOf(e)&&jr[jr.indexOf(e)+1][t]},Eu=function(e){return!!~xy.indexOf(e)},_i=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:r!==!1,capture:!!a})},mi=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},yf="scrollLeft",Sf="scrollTop",Gm=function(){return ms&&ms.isPressed||Lt.cache++},nd=function(e,t){var n=function r(a){if(a||a===0){My&&(Ki.history.scrollRestoration="manual");var u=ms&&ms.isPressed;a=r.v=Math.round(a)||(ms&&ms.iOS?1:0),e(a),r.cacheID=Lt.cache,u&&Vm("ss",a)}else(t||Lt.cache!==r.cacheID||Vm("ref"))&&(r.cacheID=Lt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Mi={s:yf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:nd(function(o){return arguments.length?Ki.scrollTo(o,Un.sc()):Ki.pageXOffset||Zs[yf]||Qs[yf]||sl[yf]||0})},Un={s:Sf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Mi,sc:nd(function(o){return arguments.length?Ki.scrollTo(Mi.sc(),o):Ki.pageYOffset||Zs[Sf]||Qs[Sf]||sl[Sf]||0})},Li=function(e,t){return(t&&t._ctx&&t._ctx.selector||$n.utils.toArray)(e)[0]||(typeof e=="string"&&$n.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},lo=function(e,t){var n=t.s,r=t.sc;Eu(e)&&(e=Zs.scrollingElement||Qs);var a=Lt.indexOf(e),u=r===Un.sc?1:2;!~a&&(a=Lt.push(e)-1),Lt[a+u]||_i(e,"scroll",Gm);var c=Lt[a+u],d=c||(Lt[a+u]=nd(io(e,n),!0)||(Eu(e)?r:nd(function(h){return arguments.length?e[n]=h:e[n]})));return d.target=e,c||(d.smooth=$n.getProperty(e,"scrollBehavior")==="smooth"),d},Wm=function(e,t,n){var r=e,a=e,u=Mu(),c=u,d=t||50,h=Math.max(500,d*3),p=function(E,M){var S=Mu();M||S-u>d?(a=r,r=E,c=u,u=S):n?r+=E:r=a+(E-a)/(S-c)*(u-c)},_=function(){a=r=n?0:r,c=u=0},g=function(E){var M=c,S=a,y=Mu();return(E||E===0)&&E!==r&&p(E),u===c||y-c>h?0:(r+(n?S:-S))/((n?y:u)-M)*1e3};return{update:p,reset:_,getVelocity:g}},lu=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Mx=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Ey=function(){Su=$n.core.globals().ScrollTrigger,Su&&Su.core&&W3()},Ty=function(e){return $n=e||Sy(),!Hf&&$n&&typeof document<"u"&&document.body&&(Ki=window,Zs=document,Qs=Zs.documentElement,sl=Zs.body,xy=[Ki,Zs,Qs,sl],$n.utils.clamp,yy=$n.core.context||function(){},Fo="onpointerenter"in sl?"pointer":"mouse",vy=wn.isTouch=Ki.matchMedia&&Ki.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ki||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Cr=wn.eventTypes=("ontouchstart"in Qs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Qs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return My=0},500),Ey(),Hf=1),Hf};Mi.op=Un;Lt.cache=0;var wn=function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(n){Hf||Ty($n)||console.warn("Please gsap.registerPlugin(Observer)"),Su||Ey();var r=n.tolerance,a=n.dragMinimum,u=n.type,c=n.target,d=n.lineHeight,h=n.debounce,p=n.preventDefault,_=n.onStop,g=n.onStopDelay,v=n.ignore,E=n.wheelSpeed,M=n.event,S=n.onDragStart,y=n.onDragEnd,L=n.onDrag,P=n.onPress,w=n.onRelease,F=n.onRight,U=n.onLeft,D=n.onUp,O=n.onDown,C=n.onChangeX,T=n.onChangeY,B=n.onChange,Y=n.onToggleX,K=n.onToggleY,oe=n.onHover,ce=n.onHoverEnd,te=n.onMove,Q=n.ignoreCheck,H=n.isNormalizer,le=n.onGestureStart,I=n.onGestureEnd,k=n.onWheel,re=n.onEnable,Oe=n.onDisable,Z=n.onClick,he=n.scrollSpeed,ye=n.capture,ge=n.allowClicks,we=n.lockAxis,Pe=n.onLockAxis;this.target=c=Li(c)||Qs,this.vars=n,v&&(v=$n.utils.toArray(v)),r=r||1e-9,a=a||0,E=E||1,he=he||1,u=u||"wheel,touch,pointer",h=h!==!1,d||(d=parseFloat(Ki.getComputedStyle(sl).lineHeight)||22);var Je,St,gt,tt,G,Xt,dt,J=this,Ve=0,wt=0,Xe=n.passive||!p,N=lo(c,Mi),R=lo(c,Un),ne=N(),ve=R(),_e=~u.indexOf("touch")&&!~u.indexOf("pointer")&&Cr[0]==="pointerdown",me=Eu(c),Ie=c.ownerDocument||Zs,Ce=[0,0,0],Ne=[0,0,0],mt=0,Ee=function(){return mt=Mu()},be=function(qe,vt){return(J.event=qe)&&v&&~v.indexOf(qe.target)||vt&&_e&&qe.pointerType!=="touch"||Q&&Q(qe,vt)},it=function(){J._vx.reset(),J._vy.reset(),St.pause(),_&&_(J)},rt=function(){var qe=J.deltaX=Mx(Ce),vt=J.deltaY=Mx(Ne),Fe=Math.abs(qe)>=r,pt=Math.abs(vt)>=r;B&&(Fe||pt)&&B(J,qe,vt,Ce,Ne),Fe&&(F&&J.deltaX>0&&F(J),U&&J.deltaX<0&&U(J),C&&C(J),Y&&J.deltaX<0!=Ve<0&&Y(J),Ve=J.deltaX,Ce[0]=Ce[1]=Ce[2]=0),pt&&(O&&J.deltaY>0&&O(J),D&&J.deltaY<0&&D(J),T&&T(J),K&&J.deltaY<0!=wt<0&&K(J),wt=J.deltaY,Ne[0]=Ne[1]=Ne[2]=0),(tt||gt)&&(te&&te(J),gt&&(L(J),gt=!1),tt=!1),Xt&&!(Xt=!1)&&Pe&&Pe(J),G&&(k(J),G=!1),Je=0},Be=function(qe,vt,Fe){Ce[Fe]+=qe,Ne[Fe]+=vt,J._vx.update(qe),J._vy.update(vt),h?Je||(Je=requestAnimationFrame(rt)):rt()},yt=function(qe,vt){we&&!dt&&(J.axis=dt=Math.abs(qe)>Math.abs(vt)?"x":"y",Xt=!0),dt!=="y"&&(Ce[2]+=qe,J._vx.update(qe,!0)),dt!=="x"&&(Ne[2]+=vt,J._vy.update(vt,!0)),h?Je||(Je=requestAnimationFrame(rt)):rt()},st=function(qe){if(!be(qe,1)){qe=lu(qe,p);var vt=qe.clientX,Fe=qe.clientY,pt=vt-J.x,Qe=Fe-J.y,ot=J.isDragging;J.x=vt,J.y=Fe,(ot||Math.abs(J.startX-vt)>=a||Math.abs(J.startY-Fe)>=a)&&(L&&(gt=!0),ot||(J.isDragging=!0),yt(pt,Qe),ot||S&&S(J))}},At=J.onPress=function(ke){be(ke,1)||ke&&ke.button||(J.axis=dt=null,St.pause(),J.isPressed=!0,ke=lu(ke),Ve=wt=0,J.startX=J.x=ke.clientX,J.startY=J.y=ke.clientY,J._vx.reset(),J._vy.reset(),_i(H?c:Ie,Cr[1],st,Xe,!0),J.deltaX=J.deltaY=0,P&&P(J))},V=J.onRelease=function(ke){if(!be(ke,1)){mi(H?c:Ie,Cr[1],st,!0);var qe=!isNaN(J.y-J.startY),vt=J.isDragging,Fe=vt&&(Math.abs(J.x-J.startX)>3||Math.abs(J.y-J.startY)>3),pt=lu(ke);!Fe&&qe&&(J._vx.reset(),J._vy.reset(),p&&ge&&$n.delayedCall(.08,function(){if(Mu()-mt>300&&!ke.defaultPrevented){if(ke.target.click)ke.target.click();else if(Ie.createEvent){var Qe=Ie.createEvent("MouseEvents");Qe.initMouseEvent("click",!0,!0,Ki,1,pt.screenX,pt.screenY,pt.clientX,pt.clientY,!1,!1,!1,!1,0,null),ke.target.dispatchEvent(Qe)}}})),J.isDragging=J.isGesturing=J.isPressed=!1,_&&vt&&!H&&St.restart(!0),y&&vt&&y(J),w&&w(J,Fe)}},De=function(qe){return qe.touches&&qe.touches.length>1&&(J.isGesturing=!0)&&le(qe,J.isDragging)},fe=function(){return(J.isGesturing=!1)||I(J)},pe=function(qe){if(!be(qe)){var vt=N(),Fe=R();Be((vt-ne)*he,(Fe-ve)*he,1),ne=vt,ve=Fe,_&&St.restart(!0)}},Le=function(qe){if(!be(qe)){qe=lu(qe,p),k&&(G=!0);var vt=(qe.deltaMode===1?d:qe.deltaMode===2?Ki.innerHeight:1)*E;Be(qe.deltaX*vt,qe.deltaY*vt,0),_&&!H&&St.restart(!0)}},Ue=function(qe){if(!be(qe)){var vt=qe.clientX,Fe=qe.clientY,pt=vt-J.x,Qe=Fe-J.y;J.x=vt,J.y=Fe,tt=!0,_&&St.restart(!0),(pt||Qe)&&yt(pt,Qe)}},ht=function(qe){J.event=qe,oe(J)},Ut=function(qe){J.event=qe,ce(J)},rn=function(qe){return be(qe)||lu(qe,p)&&Z(J)};St=J._dc=$n.delayedCall(g||.25,it).pause(),J.deltaX=J.deltaY=0,J._vx=Wm(0,50,!0),J._vy=Wm(0,50,!0),J.scrollX=N,J.scrollY=R,J.isDragging=J.isGesturing=J.isPressed=!1,yy(this),J.enable=function(ke){return J.isEnabled||(_i(me?Ie:c,"scroll",Gm),u.indexOf("scroll")>=0&&_i(me?Ie:c,"scroll",pe,Xe,ye),u.indexOf("wheel")>=0&&_i(c,"wheel",Le,Xe,ye),(u.indexOf("touch")>=0&&vy||u.indexOf("pointer")>=0)&&(_i(c,Cr[0],At,Xe,ye),_i(Ie,Cr[2],V),_i(Ie,Cr[3],V),ge&&_i(c,"click",Ee,!0,!0),Z&&_i(c,"click",rn),le&&_i(Ie,"gesturestart",De),I&&_i(Ie,"gestureend",fe),oe&&_i(c,Fo+"enter",ht),ce&&_i(c,Fo+"leave",Ut),te&&_i(c,Fo+"move",Ue)),J.isEnabled=!0,ke&&ke.type&&At(ke),re&&re(J)),J},J.disable=function(){J.isEnabled&&(Qa.filter(function(ke){return ke!==J&&Eu(ke.target)}).length||mi(me?Ie:c,"scroll",Gm),J.isPressed&&(J._vx.reset(),J._vy.reset(),mi(H?c:Ie,Cr[1],st,!0)),mi(me?Ie:c,"scroll",pe,ye),mi(c,"wheel",Le,ye),mi(c,Cr[0],At,ye),mi(Ie,Cr[2],V),mi(Ie,Cr[3],V),mi(c,"click",Ee,!0),mi(c,"click",rn),mi(Ie,"gesturestart",De),mi(Ie,"gestureend",fe),mi(c,Fo+"enter",ht),mi(c,Fo+"leave",Ut),mi(c,Fo+"move",Ue),J.isEnabled=J.isPressed=J.isDragging=!1,Oe&&Oe(J))},J.kill=J.revert=function(){J.disable();var ke=Qa.indexOf(J);ke>=0&&Qa.splice(ke,1),ms===J&&(ms=0)},Qa.push(J),H&&Eu(c)&&(ms=J),J.enable(M)},G3(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o}();wn.version="3.12.5";wn.create=function(o){return new wn(o)};wn.register=Ty;wn.getAll=function(){return Qa.slice()};wn.getById=function(o){return Qa.filter(function(e){return e.vars.id===o})[0]};Sy()&&$n.registerPlugin(wn);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ye,Ya,Ft,hn,Rr,an,wy,id,Bu,Tu,hu,Mf,si,hd,Xm,xi,Ex,Tx,qa,Ay,Up,Cy,vi,jm,Ry,by,js,Ym,A_,ol,C_,rd,qm,Np,Ef=1,oi=Date.now,Fp=oi(),mr=0,pu=0,wx=function(e,t,n){var r=Yi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Ax=function(e,t){return t&&(!Yi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},X3=function o(){return pu&&requestAnimationFrame(o)},Cx=function(){return hd=1},Rx=function(){return hd=0},Or=function(e){return e},mu=function(e){return Math.round(e*1e5)/1e5||0},Py=function(){return typeof window<"u"},Dy=function(){return Ye||Py()&&(Ye=window.gsap)&&Ye.registerPlugin&&Ye},na=function(e){return!!~wy.indexOf(e)},Ly=function(e){return(e==="Height"?C_:Ft["inner"+e])||Rr["client"+e]||an["client"+e]},Iy=function(e){return io(e,"getBoundingClientRect")||(na(e)?function(){return jf.width=Ft.innerWidth,jf.height=C_,jf}:function(){return ds(e)})},j3=function(e,t,n){var r=n.d,a=n.d2,u=n.a;return(u=io(e,"getBoundingClientRect"))?function(){return u()[r]}:function(){return(t?Ly(a):e["client"+a])||0}},Y3=function(e,t){return!t||~jr.indexOf(e)?Iy(e):function(){return jf}},Gr=function(e,t){var n=t.s,r=t.d2,a=t.d,u=t.a;return Math.max(0,(n="scroll"+r)&&(u=io(e,n))?u()-Iy(e)()[a]:na(e)?(Rr[n]||an[n])-Ly(r):e[n]-e["offset"+r])},Tf=function(e,t){for(var n=0;n<qa.length;n+=3)(!t||~t.indexOf(qa[n+1]))&&e(qa[n],qa[n+1],qa[n+2])},Yi=function(e){return typeof e=="string"},Ei=function(e){return typeof e=="function"},_u=function(e){return typeof e=="number"},Oo=function(e){return typeof e=="object"},uu=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Op=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Wa=Math.abs,Uy="left",Ny="top",R_="right",b_="bottom",$o="width",Ko="height",wu="Right",Au="Left",Cu="Top",Ru="Bottom",Rn="padding",cr="margin",yl="Width",P_="Height",In="px",fr=function(e){return Ft.getComputedStyle(e)},q3=function(e){var t=fr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},bx=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ds=function(e,t){var n=t&&fr(e)[Xm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},sd=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Fy=function(e){var t=[],n=e.labels,r=e.duration(),a;for(a in n)t.push(n[a]/r);return t},$3=function(e){return function(t){return Ye.utils.snap(Fy(e),t)}},D_=function(e){var t=Ye.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,a){return r-a});return n?function(r,a,u){u===void 0&&(u=.001);var c;if(!a)return t(r);if(a>0){for(r-=u,c=0;c<n.length;c++)if(n[c]>=r)return n[c];return n[c-1]}else for(c=n.length,r+=u;c--;)if(n[c]<=r)return n[c];return n[0]}:function(r,a,u){u===void 0&&(u=.001);var c=t(r);return!a||Math.abs(c-r)<u||c-r<0==a<0?c:t(a<0?r-e:r+e)}},K3=function(e){return function(t,n){return D_(Fy(e))(t,n.direction)}},wf=function(e,t,n,r){return n.split(",").forEach(function(a){return e(t,a,r)})},Vn=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:!r,capture:!!a})},Hn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Af=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Px={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Cf={toggleActions:"play",anticipatePin:0},od={top:0,left:0,center:.5,bottom:1,right:1},Vf=function(e,t){if(Yi(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in od?od[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Rf=function(e,t,n,r,a,u,c,d){var h=a.startColor,p=a.endColor,_=a.fontSize,g=a.indent,v=a.fontWeight,E=hn.createElement("div"),M=na(n)||io(n,"pinType")==="fixed",S=e.indexOf("scroller")!==-1,y=M?an:n,L=e.indexOf("start")!==-1,P=L?h:p,w="border-color:"+P+";font-size:"+_+";color:"+P+";font-weight:"+v+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((S||d)&&M?"fixed;":"absolute;"),(S||d||!M)&&(w+=(r===Un?R_:b_)+":"+(u+parseFloat(g))+"px;"),c&&(w+="box-sizing:border-box;text-align:left;width:"+c.offsetWidth+"px;"),E._isStart=L,E.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),E.style.cssText=w,E.innerText=t||t===0?e+"-"+t:e,y.children[0]?y.insertBefore(E,y.children[0]):y.appendChild(E),E._offset=E["offset"+r.op.d2],Gf(E,0,r,L),E},Gf=function(e,t,n,r){var a={display:"block"},u=n[r?"os2":"p2"],c=n[r?"p2":"os2"];e._isFlipped=r,a[n.a+"Percent"]=r?-100:0,a[n.a]=r?"1px":0,a["border"+u+yl]=1,a["border"+c+yl]=0,a[n.p]=t+"px",Ye.set(e,a)},Pt=[],$m={},Hu,Dx=function(){return oi()-mr>34&&(Hu||(Hu=requestAnimationFrame(gs)))},Xa=function(){(!vi||!vi.isPressed||vi.startX>an.clientWidth)&&(Lt.cache++,vi?Hu||(Hu=requestAnimationFrame(gs)):gs(),mr||ra("scrollStart"),mr=oi())},kp=function(){by=Ft.innerWidth,Ry=Ft.innerHeight},gu=function(){Lt.cache++,!si&&!Cy&&!hn.fullscreenElement&&!hn.webkitFullscreenElement&&(!jm||by!==Ft.innerWidth||Math.abs(Ft.innerHeight-Ry)>Ft.innerHeight*.25)&&id.restart(!0)},ia={},Z3=[],Oy=function o(){return Hn(It,"scrollEnd",o)||Go(!0)},ra=function(e){return ia[e]&&ia[e].map(function(t){return t()})||Z3},ji=[],ky=function(e){for(var t=0;t<ji.length;t+=5)(!e||ji[t+4]&&ji[t+4].query===e)&&(ji[t].style.cssText=ji[t+1],ji[t].getBBox&&ji[t].setAttribute("transform",ji[t+2]||""),ji[t+3].uncache=1)},L_=function(e,t){var n;for(xi=0;xi<Pt.length;xi++)n=Pt[xi],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));rd=!0,t&&ky(t),t||ra("revert")},zy=function(e,t){Lt.cache++,(t||!yi)&&Lt.forEach(function(n){return Ei(n)&&n.cacheID++&&(n.rec=0)}),Yi(e)&&(Ft.history.scrollRestoration=A_=e)},yi,Zo=0,Lx,Q3=function(){if(Lx!==Zo){var e=Lx=Zo;requestAnimationFrame(function(){return e===Zo&&Go(!0)})}},By=function(){an.appendChild(ol),C_=!vi&&ol.offsetHeight||Ft.innerHeight,an.removeChild(ol)},Ix=function(e){return Bu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Go=function(e,t){if(mr&&!e&&!rd){Vn(It,"scrollEnd",Oy);return}By(),yi=It.isRefreshing=!0,Lt.forEach(function(r){return Ei(r)&&++r.cacheID&&(r.rec=r())});var n=ra("refreshInit");Ay&&It.sort(),t||L_(),Lt.forEach(function(r){Ei(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Pt.slice(0).forEach(function(r){return r.refresh()}),rd=!1,Pt.forEach(function(r){if(r._subPinOffset&&r.pin){var a=r.vars.horizontal?"offsetWidth":"offsetHeight",u=r.pin[a];r.revert(!0,1),r.adjustPinSpacing(r.pin[a]-u),r.refresh()}}),qm=1,Ix(!0),Pt.forEach(function(r){var a=Gr(r.scroller,r._dir),u=r.vars.end==="max"||r._endClamp&&r.end>a,c=r._startClamp&&r.start>=a;(u||c)&&r.setPositions(c?a-1:r.start,u?Math.max(c?a:r.start+1,a):r.end,!0)}),Ix(!1),qm=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),Lt.forEach(function(r){Ei(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),zy(A_,1),id.pause(),Zo++,yi=2,gs(2),Pt.forEach(function(r){return Ei(r.vars.onRefresh)&&r.vars.onRefresh(r)}),yi=It.isRefreshing=!1,ra("refresh")},Km=0,Wf=1,bu,gs=function(e){if(e===2||!yi&&!rd){It.isUpdating=!0,bu&&bu.update(0);var t=Pt.length,n=oi(),r=n-Fp>=50,a=t&&Pt[0].scroll();if(Wf=Km>a?-1:1,yi||(Km=a),r&&(mr&&!hd&&n-mr>200&&(mr=0,ra("scrollEnd")),hu=Fp,Fp=n),Wf<0){for(xi=t;xi-- >0;)Pt[xi]&&Pt[xi].update(0,r);Wf=1}else for(xi=0;xi<t;xi++)Pt[xi]&&Pt[xi].update(0,r);It.isUpdating=!1}Hu=0},Zm=[Uy,Ny,b_,R_,cr+Ru,cr+wu,cr+Cu,cr+Au,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Xf=Zm.concat([$o,Ko,"boxSizing","max"+yl,"max"+P_,"position",cr,Rn,Rn+Cu,Rn+wu,Rn+Ru,Rn+Au]),J3=function(e,t,n){al(n);var r=e._gsap;if(r.spacerIsNative)al(r.spacerState);else if(e._gsap.swappedIn){var a=t.parentNode;a&&(a.insertBefore(e,t),a.removeChild(t))}e._gsap.swappedIn=!1},zp=function(e,t,n,r){if(!e._gsap.swappedIn){for(var a=Zm.length,u=t.style,c=e.style,d;a--;)d=Zm[a],u[d]=n[d];u.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(u.display="inline-block"),c[b_]=c[R_]="auto",u.flexBasis=n.flexBasis||"auto",u.overflow="visible",u.boxSizing="border-box",u[$o]=sd(e,Mi)+In,u[Ko]=sd(e,Un)+In,u[Rn]=c[cr]=c[Ny]=c[Uy]="0",al(r),c[$o]=c["max"+yl]=n[$o],c[Ko]=c["max"+P_]=n[Ko],c[Rn]=n[Rn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},eb=/([A-Z])/g,al=function(e){if(e){var t=e.t.style,n=e.length,r=0,a,u;for((e.t._gsap||Ye.core.getCache(e.t)).uncache=1;r<n;r+=2)u=e[r+1],a=e[r],u?t[a]=u:t[a]&&t.removeProperty(a.replace(eb,"-$1").toLowerCase())}},bf=function(e){for(var t=Xf.length,n=e.style,r=[],a=0;a<t;a++)r.push(Xf[a],n[Xf[a]]);return r.t=e,r},tb=function(e,t,n){for(var r=[],a=e.length,u=n?8:0,c;u<a;u+=2)c=e[u],r.push(c,c in t?t[c]:e[u+1]);return r.t=e.t,r},jf={left:0,top:0},Ux=function(e,t,n,r,a,u,c,d,h,p,_,g,v,E){Ei(e)&&(e=e(d)),Yi(e)&&e.substr(0,3)==="max"&&(e=g+(e.charAt(4)==="="?Vf("0"+e.substr(3),n):0));var M=v?v.time():0,S,y,L;if(v&&v.seek(0),isNaN(e)||(e=+e),_u(e))v&&(e=Ye.utils.mapRange(v.scrollTrigger.start,v.scrollTrigger.end,0,g,e)),c&&Gf(c,n,r,!0);else{Ei(t)&&(t=t(d));var P=(e||"0").split(" "),w,F,U,D;L=Li(t,d)||an,w=ds(L)||{},(!w||!w.left&&!w.top)&&fr(L).display==="none"&&(D=L.style.display,L.style.display="block",w=ds(L),D?L.style.display=D:L.style.removeProperty("display")),F=Vf(P[0],w[r.d]),U=Vf(P[1]||"0",n),e=w[r.p]-h[r.p]-p+F+a-U,c&&Gf(c,U,r,n-U<20||c._isStart&&U>20),n-=n-U}if(E&&(d[E]=e||-.001,e<0&&(e=0)),u){var O=e+n,C=u._isStart;S="scroll"+r.d2,Gf(u,O,r,C&&O>20||!C&&(_?Math.max(an[S],Rr[S]):u.parentNode[S])<=O+1),_&&(h=ds(c),_&&(u.style[r.op.p]=h[r.op.p]-r.op.m-u._offset+In))}return v&&L&&(S=ds(L),v.seek(g),y=ds(L),v._caScrollDist=S[r.p]-y[r.p],e=e/v._caScrollDist*g),v&&v.seek(M),v?e:Math.round(e)},nb=/(webkit|moz|length|cssText|inset)/i,Nx=function(e,t,n,r){if(e.parentNode!==t){var a=e.style,u,c;if(t===an){e._stOrig=a.cssText,c=fr(e);for(u in c)!+u&&!nb.test(u)&&c[u]&&typeof a[u]=="string"&&u!=="0"&&(a[u]=c[u]);a.top=n,a.left=r}else a.cssText=e._stOrig;Ye.core.getCache(e).uncache=1,t.appendChild(e)}},Hy=function(e,t,n){var r=t,a=r;return function(u){var c=Math.round(e());return c!==r&&c!==a&&Math.abs(c-r)>3&&Math.abs(c-a)>3&&(u=c,n&&n()),a=r,r=u,u}},Pf=function(e,t,n){var r={};r[t.p]="+="+n,Ye.set(e,r)},Fx=function(e,t){var n=lo(e,t),r="_scroll"+t.p2,a=function u(c,d,h,p,_){var g=u.tween,v=d.onComplete,E={};h=h||n();var M=Hy(n,h,function(){g.kill(),u.tween=0});return _=p&&_||0,p=p||c-h,g&&g.kill(),d[r]=c,d.inherit=!1,d.modifiers=E,E[r]=function(){return M(h+p*g.ratio+_*g.ratio*g.ratio)},d.onUpdate=function(){Lt.cache++,u.tween&&gs()},d.onComplete=function(){u.tween=0,v&&v.call(g)},g=u.tween=Ye.to(e,d),g};return e[r]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},Vn(e,"wheel",n.wheelHandler),It.isTouch&&Vn(e,"touchmove",n.wheelHandler),a},It=function(){function o(t,n){Ya||o.register(Ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ym(this),this.init(t,n)}var e=o.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!pu){this.update=this.refresh=this.kill=Or;return}n=bx(Yi(n)||_u(n)||n.nodeType?{trigger:n}:n,Cf);var a=n,u=a.onUpdate,c=a.toggleClass,d=a.id,h=a.onToggle,p=a.onRefresh,_=a.scrub,g=a.trigger,v=a.pin,E=a.pinSpacing,M=a.invalidateOnRefresh,S=a.anticipatePin,y=a.onScrubComplete,L=a.onSnapComplete,P=a.once,w=a.snap,F=a.pinReparent,U=a.pinSpacer,D=a.containerAnimation,O=a.fastScrollEnd,C=a.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Mi:Un,B=!_&&_!==0,Y=Li(n.scroller||Ft),K=Ye.core.getCache(Y),oe=na(Y),ce=("pinType"in n?n.pinType:io(Y,"pinType")||oe&&"fixed")==="fixed",te=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Q=B&&n.toggleActions.split(" "),H="markers"in n?n.markers:Cf.markers,le=oe?0:parseFloat(fr(Y)["border"+T.p2+yl])||0,I=this,k=n.onRefreshInit&&function(){return n.onRefreshInit(I)},re=j3(Y,oe,T),Oe=Y3(Y,oe),Z=0,he=0,ye=0,ge=lo(Y,T),we,Pe,Je,St,gt,tt,G,Xt,dt,J,Ve,wt,Xe,N,R,ne,ve,_e,me,Ie,Ce,Ne,mt,Ee,be,it,rt,Be,yt,st,At,V,De,fe,pe,Le,Ue,ht,Ut;if(I._startClamp=I._endClamp=!1,I._dir=T,S*=45,I.scroller=Y,I.scroll=D?D.time.bind(D):ge,St=ge(),I.vars=n,r=r||n.animation,"refreshPriority"in n&&(Ay=1,n.refreshPriority===-9999&&(bu=I)),K.tweenScroll=K.tweenScroll||{top:Fx(Y,Un),left:Fx(Y,Mi)},I.tweenTo=we=K.tweenScroll[T.p],I.scrubDuration=function(Fe){De=_u(Fe)&&Fe,De?V?V.duration(Fe):V=Ye.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:De,paused:!0,onComplete:function(){return y&&y(I)}}):(V&&V.progress(1).kill(),V=0)},r&&(r.vars.lazy=!1,r._initted&&!I.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),I.animation=r.pause(),r.scrollTrigger=I,I.scrubDuration(_),st=0,d||(d=r.vars.id)),w&&((!Oo(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in an.style&&Ye.set(oe?[an,Rr]:Y,{scrollBehavior:"auto"}),Lt.forEach(function(Fe){return Ei(Fe)&&Fe.target===(oe?hn.scrollingElement||Rr:Y)&&(Fe.smooth=!1)}),Je=Ei(w.snapTo)?w.snapTo:w.snapTo==="labels"?$3(r):w.snapTo==="labelsDirectional"?K3(r):w.directional!==!1?function(Fe,pt){return D_(w.snapTo)(Fe,oi()-he<500?0:pt.direction)}:Ye.utils.snap(w.snapTo),fe=w.duration||{min:.1,max:2},fe=Oo(fe)?Tu(fe.min,fe.max):Tu(fe,fe),pe=Ye.delayedCall(w.delay||De/2||.1,function(){var Fe=ge(),pt=oi()-he<500,Qe=we.tween;if((pt||Math.abs(I.getVelocity())<10)&&!Qe&&!hd&&Z!==Fe){var ot=(Fe-tt)/N,en=r&&!B?r.totalProgress():ot,Mt=pt?0:(en-At)/(oi()-hu)*1e3||0,jt=Ye.utils.clamp(-ot,1-ot,Wa(Mt/2)*Mt/.185),yn=ot+(w.inertia===!1?0:jt),Yt,qt,Ct=w,Kn=Ct.onStart,$t=Ct.onInterrupt,Xn=Ct.onComplete;if(Yt=Je(yn,I),_u(Yt)||(Yt=yn),qt=Math.round(tt+Yt*N),Fe<=G&&Fe>=tt&&qt!==Fe){if(Qe&&!Qe._initted&&Qe.data<=Wa(qt-Fe))return;w.inertia===!1&&(jt=Yt-ot),we(qt,{duration:fe(Wa(Math.max(Wa(yn-en),Wa(Yt-en))*.185/Mt/.05||0)),ease:w.ease||"power3",data:Wa(qt-Fe),onInterrupt:function(){return pe.restart(!0)&&$t&&$t(I)},onComplete:function(){I.update(),Z=ge(),r&&(V?V.resetTo("totalProgress",Yt,r._tTime/r._tDur):r.progress(Yt)),st=At=r&&!B?r.totalProgress():I.progress,L&&L(I),Xn&&Xn(I)}},Fe,jt*N,qt-Fe-jt*N),Kn&&Kn(I,we.tween)}}else I.isActive&&Z!==Fe&&pe.restart(!0)}).pause()),d&&($m[d]=I),g=I.trigger=Li(g||v!==!0&&v),Ut=g&&g._gsap&&g._gsap.stRevert,Ut&&(Ut=Ut(I)),v=v===!0?g:Li(v),Yi(c)&&(c={targets:g,className:c}),v&&(E===!1||E===cr||(E=!E&&v.parentNode&&v.parentNode.style&&fr(v.parentNode).display==="flex"?!1:Rn),I.pin=v,Pe=Ye.core.getCache(v),Pe.spacer?R=Pe.pinState:(U&&(U=Li(U),U&&!U.nodeType&&(U=U.current||U.nativeElement),Pe.spacerIsNative=!!U,U&&(Pe.spacerState=bf(U))),Pe.spacer=_e=U||hn.createElement("div"),_e.classList.add("pin-spacer"),d&&_e.classList.add("pin-spacer-"+d),Pe.pinState=R=bf(v)),n.force3D!==!1&&Ye.set(v,{force3D:!0}),I.spacer=_e=Pe.spacer,yt=fr(v),Ee=yt[E+T.os2],Ie=Ye.getProperty(v),Ce=Ye.quickSetter(v,T.a,In),zp(v,_e,yt),ve=bf(v)),H){wt=Oo(H)?bx(H,Px):Px,J=Rf("scroller-start",d,Y,T,wt,0),Ve=Rf("scroller-end",d,Y,T,wt,0,J),me=J["offset"+T.op.d2];var rn=Li(io(Y,"content")||Y);Xt=this.markerStart=Rf("start",d,rn,T,wt,me,0,D),dt=this.markerEnd=Rf("end",d,rn,T,wt,me,0,D),D&&(ht=Ye.quickSetter([Xt,dt],T.a,In)),!ce&&!(jr.length&&io(Y,"fixedMarkers")===!0)&&(q3(oe?an:Y),Ye.set([J,Ve],{force3D:!0}),it=Ye.quickSetter(J,T.a,In),Be=Ye.quickSetter(Ve,T.a,In))}if(D){var ke=D.vars.onUpdate,qe=D.vars.onUpdateParams;D.eventCallback("onUpdate",function(){I.update(0,0,1),ke&&ke.apply(D,qe||[])})}if(I.previous=function(){return Pt[Pt.indexOf(I)-1]},I.next=function(){return Pt[Pt.indexOf(I)+1]},I.revert=function(Fe,pt){if(!pt)return I.kill(!0);var Qe=Fe!==!1||!I.enabled,ot=si;Qe!==I.isReverted&&(Qe&&(Le=Math.max(ge(),I.scroll.rec||0),ye=I.progress,Ue=r&&r.progress()),Xt&&[Xt,dt,J,Ve].forEach(function(en){return en.style.display=Qe?"none":"block"}),Qe&&(si=I,I.update(Qe)),v&&(!F||!I.isActive)&&(Qe?J3(v,_e,R):zp(v,_e,fr(v),be)),Qe||I.update(Qe),si=ot,I.isReverted=Qe)},I.refresh=function(Fe,pt,Qe,ot){if(!((si||!I.enabled)&&!pt)){if(v&&Fe&&mr){Vn(o,"scrollEnd",Oy);return}!yi&&k&&k(I),si=I,we.tween&&!Qe&&(we.tween.kill(),we.tween=0),V&&V.pause(),M&&r&&r.revert({kill:!1}).invalidate(),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var en=re(),Mt=Oe(),jt=D?D.duration():Gr(Y,T),yn=N<=.01,Yt=0,qt=ot||0,Ct=Oo(Qe)?Qe.end:n.end,Kn=n.endTrigger||g,$t=Oo(Qe)?Qe.start:n.start||(n.start===0||!g?0:v?"0 0":"0 100%"),Xn=I.pinnedContainer=n.pinnedContainer&&Li(n.pinnedContainer,I),ci=g&&Math.max(0,Pt.indexOf(I))||0,_n=ci,b,j,se,ae,W,xe,Re,He,We,at,nt,Ke,_t;for(H&&Oo(Qe)&&(Ke=Ye.getProperty(J,T.p),_t=Ye.getProperty(Ve,T.p));_n--;)xe=Pt[_n],xe.end||xe.refresh(0,1)||(si=I),Re=xe.pin,Re&&(Re===g||Re===v||Re===Xn)&&!xe.isReverted&&(at||(at=[]),at.unshift(xe),xe.revert(!0,!0)),xe!==Pt[_n]&&(ci--,_n--);for(Ei($t)&&($t=$t(I)),$t=wx($t,"start",I),tt=Ux($t,g,en,T,ge(),Xt,J,I,Mt,le,ce,jt,D,I._startClamp&&"_startClamp")||(v?-.001:0),Ei(Ct)&&(Ct=Ct(I)),Yi(Ct)&&!Ct.indexOf("+=")&&(~Ct.indexOf(" ")?Ct=(Yi($t)?$t.split(" ")[0]:"")+Ct:(Yt=Vf(Ct.substr(2),en),Ct=Yi($t)?$t:(D?Ye.utils.mapRange(0,D.duration(),D.scrollTrigger.start,D.scrollTrigger.end,tt):tt)+Yt,Kn=g)),Ct=wx(Ct,"end",I),G=Math.max(tt,Ux(Ct||(Kn?"100% 0":jt),Kn,en,T,ge()+Yt,dt,Ve,I,Mt,le,ce,jt,D,I._endClamp&&"_endClamp"))||-.001,Yt=0,_n=ci;_n--;)xe=Pt[_n],Re=xe.pin,Re&&xe.start-xe._pinPush<=tt&&!D&&xe.end>0&&(b=xe.end-(I._startClamp?Math.max(0,xe.start):xe.start),(Re===g&&xe.start-xe._pinPush<tt||Re===Xn)&&isNaN($t)&&(Yt+=b*(1-xe.progress)),Re===v&&(qt+=b));if(tt+=Yt,G+=Yt,I._startClamp&&(I._startClamp+=Yt),I._endClamp&&!yi&&(I._endClamp=G||-.001,G=Math.min(G,Gr(Y,T))),N=G-tt||(tt-=.01)&&.001,yn&&(ye=Ye.utils.clamp(0,1,Ye.utils.normalize(tt,G,Le))),I._pinPush=qt,Xt&&Yt&&(b={},b[T.a]="+="+Yt,Xn&&(b[T.p]="-="+ge()),Ye.set([Xt,dt],b)),v&&!(qm&&I.end>=Gr(Y,T)))b=fr(v),ae=T===Un,se=ge(),Ne=parseFloat(Ie(T.a))+qt,!jt&&G>1&&(nt=(oe?hn.scrollingElement||Rr:Y).style,nt={style:nt,value:nt["overflow"+T.a.toUpperCase()]},oe&&fr(an)["overflow"+T.a.toUpperCase()]!=="scroll"&&(nt.style["overflow"+T.a.toUpperCase()]="scroll")),zp(v,_e,b),ve=bf(v),j=ds(v,!0),He=ce&&lo(Y,ae?Mi:Un)(),E?(be=[E+T.os2,N+qt+In],be.t=_e,_n=E===Rn?sd(v,T)+N+qt:0,_n&&(be.push(T.d,_n+In),_e.style.flexBasis!=="auto"&&(_e.style.flexBasis=_n+In)),al(be),Xn&&Pt.forEach(function(Rt){Rt.pin===Xn&&Rt.vars.pinSpacing!==!1&&(Rt._subPinOffset=!0)}),ce&&ge(Le)):(_n=sd(v,T),_n&&_e.style.flexBasis!=="auto"&&(_e.style.flexBasis=_n+In)),ce&&(W={top:j.top+(ae?se-tt:He)+In,left:j.left+(ae?He:se-tt)+In,boxSizing:"border-box",position:"fixed"},W[$o]=W["max"+yl]=Math.ceil(j.width)+In,W[Ko]=W["max"+P_]=Math.ceil(j.height)+In,W[cr]=W[cr+Cu]=W[cr+wu]=W[cr+Ru]=W[cr+Au]="0",W[Rn]=b[Rn],W[Rn+Cu]=b[Rn+Cu],W[Rn+wu]=b[Rn+wu],W[Rn+Ru]=b[Rn+Ru],W[Rn+Au]=b[Rn+Au],ne=tb(R,W,F),yi&&ge(0)),r?(We=r._initted,Up(1),r.render(r.duration(),!0,!0),mt=Ie(T.a)-Ne+N+qt,rt=Math.abs(N-mt)>1,ce&&rt&&ne.splice(ne.length-2,2),r.render(0,!0,!0),We||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Up(0)):mt=N,nt&&(nt.value?nt.style["overflow"+T.a.toUpperCase()]=nt.value:nt.style.removeProperty("overflow-"+T.a));else if(g&&ge()&&!D)for(j=g.parentNode;j&&j!==an;)j._pinOffset&&(tt-=j._pinOffset,G-=j._pinOffset),j=j.parentNode;at&&at.forEach(function(Rt){return Rt.revert(!1,!0)}),I.start=tt,I.end=G,St=gt=yi?Le:ge(),!D&&!yi&&(St<Le&&ge(Le),I.scroll.rec=0),I.revert(!1,!0),he=oi(),pe&&(Z=-1,pe.restart(!0)),si=0,r&&B&&(r._initted||Ue)&&r.progress()!==Ue&&r.progress(Ue||0,!0).render(r.time(),!0,!0),(yn||ye!==I.progress||D||M)&&(r&&!B&&r.totalProgress(D&&tt<-.001&&!ye?Ye.utils.normalize(tt,G,0):ye,!0),I.progress=yn||(St-tt)/N===ye?0:ye),v&&E&&(_e._pinOffset=Math.round(I.progress*mt)),V&&V.invalidate(),isNaN(Ke)||(Ke-=Ye.getProperty(J,T.p),_t-=Ye.getProperty(Ve,T.p),Pf(J,T,Ke),Pf(Xt,T,Ke-(ot||0)),Pf(Ve,T,_t),Pf(dt,T,_t-(ot||0))),yn&&!yi&&I.update(),p&&!yi&&!Xe&&(Xe=!0,p(I),Xe=!1)}},I.getVelocity=function(){return(ge()-gt)/(oi()-hu)*1e3||0},I.endAnimation=function(){uu(I.callbackAnimation),r&&(V?V.progress(1):r.paused()?B||uu(r,I.direction<0,1):uu(r,r.reversed()))},I.labelToScroll=function(Fe){return r&&r.labels&&(tt||I.refresh()||tt)+r.labels[Fe]/r.duration()*N||0},I.getTrailing=function(Fe){var pt=Pt.indexOf(I),Qe=I.direction>0?Pt.slice(0,pt).reverse():Pt.slice(pt+1);return(Yi(Fe)?Qe.filter(function(ot){return ot.vars.preventOverlaps===Fe}):Qe).filter(function(ot){return I.direction>0?ot.end<=tt:ot.start>=G})},I.update=function(Fe,pt,Qe){if(!(D&&!Qe&&!Fe)){var ot=yi===!0?Le:I.scroll(),en=Fe?0:(ot-tt)/N,Mt=en<0?0:en>1?1:en||0,jt=I.progress,yn,Yt,qt,Ct,Kn,$t,Xn,ci;if(pt&&(gt=St,St=D?ge():ot,w&&(At=st,st=r&&!B?r.totalProgress():Mt)),S&&v&&!si&&!Ef&&mr&&(!Mt&&tt<ot+(ot-gt)/(oi()-hu)*S?Mt=1e-4:Mt===1&&G>ot+(ot-gt)/(oi()-hu)*S&&(Mt=.9999)),Mt!==jt&&I.enabled){if(yn=I.isActive=!!Mt&&Mt<1,Yt=!!jt&&jt<1,$t=yn!==Yt,Kn=$t||!!Mt!=!!jt,I.direction=Mt>jt?1:-1,I.progress=Mt,Kn&&!si&&(qt=Mt&&!jt?0:Mt===1?1:jt===1?2:3,B&&(Ct=!$t&&Q[qt+1]!=="none"&&Q[qt+1]||Q[qt],ci=r&&(Ct==="complete"||Ct==="reset"||Ct in r))),C&&($t||ci)&&(ci||_||!r)&&(Ei(C)?C(I):I.getTrailing(C).forEach(function(se){return se.endAnimation()})),B||(V&&!si&&!Ef?(V._dp._time-V._start!==V._time&&V.render(V._dp._time-V._start),V.resetTo?V.resetTo("totalProgress",Mt,r._tTime/r._tDur):(V.vars.totalProgress=Mt,V.invalidate().restart())):r&&r.totalProgress(Mt,!!(si&&(he||Fe)))),v){if(Fe&&E&&(_e.style[E+T.os2]=Ee),!ce)Ce(mu(Ne+mt*Mt));else if(Kn){if(Xn=!Fe&&Mt>jt&&G+1>ot&&ot+1>=Gr(Y,T),F)if(!Fe&&(yn||Xn)){var _n=ds(v,!0),b=ot-tt;Nx(v,an,_n.top+(T===Un?b:0)+In,_n.left+(T===Un?0:b)+In)}else Nx(v,_e);al(yn||Xn?ne:ve),rt&&Mt<1&&yn||Ce(Ne+(Mt===1&&!Xn?mt:0))}}w&&!we.tween&&!si&&!Ef&&pe.restart(!0),c&&($t||P&&Mt&&(Mt<1||!Np))&&Bu(c.targets).forEach(function(se){return se.classList[yn||P?"add":"remove"](c.className)}),u&&!B&&!Fe&&u(I),Kn&&!si?(B&&(ci&&(Ct==="complete"?r.pause().totalProgress(1):Ct==="reset"?r.restart(!0).pause():Ct==="restart"?r.restart(!0):r[Ct]()),u&&u(I)),($t||!Np)&&(h&&$t&&Op(I,h),te[qt]&&Op(I,te[qt]),P&&(Mt===1?I.kill(!1,1):te[qt]=0),$t||(qt=Mt===1?1:3,te[qt]&&Op(I,te[qt]))),O&&!yn&&Math.abs(I.getVelocity())>(_u(O)?O:2500)&&(uu(I.callbackAnimation),V?V.progress(1):uu(r,Ct==="reverse"?1:!Mt,1))):B&&u&&!si&&u(I)}if(Be){var j=D?ot/D.duration()*(D._caScrollDist||0):ot;it(j+(J._isFlipped?1:0)),Be(j)}ht&&ht(-ot/D.duration()*(D._caScrollDist||0))}},I.enable=function(Fe,pt){I.enabled||(I.enabled=!0,Vn(Y,"resize",gu),oe||Vn(Y,"scroll",Xa),k&&Vn(o,"refreshInit",k),Fe!==!1&&(I.progress=ye=0,St=gt=Z=ge()),pt!==!1&&I.refresh())},I.getTween=function(Fe){return Fe&&we?we.tween:V},I.setPositions=function(Fe,pt,Qe,ot){if(D){var en=D.scrollTrigger,Mt=D.duration(),jt=en.end-en.start;Fe=en.start+jt*Fe/Mt,pt=en.start+jt*pt/Mt}I.refresh(!1,!1,{start:Ax(Fe,Qe&&!!I._startClamp),end:Ax(pt,Qe&&!!I._endClamp)},ot),I.update()},I.adjustPinSpacing=function(Fe){if(be&&Fe){var pt=be.indexOf(T.d)+1;be[pt]=parseFloat(be[pt])+Fe+In,be[1]=parseFloat(be[1])+Fe+In,al(be)}},I.disable=function(Fe,pt){if(I.enabled&&(Fe!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,pt||V&&V.pause(),Le=0,Pe&&(Pe.uncache=1),k&&Hn(o,"refreshInit",k),pe&&(pe.pause(),we.tween&&we.tween.kill()&&(we.tween=0)),!oe)){for(var Qe=Pt.length;Qe--;)if(Pt[Qe].scroller===Y&&Pt[Qe]!==I)return;Hn(Y,"resize",gu),oe||Hn(Y,"scroll",Xa)}},I.kill=function(Fe,pt){I.disable(Fe,pt),V&&!pt&&V.kill(),d&&delete $m[d];var Qe=Pt.indexOf(I);Qe>=0&&Pt.splice(Qe,1),Qe===xi&&Wf>0&&xi--,Qe=0,Pt.forEach(function(ot){return ot.scroller===I.scroller&&(Qe=1)}),Qe||yi||(I.scroll.rec=0),r&&(r.scrollTrigger=null,Fe&&r.revert({kill:!1}),pt||r.kill()),Xt&&[Xt,dt,J,Ve].forEach(function(ot){return ot.parentNode&&ot.parentNode.removeChild(ot)}),bu===I&&(bu=0),v&&(Pe&&(Pe.uncache=1),Qe=0,Pt.forEach(function(ot){return ot.pin===v&&Qe++}),Qe||(Pe.spacer=0)),n.onKill&&n.onKill(I)},Pt.push(I),I.enable(!1,!1),Ut&&Ut(I),r&&r.add&&!N){var vt=I.update;I.update=function(){I.update=vt,tt||G||I.refresh()},Ye.delayedCall(.01,I.update),N=.01,tt=G=0}else I.refresh();v&&Q3()},o.register=function(n){return Ya||(Ye=n||Dy(),Py()&&window.document&&o.enable(),Ya=pu),Ya},o.defaults=function(n){if(n)for(var r in n)Cf[r]=n[r];return Cf},o.disable=function(n,r){pu=0,Pt.forEach(function(u){return u[r?"kill":"disable"](n)}),Hn(Ft,"wheel",Xa),Hn(hn,"scroll",Xa),clearInterval(Mf),Hn(hn,"touchcancel",Or),Hn(an,"touchstart",Or),wf(Hn,hn,"pointerdown,touchstart,mousedown",Cx),wf(Hn,hn,"pointerup,touchend,mouseup",Rx),id.kill(),Tf(Hn);for(var a=0;a<Lt.length;a+=3)Af(Hn,Lt[a],Lt[a+1]),Af(Hn,Lt[a],Lt[a+2])},o.enable=function(){if(Ft=window,hn=document,Rr=hn.documentElement,an=hn.body,Ye&&(Bu=Ye.utils.toArray,Tu=Ye.utils.clamp,Ym=Ye.core.context||Or,Up=Ye.core.suppressOverwrites||Or,A_=Ft.history.scrollRestoration||"auto",Km=Ft.pageYOffset,Ye.core.globals("ScrollTrigger",o),an)){pu=1,ol=document.createElement("div"),ol.style.height="100vh",ol.style.position="absolute",By(),X3(),wn.register(Ye),o.isTouch=wn.isTouch,js=wn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),jm=wn.isTouch===1,Vn(Ft,"wheel",Xa),wy=[Ft,hn,Rr,an],Ye.matchMedia?(o.matchMedia=function(d){var h=Ye.matchMedia(),p;for(p in d)h.add(p,d[p]);return h},Ye.addEventListener("matchMediaInit",function(){return L_()}),Ye.addEventListener("matchMediaRevert",function(){return ky()}),Ye.addEventListener("matchMedia",function(){Go(0,1),ra("matchMedia")}),Ye.matchMedia("(orientation: portrait)",function(){return kp(),kp})):console.warn("Requires GSAP 3.11.0 or later"),kp(),Vn(hn,"scroll",Xa);var n=an.style,r=n.borderTopStyle,a=Ye.core.Animation.prototype,u,c;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",u=ds(an),Un.m=Math.round(u.top+Un.sc())||0,Mi.m=Math.round(u.left+Mi.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),Mf=setInterval(Dx,250),Ye.delayedCall(.5,function(){return Ef=0}),Vn(hn,"touchcancel",Or),Vn(an,"touchstart",Or),wf(Vn,hn,"pointerdown,touchstart,mousedown",Cx),wf(Vn,hn,"pointerup,touchend,mouseup",Rx),Xm=Ye.utils.checkPrefix("transform"),Xf.push(Xm),Ya=oi(),id=Ye.delayedCall(.2,Go).pause(),qa=[hn,"visibilitychange",function(){var d=Ft.innerWidth,h=Ft.innerHeight;hn.hidden?(Ex=d,Tx=h):(Ex!==d||Tx!==h)&&gu()},hn,"DOMContentLoaded",Go,Ft,"load",Go,Ft,"resize",gu],Tf(Vn),Pt.forEach(function(d){return d.enable(0,1)}),c=0;c<Lt.length;c+=3)Af(Hn,Lt[c],Lt[c+1]),Af(Hn,Lt[c],Lt[c+2])}},o.config=function(n){"limitCallbacks"in n&&(Np=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Mf)||(Mf=r)&&setInterval(Dx,r),"ignoreMobileResize"in n&&(jm=o.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Tf(Hn)||Tf(Vn,n.autoRefreshEvents||"none"),Cy=(n.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(n,r){var a=Li(n),u=Lt.indexOf(a),c=na(a);~u&&Lt.splice(u,c?6:2),r&&(c?jr.unshift(Ft,r,an,r,Rr,r):jr.unshift(a,r))},o.clearMatchMedia=function(n){Pt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},o.isInViewport=function(n,r,a){var u=(Yi(n)?Li(n):n).getBoundingClientRect(),c=u[a?$o:Ko]*r||0;return a?u.right-c>0&&u.left+c<Ft.innerWidth:u.bottom-c>0&&u.top+c<Ft.innerHeight},o.positionInViewport=function(n,r,a){Yi(n)&&(n=Li(n));var u=n.getBoundingClientRect(),c=u[a?$o:Ko],d=r==null?c/2:r in od?od[r]*c:~r.indexOf("%")?parseFloat(r)*c/100:parseFloat(r)||0;return a?(u.left+d)/Ft.innerWidth:(u.top+d)/Ft.innerHeight},o.killAll=function(n){if(Pt.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),n!==!0){var r=ia.killAll||[];ia={},r.forEach(function(a){return a()})}},o}();It.version="3.12.5";It.saveStyles=function(o){return o?Bu(o).forEach(function(e){if(e&&e.style){var t=ji.indexOf(e);t>=0&&ji.splice(t,5),ji.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ye.core.getCache(e),Ym())}}):ji};It.revert=function(o,e){return L_(!o,e)};It.create=function(o,e){return new It(o,e)};It.refresh=function(o){return o?gu():(Ya||It.register())&&Go(!0)};It.update=function(o){return++Lt.cache&&gs(o===!0?2:0)};It.clearScrollMemory=zy;It.maxScroll=function(o,e){return Gr(o,e?Mi:Un)};It.getScrollFunc=function(o,e){return lo(Li(o),e?Mi:Un)};It.getById=function(o){return $m[o]};It.getAll=function(){return Pt.filter(function(o){return o.vars.id!=="ScrollSmoother"})};It.isScrolling=function(){return!!mr};It.snapDirectional=D_;It.addEventListener=function(o,e){var t=ia[o]||(ia[o]=[]);~t.indexOf(e)||t.push(e)};It.removeEventListener=function(o,e){var t=ia[o],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};It.batch=function(o,e){var t=[],n={},r=e.interval||.016,a=e.batchMax||1e9,u=function(h,p){var _=[],g=[],v=Ye.delayedCall(r,function(){p(_,g),_=[],g=[]}).pause();return function(E){_.length||v.restart(!0),_.push(E.trigger),g.push(E),a<=_.length&&v.progress(1)}},c;for(c in e)n[c]=c.substr(0,2)==="on"&&Ei(e[c])&&c!=="onRefreshInit"?u(c,e[c]):e[c];return Ei(a)&&(a=a(),Vn(It,"refresh",function(){return a=e.batchMax()})),Bu(o).forEach(function(d){var h={};for(c in n)h[c]=n[c];h.trigger=d,t.push(It.create(h))}),t};var Ox=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Bp=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(wn.isTouch?" pinch-zoom":""):"none",e===Rr&&o(an,t)},Df={auto:1,scroll:1},ib=function(e){var t=e.event,n=e.target,r=e.axis,a=(t.changedTouches?t.changedTouches[0]:t).target,u=a._gsap||Ye.core.getCache(a),c=oi(),d;if(!u._isScrollT||c-u._isScrollT>2e3){for(;a&&a!==an&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(Df[(d=fr(a)).overflowY]||Df[d.overflowX]));)a=a.parentNode;u._isScroll=a&&a!==n&&!na(a)&&(Df[(d=fr(a)).overflowY]||Df[d.overflowX]),u._isScrollT=c}(u._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Vy=function(e,t,n,r){return wn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&ib,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Vn(hn,wn.eventTypes[0],zx,!1,!0)},onDisable:function(){return Hn(hn,wn.eventTypes[0],zx,!0)}})},rb=/(input|label|select|textarea)/i,kx,zx=function(e){var t=rb.test(e.target.tagName);(t||kx)&&(e._gsapAllow=!0,kx=t)},sb=function(e){Oo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,a=t.allowNestedScroll,u=t.onRelease,c,d,h=Li(e.target)||Rr,p=Ye.core.globals().ScrollSmoother,_=p&&p.get(),g=js&&(e.content&&Li(e.content)||_&&e.content!==!1&&!_.smooth()&&_.content()),v=lo(h,Un),E=lo(h,Mi),M=1,S=(wn.isTouch&&Ft.visualViewport?Ft.visualViewport.scale*Ft.visualViewport.width:Ft.outerWidth)/Ft.innerWidth,y=0,L=Ei(r)?function(){return r(c)}:function(){return r||2.8},P,w,F=Vy(h,e.type,!0,a),U=function(){return w=!1},D=Or,O=Or,C=function(){d=Gr(h,Un),O=Tu(js?1:0,d),n&&(D=Tu(0,Gr(h,Mi))),P=Zo},T=function(){g._gsap.y=mu(parseFloat(g._gsap.y)+v.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",v.offset=v.cacheID=0},B=function(){if(w){requestAnimationFrame(U);var H=mu(c.deltaY/2),le=O(v.v-H);if(g&&le!==v.v+v.offset){v.offset=le-v.v;var I=mu((parseFloat(g&&g._gsap.y)||0)-v.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",g._gsap.y=I+"px",v.cacheID=Lt.cache,gs()}return!0}v.offset&&T(),w=!0},Y,K,oe,ce,te=function(){C(),Y.isActive()&&Y.vars.scrollY>d&&(v()>d?Y.progress(1)&&v(d):Y.resetTo("scrollY",d))};return g&&Ye.set(g,{y:"+=0"}),e.ignoreCheck=function(Q){return js&&Q.type==="touchmove"&&B()||M>1.05&&Q.type!=="touchstart"||c.isGesturing||Q.touches&&Q.touches.length>1},e.onPress=function(){w=!1;var Q=M;M=mu((Ft.visualViewport&&Ft.visualViewport.scale||1)/S),Y.pause(),Q!==M&&Bp(h,M>1.01?!0:n?!1:"x"),K=E(),oe=v(),C(),P=Zo},e.onRelease=e.onGestureStart=function(Q,H){if(v.offset&&T(),!H)ce.restart(!0);else{Lt.cache++;var le=L(),I,k;n&&(I=E(),k=I+le*.05*-Q.velocityX/.227,le*=Ox(E,I,k,Gr(h,Mi)),Y.vars.scrollX=D(k)),I=v(),k=I+le*.05*-Q.velocityY/.227,le*=Ox(v,I,k,Gr(h,Un)),Y.vars.scrollY=O(k),Y.invalidate().duration(le).play(.01),(js&&Y.vars.scrollY>=d||I>=d-1)&&Ye.to({},{onUpdate:te,duration:le})}u&&u(Q)},e.onWheel=function(){Y._ts&&Y.pause(),oi()-y>1e3&&(P=0,y=oi())},e.onChange=function(Q,H,le,I,k){if(Zo!==P&&C(),H&&n&&E(D(I[2]===H?K+(Q.startX-Q.x):E()+H-I[1])),le){v.offset&&T();var re=k[2]===le,Oe=re?oe+Q.startY-Q.y:v()+le-k[1],Z=O(Oe);re&&Oe!==Z&&(oe+=Z-Oe),v(Z)}(le||H)&&gs()},e.onEnable=function(){Bp(h,n?!1:"x"),It.addEventListener("refresh",te),Vn(Ft,"resize",te),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=E.smooth=!1),F.enable()},e.onDisable=function(){Bp(h,!0),Hn(Ft,"resize",te),It.removeEventListener("refresh",te),F.kill()},e.lockAxis=e.lockAxis!==!1,c=new wn(e),c.iOS=js,js&&!v()&&v(1),js&&Ye.ticker.add(Or),ce=c._dc,Y=Ye.to(c,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Hy(v,v(),function(){return Y.pause()})},onUpdate:gs,onComplete:ce.vars.onComplete}),c};It.sort=function(o){return Pt.sort(o||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};It.observe=function(o){return new wn(o)};It.normalizeScroll=function(o){if(typeof o>"u")return vi;if(o===!0&&vi)return vi.enable();if(o===!1){vi&&vi.kill(),vi=o;return}var e=o instanceof wn?o:sb(o);return vi&&vi.target===e.target&&vi.kill(),na(e.target)&&(vi=e),e};It.core={_getVelocityProp:Wm,_inputObserver:Vy,_scrollers:Lt,_proxies:jr,bridge:{ss:function(){mr||ra("scrollStart"),mr=oi()},ref:function(){return si}}};Dy()&&Ye.registerPlugin(It);const ob=()=>{const o=[[window.innerWidth*.015,window.innerHeight*-.013,Math.floor(Math.random()*6.3)],[window.innerWidth*-.005,window.innerHeight*-.01,Math.floor(Math.random()*6.3)],[window.innerWidth*-.013,window.innerHeight*-.014,Math.floor(Math.random()*6.3)],[window.innerWidth*-.011,window.innerHeight*-.005,Math.floor(Math.random()*6.3)],[window.innerWidth*-.012,window.innerHeight*.009,Math.floor(Math.random()*6.3)],[window.innerWidth*-.008,window.innerHeight*.015,Math.floor(Math.random()*6.3)],[window.innerWidth*.01,window.innerHeight*.01,Math.floor(Math.random()*6.3)],[window.innerWidth*-.001,window.innerHeight*.005,Math.floor(Math.random()*6.3)],[window.innerWidth*.012,window.innerHeight*-.001,Math.floor(Math.random()*6.3)],[window.innerWidth*.01,window.innerHeight*-.011,Math.floor(Math.random()*6.3)],[window.innerWidth*.003,window.innerHeight*-.016,Math.floor(Math.random()*6.3)],[window.innerWidth*.005,window.innerHeight*-0,Math.floor(Math.random()*6.3)]],e=[cT,fT,dT,hT,pT,mT,_T,gT,vT,xT,yT,ST];pr.useEffect(()=>{const n=new Xw;n.background=null;const r=new e2;e.map(E=>{const M=r.load(E);return M.wrapS=Ou,M.wrapT=Ou,M.repeat.set(1,1),M.encoding=void 0,M.anisotropy=16,M});const a=new Ml(Math.round(window.innerWidth/500),Math.round(window.innerWidth/500),Math.round(window.innerWidth/500)),c=e.map(E=>new qw({map:r.load(E),roughness:0,opacity:.6,transparent:!0})).map(E=>new Vr(a,E));for(let E=0;E<o.length;E++)c[E].position.x=o[E][0],c[E].position.y=o[E][1],c[E].rotateX(o[E][2]);n.add(c[0]),n.add(c[1]),n.add(c[2]),n.add(c[3]),n.add(c[4]),n.add(c[5]),n.add(c[6]),n.add(c[7]),n.add(c[8]),n.add(c[9]),n.add(c[10]),n.add(c[11]);const d=new i2(15201014,100,100);d.position.set(0,10,10),d.intensity=4,n.add(d);const h={width:Gu,height:CT},p=new ur(50,window.innerWidth/window.innerHeight,.1,1e3);p.position.z=40,n.add(p);var _=document.getElementById("webgl");const g=new H3({canvas:_,alpha:!0});g.setPixelRatio(window.devicePixelRatio),g.setSize(h.width,h.height),g.render(n,p),window.addEventListener("resize",()=>{p.updateProjectionMatrix(),p.aspect=window.innerWidth/window.innerHeight,g.setSize(window.innerWidth,window.innerHeight)});const v=()=>{requestAnimationFrame(v);for(let E=0;E<o.length;E++)c[E].rotation.x+=5e-4,c[E].rotation.y+=5e-4;g.render(n,p)};return v(),c.forEach((E,M)=>{ft.fromTo(E.position,{y:o[M][1],duration:6,ease:"sine.inOut",yoyo:!0},{y:o[M][1]+.8,duration:6,ease:"sine.inOut",yoyo:!0,delay:Math.floor(Math.random()*8),repeat:-1})}),()=>{g.dispose()}},[]);const t=pr.useRef();return ft.registerPlugin(It),pr.useEffect(()=>{t.current.querySelectorAll("h1").forEach((r,a)=>{ft.fromTo(r,{opacity:0},{opacity:1,delay:a*.2,scrollTrigger:{trigger:"#touched_on",start:"top center",end:"bottom center",toggleActions:"play none none none"}})}),ft.to("#webgl",{opacity:1,delay:.3,ease:"linear",duration:.8,scrollTrigger:{trigger:"#touched_on",start:"top center",end:"bottom center",toggleActions:"play none none none"}})},[]),$.jsx("div",{style:{marginTop:"15vw"},children:$.jsxs("div",{style:{position:"relative"},children:[$.jsxs("div",{className:"webgl_text",ref:t,children:[$.jsx("h1",{id:"touched_on",style:{color:"#38a9d6"},children:"Touched on"}),$.jsx("h1",{style:{color:"#55a9dc",padding:"0.2vw",paddingLeft:"3vw"},children:"Python"}),$.jsx("h1",{style:{color:"#6da9e0",padding:"0.2vw",paddingLeft:"3vw"},children:"C"}),$.jsx("h1",{style:{color:"#83a9e2",padding:"0.2vw",paddingLeft:"3vw"},children:"HTML & CSS"}),$.jsx("h1",{style:{color:"#97a8e2",padding:"0.2vw",paddingLeft:"3vw"},children:"Java"}),$.jsx("h1",{style:{color:"#a7a7e0",padding:"0.2vw",paddingLeft:"3vw"},children:"Junit"}),$.jsx("h1",{style:{color:"#b6a7de",padding:"0.2vw",paddingLeft:"3vw"},children:"Javascript"}),$.jsx("h1",{style:{color:"#c3a7da",padding:"0.2vw",paddingLeft:"3vw"},children:"ASM"}),$.jsx("h1",{style:{color:"#d0a8d5",padding:"0.2vw",paddingLeft:"3vw"},children:"React"}),$.jsx("h1",{style:{color:"#daa9cf",padding:"0.2vw",paddingLeft:"3vw"},children:"Android Studio"}),$.jsx("h1",{style:{color:"#e2aaca",padding:"0.2vw",paddingLeft:"3vw"},children:"SQL"}),$.jsx("h1",{style:{color:"#e9adc4",padding:"0.2vw",paddingLeft:"3vw"},children:"Figma"}),$.jsx("h1",{style:{color:"#fcd0e1",padding:"0.2vw"},children:"With a focus on frontend"})]}),$.jsx("canvas",{id:"webgl"})]})})},ab=()=>{pr.useEffect(()=>{ft.to("#project_img_border",{height:"100%",duration:3,ease:"back.out",delay:1,opacity:1,onComplete:()=>{ft.to("#project_img_border",{scaleY:"1.13",duration:11,ease:"sine.inOut",yoyo:!0,repeat:-1}),ft.to("#project_img_border",{scaleY:"1.18",duration:11,ease:"sine.inOut",yoyo:!0,repeat:-1})}}),ft.to("#linear_gradient_project",{height:"100%",duration:3,ease:"back.out",delay:1,opacity:1,onComplete:()=>{ft.to("#linear_gradient_project",{scale:"1.13",duration:8,ease:"sine.inOut",yoyo:!0,repeat:-1}),ft.to("#linear_gradient_project",{scale:"1.2",duration:8,ease:"sine.inOut",yoyo:!0,repeat:-1})}}),Gu>760?ft.to("#project_headerCard_container",{left:"80px",duration:3,ease:"back.out",delay:1}):ft.to("#project_headerCard_container",{left:"9%",duration:2,ease:"ease"})},[]),pr.useEffect(()=>{const t=()=>{window.innerWidth>760?ft.to("#project_headerCard_container",{left:"80px",duration:3,ease:"ease"}):ft.to("#project_headerCard_container",{left:"9%",duration:2,ease:"ease"})};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const o=()=>{ft.to("#linear_gradient_project",{opacity:.5})},e=()=>{ft.to("#linear_gradient_project",{opacity:1})};return $.jsxs("div",{id:"Projects",style:{marginTop:"30vw"},children:[$.jsxs("div",{style:{position:"relative"},children:[$.jsx("div",{id:"project_img_border"}),$.jsx("div",{id:"linear_gradient_project",onMouseEnter:o,onMouseLeave:e}),$.jsx("img",{id:"project_img",src:ET,alt:"RenewWool"}),$.jsx("svg",{className:"svg",children:$.jsx("clipPath",{id:"clip_project",clipPathUnits:"objectBoundingBox",children:$.jsx("path",{d:"M0.19,0.432 C0.109,0.541,0.117,0.406,0,0.451 V1 C0.074,0.956,0.223,1,0.316,0.92 C0.432,0.815,0.471,0.931,0.484,0.953 C0.511,0.983,0.608,0.948,0.679,0.973 C0.768,1,0.743,0.939,0.82,0.953 C0.882,0.964,0.966,0.866,1,0.815 V0.069 C0.967,0.033,0.874,-0.009,0.768,0.111 C0.636,0.26,0.665,-0.007,0.573,0.001 C0.48,0.01,0.495,0.486,0.432,0.385 C0.369,0.285,0.272,0.323,0.19,0.432"})})}),$.jsx("div",{id:"project_headerCard_container",children:$.jsxs("h1",{children:["Notable Projects ",$.jsx("p",{children:" with Various Frameworks and Languages"})]})})]}),$.jsxs("div",{className:"grid_container",children:[$.jsxs("div",{className:"a_project",children:[$.jsx("img",{style:{borderRadius:"20px",width:"100%",height:"420px",objectFit:"cover",objectPosition:"top"},src:MT,alt:"University of Alberta"}),$.jsx("h2",{style:{paddingInline:"8px",paddingTop:"18px"},children:"ReneWool"}),$.jsx("p",{style:{paddingInline:"8px",minHeight:"130px"},children:"A project involving multiple disciplines, with the objective of the wiki team being to produce a public website which serves to showcase the science team’s findings in a novel way."}),$.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBlock:"30px"},children:[$.jsxs("div",{style:{display:"flex"},className:"language_animate",children:[$.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",className:"language",style:{paddingTop:"6px",zIndex:"1"},children:[$.jsx("path",{fill:"#e44f26",d:"M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z"}),$.jsx("path",{fill:"#f1662a",d:"m16 27.858l8.17-2.265l1.922-21.532H16z"}),$.jsx("path",{fill:"#ebebeb",d:"M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z"}),$.jsx("path",{fill:"#fff",d:"M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z"})]}),$.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 128 128",className:"language",style:{paddingTop:"6px",zIndex:"2"},children:[$.jsx("path",{fill:"#1572b6",d:"M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"}),$.jsx("path",{fill:"#33a9dc",d:"m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"}),$.jsx("path",{fill:"#fff",d:"M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"}),$.jsx("path",{fill:"#ebebeb",d:"m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"}),$.jsx("path",{fill:"#fff",d:"m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"}),$.jsx("path",{fill:"#ebebeb",d:"M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"})]}),$.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 72 72",className:"language",style:{paddingTop:"6px",zIndex:"3"},children:[$.jsx("path",{fill:"#fcea2b",d:"M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"}),$.jsxs("g",{fill:"none",stroke:"#000",strokeLinejoin:"round",children:[$.jsx("path",{strokeWidth:"2",d:"M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"}),$.jsx("path",{strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"4.453",d:"M53.82 41.34c-.456-1.777-2.429-3.11-4.793-3.11c-2.703 0-4.893 1.743-4.893 3.896c0 2.151 2.191 3.896 4.893 3.896l-.1.013c2.703 0 4.893 1.745 4.893 3.896c0 2.153-2.191 3.896-4.893 3.896c-2.364 0-4.337-1.336-4.793-3.112",clipRule:"evenodd"}),$.jsx("path",{strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"4.456",d:"M36.74 38.23v10.03a5.568 5.568 0 0 1-9.296 4.139",clipRule:"evenodd"})]})]})]}),$.jsxs("a",{href:"https://2024.igem.wiki/ualberta/home",target:"#blank",className:"project_link",children:["Check Live Site ",$.jsx("svg",{viewBox:"0 0 24 24",children:$.jsx("path",{d:"M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z"})})]})]})]}),$.jsxs("div",{className:"a_project",children:[$.jsx("img",{style:{borderRadius:"20px",width:"100%",height:"420px",objectFit:"cover",objectPosition:"top"},src:TT,alt:"University of Alberta"}),$.jsx("h2",{style:{paddingInline:"8px",paddingTop:"18px"},children:"FoodUpcycling - ROD"}),$.jsx("p",{style:{paddingInline:"8px",minHeight:"130px"},children:"A community volunteer project with the aim of taking farmer donations and distributing them to beneficiaries in need by volunteers."}),$.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBlock:"30px"},children:[$.jsxs("div",{style:{display:"flex"},className:"language_animate",children:[$.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 128 128",className:"language",style:{paddingTop:"6px",zIndex:"1"},children:[$.jsx("path",{fill:"#3fb6d3",d:"M12.3 64.2L76.3 0h39.4L32.1 83.6zm64 63.8h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"}),$.jsx("path",{fill:"#27aacd",d:"m81.6 93.9l-20-20l-19.4 19.6l19.4 19.6z"}),$.jsx("path",{fill:"#19599a",d:"M115.7 128L81.6 93.9l-20 19.2L76.3 128z"}),$.jsxs("linearGradient",{id:"deviconFlutter0",x1:"59.365",x2:"86.825",y1:"116.36",y2:"99.399",gradientUnits:"userSpaceOnUse",children:[$.jsx("stop",{offset:"0",stopColor:"#1b4e94"}),$.jsx("stop",{offset:".63",stopColor:"#1a5497"}),$.jsx("stop",{offset:"1",stopColor:"#195a9b"})]}),$.jsx("path",{fill:"url(#deviconFlutter0)",d:"m61.6 113.1l30.8-8.4l-10.8-10.8z"})]}),$.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",className:"language",style:{paddingTop:"6px",zIndex:"2"},children:[$.jsx("path",{fill:"#43a047",d:"M22 2h4v4h-4zm0 8v12.13A3.88 3.88 0 0 1 18.13 26H18v4h.13A7.866 7.866 0 0 0 26 22.13V10Zm-8-8h4v20h-4z"}),$.jsx("path",{fill:"#43a047",d:"M11.838 12A2.165 2.165 0 0 1 14 14.162v4.955l-.77.257a5.03 5.03 0 0 1-2.812.108A3.19 3.19 0 0 1 8 16.384v-.547A3.84 3.84 0 0 1 11.838 12m0-4A7.84 7.84 0 0 0 4 15.837v.547a7.19 7.19 0 0 0 5.448 6.978a9.03 9.03 0 0 0 5.047-.194L18 22v-7.838A6.16 6.16 0 0 0 11.838 8"})]}),$.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 128 128",className:"language",style:{paddingTop:"6px",zIndex:"3"},children:[$.jsx("defs",{children:$.jsxs("linearGradient",{id:"deviconSqlite0",x1:"-15.615",x2:"-6.741",y1:"-9.108",y2:"-9.108",gradientTransform:"rotate(90 -90.486 64.634)scale(9.2712)",gradientUnits:"userSpaceOnUse",children:[$.jsx("stop",{offset:"0",stopColor:"#95d7f4"}),$.jsx("stop",{offset:".92",stopColor:"#0f7fcc"}),$.jsx("stop",{offset:"1",stopColor:"#0f7fcc"})]})}),$.jsx("path",{fill:"#0b7fcc",d:"M69.5 99.176c-.059-.73-.094-1.2-.094-1.2S67.2 83.087 64.57 78.642c-.414-.707.043-3.594 1.207-7.88c.68 1.169 3.54 6.192 4.118 7.81c.648 1.824.78 2.347.78 2.347s-1.57-8.082-4.144-12.797a162 162 0 0 1 2.004-6.265c.973 1.71 3.313 5.859 3.828 7.3c.102.293.192.543.27.774l.074-.414c-.59-2.504-1.75-6.86-3.336-10.082c3.52-18.328 15.531-42.824 27.84-53.754H16.9c-5.387 0-9.789 4.406-9.789 9.789v88.57c0 5.383 4.406 9.789 9.79 9.789h52.897a119 119 0 0 1-.297-14.652"}),$.jsx("path",{fill:"url(#deviconSqlite0)",d:"M65.777 70.762c.68 1.168 3.54 6.188 4.117 7.809c.649 1.824.781 2.347.781 2.347s-1.57-8.082-4.144-12.797a165 165 0 0 1 2.004-6.27c.887 1.567 2.922 5.169 3.652 6.872l.082-.961c-.648-2.496-1.633-5.766-2.898-8.328c3.242-16.871 13.68-38.97 24.926-50.898H16.899a6.94 6.94 0 0 0-6.934 6.933v82.11c17.527-6.731 38.664-12.88 56.855-12.614c-.672-2.605-1.441-4.96-2.25-6.324c-.414-.707.043-3.597 1.207-7.879"}),$.jsx("path",{fill:"#003956",d:"M115.95 2.781c-5.5-4.906-12.164-2.933-18.734 2.899a44 44 0 0 0-2.914 2.859c-11.25 11.926-21.684 34.023-24.926 50.895c1.262 2.563 2.25 5.832 2.894 8.328c.168.64.32 1.242.442 1.754c.285 1.207.437 1.996.437 1.996s-.101-.383-.515-1.582c-.078-.23-.168-.484-.27-.773a8 8 0 0 0-.172-.434c-.734-1.703-2.765-5.305-3.656-6.867c-.762 2.25-1.437 4.36-2.004 6.265c2.578 4.715 4.149 12.797 4.149 12.797s-.137-.523-.782-2.347c-.578-1.621-3.441-6.64-4.117-7.809c-1.164 4.281-1.625 7.172-1.207 7.88c.809 1.362 1.574 3.722 2.25 6.323c1.524 5.867 2.586 13.012 2.586 13.012s.031.469.094 1.2a119 119 0 0 0 .297 14.651c.504 6.11 1.453 11.363 2.664 14.172l.828-.449c-1.781-5.535-2.504-12.793-2.188-21.156c.48-12.793 3.422-28.215 8.856-44.289c9.191-24.27 21.938-43.738 33.602-53.035c-10.633 9.602-25.023 40.684-29.332 52.195c-4.82 12.891-8.238 24.984-10.301 36.574c3.55-10.863 15.047-15.53 15.047-15.53s5.637-6.958 12.227-16.888c-3.95.903-10.43 2.442-12.598 3.352c-3.2 1.344-4.067 1.8-4.067 1.8s10.371-6.312 19.27-9.171c12.234-19.27 25.562-46.648 12.141-58.621"})]})]}),$.jsxs("a",{href:"https://cmput401.ca/",target:"#blank",className:"project_link",children:["Check Portal ",$.jsx("svg",{viewBox:"0 0 24 24",children:$.jsx("path",{d:"M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z"})})]})]})]}),$.jsxs("div",{className:"a_project",children:[$.jsx("img",{style:{borderRadius:"20px",width:"100%",height:"420px",objectFit:"cover",objectPosition:"bottom"},src:AT,alt:"University of Alberta"}),$.jsx("h2",{style:{paddingInline:"8px",paddingTop:"18px"},children:"Henning the Navigator"}),$.jsx("p",{style:{paddingInline:"8px",minHeight:"130px"},children:"A map navigation tool for the flight simulator IL-2 Sturmovik: Great Battles. Wavepoints on a map are set with distance, speed and heading which output a timed navigational path."}),$.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBlock:"30px"},children:[$.jsxs("div",{style:{display:"flex"},className:"language_animate",children:[$.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",className:"language",style:{zIndex:"1"},children:[$.jsx("path",{fill:"#00bcd4",d:`M16 12c7.444 0 12 \r
                    2.59 12 4s-4.556 4-12 4s-12-2.59-12-4s4.556-4 12-4m0-2c-7.732 0-14 2.686-14 6s6.268 6 14 6s14-2.686 14-6s-6.268-6-14-6`}),$.jsx("path",{fill:"#00bcd4",d:`M16 \r
                    14a2 2 0 1 0 2 2a2 2 0 0 0-2-2`}),$.jsx("path",{fill:"#00bcd4",d:`M10.458 5.507c2.017 0 5.937 3.177 9.006 8.493c3.722 6.447 3.757 11.687 2.536 12.392a.9.9 0 0 \r
                    1-.457.1c-2.017 0-5.938-3.176-9.007-8.492C8.814 11.553 8.779 6.313 10 5.608a.9.9 0 0 1 .458-.1m-.001-2A2.87 2.87 0 0 0 9 3.875C6.13 5.532 6.938 12.304 \r
                    10.804 19c3.284 5.69 7.72 9.493 10.74 9.493A2.87 2.87 0 0 0 23 28.124c2.87-1.656 2.062-8.428-1.804-15.124c-3.284-5.69-7.72-9.493-10.74-9.493Z`}),$.jsx("path",{fill:"#00bcd4",d:`M21.543 5.507a.9.9 0 0 1 .457.1c1.221.706 1.186 5.946-2.536 12.393c-3.07 5.316-6.99 8.493-9.007 8.493a.9.9 0 0 \r
                    1-.457-.1C8.779 25.686 8.814 20.446 12.536 14c3.07-5.316 6.99-8.493 9.007-8.493m0-2c-3.02 0-7.455 3.804-10.74 9.493C6.939 19.696 6.13 26.468 \r
                    9 28.124a2.87 2.87 0 0 0 \r
                    1.457.369c3.02 0 7.455-3.804 10.74-9.493C25.061 12.304 25.87 5.532 23 3.876a2.87 2.87 0 0 0-1.457-.369`})]}),$.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",className:"language",style:{paddingTop:"6px",zIndex:"1"},children:[$.jsx("path",{fill:"#e44f26",d:"M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z"}),$.jsx("path",{fill:"#f1662a",d:"m16 27.858l8.17-2.265l1.922-21.532H16z"}),$.jsx("path",{fill:"#ebebeb",d:"M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z"}),$.jsx("path",{fill:"#fff",d:"M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z"})]}),$.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 128 128",className:"language",style:{paddingTop:"6px",zIndex:"2"},children:[$.jsx("path",{fill:"#1572b6",d:"M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"}),$.jsx("path",{fill:"#33a9dc",d:"m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"}),$.jsx("path",{fill:"#fff",d:"M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"}),$.jsx("path",{fill:"#ebebeb",d:"m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"}),$.jsx("path",{fill:"#fff",d:"m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"}),$.jsx("path",{fill:"#ebebeb",d:"M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"})]}),$.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 72 72",className:"language",style:{paddingTop:"6px",zIndex:"3"},children:[$.jsx("path",{fill:"#fcea2b",d:"M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"}),$.jsxs("g",{fill:"none",stroke:"#000",strokeLinejoin:"round",children:[$.jsx("path",{strokeWidth:"2",d:"M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"}),$.jsx("path",{strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"4.453",d:"M53.82 41.34c-.456-1.777-2.429-3.11-4.793-3.11c-2.703 0-4.893 1.743-4.893 3.896c0 2.151 2.191 3.896 4.893 3.896l-.1.013c2.703 0 4.893 1.745 4.893 3.896c0 2.153-2.191 3.896-4.893 3.896c-2.364 0-4.337-1.336-4.793-3.112",clipRule:"evenodd"}),$.jsx("path",{strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"4.456",d:"M36.74 38.23v10.03a5.568 5.568 0 0 1-9.296 4.139",clipRule:"evenodd"})]})]})]}),$.jsx("p",{href:"#",target:"#blank",className:"project_link",children:"(In progress)"})]})]}),$.jsx("div",{className:"a_project",children:"2025 IGEM Biology Project (In progress)"})]})]})},lb=()=>{pr.useEffect(()=>{ft.to("#experience_img_border",{height:"100%",duration:3,ease:"back.out",delay:1,opacity:1,onComplete:()=>{ft.to("#experience_img_border",{scaleY:"1.14",duration:11,ease:"sine.inOut",yoyo:!0,repeat:-1}),ft.to("#experience_img_border",{scaleY:"1.19",duration:11,ease:"sine.inOut",yoyo:!0,repeat:-1})}}),ft.to("#linear_gradient_experience",{height:"100%",duration:3,ease:"back.out",delay:1,opacity:1,onComplete:()=>{ft.to("#linear_gradient_experience",{scaleY:"1.17",duration:8,ease:"sine.inOut",yoyo:!0,repeat:-1}),ft.to("#linear_gradient_experience",{scaleY:"1.24",duration:8,ease:"sine.inOut",yoyo:!0,repeat:-1})}}),Gu>760?ft.to("#experience_headerCard_container",{left:"80px",duration:3,ease:"back.out",delay:1}):ft.to("#experience_headerCard_container",{left:"9%",duration:2,ease:"ease"})},[]),pr.useEffect(()=>{const t=()=>{window.innerWidth>760?ft.to("#experience_headerCard_container",{left:"80px",duration:3,ease:"ease"}):ft.to("#experience_headerCard_container",{left:"9%",duration:2,ease:"ease"})};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const o=()=>{ft.to("#linear_gradient_experience",{opacity:.5})},e=()=>{ft.to("#linear_gradient_experience",{opacity:1})};return $.jsxs("div",{id:"Experience",style:{marginTop:"30vw"},children:[$.jsxs("div",{style:{position:"relative"},children:[$.jsx("div",{id:"experience_img_border"}),$.jsx("div",{id:"linear_gradient_experience",onMouseEnter:o,onMouseLeave:e}),$.jsx("img",{id:"experience_img",src:wT,alt:"RenewWool"}),$.jsx("svg",{className:"svg",children:$.jsx("clipPath",{id:"clip_experience",clipPathUnits:"objectBoundingBox",children:$.jsx("path",{d:"M0.002,0.005 C0.185,0.011,0.323,-0.047,0.389,0.131 C0.456,0.309,0.468,0.192,0.558,0.262 C0.648,0.331,0.628,0.357,0.654,0.448 C0.681,0.539,0.712,0.483,0.712,0.483 C0.712,0.483,0.771,0.353,0.818,0.448 C0.865,0.544,0.949,0.426,0.881,0.309 C0.812,0.192,0.936,0.192,0.936,0.192 L1,0.153 V0.869 C1,0.869,0.943,0.869,0.915,0.821 C0.887,0.773,0.881,0.748,0.875,0.809 C0.869,0.869,0.841,0.821,0.818,0.847 C0.794,0.874,0.781,0.867,0.773,0.93 C0.765,0.993,0.724,1,0.703,0.978 C0.683,0.93,0.666,1,0.651,0.969 C0.636,0.93,0.624,0.978,0.606,0.93 C0.589,0.882,0.589,0.926,0.565,0.898 C0.541,0.869,0.54,0.865,0.528,0.898 C0.516,0.93,0.508,0.91,0.498,0.93 C0.488,0.95,0.451,0.963,0.441,0.93 C0.432,0.898,0.398,0.882,0.389,0.869 C0.38,0.857,0.362,0.847,0.362,0.847 C0.362,0.847,0.341,0.806,0.321,0.785 C0.3,0.763,0.301,0.761,0.287,0.785 C0.274,0.809,0.251,0.789,0.244,0.763 C0.237,0.737,0.19,0.711,0.179,0.737 C0.169,0.763,0.172,0.789,0.154,0.763 C0.135,0.737,0.131,0.734,0.115,0.785 C0.098,0.835,0.092,0.886,0.061,0.847 C0.029,0.809,0.045,0.869,0.019,0.847 C-0.008,0.826,0.002,0.847,0.002,0.847 V0.005"})})}),$.jsx("div",{id:"experience_headerCard_container",children:$.jsxs("h1",{children:["Dates and Occupations -",$.jsx("p",{children:" Professional & Volunteer Experience"})]})})]}),$.jsx("div",{style:{marginTop:"15vw"},children:$.jsxs("div",{className:"experience_item",children:[$.jsx("h3",{children:"University of Alberta"}),$.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[$.jsx("h1",{children:"Undergraduate Teaching Assistant"}),$.jsx("p",{style:{marginTop:"12px",opacity:"0.6"},children:"January 2024 - January 2025"})]}),$.jsxs("ul",{className:"list",children:[$.jsx("li",{className:"lists",children:"Interact with students in assistance to their coursework while evaluating and providing feedback to student work"}),$.jsx("li",{children:"Work with Professor to meet timelines and create grading criteria for assessments"})]})]})}),$.jsx("div",{style:{marginTop:"25px"},children:$.jsxs("div",{className:"experience_item",children:[$.jsx("h3",{children:"iGEM UAlberta Team"}),$.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[$.jsx("h1",{children:"2024 iGEM Wiki Lead"}),$.jsx("p",{style:{marginTop:"12px",opacity:"0.6"},children:"April 2024 – October 2024"})]}),$.jsxs("ul",{className:"list",children:[$.jsx("li",{className:"lists",children:"Design and produce a novel wiki to display scientific results for the 2024 University of Alberta entry"}),$.jsx("li",{children:"Communicate with groups of other disciplines to meet past and new requriements"})]})]})})]})},ub=()=>$.jsxs("main",{children:[$.jsx(RT,{}),$.jsx(bT,{}),$.jsx(ob,{}),$.jsx(ab,{}),$.jsx(lb,{}),$.jsx("div",{style:{paddingBottom:"500px"}})]});RM.createRoot(document.getElementById("root")).render($.jsx(pr.StrictMode,{children:$.jsx(ub,{})}));
