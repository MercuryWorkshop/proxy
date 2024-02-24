(function (g, f) {
    if ("object" == typeof exports && "object" == typeof module) {
      module.exports = f(require('fs'), require('ws'), require('path'));
    } else if ("function" == typeof define && define.amd) {
      define("BareTLS", ['fs', 'ws', 'path'], f);
    } else if ("object" == typeof exports) {
      exports["BareTLS"] = f(require('fs'), require('ws'), require('path'));
    } else {
      g["BareTLS"] = f(g["fs"], g["ws"], g["path"]);
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
  TLSClient: () => TLSClient
});
module.exports = __toCommonJS(main_exports);
var TLSClient = class {
  canstart = true;
  epxclient = null;
  wsproxy = null;
  constructor({ wsproxy, mux }) {
    if (wsproxy) {
      libcurl.load_wasm("libcurl.wasm");
      libcurl.set_websocket(wsproxy);
      this.wsproxy = wsproxy;
    } else if (mux) {
      (async () => {
      })();
    }
  }
  async init() {
  }
  ready = true;
  async meta() {
  }
  async request(remote, method, body, headers, signal) {
    if (this.wsproxy) {
      return libcurl.fetch(remote.href, {
        method,
        headers,
        body,
        redirect: "manual"
      });
    } else {
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
  }
  connect(url, origin, protocols, requestHeaders, onopen, onmessage, onclose, onerror) {
    return () => {
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
