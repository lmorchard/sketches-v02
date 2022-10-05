var Zg=Object.defineProperty;var Jg=(t,r,e)=>r in t?Zg(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var We=(t,r,e)=>(Jg(t,typeof r!="symbol"?r+"":r,e),e);function Qg(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){return r.reject(e)})})}function t0(t){var r=this;return new r(function(e,n){if(!(t&&typeof t.length<"u"))return n(new TypeError(typeof t+" "+t+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var i=Array.prototype.slice.call(t);if(i.length===0)return e([]);var o=i.length;function s(h,f){if(f&&(typeof f=="object"||typeof f=="function")){var d=f.then;if(typeof d=="function"){d.call(f,function(v){s(h,v)},function(v){i[h]={status:"rejected",reason:v},--o===0&&e(i)});return}}i[h]={status:"fulfilled",value:f},--o===0&&e(i)}for(var l=0;l<i.length;l++)s(l,i[l])})}var e0=setTimeout;function ap(t){return Boolean(t&&typeof t.length<"u")}function r0(){}function n0(t,r){return function(){t.apply(r,arguments)}}function St(t){if(!(this instanceof St))throw new TypeError("Promises must be constructed via new");if(typeof t!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],up(t,this)}function lp(t,r){for(;t._state===3;)t=t._value;if(t._state===0){t._deferreds.push(r);return}t._handled=!0,St._immediateFn(function(){var e=t._state===1?r.onFulfilled:r.onRejected;if(e===null){(t._state===1?fa:Qn)(r.promise,t._value);return}var n;try{n=e(t._value)}catch(i){Qn(r.promise,i);return}fa(r.promise,n)})}function fa(t,r){try{if(r===t)throw new TypeError("A promise cannot be resolved with itself.");if(r&&(typeof r=="object"||typeof r=="function")){var e=r.then;if(r instanceof St){t._state=3,t._value=r,da(t);return}else if(typeof e=="function"){up(n0(e,r),t);return}}t._state=1,t._value=r,da(t)}catch(n){Qn(t,n)}}function Qn(t,r){t._state=2,t._value=r,da(t)}function da(t){t._state===2&&t._deferreds.length===0&&St._immediateFn(function(){t._handled||St._unhandledRejectionFn(t._value)});for(var r=0,e=t._deferreds.length;r<e;r++)lp(t,t._deferreds[r]);t._deferreds=null}function i0(t,r,e){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof r=="function"?r:null,this.promise=e}function up(t,r){var e=!1;try{t(function(n){e||(e=!0,fa(r,n))},function(n){e||(e=!0,Qn(r,n))})}catch(n){if(e)return;e=!0,Qn(r,n)}}St.prototype.catch=function(t){return this.then(null,t)};St.prototype.then=function(t,r){var e=new this.constructor(r0);return lp(this,new i0(t,r,e)),e};St.prototype.finally=Qg;St.all=function(t){return new St(function(r,e){if(!ap(t))return e(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(t);if(n.length===0)return r([]);var i=n.length;function o(l,h){try{if(h&&(typeof h=="object"||typeof h=="function")){var f=h.then;if(typeof f=="function"){f.call(h,function(d){o(l,d)},e);return}}n[l]=h,--i===0&&r(n)}catch(d){e(d)}}for(var s=0;s<n.length;s++)o(s,n[s])})};St.allSettled=t0;St.resolve=function(t){return t&&typeof t=="object"&&t.constructor===St?t:new St(function(r){r(t)})};St.reject=function(t){return new St(function(r,e){e(t)})};St.race=function(t){return new St(function(r,e){if(!ap(t))return e(new TypeError("Promise.race accepts an array"));for(var n=0,i=t.length;n<i;n++)St.resolve(t[n]).then(r,e)})};St._immediateFn=typeof setImmediate=="function"&&function(t){setImmediate(t)}||function(t){e0(t,0)};St._unhandledRejectionFn=function(r){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",r)};var Zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Uh=Object.getOwnPropertySymbols,o0=Object.prototype.hasOwnProperty,s0=Object.prototype.propertyIsEnumerable;function a0(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function l0(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var r={},e=0;e<10;e++)r["_"+String.fromCharCode(e)]=e;var n=Object.getOwnPropertyNames(r).map(function(o){return r[o]});if(n.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var u0=l0()?Object.assign:function(t,r){for(var e,n=a0(t),i,o=1;o<arguments.length;o++){e=Object(arguments[o]);for(var s in e)o0.call(e,s)&&(n[s]=e[s]);if(Uh){i=Uh(e);for(var l=0;l<i.length;l++)s0.call(e,i[l])&&(n[i[l]]=e[i[l]])}}return n};/*!
 * @pixi/polyfill - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/polyfill is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */typeof globalThis>"u"&&(typeof self<"u"?self.globalThis=self:typeof global<"u"&&(global.globalThis=global));globalThis.Promise||(globalThis.Promise=St);Object.assign||(Object.assign=u0);var h0=16;Date.now&&Date.prototype.getTime||(Date.now=function(){return new Date().getTime()});if(!(globalThis.performance&&globalThis.performance.now)){var c0=Date.now();globalThis.performance||(globalThis.performance={}),globalThis.performance.now=function(){return Date.now()-c0}}var As=Date.now(),Lh=["ms","moz","webkit","o"];for(var Ns=0;Ns<Lh.length&&!globalThis.requestAnimationFrame;++Ns){var Os=Lh[Ns];globalThis.requestAnimationFrame=globalThis[Os+"RequestAnimationFrame"],globalThis.cancelAnimationFrame=globalThis[Os+"CancelAnimationFrame"]||globalThis[Os+"CancelRequestAnimationFrame"]}globalThis.requestAnimationFrame||(globalThis.requestAnimationFrame=function(t){if(typeof t!="function")throw new TypeError(t+"is not a function");var r=Date.now(),e=h0+As-r;return e<0&&(e=0),As=r,globalThis.self.setTimeout(function(){As=Date.now(),t(performance.now())},e)});globalThis.cancelAnimationFrame||(globalThis.cancelAnimationFrame=function(t){return clearTimeout(t)});Math.sign||(Math.sign=function(r){return r=Number(r),r===0||isNaN(r)?r:r>0?1:-1});Number.isInteger||(Number.isInteger=function(r){return typeof r=="number"&&isFinite(r)&&Math.floor(r)===r});globalThis.ArrayBuffer||(globalThis.ArrayBuffer=Array);globalThis.Float32Array||(globalThis.Float32Array=Array);globalThis.Uint32Array||(globalThis.Uint32Array=Array);globalThis.Uint16Array||(globalThis.Uint16Array=Array);globalThis.Uint8Array||(globalThis.Uint8Array=Array);globalThis.Int32Array||(globalThis.Int32Array=Array);/*!
 * @pixi/settings - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/settings is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*!
 * @pixi/constants - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Fh;(function(t){t[t.WEBGL_LEGACY=0]="WEBGL_LEGACY",t[t.WEBGL=1]="WEBGL",t[t.WEBGL2=2]="WEBGL2"})(Fh||(Fh={}));var Mh;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.WEBGL=1]="WEBGL",t[t.CANVAS=2]="CANVAS"})(Mh||(Mh={}));var kh;(function(t){t[t.COLOR=16384]="COLOR",t[t.DEPTH=256]="DEPTH",t[t.STENCIL=1024]="STENCIL"})(kh||(kh={}));var Bh;(function(t){t[t.NORMAL=0]="NORMAL",t[t.ADD=1]="ADD",t[t.MULTIPLY=2]="MULTIPLY",t[t.SCREEN=3]="SCREEN",t[t.OVERLAY=4]="OVERLAY",t[t.DARKEN=5]="DARKEN",t[t.LIGHTEN=6]="LIGHTEN",t[t.COLOR_DODGE=7]="COLOR_DODGE",t[t.COLOR_BURN=8]="COLOR_BURN",t[t.HARD_LIGHT=9]="HARD_LIGHT",t[t.SOFT_LIGHT=10]="SOFT_LIGHT",t[t.DIFFERENCE=11]="DIFFERENCE",t[t.EXCLUSION=12]="EXCLUSION",t[t.HUE=13]="HUE",t[t.SATURATION=14]="SATURATION",t[t.COLOR=15]="COLOR",t[t.LUMINOSITY=16]="LUMINOSITY",t[t.NORMAL_NPM=17]="NORMAL_NPM",t[t.ADD_NPM=18]="ADD_NPM",t[t.SCREEN_NPM=19]="SCREEN_NPM",t[t.NONE=20]="NONE",t[t.SRC_OVER=0]="SRC_OVER",t[t.SRC_IN=21]="SRC_IN",t[t.SRC_OUT=22]="SRC_OUT",t[t.SRC_ATOP=23]="SRC_ATOP",t[t.DST_OVER=24]="DST_OVER",t[t.DST_IN=25]="DST_IN",t[t.DST_OUT=26]="DST_OUT",t[t.DST_ATOP=27]="DST_ATOP",t[t.ERASE=26]="ERASE",t[t.SUBTRACT=28]="SUBTRACT",t[t.XOR=29]="XOR"})(Bh||(Bh={}));var Gh;(function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Gh||(Gh={}));var Dh;(function(t){t[t.RGBA=6408]="RGBA",t[t.RGB=6407]="RGB",t[t.RG=33319]="RG",t[t.RED=6403]="RED",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.ALPHA=6406]="ALPHA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(Dh||(Dh={}));var Vh;(function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Vh||(Vh={}));var jh;(function(t){t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.BYTE=5120]="BYTE",t[t.SHORT=5122]="SHORT",t[t.INT=5124]="INT",t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",t[t.HALF_FLOAT=36193]="HALF_FLOAT"})(jh||(jh={}));var Hh;(function(t){t[t.FLOAT=0]="FLOAT",t[t.INT=1]="INT",t[t.UINT=2]="UINT"})(Hh||(Hh={}));var pa;(function(t){t[t.NEAREST=0]="NEAREST",t[t.LINEAR=1]="LINEAR"})(pa||(pa={}));var va;(function(t){t[t.CLAMP=33071]="CLAMP",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(va||(va={}));var ma;(function(t){t[t.OFF=0]="OFF",t[t.POW2=1]="POW2",t[t.ON=2]="ON",t[t.ON_MANUAL=3]="ON_MANUAL"})(ma||(ma={}));var Xh;(function(t){t[t.NPM=0]="NPM",t[t.UNPACK=1]="UNPACK",t[t.PMA=2]="PMA",t[t.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",t[t.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",t[t.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",t[t.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(Xh||(Xh={}));var zh;(function(t){t[t.NO=0]="NO",t[t.YES=1]="YES",t[t.AUTO=2]="AUTO",t[t.BLEND=0]="BLEND",t[t.CLEAR=1]="CLEAR",t[t.BLIT=2]="BLIT"})(zh||(zh={}));var _a;(function(t){t[t.AUTO=0]="AUTO",t[t.MANUAL=1]="MANUAL"})(_a||(_a={}));var Wn;(function(t){t.LOW="lowp",t.MEDIUM="mediump",t.HIGH="highp"})(Wn||(Wn={}));var $h;(function(t){t[t.NONE=0]="NONE",t[t.SCISSOR=1]="SCISSOR",t[t.STENCIL=2]="STENCIL",t[t.SPRITE=3]="SPRITE",t[t.COLOR=4]="COLOR"})($h||($h={}));var Wh;(function(t){t[t.RED=1]="RED",t[t.GREEN=2]="GREEN",t[t.BLUE=4]="BLUE",t[t.ALPHA=8]="ALPHA"})(Wh||(Wh={}));var ga;(function(t){t[t.NONE=0]="NONE",t[t.LOW=2]="LOW",t[t.MEDIUM=4]="MEDIUM",t[t.HIGH=8]="HIGH"})(ga||(ga={}));var qh;(function(t){t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(qh||(qh={}));var f0={createCanvas:function(t,r){var e=document.createElement("canvas");return e.width=t,e.height=r,e},getWebGLRenderingContext:function(){return WebGLRenderingContext},getNavigator:function(){return navigator},getBaseUrl:function(){var t;return(t=document.baseURI)!==null&&t!==void 0?t:window.location.href},fetch:function(t,r){return fetch(t,r)}},Ss=/iPhone/i,Yh=/iPod/i,Kh=/iPad/i,Zh=/\biOS-universal(?:.+)Mac\b/i,Us=/\bAndroid(?:.+)Mobile\b/i,Jh=/Android/i,Br=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,ki=/Silk/i,Ie=/Windows Phone/i,Qh=/\bWindows(?:.+)ARM\b/i,tc=/BlackBerry/i,ec=/BB10/i,rc=/Opera Mini/i,nc=/\b(CriOS|Chrome)(?:.+)Mobile/i,ic=/Mobile(?:.+)Firefox\b/i,oc=function(t){return typeof t<"u"&&t.platform==="MacIntel"&&typeof t.maxTouchPoints=="number"&&t.maxTouchPoints>1&&typeof MSStream>"u"};function d0(t){return function(r){return r.test(t)}}function p0(t){var r={userAgent:"",platform:"",maxTouchPoints:0};!t&&typeof navigator<"u"?r={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof t=="string"?r.userAgent=t:t&&t.userAgent&&(r={userAgent:t.userAgent,platform:t.platform,maxTouchPoints:t.maxTouchPoints||0});var e=r.userAgent,n=e.split("[FBAN");typeof n[1]<"u"&&(e=n[0]),n=e.split("Twitter"),typeof n[1]<"u"&&(e=n[0]);var i=d0(e),o={apple:{phone:i(Ss)&&!i(Ie),ipod:i(Yh),tablet:!i(Ss)&&(i(Kh)||oc(r))&&!i(Ie),universal:i(Zh),device:(i(Ss)||i(Yh)||i(Kh)||i(Zh)||oc(r))&&!i(Ie)},amazon:{phone:i(Br),tablet:!i(Br)&&i(ki),device:i(Br)||i(ki)},android:{phone:!i(Ie)&&i(Br)||!i(Ie)&&i(Us),tablet:!i(Ie)&&!i(Br)&&!i(Us)&&(i(ki)||i(Jh)),device:!i(Ie)&&(i(Br)||i(ki)||i(Us)||i(Jh))||i(/\bokhttp\b/i)},windows:{phone:i(Ie),tablet:i(Qh),device:i(Ie)||i(Qh)},other:{blackberry:i(tc),blackberry10:i(ec),opera:i(rc),firefox:i(ic),chrome:i(nc),device:i(tc)||i(ec)||i(rc)||i(ic)||i(nc)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}var me=p0(globalThis.navigator);function v0(){return!me.apple.device}function m0(t){var r=!0;if(me.tablet||me.phone){if(me.apple.device){var e=navigator.userAgent.match(/OS (\d+)_(\d+)?/);if(e){var n=parseInt(e[1],10);n<11&&(r=!1)}}if(me.android.device){var e=navigator.userAgent.match(/Android\s([0-9.]*)/);if(e){var n=parseInt(e[1],10);n<7&&(r=!1)}}}return r?t:4}var X={ADAPTER:f0,MIPMAP_TEXTURES:ma.POW2,ANISOTROPIC_LEVEL:0,RESOLUTION:1,FILTER_RESOLUTION:1,FILTER_MULTISAMPLE:ga.NONE,SPRITE_MAX_TEXTURES:m0(32),SPRITE_BATCH_SIZE:4096,RENDER_OPTIONS:{view:null,antialias:!1,autoDensity:!1,backgroundColor:0,backgroundAlpha:1,useContextAlpha:!0,clearBeforeRender:!0,preserveDrawingBuffer:!1,width:800,height:600,legacy:!1},GC_MODE:_a.AUTO,GC_MAX_IDLE:60*60,GC_MAX_CHECK_COUNT:60*10,WRAP_MODE:va.CLAMP,SCALE_MODE:pa.LINEAR,PRECISION_VERTEX:Wn.HIGH,PRECISION_FRAGMENT:me.apple.device?Wn.HIGH:Wn.MEDIUM,CAN_UPLOAD_SAME_BUFFER:v0(),CREATE_IMAGE_BITMAP:!1,ROUND_PIXELS:!1},hp={exports:{}};(function(t){var r=Object.prototype.hasOwnProperty,e="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(e=!1));function i(h,f,d){this.fn=h,this.context=f,this.once=d||!1}function o(h,f,d,v,m){if(typeof d!="function")throw new TypeError("The listener must be a function");var _=new i(d,v||h,m),g=e?e+f:f;return h._events[g]?h._events[g].fn?h._events[g]=[h._events[g],_]:h._events[g].push(_):(h._events[g]=_,h._eventsCount++),h}function s(h,f){--h._eventsCount===0?h._events=new n:delete h._events[f]}function l(){this._events=new n,this._eventsCount=0}l.prototype.eventNames=function(){var f=[],d,v;if(this._eventsCount===0)return f;for(v in d=this._events)r.call(d,v)&&f.push(e?v.slice(1):v);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(d)):f},l.prototype.listeners=function(f){var d=e?e+f:f,v=this._events[d];if(!v)return[];if(v.fn)return[v.fn];for(var m=0,_=v.length,g=new Array(_);m<_;m++)g[m]=v[m].fn;return g},l.prototype.listenerCount=function(f){var d=e?e+f:f,v=this._events[d];return v?v.fn?1:v.length:0},l.prototype.emit=function(f,d,v,m,_,g){var b=e?e+f:f;if(!this._events[b])return!1;var y=this._events[b],w=arguments.length,C,T;if(y.fn){switch(y.once&&this.removeListener(f,y.fn,void 0,!0),w){case 1:return y.fn.call(y.context),!0;case 2:return y.fn.call(y.context,d),!0;case 3:return y.fn.call(y.context,d,v),!0;case 4:return y.fn.call(y.context,d,v,m),!0;case 5:return y.fn.call(y.context,d,v,m,_),!0;case 6:return y.fn.call(y.context,d,v,m,_,g),!0}for(T=1,C=new Array(w-1);T<w;T++)C[T-1]=arguments[T];y.fn.apply(y.context,C)}else{var I=y.length,P;for(T=0;T<I;T++)switch(y[T].once&&this.removeListener(f,y[T].fn,void 0,!0),w){case 1:y[T].fn.call(y[T].context);break;case 2:y[T].fn.call(y[T].context,d);break;case 3:y[T].fn.call(y[T].context,d,v);break;case 4:y[T].fn.call(y[T].context,d,v,m);break;default:if(!C)for(P=1,C=new Array(w-1);P<w;P++)C[P-1]=arguments[P];y[T].fn.apply(y[T].context,C)}}return!0},l.prototype.on=function(f,d,v){return o(this,f,d,v,!1)},l.prototype.once=function(f,d,v){return o(this,f,d,v,!0)},l.prototype.removeListener=function(f,d,v,m){var _=e?e+f:f;if(!this._events[_])return this;if(!d)return s(this,_),this;var g=this._events[_];if(g.fn)g.fn===d&&(!m||g.once)&&(!v||g.context===v)&&s(this,_);else{for(var b=0,y=[],w=g.length;b<w;b++)(g[b].fn!==d||m&&!g[b].once||v&&g[b].context!==v)&&y.push(g[b]);y.length?this._events[_]=y.length===1?y[0]:y:s(this,_)}return this},l.prototype.removeAllListeners=function(f){var d;return f?(d=e?e+f:f,this._events[d]&&s(this,d)):(this._events=new n,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=e,l.EventEmitter=l,t.exports=l})(hp);const yi=hp.exports;var bi={exports:{}};bi.exports=Mo;bi.exports.default=Mo;function Mo(t,r,e){e=e||2;var n=r&&r.length,i=n?r[0]*e:t.length,o=cp(t,0,i,e,!0),s=[];if(!o||o.next===o.prev)return s;var l,h,f,d,v,m,_;if(n&&(o=x0(t,r,o,e)),t.length>80*e){l=f=t[0],h=d=t[1];for(var g=e;g<i;g+=e)v=t[g],m=t[g+1],v<l&&(l=v),m<h&&(h=m),v>f&&(f=v),m>d&&(d=m);_=Math.max(f-l,d-h),_=_!==0?32767/_:0}return ti(o,s,e,l,h,_,0),s}function cp(t,r,e,n,i){var o,s;if(i===xa(t,r,e,n)>0)for(o=r;o<e;o+=n)s=sc(o,t[o],t[o+1],s);else for(o=e-n;o>=r;o-=n)s=sc(o,t[o],t[o+1],s);return s&&ko(s,s.next)&&(ri(s),s=s.next),s}function wr(t,r){if(!t)return t;r||(r=t);var e=t,n;do if(n=!1,!e.steiner&&(ko(e,e.next)||Nt(e.prev,e,e.next)===0)){if(ri(e),e=r=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==r);return r}function ti(t,r,e,n,i,o,s){if(!!t){!s&&o&&P0(t,n,i,o);for(var l=t,h,f;t.prev!==t.next;){if(h=t.prev,f=t.next,o?g0(t,n,i,o):_0(t)){r.push(h.i/e|0),r.push(t.i/e|0),r.push(f.i/e|0),ri(t),t=f.next,l=f.next;continue}if(t=f,t===l){s?s===1?(t=y0(wr(t),r,e),ti(t,r,e,n,i,o,2)):s===2&&b0(t,r,e,n,i,o):ti(wr(t),r,e,n,i,o,1);break}}}}function _0(t){var r=t.prev,e=t,n=t.next;if(Nt(r,e,n)>=0)return!1;for(var i=r.x,o=e.x,s=n.x,l=r.y,h=e.y,f=n.y,d=i<o?i<s?i:s:o<s?o:s,v=l<h?l<f?l:f:h<f?h:f,m=i>o?i>s?i:s:o>s?o:s,_=l>h?l>f?l:f:h>f?h:f,g=n.next;g!==r;){if(g.x>=d&&g.x<=m&&g.y>=v&&g.y<=_&&$r(i,l,o,h,s,f,g.x,g.y)&&Nt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function g0(t,r,e,n){var i=t.prev,o=t,s=t.next;if(Nt(i,o,s)>=0)return!1;for(var l=i.x,h=o.x,f=s.x,d=i.y,v=o.y,m=s.y,_=l<h?l<f?l:f:h<f?h:f,g=d<v?d<m?d:m:v<m?v:m,b=l>h?l>f?l:f:h>f?h:f,y=d>v?d>m?d:m:v>m?v:m,w=ya(_,g,r,e,n),C=ya(b,y,r,e,n),T=t.prevZ,I=t.nextZ;T&&T.z>=w&&I&&I.z<=C;){if(T.x>=_&&T.x<=b&&T.y>=g&&T.y<=y&&T!==i&&T!==s&&$r(l,d,h,v,f,m,T.x,T.y)&&Nt(T.prev,T,T.next)>=0||(T=T.prevZ,I.x>=_&&I.x<=b&&I.y>=g&&I.y<=y&&I!==i&&I!==s&&$r(l,d,h,v,f,m,I.x,I.y)&&Nt(I.prev,I,I.next)>=0))return!1;I=I.nextZ}for(;T&&T.z>=w;){if(T.x>=_&&T.x<=b&&T.y>=g&&T.y<=y&&T!==i&&T!==s&&$r(l,d,h,v,f,m,T.x,T.y)&&Nt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;I&&I.z<=C;){if(I.x>=_&&I.x<=b&&I.y>=g&&I.y<=y&&I!==i&&I!==s&&$r(l,d,h,v,f,m,I.x,I.y)&&Nt(I.prev,I,I.next)>=0)return!1;I=I.nextZ}return!0}function y0(t,r,e){var n=t;do{var i=n.prev,o=n.next.next;!ko(i,o)&&fp(i,n,n.next,o)&&ei(i,o)&&ei(o,i)&&(r.push(i.i/e|0),r.push(n.i/e|0),r.push(o.i/e|0),ri(n),ri(n.next),n=t=o),n=n.next}while(n!==t);return wr(n)}function b0(t,r,e,n,i,o){var s=t;do{for(var l=s.next.next;l!==s.prev;){if(s.i!==l.i&&A0(s,l)){var h=dp(s,l);s=wr(s,s.next),h=wr(h,h.next),ti(s,r,e,n,i,o,0),ti(h,r,e,n,i,o,0);return}l=l.next}s=s.next}while(s!==t)}function x0(t,r,e,n){var i=[],o,s,l,h,f;for(o=0,s=r.length;o<s;o++)l=r[o]*n,h=o<s-1?r[o+1]*n:t.length,f=cp(t,l,h,n,!1),f===f.next&&(f.steiner=!0),i.push(R0(f));for(i.sort(w0),o=0;o<i.length;o++)e=T0(i[o],e);return e}function w0(t,r){return t.x-r.x}function T0(t,r){var e=C0(t,r);if(!e)return r;var n=dp(e,t);return wr(n,n.next),wr(e,e.next)}function C0(t,r){var e=r,n=t.x,i=t.y,o=-1/0,s;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){var l=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(l<=n&&l>o&&(o=l,s=e.x<e.next.x?e:e.next,l===n))return s}e=e.next}while(e!==r);if(!s)return null;var h=s,f=s.x,d=s.y,v=1/0,m;e=s;do n>=e.x&&e.x>=f&&n!==e.x&&$r(i<d?n:o,i,f,d,i<d?o:n,i,e.x,e.y)&&(m=Math.abs(i-e.y)/(n-e.x),ei(e,t)&&(m<v||m===v&&(e.x>s.x||e.x===s.x&&E0(s,e)))&&(s=e,v=m)),e=e.next;while(e!==h);return s}function E0(t,r){return Nt(t.prev,t,r.prev)<0&&Nt(r.next,t,t.next)<0}function P0(t,r,e,n){var i=t;do i.z===0&&(i.z=ya(i.x,i.y,r,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,I0(i)}function I0(t){var r,e,n,i,o,s,l,h,f=1;do{for(e=t,t=null,o=null,s=0;e;){for(s++,n=e,l=0,r=0;r<f&&(l++,n=n.nextZ,!!n);r++);for(h=f;l>0||h>0&&n;)l!==0&&(h===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,l--):(i=n,n=n.nextZ,h--),o?o.nextZ=i:t=i,i.prevZ=o,o=i;e=n}o.nextZ=null,f*=2}while(s>1);return t}function ya(t,r,e,n,i){return t=(t-e)*i|0,r=(r-n)*i|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t|r<<1}function R0(t){var r=t,e=t;do(r.x<e.x||r.x===e.x&&r.y<e.y)&&(e=r),r=r.next;while(r!==t);return e}function $r(t,r,e,n,i,o,s,l){return(i-s)*(r-l)>=(t-s)*(o-l)&&(t-s)*(n-l)>=(e-s)*(r-l)&&(e-s)*(o-l)>=(i-s)*(n-l)}function A0(t,r){return t.next.i!==r.i&&t.prev.i!==r.i&&!N0(t,r)&&(ei(t,r)&&ei(r,t)&&O0(t,r)&&(Nt(t.prev,t,r.prev)||Nt(t,r.prev,r))||ko(t,r)&&Nt(t.prev,t,t.next)>0&&Nt(r.prev,r,r.next)>0)}function Nt(t,r,e){return(r.y-t.y)*(e.x-r.x)-(r.x-t.x)*(e.y-r.y)}function ko(t,r){return t.x===r.x&&t.y===r.y}function fp(t,r,e,n){var i=Gi(Nt(t,r,e)),o=Gi(Nt(t,r,n)),s=Gi(Nt(e,n,t)),l=Gi(Nt(e,n,r));return!!(i!==o&&s!==l||i===0&&Bi(t,e,r)||o===0&&Bi(t,n,r)||s===0&&Bi(e,t,n)||l===0&&Bi(e,r,n))}function Bi(t,r,e){return r.x<=Math.max(t.x,e.x)&&r.x>=Math.min(t.x,e.x)&&r.y<=Math.max(t.y,e.y)&&r.y>=Math.min(t.y,e.y)}function Gi(t){return t>0?1:t<0?-1:0}function N0(t,r){var e=t;do{if(e.i!==t.i&&e.next.i!==t.i&&e.i!==r.i&&e.next.i!==r.i&&fp(e,e.next,t,r))return!0;e=e.next}while(e!==t);return!1}function ei(t,r){return Nt(t.prev,t,t.next)<0?Nt(t,r,t.next)>=0&&Nt(t,t.prev,r)>=0:Nt(t,r,t.prev)<0||Nt(t,t.next,r)<0}function O0(t,r){var e=t,n=!1,i=(t.x+r.x)/2,o=(t.y+r.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==t);return n}function dp(t,r){var e=new ba(t.i,t.x,t.y),n=new ba(r.i,r.x,r.y),i=t.next,o=r.prev;return t.next=r,r.prev=t,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function sc(t,r,e,n){var i=new ba(t,r,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ri(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function ba(t,r,e){this.i=t,this.x=r,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Mo.deviation=function(t,r,e,n){var i=r&&r.length,o=i?r[0]*e:t.length,s=Math.abs(xa(t,0,o,e));if(i)for(var l=0,h=r.length;l<h;l++){var f=r[l]*e,d=l<h-1?r[l+1]*e:t.length;s-=Math.abs(xa(t,f,d,e))}var v=0;for(l=0;l<n.length;l+=3){var m=n[l]*e,_=n[l+1]*e,g=n[l+2]*e;v+=Math.abs((t[m]-t[g])*(t[_+1]-t[m+1])-(t[m]-t[_])*(t[g+1]-t[m+1]))}return s===0&&v===0?0:Math.abs((v-s)/s)};function xa(t,r,e,n){for(var i=0,o=r,s=e-n;o<e;o+=n)i+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return i}Mo.flatten=function(t){for(var r=t[0][0].length,e={vertices:[],holes:[],dimensions:r},n=0,i=0;i<t.length;i++){for(var o=0;o<t[i].length;o++)for(var s=0;s<r;s++)e.vertices.push(t[i][o][s]);i>0&&(n+=t[i-1].length,e.holes.push(n))}return e};var wa={exports:{}};/*! https://mths.be/punycode v1.3.2 by @mathias */(function(t,r){(function(e){var n=r&&!r.nodeType&&r,i=t&&!t.nodeType&&t,o=typeof Zr=="object"&&Zr;(o.global===o||o.window===o||o.self===o)&&(e=o);var s,l=2147483647,h=36,f=1,d=26,v=38,m=700,_=72,g=128,b="-",y=/^xn--/,w=/[^\x20-\x7E]/,C=/[\x2E\u3002\uFF0E\uFF61]/g,T={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},I=h-f,P=Math.floor,E=String.fromCharCode,S;function L(O){throw RangeError(T[O])}function A(O,F){for(var H=O.length,D=[];H--;)D[H]=F(O[H]);return D}function U(O,F){var H=O.split("@"),D="";H.length>1&&(D=H[0]+"@",O=H[1]),O=O.replace(C,".");var W=O.split("."),st=A(W,F).join(".");return D+st}function j(O){for(var F=[],H=0,D=O.length,W,st;H<D;)W=O.charCodeAt(H++),W>=55296&&W<=56319&&H<D?(st=O.charCodeAt(H++),(st&64512)==56320?F.push(((W&1023)<<10)+(st&1023)+65536):(F.push(W),H--)):F.push(W);return F}function q(O){return A(O,function(F){var H="";return F>65535&&(F-=65536,H+=E(F>>>10&1023|55296),F=56320|F&1023),H+=E(F),H}).join("")}function $(O){return O-48<10?O-22:O-65<26?O-65:O-97<26?O-97:h}function ot(O,F){return O+22+75*(O<26)-((F!=0)<<5)}function z(O,F,H){var D=0;for(O=H?P(O/m):O>>1,O+=P(O/F);O>I*d>>1;D+=h)O=P(O/I);return P(D+(I+1)*O/(O+v))}function k(O){var F=[],H=O.length,D,W=0,st=g,et=_,ft,_t,ht,it,Q,at,J,Ct,xt;for(ft=O.lastIndexOf(b),ft<0&&(ft=0),_t=0;_t<ft;++_t)O.charCodeAt(_t)>=128&&L("not-basic"),F.push(O.charCodeAt(_t));for(ht=ft>0?ft+1:0;ht<H;){for(it=W,Q=1,at=h;ht>=H&&L("invalid-input"),J=$(O.charCodeAt(ht++)),(J>=h||J>P((l-W)/Q))&&L("overflow"),W+=J*Q,Ct=at<=et?f:at>=et+d?d:at-et,!(J<Ct);at+=h)xt=h-Ct,Q>P(l/xt)&&L("overflow"),Q*=xt;D=F.length+1,et=z(W-it,D,it==0),P(W/D)>l-st&&L("overflow"),st+=P(W/D),W%=D,F.splice(W++,0,st)}return q(F)}function B(O){var F,H,D,W,st,et,ft,_t,ht,it,Q,at=[],J,Ct,xt,lt;for(O=j(O),J=O.length,F=g,H=0,st=_,et=0;et<J;++et)Q=O[et],Q<128&&at.push(E(Q));for(D=W=at.length,W&&at.push(b);D<J;){for(ft=l,et=0;et<J;++et)Q=O[et],Q>=F&&Q<ft&&(ft=Q);for(Ct=D+1,ft-F>P((l-H)/Ct)&&L("overflow"),H+=(ft-F)*Ct,F=ft,et=0;et<J;++et)if(Q=O[et],Q<F&&++H>l&&L("overflow"),Q==F){for(_t=H,ht=h;it=ht<=st?f:ht>=st+d?d:ht-st,!(_t<it);ht+=h)lt=_t-it,xt=h-it,at.push(E(ot(it+lt%xt,0))),_t=P(lt/xt);at.push(E(ot(_t,0))),st=z(H,Ct,D==W),H=0,++D}++H,++F}return at.join("")}function Pt(O){return U(O,function(F){return y.test(F)?k(F.slice(4).toLowerCase()):F})}function pt(O){return U(O,function(F){return w.test(F)?"xn--"+B(F):F})}if(s={version:"1.3.2",ucs2:{decode:j,encode:q},decode:k,encode:B,toASCII:pt,toUnicode:Pt},n&&i)if(t.exports==n)i.exports=s;else for(S in s)s.hasOwnProperty(S)&&(n[S]=s[S]);else e.punycode=s})(Zr)})(wa,wa.exports);var S0={isString:function(t){return typeof t=="string"},isObject:function(t){return typeof t=="object"&&t!==null},isNull:function(t){return t===null},isNullOrUndefined:function(t){return t==null}},ni={};function U0(t,r){return Object.prototype.hasOwnProperty.call(t,r)}var L0=function(t,r,e,n){r=r||"&",e=e||"=";var i={};if(typeof t!="string"||t.length===0)return i;var o=/\+/g;t=t.split(r);var s=1e3;n&&typeof n.maxKeys=="number"&&(s=n.maxKeys);var l=t.length;s>0&&l>s&&(l=s);for(var h=0;h<l;++h){var f=t[h].replace(o,"%20"),d=f.indexOf(e),v,m,_,g;d>=0?(v=f.substr(0,d),m=f.substr(d+1)):(v=f,m=""),_=decodeURIComponent(v),g=decodeURIComponent(m),U0(i,_)?Array.isArray(i[_])?i[_].push(g):i[_]=[i[_],g]:i[_]=g}return i},On=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}},F0=function(t,r,e,n){return r=r||"&",e=e||"=",t===null&&(t=void 0),typeof t=="object"?Object.keys(t).map(function(i){var o=encodeURIComponent(On(i))+e;return Array.isArray(t[i])?t[i].map(function(s){return o+encodeURIComponent(On(s))}).join(r):o+encodeURIComponent(On(t[i]))}).join(r):n?encodeURIComponent(On(n))+e+encodeURIComponent(On(t)):""};ni.decode=ni.parse=L0;ni.encode=ni.stringify=F0;var M0=wa.exports,ve=S0,k0=Bo,B0=Y0,G0=q0;function le(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var D0=/^([a-z0-9.+-]+:)/i,V0=/:[0-9]*$/,j0=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,H0=["<",">",'"',"`"," ","\r",`
`,"	"],X0=["{","}","|","\\","^","`"].concat(H0),Ta=["'"].concat(X0),ac=["%","/","?",";","#"].concat(Ta),lc=["/","?","#"],z0=255,uc=/^[+a-z0-9A-Z_-]{0,63}$/,$0=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,W0={javascript:!0,"javascript:":!0},Ca={javascript:!0,"javascript:":!0},Jr={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},Ea=ni;function Bo(t,r,e){if(t&&ve.isObject(t)&&t instanceof le)return t;var n=new le;return n.parse(t,r,e),n}le.prototype.parse=function(t,r,e){if(!ve.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var n=t.indexOf("?"),i=n!==-1&&n<t.indexOf("#")?"?":"#",o=t.split(i),s=/\\/g;o[0]=o[0].replace(s,"/"),t=o.join(i);var l=t;if(l=l.trim(),!e&&t.split("#").length===1){var h=j0.exec(l);if(h)return this.path=l,this.href=l,this.pathname=h[1],h[2]?(this.search=h[2],r?this.query=Ea.parse(this.search.substr(1)):this.query=this.search.substr(1)):r&&(this.search="",this.query={}),this}var f=D0.exec(l);if(f){f=f[0];var d=f.toLowerCase();this.protocol=d,l=l.substr(f.length)}if(e||f||l.match(/^\/\/[^@\/]+@[^@\/]+/)){var v=l.substr(0,2)==="//";v&&!(f&&Ca[f])&&(l=l.substr(2),this.slashes=!0)}if(!Ca[f]&&(v||f&&!Jr[f])){for(var m=-1,_=0;_<lc.length;_++){var g=l.indexOf(lc[_]);g!==-1&&(m===-1||g<m)&&(m=g)}var b,y;m===-1?y=l.lastIndexOf("@"):y=l.lastIndexOf("@",m),y!==-1&&(b=l.slice(0,y),l=l.slice(y+1),this.auth=decodeURIComponent(b)),m=-1;for(var _=0;_<ac.length;_++){var g=l.indexOf(ac[_]);g!==-1&&(m===-1||g<m)&&(m=g)}m===-1&&(m=l.length),this.host=l.slice(0,m),l=l.slice(m),this.parseHost(),this.hostname=this.hostname||"";var w=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!w)for(var C=this.hostname.split(/\./),_=0,T=C.length;_<T;_++){var I=C[_];if(!!I&&!I.match(uc)){for(var P="",E=0,S=I.length;E<S;E++)I.charCodeAt(E)>127?P+="x":P+=I[E];if(!P.match(uc)){var L=C.slice(0,_),A=C.slice(_+1),U=I.match($0);U&&(L.push(U[1]),A.unshift(U[2])),A.length&&(l="/"+A.join(".")+l),this.hostname=L.join(".");break}}}this.hostname.length>z0?this.hostname="":this.hostname=this.hostname.toLowerCase(),w||(this.hostname=M0.toASCII(this.hostname));var j=this.port?":"+this.port:"",q=this.hostname||"";this.host=q+j,this.href+=this.host,w&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),l[0]!=="/"&&(l="/"+l))}if(!W0[d])for(var _=0,T=Ta.length;_<T;_++){var $=Ta[_];if(l.indexOf($)!==-1){var ot=encodeURIComponent($);ot===$&&(ot=escape($)),l=l.split($).join(ot)}}var z=l.indexOf("#");z!==-1&&(this.hash=l.substr(z),l=l.slice(0,z));var k=l.indexOf("?");if(k!==-1?(this.search=l.substr(k),this.query=l.substr(k+1),r&&(this.query=Ea.parse(this.query)),l=l.slice(0,k)):r&&(this.search="",this.query={}),l&&(this.pathname=l),Jr[d]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var j=this.pathname||"",B=this.search||"";this.path=j+B}return this.href=this.format(),this};function q0(t){return ve.isString(t)&&(t=Bo(t)),t instanceof le?t.format():le.prototype.format.call(t)}le.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var r=this.protocol||"",e=this.pathname||"",n=this.hash||"",i=!1,o="";this.host?i=t+this.host:this.hostname&&(i=t+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&ve.isObject(this.query)&&Object.keys(this.query).length&&(o=Ea.stringify(this.query));var s=this.search||o&&"?"+o||"";return r&&r.substr(-1)!==":"&&(r+=":"),this.slashes||(!r||Jr[r])&&i!==!1?(i="//"+(i||""),e&&e.charAt(0)!=="/"&&(e="/"+e)):i||(i=""),n&&n.charAt(0)!=="#"&&(n="#"+n),s&&s.charAt(0)!=="?"&&(s="?"+s),e=e.replace(/[?#]/g,function(l){return encodeURIComponent(l)}),s=s.replace("#","%23"),r+i+e+s+n};function Y0(t,r){return Bo(t,!1,!0).resolve(r)}le.prototype.resolve=function(t){return this.resolveObject(Bo(t,!1,!0)).format()};le.prototype.resolveObject=function(t){if(ve.isString(t)){var r=new le;r.parse(t,!1,!0),t=r}for(var e=new le,n=Object.keys(this),i=0;i<n.length;i++){var o=n[i];e[o]=this[o]}if(e.hash=t.hash,t.href==="")return e.href=e.format(),e;if(t.slashes&&!t.protocol){for(var s=Object.keys(t),l=0;l<s.length;l++){var h=s[l];h!=="protocol"&&(e[h]=t[h])}return Jr[e.protocol]&&e.hostname&&!e.pathname&&(e.path=e.pathname="/"),e.href=e.format(),e}if(t.protocol&&t.protocol!==e.protocol){if(!Jr[t.protocol]){for(var f=Object.keys(t),d=0;d<f.length;d++){var v=f[d];e[v]=t[v]}return e.href=e.format(),e}if(e.protocol=t.protocol,!t.host&&!Ca[t.protocol]){for(var T=(t.pathname||"").split("/");T.length&&!(t.host=T.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),T[0]!==""&&T.unshift(""),T.length<2&&T.unshift(""),e.pathname=T.join("/")}else e.pathname=t.pathname;if(e.search=t.search,e.query=t.query,e.host=t.host||"",e.auth=t.auth,e.hostname=t.hostname||t.host,e.port=t.port,e.pathname||e.search){var m=e.pathname||"",_=e.search||"";e.path=m+_}return e.slashes=e.slashes||t.slashes,e.href=e.format(),e}var g=e.pathname&&e.pathname.charAt(0)==="/",b=t.host||t.pathname&&t.pathname.charAt(0)==="/",y=b||g||e.host&&t.pathname,w=y,C=e.pathname&&e.pathname.split("/")||[],T=t.pathname&&t.pathname.split("/")||[],I=e.protocol&&!Jr[e.protocol];if(I&&(e.hostname="",e.port=null,e.host&&(C[0]===""?C[0]=e.host:C.unshift(e.host)),e.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(T[0]===""?T[0]=t.host:T.unshift(t.host)),t.host=null),y=y&&(T[0]===""||C[0]==="")),b)e.host=t.host||t.host===""?t.host:e.host,e.hostname=t.hostname||t.hostname===""?t.hostname:e.hostname,e.search=t.search,e.query=t.query,C=T;else if(T.length)C||(C=[]),C.pop(),C=C.concat(T),e.search=t.search,e.query=t.query;else if(!ve.isNullOrUndefined(t.search)){if(I){e.hostname=e.host=C.shift();var P=e.host&&e.host.indexOf("@")>0?e.host.split("@"):!1;P&&(e.auth=P.shift(),e.host=e.hostname=P.shift())}return e.search=t.search,e.query=t.query,(!ve.isNull(e.pathname)||!ve.isNull(e.search))&&(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.href=e.format(),e}if(!C.length)return e.pathname=null,e.search?e.path="/"+e.search:e.path=null,e.href=e.format(),e;for(var E=C.slice(-1)[0],S=(e.host||t.host||C.length>1)&&(E==="."||E==="..")||E==="",L=0,A=C.length;A>=0;A--)E=C[A],E==="."?C.splice(A,1):E===".."?(C.splice(A,1),L++):L&&(C.splice(A,1),L--);if(!y&&!w)for(;L--;L)C.unshift("..");y&&C[0]!==""&&(!C[0]||C[0].charAt(0)!=="/")&&C.unshift(""),S&&C.join("/").substr(-1)!=="/"&&C.push("");var U=C[0]===""||C[0]&&C[0].charAt(0)==="/";if(I){e.hostname=e.host=U?"":C.length?C.shift():"";var P=e.host&&e.host.indexOf("@")>0?e.host.split("@"):!1;P&&(e.auth=P.shift(),e.host=e.hostname=P.shift())}return y=y||e.host&&C.length,y&&!U&&C.unshift(""),C.length?e.pathname=C.join("/"):(e.pathname=null,e.path=null),(!ve.isNull(e.pathname)||!ve.isNull(e.search))&&(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.auth=t.auth||e.auth,e.slashes=e.slashes||t.slashes,e.href=e.format(),e};le.prototype.parseHost=function(){var t=this.host,r=V0.exec(t);r&&(r=r[0],r!==":"&&(this.port=r.substr(1)),t=t.substr(0,t.length-r.length)),t&&(this.hostname=t)};/*!
 * @pixi/constants - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Fe;(function(t){t[t.WEBGL_LEGACY=0]="WEBGL_LEGACY",t[t.WEBGL=1]="WEBGL",t[t.WEBGL2=2]="WEBGL2"})(Fe||(Fe={}));var ii;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.WEBGL=1]="WEBGL",t[t.CANVAS=2]="CANVAS"})(ii||(ii={}));var po;(function(t){t[t.COLOR=16384]="COLOR",t[t.DEPTH=256]="DEPTH",t[t.STENCIL=1024]="STENCIL"})(po||(po={}));var Z;(function(t){t[t.NORMAL=0]="NORMAL",t[t.ADD=1]="ADD",t[t.MULTIPLY=2]="MULTIPLY",t[t.SCREEN=3]="SCREEN",t[t.OVERLAY=4]="OVERLAY",t[t.DARKEN=5]="DARKEN",t[t.LIGHTEN=6]="LIGHTEN",t[t.COLOR_DODGE=7]="COLOR_DODGE",t[t.COLOR_BURN=8]="COLOR_BURN",t[t.HARD_LIGHT=9]="HARD_LIGHT",t[t.SOFT_LIGHT=10]="SOFT_LIGHT",t[t.DIFFERENCE=11]="DIFFERENCE",t[t.EXCLUSION=12]="EXCLUSION",t[t.HUE=13]="HUE",t[t.SATURATION=14]="SATURATION",t[t.COLOR=15]="COLOR",t[t.LUMINOSITY=16]="LUMINOSITY",t[t.NORMAL_NPM=17]="NORMAL_NPM",t[t.ADD_NPM=18]="ADD_NPM",t[t.SCREEN_NPM=19]="SCREEN_NPM",t[t.NONE=20]="NONE",t[t.SRC_OVER=0]="SRC_OVER",t[t.SRC_IN=21]="SRC_IN",t[t.SRC_OUT=22]="SRC_OUT",t[t.SRC_ATOP=23]="SRC_ATOP",t[t.DST_OVER=24]="DST_OVER",t[t.DST_IN=25]="DST_IN",t[t.DST_OUT=26]="DST_OUT",t[t.DST_ATOP=27]="DST_ATOP",t[t.ERASE=26]="ERASE",t[t.SUBTRACT=28]="SUBTRACT",t[t.XOR=29]="XOR"})(Z||(Z={}));var te;(function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(te||(te={}));var G;(function(t){t[t.RGBA=6408]="RGBA",t[t.RGB=6407]="RGB",t[t.RG=33319]="RG",t[t.RED=6403]="RED",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.ALPHA=6406]="ALPHA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(G||(G={}));var gr;(function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(gr||(gr={}));var Y;(function(t){t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.BYTE=5120]="BYTE",t[t.SHORT=5122]="SHORT",t[t.INT=5124]="INT",t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",t[t.HALF_FLOAT=36193]="HALF_FLOAT"})(Y||(Y={}));var vo;(function(t){t[t.FLOAT=0]="FLOAT",t[t.INT=1]="INT",t[t.UINT=2]="UINT"})(vo||(vo={}));var ee;(function(t){t[t.NEAREST=0]="NEAREST",t[t.LINEAR=1]="LINEAR"})(ee||(ee={}));var ye;(function(t){t[t.CLAMP=33071]="CLAMP",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(ye||(ye={}));var he;(function(t){t[t.OFF=0]="OFF",t[t.POW2=1]="POW2",t[t.ON=2]="ON",t[t.ON_MANUAL=3]="ON_MANUAL"})(he||(he={}));var ce;(function(t){t[t.NPM=0]="NPM",t[t.UNPACK=1]="UNPACK",t[t.PMA=2]="PMA",t[t.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",t[t.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",t[t.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",t[t.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(ce||(ce={}));var Ye;(function(t){t[t.NO=0]="NO",t[t.YES=1]="YES",t[t.AUTO=2]="AUTO",t[t.BLEND=0]="BLEND",t[t.CLEAR=1]="CLEAR",t[t.BLIT=2]="BLIT"})(Ye||(Ye={}));var Pa;(function(t){t[t.AUTO=0]="AUTO",t[t.MANUAL=1]="MANUAL"})(Pa||(Pa={}));var _e;(function(t){t.LOW="lowp",t.MEDIUM="mediump",t.HIGH="highp"})(_e||(_e={}));var Bt;(function(t){t[t.NONE=0]="NONE",t[t.SCISSOR=1]="SCISSOR",t[t.STENCIL=2]="STENCIL",t[t.SPRITE=3]="SPRITE",t[t.COLOR=4]="COLOR"})(Bt||(Bt={}));var hc;(function(t){t[t.RED=1]="RED",t[t.GREEN=2]="GREEN",t[t.BLUE=4]="BLUE",t[t.ALPHA=8]="ALPHA"})(hc||(hc={}));var Mt;(function(t){t[t.NONE=0]="NONE",t[t.LOW=2]="LOW",t[t.MEDIUM=4]="MEDIUM",t[t.HIGH=8]="HIGH"})(Mt||(Mt={}));var be;(function(t){t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(be||(be={}));/*!
 * @pixi/utils - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/utils is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Wr={parse:k0,format:G0,resolve:B0};X.RETINA_PREFIX=/@([0-9\.]+)x/;X.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;var cc=!1,fc="6.5.3";function K0(t){var r;if(!cc){if(X.ADAPTER.getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){var e=[`
 %c %c %c PixiJS `+fc+" - \u2730 "+t+` \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 

`,"background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];(r=globalThis.console).log.apply(r,e)}else globalThis.console&&globalThis.console.log("PixiJS "+fc+" - "+t+" - http://www.pixijs.com/");cc=!0}}var Ls;function Z0(){return typeof Ls>"u"&&(Ls=function(){var r={stencil:!0,failIfMajorPerformanceCaveat:X.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!X.ADAPTER.getWebGLRenderingContext())return!1;var e=X.ADAPTER.createCanvas(),n=e.getContext("webgl",r)||e.getContext("experimental-webgl",r),i=!!(n&&n.getContextAttributes().stencil);if(n){var o=n.getExtension("WEBGL_lose_context");o&&o.loseContext()}return n=null,i}catch{return!1}}()),Ls}var J0="#f0f8ff",Q0="#faebd7",ty="#00ffff",ey="#7fffd4",ry="#f0ffff",ny="#f5f5dc",iy="#ffe4c4",oy="#000000",sy="#ffebcd",ay="#0000ff",ly="#8a2be2",uy="#a52a2a",hy="#deb887",cy="#5f9ea0",fy="#7fff00",dy="#d2691e",py="#ff7f50",vy="#6495ed",my="#fff8dc",_y="#dc143c",gy="#00ffff",yy="#00008b",by="#008b8b",xy="#b8860b",wy="#a9a9a9",Ty="#006400",Cy="#a9a9a9",Ey="#bdb76b",Py="#8b008b",Iy="#556b2f",Ry="#ff8c00",Ay="#9932cc",Ny="#8b0000",Oy="#e9967a",Sy="#8fbc8f",Uy="#483d8b",Ly="#2f4f4f",Fy="#2f4f4f",My="#00ced1",ky="#9400d3",By="#ff1493",Gy="#00bfff",Dy="#696969",Vy="#696969",jy="#1e90ff",Hy="#b22222",Xy="#fffaf0",zy="#228b22",$y="#ff00ff",Wy="#dcdcdc",qy="#f8f8ff",Yy="#daa520",Ky="#ffd700",Zy="#808080",Jy="#008000",Qy="#adff2f",tb="#808080",eb="#f0fff0",rb="#ff69b4",nb="#cd5c5c",ib="#4b0082",ob="#fffff0",sb="#f0e68c",ab="#fff0f5",lb="#e6e6fa",ub="#7cfc00",hb="#fffacd",cb="#add8e6",fb="#f08080",db="#e0ffff",pb="#fafad2",vb="#d3d3d3",mb="#90ee90",_b="#d3d3d3",gb="#ffb6c1",yb="#ffa07a",bb="#20b2aa",xb="#87cefa",wb="#778899",Tb="#778899",Cb="#b0c4de",Eb="#ffffe0",Pb="#00ff00",Ib="#32cd32",Rb="#faf0e6",Ab="#ff00ff",Nb="#800000",Ob="#66cdaa",Sb="#0000cd",Ub="#ba55d3",Lb="#9370db",Fb="#3cb371",Mb="#7b68ee",kb="#00fa9a",Bb="#48d1cc",Gb="#c71585",Db="#191970",Vb="#f5fffa",jb="#ffe4e1",Hb="#ffe4b5",Xb="#ffdead",zb="#000080",$b="#fdf5e6",Wb="#808000",qb="#6b8e23",Yb="#ffa500",Kb="#ff4500",Zb="#da70d6",Jb="#eee8aa",Qb="#98fb98",tx="#afeeee",ex="#db7093",rx="#ffefd5",nx="#ffdab9",ix="#cd853f",ox="#ffc0cb",sx="#dda0dd",ax="#b0e0e6",lx="#800080",ux="#663399",hx="#ff0000",cx="#bc8f8f",fx="#4169e1",dx="#8b4513",px="#fa8072",vx="#f4a460",mx="#2e8b57",_x="#fff5ee",gx="#a0522d",yx="#c0c0c0",bx="#87ceeb",xx="#6a5acd",wx="#708090",Tx="#708090",Cx="#fffafa",Ex="#00ff7f",Px="#4682b4",Ix="#d2b48c",Rx="#008080",Ax="#d8bfd8",Nx="#ff6347",Ox="#40e0d0",Sx="#ee82ee",Ux="#f5deb3",Lx="#ffffff",Fx="#f5f5f5",Mx="#ffff00",kx="#9acd32",Bx={aliceblue:J0,antiquewhite:Q0,aqua:ty,aquamarine:ey,azure:ry,beige:ny,bisque:iy,black:oy,blanchedalmond:sy,blue:ay,blueviolet:ly,brown:uy,burlywood:hy,cadetblue:cy,chartreuse:fy,chocolate:dy,coral:py,cornflowerblue:vy,cornsilk:my,crimson:_y,cyan:gy,darkblue:yy,darkcyan:by,darkgoldenrod:xy,darkgray:wy,darkgreen:Ty,darkgrey:Cy,darkkhaki:Ey,darkmagenta:Py,darkolivegreen:Iy,darkorange:Ry,darkorchid:Ay,darkred:Ny,darksalmon:Oy,darkseagreen:Sy,darkslateblue:Uy,darkslategray:Ly,darkslategrey:Fy,darkturquoise:My,darkviolet:ky,deeppink:By,deepskyblue:Gy,dimgray:Dy,dimgrey:Vy,dodgerblue:jy,firebrick:Hy,floralwhite:Xy,forestgreen:zy,fuchsia:$y,gainsboro:Wy,ghostwhite:qy,goldenrod:Yy,gold:Ky,gray:Zy,green:Jy,greenyellow:Qy,grey:tb,honeydew:eb,hotpink:rb,indianred:nb,indigo:ib,ivory:ob,khaki:sb,lavenderblush:ab,lavender:lb,lawngreen:ub,lemonchiffon:hb,lightblue:cb,lightcoral:fb,lightcyan:db,lightgoldenrodyellow:pb,lightgray:vb,lightgreen:mb,lightgrey:_b,lightpink:gb,lightsalmon:yb,lightseagreen:bb,lightskyblue:xb,lightslategray:wb,lightslategrey:Tb,lightsteelblue:Cb,lightyellow:Eb,lime:Pb,limegreen:Ib,linen:Rb,magenta:Ab,maroon:Nb,mediumaquamarine:Ob,mediumblue:Sb,mediumorchid:Ub,mediumpurple:Lb,mediumseagreen:Fb,mediumslateblue:Mb,mediumspringgreen:kb,mediumturquoise:Bb,mediumvioletred:Gb,midnightblue:Db,mintcream:Vb,mistyrose:jb,moccasin:Hb,navajowhite:Xb,navy:zb,oldlace:$b,olive:Wb,olivedrab:qb,orange:Yb,orangered:Kb,orchid:Zb,palegoldenrod:Jb,palegreen:Qb,paleturquoise:tx,palevioletred:ex,papayawhip:rx,peachpuff:nx,peru:ix,pink:ox,plum:sx,powderblue:ax,purple:lx,rebeccapurple:ux,red:hx,rosybrown:cx,royalblue:fx,saddlebrown:dx,salmon:px,sandybrown:vx,seagreen:mx,seashell:_x,sienna:gx,silver:yx,skyblue:bx,slateblue:xx,slategray:wx,slategrey:Tx,snow:Cx,springgreen:Ex,steelblue:Px,tan:Ix,teal:Rx,thistle:Ax,tomato:Nx,turquoise:Ox,violet:Sx,wheat:Ux,white:Lx,whitesmoke:Fx,yellow:Mx,yellowgreen:kx};function Gt(t,r){return r===void 0&&(r=[]),r[0]=(t>>16&255)/255,r[1]=(t>>8&255)/255,r[2]=(t&255)/255,r}function pp(t){var r=t.toString(16);return r="000000".substring(0,6-r.length)+r,"#"+r}function vp(t){return typeof t=="string"&&(t=Bx[t.toLowerCase()]||t,t[0]==="#"&&(t=t.slice(1))),parseInt(t,16)}function fe(t){return(t[0]*255<<16)+(t[1]*255<<8)+(t[2]*255|0)}function Gx(){for(var t=[],r=[],e=0;e<32;e++)t[e]=e,r[e]=e;t[Z.NORMAL_NPM]=Z.NORMAL,t[Z.ADD_NPM]=Z.ADD,t[Z.SCREEN_NPM]=Z.SCREEN,r[Z.NORMAL]=Z.NORMAL_NPM,r[Z.ADD]=Z.ADD_NPM,r[Z.SCREEN]=Z.SCREEN_NPM;var n=[];return n.push(r),n.push(t),n}var mp=Gx();function _p(t,r){return mp[r?1:0][t]}function Dx(t,r,e,n){return e=e||new Float32Array(4),n||n===void 0?(e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r):(e[0]=t[0],e[1]=t[1],e[2]=t[2]),e[3]=r,e}function Go(t,r){if(r===1)return(r*255<<24)+t;if(r===0)return 0;var e=t>>16&255,n=t>>8&255,i=t&255;return e=e*r+.5|0,n=n*r+.5|0,i=i*r+.5|0,(r*255<<24)+(e<<16)+(n<<8)+i}function gp(t,r,e,n){return e=e||new Float32Array(4),e[0]=(t>>16&255)/255,e[1]=(t>>8&255)/255,e[2]=(t&255)/255,(n||n===void 0)&&(e[0]*=r,e[1]*=r,e[2]*=r),e[3]=r,e}function Vx(t,r){r===void 0&&(r=null);var e=t*6;if(r=r||new Uint16Array(e),r.length!==e)throw new Error("Out buffer length is incorrect, got "+r.length+" and expected "+e);for(var n=0,i=0;n<e;n+=6,i+=4)r[n+0]=i+0,r[n+1]=i+1,r[n+2]=i+2,r[n+3]=i+0,r[n+4]=i+2,r[n+5]=i+3;return r}function yp(t){if(t.BYTES_PER_ELEMENT===4)return t instanceof Float32Array?"Float32Array":t instanceof Uint32Array?"Uint32Array":"Int32Array";if(t.BYTES_PER_ELEMENT===2){if(t instanceof Uint16Array)return"Uint16Array"}else if(t.BYTES_PER_ELEMENT===1&&t instanceof Uint8Array)return"Uint8Array";return null}function mo(t){return t+=t===0?1:0,--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t+1}function dc(t){return!(t&t-1)&&!!t}function pc(t){var r=(t>65535?1:0)<<4;t>>>=r;var e=(t>255?1:0)<<3;return t>>>=e,r|=e,e=(t>15?1:0)<<2,t>>>=e,r|=e,e=(t>3?1:0)<<1,t>>>=e,r|=e,r|t>>1}function Qr(t,r,e){var n=t.length,i;if(!(r>=n||e===0)){e=r+e>n?n-r:e;var o=n-e;for(i=r;i<o;++i)t[i]=t[i+e];t.length=o}}function qr(t){return t===0?0:t<0?-1:1}var jx=0;function Tr(){return++jx}var vc={};function xe(t,r,e){if(e===void 0&&(e=3),!vc[r]){var n=new Error().stack;typeof n>"u"?console.warn("PixiJS Deprecation Warning: ",r+`
Deprecated since v`+t):(n=n.split(`
`).splice(e).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",r+`
Deprecated since v`+t),console.warn(n),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",r+`
Deprecated since v`+t),console.warn(n))),vc[r]=!0}}var mc={},Oe=Object.create(null),lr=Object.create(null),_c=function(){function t(r,e,n){this.canvas=X.ADAPTER.createCanvas(),this.context=this.canvas.getContext("2d"),this.resolution=n||X.RESOLUTION,this.resize(r,e)}return t.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},t.prototype.resize=function(r,e){this.canvas.width=Math.round(r*this.resolution),this.canvas.height=Math.round(e*this.resolution)},t.prototype.destroy=function(){this.context=null,this.canvas=null},Object.defineProperty(t.prototype,"width",{get:function(){return this.canvas.width},set:function(r){this.canvas.width=Math.round(r)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.canvas.height},set:function(r){this.canvas.height=Math.round(r)},enumerable:!1,configurable:!0}),t}();function Hx(t){var r=t.width,e=t.height,n=t.getContext("2d"),i=n.getImageData(0,0,r,e),o=i.data,s=o.length,l={top:null,left:null,right:null,bottom:null},h=null,f,d,v;for(f=0;f<s;f+=4)o[f+3]!==0&&(d=f/4%r,v=~~(f/4/r),l.top===null&&(l.top=v),(l.left===null||d<l.left)&&(l.left=d),(l.right===null||l.right<d)&&(l.right=d+1),(l.bottom===null||l.bottom<v)&&(l.bottom=v));return l.top!==null&&(r=l.right-l.left,e=l.bottom-l.top+1,h=n.getImageData(l.left,l.top,r,e)),{height:e,width:r,data:h}}var Di;function Xx(t,r){if(r===void 0&&(r=globalThis.location),t.indexOf("data:")===0)return"";r=r||globalThis.location,Di||(Di=document.createElement("a")),Di.href=t;var e=Wr.parse(Di.href),n=!e.port&&r.port===""||e.port===r.port;return e.hostname!==r.hostname||!n||e.protocol!==r.protocol?"anonymous":""}function _o(t,r){var e=X.RETINA_PREFIX.exec(t);return e?parseFloat(e[1]):r!==void 0?r:1}/*!
 * @pixi/math - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/math is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var rn=Math.PI*2,zx=180/Math.PI,Cr=Math.PI/180,gt;(function(t){t[t.POLY=0]="POLY",t[t.RECT=1]="RECT",t[t.CIRC=2]="CIRC",t[t.ELIP=3]="ELIP",t[t.RREC=4]="RREC"})(gt||(gt={}));var ct=function(){function t(r,e){r===void 0&&(r=0),e===void 0&&(e=0),this.x=0,this.y=0,this.x=r,this.y=e}return t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.copyFrom=function(r){return this.set(r.x,r.y),this},t.prototype.copyTo=function(r){return r.set(this.x,this.y),r},t.prototype.equals=function(r){return r.x===this.x&&r.y===this.y},t.prototype.set=function(r,e){return r===void 0&&(r=0),e===void 0&&(e=r),this.x=r,this.y=e,this},t.prototype.toString=function(){return"[@pixi/math:Point x="+this.x+" y="+this.y+"]"},t}(),Vi=[new ct,new ct,new ct,new ct],mt=function(){function t(r,e,n,i){r===void 0&&(r=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=0),this.x=Number(r),this.y=Number(e),this.width=Number(n),this.height=Number(i),this.type=gt.RECT}return Object.defineProperty(t.prototype,"left",{get:function(){return this.x},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"right",{get:function(){return this.x+this.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"top",{get:function(){return this.y},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!1,configurable:!0}),Object.defineProperty(t,"EMPTY",{get:function(){return new t(0,0,0,0)},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height)},t.prototype.copyFrom=function(r){return this.x=r.x,this.y=r.y,this.width=r.width,this.height=r.height,this},t.prototype.copyTo=function(r){return r.x=this.x,r.y=this.y,r.width=this.width,r.height=this.height,r},t.prototype.contains=function(r,e){return this.width<=0||this.height<=0?!1:r>=this.x&&r<this.x+this.width&&e>=this.y&&e<this.y+this.height},t.prototype.intersects=function(r,e){if(!e){var n=this.x<r.x?r.x:this.x,i=this.right>r.right?r.right:this.right;if(i<=n)return!1;var o=this.y<r.y?r.y:this.y,s=this.bottom>r.bottom?r.bottom:this.bottom;return s>o}var l=this.left,h=this.right,f=this.top,d=this.bottom;if(h<=l||d<=f)return!1;var v=Vi[0].set(r.left,r.top),m=Vi[1].set(r.left,r.bottom),_=Vi[2].set(r.right,r.top),g=Vi[3].set(r.right,r.bottom);if(_.x<=v.x||m.y<=v.y)return!1;var b=Math.sign(e.a*e.d-e.b*e.c);if(b===0||(e.apply(v,v),e.apply(m,m),e.apply(_,_),e.apply(g,g),Math.max(v.x,m.x,_.x,g.x)<=l||Math.min(v.x,m.x,_.x,g.x)>=h||Math.max(v.y,m.y,_.y,g.y)<=f||Math.min(v.y,m.y,_.y,g.y)>=d))return!1;var y=b*(m.y-v.y),w=b*(v.x-m.x),C=y*l+w*f,T=y*h+w*f,I=y*l+w*d,P=y*h+w*d;if(Math.max(C,T,I,P)<=y*v.x+w*v.y||Math.min(C,T,I,P)>=y*g.x+w*g.y)return!1;var E=b*(v.y-_.y),S=b*(_.x-v.x),L=E*l+S*f,A=E*h+S*f,U=E*l+S*d,j=E*h+S*d;return!(Math.max(L,A,U,j)<=E*v.x+S*v.y||Math.min(L,A,U,j)>=E*g.x+S*g.y)},t.prototype.pad=function(r,e){return r===void 0&&(r=0),e===void 0&&(e=r),this.x-=r,this.y-=e,this.width+=r*2,this.height+=e*2,this},t.prototype.fit=function(r){var e=Math.max(this.x,r.x),n=Math.min(this.x+this.width,r.x+r.width),i=Math.max(this.y,r.y),o=Math.min(this.y+this.height,r.y+r.height);return this.x=e,this.width=Math.max(n-e,0),this.y=i,this.height=Math.max(o-i,0),this},t.prototype.ceil=function(r,e){r===void 0&&(r=1),e===void 0&&(e=.001);var n=Math.ceil((this.x+this.width-e)*r)/r,i=Math.ceil((this.y+this.height-e)*r)/r;return this.x=Math.floor((this.x+e)*r)/r,this.y=Math.floor((this.y+e)*r)/r,this.width=n-this.x,this.height=i-this.y,this},t.prototype.enlarge=function(r){var e=Math.min(this.x,r.x),n=Math.max(this.x+this.width,r.x+r.width),i=Math.min(this.y,r.y),o=Math.max(this.y+this.height,r.y+r.height);return this.x=e,this.width=n-e,this.y=i,this.height=o-i,this},t.prototype.toString=function(){return"[@pixi/math:Rectangle x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},t}(),bp=function(){function t(r,e,n){r===void 0&&(r=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=r,this.y=e,this.radius=n,this.type=gt.CIRC}return t.prototype.clone=function(){return new t(this.x,this.y,this.radius)},t.prototype.contains=function(r,e){if(this.radius<=0)return!1;var n=this.radius*this.radius,i=this.x-r,o=this.y-e;return i*=i,o*=o,i+o<=n},t.prototype.getBounds=function(){return new mt(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)},t.prototype.toString=function(){return"[@pixi/math:Circle x="+this.x+" y="+this.y+" radius="+this.radius+"]"},t}(),xp=function(){function t(r,e,n,i){r===void 0&&(r=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=0),this.x=r,this.y=e,this.width=n,this.height=i,this.type=gt.ELIP}return t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height)},t.prototype.contains=function(r,e){if(this.width<=0||this.height<=0)return!1;var n=(r-this.x)/this.width,i=(e-this.y)/this.height;return n*=n,i*=i,n+i<=1},t.prototype.getBounds=function(){return new mt(this.x-this.width,this.y-this.height,this.width,this.height)},t.prototype.toString=function(){return"[@pixi/math:Ellipse x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},t}(),yr=function(){function t(){for(var r=arguments,e=[],n=0;n<arguments.length;n++)e[n]=r[n];var i=Array.isArray(e[0])?e[0]:e;if(typeof i[0]!="number"){for(var o=[],s=0,l=i.length;s<l;s++)o.push(i[s].x,i[s].y);i=o}this.points=i,this.type=gt.POLY,this.closeStroke=!0}return t.prototype.clone=function(){var r=this.points.slice(),e=new t(r);return e.closeStroke=this.closeStroke,e},t.prototype.contains=function(r,e){for(var n=!1,i=this.points.length/2,o=0,s=i-1;o<i;s=o++){var l=this.points[o*2],h=this.points[o*2+1],f=this.points[s*2],d=this.points[s*2+1],v=h>e!=d>e&&r<(f-l)*((e-h)/(d-h))+l;v&&(n=!n)}return n},t.prototype.toString=function(){return"[@pixi/math:Polygon"+("closeStroke="+this.closeStroke)+("points="+this.points.reduce(function(r,e){return r+", "+e},"")+"]")},t}(),wp=function(){function t(r,e,n,i,o){r===void 0&&(r=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=0),o===void 0&&(o=20),this.x=r,this.y=e,this.width=n,this.height=i,this.radius=o,this.type=gt.RREC}return t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height,this.radius)},t.prototype.contains=function(r,e){if(this.width<=0||this.height<=0)return!1;if(r>=this.x&&r<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){var n=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(e>=this.y+n&&e<=this.y+this.height-n||r>=this.x+n&&r<=this.x+this.width-n)return!0;var i=r-(this.x+n),o=e-(this.y+n),s=n*n;if(i*i+o*o<=s||(i=r-(this.x+this.width-n),i*i+o*o<=s)||(o=e-(this.y+this.height-n),i*i+o*o<=s)||(i=r-(this.x+n),i*i+o*o<=s))return!0}return!1},t.prototype.toString=function(){return"[@pixi/math:RoundedRectangle x="+this.x+" y="+this.y+("width="+this.width+" height="+this.height+" radius="+this.radius+"]")},t}(),_r=function(){function t(r,e,n,i){n===void 0&&(n=0),i===void 0&&(i=0),this._x=n,this._y=i,this.cb=r,this.scope=e}return t.prototype.clone=function(r,e){return r===void 0&&(r=this.cb),e===void 0&&(e=this.scope),new t(r,e,this._x,this._y)},t.prototype.set=function(r,e){return r===void 0&&(r=0),e===void 0&&(e=r),(this._x!==r||this._y!==e)&&(this._x=r,this._y=e,this.cb.call(this.scope)),this},t.prototype.copyFrom=function(r){return(this._x!==r.x||this._y!==r.y)&&(this._x=r.x,this._y=r.y,this.cb.call(this.scope)),this},t.prototype.copyTo=function(r){return r.set(this._x,this._y),r},t.prototype.equals=function(r){return r.x===this._x&&r.y===this._y},t.prototype.toString=function(){return"[@pixi/math:ObservablePoint x="+0+" y="+0+" scope="+this.scope+"]"},Object.defineProperty(t.prototype,"x",{get:function(){return this._x},set:function(r){this._x!==r&&(this._x=r,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y},set:function(r){this._y!==r&&(this._y=r,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),t}(),Rt=function(){function t(r,e,n,i,o,s){r===void 0&&(r=1),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),o===void 0&&(o=0),s===void 0&&(s=0),this.array=null,this.a=r,this.b=e,this.c=n,this.d=i,this.tx=o,this.ty=s}return t.prototype.fromArray=function(r){this.a=r[0],this.b=r[1],this.c=r[3],this.d=r[4],this.tx=r[2],this.ty=r[5]},t.prototype.set=function(r,e,n,i,o,s){return this.a=r,this.b=e,this.c=n,this.d=i,this.tx=o,this.ty=s,this},t.prototype.toArray=function(r,e){this.array||(this.array=new Float32Array(9));var n=e||this.array;return r?(n[0]=this.a,n[1]=this.b,n[2]=0,n[3]=this.c,n[4]=this.d,n[5]=0,n[6]=this.tx,n[7]=this.ty,n[8]=1):(n[0]=this.a,n[1]=this.c,n[2]=this.tx,n[3]=this.b,n[4]=this.d,n[5]=this.ty,n[6]=0,n[7]=0,n[8]=1),n},t.prototype.apply=function(r,e){e=e||new ct;var n=r.x,i=r.y;return e.x=this.a*n+this.c*i+this.tx,e.y=this.b*n+this.d*i+this.ty,e},t.prototype.applyInverse=function(r,e){e=e||new ct;var n=1/(this.a*this.d+this.c*-this.b),i=r.x,o=r.y;return e.x=this.d*n*i+-this.c*n*o+(this.ty*this.c-this.tx*this.d)*n,e.y=this.a*n*o+-this.b*n*i+(-this.ty*this.a+this.tx*this.b)*n,e},t.prototype.translate=function(r,e){return this.tx+=r,this.ty+=e,this},t.prototype.scale=function(r,e){return this.a*=r,this.d*=e,this.c*=r,this.b*=e,this.tx*=r,this.ty*=e,this},t.prototype.rotate=function(r){var e=Math.cos(r),n=Math.sin(r),i=this.a,o=this.c,s=this.tx;return this.a=i*e-this.b*n,this.b=i*n+this.b*e,this.c=o*e-this.d*n,this.d=o*n+this.d*e,this.tx=s*e-this.ty*n,this.ty=s*n+this.ty*e,this},t.prototype.append=function(r){var e=this.a,n=this.b,i=this.c,o=this.d;return this.a=r.a*e+r.b*i,this.b=r.a*n+r.b*o,this.c=r.c*e+r.d*i,this.d=r.c*n+r.d*o,this.tx=r.tx*e+r.ty*i+this.tx,this.ty=r.tx*n+r.ty*o+this.ty,this},t.prototype.setTransform=function(r,e,n,i,o,s,l,h,f){return this.a=Math.cos(l+f)*o,this.b=Math.sin(l+f)*o,this.c=-Math.sin(l-h)*s,this.d=Math.cos(l-h)*s,this.tx=r-(n*this.a+i*this.c),this.ty=e-(n*this.b+i*this.d),this},t.prototype.prepend=function(r){var e=this.tx;if(r.a!==1||r.b!==0||r.c!==0||r.d!==1){var n=this.a,i=this.c;this.a=n*r.a+this.b*r.c,this.b=n*r.b+this.b*r.d,this.c=i*r.a+this.d*r.c,this.d=i*r.b+this.d*r.d}return this.tx=e*r.a+this.ty*r.c+r.tx,this.ty=e*r.b+this.ty*r.d+r.ty,this},t.prototype.decompose=function(r){var e=this.a,n=this.b,i=this.c,o=this.d,s=r.pivot,l=-Math.atan2(-i,o),h=Math.atan2(n,e),f=Math.abs(l+h);return f<1e-5||Math.abs(rn-f)<1e-5?(r.rotation=h,r.skew.x=r.skew.y=0):(r.rotation=0,r.skew.x=l,r.skew.y=h),r.scale.x=Math.sqrt(e*e+n*n),r.scale.y=Math.sqrt(i*i+o*o),r.position.x=this.tx+(s.x*e+s.y*i),r.position.y=this.ty+(s.x*n+s.y*o),r},t.prototype.invert=function(){var r=this.a,e=this.b,n=this.c,i=this.d,o=this.tx,s=r*i-e*n;return this.a=i/s,this.b=-e/s,this.c=-n/s,this.d=r/s,this.tx=(n*this.ty-i*o)/s,this.ty=-(r*this.ty-e*o)/s,this},t.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},t.prototype.clone=function(){var r=new t;return r.a=this.a,r.b=this.b,r.c=this.c,r.d=this.d,r.tx=this.tx,r.ty=this.ty,r},t.prototype.copyTo=function(r){return r.a=this.a,r.b=this.b,r.c=this.c,r.d=this.d,r.tx=this.tx,r.ty=this.ty,r},t.prototype.copyFrom=function(r){return this.a=r.a,this.b=r.b,this.c=r.c,this.d=r.d,this.tx=r.tx,this.ty=r.ty,this},t.prototype.toString=function(){return"[@pixi/math:Matrix a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+"]"},Object.defineProperty(t,"IDENTITY",{get:function(){return new t},enumerable:!1,configurable:!0}),Object.defineProperty(t,"TEMP_MATRIX",{get:function(){return new t},enumerable:!1,configurable:!0}),t}(),fr=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],dr=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],pr=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],vr=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Ia=[],Tp=[],ji=Math.sign;function $x(){for(var t=0;t<16;t++){var r=[];Ia.push(r);for(var e=0;e<16;e++)for(var n=ji(fr[t]*fr[e]+pr[t]*dr[e]),i=ji(dr[t]*fr[e]+vr[t]*dr[e]),o=ji(fr[t]*pr[e]+pr[t]*vr[e]),s=ji(dr[t]*pr[e]+vr[t]*vr[e]),l=0;l<16;l++)if(fr[l]===n&&dr[l]===i&&pr[l]===o&&vr[l]===s){r.push(l);break}}for(var t=0;t<16;t++){var h=new Rt;h.set(fr[t],dr[t],pr[t],vr[t],0,0),Tp.push(h)}}$x();var At={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:function(t){return fr[t]},uY:function(t){return dr[t]},vX:function(t){return pr[t]},vY:function(t){return vr[t]},inv:function(t){return t&8?t&15:-t&7},add:function(t,r){return Ia[t][r]},sub:function(t,r){return Ia[t][At.inv(r)]},rotate180:function(t){return t^4},isVertical:function(t){return(t&3)===2},byDirection:function(t,r){return Math.abs(t)*2<=Math.abs(r)?r>=0?At.S:At.N:Math.abs(r)*2<=Math.abs(t)?t>0?At.E:At.W:r>0?t>0?At.SE:At.SW:t>0?At.NE:At.NW},matrixAppendRotationInv:function(t,r,e,n){e===void 0&&(e=0),n===void 0&&(n=0);var i=Tp[At.inv(r)];i.tx=e,i.ty=n,t.append(i)}},Cp=function(){function t(){this.worldTransform=new Rt,this.localTransform=new Rt,this.position=new _r(this.onChange,this,0,0),this.scale=new _r(this.onChange,this,1,1),this.pivot=new _r(this.onChange,this,0,0),this.skew=new _r(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}return t.prototype.onChange=function(){this._localID++},t.prototype.updateSkew=function(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++},t.prototype.toString=function(){return"[@pixi/math:Transform "+("position=("+this.position.x+", "+this.position.y+") ")+("rotation="+this.rotation+" ")+("scale=("+this.scale.x+", "+this.scale.y+") ")+("skew=("+this.skew.x+", "+this.skew.y+") ")+"]"},t.prototype.updateLocalTransform=function(){var r=this.localTransform;this._localID!==this._currentLocalID&&(r.a=this._cx*this.scale.x,r.b=this._sx*this.scale.x,r.c=this._cy*this.scale.y,r.d=this._sy*this.scale.y,r.tx=this.position.x-(this.pivot.x*r.a+this.pivot.y*r.c),r.ty=this.position.y-(this.pivot.x*r.b+this.pivot.y*r.d),this._currentLocalID=this._localID,this._parentID=-1)},t.prototype.updateTransform=function(r){var e=this.localTransform;if(this._localID!==this._currentLocalID&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==r._worldID){var n=r.worldTransform,i=this.worldTransform;i.a=e.a*n.a+e.b*n.c,i.b=e.a*n.b+e.b*n.d,i.c=e.c*n.a+e.d*n.c,i.d=e.c*n.b+e.d*n.d,i.tx=e.tx*n.a+e.ty*n.c+n.tx,i.ty=e.tx*n.b+e.ty*n.d+n.ty,this._parentID=r._worldID,this._worldID++}},t.prototype.setFromMatrix=function(r){r.decompose(this),this._localID++},Object.defineProperty(t.prototype,"rotation",{get:function(){return this._rotation},set:function(r){this._rotation!==r&&(this._rotation=r,this.updateSkew())},enumerable:!1,configurable:!0}),t.IDENTITY=new t,t}();/*!
 * @pixi/display - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/display is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */X.SORTABLE_CHILDREN=!1;var nn=function(){function t(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null,this.updateID=-1}return t.prototype.isEmpty=function(){return this.minX>this.maxX||this.minY>this.maxY},t.prototype.clear=function(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0},t.prototype.getRectangle=function(r){return this.minX>this.maxX||this.minY>this.maxY?mt.EMPTY:(r=r||new mt(0,0,1,1),r.x=this.minX,r.y=this.minY,r.width=this.maxX-this.minX,r.height=this.maxY-this.minY,r)},t.prototype.addPoint=function(r){this.minX=Math.min(this.minX,r.x),this.maxX=Math.max(this.maxX,r.x),this.minY=Math.min(this.minY,r.y),this.maxY=Math.max(this.maxY,r.y)},t.prototype.addPointMatrix=function(r,e){var n=r.a,i=r.b,o=r.c,s=r.d,l=r.tx,h=r.ty,f=n*e.x+o*e.y+l,d=i*e.x+s*e.y+h;this.minX=Math.min(this.minX,f),this.maxX=Math.max(this.maxX,f),this.minY=Math.min(this.minY,d),this.maxY=Math.max(this.maxY,d)},t.prototype.addQuad=function(r){var e=this.minX,n=this.minY,i=this.maxX,o=this.maxY,s=r[0],l=r[1];e=s<e?s:e,n=l<n?l:n,i=s>i?s:i,o=l>o?l:o,s=r[2],l=r[3],e=s<e?s:e,n=l<n?l:n,i=s>i?s:i,o=l>o?l:o,s=r[4],l=r[5],e=s<e?s:e,n=l<n?l:n,i=s>i?s:i,o=l>o?l:o,s=r[6],l=r[7],e=s<e?s:e,n=l<n?l:n,i=s>i?s:i,o=l>o?l:o,this.minX=e,this.minY=n,this.maxX=i,this.maxY=o},t.prototype.addFrame=function(r,e,n,i,o){this.addFrameMatrix(r.worldTransform,e,n,i,o)},t.prototype.addFrameMatrix=function(r,e,n,i,o){var s=r.a,l=r.b,h=r.c,f=r.d,d=r.tx,v=r.ty,m=this.minX,_=this.minY,g=this.maxX,b=this.maxY,y=s*e+h*n+d,w=l*e+f*n+v;m=y<m?y:m,_=w<_?w:_,g=y>g?y:g,b=w>b?w:b,y=s*i+h*n+d,w=l*i+f*n+v,m=y<m?y:m,_=w<_?w:_,g=y>g?y:g,b=w>b?w:b,y=s*e+h*o+d,w=l*e+f*o+v,m=y<m?y:m,_=w<_?w:_,g=y>g?y:g,b=w>b?w:b,y=s*i+h*o+d,w=l*i+f*o+v,m=y<m?y:m,_=w<_?w:_,g=y>g?y:g,b=w>b?w:b,this.minX=m,this.minY=_,this.maxX=g,this.maxY=b},t.prototype.addVertexData=function(r,e,n){for(var i=this.minX,o=this.minY,s=this.maxX,l=this.maxY,h=e;h<n;h+=2){var f=r[h],d=r[h+1];i=f<i?f:i,o=d<o?d:o,s=f>s?f:s,l=d>l?d:l}this.minX=i,this.minY=o,this.maxX=s,this.maxY=l},t.prototype.addVertices=function(r,e,n,i){this.addVerticesMatrix(r.worldTransform,e,n,i)},t.prototype.addVerticesMatrix=function(r,e,n,i,o,s){o===void 0&&(o=0),s===void 0&&(s=o);for(var l=r.a,h=r.b,f=r.c,d=r.d,v=r.tx,m=r.ty,_=this.minX,g=this.minY,b=this.maxX,y=this.maxY,w=n;w<i;w+=2){var C=e[w],T=e[w+1],I=l*C+f*T+v,P=d*T+h*C+m;_=Math.min(_,I-o),b=Math.max(b,I+o),g=Math.min(g,P-s),y=Math.max(y,P+s)}this.minX=_,this.minY=g,this.maxX=b,this.maxY=y},t.prototype.addBounds=function(r){var e=this.minX,n=this.minY,i=this.maxX,o=this.maxY;this.minX=r.minX<e?r.minX:e,this.minY=r.minY<n?r.minY:n,this.maxX=r.maxX>i?r.maxX:i,this.maxY=r.maxY>o?r.maxY:o},t.prototype.addBoundsMask=function(r,e){var n=r.minX>e.minX?r.minX:e.minX,i=r.minY>e.minY?r.minY:e.minY,o=r.maxX<e.maxX?r.maxX:e.maxX,s=r.maxY<e.maxY?r.maxY:e.maxY;if(n<=o&&i<=s){var l=this.minX,h=this.minY,f=this.maxX,d=this.maxY;this.minX=n<l?n:l,this.minY=i<h?i:h,this.maxX=o>f?o:f,this.maxY=s>d?s:d}},t.prototype.addBoundsMatrix=function(r,e){this.addFrameMatrix(e,r.minX,r.minY,r.maxX,r.maxY)},t.prototype.addBoundsArea=function(r,e){var n=r.minX>e.x?r.minX:e.x,i=r.minY>e.y?r.minY:e.y,o=r.maxX<e.x+e.width?r.maxX:e.x+e.width,s=r.maxY<e.y+e.height?r.maxY:e.y+e.height;if(n<=o&&i<=s){var l=this.minX,h=this.minY,f=this.maxX,d=this.maxY;this.minX=n<l?n:l,this.minY=i<h?i:h,this.maxX=o>f?o:f,this.maxY=s>d?s:d}},t.prototype.pad=function(r,e){r===void 0&&(r=0),e===void 0&&(e=r),this.isEmpty()||(this.minX-=r,this.maxX+=r,this.minY-=e,this.maxY+=e)},t.prototype.addFramePad=function(r,e,n,i,o,s){r-=o,e-=s,n+=o,i+=s,this.minX=this.minX<r?this.minX:r,this.maxX=this.maxX>n?this.maxX:n,this.minY=this.minY<e?this.minY:e,this.maxY=this.maxY>i?this.maxY:i},t}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ra=function(t,r){return Ra=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},Ra(t,r)};function Ql(t,r){Ra(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var Ft=function(t){Ql(r,t);function r(){var e=t.call(this)||this;return e.tempDisplayObjectParent=null,e.transform=new Cp,e.alpha=1,e.visible=!0,e.renderable=!0,e.cullable=!1,e.cullArea=null,e.parent=null,e.worldAlpha=1,e._lastSortedIndex=0,e._zIndex=0,e.filterArea=null,e.filters=null,e._enabledFilters=null,e._bounds=new nn,e._localBounds=null,e._boundsID=0,e._boundsRect=null,e._localBoundsRect=null,e._mask=null,e._maskRefCount=0,e._destroyed=!1,e.isSprite=!1,e.isMask=!1,e}return r.mixin=function(e){for(var n=Object.keys(e),i=0;i<n.length;++i){var o=n[i];Object.defineProperty(r.prototype,o,Object.getOwnPropertyDescriptor(e,o))}},Object.defineProperty(r.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!1,configurable:!0}),r.prototype._recursivePostUpdateTransform=function(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)},r.prototype.updateTransform=function(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha},r.prototype.getBounds=function(e,n){return e||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._bounds.updateID!==this._boundsID&&(this.calculateBounds(),this._bounds.updateID=this._boundsID),n||(this._boundsRect||(this._boundsRect=new mt),n=this._boundsRect),this._bounds.getRectangle(n)},r.prototype.getLocalBounds=function(e){e||(this._localBoundsRect||(this._localBoundsRect=new mt),e=this._localBoundsRect),this._localBounds||(this._localBounds=new nn);var n=this.transform,i=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform;var o=this._bounds,s=this._boundsID;this._bounds=this._localBounds;var l=this.getBounds(!1,e);return this.parent=i,this.transform=n,this._bounds=o,this._bounds.updateID+=this._boundsID-s,l},r.prototype.toGlobal=function(e,n,i){return i===void 0&&(i=!1),i||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(e,n)},r.prototype.toLocal=function(e,n,i,o){return n&&(e=n.toGlobal(e,i,o)),o||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(e,i)},r.prototype.setParent=function(e){if(!e||!e.addChild)throw new Error("setParent: Argument must be a Container");return e.addChild(this),e},r.prototype.setTransform=function(e,n,i,o,s,l,h,f,d){return e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),o===void 0&&(o=1),s===void 0&&(s=0),l===void 0&&(l=0),h===void 0&&(h=0),f===void 0&&(f=0),d===void 0&&(d=0),this.position.x=e,this.position.y=n,this.scale.x=i||1,this.scale.y=o||1,this.rotation=s,this.skew.x=l,this.skew.y=h,this.pivot.x=f,this.pivot.y=d,this},r.prototype.destroy=function(e){this.parent&&this.parent.removeChild(this),this._destroyed=!0,this.transform=null,this.parent=null,this._bounds=null,this.mask=null,this.cullArea=null,this.filters=null,this.filterArea=null,this.hitArea=null,this.interactive=!1,this.interactiveChildren=!1,this.emit("destroyed"),this.removeAllListeners()},Object.defineProperty(r.prototype,"_tempDisplayObjectParent",{get:function(){return this.tempDisplayObjectParent===null&&(this.tempDisplayObjectParent=new Ep),this.tempDisplayObjectParent},enumerable:!1,configurable:!0}),r.prototype.enableTempParent=function(){var e=this.parent;return this.parent=this._tempDisplayObjectParent,e},r.prototype.disableTempParent=function(e){this.parent=e},Object.defineProperty(r.prototype,"x",{get:function(){return this.position.x},set:function(e){this.transform.position.x=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this.position.y},set:function(e){this.transform.position.y=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"worldTransform",{get:function(){return this.transform.worldTransform},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"localTransform",{get:function(){return this.transform.localTransform},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"position",{get:function(){return this.transform.position},set:function(e){this.transform.position.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"scale",{get:function(){return this.transform.scale},set:function(e){this.transform.scale.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"pivot",{get:function(){return this.transform.pivot},set:function(e){this.transform.pivot.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"skew",{get:function(){return this.transform.skew},set:function(e){this.transform.skew.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rotation",{get:function(){return this.transform.rotation},set:function(e){this.transform.rotation=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"angle",{get:function(){return this.transform.rotation*zx},set:function(e){this.transform.rotation=e*Cr},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"zIndex",{get:function(){return this._zIndex},set:function(e){this._zIndex=e,this.parent&&(this.parent.sortDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"worldVisible",{get:function(){var e=this;do{if(!e.visible)return!1;e=e.parent}while(e);return!0},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"mask",{get:function(){return this._mask},set:function(e){if(this._mask!==e){if(this._mask){var n=this._mask.isMaskData?this._mask.maskObject:this._mask;n&&(n._maskRefCount--,n._maskRefCount===0&&(n.renderable=!0,n.isMask=!1))}if(this._mask=e,this._mask){var n=this._mask.isMaskData?this._mask.maskObject:this._mask;n&&(n._maskRefCount===0&&(n.renderable=!1,n.isMask=!0),n._maskRefCount++)}}},enumerable:!1,configurable:!0}),r}(yi),Ep=function(t){Ql(r,t);function r(){var e=t!==null&&t.apply(this,arguments)||this;return e.sortDirty=null,e}return r}(Ft);Ft.prototype.displayObjectUpdateTransform=Ft.prototype.updateTransform;/*!
 * @pixi/constants - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var gc;(function(t){t[t.WEBGL_LEGACY=0]="WEBGL_LEGACY",t[t.WEBGL=1]="WEBGL",t[t.WEBGL2=2]="WEBGL2"})(gc||(gc={}));var yc;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.WEBGL=1]="WEBGL",t[t.CANVAS=2]="CANVAS"})(yc||(yc={}));var bc;(function(t){t[t.COLOR=16384]="COLOR",t[t.DEPTH=256]="DEPTH",t[t.STENCIL=1024]="STENCIL"})(bc||(bc={}));var xc;(function(t){t[t.NORMAL=0]="NORMAL",t[t.ADD=1]="ADD",t[t.MULTIPLY=2]="MULTIPLY",t[t.SCREEN=3]="SCREEN",t[t.OVERLAY=4]="OVERLAY",t[t.DARKEN=5]="DARKEN",t[t.LIGHTEN=6]="LIGHTEN",t[t.COLOR_DODGE=7]="COLOR_DODGE",t[t.COLOR_BURN=8]="COLOR_BURN",t[t.HARD_LIGHT=9]="HARD_LIGHT",t[t.SOFT_LIGHT=10]="SOFT_LIGHT",t[t.DIFFERENCE=11]="DIFFERENCE",t[t.EXCLUSION=12]="EXCLUSION",t[t.HUE=13]="HUE",t[t.SATURATION=14]="SATURATION",t[t.COLOR=15]="COLOR",t[t.LUMINOSITY=16]="LUMINOSITY",t[t.NORMAL_NPM=17]="NORMAL_NPM",t[t.ADD_NPM=18]="ADD_NPM",t[t.SCREEN_NPM=19]="SCREEN_NPM",t[t.NONE=20]="NONE",t[t.SRC_OVER=0]="SRC_OVER",t[t.SRC_IN=21]="SRC_IN",t[t.SRC_OUT=22]="SRC_OUT",t[t.SRC_ATOP=23]="SRC_ATOP",t[t.DST_OVER=24]="DST_OVER",t[t.DST_IN=25]="DST_IN",t[t.DST_OUT=26]="DST_OUT",t[t.DST_ATOP=27]="DST_ATOP",t[t.ERASE=26]="ERASE",t[t.SUBTRACT=28]="SUBTRACT",t[t.XOR=29]="XOR"})(xc||(xc={}));var wc;(function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(wc||(wc={}));var Tc;(function(t){t[t.RGBA=6408]="RGBA",t[t.RGB=6407]="RGB",t[t.RG=33319]="RG",t[t.RED=6403]="RED",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.ALPHA=6406]="ALPHA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(Tc||(Tc={}));var Cc;(function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Cc||(Cc={}));var Ec;(function(t){t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.BYTE=5120]="BYTE",t[t.SHORT=5122]="SHORT",t[t.INT=5124]="INT",t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",t[t.HALF_FLOAT=36193]="HALF_FLOAT"})(Ec||(Ec={}));var Pc;(function(t){t[t.FLOAT=0]="FLOAT",t[t.INT=1]="INT",t[t.UINT=2]="UINT"})(Pc||(Pc={}));var Ic;(function(t){t[t.NEAREST=0]="NEAREST",t[t.LINEAR=1]="LINEAR"})(Ic||(Ic={}));var Rc;(function(t){t[t.CLAMP=33071]="CLAMP",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Rc||(Rc={}));var Ac;(function(t){t[t.OFF=0]="OFF",t[t.POW2=1]="POW2",t[t.ON=2]="ON",t[t.ON_MANUAL=3]="ON_MANUAL"})(Ac||(Ac={}));var Nc;(function(t){t[t.NPM=0]="NPM",t[t.UNPACK=1]="UNPACK",t[t.PMA=2]="PMA",t[t.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",t[t.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",t[t.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",t[t.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(Nc||(Nc={}));var Oc;(function(t){t[t.NO=0]="NO",t[t.YES=1]="YES",t[t.AUTO=2]="AUTO",t[t.BLEND=0]="BLEND",t[t.CLEAR=1]="CLEAR",t[t.BLIT=2]="BLIT"})(Oc||(Oc={}));var Sc;(function(t){t[t.AUTO=0]="AUTO",t[t.MANUAL=1]="MANUAL"})(Sc||(Sc={}));var Uc;(function(t){t.LOW="lowp",t.MEDIUM="mediump",t.HIGH="highp"})(Uc||(Uc={}));var Aa;(function(t){t[t.NONE=0]="NONE",t[t.SCISSOR=1]="SCISSOR",t[t.STENCIL=2]="STENCIL",t[t.SPRITE=3]="SPRITE",t[t.COLOR=4]="COLOR"})(Aa||(Aa={}));var Lc;(function(t){t[t.RED=1]="RED",t[t.GREEN=2]="GREEN",t[t.BLUE=4]="BLUE",t[t.ALPHA=8]="ALPHA"})(Lc||(Lc={}));var Fc;(function(t){t[t.NONE=0]="NONE",t[t.LOW=2]="LOW",t[t.MEDIUM=4]="MEDIUM",t[t.HIGH=8]="HIGH"})(Fc||(Fc={}));var Mc;(function(t){t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Mc||(Mc={}));function Wx(t,r){return t.zIndex===r.zIndex?t._lastSortedIndex-r._lastSortedIndex:t.zIndex-r.zIndex}var Ht=function(t){Ql(r,t);function r(){var e=t.call(this)||this;return e.children=[],e.sortableChildren=X.SORTABLE_CHILDREN,e.sortDirty=!1,e}return r.prototype.onChildrenChange=function(e){},r.prototype.addChild=function(){for(var e=arguments,n=[],i=0;i<arguments.length;i++)n[i]=e[i];if(n.length>1)for(var o=0;o<n.length;o++)this.addChild(n[o]);else{var s=n[0];s.parent&&s.parent.removeChild(s),s.parent=this,this.sortDirty=!0,s.transform._parentID=-1,this.children.push(s),this._boundsID++,this.onChildrenChange(this.children.length-1),this.emit("childAdded",s,this,this.children.length-1),s.emit("added",this)}return n[0]},r.prototype.addChildAt=function(e,n){if(n<0||n>this.children.length)throw new Error(e+"addChildAt: The index "+n+" supplied is out of bounds "+this.children.length);return e.parent&&e.parent.removeChild(e),e.parent=this,this.sortDirty=!0,e.transform._parentID=-1,this.children.splice(n,0,e),this._boundsID++,this.onChildrenChange(n),e.emit("added",this),this.emit("childAdded",e,this,n),e},r.prototype.swapChildren=function(e,n){if(e!==n){var i=this.getChildIndex(e),o=this.getChildIndex(n);this.children[i]=n,this.children[o]=e,this.onChildrenChange(i<o?i:o)}},r.prototype.getChildIndex=function(e){var n=this.children.indexOf(e);if(n===-1)throw new Error("The supplied DisplayObject must be a child of the caller");return n},r.prototype.setChildIndex=function(e,n){if(n<0||n>=this.children.length)throw new Error("The index "+n+" supplied is out of bounds "+this.children.length);var i=this.getChildIndex(e);Qr(this.children,i,1),this.children.splice(n,0,e),this.onChildrenChange(n)},r.prototype.getChildAt=function(e){if(e<0||e>=this.children.length)throw new Error("getChildAt: Index ("+e+") does not exist.");return this.children[e]},r.prototype.removeChild=function(){for(var e=arguments,n=[],i=0;i<arguments.length;i++)n[i]=e[i];if(n.length>1)for(var o=0;o<n.length;o++)this.removeChild(n[o]);else{var s=n[0],l=this.children.indexOf(s);if(l===-1)return null;s.parent=null,s.transform._parentID=-1,Qr(this.children,l,1),this._boundsID++,this.onChildrenChange(l),s.emit("removed",this),this.emit("childRemoved",s,this,l)}return n[0]},r.prototype.removeChildAt=function(e){var n=this.getChildAt(e);return n.parent=null,n.transform._parentID=-1,Qr(this.children,e,1),this._boundsID++,this.onChildrenChange(e),n.emit("removed",this),this.emit("childRemoved",n,this,e),n},r.prototype.removeChildren=function(e,n){e===void 0&&(e=0),n===void 0&&(n=this.children.length);var i=e,o=n,s=o-i,l;if(s>0&&s<=o){l=this.children.splice(i,s);for(var h=0;h<l.length;++h)l[h].parent=null,l[h].transform&&(l[h].transform._parentID=-1);this._boundsID++,this.onChildrenChange(e);for(var h=0;h<l.length;++h)l[h].emit("removed",this),this.emit("childRemoved",l[h],this,h);return l}else if(s===0&&this.children.length===0)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},r.prototype.sortChildren=function(){for(var e=!1,n=0,i=this.children.length;n<i;++n){var o=this.children[n];o._lastSortedIndex=n,!e&&o.zIndex!==0&&(e=!0)}e&&this.children.length>1&&this.children.sort(Wx),this.sortDirty=!1},r.prototype.updateTransform=function(){this.sortableChildren&&this.sortDirty&&this.sortChildren(),this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(var e=0,n=this.children.length;e<n;++e){var i=this.children[e];i.visible&&i.updateTransform()}},r.prototype.calculateBounds=function(){this._bounds.clear(),this._calculateBounds();for(var e=0;e<this.children.length;e++){var n=this.children[e];if(!(!n.visible||!n.renderable))if(n.calculateBounds(),n._mask){var i=n._mask.isMaskData?n._mask.maskObject:n._mask;i?(i.calculateBounds(),this._bounds.addBoundsMask(n._bounds,i._bounds)):this._bounds.addBounds(n._bounds)}else n.filterArea?this._bounds.addBoundsArea(n._bounds,n.filterArea):this._bounds.addBounds(n._bounds)}this._bounds.updateID=this._boundsID},r.prototype.getLocalBounds=function(e,n){n===void 0&&(n=!1);var i=t.prototype.getLocalBounds.call(this,e);if(!n)for(var o=0,s=this.children.length;o<s;++o){var l=this.children[o];l.visible&&l.updateTransform()}return i},r.prototype._calculateBounds=function(){},r.prototype._renderWithCulling=function(e){var n=e.renderTexture.sourceFrame;if(n.width>0&&n.height>0){var i,o;if(this.cullArea?(i=this.cullArea,o=this.worldTransform):this._render!==r.prototype._render&&(i=this.getBounds(!0)),i&&n.intersects(i,o))this._render(e);else if(this.cullArea)return;for(var s=0,l=this.children.length;s<l;++s){var h=this.children[s],f=h.cullable;h.cullable=f||!this.cullArea,h.render(e),h.cullable=f}}},r.prototype.render=function(e){if(!(!this.visible||this.worldAlpha<=0||!this.renderable))if(this._mask||this.filters&&this.filters.length)this.renderAdvanced(e);else if(this.cullable)this._renderWithCulling(e);else{this._render(e);for(var n=0,i=this.children.length;n<i;++n)this.children[n].render(e)}},r.prototype.renderAdvanced=function(e){var n=this.filters,i=this._mask;if(n){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var o=0;o<n.length;o++)n[o].enabled&&this._enabledFilters.push(n[o])}var s=n&&this._enabledFilters&&this._enabledFilters.length||i&&(!i.isMaskData||i.enabled&&(i.autoDetect||i.type!==Aa.NONE));if(s&&e.batch.flush(),n&&this._enabledFilters&&this._enabledFilters.length&&e.filter.push(this,this._enabledFilters),i&&e.mask.push(this,this._mask),this.cullable)this._renderWithCulling(e);else{this._render(e);for(var o=0,l=this.children.length;o<l;++o)this.children[o].render(e)}s&&e.batch.flush(),i&&e.mask.pop(this),n&&this._enabledFilters&&this._enabledFilters.length&&e.filter.pop()},r.prototype._render=function(e){},r.prototype.destroy=function(e){t.prototype.destroy.call(this),this.sortDirty=!1;var n=typeof e=="boolean"?e:e&&e.children,i=this.removeChildren(0,this.children.length);if(n)for(var o=0;o<i.length;++o)i[o].destroy(e)},Object.defineProperty(r.prototype,"width",{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(e){var n=this.getLocalBounds().width;n!==0?this.scale.x=e/n:this.scale.x=1,this._width=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(e){var n=this.getLocalBounds().height;n!==0?this.scale.y=e/n:this.scale.y=1,this._height=e},enumerable:!1,configurable:!0}),r}(Ft);Ht.prototype.containerUpdateTransform=Ht.prototype.updateTransform;/*!
 * @pixi/extensions - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/extensions is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var qn=function(){return qn=Object.assign||function(r){for(var e=arguments,n,i=1,o=arguments.length;i<o;i++){n=e[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},qn.apply(this,arguments)},Tt;(function(t){t.Application="application",t.RendererPlugin="renderer-webgl-plugin",t.CanvasRendererPlugin="renderer-canvas-plugin",t.Loader="loader",t.LoadParser="load-parser",t.ResolveParser="resolve-parser",t.CacheParser="cache-parser",t.DetectionParser="detection-parser"})(Tt||(Tt={}));var kc=function(t){if(typeof t=="function"||typeof t=="object"&&t.extension){if(!t.extension)throw new Error("Extension class must have an extension object");var r=typeof t.extension!="object"?{type:t.extension}:t.extension;t=qn(qn({},r),{ref:t})}if(typeof t=="object")t=qn({},t);else throw new Error("Invalid extension type");return typeof t.type=="string"&&(t.type=[t.type]),t},Be={_addHandlers:null,_removeHandlers:null,_queue:{},remove:function(){for(var t=arguments,r=this,e=[],n=0;n<arguments.length;n++)e[n]=t[n];return e.map(kc).forEach(function(i){i.type.forEach(function(o){var s,l;return(l=(s=r._removeHandlers)[o])===null||l===void 0?void 0:l.call(s,i)})}),this},add:function(){for(var t=arguments,r=this,e=[],n=0;n<arguments.length;n++)e[n]=t[n];return e.map(kc).forEach(function(i){i.type.forEach(function(o){var s=r._addHandlers,l=r._queue;s[o]?s[o](i):(l[o]=l[o]||[],l[o].push(i))})}),this},handle:function(t,r,e){var n=this._addHandlers=this._addHandlers||{},i=this._removeHandlers=this._removeHandlers||{};if(n[t]||i[t])throw new Error("Extension type "+t+" already has a handler");n[t]=r,i[t]=e;var o=this._queue;return o[t]&&(o[t].forEach(function(s){return r(s)}),delete o[t]),this},handleByMap:function(t,r){return this.handle(t,function(e){r[e.name]=e.ref},function(e){delete r[e.name]})},handleByList:function(t,r){return this.handle(t,function(e){var n,i;r.push(e.ref),t===Tt.Loader&&((i=(n=e.ref).add)===null||i===void 0||i.call(n))},function(e){var n=r.indexOf(e.ref);n!==-1&&r.splice(n,1)})}};/*!
 * @pixi/runner - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/runner is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var jt=function(){function t(r){this.items=[],this._name=r,this._aliasCount=0}return t.prototype.emit=function(r,e,n,i,o,s,l,h){if(arguments.length>8)throw new Error("max arguments reached");var f=this,d=f.name,v=f.items;this._aliasCount++;for(var m=0,_=v.length;m<_;m++)v[m][d](r,e,n,i,o,s,l,h);return v===this.items&&this._aliasCount--,this},t.prototype.ensureNonAliasedItems=function(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))},t.prototype.add=function(r){return r[this._name]&&(this.ensureNonAliasedItems(),this.remove(r),this.items.push(r)),this},t.prototype.remove=function(r){var e=this.items.indexOf(r);return e!==-1&&(this.ensureNonAliasedItems(),this.items.splice(e,1)),this},t.prototype.contains=function(r){return this.items.indexOf(r)!==-1},t.prototype.removeAll=function(){return this.ensureNonAliasedItems(),this.items.length=0,this},t.prototype.destroy=function(){this.removeAll(),this.items=null,this._name=null},Object.defineProperty(t.prototype,"empty",{get:function(){return this.items.length===0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),t}();Object.defineProperties(jt.prototype,{dispatch:{value:jt.prototype.emit},run:{value:jt.prototype.emit}});/*!
 * @pixi/ticker - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/ticker is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */X.TARGET_FPMS=.06;var Me;(function(t){t[t.INTERACTION=50]="INTERACTION",t[t.HIGH=25]="HIGH",t[t.NORMAL=0]="NORMAL",t[t.LOW=-25]="LOW",t[t.UTILITY=-50]="UTILITY"})(Me||(Me={}));var Fs=function(){function t(r,e,n,i){e===void 0&&(e=null),n===void 0&&(n=0),i===void 0&&(i=!1),this.next=null,this.previous=null,this._destroyed=!1,this.fn=r,this.context=e,this.priority=n,this.once=i}return t.prototype.match=function(r,e){return e===void 0&&(e=null),this.fn===r&&this.context===e},t.prototype.emit=function(r){this.fn&&(this.context?this.fn.call(this.context,r):this.fn(r));var e=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),e},t.prototype.connect=function(r){this.previous=r,r.next&&(r.next.previous=this),this.next=r.next,r.next=this},t.prototype.destroy=function(r){r===void 0&&(r=!1),this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);var e=this.next;return this.next=r?null:e,this.previous=null,e},t}(),Vt=function(){function t(){var r=this;this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Fs(null,null,1/0),this.deltaMS=1/X.TARGET_FPMS,this.elapsedMS=1/X.TARGET_FPMS,this._tick=function(e){r._requestId=null,r.started&&(r.update(e),r.started&&r._requestId===null&&r._head.next&&(r._requestId=requestAnimationFrame(r._tick)))}}return t.prototype._requestIfNeeded=function(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))},t.prototype._cancelIfNeeded=function(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)},t.prototype._startIfPossible=function(){this.started?this._requestIfNeeded():this.autoStart&&this.start()},t.prototype.add=function(r,e,n){return n===void 0&&(n=Me.NORMAL),this._addListener(new Fs(r,e,n))},t.prototype.addOnce=function(r,e,n){return n===void 0&&(n=Me.NORMAL),this._addListener(new Fs(r,e,n,!0))},t.prototype._addListener=function(r){var e=this._head.next,n=this._head;if(!e)r.connect(n);else{for(;e;){if(r.priority>e.priority){r.connect(n);break}n=e,e=e.next}r.previous||r.connect(n)}return this._startIfPossible(),this},t.prototype.remove=function(r,e){for(var n=this._head.next;n;)n.match(r,e)?n=n.destroy():n=n.next;return this._head.next||this._cancelIfNeeded(),this},Object.defineProperty(t.prototype,"count",{get:function(){if(!this._head)return 0;for(var r=0,e=this._head;e=e.next;)r++;return r},enumerable:!1,configurable:!0}),t.prototype.start=function(){this.started||(this.started=!0,this._requestIfNeeded())},t.prototype.stop=function(){this.started&&(this.started=!1,this._cancelIfNeeded())},t.prototype.destroy=function(){if(!this._protected){this.stop();for(var r=this._head.next;r;)r=r.destroy(!0);this._head.destroy(),this._head=null}},t.prototype.update=function(r){r===void 0&&(r=performance.now());var e;if(r>this.lastTime){if(e=this.elapsedMS=r-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){var n=r-this._lastFrame|0;if(n<this._minElapsedMS)return;this._lastFrame=r-n%this._minElapsedMS}this.deltaMS=e,this.deltaTime=this.deltaMS*X.TARGET_FPMS;for(var i=this._head,o=i.next;o;)o=o.emit(this.deltaTime);i.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=r},Object.defineProperty(t.prototype,"FPS",{get:function(){return 1e3/this.elapsedMS},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"minFPS",{get:function(){return 1e3/this._maxElapsedMS},set:function(r){var e=Math.min(this.maxFPS,r),n=Math.min(Math.max(0,e)/1e3,X.TARGET_FPMS);this._maxElapsedMS=1/n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"maxFPS",{get:function(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0},set:function(r){if(r===0)this._minElapsedMS=0;else{var e=Math.max(this.minFPS,r);this._minElapsedMS=1/(e/1e3)}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"shared",{get:function(){if(!t._shared){var r=t._shared=new t;r.autoStart=!0,r._protected=!0}return t._shared},enumerable:!1,configurable:!0}),Object.defineProperty(t,"system",{get:function(){if(!t._system){var r=t._system=new t;r.autoStart=!0,r._protected=!0}return t._system},enumerable:!1,configurable:!0}),t}(),qx=function(){function t(){}return t.init=function(r){var e=this;r=Object.assign({autoStart:!0,sharedTicker:!1},r),Object.defineProperty(this,"ticker",{set:function(n){this._ticker&&this._ticker.remove(this.render,this),this._ticker=n,n&&n.add(this.render,this,Me.LOW)},get:function(){return this._ticker}}),this.stop=function(){e._ticker.stop()},this.start=function(){e._ticker.start()},this._ticker=null,this.ticker=r.sharedTicker?Vt.shared:new Vt,r.autoStart&&this.start()},t.destroy=function(){if(this._ticker){var r=this._ticker;this.ticker=null,r.destroy()}},t.extension=Tt.Application,t}();/*!
 * @pixi/core - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/core is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */X.PREFER_ENV=me.any?Fe.WEBGL:Fe.WEBGL2;X.STRICT_TEXTURE_CACHE=!1;var Na=[];function Pp(t,r){if(!t)return null;var e="";if(typeof t=="string"){var n=/\.(\w{3,4})(?:$|\?|#)/i.exec(t);n&&(e=n[1].toLowerCase())}for(var i=Na.length-1;i>=0;--i){var o=Na[i];if(o.test&&o.test(t,e))return new o(t,r)}throw new Error("Unrecognized source type to auto-detect Resource")}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Oa=function(t,r){return Oa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},Oa(t,r)};function Et(t,r){Oa(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var Sa=function(){return Sa=Object.assign||function(r){for(var e=arguments,n,i=1,o=arguments.length;i<o;i++){n=e[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Sa.apply(this,arguments)};function Yx(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(e[n[i]]=t[n[i]]);return e}var oi=function(){function t(r,e){r===void 0&&(r=0),e===void 0&&(e=0),this._width=r,this._height=e,this.destroyed=!1,this.internal=!1,this.onResize=new jt("setRealSize"),this.onUpdate=new jt("update"),this.onError=new jt("onError")}return t.prototype.bind=function(r){this.onResize.add(r),this.onUpdate.add(r),this.onError.add(r),(this._width||this._height)&&this.onResize.emit(this._width,this._height)},t.prototype.unbind=function(r){this.onResize.remove(r),this.onUpdate.remove(r),this.onError.remove(r)},t.prototype.resize=function(r,e){(r!==this._width||e!==this._height)&&(this._width=r,this._height=e,this.onResize.emit(r,e))},Object.defineProperty(t.prototype,"valid",{get:function(){return!!this._width&&!!this._height},enumerable:!1,configurable:!0}),t.prototype.update=function(){this.destroyed||this.onUpdate.emit()},t.prototype.load=function(){return Promise.resolve(this)},Object.defineProperty(t.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),t.prototype.style=function(r,e,n){return!1},t.prototype.dispose=function(){},t.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)},t.test=function(r,e){return!1},t}(),xi=function(t){Et(r,t);function r(e,n){var i=this,o=n||{},s=o.width,l=o.height;if(!s||!l)throw new Error("BufferResource width or height invalid");return i=t.call(this,s,l)||this,i.data=e,i}return r.prototype.upload=function(e,n,i){var o=e.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===ce.UNPACK);var s=n.realWidth,l=n.realHeight;return i.width===s&&i.height===l?o.texSubImage2D(n.target,0,0,0,s,l,n.format,i.type,this.data):(i.width=s,i.height=l,o.texImage2D(n.target,0,i.internalFormat,s,l,0,n.format,i.type,this.data)),!0},r.prototype.dispose=function(){this.data=null},r.test=function(e){return e instanceof Float32Array||e instanceof Uint8Array||e instanceof Uint32Array},r}(oi),Kx={scaleMode:ee.NEAREST,format:G.RGBA,alphaMode:ce.NPM},vt=function(t){Et(r,t);function r(e,n){e===void 0&&(e=null),n===void 0&&(n=null);var i=t.call(this)||this;n=n||{};var o=n.alphaMode,s=n.mipmap,l=n.anisotropicLevel,h=n.scaleMode,f=n.width,d=n.height,v=n.wrapMode,m=n.format,_=n.type,g=n.target,b=n.resolution,y=n.resourceOptions;return e&&!(e instanceof oi)&&(e=Pp(e,y),e.internal=!0),i.resolution=b||X.RESOLUTION,i.width=Math.round((f||0)*i.resolution)/i.resolution,i.height=Math.round((d||0)*i.resolution)/i.resolution,i._mipmap=s!==void 0?s:X.MIPMAP_TEXTURES,i.anisotropicLevel=l!==void 0?l:X.ANISOTROPIC_LEVEL,i._wrapMode=v||X.WRAP_MODE,i._scaleMode=h!==void 0?h:X.SCALE_MODE,i.format=m||G.RGBA,i.type=_||Y.UNSIGNED_BYTE,i.target=g||gr.TEXTURE_2D,i.alphaMode=o!==void 0?o:ce.UNPACK,i.uid=Tr(),i.touched=0,i.isPowerOfTwo=!1,i._refreshPOT(),i._glTextures={},i.dirtyId=0,i.dirtyStyleId=0,i.cacheId=null,i.valid=f>0&&d>0,i.textureCacheIds=[],i.destroyed=!1,i.resource=null,i._batchEnabled=0,i._batchLocation=0,i.parentTextureArray=null,i.setResource(e),i}return Object.defineProperty(r.prototype,"realWidth",{get:function(){return Math.round(this.width*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"realHeight",{get:function(){return Math.round(this.height*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"mipmap",{get:function(){return this._mipmap},set:function(e){this._mipmap!==e&&(this._mipmap=e,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"scaleMode",{get:function(){return this._scaleMode},set:function(e){this._scaleMode!==e&&(this._scaleMode=e,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wrapMode",{get:function(){return this._wrapMode},set:function(e){this._wrapMode!==e&&(this._wrapMode=e,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),r.prototype.setStyle=function(e,n){var i;return e!==void 0&&e!==this.scaleMode&&(this.scaleMode=e,i=!0),n!==void 0&&n!==this.mipmap&&(this.mipmap=n,i=!0),i&&this.dirtyStyleId++,this},r.prototype.setSize=function(e,n,i){return i=i||this.resolution,this.setRealSize(e*i,n*i,i)},r.prototype.setRealSize=function(e,n,i){return this.resolution=i||this.resolution,this.width=Math.round(e)/this.resolution,this.height=Math.round(n)/this.resolution,this._refreshPOT(),this.update(),this},r.prototype._refreshPOT=function(){this.isPowerOfTwo=dc(this.realWidth)&&dc(this.realHeight)},r.prototype.setResolution=function(e){var n=this.resolution;return n===e?this:(this.resolution=e,this.valid&&(this.width=Math.round(this.width*n)/e,this.height=Math.round(this.height*n)/e,this.emit("update",this)),this._refreshPOT(),this)},r.prototype.setResource=function(e){if(this.resource===e)return this;if(this.resource)throw new Error("Resource can be set only once");return e.bind(this),this.resource=e,this},r.prototype.update=function(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))},r.prototype.onError=function(e){this.emit("error",this,e)},r.prototype.destroy=function(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete lr[this.cacheId],delete Oe[this.cacheId],this.cacheId=null),this.dispose(),r.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0},r.prototype.dispose=function(){this.emit("dispose",this)},r.prototype.castToBaseTexture=function(){return this},r.from=function(e,n,i){i===void 0&&(i=X.STRICT_TEXTURE_CACHE);var o=typeof e=="string",s=null;if(o)s=e;else{if(!e._pixiId){var l=n&&n.pixiIdPrefix||"pixiid";e._pixiId=l+"_"+Tr()}s=e._pixiId}var h=lr[s];if(o&&i&&!h)throw new Error('The cacheId "'+s+'" does not exist in BaseTextureCache.');return h||(h=new r(e,n),h.cacheId=s,r.addToCache(h,s)),h},r.fromBuffer=function(e,n,i,o){e=e||new Float32Array(n*i*4);var s=new xi(e,{width:n,height:i}),l=e instanceof Float32Array?Y.FLOAT:Y.UNSIGNED_BYTE;return new r(s,Object.assign(Kx,o||{width:n,height:i,type:l}))},r.addToCache=function(e,n){n&&(e.textureCacheIds.indexOf(n)===-1&&e.textureCacheIds.push(n),lr[n]&&console.warn("BaseTexture added to the cache with an id ["+n+"] that already had an entry"),lr[n]=e)},r.removeFromCache=function(e){if(typeof e=="string"){var n=lr[e];if(n){var i=n.textureCacheIds.indexOf(e);return i>-1&&n.textureCacheIds.splice(i,1),delete lr[e],n}}else if(e&&e.textureCacheIds){for(var o=0;o<e.textureCacheIds.length;++o)delete lr[e.textureCacheIds[o]];return e.textureCacheIds.length=0,e}return null},r._globalBatch=0,r}(yi),Ip=function(t){Et(r,t);function r(e,n){var i=this,o=n||{},s=o.width,l=o.height;i=t.call(this,s,l)||this,i.items=[],i.itemDirtyIds=[];for(var h=0;h<e;h++){var f=new vt;i.items.push(f),i.itemDirtyIds.push(-2)}return i.length=e,i._load=null,i.baseTexture=null,i}return r.prototype.initFromArray=function(e,n){for(var i=0;i<this.length;i++)!e[i]||(e[i].castToBaseTexture?this.addBaseTextureAt(e[i].castToBaseTexture(),i):e[i]instanceof oi?this.addResourceAt(e[i],i):this.addResourceAt(Pp(e[i],n),i))},r.prototype.dispose=function(){for(var e=0,n=this.length;e<n;e++)this.items[e].destroy();this.items=null,this.itemDirtyIds=null,this._load=null},r.prototype.addResourceAt=function(e,n){if(!this.items[n])throw new Error("Index "+n+" is out of bounds");return e.valid&&!this.valid&&this.resize(e.width,e.height),this.items[n].setResource(e),this},r.prototype.bind=function(e){if(this.baseTexture!==null)throw new Error("Only one base texture per TextureArray is allowed");t.prototype.bind.call(this,e);for(var n=0;n<this.length;n++)this.items[n].parentTextureArray=e,this.items[n].on("update",e.update,e)},r.prototype.unbind=function(e){t.prototype.unbind.call(this,e);for(var n=0;n<this.length;n++)this.items[n].parentTextureArray=null,this.items[n].off("update",e.update,e)},r.prototype.load=function(){var e=this;if(this._load)return this._load;var n=this.items.map(function(o){return o.resource}).filter(function(o){return o}),i=n.map(function(o){return o.load()});return this._load=Promise.all(i).then(function(){var o=e.items[0],s=o.realWidth,l=o.realHeight;return e.resize(s,l),Promise.resolve(e)}),this._load},r}(oi),Zx=function(t){Et(r,t);function r(e,n){var i=this,o=n||{},s=o.width,l=o.height,h,f;return Array.isArray(e)?(h=e,f=e.length):f=e,i=t.call(this,f,{width:s,height:l})||this,h&&i.initFromArray(h,n),i}return r.prototype.addBaseTextureAt=function(e,n){if(e.resource)this.addResourceAt(e.resource,n);else throw new Error("ArrayResource does not support RenderTexture");return this},r.prototype.bind=function(e){t.prototype.bind.call(this,e),e.target=gr.TEXTURE_2D_ARRAY},r.prototype.upload=function(e,n,i){var o=this,s=o.length,l=o.itemDirtyIds,h=o.items,f=e.gl;i.dirtyId<0&&f.texImage3D(f.TEXTURE_2D_ARRAY,0,i.internalFormat,this._width,this._height,s,0,n.format,i.type,null);for(var d=0;d<s;d++){var v=h[d];l[d]<v.dirtyId&&(l[d]=v.dirtyId,v.valid&&f.texSubImage3D(f.TEXTURE_2D_ARRAY,0,0,0,d,v.resource.width,v.resource.height,1,n.format,i.type,v.resource.source))}return!0},r}(Ip),Je=function(t){Et(r,t);function r(e){var n=this,i=e,o=i.naturalWidth||i.videoWidth||i.width,s=i.naturalHeight||i.videoHeight||i.height;return n=t.call(this,o,s)||this,n.source=e,n.noSubImage=!1,n}return r.crossOrigin=function(e,n,i){i===void 0&&n.indexOf("data:")!==0?e.crossOrigin=Xx(n):i!==!1&&(e.crossOrigin=typeof i=="string"?i:"anonymous")},r.prototype.upload=function(e,n,i,o){var s=e.gl,l=n.realWidth,h=n.realHeight;if(o=o||this.source,o instanceof HTMLImageElement){if(!o.complete||o.naturalWidth===0)return!1}else if(o instanceof HTMLVideoElement&&o.readyState<=1)return!1;return s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===ce.UNPACK),!this.noSubImage&&n.target===s.TEXTURE_2D&&i.width===l&&i.height===h?s.texSubImage2D(s.TEXTURE_2D,0,0,0,n.format,i.type,o):(i.width=l,i.height=h,s.texImage2D(n.target,0,i.internalFormat,n.format,i.type,o)),!0},r.prototype.update=function(){if(!this.destroyed){var e=this.source,n=e.naturalWidth||e.videoWidth||e.width,i=e.naturalHeight||e.videoHeight||e.height;this.resize(n,i),t.prototype.update.call(this)}},r.prototype.dispose=function(){this.source=null},r}(oi),Jx=function(t){Et(r,t);function r(e){return t.call(this,e)||this}return r.test=function(e){var n=globalThis.OffscreenCanvas;return n&&e instanceof n?!0:globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement},r}(Je),Qx=function(t){Et(r,t);function r(e,n){var i=this,o=n||{},s=o.width,l=o.height,h=o.autoLoad,f=o.linkBaseTexture;if(e&&e.length!==r.SIDES)throw new Error("Invalid length. Got "+e.length+", expected 6");i=t.call(this,6,{width:s,height:l})||this;for(var d=0;d<r.SIDES;d++)i.items[d].target=gr.TEXTURE_CUBE_MAP_POSITIVE_X+d;return i.linkBaseTexture=f!==!1,e&&i.initFromArray(e,n),h!==!1&&i.load(),i}return r.prototype.bind=function(e){t.prototype.bind.call(this,e),e.target=gr.TEXTURE_CUBE_MAP},r.prototype.addBaseTextureAt=function(e,n,i){if(!this.items[n])throw new Error("Index "+n+" is out of bounds");if(!this.linkBaseTexture||e.parentTextureArray||Object.keys(e._glTextures).length>0)if(e.resource)this.addResourceAt(e.resource,n);else throw new Error("CubeResource does not support copying of renderTexture.");else e.target=gr.TEXTURE_CUBE_MAP_POSITIVE_X+n,e.parentTextureArray=this.baseTexture,this.items[n]=e;return e.valid&&!this.valid&&this.resize(e.realWidth,e.realHeight),this.items[n]=e,this},r.prototype.upload=function(e,n,i){for(var o=this.itemDirtyIds,s=0;s<r.SIDES;s++){var l=this.items[s];(o[s]<l.dirtyId||i.dirtyId<n.dirtyId)&&(l.valid&&l.resource?(l.resource.upload(e,l,i),o[s]=l.dirtyId):o[s]<-1&&(e.gl.texImage2D(l.target,0,i.internalFormat,n.realWidth,n.realHeight,0,n.format,i.type,null),o[s]=-1))}return!0},r.test=function(e){return Array.isArray(e)&&e.length===r.SIDES},r.SIDES=6,r}(Ip),Rp=function(t){Et(r,t);function r(e,n){var i=this;if(n=n||{},!(e instanceof HTMLImageElement)){var o=new Image;Je.crossOrigin(o,e,n.crossorigin),o.src=e,e=o}return i=t.call(this,e)||this,!e.complete&&!!i._width&&!!i._height&&(i._width=0,i._height=0),i.url=e.src,i._process=null,i.preserveBitmap=!1,i.createBitmap=(n.createBitmap!==void 0?n.createBitmap:X.CREATE_IMAGE_BITMAP)&&!!globalThis.createImageBitmap,i.alphaMode=typeof n.alphaMode=="number"?n.alphaMode:null,i.bitmap=null,i._load=null,n.autoLoad!==!1&&i.load(),i}return r.prototype.load=function(e){var n=this;return this._load?this._load:(e!==void 0&&(this.createBitmap=e),this._load=new Promise(function(i,o){var s=n.source;n.url=s.src;var l=function(){n.destroyed||(s.onload=null,s.onerror=null,n.resize(s.width,s.height),n._load=null,n.createBitmap?i(n.process()):i(n))};s.complete&&s.src?l():(s.onload=l,s.onerror=function(h){o(h),n.onError.emit(h)})}),this._load)},r.prototype.process=function(){var e=this,n=this.source;if(this._process!==null)return this._process;if(this.bitmap!==null||!globalThis.createImageBitmap)return Promise.resolve(this);var i=globalThis.createImageBitmap,o=!n.crossOrigin||n.crossOrigin==="anonymous";return this._process=fetch(n.src,{mode:o?"cors":"no-cors"}).then(function(s){return s.blob()}).then(function(s){return i(s,0,0,n.width,n.height,{premultiplyAlpha:e.alphaMode===ce.UNPACK?"premultiply":"none"})}).then(function(s){return e.destroyed?Promise.reject():(e.bitmap=s,e.update(),e._process=null,Promise.resolve(e))}),this._process},r.prototype.upload=function(e,n,i){if(typeof this.alphaMode=="number"&&(n.alphaMode=this.alphaMode),!this.createBitmap)return t.prototype.upload.call(this,e,n,i);if(!this.bitmap&&(this.process(),!this.bitmap))return!1;if(t.prototype.upload.call(this,e,n,i,this.bitmap),!this.preserveBitmap){var o=!0,s=n._glTextures;for(var l in s){var h=s[l];if(h!==i&&h.dirtyId!==n.dirtyId){o=!1;break}}o&&(this.bitmap.close&&this.bitmap.close(),this.bitmap=null)}return!0},r.prototype.dispose=function(){this.source.onload=null,this.source.onerror=null,t.prototype.dispose.call(this),this.bitmap&&(this.bitmap.close(),this.bitmap=null),this._process=null,this._load=null},r.test=function(e){return typeof e=="string"||e instanceof HTMLImageElement},r}(Je),t1=function(t){Et(r,t);function r(e,n){var i=this;return n=n||{},i=t.call(this,X.ADAPTER.createCanvas())||this,i._width=0,i._height=0,i.svg=e,i.scale=n.scale||1,i._overrideWidth=n.width,i._overrideHeight=n.height,i._resolve=null,i._crossorigin=n.crossorigin,i._load=null,n.autoLoad!==!1&&i.load(),i}return r.prototype.load=function(){var e=this;return this._load?this._load:(this._load=new Promise(function(n){if(e._resolve=function(){e.resize(e.source.width,e.source.height),n(e)},r.SVG_XML.test(e.svg.trim())){if(!btoa)throw new Error("Your browser doesn't support base64 conversions.");e.svg="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(e.svg)))}e._loadSvg()}),this._load)},r.prototype._loadSvg=function(){var e=this,n=new Image;Je.crossOrigin(n,this.svg,this._crossorigin),n.src=this.svg,n.onerror=function(i){!e._resolve||(n.onerror=null,e.onError.emit(i))},n.onload=function(){if(!!e._resolve){var i=n.width,o=n.height;if(!i||!o)throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");var s=i*e.scale,l=o*e.scale;(e._overrideWidth||e._overrideHeight)&&(s=e._overrideWidth||e._overrideHeight/o*i,l=e._overrideHeight||e._overrideWidth/i*o),s=Math.round(s),l=Math.round(l);var h=e.source;h.width=s,h.height=l,h._pixiId="canvas_"+Tr(),h.getContext("2d").drawImage(n,0,0,i,o,0,0,s,l),e._resolve(),e._resolve=null}}},r.getSize=function(e){var n=r.SVG_SIZE.exec(e),i={};return n&&(i[n[1]]=Math.round(parseFloat(n[3])),i[n[5]]=Math.round(parseFloat(n[7]))),i},r.prototype.dispose=function(){t.prototype.dispose.call(this),this._resolve=null,this._crossorigin=null},r.test=function(e,n){return n==="svg"||typeof e=="string"&&/^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(e)||typeof e=="string"&&r.SVG_XML.test(e)},r.SVG_XML=/^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,r.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,r}(Je),e1=function(t){Et(r,t);function r(e,n){var i=this;if(n=n||{},!(e instanceof HTMLVideoElement)){var o=document.createElement("video");o.setAttribute("preload","auto"),o.setAttribute("webkit-playsinline",""),o.setAttribute("playsinline",""),typeof e=="string"&&(e=[e]);var s=e[0].src||e[0];Je.crossOrigin(o,s,n.crossorigin);for(var l=0;l<e.length;++l){var h=document.createElement("source"),f=e[l],d=f.src,v=f.mime;d=d||e[l];var m=d.split("?").shift().toLowerCase(),_=m.slice(m.lastIndexOf(".")+1);v=v||r.MIME_TYPES[_]||"video/"+_,h.src=d,h.type=v,o.appendChild(h)}e=o}return i=t.call(this,e)||this,i.noSubImage=!0,i._autoUpdate=!0,i._isConnectedToTicker=!1,i._updateFPS=n.updateFPS||0,i._msToNextUpdate=0,i.autoPlay=n.autoPlay!==!1,i._load=null,i._resolve=null,i._onCanPlay=i._onCanPlay.bind(i),i._onError=i._onError.bind(i),n.autoLoad!==!1&&i.load(),i}return r.prototype.update=function(e){if(!this.destroyed){var n=Vt.shared.elapsedMS*this.source.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-n),(!this._updateFPS||this._msToNextUpdate<=0)&&(t.prototype.update.call(this),this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0)}},r.prototype.load=function(){var e=this;if(this._load)return this._load;var n=this.source;return(n.readyState===n.HAVE_ENOUGH_DATA||n.readyState===n.HAVE_FUTURE_DATA)&&n.width&&n.height&&(n.complete=!0),n.addEventListener("play",this._onPlayStart.bind(this)),n.addEventListener("pause",this._onPlayStop.bind(this)),this._isSourceReady()?this._onCanPlay():(n.addEventListener("canplay",this._onCanPlay),n.addEventListener("canplaythrough",this._onCanPlay),n.addEventListener("error",this._onError,!0)),this._load=new Promise(function(i){e.valid?i(e):(e._resolve=i,n.load())}),this._load},r.prototype._onError=function(e){this.source.removeEventListener("error",this._onError,!0),this.onError.emit(e)},r.prototype._isSourcePlaying=function(){var e=this.source;return e.currentTime>0&&e.paused===!1&&e.ended===!1&&e.readyState>2},r.prototype._isSourceReady=function(){var e=this.source;return e.readyState===3||e.readyState===4},r.prototype._onPlayStart=function(){this.valid||this._onCanPlay(),this.autoUpdate&&!this._isConnectedToTicker&&(Vt.shared.add(this.update,this),this._isConnectedToTicker=!0)},r.prototype._onPlayStop=function(){this._isConnectedToTicker&&(Vt.shared.remove(this.update,this),this._isConnectedToTicker=!1)},r.prototype._onCanPlay=function(){var e=this.source;e.removeEventListener("canplay",this._onCanPlay),e.removeEventListener("canplaythrough",this._onCanPlay);var n=this.valid;this.resize(e.videoWidth,e.videoHeight),!n&&this._resolve&&(this._resolve(this),this._resolve=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&e.play()},r.prototype.dispose=function(){this._isConnectedToTicker&&(Vt.shared.remove(this.update,this),this._isConnectedToTicker=!1);var e=this.source;e&&(e.removeEventListener("error",this._onError,!0),e.pause(),e.src="",e.load()),t.prototype.dispose.call(this)},Object.defineProperty(r.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(Vt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._isSourcePlaying()&&(Vt.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"updateFPS",{get:function(){return this._updateFPS},set:function(e){e!==this._updateFPS&&(this._updateFPS=e)},enumerable:!1,configurable:!0}),r.test=function(e,n){return globalThis.HTMLVideoElement&&e instanceof HTMLVideoElement||r.TYPES.indexOf(n)>-1},r.TYPES=["mp4","m4v","webm","ogg","ogv","h264","avi","mov"],r.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"},r}(Je),r1=function(t){Et(r,t);function r(e){return t.call(this,e)||this}return r.test=function(e){return!!globalThis.createImageBitmap&&typeof ImageBitmap<"u"&&e instanceof ImageBitmap},r}(Je);Na.push(Rp,r1,Jx,e1,t1,xi,Qx,Zx);var n1=function(t){Et(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.upload=function(e,n,i){var o=e.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===ce.UNPACK);var s=n.realWidth,l=n.realHeight;return i.width===s&&i.height===l?o.texSubImage2D(n.target,0,0,0,s,l,n.format,i.type,this.data):(i.width=s,i.height=l,o.texImage2D(n.target,0,i.internalFormat,s,l,0,n.format,i.type,this.data)),!0},r}(xi),Ua=function(){function t(r,e){this.width=Math.round(r||100),this.height=Math.round(e||100),this.stencil=!1,this.depth=!1,this.dirtyId=0,this.dirtyFormat=0,this.dirtySize=0,this.depthTexture=null,this.colorTextures=[],this.glFramebuffers={},this.disposeRunner=new jt("disposeFramebuffer"),this.multisample=Mt.NONE}return Object.defineProperty(t.prototype,"colorTexture",{get:function(){return this.colorTextures[0]},enumerable:!1,configurable:!0}),t.prototype.addColorTexture=function(r,e){return r===void 0&&(r=0),this.colorTextures[r]=e||new vt(null,{scaleMode:ee.NEAREST,resolution:1,mipmap:he.OFF,width:this.width,height:this.height}),this.dirtyId++,this.dirtyFormat++,this},t.prototype.addDepthTexture=function(r){return this.depthTexture=r||new vt(new n1(null,{width:this.width,height:this.height}),{scaleMode:ee.NEAREST,resolution:1,width:this.width,height:this.height,mipmap:he.OFF,format:G.DEPTH_COMPONENT,type:Y.UNSIGNED_SHORT}),this.dirtyId++,this.dirtyFormat++,this},t.prototype.enableDepth=function(){return this.depth=!0,this.dirtyId++,this.dirtyFormat++,this},t.prototype.enableStencil=function(){return this.stencil=!0,this.dirtyId++,this.dirtyFormat++,this},t.prototype.resize=function(r,e){if(r=Math.round(r),e=Math.round(e),!(r===this.width&&e===this.height)){this.width=r,this.height=e,this.dirtyId++,this.dirtySize++;for(var n=0;n<this.colorTextures.length;n++){var i=this.colorTextures[n],o=i.resolution;i.setSize(r/o,e/o)}if(this.depthTexture){var o=this.depthTexture.resolution;this.depthTexture.setSize(r/o,e/o)}}},t.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},t.prototype.destroyDepthTexture=function(){this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=null,++this.dirtyId,++this.dirtyFormat)},t}(),Ap=function(t){Et(r,t);function r(e){e===void 0&&(e={});var n=this;if(typeof e=="number"){var i=arguments[0],o=arguments[1],s=arguments[2],l=arguments[3];e={width:i,height:o,scaleMode:s,resolution:l}}return e.width=e.width||100,e.height=e.height||100,e.multisample=e.multisample!==void 0?e.multisample:Mt.NONE,n=t.call(this,null,e)||this,n.mipmap=he.OFF,n.valid=!0,n.clearColor=[0,0,0,0],n.framebuffer=new Ua(n.realWidth,n.realHeight).addColorTexture(0,n),n.framebuffer.multisample=e.multisample,n.maskStack=[],n.filterStack=[{}],n}return r.prototype.resize=function(e,n){this.framebuffer.resize(e*this.resolution,n*this.resolution),this.setRealSize(this.framebuffer.width,this.framebuffer.height)},r.prototype.dispose=function(){this.framebuffer.dispose(),t.prototype.dispose.call(this)},r.prototype.destroy=function(){t.prototype.destroy.call(this),this.framebuffer.destroyDepthTexture(),this.framebuffer=null},r}(vt),Np=function(){function t(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}return t.prototype.set=function(r,e,n){var i=e.width,o=e.height;if(n){var s=r.width/2/i,l=r.height/2/o,h=r.x/i+s,f=r.y/o+l;n=At.add(n,At.NW),this.x0=h+s*At.uX(n),this.y0=f+l*At.uY(n),n=At.add(n,2),this.x1=h+s*At.uX(n),this.y1=f+l*At.uY(n),n=At.add(n,2),this.x2=h+s*At.uX(n),this.y2=f+l*At.uY(n),n=At.add(n,2),this.x3=h+s*At.uX(n),this.y3=f+l*At.uY(n)}else this.x0=r.x/i,this.y0=r.y/o,this.x1=(r.x+r.width)/i,this.y1=r.y/o,this.x2=(r.x+r.width)/i,this.y2=(r.y+r.height)/o,this.x3=r.x/i,this.y3=(r.y+r.height)/o;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3},t.prototype.toString=function(){return"[@pixi/core:TextureUvs "+("x0="+this.x0+" y0="+this.y0+" ")+("x1="+this.x1+" y1="+this.y1+" x2="+this.x2+" ")+("y2="+this.y2+" x3="+this.x3+" y3="+this.y3)+"]"},t}(),Bc=new Np;function Hi(t){t.destroy=function(){},t.on=function(){},t.once=function(){},t.emit=function(){}}var tt=function(t){Et(r,t);function r(e,n,i,o,s,l){var h=t.call(this)||this;if(h.noFrame=!1,n||(h.noFrame=!0,n=new mt(0,0,1,1)),e instanceof r&&(e=e.baseTexture),h.baseTexture=e,h._frame=n,h.trim=o,h.valid=!1,h._uvs=Bc,h.uvMatrix=null,h.orig=i||n,h._rotate=Number(s||0),s===!0)h._rotate=2;else if(h._rotate%2!==0)throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");return h.defaultAnchor=l?new ct(l.x,l.y):new ct(0,0),h._updateID=0,h.textureCacheIds=[],e.valid?h.noFrame?e.valid&&h.onBaseTextureUpdated(e):h.frame=n:e.once("loaded",h.onBaseTextureUpdated,h),h.noFrame&&e.on("update",h.onBaseTextureUpdated,h),h}return r.prototype.update=function(){this.baseTexture.resource&&this.baseTexture.resource.update()},r.prototype.onBaseTextureUpdated=function(e){if(this.noFrame){if(!this.baseTexture.valid)return;this._frame.width=e.width,this._frame.height=e.height,this.valid=!0,this.updateUvs()}else this.frame=this._frame;this.emit("update",this)},r.prototype.destroy=function(e){if(this.baseTexture){if(e){var n=this.baseTexture.resource;n&&n.url&&Oe[n.url]&&r.removeFromCache(n.url),this.baseTexture.destroy()}this.baseTexture.off("loaded",this.onBaseTextureUpdated,this),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture=null}this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,r.removeFromCache(this),this.textureCacheIds=null},r.prototype.clone=function(){var e=this._frame.clone(),n=this._frame===this.orig?e:this.orig.clone(),i=new r(this.baseTexture,!this.noFrame&&e,n,this.trim&&this.trim.clone(),this.rotate,this.defaultAnchor);return this.noFrame&&(i._frame=e),i},r.prototype.updateUvs=function(){this._uvs===Bc&&(this._uvs=new Np),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++},r.from=function(e,n,i){n===void 0&&(n={}),i===void 0&&(i=X.STRICT_TEXTURE_CACHE);var o=typeof e=="string",s=null;if(o)s=e;else if(e instanceof vt){if(!e.cacheId){var l=n&&n.pixiIdPrefix||"pixiid";e.cacheId=l+"-"+Tr(),vt.addToCache(e,e.cacheId)}s=e.cacheId}else{if(!e._pixiId){var l=n&&n.pixiIdPrefix||"pixiid";e._pixiId=l+"_"+Tr()}s=e._pixiId}var h=Oe[s];if(o&&i&&!h)throw new Error('The cacheId "'+s+'" does not exist in TextureCache.');return!h&&!(e instanceof vt)?(n.resolution||(n.resolution=_o(e)),h=new r(new vt(e,n)),h.baseTexture.cacheId=s,vt.addToCache(h.baseTexture,s),r.addToCache(h,s)):!h&&e instanceof vt&&(h=new r(e),r.addToCache(h,s)),h},r.fromURL=function(e,n){var i=Object.assign({autoLoad:!1},n==null?void 0:n.resourceOptions),o=r.from(e,Object.assign({resourceOptions:i},n),!1),s=o.baseTexture.resource;return o.baseTexture.valid?Promise.resolve(o):s.load().then(function(){return Promise.resolve(o)})},r.fromBuffer=function(e,n,i,o){return new r(vt.fromBuffer(e,n,i,o))},r.fromLoader=function(e,n,i,o){var s=new vt(e,Object.assign({scaleMode:X.SCALE_MODE,resolution:_o(n)},o)),l=s.resource;l instanceof Rp&&(l.url=n);var h=new r(s);return i||(i=n),vt.addToCache(h.baseTexture,i),r.addToCache(h,i),i!==n&&(vt.addToCache(h.baseTexture,n),r.addToCache(h,n)),h.baseTexture.valid?Promise.resolve(h):new Promise(function(f){h.baseTexture.once("loaded",function(){return f(h)})})},r.addToCache=function(e,n){n&&(e.textureCacheIds.indexOf(n)===-1&&e.textureCacheIds.push(n),Oe[n]&&console.warn("Texture added to the cache with an id ["+n+"] that already had an entry"),Oe[n]=e)},r.removeFromCache=function(e){if(typeof e=="string"){var n=Oe[e];if(n){var i=n.textureCacheIds.indexOf(e);return i>-1&&n.textureCacheIds.splice(i,1),delete Oe[e],n}}else if(e&&e.textureCacheIds){for(var o=0;o<e.textureCacheIds.length;++o)Oe[e.textureCacheIds[o]]===e&&delete Oe[e.textureCacheIds[o]];return e.textureCacheIds.length=0,e}return null},Object.defineProperty(r.prototype,"resolution",{get:function(){return this.baseTexture.resolution},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"frame",{get:function(){return this._frame},set:function(e){this._frame=e,this.noFrame=!1;var n=e.x,i=e.y,o=e.width,s=e.height,l=n+o>this.baseTexture.width,h=i+s>this.baseTexture.height;if(l||h){var f=l&&h?"and":"or",d="X: "+n+" + "+o+" = "+(n+o)+" > "+this.baseTexture.width,v="Y: "+i+" + "+s+" = "+(i+s)+" > "+this.baseTexture.height;throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: "+(d+" "+f+" "+v))}this.valid=o&&s&&this.baseTexture.valid,!this.trim&&!this.rotate&&(this.orig=e),this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rotate",{get:function(){return this._rotate},set:function(e){this._rotate=e,this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this.orig.width},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this.orig.height},enumerable:!1,configurable:!0}),r.prototype.castToBaseTexture=function(){return this.baseTexture},Object.defineProperty(r,"EMPTY",{get:function(){return r._EMPTY||(r._EMPTY=new r(new vt),Hi(r._EMPTY),Hi(r._EMPTY.baseTexture)),r._EMPTY},enumerable:!1,configurable:!0}),Object.defineProperty(r,"WHITE",{get:function(){if(!r._WHITE){var e=X.ADAPTER.createCanvas(16,16),n=e.getContext("2d");e.width=16,e.height=16,n.fillStyle="white",n.fillRect(0,0,16,16),r._WHITE=new r(vt.from(e)),Hi(r._WHITE),Hi(r._WHITE.baseTexture)}return r._WHITE},enumerable:!1,configurable:!0}),r}(yi),Qe=function(t){Et(r,t);function r(e,n){var i=t.call(this,e,n)||this;return i.valid=!0,i.filterFrame=null,i.filterPoolKey=null,i.updateUvs(),i}return Object.defineProperty(r.prototype,"framebuffer",{get:function(){return this.baseTexture.framebuffer},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"multisample",{get:function(){return this.framebuffer.multisample},set:function(e){this.framebuffer.multisample=e},enumerable:!1,configurable:!0}),r.prototype.resize=function(e,n,i){i===void 0&&(i=!0);var o=this.baseTexture.resolution,s=Math.round(e*o)/o,l=Math.round(n*o)/o;this.valid=s>0&&l>0,this._frame.width=this.orig.width=s,this._frame.height=this.orig.height=l,i&&this.baseTexture.resize(s,l),this.updateUvs()},r.prototype.setResolution=function(e){var n=this.baseTexture;n.resolution!==e&&(n.setResolution(e),this.resize(n.width,n.height,!1))},r.create=function(e){for(var n=arguments,i=[],o=1;o<arguments.length;o++)i[o-1]=n[o];return typeof e=="number"&&(xe("6.0.0","Arguments (width, height, scaleMode, resolution) have been deprecated."),e={width:e,height:i[0],scaleMode:i[1],resolution:i[2]}),new r(new Ap(e))},r}(tt),i1=function(){function t(r){this.texturePool={},this.textureOptions=r||{},this.enableFullScreen=!1,this._pixelsWidth=0,this._pixelsHeight=0}return t.prototype.createTexture=function(r,e,n){n===void 0&&(n=Mt.NONE);var i=new Ap(Object.assign({width:r,height:e,resolution:1,multisample:n},this.textureOptions));return new Qe(i)},t.prototype.getOptimalTexture=function(r,e,n,i){n===void 0&&(n=1),i===void 0&&(i=Mt.NONE);var o;r=Math.ceil(r*n-1e-6),e=Math.ceil(e*n-1e-6),!this.enableFullScreen||r!==this._pixelsWidth||e!==this._pixelsHeight?(r=mo(r),e=mo(e),o=((r&65535)<<16|e&65535)>>>0,i>1&&(o+=i*4294967296)):o=i>1?-i:-1,this.texturePool[o]||(this.texturePool[o]=[]);var s=this.texturePool[o].pop();return s||(s=this.createTexture(r,e,i)),s.filterPoolKey=o,s.setResolution(n),s},t.prototype.getFilterTexture=function(r,e,n){var i=this.getOptimalTexture(r.width,r.height,e||r.resolution,n||Mt.NONE);return i.filterFrame=r.filterFrame,i},t.prototype.returnTexture=function(r){var e=r.filterPoolKey;r.filterFrame=null,this.texturePool[e].push(r)},t.prototype.returnFilterTexture=function(r){this.returnTexture(r)},t.prototype.clear=function(r){if(r=r!==!1,r)for(var e in this.texturePool){var n=this.texturePool[e];if(n)for(var i=0;i<n.length;i++)n[i].destroy(!0)}this.texturePool={}},t.prototype.setScreenSize=function(r){if(!(r.width===this._pixelsWidth&&r.height===this._pixelsHeight)){this.enableFullScreen=r.width>0&&r.height>0;for(var e in this.texturePool)if(Number(e)<0){var n=this.texturePool[e];if(n)for(var i=0;i<n.length;i++)n[i].destroy(!0);this.texturePool[e]=[]}this._pixelsWidth=r.width,this._pixelsHeight=r.height}},t.SCREEN_KEY=-1,t}(),Gc=function(){function t(r,e,n,i,o,s,l){e===void 0&&(e=0),n===void 0&&(n=!1),i===void 0&&(i=Y.FLOAT),this.buffer=r,this.size=e,this.normalized=n,this.type=i,this.stride=o,this.start=s,this.instance=l}return t.prototype.destroy=function(){this.buffer=null},t.from=function(r,e,n,i,o){return new t(r,e,n,i,o)},t}(),o1=0,Lt=function(){function t(r,e,n){e===void 0&&(e=!0),n===void 0&&(n=!1),this.data=r||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=n,this.static=e,this.id=o1++,this.disposeRunner=new jt("disposeBuffer")}return t.prototype.update=function(r){r instanceof Array&&(r=new Float32Array(r)),this.data=r||this.data,this._updateID++},t.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},t.prototype.destroy=function(){this.dispose(),this.data=null},Object.defineProperty(t.prototype,"index",{get:function(){return this.type===be.ELEMENT_ARRAY_BUFFER},set:function(r){this.type=r?be.ELEMENT_ARRAY_BUFFER:be.ARRAY_BUFFER},enumerable:!1,configurable:!0}),t.from=function(r){return r instanceof Array&&(r=new Float32Array(r)),new t(r)},t}(),s1={Float32Array,Uint32Array,Int32Array,Uint8Array};function a1(t,r){for(var e=0,n=0,i={},o=0;o<t.length;o++)n+=r[o],e+=t[o].length;for(var s=new ArrayBuffer(e*4),l=null,h=0,o=0;o<t.length;o++){var f=r[o],d=t[o],v=yp(d);i[v]||(i[v]=new s1[v](s)),l=i[v];for(var m=0;m<d.length;m++){var _=(m/f|0)*n+h,g=m%f;l[_+g]=d[m]}h+=f}return new Float32Array(s)}var Dc={5126:4,5123:2,5121:1},l1=0,u1={Float32Array,Uint32Array,Int32Array,Uint8Array,Uint16Array},sn=function(){function t(r,e){r===void 0&&(r=[]),e===void 0&&(e={}),this.buffers=r,this.indexBuffer=null,this.attributes=e,this.glVertexArrayObjects={},this.id=l1++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new jt("disposeGeometry"),this.refCount=0}return t.prototype.addAttribute=function(r,e,n,i,o,s,l,h){if(n===void 0&&(n=0),i===void 0&&(i=!1),h===void 0&&(h=!1),!e)throw new Error("You must pass a buffer when creating an attribute");e instanceof Lt||(e instanceof Array&&(e=new Float32Array(e)),e=new Lt(e));var f=r.split("|");if(f.length>1){for(var d=0;d<f.length;d++)this.addAttribute(f[d],e,n,i,o);return this}var v=this.buffers.indexOf(e);return v===-1&&(this.buffers.push(e),v=this.buffers.length-1),this.attributes[r]=new Gc(v,n,i,o,s,l,h),this.instanced=this.instanced||h,this},t.prototype.getAttribute=function(r){return this.attributes[r]},t.prototype.getBuffer=function(r){return this.buffers[this.getAttribute(r).buffer]},t.prototype.addIndex=function(r){return r instanceof Lt||(r instanceof Array&&(r=new Uint16Array(r)),r=new Lt(r)),r.type=be.ELEMENT_ARRAY_BUFFER,this.indexBuffer=r,this.buffers.indexOf(r)===-1&&this.buffers.push(r),this},t.prototype.getIndex=function(){return this.indexBuffer},t.prototype.interleave=function(){if(this.buffers.length===1||this.buffers.length===2&&this.indexBuffer)return this;var r=[],e=[],n=new Lt,i;for(i in this.attributes){var o=this.attributes[i],s=this.buffers[o.buffer];r.push(s.data),e.push(o.size*Dc[o.type]/4),o.buffer=0}for(n.data=a1(r,e),i=0;i<this.buffers.length;i++)this.buffers[i]!==this.indexBuffer&&this.buffers[i].destroy();return this.buffers=[n],this.indexBuffer&&this.buffers.push(this.indexBuffer),this},t.prototype.getSize=function(){for(var r in this.attributes){var e=this.attributes[r],n=this.buffers[e.buffer];return n.data.length/(e.stride/4||e.size)}return 0},t.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},t.prototype.destroy=function(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null},t.prototype.clone=function(){for(var r=new t,e=0;e<this.buffers.length;e++)r.buffers[e]=new Lt(this.buffers[e].data.slice(0));for(var e in this.attributes){var n=this.attributes[e];r.attributes[e]=new Gc(n.buffer,n.size,n.normalized,n.type,n.stride,n.start,n.instance)}return this.indexBuffer&&(r.indexBuffer=r.buffers[this.buffers.indexOf(this.indexBuffer)],r.indexBuffer.type=be.ELEMENT_ARRAY_BUFFER),r},t.merge=function(r){for(var e=new t,n=[],i=[],o=[],s,l=0;l<r.length;l++){s=r[l];for(var h=0;h<s.buffers.length;h++)i[h]=i[h]||0,i[h]+=s.buffers[h].data.length,o[h]=0}for(var l=0;l<s.buffers.length;l++)n[l]=new u1[yp(s.buffers[l].data)](i[l]),e.buffers[l]=new Lt(n[l]);for(var l=0;l<r.length;l++){s=r[l];for(var h=0;h<s.buffers.length;h++)n[h].set(s.buffers[h].data,o[h]),o[h]+=s.buffers[h].data.length}if(e.attributes=s.attributes,s.indexBuffer){e.indexBuffer=e.buffers[s.buffers.indexOf(s.indexBuffer)],e.indexBuffer.type=be.ELEMENT_ARRAY_BUFFER;for(var f=0,d=0,v=0,m=0,l=0;l<s.buffers.length;l++)if(s.buffers[l]!==s.indexBuffer){m=l;break}for(var l in s.attributes){var _=s.attributes[l];(_.buffer|0)===m&&(d+=_.size*Dc[_.type]/4)}for(var l=0;l<r.length;l++){for(var g=r[l].indexBuffer.data,h=0;h<g.length;h++)e.indexBuffer.data[h+v]+=f;f+=r[l].buffers[m].data.length/d,v+=g.length}}return e},t}(),h1=function(t){Et(r,t);function r(){var e=t.call(this)||this;return e.addAttribute("aVertexPosition",new Float32Array([0,0,1,0,1,1,0,1])).addIndex([0,1,3,2]),e}return r}(sn),Op=function(t){Et(r,t);function r(){var e=t.call(this)||this;return e.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),e.uvs=new Float32Array([0,0,1,0,1,1,0,1]),e.vertexBuffer=new Lt(e.vertices),e.uvBuffer=new Lt(e.uvs),e.addAttribute("aVertexPosition",e.vertexBuffer).addAttribute("aTextureCoord",e.uvBuffer).addIndex([0,1,2,0,2,3]),e}return r.prototype.map=function(e,n){var i=0,o=0;return this.uvs[0]=i,this.uvs[1]=o,this.uvs[2]=i+n.width/e.width,this.uvs[3]=o,this.uvs[4]=i+n.width/e.width,this.uvs[5]=o+n.height/e.height,this.uvs[6]=i,this.uvs[7]=o+n.height/e.height,i=n.x,o=n.y,this.vertices[0]=i,this.vertices[1]=o,this.vertices[2]=i+n.width,this.vertices[3]=o,this.vertices[4]=i+n.width,this.vertices[5]=o+n.height,this.vertices[6]=i,this.vertices[7]=o+n.height,this.invalidate(),this},r.prototype.invalidate=function(){return this.vertexBuffer._updateID++,this.uvBuffer._updateID++,this},r}(sn),c1=0,br=function(){function t(r,e,n){this.group=!0,this.syncUniforms={},this.dirtyId=0,this.id=c1++,this.static=!!e,this.ubo=!!n,r instanceof Lt?(this.buffer=r,this.buffer.type=be.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=r,this.ubo&&(this.buffer=new Lt(new Float32Array(1)),this.buffer.type=be.UNIFORM_BUFFER,this.autoManage=!0))}return t.prototype.update=function(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()},t.prototype.add=function(r,e,n){if(!this.ubo)this.uniforms[r]=new t(e,n);else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")},t.from=function(r,e,n){return new t(r,e,n)},t.uboFrom=function(r,e){return new t(r,e!=null?e:!0,!0)},t}(),f1=function(){function t(){this.renderTexture=null,this.target=null,this.legacy=!1,this.resolution=1,this.multisample=Mt.NONE,this.sourceFrame=new mt,this.destinationFrame=new mt,this.bindingSourceFrame=new mt,this.bindingDestinationFrame=new mt,this.filters=[],this.transform=null}return t.prototype.clear=function(){this.target=null,this.filters=null,this.renderTexture=null},t}(),Xi=[new ct,new ct,new ct,new ct],Ms=new Rt,d1=function(){function t(r){this.renderer=r,this.defaultFilterStack=[{}],this.texturePool=new i1,this.texturePool.setScreenSize(r.view),this.statePool=[],this.quad=new h1,this.quadUv=new Op,this.tempRect=new mt,this.activeState={},this.globalUniforms=new br({outputFrame:new mt,inputSize:new Float32Array(4),inputPixel:new Float32Array(4),inputClamp:new Float32Array(4),resolution:1,filterArea:new Float32Array(4),filterClamp:new Float32Array(4)},!0),this.forceClear=!1,this.useMaxPadding=!1}return t.prototype.push=function(r,e){for(var n,i,o=this.renderer,s=this.defaultFilterStack,l=this.statePool.pop()||new f1,h=this.renderer.renderTexture,f=e[0].resolution,d=e[0].multisample,v=e[0].padding,m=e[0].autoFit,_=(n=e[0].legacy)!==null&&n!==void 0?n:!0,g=1;g<e.length;g++){var b=e[g];f=Math.min(f,b.resolution),d=Math.min(d,b.multisample),v=this.useMaxPadding?Math.max(v,b.padding):v+b.padding,m=m&&b.autoFit,_=_||((i=b.legacy)!==null&&i!==void 0?i:!0)}s.length===1&&(this.defaultFilterStack[0].renderTexture=h.current),s.push(l),l.resolution=f,l.multisample=d,l.legacy=_,l.target=r,l.sourceFrame.copyFrom(r.filterArea||r.getBounds(!0)),l.sourceFrame.pad(v);var y=this.tempRect.copyFrom(h.sourceFrame);o.projection.transform&&this.transformAABB(Ms.copyFrom(o.projection.transform).invert(),y),m?(l.sourceFrame.fit(y),(l.sourceFrame.width<=0||l.sourceFrame.height<=0)&&(l.sourceFrame.width=0,l.sourceFrame.height=0)):l.sourceFrame.intersects(y)||(l.sourceFrame.width=0,l.sourceFrame.height=0),this.roundFrame(l.sourceFrame,h.current?h.current.resolution:o.resolution,h.sourceFrame,h.destinationFrame,o.projection.transform),l.renderTexture=this.getOptimalFilterTexture(l.sourceFrame.width,l.sourceFrame.height,f,d),l.filters=e,l.destinationFrame.width=l.renderTexture.width,l.destinationFrame.height=l.renderTexture.height;var w=this.tempRect;w.x=0,w.y=0,w.width=l.sourceFrame.width,w.height=l.sourceFrame.height,l.renderTexture.filterFrame=l.sourceFrame,l.bindingSourceFrame.copyFrom(h.sourceFrame),l.bindingDestinationFrame.copyFrom(h.destinationFrame),l.transform=o.projection.transform,o.projection.transform=null,h.bind(l.renderTexture,l.sourceFrame,w),o.framebuffer.clear(0,0,0,0)},t.prototype.pop=function(){var r=this.defaultFilterStack,e=r.pop(),n=e.filters;this.activeState=e;var i=this.globalUniforms.uniforms;i.outputFrame=e.sourceFrame,i.resolution=e.resolution;var o=i.inputSize,s=i.inputPixel,l=i.inputClamp;if(o[0]=e.destinationFrame.width,o[1]=e.destinationFrame.height,o[2]=1/o[0],o[3]=1/o[1],s[0]=Math.round(o[0]*e.resolution),s[1]=Math.round(o[1]*e.resolution),s[2]=1/s[0],s[3]=1/s[1],l[0]=.5*s[2],l[1]=.5*s[3],l[2]=e.sourceFrame.width*o[2]-.5*s[2],l[3]=e.sourceFrame.height*o[3]-.5*s[3],e.legacy){var h=i.filterArea;h[0]=e.destinationFrame.width,h[1]=e.destinationFrame.height,h[2]=e.sourceFrame.x,h[3]=e.sourceFrame.y,i.filterClamp=i.inputClamp}this.globalUniforms.update();var f=r[r.length-1];if(this.renderer.framebuffer.blit(),n.length===1)n[0].apply(this,e.renderTexture,f.renderTexture,Ye.BLEND,e),this.returnFilterTexture(e.renderTexture);else{var d=e.renderTexture,v=this.getOptimalFilterTexture(d.width,d.height,e.resolution);v.filterFrame=d.filterFrame;var m=0;for(m=0;m<n.length-1;++m){m===1&&e.multisample>1&&(v=this.getOptimalFilterTexture(d.width,d.height,e.resolution),v.filterFrame=d.filterFrame),n[m].apply(this,d,v,Ye.CLEAR,e);var _=d;d=v,v=_}n[m].apply(this,d,f.renderTexture,Ye.BLEND,e),m>1&&e.multisample>1&&this.returnFilterTexture(e.renderTexture),this.returnFilterTexture(d),this.returnFilterTexture(v)}e.clear(),this.statePool.push(e)},t.prototype.bindAndClear=function(r,e){e===void 0&&(e=Ye.CLEAR);var n=this.renderer,i=n.renderTexture,o=n.state;if(r===this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?this.renderer.projection.transform=this.activeState.transform:this.renderer.projection.transform=null,r&&r.filterFrame){var s=this.tempRect;s.x=0,s.y=0,s.width=r.filterFrame.width,s.height=r.filterFrame.height,i.bind(r,r.filterFrame,s)}else r!==this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?i.bind(r):this.renderer.renderTexture.bind(r,this.activeState.bindingSourceFrame,this.activeState.bindingDestinationFrame);var l=o.stateId&1||this.forceClear;(e===Ye.CLEAR||e===Ye.BLIT&&l)&&this.renderer.framebuffer.clear(0,0,0,0)},t.prototype.applyFilter=function(r,e,n,i){var o=this.renderer;o.state.set(r.state),this.bindAndClear(n,i),r.uniforms.uSampler=e,r.uniforms.filterGlobals=this.globalUniforms,o.shader.bind(r),r.legacy=!!r.program.attributeData.aTextureCoord,r.legacy?(this.quadUv.map(e._frame,e.filterFrame),o.geometry.bind(this.quadUv),o.geometry.draw(te.TRIANGLES)):(o.geometry.bind(this.quad),o.geometry.draw(te.TRIANGLE_STRIP))},t.prototype.calculateSpriteMatrix=function(r,e){var n=this.activeState,i=n.sourceFrame,o=n.destinationFrame,s=e._texture.orig,l=r.set(o.width,0,0,o.height,i.x,i.y),h=e.worldTransform.copyTo(Rt.TEMP_MATRIX);return h.invert(),l.prepend(h),l.scale(1/s.width,1/s.height),l.translate(e.anchor.x,e.anchor.y),l},t.prototype.destroy=function(){this.renderer=null,this.texturePool.clear(!1)},t.prototype.getOptimalFilterTexture=function(r,e,n,i){return n===void 0&&(n=1),i===void 0&&(i=Mt.NONE),this.texturePool.getOptimalTexture(r,e,n,i)},t.prototype.getFilterTexture=function(r,e,n){if(typeof r=="number"){var i=r;r=e,e=i}r=r||this.activeState.renderTexture;var o=this.texturePool.getOptimalTexture(r.width,r.height,e||r.resolution,n||Mt.NONE);return o.filterFrame=r.filterFrame,o},t.prototype.returnFilterTexture=function(r){this.texturePool.returnTexture(r)},t.prototype.emptyPool=function(){this.texturePool.clear(!0)},t.prototype.resize=function(){this.texturePool.setScreenSize(this.renderer.view)},t.prototype.transformAABB=function(r,e){var n=Xi[0],i=Xi[1],o=Xi[2],s=Xi[3];n.set(e.left,e.top),i.set(e.left,e.bottom),o.set(e.right,e.top),s.set(e.right,e.bottom),r.apply(n,n),r.apply(i,i),r.apply(o,o),r.apply(s,s);var l=Math.min(n.x,i.x,o.x,s.x),h=Math.min(n.y,i.y,o.y,s.y),f=Math.max(n.x,i.x,o.x,s.x),d=Math.max(n.y,i.y,o.y,s.y);e.x=l,e.y=h,e.width=f-l,e.height=d-h},t.prototype.roundFrame=function(r,e,n,i,o){if(!(r.width<=0||r.height<=0||n.width<=0||n.height<=0)){if(o){var s=o.a,l=o.b,h=o.c,f=o.d;if((Math.abs(l)>1e-4||Math.abs(h)>1e-4)&&(Math.abs(s)>1e-4||Math.abs(f)>1e-4))return}o=o?Ms.copyFrom(o):Ms.identity(),o.translate(-n.x,-n.y).scale(i.width/n.width,i.height/n.height).translate(i.x,i.y),this.transformAABB(o,r),r.ceil(e),this.transformAABB(o.invert(),r)}},t}(),Do=function(){function t(r){this.renderer=r}return t.prototype.flush=function(){},t.prototype.destroy=function(){this.renderer=null},t.prototype.start=function(){},t.prototype.stop=function(){this.flush()},t.prototype.render=function(r){},t}(),p1=function(){function t(r){this.renderer=r,this.emptyRenderer=new Do(r),this.currentRenderer=this.emptyRenderer}return t.prototype.setObjectRenderer=function(r){this.currentRenderer!==r&&(this.currentRenderer.stop(),this.currentRenderer=r,this.currentRenderer.start())},t.prototype.flush=function(){this.setObjectRenderer(this.emptyRenderer)},t.prototype.reset=function(){this.setObjectRenderer(this.emptyRenderer)},t.prototype.copyBoundTextures=function(r,e){for(var n=this.renderer.texture.boundTextures,i=e-1;i>=0;--i)r[i]=n[i]||null,r[i]&&(r[i]._batchLocation=i)},t.prototype.boundArray=function(r,e,n,i){for(var o=r.elements,s=r.ids,l=r.count,h=0,f=0;f<l;f++){var d=o[f],v=d._batchLocation;if(v>=0&&v<i&&e[v]===d){s[f]=v;continue}for(;h<i;){var m=e[h];if(m&&m._batchEnabled===n&&m._batchLocation===h){h++;continue}s[f]=h,d._batchLocation=h,e[h]=d;break}}},t.prototype.destroy=function(){this.renderer=null},t}(),Vc=0,v1=function(){function t(r){this.renderer=r,this.webGLVersion=1,this.extensions={},this.supports={uint32Indices:!1},this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this),r.view.addEventListener("webglcontextlost",this.handleContextLost,!1),r.view.addEventListener("webglcontextrestored",this.handleContextRestored,!1)}return Object.defineProperty(t.prototype,"isLost",{get:function(){return!this.gl||this.gl.isContextLost()},enumerable:!1,configurable:!0}),t.prototype.contextChange=function(r){this.gl=r,this.renderer.gl=r,this.renderer.CONTEXT_UID=Vc++,r.isContextLost()&&r.getExtension("WEBGL_lose_context")&&r.getExtension("WEBGL_lose_context").restoreContext()},t.prototype.initFromContext=function(r){this.gl=r,this.validateContext(r),this.renderer.gl=r,this.renderer.CONTEXT_UID=Vc++,this.renderer.runners.contextChange.emit(r)},t.prototype.initFromOptions=function(r){var e=this.createContext(this.renderer.view,r);this.initFromContext(e)},t.prototype.createContext=function(r,e){var n;if(X.PREFER_ENV>=Fe.WEBGL2&&(n=r.getContext("webgl2",e)),n)this.webGLVersion=2;else if(this.webGLVersion=1,n=r.getContext("webgl",e)||r.getContext("experimental-webgl",e),!n)throw new Error("This browser does not support WebGL. Try using the canvas renderer");return this.gl=n,this.getExtensions(),this.gl},t.prototype.getExtensions=function(){var r=this.gl,e={anisotropicFiltering:r.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:r.getExtension("OES_texture_float_linear"),s3tc:r.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:r.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:r.getExtension("WEBGL_compressed_texture_etc"),etc1:r.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:r.getExtension("WEBGL_compressed_texture_atc"),astc:r.getExtension("WEBGL_compressed_texture_astc")};this.webGLVersion===1?Object.assign(this.extensions,e,{drawBuffers:r.getExtension("WEBGL_draw_buffers"),depthTexture:r.getExtension("WEBGL_depth_texture"),loseContext:r.getExtension("WEBGL_lose_context"),vertexArrayObject:r.getExtension("OES_vertex_array_object")||r.getExtension("MOZ_OES_vertex_array_object")||r.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:r.getExtension("OES_element_index_uint"),floatTexture:r.getExtension("OES_texture_float"),floatTextureLinear:r.getExtension("OES_texture_float_linear"),textureHalfFloat:r.getExtension("OES_texture_half_float"),textureHalfFloatLinear:r.getExtension("OES_texture_half_float_linear")}):this.webGLVersion===2&&Object.assign(this.extensions,e,{colorBufferFloat:r.getExtension("EXT_color_buffer_float")})},t.prototype.handleContextLost=function(r){r.preventDefault()},t.prototype.handleContextRestored=function(){this.renderer.runners.contextChange.emit(this.gl)},t.prototype.destroy=function(){var r=this.renderer.view;this.renderer=null,r.removeEventListener("webglcontextlost",this.handleContextLost),r.removeEventListener("webglcontextrestored",this.handleContextRestored),this.gl.useProgram(null),this.extensions.loseContext&&this.extensions.loseContext.loseContext()},t.prototype.postrender=function(){this.renderer.renderingToScreen&&this.gl.flush()},t.prototype.validateContext=function(r){var e=r.getContextAttributes(),n="WebGL2RenderingContext"in globalThis&&r instanceof globalThis.WebGL2RenderingContext;n&&(this.webGLVersion=2),e&&!e.stencil&&console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");var i=n||!!r.getExtension("OES_element_index_uint");this.supports.uint32Indices=i,i||console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")},t}(),m1=function(){function t(r){this.framebuffer=r,this.stencil=null,this.dirtyId=-1,this.dirtyFormat=-1,this.dirtySize=-1,this.multisample=Mt.NONE,this.msaaBuffer=null,this.blitFramebuffer=null,this.mipLevel=0}return t}(),_1=new mt,g1=function(){function t(r){this.renderer=r,this.managedFramebuffers=[],this.unknownFramebuffer=new Ua(10,10),this.msaaSamples=null}return t.prototype.contextChange=function(){var r=this.gl=this.renderer.gl;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.current=this.unknownFramebuffer,this.viewport=new mt,this.hasMRT=!0,this.writeDepthTexture=!0,this.disposeAll(!0),this.renderer.context.webGLVersion===1){var e=this.renderer.context.extensions.drawBuffers,n=this.renderer.context.extensions.depthTexture;X.PREFER_ENV===Fe.WEBGL_LEGACY&&(e=null,n=null),e?r.drawBuffers=function(i){return e.drawBuffersWEBGL(i)}:(this.hasMRT=!1,r.drawBuffers=function(){}),n||(this.writeDepthTexture=!1)}else this.msaaSamples=r.getInternalformatParameter(r.RENDERBUFFER,r.RGBA8,r.SAMPLES)},t.prototype.bind=function(r,e,n){n===void 0&&(n=0);var i=this.gl;if(r){var o=r.glFramebuffers[this.CONTEXT_UID]||this.initFramebuffer(r);this.current!==r&&(this.current=r,i.bindFramebuffer(i.FRAMEBUFFER,o.framebuffer)),o.mipLevel!==n&&(r.dirtyId++,r.dirtyFormat++,o.mipLevel=n),o.dirtyId!==r.dirtyId&&(o.dirtyId=r.dirtyId,o.dirtyFormat!==r.dirtyFormat?(o.dirtyFormat=r.dirtyFormat,o.dirtySize=r.dirtySize,this.updateFramebuffer(r,n)):o.dirtySize!==r.dirtySize&&(o.dirtySize=r.dirtySize,this.resizeFramebuffer(r)));for(var s=0;s<r.colorTextures.length;s++){var l=r.colorTextures[s];this.renderer.texture.unbind(l.parentTextureArray||l)}if(r.depthTexture&&this.renderer.texture.unbind(r.depthTexture),e){var h=e.width>>n,f=e.height>>n,d=h/e.width;this.setViewport(e.x*d,e.y*d,h,f)}else{var h=r.width>>n,f=r.height>>n;this.setViewport(0,0,h,f)}}else this.current&&(this.current=null,i.bindFramebuffer(i.FRAMEBUFFER,null)),e?this.setViewport(e.x,e.y,e.width,e.height):this.setViewport(0,0,this.renderer.width,this.renderer.height)},t.prototype.setViewport=function(r,e,n,i){var o=this.viewport;r=Math.round(r),e=Math.round(e),n=Math.round(n),i=Math.round(i),(o.width!==n||o.height!==i||o.x!==r||o.y!==e)&&(o.x=r,o.y=e,o.width=n,o.height=i,this.gl.viewport(r,e,n,i))},Object.defineProperty(t.prototype,"size",{get:function(){return this.current?{x:0,y:0,width:this.current.width,height:this.current.height}:{x:0,y:0,width:this.renderer.width,height:this.renderer.height}},enumerable:!1,configurable:!0}),t.prototype.clear=function(r,e,n,i,o){o===void 0&&(o=po.COLOR|po.DEPTH);var s=this.gl;s.clearColor(r,e,n,i),s.clear(o)},t.prototype.initFramebuffer=function(r){var e=this.gl,n=new m1(e.createFramebuffer());return n.multisample=this.detectSamples(r.multisample),r.glFramebuffers[this.CONTEXT_UID]=n,this.managedFramebuffers.push(r),r.disposeRunner.add(this),n},t.prototype.resizeFramebuffer=function(r){var e=this.gl,n=r.glFramebuffers[this.CONTEXT_UID];n.msaaBuffer&&(e.bindRenderbuffer(e.RENDERBUFFER,n.msaaBuffer),e.renderbufferStorageMultisample(e.RENDERBUFFER,n.multisample,e.RGBA8,r.width,r.height)),n.stencil&&(e.bindRenderbuffer(e.RENDERBUFFER,n.stencil),n.msaaBuffer?e.renderbufferStorageMultisample(e.RENDERBUFFER,n.multisample,e.DEPTH24_STENCIL8,r.width,r.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,r.width,r.height));var i=r.colorTextures,o=i.length;e.drawBuffers||(o=Math.min(o,1));for(var s=0;s<o;s++){var l=i[s],h=l.parentTextureArray||l;this.renderer.texture.bind(h,0)}r.depthTexture&&this.writeDepthTexture&&this.renderer.texture.bind(r.depthTexture,0)},t.prototype.updateFramebuffer=function(r,e){var n=this.gl,i=r.glFramebuffers[this.CONTEXT_UID],o=r.colorTextures,s=o.length;n.drawBuffers||(s=Math.min(s,1)),i.multisample>1&&this.canMultisampleFramebuffer(r)?(i.msaaBuffer=i.msaaBuffer||n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,i.msaaBuffer),n.renderbufferStorageMultisample(n.RENDERBUFFER,i.multisample,n.RGBA8,r.width,r.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,i.msaaBuffer)):i.msaaBuffer&&(n.deleteRenderbuffer(i.msaaBuffer),i.msaaBuffer=null,i.blitFramebuffer&&(i.blitFramebuffer.dispose(),i.blitFramebuffer=null));for(var l=[],h=0;h<s;h++){var f=o[h],d=f.parentTextureArray||f;this.renderer.texture.bind(d,0),!(h===0&&i.msaaBuffer)&&(n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+h,f.target,d._glTextures[this.CONTEXT_UID].texture,e),l.push(n.COLOR_ATTACHMENT0+h))}if(l.length>1&&n.drawBuffers(l),r.depthTexture){var v=this.writeDepthTexture;if(v){var m=r.depthTexture;this.renderer.texture.bind(m,0),n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,m._glTextures[this.CONTEXT_UID].texture,e)}}(r.stencil||r.depth)&&!(r.depthTexture&&this.writeDepthTexture)?(i.stencil=i.stencil||n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,i.stencil),i.msaaBuffer?n.renderbufferStorageMultisample(n.RENDERBUFFER,i.multisample,n.DEPTH24_STENCIL8,r.width,r.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,r.width,r.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,i.stencil)):i.stencil&&(n.deleteRenderbuffer(i.stencil),i.stencil=null)},t.prototype.canMultisampleFramebuffer=function(r){return this.renderer.context.webGLVersion!==1&&r.colorTextures.length<=1&&!r.depthTexture},t.prototype.detectSamples=function(r){var e=this.msaaSamples,n=Mt.NONE;if(r<=1||e===null)return n;for(var i=0;i<e.length;i++)if(e[i]<=r){n=e[i];break}return n===1&&(n=Mt.NONE),n},t.prototype.blit=function(r,e,n){var i=this,o=i.current,s=i.renderer,l=i.gl,h=i.CONTEXT_UID;if(s.context.webGLVersion===2&&!!o){var f=o.glFramebuffers[h];if(!!f){if(!r){if(!f.msaaBuffer)return;var d=o.colorTextures[0];if(!d)return;f.blitFramebuffer||(f.blitFramebuffer=new Ua(o.width,o.height),f.blitFramebuffer.addColorTexture(0,d)),r=f.blitFramebuffer,r.colorTextures[0]!==d&&(r.colorTextures[0]=d,r.dirtyId++,r.dirtyFormat++),(r.width!==o.width||r.height!==o.height)&&(r.width=o.width,r.height=o.height,r.dirtyId++,r.dirtySize++)}e||(e=_1,e.width=o.width,e.height=o.height),n||(n=e);var v=e.width===n.width&&e.height===n.height;this.bind(r),l.bindFramebuffer(l.READ_FRAMEBUFFER,f.framebuffer),l.blitFramebuffer(e.left,e.top,e.right,e.bottom,n.left,n.top,n.right,n.bottom,l.COLOR_BUFFER_BIT,v?l.NEAREST:l.LINEAR)}}},t.prototype.disposeFramebuffer=function(r,e){var n=r.glFramebuffers[this.CONTEXT_UID],i=this.gl;if(!!n){delete r.glFramebuffers[this.CONTEXT_UID];var o=this.managedFramebuffers.indexOf(r);o>=0&&this.managedFramebuffers.splice(o,1),r.disposeRunner.remove(this),e||(i.deleteFramebuffer(n.framebuffer),n.msaaBuffer&&i.deleteRenderbuffer(n.msaaBuffer),n.stencil&&i.deleteRenderbuffer(n.stencil)),n.blitFramebuffer&&n.blitFramebuffer.dispose()}},t.prototype.disposeAll=function(r){var e=this.managedFramebuffers;this.managedFramebuffers=[];for(var n=0;n<e.length;n++)this.disposeFramebuffer(e[n],r)},t.prototype.forceStencil=function(){var r=this.current;if(!!r){var e=r.glFramebuffers[this.CONTEXT_UID];if(!(!e||e.stencil)){r.stencil=!0;var n=r.width,i=r.height,o=this.gl,s=o.createRenderbuffer();o.bindRenderbuffer(o.RENDERBUFFER,s),e.msaaBuffer?o.renderbufferStorageMultisample(o.RENDERBUFFER,e.multisample,o.DEPTH24_STENCIL8,n,i):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,n,i),e.stencil=s,o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,s)}}},t.prototype.reset=function(){this.current=this.unknownFramebuffer,this.viewport=new mt},t.prototype.destroy=function(){this.renderer=null},t}(),ks={5126:4,5123:2,5121:1},y1=function(){function t(r){this.renderer=r,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this.canUseUInt32ElementIndex=!1,this.managedGeometries={}}return t.prototype.contextChange=function(){this.disposeAll(!0);var r=this.gl=this.renderer.gl,e=this.renderer.context;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,e.webGLVersion!==2){var n=this.renderer.context.extensions.vertexArrayObject;X.PREFER_ENV===Fe.WEBGL_LEGACY&&(n=null),n?(r.createVertexArray=function(){return n.createVertexArrayOES()},r.bindVertexArray=function(o){return n.bindVertexArrayOES(o)},r.deleteVertexArray=function(o){return n.deleteVertexArrayOES(o)}):(this.hasVao=!1,r.createVertexArray=function(){return null},r.bindVertexArray=function(){return null},r.deleteVertexArray=function(){return null})}if(e.webGLVersion!==2){var i=r.getExtension("ANGLE_instanced_arrays");i?(r.vertexAttribDivisor=function(o,s){return i.vertexAttribDivisorANGLE(o,s)},r.drawElementsInstanced=function(o,s,l,h,f){return i.drawElementsInstancedANGLE(o,s,l,h,f)},r.drawArraysInstanced=function(o,s,l,h){return i.drawArraysInstancedANGLE(o,s,l,h)}):this.hasInstance=!1}this.canUseUInt32ElementIndex=e.webGLVersion===2||!!e.extensions.uint32ElementIndex},t.prototype.bind=function(r,e){e=e||this.renderer.shader.shader;var n=this.gl,i=r.glVertexArrayObjects[this.CONTEXT_UID],o=!1;i||(this.managedGeometries[r.id]=r,r.disposeRunner.add(this),r.glVertexArrayObjects[this.CONTEXT_UID]=i={},o=!0);var s=i[e.program.id]||this.initGeometryVao(r,e,o);this._activeGeometry=r,this._activeVao!==s&&(this._activeVao=s,this.hasVao?n.bindVertexArray(s):this.activateVao(r,e.program)),this.updateBuffers()},t.prototype.reset=function(){this.unbind()},t.prototype.updateBuffers=function(){for(var r=this._activeGeometry,e=this.renderer.buffer,n=0;n<r.buffers.length;n++){var i=r.buffers[n];e.update(i)}},t.prototype.checkCompatibility=function(r,e){var n=r.attributes,i=e.attributeData;for(var o in i)if(!n[o])throw new Error('shader and geometry incompatible, geometry missing the "'+o+'" attribute')},t.prototype.getSignature=function(r,e){var n=r.attributes,i=e.attributeData,o=["g",r.id];for(var s in n)i[s]&&o.push(s,i[s].location);return o.join("-")},t.prototype.initGeometryVao=function(r,e,n){n===void 0&&(n=!0);var i=this.gl,o=this.CONTEXT_UID,s=this.renderer.buffer,l=e.program;l.glPrograms[o]||this.renderer.shader.generateProgram(e),this.checkCompatibility(r,l);var h=this.getSignature(r,l),f=r.glVertexArrayObjects[this.CONTEXT_UID],d=f[h];if(d)return f[l.id]=d,d;var v=r.buffers,m=r.attributes,_={},g={};for(var b in v)_[b]=0,g[b]=0;for(var b in m)!m[b].size&&l.attributeData[b]?m[b].size=l.attributeData[b].size:m[b].size||console.warn("PIXI Geometry attribute '"+b+"' size cannot be determined (likely the bound shader does not have the attribute)"),_[m[b].buffer]+=m[b].size*ks[m[b].type];for(var b in m){var y=m[b],w=y.size;y.stride===void 0&&(_[y.buffer]===w*ks[y.type]?y.stride=0:y.stride=_[y.buffer]),y.start===void 0&&(y.start=g[y.buffer],g[y.buffer]+=w*ks[y.type])}d=i.createVertexArray(),i.bindVertexArray(d);for(var C=0;C<v.length;C++){var T=v[C];s.bind(T),n&&T._glBuffers[o].refCount++}return this.activateVao(r,l),this._activeVao=d,f[l.id]=d,f[h]=d,d},t.prototype.disposeGeometry=function(r,e){var n;if(!!this.managedGeometries[r.id]){delete this.managedGeometries[r.id];var i=r.glVertexArrayObjects[this.CONTEXT_UID],o=this.gl,s=r.buffers,l=(n=this.renderer)===null||n===void 0?void 0:n.buffer;if(r.disposeRunner.remove(this),!!i){if(l)for(var h=0;h<s.length;h++){var f=s[h]._glBuffers[this.CONTEXT_UID];f&&(f.refCount--,f.refCount===0&&!e&&l.dispose(s[h],e))}if(!e){for(var d in i)if(d[0]==="g"){var v=i[d];this._activeVao===v&&this.unbind(),o.deleteVertexArray(v)}}delete r.glVertexArrayObjects[this.CONTEXT_UID]}}},t.prototype.disposeAll=function(r){for(var e=Object.keys(this.managedGeometries),n=0;n<e.length;n++)this.disposeGeometry(this.managedGeometries[e[n]],r)},t.prototype.activateVao=function(r,e){var n=this.gl,i=this.CONTEXT_UID,o=this.renderer.buffer,s=r.buffers,l=r.attributes;r.indexBuffer&&o.bind(r.indexBuffer);var h=null;for(var f in l){var d=l[f],v=s[d.buffer],m=v._glBuffers[i];if(e.attributeData[f]){h!==m&&(o.bind(v),h=m);var _=e.attributeData[f].location;if(n.enableVertexAttribArray(_),n.vertexAttribPointer(_,d.size,d.type||n.FLOAT,d.normalized,d.stride,d.start),d.instance)if(this.hasInstance)n.vertexAttribDivisor(_,1);else throw new Error("geometry error, GPU Instancing is not supported on this device")}}},t.prototype.draw=function(r,e,n,i){var o=this.gl,s=this._activeGeometry;if(s.indexBuffer){var l=s.indexBuffer.data.BYTES_PER_ELEMENT,h=l===2?o.UNSIGNED_SHORT:o.UNSIGNED_INT;l===2||l===4&&this.canUseUInt32ElementIndex?s.instanced?o.drawElementsInstanced(r,e||s.indexBuffer.data.length,h,(n||0)*l,i||1):o.drawElements(r,e||s.indexBuffer.data.length,h,(n||0)*l):console.warn("unsupported index buffer type: uint32")}else s.instanced?o.drawArraysInstanced(r,n,e||s.getSize(),i||1):o.drawArrays(r,n,e||s.getSize());return this},t.prototype.unbind=function(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null},t.prototype.destroy=function(){this.renderer=null},t}(),b1=function(){function t(r){r===void 0&&(r=null),this.type=Bt.NONE,this.autoDetect=!0,this.maskObject=r||null,this.pooled=!1,this.isMaskData=!0,this.resolution=null,this.multisample=X.FILTER_MULTISAMPLE,this.enabled=!0,this.colorMask=15,this._filters=null,this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null,this._scissorRectLocal=null,this._colorMask=15,this._target=null}return Object.defineProperty(t.prototype,"filter",{get:function(){return this._filters?this._filters[0]:null},set:function(r){r?this._filters?this._filters[0]=r:this._filters=[r]:this._filters=null},enumerable:!1,configurable:!0}),t.prototype.reset=function(){this.pooled&&(this.maskObject=null,this.type=Bt.NONE,this.autoDetect=!0),this._target=null,this._scissorRectLocal=null},t.prototype.copyCountersOrReset=function(r){r?(this._stencilCounter=r._stencilCounter,this._scissorCounter=r._scissorCounter,this._scissorRect=r._scissorRect):(this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null)},t}();function jc(t,r,e){var n=t.createShader(r);return t.shaderSource(n,e),t.compileShader(n),n}function Hc(t,r){var e=t.getShaderSource(r).split(`
`).map(function(f,d){return d+": "+f}),n=t.getShaderInfoLog(r),i=n.split(`
`),o={},s=i.map(function(f){return parseFloat(f.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))}).filter(function(f){return f&&!o[f]?(o[f]=!0,!0):!1}),l=[""];s.forEach(function(f){e[f-1]="%c"+e[f-1]+"%c",l.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});var h=e.join(`
`);l[0]=h,console.error(n),console.groupCollapsed("click to view full shader code"),console.warn.apply(console,l),console.groupEnd()}function x1(t,r,e,n){t.getProgramParameter(r,t.LINK_STATUS)||(t.getShaderParameter(e,t.COMPILE_STATUS)||Hc(t,e),t.getShaderParameter(n,t.COMPILE_STATUS)||Hc(t,n),console.error("PixiJS Error: Could not initialize shader."),t.getProgramInfoLog(r)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",t.getProgramInfoLog(r)))}function Bs(t){for(var r=new Array(t),e=0;e<r.length;e++)r[e]=!1;return r}function Sp(t,r){switch(t){case"float":return 0;case"vec2":return new Float32Array(2*r);case"vec3":return new Float32Array(3*r);case"vec4":return new Float32Array(4*r);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*r);case"ivec3":return new Int32Array(3*r);case"ivec4":return new Int32Array(4*r);case"uvec2":return new Uint32Array(2*r);case"uvec3":return new Uint32Array(3*r);case"uvec4":return new Uint32Array(4*r);case"bool":return!1;case"bvec2":return Bs(2*r);case"bvec3":return Bs(3*r);case"bvec4":return Bs(4*r);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}var Up={},Sn=Up;function w1(){if(Sn===Up||Sn&&Sn.isContextLost()){var t=X.ADAPTER.createCanvas(),r=void 0;X.PREFER_ENV>=Fe.WEBGL2&&(r=t.getContext("webgl2",{})),r||(r=t.getContext("webgl",{})||t.getContext("experimental-webgl",{}),r?r.getExtension("WEBGL_draw_buffers"):r=null),Sn=r}return Sn}var zi;function T1(){if(!zi){zi=_e.MEDIUM;var t=w1();if(t&&t.getShaderPrecisionFormat){var r=t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT);zi=r.precision?_e.HIGH:_e.MEDIUM}}return zi}function Xc(t,r,e){if(t.substring(0,9)!=="precision"){var n=r;return r===_e.HIGH&&e!==_e.HIGH&&(n=_e.MEDIUM),"precision "+n+` float;
`+t}else if(e!==_e.HIGH&&t.substring(0,15)==="precision highp")return t.replace("precision highp","precision mediump");return t}var C1={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function Lp(t){return C1[t]}var $i=null,zc={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};function Fp(t,r){if(!$i){var e=Object.keys(zc);$i={};for(var n=0;n<e.length;++n){var i=e[n];$i[t[i]]=zc[i]}}return $i[r]}var tn=[{test:function(t){return t.type==="float"&&t.size===1},code:function(t){return`
            if(uv["`+t+'"] !== ud["'+t+`"].value)
            {
                ud["`+t+'"].value = uv["'+t+`"]
                gl.uniform1f(ud["`+t+'"].location, uv["'+t+`"])
            }
            `}},{test:function(t,r){return(t.type==="sampler2D"||t.type==="samplerCube"||t.type==="sampler2DArray")&&t.size===1&&!t.isArray&&(r==null||r.castToBaseTexture!==void 0)},code:function(t){return`t = syncData.textureCount++;

            renderer.texture.bind(uv["`+t+`"], t);

            if(ud["`+t+`"].value !== t)
            {
                ud["`+t+`"].value = t;
                gl.uniform1i(ud["`+t+`"].location, t);
; // eslint-disable-line max-len
            }`}},{test:function(t,r){return t.type==="mat3"&&t.size===1&&r.a!==void 0},code:function(t){return`
            gl.uniformMatrix3fv(ud["`+t+'"].location, false, uv["'+t+`"].toArray(true));
            `},codeUbo:function(t){return`
                var `+t+"_matrix = uv."+t+`.toArray(true);

                data[offset] = `+t+`_matrix[0];
                data[offset+1] = `+t+`_matrix[1];
                data[offset+2] = `+t+`_matrix[2];
        
                data[offset + 4] = `+t+`_matrix[3];
                data[offset + 5] = `+t+`_matrix[4];
                data[offset + 6] = `+t+`_matrix[5];
        
                data[offset + 8] = `+t+`_matrix[6];
                data[offset + 9] = `+t+`_matrix[7];
                data[offset + 10] = `+t+`_matrix[8];
            `}},{test:function(t,r){return t.type==="vec2"&&t.size===1&&r.x!==void 0},code:function(t){return`
                cv = ud["`+t+`"].value;
                v = uv["`+t+`"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["`+t+`"].location, v.x, v.y);
                }`},codeUbo:function(t){return`
                v = uv.`+t+`;

                data[offset] = v.x;
                data[offset+1] = v.y;
            `}},{test:function(t){return t.type==="vec2"&&t.size===1},code:function(t){return`
                cv = ud["`+t+`"].value;
                v = uv["`+t+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["`+t+`"].location, v[0], v[1]);
                }
            `}},{test:function(t,r){return t.type==="vec4"&&t.size===1&&r.width!==void 0},code:function(t){return`
                cv = ud["`+t+`"].value;
                v = uv["`+t+`"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["`+t+`"].location, v.x, v.y, v.width, v.height)
                }`},codeUbo:function(t){return`
                    v = uv.`+t+`;

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `}},{test:function(t){return t.type==="vec4"&&t.size===1},code:function(t){return`
                cv = ud["`+t+`"].value;
                v = uv["`+t+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["`+t+`"].location, v[0], v[1], v[2], v[3])
                }`}}],E1={float:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,vec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,vec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,vec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,int:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,ivec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,ivec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,ivec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,uint:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,uvec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,uvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,uvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,bool:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,bvec2:`
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,bvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,bvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,mat2:"gl.uniformMatrix2fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",sampler2D:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,samplerCube:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,sampler2DArray:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`},P1={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"};function I1(t,r){var e,n=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];for(var i in t.uniforms){var o=r[i];if(!o){!((e=t.uniforms[i])===null||e===void 0)&&e.group&&(t.uniforms[i].ubo?n.push(`
                        renderer.shader.syncUniformBufferGroup(uv.`+i+", '"+i+`');
                    `):n.push(`
                        renderer.shader.syncUniformGroup(uv.`+i+`, syncData);
                    `));continue}for(var s=t.uniforms[i],l=!1,h=0;h<tn.length;h++)if(tn[h].test(o,s)){n.push(tn[h].code(i,s)),l=!0;break}if(!l){var f=o.size===1?E1:P1,d=f[o.type].replace("location",'ud["'+i+'"].location');n.push(`
            cu = ud["`+i+`"];
            cv = cu.value;
            v = uv["`+i+`"];
            `+d+";")}}return new Function("ud","uv","renderer","syncData",n.join(`
`))}var R1=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function A1(t){for(var r="",e=0;e<t;++e)e>0&&(r+=`
else `),e<t-1&&(r+="if(test == "+e+".0){}");return r}function N1(t,r){if(t===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");for(var e=r.createShader(r.FRAGMENT_SHADER);;){var n=R1.replace(/%forloop%/gi,A1(t));if(r.shaderSource(e,n),r.compileShader(e),!r.getShaderParameter(e,r.COMPILE_STATUS))t=t/2|0;else break}return t}var Un;function O1(){if(typeof Un=="boolean")return Un;try{var t=new Function("param1","param2","param3","return param1[param2] === param3;");Un=t({a:"b"},"a","b")===!0}catch{Un=!1}return Un}var S1=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,U1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`,L1=0,Wi={},an=function(){function t(r,e,n){n===void 0&&(n="pixi-shader"),this.id=L1++,this.vertexSrc=r||t.defaultVertexSrc,this.fragmentSrc=e||t.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),this.vertexSrc.substring(0,8)!=="#version"&&(n=n.replace(/\s+/g,"-"),Wi[n]?(Wi[n]++,n+="-"+Wi[n]):Wi[n]=1,this.vertexSrc="#define SHADER_NAME "+n+`
`+this.vertexSrc,this.fragmentSrc="#define SHADER_NAME "+n+`
`+this.fragmentSrc,this.vertexSrc=Xc(this.vertexSrc,X.PRECISION_VERTEX,_e.HIGH),this.fragmentSrc=Xc(this.fragmentSrc,X.PRECISION_FRAGMENT,T1())),this.glPrograms={},this.syncUniforms=null}return Object.defineProperty(t,"defaultVertexSrc",{get:function(){return U1},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultFragmentSrc",{get:function(){return S1},enumerable:!1,configurable:!0}),t.from=function(r,e,n){var i=r+e,o=mc[i];return o||(mc[i]=o=new t(r,e,n)),o},t}(),Le=function(){function t(r,e){this.uniformBindCount=0,this.program=r,e?e instanceof br?this.uniformGroup=e:this.uniformGroup=new br(e):this.uniformGroup=new br({})}return t.prototype.checkUniformExists=function(r,e){if(e.uniforms[r])return!0;for(var n in e.uniforms){var i=e.uniforms[n];if(i.group&&this.checkUniformExists(r,i))return!0}return!1},t.prototype.destroy=function(){this.uniformGroup=null},Object.defineProperty(t.prototype,"uniforms",{get:function(){return this.uniformGroup.uniforms},enumerable:!1,configurable:!0}),t.from=function(r,e,n){var i=an.from(r,e);return new t(i,n)},t}(),Gs=0,Ds=1,Vs=2,js=3,Hs=4,Xs=5,er=function(){function t(){this.data=0,this.blendMode=Z.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0}return Object.defineProperty(t.prototype,"blend",{get:function(){return!!(this.data&1<<Gs)},set:function(r){!!(this.data&1<<Gs)!==r&&(this.data^=1<<Gs)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"offsets",{get:function(){return!!(this.data&1<<Ds)},set:function(r){!!(this.data&1<<Ds)!==r&&(this.data^=1<<Ds)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"culling",{get:function(){return!!(this.data&1<<Vs)},set:function(r){!!(this.data&1<<Vs)!==r&&(this.data^=1<<Vs)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"depthTest",{get:function(){return!!(this.data&1<<js)},set:function(r){!!(this.data&1<<js)!==r&&(this.data^=1<<js)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"depthMask",{get:function(){return!!(this.data&1<<Xs)},set:function(r){!!(this.data&1<<Xs)!==r&&(this.data^=1<<Xs)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"clockwiseFrontFace",{get:function(){return!!(this.data&1<<Hs)},set:function(r){!!(this.data&1<<Hs)!==r&&(this.data^=1<<Hs)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blendMode",{get:function(){return this._blendMode},set:function(r){this.blend=r!==Z.NONE,this._blendMode=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"polygonOffset",{get:function(){return this._polygonOffset},set:function(r){this.offsets=!!r,this._polygonOffset=r},enumerable:!1,configurable:!0}),t.prototype.toString=function(){return"[@pixi/core:State "+("blendMode="+this.blendMode+" ")+("clockwiseFrontFace="+this.clockwiseFrontFace+" ")+("culling="+this.culling+" ")+("depthMask="+this.depthMask+" ")+("polygonOffset="+this.polygonOffset)+"]"},t.for2d=function(){var r=new t;return r.depthTest=!1,r.blend=!0,r},t}(),F1=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,M1=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,nt=function(t){Et(r,t);function r(e,n,i){var o=this,s=an.from(e||r.defaultVertexSrc,n||r.defaultFragmentSrc);return o=t.call(this,s,i)||this,o.padding=0,o.resolution=X.FILTER_RESOLUTION,o.multisample=X.FILTER_MULTISAMPLE,o.enabled=!0,o.autoFit=!0,o.state=new er,o}return r.prototype.apply=function(e,n,i,o,s){e.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(e){this.state.blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._resolution=e},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultVertexSrc",{get:function(){return M1},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultFragmentSrc",{get:function(){return F1},enumerable:!1,configurable:!0}),r}(Le),k1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`,B1=`varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,$c=new Rt,tu=function(){function t(r,e){this._texture=r,this.mapCoord=new Rt,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,this.clampMargin=typeof e>"u"?.5:e,this.isSimple=!1}return Object.defineProperty(t.prototype,"texture",{get:function(){return this._texture},set:function(r){this._texture=r,this._textureID=-1},enumerable:!1,configurable:!0}),t.prototype.multiplyUvs=function(r,e){e===void 0&&(e=r);for(var n=this.mapCoord,i=0;i<r.length;i+=2){var o=r[i],s=r[i+1];e[i]=o*n.a+s*n.c+n.tx,e[i+1]=o*n.b+s*n.d+n.ty}return e},t.prototype.update=function(r){var e=this._texture;if(!e||!e.valid||!r&&this._textureID===e._updateID)return!1;this._textureID=e._updateID,this._updateID++;var n=e._uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);var i=e.orig,o=e.trim;o&&($c.set(i.width/o.width,0,0,i.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append($c));var s=e.baseTexture,l=this.uClampFrame,h=this.clampMargin/s.resolution,f=this.clampOffset;return l[0]=(e._frame.x+h+f)/s.width,l[1]=(e._frame.y+h+f)/s.height,l[2]=(e._frame.x+e._frame.width-h+f)/s.width,l[3]=(e._frame.y+e._frame.height-h+f)/s.height,this.uClampOffset[0]=f/s.realWidth,this.uClampOffset[1]=f/s.realHeight,this.isSimple=e._frame.width===s.width&&e._frame.height===s.height&&e.rotate===0,!0},t}(),G1=function(t){Et(r,t);function r(e,n,i){var o=this,s=null;return typeof e!="string"&&n===void 0&&i===void 0&&(s=e,e=void 0,n=void 0,i=void 0),o=t.call(this,e||k1,n||B1,i)||this,o.maskSprite=s,o.maskMatrix=new Rt,o}return Object.defineProperty(r.prototype,"maskSprite",{get:function(){return this._maskSprite},set:function(e){this._maskSprite=e,this._maskSprite&&(this._maskSprite.renderable=!1)},enumerable:!1,configurable:!0}),r.prototype.apply=function(e,n,i,o){var s=this._maskSprite,l=s._texture;!l.valid||(l.uvMatrix||(l.uvMatrix=new tu(l,0)),l.uvMatrix.update(),this.uniforms.npmAlpha=l.baseTexture.alphaMode?0:1,this.uniforms.mask=l,this.uniforms.otherMatrix=e.calculateSpriteMatrix(this.maskMatrix,s).prepend(l.uvMatrix.mapCoord),this.uniforms.alpha=s.worldAlpha,this.uniforms.maskClamp=l.uvMatrix.uClampFrame,e.applyFilter(this,n,i,o))},r}(nt),D1=function(){function t(r){this.renderer=r,this.enableScissor=!0,this.alphaMaskPool=[],this.maskDataPool=[],this.maskStack=[],this.alphaMaskIndex=0}return t.prototype.setMaskStack=function(r){this.maskStack=r,this.renderer.scissor.setMaskStack(r),this.renderer.stencil.setMaskStack(r)},t.prototype.push=function(r,e){var n=e;if(!n.isMaskData){var i=this.maskDataPool.pop()||new b1;i.pooled=!0,i.maskObject=e,n=i}var o=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null;if(n.copyCountersOrReset(o),n._colorMask=o?o._colorMask:15,n.autoDetect&&this.detect(n),n._target=r,n.type!==Bt.SPRITE&&this.maskStack.push(n),n.enabled)switch(n.type){case Bt.SCISSOR:this.renderer.scissor.push(n);break;case Bt.STENCIL:this.renderer.stencil.push(n);break;case Bt.SPRITE:n.copyCountersOrReset(null),this.pushSpriteMask(n);break;case Bt.COLOR:this.pushColorMask(n);break}n.type===Bt.SPRITE&&this.maskStack.push(n)},t.prototype.pop=function(r){var e=this.maskStack.pop();if(!(!e||e._target!==r)){if(e.enabled)switch(e.type){case Bt.SCISSOR:this.renderer.scissor.pop(e);break;case Bt.STENCIL:this.renderer.stencil.pop(e.maskObject);break;case Bt.SPRITE:this.popSpriteMask(e);break;case Bt.COLOR:this.popColorMask(e);break}if(e.reset(),e.pooled&&this.maskDataPool.push(e),this.maskStack.length!==0){var n=this.maskStack[this.maskStack.length-1];n.type===Bt.SPRITE&&n._filters&&(n._filters[0].maskSprite=n.maskObject)}}},t.prototype.detect=function(r){var e=r.maskObject;e?e.isSprite?r.type=Bt.SPRITE:this.enableScissor&&this.renderer.scissor.testScissor(r)?r.type=Bt.SCISSOR:r.type=Bt.STENCIL:r.type=Bt.COLOR},t.prototype.pushSpriteMask=function(r){var e,n,i=r.maskObject,o=r._target,s=r._filters;s||(s=this.alphaMaskPool[this.alphaMaskIndex],s||(s=this.alphaMaskPool[this.alphaMaskIndex]=[new G1]));var l=this.renderer,h=l.renderTexture,f,d;if(h.current){var v=h.current;f=r.resolution||v.resolution,d=(e=r.multisample)!==null&&e!==void 0?e:v.multisample}else f=r.resolution||l.resolution,d=(n=r.multisample)!==null&&n!==void 0?n:l.multisample;s[0].resolution=f,s[0].multisample=d,s[0].maskSprite=i;var m=o.filterArea;o.filterArea=i.getBounds(!0),l.filter.push(o,s),o.filterArea=m,r._filters||this.alphaMaskIndex++},t.prototype.popSpriteMask=function(r){this.renderer.filter.pop(),r._filters?r._filters[0].maskSprite=null:(this.alphaMaskIndex--,this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite=null)},t.prototype.pushColorMask=function(r){var e=r._colorMask,n=r._colorMask=e&r.colorMask;n!==e&&this.renderer.gl.colorMask((n&1)!==0,(n&2)!==0,(n&4)!==0,(n&8)!==0)},t.prototype.popColorMask=function(r){var e=r._colorMask,n=this.maskStack.length>0?this.maskStack[this.maskStack.length-1]._colorMask:15;n!==e&&this.renderer.gl.colorMask((n&1)!==0,(n&2)!==0,(n&4)!==0,(n&8)!==0)},t.prototype.destroy=function(){this.renderer=null},t}(),Mp=function(){function t(r){this.renderer=r,this.maskStack=[],this.glConst=0}return t.prototype.getStackLength=function(){return this.maskStack.length},t.prototype.setMaskStack=function(r){var e=this.renderer.gl,n=this.getStackLength();this.maskStack=r;var i=this.getStackLength();i!==n&&(i===0?e.disable(this.glConst):(e.enable(this.glConst),this._useCurrent()))},t.prototype._useCurrent=function(){},t.prototype.destroy=function(){this.renderer=null,this.maskStack=null},t}(),Wc=new Rt,qc=[],V1=function(t){Et(r,t);function r(e){var n=t.call(this,e)||this;return n.glConst=X.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST,n}return r.prototype.getStackLength=function(){var e=this.maskStack[this.maskStack.length-1];return e?e._scissorCounter:0},r.prototype.calcScissorRect=function(e){var n;if(!e._scissorRectLocal){var i=e._scissorRect,o=e.maskObject,s=this.renderer,l=s.renderTexture,h=o.getBounds(!0,(n=qc.pop())!==null&&n!==void 0?n:new mt);this.roundFrameToPixels(h,l.current?l.current.resolution:s.resolution,l.sourceFrame,l.destinationFrame,s.projection.transform),i&&h.fit(i),e._scissorRectLocal=h}},r.isMatrixRotated=function(e){if(!e)return!1;var n=e.a,i=e.b,o=e.c,s=e.d;return(Math.abs(i)>1e-4||Math.abs(o)>1e-4)&&(Math.abs(n)>1e-4||Math.abs(s)>1e-4)},r.prototype.testScissor=function(e){var n=e.maskObject;if(!n.isFastRect||!n.isFastRect()||r.isMatrixRotated(n.worldTransform)||r.isMatrixRotated(this.renderer.projection.transform))return!1;this.calcScissorRect(e);var i=e._scissorRectLocal;return i.width>0&&i.height>0},r.prototype.roundFrameToPixels=function(e,n,i,o,s){r.isMatrixRotated(s)||(s=s?Wc.copyFrom(s):Wc.identity(),s.translate(-i.x,-i.y).scale(o.width/i.width,o.height/i.height).translate(o.x,o.y),this.renderer.filter.transformAABB(s,e),e.fit(o),e.x=Math.round(e.x*n),e.y=Math.round(e.y*n),e.width=Math.round(e.width*n),e.height=Math.round(e.height*n))},r.prototype.push=function(e){e._scissorRectLocal||this.calcScissorRect(e);var n=this.renderer.gl;e._scissorRect||n.enable(n.SCISSOR_TEST),e._scissorCounter++,e._scissorRect=e._scissorRectLocal,this._useCurrent()},r.prototype.pop=function(e){var n=this.renderer.gl;e&&qc.push(e._scissorRectLocal),this.getStackLength()>0?this._useCurrent():n.disable(n.SCISSOR_TEST)},r.prototype._useCurrent=function(){var e=this.maskStack[this.maskStack.length-1]._scissorRect,n;this.renderer.renderTexture.current?n=e.y:n=this.renderer.height-e.height-e.y,this.renderer.gl.scissor(e.x,n,e.width,e.height)},r}(Mp),j1=function(t){Et(r,t);function r(e){var n=t.call(this,e)||this;return n.glConst=X.ADAPTER.getWebGLRenderingContext().STENCIL_TEST,n}return r.prototype.getStackLength=function(){var e=this.maskStack[this.maskStack.length-1];return e?e._stencilCounter:0},r.prototype.push=function(e){var n=e.maskObject,i=this.renderer.gl,o=e._stencilCounter;o===0&&(this.renderer.framebuffer.forceStencil(),i.clearStencil(0),i.clear(i.STENCIL_BUFFER_BIT),i.enable(i.STENCIL_TEST)),e._stencilCounter++;var s=e._colorMask;s!==0&&(e._colorMask=0,i.colorMask(!1,!1,!1,!1)),i.stencilFunc(i.EQUAL,o,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.INCR),n.renderable=!0,n.render(this.renderer),this.renderer.batch.flush(),n.renderable=!1,s!==0&&(e._colorMask=s,i.colorMask((s&1)!==0,(s&2)!==0,(s&4)!==0,(s&8)!==0)),this._useCurrent()},r.prototype.pop=function(e){var n=this.renderer.gl;if(this.getStackLength()===0)n.disable(n.STENCIL_TEST);else{var i=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null,o=i?i._colorMask:15;o!==0&&(i._colorMask=0,n.colorMask(!1,!1,!1,!1)),n.stencilOp(n.KEEP,n.KEEP,n.DECR),e.renderable=!0,e.render(this.renderer),this.renderer.batch.flush(),e.renderable=!1,o!==0&&(i._colorMask=o,n.colorMask((o&1)!==0,(o&2)!==0,(o&4)!==0,(o&8)!==0)),this._useCurrent()}},r.prototype._useCurrent=function(){var e=this.renderer.gl;e.stencilFunc(e.EQUAL,this.getStackLength(),4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP)},r}(Mp),H1=function(){function t(r){this.renderer=r,this.destinationFrame=null,this.sourceFrame=null,this.defaultFrame=null,this.projectionMatrix=new Rt,this.transform=null}return t.prototype.update=function(r,e,n,i){this.destinationFrame=r||this.destinationFrame||this.defaultFrame,this.sourceFrame=e||this.sourceFrame||r,this.calculateProjection(this.destinationFrame,this.sourceFrame,n,i),this.transform&&this.projectionMatrix.append(this.transform);var o=this.renderer;o.globalUniforms.uniforms.projectionMatrix=this.projectionMatrix,o.globalUniforms.update(),o.shader.shader&&o.shader.syncUniformGroup(o.shader.shader.uniforms.globals)},t.prototype.calculateProjection=function(r,e,n,i){var o=this.projectionMatrix,s=i?-1:1;o.identity(),o.a=1/e.width*2,o.d=s*(1/e.height*2),o.tx=-1-e.x*o.a,o.ty=-s-e.y*o.d},t.prototype.setTransform=function(r){},t.prototype.destroy=function(){this.renderer=null},t}(),ur=new mt,Ln=new mt,X1=function(){function t(r){this.renderer=r,this.clearColor=r._backgroundColorRgba,this.defaultMaskStack=[],this.current=null,this.sourceFrame=new mt,this.destinationFrame=new mt,this.viewportFrame=new mt}return t.prototype.bind=function(r,e,n){r===void 0&&(r=null);var i=this.renderer;this.current=r;var o,s,l;r?(o=r.baseTexture,l=o.resolution,e||(ur.width=r.frame.width,ur.height=r.frame.height,e=ur),n||(Ln.x=r.frame.x,Ln.y=r.frame.y,Ln.width=e.width,Ln.height=e.height,n=Ln),s=o.framebuffer):(l=i.resolution,e||(ur.width=i.screen.width,ur.height=i.screen.height,e=ur),n||(n=ur,n.width=e.width,n.height=e.height));var h=this.viewportFrame;h.x=n.x*l,h.y=n.y*l,h.width=n.width*l,h.height=n.height*l,r||(h.y=i.view.height-(h.y+h.height)),h.ceil(),this.renderer.framebuffer.bind(s,h),this.renderer.projection.update(n,e,l,!s),r?this.renderer.mask.setMaskStack(o.maskStack):this.renderer.mask.setMaskStack(this.defaultMaskStack),this.sourceFrame.copyFrom(e),this.destinationFrame.copyFrom(n)},t.prototype.clear=function(r,e){this.current?r=r||this.current.baseTexture.clearColor:r=r||this.clearColor;var n=this.destinationFrame,i=this.current?this.current.baseTexture:this.renderer.screen,o=n.width!==i.width||n.height!==i.height;if(o){var s=this.viewportFrame,l=s.x,h=s.y,f=s.width,d=s.height;l=Math.round(l),h=Math.round(h),f=Math.round(f),d=Math.round(d),this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),this.renderer.gl.scissor(l,h,f,d)}this.renderer.framebuffer.clear(r[0],r[1],r[2],r[3],e),o&&this.renderer.scissor.pop()},t.prototype.resize=function(){this.bind(null)},t.prototype.reset=function(){this.bind(null)},t.prototype.destroy=function(){this.renderer=null},t}();function z1(t,r,e,n,i){e.buffer.update(i)}var $1={float:`
        data[offset] = v;
    `,vec2:`
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,vec3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,vec4:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,mat2:`
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,mat3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,mat4:`
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `},kp={float:4,vec2:8,vec3:12,vec4:16,int:4,ivec2:8,ivec3:12,ivec4:16,uint:4,uvec2:8,uvec3:12,uvec4:16,bool:4,bvec2:8,bvec3:12,bvec4:16,mat2:16*2,mat3:16*3,mat4:16*4};function W1(t){for(var r=t.map(function(h){return{data:h,offset:0,dataLen:0,dirty:0}}),e=0,n=0,i=0,o=0;o<r.length;o++){var s=r[o];if(e=kp[s.data.type],s.data.size>1&&(e=Math.max(e,16)*s.data.size),s.dataLen=e,n%e!==0&&n<16){var l=n%e%16;n+=l,i+=l}n+e>16?(i=Math.ceil(i/16)*16,s.offset=i,i+=e,n=e):(s.offset=i,n+=e,i+=e)}return i=Math.ceil(i/16)*16,{uboElements:r,size:i}}function q1(t,r){var e=[];for(var n in t)r[n]&&e.push(r[n]);return e.sort(function(i,o){return i.index-o.index}),e}function Y1(t,r){if(!t.autoManage)return{size:0,syncFunc:z1};for(var e=q1(t.uniforms,r),n=W1(e),i=n.uboElements,o=n.size,s=[`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `],l=0;l<i.length;l++){for(var h=i[l],f=t.uniforms[h.data.name],d=h.data.name,v=!1,m=0;m<tn.length;m++){var _=tn[m];if(_.codeUbo&&_.test(h.data,f)){s.push("offset = "+h.offset/4+";",tn[m].codeUbo(h.data.name,f)),v=!0;break}}if(!v)if(h.data.size>1){var g=Lp(h.data.type),b=Math.max(kp[h.data.type]/16,1),y=g/b,w=(4-y%4)%4;s.push(`
                cv = ud.`+d+`.value;
                v = uv.`+d+`;
                offset = `+h.offset/4+`;

                t = 0;

                for(var i=0; i < `+h.data.size*b+`; i++)
                {
                    for(var j = 0; j < `+y+`; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += `+w+`;
                }

                `)}else{var C=$1[h.data.type];s.push(`
                cv = ud.`+d+`.value;
                v = uv.`+d+`;
                offset = `+h.offset/4+`;
                `+C+`;
                `)}}return s.push(`
       renderer.buffer.update(buffer);
    `),{size:o,syncFunc:new Function("ud","uv","renderer","syncData","buffer",s.join(`
`))}}var K1=function(){function t(r,e){this.program=r,this.uniformData=e,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBufferBindings={}}return t.prototype.destroy=function(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBufferBindings=null,this.program=null},t}();function Z1(t,r){for(var e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES),i=0;i<n;i++){var o=r.getActiveAttrib(t,i);if(o.name.indexOf("gl_")!==0){var s=Fp(r,o.type),l={type:s,name:o.name,size:Lp(s),location:r.getAttribLocation(t,o.name)};e[o.name]=l}}return e}function J1(t,r){for(var e={},n=r.getProgramParameter(t,r.ACTIVE_UNIFORMS),i=0;i<n;i++){var o=r.getActiveUniform(t,i),s=o.name.replace(/\[.*?\]$/,""),l=!!o.name.match(/\[.*?\]$/),h=Fp(r,o.type);e[s]={name:s,index:i,type:h,size:o.size,isArray:l,value:Sp(h,o.size)}}return e}function Q1(t,r){var e=jc(t,t.VERTEX_SHADER,r.vertexSrc),n=jc(t,t.FRAGMENT_SHADER,r.fragmentSrc),i=t.createProgram();if(t.attachShader(i,e),t.attachShader(i,n),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS)||x1(t,i,e,n),r.attributeData=Z1(i,t),r.uniformData=J1(i,t),!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(r.vertexSrc)){var o=Object.keys(r.attributeData);o.sort(function(d,v){return d>v?1:-1});for(var s=0;s<o.length;s++)r.attributeData[o[s]].location=s,t.bindAttribLocation(i,s,o[s]);t.linkProgram(i)}t.deleteShader(e),t.deleteShader(n);var l={};for(var s in r.uniformData){var h=r.uniformData[s];l[s]={location:t.getUniformLocation(i,s),value:Sp(h.type,h.size)}}var f=new K1(i,l);return f}var tw=0,qi={textureCount:0,uboCount:0},ew=function(){function t(r){this.destroyed=!1,this.renderer=r,this.systemCheck(),this.gl=null,this.shader=null,this.program=null,this.cache={},this._uboCache={},this.id=tw++}return t.prototype.systemCheck=function(){if(!O1())throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")},t.prototype.contextChange=function(r){this.gl=r,this.reset()},t.prototype.bind=function(r,e){r.uniforms.globals=this.renderer.globalUniforms;var n=r.program,i=n.glPrograms[this.renderer.CONTEXT_UID]||this.generateProgram(r);return this.shader=r,this.program!==n&&(this.program=n,this.gl.useProgram(i.program)),e||(qi.textureCount=0,qi.uboCount=0,this.syncUniformGroup(r.uniformGroup,qi)),i},t.prototype.setUniforms=function(r){var e=this.shader.program,n=e.glPrograms[this.renderer.CONTEXT_UID];e.syncUniforms(n.uniformData,r,this.renderer)},t.prototype.syncUniformGroup=function(r,e){var n=this.getGlProgram();(!r.static||r.dirtyId!==n.uniformDirtyGroups[r.id])&&(n.uniformDirtyGroups[r.id]=r.dirtyId,this.syncUniforms(r,n,e))},t.prototype.syncUniforms=function(r,e,n){var i=r.syncUniforms[this.shader.program.id]||this.createSyncGroups(r);i(e.uniformData,r.uniforms,this.renderer,n)},t.prototype.createSyncGroups=function(r){var e=this.getSignature(r,this.shader.program.uniformData,"u");return this.cache[e]||(this.cache[e]=I1(r,this.shader.program.uniformData)),r.syncUniforms[this.shader.program.id]=this.cache[e],r.syncUniforms[this.shader.program.id]},t.prototype.syncUniformBufferGroup=function(r,e){var n=this.getGlProgram();if(!r.static||r.dirtyId!==0||!n.uniformGroups[r.id]){r.dirtyId=0;var i=n.uniformGroups[r.id]||this.createSyncBufferGroup(r,n,e);r.buffer.update(),i(n.uniformData,r.uniforms,this.renderer,qi,r.buffer)}this.renderer.buffer.bindBufferBase(r.buffer,n.uniformBufferBindings[e])},t.prototype.createSyncBufferGroup=function(r,e,n){var i=this.renderer.gl;this.renderer.buffer.bind(r.buffer);var o=this.gl.getUniformBlockIndex(e.program,n);e.uniformBufferBindings[n]=this.shader.uniformBindCount,i.uniformBlockBinding(e.program,o,this.shader.uniformBindCount),this.shader.uniformBindCount++;var s=this.getSignature(r,this.shader.program.uniformData,"ubo"),l=this._uboCache[s];if(l||(l=this._uboCache[s]=Y1(r,this.shader.program.uniformData)),r.autoManage){var h=new Float32Array(l.size/4);r.buffer.update(h)}return e.uniformGroups[r.id]=l.syncFunc,e.uniformGroups[r.id]},t.prototype.getSignature=function(r,e,n){var i=r.uniforms,o=[n+"-"];for(var s in i)o.push(s),e[s]&&o.push(e[s].type);return o.join("-")},t.prototype.getGlProgram=function(){return this.shader?this.shader.program.glPrograms[this.renderer.CONTEXT_UID]:null},t.prototype.generateProgram=function(r){var e=this.gl,n=r.program,i=Q1(e,n);return n.glPrograms[this.renderer.CONTEXT_UID]=i,i},t.prototype.reset=function(){this.program=null,this.shader=null},t.prototype.destroy=function(){this.renderer=null,this.destroyed=!0},t}();function rw(t,r){return r===void 0&&(r=[]),r[Z.NORMAL]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.ADD]=[t.ONE,t.ONE],r[Z.MULTIPLY]=[t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.SCREEN]=[t.ONE,t.ONE_MINUS_SRC_COLOR,t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.OVERLAY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.DARKEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.LIGHTEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.COLOR_DODGE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.COLOR_BURN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.HARD_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.SOFT_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.DIFFERENCE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.EXCLUSION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.HUE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.SATURATION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.COLOR]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.LUMINOSITY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.NONE]=[0,0],r[Z.NORMAL_NPM]=[t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.ADD_NPM]=[t.SRC_ALPHA,t.ONE,t.ONE,t.ONE],r[Z.SCREEN_NPM]=[t.SRC_ALPHA,t.ONE_MINUS_SRC_COLOR,t.ONE,t.ONE_MINUS_SRC_ALPHA],r[Z.SRC_IN]=[t.DST_ALPHA,t.ZERO],r[Z.SRC_OUT]=[t.ONE_MINUS_DST_ALPHA,t.ZERO],r[Z.SRC_ATOP]=[t.DST_ALPHA,t.ONE_MINUS_SRC_ALPHA],r[Z.DST_OVER]=[t.ONE_MINUS_DST_ALPHA,t.ONE],r[Z.DST_IN]=[t.ZERO,t.SRC_ALPHA],r[Z.DST_OUT]=[t.ZERO,t.ONE_MINUS_SRC_ALPHA],r[Z.DST_ATOP]=[t.ONE_MINUS_DST_ALPHA,t.SRC_ALPHA],r[Z.XOR]=[t.ONE_MINUS_DST_ALPHA,t.ONE_MINUS_SRC_ALPHA],r[Z.SUBTRACT]=[t.ONE,t.ONE,t.ONE,t.ONE,t.FUNC_REVERSE_SUBTRACT,t.FUNC_ADD],r}var nw=0,iw=1,ow=2,sw=3,aw=4,lw=5,uw=function(){function t(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=Z.NONE,this._blendEq=!1,this.map=[],this.map[nw]=this.setBlend,this.map[iw]=this.setOffset,this.map[ow]=this.setCullFace,this.map[sw]=this.setDepthTest,this.map[aw]=this.setFrontFace,this.map[lw]=this.setDepthMask,this.checks=[],this.defaultState=new er,this.defaultState.blend=!0}return t.prototype.contextChange=function(r){this.gl=r,this.blendModes=rw(r),this.set(this.defaultState),this.reset()},t.prototype.set=function(r){if(r=r||this.defaultState,this.stateId!==r.data){for(var e=this.stateId^r.data,n=0;e;)e&1&&this.map[n].call(this,!!(r.data&1<<n)),e=e>>1,n++;this.stateId=r.data}for(var n=0;n<this.checks.length;n++)this.checks[n](this,r)},t.prototype.forceState=function(r){r=r||this.defaultState;for(var e=0;e<this.map.length;e++)this.map[e].call(this,!!(r.data&1<<e));for(var e=0;e<this.checks.length;e++)this.checks[e](this,r);this.stateId=r.data},t.prototype.setBlend=function(r){this.updateCheck(t.checkBlendMode,r),this.gl[r?"enable":"disable"](this.gl.BLEND)},t.prototype.setOffset=function(r){this.updateCheck(t.checkPolygonOffset,r),this.gl[r?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)},t.prototype.setDepthTest=function(r){this.gl[r?"enable":"disable"](this.gl.DEPTH_TEST)},t.prototype.setDepthMask=function(r){this.gl.depthMask(r)},t.prototype.setCullFace=function(r){this.gl[r?"enable":"disable"](this.gl.CULL_FACE)},t.prototype.setFrontFace=function(r){this.gl.frontFace(this.gl[r?"CW":"CCW"])},t.prototype.setBlendMode=function(r){if(r!==this.blendMode){this.blendMode=r;var e=this.blendModes[r],n=this.gl;e.length===2?n.blendFunc(e[0],e[1]):n.blendFuncSeparate(e[0],e[1],e[2],e[3]),e.length===6?(this._blendEq=!0,n.blendEquationSeparate(e[4],e[5])):this._blendEq&&(this._blendEq=!1,n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD))}},t.prototype.setPolygonOffset=function(r,e){this.gl.polygonOffset(r,e)},t.prototype.reset=function(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=-1,this.setBlendMode(0)},t.prototype.updateCheck=function(r,e){var n=this.checks.indexOf(r);e&&n===-1?this.checks.push(r):!e&&n!==-1&&this.checks.splice(n,1)},t.checkBlendMode=function(r,e){r.setBlendMode(e.blendMode)},t.checkPolygonOffset=function(r,e){r.setPolygonOffset(1,e.polygonOffset)},t.prototype.destroy=function(){this.gl=null},t}(),hw=function(){function t(r){this.renderer=r,this.count=0,this.checkCount=0,this.maxIdle=X.GC_MAX_IDLE,this.checkCountMax=X.GC_MAX_CHECK_COUNT,this.mode=X.GC_MODE}return t.prototype.postrender=function(){!this.renderer.renderingToScreen||(this.count++,this.mode!==Pa.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))},t.prototype.run=function(){for(var r=this.renderer.texture,e=r.managedTextures,n=!1,i=0;i<e.length;i++){var o=e[i];!o.framebuffer&&this.count-o.touched>this.maxIdle&&(r.destroyTexture(o,!0),e[i]=null,n=!0)}if(n){for(var s=0,i=0;i<e.length;i++)e[i]!==null&&(e[s++]=e[i]);e.length=s}},t.prototype.unload=function(r){var e=this.renderer.texture,n=r._texture;n&&!n.framebuffer&&e.destroyTexture(n);for(var i=r.children.length-1;i>=0;i--)this.unload(r.children[i])},t.prototype.destroy=function(){this.renderer=null},t}();function cw(t){var r,e,n,i,o,s,l,h,f,d,v,m,_,g,b,y,w,C,T,I,P,E,S;return"WebGL2RenderingContext"in globalThis&&t instanceof globalThis.WebGL2RenderingContext?S=(r={},r[Y.UNSIGNED_BYTE]=(e={},e[G.RGBA]=t.RGBA8,e[G.RGB]=t.RGB8,e[G.RG]=t.RG8,e[G.RED]=t.R8,e[G.RGBA_INTEGER]=t.RGBA8UI,e[G.RGB_INTEGER]=t.RGB8UI,e[G.RG_INTEGER]=t.RG8UI,e[G.RED_INTEGER]=t.R8UI,e[G.ALPHA]=t.ALPHA,e[G.LUMINANCE]=t.LUMINANCE,e[G.LUMINANCE_ALPHA]=t.LUMINANCE_ALPHA,e),r[Y.BYTE]=(n={},n[G.RGBA]=t.RGBA8_SNORM,n[G.RGB]=t.RGB8_SNORM,n[G.RG]=t.RG8_SNORM,n[G.RED]=t.R8_SNORM,n[G.RGBA_INTEGER]=t.RGBA8I,n[G.RGB_INTEGER]=t.RGB8I,n[G.RG_INTEGER]=t.RG8I,n[G.RED_INTEGER]=t.R8I,n),r[Y.UNSIGNED_SHORT]=(i={},i[G.RGBA_INTEGER]=t.RGBA16UI,i[G.RGB_INTEGER]=t.RGB16UI,i[G.RG_INTEGER]=t.RG16UI,i[G.RED_INTEGER]=t.R16UI,i[G.DEPTH_COMPONENT]=t.DEPTH_COMPONENT16,i),r[Y.SHORT]=(o={},o[G.RGBA_INTEGER]=t.RGBA16I,o[G.RGB_INTEGER]=t.RGB16I,o[G.RG_INTEGER]=t.RG16I,o[G.RED_INTEGER]=t.R16I,o),r[Y.UNSIGNED_INT]=(s={},s[G.RGBA_INTEGER]=t.RGBA32UI,s[G.RGB_INTEGER]=t.RGB32UI,s[G.RG_INTEGER]=t.RG32UI,s[G.RED_INTEGER]=t.R32UI,s[G.DEPTH_COMPONENT]=t.DEPTH_COMPONENT24,s),r[Y.INT]=(l={},l[G.RGBA_INTEGER]=t.RGBA32I,l[G.RGB_INTEGER]=t.RGB32I,l[G.RG_INTEGER]=t.RG32I,l[G.RED_INTEGER]=t.R32I,l),r[Y.FLOAT]=(h={},h[G.RGBA]=t.RGBA32F,h[G.RGB]=t.RGB32F,h[G.RG]=t.RG32F,h[G.RED]=t.R32F,h[G.DEPTH_COMPONENT]=t.DEPTH_COMPONENT32F,h),r[Y.HALF_FLOAT]=(f={},f[G.RGBA]=t.RGBA16F,f[G.RGB]=t.RGB16F,f[G.RG]=t.RG16F,f[G.RED]=t.R16F,f),r[Y.UNSIGNED_SHORT_5_6_5]=(d={},d[G.RGB]=t.RGB565,d),r[Y.UNSIGNED_SHORT_4_4_4_4]=(v={},v[G.RGBA]=t.RGBA4,v),r[Y.UNSIGNED_SHORT_5_5_5_1]=(m={},m[G.RGBA]=t.RGB5_A1,m),r[Y.UNSIGNED_INT_2_10_10_10_REV]=(_={},_[G.RGBA]=t.RGB10_A2,_[G.RGBA_INTEGER]=t.RGB10_A2UI,_),r[Y.UNSIGNED_INT_10F_11F_11F_REV]=(g={},g[G.RGB]=t.R11F_G11F_B10F,g),r[Y.UNSIGNED_INT_5_9_9_9_REV]=(b={},b[G.RGB]=t.RGB9_E5,b),r[Y.UNSIGNED_INT_24_8]=(y={},y[G.DEPTH_STENCIL]=t.DEPTH24_STENCIL8,y),r[Y.FLOAT_32_UNSIGNED_INT_24_8_REV]=(w={},w[G.DEPTH_STENCIL]=t.DEPTH32F_STENCIL8,w),r):S=(C={},C[Y.UNSIGNED_BYTE]=(T={},T[G.RGBA]=t.RGBA,T[G.RGB]=t.RGB,T[G.ALPHA]=t.ALPHA,T[G.LUMINANCE]=t.LUMINANCE,T[G.LUMINANCE_ALPHA]=t.LUMINANCE_ALPHA,T),C[Y.UNSIGNED_SHORT_5_6_5]=(I={},I[G.RGB]=t.RGB,I),C[Y.UNSIGNED_SHORT_4_4_4_4]=(P={},P[G.RGBA]=t.RGBA,P),C[Y.UNSIGNED_SHORT_5_5_5_1]=(E={},E[G.RGBA]=t.RGBA,E),C),S}var zs=function(){function t(r){this.texture=r,this.width=-1,this.height=-1,this.dirtyId=-1,this.dirtyStyleId=-1,this.mipmap=!1,this.wrapMode=33071,this.type=Y.UNSIGNED_BYTE,this.internalFormat=G.RGBA,this.samplerType=0}return t}(),fw=function(){function t(r){this.renderer=r,this.boundTextures=[],this.currentLocation=-1,this.managedTextures=[],this._unknownBoundTextures=!1,this.unknownTexture=new vt,this.hasIntegerTextures=!1}return t.prototype.contextChange=function(){var r=this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.webGLVersion=this.renderer.context.webGLVersion,this.internalFormats=cw(r);var e=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures.length=e;for(var n=0;n<e;n++)this.boundTextures[n]=null;this.emptyTextures={};var i=new zs(r.createTexture());r.bindTexture(r.TEXTURE_2D,i.texture),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,new Uint8Array(4)),this.emptyTextures[r.TEXTURE_2D]=i,this.emptyTextures[r.TEXTURE_CUBE_MAP]=new zs(r.createTexture()),r.bindTexture(r.TEXTURE_CUBE_MAP,this.emptyTextures[r.TEXTURE_CUBE_MAP].texture);for(var n=0;n<6;n++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,null);r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,r.LINEAR);for(var n=0;n<this.boundTextures.length;n++)this.bind(null,n)},t.prototype.bind=function(r,e){e===void 0&&(e=0);var n=this.gl;if(r=r==null?void 0:r.castToBaseTexture(),r&&r.valid&&!r.parentTextureArray){r.touched=this.renderer.textureGC.count;var i=r._glTextures[this.CONTEXT_UID]||this.initTexture(r);this.boundTextures[e]!==r&&(this.currentLocation!==e&&(this.currentLocation=e,n.activeTexture(n.TEXTURE0+e)),n.bindTexture(r.target,i.texture)),i.dirtyId!==r.dirtyId&&(this.currentLocation!==e&&(this.currentLocation=e,n.activeTexture(n.TEXTURE0+e)),this.updateTexture(r)),this.boundTextures[e]=r}else this.currentLocation!==e&&(this.currentLocation=e,n.activeTexture(n.TEXTURE0+e)),n.bindTexture(n.TEXTURE_2D,this.emptyTextures[n.TEXTURE_2D].texture),this.boundTextures[e]=null},t.prototype.reset=function(){this._unknownBoundTextures=!0,this.hasIntegerTextures=!1,this.currentLocation=-1;for(var r=0;r<this.boundTextures.length;r++)this.boundTextures[r]=this.unknownTexture},t.prototype.unbind=function(r){var e=this,n=e.gl,i=e.boundTextures;if(this._unknownBoundTextures){this._unknownBoundTextures=!1;for(var o=0;o<i.length;o++)i[o]===this.unknownTexture&&this.bind(null,o)}for(var o=0;o<i.length;o++)i[o]===r&&(this.currentLocation!==o&&(n.activeTexture(n.TEXTURE0+o),this.currentLocation=o),n.bindTexture(r.target,this.emptyTextures[r.target].texture),i[o]=null)},t.prototype.ensureSamplerType=function(r){var e=this,n=e.boundTextures,i=e.hasIntegerTextures,o=e.CONTEXT_UID;if(!!i)for(var s=r-1;s>=0;--s){var l=n[s];if(l){var h=l._glTextures[o];h.samplerType!==vo.FLOAT&&this.renderer.texture.unbind(l)}}},t.prototype.initTexture=function(r){var e=new zs(this.gl.createTexture());return e.dirtyId=-1,r._glTextures[this.CONTEXT_UID]=e,this.managedTextures.push(r),r.on("dispose",this.destroyTexture,this),e},t.prototype.initTextureType=function(r,e){var n,i;e.internalFormat=(i=(n=this.internalFormats[r.type])===null||n===void 0?void 0:n[r.format])!==null&&i!==void 0?i:r.format,this.webGLVersion===2&&r.type===Y.HALF_FLOAT?e.type=this.gl.HALF_FLOAT:e.type=r.type},t.prototype.updateTexture=function(r){var e=r._glTextures[this.CONTEXT_UID];if(!!e){var n=this.renderer;if(this.initTextureType(r,e),r.resource&&r.resource.upload(n,r,e))e.samplerType!==vo.FLOAT&&(this.hasIntegerTextures=!0);else{var i=r.realWidth,o=r.realHeight,s=n.gl;(e.width!==i||e.height!==o||e.dirtyId<0)&&(e.width=i,e.height=o,s.texImage2D(r.target,0,e.internalFormat,i,o,0,r.format,e.type,null))}r.dirtyStyleId!==e.dirtyStyleId&&this.updateTextureStyle(r),e.dirtyId=r.dirtyId}},t.prototype.destroyTexture=function(r,e){var n=this.gl;if(r=r.castToBaseTexture(),r._glTextures[this.CONTEXT_UID]&&(this.unbind(r),n.deleteTexture(r._glTextures[this.CONTEXT_UID].texture),r.off("dispose",this.destroyTexture,this),delete r._glTextures[this.CONTEXT_UID],!e)){var i=this.managedTextures.indexOf(r);i!==-1&&Qr(this.managedTextures,i,1)}},t.prototype.updateTextureStyle=function(r){var e=r._glTextures[this.CONTEXT_UID];!e||((r.mipmap===he.POW2||this.webGLVersion!==2)&&!r.isPowerOfTwo?e.mipmap=!1:e.mipmap=r.mipmap>=1,this.webGLVersion!==2&&!r.isPowerOfTwo?e.wrapMode=ye.CLAMP:e.wrapMode=r.wrapMode,r.resource&&r.resource.style(this.renderer,r,e)||this.setStyle(r,e),e.dirtyStyleId=r.dirtyStyleId)},t.prototype.setStyle=function(r,e){var n=this.gl;if(e.mipmap&&r.mipmap!==he.ON_MANUAL&&n.generateMipmap(r.target),n.texParameteri(r.target,n.TEXTURE_WRAP_S,e.wrapMode),n.texParameteri(r.target,n.TEXTURE_WRAP_T,e.wrapMode),e.mipmap){n.texParameteri(r.target,n.TEXTURE_MIN_FILTER,r.scaleMode===ee.LINEAR?n.LINEAR_MIPMAP_LINEAR:n.NEAREST_MIPMAP_NEAREST);var i=this.renderer.context.extensions.anisotropicFiltering;if(i&&r.anisotropicLevel>0&&r.scaleMode===ee.LINEAR){var o=Math.min(r.anisotropicLevel,n.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));n.texParameterf(r.target,i.TEXTURE_MAX_ANISOTROPY_EXT,o)}}else n.texParameteri(r.target,n.TEXTURE_MIN_FILTER,r.scaleMode===ee.LINEAR?n.LINEAR:n.NEAREST);n.texParameteri(r.target,n.TEXTURE_MAG_FILTER,r.scaleMode===ee.LINEAR?n.LINEAR:n.NEAREST)},t.prototype.destroy=function(){this.renderer=null},t}(),$s=new Rt,dw=function(t){Et(r,t);function r(e,n){e===void 0&&(e=ii.UNKNOWN);var i=t.call(this)||this;return n=Object.assign({},X.RENDER_OPTIONS,n),i.options=n,i.type=e,i.screen=new mt(0,0,n.width,n.height),i.view=n.view||X.ADAPTER.createCanvas(),i.resolution=n.resolution||X.RESOLUTION,i.useContextAlpha=n.useContextAlpha,i.autoDensity=!!n.autoDensity,i.preserveDrawingBuffer=n.preserveDrawingBuffer,i.clearBeforeRender=n.clearBeforeRender,i._backgroundColor=0,i._backgroundColorRgba=[0,0,0,1],i._backgroundColorString="#000000",i.backgroundColor=n.backgroundColor||i._backgroundColor,i.backgroundAlpha=n.backgroundAlpha,n.transparent!==void 0&&(xe("6.0.0","Option transparent is deprecated, please use backgroundAlpha instead."),i.useContextAlpha=n.transparent,i.backgroundAlpha=n.transparent?0:1),i._lastObjectRendered=null,i.plugins={},i}return r.prototype.initPlugins=function(e){for(var n in e)this.plugins[n]=new e[n](this)},Object.defineProperty(r.prototype,"width",{get:function(){return this.view.width},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this.view.height},enumerable:!1,configurable:!0}),r.prototype.resize=function(e,n){this.view.width=Math.round(e*this.resolution),this.view.height=Math.round(n*this.resolution);var i=this.view.width/this.resolution,o=this.view.height/this.resolution;this.screen.width=i,this.screen.height=o,this.autoDensity&&(this.view.style.width=i+"px",this.view.style.height=o+"px"),this.emit("resize",i,o)},r.prototype.generateTexture=function(e,n,i,o){n===void 0&&(n={}),typeof n=="number"&&(xe("6.1.0","generateTexture options (scaleMode, resolution, region) are now object options."),n={scaleMode:n,resolution:i,region:o});var s=n.region,l=Yx(n,["region"]);o=s||e.getLocalBounds(null,!0),o.width===0&&(o.width=1),o.height===0&&(o.height=1);var h=Qe.create(Sa({width:o.width,height:o.height},l));return $s.tx=-o.x,$s.ty=-o.y,this.render(e,{renderTexture:h,clear:!1,transform:$s,skipUpdateTransform:!!e.parent}),h},r.prototype.destroy=function(e){for(var n in this.plugins)this.plugins[n].destroy(),this.plugins[n]=null;e&&this.view.parentNode&&this.view.parentNode.removeChild(this.view);var i=this;i.plugins=null,i.type=ii.UNKNOWN,i.view=null,i.screen=null,i._tempDisplayObjectParent=null,i.options=null,this._backgroundColorRgba=null,this._backgroundColorString=null,this._lastObjectRendered=null},Object.defineProperty(r.prototype,"backgroundColor",{get:function(){return this._backgroundColor},set:function(e){this._backgroundColor=e,this._backgroundColorString=pp(e),Gt(e,this._backgroundColorRgba)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"backgroundAlpha",{get:function(){return this._backgroundColorRgba[3]},set:function(e){this._backgroundColorRgba[3]=e},enumerable:!1,configurable:!0}),r}(yi),pw=function(){function t(r){this.buffer=r||null,this.updateID=-1,this.byteLength=-1,this.refCount=0}return t}(),vw=function(){function t(r){this.renderer=r,this.managedBuffers={},this.boundBufferBases={}}return t.prototype.destroy=function(){this.renderer=null},t.prototype.contextChange=function(){this.disposeAll(!0),this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID},t.prototype.bind=function(r){var e=this,n=e.gl,i=e.CONTEXT_UID,o=r._glBuffers[i]||this.createGLBuffer(r);n.bindBuffer(r.type,o.buffer)},t.prototype.bindBufferBase=function(r,e){var n=this,i=n.gl,o=n.CONTEXT_UID;if(this.boundBufferBases[e]!==r){var s=r._glBuffers[o]||this.createGLBuffer(r);this.boundBufferBases[e]=r,i.bindBufferBase(i.UNIFORM_BUFFER,e,s.buffer)}},t.prototype.bindBufferRange=function(r,e,n){var i=this,o=i.gl,s=i.CONTEXT_UID;n=n||0;var l=r._glBuffers[s]||this.createGLBuffer(r);o.bindBufferRange(o.UNIFORM_BUFFER,e||0,l.buffer,n*256,256)},t.prototype.update=function(r){var e=this,n=e.gl,i=e.CONTEXT_UID,o=r._glBuffers[i];if(r._updateID!==o.updateID)if(o.updateID=r._updateID,n.bindBuffer(r.type,o.buffer),o.byteLength>=r.data.byteLength)n.bufferSubData(r.type,0,r.data);else{var s=r.static?n.STATIC_DRAW:n.DYNAMIC_DRAW;o.byteLength=r.data.byteLength,n.bufferData(r.type,r.data,s)}},t.prototype.dispose=function(r,e){if(!!this.managedBuffers[r.id]){delete this.managedBuffers[r.id];var n=r._glBuffers[this.CONTEXT_UID],i=this.gl;r.disposeRunner.remove(this),n&&(e||i.deleteBuffer(n.buffer),delete r._glBuffers[this.CONTEXT_UID])}},t.prototype.disposeAll=function(r){for(var e=Object.keys(this.managedBuffers),n=0;n<e.length;n++)this.dispose(this.managedBuffers[e[n]],r)},t.prototype.createGLBuffer=function(r){var e=this,n=e.CONTEXT_UID,i=e.gl;return r._glBuffers[n]=new pw(i.createBuffer()),this.managedBuffers[r.id]=r,r.disposeRunner.add(this),r._glBuffers[n]},t}(),eu=function(t){Et(r,t);function r(e){var n=t.call(this,ii.WEBGL,e)||this;return e=n.options,n.gl=null,n.CONTEXT_UID=0,n.runners={destroy:new jt("destroy"),contextChange:new jt("contextChange"),reset:new jt("reset"),update:new jt("update"),postrender:new jt("postrender"),prerender:new jt("prerender"),resize:new jt("resize")},n.runners.contextChange.add(n),n.globalUniforms=new br({projectionMatrix:new Rt},!0),n.addSystem(D1,"mask").addSystem(v1,"context").addSystem(uw,"state").addSystem(ew,"shader").addSystem(fw,"texture").addSystem(vw,"buffer").addSystem(y1,"geometry").addSystem(g1,"framebuffer").addSystem(V1,"scissor").addSystem(j1,"stencil").addSystem(H1,"projection").addSystem(hw,"textureGC").addSystem(d1,"filter").addSystem(X1,"renderTexture").addSystem(p1,"batch"),n.initPlugins(r.__plugins),n.multisample=void 0,e.context?n.context.initFromContext(e.context):n.context.initFromOptions({alpha:!!n.useContextAlpha,antialias:e.antialias,premultipliedAlpha:n.useContextAlpha&&n.useContextAlpha!=="notMultiplied",stencil:!0,preserveDrawingBuffer:e.preserveDrawingBuffer,powerPreference:n.options.powerPreference}),n.renderingToScreen=!0,K0(n.context.webGLVersion===2?"WebGL 2":"WebGL 1"),n.resize(n.options.width,n.options.height),n}return r.create=function(e){if(Z0())return new r(e);throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')},r.prototype.contextChange=function(){var e=this.gl,n;if(this.context.webGLVersion===1){var i=e.getParameter(e.FRAMEBUFFER_BINDING);e.bindFramebuffer(e.FRAMEBUFFER,null),n=e.getParameter(e.SAMPLES),e.bindFramebuffer(e.FRAMEBUFFER,i)}else{var i=e.getParameter(e.DRAW_FRAMEBUFFER_BINDING);e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),n=e.getParameter(e.SAMPLES),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,i)}n>=Mt.HIGH?this.multisample=Mt.HIGH:n>=Mt.MEDIUM?this.multisample=Mt.MEDIUM:n>=Mt.LOW?this.multisample=Mt.LOW:this.multisample=Mt.NONE},r.prototype.addSystem=function(e,n){var i=new e(this);if(this[n])throw new Error('Whoops! The name "'+n+'" is already in use');this[n]=i;for(var o in this.runners)this.runners[o].add(i);return this},r.prototype.render=function(e,n){var i,o,s,l;if(n&&(n instanceof Qe?(xe("6.0.0","Renderer#render arguments changed, use options instead."),i=n,o=arguments[2],s=arguments[3],l=arguments[4]):(i=n.renderTexture,o=n.clear,s=n.transform,l=n.skipUpdateTransform)),this.renderingToScreen=!i,this.runners.prerender.emit(),this.emit("prerender"),this.projection.transform=s,!this.context.isLost){if(i||(this._lastObjectRendered=e),!l){var h=e.enableTempParent();e.updateTransform(),e.disableTempParent(h)}this.renderTexture.bind(i),this.batch.currentRenderer.start(),(o!==void 0?o:this.clearBeforeRender)&&this.renderTexture.clear(),e.render(this),this.batch.currentRenderer.flush(),i&&i.baseTexture.update(),this.runners.postrender.emit(),this.projection.transform=null,this.emit("postrender")}},r.prototype.generateTexture=function(e,n,i,o){n===void 0&&(n={});var s=t.prototype.generateTexture.call(this,e,n,i,o);return this.framebuffer.blit(),s},r.prototype.resize=function(e,n){t.prototype.resize.call(this,e,n),this.runners.resize.emit(this.screen.height,this.screen.width)},r.prototype.reset=function(){return this.runners.reset.emit(),this},r.prototype.clear=function(){this.renderTexture.bind(),this.renderTexture.clear()},r.prototype.destroy=function(e){this.runners.destroy.emit();for(var n in this.runners)this.runners[n].destroy();t.prototype.destroy.call(this,e),this.gl=null},Object.defineProperty(r.prototype,"extract",{get:function(){return xe("6.0.0","Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."),this.plugins.extract},enumerable:!1,configurable:!0}),r.registerPlugin=function(e,n){xe("6.5.0","Renderer.registerPlugin() has been deprecated, please use extensions.add() instead."),Be.add({name:e,type:Tt.RendererPlugin,ref:n})},r.__plugins={},r}(dw);Be.handleByMap(Tt.RendererPlugin,eu.__plugins);function mw(t){return eu.create(t)}var _w=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,gw=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,yw=_w,Bp=gw,La=function(){function t(){this.texArray=null,this.blend=0,this.type=te.TRIANGLES,this.start=0,this.size=0,this.data=null}return t}(),go=function(){function t(){this.elements=[],this.ids=[],this.count=0}return t.prototype.clear=function(){for(var r=0;r<this.count;r++)this.elements[r]=null;this.count=0},t}(),Fa=function(){function t(r){typeof r=="number"?this.rawBinaryData=new ArrayBuffer(r):r instanceof Uint8Array?this.rawBinaryData=r.buffer:this.rawBinaryData=r,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}return Object.defineProperty(t.prototype,"int8View",{get:function(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"uint8View",{get:function(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"int16View",{get:function(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"uint16View",{get:function(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"int32View",{get:function(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View},enumerable:!1,configurable:!0}),t.prototype.view=function(r){return this[r+"View"]},t.prototype.destroy=function(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null},t.sizeOf=function(r){switch(r){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(r+" isn't a valid view type")}},t}(),bw=function(t){Et(r,t);function r(e){var n=t.call(this,e)||this;return n.shaderGenerator=null,n.geometryClass=null,n.vertexSize=null,n.state=er.for2d(),n.size=X.SPRITE_BATCH_SIZE*4,n._vertexCount=0,n._indexCount=0,n._bufferedElements=[],n._bufferedTextures=[],n._bufferSize=0,n._shader=null,n._packedGeometries=[],n._packedGeometryPoolSize=2,n._flushId=0,n._aBuffers={},n._iBuffers={},n.MAX_TEXTURES=1,n.renderer.on("prerender",n.onPrerender,n),e.runners.contextChange.add(n),n._dcIndex=0,n._aIndex=0,n._iIndex=0,n._attributeBuffer=null,n._indexBuffer=null,n._tempBoundTextures=[],n}return r.prototype.contextChange=function(){var e=this.renderer.gl;X.PREFER_ENV===Fe.WEBGL_LEGACY?this.MAX_TEXTURES=1:(this.MAX_TEXTURES=Math.min(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),X.SPRITE_MAX_TEXTURES),this.MAX_TEXTURES=N1(this.MAX_TEXTURES,e)),this._shader=this.shaderGenerator.generateShader(this.MAX_TEXTURES);for(var n=0;n<this._packedGeometryPoolSize;n++)this._packedGeometries[n]=new this.geometryClass;this.initFlushBuffers()},r.prototype.initFlushBuffers=function(){for(var e=r._drawCallPool,n=r._textureArrayPool,i=this.size/4,o=Math.floor(i/this.MAX_TEXTURES)+1;e.length<i;)e.push(new La);for(;n.length<o;)n.push(new go);for(var s=0;s<this.MAX_TEXTURES;s++)this._tempBoundTextures[s]=null},r.prototype.onPrerender=function(){this._flushId=0},r.prototype.render=function(e){!e._texture.valid||(this._vertexCount+e.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=e.vertexData.length/2,this._indexCount+=e.indices.length,this._bufferedTextures[this._bufferSize]=e._texture.baseTexture,this._bufferedElements[this._bufferSize++]=e)},r.prototype.buildTexturesAndDrawCalls=function(){var e=this,n=e._bufferedTextures,i=e.MAX_TEXTURES,o=r._textureArrayPool,s=this.renderer.batch,l=this._tempBoundTextures,h=this.renderer.textureGC.count,f=++vt._globalBatch,d=0,v=o[0],m=0;s.copyBoundTextures(l,i);for(var _=0;_<this._bufferSize;++_){var g=n[_];n[_]=null,g._batchEnabled!==f&&(v.count>=i&&(s.boundArray(v,l,f,i),this.buildDrawCalls(v,m,_),m=_,v=o[++d],++f),g._batchEnabled=f,g.touched=h,v.elements[v.count++]=g)}v.count>0&&(s.boundArray(v,l,f,i),this.buildDrawCalls(v,m,this._bufferSize),++d,++f);for(var _=0;_<l.length;_++)l[_]=null;vt._globalBatch=f},r.prototype.buildDrawCalls=function(e,n,i){var o=this,s=o._bufferedElements,l=o._attributeBuffer,h=o._indexBuffer,f=o.vertexSize,d=r._drawCallPool,v=this._dcIndex,m=this._aIndex,_=this._iIndex,g=d[v];g.start=this._iIndex,g.texArray=e;for(var b=n;b<i;++b){var y=s[b],w=y._texture.baseTexture,C=mp[w.alphaMode?1:0][y.blendMode];s[b]=null,n<b&&g.blend!==C&&(g.size=_-g.start,n=b,g=d[++v],g.texArray=e,g.start=_),this.packInterleavedGeometry(y,l,h,m,_),m+=y.vertexData.length/2*f,_+=y.indices.length,g.blend=C}n<i&&(g.size=_-g.start,++v),this._dcIndex=v,this._aIndex=m,this._iIndex=_},r.prototype.bindAndClearTexArray=function(e){for(var n=this.renderer.texture,i=0;i<e.count;i++)n.bind(e.elements[i],e.ids[i]),e.elements[i]=null;e.count=0},r.prototype.updateGeometry=function(){var e=this,n=e._packedGeometries,i=e._attributeBuffer,o=e._indexBuffer;X.CAN_UPLOAD_SAME_BUFFER?(n[this._flushId]._buffer.update(i.rawBinaryData),n[this._flushId]._indexBuffer.update(o),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,n[this._flushId]=new this.geometryClass),n[this._flushId]._buffer.update(i.rawBinaryData),n[this._flushId]._indexBuffer.update(o),this.renderer.geometry.bind(n[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)},r.prototype.drawBatches=function(){for(var e=this._dcIndex,n=this.renderer,i=n.gl,o=n.state,s=r._drawCallPool,l=null,h=0;h<e;h++){var f=s[h],d=f.texArray,v=f.type,m=f.size,_=f.start,g=f.blend;l!==d&&(l=d,this.bindAndClearTexArray(d)),this.state.blendMode=g,o.set(this.state),i.drawElements(v,m,i.UNSIGNED_SHORT,_*2)}},r.prototype.flush=function(){this._vertexCount!==0&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),this._bufferSize=0,this._vertexCount=0,this._indexCount=0)},r.prototype.start=function(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES),this.renderer.shader.bind(this._shader),X.CAN_UPLOAD_SAME_BUFFER&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])},r.prototype.stop=function(){this.flush()},r.prototype.destroy=function(){for(var e=0;e<this._packedGeometryPoolSize;e++)this._packedGeometries[e]&&this._packedGeometries[e].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),t.prototype.destroy.call(this)},r.prototype.getAttributeBuffer=function(e){var n=mo(Math.ceil(e/8)),i=pc(n),o=n*8;this._aBuffers.length<=i&&(this._iBuffers.length=i+1);var s=this._aBuffers[o];return s||(this._aBuffers[o]=s=new Fa(o*this.vertexSize*4)),s},r.prototype.getIndexBuffer=function(e){var n=mo(Math.ceil(e/12)),i=pc(n),o=n*12;this._iBuffers.length<=i&&(this._iBuffers.length=i+1);var s=this._iBuffers[i];return s||(this._iBuffers[i]=s=new Uint16Array(o)),s},r.prototype.packInterleavedGeometry=function(e,n,i,o,s){for(var l=n.uint32View,h=n.float32View,f=o/this.vertexSize,d=e.uvs,v=e.indices,m=e.vertexData,_=e._texture.baseTexture._batchLocation,g=Math.min(e.worldAlpha,1),b=g<1&&e._texture.baseTexture.alphaMode?Go(e._tintRGB,g):e._tintRGB+(g*255<<24),y=0;y<m.length;y+=2)h[o++]=m[y],h[o++]=m[y+1],h[o++]=d[y],h[o++]=d[y+1],l[o++]=b,h[o++]=_;for(var y=0;y<v.length;y++)i[s++]=f+v[y]},r._drawCallPool=[],r._textureArrayPool=[],r}(Do),xw=function(){function t(r,e){if(this.vertexSrc=r,this.fragTemplate=e,this.programCache={},this.defaultGroupCache={},e.indexOf("%count%")<0)throw new Error('Fragment template must contain "%count%".');if(e.indexOf("%forloop%")<0)throw new Error('Fragment template must contain "%forloop%".')}return t.prototype.generateShader=function(r){if(!this.programCache[r]){for(var e=new Int32Array(r),n=0;n<r;n++)e[n]=n;this.defaultGroupCache[r]=br.from({uSamplers:e},!0);var i=this.fragTemplate;i=i.replace(/%count%/gi,""+r),i=i.replace(/%forloop%/gi,this.generateSampleSrc(r)),this.programCache[r]=new an(this.vertexSrc,i)}var o={tint:new Float32Array([1,1,1,1]),translationMatrix:new Rt,default:this.defaultGroupCache[r]};return new Le(this.programCache[r],o)},t.prototype.generateSampleSrc=function(r){var e="";e+=`
`,e+=`
`;for(var n=0;n<r;n++)n>0&&(e+=`
else `),n<r-1&&(e+="if(vTextureId < "+n+".5)"),e+=`
{`,e+=`
	color = texture2D(uSamplers[`+n+"], vTextureCoord);",e+=`
}`;return e+=`
`,e+=`
`,e},t}(),Gp=function(t){Et(r,t);function r(e){e===void 0&&(e=!1);var n=t.call(this)||this;return n._buffer=new Lt(null,e,!1),n._indexBuffer=new Lt(null,e,!0),n.addAttribute("aVertexPosition",n._buffer,2,!1,Y.FLOAT).addAttribute("aTextureCoord",n._buffer,2,!1,Y.FLOAT).addAttribute("aColor",n._buffer,4,!0,Y.UNSIGNED_BYTE).addAttribute("aTextureId",n._buffer,1,!0,Y.FLOAT).addIndex(n._indexBuffer),n}return r}(sn),Yc=`precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`,Kc=`varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,ww=function(){function t(){}return t.create=function(r){var e=Object.assign({vertex:Yc,fragment:Kc,geometryClass:Gp,vertexSize:6},r),n=e.vertex,i=e.fragment,o=e.vertexSize,s=e.geometryClass;return function(l){Et(h,l);function h(f){var d=l.call(this,f)||this;return d.shaderGenerator=new xw(n,i),d.geometryClass=s,d.vertexSize=o,d}return h}(bw)},Object.defineProperty(t,"defaultVertexSrc",{get:function(){return Yc},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultFragmentTemplate",{get:function(){return Kc},enumerable:!1,configurable:!0}),t}(),Dp=ww.create();Object.assign(Dp,{extension:{name:"batch",type:Tt.RendererPlugin}});/*!
 * @pixi/accessibility - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/accessibility is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Tw={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,renderId:-1};Ft.mixin(Tw);var Cw=9,Yi=100,Ew=0,Pw=0,Zc=2,Jc=1,Iw=-1e3,Rw=-1e3,Aw=2,Nw=function(){function t(r){this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this.pool=[],this.renderId=0,this.children=[],this.androidUpdateCount=0,this.androidUpdateFrequency=500,this._hookDiv=null,(me.tablet||me.phone)&&this.createTouchHook();var e=document.createElement("div");e.style.width=Yi+"px",e.style.height=Yi+"px",e.style.position="absolute",e.style.top=Ew+"px",e.style.left=Pw+"px",e.style.zIndex=Zc.toString(),this.div=e,this.renderer=r,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),globalThis.addEventListener("keydown",this._onKeyDown,!1)}return Object.defineProperty(t.prototype,"isActive",{get:function(){return this._isActive},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isMobileAccessibility",{get:function(){return this._isMobileAccessibility},enumerable:!1,configurable:!0}),t.prototype.createTouchHook=function(){var r=this,e=document.createElement("button");e.style.width=Jc+"px",e.style.height=Jc+"px",e.style.position="absolute",e.style.top=Iw+"px",e.style.left=Rw+"px",e.style.zIndex=Aw.toString(),e.style.backgroundColor="#FF0000",e.title="select to enable accessibility for this content",e.addEventListener("focus",function(){r._isMobileAccessibility=!0,r.activate(),r.destroyTouchHook()}),document.body.appendChild(e),this._hookDiv=e},t.prototype.destroyTouchHook=function(){!this._hookDiv||(document.body.removeChild(this._hookDiv),this._hookDiv=null)},t.prototype.activate=function(){var r;this._isActive||(this._isActive=!0,globalThis.document.addEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.update,this),(r=this.renderer.view.parentNode)===null||r===void 0||r.appendChild(this.div))},t.prototype.deactivate=function(){var r;!this._isActive||this._isMobileAccessibility||(this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update),(r=this.div.parentNode)===null||r===void 0||r.removeChild(this.div))},t.prototype.updateAccessibleObjects=function(r){if(!(!r.visible||!r.accessibleChildren)){r.accessible&&r.interactive&&(r._accessibleActive||this.addChild(r),r.renderId=this.renderId);var e=r.children;if(e)for(var n=0;n<e.length;n++)this.updateAccessibleObjects(e[n])}},t.prototype.update=function(){var r=performance.now();if(!(me.android.device&&r<this.androidUpdateCount)&&(this.androidUpdateCount=r+this.androidUpdateFrequency,!!this.renderer.renderingToScreen)){this.renderer._lastObjectRendered&&this.updateAccessibleObjects(this.renderer._lastObjectRendered);var e=this.renderer.view.getBoundingClientRect(),n=e.left,i=e.top,o=e.width,s=e.height,l=this.renderer,h=l.width,f=l.height,d=l.resolution,v=o/h*d,m=s/f*d,_=this.div;_.style.left=n+"px",_.style.top=i+"px",_.style.width=h+"px",_.style.height=f+"px";for(var g=0;g<this.children.length;g++){var b=this.children[g];if(b.renderId!==this.renderId)b._accessibleActive=!1,Qr(this.children,g,1),this.div.removeChild(b._accessibleDiv),this.pool.push(b._accessibleDiv),b._accessibleDiv=null,g--;else{_=b._accessibleDiv;var y=b.hitArea,w=b.worldTransform;b.hitArea?(_.style.left=(w.tx+y.x*w.a)*v+"px",_.style.top=(w.ty+y.y*w.d)*m+"px",_.style.width=y.width*w.a*v+"px",_.style.height=y.height*w.d*m+"px"):(y=b.getBounds(),this.capHitArea(y),_.style.left=y.x*v+"px",_.style.top=y.y*m+"px",_.style.width=y.width*v+"px",_.style.height=y.height*m+"px",_.title!==b.accessibleTitle&&b.accessibleTitle!==null&&(_.title=b.accessibleTitle),_.getAttribute("aria-label")!==b.accessibleHint&&b.accessibleHint!==null&&_.setAttribute("aria-label",b.accessibleHint)),(b.accessibleTitle!==_.title||b.tabIndex!==_.tabIndex)&&(_.title=b.accessibleTitle,_.tabIndex=b.tabIndex,this.debug&&this.updateDebugHTML(_))}}this.renderId++}},t.prototype.updateDebugHTML=function(r){r.innerHTML="type: "+r.type+"</br> title : "+r.title+"</br> tabIndex: "+r.tabIndex},t.prototype.capHitArea=function(r){r.x<0&&(r.width+=r.x,r.x=0),r.y<0&&(r.height+=r.y,r.y=0);var e=this.renderer,n=e.width,i=e.height;r.x+r.width>n&&(r.width=n-r.x),r.y+r.height>i&&(r.height=i-r.y)},t.prototype.addChild=function(r){var e=this.pool.pop();e||(e=document.createElement("button"),e.style.width=Yi+"px",e.style.height=Yi+"px",e.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",e.style.position="absolute",e.style.zIndex=Zc.toString(),e.style.borderStyle="none",navigator.userAgent.toLowerCase().indexOf("chrome")>-1?e.setAttribute("aria-live","off"):e.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?e.setAttribute("aria-relevant","additions"):e.setAttribute("aria-relevant","text"),e.addEventListener("click",this._onClick.bind(this)),e.addEventListener("focus",this._onFocus.bind(this)),e.addEventListener("focusout",this._onFocusOut.bind(this))),e.style.pointerEvents=r.accessiblePointerEvents,e.type=r.accessibleType,r.accessibleTitle&&r.accessibleTitle!==null?e.title=r.accessibleTitle:(!r.accessibleHint||r.accessibleHint===null)&&(e.title="displayObject "+r.tabIndex),r.accessibleHint&&r.accessibleHint!==null&&e.setAttribute("aria-label",r.accessibleHint),this.debug&&this.updateDebugHTML(e),r._accessibleActive=!0,r._accessibleDiv=e,e.displayObject=r,this.children.push(r),this.div.appendChild(r._accessibleDiv),r._accessibleDiv.tabIndex=r.tabIndex},t.prototype._onClick=function(r){var e=this.renderer.plugins.interaction,n=r.target.displayObject,i=e.eventData;e.dispatchEvent(n,"click",i),e.dispatchEvent(n,"pointertap",i),e.dispatchEvent(n,"tap",i)},t.prototype._onFocus=function(r){r.target.getAttribute("aria-live")||r.target.setAttribute("aria-live","assertive");var e=this.renderer.plugins.interaction,n=r.target.displayObject,i=e.eventData;e.dispatchEvent(n,"mouseover",i)},t.prototype._onFocusOut=function(r){r.target.getAttribute("aria-live")||r.target.setAttribute("aria-live","polite");var e=this.renderer.plugins.interaction,n=r.target.displayObject,i=e.eventData;e.dispatchEvent(n,"mouseout",i)},t.prototype._onKeyDown=function(r){r.keyCode===Cw&&this.activate()},t.prototype._onMouseMove=function(r){r.movementX===0&&r.movementY===0||this.deactivate()},t.prototype.destroy=function(){this.destroyTouchHook(),this.div=null,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null},t.extension={name:"accessibility",type:[Tt.RendererPlugin,Tt.CanvasRendererPlugin]},t}();/*!
 * @pixi/interaction - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/interaction is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Qc=function(){function t(){this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0,this.global=new ct,this.target=null,this.originalEvent=null,this.identifier=null,this.isPrimary=!1,this.button=0,this.buttons=0,this.width=0,this.height=0,this.tiltX=0,this.tiltY=0,this.pointerType=null,this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0}return Object.defineProperty(t.prototype,"pointerId",{get:function(){return this.identifier},enumerable:!1,configurable:!0}),t.prototype.getLocalPosition=function(r,e,n){return r.worldTransform.applyInverse(n||this.global,e)},t.prototype.copyEvent=function(r){"isPrimary"in r&&r.isPrimary&&(this.isPrimary=!0),this.button="button"in r&&r.button;var e="buttons"in r&&r.buttons;this.buttons=Number.isInteger(e)?e:"which"in r&&r.which,this.width="width"in r&&r.width,this.height="height"in r&&r.height,this.tiltX="tiltX"in r&&r.tiltX,this.tiltY="tiltY"in r&&r.tiltY,this.pointerType="pointerType"in r&&r.pointerType,this.pressure="pressure"in r&&r.pressure,this.rotationAngle="rotationAngle"in r&&r.rotationAngle,this.twist="twist"in r&&r.twist||0,this.tangentialPressure="tangentialPressure"in r&&r.tangentialPressure||0},t.prototype.reset=function(){this.isPrimary=!1},t}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ma=function(t,r){return Ma=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},Ma(t,r)};function Ow(t,r){Ma(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var Sw=function(){function t(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.target=null,this.currentTarget=null,this.type=null,this.data=null}return t.prototype.stopPropagation=function(){this.stopped=!0,this.stopPropagationHint=!0,this.stopsPropagatingAt=this.currentTarget},t.prototype.reset=function(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.currentTarget=null,this.target=null},t}(),Ws=function(){function t(r){this._pointerId=r,this._flags=t.FLAGS.NONE}return t.prototype._doSet=function(r,e){e?this._flags=this._flags|r:this._flags=this._flags&~r},Object.defineProperty(t.prototype,"pointerId",{get:function(){return this._pointerId},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"flags",{get:function(){return this._flags},set:function(r){this._flags=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"none",{get:function(){return this._flags===t.FLAGS.NONE},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"over",{get:function(){return(this._flags&t.FLAGS.OVER)!==0},set:function(r){this._doSet(t.FLAGS.OVER,r)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rightDown",{get:function(){return(this._flags&t.FLAGS.RIGHT_DOWN)!==0},set:function(r){this._doSet(t.FLAGS.RIGHT_DOWN,r)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"leftDown",{get:function(){return(this._flags&t.FLAGS.LEFT_DOWN)!==0},set:function(r){this._doSet(t.FLAGS.LEFT_DOWN,r)},enumerable:!1,configurable:!0}),t.FLAGS=Object.freeze({NONE:0,OVER:1<<0,LEFT_DOWN:1<<1,RIGHT_DOWN:1<<2}),t}(),Uw=function(){function t(){this._tempPoint=new ct}return t.prototype.recursiveFindHit=function(r,e,n,i,o){var s;if(!e||!e.visible)return!1;var l=r.data.global;o=e.interactive||o;var h=!1,f=o,d=!0;if(e.hitArea)i&&(e.worldTransform.applyInverse(l,this._tempPoint),e.hitArea.contains(this._tempPoint.x,this._tempPoint.y)?h=!0:(i=!1,d=!1)),f=!1;else if(e._mask&&i){var v=e._mask.isMaskData?e._mask.maskObject:e._mask;v&&!(!((s=v.containsPoint)===null||s===void 0)&&s.call(v,l))&&(i=!1)}if(d&&e.interactiveChildren&&e.children)for(var m=e.children,_=m.length-1;_>=0;_--){var g=m[_],b=this.recursiveFindHit(r,g,n,i,f);if(b){if(!g.parent)continue;f=!1,b&&(r.target&&(i=!1),h=!0)}}return o&&(i&&!r.target&&!e.hitArea&&e.containsPoint&&e.containsPoint(l)&&(h=!0),e.interactive&&(h&&!r.target&&(r.target=e),n&&n(r,e,!!h))),h},t.prototype.findHit=function(r,e,n,i){this.recursiveFindHit(r,e,n,i,!1)},t}(),Lw={interactive:!1,interactiveChildren:!0,hitArea:null,get buttonMode(){return this.cursor==="pointer"},set buttonMode(t){t?this.cursor="pointer":this.cursor==="pointer"&&(this.cursor=null)},cursor:null,get trackedPointers(){return this._trackedPointers===void 0&&(this._trackedPointers={}),this._trackedPointers},_trackedPointers:void 0};Ft.mixin(Lw);var Ki=1,Zi={target:null,data:{global:null}},Fw=function(t){Ow(r,t);function r(e,n){var i=t.call(this)||this;return n=n||{},i.renderer=e,i.autoPreventDefault=n.autoPreventDefault!==void 0?n.autoPreventDefault:!0,i.interactionFrequency=n.interactionFrequency||10,i.mouse=new Qc,i.mouse.identifier=Ki,i.mouse.global.set(-999999),i.activeInteractionData={},i.activeInteractionData[Ki]=i.mouse,i.interactionDataPool=[],i.eventData=new Sw,i.interactionDOMElement=null,i.moveWhenInside=!1,i.eventsAdded=!1,i.tickerAdded=!1,i.mouseOverRenderer=!("PointerEvent"in globalThis),i.supportsTouchEvents="ontouchstart"in globalThis,i.supportsPointerEvents=!!globalThis.PointerEvent,i.onPointerUp=i.onPointerUp.bind(i),i.processPointerUp=i.processPointerUp.bind(i),i.onPointerCancel=i.onPointerCancel.bind(i),i.processPointerCancel=i.processPointerCancel.bind(i),i.onPointerDown=i.onPointerDown.bind(i),i.processPointerDown=i.processPointerDown.bind(i),i.onPointerMove=i.onPointerMove.bind(i),i.processPointerMove=i.processPointerMove.bind(i),i.onPointerOut=i.onPointerOut.bind(i),i.processPointerOverOut=i.processPointerOverOut.bind(i),i.onPointerOver=i.onPointerOver.bind(i),i.cursorStyles={default:"inherit",pointer:"pointer"},i.currentCursorMode=null,i.cursor=null,i.resolution=1,i.delayedEvents=[],i.search=new Uw,i._tempDisplayObject=new Ep,i._eventListenerOptions={capture:!0,passive:!1},i._useSystemTicker=n.useSystemTicker!==void 0?n.useSystemTicker:!0,i.setTargetElement(i.renderer.view,i.renderer.resolution),i}return Object.defineProperty(r.prototype,"useSystemTicker",{get:function(){return this._useSystemTicker},set:function(e){this._useSystemTicker=e,e?this.addTickerListener():this.removeTickerListener()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lastObjectRendered",{get:function(){return this.renderer._lastObjectRendered||this._tempDisplayObject},enumerable:!1,configurable:!0}),r.prototype.hitTest=function(e,n){return Zi.target=null,Zi.data.global=e,n||(n=this.lastObjectRendered),this.processInteractive(Zi,n,null,!0),Zi.target},r.prototype.setTargetElement=function(e,n){n===void 0&&(n=1),this.removeTickerListener(),this.removeEvents(),this.interactionDOMElement=e,this.resolution=n,this.addEvents(),this.addTickerListener()},r.prototype.addTickerListener=function(){this.tickerAdded||!this.interactionDOMElement||!this._useSystemTicker||(Vt.system.add(this.tickerUpdate,this,Me.INTERACTION),this.tickerAdded=!0)},r.prototype.removeTickerListener=function(){!this.tickerAdded||(Vt.system.remove(this.tickerUpdate,this),this.tickerAdded=!1)},r.prototype.addEvents=function(){if(!(this.eventsAdded||!this.interactionDOMElement)){var e=this.interactionDOMElement.style;globalThis.navigator.msPointerEnabled?(e.msContentZooming="none",e.msTouchAction="none"):this.supportsPointerEvents&&(e.touchAction="none"),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),globalThis.addEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),globalThis.addEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(globalThis.document.addEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),globalThis.addEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.addEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.eventsAdded=!0}},r.prototype.removeEvents=function(){if(!(!this.eventsAdded||!this.interactionDOMElement)){var e=this.interactionDOMElement.style;globalThis.navigator.msPointerEnabled?(e.msContentZooming="",e.msTouchAction=""):this.supportsPointerEvents&&(e.touchAction=""),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),globalThis.removeEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),globalThis.removeEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(globalThis.document.removeEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),globalThis.removeEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.removeEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.interactionDOMElement=null,this.eventsAdded=!1}},r.prototype.tickerUpdate=function(e){this._deltaTime+=e,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.update())},r.prototype.update=function(){if(!!this.interactionDOMElement){if(this._didMove){this._didMove=!1;return}this.cursor=null;for(var e in this.activeInteractionData)if(this.activeInteractionData.hasOwnProperty(e)){var n=this.activeInteractionData[e];if(n.originalEvent&&n.pointerType!=="touch"){var i=this.configureInteractionEventForDOMEvent(this.eventData,n.originalEvent,n);this.processInteractive(i,this.lastObjectRendered,this.processPointerOverOut,!0)}}this.setCursorMode(this.cursor)}},r.prototype.setCursorMode=function(e){e=e||"default";var n=!0;if(globalThis.OffscreenCanvas&&this.interactionDOMElement instanceof OffscreenCanvas&&(n=!1),this.currentCursorMode!==e){this.currentCursorMode=e;var i=this.cursorStyles[e];if(i)switch(typeof i){case"string":n&&(this.interactionDOMElement.style.cursor=i);break;case"function":i(e);break;case"object":n&&Object.assign(this.interactionDOMElement.style,i);break}else n&&typeof e=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,e)&&(this.interactionDOMElement.style.cursor=e)}},r.prototype.dispatchEvent=function(e,n,i){(!i.stopPropagationHint||e===i.stopsPropagatingAt)&&(i.currentTarget=e,i.type=n,e.emit(n,i),e[n]&&e[n](i))},r.prototype.delayDispatchEvent=function(e,n,i){this.delayedEvents.push({displayObject:e,eventString:n,eventData:i})},r.prototype.mapPositionToPoint=function(e,n,i){var o;this.interactionDOMElement.parentElement?o=this.interactionDOMElement.getBoundingClientRect():o={x:0,y:0,width:this.interactionDOMElement.width,height:this.interactionDOMElement.height,left:0,top:0};var s=1/this.resolution;e.x=(n-o.left)*(this.interactionDOMElement.width/o.width)*s,e.y=(i-o.top)*(this.interactionDOMElement.height/o.height)*s},r.prototype.processInteractive=function(e,n,i,o){var s=this.search.findHit(e,n,i,o),l=this.delayedEvents;if(!l.length)return s;e.stopPropagationHint=!1;var h=l.length;this.delayedEvents=[];for(var f=0;f<h;f++){var d=l[f],v=d.displayObject,m=d.eventString,_=d.eventData;_.stopsPropagatingAt===v&&(_.stopPropagationHint=!0),this.dispatchEvent(v,m,_)}return s},r.prototype.onPointerDown=function(e){if(!(this.supportsTouchEvents&&e.pointerType==="touch")){var n=this.normalizeToPointerData(e);if(this.autoPreventDefault&&n[0].isNormalized){var i=e.cancelable||!("cancelable"in e);i&&e.preventDefault()}for(var o=n.length,s=0;s<o;s++){var l=n[s],h=this.getInteractionDataForPointerId(l),f=this.configureInteractionEventForDOMEvent(this.eventData,l,h);if(f.data.originalEvent=e,this.processInteractive(f,this.lastObjectRendered,this.processPointerDown,!0),this.emit("pointerdown",f),l.pointerType==="touch")this.emit("touchstart",f);else if(l.pointerType==="mouse"||l.pointerType==="pen"){var d=l.button===2;this.emit(d?"rightdown":"mousedown",this.eventData)}}}},r.prototype.processPointerDown=function(e,n,i){var o=e.data,s=e.data.identifier;if(i){if(n.trackedPointers[s]||(n.trackedPointers[s]=new Ws(s)),this.dispatchEvent(n,"pointerdown",e),o.pointerType==="touch")this.dispatchEvent(n,"touchstart",e);else if(o.pointerType==="mouse"||o.pointerType==="pen"){var l=o.button===2;l?n.trackedPointers[s].rightDown=!0:n.trackedPointers[s].leftDown=!0,this.dispatchEvent(n,l?"rightdown":"mousedown",e)}}},r.prototype.onPointerComplete=function(e,n,i){var o=this.normalizeToPointerData(e),s=o.length,l=e.target;e.composedPath&&e.composedPath().length>0&&(l=e.composedPath()[0]);for(var h=l!==this.interactionDOMElement?"outside":"",f=0;f<s;f++){var d=o[f],v=this.getInteractionDataForPointerId(d),m=this.configureInteractionEventForDOMEvent(this.eventData,d,v);if(m.data.originalEvent=e,this.processInteractive(m,this.lastObjectRendered,i,n||!h),this.emit(n?"pointercancel":"pointerup"+h,m),d.pointerType==="mouse"||d.pointerType==="pen"){var _=d.button===2;this.emit(_?"rightup"+h:"mouseup"+h,m)}else d.pointerType==="touch"&&(this.emit(n?"touchcancel":"touchend"+h,m),this.releaseInteractionDataForPointerId(d.pointerId))}},r.prototype.onPointerCancel=function(e){this.supportsTouchEvents&&e.pointerType==="touch"||this.onPointerComplete(e,!0,this.processPointerCancel)},r.prototype.processPointerCancel=function(e,n){var i=e.data,o=e.data.identifier;n.trackedPointers[o]!==void 0&&(delete n.trackedPointers[o],this.dispatchEvent(n,"pointercancel",e),i.pointerType==="touch"&&this.dispatchEvent(n,"touchcancel",e))},r.prototype.onPointerUp=function(e){this.supportsTouchEvents&&e.pointerType==="touch"||this.onPointerComplete(e,!1,this.processPointerUp)},r.prototype.processPointerUp=function(e,n,i){var o=e.data,s=e.data.identifier,l=n.trackedPointers[s],h=o.pointerType==="touch",f=o.pointerType==="mouse"||o.pointerType==="pen",d=!1;if(f){var v=o.button===2,m=Ws.FLAGS,_=v?m.RIGHT_DOWN:m.LEFT_DOWN,g=l!==void 0&&l.flags&_;i?(this.dispatchEvent(n,v?"rightup":"mouseup",e),g&&(this.dispatchEvent(n,v?"rightclick":"click",e),d=!0)):g&&this.dispatchEvent(n,v?"rightupoutside":"mouseupoutside",e),l&&(v?l.rightDown=!1:l.leftDown=!1)}i?(this.dispatchEvent(n,"pointerup",e),h&&this.dispatchEvent(n,"touchend",e),l&&((!f||d)&&this.dispatchEvent(n,"pointertap",e),h&&(this.dispatchEvent(n,"tap",e),l.over=!1))):l&&(this.dispatchEvent(n,"pointerupoutside",e),h&&this.dispatchEvent(n,"touchendoutside",e)),l&&l.none&&delete n.trackedPointers[s]},r.prototype.onPointerMove=function(e){if(!(this.supportsTouchEvents&&e.pointerType==="touch")){var n=this.normalizeToPointerData(e);(n[0].pointerType==="mouse"||n[0].pointerType==="pen")&&(this._didMove=!0,this.cursor=null);for(var i=n.length,o=0;o<i;o++){var s=n[o],l=this.getInteractionDataForPointerId(s),h=this.configureInteractionEventForDOMEvent(this.eventData,s,l);h.data.originalEvent=e,this.processInteractive(h,this.lastObjectRendered,this.processPointerMove,!0),this.emit("pointermove",h),s.pointerType==="touch"&&this.emit("touchmove",h),(s.pointerType==="mouse"||s.pointerType==="pen")&&this.emit("mousemove",h)}n[0].pointerType==="mouse"&&this.setCursorMode(this.cursor)}},r.prototype.processPointerMove=function(e,n,i){var o=e.data,s=o.pointerType==="touch",l=o.pointerType==="mouse"||o.pointerType==="pen";l&&this.processPointerOverOut(e,n,i),(!this.moveWhenInside||i)&&(this.dispatchEvent(n,"pointermove",e),s&&this.dispatchEvent(n,"touchmove",e),l&&this.dispatchEvent(n,"mousemove",e))},r.prototype.onPointerOut=function(e){if(!(this.supportsTouchEvents&&e.pointerType==="touch")){var n=this.normalizeToPointerData(e),i=n[0];i.pointerType==="mouse"&&(this.mouseOverRenderer=!1,this.setCursorMode(null));var o=this.getInteractionDataForPointerId(i),s=this.configureInteractionEventForDOMEvent(this.eventData,i,o);s.data.originalEvent=i,this.processInteractive(s,this.lastObjectRendered,this.processPointerOverOut,!1),this.emit("pointerout",s),i.pointerType==="mouse"||i.pointerType==="pen"?this.emit("mouseout",s):this.releaseInteractionDataForPointerId(o.identifier)}},r.prototype.processPointerOverOut=function(e,n,i){var o=e.data,s=e.data.identifier,l=o.pointerType==="mouse"||o.pointerType==="pen",h=n.trackedPointers[s];i&&!h&&(h=n.trackedPointers[s]=new Ws(s)),h!==void 0&&(i&&this.mouseOverRenderer?(h.over||(h.over=!0,this.delayDispatchEvent(n,"pointerover",e),l&&this.delayDispatchEvent(n,"mouseover",e)),l&&this.cursor===null&&(this.cursor=n.cursor)):h.over&&(h.over=!1,this.dispatchEvent(n,"pointerout",this.eventData),l&&this.dispatchEvent(n,"mouseout",e),h.none&&delete n.trackedPointers[s]))},r.prototype.onPointerOver=function(e){var n=this.normalizeToPointerData(e),i=n[0],o=this.getInteractionDataForPointerId(i),s=this.configureInteractionEventForDOMEvent(this.eventData,i,o);s.data.originalEvent=i,i.pointerType==="mouse"&&(this.mouseOverRenderer=!0),this.emit("pointerover",s),(i.pointerType==="mouse"||i.pointerType==="pen")&&this.emit("mouseover",s)},r.prototype.getInteractionDataForPointerId=function(e){var n=e.pointerId,i;return n===Ki||e.pointerType==="mouse"?i=this.mouse:this.activeInteractionData[n]?i=this.activeInteractionData[n]:(i=this.interactionDataPool.pop()||new Qc,i.identifier=n,this.activeInteractionData[n]=i),i.copyEvent(e),i},r.prototype.releaseInteractionDataForPointerId=function(e){var n=this.activeInteractionData[e];n&&(delete this.activeInteractionData[e],n.reset(),this.interactionDataPool.push(n))},r.prototype.configureInteractionEventForDOMEvent=function(e,n,i){return e.data=i,this.mapPositionToPoint(i.global,n.clientX,n.clientY),n.pointerType==="touch"&&(n.globalX=i.global.x,n.globalY=i.global.y),i.originalEvent=n,e.reset(),e},r.prototype.normalizeToPointerData=function(e){var n=[];if(this.supportsTouchEvents&&e instanceof TouchEvent)for(var i=0,o=e.changedTouches.length;i<o;i++){var s=e.changedTouches[i];typeof s.button>"u"&&(s.button=e.touches.length?1:0),typeof s.buttons>"u"&&(s.buttons=e.touches.length?1:0),typeof s.isPrimary>"u"&&(s.isPrimary=e.touches.length===1&&e.type==="touchstart"),typeof s.width>"u"&&(s.width=s.radiusX||1),typeof s.height>"u"&&(s.height=s.radiusY||1),typeof s.tiltX>"u"&&(s.tiltX=0),typeof s.tiltY>"u"&&(s.tiltY=0),typeof s.pointerType>"u"&&(s.pointerType="touch"),typeof s.pointerId>"u"&&(s.pointerId=s.identifier||0),typeof s.pressure>"u"&&(s.pressure=s.force||.5),typeof s.twist>"u"&&(s.twist=0),typeof s.tangentialPressure>"u"&&(s.tangentialPressure=0),typeof s.layerX>"u"&&(s.layerX=s.offsetX=s.clientX),typeof s.layerY>"u"&&(s.layerY=s.offsetY=s.clientY),s.isNormalized=!0,n.push(s)}else if(!globalThis.MouseEvent||e instanceof MouseEvent&&(!this.supportsPointerEvents||!(e instanceof globalThis.PointerEvent))){var l=e;typeof l.isPrimary>"u"&&(l.isPrimary=!0),typeof l.width>"u"&&(l.width=1),typeof l.height>"u"&&(l.height=1),typeof l.tiltX>"u"&&(l.tiltX=0),typeof l.tiltY>"u"&&(l.tiltY=0),typeof l.pointerType>"u"&&(l.pointerType="mouse"),typeof l.pointerId>"u"&&(l.pointerId=Ki),typeof l.pressure>"u"&&(l.pressure=.5),typeof l.twist>"u"&&(l.twist=0),typeof l.tangentialPressure>"u"&&(l.tangentialPressure=0),l.isNormalized=!0,n.push(l)}else n.push(e);return n},r.prototype.destroy=function(){this.removeEvents(),this.removeTickerListener(),this.removeAllListeners(),this.renderer=null,this.mouse=null,this.eventData=null,this.interactionDOMElement=null,this.onPointerDown=null,this.processPointerDown=null,this.onPointerUp=null,this.processPointerUp=null,this.onPointerCancel=null,this.processPointerCancel=null,this.onPointerMove=null,this.processPointerMove=null,this.onPointerOut=null,this.processPointerOverOut=null,this.onPointerOver=null,this.search=null},r.extension={name:"interaction",type:[Tt.RendererPlugin,Tt.CanvasRendererPlugin]},r}(yi);/*!
 * @pixi/extract - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/extract is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var tf=new mt,ef=4,Mw=function(){function t(r){this.renderer=r}return t.prototype.image=function(r,e,n){var i=new Image;return i.src=this.base64(r,e,n),i},t.prototype.base64=function(r,e,n){return this.canvas(r).toDataURL(e,n)},t.prototype.canvas=function(r,e){var n=this.renderer,i,o=!1,s,l=!1;r&&(r instanceof Qe?s=r:(s=this.renderer.generateTexture(r),l=!0)),s?(i=s.baseTexture.resolution,e=e!=null?e:s.frame,o=!1,n.renderTexture.bind(s)):(i=n.resolution,e||(e=tf,e.width=n.width,e.height=n.height),o=!0,n.renderTexture.bind(null));var h=Math.round(e.width*i),f=Math.round(e.height*i),d=new _c(h,f,1),v=new Uint8Array(ef*h*f),m=n.gl;m.readPixels(Math.round(e.x*i),Math.round(e.y*i),h,f,m.RGBA,m.UNSIGNED_BYTE,v);var _=d.context.getImageData(0,0,h,f);if(t.arrayPostDivide(v,_.data),d.context.putImageData(_,0,0),o){var g=new _c(d.width,d.height,1);g.context.scale(1,-1),g.context.drawImage(d.canvas,0,-f),d.destroy(),d=g}return l&&s.destroy(!0),d.canvas},t.prototype.pixels=function(r,e){var n=this.renderer,i,o,s=!1;r&&(r instanceof Qe?o=r:(o=this.renderer.generateTexture(r),s=!0)),o?(i=o.baseTexture.resolution,e=e!=null?e:o.frame,n.renderTexture.bind(o)):(i=n.resolution,e||(e=tf,e.width=n.width,e.height=n.height),n.renderTexture.bind(null));var l=Math.round(e.width*i),h=Math.round(e.height*i),f=new Uint8Array(ef*l*h),d=n.gl;return d.readPixels(Math.round(e.x*i),Math.round(e.y*i),l,h,d.RGBA,d.UNSIGNED_BYTE,f),s&&o.destroy(!0),t.arrayPostDivide(f,f),f},t.prototype.destroy=function(){this.renderer=null},t.arrayPostDivide=function(r,e){for(var n=0;n<r.length;n+=4){var i=e[n+3]=r[n+3];i!==0?(e[n]=Math.round(Math.min(r[n]*255/i,255)),e[n+1]=Math.round(Math.min(r[n+1]*255/i,255)),e[n+2]=Math.round(Math.min(r[n+2]*255/i,255))):(e[n]=r[n],e[n+1]=r[n+1],e[n+2]=r[n+2])}},t.extension={name:"extract",type:Tt.RendererPlugin},t}();/*!
 * @pixi/loaders - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/loaders is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ji=function(){function t(r,e,n){e===void 0&&(e=!1),this._fn=r,this._once=e,this._thisArg=n,this._next=this._prev=this._owner=null}return t.prototype.detach=function(){return this._owner===null?!1:(this._owner.detach(this),!0)},t}();function rf(t,r){return t._head?(t._tail._next=r,r._prev=t._tail,t._tail=r):(t._head=r,t._tail=r),r._owner=t,r}var Se=function(){function t(){this._head=this._tail=void 0}return t.prototype.handlers=function(r){r===void 0&&(r=!1);var e=this._head;if(r)return!!e;for(var n=[];e;)n.push(e),e=e._next;return n},t.prototype.has=function(r){if(!(r instanceof Ji))throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");return r._owner===this},t.prototype.dispatch=function(){for(var r=arguments,e=[],n=0;n<arguments.length;n++)e[n]=r[n];var i=this._head;if(!i)return!1;for(;i;)i._once&&this.detach(i),i._fn.apply(i._thisArg,e),i=i._next;return!0},t.prototype.add=function(r,e){if(e===void 0&&(e=null),typeof r!="function")throw new Error("MiniSignal#add(): First arg must be a Function.");return rf(this,new Ji(r,!1,e))},t.prototype.once=function(r,e){if(e===void 0&&(e=null),typeof r!="function")throw new Error("MiniSignal#once(): First arg must be a Function.");return rf(this,new Ji(r,!0,e))},t.prototype.detach=function(r){if(!(r instanceof Ji))throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");return r._owner!==this?this:(r._prev&&(r._prev._next=r._next),r._next&&(r._next._prev=r._prev),r===this._head?(this._head=r._next,r._next===null&&(this._tail=null)):r===this._tail&&(this._tail=r._prev,this._tail._next=null),r._owner=null,this)},t.prototype.detachAll=function(){var r=this._head;if(!r)return this;for(this._head=this._tail=null;r;)r._owner=null,r=r._next;return this},t}();function Vp(t,r){r=r||{};for(var e={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},n=e.parser[r.strictMode?"strict":"loose"].exec(t),i={},o=14;o--;)i[e.key[o]]=n[o]||"";return i[e.q.name]={},i[e.key[12]].replace(e.q.parser,function(s,l,h){l&&(i[e.q.name][l]=h)}),i}var qs,Qi=null,kw=0,nf=200,Bw=204,Gw=1223,Dw=2;function of(){}function sf(t,r,e){r&&r.indexOf(".")===0&&(r=r.substring(1)),r&&(t[r]=e)}function Ys(t){return t.toString().replace("object ","")}var Ot=function(){function t(r,e,n){if(this._dequeue=of,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=null,this._boundOnError=null,this._boundOnProgress=null,this._boundOnTimeout=null,this._boundXhrOnError=null,this._boundXhrOnTimeout=null,this._boundXhrOnAbort=null,this._boundXhrOnLoad=null,typeof r!="string"||typeof e!="string")throw new Error("Both name and url are required for constructing a resource.");n=n||{},this._flags=0,this._setFlag(t.STATUS_FLAGS.DATA_URL,e.indexOf("data:")===0),this.name=r,this.url=e,this.extension=this._getExtension(),this.data=null,this.crossOrigin=n.crossOrigin===!0?"anonymous":n.crossOrigin,this.timeout=n.timeout||0,this.loadType=n.loadType||this._determineLoadType(),this.xhrType=n.xhrType,this.metadata=n.metadata||{},this.error=null,this.xhr=null,this.children=[],this.type=t.TYPE.UNKNOWN,this.progressChunk=0,this._dequeue=of,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=this.complete.bind(this),this._boundOnError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),this._boundOnTimeout=this._onTimeout.bind(this),this._boundXhrOnError=this._xhrOnError.bind(this),this._boundXhrOnTimeout=this._xhrOnTimeout.bind(this),this._boundXhrOnAbort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),this.onStart=new Se,this.onProgress=new Se,this.onComplete=new Se,this.onAfterMiddleware=new Se}return t.setExtensionLoadType=function(r,e){sf(t._loadTypeMap,r,e)},t.setExtensionXhrType=function(r,e){sf(t._xhrTypeMap,r,e)},Object.defineProperty(t.prototype,"isDataUrl",{get:function(){return this._hasFlag(t.STATUS_FLAGS.DATA_URL)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isComplete",{get:function(){return this._hasFlag(t.STATUS_FLAGS.COMPLETE)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isLoading",{get:function(){return this._hasFlag(t.STATUS_FLAGS.LOADING)},enumerable:!1,configurable:!0}),t.prototype.complete=function(){this._clearEvents(),this._finish()},t.prototype.abort=function(r){if(!this.error){if(this.error=new Error(r),this._clearEvents(),this.xhr)this.xhr.abort();else if(this.xdr)this.xdr.abort();else if(this.data)if(this.data.src)this.data.src=t.EMPTY_GIF;else for(;this.data.firstChild;)this.data.removeChild(this.data.firstChild);this._finish()}},t.prototype.load=function(r){var e=this;if(!this.isLoading){if(this.isComplete){r&&setTimeout(function(){return r(e)},1);return}else r&&this.onComplete.once(r);switch(this._setFlag(t.STATUS_FLAGS.LOADING,!0),this.onStart.dispatch(this),(this.crossOrigin===!1||typeof this.crossOrigin!="string")&&(this.crossOrigin=this._determineCrossOrigin(this.url)),this.loadType){case t.LOAD_TYPE.IMAGE:this.type=t.TYPE.IMAGE,this._loadElement("image");break;case t.LOAD_TYPE.AUDIO:this.type=t.TYPE.AUDIO,this._loadSourceElement("audio");break;case t.LOAD_TYPE.VIDEO:this.type=t.TYPE.VIDEO,this._loadSourceElement("video");break;case t.LOAD_TYPE.XHR:default:typeof qs>"u"&&(qs=!!(globalThis.XDomainRequest&&!("withCredentials"in new XMLHttpRequest))),qs&&this.crossOrigin?this._loadXdr():this._loadXhr();break}}},t.prototype._hasFlag=function(r){return(this._flags&r)!==0},t.prototype._setFlag=function(r,e){this._flags=e?this._flags|r:this._flags&~r},t.prototype._clearEvents=function(){clearTimeout(this._elementTimer),this.data&&this.data.removeEventListener&&(this.data.removeEventListener("error",this._boundOnError,!1),this.data.removeEventListener("load",this._boundComplete,!1),this.data.removeEventListener("progress",this._boundOnProgress,!1),this.data.removeEventListener("canplaythrough",this._boundComplete,!1)),this.xhr&&(this.xhr.removeEventListener?(this.xhr.removeEventListener("error",this._boundXhrOnError,!1),this.xhr.removeEventListener("timeout",this._boundXhrOnTimeout,!1),this.xhr.removeEventListener("abort",this._boundXhrOnAbort,!1),this.xhr.removeEventListener("progress",this._boundOnProgress,!1),this.xhr.removeEventListener("load",this._boundXhrOnLoad,!1)):(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onload=null))},t.prototype._finish=function(){if(this.isComplete)throw new Error("Complete called again for an already completed resource.");this._setFlag(t.STATUS_FLAGS.COMPLETE,!0),this._setFlag(t.STATUS_FLAGS.LOADING,!1),this.onComplete.dispatch(this)},t.prototype._loadElement=function(r){this.metadata.loadElement?this.data=this.metadata.loadElement:r==="image"&&typeof globalThis.Image<"u"?this.data=new Image:this.data=document.createElement(r),this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),this.metadata.skipSource||(this.data.src=this.url),this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},t.prototype._loadSourceElement=function(r){if(this.metadata.loadElement?this.data=this.metadata.loadElement:r==="audio"&&typeof globalThis.Audio<"u"?this.data=new Audio:this.data=document.createElement(r),this.data===null){this.abort("Unsupported element: "+r);return}if(this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),!this.metadata.skipSource)if(navigator.isCocoonJS)this.data.src=Array.isArray(this.url)?this.url[0]:this.url;else if(Array.isArray(this.url))for(var e=this.metadata.mimeType,n=0;n<this.url.length;++n)this.data.appendChild(this._createSource(r,this.url[n],Array.isArray(e)?e[n]:e));else{var e=this.metadata.mimeType;this.data.appendChild(this._createSource(r,this.url,Array.isArray(e)?e[0]:e))}this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.data.addEventListener("canplaythrough",this._boundComplete,!1),this.data.load(),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},t.prototype._loadXhr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var r=this.xhr=new XMLHttpRequest;this.crossOrigin==="use-credentials"&&(r.withCredentials=!0),r.open("GET",this.url,!0),r.timeout=this.timeout,this.xhrType===t.XHR_RESPONSE_TYPE.JSON||this.xhrType===t.XHR_RESPONSE_TYPE.DOCUMENT?r.responseType=t.XHR_RESPONSE_TYPE.TEXT:r.responseType=this.xhrType,r.addEventListener("error",this._boundXhrOnError,!1),r.addEventListener("timeout",this._boundXhrOnTimeout,!1),r.addEventListener("abort",this._boundXhrOnAbort,!1),r.addEventListener("progress",this._boundOnProgress,!1),r.addEventListener("load",this._boundXhrOnLoad,!1),r.send()},t.prototype._loadXdr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var r=this.xhr=new globalThis.XDomainRequest;r.timeout=this.timeout||5e3,r.onerror=this._boundXhrOnError,r.ontimeout=this._boundXhrOnTimeout,r.onprogress=this._boundOnProgress,r.onload=this._boundXhrOnLoad,r.open("GET",this.url,!0),setTimeout(function(){return r.send()},1)},t.prototype._createSource=function(r,e,n){n||(n=r+"/"+this._getExtension(e));var i=document.createElement("source");return i.src=e,i.type=n,i},t.prototype._onError=function(r){this.abort("Failed to load element using: "+r.target.nodeName)},t.prototype._onProgress=function(r){r&&r.lengthComputable&&this.onProgress.dispatch(this,r.loaded/r.total)},t.prototype._onTimeout=function(){this.abort("Load timed out.")},t.prototype._xhrOnError=function(){var r=this.xhr;this.abort(Ys(r)+" Request failed. Status: "+r.status+', text: "'+r.statusText+'"')},t.prototype._xhrOnTimeout=function(){var r=this.xhr;this.abort(Ys(r)+" Request timed out.")},t.prototype._xhrOnAbort=function(){var r=this.xhr;this.abort(Ys(r)+" Request was aborted by the user.")},t.prototype._xhrOnLoad=function(){var r=this.xhr,e="",n=typeof r.status>"u"?nf:r.status;(r.responseType===""||r.responseType==="text"||typeof r.responseType>"u")&&(e=r.responseText),n===kw&&(e.length>0||r.responseType===t.XHR_RESPONSE_TYPE.BUFFER)?n=nf:n===Gw&&(n=Bw);var i=n/100|0;if(i===Dw)if(this.xhrType===t.XHR_RESPONSE_TYPE.TEXT)this.data=e,this.type=t.TYPE.TEXT;else if(this.xhrType===t.XHR_RESPONSE_TYPE.JSON)try{this.data=JSON.parse(e),this.type=t.TYPE.JSON}catch(l){this.abort("Error trying to parse loaded json: "+l);return}else if(this.xhrType===t.XHR_RESPONSE_TYPE.DOCUMENT)try{if(globalThis.DOMParser){var o=new DOMParser;this.data=o.parseFromString(e,"text/xml")}else{var s=document.createElement("div");s.innerHTML=e,this.data=s}this.type=t.TYPE.XML}catch(l){this.abort("Error trying to parse loaded xml: "+l);return}else this.data=r.response||e;else{this.abort("["+r.status+"] "+r.statusText+": "+r.responseURL);return}this.complete()},t.prototype._determineCrossOrigin=function(r,e){if(r.indexOf("data:")===0)return"";if(globalThis.origin!==globalThis.location.origin)return"anonymous";e=e||globalThis.location,Qi||(Qi=document.createElement("a")),Qi.href=r;var n=Vp(Qi.href,{strictMode:!0}),i=!n.port&&e.port===""||n.port===e.port,o=n.protocol?n.protocol+":":"";return n.host!==e.hostname||!i||o!==e.protocol?"anonymous":""},t.prototype._determineXhrType=function(){return t._xhrTypeMap[this.extension]||t.XHR_RESPONSE_TYPE.TEXT},t.prototype._determineLoadType=function(){return t._loadTypeMap[this.extension]||t.LOAD_TYPE.XHR},t.prototype._getExtension=function(r){r===void 0&&(r=this.url);var e="";if(this.isDataUrl){var n=r.indexOf("/");e=r.substring(n+1,r.indexOf(";",n))}else{var i=r.indexOf("?"),o=r.indexOf("#"),s=Math.min(i>-1?i:r.length,o>-1?o:r.length);r=r.substring(0,s),e=r.substring(r.lastIndexOf(".")+1)}return e.toLowerCase()},t.prototype._getMimeFromXhrType=function(r){switch(r){case t.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case t.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case t.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case t.XHR_RESPONSE_TYPE.JSON:return"application/json";case t.XHR_RESPONSE_TYPE.DEFAULT:case t.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"}},t}();(function(t){(function(r){r[r.NONE=0]="NONE",r[r.DATA_URL=1]="DATA_URL",r[r.COMPLETE=2]="COMPLETE",r[r.LOADING=4]="LOADING"})(t.STATUS_FLAGS||(t.STATUS_FLAGS={})),function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.JSON=1]="JSON",r[r.XML=2]="XML",r[r.IMAGE=3]="IMAGE",r[r.AUDIO=4]="AUDIO",r[r.VIDEO=5]="VIDEO",r[r.TEXT=6]="TEXT"}(t.TYPE||(t.TYPE={})),function(r){r[r.XHR=1]="XHR",r[r.IMAGE=2]="IMAGE",r[r.AUDIO=3]="AUDIO",r[r.VIDEO=4]="VIDEO"}(t.LOAD_TYPE||(t.LOAD_TYPE={})),function(r){r.DEFAULT="text",r.BUFFER="arraybuffer",r.BLOB="blob",r.DOCUMENT="document",r.JSON="json",r.TEXT="text"}(t.XHR_RESPONSE_TYPE||(t.XHR_RESPONSE_TYPE={})),t._loadTypeMap={gif:t.LOAD_TYPE.IMAGE,png:t.LOAD_TYPE.IMAGE,bmp:t.LOAD_TYPE.IMAGE,jpg:t.LOAD_TYPE.IMAGE,jpeg:t.LOAD_TYPE.IMAGE,tif:t.LOAD_TYPE.IMAGE,tiff:t.LOAD_TYPE.IMAGE,webp:t.LOAD_TYPE.IMAGE,tga:t.LOAD_TYPE.IMAGE,svg:t.LOAD_TYPE.IMAGE,"svg+xml":t.LOAD_TYPE.IMAGE,mp3:t.LOAD_TYPE.AUDIO,ogg:t.LOAD_TYPE.AUDIO,wav:t.LOAD_TYPE.AUDIO,mp4:t.LOAD_TYPE.VIDEO,webm:t.LOAD_TYPE.VIDEO},t._xhrTypeMap={xhtml:t.XHR_RESPONSE_TYPE.DOCUMENT,html:t.XHR_RESPONSE_TYPE.DOCUMENT,htm:t.XHR_RESPONSE_TYPE.DOCUMENT,xml:t.XHR_RESPONSE_TYPE.DOCUMENT,tmx:t.XHR_RESPONSE_TYPE.DOCUMENT,svg:t.XHR_RESPONSE_TYPE.DOCUMENT,tsx:t.XHR_RESPONSE_TYPE.DOCUMENT,gif:t.XHR_RESPONSE_TYPE.BLOB,png:t.XHR_RESPONSE_TYPE.BLOB,bmp:t.XHR_RESPONSE_TYPE.BLOB,jpg:t.XHR_RESPONSE_TYPE.BLOB,jpeg:t.XHR_RESPONSE_TYPE.BLOB,tif:t.XHR_RESPONSE_TYPE.BLOB,tiff:t.XHR_RESPONSE_TYPE.BLOB,webp:t.XHR_RESPONSE_TYPE.BLOB,tga:t.XHR_RESPONSE_TYPE.BLOB,json:t.XHR_RESPONSE_TYPE.JSON,text:t.XHR_RESPONSE_TYPE.TEXT,txt:t.XHR_RESPONSE_TYPE.TEXT,ttf:t.XHR_RESPONSE_TYPE.BUFFER,otf:t.XHR_RESPONSE_TYPE.BUFFER},t.EMPTY_GIF="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="})(Ot||(Ot={}));function hr(){}function Vw(t){return function(){for(var e=arguments,n=[],i=0;i<arguments.length;i++)n[i]=e[i];if(t===null)throw new Error("Callback was already called.");var o=t;t=null,o.apply(this,n)}}var jw=function(){function t(r,e){this.data=r,this.callback=e}return t}(),Ks=function(){function t(r,e){var n=this;if(e===void 0&&(e=1),this.workers=0,this.saturated=hr,this.unsaturated=hr,this.empty=hr,this.drain=hr,this.error=hr,this.started=!1,this.paused=!1,this._tasks=[],this._insert=function(i,o,s){if(s&&typeof s!="function")throw new Error("task callback must be a function");if(n.started=!0,i==null&&n.idle()){setTimeout(function(){return n.drain()},1);return}var l=new jw(i,typeof s=="function"?s:hr);o?n._tasks.unshift(l):n._tasks.push(l),setTimeout(n.process,1)},this.process=function(){for(;!n.paused&&n.workers<n.concurrency&&n._tasks.length;){var i=n._tasks.shift();n._tasks.length===0&&n.empty(),n.workers+=1,n.workers===n.concurrency&&n.saturated(),n._worker(i.data,Vw(n._next(i)))}},this._worker=r,e===0)throw new Error("Concurrency must not be zero");this.concurrency=e,this.buffer=e/4}return t.prototype._next=function(r){var e=this;return function(){for(var n=arguments,i=[],o=0;o<arguments.length;o++)i[o]=n[o];e.workers-=1,r.callback.apply(r,i),i[0]!=null&&e.error(i[0],r.data),e.workers<=e.concurrency-e.buffer&&e.unsaturated(),e.idle()&&e.drain(),e.process()}},t.prototype.push=function(r,e){this._insert(r,!1,e)},t.prototype.kill=function(){this.workers=0,this.drain=hr,this.started=!1,this._tasks=[]},t.prototype.unshift=function(r,e){this._insert(r,!0,e)},t.prototype.length=function(){return this._tasks.length},t.prototype.running=function(){return this.workers},t.prototype.idle=function(){return this._tasks.length+this.workers===0},t.prototype.pause=function(){this.paused!==!0&&(this.paused=!0)},t.prototype.resume=function(){if(this.paused!==!1){this.paused=!1;for(var r=1;r<=this.concurrency;r++)this.process()}},t.eachSeries=function(r,e,n,i){var o=0,s=r.length;function l(h){if(h||o===s){n&&n(h);return}i?setTimeout(function(){e(r[o++],l)},1):e(r[o++],l)}l()},t.queue=function(r,e){return new t(r,e)},t}(),Zs=100,Hw=/(#[\w-]+)?$/,yo=function(){function t(r,e){var n=this;r===void 0&&(r=""),e===void 0&&(e=10),this.progress=0,this.loading=!1,this.defaultQueryString="",this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(h,f){return n._loadResource(h,f)},this.resources={},this.baseUrl=r,this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(h,f){return n._loadResource(h,f)},this._queue=Ks.queue(this._boundLoadResource,e),this._queue.pause(),this.resources={},this.onProgress=new Se,this.onError=new Se,this.onLoad=new Se,this.onStart=new Se,this.onComplete=new Se;for(var i=0;i<t._plugins.length;++i){var o=t._plugins[i],s=o.pre,l=o.use;s&&this.pre(s),l&&this.use(l)}this._protected=!1}return t.prototype._add=function(r,e,n,i){if(this.loading&&(!n||!n.parentResource))throw new Error("Cannot add resources while the loader is running.");if(this.resources[r])throw new Error('Resource named "'+r+'" already exists.');if(e=this._prepareUrl(e),this.resources[r]=new Ot(r,e,n),typeof i=="function"&&this.resources[r].onAfterMiddleware.once(i),this.loading){for(var o=n.parentResource,s=[],l=0;l<o.children.length;++l)o.children[l].isComplete||s.push(o.children[l]);var h=o.progressChunk*(s.length+1),f=h/(s.length+2);o.children.push(this.resources[r]),o.progressChunk=f;for(var l=0;l<s.length;++l)s[l].progressChunk=f;this.resources[r].progressChunk=f}return this._queue.push(this.resources[r]),this},t.prototype.pre=function(r){return this._beforeMiddleware.push(r),this},t.prototype.use=function(r){return this._afterMiddleware.push(r),this},t.prototype.reset=function(){this.progress=0,this.loading=!1,this._queue.kill(),this._queue.pause();for(var r in this.resources){var e=this.resources[r];e._onLoadBinding&&e._onLoadBinding.detach(),e.isLoading&&e.abort("loader reset")}return this.resources={},this},t.prototype.load=function(r){if(xe("6.5.0","@pixi/loaders is being replaced with @pixi/assets in the next major release."),typeof r=="function"&&this.onComplete.once(r),this.loading)return this;if(this._queue.idle())this._onStart(),this._onComplete();else{for(var e=this._queue._tasks.length,n=Zs/e,i=0;i<this._queue._tasks.length;++i)this._queue._tasks[i].data.progressChunk=n;this._onStart(),this._queue.resume()}return this},Object.defineProperty(t.prototype,"concurrency",{get:function(){return this._queue.concurrency},set:function(r){this._queue.concurrency=r},enumerable:!1,configurable:!0}),t.prototype._prepareUrl=function(r){var e=Vp(r,{strictMode:!0}),n;if(e.protocol||!e.path||r.indexOf("//")===0?n=r:this.baseUrl.length&&this.baseUrl.lastIndexOf("/")!==this.baseUrl.length-1&&r.charAt(0)!=="/"?n=this.baseUrl+"/"+r:n=this.baseUrl+r,this.defaultQueryString){var i=Hw.exec(n)[0];n=n.slice(0,n.length-i.length),n.indexOf("?")!==-1?n+="&"+this.defaultQueryString:n+="?"+this.defaultQueryString,n+=i}return n},t.prototype._loadResource=function(r,e){var n=this;r._dequeue=e,Ks.eachSeries(this._beforeMiddleware,function(i,o){i.call(n,r,function(){o(r.isComplete?{}:null)})},function(){r.isComplete?n._onLoad(r):(r._onLoadBinding=r.onComplete.once(n._onLoad,n),r.load())},!0)},t.prototype._onStart=function(){this.progress=0,this.loading=!0,this.onStart.dispatch(this)},t.prototype._onComplete=function(){this.progress=Zs,this.loading=!1,this.onComplete.dispatch(this,this.resources)},t.prototype._onLoad=function(r){var e=this;r._onLoadBinding=null,this._resourcesParsing.push(r),r._dequeue(),Ks.eachSeries(this._afterMiddleware,function(n,i){n.call(e,r,i)},function(){r.onAfterMiddleware.dispatch(r),e.progress=Math.min(Zs,e.progress+r.progressChunk),e.onProgress.dispatch(e,r),r.error?e.onError.dispatch(r.error,e,r):e.onLoad.dispatch(e,r),e._resourcesParsing.splice(e._resourcesParsing.indexOf(r),1),e._queue.idle()&&e._resourcesParsing.length===0&&e._onComplete()},!0)},t.prototype.destroy=function(){this._protected||this.reset()},Object.defineProperty(t,"shared",{get:function(){var r=t._shared;return r||(r=new t,r._protected=!0,t._shared=r),r},enumerable:!1,configurable:!0}),t.registerPlugin=function(r){return xe("6.5.0","Loader.registerPlugin() is deprecated, use extensions.add() instead."),Be.add({type:Tt.Loader,ref:r}),t},t._plugins=[],t}();Be.handleByList(Tt.Loader,yo._plugins);yo.prototype.add=function(r,e,n,i){if(Array.isArray(r)){for(var o=0;o<r.length;++o)this.add(r[o]);return this}if(typeof r=="object"&&(n=r,i=e||n.callback||n.onComplete,e=n.url,r=n.name||n.key||n.url),typeof e!="string"&&(i=n,n=e,e=r),typeof e!="string")throw new Error("No url passed to add resource to loader.");return typeof n=="function"&&(i=n,n=null),this._add(r,e,n,i)};var Xw=function(){function t(){}return t.init=function(r){r=Object.assign({sharedLoader:!1},r),this.loader=r.sharedLoader?yo.shared:new yo},t.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},t.extension=Tt.Application,t}(),zw=function(){function t(){}return t.add=function(){Ot.setExtensionLoadType("svg",Ot.LOAD_TYPE.XHR),Ot.setExtensionXhrType("svg",Ot.XHR_RESPONSE_TYPE.TEXT)},t.use=function(r,e){if(r.data&&(r.type===Ot.TYPE.IMAGE||r.extension==="svg")){var n=r.data,i=r.url,o=r.name,s=r.metadata;tt.fromLoader(n,i,o,s).then(function(l){r.texture=l,e()}).catch(e)}else e()},t.extension=Tt.Loader,t}(),$w="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function Ww(t){for(var r="",e=0;e<t.length;){for(var n=[0,0,0],i=[0,0,0,0],o=0;o<n.length;++o)e<t.length?n[o]=t.charCodeAt(e++)&255:n[o]=0;i[0]=n[0]>>2,i[1]=(n[0]&3)<<4|n[1]>>4,i[2]=(n[1]&15)<<2|n[2]>>6,i[3]=n[2]&63;var s=e-(t.length-1);switch(s){case 2:i[3]=64,i[2]=64;break;case 1:i[3]=64;break}for(var o=0;o<i.length;++o)r+=$w.charAt(i[o])}return r}function qw(t,r){if(!t.data){r();return}if(t.xhr&&t.xhrType===Ot.XHR_RESPONSE_TYPE.BLOB){if(!self.Blob||typeof t.data=="string"){var e=t.xhr.getResponseHeader("content-type");if(e&&e.indexOf("image")===0){t.data=new Image,t.data.src="data:"+e+";base64,"+Ww(t.xhr.responseText),t.type=Ot.TYPE.IMAGE,t.data.onload=function(){t.data.onload=null,r()};return}}else if(t.data.type.indexOf("image")===0){var n=globalThis.URL||globalThis.webkitURL,i=n.createObjectURL(t.data);t.blob=t.data,t.data=new Image,t.data.src=i,t.type=Ot.TYPE.IMAGE,t.data.onload=function(){n.revokeObjectURL(i),t.data.onload=null,r()};return}}r()}var Yw=function(){function t(){}return t.extension=Tt.Loader,t.use=qw,t}();Be.add(zw,Yw);/*!
 * @pixi/compressed-textures - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/compressed-textures is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var wt,ut;(function(t){t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",t[t.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",t[t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",t[t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",t[t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",t[t.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",t[t.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",t[t.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",t[t.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"})(ut||(ut={}));var bo=(wt={},wt[ut.COMPRESSED_RGB_S3TC_DXT1_EXT]=.5,wt[ut.COMPRESSED_RGBA_S3TC_DXT1_EXT]=.5,wt[ut.COMPRESSED_RGBA_S3TC_DXT3_EXT]=1,wt[ut.COMPRESSED_RGBA_S3TC_DXT5_EXT]=1,wt[ut.COMPRESSED_SRGB_S3TC_DXT1_EXT]=.5,wt[ut.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT]=.5,wt[ut.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT]=1,wt[ut.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT]=1,wt[ut.COMPRESSED_R11_EAC]=.5,wt[ut.COMPRESSED_SIGNED_R11_EAC]=.5,wt[ut.COMPRESSED_RG11_EAC]=1,wt[ut.COMPRESSED_SIGNED_RG11_EAC]=1,wt[ut.COMPRESSED_RGB8_ETC2]=.5,wt[ut.COMPRESSED_RGBA8_ETC2_EAC]=1,wt[ut.COMPRESSED_SRGB8_ETC2]=.5,wt[ut.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC]=1,wt[ut.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,wt[ut.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,wt[ut.COMPRESSED_RGB_PVRTC_4BPPV1_IMG]=.5,wt[ut.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG]=.5,wt[ut.COMPRESSED_RGB_PVRTC_2BPPV1_IMG]=.25,wt[ut.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG]=.25,wt[ut.COMPRESSED_RGB_ETC1_WEBGL]=.5,wt[ut.COMPRESSED_RGB_ATC_WEBGL]=.5,wt[ut.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL]=1,wt[ut.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL]=1,wt);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ka=function(t,r){return ka=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},ka(t,r)};function jp(t,r){ka(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}function Kw(t,r,e,n){function i(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function l(d){try{f(n.next(d))}catch(v){s(v)}}function h(d){try{f(n.throw(d))}catch(v){s(v)}}function f(d){d.done?o(d.value):i(d.value).then(l,h)}f((n=n.apply(t,r||[])).next())})}function Zw(t,r){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(f){return function(d){return h([f,d])}}function h(f){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,i&&(o=f[0]&2?i.return:f[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,f[1])).done)return o;switch(i=0,o&&(f=[f[0]&2,o.value]),f[0]){case 0:case 1:o=f;break;case 4:return e.label++,{value:f[1],done:!1};case 5:e.label++,i=f[1],f=[0];continue;case 7:f=e.ops.pop(),e.trys.pop();continue;default:if(o=e.trys,!(o=o.length>0&&o[o.length-1])&&(f[0]===6||f[0]===2)){e=0;continue}if(f[0]===3&&(!o||f[1]>o[0]&&f[1]<o[3])){e.label=f[1];break}if(f[0]===6&&e.label<o[1]){e.label=o[1],o=f;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(f);break}o[2]&&e.ops.pop(),e.trys.pop();continue}f=r.call(t,e)}catch(d){f=[6,d],i=0}finally{n=o=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}}var Jw=function(t){jp(r,t);function r(e,n){n===void 0&&(n={width:1,height:1,autoLoad:!0});var i=this,o,s;return typeof e=="string"?(o=e,s=new Uint8Array):(o=null,s=e),i=t.call(this,s,n)||this,i.origin=o,i.buffer=s?new Fa(s):null,i.origin&&n.autoLoad!==!1&&i.load(),s&&s.length&&(i.loaded=!0,i.onBlobLoaded(i.buffer.rawBinaryData)),i}return r.prototype.onBlobLoaded=function(e){},r.prototype.load=function(){return Kw(this,void 0,Promise,function(){var e,n,i;return Zw(this,function(o){switch(o.label){case 0:return[4,fetch(this.origin)];case 1:return e=o.sent(),[4,e.blob()];case 2:return n=o.sent(),[4,n.arrayBuffer()];case 3:return i=o.sent(),this.data=new Uint32Array(i),this.buffer=new Fa(i),this.loaded=!0,this.onBlobLoaded(i),this.update(),[2,this]}})})},r}(xi),Ba=function(t){jp(r,t);function r(e,n){var i=t.call(this,e,n)||this;return i.format=n.format,i.levels=n.levels||1,i._width=n.width,i._height=n.height,i._extension=r._formatToExtension(i.format),(n.levelBuffers||i.buffer)&&(i._levelBuffers=n.levelBuffers||r._createLevelBuffers(e instanceof Uint8Array?e:i.buffer.uint8View,i.format,i.levels,4,4,i.width,i.height)),i}return r.prototype.upload=function(e,n,i){var o=e.gl,s=e.context.extensions[this._extension];if(!s)throw new Error(this._extension+" textures are not supported on the current machine");if(!this._levelBuffers)return!1;for(var l=0,h=this.levels;l<h;l++){var f=this._levelBuffers[l],d=f.levelID,v=f.levelWidth,m=f.levelHeight,_=f.levelBuffer;o.compressedTexImage2D(o.TEXTURE_2D,d,this.format,v,m,0,_)}return!0},r.prototype.onBlobLoaded=function(){this._levelBuffers=r._createLevelBuffers(this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height)},r._formatToExtension=function(e){if(e>=33776&&e<=33779)return"s3tc";if(e>=37488&&e<=37497)return"etc";if(e>=35840&&e<=35843)return"pvrtc";if(e>=36196)return"etc1";if(e>=35986&&e<=34798)return"atc";throw new Error("Invalid (compressed) texture format given!")},r._createLevelBuffers=function(e,n,i,o,s,l,h){for(var f=new Array(i),d=e.byteOffset,v=l,m=h,_=v+o-1&~(o-1),g=m+s-1&~(s-1),b=_*g*bo[n],y=0;y<i;y++)f[y]={levelID:y,levelWidth:i>1?v:_,levelHeight:i>1?m:g,levelBuffer:new Uint8Array(e.buffer,d,b)},d+=b,v=v>>1||1,m=m>>1||1,_=v+o-1&~(o-1),g=m+s-1&~(s-1),b=_*g*bo[n];return f},r}(Jw),Qw=function(){function t(){}return t.use=function(r,e){var n=r.data,i=this;if(r.type===Ot.TYPE.JSON&&n&&n.cacheID&&n.textures){for(var o=n.textures,s=void 0,l=void 0,h=0,f=o.length;h<f;h++){var d=o[h],v=d.src,m=d.format;if(m||(l=v),t.textureFormats[m]){s=v;break}}if(s=s||l,!s){e(new Error("Cannot load compressed-textures in "+r.url+", make sure you provide a fallback"));return}if(s===r.url){e(new Error("URL of compressed texture cannot be the same as the manifest's URL"));return}var _={crossOrigin:r.crossOrigin,metadata:r.metadata.imageMetadata,parentResource:r},g=Wr.resolve(r.url.replace(i.baseUrl,""),s),b=n.cacheID;i.add(b,g,_,function(y){if(y.error){e(y.error);return}var w=y.texture,C=w===void 0?null:w,T=y.textures,I=T===void 0?{}:T;Object.assign(r,{texture:C,textures:I}),e()})}else e()},Object.defineProperty(t,"textureExtensions",{get:function(){if(!t._textureExtensions){var r=X.ADAPTER.createCanvas(),e=r.getContext("webgl");if(!e)return console.warn("WebGL not available for compressed textures. Silently failing."),{};var n={s3tc:e.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:e.getExtension("WEBGL_compressed_texture_etc"),etc1:e.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:e.getExtension("WEBGL_compressed_texture_atc"),astc:e.getExtension("WEBGL_compressed_texture_astc")};t._textureExtensions=n}return t._textureExtensions},enumerable:!1,configurable:!0}),Object.defineProperty(t,"textureFormats",{get:function(){if(!t._textureFormats){var r=t.textureExtensions;t._textureFormats={};for(var e in r){var n=r[e];!n||Object.assign(t._textureFormats,Object.getPrototypeOf(n))}}return t._textureFormats},enumerable:!1,configurable:!0}),t.extension=Tt.Loader,t}();function Hp(t,r,e){var n={textures:{},texture:null};if(!r)return n;var i=r.map(function(o){return new tt(new vt(o,Object.assign({mipmap:he.OFF,alphaMode:ce.NO_PREMULTIPLIED_ALPHA},e)))});return i.forEach(function(o,s){var l=o.baseTexture,h=t+"-"+(s+1);vt.addToCache(l,h),tt.addToCache(o,h),s===0&&(vt.addToCache(l,t),tt.addToCache(o,t),n.texture=o),n.textures[h]=o}),n}var Fn,ie,Js=4,to=124,tT=32,af=20,eT=542327876,eo={SIZE:1,FLAGS:2,HEIGHT:3,WIDTH:4,MIPMAP_COUNT:7,PIXEL_FORMAT:19},rT={SIZE:0,FLAGS:1,FOURCC:2,RGB_BITCOUNT:3,R_BIT_MASK:4,G_BIT_MASK:5,B_BIT_MASK:6,A_BIT_MASK:7},ro={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3,MISC_FLAGS2:4},se;(function(t){t[t.DXGI_FORMAT_UNKNOWN=0]="DXGI_FORMAT_UNKNOWN",t[t.DXGI_FORMAT_R32G32B32A32_TYPELESS=1]="DXGI_FORMAT_R32G32B32A32_TYPELESS",t[t.DXGI_FORMAT_R32G32B32A32_FLOAT=2]="DXGI_FORMAT_R32G32B32A32_FLOAT",t[t.DXGI_FORMAT_R32G32B32A32_UINT=3]="DXGI_FORMAT_R32G32B32A32_UINT",t[t.DXGI_FORMAT_R32G32B32A32_SINT=4]="DXGI_FORMAT_R32G32B32A32_SINT",t[t.DXGI_FORMAT_R32G32B32_TYPELESS=5]="DXGI_FORMAT_R32G32B32_TYPELESS",t[t.DXGI_FORMAT_R32G32B32_FLOAT=6]="DXGI_FORMAT_R32G32B32_FLOAT",t[t.DXGI_FORMAT_R32G32B32_UINT=7]="DXGI_FORMAT_R32G32B32_UINT",t[t.DXGI_FORMAT_R32G32B32_SINT=8]="DXGI_FORMAT_R32G32B32_SINT",t[t.DXGI_FORMAT_R16G16B16A16_TYPELESS=9]="DXGI_FORMAT_R16G16B16A16_TYPELESS",t[t.DXGI_FORMAT_R16G16B16A16_FLOAT=10]="DXGI_FORMAT_R16G16B16A16_FLOAT",t[t.DXGI_FORMAT_R16G16B16A16_UNORM=11]="DXGI_FORMAT_R16G16B16A16_UNORM",t[t.DXGI_FORMAT_R16G16B16A16_UINT=12]="DXGI_FORMAT_R16G16B16A16_UINT",t[t.DXGI_FORMAT_R16G16B16A16_SNORM=13]="DXGI_FORMAT_R16G16B16A16_SNORM",t[t.DXGI_FORMAT_R16G16B16A16_SINT=14]="DXGI_FORMAT_R16G16B16A16_SINT",t[t.DXGI_FORMAT_R32G32_TYPELESS=15]="DXGI_FORMAT_R32G32_TYPELESS",t[t.DXGI_FORMAT_R32G32_FLOAT=16]="DXGI_FORMAT_R32G32_FLOAT",t[t.DXGI_FORMAT_R32G32_UINT=17]="DXGI_FORMAT_R32G32_UINT",t[t.DXGI_FORMAT_R32G32_SINT=18]="DXGI_FORMAT_R32G32_SINT",t[t.DXGI_FORMAT_R32G8X24_TYPELESS=19]="DXGI_FORMAT_R32G8X24_TYPELESS",t[t.DXGI_FORMAT_D32_FLOAT_S8X24_UINT=20]="DXGI_FORMAT_D32_FLOAT_S8X24_UINT",t[t.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS=21]="DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",t[t.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT=22]="DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",t[t.DXGI_FORMAT_R10G10B10A2_TYPELESS=23]="DXGI_FORMAT_R10G10B10A2_TYPELESS",t[t.DXGI_FORMAT_R10G10B10A2_UNORM=24]="DXGI_FORMAT_R10G10B10A2_UNORM",t[t.DXGI_FORMAT_R10G10B10A2_UINT=25]="DXGI_FORMAT_R10G10B10A2_UINT",t[t.DXGI_FORMAT_R11G11B10_FLOAT=26]="DXGI_FORMAT_R11G11B10_FLOAT",t[t.DXGI_FORMAT_R8G8B8A8_TYPELESS=27]="DXGI_FORMAT_R8G8B8A8_TYPELESS",t[t.DXGI_FORMAT_R8G8B8A8_UNORM=28]="DXGI_FORMAT_R8G8B8A8_UNORM",t[t.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB=29]="DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",t[t.DXGI_FORMAT_R8G8B8A8_UINT=30]="DXGI_FORMAT_R8G8B8A8_UINT",t[t.DXGI_FORMAT_R8G8B8A8_SNORM=31]="DXGI_FORMAT_R8G8B8A8_SNORM",t[t.DXGI_FORMAT_R8G8B8A8_SINT=32]="DXGI_FORMAT_R8G8B8A8_SINT",t[t.DXGI_FORMAT_R16G16_TYPELESS=33]="DXGI_FORMAT_R16G16_TYPELESS",t[t.DXGI_FORMAT_R16G16_FLOAT=34]="DXGI_FORMAT_R16G16_FLOAT",t[t.DXGI_FORMAT_R16G16_UNORM=35]="DXGI_FORMAT_R16G16_UNORM",t[t.DXGI_FORMAT_R16G16_UINT=36]="DXGI_FORMAT_R16G16_UINT",t[t.DXGI_FORMAT_R16G16_SNORM=37]="DXGI_FORMAT_R16G16_SNORM",t[t.DXGI_FORMAT_R16G16_SINT=38]="DXGI_FORMAT_R16G16_SINT",t[t.DXGI_FORMAT_R32_TYPELESS=39]="DXGI_FORMAT_R32_TYPELESS",t[t.DXGI_FORMAT_D32_FLOAT=40]="DXGI_FORMAT_D32_FLOAT",t[t.DXGI_FORMAT_R32_FLOAT=41]="DXGI_FORMAT_R32_FLOAT",t[t.DXGI_FORMAT_R32_UINT=42]="DXGI_FORMAT_R32_UINT",t[t.DXGI_FORMAT_R32_SINT=43]="DXGI_FORMAT_R32_SINT",t[t.DXGI_FORMAT_R24G8_TYPELESS=44]="DXGI_FORMAT_R24G8_TYPELESS",t[t.DXGI_FORMAT_D24_UNORM_S8_UINT=45]="DXGI_FORMAT_D24_UNORM_S8_UINT",t[t.DXGI_FORMAT_R24_UNORM_X8_TYPELESS=46]="DXGI_FORMAT_R24_UNORM_X8_TYPELESS",t[t.DXGI_FORMAT_X24_TYPELESS_G8_UINT=47]="DXGI_FORMAT_X24_TYPELESS_G8_UINT",t[t.DXGI_FORMAT_R8G8_TYPELESS=48]="DXGI_FORMAT_R8G8_TYPELESS",t[t.DXGI_FORMAT_R8G8_UNORM=49]="DXGI_FORMAT_R8G8_UNORM",t[t.DXGI_FORMAT_R8G8_UINT=50]="DXGI_FORMAT_R8G8_UINT",t[t.DXGI_FORMAT_R8G8_SNORM=51]="DXGI_FORMAT_R8G8_SNORM",t[t.DXGI_FORMAT_R8G8_SINT=52]="DXGI_FORMAT_R8G8_SINT",t[t.DXGI_FORMAT_R16_TYPELESS=53]="DXGI_FORMAT_R16_TYPELESS",t[t.DXGI_FORMAT_R16_FLOAT=54]="DXGI_FORMAT_R16_FLOAT",t[t.DXGI_FORMAT_D16_UNORM=55]="DXGI_FORMAT_D16_UNORM",t[t.DXGI_FORMAT_R16_UNORM=56]="DXGI_FORMAT_R16_UNORM",t[t.DXGI_FORMAT_R16_UINT=57]="DXGI_FORMAT_R16_UINT",t[t.DXGI_FORMAT_R16_SNORM=58]="DXGI_FORMAT_R16_SNORM",t[t.DXGI_FORMAT_R16_SINT=59]="DXGI_FORMAT_R16_SINT",t[t.DXGI_FORMAT_R8_TYPELESS=60]="DXGI_FORMAT_R8_TYPELESS",t[t.DXGI_FORMAT_R8_UNORM=61]="DXGI_FORMAT_R8_UNORM",t[t.DXGI_FORMAT_R8_UINT=62]="DXGI_FORMAT_R8_UINT",t[t.DXGI_FORMAT_R8_SNORM=63]="DXGI_FORMAT_R8_SNORM",t[t.DXGI_FORMAT_R8_SINT=64]="DXGI_FORMAT_R8_SINT",t[t.DXGI_FORMAT_A8_UNORM=65]="DXGI_FORMAT_A8_UNORM",t[t.DXGI_FORMAT_R1_UNORM=66]="DXGI_FORMAT_R1_UNORM",t[t.DXGI_FORMAT_R9G9B9E5_SHAREDEXP=67]="DXGI_FORMAT_R9G9B9E5_SHAREDEXP",t[t.DXGI_FORMAT_R8G8_B8G8_UNORM=68]="DXGI_FORMAT_R8G8_B8G8_UNORM",t[t.DXGI_FORMAT_G8R8_G8B8_UNORM=69]="DXGI_FORMAT_G8R8_G8B8_UNORM",t[t.DXGI_FORMAT_BC1_TYPELESS=70]="DXGI_FORMAT_BC1_TYPELESS",t[t.DXGI_FORMAT_BC1_UNORM=71]="DXGI_FORMAT_BC1_UNORM",t[t.DXGI_FORMAT_BC1_UNORM_SRGB=72]="DXGI_FORMAT_BC1_UNORM_SRGB",t[t.DXGI_FORMAT_BC2_TYPELESS=73]="DXGI_FORMAT_BC2_TYPELESS",t[t.DXGI_FORMAT_BC2_UNORM=74]="DXGI_FORMAT_BC2_UNORM",t[t.DXGI_FORMAT_BC2_UNORM_SRGB=75]="DXGI_FORMAT_BC2_UNORM_SRGB",t[t.DXGI_FORMAT_BC3_TYPELESS=76]="DXGI_FORMAT_BC3_TYPELESS",t[t.DXGI_FORMAT_BC3_UNORM=77]="DXGI_FORMAT_BC3_UNORM",t[t.DXGI_FORMAT_BC3_UNORM_SRGB=78]="DXGI_FORMAT_BC3_UNORM_SRGB",t[t.DXGI_FORMAT_BC4_TYPELESS=79]="DXGI_FORMAT_BC4_TYPELESS",t[t.DXGI_FORMAT_BC4_UNORM=80]="DXGI_FORMAT_BC4_UNORM",t[t.DXGI_FORMAT_BC4_SNORM=81]="DXGI_FORMAT_BC4_SNORM",t[t.DXGI_FORMAT_BC5_TYPELESS=82]="DXGI_FORMAT_BC5_TYPELESS",t[t.DXGI_FORMAT_BC5_UNORM=83]="DXGI_FORMAT_BC5_UNORM",t[t.DXGI_FORMAT_BC5_SNORM=84]="DXGI_FORMAT_BC5_SNORM",t[t.DXGI_FORMAT_B5G6R5_UNORM=85]="DXGI_FORMAT_B5G6R5_UNORM",t[t.DXGI_FORMAT_B5G5R5A1_UNORM=86]="DXGI_FORMAT_B5G5R5A1_UNORM",t[t.DXGI_FORMAT_B8G8R8A8_UNORM=87]="DXGI_FORMAT_B8G8R8A8_UNORM",t[t.DXGI_FORMAT_B8G8R8X8_UNORM=88]="DXGI_FORMAT_B8G8R8X8_UNORM",t[t.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM=89]="DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",t[t.DXGI_FORMAT_B8G8R8A8_TYPELESS=90]="DXGI_FORMAT_B8G8R8A8_TYPELESS",t[t.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB=91]="DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",t[t.DXGI_FORMAT_B8G8R8X8_TYPELESS=92]="DXGI_FORMAT_B8G8R8X8_TYPELESS",t[t.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB=93]="DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",t[t.DXGI_FORMAT_BC6H_TYPELESS=94]="DXGI_FORMAT_BC6H_TYPELESS",t[t.DXGI_FORMAT_BC6H_UF16=95]="DXGI_FORMAT_BC6H_UF16",t[t.DXGI_FORMAT_BC6H_SF16=96]="DXGI_FORMAT_BC6H_SF16",t[t.DXGI_FORMAT_BC7_TYPELESS=97]="DXGI_FORMAT_BC7_TYPELESS",t[t.DXGI_FORMAT_BC7_UNORM=98]="DXGI_FORMAT_BC7_UNORM",t[t.DXGI_FORMAT_BC7_UNORM_SRGB=99]="DXGI_FORMAT_BC7_UNORM_SRGB",t[t.DXGI_FORMAT_AYUV=100]="DXGI_FORMAT_AYUV",t[t.DXGI_FORMAT_Y410=101]="DXGI_FORMAT_Y410",t[t.DXGI_FORMAT_Y416=102]="DXGI_FORMAT_Y416",t[t.DXGI_FORMAT_NV12=103]="DXGI_FORMAT_NV12",t[t.DXGI_FORMAT_P010=104]="DXGI_FORMAT_P010",t[t.DXGI_FORMAT_P016=105]="DXGI_FORMAT_P016",t[t.DXGI_FORMAT_420_OPAQUE=106]="DXGI_FORMAT_420_OPAQUE",t[t.DXGI_FORMAT_YUY2=107]="DXGI_FORMAT_YUY2",t[t.DXGI_FORMAT_Y210=108]="DXGI_FORMAT_Y210",t[t.DXGI_FORMAT_Y216=109]="DXGI_FORMAT_Y216",t[t.DXGI_FORMAT_NV11=110]="DXGI_FORMAT_NV11",t[t.DXGI_FORMAT_AI44=111]="DXGI_FORMAT_AI44",t[t.DXGI_FORMAT_IA44=112]="DXGI_FORMAT_IA44",t[t.DXGI_FORMAT_P8=113]="DXGI_FORMAT_P8",t[t.DXGI_FORMAT_A8P8=114]="DXGI_FORMAT_A8P8",t[t.DXGI_FORMAT_B4G4R4A4_UNORM=115]="DXGI_FORMAT_B4G4R4A4_UNORM",t[t.DXGI_FORMAT_P208=116]="DXGI_FORMAT_P208",t[t.DXGI_FORMAT_V208=117]="DXGI_FORMAT_V208",t[t.DXGI_FORMAT_V408=118]="DXGI_FORMAT_V408",t[t.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE=119]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",t[t.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE=120]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",t[t.DXGI_FORMAT_FORCE_UINT=121]="DXGI_FORMAT_FORCE_UINT"})(se||(se={}));var Ga;(function(t){t[t.DDS_DIMENSION_TEXTURE1D=2]="DDS_DIMENSION_TEXTURE1D",t[t.DDS_DIMENSION_TEXTURE2D=3]="DDS_DIMENSION_TEXTURE2D",t[t.DDS_DIMENSION_TEXTURE3D=6]="DDS_DIMENSION_TEXTURE3D"})(Ga||(Ga={}));var nT=1,iT=2,oT=4,sT=64,aT=512,lT=131072,uT=827611204,hT=861165636,cT=894720068,fT=808540228,dT=4,pT=(Fn={},Fn[uT]=ut.COMPRESSED_RGBA_S3TC_DXT1_EXT,Fn[hT]=ut.COMPRESSED_RGBA_S3TC_DXT3_EXT,Fn[cT]=ut.COMPRESSED_RGBA_S3TC_DXT5_EXT,Fn),vT=(ie={},ie[se.DXGI_FORMAT_BC1_TYPELESS]=ut.COMPRESSED_RGBA_S3TC_DXT1_EXT,ie[se.DXGI_FORMAT_BC1_UNORM]=ut.COMPRESSED_RGBA_S3TC_DXT1_EXT,ie[se.DXGI_FORMAT_BC2_TYPELESS]=ut.COMPRESSED_RGBA_S3TC_DXT3_EXT,ie[se.DXGI_FORMAT_BC2_UNORM]=ut.COMPRESSED_RGBA_S3TC_DXT3_EXT,ie[se.DXGI_FORMAT_BC3_TYPELESS]=ut.COMPRESSED_RGBA_S3TC_DXT5_EXT,ie[se.DXGI_FORMAT_BC3_UNORM]=ut.COMPRESSED_RGBA_S3TC_DXT5_EXT,ie[se.DXGI_FORMAT_BC1_UNORM_SRGB]=ut.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,ie[se.DXGI_FORMAT_BC2_UNORM_SRGB]=ut.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,ie[se.DXGI_FORMAT_BC3_UNORM_SRGB]=ut.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,ie);function mT(t){var r=new Uint32Array(t),e=r[0];if(e!==eT)throw new Error("Invalid DDS file magic word");var n=new Uint32Array(t,0,to/Uint32Array.BYTES_PER_ELEMENT),i=n[eo.HEIGHT],o=n[eo.WIDTH],s=n[eo.MIPMAP_COUNT],l=new Uint32Array(t,eo.PIXEL_FORMAT*Uint32Array.BYTES_PER_ELEMENT,tT/Uint32Array.BYTES_PER_ELEMENT),h=l[nT];if(h&oT){var f=l[rT.FOURCC];if(f!==fT){var d=pT[f],v=Js+to,m=new Uint8Array(t,v),_=new Ba(m,{format:d,width:o,height:i,levels:s});return[_]}var g=Js+to,b=new Uint32Array(r.buffer,g,af/Uint32Array.BYTES_PER_ELEMENT),y=b[ro.DXGI_FORMAT],w=b[ro.RESOURCE_DIMENSION],C=b[ro.MISC_FLAG],T=b[ro.ARRAY_SIZE],I=vT[y];if(I===void 0)throw new Error("DDSParser cannot parse texture data with DXGI format "+y);if(C===dT)throw new Error("DDSParser does not support cubemap textures");if(w===Ga.DDS_DIMENSION_TEXTURE3D)throw new Error("DDSParser does not supported 3D texture data");var P=new Array,E=Js+to+af;if(T===1)P.push(new Uint8Array(t,E));else{for(var S=bo[I],L=0,A=o,U=i,j=0;j<s;j++){var q=Math.max(1,A+3&-4),$=Math.max(1,U+3&-4),ot=q*$*S;L+=ot,A=A>>>1,U=U>>>1}for(var z=E,j=0;j<T;j++)P.push(new Uint8Array(t,z,L)),z+=L}return P.map(function(k){return new Ba(k,{format:I,width:o,height:i,levels:s})})}throw h&sT?new Error("DDSParser does not support uncompressed texture data."):h&aT?new Error("DDSParser does not supported YUV uncompressed texture data."):h&lT?new Error("DDSParser does not support single-channel (lumninance) texture data!"):h&iT?new Error("DDSParser does not support single-channel (alpha) texture data!"):new Error("DDSParser failed to load a texture file due to an unknown reason!")}var qe,Re,Mn,lf=[171,75,84,88,32,49,49,187,13,10,26,10],_T=67305985,oe={FILE_IDENTIFIER:0,ENDIANNESS:12,GL_TYPE:16,GL_TYPE_SIZE:20,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,GL_BASE_INTERNAL_FORMAT:32,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},Da=64,uf=(qe={},qe[Y.UNSIGNED_BYTE]=1,qe[Y.UNSIGNED_SHORT]=2,qe[Y.INT]=4,qe[Y.UNSIGNED_INT]=4,qe[Y.FLOAT]=4,qe[Y.HALF_FLOAT]=8,qe),gT=(Re={},Re[G.RGBA]=4,Re[G.RGB]=3,Re[G.RG]=2,Re[G.RED]=1,Re[G.LUMINANCE]=1,Re[G.LUMINANCE_ALPHA]=2,Re[G.ALPHA]=1,Re),yT=(Mn={},Mn[Y.UNSIGNED_SHORT_4_4_4_4]=2,Mn[Y.UNSIGNED_SHORT_5_5_5_1]=2,Mn[Y.UNSIGNED_SHORT_5_6_5]=2,Mn);function bT(t,r,e){e===void 0&&(e=!1);var n=new DataView(r);if(!xT(t,n))return null;var i=n.getUint32(oe.ENDIANNESS,!0)===_T,o=n.getUint32(oe.GL_TYPE,i),s=n.getUint32(oe.GL_FORMAT,i),l=n.getUint32(oe.GL_INTERNAL_FORMAT,i),h=n.getUint32(oe.PIXEL_WIDTH,i),f=n.getUint32(oe.PIXEL_HEIGHT,i)||1,d=n.getUint32(oe.PIXEL_DEPTH,i)||1,v=n.getUint32(oe.NUMBER_OF_ARRAY_ELEMENTS,i)||1,m=n.getUint32(oe.NUMBER_OF_FACES,i),_=n.getUint32(oe.NUMBER_OF_MIPMAP_LEVELS,i),g=n.getUint32(oe.BYTES_OF_KEY_VALUE_DATA,i);if(f===0||d!==1)throw new Error("Only 2D textures are supported");if(m!==1)throw new Error("CubeTextures are not supported by KTXLoader yet!");if(v!==1)throw new Error("WebGL does not support array textures");var b=4,y=4,w=h+3&-4,C=f+3&-4,T=new Array(v),I=h*f;o===0&&(I=w*C);var P;if(o!==0?uf[o]?P=uf[o]*gT[s]:P=yT[o]:P=bo[l],P===void 0)throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");for(var E=e?TT(n,g,i):null,S=I*P,L=S,A=h,U=f,j=w,q=C,$=Da+g,ot=0;ot<_;ot++){for(var z=n.getUint32($,i),k=$+4,B=0;B<v;B++){var Pt=T[B];Pt||(Pt=T[B]=new Array(_)),Pt[ot]={levelID:ot,levelWidth:_>1||o!==0?A:j,levelHeight:_>1||o!==0?U:q,levelBuffer:new Uint8Array(r,k,L)},k+=L}$+=z+4,$=$%4!==0?$+4-$%4:$,A=A>>1||1,U=U>>1||1,j=A+b-1&~(b-1),q=U+y-1&~(y-1),L=j*q*P}return o!==0?{uncompressed:T.map(function(pt){var O=pt[0].levelBuffer,F=!1;return o===Y.FLOAT?O=new Float32Array(pt[0].levelBuffer.buffer,pt[0].levelBuffer.byteOffset,pt[0].levelBuffer.byteLength/4):o===Y.UNSIGNED_INT?(F=!0,O=new Uint32Array(pt[0].levelBuffer.buffer,pt[0].levelBuffer.byteOffset,pt[0].levelBuffer.byteLength/4)):o===Y.INT&&(F=!0,O=new Int32Array(pt[0].levelBuffer.buffer,pt[0].levelBuffer.byteOffset,pt[0].levelBuffer.byteLength/4)),{resource:new xi(O,{width:pt[0].levelWidth,height:pt[0].levelHeight}),type:o,format:F?wT(s):s}}),kvData:E}:{compressed:T.map(function(pt){return new Ba(null,{format:l,width:h,height:f,levels:_,levelBuffers:pt})}),kvData:E}}function xT(t,r){for(var e=0;e<lf.length;e++)if(r.getUint8(e)!==lf[e])return console.error(t+" is not a valid *.ktx file!"),!1;return!0}function wT(t){switch(t){case G.RGBA:return G.RGBA_INTEGER;case G.RGB:return G.RGB_INTEGER;case G.RG:return G.RG_INTEGER;case G.RED:return G.RED_INTEGER;default:return t}}function TT(t,r,e){for(var n=new Map,i=0;i<r;){var o=t.getUint32(Da+i,e),s=Da+i+4,l=3-(o+3)%4;if(o===0||o>r-i){console.error("KTXLoader: keyAndValueByteSize out of bounds");break}for(var h=0;h<o&&t.getUint8(s+h)!==0;h++);if(h===-1){console.error("KTXLoader: Failed to find null byte terminating kvData key");break}var f=new TextDecoder().decode(new Uint8Array(t.buffer,s,h)),d=new DataView(t.buffer,s+h+1,o-h-1);n.set(f,d),i+=4+o+l}return n}Ot.setExtensionXhrType("dds",Ot.XHR_RESPONSE_TYPE.BUFFER);var CT=function(){function t(){}return t.use=function(r,e){if(r.extension==="dds"&&r.data)try{Object.assign(r,Hp(r.name||r.url,mT(r.data),r.metadata))}catch(n){e(n);return}e()},t.extension=Tt.Loader,t}();Ot.setExtensionXhrType("ktx",Ot.XHR_RESPONSE_TYPE.BUFFER);var ET=function(){function t(){}return t.use=function(r,e){if(r.extension==="ktx"&&r.data)try{var n=r.name||r.url,i=bT(n,r.data,this.loadKeyValueData),o=i.compressed,s=i.uncompressed,l=i.kvData;if(o){var h=Hp(n,o,r.metadata);if(l&&h.textures)for(var f in h.textures)h.textures[f].baseTexture.ktxKeyValueData=l;Object.assign(r,h)}else if(s){var d={};s.forEach(function(v,m){var _=new tt(new vt(v.resource,{mipmap:he.OFF,alphaMode:ce.NO_PREMULTIPLIED_ALPHA,type:v.type,format:v.format})),g=n+"-"+(m+1);l&&(_.baseTexture.ktxKeyValueData=l),vt.addToCache(_.baseTexture,g),tt.addToCache(_,g),m===0&&(d[n]=_,vt.addToCache(_.baseTexture,n),tt.addToCache(_,n)),d[g]=_}),Object.assign(r,{textures:d})}}catch(v){e(v);return}e()},t.extension=Tt.Loader,t.loadKeyValueData=!1,t}();/*!
 * @pixi/particle-container - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/particle-container is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Va=function(t,r){return Va=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},Va(t,r)};function Xp(t,r){Va(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}(function(t){Xp(r,t);function r(e,n,i,o){e===void 0&&(e=1500),i===void 0&&(i=16384),o===void 0&&(o=!1);var s=t.call(this)||this,l=16384;return i>l&&(i=l),s._properties=[!1,!0,!1,!1,!1],s._maxSize=e,s._batchSize=i,s._buffers=null,s._bufferUpdateIDs=[],s._updateID=0,s.interactiveChildren=!1,s.blendMode=Z.NORMAL,s.autoResize=o,s.roundPixels=!0,s.baseTexture=null,s.setProperties(n),s._tint=0,s.tintRgb=new Float32Array(4),s.tint=16777215,s}return r.prototype.setProperties=function(e){e&&(this._properties[0]="vertices"in e||"scale"in e?!!e.vertices||!!e.scale:this._properties[0],this._properties[1]="position"in e?!!e.position:this._properties[1],this._properties[2]="rotation"in e?!!e.rotation:this._properties[2],this._properties[3]="uvs"in e?!!e.uvs:this._properties[3],this._properties[4]="tint"in e||"alpha"in e?!!e.tint||!!e.alpha:this._properties[4])},r.prototype.updateTransform=function(){this.displayObjectUpdateTransform()},Object.defineProperty(r.prototype,"tint",{get:function(){return this._tint},set:function(e){this._tint=e,Gt(e,this.tintRgb)},enumerable:!1,configurable:!0}),r.prototype.render=function(e){var n=this;!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable||(this.baseTexture||(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.valid||this.baseTexture.once("update",function(){return n.onChildrenChange(0)})),e.batch.setObjectRenderer(e.plugins.particle),e.plugins.particle.render(this))},r.prototype.onChildrenChange=function(e){for(var n=Math.floor(e/this._batchSize);this._bufferUpdateIDs.length<n;)this._bufferUpdateIDs.push(0);this._bufferUpdateIDs[n]=++this._updateID},r.prototype.dispose=function(){if(this._buffers){for(var e=0;e<this._buffers.length;++e)this._buffers[e].destroy();this._buffers=null}},r.prototype.destroy=function(e){t.prototype.destroy.call(this,e),this.dispose(),this._properties=null,this._buffers=null,this._bufferUpdateIDs=null},r})(Ht);var hf=function(){function t(r,e,n){this.geometry=new sn,this.indexBuffer=null,this.size=n,this.dynamicProperties=[],this.staticProperties=[];for(var i=0;i<r.length;++i){var o=r[i];o={attributeName:o.attributeName,size:o.size,uploadFunction:o.uploadFunction,type:o.type||Y.FLOAT,offset:o.offset},e[i]?this.dynamicProperties.push(o):this.staticProperties.push(o)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}return t.prototype.initBuffers=function(){var r=this.geometry,e=0;this.indexBuffer=new Lt(Vx(this.size),!0,!0),r.addIndex(this.indexBuffer),this.dynamicStride=0;for(var n=0;n<this.dynamicProperties.length;++n){var i=this.dynamicProperties[n];i.offset=e,e+=i.size,this.dynamicStride+=i.size}var o=new ArrayBuffer(this.size*this.dynamicStride*4*4);this.dynamicData=new Float32Array(o),this.dynamicDataUint32=new Uint32Array(o),this.dynamicBuffer=new Lt(this.dynamicData,!1,!1);var s=0;this.staticStride=0;for(var n=0;n<this.staticProperties.length;++n){var i=this.staticProperties[n];i.offset=s,s+=i.size,this.staticStride+=i.size}var l=new ArrayBuffer(this.size*this.staticStride*4*4);this.staticData=new Float32Array(l),this.staticDataUint32=new Uint32Array(l),this.staticBuffer=new Lt(this.staticData,!0,!1);for(var n=0;n<this.dynamicProperties.length;++n){var i=this.dynamicProperties[n];r.addAttribute(i.attributeName,this.dynamicBuffer,0,i.type===Y.UNSIGNED_BYTE,i.type,this.dynamicStride*4,i.offset*4)}for(var n=0;n<this.staticProperties.length;++n){var i=this.staticProperties[n];r.addAttribute(i.attributeName,this.staticBuffer,0,i.type===Y.UNSIGNED_BYTE,i.type,this.staticStride*4,i.offset*4)}},t.prototype.uploadDynamic=function(r,e,n){for(var i=0;i<this.dynamicProperties.length;i++){var o=this.dynamicProperties[i];o.uploadFunction(r,e,n,o.type===Y.UNSIGNED_BYTE?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,o.offset)}this.dynamicBuffer._updateID++},t.prototype.uploadStatic=function(r,e,n){for(var i=0;i<this.staticProperties.length;i++){var o=this.staticProperties[i];o.uploadFunction(r,e,n,o.type===Y.UNSIGNED_BYTE?this.staticDataUint32:this.staticData,this.staticStride,o.offset)}this.staticBuffer._updateID++},t.prototype.destroy=function(){this.indexBuffer=null,this.dynamicProperties=null,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.geometry.destroy()},t}(),PT=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,IT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`,RT=function(t){Xp(r,t);function r(e){var n=t.call(this,e)||this;return n.shader=null,n.properties=null,n.tempMatrix=new Rt,n.properties=[{attributeName:"aVertexPosition",size:2,uploadFunction:n.uploadVertices,offset:0},{attributeName:"aPositionCoord",size:2,uploadFunction:n.uploadPosition,offset:0},{attributeName:"aRotation",size:1,uploadFunction:n.uploadRotation,offset:0},{attributeName:"aTextureCoord",size:2,uploadFunction:n.uploadUvs,offset:0},{attributeName:"aColor",size:1,type:Y.UNSIGNED_BYTE,uploadFunction:n.uploadTint,offset:0}],n.shader=Le.from(IT,PT,{}),n.state=er.for2d(),n}return r.prototype.render=function(e){var n=e.children,i=e._maxSize,o=e._batchSize,s=this.renderer,l=n.length;if(l!==0){l>i&&!e.autoResize&&(l=i);var h=e._buffers;h||(h=e._buffers=this.generateBuffers(e));var f=n[0]._texture.baseTexture,d=f.alphaMode>0;this.state.blendMode=_p(e.blendMode,d),s.state.set(this.state);var v=s.gl,m=e.worldTransform.copyTo(this.tempMatrix);m.prepend(s.globalUniforms.uniforms.projectionMatrix),this.shader.uniforms.translationMatrix=m.toArray(!0),this.shader.uniforms.uColor=Dx(e.tintRgb,e.worldAlpha,this.shader.uniforms.uColor,d),this.shader.uniforms.uSampler=f,this.renderer.shader.bind(this.shader);for(var _=!1,g=0,b=0;g<l;g+=o,b+=1){var y=l-g;y>o&&(y=o),b>=h.length&&h.push(this._generateOneMoreBuffer(e));var w=h[b];w.uploadDynamic(n,g,y);var C=e._bufferUpdateIDs[b]||0;_=_||w._updateID<C,_&&(w._updateID=e._updateID,w.uploadStatic(n,g,y)),s.geometry.bind(w.geometry),v.drawElements(v.TRIANGLES,y*6,v.UNSIGNED_SHORT,0)}}},r.prototype.generateBuffers=function(e){for(var n=[],i=e._maxSize,o=e._batchSize,s=e._properties,l=0;l<i;l+=o)n.push(new hf(this.properties,s,o));return n},r.prototype._generateOneMoreBuffer=function(e){var n=e._batchSize,i=e._properties;return new hf(this.properties,i,n)},r.prototype.uploadVertices=function(e,n,i,o,s,l){for(var h=0,f=0,d=0,v=0,m=0;m<i;++m){var _=e[n+m],g=_._texture,b=_.scale.x,y=_.scale.y,w=g.trim,C=g.orig;w?(f=w.x-_.anchor.x*C.width,h=f+w.width,v=w.y-_.anchor.y*C.height,d=v+w.height):(h=C.width*(1-_.anchor.x),f=C.width*-_.anchor.x,d=C.height*(1-_.anchor.y),v=C.height*-_.anchor.y),o[l]=f*b,o[l+1]=v*y,o[l+s]=h*b,o[l+s+1]=v*y,o[l+s*2]=h*b,o[l+s*2+1]=d*y,o[l+s*3]=f*b,o[l+s*3+1]=d*y,l+=s*4}},r.prototype.uploadPosition=function(e,n,i,o,s,l){for(var h=0;h<i;h++){var f=e[n+h].position;o[l]=f.x,o[l+1]=f.y,o[l+s]=f.x,o[l+s+1]=f.y,o[l+s*2]=f.x,o[l+s*2+1]=f.y,o[l+s*3]=f.x,o[l+s*3+1]=f.y,l+=s*4}},r.prototype.uploadRotation=function(e,n,i,o,s,l){for(var h=0;h<i;h++){var f=e[n+h].rotation;o[l]=f,o[l+s]=f,o[l+s*2]=f,o[l+s*3]=f,l+=s*4}},r.prototype.uploadUvs=function(e,n,i,o,s,l){for(var h=0;h<i;++h){var f=e[n+h]._texture._uvs;f?(o[l]=f.x0,o[l+1]=f.y0,o[l+s]=f.x1,o[l+s+1]=f.y1,o[l+s*2]=f.x2,o[l+s*2+1]=f.y2,o[l+s*3]=f.x3,o[l+s*3+1]=f.y3,l+=s*4):(o[l]=0,o[l+1]=0,o[l+s]=0,o[l+s+1]=0,o[l+s*2]=0,o[l+s*2+1]=0,o[l+s*3]=0,o[l+s*3+1]=0,l+=s*4)}},r.prototype.uploadTint=function(e,n,i,o,s,l){for(var h=0;h<i;++h){var f=e[n+h],d=f._texture.baseTexture.alphaMode>0,v=f.alpha,m=v<1&&d?Go(f._tintRGB,v):f._tintRGB+(v*255<<24);o[l]=m,o[l+s]=m,o[l+s*2]=m,o[l+s*3]=m,l+=s*4}},r.prototype.destroy=function(){t.prototype.destroy.call(this),this.shader&&(this.shader.destroy(),this.shader=null),this.tempMatrix=null},r.extension={name:"particle",type:Tt.RendererPlugin},r}(Do);/*!
 * @pixi/graphics - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/graphics is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Wt;(function(t){t.MITER="miter",t.BEVEL="bevel",t.ROUND="round"})(Wt||(Wt={}));var re;(function(t){t.BUTT="butt",t.ROUND="round",t.SQUARE="square"})(re||(re={}));var si={adaptive:!0,maxLength:10,minSegments:8,maxSegments:2048,epsilon:1e-4,_segmentsCount:function(t,r){if(r===void 0&&(r=20),!this.adaptive||!t||isNaN(t))return r;var e=Math.ceil(t/this.maxLength);return e<this.minSegments?e=this.minSegments:e>this.maxSegments&&(e=this.maxSegments),e}},zp=function(){function t(){this.color=16777215,this.alpha=1,this.texture=tt.WHITE,this.matrix=null,this.visible=!1,this.reset()}return t.prototype.clone=function(){var r=new t;return r.color=this.color,r.alpha=this.alpha,r.texture=this.texture,r.matrix=this.matrix,r.visible=this.visible,r},t.prototype.reset=function(){this.color=16777215,this.alpha=1,this.texture=tt.WHITE,this.matrix=null,this.visible=!1},t.prototype.destroy=function(){this.texture=null,this.matrix=null},t}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ja=function(t,r){return ja=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},ja(t,r)};function ru(t,r){ja(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}function cf(t,r){var e,n;r===void 0&&(r=!1);var i=t.length;if(!(i<6)){for(var o=0,s=0,l=t[i-2],h=t[i-1];s<i;s+=2){var f=t[s],d=t[s+1];o+=(f-l)*(d+h),l=f,h=d}if(!r&&o>0||r&&o<=0)for(var v=i/2,s=v+v%2;s<i;s+=2){var m=i-s-2,_=i-s-1,g=s,b=s+1;e=[t[g],t[m]],t[m]=e[0],t[g]=e[1],n=[t[b],t[_]],t[_]=n[0],t[b]=n[1]}}}var nu={build:function(t){t.points=t.shape.points.slice()},triangulate:function(t,r){var e=t.points,n=t.holes,i=r.points,o=r.indices;if(e.length>=6){cf(e,!1);for(var s=[],l=0;l<n.length;l++){var h=n[l];cf(h.points,!0),s.push(e.length/2),e=e.concat(h.points)}var f=bi.exports(e,s,2);if(!f)return;for(var d=i.length/2,l=0;l<f.length;l+=3)o.push(f[l]+d),o.push(f[l+1]+d),o.push(f[l+2]+d);for(var l=0;l<e.length;l++)i.push(e[l])}}},ai={build:function(t){var r=t.points,e,n,i,o,s,l;if(t.type===gt.CIRC){var h=t.shape;e=h.x,n=h.y,s=l=h.radius,i=o=0}else if(t.type===gt.ELIP){var f=t.shape;e=f.x,n=f.y,s=f.width,l=f.height,i=o=0}else{var d=t.shape,v=d.width/2,m=d.height/2;e=d.x+v,n=d.y+m,s=l=Math.max(0,Math.min(d.radius,Math.min(v,m))),i=v-s,o=m-l}if(!(s>=0&&l>=0&&i>=0&&o>=0)){r.length=0;return}var _=Math.ceil(2.3*Math.sqrt(s+l)),g=_*8+(i?4:0)+(o?4:0);if(r.length=g,g!==0){if(_===0){r.length=8,r[0]=r[6]=e+i,r[1]=r[3]=n+o,r[2]=r[4]=e-i,r[5]=r[7]=n-o;return}var b=0,y=_*4+(i?2:0)+2,w=y,C=g;{var T=i+s,I=o,P=e+T,E=e-T,S=n+I;if(r[b++]=P,r[b++]=S,r[--y]=S,r[--y]=E,o){var L=n-I;r[w++]=E,r[w++]=L,r[--C]=L,r[--C]=P}}for(var A=1;A<_;A++){var U=Math.PI/2*(A/_),T=i+Math.cos(U)*s,I=o+Math.sin(U)*l,P=e+T,E=e-T,S=n+I,L=n-I;r[b++]=P,r[b++]=S,r[--y]=S,r[--y]=E,r[w++]=E,r[w++]=L,r[--C]=L,r[--C]=P}{var T=i,I=o+l,P=e+T,E=e-T,S=n+I,L=n-I;r[b++]=P,r[b++]=S,r[--C]=L,r[--C]=P,i&&(r[b++]=E,r[b++]=S,r[--C]=L,r[--C]=E)}}},triangulate:function(t,r){var e=t.points,n=r.points,i=r.indices;if(e.length!==0){var o=n.length/2,s=o,l,h;if(t.type!==gt.RREC){var f=t.shape;l=f.x,h=f.y}else{var d=t.shape;l=d.x+d.width/2,h=d.y+d.height/2}var v=t.matrix;n.push(t.matrix?v.a*l+v.c*h+v.tx:l,t.matrix?v.b*l+v.d*h+v.ty:h),o++,n.push(e[0],e[1]);for(var m=2;m<e.length;m+=2)n.push(e[m],e[m+1]),i.push(o++,s,o);i.push(s+1,s,o)}}},$p={build:function(t){var r=t.shape,e=r.x,n=r.y,i=r.width,o=r.height,s=t.points;s.length=0,s.push(e,n,e+i,n,e+i,n+o,e,n+o)},triangulate:function(t,r){var e=t.points,n=r.points,i=n.length/2;n.push(e[0],e[1],e[2],e[3],e[6],e[7],e[4],e[5]),r.indices.push(i,i+1,i+2,i+1,i+2,i+3)}};function Gr(t,r,e){var n=r-t;return t+n*e}function no(t,r,e,n,i,o,s){s===void 0&&(s=[]);for(var l=20,h=s,f=0,d=0,v=0,m=0,_=0,g=0,b=0,y=0;b<=l;++b)y=b/l,f=Gr(t,e,y),d=Gr(r,n,y),v=Gr(e,i,y),m=Gr(n,o,y),_=Gr(f,v,y),g=Gr(d,m,y),!(b===0&&h[h.length-2]===_&&h[h.length-1]===g)&&h.push(_,g);return h}var Wp={build:function(t){if(tr.nextRoundedRectBehavior){ai.build(t);return}var r=t.shape,e=t.points,n=r.x,i=r.y,o=r.width,s=r.height,l=Math.max(0,Math.min(r.radius,Math.min(o,s)/2));e.length=0,l?(no(n,i+l,n,i,n+l,i,e),no(n+o-l,i,n+o,i,n+o,i+l,e),no(n+o,i+s-l,n+o,i+s,n+o-l,i+s,e),no(n+l,i+s,n,i+s,n,i+s-l,e)):e.push(n,i,n+o,i,n+o,i+s,n,i+s)},triangulate:function(t,r){if(tr.nextRoundedRectBehavior){ai.triangulate(t,r);return}for(var e=t.points,n=r.points,i=r.indices,o=n.length/2,s=bi.exports(e,null,2),l=0,h=s.length;l<h;l+=3)i.push(s[l]+o),i.push(s[l+1]+o),i.push(s[l+2]+o);for(var l=0,h=e.length;l<h;l++)n.push(e[l],e[++l])}};function ff(t,r,e,n,i,o,s,l){var h=t-e*i,f=r-n*i,d=t+e*o,v=r+n*o,m,_;s?(m=n,_=-e):(m=-n,_=e);var g=h+m,b=f+_,y=d+m,w=v+_;return l.push(g,b),l.push(y,w),2}function Dr(t,r,e,n,i,o,s,l){var h=e-t,f=n-r,d=Math.atan2(h,f),v=Math.atan2(i-t,o-r);l&&d<v?d+=Math.PI*2:!l&&d>v&&(v+=Math.PI*2);var m=d,_=v-d,g=Math.abs(_),b=Math.sqrt(h*h+f*f),y=(15*g*Math.sqrt(b)/Math.PI>>0)+1,w=_/y;if(m+=w,l){s.push(t,r),s.push(e,n);for(var C=1,T=m;C<y;C++,T+=w)s.push(t,r),s.push(t+Math.sin(T)*b,r+Math.cos(T)*b);s.push(t,r),s.push(i,o)}else{s.push(e,n),s.push(t,r);for(var C=1,T=m;C<y;C++,T+=w)s.push(t+Math.sin(T)*b,r+Math.cos(T)*b),s.push(t,r);s.push(i,o),s.push(t,r)}return y*2}function AT(t,r){var e=t.shape,n=t.points||e.points.slice(),i=r.closePointEps;if(n.length!==0){var o=t.lineStyle,s=new ct(n[0],n[1]),l=new ct(n[n.length-2],n[n.length-1]),h=e.type!==gt.POLY||e.closeStroke,f=Math.abs(s.x-l.x)<i&&Math.abs(s.y-l.y)<i;if(h){n=n.slice(),f&&(n.pop(),n.pop(),l.set(n[n.length-2],n[n.length-1]));var d=(s.x+l.x)*.5,v=(l.y+s.y)*.5;n.unshift(d,v),n.push(d,v)}var m=r.points,_=n.length/2,g=n.length,b=m.length/2,y=o.width/2,w=y*y,C=o.miterLimit*o.miterLimit,T=n[0],I=n[1],P=n[2],E=n[3],S=0,L=0,A=-(I-E),U=T-P,j=0,q=0,$=Math.sqrt(A*A+U*U);A/=$,U/=$,A*=y,U*=y;var ot=o.alignment,z=(1-ot)*2,k=ot*2;h||(o.cap===re.ROUND?g+=Dr(T-A*(z-k)*.5,I-U*(z-k)*.5,T-A*z,I-U*z,T+A*k,I+U*k,m,!0)+2:o.cap===re.SQUARE&&(g+=ff(T,I,A,U,z,k,!0,m))),m.push(T-A*z,I-U*z),m.push(T+A*k,I+U*k);for(var B=1;B<_-1;++B){T=n[(B-1)*2],I=n[(B-1)*2+1],P=n[B*2],E=n[B*2+1],S=n[(B+1)*2],L=n[(B+1)*2+1],A=-(I-E),U=T-P,$=Math.sqrt(A*A+U*U),A/=$,U/=$,A*=y,U*=y,j=-(E-L),q=P-S,$=Math.sqrt(j*j+q*q),j/=$,q/=$,j*=y,q*=y;var Pt=P-T,pt=I-E,O=P-S,F=L-E,H=pt*O-F*Pt,D=H<0;if(Math.abs(H)<.1){m.push(P-A*z,E-U*z),m.push(P+A*k,E+U*k);continue}var W=(-A+T)*(-U+E)-(-A+P)*(-U+I),st=(-j+S)*(-q+E)-(-j+P)*(-q+L),et=(Pt*st-O*W)/H,ft=(F*W-pt*st)/H,_t=(et-P)*(et-P)+(ft-E)*(ft-E),ht=P+(et-P)*z,it=E+(ft-E)*z,Q=P-(et-P)*k,at=E-(ft-E)*k,J=Math.min(Pt*Pt+pt*pt,O*O+F*F),Ct=D?z:k,xt=J+Ct*Ct*w,lt=_t<=xt;lt?o.join===Wt.BEVEL||_t/w>C?(D?(m.push(ht,it),m.push(P+A*k,E+U*k),m.push(ht,it),m.push(P+j*k,E+q*k)):(m.push(P-A*z,E-U*z),m.push(Q,at),m.push(P-j*z,E-q*z),m.push(Q,at)),g+=2):o.join===Wt.ROUND?D?(m.push(ht,it),m.push(P+A*k,E+U*k),g+=Dr(P,E,P+A*k,E+U*k,P+j*k,E+q*k,m,!0)+4,m.push(ht,it),m.push(P+j*k,E+q*k)):(m.push(P-A*z,E-U*z),m.push(Q,at),g+=Dr(P,E,P-A*z,E-U*z,P-j*z,E-q*z,m,!1)+4,m.push(P-j*z,E-q*z),m.push(Q,at)):(m.push(ht,it),m.push(Q,at)):(m.push(P-A*z,E-U*z),m.push(P+A*k,E+U*k),o.join===Wt.ROUND?D?g+=Dr(P,E,P+A*k,E+U*k,P+j*k,E+q*k,m,!0)+2:g+=Dr(P,E,P-A*z,E-U*z,P-j*z,E-q*z,m,!1)+2:o.join===Wt.MITER&&_t/w<=C&&(D?(m.push(Q,at),m.push(Q,at)):(m.push(ht,it),m.push(ht,it)),g+=2),m.push(P-j*z,E-q*z),m.push(P+j*k,E+q*k),g+=2)}T=n[(_-2)*2],I=n[(_-2)*2+1],P=n[(_-1)*2],E=n[(_-1)*2+1],A=-(I-E),U=T-P,$=Math.sqrt(A*A+U*U),A/=$,U/=$,A*=y,U*=y,m.push(P-A*z,E-U*z),m.push(P+A*k,E+U*k),h||(o.cap===re.ROUND?g+=Dr(P-A*(z-k)*.5,E-U*(z-k)*.5,P-A*z,E-U*z,P+A*k,E+U*k,m,!1)+2:o.cap===re.SQUARE&&(g+=ff(P,E,A,U,z,k,!1,m)));for(var Yt=r.indices,ne=si.epsilon*si.epsilon,B=b;B<g+b-2;++B)T=m[B*2],I=m[B*2+1],P=m[(B+1)*2],E=m[(B+1)*2+1],S=m[(B+2)*2],L=m[(B+2)*2+1],!(Math.abs(T*(E-L)+P*(L-I)+S*(I-E))<ne)&&Yt.push(B,B+1,B+2)}}function NT(t,r){var e=0,n=t.shape,i=t.points||n.points,o=n.type!==gt.POLY||n.closeStroke;if(i.length!==0){var s=r.points,l=r.indices,h=i.length/2,f=s.length/2,d=f;for(s.push(i[0],i[1]),e=1;e<h;e++)s.push(i[e*2],i[e*2+1]),l.push(d,d+1),d++;o&&l.push(d,f)}}function Ha(t,r){t.lineStyle.native?NT(t,r):AT(t,r)}var Xa=function(){function t(){}return t.curveTo=function(r,e,n,i,o,s){var l=s[s.length-2],h=s[s.length-1],f=h-e,d=l-r,v=i-e,m=n-r,_=Math.abs(f*m-d*v);if(_<1e-8||o===0)return(s[s.length-2]!==r||s[s.length-1]!==e)&&s.push(r,e),null;var g=f*f+d*d,b=v*v+m*m,y=f*v+d*m,w=o*Math.sqrt(g)/_,C=o*Math.sqrt(b)/_,T=w*y/g,I=C*y/b,P=w*m+C*d,E=w*v+C*f,S=d*(C+T),L=f*(C+T),A=m*(w+I),U=v*(w+I),j=Math.atan2(L-E,S-P),q=Math.atan2(U-E,A-P);return{cx:P+r,cy:E+e,radius:o,startAngle:j,endAngle:q,anticlockwise:d*v>m*f}},t.arc=function(r,e,n,i,o,s,l,h,f){for(var d=l-s,v=si._segmentsCount(Math.abs(d)*o,Math.ceil(Math.abs(d)/rn)*40),m=d/(v*2),_=m*2,g=Math.cos(m),b=Math.sin(m),y=v-1,w=y%1/y,C=0;C<=y;++C){var T=C+w*C,I=m+s+_*T,P=Math.cos(I),E=-Math.sin(I);f.push((g*P+b*E)*o+n,(g*-E+b*P)*o+i)}},t}(),qp=function(){function t(){}return t.curveLength=function(r,e,n,i,o,s,l,h){for(var f=10,d=0,v=0,m=0,_=0,g=0,b=0,y=0,w=0,C=0,T=0,I=0,P=r,E=e,S=1;S<=f;++S)v=S/f,m=v*v,_=m*v,g=1-v,b=g*g,y=b*g,w=y*r+3*b*v*n+3*g*m*o+_*l,C=y*e+3*b*v*i+3*g*m*s+_*h,T=P-w,I=E-C,P=w,E=C,d+=Math.sqrt(T*T+I*I);return d},t.curveTo=function(r,e,n,i,o,s,l){var h=l[l.length-2],f=l[l.length-1];l.length-=2;var d=si._segmentsCount(t.curveLength(h,f,r,e,n,i,o,s)),v=0,m=0,_=0,g=0,b=0;l.push(h,f);for(var y=1,w=0;y<=d;++y)w=y/d,v=1-w,m=v*v,_=m*v,g=w*w,b=g*w,l.push(_*h+3*m*w*r+3*v*g*n+b*o,_*f+3*m*w*e+3*v*g*i+b*s)},t}(),Yp=function(){function t(){}return t.curveLength=function(r,e,n,i,o,s){var l=r-2*n+o,h=e-2*i+s,f=2*n-2*r,d=2*i-2*e,v=4*(l*l+h*h),m=4*(l*f+h*d),_=f*f+d*d,g=2*Math.sqrt(v+m+_),b=Math.sqrt(v),y=2*v*b,w=2*Math.sqrt(_),C=m/b;return(y*g+b*m*(g-w)+(4*_*v-m*m)*Math.log((2*b+C+g)/(C+w)))/(4*y)},t.curveTo=function(r,e,n,i,o){for(var s=o[o.length-2],l=o[o.length-1],h=si._segmentsCount(t.curveLength(s,l,r,e,n,i)),f=0,d=0,v=1;v<=h;++v){var m=v/h;f=s+(r-s)*m,d=l+(e-l)*m,o.push(f+(r+(n-r)*m-f)*m,d+(e+(i-e)*m-d)*m)}},t}(),Kp=function(){function t(){this.reset()}return t.prototype.begin=function(r,e,n){this.reset(),this.style=r,this.start=e,this.attribStart=n},t.prototype.end=function(r,e){this.attribSize=e-this.attribStart,this.size=r-this.start},t.prototype.reset=function(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0},t}(),cr,ho=(cr={},cr[gt.POLY]=nu,cr[gt.CIRC]=ai,cr[gt.ELIP]=ai,cr[gt.RECT]=$p,cr[gt.RREC]=Wp,cr),za=[],jn=[],df=function(){function t(r,e,n,i){e===void 0&&(e=null),n===void 0&&(n=null),i===void 0&&(i=null),this.points=[],this.holes=[],this.shape=r,this.lineStyle=n,this.fillStyle=e,this.matrix=i,this.type=r.type}return t.prototype.clone=function(){return new t(this.shape,this.fillStyle,this.lineStyle,this.matrix)},t.prototype.destroy=function(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null},t}(),Vr=new ct,OT=function(t){ru(r,t);function r(){var e=t.call(this)||this;return e.closePointEps=1e-4,e.boundsPadding=0,e.uvsFloat32=null,e.indicesUint16=null,e.batchable=!1,e.points=[],e.colors=[],e.uvs=[],e.indices=[],e.textureIds=[],e.graphicsData=[],e.drawCalls=[],e.batchDirty=-1,e.batches=[],e.dirty=0,e.cacheDirty=-1,e.clearDirty=0,e.shapeIndex=0,e._bounds=new nn,e.boundsDirty=-1,e}return Object.defineProperty(r.prototype,"bounds",{get:function(){return this.updateBatches(),this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds},enumerable:!1,configurable:!0}),r.prototype.invalidate=function(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(var e=0;e<this.drawCalls.length;e++)this.drawCalls[e].texArray.clear(),jn.push(this.drawCalls[e]);this.drawCalls.length=0;for(var e=0;e<this.batches.length;e++){var n=this.batches[e];n.reset(),za.push(n)}this.batches.length=0},r.prototype.clear=function(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this},r.prototype.drawShape=function(e,n,i,o){n===void 0&&(n=null),i===void 0&&(i=null),o===void 0&&(o=null);var s=new df(e,n,i,o);return this.graphicsData.push(s),this.dirty++,this},r.prototype.drawHole=function(e,n){if(n===void 0&&(n=null),!this.graphicsData.length)return null;var i=new df(e,null,null,n),o=this.graphicsData[this.graphicsData.length-1];return i.lineStyle=o.lineStyle,o.holes.push(i),this.dirty++,this},r.prototype.destroy=function(){t.prototype.destroy.call(this);for(var e=0;e<this.graphicsData.length;++e)this.graphicsData[e].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null},r.prototype.containsPoint=function(e){for(var n=this.graphicsData,i=0;i<n.length;++i){var o=n[i];if(!!o.fillStyle.visible&&o.shape&&(o.matrix?o.matrix.applyInverse(e,Vr):Vr.copyFrom(e),o.shape.contains(Vr.x,Vr.y))){var s=!1;if(o.holes)for(var l=0;l<o.holes.length;l++){var h=o.holes[l];if(h.shape.contains(Vr.x,Vr.y)){s=!0;break}}if(!s)return!0}}return!1},r.prototype.updateBatches=function(){if(!this.graphicsData.length){this.batchable=!0;return}if(!!this.validateBatching()){this.cacheDirty=this.dirty;var e=this.uvs,n=this.graphicsData,i=null,o=null;this.batches.length>0&&(i=this.batches[this.batches.length-1],o=i.style);for(var s=this.shapeIndex;s<n.length;s++){this.shapeIndex++;var l=n[s],h=l.fillStyle,f=l.lineStyle,d=ho[l.type];d.build(l),l.matrix&&this.transformPoints(l.points,l.matrix),(h.visible||f.visible)&&this.processHoles(l.holes);for(var v=0;v<2;v++){var m=v===0?h:f;if(!!m.visible){var _=m.texture.baseTexture,g=this.indices.length,b=this.points.length/2;_.wrapMode=ye.REPEAT,v===0?this.processFill(l):this.processLine(l);var y=this.points.length/2-b;y!==0&&(i&&!this._compareStyles(o,m)&&(i.end(g,b),i=null),i||(i=za.pop()||new Kp,i.begin(m,g,b),this.batches.push(i),o=m),this.addUvs(this.points,e,m.texture,b,y,m.matrix))}}}var w=this.indices.length,C=this.points.length/2;if(i&&i.end(w,C),this.batches.length===0){this.batchable=!0;return}var T=C>65535;this.indicesUint16&&this.indices.length===this.indicesUint16.length&&T===this.indicesUint16.BYTES_PER_ELEMENT>2?this.indicesUint16.set(this.indices):this.indicesUint16=T?new Uint32Array(this.indices):new Uint16Array(this.indices),this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}},r.prototype._compareStyles=function(e,n){return!(!e||!n||e.texture.baseTexture!==n.texture.baseTexture||e.color+e.alpha!==n.color+n.alpha||!!e.native!=!!n.native)},r.prototype.validateBatching=function(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(var e=0,n=this.graphicsData.length;e<n;e++){var i=this.graphicsData[e],o=i.fillStyle,s=i.lineStyle;if(o&&!o.texture.baseTexture.valid||s&&!s.texture.baseTexture.valid)return!1}return!0},r.prototype.packBatches=function(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);for(var e=this.batches,n=0,i=e.length;n<i;n++)for(var o=e[n],s=0;s<o.size;s++){var l=o.start+s;this.indicesUint16[l]=this.indicesUint16[l]-o.attribStart}},r.prototype.isBatchable=function(){if(this.points.length>65535*2)return!1;for(var e=this.batches,n=0;n<e.length;n++)if(e[n].style.native)return!1;return this.points.length<r.BATCHABLE_SIZE*2},r.prototype.buildDrawCalls=function(){for(var e=++vt._globalBatch,n=0;n<this.drawCalls.length;n++)this.drawCalls[n].texArray.clear(),jn.push(this.drawCalls[n]);this.drawCalls.length=0;var i=this.colors,o=this.textureIds,s=jn.pop();s||(s=new La,s.texArray=new go),s.texArray.count=0,s.start=0,s.size=0,s.type=te.TRIANGLES;var l=0,h=null,f=0,d=!1,v=te.TRIANGLES,m=0;this.drawCalls.push(s);for(var n=0;n<this.batches.length;n++){var _=this.batches[n],g=8,b=_.style,y=b.texture.baseTexture;d!==!!b.native&&(d=!!b.native,v=d?te.LINES:te.TRIANGLES,h=null,l=g,e++),h!==y&&(h=y,y._batchEnabled!==e&&(l===g&&(e++,l=0,s.size>0&&(s=jn.pop(),s||(s=new La,s.texArray=new go),this.drawCalls.push(s)),s.start=m,s.size=0,s.texArray.count=0,s.type=v),y.touched=1,y._batchEnabled=e,y._batchLocation=l,y.wrapMode=ye.REPEAT,s.texArray.elements[s.texArray.count++]=y,l++)),s.size+=_.size,m+=_.size,f=y._batchLocation,this.addColors(i,b.color,b.alpha,_.attribSize,_.attribStart),this.addTextureIds(o,f,_.attribSize,_.attribStart)}vt._globalBatch=e,this.packAttributes()},r.prototype.packAttributes=function(){for(var e=this.points,n=this.uvs,i=this.colors,o=this.textureIds,s=new ArrayBuffer(e.length*3*4),l=new Float32Array(s),h=new Uint32Array(s),f=0,d=0;d<e.length/2;d++)l[f++]=e[d*2],l[f++]=e[d*2+1],l[f++]=n[d*2],l[f++]=n[d*2+1],h[f++]=i[d],l[f++]=o[d];this._buffer.update(s),this._indexBuffer.update(this.indicesUint16)},r.prototype.processFill=function(e){if(e.holes.length)nu.triangulate(e,this);else{var n=ho[e.type];n.triangulate(e,this)}},r.prototype.processLine=function(e){Ha(e,this);for(var n=0;n<e.holes.length;n++)Ha(e.holes[n],this)},r.prototype.processHoles=function(e){for(var n=0;n<e.length;n++){var i=e[n],o=ho[i.type];o.build(i),i.matrix&&this.transformPoints(i.points,i.matrix)}},r.prototype.calculateBounds=function(){var e=this._bounds;e.clear(),e.addVertexData(this.points,0,this.points.length),e.pad(this.boundsPadding,this.boundsPadding)},r.prototype.transformPoints=function(e,n){for(var i=0;i<e.length/2;i++){var o=e[i*2],s=e[i*2+1];e[i*2]=n.a*o+n.c*s+n.tx,e[i*2+1]=n.b*o+n.d*s+n.ty}},r.prototype.addColors=function(e,n,i,o,s){s===void 0&&(s=0);var l=(n>>16)+(n&65280)+((n&255)<<16),h=Go(l,i);e.length=Math.max(e.length,s+o);for(var f=0;f<o;f++)e[s+f]=h},r.prototype.addTextureIds=function(e,n,i,o){o===void 0&&(o=0),e.length=Math.max(e.length,o+i);for(var s=0;s<i;s++)e[o+s]=n},r.prototype.addUvs=function(e,n,i,o,s,l){l===void 0&&(l=null);for(var h=0,f=n.length,d=i.frame;h<s;){var v=e[(o+h)*2],m=e[(o+h)*2+1];if(l){var _=l.a*v+l.c*m+l.tx;m=l.b*v+l.d*m+l.ty,v=_}h++,n.push(v/d.width,m/d.height)}var g=i.baseTexture;(d.width<g.width||d.height<g.height)&&this.adjustUvs(n,i,f,s)},r.prototype.adjustUvs=function(e,n,i,o){for(var s=n.baseTexture,l=1e-6,h=i+o*2,f=n.frame,d=f.width/s.width,v=f.height/s.height,m=f.x/f.width,_=f.y/f.height,g=Math.floor(e[i]+l),b=Math.floor(e[i+1]+l),y=i+2;y<h;y+=2)g=Math.min(g,Math.floor(e[y]+l)),b=Math.min(b,Math.floor(e[y+1]+l));m-=g,_-=b;for(var y=i;y<h;y+=2)e[y]=(e[y]+m)*d,e[y+1]=(e[y+1]+_)*v},r.BATCHABLE_SIZE=100,r}(Gp),ST=function(t){ru(r,t);function r(){var e=t!==null&&t.apply(this,arguments)||this;return e.width=0,e.alignment=.5,e.native=!1,e.cap=re.BUTT,e.join=Wt.MITER,e.miterLimit=10,e}return r.prototype.clone=function(){var e=new r;return e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.matrix=this.matrix,e.visible=this.visible,e.width=this.width,e.alignment=this.alignment,e.native=this.native,e.cap=this.cap,e.join=this.join,e.miterLimit=this.miterLimit,e},r.prototype.reset=function(){t.prototype.reset.call(this),this.color=0,this.alignment=.5,this.width=0,this.native=!1},r}(zp),UT=new Float32Array(3),Qs={},tr=function(t){ru(r,t);function r(e){e===void 0&&(e=null);var n=t.call(this)||this;return n.shader=null,n.pluginName="batch",n.currentPath=null,n.batches=[],n.batchTint=-1,n.batchDirty=-1,n.vertexData=null,n._fillStyle=new zp,n._lineStyle=new ST,n._matrix=null,n._holeMode=!1,n.state=er.for2d(),n._geometry=e||new OT,n._geometry.refCount++,n._transformID=-1,n.tint=16777215,n.blendMode=Z.NORMAL,n}return Object.defineProperty(r.prototype,"geometry",{get:function(){return this._geometry},enumerable:!1,configurable:!0}),r.prototype.clone=function(){return this.finishPoly(),new r(this._geometry)},Object.defineProperty(r.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(e){this.state.blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"tint",{get:function(){return this._tint},set:function(e){this._tint=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fill",{get:function(){return this._fillStyle},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"line",{get:function(){return this._lineStyle},enumerable:!1,configurable:!0}),r.prototype.lineStyle=function(e,n,i,o,s){return e===void 0&&(e=null),n===void 0&&(n=0),i===void 0&&(i=1),o===void 0&&(o=.5),s===void 0&&(s=!1),typeof e=="number"&&(e={width:e,color:n,alpha:i,alignment:o,native:s}),this.lineTextureStyle(e)},r.prototype.lineTextureStyle=function(e){e=Object.assign({width:0,texture:tt.WHITE,color:e&&e.texture?16777215:0,alpha:1,matrix:null,alignment:.5,native:!1,cap:re.BUTT,join:Wt.MITER,miterLimit:10},e),this.currentPath&&this.startPoly();var n=e.width>0&&e.alpha>0;return n?(e.matrix&&(e.matrix=e.matrix.clone(),e.matrix.invert()),Object.assign(this._lineStyle,{visible:n},e)):this._lineStyle.reset(),this},r.prototype.startPoly=function(){if(this.currentPath){var e=this.currentPath.points,n=this.currentPath.points.length;n>2&&(this.drawShape(this.currentPath),this.currentPath=new yr,this.currentPath.closeStroke=!1,this.currentPath.points.push(e[n-2],e[n-1]))}else this.currentPath=new yr,this.currentPath.closeStroke=!1},r.prototype.finishPoly=function(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)},r.prototype.moveTo=function(e,n){return this.startPoly(),this.currentPath.points[0]=e,this.currentPath.points[1]=n,this},r.prototype.lineTo=function(e,n){this.currentPath||this.moveTo(0,0);var i=this.currentPath.points,o=i[i.length-2],s=i[i.length-1];return(o!==e||s!==n)&&i.push(e,n),this},r.prototype._initCurve=function(e,n){e===void 0&&(e=0),n===void 0&&(n=0),this.currentPath?this.currentPath.points.length===0&&(this.currentPath.points=[e,n]):this.moveTo(e,n)},r.prototype.quadraticCurveTo=function(e,n,i,o){this._initCurve();var s=this.currentPath.points;return s.length===0&&this.moveTo(0,0),Yp.curveTo(e,n,i,o,s),this},r.prototype.bezierCurveTo=function(e,n,i,o,s,l){return this._initCurve(),qp.curveTo(e,n,i,o,s,l,this.currentPath.points),this},r.prototype.arcTo=function(e,n,i,o,s){this._initCurve(e,n);var l=this.currentPath.points,h=Xa.curveTo(e,n,i,o,s,l);if(h){var f=h.cx,d=h.cy,v=h.radius,m=h.startAngle,_=h.endAngle,g=h.anticlockwise;this.arc(f,d,v,m,_,g)}return this},r.prototype.arc=function(e,n,i,o,s,l){if(l===void 0&&(l=!1),o===s)return this;!l&&s<=o?s+=rn:l&&o<=s&&(o+=rn);var h=s-o;if(h===0)return this;var f=e+Math.cos(o)*i,d=n+Math.sin(o)*i,v=this._geometry.closePointEps,m=this.currentPath?this.currentPath.points:null;if(m){var _=Math.abs(m[m.length-2]-f),g=Math.abs(m[m.length-1]-d);_<v&&g<v||m.push(f,d)}else this.moveTo(f,d),m=this.currentPath.points;return Xa.arc(f,d,e,n,i,o,s,l,m),this},r.prototype.beginFill=function(e,n){return e===void 0&&(e=0),n===void 0&&(n=1),this.beginTextureFill({texture:tt.WHITE,color:e,alpha:n})},r.prototype.beginTextureFill=function(e){e=Object.assign({texture:tt.WHITE,color:16777215,alpha:1,matrix:null},e),this.currentPath&&this.startPoly();var n=e.alpha>0;return n?(e.matrix&&(e.matrix=e.matrix.clone(),e.matrix.invert()),Object.assign(this._fillStyle,{visible:n},e)):this._fillStyle.reset(),this},r.prototype.endFill=function(){return this.finishPoly(),this._fillStyle.reset(),this},r.prototype.drawRect=function(e,n,i,o){return this.drawShape(new mt(e,n,i,o))},r.prototype.drawRoundedRect=function(e,n,i,o,s){return this.drawShape(new wp(e,n,i,o,s))},r.prototype.drawCircle=function(e,n,i){return this.drawShape(new bp(e,n,i))},r.prototype.drawEllipse=function(e,n,i,o){return this.drawShape(new xp(e,n,i,o))},r.prototype.drawPolygon=function(){for(var e=arguments,n=[],i=0;i<arguments.length;i++)n[i]=e[i];var o,s=!0,l=n[0];l.points?(s=l.closeStroke,o=l.points):Array.isArray(n[0])?o=n[0]:o=n;var h=new yr(o);return h.closeStroke=s,this.drawShape(h),this},r.prototype.drawShape=function(e){return this._holeMode?this._geometry.drawHole(e,this._matrix):this._geometry.drawShape(e,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this},r.prototype.clear=function(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this},r.prototype.isFastRect=function(){var e=this._geometry.graphicsData;return e.length===1&&e[0].shape.type===gt.RECT&&!e[0].matrix&&!e[0].holes.length&&!(e[0].lineStyle.visible&&e[0].lineStyle.width)},r.prototype._render=function(e){this.finishPoly();var n=this._geometry;n.updateBatches(),n.batchable?(this.batchDirty!==n.batchDirty&&this._populateBatches(),this._renderBatched(e)):(e.batch.flush(),this._renderDirect(e))},r.prototype._populateBatches=function(){var e=this._geometry,n=this.blendMode,i=e.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=e.batchDirty,this.batches.length=i,this.vertexData=new Float32Array(e.points);for(var o=0;o<i;o++){var s=e.batches[o],l=s.style.color,h=new Float32Array(this.vertexData.buffer,s.attribStart*4*2,s.attribSize*2),f=new Float32Array(e.uvsFloat32.buffer,s.attribStart*4*2,s.attribSize*2),d=new Uint16Array(e.indicesUint16.buffer,s.start*2,s.size),v={vertexData:h,blendMode:n,indices:d,uvs:f,_batchRGB:Gt(l),_tintRGB:l,_texture:s.style.texture,alpha:s.style.alpha,worldAlpha:1};this.batches[o]=v}},r.prototype._renderBatched=function(e){if(!!this.batches.length){e.batch.setObjectRenderer(e.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(var n=0,i=this.batches.length;n<i;n++){var o=this.batches[n];o.worldAlpha=this.worldAlpha*o.alpha,e.plugins[this.pluginName].render(o)}}},r.prototype._renderDirect=function(e){var n=this._resolveDirectShader(e),i=this._geometry,o=this.tint,s=this.worldAlpha,l=n.uniforms,h=i.drawCalls;l.translationMatrix=this.transform.worldTransform,l.tint[0]=(o>>16&255)/255*s,l.tint[1]=(o>>8&255)/255*s,l.tint[2]=(o&255)/255*s,l.tint[3]=s,e.shader.bind(n),e.geometry.bind(i,n),e.state.set(this.state);for(var f=0,d=h.length;f<d;f++)this._renderDrawCallDirect(e,i.drawCalls[f])},r.prototype._renderDrawCallDirect=function(e,n){for(var i=n.texArray,o=n.type,s=n.size,l=n.start,h=i.count,f=0;f<h;f++)e.texture.bind(i.elements[f],f);e.geometry.draw(o,s,l)},r.prototype._resolveDirectShader=function(e){var n=this.shader,i=this.pluginName;if(!n){if(!Qs[i]){for(var o=e.plugins[i].MAX_TEXTURES,s=new Int32Array(o),l=0;l<o;l++)s[l]=l;var h={tint:new Float32Array([1,1,1,1]),translationMatrix:new Rt,default:br.from({uSamplers:s},!0)},f=e.plugins[i]._shader.program;Qs[i]=new Le(f,h)}n=Qs[i]}return n},r.prototype._calculateBounds=function(){this.finishPoly();var e=this._geometry;if(!!e.graphicsData.length){var n=e.bounds,i=n.minX,o=n.minY,s=n.maxX,l=n.maxY;this._bounds.addFrame(this.transform,i,o,s,l)}},r.prototype.containsPoint=function(e){return this.worldTransform.applyInverse(e,r._TEMP_POINT),this._geometry.containsPoint(r._TEMP_POINT)},r.prototype.calculateTints=function(){if(this.batchTint!==this.tint){this.batchTint=this.tint;for(var e=Gt(this.tint,UT),n=0;n<this.batches.length;n++){var i=this.batches[n],o=i._batchRGB,s=e[0]*o[0]*255,l=e[1]*o[1]*255,h=e[2]*o[2]*255,f=(s<<16)+(l<<8)+(h|0);i._tintRGB=(f>>16)+(f&65280)+((f&255)<<16)}}},r.prototype.calculateVertices=function(){var e=this.transform._worldID;if(this._transformID!==e){this._transformID=e;for(var n=this.transform.worldTransform,i=n.a,o=n.b,s=n.c,l=n.d,h=n.tx,f=n.ty,d=this._geometry.points,v=this.vertexData,m=0,_=0;_<d.length;_+=2){var g=d[_],b=d[_+1];v[m++]=i*g+s*b+h,v[m++]=l*b+o*g+f}}},r.prototype.closePath=function(){var e=this.currentPath;return e&&(e.closeStroke=!0,this.finishPoly()),this},r.prototype.setMatrix=function(e){return this._matrix=e,this},r.prototype.beginHole=function(){return this.finishPoly(),this._holeMode=!0,this},r.prototype.endHole=function(){return this.finishPoly(),this._holeMode=!1,this},r.prototype.destroy=function(e){this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,t.prototype.destroy.call(this,e)},r.nextRoundedRectBehavior=!1,r._TEMP_POINT=new ct,r}(Ht),LT={buildPoly:nu,buildCircle:ai,buildRectangle:$p,buildRoundedRectangle:Wp,buildLine:Ha,ArcUtils:Xa,BezierUtils:qp,QuadraticUtils:Yp,BatchPart:Kp,FILL_COMMANDS:ho,BATCH_POOL:za,DRAW_CALL_POOL:jn};/*!
 * @pixi/sprite - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/sprite is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var $a=function(t,r){return $a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},$a(t,r)};function FT(t,r){$a(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var kn=new ct,MT=new Uint16Array([0,1,2,0,2,3]),wi=function(t){FT(r,t);function r(e){var n=t.call(this)||this;return n._anchor=new _r(n._onAnchorUpdate,n,e?e.defaultAnchor.x:0,e?e.defaultAnchor.y:0),n._texture=null,n._width=0,n._height=0,n._tint=null,n._tintRGB=null,n.tint=16777215,n.blendMode=Z.NORMAL,n._cachedTint=16777215,n.uvs=null,n.texture=e||tt.EMPTY,n.vertexData=new Float32Array(8),n.vertexTrimmedData=null,n._transformID=-1,n._textureID=-1,n._transformTrimmedID=-1,n._textureTrimmedID=-1,n.indices=MT,n.pluginName="batch",n.isSprite=!0,n._roundPixels=X.ROUND_PIXELS,n}return r.prototype._onTextureUpdate=function(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=qr(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=qr(this.scale.y)*this._height/this._texture.orig.height)},r.prototype._onAnchorUpdate=function(){this._transformID=-1,this._transformTrimmedID=-1},r.prototype.calculateVertices=function(){var e=this._texture;if(!(this._transformID===this.transform._worldID&&this._textureID===e._updateID)){this._textureID!==e._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=e._updateID;var n=this.transform.worldTransform,i=n.a,o=n.b,s=n.c,l=n.d,h=n.tx,f=n.ty,d=this.vertexData,v=e.trim,m=e.orig,_=this._anchor,g=0,b=0,y=0,w=0;if(v?(b=v.x-_._x*m.width,g=b+v.width,w=v.y-_._y*m.height,y=w+v.height):(b=-_._x*m.width,g=b+m.width,w=-_._y*m.height,y=w+m.height),d[0]=i*b+s*w+h,d[1]=l*w+o*b+f,d[2]=i*g+s*w+h,d[3]=l*w+o*g+f,d[4]=i*g+s*y+h,d[5]=l*y+o*g+f,d[6]=i*b+s*y+h,d[7]=l*y+o*b+f,this._roundPixels)for(var C=X.RESOLUTION,T=0;T<d.length;++T)d[T]=Math.round((d[T]*C|0)/C)}},r.prototype.calculateTrimmedVertices=function(){if(!this.vertexTrimmedData)this.vertexTrimmedData=new Float32Array(8);else if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return;this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;var e=this._texture,n=this.vertexTrimmedData,i=e.orig,o=this._anchor,s=this.transform.worldTransform,l=s.a,h=s.b,f=s.c,d=s.d,v=s.tx,m=s.ty,_=-o._x*i.width,g=_+i.width,b=-o._y*i.height,y=b+i.height;n[0]=l*_+f*b+v,n[1]=d*b+h*_+m,n[2]=l*g+f*b+v,n[3]=d*b+h*g+m,n[4]=l*g+f*y+v,n[5]=d*y+h*g+m,n[6]=l*_+f*y+v,n[7]=d*y+h*_+m},r.prototype._render=function(e){this.calculateVertices(),e.batch.setObjectRenderer(e.plugins[this.pluginName]),e.plugins[this.pluginName].render(this)},r.prototype._calculateBounds=function(){var e=this._texture.trim,n=this._texture.orig;!e||e.width===n.width&&e.height===n.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))},r.prototype.getLocalBounds=function(e){return this.children.length===0?(this._localBounds||(this._localBounds=new nn),this._localBounds.minX=this._texture.orig.width*-this._anchor._x,this._localBounds.minY=this._texture.orig.height*-this._anchor._y,this._localBounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._localBounds.maxY=this._texture.orig.height*(1-this._anchor._y),e||(this._localBoundsRect||(this._localBoundsRect=new mt),e=this._localBoundsRect),this._localBounds.getRectangle(e)):t.prototype.getLocalBounds.call(this,e)},r.prototype.containsPoint=function(e){this.worldTransform.applyInverse(e,kn);var n=this._texture.orig.width,i=this._texture.orig.height,o=-n*this.anchor.x,s=0;return kn.x>=o&&kn.x<o+n&&(s=-i*this.anchor.y,kn.y>=s&&kn.y<s+i)},r.prototype.destroy=function(e){t.prototype.destroy.call(this,e),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null;var n=typeof e=="boolean"?e:e&&e.texture;if(n){var i=typeof e=="boolean"?e:e&&e.baseTexture;this._texture.destroy(!!i)}this._texture=null},r.from=function(e,n){var i=e instanceof tt?e:tt.from(e,n);return new r(i)},Object.defineProperty(r.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(e){this._roundPixels!==e&&(this._transformID=-1),this._roundPixels=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return Math.abs(this.scale.x)*this._texture.orig.width},set:function(e){var n=qr(this.scale.x)||1;this.scale.x=n*e/this._texture.orig.width,this._width=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return Math.abs(this.scale.y)*this._texture.orig.height},set:function(e){var n=qr(this.scale.y)||1;this.scale.y=n*e/this._texture.orig.height,this._height=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"anchor",{get:function(){return this._anchor},set:function(e){this._anchor.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"tint",{get:function(){return this._tint},set:function(e){this._tint=e,this._tintRGB=(e>>16)+(e&65280)+((e&255)<<16)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"texture",{get:function(){return this._texture},set:function(e){this._texture!==e&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=e||tt.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,e&&(e.baseTexture.valid?this._onTextureUpdate():e.once("update",this._onTextureUpdate,this)))},enumerable:!1,configurable:!0}),r}(Ht);/*!
 * @pixi/text - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/text is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Wa=function(t,r){return Wa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},Wa(t,r)};function kT(t,r){Wa(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var li;(function(t){t[t.LINEAR_VERTICAL=0]="LINEAR_VERTICAL",t[t.LINEAR_HORIZONTAL=1]="LINEAR_HORIZONTAL"})(li||(li={}));var ta={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGradientType:li.LINEAR_VERTICAL,fillGradientStops:[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100,leading:0},BT=["serif","sans-serif","monospace","cursive","fantasy","system-ui"],on=function(){function t(r){this.styleID=0,this.reset(),ra(this,r,r)}return t.prototype.clone=function(){var r={};return ra(r,this,ta),new t(r)},t.prototype.reset=function(){ra(this,ta,ta)},Object.defineProperty(t.prototype,"align",{get:function(){return this._align},set:function(r){this._align!==r&&(this._align=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"breakWords",{get:function(){return this._breakWords},set:function(r){this._breakWords!==r&&(this._breakWords=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dropShadow",{get:function(){return this._dropShadow},set:function(r){this._dropShadow!==r&&(this._dropShadow=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dropShadowAlpha",{get:function(){return this._dropShadowAlpha},set:function(r){this._dropShadowAlpha!==r&&(this._dropShadowAlpha=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dropShadowAngle",{get:function(){return this._dropShadowAngle},set:function(r){this._dropShadowAngle!==r&&(this._dropShadowAngle=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dropShadowBlur",{get:function(){return this._dropShadowBlur},set:function(r){this._dropShadowBlur!==r&&(this._dropShadowBlur=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dropShadowColor",{get:function(){return this._dropShadowColor},set:function(r){var e=ea(r);this._dropShadowColor!==e&&(this._dropShadowColor=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dropShadowDistance",{get:function(){return this._dropShadowDistance},set:function(r){this._dropShadowDistance!==r&&(this._dropShadowDistance=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fill",{get:function(){return this._fill},set:function(r){var e=ea(r);this._fill!==e&&(this._fill=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fillGradientType",{get:function(){return this._fillGradientType},set:function(r){this._fillGradientType!==r&&(this._fillGradientType=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fillGradientStops",{get:function(){return this._fillGradientStops},set:function(r){GT(this._fillGradientStops,r)||(this._fillGradientStops=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fontFamily",{get:function(){return this._fontFamily},set:function(r){this.fontFamily!==r&&(this._fontFamily=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fontSize",{get:function(){return this._fontSize},set:function(r){this._fontSize!==r&&(this._fontSize=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fontStyle",{get:function(){return this._fontStyle},set:function(r){this._fontStyle!==r&&(this._fontStyle=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fontVariant",{get:function(){return this._fontVariant},set:function(r){this._fontVariant!==r&&(this._fontVariant=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(r){this._fontWeight!==r&&(this._fontWeight=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(r){this._letterSpacing!==r&&(this._letterSpacing=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lineHeight",{get:function(){return this._lineHeight},set:function(r){this._lineHeight!==r&&(this._lineHeight=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"leading",{get:function(){return this._leading},set:function(r){this._leading!==r&&(this._leading=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lineJoin",{get:function(){return this._lineJoin},set:function(r){this._lineJoin!==r&&(this._lineJoin=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"miterLimit",{get:function(){return this._miterLimit},set:function(r){this._miterLimit!==r&&(this._miterLimit=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"padding",{get:function(){return this._padding},set:function(r){this._padding!==r&&(this._padding=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"stroke",{get:function(){return this._stroke},set:function(r){var e=ea(r);this._stroke!==e&&(this._stroke=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"strokeThickness",{get:function(){return this._strokeThickness},set:function(r){this._strokeThickness!==r&&(this._strokeThickness=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"textBaseline",{get:function(){return this._textBaseline},set:function(r){this._textBaseline!==r&&(this._textBaseline=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"trim",{get:function(){return this._trim},set:function(r){this._trim!==r&&(this._trim=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"whiteSpace",{get:function(){return this._whiteSpace},set:function(r){this._whiteSpace!==r&&(this._whiteSpace=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wordWrap",{get:function(){return this._wordWrap},set:function(r){this._wordWrap!==r&&(this._wordWrap=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wordWrapWidth",{get:function(){return this._wordWrapWidth},set:function(r){this._wordWrapWidth!==r&&(this._wordWrapWidth=r,this.styleID++)},enumerable:!1,configurable:!0}),t.prototype.toFontString=function(){var r=typeof this.fontSize=="number"?this.fontSize+"px":this.fontSize,e=this.fontFamily;Array.isArray(this.fontFamily)||(e=this.fontFamily.split(","));for(var n=e.length-1;n>=0;n--){var i=e[n].trim();!/([\"\'])[^\'\"]+\1/.test(i)&&BT.indexOf(i)<0&&(i='"'+i+'"'),e[n]=i}return this.fontStyle+" "+this.fontVariant+" "+this.fontWeight+" "+r+" "+e.join(",")},t}();function pf(t){return typeof t=="number"?pp(t):(typeof t=="string"&&t.indexOf("0x")===0&&(t=t.replace("0x","#")),t)}function ea(t){if(Array.isArray(t)){for(var r=0;r<t.length;++r)t[r]=pf(t[r]);return t}else return pf(t)}function GT(t,r){if(!Array.isArray(t)||!Array.isArray(r)||t.length!==r.length)return!1;for(var e=0;e<t.length;++e)if(t[e]!==r[e])return!1;return!0}function ra(t,r,e){for(var n in e)Array.isArray(r[n])?t[n]=r[n].slice():t[n]=r[n]}var we=function(){function t(r,e,n,i,o,s,l,h,f){this.text=r,this.style=e,this.width=n,this.height=i,this.lines=o,this.lineWidths=s,this.lineHeight=l,this.maxLineWidth=h,this.fontProperties=f}return t.measureText=function(r,e,n,i){i===void 0&&(i=t._canvas),n=n==null?e.wordWrap:n;var o=e.toFontString(),s=t.measureFont(o);s.fontSize===0&&(s.fontSize=e.fontSize,s.ascent=e.fontSize);var l=i.getContext("2d");l.font=o;for(var h=n?t.wordWrap(r,e,i):r,f=h.split(/(?:\r\n|\r|\n)/),d=new Array(f.length),v=0,m=0;m<f.length;m++){var _=l.measureText(f[m]).width+(f[m].length-1)*e.letterSpacing;d[m]=_,v=Math.max(v,_)}var g=v+e.strokeThickness;e.dropShadow&&(g+=e.dropShadowDistance);var b=e.lineHeight||s.fontSize+e.strokeThickness,y=Math.max(b,s.fontSize+e.strokeThickness)+(f.length-1)*(b+e.leading);return e.dropShadow&&(y+=e.dropShadowDistance),new t(r,e,g,y,f,d,b+e.leading,v,s)},t.wordWrap=function(r,e,n){n===void 0&&(n=t._canvas);for(var i=n.getContext("2d"),o=0,s="",l="",h=Object.create(null),f=e.letterSpacing,d=e.whiteSpace,v=t.collapseSpaces(d),m=t.collapseNewlines(d),_=!v,g=e.wordWrapWidth+f,b=t.tokenize(r),y=0;y<b.length;y++){var w=b[y];if(t.isNewline(w)){if(!m){l+=t.addLine(s),_=!v,s="",o=0;continue}w=" "}if(v){var C=t.isBreakingSpace(w),T=t.isBreakingSpace(s[s.length-1]);if(C&&T)continue}var I=t.getFromCache(w,f,h,i);if(I>g)if(s!==""&&(l+=t.addLine(s),s="",o=0),t.canBreakWords(w,e.breakWords))for(var P=t.wordWrapSplit(w),E=0;E<P.length;E++){for(var S=P[E],L=1;P[E+L];){var A=P[E+L],U=S[S.length-1];if(!t.canBreakChars(U,A,w,E,e.breakWords))S+=A;else break;L++}E+=S.length-1;var j=t.getFromCache(S,f,h,i);j+o>g&&(l+=t.addLine(s),_=!1,s="",o=0),s+=S,o+=j}else{s.length>0&&(l+=t.addLine(s),s="",o=0);var q=y===b.length-1;l+=t.addLine(w,!q),_=!1,s="",o=0}else I+o>g&&(_=!1,l+=t.addLine(s),s="",o=0),(s.length>0||!t.isBreakingSpace(w)||_)&&(s+=w,o+=I)}return l+=t.addLine(s,!1),l},t.addLine=function(r,e){return e===void 0&&(e=!0),r=t.trimRight(r),r=e?r+`
`:r,r},t.getFromCache=function(r,e,n,i){var o=n[r];if(typeof o!="number"){var s=r.length*e;o=i.measureText(r).width+s,n[r]=o}return o},t.collapseSpaces=function(r){return r==="normal"||r==="pre-line"},t.collapseNewlines=function(r){return r==="normal"},t.trimRight=function(r){if(typeof r!="string")return"";for(var e=r.length-1;e>=0;e--){var n=r[e];if(!t.isBreakingSpace(n))break;r=r.slice(0,-1)}return r},t.isNewline=function(r){return typeof r!="string"?!1:t._newlines.indexOf(r.charCodeAt(0))>=0},t.isBreakingSpace=function(r,e){return typeof r!="string"?!1:t._breakingSpaces.indexOf(r.charCodeAt(0))>=0},t.tokenize=function(r){var e=[],n="";if(typeof r!="string")return e;for(var i=0;i<r.length;i++){var o=r[i],s=r[i+1];if(t.isBreakingSpace(o,s)||t.isNewline(o)){n!==""&&(e.push(n),n=""),e.push(o);continue}n+=o}return n!==""&&e.push(n),e},t.canBreakWords=function(r,e){return e},t.canBreakChars=function(r,e,n,i,o){return!0},t.wordWrapSplit=function(r){return r.split("")},t.measureFont=function(r){if(t._fonts[r])return t._fonts[r];var e={ascent:0,descent:0,fontSize:0},n=t._canvas,i=t._context;i.font=r;var o=t.METRICS_STRING+t.BASELINE_SYMBOL,s=Math.ceil(i.measureText(o).width),l=Math.ceil(i.measureText(t.BASELINE_SYMBOL).width),h=Math.ceil(t.HEIGHT_MULTIPLIER*l);l=l*t.BASELINE_MULTIPLIER|0,n.width=s,n.height=h,i.fillStyle="#f00",i.fillRect(0,0,s,h),i.font=r,i.textBaseline="alphabetic",i.fillStyle="#000",i.fillText(o,0,l);var f=i.getImageData(0,0,s,h).data,d=f.length,v=s*4,m=0,_=0,g=!1;for(m=0;m<l;++m){for(var b=0;b<v;b+=4)if(f[_+b]!==255){g=!0;break}if(!g)_+=v;else break}for(e.ascent=l-m,_=d-v,g=!1,m=h;m>l;--m){for(var b=0;b<v;b+=4)if(f[_+b]!==255){g=!0;break}if(!g)_-=v;else break}return e.descent=m-l,e.fontSize=e.ascent+e.descent,t._fonts[r]=e,e},t.clearMetrics=function(r){r===void 0&&(r=""),r?delete t._fonts[r]:t._fonts={}},Object.defineProperty(t,"_canvas",{get:function(){if(!t.__canvas){var r=void 0;try{var e=new OffscreenCanvas(0,0),n=e.getContext("2d");if(n&&n.measureText)return t.__canvas=e,e;r=X.ADAPTER.createCanvas()}catch{r=X.ADAPTER.createCanvas()}r.width=r.height=10,t.__canvas=r}return t.__canvas},enumerable:!1,configurable:!0}),Object.defineProperty(t,"_context",{get:function(){return t.__context||(t.__context=t._canvas.getContext("2d")),t.__context},enumerable:!1,configurable:!0}),t}();we._fonts={};we.METRICS_STRING="|\xC9q\xC5";we.BASELINE_SYMBOL="M";we.BASELINE_MULTIPLIER=1.4;we.HEIGHT_MULTIPLIER=2;we._newlines=[10,13];we._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];var DT={texture:!0,children:!1,baseTexture:!0},Zp=function(t){kT(r,t);function r(e,n,i){var o=this,s=!1;i||(i=X.ADAPTER.createCanvas(),s=!0),i.width=3,i.height=3;var l=tt.from(i);return l.orig=new mt,l.trim=new mt,o=t.call(this,l)||this,o._ownCanvas=s,o.canvas=i,o.context=i.getContext("2d"),o._resolution=X.RESOLUTION,o._autoResolution=!0,o._text=null,o._style=null,o._styleListener=null,o._font="",o.text=e,o.style=n,o.localStyleID=-1,o}return r.prototype.updateText=function(e){var n=this._style;if(this.localStyleID!==n.styleID&&(this.dirty=!0,this.localStyleID=n.styleID),!(!this.dirty&&e)){this._font=this._style.toFontString();var i=this.context,o=we.measureText(this._text||" ",this._style,this._style.wordWrap,this.canvas),s=o.width,l=o.height,h=o.lines,f=o.lineHeight,d=o.lineWidths,v=o.maxLineWidth,m=o.fontProperties;this.canvas.width=Math.ceil(Math.ceil(Math.max(1,s)+n.padding*2)*this._resolution),this.canvas.height=Math.ceil(Math.ceil(Math.max(1,l)+n.padding*2)*this._resolution),i.scale(this._resolution,this._resolution),i.clearRect(0,0,this.canvas.width,this.canvas.height),i.font=this._font,i.lineWidth=n.strokeThickness,i.textBaseline=n.textBaseline,i.lineJoin=n.lineJoin,i.miterLimit=n.miterLimit;for(var _,g,b=n.dropShadow?2:1,y=0;y<b;++y){var w=n.dropShadow&&y===0,C=w?Math.ceil(Math.max(1,l)+n.padding*2):0,T=C*this._resolution;if(w){i.fillStyle="black",i.strokeStyle="black";var I=n.dropShadowColor,P=Gt(typeof I=="number"?I:vp(I)),E=n.dropShadowBlur*this._resolution,S=n.dropShadowDistance*this._resolution;i.shadowColor="rgba("+P[0]*255+","+P[1]*255+","+P[2]*255+","+n.dropShadowAlpha+")",i.shadowBlur=E,i.shadowOffsetX=Math.cos(n.dropShadowAngle)*S,i.shadowOffsetY=Math.sin(n.dropShadowAngle)*S+T}else i.fillStyle=this._generateFillStyle(n,h,o),i.strokeStyle=n.stroke,i.shadowColor="black",i.shadowBlur=0,i.shadowOffsetX=0,i.shadowOffsetY=0;var L=(f-m.fontSize)/2;(!r.nextLineHeightBehavior||f-m.fontSize<0)&&(L=0);for(var A=0;A<h.length;A++)_=n.strokeThickness/2,g=n.strokeThickness/2+A*f+m.ascent+L,n.align==="right"?_+=v-d[A]:n.align==="center"&&(_+=(v-d[A])/2),n.stroke&&n.strokeThickness&&this.drawLetterSpacing(h[A],_+n.padding,g+n.padding-C,!0),n.fill&&this.drawLetterSpacing(h[A],_+n.padding,g+n.padding-C)}this.updateTexture()}},r.prototype.drawLetterSpacing=function(e,n,i,o){o===void 0&&(o=!1);var s=this._style,l=s.letterSpacing,h=r.experimentalLetterSpacing&&("letterSpacing"in CanvasRenderingContext2D.prototype||"textLetterSpacing"in CanvasRenderingContext2D.prototype);if(l===0||h){h&&(this.context.letterSpacing=l,this.context.textLetterSpacing=l),o?this.context.strokeText(e,n,i):this.context.fillText(e,n,i);return}for(var f=n,d=Array.from?Array.from(e):e.split(""),v=this.context.measureText(e).width,m=0,_=0;_<d.length;++_){var g=d[_];o?this.context.strokeText(g,f,i):this.context.fillText(g,f,i);for(var b="",y=_+1;y<d.length;++y)b+=d[y];m=this.context.measureText(b).width,f+=v-m+l,v=m}},r.prototype.updateTexture=function(){var e=this.canvas;if(this._style.trim){var n=Hx(e);n.data&&(e.width=n.width,e.height=n.height,this.context.putImageData(n.data,0,0))}var i=this._texture,o=this._style,s=o.trim?0:o.padding,l=i.baseTexture;i.trim.width=i._frame.width=e.width/this._resolution,i.trim.height=i._frame.height=e.height/this._resolution,i.trim.x=-s,i.trim.y=-s,i.orig.width=i._frame.width-s*2,i.orig.height=i._frame.height-s*2,this._onTextureUpdate(),l.setRealSize(e.width,e.height,this._resolution),i.updateUvs(),this.dirty=!1},r.prototype._render=function(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0),this.updateText(!0),t.prototype._render.call(this,e)},r.prototype.updateTransform=function(){this.updateText(!0),t.prototype.updateTransform.call(this)},r.prototype.getBounds=function(e,n){return this.updateText(!0),this._textureID===-1&&(e=!1),t.prototype.getBounds.call(this,e,n)},r.prototype.getLocalBounds=function(e){return this.updateText(!0),t.prototype.getLocalBounds.call(this,e)},r.prototype._calculateBounds=function(){this.calculateVertices(),this._bounds.addQuad(this.vertexData)},r.prototype._generateFillStyle=function(e,n,i){var o=e.fill;if(Array.isArray(o)){if(o.length===1)return o[0]}else return o;var s,l=e.dropShadow?e.dropShadowDistance:0,h=e.padding||0,f=this.canvas.width/this._resolution-l-h*2,d=this.canvas.height/this._resolution-l-h*2,v=o.slice(),m=e.fillGradientStops.slice();if(!m.length)for(var _=v.length+1,g=1;g<_;++g)m.push(g/_);if(v.unshift(o[0]),m.unshift(0),v.push(o[o.length-1]),m.push(1),e.fillGradientType===li.LINEAR_VERTICAL){s=this.context.createLinearGradient(f/2,h,f/2,d+h);for(var b=i.fontProperties.fontSize+e.strokeThickness,g=0;g<n.length;g++){var y=i.lineHeight*(g-1)+b,w=i.lineHeight*g,C=w;g>0&&y>w&&(C=(w+y)/2);var T=w+b,I=i.lineHeight*(g+1),P=T;g+1<n.length&&I<T&&(P=(T+I)/2);for(var E=(P-C)/d,S=0;S<v.length;S++){var L=0;typeof m[S]=="number"?L=m[S]:L=S/v.length;var A=Math.min(1,Math.max(0,C/d+L*E));A=Number(A.toFixed(5)),s.addColorStop(A,v[S])}}}else{s=this.context.createLinearGradient(h,d/2,f+h,d/2);for(var U=v.length+1,j=1,g=0;g<v.length;g++){var q=void 0;typeof m[g]=="number"?q=m[g]:q=j/U,s.addColorStop(q,v[g]),j++}}return s},r.prototype.destroy=function(e){typeof e=="boolean"&&(e={children:e}),e=Object.assign({},DT,e),t.prototype.destroy.call(this,e),this._ownCanvas&&(this.canvas.height=this.canvas.width=0),this.context=null,this.canvas=null,this._style=null},Object.defineProperty(r.prototype,"width",{get:function(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width},set:function(e){this.updateText(!0);var n=qr(this.scale.x)||1;this.scale.x=n*e/this._texture.orig.width,this._width=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},set:function(e){this.updateText(!0);var n=qr(this.scale.y)||1;this.scale.y=n*e/this._texture.orig.height,this._height=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"style",{get:function(){return this._style},set:function(e){e=e||{},e instanceof on?this._style=e:this._style=new on(e),this.localStyleID=-1,this.dirty=!0},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"text",{get:function(){return this._text},set:function(e){e=String(e==null?"":e),this._text!==e&&(this._text=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._autoResolution=!1,this._resolution!==e&&(this._resolution=e,this.dirty=!0)},enumerable:!1,configurable:!0}),r.nextLineHeightBehavior=!1,r.experimentalLetterSpacing=!1,r}(wi);/*!
 * @pixi/prepare - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/prepare is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */X.UPLOADS_PER_FRAME=4;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var qa=function(t,r){return qa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},qa(t,r)};function VT(t,r){qa(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var jT=function(){function t(r){this.maxItemsPerFrame=r,this.itemsLeft=0}return t.prototype.beginFrame=function(){this.itemsLeft=this.maxItemsPerFrame},t.prototype.allowedToUpload=function(){return this.itemsLeft-- >0},t}();function HT(t,r){var e=!1;if(t&&t._textures&&t._textures.length){for(var n=0;n<t._textures.length;n++)if(t._textures[n]instanceof tt){var i=t._textures[n].baseTexture;r.indexOf(i)===-1&&(r.push(i),e=!0)}}return e}function XT(t,r){if(t.baseTexture instanceof vt){var e=t.baseTexture;return r.indexOf(e)===-1&&r.push(e),!0}return!1}function zT(t,r){if(t._texture&&t._texture instanceof tt){var e=t._texture.baseTexture;return r.indexOf(e)===-1&&r.push(e),!0}return!1}function $T(t,r){return r instanceof Zp?(r.updateText(!0),!0):!1}function WT(t,r){if(r instanceof on){var e=r.toFontString();return we.measureFont(e),!0}return!1}function qT(t,r){if(t instanceof Zp){r.indexOf(t.style)===-1&&r.push(t.style),r.indexOf(t)===-1&&r.push(t);var e=t._texture.baseTexture;return r.indexOf(e)===-1&&r.push(e),!0}return!1}function YT(t,r){return t instanceof on?(r.indexOf(t)===-1&&r.push(t),!0):!1}var KT=function(){function t(r){var e=this;this.limiter=new jT(X.UPLOADS_PER_FRAME),this.renderer=r,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=function(){!e.queue||e.prepareItems()},this.registerFindHook(qT),this.registerFindHook(YT),this.registerFindHook(HT),this.registerFindHook(XT),this.registerFindHook(zT),this.registerUploadHook($T),this.registerUploadHook(WT)}return t.prototype.upload=function(r,e){var n=this;return typeof r=="function"&&(e=r,r=null),e&&xe("6.5.0","BasePrepare.upload callback is deprecated, use the return Promise instead."),new Promise(function(i){r&&n.add(r);var o=function(){e==null||e(),i()};n.queue.length?(n.completes.push(o),n.ticking||(n.ticking=!0,Vt.system.addOnce(n.tick,n,Me.UTILITY))):o()})},t.prototype.tick=function(){setTimeout(this.delayedTick,0)},t.prototype.prepareItems=function(){for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){var r=this.queue[0],e=!1;if(r&&!r._destroyed){for(var n=0,i=this.uploadHooks.length;n<i;n++)if(this.uploadHooks[n](this.uploadHookHelper,r)){this.queue.shift(),e=!0;break}}e||this.queue.shift()}if(this.queue.length)Vt.system.addOnce(this.tick,this,Me.UTILITY);else{this.ticking=!1;var o=this.completes.slice(0);this.completes.length=0;for(var n=0,i=o.length;n<i;n++)o[n]()}},t.prototype.registerFindHook=function(r){return r&&this.addHooks.push(r),this},t.prototype.registerUploadHook=function(r){return r&&this.uploadHooks.push(r),this},t.prototype.add=function(r){for(var e=0,n=this.addHooks.length;e<n&&!this.addHooks[e](r,this.queue);e++);if(r instanceof Ht)for(var e=r.children.length-1;e>=0;e--)this.add(r.children[e]);return this},t.prototype.destroy=function(){this.ticking&&Vt.system.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null},t}();function Jp(t,r){return r instanceof vt?(r._glTextures[t.CONTEXT_UID]||t.texture.bind(r),!0):!1}function ZT(t,r){if(!(r instanceof tr))return!1;var e=r.geometry;r.finishPoly(),e.updateBatches();for(var n=e.batches,i=0;i<n.length;i++){var o=n[i].style.texture;o&&Jp(t,o.baseTexture)}return e.batchable||t.geometry.bind(e,r._resolveDirectShader(t)),!0}function JT(t,r){return t instanceof tr?(r.push(t),!0):!1}var QT=function(t){VT(r,t);function r(e){var n=t.call(this,e)||this;return n.uploadHookHelper=n.renderer,n.registerFindHook(JT),n.registerUploadHook(Jp),n.registerUploadHook(ZT),n}return r.extension={name:"prepare",type:Tt.RendererPlugin},r}(KT);/*!
 * @pixi/spritesheet - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/spritesheet is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var tC=function(){function t(r,e,n){n===void 0&&(n=null),this.linkedSheets=[],this._texture=r instanceof tt?r:null,this.baseTexture=r instanceof vt?r:this._texture.baseTexture,this.textures={},this.animations={},this.data=e;var i=this.baseTexture.resource;this.resolution=this._updateResolution(n||(i?i.url:null)),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}return t.prototype._updateResolution=function(r){r===void 0&&(r=null);var e=this.data.meta.scale,n=_o(r,null);return n===null&&(n=e!==void 0?parseFloat(e):1),n!==1&&this.baseTexture.setResolution(n),n},t.prototype.parse=function(r){var e=this;return r&&xe("6.5.0","Spritesheet.parse callback is deprecated, use the return Promise instead."),new Promise(function(n){e._callback=function(i){r==null||r(i),n(i)},e._batchIndex=0,e._frameKeys.length<=t.BATCH_SIZE?(e._processFrames(0),e._processAnimations(),e._parseComplete()):e._nextBatch()})},t.prototype._processFrames=function(r){for(var e=r,n=t.BATCH_SIZE;e-r<n&&e<this._frameKeys.length;){var i=this._frameKeys[e],o=this._frames[i],s=o.frame;if(s){var l=null,h=null,f=o.trimmed!==!1&&o.sourceSize?o.sourceSize:o.frame,d=new mt(0,0,Math.floor(f.w)/this.resolution,Math.floor(f.h)/this.resolution);o.rotated?l=new mt(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.h)/this.resolution,Math.floor(s.w)/this.resolution):l=new mt(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution),o.trimmed!==!1&&o.spriteSourceSize&&(h=new mt(Math.floor(o.spriteSourceSize.x)/this.resolution,Math.floor(o.spriteSourceSize.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution)),this.textures[i]=new tt(this.baseTexture,l,d,h,o.rotated?2:0,o.anchor),tt.addToCache(this.textures[i],i)}e++}},t.prototype._processAnimations=function(){var r=this.data.animations||{};for(var e in r){this.animations[e]=[];for(var n=0;n<r[e].length;n++){var i=r[e][n];this.animations[e].push(this.textures[i])}}},t.prototype._parseComplete=function(){var r=this._callback;this._callback=null,this._batchIndex=0,r.call(this,this.textures)},t.prototype._nextBatch=function(){var r=this;this._processFrames(this._batchIndex*t.BATCH_SIZE),this._batchIndex++,setTimeout(function(){r._batchIndex*t.BATCH_SIZE<r._frameKeys.length?r._nextBatch():(r._processAnimations(),r._parseComplete())},0)},t.prototype.destroy=function(r){var e;r===void 0&&(r=!1);for(var n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,r&&((e=this._texture)===null||e===void 0||e.destroy(),this.baseTexture.destroy()),this._texture=null,this.baseTexture=null,this.linkedSheets=[]},t.BATCH_SIZE=1e3,t}(),eC=function(){function t(){}return t.use=function(r,e){var n,i,o=this,s=r.name+"_image";if(!r.data||r.type!==Ot.TYPE.JSON||!r.data.frames||o.resources[s]){e();return}var l=(i=(n=r.data)===null||n===void 0?void 0:n.meta)===null||i===void 0?void 0:i.related_multi_packs;if(Array.isArray(l))for(var h=function(g){if(typeof g!="string")return"continue";var b=g.replace(".json",""),y=Wr.resolve(r.url.replace(o.baseUrl,""),g);if(o.resources[b]||Object.values(o.resources).some(function(C){return Wr.format(Wr.parse(C.url))===y}))return"continue";var w={crossOrigin:r.crossOrigin,loadType:Ot.LOAD_TYPE.XHR,xhrType:Ot.XHR_RESPONSE_TYPE.JSON,parentResource:r,metadata:r.metadata};o.add(b,y,w)},f=0,d=l;f<d.length;f++){var v=d[f];h(v)}var m={crossOrigin:r.crossOrigin,metadata:r.metadata.imageMetadata,parentResource:r},_=t.getResourcePath(r,o.baseUrl);o.add(s,_,m,function(b){if(b.error){e(b.error);return}var y=new tC(b.texture,r.data,r.url);y.parse().then(function(){r.spritesheet=y,r.textures=y.textures,e()})})},t.getResourcePath=function(r,e){return r.isDataUrl?r.data.meta.image:Wr.resolve(r.url.replace(e,""),r.data.meta.image)},t.extension=Tt.Loader,t}();/*!
 * @pixi/sprite-tiling - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/sprite-tiling is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ya=function(t,r){return Ya=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},Ya(t,r)};function Qp(t,r){Ya(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var Bn=new ct;(function(t){Qp(r,t);function r(e,n,i){n===void 0&&(n=100),i===void 0&&(i=100);var o=t.call(this,e)||this;return o.tileTransform=new Cp,o._width=n,o._height=i,o.uvMatrix=o.texture.uvMatrix||new tu(e),o.pluginName="tilingSprite",o.uvRespectAnchor=!1,o}return Object.defineProperty(r.prototype,"clampMargin",{get:function(){return this.uvMatrix.clampMargin},set:function(e){this.uvMatrix.clampMargin=e,this.uvMatrix.update(!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"tileScale",{get:function(){return this.tileTransform.scale},set:function(e){this.tileTransform.scale.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"tilePosition",{get:function(){return this.tileTransform.position},set:function(e){this.tileTransform.position.copyFrom(e)},enumerable:!1,configurable:!0}),r.prototype._onTextureUpdate=function(){this.uvMatrix&&(this.uvMatrix.texture=this._texture),this._cachedTint=16777215},r.prototype._render=function(e){var n=this._texture;!n||!n.valid||(this.tileTransform.updateLocalTransform(),this.uvMatrix.update(),e.batch.setObjectRenderer(e.plugins[this.pluginName]),e.plugins[this.pluginName].render(this))},r.prototype._calculateBounds=function(){var e=this._width*-this._anchor._x,n=this._height*-this._anchor._y,i=this._width*(1-this._anchor._x),o=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,e,n,i,o)},r.prototype.getLocalBounds=function(e){return this.children.length===0?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),e||(this._localBoundsRect||(this._localBoundsRect=new mt),e=this._localBoundsRect),this._bounds.getRectangle(e)):t.prototype.getLocalBounds.call(this,e)},r.prototype.containsPoint=function(e){this.worldTransform.applyInverse(e,Bn);var n=this._width,i=this._height,o=-n*this.anchor._x;if(Bn.x>=o&&Bn.x<o+n){var s=-i*this.anchor._y;if(Bn.y>=s&&Bn.y<s+i)return!0}return!1},r.prototype.destroy=function(e){t.prototype.destroy.call(this,e),this.tileTransform=null,this.uvMatrix=null},r.from=function(e,n){var i=e instanceof tt?e:tt.from(e,n);return new r(i,n.width,n.height)},Object.defineProperty(r.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e},enumerable:!1,configurable:!0}),r})(wi);var rC=`#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`,vf=`#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,nC=`#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,iC=`#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,oC=`#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,io=new Rt,sC=function(t){Qp(r,t);function r(e){var n=t.call(this,e)||this;return e.runners.contextChange.add(n),n.quad=new Op,n.state=er.for2d(),n}return r.prototype.contextChange=function(){var e=this.renderer,n={globals:e.globalUniforms};this.simpleShader=Le.from(vf,rC,n),this.shader=e.context.webGLVersion>1?Le.from(iC,oC,n):Le.from(vf,nC,n)},r.prototype.render=function(e){var n=this.renderer,i=this.quad,o=i.vertices;o[0]=o[6]=e._width*-e.anchor.x,o[1]=o[3]=e._height*-e.anchor.y,o[2]=o[4]=e._width*(1-e.anchor.x),o[5]=o[7]=e._height*(1-e.anchor.y);var s=e.uvRespectAnchor?e.anchor.x:0,l=e.uvRespectAnchor?e.anchor.y:0;o=i.uvs,o[0]=o[6]=-s,o[1]=o[3]=-l,o[2]=o[4]=1-s,o[5]=o[7]=1-l,i.invalidate();var h=e._texture,f=h.baseTexture,d=f.alphaMode>0,v=e.tileTransform.localTransform,m=e.uvMatrix,_=f.isPowerOfTwo&&h.frame.width===f.width&&h.frame.height===f.height;_&&(f._glTextures[n.CONTEXT_UID]?_=f.wrapMode!==ye.CLAMP:f.wrapMode===ye.CLAMP&&(f.wrapMode=ye.REPEAT));var g=_?this.simpleShader:this.shader,b=h.width,y=h.height,w=e._width,C=e._height;io.set(v.a*b/w,v.b*b/C,v.c*y/w,v.d*y/C,v.tx/w,v.ty/C),io.invert(),_?io.prepend(m.mapCoord):(g.uniforms.uMapCoord=m.mapCoord.toArray(!0),g.uniforms.uClampFrame=m.uClampFrame,g.uniforms.uClampOffset=m.uClampOffset),g.uniforms.uTransform=io.toArray(!0),g.uniforms.uColor=gp(e.tint,e.worldAlpha,g.uniforms.uColor,d),g.uniforms.translationMatrix=e.transform.worldTransform.toArray(!0),g.uniforms.uSampler=h,n.shader.bind(g),n.geometry.bind(i),this.state.blendMode=_p(e.blendMode,d),n.state.set(this.state),n.geometry.draw(this.renderer.gl.TRIANGLES,6,0)},r.extension={name:"tilingSprite",type:Tt.RendererPlugin},r}(Do);/*!
 * @pixi/mesh - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/mesh is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ka=function(t,r){return Ka=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},Ka(t,r)};function iu(t,r){Ka(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var aC=function(){function t(r,e){this.uvBuffer=r,this.uvMatrix=e,this.data=null,this._bufferUpdateId=-1,this._textureUpdateId=-1,this._updateID=0}return t.prototype.update=function(r){if(!(!r&&this._bufferUpdateId===this.uvBuffer._updateID&&this._textureUpdateId===this.uvMatrix._updateID)){this._bufferUpdateId=this.uvBuffer._updateID,this._textureUpdateId=this.uvMatrix._updateID;var e=this.uvBuffer.data;(!this.data||this.data.length!==e.length)&&(this.data=new Float32Array(e.length)),this.uvMatrix.multiplyUvs(e,this.data),this._updateID++}},t}(),na=new ct,mf=new yr,ui=function(t){iu(r,t);function r(e,n,i,o){o===void 0&&(o=te.TRIANGLES);var s=t.call(this)||this;return s.geometry=e,s.shader=n,s.state=i||er.for2d(),s.drawMode=o,s.start=0,s.size=0,s.uvs=null,s.indices=null,s.vertexData=new Float32Array(1),s.vertexDirty=-1,s._transformID=-1,s._roundPixels=X.ROUND_PIXELS,s.batchUvs=null,s}return Object.defineProperty(r.prototype,"geometry",{get:function(){return this._geometry},set:function(e){this._geometry!==e&&(this._geometry&&(this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose()),this._geometry=e,this._geometry&&this._geometry.refCount++,this.vertexDirty=-1)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"uvBuffer",{get:function(){return this.geometry.buffers[1]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"verticesBuffer",{get:function(){return this.geometry.buffers[0]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"material",{get:function(){return this.shader},set:function(e){this.shader=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(e){this.state.blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(e){this._roundPixels!==e&&(this._transformID=-1),this._roundPixels=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"tint",{get:function(){return"tint"in this.shader?this.shader.tint:null},set:function(e){this.shader.tint=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"texture",{get:function(){return"texture"in this.shader?this.shader.texture:null},set:function(e){this.shader.texture=e},enumerable:!1,configurable:!0}),r.prototype._render=function(e){var n=this.geometry.buffers[0].data,i=this.shader;i.batchable&&this.drawMode===te.TRIANGLES&&n.length<r.BATCHABLE_SIZE*2?this._renderToBatch(e):this._renderDefault(e)},r.prototype._renderDefault=function(e){var n=this.shader;n.alpha=this.worldAlpha,n.update&&n.update(),e.batch.flush(),n.uniforms.translationMatrix=this.transform.worldTransform.toArray(!0),e.shader.bind(n),e.state.set(this.state),e.geometry.bind(this.geometry,n),e.geometry.draw(this.drawMode,this.size,this.start,this.geometry.instanceCount)},r.prototype._renderToBatch=function(e){var n=this.geometry,i=this.shader;i.uvMatrix&&(i.uvMatrix.update(),this.calculateUvs()),this.calculateVertices(),this.indices=n.indexBuffer.data,this._tintRGB=i._tintRGB,this._texture=i.texture;var o=this.material.pluginName;e.batch.setObjectRenderer(e.plugins[o]),e.plugins[o].render(this)},r.prototype.calculateVertices=function(){var e=this.geometry,n=e.buffers[0],i=n.data,o=n._updateID;if(!(o===this.vertexDirty&&this._transformID===this.transform._worldID)){this._transformID=this.transform._worldID,this.vertexData.length!==i.length&&(this.vertexData=new Float32Array(i.length));for(var s=this.transform.worldTransform,l=s.a,h=s.b,f=s.c,d=s.d,v=s.tx,m=s.ty,_=this.vertexData,g=0;g<_.length/2;g++){var b=i[g*2],y=i[g*2+1];_[g*2]=l*b+f*y+v,_[g*2+1]=h*b+d*y+m}if(this._roundPixels)for(var w=X.RESOLUTION,g=0;g<_.length;++g)_[g]=Math.round((_[g]*w|0)/w);this.vertexDirty=o}},r.prototype.calculateUvs=function(){var e=this.geometry.buffers[1],n=this.shader;n.uvMatrix.isSimple?this.uvs=e.data:(this.batchUvs||(this.batchUvs=new aC(e,n.uvMatrix)),this.batchUvs.update(),this.uvs=this.batchUvs.data)},r.prototype._calculateBounds=function(){this.calculateVertices(),this._bounds.addVertexData(this.vertexData,0,this.vertexData.length)},r.prototype.containsPoint=function(e){if(!this.getBounds().contains(e.x,e.y))return!1;this.worldTransform.applyInverse(e,na);for(var n=this.geometry.getBuffer("aVertexPosition").data,i=mf.points,o=this.geometry.getIndex().data,s=o.length,l=this.drawMode===4?3:1,h=0;h+2<s;h+=l){var f=o[h]*2,d=o[h+1]*2,v=o[h+2]*2;if(i[0]=n[f],i[1]=n[f+1],i[2]=n[d],i[3]=n[d+1],i[4]=n[v],i[5]=n[v+1],mf.contains(na.x,na.y))return!0}return!1},r.prototype.destroy=function(e){t.prototype.destroy.call(this,e),this._cachedTexture&&(this._cachedTexture.destroy(),this._cachedTexture=null),this.geometry=null,this.shader=null,this.state=null,this.uvs=null,this.indices=null,this.vertexData=null},r.BATCHABLE_SIZE=100,r}(Ht),lC=`varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,uC=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`,hi=function(t){iu(r,t);function r(e,n){var i=this,o={uSampler:e,alpha:1,uTextureMatrix:Rt.IDENTITY,uColor:new Float32Array([1,1,1,1])};return n=Object.assign({tint:16777215,alpha:1,pluginName:"batch"},n),n.uniforms&&Object.assign(o,n.uniforms),i=t.call(this,n.program||an.from(uC,lC),o)||this,i._colorDirty=!1,i.uvMatrix=new tu(e),i.batchable=n.program===void 0,i.pluginName=n.pluginName,i.tint=n.tint,i.alpha=n.alpha,i}return Object.defineProperty(r.prototype,"texture",{get:function(){return this.uniforms.uSampler},set:function(e){this.uniforms.uSampler!==e&&(!this.uniforms.uSampler.baseTexture.alphaMode!=!e.baseTexture.alphaMode&&(this._colorDirty=!0),this.uniforms.uSampler=e,this.uvMatrix.texture=e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this._alpha},set:function(e){e!==this._alpha&&(this._alpha=e,this._colorDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"tint",{get:function(){return this._tint},set:function(e){e!==this._tint&&(this._tint=e,this._tintRGB=(e>>16)+(e&65280)+((e&255)<<16),this._colorDirty=!0)},enumerable:!1,configurable:!0}),r.prototype.update=function(){if(this._colorDirty){this._colorDirty=!1;var e=this.texture.baseTexture;gp(this._tint,this._alpha,this.uniforms.uColor,e.alphaMode)}this.uvMatrix.update()&&(this.uniforms.uTextureMatrix=this.uvMatrix.mapCoord)},r}(Le),Vo=function(t){iu(r,t);function r(e,n,i){var o=t.call(this)||this,s=new Lt(e),l=new Lt(n,!0),h=new Lt(i,!0,!0);return o.addAttribute("aVertexPosition",s,2,!1,Y.FLOAT).addAttribute("aTextureCoord",l,2,!1,Y.FLOAT).addIndex(h),o._updateId=-1,o}return Object.defineProperty(r.prototype,"vertexDirtyId",{get:function(){return this.buffers[0]._updateID},enumerable:!1,configurable:!0}),r}(sn);/*!
 * @pixi/text-bitmap - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/text-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Za=function(t,r){return Za=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},Za(t,r)};function hC(t,r){Za(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var xo=function(){function t(){this.info=[],this.common=[],this.page=[],this.char=[],this.kerning=[],this.distanceField=[]}return t}(),cC=function(){function t(){}return t.test=function(r){return typeof r=="string"&&r.indexOf("info face=")===0},t.parse=function(r){var e=r.match(/^[a-z]+\s+.+$/gm),n={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(var i in e){var o=e[i].match(/^[a-z]+/gm)[0],s=e[i].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),l={};for(var h in s){var f=s[h].split("="),d=f[0],v=f[1].replace(/"/gm,""),m=parseFloat(v),_=isNaN(m)?v:m;l[d]=_}n[o].push(l)}var g=new xo;return n.info.forEach(function(b){return g.info.push({face:b.face,size:parseInt(b.size,10)})}),n.common.forEach(function(b){return g.common.push({lineHeight:parseInt(b.lineHeight,10)})}),n.page.forEach(function(b){return g.page.push({id:parseInt(b.id,10),file:b.file})}),n.char.forEach(function(b){return g.char.push({id:parseInt(b.id,10),page:parseInt(b.page,10),x:parseInt(b.x,10),y:parseInt(b.y,10),width:parseInt(b.width,10),height:parseInt(b.height,10),xoffset:parseInt(b.xoffset,10),yoffset:parseInt(b.yoffset,10),xadvance:parseInt(b.xadvance,10)})}),n.kerning.forEach(function(b){return g.kerning.push({first:parseInt(b.first,10),second:parseInt(b.second,10),amount:parseInt(b.amount,10)})}),n.distanceField.forEach(function(b){return g.distanceField.push({distanceRange:parseInt(b.distanceRange,10),fieldType:b.fieldType})}),g},t}(),Ja=function(){function t(){}return t.test=function(r){return r instanceof XMLDocument&&r.getElementsByTagName("page").length&&r.getElementsByTagName("info")[0].getAttribute("face")!==null},t.parse=function(r){for(var e=new xo,n=r.getElementsByTagName("info"),i=r.getElementsByTagName("common"),o=r.getElementsByTagName("page"),s=r.getElementsByTagName("char"),l=r.getElementsByTagName("kerning"),h=r.getElementsByTagName("distanceField"),f=0;f<n.length;f++)e.info.push({face:n[f].getAttribute("face"),size:parseInt(n[f].getAttribute("size"),10)});for(var f=0;f<i.length;f++)e.common.push({lineHeight:parseInt(i[f].getAttribute("lineHeight"),10)});for(var f=0;f<o.length;f++)e.page.push({id:parseInt(o[f].getAttribute("id"),10)||0,file:o[f].getAttribute("file")});for(var f=0;f<s.length;f++){var d=s[f];e.char.push({id:parseInt(d.getAttribute("id"),10),page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xoffset:parseInt(d.getAttribute("xoffset"),10),yoffset:parseInt(d.getAttribute("yoffset"),10),xadvance:parseInt(d.getAttribute("xadvance"),10)})}for(var f=0;f<l.length;f++)e.kerning.push({first:parseInt(l[f].getAttribute("first"),10),second:parseInt(l[f].getAttribute("second"),10),amount:parseInt(l[f].getAttribute("amount"),10)});for(var f=0;f<h.length;f++)e.distanceField.push({fieldType:h[f].getAttribute("fieldType"),distanceRange:parseInt(h[f].getAttribute("distanceRange"),10)});return e},t}(),fC=function(){function t(){}return t.test=function(r){if(typeof r=="string"&&r.indexOf("<font>")>-1){var e=new globalThis.DOMParser().parseFromString(r,"text/xml");return Ja.test(e)}return!1},t.parse=function(r){var e=new globalThis.DOMParser().parseFromString(r,"text/xml");return Ja.parse(e)},t}(),ia=[cC,Ja,fC];function tv(t){for(var r=0;r<ia.length;r++)if(ia[r].test(t))return ia[r];return null}function dC(t,r,e,n,i,o){var s=e.fill;if(Array.isArray(s)){if(s.length===1)return s[0]}else return s;var l,h=e.dropShadow?e.dropShadowDistance:0,f=e.padding||0,d=t.width/n-h-f*2,v=t.height/n-h-f*2,m=s.slice(),_=e.fillGradientStops.slice();if(!_.length)for(var g=m.length+1,b=1;b<g;++b)_.push(b/g);if(m.unshift(s[0]),_.unshift(0),m.push(s[s.length-1]),_.push(1),e.fillGradientType===li.LINEAR_VERTICAL){l=r.createLinearGradient(d/2,f,d/2,v+f);for(var y=0,w=o.fontProperties.fontSize+e.strokeThickness,C=w/v,b=0;b<i.length;b++)for(var T=o.lineHeight*b,I=0;I<m.length;I++){var P=0;typeof _[I]=="number"?P=_[I]:P=I/m.length;var E=T/v+P*C,S=Math.max(y,E);S=Math.min(S,1),l.addColorStop(S,m[I]),y=S}}else{l=r.createLinearGradient(f,v/2,d+f,v/2);for(var L=m.length+1,A=1,b=0;b<m.length;b++){var U=void 0;typeof _[b]=="number"?U=_[b]:U=A/L,l.addColorStop(U,m[b]),A++}}return l}function pC(t,r,e,n,i,o,s){var l=e.text,h=e.fontProperties;r.translate(n,i),r.scale(o,o);var f=s.strokeThickness/2,d=-(s.strokeThickness/2);if(r.font=s.toFontString(),r.lineWidth=s.strokeThickness,r.textBaseline=s.textBaseline,r.lineJoin=s.lineJoin,r.miterLimit=s.miterLimit,r.fillStyle=dC(t,r,s,o,[l],e),r.strokeStyle=s.stroke,s.dropShadow){var v=s.dropShadowColor,m=Gt(typeof v=="number"?v:vp(v)),_=s.dropShadowBlur*o,g=s.dropShadowDistance*o;r.shadowColor="rgba("+m[0]*255+","+m[1]*255+","+m[2]*255+","+s.dropShadowAlpha+")",r.shadowBlur=_,r.shadowOffsetX=Math.cos(s.dropShadowAngle)*g,r.shadowOffsetY=Math.sin(s.dropShadowAngle)*g}else r.shadowColor="black",r.shadowBlur=0,r.shadowOffsetX=0,r.shadowOffsetY=0;s.stroke&&s.strokeThickness&&r.strokeText(l,f,d+e.lineHeight-h.descent),s.fill&&r.fillText(l,f,d+e.lineHeight-h.descent),r.setTransform(1,0,0,1,0,0),r.fillStyle="rgba(0, 0, 0, 0)"}function ev(t){return Array.from?Array.from(t):t.split("")}function vC(t){typeof t=="string"&&(t=[t]);for(var r=[],e=0,n=t.length;e<n;e++){var i=t[e];if(Array.isArray(i)){if(i.length!==2)throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got "+i.length+".");var o=i[0].charCodeAt(0),s=i[1].charCodeAt(0);if(s<o)throw new Error("[BitmapFont]: Invalid character range.");for(var l=o,h=s;l<=h;l++)r.push(String.fromCharCode(l))}else r.push.apply(r,ev(i))}if(r.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return r}function co(t){return t.codePointAt?t.codePointAt(0):t.charCodeAt(0)}var zr=function(){function t(r,e,n){var i,o,s=r.info[0],l=r.common[0],h=r.page[0],f=r.distanceField[0],d=_o(h.file),v={};this._ownsTextures=n,this.font=s.face,this.size=s.size,this.lineHeight=l.lineHeight/d,this.chars={},this.pageTextures=v;for(var m=0;m<r.page.length;m++){var _=r.page[m],g=_.id,b=_.file;v[g]=e instanceof Array?e[m]:e[b],(f==null?void 0:f.fieldType)&&f.fieldType!=="none"&&(v[g].baseTexture.alphaMode=ce.NO_PREMULTIPLIED_ALPHA)}for(var m=0;m<r.char.length;m++){var y=r.char[m],g=y.id,w=y.page,C=r.char[m],T=C.x,I=C.y,P=C.width,E=C.height,S=C.xoffset,L=C.yoffset,A=C.xadvance;T/=d,I/=d,P/=d,E/=d,S/=d,L/=d,A/=d;var U=new mt(T+v[w].frame.x/d,I+v[w].frame.y/d,P,E);this.chars[g]={xOffset:S,yOffset:L,xAdvance:A,kerning:{},texture:new tt(v[w].baseTexture,U),page:w}}for(var m=0;m<r.kerning.length;m++){var j=r.kerning[m],q=j.first,$=j.second,ot=j.amount;q/=d,$/=d,ot/=d,this.chars[$]&&(this.chars[$].kerning[q]=ot)}this.distanceFieldRange=f==null?void 0:f.distanceRange,this.distanceFieldType=(o=(i=f==null?void 0:f.fieldType)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"none"}return t.prototype.destroy=function(){for(var r in this.chars)this.chars[r].texture.destroy(),this.chars[r].texture=null;for(var r in this.pageTextures)this._ownsTextures&&this.pageTextures[r].destroy(!0),this.pageTextures[r]=null;this.chars=null,this.pageTextures=null},t.install=function(r,e,n){var i;if(r instanceof xo)i=r;else{var o=tv(r);if(!o)throw new Error("Unrecognized data format for font.");i=o.parse(r)}e instanceof tt&&(e=[e]);var s=new t(i,e,n);return t.available[s.font]=s,s},t.uninstall=function(r){var e=t.available[r];if(!e)throw new Error("No font found named '"+r+"'");e.destroy(),delete t.available[r]},t.from=function(r,e,n){if(!r)throw new Error("[BitmapFont] Property `name` is required.");var i=Object.assign({},t.defaultOptions,n),o=i.chars,s=i.padding,l=i.resolution,h=i.textureWidth,f=i.textureHeight,d=vC(o),v=e instanceof on?e:new on(e),m=h,_=new xo;_.info[0]={face:v.fontFamily,size:v.fontSize},_.common[0]={lineHeight:v.fontSize};for(var g=0,b=0,y,w,C,T=0,I=[],P=0;P<d.length;P++){y||(y=X.ADAPTER.createCanvas(),y.width=h,y.height=f,w=y.getContext("2d"),C=new vt(y,{resolution:l}),I.push(new tt(C)),_.page.push({id:I.length-1,file:""}));var E=we.measureText(d[P],v,!1,y),S=E.width,L=Math.ceil(E.height),A=Math.ceil((v.fontStyle==="italic"?2:1)*S);if(b>=f-L*l){if(b===0)throw new Error("[BitmapFont] textureHeight "+f+"px is "+("too small for "+v.fontSize+"px fonts"));--P,y=null,w=null,C=null,b=0,g=0,T=0;continue}if(T=Math.max(L+E.fontProperties.descent,T),A*l+g>=m){--P,b+=T*l,b=Math.ceil(b),g=0,T=0;continue}pC(y,w,E,g,b,l,v);var U=co(E.text);_.char.push({id:U,page:I.length-1,x:g/l,y:b/l,width:A,height:L,xoffset:0,yoffset:0,xadvance:Math.ceil(S-(v.dropShadow?v.dropShadowDistance:0)-(v.stroke?v.strokeThickness:0))}),g+=(A+2*s)*l,g=Math.ceil(g)}for(var P=0,j=d.length;P<j;P++)for(var q=d[P],$=0;$<j;$++){var ot=d[$],z=w.measureText(q).width,k=w.measureText(ot).width,B=w.measureText(q+ot).width,Pt=B-(z+k);Pt&&_.kerning.push({first:co(q),second:co(ot),amount:Pt})}var pt=new t(_,I,!0);return t.available[r]!==void 0&&t.uninstall(r),t.available[r]=pt,pt},t.ALPHA=[["a","z"],["A","Z"]," "],t.NUMERIC=[["0","9"]],t.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],t.ASCII=[[" ","~"]],t.defaultOptions={resolution:1,textureWidth:512,textureHeight:512,padding:4,chars:t.ALPHANUMERIC},t.available={},t}(),mC=`// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r
\r
}\r
`,_C=`// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`,gC=[],yC=[],_f=[];(function(t){hC(r,t);function r(e,n){n===void 0&&(n={});var i=t.call(this)||this;i._tint=16777215;var o=Object.assign({},r.styleDefaults,n),s=o.align,l=o.tint,h=o.maxWidth,f=o.letterSpacing,d=o.fontName,v=o.fontSize;if(!zr.available[d])throw new Error('Missing BitmapFont "'+d+'"');return i._activePagesMeshData=[],i._textWidth=0,i._textHeight=0,i._align=s,i._tint=l,i._fontName=d,i._fontSize=v||zr.available[d].size,i.text=e,i._maxWidth=h,i._maxLineHeight=0,i._letterSpacing=f,i._anchor=new _r(function(){i.dirty=!0},i,0,0),i._roundPixels=X.ROUND_PIXELS,i.dirty=!0,i._resolution=X.RESOLUTION,i._autoResolution=!0,i._textureCache={},i}return r.prototype.updateText=function(){for(var e,n=zr.available[this._fontName],i=this._fontSize/n.size,o=new ct,s=[],l=[],h=[],f=this._text.replace(/(?:\r\n|\r)/g,`
`)||" ",d=ev(f),v=this._maxWidth*n.size/this._fontSize,m=n.distanceFieldType==="none"?gC:yC,_=null,g=0,b=0,y=0,w=-1,C=0,T=0,I=0,P=0,E=0;E<d.length;E++){var S=d[E],L=co(S);if(/(?:\s)/.test(S)&&(w=E,C=g,P++),S==="\r"||S===`
`){l.push(g),h.push(-1),b=Math.max(b,g),++y,++T,o.x=0,o.y+=n.lineHeight,_=null,P=0;continue}var A=n.chars[L];if(!!A){_&&A.kerning[_]&&(o.x+=A.kerning[_]);var U=_f.pop()||{texture:tt.EMPTY,line:0,charCode:0,prevSpaces:0,position:new ct};U.texture=A.texture,U.line=y,U.charCode=L,U.position.x=o.x+A.xOffset+this._letterSpacing/2,U.position.y=o.y+A.yOffset,U.prevSpaces=P,s.push(U),g=U.position.x+Math.max(A.xAdvance-A.xOffset,A.texture.orig.width),o.x+=A.xAdvance+this._letterSpacing,I=Math.max(I,A.yOffset+A.texture.height),_=L,w!==-1&&v>0&&o.x>v&&(++T,Qr(s,1+w-T,1+E-w),E=w,w=-1,l.push(C),h.push(s.length>0?s[s.length-1].prevSpaces:0),b=Math.max(b,C),y++,o.x=0,o.y+=n.lineHeight,_=null,P=0)}}var j=d[d.length-1];j!=="\r"&&j!==`
`&&(/(?:\s)/.test(j)&&(g=C),l.push(g),b=Math.max(b,g),h.push(-1));for(var q=[],E=0;E<=y;E++){var $=0;this._align==="right"?$=b-l[E]:this._align==="center"?$=(b-l[E])/2:this._align==="justify"&&($=h[E]<0?0:(b-l[E])/h[E]),q.push($)}for(var ot=s.length,z={},k=[],B=this._activePagesMeshData,E=0;E<B.length;E++)m.push(B[E]);for(var E=0;E<ot;E++){var Pt=s[E].texture,pt=Pt.baseTexture.uid;if(!z[pt]){var O=m.pop();if(!O){var F=new Vo,H=void 0,D=void 0;n.distanceFieldType==="none"?(H=new hi(tt.EMPTY),D=Z.NORMAL):(H=new hi(tt.EMPTY,{program:an.from(_C,mC),uniforms:{uFWidth:0}}),D=Z.NORMAL_NPM);var W=new ui(F,H);W.blendMode=D,O={index:0,indexCount:0,vertexCount:0,uvsCount:0,total:0,mesh:W,vertices:null,uvs:null,indices:null}}O.index=0,O.indexCount=0,O.vertexCount=0,O.uvsCount=0,O.total=0;var st=this._textureCache;st[pt]=st[pt]||new tt(Pt.baseTexture),O.mesh.texture=st[pt],O.mesh.tint=this._tint,k.push(O),z[pt]=O}z[pt].total++}for(var E=0;E<B.length;E++)k.indexOf(B[E])===-1&&this.removeChild(B[E].mesh);for(var E=0;E<k.length;E++)k[E].mesh.parent!==this&&this.addChild(k[E].mesh);this._activePagesMeshData=k;for(var E in z){var O=z[E],et=O.total;if(!(((e=O.indices)===null||e===void 0?void 0:e.length)>6*et)||O.vertices.length<ui.BATCHABLE_SIZE*2)O.vertices=new Float32Array(4*2*et),O.uvs=new Float32Array(4*2*et),O.indices=new Uint16Array(6*et);else for(var ft=O.total,_t=O.vertices,ht=ft*4*2;ht<_t.length;ht++)_t[ht]=0;O.mesh.size=6*et}for(var E=0;E<ot;E++){var S=s[E],it=S.position.x+q[S.line]*(this._align==="justify"?S.prevSpaces:1);this._roundPixels&&(it=Math.round(it));var Q=it*i,at=S.position.y*i,Pt=S.texture,J=z[Pt.baseTexture.uid],Ct=Pt.frame,xt=Pt._uvs,lt=J.index++;J.indices[lt*6+0]=0+lt*4,J.indices[lt*6+1]=1+lt*4,J.indices[lt*6+2]=2+lt*4,J.indices[lt*6+3]=0+lt*4,J.indices[lt*6+4]=2+lt*4,J.indices[lt*6+5]=3+lt*4,J.vertices[lt*8+0]=Q,J.vertices[lt*8+1]=at,J.vertices[lt*8+2]=Q+Ct.width*i,J.vertices[lt*8+3]=at,J.vertices[lt*8+4]=Q+Ct.width*i,J.vertices[lt*8+5]=at+Ct.height*i,J.vertices[lt*8+6]=Q,J.vertices[lt*8+7]=at+Ct.height*i,J.uvs[lt*8+0]=xt.x0,J.uvs[lt*8+1]=xt.y0,J.uvs[lt*8+2]=xt.x1,J.uvs[lt*8+3]=xt.y1,J.uvs[lt*8+4]=xt.x2,J.uvs[lt*8+5]=xt.y2,J.uvs[lt*8+6]=xt.x3,J.uvs[lt*8+7]=xt.y3}this._textWidth=b*i,this._textHeight=(o.y+n.lineHeight)*i;for(var E in z){var O=z[E];if(this.anchor.x!==0||this.anchor.y!==0)for(var Yt=0,ne=this._textWidth*this.anchor.x,rr=this._textHeight*this.anchor.y,un=0;un<O.total;un++)O.vertices[Yt++]-=ne,O.vertices[Yt++]-=rr,O.vertices[Yt++]-=ne,O.vertices[Yt++]-=rr,O.vertices[Yt++]-=ne,O.vertices[Yt++]-=rr,O.vertices[Yt++]-=ne,O.vertices[Yt++]-=rr;this._maxLineHeight=I*i;var hn=O.mesh.geometry.getBuffer("aVertexPosition"),Ci=O.mesh.geometry.getBuffer("aTextureCoord"),cn=O.mesh.geometry.getIndex();hn.data=O.vertices,Ci.data=O.uvs,cn.data=O.indices,hn.update(),Ci.update(),cn.update()}for(var E=0;E<s.length;E++)_f.push(s[E])},r.prototype.updateTransform=function(){this.validate(),this.containerUpdateTransform()},r.prototype._render=function(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0);var n=zr.available[this._fontName],i=n.distanceFieldRange,o=n.distanceFieldType,s=n.size;if(o!=="none")for(var l=this.worldTransform,h=l.a,f=l.b,d=l.c,v=l.d,m=Math.sqrt(h*h+f*f),_=Math.sqrt(d*d+v*v),g=(Math.abs(m)+Math.abs(_))/2,b=this._fontSize/s,y=0,w=this._activePagesMeshData;y<w.length;y++){var C=w[y];C.mesh.shader.uniforms.uFWidth=g*i*b*this._resolution}t.prototype._render.call(this,e)},r.prototype.getLocalBounds=function(){return this.validate(),t.prototype.getLocalBounds.call(this)},r.prototype.validate=function(){this.dirty&&(this.updateText(),this.dirty=!1)},Object.defineProperty(r.prototype,"tint",{get:function(){return this._tint},set:function(e){if(this._tint!==e){this._tint=e;for(var n=0;n<this._activePagesMeshData.length;n++)this._activePagesMeshData[n].mesh.tint=e}},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"align",{get:function(){return this._align},set:function(e){this._align!==e&&(this._align=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontName",{get:function(){return this._fontName},set:function(e){if(!zr.available[e])throw new Error('Missing BitmapFont "'+e+'"');this._fontName!==e&&(this._fontName=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontSize",{get:function(){return this._fontSize},set:function(e){this._fontSize!==e&&(this._fontSize=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"anchor",{get:function(){return this._anchor},set:function(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"text",{get:function(){return this._text},set:function(e){e=String(e==null?"":e),this._text!==e&&(this._text=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"maxWidth",{get:function(){return this._maxWidth},set:function(e){this._maxWidth!==e&&(this._maxWidth=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"maxLineHeight",{get:function(){return this.validate(),this._maxLineHeight},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"textWidth",{get:function(){return this.validate(),this._textWidth},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(e){this._letterSpacing!==e&&(this._letterSpacing=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(e){e!==this._roundPixels&&(this._roundPixels=e,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"textHeight",{get:function(){return this.validate(),this._textHeight},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._autoResolution=!1,this._resolution!==e&&(this._resolution=e,this.dirty=!0)},enumerable:!1,configurable:!0}),r.prototype.destroy=function(e){var n=this._textureCache;for(var i in n){var o=n[i];o.destroy(),delete n[i]}this._textureCache=null,t.prototype.destroy.call(this,e)},r.styleDefaults={align:"left",tint:16777215,maxWidth:0,letterSpacing:0},r})(Ht);var bC=function(){function t(){}return t.add=function(){Ot.setExtensionXhrType("fnt",Ot.XHR_RESPONSE_TYPE.TEXT)},t.use=function(r,e){var n=tv(r.data);if(!n){e();return}for(var i=t.getBaseUrl(this,r),o=n.parse(r.data),s={},l=function(b){s[b.metadata.pageFile]=b.texture,Object.keys(s).length===o.page.length&&(r.bitmapFont=zr.install(o,s,!0),e())},h=0;h<o.page.length;++h){var f=o.page[h].file,d=i+f,v=!1;for(var m in this.resources){var _=this.resources[m];if(_.url===d){_.metadata.pageFile=f,_.texture?l(_):_.onAfterMiddleware.add(l),v=!0;break}}if(!v){var g={crossOrigin:r.crossOrigin,loadType:Ot.LOAD_TYPE.IMAGE,metadata:Object.assign({pageFile:f},r.metadata.imageMetadata),parentResource:r};this.add(d,g,l)}}},t.getBaseUrl=function(r,e){var n=e.isDataUrl?"":t.dirname(e.url);return e.isDataUrl&&(n==="."&&(n=""),r.baseUrl&&n&&r.baseUrl.charAt(r.baseUrl.length-1)==="/"&&(n+="/")),n=n.replace(r.baseUrl,""),n&&n.charAt(n.length-1)!=="/"&&(n+="/"),n},t.dirname=function(r){var e=r.replace(/\\/g,"/").replace(/\/$/,"").replace(/\/[^\/]*$/,"");return e===r?".":e===""?"/":e},t.extension=Tt.Loader,t}();/*!
 * @pixi/filter-alpha - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/filter-alpha is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Qa=function(t,r){return Qa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},Qa(t,r)};function xC(t,r){Qa(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var wC=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`,rv=function(t){xC(r,t);function r(e){e===void 0&&(e=1);var n=t.call(this,yw,wC,{uAlpha:1})||this;return n.alpha=e,n}return Object.defineProperty(r.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(e){this.uniforms.uAlpha=e},enumerable:!1,configurable:!0}),r}(nt);/*!
 * @pixi/filter-blur - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/filter-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var tl=function(t,r){return tl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},tl(t,r)};function nv(t,r){tl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var TC=`
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function CC(t,r){var e=Math.ceil(t/2),n=TC,i="",o;r?o="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":o="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(var s=0;s<t;s++){var l=o.replace("%index%",s.toString());l=l.replace("%sampleIndex%",s-(e-1)+".0"),i+=l,i+=`
`}return n=n.replace("%blur%",i),n=n.replace("%size%",t.toString()),n}var EC={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},PC=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function IC(t){for(var r=EC[t],e=r.length,n=PC,i="",o="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;",s,l=0;l<t;l++){var h=o.replace("%index%",l.toString());s=l,l>=e&&(s=t-l-1),h=h.replace("%value%",r[s].toString()),i+=h,i+=`
`}return n=n.replace("%blur%",i),n=n.replace("%size%",t.toString()),n}/*!
 * @pixi/constants - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var gf;(function(t){t[t.WEBGL_LEGACY=0]="WEBGL_LEGACY",t[t.WEBGL=1]="WEBGL",t[t.WEBGL2=2]="WEBGL2"})(gf||(gf={}));var yf;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.WEBGL=1]="WEBGL",t[t.CANVAS=2]="CANVAS"})(yf||(yf={}));var bf;(function(t){t[t.COLOR=16384]="COLOR",t[t.DEPTH=256]="DEPTH",t[t.STENCIL=1024]="STENCIL"})(bf||(bf={}));var xf;(function(t){t[t.NORMAL=0]="NORMAL",t[t.ADD=1]="ADD",t[t.MULTIPLY=2]="MULTIPLY",t[t.SCREEN=3]="SCREEN",t[t.OVERLAY=4]="OVERLAY",t[t.DARKEN=5]="DARKEN",t[t.LIGHTEN=6]="LIGHTEN",t[t.COLOR_DODGE=7]="COLOR_DODGE",t[t.COLOR_BURN=8]="COLOR_BURN",t[t.HARD_LIGHT=9]="HARD_LIGHT",t[t.SOFT_LIGHT=10]="SOFT_LIGHT",t[t.DIFFERENCE=11]="DIFFERENCE",t[t.EXCLUSION=12]="EXCLUSION",t[t.HUE=13]="HUE",t[t.SATURATION=14]="SATURATION",t[t.COLOR=15]="COLOR",t[t.LUMINOSITY=16]="LUMINOSITY",t[t.NORMAL_NPM=17]="NORMAL_NPM",t[t.ADD_NPM=18]="ADD_NPM",t[t.SCREEN_NPM=19]="SCREEN_NPM",t[t.NONE=20]="NONE",t[t.SRC_OVER=0]="SRC_OVER",t[t.SRC_IN=21]="SRC_IN",t[t.SRC_OUT=22]="SRC_OUT",t[t.SRC_ATOP=23]="SRC_ATOP",t[t.DST_OVER=24]="DST_OVER",t[t.DST_IN=25]="DST_IN",t[t.DST_OUT=26]="DST_OUT",t[t.DST_ATOP=27]="DST_ATOP",t[t.ERASE=26]="ERASE",t[t.SUBTRACT=28]="SUBTRACT",t[t.XOR=29]="XOR"})(xf||(xf={}));var wf;(function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(wf||(wf={}));var Tf;(function(t){t[t.RGBA=6408]="RGBA",t[t.RGB=6407]="RGB",t[t.RG=33319]="RG",t[t.RED=6403]="RED",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.ALPHA=6406]="ALPHA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(Tf||(Tf={}));var Cf;(function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Cf||(Cf={}));var Ef;(function(t){t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.BYTE=5120]="BYTE",t[t.SHORT=5122]="SHORT",t[t.INT=5124]="INT",t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",t[t.HALF_FLOAT=36193]="HALF_FLOAT"})(Ef||(Ef={}));var Pf;(function(t){t[t.FLOAT=0]="FLOAT",t[t.INT=1]="INT",t[t.UINT=2]="UINT"})(Pf||(Pf={}));var If;(function(t){t[t.NEAREST=0]="NEAREST",t[t.LINEAR=1]="LINEAR"})(If||(If={}));var Rf;(function(t){t[t.CLAMP=33071]="CLAMP",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Rf||(Rf={}));var Af;(function(t){t[t.OFF=0]="OFF",t[t.POW2=1]="POW2",t[t.ON=2]="ON",t[t.ON_MANUAL=3]="ON_MANUAL"})(Af||(Af={}));var Nf;(function(t){t[t.NPM=0]="NPM",t[t.UNPACK=1]="UNPACK",t[t.PMA=2]="PMA",t[t.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",t[t.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",t[t.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",t[t.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(Nf||(Nf={}));var ci;(function(t){t[t.NO=0]="NO",t[t.YES=1]="YES",t[t.AUTO=2]="AUTO",t[t.BLEND=0]="BLEND",t[t.CLEAR=1]="CLEAR",t[t.BLIT=2]="BLIT"})(ci||(ci={}));var Of;(function(t){t[t.AUTO=0]="AUTO",t[t.MANUAL=1]="MANUAL"})(Of||(Of={}));var Sf;(function(t){t.LOW="lowp",t.MEDIUM="mediump",t.HIGH="highp"})(Sf||(Sf={}));var Uf;(function(t){t[t.NONE=0]="NONE",t[t.SCISSOR=1]="SCISSOR",t[t.STENCIL=2]="STENCIL",t[t.SPRITE=3]="SPRITE",t[t.COLOR=4]="COLOR"})(Uf||(Uf={}));var Lf;(function(t){t[t.RED=1]="RED",t[t.GREEN=2]="GREEN",t[t.BLUE=4]="BLUE",t[t.ALPHA=8]="ALPHA"})(Lf||(Lf={}));var Ff;(function(t){t[t.NONE=0]="NONE",t[t.LOW=2]="LOW",t[t.MEDIUM=4]="MEDIUM",t[t.HIGH=8]="HIGH"})(Ff||(Ff={}));var Mf;(function(t){t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Mf||(Mf={}));var fi=function(t){nv(r,t);function r(e,n,i,o,s){n===void 0&&(n=8),i===void 0&&(i=4),o===void 0&&(o=X.FILTER_RESOLUTION),s===void 0&&(s=5);var l=this,h=CC(s,e),f=IC(s);return l=t.call(this,h,f)||this,l.horizontal=e,l.resolution=o,l._quality=0,l.quality=i,l.blur=n,l}return r.prototype.apply=function(e,n,i,o){if(i?this.horizontal?this.uniforms.strength=1/i.width*(i.width/n.width):this.uniforms.strength=1/i.height*(i.height/n.height):this.horizontal?this.uniforms.strength=1/e.renderer.width*(e.renderer.width/n.width):this.uniforms.strength=1/e.renderer.height*(e.renderer.height/n.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)e.applyFilter(this,n,i,o);else{var s=e.getFilterTexture(),l=e.renderer,h=n,f=s;this.state.blend=!1,e.applyFilter(this,h,f,ci.CLEAR);for(var d=1;d<this.passes-1;d++){e.bindAndClear(h,ci.BLIT),this.uniforms.uSampler=f;var v=f;f=h,h=v,l.shader.bind(this),l.geometry.draw(5)}this.state.blend=!0,e.applyFilter(this,f,i,o),e.returnFilterTexture(s)}},Object.defineProperty(r.prototype,"blur",{get:function(){return this.strength},set:function(e){this.padding=1+Math.abs(e)*2,this.strength=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"quality",{get:function(){return this._quality},set:function(e){this._quality=e,this.passes=e},enumerable:!1,configurable:!0}),r}(nt),RC=function(t){nv(r,t);function r(e,n,i,o){e===void 0&&(e=8),n===void 0&&(n=4),i===void 0&&(i=X.FILTER_RESOLUTION),o===void 0&&(o=5);var s=t.call(this)||this;return s.blurXFilter=new fi(!0,e,n,i,o),s.blurYFilter=new fi(!1,e,n,i,o),s.resolution=i,s.quality=n,s.blur=e,s.repeatEdgePixels=!1,s}return r.prototype.apply=function(e,n,i,o){var s=Math.abs(this.blurXFilter.strength),l=Math.abs(this.blurYFilter.strength);if(s&&l){var h=e.getFilterTexture();this.blurXFilter.apply(e,n,h,ci.CLEAR),this.blurYFilter.apply(e,h,i,o),e.returnFilterTexture(h)}else l?this.blurYFilter.apply(e,n,i,o):this.blurXFilter.apply(e,n,i,o)},r.prototype.updatePadding=function(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2},Object.defineProperty(r.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=this.blurYFilter.blur=e,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"quality",{get:function(){return this.blurXFilter.quality},set:function(e){this.blurXFilter.quality=this.blurYFilter.quality=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=e,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(e){this.blurYFilter.blur=e,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blendMode",{get:function(){return this.blurYFilter.blendMode},set:function(e){this.blurYFilter.blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"repeatEdgePixels",{get:function(){return this._repeatEdgePixels},set:function(e){this._repeatEdgePixels=e,this.updatePadding()},enumerable:!1,configurable:!0}),r}(nt);/*!
 * @pixi/filter-color-matrix - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/filter-color-matrix is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var el=function(t,r){return el=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},el(t,r)};function AC(t,r){el(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var NC=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`,rl=function(t){AC(r,t);function r(){var e=this,n={m:new Float32Array([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]),uAlpha:1};return e=t.call(this,Bp,NC,n)||this,e.alpha=1,e}return r.prototype._loadMatrix=function(e,n){n===void 0&&(n=!1);var i=e;n&&(this._multiply(i,this.uniforms.m,e),i=this._colorMatrix(i)),this.uniforms.m=i},r.prototype._multiply=function(e,n,i){return e[0]=n[0]*i[0]+n[1]*i[5]+n[2]*i[10]+n[3]*i[15],e[1]=n[0]*i[1]+n[1]*i[6]+n[2]*i[11]+n[3]*i[16],e[2]=n[0]*i[2]+n[1]*i[7]+n[2]*i[12]+n[3]*i[17],e[3]=n[0]*i[3]+n[1]*i[8]+n[2]*i[13]+n[3]*i[18],e[4]=n[0]*i[4]+n[1]*i[9]+n[2]*i[14]+n[3]*i[19]+n[4],e[5]=n[5]*i[0]+n[6]*i[5]+n[7]*i[10]+n[8]*i[15],e[6]=n[5]*i[1]+n[6]*i[6]+n[7]*i[11]+n[8]*i[16],e[7]=n[5]*i[2]+n[6]*i[7]+n[7]*i[12]+n[8]*i[17],e[8]=n[5]*i[3]+n[6]*i[8]+n[7]*i[13]+n[8]*i[18],e[9]=n[5]*i[4]+n[6]*i[9]+n[7]*i[14]+n[8]*i[19]+n[9],e[10]=n[10]*i[0]+n[11]*i[5]+n[12]*i[10]+n[13]*i[15],e[11]=n[10]*i[1]+n[11]*i[6]+n[12]*i[11]+n[13]*i[16],e[12]=n[10]*i[2]+n[11]*i[7]+n[12]*i[12]+n[13]*i[17],e[13]=n[10]*i[3]+n[11]*i[8]+n[12]*i[13]+n[13]*i[18],e[14]=n[10]*i[4]+n[11]*i[9]+n[12]*i[14]+n[13]*i[19]+n[14],e[15]=n[15]*i[0]+n[16]*i[5]+n[17]*i[10]+n[18]*i[15],e[16]=n[15]*i[1]+n[16]*i[6]+n[17]*i[11]+n[18]*i[16],e[17]=n[15]*i[2]+n[16]*i[7]+n[17]*i[12]+n[18]*i[17],e[18]=n[15]*i[3]+n[16]*i[8]+n[17]*i[13]+n[18]*i[18],e[19]=n[15]*i[4]+n[16]*i[9]+n[17]*i[14]+n[18]*i[19]+n[19],e},r.prototype._colorMatrix=function(e){var n=new Float32Array(e);return n[4]/=255,n[9]/=255,n[14]/=255,n[19]/=255,n},r.prototype.brightness=function(e,n){var i=[e,0,0,0,0,0,e,0,0,0,0,0,e,0,0,0,0,0,1,0];this._loadMatrix(i,n)},r.prototype.tint=function(e,n){var i=e>>16&255,o=e>>8&255,s=e&255,l=[i/255,0,0,0,0,0,o/255,0,0,0,0,0,s/255,0,0,0,0,0,1,0];this._loadMatrix(l,n)},r.prototype.greyscale=function(e,n){var i=[e,e,e,0,0,e,e,e,0,0,e,e,e,0,0,0,0,0,1,0];this._loadMatrix(i,n)},r.prototype.blackAndWhite=function(e){var n=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(n,e)},r.prototype.hue=function(e,n){e=(e||0)/180*Math.PI;var i=Math.cos(e),o=Math.sin(e),s=Math.sqrt,l=1/3,h=s(l),f=i+(1-i)*l,d=l*(1-i)-h*o,v=l*(1-i)+h*o,m=l*(1-i)+h*o,_=i+l*(1-i),g=l*(1-i)-h*o,b=l*(1-i)-h*o,y=l*(1-i)+h*o,w=i+l*(1-i),C=[f,d,v,0,0,m,_,g,0,0,b,y,w,0,0,0,0,0,1,0];this._loadMatrix(C,n)},r.prototype.contrast=function(e,n){var i=(e||0)+1,o=-.5*(i-1),s=[i,0,0,0,o,0,i,0,0,o,0,0,i,0,o,0,0,0,1,0];this._loadMatrix(s,n)},r.prototype.saturate=function(e,n){e===void 0&&(e=0);var i=e*2/3+1,o=(i-1)*-.5,s=[i,o,o,0,0,o,i,o,0,0,o,o,i,0,0,0,0,0,1,0];this._loadMatrix(s,n)},r.prototype.desaturate=function(){this.saturate(-1)},r.prototype.negative=function(e){var n=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(n,e)},r.prototype.sepia=function(e){var n=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(n,e)},r.prototype.technicolor=function(e){var n=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(n,e)},r.prototype.polaroid=function(e){var n=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(n,e)},r.prototype.toBGR=function(e){var n=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(n,e)},r.prototype.kodachrome=function(e){var n=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(n,e)},r.prototype.browni=function(e){var n=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(n,e)},r.prototype.vintage=function(e){var n=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(n,e)},r.prototype.colorTone=function(e,n,i,o,s){e=e||.2,n=n||.15,i=i||16770432,o=o||3375104;var l=(i>>16&255)/255,h=(i>>8&255)/255,f=(i&255)/255,d=(o>>16&255)/255,v=(o>>8&255)/255,m=(o&255)/255,_=[.3,.59,.11,0,0,l,h,f,e,0,d,v,m,n,0,l-d,h-v,f-m,0,0];this._loadMatrix(_,s)},r.prototype.night=function(e,n){e=e||.1;var i=[e*-2,-e,0,0,0,-e,0,e,0,0,0,e,e*2,0,0,0,0,0,1,0];this._loadMatrix(i,n)},r.prototype.predator=function(e,n){var i=[11.224130630493164*e,-4.794486999511719*e,-2.8746118545532227*e,0*e,.40342438220977783*e,-3.6330697536468506*e,9.193157196044922*e,-2.951810836791992*e,0*e,-1.316135048866272*e,-3.2184197902679443*e,-4.2375030517578125*e,7.476448059082031*e,0*e,.8044459223747253*e,0,0,0,1,0];this._loadMatrix(i,n)},r.prototype.lsd=function(e){var n=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(n,e)},r.prototype.reset=function(){var e=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(e,!1)},Object.defineProperty(r.prototype,"matrix",{get:function(){return this.uniforms.m},set:function(e){this.uniforms.m=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(e){this.uniforms.uAlpha=e},enumerable:!1,configurable:!0}),r}(nt);rl.prototype.grayscale=rl.prototype.greyscale;/*!
 * @pixi/filter-displacement - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/filter-displacement is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var nl=function(t,r){return nl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},nl(t,r)};function OC(t,r){nl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var SC=`varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,UC=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`,LC=function(t){OC(r,t);function r(e,n){var i=this,o=new Rt;return e.renderable=!1,i=t.call(this,UC,SC,{mapSampler:e._texture,filterMatrix:o,scale:{x:1,y:1},rotation:new Float32Array([1,0,0,1])})||this,i.maskSprite=e,i.maskMatrix=o,n==null&&(n=20),i.scale=new ct(n,n),i}return r.prototype.apply=function(e,n,i,o){this.uniforms.filterMatrix=e.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y;var s=this.maskSprite.worldTransform,l=Math.sqrt(s.a*s.a+s.b*s.b),h=Math.sqrt(s.c*s.c+s.d*s.d);l!==0&&h!==0&&(this.uniforms.rotation[0]=s.a/l,this.uniforms.rotation[1]=s.b/l,this.uniforms.rotation[2]=s.c/h,this.uniforms.rotation[3]=s.d/h),e.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"map",{get:function(){return this.uniforms.mapSampler},set:function(e){this.uniforms.mapSampler=e},enumerable:!1,configurable:!0}),r}(nt);/*!
 * @pixi/filter-fxaa - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/filter-fxaa is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var il=function(t,r){return il=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},il(t,r)};function FC(t,r){il(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var MC=`
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`,kC=`varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`,BC=function(t){FC(r,t);function r(){return t.call(this,MC,kC)||this}return r}(nt);/*!
 * @pixi/filter-noise - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/filter-noise is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ol=function(t,r){return ol=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},ol(t,r)};function GC(t,r){ol(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var DC=`precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`,VC=function(t){GC(r,t);function r(e,n){e===void 0&&(e=.5),n===void 0&&(n=Math.random());var i=t.call(this,Bp,DC,{uNoise:0,uSeed:0})||this;return i.noise=e,i.seed=n,i}return Object.defineProperty(r.prototype,"noise",{get:function(){return this.uniforms.uNoise},set:function(e){this.uniforms.uNoise=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"seed",{get:function(){return this.uniforms.uSeed},set:function(e){this.uniforms.uSeed=e},enumerable:!1,configurable:!0}),r}(nt);/*!
 * @pixi/mixin-cache-as-bitmap - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/mixin-cache-as-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*!
 * @pixi/constants - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var kf;(function(t){t[t.WEBGL_LEGACY=0]="WEBGL_LEGACY",t[t.WEBGL=1]="WEBGL",t[t.WEBGL2=2]="WEBGL2"})(kf||(kf={}));var Bf;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.WEBGL=1]="WEBGL",t[t.CANVAS=2]="CANVAS"})(Bf||(Bf={}));var Gf;(function(t){t[t.COLOR=16384]="COLOR",t[t.DEPTH=256]="DEPTH",t[t.STENCIL=1024]="STENCIL"})(Gf||(Gf={}));var Df;(function(t){t[t.NORMAL=0]="NORMAL",t[t.ADD=1]="ADD",t[t.MULTIPLY=2]="MULTIPLY",t[t.SCREEN=3]="SCREEN",t[t.OVERLAY=4]="OVERLAY",t[t.DARKEN=5]="DARKEN",t[t.LIGHTEN=6]="LIGHTEN",t[t.COLOR_DODGE=7]="COLOR_DODGE",t[t.COLOR_BURN=8]="COLOR_BURN",t[t.HARD_LIGHT=9]="HARD_LIGHT",t[t.SOFT_LIGHT=10]="SOFT_LIGHT",t[t.DIFFERENCE=11]="DIFFERENCE",t[t.EXCLUSION=12]="EXCLUSION",t[t.HUE=13]="HUE",t[t.SATURATION=14]="SATURATION",t[t.COLOR=15]="COLOR",t[t.LUMINOSITY=16]="LUMINOSITY",t[t.NORMAL_NPM=17]="NORMAL_NPM",t[t.ADD_NPM=18]="ADD_NPM",t[t.SCREEN_NPM=19]="SCREEN_NPM",t[t.NONE=20]="NONE",t[t.SRC_OVER=0]="SRC_OVER",t[t.SRC_IN=21]="SRC_IN",t[t.SRC_OUT=22]="SRC_OUT",t[t.SRC_ATOP=23]="SRC_ATOP",t[t.DST_OVER=24]="DST_OVER",t[t.DST_IN=25]="DST_IN",t[t.DST_OUT=26]="DST_OUT",t[t.DST_ATOP=27]="DST_ATOP",t[t.ERASE=26]="ERASE",t[t.SUBTRACT=28]="SUBTRACT",t[t.XOR=29]="XOR"})(Df||(Df={}));var Vf;(function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Vf||(Vf={}));var jf;(function(t){t[t.RGBA=6408]="RGBA",t[t.RGB=6407]="RGB",t[t.RG=33319]="RG",t[t.RED=6403]="RED",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.ALPHA=6406]="ALPHA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(jf||(jf={}));var Hf;(function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Hf||(Hf={}));var Xf;(function(t){t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.BYTE=5120]="BYTE",t[t.SHORT=5122]="SHORT",t[t.INT=5124]="INT",t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",t[t.HALF_FLOAT=36193]="HALF_FLOAT"})(Xf||(Xf={}));var zf;(function(t){t[t.FLOAT=0]="FLOAT",t[t.INT=1]="INT",t[t.UINT=2]="UINT"})(zf||(zf={}));var $f;(function(t){t[t.NEAREST=0]="NEAREST",t[t.LINEAR=1]="LINEAR"})($f||($f={}));var Wf;(function(t){t[t.CLAMP=33071]="CLAMP",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Wf||(Wf={}));var qf;(function(t){t[t.OFF=0]="OFF",t[t.POW2=1]="POW2",t[t.ON=2]="ON",t[t.ON_MANUAL=3]="ON_MANUAL"})(qf||(qf={}));var Yf;(function(t){t[t.NPM=0]="NPM",t[t.UNPACK=1]="UNPACK",t[t.PMA=2]="PMA",t[t.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",t[t.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",t[t.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",t[t.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(Yf||(Yf={}));var Kf;(function(t){t[t.NO=0]="NO",t[t.YES=1]="YES",t[t.AUTO=2]="AUTO",t[t.BLEND=0]="BLEND",t[t.CLEAR=1]="CLEAR",t[t.BLIT=2]="BLIT"})(Kf||(Kf={}));var Zf;(function(t){t[t.AUTO=0]="AUTO",t[t.MANUAL=1]="MANUAL"})(Zf||(Zf={}));var Jf;(function(t){t.LOW="lowp",t.MEDIUM="mediump",t.HIGH="highp"})(Jf||(Jf={}));var Qf;(function(t){t[t.NONE=0]="NONE",t[t.SCISSOR=1]="SCISSOR",t[t.STENCIL=2]="STENCIL",t[t.SPRITE=3]="SPRITE",t[t.COLOR=4]="COLOR"})(Qf||(Qf={}));var td;(function(t){t[t.RED=1]="RED",t[t.GREEN=2]="GREEN",t[t.BLUE=4]="BLUE",t[t.ALPHA=8]="ALPHA"})(td||(td={}));var sl;(function(t){t[t.NONE=0]="NONE",t[t.LOW=2]="LOW",t[t.MEDIUM=4]="MEDIUM",t[t.HIGH=8]="HIGH"})(sl||(sl={}));var ed;(function(t){t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(ed||(ed={}));var iv=new Rt;Ft.prototype._cacheAsBitmap=!1;Ft.prototype._cacheData=null;Ft.prototype._cacheAsBitmapResolution=null;Ft.prototype._cacheAsBitmapMultisample=sl.NONE;var jC=function(){function t(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null}return t}();Object.defineProperties(Ft.prototype,{cacheAsBitmapResolution:{get:function(){return this._cacheAsBitmapResolution},set:function(t){t!==this._cacheAsBitmapResolution&&(this._cacheAsBitmapResolution=t,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmapMultisample:{get:function(){return this._cacheAsBitmapMultisample},set:function(t){t!==this._cacheAsBitmapMultisample&&(this._cacheAsBitmapMultisample=t,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(t){if(this._cacheAsBitmap!==t){this._cacheAsBitmap=t;var r;t?(this._cacheData||(this._cacheData=new jC),r=this._cacheData,r.originalRender=this.render,r.originalRenderCanvas=this.renderCanvas,r.originalUpdateTransform=this.updateTransform,r.originalCalculateBounds=this.calculateBounds,r.originalGetLocalBounds=this.getLocalBounds,r.originalDestroy=this.destroy,r.originalContainsPoint=this.containsPoint,r.originalMask=this._mask,r.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(r=this._cacheData,r.sprite&&this._destroyCachedDisplayObject(),this.render=r.originalRender,this.renderCanvas=r.originalRenderCanvas,this.calculateBounds=r.originalCalculateBounds,this.getLocalBounds=r.originalGetLocalBounds,this.destroy=r.originalDestroy,this.updateTransform=r.originalUpdateTransform,this.containsPoint=r.originalContainsPoint,this._mask=r.originalMask,this.filterArea=r.originalFilterArea)}}}});Ft.prototype._renderCached=function(r){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(r),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(r))};Ft.prototype._initCachedDisplayObject=function(r){var e;if(!(this._cacheData&&this._cacheData.sprite)){var n=this.alpha;this.alpha=1,r.batch.flush();var i=this.getLocalBounds(null,!0).clone();if(this.filters&&this.filters.length){var o=this.filters[0].padding;i.pad(o)}i.ceil(X.RESOLUTION);var s=r.renderTexture.current,l=r.renderTexture.sourceFrame.clone(),h=r.renderTexture.destinationFrame.clone(),f=r.projection.transform,d=Qe.create({width:i.width,height:i.height,resolution:this.cacheAsBitmapResolution||r.resolution,multisample:(e=this.cacheAsBitmapMultisample)!==null&&e!==void 0?e:r.multisample}),v="cacheAsBitmap_"+Tr();this._cacheData.textureCacheId=v,vt.addToCache(d.baseTexture,v),tt.addToCache(d,v);var m=this.transform.localTransform.copyTo(iv).invert().translate(-i.x,-i.y);this.render=this._cacheData.originalRender,r.render(this,{renderTexture:d,clear:!0,transform:m,skipUpdateTransform:!1}),r.framebuffer.blit(),r.projection.transform=f,r.renderTexture.bind(s,l,h),this.render=this._renderCached,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=n;var _=new wi(d);_.transform.worldTransform=this.transform.worldTransform,_.anchor.x=-(i.x/i.width),_.anchor.y=-(i.y/i.height),_.alpha=n,_._bounds=this._bounds,this._cacheData.sprite=_,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),this.containsPoint=_.containsPoint.bind(_)}};Ft.prototype._renderCachedCanvas=function(r){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(r),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(r))};Ft.prototype._initCachedDisplayObjectCanvas=function(r){if(!(this._cacheData&&this._cacheData.sprite)){var e=this.getLocalBounds(null,!0),n=this.alpha;this.alpha=1;var i=r.context,o=r._projTransform;e.ceil(X.RESOLUTION);var s=Qe.create({width:e.width,height:e.height}),l="cacheAsBitmap_"+Tr();this._cacheData.textureCacheId=l,vt.addToCache(s.baseTexture,l),tt.addToCache(s,l);var h=iv;this.transform.localTransform.copyTo(h),h.invert(),h.tx-=e.x,h.ty-=e.y,this.renderCanvas=this._cacheData.originalRenderCanvas,r.render(this,{renderTexture:s,clear:!0,transform:h,skipUpdateTransform:!1}),r.context=i,r._projTransform=o,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=n;var f=new wi(s);f.transform.worldTransform=this.transform.worldTransform,f.anchor.x=-(e.x/e.width),f.anchor.y=-(e.y/e.height),f.alpha=n,f._bounds=this._bounds,this._cacheData.sprite=f,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=r._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=f.containsPoint.bind(f)}};Ft.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID};Ft.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)};Ft.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,vt.removeFromCache(this._cacheData.textureCacheId),tt.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null};Ft.prototype._cacheAsBitmapDestroy=function(r){this.cacheAsBitmap=!1,this.destroy(r)};/*!
 * @pixi/mixin-get-child-by-name - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/mixin-get-child-by-name is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */Ft.prototype.name=null;Ht.prototype.getChildByName=function(r,e){for(var n=0,i=this.children.length;n<i;n++)if(this.children[n].name===r)return this.children[n];if(e)for(var n=0,i=this.children.length;n<i;n++){var o=this.children[n];if(!!o.getChildByName){var s=o.getChildByName(r,!0);if(s)return s}}return null};/*!
 * @pixi/mixin-get-global-position - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/mixin-get-global-position is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */Ft.prototype.getGlobalPosition=function(r,e){return r===void 0&&(r=new ct),e===void 0&&(e=!1),this.parent?this.parent.toGlobal(this.position,r,e):(r.x=this.position.x,r.y=this.position.y),r};/*!
 * @pixi/app - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/app is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var HC=function(){function t(){}return t.init=function(r){var e=this;Object.defineProperty(this,"resizeTo",{set:function(n){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=n,n&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get:function(){return this._resizeTo}}),this.queueResize=function(){!e._resizeTo||(e.cancelResize(),e._resizeId=requestAnimationFrame(function(){return e.resize()}))},this.cancelResize=function(){e._resizeId&&(cancelAnimationFrame(e._resizeId),e._resizeId=null)},this.resize=function(){if(!!e._resizeTo){e.cancelResize();var n,i;if(e._resizeTo===globalThis.window)n=globalThis.innerWidth,i=globalThis.innerHeight;else{var o=e._resizeTo,s=o.clientWidth,l=o.clientHeight;n=s,i=l}e.renderer.resize(n,i)}},this._resizeId=null,this._resizeTo=null,this.resizeTo=r.resizeTo||null},t.destroy=function(){globalThis.removeEventListener("resize",this.queueResize),this.cancelResize(),this.cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null},t.extension=Tt.Application,t}();/*!
 * @pixi/settings - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/settings is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*!
 * @pixi/constants - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var rd;(function(t){t[t.WEBGL_LEGACY=0]="WEBGL_LEGACY",t[t.WEBGL=1]="WEBGL",t[t.WEBGL2=2]="WEBGL2"})(rd||(rd={}));var nd;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.WEBGL=1]="WEBGL",t[t.CANVAS=2]="CANVAS"})(nd||(nd={}));var id;(function(t){t[t.COLOR=16384]="COLOR",t[t.DEPTH=256]="DEPTH",t[t.STENCIL=1024]="STENCIL"})(id||(id={}));var od;(function(t){t[t.NORMAL=0]="NORMAL",t[t.ADD=1]="ADD",t[t.MULTIPLY=2]="MULTIPLY",t[t.SCREEN=3]="SCREEN",t[t.OVERLAY=4]="OVERLAY",t[t.DARKEN=5]="DARKEN",t[t.LIGHTEN=6]="LIGHTEN",t[t.COLOR_DODGE=7]="COLOR_DODGE",t[t.COLOR_BURN=8]="COLOR_BURN",t[t.HARD_LIGHT=9]="HARD_LIGHT",t[t.SOFT_LIGHT=10]="SOFT_LIGHT",t[t.DIFFERENCE=11]="DIFFERENCE",t[t.EXCLUSION=12]="EXCLUSION",t[t.HUE=13]="HUE",t[t.SATURATION=14]="SATURATION",t[t.COLOR=15]="COLOR",t[t.LUMINOSITY=16]="LUMINOSITY",t[t.NORMAL_NPM=17]="NORMAL_NPM",t[t.ADD_NPM=18]="ADD_NPM",t[t.SCREEN_NPM=19]="SCREEN_NPM",t[t.NONE=20]="NONE",t[t.SRC_OVER=0]="SRC_OVER",t[t.SRC_IN=21]="SRC_IN",t[t.SRC_OUT=22]="SRC_OUT",t[t.SRC_ATOP=23]="SRC_ATOP",t[t.DST_OVER=24]="DST_OVER",t[t.DST_IN=25]="DST_IN",t[t.DST_OUT=26]="DST_OUT",t[t.DST_ATOP=27]="DST_ATOP",t[t.ERASE=26]="ERASE",t[t.SUBTRACT=28]="SUBTRACT",t[t.XOR=29]="XOR"})(od||(od={}));var sd;(function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(sd||(sd={}));var ad;(function(t){t[t.RGBA=6408]="RGBA",t[t.RGB=6407]="RGB",t[t.RG=33319]="RG",t[t.RED=6403]="RED",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.ALPHA=6406]="ALPHA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(ad||(ad={}));var ld;(function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(ld||(ld={}));var ud;(function(t){t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.BYTE=5120]="BYTE",t[t.SHORT=5122]="SHORT",t[t.INT=5124]="INT",t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",t[t.HALF_FLOAT=36193]="HALF_FLOAT"})(ud||(ud={}));var hd;(function(t){t[t.FLOAT=0]="FLOAT",t[t.INT=1]="INT",t[t.UINT=2]="UINT"})(hd||(hd={}));var al;(function(t){t[t.NEAREST=0]="NEAREST",t[t.LINEAR=1]="LINEAR"})(al||(al={}));var ll;(function(t){t[t.CLAMP=33071]="CLAMP",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(ll||(ll={}));var ul;(function(t){t[t.OFF=0]="OFF",t[t.POW2=1]="POW2",t[t.ON=2]="ON",t[t.ON_MANUAL=3]="ON_MANUAL"})(ul||(ul={}));var cd;(function(t){t[t.NPM=0]="NPM",t[t.UNPACK=1]="UNPACK",t[t.PMA=2]="PMA",t[t.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",t[t.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",t[t.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",t[t.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(cd||(cd={}));var fd;(function(t){t[t.NO=0]="NO",t[t.YES=1]="YES",t[t.AUTO=2]="AUTO",t[t.BLEND=0]="BLEND",t[t.CLEAR=1]="CLEAR",t[t.BLIT=2]="BLIT"})(fd||(fd={}));var hl;(function(t){t[t.AUTO=0]="AUTO",t[t.MANUAL=1]="MANUAL"})(hl||(hl={}));var Yn;(function(t){t.LOW="lowp",t.MEDIUM="mediump",t.HIGH="highp"})(Yn||(Yn={}));var dd;(function(t){t[t.NONE=0]="NONE",t[t.SCISSOR=1]="SCISSOR",t[t.STENCIL=2]="STENCIL",t[t.SPRITE=3]="SPRITE",t[t.COLOR=4]="COLOR"})(dd||(dd={}));var pd;(function(t){t[t.RED=1]="RED",t[t.GREEN=2]="GREEN",t[t.BLUE=4]="BLUE",t[t.ALPHA=8]="ALPHA"})(pd||(pd={}));var cl;(function(t){t[t.NONE=0]="NONE",t[t.LOW=2]="LOW",t[t.MEDIUM=4]="MEDIUM",t[t.HIGH=8]="HIGH"})(cl||(cl={}));var vd;(function(t){t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(vd||(vd={}));var XC={createCanvas:function(t,r){var e=document.createElement("canvas");return e.width=t,e.height=r,e},getWebGLRenderingContext:function(){return WebGLRenderingContext},getNavigator:function(){return navigator},getBaseUrl:function(){var t;return(t=document.baseURI)!==null&&t!==void 0?t:window.location.href},fetch:function(t,r){return fetch(t,r)}},oa=/iPhone/i,md=/iPod/i,_d=/iPad/i,gd=/\biOS-universal(?:.+)Mac\b/i,sa=/\bAndroid(?:.+)Mobile\b/i,yd=/Android/i,jr=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,oo=/Silk/i,Ae=/Windows Phone/i,bd=/\bWindows(?:.+)ARM\b/i,xd=/BlackBerry/i,wd=/BB10/i,Td=/Opera Mini/i,Cd=/\b(CriOS|Chrome)(?:.+)Mobile/i,Ed=/Mobile(?:.+)Firefox\b/i,Pd=function(t){return typeof t<"u"&&t.platform==="MacIntel"&&typeof t.maxTouchPoints=="number"&&t.maxTouchPoints>1&&typeof MSStream>"u"};function zC(t){return function(r){return r.test(t)}}function $C(t){var r={userAgent:"",platform:"",maxTouchPoints:0};!t&&typeof navigator<"u"?r={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof t=="string"?r.userAgent=t:t&&t.userAgent&&(r={userAgent:t.userAgent,platform:t.platform,maxTouchPoints:t.maxTouchPoints||0});var e=r.userAgent,n=e.split("[FBAN");typeof n[1]<"u"&&(e=n[0]),n=e.split("Twitter"),typeof n[1]<"u"&&(e=n[0]);var i=zC(e),o={apple:{phone:i(oa)&&!i(Ae),ipod:i(md),tablet:!i(oa)&&(i(_d)||Pd(r))&&!i(Ae),universal:i(gd),device:(i(oa)||i(md)||i(_d)||i(gd)||Pd(r))&&!i(Ae)},amazon:{phone:i(jr),tablet:!i(jr)&&i(oo),device:i(jr)||i(oo)},android:{phone:!i(Ae)&&i(jr)||!i(Ae)&&i(sa),tablet:!i(Ae)&&!i(jr)&&!i(sa)&&(i(oo)||i(yd)),device:!i(Ae)&&(i(jr)||i(oo)||i(sa)||i(yd))||i(/\bokhttp\b/i)},windows:{phone:i(Ae),tablet:i(bd),device:i(Ae)||i(bd)},other:{blackberry:i(xd),blackberry10:i(wd),opera:i(Td),firefox:i(Ed),chrome:i(Cd),device:i(xd)||i(wd)||i(Td)||i(Ed)||i(Cd)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}var Yr=$C(globalThis.navigator);function WC(){return!Yr.apple.device}function qC(t){var r=!0;if(Yr.tablet||Yr.phone){if(Yr.apple.device){var e=navigator.userAgent.match(/OS (\d+)_(\d+)?/);if(e){var n=parseInt(e[1],10);n<11&&(r=!1)}}if(Yr.android.device){var e=navigator.userAgent.match(/Android\s([0-9.]*)/);if(e){var n=parseInt(e[1],10);n<7&&(r=!1)}}}return r?t:4}var wo={ADAPTER:XC,MIPMAP_TEXTURES:ul.POW2,ANISOTROPIC_LEVEL:0,RESOLUTION:1,FILTER_RESOLUTION:1,FILTER_MULTISAMPLE:cl.NONE,SPRITE_MAX_TEXTURES:qC(32),SPRITE_BATCH_SIZE:4096,RENDER_OPTIONS:{view:null,antialias:!1,autoDensity:!1,backgroundColor:0,backgroundAlpha:1,useContextAlpha:!0,clearBeforeRender:!0,preserveDrawingBuffer:!1,width:800,height:600,legacy:!1},GC_MODE:hl.AUTO,GC_MAX_IDLE:60*60,GC_MAX_CHECK_COUNT:60*10,WRAP_MODE:ll.CLAMP,SCALE_MODE:al.LINEAR,PRECISION_VERTEX:Yn.HIGH,PRECISION_FRAGMENT:Yr.apple.device?Yn.HIGH:Yn.MEDIUM,CAN_UPLOAD_SAME_BUFFER:WC(),CREATE_IMAGE_BITMAP:!1,ROUND_PIXELS:!1},aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ou(t,r,e){return e={path:r,exports:{},require:function(n,i){return YC(n,i==null?e.path:i)}},t(e,e.exports),e.exports}function YC(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}ou(function(t){var r=Object.prototype.hasOwnProperty,e="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(e=!1));function i(h,f,d){this.fn=h,this.context=f,this.once=d||!1}function o(h,f,d,v,m){if(typeof d!="function")throw new TypeError("The listener must be a function");var _=new i(d,v||h,m),g=e?e+f:f;return h._events[g]?h._events[g].fn?h._events[g]=[h._events[g],_]:h._events[g].push(_):(h._events[g]=_,h._eventsCount++),h}function s(h,f){--h._eventsCount===0?h._events=new n:delete h._events[f]}function l(){this._events=new n,this._eventsCount=0}l.prototype.eventNames=function(){var f=[],d,v;if(this._eventsCount===0)return f;for(v in d=this._events)r.call(d,v)&&f.push(e?v.slice(1):v);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(d)):f},l.prototype.listeners=function(f){var d=e?e+f:f,v=this._events[d];if(!v)return[];if(v.fn)return[v.fn];for(var m=0,_=v.length,g=new Array(_);m<_;m++)g[m]=v[m].fn;return g},l.prototype.listenerCount=function(f){var d=e?e+f:f,v=this._events[d];return v?v.fn?1:v.length:0},l.prototype.emit=function(f,d,v,m,_,g){var b=arguments,y=e?e+f:f;if(!this._events[y])return!1;var w=this._events[y],C=arguments.length,T,I;if(w.fn){switch(w.once&&this.removeListener(f,w.fn,void 0,!0),C){case 1:return w.fn.call(w.context),!0;case 2:return w.fn.call(w.context,d),!0;case 3:return w.fn.call(w.context,d,v),!0;case 4:return w.fn.call(w.context,d,v,m),!0;case 5:return w.fn.call(w.context,d,v,m,_),!0;case 6:return w.fn.call(w.context,d,v,m,_,g),!0}for(I=1,T=new Array(C-1);I<C;I++)T[I-1]=b[I];w.fn.apply(w.context,T)}else{var P=w.length,E;for(I=0;I<P;I++)switch(w[I].once&&this.removeListener(f,w[I].fn,void 0,!0),C){case 1:w[I].fn.call(w[I].context);break;case 2:w[I].fn.call(w[I].context,d);break;case 3:w[I].fn.call(w[I].context,d,v);break;case 4:w[I].fn.call(w[I].context,d,v,m);break;default:if(!T)for(E=1,T=new Array(C-1);E<C;E++)T[E-1]=b[E];w[I].fn.apply(w[I].context,T)}}return!0},l.prototype.on=function(f,d,v){return o(this,f,d,v,!1)},l.prototype.once=function(f,d,v){return o(this,f,d,v,!0)},l.prototype.removeListener=function(f,d,v,m){var _=e?e+f:f;if(!this._events[_])return this;if(!d)return s(this,_),this;var g=this._events[_];if(g.fn)g.fn===d&&(!m||g.once)&&(!v||g.context===v)&&s(this,_);else{for(var b=0,y=[],w=g.length;b<w;b++)(g[b].fn!==d||m&&!g[b].once||v&&g[b].context!==v)&&y.push(g[b]);y.length?this._events[_]=y.length===1?y[0]:y:s(this,_)}return this},l.prototype.removeAllListeners=function(f){var d;return f?(d=e?e+f:f,this._events[d]&&s(this,d)):(this._events=new n,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=e,l.EventEmitter=l,t.exports=l});ou(function(t,r){(function(e){var n=r&&!r.nodeType&&r,i=t&&!t.nodeType&&t,o=typeof aa=="object"&&aa;(o.global===o||o.window===o||o.self===o)&&(e=o);var s,l=2147483647,h=36,f=1,d=26,v=38,m=700,_=72,g=128,b="-",y=/^xn--/,w=/[^\x20-\x7E]/,C=/[\x2E\u3002\uFF0E\uFF61]/g,T={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},I=h-f,P=Math.floor,E=String.fromCharCode,S;function L(O){throw RangeError(T[O])}function A(O,F){for(var H=O.length,D=[];H--;)D[H]=F(O[H]);return D}function U(O,F){var H=O.split("@"),D="";H.length>1&&(D=H[0]+"@",O=H[1]),O=O.replace(C,".");var W=O.split("."),st=A(W,F).join(".");return D+st}function j(O){for(var F=[],H=0,D=O.length,W,st;H<D;)W=O.charCodeAt(H++),W>=55296&&W<=56319&&H<D?(st=O.charCodeAt(H++),(st&64512)==56320?F.push(((W&1023)<<10)+(st&1023)+65536):(F.push(W),H--)):F.push(W);return F}function q(O){return A(O,function(F){var H="";return F>65535&&(F-=65536,H+=E(F>>>10&1023|55296),F=56320|F&1023),H+=E(F),H}).join("")}function $(O){return O-48<10?O-22:O-65<26?O-65:O-97<26?O-97:h}function ot(O,F){return O+22+75*(O<26)-((F!=0)<<5)}function z(O,F,H){var D=0;for(O=H?P(O/m):O>>1,O+=P(O/F);O>I*d>>1;D+=h)O=P(O/I);return P(D+(I+1)*O/(O+v))}function k(O){var F=[],H=O.length,D,W=0,st=g,et=_,ft,_t,ht,it,Q,at,J,Ct,xt;for(ft=O.lastIndexOf(b),ft<0&&(ft=0),_t=0;_t<ft;++_t)O.charCodeAt(_t)>=128&&L("not-basic"),F.push(O.charCodeAt(_t));for(ht=ft>0?ft+1:0;ht<H;){for(it=W,Q=1,at=h;ht>=H&&L("invalid-input"),J=$(O.charCodeAt(ht++)),(J>=h||J>P((l-W)/Q))&&L("overflow"),W+=J*Q,Ct=at<=et?f:at>=et+d?d:at-et,!(J<Ct);at+=h)xt=h-Ct,Q>P(l/xt)&&L("overflow"),Q*=xt;D=F.length+1,et=z(W-it,D,it==0),P(W/D)>l-st&&L("overflow"),st+=P(W/D),W%=D,F.splice(W++,0,st)}return q(F)}function B(O){var F,H,D,W,st,et,ft,_t,ht,it,Q,at=[],J,Ct,xt,lt;for(O=j(O),J=O.length,F=g,H=0,st=_,et=0;et<J;++et)Q=O[et],Q<128&&at.push(E(Q));for(D=W=at.length,W&&at.push(b);D<J;){for(ft=l,et=0;et<J;++et)Q=O[et],Q>=F&&Q<ft&&(ft=Q);for(Ct=D+1,ft-F>P((l-H)/Ct)&&L("overflow"),H+=(ft-F)*Ct,F=ft,et=0;et<J;++et)if(Q=O[et],Q<F&&++H>l&&L("overflow"),Q==F){for(_t=H,ht=h;it=ht<=st?f:ht>=st+d?d:ht-st,!(_t<it);ht+=h)lt=_t-it,xt=h-it,at.push(E(ot(it+lt%xt,0))),_t=P(lt/xt);at.push(E(ot(_t,0))),st=z(H,Ct,D==W),H=0,++D}++H,++F}return at.join("")}function Pt(O){return U(O,function(F){return y.test(F)?k(F.slice(4).toLowerCase()):F})}function pt(O){return U(O,function(F){return w.test(F)?"xn--"+B(F):F})}if(s={version:"1.3.2",ucs2:{decode:j,encode:q},decode:k,encode:B,toASCII:pt,toUnicode:Pt},n&&i)if(t.exports==n)i.exports=s;else for(S in s)s.hasOwnProperty(S)&&(n[S]=s[S]);else e.punycode=s})(aa)});function KC(t,r){return Object.prototype.hasOwnProperty.call(t,r)}var ZC=function(t,r,e,n){r=r||"&",e=e||"=";var i={};if(typeof t!="string"||t.length===0)return i;var o=/\+/g;t=t.split(r);var s=1e3;n&&typeof n.maxKeys=="number"&&(s=n.maxKeys);var l=t.length;s>0&&l>s&&(l=s);for(var h=0;h<l;++h){var f=t[h].replace(o,"%20"),d=f.indexOf(e),v,m,_,g;d>=0?(v=f.substr(0,d),m=f.substr(d+1)):(v=f,m=""),_=decodeURIComponent(v),g=decodeURIComponent(m),KC(i,_)?Array.isArray(i[_])?i[_].push(g):i[_]=[i[_],g]:i[_]=g}return i},Gn=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}},JC=function(t,r,e,n){return r=r||"&",e=e||"=",t===null&&(t=void 0),typeof t=="object"?Object.keys(t).map(function(i){var o=encodeURIComponent(Gn(i))+e;return Array.isArray(t[i])?t[i].map(function(s){return o+encodeURIComponent(Gn(s))}).join(r):o+encodeURIComponent(Gn(t[i]))}).join(r):n?encodeURIComponent(Gn(n))+e+encodeURIComponent(Gn(t)):""};ou(function(t,r){r.decode=r.parse=ZC,r.encode=r.stringify=JC});/*!
 * @pixi/constants - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Id;(function(t){t[t.WEBGL_LEGACY=0]="WEBGL_LEGACY",t[t.WEBGL=1]="WEBGL",t[t.WEBGL2=2]="WEBGL2"})(Id||(Id={}));var Rd;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.WEBGL=1]="WEBGL",t[t.CANVAS=2]="CANVAS"})(Rd||(Rd={}));var Ad;(function(t){t[t.COLOR=16384]="COLOR",t[t.DEPTH=256]="DEPTH",t[t.STENCIL=1024]="STENCIL"})(Ad||(Ad={}));var $t;(function(t){t[t.NORMAL=0]="NORMAL",t[t.ADD=1]="ADD",t[t.MULTIPLY=2]="MULTIPLY",t[t.SCREEN=3]="SCREEN",t[t.OVERLAY=4]="OVERLAY",t[t.DARKEN=5]="DARKEN",t[t.LIGHTEN=6]="LIGHTEN",t[t.COLOR_DODGE=7]="COLOR_DODGE",t[t.COLOR_BURN=8]="COLOR_BURN",t[t.HARD_LIGHT=9]="HARD_LIGHT",t[t.SOFT_LIGHT=10]="SOFT_LIGHT",t[t.DIFFERENCE=11]="DIFFERENCE",t[t.EXCLUSION=12]="EXCLUSION",t[t.HUE=13]="HUE",t[t.SATURATION=14]="SATURATION",t[t.COLOR=15]="COLOR",t[t.LUMINOSITY=16]="LUMINOSITY",t[t.NORMAL_NPM=17]="NORMAL_NPM",t[t.ADD_NPM=18]="ADD_NPM",t[t.SCREEN_NPM=19]="SCREEN_NPM",t[t.NONE=20]="NONE",t[t.SRC_OVER=0]="SRC_OVER",t[t.SRC_IN=21]="SRC_IN",t[t.SRC_OUT=22]="SRC_OUT",t[t.SRC_ATOP=23]="SRC_ATOP",t[t.DST_OVER=24]="DST_OVER",t[t.DST_IN=25]="DST_IN",t[t.DST_OUT=26]="DST_OUT",t[t.DST_ATOP=27]="DST_ATOP",t[t.ERASE=26]="ERASE",t[t.SUBTRACT=28]="SUBTRACT",t[t.XOR=29]="XOR"})($t||($t={}));var Nd;(function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Nd||(Nd={}));var Od;(function(t){t[t.RGBA=6408]="RGBA",t[t.RGB=6407]="RGB",t[t.RG=33319]="RG",t[t.RED=6403]="RED",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.ALPHA=6406]="ALPHA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(Od||(Od={}));var Sd;(function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Sd||(Sd={}));var Ud;(function(t){t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.BYTE=5120]="BYTE",t[t.SHORT=5122]="SHORT",t[t.INT=5124]="INT",t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",t[t.HALF_FLOAT=36193]="HALF_FLOAT"})(Ud||(Ud={}));var Ld;(function(t){t[t.FLOAT=0]="FLOAT",t[t.INT=1]="INT",t[t.UINT=2]="UINT"})(Ld||(Ld={}));var Fd;(function(t){t[t.NEAREST=0]="NEAREST",t[t.LINEAR=1]="LINEAR"})(Fd||(Fd={}));var Md;(function(t){t[t.CLAMP=33071]="CLAMP",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Md||(Md={}));var kd;(function(t){t[t.OFF=0]="OFF",t[t.POW2=1]="POW2",t[t.ON=2]="ON",t[t.ON_MANUAL=3]="ON_MANUAL"})(kd||(kd={}));var Bd;(function(t){t[t.NPM=0]="NPM",t[t.UNPACK=1]="UNPACK",t[t.PMA=2]="PMA",t[t.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",t[t.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",t[t.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",t[t.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(Bd||(Bd={}));var Gd;(function(t){t[t.NO=0]="NO",t[t.YES=1]="YES",t[t.AUTO=2]="AUTO",t[t.BLEND=0]="BLEND",t[t.CLEAR=1]="CLEAR",t[t.BLIT=2]="BLIT"})(Gd||(Gd={}));var Dd;(function(t){t[t.AUTO=0]="AUTO",t[t.MANUAL=1]="MANUAL"})(Dd||(Dd={}));var Vd;(function(t){t.LOW="lowp",t.MEDIUM="mediump",t.HIGH="highp"})(Vd||(Vd={}));var jd;(function(t){t[t.NONE=0]="NONE",t[t.SCISSOR=1]="SCISSOR",t[t.STENCIL=2]="STENCIL",t[t.SPRITE=3]="SPRITE",t[t.COLOR=4]="COLOR"})(jd||(jd={}));var Hd;(function(t){t[t.RED=1]="RED",t[t.GREEN=2]="GREEN",t[t.BLUE=4]="BLUE",t[t.ALPHA=8]="ALPHA"})(Hd||(Hd={}));var Xd;(function(t){t[t.NONE=0]="NONE",t[t.LOW=2]="LOW",t[t.MEDIUM=4]="MEDIUM",t[t.HIGH=8]="HIGH"})(Xd||(Xd={}));var zd;(function(t){t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(zd||(zd={}));/*!
 * @pixi/utils - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/utils is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */wo.RETINA_PREFIX=/@([0-9\.]+)x/;wo.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;function QC(){for(var t=[],r=[],e=0;e<32;e++)t[e]=e,r[e]=e;t[$t.NORMAL_NPM]=$t.NORMAL,t[$t.ADD_NPM]=$t.ADD,t[$t.SCREEN_NPM]=$t.SCREEN,r[$t.NORMAL]=$t.NORMAL_NPM,r[$t.ADD]=$t.ADD_NPM,r[$t.SCREEN]=$t.SCREEN_NPM;var n=[];return n.push(r),n.push(t),n}QC();var $d={};function t2(t,r,e){if(e===void 0&&(e=3),!$d[r]){var n=new Error().stack;typeof n>"u"?console.warn("PixiJS Deprecation Warning: ",r+`
Deprecated since v`+t):(n=n.split(`
`).splice(e).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",r+`
Deprecated since v`+t),console.warn(n),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",r+`
Deprecated since v`+t),console.warn(n))),$d[r]=!0}}(function(){function t(r,e,n){this.canvas=wo.ADAPTER.createCanvas(),this.context=this.canvas.getContext("2d"),this.resolution=n||wo.RESOLUTION,this.resize(r,e)}return t.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},t.prototype.resize=function(r,e){this.canvas.width=Math.round(r*this.resolution),this.canvas.height=Math.round(e*this.resolution)},t.prototype.destroy=function(){this.context=null,this.canvas=null},Object.defineProperty(t.prototype,"width",{get:function(){return this.canvas.width},set:function(r){this.canvas.width=Math.round(r)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.canvas.height},set:function(r){this.canvas.height=Math.round(r)},enumerable:!1,configurable:!0}),t})();var e2=function(){function t(r){var e=this;this.stage=new Ht,r=Object.assign({forceCanvas:!1},r),this.renderer=mw(r),t._plugins.forEach(function(n){n.init.call(e,r)})}return t.registerPlugin=function(r){t2("6.5.0","Application.registerPlugin() is deprecated, use extensions.add()"),Be.add({type:Tt.Application,ref:r})},t.prototype.render=function(){this.renderer.render(this.stage)},Object.defineProperty(t.prototype,"view",{get:function(){return this.renderer.view},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"screen",{get:function(){return this.renderer.screen},enumerable:!1,configurable:!0}),t.prototype.destroy=function(r,e){var n=this,i=t._plugins.slice(0);i.reverse(),i.forEach(function(o){o.destroy.call(n)}),this.stage.destroy(e),this.stage=null,this.renderer.destroy(r),this.renderer=null},t._plugins=[],t}();Be.handleByList(Tt.Application,e2._plugins);Be.add(HC);/*!
 * @pixi/mesh-extras - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/mesh-extras is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var fl=function(t,r){return fl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},fl(t,r)};function ln(t,r){fl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var r2=function(t){ln(r,t);function r(e,n,i,o){e===void 0&&(e=100),n===void 0&&(n=100),i===void 0&&(i=10),o===void 0&&(o=10);var s=t.call(this)||this;return s.segWidth=i,s.segHeight=o,s.width=e,s.height=n,s.build(),s}return r.prototype.build=function(){for(var e=this.segWidth*this.segHeight,n=[],i=[],o=[],s=this.segWidth-1,l=this.segHeight-1,h=this.width/s,f=this.height/l,d=0;d<e;d++){var v=d%this.segWidth,m=d/this.segWidth|0;n.push(v*h,m*f),i.push(v/s,m/l)}for(var _=s*l,d=0;d<_;d++){var g=d%s,b=d/s|0,y=b*this.segWidth+g,w=b*this.segWidth+g+1,C=(b+1)*this.segWidth+g,T=(b+1)*this.segWidth+g+1;o.push(y,w,C,w,T,C)}this.buffers[0].data=new Float32Array(n),this.buffers[1].data=new Float32Array(i),this.indexBuffer.data=new Uint16Array(o),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()},r}(Vo),n2=function(t){ln(r,t);function r(e,n,i){e===void 0&&(e=200),i===void 0&&(i=0);var o=t.call(this,new Float32Array(n.length*4),new Float32Array(n.length*4),new Uint16Array((n.length-1)*6))||this;return o.points=n,o._width=e,o.textureScale=i,o.build(),o}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),r.prototype.build=function(){var e=this.points;if(!!e){var n=this.getBuffer("aVertexPosition"),i=this.getBuffer("aTextureCoord"),o=this.getIndex();if(!(e.length<1)){n.data.length/4!==e.length&&(n.data=new Float32Array(e.length*4),i.data=new Float32Array(e.length*4),o.data=new Uint16Array((e.length-1)*6));var s=i.data,l=o.data;s[0]=0,s[1]=0,s[2]=0,s[3]=1;for(var h=0,f=e[0],d=this._width*this.textureScale,v=e.length,m=0;m<v;m++){var _=m*4;if(this.textureScale>0){var g=f.x-e[m].x,b=f.y-e[m].y,y=Math.sqrt(g*g+b*b);f=e[m],h+=y/d}else h=m/(v-1);s[_]=h,s[_+1]=0,s[_+2]=h,s[_+3]=1}for(var w=0,m=0;m<v-1;m++){var _=m*2;l[w++]=_,l[w++]=_+1,l[w++]=_+2,l[w++]=_+2,l[w++]=_+1,l[w++]=_+3}i.update(),o.update(),this.updateVertices()}}},r.prototype.updateVertices=function(){var e=this.points;if(!(e.length<1)){for(var n=e[0],i,o=0,s=0,l=this.buffers[0].data,h=e.length,f=0;f<h;f++){var d=e[f],v=f*4;f<e.length-1?i=e[f+1]:i=d,s=-(i.x-n.x),o=i.y-n.y;var m=Math.sqrt(o*o+s*s),_=this.textureScale>0?this.textureScale*this._width/2:this._width/2;o/=m,s/=m,o*=_,s*=_,l[v]=d.x+o,l[v+1]=d.y+s,l[v+2]=d.x-o,l[v+3]=d.y-s,n=d}this.buffers[0].update()}},r.prototype.update=function(){this.textureScale>0?this.build():this.updateVertices()},r}(Vo);(function(t){ln(r,t);function r(e,n,i){i===void 0&&(i=0);var o=this,s=new n2(e.height,n,i),l=new hi(e);return i>0&&(e.baseTexture.wrapMode=ye.REPEAT),o=t.call(this,s,l)||this,o.autoUpdate=!0,o}return r.prototype._render=function(e){var n=this.geometry;(this.autoUpdate||n._width!==this.shader.texture.height)&&(n._width=this.shader.texture.height,n.update()),t.prototype._render.call(this,e)},r})(ui);var i2=function(t){ln(r,t);function r(e,n,i){var o=this,s=new r2(e.width,e.height,n,i),l=new hi(tt.WHITE);return o=t.call(this,s,l)||this,o.texture=e,o.autoResize=!0,o}return r.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID;var e=this.geometry,n=this.shader.texture,i=n.width,o=n.height;this.autoResize&&(e.width!==i||e.height!==o)&&(e.width=this.shader.texture.width,e.height=this.shader.texture.height,e.build())},Object.defineProperty(r.prototype,"texture",{get:function(){return this.shader.texture},set:function(e){this.shader.texture!==e&&(this.shader.texture=e,this._textureID=-1,e.baseTexture.valid?this.textureUpdated():e.once("update",this.textureUpdated,this))},enumerable:!1,configurable:!0}),r.prototype._render=function(e){this._textureID!==this.shader.texture._updateID&&this.textureUpdated(),t.prototype._render.call(this,e)},r.prototype.destroy=function(e){this.shader.texture.off("update",this.textureUpdated,this),t.prototype.destroy.call(this,e)},r}(ui);(function(t){ln(r,t);function r(e,n,i,o,s){e===void 0&&(e=tt.EMPTY);var l=this,h=new Vo(n,i,o);h.getBuffer("aVertexPosition").static=!1;var f=new hi(e);return l=t.call(this,h,f,null,s)||this,l.autoUpdate=!0,l}return Object.defineProperty(r.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(e){this.geometry.getBuffer("aVertexPosition").data=e},enumerable:!1,configurable:!0}),r.prototype._render=function(e){this.autoUpdate&&this.geometry.getBuffer("aVertexPosition").update(),t.prototype._render.call(this,e)},r})(ui);var so=10;(function(t){ln(r,t);function r(e,n,i,o,s){n===void 0&&(n=so),i===void 0&&(i=so),o===void 0&&(o=so),s===void 0&&(s=so);var l=t.call(this,tt.WHITE,4,4)||this;return l._origWidth=e.orig.width,l._origHeight=e.orig.height,l._width=l._origWidth,l._height=l._origHeight,l._leftWidth=n,l._rightWidth=o,l._topHeight=i,l._bottomHeight=s,l.texture=e,l}return r.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID,this._refresh()},Object.defineProperty(r.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(e){this.geometry.getBuffer("aVertexPosition").data=e},enumerable:!1,configurable:!0}),r.prototype.updateHorizontalVertices=function(){var e=this.vertices,n=this._getMinScale();e[9]=e[11]=e[13]=e[15]=this._topHeight*n,e[17]=e[19]=e[21]=e[23]=this._height-this._bottomHeight*n,e[25]=e[27]=e[29]=e[31]=this._height},r.prototype.updateVerticalVertices=function(){var e=this.vertices,n=this._getMinScale();e[2]=e[10]=e[18]=e[26]=this._leftWidth*n,e[4]=e[12]=e[20]=e[28]=this._width-this._rightWidth*n,e[6]=e[14]=e[22]=e[30]=this._width},r.prototype._getMinScale=function(){var e=this._leftWidth+this._rightWidth,n=this._width>e?1:this._width/e,i=this._topHeight+this._bottomHeight,o=this._height>i?1:this._height/i,s=Math.min(n,o);return s},Object.defineProperty(r.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"leftWidth",{get:function(){return this._leftWidth},set:function(e){this._leftWidth=e,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rightWidth",{get:function(){return this._rightWidth},set:function(e){this._rightWidth=e,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"topHeight",{get:function(){return this._topHeight},set:function(e){this._topHeight=e,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"bottomHeight",{get:function(){return this._bottomHeight},set:function(e){this._bottomHeight=e,this._refresh()},enumerable:!1,configurable:!0}),r.prototype._refresh=function(){var e=this.texture,n=this.geometry.buffers[1].data;this._origWidth=e.orig.width,this._origHeight=e.orig.height;var i=1/this._origWidth,o=1/this._origHeight;n[0]=n[8]=n[16]=n[24]=0,n[1]=n[3]=n[5]=n[7]=0,n[6]=n[14]=n[22]=n[30]=1,n[25]=n[27]=n[29]=n[31]=1,n[2]=n[10]=n[18]=n[26]=i*this._leftWidth,n[4]=n[12]=n[20]=n[28]=1-i*this._rightWidth,n[9]=n[11]=n[13]=n[15]=o*this._topHeight,n[17]=n[19]=n[21]=n[23]=1-o*this._bottomHeight,this.updateHorizontalVertices(),this.updateVerticalVertices(),this.geometry.buffers[0].update(),this.geometry.buffers[1].update()},r})(i2);/*!
 * @pixi/sprite-animated - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * @pixi/sprite-animated is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var dl=function(t,r){return dl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},dl(t,r)};function o2(t,r){dl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}(function(t){o2(r,t);function r(e,n){n===void 0&&(n=!0);var i=t.call(this,e[0]instanceof tt?e[0]:e[0].texture)||this;return i._textures=null,i._durations=null,i._autoUpdate=n,i._isConnectedToTicker=!1,i.animationSpeed=1,i.loop=!0,i.updateAnchor=!1,i.onComplete=null,i.onFrameChange=null,i.onLoop=null,i._currentTime=0,i._playing=!1,i._previousFrame=null,i.textures=e,i}return r.prototype.stop=function(){!this._playing||(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Vt.shared.remove(this.update,this),this._isConnectedToTicker=!1))},r.prototype.play=function(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Vt.shared.add(this.update,this,Me.HIGH),this._isConnectedToTicker=!0))},r.prototype.gotoAndStop=function(e){this.stop();var n=this.currentFrame;this._currentTime=e,n!==this.currentFrame&&this.updateTexture()},r.prototype.gotoAndPlay=function(e){var n=this.currentFrame;this._currentTime=e,n!==this.currentFrame&&this.updateTexture(),this.play()},r.prototype.update=function(e){if(!!this._playing){var n=this.animationSpeed*e,i=this.currentFrame;if(this._durations!==null){var o=this._currentTime%1*this._durations[this.currentFrame];for(o+=n/60*1e3;o<0;)this._currentTime--,o+=this._durations[this.currentFrame];var s=Math.sign(this.animationSpeed*e);for(this._currentTime=Math.floor(this._currentTime);o>=this._durations[this.currentFrame];)o-=this._durations[this.currentFrame]*s,this._currentTime+=s;this._currentTime+=o/this._durations[this.currentFrame]}else this._currentTime+=n;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):i!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<i?this.onLoop():this.animationSpeed<0&&this.currentFrame>i&&this.onLoop()),this.updateTexture())}},r.prototype.updateTexture=function(){var e=this.currentFrame;this._previousFrame!==e&&(this._previousFrame=e,this._texture=this._textures[e],this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this.uvs=this._texture._uvs.uvsFloat32,this.updateAnchor&&this._anchor.copyFrom(this._texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))},r.prototype.destroy=function(e){this.stop(),t.prototype.destroy.call(this,e),this.onComplete=null,this.onFrameChange=null,this.onLoop=null},r.fromFrames=function(e){for(var n=[],i=0;i<e.length;++i)n.push(tt.from(e[i]));return new r(n)},r.fromImages=function(e){for(var n=[],i=0;i<e.length;++i)n.push(tt.from(e[i]));return new r(n)},Object.defineProperty(r.prototype,"totalFrames",{get:function(){return this._textures.length},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"textures",{get:function(){return this._textures},set:function(e){if(e[0]instanceof tt)this._textures=e,this._durations=null;else{this._textures=[],this._durations=[];for(var n=0;n<e.length;n++)this._textures.push(e[n].texture),this._durations.push(e[n].time)}this._previousFrame=null,this.gotoAndStop(0),this.updateTexture()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"currentFrame",{get:function(){var e=Math.floor(this._currentTime)%this._textures.length;return e<0&&(e+=this._textures.length),e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(Vt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Vt.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),r})(wi);/*!
 * pixi.js - v6.5.3
 * Compiled Fri, 09 Sep 2022 13:55:20 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */Be.add(Nw,Mw,Fw,RT,QT,Dp,sC,bC,Qw,CT,ET,eC,qx,Xw);var s2={AlphaFilter:rv,BlurFilter:RC,BlurFilterPass:fi,ColorMatrixFilter:rl,DisplacementFilter:LC,FXAAFilter:BC,NoiseFilter:VC},Ue={i8:"i8",ui8:"ui8",ui8c:"ui8c",i16:"i16",ui16:"ui16",i32:"i32",ui32:"ui32",f32:"f32",f64:"f64",eid:"eid"},To={i8:"Int8",ui8:"Uint8",ui8c:"Uint8Clamped",i16:"Int16",ui16:"Uint16",i32:"Int32",ui32:"Uint32",eid:"Uint32",f32:"Float32",f64:"Float64"},ge={i8:Int8Array,ui8:Uint8Array,ui8c:Uint8ClampedArray,i16:Int16Array,ui16:Uint16Array,i32:Int32Array,ui32:Uint32Array,f32:Float32Array,f64:Float64Array,eid:Uint32Array},Co={uint8:2**8,uint16:2**16,uint32:2**32},a2=t=>r=>Math.ceil(r/t)*t,ov=a2(4),l2=Symbol("storeRef"),di=Symbol("storeSize"),u2=Symbol("storeMaps"),Xt=Symbol("storeFlattened"),Kr=Symbol("storeBase"),sv=Symbol("storeType"),su=Symbol("storeArrayElementCounts"),xr=Symbol("storeSubarrays"),pi=Symbol("subarrayCursors"),av=Symbol("subarray"),vi=Symbol("parentArray"),Ti=Symbol("tagStore"),Er=Symbol("indexType"),Pr=Symbol("indexBytes"),Eo=Symbol("isEidType"),Ne={},lv=(t,r)=>{const e=new ArrayBuffer(r*t.BYTES_PER_ELEMENT),n=new t.constructor(e);return n.set(t,0),n},uv=(t,r)=>{if(ArrayBuffer.isView(t))t[r]=t.slice(0);else{const e=t[vi].slice(0);t[r]=t.map((n,i)=>{const{length:o}=t[i],s=o*i,l=s+o;return e.subarray(s,l)})}},h2=(t,r,e)=>{const n=t[pi];let i=r[sv];const o=r[0].length,s=o<=Co.uint8?Ue.ui8:o<=Co.uint16?Ue.ui16:Ue.ui32;if(n[i]===0){const f=t[su][i],d=new ge[i](ov(f*e));d.set(t[xr][i]),t[xr][i]=d,d[Er]=To[s],d[Pr]=ge[s].BYTES_PER_ELEMENT}const l=n[i],h=l+e*o;n[i]=h,r[vi]=t[xr][i].subarray(l,h);for(let f=0;f<e;f++){const d=o*f,v=d+o;r[f]=r[vi].subarray(d,v),r[f][Er]=To[s],r[f][Pr]=ge[s].BYTES_PER_ELEMENT,r[f][av]=!0}},hv=(t,r,e)=>{Object.keys(r).forEach(n=>{const i=r[n];Array.isArray(i)?(h2(t,i,e),r[Xt].push(i)):ArrayBuffer.isView(i)?(r[n]=lv(i,e),r[Xt].push(r[n])):typeof i=="object"&&hv(t,r[n],e)})},cv=(t,r)=>{t[Ti]||(t[di]=r,t[Xt].length=0,Object.keys(t[pi]).forEach(e=>{t[pi][e]=0}),hv(t,t,r))},c2=(t,r)=>{t[Xt]&&t[Xt].forEach(e=>{ArrayBuffer.isView(e)?e[r]=0:e[r].fill(0)})},f2=(t,r)=>{const e=r*ge[t].BYTES_PER_ELEMENT,n=new ArrayBuffer(e),i=new ge[t](n);return i[Eo]=t===Ue.eid,i},d2=(t,r,e)=>{const n=t[di],i=Array(n).fill(0);i[sv]=r,i[Eo]=r===Ue.eid;const o=t[pi],s=e<=Co.uint8?Ue.ui8:e<=Co.uint16?Ue.ui16:Ue.ui32;if(!e)throw new Error("bitECS - Must define component array length");if(!ge[r])throw new Error(`bitECS - Invalid component array property type ${r}`);if(!t[xr][r]){const f=t[su][r],d=new ge[r](ov(f*n));d[Er]=To[s],d[Pr]=ge[s].BYTES_PER_ELEMENT,t[xr][r]=d}const l=o[r],h=l+n*e;o[r]=h,i[vi]=t[xr][r].subarray(l,h);for(let f=0;f<n;f++){const d=e*f,v=d+e;i[f]=i[vi].subarray(d,v),i[f][Er]=To[s],i[f][Pr]=ge[s].BYTES_PER_ELEMENT,i[f][av]=!0}return i},Wd=t=>Array.isArray(t)&&typeof t[0]=="string"&&typeof t[1]=="number",p2=(t,r)=>{const e=Symbol("store");if(!t||!Object.keys(t).length)return Ne[e]={[di]:r,[Ti]:!0,[Kr]:()=>Ne[e]},Ne[e];t=JSON.parse(JSON.stringify(t));const n={},i=s=>{const l=Object.keys(s);for(const h of l)Wd(s[h])?(n[s[h][0]]||(n[s[h][0]]=0),n[s[h][0]]+=s[h][1]):s[h]instanceof Object&&i(s[h])};i(t);const o={[di]:r,[u2]:{},[xr]:{},[l2]:e,[pi]:Object.keys(ge).reduce((s,l)=>({...s,[l]:0}),{}),[Xt]:[],[su]:n};if(t instanceof Object&&Object.keys(t).length){const s=(l,h)=>{if(typeof l[h]=="string")l[h]=f2(l[h],r),l[h][Kr]=()=>Ne[e],o[Xt].push(l[h]);else if(Wd(l[h])){const[f,d]=l[h];l[h]=d2(o,f,d),l[h][Kr]=()=>Ne[e],o[Xt].push(l[h])}else l[h]instanceof Object&&(l[h]=Object.keys(l[h]).reduce(s,l[h]));return l};return Ne[e]=Object.assign(Object.keys(t).reduce(s,t),o),Ne[e][Kr]=()=>Ne[e],Ne[e]}},Hn=()=>{const t=[],r=[];t.sort=function(o){const s=Array.prototype.sort.call(this,o);for(let l=0;l<t.length;l++)r[t[l]]=l;return s};const e=o=>t[r[o]]===o;return{add:o=>{e(o)||(r[o]=t.push(o)-1)},remove:o=>{if(!e(o))return;const s=r[o],l=t.pop();l!==o&&(t[s]=l,r[l]=s)},has:e,sparse:r,dense:t}},la={REPLACE:0,APPEND:1,MAP:2},mi=!1,v2=t=>{mi=t},qd=(t,r)=>t.concat(r),fv=t=>r=>!t(r),pl=t=>t[Xt],vl=pl,Yd=fv(vl),dv=t=>typeof t=="function",Kd=fv(dv),Zd=t=>dv(t)&&t()[1]==="changed",pv=t=>Object.getOwnPropertySymbols(t).includes(qt),Jd=t=>t()[0],Po=t=>{if(pv(t))return[[],new Map];const r=t.filter(Kd).filter(vl).map(pl).reduce(qd,[]),e=t.filter(Zd).map(Jd).filter(vl).map(pl).reduce(qd,[]),n=t.filter(Kd).filter(Yd),i=t.filter(Zd).map(Jd).filter(Yd),o=[...r,...n,...e,...i],s=[...e,...i].reduce((l,h)=>{const f=Symbol();return uv(h,f),l.set(h,f),l},new Map);return[o,s]},m2=(t,r=2e7)=>{const e=pv(t);let[n,i]=Po(t);const o=new ArrayBuffer(r),s=new DataView(o),l=new Map;return h=>{mi&&([n,i]=Po(t),mi=!1),e&&(n=[],t[qt].forEach((m,_)=>{_[Xt]?n.push(..._[Xt]):n.push(_)}));let f;Object.getOwnPropertySymbols(h).includes(qt)?(f=h,h=h[en]):f=_v.get(h[0]);let d=0;if(!h.length)return o.slice(0,d);const v=new Map;for(let m=0;m<n.length;m++){const _=n[m],g=_[Kr](),b=i.get(_),y=b?_[b]:null;v.has(g)||v.set(g,new Map),s.setUint8(d,m),d+=1;const w=d;d+=4;let C=0;for(let T=0;T<h.length;T++){const I=h[T];let P=l.get(I);P||(P=l.set(I,new Set).get(I)),P.add(I);const E=y&&v.get(g).get(I)||!P.has(g)&&gi(f,g,I);if(v.get(g).set(I,E),E)P.add(g);else if(!gi(f,g,I)){P.delete(g);continue}const S=d;if(s.setUint32(d,I),d+=4,_[Ti]){C++;continue}if(ArrayBuffer.isView(_[I])){const L=_[I].constructor.name.replace("Array",""),A=_[I][Er],U=_[I][Pr],j=d;d+=U;let q=0;for(let $=0;$<_[I].length;$++){if(y){const z=y[I][$]!==_[I][$];if(y[I][$]=_[I][$],!z&&!E)continue}s[`set${A}`](d,$),d+=U;const ot=_[I][$];s[`set${L}`](d,ot),d+=_[I].BYTES_PER_ELEMENT,q++}if(q>0)s[`set${A}`](j,q),C++;else{d=S;continue}}else{if(y){const A=y[I]!==_[I];if(y[I]=_[I],!A&&!E){d=S;continue}}const L=_.constructor.name.replace("Array","");s[`set${L}`](d,_[I]),d+=_.BYTES_PER_ELEMENT,C++}}C>0?s.setUint32(w,C):d-=5}return o.slice(0,d)}},Jt=new Map,_2=t=>{const r=Object.getOwnPropertySymbols(t).includes(qt);let[e]=Po(t);const n=new Set;return(i,o,s=0)=>{Jt.clear(),mi&&([e]=Po(t),mi=!1),r&&(e=[],t[qt].forEach((m,_)=>{_[Xt]?e.push(..._[Xt]):e.push(_)}));const l=i[fu],h=i[No],f=new DataView(o);let d=0;for(;d<o.byteLength;){const m=f.getUint8(d);d+=1;const _=f.getUint32(d);d+=4;const g=e[m];for(let b=0;b<_;b++){let y=f.getUint32(d);if(d+=4,s===la.MAP)if(l.has(y))y=l.get(y);else if(Jt.has(y))y=Jt.get(y);else{const C=Xn(i);l.set(y,C),h.set(C,y),Jt.set(y,C),y=C}if(s===la.APPEND||s===la.REPLACE&&!i[ke].has(y)){const C=Jt.get(y)||Xn(i);Jt.set(y,C),y=C}const w=g[Kr]();if(gi(i,w,y)||_l(i,w,y),n.add(y),!w[Ti])if(ArrayBuffer.isView(g[y])){const C=g[y],T=f[`get${C[Er]}`](d);d+=C[Pr];for(let I=0;I<T;I++){const P=f[`get${C[Er]}`](d);d+=C[Pr];const E=f[`get${C.constructor.name.replace("Array","")}`](d);if(d+=C.BYTES_PER_ELEMENT,g[Eo]){let S;if(l.has(E))S=l.get(E);else if(Jt.has(E))S=Jt.get(E);else{const L=Xn(i);l.set(E,L),h.set(L,E),Jt.set(E,L),S=L}g[y][P]=S}else g[y][P]=E}}else{const C=f[`get${g.constructor.name.replace("Array","")}`](d);if(d+=g.BYTES_PER_ELEMENT,g[Eo]){let T;if(l.has(C))T=l.get(C);else if(Jt.has(C))T=Jt.get(C);else{const I=Xn(i);l.set(C,I),h.set(I,C),Jt.set(C,I),T=I}g[y]=T}else g[y]=C}}}const v=Array.from(n);return n.clear(),v}},ue=Symbol("entityMasks"),jo=Symbol("entityComponents"),ke=Symbol("entitySparseSet"),en=Symbol("entityArray"),Ho=1e5,Io=0,Ir=Ho,g2=()=>Ir-Ir/5,_i=()=>Ir,Ro=[],vv=.01,mv=vv,y2=()=>{Ir=Ho,Io=0,mv=vv,Ro.length=0},b2=t=>{const r=Ir;Ho=t,y2(),Ir=t,L2(t),N2(t),v2(!0),console.info(`\u{1F47E} bitECS - resizing all data stores from ${r} to ${t}`)},x2=()=>Io,_v=new Map,Xn=t=>{if(Io>=g2()){const e=Ir,n=Math.ceil(e/2/4)*4;b2(e+n)}const r=Ro.length>Math.round(Ho*mv)?Ro.shift():Io++;return t[ke].add(r),_v.set(r,t),t[lu].forEach(e=>{uu(t,e,r)&&hu(e,r)}),t[jo].set(r,new Set),r},au=(t,r)=>{if(!!t[ke].has(r)){t[Xo].forEach(e=>{bv(t,e,r)}),Ro.push(r),t[ke].remove(r),t[jo].delete(r),t[fu].delete(t[No].get(r)),t[No].delete(r);for(let e=0;e<t[ue].length;e++)t[ue][e][r]=0}},Xo=Symbol("queries"),lu=Symbol("notQueries"),w2=Symbol("queryAny"),T2=Symbol("queryAll"),C2=Symbol("queryNone"),Ao=Symbol("queryMap"),Kn=Symbol("$dirtyQueries"),gv=Symbol("queryComponents"),E2=(t,r)=>{const e=[],n=[],i=[];r[gv].forEach(P=>{if(typeof P=="function"){const[E,S]=P();t[qt].has(E)||ml(t,E),S==="not"&&n.push(E),S==="changed"&&(i.push(E),e.push(E))}else t[qt].has(P)||ml(t,P),e.push(P)});const o=P=>t[qt].get(P),s=e.concat(n).map(o),l=Hn(),h=[],f=[],d=Hn(),v=Hn(),m=Hn(),_=s.map(P=>P.generationId).reduce((P,E)=>(P.includes(E)||P.push(E),P),[]),g=(P,E)=>(P[E.generationId]||(P[E.generationId]=0),P[E.generationId]|=E.bitflag,P),b=e.map(o).reduce(g,{}),y=n.map(o).reduce(g,{}),w=s.reduce(g,{}),C=e.filter(P=>!P[Ti]).map(P=>Object.getOwnPropertySymbols(P).includes(Xt)?P[Xt]:[P]).reduce((P,E)=>P.concat(E),[]),I=Object.assign(l,{archetypes:h,changed:f,components:e,notComponents:n,changedComponents:i,allComponents:s,masks:b,notMasks:y,hasMasks:w,generations:_,flatProps:C,toRemove:d,entered:v,exited:m,shadows:[]});t[Ao].set(r,I),t[Xo].add(I),s.forEach(P=>{P.queries.add(I)}),n.length&&t[lu].add(I);for(let P=0;P<x2();P++){if(!t[ke].has(P))continue;uu(t,I,P)&&hu(I,P)}},P2=(t,r)=>{const e=Symbol(),n=t.flatProps[r];return uv(n,e),t.shadows[r]=n[e],n[e]},I2=(t,r)=>{r&&(t.changed=[]);const{flatProps:e,shadows:n}=t;for(let i=0;i<t.dense.length;i++){const o=t.dense[i];let s=!1;for(let l=0;l<e.length;l++){const h=e[l],f=n[l]||P2(t,l);if(ArrayBuffer.isView(h[o])){for(let d=0;d<h[o].length;d++)if(h[o][d]!==f[o][d]){s=!0;break}f[o].set(h[o])}else h[o]!==f[o]&&(s=!0,f[o]=h[o])}s&&t.changed.push(o)}return t.changed},yv=(...t)=>{let r,e,n,i;if(Array.isArray(t[0])&&(r=t[0]),r===void 0||r[qt]!==void 0)return s=>s?s[en]:r[en];const o=function(s,l=!0){s[Ao].has(o)||E2(s,o);const h=s[Ao].get(o);return A2(s),h.changedComponents.length?I2(h,l):h.dense};return o[gv]=r,o[w2]=e,o[T2]=n,o[C2]=i,o},uu=(t,r,e)=>{const{masks:n,notMasks:i,generations:o}=r;for(let s=0;s<o.length;s++){const l=o[s],h=n[l],f=i[l],d=t[ue][l][e];if(f&&(d&f)!==0||h&&(d&h)!==h)return!1}return!0},hu=(t,r)=>{t.toRemove.remove(r),t.entered.add(r),t.add(r)},R2=t=>{for(let r=t.toRemove.dense.length-1;r>=0;r--){const e=t.toRemove.dense[r];t.toRemove.remove(e),t.remove(e)}},A2=t=>{!t[Kn].size||(t[Kn].forEach(R2),t[Kn].clear())},bv=(t,r,e)=>{!r.has(e)||r.toRemove.has(e)||(r.toRemove.add(e),t[Kn].add(r),r.exited.add(e))},qt=Symbol("componentMap"),xv=[],N2=t=>{xv.forEach(r=>cv(r,t))},cu=(t,r)=>{const e=p2(t,r||_i());return t&&Object.keys(t).length&&xv.push(e),e},O2=t=>{t[Jn]*=2,t[Jn]>=2**31&&(t[Jn]=1,t[ue].push(new Uint32Array(t[Zn])))},ml=(t,r)=>{if(!r)throw new Error("bitECS - Cannot register null or undefined component");const e=new Set,n=new Set,i=new Set;t[Xo].forEach(o=>{o.allComponents.includes(r)&&e.add(o)}),t[qt].set(r,{generationId:t[ue].length-1,bitflag:t[Jn],store:r,queries:e,notQueries:n,changedQueries:i}),r[di]<_i()&&cv(r,_i()),O2(t)},gi=(t,r,e)=>{const n=t[qt].get(r);if(!n)return!1;const{generationId:i,bitflag:o}=n;return(t[ue][i][e]&o)===o},_l=(t,r,e,n=!1)=>{if(e===void 0)throw new Error("bitECS - entity is undefined.");if(!t[ke].has(e))throw new Error("bitECS - entity does not exist in the world.");if(t[qt].has(r)||ml(t,r),gi(t,r,e))return;const i=t[qt].get(r),{generationId:o,bitflag:s,queries:l,notQueries:h}=i;t[ue][o][e]|=s,l.forEach(f=>{f.toRemove.remove(e);const d=uu(t,f,e);d&&(f.exited.remove(e),hu(f,e)),d||(f.entered.remove(e),bv(t,f,e))}),t[jo].get(e).add(r),n&&c2(r,e)},Zn=Symbol("size"),S2=Symbol("resizeThreshold"),Jn=Symbol("bitflag"),U2=Symbol("archetypes"),fu=Symbol("localEntities"),No=Symbol("localEntityLookup"),wv=[],L2=t=>{wv.forEach(r=>{r[Zn]=t;for(let e=0;e<r[ue].length;e++){const n=r[ue][e];r[ue][e]=lv(n,t)}r[S2]=r[Zn]-r[Zn]/5})},F2=(...t)=>{const r=typeof t[0]=="object"?t[0]:{},e=typeof t[0]=="number"?t[0]:typeof t[1]=="number"?t[1]:_i();return M2(r,e),wv.push(r),r},M2=(t,r=_i())=>(t[Zn]=r,t[en]&&t[en].forEach(e=>au(t,e)),t[ue]=[new Uint32Array(r)],t[jo]=new Map,t[U2]=[],t[ke]=Hn(),t[en]=t[ke].dense,t[Jn]=1,t[qt]=new Map,t[Ao]=new Map,t[Xo]=new Set,t[lu]=new Set,t[Kn]=new Set,t[fu]=new Map,t[No]=new Map,t),k2=t=>t[ke].dense.slice(0),WP=(...t)=>r=>{let e=r;for(let n=0;n<t.length;n++){const i=t[n];e=i(e)}return e},Ke=Ue,Qd={exports:{}};/*! Tweakpane 3.1.0 (c) 2016 cocopon, licensed under the MIT license. */(function(t,r){(function(e,n){n(r)})(Zr,function(e){class n{constructor(a){const[u,p]=a.split("-"),x=u.split(".");this.major=parseInt(x[0],10),this.minor=parseInt(x[1],10),this.patch=parseInt(x[2],10),this.prerelease=p!=null?p:null}toString(){const a=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[a,this.prerelease].join("-"):a}}class i{constructor(a){this.controller_=a}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(a){this.controller_.viewProps.set("disabled",a)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(a){this.controller_.viewProps.set("hidden",a)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class o{constructor(a){this.target=a}}class s extends o{constructor(a,u,p,x){super(a),this.value=u,this.presetKey=p,this.last=x!=null?x:!0}}class l extends o{constructor(a,u,p){super(a),this.value=u,this.presetKey=p}}class h extends o{constructor(a,u){super(a),this.expanded=u}}class f extends o{constructor(a,u){super(a),this.index=u}}function d(c){return c}function v(c){return c==null}function m(c,a){if(c.length!==a.length)return!1;for(let u=0;u<c.length;u++)if(c[u]!==a[u])return!1;return!0}const _={alreadydisposed:()=>"View has been already disposed",invalidparams:c=>`Invalid parameters for '${c.name}'`,nomatchingcontroller:c=>`No matching controller for '${c.key}'`,nomatchingview:c=>`No matching view for '${JSON.stringify(c.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:c=>`Property '${c.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class g{constructor(a){var u;this.message=(u=_[a.type](a.context))!==null&&u!==void 0?u:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=a.type}static alreadyDisposed(){return new g({type:"alreadydisposed"})}static notBindable(){return new g({type:"notbindable"})}static propertyNotFound(a){return new g({type:"propertynotfound",context:{name:a}})}static shouldNeverHappen(){return new g({type:"shouldneverhappen"})}}class b{constructor(a,u,p){this.obj_=a,this.key_=u,this.presetKey_=p!=null?p:u}static isBindable(a){return!(a===null||typeof a!="object")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(a){this.obj_[this.key_]=a}writeProperty(a,u){const p=this.read();if(!b.isBindable(p))throw g.notBindable();if(!(a in p))throw g.propertyNotFound(a);p[a]=u}}class y extends i{get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}get title(){var a;return(a=this.controller_.valueController.props.get("title"))!==null&&a!==void 0?a:""}set title(a){this.controller_.valueController.props.set("title",a)}on(a,u){const p=u.bind(this);return this.controller_.valueController.emitter.on(a,()=>{p(new o(this))}),this}}class w{constructor(){this.observers_={}}on(a,u){let p=this.observers_[a];return p||(p=this.observers_[a]=[]),p.push({handler:u}),this}off(a,u){const p=this.observers_[a];return p&&(this.observers_[a]=p.filter(x=>x.handler!==u)),this}emit(a,u){const p=this.observers_[a];!p||p.forEach(x=>{x.handler(u)})}}const C="tp";function T(c){return(u,p)=>[C,"-",c,"v",u?`_${u}`:"",p?`-${p}`:""].join("")}function I(c,a){return u=>a(c(u))}function P(c){return c.rawValue}function E(c,a){c.emitter.on("change",I(P,a)),a(c.rawValue)}function S(c,a,u){E(c.value(a),u)}function L(c,a,u){u?c.classList.add(a):c.classList.remove(a)}function A(c,a){return u=>{L(c,a,u)}}function U(c,a){E(c,u=>{a.textContent=u!=null?u:""})}const j=T("btn");class q{constructor(a,u){this.element=a.createElement("div"),this.element.classList.add(j()),u.viewProps.bindClassModifiers(this.element);const p=a.createElement("button");p.classList.add(j("b")),u.viewProps.bindDisabled(p),this.element.appendChild(p),this.buttonElement=p;const x=a.createElement("div");x.classList.add(j("t")),U(u.props.value("title"),x),this.buttonElement.appendChild(x)}}class ${constructor(a,u){this.emitter=new w,this.onClick_=this.onClick_.bind(this),this.props=u.props,this.viewProps=u.viewProps,this.view=new q(a,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ot{constructor(a,u){var p;this.constraint_=u==null?void 0:u.constraint,this.equals_=(p=u==null?void 0:u.equals)!==null&&p!==void 0?p:(x,R)=>x===R,this.emitter=new w,this.rawValue_=a}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(a){this.setRawValue(a,{forceEmit:!1,last:!0})}setRawValue(a,u){const p=u!=null?u:{forceEmit:!1,last:!0},x=this.constraint_?this.constraint_.constrain(a):a;!!this.equals_(this.rawValue_,x)&&!p.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=x,this.emitter.emit("change",{options:p,rawValue:x,sender:this}))}}class z{constructor(a){this.emitter=new w,this.value_=a}get rawValue(){return this.value_}set rawValue(a){this.setRawValue(a,{forceEmit:!1,last:!0})}setRawValue(a,u){const p=u!=null?u:{forceEmit:!1,last:!0};this.value_===a&&!p.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=a,this.emitter.emit("change",{options:p,rawValue:this.value_,sender:this}))}}function k(c,a){const u=a==null?void 0:a.constraint,p=a==null?void 0:a.equals;return!u&&!p?new z(c):new ot(c,a)}class B{constructor(a){this.emitter=new w,this.valMap_=a;for(const u in this.valMap_)this.valMap_[u].emitter.on("change",()=>{this.emitter.emit("change",{key:u,sender:this})})}static createCore(a){return Object.keys(a).reduce((p,x)=>Object.assign(p,{[x]:k(a[x])}),{})}static fromObject(a){const u=this.createCore(a);return new B(u)}get(a){return this.valMap_[a].rawValue}set(a,u){this.valMap_[a].rawValue=u}value(a){return this.valMap_[a]}}function Pt(c,a){const p=Object.keys(a).reduce((x,R)=>{if(x===void 0)return;const N=a[R],M=N(c[R]);return M.succeeded?Object.assign(Object.assign({},x),{[R]:M.value}):void 0},{});return p}function pt(c,a){return c.reduce((u,p)=>{if(u===void 0)return;const x=a(p);if(!(!x.succeeded||x.value===void 0))return[...u,x.value]},[])}function O(c){return c===null?!1:typeof c=="object"}function F(c){return a=>u=>{if(!a&&u===void 0)return{succeeded:!1,value:void 0};if(a&&u===void 0)return{succeeded:!0,value:void 0};const p=c(u);return p!==void 0?{succeeded:!0,value:p}:{succeeded:!1,value:void 0}}}function H(c){return{custom:a=>F(a)(c),boolean:F(a=>typeof a=="boolean"?a:void 0)(c),number:F(a=>typeof a=="number"?a:void 0)(c),string:F(a=>typeof a=="string"?a:void 0)(c),function:F(a=>typeof a=="function"?a:void 0)(c),constant:a=>F(u=>u===a?a:void 0)(c),raw:F(a=>a)(c),object:a=>F(u=>{if(!!O(u))return Pt(u,a)})(c),array:a=>F(u=>{if(!!Array.isArray(u))return pt(u,a)})(c)}}const D={optional:H(!0),required:H(!1)};function W(c,a){const u=D.required.object(a)(c);return u.succeeded?u.value:void 0}function st(c){return c&&c.parentElement&&c.parentElement.removeChild(c),null}function et(){return["veryfirst","first","last","verylast"]}const ft=T(""),_t={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class ht{constructor(a){this.parent_=null,this.blade=a.blade,this.view=a.view,this.viewProps=a.viewProps;const u=this.view.element;this.blade.value("positions").emitter.on("change",()=>{et().forEach(p=>{u.classList.remove(ft(void 0,_t[p]))}),this.blade.get("positions").forEach(p=>{u.classList.add(ft(void 0,_t[p]))})}),this.viewProps.handleDispose(()=>{st(u)})}get parent(){return this.parent_}}const it="http://www.w3.org/2000/svg";function Q(c){c.offsetHeight}function at(c,a){const u=c.style.transition;c.style.transition="none",a(),c.style.transition=u}function J(c){return c.ontouchstart!==void 0}function Ct(){return new Function("return this")()}function xt(){return Ct().document}function lt(c){const a=c.ownerDocument.defaultView;return a&&"document"in a?c.getContext("2d"):null}const Yt={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function ne(c,a){const u=c.createElementNS(it,"svg");return u.innerHTML=Yt[a],u}function rr(c,a,u){c.insertBefore(a,c.children[u])}function un(c){c.parentElement&&c.parentElement.removeChild(c)}function hn(c){for(;c.children.length>0;)c.removeChild(c.children[0])}function Ci(c){for(;c.childNodes.length>0;)c.removeChild(c.childNodes[0])}function cn(c){return c.relatedTarget?c.relatedTarget:"explicitOriginalTarget"in c?c.explicitOriginalTarget:null}const fn=T("lbl");function Nv(c,a){const u=c.createDocumentFragment();return a.split(`
`).map(x=>c.createTextNode(x)).forEach((x,R)=>{R>0&&u.appendChild(c.createElement("br")),u.appendChild(x)}),u}class mu{constructor(a,u){this.element=a.createElement("div"),this.element.classList.add(fn()),u.viewProps.bindClassModifiers(this.element);const p=a.createElement("div");p.classList.add(fn("l")),S(u.props,"label",R=>{v(R)?this.element.classList.add(fn(void 0,"nol")):(this.element.classList.remove(fn(void 0,"nol")),Ci(p),p.appendChild(Nv(a,R)))}),this.element.appendChild(p),this.labelElement=p;const x=a.createElement("div");x.classList.add(fn("v")),this.element.appendChild(x),this.valueElement=x}}class Ei extends ht{constructor(a,u){const p=u.valueController.viewProps;super(Object.assign(Object.assign({},u),{view:new mu(a,{props:u.props,viewProps:p}),viewProps:p})),this.props=u.props,this.valueController=u.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Ov={id:"button",type:"blade",accept(c){const a=D,u=W(c,{title:a.required.string,view:a.required.constant("button"),label:a.optional.string});return u?{params:u}:null},controller(c){return new Ei(c.document,{blade:c.blade,props:B.fromObject({label:c.params.label}),valueController:new $(c.document,{props:B.fromObject({title:c.params.title}),viewProps:c.viewProps})})},api(c){return!(c.controller instanceof Ei)||!(c.controller.valueController instanceof $)?null:new y(c.controller)}};class Rr extends ht{constructor(a){super(a),this.value=a.value}}function dn(){return new B({positions:k([],{equals:m})})}class pn extends B{constructor(a){super(a)}static create(a){const u={completed:!0,expanded:a,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},p=B.createCore(u);return new pn(p)}get styleExpanded(){var a;return(a=this.get("temporaryExpanded"))!==null&&a!==void 0?a:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const a=this.get("expandedHeight");return this.get("shouldFixHeight")&&!v(a)?`${a}px`:"auto"}bindExpandedClass(a,u){const p=()=>{this.styleExpanded?a.classList.add(u):a.classList.remove(u)};S(this,"expanded",p),S(this,"temporaryExpanded",p)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Sv(c,a){let u=0;return at(a,()=>{c.set("expandedHeight",null),c.set("temporaryExpanded",!0),Q(a),u=a.clientHeight,c.set("temporaryExpanded",null),Q(a)}),u}function _u(c,a){a.style.height=c.styleHeight}function qo(c,a){c.value("expanded").emitter.on("beforechange",()=>{c.set("completed",!1),v(c.get("expandedHeight"))&&c.set("expandedHeight",Sv(c,a)),c.set("shouldFixHeight",!0),Q(a)}),c.emitter.on("change",()=>{_u(c,a)}),_u(c,a),a.addEventListener("transitionend",u=>{u.propertyName==="height"&&c.cleanUpTransition()})}class Yo extends i{constructor(a,u){super(a),this.rackApi_=u}}function Uv(c,a){return c.addBlade(Object.assign(Object.assign({},a),{view:"button"}))}function Lv(c,a){return c.addBlade(Object.assign(Object.assign({},a),{view:"folder"}))}function Fv(c,a){const u=a!=null?a:{};return c.addBlade(Object.assign(Object.assign({},u),{view:"separator"}))}function Mv(c,a){return c.addBlade(Object.assign(Object.assign({},a),{view:"tab"}))}class Ko{constructor(a){this.emitter=new w,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=a}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(a){for(const u of this.allItems())if(a(u))return u;return null}includes(a){return this.cache_.has(a)}add(a,u){if(this.includes(a))throw g.shouldNeverHappen();const p=u!==void 0?u:this.items_.length;this.items_.splice(p,0,a),this.cache_.add(a);const x=this.extract_(a);x&&(x.emitter.on("add",this.onSubListAdd_),x.emitter.on("remove",this.onSubListRemove_),x.allItems().forEach(R=>{this.cache_.add(R)})),this.emitter.emit("add",{index:p,item:a,root:this,target:this})}remove(a){const u=this.items_.indexOf(a);if(u<0)return;this.items_.splice(u,1),this.cache_.delete(a);const p=this.extract_(a);p&&(p.emitter.off("add",this.onSubListAdd_),p.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:u,item:a,root:this,target:this})}onSubListAdd_(a){this.cache_.add(a.item),this.emitter.emit("add",{index:a.index,item:a.item,root:this,target:a.target})}onSubListRemove_(a){this.cache_.delete(a.item),this.emitter.emit("remove",{index:a.index,item:a.item,root:this,target:a.target})}}class Zo extends i{constructor(a){super(a),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new w,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}on(a,u){const p=u.bind(this);return this.emitter_.on(a,x=>{p(x.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(a){const u=a.sender.target.read();this.emitter_.emit("change",{event:new s(this,u,this.controller_.binding.target.presetKey,a.options.last)})}}class de extends Ei{constructor(a,u){super(a,u),this.binding=u.binding}}class Jo extends i{constructor(a){super(a),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new w,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}on(a,u){const p=u.bind(this);return this.emitter_.on(a,x=>{p(x.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(a){const u=a.sender.target.read();this.emitter_.emit("update",{event:new l(this,u,this.controller_.binding.target.presetKey)})}}class Ge extends Ei{constructor(a,u){super(a,u),this.binding=u.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function kv(c){return c instanceof Pi?c.apiSet_:c instanceof Yo?c.rackApi_.apiSet_:null}function vn(c,a){const u=c.find(p=>p.controller_===a);if(!u)throw g.shouldNeverHappen();return u}function gu(c,a,u){if(!b.isBindable(c))throw g.notBindable();return new b(c,a,u)}class Pi extends i{constructor(a,u){super(a),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new w,this.apiSet_=new Ko(kv),this.pool_=u;const p=this.controller_.rack;p.emitter.on("add",this.onRackAdd_),p.emitter.on("remove",this.onRackRemove_),p.emitter.on("inputchange",this.onRackInputChange_),p.emitter.on("monitorupdate",this.onRackMonitorUpdate_),p.children.forEach(x=>{this.setUpApi_(x)})}get children(){return this.controller_.rack.children.map(a=>vn(this.apiSet_,a))}addInput(a,u,p){const x=p!=null?p:{},R=this.controller_.view.element.ownerDocument,N=this.pool_.createInput(R,gu(a,u,x.presetKey),x),M=new Zo(N);return this.add(M,x.index)}addMonitor(a,u,p){const x=p!=null?p:{},R=this.controller_.view.element.ownerDocument,N=this.pool_.createMonitor(R,gu(a,u),x),M=new Jo(N);return this.add(M,x.index)}addFolder(a){return Lv(this,a)}addButton(a){return Uv(this,a)}addSeparator(a){return Fv(this,a)}addTab(a){return Mv(this,a)}add(a,u){this.controller_.rack.add(a.controller_,u);const p=this.apiSet_.find(x=>x.controller_===a.controller_);return p&&this.apiSet_.remove(p),this.apiSet_.add(a),a}remove(a){this.controller_.rack.remove(a.controller_)}addBlade(a){const u=this.controller_.view.element.ownerDocument,p=this.pool_.createBlade(u,a),x=this.pool_.createBladeApi(p);return this.add(x,a.index)}on(a,u){const p=u.bind(this);return this.emitter_.on(a,x=>{p(x.event)}),this}setUpApi_(a){this.apiSet_.find(p=>p.controller_===a)||this.apiSet_.add(this.pool_.createBladeApi(a))}onRackAdd_(a){this.setUpApi_(a.bladeController)}onRackRemove_(a){if(a.isRoot){const u=vn(this.apiSet_,a.bladeController);this.apiSet_.remove(u)}}onRackInputChange_(a){const u=a.bladeController;if(u instanceof de){const p=vn(this.apiSet_,u),x=u.binding;this.emitter_.emit("change",{event:new s(p,x.target.read(),x.target.presetKey,a.options.last)})}else if(u instanceof Rr){const p=vn(this.apiSet_,u);this.emitter_.emit("change",{event:new s(p,u.value.rawValue,void 0,a.options.last)})}}onRackMonitorUpdate_(a){if(!(a.bladeController instanceof Ge))throw g.shouldNeverHappen();const u=vn(this.apiSet_,a.bladeController),p=a.bladeController.binding;this.emitter_.emit("update",{event:new l(u,p.target.read(),p.target.presetKey)})}}class Qo extends Yo{constructor(a,u){super(a,new Pi(a.rackController,u)),this.emitter_=new w,this.controller_.foldable.value("expanded").emitter.on("change",p=>{this.emitter_.emit("fold",{event:new h(this,p.sender.rawValue)})}),this.rackApi_.on("change",p=>{this.emitter_.emit("change",{event:p})}),this.rackApi_.on("update",p=>{this.emitter_.emit("update",{event:p})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(a){this.controller_.foldable.set("expanded",a)}get title(){return this.controller_.props.get("title")}set title(a){this.controller_.props.set("title",a)}get children(){return this.rackApi_.children}addInput(a,u,p){return this.rackApi_.addInput(a,u,p)}addMonitor(a,u,p){return this.rackApi_.addMonitor(a,u,p)}addFolder(a){return this.rackApi_.addFolder(a)}addButton(a){return this.rackApi_.addButton(a)}addSeparator(a){return this.rackApi_.addSeparator(a)}addTab(a){return this.rackApi_.addTab(a)}add(a,u){return this.rackApi_.add(a,u)}remove(a){this.rackApi_.remove(a)}addBlade(a){return this.rackApi_.addBlade(a)}on(a,u){const p=u.bind(this);return this.emitter_.on(a,x=>{p(x.event)}),this}}class ts extends ht{constructor(a){super({blade:a.blade,view:a.view,viewProps:a.rackController.viewProps}),this.rackController=a.rackController}}class Bv{constructor(a,u){const p=T(u.viewName);this.element=a.createElement("div"),this.element.classList.add(p()),u.viewProps.bindClassModifiers(this.element)}}function Gv(c,a){for(let u=0;u<c.length;u++){const p=c[u];if(p instanceof de&&p.binding===a)return p}return null}function Dv(c,a){for(let u=0;u<c.length;u++){const p=c[u];if(p instanceof Ge&&p.binding===a)return p}return null}function Vv(c,a){for(let u=0;u<c.length;u++){const p=c[u];if(p instanceof Rr&&p.value===a)return p}return null}function es(c){return c instanceof mn?c.rack:c instanceof ts?c.rackController.rack:null}function jv(c){const a=es(c);return a?a.bcSet_:null}class Hv{constructor(a){var u;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new w,this.blade_=a!=null?a:null,(u=this.blade_)===null||u===void 0||u.value("positions").emitter.on("change",this.onBladePositionsChange_),this.bcSet_=new Ko(jv),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(a,u){a.parent&&a.parent.remove(a),a.parent_=this,this.bcSet_.add(a,u)}remove(a){a.parent_=null,this.bcSet_.remove(a)}find(a){return this.bcSet_.allItems().filter(u=>u instanceof a)}onSetAdd_(a){this.updatePositions_();const u=a.target===a.root;if(this.emitter.emit("add",{bladeController:a.item,index:a.index,isRoot:u,sender:this}),!u)return;const p=a.item;if(p.viewProps.emitter.on("change",this.onChildViewPropsChange_),p.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),p.viewProps.handleDispose(this.onChildDispose_),p instanceof de)p.binding.emitter.on("change",this.onChildInputChange_);else if(p instanceof Ge)p.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(p instanceof Rr)p.value.emitter.on("change",this.onChildValueChange_);else{const x=es(p);if(x){const R=x.emitter;R.on("layout",this.onDescendantLayout_),R.on("inputchange",this.onDescendantInputChange_),R.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(a){this.updatePositions_();const u=a.target===a.root;if(this.emitter.emit("remove",{bladeController:a.item,isRoot:u,sender:this}),!u)return;const p=a.item;if(p instanceof de)p.binding.emitter.off("change",this.onChildInputChange_);else if(p instanceof Ge)p.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(p instanceof Rr)p.value.emitter.off("change",this.onChildValueChange_);else{const x=es(p);if(x){const R=x.emitter;R.off("layout",this.onDescendantLayout_),R.off("inputchange",this.onDescendantInputChange_),R.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const a=this.bcSet_.items.filter(x=>!x.viewProps.get("hidden")),u=a[0],p=a[a.length-1];this.bcSet_.items.forEach(x=>{const R=[];x===u&&(R.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&R.push("veryfirst")),x===p&&(R.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&R.push("verylast")),x.blade.set("positions",R)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(a){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(u=>u.viewProps.get("disposed")).forEach(u=>{this.bcSet_.remove(u)})}onChildInputChange_(a){const u=Gv(this.find(de),a.sender);if(!u)throw g.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:u,options:a.options,sender:this})}onChildMonitorUpdate_(a){const u=Dv(this.find(Ge),a.sender);if(!u)throw g.shouldNeverHappen();this.emitter.emit("monitorupdate",{bladeController:u,sender:this})}onChildValueChange_(a){const u=Vv(this.find(Rr),a.sender);if(!u)throw g.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:u,options:a.options,sender:this})}onDescendantLayout_(a){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(a){this.emitter.emit("inputchange",{bladeController:a.bladeController,options:a.options,sender:this})}onDescendantMonitorUpdate_(a){this.emitter.emit("monitorupdate",{bladeController:a.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class mn extends ht{constructor(a,u){super(Object.assign(Object.assign({},u),{view:new Bv(a,{viewName:"brk",viewProps:u.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const p=new Hv(u.root?void 0:u.blade);p.emitter.on("add",this.onRackAdd_),p.emitter.on("remove",this.onRackRemove_),this.rack=p,this.viewProps.handleDispose(()=>{for(let x=this.rack.children.length-1;x>=0;x--)this.rack.children[x].viewProps.set("disposed",!0)})}onRackAdd_(a){!a.isRoot||rr(this.view.element,a.bladeController.view.element,a.index)}onRackRemove_(a){!a.isRoot||un(a.bladeController.view.element)}}const yu=T("cnt");class Xv{constructor(a,u){var p;this.className_=T((p=u.viewName)!==null&&p!==void 0?p:"fld"),this.element=a.createElement("div"),this.element.classList.add(this.className_(),yu()),u.viewProps.bindClassModifiers(this.element),this.foldable_=u.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),S(this.foldable_,"completed",A(this.element,this.className_(void 0,"cpl")));const x=a.createElement("button");x.classList.add(this.className_("b")),S(u.props,"title",K=>{v(K)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),u.viewProps.bindDisabled(x),this.element.appendChild(x),this.buttonElement=x;const R=a.createElement("div");R.classList.add(this.className_("t")),U(u.props.value("title"),R),this.buttonElement.appendChild(R),this.titleElement=R;const N=a.createElement("div");N.classList.add(this.className_("m")),this.buttonElement.appendChild(N);const M=u.containerElement;M.classList.add(this.className_("c")),this.element.appendChild(M),this.containerElement=M}}class rs extends ts{constructor(a,u){var p;const x=pn.create((p=u.expanded)!==null&&p!==void 0?p:!0),R=new mn(a,{blade:u.blade,root:u.root,viewProps:u.viewProps});super(Object.assign(Object.assign({},u),{rackController:R,view:new Xv(a,{containerElement:R.view.element,foldable:x,props:u.props,viewName:u.root?"rot":void 0,viewProps:u.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=u.props,this.foldable=x,qo(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const zv={id:"folder",type:"blade",accept(c){const a=D,u=W(c,{title:a.required.string,view:a.required.constant("folder"),expanded:a.optional.boolean});return u?{params:u}:null},controller(c){return new rs(c.document,{blade:c.blade,expanded:c.params.expanded,props:B.fromObject({title:c.params.title}),viewProps:c.viewProps})},api(c){return c.controller instanceof rs?new Qo(c.controller,c.pool):null}};class Ar extends Rr{constructor(a,u){const p=u.valueController.viewProps;super(Object.assign(Object.assign({},u),{value:u.valueController.value,view:new mu(a,{props:u.props,viewProps:p}),viewProps:p})),this.props=u.props,this.valueController=u.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class bu extends i{}const xu=T("spr");class $v{constructor(a,u){this.element=a.createElement("div"),this.element.classList.add(xu()),u.viewProps.bindClassModifiers(this.element);const p=a.createElement("hr");p.classList.add(xu("r")),this.element.appendChild(p)}}class wu extends ht{constructor(a,u){super(Object.assign(Object.assign({},u),{view:new $v(a,{viewProps:u.viewProps})}))}}const Wv={id:"separator",type:"blade",accept(c){const u=W(c,{view:D.required.constant("separator")});return u?{params:u}:null},controller(c){return new wu(c.document,{blade:c.blade,viewProps:c.viewProps})},api(c){return c.controller instanceof wu?new bu(c.controller):null}},qv=T("");function Tu(c,a){return A(c,qv(void 0,a))}class De extends B{constructor(a){super(a)}static create(a){var u,p;const x=a!=null?a:{},R={disabled:(u=x.disabled)!==null&&u!==void 0?u:!1,disposed:!1,hidden:(p=x.hidden)!==null&&p!==void 0?p:!1},N=B.createCore(R);return new De(N)}bindClassModifiers(a){S(this,"disabled",Tu(a,"disabled")),S(this,"hidden",Tu(a,"hidden"))}bindDisabled(a){S(this,"disabled",u=>{a.disabled=u})}bindTabIndex(a){S(this,"disabled",u=>{a.tabIndex=u?-1:0})}handleDispose(a){this.value("disposed").emitter.on("change",u=>{u&&a()})}}const _n=T("tbi");class Yv{constructor(a,u){this.element=a.createElement("div"),this.element.classList.add(_n()),u.viewProps.bindClassModifiers(this.element),S(u.props,"selected",R=>{R?this.element.classList.add(_n(void 0,"sel")):this.element.classList.remove(_n(void 0,"sel"))});const p=a.createElement("button");p.classList.add(_n("b")),u.viewProps.bindDisabled(p),this.element.appendChild(p),this.buttonElement=p;const x=a.createElement("div");x.classList.add(_n("t")),U(u.props.value("title"),x),this.buttonElement.appendChild(x),this.titleElement=x}}class Kv{constructor(a,u){this.emitter=new w,this.onClick_=this.onClick_.bind(this),this.props=u.props,this.viewProps=u.viewProps,this.view=new Yv(a,{props:u.props,viewProps:u.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Cu{constructor(a,u){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Kv(a,{props:u.itemProps,viewProps:De.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new mn(a,{blade:dn(),viewProps:De.create()}),this.props=u.props,S(this.props,"selected",p=>{this.itemController.props.set("selected",p),this.contentController.viewProps.set("hidden",!p)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Eu{constructor(a,u){this.controller_=a,this.rackApi_=u}get title(){var a;return(a=this.controller_.itemController.props.get("title"))!==null&&a!==void 0?a:""}set title(a){this.controller_.itemController.props.set("title",a)}get selected(){return this.controller_.props.get("selected")}set selected(a){this.controller_.props.set("selected",a)}get children(){return this.rackApi_.children}addButton(a){return this.rackApi_.addButton(a)}addFolder(a){return this.rackApi_.addFolder(a)}addSeparator(a){return this.rackApi_.addSeparator(a)}addTab(a){return this.rackApi_.addTab(a)}add(a,u){this.rackApi_.add(a,u)}remove(a){this.rackApi_.remove(a)}addInput(a,u,p){return this.rackApi_.addInput(a,u,p)}addMonitor(a,u,p){return this.rackApi_.addMonitor(a,u,p)}addBlade(a){return this.rackApi_.addBlade(a)}}class Pu extends Yo{constructor(a,u){super(a,new Pi(a.rackController,u)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new w,this.pageApiMap_=new Map,this.rackApi_.on("change",p=>{this.emitter_.emit("change",{event:p})}),this.rackApi_.on("update",p=>{this.emitter_.emit("update",{event:p})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(p=>{this.setUpPageApi_(p)})}get pages(){return this.controller_.pageSet.items.map(a=>{const u=this.pageApiMap_.get(a);if(!u)throw g.shouldNeverHappen();return u})}addPage(a){const u=this.controller_.view.element.ownerDocument,p=new Cu(u,{itemProps:B.fromObject({selected:!1,title:a.title}),props:B.fromObject({selected:!1})});this.controller_.add(p,a.index);const x=this.pageApiMap_.get(p);if(!x)throw g.shouldNeverHappen();return x}removePage(a){this.controller_.remove(a)}on(a,u){const p=u.bind(this);return this.emitter_.on(a,x=>{p(x.event)}),this}setUpPageApi_(a){const u=this.rackApi_.apiSet_.find(x=>x.controller_===a.contentController);if(!u)throw g.shouldNeverHappen();const p=new Eu(a,u);this.pageApiMap_.set(a,p)}onPageAdd_(a){this.setUpPageApi_(a.item)}onPageRemove_(a){if(!this.pageApiMap_.get(a.item))throw g.shouldNeverHappen();this.pageApiMap_.delete(a.item)}onSelect_(a){this.emitter_.emit("select",{event:new f(this,a.rawValue)})}}const Iu=-1;class Zv{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=k(!0),this.selectedIndex=k(Iu),this.items_=[]}add(a,u){const p=u!=null?u:this.items_.length;this.items_.splice(p,0,a),a.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(a){const u=this.items_.indexOf(a);u<0||(this.items_.splice(u,1),a.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Iu,this.empty.rawValue=!0;return}const a=this.items_.findIndex(u=>u.rawValue);a<0?(this.items_.forEach((u,p)=>{u.rawValue=p===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((u,p)=>{u.rawValue=p===a}),this.selectedIndex.rawValue=a),this.empty.rawValue=!1}onItemSelectedChange_(a){if(a.rawValue){const u=this.items_.findIndex(p=>p===a.sender);this.items_.forEach((p,x)=>{p.rawValue=x===u}),this.selectedIndex.rawValue=u}else this.keepSelection_()}}const Ii=T("tab");class Jv{constructor(a,u){this.element=a.createElement("div"),this.element.classList.add(Ii(),yu()),u.viewProps.bindClassModifiers(this.element),E(u.empty,A(this.element,Ii(void 0,"nop")));const p=a.createElement("div");p.classList.add(Ii("i")),this.element.appendChild(p),this.itemsElement=p;const x=u.contentsElement;x.classList.add(Ii("c")),this.element.appendChild(x),this.contentsElement=x}}class Ru extends ts{constructor(a,u){const p=new mn(a,{blade:u.blade,viewProps:u.viewProps}),x=new Zv;super({blade:u.blade,rackController:p,view:new Jv(a,{contentsElement:p.view.element,empty:x.empty,viewProps:u.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Ko(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=x}get pageSet(){return this.pageSet_}add(a,u){this.pageSet_.add(a,u)}remove(a){this.pageSet_.remove(this.pageSet_.items[a])}onPageAdd_(a){const u=a.item;rr(this.view.itemsElement,u.itemController.view.element,a.index),this.rackController.rack.add(u.contentController,a.index),this.tab.add(u.props.value("selected"))}onPageRemove_(a){const u=a.item;un(u.itemController.view.element),this.rackController.rack.remove(u.contentController),this.tab.remove(u.props.value("selected"))}}const Au={id:"tab",type:"blade",accept(c){const a=D,u=W(c,{pages:a.required.array(a.required.object({title:a.required.string})),view:a.required.constant("tab")});return!u||u.pages.length===0?null:{params:u}},controller(c){const a=new Ru(c.document,{blade:c.blade,viewProps:c.viewProps});return c.params.pages.forEach(u=>{const p=new Cu(c.document,{itemProps:B.fromObject({selected:!1,title:u.title}),props:B.fromObject({selected:!1})});a.add(p)}),a},api(c){return c.controller instanceof Ru?new Pu(c.controller,c.pool):null}};function Qv(c,a){const u=c.accept(a.params);if(!u)return null;const p=D.optional.boolean(a.params.disabled).value,x=D.optional.boolean(a.params.hidden).value;return c.controller({blade:dn(),document:a.document,params:Object.assign(Object.assign({},u.params),{disabled:p,hidden:x}),viewProps:De.create({disabled:p,hidden:x})})}class tm{constructor(){this.disabled=!1,this.emitter=new w}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class em{constructor(a,u){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=a,this.emitter=new w,this.interval_=u,this.setTimer_()}get disabled(){return this.disabled_}set disabled(a){this.disabled_=a,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const a=this.doc_.defaultView;a&&a.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const a=this.doc_.defaultView;a&&(this.timerId_=a.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class gn{constructor(a){this.constraints=a}constrain(a){return this.constraints.reduce((u,p)=>p.constrain(u),a)}}function pe(c,a){if(c instanceof a)return c;if(c instanceof gn){const u=c.constraints.reduce((p,x)=>p||(x instanceof a?x:null),null);if(u)return u}return null}class yn{constructor(a){this.options=a}constrain(a){const u=this.options;return u.length===0||u.filter(x=>x.value===a).length>0?a:u[0].value}}class Nr{constructor(a){this.maxValue=a.max,this.minValue=a.min}constrain(a){let u=a;return v(this.minValue)||(u=Math.max(u,this.minValue)),v(this.maxValue)||(u=Math.min(u,this.maxValue)),u}}class Ri{constructor(a,u=0){this.step=a,this.origin=u}constrain(a){const u=this.origin%this.step,p=Math.round((a-u)/this.step);return u+p*this.step}}const ns=T("lst");class rm{constructor(a,u){this.onValueChange_=this.onValueChange_.bind(this),this.props_=u.props,this.element=a.createElement("div"),this.element.classList.add(ns()),u.viewProps.bindClassModifiers(this.element);const p=a.createElement("select");p.classList.add(ns("s")),S(this.props_,"options",R=>{hn(p),R.forEach((N,M)=>{const K=a.createElement("option");K.dataset.index=String(M),K.textContent=N.text,K.value=String(N.value),p.appendChild(K)})}),u.viewProps.bindDisabled(p),this.element.appendChild(p),this.selectElement=p;const x=a.createElement("div");x.classList.add(ns("m")),x.appendChild(ne(a,"dropdown")),this.element.appendChild(x),u.value.emitter.on("change",this.onValueChange_),this.value_=u.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class bn{constructor(a,u){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=u.props,this.value=u.value,this.viewProps=u.viewProps,this.view=new rm(a,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(a){const p=a.currentTarget.selectedOptions.item(0);if(!p)return;const x=Number(p.dataset.index);this.value.rawValue=this.props.get("options")[x].value}}const Nu=T("pop");class nm{constructor(a,u){this.element=a.createElement("div"),this.element.classList.add(Nu()),u.viewProps.bindClassModifiers(this.element),E(u.shows,A(this.element,Nu(void 0,"v")))}}class Ou{constructor(a,u){this.shows=k(!1),this.viewProps=u.viewProps,this.view=new nm(a,{shows:this.shows,viewProps:this.viewProps})}}const Su=T("txt");class im{constructor(a,u){this.onChange_=this.onChange_.bind(this),this.element=a.createElement("div"),this.element.classList.add(Su()),u.viewProps.bindClassModifiers(this.element),this.props_=u.props,this.props_.emitter.on("change",this.onChange_);const p=a.createElement("input");p.classList.add(Su("i")),p.type="text",u.viewProps.bindDisabled(p),this.element.appendChild(p),this.inputElement=p,u.value.emitter.on("change",this.onChange_),this.value_=u.value,this.refresh()}refresh(){const a=this.props_.get("formatter");this.inputElement.value=a(this.value_.rawValue)}onChange_(){this.refresh()}}class Ai{constructor(a,u){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=u.parser,this.props=u.props,this.value=u.value,this.viewProps=u.viewProps,this.view=new im(a,{props:u.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(a){const p=a.currentTarget.value,x=this.parser_(p);v(x)||(this.value.rawValue=x),this.view.refresh()}}function om(c){return String(c)}function Uu(c){return c==="false"?!1:!!c}function Lu(c){return om(c)}class sm{constructor(a){this.text=a}evaluate(){return Number(this.text)}toString(){return this.text}}const am={"**":(c,a)=>Math.pow(c,a),"*":(c,a)=>c*a,"/":(c,a)=>c/a,"%":(c,a)=>c%a,"+":(c,a)=>c+a,"-":(c,a)=>c-a,"<<":(c,a)=>c<<a,">>":(c,a)=>c>>a,">>>":(c,a)=>c>>>a,"&":(c,a)=>c&a,"^":(c,a)=>c^a,"|":(c,a)=>c|a};class lm{constructor(a,u,p){this.left=u,this.operator=a,this.right=p}evaluate(){const a=am[this.operator];if(!a)throw new Error(`unexpected binary operator: '${this.operator}`);return a(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const um={"+":c=>c,"-":c=>-c,"~":c=>~c};class hm{constructor(a,u){this.operator=a,this.expression=u}evaluate(){const a=um[this.operator];if(!a)throw new Error(`unexpected unary operator: '${this.operator}`);return a(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function is(c){return(a,u)=>{for(let p=0;p<c.length;p++){const x=c[p](a,u);if(x!=="")return x}return""}}function xn(c,a){var u;const p=c.substr(a).match(/^\s+/);return(u=p&&p[0])!==null&&u!==void 0?u:""}function cm(c,a){const u=c.substr(a,1);return u.match(/^[1-9]$/)?u:""}function wn(c,a){var u;const p=c.substr(a).match(/^[0-9]+/);return(u=p&&p[0])!==null&&u!==void 0?u:""}function fm(c,a){const u=wn(c,a);if(u!=="")return u;const p=c.substr(a,1);if(a+=1,p!=="-"&&p!=="+")return"";const x=wn(c,a);return x===""?"":p+x}function os(c,a){const u=c.substr(a,1);if(a+=1,u.toLowerCase()!=="e")return"";const p=fm(c,a);return p===""?"":u+p}function Fu(c,a){const u=c.substr(a,1);if(u==="0")return u;const p=cm(c,a);return a+=p.length,p===""?"":p+wn(c,a)}function dm(c,a){const u=Fu(c,a);if(a+=u.length,u==="")return"";const p=c.substr(a,1);if(a+=p.length,p!==".")return"";const x=wn(c,a);return a+=x.length,u+p+x+os(c,a)}function pm(c,a){const u=c.substr(a,1);if(a+=u.length,u!==".")return"";const p=wn(c,a);return a+=p.length,p===""?"":u+p+os(c,a)}function vm(c,a){const u=Fu(c,a);return a+=u.length,u===""?"":u+os(c,a)}const mm=is([dm,pm,vm]);function _m(c,a){var u;const p=c.substr(a).match(/^[01]+/);return(u=p&&p[0])!==null&&u!==void 0?u:""}function gm(c,a){const u=c.substr(a,2);if(a+=u.length,u.toLowerCase()!=="0b")return"";const p=_m(c,a);return p===""?"":u+p}function ym(c,a){var u;const p=c.substr(a).match(/^[0-7]+/);return(u=p&&p[0])!==null&&u!==void 0?u:""}function bm(c,a){const u=c.substr(a,2);if(a+=u.length,u.toLowerCase()!=="0o")return"";const p=ym(c,a);return p===""?"":u+p}function xm(c,a){var u;const p=c.substr(a).match(/^[0-9a-f]+/i);return(u=p&&p[0])!==null&&u!==void 0?u:""}function wm(c,a){const u=c.substr(a,2);if(a+=u.length,u.toLowerCase()!=="0x")return"";const p=xm(c,a);return p===""?"":u+p}const Tm=is([gm,bm,wm]),Cm=is([Tm,mm]);function Em(c,a){const u=Cm(c,a);return a+=u.length,u===""?null:{evaluable:new sm(u),cursor:a}}function Pm(c,a){const u=c.substr(a,1);if(a+=u.length,u!=="(")return null;const p=ku(c,a);if(!p)return null;a=p.cursor,a+=xn(c,a).length;const x=c.substr(a,1);return a+=x.length,x!==")"?null:{evaluable:p.evaluable,cursor:a}}function Im(c,a){var u;return(u=Em(c,a))!==null&&u!==void 0?u:Pm(c,a)}function Mu(c,a){const u=Im(c,a);if(u)return u;const p=c.substr(a,1);if(a+=p.length,p!=="+"&&p!=="-"&&p!=="~")return null;const x=Mu(c,a);return x?(a=x.cursor,{cursor:a,evaluable:new hm(p,x.evaluable)}):null}function Rm(c,a,u){u+=xn(a,u).length;const p=c.filter(x=>a.startsWith(x,u))[0];return p?(u+=p.length,u+=xn(a,u).length,{cursor:u,operator:p}):null}function Am(c,a){return(u,p)=>{const x=c(u,p);if(!x)return null;p=x.cursor;let R=x.evaluable;for(;;){const N=Rm(a,u,p);if(!N)break;p=N.cursor;const M=c(u,p);if(!M)return null;p=M.cursor,R=new lm(N.operator,R,M.evaluable)}return R?{cursor:p,evaluable:R}:null}}const Nm=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((c,a)=>Am(c,a),Mu);function ku(c,a){return a+=xn(c,a).length,Nm(c,a)}function Om(c){const a=ku(c,0);return!a||a.cursor+xn(c,a.cursor).length!==c.length?null:a.evaluable}function Te(c){var a;const u=Om(c);return(a=u==null?void 0:u.evaluate())!==null&&a!==void 0?a:null}function Bu(c){if(typeof c=="number")return c;if(typeof c=="string"){const a=Te(c);if(!v(a))return a}return 0}function Sm(c){return String(c)}function Dt(c){return a=>a.toFixed(Math.max(Math.min(c,20),0))}const Um=Dt(0);function Ni(c){return Um(c)+"%"}function Gu(c){return String(c)}function ss(c){return c}function Du(c,a){for(;c.length<a;)c.push(void 0)}function Lm(c){const a=[];return Du(a,c),k(a)}function Fm(c){const a=c.indexOf(void 0);return a<0?c:c.slice(0,a)}function Mm(c,a){const u=[...Fm(c),a];return u.length>c.length?u.splice(0,u.length-c.length):Du(u,c.length),u}function Tn({primary:c,secondary:a,forward:u,backward:p}){let x=!1;function R(N){x||(x=!0,N(),x=!1)}c.emitter.on("change",N=>{R(()=>{a.setRawValue(u(c,a),N.options)})}),a.emitter.on("change",N=>{R(()=>{c.setRawValue(p(c,a),N.options)}),R(()=>{a.setRawValue(u(c,a),N.options)})}),R(()=>{a.setRawValue(u(c,a),{forceEmit:!1,last:!0})})}function zt(c,a){const u=c*(a.altKey?.1:1)*(a.shiftKey?10:1);return a.upKey?+u:a.downKey?-u:0}function Cn(c){return{altKey:c.altKey,downKey:c.key==="ArrowDown",shiftKey:c.shiftKey,upKey:c.key==="ArrowUp"}}function Ce(c){return{altKey:c.altKey,downKey:c.key==="ArrowLeft",shiftKey:c.shiftKey,upKey:c.key==="ArrowRight"}}function km(c){return c==="ArrowUp"||c==="ArrowDown"}function Vu(c){return km(c)||c==="ArrowLeft"||c==="ArrowRight"}function as(c,a){var u,p;const x=a.ownerDocument.defaultView,R=a.getBoundingClientRect();return{x:c.pageX-(((u=x&&x.scrollX)!==null&&u!==void 0?u:0)+R.left),y:c.pageY-(((p=x&&x.scrollY)!==null&&p!==void 0?p:0)+R.top)}}class nr{constructor(a){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=a,this.emitter=new w,a.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),a.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),a.addEventListener("touchend",this.onTouchEnd_),a.addEventListener("mousedown",this.onMouseDown_)}computePosition_(a){const u=this.elem_.getBoundingClientRect();return{bounds:{width:u.width,height:u.height},point:a?{x:a.x,y:a.y}:null}}onMouseDown_(a){var u;a.preventDefault(),(u=a.currentTarget)===null||u===void 0||u.focus();const p=this.elem_.ownerDocument;p.addEventListener("mousemove",this.onDocumentMouseMove_),p.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:a.altKey,data:this.computePosition_(as(a,this.elem_)),sender:this,shiftKey:a.shiftKey})}onDocumentMouseMove_(a){this.emitter.emit("move",{altKey:a.altKey,data:this.computePosition_(as(a,this.elem_)),sender:this,shiftKey:a.shiftKey})}onDocumentMouseUp_(a){const u=this.elem_.ownerDocument;u.removeEventListener("mousemove",this.onDocumentMouseMove_),u.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:a.altKey,data:this.computePosition_(as(a,this.elem_)),sender:this,shiftKey:a.shiftKey})}onTouchStart_(a){a.preventDefault();const u=a.targetTouches.item(0),p=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:a.altKey,data:this.computePosition_(u?{x:u.clientX-p.left,y:u.clientY-p.top}:void 0),sender:this,shiftKey:a.shiftKey}),this.lastTouch_=u}onTouchMove_(a){const u=a.targetTouches.item(0),p=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:a.altKey,data:this.computePosition_(u?{x:u.clientX-p.left,y:u.clientY-p.top}:void 0),sender:this,shiftKey:a.shiftKey}),this.lastTouch_=u}onTouchEnd_(a){var u;const p=(u=a.targetTouches.item(0))!==null&&u!==void 0?u:this.lastTouch_,x=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:a.altKey,data:this.computePosition_(p?{x:p.clientX-x.left,y:p.clientY-x.top}:void 0),sender:this,shiftKey:a.shiftKey})}}function It(c,a,u,p,x){const R=(c-a)/(u-a);return p+R*(x-p)}function ju(c){return String(c.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function kt(c,a,u){return Math.min(Math.max(c,a),u)}function Hu(c,a){return(c%a+a)%a}const Kt=T("txt");class Bm{constructor(a,u){this.onChange_=this.onChange_.bind(this),this.props_=u.props,this.props_.emitter.on("change",this.onChange_),this.element=a.createElement("div"),this.element.classList.add(Kt(),Kt(void 0,"num")),u.arrayPosition&&this.element.classList.add(Kt(void 0,u.arrayPosition)),u.viewProps.bindClassModifiers(this.element);const p=a.createElement("input");p.classList.add(Kt("i")),p.type="text",u.viewProps.bindDisabled(p),this.element.appendChild(p),this.inputElement=p,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=u.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Kt()),this.inputElement.classList.add(Kt("i"));const x=a.createElement("div");x.classList.add(Kt("k")),this.element.appendChild(x),this.knobElement=x;const R=a.createElementNS(it,"svg");R.classList.add(Kt("g")),this.knobElement.appendChild(R);const N=a.createElementNS(it,"path");N.classList.add(Kt("gb")),R.appendChild(N),this.guideBodyElem_=N;const M=a.createElementNS(it,"path");M.classList.add(Kt("gh")),R.appendChild(M),this.guideHeadElem_=M;const K=a.createElement("div");K.classList.add(T("tt")()),this.knobElement.appendChild(K),this.tooltipElem_=K,u.value.emitter.on("change",this.onChange_),this.value=u.value,this.refresh()}onDraggingChange_(a){if(a.rawValue===null){this.element.classList.remove(Kt(void 0,"drg"));return}this.element.classList.add(Kt(void 0,"drg"));const u=a.rawValue/this.props_.get("draggingScale"),p=u+(u>0?-1:u<0?1:0),x=kt(-p,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${p+x},0 L${p},4 L${p+x},8`,`M ${u},-1 L${u},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${u},4`);const R=this.props_.get("formatter");this.tooltipElem_.textContent=R(this.value.rawValue),this.tooltipElem_.style.left=`${u}px`}refresh(){const a=this.props_.get("formatter");this.inputElement.value=a(this.value.rawValue)}onChange_(){this.refresh()}}class En{constructor(a,u){var p;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=u.baseStep,this.parser_=u.parser,this.props=u.props,this.sliderProps_=(p=u.sliderProps)!==null&&p!==void 0?p:null,this.value=u.value,this.viewProps=u.viewProps,this.dragging_=k(null),this.view=new Bm(a,{arrayPosition:u.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const x=new nr(this.view.knobElement);x.emitter.on("down",this.onPointerDown_),x.emitter.on("move",this.onPointerMove_),x.emitter.on("up",this.onPointerUp_)}constrainValue_(a){var u,p;const x=(u=this.sliderProps_)===null||u===void 0?void 0:u.get("minValue"),R=(p=this.sliderProps_)===null||p===void 0?void 0:p.get("maxValue");let N=a;return x!==void 0&&(N=Math.max(N,x)),R!==void 0&&(N=Math.min(N,R)),N}onInputChange_(a){const p=a.currentTarget.value,x=this.parser_(p);v(x)||(this.value.rawValue=this.constrainValue_(x)),this.view.refresh()}onInputKeyDown_(a){const u=zt(this.baseStep_,Cn(a));u!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+u),{forceEmit:!1,last:!1})}onInputKeyUp_(a){zt(this.baseStep_,Cn(a))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(a){if(!a.point)return null;const u=a.point.x-a.bounds.width/2;return this.constrainValue_(this.originRawValue_+u*this.props.get("draggingScale"))}onPointerMove_(a){const u=this.computeDraggingValue_(a.data);u!==null&&(this.value.setRawValue(u,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(a){const u=this.computeDraggingValue_(a.data);u!==null&&(this.value.setRawValue(u,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const ls=T("sld");class Gm{constructor(a,u){this.onChange_=this.onChange_.bind(this),this.props_=u.props,this.props_.emitter.on("change",this.onChange_),this.element=a.createElement("div"),this.element.classList.add(ls()),u.viewProps.bindClassModifiers(this.element);const p=a.createElement("div");p.classList.add(ls("t")),u.viewProps.bindTabIndex(p),this.element.appendChild(p),this.trackElement=p;const x=a.createElement("div");x.classList.add(ls("k")),this.trackElement.appendChild(x),this.knobElement=x,u.value.emitter.on("change",this.onChange_),this.value=u.value,this.update_()}update_(){const a=kt(It(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${a}%`}onChange_(){this.update_()}}class Dm{constructor(a,u){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=u.baseStep,this.value=u.value,this.viewProps=u.viewProps,this.props=u.props,this.view=new Gm(a,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new nr(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(a,u){!a.point||this.value.setRawValue(It(kt(a.point.x,0,a.bounds.width),0,a.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),u)}onPointerDownOrMove_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerUp_(a){this.handlePointerEvent_(a.data,{forceEmit:!0,last:!0})}onKeyDown_(a){const u=zt(this.baseStep_,Ce(a));u!==0&&this.value.setRawValue(this.value.rawValue+u,{forceEmit:!1,last:!1})}onKeyUp_(a){zt(this.baseStep_,Ce(a))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const us=T("sldtxt");class Vm{constructor(a,u){this.element=a.createElement("div"),this.element.classList.add(us());const p=a.createElement("div");p.classList.add(us("s")),this.sliderView_=u.sliderView,p.appendChild(this.sliderView_.element),this.element.appendChild(p);const x=a.createElement("div");x.classList.add(us("t")),this.textView_=u.textView,x.appendChild(this.textView_.element),this.element.appendChild(x)}}class hs{constructor(a,u){this.value=u.value,this.viewProps=u.viewProps,this.sliderC_=new Dm(a,{baseStep:u.baseStep,props:u.sliderProps,value:u.value,viewProps:this.viewProps}),this.textC_=new En(a,{baseStep:u.baseStep,parser:u.parser,props:u.textProps,sliderProps:u.sliderProps,value:u.value,viewProps:u.viewProps}),this.view=new Vm(a,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Pn(c,a){c.write(a)}function Oi(c){const a=D;if(Array.isArray(c))return a.required.array(a.required.object({text:a.required.string,value:a.required.raw}))(c).value;if(typeof c=="object")return a.required.raw(c).value}function Xu(c){if(c==="inline"||c==="popup")return c}function Ve(c){const a=D;return a.required.object({max:a.optional.number,min:a.optional.number,step:a.optional.number})(c).value}function zu(c){if(Array.isArray(c))return c;const a=[];return Object.keys(c).forEach(u=>{a.push({text:u,value:c[u]})}),a}function cs(c){return v(c)?null:new yn(zu(c))}function fs(c){const a=c?pe(c,yn):null;return a?a.options:null}function jm(c){const a=c?pe(c,Ri):null;return a?a.step:null}function Si(c,a){const u=c&&pe(c,Ri);return u?ju(u.step):Math.max(ju(a),2)}function Or(c){const a=jm(c);return a!=null?a:1}function Sr(c,a){var u;const p=c&&pe(c,Ri),x=Math.abs((u=p==null?void 0:p.step)!==null&&u!==void 0?u:a);return x===0?.1:Math.pow(10,Math.floor(Math.log10(x))-1)}const Ui=T("ckb");class Hm{constructor(a,u){this.onValueChange_=this.onValueChange_.bind(this),this.element=a.createElement("div"),this.element.classList.add(Ui()),u.viewProps.bindClassModifiers(this.element);const p=a.createElement("label");p.classList.add(Ui("l")),this.element.appendChild(p);const x=a.createElement("input");x.classList.add(Ui("i")),x.type="checkbox",p.appendChild(x),this.inputElement=x,u.viewProps.bindDisabled(this.inputElement);const R=a.createElement("div");R.classList.add(Ui("w")),p.appendChild(R);const N=ne(a,"check");R.appendChild(N),u.value.emitter.on("change",this.onValueChange_),this.value=u.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Xm{constructor(a,u){this.onInputChange_=this.onInputChange_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.view=new Hm(a,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(a){const u=a.currentTarget;this.value.rawValue=u.checked}}function zm(c){const a=[],u=cs(c.options);return u&&a.push(u),new gn(a)}const $m={id:"input-bool",type:"input",accept:(c,a)=>{if(typeof c!="boolean")return null;const p=W(a,{options:D.optional.custom(Oi)});return p?{initialValue:c,params:p}:null},binding:{reader:c=>Uu,constraint:c=>zm(c.params),writer:c=>Pn},controller:c=>{var a;const u=c.document,p=c.value,x=c.constraint;return x&&pe(x,yn)?new bn(u,{props:B.fromObject({options:(a=fs(x))!==null&&a!==void 0?a:[]}),value:p,viewProps:c.viewProps}):new Xm(u,{value:p,viewProps:c.viewProps})}},ir=T("col");class Wm{constructor(a,u){this.element=a.createElement("div"),this.element.classList.add(ir()),u.foldable.bindExpandedClass(this.element,ir(void 0,"expanded")),S(u.foldable,"completed",A(this.element,ir(void 0,"cpl")));const p=a.createElement("div");p.classList.add(ir("h")),this.element.appendChild(p);const x=a.createElement("div");x.classList.add(ir("s")),p.appendChild(x),this.swatchElement=x;const R=a.createElement("div");if(R.classList.add(ir("t")),p.appendChild(R),this.textElement=R,u.pickerLayout==="inline"){const N=a.createElement("div");N.classList.add(ir("p")),this.element.appendChild(N),this.pickerElement=N}else this.pickerElement=null}}function qm(c,a,u){const p=kt(c/255,0,1),x=kt(a/255,0,1),R=kt(u/255,0,1),N=Math.max(p,x,R),M=Math.min(p,x,R),K=N-M;let rt=0,yt=0;const bt=(M+N)/2;return K!==0&&(yt=K/(1-Math.abs(N+M-1)),p===N?rt=(x-R)/K:x===N?rt=2+(R-p)/K:rt=4+(p-x)/K,rt=rt/6+(rt<0?1:0)),[rt*360,yt*100,bt*100]}function Ym(c,a,u){const p=(c%360+360)%360,x=kt(a/100,0,1),R=kt(u/100,0,1),N=(1-Math.abs(2*R-1))*x,M=N*(1-Math.abs(p/60%2-1)),K=R-N/2;let rt,yt,bt;return p>=0&&p<60?[rt,yt,bt]=[N,M,0]:p>=60&&p<120?[rt,yt,bt]=[M,N,0]:p>=120&&p<180?[rt,yt,bt]=[0,N,M]:p>=180&&p<240?[rt,yt,bt]=[0,M,N]:p>=240&&p<300?[rt,yt,bt]=[M,0,N]:[rt,yt,bt]=[N,0,M],[(rt+K)*255,(yt+K)*255,(bt+K)*255]}function Km(c,a,u){const p=kt(c/255,0,1),x=kt(a/255,0,1),R=kt(u/255,0,1),N=Math.max(p,x,R),M=Math.min(p,x,R),K=N-M;let rt;K===0?rt=0:N===p?rt=60*(((x-R)/K%6+6)%6):N===x?rt=60*((R-p)/K+2):rt=60*((p-x)/K+4);const yt=N===0?0:K/N,bt=N;return[rt,yt*100,bt*100]}function $u(c,a,u){const p=Hu(c,360),x=kt(a/100,0,1),R=kt(u/100,0,1),N=R*x,M=N*(1-Math.abs(p/60%2-1)),K=R-N;let rt,yt,bt;return p>=0&&p<60?[rt,yt,bt]=[N,M,0]:p>=60&&p<120?[rt,yt,bt]=[M,N,0]:p>=120&&p<180?[rt,yt,bt]=[0,N,M]:p>=180&&p<240?[rt,yt,bt]=[0,M,N]:p>=240&&p<300?[rt,yt,bt]=[M,0,N]:[rt,yt,bt]=[N,0,M],[(rt+K)*255,(yt+K)*255,(bt+K)*255]}function Zm(c,a,u){const p=u+a*(100-Math.abs(2*u-100))/200;return[c,p!==0?a*(100-Math.abs(2*u-100))/p:0,u+a*(100-Math.abs(2*u-100))/(2*100)]}function Jm(c,a,u){const p=100-Math.abs(u*(200-a)/100-100);return[c,p!==0?a*u/p:0,u*(200-a)/(2*100)]}function or(c){return[c[0],c[1],c[2]]}function Wu(c,a){return[c[0],c[1],c[2],a]}const Qm={hsl:{hsl:(c,a,u)=>[c,a,u],hsv:Zm,rgb:Ym},hsv:{hsl:Jm,hsv:(c,a,u)=>[c,a,u],rgb:$u},rgb:{hsl:qm,hsv:Km,rgb:(c,a,u)=>[c,a,u]}};function Li(c,a){return[a==="float"?1:c==="rgb"?255:360,a==="float"?1:c==="rgb"?255:100,a==="float"?1:c==="rgb"?255:100]}function t_(c,a,u){var p;const x=Li(a,u);return[a==="rgb"?kt(c[0],0,x[0]):Hu(c[0],x[0]),kt(c[1],0,x[1]),kt(c[2],0,x[2]),kt((p=c[3])!==null&&p!==void 0?p:1,0,1)]}function qu(c,a,u,p){const x=Li(a,u),R=Li(a,p);return c.map((N,M)=>N/x[M]*R[M])}function e_(c,a,u){const p=qu(c,a.mode,a.type,"int"),x=Qm[a.mode][u.mode](...p);return qu(x,u.mode,"int",u.type)}function Fi(c,a){return typeof c!="object"||v(c)?!1:a in c&&typeof c[a]=="number"}class dt{constructor(a,u,p="int"){this.mode=u,this.type=p,this.comps_=t_(a,u,p)}static black(a="int"){return new dt([0,0,0],"rgb",a)}static fromObject(a,u="int"){const p="a"in a?[a.r,a.g,a.b,a.a]:[a.r,a.g,a.b];return new dt(p,"rgb",u)}static toRgbaObject(a,u="int"){return a.toRgbaObject(u)}static isRgbColorObject(a){return Fi(a,"r")&&Fi(a,"g")&&Fi(a,"b")}static isRgbaColorObject(a){return this.isRgbColorObject(a)&&Fi(a,"a")}static isColorObject(a){return this.isRgbColorObject(a)}static equals(a,u){if(a.mode!==u.mode)return!1;const p=a.comps_,x=u.comps_;for(let R=0;R<p.length;R++)if(p[R]!==x[R])return!1;return!0}getComponents(a,u="int"){return Wu(e_(or(this.comps_),{mode:this.mode,type:this.type},{mode:a!=null?a:this.mode,type:u}),this.comps_[3])}toRgbaObject(a="int"){const u=this.getComponents("rgb",a);return{r:u[0],g:u[1],b:u[2],a:u[3]}}}const je=T("colp");class r_{constructor(a,u){this.alphaViews_=null,this.element=a.createElement("div"),this.element.classList.add(je());const p=a.createElement("div");p.classList.add(je("hsv"));const x=a.createElement("div");x.classList.add(je("sv")),this.svPaletteView_=u.svPaletteView,x.appendChild(this.svPaletteView_.element),p.appendChild(x);const R=a.createElement("div");R.classList.add(je("h")),this.hPaletteView_=u.hPaletteView,R.appendChild(this.hPaletteView_.element),p.appendChild(R),this.element.appendChild(p);const N=a.createElement("div");if(N.classList.add(je("rgb")),this.textView_=u.textView,N.appendChild(this.textView_.element),this.element.appendChild(N),u.alphaViews){this.alphaViews_={palette:u.alphaViews.palette,text:u.alphaViews.text};const M=a.createElement("div");M.classList.add(je("a"));const K=a.createElement("div");K.classList.add(je("ap")),K.appendChild(this.alphaViews_.palette.element),M.appendChild(K);const rt=a.createElement("div");rt.classList.add(je("at")),rt.appendChild(this.alphaViews_.text.element),M.appendChild(rt),this.element.appendChild(M)}}get allFocusableElements(){const a=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(u=>u.inputElement)];return this.alphaViews_&&a.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),a}}function n_(c){return c==="int"?"int":c==="float"?"float":void 0}function ds(c){const a=D;return W(c,{alpha:a.optional.boolean,color:a.optional.object({alpha:a.optional.boolean,type:a.optional.custom(n_)}),expanded:a.optional.boolean,picker:a.optional.custom(Xu)})}function sr(c){return c?.1:1}function ar(c){var a;return(a=c.color)===null||a===void 0?void 0:a.type}function i_(c,a){return c.alpha===a.alpha&&c.mode===a.mode&&c.notation===a.notation&&c.type===a.type}function Zt(c,a){const u=c.match(/^(.+)%$/);return Math.min(u?parseFloat(u[1])*.01*a:parseFloat(c),a)}const o_={deg:c=>c,grad:c=>c*360/400,rad:c=>c*360/(2*Math.PI),turn:c=>c*360};function Yu(c){const a=c.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!a)return parseFloat(c);const u=parseFloat(a[1]),p=a[2];return o_[p](u)}function Ku(c){const a=c.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!a)return null;const u=[Zt(a[1],255),Zt(a[2],255),Zt(a[3],255)];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])?null:u}function Zu(c){return a=>{const u=Ku(a);return u?new dt(u,"rgb",c):null}}function Ju(c){const a=c.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!a)return null;const u=[Zt(a[1],255),Zt(a[2],255),Zt(a[3],255),Zt(a[4],1)];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])||isNaN(u[3])?null:u}function Qu(c){return a=>{const u=Ju(a);return u?new dt(u,"rgb",c):null}}function th(c){const a=c.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!a)return null;const u=[Yu(a[1]),Zt(a[2],100),Zt(a[3],100)];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])?null:u}function eh(c){return a=>{const u=th(a);return u?new dt(u,"hsl",c):null}}function rh(c){const a=c.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!a)return null;const u=[Yu(a[1]),Zt(a[2],100),Zt(a[3],100),Zt(a[4],1)];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])||isNaN(u[3])?null:u}function nh(c){return a=>{const u=rh(a);return u?new dt(u,"hsl",c):null}}function ih(c){const a=c.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(a)return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];const u=c.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return u?[parseInt(u[1],16),parseInt(u[2],16),parseInt(u[3],16)]:null}function s_(c){const a=ih(c);return a?new dt(a,"rgb","int"):null}function oh(c){const a=c.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(a)return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16),It(parseInt(a[4]+a[4],16),0,255,0,1)];const u=c.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return u?[parseInt(u[1],16),parseInt(u[2],16),parseInt(u[3],16),It(parseInt(u[4],16),0,255,0,1)]:null}function a_(c){const a=oh(c);return a?new dt(a,"rgb","int"):null}function sh(c){const a=c.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!a)return null;const u=[parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3])];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])?null:u}function ah(c){return a=>{const u=sh(a);return u?new dt(u,"rgb",c):null}}function lh(c){const a=c.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!a)return null;const u=[parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3]),parseFloat(a[4])];return isNaN(u[0])||isNaN(u[1])||isNaN(u[2])||isNaN(u[3])?null:u}function uh(c){return a=>{const u=lh(a);return u?new dt(u,"rgb",c):null}}const l_=[{parser:ih,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:oh,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Ku,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Ju,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:th,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:rh,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:sh,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:lh,result:{alpha:!0,mode:"rgb",notation:"object"}}];function u_(c){return l_.reduce((a,{parser:u,result:p})=>a||(u(c)?p:null),null)}function ps(c,a="int"){const u=u_(c);return u?u.notation==="hex"&&a!=="float"?Object.assign(Object.assign({},u),{type:"int"}):u.notation==="func"?Object.assign(Object.assign({},u),{type:a}):null:null}const hh={int:[s_,a_,Zu("int"),Qu("int"),eh("int"),nh("int"),ah("int"),uh("int")],float:[Zu("float"),Qu("float"),eh("float"),nh("float"),ah("float"),uh("float")]};function h_(c){const a=hh[c];return u=>{if(typeof u!="string")return dt.black(c);const p=a.reduce((x,R)=>x||R(u),null);return p!=null?p:dt.black(c)}}function vs(c){const a=hh[c];return u=>a.reduce((p,x)=>p||x(u),null)}function ch(c){const a=kt(Math.floor(c),0,255).toString(16);return a.length===1?`0${a}`:a}function fh(c,a="#"){const u=or(c.getComponents("rgb")).map(ch).join("");return`${a}${u}`}function ms(c,a="#"){const u=c.getComponents("rgb"),p=[u[0],u[1],u[2],u[3]*255].map(ch).join("");return`${a}${p}`}function dh(c,a){const u=Dt(a==="float"?2:0);return`rgb(${or(c.getComponents("rgb",a)).map(x=>u(x)).join(", ")})`}function c_(c){return a=>dh(a,c)}function Mi(c,a){const u=Dt(2),p=Dt(a==="float"?2:0);return`rgba(${c.getComponents("rgb",a).map((R,N)=>(N===3?u:p)(R)).join(", ")})`}function f_(c){return a=>Mi(a,c)}function d_(c){const a=[Dt(0),Ni,Ni];return`hsl(${or(c.getComponents("hsl")).map((p,x)=>a[x](p)).join(", ")})`}function p_(c){const a=[Dt(0),Ni,Ni,Dt(2)];return`hsla(${c.getComponents("hsl").map((p,x)=>a[x](p)).join(", ")})`}function ph(c,a){const u=Dt(a==="float"?2:0),p=["r","g","b"];return`{${or(c.getComponents("rgb",a)).map((R,N)=>`${p[N]}: ${u(R)}`).join(", ")}}`}function v_(c){return a=>ph(a,c)}function vh(c,a){const u=Dt(2),p=Dt(a==="float"?2:0),x=["r","g","b","a"];return`{${c.getComponents("rgb",a).map((N,M)=>{const K=M===3?u:p;return`${x[M]}: ${K(N)}`}).join(", ")}}`}function m_(c){return a=>vh(a,c)}const __=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:fh},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:ms},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:d_},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:p_},...["int","float"].reduce((c,a)=>[...c,{format:{alpha:!1,mode:"rgb",notation:"func",type:a},stringifier:c_(a)},{format:{alpha:!0,mode:"rgb",notation:"func",type:a},stringifier:f_(a)},{format:{alpha:!1,mode:"rgb",notation:"object",type:a},stringifier:v_(a)},{format:{alpha:!0,mode:"rgb",notation:"object",type:a},stringifier:m_(a)}],[])];function _s(c){return __.reduce((a,u)=>a||(i_(u.format,c)?u.stringifier:null),null)}const In=T("apl");class g_{constructor(a,u){this.onValueChange_=this.onValueChange_.bind(this),this.value=u.value,this.value.emitter.on("change",this.onValueChange_),this.element=a.createElement("div"),this.element.classList.add(In()),u.viewProps.bindTabIndex(this.element);const p=a.createElement("div");p.classList.add(In("b")),this.element.appendChild(p);const x=a.createElement("div");x.classList.add(In("c")),p.appendChild(x),this.colorElem_=x;const R=a.createElement("div");R.classList.add(In("m")),this.element.appendChild(R),this.markerElem_=R;const N=a.createElement("div");N.classList.add(In("p")),this.markerElem_.appendChild(N),this.previewElem_=N,this.update_()}update_(){const a=this.value.rawValue,u=a.getComponents("rgb"),p=new dt([u[0],u[1],u[2],0],"rgb"),x=new dt([u[0],u[1],u[2],255],"rgb"),R=["to right",Mi(p),Mi(x)];this.colorElem_.style.background=`linear-gradient(${R.join(",")})`,this.previewElem_.style.backgroundColor=Mi(a);const N=It(u[3],0,1,0,100);this.markerElem_.style.left=`${N}%`}onValueChange_(){this.update_()}}class y_{constructor(a,u){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.view=new g_(a,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new nr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(a,u){if(!a.point)return;const p=a.point.x/a.bounds.width,x=this.value.rawValue,[R,N,M]=x.getComponents("hsv");this.value.setRawValue(new dt([R,N,M,p],"hsv"),u)}onPointerDown_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerMove_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerUp_(a){this.handlePointerEvent_(a.data,{forceEmit:!0,last:!0})}onKeyDown_(a){const u=zt(sr(!0),Ce(a));if(u===0)return;const p=this.value.rawValue,[x,R,N,M]=p.getComponents("hsv");this.value.setRawValue(new dt([x,R,N,M+u],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(a){zt(sr(!0),Ce(a))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ur=T("coltxt");function b_(c){const a=c.createElement("select"),u=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return a.appendChild(u.reduce((p,x)=>{const R=c.createElement("option");return R.textContent=x.text,R.value=x.value,p.appendChild(R),p},c.createDocumentFragment())),a}class x_{constructor(a,u){this.element=a.createElement("div"),this.element.classList.add(Ur());const p=a.createElement("div");p.classList.add(Ur("m")),this.modeElem_=b_(a),this.modeElem_.classList.add(Ur("ms")),p.appendChild(this.modeSelectElement);const x=a.createElement("div");x.classList.add(Ur("mm")),x.appendChild(ne(a,"dropdown")),p.appendChild(x),this.element.appendChild(p);const R=a.createElement("div");R.classList.add(Ur("w")),this.element.appendChild(R),this.textsElem_=R,this.textViews_=u.textViews,this.applyTextViews_(),E(u.colorMode,N=>{this.modeElem_.value=N})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(a){this.textViews_=a,this.applyTextViews_()}applyTextViews_(){hn(this.textsElem_);const a=this.element.ownerDocument;this.textViews_.forEach(u=>{const p=a.createElement("div");p.classList.add(Ur("c")),p.appendChild(u.element),this.textsElem_.appendChild(p)})}}function w_(c){return Dt(c==="float"?2:0)}function T_(c,a,u){const p=Li(c,a)[u];return new Nr({min:0,max:p})}function gs(c,a,u){return new En(c,{arrayPosition:u===0?"fst":u===3-1?"lst":"mid",baseStep:sr(!1),parser:a.parser,props:B.fromObject({draggingScale:a.colorType==="float"?.01:1,formatter:w_(a.colorType)}),value:k(0,{constraint:T_(a.colorMode,a.colorType,u)}),viewProps:a.viewProps})}class C_{constructor(a,u){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=u.colorType,this.parser_=u.parser,this.value=u.value,this.viewProps=u.viewProps,this.colorMode=k(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(a),this.view=new x_(a,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(a){const u={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},p=[gs(a,u,0),gs(a,u,1),gs(a,u,2)];return p.forEach((x,R)=>{Tn({primary:this.value,secondary:x.value,forward:N=>N.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[R],backward:(N,M)=>{const K=this.colorMode.rawValue,rt=N.rawValue.getComponents(K,this.colorType_);return rt[R]=M.rawValue,new dt(Wu(or(rt),rt[3]),K,this.colorType_)}})}),p}onModeSelectChange_(a){const u=a.currentTarget;this.colorMode.rawValue=u.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const ys=T("hpl");class E_{constructor(a,u){this.onValueChange_=this.onValueChange_.bind(this),this.value=u.value,this.value.emitter.on("change",this.onValueChange_),this.element=a.createElement("div"),this.element.classList.add(ys()),u.viewProps.bindTabIndex(this.element);const p=a.createElement("div");p.classList.add(ys("c")),this.element.appendChild(p);const x=a.createElement("div");x.classList.add(ys("m")),this.element.appendChild(x),this.markerElem_=x,this.update_()}update_(){const a=this.value.rawValue,[u]=a.getComponents("hsv");this.markerElem_.style.backgroundColor=dh(new dt([u,100,100],"hsv"));const p=It(u,0,360,0,100);this.markerElem_.style.left=`${p}%`}onValueChange_(){this.update_()}}class P_{constructor(a,u){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.view=new E_(a,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new nr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(a,u){if(!a.point)return;const p=It(kt(a.point.x,0,a.bounds.width),0,a.bounds.width,0,359),x=this.value.rawValue,[,R,N,M]=x.getComponents("hsv");this.value.setRawValue(new dt([p,R,N,M],"hsv"),u)}onPointerDown_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerMove_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerUp_(a){this.handlePointerEvent_(a.data,{forceEmit:!0,last:!0})}onKeyDown_(a){const u=zt(sr(!1),Ce(a));if(u===0)return;const p=this.value.rawValue,[x,R,N,M]=p.getComponents("hsv");this.value.setRawValue(new dt([x+u,R,N,M],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(a){zt(sr(!1),Ce(a))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const bs=T("svp"),mh=64;class I_{constructor(a,u){this.onValueChange_=this.onValueChange_.bind(this),this.value=u.value,this.value.emitter.on("change",this.onValueChange_),this.element=a.createElement("div"),this.element.classList.add(bs()),u.viewProps.bindTabIndex(this.element);const p=a.createElement("canvas");p.height=mh,p.width=mh,p.classList.add(bs("c")),this.element.appendChild(p),this.canvasElement=p;const x=a.createElement("div");x.classList.add(bs("m")),this.element.appendChild(x),this.markerElem_=x,this.update_()}update_(){const a=lt(this.canvasElement);if(!a)return;const p=this.value.rawValue.getComponents("hsv"),x=this.canvasElement.width,R=this.canvasElement.height,N=a.getImageData(0,0,x,R),M=N.data;for(let yt=0;yt<R;yt++)for(let bt=0;bt<x;bt++){const Pe=It(bt,0,x,0,100),An=It(yt,0,R,100,0),Nn=$u(p[0],Pe,An),kr=(yt*x+bt)*4;M[kr]=Nn[0],M[kr+1]=Nn[1],M[kr+2]=Nn[2],M[kr+3]=255}a.putImageData(N,0,0);const K=It(p[1],0,100,0,100);this.markerElem_.style.left=`${K}%`;const rt=It(p[2],0,100,100,0);this.markerElem_.style.top=`${rt}%`}onValueChange_(){this.update_()}}class R_{constructor(a,u){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.view=new I_(a,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new nr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(a,u){if(!a.point)return;const p=It(a.point.x,0,a.bounds.width,0,100),x=It(a.point.y,0,a.bounds.height,100,0),[R,,,N]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new dt([R,p,x,N],"hsv"),u)}onPointerDown_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerMove_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerUp_(a){this.handlePointerEvent_(a.data,{forceEmit:!0,last:!0})}onKeyDown_(a){Vu(a.key)&&a.preventDefault();const[u,p,x,R]=this.value.rawValue.getComponents("hsv"),N=sr(!1),M=zt(N,Ce(a)),K=zt(N,Cn(a));M===0&&K===0||this.value.setRawValue(new dt([u,p+M,x+K,R],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(a){const u=sr(!1),p=zt(u,Ce(a)),x=zt(u,Cn(a));p===0&&x===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class A_{constructor(a,u){this.value=u.value,this.viewProps=u.viewProps,this.hPaletteC_=new P_(a,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new R_(a,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=u.supportsAlpha?{palette:new y_(a,{value:this.value,viewProps:this.viewProps}),text:new En(a,{parser:Te,baseStep:.1,props:B.fromObject({draggingScale:.01,formatter:Dt(2)}),value:k(0,{constraint:new Nr({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Tn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:p=>p.rawValue.getComponents()[3],backward:(p,x)=>{const R=p.rawValue.getComponents();return R[3]=x.rawValue,new dt(R,p.rawValue.mode)}}),this.textC_=new C_(a,{colorType:u.colorType,parser:Te,value:this.value,viewProps:this.viewProps}),this.view=new r_(a,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:u.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view})}get textController(){return this.textC_}}const xs=T("colsw");class N_{constructor(a,u){this.onValueChange_=this.onValueChange_.bind(this),u.value.emitter.on("change",this.onValueChange_),this.value=u.value,this.element=a.createElement("div"),this.element.classList.add(xs()),u.viewProps.bindClassModifiers(this.element);const p=a.createElement("div");p.classList.add(xs("sw")),this.element.appendChild(p),this.swatchElem_=p;const x=a.createElement("button");x.classList.add(xs("b")),u.viewProps.bindDisabled(x),this.element.appendChild(x),this.buttonElement=x,this.update_()}update_(){const a=this.value.rawValue;this.swatchElem_.style.backgroundColor=ms(a)}onValueChange_(){this.update_()}}class O_{constructor(a,u){this.value=u.value,this.viewProps=u.viewProps,this.view=new N_(a,{value:this.value,viewProps:this.viewProps})}}class ws{constructor(a,u){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.foldable_=pn.create(u.expanded),this.swatchC_=new O_(a,{value:this.value,viewProps:this.viewProps});const p=this.swatchC_.view.buttonElement;p.addEventListener("blur",this.onButtonBlur_),p.addEventListener("click",this.onButtonClick_),this.textC_=new Ai(a,{parser:u.parser,props:B.fromObject({formatter:u.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Wm(a,{foldable:this.foldable_,pickerLayout:u.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=u.pickerLayout==="popup"?new Ou(a,{viewProps:this.viewProps}):null;const x=new A_(a,{colorType:u.colorType,supportsAlpha:u.supportsAlpha,value:this.value,viewProps:this.viewProps});x.view.allFocusableElements.forEach(R=>{R.addEventListener("blur",this.onPopupChildBlur_),R.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=x,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(x.view.element),Tn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:R=>R.rawValue,backward:(R,N)=>N.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),qo(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(a){if(!this.popC_)return;const u=this.view.element,p=a.relatedTarget;(!p||!u.contains(p))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(a){if(!this.popC_)return;const u=this.popC_.view.element,p=cn(a);p&&u.contains(p)||p&&p===this.swatchC_.view.buttonElement&&!J(u.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(a){this.popC_?a.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&a.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function S_(c,a){return dt.isColorObject(c)?dt.fromObject(c,a):dt.black(a)}function U_(c){return or(c.getComponents("rgb")).reduce((a,u)=>a<<8|Math.floor(u)&255,0)}function L_(c){return c.getComponents("rgb").reduce((a,u,p)=>{const x=Math.floor(p===3?u*255:u)&255;return a<<8|x},0)>>>0}function F_(c){return new dt([c>>16&255,c>>8&255,c&255],"rgb")}function M_(c){return new dt([c>>24&255,c>>16&255,c>>8&255,It(c&255,0,255,0,1)],"rgb")}function k_(c){return typeof c!="number"?dt.black():F_(c)}function B_(c){return typeof c!="number"?dt.black():M_(c)}function G_(c){const a=_s(c);return a?(u,p)=>{Pn(u,a(p))}:null}function D_(c){const a=c?L_:U_;return(u,p)=>{Pn(u,a(p))}}function V_(c,a,u){const p=a.toRgbaObject(u);c.writeProperty("r",p.r),c.writeProperty("g",p.g),c.writeProperty("b",p.b),c.writeProperty("a",p.a)}function j_(c,a,u){const p=a.toRgbaObject(u);c.writeProperty("r",p.r),c.writeProperty("g",p.g),c.writeProperty("b",p.b)}function H_(c,a){return(u,p)=>{c?V_(u,p,a):j_(u,p,a)}}function Ts(c){var a;return!!((c==null?void 0:c.alpha)||((a=c==null?void 0:c.color)===null||a===void 0?void 0:a.alpha))}function X_(c){return c?a=>ms(a,"0x"):a=>fh(a,"0x")}function z_(c){return"color"in c||"view"in c&&c.view==="color"}const $_={id:"input-color-number",type:"input",accept:(c,a)=>{if(typeof c!="number"||!z_(a))return null;const u=ds(a);return u?{initialValue:c,params:u}:null},binding:{reader:c=>Ts(c.params)?B_:k_,equals:dt.equals,writer:c=>D_(Ts(c.params))},controller:c=>{const a=Ts(c.params),u="expanded"in c.params?c.params.expanded:void 0,p="picker"in c.params?c.params.picker:void 0;return new ws(c.document,{colorType:"int",expanded:u!=null?u:!1,formatter:X_(a),parser:vs("int"),pickerLayout:p!=null?p:"popup",supportsAlpha:a,value:c.value,viewProps:c.viewProps})}};function W_(c){return dt.isRgbaColorObject(c)}function q_(c){return a=>S_(a,c)}function Y_(c,a){return u=>c?vh(u,a):ph(u,a)}const K_={id:"input-color-object",type:"input",accept:(c,a)=>{if(!dt.isColorObject(c))return null;const u=ds(a);return u?{initialValue:c,params:u}:null},binding:{reader:c=>q_(ar(c.params)),equals:dt.equals,writer:c=>H_(W_(c.initialValue),ar(c.params))},controller:c=>{var a;const u=dt.isRgbaColorObject(c.initialValue),p="expanded"in c.params?c.params.expanded:void 0,x="picker"in c.params?c.params.picker:void 0,R=(a=ar(c.params))!==null&&a!==void 0?a:"int";return new ws(c.document,{colorType:R,expanded:p!=null?p:!1,formatter:Y_(u,R),parser:vs(R),pickerLayout:x!=null?x:"popup",supportsAlpha:u,value:c.value,viewProps:c.viewProps})}},Z_={id:"input-color-string",type:"input",accept:(c,a)=>{if(typeof c!="string"||"view"in a&&a.view==="text")return null;const u=ps(c,ar(a));if(!u||!_s(u))return null;const x=ds(a);return x?{initialValue:c,params:x}:null},binding:{reader:c=>{var a;return h_((a=ar(c.params))!==null&&a!==void 0?a:"int")},equals:dt.equals,writer:c=>{const a=ps(c.initialValue,ar(c.params));if(!a)throw g.shouldNeverHappen();const u=G_(a);if(!u)throw g.notBindable();return u}},controller:c=>{const a=ps(c.initialValue,ar(c.params));if(!a)throw g.shouldNeverHappen();const u=_s(a);if(!u)throw g.shouldNeverHappen();const p="expanded"in c.params?c.params.expanded:void 0,x="picker"in c.params?c.params.picker:void 0;return new ws(c.document,{colorType:a.type,expanded:p!=null?p:!1,formatter:u,parser:vs(a.type),pickerLayout:x!=null?x:"popup",supportsAlpha:a.alpha,value:c.value,viewProps:c.viewProps})}};class He{constructor(a){this.components=a.components,this.asm_=a.assembly}constrain(a){const u=this.asm_.toComponents(a).map((p,x)=>{var R,N;return(N=(R=this.components[x])===null||R===void 0?void 0:R.constrain(p))!==null&&N!==void 0?N:p});return this.asm_.fromComponents(u)}}const _h=T("pndtxt");class J_{constructor(a,u){this.textViews=u.textViews,this.element=a.createElement("div"),this.element.classList.add(_h()),this.textViews.forEach(p=>{const x=a.createElement("div");x.classList.add(_h("a")),x.appendChild(p.element),this.element.appendChild(x)})}}function Q_(c,a,u){return new En(c,{arrayPosition:u===0?"fst":u===a.axes.length-1?"lst":"mid",baseStep:a.axes[u].baseStep,parser:a.parser,props:a.axes[u].textProps,value:k(0,{constraint:a.axes[u].constraint}),viewProps:a.viewProps})}class Cs{constructor(a,u){this.value=u.value,this.viewProps=u.viewProps,this.acs_=u.axes.map((p,x)=>Q_(a,u,x)),this.acs_.forEach((p,x)=>{Tn({primary:this.value,secondary:p.value,forward:R=>u.assembly.toComponents(R.rawValue)[x],backward:(R,N)=>{const M=u.assembly.toComponents(R.rawValue);return M[x]=N.rawValue,u.assembly.fromComponents(M)}})}),this.view=new J_(a,{textViews:this.acs_.map(p=>p.view)})}}function gh(c,a){return"step"in c&&!v(c.step)?new Ri(c.step,a):null}function yh(c){return"max"in c&&!v(c.max)||"min"in c&&!v(c.min)?new Nr({max:c.max,min:c.min}):null}function tg(c,a){const u=[],p=gh(c,a);p&&u.push(p);const x=yh(c);x&&u.push(x);const R=cs(c.options);return R&&u.push(R),new gn(u)}function eg(c){const a=c?pe(c,Nr):null;return a?[a.minValue,a.maxValue]:[void 0,void 0]}function rg(c){const[a,u]=eg(c);return[a!=null?a:0,u!=null?u:100]}const ng={id:"input-number",type:"input",accept:(c,a)=>{if(typeof c!="number")return null;const u=D,p=W(a,{format:u.optional.function,max:u.optional.number,min:u.optional.number,options:u.optional.custom(Oi),step:u.optional.number});return p?{initialValue:c,params:p}:null},binding:{reader:c=>Bu,constraint:c=>tg(c.params,c.initialValue),writer:c=>Pn},controller:c=>{var a,u;const p=c.value,x=c.constraint;if(x&&pe(x,yn))return new bn(c.document,{props:B.fromObject({options:(a=fs(x))!==null&&a!==void 0?a:[]}),value:p,viewProps:c.viewProps});const R=(u="format"in c.params?c.params.format:void 0)!==null&&u!==void 0?u:Dt(Si(x,p.rawValue));if(x&&pe(x,Nr)){const[N,M]=rg(x);return new hs(c.document,{baseStep:Or(x),parser:Te,sliderProps:B.fromObject({maxValue:M,minValue:N}),textProps:B.fromObject({draggingScale:Sr(x,p.rawValue),formatter:R}),value:p,viewProps:c.viewProps})}return new En(c.document,{baseStep:Or(x),parser:Te,props:B.fromObject({draggingScale:Sr(x,p.rawValue),formatter:R}),value:p,viewProps:c.viewProps})}};class Xe{constructor(a=0,u=0){this.x=a,this.y=u}getComponents(){return[this.x,this.y]}static isObject(a){if(v(a))return!1;const u=a.x,p=a.y;return!(typeof u!="number"||typeof p!="number")}static equals(a,u){return a.x===u.x&&a.y===u.y}toObject(){return{x:this.x,y:this.y}}}const bh={toComponents:c=>c.getComponents(),fromComponents:c=>new Xe(...c)},Lr=T("p2d");class ig{constructor(a,u){this.element=a.createElement("div"),this.element.classList.add(Lr()),u.viewProps.bindClassModifiers(this.element),E(u.expanded,A(this.element,Lr(void 0,"expanded")));const p=a.createElement("div");p.classList.add(Lr("h")),this.element.appendChild(p);const x=a.createElement("button");x.classList.add(Lr("b")),x.appendChild(ne(a,"p2dpad")),u.viewProps.bindDisabled(x),p.appendChild(x),this.buttonElement=x;const R=a.createElement("div");if(R.classList.add(Lr("t")),p.appendChild(R),this.textElement=R,u.pickerLayout==="inline"){const N=a.createElement("div");N.classList.add(Lr("p")),this.element.appendChild(N),this.pickerElement=N}else this.pickerElement=null}}const ze=T("p2dp");class og{constructor(a,u){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=u.invertsY,this.maxValue_=u.maxValue,this.element=a.createElement("div"),this.element.classList.add(ze()),u.layout==="popup"&&this.element.classList.add(ze(void 0,"p"));const p=a.createElement("div");p.classList.add(ze("p")),u.viewProps.bindTabIndex(p),this.element.appendChild(p),this.padElement=p;const x=a.createElementNS(it,"svg");x.classList.add(ze("g")),this.padElement.appendChild(x),this.svgElem_=x;const R=a.createElementNS(it,"line");R.classList.add(ze("ax")),R.setAttributeNS(null,"x1","0"),R.setAttributeNS(null,"y1","50%"),R.setAttributeNS(null,"x2","100%"),R.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(R);const N=a.createElementNS(it,"line");N.classList.add(ze("ax")),N.setAttributeNS(null,"x1","50%"),N.setAttributeNS(null,"y1","0"),N.setAttributeNS(null,"x2","50%"),N.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(N);const M=a.createElementNS(it,"line");M.classList.add(ze("l")),M.setAttributeNS(null,"x1","50%"),M.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(M),this.lineElem_=M;const K=a.createElement("div");K.classList.add(ze("m")),this.padElement.appendChild(K),this.markerElem_=K,u.value.emitter.on("change",this.onValueChange_),this.value=u.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[a,u]=this.value.rawValue.getComponents(),p=this.maxValue_,x=It(a,-p,+p,0,100),R=It(u,-p,+p,0,100),N=this.invertsY_?100-R:R;this.lineElem_.setAttributeNS(null,"x2",`${x}%`),this.lineElem_.setAttributeNS(null,"y2",`${N}%`),this.markerElem_.style.left=`${x}%`,this.markerElem_.style.top=`${N}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function xh(c,a,u){return[zt(a[0],Ce(c)),zt(a[1],Cn(c))*(u?1:-1)]}class sg{constructor(a,u){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.baseSteps_=u.baseSteps,this.maxValue_=u.maxValue,this.invertsY_=u.invertsY,this.view=new og(a,{invertsY:this.invertsY_,layout:u.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new nr(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(a,u){if(!a.point)return;const p=this.maxValue_,x=It(a.point.x,0,a.bounds.width,-p,+p),R=It(this.invertsY_?a.bounds.height-a.point.y:a.point.y,0,a.bounds.height,-p,+p);this.value.setRawValue(new Xe(x,R),u)}onPointerDown_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerMove_(a){this.handlePointerEvent_(a.data,{forceEmit:!1,last:!1})}onPointerUp_(a){this.handlePointerEvent_(a.data,{forceEmit:!0,last:!0})}onPadKeyDown_(a){Vu(a.key)&&a.preventDefault();const[u,p]=xh(a,this.baseSteps_,this.invertsY_);u===0&&p===0||this.value.setRawValue(new Xe(this.value.rawValue.x+u,this.value.rawValue.y+p),{forceEmit:!1,last:!1})}onPadKeyUp_(a){const[u,p]=xh(a,this.baseSteps_,this.invertsY_);u===0&&p===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ag{constructor(a,u){var p,x;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=u.value,this.viewProps=u.viewProps,this.foldable_=pn.create(u.expanded),this.popC_=u.pickerLayout==="popup"?new Ou(a,{viewProps:this.viewProps}):null;const R=new sg(a,{baseSteps:[u.axes[0].baseStep,u.axes[1].baseStep],invertsY:u.invertsY,layout:u.pickerLayout,maxValue:u.maxValue,value:this.value,viewProps:this.viewProps});R.view.allFocusableElements.forEach(N=>{N.addEventListener("blur",this.onPopupChildBlur_),N.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=R,this.textC_=new Cs(a,{assembly:bh,axes:u.axes,parser:u.parser,value:this.value,viewProps:this.viewProps}),this.view=new ig(a,{expanded:this.foldable_.value("expanded"),pickerLayout:u.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(p=this.view.buttonElement)===null||p===void 0||p.addEventListener("blur",this.onPadButtonBlur_),(x=this.view.buttonElement)===null||x===void 0||x.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Tn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:N=>N.rawValue,backward:(N,M)=>M.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),qo(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(a){if(!this.popC_)return;const u=this.view.element,p=a.relatedTarget;(!p||!u.contains(p))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(a){if(!this.popC_)return;const u=this.popC_.view.element,p=cn(a);p&&u.contains(p)||p&&p===this.view.buttonElement&&!J(u.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(a){this.popC_?a.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&a.key==="Escape"&&this.view.buttonElement.focus()}}function lg(c){return Xe.isObject(c)?new Xe(c.x,c.y):new Xe}function ug(c,a){c.writeProperty("x",a.x),c.writeProperty("y",a.y)}function Ee(c,a){if(!c)return;const u=[],p=gh(c,a);p&&u.push(p);const x=yh(c);return x&&u.push(x),new gn(u)}function hg(c,a){return new He({assembly:bh,components:[Ee("x"in c?c.x:void 0,a.x),Ee("y"in c?c.y:void 0,a.y)]})}function wh(c,a){var u,p;const x=c&&pe(c,Nr);if(x)return Math.max(Math.abs((u=x.minValue)!==null&&u!==void 0?u:0),Math.abs((p=x.maxValue)!==null&&p!==void 0?p:0));const R=Or(c);return Math.max(Math.abs(R)*10,Math.abs(a)*10)}function cg(c,a){const u=a instanceof He?a.components[0]:void 0,p=a instanceof He?a.components[1]:void 0,x=wh(u,c.x),R=wh(p,c.y);return Math.max(x,R)}function Th(c,a){return{baseStep:Or(a),constraint:a,textProps:B.fromObject({draggingScale:Sr(a,c),formatter:Dt(Si(a,c))})}}function fg(c){if(!("y"in c))return!1;const a=c.y;return a&&"inverted"in a?!!a.inverted:!1}const dg={id:"input-point2d",type:"input",accept:(c,a)=>{if(!Xe.isObject(c))return null;const u=D,p=W(a,{expanded:u.optional.boolean,picker:u.optional.custom(Xu),x:u.optional.custom(Ve),y:u.optional.object({inverted:u.optional.boolean,max:u.optional.number,min:u.optional.number,step:u.optional.number})});return p?{initialValue:c,params:p}:null},binding:{reader:c=>lg,constraint:c=>hg(c.params,c.initialValue),equals:Xe.equals,writer:c=>ug},controller:c=>{const a=c.document,u=c.value,p=c.constraint;if(!(p instanceof He))throw g.shouldNeverHappen();const x="expanded"in c.params?c.params.expanded:void 0,R="picker"in c.params?c.params.picker:void 0;return new ag(a,{axes:[Th(u.rawValue.x,p.components[0]),Th(u.rawValue.y,p.components[1])],expanded:x!=null?x:!1,invertsY:fg(c.params),maxValue:cg(u.rawValue,p),parser:Te,pickerLayout:R!=null?R:"popup",value:u,viewProps:c.viewProps})}};class Fr{constructor(a=0,u=0,p=0){this.x=a,this.y=u,this.z=p}getComponents(){return[this.x,this.y,this.z]}static isObject(a){if(v(a))return!1;const u=a.x,p=a.y,x=a.z;return!(typeof u!="number"||typeof p!="number"||typeof x!="number")}static equals(a,u){return a.x===u.x&&a.y===u.y&&a.z===u.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Ch={toComponents:c=>c.getComponents(),fromComponents:c=>new Fr(...c)};function pg(c){return Fr.isObject(c)?new Fr(c.x,c.y,c.z):new Fr}function vg(c,a){c.writeProperty("x",a.x),c.writeProperty("y",a.y),c.writeProperty("z",a.z)}function mg(c,a){return new He({assembly:Ch,components:[Ee("x"in c?c.x:void 0,a.x),Ee("y"in c?c.y:void 0,a.y),Ee("z"in c?c.z:void 0,a.z)]})}function Es(c,a){return{baseStep:Or(a),constraint:a,textProps:B.fromObject({draggingScale:Sr(a,c),formatter:Dt(Si(a,c))})}}const _g={id:"input-point3d",type:"input",accept:(c,a)=>{if(!Fr.isObject(c))return null;const u=D,p=W(a,{x:u.optional.custom(Ve),y:u.optional.custom(Ve),z:u.optional.custom(Ve)});return p?{initialValue:c,params:p}:null},binding:{reader:c=>pg,constraint:c=>mg(c.params,c.initialValue),equals:Fr.equals,writer:c=>vg},controller:c=>{const a=c.value,u=c.constraint;if(!(u instanceof He))throw g.shouldNeverHappen();return new Cs(c.document,{assembly:Ch,axes:[Es(a.rawValue.x,u.components[0]),Es(a.rawValue.y,u.components[1]),Es(a.rawValue.z,u.components[2])],parser:Te,value:a,viewProps:c.viewProps})}};class Mr{constructor(a=0,u=0,p=0,x=0){this.x=a,this.y=u,this.z=p,this.w=x}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(a){if(v(a))return!1;const u=a.x,p=a.y,x=a.z,R=a.w;return!(typeof u!="number"||typeof p!="number"||typeof x!="number"||typeof R!="number")}static equals(a,u){return a.x===u.x&&a.y===u.y&&a.z===u.z&&a.w===u.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Eh={toComponents:c=>c.getComponents(),fromComponents:c=>new Mr(...c)};function gg(c){return Mr.isObject(c)?new Mr(c.x,c.y,c.z,c.w):new Mr}function yg(c,a){c.writeProperty("x",a.x),c.writeProperty("y",a.y),c.writeProperty("z",a.z),c.writeProperty("w",a.w)}function bg(c,a){return new He({assembly:Eh,components:[Ee("x"in c?c.x:void 0,a.x),Ee("y"in c?c.y:void 0,a.y),Ee("z"in c?c.z:void 0,a.z),Ee("w"in c?c.w:void 0,a.w)]})}function xg(c,a){return{baseStep:Or(a),constraint:a,textProps:B.fromObject({draggingScale:Sr(a,c),formatter:Dt(Si(a,c))})}}const wg={id:"input-point4d",type:"input",accept:(c,a)=>{if(!Mr.isObject(c))return null;const u=D,p=W(a,{x:u.optional.custom(Ve),y:u.optional.custom(Ve),z:u.optional.custom(Ve),w:u.optional.custom(Ve)});return p?{initialValue:c,params:p}:null},binding:{reader:c=>gg,constraint:c=>bg(c.params,c.initialValue),equals:Mr.equals,writer:c=>yg},controller:c=>{const a=c.value,u=c.constraint;if(!(u instanceof He))throw g.shouldNeverHappen();return new Cs(c.document,{assembly:Eh,axes:a.rawValue.getComponents().map((p,x)=>xg(p,u.components[x])),parser:Te,value:a,viewProps:c.viewProps})}};function Tg(c){const a=[],u=cs(c.options);return u&&a.push(u),new gn(a)}const Cg={id:"input-string",type:"input",accept:(c,a)=>{if(typeof c!="string")return null;const p=W(a,{options:D.optional.custom(Oi)});return p?{initialValue:c,params:p}:null},binding:{reader:c=>Gu,constraint:c=>Tg(c.params),writer:c=>Pn},controller:c=>{var a;const u=c.document,p=c.value,x=c.constraint;return x&&pe(x,yn)?new bn(u,{props:B.fromObject({options:(a=fs(x))!==null&&a!==void 0?a:[]}),value:p,viewProps:c.viewProps}):new Ai(u,{parser:R=>R,props:B.fromObject({formatter:ss}),value:p,viewProps:c.viewProps})}},Rn={monitor:{defaultInterval:200,defaultLineCount:3}},Ph=T("mll");class Eg{constructor(a,u){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=u.formatter,this.element=a.createElement("div"),this.element.classList.add(Ph()),u.viewProps.bindClassModifiers(this.element);const p=a.createElement("textarea");p.classList.add(Ph("i")),p.style.height=`calc(var(--bld-us) * ${u.lineCount})`,p.readOnly=!0,u.viewProps.bindDisabled(p),this.element.appendChild(p),this.textareaElem_=p,u.value.emitter.on("change",this.onValueUpdate_),this.value=u.value,this.update_()}update_(){const a=this.textareaElem_,u=a.scrollTop===a.scrollHeight-a.clientHeight,p=[];this.value.rawValue.forEach(x=>{x!==void 0&&p.push(this.formatter_(x))}),a.textContent=p.join(`
`),u&&(a.scrollTop=a.scrollHeight)}onValueUpdate_(){this.update_()}}class Ps{constructor(a,u){this.value=u.value,this.viewProps=u.viewProps,this.view=new Eg(a,{formatter:u.formatter,lineCount:u.lineCount,value:this.value,viewProps:this.viewProps})}}const Ih=T("sgl");class Pg{constructor(a,u){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=u.formatter,this.element=a.createElement("div"),this.element.classList.add(Ih()),u.viewProps.bindClassModifiers(this.element);const p=a.createElement("input");p.classList.add(Ih("i")),p.readOnly=!0,p.type="text",u.viewProps.bindDisabled(p),this.element.appendChild(p),this.inputElement=p,u.value.emitter.on("change",this.onValueUpdate_),this.value=u.value,this.update_()}update_(){const a=this.value.rawValue,u=a[a.length-1];this.inputElement.value=u!==void 0?this.formatter_(u):""}onValueUpdate_(){this.update_()}}class Is{constructor(a,u){this.value=u.value,this.viewProps=u.viewProps,this.view=new Pg(a,{formatter:u.formatter,value:this.value,viewProps:this.viewProps})}}const Ig={id:"monitor-bool",type:"monitor",accept:(c,a)=>{if(typeof c!="boolean")return null;const p=W(a,{lineCount:D.optional.number});return p?{initialValue:c,params:p}:null},binding:{reader:c=>Uu},controller:c=>{var a;return c.value.rawValue.length===1?new Is(c.document,{formatter:Lu,value:c.value,viewProps:c.viewProps}):new Ps(c.document,{formatter:Lu,lineCount:(a=c.params.lineCount)!==null&&a!==void 0?a:Rn.monitor.defaultLineCount,value:c.value,viewProps:c.viewProps})}},$e=T("grl");class Rg{constructor(a,u){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=a.createElement("div"),this.element.classList.add($e()),u.viewProps.bindClassModifiers(this.element),this.formatter_=u.formatter,this.props_=u.props,this.cursor_=u.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const p=a.createElementNS(it,"svg");p.classList.add($e("g")),p.style.height=`calc(var(--bld-us) * ${u.lineCount})`,this.element.appendChild(p),this.svgElem_=p;const x=a.createElementNS(it,"polyline");this.svgElem_.appendChild(x),this.lineElem_=x;const R=a.createElement("div");R.classList.add($e("t"),T("tt")()),this.element.appendChild(R),this.tooltipElem_=R,u.value.emitter.on("change",this.onValueUpdate_),this.value=u.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const a=this.svgElem_.getBoundingClientRect(),u=this.value.rawValue.length-1,p=this.props_.get("minValue"),x=this.props_.get("maxValue"),R=[];this.value.rawValue.forEach((yt,bt)=>{if(yt===void 0)return;const Pe=It(bt,0,u,0,a.width),An=It(yt,p,x,a.height,0);R.push([Pe,An].join(","))}),this.lineElem_.setAttributeNS(null,"points",R.join(" "));const N=this.tooltipElem_,M=this.value.rawValue[this.cursor_.rawValue];if(M===void 0){N.classList.remove($e("t","a"));return}const K=It(this.cursor_.rawValue,0,u,0,a.width),rt=It(M,p,x,a.height,0);N.style.left=`${K}px`,N.style.top=`${rt}px`,N.textContent=`${this.formatter_(M)}`,N.classList.contains($e("t","a"))||(N.classList.add($e("t","a"),$e("t","in")),Q(N),N.classList.remove($e("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ag{constructor(a,u){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=u.props,this.value=u.value,this.viewProps=u.viewProps,this.cursor_=k(-1),this.view=new Rg(a,{cursor:this.cursor_,formatter:u.formatter,lineCount:u.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!J(a))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const p=new nr(this.view.element);p.emitter.on("down",this.onGraphPointerDown_),p.emitter.on("move",this.onGraphPointerMove_),p.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(a){const u=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(It(a.offsetX,0,u.width,0,this.value.rawValue.length))}onGraphPointerDown_(a){this.onGraphPointerMove_(a)}onGraphPointerMove_(a){if(!a.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(It(a.data.point.x,0,a.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Rs(c){return"format"in c&&!v(c.format)?c.format:Dt(2)}function Ng(c){var a;return c.value.rawValue.length===1?new Is(c.document,{formatter:Rs(c.params),value:c.value,viewProps:c.viewProps}):new Ps(c.document,{formatter:Rs(c.params),lineCount:(a=c.params.lineCount)!==null&&a!==void 0?a:Rn.monitor.defaultLineCount,value:c.value,viewProps:c.viewProps})}function Og(c){var a,u,p;return new Ag(c.document,{formatter:Rs(c.params),lineCount:(a=c.params.lineCount)!==null&&a!==void 0?a:Rn.monitor.defaultLineCount,props:B.fromObject({maxValue:(u="max"in c.params?c.params.max:null)!==null&&u!==void 0?u:100,minValue:(p="min"in c.params?c.params.min:null)!==null&&p!==void 0?p:0}),value:c.value,viewProps:c.viewProps})}function Rh(c){return"view"in c&&c.view==="graph"}const Sg={id:"monitor-number",type:"monitor",accept:(c,a)=>{if(typeof c!="number")return null;const u=D,p=W(a,{format:u.optional.function,lineCount:u.optional.number,max:u.optional.number,min:u.optional.number,view:u.optional.string});return p?{initialValue:c,params:p}:null},binding:{defaultBufferSize:c=>Rh(c)?64:1,reader:c=>Bu},controller:c=>Rh(c.params)?Og(c):Ng(c)},Ug={id:"monitor-string",type:"monitor",accept:(c,a)=>{if(typeof c!="string")return null;const u=D,p=W(a,{lineCount:u.optional.number,multiline:u.optional.boolean});return p?{initialValue:c,params:p}:null},binding:{reader:c=>Gu},controller:c=>{var a;const u=c.value;return u.rawValue.length>1||"multiline"in c.params&&c.params.multiline?new Ps(c.document,{formatter:ss,lineCount:(a=c.params.lineCount)!==null&&a!==void 0?a:Rn.monitor.defaultLineCount,value:u,viewProps:c.viewProps}):new Is(c.document,{formatter:ss,value:u,viewProps:c.viewProps})}};class Lg{constructor(a){this.onValueChange_=this.onValueChange_.bind(this),this.reader=a.reader,this.writer=a.writer,this.emitter=new w,this.value=a.value,this.value.emitter.on("change",this.onValueChange_),this.target=a.target,this.read()}read(){const a=this.target.read();a!==void 0&&(this.value.rawValue=this.reader(a))}write_(a){this.writer(this.target,a)}onValueChange_(a){this.write_(a.rawValue),this.emitter.emit("change",{options:a.options,rawValue:a.rawValue,sender:this})}}function Fg(c,a){const u=c.accept(a.target.read(),a.params);if(v(u))return null;const p=D,x={target:a.target,initialValue:u.initialValue,params:u.params},R=c.binding.reader(x),N=c.binding.constraint?c.binding.constraint(x):void 0,M=k(R(u.initialValue),{constraint:N,equals:c.binding.equals}),K=new Lg({reader:R,target:a.target,value:M,writer:c.binding.writer(x)}),rt=p.optional.boolean(a.params.disabled).value,yt=p.optional.boolean(a.params.hidden).value,bt=c.controller({constraint:N,document:a.document,initialValue:u.initialValue,params:u.params,value:K.value,viewProps:De.create({disabled:rt,hidden:yt})}),Pe=p.optional.string(a.params.label).value;return new de(a.document,{binding:K,blade:dn(),props:B.fromObject({label:Pe!=null?Pe:a.target.key}),valueController:bt})}class Mg{constructor(a){this.onTick_=this.onTick_.bind(this),this.reader_=a.reader,this.target=a.target,this.emitter=new w,this.value=a.value,this.ticker=a.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const a=this.target.read();if(a===void 0)return;const u=this.value.rawValue,p=this.reader_(a);this.value.rawValue=Mm(u,p),this.emitter.emit("update",{rawValue:p,sender:this})}onTick_(a){this.read()}}function kg(c,a){return a===0?new tm:new em(c,a!=null?a:Rn.monitor.defaultInterval)}function Bg(c,a){var u,p,x;const R=D,N=c.accept(a.target.read(),a.params);if(v(N))return null;const M={target:a.target,initialValue:N.initialValue,params:N.params},K=c.binding.reader(M),rt=(p=(u=R.optional.number(a.params.bufferSize).value)!==null&&u!==void 0?u:c.binding.defaultBufferSize&&c.binding.defaultBufferSize(N.params))!==null&&p!==void 0?p:1,yt=R.optional.number(a.params.interval).value,bt=new Mg({reader:K,target:a.target,ticker:kg(a.document,yt),value:Lm(rt)}),Pe=R.optional.boolean(a.params.disabled).value,An=R.optional.boolean(a.params.hidden).value,Nn=c.controller({document:a.document,params:N.params,value:bt.value,viewProps:De.create({disabled:Pe,hidden:An})}),kr=(x=R.optional.string(a.params.label).value)!==null&&x!==void 0?x:a.target.key;return new Ge(a.document,{binding:bt,blade:dn(),props:B.fromObject({label:kr}),valueController:Nn})}class Gg{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(a){a.type==="blade"?this.pluginsMap_.blades.unshift(a):a.type==="input"?this.pluginsMap_.inputs.unshift(a):a.type==="monitor"&&this.pluginsMap_.monitors.unshift(a)}createInput(a,u,p){const x=u.read();if(v(x))throw new g({context:{key:u.key},type:"nomatchingcontroller"});const R=this.pluginsMap_.inputs.reduce((N,M)=>N!=null?N:Fg(M,{document:a,target:u,params:p}),null);if(R)return R;throw new g({context:{key:u.key},type:"nomatchingcontroller"})}createMonitor(a,u,p){const x=this.pluginsMap_.monitors.reduce((R,N)=>R!=null?R:Bg(N,{document:a,params:p,target:u}),null);if(x)return x;throw new g({context:{key:u.key},type:"nomatchingcontroller"})}createBlade(a,u){const p=this.pluginsMap_.blades.reduce((x,R)=>x!=null?x:Qv(R,{document:a,params:u}),null);if(!p)throw new g({type:"nomatchingview",context:{params:u}});return p}createBladeApi(a){if(a instanceof de)return new Zo(a);if(a instanceof Ge)return new Jo(a);if(a instanceof mn)return new Pi(a,this);const u=this.pluginsMap_.blades.reduce((p,x)=>p!=null?p:x.api({controller:a,pool:this}),null);if(!u)throw g.shouldNeverHappen();return u}}function Dg(){const c=new Gg;return[dg,_g,wg,Cg,ng,Z_,K_,$_,$m,Ig,Ug,Sg,Ov,zv,Wv,Au].forEach(a=>{c.register(a)}),c}class Ah extends i{constructor(a){super(a),this.emitter_=new w,this.controller_.valueController.value.emitter.on("change",u=>{this.emitter_.emit("change",{event:new s(this,u.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}get options(){return this.controller_.valueController.props.get("options")}set options(a){this.controller_.valueController.props.set("options",a)}get value(){return this.controller_.valueController.value.rawValue}set value(a){this.controller_.valueController.value.rawValue=a}on(a,u){const p=u.bind(this);return this.emitter_.on(a,x=>{p(x.event)}),this}}class Nh extends i{constructor(a){super(a),this.emitter_=new w,this.controller_.valueController.value.emitter.on("change",u=>{this.emitter_.emit("change",{event:new s(this,u.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(a){this.controller_.valueController.sliderController.props.set("maxValue",a)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(a){this.controller_.valueController.sliderController.props.set("minValue",a)}get value(){return this.controller_.valueController.value.rawValue}set value(a){this.controller_.valueController.value.rawValue=a}on(a,u){const p=u.bind(this);return this.emitter_.on(a,x=>{p(x.event)}),this}}class Oh extends i{constructor(a){super(a),this.emitter_=new w,this.controller_.valueController.value.emitter.on("change",u=>{this.emitter_.emit("change",{event:new s(this,u.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(a){this.controller_.props.set("label",a)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(a){this.controller_.valueController.props.set("formatter",a)}get value(){return this.controller_.valueController.value.rawValue}set value(a){this.controller_.valueController.value.rawValue=a}on(a,u){const p=u.bind(this);return this.emitter_.on(a,x=>{p(x.event)}),this}}const Vg=function(){return{id:"list",type:"blade",accept(c){const a=D,u=W(c,{options:a.required.custom(Oi),value:a.required.raw,view:a.required.constant("list"),label:a.optional.string});return u?{params:u}:null},controller(c){const a=new bn(c.document,{props:B.fromObject({options:zu(c.params.options)}),value:k(c.params.value),viewProps:c.viewProps});return new Ar(c.document,{blade:c.blade,props:B.fromObject({label:c.params.label}),valueController:a})},api(c){return!(c.controller instanceof Ar)||!(c.controller.valueController instanceof bn)?null:new Ah(c.controller)}}}();function jg(c){return c.reduce((a,u)=>Object.assign(a,{[u.presetKey]:u.read()}),{})}function Hg(c,a){c.forEach(u=>{const p=a[u.presetKey];p!==void 0&&u.write(p)})}class Xg extends Qo{constructor(a,u){super(a,u)}get element(){return this.controller_.view.element}importPreset(a){const u=this.controller_.rackController.rack.find(de).map(p=>p.binding.target);Hg(u,a),this.refresh()}exportPreset(){const a=this.controller_.rackController.rack.find(de).map(u=>u.binding.target);return jg(a)}refresh(){this.controller_.rackController.rack.find(de).forEach(a=>{a.binding.read()}),this.controller_.rackController.rack.find(Ge).forEach(a=>{a.binding.read()})}}class zg extends rs{constructor(a,u){super(a,{expanded:u.expanded,blade:u.blade,props:u.props,root:!0,viewProps:u.viewProps})}}const $g={id:"slider",type:"blade",accept(c){const a=D,u=W(c,{max:a.required.number,min:a.required.number,view:a.required.constant("slider"),format:a.optional.function,label:a.optional.string,value:a.optional.number});return u?{params:u}:null},controller(c){var a,u;const p=(a=c.params.value)!==null&&a!==void 0?a:0,x=new hs(c.document,{baseStep:1,parser:Te,sliderProps:B.fromObject({maxValue:c.params.max,minValue:c.params.min}),textProps:B.fromObject({draggingScale:Sr(void 0,p),formatter:(u=c.params.format)!==null&&u!==void 0?u:Sm}),value:k(p),viewProps:c.viewProps});return new Ar(c.document,{blade:c.blade,props:B.fromObject({label:c.params.label}),valueController:x})},api(c){return!(c.controller instanceof Ar)||!(c.controller.valueController instanceof hs)?null:new Nh(c.controller)}},Wg=function(){return{id:"text",type:"blade",accept(c){const a=D,u=W(c,{parse:a.required.function,value:a.required.raw,view:a.required.constant("text"),format:a.optional.function,label:a.optional.string});return u?{params:u}:null},controller(c){var a;const u=new Ai(c.document,{parser:c.params.parse,props:B.fromObject({formatter:(a=c.params.format)!==null&&a!==void 0?a:p=>String(p)}),value:k(c.params.value),viewProps:c.viewProps});return new Ar(c.document,{blade:c.blade,props:B.fromObject({label:c.params.label}),valueController:u})},api(c){return!(c.controller instanceof Ar)||!(c.controller.valueController instanceof Ai)?null:new Oh(c.controller)}}}();function qg(c){const a=c.createElement("div");return a.classList.add(T("dfw")()),c.body&&c.body.appendChild(a),a}function Sh(c,a,u){if(c.querySelector(`style[data-tp-style=${a}]`))return;const p=c.createElement("style");p.dataset.tpStyle=a,p.textContent=u,c.head.appendChild(p)}class Yg extends Xg{constructor(a){var u,p;const x=a!=null?a:{},R=(u=x.document)!==null&&u!==void 0?u:xt(),N=Dg(),M=new zg(R,{expanded:x.expanded,blade:dn(),props:B.fromObject({title:x.title}),viewProps:De.create()});super(M,N),this.pool_=N,this.containerElem_=(p=x.container)!==null&&p!==void 0?p:qg(R),this.containerElem_.appendChild(this.element),this.doc_=R,this.usesDefaultWrapper_=!x.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw g.alreadyDisposed();return this.doc_}dispose(){const a=this.containerElem_;if(!a)throw g.alreadyDisposed();if(this.usesDefaultWrapper_){const u=a.parentElement;u&&u.removeChild(a)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(a){("plugin"in a?[a.plugin]:"plugins"in a?a.plugins:[]).forEach(p=>{this.pool_.register(p),this.embedPluginStyle_(p)})}embedPluginStyle_(a){a.css&&Sh(this.document,`plugin-${a.id}`,a.css)}setUpDefaultPlugins_(){Sh(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor transparent;scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:transparent}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:transparent solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, #28292e);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, #adafb8);--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, #28292e);--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, #bbbcc4);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, #bbbcc4);--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_i,.tp-fldv_c>.tp-tabv>.tp-tabv_i{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a:before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_c{border-left:var(--cnt-bg) solid 4px}.tp-fldv_b:hover+.tp-fldv_c{border-left-color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_c{border-left-color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_c{border-left-color:var(--cnt-bg-a)}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv.tp-v-disabled{opacity:.5}.tp-tabv_i{align-items:flex-end;display:flex;overflow:hidden}.tp-tabv.tp-tabv-nop .tp-tabv_i{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_i::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{border-left:var(--cnt-bg) solid 4px;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p)}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:-2px;position:absolute;width:2px}.tp-tbiv_b{background-color:var(--cnt-bg);display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);width:100%}.tp-tbiv_b:hover{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active{background-color:var(--cnt-bg-a)}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) transparent transparent transparent;border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c,.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_i{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(a=>{this.embedPluginStyle_(a)}),this.registerPlugin({plugins:[$g,Vg,Au,Wg]})}}const Kg=new n("3.1.0");e.BladeApi=i,e.ButtonApi=y,e.FolderApi=Qo,e.InputBindingApi=Zo,e.ListApi=Ah,e.MonitorBindingApi=Jo,e.Pane=Yg,e.SeparatorApi=bu,e.SliderApi=Nh,e.TabApi=Pu,e.TabPageApi=Eu,e.TextApi=Oh,e.TpChangeEvent=s,e.VERSION=Kg,Object.defineProperty(e,"__esModule",{value:!0})})})(Qd,Qd.exports);var gl={exports:{}};/**
 * mainloop.js 1.0.3-20170529
 *
 * @author Isaac Sukin (http://www.isaacsukin.com/)
 * @license MIT
 */(function(t){(function(r){function e(A){if(L=w(e),!(A<o+m)){for(i+=A-o,o=A,I(A,i),A>f+h&&(s=l*d*1e3/(A-f)+(1-l)*s,f=A,d=0),d++,v=0;i>=n;)if(P(n),i-=n,++v>=240){b=!0;break}E(i/n),S(s,b),b=!1}}var n=1e3/60,i=0,o=0,s=60,l=.9,h=1e3,f=0,d=0,v=0,m=0,_=!1,g=!1,b=!1,y=typeof window=="object"?window:r,w=y.requestAnimationFrame||function(){var A=Date.now(),U,j;return function(q){return U=Date.now(),j=Math.max(0,n-(U-A)),A=U+j,setTimeout(function(){q(U+j)},j)}}(),C=y.cancelAnimationFrame||clearTimeout,T=function(){},I=T,P=T,E=T,S=T,L;r.MainLoop={getSimulationTimestep:function(){return n},setSimulationTimestep:function(A){return n=A,this},getFPS:function(){return s},getMaxAllowedFPS:function(){return 1e3/m},setMaxAllowedFPS:function(A){return typeof A>"u"&&(A=1/0),A===0?this.stop():m=1e3/A,this},resetFrameDelta:function(){var A=i;return i=0,A},setBegin:function(A){return I=A||I,this},setUpdate:function(A){return P=A||P,this},setDraw:function(A){return E=A||E,this},setEnd:function(A){return S=A||S,this},start:function(){return g||(g=!0,L=w(function(A){E(1),_=!0,o=A,f=A,d=0,L=w(e)})),this},stop:function(){return _=!1,g=!1,C(L),this},isRunning:function(){return _}},t!==null&&(t.exports=r.MainLoop)})(Zr)})(gl);function qP(){let t,r,e,n;const i=F2(),o=f=>{e&&e.update.begin();const d=i.time;d.delta=f,d.deltaSec=f/1e3,d.elapsed+=f,t(i),e&&e.update.end()},s=f=>{e&&e.draw.begin(),typeof r=="function"?r(i,f):typeof r=="object"&&r.draw(i,f),n&&i.debug&&n(i),e&&e.draw.end()},l=(f,d)=>{if(i.fps=f,d){const v=Math.round(gl.exports.resetFrameDelta());console.log(`Rendering discarded ${v}ms`)}},h=gl.exports.setUpdate(o).setDraw(s).setEnd(l);return Object.assign(i,{debug:!1,paused:!1,fps:0,time:{delta:0,deltaSec:0,elapsed:0},loop:h,updateOnce:o,drawOnce:s,run(f,d,v,m){t=f,r=d,e=v,n=m,this.start()},start(){h.start(),this.paused=!1},stop(f){h.stop(),f&&(this.paused=!0)},addToPane(f){f.addButton({title:"Sketches Home"}).on("click",()=>{const v=document.head.querySelector("link[rel=home]");v?location.href=v.getAttribute("href"):location.href="../../../../index.html"}),f.addButton({title:"Screenshot"}).on("click",()=>{i.captureSnapshotPNG()});const d=f.addFolder({title:"world",expanded:!0});d.addInput(i,"debug"),d.addInput(i,"paused").on("change",v=>{v.value===!0&&h.isRunning()?i.stop():v.value===!1&&!h.isRunning()&&i.start()})}}),i}class yl{constructor(){for(const r of this.constructor.attributes)this.defineAttribute(r)}using(r,e={}){const n=this.world;return this.world=r,this.options=e,n!==r&&this.onWorldChanged(r,n),this}get _store(){const r=this.constructor.storeKey;return this.world[r]||(this.world[r]=this.initStore()),this.world[r]}initStore(){return{}}onWorldChanged(r,e){}defineAttribute(r,e={}){Object.defineProperty(this,r,{get(){return this._store[r]},set(n){this._store[r]=n},enumerable:!0,...e})}}We(yl,"storeKey",Symbol("worldServiceKey")),We(yl,"attributes",[]);var Tv={exports:{}};(function(t,r){(function(e,n){t.exports=n()})(Zr,function(){var e=function(){function n(_){return s.appendChild(_.dom),_}function i(_){for(var g=0;g<s.children.length;g++)s.children[g].style.display=g===_?"block":"none";o=_}var o=0,s=document.createElement("div");s.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",s.addEventListener("click",function(_){_.preventDefault(),i(++o%s.children.length)},!1);var l=(performance||Date).now(),h=l,f=0,d=n(new e.Panel("FPS","#0ff","#002")),v=n(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var m=n(new e.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:s,addPanel:n,showPanel:i,begin:function(){l=(performance||Date).now()},end:function(){f++;var _=(performance||Date).now();if(v.update(_-l,200),_>h+1e3&&(d.update(1e3*f/(_-h),100),h=_,f=0,m)){var g=performance.memory;m.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return _},update:function(){l=this.end()},domElement:s,setMode:i}};return e.Panel=function(n,i,o){var s=1/0,l=0,h=Math.round,f=h(window.devicePixelRatio||1),d=80*f,v=48*f,m=3*f,_=2*f,g=3*f,b=15*f,y=74*f,w=30*f,C=document.createElement("canvas");C.width=d,C.height=v,C.style.cssText="width:80px;height:48px";var T=C.getContext("2d");return T.font="bold "+9*f+"px Helvetica,Arial,sans-serif",T.textBaseline="top",T.fillStyle=o,T.fillRect(0,0,d,v),T.fillStyle=i,T.fillText(n,m,_),T.fillRect(g,b,y,w),T.fillStyle=o,T.globalAlpha=.9,T.fillRect(g,b,y,w),{dom:C,update:function(I,P){s=Math.min(s,I),l=Math.max(l,I),T.fillStyle=o,T.globalAlpha=1,T.fillRect(0,0,d,b),T.fillStyle=i,T.fillText(h(I)+" "+n+" ("+h(s)+"-"+h(l)+")",m,_),T.drawImage(C,g+f,b,y-f,w,g,b,y-f,w),T.fillRect(g+y-f,b,f,w),T.fillStyle=o,T.globalAlpha=.9,T.fillRect(g+y-f,b,f,h((1-I/P)*w))}}},e})})(Tv);const tp=Tv.exports;function YP(){const t=new tp;t.setMode(0),t.domElement.style.position="absolute",t.domElement.style.left="0px",t.domElement.style.top="0px",document.body.appendChild(t.domElement);const r=new tp;return r.setMode(0),r.domElement.style.position="absolute",r.domElement.style.left="0px",r.domElement.style.top="55px",document.body.appendChild(r.domElement),{draw:t,update:r}}function Cv(t,r,e=.001){return this===r||Math.abs(t.a-r.a)<e&&Math.abs(t.b-r.b)<e&&Math.abs(t.c-r.c)<e&&Math.abs(t.d-r.d)<e&&Math.abs(t.tx-r.tx)<e&&Math.abs(t.ty-r.ty)<e}class B2{constructor(){this.textureIds=[],this.matrices=[],this.lines=[],this.count=0}clear(){for(let r=0;r<this.count;r++)this.textureIds[r]=null,this.matrices[r]=null;this.count=0}add(r,e,n,i,o,s){const{textureIds:l,matrices:h,lines:f,count:d}=this;r=r*4+o;for(let v=0;v<d;v++)if(f[v*2]===n&&f[v*2+1]===i&&l[v]===r&&Cv(h[v],e))return v;return d>=s.maxStyles?-1:(l[d]=r,h[d]=e,f[d*2]=n,f[d*2+1]=i,this.count++,d)}}class ep{constructor(){this.texArray=new go,this.styleArray=new B2,this.shader=null,this.blend=Z.NORMAL,this.start=0,this.size=0,this.TICK=0,this.settings=null,this.data=null}clear(){this.texArray.clear(),this.styleArray.clear(),this.settings=null,this.data=null,this.shader=null}begin(r,e){this.TICK=++vt._globalBatch,this.settings=r,this.shader=e,this.start=0,this.size=0,this.data=null,e&&e.settings&&(this.settings=e.settings)}check(r){return this.size===0?(this.shader=r,!0):this.shader===r}add(r,e,n,i,o){const{texArray:s,TICK:l,styleArray:h,settings:f}=this,{baseTexture:d}=r;if(d._batchEnabled!==l&&s.count===f.maxTextures)return-1;const v=d._batchEnabled!==l?s.count:d._batchLocation,m=h.add(v,e||Rt.IDENTITY,n,i,o,f);return m>=0&&d._batchEnabled!==l&&(d._batchEnabled=l,d._batchLocation=s.count,s.elements[s.count++]=d),m}}class G2{constructor(){this.reset()}begin(r,e,n){this.reset(),this.style=r,this.start=e,this.attribStart=n,this.jointEnd=0}end(r,e){this.attribSize=e-this.attribStart,this.size=r-this.start}reset(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0,this.styleId=-1,this.rgba=0,this.jointEnd=0}}class zo{constructor(){this.reset()}toJSON(){return this.copyTo({})}clone(){return this.copyTo(new zo)}copyTo(r){return r.color=this.color,r.alpha=this.alpha,r.texture=this.texture,r.matrix=this.matrix,r.shader=this.shader,r.visible=this.visible,r.smooth=this.smooth,r.matrixTex=null,r}packLineScale(){return 0}reset(){this.color=16777215,this.alpha=1,this.texture=tt.WHITE,this.matrix=null,this.shader=null,this.visible=!1,this.smooth=!1,this.matrixTex=null}destroy(){this.texture=null,this.matrix=null,this.matrixTex=null}getTextureMatrix(){const r=this.texture;return this.matrix?r.frame.width===r.baseTexture.width&&r.frame.height===r.baseTexture.height?this.matrix:(this.matrixTex?this.matrixTex.copyFrom(this.matrix):this.matrixTex=this.matrix.clone(),this.matrixTex.translate(Number(r.frame.x),Number(r.frame.y)),this.matrixTex):null}}var ae;(function(t){const r="none";t.NONE=r;const e="normal";t.NORMAL=e;const n="horizontal";t.HORIZONTAL=n;const i="vertical";t.VERTICAL=i})(ae||(ae={}));class du extends zo{clone(){return this.copyTo(new du)}copyTo(r){return r.color=this.color,r.alpha=this.alpha,r.texture=this.texture,r.matrix=this.matrix,r.shader=this.shader,r.visible=this.visible,r.width=this.width,r.alignment=this.alignment,r.cap=this.cap,r.join=this.join,r.miterLimit=this.miterLimit,r.scaleMode=this.scaleMode,r}packLineScale(){switch(this.scaleMode){case ae.NORMAL:return 1;case ae.HORIZONTAL:return 2;case ae.VERTICAL:return 3;default:return 0}}reset(){super.reset(),this.smooth=!0,this.color=0,this.width=0,this.alignment=.5,this.cap=re.BUTT,this.join=Wt.MITER,this.miterLimit=10,this.scaleMode=ae.NORMAL}}class mr{constructor(){mr.prototype.__init.call(this),mr.prototype.__init2.call(this),mr.prototype.__init3.call(this),mr.prototype.__init4.call(this),mr.prototype.__init5.call(this)}__init(){this.verts=[]}__init2(){this.joints=[]}__init3(){this.vertexSize=0}__init4(){this.indexSize=0}__init5(){this.closePointEps=1e-4}clear(){this.verts.length=0,this.joints.length=0,this.vertexSize=0,this.indexSize=0}destroy(){this.verts.length=0,this.joints.length=0}}var V;(function(t){t[t.NONE=0]="NONE";const e=1;t[t.FILL=e]="FILL";const n=4;t[t.JOINT_BEVEL=n]="JOINT_BEVEL";const i=8;t[t.JOINT_MITER=i]="JOINT_MITER";const o=12;t[t.JOINT_ROUND=o]="JOINT_ROUND";const s=16;t[t.JOINT_CAP_BUTT=s]="JOINT_CAP_BUTT";const l=18;t[t.JOINT_CAP_SQUARE=l]="JOINT_CAP_SQUARE";const h=20;t[t.JOINT_CAP_ROUND=h]="JOINT_CAP_ROUND";const f=24;t[t.FILL_EXPAND=f]="FILL_EXPAND";const d=1<<5;t[t.CAP_BUTT=d]="CAP_BUTT";const v=2<<5;t[t.CAP_SQUARE=v]="CAP_SQUARE";const m=3<<5;t[t.CAP_ROUND=m]="CAP_ROUND";const _=4<<5;t[t.CAP_BUTT2=_]="CAP_BUTT2"})(V||(V={}));class Qt{constructor(){Qt.prototype.__init.call(this),Qt.prototype.__init2.call(this),Qt.prototype.__init3.call(this)}static __initStatic(){this.vertsByJoint=[]}__init(){this.strideFloats=12}updateBufferSize(r,e,n,i){const{joints:o}=i;let s=!1,l=0,h=0;for(let f=r;f<r+e;f++){const d=o[f]&-32,v=o[f]&31;if(v===V.FILL){s=!0,l++;continue}if(v>=V.FILL_EXPAND){l+=3,h+=3;continue}const m=Qt.vertsByJoint[v]+Qt.vertsByJoint[d];m>=4&&(l+=m,h+=6+3*Math.max(m-6,0))}s&&(h+=n),i.vertexSize+=l,i.indexSize+=h}__init2(){this.bufferPos=0}__init3(){this.indexPos=0}beginPack(r,e,n,i,o=0,s=0){this.buildData=r,this.bufFloat=e,this.bufUint=n,this.indices=i,this.bufferPos=o,this.indexPos=s}endPack(){this.buildData=null,this.bufFloat=null,this.bufUint=null,this.indices=null}packInterleavedGeometry(r,e,n,i,o){const{bufFloat:s,bufUint:l,indices:h,buildData:f,strideFloats:d}=this,{joints:v,verts:m}=f;let _=this.bufferPos,g=this.indexPos,b=this.bufferPos/this.strideFloats,y,w,C,T,I,P,E,S,L=!1,A=0;for(let U=r;U<r+e;U++){const j=v[U],q=v[U]&-32,$=v[U]&31;if($===V.FILL){L=!0,y=m[U*2],w=m[U*2+1],s[_]=y,s[_+1]=w,s[_+2]=y,s[_+3]=w,s[_+4]=y,s[_+5]=w,s[_+6]=y,s[_+7]=w,s[_+8]=A,s[_+9]=16*$,s[_+10]=i,l[_+11]=o,_+=d;continue}if($>=V.FILL_EXPAND){I=m[U*2],P=m[U*2+1],y=m[U*2+2],w=m[U*2+3],C=m[U*2+4],T=m[U*2+5];const k=U+3;for(let B=0;B<3;B++)s[_]=I,s[_+1]=P,s[_+2]=y,s[_+3]=w,s[_+4]=C,s[_+5]=T,s[_+6]=m[(k+B)*2],s[_+7]=m[(k+B)*2+1],s[_+8]=A,s[_+9]=16*j+B,s[_+10]=i,l[_+11]=o,_+=d;h[g]=b,h[g+1]=b+1,h[g+2]=b+2,g+=3,b+=3;continue}const ot=Qt.vertsByJoint[$]+Qt.vertsByJoint[q];if(ot===0)continue;y=m[U*2],w=m[U*2+1],C=m[U*2+2],T=m[U*2+3],I=m[U*2-2],P=m[U*2-1];const z=Math.sqrt((C-y)*(C-y)+(T-w)*(T-w));Qt.vertsByJoint[$]===0&&(A-=z),($&-3)!==V.JOINT_CAP_BUTT?(E=m[U*2+4],S=m[U*2+5]):(E=y,S=w);for(let k=0;k<ot;k++)s[_]=I,s[_+1]=P,s[_+2]=y,s[_+3]=w,s[_+4]=C,s[_+5]=T,s[_+6]=E,s[_+7]=S,s[_+8]=A,s[_+9]=16*j+k,s[_+10]=i,l[_+11]=o,_+=d;A+=z,h[g]=b,h[g+1]=b+1,h[g+2]=b+2,h[g+3]=b,h[g+4]=b+2,h[g+5]=b+3,g+=6;for(let k=5;k+1<ot;k++)h[g]=b+4,h[g+1]=b+k,h[g+2]=b+k+1,g+=3;b+=ot}if(L){for(let U=0;U<n.length;U++)h[g+U]=n[U]+b;g+=n.length}this.bufferPos=_,this.indexPos=g}}Qt.__initStatic();const Ut=Qt.vertsByJoint;for(let t=0;t<256;t++)Ut.push(0);Ut[V.FILL]=1;for(let t=0;t<8;t++)Ut[V.FILL_EXPAND+t]=3;Ut[V.JOINT_BEVEL]=4+5;Ut[V.JOINT_BEVEL+1]=4+5;Ut[V.JOINT_BEVEL+2]=4+5;Ut[V.JOINT_BEVEL+3]=4+5;Ut[V.JOINT_ROUND]=4+5;Ut[V.JOINT_ROUND+1]=4+5;Ut[V.JOINT_ROUND+2]=4+5;Ut[V.JOINT_ROUND+3]=4+5;Ut[V.JOINT_MITER]=4+5;Ut[V.JOINT_MITER+1]=4+5;Ut[V.JOINT_MITER+2]=4;Ut[V.JOINT_MITER+3]=4;Ut[V.JOINT_CAP_BUTT]=4;Ut[V.JOINT_CAP_BUTT+1]=4;Ut[V.JOINT_CAP_SQUARE]=4;Ut[V.JOINT_CAP_SQUARE+1]=4;Ut[V.JOINT_CAP_ROUND]=4+5;Ut[V.JOINT_CAP_ROUND+1]=4+5;Ut[V.CAP_ROUND]=4;class Oo{constructor(r,e=null,n=null,i=null){this.shape=r,this.lineStyle=n,this.fillStyle=e,this.matrix=i,this.type=r.type,this.points=[],this.holes=[],this.triangles=[],this.closeStroke=!1,this.clearBuild()}clearPath(){this.points.length=0,this.closeStroke=!0}clearBuild(){this.triangles.length=0,this.fillStart=0,this.fillLen=0,this.strokeStart=0,this.strokeLen=0,this.fillAA=!1}clone(){return new Oo(this.shape,this.fillStyle,this.lineStyle,this.matrix)}capType(){let r;switch(this.lineStyle.cap){case re.SQUARE:r=V.CAP_SQUARE;break;case re.ROUND:r=V.CAP_ROUND;break;default:r=V.CAP_BUTT;break}return r}goodJointType(){let r;switch(this.lineStyle.join){case Wt.BEVEL:r=V.JOINT_BEVEL;break;case Wt.ROUND:r=V.JOINT_ROUND;break;default:r=V.JOINT_MITER+3;break}return r}jointType(){let r;switch(this.lineStyle.join){case Wt.BEVEL:r=V.JOINT_BEVEL;break;case Wt.ROUND:r=V.JOINT_ROUND;break;default:r=V.JOINT_MITER;break}return r}destroy(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null,this.triangles=null}}class bl{path(r,e){const n=r.points;let i,o,s,l,h,f;if(r.type===gt.CIRC){const y=r.shape;i=y.x,o=y.y,h=f=y.radius,s=l=0}else if(r.type===gt.ELIP){const y=r.shape;i=y.x,o=y.y,h=y.width,f=y.height,s=l=0}else{const y=r.shape,w=y.width/2,C=y.height/2;i=y.x+w,o=y.y+C,h=f=Math.max(0,Math.min(y.radius,Math.min(w,C))),s=w-h,l=C-f}if(!(h>=0&&f>=0&&s>=0&&l>=0)){n.length=0;return}const d=Math.ceil(2.3*Math.sqrt(h+f)),v=d*8+(s?4:0)+(l?4:0);if(n.length=v,v===0)return;if(d===0){n.length=8,n[0]=n[6]=i+s,n[1]=n[3]=o+l,n[2]=n[4]=i-s,n[5]=n[7]=o-l;return}let m=0,_=d*4+(s?2:0)+2,g=_,b=v;{const y=s+h,w=l,C=i+y,T=i-y,I=o+w;if(n[m++]=C,n[m++]=I,n[--_]=I,n[--_]=T,l){const P=o-w;n[g++]=T,n[g++]=P,n[--b]=P,n[--b]=C}}for(let y=1;y<d;y++){const w=Math.PI/2*(y/d),C=s+Math.cos(w)*h,T=l+Math.sin(w)*f,I=i+C,P=i-C,E=o+T,S=o-T;n[m++]=I,n[m++]=E,n[--_]=E,n[--_]=P,n[g++]=P,n[g++]=S,n[--b]=S,n[--b]=I}{const y=s,w=l+f,C=i+y,T=i-y,I=o+w,P=o-w;n[m++]=C,n[m++]=I,n[--b]=P,n[--b]=C,s&&(n[m++]=T,n[m++]=I,n[--b]=P,n[--b]=T)}}fill(r,e){const{verts:n,joints:i}=e,{points:o,triangles:s}=r;if(o.length===0)return;let l,h;if(r.type!==gt.RREC){const E=r.shape;l=E.x,h=E.y}else{const E=r.shape;l=E.x+E.width/2,h=E.y+E.height/2}const f=r.matrix,d=f?f.a*l+f.c*h+f.tx:l,v=f?f.b*l+f.d*h+f.ty:h;let m=1;const _=0;if(!r.fillAA){n.push(d,v),i.push(V.FILL),n.push(o[0],o[1]),i.push(V.FILL);for(let E=2;E<o.length;E+=2)n.push(o[E],o[E+1]),i.push(V.FILL),s.push(m++,_,m);s.push(_+1,_,m);return}const g=o.length;let b=o[g-2],y=o[g-1],w=y-o[g-3],C=o[g-4]-b;const T=Math.sqrt(w*w+C*C);w/=T,C/=T;let I,P;for(let E=0;E<g;E+=2){const S=o[E],L=o[E+1];let A=L-y,U=b-S;const j=Math.sqrt(A*A+U*U);A/=j,U/=j;let q=w+A,$=C+U;const ot=A*q+U*$;q/=ot,$/=ot,E>0?(n.push(q),n.push($)):(I=q,P=$),n.push(d),n.push(v),n.push(b),n.push(y),n.push(S),n.push(L),n.push(0),n.push(0),n.push(q),n.push($),i.push(V.FILL_EXPAND+2),i.push(V.NONE),i.push(V.NONE),i.push(V.NONE),i.push(V.NONE),i.push(V.NONE),b=S,y=L,w=A,C=U}n.push(I),n.push(P)}line(r,e){const{verts:n,joints:i}=e,{points:o}=r,s=o.length===8?r.goodJointType():V.JOINT_MITER+3,l=o.length;if(l!==0){n.push(o[l-2],o[l-1]),i.push(V.NONE);for(let h=0;h<l;h+=2)n.push(o[h],o[h+1]),i.push(s);n.push(o[0],o[1]),i.push(V.NONE),n.push(o[2],o[3]),i.push(V.NONE)}}}const D2=[];function rp(t,r=!1){const e=t.length;if(e<6)return;let n=0;for(let i=0,o=t[e-2],s=t[e-1];i<e;i+=2){const l=t[i],h=t[i+1];n+=(l-o)*(h+s),o=l,s=h}if(!r&&n>0||r&&n<=0){const i=e/2;for(let o=i+i%2;o<e;o+=2){const s=e-o-2,l=e-o-1,h=o,f=o+1;[t[s],t[h]]=[t[h],t[s]],[t[l],t[f]]=[t[f],t[l]]}}}class Ev{path(r,e){const n=r.shape,i=r.points=n.points.slice(),o=e.closePointEps,s=o*o;if(i.length===0)return;const l=new ct(i[0],i[1]),h=new ct(i[i.length-2],i[i.length-1]),f=r.closeStroke=n.closeStroke;let d=i.length,v=2;for(let m=2;m<d;m+=2){const _=i[m-2],g=i[m-1],b=i[m],y=i[m+1];let w=!0;Math.abs(_-b)<o&&Math.abs(g-y)<o&&(w=!1),w&&(i[v]=i[m],i[v+1]=i[m+1],v+=2)}i.length=d=v,v=2;for(let m=2;m+2<d;m+=2){let _=i[m-2],g=i[m-1];const b=i[m],y=i[m+1];let w=i[m+2],C=i[m+3];_-=b,g-=y,w-=b,C-=y;let T=!0;Math.abs(w*g-C*_)<s&&_*w+g*C<-s&&(T=!1),T&&(i[v]=i[m],i[v+1]=i[m+1],v+=2)}i[v]=i[d-2],i[v+1]=i[d-1],v+=2,i.length=d=v,!(d<=2)&&f&&Math.abs(l.x-h.x)<o&&Math.abs(l.y-h.y)<o&&(i.pop(),i.pop())}line(r,e){const{closeStroke:n,points:i}=r,o=i.length;if(o<=2)return;const{verts:s,joints:l}=e,h=r.jointType(),f=r.capType();let d=0,v,m;n?(v=i[o-2],m=i[o-1],l.push(V.NONE)):(v=i[2],m=i[3],f===V.CAP_ROUND?(s.push(i[0],i[1]),l.push(V.NONE),l.push(V.CAP_ROUND),d=0):(d=f,l.push(V.NONE))),s.push(v,m);for(let _=0;_<o;_+=2){const g=i[_],b=i[_+1];let y=h;_+2>=o?n||(y=V.NONE):_+4>=o&&(n||(f===V.CAP_ROUND&&(y=V.JOINT_CAP_ROUND),f===V.CAP_BUTT&&(y=V.JOINT_CAP_BUTT),f===V.CAP_SQUARE&&(y=V.JOINT_CAP_SQUARE))),y+=d,d=0,s.push(g,b),l.push(y),v=g,m=b}n?(s.push(i[0],i[1]),l.push(V.NONE),s.push(i[2],i[3]),l.push(V.NONE)):(s.push(i[o-4],i[o-3]),l.push(V.NONE))}fill(r,e){let n=r.points;const i=r.holes,o=e.closePointEps,{verts:s,joints:l}=e;if(n.length<6)return;const h=[];let f=n.length;rp(n,!1);for(let _=0;_<i.length;_++){const g=i[_];rp(g.points,!0),h.push(n.length/2),n=n.concat(g.points)}const d=D2;d.length<n.length&&(d.length=n.length);let v=0;for(let _=0;_<=h.length;_++){let g=f/2;_>0&&(_<h.length?g=h[_]:g=n.length>>1),d[v*2]=g-1,d[(g-1)*2+1]=v;for(let b=v;b+1<g;b++)d[b*2+1]=b+1,d[b*2+2]=b;v=g}if(r.triangles=bi.exports(n,h,2),!r.triangles)return;if(!r.fillAA){for(let _=0;_<n.length;_+=2)s.push(n[_],n[_+1]),l.push(V.FILL);return}const{triangles:m}=r;f=n.length;for(let _=0;_<m.length;_+=3){let g=0;for(let b=0;b<3;b++){const y=m[_+b],w=m[_+(b+1)%3];(d[y*2]===w||d[y*2+1]===w)&&(g|=1<<b)}l.push(V.FILL_EXPAND+g),l.push(V.NONE),l.push(V.NONE),l.push(V.NONE),l.push(V.NONE),l.push(V.NONE)}for(let _=0;_<f/2;_++){const g=d[_*2],b=d[_*2+1];let y=n[b*2+1]-n[_*2+1],w=-(n[b*2]-n[_*2]),C=n[_*2+1]-n[g*2+1],T=-(n[_*2]-n[g*2]);const I=Math.sqrt(y*y+w*w);y/=I,w/=I;const P=Math.sqrt(C*C+T*T);C/=P,T/=P;let E=y+C,S=w+T;const L=E*y+S*w;Math.abs(L)<o?(E=y,S=w):(E/=L,S/=L),d[_*2]=E,d[_*2+1]=S}for(let _=0;_<m.length;_+=3){const g=m[_],b=m[_+1],y=m[_+2],w=n[y*2+1]-n[b*2+1],C=-(n[y*2]-n[b*2]),T=n[b*2+1]-n[g*2+1],I=-(n[b*2]-n[g*2]);let P=1;w*I-T*C>0&&(P=2);for(let E=0;E<3;E++){const S=m[_+E*P%3];s.push(n[S*2],n[S*2+1])}for(let E=0;E<3;E++){const S=m[_+E*P%3];s.push(d[S*2],d[S*2+1])}}}}class pu{constructor(){pu.prototype.__init.call(this)}__init(){this._polyBuilder=new Ev}path(r,e){const n=r.shape,i=n.x,o=n.y,s=n.width,l=n.height,h=r.points;h.length=0,h.push(i,o,i+s,o,i+s,o+l,i,o+l)}line(r,e){const{verts:n,joints:i}=e,{points:o}=r,s=r.goodJointType(),l=o.length;n.push(o[l-2],o[l-1]),i.push(V.NONE);for(let h=0;h<l;h+=2)n.push(o[h],o[h+1]),i.push(s);n.push(o[0],o[1]),i.push(V.NONE),n.push(o[2],o[3]),i.push(V.NONE)}fill(r,e){const{verts:n,joints:i}=e,{points:o,triangles:s}=r;if(s.length=0,!r.fillAA){n.push(o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),i.push(V.FILL,V.FILL,V.FILL,V.FILL),s.push(0,1,2,0,2,3);return}this._polyBuilder.fill(r,e)}}function Hr(t,r,e){const n=r-t;return t+n*e}function ao(t,r,e,n,i,o,s=[],l=.001){const f=s;let d=0,v=0,m=0,_=0,g=0,b=0;for(let y=0,w=0;y<=20;++y)w=y/20,d=Hr(t,e,w),v=Hr(r,n,w),m=Hr(e,i,w),_=Hr(n,o,w),g=Hr(d,m,w),b=Hr(v,_,w),!(y===0&&Math.abs(g-f[f.length-2])<l&&Math.abs(b-f[f.length-1])<l)&&f.push(g,b);return f}class vu{constructor(){vu.prototype.__init.call(this)}__init(){this._circleBuilder=new bl}path(r,e){if(tr.nextRoundedRectBehavior){this._circleBuilder.path(r,e);return}const n=r.shape,{points:i}=r,o=n.x,s=n.y,l=n.width,h=n.height,f=Math.max(0,Math.min(n.radius,Math.min(l,h)/2));if(i.length=0,!f)i.push(o,s,o+l,s,o+l,s+h,o,s+h);else{const d=e.closePointEps;ao(o,s+f,o,s,o+f,s,i,d),ao(o+l-f,s,o+l,s,o+l,s+f,i,d),ao(o+l,s+h-f,o+l,s+h,o+l-f,s+h,i,d),ao(o+f,s+h,o,s+h,o,s+h-f,i,d),i.length>=4&&Math.abs(i[0]-i[i.length-2])<d&&Math.abs(i[1]-i[i.length-1])<d&&(i.pop(),i.pop())}}line(r,e){this._circleBuilder.line(r,e)}fill(r,e){this._circleBuilder.fill(r,e)}}const lo={[gt.POLY]:new Ev,[gt.CIRC]:new bl,[gt.ELIP]:new bl,[gt.RECT]:new pu,[gt.RREC]:new vu},np=[],uo=[],Xr=new ct,V2=new nn;class $o extends sn{static __initStatic(){this.BATCHABLE_SIZE=100}__init(){this.indicesUint16=null}get points(){return this.buildData.verts}get closePointEps(){return this.buildData.closePointEps}initAttributes(r){this._buffer=new Lt(null,r,!1),this._bufferFloats=new Float32Array,this._bufferUint=new Uint32Array,this._indexBuffer=new Lt(null,r,!0),this.addAttribute("aPrev",this._buffer,2,!1,Y.FLOAT).addAttribute("aPoint1",this._buffer,2,!1,Y.FLOAT).addAttribute("aPoint2",this._buffer,2,!1,Y.FLOAT).addAttribute("aNext",this._buffer,2,!1,Y.FLOAT).addAttribute("aTravel",this._buffer,1,!1,Y.FLOAT).addAttribute("aVertexJoint",this._buffer,1,!1,Y.FLOAT).addAttribute("aStyleId",this._buffer,1,!1,Y.FLOAT).addAttribute("aColor",this._buffer,4,!0,Y.UNSIGNED_BYTE).addIndex(this._indexBuffer),this.strideFloats=12}constructor(){super(),$o.prototype.__init.call(this),this.initAttributes(!1),this.buildData=new mr,this.graphicsData=[],this.dirty=0,this.batchDirty=-1,this.cacheDirty=-1,this.clearDirty=0,this.drawCalls=[],this.batches=[],this.shapeBuildIndex=0,this.shapeBatchIndex=0,this._bounds=new nn,this.boundsDirty=-1,this.boundsPadding=0,this.batchable=!1,this.indicesUint16=null,this.packer=null,this.packSize=0,this.pack32index=null}checkInstancing(r,e){this.packer||(this.packer=new Qt,this.pack32index=e)}get bounds(){return this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds}invalidate(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeBuildIndex=0,this.shapeBatchIndex=0,this.packSize=0,this.buildData.clear();for(let r=0;r<this.drawCalls.length;r++)this.drawCalls[r].clear(),uo.push(this.drawCalls[r]);this.drawCalls.length=0;for(let r=0;r<this.batches.length;r++){const e=this.batches[r];e.reset(),np.push(e)}this.batches.length=0}clear(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this}drawShape(r,e=null,n=null,i=null){const o=new Oo(r,e,n,i);return this.graphicsData.push(o),this.dirty++,this}drawHole(r,e=null){if(!this.graphicsData.length)return null;const n=new Oo(r,null,null,e),i=this.graphicsData[this.graphicsData.length-1];return n.lineStyle=i.lineStyle,i.holes.push(n),this.dirty++,this}destroy(){super.destroy();for(let r=0;r<this.graphicsData.length;++r)this.graphicsData[r].destroy();this.buildData.destroy(),this.buildData=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null}containsPoint(r){const e=this.graphicsData;for(let n=0;n<e.length;++n){const i=e[n];if(!!i.fillStyle.visible&&i.shape&&(i.matrix?i.matrix.applyInverse(r,Xr):Xr.copyFrom(r),i.shape.contains(Xr.x,Xr.y))){let o=!1;if(i.holes){for(let s=0;s<i.holes.length;s++)if(i.holes[s].shape.contains(Xr.x,Xr.y)){o=!0;break}}if(!o)return!0}}return!1}updatePoints(){}updateBufferSize(){this._buffer.update(new Float32Array)}updateBuild(){const{graphicsData:r,buildData:e}=this,n=r.length;for(let i=this.shapeBuildIndex;i<n;i++){const o=r[i];o.strokeStart=0,o.strokeLen=0,o.fillStart=0,o.fillLen=0;const{fillStyle:s,lineStyle:l,holes:h}=o;if(!s.visible&&!l.visible)continue;const f=lo[o.type];if(o.clearPath(),f.path(o,e),o.matrix&&this.transformPoints(o.points,o.matrix),o.clearBuild(),!(o.points.length<=2)&&((s.visible||l.visible)&&this.processHoles(h),s.visible&&(o.fillAA=o.fillStyle.smooth&&o.fillStyle.texture===tt.WHITE&&h.length===0&&!(o.closeStroke&&o.lineStyle.visible&&!o.lineStyle.shader&&o.lineStyle.alpha>=.99&&o.lineStyle.width*Math.min(o.lineStyle.alignment,1-o.lineStyle.alignment)>=.495),o.fillStart=e.joints.length,h.length?lo[gt.POLY].fill(o,e):f.fill(o,e),o.fillLen=e.joints.length-o.fillStart),l.visible)){o.strokeStart=e.joints.length,f.line(o,e);for(let d=0;d<h.length;d++){const v=h[d];lo[v.type].line(v,e)}o.strokeLen=e.joints.length-o.strokeStart}}this.shapeBuildIndex=n}updateBatches(r){if(!this.graphicsData.length){this.batchable=!0;return}if(this.updateBuild(),!this.validateBatching())return;const{buildData:e,graphicsData:n}=this,i=n.length;this.cacheDirty=this.dirty;let o=null,s=null;this.batches.length>0&&(o=this.batches[this.batches.length-1],s=o.style);for(let l=this.shapeBatchIndex;l<i;l++){const h=n[l],f=h.fillStyle,d=h.lineStyle;if(h.matrix&&this.transformPoints(h.points,h.matrix),!(!f.visible&&!d.visible))for(let v=0;v<2;v++){const m=v===0?f:d;if(!m.visible)continue;const _=m.texture.baseTexture,g=e.vertexSize,b=e.indexSize;_.wrapMode=ye.REPEAT,v===0?this.packer.updateBufferSize(h.fillStart,h.fillLen,h.triangles.length,e):this.packer.updateBufferSize(h.strokeStart,h.strokeLen,h.triangles.length,e),e.vertexSize!==g&&(o&&!this._compareStyles(s,m)&&(o.end(b,g),o=null),o||(o=np.pop()||new G2,o.begin(m,b,g),this.batches.push(o),s=m),v===0?o.jointEnd=h.fillStart+h.fillLen:o.jointEnd=h.strokeStart+h.strokeLen)}}if(this.shapeBatchIndex=i,o&&o.end(e.indexSize,e.vertexSize),this.batches.length===0){this.batchable=!0;return}this.batchable=this.isBatchable(),this.batchable?this.packBatches():(this.buildDrawCalls(r),this.updatePack())}updatePack(){const{vertexSize:r,indexSize:e}=this.buildData;if(this.packSize===r)return;const{strideFloats:n,packer:i,buildData:o,batches:s}=this,l=this._buffer,h=this._indexBuffer,f=r*n;if(l.data.length!==f){const v=new ArrayBuffer(f*4);this._bufferFloats=new Float32Array(v),this._bufferUint=new Uint32Array(v),l.data=this._bufferFloats}h.data.length!==e&&(r>65535&&this.pack32index?h.data=new Uint32Array(e):h.data=new Uint16Array(e)),i.beginPack(o,this._bufferFloats,this._bufferUint,h.data);let d=0;for(let v=0;v<this.graphicsData.length;v++){const m=this.graphicsData[v];if(m.fillLen){for(;s[d].jointEnd<=m.fillStart;)d++;i.packInterleavedGeometry(m.fillStart,m.fillLen,m.triangles,s[d].styleId,s[d].rgba)}if(m.strokeLen){for(;s[d].jointEnd<=m.strokeStart;)d++;i.packInterleavedGeometry(m.strokeStart,m.strokeLen,m.triangles,s[d].styleId,s[d].rgba)}}l.update(),h.update(),this.packSize=r}_compareStyles(r,e){if(!r||!e||r.texture.baseTexture!==e.texture.baseTexture||r.color+r.alpha!==e.color+e.alpha||r.width!==e.width||r.scaleMode!==e.scaleMode||r.alignment!==e.alignment)return!1;const n=r.matrix||Rt.IDENTITY,i=e.matrix||Rt.IDENTITY;return Cv(n,i)}validateBatching(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(let r=0,e=this.graphicsData.length;r<e;r++){const n=this.graphicsData[r],i=n.fillStyle,o=n.lineStyle;if(i&&!i.texture.baseTexture.valid||o&&!o.texture.baseTexture.valid)return!1}return!0}packBatches(){this.batchDirty++;const r=this.batches;for(let e=0,n=r.length;e<n;e++){const i=r[e];for(let o=0;o<i.size;o++){const s=i.start+o;this.indicesUint16[s]=this.indicesUint16[s]-i.attribStart}}}isBatchable(){return!1}buildDrawCalls(r){for(let i=0;i<this.drawCalls.length;i++)this.drawCalls[i].clear(),uo.push(this.drawCalls[i]);this.drawCalls.length=0;let e=uo.pop()||new ep;e.begin(r,null);let n=0;this.drawCalls.push(e);for(let i=0;i<this.batches.length;i++){const o=this.batches[i],s=o.style;if(o.attribSize===0)continue;let l=-1;const h=s.getTextureMatrix();e.check(s.shader)&&(l=e.add(s.texture,h,s.width,s.alignment||0,s.packLineScale())),l<0&&(e=uo.pop()||new ep,this.drawCalls.push(e),e.begin(r,s.shader),e.start=n,l=e.add(s.texture,h,s.width,s.alignment||0,s.packLineScale())),e.size+=o.size,n+=o.size;const{color:f,alpha:d}=s,v=(f>>16)+(f&65280)+((f&255)<<16);o.rgba=Go(v,d),o.styleId=l}}processHoles(r){for(let e=0;e<r.length;e++){const n=r[e],i=lo[n.type];n.clearPath(),i.path(n,this.buildData),n.matrix&&this.transformPoints(n.points,n.matrix)}}calculateBounds(){const r=this._bounds,e=V2;let n=Rt.IDENTITY;this._bounds.clear(),e.clear();for(let i=0;i<this.graphicsData.length;i++){const o=this.graphicsData[i],s=o.shape,l=o.type,h=o.lineStyle,f=o.matrix||Rt.IDENTITY;let d=0;if(h&&h.visible&&(d=h.width,l!==gt.POLY||o.fillStyle.visible?d*=Math.max(0,h.alignment):d*=Math.max(h.alignment,1-h.alignment)),n!==f&&(e.isEmpty()||(r.addBoundsMatrix(e,n),e.clear()),n=f),l===gt.RECT||l===gt.RREC){const v=s;e.addFramePad(v.x,v.y,v.x+v.width,v.y+v.height,d,d)}else if(l===gt.CIRC){const v=s;e.addFramePad(v.x,v.y,v.x,v.y,v.radius+d,v.radius+d)}else if(l===gt.ELIP){const v=s;e.addFramePad(v.x,v.y,v.x,v.y,v.width+d,v.height+d)}else{const v=s;r.addVerticesMatrix(n,v.points,0,v.points.length,d,d)}}e.isEmpty()||r.addBoundsMatrix(e,n),r.pad(this.boundsPadding,this.boundsPadding)}transformPoints(r,e){for(let n=0;n<r.length/2;n++){const i=r[n*2],o=r[n*2+1];r[n*2]=e.a*i+e.c*o+e.tx,r[n*2+1]=e.b*i+e.d*o+e.ty}}}$o.__initStatic();const ip=`#version 100
precision highp float;
const float FILL = 1.0;
const float BEVEL = 4.0;
const float MITER = 8.0;
const float ROUND = 12.0;
const float JOINT_CAP_BUTT = 16.0;
const float JOINT_CAP_SQUARE = 18.0;
const float JOINT_CAP_ROUND = 20.0;

const float FILL_EXPAND = 24.0;

const float CAP_BUTT = 1.0;
const float CAP_SQUARE = 2.0;
const float CAP_ROUND = 3.0;
const float CAP_BUTT2 = 4.0;

const float MITER_LIMIT = 10.0;

// === geom ===
attribute vec2 aPrev;
attribute vec2 aPoint1;
attribute vec2 aPoint2;
attribute vec2 aNext;
attribute float aVertexJoint;
attribute float aTravel;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec4 vLine1;
varying vec4 vLine2;
varying vec4 vArc;
varying float vType;

uniform float resolution;
uniform float expand;

// === style ===
attribute float aStyleId;
attribute vec4 aColor;

varying float vTextureId;
varying vec4 vColor;
varying vec2 vTextureCoord;
varying vec2 vTravel;

uniform vec2 styleLine[%MAX_STYLES%];
uniform vec3 styleMatrix[2 * %MAX_STYLES%];
uniform float styleTextureId[%MAX_STYLES%];
uniform vec2 samplerSize[%MAX_TEXTURES%];

vec2 doBisect(vec2 norm, float len, vec2 norm2, float len2,
    float dy, float inner) {
    vec2 bisect = (norm + norm2) / 2.0;
    bisect /= dot(norm, bisect);
    vec2 shift = dy * bisect;
    if (inner > 0.5) {
        if (len < len2) {
            if (abs(dy * (bisect.x * norm.y - bisect.y * norm.x)) > len) {
                return dy * norm;
            }
        } else {
            if (abs(dy * (bisect.x * norm2.y - bisect.y * norm2.x)) > len2) {
                return dy * norm;
            }
        }
    }
    return dy * bisect;
}

void main(void){
    vec2 pointA = (translationMatrix * vec3(aPoint1, 1.0)).xy;
    vec2 pointB = (translationMatrix * vec3(aPoint2, 1.0)).xy;

    vec2 xBasis = pointB - pointA;
    float len = length(xBasis);
    vec2 forward = xBasis / len;
    vec2 norm = vec2(forward.y, -forward.x);

    float type = floor(aVertexJoint / 16.0);
    float vertexNum = aVertexJoint - type * 16.0;
    float dx = 0.0, dy = 1.0;

    float capType = floor(type / 32.0);
    type -= capType * 32.0;

    int styleId = int(aStyleId + 0.5);
    float lineWidth = styleLine[styleId].x;
    vTextureId = floor(styleTextureId[styleId] / 4.0);
    float scaleMode = styleTextureId[styleId] - vTextureId * 4.0;
    float avgScale = 1.0;
    if (scaleMode > 2.5) {
        avgScale = length(translationMatrix * vec3(1.0, 0.0, 0.0));
    } else if (scaleMode > 1.5) {
        avgScale = length(translationMatrix * vec3(0.0, 1.0, 0.0));
    } else if (scaleMode > 0.5) {
        vec2 avgDiag = (translationMatrix * vec3(1.0, 1.0, 0.0)).xy;
        avgScale = sqrt(dot(avgDiag, avgDiag) * 0.5);
    }
    lineWidth *= 0.5 * avgScale;
    float lineAlignment = 2.0 * styleLine[styleId].y - 1.0;
    vTextureCoord = vec2(0.0);

    vec2 pos;

    if (capType == CAP_ROUND) {
        vertexNum += 4.0;
        type = JOINT_CAP_ROUND;
        capType = 0.0;
        lineAlignment = -lineAlignment;
    }

    vLine1 = vec4(0.0, 10.0, 1.0, 0.0);
    vLine2 = vec4(0.0, 10.0, 1.0, 0.0);
    vArc = vec4(0.0);
    if (type == FILL) {
        pos = pointA;
        vType = 0.0;
        vLine2 = vec4(-2.0, -2.0, -2.0, 0.0);
        vec2 vTexturePixel;
        vTexturePixel.x = dot(vec3(aPoint1, 1.0), styleMatrix[styleId * 2]);
        vTexturePixel.y = dot(vec3(aPoint1, 1.0), styleMatrix[styleId * 2 + 1]);
        vTextureCoord = vTexturePixel / samplerSize[int(vTextureId)];
    } else if (type >= FILL_EXPAND && type < FILL_EXPAND + 7.5) {
        // expand vertices
        float flags = type - FILL_EXPAND;
        float flag3 = floor(flags / 4.0);
        float flag2 = floor((flags - flag3 * 4.0) / 2.0);
        float flag1 = flags - flag3 * 4.0 - flag2 * 2.0;

        vec2 prev = (translationMatrix * vec3(aPrev, 1.0)).xy;

        if (vertexNum < 0.5) {
            pos = prev;
        } else if (vertexNum < 1.5) {
            pos = pointA;
        } else {
            pos = pointB;
        }
        float len2 = length(aNext);
        vec2 bisect = (translationMatrix * vec3(aNext, 0.0)).xy;
        if (len2 > 0.01) {
            bisect = normalize(bisect) * len2;
        }

        vec2 n1 = normalize(vec2(pointA.y - prev.y, -(pointA.x - prev.x)));
        vec2 n2 = normalize(vec2(pointB.y - pointA.y, -(pointB.x - pointA.x)));
        vec2 n3 = normalize(vec2(prev.y - pointB.y, -(prev.x - pointB.x)));

        if (n1.x * n2.y - n1.y * n2.x < 0.0) {
            n1 = -n1;
            n2 = -n2;
            n3 = -n3;
        }
        pos += bisect * expand;

        vLine1 = vec4(16.0, 16.0, 16.0, -1.0);
        if (flag1 > 0.5) {
            vLine1.x = -dot(pos - prev, n1);
        }
        if (flag2 > 0.5) {
            vLine1.y = -dot(pos - pointA, n2);
        }
        if (flag3 > 0.5) {
            vLine1.z = -dot(pos - pointB, n3);
        }
        vLine1.xyz *= resolution;
        vType = 2.0;
    } else if (type >= BEVEL) {
        float dy = lineWidth + expand;
        float shift = lineWidth * lineAlignment;
        float inner = 0.0;
        if (vertexNum >= 1.5) {
            dy = -dy;
            inner = 1.0;
        }

        vec2 base, next, xBasis2, bisect;
        float flag = 0.0;
        float side2 = 1.0;
        if (vertexNum < 0.5 || vertexNum > 2.5 && vertexNum < 3.5) {
            next = (translationMatrix * vec3(aPrev, 1.0)).xy;
            base = pointA;
            flag = type - floor(type / 2.0) * 2.0;
            side2 = -1.0;
        } else {
            next = (translationMatrix * vec3(aNext, 1.0)).xy;
            base = pointB;
            if (type >= MITER && type < MITER + 3.5) {
                flag = step(MITER + 1.5, type);
                // check miter limit here?
            }
        }
        xBasis2 = next - base;
        float len2 = length(xBasis2);
        vec2 norm2 = vec2(xBasis2.y, -xBasis2.x) / len2;
        float D = norm.x * norm2.y - norm.y * norm2.x;
        if (D < 0.0) {
            inner = 1.0 - inner;
        }

        norm2 *= side2;

        float collinear = step(0.0, dot(norm, norm2));

        vType = 0.0;
        float dy2 = -1000.0;

        if (abs(D) < 0.01 && collinear < 0.5) {
            if (type >= ROUND && type < ROUND + 1.5) {
                type = JOINT_CAP_ROUND;
            }
            //TODO: BUTT here too
        }

        vLine1 = vec4(0.0, lineWidth, max(abs(norm.x), abs(norm.y)), min(abs(norm.x), abs(norm.y)));
        vLine2 = vec4(0.0, lineWidth, max(abs(norm2.x), abs(norm2.y)), min(abs(norm2.x), abs(norm2.y)));

        if (vertexNum < 3.5) {
            if (abs(D) < 0.01 && collinear < 0.5) {
                pos = (shift + dy) * norm;
            } else {
                if (flag < 0.5 && inner < 0.5) {
                    pos = (shift + dy) * norm;
                } else {
                    pos = doBisect(norm, len, norm2, len2, shift + dy, inner);
                }
            }
            vLine2.y = -1000.0;
            if (capType >= CAP_BUTT && capType < CAP_ROUND) {
                float extra = step(CAP_SQUARE, capType) * lineWidth;
                vec2 back = -forward;
                if (vertexNum < 0.5 || vertexNum > 2.5) {
                    pos += back * (expand + extra);
                    dy2 = expand;
                } else {
                    dy2 = dot(pos + base - pointA, back) - extra;
                }
            }
            if (type >= JOINT_CAP_BUTT && type < JOINT_CAP_SQUARE + 0.5) {
                float extra = step(JOINT_CAP_SQUARE, type) * lineWidth;
                if (vertexNum < 0.5 || vertexNum > 2.5) {
                    vLine2.y = dot(pos + base - pointB, forward) - extra;
                } else {
                    pos += forward * (expand + extra);
                    vLine2.y = expand;
                    if (capType >= CAP_BUTT) {
                        dy2 -= expand + extra;
                    }
                }
            }
        } else if (type >= JOINT_CAP_ROUND && type < JOINT_CAP_ROUND + 1.5) {
            base += shift * norm;
            if (inner > 0.5) {
                dy = -dy;
                inner = 0.0;
            }
            vec2 d2 = abs(dy) * forward;
            if (vertexNum < 4.5) {
                dy = -dy;
                pos = dy * norm;
            } else if (vertexNum < 5.5) {
                pos = dy * norm;
            } else if (vertexNum < 6.5) {
                pos = dy * norm + d2;
                vArc.x = abs(dy);
            } else {
                dy = -dy;
                pos = dy * norm + d2;
                vArc.x = abs(dy);
            }
            vLine2 = vec4(0.0, lineWidth * 2.0 + 10.0, 1.0  , 0.0); // forget about line2 with type=3
            vArc.y = dy;
            vArc.z = 0.0;
            vArc.w = lineWidth;
            vType = 3.0;
        } else if (abs(D) < 0.01 && collinear < 0.5) {
            pos = dy * norm;
        } else {
            if (inner > 0.5) {
                dy = -dy;
                inner = 0.0;
            }
            float side = sign(dy);
            vec2 norm3 = normalize(norm + norm2);

            if (type >= MITER && type < MITER + 3.5) {
                vec2 farVertex = doBisect(norm, len, norm2, len2, shift + dy, 0.0);
                if (length(farVertex) > abs(shift + dy) * MITER_LIMIT) {
                    type = BEVEL;
                }
            }

            if (vertexNum < 4.5) {
                pos = doBisect(norm, len, norm2, len2, shift - dy, 1.0);
            } else if (vertexNum < 5.5) {
                pos = (shift + dy) * norm;
            } else if (vertexNum > 7.5) {
                pos = (shift + dy) * norm2;
            } else {
                if (type >= ROUND && type < ROUND + 1.5) {
                    pos = doBisect(norm, len, norm2, len2, shift + dy, 0.0);
                    float d2 = abs(shift + dy);
                    if (length(pos) > abs(shift + dy) * 1.5) {
                        if (vertexNum < 6.5) {
                            pos.x = (shift + dy) * norm.x - d2 * norm.y;
                            pos.y = (shift + dy) * norm.y + d2 * norm.x;
                        } else {
                            pos.x = (shift + dy) * norm2.x + d2 * norm2.y;
                            pos.y = (shift + dy) * norm2.y - d2 * norm2.x;
                        }
                    }
                } else if (type >= MITER && type < MITER + 3.5) {
                    pos = doBisect(norm, len, norm2, len2, shift + dy, 0.0); //farVertex
                } else if (type >= BEVEL && type < BEVEL + 1.5) {
                    float d2 = side / resolution;
                    if (vertexNum < 6.5) {
                        pos = (shift + dy) * norm + d2 * norm3;
                    } else {
                        pos = (shift + dy) * norm2 + d2 * norm3;
                    }
                }
            }

            if (type >= ROUND && type < ROUND + 1.5) {
                vArc.x = side * dot(pos, norm3);
                vArc.y = pos.x * norm3.y - pos.y * norm3.x;
                vArc.z = dot(norm, norm3) * (lineWidth + side * shift);
                vArc.w = lineWidth + side * shift;
                vType = 3.0;
            } else if (type >= MITER && type < MITER + 3.5) {
                vType = 1.0;
            } else if (type >= BEVEL && type < BEVEL + 1.5) {
                vType = 4.0;
                vArc.z = dot(norm, norm3) * (lineWidth + side * shift) - side * dot(pos, norm3);
            }

            dy = side * (dot(pos, norm) - shift);
            dy2 = side * (dot(pos, norm2) - shift);
        }

        pos += base;
        vLine1.xy = vec2(dy, vLine1.y) * resolution;
        vLine2.xy = vec2(dy2, vLine2.y) * resolution;
        vArc = vArc * resolution;
        vTravel = vec2(aTravel * avgScale + dot(pos - pointA, vec2(-norm.y, norm.x)), avgScale);
    }

    gl_Position = vec4((projectionMatrix * vec3(pos, 1.0)).xy, 0.0, 1.0);

    vColor = aColor * tint;
}`,j2=`#version 100
#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
#else
  precision mediump float;
#endif
`,op=`%PRECISION%
varying vec4 vColor;
varying vec4 vLine1;
varying vec4 vLine2;
varying vec4 vArc;
varying float vType;
varying float vTextureId;
varying vec2 vTextureCoord;
varying vec2 vTravel;
uniform sampler2D uSamplers[%MAX_TEXTURES%];

%PIXEL_LINE%

void main(void){
    %PIXEL_COVERAGE%

    vec4 texColor;
    float textureId = floor(vTextureId+0.5);
    %FOR_LOOP%

    gl_FragColor = vColor * texColor * alpha;
}
`,H2=[`
float pixelLine(float x, float A, float B) {
    return clamp(x + 0.5, 0.0, 1.0);
}
`,`
float pixelLine(float x, float A, float B) {
    float y = abs(x), s = sign(x);
    if (y * 2.0 < A - B) {
        return 0.5 + s * y / A;
    }
    y -= (A - B) * 0.5;
    y = max(1.0 - y / B, 0.0);
    return (1.0 + s * (1.0 - y * y)) * 0.5;
    //return clamp(x + 0.5, 0.0, 1.0);
}
`],X2=`float alpha = 1.0;
if (vType < 0.5) {
    float left = pixelLine(-vLine1.y - vLine1.x, vLine1.z, vLine1.w);
    float right = pixelLine(vLine1.y - vLine1.x, vLine1.z, vLine1.w);
    float near = vLine2.x - 0.5;
    float far = min(vLine2.x + 0.5, 0.0);
    float top = vLine2.y - 0.5;
    float bottom = min(vLine2.y + 0.5, 0.0);
    alpha = (right - left) * max(bottom - top, 0.0) * max(far - near, 0.0);
} else if (vType < 1.5) {
    float a1 = pixelLine(- vLine1.y - vLine1.x, vLine1.z, vLine1.w);
    float a2 = pixelLine(vLine1.y - vLine1.x, vLine1.z, vLine1.w);
    float b1 = pixelLine(- vLine2.y - vLine2.x, vLine2.z, vLine2.w);
    float b2 = pixelLine(vLine2.y - vLine2.x, vLine2.z, vLine2.w);
    alpha = a2 * b2 - a1 * b1;
} else if (vType < 2.5) {
    alpha *= max(min(vLine1.x + 0.5, 1.0), 0.0);
    alpha *= max(min(vLine1.y + 0.5, 1.0), 0.0);
    alpha *= max(min(vLine1.z + 0.5, 1.0), 0.0);
} else if (vType < 3.5) {
    float a1 = pixelLine(- vLine1.y - vLine1.x, vLine1.z, vLine1.w);
    float a2 = pixelLine(vLine1.y - vLine1.x, vLine1.z, vLine1.w);
    float b1 = pixelLine(- vLine2.y - vLine2.x, vLine2.z, vLine2.w);
    float b2 = pixelLine(vLine2.y - vLine2.x, vLine2.z, vLine2.w);
    float alpha_miter = a2 * b2 - a1 * b1;
    float alpha_plane = clamp(vArc.z - vArc.x + 0.5, 0.0, 1.0);
    float d = length(vArc.xy);
    float circle_hor = max(min(vArc.w, d + 0.5) - max(-vArc.w, d - 0.5), 0.0);
    float circle_vert = min(vArc.w * 2.0, 1.0);
    float alpha_circle = circle_hor * circle_vert;
    alpha = min(alpha_miter, max(alpha_circle, alpha_plane));
} else {
    float a1 = pixelLine(- vLine1.y - vLine1.x, vLine1.z, vLine1.w);
    float a2 = pixelLine(vLine1.y - vLine1.x, vLine1.z, vLine1.w);
    float b1 = pixelLine(- vLine2.y - vLine2.x, vLine2.z, vLine2.w);
    float b2 = pixelLine(vLine2.y - vLine2.x, vLine2.z, vLine2.w);
    alpha = a2 * b2 - a1 * b1;
    alpha *= clamp(vArc.z + 0.5, 0.0, 1.0);
}
`;class So extends Le{constructor(r,e=ip,n=op,i={}){e=So.generateVertexSrc(r,e),n=So.generateFragmentSrc(r,n);const{maxStyles:o,maxTextures:s}=r,l=new Int32Array(s);for(let h=0;h<s;h++)l[h]=h;super(an.from(e,n),Object.assign(i,{styleMatrix:new Float32Array(6*o),styleTextureId:new Float32Array(o),styleLine:new Float32Array(2*o),samplerSize:new Float32Array(2*s),uSamplers:l,tint:new Float32Array([1,1,1,1]),resolution:1,expand:1})),this.settings=r}static generateVertexSrc(r,e=ip){const{maxStyles:n,maxTextures:i}=r;return e=e.replace(/%MAX_TEXTURES%/gi,`${i}`).replace(/%MAX_STYLES%/gi,`${n}`),e}static generateFragmentSrc(r,e=op){const{maxTextures:n,pixelLine:i}=r;return e=e.replace(/%PRECISION%/gi,j2).replace(/%PIXEL_LINE%/gi,H2[i]).replace(/%PIXEL_COVERAGE%/gi,X2).replace(/%MAX_TEXTURES%/gi,`${n}`).replace(/%FOR_LOOP%/gi,this.generateSampleSrc(n)),e}static generateSampleSrc(r){let e="";e+=`
`,e+=`
`;for(let n=0;n<r;n++)n>0&&(e+=`
else `),n<r-1&&(e+=`if(textureId < ${n}.5)`),e+=`
{`,e+=`
	texColor = texture2D(uSamplers[${n}], vTextureCoord);`,e+=`
}`;return e+=`
`,e+=`
`,e}}const Dn={LINE_SCALE_MODE:ae.NORMAL,SHADER_MAX_STYLES:24,SHADER_MAX_TEXTURES:4,PIXEL_LINE:0},ua=tr,{BezierUtils:z2,QuadraticUtils:$2,ArcUtils:sp}=LT,W2=new Float32Array(3),ha={};class Ze extends Ht{static get nextRoundedRectBehavior(){return ua.nextRoundedRectBehavior}static set nextRoundedRectBehavior(r){ua.nextRoundedRectBehavior=r}static __initStatic(){this._TEMP_POINT=new ct}get geometry(){return this._geometry}constructor(r=null){super(),this._geometry=r||new $o,this._geometry.refCount++,this.shader=null,this.shaderSettings={maxStyles:Dn.SHADER_MAX_STYLES,maxTextures:Dn.SHADER_MAX_TEXTURES,pixelLine:Dn.PIXEL_LINE},this.state=er.for2d(),this._fillStyle=new zo,this._lineStyle=new du,this._matrix=null,this._holeMode=!1,this.currentPath=null,this.batches=[],this.batchTint=-1,this.batchDirty=-1,this.vertexData=null,this.pluginName="smooth",this._transformID=-1,this.tint=16777215,this.blendMode=Z.NORMAL}clone(){return this.finishPoly(),new Ze(this._geometry)}set blendMode(r){this.state.blendMode=r}get blendMode(){return this.state.blendMode}get tint(){return this._tint}set tint(r){this._tint=r}get fill(){return this._fillStyle}get line(){return this._lineStyle}lineStyle(r=null,e=0,n=1,i=.5,o=Dn.LINE_SCALE_MODE){if(typeof r=="number")typeof o=="boolean"&&(o=o?ae.NONE:ae.NORMAL),r={width:r,color:e,alpha:n,alignment:i,scaleMode:o};else{const s=r.native;s!==void 0&&(r.scaleMode=s?ae.NONE:ae.NORMAL)}return this.lineTextureStyle(r)}lineTextureStyle(r){r=Object.assign({width:0,texture:tt.WHITE,color:r&&r.texture?16777215:0,alpha:1,matrix:null,alignment:.5,native:!1,cap:re.BUTT,join:Wt.MITER,miterLimit:10,shader:null,scaleMode:Dn.LINE_SCALE_MODE},r),this.currentPath&&this.startPoly();const e=r.width>0&&r.alpha>0;return e?(r.matrix&&(r.matrix=r.matrix.clone(),r.matrix.invert()),Object.assign(this._lineStyle,{visible:e},r)):this._lineStyle.reset(),this}startPoly(){if(this.currentPath){const r=this.currentPath.points,e=this.currentPath.points.length;e>2&&(this.drawShape(this.currentPath),this.currentPath=new yr,this.currentPath.closeStroke=!1,this.currentPath.points.push(r[e-2],r[e-1]))}else this.currentPath=new yr,this.currentPath.closeStroke=!1}finishPoly(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)}moveTo(r,e){return this.startPoly(),this.currentPath.points[0]=r,this.currentPath.points[1]=e,this}lineTo(r,e){this.currentPath||this.moveTo(0,0);const n=this.currentPath.points,i=n[n.length-2],o=n[n.length-1];return(i!==r||o!==e)&&n.push(r,e),this}_initCurve(r=0,e=0){this.currentPath?this.currentPath.points.length===0&&(this.currentPath.points=[r,e]):this.moveTo(r,e)}quadraticCurveTo(r,e,n,i){this._initCurve();const o=this.currentPath.points;return o.length===0&&this.moveTo(0,0),$2.curveTo(r,e,n,i,o),this}bezierCurveTo(r,e,n,i,o,s){return this._initCurve(),z2.curveTo(r,e,n,i,o,s,this.currentPath.points),this}arcTo(r,e,n,i,o){this._initCurve(r,e);const s=this.currentPath.points,l=sp.curveTo(r,e,n,i,o,s);if(l){const{cx:h,cy:f,radius:d,startAngle:v,endAngle:m,anticlockwise:_}=l;this.arc(h,f,d,v,m,_)}return this}arc(r,e,n,i,o,s=!1){if(i===o)return this;if(!s&&o<=i?o+=rn:s&&i<=o&&(i+=rn),o-i===0)return this;const h=r+Math.cos(i)*n,f=e+Math.sin(i)*n,d=this._geometry.closePointEps;let v=this.currentPath?this.currentPath.points:null;if(v){const m=Math.abs(v[v.length-2]-h),_=Math.abs(v[v.length-1]-f);m<d&&_<d||v.push(h,f)}else this.moveTo(h,f),v=this.currentPath.points;return sp.arc(h,f,r,e,n,i,o,s,v),this}beginFill(r=0,e=1,n=!1){return this.beginTextureFill({texture:tt.WHITE,color:r,alpha:e,smooth:n})}beginTextureFill(r){r=Object.assign({texture:tt.WHITE,color:16777215,alpha:1,matrix:null,smooth:!1},r),this.currentPath&&this.startPoly();const e=r.alpha>0;return e?(r.matrix&&(r.matrix=r.matrix.clone(),r.matrix.invert()),Object.assign(this._fillStyle,{visible:e},r)):this._fillStyle.reset(),this}endFill(){return this.finishPoly(),this._fillStyle.reset(),this}drawRect(r,e,n,i){return this.drawShape(new mt(r,e,n,i))}drawRoundedRect(r,e,n,i,o){return this.drawShape(new wp(r,e,n,i,o))}drawCircle(r,e,n){return this.drawShape(new bp(r,e,n))}drawEllipse(r,e,n,i){return this.drawShape(new xp(r,e,n,i))}drawPolygon(...r){let e,n=!0;const i=r[0];i.points?(n=i.closeStroke,e=i.points):Array.isArray(r[0])?e=r[0]:e=r;const o=new yr(e);return o.closeStroke=n,this.drawShape(o),this}drawShape(r){return this._holeMode?this._geometry.drawHole(r,this._matrix):this._geometry.drawShape(r,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this}clear(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this}isFastRect(){const r=this._geometry.graphicsData;return r.length===1&&r[0].shape.type===gt.RECT&&!r[0].matrix&&!r[0].holes.length&&!(r[0].lineStyle.visible&&r[0].lineStyle.width)}_renderCanvas(r){ua.prototype._renderCanvas.call(this,r)}_render(r){this.finishPoly();const e=this._geometry,n=r.context.supports.uint32Indices;e.checkInstancing(r.geometry.hasInstance,n),e.updateBatches(this.shaderSettings),e.batchable?(this.batchDirty!==e.batchDirty&&this._populateBatches(),this._renderBatched(r)):(r.batch.flush(),this._renderDirect(r))}_populateBatches(){const r=this._geometry,e=this.blendMode,n=r.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=r.batchDirty,this.batches.length=n,this.vertexData=new Float32Array(r.points);for(let i=0;i<n;i++){const o=r.batches[i],s=o.style.color,h={vertexData:new Float32Array(this.vertexData.buffer,o.attribStart*4*2,o.attribSize*2),blendMode:e,_batchRGB:Gt(s),_tintRGB:s,_texture:o.style.texture,alpha:o.style.alpha,worldAlpha:1};this.batches[i]=h}}_renderBatched(r){if(!!this.batches.length){r.batch.setObjectRenderer(r.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(let e=0,n=this.batches.length;e<n;e++){const i=this.batches[e];i.worldAlpha=this.worldAlpha*i.alpha,r.plugins[this.pluginName].render(i)}}}_renderDirect(r){const e=this._resolveDirectShader(r);let n=e;const i=this._geometry,o=this.tint,s=this.worldAlpha,l=n.uniforms,h=i.drawCalls;l.translationMatrix=this.transform.worldTransform,l.tint[0]=(o>>16&255)/255*s,l.tint[1]=(o>>8&255)/255*s,l.tint[2]=(o&255)/255*s,l.tint[3]=s,l.resolution=r.renderTexture.current?r.renderTexture.current.resolution:r.resolution;const f=r.projection.transform;if(f){const d=Math.sqrt(f.a*f.a+f.b*f.b);l.resolution*=d}l.expand=(r.options.antialias?2:1)/l.resolution,r.shader.bind(n),r.geometry.bind(i,n),r.state.set(this.state),n=null;for(let d=0,v=h.length;d<v;d++){const m=i.drawCalls[d],_=n!==m.shader;_&&(n=m.shader,n&&(n.uniforms.translationMatrix=this.transform.worldTransform,n.uniforms.tint&&(n.uniforms.tint[0]=l.tint[0],n.uniforms.tint[1]=l.tint[1],n.uniforms.tint[2]=l.tint[2],n.uniforms.tint[3]=l.tint[3])));const{texArray:g,styleArray:b,size:y,start:w}=m,C=g.count,T=n||e,I=T.uniforms.styleTextureId,P=T.uniforms.styleMatrix,E=T.uniforms.styleLine;for(let L=0;L<b.count;L++){I[L]=b.textureIds[L],E[L*2]=b.lines[L*2],E[L*2+1]=b.lines[L*2+1];const A=b.matrices[L];P[L*6]=A.a,P[L*6+1]=A.c,P[L*6+2]=A.tx,P[L*6+3]=A.b,P[L*6+4]=A.d,P[L*6+5]=A.ty}const S=T.uniforms.samplerSize;for(let L=0;L<C;L++)S[L*2]=g.elements[L].width,S[L*2+1]=g.elements[L].height;r.shader.bind(T),_&&r.geometry.bind(i);for(let L=0;L<C;L++)r.texture.bind(g.elements[L],L);r.geometry.draw(te.TRIANGLES,y,w)}}_resolveDirectShader(r){let e=this.shader;const n=this.pluginName;return e||(ha[n]||(ha[n]=new So(this.shaderSettings)),e=ha[n]),e}_calculateBounds(){this.finishPoly();const r=this._geometry;if(!r.graphicsData.length)return;const{minX:e,minY:n,maxX:i,maxY:o}=r.bounds;this._bounds.addFrame(this.transform,e,n,i,o)}containsPoint(r){return this.worldTransform.applyInverse(r,Ze._TEMP_POINT),this._geometry.containsPoint(Ze._TEMP_POINT)}calculateTints(){if(this.batchTint!==this.tint){this.batchTint=this.tint;const r=Gt(this.tint,W2);for(let e=0;e<this.batches.length;e++){const n=this.batches[e],i=n._batchRGB,o=r[0]*i[0]*255,s=r[1]*i[1]*255,l=r[2]*i[2]*255,h=(o<<16)+(s<<8)+(l|0);n._tintRGB=(h>>16)+(h&65280)+((h&255)<<16)}}}calculateVertices(){const r=this.transform._worldID;if(this._transformID===r)return;this._transformID=r;const e=this.transform.worldTransform,n=e.a,i=e.b,o=e.c,s=e.d,l=e.tx,h=e.ty,f=this._geometry.points,d=this.vertexData;let v=0;for(let m=0;m<f.length;m+=2){const _=f[m],g=f[m+1];d[v++]=n*_+o*g+l,d[v++]=s*g+i*_+h}}closePath(){const r=this.currentPath;return r&&(r.closeStroke=!0),this}setMatrix(r){return this._matrix=r,this}beginHole(){return this.finishPoly(),this._holeMode=!0,this}endHole(){return this.finishPoly(),this._holeMode=!1,this}destroy(r){this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,super.destroy(r)}}Ze.__initStatic();/*!
 * @pixi/filter-adjustment - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-adjustment is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var xl=function(t,r){return xl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},xl(t,r)};function q2(t,r){xl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var Y2=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,K2=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float gamma;
uniform float contrast;
uniform float saturation;
uniform float brightness;
uniform float red;
uniform float green;
uniform float blue;
uniform float alpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / gamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);
        rgb.r *= red;
        rgb.g *= green;
        rgb.b *= blue;
        c.rgb = rgb * brightness;

        c.rgb *= c.a;
    }

    gl_FragColor = c * alpha;
}
`;(function(t){q2(r,t);function r(e){var n=t.call(this,Y2,K2)||this;return n.gamma=1,n.saturation=1,n.contrast=1,n.brightness=1,n.red=1,n.green=1,n.blue=1,n.alpha=1,Object.assign(n,e),n}return r.prototype.apply=function(e,n,i,o){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,e.applyFilter(this,n,i,o)},r})(nt);/*!
 * @pixi/filter-kawase-blur - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-kawase-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var wl=function(t,r){return wl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},wl(t,r)};function Z2(t,r){wl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var J2=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Q2=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}`,tE=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;
uniform vec4 filterClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample top right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}
`,Uo=function(t){Z2(r,t);function r(e,n,i){e===void 0&&(e=4),n===void 0&&(n=3),i===void 0&&(i=!1);var o=t.call(this,J2,i?tE:Q2)||this;return o._kernels=[],o._blur=4,o._quality=3,o.uniforms.uOffset=new Float32Array(2),o._pixelSize=new ct,o.pixelSize=1,o._clamp=i,Array.isArray(e)?o.kernels=e:(o._blur=e,o.quality=n),o}return r.prototype.apply=function(e,n,i,o){var s=this._pixelSize.x/n._frame.width,l=this._pixelSize.y/n._frame.height,h;if(this._quality===1||this._blur===0)h=this._kernels[0]+.5,this.uniforms.uOffset[0]=h*s,this.uniforms.uOffset[1]=h*l,e.applyFilter(this,n,i,o);else{for(var f=e.getFilterTexture(),d=n,v=f,m=void 0,_=this._quality-1,g=0;g<_;g++)h=this._kernels[g]+.5,this.uniforms.uOffset[0]=h*s,this.uniforms.uOffset[1]=h*l,e.applyFilter(this,d,v,1),m=d,d=v,v=m;h=this._kernels[_]+.5,this.uniforms.uOffset[0]=h*s,this.uniforms.uOffset[1]=h*l,e.applyFilter(this,d,i,o),e.returnFilterTexture(f)}},r.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce(function(e,n){return e+n+.5},0))},r.prototype._generateKernels=function(){var e=this._blur,n=this._quality,i=[e];if(e>0)for(var o=e,s=e/n,l=1;l<n;l++)o-=s,i.push(o);this._kernels=i,this._updatePadding()},Object.defineProperty(r.prototype,"kernels",{get:function(){return this._kernels},set:function(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,e)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(e){typeof e=="number"?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof ct?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"quality",{get:function(){return this._quality},set:function(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blur",{get:function(){return this._blur},set:function(e){this._blur=e,this._generateKernels()},enumerable:!1,configurable:!0}),r}(nt);/*!
 * @pixi/filter-advanced-bloom - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-advanced-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Tl=function(t,r){return Tl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Tl(t,r)};function Pv(t,r){Tl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var Iv=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,eE=`
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform float threshold;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > threshold) {
        gl_FragColor = color;
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,rE=function(t){Pv(r,t);function r(e){e===void 0&&(e=.5);var n=t.call(this,Iv,eE)||this;return n.threshold=e,n}return Object.defineProperty(r.prototype,"threshold",{get:function(){return this.uniforms.threshold},set:function(e){this.uniforms.threshold=e},enumerable:!1,configurable:!0}),r}(nt),nE=`uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform sampler2D bloomTexture;
uniform float bloomScale;
uniform float brightness;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    color.rgb *= brightness;
    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= bloomScale;
    gl_FragColor = color + bloomColor;
}
`,iE=function(t){Pv(r,t);function r(e){var n=t.call(this,Iv,nE)||this;n.bloomScale=1,n.brightness=1,n._resolution=X.FILTER_RESOLUTION,typeof e=="number"&&(e={threshold:e});var i=Object.assign(r.defaults,e);n.bloomScale=i.bloomScale,n.brightness=i.brightness;var o=i.kernels,s=i.blur,l=i.quality,h=i.pixelSize,f=i.resolution;return n._extractFilter=new rE(i.threshold),n._extractFilter.resolution=f,n._blurFilter=o?new Uo(o):new Uo(s,l),n.pixelSize=h,n.resolution=f,n}return r.prototype.apply=function(e,n,i,o,s){var l=e.getFilterTexture();this._extractFilter.apply(e,n,l,1,s);var h=e.getFilterTexture();this._blurFilter.apply(e,l,h,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=h,e.applyFilter(this,n,i,o),e.returnFilterTexture(h),e.returnFilterTexture(l)},Object.defineProperty(r.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._resolution=e,this._extractFilter&&(this._extractFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"threshold",{get:function(){return this._extractFilter.threshold},set:function(e){this._extractFilter.threshold=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(e){this._blurFilter.kernels=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(e){this._blurFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(e){this._blurFilter.quality=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(e){this._blurFilter.pixelSize=e},enumerable:!1,configurable:!0}),r.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:X.FILTER_RESOLUTION},r}(nt);/*!
 * @pixi/filter-ascii - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-ascii is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Cl=function(t,r){return Cl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Cl(t,r)};function oE(t,r){Cl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var sE=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,aE=`varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform float pixelSize;
uniform sampler2D uSampler;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor( coord / size ) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod( coord , size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, -4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the rounded color..
    vec2 pixCoord = pixelate(coord, vec2(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    vec4 color = texture2D(uSampler, pixCoord);

    // determine the character to use
    float gray = (color.r + color.g + color.b) / 3.0;

    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(pixelSize));

    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);

}
`;(function(t){oE(r,t);function r(e){e===void 0&&(e=8);var n=t.call(this,sE,aE)||this;return n.size=e,n}return Object.defineProperty(r.prototype,"size",{get:function(){return this.uniforms.pixelSize},set:function(e){this.uniforms.pixelSize=e},enumerable:!1,configurable:!0}),r})(nt);/*!
 * @pixi/filter-bevel - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-bevel is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var El=function(t,r){return El=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},El(t,r)};function lE(t,r){El(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var uE=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,hE=`precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float transformX;
uniform float transformY;
uniform vec3 lightColor;
uniform float lightAlpha;
uniform vec3 shadowColor;
uniform float shadowAlpha;

void main(void) {
    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);
    vec4 color = texture2D(uSampler, vTextureCoord);
    float light = texture2D(uSampler, vTextureCoord - transform).a;
    float shadow = texture2D(uSampler, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));
    gl_FragColor = vec4(color.rgb * color.a, color.a);
}
`;(function(t){lE(r,t);function r(e){var n=t.call(this,uE,hE)||this;return n._thickness=2,n._angle=0,n.uniforms.lightColor=new Float32Array(3),n.uniforms.shadowColor=new Float32Array(3),Object.assign(n,{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},e),n.padding=1,n}return r.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},Object.defineProperty(r.prototype,"rotation",{get:function(){return this._angle/Cr},set:function(e){this._angle=e*Cr,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"thickness",{get:function(){return this._thickness},set:function(e){this._thickness=e,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lightColor",{get:function(){return fe(this.uniforms.lightColor)},set:function(e){Gt(e,this.uniforms.lightColor)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lightAlpha",{get:function(){return this.uniforms.lightAlpha},set:function(e){this.uniforms.lightAlpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"shadowColor",{get:function(){return fe(this.uniforms.shadowColor)},set:function(e){Gt(e,this.uniforms.shadowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"shadowAlpha",{get:function(){return this.uniforms.shadowAlpha},set:function(e){this.uniforms.shadowAlpha=e},enumerable:!1,configurable:!0}),r})(nt);/*!
 * @pixi/filter-bloom - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Pl=function(t,r){return Pl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Pl(t,r)};function cE(t,r){Pl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}(function(t){cE(r,t);function r(e,n,i,o){e===void 0&&(e=2),n===void 0&&(n=4),i===void 0&&(i=X.FILTER_RESOLUTION),o===void 0&&(o=5);var s=t.call(this)||this,l,h;return typeof e=="number"?(l=e,h=e):e instanceof ct?(l=e.x,h=e.y):Array.isArray(e)&&(l=e[0],h=e[1]),s.blurXFilter=new fi(!0,l,n,i,o),s.blurYFilter=new fi(!1,h,n,i,o),s.blurYFilter.blendMode=Z.SCREEN,s.defaultFilter=new rv,s}return r.prototype.apply=function(e,n,i,o){var s=e.getFilterTexture();this.defaultFilter.apply(e,n,i,o),this.blurXFilter.apply(e,n,s,1),this.blurYFilter.apply(e,s,i,0),e.returnFilterTexture(s)},Object.defineProperty(r.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=this.blurYFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(e){this.blurYFilter.blur=e},enumerable:!1,configurable:!0}),r})(nt);/*!
 * @pixi/filter-bulge-pinch - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-bulge-pinch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Il=function(t,r){return Il=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Il(t,r)};function fE(t,r){Il(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var dE=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,pE=`uniform float radius;
uniform float strength;
uniform vec2 center;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

void main()
{
    vec2 coord = vTextureCoord * filterArea.xy;
    coord -= center * dimensions.xy;
    float distance = length(coord);
    if (distance < radius) {
        float percent = distance / radius;
        if (strength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
        }
    }
    coord += center * dimensions.xy;
    coord /= filterArea.xy;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    gl_FragColor = color;
}
`;(function(t){fE(r,t);function r(e){var n=t.call(this,dE,pE)||this;return n.uniforms.dimensions=new Float32Array(2),Object.assign(n,r.defaults,e),n}return r.prototype.apply=function(e,n,i,o){var s=n.filterFrame,l=s.width,h=s.height;this.uniforms.dimensions[0]=l,this.uniforms.dimensions[1]=h,e.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(e){this.uniforms.radius=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(e){this.uniforms.strength=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"center",{get:function(){return this.uniforms.center},set:function(e){this.uniforms.center=e},enumerable:!1,configurable:!0}),r.defaults={center:[.5,.5],radius:100,strength:1},r})(nt);/*!
 * @pixi/filter-color-map - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-color-map is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Rl=function(t,r){return Rl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Rl(t,r)};function vE(t,r){Rl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var mE=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,_E=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D colorMap;
uniform float _mix;
uniform float _size;
uniform float _sliceSize;
uniform float _slicePixelSize;
uniform float _sliceInnerSize;
void main() {
    vec4 color = texture2D(uSampler, vTextureCoord.xy);

    vec4 adjusted;
    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = _size - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;
        float s0 = xOffset + (zSlice0 * _sliceSize);
        float s1 = xOffset + (zSlice1 * _sliceSize);
        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);
        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));
        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }
    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);

}`;(function(t){vE(r,t);function r(e,n,i){n===void 0&&(n=!1),i===void 0&&(i=1);var o=t.call(this,mE,_E)||this;return o.mix=1,o._size=0,o._sliceSize=0,o._slicePixelSize=0,o._sliceInnerSize=0,o._nearest=!1,o._scaleMode=null,o._colorMap=null,o._scaleMode=null,o.nearest=n,o.mix=i,o.colorMap=e,o}return r.prototype.apply=function(e,n,i,o){this.uniforms._mix=this.mix,e.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"colorSize",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"colorMap",{get:function(){return this._colorMap},set:function(e){var n;!e||(e instanceof tt||(e=tt.from(e)),!((n=e)===null||n===void 0)&&n.baseTexture&&(e.baseTexture.scaleMode=this._scaleMode,e.baseTexture.mipmap=he.OFF,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=e),this._colorMap=e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"nearest",{get:function(){return this._nearest},set:function(e){this._nearest=e,this._scaleMode=e?ee.NEAREST:ee.LINEAR;var n=this._colorMap;n&&n.baseTexture&&(n.baseTexture._glTextures={},n.baseTexture.scaleMode=this._scaleMode,n.baseTexture.mipmap=he.OFF,n._updateID++,n.baseTexture.emit("update",n.baseTexture))},enumerable:!1,configurable:!0}),r.prototype.updateColorMap=function(){var e=this._colorMap;e&&e.baseTexture&&(e._updateID++,e.baseTexture.emit("update",e.baseTexture),this.colorMap=e)},r.prototype.destroy=function(e){e===void 0&&(e=!1),this._colorMap&&this._colorMap.destroy(e),t.prototype.destroy.call(this)},r})(nt);/*!
 * @pixi/filter-color-overlay - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-color-overlay is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Al=function(t,r){return Al=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Al(t,r)};function gE(t,r){Al(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var yE=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,bE=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 color;
uniform float alpha;

void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);
}
`;(function(t){gE(r,t);function r(e,n){e===void 0&&(e=0),n===void 0&&(n=1);var i=t.call(this,yE,bE)||this;return i._color=0,i._alpha=1,i.uniforms.color=new Float32Array(3),i.color=e,i.alpha=n,i}return Object.defineProperty(r.prototype,"color",{get:function(){return this._color},set:function(e){var n=this.uniforms.color;typeof e=="number"?(Gt(e,n),this._color=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._color=fe(n))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this._alpha},set:function(e){this.uniforms.alpha=e,this._alpha=e},enumerable:!1,configurable:!0}),r})(nt);/*!
 * @pixi/filter-color-replace - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-color-replace is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Nl=function(t,r){return Nl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Nl(t,r)};function xE(t,r){Nl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var wE=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,TE=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 originalColor;
uniform vec3 newColor;
uniform float epsilon;
void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, epsilon);
    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);
}
`;(function(t){xE(r,t);function r(e,n,i){e===void 0&&(e=16711680),n===void 0&&(n=0),i===void 0&&(i=.4);var o=t.call(this,wE,TE)||this;return o._originalColor=16711680,o._newColor=0,o.uniforms.originalColor=new Float32Array(3),o.uniforms.newColor=new Float32Array(3),o.originalColor=e,o.newColor=n,o.epsilon=i,o}return Object.defineProperty(r.prototype,"originalColor",{get:function(){return this._originalColor},set:function(e){var n=this.uniforms.originalColor;typeof e=="number"?(Gt(e,n),this._originalColor=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._originalColor=fe(n))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"newColor",{get:function(){return this._newColor},set:function(e){var n=this.uniforms.newColor;typeof e=="number"?(Gt(e,n),this._newColor=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._newColor=fe(n))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(e){this.uniforms.epsilon=e},enumerable:!1,configurable:!0}),r})(nt);/*!
 * @pixi/filter-convolution - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-convolution is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ol=function(t,r){return Ol=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Ol(t,r)};function CE(t,r){Ol(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var EE=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,PE=`precision mediump float;

varying mediump vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec2 texelSize;
uniform float matrix[9];

void main(void)
{
   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left
   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center
   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right

   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left
   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center
   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right

   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left
   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center
   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right

   gl_FragColor =
       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +
       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +
       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];

   gl_FragColor.a = c22.a;
}
`;(function(t){CE(r,t);function r(e,n,i){n===void 0&&(n=200),i===void 0&&(i=200);var o=t.call(this,EE,PE)||this;return o.uniforms.texelSize=new Float32Array(2),o.uniforms.matrix=new Float32Array(9),e!==void 0&&(o.matrix=e),o.width=n,o.height=i,o}return Object.defineProperty(r.prototype,"matrix",{get:function(){return this.uniforms.matrix},set:function(e){var n=this;e.forEach(function(i,o){n.uniforms.matrix[o]=i})},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return 1/this.uniforms.texelSize[0]},set:function(e){this.uniforms.texelSize[0]=1/e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return 1/this.uniforms.texelSize[1]},set:function(e){this.uniforms.texelSize[1]=1/e},enumerable:!1,configurable:!0}),r})(nt);/*!
 * @pixi/filter-cross-hatch - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-cross-hatch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Sl=function(t,r){return Sl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Sl(t,r)};function IE(t,r){Sl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var RE=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,AE=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void)
{
    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);

    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

    if (lum < 1.00)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.75)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.50)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.3)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
}
`;(function(t){IE(r,t);function r(){return t.call(this,RE,AE)||this}return r})(nt);/*!
 * @pixi/filter-crt - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-crt is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ul=function(t,r){return Ul=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Ul(t,r)};function NE(t,r){Ul(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var OE=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,SE=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec2 dimensions;

const float SQRT_2 = 1.414213;

const float light = 1.0;

uniform float curvature;
uniform float lineWidth;
uniform float lineContrast;
uniform bool verticalLine;
uniform float noise;
uniform float noiseSize;

uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;

uniform float seed;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));
    
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 rgb = gl_FragColor.rgb;

    if (noise > 0.0 && noiseSize > 0.0)
    {
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        rgb += _noise * noise;
    }

    if (lineWidth > 0.0)
    {
        float _c = curvature > 0. ? curvature : 1.;
        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
        vec2 uv = dir * k;

        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;
        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;
        rgb *= j;
        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);
        rgb *= 0.99 + ceil(segment) * 0.015;
    }

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    gl_FragColor.rgb = rgb;
}
`;(function(t){NE(r,t);function r(e){var n=t.call(this,OE,SE)||this;return n.time=0,n.seed=0,n.uniforms.dimensions=new Float32Array(2),Object.assign(n,r.defaults,e),n}return r.prototype.apply=function(e,n,i,o){var s=n.filterFrame,l=s.width,h=s.height;this.uniforms.dimensions[0]=l,this.uniforms.dimensions[1]=h,this.uniforms.seed=this.seed,this.uniforms.time=this.time,e.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"curvature",{get:function(){return this.uniforms.curvature},set:function(e){this.uniforms.curvature=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lineWidth",{get:function(){return this.uniforms.lineWidth},set:function(e){this.uniforms.lineWidth=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lineContrast",{get:function(){return this.uniforms.lineContrast},set:function(e){this.uniforms.lineContrast=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"verticalLine",{get:function(){return this.uniforms.verticalLine},set:function(e){this.uniforms.verticalLine=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(e){this.uniforms.noise=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(e){this.uniforms.noiseSize=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(e){this.uniforms.vignetting=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(e){this.uniforms.vignettingAlpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(e){this.uniforms.vignettingBlur=e},enumerable:!1,configurable:!0}),r.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},r})(nt);/*!
 * @pixi/filter-dot - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-dot is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ll=function(t,r){return Ll=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Ll(t,r)};function UE(t,r){Ll(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var LE=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,FE=`precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec4 filterArea;
uniform sampler2D uSampler;

uniform float angle;
uniform float scale;

float pattern()
{
   float s = sin(angle), c = cos(angle);
   vec2 tex = vTextureCoord * filterArea.xy;
   vec2 point = vec2(
       c * tex.x - s * tex.y,
       s * tex.x + c * tex.y
   ) * scale;
   return (sin(point.x) * sin(point.y)) * 4.0;
}

void main()
{
   vec4 color = texture2D(uSampler, vTextureCoord);
   float average = (color.r + color.g + color.b) / 3.0;
   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);
}
`;(function(t){UE(r,t);function r(e,n){e===void 0&&(e=1),n===void 0&&(n=5);var i=t.call(this,LE,FE)||this;return i.scale=e,i.angle=n,i}return Object.defineProperty(r.prototype,"scale",{get:function(){return this.uniforms.scale},set:function(e){this.uniforms.scale=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(e){this.uniforms.angle=e},enumerable:!1,configurable:!0}),r})(nt);/*!
 * @pixi/filter-drop-shadow - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-drop-shadow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Fl=function(t,r){return Fl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Fl(t,r)};function ME(t,r){Fl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var Lo=function(){return Lo=Object.assign||function(r){for(var e=arguments,n,i=1,o=arguments.length;i<o;i++){n=e[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Lo.apply(this,arguments)},kE=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,BE=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float alpha;
uniform vec3 color;

uniform vec2 shift;
uniform vec4 inputSize;

void main(void){
    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);

    // Premultiply alpha
    sample.rgb = color.rgb * sample.a;

    // alpha user alpha
    sample *= alpha;

    gl_FragColor = sample;
}`;(function(t){ME(r,t);function r(e){var n=t.call(this)||this;n.angle=45,n._distance=5,n._resolution=X.FILTER_RESOLUTION;var i=e?Lo(Lo({},r.defaults),e):r.defaults,o=i.kernels,s=i.blur,l=i.quality,h=i.pixelSize,f=i.resolution;n._tintFilter=new nt(kE,BE),n._tintFilter.uniforms.color=new Float32Array(4),n._tintFilter.uniforms.shift=new ct,n._tintFilter.resolution=f,n._blurFilter=o?new Uo(o):new Uo(s,l),n.pixelSize=h,n.resolution=f;var d=i.shadowOnly,v=i.rotation,m=i.distance,_=i.alpha,g=i.color;return n.shadowOnly=d,n.rotation=v,n.distance=m,n.alpha=_,n.color=g,n._updatePadding(),n}return r.prototype.apply=function(e,n,i,o){var s=e.getFilterTexture();this._tintFilter.apply(e,n,s,1),this._blurFilter.apply(e,s,i,o),this.shadowOnly!==!0&&e.applyFilter(this,n,i,0),e.returnFilterTexture(s)},r.prototype._updatePadding=function(){this.padding=this.distance+this.blur*2},r.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},Object.defineProperty(r.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._resolution=e,this._tintFilter&&(this._tintFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},set:function(e){this._distance=e,this._updatePadding(),this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rotation",{get:function(){return this.angle/Cr},set:function(e){this.angle=e*Cr,this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this._tintFilter.uniforms.alpha},set:function(e){this._tintFilter.uniforms.alpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"color",{get:function(){return fe(this._tintFilter.uniforms.color)},set:function(e){Gt(e,this._tintFilter.uniforms.color)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(e){this._blurFilter.kernels=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(e){this._blurFilter.blur=e,this._updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(e){this._blurFilter.quality=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(e){this._blurFilter.pixelSize=e},enumerable:!1,configurable:!0}),r.defaults={rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:X.FILTER_RESOLUTION},r})(nt);/*!
 * @pixi/filter-emboss - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-emboss is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ml=function(t,r){return Ml=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Ml(t,r)};function GE(t,r){Ml(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var DE=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,VE=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float strength;
uniform vec4 filterArea;


void main(void)
{
	vec2 onePixel = vec2(1.0 / filterArea);

	vec4 color;

	color.rgb = vec3(0.5);

	color -= texture2D(uSampler, vTextureCoord - onePixel) * strength;
	color += texture2D(uSampler, vTextureCoord + onePixel) * strength;

	color.rgb = vec3((color.r + color.g + color.b) / 3.0);

	float alpha = texture2D(uSampler, vTextureCoord).a;

	gl_FragColor = vec4(color.rgb * alpha, alpha);
}
`;(function(t){GE(r,t);function r(e){e===void 0&&(e=5);var n=t.call(this,DE,VE)||this;return n.strength=e,n}return Object.defineProperty(r.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(e){this.uniforms.strength=e},enumerable:!1,configurable:!0}),r})(nt);/*!
 * @pixi/filter-glitch - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-glitch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var kl=function(t,r){return kl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},kl(t,r)};function jE(t,r){kl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var HE=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,XE=`// precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;
uniform float aspect;

uniform sampler2D displacementMap;
uniform float offset;
uniform float sinDir;
uniform float cosDir;
uniform int fillMode;

uniform float seed;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * aspect;
    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (offset / filterArea.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);

    if (fillMode == CLAMP) {
        coord = clamp(coord, filterClamp.xy, filterClamp.zw);
    } else {
        if( coord.x > filterClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = filterClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < filterClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -filterClamp.z;
            }
        }

        if( coord.y > filterClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = filterClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < filterClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -filterClamp.w;
            }
        }
    }

    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;
    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;
    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;
    gl_FragColor.a = texture2D(uSampler, coord).a;
}
`;(function(t){jE(r,t);function r(e){var n=t.call(this,HE,XE)||this;return n.offset=100,n.fillMode=r.TRANSPARENT,n.average=!1,n.seed=0,n.minSize=8,n.sampleSize=512,n._slices=0,n._offsets=new Float32Array(1),n._sizes=new Float32Array(1),n._direction=-1,n.uniforms.dimensions=new Float32Array(2),n._canvas=document.createElement("canvas"),n._canvas.width=4,n._canvas.height=n.sampleSize,n.texture=tt.from(n._canvas,{scaleMode:ee.NEAREST}),Object.assign(n,r.defaults,e),n}return r.prototype.apply=function(e,n,i,o){var s=n.filterFrame,l=s.width,h=s.height;this.uniforms.dimensions[0]=l,this.uniforms.dimensions[1]=h,this.uniforms.aspect=h/l,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,e.applyFilter(this,n,i,o)},r.prototype._randomizeSizes=function(){var e=this._sizes,n=this._slices-1,i=this.sampleSize,o=Math.min(this.minSize/i,.9/this._slices);if(this.average){for(var s=this._slices,l=1,h=0;h<n;h++){var f=l/(s-h),d=Math.max(f*(1-Math.random()*.6),o);e[h]=d,l-=d}e[n]=l}else{for(var l=1,v=Math.sqrt(1/this._slices),h=0;h<n;h++){var d=Math.max(v*l*Math.random(),o);e[h]=d,l-=d}e[n]=l}this.shuffle()},r.prototype.shuffle=function(){for(var e=this._sizes,n=this._slices-1,i=n;i>0;i--){var o=Math.random()*i>>0,s=e[i];e[i]=e[o],e[o]=s}},r.prototype._randomizeOffsets=function(){for(var e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)},r.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},r.prototype.redraw=function(){var e=this.sampleSize,n=this.texture,i=this._canvas.getContext("2d");i.clearRect(0,0,8,e);for(var o,s=0,l=0;l<this._slices;l++){o=Math.floor(this._offsets[l]*256);var h=this._sizes[l]*e,f=o>0?o:0,d=o<0?-o:0;i.fillStyle="rgba("+f+", "+d+", 0, 1)",i.fillRect(0,s>>0,e,h+1>>0),s+=h}n.baseTexture.update(),this.uniforms.displacementMap=n},Object.defineProperty(r.prototype,"sizes",{get:function(){return this._sizes},set:function(e){for(var n=Math.min(this._slices,e.length),i=0;i<n;i++)this._sizes[i]=e[i]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"offsets",{get:function(){return this._offsets},set:function(e){for(var n=Math.min(this._slices,e.length),i=0;i<n;i++)this._offsets[i]=e[i]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"slices",{get:function(){return this._slices},set:function(e){this._slices!==e&&(this._slices=e,this.uniforms.slices=e,this._sizes=this.uniforms.slicesWidth=new Float32Array(e),this._offsets=this.uniforms.slicesOffset=new Float32Array(e),this.refresh())},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"direction",{get:function(){return this._direction},set:function(e){if(this._direction!==e){this._direction=e;var n=e*Cr;this.uniforms.sinDir=Math.sin(n),this.uniforms.cosDir=Math.cos(n)}},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"red",{get:function(){return this.uniforms.red},set:function(e){this.uniforms.red=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"green",{get:function(){return this.uniforms.green},set:function(e){this.uniforms.green=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(e){this.uniforms.blue=e},enumerable:!1,configurable:!0}),r.prototype.destroy=function(){var e;(e=this.texture)===null||e===void 0||e.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null},r.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},r.TRANSPARENT=0,r.ORIGINAL=1,r.LOOP=2,r.CLAMP=3,r.MIRROR=4,r})(nt);/*!
 * @pixi/filter-glow - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-glow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Bl=function(t,r){return Bl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Bl(t,r)};function zE(t,r){Bl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var $E=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,WE=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

uniform float outerStrength;
uniform float innerStrength;

uniform vec4 glowColor;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform bool knockout;

const float PI = 3.14159265358979323846264;

const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);
const float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);

const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;

void main(void) {
    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);

    float totalAlpha = 0.0;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {
       direction = vec2(cos(angle), sin(angle)) * px;

       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {
           displaced = clamp(vTextureCoord + direction * 
                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);

           curColor = texture2D(uSampler, displaced);

           totalAlpha += (DIST - curDistance) * curColor.a;
       }
    }
    
    curColor = texture2D(uSampler, vTextureCoord);

    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);

    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;
    float innerGlowStrength = min(1.0, innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);

    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);
    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);

    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;
    
    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      gl_FragColor = innerColor + outerGlowColor;
    }
}
`;(function(t){zE(r,t);function r(e){var n=this,i=Object.assign({},r.defaults,e),o=i.outerStrength,s=i.innerStrength,l=i.color,h=i.knockout,f=i.quality,d=Math.round(i.distance);return n=t.call(this,$E,WE.replace(/__ANGLE_STEP_SIZE__/gi,""+(1/f/d).toFixed(7)).replace(/__DIST__/gi,d.toFixed(0)+".0"))||this,n.uniforms.glowColor=new Float32Array([0,0,0,1]),Object.assign(n,{color:l,outerStrength:o,innerStrength:s,padding:d,knockout:h}),n}return Object.defineProperty(r.prototype,"color",{get:function(){return fe(this.uniforms.glowColor)},set:function(e){Gt(e,this.uniforms.glowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"outerStrength",{get:function(){return this.uniforms.outerStrength},set:function(e){this.uniforms.outerStrength=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"innerStrength",{get:function(){return this.uniforms.innerStrength},set:function(e){this.uniforms.innerStrength=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"knockout",{get:function(){return this.uniforms.knockout},set:function(e){this.uniforms.knockout=e},enumerable:!1,configurable:!0}),r.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1},r})(nt);/*!
 * @pixi/filter-godray - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-godray is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Gl=function(t,r){return Gl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Gl(t,r)};function qE(t,r){Gl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var YE=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,KE=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,ZE=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;
uniform float alpha;

\${perlin}

void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float d;

    if (parallel) {
        float _cos = light.x;
        float _sin = light.y;
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
    } else {
        float dx = coord.x - light.x / dimensions.x;
        float dy = (coord.y - light.y / dimensions.y) * aspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    vec3 dir = vec3(d, d, 0.0);

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`;(function(t){qE(r,t);function r(e){var n=t.call(this,YE,ZE.replace("${perlin}",KE))||this;n.parallel=!0,n.time=0,n._angle=0,n.uniforms.dimensions=new Float32Array(2);var i=Object.assign(r.defaults,e);return n._angleLight=new ct,n.angle=i.angle,n.gain=i.gain,n.lacunarity=i.lacunarity,n.alpha=i.alpha,n.parallel=i.parallel,n.center=i.center,n.time=i.time,n}return r.prototype.apply=function(e,n,i,o){var s=n.filterFrame,l=s.width,h=s.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=l,this.uniforms.dimensions[1]=h,this.uniforms.aspect=h/l,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,e.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"angle",{get:function(){return this._angle},set:function(e){this._angle=e;var n=e*Cr;this._angleLight.x=Math.cos(n),this._angleLight.y=Math.sin(n)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"gain",{get:function(){return this.uniforms.gain},set:function(e){this.uniforms.gain=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lacunarity",{get:function(){return this.uniforms.lacunarity},set:function(e){this.uniforms.lacunarity=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(e){this.uniforms.alpha=e},enumerable:!1,configurable:!0}),r.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1},r})(nt);/*!
 * @pixi/filter-motion-blur - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-motion-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Dl=function(t,r){return Dl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Dl(t,r)};function JE(t,r){Dl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var QE=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,tP=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    vec2 velocity = uVelocity / filterArea.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture2D(uSampler, vTextureCoord + bias);
    }
    gl_FragColor = color / float(uKernelSize);
}
`;(function(t){JE(r,t);function r(e,n,i){e===void 0&&(e=[0,0]),n===void 0&&(n=5),i===void 0&&(i=0);var o=t.call(this,QE,tP)||this;return o.kernelSize=5,o.uniforms.uVelocity=new Float32Array(2),o._velocity=new _r(o.velocityChanged,o),o.setVelocity(e),o.kernelSize=n,o.offset=i,o}return r.prototype.apply=function(e,n,i,o){var s=this.velocity,l=s.x,h=s.y;this.uniforms.uKernelSize=l!==0||h!==0?this.kernelSize:0,e.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"velocity",{get:function(){return this._velocity},set:function(e){this.setVelocity(e)},enumerable:!1,configurable:!0}),r.prototype.setVelocity=function(e){if(Array.isArray(e)){var n=e[0],i=e[1];this._velocity.set(n,i)}else this._velocity.copyFrom(e)},r.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y,this.padding=(Math.max(Math.abs(this._velocity.x),Math.abs(this._velocity.y))>>0)+1},Object.defineProperty(r.prototype,"offset",{get:function(){return this.uniforms.uOffset},set:function(e){this.uniforms.uOffset=e},enumerable:!1,configurable:!0}),r})(nt);/*!
 * @pixi/filter-multi-color-replace - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-multi-color-replace is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Vl=function(t,r){return Vl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Vl(t,r)};function eP(t,r){Vl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var rP=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,nP=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float epsilon;

const int MAX_COLORS = %maxColors%;

uniform vec3 originalColors[MAX_COLORS];
uniform vec3 targetColors[MAX_COLORS];

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);

    float alpha = gl_FragColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = gl_FragColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = originalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < epsilon)
      {
        vec3 targetColor = targetColors[i];
        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`;(function(t){eP(r,t);function r(e,n,i){n===void 0&&(n=.05),i===void 0&&(i=e.length);var o=t.call(this,rP,nP.replace(/%maxColors%/g,i.toFixed(0)))||this;return o._replacements=[],o._maxColors=0,o.epsilon=n,o._maxColors=i,o.uniforms.originalColors=new Float32Array(i*3),o.uniforms.targetColors=new Float32Array(i*3),o.replacements=e,o}return Object.defineProperty(r.prototype,"replacements",{get:function(){return this._replacements},set:function(e){var n=this.uniforms.originalColors,i=this.uniforms.targetColors,o=e.length;if(o>this._maxColors)throw new Error("Length of replacements ("+o+") exceeds the maximum colors length ("+this._maxColors+")");n[o*3]=-1;for(var s=0;s<o;s++){var l=e[s],h=l[0];typeof h=="number"?h=Gt(h):l[0]=fe(h),n[s*3]=h[0],n[s*3+1]=h[1],n[s*3+2]=h[2];var f=l[1];typeof f=="number"?f=Gt(f):l[1]=fe(f),i[s*3]=f[0],i[s*3+1]=f[1],i[s*3+2]=f[2]}this._replacements=e},enumerable:!1,configurable:!0}),r.prototype.refresh=function(){this.replacements=this._replacements},Object.defineProperty(r.prototype,"maxColors",{get:function(){return this._maxColors},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(e){this.uniforms.epsilon=e},enumerable:!1,configurable:!0}),r})(nt);/*!
 * @pixi/filter-old-film - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-old-film is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var jl=function(t,r){return jl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},jl(t,r)};function iP(t,r){jl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var oP=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,sP=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform float sepia;
uniform float noise;
uniform float noiseSize;
uniform float scratch;
uniform float scratchDensity;
uniform float scratchWidth;
uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;
uniform float seed;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 color = gl_FragColor.rgb;

    if (sepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + sepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= dimensions.y / dimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    if (scratchDensity > seed && scratch != 0.0)
    {
        float phase = seed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));
        if (d < seed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / dimensions.x * (0.75 + seed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        color += _noise * noise;
    }

    gl_FragColor.rgb = color;
}
`;(function(t){iP(r,t);function r(e,n){n===void 0&&(n=0);var i=t.call(this,oP,sP)||this;return i.seed=0,i.uniforms.dimensions=new Float32Array(2),typeof e=="number"?(i.seed=e,e=void 0):i.seed=n,Object.assign(i,r.defaults,e),i}return r.prototype.apply=function(e,n,i,o){var s,l;this.uniforms.dimensions[0]=(s=n.filterFrame)===null||s===void 0?void 0:s.width,this.uniforms.dimensions[1]=(l=n.filterFrame)===null||l===void 0?void 0:l.height,this.uniforms.seed=this.seed,e.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"sepia",{get:function(){return this.uniforms.sepia},set:function(e){this.uniforms.sepia=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(e){this.uniforms.noise=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(e){this.uniforms.noiseSize=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"scratch",{get:function(){return this.uniforms.scratch},set:function(e){this.uniforms.scratch=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"scratchDensity",{get:function(){return this.uniforms.scratchDensity},set:function(e){this.uniforms.scratchDensity=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"scratchWidth",{get:function(){return this.uniforms.scratchWidth},set:function(e){this.uniforms.scratchWidth=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(e){this.uniforms.vignetting=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(e){this.uniforms.vignettingAlpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(e){this.uniforms.vignettingBlur=e},enumerable:!1,configurable:!0}),r.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},r})(nt);/*!
 * @pixi/filter-outline - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-outline is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Hl=function(t,r){return Hl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Hl(t,r)};function aP(t,r){Hl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var lP=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,uP=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 thickness;
uniform vec4 outlineColor;
uniform vec4 filterClamp;

const float DOUBLE_PI = 3.14159265358979323846264 * 2.;

void main(void) {
    vec4 ownColor = texture2D(uSampler, vTextureCoord);
    vec4 curColor;
    float maxAlpha = 0.;
    vec2 displaced;
    for (float angle = 0.; angle <= DOUBLE_PI; angle += \${angleStep}) {
        displaced.x = vTextureCoord.x + thickness.x * cos(angle);
        displaced.y = vTextureCoord.y + thickness.y * sin(angle);
        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));
        maxAlpha = max(maxAlpha, curColor.a);
    }
    float resultAlpha = max(maxAlpha, ownColor.a);
    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);
}
`;(function(t){aP(r,t);function r(e,n,i){e===void 0&&(e=1),n===void 0&&(n=0),i===void 0&&(i=.1);var o=t.call(this,lP,uP.replace(/\$\{angleStep\}/,r.getAngleStep(i)))||this;return o._thickness=1,o.uniforms.thickness=new Float32Array([0,0]),o.uniforms.outlineColor=new Float32Array([0,0,0,1]),Object.assign(o,{thickness:e,color:n,quality:i}),o}return r.getAngleStep=function(e){var n=Math.max(e*r.MAX_SAMPLES,r.MIN_SAMPLES);return(Math.PI*2/n).toFixed(7)},r.prototype.apply=function(e,n,i,o){this.uniforms.thickness[0]=this._thickness/n._frame.width,this.uniforms.thickness[1]=this._thickness/n._frame.height,e.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"color",{get:function(){return fe(this.uniforms.outlineColor)},set:function(e){Gt(e,this.uniforms.outlineColor)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"thickness",{get:function(){return this._thickness},set:function(e){this._thickness=e,this.padding=e},enumerable:!1,configurable:!0}),r.MIN_SAMPLES=1,r.MAX_SAMPLES=100,r})(nt);/*!
 * @pixi/filter-pixelate - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-pixelate is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Xl=function(t,r){return Xl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Xl(t,r)};function hP(t,r){Xl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var cP=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,fP=`precision mediump float;

varying vec2 vTextureCoord;

uniform vec2 size;
uniform sampler2D uSampler;

uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
	return floor( coord / size ) * size;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);

    coord = pixelate(coord, size);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord);
}
`;(function(t){hP(r,t);function r(e){e===void 0&&(e=10);var n=t.call(this,cP,fP)||this;return n.size=e,n}return Object.defineProperty(r.prototype,"size",{get:function(){return this.uniforms.size},set:function(e){typeof e=="number"&&(e=[e,e]),this.uniforms.size=e},enumerable:!1,configurable:!0}),r})(nt);/*!
 * @pixi/filter-radial-blur - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-radial-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var zl=function(t,r){return zl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},zl(t,r)};function dP(t,r){zl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var pP=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,vP=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    float aspect = filterArea.y / filterArea.x;
    vec2 center = uCenter.xy / filterArea.xy;
    float gradient = uRadius / filterArea.x * 0.3;
    float radius = uRadius / filterArea.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            gl_FragColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture2D(uSampler, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    gl_FragColor = color / float(uKernelSize);
}
`;(function(t){dP(r,t);function r(e,n,i,o){e===void 0&&(e=0),n===void 0&&(n=[0,0]),i===void 0&&(i=5),o===void 0&&(o=-1);var s=t.call(this,pP,vP)||this;return s._angle=0,s.angle=e,s.center=n,s.kernelSize=i,s.radius=o,s}return r.prototype.apply=function(e,n,i,o){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0,e.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"angle",{get:function(){return this._angle},set:function(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(e){this.uniforms.uCenter=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},enumerable:!1,configurable:!0}),r})(nt);/*!
 * @pixi/filter-reflection - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-reflection is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var $l=function(t,r){return $l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},$l(t,r)};function mP(t,r){$l(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var _P=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,gP=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

uniform bool mirror;
uniform float boundary;
uniform vec2 amplitude;
uniform vec2 waveLength;
uniform vec2 alpha;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    if (coord.y < boundary) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    float k = (coord.y - boundary) / (1. - boundary + 0.0001);
    float areaY = boundary * dimensions.y / filterArea.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = mirror ? v : vTextureCoord.y;

    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;
    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;
    float _alpha = (alpha.y - alpha.x) * k + alpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;
    x = clamp(x, filterClamp.x, filterClamp.z);

    vec4 color = texture2D(uSampler, vec2(x, y));

    gl_FragColor = color * _alpha;
}
`;(function(t){mP(r,t);function r(e){var n=t.call(this,_P,gP)||this;return n.time=0,n.uniforms.amplitude=new Float32Array(2),n.uniforms.waveLength=new Float32Array(2),n.uniforms.alpha=new Float32Array(2),n.uniforms.dimensions=new Float32Array(2),Object.assign(n,r.defaults,e),n}return r.prototype.apply=function(e,n,i,o){var s,l;this.uniforms.dimensions[0]=(s=n.filterFrame)===null||s===void 0?void 0:s.width,this.uniforms.dimensions[1]=(l=n.filterFrame)===null||l===void 0?void 0:l.height,this.uniforms.time=this.time,e.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"mirror",{get:function(){return this.uniforms.mirror},set:function(e){this.uniforms.mirror=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"boundary",{get:function(){return this.uniforms.boundary},set:function(e){this.uniforms.boundary=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(e){this.uniforms.amplitude[0]=e[0],this.uniforms.amplitude[1]=e[1]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"waveLength",{get:function(){return this.uniforms.waveLength},set:function(e){this.uniforms.waveLength[0]=e[0],this.uniforms.waveLength[1]=e[1]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(e){this.uniforms.alpha[0]=e[0],this.uniforms.alpha[1]=e[1]},enumerable:!1,configurable:!0}),r.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},r})(nt);/*!
 * @pixi/filter-rgb-split - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-rgb-split is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Wl=function(t,r){return Wl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Wl(t,r)};function yP(t,r){Wl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var bP=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,xP=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

void main(void)
{
   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;
   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;
   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;
   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;
}
`;(function(t){yP(r,t);function r(e,n,i){e===void 0&&(e=[-10,0]),n===void 0&&(n=[0,10]),i===void 0&&(i=[0,0]);var o=t.call(this,bP,xP)||this;return o.red=e,o.green=n,o.blue=i,o}return Object.defineProperty(r.prototype,"red",{get:function(){return this.uniforms.red},set:function(e){this.uniforms.red=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"green",{get:function(){return this.uniforms.green},set:function(e){this.uniforms.green=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(e){this.uniforms.blue=e},enumerable:!1,configurable:!0}),r})(nt);/*!
 * @pixi/filter-shockwave - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-shockwave is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ql=function(t,r){return ql=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},ql(t,r)};function wP(t,r){ql(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var TP=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,CP=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec4 filterClamp;

uniform vec2 center;

uniform float amplitude;
uniform float wavelength;
// uniform float power;
uniform float brightness;
uniform float speed;
uniform float radius;

uniform float time;

const float PI = 3.14159;

void main()
{
    float halfWavelength = wavelength * 0.5 / filterArea.x;
    float maxRadius = radius / filterArea.x;
    float currentRadius = time * speed / filterArea.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);
    dir.y *= filterArea.y / filterArea.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );

    vec2 offset = diffUV * powDiff / filterArea.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);

    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;

    gl_FragColor = color;
}
`;(function(t){wP(r,t);function r(e,n,i){e===void 0&&(e=[0,0]),i===void 0&&(i=0);var o=t.call(this,TP,CP)||this;return o.center=e,Object.assign(o,r.defaults,n),o.time=i,o}return r.prototype.apply=function(e,n,i,o){this.uniforms.time=this.time,e.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"center",{get:function(){return this.uniforms.center},set:function(e){this.uniforms.center=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(e){this.uniforms.amplitude=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wavelength",{get:function(){return this.uniforms.wavelength},set:function(e){this.uniforms.wavelength=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"brightness",{get:function(){return this.uniforms.brightness},set:function(e){this.uniforms.brightness=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"speed",{get:function(){return this.uniforms.speed},set:function(e){this.uniforms.speed=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(e){this.uniforms.radius=e},enumerable:!1,configurable:!0}),r.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},r})(nt);/*!
 * @pixi/filter-simple-lightmap - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-simple-lightmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Yl=function(t,r){return Yl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Yl(t,r)};function EP(t,r){Yl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var PP=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,IP=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uLightmap;
uniform vec4 filterArea;
uniform vec2 dimensions;
uniform vec4 ambientColor;
void main() {
    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;
    vec4 light = texture2D(uLightmap, lightCoord);
    vec3 ambient = ambientColor.rgb * ambientColor.a;
    vec3 intensity = ambient + light.rgb;
    vec3 finalColor = diffuseColor.rgb * intensity;
    gl_FragColor = vec4(finalColor, diffuseColor.a);
}
`;(function(t){EP(r,t);function r(e,n,i){n===void 0&&(n=0),i===void 0&&(i=1);var o=t.call(this,PP,IP)||this;return o._color=0,o.uniforms.dimensions=new Float32Array(2),o.uniforms.ambientColor=new Float32Array([0,0,0,i]),o.texture=e,o.color=n,o}return r.prototype.apply=function(e,n,i,o){var s,l;this.uniforms.dimensions[0]=(s=n.filterFrame)===null||s===void 0?void 0:s.width,this.uniforms.dimensions[1]=(l=n.filterFrame)===null||l===void 0?void 0:l.height,e.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"texture",{get:function(){return this.uniforms.uLightmap},set:function(e){this.uniforms.uLightmap=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"color",{get:function(){return this._color},set:function(e){var n=this.uniforms.ambientColor;typeof e=="number"?(Gt(e,n),this._color=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],this._color=fe(n))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this.uniforms.ambientColor[3]},set:function(e){this.uniforms.ambientColor[3]=e},enumerable:!1,configurable:!0}),r})(nt);/*!
 * @pixi/filter-tilt-shift - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-tilt-shift is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Kl=function(t,r){return Kl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Kl(t,r)};function Wo(t,r){Kl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var RP=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,AP=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float blur;
uniform float gradientBlur;
uniform vec2 start;
uniform vec2 end;
uniform vec2 delta;
uniform vec2 texSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,Rv=function(t){Wo(r,t);function r(e,n,i,o){e===void 0&&(e=100),n===void 0&&(n=600);var s=t.call(this,RP,AP)||this;return s.uniforms.blur=e,s.uniforms.gradientBlur=n,s.uniforms.start=i||new ct(0,window.innerHeight/2),s.uniforms.end=o||new ct(600,window.innerHeight/2),s.uniforms.delta=new ct(30,30),s.uniforms.texSize=new ct(window.innerWidth,window.innerHeight),s.updateDelta(),s}return r.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},Object.defineProperty(r.prototype,"blur",{get:function(){return this.uniforms.blur},set:function(e){this.uniforms.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"gradientBlur",{get:function(){return this.uniforms.gradientBlur},set:function(e){this.uniforms.gradientBlur=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"start",{get:function(){return this.uniforms.start},set:function(e){this.uniforms.start=e,this.updateDelta()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"end",{get:function(){return this.uniforms.end},set:function(e){this.uniforms.end=e,this.updateDelta()},enumerable:!1,configurable:!0}),r}(nt),NP=function(t){Wo(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,n=this.uniforms.end.y-this.uniforms.start.y,i=Math.sqrt(e*e+n*n);this.uniforms.delta.x=e/i,this.uniforms.delta.y=n/i},r}(Rv),OP=function(t){Wo(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,n=this.uniforms.end.y-this.uniforms.start.y,i=Math.sqrt(e*e+n*n);this.uniforms.delta.x=-n/i,this.uniforms.delta.y=e/i},r}(Rv);(function(t){Wo(r,t);function r(e,n,i,o){e===void 0&&(e=100),n===void 0&&(n=600);var s=t.call(this)||this;return s.tiltShiftXFilter=new NP(e,n,i,o),s.tiltShiftYFilter=new OP(e,n,i,o),s}return r.prototype.apply=function(e,n,i,o){var s=e.getFilterTexture();this.tiltShiftXFilter.apply(e,n,s,1),this.tiltShiftYFilter.apply(e,s,i,o),e.returnFilterTexture(s)},Object.defineProperty(r.prototype,"blur",{get:function(){return this.tiltShiftXFilter.blur},set:function(e){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"gradientBlur",{get:function(){return this.tiltShiftXFilter.gradientBlur},set:function(e){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"start",{get:function(){return this.tiltShiftXFilter.start},set:function(e){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"end",{get:function(){return this.tiltShiftXFilter.end},set:function(e){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=e},enumerable:!1,configurable:!0}),r})(nt);/*!
 * @pixi/filter-twist - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-twist is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Zl=function(t,r){return Zl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Zl(t,r)};function SP(t,r){Zl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var UP=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,LP=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float radius;
uniform float angle;
uniform vec2 offset;
uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= offset;

    float dist = length(coord);

    if (dist < radius)
    {
        float ratioDist = (radius - dist) / radius;
        float angleMod = ratioDist * ratioDist * angle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += offset;

    return coord;
}

void main(void)
{

    vec2 coord = mapCoord(vTextureCoord);

    coord = twist(coord);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord );

}
`;(function(t){SP(r,t);function r(e){var n=t.call(this,UP,LP)||this;return Object.assign(n,r.defaults,e),n}return Object.defineProperty(r.prototype,"offset",{get:function(){return this.uniforms.offset},set:function(e){this.uniforms.offset=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(e){this.uniforms.radius=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(e){this.uniforms.angle=e},enumerable:!1,configurable:!0}),r.defaults={radius:200,angle:4,padding:20,offset:new ct},r})(nt);/*!
 * @pixi/filter-zoom-blur - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-zoom-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Jl=function(t,r){return Jl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},Jl(t,r)};function FP(t,r){Jl(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}function MP(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(e[n[i]]=t[n[i]]);return e}var kP=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,BP=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uCenter;
uniform float uStrength;
uniform float uInnerRadius;
uniform float uRadius;

const float MAX_KERNEL_SIZE = \${maxKernelSize};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {

    float minGradient = uInnerRadius * 0.3;
    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;

    float gradient = uRadius * 0.3;
    float radius = (uRadius - gradient * 0.5) / filterArea.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / filterArea.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture2D(uSampler, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`;(function(t){FP(r,t);function r(e){var n=this,i=Object.assign(r.defaults,e),o=i.maxKernelSize,s=MP(i,["maxKernelSize"]);return n=t.call(this,kP,BP.replace("${maxKernelSize}",o.toFixed(1)))||this,Object.assign(n,s),n}return Object.defineProperty(r.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(e){this.uniforms.uCenter=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"strength",{get:function(){return this.uniforms.uStrength},set:function(e){this.uniforms.uStrength=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"innerRadius",{get:function(){return this.uniforms.uInnerRadius},set:function(e){this.uniforms.uInnerRadius=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},enumerable:!1,configurable:!0}),r.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32},r})(nt);const KP=(t={})=>{const r=e=>{const{parentId:n="main"}=t,i=document.getElementById(n),{clientWidth:o,clientHeight:s}=i,l=new eu({width:o,height:s,antialias:!0,autoDensity:!0});i.appendChild(l.view),window.renderer=l;const h=new Ht,f=new iE({threshold:.2,bloomScale:1.5,brightness:1,blur:1.5,quality:5});h.filters=[new s2.FXAAFilter,f];const d=new tr,v=new Ht;v.addChild(d),h.addChild(v);const m=new Ht;m.sortableChildren=!0,h.addChild(m);const _=new Ht;_.sortableChildren=!0;const g=new tr;_.addChild(g),h.addChild(_),Object.assign(e,{captureSnapshotPNG:()=>{const{backgroundColor:y=0}=t;var w=Qe.create({width:l.width,height:l.height});d.beginFill(y),d.drawRect(0,0,l.width,l.height),l.render(h,{renderTexture:w});var C=l.plugins.extract.canvas(w);window.open(C.toDataURL("image/png"))},renderer:l,filterStage:h,bloom:f,stage:m,debugStage:_,debugGraphics:g,backgroundGraphics:d})};return e=>{e.renderer||r(e);const{renderer:n,stage:i,filterStage:o,debugStage:s,debugGraphics:l}=e,{width:h,height:f}=n,{clientWidth:d,clientHeight:v}=n.view.parentNode;return i.x=d/2,i.y=v/2,s.x=d/2,s.y=v/2,(d!==h||v!==f)&&n.resize(d,v),n.render(o),l.clear(),e}},ZP=(t={})=>{const r=e=>{const{stage:n}=e;e.gGrid=new Ze,n.addChild(e.gGrid)};return e=>{const{gridSize:n=50,gridLineWidth:i=2,gridLineColor:o=16777215,gridLineAlpha:s=.1,zoom:l=1,camera:h={x:0,y:0}}=t;e.gGrid||r(e);const{gGrid:f,renderer:{width:d,height:v}}=e;f.clear();const m=i,_=Math.floor(d/l),g=Math.floor(v/l),b=0-_/2+h.x,y=0-g/2+h.y,w=Math.abs(b%n),C=Math.abs(y%n),T=b+w,I=T+_+w,P=y+C,E=P+g+C;f.lineStyle(m,o,s);for(let S=T;S<I;S+=n)f.moveTo(S,y),f.lineTo(S,y+g);for(let S=P;S<E;S+=n)f.moveTo(b,S),f.lineTo(b+_,S);return e}},Av={x:Ke.f32,y:Ke.f32,z:Ke.f32,r:Ke.f32},zn=cu(Av),$n=cu(Av),GP=yv([zn,$n]),JP=t=>r=>{const{time:{deltaSec:e}}=r;for(const n of GP(r))zn.x[n]+=$n.x[n]*e,zn.y[n]+=$n.y[n]*e,zn.z[n]+=$n.z[n]*e,zn.r[n]+=$n.r[n]*e;return r},QP=cu({scaleX:Ke.f32,scaleY:Ke.f32,lineWidth:Ke.f32,color:Ke.ui32});class tI{constructor(r,e){this.g=new Ze,this.draw(r,e)}root(){return this.g}draw(r,e){const{g:n}=this,{lineWidth:i,color:o}=e.SpriteOptions;n.clear(),n.lineStyle(i,o,1)}update(r,e){const{g:n}=this;n.x=e.Position.x,n.y=e.Position.y,n.rotation=e.Position.r,n.scale.x=e.SpriteOptions.scaleX,n.scale.y=e.SpriteOptions.scaleY}drawDebug(r,e,n){}}const Vn=Symbol("spriteMaps");function DP(t,r,e){for(let[n,i,o=n.query,s=i.name]of e){t[Vn]||(t[Vn]=new Map),t[Vn].has(s)||t[Vn].set(s,new Map);const l=t[Vn].get(s),h=o(t),f=new n;for(const d of h){if(f.eid=d,!l.has(d)){const m=new i(t,f);r.addChild(m.root()),l.set(d,m)}const v=l.get(d);v.update(t,f,h),t.debug&&v.drawDebug(t,f,t.debugStage,h)}for(const d of l.keys())h.includes(d)||(r.removeChild(l.get(d).root()),l.delete(d))}return t}const eI=(t=[])=>{const r=e=>{const{stage:n}=e;e.gSprites=new Ze,n.addChild(e.gSprites)};return e=>(e.gSprites||r(e),DP(e,e.gSprites,t),e)};class ca{constructor(r,e){this.eid=r,this.world=e;const n=Object.entries(this.constructor.components);for(const[i,o]of n)this.addComponentProxy(i,o)}using(r,e){return this.eid=r,this.world=e,this}update(r){}set(r={}){for(const e of Object.keys(r))for(const[n,i]of Object.entries(r[e]))this[e]&&(this[e][n]=typeof i=="function"?i():i);return this}add(r={},e={}){for(const[n,i]of Object.entries(r))this[n]||this.addComponentProxy(n,i,{...this.constructor.componentProxyClasses,...e}),_l(this.world,i,this.eid);return this}static spawn(r,e={}){const n=Xn(r),i=new this(n,r);for(const o of Object.values(this.components))_l(r,o,n);return i.set(this.defaults).set(e)}remove(){au(this.world,this.eid)}static get query(){return this._query||(this._query=this.defineQuery()),this._query}static defineQuery(r=[]){return yv([...Object.values(this.components),...r])}addComponentProxy(r,e,n=this.constructor.componentProxyClasses){const i=n[r]||jP;return this[r]=new i(e,this),this}}We(ca,"components",{}),We(ca,"defaults",{}),We(ca,"componentProxyClasses",{});const VP=t=>class extends t{using(r,e){return this.parent.eid=r,this.parent.world=e,this}hasComponent(){return gi(this.parent.world,this.component,this.parent.eid)}defineComponentProperties(r,e){this.parent=e||this,this.component=r;for(const n of Object.keys(r))HP(this.component,this.parent,this,n)}},jP=VP(class{constructor(t,r){this.defineComponentProperties(t,r)}});function HP(t,r,e,n,i=n){typeof e[i]<"u"||Object.defineProperty(e,i,{get:()=>t[n][r.eid],set:o=>{const s=t[n];s[r.eid].set?s[r.eid].set(o):s[r.eid]=o},enumerable:!0})}function XP(t,r){for(const[e,n=()=>{},i=e.query]of r){const o=i(t),s=new e;for(const l of o)s.using(l,t),n(s),s.update()}return t}const rI=(t=[])=>r=>(XP(r,t),r);function nI(t,...r){r.forEach(e=>e.eid=t)}const iI=(t,r,e)=>Math.floor(t()*(e+1-r)+r);function zP(t,r,e=0,n=0){return Math.pow(e-t,2)+Math.pow(n-r,2)}function oI(t,r,e=0,n=0){return Math.sqrt(zP(t,r,e,n))}class Fo extends yl{initStore(){return{history:[],isScrubbing:!1,scrub:0}}onWorldChanged(r){this.serializer=m2(r),this.deserializer=_2(r)}get scrub(){return this._store.scrub}set scrub(r){const e=this.history.length-1;r>e||(this._store.scrub=r,r!==e&&(this.world.stop(!0),this.scrubTo(r)))}captureSnapshot(){const{maxHistory:r=60}=this.options;this.scrub!==this.history.length-1&&this.history.splice(this.scrub+1);const e=this.serializer(this.world);for(this.history.push(e);this.history.length>r;)this.history.shift();this.scrub=this.history.length-1}scrubTo(r){const{updateDelta:e=1e3/60}=this.options;this.isScrubbing=!0;const n=this.history[r];if(n){const i=k2(this.world);for(const o of i)au(this.world,o);this.deserializer(this.world,n),this.world.updateOnce(e),this.world.drawOnce(0)}this.isScrubbing=!1}}We(Fo,"storeKey",Symbol("worldHistory")),We(Fo,"attributes",["history","isScrubbing"]);const fo=new Fo;window.replayService=fo;const sI=(t={})=>{let r=0;return e=>{if(fo.using(e,t),fo.isScrubbing)return e;const{historyPeriod:n=10}=t;return r>0?(r--,e):(r=n,fo.captureSnapshot(),e)}},aI=(t,r,e={})=>{const n=new Fo().using(r,e);t.addFolder({title:"replay",expanded:!0}).addInput(n,"scrub",{min:0,max:n.options.maxHistory-1,step:1})};export{ca as B,VP as C,jP as G,zn as P,QP as S,Ke as T,$n as V,yl as W,YP as a,sI as b,KP as c,tI as d,rI as e,cu as f,ZP as g,zP as h,qP as i,yv as j,gi as k,iI as l,JP as m,au as n,nI as o,WP as p,oI as q,aI as r,eI as s,Qd as t,XP as u};
