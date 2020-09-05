/*! lz4.js Released under the MIT license. https://github.com/ukyo/lz4.js */

var lz4init = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(lz4init) {
  lz4init = lz4init || {};


var c;c||(c=typeof lz4init !== 'undefined' ? lz4init : {});var aa;c.ready=new Promise(function(a){aa=a});var k={},l;for(l in c)c.hasOwnProperty(l)&&(k[l]=c[l]);function n(a,b){throw b;}var p=!1,q=!1,r=!1;p="object"===typeof window;q="function"===typeof importScripts;r="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;var t="",u,v,w,x;
if(r)t=q?require("path").dirname(t)+"/":__dirname+"/",u=function(a,b){w||(w=require("fs"));x||(x=require("path"));a=x.normalize(a);return w.readFileSync(a,b?null:"utf8")},v=function(a){a=u(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||y("Assertion failed: undefined");return a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),n=function(a){process.exit(a)},c.inspect=function(){return"[Emscripten Module object]"};else if(p||q)q?t=self.location.href:document.currentScript&&
(t=document.currentScript.src),_scriptDir&&(t=_scriptDir),0!==t.indexOf("blob:")?t=t.substr(0,t.lastIndexOf("/")+1):t="",u=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(v=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var ca=c.print||console.log.bind(console),z=c.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(c[l]=k[l]);k=null;c.quit&&(n=c.quit);
var A;c.wasmBinary&&(A=c.wasmBinary);var noExitRuntime;c.noExitRuntime&&(noExitRuntime=c.noExitRuntime);"object"!==typeof WebAssembly&&z("no native wasm support detected");var B,da=new WebAssembly.Table({initial:5,maximum:5,element:"anyfunc"}),C=!1,ea="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0,D,E,F,fa,G=c.INITIAL_MEMORY||33554432;c.wasmMemory?B=c.wasmMemory:B=new WebAssembly.Memory({initial:G/65536,maximum:G/65536});B&&(D=B.buffer);G=D.byteLength;var H=D;D=H;c.HEAP8=new Int8Array(H);
c.HEAP16=new Int16Array(H);c.HEAP32=F=new Int32Array(H);c.HEAPU8=E=new Uint8Array(H);c.HEAPU16=new Uint16Array(H);c.HEAPU32=new Uint32Array(H);c.HEAPF32=new Float32Array(H);c.HEAPF64=fa=new Float64Array(H);F[636]=5245584;function I(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(c);else{var d=b.O;"number"===typeof d?void 0===b.C?c.dynCall_v(d):c.dynCall_vi(d,b.C):d(void 0===b.C?null:b.C)}}}var ha=[],ia=[],ja=[],ka=[];function la(){var a=c.preRun.shift();ha.unshift(a)}
var J=0,K=null,L=null;c.preloadedImages={};c.preloadedAudios={};function y(a){if(c.onAbort)c.onAbort(a);ca(a);z(a);C=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function ma(){var a=M;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var M="_lz4.wasm";if(!ma()){var na=M;M=c.locateFile?c.locateFile(na,t):t+na}
function oa(){try{if(A)return new Uint8Array(A);if(v)return v(M);throw"both async and sync fetching of the wasm failed";}catch(a){y(a)}}function pa(){return A||!p&&!q||"function"!==typeof fetch?new Promise(function(a){a(oa())}):fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return oa()})}
var ua={1024:function(){void qa()},1043:function(a,b,d){return ra(a,b,d)},1075:function(a,b,d){sa(a,b,d)},1101:function(a,b){ta(a,b)}};ia.push({O:function(){va()}});var N=[],wa={a:function(a,b,d){N.length=0;var f;for(d>>=2;f=E[b++];)N.push(105>f?fa[++d>>1]:F[d]),++d;return ua[a].apply(null,N)},b:function(a,b,d){E.copyWithin(a,b,b+d)},c:function(){y("OOM")},memory:B,table:da};
(function(){function a(g){c.asm=g.exports;J--;c.monitorRunDependencies&&c.monitorRunDependencies(J);0==J&&(null!==K&&(clearInterval(K),K=null),L&&(g=L,L=null,g()))}function b(g){a(g.instance)}function d(g){return pa().then(function(e){return WebAssembly.instantiate(e,f)}).then(g,function(e){z("failed to asynchronously prepare wasm: "+e);y(e)})}var f={a:wa};J++;c.monitorRunDependencies&&c.monitorRunDependencies(J);if(c.instantiateWasm)try{return c.instantiateWasm(f,a)}catch(g){return z("Module.instantiateWasm callback failed with error: "+
g),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||ma()||"function"!==typeof fetch)return d(b);fetch(M,{credentials:"same-origin"}).then(function(g){return WebAssembly.instantiateStreaming(g,f).then(b,function(e){z("wasm streaming compile failed: "+e);z("falling back to ArrayBuffer instantiation");return d(b)})})})();return{}})();
var va=c.___wasm_call_ctors=function(){return(va=c.___wasm_call_ctors=c.asm.d).apply(null,arguments)},qa=c._LZ4JS_init=function(){return(qa=c._LZ4JS_init=c.asm.e).apply(null,arguments)},xa=c._LZ4JS_createCompressionContext=function(){return(xa=c._LZ4JS_createCompressionContext=c.asm.f).apply(null,arguments)},ya=c._LZ4JS_freeCompressionContext=function(){return(ya=c._LZ4JS_freeCompressionContext=c.asm.g).apply(null,arguments)},O=c._LZ4JS_compressBegin=function(){return(O=c._LZ4JS_compressBegin=c.asm.h).apply(null,
arguments)},P=c._LZ4JS_compressUpdate=function(){return(P=c._LZ4JS_compressUpdate=c.asm.i).apply(null,arguments)},Q=c._LZ4JS_compressEnd=function(){return(Q=c._LZ4JS_compressEnd=c.asm.j).apply(null,arguments)},za=c._LZ4JS_createDecompressionContext=function(){return(za=c._LZ4JS_createDecompressionContext=c.asm.k).apply(null,arguments)},Ba=c._LZ4JS_freeDecompressionContext=function(){return(Ba=c._LZ4JS_freeDecompressionContext=c.asm.l).apply(null,arguments)},R=c._LZ4JS_decompress=function(){return(R=
c._LZ4JS_decompress=c.asm.m).apply(null,arguments)};c._main=function(){return(c._main=c.asm.n).apply(null,arguments)};var S;function Ca(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Da(){S||T();S||(L=Da)};
function T(){function a(){if(!S&&(S=!0,c.calledRun=!0,!C)){I(ia);I(ja);aa(c);if(c.onRuntimeInitialized)c.onRuntimeInitialized();if(Ea){var b=c._main;try{var d=b(0,0);if(!noExitRuntime||0!==d){if(!noExitRuntime&&(C=!0,c.onExit))c.onExit(d);n(d,new Ca(d))}}catch(f){f instanceof Ca||("unwind"==f?noExitRuntime=!0:((b=f)&&"object"===typeof f&&f.stack&&(b=[f,f.stack]),z("exception thrown: "+b),n(1,f)))}finally{}}if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;)b=
c.postRun.shift(),ka.unshift(b);I(ka)}}if(!(0<J)){if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)la();I(ha);0<J||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},1);a()},1)):a())}}c.run=T;if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();var Ea=!0;c.noInitialRun&&(Ea=!1);noExitRuntime=!0;T();var U={};function ra(a,b){return U[a].F(b)}
function sa(a,b,d){return U[a].G(b,d)}
function ta(a,b){a=U[a];var d=Error;if(b){for(var f=b+NaN,g=b;E[g]&&!(g>=f);)++g;if(16<g-b&&E.subarray&&ea)b=ea.decode(E.subarray(b,g));else{for(f="";b<g;){var e=E[b++];if(e&128){var h=E[b++]&63;if(192==(e&224))f+=String.fromCharCode((e&31)<<6|h);else{var m=E[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|m:(e&7)<<18|h<<12|m<<6|E[b++]&63;65536>e?f+=String.fromCharCode(e):(e-=65536,f+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else f+=String.fromCharCode(e)}b=f}}else b="";a.w=d(b)}
var Fa={"64KB":4,"256KB":5,"1MB":6,"4MB":7};function V(a){void 0===a&&(a={});this.M={blockSizeID:Fa["4MB"],blockMode:0,contentChecksumFlag:0,frameType:0,dictID:0,blockChecksumFlag:0};this.N={compressionLevel:0,autoFlush:1,favorDecSpeed:1};this.options={};this.options.frameInfo=Object.assign({},this.M,a.frameInfo);this.options.preferences=Object.assign({},this.options.frameInfo,this.N,a.preferences);this.w=null}
function Ga(a,b){a.u=xa(a.options.frameInfo.blockSizeID,a.options.frameInfo.blockMode,a.options.frameInfo.contentChecksumFlag,a.options.frameInfo.frameType,b||0,a.options.frameInfo.dictID,a.options.frameInfo.blockChecksumFlag,a.options.preferences.compressionLevel,a.options.preferences.autoFlush,a.options.preferences.favorDecSpeed);if(!a.u)throw Error("LZ4JS_createCompressionContext");U[a.u]=a}V.prototype.s=function(){ya(this.u);delete U[this.u];if(this.w)throw this.w;};function W(){}
W.prototype.G=function(a,b){this.B.push(new Uint8Array(E.subarray(a,a+b)))};W.prototype.F=function(a){E.set(this.src.subarray(this.offset,this.offset+this.o),a);return this.o};function Ha(a){var b=0,d=a.reduce(function(g,e){return g+e.length},0),f=new Uint8Array(d);a.forEach(function(g){f.set(g,b);b+=g.length});return f}
function X(a){function b(e,h){Object.getOwnPropertyNames(h).concat(Object.getOwnPropertySymbols(h)).forEach(function(m){m.match(/^(?:initializer|constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)||Object.defineProperty(e,m,Object.getOwnPropertyDescriptor(h,m))})}for(var d=[],f=arguments.length-1;0<f--;)d[f]=arguments[f+1];var g=function(e){function h(){for(var m=[],ba=arguments.length;ba--;)m[ba]=arguments[ba];e.apply(this,m);d.forEach(function(Aa){"function"===typeof Aa.prototype.P&&
Aa.prototype.P.apply(this,m)})}e&&(h.__proto__=e);h.prototype=Object.create(e&&e.prototype);return h.prototype.constructor=h}(a);d.forEach(function(e){b(g.prototype,e.prototype);b(g,e)});return g}
var Ia=function(a){function b(d){a.call(this,d);this.A()}a&&(b.__proto__=a);b.prototype=Object.create(a&&a.prototype);b.prototype.constructor=b;b.prototype.J=function(){for(;this.offset<this.src.length;this.offset+=8192)this.o=Math.min(this.src.length-this.offset,8192),P(this.u)||this.s()};b.prototype.I=function(d){var f;this.src=d;Ga(this,d.length);O(this.u)||this.s();this.J();Q(this.u);this.s();var g=Ha(this.B);r&&Buffer.isBuffer(d)?f=Buffer.from(g.buffer,g.byteOffset,g.byteOffset+g.length):f=g;
this.A();return f};b.prototype.A=function(){this.src=null;this.o=this.offset=0;this.B=[]};return b}(X(V,W));function Y(){this.v=za();if(!this.v)throw Error("LZ4JS_createDecompressionContext");U[this.v]=this}Y.prototype.s=function(){Ba(this.v);delete U[this.v];if(this.w)throw this.w;};
var Ja=function(a){function b(){a.call(this);this.A()}a&&(b.__proto__=a);b.prototype=Object.create(a&&a.prototype);b.prototype.constructor=b;b.prototype.L=function(){for(;this.offset<this.src.length;this.offset+=8192)this.o=Math.min(this.src.length-this.offset,8192),R(this.v)||this.s();this.s()};b.prototype.K=function(d){this.src=d;this.L();var f=Ha(this.B);d=r?Buffer.isBuffer(d)?Buffer.from(f.buffer):f:f;this.A();return d};b.prototype.A=function(){this.src=null;this.offset=0;this.B=[];this.o=0};
return b}(X(Y,W));function Z(){}Z.prototype.F=function(a){E.set(new Uint8Array(this.src.buffer,this.src.byteOffset,this.o),a);return this.o};Z.prototype.G=function(a,b){this.D=Buffer.from(E.buffer).slice(a,a+b);this.push(Buffer.from(this.D))};var Ka,La;
try{Ka=require("stream").Transform,La=function(a){function b(d){a.call(this,d);V.call(this,d);this.H=!1;this.o=0;this.src=Buffer.alloc(0);this.D=Buffer.alloc(0);Ga(this,0)}a&&(b.__proto__=a);b.prototype=Object.create(a&&a.prototype);b.prototype.constructor=b;b.prototype._transform=function(d,f,g){try{this.H||(O(this.u)||this.s(),this.H=!0);var e;for(e=0;e<d.length;e+=8192)this.o=Math.min(d.length-e,8192),this.src=d.slice(e,e+this.o),P(this.u)||this.s();g()}catch(h){g(h)}};b.prototype._flush=function(d){try{Q(this.u),
this.s(),d()}catch(f){d(f)}};return b}(X(Ka,V,Z))}catch(a){}var Ma=La,Na,Oa;
try{Na=require("stream").Transform,Oa=function(a){function b(d){a.call(this,d);Y.call(this);this.o=0;this.src=Buffer.alloc(0);this.D=Buffer.alloc(0)}a&&(b.__proto__=a);b.prototype=Object.create(a&&a.prototype);b.prototype.constructor=b;b.prototype._transform=function(d,f,g){try{var e;for(e=0;e<d.length;e+=8192)this.o=Math.min(d.length-e,8192),this.src=d.slice(e,e+this.o),R(this.v)||this.s();g()}catch(h){g(h)}};b.prototype._flush=function(d){this.s();d()};return b}(X(Na,Y,Z))}catch(a){}
var Pa=Oa,Qa={BLOCK_MAX_SIZE:Fa,LZ4JS_instances:U,LZ4JS_read:ra,LZ4JS_write:sa,LZ4JS_error:ta,compress:function(a,b){return(new Ia(b)).I(a)},decompress:function(a){return(new Ja).K(a)}};r&&(Qa.createCompressStream=function(a){return new Ma(a)},Qa.createDecompressStream=function(){return new Pa});c.BLOCK_MAX_SIZE=Fa;c.lz4js=Qa;


  return lz4init.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = lz4init;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return lz4init; });
    else if (typeof exports === 'object')
      exports["lz4init"] = lz4init;
    