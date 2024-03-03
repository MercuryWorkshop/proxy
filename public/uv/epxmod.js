(function (g, f) {
    if ("object" == typeof exports && "object" == typeof module) {
      module.exports = f(require('fs'), require('ws'), require('path'));
    } else if ("function" == typeof define && define.amd) {
      define("EpxMod", ['fs', 'ws', 'path'], f);
    } else if ("object" == typeof exports) {
      exports["EpxMod"] = f(require('fs'), require('ws'), require('path'));
    } else {
      g["EpxMod"] = f(g["fs"], g["ws"], g["path"]);
    }
  }(this, (__da, __db, __dc) => {
var exports = {};
var module = { exports };
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  EpoxyClient: () => EpoxyClient
});
module.exports = __toCommonJS(main_exports);

// ../node_modules/.pnpm/@mercuryworkshop+epoxy-tls@1.1.1/node_modules/@mercuryworkshop/epoxy-tls/pkg/epoxy-module-bundled.js
var epoxy;
(function() {
  const __exports = {};
  let script_src;
  if (typeof document !== "undefined" && document.currentScript !== null) {
    script_src = new URL(document.currentScript.src, location.href).toString();
  }
  let wasm = void 0;
  const heap = new Array(128).fill(void 0);
  heap.push(void 0, null, true, false);
  function getObject(idx) {
    return heap[idx];
  }
  let WASM_VECTOR_LEN = 0;
  let cachedUint8Memory0 = null;
  function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.buffer !== wasm.memory.buffer) {
      cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
  }
  const cachedTextEncoder = typeof TextEncoder !== "undefined" ? new TextEncoder("utf-8") : { encode: () => {
    throw Error("TextEncoder not available");
  } };
  const encodeString = function(arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
      read: arg.length,
      written: buf.length
    };
  };
  function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === void 0) {
      const buf = cachedTextEncoder.encode(arg);
      const ptr2 = malloc(buf.length, 1) >>> 0;
      getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
      WASM_VECTOR_LEN = buf.length;
      return ptr2;
    }
    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;
    const mem = getUint8Memory0();
    let offset = 0;
    for (; offset < len; offset++) {
      const code = arg.charCodeAt(offset);
      if (code > 127)
        break;
      mem[ptr + offset] = code;
    }
    if (offset !== len) {
      if (offset !== 0) {
        arg = arg.slice(offset);
      }
      ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
      const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
      const ret = encodeString(arg, view);
      offset += ret.written;
    }
    WASM_VECTOR_LEN = offset;
    return ptr;
  }
  function isLikeNone(x) {
    return x === void 0 || x === null;
  }
  let cachedInt32Memory0 = null;
  function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.buffer !== wasm.memory.buffer) {
      cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
  }
  const cachedTextDecoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
    throw Error("TextDecoder not available");
  } };
  if (typeof TextDecoder !== "undefined") {
    cachedTextDecoder.decode();
  }
  ;
  function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().slice(ptr, ptr + len));
  }
  let heap_next = heap.length;
  function addHeapObject(obj) {
    if (heap_next === heap.length)
      heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];
    heap[idx] = obj;
    return idx;
  }
  function dropObject(idx) {
    if (idx < 132)
      return;
    heap[idx] = heap_next;
    heap_next = idx;
  }
  function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
  }
  function debugString(val) {
    const type = typeof val;
    if (type == "number" || type == "boolean" || val == null) {
      return `${val}`;
    }
    if (type == "string") {
      return `"${val}"`;
    }
    if (type == "symbol") {
      const description = val.description;
      if (description == null) {
        return "Symbol";
      } else {
        return `Symbol(${description})`;
      }
    }
    if (type == "function") {
      const name = val.name;
      if (typeof name == "string" && name.length > 0) {
        return `Function(${name})`;
      } else {
        return "Function";
      }
    }
    if (Array.isArray(val)) {
      const length = val.length;
      let debug = "[";
      if (length > 0) {
        debug += debugString(val[0]);
      }
      for (let i = 1; i < length; i++) {
        debug += ", " + debugString(val[i]);
      }
      debug += "]";
      return debug;
    }
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
      className = builtInMatches[1];
    } else {
      return toString.call(val);
    }
    if (className == "Object") {
      try {
        return "Object(" + JSON.stringify(val) + ")";
      } catch (_) {
        return "Object";
      }
    }
    if (val instanceof Error) {
      return `${val.name}: ${val.message}
${val.stack}`;
    }
    return className;
  }
  const CLOSURE_DTORS = new FinalizationRegistry((state) => {
    wasm.__wbindgen_export_3.get(state.dtor)(state.a, state.b);
  });
  function makeClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
      state.cnt++;
      try {
        return f(state.a, state.b, ...args);
      } finally {
        if (--state.cnt === 0) {
          wasm.__wbindgen_export_3.get(state.dtor)(state.a, state.b);
          state.a = 0;
          CLOSURE_DTORS.unregister(state);
        }
      }
    };
    real.original = state;
    CLOSURE_DTORS.register(real, state, state);
    return real;
  }
  function __wbg_adapter_36(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures__invoke1__hfbc33962dd2bd2c0(arg0, arg1, addHeapObject(arg2));
  }
  function __wbg_adapter_39(arg0, arg1) {
    wasm._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h35d1d2507ed3ea83(arg0, arg1);
  }
  function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
      state.cnt++;
      const a = state.a;
      state.a = 0;
      try {
        return f(a, state.b, ...args);
      } finally {
        if (--state.cnt === 0) {
          wasm.__wbindgen_export_3.get(state.dtor)(a, state.b);
          CLOSURE_DTORS.unregister(state);
        } else {
          state.a = a;
        }
      }
    };
    real.original = state;
    CLOSURE_DTORS.register(real, state, state);
    return real;
  }
  function __wbg_adapter_42(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures__invoke1_mut__h3b8dcbf133f63b9c(arg0, arg1, addHeapObject(arg2));
  }
  function __wbg_adapter_47(arg0, arg1) {
    wasm.wasm_bindgen__convert__closures__invoke0_mut__hff28d0cac5874858(arg0, arg1);
  }
  function getCachedStringFromWasm0(ptr, len) {
    if (ptr === 0) {
      return getObject(len);
    } else {
      return getStringFromWasm0(ptr, len);
    }
  }
  function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
      throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
  }
  let cachedUint32Memory0 = null;
  function getUint32Memory0() {
    if (cachedUint32Memory0 === null || cachedUint32Memory0.buffer !== wasm.memory.buffer) {
      cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
  }
  function getArrayJsValueFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getUint32Memory0();
    const slice = mem.subarray(ptr / 4, ptr / 4 + len);
    const result = [];
    for (let i = 0; i < slice.length; i++) {
      result.push(takeObject(slice[i]));
    }
    return result;
  }
  function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4, 4) >>> 0;
    const mem = getUint32Memory0();
    for (let i = 0; i < array.length; i++) {
      mem[ptr / 4 + i] = addHeapObject(array[i]);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
  }
  __exports.init = function() {
    wasm.init();
  };
  function handleError(f, args) {
    try {
      return f.apply(this, args);
    } catch (e) {
      wasm.__wbindgen_exn_store(addHeapObject(e));
    }
  }
  function __wbg_adapter_139(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures__invoke2_mut__h0b1600a1b672fe81(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
  }
  function notDefined(what) {
    return () => {
      throw new Error(`${what} is not defined`);
    };
  }
  function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
  }
  function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
  }
  const EpoxyClientFinalization = new FinalizationRegistry((ptr) => wasm.__wbg_epoxyclient_free(ptr >>> 0));
  class EpoxyClient2 {
    static __wrap(ptr) {
      ptr = ptr >>> 0;
      const obj = Object.create(EpoxyClient2.prototype);
      obj.__wbg_ptr = ptr;
      EpoxyClientFinalization.register(obj, obj.__wbg_ptr, obj);
      return obj;
    }
    toJSON() {
      return {
        useragent: this.useragent,
        redirectLimit: this.redirectLimit
      };
    }
    toString() {
      return JSON.stringify(this);
    }
    __destroy_into_raw() {
      const ptr = this.__wbg_ptr;
      this.__wbg_ptr = 0;
      EpoxyClientFinalization.unregister(this);
      return ptr;
    }
    free() {
      const ptr = this.__destroy_into_raw();
      wasm.__wbg_epoxyclient_free(ptr);
    }
    /**
    * @returns {string}
    */
    get useragent() {
      try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.__wbg_get_epoxyclient_useragent(retptr, this.__wbg_ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getCachedStringFromWasm0(r0, r1);
        if (r0 !== 0) {
          wasm.__wbindgen_free(r0, r1, 1);
        }
        return v1;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {string} arg0
    */
    set useragent(arg0) {
      const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      wasm.__wbg_set_epoxyclient_useragent(this.__wbg_ptr, ptr0, len0);
    }
    /**
    * @returns {number}
    */
    get redirectLimit() {
      const ret = wasm.__wbg_get_epoxyclient_redirectLimit(this.__wbg_ptr);
      return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set redirectLimit(arg0) {
      wasm.__wbg_set_epoxyclient_redirectLimit(this.__wbg_ptr, arg0);
    }
    /**
    * @param {string} ws_url
    * @param {string} useragent
    * @param {number} redirect_limit
    */
    constructor(ws_url, useragent, redirect_limit) {
      const ptr0 = passStringToWasm0(ws_url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ptr1 = passStringToWasm0(useragent, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      const ret = wasm.epoxyclient_new(ptr0, len0, ptr1, len1, redirect_limit);
      return takeObject(ret);
    }
    /**
    * @param {Function} onopen
    * @param {Function} onclose
    * @param {Function} onerror
    * @param {Function} onmessage
    * @param {string} url
    * @param {(string)[]} protocols
    * @param {string} origin
    * @returns {Promise<EpxWebSocket>}
    */
    connect_ws(onopen, onclose, onerror, onmessage, url, protocols, origin) {
      const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ptr1 = passArrayJsValueToWasm0(protocols, wasm.__wbindgen_malloc);
      const len1 = WASM_VECTOR_LEN;
      const ptr2 = passStringToWasm0(origin, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len2 = WASM_VECTOR_LEN;
      const ret = wasm.epoxyclient_connect_ws(this.__wbg_ptr, addHeapObject(onopen), addHeapObject(onclose), addHeapObject(onerror), addHeapObject(onmessage), ptr0, len0, ptr1, len1, ptr2, len2);
      return takeObject(ret);
    }
    /**
    * @param {Function} onopen
    * @param {Function} onclose
    * @param {Function} onerror
    * @param {Function} onmessage
    * @param {string} url
    * @returns {Promise<EpxTlsStream>}
    */
    connect_tls(onopen, onclose, onerror, onmessage, url) {
      const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.epoxyclient_connect_tls(this.__wbg_ptr, addHeapObject(onopen), addHeapObject(onclose), addHeapObject(onerror), addHeapObject(onmessage), ptr0, len0);
      return takeObject(ret);
    }
    /**
    * @param {string} url
    * @param {object} options
    * @returns {Promise<Response>}
    */
    fetch(url, options) {
      const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.epoxyclient_fetch(this.__wbg_ptr, ptr0, len0, addHeapObject(options));
      return takeObject(ret);
    }
  }
  __exports.EpoxyClient = EpoxyClient2;
  const EpxTlsStreamFinalization = new FinalizationRegistry((ptr) => wasm.__wbg_epxtlsstream_free(ptr >>> 0));
  class EpxTlsStream {
    static __wrap(ptr) {
      ptr = ptr >>> 0;
      const obj = Object.create(EpxTlsStream.prototype);
      obj.__wbg_ptr = ptr;
      EpxTlsStreamFinalization.register(obj, obj.__wbg_ptr, obj);
      return obj;
    }
    toJSON() {
      return {
        url: this.url
      };
    }
    toString() {
      return JSON.stringify(this);
    }
    __destroy_into_raw() {
      const ptr = this.__wbg_ptr;
      this.__wbg_ptr = 0;
      EpxTlsStreamFinalization.unregister(this);
      return ptr;
    }
    free() {
      const ptr = this.__destroy_into_raw();
      wasm.__wbg_epxtlsstream_free(ptr);
    }
    /**
    * @returns {string}
    */
    get url() {
      try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.__wbg_get_epxtlsstream_url(retptr, this.__wbg_ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getCachedStringFromWasm0(r0, r1);
        if (r0 !== 0) {
          wasm.__wbindgen_free(r0, r1, 1);
        }
        return v1;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    */
    constructor() {
      try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.epxtlsstream_new(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
          throw takeObject(r1);
        }
        this.__wbg_ptr = r0 >>> 0;
        return this;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {EpoxyClient} tcp
    * @param {Function} onopen
    * @param {Function} onclose
    * @param {Function} onerror
    * @param {Function} onmessage
    * @param {string} url
    * @returns {Promise<EpxTlsStream>}
    */
    static connect(tcp, onopen, onclose, onerror, onmessage, url) {
      _assertClass(tcp, EpoxyClient2);
      const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.epxtlsstream_connect(tcp.__wbg_ptr, addHeapObject(onopen), addHeapObject(onclose), addHeapObject(onerror), addHeapObject(onmessage), ptr0, len0);
      return takeObject(ret);
    }
    /**
    * @param {Uint8Array} payload
    * @returns {Promise<void>}
    */
    send(payload) {
      const ret = wasm.epxtlsstream_send(this.__wbg_ptr, addHeapObject(payload));
      return takeObject(ret);
    }
    /**
    * @returns {Promise<void>}
    */
    close() {
      const ret = wasm.epxtlsstream_close(this.__wbg_ptr);
      return takeObject(ret);
    }
  }
  __exports.EpxTlsStream = EpxTlsStream;
  const EpxWebSocketFinalization = new FinalizationRegistry((ptr) => wasm.__wbg_epxwebsocket_free(ptr >>> 0));
  class EpxWebSocket {
    static __wrap(ptr) {
      ptr = ptr >>> 0;
      const obj = Object.create(EpxWebSocket.prototype);
      obj.__wbg_ptr = ptr;
      EpxWebSocketFinalization.register(obj, obj.__wbg_ptr, obj);
      return obj;
    }
    toJSON() {
      return {
        url: this.url,
        protocols: this.protocols,
        origin: this.origin
      };
    }
    toString() {
      return JSON.stringify(this);
    }
    __destroy_into_raw() {
      const ptr = this.__wbg_ptr;
      this.__wbg_ptr = 0;
      EpxWebSocketFinalization.unregister(this);
      return ptr;
    }
    free() {
      const ptr = this.__destroy_into_raw();
      wasm.__wbg_epxwebsocket_free(ptr);
    }
    /**
    * @returns {string}
    */
    get url() {
      try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.__wbg_get_epxwebsocket_url(retptr, this.__wbg_ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getCachedStringFromWasm0(r0, r1);
        if (r0 !== 0) {
          wasm.__wbindgen_free(r0, r1, 1);
        }
        return v1;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @returns {(string)[]}
    */
    get protocols() {
      try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.__wbg_get_epxwebsocket_protocols(retptr, this.__wbg_ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
        return v1;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @returns {string}
    */
    get origin() {
      try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.__wbg_get_epxwebsocket_origin(retptr, this.__wbg_ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getCachedStringFromWasm0(r0, r1);
        if (r0 !== 0) {
          wasm.__wbindgen_free(r0, r1, 1);
        }
        return v1;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    */
    constructor() {
      try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.epxwebsocket_new(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
          throw takeObject(r1);
        }
        this.__wbg_ptr = r0 >>> 0;
        return this;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {EpoxyClient} tcp
    * @param {Function} onopen
    * @param {Function} onclose
    * @param {Function} onerror
    * @param {Function} onmessage
    * @param {string} url
    * @param {(string)[]} protocols
    * @param {string} origin
    * @returns {Promise<EpxWebSocket>}
    */
    static connect(tcp, onopen, onclose, onerror, onmessage, url, protocols, origin) {
      _assertClass(tcp, EpoxyClient2);
      const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ptr1 = passArrayJsValueToWasm0(protocols, wasm.__wbindgen_malloc);
      const len1 = WASM_VECTOR_LEN;
      const ptr2 = passStringToWasm0(origin, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len2 = WASM_VECTOR_LEN;
      const ret = wasm.epxwebsocket_connect(tcp.__wbg_ptr, addHeapObject(onopen), addHeapObject(onclose), addHeapObject(onerror), addHeapObject(onmessage), ptr0, len0, ptr1, len1, ptr2, len2);
      return takeObject(ret);
    }
    /**
    * @param {string} payload
    * @returns {Promise<void>}
    */
    send(payload) {
      const ptr0 = passStringToWasm0(payload, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.epxwebsocket_send(this.__wbg_ptr, ptr0, len0);
      return takeObject(ret);
    }
    /**
    * @returns {Promise<void>}
    */
    close() {
      const ret = wasm.epxwebsocket_close(this.__wbg_ptr);
      return takeObject(ret);
    }
  }
  __exports.EpxWebSocket = EpxWebSocket;
  const IntoUnderlyingByteSourceFinalization = new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingbytesource_free(ptr >>> 0));
  class IntoUnderlyingByteSource {
    __destroy_into_raw() {
      const ptr = this.__wbg_ptr;
      this.__wbg_ptr = 0;
      IntoUnderlyingByteSourceFinalization.unregister(this);
      return ptr;
    }
    free() {
      const ptr = this.__destroy_into_raw();
      wasm.__wbg_intounderlyingbytesource_free(ptr);
    }
    /**
    * @returns {string}
    */
    get type() {
      try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.intounderlyingbytesource_type(retptr, this.__wbg_ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getCachedStringFromWasm0(r0, r1);
        if (r0 !== 0) {
          wasm.__wbindgen_free(r0, r1, 1);
        }
        return v1;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @returns {number}
    */
    get autoAllocateChunkSize() {
      const ret = wasm.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);
      return ret >>> 0;
    }
    /**
    * @param {ReadableByteStreamController} controller
    */
    start(controller) {
      wasm.intounderlyingbytesource_start(this.__wbg_ptr, addHeapObject(controller));
    }
    /**
    * @param {ReadableByteStreamController} controller
    * @returns {Promise<any>}
    */
    pull(controller) {
      const ret = wasm.intounderlyingbytesource_pull(this.__wbg_ptr, addHeapObject(controller));
      return takeObject(ret);
    }
    /**
    */
    cancel() {
      const ptr = this.__destroy_into_raw();
      wasm.intounderlyingbytesource_cancel(ptr);
    }
  }
  __exports.IntoUnderlyingByteSource = IntoUnderlyingByteSource;
  const IntoUnderlyingSinkFinalization = new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingsink_free(ptr >>> 0));
  class IntoUnderlyingSink {
    __destroy_into_raw() {
      const ptr = this.__wbg_ptr;
      this.__wbg_ptr = 0;
      IntoUnderlyingSinkFinalization.unregister(this);
      return ptr;
    }
    free() {
      const ptr = this.__destroy_into_raw();
      wasm.__wbg_intounderlyingsink_free(ptr);
    }
    /**
    * @param {any} chunk
    * @returns {Promise<any>}
    */
    write(chunk) {
      const ret = wasm.intounderlyingsink_write(this.__wbg_ptr, addHeapObject(chunk));
      return takeObject(ret);
    }
    /**
    * @returns {Promise<any>}
    */
    close() {
      const ptr = this.__destroy_into_raw();
      const ret = wasm.intounderlyingsink_close(ptr);
      return takeObject(ret);
    }
    /**
    * @param {any} reason
    * @returns {Promise<any>}
    */
    abort(reason) {
      const ptr = this.__destroy_into_raw();
      const ret = wasm.intounderlyingsink_abort(ptr, addHeapObject(reason));
      return takeObject(ret);
    }
  }
  __exports.IntoUnderlyingSink = IntoUnderlyingSink;
  const IntoUnderlyingSourceFinalization = new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingsource_free(ptr >>> 0));
  class IntoUnderlyingSource {
    static __wrap(ptr) {
      ptr = ptr >>> 0;
      const obj = Object.create(IntoUnderlyingSource.prototype);
      obj.__wbg_ptr = ptr;
      IntoUnderlyingSourceFinalization.register(obj, obj.__wbg_ptr, obj);
      return obj;
    }
    __destroy_into_raw() {
      const ptr = this.__wbg_ptr;
      this.__wbg_ptr = 0;
      IntoUnderlyingSourceFinalization.unregister(this);
      return ptr;
    }
    free() {
      const ptr = this.__destroy_into_raw();
      wasm.__wbg_intounderlyingsource_free(ptr);
    }
    /**
    * @param {ReadableStreamDefaultController} controller
    * @returns {Promise<any>}
    */
    pull(controller) {
      const ret = wasm.intounderlyingsource_pull(this.__wbg_ptr, addHeapObject(controller));
      return takeObject(ret);
    }
    /**
    */
    cancel() {
      const ptr = this.__destroy_into_raw();
      wasm.intounderlyingsource_cancel(ptr);
    }
  }
  __exports.IntoUnderlyingSource = IntoUnderlyingSource;
  async function __wbg_load(module2, imports) {
    if (typeof Response === "function" && module2 instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming === "function") {
        try {
          return await WebAssembly.instantiateStreaming(module2, imports);
        } catch (e) {
          if (module2.headers.get("Content-Type") != "application/wasm") {
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
          } else {
            throw e;
          }
        }
      }
      const bytes = await module2.arrayBuffer();
      return await WebAssembly.instantiate(bytes, imports);
    } else {
      const instance = await WebAssembly.instantiate(module2, imports);
      if (instance instanceof WebAssembly.Instance) {
        return { instance, module: module2 };
      } else {
        return instance;
      }
    }
  }
  function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
      const obj = getObject(arg1);
      const ret = typeof obj === "string" ? obj : void 0;
      var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getInt32Memory0()[arg0 / 4 + 1] = len1;
      getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbindgen_is_falsy = function(arg0) {
      const ret = !getObject(arg0);
      return ret;
    };
    imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
      const ret = new Error(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
      const ret = getStringFromWasm0(arg0, arg1);
      return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_string = function(arg0) {
      const ret = typeof getObject(arg0) === "string";
      return ret;
    };
    imports.wbg.__wbg_new_b1f2d6842d615181 = function(arg0) {
      const ret = new Uint8Array(getObject(arg0));
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_8b44f147a43d3a16 = function() {
      return handleError(function() {
        const ret = new TextEncoder();
        return addHeapObject(ret);
      }, arguments);
    };
    imports.wbg.__wbg_encode_b2d572f0c488deeb = function(arg0, arg1, arg2, arg3) {
      var v0 = getCachedStringFromWasm0(arg2, arg3);
      const ret = getObject(arg1).encode(v0);
      const ptr2 = passArray8ToWasm0(ret, wasm.__wbindgen_malloc);
      const len2 = WASM_VECTOR_LEN;
      getInt32Memory0()[arg0 / 4 + 1] = len2;
      getInt32Memory0()[arg0 / 4 + 0] = ptr2;
    };
    imports.wbg.__wbg_entries_488960b196cfb6a5 = function(arg0) {
      const ret = Object.entries(getObject(arg0));
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_75208e29bddfd88c = function() {
      const ret = new Array();
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_of_05f4b8612bdf970f = function(arg0, arg1) {
      const ret = Array.of(getObject(arg0), getObject(arg1));
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_push_0239ee92f127e807 = function(arg0, arg1) {
      const ret = getObject(arg0).push(getObject(arg1));
      return ret;
    };
    imports.wbg.__wbg_new_632630b5cec17f21 = function() {
      const ret = new Object();
      return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
      const ret = getObject(arg0);
      return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_number_new = function(arg0) {
      const ret = arg0;
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_sethighWaterMark_ea50ed3ec2143088 = function(arg0, arg1) {
      getObject(arg0).highWaterMark = arg1;
    };
    imports.wbg.__wbg_newwithintounderlyingsource_a03a82aa1bbbb292 = function(arg0, arg1) {
      const ret = new ReadableStream(IntoUnderlyingSource.__wrap(arg0), takeObject(arg1));
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithoptreadablestreamandinit_33de03b8aba0fea2 = function() {
      return handleError(function(arg0, arg1) {
        const ret = new Response(getObject(arg0), getObject(arg1));
        return addHeapObject(ret);
      }, arguments);
    };
    imports.wbg.__wbg_defineProperty_ab70902efd8595c0 = function(arg0, arg1, arg2) {
      const ret = Object.defineProperty(getObject(arg0), getObject(arg1), getObject(arg2));
      return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_array = function(arg0) {
      const ret = Array.isArray(getObject(arg0));
      return ret;
    };
    imports.wbg.__wbg_from_58c79ccfb68060f5 = function(arg0) {
      const ret = Array.from(getObject(arg0));
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithstrsequence_d6e5cea45952dbf2 = function() {
      return handleError(function(arg0, arg1, arg2) {
        var v0 = getCachedStringFromWasm0(arg0, arg1);
        const ret = new WebSocket(v0, getObject(arg2));
        return addHeapObject(ret);
      }, arguments);
    };
    imports.wbg.__wbg_new_bfaf72641458d8ec = function() {
      return handleError(function(arg0, arg1) {
        var v0 = getCachedStringFromWasm0(arg0, arg1);
        const ret = new WebSocket(v0);
        return addHeapObject(ret);
      }, arguments);
    };
    imports.wbg.__wbg_setbinaryType_0d9ce182e4788f87 = function(arg0, arg1) {
      getObject(arg0).binaryType = takeObject(arg1);
    };
    imports.wbg.__wbg_epoxyclient_new = function(arg0) {
      const ret = EpoxyClient2.__wrap(arg0);
      return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_cb_drop = function(arg0) {
      const obj = takeObject(arg0).original;
      if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
      }
      const ret = false;
      return ret;
    };
    imports.wbg.__wbg_epxtlsstream_new = function(arg0) {
      const ret = EpxTlsStream.__wrap(arg0);
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_epxwebsocket_new = function(arg0) {
      const ret = EpxWebSocket.__wrap(arg0);
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_close_fcf8af3a8d758756 = function() {
      return handleError(function(arg0) {
        getObject(arg0).close();
      }, arguments);
    };
    imports.wbg.__wbg_data_5d6c23170bc379b2 = function(arg0) {
      const ret = getObject(arg0).data;
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_instanceof_ArrayBuffer_9221fa854ffb71b5 = function(arg0) {
      let result;
      try {
        result = getObject(arg0) instanceof ArrayBuffer;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    };
    imports.wbg.__wbg_debug_53e350b80f35c43f = function(arg0, arg1) {
      var v0 = getCachedStringFromWasm0(arg0, arg1);
      console.debug(v0);
    };
    imports.wbg.__wbg_new_70828a4353259d4b = function(arg0, arg1) {
      try {
        var state0 = { a: arg0, b: arg1 };
        var cb0 = (arg02, arg12) => {
          const a = state0.a;
          state0.a = 0;
          try {
            return __wbg_adapter_139(a, state0.b, arg02, arg12);
          } finally {
            state0.a = a;
          }
        };
        const ret = new Promise(cb0);
        return addHeapObject(ret);
      } finally {
        state0.a = state0.b = 0;
      }
    };
    imports.wbg.__wbg_error_3c2554dec4374592 = function(arg0, arg1) {
      var v0 = getCachedStringFromWasm0(arg0, arg1);
      console.error(v0);
    };
    imports.wbg.__wbg_new_abda76e883ba8a5f = function() {
      const ret = new Error();
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_stack_658279fe44541cf6 = function(arg0, arg1) {
      const ret = getObject(arg1).stack;
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getInt32Memory0()[arg0 / 4 + 1] = len1;
      getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_error_f851667af71bcfc6 = function(arg0, arg1) {
      var v0 = getCachedStringFromWasm0(arg0, arg1);
      if (arg0 !== 0) {
        wasm.__wbindgen_free(arg0, arg1, 1);
      }
      console.error(v0);
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
      takeObject(arg0);
    };
    imports.wbg.__wbg_crypto_d05b68a3572bb8ca = function(arg0) {
      const ret = getObject(arg0).crypto;
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_process_b02b3570280d0366 = function(arg0) {
      const ret = getObject(arg0).process;
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_versions_c1cb42213cedf0f5 = function(arg0) {
      const ret = getObject(arg0).versions;
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_node_43b1089f407e4ec2 = function(arg0) {
      const ret = getObject(arg0).node;
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_require_9a7e0f667ead4995 = function() {
      return handleError(function() {
        const ret = module.require;
        return addHeapObject(ret);
      }, arguments);
    };
    imports.wbg.__wbindgen_is_function = function(arg0) {
      const ret = typeof getObject(arg0) === "function";
      return ret;
    };
    imports.wbg.__wbg_msCrypto_10fc94afee92bd76 = function(arg0) {
      const ret = getObject(arg0).msCrypto;
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithlength_0d03cef43b68a530 = function(arg0) {
      const ret = new Uint8Array(arg0 >>> 0);
      return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_object = function(arg0) {
      const val = getObject(arg0);
      const ret = typeof val === "object" && val !== null;
      return ret;
    };
    imports.wbg.__wbindgen_memory = function() {
      const ret = wasm.memory;
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_buffer_b914fb8b50ebbc3e = function(arg0) {
      const ret = getObject(arg0).buffer;
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithbyteoffsetandlength_0de9ee56e9f6ee6e = function(arg0, arg1, arg2) {
      const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_randomFillSync_b70ccbdf4926a99d = function() {
      return handleError(function(arg0, arg1) {
        getObject(arg0).randomFillSync(takeObject(arg1));
      }, arguments);
    };
    imports.wbg.__wbg_subarray_adc418253d76e2f1 = function(arg0, arg1, arg2) {
      const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_getRandomValues_7e42b4fb8779dc6d = function() {
      return handleError(function(arg0, arg1) {
        getObject(arg0).getRandomValues(getObject(arg1));
      }, arguments);
    };
    imports.wbg.__wbg_self_05040bd9523805b9 = function() {
      return handleError(function() {
        const ret = self.self;
        return addHeapObject(ret);
      }, arguments);
    };
    imports.wbg.__wbg_window_adc720039f2cb14f = function() {
      return handleError(function() {
        const ret = window.window;
        return addHeapObject(ret);
      }, arguments);
    };
    imports.wbg.__wbg_globalThis_622105db80c1457d = function() {
      return handleError(function() {
        const ret = globalThis.globalThis;
        return addHeapObject(ret);
      }, arguments);
    };
    imports.wbg.__wbg_global_f56b013ed9bcf359 = function() {
      return handleError(function() {
        const ret = global.global;
        return addHeapObject(ret);
      }, arguments);
    };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
      const ret = getObject(arg0) === void 0;
      return ret;
    };
    imports.wbg.__wbg_newnoargs_cfecb3965268594c = function(arg0, arg1) {
      var v0 = getCachedStringFromWasm0(arg0, arg1);
      const ret = new Function(v0);
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_3f093dd26d5569f8 = function() {
      return handleError(function(arg0, arg1) {
        const ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
      }, arguments);
    };
    imports.wbg.__wbg_length_161c0d89c6535c1d = function(arg0) {
      const ret = getObject(arg0).length;
      return ret;
    };
    imports.wbg.__wbg_get_0ee8ea3c7c984c45 = function(arg0, arg1) {
      const ret = getObject(arg0)[arg1 >>> 0];
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_get_3fddfed2c83f434c = function() {
      return handleError(function(arg0, arg1) {
        const ret = Reflect.get(getObject(arg0), getObject(arg1));
        return addHeapObject(ret);
      }, arguments);
    };
    imports.wbg.__wbg_call_67f2111acd2dfdb6 = function() {
      return handleError(function(arg0, arg1, arg2) {
        const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
      }, arguments);
    };
    imports.wbg.__wbg_fromEntries_2fac4024aa3f11d7 = function() {
      return handleError(function(arg0) {
        const ret = Object.fromEntries(getObject(arg0));
        return addHeapObject(ret);
      }, arguments);
    };
    imports.wbg.__wbg_set_961700853a212a39 = function() {
      return handleError(function(arg0, arg1, arg2) {
        const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
        return ret;
      }, arguments);
    };
    imports.wbg.__wbg_then_f9e58f5a50f43eae = function(arg0, arg1) {
      const ret = getObject(arg0).then(getObject(arg1));
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_7d988c98e6ced92d = function(arg0, arg1, arg2) {
      getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_length_21c4b0ae73cba59d = function(arg0) {
      const ret = getObject(arg0).length;
      return ret;
    };
    imports.wbg.__wbg_now_07662157b2ecb033 = typeof Date.now == "function" ? Date.now : notDefined("Date.now");
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
      const ret = debugString(getObject(arg1));
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getInt32Memory0()[arg0 / 4 + 1] = len1;
      getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_rethrow = function(arg0) {
      throw takeObject(arg0);
    };
    imports.wbg.__wbg_waitAsync_92219692955aa445 = function() {
      const ret = Atomics.waitAsync;
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_e4dd61c29af24331 = function(arg0) {
      const ret = new Int32Array(getObject(arg0));
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_waitAsync_ecc6bb0101f0b119 = function(arg0, arg1, arg2) {
      const ret = Atomics.waitAsync(getObject(arg0), arg1, arg2);
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_async_d412da4fadd37b75 = function(arg0) {
      const ret = getObject(arg0).async;
      return ret;
    };
    imports.wbg.__wbg_value_ceb95bfbc794ce19 = function(arg0) {
      const ret = getObject(arg0).value;
      return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_link_c83fa9fa3333cb90 = function(arg0) {
      const ret = "data:application/javascript," + encodeURIComponent(`onmessage = function (ev) {
        let [ia, index, value] = ev.data;
        ia = new Int32Array(ia.buffer);
        let result = Atomics.wait(ia, index, value);
        postMessage(result);
    };
    `);
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getInt32Memory0()[arg0 / 4 + 1] = len1;
      getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_new_d2c3fd9c317c9516 = function() {
      return handleError(function(arg0, arg1) {
        var v0 = getCachedStringFromWasm0(arg0, arg1);
        const ret = new Worker(v0);
        return addHeapObject(ret);
      }, arguments);
    };
    imports.wbg.__wbg_setonmessage_6e26d55e0916bb89 = function(arg0, arg1) {
      getObject(arg0).onmessage = getObject(arg1);
    };
    imports.wbg.__wbg_of_94ac9e20a3c46ec5 = function(arg0, arg1, arg2) {
      const ret = Array.of(getObject(arg0), getObject(arg1), getObject(arg2));
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_postMessage_5a62b3c8215b5a6e = function() {
      return handleError(function(arg0, arg1) {
        getObject(arg0).postMessage(getObject(arg1));
      }, arguments);
    };
    imports.wbg.__wbg_queueMicrotask_f82fc5d1e8f816ae = function(arg0) {
      const ret = getObject(arg0).queueMicrotask;
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_resolve_5da6faf2c96fd1d5 = function(arg0) {
      const ret = Promise.resolve(getObject(arg0));
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_queueMicrotask_f61ee94ee663068b = function(arg0) {
      queueMicrotask(getObject(arg0));
    };
    imports.wbg.__wbg_close_21d8fce01634cc74 = function() {
      return handleError(function(arg0) {
        getObject(arg0).close();
      }, arguments);
    };
    imports.wbg.__wbg_enqueue_61ebfae3475d5d91 = function() {
      return handleError(function(arg0, arg1) {
        getObject(arg0).enqueue(getObject(arg1));
      }, arguments);
    };
    imports.wbg.__wbg_byobRequest_004146c1db53bc14 = function(arg0) {
      const ret = getObject(arg0).byobRequest;
      return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_view_d7afa0120e493b2d = function(arg0) {
      const ret = getObject(arg0).view;
      return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_byteLength_4f4b58172d990c0a = function(arg0) {
      const ret = getObject(arg0).byteLength;
      return ret;
    };
    imports.wbg.__wbg_close_54a5b70c42a72ee3 = function() {
      return handleError(function(arg0) {
        getObject(arg0).close();
      }, arguments);
    };
    imports.wbg.__wbg_new_73a5987615ec8862 = function(arg0, arg1) {
      var v0 = getCachedStringFromWasm0(arg0, arg1);
      const ret = new Error(v0);
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_buffer_67e624f5a0ab2319 = function(arg0) {
      const ret = getObject(arg0).buffer;
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_byteOffset_adbd2a554609eb4e = function(arg0) {
      const ret = getObject(arg0).byteOffset;
      return ret;
    };
    imports.wbg.__wbg_setTimeout_fba1b48a90e30862 = function() {
      return handleError(function(arg0, arg1, arg2) {
        const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
        return ret;
      }, arguments);
    };
    imports.wbg.__wbg_performance_1430613edb72ce03 = function(arg0) {
      const ret = getObject(arg0).performance;
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_now_eab901b1d3b8a295 = function(arg0) {
      const ret = getObject(arg0).now();
      return ret;
    };
    imports.wbg.__wbg_respond_3233ecfa19b9b617 = function() {
      return handleError(function(arg0, arg1) {
        getObject(arg0).respond(arg1 >>> 0);
      }, arguments);
    };
    imports.wbg.__wbg_setonopen_04738360055ee4a5 = function(arg0, arg1) {
      getObject(arg0).onopen = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_7434a4dce811f083 = function(arg0, arg1) {
      getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbg_setonclose_dabb00f27f00be8f = function(arg0, arg1) {
      getObject(arg0).onclose = getObject(arg1);
    };
    imports.wbg.__wbg_setonmessage_4acb1c5c244f296d = function(arg0, arg1) {
      getObject(arg0).onmessage = getObject(arg1);
    };
    imports.wbg.__wbg_send_069a6e5ee1ec8535 = function() {
      return handleError(function(arg0, arg1, arg2) {
        getObject(arg0).send(new Uint8Array(getArrayU8FromWasm0(arg1, arg2)));
      }, arguments);
    };
    imports.wbg.__wbindgen_closure_wrapper459 = function(arg0, arg1, arg2) {
      const ret = makeClosure(arg0, arg1, 9, __wbg_adapter_36);
      return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper461 = function(arg0, arg1, arg2) {
      const ret = makeClosure(arg0, arg1, 9, __wbg_adapter_39);
      return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper3741 = function(arg0, arg1, arg2) {
      const ret = makeMutClosure(arg0, arg1, 9, __wbg_adapter_42);
      return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper3756 = function(arg0, arg1, arg2) {
      const ret = makeMutClosure(arg0, arg1, 9, __wbg_adapter_42);
      return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper3898 = function(arg0, arg1, arg2) {
      const ret = makeMutClosure(arg0, arg1, 9, __wbg_adapter_47);
      return addHeapObject(ret);
    };
    return imports;
  }
  function __wbg_init_memory(imports, maybe_memory) {
    imports.wbg.memory = maybe_memory || new WebAssembly.Memory({ initial: 23, maximum: 16384, shared: true });
  }
  function __wbg_finalize_init(instance, module2) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module2;
    cachedInt32Memory0 = null;
    cachedUint32Memory0 = null;
    cachedUint8Memory0 = null;
    wasm.__wbindgen_start();
    return wasm;
  }
  function initSync(module2, maybe_memory) {
    if (wasm !== void 0)
      return epoxy;
    const imports = __wbg_get_imports();
    __wbg_init_memory(imports, maybe_memory);
    if (!(module2 instanceof WebAssembly.Module)) {
      module2 = new WebAssembly.Module(module2);
    }
    const instance = new WebAssembly.Instance(module2, imports);
    __wbg_finalize_init(instance, module2);
    return epoxy;
  }
  async function __wbg_init(maybe_memory) {
    if (wasm !== void 0)
      return epoxy;
    if (typeof input === "undefined" && script_src !== "undefined") {
      input = script_src.replace(/\.js$/, "_bg.wasm");
    }
    const imports = __wbg_get_imports();
    if (typeof input === "string" || typeof Request === "function" && input instanceof Request || typeof URL === "function" && input instanceof URL) {
      input = fetch(input);
    }
    __wbg_init_memory(imports, maybe_memory);
    const { instance, module: module2 } = await __wbg_load(await input, imports);
    __wbg_finalize_init(instance, module2);
    return epoxy;
  }
  epoxy = Object.assign(__wbg_init, { initSync }, __exports);
})();
var epoxy_module_bundled_default = epoxy;

// src/main.ts
var EpoxyClient = class {
  canstart = true;
  epxclient = null;
  wisp;
  constructor({ wisp }) {
    this.wisp = wisp;
  }
  async init() {
    let { EpoxyClient: EpoxyClient2 } = await epoxy_module_bundled_default();
    this.epxclient = await new EpoxyClient2(this.wisp, navigator.userAgent, 10);
    this.ready = true;
  }
  ready = false;
  async meta() {
  }
  async request(remote, method, body, headers, signal) {
    if (body instanceof Blob)
      body = await body.arrayBuffer();
    let payload = await this.epxclient.fetch(remote.href, { method, body, headers, redirect: "manual" });
    return {
      body: payload.body,
      headers: payload.rawHeaders,
      status: payload.status,
      statusText: payload.statusText
    };
  }
  connect(url, origin, protocols, requestHeaders, onopen, onmessage, onclose, onerror) {
    let epsocket = this.epxclient.connect_ws(
      onopen,
      onclose,
      onerror,
      (data) => data instanceof Uint8Array ? onmessage(data.buffer) : onmessage(data),
      url.href,
      protocols,
      origin
    );
    return async (data) => {
      (await epsocket).send(data);
    };
  }
};
if (typeof module.exports == "object" && typeof exports == "object") {
  var __cp = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function") {
      for (let key of Object.getOwnPropertyNames(from)) {
        if (!Object.prototype.hasOwnProperty.call(to, key) && key !== except)
        Object.defineProperty(to, key, {
          get: () => from[key],
          enumerable: !(desc = Object.getOwnPropertyDescriptor(from, key)) || desc.enumerable,
        });
      }
    }
    return to;
  };
  module.exports = __cp(module.exports, exports);
}
return module.exports;
}))