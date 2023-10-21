var ke=Object.defineProperty;var Oe=(n,e,t)=>e in n?ke(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var m=(n,e,t)=>(Oe(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();class Ve extends HTMLElement{constructor(){super(),this.handleScroll=this.handleScroll.bind(this)}connectedCallback(){globalThis.addEventListener("scroll",this.handleScroll)}disconnectedCallback(){globalThis.removeEventListener("scroll",this.handleScroll)}handleScroll(){const e=globalThis.scrollY,t=document.querySelector("#app");e>150?t.classList.add("fixed-top"):t.classList.remove("fixed-top")}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,F=H.trustedTypes,ce=F?F.createPolicy("lit-html",{createHTML:n=>n}):void 0,we="$lit$",g=`lit$${(Math.random()+"").slice(9)}$`,ge="?"+g,Pe=`<${ge}>`,S=document,L=()=>S.createComment(""),k=n=>n===null||typeof n!="object"&&typeof n!="function",_e=Array.isArray,Re=n=>_e(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",D=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ae=/-->/g,le=/>/g,A=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ue=/'/g,he=/"/g,Ae=/^(?:script|style|textarea|title)$/i,Ue=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),w=Ue(1),O=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),de=new WeakMap,$=S.createTreeWalker(S,129);function $e(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ce!==void 0?ce.createHTML(e):e}const Ne=(n,e)=>{const t=n.length-1,r=[];let i,o=e===2?"<svg>":"",s=M;for(let l=0;l<t;l++){const c=n[l];let a,u,h=-1,d=0;for(;d<c.length&&(s.lastIndex=d,u=s.exec(c),u!==null);)d=s.lastIndex,s===M?u[1]==="!--"?s=ae:u[1]!==void 0?s=le:u[2]!==void 0?(Ae.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=A):u[3]!==void 0&&(s=A):s===A?u[0]===">"?(s=i??M,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,a=u[1],s=u[3]===void 0?A:u[3]==='"'?he:ue):s===he||s===ue?s=A:s===ae||s===le?s=M:(s=A,i=void 0);const f=s===A&&n[l+1].startsWith("/>")?" ":"";o+=s===M?c+Pe:h>=0?(r.push(a),c.slice(0,h)+we+c.slice(h)+g+f):c+g+(h===-2?l:f)}return[$e(n,o+(n[t]||"<?>")+(e===2?"</svg>":"")),r]};class V{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,s=0;const l=e.length-1,c=this.parts,[a,u]=Ne(e,t);if(this.el=V.createElement(a,r),$.currentNode=this.el.content,t===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=$.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(we)){const d=u[s++],f=i.getAttribute(h).split(g),b=/([.?@])?(.*)/.exec(d);c.push({type:1,index:o,name:b[2],strings:f,ctor:b[1]==="."?Fe:b[1]==="?"?je:b[1]==="@"?De:j}),i.removeAttribute(h)}else h.startsWith(g)&&(c.push({type:6,index:o}),i.removeAttribute(h));if(Ae.test(i.tagName)){const h=i.textContent.split(g),d=h.length-1;if(d>0){i.textContent=F?F.emptyScript:"";for(let f=0;f<d;f++)i.append(h[f],L()),$.nextNode(),c.push({type:2,index:++o});i.append(h[d],L())}}}else if(i.nodeType===8)if(i.data===ge)c.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(g,h+1))!==-1;)c.push({type:7,index:o}),h+=g.length-1}o++}}static createElement(e,t){const r=S.createElement("template");return r.innerHTML=e,r}}function C(n,e,t=n,r){var s,l;if(e===O)return e;let i=r!==void 0?(s=t._$Co)==null?void 0:s[r]:t._$Cl;const o=k(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(n),i._$AT(n,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=i:t._$Cl=i),i!==void 0&&(e=C(n,i._$AS(n,e.values),i,r)),e}class Be{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??S).importNode(t,!0);$.currentNode=i;let o=$.nextNode(),s=0,l=0,c=r[0];for(;c!==void 0;){if(s===c.index){let a;c.type===2?a=new U(o,o.nextSibling,this,e):c.type===1?a=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(a=new qe(o,this,e)),this._$AV.push(a),c=r[++l]}s!==(c==null?void 0:c.index)&&(o=$.nextNode(),s++)}return $.currentNode=S,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class U{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),k(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==O&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Re(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==y&&k(this._$AH)?this._$AA.nextSibling.data=e:this.$(S.createTextNode(e)),this._$AH=e}g(e){var o;const{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=V.createElement($e(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(t);else{const s=new Be(i,this),l=s.u(this.options);s.p(t),this.$(l),this._$AH=s}}_$AC(e){let t=de.get(e.strings);return t===void 0&&de.set(e.strings,t=new V(e)),t}T(e){_e(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const o of e)i===t.length?t.push(r=new U(this.k(L()),this.k(L()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,o){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=y}_$AI(e,t=this,r,i){const o=this.strings;let s=!1;if(o===void 0)e=C(this,e,t,0),s=!k(e)||e!==this._$AH&&e!==O,s&&(this._$AH=e);else{const l=e;let c,a;for(e=o[0],c=0;c<o.length-1;c++)a=C(this,l[r+c],t,c),a===O&&(a=this._$AH[c]),s||(s=!k(a)||a!==this._$AH[c]),a===y?e=y:e!==y&&(e+=(a??"")+o[c+1]),this._$AH[c]=a}s&&!i&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Fe extends j{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}}class je extends j{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}}class De extends j{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??y)===O)return;const r=this._$AH,i=e===y&&r!==y||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==y&&(r===y||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class qe{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const q=H.litHtmlPolyfillSupport;q==null||q(V,U),(H.litHtmlVersions??(H.litHtmlVersions=[])).push("3.0.0");const _=(n,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const o=(t==null?void 0:t.renderBefore)??null;r._$litPart$=i=new U(e.insertBefore(L(),o),o,void 0,t??{})}return i._$AI(n),i};var G=function(n,e){return G=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])},G(n,e)};function ee(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");G(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Ye(n,e,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function l(u){try{a(r.next(u))}catch(h){s(h)}}function c(u){try{a(r.throw(u))}catch(h){s(h)}}function a(u){u.done?o(u.value):i(u.value).then(l,c)}a((r=r.apply(n,e||[])).next())})}function Se(n,e){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(a){return function(u){return c([a,u])}}function c(a){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(t=0)),t;)try{if(r=1,i&&(o=a[0]&2?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[a[0]&2,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return t.label++,{value:a[1],done:!1};case 5:t.label++,i=a[1],a=[0];continue;case 7:a=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){t.label=a[1];break}if(a[0]===6&&t.label<o[1]){t.label=o[1],o=a;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(a);break}o[2]&&t.ops.pop(),t.trys.pop();continue}a=e.call(n,t)}catch(u){a=[6,u],i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function P(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],r=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function T(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var r=t.call(n),i,o=[],s;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(l){s={error:l}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return o}function R(n,e,t){if(t||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}function x(n){return this instanceof x?(this.v=n,this):new x(n)}function ze(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(n,e||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(d){r[d]&&(i[d]=function(f){return new Promise(function(b,v){o.push([d,f,b,v])>1||l(d,f)})})}function l(d,f){try{c(r[d](f))}catch(b){h(o[0][3],b)}}function c(d){d.value instanceof x?Promise.resolve(d.value.v).then(a,u):h(o[0][2],d)}function a(d){l("next",d)}function u(d){l("throw",d)}function h(d,f){d(f),o.shift(),o.length&&l(o[0][0],o[0][1])}}function We(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof P=="function"?P(n):n[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(o){t[o]=n[o]&&function(s){return new Promise(function(l,c){s=n[o](s),i(l,c,s.done,s.value)})}}function i(o,s,l,c){Promise.resolve(c).then(function(a){o({value:a,done:l})},s)}}function p(n){return typeof n=="function"}function Ge(n){var e=function(r){Error.call(r),r.stack=new Error().stack},t=n(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Y=Ge(function(n){return function(t){n(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function fe(n,e){if(n){var t=n.indexOf(e);0<=t&&n.splice(t,1)}}var te=function(){function n(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return n.prototype.unsubscribe=function(){var e,t,r,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var l=P(s),c=l.next();!c.done;c=l.next()){var a=c.value;a.remove(this)}}catch(v){e={error:v}}finally{try{c&&!c.done&&(t=l.return)&&t.call(l)}finally{if(e)throw e.error}}else s.remove(this);var u=this.initialTeardown;if(p(u))try{u()}catch(v){o=v instanceof Y?v.errors:[v]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var d=P(h),f=d.next();!f.done;f=d.next()){var b=f.value;try{pe(b)}catch(v){o=o??[],v instanceof Y?o=R(R([],T(o)),T(v.errors)):o.push(v)}}}catch(v){r={error:v}}finally{try{f&&!f.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(o)throw new Y(o)}},n.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)pe(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},n.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},n.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},n.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&fe(t,e)},n.prototype.remove=function(e){var t=this._finalizers;t&&fe(t,e),e instanceof n&&e._removeParent(this)},n.EMPTY=function(){var e=new n;return e.closed=!0,e}(),n}();te.EMPTY;function Ee(n){return n instanceof te||n&&"closed"in n&&p(n.remove)&&p(n.add)&&p(n.unsubscribe)}function pe(n){p(n)?n():n.unsubscribe()}var xe={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},J={setTimeout:function(n,e){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i=J.delegate;return i!=null&&i.setTimeout?i.setTimeout.apply(i,R([n,e],T(t))):setTimeout.apply(void 0,R([n,e],T(t)))},clearTimeout:function(n){var e=J.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(n)},delegate:void 0};function Ce(n){J.setTimeout(function(){throw n})}function ve(){}function Je(n){n()}var ne=function(n){ee(e,n);function e(t){var r=n.call(this)||this;return r.isStopped=!1,t?(r.destination=t,Ee(t)&&t.add(r)):r.destination=Xe,r}return e.create=function(t,r,i){return new K(t,r,i)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(te),Ke=Function.prototype.bind;function z(n,e){return Ke.call(n,e)}var Qe=function(){function n(e){this.partialObserver=e}return n.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(r){B(r)}},n.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(r){B(r)}else B(e)},n.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){B(t)}},n}(),K=function(n){ee(e,n);function e(t,r,i){var o=n.call(this)||this,s;if(p(t)||!t)s={next:t??void 0,error:r??void 0,complete:i??void 0};else{var l;o&&xe.useDeprecatedNextContext?(l=Object.create(t),l.unsubscribe=function(){return o.unsubscribe()},s={next:t.next&&z(t.next,l),error:t.error&&z(t.error,l),complete:t.complete&&z(t.complete,l)}):s=t}return o.destination=new Qe(s),o}return e}(ne);function B(n){Ce(n)}function Ze(n){throw n}var Xe={closed:!0,next:ve,error:Ze,complete:ve},re=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function et(n){return n}function tt(n){return n.length===0?et:n.length===1?n[0]:function(t){return n.reduce(function(r,i){return i(r)},t)}}var E=function(){function n(e){e&&(this._subscribe=e)}return n.prototype.lift=function(e){var t=new n;return t.source=this,t.operator=e,t},n.prototype.subscribe=function(e,t,r){var i=this,o=rt(e)?e:new K(e,t,r);return Je(function(){var s=i,l=s.operator,c=s.source;o.add(l?l.call(o,c):c?i._subscribe(o):i._trySubscribe(o))}),o},n.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},n.prototype.forEach=function(e,t){var r=this;return t=me(t),new t(function(i,o){var s=new K({next:function(l){try{e(l)}catch(c){o(c),s.unsubscribe()}},error:o,complete:i});r.subscribe(s)})},n.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},n.prototype[re]=function(){return this},n.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return tt(e)(this)},n.prototype.toPromise=function(e){var t=this;return e=me(e),new e(function(r,i){var o;t.subscribe(function(s){return o=s},function(s){return i(s)},function(){return r(o)})})},n.create=function(e){return new n(e)},n}();function me(n){var e;return(e=n??xe.Promise)!==null&&e!==void 0?e:Promise}function nt(n){return n&&p(n.next)&&p(n.error)&&p(n.complete)}function rt(n){return n&&n instanceof ne||nt(n)&&Ee(n)}function it(n){return p(n==null?void 0:n.lift)}function Te(n){return function(e){if(it(e))return e.lift(function(t){try{return n(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Q(n,e,t,r,i){return new ot(n,e,t,r,i)}var ot=function(n){ee(e,n);function e(t,r,i,o,s,l){var c=n.call(this,t)||this;return c.onFinalize=s,c.shouldUnsubscribe=l,c._next=r?function(a){try{r(a)}catch(u){t.error(u)}}:n.prototype._next,c._error=o?function(a){try{o(a)}catch(u){t.error(u)}finally{this.unsubscribe()}}:n.prototype._error,c._complete=i?function(){try{i()}catch(a){t.error(a)}finally{this.unsubscribe()}}:n.prototype._complete,c}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;n.prototype.unsubscribe.call(this),!r&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(ne),Ie=function(n){return n&&typeof n.length=="number"&&typeof n!="function"};function st(n){return p(n==null?void 0:n.then)}function ct(n){return p(n[re])}function at(n){return Symbol.asyncIterator&&p(n==null?void 0:n[Symbol.asyncIterator])}function lt(n){return new TypeError("You provided "+(n!==null&&typeof n=="object"?"an invalid object":"'"+n+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function ut(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ht=ut();function dt(n){return p(n==null?void 0:n[ht])}function ft(n){return ze(this,arguments,function(){var t,r,i,o;return Se(this,function(s){switch(s.label){case 0:t=n.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,x(t.read())];case 3:return r=s.sent(),i=r.value,o=r.done,o?[4,x(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,x(i)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function pt(n){return p(n==null?void 0:n.getReader)}function ie(n){if(n instanceof E)return n;if(n!=null){if(ct(n))return vt(n);if(Ie(n))return mt(n);if(st(n))return yt(n);if(at(n))return Me(n);if(dt(n))return bt(n);if(pt(n))return wt(n)}throw lt(n)}function vt(n){return new E(function(e){var t=n[re]();if(p(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function mt(n){return new E(function(e){for(var t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function yt(n){return new E(function(e){n.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,Ce)})}function bt(n){return new E(function(e){var t,r;try{for(var i=P(n),o=i.next();!o.done;o=i.next()){var s=o.value;if(e.next(s),e.closed)return}}catch(l){t={error:l}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}e.complete()})}function Me(n){return new E(function(e){gt(n,e).catch(function(t){return e.error(t)})})}function wt(n){return Me(ft(n))}function gt(n,e){var t,r,i,o;return Ye(this,void 0,void 0,function(){var s,l;return Se(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),t=We(n),c.label=1;case 1:return[4,t.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(s=r.value,e.next(s),e.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return l=c.sent(),i={error:l},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(o=t.return)?[4,o.call(t)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function _t(n,e,t,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var o=e.schedule(function(){t(),i?n.add(this.schedule(null,r)):this.unsubscribe()},r);if(n.add(o),!i)return o}function oe(n,e){return Te(function(t,r){var i=0;t.subscribe(Q(r,function(o){r.next(n.call(e,o,i++))}))})}var At=Array.isArray;function $t(n,e){return At(e)?n.apply(void 0,R([],T(e))):n(e)}function St(n){return oe(function(e){return $t(n,e)})}function Et(n,e,t,r,i,o,s,l){var c=[],a=0,u=0,h=!1,d=function(){h&&!c.length&&!a&&e.complete()},f=function(v){return a<r?b(v):c.push(v)},b=function(v){o&&e.next(v),a++;var se=!1;ie(t(v,u++)).subscribe(Q(e,function(I){i==null||i(I),o?f(I):e.next(I)},function(){se=!0},void 0,function(){if(se)try{a--;for(var I=function(){var N=c.shift();s?_t(e,s,function(){return b(N)}):b(N)};c.length&&a<r;)I();d()}catch(N){e.error(N)}}))};return n.subscribe(Q(e,f,function(){h=!0,d()})),function(){l==null||l()}}function He(n,e,t){return t===void 0&&(t=1/0),p(e)?He(function(r,i){return oe(function(o,s){return e(r,o,i,s)})(ie(n(r,i)))},t):(typeof e=="number"&&(t=e),Te(function(r,i){return Et(r,i,n,t)}))}var xt=["addListener","removeListener"],Ct=["addEventListener","removeEventListener"],Tt=["on","off"];function Z(n,e,t,r){if(p(t)&&(r=t,t=void 0),r)return Z(n,e,t).pipe(St(r));var i=T(Ht(n)?Ct.map(function(l){return function(c){return n[l](e,c,t)}}):It(n)?xt.map(ye(n,e)):Mt(n)?Tt.map(ye(n,e)):[],2),o=i[0],s=i[1];if(!o&&Ie(n))return He(function(l){return Z(l,e,t)})(ie(n));if(!o)throw new TypeError("Invalid event target");return new E(function(l){var c=function(){for(var a=[],u=0;u<arguments.length;u++)a[u]=arguments[u];return l.next(1<a.length?a:a[0])};return o(c),function(){return s(c)}})}function ye(n,e){return function(t){return function(r){return n[t](e,r)}}}function It(n){return p(n.addListener)&&p(n.removeListener)}function Mt(n){return p(n.on)&&p(n.off)}function Ht(n){return p(n.addEventListener)&&p(n.removeEventListener)}const Lt=`.component{color:#7fffd4}
`;class kt{constructor(e){m(this,"component");this.component=e}_setupUI(){this.component.container=document.createElement("div"),this.component.countElement=document.createElement("p"),this.component.observer.observe(this.component.container,{characterData:!0,childList:!0,subtree:!0}),this._renderAppShadow(),this._getNavLinks()}_renderAppShadow(){this.component.renderView("");const e=w`
         <slot></slot>
         ${this.component.container}
         <div class="component">${this.component.countElement}</div>
         <style>${Lt}</style>
      `;_(e,this.component.shadow)}_getNavLinks(){this.component.querySelectorAll(".menu__item").forEach(e=>{var r;const t=(((r=e.textContent)==null?void 0:r.trim())||"").toLowerCase();Z(globalThis,t).pipe(oe(i=>i.target)).subscribe(()=>{this.component.renderView(t)})})}}const Ot=`.Home{display:flex;flex-direction:column;text-align:center;background-color:#000000e6}.Home .home-p{color:#0ff}
`;class Vt{constructor(e){this.container=e}render(){const e=w`
         <style>${Ot}</style>
         <section class="Home" id="home1">
            <slot name="home" class="home-p"></slot>
            <div class="home-p">Home View</div>
            <div class="home-p">Home View</div>
            <div class="home-p">Home View</div>
            <div class="home-p">Home View</div>
            <div class="home-p">Home View</div>
            <div class="home-p">Home View</div>
         </section>
         <div></div>
         <div></div>
         <div></div>
      `;_(e,this.container)}}const Pt=`.About{background-color:#8a2be2;text-align:center}.About .about-p{color:#0ff}.mi-clase{background-color:bisque}
`;class Rt{constructor(e){this.container=e}render(){const e=w`
         <style>${Pt}</style>
         <section class="About" id="about3">
            ${Array.from({length:8},(t,r)=>w`<div class="about-p">About View ${r+1}</div>`)}
         </section>
         <div></div>
      `;_(e,this.container)}}const Ut=`.Contact{background-color:red;text-align:center}.Contact .contact-p{color:#0ff}.mi-clase{background-color:bisque}div{align-content:center}
`;class Nt{constructor(e){this.container=e}render(){const e=w`
         <style>${Ut}</style>
         <section class="Contact" id="contact2">
            <div class="contact-p">Contact View</div>
            <div class="contact-p">Contact View</div>
            <div class="contact-p">Contact View</div>
            <div class="contact-p">Contact View</div>
            <div class="contact-p">Contact View</div>
         </section>
      `;_(e,this.container)}}class W{constructor(e){m(this,"renderView");this.renderView=e}render(){this.renderView()}}class Bt{constructor(e){m(this,"views",{});this.container=e,this._initializeViews()}_initializeViews(){const e=new Vt(this.container),t=new Rt(this.container),r=new Nt(this.container);this.views.home=new W(()=>e.render()),this.views.about=new W(()=>t.render()),this.views.contact=new W(()=>r.render())}getMethodStrategy(e){return this.views[e]!==void 0?this.views[e]:this.views.home}}class Ft extends HTMLElement{constructor(){super();m(this,"shadow");m(this,"container",null);m(this,"countElement",null);m(this,"componentRoot");m(this,"observer",null);this.shadow=this.attachShadow({mode:"closed"}),this._renderView=this._renderView.bind(this)}connectedCallback(){this.observer=new MutationObserver(this._handleShadowDOMChanges.bind(this)),this.componentRoot=new kt(this),this.componentRoot._setupUI()}disconnectedCallback(){this._clearShadow()}_renderView(t){new Bt(this.container).getMethodStrategy(t).render()}get renderView(){return this._renderView}_clearShadow(){this.container&&(this.shadow.removeChild(this.container),this.container=null),this.observer&&(this.observer.disconnect(),this.observer=null)}_handleShadowDOMChanges(t){console.log(this.container);let r;this.container&&(r=this.container.children.length),this.countElement&&(this.countElement.textContent=`Número de elementos: ${r}`)}}class jt extends HTMLElement{constructor(){super();m(this,"menuItems",new Map);m(this,"shadow");this.shadow=this.attachShadow({mode:"closed"}),this._handleMenuItemClick=this._handleMenuItemClick.bind(this)}_renderAppShadow(){const t=w`
         <slot></slot>
      `;_(t,this.shadow)}connectedCallback(){this._renderAppShadow(),this._getNavLinks()}disconnectedCallback(){this.menuItems.forEach(t=>{t.element.removeEventListener("click",this._handleMenuItemClick)}),this.menuItems.clear()}_getNavLinks(){this.querySelectorAll(".menu__item").forEach((t,r)=>{var s;const i=`menu-item-${r}`,o=(((s=t.textContent)==null?void 0:s.trim())||"").toLowerCase();this.menuItems.has(o)||(this.menuItems.set(o,{element:t,eventName:i,view:o}),this._setupMenuButtons(this.menuItems.get(o)))})}_setupMenuButtons(t){t.element.addEventListener("click",this._handleMenuItemClick)}_handleMenuItemClick(t){var s;const r=t.currentTarget,i=(s=r.textContent)==null?void 0:s.trim().toLowerCase(),o=new CustomEvent(i,{detail:{view:i},bubbles:!0,composed:!0});console.log(i),r.dispatchEvent(o)}}class Dt{constructor(e){m(this,"component");this.component=e}update(e,t){return{[t]:async()=>{const r=this.component.shadow.querySelector("div");if(r){const i=w`
               <span>${e}</span>
               `;_(i,r)}}}}}class qt{constructor(){m(this,"observers",new Map)}addObserver(e,t){!this.observers.has(t)&&this.observers.set(t,new Set),this.observers.get(t).add(e)}removeObserver(e,t){this.observers.has(t)&&this.observers.get(t).delete(e)}setPropertyValue(e,t){this.notifyObservers(e,t)}notifyObservers(e,t){this.observers.has(t)&&this.observers.get(t).forEach(async r=>await r.update(e,t)[t]())}}class Yt extends HTMLElement{constructor(){super();m(this,"observable");m(this,"observer");m(this,"shadow");m(this,"state",0);this.shadow=this.attachShadow({mode:"closed"}),this.observable=new qt,this.observer=new Dt(this)}connectedCallback(){this._setupUI(),this.shadow.querySelector("button").addEventListener("click",this._handleButtonClick.bind(this))}disconnectedCallback(){const t=this.shadow.querySelector("button");this.observable.removeObserver(this.observer,"value"),t.removeEventListener("click",this._handleButtonClick.bind(this))}_setupUI(){this.observable.addObserver(this.observer,"value");const t=w`
         <div>Valor actual:</div>
         <button>Cambiar Valor</button>
      `;_(t,this.shadow)}_handleButtonClick(){this.observable.setPropertyValue(++this.state,"value")}}const Le=(()=>({logAction:async n=>{n.Event(),await n.showIntroduction().then(console.log),Le.initializeComponents().then},initializeComponents:async()=>{customElements.define("my-component-memoized",Yt),customElements.define("global-scroll-listener",Ve),customElements.define("app-root",Ft),customElements.define("navigation-menu",jt)}}))(),X=(()=>({showIntroduction:async()=>{try{return`
               ======================
               USANDO TS EN PROYECTOS
               ======================
            `}catch(n){throw n}},renderAppContent:async()=>{const n=document.querySelector("#app"),e=w`
            <h1>Typescript BRAD♥○◘😎</h1>
         `;_(e,n)},Event:async()=>{Object.entries(X).filter(([],n,e)=>n<e.length-1||n==0).forEach(([n])=>{X[n]().then()})}}))();class be{constructor(e){m(this,"methodFunction");this.methodFunction=e}execute(){this.methodFunction()}}class zt{constructor(){m(this,"methods",{});this._initializeMain()}_initializeMain(){this.methods.method1=new be(()=>Le.logAction(X)),this.methods.method2=new be(()=>{})}getMethodStrategy(e){return this.methods[e]!==void 0?this.methods[e]:this.methods.method1}}class Wt{constructor(){this.setup=this.setup.bind(this),this.init()}init(){document.addEventListener("DOMContentLoaded",this.setup)}async setup(){const e=this.methodFromElement;new zt().getMethodStrategy(e).execute()}get methodFromElement(){return document.body.getAttribute("data-method")}}new Wt;
