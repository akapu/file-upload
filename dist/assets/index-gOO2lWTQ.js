var Yt=Object.defineProperty;var Gt=(i,t,e)=>t in i?Yt(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var h=(i,t,e)=>Gt(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,$t=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bt=Symbol(),wt=new WeakMap;let Lt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==bt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if($t&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=wt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&wt.set(e,t))}return t}toString(){return this.cssText}};const Zt=i=>new Lt(typeof i=="string"?i:i+"",void 0,bt),v=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new Lt(e,i,bt)},Jt=(i,t)=>{if($t)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),r=j.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},At=$t?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Zt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Qt,defineProperty:Xt,getOwnPropertyDescriptor:te,getOwnPropertyNames:ee,getOwnPropertySymbols:ie,getPrototypeOf:se}=Object,E=globalThis,St=E.trustedTypes,re=St?St.emptyScript:"",X=E.reactiveElementPolyfillSupport,I=(i,t)=>i,ot={toAttribute(i,t){switch(t){case Boolean:i=i?re:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Ut=(i,t)=>!Qt(i,t),Et={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:Ut};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);class B extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Et){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Xt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:o}=te(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return r==null?void 0:r.call(this)},set(n){const u=r==null?void 0:r.call(this);o.call(this,n),this.requestUpdate(t,u,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Et}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const t=se(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const e=this.properties,s=[...ee(e),...ie(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(At(r))}else t!==void 0&&e.push(At(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Jt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:ot).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=s.getPropertyOptions(r),u=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:ot;this._$Em=r,this[r]=u.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??Ut)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,n]of r)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[I("elementProperties")]=new Map,B[I("finalized")]=new Map,X==null||X({ReactiveElement:B}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,W=P.trustedTypes,kt=W?W.createPolicy("lit-html",{createHTML:i=>i}):void 0,Nt="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,It="?"+S,oe=`<${It}>`,F=document,z=()=>F.createComment(""),H=i=>i===null||typeof i!="object"&&typeof i!="function",xt=Array.isArray,ne=i=>xt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",tt=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ct=/-->/g,Tt=/>/g,C=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mt=/'/g,Ft=/"/g,Pt=/^(?:script|style|textarea|title)$/i,ae=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),m=ae(1),A=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Rt=new WeakMap,M=F.createTreeWalker(F,129);function Vt(i,t){if(!xt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return kt!==void 0?kt.createHTML(t):t}const le=(i,t)=>{const e=i.length-1,s=[];let r,o=t===2?"<svg>":t===3?"<math>":"",n=U;for(let u=0;u<e;u++){const l=i[u];let c,_,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,_=n.exec(l),_!==null);)p=n.lastIndex,n===U?_[1]==="!--"?n=Ct:_[1]!==void 0?n=Tt:_[2]!==void 0?(Pt.test(_[2])&&(r=RegExp("</"+_[2],"g")),n=C):_[3]!==void 0&&(n=C):n===C?_[0]===">"?(n=r??U,d=-1):_[1]===void 0?d=-2:(d=n.lastIndex-_[2].length,c=_[1],n=_[3]===void 0?C:_[3]==='"'?Ft:Mt):n===Ft||n===Mt?n=C:n===Ct||n===Tt?n=U:(n=C,r=void 0);const f=n===C&&i[u+1].startsWith("/>")?" ":"";o+=n===U?l+oe:d>=0?(s.push(c),l.slice(0,d)+Nt+l.slice(d)+S+f):l+S+(d===-2?u:f)}return[Vt(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,n=0;const u=t.length-1,l=this.parts,[c,_]=le(t,e);if(this.el=K.createElement(c,s),M.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=M.nextNode())!==null&&l.length<u;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Nt)){const p=_[n++],f=r.getAttribute(d).split(S),x=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:x[2],strings:f,ctor:x[1]==="."?de:x[1]==="?"?ue:x[1]==="@"?ce:Y}),r.removeAttribute(d)}else d.startsWith(S)&&(l.push({type:6,index:o}),r.removeAttribute(d));if(Pt.test(r.tagName)){const d=r.textContent.split(S),p=d.length-1;if(p>0){r.textContent=W?W.emptyScript:"";for(let f=0;f<p;f++)r.append(d[f],z()),M.nextNode(),l.push({type:2,index:++o});r.append(d[p],z())}}}else if(r.nodeType===8)if(r.data===It)l.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(S,d+1))!==-1;)l.push({type:7,index:o}),d+=S.length-1}o++}}static createElement(t,e){const s=F.createElement("template");return s.innerHTML=t,s}}function O(i,t,e=i,s){var n,u;if(t===A)return t;let r=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=H(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((u=r==null?void 0:r._$AO)==null||u.call(r,!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=O(i,r._$AS(i,t.values),r,s)),t}let he=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??F).importNode(e,!0);M.currentNode=r;let o=M.nextNode(),n=0,u=0,l=s[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new L(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new fe(o,this,t)),this._$AV.push(c),l=s[++u]}n!==(l==null?void 0:l.index)&&(o=M.nextNode(),n++)}return M.currentNode=F,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}};class L{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),H(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ne(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(F.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=K.createElement(Vt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(e);else{const n=new he(r,this),u=n.u(this.options);n.p(e),this.T(u),this._$AH=n}}_$AC(t){let e=Rt.get(t.strings);return e===void 0&&Rt.set(t.strings,e=new K(t)),e}k(t){xt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const o of t)r===e.length?e.push(s=new L(this.O(z()),this.O(z()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=y}_$AI(t,e=this,s,r){const o=this.strings;let n=!1;if(o===void 0)t=O(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{const u=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=O(this,u[s+l],e,l),c===A&&(c=this._$AH[l]),n||(n=!H(c)||c!==this._$AH[l]),c===y?t=y:t!==y&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}n&&!r&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class de extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}class ue extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}}class ce extends Y{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??y)===A)return;const s=this._$AH,r=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==y&&(s===y||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class fe{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const pe={I:L},et=P.litHtmlPolyfillSupport;et==null||et(K,L),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.2.1");const me=(i,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=r=new L(t.insertBefore(z(),o),o,void 0,e??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let b=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=me(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return A}};var Dt;b._$litElement$=!0,b.finalized=!0,(Dt=globalThis.litElementHydrateSupport)==null||Dt.call(globalThis,{LitElement:b});const it=globalThis.litElementPolyfillSupport;it==null||it({LitElement:b});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const a={styles:{removeDefaultButton:v`
      button {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
      }
    `},utility:{borderBox:v`
      .border-box {
        box-sizing: border-box;
      }
    `,font:v`
      .font {
        font-family: Inter, Arial, sans-serif;
        letter-spacing: 0.015em;

        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `},colors:{primary:v`#5f5cf0`},animationDurations:{formToResult:[0,220,200,90,200],resultToForm:[0,200,90,200,220],fieldEnterLeave:[0,140]}};class zt{constructor(){h(this,"_file",null);h(this,"_fileLoaded",!1);h(this,"_name","");h(this,"_isNameValid",!1);h(this,"_isFileValid",!1);h(this,"_fileValidationErrorMessage","");h(this,"_submitting",!1);h(this,"_proxy","");h(this,"_submitted",!1);h(this,"_error",!1);h(this,"_errorStatus",0);h(this,"_errorText","");h(this,"_data",null)}set proxy(t){this._proxy=t}get proxy(){return this._proxy}set file(t){this._file=t,this._fileLoaded=!1,this._validateFile()}get file(){return this._file}get isFileValid(){return this._isFileValid}get fileValidationErrorMessage(){return this._fileValidationErrorMessage}set name(t){this._name=t,this._validateName()}get name(){return this._name}set fileLoaded(t){this._fileLoaded=t}get isSubmitDisabled(){return!this._isNameValid||!this._isFileValid||!this._file||!this._fileLoaded||this._submitting}get isFileFieldDisabled(){return!this._isNameValid||this._submitting}get isNameValid(){return this._isNameValid}get isFileFilled(){return!!this._file}get isSubmitting(){return this._submitting}get isSubmitted(){return this._submitted}get error(){return this._error}get errorStatus(){return this._errorStatus}get errorText(){return this._errorText}get data(){return this._data}_validateName(){this._isNameValid=this._name!==""}_validateFile(){if(!this._file){this._fileLoaded=!1,this._isFileValid=!1,this._fileValidationErrorMessage="";return}if(this._file.size>1024){this._isFileValid=!1,this._fileValidationErrorMessage="Размер файла больше 1 КиБ";return}const t=["csv","json","txt"],e=this._file.name.split(".").pop().toLowerCase();if(!t.includes(e)){this._isFileValid=!1,this._fileValidationErrorMessage="Только csv, json, txt";return}this._isFileValid=!0,this._fileValidationErrorMessage=""}_clearResult(){this._submitted=!1,this._error=!1,this._errorStatus=0,this._errorText="",this._data=null}clearFields(){this._file=null,this._fileLoaded=!1,this._name="",this._isNameValid=!1,this._isFileValid=!1,this._fileValidationErrorMessage=""}submit(){this._clearResult(),this._submitting=!0;const t="https://file-upload-server-mc26.onrender.com/api/v1/upload",e=new FormData;return e.append("file",this._file),e.append("name",this._name),fetch(this._proxy+t,{method:"POST",body:e}).then(r=>(r.ok||(this._error=!0,this._errorStatus=r.status,this._errorText=`${r.statusText}`),this._submitted=!0,r.json())).then(r=>{this._data=r}).catch(r=>{this._error=!0,this._errorText=r.toString()}).finally(()=>{this._submitting=!1})}}class g{constructor(t){this._stageDurations=t,this._keyframeStageMap=Array(this._stageDurations.length)}setKeyframe(t,e){this._keyframeStageMap[t]=e}setKeyframes(t){for(const{keyframe:e,stage:s}of t)this.setKeyframe(s,e)}get _firstKeyframeIndex(){return this._keyframeStageMap.findIndex(t=>t)}get _lastKeyframeIndex(){return this._keyframeStageMap.findLastIndex(t=>t)}get _usedDurations(){return this._stageDurations.slice(this._firstKeyframeIndex,this._lastKeyframeIndex+1)}get totalDuration(){return this._usedDurations.reduce((t,e)=>t+e,0)}get _offsets(){let t=0;const e=[];for(const s of this._usedDurations)t+=s,e.push(t/this.totalDuration);return e}get _usedKeyframes(){return this._keyframeStageMap.slice(this._firstKeyframeIndex,this._lastKeyframeIndex+1)}get keyframesWithOffsets(){return this._usedKeyframes.map((t,e)=>({...t,offset:this._offsets[e]}))}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ge}=pe,_e=i=>i.strings===void 0,Bt=()=>document.createComment(""),N=(i,t,e)=>{var o;const s=i._$AA.parentNode,r=t===void 0?i._$AB:t._$AA;if(e===void 0){const n=s.insertBefore(Bt(),r),u=s.insertBefore(Bt(),r);e=new ge(n,u,i,i.options)}else{const n=e._$AB.nextSibling,u=e._$AM,l=u!==i;if(l){let c;(o=e._$AQ)==null||o.call(e,i),e._$AM=i,e._$AP!==void 0&&(c=i._$AU)!==u._$AU&&e._$AP(c)}if(n!==r||l){let c=e._$AA;for(;c!==n;){const _=c.nextSibling;s.insertBefore(c,r),c=_}}}return e},T=(i,t,e=i)=>(i._$AI(t,e),i),ye={},$e=(i,t=ye)=>i._$AH=t,be=i=>i._$AH,st=i=>{var s;(s=i._$AP)==null||s.call(i,!1,!0);let t=i._$AA;const e=i._$AB.nextSibling;for(;t!==e;){const r=t.nextSibling;t.remove(),t=r}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G={ATTRIBUTE:1,CHILD:2},Z=i=>(...t)=>({_$litDirective$:i,values:t});let J=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=(i,t)=>{var s;const e=i._$AN;if(e===void 0)return!1;for(const r of e)(s=r._$AO)==null||s.call(r,t,!1),V(r,t);return!0},q=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},Ht=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),we(t)}};function xe(i){this._$AN!==void 0?(q(this),this._$AM=i,Ht(this)):this._$AM=i}function ve(i,t=!1,e=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let o=e;o<s.length;o++)V(s[o],!1),q(s[o]);else s!=null&&(V(s,!1),q(s));else V(this,i)}const we=i=>{i.type==G.CHILD&&(i._$AP??(i._$AP=ve),i._$AQ??(i._$AQ=xe))};class Ae extends J{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Ht(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,r;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(r=this.disconnected)==null||r.call(this)),e&&(V(this,t),q(this))}setValue(t){if(_e(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=()=>new Se;class Se{}const rt=new WeakMap,D=Z(class extends Ae{render(i){return y}update(i,[t]){var s;const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=(s=i.options)==null?void 0:s.host,this.rt(this.ct=i.element)),y}rt(i){if(this.isConnected||(i=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=rt.get(t);e===void 0&&(e=new WeakMap,rt.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=rt.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),$=class $ extends b{constructor(){super();h(this,"_window",R());h(this,"_closeButton",R());this._fileUploadFormManager=new zt,this._fileUploadFormManager.proxy=this.proxy,this._stage=$.Stages.UPLOAD,this._animationEnabled=!1,this._initializeAnimations()}_initializeAnimations(){this._windowBeforeResult=new g(a.animationDurations.formToResult),this._windowBeforeResult.setKeyframes([{keyframe:{},stage:0},{keyframe:{},stage:1},{keyframe:{height:"310px"},stage:2}]),this._windowAfterResult=new g(a.animationDurations.formToResult),this._windowAfterResult.setKeyframes([{keyframe:{height:"230px"},stage:3}]),this._windowBeforeForm=new g(a.animationDurations.resultToForm),this._windowBeforeForm.setKeyframes([{keyframe:{},stage:0},{keyframe:{},stage:1},{keyframe:{height:"310px"},stage:2}]),this._windowAfterForm=new g(a.animationDurations.resultToForm),this._windowAfterForm.setKeyframes([{keyframe:{height:"479px"},stage:3}]),this._closeButtonLeaving=new g(a.animationDurations.formToResult),this._closeButtonLeaving.setKeyframes([{keyframe:{},stage:0},{keyframe:{transform:"translateY(100px)",opacity:"0"},stage:1}]);const e=[0,...a.animationDurations.formToResult.slice(3)];this._closeButtonIn=new g(e),this._closeButtonIn.setKeyframes([{keyframe:{transform:"translateY(100px)",opacity:"0"},stage:0},{keyframe:{transform:"translateY(70px)",opacity:"0.3"},stage:1},{keyframe:{transform:"translateY(0px)",opacity:"1"},stage:2}]),this._resultIn=new g(e),this._resultIn.setKeyframes([{keyframe:{opacity:0,transform:"scale(0)"},stage:0},{keyframe:{opacity:"0.3",transform:"scale(0.3)"},stage:1},{keyframe:{opacity:"1",transform:"scale(1)"},stage:2}]),this._resultOut=new g(a.animationDurations.resultToForm),this._resultOut.setKeyframes([{keyframe:{},stage:0},{keyframe:{opacity:"0.3",transform:"scale(0.3)"},stage:1},{keyframe:{opacity:0,transform:"scale(0)"},stage:2}]),this._formOut=new g([]);const s=[0,...a.animationDurations.resultToForm.slice(3)];this._formIn=new g(s),this._formIn.setKeyframes([{keyframe:{opacity:0,transform:"scale(0)"},stage:0},{keyframe:{opacity:"0.5",transform:"scale(0.5)"},stage:1},{keyframe:{opacity:1,transform:"scale(1)"},stage:2}])}firstUpdated(){this._animationEnabled=!0}set proxy(e){this._fileUploadFormManager.proxy=e}async _openResult(){this._stage=$.Stages.FORM_LEAVING,await this._window.value.animate(this._windowBeforeResult.keyframesWithOffsets,{duration:this._windowBeforeResult.totalDuration,fill:"forwards"}).finished,this._fileUploadFormManager.error||this._fileUploadFormManager.clearFields(),this._stage=$.Stages.RESULT_ENTERING,await this._window.value.animate(this._windowAfterResult.keyframesWithOffsets,{duration:this._windowAfterResult.totalDuration,fill:"forwards"}).finished}async _openForm(){this._stage=$.Stages.RESULT_LEAVING,await this._window.value.animate(this._windowBeforeResult.keyframesWithOffsets,{duration:this._windowBeforeResult.totalDuration,fill:"forwards"}).finished,this._stage=$.Stages.UPLOAD,await this._window.value.animate(this._windowAfterForm.keyframesWithOffsets,{duration:this._windowAfterForm.totalDuration,fill:"forwards"}).finished}_handleSubmit(e){this.requestUpdate(),e.detail.submitPromise.then(()=>this._openResult())}_handleCloseButtonClick(){this._stage===$.Stages.UPLOAD&&this._dispatchCloseEvent(),this._stage===$.Stages.RESULT_ENTERING&&this._openForm()}_dispatchCloseEvent(){const e=new CustomEvent("close",{bubbles:!0,composed:!0});this.dispatchEvent(e)}get _showForm(){return[$.Stages.UPLOAD,$.Stages.FORM_LEAVING].includes(this._stage)}get _showResult(){return[$.Stages.RESULT_ENTERING].includes(this._stage)}get _showCloseButton(){return[$.Stages.RESULT_ENTERING,$.Stages.UPLOAD].includes(this._stage)}get _backgroundState(){return this._stage===$.Stages.UPLOAD?"form":this._fileUploadFormManager.error?"error":"success"}render(){return m`
      <div ${D(this._window)} class="window border-box">
        <file-upload-background
          .state=${this._backgroundState}
        ></file-upload-background>

        <in-out-animated
          .shown=${this._showCloseButton}
          .out=${this._closeButtonLeaving}
          .in=${this._closeButtonIn}
          .animationEnabled=${this._animationEnabled}
          class="close-button"
        >
          <close-button @click=${this._handleCloseButtonClick}></close-button>
        </in-out-animated>

        <div class="content">
          <in-out-animated
            .shown=${this._showForm}
            .in=${this._formIn}
            .out=${this._formOut}
            .animationEnabled=${this._animationEnabled}
          >
            <form-file-upload
              .leaving=${this._stage===$.Stages.FORM_LEAVING}
              .formManager=${this._fileUploadFormManager}
              @submit=${this._handleSubmit}
            ></form-file-upload>
          </in-out-animated>

          <in-out-animated
            .shown=${this._showResult}
            .in=${this._resultIn}
            .out=${this._resultOut}
          >
            <upload-result
              .error=${this._fileUploadFormManager.error}
              .errorStatus=${this._fileUploadFormManager.errorStatus}
              .errorText=${this._fileUploadFormManager.errorText}
              .data=${this._fileUploadFormManager.data}
            ></upload-result>
          </in-out-animated>
        </div>
      </div>
    `}};h($,"styles",v`
    ${a.utility.borderBox}

    .window {
      position: relative;
      width: 302px;
      height: 479px;
      border-radius: 22px;
      padding-top: 42px;
      padding-right: 13px;
      padding-bottom: 12px;
      padding-left: 13px;

      display: flex;
      align-items: center;
      justify-content: center;

      overflow: hidden;
    }

    .content {
      flex-grow: 1 1 auto;
      min-width: 0;
    }

    .close-button {
      position: absolute;
      top: 11px;
      right: 12px;
    }
  `),h($,"properties",{proxy:{type:String},_fileUploadFormManager:{type:Object,state:!0},_stage:{type:String,state:!0},_animationEnabled:{type:Boolean,state:!0}}),h($,"Stages",{UPLOAD:"upload",FORM_LEAVING:"form leaving",RESULT_ENTERING:"result entering",RESULT_LEAVING:"result leaving"});let nt=$;customElements.define("file-upload",nt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=Z(class extends J{constructor(i){var t;if(super(i),i.type!==G.ATTRIBUTE||i.name!=="class"||((t=i.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var s,r;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((s=this.nt)!=null&&s.has(o))&&this.st.add(o);return this.render(t)}const e=i.element.classList;for(const o of this.st)o in t||(e.remove(o),this.st.delete(o));for(const o in t){const n=!!t[o];n===this.st.has(o)||(r=this.nt)!=null&&r.has(o)||(n?(e.add(o),this.st.add(o)):(e.remove(o),this.st.delete(o)))}return A}});class at extends b{constructor(){super();h(this,"fileInput",R());h(this,"fileStatus",R());this.disabled=!1,this.file=null,this.loading=!1,this.decreasing=!1,this.error=!1,this.errorMessage="",this._initializeAnimations()}_initializeAnimations(){this._fileStatusIn=new g(a.animationDurations.fieldEnterLeave),this._fileStatusIn.setKeyframes([{keyframe:{height:"0px"},stage:0},{keyframe:{height:"45px"},stage:1}]),this._fileStatusOut=new g(a.animationDurations.fieldEnterLeave),this._fileStatusOut.setKeyframes([{keyframe:{height:"45px"},stage:0},{keyframe:{height:"0px"},stage:1}])}handleFileSelect(e){this.fileStatus.value.startAnimation(),this.file=e.target.files[0],this.fileInput.value.value=null,this.file&&this.dispatchFileSelected()}passClickToInput(){this.shadowRoot.querySelector("input").click()}drop(e){if(e.preventDefault(),this.disabled)return;const s=e.dataTransfer.files;s.length>0&&(this.fileStatus.value.startAnimation(),this.file=s[0],this.dispatchFileSelected())}handleFileRemoveRequested(){this.clearField()}dragover(e){e.preventDefault()}dispatchFileSelected(){const e=new CustomEvent("file-selected",{detail:{file:this.file},bubbles:!0,composed:!0});this.dispatchEvent(e)}clearField(){this.fileInput.value.value=null,this.file=null,this.dispatchFileSelected()}handleAnimationCompleted(){this.dispatchFileLoaded()}dispatchFileLoaded(){const e=new CustomEvent("file-loaded",{bubbles:!0,composed:!0});this.dispatchEvent(e)}get _hint(){return this.file&&this.error?this.errorMessage||"Файл не прошел валидацию":this.loading?"Файл загружается на сервер":m`Перенесите ваш файл <br />
          в эту область`}get dropzoneClasses(){return{decreasing:this.decreasing,dropzone:!0,"border-box":!0}}render(){var e;return m`
      <div class="gapless">
        <button
          class=${k(this.dropzoneClasses)}
          @click=${this.passClickToInput}
          @drop=${this.drop}
          @dragover=${this.dragover}
          ?disabled=${this.disabled}
        >
          <docs-image
            ?rainbow=${this.loading}
            ?decreasing=${this.decreasing}
          ></docs-image>

          <p class="hint font">${this._hint}</p>
        </button>

        <in-out-animated
          .shown=${!!this.file}
          .in=${this._fileStatusIn}
          .out=${this._fileStatusOut}
        >
          <file-status
            class="top-gap"
            ?disabled=${this.disabled}
            @file-remove-requested=${this.handleFileRemoveRequested}
            @animation-completed=${this.handleAnimationCompleted}
            ${D(this.fileStatus)}
            .name=${(e=this.file)==null?void 0:e.name}
            duration="1200"
            delay="140"
            ?decreasing=${this.decreasing}
          ></file-status>
        </in-out-animated>
      </div>

      <input
        ?disabled=${this.disabled}
        type="file"
        accept=".txt,.json,.csv"
        @change=${this.handleFileSelect}
        ${D(this.fileInput)}
      />
    `}}h(at,"styles",v`
    ${a.utility.borderBox}
    ${a.utility.font}
    ${a.styles.removeDefaultButton}

    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .gapless {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
    }

    .top-gap {
      margin-top: 10px;
    }

    .dropzone {
      cursor: pointer;

      height: 257px;
      width: 100%;
      border-radius: 30px;
      padding-top: 42px;
      padding-right: 27px;
      padding-bottom: 17px;
      padding-left: 27px;

      background: #ffffff66;

      border: 1px solid #a5a5a5;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;

      transition-duration: 0.22s;
      transition-timing-function: linear;
      transition-property: width, height, border-radius, opacity;
    }

    .dropzone.decreasing {
      height: 37.5px;
      width: 40px;

      border-radius: 4.37743px;

      opacity: 0;
    }

    .dropzone:disabled {
      cursor: not-allowed;
    }

    .hint {
      padding: 0;
      margin: 0;
      color: ${a.colors.primary};

      flex-shrink: 1;
      overflow: hidden;

      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
    }

    in-out-animated {
      align-self: stretch;
    }

    input {
      display: none;
    }
  `),h(at,"properties",{loading:{type:Boolean},disabled:{type:Boolean,reflect:!0},decreasing:{type:Boolean},file:{type:Object},error:{type:Boolean},errorMessage:{type:String}});customElements.define("file-field",at);class lt extends b{constructor(){super(),this.rainbow=!1,this.decreasing=!1}render(){return m`
      <svg
        class=${k({rainbow:this.rainbow,decreasing:this.decreasing})}
        viewBox="0 0 183 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.20096 17.1661C7.117 8.46057 14.1013 1.33283 22.8067 1.2399L57.6361 0.868103C62.1924 0.819465 65.9255 4.47364 65.9741 9.02993C66.0223 13.549 69.6973 17.1882 74.2167 17.1922L159.823 17.268C168.39 17.2756 175.386 24.1203 175.58 32.6858L177.31 109.092C177.51 117.922 170.422 125.196 161.59 125.224L23.9218 125.669C15.2491 125.697 8.18038 118.718 8.09674 110.046L7.20096 17.1661Z"
          fill="currentColor"
        />
        <rect
          x="103.691"
          y="26.0571"
          width="53.9171"
          height="81.7453"
          rx="3.78598"
          transform="rotate(19.8027 103.691 26.0571)"
          fill="#F1F1F1"
        />
        <rect
          x="103.231"
          y="45.3024"
          width="20.8711"
          height="3.47852"
          transform="rotate(19.8027 103.231 45.3024)"
          fill="#454559"
        />
        <rect
          x="101.167"
          y="51.0295"
          width="34.7852"
          height="3.47852"
          transform="rotate(19.8027 101.167 51.0295)"
          fill="#454559"
        />
        <rect
          x="92.6279"
          y="74.7573"
          width="34.7852"
          height="3.47852"
          transform="rotate(19.8027 92.6279 74.7573)"
          fill="#454559"
        />
        <rect
          x="99.1084"
          y="56.7579"
          width="34.7852"
          height="3.47852"
          transform="rotate(19.8027 99.1084 56.7579)"
          fill="#454559"
        />
        <rect
          x="90.5642"
          y="80.4833"
          width="40.003"
          height="3.47852"
          transform="rotate(19.8027 90.5642 80.4833)"
          fill="#454559"
        />
        <rect
          x="97.0447"
          y="62.4852"
          width="28.6978"
          height="3.47852"
          transform="rotate(19.8027 97.0447 62.4852)"
          fill="#454559"
        />
        <rect
          x="88.5029"
          y="86.2117"
          width="28.6978"
          height="3.47852"
          transform="rotate(19.8027 88.5029 86.2117)"
          fill="#454559"
        />
        <rect
          x="22.8433"
          y="37.4419"
          width="47.2491"
          height="71.6357"
          rx="3.78598"
          transform="rotate(-20.0462 22.8433 37.4419)"
          fill="#F1F1F1"
        />
        <rect
          x="33.3396"
          y="50.6478"
          width="18.29"
          height="3.04833"
          transform="rotate(-20.0462 33.3396 50.6478)"
          fill="#454559"
        />
        <rect
          x="35.1692"
          y="55.6598"
          width="30.4833"
          height="3.04833"
          transform="rotate(-20.0462 35.1692 55.6598)"
          fill="#454559"
        />
        <rect
          x="42.7454"
          y="76.4191"
          width="30.4833"
          height="3.04833"
          transform="rotate(-20.0462 42.7454 76.4191)"
          fill="#454559"
        />
        <rect
          x="36.9966"
          y="60.6703"
          width="30.4833"
          height="3.04833"
          transform="rotate(-20.0462 36.9966 60.6703)"
          fill="#454559"
        />
        <rect
          x="44.5725"
          y="81.4309"
          width="35.0558"
          height="3.04833"
          transform="rotate(-20.0462 44.5725 81.4309)"
          fill="#454559"
        />
        <rect
          x="38.8262"
          y="65.6824"
          width="25.1487"
          height="3.04833"
          transform="rotate(-20.0462 38.8262 65.6824)"
          fill="#454559"
        />
        <rect
          x="46.4023"
          y="86.4417"
          width="25.1487"
          height="3.04833"
          transform="rotate(-20.0462 46.4023 86.4417)"
          fill="#454559"
        />
        <foreignObject x="6.53854" y="43.3" width="170.88" height="82.72"
          ><div
            xmlns="http://www.w3.org/1999/xhtml"
            style="backdrop-filter:blur(1.26px);height:100%;width:100%;border-radius:18.5px"
          ></div
        ></foreignObject>
        <g filter="url(#filter0_i_299_233)" data-figma-bg-blur-radius="2.52399">
          <path
            d="M6.53854 59.2703C6.29144 50.3789 13.4404 43.0415 22.3352 43.0572L160.386 43.3008C168.931 43.3159 175.911 50.1331 176.128 58.6762L177.406 109.142C177.63 117.987 170.537 125.286 161.689 125.316L23.7824 125.779C15.2203 125.807 8.19856 119.001 7.9607 110.442L6.53854 59.2703Z"
            fill="#2C2C2C"
            fill-opacity="0.2"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_299_233"
            x="4.00824"
            y="40.5331"
            width="175.927"
            height="87.7697"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.52399" />
            <feGaussianBlur stdDeviation="1.26199" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_299_233"
            />
          </filter>
        </defs>
      </svg>
    `}}h(lt,"styles",v`
    svg {
      color: ${a.colors.primary};
      width: 183px;
      height: 130px;

      transition-property: width, height;
      transition-duration: 0.22s;
      transition-timing-function: linear;
    }

    .decreasing {
      width: 0px;
      height: 0px;
    }

    @keyframes rainbow {
      0% {
        color: ${a.colors.primary};
      }
      14% {
        color: red;
      }
      28% {
        color: orange;
      }
      42% {
        color: yellow;
      }
      57% {
        color: green;
      }
      71% {
        color: blue;
      }
      85% {
        color: indigo;
      }
      100% {
        color: ${a.colors.primary};
      }
    }

    .rainbow {
      animation: rainbow 7s infinite;
    }
  `),h(lt,"properties",{rainbow:{type:Boolean},decreasing:{type:Boolean}});customElements.define("docs-image",lt);class ht extends b{constructor(){super(),this.disabled=!1,this.value=""}dispatchChangeEvent(t){const e=new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}handleChange(t){const e=t.target.value;this.setValue(e)}setValue(t){this.dispatchChangeEvent(t),this.value=t}clearValue(){this.setValue("")}get active(){return!!this.value}render(){return m`
      <input
        .value=${this.value}
        class="border-box font"
        type="text"
        placeholder="Название файла"
        ?disabled=${this.disabled}
        @input=${this.handleChange}
      />

      <button
        ?disabled=${!this.active}
        class=${k({"clear-button":!0,active:this.active})}
        @click=${this.clearValue}
      >
        <cross-icon></cross-icon>
      </button>
    `}}h(ht,"styles",v`
    ${a.utility.borderBox}
    ${a.styles.removeDefaultButton}
    ${a.utility.font}

    :host {
      display: block;
      position: relative;
    }

    input {
      width: 277px;
      height: 35px;
      border-radius: 10px;
      padding-top: 6px;
      padding-right: 9px;
      padding-bottom: 6px;
      padding-left: 9px;

      font-family: inherit;
      font-weight: 400;
      font-size: 17.5px;
      line-height: 21px;

      color: ${a.colors.primary};
      background: #f1f1f1;

      border: 1px solid #a5a5a5;
    }

    input::placeholder {
      color: #a5a5a5;
    }

    .clear-button {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 9px;
      right: 9px;
      color: #a5a5a5;
      cursor: not-allowed;

      transition: color 0.14s linear;
    }

    .clear-button.active {
      color: ${a.colors.primary};
      cursor: pointer;
    }
  `),h(ht,"properties",{disabled:{type:Boolean},value:{type:String}});customElements.define("text-field",ht);class dt extends b{constructor(){super();h(this,"_button",R());this.disabled=!1,this.decreasing=!1}updated(e){e.has("decreasing")&&this.decreasing&&this._startDecreasing()}_startDecreasing(){const e=new g(a.animationDurations.formToResult);e.setKeyframes([{keyframe:{},stage:0},{keyframe:{transform:"scale(0)",opacity:"0"},stage:1},{keyframe:{transform:"scale(0)",opacity:"0"},stage:2}]),this._button.value.animate(e.keyframesWithOffsets,{duration:e.totalDuration,fill:"backwards"})}render(){return m`
      <button
        class="border-box font"
        ?disabled=${this.disabled}
        ${D(this._button)}
      >
        Загрузить
      </button>
    `}}h(dt,"styles",v`
    ${a.utility.borderBox}
    ${a.styles.removeDefaultButton}
    ${a.utility.font}
    
    :host {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    button {
      cursor: pointer;

      background: ${a.colors.primary};

      color: white;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;

      width: 100%;
      height: 56px;
      border-radius: 30px;

      padding-top: 16px;
      padding-right: 86px;
      padding-bottom: 16px;
      padding-left: 86px;

      transition: background-color 0.6s linear;
      transition: width, height 0.22s linear;

      overflow: hidden;
    }

    button:disabled {
      background: #bbb9d2;

      cursor: not-allowed;
    }
  `),h(dt,"properties",{disabled:{type:Boolean},decreasing:{type:Boolean}});customElements.define("submit-button",dt);class Kt extends b{constructor(){super(),this.width=16,this.height=16}render(){return m`
      <svg
        width=${this.width}
        height=${this.height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.07102 15.5711C0.408315 14.9084 0.408313 13.8339 1.07102 13.1712L12.8133 1.42898C13.476 0.766269 14.5504 0.76627 15.2132 1.42898C15.8759 2.09169 15.8759 3.16615 15.2132 3.82885L3.4709 15.5711C2.80819 16.2338 1.73373 16.2338 1.07102 15.5711ZM1.07102 3.82886C0.408314 3.16615 0.408314 2.09169 1.07102 1.42898C1.73373 0.76627 2.80819 0.76627 3.4709 1.42898L15.2132 13.1712C15.8759 13.8339 15.8759 14.9084 15.2132 15.5711C14.5504 16.2338 13.476 16.2338 12.8133 15.5711L1.07102 3.82886Z"
          fill="currentColor"
        />
      </svg>
    `}}h(Kt,"properties",{width:{type:Number},height:{type:Number}});customElements.define("cross-icon",Kt);class ut extends b{constructor(){super();h(this,"animatedProgress",R());this.delay=0,this.duration=1e3,this.name="",this.disabled=!1,this.deacreasing=!1}startAnimation(){this.animatedProgress.value.startAnimation()}dispatchFileRemoveRequest(){const e=new CustomEvent("file-remove-requested",{bubbles:!0,composed:!0});this.dispatchEvent(e)}dispatchAnimationCompleted(){const e=new CustomEvent("animation-completed",{});this.dispatchEvent(e)}updated(e){e.has("decreasing")&&this.decreasing&&this._startDecreasing()}_startDecreasing(){const e=new g(a.animationDurations.formToResult);e.setKeyframes([{keyframe:{},stage:0},{keyframe:{opacity:"0.5"},stage:1},{keyframe:{transform:"scale(0)",opacity:"0"},stage:2}]),this.animate(e.keyframesWithOffsets,{duration:e.totalDuration,fill:"backwards"})}render(){return m`
      <div class="outline border-box">
        <div class="indicator"></div>

        <animated-progress
          ${D(this.animatedProgress)}
          .name=${this.name}
          .duration=${this.duration}
          .delay=${this.delay}
          @animation-completed=${this.dispatchAnimationCompleted}
        ></animated-progress>

        <button
          @click=${this.dispatchFileRemoveRequest}
          ?disabled=${this.disabled}
        >
          <cross-icon width="13" height="13"></cross-icon>
        </button>
      </div>
    `}}h(ut,"styles",v`
    ${a.utility.borderBox}
    ${a.styles.removeDefaultButton}

    :host {
      display: block;
    }

    .outline {
      width: 100%;
      height: 35px;
      border-radius: 10px;
      padding: 3px;
      padding-right: 13px;

      background: #f1f1f1;

      border: 1px solid #a5a5a5;

      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 14px;
    }

    button {
      cursor: pointer;
      color: ${a.colors.primary};

      padding-top: 2px;

      flex-shrink: 0;

      transition: color 0.14s linear;
    }

    button:disabled {
      cursor: not-allowed;

      color: #a5a5a5;
    }

    animated-progress {
      flex: 1 1 auto;
      min-width: 0;

      height: 100%;
    }

    .indicator {
      width: 37px;
      height: 28px;
      border-radius: 10px;

      background: ${a.colors.primary};

      flex-shrink: 0;
    }
  `),h(ut,"properties",{name:{type:String},delay:{type:Number},duration:{type:Number},disabled:{type:Boolean},decreasing:{type:Boolean}});customElements.define("file-status",ut);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt="important",Ee=" !"+jt,ke=Z(class extends J{constructor(i){var t;if(super(i),i.type!==G.ATTRIBUTE||i.name!=="style"||((t=i.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{const s=i[e];return s==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(i,[t]){const{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?e.removeProperty(s):e[s]=null);for(const s in t){const r=t[s];if(r!=null){this.ft.add(s);const o=typeof r=="string"&&r.endsWith(Ee);s.includes("-")||o?e.setProperty(s,o?r.slice(0,-11):r,o?jt:""):e[s]=r}}return A}});class ct extends b{constructor(){super(),this.duration=1e3,this.delay=0,this._started=!1}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.startAnimation()},this.delay)}startAnimation(){this._started=!0}get durationStyles(){return{"transition-duration":this.duration+"ms"}}get visualProgressClasses(){return{"visual-progress":!0,initial:!this._started,final:this._started,transition:this._started}}render(){return m`
      <div class="progress-bar border-box">
        <div
          class=${k(this.visualProgressClasses)}
          style=${ke(this.durationStyles)}
        ></div>
      </div>
    `}}h(ct,"styles",v`
    ${a.utility.borderBox}

    .progress-bar {
      width: 100%;
      height: 5px;
      border-radius: 10px;
      padding: 0.5px 1px;

      background: white;
    }

    .visual-progress {
      background: ${a.colors.primary};

      height: 4px;
      border-radius: 10px;
    }

    .initial {
      width: 3px;
    }

    .final {
      width: 100%;
    }

    .transition {
      transition-property: width;
      transition-timing-function: linear;
    }
  `),h(ct,"properties",{duration:{type:Number},delay:{type:Number},_started:{type:Boolean,state:!0}});customElements.define("progress-bar",ct);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wt(i,t,e){return i?t(i):e==null?void 0:e(i)}class ft extends b{constructor(){super(),this._progress=0,this.delay=0,this.duration=1e3,this.name="",this._animationInterval=0}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.startAnimation()},this.delay)}startAnimation(){const t=this.duration/100;this._progress=0,clearInterval(this._animationInterval),this._animationInterval=setInterval(()=>{if(this.progressCompleted){clearInterval(this._animationInterval);return}this._progress+=1},t)}get progressCompleted(){return this._progress===100}get infoClasses(){return{transition:this.progressCompleted,"info-transition":this.progressCompleted,info:!0,"initial-info":!this.progressCompleted,"finish-info":this.progressCompleted}}get nameTextInfoClasses(){return{transition:this.progressCompleted,"text-info-transition":this.progressCompleted,"name-text-info":!0,"finish-name-text-info":this.progressCompleted}}get progressTextInfoClasses(){return{transition:this.progressCompleted,"text-info-transition":this.progressCompleted,"progress-text-info":!0,"finish-progress-text-info":this.progressCompleted}}handleTransitionEnd(t){t.target===t.currentTarget&&this.dispatchAnimationCompleted()}dispatchAnimationCompleted(){const t=new CustomEvent("animation-completed",{});this.dispatchEvent(t)}render(){return m`
      <div
        class=${k(this.infoClasses)}
        @transitionend=${this.handleTransitionEnd}
      >
        <div class="text-info font">
          <span class=${k(this.nameTextInfoClasses)}>
            ${this.name}
          </span>

          <span class=${k(this.progressTextInfoClasses)}>
            ${this._progress}%
          </span>
        </div>

        ${Wt(!this.progressCompleted,()=>m`
            <progress-bar
              .duration=${this.duration}
              .delay=${this.delay}
            ></progress-bar>
          `)}
      </div>
    `}}h(ft,"styles",v`
    ${a.utility.font}

    :host {
      display: flex;
      align-items: center;
    }

    .info {
      flex: 1 1 auto;
      min-width: 0;

      display: flex;
      flex-direction: column;
      gap: 7px;
    }

    .initial-info {
      height: 100%;
    }

    .finish-info {
      height: 19px;
    }

    .text-info {
      color: ${a.colors.primary};

      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 10px;

      font-size: 10px;
      line-height: 12px;
    }

    .transition {
      transition-duration: 0.6s;
      transition-timing-function: linear;
    }

    .info-transition {
      transition-property: height;
    }

    .text-info-transition {
      transition-property: font-size, line-height;
    }

    .name-text-info {
      font-weight: 500;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      flex: 1 1 auto;
      min-width: 0;
    }

    .finish-name-text-info {
      font-size: 15.5333px;
      line-height: 19px;
    }

    .progress-text-info {
      font-weight: 400;
      flex-shrink: 0;
    }

    .finish-progress-text-info {
      font-size: 13.8462px;
      line-height: 17px;
    }
  `),h(ft,"properties",{name:{type:String},delay:{type:Number},duration:{type:Number},_progress:{type:Number,state:!0},_animationInterval:{type:Number,state:!0}});customElements.define("animated-progress",ft);class pt extends b{constructor(){super(),this.formManager=new zt,this.leaving=!1,this._nameFieldAnimationEnabled=!1,this._initializeAnimations()}_initializeAnimations(){this._nameFieldIn=new g(a.animationDurations.fieldEnterLeave),this._nameFieldIn.setKeyframes([{keyframe:{height:"0px"},stage:0},{keyframe:{height:"45px"},stage:1}]),this._nameFieldOut=new g(a.animationDurations.fieldEnterLeave),this._nameFieldOut.setKeyframes([{keyframe:{height:"45px"},stage:0},{keyframe:{height:"0px"},stage:1}])}firstUpdated(){this._nameFieldAnimationEnabled=!0}handleFileSelected(t){this.formManager.file=t.detail.file,this.requestUpdate()}handleNameChanged(t){this.formManager.name=t.detail.value,this.requestUpdate()}handleFileLoaded(){this.formManager.fileLoaded=!0,this.requestUpdate()}handleSubmit(){const t=this.formManager.submit().finally(()=>{this.requestUpdate()});this.requestUpdate(),this.dispatchSubmit(t)}dispatchSubmit(t){const e=new CustomEvent("submit",{detail:{submitPromise:t}});this.dispatchEvent(e)}get hint(){return this.formManager.file&&!this.formManager.isFileValid?"Файл не прошел валидацию":this.formManager.isNameValid?this.formManager.isSubmitting?"Файл загружается на сервер":this.formManager.isSubmitDisabled?"Перенесите ваш файл в область ниже":"Загрузите ваш файл":"Перед загрузкой дайте имя файлу"}render(){return m`
      <form>
        <upload-header ?leaving=${this.leaving}>
          <span slot="title">Загрузочное окно</span>

          <span slot="hint">${this.hint}</span>
        </upload-header>

        <!-- объедиены для присоединения промежутка к анимации текстового поля -->
        <div class="fields">
          <in-out-animated
            .shown=${!this.formManager.isFileFilled}
            .animationEnabled=${this._nameFieldAnimationEnabled}
            .in=${this._nameFieldIn}
            .out=${this._nameFieldOut}
          >
            <text-field
              class="gap"
              @value-changed=${this.handleNameChanged}
              .value=${this.formManager.name}
            ></text-field>
          </in-out-animated>

          <file-field
            @file-selected=${this.handleFileSelected}
            @file-loaded=${this.handleFileLoaded}
            ?disabled=${this.formManager.isFileFieldDisabled}
            ?loading=${this.formManager.isSubmitting}
            ?decreasing=${this.leaving}
            .file=${this.formManager.file}
            .error=${!this.formManager.isFileValid}
            .errorMessage=${this.formManager.fileValidationErrorMessage}
          ></file-field>
        </div>

        <submit-button
          @click=${this.handleSubmit}
          ?disabled=${this.formManager.isSubmitDisabled}
          .decreasing=${this.leaving}
        ></submit-button>
      </form>
    `}}h(pt,"styles",v`
    ${a.utility.font}

    :host {
      display: block;
      width: 277px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .fields {
      display: flex;
      flex-direction: column;
    }

    .gap {
      margin-bottom: 10px;
    }
  `),h(pt,"properties",{formManager:{type:Object},leaving:{type:Boolean},_nameFieldAnimationEnabled:{type:Boolean,state:!0}});customElements.define("form-file-upload",pt);class qt extends b{render(){return m`
      <button class="circle border-box">
        <cross-icon width="16" height="16"></cross-icon>
      </button>
    `}}h(qt,"styles",v`
    ${a.utility.borderBox}
    ${a.styles.removeDefaultButton}

    .circle {
      width: 34px;
      height: 34px;
      border-radius: 17px;

      cursor: pointer;

      position: relative;

      background: #ccccce47;
    }

    cross-icon {
      color: white;

      position: absolute;
      top: 9px;
      left: 9px;
    }
  `);customElements.define("close-button",qt);class mt extends b{constructor(){super();h(this,"_background",R());this.state="form",this._initial=!0,this._initializeAnimations()}_initializeAnimations(){this._formToSuccess=new g(a.animationDurations.formToResult),this._formToSuccess.setKeyframes([{keyframe:{},stage:0},{keyframe:{},stage:1},{keyframe:{},stage:2},{keyframe:{"--file-upload-background-top":a.colors.primary,"--file-upload-background-middle":"#dddcfc"},stage:3},{keyframe:{"--file-upload-background-top":a.colors.primary,"--file-upload-background-middle":"#8f8df4"},stage:4}]),this._formToError=new g(a.animationDurations.formToResult),this._formToError.setKeyframes([{keyframe:{},stage:0},{keyframe:{},stage:1},{keyframe:{},stage:2},{keyframe:{"--file-upload-background-top":"#f05c5c","--file-upload-background-middle":"#dddcfc"},stage:3},{keyframe:{"--file-upload-background-top":"#f05c5c","--file-upload-background-middle":"#8f8df4"},stage:4}]),this._toForm=new g(a.animationDurations.resultToForm),this._toForm.setKeyframes([{keyframe:{},stage:0},{keyframe:{"--file-upload-background-top":a.colors.primary,"--file-upload-background-middle":"#dddcfc"},stage:1}])}updated(e){e.has("state")&&!this._initial&&this.startAnimation(),this._initial&&(this._initial=!1)}startAnimation(){const s={success:this._formToSuccess,error:this._formToError,form:this._toForm}[this.state];this._background.value.animate(s.keyframesWithOffsets,{duration:s.totalDuration,fill:"forwards"})}render(){return m` <div class="background" ${D(this._background)}></div> `}}h(mt,"styles",v`
    :host {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      z-index: -1;
    }

    .background {
      position: absolute;
      width: 100%;
      height: 479px;

      background: linear-gradient(
        180deg,
        var(--file-upload-background-top) 0%,
        var(--file-upload-background-middle) 42.5%,
        #ffffff 100%
      );

      --file-upload-background-top: ${a.colors.primary};
      --file-upload-background-middle: #dddcfc;
    }
  `),h(mt,"properties",{state:{type:String},_initial:{type:Boolean,state:!0}});customElements.define("file-upload-background",mt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=(i,t,e)=>{const s=new Map;for(let r=t;r<=e;r++)s.set(i[r],r);return s},Ce=Z(class extends J{constructor(i){if(super(i),i.type!==G.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);const r=[],o=[];let n=0;for(const u of i)r[n]=s?s(u,n):n,o[n]=e(u,n),n++;return{values:o,keys:r}}render(i,t,e){return this.dt(i,t,e).values}update(i,[t,e,s]){const r=be(i),{values:o,keys:n}=this.dt(t,e,s);if(!Array.isArray(r))return this.ut=n,o;const u=this.ut??(this.ut=[]),l=[];let c,_,d=0,p=r.length-1,f=0,x=o.length-1;for(;d<=p&&f<=x;)if(r[d]===null)d++;else if(r[p]===null)p--;else if(u[d]===n[f])l[f]=T(r[d],o[f]),d++,f++;else if(u[p]===n[x])l[x]=T(r[p],o[x]),p--,x--;else if(u[d]===n[x])l[x]=T(r[d],o[x]),N(i,l[x+1],r[d]),d++,x--;else if(u[p]===n[f])l[f]=T(r[p],o[f]),N(i,r[d],r[p]),p--,f++;else if(c===void 0&&(c=Ot(n,f,x),_=Ot(u,d,p)),c.has(u[d]))if(c.has(u[p])){const w=_.get(n[f]),Q=w!==void 0?r[w]:null;if(Q===null){const vt=N(i,r[d]);T(vt,o[f]),l[f]=vt}else l[f]=T(Q,o[f]),N(i,r[d],Q),r[w]=null;f++}else st(r[p]),p--;else st(r[d]),d++;for(;f<=x;){const w=N(i,l[x+1]);T(w,o[f]),l[f++]=w}for(;d<=p;){const w=r[d++];w!==null&&st(w)}return this.ut=n,$e(i,l),A}});class gt extends b{constructor(){super(),this.error=!1,this.errorStatus=0,this.errorText="",this.data=null}get _title(){return this.error?"Ошибка в загрузке файла":"Файл успешно загружен"}get _errorMessage(){return this.data?m`<br />"${this.data.error}"`:m``}get _errorHeader(){const t={400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found",500:"Internal Server Error"};let e=this.errorText||t[this.errorStatus]||"";return m`${this.errorStatus} ${e}`}get _renderData(){return this.data?m`${Ce(Object.entries(this.data),([t])=>t,([t,e])=>{let s=e;return t==="timestamp"&&(s=new Date(e).toLocaleTimeString("ru-RU")),m`${t}: ${s}<br />`})}`:m``}render(){return m`
      <upload-header>
        <span slot="title">${this._title}</span>

        <div slot="hint" class=${k({"text-center":this.error})}>
          ${Wt(this.error,()=>m`Error: ${this._errorHeader}${this._errorMessage}`,()=>m`${this._renderData}`)}
        </div>
      </upload-header>
    `}}h(gt,"styles",v`
    :host {
      height: 176px;
      width: 100%;

      display: flex;
    }

    .text-center {
      text-align: center;
    }
  `),h(gt,"properties",{error:{type:Boolean},errorStatus:{type:Number},errorText:{type:String},data:{type:Object}});customElements.define("upload-result",gt);class _t extends b{constructor(){super(),this.leaving=!1}updated(t){t.has("leaving")&&this.leaving&&this._startLeaving()}_startLeaving(){const t=new g(a.animationDurations.formToResult);t.setKeyframes([{keyframe:{},stage:0},{keyframe:{opacity:"0.5"},stage:1},{keyframe:{transform:"scale(0)",opacity:"0"},stage:2}]),this.animate(t.keyframesWithOffsets,{duration:t.totalDuration,fill:"backwards"})}render(){return m`
      <header class="font">
        <h2 class="title"><slot name="title"></slot></h2>

        <p class="hint"><slot name="hint"></slot></p>
      </header>
    `}}h(_t,"styles",v`
    ${a.utility.font}

    :host {
      width: 100%;
    }

    header {
      color: white;

      display: flex;
      flex-direction: column;
      gap: 7px;
      align-items: center;
    }

    .title {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      padding: 0;
      margin: 0;
    }

    .hint {
      font-weight: 200;
      font-size: 14px;
      line-height: 17px;
      padding: 0;
      margin: 0;

      /* 101 чтобы не появлялся скролл при пограничных значениях */
      max-width: 101%;

      overflow: auto;

      white-space: nowrap;
    }
  `),h(_t,"properties",{leaving:{type:Boolean}});customElements.define("upload-header",_t);class yt extends b{constructor(){super(),this.animationEnabled=!0,this.shown=!0}updated(t){t.has("shown")&&this._handleShownToggle()}async _hide(){this.style.overflow="hidden",await this._playAnimation(this.out),this.style.overflow="visible",this.style.display="none"}async _show(){this.style.display="block",this.style.overflow="hidden",await this._playAnimation(this.in),this.style.overflow="visible"}async _playAnimation(t){if(this.animationEnabled)return await this.animate(t.keyframesWithOffsets,{duration:t.totalDuration,fill:"forwards"}).finished}_handleShownToggle(){this.shown?this._show():this._hide()}render(){return m` <slot></slot> `}}h(yt,"styles",v`
    :host {
      display: none;
    }
  `),h(yt,"properties",{animationEnabled:{type:Boolean},shown:{type:Boolean},in:{type:g},out:{type:g}});customElements.define("in-out-animated",yt);
