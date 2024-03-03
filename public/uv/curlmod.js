(function (g, f) {
    if ("object" == typeof exports && "object" == typeof module) {
      module.exports = f(require('fs'), require('ws'), require('path'));
    } else if ("function" == typeof define && define.amd) {
      define("CurlMod", ['fs', 'ws', 'path'], f);
    } else if ("object" == typeof exports) {
      exports["CurlMod"] = f(require('fs'), require('ws'), require('path'));
    } else {
      g["CurlMod"] = f(g["fs"], g["ws"], g["path"]);
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
  LibcurlClient: () => LibcurlClient
});
module.exports = __toCommonJS(main_exports);

// ../node_modules/.pnpm/libcurl.js@0.3.8/node_modules/libcurl.js/libcurl.mjs
var libcurl = function() {
  var Module = typeof Module != "undefined" ? Module : {};
  var moduleOverrides = Object.assign({}, Module);
  var arguments_ = [];
  var thisProgram = "./this.program";
  var quit_ = (status, toThrow) => {
    throw toThrow;
  };
  var ENVIRONMENT_IS_WEB = typeof window == "object";
  var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
  var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
  var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
  if (Module["ENVIRONMENT"]) {
    throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
  }
  var scriptDirectory = "";
  function locateFile(path) {
    if (Module["locateFile"]) {
      return Module["locateFile"](path, scriptDirectory);
    }
    return scriptDirectory + path;
  }
  var read_, readAsync, readBinary, setWindowTitle;
  function logExceptionOnExit(e) {
    if (e instanceof ExitStatus)
      return;
    let toLog = e;
    if (e && typeof e == "object" && e.stack) {
      toLog = [e, e.stack];
    }
    err("exiting due to exception: " + toLog);
  }
  if (ENVIRONMENT_IS_SHELL) {
    if (typeof process == "object" && typeof require === "function" || typeof window == "object" || typeof importScripts == "function")
      throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
    if (typeof read != "undefined") {
      read_ = function shell_read(f) {
        return read(f);
      };
    }
    readBinary = function readBinary2(f) {
      let data;
      if (typeof readbuffer == "function") {
        return new Uint8Array(readbuffer(f));
      }
      data = read(f, "binary");
      assert(typeof data == "object");
      return data;
    };
    readAsync = function readAsync2(f, onload, onerror) {
      setTimeout(() => onload(readBinary(f)), 0);
    };
    if (typeof scriptArgs != "undefined") {
      arguments_ = scriptArgs;
    } else if (typeof arguments != "undefined") {
      arguments_ = arguments;
    }
    if (typeof quit == "function") {
      quit_ = (status, toThrow) => {
        if (runtimeKeepaliveCounter) {
          throw toThrow;
        }
        logExceptionOnExit(toThrow);
        quit(status);
      };
    }
    if (typeof print != "undefined") {
      if (typeof console == "undefined")
        console = {};
      console.log = print;
      console.warn = console.error = typeof printErr != "undefined" ? printErr : print;
    }
  } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    if (ENVIRONMENT_IS_WORKER) {
      scriptDirectory = self.location.href;
    } else if (typeof document != "undefined" && document.currentScript) {
      scriptDirectory = document.currentScript.src;
    }
    if (scriptDirectory.indexOf("blob:") !== 0) {
      scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
    } else {
      scriptDirectory = "";
    }
    if (!(typeof window == "object" || typeof importScripts == "function"))
      throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
    {
      read_ = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.send(null);
        return xhr.responseText;
      };
      if (ENVIRONMENT_IS_WORKER) {
        readBinary = (url) => {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.responseType = "arraybuffer";
          xhr.send(null);
          return new Uint8Array(xhr.response);
        };
      }
      readAsync = (url, onload, onerror) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";
        xhr.onload = () => {
          if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
            onload(xhr.response);
            return;
          }
          onerror();
        };
        xhr.onerror = onerror;
        xhr.send(null);
      };
    }
    setWindowTitle = (title) => document.title = title;
  } else {
    throw new Error("environment detection error");
  }
  var out = Module["print"] || console.log.bind(console);
  var err = Module["printErr"] || console.warn.bind(console);
  Object.assign(Module, moduleOverrides);
  moduleOverrides = null;
  checkIncomingModuleAPI();
  if (Module["arguments"])
    arguments_ = Module["arguments"];
  legacyModuleProp("arguments", "arguments_");
  if (Module["thisProgram"])
    thisProgram = Module["thisProgram"];
  legacyModuleProp("thisProgram", "thisProgram");
  if (Module["quit"])
    quit_ = Module["quit"];
  legacyModuleProp("quit", "quit_");
  assert(typeof Module["memoryInitializerPrefixURL"] == "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
  assert(typeof Module["pthreadMainPrefixURL"] == "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
  assert(typeof Module["cdInitializerPrefixURL"] == "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
  assert(typeof Module["filePackagePrefixURL"] == "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
  assert(typeof Module["read"] == "undefined", "Module.read option was removed (modify read_ in JS)");
  assert(typeof Module["readAsync"] == "undefined", "Module.readAsync option was removed (modify readAsync in JS)");
  assert(typeof Module["readBinary"] == "undefined", "Module.readBinary option was removed (modify readBinary in JS)");
  assert(typeof Module["setWindowTitle"] == "undefined", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
  assert(typeof Module["TOTAL_MEMORY"] == "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
  legacyModuleProp("read", "read_");
  legacyModuleProp("readAsync", "readAsync");
  legacyModuleProp("readBinary", "readBinary");
  legacyModuleProp("setWindowTitle", "setWindowTitle");
  assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add 'node' to `-s ENVIRONMENT` to enable.");
  assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-s ENVIRONMENT` to enable.");
  var POINTER_SIZE = 4;
  function warnOnce(text) {
    if (!warnOnce.shown)
      warnOnce.shown = {};
    if (!warnOnce.shown[text]) {
      warnOnce.shown[text] = 1;
      err(text);
    }
  }
  function convertJsFunctionToWasm(func, sig) {
    if (typeof WebAssembly.Function == "function") {
      var typeNames = { "i": "i32", "j": "i64", "f": "f32", "d": "f64" };
      var type = { parameters: [], results: sig[0] == "v" ? [] : [typeNames[sig[0]]] };
      for (var i = 1; i < sig.length; ++i) {
        type.parameters.push(typeNames[sig[i]]);
      }
      return new WebAssembly.Function(type, func);
    }
    var typeSection = [1, 0, 1, 96];
    var sigRet = sig.slice(0, 1);
    var sigParam = sig.slice(1);
    var typeCodes = { "i": 127, "j": 126, "f": 125, "d": 124 };
    typeSection.push(sigParam.length);
    for (var i = 0; i < sigParam.length; ++i) {
      typeSection.push(typeCodes[sigParam[i]]);
    }
    if (sigRet == "v") {
      typeSection.push(0);
    } else {
      typeSection = typeSection.concat([1, typeCodes[sigRet]]);
    }
    typeSection[1] = typeSection.length - 2;
    var bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(typeSection, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0]));
    var module2 = new WebAssembly.Module(bytes);
    var instance = new WebAssembly.Instance(module2, { "e": { "f": func } });
    var wrappedFunc = instance.exports["f"];
    return wrappedFunc;
  }
  var freeTableIndexes = [];
  var functionsInTableMap;
  function getEmptyTableSlot() {
    if (freeTableIndexes.length) {
      return freeTableIndexes.pop();
    }
    try {
      wasmTable.grow(1);
    } catch (err2) {
      if (!(err2 instanceof RangeError)) {
        throw err2;
      }
      throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
    }
    return wasmTable.length - 1;
  }
  function updateTableMap(offset, count) {
    for (var i = offset; i < offset + count; i++) {
      var item = getWasmTableEntry(i);
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  function addFunction(func, sig) {
    assert(typeof func != "undefined");
    if (!functionsInTableMap) {
      functionsInTableMap = /* @__PURE__ */ new WeakMap();
      updateTableMap(0, wasmTable.length);
    }
    if (functionsInTableMap.has(func)) {
      return functionsInTableMap.get(func);
    }
    var ret = getEmptyTableSlot();
    try {
      setWasmTableEntry(ret, func);
    } catch (err2) {
      if (!(err2 instanceof TypeError)) {
        throw err2;
      }
      assert(typeof sig != "undefined", "Missing signature argument to addFunction: " + func);
      var wrapped = convertJsFunctionToWasm(func, sig);
      setWasmTableEntry(ret, wrapped);
    }
    functionsInTableMap.set(func, ret);
    return ret;
  }
  function removeFunction(index) {
    functionsInTableMap.delete(getWasmTableEntry(index));
    freeTableIndexes.push(index);
  }
  function legacyModuleProp(prop, newName) {
    if (!Object.getOwnPropertyDescriptor(Module, prop)) {
      Object.defineProperty(Module, prop, { configurable: true, get: function() {
        abort("Module." + prop + " has been replaced with plain " + newName + " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
      } });
    }
  }
  function ignoredModuleProp(prop) {
    if (Object.getOwnPropertyDescriptor(Module, prop)) {
      abort("`Module." + prop + "` was supplied but `" + prop + "` not included in INCOMING_MODULE_JS_API");
    }
  }
  function unexportedMessage(sym, isFSSybol) {
    var msg = "'" + sym + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";
    if (isFSSybol) {
      msg += ". Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you";
    }
    return msg;
  }
  function unexportedRuntimeSymbol(sym, isFSSybol) {
    if (!Object.getOwnPropertyDescriptor(Module, sym)) {
      Object.defineProperty(Module, sym, { configurable: true, get: function() {
        abort(unexportedMessage(sym, isFSSybol));
      } });
    }
  }
  function unexportedRuntimeFunction(sym, isFSSybol) {
    if (!Object.getOwnPropertyDescriptor(Module, sym)) {
      Module[sym] = () => abort(unexportedMessage(sym, isFSSybol));
    }
  }
  var tempRet0 = 0;
  var setTempRet0 = (value) => {
    tempRet0 = value;
  };
  var getTempRet0 = () => tempRet0;
  var wasmBinary;
  if (Module["wasmBinary"])
    wasmBinary = Module["wasmBinary"];
  legacyModuleProp("wasmBinary", "wasmBinary");
  var noExitRuntime = Module["noExitRuntime"] || true;
  legacyModuleProp("noExitRuntime", "noExitRuntime");
  if (typeof WebAssembly != "object") {
    abort("no native wasm support detected");
  }
  var wasmMemory;
  var ABORT = false;
  var EXITSTATUS;
  function assert(condition, text) {
    if (!condition) {
      abort("Assertion failed" + (text ? ": " + text : ""));
    }
  }
  function getCFunc(ident) {
    var func = Module["_" + ident];
    assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
    return func;
  }
  function ccall(ident, returnType, argTypes, args, opts) {
    var toC = { "string": function(str) {
      var ret2 = 0;
      if (str !== null && str !== void 0 && str !== 0) {
        var len = (str.length << 2) + 1;
        ret2 = stackAlloc(len);
        stringToUTF8(str, ret2, len);
      }
      return ret2;
    }, "array": function(arr) {
      var ret2 = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret2);
      return ret2;
    } };
    function convertReturnValue(ret2) {
      if (returnType === "string")
        return UTF8ToString(ret2);
      if (returnType === "boolean")
        return Boolean(ret2);
      return ret2;
    }
    var func = getCFunc(ident);
    var cArgs = [];
    var stack = 0;
    assert(returnType !== "array", 'Return type should not be "array".');
    if (args) {
      for (var i = 0; i < args.length; i++) {
        var converter = toC[argTypes[i]];
        if (converter) {
          if (stack === 0)
            stack = stackSave();
          cArgs[i] = converter(args[i]);
        } else {
          cArgs[i] = args[i];
        }
      }
    }
    var ret = func.apply(null, cArgs);
    function onDone(ret2) {
      if (stack !== 0)
        stackRestore(stack);
      return convertReturnValue(ret2);
    }
    ret = onDone(ret);
    return ret;
  }
  var ALLOC_NORMAL = 0;
  var ALLOC_STACK = 1;
  function allocate(slab, allocator) {
    var ret;
    assert(typeof allocator == "number", "allocate no longer takes a type argument");
    assert(typeof slab != "number", "allocate no longer takes a number as arg0");
    if (allocator == ALLOC_STACK) {
      ret = stackAlloc(slab.length);
    } else {
      ret = _malloc(slab.length);
    }
    if (!slab.subarray && !slab.slice) {
      slab = new Uint8Array(slab);
    }
    HEAPU8.set(slab, ret);
    return ret;
  }
  var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
  function UTF8ArrayToString(heap, idx, maxBytesToRead) {
    var endIdx = idx + maxBytesToRead;
    var endPtr = idx;
    while (heap[endPtr] && !(endPtr >= endIdx))
      ++endPtr;
    if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
      return UTF8Decoder.decode(heap.subarray(idx, endPtr));
    } else {
      var str = "";
      while (idx < endPtr) {
        var u0 = heap[idx++];
        if (!(u0 & 128)) {
          str += String.fromCharCode(u0);
          continue;
        }
        var u1 = heap[idx++] & 63;
        if ((u0 & 224) == 192) {
          str += String.fromCharCode((u0 & 31) << 6 | u1);
          continue;
        }
        var u2 = heap[idx++] & 63;
        if ((u0 & 240) == 224) {
          u0 = (u0 & 15) << 12 | u1 << 6 | u2;
        } else {
          if ((u0 & 248) != 240)
            warnOnce("Invalid UTF-8 leading byte 0x" + u0.toString(16) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!");
          u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
        }
        if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        }
      }
    }
    return str;
  }
  function UTF8ToString(ptr, maxBytesToRead) {
    return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
  }
  function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
    if (!(maxBytesToWrite > 0))
      return 0;
    var startIdx = outIdx;
    var endIdx = outIdx + maxBytesToWrite - 1;
    for (var i = 0; i < str.length; ++i) {
      var u = str.charCodeAt(i);
      if (u >= 55296 && u <= 57343) {
        var u1 = str.charCodeAt(++i);
        u = 65536 + ((u & 1023) << 10) | u1 & 1023;
      }
      if (u <= 127) {
        if (outIdx >= endIdx)
          break;
        heap[outIdx++] = u;
      } else if (u <= 2047) {
        if (outIdx + 1 >= endIdx)
          break;
        heap[outIdx++] = 192 | u >> 6;
        heap[outIdx++] = 128 | u & 63;
      } else if (u <= 65535) {
        if (outIdx + 2 >= endIdx)
          break;
        heap[outIdx++] = 224 | u >> 12;
        heap[outIdx++] = 128 | u >> 6 & 63;
        heap[outIdx++] = 128 | u & 63;
      } else {
        if (outIdx + 3 >= endIdx)
          break;
        if (u > 1114111)
          warnOnce("Invalid Unicode code point 0x" + u.toString(16) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
        heap[outIdx++] = 240 | u >> 18;
        heap[outIdx++] = 128 | u >> 12 & 63;
        heap[outIdx++] = 128 | u >> 6 & 63;
        heap[outIdx++] = 128 | u & 63;
      }
    }
    heap[outIdx] = 0;
    return outIdx - startIdx;
  }
  function stringToUTF8(str, outPtr, maxBytesToWrite) {
    assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
    return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
  }
  function lengthBytesUTF8(str) {
    var len = 0;
    for (var i = 0; i < str.length; ++i) {
      var u = str.charCodeAt(i);
      if (u >= 55296 && u <= 57343)
        u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
      if (u <= 127)
        ++len;
      else if (u <= 2047)
        len += 2;
      else if (u <= 65535)
        len += 3;
      else
        len += 4;
    }
    return len;
  }
  var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0;
  function allocateUTF8(str) {
    var size = lengthBytesUTF8(str) + 1;
    var ret = _malloc(size);
    if (ret)
      stringToUTF8Array(str, HEAP8, ret, size);
    return ret;
  }
  function writeArrayToMemory(array, buffer2) {
    assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
    HEAP8.set(array, buffer2);
  }
  function writeAsciiToMemory(str, buffer2, dontAddNull) {
    for (var i = 0; i < str.length; ++i) {
      assert(str.charCodeAt(i) === (str.charCodeAt(i) & 255));
      HEAP8[buffer2++ >> 0] = str.charCodeAt(i);
    }
    if (!dontAddNull)
      HEAP8[buffer2 >> 0] = 0;
  }
  var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
  function updateGlobalBufferAndViews(buf) {
    buffer = buf;
    Module["HEAP8"] = HEAP8 = new Int8Array(buf);
    Module["HEAP16"] = HEAP16 = new Int16Array(buf);
    Module["HEAP32"] = HEAP32 = new Int32Array(buf);
    Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
    Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
    Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
    Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
    Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
  }
  var TOTAL_STACK = 5242880;
  if (Module["TOTAL_STACK"])
    assert(TOTAL_STACK === Module["TOTAL_STACK"], "the stack size can no longer be determined at runtime");
  var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
  legacyModuleProp("INITIAL_MEMORY", "INITIAL_MEMORY");
  assert(INITIAL_MEMORY >= TOTAL_STACK, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + INITIAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");
  assert(typeof Int32Array != "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray != void 0 && Int32Array.prototype.set != void 0, "JS engine does not provide full typed array support");
  assert(!Module["wasmMemory"], "Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally");
  assert(INITIAL_MEMORY == 16777216, "Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically");
  var wasmTable;
  function writeStackCookie() {
    var max = _emscripten_stack_get_end();
    assert((max & 3) == 0);
    HEAP32[max + 4 >> 2] = 34821223;
    HEAP32[max + 8 >> 2] = 2310721022;
    HEAP32[0] = 1668509029;
  }
  function checkStackCookie() {
    if (ABORT)
      return;
    var max = _emscripten_stack_get_end();
    var cookie1 = HEAPU32[max + 4 >> 2];
    var cookie2 = HEAPU32[max + 8 >> 2];
    if (cookie1 != 34821223 || cookie2 != 2310721022) {
      abort("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + cookie2.toString(16) + " 0x" + cookie1.toString(16));
    }
    if (HEAP32[0] !== 1668509029)
      abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
  }
  (function() {
    var h16 = new Int16Array(1);
    var h8 = new Int8Array(h16.buffer);
    h16[0] = 25459;
    if (h8[0] !== 115 || h8[1] !== 99)
      throw "Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)";
  })();
  var __ATPRERUN__ = [];
  var __ATINIT__ = [];
  var __ATPOSTRUN__ = [];
  var runtimeInitialized = false;
  var runtimeExited = false;
  var runtimeKeepaliveCounter = 0;
  function keepRuntimeAlive() {
    return noExitRuntime || runtimeKeepaliveCounter > 0;
  }
  function preRun() {
    if (Module["preRun"]) {
      if (typeof Module["preRun"] == "function")
        Module["preRun"] = [Module["preRun"]];
      while (Module["preRun"].length) {
        addOnPreRun(Module["preRun"].shift());
      }
    }
    callRuntimeCallbacks(__ATPRERUN__);
  }
  function initRuntime() {
    checkStackCookie();
    assert(!runtimeInitialized);
    runtimeInitialized = true;
    SOCKFS.root = FS.mount(SOCKFS, {}, null);
    if (!Module["noFSInit"] && !FS.init.initialized)
      FS.init();
    FS.ignorePermissions = false;
    TTY.init();
    PIPEFS.root = FS.mount(PIPEFS, {}, null);
    callRuntimeCallbacks(__ATINIT__);
  }
  function exitRuntime() {
    checkStackCookie();
    runtimeExited = true;
  }
  function postRun() {
    checkStackCookie();
    if (Module["postRun"]) {
      if (typeof Module["postRun"] == "function")
        Module["postRun"] = [Module["postRun"]];
      while (Module["postRun"].length) {
        addOnPostRun(Module["postRun"].shift());
      }
    }
    callRuntimeCallbacks(__ATPOSTRUN__);
  }
  function addOnPreRun(cb) {
    __ATPRERUN__.unshift(cb);
  }
  function addOnInit(cb) {
    __ATINIT__.unshift(cb);
  }
  function addOnPostRun(cb) {
    __ATPOSTRUN__.unshift(cb);
  }
  assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
  assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
  assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
  assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
  var runDependencies = 0;
  var runDependencyWatcher = null;
  var dependenciesFulfilled = null;
  var runDependencyTracking = {};
  function getUniqueRunDependency(id) {
    var orig = id;
    while (1) {
      if (!runDependencyTracking[id])
        return id;
      id = orig + Math.random();
    }
  }
  function addRunDependency(id) {
    runDependencies++;
    if (Module["monitorRunDependencies"]) {
      Module["monitorRunDependencies"](runDependencies);
    }
    if (id) {
      assert(!runDependencyTracking[id]);
      runDependencyTracking[id] = 1;
      if (runDependencyWatcher === null && typeof setInterval != "undefined") {
        runDependencyWatcher = setInterval(function() {
          if (ABORT) {
            clearInterval(runDependencyWatcher);
            runDependencyWatcher = null;
            return;
          }
          var shown = false;
          for (var dep in runDependencyTracking) {
            if (!shown) {
              shown = true;
              err("still waiting on run dependencies:");
            }
            err("dependency: " + dep);
          }
          if (shown) {
            err("(end of list)");
          }
        }, 1e4);
      }
    } else {
      err("warning: run dependency added without ID");
    }
  }
  function removeRunDependency(id) {
    runDependencies--;
    if (Module["monitorRunDependencies"]) {
      Module["monitorRunDependencies"](runDependencies);
    }
    if (id) {
      assert(runDependencyTracking[id]);
      delete runDependencyTracking[id];
    } else {
      err("warning: run dependency removed without ID");
    }
    if (runDependencies == 0) {
      if (runDependencyWatcher !== null) {
        clearInterval(runDependencyWatcher);
        runDependencyWatcher = null;
      }
      if (dependenciesFulfilled) {
        var callback = dependenciesFulfilled;
        dependenciesFulfilled = null;
        callback();
      }
    }
  }
  Module["preloadedImages"] = {};
  Module["preloadedAudios"] = {};
  function abort(what) {
    {
      if (Module["onAbort"]) {
        Module["onAbort"](what);
      }
    }
    what = "Aborted(" + what + ")";
    err(what);
    ABORT = true;
    EXITSTATUS = 1;
    var e = new WebAssembly.RuntimeError(what);
    throw e;
  }
  var dataURIPrefix = "data:application/octet-stream;base64,";
  function isDataURI(filename) {
    return filename.startsWith(dataURIPrefix);
  }
  function isFileURI(filename) {
    return filename.startsWith("file://");
  }
  function createExportWrapper(name, fixedasm) {
    return function() {
      var displayName = name;
      var asm2 = fixedasm;
      if (!fixedasm) {
        asm2 = Module["asm"];
      }
      assert(runtimeInitialized, "native function `" + displayName + "` called before runtime initialization");
      assert(!runtimeExited, "native function `" + displayName + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      if (!asm2[name]) {
        assert(asm2[name], "exported native function `" + displayName + "` not found");
      }
      return asm2[name].apply(null, arguments);
    };
  }
  var wasmBinaryFile;
  wasmBinaryFile = "emscripten_compiled.wasm";
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }
  function getBinary(file) {
    try {
      if (file == wasmBinaryFile && wasmBinary) {
        return new Uint8Array(wasmBinary);
      }
      if (readBinary) {
        return readBinary(file);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    } catch (err2) {
      abort(err2);
    }
  }
  function getBinaryPromise() {
    if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
      if (typeof fetch == "function") {
        return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
          if (!response["ok"]) {
            throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
          }
          return response["arrayBuffer"]();
        }).catch(function() {
          return getBinary(wasmBinaryFile);
        });
      }
    }
    return Promise.resolve().then(function() {
      return getBinary(wasmBinaryFile);
    });
  }
  function createWasm() {
    var info = { "env": asmLibraryArg, "wasi_snapshot_preview1": asmLibraryArg };
    function receiveInstance(instance, module2) {
      var exports2 = instance.exports;
      Module["asm"] = exports2;
      wasmMemory = Module["asm"]["memory"];
      assert(wasmMemory, "memory not found in wasm exports");
      updateGlobalBufferAndViews(wasmMemory.buffer);
      wasmTable = Module["asm"]["__indirect_function_table"];
      assert(wasmTable, "table not found in wasm exports");
      addOnInit(Module["asm"]["__wasm_call_ctors"]);
      removeRunDependency("wasm-instantiate");
    }
    addRunDependency("wasm-instantiate");
    var trueModule = Module;
    function receiveInstantiationResult(result) {
      assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
      trueModule = null;
      receiveInstance(result["instance"]);
    }
    function instantiateArrayBuffer(receiver) {
      return getBinaryPromise().then(function(binary) {
        return WebAssembly.instantiate(binary, info);
      }).then(function(instance) {
        return instance;
      }).then(receiver, function(reason) {
        err("failed to asynchronously prepare wasm: " + reason);
        if (isFileURI(wasmBinaryFile)) {
          err("warning: Loading from a file URI (" + wasmBinaryFile + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing");
        }
        abort(reason);
      });
    }
    function instantiateAsync() {
      if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && typeof fetch == "function") {
        return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
          var result = WebAssembly.instantiateStreaming(response, info);
          return result.then(receiveInstantiationResult, function(reason) {
            err("wasm streaming compile failed: " + reason);
            err("falling back to ArrayBuffer instantiation");
            return instantiateArrayBuffer(receiveInstantiationResult);
          });
        });
      } else {
        return instantiateArrayBuffer(receiveInstantiationResult);
      }
    }
    if (Module["instantiateWasm"]) {
      try {
        var exports = Module["instantiateWasm"](info, receiveInstance);
        return exports;
      } catch (e) {
        err("Module.instantiateWasm callback failed with error: " + e);
        return false;
      }
    }
    instantiateAsync();
    return {};
  }
  var tempDouble;
  var tempI64;
  function callRuntimeCallbacks(callbacks) {
    while (callbacks.length > 0) {
      var callback = callbacks.shift();
      if (typeof callback == "function") {
        callback(Module);
        continue;
      }
      var func = callback.func;
      if (typeof func == "number") {
        if (callback.arg === void 0) {
          getWasmTableEntry(func)();
        } else {
          getWasmTableEntry(func)(callback.arg);
        }
      } else {
        func(callback.arg === void 0 ? null : callback.arg);
      }
    }
  }
  function demangle(func) {
    warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
    return func;
  }
  function demangleAll(text) {
    var regex = /\b_Z[\w\d_]+/g;
    return text.replace(regex, function(x) {
      var y = demangle(x);
      return x === y ? x : y + " [" + x + "]";
    });
  }
  function getWasmTableEntry(funcPtr) {
    return wasmTable.get(funcPtr);
  }
  function handleException(e) {
    if (e instanceof ExitStatus || e == "unwind") {
      return EXITSTATUS;
    }
    quit_(1, e);
  }
  function jsStackTrace() {
    var error = new Error();
    if (!error.stack) {
      try {
        throw new Error();
      } catch (e) {
        error = e;
      }
      if (!error.stack) {
        return "(no stack trace available)";
      }
    }
    return error.stack.toString();
  }
  function setWasmTableEntry(idx, func) {
    wasmTable.set(idx, func);
  }
  function ___assert_fail(condition, filename, line, func) {
    abort("Assertion failed: " + UTF8ToString(condition) + ", at: " + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"]);
  }
  function ___call_sighandler(fp, sig) {
    getWasmTableEntry(fp)(sig);
  }
  function getRandomDevice() {
    if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
      var randomBuffer = new Uint8Array(1);
      return function() {
        crypto.getRandomValues(randomBuffer);
        return randomBuffer[0];
      };
    } else
      return function() {
        abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
      };
  }
  var PATH = { splitPath: function(filename) {
    var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    return splitPathRe.exec(filename).slice(1);
  }, normalizeArray: function(parts, allowAboveRoot) {
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
      var last = parts[i];
      if (last === ".") {
        parts.splice(i, 1);
      } else if (last === "..") {
        parts.splice(i, 1);
        up++;
      } else if (up) {
        parts.splice(i, 1);
        up--;
      }
    }
    if (allowAboveRoot) {
      for (; up; up--) {
        parts.unshift("..");
      }
    }
    return parts;
  }, normalize: function(path) {
    var isAbsolute = path.charAt(0) === "/", trailingSlash = path.substr(-1) === "/";
    path = PATH.normalizeArray(path.split("/").filter(function(p) {
      return !!p;
    }), !isAbsolute).join("/");
    if (!path && !isAbsolute) {
      path = ".";
    }
    if (path && trailingSlash) {
      path += "/";
    }
    return (isAbsolute ? "/" : "") + path;
  }, dirname: function(path) {
    var result = PATH.splitPath(path), root = result[0], dir = result[1];
    if (!root && !dir) {
      return ".";
    }
    if (dir) {
      dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
  }, basename: function(path) {
    if (path === "/")
      return "/";
    path = PATH.normalize(path);
    path = path.replace(/\/$/, "");
    var lastSlash = path.lastIndexOf("/");
    if (lastSlash === -1)
      return path;
    return path.substr(lastSlash + 1);
  }, extname: function(path) {
    return PATH.splitPath(path)[3];
  }, join: function() {
    var paths = Array.prototype.slice.call(arguments, 0);
    return PATH.normalize(paths.join("/"));
  }, join2: function(l, r) {
    return PATH.normalize(l + "/" + r);
  } };
  var PATH_FS = { resolve: function() {
    var resolvedPath = "", resolvedAbsolute = false;
    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = i >= 0 ? arguments[i] : FS.cwd();
      if (typeof path != "string") {
        throw new TypeError("Arguments to path.resolve must be strings");
      } else if (!path) {
        return "";
      }
      resolvedPath = path + "/" + resolvedPath;
      resolvedAbsolute = path.charAt(0) === "/";
    }
    resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(function(p) {
      return !!p;
    }), !resolvedAbsolute).join("/");
    return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
  }, relative: function(from, to) {
    from = PATH_FS.resolve(from).substr(1);
    to = PATH_FS.resolve(to).substr(1);
    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== "")
          break;
      }
      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== "")
          break;
      }
      if (start > end)
        return [];
      return arr.slice(start, end - start + 1);
    }
    var fromParts = trim(from.split("/"));
    var toParts = trim(to.split("/"));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push("..");
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join("/");
  } };
  var TTY = { ttys: [], init: function() {
  }, shutdown: function() {
  }, register: function(dev, ops) {
    TTY.ttys[dev] = { input: [], output: [], ops };
    FS.registerDevice(dev, TTY.stream_ops);
  }, stream_ops: { open: function(stream) {
    var tty = TTY.ttys[stream.node.rdev];
    if (!tty) {
      throw new FS.ErrnoError(43);
    }
    stream.tty = tty;
    stream.seekable = false;
  }, close: function(stream) {
    stream.tty.ops.flush(stream.tty);
  }, flush: function(stream) {
    stream.tty.ops.flush(stream.tty);
  }, read: function(stream, buffer2, offset, length, pos) {
    if (!stream.tty || !stream.tty.ops.get_char) {
      throw new FS.ErrnoError(60);
    }
    var bytesRead = 0;
    for (var i = 0; i < length; i++) {
      var result;
      try {
        result = stream.tty.ops.get_char(stream.tty);
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
      if (result === void 0 && bytesRead === 0) {
        throw new FS.ErrnoError(6);
      }
      if (result === null || result === void 0)
        break;
      bytesRead++;
      buffer2[offset + i] = result;
    }
    if (bytesRead) {
      stream.node.timestamp = Date.now();
    }
    return bytesRead;
  }, write: function(stream, buffer2, offset, length, pos) {
    if (!stream.tty || !stream.tty.ops.put_char) {
      throw new FS.ErrnoError(60);
    }
    try {
      for (var i = 0; i < length; i++) {
        stream.tty.ops.put_char(stream.tty, buffer2[offset + i]);
      }
    } catch (e) {
      throw new FS.ErrnoError(29);
    }
    if (length) {
      stream.node.timestamp = Date.now();
    }
    return i;
  } }, default_tty_ops: { get_char: function(tty) {
    if (!tty.input.length) {
      var result = null;
      if (typeof window != "undefined" && typeof window.prompt == "function") {
        result = window.prompt("Input: ");
        if (result !== null) {
          result += "\n";
        }
      } else if (typeof readline == "function") {
        result = readline();
        if (result !== null) {
          result += "\n";
        }
      }
      if (!result) {
        return null;
      }
      tty.input = intArrayFromString(result, true);
    }
    return tty.input.shift();
  }, put_char: function(tty, val) {
    if (val === null || val === 10) {
      out(UTF8ArrayToString(tty.output, 0));
      tty.output = [];
    } else {
      if (val != 0)
        tty.output.push(val);
    }
  }, flush: function(tty) {
    if (tty.output && tty.output.length > 0) {
      out(UTF8ArrayToString(tty.output, 0));
      tty.output = [];
    }
  } }, default_tty1_ops: { put_char: function(tty, val) {
    if (val === null || val === 10) {
      err(UTF8ArrayToString(tty.output, 0));
      tty.output = [];
    } else {
      if (val != 0)
        tty.output.push(val);
    }
  }, flush: function(tty) {
    if (tty.output && tty.output.length > 0) {
      err(UTF8ArrayToString(tty.output, 0));
      tty.output = [];
    }
  } } };
  function zeroMemory(address, size) {
    HEAPU8.fill(0, address, address + size);
  }
  function alignMemory(size, alignment) {
    assert(alignment, "alignment argument is required");
    return Math.ceil(size / alignment) * alignment;
  }
  function mmapAlloc(size) {
    size = alignMemory(size, 65536);
    var ptr = _emscripten_builtin_memalign(65536, size);
    if (!ptr)
      return 0;
    zeroMemory(ptr, size);
    return ptr;
  }
  var MEMFS = { ops_table: null, mount: function(mount) {
    return MEMFS.createNode(null, "/", 16384 | 511, 0);
  }, createNode: function(parent, name, mode, dev) {
    if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
      throw new FS.ErrnoError(63);
    }
    if (!MEMFS.ops_table) {
      MEMFS.ops_table = { dir: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, lookup: MEMFS.node_ops.lookup, mknod: MEMFS.node_ops.mknod, rename: MEMFS.node_ops.rename, unlink: MEMFS.node_ops.unlink, rmdir: MEMFS.node_ops.rmdir, readdir: MEMFS.node_ops.readdir, symlink: MEMFS.node_ops.symlink }, stream: { llseek: MEMFS.stream_ops.llseek } }, file: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: { llseek: MEMFS.stream_ops.llseek, read: MEMFS.stream_ops.read, write: MEMFS.stream_ops.write, allocate: MEMFS.stream_ops.allocate, mmap: MEMFS.stream_ops.mmap, msync: MEMFS.stream_ops.msync } }, link: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, readlink: MEMFS.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: FS.chrdev_stream_ops } };
    }
    var node = FS.createNode(parent, name, mode, dev);
    if (FS.isDir(node.mode)) {
      node.node_ops = MEMFS.ops_table.dir.node;
      node.stream_ops = MEMFS.ops_table.dir.stream;
      node.contents = {};
    } else if (FS.isFile(node.mode)) {
      node.node_ops = MEMFS.ops_table.file.node;
      node.stream_ops = MEMFS.ops_table.file.stream;
      node.usedBytes = 0;
      node.contents = null;
    } else if (FS.isLink(node.mode)) {
      node.node_ops = MEMFS.ops_table.link.node;
      node.stream_ops = MEMFS.ops_table.link.stream;
    } else if (FS.isChrdev(node.mode)) {
      node.node_ops = MEMFS.ops_table.chrdev.node;
      node.stream_ops = MEMFS.ops_table.chrdev.stream;
    }
    node.timestamp = Date.now();
    if (parent) {
      parent.contents[name] = node;
      parent.timestamp = node.timestamp;
    }
    return node;
  }, getFileDataAsTypedArray: function(node) {
    if (!node.contents)
      return new Uint8Array(0);
    if (node.contents.subarray)
      return node.contents.subarray(0, node.usedBytes);
    return new Uint8Array(node.contents);
  }, expandFileStorage: function(node, newCapacity) {
    var prevCapacity = node.contents ? node.contents.length : 0;
    if (prevCapacity >= newCapacity)
      return;
    var CAPACITY_DOUBLING_MAX = 1024 * 1024;
    newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
    if (prevCapacity != 0)
      newCapacity = Math.max(newCapacity, 256);
    var oldContents = node.contents;
    node.contents = new Uint8Array(newCapacity);
    if (node.usedBytes > 0)
      node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
  }, resizeFileStorage: function(node, newSize) {
    if (node.usedBytes == newSize)
      return;
    if (newSize == 0) {
      node.contents = null;
      node.usedBytes = 0;
    } else {
      var oldContents = node.contents;
      node.contents = new Uint8Array(newSize);
      if (oldContents) {
        node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
      }
      node.usedBytes = newSize;
    }
  }, node_ops: { getattr: function(node) {
    var attr = {};
    attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
    attr.ino = node.id;
    attr.mode = node.mode;
    attr.nlink = 1;
    attr.uid = 0;
    attr.gid = 0;
    attr.rdev = node.rdev;
    if (FS.isDir(node.mode)) {
      attr.size = 4096;
    } else if (FS.isFile(node.mode)) {
      attr.size = node.usedBytes;
    } else if (FS.isLink(node.mode)) {
      attr.size = node.link.length;
    } else {
      attr.size = 0;
    }
    attr.atime = new Date(node.timestamp);
    attr.mtime = new Date(node.timestamp);
    attr.ctime = new Date(node.timestamp);
    attr.blksize = 4096;
    attr.blocks = Math.ceil(attr.size / attr.blksize);
    return attr;
  }, setattr: function(node, attr) {
    if (attr.mode !== void 0) {
      node.mode = attr.mode;
    }
    if (attr.timestamp !== void 0) {
      node.timestamp = attr.timestamp;
    }
    if (attr.size !== void 0) {
      MEMFS.resizeFileStorage(node, attr.size);
    }
  }, lookup: function(parent, name) {
    throw FS.genericErrors[44];
  }, mknod: function(parent, name, mode, dev) {
    return MEMFS.createNode(parent, name, mode, dev);
  }, rename: function(old_node, new_dir, new_name) {
    if (FS.isDir(old_node.mode)) {
      var new_node;
      try {
        new_node = FS.lookupNode(new_dir, new_name);
      } catch (e) {
      }
      if (new_node) {
        for (var i in new_node.contents) {
          throw new FS.ErrnoError(55);
        }
      }
    }
    delete old_node.parent.contents[old_node.name];
    old_node.parent.timestamp = Date.now();
    old_node.name = new_name;
    new_dir.contents[new_name] = old_node;
    new_dir.timestamp = old_node.parent.timestamp;
    old_node.parent = new_dir;
  }, unlink: function(parent, name) {
    delete parent.contents[name];
    parent.timestamp = Date.now();
  }, rmdir: function(parent, name) {
    var node = FS.lookupNode(parent, name);
    for (var i in node.contents) {
      throw new FS.ErrnoError(55);
    }
    delete parent.contents[name];
    parent.timestamp = Date.now();
  }, readdir: function(node) {
    var entries = [".", ".."];
    for (var key in node.contents) {
      if (!node.contents.hasOwnProperty(key)) {
        continue;
      }
      entries.push(key);
    }
    return entries;
  }, symlink: function(parent, newname, oldpath) {
    var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
    node.link = oldpath;
    return node;
  }, readlink: function(node) {
    if (!FS.isLink(node.mode)) {
      throw new FS.ErrnoError(28);
    }
    return node.link;
  } }, stream_ops: { read: function(stream, buffer2, offset, length, position) {
    var contents = stream.node.contents;
    if (position >= stream.node.usedBytes)
      return 0;
    var size = Math.min(stream.node.usedBytes - position, length);
    assert(size >= 0);
    if (size > 8 && contents.subarray) {
      buffer2.set(contents.subarray(position, position + size), offset);
    } else {
      for (var i = 0; i < size; i++)
        buffer2[offset + i] = contents[position + i];
    }
    return size;
  }, write: function(stream, buffer2, offset, length, position, canOwn) {
    assert(!(buffer2 instanceof ArrayBuffer));
    if (buffer2.buffer === HEAP8.buffer) {
      canOwn = false;
    }
    if (!length)
      return 0;
    var node = stream.node;
    node.timestamp = Date.now();
    if (buffer2.subarray && (!node.contents || node.contents.subarray)) {
      if (canOwn) {
        assert(position === 0, "canOwn must imply no weird position inside the file");
        node.contents = buffer2.subarray(offset, offset + length);
        node.usedBytes = length;
        return length;
      } else if (node.usedBytes === 0 && position === 0) {
        node.contents = buffer2.slice(offset, offset + length);
        node.usedBytes = length;
        return length;
      } else if (position + length <= node.usedBytes) {
        node.contents.set(buffer2.subarray(offset, offset + length), position);
        return length;
      }
    }
    MEMFS.expandFileStorage(node, position + length);
    if (node.contents.subarray && buffer2.subarray) {
      node.contents.set(buffer2.subarray(offset, offset + length), position);
    } else {
      for (var i = 0; i < length; i++) {
        node.contents[position + i] = buffer2[offset + i];
      }
    }
    node.usedBytes = Math.max(node.usedBytes, position + length);
    return length;
  }, llseek: function(stream, offset, whence) {
    var position = offset;
    if (whence === 1) {
      position += stream.position;
    } else if (whence === 2) {
      if (FS.isFile(stream.node.mode)) {
        position += stream.node.usedBytes;
      }
    }
    if (position < 0) {
      throw new FS.ErrnoError(28);
    }
    return position;
  }, allocate: function(stream, offset, length) {
    MEMFS.expandFileStorage(stream.node, offset + length);
    stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
  }, mmap: function(stream, address, length, position, prot, flags) {
    if (address !== 0) {
      throw new FS.ErrnoError(28);
    }
    if (!FS.isFile(stream.node.mode)) {
      throw new FS.ErrnoError(43);
    }
    var ptr;
    var allocated;
    var contents = stream.node.contents;
    if (!(flags & 2) && contents.buffer === buffer) {
      allocated = false;
      ptr = contents.byteOffset;
    } else {
      if (position > 0 || position + length < contents.length) {
        if (contents.subarray) {
          contents = contents.subarray(position, position + length);
        } else {
          contents = Array.prototype.slice.call(contents, position, position + length);
        }
      }
      allocated = true;
      ptr = mmapAlloc(length);
      if (!ptr) {
        throw new FS.ErrnoError(48);
      }
      HEAP8.set(contents, ptr);
    }
    return { ptr, allocated };
  }, msync: function(stream, buffer2, offset, length, mmapFlags) {
    if (!FS.isFile(stream.node.mode)) {
      throw new FS.ErrnoError(43);
    }
    if (mmapFlags & 2) {
      return 0;
    }
    var bytesWritten = MEMFS.stream_ops.write(stream, buffer2, 0, length, offset, false);
    return 0;
  } } };
  function asyncLoad(url, onload, onerror, noRunDep) {
    var dep = !noRunDep ? getUniqueRunDependency("al " + url) : "";
    readAsync(url, function(arrayBuffer) {
      assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
      onload(new Uint8Array(arrayBuffer));
      if (dep)
        removeRunDependency(dep);
    }, function(event) {
      if (onerror) {
        onerror();
      } else {
        throw 'Loading data file "' + url + '" failed.';
      }
    });
    if (dep)
      addRunDependency(dep);
  }
  var ERRNO_MESSAGES = { 0: "Success", 1: "Arg list too long", 2: "Permission denied", 3: "Address already in use", 4: "Address not available", 5: "Address family not supported by protocol family", 6: "No more processes", 7: "Socket already connected", 8: "Bad file number", 9: "Trying to read unreadable message", 10: "Mount device busy", 11: "Operation canceled", 12: "No children", 13: "Connection aborted", 14: "Connection refused", 15: "Connection reset by peer", 16: "File locking deadlock error", 17: "Destination address required", 18: "Math arg out of domain of func", 19: "Quota exceeded", 20: "File exists", 21: "Bad address", 22: "File too large", 23: "Host is unreachable", 24: "Identifier removed", 25: "Illegal byte sequence", 26: "Connection already in progress", 27: "Interrupted system call", 28: "Invalid argument", 29: "I/O error", 30: "Socket is already connected", 31: "Is a directory", 32: "Too many symbolic links", 33: "Too many open files", 34: "Too many links", 35: "Message too long", 36: "Multihop attempted", 37: "File or path name too long", 38: "Network interface is not configured", 39: "Connection reset by network", 40: "Network is unreachable", 41: "Too many open files in system", 42: "No buffer space available", 43: "No such device", 44: "No such file or directory", 45: "Exec format error", 46: "No record locks available", 47: "The link has been severed", 48: "Not enough core", 49: "No message of desired type", 50: "Protocol not available", 51: "No space left on device", 52: "Function not implemented", 53: "Socket is not connected", 54: "Not a directory", 55: "Directory not empty", 56: "State not recoverable", 57: "Socket operation on non-socket", 59: "Not a typewriter", 60: "No such device or address", 61: "Value too large for defined data type", 62: "Previous owner died", 63: "Not super-user", 64: "Broken pipe", 65: "Protocol error", 66: "Unknown protocol", 67: "Protocol wrong type for socket", 68: "Math result not representable", 69: "Read only file system", 70: "Illegal seek", 71: "No such process", 72: "Stale file handle", 73: "Connection timed out", 74: "Text file busy", 75: "Cross-device link", 100: "Device not a stream", 101: "Bad font file fmt", 102: "Invalid slot", 103: "Invalid request code", 104: "No anode", 105: "Block device required", 106: "Channel number out of range", 107: "Level 3 halted", 108: "Level 3 reset", 109: "Link number out of range", 110: "Protocol driver not attached", 111: "No CSI structure available", 112: "Level 2 halted", 113: "Invalid exchange", 114: "Invalid request descriptor", 115: "Exchange full", 116: "No data (for no delay io)", 117: "Timer expired", 118: "Out of streams resources", 119: "Machine is not on the network", 120: "Package not installed", 121: "The object is remote", 122: "Advertise error", 123: "Srmount error", 124: "Communication error on send", 125: "Cross mount point (not really error)", 126: "Given log. name not unique", 127: "f.d. invalid for this operation", 128: "Remote address changed", 129: "Can   access a needed shared lib", 130: "Accessing a corrupted shared lib", 131: ".lib section in a.out corrupted", 132: "Attempting to link in too many libs", 133: "Attempting to exec a shared library", 135: "Streams pipe error", 136: "Too many users", 137: "Socket type not supported", 138: "Not supported", 139: "Protocol family not supported", 140: "Can't send after socket shutdown", 141: "Too many references", 142: "Host is down", 148: "No medium (in tape drive)", 156: "Level 2 not synchronized" };
  var ERRNO_CODES = {};
  var FS = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath: (path, opts = {}) => {
    path = PATH_FS.resolve(FS.cwd(), path);
    if (!path)
      return { path: "", node: null };
    var defaults = { follow_mount: true, recurse_count: 0 };
    for (var key in defaults) {
      if (opts[key] === void 0) {
        opts[key] = defaults[key];
      }
    }
    if (opts.recurse_count > 8) {
      throw new FS.ErrnoError(32);
    }
    var parts = PATH.normalizeArray(path.split("/").filter((p) => !!p), false);
    var current = FS.root;
    var current_path = "/";
    for (var i = 0; i < parts.length; i++) {
      var islast = i === parts.length - 1;
      if (islast && opts.parent) {
        break;
      }
      current = FS.lookupNode(current, parts[i]);
      current_path = PATH.join2(current_path, parts[i]);
      if (FS.isMountpoint(current)) {
        if (!islast || islast && opts.follow_mount) {
          current = current.mounted.root;
        }
      }
      if (!islast || opts.follow) {
        var count = 0;
        while (FS.isLink(current.mode)) {
          var link = FS.readlink(current_path);
          current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
          var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
          current = lookup.node;
          if (count++ > 40) {
            throw new FS.ErrnoError(32);
          }
        }
      }
    }
    return { path: current_path, node: current };
  }, getPath: (node) => {
    var path;
    while (true) {
      if (FS.isRoot(node)) {
        var mount = node.mount.mountpoint;
        if (!path)
          return mount;
        return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path;
      }
      path = path ? node.name + "/" + path : node.name;
      node = node.parent;
    }
  }, hashName: (parentid, name) => {
    var hash = 0;
    for (var i = 0; i < name.length; i++) {
      hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
    }
    return (parentid + hash >>> 0) % FS.nameTable.length;
  }, hashAddNode: (node) => {
    var hash = FS.hashName(node.parent.id, node.name);
    node.name_next = FS.nameTable[hash];
    FS.nameTable[hash] = node;
  }, hashRemoveNode: (node) => {
    var hash = FS.hashName(node.parent.id, node.name);
    if (FS.nameTable[hash] === node) {
      FS.nameTable[hash] = node.name_next;
    } else {
      var current = FS.nameTable[hash];
      while (current) {
        if (current.name_next === node) {
          current.name_next = node.name_next;
          break;
        }
        current = current.name_next;
      }
    }
  }, lookupNode: (parent, name) => {
    var errCode = FS.mayLookup(parent);
    if (errCode) {
      throw new FS.ErrnoError(errCode, parent);
    }
    var hash = FS.hashName(parent.id, name);
    for (var node = FS.nameTable[hash]; node; node = node.name_next) {
      var nodeName = node.name;
      if (node.parent.id === parent.id && nodeName === name) {
        return node;
      }
    }
    return FS.lookup(parent, name);
  }, createNode: (parent, name, mode, rdev) => {
    assert(typeof parent == "object");
    var node = new FS.FSNode(parent, name, mode, rdev);
    FS.hashAddNode(node);
    return node;
  }, destroyNode: (node) => {
    FS.hashRemoveNode(node);
  }, isRoot: (node) => {
    return node === node.parent;
  }, isMountpoint: (node) => {
    return !!node.mounted;
  }, isFile: (mode) => {
    return (mode & 61440) === 32768;
  }, isDir: (mode) => {
    return (mode & 61440) === 16384;
  }, isLink: (mode) => {
    return (mode & 61440) === 40960;
  }, isChrdev: (mode) => {
    return (mode & 61440) === 8192;
  }, isBlkdev: (mode) => {
    return (mode & 61440) === 24576;
  }, isFIFO: (mode) => {
    return (mode & 61440) === 4096;
  }, isSocket: (mode) => {
    return (mode & 49152) === 49152;
  }, flagModes: { "r": 0, "r+": 2, "w": 577, "w+": 578, "a": 1089, "a+": 1090 }, modeStringToFlags: (str) => {
    var flags = FS.flagModes[str];
    if (typeof flags == "undefined") {
      throw new Error("Unknown file open mode: " + str);
    }
    return flags;
  }, flagsToPermissionString: (flag) => {
    var perms = ["r", "w", "rw"][flag & 3];
    if (flag & 512) {
      perms += "w";
    }
    return perms;
  }, nodePermissions: (node, perms) => {
    if (FS.ignorePermissions) {
      return 0;
    }
    if (perms.includes("r") && !(node.mode & 292)) {
      return 2;
    } else if (perms.includes("w") && !(node.mode & 146)) {
      return 2;
    } else if (perms.includes("x") && !(node.mode & 73)) {
      return 2;
    }
    return 0;
  }, mayLookup: (dir) => {
    var errCode = FS.nodePermissions(dir, "x");
    if (errCode)
      return errCode;
    if (!dir.node_ops.lookup)
      return 2;
    return 0;
  }, mayCreate: (dir, name) => {
    try {
      var node = FS.lookupNode(dir, name);
      return 20;
    } catch (e) {
    }
    return FS.nodePermissions(dir, "wx");
  }, mayDelete: (dir, name, isdir) => {
    var node;
    try {
      node = FS.lookupNode(dir, name);
    } catch (e) {
      return e.errno;
    }
    var errCode = FS.nodePermissions(dir, "wx");
    if (errCode) {
      return errCode;
    }
    if (isdir) {
      if (!FS.isDir(node.mode)) {
        return 54;
      }
      if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
        return 10;
      }
    } else {
      if (FS.isDir(node.mode)) {
        return 31;
      }
    }
    return 0;
  }, mayOpen: (node, flags) => {
    if (!node) {
      return 44;
    }
    if (FS.isLink(node.mode)) {
      return 32;
    } else if (FS.isDir(node.mode)) {
      if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
        return 31;
      }
    }
    return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
  }, MAX_OPEN_FDS: 4096, nextfd: (fd_start = 0, fd_end = FS.MAX_OPEN_FDS) => {
    for (var fd = fd_start; fd <= fd_end; fd++) {
      if (!FS.streams[fd]) {
        return fd;
      }
    }
    throw new FS.ErrnoError(33);
  }, getStream: (fd) => FS.streams[fd], createStream: (stream, fd_start, fd_end) => {
    if (!FS.FSStream) {
      FS.FSStream = function() {
      };
      FS.FSStream.prototype = { object: { get: function() {
        return this.node;
      }, set: function(val) {
        this.node = val;
      } }, isRead: { get: function() {
        return (this.flags & 2097155) !== 1;
      } }, isWrite: { get: function() {
        return (this.flags & 2097155) !== 0;
      } }, isAppend: { get: function() {
        return this.flags & 1024;
      } } };
    }
    stream = Object.assign(new FS.FSStream(), stream);
    var fd = FS.nextfd(fd_start, fd_end);
    stream.fd = fd;
    FS.streams[fd] = stream;
    return stream;
  }, closeStream: (fd) => {
    FS.streams[fd] = null;
  }, chrdev_stream_ops: { open: (stream) => {
    var device = FS.getDevice(stream.node.rdev);
    stream.stream_ops = device.stream_ops;
    if (stream.stream_ops.open) {
      stream.stream_ops.open(stream);
    }
  }, llseek: () => {
    throw new FS.ErrnoError(70);
  } }, major: (dev) => dev >> 8, minor: (dev) => dev & 255, makedev: (ma, mi) => ma << 8 | mi, registerDevice: (dev, ops) => {
    FS.devices[dev] = { stream_ops: ops };
  }, getDevice: (dev) => FS.devices[dev], getMounts: (mount) => {
    var mounts = [];
    var check = [mount];
    while (check.length) {
      var m = check.pop();
      mounts.push(m);
      check.push.apply(check, m.mounts);
    }
    return mounts;
  }, syncfs: (populate, callback) => {
    if (typeof populate == "function") {
      callback = populate;
      populate = false;
    }
    FS.syncFSRequests++;
    if (FS.syncFSRequests > 1) {
      err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
    }
    var mounts = FS.getMounts(FS.root.mount);
    var completed = 0;
    function doCallback(errCode) {
      assert(FS.syncFSRequests > 0);
      FS.syncFSRequests--;
      return callback(errCode);
    }
    function done(errCode) {
      if (errCode) {
        if (!done.errored) {
          done.errored = true;
          return doCallback(errCode);
        }
        return;
      }
      if (++completed >= mounts.length) {
        doCallback(null);
      }
    }
    mounts.forEach((mount) => {
      if (!mount.type.syncfs) {
        return done(null);
      }
      mount.type.syncfs(mount, populate, done);
    });
  }, mount: (type, opts, mountpoint) => {
    if (typeof type == "string") {
      throw type;
    }
    var root = mountpoint === "/";
    var pseudo = !mountpoint;
    var node;
    if (root && FS.root) {
      throw new FS.ErrnoError(10);
    } else if (!root && !pseudo) {
      var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
      mountpoint = lookup.path;
      node = lookup.node;
      if (FS.isMountpoint(node)) {
        throw new FS.ErrnoError(10);
      }
      if (!FS.isDir(node.mode)) {
        throw new FS.ErrnoError(54);
      }
    }
    var mount = { type, opts, mountpoint, mounts: [] };
    var mountRoot = type.mount(mount);
    mountRoot.mount = mount;
    mount.root = mountRoot;
    if (root) {
      FS.root = mountRoot;
    } else if (node) {
      node.mounted = mount;
      if (node.mount) {
        node.mount.mounts.push(mount);
      }
    }
    return mountRoot;
  }, unmount: (mountpoint) => {
    var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
    if (!FS.isMountpoint(lookup.node)) {
      throw new FS.ErrnoError(28);
    }
    var node = lookup.node;
    var mount = node.mounted;
    var mounts = FS.getMounts(mount);
    Object.keys(FS.nameTable).forEach((hash) => {
      var current = FS.nameTable[hash];
      while (current) {
        var next = current.name_next;
        if (mounts.includes(current.mount)) {
          FS.destroyNode(current);
        }
        current = next;
      }
    });
    node.mounted = null;
    var idx = node.mount.mounts.indexOf(mount);
    assert(idx !== -1);
    node.mount.mounts.splice(idx, 1);
  }, lookup: (parent, name) => {
    return parent.node_ops.lookup(parent, name);
  }, mknod: (path, mode, dev) => {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    var name = PATH.basename(path);
    if (!name || name === "." || name === "..") {
      throw new FS.ErrnoError(28);
    }
    var errCode = FS.mayCreate(parent, name);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.mknod) {
      throw new FS.ErrnoError(63);
    }
    return parent.node_ops.mknod(parent, name, mode, dev);
  }, create: (path, mode) => {
    mode = mode !== void 0 ? mode : 438;
    mode &= 4095;
    mode |= 32768;
    return FS.mknod(path, mode, 0);
  }, mkdir: (path, mode) => {
    mode = mode !== void 0 ? mode : 511;
    mode &= 511 | 512;
    mode |= 16384;
    return FS.mknod(path, mode, 0);
  }, mkdirTree: (path, mode) => {
    var dirs = path.split("/");
    var d = "";
    for (var i = 0; i < dirs.length; ++i) {
      if (!dirs[i])
        continue;
      d += "/" + dirs[i];
      try {
        FS.mkdir(d, mode);
      } catch (e) {
        if (e.errno != 20)
          throw e;
      }
    }
  }, mkdev: (path, mode, dev) => {
    if (typeof dev == "undefined") {
      dev = mode;
      mode = 438;
    }
    mode |= 8192;
    return FS.mknod(path, mode, dev);
  }, symlink: (oldpath, newpath) => {
    if (!PATH_FS.resolve(oldpath)) {
      throw new FS.ErrnoError(44);
    }
    var lookup = FS.lookupPath(newpath, { parent: true });
    var parent = lookup.node;
    if (!parent) {
      throw new FS.ErrnoError(44);
    }
    var newname = PATH.basename(newpath);
    var errCode = FS.mayCreate(parent, newname);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.symlink) {
      throw new FS.ErrnoError(63);
    }
    return parent.node_ops.symlink(parent, newname, oldpath);
  }, rename: (old_path, new_path) => {
    var old_dirname = PATH.dirname(old_path);
    var new_dirname = PATH.dirname(new_path);
    var old_name = PATH.basename(old_path);
    var new_name = PATH.basename(new_path);
    var lookup, old_dir, new_dir;
    lookup = FS.lookupPath(old_path, { parent: true });
    old_dir = lookup.node;
    lookup = FS.lookupPath(new_path, { parent: true });
    new_dir = lookup.node;
    if (!old_dir || !new_dir)
      throw new FS.ErrnoError(44);
    if (old_dir.mount !== new_dir.mount) {
      throw new FS.ErrnoError(75);
    }
    var old_node = FS.lookupNode(old_dir, old_name);
    var relative = PATH_FS.relative(old_path, new_dirname);
    if (relative.charAt(0) !== ".") {
      throw new FS.ErrnoError(28);
    }
    relative = PATH_FS.relative(new_path, old_dirname);
    if (relative.charAt(0) !== ".") {
      throw new FS.ErrnoError(55);
    }
    var new_node;
    try {
      new_node = FS.lookupNode(new_dir, new_name);
    } catch (e) {
    }
    if (old_node === new_node) {
      return;
    }
    var isdir = FS.isDir(old_node.mode);
    var errCode = FS.mayDelete(old_dir, old_name, isdir);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!old_dir.node_ops.rename) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
      throw new FS.ErrnoError(10);
    }
    if (new_dir !== old_dir) {
      errCode = FS.nodePermissions(old_dir, "w");
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
    }
    FS.hashRemoveNode(old_node);
    try {
      old_dir.node_ops.rename(old_node, new_dir, new_name);
    } catch (e) {
      throw e;
    } finally {
      FS.hashAddNode(old_node);
    }
  }, rmdir: (path) => {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var errCode = FS.mayDelete(parent, name, true);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.rmdir) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(10);
    }
    parent.node_ops.rmdir(parent, name);
    FS.destroyNode(node);
  }, readdir: (path) => {
    var lookup = FS.lookupPath(path, { follow: true });
    var node = lookup.node;
    if (!node.node_ops.readdir) {
      throw new FS.ErrnoError(54);
    }
    return node.node_ops.readdir(node);
  }, unlink: (path) => {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    if (!parent) {
      throw new FS.ErrnoError(44);
    }
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var errCode = FS.mayDelete(parent, name, false);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.unlink) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(10);
    }
    parent.node_ops.unlink(parent, name);
    FS.destroyNode(node);
  }, readlink: (path) => {
    var lookup = FS.lookupPath(path);
    var link = lookup.node;
    if (!link) {
      throw new FS.ErrnoError(44);
    }
    if (!link.node_ops.readlink) {
      throw new FS.ErrnoError(28);
    }
    return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
  }, stat: (path, dontFollow) => {
    var lookup = FS.lookupPath(path, { follow: !dontFollow });
    var node = lookup.node;
    if (!node) {
      throw new FS.ErrnoError(44);
    }
    if (!node.node_ops.getattr) {
      throw new FS.ErrnoError(63);
    }
    return node.node_ops.getattr(node);
  }, lstat: (path) => {
    return FS.stat(path, true);
  }, chmod: (path, mode, dontFollow) => {
    var node;
    if (typeof path == "string") {
      var lookup = FS.lookupPath(path, { follow: !dontFollow });
      node = lookup.node;
    } else {
      node = path;
    }
    if (!node.node_ops.setattr) {
      throw new FS.ErrnoError(63);
    }
    node.node_ops.setattr(node, { mode: mode & 4095 | node.mode & ~4095, timestamp: Date.now() });
  }, lchmod: (path, mode) => {
    FS.chmod(path, mode, true);
  }, fchmod: (fd, mode) => {
    var stream = FS.getStream(fd);
    if (!stream) {
      throw new FS.ErrnoError(8);
    }
    FS.chmod(stream.node, mode);
  }, chown: (path, uid, gid, dontFollow) => {
    var node;
    if (typeof path == "string") {
      var lookup = FS.lookupPath(path, { follow: !dontFollow });
      node = lookup.node;
    } else {
      node = path;
    }
    if (!node.node_ops.setattr) {
      throw new FS.ErrnoError(63);
    }
    node.node_ops.setattr(node, { timestamp: Date.now() });
  }, lchown: (path, uid, gid) => {
    FS.chown(path, uid, gid, true);
  }, fchown: (fd, uid, gid) => {
    var stream = FS.getStream(fd);
    if (!stream) {
      throw new FS.ErrnoError(8);
    }
    FS.chown(stream.node, uid, gid);
  }, truncate: (path, len) => {
    if (len < 0) {
      throw new FS.ErrnoError(28);
    }
    var node;
    if (typeof path == "string") {
      var lookup = FS.lookupPath(path, { follow: true });
      node = lookup.node;
    } else {
      node = path;
    }
    if (!node.node_ops.setattr) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isDir(node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!FS.isFile(node.mode)) {
      throw new FS.ErrnoError(28);
    }
    var errCode = FS.nodePermissions(node, "w");
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    node.node_ops.setattr(node, { size: len, timestamp: Date.now() });
  }, ftruncate: (fd, len) => {
    var stream = FS.getStream(fd);
    if (!stream) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(28);
    }
    FS.truncate(stream.node, len);
  }, utime: (path, atime, mtime) => {
    var lookup = FS.lookupPath(path, { follow: true });
    var node = lookup.node;
    node.node_ops.setattr(node, { timestamp: Math.max(atime, mtime) });
  }, open: (path, flags, mode, fd_start, fd_end) => {
    if (path === "") {
      throw new FS.ErrnoError(44);
    }
    flags = typeof flags == "string" ? FS.modeStringToFlags(flags) : flags;
    mode = typeof mode == "undefined" ? 438 : mode;
    if (flags & 64) {
      mode = mode & 4095 | 32768;
    } else {
      mode = 0;
    }
    var node;
    if (typeof path == "object") {
      node = path;
    } else {
      path = PATH.normalize(path);
      try {
        var lookup = FS.lookupPath(path, { follow: !(flags & 131072) });
        node = lookup.node;
      } catch (e) {
      }
    }
    var created = false;
    if (flags & 64) {
      if (node) {
        if (flags & 128) {
          throw new FS.ErrnoError(20);
        }
      } else {
        node = FS.mknod(path, mode, 0);
        created = true;
      }
    }
    if (!node) {
      throw new FS.ErrnoError(44);
    }
    if (FS.isChrdev(node.mode)) {
      flags &= ~512;
    }
    if (flags & 65536 && !FS.isDir(node.mode)) {
      throw new FS.ErrnoError(54);
    }
    if (!created) {
      var errCode = FS.mayOpen(node, flags);
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
    }
    if (flags & 512) {
      FS.truncate(node, 0);
    }
    flags &= ~(128 | 512 | 131072);
    var stream = FS.createStream({ node, path: FS.getPath(node), flags, seekable: true, position: 0, stream_ops: node.stream_ops, ungotten: [], error: false }, fd_start, fd_end);
    if (stream.stream_ops.open) {
      stream.stream_ops.open(stream);
    }
    if (Module["logReadFiles"] && !(flags & 1)) {
      if (!FS.readFiles)
        FS.readFiles = {};
      if (!(path in FS.readFiles)) {
        FS.readFiles[path] = 1;
      }
    }
    return stream;
  }, close: (stream) => {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (stream.getdents)
      stream.getdents = null;
    try {
      if (stream.stream_ops.close) {
        stream.stream_ops.close(stream);
      }
    } catch (e) {
      throw e;
    } finally {
      FS.closeStream(stream.fd);
    }
    stream.fd = null;
  }, isClosed: (stream) => {
    return stream.fd === null;
  }, llseek: (stream, offset, whence) => {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (!stream.seekable || !stream.stream_ops.llseek) {
      throw new FS.ErrnoError(70);
    }
    if (whence != 0 && whence != 1 && whence != 2) {
      throw new FS.ErrnoError(28);
    }
    stream.position = stream.stream_ops.llseek(stream, offset, whence);
    stream.ungotten = [];
    return stream.position;
  }, read: (stream, buffer2, offset, length, position) => {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(28);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(8);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!stream.stream_ops.read) {
      throw new FS.ErrnoError(28);
    }
    var seeking = typeof position != "undefined";
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(70);
    }
    var bytesRead = stream.stream_ops.read(stream, buffer2, offset, length, position);
    if (!seeking)
      stream.position += bytesRead;
    return bytesRead;
  }, write: (stream, buffer2, offset, length, position, canOwn) => {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(28);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(8);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!stream.stream_ops.write) {
      throw new FS.ErrnoError(28);
    }
    if (stream.seekable && stream.flags & 1024) {
      FS.llseek(stream, 0, 2);
    }
    var seeking = typeof position != "undefined";
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(70);
    }
    var bytesWritten = stream.stream_ops.write(stream, buffer2, offset, length, position, canOwn);
    if (!seeking)
      stream.position += bytesWritten;
    return bytesWritten;
  }, allocate: (stream, offset, length) => {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (offset < 0 || length <= 0) {
      throw new FS.ErrnoError(28);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(8);
    }
    if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(43);
    }
    if (!stream.stream_ops.allocate) {
      throw new FS.ErrnoError(138);
    }
    stream.stream_ops.allocate(stream, offset, length);
  }, mmap: (stream, address, length, position, prot, flags) => {
    if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
      throw new FS.ErrnoError(2);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(2);
    }
    if (!stream.stream_ops.mmap) {
      throw new FS.ErrnoError(43);
    }
    return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
  }, msync: (stream, buffer2, offset, length, mmapFlags) => {
    if (!stream || !stream.stream_ops.msync) {
      return 0;
    }
    return stream.stream_ops.msync(stream, buffer2, offset, length, mmapFlags);
  }, munmap: (stream) => 0, ioctl: (stream, cmd, arg) => {
    if (!stream.stream_ops.ioctl) {
      throw new FS.ErrnoError(59);
    }
    return stream.stream_ops.ioctl(stream, cmd, arg);
  }, readFile: (path, opts = {}) => {
    opts.flags = opts.flags || 0;
    opts.encoding = opts.encoding || "binary";
    if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
      throw new Error('Invalid encoding type "' + opts.encoding + '"');
    }
    var ret;
    var stream = FS.open(path, opts.flags);
    var stat = FS.stat(path);
    var length = stat.size;
    var buf = new Uint8Array(length);
    FS.read(stream, buf, 0, length, 0);
    if (opts.encoding === "utf8") {
      ret = UTF8ArrayToString(buf, 0);
    } else if (opts.encoding === "binary") {
      ret = buf;
    }
    FS.close(stream);
    return ret;
  }, writeFile: (path, data, opts = {}) => {
    opts.flags = opts.flags || 577;
    var stream = FS.open(path, opts.flags, opts.mode);
    if (typeof data == "string") {
      var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
      var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
      FS.write(stream, buf, 0, actualNumBytes, void 0, opts.canOwn);
    } else if (ArrayBuffer.isView(data)) {
      FS.write(stream, data, 0, data.byteLength, void 0, opts.canOwn);
    } else {
      throw new Error("Unsupported data type");
    }
    FS.close(stream);
  }, cwd: () => FS.currentPath, chdir: (path) => {
    var lookup = FS.lookupPath(path, { follow: true });
    if (lookup.node === null) {
      throw new FS.ErrnoError(44);
    }
    if (!FS.isDir(lookup.node.mode)) {
      throw new FS.ErrnoError(54);
    }
    var errCode = FS.nodePermissions(lookup.node, "x");
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    FS.currentPath = lookup.path;
  }, createDefaultDirectories: () => {
    FS.mkdir("/tmp");
    FS.mkdir("/home");
    FS.mkdir("/home/web_user");
  }, createDefaultDevices: () => {
    FS.mkdir("/dev");
    FS.registerDevice(FS.makedev(1, 3), { read: () => 0, write: (stream, buffer2, offset, length, pos) => length });
    FS.mkdev("/dev/null", FS.makedev(1, 3));
    TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
    TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
    FS.mkdev("/dev/tty", FS.makedev(5, 0));
    FS.mkdev("/dev/tty1", FS.makedev(6, 0));
    var random_device = getRandomDevice();
    FS.createDevice("/dev", "random", random_device);
    FS.createDevice("/dev", "urandom", random_device);
    FS.mkdir("/dev/shm");
    FS.mkdir("/dev/shm/tmp");
  }, createSpecialDirectories: () => {
    FS.mkdir("/proc");
    var proc_self = FS.mkdir("/proc/self");
    FS.mkdir("/proc/self/fd");
    FS.mount({ mount: () => {
      var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
      node.node_ops = { lookup: (parent, name) => {
        var fd = +name;
        var stream = FS.getStream(fd);
        if (!stream)
          throw new FS.ErrnoError(8);
        var ret = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => stream.path } };
        ret.parent = ret;
        return ret;
      } };
      return node;
    } }, {}, "/proc/self/fd");
  }, createStandardStreams: () => {
    if (Module["stdin"]) {
      FS.createDevice("/dev", "stdin", Module["stdin"]);
    } else {
      FS.symlink("/dev/tty", "/dev/stdin");
    }
    if (Module["stdout"]) {
      FS.createDevice("/dev", "stdout", null, Module["stdout"]);
    } else {
      FS.symlink("/dev/tty", "/dev/stdout");
    }
    if (Module["stderr"]) {
      FS.createDevice("/dev", "stderr", null, Module["stderr"]);
    } else {
      FS.symlink("/dev/tty1", "/dev/stderr");
    }
    var stdin = FS.open("/dev/stdin", 0);
    var stdout = FS.open("/dev/stdout", 1);
    var stderr = FS.open("/dev/stderr", 1);
    assert(stdin.fd === 0, "invalid handle for stdin (" + stdin.fd + ")");
    assert(stdout.fd === 1, "invalid handle for stdout (" + stdout.fd + ")");
    assert(stderr.fd === 2, "invalid handle for stderr (" + stderr.fd + ")");
  }, ensureErrnoError: () => {
    if (FS.ErrnoError)
      return;
    FS.ErrnoError = function ErrnoError(errno, node) {
      this.node = node;
      this.setErrno = function(errno2) {
        this.errno = errno2;
        for (var key in ERRNO_CODES) {
          if (ERRNO_CODES[key] === errno2) {
            this.code = key;
            break;
          }
        }
      };
      this.setErrno(errno);
      this.message = ERRNO_MESSAGES[errno];
      if (this.stack) {
        Object.defineProperty(this, "stack", { value: new Error().stack, writable: true });
        this.stack = demangleAll(this.stack);
      }
    };
    FS.ErrnoError.prototype = new Error();
    FS.ErrnoError.prototype.constructor = FS.ErrnoError;
    [44].forEach((code) => {
      FS.genericErrors[code] = new FS.ErrnoError(code);
      FS.genericErrors[code].stack = "<generic error, no stack>";
    });
  }, staticInit: () => {
    FS.ensureErrnoError();
    FS.nameTable = new Array(4096);
    FS.mount(MEMFS, {}, "/");
    FS.createDefaultDirectories();
    FS.createDefaultDevices();
    FS.createSpecialDirectories();
    FS.filesystems = { "MEMFS": MEMFS };
  }, init: (input, output, error) => {
    assert(!FS.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
    FS.init.initialized = true;
    FS.ensureErrnoError();
    Module["stdin"] = input || Module["stdin"];
    Module["stdout"] = output || Module["stdout"];
    Module["stderr"] = error || Module["stderr"];
    FS.createStandardStreams();
  }, quit: () => {
    FS.init.initialized = false;
    ___stdio_exit();
    for (var i = 0; i < FS.streams.length; i++) {
      var stream = FS.streams[i];
      if (!stream) {
        continue;
      }
      FS.close(stream);
    }
  }, getMode: (canRead, canWrite) => {
    var mode = 0;
    if (canRead)
      mode |= 292 | 73;
    if (canWrite)
      mode |= 146;
    return mode;
  }, findObject: (path, dontResolveLastLink) => {
    var ret = FS.analyzePath(path, dontResolveLastLink);
    if (ret.exists) {
      return ret.object;
    } else {
      return null;
    }
  }, analyzePath: (path, dontResolveLastLink) => {
    try {
      var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
      path = lookup.path;
    } catch (e) {
    }
    var ret = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
    try {
      var lookup = FS.lookupPath(path, { parent: true });
      ret.parentExists = true;
      ret.parentPath = lookup.path;
      ret.parentObject = lookup.node;
      ret.name = PATH.basename(path);
      lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
      ret.exists = true;
      ret.path = lookup.path;
      ret.object = lookup.node;
      ret.name = lookup.node.name;
      ret.isRoot = lookup.path === "/";
    } catch (e) {
      ret.error = e.errno;
    }
    return ret;
  }, createPath: (parent, path, canRead, canWrite) => {
    parent = typeof parent == "string" ? parent : FS.getPath(parent);
    var parts = path.split("/").reverse();
    while (parts.length) {
      var part = parts.pop();
      if (!part)
        continue;
      var current = PATH.join2(parent, part);
      try {
        FS.mkdir(current);
      } catch (e) {
      }
      parent = current;
    }
    return current;
  }, createFile: (parent, name, properties, canRead, canWrite) => {
    var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
    var mode = FS.getMode(canRead, canWrite);
    return FS.create(path, mode);
  }, createDataFile: (parent, name, data, canRead, canWrite, canOwn) => {
    var path = name;
    if (parent) {
      parent = typeof parent == "string" ? parent : FS.getPath(parent);
      path = name ? PATH.join2(parent, name) : parent;
    }
    var mode = FS.getMode(canRead, canWrite);
    var node = FS.create(path, mode);
    if (data) {
      if (typeof data == "string") {
        var arr = new Array(data.length);
        for (var i = 0, len = data.length; i < len; ++i)
          arr[i] = data.charCodeAt(i);
        data = arr;
      }
      FS.chmod(node, mode | 146);
      var stream = FS.open(node, 577);
      FS.write(stream, data, 0, data.length, 0, canOwn);
      FS.close(stream);
      FS.chmod(node, mode);
    }
    return node;
  }, createDevice: (parent, name, input, output) => {
    var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
    var mode = FS.getMode(!!input, !!output);
    if (!FS.createDevice.major)
      FS.createDevice.major = 64;
    var dev = FS.makedev(FS.createDevice.major++, 0);
    FS.registerDevice(dev, { open: (stream) => {
      stream.seekable = false;
    }, close: (stream) => {
      if (output && output.buffer && output.buffer.length) {
        output(10);
      }
    }, read: (stream, buffer2, offset, length, pos) => {
      var bytesRead = 0;
      for (var i = 0; i < length; i++) {
        var result;
        try {
          result = input();
        } catch (e) {
          throw new FS.ErrnoError(29);
        }
        if (result === void 0 && bytesRead === 0) {
          throw new FS.ErrnoError(6);
        }
        if (result === null || result === void 0)
          break;
        bytesRead++;
        buffer2[offset + i] = result;
      }
      if (bytesRead) {
        stream.node.timestamp = Date.now();
      }
      return bytesRead;
    }, write: (stream, buffer2, offset, length, pos) => {
      for (var i = 0; i < length; i++) {
        try {
          output(buffer2[offset + i]);
        } catch (e) {
          throw new FS.ErrnoError(29);
        }
      }
      if (length) {
        stream.node.timestamp = Date.now();
      }
      return i;
    } });
    return FS.mkdev(path, mode, dev);
  }, forceLoadFile: (obj) => {
    if (obj.isDevice || obj.isFolder || obj.link || obj.contents)
      return true;
    if (typeof XMLHttpRequest != "undefined") {
      throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    } else if (read_) {
      try {
        obj.contents = intArrayFromString(read_(obj.url), true);
        obj.usedBytes = obj.contents.length;
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
    } else {
      throw new Error("Cannot load without read() or XMLHttpRequest.");
    }
  }, createLazyFile: (parent, name, url, canRead, canWrite) => {
    function LazyUint8Array() {
      this.lengthKnown = false;
      this.chunks = [];
    }
    LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
      if (idx > this.length - 1 || idx < 0) {
        return void 0;
      }
      var chunkOffset = idx % this.chunkSize;
      var chunkNum = idx / this.chunkSize | 0;
      return this.getter(chunkNum)[chunkOffset];
    };
    LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
      this.getter = getter;
    };
    LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
      var xhr = new XMLHttpRequest();
      xhr.open("HEAD", url, false);
      xhr.send(null);
      if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304))
        throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
      var datalength = Number(xhr.getResponseHeader("Content-length"));
      var header;
      var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
      var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
      var chunkSize = 1024 * 1024;
      if (!hasByteServing)
        chunkSize = datalength;
      var doXHR = (from, to) => {
        if (from > to)
          throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
        if (to > datalength - 1)
          throw new Error("only " + datalength + " bytes available! programmer error!");
        var xhr2 = new XMLHttpRequest();
        xhr2.open("GET", url, false);
        if (datalength !== chunkSize)
          xhr2.setRequestHeader("Range", "bytes=" + from + "-" + to);
        xhr2.responseType = "arraybuffer";
        if (xhr2.overrideMimeType) {
          xhr2.overrideMimeType("text/plain; charset=x-user-defined");
        }
        xhr2.send(null);
        if (!(xhr2.status >= 200 && xhr2.status < 300 || xhr2.status === 304))
          throw new Error("Couldn't load " + url + ". Status: " + xhr2.status);
        if (xhr2.response !== void 0) {
          return new Uint8Array(xhr2.response || []);
        } else {
          return intArrayFromString(xhr2.responseText || "", true);
        }
      };
      var lazyArray2 = this;
      lazyArray2.setDataGetter((chunkNum) => {
        var start = chunkNum * chunkSize;
        var end = (chunkNum + 1) * chunkSize - 1;
        end = Math.min(end, datalength - 1);
        if (typeof lazyArray2.chunks[chunkNum] == "undefined") {
          lazyArray2.chunks[chunkNum] = doXHR(start, end);
        }
        if (typeof lazyArray2.chunks[chunkNum] == "undefined")
          throw new Error("doXHR failed!");
        return lazyArray2.chunks[chunkNum];
      });
      if (usesGzip || !datalength) {
        chunkSize = datalength = 1;
        datalength = this.getter(0).length;
        chunkSize = datalength;
        out("LazyFiles on gzip forces download of the whole file when length is accessed");
      }
      this._length = datalength;
      this._chunkSize = chunkSize;
      this.lengthKnown = true;
    };
    if (typeof XMLHttpRequest != "undefined") {
      if (!ENVIRONMENT_IS_WORKER)
        throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
      var lazyArray = new LazyUint8Array();
      Object.defineProperties(lazyArray, { length: { get: function() {
        if (!this.lengthKnown) {
          this.cacheLength();
        }
        return this._length;
      } }, chunkSize: { get: function() {
        if (!this.lengthKnown) {
          this.cacheLength();
        }
        return this._chunkSize;
      } } });
      var properties = { isDevice: false, contents: lazyArray };
    } else {
      var properties = { isDevice: false, url };
    }
    var node = FS.createFile(parent, name, properties, canRead, canWrite);
    if (properties.contents) {
      node.contents = properties.contents;
    } else if (properties.url) {
      node.contents = null;
      node.url = properties.url;
    }
    Object.defineProperties(node, { usedBytes: { get: function() {
      return this.contents.length;
    } } });
    var stream_ops = {};
    var keys = Object.keys(node.stream_ops);
    keys.forEach((key) => {
      var fn = node.stream_ops[key];
      stream_ops[key] = function forceLoadLazyFile() {
        FS.forceLoadFile(node);
        return fn.apply(null, arguments);
      };
    });
    stream_ops.read = (stream, buffer2, offset, length, position) => {
      FS.forceLoadFile(node);
      var contents = stream.node.contents;
      if (position >= contents.length)
        return 0;
      var size = Math.min(contents.length - position, length);
      assert(size >= 0);
      if (contents.slice) {
        for (var i = 0; i < size; i++) {
          buffer2[offset + i] = contents[position + i];
        }
      } else {
        for (var i = 0; i < size; i++) {
          buffer2[offset + i] = contents.get(position + i);
        }
      }
      return size;
    };
    node.stream_ops = stream_ops;
    return node;
  }, createPreloadedFile: (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
    var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
    var dep = getUniqueRunDependency("cp " + fullname);
    function processData(byteArray) {
      function finish(byteArray2) {
        if (preFinish)
          preFinish();
        if (!dontCreateFile) {
          FS.createDataFile(parent, name, byteArray2, canRead, canWrite, canOwn);
        }
        if (onload)
          onload();
        removeRunDependency(dep);
      }
      if (Browser.handledByPreloadPlugin(byteArray, fullname, finish, () => {
        if (onerror)
          onerror();
        removeRunDependency(dep);
      })) {
        return;
      }
      finish(byteArray);
    }
    addRunDependency(dep);
    if (typeof url == "string") {
      asyncLoad(url, (byteArray) => processData(byteArray), onerror);
    } else {
      processData(url);
    }
  }, indexedDB: () => {
    return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  }, DB_NAME: () => {
    return "EM_FS_" + window.location.pathname;
  }, DB_VERSION: 20, DB_STORE_NAME: "FILE_DATA", saveFilesToDB: (paths, onload, onerror) => {
    onload = onload || (() => {
    });
    onerror = onerror || (() => {
    });
    var indexedDB = FS.indexedDB();
    try {
      var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
    } catch (e) {
      return onerror(e);
    }
    openRequest.onupgradeneeded = () => {
      out("creating db");
      var db = openRequest.result;
      db.createObjectStore(FS.DB_STORE_NAME);
    };
    openRequest.onsuccess = () => {
      var db = openRequest.result;
      var transaction = db.transaction([FS.DB_STORE_NAME], "readwrite");
      var files = transaction.objectStore(FS.DB_STORE_NAME);
      var ok = 0, fail = 0, total = paths.length;
      function finish() {
        if (fail == 0)
          onload();
        else
          onerror();
      }
      paths.forEach((path) => {
        var putRequest = files.put(FS.analyzePath(path).object.contents, path);
        putRequest.onsuccess = () => {
          ok++;
          if (ok + fail == total)
            finish();
        };
        putRequest.onerror = () => {
          fail++;
          if (ok + fail == total)
            finish();
        };
      });
      transaction.onerror = onerror;
    };
    openRequest.onerror = onerror;
  }, loadFilesFromDB: (paths, onload, onerror) => {
    onload = onload || (() => {
    });
    onerror = onerror || (() => {
    });
    var indexedDB = FS.indexedDB();
    try {
      var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
    } catch (e) {
      return onerror(e);
    }
    openRequest.onupgradeneeded = onerror;
    openRequest.onsuccess = () => {
      var db = openRequest.result;
      try {
        var transaction = db.transaction([FS.DB_STORE_NAME], "readonly");
      } catch (e) {
        onerror(e);
        return;
      }
      var files = transaction.objectStore(FS.DB_STORE_NAME);
      var ok = 0, fail = 0, total = paths.length;
      function finish() {
        if (fail == 0)
          onload();
        else
          onerror();
      }
      paths.forEach((path) => {
        var getRequest = files.get(path);
        getRequest.onsuccess = () => {
          if (FS.analyzePath(path).exists) {
            FS.unlink(path);
          }
          FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
          ok++;
          if (ok + fail == total)
            finish();
        };
        getRequest.onerror = () => {
          fail++;
          if (ok + fail == total)
            finish();
        };
      });
      transaction.onerror = onerror;
    };
    openRequest.onerror = onerror;
  }, absolutePath: () => {
    abort("FS.absolutePath has been removed; use PATH_FS.resolve instead");
  }, createFolder: () => {
    abort("FS.createFolder has been removed; use FS.mkdir instead");
  }, createLink: () => {
    abort("FS.createLink has been removed; use FS.symlink instead");
  }, joinPath: () => {
    abort("FS.joinPath has been removed; use PATH.join instead");
  }, mmapAlloc: () => {
    abort("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
  }, standardizePath: () => {
    abort("FS.standardizePath has been removed; use PATH.normalize instead");
  } };
  var SOCKFS = { mount: function(mount) {
    Module["websocket"] = Module["websocket"] && "object" === typeof Module["websocket"] ? Module["websocket"] : {};
    Module["websocket"]._callbacks = {};
    Module["websocket"]["on"] = function(event, callback) {
      if ("function" === typeof callback) {
        this._callbacks[event] = callback;
      }
      return this;
    };
    Module["websocket"].emit = function(event, param) {
      if ("function" === typeof this._callbacks[event]) {
        this._callbacks[event].call(this, param);
      }
    };
    return FS.createNode(null, "/", 16384 | 511, 0);
  }, createSocket: function(family, type, protocol) {
    type &= ~526336;
    var streaming = type == 1;
    if (protocol) {
      assert(streaming == (protocol == 6));
    }
    var sock = { family, type, protocol, server: null, error: null, peers: {}, pending: [], recv_queue: [], sock_ops: SOCKFS.websocket_sock_ops };
    var name = SOCKFS.nextname();
    var node = FS.createNode(SOCKFS.root, name, 49152, 0);
    node.sock = sock;
    var stream = FS.createStream({ path: name, node, flags: 2, seekable: false, stream_ops: SOCKFS.stream_ops });
    sock.stream = stream;
    return sock;
  }, getSocket: function(fd) {
    var stream = FS.getStream(fd);
    if (!stream || !FS.isSocket(stream.node.mode)) {
      return null;
    }
    return stream.node.sock;
  }, stream_ops: { poll: function(stream) {
    var sock = stream.node.sock;
    return sock.sock_ops.poll(sock);
  }, ioctl: function(stream, request, varargs) {
    var sock = stream.node.sock;
    return sock.sock_ops.ioctl(sock, request, varargs);
  }, read: function(stream, buffer2, offset, length, position) {
    var sock = stream.node.sock;
    var msg = sock.sock_ops.recvmsg(sock, length);
    if (!msg) {
      return 0;
    }
    buffer2.set(msg.buffer, offset);
    return msg.buffer.length;
  }, write: function(stream, buffer2, offset, length, position) {
    var sock = stream.node.sock;
    return sock.sock_ops.sendmsg(sock, buffer2, offset, length);
  }, close: function(stream) {
    var sock = stream.node.sock;
    sock.sock_ops.close(sock);
  } }, nextname: function() {
    if (!SOCKFS.nextname.current) {
      SOCKFS.nextname.current = 0;
    }
    return "socket[" + SOCKFS.nextname.current++ + "]";
  }, websocket_sock_ops: { createPeer: function(sock, addr, port) {
    var ws;
    if (typeof addr == "object") {
      ws = addr;
      addr = null;
      port = null;
    }
    if (ws) {
      if (ws._socket) {
        addr = ws._socket.remoteAddress;
        port = ws._socket.remotePort;
      } else {
        var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
        if (!result) {
          throw new Error("WebSocket URL must be in the format ws(s)://address:port");
        }
        addr = result[1];
        port = parseInt(result[2], 10);
      }
    } else {
      try {
        var runtimeConfig = Module["websocket"] && "object" === typeof Module["websocket"];
        var url = "ws:#".replace("#", "//");
        if (runtimeConfig) {
          if ("string" === typeof Module["websocket"]["url"]) {
            url = Module["websocket"]["url"];
          }
        }
        if (url === "ws://" || url === "wss://") {
          var parts = addr.split("/");
          url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/");
        }
        var subProtocols = "binary";
        if (runtimeConfig) {
          if ("string" === typeof Module["websocket"]["subprotocol"]) {
            subProtocols = Module["websocket"]["subprotocol"];
          }
        }
        var opts = void 0;
        var parts = addr.split("/");
        url = url + parts[0] + ":" + port;
        if (subProtocols !== "null") {
          subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */);
          opts = ENVIRONMENT_IS_NODE ? { "protocol": subProtocols.toString() } : subProtocols;
        }
        if (runtimeConfig && null === Module["websocket"]["subprotocol"]) {
          subProtocols = "null";
          opts = void 0;
        }
        var WebSocketConstructor;
        {
          WebSocketConstructor = WebSocket;
        }
        ws = new WispWebSocket(url, opts);
        ws.binaryType = "arraybuffer";
      } catch (e) {
        throw new FS.ErrnoError(23);
      }
    }
    var peer = { addr, port, socket: ws, dgram_send_queue: [] };
    SOCKFS.websocket_sock_ops.addPeer(sock, peer);
    SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
    if (sock.type === 2 && typeof sock.sport != "undefined") {
      peer.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (sock.sport & 65280) >> 8, sock.sport & 255]));
    }
    return peer;
  }, getPeer: function(sock, addr, port) {
    return sock.peers[addr + ":" + port];
  }, addPeer: function(sock, peer) {
    sock.peers[peer.addr + ":" + peer.port] = peer;
  }, removePeer: function(sock, peer) {
    delete sock.peers[peer.addr + ":" + peer.port];
  }, handlePeerEvents: function(sock, peer) {
    var first = true;
    var handleOpen = function() {
      Module["websocket"].emit("open", sock.stream.fd);
      try {
        var queued = peer.dgram_send_queue.shift();
        while (queued) {
          peer.socket.send(queued);
          queued = peer.dgram_send_queue.shift();
        }
      } catch (e) {
        peer.socket.close();
      }
    };
    function handleMessage(data) {
      if (typeof data == "string") {
        var encoder = new TextEncoder();
        data = encoder.encode(data);
      } else {
        assert(data.byteLength !== void 0);
        if (data.byteLength == 0) {
          return;
        } else {
          data = new Uint8Array(data);
        }
      }
      var wasfirst = first;
      first = false;
      if (wasfirst && data.length === 10 && data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 && data[4] === "p".charCodeAt(0) && data[5] === "o".charCodeAt(0) && data[6] === "r".charCodeAt(0) && data[7] === "t".charCodeAt(0)) {
        var newport = data[8] << 8 | data[9];
        SOCKFS.websocket_sock_ops.removePeer(sock, peer);
        peer.port = newport;
        SOCKFS.websocket_sock_ops.addPeer(sock, peer);
        return;
      }
      sock.recv_queue.push({ addr: peer.addr, port: peer.port, data });
      Module["websocket"].emit("message", sock.stream.fd);
    }
    if (ENVIRONMENT_IS_NODE) {
      peer.socket.on("open", handleOpen);
      peer.socket.on("message", function(data, flags) {
        if (!flags.binary) {
          return;
        }
        handleMessage(new Uint8Array(data).buffer);
      });
      peer.socket.on("close", function() {
        Module["websocket"].emit("close", sock.stream.fd);
      });
      peer.socket.on("error", function(error) {
        sock.error = 14;
        Module["websocket"].emit("error", [sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused"]);
      });
    } else {
      peer.socket.onopen = handleOpen;
      peer.socket.onclose = function() {
        Module["websocket"].emit("close", sock.stream.fd);
      };
      peer.socket.onmessage = function peer_socket_onmessage(event) {
        handleMessage(event.data);
      };
      peer.socket.onerror = function(error) {
        sock.error = 14;
        Module["websocket"].emit("error", [sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused"]);
      };
    }
  }, poll: function(sock) {
    if (sock.type === 1 && sock.server) {
      return sock.pending.length ? 64 | 1 : 0;
    }
    var mask = 0;
    var dest = sock.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) : null;
    if (sock.recv_queue.length || !dest || dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
      mask |= 64 | 1;
    }
    if (!dest || dest && dest.socket.readyState === dest.socket.OPEN) {
      mask |= 4;
    }
    if (dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
      mask |= 16;
    }
    return mask;
  }, ioctl: function(sock, request, arg) {
    switch (request) {
      case 21531:
        var bytes = 0;
        if (sock.recv_queue.length) {
          bytes = sock.recv_queue[0].data.length;
        }
        HEAP32[arg >> 2] = bytes;
        return 0;
      default:
        return 28;
    }
  }, close: function(sock) {
    if (sock.server) {
      try {
        sock.server.close();
      } catch (e) {
      }
      sock.server = null;
    }
    var peers = Object.keys(sock.peers);
    for (var i = 0; i < peers.length; i++) {
      var peer = sock.peers[peers[i]];
      try {
        peer.socket.close();
      } catch (e) {
      }
      SOCKFS.websocket_sock_ops.removePeer(sock, peer);
    }
    return 0;
  }, bind: function(sock, addr, port) {
    if (typeof sock.saddr != "undefined" || typeof sock.sport != "undefined") {
      throw new FS.ErrnoError(28);
    }
    sock.saddr = addr;
    sock.sport = port;
    if (sock.type === 2) {
      if (sock.server) {
        sock.server.close();
        sock.server = null;
      }
      try {
        sock.sock_ops.listen(sock, 0);
      } catch (e) {
        if (!(e instanceof FS.ErrnoError))
          throw e;
        if (e.errno !== 138)
          throw e;
      }
    }
  }, connect: function(sock, addr, port) {
    if (sock.server) {
      throw new FS.ErrnoError(138);
    }
    if (typeof sock.daddr != "undefined" && typeof sock.dport != "undefined") {
      var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
      if (dest) {
        if (dest.socket.readyState === dest.socket.CONNECTING) {
          throw new FS.ErrnoError(7);
        } else {
          throw new FS.ErrnoError(30);
        }
      }
    }
    var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
    sock.daddr = peer.addr;
    sock.dport = peer.port;
    throw new FS.ErrnoError(26);
  }, listen: function(sock, backlog) {
    if (!ENVIRONMENT_IS_NODE) {
      throw new FS.ErrnoError(138);
    }
  }, accept: function(listensock) {
    if (!listensock.server) {
      throw new FS.ErrnoError(28);
    }
    var newsock = listensock.pending.shift();
    newsock.stream.flags = listensock.stream.flags;
    return newsock;
  }, getname: function(sock, peer) {
    var addr, port;
    if (peer) {
      if (sock.daddr === void 0 || sock.dport === void 0) {
        throw new FS.ErrnoError(53);
      }
      addr = sock.daddr;
      port = sock.dport;
    } else {
      addr = sock.saddr || 0;
      port = sock.sport || 0;
    }
    return { addr, port };
  }, sendmsg: function(sock, buffer2, offset, length, addr, port) {
    if (sock.type === 2) {
      if (addr === void 0 || port === void 0) {
        addr = sock.daddr;
        port = sock.dport;
      }
      if (addr === void 0 || port === void 0) {
        throw new FS.ErrnoError(17);
      }
    } else {
      addr = sock.daddr;
      port = sock.dport;
    }
    var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
    if (sock.type === 1) {
      if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
        throw new FS.ErrnoError(53);
      } else if (dest.socket.readyState === dest.socket.CONNECTING) {
        throw new FS.ErrnoError(6);
      }
    }
    if (ArrayBuffer.isView(buffer2)) {
      offset += buffer2.byteOffset;
      buffer2 = buffer2.buffer;
    }
    var data;
    data = buffer2.slice(offset, offset + length);
    if (sock.type === 2) {
      if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
        if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
          dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
        }
        dest.dgram_send_queue.push(data);
        return length;
      }
    }
    try {
      dest.socket.send(data);
      return length;
    } catch (e) {
      throw new FS.ErrnoError(28);
    }
  }, recvmsg: function(sock, length) {
    if (sock.type === 1 && sock.server) {
      throw new FS.ErrnoError(53);
    }
    var queued = sock.recv_queue.shift();
    if (!queued) {
      if (sock.type === 1) {
        var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
        if (!dest) {
          throw new FS.ErrnoError(53);
        } else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
          return null;
        } else {
          throw new FS.ErrnoError(6);
        }
      } else {
        throw new FS.ErrnoError(6);
      }
    }
    var queuedLength = queued.data.byteLength || queued.data.length;
    var queuedOffset = queued.data.byteOffset || 0;
    var queuedBuffer = queued.data.buffer || queued.data;
    var bytesRead = Math.min(length, queuedLength);
    var res = { buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead), addr: queued.addr, port: queued.port };
    if (sock.type === 1 && bytesRead < queuedLength) {
      var bytesRemaining = queuedLength - bytesRead;
      queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
      sock.recv_queue.unshift(queued);
    }
    return res;
  } } };
  function getSocketFromFD(fd) {
    var socket = SOCKFS.getSocket(fd);
    if (!socket)
      throw new FS.ErrnoError(8);
    return socket;
  }
  function setErrNo(value) {
    HEAP32[___errno_location() >> 2] = value;
    return value;
  }
  function inetPton4(str) {
    var b = str.split(".");
    for (var i = 0; i < 4; i++) {
      var tmp = Number(b[i]);
      if (isNaN(tmp))
        return null;
      b[i] = tmp;
    }
    return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0;
  }
  function jstoi_q(str) {
    return parseInt(str);
  }
  function inetPton6(str) {
    var words;
    var w, offset, z;
    var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var parts = [];
    if (!valid6regx.test(str)) {
      return null;
    }
    if (str === "::") {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (str.startsWith("::")) {
      str = str.replace("::", "Z:");
    } else {
      str = str.replace("::", ":Z:");
    }
    if (str.indexOf(".") > 0) {
      str = str.replace(new RegExp("[.]", "g"), ":");
      words = str.split(":");
      words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
      words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
      words = words.slice(0, words.length - 2);
    } else {
      words = str.split(":");
    }
    offset = 0;
    z = 0;
    for (w = 0; w < words.length; w++) {
      if (typeof words[w] == "string") {
        if (words[w] === "Z") {
          for (z = 0; z < 8 - words.length + 1; z++) {
            parts[w + z] = 0;
          }
          offset = z - 1;
        } else {
          parts[w + offset] = _htons(parseInt(words[w], 16));
        }
      } else {
        parts[w + offset] = words[w];
      }
    }
    return [parts[1] << 16 | parts[0], parts[3] << 16 | parts[2], parts[5] << 16 | parts[4], parts[7] << 16 | parts[6]];
  }
  function writeSockaddr(sa, family, addr, port, addrlen) {
    switch (family) {
      case 2:
        addr = inetPton4(addr);
        zeroMemory(sa, 16);
        if (addrlen) {
          HEAP32[addrlen >> 2] = 16;
        }
        HEAP16[sa >> 1] = family;
        HEAP32[sa + 4 >> 2] = addr;
        HEAP16[sa + 2 >> 1] = _htons(port);
        break;
      case 10:
        addr = inetPton6(addr);
        zeroMemory(sa, 28);
        if (addrlen) {
          HEAP32[addrlen >> 2] = 28;
        }
        HEAP32[sa >> 2] = family;
        HEAP32[sa + 8 >> 2] = addr[0];
        HEAP32[sa + 12 >> 2] = addr[1];
        HEAP32[sa + 16 >> 2] = addr[2];
        HEAP32[sa + 20 >> 2] = addr[3];
        HEAP16[sa + 2 >> 1] = _htons(port);
        break;
      default:
        return 5;
    }
    return 0;
  }
  var DNS = { address_map: { id: 1, addrs: {}, names: {} }, lookup_name: function(name) {
    var res = inetPton4(name);
    if (res !== null) {
      return name;
    }
    res = inetPton6(name);
    if (res !== null) {
      return name;
    }
    var addr;
    if (DNS.address_map.addrs[name]) {
      addr = DNS.address_map.addrs[name];
    } else {
      var id = DNS.address_map.id++;
      assert(id < 65535, "exceeded max address mappings of 65535");
      addr = "172.29." + (id & 255) + "." + (id & 65280);
      DNS.address_map.names[addr] = name;
      DNS.address_map.addrs[name] = addr;
    }
    return addr;
  }, lookup_addr: function(addr) {
    if (DNS.address_map.names[addr]) {
      return DNS.address_map.names[addr];
    }
    return null;
  } };
  var SYSCALLS = { DEFAULT_POLLMASK: 5, calculateAt: function(dirfd, path, allowEmpty) {
    if (path[0] === "/") {
      return path;
    }
    var dir;
    if (dirfd === -100) {
      dir = FS.cwd();
    } else {
      var dirstream = FS.getStream(dirfd);
      if (!dirstream)
        throw new FS.ErrnoError(8);
      dir = dirstream.path;
    }
    if (path.length == 0) {
      if (!allowEmpty) {
        throw new FS.ErrnoError(44);
      }
      return dir;
    }
    return PATH.join2(dir, path);
  }, doStat: function(func, path, buf) {
    try {
      var stat = func(path);
    } catch (e) {
      if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
        return -54;
      }
      throw e;
    }
    HEAP32[buf >> 2] = stat.dev;
    HEAP32[buf + 4 >> 2] = 0;
    HEAP32[buf + 8 >> 2] = stat.ino;
    HEAP32[buf + 12 >> 2] = stat.mode;
    HEAP32[buf + 16 >> 2] = stat.nlink;
    HEAP32[buf + 20 >> 2] = stat.uid;
    HEAP32[buf + 24 >> 2] = stat.gid;
    HEAP32[buf + 28 >> 2] = stat.rdev;
    HEAP32[buf + 32 >> 2] = 0;
    tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
    HEAP32[buf + 48 >> 2] = 4096;
    HEAP32[buf + 52 >> 2] = stat.blocks;
    HEAP32[buf + 56 >> 2] = stat.atime.getTime() / 1e3 | 0;
    HEAP32[buf + 60 >> 2] = 0;
    HEAP32[buf + 64 >> 2] = stat.mtime.getTime() / 1e3 | 0;
    HEAP32[buf + 68 >> 2] = 0;
    HEAP32[buf + 72 >> 2] = stat.ctime.getTime() / 1e3 | 0;
    HEAP32[buf + 76 >> 2] = 0;
    tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 80 >> 2] = tempI64[0], HEAP32[buf + 84 >> 2] = tempI64[1];
    return 0;
  }, doMsync: function(addr, stream, len, flags, offset) {
    var buffer2 = HEAPU8.slice(addr, addr + len);
    FS.msync(stream, buffer2, offset, len, flags);
  }, doMkdir: function(path, mode) {
    path = PATH.normalize(path);
    if (path[path.length - 1] === "/")
      path = path.substr(0, path.length - 1);
    FS.mkdir(path, mode, 0);
    return 0;
  }, doMknod: function(path, mode, dev) {
    switch (mode & 61440) {
      case 32768:
      case 8192:
      case 24576:
      case 4096:
      case 49152:
        break;
      default:
        return -28;
    }
    FS.mknod(path, mode, dev);
    return 0;
  }, doReadlink: function(path, buf, bufsize) {
    if (bufsize <= 0)
      return -28;
    var ret = FS.readlink(path);
    var len = Math.min(bufsize, lengthBytesUTF8(ret));
    var endChar = HEAP8[buf + len];
    stringToUTF8(ret, buf, bufsize + 1);
    HEAP8[buf + len] = endChar;
    return len;
  }, doAccess: function(path, amode) {
    if (amode & ~7) {
      return -28;
    }
    var lookup = FS.lookupPath(path, { follow: true });
    var node = lookup.node;
    if (!node) {
      return -44;
    }
    var perms = "";
    if (amode & 4)
      perms += "r";
    if (amode & 2)
      perms += "w";
    if (amode & 1)
      perms += "x";
    if (perms && FS.nodePermissions(node, perms)) {
      return -2;
    }
    return 0;
  }, doDup: function(path, flags, suggestFD) {
    var suggest = FS.getStream(suggestFD);
    if (suggest)
      FS.close(suggest);
    return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
  }, doReadv: function(stream, iov, iovcnt, offset) {
    var ret = 0;
    for (var i = 0; i < iovcnt; i++) {
      var ptr = HEAP32[iov + i * 8 >> 2];
      var len = HEAP32[iov + (i * 8 + 4) >> 2];
      var curr = FS.read(stream, HEAP8, ptr, len, offset);
      if (curr < 0)
        return -1;
      ret += curr;
      if (curr < len)
        break;
    }
    return ret;
  }, doWritev: function(stream, iov, iovcnt, offset) {
    var ret = 0;
    for (var i = 0; i < iovcnt; i++) {
      var ptr = HEAP32[iov + i * 8 >> 2];
      var len = HEAP32[iov + (i * 8 + 4) >> 2];
      var curr = FS.write(stream, HEAP8, ptr, len, offset);
      if (curr < 0)
        return -1;
      ret += curr;
    }
    return ret;
  }, varargs: void 0, get: function() {
    assert(SYSCALLS.varargs != void 0);
    SYSCALLS.varargs += 4;
    var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
    return ret;
  }, getStr: function(ptr) {
    var ret = UTF8ToString(ptr);
    return ret;
  }, getStreamFromFD: function(fd) {
    var stream = FS.getStream(fd);
    if (!stream)
      throw new FS.ErrnoError(8);
    return stream;
  }, get64: function(low, high) {
    if (low >= 0)
      assert(high === 0);
    else
      assert(high === -1);
    return low;
  } };
  function ___syscall_accept4(fd, addr, addrlen, flags) {
    try {
      var sock = getSocketFromFD(fd);
      var newsock = sock.sock_ops.accept(sock);
      if (addr) {
        var errno = writeSockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport, addrlen);
        assert(!errno);
      }
      return newsock.stream.fd;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function inetNtop4(addr) {
    return (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255);
  }
  function inetNtop6(ints) {
    var str = "";
    var word = 0;
    var longest = 0;
    var lastzero = 0;
    var zstart = 0;
    var len = 0;
    var i = 0;
    var parts = [ints[0] & 65535, ints[0] >> 16, ints[1] & 65535, ints[1] >> 16, ints[2] & 65535, ints[2] >> 16, ints[3] & 65535, ints[3] >> 16];
    var hasipv4 = true;
    var v4part = "";
    for (i = 0; i < 5; i++) {
      if (parts[i] !== 0) {
        hasipv4 = false;
        break;
      }
    }
    if (hasipv4) {
      v4part = inetNtop4(parts[6] | parts[7] << 16);
      if (parts[5] === -1) {
        str = "::ffff:";
        str += v4part;
        return str;
      }
      if (parts[5] === 0) {
        str = "::";
        if (v4part === "0.0.0.0")
          v4part = "";
        if (v4part === "0.0.0.1")
          v4part = "1";
        str += v4part;
        return str;
      }
    }
    for (word = 0; word < 8; word++) {
      if (parts[word] === 0) {
        if (word - lastzero > 1) {
          len = 0;
        }
        lastzero = word;
        len++;
      }
      if (len > longest) {
        longest = len;
        zstart = word - longest + 1;
      }
    }
    for (word = 0; word < 8; word++) {
      if (longest > 1) {
        if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
          if (word === zstart) {
            str += ":";
            if (zstart === 0)
              str += ":";
          }
          continue;
        }
      }
      str += Number(_ntohs(parts[word] & 65535)).toString(16);
      str += word < 7 ? ":" : "";
    }
    return str;
  }
  function readSockaddr(sa, salen) {
    var family = HEAP16[sa >> 1];
    var port = _ntohs(HEAPU16[sa + 2 >> 1]);
    var addr;
    switch (family) {
      case 2:
        if (salen !== 16) {
          return { errno: 28 };
        }
        addr = HEAP32[sa + 4 >> 2];
        addr = inetNtop4(addr);
        break;
      case 10:
        if (salen !== 28) {
          return { errno: 28 };
        }
        addr = [HEAP32[sa + 8 >> 2], HEAP32[sa + 12 >> 2], HEAP32[sa + 16 >> 2], HEAP32[sa + 20 >> 2]];
        addr = inetNtop6(addr);
        break;
      default:
        return { errno: 5 };
    }
    return { family, addr, port };
  }
  function getSocketAddress(addrp, addrlen, allowNull) {
    if (allowNull && addrp === 0)
      return null;
    var info = readSockaddr(addrp, addrlen);
    if (info.errno)
      throw new FS.ErrnoError(info.errno);
    info.addr = DNS.lookup_addr(info.addr) || info.addr;
    return info;
  }
  function ___syscall_bind(fd, addr, addrlen) {
    try {
      var sock = getSocketFromFD(fd);
      var info = getSocketAddress(addr, addrlen);
      sock.sock_ops.bind(sock, info.addr, info.port);
      return 0;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_connect(fd, addr, addrlen) {
    try {
      var sock = getSocketFromFD(fd);
      var info = getSocketAddress(addr, addrlen);
      sock.sock_ops.connect(sock, info.addr, info.port);
      return 0;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_faccessat(dirfd, path, amode, flags) {
    try {
      path = SYSCALLS.getStr(path);
      assert(flags === 0);
      path = SYSCALLS.calculateAt(dirfd, path);
      return SYSCALLS.doAccess(path, amode);
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_fcntl64(fd, cmd, varargs) {
    SYSCALLS.varargs = varargs;
    try {
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -28;
          }
          var newStream;
          newStream = FS.open(stream.path, stream.flags, 0, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 5: {
          var arg = SYSCALLS.get();
          var offset = 0;
          HEAP16[arg + offset >> 1] = 2;
          return 0;
        }
        case 6:
        case 7:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          setErrNo(28);
          return -1;
        default: {
          return -28;
        }
      }
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_fstat64(fd, buf) {
    try {
      var stream = SYSCALLS.getStreamFromFD(fd);
      return SYSCALLS.doStat(FS.stat, stream.path, buf);
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_fstatat64(dirfd, path, buf, flags) {
    try {
      path = SYSCALLS.getStr(path);
      var nofollow = flags & 256;
      var allowEmpty = flags & 4096;
      flags = flags & ~4352;
      assert(!flags, flags);
      path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
      return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_getdents64(fd, dirp, count) {
    try {
      var stream = SYSCALLS.getStreamFromFD(fd);
      if (!stream.getdents) {
        stream.getdents = FS.readdir(stream.path);
      }
      var struct_size = 280;
      var pos = 0;
      var off = FS.llseek(stream, 0, 1);
      var idx = Math.floor(off / struct_size);
      while (idx < stream.getdents.length && pos + struct_size <= count) {
        var id;
        var type;
        var name = stream.getdents[idx];
        if (name === ".") {
          id = stream.node.id;
          type = 4;
        } else if (name === "..") {
          var lookup = FS.lookupPath(stream.path, { parent: true });
          id = lookup.node.id;
          type = 4;
        } else {
          var child = FS.lookupNode(stream.node, name);
          id = child.id;
          type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8;
        }
        assert(id);
        tempI64 = [id >>> 0, (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos >> 2] = tempI64[0], HEAP32[dirp + pos + 4 >> 2] = tempI64[1];
        tempI64 = [(idx + 1) * struct_size >>> 0, (tempDouble = (idx + 1) * struct_size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos + 8 >> 2] = tempI64[0], HEAP32[dirp + pos + 12 >> 2] = tempI64[1];
        HEAP16[dirp + pos + 16 >> 1] = 280;
        HEAP8[dirp + pos + 18 >> 0] = type;
        stringToUTF8(name, dirp + pos + 19, 256);
        pos += struct_size;
        idx += 1;
      }
      FS.llseek(stream, idx * struct_size, 0);
      return pos;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_getegid32() {
    return 0;
  }
  function ___syscall_geteuid32() {
    return ___syscall_getegid32();
  }
  function ___syscall_getgid32() {
    return ___syscall_getegid32();
  }
  function ___syscall_getpeername(fd, addr, addrlen) {
    try {
      var sock = getSocketFromFD(fd);
      if (!sock.daddr) {
        return -53;
      }
      var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport, addrlen);
      assert(!errno);
      return 0;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_getsockname(fd, addr, addrlen) {
    try {
      var sock = getSocketFromFD(fd);
      var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.saddr || "0.0.0.0"), sock.sport, addrlen);
      assert(!errno);
      return 0;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_getsockopt(fd, level, optname, optval, optlen) {
    try {
      var sock = getSocketFromFD(fd);
      if (level === 1) {
        if (optname === 4) {
          HEAP32[optval >> 2] = sock.error;
          HEAP32[optlen >> 2] = 4;
          sock.error = null;
          return 0;
        }
      }
      return -50;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_getuid32() {
    return ___syscall_getegid32();
  }
  function ___syscall_ioctl(fd, op, varargs) {
    SYSCALLS.varargs = varargs;
    try {
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509:
        case 21505: {
          if (!stream.tty)
            return -59;
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty)
            return -59;
          return 0;
        }
        case 21519: {
          if (!stream.tty)
            return -59;
          var argp = SYSCALLS.get();
          HEAP32[argp >> 2] = 0;
          return 0;
        }
        case 21520: {
          if (!stream.tty)
            return -59;
          return -28;
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          if (!stream.tty)
            return -59;
          return 0;
        }
        case 21524: {
          if (!stream.tty)
            return -59;
          return 0;
        }
        default:
          abort("bad ioctl syscall " + op);
      }
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_listen(fd, backlog) {
    try {
      var sock = getSocketFromFD(fd);
      sock.sock_ops.listen(sock, backlog);
      return 0;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_lstat64(path, buf) {
    try {
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.lstat, path, buf);
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_open(path, flags, varargs) {
    SYSCALLS.varargs = varargs;
    try {
      var pathname = SYSCALLS.getStr(path);
      var mode = varargs ? SYSCALLS.get() : 0;
      var stream = FS.open(pathname, flags, mode);
      return stream.fd;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  var PIPEFS = { BUCKET_BUFFER_SIZE: 8192, mount: function(mount) {
    return FS.createNode(null, "/", 16384 | 511, 0);
  }, createPipe: function() {
    var pipe = { buckets: [], refcnt: 2 };
    pipe.buckets.push({ buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: 0, roffset: 0 });
    var rName = PIPEFS.nextname();
    var wName = PIPEFS.nextname();
    var rNode = FS.createNode(PIPEFS.root, rName, 4096, 0);
    var wNode = FS.createNode(PIPEFS.root, wName, 4096, 0);
    rNode.pipe = pipe;
    wNode.pipe = pipe;
    var readableStream = FS.createStream({ path: rName, node: rNode, flags: 0, seekable: false, stream_ops: PIPEFS.stream_ops });
    rNode.stream = readableStream;
    var writableStream = FS.createStream({ path: wName, node: wNode, flags: 1, seekable: false, stream_ops: PIPEFS.stream_ops });
    wNode.stream = writableStream;
    return { readable_fd: readableStream.fd, writable_fd: writableStream.fd };
  }, stream_ops: { poll: function(stream) {
    var pipe = stream.node.pipe;
    if ((stream.flags & 2097155) === 1) {
      return 256 | 4;
    } else {
      if (pipe.buckets.length > 0) {
        for (var i = 0; i < pipe.buckets.length; i++) {
          var bucket = pipe.buckets[i];
          if (bucket.offset - bucket.roffset > 0) {
            return 64 | 1;
          }
        }
      }
    }
    return 0;
  }, ioctl: function(stream, request, varargs) {
    return 28;
  }, fsync: function(stream) {
    return 28;
  }, read: function(stream, buffer2, offset, length, position) {
    var pipe = stream.node.pipe;
    var currentLength = 0;
    for (var i = 0; i < pipe.buckets.length; i++) {
      var bucket = pipe.buckets[i];
      currentLength += bucket.offset - bucket.roffset;
    }
    assert(buffer2 instanceof ArrayBuffer || ArrayBuffer.isView(buffer2));
    var data = buffer2.subarray(offset, offset + length);
    if (length <= 0) {
      return 0;
    }
    if (currentLength == 0) {
      throw new FS.ErrnoError(6);
    }
    var toRead = Math.min(currentLength, length);
    var totalRead = toRead;
    var toRemove = 0;
    for (var i = 0; i < pipe.buckets.length; i++) {
      var currBucket = pipe.buckets[i];
      var bucketSize = currBucket.offset - currBucket.roffset;
      if (toRead <= bucketSize) {
        var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
        if (toRead < bucketSize) {
          tmpSlice = tmpSlice.subarray(0, toRead);
          currBucket.roffset += toRead;
        } else {
          toRemove++;
        }
        data.set(tmpSlice);
        break;
      } else {
        var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
        data.set(tmpSlice);
        data = data.subarray(tmpSlice.byteLength);
        toRead -= tmpSlice.byteLength;
        toRemove++;
      }
    }
    if (toRemove && toRemove == pipe.buckets.length) {
      toRemove--;
      pipe.buckets[toRemove].offset = 0;
      pipe.buckets[toRemove].roffset = 0;
    }
    pipe.buckets.splice(0, toRemove);
    return totalRead;
  }, write: function(stream, buffer2, offset, length, position) {
    var pipe = stream.node.pipe;
    assert(buffer2 instanceof ArrayBuffer || ArrayBuffer.isView(buffer2));
    var data = buffer2.subarray(offset, offset + length);
    var dataLen = data.byteLength;
    if (dataLen <= 0) {
      return 0;
    }
    var currBucket = null;
    if (pipe.buckets.length == 0) {
      currBucket = { buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: 0, roffset: 0 };
      pipe.buckets.push(currBucket);
    } else {
      currBucket = pipe.buckets[pipe.buckets.length - 1];
    }
    assert(currBucket.offset <= PIPEFS.BUCKET_BUFFER_SIZE);
    var freeBytesInCurrBuffer = PIPEFS.BUCKET_BUFFER_SIZE - currBucket.offset;
    if (freeBytesInCurrBuffer >= dataLen) {
      currBucket.buffer.set(data, currBucket.offset);
      currBucket.offset += dataLen;
      return dataLen;
    } else if (freeBytesInCurrBuffer > 0) {
      currBucket.buffer.set(data.subarray(0, freeBytesInCurrBuffer), currBucket.offset);
      currBucket.offset += freeBytesInCurrBuffer;
      data = data.subarray(freeBytesInCurrBuffer, data.byteLength);
    }
    var numBuckets = data.byteLength / PIPEFS.BUCKET_BUFFER_SIZE | 0;
    var remElements = data.byteLength % PIPEFS.BUCKET_BUFFER_SIZE;
    for (var i = 0; i < numBuckets; i++) {
      var newBucket = { buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: PIPEFS.BUCKET_BUFFER_SIZE, roffset: 0 };
      pipe.buckets.push(newBucket);
      newBucket.buffer.set(data.subarray(0, PIPEFS.BUCKET_BUFFER_SIZE));
      data = data.subarray(PIPEFS.BUCKET_BUFFER_SIZE, data.byteLength);
    }
    if (remElements > 0) {
      var newBucket = { buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: data.byteLength, roffset: 0 };
      pipe.buckets.push(newBucket);
      newBucket.buffer.set(data);
    }
    return dataLen;
  }, close: function(stream) {
    var pipe = stream.node.pipe;
    pipe.refcnt--;
    if (pipe.refcnt === 0) {
      pipe.buckets = null;
    }
  } }, nextname: function() {
    if (!PIPEFS.nextname.current) {
      PIPEFS.nextname.current = 0;
    }
    return "pipe[" + PIPEFS.nextname.current++ + "]";
  } };
  function ___syscall_pipe(fdPtr) {
    try {
      if (fdPtr == 0) {
        throw new FS.ErrnoError(21);
      }
      var res = PIPEFS.createPipe();
      HEAP32[fdPtr >> 2] = res.readable_fd;
      HEAP32[fdPtr + 4 >> 2] = res.writable_fd;
      return 0;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_poll(fds, nfds, timeout) {
    try {
      var nonzero = 0;
      for (var i = 0; i < nfds; i++) {
        var pollfd = fds + 8 * i;
        var fd = HEAP32[pollfd >> 2];
        var events = HEAP16[pollfd + 4 >> 1];
        var mask = 32;
        var stream = FS.getStream(fd);
        if (stream) {
          mask = SYSCALLS.DEFAULT_POLLMASK;
          if (stream.stream_ops.poll) {
            mask = stream.stream_ops.poll(stream);
          }
        }
        mask &= events | 8 | 16;
        if (mask)
          nonzero++;
        HEAP16[pollfd + 6 >> 1] = mask;
      }
      return nonzero;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_recvfrom(fd, buf, len, flags, addr, addrlen) {
    try {
      var sock = getSocketFromFD(fd);
      var msg = sock.sock_ops.recvmsg(sock, len);
      if (!msg)
        return 0;
      if (addr) {
        var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen);
        assert(!errno);
      }
      HEAPU8.set(msg.buffer, buf);
      return msg.buffer.byteLength;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_rename(old_path, new_path) {
    try {
      old_path = SYSCALLS.getStr(old_path);
      new_path = SYSCALLS.getStr(new_path);
      FS.rename(old_path, new_path);
      return 0;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_sendto(fd, message, length, flags, addr, addr_len) {
    try {
      var sock = getSocketFromFD(fd);
      var dest = getSocketAddress(addr, addr_len, true);
      if (!dest) {
        return FS.write(sock.stream, HEAP8, message, length);
      } else {
        return sock.sock_ops.sendmsg(sock, HEAP8, message, length, dest.addr, dest.port);
      }
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_socket(domain, type, protocol) {
    try {
      var sock = SOCKFS.createSocket(domain, type, protocol);
      assert(sock.stream.fd < 64);
      return sock.stream.fd;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_stat64(path, buf) {
    try {
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.stat, path, buf);
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function ___syscall_unlink(path) {
    try {
      path = SYSCALLS.getStr(path);
      FS.unlink(path);
      return 0;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function __emscripten_throw_longjmp() {
    throw Infinity;
  }
  function __gmtime_js(time, tmPtr) {
    var date = new Date(HEAP32[time >> 2] * 1e3);
    HEAP32[tmPtr >> 2] = date.getUTCSeconds();
    HEAP32[tmPtr + 4 >> 2] = date.getUTCMinutes();
    HEAP32[tmPtr + 8 >> 2] = date.getUTCHours();
    HEAP32[tmPtr + 12 >> 2] = date.getUTCDate();
    HEAP32[tmPtr + 16 >> 2] = date.getUTCMonth();
    HEAP32[tmPtr + 20 >> 2] = date.getUTCFullYear() - 1900;
    HEAP32[tmPtr + 24 >> 2] = date.getUTCDay();
    var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
    HEAP32[tmPtr + 28 >> 2] = yday;
  }
  function __munmap_js(addr, len, prot, flags, fd, offset) {
    try {
      var stream = FS.getStream(fd);
      if (stream) {
        if (prot & 2) {
          SYSCALLS.doMsync(addr, stream, len, flags, offset);
        }
        FS.munmap(stream);
      }
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return -e.errno;
    }
  }
  function _tzset_impl(timezone, daylight, tzname) {
    var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    var winter = new Date(currentYear, 0, 1);
    var summer = new Date(currentYear, 6, 1);
    var winterOffset = winter.getTimezoneOffset();
    var summerOffset = summer.getTimezoneOffset();
    var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
    HEAP32[timezone >> 2] = stdTimezoneOffset * 60;
    HEAP32[daylight >> 2] = Number(winterOffset != summerOffset);
    function extractZone(date) {
      var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      return match ? match[1] : "GMT";
    }
    var winterName = extractZone(winter);
    var summerName = extractZone(summer);
    var winterNamePtr = allocateUTF8(winterName);
    var summerNamePtr = allocateUTF8(summerName);
    if (summerOffset < winterOffset) {
      HEAP32[tzname >> 2] = winterNamePtr;
      HEAP32[tzname + 4 >> 2] = summerNamePtr;
    } else {
      HEAP32[tzname >> 2] = summerNamePtr;
      HEAP32[tzname + 4 >> 2] = winterNamePtr;
    }
  }
  function __tzset_js(timezone, daylight, tzname) {
    if (__tzset_js.called)
      return;
    __tzset_js.called = true;
    _tzset_impl(timezone, daylight, tzname);
  }
  function _abort() {
    abort("native code called abort()");
  }
  function callUserCallback(func, synchronous) {
    if (runtimeExited || ABORT) {
      err("user callback triggered after runtime exited or application aborted.  Ignoring.");
      return;
    }
    if (synchronous) {
      func();
      return;
    }
    try {
      func();
    } catch (e) {
      handleException(e);
    }
  }
  function _alarm(seconds) {
    setTimeout(function() {
      callUserCallback(function() {
        _raise(14);
      });
    }, seconds * 1e3);
  }
  var _emscripten_get_now;
  _emscripten_get_now = () => performance.now();
  var _emscripten_get_now_is_monotonic = true;
  function _clock_gettime(clk_id, tp) {
    var now;
    if (clk_id === 0) {
      now = Date.now();
    } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
      now = _emscripten_get_now();
    } else {
      setErrNo(28);
      return -1;
    }
    HEAP32[tp >> 2] = now / 1e3 | 0;
    HEAP32[tp + 4 >> 2] = now % 1e3 * 1e3 * 1e3 | 0;
    return 0;
  }
  function _emscripten_console_error(str) {
    if (UTF8ToString(str).endsWith("__syscall_setsockopt\n"))
      return;
    assert(typeof str == "number");
    console.error(UTF8ToString(str));
  }
  function _emscripten_get_heap_max() {
    return 2147483648;
  }
  function emscripten_realloc_buffer(size) {
    try {
      wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
      updateGlobalBufferAndViews(wasmMemory.buffer);
      return 1;
    } catch (e) {
      err("emscripten_realloc_buffer: Attempted to grow heap from " + buffer.byteLength + " bytes to " + size + " bytes, but got error: " + e);
    }
  }
  function _emscripten_resize_heap(requestedSize) {
    var oldSize = HEAPU8.length;
    requestedSize = requestedSize >>> 0;
    assert(requestedSize > oldSize);
    var maxHeapSize = _emscripten_get_heap_max();
    if (requestedSize > maxHeapSize) {
      err("Cannot enlarge memory, asked to go up to " + requestedSize + " bytes, but the limit is " + maxHeapSize + " bytes!");
      return false;
    }
    let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
    for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
      var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
      overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
      var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
      var replacement = emscripten_realloc_buffer(newSize);
      if (replacement) {
        return true;
      }
    }
    err("Failed to grow the heap from " + oldSize + " bytes to " + newSize + " bytes, not enough memory!");
    return false;
  }
  var ENV = {};
  function getExecutableName() {
    return thisProgram || "./this.program";
  }
  function getEnvStrings() {
    if (!getEnvStrings.strings) {
      var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
      var env = { "USER": "web_user", "LOGNAME": "web_user", "PATH": "/", "PWD": "/", "HOME": "/home/web_user", "LANG": lang, "_": getExecutableName() };
      for (var x in ENV) {
        if (ENV[x] === void 0)
          delete env[x];
        else
          env[x] = ENV[x];
      }
      var strings = [];
      for (var x in env) {
        strings.push(x + "=" + env[x]);
      }
      getEnvStrings.strings = strings;
    }
    return getEnvStrings.strings;
  }
  function _environ_get(__environ, environ_buf) {
    var bufSize = 0;
    getEnvStrings().forEach(function(string, i) {
      var ptr = environ_buf + bufSize;
      HEAP32[__environ + i * 4 >> 2] = ptr;
      writeAsciiToMemory(string, ptr);
      bufSize += string.length + 1;
    });
    return 0;
  }
  function _environ_sizes_get(penviron_count, penviron_buf_size) {
    var strings = getEnvStrings();
    HEAP32[penviron_count >> 2] = strings.length;
    var bufSize = 0;
    strings.forEach(function(string) {
      bufSize += string.length + 1;
    });
    HEAP32[penviron_buf_size >> 2] = bufSize;
    return 0;
  }
  function _fd_close(fd) {
    try {
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return e.errno;
    }
  }
  function _fd_read(fd, iov, iovcnt, pnum) {
    try {
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt);
      HEAP32[pnum >> 2] = num;
      return 0;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return e.errno;
    }
  }
  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
    try {
      var stream = SYSCALLS.getStreamFromFD(fd);
      var HIGH_OFFSET = 4294967296;
      var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
      var DOUBLE_LIMIT = 9007199254740992;
      if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
        return -61;
      }
      FS.llseek(stream, offset, whence);
      tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
      if (stream.getdents && offset === 0 && whence === 0)
        stream.getdents = null;
      return 0;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return e.errno;
    }
  }
  function _fd_write(fd, iov, iovcnt, pnum) {
    try {
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doWritev(stream, iov, iovcnt);
      HEAP32[pnum >> 2] = num;
      return 0;
    } catch (e) {
      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError))
        throw e;
      return e.errno;
    }
  }
  function _getTempRet0() {
    return getTempRet0();
  }
  function _getaddrinfo(node, service, hint, out2) {
    var addr = 0;
    var port = 0;
    var flags = 0;
    var family = 0;
    var type = 0;
    var proto = 0;
    var ai;
    function allocaddrinfo(family2, type2, proto2, canon, addr2, port2) {
      var sa, salen, ai2;
      var errno;
      salen = family2 === 10 ? 28 : 16;
      addr2 = family2 === 10 ? inetNtop6(addr2) : inetNtop4(addr2);
      sa = _malloc(salen);
      errno = writeSockaddr(sa, family2, addr2, port2);
      assert(!errno);
      ai2 = _malloc(32);
      HEAP32[ai2 + 4 >> 2] = family2;
      HEAP32[ai2 + 8 >> 2] = type2;
      HEAP32[ai2 + 12 >> 2] = proto2;
      HEAP32[ai2 + 24 >> 2] = canon;
      HEAP32[ai2 + 20 >> 2] = sa;
      if (family2 === 10) {
        HEAP32[ai2 + 16 >> 2] = 28;
      } else {
        HEAP32[ai2 + 16 >> 2] = 16;
      }
      HEAP32[ai2 + 28 >> 2] = 0;
      return ai2;
    }
    if (hint) {
      flags = HEAP32[hint >> 2];
      family = HEAP32[hint + 4 >> 2];
      type = HEAP32[hint + 8 >> 2];
      proto = HEAP32[hint + 12 >> 2];
    }
    if (type && !proto) {
      proto = type === 2 ? 17 : 6;
    }
    if (!type && proto) {
      type = proto === 17 ? 2 : 1;
    }
    if (proto === 0) {
      proto = 6;
    }
    if (type === 0) {
      type = 1;
    }
    if (!node && !service) {
      return -2;
    }
    if (flags & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32)) {
      return -1;
    }
    if (hint !== 0 && HEAP32[hint >> 2] & 2 && !node) {
      return -1;
    }
    if (flags & 32) {
      return -2;
    }
    if (type !== 0 && type !== 1 && type !== 2) {
      return -7;
    }
    if (family !== 0 && family !== 2 && family !== 10) {
      return -6;
    }
    if (service) {
      service = UTF8ToString(service);
      port = parseInt(service, 10);
      if (isNaN(port)) {
        if (flags & 1024) {
          return -2;
        }
        return -8;
      }
    }
    if (!node) {
      if (family === 0) {
        family = 2;
      }
      if ((flags & 1) === 0) {
        if (family === 2) {
          addr = _htonl(2130706433);
        } else {
          addr = [0, 0, 0, 1];
        }
      }
      ai = allocaddrinfo(family, type, proto, null, addr, port);
      HEAP32[out2 >> 2] = ai;
      return 0;
    }
    node = UTF8ToString(node);
    addr = inetPton4(node);
    if (addr !== null) {
      if (family === 0 || family === 2) {
        family = 2;
      } else if (family === 10 && flags & 8) {
        addr = [0, 0, _htonl(65535), addr];
        family = 10;
      } else {
        return -2;
      }
    } else {
      addr = inetPton6(node);
      if (addr !== null) {
        if (family === 0 || family === 10) {
          family = 10;
        } else {
          return -2;
        }
      }
    }
    if (addr != null) {
      ai = allocaddrinfo(family, type, proto, node, addr, port);
      HEAP32[out2 >> 2] = ai;
      return 0;
    }
    if (flags & 4) {
      return -2;
    }
    node = DNS.lookup_name(node);
    addr = inetPton4(node);
    if (family === 0) {
      family = 2;
    } else if (family === 10) {
      addr = [0, 0, _htonl(65535), addr];
    }
    ai = allocaddrinfo(family, type, proto, null, addr, port);
    HEAP32[out2 >> 2] = ai;
    return 0;
  }
  function _gettimeofday(ptr) {
    var now = Date.now();
    HEAP32[ptr >> 2] = now / 1e3 | 0;
    HEAP32[ptr + 4 >> 2] = now % 1e3 * 1e3 | 0;
    return 0;
  }
  function _setTempRet0(val) {
    setTempRet0(val);
  }
  function __isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }
  function __arraySum(array, index) {
    var sum = 0;
    for (var i = 0; i <= index; sum += array[i++]) {
    }
    return sum;
  }
  var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function __addDays(date, days) {
    var newDate = new Date(date.getTime());
    while (days > 0) {
      var leap = __isLeapYear(newDate.getFullYear());
      var currentMonth = newDate.getMonth();
      var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
      if (days > daysInCurrentMonth - newDate.getDate()) {
        days -= daysInCurrentMonth - newDate.getDate() + 1;
        newDate.setDate(1);
        if (currentMonth < 11) {
          newDate.setMonth(currentMonth + 1);
        } else {
          newDate.setMonth(0);
          newDate.setFullYear(newDate.getFullYear() + 1);
        }
      } else {
        newDate.setDate(newDate.getDate() + days);
        return newDate;
      }
    }
    return newDate;
  }
  function _strftime(s, maxsize, format, tm) {
    var tm_zone = HEAP32[tm + 40 >> 2];
    var date = { tm_sec: HEAP32[tm >> 2], tm_min: HEAP32[tm + 4 >> 2], tm_hour: HEAP32[tm + 8 >> 2], tm_mday: HEAP32[tm + 12 >> 2], tm_mon: HEAP32[tm + 16 >> 2], tm_year: HEAP32[tm + 20 >> 2], tm_wday: HEAP32[tm + 24 >> 2], tm_yday: HEAP32[tm + 28 >> 2], tm_isdst: HEAP32[tm + 32 >> 2], tm_gmtoff: HEAP32[tm + 36 >> 2], tm_zone: tm_zone ? UTF8ToString(tm_zone) : "" };
    var pattern = UTF8ToString(format);
    var EXPANSION_RULES_1 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
    for (var rule in EXPANSION_RULES_1) {
      pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
    }
    var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function leadingSomething(value, digits, character) {
      var str = typeof value == "number" ? value.toString() : value || "";
      while (str.length < digits) {
        str = character[0] + str;
      }
      return str;
    }
    function leadingNulls(value, digits) {
      return leadingSomething(value, digits, "0");
    }
    function compareByDay(date1, date2) {
      function sgn(value) {
        return value < 0 ? -1 : value > 0 ? 1 : 0;
      }
      var compare;
      if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
        if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
          compare = sgn(date1.getDate() - date2.getDate());
        }
      }
      return compare;
    }
    function getFirstWeekStartDate(janFourth) {
      switch (janFourth.getDay()) {
        case 0:
          return new Date(janFourth.getFullYear() - 1, 11, 29);
        case 1:
          return janFourth;
        case 2:
          return new Date(janFourth.getFullYear(), 0, 3);
        case 3:
          return new Date(janFourth.getFullYear(), 0, 2);
        case 4:
          return new Date(janFourth.getFullYear(), 0, 1);
        case 5:
          return new Date(janFourth.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(janFourth.getFullYear() - 1, 11, 30);
      }
    }
    function getWeekBasedYear(date2) {
      var thisDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
      var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
      var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
      var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
      var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
      if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
        if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
          return thisDate.getFullYear() + 1;
        } else {
          return thisDate.getFullYear();
        }
      } else {
        return thisDate.getFullYear() - 1;
      }
    }
    var EXPANSION_RULES_2 = { "%a": function(date2) {
      return WEEKDAYS[date2.tm_wday].substring(0, 3);
    }, "%A": function(date2) {
      return WEEKDAYS[date2.tm_wday];
    }, "%b": function(date2) {
      return MONTHS[date2.tm_mon].substring(0, 3);
    }, "%B": function(date2) {
      return MONTHS[date2.tm_mon];
    }, "%C": function(date2) {
      var year = date2.tm_year + 1900;
      return leadingNulls(year / 100 | 0, 2);
    }, "%d": function(date2) {
      return leadingNulls(date2.tm_mday, 2);
    }, "%e": function(date2) {
      return leadingSomething(date2.tm_mday, 2, " ");
    }, "%g": function(date2) {
      return getWeekBasedYear(date2).toString().substring(2);
    }, "%G": function(date2) {
      return getWeekBasedYear(date2);
    }, "%H": function(date2) {
      return leadingNulls(date2.tm_hour, 2);
    }, "%I": function(date2) {
      var twelveHour = date2.tm_hour;
      if (twelveHour == 0)
        twelveHour = 12;
      else if (twelveHour > 12)
        twelveHour -= 12;
      return leadingNulls(twelveHour, 2);
    }, "%j": function(date2) {
      return leadingNulls(date2.tm_mday + __arraySum(__isLeapYear(date2.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date2.tm_mon - 1), 3);
    }, "%m": function(date2) {
      return leadingNulls(date2.tm_mon + 1, 2);
    }, "%M": function(date2) {
      return leadingNulls(date2.tm_min, 2);
    }, "%n": function() {
      return "\n";
    }, "%p": function(date2) {
      if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
        return "AM";
      } else {
        return "PM";
      }
    }, "%S": function(date2) {
      return leadingNulls(date2.tm_sec, 2);
    }, "%t": function() {
      return "	";
    }, "%u": function(date2) {
      return date2.tm_wday || 7;
    }, "%U": function(date2) {
      var janFirst = new Date(date2.tm_year + 1900, 0, 1);
      var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
      var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
      if (compareByDay(firstSunday, endDate) < 0) {
        var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
        var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
        var days = firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
        return leadingNulls(Math.ceil(days / 7), 2);
      }
      return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00";
    }, "%V": function(date2) {
      var janFourthThisYear = new Date(date2.tm_year + 1900, 0, 4);
      var janFourthNextYear = new Date(date2.tm_year + 1901, 0, 4);
      var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
      var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
      var endDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
      if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
        return "53";
      }
      if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
        return "01";
      }
      var daysDifference;
      if (firstWeekStartThisYear.getFullYear() < date2.tm_year + 1900) {
        daysDifference = date2.tm_yday + 32 - firstWeekStartThisYear.getDate();
      } else {
        daysDifference = date2.tm_yday + 1 - firstWeekStartThisYear.getDate();
      }
      return leadingNulls(Math.ceil(daysDifference / 7), 2);
    }, "%w": function(date2) {
      return date2.tm_wday;
    }, "%W": function(date2) {
      var janFirst = new Date(date2.tm_year, 0, 1);
      var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
      var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
      if (compareByDay(firstMonday, endDate) < 0) {
        var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
        var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
        var days = firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
        return leadingNulls(Math.ceil(days / 7), 2);
      }
      return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00";
    }, "%y": function(date2) {
      return (date2.tm_year + 1900).toString().substring(2);
    }, "%Y": function(date2) {
      return date2.tm_year + 1900;
    }, "%z": function(date2) {
      var off = date2.tm_gmtoff;
      var ahead = off >= 0;
      off = Math.abs(off) / 60;
      off = off / 60 * 100 + off % 60;
      return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
    }, "%Z": function(date2) {
      return date2.tm_zone;
    }, "%%": function() {
      return "%";
    } };
    pattern = pattern.replace(/%%/g, "\0\0");
    for (var rule in EXPANSION_RULES_2) {
      if (pattern.includes(rule)) {
        pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
      }
    }
    pattern = pattern.replace(/\0\0/g, "%");
    var bytes = intArrayFromString(pattern, false);
    if (bytes.length > maxsize) {
      return 0;
    }
    writeArrayToMemory(bytes, s);
    return bytes.length - 1;
  }
  function _time(ptr) {
    var ret = Date.now() / 1e3 | 0;
    if (ptr) {
      HEAP32[ptr >> 2] = ret;
    }
    return ret;
  }
  var FSNode = function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292 | 73;
  var writeMode = 146;
  Object.defineProperties(FSNode.prototype, { read: { get: function() {
    return (this.mode & readMode) === readMode;
  }, set: function(val) {
    val ? this.mode |= readMode : this.mode &= ~readMode;
  } }, write: { get: function() {
    return (this.mode & writeMode) === writeMode;
  }, set: function(val) {
    val ? this.mode |= writeMode : this.mode &= ~writeMode;
  } }, isFolder: { get: function() {
    return FS.isDir(this.mode);
  } }, isDevice: { get: function() {
    return FS.isChrdev(this.mode);
  } } });
  FS.FSNode = FSNode;
  FS.staticInit();
  ERRNO_CODES = { "EPERM": 63, "ENOENT": 44, "ESRCH": 71, "EINTR": 27, "EIO": 29, "ENXIO": 60, "E2BIG": 1, "ENOEXEC": 45, "EBADF": 8, "ECHILD": 12, "EAGAIN": 6, "EWOULDBLOCK": 6, "ENOMEM": 48, "EACCES": 2, "EFAULT": 21, "ENOTBLK": 105, "EBUSY": 10, "EEXIST": 20, "EXDEV": 75, "ENODEV": 43, "ENOTDIR": 54, "EISDIR": 31, "EINVAL": 28, "ENFILE": 41, "EMFILE": 33, "ENOTTY": 59, "ETXTBSY": 74, "EFBIG": 22, "ENOSPC": 51, "ESPIPE": 70, "EROFS": 69, "EMLINK": 34, "EPIPE": 64, "EDOM": 18, "ERANGE": 68, "ENOMSG": 49, "EIDRM": 24, "ECHRNG": 106, "EL2NSYNC": 156, "EL3HLT": 107, "EL3RST": 108, "ELNRNG": 109, "EUNATCH": 110, "ENOCSI": 111, "EL2HLT": 112, "EDEADLK": 16, "ENOLCK": 46, "EBADE": 113, "EBADR": 114, "EXFULL": 115, "ENOANO": 104, "EBADRQC": 103, "EBADSLT": 102, "EDEADLOCK": 16, "EBFONT": 101, "ENOSTR": 100, "ENODATA": 116, "ETIME": 117, "ENOSR": 118, "ENONET": 119, "ENOPKG": 120, "EREMOTE": 121, "ENOLINK": 47, "EADV": 122, "ESRMNT": 123, "ECOMM": 124, "EPROTO": 65, "EMULTIHOP": 36, "EDOTDOT": 125, "EBADMSG": 9, "ENOTUNIQ": 126, "EBADFD": 127, "EREMCHG": 128, "ELIBACC": 129, "ELIBBAD": 130, "ELIBSCN": 131, "ELIBMAX": 132, "ELIBEXEC": 133, "ENOSYS": 52, "ENOTEMPTY": 55, "ENAMETOOLONG": 37, "ELOOP": 32, "EOPNOTSUPP": 138, "EPFNOSUPPORT": 139, "ECONNRESET": 15, "ENOBUFS": 42, "EAFNOSUPPORT": 5, "EPROTOTYPE": 67, "ENOTSOCK": 57, "ENOPROTOOPT": 50, "ESHUTDOWN": 140, "ECONNREFUSED": 14, "EADDRINUSE": 3, "ECONNABORTED": 13, "ENETUNREACH": 40, "ENETDOWN": 38, "ETIMEDOUT": 73, "EHOSTDOWN": 142, "EHOSTUNREACH": 23, "EINPROGRESS": 26, "EALREADY": 7, "EDESTADDRREQ": 17, "EMSGSIZE": 35, "EPROTONOSUPPORT": 66, "ESOCKTNOSUPPORT": 137, "EADDRNOTAVAIL": 4, "ENETRESET": 39, "EISCONN": 30, "ENOTCONN": 53, "ETOOMANYREFS": 141, "EUSERS": 136, "EDQUOT": 19, "ESTALE": 72, "ENOTSUP": 138, "ENOMEDIUM": 148, "EILSEQ": 25, "EOVERFLOW": 61, "ECANCELED": 11, "ENOTRECOVERABLE": 56, "EOWNERDEAD": 62, "ESTRPIPE": 135 };
  var ASSERTIONS = true;
  function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
    var u8array = new Array(len);
    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
    if (dontAddNull)
      u8array.length = numBytesWritten;
    return u8array;
  }
  function checkIncomingModuleAPI() {
    ignoredModuleProp("fetchSettings");
  }
  var asmLibraryArg = { "__assert_fail": ___assert_fail, "__call_sighandler": ___call_sighandler, "__syscall_accept4": ___syscall_accept4, "__syscall_bind": ___syscall_bind, "__syscall_connect": ___syscall_connect, "__syscall_faccessat": ___syscall_faccessat, "__syscall_fcntl64": ___syscall_fcntl64, "__syscall_fstat64": ___syscall_fstat64, "__syscall_fstatat64": ___syscall_fstatat64, "__syscall_getdents64": ___syscall_getdents64, "__syscall_getegid32": ___syscall_getegid32, "__syscall_geteuid32": ___syscall_geteuid32, "__syscall_getgid32": ___syscall_getgid32, "__syscall_getpeername": ___syscall_getpeername, "__syscall_getsockname": ___syscall_getsockname, "__syscall_getsockopt": ___syscall_getsockopt, "__syscall_getuid32": ___syscall_getuid32, "__syscall_ioctl": ___syscall_ioctl, "__syscall_listen": ___syscall_listen, "__syscall_lstat64": ___syscall_lstat64, "__syscall_open": ___syscall_open, "__syscall_pipe": ___syscall_pipe, "__syscall_poll": ___syscall_poll, "__syscall_recvfrom": ___syscall_recvfrom, "__syscall_rename": ___syscall_rename, "__syscall_sendto": ___syscall_sendto, "__syscall_socket": ___syscall_socket, "__syscall_stat64": ___syscall_stat64, "__syscall_unlink": ___syscall_unlink, "_emscripten_throw_longjmp": __emscripten_throw_longjmp, "_gmtime_js": __gmtime_js, "_munmap_js": __munmap_js, "_tzset_js": __tzset_js, "abort": _abort, "alarm": _alarm, "clock_gettime": _clock_gettime, "emscripten_console_error": _emscripten_console_error, "emscripten_resize_heap": _emscripten_resize_heap, "environ_get": _environ_get, "environ_sizes_get": _environ_sizes_get, "fd_close": _fd_close, "fd_read": _fd_read, "fd_seek": _fd_seek, "fd_write": _fd_write, "getTempRet0": _getTempRet0, "getaddrinfo": _getaddrinfo, "gettimeofday": _gettimeofday, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_iiiiii": invoke_iiiiii, "invoke_jii": invoke_jii, "invoke_vi": invoke_vi, "invoke_viii": invoke_viii, "setTempRet0": _setTempRet0, "strftime": _strftime, "time": _time };
  if (isDataURI(wasmBinaryFile))
    var asm = createWasm();
  else
    var asm = null;
  var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");
  var _malloc = Module["_malloc"] = createExportWrapper("malloc");
  var _free = Module["_free"] = createExportWrapper("free");
  var _active_requests = Module["_active_requests"] = createExportWrapper("active_requests");
  var _tick_request = Module["_tick_request"] = createExportWrapper("tick_request");
  var _start_request = Module["_start_request"] = createExportWrapper("start_request");
  var _init_curl = Module["_init_curl"] = createExportWrapper("init_curl");
  var _get_version = Module["_get_version"] = createExportWrapper("get_version");
  var _recv_from_websocket = Module["_recv_from_websocket"] = createExportWrapper("recv_from_websocket");
  var _send_to_websocket = Module["_send_to_websocket"] = createExportWrapper("send_to_websocket");
  var _close_websocket = Module["_close_websocket"] = createExportWrapper("close_websocket");
  var _cleanup_websocket = Module["_cleanup_websocket"] = createExportWrapper("cleanup_websocket");
  var _get_result_size = Module["_get_result_size"] = createExportWrapper("get_result_size");
  var _get_result_buffer = Module["_get_result_buffer"] = createExportWrapper("get_result_buffer");
  var _get_result_code = Module["_get_result_code"] = createExportWrapper("get_result_code");
  var _get_result_closed = Module["_get_result_closed"] = createExportWrapper("get_result_closed");
  var _get_result_bytes_left = Module["_get_result_bytes_left"] = createExportWrapper("get_result_bytes_left");
  var _get_result_is_text = Module["_get_result_is_text"] = createExportWrapper("get_result_is_text");
  var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");
  var _ntohs = Module["_ntohs"] = createExportWrapper("ntohs");
  var _htons = Module["_htons"] = createExportWrapper("htons");
  var _saveSetjmp = Module["_saveSetjmp"] = createExportWrapper("saveSetjmp");
  var _htonl = Module["_htonl"] = createExportWrapper("htonl");
  var ___stdio_exit = Module["___stdio_exit"] = createExportWrapper("__stdio_exit");
  var _emscripten_builtin_memalign = Module["_emscripten_builtin_memalign"] = createExportWrapper("emscripten_builtin_memalign");
  var _raise = Module["_raise"] = createExportWrapper("raise");
  var _setThrew = Module["_setThrew"] = createExportWrapper("setThrew");
  var _emscripten_stack_init = Module["_emscripten_stack_init"] = function() {
    return (_emscripten_stack_init = Module["_emscripten_stack_init"] = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
  };
  var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = function() {
    return (_emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
  };
  var _emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = function() {
    return (_emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = Module["asm"]["emscripten_stack_get_base"]).apply(null, arguments);
  };
  var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function() {
    return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
  };
  var stackSave = Module["stackSave"] = createExportWrapper("stackSave");
  var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");
  var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");
  var dynCall_jii = Module["dynCall_jii"] = createExportWrapper("dynCall_jii");
  var dynCall_iiji = Module["dynCall_iiji"] = createExportWrapper("dynCall_iiji");
  var dynCall_iiiiijjii = Module["dynCall_iiiiijjii"] = createExportWrapper("dynCall_iiiiijjii");
  var dynCall_j = Module["dynCall_j"] = createExportWrapper("dynCall_j");
  var dynCall_ji = Module["dynCall_ji"] = createExportWrapper("dynCall_ji");
  var dynCall_iij = Module["dynCall_iij"] = createExportWrapper("dynCall_iij");
  var dynCall_ijii = Module["dynCall_ijii"] = createExportWrapper("dynCall_ijii");
  var dynCall_vji = Module["dynCall_vji"] = createExportWrapper("dynCall_vji");
  var dynCall_vjjii = Module["dynCall_vjjii"] = createExportWrapper("dynCall_vjjii");
  var dynCall_iiiiiji = Module["dynCall_iiiiiji"] = createExportWrapper("dynCall_iiiiiji");
  var dynCall_jiiii = Module["dynCall_jiiii"] = createExportWrapper("dynCall_jiiii");
  var dynCall_vjii = Module["dynCall_vjii"] = createExportWrapper("dynCall_vjii");
  var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");
  function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
      return getWasmTableEntry(index)(a1, a2, a3, a4, a5);
    } catch (e) {
      stackRestore(sp);
      if (e !== e + 0)
        throw e;
      _setThrew(1, 0);
    }
  }
  function invoke_viii(index, a1, a2, a3) {
    var sp = stackSave();
    try {
      getWasmTableEntry(index)(a1, a2, a3);
    } catch (e) {
      stackRestore(sp);
      if (e !== e + 0)
        throw e;
      _setThrew(1, 0);
    }
  }
  function invoke_vi(index, a1) {
    var sp = stackSave();
    try {
      getWasmTableEntry(index)(a1);
    } catch (e) {
      stackRestore(sp);
      if (e !== e + 0)
        throw e;
      _setThrew(1, 0);
    }
  }
  function invoke_iiii(index, a1, a2, a3) {
    var sp = stackSave();
    try {
      return getWasmTableEntry(index)(a1, a2, a3);
    } catch (e) {
      stackRestore(sp);
      if (e !== e + 0)
        throw e;
      _setThrew(1, 0);
    }
  }
  function invoke_ii(index, a1) {
    var sp = stackSave();
    try {
      return getWasmTableEntry(index)(a1);
    } catch (e) {
      stackRestore(sp);
      if (e !== e + 0)
        throw e;
      _setThrew(1, 0);
    }
  }
  function invoke_jii(index, a1, a2) {
    var sp = stackSave();
    try {
      return dynCall_jii(index, a1, a2);
    } catch (e) {
      stackRestore(sp);
      if (e !== e + 0)
        throw e;
      _setThrew(1, 0);
    }
  }
  unexportedRuntimeFunction("intArrayFromString", false);
  unexportedRuntimeFunction("intArrayToString", false);
  unexportedRuntimeFunction("ccall", false);
  unexportedRuntimeFunction("cwrap", false);
  unexportedRuntimeFunction("setValue", false);
  unexportedRuntimeFunction("getValue", false);
  Module["allocate"] = allocate;
  unexportedRuntimeFunction("UTF8ArrayToString", false);
  unexportedRuntimeFunction("UTF8ToString", false);
  unexportedRuntimeFunction("stringToUTF8Array", false);
  unexportedRuntimeFunction("stringToUTF8", false);
  unexportedRuntimeFunction("lengthBytesUTF8", false);
  unexportedRuntimeFunction("stackTrace", false);
  unexportedRuntimeFunction("addOnPreRun", false);
  unexportedRuntimeFunction("addOnInit", false);
  unexportedRuntimeFunction("addOnPreMain", false);
  unexportedRuntimeFunction("addOnExit", false);
  unexportedRuntimeFunction("addOnPostRun", false);
  unexportedRuntimeFunction("writeStringToMemory", false);
  unexportedRuntimeFunction("writeArrayToMemory", false);
  unexportedRuntimeFunction("writeAsciiToMemory", false);
  unexportedRuntimeFunction("addRunDependency", true);
  unexportedRuntimeFunction("removeRunDependency", true);
  unexportedRuntimeFunction("FS_createFolder", false);
  unexportedRuntimeFunction("FS_createPath", true);
  unexportedRuntimeFunction("FS_createDataFile", true);
  unexportedRuntimeFunction("FS_createPreloadedFile", true);
  unexportedRuntimeFunction("FS_createLazyFile", true);
  unexportedRuntimeFunction("FS_createLink", false);
  unexportedRuntimeFunction("FS_createDevice", true);
  unexportedRuntimeFunction("FS_unlink", true);
  unexportedRuntimeFunction("getLEB", false);
  unexportedRuntimeFunction("getFunctionTables", false);
  unexportedRuntimeFunction("alignFunctionTables", false);
  unexportedRuntimeFunction("registerFunctions", false);
  Module["addFunction"] = addFunction;
  Module["removeFunction"] = removeFunction;
  unexportedRuntimeFunction("getFuncWrapper", false);
  unexportedRuntimeFunction("prettyPrint", false);
  unexportedRuntimeFunction("dynCall", false);
  unexportedRuntimeFunction("getCompilerSetting", false);
  unexportedRuntimeFunction("print", false);
  unexportedRuntimeFunction("printErr", false);
  unexportedRuntimeFunction("getTempRet0", false);
  unexportedRuntimeFunction("setTempRet0", false);
  unexportedRuntimeFunction("callMain", false);
  unexportedRuntimeFunction("abort", false);
  unexportedRuntimeFunction("keepRuntimeAlive", false);
  unexportedRuntimeFunction("zeroMemory", false);
  unexportedRuntimeFunction("stringToNewUTF8", false);
  unexportedRuntimeFunction("emscripten_realloc_buffer", false);
  unexportedRuntimeFunction("ENV", false);
  unexportedRuntimeFunction("withStackSave", false);
  unexportedRuntimeFunction("ERRNO_CODES", false);
  unexportedRuntimeFunction("ERRNO_MESSAGES", false);
  unexportedRuntimeFunction("setErrNo", false);
  unexportedRuntimeFunction("inetPton4", false);
  unexportedRuntimeFunction("inetNtop4", false);
  unexportedRuntimeFunction("inetPton6", false);
  unexportedRuntimeFunction("inetNtop6", false);
  unexportedRuntimeFunction("readSockaddr", false);
  unexportedRuntimeFunction("writeSockaddr", false);
  unexportedRuntimeFunction("DNS", false);
  unexportedRuntimeFunction("getHostByName", false);
  unexportedRuntimeFunction("Protocols", false);
  unexportedRuntimeFunction("Sockets", false);
  unexportedRuntimeFunction("getRandomDevice", false);
  unexportedRuntimeFunction("traverseStack", false);
  unexportedRuntimeFunction("convertFrameToPC", false);
  unexportedRuntimeFunction("UNWIND_CACHE", false);
  unexportedRuntimeFunction("saveInUnwindCache", false);
  unexportedRuntimeFunction("convertPCtoSourceLocation", false);
  unexportedRuntimeFunction("readAsmConstArgsArray", false);
  unexportedRuntimeFunction("readAsmConstArgs", false);
  unexportedRuntimeFunction("mainThreadEM_ASM", false);
  unexportedRuntimeFunction("jstoi_q", false);
  unexportedRuntimeFunction("jstoi_s", false);
  unexportedRuntimeFunction("getExecutableName", false);
  unexportedRuntimeFunction("listenOnce", false);
  unexportedRuntimeFunction("autoResumeAudioContext", false);
  unexportedRuntimeFunction("dynCallLegacy", false);
  unexportedRuntimeFunction("getDynCaller", false);
  unexportedRuntimeFunction("dynCall", false);
  unexportedRuntimeFunction("callRuntimeCallbacks", false);
  unexportedRuntimeFunction("setWasmTableEntry", false);
  unexportedRuntimeFunction("getWasmTableEntry", false);
  unexportedRuntimeFunction("handleException", false);
  unexportedRuntimeFunction("runtimeKeepalivePush", false);
  unexportedRuntimeFunction("runtimeKeepalivePop", false);
  unexportedRuntimeFunction("callUserCallback", false);
  unexportedRuntimeFunction("maybeExit", false);
  unexportedRuntimeFunction("safeSetTimeout", false);
  unexportedRuntimeFunction("asmjsMangle", false);
  unexportedRuntimeFunction("asyncLoad", false);
  unexportedRuntimeFunction("alignMemory", false);
  unexportedRuntimeFunction("mmapAlloc", false);
  unexportedRuntimeFunction("reallyNegative", false);
  unexportedRuntimeFunction("unSign", false);
  unexportedRuntimeFunction("reSign", false);
  unexportedRuntimeFunction("formatString", false);
  unexportedRuntimeFunction("PATH", false);
  unexportedRuntimeFunction("PATH_FS", false);
  unexportedRuntimeFunction("SYSCALLS", false);
  unexportedRuntimeFunction("getSocketFromFD", false);
  unexportedRuntimeFunction("getSocketAddress", false);
  unexportedRuntimeFunction("JSEvents", false);
  unexportedRuntimeFunction("registerKeyEventCallback", false);
  unexportedRuntimeFunction("specialHTMLTargets", false);
  unexportedRuntimeFunction("maybeCStringToJsString", false);
  unexportedRuntimeFunction("findEventTarget", false);
  unexportedRuntimeFunction("findCanvasEventTarget", false);
  unexportedRuntimeFunction("getBoundingClientRect", false);
  unexportedRuntimeFunction("fillMouseEventData", false);
  unexportedRuntimeFunction("registerMouseEventCallback", false);
  unexportedRuntimeFunction("registerWheelEventCallback", false);
  unexportedRuntimeFunction("registerUiEventCallback", false);
  unexportedRuntimeFunction("registerFocusEventCallback", false);
  unexportedRuntimeFunction("fillDeviceOrientationEventData", false);
  unexportedRuntimeFunction("registerDeviceOrientationEventCallback", false);
  unexportedRuntimeFunction("fillDeviceMotionEventData", false);
  unexportedRuntimeFunction("registerDeviceMotionEventCallback", false);
  unexportedRuntimeFunction("screenOrientation", false);
  unexportedRuntimeFunction("fillOrientationChangeEventData", false);
  unexportedRuntimeFunction("registerOrientationChangeEventCallback", false);
  unexportedRuntimeFunction("fillFullscreenChangeEventData", false);
  unexportedRuntimeFunction("registerFullscreenChangeEventCallback", false);
  unexportedRuntimeFunction("registerRestoreOldStyle", false);
  unexportedRuntimeFunction("hideEverythingExceptGivenElement", false);
  unexportedRuntimeFunction("restoreHiddenElements", false);
  unexportedRuntimeFunction("setLetterbox", false);
  unexportedRuntimeFunction("currentFullscreenStrategy", false);
  unexportedRuntimeFunction("restoreOldWindowedStyle", false);
  unexportedRuntimeFunction("softFullscreenResizeWebGLRenderTarget", false);
  unexportedRuntimeFunction("doRequestFullscreen", false);
  unexportedRuntimeFunction("fillPointerlockChangeEventData", false);
  unexportedRuntimeFunction("registerPointerlockChangeEventCallback", false);
  unexportedRuntimeFunction("registerPointerlockErrorEventCallback", false);
  unexportedRuntimeFunction("requestPointerLock", false);
  unexportedRuntimeFunction("fillVisibilityChangeEventData", false);
  unexportedRuntimeFunction("registerVisibilityChangeEventCallback", false);
  unexportedRuntimeFunction("registerTouchEventCallback", false);
  unexportedRuntimeFunction("fillGamepadEventData", false);
  unexportedRuntimeFunction("registerGamepadEventCallback", false);
  unexportedRuntimeFunction("registerBeforeUnloadEventCallback", false);
  unexportedRuntimeFunction("fillBatteryEventData", false);
  unexportedRuntimeFunction("battery", false);
  unexportedRuntimeFunction("registerBatteryEventCallback", false);
  unexportedRuntimeFunction("setCanvasElementSize", false);
  unexportedRuntimeFunction("getCanvasElementSize", false);
  unexportedRuntimeFunction("demangle", false);
  unexportedRuntimeFunction("demangleAll", false);
  unexportedRuntimeFunction("jsStackTrace", false);
  unexportedRuntimeFunction("stackTrace", false);
  unexportedRuntimeFunction("getEnvStrings", false);
  unexportedRuntimeFunction("checkWasiClock", false);
  unexportedRuntimeFunction("writeI53ToI64", false);
  unexportedRuntimeFunction("writeI53ToI64Clamped", false);
  unexportedRuntimeFunction("writeI53ToI64Signaling", false);
  unexportedRuntimeFunction("writeI53ToU64Clamped", false);
  unexportedRuntimeFunction("writeI53ToU64Signaling", false);
  unexportedRuntimeFunction("readI53FromI64", false);
  unexportedRuntimeFunction("readI53FromU64", false);
  unexportedRuntimeFunction("convertI32PairToI53", false);
  unexportedRuntimeFunction("convertU32PairToI53", false);
  unexportedRuntimeFunction("setImmediateWrapped", false);
  unexportedRuntimeFunction("clearImmediateWrapped", false);
  unexportedRuntimeFunction("polyfillSetImmediate", false);
  unexportedRuntimeFunction("uncaughtExceptionCount", false);
  unexportedRuntimeFunction("exceptionLast", false);
  unexportedRuntimeFunction("exceptionCaught", false);
  unexportedRuntimeFunction("ExceptionInfo", false);
  unexportedRuntimeFunction("CatchInfo", false);
  unexportedRuntimeFunction("exception_addRef", false);
  unexportedRuntimeFunction("exception_decRef", false);
  unexportedRuntimeFunction("Browser", false);
  unexportedRuntimeFunction("funcWrappers", false);
  unexportedRuntimeFunction("getFuncWrapper", false);
  unexportedRuntimeFunction("setMainLoop", false);
  unexportedRuntimeFunction("wget", false);
  unexportedRuntimeFunction("FS", false);
  unexportedRuntimeFunction("MEMFS", false);
  unexportedRuntimeFunction("TTY", false);
  unexportedRuntimeFunction("PIPEFS", false);
  unexportedRuntimeFunction("SOCKFS", false);
  unexportedRuntimeFunction("_setNetworkCallback", false);
  unexportedRuntimeFunction("tempFixedLengthArray", false);
  unexportedRuntimeFunction("miniTempWebGLFloatBuffers", false);
  unexportedRuntimeFunction("heapObjectForWebGLType", false);
  unexportedRuntimeFunction("heapAccessShiftForWebGLHeap", false);
  unexportedRuntimeFunction("GL", false);
  unexportedRuntimeFunction("emscriptenWebGLGet", false);
  unexportedRuntimeFunction("computeUnpackAlignedImageSize", false);
  unexportedRuntimeFunction("emscriptenWebGLGetTexPixelData", false);
  unexportedRuntimeFunction("emscriptenWebGLGetUniform", false);
  unexportedRuntimeFunction("webglGetUniformLocation", false);
  unexportedRuntimeFunction("webglPrepareUniformLocationsBeforeFirstUse", false);
  unexportedRuntimeFunction("webglGetLeftBracePos", false);
  unexportedRuntimeFunction("emscriptenWebGLGetVertexAttrib", false);
  unexportedRuntimeFunction("writeGLArray", false);
  unexportedRuntimeFunction("AL", false);
  unexportedRuntimeFunction("SDL_unicode", false);
  unexportedRuntimeFunction("SDL_ttfContext", false);
  unexportedRuntimeFunction("SDL_audio", false);
  unexportedRuntimeFunction("SDL", false);
  unexportedRuntimeFunction("SDL_gfx", false);
  unexportedRuntimeFunction("GLUT", false);
  unexportedRuntimeFunction("EGL", false);
  unexportedRuntimeFunction("GLFW_Window", false);
  unexportedRuntimeFunction("GLFW", false);
  unexportedRuntimeFunction("GLEW", false);
  unexportedRuntimeFunction("IDBStore", false);
  unexportedRuntimeFunction("runAndAbortIfError", false);
  unexportedRuntimeFunction("WS", false);
  unexportedRuntimeFunction("warnOnce", false);
  unexportedRuntimeFunction("stackSave", false);
  unexportedRuntimeFunction("stackRestore", false);
  unexportedRuntimeFunction("stackAlloc", false);
  unexportedRuntimeFunction("AsciiToString", false);
  unexportedRuntimeFunction("stringToAscii", false);
  unexportedRuntimeFunction("UTF16ToString", false);
  unexportedRuntimeFunction("stringToUTF16", false);
  unexportedRuntimeFunction("lengthBytesUTF16", false);
  unexportedRuntimeFunction("UTF32ToString", false);
  unexportedRuntimeFunction("stringToUTF32", false);
  unexportedRuntimeFunction("lengthBytesUTF32", false);
  unexportedRuntimeFunction("allocateUTF8", false);
  unexportedRuntimeFunction("allocateUTF8OnStack", false);
  Module["writeStackCookie"] = writeStackCookie;
  Module["checkStackCookie"] = checkStackCookie;
  Module["ALLOC_NORMAL"] = ALLOC_NORMAL;
  unexportedRuntimeSymbol("ALLOC_STACK", false);
  var calledRun;
  function ExitStatus(status) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + status + ")";
    this.status = status;
  }
  dependenciesFulfilled = function runCaller() {
    if (!calledRun)
      run();
    if (!calledRun)
      dependenciesFulfilled = runCaller;
  };
  function stackCheckInit() {
    _emscripten_stack_init();
    writeStackCookie();
  }
  function run(args) {
    args = args || arguments_;
    if (runDependencies > 0) {
      return;
    }
    stackCheckInit();
    preRun();
    if (runDependencies > 0) {
      return;
    }
    function doRun() {
      if (calledRun)
        return;
      calledRun = true;
      Module["calledRun"] = true;
      if (ABORT)
        return;
      initRuntime();
      if (Module["onRuntimeInitialized"])
        Module["onRuntimeInitialized"]();
      assert(!Module["_main"], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
      postRun();
    }
    if (Module["setStatus"]) {
      Module["setStatus"]("Running...");
      setTimeout(function() {
        setTimeout(function() {
          Module["setStatus"]("");
        }, 1);
        doRun();
      }, 1);
    } else {
      doRun();
    }
    checkStackCookie();
  }
  Module["run"] = run;
  function checkUnflushedContent() {
    var oldOut = out;
    var oldErr = err;
    var has = false;
    out = err = (x) => {
      has = true;
    };
    try {
      ___stdio_exit();
      ["stdout", "stderr"].forEach(function(name) {
        var info = FS.analyzePath("/dev/" + name);
        if (!info)
          return;
        var stream = info.object;
        var rdev = stream.rdev;
        var tty = TTY.ttys[rdev];
        if (tty && tty.output && tty.output.length) {
          has = true;
        }
      });
    } catch (e) {
    }
    out = oldOut;
    err = oldErr;
    if (has) {
      warnOnce("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.");
    }
  }
  function procExit(code) {
    EXITSTATUS = code;
    if (!keepRuntimeAlive()) {
      if (Module["onExit"])
        Module["onExit"](code);
      ABORT = true;
    }
    quit_(code, new ExitStatus(code));
  }
  if (Module["preInit"]) {
    if (typeof Module["preInit"] == "function")
      Module["preInit"] = [Module["preInit"]];
    while (Module["preInit"].length > 0) {
      Module["preInit"].pop()();
    }
  }
  if (isDataURI(wasmBinaryFile))
    run();
  const copyright_notice = `ading2210/libcurl.js - A port of libcurl to WASM for use in the browser.
Copyright (C) 2023 ading2210

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
  class CurlWebSocket extends EventTarget {
    constructor(url, protocols = [], websocket_debug = false) {
      super();
      check_loaded(true);
      if (!url.startsWith("wss://") && !url.startsWith("ws://")) {
        throw new SyntaxError("invalid url");
      }
      this.url = url;
      this.protocols = protocols;
      this.binaryType = "blob";
      this.recv_buffer = [];
      this.websocket_debug = websocket_debug;
      this.onopen = () => {
      };
      this.onerror = () => {
      };
      this.onmessage = () => {
      };
      this.onclose = () => {
      };
      this.CONNECTING = 0;
      this.OPEN = 1;
      this.CLOSING = 2;
      this.CLOSED = 3;
      this.connect();
    }
    connect() {
      this.status = this.CONNECTING;
      let data_callback = () => {
      };
      let finish_callback = (error, response_info) => {
        this.finish_callback(error, response_info);
      };
      let options = {};
      if (this.protocols) {
        options.headers = {
          "Sec-Websocket-Protocol": this.protocols.join(", ")
        };
      }
      if (this.websocket_debug) {
        options._libcurl_verbose = 1;
      }
      this.http_handle = perform_request(this.url, options, data_callback, finish_callback, null);
      this.recv_loop();
    }
    recv() {
      let buffer_size = 64 * 1024;
      let result_ptr = _recv_from_websocket(this.http_handle, buffer_size);
      let data_ptr = _get_result_buffer(result_ptr);
      let result_code = _get_result_code(result_ptr);
      if (result_code == 0) {
        if (_get_result_closed(result_ptr)) {
          this.close_callback();
          return;
        }
        let data_size = _get_result_size(result_ptr);
        let data_heap = Module.HEAPU8.subarray(data_ptr, data_ptr + data_size);
        let data = new Uint8Array(data_heap);
        this.recv_buffer.push(data);
        if (data_size !== buffer_size && !_get_result_bytes_left(result_ptr)) {
          let full_data = merge_arrays(this.recv_buffer);
          let is_text = _get_result_is_text(result_ptr);
          this.recv_buffer = [];
          this.recv_callback(full_data, is_text);
        }
      }
      if (result_code == 52) {
        this.close_callback();
      }
      _free(data_ptr);
      _free(result_ptr);
    }
    recv_loop() {
      this.event_loop = setInterval(() => {
        this.recv();
      }, 1);
    }
    recv_callback(data, is_text = false) {
      let converted;
      if (is_text) {
        converted = new TextDecoder().decode(data);
      } else {
        if (this.binaryType == "blob") {
          converted = new Blob(data);
        } else if (this.binaryType == "arraybuffer") {
          converted = data.buffer;
        } else {
          throw "invalid binaryType string";
        }
      }
      let msg_event = new MessageEvent("message", { data: converted });
      this.onmessage(msg_event);
      this.dispatchEvent(msg_event);
    }
    close_callback(error = false) {
      if (this.status == this.CLOSED)
        return;
      this.status = this.CLOSED;
      clearInterval(this.event_loop);
      _cleanup_websocket();
      if (error) {
        let error_event = new Event("error");
        this.dispatchEvent(error_event);
        this.onerror(error_event);
      } else {
        let close_event = new CloseEvent("close");
        this.dispatchEvent(close_event);
        this.onclose(close_event);
      }
    }
    finish_callback(error, response_info) {
      this.status = this.OPEN;
      if (error != 0)
        this.close_callback(true);
      let open_event = new Event("open");
      this.onopen(open_event);
      this.dispatchEvent(open_event);
    }
    send(data) {
      let is_text = false;
      if (this.status === this.CONNECTING) {
        throw new DOMException("ws not ready yet");
      }
      if (this.status === this.CLOSED) {
        return;
      }
      let data_array;
      if (typeof data === "string") {
        data_array = new TextEncoder().encode(data);
        is_text = true;
      } else if (data instanceof Blob) {
        data.arrayBuffer().then((array_buffer) => {
          data_array = new Uint8Array(array_buffer);
          this.send(data_array);
        });
        return;
      } else if (data instanceof ArrayBuffer) {
        if (ArrayBuffer.isView(data) && data instanceof DataView) {
          data_array = new Uint8Array(data.buffer);
        } else {
          data_array = new Uint8Array(data);
        }
      } else if (ArrayBuffer.isView(data)) {
        data_array = Uint8Array.from(data);
      } else {
        throw "invalid data type to be sent";
      }
      let data_ptr = allocate_array(data_array);
      let data_len = data.length;
      _send_to_websocket(this.http_handle, data_ptr, data_len, is_text);
      _free(data_ptr);
    }
    close() {
      _close_websocket(this.http_handle);
    }
    get readyState() {
      return this.status;
    }
    get bufferedAmount() {
      return 0;
    }
    get protocol() {
      return "";
    }
    get extensions() {
      return "";
    }
  }
  const status_messages = {
    100: "Continue",
    101: "Switching Protocols",
    102: "Processing",
    103: "Early Hints",
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    207: "Multi-Status",
    208: "Already Reported",
    226: "IM Used",
    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    306: "Switch Proxy",
    307: "Temporary Redirect",
    308: "Permanent Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfiable",
    417: "Expectation Failed",
    418: "I'm a teapot",
    421: "Misdirected Request",
    422: "Unprocessable Content",
    423: "Locked",
    424: "Failed Dependency",
    425: "Too Early",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    451: "Unavailable For Legal Reasons",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    510: "Not Extended",
    511: "Network Authentication Required"
  };
  function uint_from_array(array) {
    if (array.length == 4)
      return new Uint32Array(array.buffer)[0];
    else if (array.length == 2)
      return new Uint16Array(array.buffer)[0];
    else if (array.length == 1)
      return array[0];
    else
      throw "invalid array length";
  }
  function array_from_uint(int, size) {
    let buffer2 = new ArrayBuffer(size);
    let view = new DataView(buffer2);
    if (size == 1)
      view.setUint8(0, int, true);
    else if (size == 2)
      view.setUint16(0, int, true);
    else if (size == 4)
      view.setUint32(0, int, true);
    else
      throw "invalid array length";
    return new Uint8Array(buffer2);
  }
  function concat_uint8array() {
    let total_length = 0;
    for (let array of arguments) {
      total_length += array.length;
    }
    let new_array = new Uint8Array(total_length);
    let index = 0;
    for (let array of arguments) {
      new_array.set(array, index);
      index += array.length;
    }
    return new_array;
  }
  function create_packet(packet_type, stream_id, payload) {
    let stream_id_array = array_from_uint(stream_id, 4);
    let packet_type_array = array_from_uint(packet_type, 1);
    let packet = concat_uint8array(packet_type_array, stream_id_array, payload);
    return packet;
  }
  class WispStream extends EventTarget {
    constructor(hostname, port, websocket, buffer_size, stream_id, connection) {
      super();
      this.hostname = hostname;
      this.port = port;
      this.ws = websocket;
      this.buffer_size = buffer_size;
      this.stream_id = stream_id;
      this.connection = connection;
      this.send_buffer = [];
      this.open = true;
    }
    send(data) {
      if (this.buffer_size > 0 || !this.open) {
        let packet = create_packet(2, this.stream_id, data);
        this.ws.send(packet);
        this.buffer_size--;
      } else {
        this.send_buffer.push(data);
      }
    }
    //handle receiving a CONTINUE packet
    continue_received(buffer_size) {
      this.buffer_size = buffer_size;
      while (this.buffer_size > 0 && this.send_buffer.length > 0) {
        this.send(this.send_buffer.shift());
      }
    }
    //construct and send a CLOSE packet
    close(reason = 1) {
      if (!this.open)
        return;
      let payload = array_from_uint(reason, 1);
      let packet = create_packet(4, this.stream_id, payload);
      this.ws.send(packet);
      this.open = false;
      delete this.connection.active_streams[this.stream_id];
    }
  }
  class WispConnection extends EventTarget {
    constructor(wisp_url) {
      super();
      this.wisp_url = wisp_url;
      this.max_buffer_size = null;
      this.active_streams = {};
      this.connected = false;
      this.connecting = false;
      this.next_stream_id = 1;
      if (!this.wisp_url.endsWith("/")) {
        throw "wisp endpoints must end with a trailing forward slash";
      }
      this.connect_ws();
    }
    connect_ws() {
      this.ws = new WebSocket(this.wisp_url);
      this.ws.binaryType = "arraybuffer";
      this.connecting = true;
      this.ws.addEventListener("error", (event) => {
        this.on_ws_close();
        let error_event = new Event("error");
        this.dispatchEvent(error_event);
      });
      this.ws.addEventListener("close", () => {
        this.on_ws_close();
        let close_event = new CloseEvent("close");
        this.dispatchEvent(close_event);
      });
      this.ws.addEventListener("message", (event) => {
        this.on_ws_msg(event);
        if (this.connecting) {
          this.connected = true;
          this.connecting = false;
          let open_event = new Event("open");
          this.dispatchEvent(open_event);
        }
      });
    }
    close_stream(stream, reason) {
      let close_event = new CloseEvent("close", { code: reason });
      stream.open = false;
      stream.dispatchEvent(close_event);
      delete this.active_streams[stream.stream_id];
    }
    on_ws_close() {
      this.connected = false;
      this.connecting = false;
      for (let stream_id of Object.keys(this.active_streams)) {
        this.close_stream(this.active_streams[stream_id], 3);
      }
    }
    create_stream(hostname, port) {
      let stream_id = this.next_stream_id;
      this.next_stream_id++;
      let stream = new WispStream(hostname, port, this.ws, this.max_buffer_size, stream_id, this);
      stream.open = this.connected;
      let type_array = array_from_uint(1, 1);
      let port_array = array_from_uint(port, 2);
      let host_array = new TextEncoder().encode(hostname);
      let payload = concat_uint8array(type_array, port_array, host_array);
      let packet = create_packet(1, stream_id, payload);
      this.active_streams[stream_id] = stream;
      this.ws.send(packet);
      return stream;
    }
    on_ws_msg(event) {
      let packet = new Uint8Array(event.data);
      let packet_type = packet[0];
      let stream_id = uint_from_array(packet.slice(1, 5));
      let payload = packet.slice(5);
      let stream = this.active_streams[stream_id];
      if (packet_type === 2) {
        let msg_event = new MessageEvent("message", { data: payload });
        stream.dispatchEvent(msg_event);
      } else if (packet_type === 3 && stream_id == 0) {
        this.max_buffer_size = uint_from_array(payload);
      } else if (packet_type === 3) {
        stream.continue_received(uint_from_array(payload));
      } else if (packet_type === 4) {
        if (!stream)
          return;
        this.close_stream(stream, payload[0]);
      }
    }
  }
  const _wisp_connections = {};
  class WispWebSocket extends EventTarget {
    constructor(url, protocols) {
      super();
      this.url = url;
      this.protocols = protocols;
      this.binaryType = "blob";
      this.stream = null;
      this.event_listeners = {};
      this.connection = null;
      this.onopen = () => {
      };
      this.onerror = () => {
      };
      this.onmessage = () => {
      };
      this.onclose = () => {
      };
      this.CONNECTING = 0;
      this.OPEN = 1;
      this.CLOSING = 2;
      this.CLOSED = 3;
      let url_split = this.url.split("/");
      let wsproxy_path = url_split.pop().split(":");
      this.host = wsproxy_path[0];
      this.port = parseInt(wsproxy_path[1]);
      this.real_url = url_split.join("/") + "/";
      this.init_connection();
    }
    on_conn_close() {
      delete _wisp_connections[this.real_url];
    }
    init_connection() {
      this.connection = _wisp_connections[this.real_url];
      if (!this.connection) {
        this.connection = new WispConnection(this.real_url);
        this.connection.addEventListener("open", () => {
          this.init_stream();
        });
        this.connection.addEventListener("close", () => {
          this.on_conn_close();
        });
        this.connection.addEventListener("error", () => {
          this.on_conn_close();
        });
        _wisp_connections[this.real_url] = this.connection;
      } else if (!this.connection.connected) {
        this.connection.addEventListener("open", () => {
          this.init_stream();
        });
      } else {
        this.connection = _wisp_connections[this.real_url];
        this.init_stream();
      }
    }
    init_stream() {
      this.stream = this.connection.create_stream(this.host, this.port);
      this.stream.addEventListener("message", (event) => {
        let data;
        if (this.binaryType == "blob") {
          data = new Blob(event.data);
        } else if (this.binaryType == "arraybuffer") {
          data = event.data.buffer;
        } else {
          throw "invalid binaryType string";
        }
        let msg_event = new MessageEvent("message", { data });
        this.onmessage(msg_event);
        this.dispatchEvent(msg_event);
      });
      this.stream.addEventListener("close", (event) => {
        let close_event = new CloseEvent("close", { code: event.code });
        this.onclose(close_event);
        this.dispatchEvent(close_event);
      });
      let open_event = new Event("open");
      this.onopen(open_event);
      this.dispatchEvent(open_event);
    }
    send(data) {
      let data_array;
      if (typeof data === "string") {
        data_array = new TextEncoder().encode(data);
      } else if (data instanceof Blob) {
        data.arrayBuffer().then((array_buffer) => {
          data_array = new Uint8Array(array_buffer);
          this.send(data_array);
        });
        return;
      } else if (data instanceof ArrayBuffer) {
        if (ArrayBuffer.isView(data) && data instanceof DataView) {
          data_array = new Uint8Array(data.buffer);
        } else {
          data_array = new Uint8Array(data);
        }
      } else if (ArrayBuffer.isView(data)) {
        data_array = Uint8Array.from(data);
      } else {
        throw "invalid data type";
      }
      if (!this.stream) {
        throw "websocket is not ready";
      }
      this.stream.send(data_array);
    }
    close() {
      this.stream.close(2);
    }
    get bufferedAmount() {
      let total = 0;
      for (let msg of this.stream.send_buffer) {
        total += msg.length;
      }
      return total;
    }
    get extensions() {
      return "";
    }
    get protocol() {
      return "binary";
    }
    get readyState() {
      if (this.connection && !this.connection.connected && !this.connection.connecting) {
        return this.CLOSED;
      }
      if (!this.connection || !this.connection.connected) {
        return this.CONNECTING;
      }
      if (this.stream.open) {
        return this.OPEN;
      }
      return this.CLOSED;
    }
  }
  var websocket_url = null;
  var event_loop = null;
  var active_requests = 0;
  var wasm_ready = false;
  var version_dict = null;
  const libcurl_version = "0.3.8";
  function check_loaded(check_websocket) {
    if (!wasm_ready) {
      throw new Error("wasm not loaded yet, please call libcurl.load_wasm first");
    }
    if (!websocket_url && check_websocket) {
      throw new Error("websocket proxy url not set, please call libcurl.set_websocket");
    }
  }
  class HeadersDict {
    constructor(obj) {
      for (let key in obj) {
        this[key] = obj[key];
      }
      return new Proxy(this, this);
    }
    get(target, prop) {
      let keys = Object.keys(this);
      for (let key of keys) {
        if (key.toLowerCase() === prop.toLowerCase()) {
          return this[key];
        }
      }
    }
    set(target, prop, value) {
      let keys = Object.keys(this);
      for (let key of keys) {
        if (key.toLowerCase() === prop.toLowerCase()) {
          this[key] = value;
        }
      }
      this[prop] = value;
      return true;
    }
  }
  function allocate_str(str) {
    return allocate(intArrayFromString(str), ALLOC_NORMAL);
  }
  function allocate_array(array) {
    return allocate(array, ALLOC_NORMAL);
  }
  function perform_request(url, params, js_data_callback, js_end_callback, body = null) {
    let params_str = JSON.stringify(params);
    let end_callback_ptr;
    let data_callback_ptr;
    let url_ptr = allocate_str(url);
    let params_ptr = allocate_str(params_str);
    let body_ptr = null;
    let body_length = 0;
    if (body) {
      body_ptr = allocate_array(body);
      body_length = body.length;
    }
    let end_callback = (error, response_json_ptr) => {
      let response_json = UTF8ToString(response_json_ptr);
      let response_info = JSON.parse(response_json);
      Module.removeFunction(end_callback_ptr);
      Module.removeFunction(data_callback_ptr);
      if (body_ptr)
        _free(body_ptr);
      _free(url_ptr);
      _free(response_json_ptr);
      if (error != 0)
        console.error("request failed with error code " + error);
      active_requests--;
      js_end_callback(error, response_info);
    };
    let data_callback = (chunk_ptr, chunk_size) => {
      let data = Module.HEAPU8.subarray(chunk_ptr, chunk_ptr + chunk_size);
      let chunk = new Uint8Array(data);
      js_data_callback(chunk);
    };
    end_callback_ptr = Module.addFunction(end_callback, "vii");
    data_callback_ptr = Module.addFunction(data_callback, "vii");
    let http_handle = _start_request(url_ptr, params_ptr, data_callback_ptr, end_callback_ptr, body_ptr, body_length);
    _free(params_ptr);
    active_requests++;
    _tick_request();
    if (!event_loop) {
      event_loop = setInterval(() => {
        if (_active_requests() || active_requests) {
          _tick_request();
        } else {
          clearInterval(event_loop);
          event_loop = null;
        }
      }, 0);
    }
    return http_handle;
  }
  function merge_arrays(arrays) {
    let total_len = arrays.reduce((acc, val) => acc + val.length, 0);
    let new_array = new Uint8Array(total_len);
    let offset = 0;
    for (let array of arrays) {
      new_array.set(array, offset);
      offset += array.length;
    }
    return new_array;
  }
  function create_response(response_data, response_info) {
    response_info.ok = response_info.status >= 200 && response_info.status < 300;
    response_info.statusText = status_messages[response_info.status] || "";
    if (response_info.status === 204 || response_info.status === 205) {
      response_data = null;
    }
    let response_obj = new Response(response_data, response_info);
    for (let key in response_info) {
      if (key == "headers")
        continue;
      Object.defineProperty(response_obj, key, {
        writable: false,
        value: response_info[key]
      });
    }
    Object.defineProperty(response_obj, "headers", {
      writable: false,
      value: new Headers()
    });
    for (let header_name in response_info.headers) {
      let header_value = response_info.headers[header_name];
      response_obj.headers.append(header_name, header_value);
    }
    return response_obj;
  }
  async function parse_body(data) {
    let data_array = null;
    if (typeof data === "string") {
      data_array = new TextEncoder().encode(data);
    } else if (data instanceof Blob) {
      let array_buffer = await data.arrayBuffer();
      data_array = new Uint8Array(array_buffer);
    } else if (data instanceof ArrayBuffer) {
      if (ArrayBuffer.isView(data) && data instanceof DataView) {
        data_array = new Uint8Array(data.buffer);
      } else if (ArrayBuffer.isView(data)) {
        data_array = Uint8Array.from(data);
      } else {
        data_array = new Uint8Array(data);
      }
    } else if (data instanceof ReadableStream) {
      let chunks = [];
      for await (let chunk of data) {
        chunks.push(chunk);
      }
      data_array = merge_arrays(chunks);
    } else {
      throw "invalid data type to be sent";
    }
    return data_array;
  }
  async function create_options(params) {
    let body = null;
    if (params.body) {
      body = await parse_body(params.body);
      params.body = true;
    }
    if (!params.headers)
      params.headers = {};
    params.headers = new HeadersDict(params.headers);
    if (params.referer) {
      params.headers["Referer"] = params.referer;
    }
    if (!params.headers["User-Agent"]) {
      params.headers["User-Agent"] = navigator.userAgent;
    }
    return body;
  }
  function perform_request_async(url, params, body) {
    return new Promise((resolve, reject) => {
      let chunks = [];
      let data_callback = (new_data) => {
        chunks.push(new_data);
      };
      let finish_callback = (error, response_info) => {
        if (error != 0) {
          reject("libcurl.js encountered an error: " + error);
          return;
        }
        let response_data = merge_arrays(chunks);
        chunks = null;
        let response_obj = create_response(response_data, response_info);
        resolve(response_obj);
      };
      perform_request(url, params, data_callback, finish_callback, body);
    });
  }
  async function libcurl_fetch(url, params = {}) {
    check_loaded(true);
    let body = await create_options(params);
    return await perform_request_async(url, params, body);
  }
  function set_websocket_url(url) {
    websocket_url = url;
    if (!Module.websocket) {
      document.addEventListener("libcurl_load", () => {
        set_websocket_url(url);
      });
    } else
      Module.websocket.url = url;
  }
  function get_version() {
    if (!wasm_ready)
      return null;
    if (version_dict)
      return version_dict;
    let version_ptr = _get_version();
    let version_str = UTF8ToString(version_ptr);
    _free(version_ptr);
    version_dict = JSON.parse(version_str);
    version_dict.lib = libcurl_version;
    return version_dict;
  }
  function main() {
    wasm_ready = true;
    _init_curl();
    set_websocket_url(websocket_url);
    let load_event = new Event("libcurl_load");
    document.dispatchEvent(load_event);
  }
  function load_wasm(url) {
    wasmBinaryFile = url;
    createWasm();
    run();
  }
  Module.onRuntimeInitialized = main;
  return {
    fetch: libcurl_fetch,
    set_websocket: set_websocket_url,
    load_wasm,
    WebSocket: CurlWebSocket,
    wisp_connections: _wisp_connections,
    WispConnection,
    get copyright() {
      return copyright_notice;
    },
    get version() {
      return get_version();
    },
    get ready() {
      return wasm_ready;
    },
    get stdout() {
      return out;
    },
    set stdout(callback) {
      out = callback;
    },
    get stderr() {
      return err;
    },
    set stderr(callback) {
      err = callback;
    }
  };
}();

// src/main.ts
var LibcurlClient = class {
  wisp;
  constructor({ wisp }) {
    this.wisp = wisp;
  }
  ready = false;
  async init() {
    libcurl.load_wasm("libcurl.wasm");
    libcurl.set_websocket(this.wisp);
    this.ready = true;
  }
  async meta() {
  }
  async request(remote, method, body, headers, signal) {
    let payload = await libcurl.fetch(remote.href, {
      method,
      headers,
      body,
      redirect: "manual"
    });
    let respheaders = {};
    for (const [key, value] of [...payload.headers]) {
      respheaders[key] = value;
    }
    return {
      body: payload.body,
      headers: respheaders,
      status: payload.status,
      statusText: payload.statusText
    };
  }
  connect(url, origin, protocols, requestHeaders, onopen, onmessage, onclose, onerror) {
    let socket = new libcurl.WebSocket(url.toString(), protocols);
    socket.onopen = onopen;
    socket.onclose = onclose;
    socket.onerror = onerror;
    socket.onmessage = (event) => {
      console.log(event);
    };
    return (data) => {
      socket.send(data);
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
