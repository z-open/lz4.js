/*! lz4.js Released under the MIT license. https://github.com/STUkh/lz4.js */

var lz4 = (function () {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
    function (lz4) {
      lz4 = lz4 || {};

      var b; b || (b = typeof lz4 !== 'undefined' ? lz4 : {}); var k = {}, l; for (l in b) b.hasOwnProperty(l) && (k[l] = b[l]); function n(a, c) { throw c; } var p = !1, q = !1, r = !1; p = "object" === typeof window; q = "function" === typeof importScripts; r = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node; var t = "", u, v, w, x;
      if (r) t = q ? require("path").dirname(t) + "/" : __dirname + "/", u = function (a, c) { w || (w = require("fs")); x || (x = require("path")); a = x.normalize(a); return w.readFileSync(a, c ? null : "utf8") }, v = function (a) { a = u(a, !0); a.buffer || (a = new Uint8Array(a)); a.buffer || y("Assertion failed: undefined"); return a }, 1 < process.argv.length && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function (a) { if (!(a instanceof z)) throw a; }), process.on("unhandledRejection", y), n = function (a) { process.exit(a) },
        b.inspect = function () { return "[Emscripten Module object]" }; else if (p || q) q ? t = self.location.href : document.currentScript && (t = document.currentScript.src), _scriptDir && (t = _scriptDir), 0 !== t.indexOf("blob:") ? t = t.substr(0, t.lastIndexOf("/") + 1) : t = "", u = function (a) { var c = new XMLHttpRequest; c.open("GET", a, !1); c.send(null); return c.responseText }, q && (v = function (a) { var c = new XMLHttpRequest; c.open("GET", a, !1); c.responseType = "arraybuffer"; c.send(null); return new Uint8Array(c.response) });
      var aa = b.print || console.log.bind(console), A = b.printErr || console.warn.bind(console); for (l in k) k.hasOwnProperty(l) && (b[l] = k[l]); k = null; b.quit && (n = b.quit); var B; b.wasmBinary && (B = b.wasmBinary); var noExitRuntime; b.noExitRuntime && (noExitRuntime = b.noExitRuntime); "object" !== typeof WebAssembly && A("no native wasm support detected"); var C, ba = new WebAssembly.Table({ initial: 5, maximum: 5, element: "anyfunc" }), D = !1, da = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
      "undefined" !== typeof TextDecoder && new TextDecoder("utf-16le"); var E, F, G, ea, H = b.INITIAL_MEMORY || 33554432; b.wasmMemory ? C = b.wasmMemory : C = new WebAssembly.Memory({ initial: H / 65536, maximum: H / 65536 }); C && (E = C.buffer); H = E.byteLength; var I = E; E = I; b.HEAP8 = new Int8Array(I); b.HEAP16 = new Int16Array(I); b.HEAP32 = G = new Int32Array(I); b.HEAPU8 = F = new Uint8Array(I); b.HEAPU16 = new Uint16Array(I); b.HEAPU32 = new Uint32Array(I); b.HEAPF32 = new Float32Array(I); b.HEAPF64 = ea = new Float64Array(I); G[636] = 5245584;
      function J(a) { for (; 0 < a.length;) { var c = a.shift(); if ("function" == typeof c) c(); else { var d = c.S; "number" === typeof d ? void 0 === c.C ? b.dynCall_v(d) : b.dynCall_vi(d, c.C) : d(void 0 === c.C ? null : c.C) } } } var fa = [], ha = [], ia = [], K = []; function ja() { var a = b.preRun.shift(); fa.unshift(a) } var L = 0, M = null, N = null; b.preloadedImages = {}; b.preloadedAudios = {}; function y(a) { if (b.onAbort) b.onAbort(a); aa(a); A(a); D = !0; throw new WebAssembly.RuntimeError("abort(" + a + "). Build with -s ASSERTIONS=1 for more info."); }
      function ka() { var a = O; return String.prototype.startsWith ? a.startsWith("data:application/octet-stream;base64,") : 0 === a.indexOf("data:application/octet-stream;base64,") } var O = "_lz4.wasm"; if (!ka()) { var la = O; O = b.locateFile ? b.locateFile(la, t) : t + la } function ma() { try { if (B) return new Uint8Array(B); if (v) return v(O); throw "both async and sync fetching of the wasm failed"; } catch (a) { y(a) } }
      function na() { return B || !p && !q || "function" !== typeof fetch ? new Promise(function (a) { a(ma()) }) : fetch(O, { credentials: "same-origin" }).then(function (a) { if (!a.ok) throw "failed to load wasm binary file at '" + O + "'"; return a.arrayBuffer() }).catch(function () { return ma() }) } var sa = { 1024: function () { void oa() }, 1043: function (a, c, d) { return pa(a, c, d) }, 1075: function (a, c, d) { qa(a, c, d) }, 1101: function (a, c) { ra(a, c) } }; ha.push({ S: function () { ta() } });
      var P, ua = { a: function (a, c, d) { P || (P = []); var f = P; f.length = 0; for (var g; g = F[c++];)100 === g || 102 === g ? (d = d + 7 & -8, f.push(ea[d >> 3]), d += 8) : (d = d + 3 & -4, f.push(G[d >> 2]), d += 4); return sa[a].apply(null, f) }, b: function (a, c, d) { F.copyWithin(a, c, c + d) }, c: function () { y("OOM") }, memory: C, table: ba }, va = function () {
        function a(g) { b.asm = g.exports; L--; b.monitorRunDependencies && b.monitorRunDependencies(L); 0 == L && (null !== M && (clearInterval(M), M = null), N && (g = N, N = null, g())) } function c(g) { a(g.instance) } function d(g) {
          return na().then(function (e) {
            return WebAssembly.instantiate(e,
              f)
          }).then(g, function (e) { A("failed to asynchronously prepare wasm: " + e); y(e) })
        } var f = { a: ua }; L++; b.monitorRunDependencies && b.monitorRunDependencies(L); if (b.instantiateWasm) try { return b.instantiateWasm(f, a) } catch (g) { return A("Module.instantiateWasm callback failed with error: " + g), !1 } (function () {
          if (B || "function" !== typeof WebAssembly.instantiateStreaming || ka() || "function" !== typeof fetch) return d(c); fetch(O, { credentials: "same-origin" }).then(function (g) {
            return WebAssembly.instantiateStreaming(g, f).then(c,
              function (e) { A("wasm streaming compile failed: " + e); A("falling back to ArrayBuffer instantiation"); d(c) })
          })
        })(); return {}
      }(); b.asm = va;
      var ta = b.___wasm_call_ctors = function () { return (ta = b.___wasm_call_ctors = b.asm.d).apply(null, arguments) }, oa = b._LZ4JS_init = function () { return (oa = b._LZ4JS_init = b.asm.e).apply(null, arguments) }, wa = b._LZ4JS_createCompressionContext = function () { return (wa = b._LZ4JS_createCompressionContext = b.asm.f).apply(null, arguments) }, xa = b._LZ4JS_freeCompressionContext = function () { return (xa = b._LZ4JS_freeCompressionContext = b.asm.g).apply(null, arguments) }, Q = b._LZ4JS_compressBegin = function () {
        return (Q = b._LZ4JS_compressBegin = b.asm.h).apply(null,
          arguments)
      }, R = b._LZ4JS_compressUpdate = function () { return (R = b._LZ4JS_compressUpdate = b.asm.i).apply(null, arguments) }, S = b._LZ4JS_compressEnd = function () { return (S = b._LZ4JS_compressEnd = b.asm.j).apply(null, arguments) }, ya = b._LZ4JS_createDecompressionContext = function () { return (ya = b._LZ4JS_createDecompressionContext = b.asm.k).apply(null, arguments) }, Aa = b._LZ4JS_freeDecompressionContext = function () { return (Aa = b._LZ4JS_freeDecompressionContext = b.asm.l).apply(null, arguments) }, Ba = b._LZ4JS_decompress = function () {
        return (Ba =
          b._LZ4JS_decompress = b.asm.m).apply(null, arguments)
      }; b._main = function () { return (b._main = b.asm.n).apply(null, arguments) }; b.asm = va; var T; b.then = function (a) { if (T) a(b); else { var c = b.onRuntimeInitialized; b.onRuntimeInitialized = function () { c && c(); a(b) } } return b }; function z(a) { this.name = "ExitStatus"; this.message = "Program terminated with exit(" + a + ")"; this.status = a } N = function Ca() { T || Da(); T || (N = Ca) };
      function Da() {
        function a() {
          if (!T && (T = !0, b.calledRun = !0, !D)) {
            J(ha); J(ia); if (b.onRuntimeInitialized) b.onRuntimeInitialized(); if (Ea) { var c = b._main; try { var d = c(0, 0); if (!noExitRuntime || 0 !== d) { if (!noExitRuntime && (D = !0, b.onExit)) b.onExit(d); n(d, new z(d)) } } catch (f) { f instanceof z || ("unwind" == f ? noExitRuntime = !0 : ((c = f) && "object" === typeof f && f.stack && (c = [f, f.stack]), A("exception thrown: " + c), n(1, f))) } finally { } } if (b.postRun) for ("function" == typeof b.postRun && (b.postRun = [b.postRun]); b.postRun.length;)K.unshift(b.postRun.shift());
            J(K)
          }
        } if (!(0 < L)) { if (b.preRun) for ("function" == typeof b.preRun && (b.preRun = [b.preRun]); b.preRun.length;)ja(); J(fa); 0 < L || (b.setStatus ? (b.setStatus("Running..."), setTimeout(function () { setTimeout(function () { b.setStatus("") }, 1); a() }, 1)) : a()) }
      } b.run = Da; if (b.preInit) for ("function" == typeof b.preInit && (b.preInit = [b.preInit]); 0 < b.preInit.length;)b.preInit.pop()(); var Ea = !0; b.noInitialRun && (Ea = !1); noExitRuntime = !0; Da(); var U = {}; function pa(a, c) { return U[a].F(c) } function qa(a, c, d) { return U[a].G(c, d) }
      function ra(a, c) { a = U[a]; var d = Error; if (c) { for (var f = c + NaN, g = c; F[g] && !(g >= f);)++g; if (16 < g - c && F.subarray && da) c = da.decode(F.subarray(c, g)); else { for (f = ""; c < g;) { var e = F[c++]; if (e & 128) { var h = F[c++] & 63; if (192 == (e & 224)) f += String.fromCharCode((e & 31) << 6 | h); else { var m = F[c++] & 63; e = 224 == (e & 240) ? (e & 15) << 12 | h << 6 | m : (e & 7) << 18 | h << 12 | m << 6 | F[c++] & 63; 65536 > e ? f += String.fromCharCode(e) : (e -= 65536, f += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)) } } else f += String.fromCharCode(e) } c = f } } else c = ""; a.w = d(c) }
      var Fa = { "64KB": 4, "256KB": 5, "1MB": 6, "4MB": 7 }; function V(a) { this.R = { J: Fa["4MB"], I: !1, N: !1, M: 0 }; this.options = Object.assign({}, this.R, a); this.u = wa(this.options.J, +this.options.I, +this.options.N, this.options.M); if (!this.u) throw Error("LZ4JS_createCompressionContext"); U[this.u] = this; this.w = null } V.prototype.s = function () { xa(this.u); delete U[this.u]; if (this.w) throw this.w; }; function W() { } W.prototype.G = function (a, c) { this.B.push(new Uint8Array(F.subarray(a, a + c))) };
      W.prototype.F = function (a) { F.set(this.src.subarray(this.offset, this.offset + this.o), a); return this.o }; function Ga(a) { var c = 0, d = a.reduce(function (g, e) { return g + e.length }, 0), f = new Uint8Array(d); a.forEach(function (g) { f.set(g, c); c += g.length }); return f }
      function X(a) {
        function c(e, h) { Object.getOwnPropertyNames(h).concat(Object.getOwnPropertySymbols(h)).forEach(function (m) { m.match(/^(?:initializer|constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/) || Object.defineProperty(e, m, Object.getOwnPropertyDescriptor(h, m)) }) } for (var d = [], f = arguments.length - 1; 0 < f--;)d[f] = arguments[f + 1]; var g = function (e) {
          function h() {
            for (var m = [], ca = arguments.length; ca--;)m[ca] = arguments[ca]; e.apply(this, m); d.forEach(function (za) {
            "function" === typeof za.prototype.T &&
              za.prototype.T.apply(this, m)
            })
          } e && (h.__proto__ = e); h.prototype = Object.create(e && e.prototype); return h.prototype.constructor = h
        }(a); d.forEach(function (e) { c(g.prototype, e.prototype); c(g, e) }); return g
      }
      var Ha = function (a) {
        function c(d) { a.call(this, d); this.A() } a && (c.__proto__ = a); c.prototype = Object.create(a && a.prototype); c.prototype.constructor = c; c.prototype.L = function () { for (; this.offset < this.src.length; this.offset += 8192)this.o = Math.min(this.src.length - this.offset, 8192), R(this.u) || this.s() }; c.prototype.K = function (d) { var f; this.src = d; Q(this.u) || this.s(); this.L(); S(this.u); this.s(); var g = Ga(this.B); r && Buffer.isBuffer(d) ? f = Buffer.from(g.buffer, g.byteOffset, g.byteOffset + g.length) : f = g; this.A(); return f };
        c.prototype.A = function () { this.src = null; this.o = this.offset = 0; this.B = [] }; return c
      }(X(V, W)); function Y() { this.v = ya(); if (!this.v) throw Error("LZ4JS_createDecompressionContext"); U[this.v] = this } Y.prototype.s = function () { Aa(this.v); delete U[this.v]; if (this.w) throw this.w; };
      var Ia = function (a) {
        function c() { a.call(this); this.A() } a && (c.__proto__ = a); c.prototype = Object.create(a && a.prototype); c.prototype.constructor = c; c.prototype.P = function () { for (; this.offset < this.src.length; this.offset += 8192)this.o = Math.min(this.src.length - this.offset, 8192), Ba(this.v) || this.s(); this.s() }; c.prototype.O = function (d) { this.src = d; this.P(); var f = Ga(this.B); d = r ? Buffer.isBuffer(d) ? Buffer.from(f.buffer) : f : f; this.A(); return d }; c.prototype.A = function () { this.src = null; this.offset = 0; this.B = []; this.o = 0 };
        return c
      }(X(Y, W)); function Z() { } Z.prototype.F = function (a) { F.set(new Uint8Array(this.src.buffer, this.src.byteOffset, this.o), a); return this.o }; Z.prototype.G = function (a, c) { this.D = Buffer.from(F.buffer).slice(a, a + c); this.push(Buffer.from(this.D)) }; var Ja, Ka;
      try {
      Ja = require("stream").Transform, Ka = function (a) {
        function c(d) { a.call(this, d); V.call(this, d); this.H = !1; this.o = 0; this.src = Buffer.alloc(0); this.D = Buffer.alloc(0) } a && (c.__proto__ = a); c.prototype = Object.create(a && a.prototype); c.prototype.constructor = c; c.prototype._transform = function (d, f, g) { try { this.H || (Q(this.u) || this.s(), this.H = !0); var e; for (e = 0; e < d.length; e += 8192)this.o = Math.min(d.length - e, 8192), this.src = d.slice(e, e + this.o), R(this.u) || this.s(); g() } catch (h) { g(h) } }; c.prototype._flush = function (d) {
          try {
          S(this.u),
            this.s(), d()
          } catch (f) { d(f) }
        }; return c
      }(X(Ja, V, Z))
      } catch (a) { } var La = Ka, Ma, Na;
      try { Ma = require("stream").Transform, Na = function (a) { function c(d) { a.call(this, d); Y.call(this); this.o = 0; this.src = Buffer.alloc(0); this.D = Buffer.alloc(0) } a && (c.__proto__ = a); c.prototype = Object.create(a && a.prototype); c.prototype.constructor = c; c.prototype._transform = function (d, f, g) { try { var e; for (e = 0; e < d.length; e += 8192)this.o = Math.min(d.length - e, 8192), this.src = d.slice(e, e + this.o), Ba(this.v) || this.s(); g() } catch (h) { g(h) } }; c.prototype._flush = function (d) { this.s(); d() }; return c }(X(Ma, Y, Z)) } catch (a) { }
      var Oa = Na, Pa = { BLOCK_MAX_SIZE: Fa, LZ4JS_instances: U, LZ4JS_read: pa, LZ4JS_write: qa, LZ4JS_error: ra, compress: function (a, c) { return (new Ha(c)).K(a) }, decompress: function (a) { return (new Ia).O(a) } }; r && (Pa.createCompressStream = function (a) { return new La(a) }, Pa.createDecompressStream = function () { return new Oa }); b.then && (delete b.then, b.ready = new Promise(function (a, c) { if (b.calledRun) return a(b); K.unshift(function () { return a(b) }); b.onAbort = function (d) { return c(d) } })); b.lz4js = Pa;


      return lz4
    }
  );
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = lz4;
else if (typeof define === 'function' && define['amd'])
  define([], function () { return lz4; });
else if (typeof exports === 'object')
  exports["lz4"] = lz4;

