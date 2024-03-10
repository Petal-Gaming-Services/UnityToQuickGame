(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

!function () {
  function e(e) {
    this.message = e;
  }
  var t = "undefined" != typeof exports ? exports : "undefined" != typeof self ? self : $.global,
    r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  e.prototype = new Error(), e.prototype.name = "InvalidCharacterError", t.btoa || (t.btoa = function (t) {
    for (var o, n, a = String(t), i = 0, f = r, c = ""; a.charAt(0 | i) || (f = "=", i % 1); c += f.charAt(63 & o >> 8 - i % 1 * 8)) {
      if (n = a.charCodeAt(i += .75), n > 255) throw new e("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
      o = o << 8 | n;
    }
    return c;
  }), t.atob || (t.atob = function (t) {
    var o = String(t).replace(/[=]+$/, "");
    if (o.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");
    for (var n, a, i = 0, f = 0, c = ""; a = o.charAt(f++); ~a && (n = i % 4 ? 64 * n + a : a, i++ % 4) ? c += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) a = r.indexOf(a);
    return c;
  });
}();

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (n) {
  "use strict";

  function t(n, t) {
    var r = (65535 & n) + (65535 & t);
    return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
  }
  function r(n, t) {
    return n << t | n >>> 32 - t;
  }
  function e(n, e, o, u, c, f) {
    return t(r(t(t(e, n), t(u, f)), c), o);
  }
  function o(n, t, r, o, u, c, f) {
    return e(t & r | ~t & o, n, t, u, c, f);
  }
  function u(n, t, r, o, u, c, f) {
    return e(t & o | r & ~o, n, t, u, c, f);
  }
  function c(n, t, r, o, u, c, f) {
    return e(t ^ r ^ o, n, t, u, c, f);
  }
  function f(n, t, r, o, u, c, f) {
    return e(r ^ (t | ~o), n, t, u, c, f);
  }
  function i(n, r) {
    n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r;
    var e,
      i,
      a,
      d,
      h,
      l = 1732584193,
      g = -271733879,
      v = -1732584194,
      m = 271733878;
    for (e = 0; e < n.length; e += 16) i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h);
    return [l, g, v, m];
  }
  function a(n) {
    var t,
      r = "",
      e = 32 * n.length;
    for (t = 0; t < e; t += 8) r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
    return r;
  }
  function d(n) {
    var t,
      r = [];
    for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
    var e = 8 * n.length;
    for (t = 0; t < e; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
    return r;
  }
  function h(n) {
    return a(i(d(n), 8 * n.length));
  }
  function l(n, t) {
    var r,
      e,
      o = d(n),
      u = [],
      c = [];
    for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1) u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r];
    return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640));
  }
  function g(n) {
    var t,
      r,
      e = "";
    for (r = 0; r < n.length; r += 1) t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
    return e;
  }
  function v(n) {
    return unescape(encodeURIComponent(n));
  }
  function m(n) {
    return h(v(n));
  }
  function p(n) {
    return g(m(n));
  }
  function s(n, t) {
    return l(v(n), v(t));
  }
  function C(n, t) {
    return g(s(n, t));
  }
  function A(n, t, r) {
    return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n);
  }
  "function" == typeof define && define.amd ? define(function () {
    return A;
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = A : n.md5 = A;
}(void 0);

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = {
  arraybufferToString: function arraybufferToString(arrayBuffer) {
    var byteArray = new Uint8Array(arrayBuffer);
    var str = [];
    str.length = byteArray.length;
    var currentStrIndex = 0;
    var currenStrCode = 0;
    var firstByteCode = 0;
    var arrayLength = byteArray.length;
    for (var index = 0; index < arrayLength; index++) {
      firstByteCode = byteArray[index];
      if (firstByteCode > 251 && firstByteCode < 254 && index + 5 < arrayLength) {
        currenStrCode = (firstByteCode - 252) * 1073741824 + (byteArray[++index] - 128 << 24) + (byteArray[++index] - 128 << 18) + (byteArray[++index] - 128 << 12) + (byteArray[++index] - 128 << 6) + byteArray[++index] - 128;
      } else if (firstByteCode > 247 && firstByteCode < 252 && index + 4 < arrayLength) {
        currenStrCode = (firstByteCode - 248 << 24) + (byteArray[++index] - 128 << 18) + (byteArray[++index] - 128 << 12) + (byteArray[++index] - 128 << 6) + byteArray[++index] - 128;
      } else if (firstByteCode > 239 && firstByteCode < 248 && index + 3 < arrayLength) {
        currenStrCode = (firstByteCode - 240 << 18) + (byteArray[++index] - 128 << 12) + (byteArray[++index] - 128 << 6) + byteArray[++index] - 128;
      } else if (firstByteCode > 223 && firstByteCode < 240 && index + 2 < arrayLength) {
        currenStrCode = (firstByteCode - 224 << 12) + (byteArray[++index] - 128 << 6) + byteArray[++index] - 128;
      } else if (firstByteCode > 191 && firstByteCode < 224 && index + 1 < arrayLength) {
        currenStrCode = (firstByteCode - 192 << 6) + byteArray[++index] - 128;
      } else {
        currenStrCode = firstByteCode;
      }
      str[currentStrIndex++] = String.fromCharCode(currenStrCode);
    }
    str.length = currentStrIndex;
    return str.join('');
  },
  stringToArraybuffer: function stringToArraybuffer(string) {
    var length = string.length;
    var byteArray = new Array(6 * length);
    var actualLength = 0;
    for (var index = 0; index < length; index++) {
      var code = string.charCodeAt(index);
      if (code < 0x80) {
        byteArray[actualLength++] = code;
      } else if (code < 0x800) {
        byteArray[actualLength++] = 192 + (code >>> 6);
        byteArray[actualLength++] = 128 + (code & 63);
      } else if (code < 0x10000) {
        byteArray[actualLength++] = 224 + (code >>> 12);
        byteArray[actualLength++] = 128 + (code >>> 6 & 63);
        byteArray[actualLength++] = 128 + (code & 63);
      } else if (code < 0x200000) {
        byteArray[actualLength++] = 240 + (code >>> 18);
        byteArray[actualLength++] = 128 + (code >>> 12 & 63);
        byteArray[actualLength++] = 128 + (code >>> 6 & 63);
        byteArray[actualLength++] = 128 + (code & 63);
      } else if (code < 0x4000000) {
        byteArray[actualLength++] = 248 + (code >>> 24);
        byteArray[actualLength++] = 128 + (code >>> 18 & 63);
        byteArray[actualLength++] = 128 + (code >>> 12 & 63);
        byteArray[actualLength++] = 128 + (code >>> 6 & 63);
        byteArray[actualLength++] = 128 + (code & 63);
      } else if (code < 0x4000000) {
        byteArray[actualLength++] = 252 + (code >>> 30);
        byteArray[actualLength++] = 128 + (code >>> 24 & 63);
        byteArray[actualLength++] = 128 + (code >>> 18 & 63);
        byteArray[actualLength++] = 128 + (code >>> 12 & 63);
        byteArray[actualLength++] = 128 + (code >>> 6 & 63);
        byteArray[actualLength++] = 128 + (code & 63);
      }
    }
    byteArray.length = actualLength;
    return new Uint8Array(byteArray).buffer;
  },
  formatJsonStr: function formatJsonStr(str) {
    if (!str) {
      return {};
    }
    var conf = JSON.parse(str);
    var keys = Object.keys(conf);
    keys.forEach(function (v) {
      if (conf[v] === null) {
        delete conf[v];
      }
    });
    return conf;
  }
};

},{}],4:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLAudioElement2 = _interopRequireDefault(require("./HTMLAudioElement"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Audio = exports["default"] = function (_HTMLAudioElement) {
  _inherits(Audio, _HTMLAudioElement);
  function Audio(url) {
    _classCallCheck(this, Audio);
    return _callSuper(this, Audio, [url]);
  }
  return _createClass(Audio);
}(_HTMLAudioElement2["default"]);

},{"./HTMLAudioElement":15}],5:[function(require,module,exports){
(function (global){(function (){
"use strict";

var _util = _interopRequireDefault(require("../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (global) {
  (function (factory) {
    if (typeof define === "function" && define.amd) {
      define(["exports"], factory);
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof exports.nodeName !== "string") {
      factory(exports);
    } else {
      factory(global);
    }
  })(function (exports) {
    "use strict";

    exports.URL = global.URL || global.webkitURL;
    if (global.Blob && global.URL) {
      try {
        new Blob();
        return;
      } catch (e) {}
    }
    var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MozBlobBuilder || function () {
      var get_class = function get_class(object) {
          return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
        },
        FakeBlobBuilder = function BlobBuilder() {
          this.data = [];
          this._arrayBuffer = new ArrayBuffer();
        },
        FakeBlob = function Blob(data, type, encoding) {
          this.data = data;
          this.size = data.length;
          this.type = type;
          this.encoding = encoding;
          this._arrayBuffer = new ArrayBuffer();
        },
        FBB_proto = FakeBlobBuilder.prototype,
        FB_proto = FakeBlob.prototype,
        FileReaderSync = global.FileReaderSync,
        FileException = function FileException(type) {
          this.code = this[this.name = type];
        },
        file_ex_codes = ("NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR " + "NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR").split(" "),
        file_ex_code = file_ex_codes.length,
        real_URL = global.URL || global.webkitURL || exports,
        real_create_object_URL = real_URL.createObjectURL,
        real_revoke_object_URL = real_URL.revokeObjectURL,
        URL = real_URL,
        btoa = global.btoa,
        atob = global.atob,
        ArrayBuffer = global.ArrayBuffer,
        Uint8Array = global.Uint8Array,
        origin = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
      FakeBlob.fake = FB_proto.fake = true;
      while (file_ex_code--) {
        FileException.prototype[file_ex_codes[file_ex_code]] = file_ex_code + 1;
      }
      if (!real_URL.createObjectURL) {
        URL = exports.URL = function (uri) {
          var uri_info = document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
            uri_origin;
          uri_info.href = uri;
          if (!("origin" in uri_info)) {
            if (uri_info.protocol.toLowerCase() === "data:") {
              uri_info.origin = null;
            } else {
              uri_origin = uri.match(origin);
              uri_info.origin = uri_origin && uri_origin[1];
            }
          }
          return uri_info;
        };
      }
      URL.createObjectURL = function (blob) {
        var type = blob.type,
          data_URI_header;
        if (type === null) {
          type = "application/octet-stream";
        }
        if (blob instanceof FakeBlob) {
          data_URI_header = "data:" + type;
          if (blob.encoding === "base64") {
            return data_URI_header + ";base64," + blob.data;
          } else if (blob.encoding === "URI") {
            return data_URI_header + "," + decodeURIComponent(blob.data);
          }
          if (btoa) {
            return data_URI_header + ";base64," + btoa(blob.data);
          } else {
            return data_URI_header + "," + encodeURIComponent(blob.data);
          }
        } else if (real_create_object_URL) {
          return real_create_object_URL.call(real_URL, blob);
        }
      };
      URL.revokeObjectURL = function (object_URL) {
        if (object_URL.substring(0, 5) !== "data:" && real_revoke_object_URL) {
          real_revoke_object_URL.call(real_URL, object_URL);
        }
      };
      FBB_proto.append = function (data) {
        var bb = this.data;
        if (data instanceof ArrayBuffer) {
          var str = "",
            buf = new Uint8Array(data),
            i = 0,
            buf_len = buf.length;
          for (; i < buf_len; i++) {
            str += String.fromCharCode(buf[i]);
          }
          bb.push(str);
          this._arrayBuffer = data.slice(0);
        } else if (get_class(data) === "Blob" || get_class(data) === "File") {
          if (FileReaderSync) {
            var fr = new FileReaderSync();
            bb.push(fr.readAsBinaryString(data));
            this._arrayBuffer = data.arrayBuffer();
          } else {
            throw new FileException("NOT_READABLE_ERR");
          }
        } else if (data instanceof FakeBlob) {
          if (data.encoding === "base64" && atob) {
            bb.push(atob(data.data));
          } else if (data.encoding === "URI") {
            bb.push(decodeURIComponent(data.data));
          } else if (data.encoding === "raw") {
            bb.push(data.data);
          }
          this._arrayBuffer = data._arrayBuffer.slice(0);
        } else {
          if (typeof data !== "string") {
            data += "";
          }
          bb.push(unescape(encodeURIComponent(data)));
          this._arrayBuffer = _util["default"].stringToArraybuffer();
        }
      };
      FBB_proto.getBlob = function (type) {
        if (!arguments.length) {
          type = null;
        }
        var blob = new FakeBlob(this.data.join(""), type, "raw");
        blob._arrayBuffer = this._arrayBuffer;
        return blob;
      };
      FBB_proto.toString = function () {
        return "[object BlobBuilder]";
      };
      FB_proto.slice = function (start, end, type) {
        var args = arguments.length;
        if (args < 3) {
          type = null;
        }
        var blob = new FakeBlob(this.data.slice(start, args > 1 ? end : this.data.length), type, this.encoding);
        var arrayBuffer = this._arrayBuffer;
        if (arrayBuffer instanceof ArrayBuffer) {
          blob._arrayBuffer = this._arrayBuffer.slice(start, end);
        }
        return blob;
      };
      FB_proto.toString = function () {
        return "[object Blob]";
      };
      FB_proto.close = function () {
        this.size = 0;
        delete this.data;
      };
      FB_proto.arrayBuffer = function () {
        return this._arrayBuffer.slice(0);
      };
      return FakeBlobBuilder;
    }();
    exports.Blob = function (blobParts, options) {
      var type = options ? options.type || "" : "";
      var builder = new BlobBuilder();
      if (blobParts) {
        for (var i = 0, len = blobParts.length; i < len; i++) {
          if (Uint8Array && blobParts[i] instanceof Uint8Array) {
            builder.append(blobParts[i].buffer);
          } else {
            builder.append(blobParts[i]);
          }
        }
      }
      var blob = builder.getBlob(type);
      if (!blob.slice && blob.webkitSlice) {
        blob.slice = blob.webkitSlice;
      }
      return blob;
    };
    var getPrototypeOf = Object.getPrototypeOf || function (object) {
      return object.__proto__;
    };
    exports.Blob.prototype = getPrototypeOf(new exports.Blob());
  });
})(typeof self !== "undefined" && self || typeof window !== "undefined" && window || typeof global !== "undefined" && global || (void 0).content || void 0);

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../util":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DOMTokenList = exports["default"] = function () {
  function DOMTokenList() {
    _classCallCheck(this, DOMTokenList);
    this.length = 0;
  }
  _createClass(DOMTokenList, [{
    key: "add",
    value: function add() {
      console.warn("DOMTokenList add isn't implemented!");
    }
  }, {
    key: "contains",
    value: function contains() {
      console.warn("DOMTokenList contains isn't implemented!");
    }
  }, {
    key: "entries",
    value: function entries() {
      console.warn("DOMTokenList entries isn't implemented!");
    }
  }, {
    key: "forEach",
    value: function forEach() {
      console.warn("DOMTokenList forEach isn't implemented!");
    }
  }, {
    key: "item",
    value: function item() {
      console.warn("DOMTokenList item isn't implemented!");
    }
  }, {
    key: "keys",
    value: function keys() {
      console.warn("DOMTokenList keys isn't implemented!");
    }
  }, {
    key: "remove",
    value: function remove() {
      console.warn("DOMTokenList remove isn't implemented!");
    }
  }, {
    key: "replace",
    value: function replace() {
      console.warn("DOMTokenList replace isn't implemented!");
    }
  }, {
    key: "supports",
    value: function supports() {
      console.warn("DOMTokenList supports isn't implemented!");
    }
  }, {
    key: "toggle",
    value: function toggle() {}
  }, {
    key: "value",
    value: function value() {
      console.warn("DOMTokenList value isn't implemented!");
    }
  }, {
    key: "values",
    value: function values() {
      console.warn("DOMTokenList values isn't implemented!");
    }
  }]);
  return DOMTokenList;
}();

},{}],7:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Event2 = _interopRequireDefault(require("./Event"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var DeviceMotionEvent = exports["default"] = function (_Event) {
  _inherits(DeviceMotionEvent, _Event);
  function DeviceMotionEvent(initArgs) {
    var _this;
    _classCallCheck(this, DeviceMotionEvent);
    _this = _callSuper(this, DeviceMotionEvent, ['devicemotion']);
    if (initArgs) {
      _this._acceleration = initArgs.acceleration ? initArgs.acceleration : {
        x: 0,
        y: 0,
        z: 0
      };
      _this._accelerationIncludingGravity = initArgs.accelerationIncludingGravity ? initArgs.accelerationIncludingGravity : {
        x: 0,
        y: 0,
        z: 0
      };
      _this._rotationRate = initArgs.rotationRate ? initArgs.rotationRate : {
        alpha: 0,
        beta: 0,
        gamma: 0
      };
      _this._interval = initArgs.interval;
    } else {
      _this._acceleration = {
        x: 0,
        y: 0,
        z: 0
      };
      _this._accelerationIncludingGravity = {
        x: 0,
        y: 0,
        z: 0
      };
      _this._rotationRate = {
        alpha: 0,
        beta: 0,
        gamma: 0
      };
      _this._interval = 0;
    }
    return _this;
  }
  _createClass(DeviceMotionEvent, [{
    key: "acceleration",
    get: function get() {
      return this._acceleration;
    }
  }, {
    key: "accelerationIncludingGravity",
    get: function get() {
      return this._accelerationIncludingGravity;
    }
  }, {
    key: "rotationRate",
    get: function get() {
      return this._rotationRate;
    }
  }, {
    key: "interval",
    get: function get() {
      return this._interval;
    }
  }]);
  return DeviceMotionEvent;
}(_Event2["default"]);

},{"./Event":10}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Audio = _interopRequireDefault(require("./Audio"));
var _FontFaceSet = _interopRequireDefault(require("./FontFaceSet"));
var _Node2 = _interopRequireDefault(require("./Node"));
var _NodeList = _interopRequireDefault(require("./NodeList"));
var _HTMLAnchorElement = _interopRequireDefault(require("./HTMLAnchorElement"));
var _HTMLElement = _interopRequireDefault(require("./HTMLElement"));
var _HTMLHtmlElement = _interopRequireDefault(require("./HTMLHtmlElement"));
var _HTMLBodyElement = _interopRequireDefault(require("./HTMLBodyElement"));
var _HTMLHeadElement = _interopRequireDefault(require("./HTMLHeadElement"));
var _HTMLCanvasElement = _interopRequireDefault(require("./HTMLCanvasElement"));
var _HTMLVideoElement = _interopRequireDefault(require("./HTMLVideoElement"));
var _HTMLScriptElement = _interopRequireDefault(require("./HTMLScriptElement"));
var _HTMLStyleElement = _interopRequireDefault(require("./HTMLStyleElement"));
var _HTMLInputElement = _interopRequireDefault(require("./HTMLInputElement"));
var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _html = new _HTMLHtmlElement["default"]();
var Document = exports["default"] = function (_Node) {
  _inherits(Document, _Node);
  function Document() {
    var _this;
    _classCallCheck(this, Document);
    _this = _callSuper(this, Document);
    _defineProperty(_assertThisInitialized(_this), "head", new _HTMLHeadElement["default"](_html));
    _defineProperty(_assertThisInitialized(_this), "body", new _HTMLBodyElement["default"](_html));
    _defineProperty(_assertThisInitialized(_this), "fonts", new _FontFaceSet["default"]());
    _defineProperty(_assertThisInitialized(_this), "cookie", "");
    _defineProperty(_assertThisInitialized(_this), "documentElement", _html);
    _defineProperty(_assertThisInitialized(_this), "readyState", "complete");
    _defineProperty(_assertThisInitialized(_this), "visibilityState", "visible");
    _defineProperty(_assertThisInitialized(_this), "hidden", false);
    _defineProperty(_assertThisInitialized(_this), "style", {});
    _defineProperty(_assertThisInitialized(_this), "location", window.location);
    _defineProperty(_assertThisInitialized(_this), "ontouchstart", null);
    _defineProperty(_assertThisInitialized(_this), "ontouchmove", null);
    _defineProperty(_assertThisInitialized(_this), "ontouchend", null);
    _html.appendChild(_this.head);
    _html.appendChild(_this.body);
    _WeakMap["default"].get(_assertThisInitialized(_this)).scripts = [];
    return _this;
  }
  _createClass(Document, [{
    key: "characterSet",
    get: function get() {
      return "UTF-8";
    }
  }, {
    key: "scripts",
    get: function get() {
      return _WeakMap["default"].get(this).scripts.slice(0);
    }
  }, {
    key: "createElement",
    value: function createElement(tagName) {
      if (typeof tagName !== "string") {
        return null;
      }
      tagName = tagName.toUpperCase();
      if (tagName === 'CANVAS') {
        return new _HTMLCanvasElement["default"]();
      } else if (tagName === 'IMG') {
        return new Image();
      } else if (tagName === 'VIDEO') {
        return new _HTMLVideoElement["default"]();
      } else if (tagName === 'SCRIPT') {
        return new _HTMLScriptElement["default"]();
      } else if (tagName === "INPUT") {
        return new _HTMLInputElement["default"]();
      } else if (tagName === "AUDIO") {
        return new _Audio["default"]();
      } else if (tagName === "STYLE") {
        return new _HTMLStyleElement["default"]();
      } else if (tagName === "A") {
        return new _HTMLAnchorElement["default"]();
      }
      return new _HTMLElement["default"](tagName);
    }
  }, {
    key: "createElementNS",
    value: function createElementNS(namespaceURI, qualifiedName, options) {
      return this.createElement(qualifiedName);
    }
  }, {
    key: "createEvent",
    value: function createEvent(type) {
      if (window[type]) {
        return new window[type]();
      }
      return null;
    }
  }, {
    key: "createTextNode",
    value: function createTextNode() {
      console.warn("document.createTextNode() is not support!");
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent() {
      if (_html.dispatchEvent.apply(_html, arguments)) {
        return _get(_getPrototypeOf(Document.prototype), "dispatchEvent", this).apply(this, arguments);
      }
      return false;
    }
  }, {
    key: "appendChild",
    value: function appendChild(node) {
      var nodeName = node.nodeName;
      if (nodeName === "SCRIPT") {
        _WeakMap["default"].get(this).scripts.push(node);
      }
      return _get(_getPrototypeOf(Document.prototype), "appendChild", this).call(this, node);
    }
  }, {
    key: "removeChild",
    value: function removeChild(node) {
      var nodeName = node.nodeName;
      if (nodeName === "SCRIPT") {
        var scripts = _WeakMap["default"].get(this).scripts;
        for (var index = 0, length = scripts.length; index < length; ++index) {
          if (node === scripts[index]) {
            scripts.slice(index, 1);
            break;
          }
        }
      }
      return _get(_getPrototypeOf(Document.prototype), "removeChild", this).call(this, node);
    }
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'getElementById' on 'Document': 1 argument required, but only 0 present.";
      }
      var rootElement = this.documentElement;
      var elementArr = [].concat(rootElement.childNodes);
      var element;
      if (id === "canvas" || id === "glcanvas") {
        while (element = elementArr.pop()) {
          if (element.id === "canvas" || element.id === "glcanvas") {
            return element;
          }
          elementArr = elementArr.concat(element.childNodes);
        }
      } else {
        while (element = elementArr.pop()) {
          if (element.id === id) {
            return element;
          }
          elementArr = elementArr.concat(element.childNodes);
        }
      }
      return null;
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(names) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'getElementsByClassName' on 'Document': 1 argument required, but only 0 present.";
      }
      if (typeof names !== "string" && names instanceof String) {
        return new _NodeList["default"]();
      }
      return this.documentElement.getElementsByClassName(names);
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'getElementsByTagName' on 'Document': 1 argument required, but only 0 present.";
      }
      tagName = tagName.toUpperCase();
      var rootElement = this.documentElement;
      var result = new _NodeList["default"]();
      switch (tagName) {
        case "HEAD":
          {
            result.push(document.head);
            break;
          }
        case "BODY":
          {
            result.push(document.body);
            break;
          }
        default:
          {
            result = result.concat(rootElement.getElementsByTagName(tagName));
          }
      }
      return result;
    }
  }, {
    key: "getElementsByName",
    value: function getElementsByName(name) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'getElementsByName' on 'Document': 1 argument required, but only 0 present.";
      }
      var elementArr = [].concat(this.childNodes);
      var result = new _NodeList["default"]();
      var element;
      while (element = elementArr.pop()) {
        if (element.name === name) {
          result.push(element);
        }
        elementArr = elementArr.concat(element.childNodes);
      }
      return result;
    }
  }, {
    key: "querySelector",
    value: function querySelector(selectors) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'querySelectorAll' on 'Document': 1 argument required, but only 0 present.";
      }
      var nodeList = new _NodeList["default"]();
      switch (selectors) {
        case null:
        case undefined:
        case NaN:
        case true:
        case false:
        case "":
          return null;
      }
      if (typeof selectors !== "string" && selectors instanceof String) {
        throw "Uncaught DOMException: Failed to execute 'querySelectorAll' on 'Document': '" + selectors + "' is not a valid selector.";
      }
      var reg = /^[A-Za-z]+$/;
      var result = selectors.match(reg);
      if (result) {
        return this.getElementsByTagName(selectors);
      }
      reg = /^\.[A-Za-z$_][A-Za-z$_0-9\- ]*$/;
      result = selectors.match(reg);
      if (result) {
        var selectorArr = selectors.split(" ");
        var selector = selectorArr.shift();
        nodeList = this.getElementsByClassName(selector.substr(1));
        var length = selectorArr.length;
        if (length) {
          selectors = selectorArr.join(" ");
          length = nodeList.length;
          for (var index = 0; index < length; index++) {
            var subNodeList = nodeList[index].querySelector(selectors);
            if (subNodeList.length) {
              return subNodeList[0];
            }
          }
        }
        return nodeList[0];
      }
      reg = /^#[A-Za-z$_][A-Za-z$_0-9\-]*$/;
      result = selectors.match(reg);
      if (result) {
        var element = this.getElementById(selectors.substr(1));
        if (element) {
          nodeList.push(element);
        }
      }
      if (selectors === "*") {
        return this.getElementsByTagName(selectors);
      }
      return nodeList[0];
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(selectors) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'querySelectorAll' on 'Document': 1 argument required, but only 0 present.";
      }
      var nodeList = new _NodeList["default"]();
      switch (selectors) {
        case null:
        case undefined:
        case NaN:
        case true:
        case false:
        case "":
          return nodeList;
      }
      if (typeof selectors !== "string" && selectors instanceof String) {
        throw "Uncaught DOMException: Failed to execute 'querySelectorAll' on 'Document': '" + selectors + "' is not a valid selector.";
      }
      var reg = /^[A-Za-z]+$/;
      var result = selectors.match(reg);
      if (result) {
        return this.getElementsByTagName(selectors);
      }
      reg = /^\.[A-Za-z$_][A-Za-z$_0-9\-]*$/;
      result = selectors.match(reg);
      if (result) {
        return this.getElementsByClassName(selectors.substr(1));
      }
      reg = /^#[A-Za-z$_][A-Za-z$_0-9\-]*$/;
      result = selectors.match(reg);
      if (result) {
        var element = this.getElementById(selectors.substr(1));
        if (element) {
          nodeList.push(element);
        }
      }
      if (selectors === "*") {
        return this.getElementsByTagName(selectors);
      }
      return nodeList;
    }
  }]);
  return Document;
}(_Node2["default"]);

},{"./Audio":4,"./FontFaceSet":13,"./HTMLAnchorElement":14,"./HTMLBodyElement":16,"./HTMLCanvasElement":17,"./HTMLElement":18,"./HTMLHeadElement":19,"./HTMLHtmlElement":20,"./HTMLInputElement":22,"./HTMLScriptElement":24,"./HTMLStyleElement":25,"./HTMLVideoElement":26,"./Node":32,"./NodeList":33,"./util/WeakMap":57}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Node2 = _interopRequireDefault(require("./Node"));
var _NodeList = _interopRequireDefault(require("./NodeList"));
var _DOMTokenList = _interopRequireDefault(require("./DOMToken\u200BList"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Element = exports["default"] = function (_Node) {
  _inherits(Element, _Node);
  function Element(tagName) {
    var _this;
    _classCallCheck(this, Element);
    _this = _callSuper(this, Element, [tagName]);
    _defineProperty(_assertThisInitialized(_this), "className", '');
    _defineProperty(_assertThisInitialized(_this), "children", []);
    _defineProperty(_assertThisInitialized(_this), "classList", new _DOMTokenList["default"]());
    _defineProperty(_assertThisInitialized(_this), "value", 1);
    _defineProperty(_assertThisInitialized(_this), "content", "");
    _defineProperty(_assertThisInitialized(_this), "scrollLeft", 0);
    _defineProperty(_assertThisInitialized(_this), "scrollTop", 0);
    _defineProperty(_assertThisInitialized(_this), "clientLeft", 0);
    _defineProperty(_assertThisInitialized(_this), "clientTop", 0);
    return _this;
  }
  _createClass(Element, [{
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      return {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        top: 0,
        left: 0,
        bottom: window.innerHeight,
        right: window.innerWidth
      };
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      tagName = tagName.toUpperCase();
      var result = new _NodeList["default"]();
      var childNodes = this.childNodes;
      var length = childNodes.length;
      for (var index = 0; index < length; index++) {
        var element = childNodes[index];
        if (element.tagName === tagName || tagName === "*") {
          result.push(element);
        }
        result = result.concat(element);
      }
      return result;
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(names) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'getElementsByClassName' on 'Document': 1 argument required, but only 0 present.";
      }
      var result = new _NodeList["default"]();
      if (typeof names !== "string" && names instanceof String) {
        return result;
      }
      var elementArr = [].concat(this.childNodes);
      var element;
      while (element = elementArr.pop()) {
        var classStr = element["class"];
        if (classStr) {
          var classArr = classStr.split(" ");
          var length = classArr.length;
          for (var index = 0; index < length; index++) {
            if (classArr[index] === names) {
              result.push(element);
              break;
            }
          }
        }
        elementArr = elementArr.concat(element.childNodes);
      }
      return result;
    }
  }, {
    key: "querySelector",
    value: function querySelector(selectors) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'querySelectorAll' on 'Document': 1 argument required, but only 0 present.";
      }
      var nodeList = new _NodeList["default"]();
      switch (selectors) {
        case null:
        case undefined:
        case NaN:
        case true:
        case false:
        case "":
          return null;
      }
      if (typeof selectors !== "string" && selectors instanceof String) {
        throw "Uncaught DOMException: Failed to execute 'querySelectorAll' on 'Document': '" + selectors + "' is not a valid selector.";
      }
      var reg = /^[A-Za-z]+$/;
      var result = selectors.match(reg);
      if (result) {
        return this.getElementsByTagName(selectors);
      }
      reg = /^.[A-Za-z$_][A-Za-z$_0-9\- ]*$/;
      result = selectors.match(reg);
      if (result) {
        var selectorArr = selectors.split(" ");
        var selector = selectorArr.shift();
        nodeList = this.getElementsByClassName(selector.substr(1));
        var length = selectorArr.length;
        if (length) {
          selectors = selectorArr.join(" ");
          length = nodeList.length;
          for (var index = 0; index < length; index++) {
            var subNodeList = nodeList[index].querySelector(selectors);
            if (subNodeList.length) {
              return subNodeList[0];
            }
          }
        }
        return nodeList[0];
      }
      reg = /^#[A-Za-z$_][A-Za-z$_0-9\-]*$/;
      result = selectors.match(reg);
      if (result) {
        var element = this.getElementById(selectors.substr(1));
        if (element) {
          nodeList.push(element);
        }
      }
      if (selectors === "*") {
        return this.getElementsByTagName(selectors);
      }
      return nodeList[0];
    }
  }, {
    key: "add",
    value: function add() {}
  }, {
    key: "requestFullscreen",
    value: function requestFullscreen() {}
  }, {
    key: "removeAttribute",
    value: function removeAttribute(attrName) {
      if (attrName === "style") {
        for (var styleName in this["style"]) {
          this["style"][styleName] = "";
        }
      } else {
        this[attrName] = "";
      }
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {
      if (name === "style") {
        if (typeof value == "undefined" || value == null || value == "") {
          for (var styleName in this["style"]) {
            this["style"][styleName] = "";
          }
        } else {
          value = value.replace(/\s*/g, "");
          var valueArray = value.split(";");
          for (var index in valueArray) {
            if (valueArray[index] != "") {
              var valueTemp = valueArray[index].split(":");
              this["style"][valueTemp[0]] = valueTemp[1];
            }
          }
        }
      } else {
        this[name] = value;
      }
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(name) {
      var attributeValue = null;
      if (name == "style") {
        attributeValue = JSON.stringify(this["style"]);
      } else {
        attributeValue = this[name];
      }
      return attributeValue;
    }
  }, {
    key: "setAttributeNS",
    value: function setAttributeNS(ns, name, value) {
      this.setAttribute(name, value);
    }
  }, {
    key: "focus",
    value: function focus() {}
  }, {
    key: "blur",
    value: function blur() {}
  }, {
    key: "lastChild",
    get: function get() {
      var lastChild = this.childNodes[this.childNodes.length - 1];
      return lastChild ? lastChild : this.innerHTML ? new HTMLElement() : undefined;
    }
  }, {
    key: "firstChild",
    get: function get() {
      var child = this.childNodes[0];
      return child ? child : this.innerHTML ? new HTMLElement() : undefined;
    }
  }, {
    key: "firstElementChild",
    get: function get() {
      var child = this.childNodes[0];
      return child ? child : this.innerHTML ? new HTMLElement() : undefined;
    }
  }, {
    key: "clientHeight",
    get: function get() {
      var style = this.style || {};
      return parseInt(style.fontSize || "0");
    }
  }, {
    key: "tagName",
    get: function get() {
      return this.nodeName;
    }
  }]);
  return Element;
}(_Node2["default"]);

},{"./DOMToken​List":6,"./Node":32,"./NodeList":33}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Event = exports["default"] = function () {
  function Event(type, eventInit) {
    _classCallCheck(this, Event);
    this._type = type;
    this._target = null;
    this._eventPhase = 2;
    this._currentTarget = null;
    this._canceled = false;
    this._stopped = false;
    this._passiveListener = null;
    this._timeStamp = Date.now();
  }
  _createClass(Event, [{
    key: "type",
    get: function get() {
      return this._type;
    }
  }, {
    key: "target",
    get: function get() {
      return this._target;
    }
  }, {
    key: "currentTarget",
    get: function get() {
      return this._currentTarget;
    }
  }, {
    key: "isTrusted",
    get: function get() {
      return false;
    }
  }, {
    key: "timeStamp",
    get: function get() {
      return this._timeStamp;
    },
    set: function set(value) {
      if (this.type.indexOf("touch")) {
        this._timeStamp = value;
      }
    }
  }, {
    key: "composedPath",
    value: function composedPath() {
      var currentTarget = this._currentTarget;
      if (currentTarget === null) {
        return [];
      }
      return [currentTarget];
    }
  }, {
    key: "eventPhase",
    get: function get() {
      return this._eventPhase;
    }
  }, {
    key: "stopPropagation",
    value: function stopPropagation() {}
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this._stopped = true;
    }
  }, {
    key: "bubbles",
    get: function get() {
      return false;
    }
  }, {
    key: "cancelable",
    get: function get() {
      return true;
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {
      if (this._passiveListener !== null) {
        console.warn("Event#preventDefault() was called from a passive listener:", this._passiveListener);
        return;
      }
      if (!this.cancelable) {
        return;
      }
      this._canceled = true;
    }
  }, {
    key: "defaultPrevented",
    get: function get() {
      return this._canceled;
    }
  }, {
    key: "composed",
    get: function get() {
      return false;
    }
  }]);
  return Event;
}();
Event.NONE = 0;
Event.CAPTURING_PHASE = 1;
Event.AT_TARGET = 2;
Event.BUBBLING_PHASE = 3;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _TouchEvent = _interopRequireDefault(require("./TouchEvent"));
var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
var _DeviceMotionEvent = _interopRequireDefault(require("./DeviceMotionEvent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _listenerStat = {};
var _onTouchStart = function _onTouchStart(e) {
  var event = new _TouchEvent["default"]("touchstart");
  window.dispatchEvent(Object.assign(event, e));
};
var _onTouchMove = function _onTouchMove(e) {
  var event = new _TouchEvent["default"]("touchmove");
  window.dispatchEvent(Object.assign(event, e));
};
var _onTouchCancel = function _onTouchCancel(e) {
  var event = new _TouchEvent["default"]("touchcancel");
  window.dispatchEvent(Object.assign(event, e));
};
var _onTouchEnd = function _onTouchEnd(e) {
  var event = new _TouchEvent["default"]("touchend");
  window.dispatchEvent(Object.assign(event, e));
};
var _systemInfo = ral.getSystemInfoSync();
var _isAndroid = _systemInfo.platform.toLowerCase() === "android";
var _alpha = 0.8;
var _gravity = [0, 0, 0];
var _onAccelerometerChange = function _onAccelerometerChange(e) {
  if (_isAndroid) {
    e.x *= -10;
    e.y *= -10;
    e.z *= -10;
  } else {
    e.x *= 10;
    e.y *= 10;
    e.z *= 10;
  }
  _gravity[0] = _alpha * _gravity[0] + (1 - _alpha) * e.x;
  _gravity[1] = _alpha * _gravity[1] + (1 - _alpha) * e.y;
  _gravity[2] = _alpha * _gravity[2] + (1 - _alpha) * e.z;
  var event = new _DeviceMotionEvent["default"]({
    acceleration: {
      x: e.x - _gravity[0],
      y: e.y - _gravity[1],
      z: e.z - _gravity[2]
    },
    accelerationIncludingGravity: {
      x: e.x,
      y: e.y,
      z: e.z
    }
  });
  window.dispatchEvent(event);
};
var EventTarget = exports["default"] = function () {
  function EventTarget() {
    _classCallCheck(this, EventTarget);
    _WeakMap["default"].set(this, {});
  }
  _createClass(EventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var privateThis = _WeakMap["default"].get(this);
      if (!privateThis) {
        _WeakMap["default"].set(this, privateThis = {});
      }
      var events = _WeakMap["default"].get(privateThis);
      if (!events) {
        _WeakMap["default"].set(privateThis, events = {});
      }
      if (!events[type]) {
        events[type] = [];
      }
      var listenerArray = events[type];
      var length = listenerArray.length;
      for (var index = 0; index < length; ++index) {
        if (listenerArray[index] === listener) {
          return;
        }
      }
      listenerArray.push(listener);
      if (_listenerStat[type]) {
        ++_listenerStat[type];
      } else {
        _listenerStat[type] = 1;
        switch (type) {
          case "touchstart":
            {
              ral.onTouchStart(_onTouchStart);
              break;
            }
          case "touchmove":
            {
              ral.onTouchMove(_onTouchMove);
              break;
            }
          case "touchcancel":
            {
              ral.onTouchCancel(_onTouchCancel);
              break;
            }
          case "touchend":
            {
              ral.onTouchEnd(_onTouchEnd);
              break;
            }
          case "devicemotion":
            {
              ral.onAccelerometerChange(_onAccelerometerChange);
              ral.startAccelerometer();
              break;
            }
        }
      }
      if (options.capture) {}
      if (options.once) {}
      if (options.passive) {}
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener) {
      var privateThis = _WeakMap["default"].get(this);
      var events;
      if (privateThis) {
        events = _WeakMap["default"].get(privateThis);
      }
      if (events) {
        var listeners = events[type];
        if (listeners && listeners.length > 0) {
          for (var i = listeners.length; i--; i > 0) {
            if (listeners[i] === listener) {
              listeners.splice(i, 1);
              if (--_listenerStat[type] === 0) {
                switch (type) {
                  case "touchstart":
                    {
                      ral.offTouchStart(_onTouchStart);
                      break;
                    }
                  case "touchmove":
                    {
                      ral.offTouchMove(_onTouchMove);
                      break;
                    }
                  case "touchcancel":
                    {
                      ral.offTouchCancel(_onTouchCancel);
                      break;
                    }
                  case "touchend":
                    {
                      ral.offTouchEnd(_onTouchEnd);
                      break;
                    }
                  case "devicemotion":
                    {
                      ral.offAccelerometerChange(_onAccelerometerChange);
                      ral.stopAccelerometer();
                      break;
                    }
                }
              }
              break;
            }
          }
        }
      }
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      event._target = event._currentTarget = this;
      if (event instanceof _TouchEvent["default"]) {
        var toucheArray = event.touches;
        var length = toucheArray.length;
        for (var index = 0; index < length; ++index) {
          toucheArray[index].target = this;
        }
        toucheArray = event.changedTouches;
        length = toucheArray.length;
        for (var _index = 0; _index < length; ++_index) {
          toucheArray[_index].target = this;
        }
      }
      var callback = this["on" + event.type];
      if (typeof callback === "function") {
        callback.call(this, event);
      }
      var privateThis = _WeakMap["default"].get(this);
      var events;
      if (privateThis) {
        events = _WeakMap["default"].get(privateThis);
      }
      if (events) {
        var listeners = events[event.type];
        if (listeners) {
          for (var i = 0; i < listeners.length; i++) {
            listeners[i].call(this, event);
          }
        }
      }
      event._target = event._currentTarget = null;
      return true;
    }
  }]);
  return EventTarget;
}();

},{"./DeviceMotionEvent":7,"./TouchEvent":36,"./util/WeakMap":57}],12:[function(require,module,exports){
"use strict";

var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FontFace = function () {
  function FontFace(family, source, descriptors) {
    _classCallCheck(this, FontFace);
    this.family = family;
    this.source = source;
    this.descriptors = descriptors;
    var self = this;
    var _selfPrivate = {
      status: "unloaded",
      _status: "unloaded",
      load: function load() {
        this.status = "loading";
        var source;
        if (self.source.match(/url\(\s*'\s*(.*?)\s*'\s*\)/)) {
          source = self.source;
        } else {
          source = "url('" + self.source + "')";
        }
        var family = ral.loadFont(self.family, source);
        if (family) {
          this._status = "loaded";
        } else {
          this._status = "error";
        }
        setTimeout(function () {
          var status = _selfPrivate.status = _selfPrivate._status;
          if (status === "loaded") {
            _selfPrivate.loadResolve();
          } else {
            _selfPrivate.loadReject();
          }
        });
      }
    };
    _WeakMap["default"].set(this, _selfPrivate);
    _selfPrivate.loaded = new Promise(function (resolve, reject) {
      _selfPrivate.loadResolve = resolve;
      _selfPrivate.loadReject = reject;
    });
  }
  _createClass(FontFace, [{
    key: "status",
    get: function get() {
      return _WeakMap["default"].get(this).status;
    }
  }, {
    key: "loaded",
    get: function get() {
      return _WeakMap["default"].get(this).loaded;
    }
  }, {
    key: "load",
    value: function load() {
      _WeakMap["default"].get(this).load();
      return _WeakMap["default"].get(this).loaded;
    }
  }]);
  return FontFace;
}();
module.exports = FontFace;

},{"./util/WeakMap":57}],13:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventTarget2 = _interopRequireDefault(require("./EventTarget"));
var _Event = _interopRequireDefault(require("./Event"));
var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var FontFaceSet = exports["default"] = function (_EventTarget) {
  _inherits(FontFaceSet, _EventTarget);
  function FontFaceSet() {
    var _this;
    _classCallCheck(this, FontFaceSet);
    _this = _callSuper(this, FontFaceSet);
    var self = _assertThisInitialized(_this);
    _WeakMap["default"].get(_assertThisInitialized(_this)).status = "loaded";
    _WeakMap["default"].get(_assertThisInitialized(_this)).ready = new Promise(function (resolve, reject) {
      _WeakMap["default"].get(self).readyResolve = resolve;
      _WeakMap["default"].get(self).readyReject = reject;
    });
    _WeakMap["default"].get(_assertThisInitialized(_this)).fontFaceSet = [];
    return _this;
  }
  _createClass(FontFaceSet, [{
    key: "status",
    get: function get() {
      return _WeakMap["default"].get(this).status;
    }
  }, {
    key: "ready",
    get: function get() {
      return _WeakMap["default"].get(this).ready;
    }
  }, {
    key: "add",
    value: function add(fontFace) {
      _WeakMap["default"].get(this).fontFaceSet.push(fontFace);
    }
  }, {
    key: "check",
    value: function check() {
      console.warn("FontFaceSet.check() not implements");
    }
  }, {
    key: "clear",
    value: function clear() {
      console.warn("FontFaceSet.clear() not implements");
    }
  }, {
    key: "delete",
    value: function _delete() {
      console.warn("FontFaceSet.delete() not implements");
    }
  }, {
    key: "load",
    value: function load() {
      var self = this;
      _WeakMap["default"].get(this).status = "loading";
      this.dispatchEvent(new _Event["default"]('loading'));
      return new Promise(function (resolve, reject) {
        var fontFaceSet = _WeakMap["default"].get(self).fontFaceSet;
        if (fontFaceSet) {
          for (var index in fontFaceSet) {
            var fontFace = fontFaceSet[index];
            var status = _WeakMap["default"].get(fontFace).status;
            if (status === "unloaded" || status === "error") {
              fontFace.load();
              if (_WeakMap["default"].get(fontFace)._status !== "loaded") {
                break;
              }
            }
          }
          _WeakMap["default"].get(self).status = "loaded";
          _WeakMap["default"].get(self).readyResolve([].concat(_WeakMap["default"].get(self).fontFaceSet));
          resolve([].concat(_WeakMap["default"].get(self).fontFaceSet));
          self.dispatchEvent(new _Event["default"]('loadingdone'));
          return;
        }
        _WeakMap["default"].get(self).status = "loaded";
        _WeakMap["default"].get(self).readyReject();
        reject();
        self.dispatchEvent(new _Event["default"]('loadingerror'));
      });
    }
  }]);
  return FontFaceSet;
}(_EventTarget2["default"]);

},{"./Event":10,"./EventTarget":11,"./util/WeakMap":57}],14:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var HTMLAnchorElement = exports["default"] = function (_HTMLElement) {
  _inherits(HTMLAnchorElement, _HTMLElement);
  function HTMLAnchorElement() {
    var _this;
    _classCallCheck(this, HTMLAnchorElement);
    _this = _callSuper(this, HTMLAnchorElement, ["A"]);
    _WeakMap["default"].get(_assertThisInitialized(_this)).protocol = ":";
    return _this;
  }
  _createClass(HTMLAnchorElement, [{
    key: "protocol",
    get: function get() {
      return _WeakMap["default"].get(this).protocol;
    }
  }]);
  return HTMLAnchorElement;
}(_HTMLElement2["default"]);

},{"./HTMLElement":18,"./util/WeakMap":57}],15:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLMediaElement2 = _interopRequireDefault(require("./HTMLMediaElement"));
var _Event = _interopRequireDefault(require("./Event"));
var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var HTMLAudioElement = exports["default"] = function (_HTMLMediaElement) {
  _inherits(HTMLAudioElement, _HTMLMediaElement);
  function HTMLAudioElement(url) {
    var _this;
    _classCallCheck(this, HTMLAudioElement);
    _this = _callSuper(this, HTMLAudioElement, [url, 'AUDIO']);
    var innerAudioContext = ral.createInnerAudioContext();
    innerAudioContext.onCanplay(function () {
      _WeakMap["default"].get(this).duration = innerAudioContext.duration;
      this.dispatchEvent(new _Event["default"]("canplay"));
      this.dispatchEvent(new _Event["default"]("canplaythrough"));
      this.dispatchEvent(new _Event["default"]("durationchange"));
      this.dispatchEvent(new _Event["default"]("loadedmetadata"));
      this.dispatchEvent(new _Event["default"]("loadeddata"));
    }.bind(_assertThisInitialized(_this)));
    innerAudioContext.onPlay(function () {
      this.dispatchEvent(new _Event["default"]("play"));
      this.dispatchEvent(new _Event["default"]("playing"));
    }.bind(_assertThisInitialized(_this)));
    innerAudioContext.onPause(function () {
      this.dispatchEvent(new _Event["default"]("pause"));
    }.bind(_assertThisInitialized(_this)));
    innerAudioContext.onEnded(function () {
      this.dispatchEvent(new _Event["default"]("ended"));
    }.bind(_assertThisInitialized(_this)));
    innerAudioContext.onError(function () {
      _WeakMap["default"].get(this).duration = NaN;
      this.dispatchEvent(new _Event["default"]("error"));
      this.dispatchEvent(new _Event["default"]("emptied"));
    }.bind(_assertThisInitialized(_this)));
    innerAudioContext.onWaiting(function () {
      this.dispatchEvent(new _Event["default"]("waiting"));
    }.bind(_assertThisInitialized(_this)));
    innerAudioContext.onSeeked(function () {
      this.dispatchEvent(new _Event["default"]("seeked"));
    }.bind(_assertThisInitialized(_this)));
    innerAudioContext.onSeeking(function () {
      this.dispatchEvent(new _Event["default"]("seeking"));
    }.bind(_assertThisInitialized(_this)));
    innerAudioContext.onTimeUpdate(function () {
      this.dispatchEvent(new _Event["default"]("timeupdate"));
    }.bind(_assertThisInitialized(_this)));
    innerAudioContext.src = url;
    _WeakMap["default"].get(_assertThisInitialized(_this)).innerAudioContext = innerAudioContext;
    _WeakMap["default"].get(_assertThisInitialized(_this)).duration = NaN;
    return _this;
  }
  _createClass(HTMLAudioElement, [{
    key: "currentTime",
    get: function get() {
      return _WeakMap["default"].get(this).innerAudioContext.currentTime;
    },
    set: function set(value) {
      _WeakMap["default"].get(this).innerAudioContext.seek(value);
    }
  }, {
    key: "loop",
    get: function get() {
      return _get(_getPrototypeOf(HTMLAudioElement.prototype), "loop", this);
    },
    set: function set(value) {
      _set(_getPrototypeOf(HTMLAudioElement.prototype), "loop", value, this, true);
      _WeakMap["default"].get(this).innerAudioContext.loop = value;
    }
  }, {
    key: "volume",
    get: function get() {
      return _get(_getPrototypeOf(HTMLAudioElement.prototype), "volume", this);
    },
    set: function set(value) {
      _set(_getPrototypeOf(HTMLAudioElement.prototype), "volume", value, this, true);
      _WeakMap["default"].get(this).innerAudioContext.volume = value;
      this.dispatchEvent(new _Event["default"]("volumechange"));
    }
  }, {
    key: "canPlayType",
    value: function canPlayType() {
      var mediaType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      if (typeof mediaType !== 'string') {
        return '';
      }
      if (mediaType.indexOf('audio/mpeg') > -1 || mediaType.indexOf('audio/mp4')) {
        return 'probably';
      }
      return '';
    }
  }, {
    key: "src",
    get: function get() {
      return _get(_getPrototypeOf(HTMLAudioElement.prototype), "src", this);
    },
    set: function set(value) {
      _set(_getPrototypeOf(HTMLAudioElement.prototype), "src", value, this, true);
      this.dispatchEvent(new _Event["default"]("loadstart"));
      _WeakMap["default"].get(this).innerAudioContext.src = value;
    }
  }, {
    key: "load",
    value: function load() {
      this.dispatchEvent(new _Event["default"]("loadstart"));
      _WeakMap["default"].get(this).innerAudioContext.src = _get(_getPrototypeOf(HTMLAudioElement.prototype), "src", this);
    }
  }, {
    key: "pause",
    value: function pause() {
      _WeakMap["default"].get(this).innerAudioContext.pause();
    }
  }, {
    key: "play",
    value: function play() {
      _WeakMap["default"].get(this).innerAudioContext.play();
      this.dispatchEvent(new _Event["default"]("progress"));
    }
  }]);
  return HTMLAudioElement;
}(_HTMLMediaElement2["default"]);

},{"./Event":10,"./HTMLMediaElement":23,"./util/WeakMap":57}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HTMLBodyElement = exports["default"] = function (_HTMLElement) {
  _inherits(HTMLBodyElement, _HTMLElement);
  function HTMLBodyElement(parentNode) {
    var _this;
    _classCallCheck(this, HTMLBodyElement);
    _this = _callSuper(this, HTMLBodyElement, ["BODY"]);
    _defineProperty(_assertThisInitialized(_this), "parentNode", null);
    _this.parentNode = parentNode;
    return _this;
  }
  return _createClass(HTMLBodyElement);
}(_HTMLElement2["default"]);

},{"./HTMLElement.js":18}],17:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
var _ImageData = _interopRequireDefault(require("./ImageData"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
if (ral.getFeatureProperty("HTMLCanvasElement", "spec") === "vivo_platform_support") {
  var HTMLCanvasElement = window.HTMLCanvasElement;
  module.exports = HTMLCanvasElement;
} else {
  var CANVAS_DEFAULT_WIDTH = 300;
  var CANVAS_DEFAULT_HEIGHT = 150;
  window.ral = window.ral || {};
  var _createCanvas = ral.createCanvas;
  var _HTMLCanvasElement = function (_HTMLElement) {
    _inherits(_HTMLCanvasElement, _HTMLElement);
    function _HTMLCanvasElement(width, height) {
      var _this;
      _classCallCheck(this, _HTMLCanvasElement);
      _this = _callSuper(this, _HTMLCanvasElement, ['CANVAS']);
      _this.id = 'glcanvas';
      _this.type = 'canvas';
      _this.top = 0;
      _this.left = 0;
      if (typeof ral.getFeatureProperty("ral.createCanvas", "spec") === "undefined") {
        var canvas = _createCanvas();
        canvas.__proto__.__proto__ = _HTMLCanvasElement.prototype;
        Object.keys(_assertThisInitialized(_this)).forEach(function (key) {
          canvas[key] = this[key];
        }.bind(_assertThisInitialized(_this)));
        canvas.width = width >= 0 ? Math.ceil(width) : CANVAS_DEFAULT_WIDTH;
        canvas.height = height >= 0 ? Math.ceil(height) : CANVAS_DEFAULT_HEIGHT;
        canvas._targetID = _this._targetID;
        canvas._listenerCount = _this._listenerCount;
        canvas._listeners = _this._listeners;
        return _possibleConstructorReturn(_this, canvas);
      } else {
        _this._width = width ? Math.ceil(width) : CANVAS_DEFAULT_WIDTH;
        _this._height = height ? Math.ceil(height) : CANVAS_DEFAULT_HEIGHT;
        _this._context2D = null;
        _this._dataInner = null;
        _this._alignment = _this._width % 2 === 0 ? 8 : 4;
      }
      return _this;
    }
    _createClass(_HTMLCanvasElement, [{
      key: "getContext",
      value: function getContext(name, opts) {
        var self = this;
        if (name === 'webgl' || name === 'experimental-webgl') {
          return window.__gl;
        } else if (name === '2d') {
          if (!this._context2D) {
            this._context2D = new CanvasRenderingContext2D(this.width, this.height);
            this._context2D._innerCanvas = this;
          }
          return this._context2D;
        }
        return null;
      }
    }, {
      key: "_data",
      get: function get() {
        if (this._context2D === null) {
          return null;
        }
        if (!this._dataInner) {
          var data = this._context2D._getData();
          this._dataInner = new _ImageData["default"](data, this.width, this.height);
        }
        return this._dataInner;
      }
    }, {
      key: "clientWidth",
      get: function get() {
        return this.width;
      }
    }, {
      key: "clientHeight",
      get: function get() {
        return this.height;
      }
    }, {
      key: "width",
      get: function get() {
        return this._width;
      },
      set: function set(width) {
        width = parseInt(width);
        if (isNaN(width)) {
          width = CANVAS_DEFAULT_WIDTH;
        } else if (width < 0) {
          width = CANVAS_DEFAULT_WIDTH;
        }
        this._width = width;
        this._alignment = this._width % 2 === 0 ? 8 : 4;
        if (this._context2D) {
          this._context2D._width = width;
        }
        this._dataInner = null;
      }
    }, {
      key: "height",
      get: function get() {
        return this._height;
      },
      set: function set(height) {
        height = parseInt(height);
        if (isNaN(height)) {
          height = CANVAS_DEFAULT_HEIGHT;
        } else if (height < 0) {
          height = CANVAS_DEFAULT_HEIGHT;
        }
        this._height = height;
        if (this._context2D) {
          this._context2D._height = height;
        }
        this._dataInner = null;
      }
    }]);
    return _HTMLCanvasElement;
  }(_HTMLElement2["default"]);
  module.exports = _HTMLCanvasElement;
}

},{"./HTMLElement":18,"./ImageData":28}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Element2 = _interopRequireDefault(require("./Element"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HTMLElement = exports["default"] = function (_Element) {
  _inherits(HTMLElement, _Element);
  function HTMLElement(tagName) {
    var _this;
    _classCallCheck(this, HTMLElement);
    _this = _callSuper(this, HTMLElement, [tagName]);
    _defineProperty(_assertThisInitialized(_this), "className", '');
    _defineProperty(_assertThisInitialized(_this), "childern", []);
    _defineProperty(_assertThisInitialized(_this), "style", {
      width: "".concat(window.innerWidth, "px"),
      height: "".concat(window.innerHeight, "px")
    });
    _defineProperty(_assertThisInitialized(_this), "insertBefore", function () {});
    _defineProperty(_assertThisInitialized(_this), "innerHTML", '');
    return _this;
  }
  _createClass(HTMLElement, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this[name] = value;
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(name) {
      return this[name];
    }
  }, {
    key: "clientWidth",
    get: function get() {
      var ret = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
      return Number.isNaN(ret) ? 0 : ret;
    }
  }, {
    key: "clientHeight",
    get: function get() {
      var ret = parseInt(this.style.fontSize, 10);
      return Number.isNaN(ret) ? 0 : ret;
    }
  }]);
  return HTMLElement;
}(_Element2["default"]);

},{"./Element":9}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HTMLHeadElement = exports["default"] = function (_HTMLElement) {
  _inherits(HTMLHeadElement, _HTMLElement);
  function HTMLHeadElement(parentNode) {
    var _this;
    _classCallCheck(this, HTMLHeadElement);
    _this = _callSuper(this, HTMLHeadElement, ["HEAD"]);
    _defineProperty(_assertThisInitialized(_this), "parentNode", null);
    _this.parentNode = parentNode;
    return _this;
  }
  return _createClass(HTMLHeadElement);
}(_HTMLElement2["default"]);

},{"./HTMLElement.js":18}],20:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var HTMLHtmlElement = exports["default"] = function (_HTMLElement) {
  _inherits(HTMLHtmlElement, _HTMLElement);
  function HTMLHtmlElement() {
    _classCallCheck(this, HTMLHtmlElement);
    return _callSuper(this, HTMLHtmlElement, ["HTML"]);
  }
  _createClass(HTMLHtmlElement, [{
    key: "version",
    get: function get() {
      return "";
    }
  }]);
  return HTMLHtmlElement;
}(_HTMLElement2["default"]);

},{"./HTMLElement":18}],21:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
var _Event = _interopRequireDefault(require("./Event"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
if (ral.getFeatureProperty("HTMLImageElement", "spec") === "vivo_platform_support") {
  var HTMLImageElement = window.HTMLImageElement;
  module.exports = HTMLImageElement;
} else {
  window.ral = window.ral || {};
  var _creteImage = ral.createImage;
  var _image;
  var _setter;
  var _getter;
  if (typeof ral.getFeatureProperty("ral.createImage", "spec") === "undefined") {
    _image = _creteImage();
    var _descriptor = Object.getOwnPropertyDescriptor(_image.__proto__, "src");
    _setter = _descriptor.set;
    _getter = _descriptor.get;
  }
  var _HTMLImageElement = function (_HTMLElement) {
    _inherits(_HTMLImageElement, _HTMLElement);
    function _HTMLImageElement(width, height, isCalledFromImage) {
      var _this;
      _classCallCheck(this, _HTMLImageElement);
      if (!isCalledFromImage) {
        throw new TypeError("Illegal constructor, use 'new Image(w, h); instead!'");
      }
      _this = _callSuper(this, _HTMLImageElement, ['IMG']);
      _this.complete = false;
      _this.crossOrigin = null;
      _this.naturalWidth = 0;
      _this.naturalHeight = 0;
      _this.width = width || 0;
      _this.height = height || 0;
      if (typeof ral.getFeatureProperty("ral.createImage", "spec") === "undefined") {
        var image = _creteImage();
        Object.keys(_assertThisInitialized(_this)).forEach(function (key) {
          image[key] = this[key];
        }.bind(_assertThisInitialized(_this)));
        image._onload = function () {
          this.complete = true;
          this.naturalWidth = this.width;
          this.naturalHeight = this.height;
          this.dispatchEvent(new _Event["default"]("load"));
        }.bind(image);
        image._onerror = function () {
          this.dispatchEvent(new _Event["default"]("error"));
        }.bind(image);
        Object.defineProperty(image, "src", {
          configurable: true,
          enumerable: true,
          get: function get() {
            return _getter.call(this);
          },
          set: function set(value) {
            this.complete = false;
            return _setter.call(this, value);
          }
        });
        return _possibleConstructorReturn(_this, image);
      }
      return _this;
    }
    _createClass(_HTMLImageElement, [{
      key: "getBoundingClientRect",
      value: function getBoundingClientRect() {
        return new DOMRect(0, 0, this.width, this.height);
      }
    }, {
      key: "src",
      get: function get() {
        return this._src;
      },
      set: function set(src) {
        var _this2 = this;
        this._src = src;
        if (src === "") {
          this.width = 0;
          this.height = 0;
          this._data = null;
          this._imageMeta = null;
          this.complete = true;
          this._glFormat = this._glInternalFormat = 0x1908;
          this.crossOrigin = null;
          return;
        }
        ral.loadImageData(src, function (info) {
          if (!info) {
            var _event = new _Event["default"]('error');
            _this2.dispatchEvent(_event);
            return;
          }
          _this2._imageMeta = info;
          _this2.width = _this2.naturalWidth = info.width;
          _this2.height = _this2.naturalHeight = info.height;
          _this2._data = info.data;
          _this2._glFormat = info.glFormat;
          _this2._glInternalFormat = info.glInternalFormat;
          _this2._glType = info.glType;
          _this2._numberOfMipmaps = info.numberOfMipmaps;
          _this2._compressed = info.compressed;
          _this2._bpp = info.bpp;
          _this2._premultiplyAlpha = info.premultiplyAlpha;
          _this2._alignment = 1;
          if ((_this2._numberOfMipmaps == 0 || _this2._numberOfMipmaps == 1) && !_this2._compressed) {
            var bytesPerRow = _this2.width * _this2._bpp / 8;
            if (bytesPerRow % 8 == 0) _this2._alignment = 8;else if (bytesPerRow % 4 == 0) _this2._alignment = 4;else if (bytesPerRow % 2 == 0) _this2._alignment = 2;
          }
          _this2.complete = true;
          var event = new _Event["default"]('load');
          _this2.dispatchEvent(event);
        });
      }
    }, {
      key: "clientWidth",
      get: function get() {
        return this.width;
      }
    }, {
      key: "clientHeight",
      get: function get() {
        return this.height;
      }
    }]);
    return _HTMLImageElement;
  }(_HTMLElement2["default"]);
  module.exports = _HTMLImageElement;
}

},{"./Event":10,"./HTMLElement":18}],22:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
window.ral = window.ral || {};
var HTMLInputElement = exports["default"] = function (_HTMLElement) {
  _inherits(HTMLInputElement, _HTMLElement);
  function HTMLInputElement() {
    _classCallCheck(this, HTMLInputElement);
    return _callSuper(this, HTMLInputElement, ["INPUT"]);
  }
  _createClass(HTMLInputElement, [{
    key: "focus",
    value: function focus() {
      _get(_getPrototypeOf(HTMLInputElement.prototype), "focus", this).call(this);
      if (!this.target.editable) {
        return;
      }
      var that = this;
      var onKeyboardInput = function onKeyboardInput(res) {
        var str = res ? res.value : "";
        that.inputTarget.text = str;
        that.target.event("input");
      };
      var onKeyboardConfirm = function onKeyboardConfirm(res) {
        var str = res ? res.value : "";
        that.target.text = str;
        that.target.event("input");
        that.target.focus = false;
        ral.offKeyboardConfirm(onKeyboardConfirm);
        ral.offKeyboardInput(onKeyboardInput);
        ral.hideKeyboard({});
      };
      ral.offKeyboardInput(onKeyboardInput);
      ral.offKeyboardConfirm(onKeyboardConfirm);
      ral.showKeyboard({
        defaultValue: this.value,
        maxLength: this.maxLength,
        multiple: this.target.multiline,
        confirmHold: false,
        inputType: this.target.type,
        success: function success(res) {},
        fail: function fail(res) {}
      });
      ral.onKeyboardInput(onKeyboardInput);
      ral.onKeyboardConfirm(onKeyboardConfirm);
    }
  }, {
    key: "blur",
    value: function blur() {
      _get(_getPrototypeOf(HTMLInputElement.prototype), "blur", this).call(this);
      ral.hideKeyboard({});
    }
  }]);
  return HTMLInputElement;
}(_HTMLElement2["default"]);

},{"./HTMLElement":18}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
var _MediaError = _interopRequireDefault(require("./MediaError"));
var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HTMLMediaElement = exports["default"] = function (_HTMLElement) {
  _inherits(HTMLMediaElement, _HTMLElement);
  function HTMLMediaElement(url, type) {
    var _this;
    _classCallCheck(this, HTMLMediaElement);
    _this = _callSuper(this, HTMLMediaElement, [type]);
    _defineProperty(_assertThisInitialized(_this), "audioTracks", undefined);
    _defineProperty(_assertThisInitialized(_this), "autoplay", false);
    _defineProperty(_assertThisInitialized(_this), "controller", null);
    _defineProperty(_assertThisInitialized(_this), "controls", false);
    _defineProperty(_assertThisInitialized(_this), "crossOrigin", null);
    _defineProperty(_assertThisInitialized(_this), "defaultMuted", false);
    _defineProperty(_assertThisInitialized(_this), "defaultPlaybackRate", 1.0);
    _defineProperty(_assertThisInitialized(_this), "mediaGroup", undefined);
    _defineProperty(_assertThisInitialized(_this), "mediaKeys", null);
    _defineProperty(_assertThisInitialized(_this), "mozAudioChannelType", undefined);
    _defineProperty(_assertThisInitialized(_this), "muted", false);
    _defineProperty(_assertThisInitialized(_this), "networkState", HTMLMediaElement.NETWORK_EMPTY);
    _defineProperty(_assertThisInitialized(_this), "playbackRate", 1);
    _defineProperty(_assertThisInitialized(_this), "preload", "auto");
    _defineProperty(_assertThisInitialized(_this), "loop", false);
    Object.assign(_WeakMap["default"].get(_assertThisInitialized(_this)), {
      buffered: undefined,
      currentSrc: url || "",
      duration: 0,
      ended: false,
      error: null,
      initialTime: 0,
      paused: true,
      readyState: HTMLMediaElement.HAVE_NOTHING,
      volume: 1.0,
      currentTime: 0
    });
    _this.addEventListener("ended", function () {
      _WeakMap["default"].get(this).ended = true;
    });
    _this.addEventListener("play", function () {
      _WeakMap["default"].get(this).ended = false;
      _WeakMap["default"].get(this).error = null;
      _WeakMap["default"].get(this).paused = false;
    });
    _this.addEventListener("error", function () {
      _WeakMap["default"].get(this).error = true;
      _WeakMap["default"].get(this).ended = true;
      _WeakMap["default"].get(this).paused = false;
    });
    return _this;
  }
  _createClass(HTMLMediaElement, [{
    key: "currentTime",
    get: function get() {
      return _WeakMap["default"].get(this).currentTime;
    },
    set: function set(value) {
      _WeakMap["default"].get(this).currentTime = value;
    }
  }, {
    key: "src",
    get: function get() {
      return _WeakMap["default"].get(this).currentSrc;
    },
    set: function set(value) {
      _WeakMap["default"].get(this).currentSrc = value;
    }
  }, {
    key: "buffered",
    get: function get() {
      return _WeakMap["default"].get(this).buffered;
    }
  }, {
    key: "currentSrc",
    get: function get() {
      return _WeakMap["default"].get(this).currentSrc;
    }
  }, {
    key: "duration",
    get: function get() {
      return _WeakMap["default"].get(this).duration;
    }
  }, {
    key: "ended",
    get: function get() {
      return _WeakMap["default"].get(this).ended;
    }
  }, {
    key: "error",
    get: function get() {
      return _WeakMap["default"].get(this).error;
    }
  }, {
    key: "initialTime",
    get: function get() {
      return _WeakMap["default"].get(this).initialTime;
    }
  }, {
    key: "paused",
    get: function get() {
      return _WeakMap["default"].get(this).paused;
    }
  }, {
    key: "volume",
    get: function get() {
      return _WeakMap["default"].get(this).volume;
    },
    set: function set(value) {
      _WeakMap["default"].get(this).volume = value;
    }
  }, {
    key: "canPlayType",
    value: function canPlayType(mediaType) {
      return 'maybe';
    }
  }, {
    key: "captureStream",
    value: function captureStream() {}
  }, {
    key: "fastSeek",
    value: function fastSeek() {}
  }, {
    key: "load",
    value: function load() {}
  }, {
    key: "pause",
    value: function pause() {}
  }, {
    key: "play",
    value: function play() {}
  }], [{
    key: "NETWORK_EMPTY",
    get: function get() {
      return 0;
    }
  }, {
    key: "NETWORK_IDLE",
    get: function get() {
      return 1;
    }
  }, {
    key: "NETWORK_LOADING",
    get: function get() {
      return 2;
    }
  }, {
    key: "NETWORK_NO_SOURCE",
    get: function get() {
      return 3;
    }
  }, {
    key: "HAVE_NOTHING",
    get: function get() {
      return 0;
    }
  }, {
    key: "HAVE_METADATA",
    get: function get() {
      return 1;
    }
  }, {
    key: "HAVE_CURRENT_DATA",
    get: function get() {
      return 2;
    }
  }, {
    key: "HAVE_FUTURE_DATA",
    get: function get() {
      return 3;
    }
  }, {
    key: "HAVE_ENOUGH_DATA",
    get: function get() {
      return 4;
    }
  }]);
  return HTMLMediaElement;
}(_HTMLElement2["default"]);

},{"./HTMLElement":18,"./MediaError":30,"./util/WeakMap":57}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
var _Event = _interopRequireDefault(require("./Event"));
var _FileCache = _interopRequireDefault(require("./util/FileCache"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _BASE64_NAME = "data:application/javascript;base64,";
var _URI_NAME = "data:application/javascript,";
var _getPathFromBase64String = function _getPathFromBase64String(src) {
  if (src === null || src === undefined) {
    return src;
  }
  if (src.startsWith(_BASE64_NAME)) {
    var content = src.substring(_BASE64_NAME.length);
    var source = window.atob(content);
    var len = source.length;
    if (len > 0) {
      return _getDiskPathFromArrayBuffer(source, len);
    } else {
      return src;
    }
  } else if (src.startsWith(_URI_NAME)) {
    var _content = src.substring(_URI_NAME.length);
    var _source = decodeURIComponent(_content);
    var _len = _source.length;
    if (_len > 0) {
      return _getDiskPathFromArrayBuffer(_source, _len);
    } else {
      return src;
    }
  } else {
    return src;
  }
};
function _getDiskPathFromArrayBuffer(source, len) {
  var arrayBuffer = new ArrayBuffer(len);
  var uint8Array = new Uint8Array(arrayBuffer);
  for (var i = 0; i < len; i++) {
    uint8Array[i] = source.charCodeAt(i);
  }
  return _FileCache["default"].getCache(arrayBuffer);
}
var HTMLScriptElement = exports["default"] = function (_HTMLElement) {
  _inherits(HTMLScriptElement, _HTMLElement);
  function HTMLScriptElement() {
    var _this;
    _classCallCheck(this, HTMLScriptElement);
    _this = _callSuper(this, HTMLScriptElement, ['SCRIPT']);
    _defineProperty(_assertThisInitialized(_this), "noModule", false);
    var self = _assertThisInitialized(_this);
    var onAppend = function onAppend() {
      self.removeEventListener("append", onAppend);
      var src = _getPathFromBase64String(self.src);
      require(src);
      self.dispatchEvent(new _Event["default"]('load'));
    };
    _this.addEventListener("append", onAppend);
    return _this;
  }
  return _createClass(HTMLScriptElement);
}(_HTMLElement2["default"]);
Object.defineProperty(HTMLScriptElement.prototype, "noModule", {
  get: function get() {
    throw new TypeError(message, "Illegal invocation");
  },
  set: function set(value) {
    throw new TypeError(message, "Illegal invocation");
  }
});

},{"./Event":10,"./HTMLElement":18,"./util/FileCache":56}],25:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _FontFace = _interopRequireDefault(require("./FontFace"));
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var HTMLStyleElement = exports["default"] = function (_HTMLElement) {
  _inherits(HTMLStyleElement, _HTMLElement);
  function HTMLStyleElement() {
    var _this;
    _classCallCheck(this, HTMLStyleElement);
    _this = _callSuper(this, HTMLStyleElement, ["STYLE"]);
    var self = _assertThisInitialized(_this);
    var onAppend = function onAppend() {
      self.removeEventListener("append", onAppend);
      var textContent = self.textContent || self.innerHTML || "";
      var fontFaceStr = "";
      var start = 0;
      var length = textContent.length;
      var flag = 0;
      for (var index = 0; index < length; ++index) {
        if (start > 0) {
          if (textContent[index] === "{") {
            flag++;
          } else if (textContent[index] === "}") {
            flag--;
            if (flag === 0) {
              fontFaceStr = textContent.substring(start, index + 1);
              break;
            } else if (flag < 0) {
              break;
            }
          }
        } else {
          if (textContent[index] === "@" && textContent.substr(index, "@font-face".length) === "@font-face") {
            index += 9;
            start = index + 1;
          }
        }
      }
      if (fontFaceStr) {
        var fontFamily;
        var _length = fontFaceStr.length;
        var _start = fontFaceStr.indexOf("font-family");
        if (_start === -1) {
          return;
        }
        _start += "font-family".length + 1;
        var end = _start;
        for (; end < _length; ++end) {
          if (fontFaceStr[end] === ";") {
            fontFamily = fontFaceStr.substring(_start, end).trim();
            break;
          } else if (fontFaceStr[end] === ":") {
            _start = end + 1;
          }
        }
        if (!fontFamily) {
          return;
        }
        end = fontFaceStr.indexOf("url(");
        _start = 0;
        var source;
        for (; end < _length; ++end) {
          if (fontFaceStr[end] === "'" || fontFaceStr[end] === '"') {
            if (_start > 0) {
              source = fontFaceStr.substring(_start, end).trim();
              break;
            }
            _start = end + 1;
          }
        }
        if (source) {
          var fontFace = new _FontFace["default"](fontFamily, source);
          fontFace.load();
          document.fonts.add(fontFace);
        }
      }
    };
    _this.addEventListener("append", onAppend);
    return _this;
  }
  return _createClass(HTMLStyleElement);
}(_HTMLElement2["default"]);

},{"./FontFace":12,"./HTMLElement":18}],26:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLMediaElement2 = _interopRequireDefault(require("./HTMLMediaElement"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var HTMLVideoElement = exports["default"] = function (_HTMLMediaElement) {
  _inherits(HTMLVideoElement, _HTMLMediaElement);
  function HTMLVideoElement() {
    _classCallCheck(this, HTMLVideoElement);
    return _callSuper(this, HTMLVideoElement, ['VIDEO']);
  }
  _createClass(HTMLVideoElement, [{
    key: "canPlayType",
    value: function canPlayType(type) {
      return type === 'video/mp4';
    }
  }]);
  return HTMLVideoElement;
}(_HTMLMediaElement2["default"]);

},{"./HTMLMediaElement":23}],27:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _HTMLImageElement2 = _interopRequireDefault(require("./HTMLImageElement"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
if (ral.getFeatureProperty("Image", "spec") === "vivo_platform_support") {
  var Image = window.Image;
  module.exports = Image;
} else {
  var _Image = window.Image;
  var _Image2 = function (_HTMLImageElement) {
    _inherits(_Image2, _HTMLImageElement);
    function _Image2(width, height) {
      _classCallCheck(this, _Image2);
      return _callSuper(this, _Image2, [width, height, true]);
    }
    return _createClass(_Image2);
  }(_HTMLImageElement2["default"]);
  var _creteImage = ral.createImage;
  if (_creteImage) {
    _Image.prototype.__proto__ = _Image2.prototype;
  }
  module.exports = _Image2;
}

},{"./HTMLImageElement":21}],28:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ImageData = function () {
  function ImageData(array, width, height) {
    _classCallCheck(this, ImageData);
    if (typeof array === 'number' && typeof width == 'number') {
      height = width;
      width = array;
      array = null;
    }
    if (array === null) {
      this._data = new Uint8ClampedArray(width * height * 4);
    } else {
      this._data = array;
    }
    this._width = width;
    this._height = height;
  }
  _createClass(ImageData, [{
    key: "data",
    get: function get() {
      return this._data;
    }
  }, {
    key: "width",
    get: function get() {
      return this._width;
    }
  }, {
    key: "height",
    get: function get() {
      return this._height;
    }
  }]);
  return ImageData;
}();
module.exports = ImageData;

},{}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Location = exports["default"] = function () {
  function Location() {
    _classCallCheck(this, Location);
    _defineProperty(this, "ancestorOrigins", "");
    _defineProperty(this, "hash", "");
    _defineProperty(this, "host", "");
    _defineProperty(this, "hostname", "");
    _defineProperty(this, "href", "");
    _defineProperty(this, "origin", "");
    _defineProperty(this, "password", "");
    _defineProperty(this, "pathname", "");
    _defineProperty(this, "port", "");
    _defineProperty(this, "protocol", "");
    _defineProperty(this, "search", "");
    _defineProperty(this, "username", "");
  }
  _createClass(Location, [{
    key: "assign",
    value: function assign() {}
  }, {
    key: "reload",
    value: function reload() {}
  }, {
    key: "replace",
    value: function replace() {}
  }, {
    key: "toString",
    value: function toString() {
      return "";
    }
  }]);
  return Location;
}();

},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var MEDIA_ERR_ABORTED = 1;
var MEDIA_ERR_NETWORK = 2;
var MEDIA_ERR_DECODE = 3;
var MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
var MediaError = exports["default"] = function () {
  function MediaError() {
    _classCallCheck(this, MediaError);
  }
  _createClass(MediaError, [{
    key: "code",
    get: function get() {
      return MEDIA_ERR_ABORTED;
    }
  }, {
    key: "message",
    get: function get() {
      return "";
    }
  }]);
  return MediaError;
}();
module.exports = MediaError;

},{}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Navigator = exports["default"] = _createClass(function Navigator(platform, language) {
  _classCallCheck(this, Navigator);
  _defineProperty(this, "platform", "");
  _defineProperty(this, "language", "");
  _defineProperty(this, "appVersion", '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');
  _defineProperty(this, "userAgent", 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 NetType/WIFI Language/zh_CN');
  _defineProperty(this, "onLine", true);
  _defineProperty(this, "maxTouchPoints", 10);
  _defineProperty(this, "geolocation", {
    getCurrentPosition: function getCurrentPosition() {},
    watchPosition: function watchPosition() {},
    clearWatch: function clearWatch() {}
  });
  this.platform = platform;
  this.language = language;
});

},{}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventTarget2 = _interopRequireDefault(require("./EventTarget"));
var _Event = _interopRequireDefault(require("./Event"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Node = exports["default"] = function (_EventTarget) {
  _inherits(Node, _EventTarget);
  function Node(nodeName) {
    var _this;
    _classCallCheck(this, Node);
    _this = _callSuper(this, Node);
    _defineProperty(_assertThisInitialized(_this), "childNodes", []);
    _defineProperty(_assertThisInitialized(_this), "parentNode", null);
    _defineProperty(_assertThisInitialized(_this), "_nodeName", "");
    _this._nodeName = nodeName;
    return _this;
  }
  _createClass(Node, [{
    key: "appendChild",
    value: function appendChild(node) {
      this.childNodes.push(node);
      node.parentNode = this;
      var nodeName = node.nodeName;
      if (nodeName === "SCRIPT" || nodeName === "STYLE") {
        node.dispatchEvent(new _Event["default"]("append"));
      }
      return node;
    }
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var copyNode = Object.create(this);
      Object.assign(copyNode, this);
      copyNode.parentNode = null;
      return copyNode;
    }
  }, {
    key: "removeChild",
    value: function removeChild(node) {
      var index = this.childNodes.findIndex(function (child) {
        return child === node;
      });
      if (index > -1) {
        var _node = this.childNodes.splice(index, 1)[0];
        _node.parentNode = null;
        return _node;
      }
      return null;
    }
  }, {
    key: "contains",
    value: function contains(node) {
      return this.childNodes.indexOf(node) > -1;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent() {
      var result = true;
      var length = this.childNodes.length;
      for (var index = length - 1; result && index >= 0; --index) {
        var _this$childNodes$inde;
        result = (_this$childNodes$inde = this.childNodes[index]).dispatchEvent.apply(_this$childNodes$inde, arguments);
      }
      if (result) {
        return _get(_getPrototypeOf(Node.prototype), "dispatchEvent", this).apply(this, arguments);
      }
      return false;
    }
  }, {
    key: "nodeName",
    get: function get() {
      return this._nodeName;
    }
  }]);
  return Node;
}(_EventTarget2["default"]);

},{"./Event":10,"./EventTarget":11}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var NodeList = exports["default"] = function () {
  function NodeList() {
    _classCallCheck(this, NodeList);
    _WeakMap["default"].set(this, {
      array: []
    });
    return new Proxy(this, {
      get: function get(target, key) {
        if (_typeof(key) === "symbol") {
          return function () {
            return "";
          };
        }
        if (/^[0-9]*$/.test(key)) {
          return _WeakMap["default"].get(target).array[key];
        }
        var result = target[key];
        if (typeof result === "function") {
          result = result.bind(target);
        }
        return result;
      }
    });
  }
  _createClass(NodeList, [{
    key: "push",
    value: function push(element) {
      _WeakMap["default"].get(this).array.push(element);
    }
  }, {
    key: "item",
    value: function item(index) {
      return _WeakMap["default"].get(this).array[index];
    }
  }, {
    key: "length",
    get: function get() {
      return _WeakMap["default"].get(this).array.length;
    }
  }, {
    key: "concat",
    value: function concat() {
      var array = _WeakMap["default"].get(this).array;
      return array.concat.apply(array, arguments);
    }
  }]);
  return NodeList;
}();

},{"./util/WeakMap":57}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ScreenOrientation = _interopRequireDefault(require("./ScreenOrientation"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
window.ral = window.ral || {};
var Screen = exports["default"] = function () {
  function Screen() {
    _classCallCheck(this, Screen);
    _defineProperty(this, "availTop", 0);
    _defineProperty(this, "availLeft", 0);
    _defineProperty(this, "availHeight", window.innerHeight);
    _defineProperty(this, "availWidth", window.innerWidth);
    _defineProperty(this, "colorDepth", 8);
    _defineProperty(this, "pixelDepth", 0);
    _defineProperty(this, "left", 0);
    _defineProperty(this, "top", 0);
    _defineProperty(this, "width", window.innerWidth);
    _defineProperty(this, "height", window.innerHeight);
    _defineProperty(this, "orientation", new _ScreenOrientation["default"]());
  }
  _createClass(Screen, [{
    key: "onorientationchange",
    value: function onorientationchange() {}
  }]);
  return Screen;
}();

},{"./ScreenOrientation":35}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventTarget2 = _interopRequireDefault(require("./EventTarget"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ScreenOrientation = exports["default"] = function (_EventTarget) {
  _inherits(ScreenOrientation, _EventTarget);
  function ScreenOrientation() {
    var _this;
    _classCallCheck(this, ScreenOrientation);
    _this = _callSuper(this, ScreenOrientation);
    _defineProperty(_assertThisInitialized(_this), "_type", "portrait-primary");
    _defineProperty(_assertThisInitialized(_this), "_angle", 0);
    _defineProperty(_assertThisInitialized(_this), "_isLocked", false);
    return _this;
  }
  _createClass(ScreenOrientation, [{
    key: "type",
    get: function get() {
      return this._type;
    }
  }, {
    key: "angle",
    get: function get() {
      return this._angle;
    }
  }, {
    key: "onchange",
    value: function onchange(event) {}
  }, {
    key: "lock",
    value: function lock(orientation) {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        if (_this2._isLocked) {
          reject(new Error("Screen orientation is already locked"));
          return;
        }
        _this2._isLocked = true;
        resolve();
      });
    }
  }, {
    key: "unlock",
    value: function unlock() {
      this._isLocked = false;
    }
  }]);
  return ScreenOrientation;
}(_EventTarget2["default"]);

},{"./EventTarget":11}],36:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Event2 = _interopRequireDefault(require("./Event"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var TouchEvent = exports["default"] = function (_Event) {
  _inherits(TouchEvent, _Event);
  function TouchEvent(type) {
    var _this;
    _classCallCheck(this, TouchEvent);
    _this = _callSuper(this, TouchEvent, [type]);
    _this.touches = [];
    _this.targetTouches = [];
    _this.changedTouches = [];
    return _this;
  }
  return _createClass(TouchEvent);
}(_Event2["default"]);

},{"./Event":10}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Event = _interopRequireDefault(require("./Event"));
var _FileCache = _interopRequireDefault(require("./util/FileCache"));
var _XMLHttpRequestEventTarget = _interopRequireDefault(require("./XMLHttpRequestEventTarget"));
var _XMLHttpRequestCacheManager = _interopRequireDefault(require("./XMLHttpRequestCacheManager"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var fsm = ral.getFileSystemManager();
var _XMLHttpRequest = window.XMLHttpRequest;
window.ral = window.ral || {};
var XMLHttpRequest = exports["default"] = function (_XMLHttpRequestEventT) {
  _inherits(XMLHttpRequest, _XMLHttpRequestEventT);
  function XMLHttpRequest() {
    var _this;
    _classCallCheck(this, XMLHttpRequest);
    _this = _callSuper(this, XMLHttpRequest, [new _XMLHttpRequest()]);
    _defineProperty(_assertThisInitialized(_this), "_isLocal", false);
    _defineProperty(_assertThisInitialized(_this), "_isCache", false);
    _defineProperty(_assertThisInitialized(_this), "_url", void 0);
    _defineProperty(_assertThisInitialized(_this), "_readyState", 0);
    _defineProperty(_assertThisInitialized(_this), "_response", void 0);
    _defineProperty(_assertThisInitialized(_this), "_responseText", void 0);
    _defineProperty(_assertThisInitialized(_this), "_responseURL", void 0);
    _defineProperty(_assertThisInitialized(_this), "_responseXML", void 0);
    _defineProperty(_assertThisInitialized(_this), "_status", void 0);
    _defineProperty(_assertThisInitialized(_this), "_statusText", void 0);
    _defineProperty(_assertThisInitialized(_this), "_responseType", void 0);
    var xhr = _this._xhr;
    xhr.onreadystatechange = function (e) {
      var event = new _Event["default"]("readystatechange");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(XMLHttpRequest, [{
    key: "readyState",
    get: function get() {
      if (this._isRemote()) {
        return this._xhr.readyState;
      } else {
        return this._readyState;
      }
    }
  }, {
    key: "_isRemote",
    value: function _isRemote() {
      return !(this._isLocal || this._isCache);
    }
  }, {
    key: "response",
    get: function get() {
      var response = this._isRemote() ? this._xhr.response : this._response;
      var result = this._responseType === "blob" ? new Blob([response]) : response;
      return result;
    }
  }, {
    key: "responseText",
    get: function get() {
      if (this._isRemote()) {
        return this._xhr.responseText;
      } else {
        return this._responseText;
      }
    }
  }, {
    key: "responseType",
    get: function get() {
      return this._responseType;
    },
    set: function set(value) {
      this._responseType = this._xhr.responseType = value;
      if (value === "blob") {
        this._xhr.responseType = "arraybuffer";
      }
    }
  }, {
    key: "responseURL",
    get: function get() {
      if (this._isRemote()) {
        return this._xhr.responseURL;
      } else {
        return this._responseURL;
      }
    }
  }, {
    key: "responseXML",
    get: function get() {
      if (this._isRemote()) {
        return this._xhr.responseXML;
      } else {
        return this._responseXML;
      }
    }
  }, {
    key: "status",
    get: function get() {
      if (this._isRemote()) {
        return this._xhr.status;
      } else {
        return this._status;
      }
    }
  }, {
    key: "statusText",
    get: function get() {
      if (this._isRemote()) {
        return this._xhr.statusText;
      } else {
        return this._statusText;
      }
    }
  }, {
    key: "timeout",
    get: function get() {
      return this._xhr.timeout;
    },
    set: function set(value) {
      this._xhr.timeout = value;
    }
  }, {
    key: "upload",
    get: function get() {
      return this._xhr.upload;
    }
  }, {
    key: "withCredentials",
    get: function get() {
      return this._xhr.withCredentials;
    },
    set: function set(value) {
      this._xhr.withCredentials = value;
    }
  }, {
    key: "abort",
    value: function abort() {
      this._xhr.abort();
    }
  }, {
    key: "getAllResponseHeaders",
    value: function getAllResponseHeaders() {
      return this._xhr.getAllResponseHeaders();
    }
  }, {
    key: "getResponseHeader",
    value: function getResponseHeader(name) {
      return this._xhr.getResponseHeader(name);
    }
  }, {
    key: "open",
    value: function open(method, url, async, user, password) {
      this._url = url;
      if (typeof url === "string") {
        var _url = url.toLocaleString();
        if (_url.startsWith("http://") || _url.startsWith("https://")) {
          var _this$_xhr;
          this._isLocal = false;
          return (_this$_xhr = this._xhr).open.apply(_this$_xhr, arguments);
        }
      }
      this._isLocal = true;
      if (this._readyState !== 1) {
        this._readyState = 1;
        this.dispatchEvent(new _Event["default"]("readystatechange"));
      }
    }
  }, {
    key: "overrideMimeType",
    value: function overrideMimeType() {
      var _this$_xhr2;
      return (_this$_xhr2 = this._xhr).overrideMimeType.apply(_this$_xhr2, arguments);
    }
  }, {
    key: "send",
    value: function send() {
      if (this.readyState !== 1) {
        throw "Uncaught DOMException: Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.";
      }
      if (this._isLocal) {
        var self = this;
        var isBinary = this._xhr.responseType === "arraybuffer";
        this._readyState = 2;
        this.dispatchEvent(new _Event["default"]("readystatechange"));
        fsm.readFile({
          filePath: this._url,
          encoding: isBinary ? "binary" : "utf8",
          success: function success(res) {
            self._status = 200;
            self._response = self._responseText = res.data;
            if (isBinary) {
              _FileCache["default"].setCache(self._url, res.data);
            }
            var eventProgressStart = new _Event["default"]("progress");
            eventProgressStart.loaded = 0;
            eventProgressStart.total = isBinary ? res.data.byteLength : res.data.length;
            var eventProgressEnd = new _Event["default"]("progress");
            eventProgressEnd.loaded = eventProgressStart.total;
            eventProgressEnd.total = eventProgressStart.total;
            self.dispatchEvent(new _Event["default"]("loadstart"));
            self.dispatchEvent(eventProgressStart);
            self.dispatchEvent(eventProgressEnd);
            self.dispatchEvent(new _Event["default"]("load"));
          },
          fail: function (res) {
            if (res.errCode === 1) {
              self._status = 404;
              self.dispatchEvent(new _Event["default"]("loadstart"));
              self.dispatchEvent(new _Event["default"]("load"));
            } else {
              this.dispatchEvent(new _Event["default"]("error"));
            }
          }.bind(this),
          complete: function () {
            this._readyState = 4;
            this.dispatchEvent(new _Event["default"]("readystatechange"));
            this.dispatchEvent(new _Event["default"]("loadend"));
          }.bind(this)
        });
      } else {
        var _args = arguments;
        var cachePath = _XMLHttpRequestCacheManager["default"].getInstance().getCachePath(this._url);
        if (cachePath) {
          fsm.readFile({
            filePath: cachePath,
            encoding: "binary",
            success: function (res) {
              this._isCache = true;
              this._status = 200;
              this._response = this._responseText = res.data;
              var eventProgressStart = new _Event["default"]("progress");
              eventProgressStart.loaded = 0;
              eventProgressStart.total = res.data.byteLength;
              var eventProgressEnd = new _Event["default"]("progress");
              eventProgressEnd.loaded = eventProgressStart.total;
              eventProgressEnd.total = eventProgressStart.total;
              this.dispatchEvent(new _Event["default"]("loadstart"));
              this.dispatchEvent(eventProgressStart);
              this.dispatchEvent(eventProgressEnd);
              this.dispatchEvent(new _Event["default"]("load"));
              _XMLHttpRequestCacheManager["default"].getInstance().updateLastTime(this._url);
            }.bind(this),
            fail: function (res) {
              console.warn("XMLHttpRequest read cache fail fail: " + JSON.stringify(res));
            }.bind(this),
            complete: function () {
              if (this._status === 200) {
                this._readyState = 4;
                this.dispatchEvent(new _Event["default"]("readystatechange"));
                this.dispatchEvent(new _Event["default"]("loadend"));
              } else {
                var _this$_xhr3;
                console.info("XMLHttpRequest read cache fail, continue send network request. url: " + this._url);
                (_this$_xhr3 = this._xhr).send.apply(_this$_xhr3, _toConsumableArray(_args));
              }
            }.bind(this)
          });
        } else {
          var _this$_xhr4;
          (_this$_xhr4 = this._xhr).send.apply(_this$_xhr4, arguments);
        }
      }
    }
  }, {
    key: "setRequestHeader",
    value: function setRequestHeader() {
      var _this$_xhr5;
      (_this$_xhr5 = this._xhr).setRequestHeader.apply(_this$_xhr5, arguments);
    }
  }]);
  return XMLHttpRequest;
}(_XMLHttpRequestEventTarget["default"]);

},{"./Event":10,"./XMLHttpRequestCacheManager":38,"./XMLHttpRequestEventTarget":39,"./util/FileCache":56}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _fsUtils = _interopRequireDefault(require("./util/fsUtils"));
var _util = _interopRequireDefault(require("../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
window.ral = window.ral || {};
var XMLHttpRequestCacheManager = exports["default"] = function () {
  function XMLHttpRequestCacheManager() {
    _classCallCheck(this, XMLHttpRequestCacheManager);
    _defineProperty(this, "HW_WASM_CACHES", "hwwasmcaches");
    _defineProperty(this, "CACHED_FILE_NAME", "cacheList.json");
    _defineProperty(this, "DELAY_TIME", 500);
    _defineProperty(this, "cacheDir", void 0);
    _defineProperty(this, "cacheFileInformationFile", void 0);
    _defineProperty(this, "cachedFiles", new Cache());
    _defineProperty(this, "version", "1.0");
    _defineProperty(this, "cacheIdentifiers", new Set());
    _defineProperty(this, "excludeCacheIdentifiers", new Set());
    _defineProperty(this, "cleaning", false);
    this.cacheDir = ral.env.USER_DATA_PATH + "/" + this.HW_WASM_CACHES;
    this.cacheFileInformationFile = this.cacheDir + "/" + this.CACHED_FILE_NAME;
    this.cacheIdentifiers.add("StreamingAssets");
    var result = _fsUtils["default"].readJsonSync(this.cacheFileInformationFile);
    if (result instanceof Error || this.version !== result.version) {
      if (result instanceof Error) {
        console.log("XMLHttpRequestCacheManager readJsonSync result error message: " + result.message);
      } else {
        console.log("XMLHttpRequestCacheManager readJsonSync result error version: " + result.version);
        _fsUtils["default"].rmdirSync(this.cacheDir, true);
      }
      _fsUtils["default"].makeDirSync(this.cacheDir, true);
      this._writeCacheFileInformationFile();
    } else {
      this.cachedFiles = new Cache(result.files);
    }
  }
  _createClass(XMLHttpRequestCacheManager, [{
    key: "QG_AddCacheIdentifiers",
    value: function QG_AddCacheIdentifiers(conf) {
      var _this = this;
      var jsonObj = _util["default"].formatJsonStr(conf);
      if (!("cacheIdentifiers" in jsonObj)) {
        return;
      }
      var cacheIdentifiers = jsonObj["cacheIdentifiers"];
      if (!(cacheIdentifiers instanceof Array)) {
        return;
      }
      cacheIdentifiers.forEach(function (value) {
        _this.cacheIdentifiers.add(value);
      });
    }
  }, {
    key: "QG_AddExcludeCacheIdentifiers",
    value: function QG_AddExcludeCacheIdentifiers(conf) {
      var _this2 = this;
      var jsonObj = _util["default"].formatJsonStr(conf);
      if (!("excludeCacheIdentifiers" in jsonObj)) {
        return;
      }
      var excludeCacheIdentifiers = jsonObj["excludeCacheIdentifiers"];
      if (!(excludeCacheIdentifiers instanceof Array)) {
        return;
      }
      excludeCacheIdentifiers.forEach(function (value) {
        _this2.excludeCacheIdentifiers.add(value);
      });
    }
  }, {
    key: "QG_HasCache",
    value: function QG_HasCache(url) {
      return !!this.getCachePath(url);
    }
  }, {
    key: "QG_DeleteCache",
    value: function QG_DeleteCache(url) {
      if (this.cleaning) {
        console.log("XMLHttpRequestCacheManager QG_DeleteCache is cleaning. url: " + url);
        return;
      }
      this.cleaning = true;
      var cache = this.cachedFiles.get(url);
      if (!cache) {
        console.log("XMLHttpRequestCacheManager QG_DeleteCache not exist cache. url: " + url);
        this.cleaning = false;
        return;
      }
      var needDeleteCaches = [];
      needDeleteCaches.push({
        originUrl: url,
        url: cache.url,
        lastTime: cache.lastTime
      });
      console.log("XMLHttpRequestCacheManager QG_DeleteCache start. url: " + url);
      this._delayDeleteCacheFile(needDeleteCaches);
    }
  }, {
    key: "QG_ClearLru",
    value: function QG_ClearLru() {
      this._clearLRU();
    }
  }, {
    key: "_writeCacheFileInformationFile",
    value: function _writeCacheFileInformationFile() {
      return _fsUtils["default"].writeFileSync(this.cacheFileInformationFile, JSON.stringify({
        files: this.cachedFiles._map,
        version: this.version
      }), 'utf8');
    }
  }, {
    key: "needCache",
    value: function needCache(url) {
      if (!url) {
        return false;
      }
      if (this.cleaning) {
        return false;
      }
      var needCache = false;
      var _iterator = _createForOfIteratorHelper(this.cacheIdentifiers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cacheIdentifier = _step.value;
          if (-1 !== url.indexOf(cacheIdentifier)) {
            needCache = true;
            var _iterator2 = _createForOfIteratorHelper(this.excludeCacheIdentifiers),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var excludeCacheIdentifier = _step2.value;
                if (-1 !== url.indexOf(excludeCacheIdentifier)) {
                  needCache = false;
                  return needCache;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            return needCache;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return needCache;
    }
  }, {
    key: "getCachePath",
    value: function getCachePath(url) {
      if (this.cachedFiles.has(url)) {
        return this.cachedFiles.get(url).url;
      } else {
        return "";
      }
    }
  }, {
    key: "updateLastTime",
    value: function updateLastTime(url) {
      if (this.cachedFiles.has(url)) {
        var cache = this.cachedFiles.get(url);
        cache.lastTime = Date.now().toString();
        var result = this._writeCacheFileInformationFile();
        if (result instanceof Error && _fsUtils["default"].isOutOfStorage(result.message)) {
          console.log("XMLHttpRequestCacheManager updateLastTime need clearLRU.");
          this._clearLRU();
        }
      }
    }
  }, {
    key: "writeCache",
    value: function writeCache(url, response) {
      setTimeout(this._writeCacheFile.bind(this), this.DELAY_TIME, url, response);
    }
  }, {
    key: "_writeCacheFile",
    value: function _writeCacheFile(url, response) {
      if (!url || !response) {
        return;
      }
      if (this.cleaning) {
        console.log("XMLHttpRequestCacheManager _writeCacheFile cleaning not write url: " + url);
        return;
      }
      var self = this;
      var cachePath = this.cacheDir + "/" + window.btoa(url);
      _fsUtils["default"].writeFile(cachePath, response, 'binary', function (res) {
        if (res instanceof Error) {
          console.warn("XMLHttpRequestCacheManager _writeCacheFile onComplete error: " + res.message);
          if (_fsUtils["default"].isOutOfStorage(res.message)) {
            self._clearLRU();
          }
          return;
        }
        if (self.cleaning) {
          console.log("XMLHttpRequestCacheManager _writeCacheFile onComplete cleaning not write url: " + url);
          return;
        }
        self.cachedFiles.set(url, {
          url: cachePath,
          lastTime: Date.now().toString()
        });
        var result = self._writeCacheFileInformationFile();
        if (result instanceof Error && _fsUtils["default"].isOutOfStorage(result.message)) {
          console.log("XMLHttpRequestCacheManager _writeCacheFile _writeCacheFileInformationFile need clearLRU.");
          self._clearLRU();
        }
      });
    }
  }, {
    key: "_clearLRU",
    value: function _clearLRU() {
      if (this.cleaning) {
        console.log("XMLHttpRequestCacheManager _clearLRU is cleaning, don't need again.");
        return;
      }
      console.log("XMLHttpRequestCacheManager _clearLRU start.");
      this.cleaning = true;
      var dirtyFiles = this._getDirtyFiles();
      if (dirtyFiles.length > 0) {
        console.log("XMLHttpRequestCacheManager _clearLRU dirtyFiles length: " + dirtyFiles.length);
        setTimeout(this._delayDeleteDirtyFile.bind(this), this.DELAY_TIME, dirtyFiles);
      } else {
        this._deleteCacheFiles();
      }
    }
  }, {
    key: "_getDirtyFiles",
    value: function _getDirtyFiles() {
      var _this3 = this;
      var dirtyFiles = [];
      var files = _fsUtils["default"].readDirSync(this.cacheDir);
      if (files instanceof Array) {
        files = files.filter(function (item) {
          return item !== _this3.CACHED_FILE_NAME;
        });
        if (files.size !== 0) {
          var cachedFilesLocalUrl = new Set();
          this.cachedFiles.forEach(function (value, key) {
            cachedFilesLocalUrl.add(value.url);
          });
          var _iterator3 = _createForOfIteratorHelper(files),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var file = _step3.value;
              var filepath = this.cacheDir + "/" + file;
              if (!cachedFilesLocalUrl.has(filepath)) {
                dirtyFiles.push(filepath);
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }
      return dirtyFiles;
    }
  }, {
    key: "_delayDeleteDirtyFile",
    value: function _delayDeleteDirtyFile(dirtyFilesArray) {
      var item = dirtyFilesArray.pop();
      _fsUtils["default"].deleteFile(item);
      if (dirtyFilesArray.length > 0) {
        setTimeout(this._delayDeleteDirtyFile.bind(this), this.DELAY_TIME, dirtyFilesArray);
      } else {
        this._deleteCacheFiles();
      }
    }
  }, {
    key: "_deleteCacheFiles",
    value: function _deleteCacheFiles() {
      var needDeleteCaches = [];
      this.cachedFiles.forEach(function (value, key) {
        needDeleteCaches.push({
          originUrl: key,
          url: value.url,
          lastTime: value.lastTime
        });
      });
      needDeleteCaches.sort(function (a, b) {
        return a.lastTime - b.lastTime;
      });
      needDeleteCaches.length = Math.floor(needDeleteCaches.length / 3);
      console.log("XMLHttpRequestCacheManager _deleteCacheFiles needDeleteCaches length: " + needDeleteCaches.length);
      if (needDeleteCaches.length === 0) {
        console.log("XMLHttpRequestCacheManager cleaning end.");
        this.cleaning = false;
      } else {
        setTimeout(this._delayDeleteCacheFile.bind(this), this.DELAY_TIME, needDeleteCaches);
      }
    }
  }, {
    key: "_delayDeleteCacheFile",
    value: function _delayDeleteCacheFile(needDeleteCaches) {
      var item = needDeleteCaches.pop();
      this.cachedFiles["delete"](item.originUrl);
      var result = this._writeCacheFileInformationFile();
      if (result instanceof Error && !_fsUtils["default"].isOutOfStorage(result.message)) {
        console.warn("XMLHttpRequestCacheManager _delayDeleteCacheFile error message." + result.message);
        console.log("XMLHttpRequestCacheManager cleaning end.");
        this.cleaning = false;
      } else {
        _fsUtils["default"].deleteFile(item.url);
        if (needDeleteCaches.length > 0) {
          setTimeout(this._delayDeleteCacheFile.bind(this), this.DELAY_TIME, needDeleteCaches);
        } else {
          console.log("XMLHttpRequestCacheManager cleaning end.");
          this.cleaning = false;
        }
      }
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new XMLHttpRequestCacheManager();
      }
      return this.instance;
    }
  }]);
  return XMLHttpRequestCacheManager;
}();
_defineProperty(XMLHttpRequestCacheManager, "instance", void 0);
var Cache = function () {
  function Cache(map) {
    _classCallCheck(this, Cache);
    _defineProperty(this, "_map", void 0);
    _defineProperty(this, "_count", void 0);
    if (map) {
      this._map = map;
      this._count = Object.keys(map).length;
    } else {
      this._map = Object.create(null);
      this._count = 0;
    }
  }
  _createClass(Cache, [{
    key: "has",
    value: function has(key) {
      return key in this._map;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this._map[key];
    }
  }, {
    key: "set",
    value: function set(key, val) {
      if (!(key in this._map)) this._count++;
      return this._map[key] = val;
    }
  }, {
    key: "forEach",
    value: function forEach(func) {
      for (var key in this._map) {
        func(this._map[key], key);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      var out = this._map[key];
      if (key in this._map) {
        delete this._map[key];
        this._count--;
      }
      return out;
    }
  }]);
  return Cache;
}();
XMLHttpRequestCacheManager.getInstance();
var _XMLHttpRequestCacheManager = {
  QG_AddCacheIdentifiers: function QG_AddCacheIdentifiers(conf) {
    XMLHttpRequestCacheManager.getInstance().QG_AddCacheIdentifiers(conf);
  },
  QG_AddExcludeCacheIdentifiers: function QG_AddExcludeCacheIdentifiers(conf) {
    XMLHttpRequestCacheManager.getInstance().QG_AddExcludeCacheIdentifiers(conf);
  },
  QG_HasCache: function QG_HasCache(url) {
    return XMLHttpRequestCacheManager.getInstance().QG_HasCache(url);
  },
  QG_DeleteCache: function QG_DeleteCache(url) {
    XMLHttpRequestCacheManager.getInstance().QG_DeleteCache(url);
  },
  QG_ClearLru: function QG_ClearLru() {
    XMLHttpRequestCacheManager.getInstance().QG_ClearLru();
  }
};
window.ral.QG_CacheManagerAddCacheIdentifiers = _XMLHttpRequestCacheManager.QG_AddCacheIdentifiers;
window.ral.QG_CacheManagerAddExcludeCacheIdentifiers = _XMLHttpRequestCacheManager.QG_AddExcludeCacheIdentifiers;
window.ral.QG_CacheManagerHasCaChe = _XMLHttpRequestCacheManager.QG_HasCache;
window.ral.QG_CacheManagerDeleteCache = _XMLHttpRequestCacheManager.QG_DeleteCache;
window.ral.QG_CacheManagerClearLru = _XMLHttpRequestCacheManager.QG_ClearLru;

},{"../util":3,"./util/fsUtils":58}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventTarget2 = _interopRequireDefault(require("./EventTarget"));
var _Event = _interopRequireDefault(require("./Event"));
var _XMLHttpRequestCacheManager = _interopRequireDefault(require("./XMLHttpRequestCacheManager"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var XMLHttpRequestEventTarget = exports["default"] = function (_EventTarget) {
  _inherits(XMLHttpRequestEventTarget, _EventTarget);
  function XMLHttpRequestEventTarget(xhr) {
    var _this;
    _classCallCheck(this, XMLHttpRequestEventTarget);
    _this = _callSuper(this, XMLHttpRequestEventTarget);
    _defineProperty(_assertThisInitialized(_this), "_xhr", void 0);
    _this._xhr = xhr;
    xhr.onabort = function (e) {
      var event = new _Event["default"]("abort");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_assertThisInitialized(_this));
    xhr.onerror = function (e) {
      var event = new _Event["default"]("error");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_assertThisInitialized(_this));
    xhr.onload = function (e) {
      if (this.response instanceof ArrayBuffer) {
        if (_XMLHttpRequestCacheManager["default"].getInstance().needCache(this._url)) {
          _XMLHttpRequestCacheManager["default"].getInstance().writeCache(this._url, this.response);
        }
      }
      var event = new _Event["default"]("load");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_assertThisInitialized(_this));
    xhr.onloadstart = function (e) {
      var event = new _Event["default"]("loadstart");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_assertThisInitialized(_this));
    xhr.onprogress = function (e) {
      var event = new _Event["default"]("progress");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_assertThisInitialized(_this));
    xhr.ontimeout = function (e) {
      var event = new _Event["default"]("timeout");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_assertThisInitialized(_this));
    xhr.onloadend = function (e) {
      var event = new _Event["default"]("loadend");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_assertThisInitialized(_this));
    return _this;
  }
  return _createClass(XMLHttpRequestEventTarget);
}(_EventTarget2["default"]);

},{"./Event":10,"./EventTarget":11,"./XMLHttpRequestCacheManager":38}],40:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var AnalyserNode = function (_AudioNode) {
  _inherits(AnalyserNode, _AudioNode);
  function AnalyserNode(context, options) {
    var _this;
    _classCallCheck(this, AnalyserNode);
    _this = _callSuper(this, AnalyserNode, [context]);
    _this._fftSize;
    _this.frequencyBinCount;
    _this.minDecibels;
    _this.maxDecibels;
    _this.smoothingTimeConstant;
    return _this;
  }
  _createClass(AnalyserNode, [{
    key: "getFloatFrequencyData",
    value: function getFloatFrequencyData(array) {}
  }, {
    key: "getByteFrequencyData",
    value: function getByteFrequencyData(dataArray) {
      return new Uint8Array(dataArray.length);
    }
  }, {
    key: "getFloatTimeDomainData",
    value: function getFloatTimeDomainData(dataArray) {}
  }, {
    key: "getByteTimeDomainData",
    value: function getByteTimeDomainData(dataArray) {}
  }, {
    key: "fftSize",
    get: function get() {
      return this._fftSize;
    },
    set: function set(value) {
      this._fftSize = value;
      this.frequencyBinCount = value / 2;
    }
  }]);
  return AnalyserNode;
}(_AudioNode2["default"]);
var _default = exports["default"] = AnalyserNode;

},{"./AudioNode":46}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _FileCache = _interopRequireDefault(require("../util/FileCache"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AudioBuffer = function () {
  function AudioBuffer(context, buffer, callback) {
    _classCallCheck(this, AudioBuffer);
    this.context = context;
    this.url = "";
    this._sampleRate = 48000;
    this._length = 386681;
    this._duration = 0;
    this._numberOfChannels = 48000;
    _FileCache["default"].getPath(buffer, function (url) {
      if (!url) {
        return;
      }
      this.url = url;
      var innerAudioContext = ral.createInnerAudioContext();
      innerAudioContext.src = url;
      innerAudioContext.onCanplay(function () {
        this.audioBuffer._duration = this.innerAudioContext.duration;
        this.innerAudioContext.destroy();
        callback(this.audioBuffer);
      }.bind({
        audioBuffer: this,
        innerAudioContext: innerAudioContext
      }));
    }.bind(this));
  }
  _createClass(AudioBuffer, [{
    key: "sampleRate",
    get: function get() {
      return this._sampleRate;
    }
  }, {
    key: "length",
    get: function get() {
      return this._length;
    }
  }, {
    key: "duration",
    get: function get() {
      return this._duration;
    }
  }, {
    key: "numberOfChannels",
    get: function get() {
      return this._numberOfChannels;
    }
  }]);
  return AudioBuffer;
}();
var _default = exports["default"] = AudioBuffer;

},{"../util/FileCache":56}],42:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
var _WeakMap = _interopRequireDefault(require("../util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var _destroy = function _destroy() {
  var innerAudioContext = _WeakMap["default"].get(this.sourceNode).innerAudioContext;
  if (innerAudioContext !== null) {
    innerAudioContext.destroy();
    var audioBufferSourceNodeArray = _WeakMap["default"].get(this.audioContext).audioBufferSourceNodeArray;
    var length = audioBufferSourceNodeArray.length;
    for (var i = 0; i < length; ++i) {
      if (_WeakMap["default"].get(audioBufferSourceNodeArray[i]).innerAudioContext == innerAudioContext) {
        audioBufferSourceNodeArray.splice(i, 1);
        break;
      }
    }
    _WeakMap["default"].get(this.sourceNode).innerAudioContext = null;
  }
};
var AudioBufferSourceNode = function (_AudioNode) {
  _inherits(AudioBufferSourceNode, _AudioNode);
  function AudioBufferSourceNode(context, options) {
    var _this;
    _classCallCheck(this, AudioBufferSourceNode);
    _this = _callSuper(this, AudioBufferSourceNode, [context]);
    _this.buffer = null;
    _this.detune = new _AudioParam["default"]({
      value: 0
    });
    _this._loop = false;
    _this.loopStart = 0;
    _this.loopEnd = 0;
    _this._playbackRate = new _AudioParam["default"]({
      value: 1.0
    });
    var innerAudioContext = ral.createInnerAudioContext();
    _WeakMap["default"].get(_assertThisInitialized(_this)).innerAudioContext = innerAudioContext;
    innerAudioContext.onEnded(_destroy.bind({
      sourceNode: _assertThisInitialized(_this),
      audioContext: context
    }));
    innerAudioContext.onStop(_destroy.bind({
      sourceNode: _assertThisInitialized(_this),
      audioContext: context
    }));
    return _this;
  }
  _createClass(AudioBufferSourceNode, [{
    key: "start",
    value: function start(when, offset, duration) {
      if (this.buffer) {
        var innerAudioContext = _WeakMap["default"].get(this).innerAudioContext;
        if (innerAudioContext === null) {
          return;
        }
        innerAudioContext.src = this.buffer.url;
        if (!offset || typeof offset !== 'number' || offset <= 0) {
          innerAudioContext.startTime = 0;
        } else {
          innerAudioContext.startTime = offset;
        }
        if (!when || typeof when !== 'number' || when <= 0) {
          innerAudioContext.play();
        } else {
          setTimeout(function () {
            var audioContext = _WeakMap["default"].get(this).innerAudioContext;
            if (audioContext !== null) {
              audioContext.play();
            }
          }.bind(this), when * 1000);
        }
      }
    }
  }, {
    key: "stop",
    value: function stop(when) {
      var innerAudioContext = _WeakMap["default"].get(this).innerAudioContext;
      if (innerAudioContext === null) {
        return;
      }
      if (!when || typeof when !== 'number' || when <= 0) {
        innerAudioContext.stop();
      } else {
        setTimeout(function () {
          var audioContext = _WeakMap["default"].get(this).innerAudioContext;
          if (audioContext !== null) {
            audioContext.stop();
          }
        }.bind(this), when * 1000);
      }
    }
  }, {
    key: "onended",
    value: function onended() {}
  }, {
    key: "playbackRate",
    get: function get() {
      return this._playbackRate;
    },
    set: function set(value) {
      console.warn("playbackRate nonsupport");
      this._playbackRate = value;
    }
  }, {
    key: "loop",
    get: function get() {
      return this._loop;
    },
    set: function set(value) {
      var innerAudioContext = _WeakMap["default"].get(this).innerAudioContext;
      if (innerAudioContext === null) {
        return;
      }
      this._loop = value;
      innerAudioContext.loop = value;
    }
  }]);
  return AudioBufferSourceNode;
}(_AudioNode2["default"]);
var _default = exports["default"] = AudioBufferSourceNode;

},{"../util/WeakMap":57,"./AudioNode":46,"./AudioParam":47}],43:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _BaseAudioContext2 = _interopRequireDefault(require("./BaseAudioContext"));
var _MediaElementAudioSourceNode = _interopRequireDefault(require("./MediaElementAudioSourceNode"));
var _WeakMap = _interopRequireDefault(require("../util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var AudioContext = function (_BaseAudioContext) {
  _inherits(AudioContext, _BaseAudioContext);
  function AudioContext(options) {
    var _this;
    _classCallCheck(this, AudioContext);
    _this = _callSuper(this, AudioContext);
    _this.baseLatency;
    _this.outputLatency;
    return _this;
  }
  _createClass(AudioContext, [{
    key: "close",
    value: function close() {
      var audioBufferSourceNodeArray = _WeakMap["default"].get(this).audioBufferSourceNodeArray;
      audioBufferSourceNodeArray.forEach(function (element) {
        _WeakMap["default"].get(element).innerAudioContext.destroy();
        _WeakMap["default"].get(element).innerAudioContext = null;
      });
      array.length = 0;
    }
  }, {
    key: "createMediaElementSource",
    value: function createMediaElementSource(myMediaElement) {
      return new _MediaElementAudioSourceNode["default"](this, {
        mediaElement: myMediaElement
      });
    }
  }, {
    key: "createMediaStreamSource",
    value: function createMediaStreamSource() {}
  }, {
    key: "createMediaStreamDestination",
    value: function createMediaStreamDestination() {}
  }, {
    key: "createMediaStreamTrackSource",
    value: function createMediaStreamTrackSource() {}
  }, {
    key: "getOutputTimestamp",
    value: function getOutputTimestamp() {}
  }, {
    key: "resume",
    value: function resume() {}
  }, {
    key: "suspend",
    value: function suspend() {}
  }]);
  return AudioContext;
}(_BaseAudioContext2["default"]);
var _default = exports["default"] = AudioContext;

},{"../util/WeakMap":57,"./BaseAudioContext":49,"./MediaElementAudioSourceNode":52}],44:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var AudioDestinationNode = function (_AudioNode) {
  _inherits(AudioDestinationNode, _AudioNode);
  function AudioDestinationNode(context) {
    var _this;
    _classCallCheck(this, AudioDestinationNode);
    _this = _callSuper(this, AudioDestinationNode, [context]);
    _this.maxChannelCount = 2;
    return _this;
  }
  return _createClass(AudioDestinationNode);
}(_AudioNode2["default"]);
var _default = exports["default"] = AudioDestinationNode;

},{"./AudioNode":46}],45:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var AudioListener = function (_AudioNode) {
  _inherits(AudioListener, _AudioNode);
  function AudioListener(context) {
    var _this;
    _classCallCheck(this, AudioListener);
    _this = _callSuper(this, AudioListener, [context]);
    _this.positionX = new _AudioParam["default"]({
      value: 0
    });
    _this.positionY = new _AudioParam["default"]({
      value: 0
    });
    _this.positionZ = new _AudioParam["default"]({
      value: 0
    });
    _this.forwardX = new _AudioParam["default"]({
      value: 0
    });
    _this.forwardY = new _AudioParam["default"]({
      value: 0
    });
    _this.forwardZ = new _AudioParam["default"]({
      value: -1
    });
    _this.upX = new _AudioParam["default"]({
      value: 0
    });
    _this.upY = new _AudioParam["default"]({
      value: 1
    });
    _this.upZ = new _AudioParam["default"]({
      value: 0
    });
    return _this;
  }
  _createClass(AudioListener, [{
    key: "setOrientation",
    value: function setOrientation(x, y, z) {}
  }, {
    key: "setPosition",
    value: function setPosition(x, y, z) {
      x = x || 0;
      y = y || 0;
      z = z || 0;
      this.positionX.value = x;
      this.positionY.value = y;
      this.positionZ.value = z;
    }
  }]);
  return AudioListener;
}(_AudioNode2["default"]);
var _default = exports["default"] = AudioListener;

},{"./AudioNode":46,"./AudioParam":47}],46:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventTarget2 = _interopRequireDefault(require("../EventTarget"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var AudioNode = function (_EventTarget) {
  _inherits(AudioNode, _EventTarget);
  function AudioNode(context) {
    var _this;
    _classCallCheck(this, AudioNode);
    _this = _callSuper(this, AudioNode);
    _this._context = context;
    _this.numberOfInputs = 1;
    _this.numberOfOutputs = 1;
    _this.channelCount = 2;
    _this.channelCountMode = "explicit";
    _this.channelInterpretation = "speakers";
    return _this;
  }
  _createClass(AudioNode, [{
    key: "connect",
    value: function connect(destination, outputIndex, inputIndex) {}
  }, {
    key: "disconnect",
    value: function disconnect() {}
  }, {
    key: "isNumber",
    value: function isNumber(obj) {
      return typeof obj === 'number' || obj instanceof Number;
    }
  }, {
    key: "context",
    get: function get() {
      return this._context;
    }
  }]);
  return AudioNode;
}(_EventTarget2["default"]);
var _default = exports["default"] = AudioNode;

},{"../EventTarget":11}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AudioParam = function () {
  function AudioParam() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, AudioParam);
    this.automationRate = options.automationRate || "a-rate";
    this._defaultValue = options.defaultValue || 1;
    this._maxValue = options.maxValue || Number.MAX_VALUE;
    this._minValue = options.minValue || -Number.MAX_VALUE;
    this.value = options.value || 1;
  }
  _createClass(AudioParam, [{
    key: "defaultValue",
    get: function get() {
      return this._defaultValue;
    }
  }, {
    key: "maxValue",
    get: function get() {
      return this._maxValue;
    }
  }, {
    key: "minValue",
    get: function get() {
      return this._minValue;
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      value = Math.min(this._maxValue, value);
      this._value = Math.max(this._minValue, value);
    }
  }, {
    key: "setValueAtTime",
    value: function setValueAtTime(value, startTime) {
      this.value = value;
    }
  }, {
    key: "linearRampToValueAtTime",
    value: function linearRampToValueAtTime(value, endTime) {
      if (endTime < 0) {
        return;
      }
      var k = value / endTime;
      var self = this;
      var func = function func(dt) {
        dt = dt / 1000;
        if (dt > endTime) {
          dt = endTime;
        }
        if (dt < 0) {
          dt = 0;
        }
        endTime -= dt;
        self.value += dt * k;
        if (endTime > 0) {
          requestAnimationFrame(func);
        }
      };
      requestAnimationFrame(func);
    }
  }, {
    key: "exponentialRampToValueAtTime",
    value: function exponentialRampToValueAtTime() {}
  }, {
    key: "setTargetAtTime",
    value: function setTargetAtTime(target, startTime, timeConstant) {
      this.value = target;
    }
  }, {
    key: "setValueCurveAtTime",
    value: function setValueCurveAtTime() {}
  }, {
    key: "cancelScheduledValues",
    value: function cancelScheduledValues() {}
  }, {
    key: "cancelAndHoldAtTime",
    value: function cancelAndHoldAtTime() {}
  }]);
  return AudioParam;
}();
var _default = exports["default"] = AudioParam;

},{}],48:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var AudioScheduledSourceNode = function (_AudioNode) {
  _inherits(AudioScheduledSourceNode, _AudioNode);
  function AudioScheduledSourceNode(context) {
    _classCallCheck(this, AudioScheduledSourceNode);
    return _callSuper(this, AudioScheduledSourceNode, [context]);
  }
  _createClass(AudioScheduledSourceNode, [{
    key: "onended",
    value: function onended(event) {}
  }, {
    key: "start",
    value: function start(when, offset, duration) {}
  }, {
    key: "stop",
    value: function stop(when) {}
  }]);
  return AudioScheduledSourceNode;
}(_AudioNode2["default"]);
var _default = exports["default"] = AudioScheduledSourceNode;

},{"./AudioNode":46}],49:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventTarget2 = _interopRequireDefault(require("../EventTarget"));
var _AudioListener = _interopRequireDefault(require("./AudioListener"));
var _PeriodicWave = _interopRequireDefault(require("./PeriodicWave"));
var _AudioBuffer = _interopRequireDefault(require("./AudioBuffer"));
var _WeakMap = _interopRequireDefault(require("../util/WeakMap"));
var _DynamicsCompressorNode = _interopRequireDefault(require("./DynamicsCompressorNode"));
var _AudioBufferSourceNode = _interopRequireDefault(require("./AudioBufferSourceNode"));
var _AudioDestinationNode = _interopRequireDefault(require("./AudioDestinationNode"));
var _OscillatorNode = _interopRequireDefault(require("./OscillatorNode"));
var _AnalyserNode = _interopRequireDefault(require("./AnalyserNode"));
var _PannerNode = _interopRequireDefault(require("./PannerNode"));
var _GainNode = _interopRequireDefault(require("./GainNode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var BaseAudioContext = function (_EventTarget) {
  _inherits(BaseAudioContext, _EventTarget);
  function BaseAudioContext() {
    var _this;
    _classCallCheck(this, BaseAudioContext);
    _this = _callSuper(this, BaseAudioContext);
    _this.audioWorklet;
    _this.currentTime = 0;
    _this.destination = new _AudioDestinationNode["default"](_assertThisInitialized(_this));
    _this.listener = new _AudioListener["default"](_assertThisInitialized(_this));
    _this.sampleRate;
    _this.state = "running";
    _WeakMap["default"].get(_assertThisInitialized(_this)).audioBufferSourceNodeArray = [];
    return _this;
  }
  _createClass(BaseAudioContext, [{
    key: "createAnalyser",
    value: function createAnalyser() {
      return new _AnalyserNode["default"](this);
    }
  }, {
    key: "createBiquadFilter",
    value: function createBiquadFilter() {}
  }, {
    key: "createBuffer",
    value: function createBuffer() {}
  }, {
    key: "createBufferSource",
    value: function createBufferSource() {
      var sourceNode = new _AudioBufferSourceNode["default"](this);
      _WeakMap["default"].get(this).audioBufferSourceNodeArray.push(sourceNode);
      return sourceNode;
    }
  }, {
    key: "createConstantSource",
    value: function createConstantSource() {}
  }, {
    key: "createChannelMerger",
    value: function createChannelMerger() {}
  }, {
    key: "createChannelSplitter",
    value: function createChannelSplitter() {}
  }, {
    key: "createConvolver",
    value: function createConvolver() {}
  }, {
    key: "createDelay",
    value: function createDelay() {}
  }, {
    key: "createDynamicsCompressor",
    value: function createDynamicsCompressor() {
      return new _DynamicsCompressorNode["default"](this);
    }
  }, {
    key: "createGain",
    value: function createGain() {
      return new _GainNode["default"](this);
    }
  }, {
    key: "createIIRFilter",
    value: function createIIRFilter() {}
  }, {
    key: "createOscillator",
    value: function createOscillator() {
      return new _OscillatorNode["default"](this);
    }
  }, {
    key: "createPanner",
    value: function createPanner() {
      return new _PannerNode["default"](this);
    }
  }, {
    key: "createPeriodicWave",
    value: function createPeriodicWave() {
      return new _PeriodicWave["default"](this);
    }
  }, {
    key: "createScriptProcessor",
    value: function createScriptProcessor() {}
  }, {
    key: "createStereoPanner",
    value: function createStereoPanner() {}
  }, {
    key: "createWaveShaper",
    value: function createWaveShaper() {}
  }, {
    key: "decodeAudioData",
    value: function decodeAudioData(audioData, callFunc) {
      new _AudioBuffer["default"](this, audioData, callFunc);
    }
  }, {
    key: "onstatechange",
    value: function onstatechange() {}
  }]);
  return BaseAudioContext;
}(_EventTarget2["default"]);
var _default = exports["default"] = BaseAudioContext;

},{"../EventTarget":11,"../util/WeakMap":57,"./AnalyserNode":40,"./AudioBuffer":41,"./AudioBufferSourceNode":42,"./AudioDestinationNode":44,"./AudioListener":45,"./DynamicsCompressorNode":50,"./GainNode":51,"./OscillatorNode":53,"./PannerNode":54,"./PeriodicWave":55}],50:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var DynamicsCompressorNode = function (_AudioNode) {
  _inherits(DynamicsCompressorNode, _AudioNode);
  function DynamicsCompressorNode(context) {
    var _this;
    _classCallCheck(this, DynamicsCompressorNode);
    _this = _callSuper(this, DynamicsCompressorNode, [context]);
    _this._threshold = new _AudioParam["default"]({
      value: -24,
      defaultValue: -24,
      maxValue: 0,
      minValue: -100
    });
    _this._knee = new _AudioParam["default"]({
      value: 30,
      defaultValue: 30,
      maxValue: 40,
      minValue: 0
    });
    _this._ratio = new _AudioParam["default"]({
      value: 12,
      defaultValue: 12,
      maxValue: 20,
      minValue: 1
    });
    _this._reduction = new _AudioParam["default"]({
      value: 0,
      defaultValue: 0,
      maxValue: 0,
      minValue: -20
    });
    _this._attack = new _AudioParam["default"]({
      value: 0.003,
      defaultValue: 0.003,
      maxValue: 1,
      minValue: 0
    });
    _this._release = new _AudioParam["default"]({
      value: 0.25,
      defaultValue: 0.25,
      maxValue: 1,
      minValue: 0
    });
    return _this;
  }
  _createClass(DynamicsCompressorNode, [{
    key: "threshold",
    get: function get() {
      return this._threshold;
    }
  }, {
    key: "keen",
    get: function get() {
      return this._keen;
    }
  }, {
    key: "ratio",
    get: function get() {
      return this._ratio;
    }
  }, {
    key: "reduction",
    get: function get() {
      return this._reduction;
    }
  }, {
    key: "attack",
    get: function get() {
      return this._attack;
    }
  }, {
    key: "release",
    get: function get() {
      return this._release;
    }
  }]);
  return DynamicsCompressorNode;
}(_AudioNode2["default"]);
var _default = exports["default"] = DynamicsCompressorNode;

},{"./AudioNode":46,"./AudioParam":47}],51:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var GainNode = function (_AudioNode) {
  _inherits(GainNode, _AudioNode);
  function GainNode(context, options) {
    var _this;
    _classCallCheck(this, GainNode);
    _this = _callSuper(this, GainNode, [context]);
    _this._gain = options && options.gain || new _AudioParam["default"]();
    return _this;
  }
  _createClass(GainNode, [{
    key: "gain",
    get: function get() {
      return this._gain;
    }
  }]);
  return GainNode;
}(_AudioNode2["default"]);
var _default = exports["default"] = GainNode;

},{"./AudioNode":46,"./AudioParam":47}],52:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var MediaElementAudioSourceNode = function (_AudioNode) {
  _inherits(MediaElementAudioSourceNode, _AudioNode);
  function MediaElementAudioSourceNode(context, options) {
    var _this;
    _classCallCheck(this, MediaElementAudioSourceNode);
    _this = _callSuper(this, MediaElementAudioSourceNode, [context]);
    _this._options = options;
    return _this;
  }
  _createClass(MediaElementAudioSourceNode, [{
    key: "mediaElement",
    get: function get() {
      return this._options ? this._options.mediaElement : null;
    }
  }]);
  return MediaElementAudioSourceNode;
}(_AudioNode2["default"]);
var _default = exports["default"] = MediaElementAudioSourceNode;

},{"./AudioNode":46}],53:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioScheduledSourceNode = _interopRequireDefault(require("./AudioScheduledSourceNode"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var types = {
  "sine": 0,
  "square": 0,
  "sawtooth": 0,
  "triangle": 0,
  "custom": 0
};
var OscillatorNode = function (_AudioScheduledSource) {
  _inherits(OscillatorNode, _AudioScheduledSource);
  function OscillatorNode(context, options) {
    var _this;
    _classCallCheck(this, OscillatorNode);
    _this = _callSuper(this, OscillatorNode);
    options = options || {};
    _this.frequency = new _AudioParam["default"]({
      value: _this.isNumber(options.frequency) ? options.frequency : 440
    });
    _this.detune = new _AudioParam["default"]({
      value: _this.isNumber(options.detune) ? options.detune : 0
    });
    _this.type = options.type in types ? options.type : "sine";
    return _this;
  }
  _createClass(OscillatorNode, [{
    key: "setPeriodicWave",
    value: function setPeriodicWave(wave) {}
  }, {
    key: "start",
    value: function start(when) {}
  }, {
    key: "stop",
    value: function stop(wen) {}
  }]);
  return OscillatorNode;
}(_AudioScheduledSourceNode["default"]);
var _default = exports["default"] = OscillatorNode;

},{"./AudioParam":47,"./AudioScheduledSourceNode":48}],54:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var PannerNode = function (_AudioNode) {
  _inherits(PannerNode, _AudioNode);
  function PannerNode(context, options) {
    var _this;
    _classCallCheck(this, PannerNode);
    _this = _callSuper(this, PannerNode, [context]);
    _this.coneInnerAngle = 360;
    _this.coneOuterAngle = 360;
    _this.coneOuterGain = 0;
    _this.distanceModel = "inverse";
    _this.maxDistance = 10000;
    _this.orientationX = new _AudioParam["default"]({
      value: 1
    });
    _this.orientationY = new _AudioParam["default"]({
      value: 0
    });
    _this.orientationZ = new _AudioParam["default"]({
      value: 0
    });
    _this.panningModel = "equalpower";
    _this.positionX = new _AudioParam["default"]({
      value: 0
    });
    _this.positionY = new _AudioParam["default"]({
      value: 0
    });
    _this.positionZ = new _AudioParam["default"]({
      value: 0
    });
    _this.refDistance = 1;
    _this.rolloffFactor = 1;
    return _this;
  }
  _createClass(PannerNode, [{
    key: "setPosition",
    value: function setPosition(x, y, z) {
      this.positionX = x;
      this.positionY = y;
      this.positionZ = z;
    }
  }, {
    key: "setOrientation",
    value: function setOrientation(x, y, z) {
      this.orientationX = x;
      this.orientationY = y;
      this.orientationZ = z;
    }
  }, {
    key: "setVelocity",
    value: function setVelocity() {}
  }]);
  return PannerNode;
}(_AudioNode2["default"]);
var _default = exports["default"] = PannerNode;

},{"./AudioNode":46,"./AudioParam":47}],55:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var PeriodicWave = _createClass(function PeriodicWave(context, options) {
  _classCallCheck(this, PeriodicWave);
});
var _default = exports["default"] = PeriodicWave;

},{}],56:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var md5 = require("../../lib/md5.min");
var fileMgr = ral.getFileSystemManager();
var cacheDir = ral.env.USER_DATA_PATH + "/fileCache/";
var FileCache = function () {
  function FileCache() {
    _classCallCheck(this, FileCache);
    this._caches = {};
  }
  _createClass(FileCache, [{
    key: "getCache",
    value: function getCache(data) {
      var key = FileCache._genDataKey(data);
      if (key in this._caches) {
        return this._caches[key];
      } else {
        return "";
      }
    }
  }, {
    key: "setCache",
    value: function setCache(path, data) {
      var key = FileCache._genDataKey(data);
      this._caches[key] = path;
    }
  }, {
    key: "setItem",
    value: function setItem(data, path, key, callBack) {
      key = key || FileCache._genDataKey(data);
      var caches = this._caches;
      if (key in caches) {
        callBack && callBack(caches[key]);
        return;
      }
      if (!path) {
        path = cacheDir + key;
        fileMgr.writeFile({
          filePath: path,
          data: data,
          encoding: "binary",
          success: function success() {
            caches[key] = path;
            callBack && callBack(path);
          },
          fail: function fail() {
            callBack && callBack();
            throw path + "writeFile fail!";
          }
        });
      }
    }
  }, {
    key: "getPath",
    value: function getPath(data, callBack) {
      var key = FileCache._genDataKey(data);
      var caches = this._caches;
      if (key in caches) {
        callBack(caches[key]);
      } else {
        this.setItem(data, undefined, key, callBack);
      }
    }
  }], [{
    key: "_genDataKey",
    value: function _genDataKey(data) {
      var view = new DataView(data);
      var length = view.byteLength / 4;
      var count = 10;
      var space = length / count;
      var key = "length:" + length;
      key += "first:" + view.getInt32(0);
      key += "last:" + view.getInt32(length - 1);
      while (count--) {
        key += count + ":" + view.getInt32(Math.floor(space * count));
      }
      return md5(key);
    }
  }]);
  return FileCache;
}();
try {
  fileMgr.accessSync(cacheDir);
  fileMgr.rmdirSync(cacheDir, true);
} catch (e) {}
fileMgr.mkdirSync(cacheDir, true);
var _default = exports["default"] = new FileCache();

},{"../../lib/md5.min":2}],57:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = new WeakMap();

},{}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var fsm = ral.getFileSystemManager ? ral.getFileSystemManager() : null;
var fsUtils = function () {
  function fsUtils() {
    _classCallCheck(this, fsUtils);
    _defineProperty(this, "outOfStorageRegExp", /the maximum size of the file storage/);
  }
  _createClass(fsUtils, [{
    key: "isOutOfStorage",
    value: function isOutOfStorage(errMsg) {
      return this.outOfStorageRegExp.test(errMsg);
    }
  }, {
    key: "writeFile",
    value: function writeFile(path, data, encoding, onComplete) {
      fsm.writeFile({
        filePath: path,
        encoding: encoding,
        data: data,
        success: function success() {
          onComplete && onComplete(null);
        },
        fail: function fail(res) {
          console.warn("writeFile failed: path: ".concat(path, " message: ").concat(res.errMsg));
          onComplete && onComplete(new Error(res.errMsg));
        }
      });
    }
  }, {
    key: "writeFileSync",
    value: function writeFileSync(path, data, encoding) {
      try {
        fsm.writeFileSync(path, data, encoding);
        return null;
      } catch (e) {
        console.warn("writeFileSync failed: path: ".concat(path, " message: ").concat(e));
        return new Error(e);
      }
    }
  }, {
    key: "readJsonSync",
    value: function readJsonSync(path) {
      try {
        var str = fsm.readFileSync(path, 'utf8');
        return JSON.parse(str);
      } catch (e) {
        console.warn("readJsonSync failed: path: ".concat(path, " message: ").concat(e));
        return new Error(e);
      }
    }
  }, {
    key: "makeDirSync",
    value: function makeDirSync(path, recursive) {
      try {
        fsm.mkdirSync(path, recursive);
        return null;
      } catch (e) {
        console.warn("mkdirSync failed: path: ".concat(path, " message: ").concat(e));
        return new Error(e);
      }
    }
  }, {
    key: "rmdirSync",
    value: function rmdirSync(dirPath, recursive) {
      try {
        fsm.rmdirSync(dirPath, recursive);
      } catch (e) {
        console.warn("rmdirSync failed: path: ".concat(dirPath, " message: ").concat(e));
        return new Error(e);
      }
    }
  }, {
    key: "readDirSync",
    value: function readDirSync(dirPath) {
      try {
        return fsm.readdirSync(dirPath);
      } catch (e) {
        console.warn("readdirSync failed: path: ".concat(dirPath, " message: ").concat(e));
        return new Error(e);
      }
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(filePath, onComplete) {
      fsm.unlink({
        filePath: filePath,
        success: function success() {
          onComplete && onComplete(null);
        },
        fail: function fail(res) {
          console.warn("deleteFile failed: path: ".concat(filePath, " message: ").concat(res.errMsg));
          onComplete && onComplete(new Error(res.errMsg));
        }
      });
    }
  }]);
  return fsUtils;
}();
var _default = exports["default"] = new fsUtils();

},{}],59:[function(require,module,exports){
"use strict";

var _Audio = _interopRequireDefault(require("./Audio"));
var _AudioContext = _interopRequireDefault(require("./audioContext/AudioContext"));
var _DeviceMotionEvent = _interopRequireDefault(require("./DeviceMotionEvent"));
var _Document = _interopRequireDefault(require("./Document"));
var _Event = _interopRequireDefault(require("./Event"));
var _FontFace = _interopRequireDefault(require("./FontFace"));
var _FontFaceSet = _interopRequireDefault(require("./FontFaceSet"));
var _EventTarget = _interopRequireDefault(require("./EventTarget"));
var _HTMLElement = _interopRequireDefault(require("./HTMLElement"));
var _HTMLAudioElement = _interopRequireDefault(require("./HTMLAudioElement"));
var _HTMLCanvasElement = _interopRequireDefault(require("./HTMLCanvasElement"));
var _HTMLImageElement = _interopRequireDefault(require("./HTMLImageElement"));
var _HTMLVideoElement = _interopRequireDefault(require("./HTMLVideoElement"));
var _Image = _interopRequireDefault(require("./Image"));
var _Location = _interopRequireDefault(require("./Location"));
var _Navigator = _interopRequireDefault(require("./Navigator"));
var _Screen = _interopRequireDefault(require("./Screen"));
var _TouchEvent = _interopRequireDefault(require("./TouchEvent"));
var _XMLHttpRequest = _interopRequireDefault(require("./XMLHttpRequest"));
var _HTMLScriptElement = _interopRequireDefault(require("./HTMLScriptElement"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
window.ral = window.ral || {};
var _systemInfo = window.ral.getSystemInfoSync();
window.clientTop = 0;
window.clientLeft = 0;
window.devicePixelRatio = _systemInfo.pixelRatio;
window.document = new _Document["default"]();
window.frameElement = null;
window.fullScreen = true;
window.innerHeight = _systemInfo.windowHeight;
window.innerWidth = _systemInfo.windowWidth;
window.length = 0;
window.location = new _Location["default"]();
window.name = "runtime";
window.navigator = new _Navigator["default"](_systemInfo.platform, _systemInfo.language);
window.outerHeight = _systemInfo.windowHeight;
window.outerWidth = _systemInfo.windowWidth;
window.pageXOffset = 0;
window.pageYOffset = 0;
window.parent = window;
window.screen = new _Screen["default"]();
window.screenLeft = 0;
window.screenTop = 0;
window.screenX = 0;
window.screenY = 0;
window.scrollX = 0;
window.scrollY = 0;
window.self = window;
window.top = window;
window.window = window;
window.alert = window.console.error;
var _require = require('../lib/base64.min.js'),
  btoa = _require.btoa,
  atob = _require.atob;
window.atob = atob;
window.btoa = btoa;
window.close = function () {
  console.warn("window.close() is deprecated!");
};
window.print = window.console.log;
window.addEventListener = _EventTarget["default"].prototype.addEventListener.bind(window);
window.removeEventListener = _EventTarget["default"].prototype.removeEventListener.bind(window);
var _dispatchEvent = _EventTarget["default"].prototype.dispatchEvent;
window.dispatchEvent = function (event) {
  if (window.document.dispatchEvent(event)) {
    return _dispatchEvent.apply(this || window, arguments);
  }
  return false;
};
window.getComputedStyle = function () {
  return {
    position: 'absolute',
    left: '0px',
    top: '0px',
    height: '0px',
    paddingLeft: 0,
    getPropertyValue: function getPropertyValue(key) {
      return this[key];
    }
  };
};
ral.onWindowResize && ral.onWindowResize(function (width, height) {
  window.innerWidth = width;
  window.innerHeight = height;
  window.outerWidth = window.innerWidth;
  window.outerHeight = window.innerHeight;
  window.screen.availWidth = window.innerWidth;
  window.screen.availHeight = window.innerHeight;
  window.screen.width = window.innerWidth;
  window.screen.height = window.innerHeight;
  var event = new _Event["default"]("resize");
  window.dispatchEvent(event);
});
ral.onDeviceOrientationChange && ral.onDeviceOrientationChange(function (res) {
  if (res.value === "portrait") {
    window.orientation = 0;
  } else if (res.value === "landscape") {
    window.orientation = 90;
  } else if (res.value === "landscapeReverse") {
    window.orientation = -90;
  } else if (res.value === "portraitReverse") {
    window.orientation = 180;
  }
});
window.stop = function () {
  console.warn("window.stop() not implemented");
};
window.Audio = _Audio["default"];
window.AudioContext = _AudioContext["default"];
window.DeviceMotionEvent = _DeviceMotionEvent["default"];
window.Event = _Event["default"];
window.FontFace = _FontFace["default"];
window.FontFaceSet = _FontFaceSet["default"];
window.HTMLElement = _HTMLElement["default"];
window.HTMLAudioElement = _HTMLAudioElement["default"];
window.HTMLCanvasElement = _HTMLCanvasElement["default"];
window.HTMLImageElement = _HTMLImageElement["default"];
window.HTMLVideoElement = _HTMLVideoElement["default"];
window.Image = _Image["default"];
window.TouchEvent = _TouchEvent["default"];
window.XMLHttpRequest = _XMLHttpRequest["default"];
window.HTMLScriptElement = _HTMLScriptElement["default"];
if (!window.Blob || !window.URL) {
  var _require2 = require('./Blob.js'),
    Blob = _require2.Blob,
    URL = _require2.URL;
  window.Blob = Blob;
  window.URL = URL;
}
if (!window.DOMParser) {
  window.DOMParser = require('./xmldom/dom-parser.js').DOMParser;
}

},{"../lib/base64.min.js":1,"./Audio":4,"./Blob.js":5,"./DeviceMotionEvent":7,"./Document":8,"./Event":10,"./EventTarget":11,"./FontFace":12,"./FontFaceSet":13,"./HTMLAudioElement":15,"./HTMLCanvasElement":17,"./HTMLElement":18,"./HTMLImageElement":21,"./HTMLScriptElement":24,"./HTMLVideoElement":26,"./Image":27,"./Location":29,"./Navigator":31,"./Screen":34,"./TouchEvent":36,"./XMLHttpRequest":37,"./audioContext/AudioContext":43,"./xmldom/dom-parser.js":60}],60:[function(require,module,exports){
"use strict";

function DOMParser(options) {
  this.options = options || {
    locator: {}
  };
}
DOMParser.prototype.parseFromString = function (source, mimeType) {
  var options = this.options;
  var sax = new XMLReader();
  var domBuilder = options.domBuilder || new DOMHandler();
  var errorHandler = options.errorHandler;
  var locator = options.locator;
  var defaultNSMap = options.xmlns || {};
  var isHTML = /\/x?html?$/.test(mimeType);
  var entityMap = isHTML ? htmlEntity.entityMap : {
    'lt': '<',
    'gt': '>',
    'amp': '&',
    'quot': '"',
    'apos': "'"
  };
  if (locator) {
    domBuilder.setDocumentLocator(locator);
  }
  sax.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
  sax.domBuilder = options.domBuilder || domBuilder;
  if (isHTML) {
    defaultNSMap[''] = 'http://www.w3.org/1999/xhtml';
  }
  defaultNSMap.xml = defaultNSMap.xml || 'http://www.w3.org/XML/1998/namespace';
  if (source) {
    sax.parse(source, defaultNSMap, entityMap);
  } else {
    sax.errorHandler.error("invalid doc source");
  }
  return domBuilder.doc;
};
function buildErrorHandler(errorImpl, domBuilder, locator) {
  if (!errorImpl) {
    if (domBuilder instanceof DOMHandler) {
      return domBuilder;
    }
    errorImpl = domBuilder;
  }
  var errorHandler = {};
  var isCallback = errorImpl instanceof Function;
  locator = locator || {};
  function build(key) {
    var fn = errorImpl[key];
    if (!fn && isCallback) {
      fn = errorImpl.length == 2 ? function (msg) {
        errorImpl(key, msg);
      } : errorImpl;
    }
    errorHandler[key] = fn && function (msg) {
      fn('[xmldom ' + key + ']\t' + msg + _locator(locator));
    } || function () {};
  }
  build('warning');
  build('error');
  build('fatalError');
  return errorHandler;
}
function DOMHandler() {
  this.cdata = false;
}
function position(locator, node) {
  node.lineNumber = locator.lineNumber;
  node.columnNumber = locator.columnNumber;
}
DOMHandler.prototype = {
  startDocument: function startDocument() {
    this.doc = new DOMImplementation().createDocument(null, null, null);
    if (this.locator) {
      this.doc.documentURI = this.locator.systemId;
    }
  },
  startElement: function startElement(namespaceURI, localName, qName, attrs) {
    var doc = this.doc;
    var el = doc.createElementNS(namespaceURI, qName || localName);
    var len = attrs.length;
    appendElement(this, el);
    this.currentElement = el;
    this.locator && position(this.locator, el);
    for (var i = 0; i < len; i++) {
      var namespaceURI = attrs.getURI(i);
      var value = attrs.getValue(i);
      var qName = attrs.getQName(i);
      var attr = doc.createAttributeNS(namespaceURI, qName);
      this.locator && position(attrs.getLocator(i), attr);
      attr.value = attr.nodeValue = value;
      el.setAttributeNode(attr);
    }
  },
  endElement: function endElement(namespaceURI, localName, qName) {
    var current = this.currentElement;
    var tagName = current.tagName;
    this.currentElement = current.parentNode;
  },
  startPrefixMapping: function startPrefixMapping(prefix, uri) {},
  endPrefixMapping: function endPrefixMapping(prefix) {},
  processingInstruction: function processingInstruction(target, data) {
    var ins = this.doc.createProcessingInstruction(target, data);
    this.locator && position(this.locator, ins);
    appendElement(this, ins);
  },
  ignorableWhitespace: function ignorableWhitespace(ch, start, length) {},
  characters: function characters(chars, start, length) {
    chars = _toString.apply(this, arguments);
    if (chars) {
      if (this.cdata) {
        var charNode = this.doc.createCDATASection(chars);
      } else {
        var charNode = this.doc.createTextNode(chars);
      }
      if (this.currentElement) {
        this.currentElement.appendChild(charNode);
      } else if (/^\s*$/.test(chars)) {
        this.doc.appendChild(charNode);
      }
      this.locator && position(this.locator, charNode);
    }
  },
  skippedEntity: function skippedEntity(name) {},
  endDocument: function endDocument() {
    this.doc.normalize();
  },
  setDocumentLocator: function setDocumentLocator(locator) {
    if (this.locator = locator) {
      locator.lineNumber = 0;
    }
  },
  comment: function comment(chars, start, length) {
    chars = _toString.apply(this, arguments);
    var comm = this.doc.createComment(chars);
    this.locator && position(this.locator, comm);
    appendElement(this, comm);
  },
  startCDATA: function startCDATA() {
    this.cdata = true;
  },
  endCDATA: function endCDATA() {
    this.cdata = false;
  },
  startDTD: function startDTD(name, publicId, systemId) {
    var impl = this.doc.implementation;
    if (impl && impl.createDocumentType) {
      var dt = impl.createDocumentType(name, publicId, systemId);
      this.locator && position(this.locator, dt);
      appendElement(this, dt);
    }
  },
  warning: function warning(error) {
    console.warn('[xmldom warning]\t' + error, _locator(this.locator));
  },
  error: function error(_error) {
    console.error('[xmldom error]\t' + _error, _locator(this.locator));
  },
  fatalError: function fatalError(error) {
    console.error('[xmldom fatalError]\t' + error, _locator(this.locator));
    throw error;
  }
};
function _locator(l) {
  if (l) {
    return '\n@' + (l.systemId || '') + '#[line:' + l.lineNumber + ',col:' + l.columnNumber + ']';
  }
}
function _toString(chars, start, length) {
  if (typeof chars == 'string') {
    return chars.substr(start, length);
  } else {
    if (chars.length >= start + length || start) {
      return new java.lang.String(chars, start, length) + '';
    }
    return chars;
  }
}
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (key) {
  DOMHandler.prototype[key] = function () {
    return null;
  };
});
function appendElement(hander, node) {
  if (!hander.currentElement) {
    hander.doc.appendChild(node);
  } else {
    hander.currentElement.appendChild(node);
  }
}
var htmlEntity = require('./entities');
var XMLReader = require('./sax').XMLReader;
var DOMImplementation = exports.DOMImplementation = require('./dom').DOMImplementation;
exports.XMLSerializer = require('./dom').XMLSerializer;
exports.DOMParser = DOMParser;

},{"./dom":61,"./entities":62,"./sax":63}],61:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function copy(src, dest) {
  for (var p in src) {
    dest[p] = src[p];
  }
}
function _extends(Class, Super) {
  var pt = Class.prototype;
  if (!(pt instanceof Super)) {
    var t = function t() {};
    ;
    t.prototype = Super.prototype;
    t = new t();
    copy(pt, t);
    Class.prototype = pt = t;
  }
  if (pt.constructor != Class) {
    if (typeof Class != 'function') {
      console.error("unknow Class:" + Class);
    }
    pt.constructor = Class;
  }
}
var htmlns = 'http://www.w3.org/1999/xhtml';
var NodeType = {};
var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
var TEXT_NODE = NodeType.TEXT_NODE = 3;
var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
var ExceptionCode = {};
var ExceptionMessage = {};
var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
function DOMException(code, message) {
  if (message instanceof Error) {
    var error = message;
  } else {
    error = this;
    Error.call(this, ExceptionMessage[code]);
    this.message = ExceptionMessage[code];
    if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
  }
  error.code = code;
  if (message) this.message = this.message + ": " + message;
  return error;
}
;
DOMException.prototype = Error.prototype;
copy(ExceptionCode, DOMException);
function NodeList() {}
;
NodeList.prototype = {
  length: 0,
  item: function item(index) {
    return this[index] || null;
  },
  toString: function toString(isHTML, nodeFilter) {
    for (var buf = [], i = 0; i < this.length; i++) {
      serializeToString(this[i], buf, isHTML, nodeFilter);
    }
    return buf.join('');
  }
};
function LiveNodeList(node, refresh) {
  this._node = node;
  this._refresh = refresh;
  _updateLiveList(this);
}
function _updateLiveList(list) {
  var inc = list._node._inc || list._node.ownerDocument._inc;
  if (list._inc != inc) {
    var ls = list._refresh(list._node);
    __set__(list, 'length', ls.length);
    copy(ls, list);
    list._inc = inc;
  }
}
LiveNodeList.prototype.item = function (i) {
  _updateLiveList(this);
  return this[i];
};
_extends(LiveNodeList, NodeList);
function NamedNodeMap() {}
;
function _findNodeIndex(list, node) {
  var i = list.length;
  while (i--) {
    if (list[i] === node) {
      return i;
    }
  }
}
function _addNamedNode(el, list, newAttr, oldAttr) {
  if (oldAttr) {
    list[_findNodeIndex(list, oldAttr)] = newAttr;
  } else {
    list[list.length++] = newAttr;
  }
  if (el) {
    newAttr.ownerElement = el;
    var doc = el.ownerDocument;
    if (doc) {
      oldAttr && _onRemoveAttribute(doc, el, oldAttr);
      _onAddAttribute(doc, el, newAttr);
    }
  }
}
function _removeNamedNode(el, list, attr) {
  var i = _findNodeIndex(list, attr);
  if (i >= 0) {
    var lastIndex = list.length - 1;
    while (i < lastIndex) {
      list[i] = list[++i];
    }
    list.length = lastIndex;
    if (el) {
      var doc = el.ownerDocument;
      if (doc) {
        _onRemoveAttribute(doc, el, attr);
        attr.ownerElement = null;
      }
    }
  } else {
    throw DOMException(NOT_FOUND_ERR, new Error(el.tagName + '@' + attr));
  }
}
NamedNodeMap.prototype = {
  length: 0,
  item: NodeList.prototype.item,
  getNamedItem: function getNamedItem(key) {
    var i = this.length;
    while (i--) {
      var attr = this[i];
      if (attr.nodeName == key) {
        return attr;
      }
    }
  },
  setNamedItem: function setNamedItem(attr) {
    var el = attr.ownerElement;
    if (el && el != this._ownerElement) {
      throw new DOMException(INUSE_ATTRIBUTE_ERR);
    }
    var oldAttr = this.getNamedItem(attr.nodeName);
    _addNamedNode(this._ownerElement, this, attr, oldAttr);
    return oldAttr;
  },
  setNamedItemNS: function setNamedItemNS(attr) {
    var el = attr.ownerElement,
      oldAttr;
    if (el && el != this._ownerElement) {
      throw new DOMException(INUSE_ATTRIBUTE_ERR);
    }
    oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
    _addNamedNode(this._ownerElement, this, attr, oldAttr);
    return oldAttr;
  },
  removeNamedItem: function removeNamedItem(key) {
    var attr = this.getNamedItem(key);
    _removeNamedNode(this._ownerElement, this, attr);
    return attr;
  },
  removeNamedItemNS: function removeNamedItemNS(namespaceURI, localName) {
    var attr = this.getNamedItemNS(namespaceURI, localName);
    _removeNamedNode(this._ownerElement, this, attr);
    return attr;
  },
  getNamedItemNS: function getNamedItemNS(namespaceURI, localName) {
    var i = this.length;
    while (i--) {
      var node = this[i];
      if (node.localName == localName && node.namespaceURI == namespaceURI) {
        return node;
      }
    }
    return null;
  }
};
function DOMImplementation(features) {
  this._features = {};
  if (features) {
    for (var feature in features) {
      this._features = features[feature];
    }
  }
}
;
DOMImplementation.prototype = {
  hasFeature: function hasFeature(feature, version) {
    var versions = this._features[feature.toLowerCase()];
    if (versions && (!version || version in versions)) {
      return true;
    } else {
      return false;
    }
  },
  createDocument: function createDocument(namespaceURI, qualifiedName, doctype) {
    var doc = new Document();
    doc.implementation = this;
    doc.childNodes = new NodeList();
    doc.doctype = doctype;
    if (doctype) {
      doc.appendChild(doctype);
    }
    if (qualifiedName) {
      var root = doc.createElementNS(namespaceURI, qualifiedName);
      doc.appendChild(root);
    }
    return doc;
  },
  createDocumentType: function createDocumentType(qualifiedName, publicId, systemId) {
    var node = new DocumentType();
    node.name = qualifiedName;
    node.nodeName = qualifiedName;
    node.publicId = publicId;
    node.systemId = systemId;
    return node;
  }
};
function Node() {}
;
Node.prototype = {
  firstChild: null,
  lastChild: null,
  previousSibling: null,
  nextSibling: null,
  attributes: null,
  parentNode: null,
  childNodes: null,
  ownerDocument: null,
  nodeValue: null,
  namespaceURI: null,
  prefix: null,
  localName: null,
  insertBefore: function insertBefore(newChild, refChild) {
    return _insertBefore(this, newChild, refChild);
  },
  replaceChild: function replaceChild(newChild, oldChild) {
    this.insertBefore(newChild, oldChild);
    if (oldChild) {
      this.removeChild(oldChild);
    }
  },
  removeChild: function removeChild(oldChild) {
    return _removeChild(this, oldChild);
  },
  appendChild: function appendChild(newChild) {
    return this.insertBefore(newChild, null);
  },
  hasChildNodes: function hasChildNodes() {
    return this.firstChild != null;
  },
  cloneNode: function cloneNode(deep) {
    return _cloneNode(this.ownerDocument || this, this, deep);
  },
  normalize: function normalize() {
    var child = this.firstChild;
    while (child) {
      var next = child.nextSibling;
      if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
        this.removeChild(next);
        child.appendData(next.data);
      } else {
        child.normalize();
        child = next;
      }
    }
  },
  isSupported: function isSupported(feature, version) {
    return this.ownerDocument.implementation.hasFeature(feature, version);
  },
  hasAttributes: function hasAttributes() {
    return this.attributes.length > 0;
  },
  lookupPrefix: function lookupPrefix(namespaceURI) {
    var el = this;
    while (el) {
      var map = el._nsMap;
      if (map) {
        for (var n in map) {
          if (map[n] == namespaceURI) {
            return n;
          }
        }
      }
      el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
    }
    return null;
  },
  lookupNamespaceURI: function lookupNamespaceURI(prefix) {
    var el = this;
    while (el) {
      var map = el._nsMap;
      if (map) {
        if (prefix in map) {
          return map[prefix];
        }
      }
      el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
    }
    return null;
  },
  isDefaultNamespace: function isDefaultNamespace(namespaceURI) {
    var prefix = this.lookupPrefix(namespaceURI);
    return prefix == null;
  }
};
function _xmlEncoder(c) {
  return c == '<' && '&lt;' || c == '>' && '&gt;' || c == '&' && '&amp;' || c == '"' && '&quot;' || '&#' + c.charCodeAt() + ';';
}
copy(NodeType, Node);
copy(NodeType, Node.prototype);
function _visitNode(node, callback) {
  if (callback(node)) {
    return true;
  }
  if (node = node.firstChild) {
    do {
      if (_visitNode(node, callback)) {
        return true;
      }
    } while (node = node.nextSibling);
  }
}
function Document() {}
function _onAddAttribute(doc, el, newAttr) {
  doc && doc._inc++;
  var ns = newAttr.namespaceURI;
  if (ns == 'http://www.w3.org/2000/xmlns/') {
    el._nsMap[newAttr.prefix ? newAttr.localName : ''] = newAttr.value;
  }
}
function _onRemoveAttribute(doc, el, newAttr, remove) {
  doc && doc._inc++;
  var ns = newAttr.namespaceURI;
  if (ns == 'http://www.w3.org/2000/xmlns/') {
    delete el._nsMap[newAttr.prefix ? newAttr.localName : ''];
  }
}
function _onUpdateChild(doc, el, newChild) {
  if (doc && doc._inc) {
    doc._inc++;
    var cs = el.childNodes;
    if (newChild) {
      cs[cs.length++] = newChild;
    } else {
      var child = el.firstChild;
      var i = 0;
      while (child) {
        cs[i++] = child;
        child = child.nextSibling;
      }
      cs.length = i;
    }
  }
}
function _removeChild(parentNode, child) {
  var previous = child.previousSibling;
  var next = child.nextSibling;
  if (previous) {
    previous.nextSibling = next;
  } else {
    parentNode.firstChild = next;
  }
  if (next) {
    next.previousSibling = previous;
  } else {
    parentNode.lastChild = previous;
  }
  _onUpdateChild(parentNode.ownerDocument, parentNode);
  return child;
}
function _insertBefore(parentNode, newChild, nextChild) {
  var cp = newChild.parentNode;
  if (cp) {
    cp.removeChild(newChild);
  }
  if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
    var newFirst = newChild.firstChild;
    if (newFirst == null) {
      return newChild;
    }
    var newLast = newChild.lastChild;
  } else {
    newFirst = newLast = newChild;
  }
  var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;
  newFirst.previousSibling = pre;
  newLast.nextSibling = nextChild;
  if (pre) {
    pre.nextSibling = newFirst;
  } else {
    parentNode.firstChild = newFirst;
  }
  if (nextChild == null) {
    parentNode.lastChild = newLast;
  } else {
    nextChild.previousSibling = newLast;
  }
  do {
    newFirst.parentNode = parentNode;
  } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
  _onUpdateChild(parentNode.ownerDocument || parentNode, parentNode);
  if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
    newChild.firstChild = newChild.lastChild = null;
  }
  return newChild;
}
function _appendSingleChild(parentNode, newChild) {
  var cp = newChild.parentNode;
  if (cp) {
    var pre = parentNode.lastChild;
    cp.removeChild(newChild);
    var pre = parentNode.lastChild;
  }
  var pre = parentNode.lastChild;
  newChild.parentNode = parentNode;
  newChild.previousSibling = pre;
  newChild.nextSibling = null;
  if (pre) {
    pre.nextSibling = newChild;
  } else {
    parentNode.firstChild = newChild;
  }
  parentNode.lastChild = newChild;
  _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
  return newChild;
}
Document.prototype = {
  nodeName: '#document',
  nodeType: DOCUMENT_NODE,
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function insertBefore(newChild, refChild) {
    if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
      var child = newChild.firstChild;
      while (child) {
        var next = child.nextSibling;
        this.insertBefore(child, refChild);
        child = next;
      }
      return newChild;
    }
    if (this.documentElement == null && newChild.nodeType == ELEMENT_NODE) {
      this.documentElement = newChild;
    }
    return _insertBefore(this, newChild, refChild), newChild.ownerDocument = this, newChild;
  },
  removeChild: function removeChild(oldChild) {
    if (this.documentElement == oldChild) {
      this.documentElement = null;
    }
    return _removeChild(this, oldChild);
  },
  importNode: function importNode(importedNode, deep) {
    return _importNode(this, importedNode, deep);
  },
  getElementById: function getElementById(id) {
    var rtv = null;
    _visitNode(this.documentElement, function (node) {
      if (node.nodeType == ELEMENT_NODE) {
        if (node.getAttribute('id') == id) {
          rtv = node;
          return true;
        }
      }
    });
    return rtv;
  },
  createElement: function createElement(tagName) {
    var node = new Element();
    node.ownerDocument = this;
    node.nodeName = tagName;
    node.tagName = tagName;
    node.childNodes = new NodeList();
    var attrs = node.attributes = new NamedNodeMap();
    attrs._ownerElement = node;
    return node;
  },
  createDocumentFragment: function createDocumentFragment() {
    var node = new DocumentFragment();
    node.ownerDocument = this;
    node.childNodes = new NodeList();
    return node;
  },
  createTextNode: function createTextNode(data) {
    var node = new Text();
    node.ownerDocument = this;
    node.appendData(data);
    return node;
  },
  createComment: function createComment(data) {
    var node = new Comment();
    node.ownerDocument = this;
    node.appendData(data);
    return node;
  },
  createCDATASection: function createCDATASection(data) {
    var node = new CDATASection();
    node.ownerDocument = this;
    node.appendData(data);
    return node;
  },
  createProcessingInstruction: function createProcessingInstruction(target, data) {
    var node = new ProcessingInstruction();
    node.ownerDocument = this;
    node.tagName = node.target = target;
    node.nodeValue = node.data = data;
    return node;
  },
  createAttribute: function createAttribute(name) {
    var node = new Attr();
    node.ownerDocument = this;
    node.name = name;
    node.nodeName = name;
    node.localName = name;
    node.specified = true;
    return node;
  },
  createEntityReference: function createEntityReference(name) {
    var node = new EntityReference();
    node.ownerDocument = this;
    node.nodeName = name;
    return node;
  },
  createElementNS: function createElementNS(namespaceURI, qualifiedName) {
    var node = new Element();
    var pl = qualifiedName.split(':');
    var attrs = node.attributes = new NamedNodeMap();
    node.childNodes = new NodeList();
    node.ownerDocument = this;
    node.nodeName = qualifiedName;
    node.tagName = qualifiedName;
    node.namespaceURI = namespaceURI;
    if (pl.length == 2) {
      node.prefix = pl[0];
      node.localName = pl[1];
    } else {
      node.localName = qualifiedName;
    }
    attrs._ownerElement = node;
    return node;
  },
  createAttributeNS: function createAttributeNS(namespaceURI, qualifiedName) {
    var node = new Attr();
    var pl = qualifiedName.split(':');
    node.ownerDocument = this;
    node.nodeName = qualifiedName;
    node.name = qualifiedName;
    node.namespaceURI = namespaceURI;
    node.specified = true;
    if (pl.length == 2) {
      node.prefix = pl[0];
      node.localName = pl[1];
    } else {
      node.localName = qualifiedName;
    }
    return node;
  }
};
_extends(Document, Node);
function Element() {
  this._nsMap = {};
}
;
Element.prototype = {
  nodeType: ELEMENT_NODE,
  hasAttribute: function hasAttribute(name) {
    return this.getAttributeNode(name) != null;
  },
  getAttribute: function getAttribute(name) {
    var attr = this.getAttributeNode(name);
    return attr && attr.value || '';
  },
  getAttributeNode: function getAttributeNode(name) {
    return this.attributes.getNamedItem(name);
  },
  setAttribute: function setAttribute(name, value) {
    var attr = this.ownerDocument.createAttribute(name);
    attr.value = attr.nodeValue = "" + value;
    this.setAttributeNode(attr);
  },
  removeAttribute: function removeAttribute(name) {
    var attr = this.getAttributeNode(name);
    attr && this.removeAttributeNode(attr);
  },
  appendChild: function appendChild(newChild) {
    if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
      return this.insertBefore(newChild, null);
    } else {
      return _appendSingleChild(this, newChild);
    }
  },
  setAttributeNode: function setAttributeNode(newAttr) {
    return this.attributes.setNamedItem(newAttr);
  },
  setAttributeNodeNS: function setAttributeNodeNS(newAttr) {
    return this.attributes.setNamedItemNS(newAttr);
  },
  removeAttributeNode: function removeAttributeNode(oldAttr) {
    return this.attributes.removeNamedItem(oldAttr.nodeName);
  },
  removeAttributeNS: function removeAttributeNS(namespaceURI, localName) {
    var old = this.getAttributeNodeNS(namespaceURI, localName);
    old && this.removeAttributeNode(old);
  },
  hasAttributeNS: function hasAttributeNS(namespaceURI, localName) {
    return this.getAttributeNodeNS(namespaceURI, localName) != null;
  },
  getAttributeNS: function getAttributeNS(namespaceURI, localName) {
    var attr = this.getAttributeNodeNS(namespaceURI, localName);
    return attr && attr.value || '';
  },
  setAttributeNS: function setAttributeNS(namespaceURI, qualifiedName, value) {
    var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
    attr.value = attr.nodeValue = "" + value;
    this.setAttributeNode(attr);
  },
  getAttributeNodeNS: function getAttributeNodeNS(namespaceURI, localName) {
    return this.attributes.getNamedItemNS(namespaceURI, localName);
  },
  getElementsByTagName: function getElementsByTagName(tagName) {
    return new LiveNodeList(this, function (base) {
      var ls = [];
      _visitNode(base, function (node) {
        if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)) {
          ls.push(node);
        }
      });
      return ls;
    });
  },
  getElementsByTagNameNS: function getElementsByTagNameNS(namespaceURI, localName) {
    return new LiveNodeList(this, function (base) {
      var ls = [];
      _visitNode(base, function (node) {
        if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)) {
          ls.push(node);
        }
      });
      return ls;
    });
  }
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
_extends(Element, Node);
function Attr() {}
;
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr, Node);
function CharacterData() {}
;
CharacterData.prototype = {
  data: '',
  substringData: function substringData(offset, count) {
    return this.data.substring(offset, offset + count);
  },
  appendData: function appendData(text) {
    text = this.data + text;
    this.nodeValue = this.data = text;
    this.length = text.length;
  },
  insertData: function insertData(offset, text) {
    this.replaceData(offset, 0, text);
  },
  appendChild: function appendChild(newChild) {
    throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
  },
  deleteData: function deleteData(offset, count) {
    this.replaceData(offset, count, "");
  },
  replaceData: function replaceData(offset, count, text) {
    var start = this.data.substring(0, offset);
    var end = this.data.substring(offset + count);
    text = start + text + end;
    this.nodeValue = this.data = text;
    this.length = text.length;
  }
};
_extends(CharacterData, Node);
function Text() {}
;
Text.prototype = {
  nodeName: "#text",
  nodeType: TEXT_NODE,
  splitText: function splitText(offset) {
    var text = this.data;
    var newText = text.substring(offset);
    text = text.substring(0, offset);
    this.data = this.nodeValue = text;
    this.length = text.length;
    var newNode = this.ownerDocument.createTextNode(newText);
    if (this.parentNode) {
      this.parentNode.insertBefore(newNode, this.nextSibling);
    }
    return newNode;
  }
};
_extends(Text, CharacterData);
function Comment() {}
;
Comment.prototype = {
  nodeName: "#comment",
  nodeType: COMMENT_NODE
};
_extends(Comment, CharacterData);
function CDATASection() {}
;
CDATASection.prototype = {
  nodeName: "#cdata-section",
  nodeType: CDATA_SECTION_NODE
};
_extends(CDATASection, CharacterData);
function DocumentType() {}
;
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType, Node);
function Notation() {}
;
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation, Node);
function Entity() {}
;
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity, Node);
function EntityReference() {}
;
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference, Node);
function DocumentFragment() {}
;
DocumentFragment.prototype.nodeName = "#document-fragment";
DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment, Node);
function ProcessingInstruction() {}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction, Node);
function XMLSerializer() {}
XMLSerializer.prototype.serializeToString = function (node, isHtml, nodeFilter) {
  return nodeSerializeToString.call(node, isHtml, nodeFilter);
};
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(isHtml, nodeFilter) {
  var buf = [];
  var refNode = this.nodeType == 9 && this.documentElement || this;
  var prefix = refNode.prefix;
  var uri = refNode.namespaceURI;
  if (uri && prefix == null) {
    var prefix = refNode.lookupPrefix(uri);
    if (prefix == null) {
      var visibleNamespaces = [{
        namespace: uri,
        prefix: null
      }];
    }
  }
  serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
  return buf.join('');
}
function needNamespaceDefine(node, isHTML, visibleNamespaces) {
  var prefix = node.prefix || '';
  var uri = node.namespaceURI;
  if (!prefix && !uri) {
    return false;
  }
  if (prefix === "xml" && uri === "http://www.w3.org/XML/1998/namespace" || uri == 'http://www.w3.org/2000/xmlns/') {
    return false;
  }
  var i = visibleNamespaces.length;
  while (i--) {
    var ns = visibleNamespaces[i];
    if (ns.prefix == prefix) {
      return ns.namespace != uri;
    }
  }
  return true;
}
function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
  if (nodeFilter) {
    node = nodeFilter(node);
    if (node) {
      if (typeof node == 'string') {
        buf.push(node);
        return;
      }
    } else {
      return;
    }
  }
  switch (node.nodeType) {
    case ELEMENT_NODE:
      if (!visibleNamespaces) visibleNamespaces = [];
      var startVisibleNamespaces = visibleNamespaces.length;
      var attrs = node.attributes;
      var len = attrs.length;
      var child = node.firstChild;
      var nodeName = node.tagName;
      isHTML = htmlns === node.namespaceURI || isHTML;
      buf.push('<', nodeName);
      for (var i = 0; i < len; i++) {
        var attr = attrs.item(i);
        if (attr.prefix == 'xmlns') {
          visibleNamespaces.push({
            prefix: attr.localName,
            namespace: attr.value
          });
        } else if (attr.nodeName == 'xmlns') {
          visibleNamespaces.push({
            prefix: '',
            namespace: attr.value
          });
        }
      }
      for (var i = 0; i < len; i++) {
        var attr = attrs.item(i);
        if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
          var prefix = attr.prefix || '';
          var uri = attr.namespaceURI;
          var ns = prefix ? ' xmlns:' + prefix : " xmlns";
          buf.push(ns, '="', uri, '"');
          visibleNamespaces.push({
            prefix: prefix,
            namespace: uri
          });
        }
        serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
      }
      if (needNamespaceDefine(node, isHTML, visibleNamespaces)) {
        var prefix = node.prefix || '';
        var uri = node.namespaceURI;
        var ns = prefix ? ' xmlns:' + prefix : " xmlns";
        buf.push(ns, '="', uri, '"');
        visibleNamespaces.push({
          prefix: prefix,
          namespace: uri
        });
      }
      if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
        buf.push('>');
        if (isHTML && /^script$/i.test(nodeName)) {
          while (child) {
            if (child.data) {
              buf.push(child.data);
            } else {
              serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
            }
            child = child.nextSibling;
          }
        } else {
          while (child) {
            serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
            child = child.nextSibling;
          }
        }
        buf.push('</', nodeName, '>');
      } else {
        buf.push('/>');
      }
      return;
    case DOCUMENT_NODE:
    case DOCUMENT_FRAGMENT_NODE:
      var child = node.firstChild;
      while (child) {
        serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
        child = child.nextSibling;
      }
      return;
    case ATTRIBUTE_NODE:
      return buf.push(' ', node.name, '="', node.value.replace(/[<&"]/g, _xmlEncoder), '"');
    case TEXT_NODE:
      return buf.push(node.data.replace(/[<&]/g, _xmlEncoder));
    case CDATA_SECTION_NODE:
      return buf.push('<![CDATA[', node.data, ']]>');
    case COMMENT_NODE:
      return buf.push("<!--", node.data, "-->");
    case DOCUMENT_TYPE_NODE:
      var pubid = node.publicId;
      var sysid = node.systemId;
      buf.push('<!DOCTYPE ', node.name);
      if (pubid) {
        buf.push(' PUBLIC "', pubid);
        if (sysid && sysid != '.') {
          buf.push('" "', sysid);
        }
        buf.push('">');
      } else if (sysid && sysid != '.') {
        buf.push(' SYSTEM "', sysid, '">');
      } else {
        var sub = node.internalSubset;
        if (sub) {
          buf.push(" [", sub, "]");
        }
        buf.push(">");
      }
      return;
    case PROCESSING_INSTRUCTION_NODE:
      return buf.push("<?", node.target, " ", node.data, "?>");
    case ENTITY_REFERENCE_NODE:
      return buf.push('&', node.nodeName, ';');
    default:
      buf.push('??', node.nodeName);
  }
}
function _importNode(doc, node, deep) {
  var node2;
  switch (node.nodeType) {
    case ELEMENT_NODE:
      node2 = node.cloneNode(false);
      node2.ownerDocument = doc;
    case DOCUMENT_FRAGMENT_NODE:
      break;
    case ATTRIBUTE_NODE:
      deep = true;
      break;
  }
  if (!node2) {
    node2 = node.cloneNode(false);
  }
  node2.ownerDocument = doc;
  node2.parentNode = null;
  if (deep) {
    var child = node.firstChild;
    while (child) {
      node2.appendChild(_importNode(doc, child, deep));
      child = child.nextSibling;
    }
  }
  return node2;
}
function _cloneNode(doc, node, deep) {
  var node2 = new node.constructor();
  for (var n in node) {
    var v = node[n];
    if (_typeof(v) != 'object') {
      if (v != node2[n]) {
        node2[n] = v;
      }
    }
  }
  if (node.childNodes) {
    node2.childNodes = new NodeList();
  }
  node2.ownerDocument = doc;
  switch (node2.nodeType) {
    case ELEMENT_NODE:
      var attrs = node.attributes;
      var attrs2 = node2.attributes = new NamedNodeMap();
      var len = attrs.length;
      attrs2._ownerElement = node2;
      for (var i = 0; i < len; i++) {
        node2.setAttributeNode(_cloneNode(doc, attrs.item(i), true));
      }
      break;
      ;
    case ATTRIBUTE_NODE:
      deep = true;
  }
  if (deep) {
    var child = node.firstChild;
    while (child) {
      node2.appendChild(_cloneNode(doc, child, deep));
      child = child.nextSibling;
    }
  }
  return node2;
}
function __set__(object, key, value) {
  object[key] = value;
}
try {
  if (Object.defineProperty) {
    var getTextContent = function getTextContent(node) {
      switch (node.nodeType) {
        case ELEMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
          var buf = [];
          node = node.firstChild;
          while (node) {
            if (node.nodeType !== 7 && node.nodeType !== 8) {
              buf.push(getTextContent(node));
            }
            node = node.nextSibling;
          }
          return buf.join('');
        default:
          return node.nodeValue;
      }
    };
    Object.defineProperty(LiveNodeList.prototype, 'length', {
      get: function get() {
        _updateLiveList(this);
        return this.$$length;
      }
    });
    Object.defineProperty(Node.prototype, 'textContent', {
      get: function get() {
        return getTextContent(this);
      },
      set: function set(data) {
        switch (this.nodeType) {
          case ELEMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE:
            while (this.firstChild) {
              this.removeChild(this.firstChild);
            }
            if (data || String(data)) {
              this.appendChild(this.ownerDocument.createTextNode(data));
            }
            break;
          default:
            this.data = data;
            this.value = data;
            this.nodeValue = data;
        }
      }
    });
    __set__ = function __set__(object, key, value) {
      object['$$' + key] = value;
    };
  }
} catch (e) {}
exports.DOMImplementation = DOMImplementation;
exports.XMLSerializer = XMLSerializer;

},{}],62:[function(require,module,exports){
"use strict";

exports.entityMap = {
  lt: '<',
  gt: '>',
  amp: '&',
  quot: '"',
  apos: "'",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  nbsp: " ",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  times: "×",
  divide: "÷",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  'int': "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  fnof: "ƒ",
  circ: "ˆ",
  tilde: "˜",
  ensp: " ",
  emsp: " ",
  thinsp: " ",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  bull: "•",
  hellip: "…",
  permil: "‰",
  prime: "′",
  Prime: "″",
  lsaquo: "‹",
  rsaquo: "›",
  oline: "‾",
  euro: "€",
  trade: "™",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦"
};

},{}],63:[function(require,module,exports){
"use strict";

var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
var tagNamePattern = new RegExp('^' + nameStartChar.source + nameChar.source + '*(?:\:' + nameStartChar.source + nameChar.source + '*)?$');
var S_TAG = 0;
var S_ATTR = 1;
var S_ATTR_SPACE = 2;
var S_EQ = 3;
var S_ATTR_NOQUOT_VALUE = 4;
var S_ATTR_END = 5;
var S_TAG_SPACE = 6;
var S_TAG_CLOSE = 7;
function XMLReader() {}
XMLReader.prototype = {
  parse: function parse(source, defaultNSMap, entityMap) {
    var domBuilder = this.domBuilder;
    domBuilder.startDocument();
    _copy(defaultNSMap, defaultNSMap = {});
    _parse(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);
    domBuilder.endDocument();
  }
};
function _parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
  function fixedFromCharCode(code) {
    if (code > 0xffff) {
      code -= 0x10000;
      var surrogate1 = 0xd800 + (code >> 10),
        surrogate2 = 0xdc00 + (code & 0x3ff);
      return String.fromCharCode(surrogate1, surrogate2);
    } else {
      return String.fromCharCode(code);
    }
  }
  function entityReplacer(a) {
    var k = a.slice(1, -1);
    if (k in entityMap) {
      return entityMap[k];
    } else if (k.charAt(0) === '#') {
      return fixedFromCharCode(parseInt(k.substr(1).replace('x', '0x')));
    } else {
      errorHandler.error('entity not found:' + a);
      return a;
    }
  }
  function appendText(end) {
    if (end > start) {
      var xt = source.substring(start, end).replace(/&#?\w+;/g, entityReplacer);
      locator && position(start);
      domBuilder.characters(xt, 0, end - start);
      start = end;
    }
  }
  function position(p, m) {
    while (p >= lineEnd && (m = linePattern.exec(source))) {
      lineStart = m.index;
      lineEnd = lineStart + m[0].length;
      locator.lineNumber++;
    }
    locator.columnNumber = p - lineStart + 1;
  }
  var lineStart = 0;
  var lineEnd = 0;
  var linePattern = /.*(?:\r\n?|\n)|.*$/g;
  var locator = domBuilder.locator;
  var parseStack = [{
    currentNSMap: defaultNSMapCopy
  }];
  var closeMap = {};
  var start = 0;
  while (true) {
    try {
      var tagStart = source.indexOf('<', start);
      if (tagStart < 0) {
        if (!source.substr(start).match(/^\s*$/)) {
          var doc = domBuilder.doc;
          var text = doc.createTextNode(source.substr(start));
          doc.appendChild(text);
          domBuilder.currentElement = text;
        }
        return;
      }
      if (tagStart > start) {
        appendText(tagStart);
      }
      switch (source.charAt(tagStart + 1)) {
        case '/':
          var end = source.indexOf('>', tagStart + 3);
          var tagName = source.substring(tagStart + 2, end);
          var config = parseStack.pop();
          if (end < 0) {
            tagName = source.substring(tagStart + 2).replace(/[\s<].*/, '');
            errorHandler.error("end tag name: " + tagName + ' is not complete:' + config.tagName);
            end = tagStart + 1 + tagName.length;
          } else if (tagName.match(/\s</)) {
            tagName = tagName.replace(/[\s<].*/, '');
            errorHandler.error("end tag name: " + tagName + ' maybe not complete');
            end = tagStart + 1 + tagName.length;
          }
          var localNSMap = config.localNSMap;
          var endMatch = config.tagName == tagName;
          var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
          if (endIgnoreCaseMach) {
            domBuilder.endElement(config.uri, config.localName, tagName);
            if (localNSMap) {
              for (var prefix in localNSMap) {
                domBuilder.endPrefixMapping(prefix);
              }
            }
            if (!endMatch) {
              errorHandler.fatalError("end tag name: " + tagName + ' is not match the current start tagName:' + config.tagName);
            }
          } else {
            parseStack.push(config);
          }
          end++;
          break;
        case '?':
          locator && position(tagStart);
          end = parseInstruction(source, tagStart, domBuilder);
          break;
        case '!':
          locator && position(tagStart);
          end = parseDCC(source, tagStart, domBuilder, errorHandler);
          break;
        default:
          locator && position(tagStart);
          var el = new ElementAttributes();
          var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
          var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
          var len = el.length;
          if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
            el.closed = true;
            if (!entityMap.nbsp) {
              errorHandler.warning('unclosed xml attribute');
            }
          }
          if (locator && len) {
            var locator2 = copyLocator(locator, {});
            for (var i = 0; i < len; i++) {
              var a = el[i];
              position(a.offset);
              a.locator = copyLocator(locator, {});
            }
            domBuilder.locator = locator2;
            if (appendElement(el, domBuilder, currentNSMap)) {
              parseStack.push(el);
            }
            domBuilder.locator = locator;
          } else {
            if (appendElement(el, domBuilder, currentNSMap)) {
              parseStack.push(el);
            }
          }
          if (el.uri === 'http://www.w3.org/1999/xhtml' && !el.closed) {
            end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
          } else {
            end++;
          }
      }
    } catch (e) {
      errorHandler.error('element parse error: ' + e);
      end = -1;
    }
    if (end > start) {
      start = end;
    } else {
      appendText(Math.max(tagStart, start) + 1);
    }
  }
}
function copyLocator(f, t) {
  t.lineNumber = f.lineNumber;
  t.columnNumber = f.columnNumber;
  return t;
}
function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
  var attrName;
  var value;
  var p = ++start;
  var s = S_TAG;
  while (true) {
    var c = source.charAt(p);
    switch (c) {
      case '=':
        if (s === S_ATTR) {
          attrName = source.slice(start, p);
          s = S_EQ;
        } else if (s === S_ATTR_SPACE) {
          s = S_EQ;
        } else {
          throw new Error('attribute equal must after attrName');
        }
        break;
      case '\'':
      case '"':
        if (s === S_EQ || s === S_ATTR) {
          if (s === S_ATTR) {
            errorHandler.warning('attribute value must after "="');
            attrName = source.slice(start, p);
          }
          start = p + 1;
          p = source.indexOf(c, start);
          if (p > 0) {
            value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
            el.add(attrName, value, start - 1);
            s = S_ATTR_END;
          } else {
            throw new Error('attribute value no end \'' + c + '\' match');
          }
        } else if (s == S_ATTR_NOQUOT_VALUE) {
          value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
          el.add(attrName, value, start);
          errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ')!!');
          start = p + 1;
          s = S_ATTR_END;
        } else {
          throw new Error('attribute value must after "="');
        }
        break;
      case '/':
        switch (s) {
          case S_TAG:
            el.setTagName(source.slice(start, p));
          case S_ATTR_END:
          case S_TAG_SPACE:
          case S_TAG_CLOSE:
            s = S_TAG_CLOSE;
            el.closed = true;
          case S_ATTR_NOQUOT_VALUE:
          case S_ATTR:
          case S_ATTR_SPACE:
            break;
          default:
            throw new Error("attribute invalid close char('/')");
        }
        break;
      case '':
        errorHandler.error('unexpected end of input');
        if (s == S_TAG) {
          el.setTagName(source.slice(start, p));
        }
        return p;
      case '>':
        switch (s) {
          case S_TAG:
            el.setTagName(source.slice(start, p));
          case S_ATTR_END:
          case S_TAG_SPACE:
          case S_TAG_CLOSE:
            break;
          case S_ATTR_NOQUOT_VALUE:
          case S_ATTR:
            value = source.slice(start, p);
            if (value.slice(-1) === '/') {
              el.closed = true;
              value = value.slice(0, -1);
            }
          case S_ATTR_SPACE:
            if (s === S_ATTR_SPACE) {
              value = attrName;
            }
            if (s == S_ATTR_NOQUOT_VALUE) {
              errorHandler.warning('attribute "' + value + '" missed quot(")!!');
              el.add(attrName, value.replace(/&#?\w+;/g, entityReplacer), start);
            } else {
              if (currentNSMap[''] !== 'http://www.w3.org/1999/xhtml' || !value.match(/^(?:disabled|checked|selected)$/i)) {
                errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
              }
              el.add(value, value, start);
            }
            break;
          case S_EQ:
            throw new Error('attribute value missed!!');
        }
        return p;
      case "\x80":
        c = ' ';
      default:
        if (c <= ' ') {
          switch (s) {
            case S_TAG:
              el.setTagName(source.slice(start, p));
              s = S_TAG_SPACE;
              break;
            case S_ATTR:
              attrName = source.slice(start, p);
              s = S_ATTR_SPACE;
              break;
            case S_ATTR_NOQUOT_VALUE:
              var value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
              errorHandler.warning('attribute "' + value + '" missed quot(")!!');
              el.add(attrName, value, start);
            case S_ATTR_END:
              s = S_TAG_SPACE;
              break;
          }
        } else {
          switch (s) {
            case S_ATTR_SPACE:
              var tagName = el.tagName;
              if (currentNSMap[''] !== 'http://www.w3.org/1999/xhtml' || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
              }
              el.add(attrName, attrName, start);
              start = p;
              s = S_ATTR;
              break;
            case S_ATTR_END:
              errorHandler.warning('attribute space is required"' + attrName + '"!!');
            case S_TAG_SPACE:
              s = S_ATTR;
              start = p;
              break;
            case S_EQ:
              s = S_ATTR_NOQUOT_VALUE;
              start = p;
              break;
            case S_TAG_CLOSE:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
        }
    }
    p++;
  }
}
function appendElement(el, domBuilder, currentNSMap) {
  var tagName = el.tagName;
  var localNSMap = null;
  var i = el.length;
  while (i--) {
    var a = el[i];
    var qName = a.qName;
    var value = a.value;
    var nsp = qName.indexOf(':');
    if (nsp > 0) {
      var prefix = a.prefix = qName.slice(0, nsp);
      var localName = qName.slice(nsp + 1);
      var nsPrefix = prefix === 'xmlns' && localName;
    } else {
      localName = qName;
      prefix = null;
      nsPrefix = qName === 'xmlns' && '';
    }
    a.localName = localName;
    if (nsPrefix !== false) {
      if (localNSMap == null) {
        localNSMap = {};
        _copy(currentNSMap, currentNSMap = {});
      }
      currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
      a.uri = 'http://www.w3.org/2000/xmlns/';
      domBuilder.startPrefixMapping(nsPrefix, value);
    }
  }
  var i = el.length;
  while (i--) {
    a = el[i];
    var prefix = a.prefix;
    if (prefix) {
      if (prefix === 'xml') {
        a.uri = 'http://www.w3.org/XML/1998/namespace';
      }
      if (prefix !== 'xmlns') {
        a.uri = currentNSMap[prefix || ''];
      }
    }
  }
  var nsp = tagName.indexOf(':');
  if (nsp > 0) {
    prefix = el.prefix = tagName.slice(0, nsp);
    localName = el.localName = tagName.slice(nsp + 1);
  } else {
    prefix = null;
    localName = el.localName = tagName;
  }
  var ns = el.uri = currentNSMap[prefix || ''];
  domBuilder.startElement(ns, localName, tagName, el);
  if (el.closed) {
    domBuilder.endElement(ns, localName, tagName);
    if (localNSMap) {
      for (prefix in localNSMap) {
        domBuilder.endPrefixMapping(prefix);
      }
    }
  } else {
    el.currentNSMap = currentNSMap;
    el.localNSMap = localNSMap;
    return true;
  }
}
function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
  if (/^(?:script|textarea)$/i.test(tagName)) {
    var elEndStart = source.indexOf('</' + tagName + '>', elStartEnd);
    var text = source.substring(elStartEnd + 1, elEndStart);
    if (/[&<]/.test(text)) {
      if (/^script$/i.test(tagName)) {
        domBuilder.characters(text, 0, text.length);
        return elEndStart;
      }
      text = text.replace(/&#?\w+;/g, entityReplacer);
      domBuilder.characters(text, 0, text.length);
      return elEndStart;
    }
  }
  return elStartEnd + 1;
}
function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
  var pos = closeMap[tagName];
  if (pos == null) {
    pos = source.lastIndexOf('</' + tagName + '>');
    if (pos < elStartEnd) {
      pos = source.lastIndexOf('</' + tagName);
    }
    closeMap[tagName] = pos;
  }
  return pos < elStartEnd;
}
function _copy(source, target) {
  for (var n in source) {
    target[n] = source[n];
  }
}
function parseDCC(source, start, domBuilder, errorHandler) {
  var next = source.charAt(start + 2);
  switch (next) {
    case '-':
      if (source.charAt(start + 3) === '-') {
        var end = source.indexOf('-->', start + 4);
        if (end > start) {
          domBuilder.comment(source, start + 4, end - start - 4);
          return end + 3;
        } else {
          errorHandler.error("Unclosed comment");
          return -1;
        }
      } else {
        return -1;
      }
    default:
      if (source.substr(start + 3, 6) == 'CDATA[') {
        var end = source.indexOf(']]>', start + 9);
        domBuilder.startCDATA();
        domBuilder.characters(source, start + 9, end - start - 9);
        domBuilder.endCDATA();
        return end + 3;
      }
      var matchs = split(source, start);
      var len = matchs.length;
      if (len > 1 && /!doctype/i.test(matchs[0][0])) {
        var name = matchs[1][0];
        var pubid = len > 3 && /^public$/i.test(matchs[2][0]) && matchs[3][0];
        var sysid = len > 4 && matchs[4][0];
        var lastMatch = matchs[len - 1];
        domBuilder.startDTD(name, pubid && pubid.replace(/^(['"])(.*?)\1$/, '$2'), sysid && sysid.replace(/^(['"])(.*?)\1$/, '$2'));
        domBuilder.endDTD();
        return lastMatch.index + lastMatch[0].length;
      }
  }
  return -1;
}
function parseInstruction(source, start, domBuilder) {
  var end = source.indexOf('?>', start);
  if (end) {
    var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
    if (match) {
      var len = match[0].length;
      domBuilder.processingInstruction(match[1], match[2]);
      return end + 2;
    } else {
      return -1;
    }
  }
  return -1;
}
function ElementAttributes(source) {}
ElementAttributes.prototype = {
  setTagName: function setTagName(tagName) {
    if (!tagNamePattern.test(tagName)) {
      throw new Error('invalid tagName:' + tagName);
    }
    this.tagName = tagName;
  },
  add: function add(qName, value, offset) {
    if (!tagNamePattern.test(qName)) {
      throw new Error('invalid attribute:' + qName);
    }
    this[this.length++] = {
      qName: qName,
      value: value,
      offset: offset
    };
  },
  length: 0,
  getLocalName: function getLocalName(i) {
    return this[i].localName;
  },
  getLocator: function getLocator(i) {
    return this[i].locator;
  },
  getQName: function getQName(i) {
    return this[i].qName;
  },
  getURI: function getURI(i) {
    return this[i].uri;
  },
  getValue: function getValue(i) {
    return this[i].value;
  }
};
function split(source, start) {
  var match;
  var buf = [];
  var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  reg.lastIndex = start;
  reg.exec(source);
  while (match = reg.exec(source)) {
    buf.push(match);
    if (match[1]) return buf;
  }
}
exports.XMLReader = XMLReader;

},{}]},{},[59]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ3ZWItYWRhcHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG4hZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBlKGUpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBlO1xuICB9XG4gIHZhciB0ID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZXhwb3J0cyA/IGV4cG9ydHMgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6ICQuZ2xvYmFsLFxuICAgIHIgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCI7XG4gIGUucHJvdG90eXBlID0gbmV3IEVycm9yKCksIGUucHJvdG90eXBlLm5hbWUgPSBcIkludmFsaWRDaGFyYWN0ZXJFcnJvclwiLCB0LmJ0b2EgfHwgKHQuYnRvYSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgZm9yICh2YXIgbywgbiwgYSA9IFN0cmluZyh0KSwgaSA9IDAsIGYgPSByLCBjID0gXCJcIjsgYS5jaGFyQXQoMCB8IGkpIHx8IChmID0gXCI9XCIsIGkgJSAxKTsgYyArPSBmLmNoYXJBdCg2MyAmIG8gPj4gOCAtIGkgJSAxICogOCkpIHtcbiAgICAgIGlmIChuID0gYS5jaGFyQ29kZUF0KGkgKz0gLjc1KSwgbiA+IDI1NSkgdGhyb3cgbmV3IGUoXCInYnRvYScgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGVuY29kZWQgY29udGFpbnMgY2hhcmFjdGVycyBvdXRzaWRlIG9mIHRoZSBMYXRpbjEgcmFuZ2UuXCIpO1xuICAgICAgbyA9IG8gPDwgOCB8IG47XG4gICAgfVxuICAgIHJldHVybiBjO1xuICB9KSwgdC5hdG9iIHx8ICh0LmF0b2IgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBvID0gU3RyaW5nKHQpLnJlcGxhY2UoL1s9XSskLywgXCJcIik7XG4gICAgaWYgKG8ubGVuZ3RoICUgNCA9PSAxKSB0aHJvdyBuZXcgZShcIidhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpO1xuICAgIGZvciAodmFyIG4sIGEsIGkgPSAwLCBmID0gMCwgYyA9IFwiXCI7IGEgPSBvLmNoYXJBdChmKyspOyB+YSAmJiAobiA9IGkgJSA0ID8gNjQgKiBuICsgYSA6IGEsIGkrKyAlIDQpID8gYyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSAmIG4gPj4gKC0yICogaSAmIDYpKSA6IDApIGEgPSByLmluZGV4T2YoYSk7XG4gICAgcmV0dXJuIGM7XG4gIH0pO1xufSgpO1xuXG59LHt9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG4hZnVuY3Rpb24gKG4pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgZnVuY3Rpb24gdChuLCB0KSB7XG4gICAgdmFyIHIgPSAoNjU1MzUgJiBuKSArICg2NTUzNSAmIHQpO1xuICAgIHJldHVybiAobiA+PiAxNikgKyAodCA+PiAxNikgKyAociA+PiAxNikgPDwgMTYgfCA2NTUzNSAmIHI7XG4gIH1cbiAgZnVuY3Rpb24gcihuLCB0KSB7XG4gICAgcmV0dXJuIG4gPDwgdCB8IG4gPj4+IDMyIC0gdDtcbiAgfVxuICBmdW5jdGlvbiBlKG4sIGUsIG8sIHUsIGMsIGYpIHtcbiAgICByZXR1cm4gdChyKHQodChlLCBuKSwgdCh1LCBmKSksIGMpLCBvKTtcbiAgfVxuICBmdW5jdGlvbiBvKG4sIHQsIHIsIG8sIHUsIGMsIGYpIHtcbiAgICByZXR1cm4gZSh0ICYgciB8IH50ICYgbywgbiwgdCwgdSwgYywgZik7XG4gIH1cbiAgZnVuY3Rpb24gdShuLCB0LCByLCBvLCB1LCBjLCBmKSB7XG4gICAgcmV0dXJuIGUodCAmIG8gfCByICYgfm8sIG4sIHQsIHUsIGMsIGYpO1xuICB9XG4gIGZ1bmN0aW9uIGMobiwgdCwgciwgbywgdSwgYywgZikge1xuICAgIHJldHVybiBlKHQgXiByIF4gbywgbiwgdCwgdSwgYywgZik7XG4gIH1cbiAgZnVuY3Rpb24gZihuLCB0LCByLCBvLCB1LCBjLCBmKSB7XG4gICAgcmV0dXJuIGUociBeICh0IHwgfm8pLCBuLCB0LCB1LCBjLCBmKTtcbiAgfVxuICBmdW5jdGlvbiBpKG4sIHIpIHtcbiAgICBuW3IgPj4gNV0gfD0gMTI4IDw8IHIgJSAzMiwgblsxNCArIChyICsgNjQgPj4+IDkgPDwgNCldID0gcjtcbiAgICB2YXIgZSxcbiAgICAgIGksXG4gICAgICBhLFxuICAgICAgZCxcbiAgICAgIGgsXG4gICAgICBsID0gMTczMjU4NDE5MyxcbiAgICAgIGcgPSAtMjcxNzMzODc5LFxuICAgICAgdiA9IC0xNzMyNTg0MTk0LFxuICAgICAgbSA9IDI3MTczMzg3ODtcbiAgICBmb3IgKGUgPSAwOyBlIDwgbi5sZW5ndGg7IGUgKz0gMTYpIGkgPSBsLCBhID0gZywgZCA9IHYsIGggPSBtLCBnID0gZihnID0gZihnID0gZihnID0gZihnID0gYyhnID0gYyhnID0gYyhnID0gYyhnID0gdShnID0gdShnID0gdShnID0gdShnID0gbyhnID0gbyhnID0gbyhnID0gbyhnLCB2ID0gbyh2LCBtID0gbyhtLCBsID0gbyhsLCBnLCB2LCBtLCBuW2VdLCA3LCAtNjgwODc2OTM2KSwgZywgdiwgbltlICsgMV0sIDEyLCAtMzg5NTY0NTg2KSwgbCwgZywgbltlICsgMl0sIDE3LCA2MDYxMDU4MTkpLCBtLCBsLCBuW2UgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKSwgdiA9IG8odiwgbSA9IG8obSwgbCA9IG8obCwgZywgdiwgbSwgbltlICsgNF0sIDcsIC0xNzY0MTg4OTcpLCBnLCB2LCBuW2UgKyA1XSwgMTIsIDEyMDAwODA0MjYpLCBsLCBnLCBuW2UgKyA2XSwgMTcsIC0xNDczMjMxMzQxKSwgbSwgbCwgbltlICsgN10sIDIyLCAtNDU3MDU5ODMpLCB2ID0gbyh2LCBtID0gbyhtLCBsID0gbyhsLCBnLCB2LCBtLCBuW2UgKyA4XSwgNywgMTc3MDAzNTQxNiksIGcsIHYsIG5bZSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpLCBsLCBnLCBuW2UgKyAxMF0sIDE3LCAtNDIwNjMpLCBtLCBsLCBuW2UgKyAxMV0sIDIyLCAtMTk5MDQwNDE2MiksIHYgPSBvKHYsIG0gPSBvKG0sIGwgPSBvKGwsIGcsIHYsIG0sIG5bZSArIDEyXSwgNywgMTgwNDYwMzY4MiksIGcsIHYsIG5bZSArIDEzXSwgMTIsIC00MDM0MTEwMSksIGwsIGcsIG5bZSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKSwgbSwgbCwgbltlICsgMTVdLCAyMiwgMTIzNjUzNTMyOSksIHYgPSB1KHYsIG0gPSB1KG0sIGwgPSB1KGwsIGcsIHYsIG0sIG5bZSArIDFdLCA1LCAtMTY1Nzk2NTEwKSwgZywgdiwgbltlICsgNl0sIDksIC0xMDY5NTAxNjMyKSwgbCwgZywgbltlICsgMTFdLCAxNCwgNjQzNzE3NzEzKSwgbSwgbCwgbltlXSwgMjAsIC0zNzM4OTczMDIpLCB2ID0gdSh2LCBtID0gdShtLCBsID0gdShsLCBnLCB2LCBtLCBuW2UgKyA1XSwgNSwgLTcwMTU1ODY5MSksIGcsIHYsIG5bZSArIDEwXSwgOSwgMzgwMTYwODMpLCBsLCBnLCBuW2UgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KSwgbSwgbCwgbltlICsgNF0sIDIwLCAtNDA1NTM3ODQ4KSwgdiA9IHUodiwgbSA9IHUobSwgbCA9IHUobCwgZywgdiwgbSwgbltlICsgOV0sIDUsIDU2ODQ0NjQzOCksIGcsIHYsIG5bZSArIDE0XSwgOSwgLTEwMTk4MDM2OTApLCBsLCBnLCBuW2UgKyAzXSwgMTQsIC0xODczNjM5NjEpLCBtLCBsLCBuW2UgKyA4XSwgMjAsIDExNjM1MzE1MDEpLCB2ID0gdSh2LCBtID0gdShtLCBsID0gdShsLCBnLCB2LCBtLCBuW2UgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KSwgZywgdiwgbltlICsgMl0sIDksIC01MTQwMzc4NCksIGwsIGcsIG5bZSArIDddLCAxNCwgMTczNTMyODQ3MyksIG0sIGwsIG5bZSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KSwgdiA9IGModiwgbSA9IGMobSwgbCA9IGMobCwgZywgdiwgbSwgbltlICsgNV0sIDQsIC0zNzg1NTgpLCBnLCB2LCBuW2UgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKSwgbCwgZywgbltlICsgMTFdLCAxNiwgMTgzOTAzMDU2MiksIG0sIGwsIG5bZSArIDE0XSwgMjMsIC0zNTMwOTU1NiksIHYgPSBjKHYsIG0gPSBjKG0sIGwgPSBjKGwsIGcsIHYsIG0sIG5bZSArIDFdLCA0LCAtMTUzMDk5MjA2MCksIGcsIHYsIG5bZSArIDRdLCAxMSwgMTI3Mjg5MzM1MyksIGwsIGcsIG5bZSArIDddLCAxNiwgLTE1NTQ5NzYzMiksIG0sIGwsIG5bZSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKSwgdiA9IGModiwgbSA9IGMobSwgbCA9IGMobCwgZywgdiwgbSwgbltlICsgMTNdLCA0LCA2ODEyNzkxNzQpLCBnLCB2LCBuW2VdLCAxMSwgLTM1ODUzNzIyMiksIGwsIGcsIG5bZSArIDNdLCAxNiwgLTcyMjUyMTk3OSksIG0sIGwsIG5bZSArIDZdLCAyMywgNzYwMjkxODkpLCB2ID0gYyh2LCBtID0gYyhtLCBsID0gYyhsLCBnLCB2LCBtLCBuW2UgKyA5XSwgNCwgLTY0MDM2NDQ4NyksIGcsIHYsIG5bZSArIDEyXSwgMTEsIC00MjE4MTU4MzUpLCBsLCBnLCBuW2UgKyAxNV0sIDE2LCA1MzA3NDI1MjApLCBtLCBsLCBuW2UgKyAyXSwgMjMsIC05OTUzMzg2NTEpLCB2ID0gZih2LCBtID0gZihtLCBsID0gZihsLCBnLCB2LCBtLCBuW2VdLCA2LCAtMTk4NjMwODQ0KSwgZywgdiwgbltlICsgN10sIDEwLCAxMTI2ODkxNDE1KSwgbCwgZywgbltlICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpLCBtLCBsLCBuW2UgKyA1XSwgMjEsIC01NzQzNDA1NSksIHYgPSBmKHYsIG0gPSBmKG0sIGwgPSBmKGwsIGcsIHYsIG0sIG5bZSArIDEyXSwgNiwgMTcwMDQ4NTU3MSksIGcsIHYsIG5bZSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpLCBsLCBnLCBuW2UgKyAxMF0sIDE1LCAtMTA1MTUyMyksIG0sIGwsIG5bZSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpLCB2ID0gZih2LCBtID0gZihtLCBsID0gZihsLCBnLCB2LCBtLCBuW2UgKyA4XSwgNiwgMTg3MzMxMzM1OSksIGcsIHYsIG5bZSArIDE1XSwgMTAsIC0zMDYxMTc0NCksIGwsIGcsIG5bZSArIDZdLCAxNSwgLTE1NjAxOTgzODApLCBtLCBsLCBuW2UgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KSwgdiA9IGYodiwgbSA9IGYobSwgbCA9IGYobCwgZywgdiwgbSwgbltlICsgNF0sIDYsIC0xNDU1MjMwNzApLCBnLCB2LCBuW2UgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSksIGwsIGcsIG5bZSArIDJdLCAxNSwgNzE4Nzg3MjU5KSwgbSwgbCwgbltlICsgOV0sIDIxLCAtMzQzNDg1NTUxKSwgbCA9IHQobCwgaSksIGcgPSB0KGcsIGEpLCB2ID0gdCh2LCBkKSwgbSA9IHQobSwgaCk7XG4gICAgcmV0dXJuIFtsLCBnLCB2LCBtXTtcbiAgfVxuICBmdW5jdGlvbiBhKG4pIHtcbiAgICB2YXIgdCxcbiAgICAgIHIgPSBcIlwiLFxuICAgICAgZSA9IDMyICogbi5sZW5ndGg7XG4gICAgZm9yICh0ID0gMDsgdCA8IGU7IHQgKz0gOCkgciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5bdCA+PiA1XSA+Pj4gdCAlIDMyICYgMjU1KTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBmdW5jdGlvbiBkKG4pIHtcbiAgICB2YXIgdCxcbiAgICAgIHIgPSBbXTtcbiAgICBmb3IgKHJbKG4ubGVuZ3RoID4+IDIpIC0gMV0gPSB2b2lkIDAsIHQgPSAwOyB0IDwgci5sZW5ndGg7IHQgKz0gMSkgclt0XSA9IDA7XG4gICAgdmFyIGUgPSA4ICogbi5sZW5ndGg7XG4gICAgZm9yICh0ID0gMDsgdCA8IGU7IHQgKz0gOCkgclt0ID4+IDVdIHw9ICgyNTUgJiBuLmNoYXJDb2RlQXQodCAvIDgpKSA8PCB0ICUgMzI7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgZnVuY3Rpb24gaChuKSB7XG4gICAgcmV0dXJuIGEoaShkKG4pLCA4ICogbi5sZW5ndGgpKTtcbiAgfVxuICBmdW5jdGlvbiBsKG4sIHQpIHtcbiAgICB2YXIgcixcbiAgICAgIGUsXG4gICAgICBvID0gZChuKSxcbiAgICAgIHUgPSBbXSxcbiAgICAgIGMgPSBbXTtcbiAgICBmb3IgKHVbMTVdID0gY1sxNV0gPSB2b2lkIDAsIG8ubGVuZ3RoID4gMTYgJiYgKG8gPSBpKG8sIDggKiBuLmxlbmd0aCkpLCByID0gMDsgciA8IDE2OyByICs9IDEpIHVbcl0gPSA5MDk1MjI0ODYgXiBvW3JdLCBjW3JdID0gMTU0OTU1NjgyOCBeIG9bcl07XG4gICAgcmV0dXJuIGUgPSBpKHUuY29uY2F0KGQodCkpLCA1MTIgKyA4ICogdC5sZW5ndGgpLCBhKGkoYy5jb25jYXQoZSksIDY0MCkpO1xuICB9XG4gIGZ1bmN0aW9uIGcobikge1xuICAgIHZhciB0LFxuICAgICAgcixcbiAgICAgIGUgPSBcIlwiO1xuICAgIGZvciAociA9IDA7IHIgPCBuLmxlbmd0aDsgciArPSAxKSB0ID0gbi5jaGFyQ29kZUF0KHIpLCBlICs9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiLmNoYXJBdCh0ID4+PiA0ICYgMTUpICsgXCIwMTIzNDU2Nzg5YWJjZGVmXCIuY2hhckF0KDE1ICYgdCk7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgZnVuY3Rpb24gdihuKSB7XG4gICAgcmV0dXJuIHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChuKSk7XG4gIH1cbiAgZnVuY3Rpb24gbShuKSB7XG4gICAgcmV0dXJuIGgodihuKSk7XG4gIH1cbiAgZnVuY3Rpb24gcChuKSB7XG4gICAgcmV0dXJuIGcobShuKSk7XG4gIH1cbiAgZnVuY3Rpb24gcyhuLCB0KSB7XG4gICAgcmV0dXJuIGwodihuKSwgdih0KSk7XG4gIH1cbiAgZnVuY3Rpb24gQyhuLCB0KSB7XG4gICAgcmV0dXJuIGcocyhuLCB0KSk7XG4gIH1cbiAgZnVuY3Rpb24gQShuLCB0LCByKSB7XG4gICAgcmV0dXJuIHQgPyByID8gcyh0LCBuKSA6IEModCwgbikgOiByID8gbShuKSA6IHAobik7XG4gIH1cbiAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEE7XG4gIH0pIDogXCJvYmplY3RcIiA9PSAodHlwZW9mIG1vZHVsZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG1vZHVsZSkpICYmIG1vZHVsZS5leHBvcnRzID8gbW9kdWxlLmV4cG9ydHMgPSBBIDogbi5tZDUgPSBBO1xufSh2b2lkIDApO1xuXG59LHt9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgYXJyYXlidWZmZXJUb1N0cmluZzogZnVuY3Rpb24gYXJyYXlidWZmZXJUb1N0cmluZyhhcnJheUJ1ZmZlcikge1xuICAgIHZhciBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG4gICAgdmFyIHN0ciA9IFtdO1xuICAgIHN0ci5sZW5ndGggPSBieXRlQXJyYXkubGVuZ3RoO1xuICAgIHZhciBjdXJyZW50U3RySW5kZXggPSAwO1xuICAgIHZhciBjdXJyZW5TdHJDb2RlID0gMDtcbiAgICB2YXIgZmlyc3RCeXRlQ29kZSA9IDA7XG4gICAgdmFyIGFycmF5TGVuZ3RoID0gYnl0ZUFycmF5Lmxlbmd0aDtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGZpcnN0Qnl0ZUNvZGUgPSBieXRlQXJyYXlbaW5kZXhdO1xuICAgICAgaWYgKGZpcnN0Qnl0ZUNvZGUgPiAyNTEgJiYgZmlyc3RCeXRlQ29kZSA8IDI1NCAmJiBpbmRleCArIDUgPCBhcnJheUxlbmd0aCkge1xuICAgICAgICBjdXJyZW5TdHJDb2RlID0gKGZpcnN0Qnl0ZUNvZGUgLSAyNTIpICogMTA3Mzc0MTgyNCArIChieXRlQXJyYXlbKytpbmRleF0gLSAxMjggPDwgMjQpICsgKGJ5dGVBcnJheVsrK2luZGV4XSAtIDEyOCA8PCAxOCkgKyAoYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4IDw8IDEyKSArIChieXRlQXJyYXlbKytpbmRleF0gLSAxMjggPDwgNikgKyBieXRlQXJyYXlbKytpbmRleF0gLSAxMjg7XG4gICAgICB9IGVsc2UgaWYgKGZpcnN0Qnl0ZUNvZGUgPiAyNDcgJiYgZmlyc3RCeXRlQ29kZSA8IDI1MiAmJiBpbmRleCArIDQgPCBhcnJheUxlbmd0aCkge1xuICAgICAgICBjdXJyZW5TdHJDb2RlID0gKGZpcnN0Qnl0ZUNvZGUgLSAyNDggPDwgMjQpICsgKGJ5dGVBcnJheVsrK2luZGV4XSAtIDEyOCA8PCAxOCkgKyAoYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4IDw8IDEyKSArIChieXRlQXJyYXlbKytpbmRleF0gLSAxMjggPDwgNikgKyBieXRlQXJyYXlbKytpbmRleF0gLSAxMjg7XG4gICAgICB9IGVsc2UgaWYgKGZpcnN0Qnl0ZUNvZGUgPiAyMzkgJiYgZmlyc3RCeXRlQ29kZSA8IDI0OCAmJiBpbmRleCArIDMgPCBhcnJheUxlbmd0aCkge1xuICAgICAgICBjdXJyZW5TdHJDb2RlID0gKGZpcnN0Qnl0ZUNvZGUgLSAyNDAgPDwgMTgpICsgKGJ5dGVBcnJheVsrK2luZGV4XSAtIDEyOCA8PCAxMikgKyAoYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4IDw8IDYpICsgYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4O1xuICAgICAgfSBlbHNlIGlmIChmaXJzdEJ5dGVDb2RlID4gMjIzICYmIGZpcnN0Qnl0ZUNvZGUgPCAyNDAgJiYgaW5kZXggKyAyIDwgYXJyYXlMZW5ndGgpIHtcbiAgICAgICAgY3VycmVuU3RyQ29kZSA9IChmaXJzdEJ5dGVDb2RlIC0gMjI0IDw8IDEyKSArIChieXRlQXJyYXlbKytpbmRleF0gLSAxMjggPDwgNikgKyBieXRlQXJyYXlbKytpbmRleF0gLSAxMjg7XG4gICAgICB9IGVsc2UgaWYgKGZpcnN0Qnl0ZUNvZGUgPiAxOTEgJiYgZmlyc3RCeXRlQ29kZSA8IDIyNCAmJiBpbmRleCArIDEgPCBhcnJheUxlbmd0aCkge1xuICAgICAgICBjdXJyZW5TdHJDb2RlID0gKGZpcnN0Qnl0ZUNvZGUgLSAxOTIgPDwgNikgKyBieXRlQXJyYXlbKytpbmRleF0gLSAxMjg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW5TdHJDb2RlID0gZmlyc3RCeXRlQ29kZTtcbiAgICAgIH1cbiAgICAgIHN0cltjdXJyZW50U3RySW5kZXgrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGN1cnJlblN0ckNvZGUpO1xuICAgIH1cbiAgICBzdHIubGVuZ3RoID0gY3VycmVudFN0ckluZGV4O1xuICAgIHJldHVybiBzdHIuam9pbignJyk7XG4gIH0sXG4gIHN0cmluZ1RvQXJyYXlidWZmZXI6IGZ1bmN0aW9uIHN0cmluZ1RvQXJyYXlidWZmZXIoc3RyaW5nKSB7XG4gICAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gICAgdmFyIGJ5dGVBcnJheSA9IG5ldyBBcnJheSg2ICogbGVuZ3RoKTtcbiAgICB2YXIgYWN0dWFsTGVuZ3RoID0gMDtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgIGlmIChjb2RlIDwgMHg4MCkge1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gY29kZTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ODAwKSB7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxOTIgKyAoY29kZSA+Pj4gNik7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSAmIDYzKTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4MTAwMDApIHtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDIyNCArIChjb2RlID4+PiAxMik7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSA+Pj4gNiAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlICYgNjMpO1xuICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHgyMDAwMDApIHtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDI0MCArIChjb2RlID4+PiAxOCk7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSA+Pj4gMTIgJiA2Myk7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSA+Pj4gNiAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlICYgNjMpO1xuICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHg0MDAwMDAwKSB7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAyNDggKyAoY29kZSA+Pj4gMjQpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgPj4+IDE4ICYgNjMpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgPj4+IDEyICYgNjMpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgPj4+IDYgJiA2Myk7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSAmIDYzKTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4NDAwMDAwMCkge1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMjUyICsgKGNvZGUgPj4+IDMwKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlID4+PiAyNCAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlID4+PiAxOCAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlID4+PiAxMiAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlID4+PiA2ICYgNjMpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgJiA2Myk7XG4gICAgICB9XG4gICAgfVxuICAgIGJ5dGVBcnJheS5sZW5ndGggPSBhY3R1YWxMZW5ndGg7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ5dGVBcnJheSkuYnVmZmVyO1xuICB9LFxuICBmb3JtYXRKc29uU3RyOiBmdW5jdGlvbiBmb3JtYXRKc29uU3RyKHN0cikge1xuICAgIGlmICghc3RyKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHZhciBjb25mID0gSlNPTi5wYXJzZShzdHIpO1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29uZik7XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICBpZiAoY29uZlt2XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgY29uZlt2XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY29uZjtcbiAgfVxufTtcblxufSx7fV0sNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9IVE1MQXVkaW9FbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEF1ZGlvRWxlbWVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbnZhciBBdWRpbyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9IVE1MQXVkaW9FbGVtZW50KSB7XG4gIF9pbmhlcml0cyhBdWRpbywgX0hUTUxBdWRpb0VsZW1lbnQpO1xuICBmdW5jdGlvbiBBdWRpbyh1cmwpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW8pO1xuICAgIHJldHVybiBfY2FsbFN1cGVyKHRoaXMsIEF1ZGlvLCBbdXJsXSk7XG4gIH1cbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhBdWRpbyk7XG59KF9IVE1MQXVkaW9FbGVtZW50MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vSFRNTEF1ZGlvRWxlbWVudFwiOjE1fV0sNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKGdsb2JhbCl7KGZ1bmN0aW9uICgpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdXRpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3V0aWxcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG4oZnVuY3Rpb24gKGdsb2JhbCkge1xuICAoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICAgIGRlZmluZShbXCJleHBvcnRzXCJdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKCh0eXBlb2YgZXhwb3J0cyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGV4cG9ydHMpKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZXhwb3J0cy5ub2RlTmFtZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgZmFjdG9yeShleHBvcnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmFjdG9yeShnbG9iYWwpO1xuICAgIH1cbiAgfSkoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGV4cG9ydHMuVVJMID0gZ2xvYmFsLlVSTCB8fCBnbG9iYWwud2Via2l0VVJMO1xuICAgIGlmIChnbG9iYWwuQmxvYiAmJiBnbG9iYWwuVVJMKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICB2YXIgQmxvYkJ1aWxkZXIgPSBnbG9iYWwuQmxvYkJ1aWxkZXIgfHwgZ2xvYmFsLldlYktpdEJsb2JCdWlsZGVyIHx8IGdsb2JhbC5Nb3pCbG9iQnVpbGRlciB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZ2V0X2NsYXNzID0gZnVuY3Rpb24gZ2V0X2NsYXNzKG9iamVjdCkge1xuICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KS5tYXRjaCgvXlxcW29iamVjdFxccyguKilcXF0kLylbMV07XG4gICAgICAgIH0sXG4gICAgICAgIEZha2VCbG9iQnVpbGRlciA9IGZ1bmN0aW9uIEJsb2JCdWlsZGVyKCkge1xuICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICAgIHRoaXMuX2FycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIEZha2VCbG9iID0gZnVuY3Rpb24gQmxvYihkYXRhLCB0eXBlLCBlbmNvZGluZykge1xuICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgdGhpcy5zaXplID0gZGF0YS5sZW5ndGg7XG4gICAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgICB0aGlzLmVuY29kaW5nID0gZW5jb2Rpbmc7XG4gICAgICAgICAgdGhpcy5fYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgRkJCX3Byb3RvID0gRmFrZUJsb2JCdWlsZGVyLnByb3RvdHlwZSxcbiAgICAgICAgRkJfcHJvdG8gPSBGYWtlQmxvYi5wcm90b3R5cGUsXG4gICAgICAgIEZpbGVSZWFkZXJTeW5jID0gZ2xvYmFsLkZpbGVSZWFkZXJTeW5jLFxuICAgICAgICBGaWxlRXhjZXB0aW9uID0gZnVuY3Rpb24gRmlsZUV4Y2VwdGlvbih0eXBlKSB7XG4gICAgICAgICAgdGhpcy5jb2RlID0gdGhpc1t0aGlzLm5hbWUgPSB0eXBlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsZV9leF9jb2RlcyA9IChcIk5PVF9GT1VORF9FUlIgU0VDVVJJVFlfRVJSIEFCT1JUX0VSUiBOT1RfUkVBREFCTEVfRVJSIEVOQ09ESU5HX0VSUiBcIiArIFwiTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSIElOVkFMSURfU1RBVEVfRVJSIFNZTlRBWF9FUlJcIikuc3BsaXQoXCIgXCIpLFxuICAgICAgICBmaWxlX2V4X2NvZGUgPSBmaWxlX2V4X2NvZGVzLmxlbmd0aCxcbiAgICAgICAgcmVhbF9VUkwgPSBnbG9iYWwuVVJMIHx8IGdsb2JhbC53ZWJraXRVUkwgfHwgZXhwb3J0cyxcbiAgICAgICAgcmVhbF9jcmVhdGVfb2JqZWN0X1VSTCA9IHJlYWxfVVJMLmNyZWF0ZU9iamVjdFVSTCxcbiAgICAgICAgcmVhbF9yZXZva2Vfb2JqZWN0X1VSTCA9IHJlYWxfVVJMLnJldm9rZU9iamVjdFVSTCxcbiAgICAgICAgVVJMID0gcmVhbF9VUkwsXG4gICAgICAgIGJ0b2EgPSBnbG9iYWwuYnRvYSxcbiAgICAgICAgYXRvYiA9IGdsb2JhbC5hdG9iLFxuICAgICAgICBBcnJheUJ1ZmZlciA9IGdsb2JhbC5BcnJheUJ1ZmZlcixcbiAgICAgICAgVWludDhBcnJheSA9IGdsb2JhbC5VaW50OEFycmF5LFxuICAgICAgICBvcmlnaW4gPSAvXltcXHctXSs6XFwvKlxcWz9bXFx3XFwuOi1dK1xcXT8oPzo6WzAtOV0rKT8vO1xuICAgICAgRmFrZUJsb2IuZmFrZSA9IEZCX3Byb3RvLmZha2UgPSB0cnVlO1xuICAgICAgd2hpbGUgKGZpbGVfZXhfY29kZS0tKSB7XG4gICAgICAgIEZpbGVFeGNlcHRpb24ucHJvdG90eXBlW2ZpbGVfZXhfY29kZXNbZmlsZV9leF9jb2RlXV0gPSBmaWxlX2V4X2NvZGUgKyAxO1xuICAgICAgfVxuICAgICAgaWYgKCFyZWFsX1VSTC5jcmVhdGVPYmplY3RVUkwpIHtcbiAgICAgICAgVVJMID0gZXhwb3J0cy5VUkwgPSBmdW5jdGlvbiAodXJpKSB7XG4gICAgICAgICAgdmFyIHVyaV9pbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLCBcImFcIiksXG4gICAgICAgICAgICB1cmlfb3JpZ2luO1xuICAgICAgICAgIHVyaV9pbmZvLmhyZWYgPSB1cmk7XG4gICAgICAgICAgaWYgKCEoXCJvcmlnaW5cIiBpbiB1cmlfaW5mbykpIHtcbiAgICAgICAgICAgIGlmICh1cmlfaW5mby5wcm90b2NvbC50b0xvd2VyQ2FzZSgpID09PSBcImRhdGE6XCIpIHtcbiAgICAgICAgICAgICAgdXJpX2luZm8ub3JpZ2luID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHVyaV9vcmlnaW4gPSB1cmkubWF0Y2gob3JpZ2luKTtcbiAgICAgICAgICAgICAgdXJpX2luZm8ub3JpZ2luID0gdXJpX29yaWdpbiAmJiB1cmlfb3JpZ2luWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdXJpX2luZm87XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBVUkwuY3JlYXRlT2JqZWN0VVJMID0gZnVuY3Rpb24gKGJsb2IpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBibG9iLnR5cGUsXG4gICAgICAgICAgZGF0YV9VUklfaGVhZGVyO1xuICAgICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHR5cGUgPSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChibG9iIGluc3RhbmNlb2YgRmFrZUJsb2IpIHtcbiAgICAgICAgICBkYXRhX1VSSV9oZWFkZXIgPSBcImRhdGE6XCIgKyB0eXBlO1xuICAgICAgICAgIGlmIChibG9iLmVuY29kaW5nID09PSBcImJhc2U2NFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YV9VUklfaGVhZGVyICsgXCI7YmFzZTY0LFwiICsgYmxvYi5kYXRhO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYmxvYi5lbmNvZGluZyA9PT0gXCJVUklcIikge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFfVVJJX2hlYWRlciArIFwiLFwiICsgZGVjb2RlVVJJQ29tcG9uZW50KGJsb2IuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChidG9hKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YV9VUklfaGVhZGVyICsgXCI7YmFzZTY0LFwiICsgYnRvYShibG9iLmRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YV9VUklfaGVhZGVyICsgXCIsXCIgKyBlbmNvZGVVUklDb21wb25lbnQoYmxvYi5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVhbF9jcmVhdGVfb2JqZWN0X1VSTCkge1xuICAgICAgICAgIHJldHVybiByZWFsX2NyZWF0ZV9vYmplY3RfVVJMLmNhbGwocmVhbF9VUkwsIGJsb2IpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCA9IGZ1bmN0aW9uIChvYmplY3RfVVJMKSB7XG4gICAgICAgIGlmIChvYmplY3RfVVJMLnN1YnN0cmluZygwLCA1KSAhPT0gXCJkYXRhOlwiICYmIHJlYWxfcmV2b2tlX29iamVjdF9VUkwpIHtcbiAgICAgICAgICByZWFsX3Jldm9rZV9vYmplY3RfVVJMLmNhbGwocmVhbF9VUkwsIG9iamVjdF9VUkwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgRkJCX3Byb3RvLmFwcGVuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBiYiA9IHRoaXMuZGF0YTtcbiAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHZhciBzdHIgPSBcIlwiLFxuICAgICAgICAgICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSksXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGJ1Zl9sZW4gPSBidWYubGVuZ3RoO1xuICAgICAgICAgIGZvciAoOyBpIDwgYnVmX2xlbjsgaSsrKSB7XG4gICAgICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBiYi5wdXNoKHN0cik7XG4gICAgICAgICAgdGhpcy5fYXJyYXlCdWZmZXIgPSBkYXRhLnNsaWNlKDApO1xuICAgICAgICB9IGVsc2UgaWYgKGdldF9jbGFzcyhkYXRhKSA9PT0gXCJCbG9iXCIgfHwgZ2V0X2NsYXNzKGRhdGEpID09PSBcIkZpbGVcIikge1xuICAgICAgICAgIGlmIChGaWxlUmVhZGVyU3luYykge1xuICAgICAgICAgICAgdmFyIGZyID0gbmV3IEZpbGVSZWFkZXJTeW5jKCk7XG4gICAgICAgICAgICBiYi5wdXNoKGZyLnJlYWRBc0JpbmFyeVN0cmluZyhkYXRhKSk7XG4gICAgICAgICAgICB0aGlzLl9hcnJheUJ1ZmZlciA9IGRhdGEuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEZpbGVFeGNlcHRpb24oXCJOT1RfUkVBREFCTEVfRVJSXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgRmFrZUJsb2IpIHtcbiAgICAgICAgICBpZiAoZGF0YS5lbmNvZGluZyA9PT0gXCJiYXNlNjRcIiAmJiBhdG9iKSB7XG4gICAgICAgICAgICBiYi5wdXNoKGF0b2IoZGF0YS5kYXRhKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLmVuY29kaW5nID09PSBcIlVSSVwiKSB7XG4gICAgICAgICAgICBiYi5wdXNoKGRlY29kZVVSSUNvbXBvbmVudChkYXRhLmRhdGEpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZW5jb2RpbmcgPT09IFwicmF3XCIpIHtcbiAgICAgICAgICAgIGJiLnB1c2goZGF0YS5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fYXJyYXlCdWZmZXIgPSBkYXRhLl9hcnJheUJ1ZmZlci5zbGljZSgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGRhdGEgKz0gXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYmIucHVzaCh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoZGF0YSkpKTtcbiAgICAgICAgICB0aGlzLl9hcnJheUJ1ZmZlciA9IF91dGlsW1wiZGVmYXVsdFwiXS5zdHJpbmdUb0FycmF5YnVmZmVyKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBGQkJfcHJvdG8uZ2V0QmxvYiA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHR5cGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBibG9iID0gbmV3IEZha2VCbG9iKHRoaXMuZGF0YS5qb2luKFwiXCIpLCB0eXBlLCBcInJhd1wiKTtcbiAgICAgICAgYmxvYi5fYXJyYXlCdWZmZXIgPSB0aGlzLl9hcnJheUJ1ZmZlcjtcbiAgICAgICAgcmV0dXJuIGJsb2I7XG4gICAgICB9O1xuICAgICAgRkJCX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJbb2JqZWN0IEJsb2JCdWlsZGVyXVwiO1xuICAgICAgfTtcbiAgICAgIEZCX3Byb3RvLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQsIHR5cGUpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBpZiAoYXJncyA8IDMpIHtcbiAgICAgICAgICB0eXBlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYmxvYiA9IG5ldyBGYWtlQmxvYih0aGlzLmRhdGEuc2xpY2Uoc3RhcnQsIGFyZ3MgPiAxID8gZW5kIDogdGhpcy5kYXRhLmxlbmd0aCksIHR5cGUsIHRoaXMuZW5jb2RpbmcpO1xuICAgICAgICB2YXIgYXJyYXlCdWZmZXIgPSB0aGlzLl9hcnJheUJ1ZmZlcjtcbiAgICAgICAgaWYgKGFycmF5QnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICBibG9iLl9hcnJheUJ1ZmZlciA9IHRoaXMuX2FycmF5QnVmZmVyLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9iO1xuICAgICAgfTtcbiAgICAgIEZCX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJbb2JqZWN0IEJsb2JdXCI7XG4gICAgICB9O1xuICAgICAgRkJfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICB9O1xuICAgICAgRkJfcHJvdG8uYXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcnJheUJ1ZmZlci5zbGljZSgwKTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gRmFrZUJsb2JCdWlsZGVyO1xuICAgIH0oKTtcbiAgICBleHBvcnRzLkJsb2IgPSBmdW5jdGlvbiAoYmxvYlBhcnRzLCBvcHRpb25zKSB7XG4gICAgICB2YXIgdHlwZSA9IG9wdGlvbnMgPyBvcHRpb25zLnR5cGUgfHwgXCJcIiA6IFwiXCI7XG4gICAgICB2YXIgYnVpbGRlciA9IG5ldyBCbG9iQnVpbGRlcigpO1xuICAgICAgaWYgKGJsb2JQYXJ0cykge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYmxvYlBhcnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgaWYgKFVpbnQ4QXJyYXkgJiYgYmxvYlBhcnRzW2ldIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgICAgICAgYnVpbGRlci5hcHBlbmQoYmxvYlBhcnRzW2ldLmJ1ZmZlcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1aWxkZXIuYXBwZW5kKGJsb2JQYXJ0c1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgYmxvYiA9IGJ1aWxkZXIuZ2V0QmxvYih0eXBlKTtcbiAgICAgIGlmICghYmxvYi5zbGljZSAmJiBibG9iLndlYmtpdFNsaWNlKSB7XG4gICAgICAgIGJsb2Iuc2xpY2UgPSBibG9iLndlYmtpdFNsaWNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJsb2I7XG4gICAgfTtcbiAgICB2YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgcmV0dXJuIG9iamVjdC5fX3Byb3RvX187XG4gICAgfTtcbiAgICBleHBvcnRzLkJsb2IucHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YobmV3IGV4cG9ydHMuQmxvYigpKTtcbiAgfSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmIHx8IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93IHx8IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsIHx8ICh2b2lkIDApLmNvbnRlbnQgfHwgdm9pZCAwKTtcblxufSkuY2FsbCh0aGlzKX0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxufSx7XCIuLi91dGlsXCI6M31dLDY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIERPTVRva2VuTGlzdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBET01Ub2tlbkxpc3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERPTVRva2VuTGlzdCk7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhET01Ub2tlbkxpc3QsIFt7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3QgYWRkIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29udGFpbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udGFpbnMoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3QgY29udGFpbnMgaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlbnRyaWVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3QgZW50cmllcyBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvckVhY2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9yRWFjaCgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCBmb3JFYWNoIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXRlbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpdGVtKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IGl0ZW0gaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJrZXlzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3Qga2V5cyBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3QgcmVtb3ZlIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVwbGFjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IHJlcGxhY2UgaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdXBwb3J0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdXBwb3J0cygpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCBzdXBwb3J0cyBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRvZ2dsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGUoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IHZhbHVlIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCB2YWx1ZXMgaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRE9NVG9rZW5MaXN0O1xufSgpO1xuXG59LHt9XSw3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0V2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgRGV2aWNlTW90aW9uRXZlbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfRXZlbnQpIHtcbiAgX2luaGVyaXRzKERldmljZU1vdGlvbkV2ZW50LCBfRXZlbnQpO1xuICBmdW5jdGlvbiBEZXZpY2VNb3Rpb25FdmVudChpbml0QXJncykge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGV2aWNlTW90aW9uRXZlbnQpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBEZXZpY2VNb3Rpb25FdmVudCwgWydkZXZpY2Vtb3Rpb24nXSk7XG4gICAgaWYgKGluaXRBcmdzKSB7XG4gICAgICBfdGhpcy5fYWNjZWxlcmF0aW9uID0gaW5pdEFyZ3MuYWNjZWxlcmF0aW9uID8gaW5pdEFyZ3MuYWNjZWxlcmF0aW9uIDoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB6OiAwXG4gICAgICB9O1xuICAgICAgX3RoaXMuX2FjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkgPSBpbml0QXJncy5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5ID8gaW5pdEFyZ3MuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eSA6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMFxuICAgICAgfTtcbiAgICAgIF90aGlzLl9yb3RhdGlvblJhdGUgPSBpbml0QXJncy5yb3RhdGlvblJhdGUgPyBpbml0QXJncy5yb3RhdGlvblJhdGUgOiB7XG4gICAgICAgIGFscGhhOiAwLFxuICAgICAgICBiZXRhOiAwLFxuICAgICAgICBnYW1tYTogMFxuICAgICAgfTtcbiAgICAgIF90aGlzLl9pbnRlcnZhbCA9IGluaXRBcmdzLmludGVydmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpcy5fYWNjZWxlcmF0aW9uID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB6OiAwXG4gICAgICB9O1xuICAgICAgX3RoaXMuX2FjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDBcbiAgICAgIH07XG4gICAgICBfdGhpcy5fcm90YXRpb25SYXRlID0ge1xuICAgICAgICBhbHBoYTogMCxcbiAgICAgICAgYmV0YTogMCxcbiAgICAgICAgZ2FtbWE6IDBcbiAgICAgIH07XG4gICAgICBfdGhpcy5faW50ZXJ2YWwgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKERldmljZU1vdGlvbkV2ZW50LCBbe1xuICAgIGtleTogXCJhY2NlbGVyYXRpb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hY2NlbGVyYXRpb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHlcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyb3RhdGlvblJhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yb3RhdGlvblJhdGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImludGVydmFsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWw7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBEZXZpY2VNb3Rpb25FdmVudDtcbn0oX0V2ZW50MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vRXZlbnRcIjoxMH1dLDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW8gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvXCIpKTtcbnZhciBfRm9udEZhY2VTZXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ZvbnRGYWNlU2V0XCIpKTtcbnZhciBfTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05vZGVcIikpO1xudmFyIF9Ob2RlTGlzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTm9kZUxpc3RcIikpO1xudmFyIF9IVE1MQW5jaG9yRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEFuY2hvckVsZW1lbnRcIikpO1xudmFyIF9IVE1MRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnRcIikpO1xudmFyIF9IVE1MSHRtbEVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxIdG1sRWxlbWVudFwiKSk7XG52YXIgX0hUTUxCb2R5RWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEJvZHlFbGVtZW50XCIpKTtcbnZhciBfSFRNTEhlYWRFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MSGVhZEVsZW1lbnRcIikpO1xudmFyIF9IVE1MQ2FudmFzRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTENhbnZhc0VsZW1lbnRcIikpO1xudmFyIF9IVE1MVmlkZW9FbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MVmlkZW9FbGVtZW50XCIpKTtcbnZhciBfSFRNTFNjcmlwdEVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxTY3JpcHRFbGVtZW50XCIpKTtcbnZhciBfSFRNTFN0eWxlRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTFN0eWxlRWxlbWVudFwiKSk7XG52YXIgX0hUTUxJbnB1dEVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxJbnB1dEVsZW1lbnRcIikpO1xudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL1dlYWtNYXBcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2dldCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCk7IH0gZWxzZSB7IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7IGlmICghYmFzZSkgcmV0dXJuOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpOyBpZiAoZGVzYy5nZXQpIHsgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7IH0gcmV0dXJuIGRlc2MudmFsdWU7IH07IH0gcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkgeyB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkgeyBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7IH0gcmV0dXJuIG9iamVjdDsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIF9odG1sID0gbmV3IF9IVE1MSHRtbEVsZW1lbnRbXCJkZWZhdWx0XCJdKCk7XG52YXIgRG9jdW1lbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfTm9kZSkge1xuICBfaW5oZXJpdHMoRG9jdW1lbnQsIF9Ob2RlKTtcbiAgZnVuY3Rpb24gRG9jdW1lbnQoKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEb2N1bWVudCk7XG4gICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIERvY3VtZW50KTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaGVhZFwiLCBuZXcgX0hUTUxIZWFkRWxlbWVudFtcImRlZmF1bHRcIl0oX2h0bWwpKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiYm9keVwiLCBuZXcgX0hUTUxCb2R5RWxlbWVudFtcImRlZmF1bHRcIl0oX2h0bWwpKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZm9udHNcIiwgbmV3IF9Gb250RmFjZVNldFtcImRlZmF1bHRcIl0oKSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNvb2tpZVwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZG9jdW1lbnRFbGVtZW50XCIsIF9odG1sKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVhZHlTdGF0ZVwiLCBcImNvbXBsZXRlXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ2aXNpYmlsaXR5U3RhdGVcIiwgXCJ2aXNpYmxlXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJoaWRkZW5cIiwgZmFsc2UpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdHlsZVwiLCB7fSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImxvY2F0aW9uXCIsIHdpbmRvdy5sb2NhdGlvbik7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9udG91Y2hzdGFydFwiLCBudWxsKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib250b3VjaG1vdmVcIiwgbnVsbCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9udG91Y2hlbmRcIiwgbnVsbCk7XG4gICAgX2h0bWwuYXBwZW5kQ2hpbGQoX3RoaXMuaGVhZCk7XG4gICAgX2h0bWwuYXBwZW5kQ2hpbGQoX3RoaXMuYm9keSk7XG4gICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkuc2NyaXB0cyA9IFtdO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoRG9jdW1lbnQsIFt7XG4gICAga2V5OiBcImNoYXJhY3RlclNldFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFwiVVRGLThcIjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2NyaXB0c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc2NyaXB0cy5zbGljZSgwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlRWxlbWVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdGFnTmFtZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICBpZiAodGFnTmFtZSA9PT0gJ0NBTlZBUycpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfSFRNTENhbnZhc0VsZW1lbnRbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09ICdJTUcnKSB7XG4gICAgICAgIHJldHVybiBuZXcgSW1hZ2UoKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gJ1ZJREVPJykge1xuICAgICAgICByZXR1cm4gbmV3IF9IVE1MVmlkZW9FbGVtZW50W1wiZGVmYXVsdFwiXSgpO1xuICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSAnU0NSSVBUJykge1xuICAgICAgICByZXR1cm4gbmV3IF9IVE1MU2NyaXB0RWxlbWVudFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJJTlBVVFwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0hUTUxJbnB1dEVsZW1lbnRbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwiQVVESU9cIikge1xuICAgICAgICByZXR1cm4gbmV3IF9BdWRpb1tcImRlZmF1bHRcIl0oKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJTVFlMRVwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0hUTUxTdHlsZUVsZW1lbnRbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwiQVwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0hUTUxBbmNob3JFbGVtZW50W1wiZGVmYXVsdFwiXSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBfSFRNTEVsZW1lbnRbXCJkZWZhdWx0XCJdKHRhZ05hbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVFbGVtZW50TlNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRWxlbWVudChxdWFsaWZpZWROYW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlRXZlbnQodHlwZSkge1xuICAgICAgaWYgKHdpbmRvd1t0eXBlXSkge1xuICAgICAgICByZXR1cm4gbmV3IHdpbmRvd1t0eXBlXSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZVRleHROb2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVRleHROb2RlKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoKSBpcyBub3Qgc3VwcG9ydCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRpc3BhdGNoRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2hFdmVudCgpIHtcbiAgICAgIGlmIChfaHRtbC5kaXNwYXRjaEV2ZW50LmFwcGx5KF9odG1sLCBhcmd1bWVudHMpKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihEb2N1bWVudC5wcm90b3R5cGUpLCBcImRpc3BhdGNoRXZlbnRcIiwgdGhpcykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kQ2hpbGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kQ2hpbGQobm9kZSkge1xuICAgICAgdmFyIG5vZGVOYW1lID0gbm9kZS5ub2RlTmFtZTtcbiAgICAgIGlmIChub2RlTmFtZSA9PT0gXCJTQ1JJUFRcIikge1xuICAgICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLnNjcmlwdHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihEb2N1bWVudC5wcm90b3R5cGUpLCBcImFwcGVuZENoaWxkXCIsIHRoaXMpLmNhbGwodGhpcywgbm9kZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUNoaWxkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUNoaWxkKG5vZGUpIHtcbiAgICAgIHZhciBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWU7XG4gICAgICBpZiAobm9kZU5hbWUgPT09IFwiU0NSSVBUXCIpIHtcbiAgICAgICAgdmFyIHNjcmlwdHMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLnNjcmlwdHM7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMCwgbGVuZ3RoID0gc2NyaXB0cy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICAgICAgaWYgKG5vZGUgPT09IHNjcmlwdHNbaW5kZXhdKSB7XG4gICAgICAgICAgICBzY3JpcHRzLnNsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKERvY3VtZW50LnByb3RvdHlwZSksIFwicmVtb3ZlQ2hpbGRcIiwgdGhpcykuY2FsbCh0aGlzLCBub2RlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RWxlbWVudEJ5SWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWxlbWVudEJ5SWQoaWQpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBcIlVuY2F1Z2h0IFR5cGVFcnJvcjogRmFpbGVkIHRvIGV4ZWN1dGUgJ2dldEVsZW1lbnRCeUlkJyBvbiAnRG9jdW1lbnQnOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCI7XG4gICAgICB9XG4gICAgICB2YXIgcm9vdEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50RWxlbWVudDtcbiAgICAgIHZhciBlbGVtZW50QXJyID0gW10uY29uY2F0KHJvb3RFbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgdmFyIGVsZW1lbnQ7XG4gICAgICBpZiAoaWQgPT09IFwiY2FudmFzXCIgfHwgaWQgPT09IFwiZ2xjYW52YXNcIikge1xuICAgICAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnRBcnIucG9wKCkpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PT0gXCJjYW52YXNcIiB8fCBlbGVtZW50LmlkID09PSBcImdsY2FudmFzXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbGVtZW50QXJyID0gZWxlbWVudEFyci5jb25jYXQoZWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50QXJyLnBvcCgpKSB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxlbWVudEFyciA9IGVsZW1lbnRBcnIuY29uY2F0KGVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlDbGFzc05hbWUobmFtZXMpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBcIlVuY2F1Z2h0IFR5cGVFcnJvcjogRmFpbGVkIHRvIGV4ZWN1dGUgJ2dldEVsZW1lbnRzQnlDbGFzc05hbWUnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbmFtZXMgIT09IFwic3RyaW5nXCIgJiYgbmFtZXMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfTm9kZUxpc3RbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5kb2N1bWVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEVsZW1lbnRzQnlUYWdOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBcIlVuY2F1Z2h0IFR5cGVFcnJvcjogRmFpbGVkIHRvIGV4ZWN1dGUgJ2dldEVsZW1lbnRzQnlUYWdOYW1lJyBvbiAnRG9jdW1lbnQnOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCI7XG4gICAgICB9XG4gICAgICB0YWdOYW1lID0gdGFnTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgdmFyIHJvb3RFbGVtZW50ID0gdGhpcy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIHN3aXRjaCAodGFnTmFtZSkge1xuICAgICAgICBjYXNlIFwiSEVBRFwiOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRvY3VtZW50LmhlYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIFwiQk9EWVwiOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQocm9vdEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSkpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEVsZW1lbnRzQnlOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlOYW1lKG5hbWUpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBcIlVuY2F1Z2h0IFR5cGVFcnJvcjogRmFpbGVkIHRvIGV4ZWN1dGUgJ2dldEVsZW1lbnRzQnlOYW1lJyBvbiAnRG9jdW1lbnQnOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCI7XG4gICAgICB9XG4gICAgICB2YXIgZWxlbWVudEFyciA9IFtdLmNvbmNhdCh0aGlzLmNoaWxkTm9kZXMpO1xuICAgICAgdmFyIHJlc3VsdCA9IG5ldyBfTm9kZUxpc3RbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB2YXIgZWxlbWVudDtcbiAgICAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudEFyci5wb3AoKSkge1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudEFyciA9IGVsZW1lbnRBcnIuY29uY2F0KGVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJxdWVyeVNlbGVjdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgXCJVbmNhdWdodCBUeXBlRXJyb3I6IEZhaWxlZCB0byBleGVjdXRlICdxdWVyeVNlbGVjdG9yQWxsJyBvbiAnRG9jdW1lbnQnOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCI7XG4gICAgICB9XG4gICAgICB2YXIgbm9kZUxpc3QgPSBuZXcgX05vZGVMaXN0W1wiZGVmYXVsdFwiXSgpO1xuICAgICAgc3dpdGNoIChzZWxlY3RvcnMpIHtcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgY2FzZSBOYU46XG4gICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgY2FzZSBcIlwiOlxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvcnMgIT09IFwic3RyaW5nXCIgJiYgc2VsZWN0b3JzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgRE9NRXhjZXB0aW9uOiBGYWlsZWQgdG8gZXhlY3V0ZSAncXVlcnlTZWxlY3RvckFsbCcgb24gJ0RvY3VtZW50JzogJ1wiICsgc2VsZWN0b3JzICsgXCInIGlzIG5vdCBhIHZhbGlkIHNlbGVjdG9yLlwiO1xuICAgICAgfVxuICAgICAgdmFyIHJlZyA9IC9eW0EtWmEtel0rJC87XG4gICAgICB2YXIgcmVzdWx0ID0gc2VsZWN0b3JzLm1hdGNoKHJlZyk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbGVjdG9ycyk7XG4gICAgICB9XG4gICAgICByZWcgPSAvXlxcLltBLVphLXokX11bQS1aYS16JF8wLTlcXC0gXSokLztcbiAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB2YXIgc2VsZWN0b3JBcnIgPSBzZWxlY3RvcnMuc3BsaXQoXCIgXCIpO1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBzZWxlY3RvckFyci5zaGlmdCgpO1xuICAgICAgICBub2RlTGlzdCA9IHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZWxlY3Rvci5zdWJzdHIoMSkpO1xuICAgICAgICB2YXIgbGVuZ3RoID0gc2VsZWN0b3JBcnIubGVuZ3RoO1xuICAgICAgICBpZiAobGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZWN0b3JzID0gc2VsZWN0b3JBcnIuam9pbihcIiBcIik7XG4gICAgICAgICAgbGVuZ3RoID0gbm9kZUxpc3QubGVuZ3RoO1xuICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBzdWJOb2RlTGlzdCA9IG5vZGVMaXN0W2luZGV4XS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycyk7XG4gICAgICAgICAgICBpZiAoc3ViTm9kZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdWJOb2RlTGlzdFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGVMaXN0WzBdO1xuICAgICAgfVxuICAgICAgcmVnID0gL14jW0EtWmEteiRfXVtBLVphLXokXzAtOVxcLV0qJC87XG4gICAgICByZXN1bHQgPSBzZWxlY3RvcnMubWF0Y2gocmVnKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnRCeUlkKHNlbGVjdG9ycy5zdWJzdHIoMSkpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIG5vZGVMaXN0LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzZWxlY3RvcnMgPT09IFwiKlwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbGVjdG9ycyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZUxpc3RbMF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInF1ZXJ5U2VsZWN0b3JBbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBcIlVuY2F1Z2h0IFR5cGVFcnJvcjogRmFpbGVkIHRvIGV4ZWN1dGUgJ3F1ZXJ5U2VsZWN0b3JBbGwnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cbiAgICAgIHZhciBub2RlTGlzdCA9IG5ldyBfTm9kZUxpc3RbXCJkZWZhdWx0XCJdKCk7XG4gICAgICBzd2l0Y2ggKHNlbGVjdG9ycykge1xuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICBjYXNlIE5hTjpcbiAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICBjYXNlIFwiXCI6XG4gICAgICAgICAgcmV0dXJuIG5vZGVMaXN0O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvcnMgIT09IFwic3RyaW5nXCIgJiYgc2VsZWN0b3JzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgRE9NRXhjZXB0aW9uOiBGYWlsZWQgdG8gZXhlY3V0ZSAncXVlcnlTZWxlY3RvckFsbCcgb24gJ0RvY3VtZW50JzogJ1wiICsgc2VsZWN0b3JzICsgXCInIGlzIG5vdCBhIHZhbGlkIHNlbGVjdG9yLlwiO1xuICAgICAgfVxuICAgICAgdmFyIHJlZyA9IC9eW0EtWmEtel0rJC87XG4gICAgICB2YXIgcmVzdWx0ID0gc2VsZWN0b3JzLm1hdGNoKHJlZyk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbGVjdG9ycyk7XG4gICAgICB9XG4gICAgICByZWcgPSAvXlxcLltBLVphLXokX11bQS1aYS16JF8wLTlcXC1dKiQvO1xuICAgICAgcmVzdWx0ID0gc2VsZWN0b3JzLm1hdGNoKHJlZyk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsZWN0b3JzLnN1YnN0cigxKSk7XG4gICAgICB9XG4gICAgICByZWcgPSAvXiNbQS1aYS16JF9dW0EtWmEteiRfMC05XFwtXSokLztcbiAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLnN1YnN0cigxKSk7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgbm9kZUxpc3QucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdG9ycyA9PT0gXCIqXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3JzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlTGlzdDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIERvY3VtZW50O1xufShfTm9kZTJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0F1ZGlvXCI6NCxcIi4vRm9udEZhY2VTZXRcIjoxMyxcIi4vSFRNTEFuY2hvckVsZW1lbnRcIjoxNCxcIi4vSFRNTEJvZHlFbGVtZW50XCI6MTYsXCIuL0hUTUxDYW52YXNFbGVtZW50XCI6MTcsXCIuL0hUTUxFbGVtZW50XCI6MTgsXCIuL0hUTUxIZWFkRWxlbWVudFwiOjE5LFwiLi9IVE1MSHRtbEVsZW1lbnRcIjoyMCxcIi4vSFRNTElucHV0RWxlbWVudFwiOjIyLFwiLi9IVE1MU2NyaXB0RWxlbWVudFwiOjI0LFwiLi9IVE1MU3R5bGVFbGVtZW50XCI6MjUsXCIuL0hUTUxWaWRlb0VsZW1lbnRcIjoyNixcIi4vTm9kZVwiOjMyLFwiLi9Ob2RlTGlzdFwiOjMzLFwiLi91dGlsL1dlYWtNYXBcIjo1N31dLDk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05vZGVcIikpO1xudmFyIF9Ob2RlTGlzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTm9kZUxpc3RcIikpO1xudmFyIF9ET01Ub2tlbkxpc3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RPTVRva2VuXFx1MjAwQkxpc3RcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIEVsZW1lbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfTm9kZSkge1xuICBfaW5oZXJpdHMoRWxlbWVudCwgX05vZGUpO1xuICBmdW5jdGlvbiBFbGVtZW50KHRhZ05hbWUpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVsZW1lbnQpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBFbGVtZW50LCBbdGFnTmFtZV0pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjbGFzc05hbWVcIiwgJycpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjaGlsZHJlblwiLCBbXSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNsYXNzTGlzdFwiLCBuZXcgX0RPTVRva2VuTGlzdFtcImRlZmF1bHRcIl0oKSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInZhbHVlXCIsIDEpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjb250ZW50XCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzY3JvbGxMZWZ0XCIsIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzY3JvbGxUb3BcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNsaWVudExlZnRcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNsaWVudFRvcFwiLCAwKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEVsZW1lbnQsIFt7XG4gICAga2V5OiBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICByaWdodDogd2luZG93LmlubmVyV2lkdGhcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEVsZW1lbnRzQnlUYWdOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpIHtcbiAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIHZhciBjaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzO1xuICAgICAgdmFyIGxlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGNoaWxkTm9kZXNbaW5kZXhdO1xuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSB0YWdOYW1lIHx8IHRhZ05hbWUgPT09IFwiKlwiKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEVsZW1lbnRzQnlDbGFzc05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lcykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudHNCeUNsYXNzTmFtZScgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdCA9IG5ldyBfTm9kZUxpc3RbXCJkZWZhdWx0XCJdKCk7XG4gICAgICBpZiAodHlwZW9mIG5hbWVzICE9PSBcInN0cmluZ1wiICYmIG5hbWVzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICB2YXIgZWxlbWVudEFyciA9IFtdLmNvbmNhdCh0aGlzLmNoaWxkTm9kZXMpO1xuICAgICAgdmFyIGVsZW1lbnQ7XG4gICAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnRBcnIucG9wKCkpIHtcbiAgICAgICAgdmFyIGNsYXNzU3RyID0gZWxlbWVudFtcImNsYXNzXCJdO1xuICAgICAgICBpZiAoY2xhc3NTdHIpIHtcbiAgICAgICAgICB2YXIgY2xhc3NBcnIgPSBjbGFzc1N0ci5zcGxpdChcIiBcIik7XG4gICAgICAgICAgdmFyIGxlbmd0aCA9IGNsYXNzQXJyLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NBcnJbaW5kZXhdID09PSBuYW1lcykge1xuICAgICAgICAgICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnRBcnIgPSBlbGVtZW50QXJyLmNvbmNhdChlbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicXVlcnlTZWxlY3RvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBxdWVyeVNlbGVjdG9yKHNlbGVjdG9ycykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAncXVlcnlTZWxlY3RvckFsbCcgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuICAgICAgdmFyIG5vZGVMaXN0ID0gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIHN3aXRjaCAoc2VsZWN0b3JzKSB7XG4gICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIGNhc2UgTmFOOlxuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3JzICE9PSBcInN0cmluZ1wiICYmIHNlbGVjdG9ycyBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICB0aHJvdyBcIlVuY2F1Z2h0IERPTUV4Y2VwdGlvbjogRmFpbGVkIHRvIGV4ZWN1dGUgJ3F1ZXJ5U2VsZWN0b3JBbGwnIG9uICdEb2N1bWVudCc6ICdcIiArIHNlbGVjdG9ycyArIFwiJyBpcyBub3QgYSB2YWxpZCBzZWxlY3Rvci5cIjtcbiAgICAgIH1cbiAgICAgIHZhciByZWcgPSAvXltBLVphLXpdKyQvO1xuICAgICAgdmFyIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWxlY3RvcnMpO1xuICAgICAgfVxuICAgICAgcmVnID0gL14uW0EtWmEteiRfXVtBLVphLXokXzAtOVxcLSBdKiQvO1xuICAgICAgcmVzdWx0ID0gc2VsZWN0b3JzLm1hdGNoKHJlZyk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHZhciBzZWxlY3RvckFyciA9IHNlbGVjdG9ycy5zcGxpdChcIiBcIik7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yQXJyLnNoaWZ0KCk7XG4gICAgICAgIG5vZGVMaXN0ID0gdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yLnN1YnN0cigxKSk7XG4gICAgICAgIHZhciBsZW5ndGggPSBzZWxlY3RvckFyci5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGgpIHtcbiAgICAgICAgICBzZWxlY3RvcnMgPSBzZWxlY3RvckFyci5qb2luKFwiIFwiKTtcbiAgICAgICAgICBsZW5ndGggPSBub2RlTGlzdC5sZW5ndGg7XG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIHN1Yk5vZGVMaXN0ID0gbm9kZUxpc3RbaW5kZXhdLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzKTtcbiAgICAgICAgICAgIGlmIChzdWJOb2RlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN1Yk5vZGVMaXN0WzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZUxpc3RbMF07XG4gICAgICB9XG4gICAgICByZWcgPSAvXiNbQS1aYS16JF9dW0EtWmEteiRfMC05XFwtXSokLztcbiAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLnN1YnN0cigxKSk7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgbm9kZUxpc3QucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdG9ycyA9PT0gXCIqXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3JzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlTGlzdFswXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVxdWVzdEZ1bGxzY3JlZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdEZ1bGxzY3JlZW4oKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUF0dHJpYnV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpIHtcbiAgICAgIGlmIChhdHRyTmFtZSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiB0aGlzW1wic3R5bGVcIl0pIHtcbiAgICAgICAgICB0aGlzW1wic3R5bGVcIl1bc3R5bGVOYW1lXSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXNbYXR0ck5hbWVdID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0QXR0cmlidXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgICAgaWYgKG5hbWUgPT09IFwic3R5bGVcIikge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09IFwidW5kZWZpbmVkXCIgfHwgdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIHRoaXNbXCJzdHlsZVwiXSkge1xuICAgICAgICAgICAgdGhpc1tcInN0eWxlXCJdW3N0eWxlTmFtZV0gPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xccyovZywgXCJcIik7XG4gICAgICAgICAgdmFyIHZhbHVlQXJyYXkgPSB2YWx1ZS5zcGxpdChcIjtcIik7XG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdmFsdWVBcnJheSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlQXJyYXlbaW5kZXhdICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgdmFyIHZhbHVlVGVtcCA9IHZhbHVlQXJyYXlbaW5kZXhdLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgICAgdGhpc1tcInN0eWxlXCJdW3ZhbHVlVGVtcFswXV0gPSB2YWx1ZVRlbXBbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEF0dHJpYnV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICAgICAgdmFyIGF0dHJpYnV0ZVZhbHVlID0gbnVsbDtcbiAgICAgIGlmIChuYW1lID09IFwic3R5bGVcIikge1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXNbXCJzdHlsZVwiXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXNbbmFtZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEF0dHJpYnV0ZU5TXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZU5TKG5zLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmx1clwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJsYXN0Q2hpbGRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBsYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgcmV0dXJuIGxhc3RDaGlsZCA/IGxhc3RDaGlsZCA6IHRoaXMuaW5uZXJIVE1MID8gbmV3IEhUTUxFbGVtZW50KCkgOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpcnN0Q2hpbGRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgIHJldHVybiBjaGlsZCA/IGNoaWxkIDogdGhpcy5pbm5lckhUTUwgPyBuZXcgSFRNTEVsZW1lbnQoKSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmlyc3RFbGVtZW50Q2hpbGRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgIHJldHVybiBjaGlsZCA/IGNoaWxkIDogdGhpcy5pbm5lckhUTUwgPyBuZXcgSFRNTEVsZW1lbnQoKSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xpZW50SGVpZ2h0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgc3R5bGUgPSB0aGlzLnN0eWxlIHx8IHt9O1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHN0eWxlLmZvbnRTaXplIHx8IFwiMFwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidGFnTmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZU5hbWU7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBFbGVtZW50O1xufShfTm9kZTJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0RPTVRva2Vu4oCLTGlzdFwiOjYsXCIuL05vZGVcIjozMixcIi4vTm9kZUxpc3RcIjozM31dLDEwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbnZhciBFdmVudCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFdmVudCh0eXBlLCBldmVudEluaXQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnQpO1xuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgIHRoaXMuX3RhcmdldCA9IG51bGw7XG4gICAgdGhpcy5fZXZlbnRQaGFzZSA9IDI7XG4gICAgdGhpcy5fY3VycmVudFRhcmdldCA9IG51bGw7XG4gICAgdGhpcy5fY2FuY2VsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9zdG9wcGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcGFzc2l2ZUxpc3RlbmVyID0gbnVsbDtcbiAgICB0aGlzLl90aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhFdmVudCwgW3tcbiAgICBrZXk6IFwidHlwZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRhcmdldFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3VycmVudFRhcmdldFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRUYXJnZXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVHJ1c3RlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lU3RhbXBcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90aW1lU3RhbXA7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMudHlwZS5pbmRleE9mKFwidG91Y2hcIikpIHtcbiAgICAgICAgdGhpcy5fdGltZVN0YW1wID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvc2VkUGF0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb3NlZFBhdGgoKSB7XG4gICAgICB2YXIgY3VycmVudFRhcmdldCA9IHRoaXMuX2N1cnJlbnRUYXJnZXQ7XG4gICAgICBpZiAoY3VycmVudFRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICByZXR1cm4gW2N1cnJlbnRUYXJnZXRdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJldmVudFBoYXNlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZXZlbnRQaGFzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcFByb3BhZ2F0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIHtcbiAgICAgIHRoaXMuX3N0b3BwZWQgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJidWJibGVzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhbmNlbGFibGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwcmV2ZW50RGVmYXVsdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICAgIGlmICh0aGlzLl9wYXNzaXZlTGlzdGVuZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiRXZlbnQjcHJldmVudERlZmF1bHQoKSB3YXMgY2FsbGVkIGZyb20gYSBwYXNzaXZlIGxpc3RlbmVyOlwiLCB0aGlzLl9wYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY2FuY2VsYWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jYW5jZWxlZCA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHRQcmV2ZW50ZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYW5jZWxlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9zZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEV2ZW50O1xufSgpO1xuRXZlbnQuTk9ORSA9IDA7XG5FdmVudC5DQVBUVVJJTkdfUEhBU0UgPSAxO1xuRXZlbnQuQVRfVEFSR0VUID0gMjtcbkV2ZW50LkJVQkJMSU5HX1BIQVNFID0gMztcblxufSx7fV0sMTE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfVG91Y2hFdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVG91Y2hFdmVudFwiKSk7XG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvV2Vha01hcFwiKSk7XG52YXIgX0RldmljZU1vdGlvbkV2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9EZXZpY2VNb3Rpb25FdmVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIF9saXN0ZW5lclN0YXQgPSB7fTtcbnZhciBfb25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gX29uVG91Y2hTdGFydChlKSB7XG4gIHZhciBldmVudCA9IG5ldyBfVG91Y2hFdmVudFtcImRlZmF1bHRcIl0oXCJ0b3VjaHN0YXJ0XCIpO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG59O1xudmFyIF9vblRvdWNoTW92ZSA9IGZ1bmN0aW9uIF9vblRvdWNoTW92ZShlKSB7XG4gIHZhciBldmVudCA9IG5ldyBfVG91Y2hFdmVudFtcImRlZmF1bHRcIl0oXCJ0b3VjaG1vdmVcIik7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbn07XG52YXIgX29uVG91Y2hDYW5jZWwgPSBmdW5jdGlvbiBfb25Ub3VjaENhbmNlbChlKSB7XG4gIHZhciBldmVudCA9IG5ldyBfVG91Y2hFdmVudFtcImRlZmF1bHRcIl0oXCJ0b3VjaGNhbmNlbFwiKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xufTtcbnZhciBfb25Ub3VjaEVuZCA9IGZ1bmN0aW9uIF9vblRvdWNoRW5kKGUpIHtcbiAgdmFyIGV2ZW50ID0gbmV3IF9Ub3VjaEV2ZW50W1wiZGVmYXVsdFwiXShcInRvdWNoZW5kXCIpO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG59O1xudmFyIF9zeXN0ZW1JbmZvID0gcmFsLmdldFN5c3RlbUluZm9TeW5jKCk7XG52YXIgX2lzQW5kcm9pZCA9IF9zeXN0ZW1JbmZvLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkgPT09IFwiYW5kcm9pZFwiO1xudmFyIF9hbHBoYSA9IDAuODtcbnZhciBfZ3Jhdml0eSA9IFswLCAwLCAwXTtcbnZhciBfb25BY2NlbGVyb21ldGVyQ2hhbmdlID0gZnVuY3Rpb24gX29uQWNjZWxlcm9tZXRlckNoYW5nZShlKSB7XG4gIGlmIChfaXNBbmRyb2lkKSB7XG4gICAgZS54ICo9IC0xMDtcbiAgICBlLnkgKj0gLTEwO1xuICAgIGUueiAqPSAtMTA7XG4gIH0gZWxzZSB7XG4gICAgZS54ICo9IDEwO1xuICAgIGUueSAqPSAxMDtcbiAgICBlLnogKj0gMTA7XG4gIH1cbiAgX2dyYXZpdHlbMF0gPSBfYWxwaGEgKiBfZ3Jhdml0eVswXSArICgxIC0gX2FscGhhKSAqIGUueDtcbiAgX2dyYXZpdHlbMV0gPSBfYWxwaGEgKiBfZ3Jhdml0eVsxXSArICgxIC0gX2FscGhhKSAqIGUueTtcbiAgX2dyYXZpdHlbMl0gPSBfYWxwaGEgKiBfZ3Jhdml0eVsyXSArICgxIC0gX2FscGhhKSAqIGUuejtcbiAgdmFyIGV2ZW50ID0gbmV3IF9EZXZpY2VNb3Rpb25FdmVudFtcImRlZmF1bHRcIl0oe1xuICAgIGFjY2VsZXJhdGlvbjoge1xuICAgICAgeDogZS54IC0gX2dyYXZpdHlbMF0sXG4gICAgICB5OiBlLnkgLSBfZ3Jhdml0eVsxXSxcbiAgICAgIHo6IGUueiAtIF9ncmF2aXR5WzJdXG4gICAgfSxcbiAgICBhY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5OiB7XG4gICAgICB4OiBlLngsXG4gICAgICB5OiBlLnksXG4gICAgICB6OiBlLnpcbiAgICB9XG4gIH0pO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xudmFyIEV2ZW50VGFyZ2V0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEV2ZW50VGFyZ2V0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudFRhcmdldCk7XG4gICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLnNldCh0aGlzLCB7fSk7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEV2ZW50VGFyZ2V0LCBbe1xuICAgIGtleTogXCJhZGRFdmVudExpc3RlbmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcyk7XG4gICAgICBpZiAoIXByaXZhdGVUaGlzKSB7XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5zZXQodGhpcywgcHJpdmF0ZVRoaXMgPSB7fSk7XG4gICAgICB9XG4gICAgICB2YXIgZXZlbnRzID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChwcml2YXRlVGhpcyk7XG4gICAgICBpZiAoIWV2ZW50cykge1xuICAgICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uc2V0KHByaXZhdGVUaGlzLCBldmVudHMgPSB7fSk7XG4gICAgICB9XG4gICAgICBpZiAoIWV2ZW50c1t0eXBlXSkge1xuICAgICAgICBldmVudHNbdHlwZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIHZhciBsaXN0ZW5lckFycmF5ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgdmFyIGxlbmd0aCA9IGxpc3RlbmVyQXJyYXkubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICBpZiAobGlzdGVuZXJBcnJheVtpbmRleF0gPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0ZW5lckFycmF5LnB1c2gobGlzdGVuZXIpO1xuICAgICAgaWYgKF9saXN0ZW5lclN0YXRbdHlwZV0pIHtcbiAgICAgICAgKytfbGlzdGVuZXJTdGF0W3R5cGVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2xpc3RlbmVyU3RhdFt0eXBlXSA9IDE7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgXCJ0b3VjaHN0YXJ0XCI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJhbC5vblRvdWNoU3RhcnQoX29uVG91Y2hTdGFydCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJ0b3VjaG1vdmVcIjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmFsLm9uVG91Y2hNb3ZlKF9vblRvdWNoTW92ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJ0b3VjaGNhbmNlbFwiOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByYWwub25Ub3VjaENhbmNlbChfb25Ub3VjaENhbmNlbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJ0b3VjaGVuZFwiOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByYWwub25Ub3VjaEVuZChfb25Ub3VjaEVuZCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJkZXZpY2Vtb3Rpb25cIjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmFsLm9uQWNjZWxlcm9tZXRlckNoYW5nZShfb25BY2NlbGVyb21ldGVyQ2hhbmdlKTtcbiAgICAgICAgICAgICAgcmFsLnN0YXJ0QWNjZWxlcm9tZXRlcigpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuY2FwdHVyZSkge31cbiAgICAgIGlmIChvcHRpb25zLm9uY2UpIHt9XG4gICAgICBpZiAob3B0aW9ucy5wYXNzaXZlKSB7fVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVFdmVudExpc3RlbmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcyk7XG4gICAgICB2YXIgZXZlbnRzO1xuICAgICAgaWYgKHByaXZhdGVUaGlzKSB7XG4gICAgICAgIGV2ZW50cyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQocHJpdmF0ZVRoaXMpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50cykge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuICAgICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IGxpc3RlbmVycy5sZW5ndGg7IGktLTsgaSA+IDApIHtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnNbaV0gPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGlmICgtLV9saXN0ZW5lclN0YXRbdHlwZV0gPT09IDApIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaHN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByYWwub2ZmVG91Y2hTdGFydChfb25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY2FzZSBcInRvdWNobW92ZVwiOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmFsLm9mZlRvdWNoTW92ZShfb25Ub3VjaE1vdmUpO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjYXNlIFwidG91Y2hjYW5jZWxcIjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJhbC5vZmZUb3VjaENhbmNlbChfb25Ub3VjaENhbmNlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaGVuZFwiOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmFsLm9mZlRvdWNoRW5kKF9vblRvdWNoRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY2FzZSBcImRldmljZW1vdGlvblwiOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmFsLm9mZkFjY2VsZXJvbWV0ZXJDaGFuZ2UoX29uQWNjZWxlcm9tZXRlckNoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgICAgcmFsLnN0b3BBY2NlbGVyb21ldGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRpc3BhdGNoRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2hFdmVudCgpIHtcbiAgICAgIHZhciBldmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICBldmVudC5fdGFyZ2V0ID0gZXZlbnQuX2N1cnJlbnRUYXJnZXQgPSB0aGlzO1xuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgX1RvdWNoRXZlbnRbXCJkZWZhdWx0XCJdKSB7XG4gICAgICAgIHZhciB0b3VjaGVBcnJheSA9IGV2ZW50LnRvdWNoZXM7XG4gICAgICAgIHZhciBsZW5ndGggPSB0b3VjaGVBcnJheS5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgICB0b3VjaGVBcnJheVtpbmRleF0udGFyZ2V0ID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0b3VjaGVBcnJheSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuICAgICAgICBsZW5ndGggPSB0b3VjaGVBcnJheS5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIF9pbmRleCA9IDA7IF9pbmRleCA8IGxlbmd0aDsgKytfaW5kZXgpIHtcbiAgICAgICAgICB0b3VjaGVBcnJheVtfaW5kZXhdLnRhcmdldCA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBjYWxsYmFjayA9IHRoaXNbXCJvblwiICsgZXZlbnQudHlwZV07XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICB9XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpO1xuICAgICAgdmFyIGV2ZW50cztcbiAgICAgIGlmIChwcml2YXRlVGhpcykge1xuICAgICAgICBldmVudHMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHByaXZhdGVUaGlzKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudHMpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IGV2ZW50c1tldmVudC50eXBlXTtcbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbaV0uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudC5fdGFyZ2V0ID0gZXZlbnQuX2N1cnJlbnRUYXJnZXQgPSBudWxsO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBFdmVudFRhcmdldDtcbn0oKTtcblxufSx7XCIuL0RldmljZU1vdGlvbkV2ZW50XCI6NyxcIi4vVG91Y2hFdmVudFwiOjM2LFwiLi91dGlsL1dlYWtNYXBcIjo1N31dLDEyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvV2Vha01hcFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIEZvbnRGYWNlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGb250RmFjZShmYW1pbHksIHNvdXJjZSwgZGVzY3JpcHRvcnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9udEZhY2UpO1xuICAgIHRoaXMuZmFtaWx5ID0gZmFtaWx5O1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMuZGVzY3JpcHRvcnMgPSBkZXNjcmlwdG9ycztcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIF9zZWxmUHJpdmF0ZSA9IHtcbiAgICAgIHN0YXR1czogXCJ1bmxvYWRlZFwiLFxuICAgICAgX3N0YXR1czogXCJ1bmxvYWRlZFwiLFxuICAgICAgbG9hZDogZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBcImxvYWRpbmdcIjtcbiAgICAgICAgdmFyIHNvdXJjZTtcbiAgICAgICAgaWYgKHNlbGYuc291cmNlLm1hdGNoKC91cmxcXChcXHMqJ1xccyooLio/KVxccyonXFxzKlxcKS8pKSB7XG4gICAgICAgICAgc291cmNlID0gc2VsZi5zb3VyY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc291cmNlID0gXCJ1cmwoJ1wiICsgc2VsZi5zb3VyY2UgKyBcIicpXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZhbWlseSA9IHJhbC5sb2FkRm9udChzZWxmLmZhbWlseSwgc291cmNlKTtcbiAgICAgICAgaWYgKGZhbWlseSkge1xuICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IFwibG9hZGVkXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc3RhdHVzID0gXCJlcnJvclwiO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBzdGF0dXMgPSBfc2VsZlByaXZhdGUuc3RhdHVzID0gX3NlbGZQcml2YXRlLl9zdGF0dXM7XG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJsb2FkZWRcIikge1xuICAgICAgICAgICAgX3NlbGZQcml2YXRlLmxvYWRSZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9zZWxmUHJpdmF0ZS5sb2FkUmVqZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5zZXQodGhpcywgX3NlbGZQcml2YXRlKTtcbiAgICBfc2VsZlByaXZhdGUubG9hZGVkID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgX3NlbGZQcml2YXRlLmxvYWRSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIF9zZWxmUHJpdmF0ZS5sb2FkUmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhGb250RmFjZSwgW3tcbiAgICBrZXk6IFwic3RhdHVzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5zdGF0dXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykubG9hZGVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmxvYWQoKTtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmxvYWRlZDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEZvbnRGYWNlO1xufSgpO1xubW9kdWxlLmV4cG9ydHMgPSBGb250RmFjZTtcblxufSx7XCIuL3V0aWwvV2Vha01hcFwiOjU3fV0sMTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRXZlbnRUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFRhcmdldFwiKSk7XG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvV2Vha01hcFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbnZhciBGb250RmFjZVNldCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICBfaW5oZXJpdHMoRm9udEZhY2VTZXQsIF9FdmVudFRhcmdldCk7XG4gIGZ1bmN0aW9uIEZvbnRGYWNlU2V0KCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9udEZhY2VTZXQpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBGb250RmFjZVNldCk7XG4gICAgdmFyIHNlbGYgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5zdGF0dXMgPSBcImxvYWRlZFwiO1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLnJlYWR5ID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5yZWFkeVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5yZWFkeVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5mb250RmFjZVNldCA9IFtdO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoRm9udEZhY2VTZXQsIFt7XG4gICAga2V5OiBcInN0YXR1c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc3RhdHVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWFkeVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykucmVhZHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoZm9udEZhY2UpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZm9udEZhY2VTZXQucHVzaChmb250RmFjZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNoZWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRm9udEZhY2VTZXQuY2hlY2soKSBub3QgaW1wbGVtZW50c1wiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xlYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJGb250RmFjZVNldC5jbGVhcigpIG5vdCBpbXBsZW1lbnRzXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWxldGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2RlbGV0ZSgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkZvbnRGYWNlU2V0LmRlbGV0ZSgpIG5vdCBpbXBsZW1lbnRzXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLnN0YXR1cyA9IFwibG9hZGluZ1wiO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKCdsb2FkaW5nJykpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGZvbnRGYWNlU2V0ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5mb250RmFjZVNldDtcbiAgICAgICAgaWYgKGZvbnRGYWNlU2V0KSB7XG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gZm9udEZhY2VTZXQpIHtcbiAgICAgICAgICAgIHZhciBmb250RmFjZSA9IGZvbnRGYWNlU2V0W2luZGV4XTtcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KGZvbnRGYWNlKS5zdGF0dXM7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSBcInVubG9hZGVkXCIgfHwgc3RhdHVzID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgICAgZm9udEZhY2UubG9hZCgpO1xuICAgICAgICAgICAgICBpZiAoX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChmb250RmFjZSkuX3N0YXR1cyAhPT0gXCJsb2FkZWRcIikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoc2VsZikuc3RhdHVzID0gXCJsb2FkZWRcIjtcbiAgICAgICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLnJlYWR5UmVzb2x2ZShbXS5jb25jYXQoX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5mb250RmFjZVNldCkpO1xuICAgICAgICAgIHJlc29sdmUoW10uY29uY2F0KF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoc2VsZikuZm9udEZhY2VTZXQpKTtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oJ2xvYWRpbmdkb25lJykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLnN0YXR1cyA9IFwibG9hZGVkXCI7XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoc2VsZikucmVhZHlSZWplY3QoKTtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXSgnbG9hZGluZ2Vycm9yJykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBGb250RmFjZVNldDtcbn0oX0V2ZW50VGFyZ2V0MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vRXZlbnRUYXJnZXRcIjoxMSxcIi4vdXRpbC9XZWFrTWFwXCI6NTd9XSwxNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9IVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcbnZhciBfV2Vha01hcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9XZWFrTWFwXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIEhUTUxBbmNob3JFbGVtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MQW5jaG9yRWxlbWVudCwgX0hUTUxFbGVtZW50KTtcbiAgZnVuY3Rpb24gSFRNTEFuY2hvckVsZW1lbnQoKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MQW5jaG9yRWxlbWVudCk7XG4gICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIEhUTUxBbmNob3JFbGVtZW50LCBbXCJBXCJdKTtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5wcm90b2NvbCA9IFwiOlwiO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoSFRNTEFuY2hvckVsZW1lbnQsIFt7XG4gICAga2V5OiBcInByb3RvY29sXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5wcm90b2NvbDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEhUTUxBbmNob3JFbGVtZW50O1xufShfSFRNTEVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9IVE1MRWxlbWVudFwiOjE4LFwiLi91dGlsL1dlYWtNYXBcIjo1N31dLDE1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0hUTUxNZWRpYUVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MTWVkaWFFbGVtZW50XCIpKTtcbnZhciBfRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcbnZhciBfV2Vha01hcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9XZWFrTWFwXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3Quc2V0KSB7IHNldCA9IFJlZmxlY3Quc2V0OyB9IGVsc2UgeyBzZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7IHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7IHZhciBkZXNjOyBpZiAoYmFzZSkgeyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7IGlmIChkZXNjLnNldCkgeyBkZXNjLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7IHJldHVybiB0cnVlOyB9IGVsc2UgaWYgKCFkZXNjLndyaXRhYmxlKSB7IHJldHVybiBmYWxzZTsgfSB9IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHJlY2VpdmVyLCBwcm9wZXJ0eSk7IGlmIChkZXNjKSB7IGlmICghZGVzYy53cml0YWJsZSkgeyByZXR1cm4gZmFsc2U7IH0gZGVzYy52YWx1ZSA9IHZhbHVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIsIHByb3BlcnR5LCBkZXNjKTsgfSBlbHNlIHsgX2RlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgdmFsdWUpOyB9IHJldHVybiB0cnVlOyB9OyB9IHJldHVybiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKTsgfVxuZnVuY3Rpb24gX3NldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIsIGlzU3RyaWN0KSB7IHZhciBzID0gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciB8fCB0YXJnZXQpOyBpZiAoIXMgJiYgaXNTdHJpY3QpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignZmFpbGVkIHRvIHNldCBwcm9wZXJ0eScpOyB9IHJldHVybiB2YWx1ZTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2dldCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCk7IH0gZWxzZSB7IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7IGlmICghYmFzZSkgcmV0dXJuOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpOyBpZiAoZGVzYy5nZXQpIHsgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7IH0gcmV0dXJuIGRlc2MudmFsdWU7IH07IH0gcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkgeyB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkgeyBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7IH0gcmV0dXJuIG9iamVjdDsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIEhUTUxBdWRpb0VsZW1lbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfSFRNTE1lZGlhRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTEF1ZGlvRWxlbWVudCwgX0hUTUxNZWRpYUVsZW1lbnQpO1xuICBmdW5jdGlvbiBIVE1MQXVkaW9FbGVtZW50KHVybCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTEF1ZGlvRWxlbWVudCk7XG4gICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIEhUTUxBdWRpb0VsZW1lbnQsIFt1cmwsICdBVURJTyddKTtcbiAgICB2YXIgaW5uZXJBdWRpb0NvbnRleHQgPSByYWwuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkNhbnBsYXkoZnVuY3Rpb24gKCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5kdXJhdGlvbiA9IGlubmVyQXVkaW9Db250ZXh0LmR1cmF0aW9uO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwiY2FucGxheVwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJjYW5wbGF5dGhyb3VnaFwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJkdXJhdGlvbmNoYW5nZVwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkZWRtZXRhZGF0YVwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkZWRkYXRhXCIpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vblBsYXkoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwicGxheVwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJwbGF5aW5nXCIpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vblBhdXNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInBhdXNlXCIpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkVuZGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImVuZGVkXCIpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZHVyYXRpb24gPSBOYU47XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJlcnJvclwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJlbXB0aWVkXCIpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vbldhaXRpbmcoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwid2FpdGluZ1wiKSk7XG4gICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgaW5uZXJBdWRpb0NvbnRleHQub25TZWVrZWQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwic2Vla2VkXCIpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vblNlZWtpbmcoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwic2Vla2luZ1wiKSk7XG4gICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgaW5uZXJBdWRpb0NvbnRleHQub25UaW1lVXBkYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInRpbWV1cGRhdGVcIikpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHVybDtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5pbm5lckF1ZGlvQ29udGV4dCA9IGlubmVyQXVkaW9Db250ZXh0O1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLmR1cmF0aW9uID0gTmFOO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoSFRNTEF1ZGlvRWxlbWVudCwgW3tcbiAgICBrZXk6IFwiY3VycmVudFRpbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5uZXJBdWRpb0NvbnRleHQuc2Vlayh2YWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvb3BcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihIVE1MQXVkaW9FbGVtZW50LnByb3RvdHlwZSksIFwibG9vcFwiLCB0aGlzKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihIVE1MQXVkaW9FbGVtZW50LnByb3RvdHlwZSksIFwibG9vcFwiLCB2YWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0Lmxvb3AgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidm9sdW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoSFRNTEF1ZGlvRWxlbWVudC5wcm90b3R5cGUpLCBcInZvbHVtZVwiLCB0aGlzKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihIVE1MQXVkaW9FbGVtZW50LnByb3RvdHlwZSksIFwidm9sdW1lXCIsIHZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5uZXJBdWRpb0NvbnRleHQudm9sdW1lID0gdmFsdWU7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJ2b2x1bWVjaGFuZ2VcIikpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5QbGF5VHlwZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5QbGF5VHlwZSgpIHtcbiAgICAgIHZhciBtZWRpYVR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgICAgaWYgKHR5cGVvZiBtZWRpYVR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYVR5cGUuaW5kZXhPZignYXVkaW8vbXBlZycpID4gLTEgfHwgbWVkaWFUeXBlLmluZGV4T2YoJ2F1ZGlvL21wNCcpKSB7XG4gICAgICAgIHJldHVybiAncHJvYmFibHknO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzcmNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihIVE1MQXVkaW9FbGVtZW50LnByb3RvdHlwZSksIFwic3JjXCIsIHRoaXMpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKEhUTUxBdWRpb0VsZW1lbnQucHJvdG90eXBlKSwgXCJzcmNcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZHN0YXJ0XCIpKTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRzdGFydFwiKSk7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0LnNyYyA9IF9nZXQoX2dldFByb3RvdHlwZU9mKEhUTUxBdWRpb0VsZW1lbnQucHJvdG90eXBlKSwgXCJzcmNcIiwgdGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBhdXNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbm5lckF1ZGlvQ29udGV4dC5wYXVzZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwbGF5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0LnBsYXkoKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInByb2dyZXNzXCIpKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEhUTUxBdWRpb0VsZW1lbnQ7XG59KF9IVE1MTWVkaWFFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vSFRNTE1lZGlhRWxlbWVudFwiOjIzLFwiLi91dGlsL1dlYWtNYXBcIjo1N31dLDE2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0hUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnQuanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIEhUTUxCb2R5RWxlbWVudCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTEJvZHlFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuICBmdW5jdGlvbiBIVE1MQm9keUVsZW1lbnQocGFyZW50Tm9kZSkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTEJvZHlFbGVtZW50KTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgSFRNTEJvZHlFbGVtZW50LCBbXCJCT0RZXCJdKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicGFyZW50Tm9kZVwiLCBudWxsKTtcbiAgICBfdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhIVE1MQm9keUVsZW1lbnQpO1xufShfSFRNTEVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9IVE1MRWxlbWVudC5qc1wiOjE4fV0sMTc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFwiKSk7XG52YXIgX0ltYWdlRGF0YSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSW1hZ2VEYXRhXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuaWYgKHJhbC5nZXRGZWF0dXJlUHJvcGVydHkoXCJIVE1MQ2FudmFzRWxlbWVudFwiLCBcInNwZWNcIikgPT09IFwidml2b19wbGF0Zm9ybV9zdXBwb3J0XCIpIHtcbiAgdmFyIEhUTUxDYW52YXNFbGVtZW50ID0gd2luZG93LkhUTUxDYW52YXNFbGVtZW50O1xuICBtb2R1bGUuZXhwb3J0cyA9IEhUTUxDYW52YXNFbGVtZW50O1xufSBlbHNlIHtcbiAgdmFyIENBTlZBU19ERUZBVUxUX1dJRFRIID0gMzAwO1xuICB2YXIgQ0FOVkFTX0RFRkFVTFRfSEVJR0hUID0gMTUwO1xuICB3aW5kb3cucmFsID0gd2luZG93LnJhbCB8fCB7fTtcbiAgdmFyIF9jcmVhdGVDYW52YXMgPSByYWwuY3JlYXRlQ2FudmFzO1xuICB2YXIgX0hUTUxDYW52YXNFbGVtZW50ID0gZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICAgIF9pbmhlcml0cyhfSFRNTENhbnZhc0VsZW1lbnQsIF9IVE1MRWxlbWVudCk7XG4gICAgZnVuY3Rpb24gX0hUTUxDYW52YXNFbGVtZW50KHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHZhciBfdGhpcztcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfSFRNTENhbnZhc0VsZW1lbnQpO1xuICAgICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIF9IVE1MQ2FudmFzRWxlbWVudCwgWydDQU5WQVMnXSk7XG4gICAgICBfdGhpcy5pZCA9ICdnbGNhbnZhcyc7XG4gICAgICBfdGhpcy50eXBlID0gJ2NhbnZhcyc7XG4gICAgICBfdGhpcy50b3AgPSAwO1xuICAgICAgX3RoaXMubGVmdCA9IDA7XG4gICAgICBpZiAodHlwZW9mIHJhbC5nZXRGZWF0dXJlUHJvcGVydHkoXCJyYWwuY3JlYXRlQ2FudmFzXCIsIFwic3BlY1wiKSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB2YXIgY2FudmFzID0gX2NyZWF0ZUNhbnZhcygpO1xuICAgICAgICBjYW52YXMuX19wcm90b19fLl9fcHJvdG9fXyA9IF9IVE1MQ2FudmFzRWxlbWVudC5wcm90b3R5cGU7XG4gICAgICAgIE9iamVjdC5rZXlzKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBjYW52YXNba2V5XSA9IHRoaXNba2V5XTtcbiAgICAgICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoID49IDAgPyBNYXRoLmNlaWwod2lkdGgpIDogQ0FOVkFTX0RFRkFVTFRfV0lEVEg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgPj0gMCA/IE1hdGguY2VpbChoZWlnaHQpIDogQ0FOVkFTX0RFRkFVTFRfSEVJR0hUO1xuICAgICAgICBjYW52YXMuX3RhcmdldElEID0gX3RoaXMuX3RhcmdldElEO1xuICAgICAgICBjYW52YXMuX2xpc3RlbmVyQ291bnQgPSBfdGhpcy5fbGlzdGVuZXJDb3VudDtcbiAgICAgICAgY2FudmFzLl9saXN0ZW5lcnMgPSBfdGhpcy5fbGlzdGVuZXJzO1xuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIGNhbnZhcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5fd2lkdGggPSB3aWR0aCA/IE1hdGguY2VpbCh3aWR0aCkgOiBDQU5WQVNfREVGQVVMVF9XSURUSDtcbiAgICAgICAgX3RoaXMuX2hlaWdodCA9IGhlaWdodCA/IE1hdGguY2VpbChoZWlnaHQpIDogQ0FOVkFTX0RFRkFVTFRfSEVJR0hUO1xuICAgICAgICBfdGhpcy5fY29udGV4dDJEID0gbnVsbDtcbiAgICAgICAgX3RoaXMuX2RhdGFJbm5lciA9IG51bGw7XG4gICAgICAgIF90aGlzLl9hbGlnbm1lbnQgPSBfdGhpcy5fd2lkdGggJSAyID09PSAwID8gOCA6IDQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIF9jcmVhdGVDbGFzcyhfSFRNTENhbnZhc0VsZW1lbnQsIFt7XG4gICAgICBrZXk6IFwiZ2V0Q29udGV4dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnRleHQobmFtZSwgb3B0cykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChuYW1lID09PSAnd2ViZ2wnIHx8IG5hbWUgPT09ICdleHBlcmltZW50YWwtd2ViZ2wnKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5fX2dsO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICcyZCcpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2NvbnRleHQyRCkge1xuICAgICAgICAgICAgdGhpcy5fY29udGV4dDJEID0gbmV3IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0MkQuX2lubmVyQ2FudmFzID0gdGhpcztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQyRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2RhdGFcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICBpZiAodGhpcy5fY29udGV4dDJEID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9kYXRhSW5uZXIpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2NvbnRleHQyRC5fZ2V0RGF0YSgpO1xuICAgICAgICAgIHRoaXMuX2RhdGFJbm5lciA9IG5ldyBfSW1hZ2VEYXRhW1wiZGVmYXVsdFwiXShkYXRhLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJbm5lcjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xpZW50V2lkdGhcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xpZW50SGVpZ2h0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ3aWR0aFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh3aWR0aCkge1xuICAgICAgICB3aWR0aCA9IHBhcnNlSW50KHdpZHRoKTtcbiAgICAgICAgaWYgKGlzTmFOKHdpZHRoKSkge1xuICAgICAgICAgIHdpZHRoID0gQ0FOVkFTX0RFRkFVTFRfV0lEVEg7XG4gICAgICAgIH0gZWxzZSBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgd2lkdGggPSBDQU5WQVNfREVGQVVMVF9XSURUSDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLl9hbGlnbm1lbnQgPSB0aGlzLl93aWR0aCAlIDIgPT09IDAgPyA4IDogNDtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRleHQyRCkge1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQyRC5fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kYXRhSW5uZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJoZWlnaHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KGhlaWdodCkge1xuICAgICAgICBoZWlnaHQgPSBwYXJzZUludChoZWlnaHQpO1xuICAgICAgICBpZiAoaXNOYU4oaGVpZ2h0KSkge1xuICAgICAgICAgIGhlaWdodCA9IENBTlZBU19ERUZBVUxUX0hFSUdIVDtcbiAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gQ0FOVkFTX0RFRkFVTFRfSEVJR0hUO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRleHQyRCkge1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQyRC5faGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RhdGFJbm5lciA9IG51bGw7XG4gICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBfSFRNTENhbnZhc0VsZW1lbnQ7XG4gIH0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuICBtb2R1bGUuZXhwb3J0cyA9IF9IVE1MQ2FudmFzRWxlbWVudDtcbn1cblxufSx7XCIuL0hUTUxFbGVtZW50XCI6MTgsXCIuL0ltYWdlRGF0YVwiOjI4fV0sMTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0VsZW1lbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIEhUTUxFbGVtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX0VsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxFbGVtZW50LCBfRWxlbWVudCk7XG4gIGZ1bmN0aW9uIEhUTUxFbGVtZW50KHRhZ05hbWUpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxFbGVtZW50KTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgSFRNTEVsZW1lbnQsIFt0YWdOYW1lXSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNsYXNzTmFtZVwiLCAnJyk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNoaWxkZXJuXCIsIFtdKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3R5bGVcIiwge1xuICAgICAgd2lkdGg6IFwiXCIuY29uY2F0KHdpbmRvdy5pbm5lcldpZHRoLCBcInB4XCIpLFxuICAgICAgaGVpZ2h0OiBcIlwiLmNvbmNhdCh3aW5kb3cuaW5uZXJIZWlnaHQsIFwicHhcIilcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5zZXJ0QmVmb3JlXCIsIGZ1bmN0aW9uICgpIHt9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5uZXJIVE1MXCIsICcnKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEhUTUxFbGVtZW50LCBbe1xuICAgIGtleTogXCJzZXRBdHRyaWJ1dGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEF0dHJpYnV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXNbbmFtZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsaWVudFdpZHRoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcmV0ID0gcGFyc2VJbnQodGhpcy5zdHlsZS5mb250U2l6ZSwgMTApICogdGhpcy5pbm5lckhUTUwubGVuZ3RoO1xuICAgICAgcmV0dXJuIE51bWJlci5pc05hTihyZXQpID8gMCA6IHJldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xpZW50SGVpZ2h0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcmV0ID0gcGFyc2VJbnQodGhpcy5zdHlsZS5mb250U2l6ZSwgMTApO1xuICAgICAgcmV0dXJuIE51bWJlci5pc05hTihyZXQpID8gMCA6IHJldDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEhUTUxFbGVtZW50O1xufShfRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0VsZW1lbnRcIjo5fV0sMTk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudC5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgSFRNTEhlYWRFbGVtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MSGVhZEVsZW1lbnQsIF9IVE1MRWxlbWVudCk7XG4gIGZ1bmN0aW9uIEhUTUxIZWFkRWxlbWVudChwYXJlbnROb2RlKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MSGVhZEVsZW1lbnQpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBIVE1MSGVhZEVsZW1lbnQsIFtcIkhFQURcIl0pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwYXJlbnROb2RlXCIsIG51bGwpO1xuICAgIF90aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEhUTUxIZWFkRWxlbWVudCk7XG59KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0hUTUxFbGVtZW50LmpzXCI6MTh9XSwyMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9IVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIEhUTUxIdG1sRWxlbWVudCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTEh0bWxFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuICBmdW5jdGlvbiBIVE1MSHRtbEVsZW1lbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxIdG1sRWxlbWVudCk7XG4gICAgcmV0dXJuIF9jYWxsU3VwZXIodGhpcywgSFRNTEh0bWxFbGVtZW50LCBbXCJIVE1MXCJdKTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoSFRNTEh0bWxFbGVtZW50LCBbe1xuICAgIGtleTogXCJ2ZXJzaW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEhUTUxIdG1sRWxlbWVudDtcbn0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vSFRNTEVsZW1lbnRcIjoxOH1dLDIxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG52YXIgX0hUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnRcIikpO1xudmFyIF9FdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5pZiAocmFsLmdldEZlYXR1cmVQcm9wZXJ0eShcIkhUTUxJbWFnZUVsZW1lbnRcIiwgXCJzcGVjXCIpID09PSBcInZpdm9fcGxhdGZvcm1fc3VwcG9ydFwiKSB7XG4gIHZhciBIVE1MSW1hZ2VFbGVtZW50ID0gd2luZG93LkhUTUxJbWFnZUVsZW1lbnQ7XG4gIG1vZHVsZS5leHBvcnRzID0gSFRNTEltYWdlRWxlbWVudDtcbn0gZWxzZSB7XG4gIHdpbmRvdy5yYWwgPSB3aW5kb3cucmFsIHx8IHt9O1xuICB2YXIgX2NyZXRlSW1hZ2UgPSByYWwuY3JlYXRlSW1hZ2U7XG4gIHZhciBfaW1hZ2U7XG4gIHZhciBfc2V0dGVyO1xuICB2YXIgX2dldHRlcjtcbiAgaWYgKHR5cGVvZiByYWwuZ2V0RmVhdHVyZVByb3BlcnR5KFwicmFsLmNyZWF0ZUltYWdlXCIsIFwic3BlY1wiKSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIF9pbWFnZSA9IF9jcmV0ZUltYWdlKCk7XG4gICAgdmFyIF9kZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfaW1hZ2UuX19wcm90b19fLCBcInNyY1wiKTtcbiAgICBfc2V0dGVyID0gX2Rlc2NyaXB0b3Iuc2V0O1xuICAgIF9nZXR0ZXIgPSBfZGVzY3JpcHRvci5nZXQ7XG4gIH1cbiAgdmFyIF9IVE1MSW1hZ2VFbGVtZW50ID0gZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICAgIF9pbmhlcml0cyhfSFRNTEltYWdlRWxlbWVudCwgX0hUTUxFbGVtZW50KTtcbiAgICBmdW5jdGlvbiBfSFRNTEltYWdlRWxlbWVudCh3aWR0aCwgaGVpZ2h0LCBpc0NhbGxlZEZyb21JbWFnZSkge1xuICAgICAgdmFyIF90aGlzO1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9IVE1MSW1hZ2VFbGVtZW50KTtcbiAgICAgIGlmICghaXNDYWxsZWRGcm9tSW1hZ2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgY29uc3RydWN0b3IsIHVzZSAnbmV3IEltYWdlKHcsIGgpOyBpbnN0ZWFkISdcIik7XG4gICAgICB9XG4gICAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgX0hUTUxJbWFnZUVsZW1lbnQsIFsnSU1HJ10pO1xuICAgICAgX3RoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgICAgIF90aGlzLmNyb3NzT3JpZ2luID0gbnVsbDtcbiAgICAgIF90aGlzLm5hdHVyYWxXaWR0aCA9IDA7XG4gICAgICBfdGhpcy5uYXR1cmFsSGVpZ2h0ID0gMDtcbiAgICAgIF90aGlzLndpZHRoID0gd2lkdGggfHwgMDtcbiAgICAgIF90aGlzLmhlaWdodCA9IGhlaWdodCB8fCAwO1xuICAgICAgaWYgKHR5cGVvZiByYWwuZ2V0RmVhdHVyZVByb3BlcnR5KFwicmFsLmNyZWF0ZUltYWdlXCIsIFwic3BlY1wiKSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB2YXIgaW1hZ2UgPSBfY3JldGVJbWFnZSgpO1xuICAgICAgICBPYmplY3Qua2V5cyhfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgaW1hZ2Vba2V5XSA9IHRoaXNba2V5XTtcbiAgICAgICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgICAgIGltYWdlLl9vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5uYXR1cmFsV2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICAgIHRoaXMubmF0dXJhbEhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRcIikpO1xuICAgICAgICB9LmJpbmQoaW1hZ2UpO1xuICAgICAgICBpbWFnZS5fb25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJlcnJvclwiKSk7XG4gICAgICAgIH0uYmluZChpbWFnZSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbWFnZSwgXCJzcmNcIiwge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9nZXR0ZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gX3NldHRlci5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIGltYWdlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgX2NyZWF0ZUNsYXNzKF9IVE1MSW1hZ2VFbGVtZW50LCBbe1xuICAgICAga2V5OiBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBET01SZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3JjXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NyYztcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldChzcmMpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3NyYyA9IHNyYztcbiAgICAgICAgaWYgKHNyYyA9PT0gXCJcIikge1xuICAgICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgICB0aGlzLl9kYXRhID0gbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbWFnZU1ldGEgPSBudWxsO1xuICAgICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX2dsRm9ybWF0ID0gdGhpcy5fZ2xJbnRlcm5hbEZvcm1hdCA9IDB4MTkwODtcbiAgICAgICAgICB0aGlzLmNyb3NzT3JpZ2luID0gbnVsbDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmFsLmxvYWRJbWFnZURhdGEoc3JjLCBmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgdmFyIF9ldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKCdlcnJvcicpO1xuICAgICAgICAgICAgX3RoaXMyLmRpc3BhdGNoRXZlbnQoX2V2ZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3RoaXMyLl9pbWFnZU1ldGEgPSBpbmZvO1xuICAgICAgICAgIF90aGlzMi53aWR0aCA9IF90aGlzMi5uYXR1cmFsV2lkdGggPSBpbmZvLndpZHRoO1xuICAgICAgICAgIF90aGlzMi5oZWlnaHQgPSBfdGhpczIubmF0dXJhbEhlaWdodCA9IGluZm8uaGVpZ2h0O1xuICAgICAgICAgIF90aGlzMi5fZGF0YSA9IGluZm8uZGF0YTtcbiAgICAgICAgICBfdGhpczIuX2dsRm9ybWF0ID0gaW5mby5nbEZvcm1hdDtcbiAgICAgICAgICBfdGhpczIuX2dsSW50ZXJuYWxGb3JtYXQgPSBpbmZvLmdsSW50ZXJuYWxGb3JtYXQ7XG4gICAgICAgICAgX3RoaXMyLl9nbFR5cGUgPSBpbmZvLmdsVHlwZTtcbiAgICAgICAgICBfdGhpczIuX251bWJlck9mTWlwbWFwcyA9IGluZm8ubnVtYmVyT2ZNaXBtYXBzO1xuICAgICAgICAgIF90aGlzMi5fY29tcHJlc3NlZCA9IGluZm8uY29tcHJlc3NlZDtcbiAgICAgICAgICBfdGhpczIuX2JwcCA9IGluZm8uYnBwO1xuICAgICAgICAgIF90aGlzMi5fcHJlbXVsdGlwbHlBbHBoYSA9IGluZm8ucHJlbXVsdGlwbHlBbHBoYTtcbiAgICAgICAgICBfdGhpczIuX2FsaWdubWVudCA9IDE7XG4gICAgICAgICAgaWYgKChfdGhpczIuX251bWJlck9mTWlwbWFwcyA9PSAwIHx8IF90aGlzMi5fbnVtYmVyT2ZNaXBtYXBzID09IDEpICYmICFfdGhpczIuX2NvbXByZXNzZWQpIHtcbiAgICAgICAgICAgIHZhciBieXRlc1BlclJvdyA9IF90aGlzMi53aWR0aCAqIF90aGlzMi5fYnBwIC8gODtcbiAgICAgICAgICAgIGlmIChieXRlc1BlclJvdyAlIDggPT0gMCkgX3RoaXMyLl9hbGlnbm1lbnQgPSA4O2Vsc2UgaWYgKGJ5dGVzUGVyUm93ICUgNCA9PSAwKSBfdGhpczIuX2FsaWdubWVudCA9IDQ7ZWxzZSBpZiAoYnl0ZXNQZXJSb3cgJSAyID09IDApIF90aGlzMi5fYWxpZ25tZW50ID0gMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3RoaXMyLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXSgnbG9hZCcpO1xuICAgICAgICAgIF90aGlzMi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsaWVudFdpZHRoXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsaWVudEhlaWdodFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIF9IVE1MSW1hZ2VFbGVtZW50O1xuICB9KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfSFRNTEltYWdlRWxlbWVudDtcbn1cblxufSx7XCIuL0V2ZW50XCI6MTAsXCIuL0hUTUxFbGVtZW50XCI6MTh9XSwyMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9IVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCk7IH0gZWxzZSB7IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7IGlmICghYmFzZSkgcmV0dXJuOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpOyBpZiAoZGVzYy5nZXQpIHsgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7IH0gcmV0dXJuIGRlc2MudmFsdWU7IH07IH0gcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkgeyB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkgeyBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7IH0gcmV0dXJuIG9iamVjdDsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxud2luZG93LnJhbCA9IHdpbmRvdy5yYWwgfHwge307XG52YXIgSFRNTElucHV0RWxlbWVudCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTElucHV0RWxlbWVudCwgX0hUTUxFbGVtZW50KTtcbiAgZnVuY3Rpb24gSFRNTElucHV0RWxlbWVudCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTElucHV0RWxlbWVudCk7XG4gICAgcmV0dXJuIF9jYWxsU3VwZXIodGhpcywgSFRNTElucHV0RWxlbWVudCwgW1wiSU5QVVRcIl0pO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhIVE1MSW5wdXRFbGVtZW50LCBbe1xuICAgIGtleTogXCJmb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlKSwgXCJmb2N1c1wiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgaWYgKCF0aGlzLnRhcmdldC5lZGl0YWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB2YXIgb25LZXlib2FyZElucHV0ID0gZnVuY3Rpb24gb25LZXlib2FyZElucHV0KHJlcykge1xuICAgICAgICB2YXIgc3RyID0gcmVzID8gcmVzLnZhbHVlIDogXCJcIjtcbiAgICAgICAgdGhhdC5pbnB1dFRhcmdldC50ZXh0ID0gc3RyO1xuICAgICAgICB0aGF0LnRhcmdldC5ldmVudChcImlucHV0XCIpO1xuICAgICAgfTtcbiAgICAgIHZhciBvbktleWJvYXJkQ29uZmlybSA9IGZ1bmN0aW9uIG9uS2V5Ym9hcmRDb25maXJtKHJlcykge1xuICAgICAgICB2YXIgc3RyID0gcmVzID8gcmVzLnZhbHVlIDogXCJcIjtcbiAgICAgICAgdGhhdC50YXJnZXQudGV4dCA9IHN0cjtcbiAgICAgICAgdGhhdC50YXJnZXQuZXZlbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhhdC50YXJnZXQuZm9jdXMgPSBmYWxzZTtcbiAgICAgICAgcmFsLm9mZktleWJvYXJkQ29uZmlybShvbktleWJvYXJkQ29uZmlybSk7XG4gICAgICAgIHJhbC5vZmZLZXlib2FyZElucHV0KG9uS2V5Ym9hcmRJbnB1dCk7XG4gICAgICAgIHJhbC5oaWRlS2V5Ym9hcmQoe30pO1xuICAgICAgfTtcbiAgICAgIHJhbC5vZmZLZXlib2FyZElucHV0KG9uS2V5Ym9hcmRJbnB1dCk7XG4gICAgICByYWwub2ZmS2V5Ym9hcmRDb25maXJtKG9uS2V5Ym9hcmRDb25maXJtKTtcbiAgICAgIHJhbC5zaG93S2V5Ym9hcmQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIG1heExlbmd0aDogdGhpcy5tYXhMZW5ndGgsXG4gICAgICAgIG11bHRpcGxlOiB0aGlzLnRhcmdldC5tdWx0aWxpbmUsXG4gICAgICAgIGNvbmZpcm1Ib2xkOiBmYWxzZSxcbiAgICAgICAgaW5wdXRUeXBlOiB0aGlzLnRhcmdldC50eXBlLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge30sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwocmVzKSB7fVxuICAgICAgfSk7XG4gICAgICByYWwub25LZXlib2FyZElucHV0KG9uS2V5Ym9hcmRJbnB1dCk7XG4gICAgICByYWwub25LZXlib2FyZENvbmZpcm0ob25LZXlib2FyZENvbmZpcm0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJibHVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSksIFwiYmx1clwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgcmFsLmhpZGVLZXlib2FyZCh7fSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBIVE1MSW5wdXRFbGVtZW50O1xufShfSFRNTEVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9IVE1MRWxlbWVudFwiOjE4fV0sMjM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFwiKSk7XG52YXIgX01lZGlhRXJyb3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01lZGlhRXJyb3JcIikpO1xudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL1dlYWtNYXBcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIEhUTUxNZWRpYUVsZW1lbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxNZWRpYUVsZW1lbnQsIF9IVE1MRWxlbWVudCk7XG4gIGZ1bmN0aW9uIEhUTUxNZWRpYUVsZW1lbnQodXJsLCB0eXBlKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MTWVkaWFFbGVtZW50KTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgSFRNTE1lZGlhRWxlbWVudCwgW3R5cGVdKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiYXVkaW9UcmFja3NcIiwgdW5kZWZpbmVkKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiYXV0b3BsYXlcIiwgZmFsc2UpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjb250cm9sbGVyXCIsIG51bGwpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjb250cm9sc1wiLCBmYWxzZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNyb3NzT3JpZ2luXCIsIG51bGwpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJkZWZhdWx0TXV0ZWRcIiwgZmFsc2UpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJkZWZhdWx0UGxheWJhY2tSYXRlXCIsIDEuMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm1lZGlhR3JvdXBcIiwgdW5kZWZpbmVkKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibWVkaWFLZXlzXCIsIG51bGwpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJtb3pBdWRpb0NoYW5uZWxUeXBlXCIsIHVuZGVmaW5lZCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm11dGVkXCIsIGZhbHNlKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibmV0d29ya1N0YXRlXCIsIEhUTUxNZWRpYUVsZW1lbnQuTkVUV09SS19FTVBUWSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInBsYXliYWNrUmF0ZVwiLCAxKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJlbG9hZFwiLCBcImF1dG9cIik7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImxvb3BcIiwgZmFsc2UpO1xuICAgIE9iamVjdC5hc3NpZ24oX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIHtcbiAgICAgIGJ1ZmZlcmVkOiB1bmRlZmluZWQsXG4gICAgICBjdXJyZW50U3JjOiB1cmwgfHwgXCJcIixcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgZW5kZWQ6IGZhbHNlLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICBpbml0aWFsVGltZTogMCxcbiAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgIHJlYWR5U3RhdGU6IEhUTUxNZWRpYUVsZW1lbnQuSEFWRV9OT1RISU5HLFxuICAgICAgdm9sdW1lOiAxLjAsXG4gICAgICBjdXJyZW50VGltZTogMFxuICAgIH0pO1xuICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmVuZGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBfdGhpcy5hZGRFdmVudExpc3RlbmVyKFwicGxheVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmVuZGVkID0gZmFsc2U7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmVycm9yID0gbnVsbDtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykucGF1c2VkID0gZmFsc2U7XG4gICAgfSk7XG4gICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZXJyb3IgPSB0cnVlO1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5lbmRlZCA9IHRydWU7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLnBhdXNlZCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoSFRNTE1lZGlhRWxlbWVudCwgW3tcbiAgICBrZXk6IFwiY3VycmVudFRpbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmN1cnJlbnRUaW1lO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuY3VycmVudFRpbWUgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3JjXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5jdXJyZW50U3JjO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuY3VycmVudFNyYyA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJidWZmZXJlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYnVmZmVyZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImN1cnJlbnRTcmNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmN1cnJlbnRTcmM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImR1cmF0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5kdXJhdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZW5kZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmVuZGVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlcnJvclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZXJyb3I7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluaXRpYWxUaW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbml0aWFsVGltZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicGF1c2VkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5wYXVzZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZvbHVtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykudm9sdW1lO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykudm9sdW1lID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhblBsYXlUeXBlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblBsYXlUeXBlKG1lZGlhVHlwZSkge1xuICAgICAgcmV0dXJuICdtYXliZSc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhcHR1cmVTdHJlYW1cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FwdHVyZVN0cmVhbSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmFzdFNlZWtcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmFzdFNlZWsoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicGF1c2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInBsYXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHt9XG4gIH1dLCBbe1xuICAgIGtleTogXCJORVRXT1JLX0VNUFRZXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiTkVUV09SS19JRExFXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiTkVUV09SS19MT0FESU5HXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiTkVUV09SS19OT19TT1VSQ0VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJIQVZFX05PVEhJTkdcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJIQVZFX01FVEFEQVRBXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiSEFWRV9DVVJSRU5UX0RBVEFcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJIQVZFX0ZVVFVSRV9EQVRBXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gMztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiSEFWRV9FTk9VR0hfREFUQVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDQ7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBIVE1MTWVkaWFFbGVtZW50O1xufShfSFRNTEVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9IVE1MRWxlbWVudFwiOjE4LFwiLi9NZWRpYUVycm9yXCI6MzAsXCIuL3V0aWwvV2Vha01hcFwiOjU3fV0sMjQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFwiKSk7XG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG52YXIgX0ZpbGVDYWNoZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9GaWxlQ2FjaGVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIF9CQVNFNjRfTkFNRSA9IFwiZGF0YTphcHBsaWNhdGlvbi9qYXZhc2NyaXB0O2Jhc2U2NCxcIjtcbnZhciBfVVJJX05BTUUgPSBcImRhdGE6YXBwbGljYXRpb24vamF2YXNjcmlwdCxcIjtcbnZhciBfZ2V0UGF0aEZyb21CYXNlNjRTdHJpbmcgPSBmdW5jdGlvbiBfZ2V0UGF0aEZyb21CYXNlNjRTdHJpbmcoc3JjKSB7XG4gIGlmIChzcmMgPT09IG51bGwgfHwgc3JjID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gc3JjO1xuICB9XG4gIGlmIChzcmMuc3RhcnRzV2l0aChfQkFTRTY0X05BTUUpKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBzcmMuc3Vic3RyaW5nKF9CQVNFNjRfTkFNRS5sZW5ndGgpO1xuICAgIHZhciBzb3VyY2UgPSB3aW5kb3cuYXRvYihjb250ZW50KTtcbiAgICB2YXIgbGVuID0gc291cmNlLmxlbmd0aDtcbiAgICBpZiAobGVuID4gMCkge1xuICAgICAgcmV0dXJuIF9nZXREaXNrUGF0aEZyb21BcnJheUJ1ZmZlcihzb3VyY2UsIGxlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzcmM7XG4gICAgfVxuICB9IGVsc2UgaWYgKHNyYy5zdGFydHNXaXRoKF9VUklfTkFNRSkpIHtcbiAgICB2YXIgX2NvbnRlbnQgPSBzcmMuc3Vic3RyaW5nKF9VUklfTkFNRS5sZW5ndGgpO1xuICAgIHZhciBfc291cmNlID0gZGVjb2RlVVJJQ29tcG9uZW50KF9jb250ZW50KTtcbiAgICB2YXIgX2xlbiA9IF9zb3VyY2UubGVuZ3RoO1xuICAgIGlmIChfbGVuID4gMCkge1xuICAgICAgcmV0dXJuIF9nZXREaXNrUGF0aEZyb21BcnJheUJ1ZmZlcihfc291cmNlLCBfbGVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNyYztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNyYztcbiAgfVxufTtcbmZ1bmN0aW9uIF9nZXREaXNrUGF0aEZyb21BcnJheUJ1ZmZlcihzb3VyY2UsIGxlbikge1xuICB2YXIgYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIobGVuKTtcbiAgdmFyIHVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB1aW50OEFycmF5W2ldID0gc291cmNlLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIF9GaWxlQ2FjaGVbXCJkZWZhdWx0XCJdLmdldENhY2hlKGFycmF5QnVmZmVyKTtcbn1cbnZhciBIVE1MU2NyaXB0RWxlbWVudCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTFNjcmlwdEVsZW1lbnQsIF9IVE1MRWxlbWVudCk7XG4gIGZ1bmN0aW9uIEhUTUxTY3JpcHRFbGVtZW50KCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTFNjcmlwdEVsZW1lbnQpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBIVE1MU2NyaXB0RWxlbWVudCwgWydTQ1JJUFQnXSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm5vTW9kdWxlXCIsIGZhbHNlKTtcbiAgICB2YXIgc2VsZiA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuICAgIHZhciBvbkFwcGVuZCA9IGZ1bmN0aW9uIG9uQXBwZW5kKCkge1xuICAgICAgc2VsZi5yZW1vdmVFdmVudExpc3RlbmVyKFwiYXBwZW5kXCIsIG9uQXBwZW5kKTtcbiAgICAgIHZhciBzcmMgPSBfZ2V0UGF0aEZyb21CYXNlNjRTdHJpbmcoc2VsZi5zcmMpO1xuICAgICAgcmVxdWlyZShzcmMpO1xuICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKCdsb2FkJykpO1xuICAgIH07XG4gICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImFwcGVuZFwiLCBvbkFwcGVuZCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoSFRNTFNjcmlwdEVsZW1lbnQpO1xufShfSFRNTEVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTFNjcmlwdEVsZW1lbnQucHJvdG90eXBlLCBcIm5vTW9kdWxlXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtZXNzYWdlLCBcIklsbGVnYWwgaW52b2NhdGlvblwiKTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG1lc3NhZ2UsIFwiSWxsZWdhbCBpbnZvY2F0aW9uXCIpO1xuICB9XG59KTtcblxufSx7XCIuL0V2ZW50XCI6MTAsXCIuL0hUTUxFbGVtZW50XCI6MTgsXCIuL3V0aWwvRmlsZUNhY2hlXCI6NTZ9XSwyNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9Gb250RmFjZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9udEZhY2VcIikpO1xudmFyIF9IVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIEhUTUxTdHlsZUVsZW1lbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxTdHlsZUVsZW1lbnQsIF9IVE1MRWxlbWVudCk7XG4gIGZ1bmN0aW9uIEhUTUxTdHlsZUVsZW1lbnQoKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MU3R5bGVFbGVtZW50KTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgSFRNTFN0eWxlRWxlbWVudCwgW1wiU1RZTEVcIl0pO1xuICAgIHZhciBzZWxmID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyk7XG4gICAgdmFyIG9uQXBwZW5kID0gZnVuY3Rpb24gb25BcHBlbmQoKSB7XG4gICAgICBzZWxmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhcHBlbmRcIiwgb25BcHBlbmQpO1xuICAgICAgdmFyIHRleHRDb250ZW50ID0gc2VsZi50ZXh0Q29udGVudCB8fCBzZWxmLmlubmVySFRNTCB8fCBcIlwiO1xuICAgICAgdmFyIGZvbnRGYWNlU3RyID0gXCJcIjtcbiAgICAgIHZhciBzdGFydCA9IDA7XG4gICAgICB2YXIgbGVuZ3RoID0gdGV4dENvbnRlbnQubGVuZ3RoO1xuICAgICAgdmFyIGZsYWcgPSAwO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICBpZiAoc3RhcnQgPiAwKSB7XG4gICAgICAgICAgaWYgKHRleHRDb250ZW50W2luZGV4XSA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIGZsYWcrKztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRleHRDb250ZW50W2luZGV4XSA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIGZsYWctLTtcbiAgICAgICAgICAgIGlmIChmbGFnID09PSAwKSB7XG4gICAgICAgICAgICAgIGZvbnRGYWNlU3RyID0gdGV4dENvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0LCBpbmRleCArIDEpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmxhZyA8IDApIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0ZXh0Q29udGVudFtpbmRleF0gPT09IFwiQFwiICYmIHRleHRDb250ZW50LnN1YnN0cihpbmRleCwgXCJAZm9udC1mYWNlXCIubGVuZ3RoKSA9PT0gXCJAZm9udC1mYWNlXCIpIHtcbiAgICAgICAgICAgIGluZGV4ICs9IDk7XG4gICAgICAgICAgICBzdGFydCA9IGluZGV4ICsgMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb250RmFjZVN0cikge1xuICAgICAgICB2YXIgZm9udEZhbWlseTtcbiAgICAgICAgdmFyIF9sZW5ndGggPSBmb250RmFjZVN0ci5sZW5ndGg7XG4gICAgICAgIHZhciBfc3RhcnQgPSBmb250RmFjZVN0ci5pbmRleE9mKFwiZm9udC1mYW1pbHlcIik7XG4gICAgICAgIGlmIChfc3RhcnQgPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9zdGFydCArPSBcImZvbnQtZmFtaWx5XCIubGVuZ3RoICsgMTtcbiAgICAgICAgdmFyIGVuZCA9IF9zdGFydDtcbiAgICAgICAgZm9yICg7IGVuZCA8IF9sZW5ndGg7ICsrZW5kKSB7XG4gICAgICAgICAgaWYgKGZvbnRGYWNlU3RyW2VuZF0gPT09IFwiO1wiKSB7XG4gICAgICAgICAgICBmb250RmFtaWx5ID0gZm9udEZhY2VTdHIuc3Vic3RyaW5nKF9zdGFydCwgZW5kKS50cmltKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2UgaWYgKGZvbnRGYWNlU3RyW2VuZF0gPT09IFwiOlwiKSB7XG4gICAgICAgICAgICBfc3RhcnQgPSBlbmQgKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvbnRGYW1pbHkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZW5kID0gZm9udEZhY2VTdHIuaW5kZXhPZihcInVybChcIik7XG4gICAgICAgIF9zdGFydCA9IDA7XG4gICAgICAgIHZhciBzb3VyY2U7XG4gICAgICAgIGZvciAoOyBlbmQgPCBfbGVuZ3RoOyArK2VuZCkge1xuICAgICAgICAgIGlmIChmb250RmFjZVN0cltlbmRdID09PSBcIidcIiB8fCBmb250RmFjZVN0cltlbmRdID09PSAnXCInKSB7XG4gICAgICAgICAgICBpZiAoX3N0YXJ0ID4gMCkge1xuICAgICAgICAgICAgICBzb3VyY2UgPSBmb250RmFjZVN0ci5zdWJzdHJpbmcoX3N0YXJ0LCBlbmQpLnRyaW0oKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfc3RhcnQgPSBlbmQgKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgdmFyIGZvbnRGYWNlID0gbmV3IF9Gb250RmFjZVtcImRlZmF1bHRcIl0oZm9udEZhbWlseSwgc291cmNlKTtcbiAgICAgICAgICBmb250RmFjZS5sb2FkKCk7XG4gICAgICAgICAgZG9jdW1lbnQuZm9udHMuYWRkKGZvbnRGYWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImFwcGVuZFwiLCBvbkFwcGVuZCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoSFRNTFN0eWxlRWxlbWVudCk7XG59KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0ZvbnRGYWNlXCI6MTIsXCIuL0hUTUxFbGVtZW50XCI6MTh9XSwyNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9IVE1MTWVkaWFFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTE1lZGlhRWxlbWVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbnZhciBIVE1MVmlkZW9FbGVtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX0hUTUxNZWRpYUVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxWaWRlb0VsZW1lbnQsIF9IVE1MTWVkaWFFbGVtZW50KTtcbiAgZnVuY3Rpb24gSFRNTFZpZGVvRWxlbWVudCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTFZpZGVvRWxlbWVudCk7XG4gICAgcmV0dXJuIF9jYWxsU3VwZXIodGhpcywgSFRNTFZpZGVvRWxlbWVudCwgWydWSURFTyddKTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoSFRNTFZpZGVvRWxlbWVudCwgW3tcbiAgICBrZXk6IFwiY2FuUGxheVR5cGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUGxheVR5cGUodHlwZSkge1xuICAgICAgcmV0dXJuIHR5cGUgPT09ICd2aWRlby9tcDQnO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gSFRNTFZpZGVvRWxlbWVudDtcbn0oX0hUTUxNZWRpYUVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9IVE1MTWVkaWFFbGVtZW50XCI6MjN9XSwyNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxudmFyIF9IVE1MSW1hZ2VFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEltYWdlRWxlbWVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmlmIChyYWwuZ2V0RmVhdHVyZVByb3BlcnR5KFwiSW1hZ2VcIiwgXCJzcGVjXCIpID09PSBcInZpdm9fcGxhdGZvcm1fc3VwcG9ydFwiKSB7XG4gIHZhciBJbWFnZSA9IHdpbmRvdy5JbWFnZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSBJbWFnZTtcbn0gZWxzZSB7XG4gIHZhciBfSW1hZ2UgPSB3aW5kb3cuSW1hZ2U7XG4gIHZhciBfSW1hZ2UyID0gZnVuY3Rpb24gKF9IVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgX2luaGVyaXRzKF9JbWFnZTIsIF9IVE1MSW1hZ2VFbGVtZW50KTtcbiAgICBmdW5jdGlvbiBfSW1hZ2UyKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfSW1hZ2UyKTtcbiAgICAgIHJldHVybiBfY2FsbFN1cGVyKHRoaXMsIF9JbWFnZTIsIFt3aWR0aCwgaGVpZ2h0LCB0cnVlXSk7XG4gICAgfVxuICAgIHJldHVybiBfY3JlYXRlQ2xhc3MoX0ltYWdlMik7XG4gIH0oX0hUTUxJbWFnZUVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG4gIHZhciBfY3JldGVJbWFnZSA9IHJhbC5jcmVhdGVJbWFnZTtcbiAgaWYgKF9jcmV0ZUltYWdlKSB7XG4gICAgX0ltYWdlLnByb3RvdHlwZS5fX3Byb3RvX18gPSBfSW1hZ2UyLnByb3RvdHlwZTtcbiAgfVxuICBtb2R1bGUuZXhwb3J0cyA9IF9JbWFnZTI7XG59XG5cbn0se1wiLi9IVE1MSW1hZ2VFbGVtZW50XCI6MjF9XSwyODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgSW1hZ2VEYXRhID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBJbWFnZURhdGEoYXJyYXksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW1hZ2VEYXRhKTtcbiAgICBpZiAodHlwZW9mIGFycmF5ID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygd2lkdGggPT0gJ251bWJlcicpIHtcbiAgICAgIGhlaWdodCA9IHdpZHRoO1xuICAgICAgd2lkdGggPSBhcnJheTtcbiAgICAgIGFycmF5ID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGFycmF5ID09PSBudWxsKSB7XG4gICAgICB0aGlzLl9kYXRhID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHdpZHRoICogaGVpZ2h0ICogNCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBhcnJheTtcbiAgICB9XG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEltYWdlRGF0YSwgW3tcbiAgICBrZXk6IFwiZGF0YVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIndpZHRoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhlaWdodFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEltYWdlRGF0YTtcbn0oKTtcbm1vZHVsZS5leHBvcnRzID0gSW1hZ2VEYXRhO1xuXG59LHt9XSwyOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIExvY2F0aW9uID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExvY2F0aW9uKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhdGlvbik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYW5jZXN0b3JPcmlnaW5zXCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImhhc2hcIiwgXCJcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaG9zdFwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJob3N0bmFtZVwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJocmVmXCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9yaWdpblwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwYXNzd29yZFwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwYXRobmFtZVwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwb3J0XCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInByb3RvY29sXCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNlYXJjaFwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1c2VybmFtZVwiLCBcIlwiKTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoTG9jYXRpb24sIFt7XG4gICAga2V5OiBcImFzc2lnblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhc3NpZ24oKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInJlbG9hZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWxvYWQoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInJlcGxhY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbGFjZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIExvY2F0aW9uO1xufSgpO1xuXG59LHt9XSwzMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgTUVESUFfRVJSX0FCT1JURUQgPSAxO1xudmFyIE1FRElBX0VSUl9ORVRXT1JLID0gMjtcbnZhciBNRURJQV9FUlJfREVDT0RFID0gMztcbnZhciBNRURJQV9FUlJfU1JDX05PVF9TVVBQT1JURUQgPSA0O1xudmFyIE1lZGlhRXJyb3IgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWVkaWFFcnJvcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVkaWFFcnJvcik7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKE1lZGlhRXJyb3IsIFt7XG4gICAga2V5OiBcImNvZGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBNRURJQV9FUlJfQUJPUlRFRDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWVzc2FnZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBNZWRpYUVycm9yO1xufSgpO1xubW9kdWxlLmV4cG9ydHMgPSBNZWRpYUVycm9yO1xuXG59LHt9XSwzMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIE5hdmlnYXRvciA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2NyZWF0ZUNsYXNzKGZ1bmN0aW9uIE5hdmlnYXRvcihwbGF0Zm9ybSwgbGFuZ3VhZ2UpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5hdmlnYXRvcik7XG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBsYXRmb3JtXCIsIFwiXCIpO1xuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJsYW5ndWFnZVwiLCBcIlwiKTtcbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXBwVmVyc2lvblwiLCAnNS4wIChpUGhvbmU7IENQVSBpUGhvbmUgT1MgOV8xIGxpa2UgTWFjIE9TIFgpIEFwcGxlV2ViS2l0LzYwMS4xLjQ2IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi85LjAgTW9iaWxlLzEzQjE0MyBTYWZhcmkvNjAxLjEnKTtcbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidXNlckFnZW50XCIsICdNb3ppbGxhLzUuMCAoaVBob25lOyBDUFUgaVBob25lIE9TIDEwXzNfMSBsaWtlIE1hYyBPUyBYKSBBcHBsZVdlYktpdC82MDMuMS4zMCAoS0hUTUwsIGxpa2UgR2Vja28pIE1vYmlsZS8xNEU4MzAxIE5ldFR5cGUvV0lGSSBMYW5ndWFnZS96aF9DTicpO1xuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvbkxpbmVcIiwgdHJ1ZSk7XG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1heFRvdWNoUG9pbnRzXCIsIDEwKTtcbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2VvbG9jYXRpb25cIiwge1xuICAgIGdldEN1cnJlbnRQb3NpdGlvbjogZnVuY3Rpb24gZ2V0Q3VycmVudFBvc2l0aW9uKCkge30sXG4gICAgd2F0Y2hQb3NpdGlvbjogZnVuY3Rpb24gd2F0Y2hQb3NpdGlvbigpIHt9LFxuICAgIGNsZWFyV2F0Y2g6IGZ1bmN0aW9uIGNsZWFyV2F0Y2goKSB7fVxuICB9KTtcbiAgdGhpcy5wbGF0Zm9ybSA9IHBsYXRmb3JtO1xuICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG59KTtcblxufSx7fV0sMzI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRXZlbnRUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFRhcmdldFwiKSk7XG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfZ2V0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHsgX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKTsgfSBlbHNlIHsgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTsgaWYgKCFiYXNlKSByZXR1cm47IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7IGlmIChkZXNjLmdldCkgeyByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzYy52YWx1ZTsgfTsgfSByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7IHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7IG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhazsgfSByZXR1cm4gb2JqZWN0OyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgTm9kZSA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICBfaW5oZXJpdHMoTm9kZSwgX0V2ZW50VGFyZ2V0KTtcbiAgZnVuY3Rpb24gTm9kZShub2RlTmFtZSkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZSk7XG4gICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIE5vZGUpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjaGlsZE5vZGVzXCIsIFtdKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicGFyZW50Tm9kZVwiLCBudWxsKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX25vZGVOYW1lXCIsIFwiXCIpO1xuICAgIF90aGlzLl9ub2RlTmFtZSA9IG5vZGVOYW1lO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoTm9kZSwgW3tcbiAgICBrZXk6IFwiYXBwZW5kQ2hpbGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kQ2hpbGQobm9kZSkge1xuICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2gobm9kZSk7XG4gICAgICBub2RlLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgdmFyIG5vZGVOYW1lID0gbm9kZS5ub2RlTmFtZTtcbiAgICAgIGlmIChub2RlTmFtZSA9PT0gXCJTQ1JJUFRcIiB8fCBub2RlTmFtZSA9PT0gXCJTVFlMRVwiKSB7XG4gICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImFwcGVuZFwiKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xvbmVOb2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb25lTm9kZSgpIHtcbiAgICAgIHZhciBjb3B5Tm9kZSA9IE9iamVjdC5jcmVhdGUodGhpcyk7XG4gICAgICBPYmplY3QuYXNzaWduKGNvcHlOb2RlLCB0aGlzKTtcbiAgICAgIGNvcHlOb2RlLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgcmV0dXJuIGNvcHlOb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVDaGlsZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVDaGlsZChub2RlKSB7XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuZmluZEluZGV4KGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQgPT09IG5vZGU7XG4gICAgICB9KTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHZhciBfbm9kZSA9IHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xuICAgICAgICBfbm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF9ub2RlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbnRhaW5zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnRhaW5zKG5vZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihub2RlKSA+IC0xO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkaXNwYXRjaEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSBsZW5ndGggLSAxOyByZXN1bHQgJiYgaW5kZXggPj0gMDsgLS1pbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMkY2hpbGROb2RlcyRpbmRlO1xuICAgICAgICByZXN1bHQgPSAoX3RoaXMkY2hpbGROb2RlcyRpbmRlID0gdGhpcy5jaGlsZE5vZGVzW2luZGV4XSkuZGlzcGF0Y2hFdmVudC5hcHBseShfdGhpcyRjaGlsZE5vZGVzJGluZGUsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihOb2RlLnByb3RvdHlwZSksIFwiZGlzcGF0Y2hFdmVudFwiLCB0aGlzKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJub2RlTmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX25vZGVOYW1lO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTm9kZTtcbn0oX0V2ZW50VGFyZ2V0MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vRXZlbnRUYXJnZXRcIjoxMX1dLDMzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvV2Vha01hcFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIE5vZGVMaXN0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vZGVMaXN0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlTGlzdCk7XG4gICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLnNldCh0aGlzLCB7XG4gICAgICBhcnJheTogW11cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IFByb3h5KHRoaXMsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwga2V5KSB7XG4gICAgICAgIGlmIChfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL15bMC05XSokLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0YXJnZXQpLmFycmF5W2tleV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldFtrZXldO1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmJpbmQodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhOb2RlTGlzdCwgW3tcbiAgICBrZXk6IFwicHVzaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoKGVsZW1lbnQpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXJyYXkucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXRlbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpdGVtKGluZGV4KSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5hcnJheVtpbmRleF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxlbmd0aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXJyYXkubGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb25jYXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29uY2F0KCkge1xuICAgICAgdmFyIGFycmF5ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5hcnJheTtcbiAgICAgIHJldHVybiBhcnJheS5jb25jYXQuYXBwbHkoYXJyYXksIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBOb2RlTGlzdDtcbn0oKTtcblxufSx7XCIuL3V0aWwvV2Vha01hcFwiOjU3fV0sMzQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfU2NyZWVuT3JpZW50YXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1NjcmVlbk9yaWVudGF0aW9uXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxud2luZG93LnJhbCA9IHdpbmRvdy5yYWwgfHwge307XG52YXIgU2NyZWVuID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNjcmVlbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2NyZWVuKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhdmFpbFRvcFwiLCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhdmFpbExlZnRcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXZhaWxIZWlnaHRcIiwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhdmFpbFdpZHRoXCIsIHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb2xvckRlcHRoXCIsIDgpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBpeGVsRGVwdGhcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibGVmdFwiLCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b3BcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwid2lkdGhcIiwgd2luZG93LmlubmVyV2lkdGgpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImhlaWdodFwiLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9yaWVudGF0aW9uXCIsIG5ldyBfU2NyZWVuT3JpZW50YXRpb25bXCJkZWZhdWx0XCJdKCkpO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhTY3JlZW4sIFt7XG4gICAga2V5OiBcIm9ub3JpZW50YXRpb25jaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25vcmllbnRhdGlvbmNoYW5nZSgpIHt9XG4gIH1dKTtcbiAgcmV0dXJuIFNjcmVlbjtcbn0oKTtcblxufSx7XCIuL1NjcmVlbk9yaWVudGF0aW9uXCI6MzV9XSwzNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9FdmVudFRhcmdldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50VGFyZ2V0XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbnZhciBTY3JlZW5PcmllbnRhdGlvbiA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICBfaW5oZXJpdHMoU2NyZWVuT3JpZW50YXRpb24sIF9FdmVudFRhcmdldCk7XG4gIGZ1bmN0aW9uIFNjcmVlbk9yaWVudGF0aW9uKCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2NyZWVuT3JpZW50YXRpb24pO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBTY3JlZW5PcmllbnRhdGlvbik7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl90eXBlXCIsIFwicG9ydHJhaXQtcHJpbWFyeVwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2FuZ2xlXCIsIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfaXNMb2NrZWRcIiwgZmFsc2UpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoU2NyZWVuT3JpZW50YXRpb24sIFt7XG4gICAga2V5OiBcInR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhbmdsZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FuZ2xlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbmNoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbmNoYW5nZShldmVudCkge31cbiAgfSwge1xuICAgIGtleTogXCJsb2NrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvY2sob3JpZW50YXRpb24pIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKF90aGlzMi5faXNMb2NrZWQpIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiU2NyZWVuIG9yaWVudGF0aW9uIGlzIGFscmVhZHkgbG9ja2VkXCIpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMyLl9pc0xvY2tlZCA9IHRydWU7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bmxvY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5sb2NrKCkge1xuICAgICAgdGhpcy5faXNMb2NrZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFNjcmVlbk9yaWVudGF0aW9uO1xufShfRXZlbnRUYXJnZXQyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9FdmVudFRhcmdldFwiOjExfV0sMzY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbnZhciBUb3VjaEV2ZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX0V2ZW50KSB7XG4gIF9pbmhlcml0cyhUb3VjaEV2ZW50LCBfRXZlbnQpO1xuICBmdW5jdGlvbiBUb3VjaEV2ZW50KHR5cGUpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvdWNoRXZlbnQpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBUb3VjaEV2ZW50LCBbdHlwZV0pO1xuICAgIF90aGlzLnRvdWNoZXMgPSBbXTtcbiAgICBfdGhpcy50YXJnZXRUb3VjaGVzID0gW107XG4gICAgX3RoaXMuY2hhbmdlZFRvdWNoZXMgPSBbXTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhUb3VjaEV2ZW50KTtcbn0oX0V2ZW50MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vRXZlbnRcIjoxMH1dLDM3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG52YXIgX0ZpbGVDYWNoZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9GaWxlQ2FjaGVcIikpO1xudmFyIF9YTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9YTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0XCIpKTtcbnZhciBfWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1hNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsgfVxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTsgcmV0dXJuIGFycjI7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgZnNtID0gcmFsLmdldEZpbGVTeXN0ZW1NYW5hZ2VyKCk7XG52YXIgX1hNTEh0dHBSZXF1ZXN0ID0gd2luZG93LlhNTEh0dHBSZXF1ZXN0O1xud2luZG93LnJhbCA9IHdpbmRvdy5yYWwgfHwge307XG52YXIgWE1MSHR0cFJlcXVlc3QgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfWE1MSHR0cFJlcXVlc3RFdmVudFQpIHtcbiAgX2luaGVyaXRzKFhNTEh0dHBSZXF1ZXN0LCBfWE1MSHR0cFJlcXVlc3RFdmVudFQpO1xuICBmdW5jdGlvbiBYTUxIdHRwUmVxdWVzdCgpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFhNTEh0dHBSZXF1ZXN0KTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgWE1MSHR0cFJlcXVlc3QsIFtuZXcgX1hNTEh0dHBSZXF1ZXN0KCldKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2lzTG9jYWxcIiwgZmFsc2UpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfaXNDYWNoZVwiLCBmYWxzZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl91cmxcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3JlYWR5U3RhdGVcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9yZXNwb25zZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfcmVzcG9uc2VUZXh0XCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9yZXNwb25zZVVSTFwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfcmVzcG9uc2VYTUxcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3N0YXR1c1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfc3RhdHVzVGV4dFwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfcmVzcG9uc2VUeXBlXCIsIHZvaWQgMCk7XG4gICAgdmFyIHhociA9IF90aGlzLl94aHI7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInJlYWR5c3RhdGVjaGFuZ2VcIik7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhYTUxIdHRwUmVxdWVzdCwgW3tcbiAgICBrZXk6IFwicmVhZHlTdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuX2lzUmVtb3RlKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3hoci5yZWFkeVN0YXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWR5U3RhdGU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9pc1JlbW90ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNSZW1vdGUoKSB7XG4gICAgICByZXR1cm4gISh0aGlzLl9pc0xvY2FsIHx8IHRoaXMuX2lzQ2FjaGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNwb25zZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHJlc3BvbnNlID0gdGhpcy5faXNSZW1vdGUoKSA/IHRoaXMuX3hoci5yZXNwb25zZSA6IHRoaXMuX3Jlc3BvbnNlO1xuICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX3Jlc3BvbnNlVHlwZSA9PT0gXCJibG9iXCIgPyBuZXcgQmxvYihbcmVzcG9uc2VdKSA6IHJlc3BvbnNlO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzcG9uc2VUZXh0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5faXNSZW1vdGUoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRleHQ7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc3BvbnNlVHlwZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVHlwZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLl9yZXNwb25zZVR5cGUgPSB0aGlzLl94aHIucmVzcG9uc2VUeXBlID0gdmFsdWU7XG4gICAgICBpZiAodmFsdWUgPT09IFwiYmxvYlwiKSB7XG4gICAgICAgIHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc3BvbnNlVVJMXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5faXNSZW1vdGUoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnJlc3BvbnNlVVJMO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVVJMO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNwb25zZVhNTFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuX2lzUmVtb3RlKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3hoci5yZXNwb25zZVhNTDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVhNTDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdHVzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5faXNSZW1vdGUoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnN0YXR1cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXR1c1RleHRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc1JlbW90ZSgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94aHIuc3RhdHVzVGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXNUZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lb3V0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5feGhyLnRpbWVvdXQ7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5feGhyLnRpbWVvdXQgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBsb2FkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5feGhyLnVwbG9hZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwid2l0aENyZWRlbnRpYWxzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5feGhyLndpdGhDcmVkZW50aWFscztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLl94aHIud2l0aENyZWRlbnRpYWxzID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFib3J0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgdGhpcy5feGhyLmFib3J0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEFsbFJlc3BvbnNlSGVhZGVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRSZXNwb25zZUhlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZXNwb25zZUhlYWRlcihuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5feGhyLmdldFJlc3BvbnNlSGVhZGVyKG5hbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvcGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW4obWV0aG9kLCB1cmwsIGFzeW5jLCB1c2VyLCBwYXNzd29yZCkge1xuICAgICAgdGhpcy5fdXJsID0gdXJsO1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdmFyIF91cmwgPSB1cmwudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgaWYgKF91cmwuc3RhcnRzV2l0aChcImh0dHA6Ly9cIikgfHwgX3VybC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9cIikpIHtcbiAgICAgICAgICB2YXIgX3RoaXMkX3hocjtcbiAgICAgICAgICB0aGlzLl9pc0xvY2FsID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIChfdGhpcyRfeGhyID0gdGhpcy5feGhyKS5vcGVuLmFwcGx5KF90aGlzJF94aHIsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzTG9jYWwgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuX3JlYWR5U3RhdGUgIT09IDEpIHtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IDE7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInJlYWR5c3RhdGVjaGFuZ2VcIikpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvdmVycmlkZU1pbWVUeXBlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG92ZXJyaWRlTWltZVR5cGUoKSB7XG4gICAgICB2YXIgX3RoaXMkX3hocjI7XG4gICAgICByZXR1cm4gKF90aGlzJF94aHIyID0gdGhpcy5feGhyKS5vdmVycmlkZU1pbWVUeXBlLmFwcGx5KF90aGlzJF94aHIyLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmQoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSAxKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgRE9NRXhjZXB0aW9uOiBGYWlsZWQgdG8gZXhlY3V0ZSAnc2VuZCcgb24gJ1hNTEh0dHBSZXF1ZXN0JzogVGhlIG9iamVjdCdzIHN0YXRlIG11c3QgYmUgT1BFTkVELlwiO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2lzTG9jYWwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgaXNCaW5hcnkgPSB0aGlzLl94aHIucmVzcG9uc2VUeXBlID09PSBcImFycmF5YnVmZmVyXCI7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSAyO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJyZWFkeXN0YXRlY2hhbmdlXCIpKTtcbiAgICAgICAgZnNtLnJlYWRGaWxlKHtcbiAgICAgICAgICBmaWxlUGF0aDogdGhpcy5fdXJsLFxuICAgICAgICAgIGVuY29kaW5nOiBpc0JpbmFyeSA/IFwiYmluYXJ5XCIgOiBcInV0ZjhcIixcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgc2VsZi5fc3RhdHVzID0gMjAwO1xuICAgICAgICAgICAgc2VsZi5fcmVzcG9uc2UgPSBzZWxmLl9yZXNwb25zZVRleHQgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGlmIChpc0JpbmFyeSkge1xuICAgICAgICAgICAgICBfRmlsZUNhY2hlW1wiZGVmYXVsdFwiXS5zZXRDYWNoZShzZWxmLl91cmwsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBldmVudFByb2dyZXNzU3RhcnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgZXZlbnRQcm9ncmVzc1N0YXJ0LmxvYWRlZCA9IDA7XG4gICAgICAgICAgICBldmVudFByb2dyZXNzU3RhcnQudG90YWwgPSBpc0JpbmFyeSA/IHJlcy5kYXRhLmJ5dGVMZW5ndGggOiByZXMuZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgZXZlbnRQcm9ncmVzc0VuZCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwicHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICBldmVudFByb2dyZXNzRW5kLmxvYWRlZCA9IGV2ZW50UHJvZ3Jlc3NTdGFydC50b3RhbDtcbiAgICAgICAgICAgIGV2ZW50UHJvZ3Jlc3NFbmQudG90YWwgPSBldmVudFByb2dyZXNzU3RhcnQudG90YWw7XG4gICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2Fkc3RhcnRcIikpO1xuICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50UHJvZ3Jlc3NTdGFydCk7XG4gICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnRQcm9ncmVzc0VuZCk7XG4gICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkXCIpKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMuZXJyQ29kZSA9PT0gMSkge1xuICAgICAgICAgICAgICBzZWxmLl9zdGF0dXMgPSA0MDQ7XG4gICAgICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRzdGFydFwiKSk7XG4gICAgICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRcIikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwiZXJyb3JcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IDQ7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJyZWFkeXN0YXRlY2hhbmdlXCIpKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRlbmRcIikpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgdmFyIGNhY2hlUGF0aCA9IF9YTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlcltcImRlZmF1bHRcIl0uZ2V0SW5zdGFuY2UoKS5nZXRDYWNoZVBhdGgodGhpcy5fdXJsKTtcbiAgICAgICAgaWYgKGNhY2hlUGF0aCkge1xuICAgICAgICAgIGZzbS5yZWFkRmlsZSh7XG4gICAgICAgICAgICBmaWxlUGF0aDogY2FjaGVQYXRoLFxuICAgICAgICAgICAgZW5jb2Rpbmc6IFwiYmluYXJ5XCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2lzQ2FjaGUgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSAyMDA7XG4gICAgICAgICAgICAgIHRoaXMuX3Jlc3BvbnNlID0gdGhpcy5fcmVzcG9uc2VUZXh0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgIHZhciBldmVudFByb2dyZXNzU3RhcnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgICBldmVudFByb2dyZXNzU3RhcnQubG9hZGVkID0gMDtcbiAgICAgICAgICAgICAgZXZlbnRQcm9ncmVzc1N0YXJ0LnRvdGFsID0gcmVzLmRhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgICAgICAgdmFyIGV2ZW50UHJvZ3Jlc3NFbmQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgICBldmVudFByb2dyZXNzRW5kLmxvYWRlZCA9IGV2ZW50UHJvZ3Jlc3NTdGFydC50b3RhbDtcbiAgICAgICAgICAgICAgZXZlbnRQcm9ncmVzc0VuZC50b3RhbCA9IGV2ZW50UHJvZ3Jlc3NTdGFydC50b3RhbDtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZHN0YXJ0XCIpKTtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50UHJvZ3Jlc3NTdGFydCk7XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudFByb2dyZXNzRW5kKTtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZFwiKSk7XG4gICAgICAgICAgICAgIF9YTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlcltcImRlZmF1bHRcIl0uZ2V0SW5zdGFuY2UoKS51cGRhdGVMYXN0VGltZSh0aGlzLl91cmwpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJYTUxIdHRwUmVxdWVzdCByZWFkIGNhY2hlIGZhaWwgZmFpbDogXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSA0O1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInJlYWR5c3RhdGVjaGFuZ2VcIikpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRlbmRcIikpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyRfeGhyMztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJYTUxIdHRwUmVxdWVzdCByZWFkIGNhY2hlIGZhaWwsIGNvbnRpbnVlIHNlbmQgbmV0d29yayByZXF1ZXN0LiB1cmw6IFwiICsgdGhpcy5fdXJsKTtcbiAgICAgICAgICAgICAgICAoX3RoaXMkX3hocjMgPSB0aGlzLl94aHIpLnNlbmQuYXBwbHkoX3RoaXMkX3hocjMsIF90b0NvbnN1bWFibGVBcnJheShfYXJncykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX3RoaXMkX3hocjQ7XG4gICAgICAgICAgKF90aGlzJF94aHI0ID0gdGhpcy5feGhyKS5zZW5kLmFwcGx5KF90aGlzJF94aHI0LCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFJlcXVlc3RIZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRfeGhyNTtcbiAgICAgIChfdGhpcyRfeGhyNSA9IHRoaXMuX3hocikuc2V0UmVxdWVzdEhlYWRlci5hcHBseShfdGhpcyRfeGhyNSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFhNTEh0dHBSZXF1ZXN0O1xufShfWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFtcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXJcIjozOCxcIi4vWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFwiOjM5LFwiLi91dGlsL0ZpbGVDYWNoZVwiOjU2fV0sMzg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfZnNVdGlscyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9mc1V0aWxzXCIpKTtcbnZhciBfdXRpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3V0aWxcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKCFpdCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBpdC5jYWxsKG8pOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTsgcmV0dXJuIGFycjI7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbndpbmRvdy5yYWwgPSB3aW5kb3cucmFsIHx8IHt9O1xudmFyIFhNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFhNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlcik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiSFdfV0FTTV9DQUNIRVNcIiwgXCJod3dhc21jYWNoZXNcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiQ0FDSEVEX0ZJTEVfTkFNRVwiLCBcImNhY2hlTGlzdC5qc29uXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIkRFTEFZX1RJTUVcIiwgNTAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjYWNoZURpclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNhY2hlRmlsZUluZm9ybWF0aW9uRmlsZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNhY2hlZEZpbGVzXCIsIG5ldyBDYWNoZSgpKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ2ZXJzaW9uXCIsIFwiMS4wXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNhY2hlSWRlbnRpZmllcnNcIiwgbmV3IFNldCgpKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJleGNsdWRlQ2FjaGVJZGVudGlmaWVyc1wiLCBuZXcgU2V0KCkpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNsZWFuaW5nXCIsIGZhbHNlKTtcbiAgICB0aGlzLmNhY2hlRGlyID0gcmFsLmVudi5VU0VSX0RBVEFfUEFUSCArIFwiL1wiICsgdGhpcy5IV19XQVNNX0NBQ0hFUztcbiAgICB0aGlzLmNhY2hlRmlsZUluZm9ybWF0aW9uRmlsZSA9IHRoaXMuY2FjaGVEaXIgKyBcIi9cIiArIHRoaXMuQ0FDSEVEX0ZJTEVfTkFNRTtcbiAgICB0aGlzLmNhY2hlSWRlbnRpZmllcnMuYWRkKFwiU3RyZWFtaW5nQXNzZXRzXCIpO1xuICAgIHZhciByZXN1bHQgPSBfZnNVdGlsc1tcImRlZmF1bHRcIl0ucmVhZEpzb25TeW5jKHRoaXMuY2FjaGVGaWxlSW5mb3JtYXRpb25GaWxlKTtcbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgfHwgdGhpcy52ZXJzaW9uICE9PSByZXN1bHQudmVyc2lvbikge1xuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIgcmVhZEpzb25TeW5jIHJlc3VsdCBlcnJvciBtZXNzYWdlOiBcIiArIHJlc3VsdC5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIgcmVhZEpzb25TeW5jIHJlc3VsdCBlcnJvciB2ZXJzaW9uOiBcIiArIHJlc3VsdC52ZXJzaW9uKTtcbiAgICAgICAgX2ZzVXRpbHNbXCJkZWZhdWx0XCJdLnJtZGlyU3luYyh0aGlzLmNhY2hlRGlyLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIF9mc1V0aWxzW1wiZGVmYXVsdFwiXS5tYWtlRGlyU3luYyh0aGlzLmNhY2hlRGlyLCB0cnVlKTtcbiAgICAgIHRoaXMuX3dyaXRlQ2FjaGVGaWxlSW5mb3JtYXRpb25GaWxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FjaGVkRmlsZXMgPSBuZXcgQ2FjaGUocmVzdWx0LmZpbGVzKTtcbiAgICB9XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKFhNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyLCBbe1xuICAgIGtleTogXCJRR19BZGRDYWNoZUlkZW50aWZpZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIFFHX0FkZENhY2hlSWRlbnRpZmllcnMoY29uZikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciBqc29uT2JqID0gX3V0aWxbXCJkZWZhdWx0XCJdLmZvcm1hdEpzb25TdHIoY29uZik7XG4gICAgICBpZiAoIShcImNhY2hlSWRlbnRpZmllcnNcIiBpbiBqc29uT2JqKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgY2FjaGVJZGVudGlmaWVycyA9IGpzb25PYmpbXCJjYWNoZUlkZW50aWZpZXJzXCJdO1xuICAgICAgaWYgKCEoY2FjaGVJZGVudGlmaWVycyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYWNoZUlkZW50aWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIF90aGlzLmNhY2hlSWRlbnRpZmllcnMuYWRkKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJRR19BZGRFeGNsdWRlQ2FjaGVJZGVudGlmaWVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBRR19BZGRFeGNsdWRlQ2FjaGVJZGVudGlmaWVycyhjb25mKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgIHZhciBqc29uT2JqID0gX3V0aWxbXCJkZWZhdWx0XCJdLmZvcm1hdEpzb25TdHIoY29uZik7XG4gICAgICBpZiAoIShcImV4Y2x1ZGVDYWNoZUlkZW50aWZpZXJzXCIgaW4ganNvbk9iaikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGV4Y2x1ZGVDYWNoZUlkZW50aWZpZXJzID0ganNvbk9ialtcImV4Y2x1ZGVDYWNoZUlkZW50aWZpZXJzXCJdO1xuICAgICAgaWYgKCEoZXhjbHVkZUNhY2hlSWRlbnRpZmllcnMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXhjbHVkZUNhY2hlSWRlbnRpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgX3RoaXMyLmV4Y2x1ZGVDYWNoZUlkZW50aWZpZXJzLmFkZCh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiUUdfSGFzQ2FjaGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gUUdfSGFzQ2FjaGUodXJsKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmdldENhY2hlUGF0aCh1cmwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJRR19EZWxldGVDYWNoZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBRR19EZWxldGVDYWNoZSh1cmwpIHtcbiAgICAgIGlmICh0aGlzLmNsZWFuaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIgUUdfRGVsZXRlQ2FjaGUgaXMgY2xlYW5pbmcuIHVybDogXCIgKyB1cmwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNsZWFuaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGVkRmlsZXMuZ2V0KHVybCk7XG4gICAgICBpZiAoIWNhY2hlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIgUUdfRGVsZXRlQ2FjaGUgbm90IGV4aXN0IGNhY2hlLiB1cmw6IFwiICsgdXJsKTtcbiAgICAgICAgdGhpcy5jbGVhbmluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgbmVlZERlbGV0ZUNhY2hlcyA9IFtdO1xuICAgICAgbmVlZERlbGV0ZUNhY2hlcy5wdXNoKHtcbiAgICAgICAgb3JpZ2luVXJsOiB1cmwsXG4gICAgICAgIHVybDogY2FjaGUudXJsLFxuICAgICAgICBsYXN0VGltZTogY2FjaGUubGFzdFRpbWVcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBRR19EZWxldGVDYWNoZSBzdGFydC4gdXJsOiBcIiArIHVybCk7XG4gICAgICB0aGlzLl9kZWxheURlbGV0ZUNhY2hlRmlsZShuZWVkRGVsZXRlQ2FjaGVzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiUUdfQ2xlYXJMcnVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gUUdfQ2xlYXJMcnUoKSB7XG4gICAgICB0aGlzLl9jbGVhckxSVSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfd3JpdGVDYWNoZUZpbGVJbmZvcm1hdGlvbkZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3dyaXRlQ2FjaGVGaWxlSW5mb3JtYXRpb25GaWxlKCkge1xuICAgICAgcmV0dXJuIF9mc1V0aWxzW1wiZGVmYXVsdFwiXS53cml0ZUZpbGVTeW5jKHRoaXMuY2FjaGVGaWxlSW5mb3JtYXRpb25GaWxlLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGZpbGVzOiB0aGlzLmNhY2hlZEZpbGVzLl9tYXAsXG4gICAgICAgIHZlcnNpb246IHRoaXMudmVyc2lvblxuICAgICAgfSksICd1dGY4Jyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm5lZWRDYWNoZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWVkQ2FjaGUodXJsKSB7XG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jbGVhbmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgbmVlZENhY2hlID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIodGhpcy5jYWNoZUlkZW50aWZpZXJzKSxcbiAgICAgICAgX3N0ZXA7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciBjYWNoZUlkZW50aWZpZXIgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICBpZiAoLTEgIT09IHVybC5pbmRleE9mKGNhY2hlSWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgIG5lZWRDYWNoZSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHRoaXMuZXhjbHVkZUNhY2hlSWRlbnRpZmllcnMpLFxuICAgICAgICAgICAgICBfc3RlcDI7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgICAgICAgICAgIHZhciBleGNsdWRlQ2FjaGVJZGVudGlmaWVyID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICgtMSAhPT0gdXJsLmluZGV4T2YoZXhjbHVkZUNhY2hlSWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgICAgICAgIG5lZWRDYWNoZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG5lZWRDYWNoZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBfaXRlcmF0b3IyLmUoZXJyKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIF9pdGVyYXRvcjIuZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5lZWRDYWNoZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZWVkQ2FjaGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENhY2hlUGF0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDYWNoZVBhdGgodXJsKSB7XG4gICAgICBpZiAodGhpcy5jYWNoZWRGaWxlcy5oYXModXJsKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRGaWxlcy5nZXQodXJsKS51cmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlTGFzdFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlTGFzdFRpbWUodXJsKSB7XG4gICAgICBpZiAodGhpcy5jYWNoZWRGaWxlcy5oYXModXJsKSkge1xuICAgICAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlZEZpbGVzLmdldCh1cmwpO1xuICAgICAgICBjYWNoZS5sYXN0VGltZSA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX3dyaXRlQ2FjaGVGaWxlSW5mb3JtYXRpb25GaWxlKCk7XG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvciAmJiBfZnNVdGlsc1tcImRlZmF1bHRcIl0uaXNPdXRPZlN0b3JhZ2UocmVzdWx0Lm1lc3NhZ2UpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciB1cGRhdGVMYXN0VGltZSBuZWVkIGNsZWFyTFJVLlwiKTtcbiAgICAgICAgICB0aGlzLl9jbGVhckxSVSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIndyaXRlQ2FjaGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd3JpdGVDYWNoZSh1cmwsIHJlc3BvbnNlKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuX3dyaXRlQ2FjaGVGaWxlLmJpbmQodGhpcyksIHRoaXMuREVMQVlfVElNRSwgdXJsLCByZXNwb25zZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl93cml0ZUNhY2hlRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfd3JpdGVDYWNoZUZpbGUodXJsLCByZXNwb25zZSkge1xuICAgICAgaWYgKCF1cmwgfHwgIXJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNsZWFuaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIgX3dyaXRlQ2FjaGVGaWxlIGNsZWFuaW5nIG5vdCB3cml0ZSB1cmw6IFwiICsgdXJsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGNhY2hlUGF0aCA9IHRoaXMuY2FjaGVEaXIgKyBcIi9cIiArIHdpbmRvdy5idG9hKHVybCk7XG4gICAgICBfZnNVdGlsc1tcImRlZmF1bHRcIl0ud3JpdGVGaWxlKGNhY2hlUGF0aCwgcmVzcG9uc2UsICdiaW5hcnknLCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGlmIChyZXMgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlhNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyIF93cml0ZUNhY2hlRmlsZSBvbkNvbXBsZXRlIGVycm9yOiBcIiArIHJlcy5tZXNzYWdlKTtcbiAgICAgICAgICBpZiAoX2ZzVXRpbHNbXCJkZWZhdWx0XCJdLmlzT3V0T2ZTdG9yYWdlKHJlcy5tZXNzYWdlKSkge1xuICAgICAgICAgICAgc2VsZi5fY2xlYXJMUlUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmNsZWFuaW5nKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBfd3JpdGVDYWNoZUZpbGUgb25Db21wbGV0ZSBjbGVhbmluZyBub3Qgd3JpdGUgdXJsOiBcIiArIHVybCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuY2FjaGVkRmlsZXMuc2V0KHVybCwge1xuICAgICAgICAgIHVybDogY2FjaGVQYXRoLFxuICAgICAgICAgIGxhc3RUaW1lOiBEYXRlLm5vdygpLnRvU3RyaW5nKClcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZXN1bHQgPSBzZWxmLl93cml0ZUNhY2hlRmlsZUluZm9ybWF0aW9uRmlsZSgpO1xuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgJiYgX2ZzVXRpbHNbXCJkZWZhdWx0XCJdLmlzT3V0T2ZTdG9yYWdlKHJlc3VsdC5tZXNzYWdlKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIgX3dyaXRlQ2FjaGVGaWxlIF93cml0ZUNhY2hlRmlsZUluZm9ybWF0aW9uRmlsZSBuZWVkIGNsZWFyTFJVLlwiKTtcbiAgICAgICAgICBzZWxmLl9jbGVhckxSVSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2NsZWFyTFJVXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9jbGVhckxSVSgpIHtcbiAgICAgIGlmICh0aGlzLmNsZWFuaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIgX2NsZWFyTFJVIGlzIGNsZWFuaW5nLCBkb24ndCBuZWVkIGFnYWluLlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBfY2xlYXJMUlUgc3RhcnQuXCIpO1xuICAgICAgdGhpcy5jbGVhbmluZyA9IHRydWU7XG4gICAgICB2YXIgZGlydHlGaWxlcyA9IHRoaXMuX2dldERpcnR5RmlsZXMoKTtcbiAgICAgIGlmIChkaXJ0eUZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBfY2xlYXJMUlUgZGlydHlGaWxlcyBsZW5ndGg6IFwiICsgZGlydHlGaWxlcy5sZW5ndGgpO1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuX2RlbGF5RGVsZXRlRGlydHlGaWxlLmJpbmQodGhpcyksIHRoaXMuREVMQVlfVElNRSwgZGlydHlGaWxlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kZWxldGVDYWNoZUZpbGVzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9nZXREaXJ0eUZpbGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXREaXJ0eUZpbGVzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG4gICAgICB2YXIgZGlydHlGaWxlcyA9IFtdO1xuICAgICAgdmFyIGZpbGVzID0gX2ZzVXRpbHNbXCJkZWZhdWx0XCJdLnJlYWREaXJTeW5jKHRoaXMuY2FjaGVEaXIpO1xuICAgICAgaWYgKGZpbGVzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZmlsZXMgPSBmaWxlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbSAhPT0gX3RoaXMzLkNBQ0hFRF9GSUxFX05BTUU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmlsZXMuc2l6ZSAhPT0gMCkge1xuICAgICAgICAgIHZhciBjYWNoZWRGaWxlc0xvY2FsVXJsID0gbmV3IFNldCgpO1xuICAgICAgICAgIHRoaXMuY2FjaGVkRmlsZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgY2FjaGVkRmlsZXNMb2NhbFVybC5hZGQodmFsdWUudXJsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgX2l0ZXJhdG9yMyA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGZpbGVzKSxcbiAgICAgICAgICAgIF9zdGVwMztcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChfaXRlcmF0b3IzLnMoKTsgIShfc3RlcDMgPSBfaXRlcmF0b3IzLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICAgICAgdmFyIGZpbGUgPSBfc3RlcDMudmFsdWU7XG4gICAgICAgICAgICAgIHZhciBmaWxlcGF0aCA9IHRoaXMuY2FjaGVEaXIgKyBcIi9cIiArIGZpbGU7XG4gICAgICAgICAgICAgIGlmICghY2FjaGVkRmlsZXNMb2NhbFVybC5oYXMoZmlsZXBhdGgpKSB7XG4gICAgICAgICAgICAgICAgZGlydHlGaWxlcy5wdXNoKGZpbGVwYXRoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yMy5lKGVycik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjMuZigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRpcnR5RmlsZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9kZWxheURlbGV0ZURpcnR5RmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVsYXlEZWxldGVEaXJ0eUZpbGUoZGlydHlGaWxlc0FycmF5KSB7XG4gICAgICB2YXIgaXRlbSA9IGRpcnR5RmlsZXNBcnJheS5wb3AoKTtcbiAgICAgIF9mc1V0aWxzW1wiZGVmYXVsdFwiXS5kZWxldGVGaWxlKGl0ZW0pO1xuICAgICAgaWYgKGRpcnR5RmlsZXNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5fZGVsYXlEZWxldGVEaXJ0eUZpbGUuYmluZCh0aGlzKSwgdGhpcy5ERUxBWV9USU1FLCBkaXJ0eUZpbGVzQXJyYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGVsZXRlQ2FjaGVGaWxlcygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZGVsZXRlQ2FjaGVGaWxlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVsZXRlQ2FjaGVGaWxlcygpIHtcbiAgICAgIHZhciBuZWVkRGVsZXRlQ2FjaGVzID0gW107XG4gICAgICB0aGlzLmNhY2hlZEZpbGVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgbmVlZERlbGV0ZUNhY2hlcy5wdXNoKHtcbiAgICAgICAgICBvcmlnaW5Vcmw6IGtleSxcbiAgICAgICAgICB1cmw6IHZhbHVlLnVybCxcbiAgICAgICAgICBsYXN0VGltZTogdmFsdWUubGFzdFRpbWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIG5lZWREZWxldGVDYWNoZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5sYXN0VGltZSAtIGIubGFzdFRpbWU7XG4gICAgICB9KTtcbiAgICAgIG5lZWREZWxldGVDYWNoZXMubGVuZ3RoID0gTWF0aC5mbG9vcihuZWVkRGVsZXRlQ2FjaGVzLmxlbmd0aCAvIDMpO1xuICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBfZGVsZXRlQ2FjaGVGaWxlcyBuZWVkRGVsZXRlQ2FjaGVzIGxlbmd0aDogXCIgKyBuZWVkRGVsZXRlQ2FjaGVzLmxlbmd0aCk7XG4gICAgICBpZiAobmVlZERlbGV0ZUNhY2hlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBjbGVhbmluZyBlbmQuXCIpO1xuICAgICAgICB0aGlzLmNsZWFuaW5nID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuX2RlbGF5RGVsZXRlQ2FjaGVGaWxlLmJpbmQodGhpcyksIHRoaXMuREVMQVlfVElNRSwgbmVlZERlbGV0ZUNhY2hlcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9kZWxheURlbGV0ZUNhY2hlRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVsYXlEZWxldGVDYWNoZUZpbGUobmVlZERlbGV0ZUNhY2hlcykge1xuICAgICAgdmFyIGl0ZW0gPSBuZWVkRGVsZXRlQ2FjaGVzLnBvcCgpO1xuICAgICAgdGhpcy5jYWNoZWRGaWxlc1tcImRlbGV0ZVwiXShpdGVtLm9yaWdpblVybCk7XG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fd3JpdGVDYWNoZUZpbGVJbmZvcm1hdGlvbkZpbGUoKTtcbiAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvciAmJiAhX2ZzVXRpbHNbXCJkZWZhdWx0XCJdLmlzT3V0T2ZTdG9yYWdlKHJlc3VsdC5tZXNzYWdlKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBfZGVsYXlEZWxldGVDYWNoZUZpbGUgZXJyb3IgbWVzc2FnZS5cIiArIHJlc3VsdC5tZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBjbGVhbmluZyBlbmQuXCIpO1xuICAgICAgICB0aGlzLmNsZWFuaW5nID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfZnNVdGlsc1tcImRlZmF1bHRcIl0uZGVsZXRlRmlsZShpdGVtLnVybCk7XG4gICAgICAgIGlmIChuZWVkRGVsZXRlQ2FjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuX2RlbGF5RGVsZXRlQ2FjaGVGaWxlLmJpbmQodGhpcyksIHRoaXMuREVMQVlfVElNRSwgbmVlZERlbGV0ZUNhY2hlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBjbGVhbmluZyBlbmQuXCIpO1xuICAgICAgICAgIHRoaXMuY2xlYW5pbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldEluc3RhbmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKCkge1xuICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXI7XG59KCk7XG5fZGVmaW5lUHJvcGVydHkoWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIsIFwiaW5zdGFuY2VcIiwgdm9pZCAwKTtcbnZhciBDYWNoZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2FjaGUobWFwKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhY2hlKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbWFwXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2NvdW50XCIsIHZvaWQgMCk7XG4gICAgaWYgKG1hcCkge1xuICAgICAgdGhpcy5fbWFwID0gbWFwO1xuICAgICAgdGhpcy5fY291bnQgPSBPYmplY3Qua2V5cyhtYXApLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHRoaXMuX2NvdW50ID0gMDtcbiAgICB9XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKENhY2hlLCBbe1xuICAgIGtleTogXCJoYXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgcmV0dXJuIGtleSBpbiB0aGlzLl9tYXA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwW2tleV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoa2V5LCB2YWwpIHtcbiAgICAgIGlmICghKGtleSBpbiB0aGlzLl9tYXApKSB0aGlzLl9jb3VudCsrO1xuICAgICAgcmV0dXJuIHRoaXMuX21hcFtrZXldID0gdmFsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JFYWNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvckVhY2goZnVuYykge1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuX21hcCkge1xuICAgICAgICBmdW5jKHRoaXMuX21hcFtrZXldLCBrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWxldGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2RlbGV0ZShrZXkpIHtcbiAgICAgIHZhciBvdXQgPSB0aGlzLl9tYXBba2V5XTtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5fbWFwKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9tYXBba2V5XTtcbiAgICAgICAgdGhpcy5fY291bnQtLTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDYWNoZTtcbn0oKTtcblhNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG52YXIgX1hNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyID0ge1xuICBRR19BZGRDYWNoZUlkZW50aWZpZXJzOiBmdW5jdGlvbiBRR19BZGRDYWNoZUlkZW50aWZpZXJzKGNvbmYpIHtcbiAgICBYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlci5nZXRJbnN0YW5jZSgpLlFHX0FkZENhY2hlSWRlbnRpZmllcnMoY29uZik7XG4gIH0sXG4gIFFHX0FkZEV4Y2x1ZGVDYWNoZUlkZW50aWZpZXJzOiBmdW5jdGlvbiBRR19BZGRFeGNsdWRlQ2FjaGVJZGVudGlmaWVycyhjb25mKSB7XG4gICAgWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5RR19BZGRFeGNsdWRlQ2FjaGVJZGVudGlmaWVycyhjb25mKTtcbiAgfSxcbiAgUUdfSGFzQ2FjaGU6IGZ1bmN0aW9uIFFHX0hhc0NhY2hlKHVybCkge1xuICAgIHJldHVybiBYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlci5nZXRJbnN0YW5jZSgpLlFHX0hhc0NhY2hlKHVybCk7XG4gIH0sXG4gIFFHX0RlbGV0ZUNhY2hlOiBmdW5jdGlvbiBRR19EZWxldGVDYWNoZSh1cmwpIHtcbiAgICBYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlci5nZXRJbnN0YW5jZSgpLlFHX0RlbGV0ZUNhY2hlKHVybCk7XG4gIH0sXG4gIFFHX0NsZWFyTHJ1OiBmdW5jdGlvbiBRR19DbGVhckxydSgpIHtcbiAgICBYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlci5nZXRJbnN0YW5jZSgpLlFHX0NsZWFyTHJ1KCk7XG4gIH1cbn07XG53aW5kb3cucmFsLlFHX0NhY2hlTWFuYWdlckFkZENhY2hlSWRlbnRpZmllcnMgPSBfWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIuUUdfQWRkQ2FjaGVJZGVudGlmaWVycztcbndpbmRvdy5yYWwuUUdfQ2FjaGVNYW5hZ2VyQWRkRXhjbHVkZUNhY2hlSWRlbnRpZmllcnMgPSBfWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIuUUdfQWRkRXhjbHVkZUNhY2hlSWRlbnRpZmllcnM7XG53aW5kb3cucmFsLlFHX0NhY2hlTWFuYWdlckhhc0NhQ2hlID0gX1hNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyLlFHX0hhc0NhY2hlO1xud2luZG93LnJhbC5RR19DYWNoZU1hbmFnZXJEZWxldGVDYWNoZSA9IF9YTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlci5RR19EZWxldGVDYWNoZTtcbndpbmRvdy5yYWwuUUdfQ2FjaGVNYW5hZ2VyQ2xlYXJMcnUgPSBfWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIuUUdfQ2xlYXJMcnU7XG5cbn0se1wiLi4vdXRpbFwiOjMsXCIuL3V0aWwvZnNVdGlsc1wiOjU4fV0sMzk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRXZlbnRUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFRhcmdldFwiKSk7XG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG52YXIgX1hNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9YTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICBfaW5oZXJpdHMoWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCwgX0V2ZW50VGFyZ2V0KTtcbiAgZnVuY3Rpb24gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCh4aHIpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0KTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3hoclwiLCB2b2lkIDApO1xuICAgIF90aGlzLl94aHIgPSB4aHI7XG4gICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJhYm9ydFwiKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG4gICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImVycm9yXCIpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKHRoaXMucmVzcG9uc2UgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICBpZiAoX1hNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyW1wiZGVmYXVsdFwiXS5nZXRJbnN0YW5jZSgpLm5lZWRDYWNoZSh0aGlzLl91cmwpKSB7XG4gICAgICAgICAgX1hNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyW1wiZGVmYXVsdFwiXS5nZXRJbnN0YW5jZSgpLndyaXRlQ2FjaGUodGhpcy5fdXJsLCB0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGV2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkXCIpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHhoci5vbmxvYWRzdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRzdGFydFwiKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG4gICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInByb2dyZXNzXCIpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJ0aW1lb3V0XCIpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkZW5kXCIpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQpO1xufShfRXZlbnRUYXJnZXQyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9FdmVudFwiOjEwLFwiLi9FdmVudFRhcmdldFwiOjExLFwiLi9YTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlclwiOjM4fV0sNDA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIEFuYWx5c2VyTm9kZSA9IGZ1bmN0aW9uIChfQXVkaW9Ob2RlKSB7XG4gIF9pbmhlcml0cyhBbmFseXNlck5vZGUsIF9BdWRpb05vZGUpO1xuICBmdW5jdGlvbiBBbmFseXNlck5vZGUoY29udGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQW5hbHlzZXJOb2RlKTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgQW5hbHlzZXJOb2RlLCBbY29udGV4dF0pO1xuICAgIF90aGlzLl9mZnRTaXplO1xuICAgIF90aGlzLmZyZXF1ZW5jeUJpbkNvdW50O1xuICAgIF90aGlzLm1pbkRlY2liZWxzO1xuICAgIF90aGlzLm1heERlY2liZWxzO1xuICAgIF90aGlzLnNtb290aGluZ1RpbWVDb25zdGFudDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEFuYWx5c2VyTm9kZSwgW3tcbiAgICBrZXk6IFwiZ2V0RmxvYXRGcmVxdWVuY3lEYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZsb2F0RnJlcXVlbmN5RGF0YShhcnJheSkge31cbiAgfSwge1xuICAgIGtleTogXCJnZXRCeXRlRnJlcXVlbmN5RGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeXRlRnJlcXVlbmN5RGF0YShkYXRhQXJyYXkpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhQXJyYXkubGVuZ3RoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RmxvYXRUaW1lRG9tYWluRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGbG9hdFRpbWVEb21haW5EYXRhKGRhdGFBcnJheSkge31cbiAgfSwge1xuICAgIGtleTogXCJnZXRCeXRlVGltZURvbWFpbkRhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qnl0ZVRpbWVEb21haW5EYXRhKGRhdGFBcnJheSkge31cbiAgfSwge1xuICAgIGtleTogXCJmZnRTaXplXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZmZ0U2l6ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLl9mZnRTaXplID0gdmFsdWU7XG4gICAgICB0aGlzLmZyZXF1ZW5jeUJpbkNvdW50ID0gdmFsdWUgLyAyO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQW5hbHlzZXJOb2RlO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBbmFseXNlck5vZGU7XG5cbn0se1wiLi9BdWRpb05vZGVcIjo0Nn1dLDQxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0ZpbGVDYWNoZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3V0aWwvRmlsZUNhY2hlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgQXVkaW9CdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEF1ZGlvQnVmZmVyKGNvbnRleHQsIGJ1ZmZlciwgY2FsbGJhY2spIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9CdWZmZXIpO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy51cmwgPSBcIlwiO1xuICAgIHRoaXMuX3NhbXBsZVJhdGUgPSA0ODAwMDtcbiAgICB0aGlzLl9sZW5ndGggPSAzODY2ODE7XG4gICAgdGhpcy5fZHVyYXRpb24gPSAwO1xuICAgIHRoaXMuX251bWJlck9mQ2hhbm5lbHMgPSA0ODAwMDtcbiAgICBfRmlsZUNhY2hlW1wiZGVmYXVsdFwiXS5nZXRQYXRoKGJ1ZmZlciwgZnVuY3Rpb24gKHVybCkge1xuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICB2YXIgaW5uZXJBdWRpb0NvbnRleHQgPSByYWwuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHVybDtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uQ2FucGxheShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXVkaW9CdWZmZXIuX2R1cmF0aW9uID0gdGhpcy5pbm5lckF1ZGlvQ29udGV4dC5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5pbm5lckF1ZGlvQ29udGV4dC5kZXN0cm95KCk7XG4gICAgICAgIGNhbGxiYWNrKHRoaXMuYXVkaW9CdWZmZXIpO1xuICAgICAgfS5iaW5kKHtcbiAgICAgICAgYXVkaW9CdWZmZXI6IHRoaXMsXG4gICAgICAgIGlubmVyQXVkaW9Db250ZXh0OiBpbm5lckF1ZGlvQ29udGV4dFxuICAgICAgfSkpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEF1ZGlvQnVmZmVyLCBbe1xuICAgIGtleTogXCJzYW1wbGVSYXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2FtcGxlUmF0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibGVuZ3RoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkdXJhdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2R1cmF0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJPZkNoYW5uZWxzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZDaGFubmVscztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEF1ZGlvQnVmZmVyO1xufSgpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBdWRpb0J1ZmZlcjtcblxufSx7XCIuLi91dGlsL0ZpbGVDYWNoZVwiOjU2fV0sNDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbnZhciBfQXVkaW9QYXJhbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9QYXJhbVwiKSk7XG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlsL1dlYWtNYXBcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgX2Rlc3Ryb3kgPSBmdW5jdGlvbiBfZGVzdHJveSgpIHtcbiAgdmFyIGlubmVyQXVkaW9Db250ZXh0ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzLnNvdXJjZU5vZGUpLmlubmVyQXVkaW9Db250ZXh0O1xuICBpZiAoaW5uZXJBdWRpb0NvbnRleHQgIT09IG51bGwpIHtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5kZXN0cm95KCk7XG4gICAgdmFyIGF1ZGlvQnVmZmVyU291cmNlTm9kZUFycmF5ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzLmF1ZGlvQ29udGV4dCkuYXVkaW9CdWZmZXJTb3VyY2VOb2RlQXJyYXk7XG4gICAgdmFyIGxlbmd0aCA9IGF1ZGlvQnVmZmVyU291cmNlTm9kZUFycmF5Lmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChhdWRpb0J1ZmZlclNvdXJjZU5vZGVBcnJheVtpXSkuaW5uZXJBdWRpb0NvbnRleHQgPT0gaW5uZXJBdWRpb0NvbnRleHQpIHtcbiAgICAgICAgYXVkaW9CdWZmZXJTb3VyY2VOb2RlQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzLnNvdXJjZU5vZGUpLmlubmVyQXVkaW9Db250ZXh0ID0gbnVsbDtcbiAgfVxufTtcbnZhciBBdWRpb0J1ZmZlclNvdXJjZU5vZGUgPSBmdW5jdGlvbiAoX0F1ZGlvTm9kZSkge1xuICBfaW5oZXJpdHMoQXVkaW9CdWZmZXJTb3VyY2VOb2RlLCBfQXVkaW9Ob2RlKTtcbiAgZnVuY3Rpb24gQXVkaW9CdWZmZXJTb3VyY2VOb2RlKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1ZGlvQnVmZmVyU291cmNlTm9kZSk7XG4gICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIEF1ZGlvQnVmZmVyU291cmNlTm9kZSwgW2NvbnRleHRdKTtcbiAgICBfdGhpcy5idWZmZXIgPSBudWxsO1xuICAgIF90aGlzLmRldHVuZSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgIF90aGlzLmxvb3BTdGFydCA9IDA7XG4gICAgX3RoaXMubG9vcEVuZCA9IDA7XG4gICAgX3RoaXMuX3BsYXliYWNrUmF0ZSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDEuMFxuICAgIH0pO1xuICAgIHZhciBpbm5lckF1ZGlvQ29udGV4dCA9IHJhbC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLmlubmVyQXVkaW9Db250ZXh0ID0gaW5uZXJBdWRpb0NvbnRleHQ7XG4gICAgaW5uZXJBdWRpb0NvbnRleHQub25FbmRlZChfZGVzdHJveS5iaW5kKHtcbiAgICAgIHNvdXJjZU5vZGU6IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgYXVkaW9Db250ZXh0OiBjb250ZXh0XG4gICAgfSkpO1xuICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uU3RvcChfZGVzdHJveS5iaW5kKHtcbiAgICAgIHNvdXJjZU5vZGU6IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgYXVkaW9Db250ZXh0OiBjb250ZXh0XG4gICAgfSkpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoQXVkaW9CdWZmZXJTb3VyY2VOb2RlLCBbe1xuICAgIGtleTogXCJzdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCh3aGVuLCBvZmZzZXQsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAodGhpcy5idWZmZXIpIHtcbiAgICAgICAgdmFyIGlubmVyQXVkaW9Db250ZXh0ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbm5lckF1ZGlvQ29udGV4dDtcbiAgICAgICAgaWYgKGlubmVyQXVkaW9Db250ZXh0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHRoaXMuYnVmZmVyLnVybDtcbiAgICAgICAgaWYgKCFvZmZzZXQgfHwgdHlwZW9mIG9mZnNldCAhPT0gJ251bWJlcicgfHwgb2Zmc2V0IDw9IDApIHtcbiAgICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5zdGFydFRpbWUgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlubmVyQXVkaW9Db250ZXh0LnN0YXJ0VGltZSA9IG9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXdoZW4gfHwgdHlwZW9mIHdoZW4gIT09ICdudW1iZXInIHx8IHdoZW4gPD0gMCkge1xuICAgICAgICAgIGlubmVyQXVkaW9Db250ZXh0LnBsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhdWRpb0NvbnRleHQgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0O1xuICAgICAgICAgICAgaWYgKGF1ZGlvQ29udGV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBhdWRpb0NvbnRleHQucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0uYmluZCh0aGlzKSwgd2hlbiAqIDEwMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCh3aGVuKSB7XG4gICAgICB2YXIgaW5uZXJBdWRpb0NvbnRleHQgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0O1xuICAgICAgaWYgKGlubmVyQXVkaW9Db250ZXh0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghd2hlbiB8fCB0eXBlb2Ygd2hlbiAhPT0gJ251bWJlcicgfHwgd2hlbiA8PSAwKSB7XG4gICAgICAgIGlubmVyQXVkaW9Db250ZXh0LnN0b3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBhdWRpb0NvbnRleHQgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0O1xuICAgICAgICAgIGlmIChhdWRpb0NvbnRleHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGF1ZGlvQ29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcyksIHdoZW4gKiAxMDAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25lbmRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbmVuZGVkKCkge31cbiAgfSwge1xuICAgIGtleTogXCJwbGF5YmFja1JhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wbGF5YmFja1JhdGU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgY29uc29sZS53YXJuKFwicGxheWJhY2tSYXRlIG5vbnN1cHBvcnRcIik7XG4gICAgICB0aGlzLl9wbGF5YmFja1JhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9vcFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xvb3A7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFyIGlubmVyQXVkaW9Db250ZXh0ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbm5lckF1ZGlvQ29udGV4dDtcbiAgICAgIGlmIChpbm5lckF1ZGlvQ29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9sb29wID0gdmFsdWU7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5sb29wID0gdmFsdWU7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBBdWRpb0J1ZmZlclNvdXJjZU5vZGU7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IEF1ZGlvQnVmZmVyU291cmNlTm9kZTtcblxufSx7XCIuLi91dGlsL1dlYWtNYXBcIjo1NyxcIi4vQXVkaW9Ob2RlXCI6NDYsXCIuL0F1ZGlvUGFyYW1cIjo0N31dLDQzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0Jhc2VBdWRpb0NvbnRleHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9CYXNlQXVkaW9Db250ZXh0XCIpKTtcbnZhciBfTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGVcIikpO1xudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbC9XZWFrTWFwXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIEF1ZGlvQ29udGV4dCA9IGZ1bmN0aW9uIChfQmFzZUF1ZGlvQ29udGV4dCkge1xuICBfaW5oZXJpdHMoQXVkaW9Db250ZXh0LCBfQmFzZUF1ZGlvQ29udGV4dCk7XG4gIGZ1bmN0aW9uIEF1ZGlvQ29udGV4dChvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdWRpb0NvbnRleHQpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBBdWRpb0NvbnRleHQpO1xuICAgIF90aGlzLmJhc2VMYXRlbmN5O1xuICAgIF90aGlzLm91dHB1dExhdGVuY3k7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhBdWRpb0NvbnRleHQsIFt7XG4gICAga2V5OiBcImNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgdmFyIGF1ZGlvQnVmZmVyU291cmNlTm9kZUFycmF5ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5hdWRpb0J1ZmZlclNvdXJjZU5vZGVBcnJheTtcbiAgICAgIGF1ZGlvQnVmZmVyU291cmNlTm9kZUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChlbGVtZW50KS5pbm5lckF1ZGlvQ29udGV4dC5kZXN0cm95KCk7XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoZWxlbWVudCkuaW5uZXJBdWRpb0NvbnRleHQgPSBudWxsO1xuICAgICAgfSk7XG4gICAgICBhcnJheS5sZW5ndGggPSAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKG15TWVkaWFFbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IF9NZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGVbXCJkZWZhdWx0XCJdKHRoaXMsIHtcbiAgICAgICAgbWVkaWFFbGVtZW50OiBteU1lZGlhRWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVNZWRpYVN0cmVhbURlc3RpbmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU1lZGlhU3RyZWFtRGVzdGluYXRpb24oKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZU1lZGlhU3RyZWFtVHJhY2tTb3VyY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTWVkaWFTdHJlYW1UcmFja1NvdXJjZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0T3V0cHV0VGltZXN0YW1wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE91dHB1dFRpbWVzdGFtcCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzdW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3VtZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic3VzcGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdXNwZW5kKCkge31cbiAgfV0pO1xuICByZXR1cm4gQXVkaW9Db250ZXh0O1xufShfQmFzZUF1ZGlvQ29udGV4dDJbXCJkZWZhdWx0XCJdKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQXVkaW9Db250ZXh0O1xuXG59LHtcIi4uL3V0aWwvV2Vha01hcFwiOjU3LFwiLi9CYXNlQXVkaW9Db250ZXh0XCI6NDksXCIuL01lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZVwiOjUyfV0sNDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIEF1ZGlvRGVzdGluYXRpb25Ob2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgX2luaGVyaXRzKEF1ZGlvRGVzdGluYXRpb25Ob2RlLCBfQXVkaW9Ob2RlKTtcbiAgZnVuY3Rpb24gQXVkaW9EZXN0aW5hdGlvbk5vZGUoY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9EZXN0aW5hdGlvbk5vZGUpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBBdWRpb0Rlc3RpbmF0aW9uTm9kZSwgW2NvbnRleHRdKTtcbiAgICBfdGhpcy5tYXhDaGFubmVsQ291bnQgPSAyO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEF1ZGlvRGVzdGluYXRpb25Ob2RlKTtcbn0oX0F1ZGlvTm9kZTJbXCJkZWZhdWx0XCJdKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQXVkaW9EZXN0aW5hdGlvbk5vZGU7XG5cbn0se1wiLi9BdWRpb05vZGVcIjo0Nn1dLDQ1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0F1ZGlvTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvTm9kZVwiKSk7XG52YXIgX0F1ZGlvUGFyYW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvUGFyYW1cIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgQXVkaW9MaXN0ZW5lciA9IGZ1bmN0aW9uIChfQXVkaW9Ob2RlKSB7XG4gIF9pbmhlcml0cyhBdWRpb0xpc3RlbmVyLCBfQXVkaW9Ob2RlKTtcbiAgZnVuY3Rpb24gQXVkaW9MaXN0ZW5lcihjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdWRpb0xpc3RlbmVyKTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgQXVkaW9MaXN0ZW5lciwgW2NvbnRleHRdKTtcbiAgICBfdGhpcy5wb3NpdGlvblggPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMucG9zaXRpb25ZID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLnBvc2l0aW9uWiA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5mb3J3YXJkWCA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5mb3J3YXJkWSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5mb3J3YXJkWiA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IC0xXG4gICAgfSk7XG4gICAgX3RoaXMudXBYID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLnVwWSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDFcbiAgICB9KTtcbiAgICBfdGhpcy51cFogPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhBdWRpb0xpc3RlbmVyLCBbe1xuICAgIGtleTogXCJzZXRPcmllbnRhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcmllbnRhdGlvbih4LCB5LCB6KSB7fVxuICB9LCB7XG4gICAga2V5OiBcInNldFBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBvc2l0aW9uKHgsIHksIHopIHtcbiAgICAgIHggPSB4IHx8IDA7XG4gICAgICB5ID0geSB8fCAwO1xuICAgICAgeiA9IHogfHwgMDtcbiAgICAgIHRoaXMucG9zaXRpb25YLnZhbHVlID0geDtcbiAgICAgIHRoaXMucG9zaXRpb25ZLnZhbHVlID0geTtcbiAgICAgIHRoaXMucG9zaXRpb25aLnZhbHVlID0gejtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEF1ZGlvTGlzdGVuZXI7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IEF1ZGlvTGlzdGVuZXI7XG5cbn0se1wiLi9BdWRpb05vZGVcIjo0NixcIi4vQXVkaW9QYXJhbVwiOjQ3fV0sNDY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRXZlbnRUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vRXZlbnRUYXJnZXRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgQXVkaW9Ob2RlID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICBfaW5oZXJpdHMoQXVkaW9Ob2RlLCBfRXZlbnRUYXJnZXQpO1xuICBmdW5jdGlvbiBBdWRpb05vZGUoY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9Ob2RlKTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgQXVkaW9Ob2RlKTtcbiAgICBfdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgX3RoaXMubnVtYmVyT2ZJbnB1dHMgPSAxO1xuICAgIF90aGlzLm51bWJlck9mT3V0cHV0cyA9IDE7XG4gICAgX3RoaXMuY2hhbm5lbENvdW50ID0gMjtcbiAgICBfdGhpcy5jaGFubmVsQ291bnRNb2RlID0gXCJleHBsaWNpdFwiO1xuICAgIF90aGlzLmNoYW5uZWxJbnRlcnByZXRhdGlvbiA9IFwic3BlYWtlcnNcIjtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEF1ZGlvTm9kZSwgW3tcbiAgICBrZXk6IFwiY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KGRlc3RpbmF0aW9uLCBvdXRwdXRJbmRleCwgaW5wdXRJbmRleCkge31cbiAgfSwge1xuICAgIGtleTogXCJkaXNjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImlzTnVtYmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTnVtYmVyKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdudW1iZXInIHx8IG9iaiBpbnN0YW5jZW9mIE51bWJlcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29udGV4dFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQ7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBBdWRpb05vZGU7XG59KF9FdmVudFRhcmdldDJbXCJkZWZhdWx0XCJdKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQXVkaW9Ob2RlO1xuXG59LHtcIi4uL0V2ZW50VGFyZ2V0XCI6MTF9XSw0NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgQXVkaW9QYXJhbSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXVkaW9QYXJhbSgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1ZGlvUGFyYW0pO1xuICAgIHRoaXMuYXV0b21hdGlvblJhdGUgPSBvcHRpb25zLmF1dG9tYXRpb25SYXRlIHx8IFwiYS1yYXRlXCI7XG4gICAgdGhpcy5fZGVmYXVsdFZhbHVlID0gb3B0aW9ucy5kZWZhdWx0VmFsdWUgfHwgMTtcbiAgICB0aGlzLl9tYXhWYWx1ZSA9IG9wdGlvbnMubWF4VmFsdWUgfHwgTnVtYmVyLk1BWF9WQUxVRTtcbiAgICB0aGlzLl9taW5WYWx1ZSA9IG9wdGlvbnMubWluVmFsdWUgfHwgLU51bWJlci5NQVhfVkFMVUU7XG4gICAgdGhpcy52YWx1ZSA9IG9wdGlvbnMudmFsdWUgfHwgMTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoQXVkaW9QYXJhbSwgW3tcbiAgICBrZXk6IFwiZGVmYXVsdFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtYXhWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21heFZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtaW5WYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21pblZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gTWF0aC5taW4odGhpcy5fbWF4VmFsdWUsIHZhbHVlKTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gTWF0aC5tYXgodGhpcy5fbWluVmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VmFsdWVBdFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWVBdFRpbWUodmFsdWUsIHN0YXJ0VGltZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsaW5lYXJSYW1wVG9WYWx1ZUF0VGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaW5lYXJSYW1wVG9WYWx1ZUF0VGltZSh2YWx1ZSwgZW5kVGltZSkge1xuICAgICAgaWYgKGVuZFRpbWUgPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBrID0gdmFsdWUgLyBlbmRUaW1lO1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKGR0KSB7XG4gICAgICAgIGR0ID0gZHQgLyAxMDAwO1xuICAgICAgICBpZiAoZHQgPiBlbmRUaW1lKSB7XG4gICAgICAgICAgZHQgPSBlbmRUaW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkdCA8IDApIHtcbiAgICAgICAgICBkdCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZW5kVGltZSAtPSBkdDtcbiAgICAgICAgc2VsZi52YWx1ZSArPSBkdCAqIGs7XG4gICAgICAgIGlmIChlbmRUaW1lID4gMCkge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKCkge31cbiAgfSwge1xuICAgIGtleTogXCJzZXRUYXJnZXRBdFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGFyZ2V0QXRUaW1lKHRhcmdldCwgc3RhcnRUaW1lLCB0aW1lQ29uc3RhbnQpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0YXJnZXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFZhbHVlQ3VydmVBdFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWVDdXJ2ZUF0VGltZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuY2VsU2NoZWR1bGVkVmFsdWVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbmNlbFNjaGVkdWxlZFZhbHVlcygpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuY2VsQW5kSG9sZEF0VGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5jZWxBbmRIb2xkQXRUaW1lKCkge31cbiAgfV0pO1xuICByZXR1cm4gQXVkaW9QYXJhbTtcbn0oKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQXVkaW9QYXJhbTtcblxufSx7fV0sNDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIEF1ZGlvU2NoZWR1bGVkU291cmNlTm9kZSA9IGZ1bmN0aW9uIChfQXVkaW9Ob2RlKSB7XG4gIF9pbmhlcml0cyhBdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGUsIF9BdWRpb05vZGUpO1xuICBmdW5jdGlvbiBBdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGUoY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGUpO1xuICAgIHJldHVybiBfY2FsbFN1cGVyKHRoaXMsIEF1ZGlvU2NoZWR1bGVkU291cmNlTm9kZSwgW2NvbnRleHRdKTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlLCBbe1xuICAgIGtleTogXCJvbmVuZGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uZW5kZWQoZXZlbnQpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQod2hlbiwgb2Zmc2V0LCBkdXJhdGlvbikge31cbiAgfSwge1xuICAgIGtleTogXCJzdG9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3Aod2hlbikge31cbiAgfV0pO1xuICByZXR1cm4gQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGU7XG5cbn0se1wiLi9BdWRpb05vZGVcIjo0Nn1dLDQ5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0V2ZW50VGFyZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL0V2ZW50VGFyZ2V0XCIpKTtcbnZhciBfQXVkaW9MaXN0ZW5lciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9MaXN0ZW5lclwiKSk7XG52YXIgX1BlcmlvZGljV2F2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUGVyaW9kaWNXYXZlXCIpKTtcbnZhciBfQXVkaW9CdWZmZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvQnVmZmVyXCIpKTtcbnZhciBfV2Vha01hcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3V0aWwvV2Vha01hcFwiKSk7XG52YXIgX0R5bmFtaWNzQ29tcHJlc3Nvck5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0R5bmFtaWNzQ29tcHJlc3Nvck5vZGVcIikpO1xudmFyIF9BdWRpb0J1ZmZlclNvdXJjZU5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvQnVmZmVyU291cmNlTm9kZVwiKSk7XG52YXIgX0F1ZGlvRGVzdGluYXRpb25Ob2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb0Rlc3RpbmF0aW9uTm9kZVwiKSk7XG52YXIgX09zY2lsbGF0b3JOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Pc2NpbGxhdG9yTm9kZVwiKSk7XG52YXIgX0FuYWx5c2VyTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQW5hbHlzZXJOb2RlXCIpKTtcbnZhciBfUGFubmVyTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUGFubmVyTm9kZVwiKSk7XG52YXIgX0dhaW5Ob2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9HYWluTm9kZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbnZhciBCYXNlQXVkaW9Db250ZXh0ID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICBfaW5oZXJpdHMoQmFzZUF1ZGlvQ29udGV4dCwgX0V2ZW50VGFyZ2V0KTtcbiAgZnVuY3Rpb24gQmFzZUF1ZGlvQ29udGV4dCgpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJhc2VBdWRpb0NvbnRleHQpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBCYXNlQXVkaW9Db250ZXh0KTtcbiAgICBfdGhpcy5hdWRpb1dvcmtsZXQ7XG4gICAgX3RoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgIF90aGlzLmRlc3RpbmF0aW9uID0gbmV3IF9BdWRpb0Rlc3RpbmF0aW9uTm9kZVtcImRlZmF1bHRcIl0oX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmxpc3RlbmVyID0gbmV3IF9BdWRpb0xpc3RlbmVyW1wiZGVmYXVsdFwiXShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc2FtcGxlUmF0ZTtcbiAgICBfdGhpcy5zdGF0ZSA9IFwicnVubmluZ1wiO1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLmF1ZGlvQnVmZmVyU291cmNlTm9kZUFycmF5ID0gW107XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhCYXNlQXVkaW9Db250ZXh0LCBbe1xuICAgIGtleTogXCJjcmVhdGVBbmFseXNlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVBbmFseXNlcigpIHtcbiAgICAgIHJldHVybiBuZXcgX0FuYWx5c2VyTm9kZVtcImRlZmF1bHRcIl0odGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUJpcXVhZEZpbHRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCaXF1YWRGaWx0ZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUJ1ZmZlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCdWZmZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUJ1ZmZlclNvdXJjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCdWZmZXJTb3VyY2UoKSB7XG4gICAgICB2YXIgc291cmNlTm9kZSA9IG5ldyBfQXVkaW9CdWZmZXJTb3VyY2VOb2RlW1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXVkaW9CdWZmZXJTb3VyY2VOb2RlQXJyYXkucHVzaChzb3VyY2VOb2RlKTtcbiAgICAgIHJldHVybiBzb3VyY2VOb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVDb25zdGFudFNvdXJjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDb25zdGFudFNvdXJjZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlQ2hhbm5lbE1lcmdlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDaGFubmVsTWVyZ2VyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVDaGFubmVsU3BsaXR0ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbFNwbGl0dGVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVDb252b2x2ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQ29udm9sdmVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVEZWxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVEZWxheSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlRHluYW1pY3NDb21wcmVzc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUR5bmFtaWNzQ29tcHJlc3NvcigpIHtcbiAgICAgIHJldHVybiBuZXcgX0R5bmFtaWNzQ29tcHJlc3Nvck5vZGVbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVHYWluXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUdhaW4oKSB7XG4gICAgICByZXR1cm4gbmV3IF9HYWluTm9kZVtcImRlZmF1bHRcIl0odGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUlJUkZpbHRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVJSVJGaWx0ZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZU9zY2lsbGF0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlT3NjaWxsYXRvcigpIHtcbiAgICAgIHJldHVybiBuZXcgX09zY2lsbGF0b3JOb2RlW1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlUGFubmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVBhbm5lcigpIHtcbiAgICAgIHJldHVybiBuZXcgX1Bhbm5lck5vZGVbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVQZXJpb2RpY1dhdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlUGVyaW9kaWNXYXZlKCkge1xuICAgICAgcmV0dXJuIG5ldyBfUGVyaW9kaWNXYXZlW1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlU2NyaXB0UHJvY2Vzc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVNjcmlwdFByb2Nlc3NvcigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlU3RlcmVvUGFubmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVN0ZXJlb1Bhbm5lcigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlV2F2ZVNoYXBlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVXYXZlU2hhcGVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJkZWNvZGVBdWRpb0RhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVjb2RlQXVkaW9EYXRhKGF1ZGlvRGF0YSwgY2FsbEZ1bmMpIHtcbiAgICAgIG5ldyBfQXVkaW9CdWZmZXJbXCJkZWZhdWx0XCJdKHRoaXMsIGF1ZGlvRGF0YSwgY2FsbEZ1bmMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbnN0YXRlY2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uc3RhdGVjaGFuZ2UoKSB7fVxuICB9XSk7XG4gIHJldHVybiBCYXNlQXVkaW9Db250ZXh0O1xufShfRXZlbnRUYXJnZXQyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IEJhc2VBdWRpb0NvbnRleHQ7XG5cbn0se1wiLi4vRXZlbnRUYXJnZXRcIjoxMSxcIi4uL3V0aWwvV2Vha01hcFwiOjU3LFwiLi9BbmFseXNlck5vZGVcIjo0MCxcIi4vQXVkaW9CdWZmZXJcIjo0MSxcIi4vQXVkaW9CdWZmZXJTb3VyY2VOb2RlXCI6NDIsXCIuL0F1ZGlvRGVzdGluYXRpb25Ob2RlXCI6NDQsXCIuL0F1ZGlvTGlzdGVuZXJcIjo0NSxcIi4vRHluYW1pY3NDb21wcmVzc29yTm9kZVwiOjUwLFwiLi9HYWluTm9kZVwiOjUxLFwiLi9Pc2NpbGxhdG9yTm9kZVwiOjUzLFwiLi9QYW5uZXJOb2RlXCI6NTQsXCIuL1BlcmlvZGljV2F2ZVwiOjU1fV0sNTA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbnZhciBfQXVkaW9QYXJhbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9QYXJhbVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbnZhciBEeW5hbWljc0NvbXByZXNzb3JOb2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgX2luaGVyaXRzKER5bmFtaWNzQ29tcHJlc3Nvck5vZGUsIF9BdWRpb05vZGUpO1xuICBmdW5jdGlvbiBEeW5hbWljc0NvbXByZXNzb3JOb2RlKGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIER5bmFtaWNzQ29tcHJlc3Nvck5vZGUpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBEeW5hbWljc0NvbXByZXNzb3JOb2RlLCBbY29udGV4dF0pO1xuICAgIF90aGlzLl90aHJlc2hvbGQgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAtMjQsXG4gICAgICBkZWZhdWx0VmFsdWU6IC0yNCxcbiAgICAgIG1heFZhbHVlOiAwLFxuICAgICAgbWluVmFsdWU6IC0xMDBcbiAgICB9KTtcbiAgICBfdGhpcy5fa25lZSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDMwLFxuICAgICAgZGVmYXVsdFZhbHVlOiAzMCxcbiAgICAgIG1heFZhbHVlOiA0MCxcbiAgICAgIG1pblZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMuX3JhdGlvID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMTIsXG4gICAgICBkZWZhdWx0VmFsdWU6IDEyLFxuICAgICAgbWF4VmFsdWU6IDIwLFxuICAgICAgbWluVmFsdWU6IDFcbiAgICB9KTtcbiAgICBfdGhpcy5fcmVkdWN0aW9uID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIGRlZmF1bHRWYWx1ZTogMCxcbiAgICAgIG1heFZhbHVlOiAwLFxuICAgICAgbWluVmFsdWU6IC0yMFxuICAgIH0pO1xuICAgIF90aGlzLl9hdHRhY2sgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwLjAwMyxcbiAgICAgIGRlZmF1bHRWYWx1ZTogMC4wMDMsXG4gICAgICBtYXhWYWx1ZTogMSxcbiAgICAgIG1pblZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMuX3JlbGVhc2UgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwLjI1LFxuICAgICAgZGVmYXVsdFZhbHVlOiAwLjI1LFxuICAgICAgbWF4VmFsdWU6IDEsXG4gICAgICBtaW5WYWx1ZTogMFxuICAgIH0pO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoRHluYW1pY3NDb21wcmVzc29yTm9kZSwgW3tcbiAgICBrZXk6IFwidGhyZXNob2xkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGhyZXNob2xkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJrZWVuXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fa2VlbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmF0aW9cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yYXRpbztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVkdWN0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVkdWN0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhdHRhY2tcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hdHRhY2s7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbGVhc2VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWxlYXNlO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRHluYW1pY3NDb21wcmVzc29yTm9kZTtcbn0oX0F1ZGlvTm9kZTJbXCJkZWZhdWx0XCJdKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRHluYW1pY3NDb21wcmVzc29yTm9kZTtcblxufSx7XCIuL0F1ZGlvTm9kZVwiOjQ2LFwiLi9BdWRpb1BhcmFtXCI6NDd9XSw1MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xudmFyIF9BdWRpb1BhcmFtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb1BhcmFtXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIEdhaW5Ob2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgX2luaGVyaXRzKEdhaW5Ob2RlLCBfQXVkaW9Ob2RlKTtcbiAgZnVuY3Rpb24gR2Fpbk5vZGUoY29udGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2Fpbk5vZGUpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBHYWluTm9kZSwgW2NvbnRleHRdKTtcbiAgICBfdGhpcy5fZ2FpbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5nYWluIHx8IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEdhaW5Ob2RlLCBbe1xuICAgIGtleTogXCJnYWluXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2FpbjtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEdhaW5Ob2RlO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBHYWluTm9kZTtcblxufSx7XCIuL0F1ZGlvTm9kZVwiOjQ2LFwiLi9BdWRpb1BhcmFtXCI6NDd9XSw1MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgX2luaGVyaXRzKE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZSwgX0F1ZGlvTm9kZSk7XG4gIGZ1bmN0aW9uIE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZShjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGUpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBNZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGUsIFtjb250ZXh0XSk7XG4gICAgX3RoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlLCBbe1xuICAgIGtleTogXCJtZWRpYUVsZW1lbnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zID8gdGhpcy5fb3B0aW9ucy5tZWRpYUVsZW1lbnQgOiBudWxsO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBNZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGU7XG5cbn0se1wiLi9BdWRpb05vZGVcIjo0Nn1dLDUzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0F1ZGlvU2NoZWR1bGVkU291cmNlTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlXCIpKTtcbnZhciBfQXVkaW9QYXJhbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9QYXJhbVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbnZhciB0eXBlcyA9IHtcbiAgXCJzaW5lXCI6IDAsXG4gIFwic3F1YXJlXCI6IDAsXG4gIFwic2F3dG9vdGhcIjogMCxcbiAgXCJ0cmlhbmdsZVwiOiAwLFxuICBcImN1c3RvbVwiOiAwXG59O1xudmFyIE9zY2lsbGF0b3JOb2RlID0gZnVuY3Rpb24gKF9BdWRpb1NjaGVkdWxlZFNvdXJjZSkge1xuICBfaW5oZXJpdHMoT3NjaWxsYXRvck5vZGUsIF9BdWRpb1NjaGVkdWxlZFNvdXJjZSk7XG4gIGZ1bmN0aW9uIE9zY2lsbGF0b3JOb2RlKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9zY2lsbGF0b3JOb2RlKTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgT3NjaWxsYXRvck5vZGUpO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIF90aGlzLmZyZXF1ZW5jeSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IF90aGlzLmlzTnVtYmVyKG9wdGlvbnMuZnJlcXVlbmN5KSA/IG9wdGlvbnMuZnJlcXVlbmN5IDogNDQwXG4gICAgfSk7XG4gICAgX3RoaXMuZGV0dW5lID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogX3RoaXMuaXNOdW1iZXIob3B0aW9ucy5kZXR1bmUpID8gb3B0aW9ucy5kZXR1bmUgOiAwXG4gICAgfSk7XG4gICAgX3RoaXMudHlwZSA9IG9wdGlvbnMudHlwZSBpbiB0eXBlcyA/IG9wdGlvbnMudHlwZSA6IFwic2luZVwiO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoT3NjaWxsYXRvck5vZGUsIFt7XG4gICAga2V5OiBcInNldFBlcmlvZGljV2F2ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQZXJpb2RpY1dhdmUod2F2ZSkge31cbiAgfSwge1xuICAgIGtleTogXCJzdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCh3aGVuKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCh3ZW4pIHt9XG4gIH1dKTtcbiAgcmV0dXJuIE9zY2lsbGF0b3JOb2RlO1xufShfQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IE9zY2lsbGF0b3JOb2RlO1xuXG59LHtcIi4vQXVkaW9QYXJhbVwiOjQ3LFwiLi9BdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGVcIjo0OH1dLDU0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0F1ZGlvTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvTm9kZVwiKSk7XG52YXIgX0F1ZGlvUGFyYW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvUGFyYW1cIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgUGFubmVyTm9kZSA9IGZ1bmN0aW9uIChfQXVkaW9Ob2RlKSB7XG4gIF9pbmhlcml0cyhQYW5uZXJOb2RlLCBfQXVkaW9Ob2RlKTtcbiAgZnVuY3Rpb24gUGFubmVyTm9kZShjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYW5uZXJOb2RlKTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgUGFubmVyTm9kZSwgW2NvbnRleHRdKTtcbiAgICBfdGhpcy5jb25lSW5uZXJBbmdsZSA9IDM2MDtcbiAgICBfdGhpcy5jb25lT3V0ZXJBbmdsZSA9IDM2MDtcbiAgICBfdGhpcy5jb25lT3V0ZXJHYWluID0gMDtcbiAgICBfdGhpcy5kaXN0YW5jZU1vZGVsID0gXCJpbnZlcnNlXCI7XG4gICAgX3RoaXMubWF4RGlzdGFuY2UgPSAxMDAwMDtcbiAgICBfdGhpcy5vcmllbnRhdGlvblggPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAxXG4gICAgfSk7XG4gICAgX3RoaXMub3JpZW50YXRpb25ZID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLm9yaWVudGF0aW9uWiA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5wYW5uaW5nTW9kZWwgPSBcImVxdWFscG93ZXJcIjtcbiAgICBfdGhpcy5wb3NpdGlvblggPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMucG9zaXRpb25ZID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLnBvc2l0aW9uWiA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5yZWZEaXN0YW5jZSA9IDE7XG4gICAgX3RoaXMucm9sbG9mZkZhY3RvciA9IDE7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhQYW5uZXJOb2RlLCBbe1xuICAgIGtleTogXCJzZXRQb3NpdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQb3NpdGlvbih4LCB5LCB6KSB7XG4gICAgICB0aGlzLnBvc2l0aW9uWCA9IHg7XG4gICAgICB0aGlzLnBvc2l0aW9uWSA9IHk7XG4gICAgICB0aGlzLnBvc2l0aW9uWiA9IHo7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldE9yaWVudGF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKHgsIHksIHopIHtcbiAgICAgIHRoaXMub3JpZW50YXRpb25YID0geDtcbiAgICAgIHRoaXMub3JpZW50YXRpb25ZID0geTtcbiAgICAgIHRoaXMub3JpZW50YXRpb25aID0gejtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VmVsb2NpdHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmVsb2NpdHkoKSB7fVxuICB9XSk7XG4gIHJldHVybiBQYW5uZXJOb2RlO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBQYW5uZXJOb2RlO1xuXG59LHtcIi4vQXVkaW9Ob2RlXCI6NDYsXCIuL0F1ZGlvUGFyYW1cIjo0N31dLDU1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbnZhciBQZXJpb2RpY1dhdmUgPSBfY3JlYXRlQ2xhc3MoZnVuY3Rpb24gUGVyaW9kaWNXYXZlKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBlcmlvZGljV2F2ZSk7XG59KTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUGVyaW9kaWNXYXZlO1xuXG59LHt9XSw1NjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgbWQ1ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9tZDUubWluXCIpO1xudmFyIGZpbGVNZ3IgPSByYWwuZ2V0RmlsZVN5c3RlbU1hbmFnZXIoKTtcbnZhciBjYWNoZURpciA9IHJhbC5lbnYuVVNFUl9EQVRBX1BBVEggKyBcIi9maWxlQ2FjaGUvXCI7XG52YXIgRmlsZUNhY2hlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGaWxlQ2FjaGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpbGVDYWNoZSk7XG4gICAgdGhpcy5fY2FjaGVzID0ge307XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEZpbGVDYWNoZSwgW3tcbiAgICBrZXk6IFwiZ2V0Q2FjaGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2FjaGUoZGF0YSkge1xuICAgICAgdmFyIGtleSA9IEZpbGVDYWNoZS5fZ2VuRGF0YUtleShkYXRhKTtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5fY2FjaGVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZXNba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRDYWNoZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDYWNoZShwYXRoLCBkYXRhKSB7XG4gICAgICB2YXIga2V5ID0gRmlsZUNhY2hlLl9nZW5EYXRhS2V5KGRhdGEpO1xuICAgICAgdGhpcy5fY2FjaGVzW2tleV0gPSBwYXRoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRJdGVtXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEl0ZW0oZGF0YSwgcGF0aCwga2V5LCBjYWxsQmFjaykge1xuICAgICAga2V5ID0ga2V5IHx8IEZpbGVDYWNoZS5fZ2VuRGF0YUtleShkYXRhKTtcbiAgICAgIHZhciBjYWNoZXMgPSB0aGlzLl9jYWNoZXM7XG4gICAgICBpZiAoa2V5IGluIGNhY2hlcykge1xuICAgICAgICBjYWxsQmFjayAmJiBjYWxsQmFjayhjYWNoZXNba2V5XSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghcGF0aCkge1xuICAgICAgICBwYXRoID0gY2FjaGVEaXIgKyBrZXk7XG4gICAgICAgIGZpbGVNZ3Iud3JpdGVGaWxlKHtcbiAgICAgICAgICBmaWxlUGF0aDogcGF0aCxcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIGVuY29kaW5nOiBcImJpbmFyeVwiLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICBjYWNoZXNba2V5XSA9IHBhdGg7XG4gICAgICAgICAgICBjYWxsQmFjayAmJiBjYWxsQmFjayhwYXRoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoKSB7XG4gICAgICAgICAgICBjYWxsQmFjayAmJiBjYWxsQmFjaygpO1xuICAgICAgICAgICAgdGhyb3cgcGF0aCArIFwid3JpdGVGaWxlIGZhaWwhXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UGF0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQYXRoKGRhdGEsIGNhbGxCYWNrKSB7XG4gICAgICB2YXIga2V5ID0gRmlsZUNhY2hlLl9nZW5EYXRhS2V5KGRhdGEpO1xuICAgICAgdmFyIGNhY2hlcyA9IHRoaXMuX2NhY2hlcztcbiAgICAgIGlmIChrZXkgaW4gY2FjaGVzKSB7XG4gICAgICAgIGNhbGxCYWNrKGNhY2hlc1trZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbShkYXRhLCB1bmRlZmluZWQsIGtleSwgY2FsbEJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcIl9nZW5EYXRhS2V5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZW5EYXRhS2V5KGRhdGEpIHtcbiAgICAgIHZhciB2aWV3ID0gbmV3IERhdGFWaWV3KGRhdGEpO1xuICAgICAgdmFyIGxlbmd0aCA9IHZpZXcuYnl0ZUxlbmd0aCAvIDQ7XG4gICAgICB2YXIgY291bnQgPSAxMDtcbiAgICAgIHZhciBzcGFjZSA9IGxlbmd0aCAvIGNvdW50O1xuICAgICAgdmFyIGtleSA9IFwibGVuZ3RoOlwiICsgbGVuZ3RoO1xuICAgICAga2V5ICs9IFwiZmlyc3Q6XCIgKyB2aWV3LmdldEludDMyKDApO1xuICAgICAga2V5ICs9IFwibGFzdDpcIiArIHZpZXcuZ2V0SW50MzIobGVuZ3RoIC0gMSk7XG4gICAgICB3aGlsZSAoY291bnQtLSkge1xuICAgICAgICBrZXkgKz0gY291bnQgKyBcIjpcIiArIHZpZXcuZ2V0SW50MzIoTWF0aC5mbG9vcihzcGFjZSAqIGNvdW50KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWQ1KGtleSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBGaWxlQ2FjaGU7XG59KCk7XG50cnkge1xuICBmaWxlTWdyLmFjY2Vzc1N5bmMoY2FjaGVEaXIpO1xuICBmaWxlTWdyLnJtZGlyU3luYyhjYWNoZURpciwgdHJ1ZSk7XG59IGNhdGNoIChlKSB7fVxuZmlsZU1nci5ta2RpclN5bmMoY2FjaGVEaXIsIHRydWUpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBuZXcgRmlsZUNhY2hlKCk7XG5cbn0se1wiLi4vLi4vbGliL21kNS5taW5cIjoyfV0sNTc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbmV3IFdlYWtNYXAoKTtcblxufSx7fV0sNTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbnZhciBmc20gPSByYWwuZ2V0RmlsZVN5c3RlbU1hbmFnZXIgPyByYWwuZ2V0RmlsZVN5c3RlbU1hbmFnZXIoKSA6IG51bGw7XG52YXIgZnNVdGlscyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZnNVdGlscygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgZnNVdGlscyk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib3V0T2ZTdG9yYWdlUmVnRXhwXCIsIC90aGUgbWF4aW11bSBzaXplIG9mIHRoZSBmaWxlIHN0b3JhZ2UvKTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoZnNVdGlscywgW3tcbiAgICBrZXk6IFwiaXNPdXRPZlN0b3JhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNPdXRPZlN0b3JhZ2UoZXJyTXNnKSB7XG4gICAgICByZXR1cm4gdGhpcy5vdXRPZlN0b3JhZ2VSZWdFeHAudGVzdChlcnJNc2cpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3cml0ZUZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd3JpdGVGaWxlKHBhdGgsIGRhdGEsIGVuY29kaW5nLCBvbkNvbXBsZXRlKSB7XG4gICAgICBmc20ud3JpdGVGaWxlKHtcbiAgICAgICAgZmlsZVBhdGg6IHBhdGgsXG4gICAgICAgIGVuY29kaW5nOiBlbmNvZGluZyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUobnVsbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwocmVzKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwid3JpdGVGaWxlIGZhaWxlZDogcGF0aDogXCIuY29uY2F0KHBhdGgsIFwiIG1lc3NhZ2U6IFwiKS5jb25jYXQocmVzLmVyck1zZykpO1xuICAgICAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShuZXcgRXJyb3IocmVzLmVyck1zZykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwid3JpdGVGaWxlU3luY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3cml0ZUZpbGVTeW5jKHBhdGgsIGRhdGEsIGVuY29kaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmc20ud3JpdGVGaWxlU3luYyhwYXRoLCBkYXRhLCBlbmNvZGluZyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJ3cml0ZUZpbGVTeW5jIGZhaWxlZDogcGF0aDogXCIuY29uY2F0KHBhdGgsIFwiIG1lc3NhZ2U6IFwiKS5jb25jYXQoZSkpO1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWFkSnNvblN5bmNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZEpzb25TeW5jKHBhdGgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBzdHIgPSBmc20ucmVhZEZpbGVTeW5jKHBhdGgsICd1dGY4Jyk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcInJlYWRKc29uU3luYyBmYWlsZWQ6IHBhdGg6IFwiLmNvbmNhdChwYXRoLCBcIiBtZXNzYWdlOiBcIikuY29uY2F0KGUpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWFrZURpclN5bmNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFrZURpclN5bmMocGF0aCwgcmVjdXJzaXZlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmc20ubWtkaXJTeW5jKHBhdGgsIHJlY3Vyc2l2ZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJta2RpclN5bmMgZmFpbGVkOiBwYXRoOiBcIi5jb25jYXQocGF0aCwgXCIgbWVzc2FnZTogXCIpLmNvbmNhdChlKSk7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJtZGlyU3luY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBybWRpclN5bmMoZGlyUGF0aCwgcmVjdXJzaXZlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmc20ucm1kaXJTeW5jKGRpclBhdGgsIHJlY3Vyc2l2ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcInJtZGlyU3luYyBmYWlsZWQ6IHBhdGg6IFwiLmNvbmNhdChkaXJQYXRoLCBcIiBtZXNzYWdlOiBcIikuY29uY2F0KGUpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVhZERpclN5bmNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZERpclN5bmMoZGlyUGF0aCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGZzbS5yZWFkZGlyU3luYyhkaXJQYXRoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwicmVhZGRpclN5bmMgZmFpbGVkOiBwYXRoOiBcIi5jb25jYXQoZGlyUGF0aCwgXCIgbWVzc2FnZTogXCIpLmNvbmNhdChlKSk7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlbGV0ZUZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVsZXRlRmlsZShmaWxlUGF0aCwgb25Db21wbGV0ZSkge1xuICAgICAgZnNtLnVubGluayh7XG4gICAgICAgIGZpbGVQYXRoOiBmaWxlUGF0aCxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUobnVsbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwocmVzKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiZGVsZXRlRmlsZSBmYWlsZWQ6IHBhdGg6IFwiLmNvbmNhdChmaWxlUGF0aCwgXCIgbWVzc2FnZTogXCIpLmNvbmNhdChyZXMuZXJyTXNnKSk7XG4gICAgICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKG5ldyBFcnJvcihyZXMuZXJyTXNnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gZnNVdGlscztcbn0oKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbmV3IGZzVXRpbHMoKTtcblxufSx7fV0sNTk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfQXVkaW8gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvXCIpKTtcbnZhciBfQXVkaW9Db250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hdWRpb0NvbnRleHQvQXVkaW9Db250ZXh0XCIpKTtcbnZhciBfRGV2aWNlTW90aW9uRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RldmljZU1vdGlvbkV2ZW50XCIpKTtcbnZhciBfRG9jdW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RvY3VtZW50XCIpKTtcbnZhciBfRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcbnZhciBfRm9udEZhY2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ZvbnRGYWNlXCIpKTtcbnZhciBfRm9udEZhY2VTZXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ZvbnRGYWNlU2V0XCIpKTtcbnZhciBfRXZlbnRUYXJnZXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50VGFyZ2V0XCIpKTtcbnZhciBfSFRNTEVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcbnZhciBfSFRNTEF1ZGlvRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEF1ZGlvRWxlbWVudFwiKSk7XG52YXIgX0hUTUxDYW52YXNFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MQ2FudmFzRWxlbWVudFwiKSk7XG52YXIgX0hUTUxJbWFnZUVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxJbWFnZUVsZW1lbnRcIikpO1xudmFyIF9IVE1MVmlkZW9FbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MVmlkZW9FbGVtZW50XCIpKTtcbnZhciBfSW1hZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ltYWdlXCIpKTtcbnZhciBfTG9jYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0xvY2F0aW9uXCIpKTtcbnZhciBfTmF2aWdhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9OYXZpZ2F0b3JcIikpO1xudmFyIF9TY3JlZW4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1NjcmVlblwiKSk7XG52YXIgX1RvdWNoRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RvdWNoRXZlbnRcIikpO1xudmFyIF9YTUxIdHRwUmVxdWVzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vWE1MSHR0cFJlcXVlc3RcIikpO1xudmFyIF9IVE1MU2NyaXB0RWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTFNjcmlwdEVsZW1lbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG53aW5kb3cucmFsID0gd2luZG93LnJhbCB8fCB7fTtcbnZhciBfc3lzdGVtSW5mbyA9IHdpbmRvdy5yYWwuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbndpbmRvdy5jbGllbnRUb3AgPSAwO1xud2luZG93LmNsaWVudExlZnQgPSAwO1xud2luZG93LmRldmljZVBpeGVsUmF0aW8gPSBfc3lzdGVtSW5mby5waXhlbFJhdGlvO1xud2luZG93LmRvY3VtZW50ID0gbmV3IF9Eb2N1bWVudFtcImRlZmF1bHRcIl0oKTtcbndpbmRvdy5mcmFtZUVsZW1lbnQgPSBudWxsO1xud2luZG93LmZ1bGxTY3JlZW4gPSB0cnVlO1xud2luZG93LmlubmVySGVpZ2h0ID0gX3N5c3RlbUluZm8ud2luZG93SGVpZ2h0O1xud2luZG93LmlubmVyV2lkdGggPSBfc3lzdGVtSW5mby53aW5kb3dXaWR0aDtcbndpbmRvdy5sZW5ndGggPSAwO1xud2luZG93LmxvY2F0aW9uID0gbmV3IF9Mb2NhdGlvbltcImRlZmF1bHRcIl0oKTtcbndpbmRvdy5uYW1lID0gXCJydW50aW1lXCI7XG53aW5kb3cubmF2aWdhdG9yID0gbmV3IF9OYXZpZ2F0b3JbXCJkZWZhdWx0XCJdKF9zeXN0ZW1JbmZvLnBsYXRmb3JtLCBfc3lzdGVtSW5mby5sYW5ndWFnZSk7XG53aW5kb3cub3V0ZXJIZWlnaHQgPSBfc3lzdGVtSW5mby53aW5kb3dIZWlnaHQ7XG53aW5kb3cub3V0ZXJXaWR0aCA9IF9zeXN0ZW1JbmZvLndpbmRvd1dpZHRoO1xud2luZG93LnBhZ2VYT2Zmc2V0ID0gMDtcbndpbmRvdy5wYWdlWU9mZnNldCA9IDA7XG53aW5kb3cucGFyZW50ID0gd2luZG93O1xud2luZG93LnNjcmVlbiA9IG5ldyBfU2NyZWVuW1wiZGVmYXVsdFwiXSgpO1xud2luZG93LnNjcmVlbkxlZnQgPSAwO1xud2luZG93LnNjcmVlblRvcCA9IDA7XG53aW5kb3cuc2NyZWVuWCA9IDA7XG53aW5kb3cuc2NyZWVuWSA9IDA7XG53aW5kb3cuc2Nyb2xsWCA9IDA7XG53aW5kb3cuc2Nyb2xsWSA9IDA7XG53aW5kb3cuc2VsZiA9IHdpbmRvdztcbndpbmRvdy50b3AgPSB3aW5kb3c7XG53aW5kb3cud2luZG93ID0gd2luZG93O1xud2luZG93LmFsZXJ0ID0gd2luZG93LmNvbnNvbGUuZXJyb3I7XG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuLi9saWIvYmFzZTY0Lm1pbi5qcycpLFxuICBidG9hID0gX3JlcXVpcmUuYnRvYSxcbiAgYXRvYiA9IF9yZXF1aXJlLmF0b2I7XG53aW5kb3cuYXRvYiA9IGF0b2I7XG53aW5kb3cuYnRvYSA9IGJ0b2E7XG53aW5kb3cuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUud2FybihcIndpbmRvdy5jbG9zZSgpIGlzIGRlcHJlY2F0ZWQhXCIpO1xufTtcbndpbmRvdy5wcmludCA9IHdpbmRvdy5jb25zb2xlLmxvZztcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyID0gX0V2ZW50VGFyZ2V0W1wiZGVmYXVsdFwiXS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lci5iaW5kKHdpbmRvdyk7XG53aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IF9FdmVudFRhcmdldFtcImRlZmF1bHRcIl0ucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIuYmluZCh3aW5kb3cpO1xudmFyIF9kaXNwYXRjaEV2ZW50ID0gX0V2ZW50VGFyZ2V0W1wiZGVmYXVsdFwiXS5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudDtcbndpbmRvdy5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmICh3aW5kb3cuZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCkpIHtcbiAgICByZXR1cm4gX2Rpc3BhdGNoRXZlbnQuYXBwbHkodGhpcyB8fCB3aW5kb3csIGFyZ3VtZW50cyk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbndpbmRvdy5nZXRDb21wdXRlZFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6ICcwcHgnLFxuICAgIHRvcDogJzBweCcsXG4gICAgaGVpZ2h0OiAnMHB4JyxcbiAgICBwYWRkaW5nTGVmdDogMCxcbiAgICBnZXRQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXNba2V5XTtcbiAgICB9XG4gIH07XG59O1xucmFsLm9uV2luZG93UmVzaXplICYmIHJhbC5vbldpbmRvd1Jlc2l6ZShmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICB3aW5kb3cuaW5uZXJXaWR0aCA9IHdpZHRoO1xuICB3aW5kb3cuaW5uZXJIZWlnaHQgPSBoZWlnaHQ7XG4gIHdpbmRvdy5vdXRlcldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHdpbmRvdy5vdXRlckhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHdpbmRvdy5zY3JlZW4ud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgd2luZG93LnNjcmVlbi5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwicmVzaXplXCIpO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG59KTtcbnJhbC5vbkRldmljZU9yaWVudGF0aW9uQ2hhbmdlICYmIHJhbC5vbkRldmljZU9yaWVudGF0aW9uQ2hhbmdlKGZ1bmN0aW9uIChyZXMpIHtcbiAgaWYgKHJlcy52YWx1ZSA9PT0gXCJwb3J0cmFpdFwiKSB7XG4gICAgd2luZG93Lm9yaWVudGF0aW9uID0gMDtcbiAgfSBlbHNlIGlmIChyZXMudmFsdWUgPT09IFwibGFuZHNjYXBlXCIpIHtcbiAgICB3aW5kb3cub3JpZW50YXRpb24gPSA5MDtcbiAgfSBlbHNlIGlmIChyZXMudmFsdWUgPT09IFwibGFuZHNjYXBlUmV2ZXJzZVwiKSB7XG4gICAgd2luZG93Lm9yaWVudGF0aW9uID0gLTkwO1xuICB9IGVsc2UgaWYgKHJlcy52YWx1ZSA9PT0gXCJwb3J0cmFpdFJldmVyc2VcIikge1xuICAgIHdpbmRvdy5vcmllbnRhdGlvbiA9IDE4MDtcbiAgfVxufSk7XG53aW5kb3cuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS53YXJuKFwid2luZG93LnN0b3AoKSBub3QgaW1wbGVtZW50ZWRcIik7XG59O1xud2luZG93LkF1ZGlvID0gX0F1ZGlvW1wiZGVmYXVsdFwiXTtcbndpbmRvdy5BdWRpb0NvbnRleHQgPSBfQXVkaW9Db250ZXh0W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5EZXZpY2VNb3Rpb25FdmVudCA9IF9EZXZpY2VNb3Rpb25FdmVudFtcImRlZmF1bHRcIl07XG53aW5kb3cuRXZlbnQgPSBfRXZlbnRbXCJkZWZhdWx0XCJdO1xud2luZG93LkZvbnRGYWNlID0gX0ZvbnRGYWNlW1wiZGVmYXVsdFwiXTtcbndpbmRvdy5Gb250RmFjZVNldCA9IF9Gb250RmFjZVNldFtcImRlZmF1bHRcIl07XG53aW5kb3cuSFRNTEVsZW1lbnQgPSBfSFRNTEVsZW1lbnRbXCJkZWZhdWx0XCJdO1xud2luZG93LkhUTUxBdWRpb0VsZW1lbnQgPSBfSFRNTEF1ZGlvRWxlbWVudFtcImRlZmF1bHRcIl07XG53aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQgPSBfSFRNTENhbnZhc0VsZW1lbnRbXCJkZWZhdWx0XCJdO1xud2luZG93LkhUTUxJbWFnZUVsZW1lbnQgPSBfSFRNTEltYWdlRWxlbWVudFtcImRlZmF1bHRcIl07XG53aW5kb3cuSFRNTFZpZGVvRWxlbWVudCA9IF9IVE1MVmlkZW9FbGVtZW50W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5JbWFnZSA9IF9JbWFnZVtcImRlZmF1bHRcIl07XG53aW5kb3cuVG91Y2hFdmVudCA9IF9Ub3VjaEV2ZW50W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5YTUxIdHRwUmVxdWVzdCA9IF9YTUxIdHRwUmVxdWVzdFtcImRlZmF1bHRcIl07XG53aW5kb3cuSFRNTFNjcmlwdEVsZW1lbnQgPSBfSFRNTFNjcmlwdEVsZW1lbnRbXCJkZWZhdWx0XCJdO1xuaWYgKCF3aW5kb3cuQmxvYiB8fCAhd2luZG93LlVSTCkge1xuICB2YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgnLi9CbG9iLmpzJyksXG4gICAgQmxvYiA9IF9yZXF1aXJlMi5CbG9iLFxuICAgIFVSTCA9IF9yZXF1aXJlMi5VUkw7XG4gIHdpbmRvdy5CbG9iID0gQmxvYjtcbiAgd2luZG93LlVSTCA9IFVSTDtcbn1cbmlmICghd2luZG93LkRPTVBhcnNlcikge1xuICB3aW5kb3cuRE9NUGFyc2VyID0gcmVxdWlyZSgnLi94bWxkb20vZG9tLXBhcnNlci5qcycpLkRPTVBhcnNlcjtcbn1cblxufSx7XCIuLi9saWIvYmFzZTY0Lm1pbi5qc1wiOjEsXCIuL0F1ZGlvXCI6NCxcIi4vQmxvYi5qc1wiOjUsXCIuL0RldmljZU1vdGlvbkV2ZW50XCI6NyxcIi4vRG9jdW1lbnRcIjo4LFwiLi9FdmVudFwiOjEwLFwiLi9FdmVudFRhcmdldFwiOjExLFwiLi9Gb250RmFjZVwiOjEyLFwiLi9Gb250RmFjZVNldFwiOjEzLFwiLi9IVE1MQXVkaW9FbGVtZW50XCI6MTUsXCIuL0hUTUxDYW52YXNFbGVtZW50XCI6MTcsXCIuL0hUTUxFbGVtZW50XCI6MTgsXCIuL0hUTUxJbWFnZUVsZW1lbnRcIjoyMSxcIi4vSFRNTFNjcmlwdEVsZW1lbnRcIjoyNCxcIi4vSFRNTFZpZGVvRWxlbWVudFwiOjI2LFwiLi9JbWFnZVwiOjI3LFwiLi9Mb2NhdGlvblwiOjI5LFwiLi9OYXZpZ2F0b3JcIjozMSxcIi4vU2NyZWVuXCI6MzQsXCIuL1RvdWNoRXZlbnRcIjozNixcIi4vWE1MSHR0cFJlcXVlc3RcIjozNyxcIi4vYXVkaW9Db250ZXh0L0F1ZGlvQ29udGV4dFwiOjQzLFwiLi94bWxkb20vZG9tLXBhcnNlci5qc1wiOjYwfV0sNjA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIERPTVBhcnNlcihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge1xuICAgIGxvY2F0b3I6IHt9XG4gIH07XG59XG5ET01QYXJzZXIucHJvdG90eXBlLnBhcnNlRnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzb3VyY2UsIG1pbWVUeXBlKSB7XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICB2YXIgc2F4ID0gbmV3IFhNTFJlYWRlcigpO1xuICB2YXIgZG9tQnVpbGRlciA9IG9wdGlvbnMuZG9tQnVpbGRlciB8fCBuZXcgRE9NSGFuZGxlcigpO1xuICB2YXIgZXJyb3JIYW5kbGVyID0gb3B0aW9ucy5lcnJvckhhbmRsZXI7XG4gIHZhciBsb2NhdG9yID0gb3B0aW9ucy5sb2NhdG9yO1xuICB2YXIgZGVmYXVsdE5TTWFwID0gb3B0aW9ucy54bWxucyB8fCB7fTtcbiAgdmFyIGlzSFRNTCA9IC9cXC94P2h0bWw/JC8udGVzdChtaW1lVHlwZSk7XG4gIHZhciBlbnRpdHlNYXAgPSBpc0hUTUwgPyBodG1sRW50aXR5LmVudGl0eU1hcCA6IHtcbiAgICAnbHQnOiAnPCcsXG4gICAgJ2d0JzogJz4nLFxuICAgICdhbXAnOiAnJicsXG4gICAgJ3F1b3QnOiAnXCInLFxuICAgICdhcG9zJzogXCInXCJcbiAgfTtcbiAgaWYgKGxvY2F0b3IpIHtcbiAgICBkb21CdWlsZGVyLnNldERvY3VtZW50TG9jYXRvcihsb2NhdG9yKTtcbiAgfVxuICBzYXguZXJyb3JIYW5kbGVyID0gYnVpbGRFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyLCBkb21CdWlsZGVyLCBsb2NhdG9yKTtcbiAgc2F4LmRvbUJ1aWxkZXIgPSBvcHRpb25zLmRvbUJ1aWxkZXIgfHwgZG9tQnVpbGRlcjtcbiAgaWYgKGlzSFRNTCkge1xuICAgIGRlZmF1bHROU01hcFsnJ10gPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG4gIH1cbiAgZGVmYXVsdE5TTWFwLnhtbCA9IGRlZmF1bHROU01hcC54bWwgfHwgJ2h0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZSc7XG4gIGlmIChzb3VyY2UpIHtcbiAgICBzYXgucGFyc2Uoc291cmNlLCBkZWZhdWx0TlNNYXAsIGVudGl0eU1hcCk7XG4gIH0gZWxzZSB7XG4gICAgc2F4LmVycm9ySGFuZGxlci5lcnJvcihcImludmFsaWQgZG9jIHNvdXJjZVwiKTtcbiAgfVxuICByZXR1cm4gZG9tQnVpbGRlci5kb2M7XG59O1xuZnVuY3Rpb24gYnVpbGRFcnJvckhhbmRsZXIoZXJyb3JJbXBsLCBkb21CdWlsZGVyLCBsb2NhdG9yKSB7XG4gIGlmICghZXJyb3JJbXBsKSB7XG4gICAgaWYgKGRvbUJ1aWxkZXIgaW5zdGFuY2VvZiBET01IYW5kbGVyKSB7XG4gICAgICByZXR1cm4gZG9tQnVpbGRlcjtcbiAgICB9XG4gICAgZXJyb3JJbXBsID0gZG9tQnVpbGRlcjtcbiAgfVxuICB2YXIgZXJyb3JIYW5kbGVyID0ge307XG4gIHZhciBpc0NhbGxiYWNrID0gZXJyb3JJbXBsIGluc3RhbmNlb2YgRnVuY3Rpb247XG4gIGxvY2F0b3IgPSBsb2NhdG9yIHx8IHt9O1xuICBmdW5jdGlvbiBidWlsZChrZXkpIHtcbiAgICB2YXIgZm4gPSBlcnJvckltcGxba2V5XTtcbiAgICBpZiAoIWZuICYmIGlzQ2FsbGJhY2spIHtcbiAgICAgIGZuID0gZXJyb3JJbXBsLmxlbmd0aCA9PSAyID8gZnVuY3Rpb24gKG1zZykge1xuICAgICAgICBlcnJvckltcGwoa2V5LCBtc2cpO1xuICAgICAgfSA6IGVycm9ySW1wbDtcbiAgICB9XG4gICAgZXJyb3JIYW5kbGVyW2tleV0gPSBmbiAmJiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICBmbignW3htbGRvbSAnICsga2V5ICsgJ11cXHQnICsgbXNnICsgX2xvY2F0b3IobG9jYXRvcikpO1xuICAgIH0gfHwgZnVuY3Rpb24gKCkge307XG4gIH1cbiAgYnVpbGQoJ3dhcm5pbmcnKTtcbiAgYnVpbGQoJ2Vycm9yJyk7XG4gIGJ1aWxkKCdmYXRhbEVycm9yJyk7XG4gIHJldHVybiBlcnJvckhhbmRsZXI7XG59XG5mdW5jdGlvbiBET01IYW5kbGVyKCkge1xuICB0aGlzLmNkYXRhID0gZmFsc2U7XG59XG5mdW5jdGlvbiBwb3NpdGlvbihsb2NhdG9yLCBub2RlKSB7XG4gIG5vZGUubGluZU51bWJlciA9IGxvY2F0b3IubGluZU51bWJlcjtcbiAgbm9kZS5jb2x1bW5OdW1iZXIgPSBsb2NhdG9yLmNvbHVtbk51bWJlcjtcbn1cbkRPTUhhbmRsZXIucHJvdG90eXBlID0ge1xuICBzdGFydERvY3VtZW50OiBmdW5jdGlvbiBzdGFydERvY3VtZW50KCkge1xuICAgIHRoaXMuZG9jID0gbmV3IERPTUltcGxlbWVudGF0aW9uKCkuY3JlYXRlRG9jdW1lbnQobnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgaWYgKHRoaXMubG9jYXRvcikge1xuICAgICAgdGhpcy5kb2MuZG9jdW1lbnRVUkkgPSB0aGlzLmxvY2F0b3Iuc3lzdGVtSWQ7XG4gICAgfVxuICB9LFxuICBzdGFydEVsZW1lbnQ6IGZ1bmN0aW9uIHN0YXJ0RWxlbWVudChuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSwgcU5hbWUsIGF0dHJzKSB7XG4gICAgdmFyIGRvYyA9IHRoaXMuZG9jO1xuICAgIHZhciBlbCA9IGRvYy5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxTmFtZSB8fCBsb2NhbE5hbWUpO1xuICAgIHZhciBsZW4gPSBhdHRycy5sZW5ndGg7XG4gICAgYXBwZW5kRWxlbWVudCh0aGlzLCBlbCk7XG4gICAgdGhpcy5jdXJyZW50RWxlbWVudCA9IGVsO1xuICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsIGVsKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgbmFtZXNwYWNlVVJJID0gYXR0cnMuZ2V0VVJJKGkpO1xuICAgICAgdmFyIHZhbHVlID0gYXR0cnMuZ2V0VmFsdWUoaSk7XG4gICAgICB2YXIgcU5hbWUgPSBhdHRycy5nZXRRTmFtZShpKTtcbiAgICAgIHZhciBhdHRyID0gZG9jLmNyZWF0ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgcU5hbWUpO1xuICAgICAgdGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKGF0dHJzLmdldExvY2F0b3IoaSksIGF0dHIpO1xuICAgICAgYXR0ci52YWx1ZSA9IGF0dHIubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpO1xuICAgIH1cbiAgfSxcbiAgZW5kRWxlbWVudDogZnVuY3Rpb24gZW5kRWxlbWVudChuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSwgcU5hbWUpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudEVsZW1lbnQ7XG4gICAgdmFyIHRhZ05hbWUgPSBjdXJyZW50LnRhZ05hbWU7XG4gICAgdGhpcy5jdXJyZW50RWxlbWVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgfSxcbiAgc3RhcnRQcmVmaXhNYXBwaW5nOiBmdW5jdGlvbiBzdGFydFByZWZpeE1hcHBpbmcocHJlZml4LCB1cmkpIHt9LFxuICBlbmRQcmVmaXhNYXBwaW5nOiBmdW5jdGlvbiBlbmRQcmVmaXhNYXBwaW5nKHByZWZpeCkge30sXG4gIHByb2Nlc3NpbmdJbnN0cnVjdGlvbjogZnVuY3Rpb24gcHJvY2Vzc2luZ0luc3RydWN0aW9uKHRhcmdldCwgZGF0YSkge1xuICAgIHZhciBpbnMgPSB0aGlzLmRvYy5jcmVhdGVQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24odGFyZ2V0LCBkYXRhKTtcbiAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLCBpbnMpO1xuICAgIGFwcGVuZEVsZW1lbnQodGhpcywgaW5zKTtcbiAgfSxcbiAgaWdub3JhYmxlV2hpdGVzcGFjZTogZnVuY3Rpb24gaWdub3JhYmxlV2hpdGVzcGFjZShjaCwgc3RhcnQsIGxlbmd0aCkge30sXG4gIGNoYXJhY3RlcnM6IGZ1bmN0aW9uIGNoYXJhY3RlcnMoY2hhcnMsIHN0YXJ0LCBsZW5ndGgpIHtcbiAgICBjaGFycyA9IF90b1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmIChjaGFycykge1xuICAgICAgaWYgKHRoaXMuY2RhdGEpIHtcbiAgICAgICAgdmFyIGNoYXJOb2RlID0gdGhpcy5kb2MuY3JlYXRlQ0RBVEFTZWN0aW9uKGNoYXJzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjaGFyTm9kZSA9IHRoaXMuZG9jLmNyZWF0ZVRleHROb2RlKGNoYXJzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY3VycmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hhck5vZGUpO1xuICAgICAgfSBlbHNlIGlmICgvXlxccyokLy50ZXN0KGNoYXJzKSkge1xuICAgICAgICB0aGlzLmRvYy5hcHBlbmRDaGlsZChjaGFyTm9kZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLCBjaGFyTm9kZSk7XG4gICAgfVxuICB9LFxuICBza2lwcGVkRW50aXR5OiBmdW5jdGlvbiBza2lwcGVkRW50aXR5KG5hbWUpIHt9LFxuICBlbmREb2N1bWVudDogZnVuY3Rpb24gZW5kRG9jdW1lbnQoKSB7XG4gICAgdGhpcy5kb2Mubm9ybWFsaXplKCk7XG4gIH0sXG4gIHNldERvY3VtZW50TG9jYXRvcjogZnVuY3Rpb24gc2V0RG9jdW1lbnRMb2NhdG9yKGxvY2F0b3IpIHtcbiAgICBpZiAodGhpcy5sb2NhdG9yID0gbG9jYXRvcikge1xuICAgICAgbG9jYXRvci5saW5lTnVtYmVyID0gMDtcbiAgICB9XG4gIH0sXG4gIGNvbW1lbnQ6IGZ1bmN0aW9uIGNvbW1lbnQoY2hhcnMsIHN0YXJ0LCBsZW5ndGgpIHtcbiAgICBjaGFycyA9IF90b1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHZhciBjb21tID0gdGhpcy5kb2MuY3JlYXRlQ29tbWVudChjaGFycyk7XG4gICAgdGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvciwgY29tbSk7XG4gICAgYXBwZW5kRWxlbWVudCh0aGlzLCBjb21tKTtcbiAgfSxcbiAgc3RhcnRDREFUQTogZnVuY3Rpb24gc3RhcnRDREFUQSgpIHtcbiAgICB0aGlzLmNkYXRhID0gdHJ1ZTtcbiAgfSxcbiAgZW5kQ0RBVEE6IGZ1bmN0aW9uIGVuZENEQVRBKCkge1xuICAgIHRoaXMuY2RhdGEgPSBmYWxzZTtcbiAgfSxcbiAgc3RhcnREVEQ6IGZ1bmN0aW9uIHN0YXJ0RFREKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCkge1xuICAgIHZhciBpbXBsID0gdGhpcy5kb2MuaW1wbGVtZW50YXRpb247XG4gICAgaWYgKGltcGwgJiYgaW1wbC5jcmVhdGVEb2N1bWVudFR5cGUpIHtcbiAgICAgIHZhciBkdCA9IGltcGwuY3JlYXRlRG9jdW1lbnRUeXBlKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCk7XG4gICAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLCBkdCk7XG4gICAgICBhcHBlbmRFbGVtZW50KHRoaXMsIGR0KTtcbiAgICB9XG4gIH0sXG4gIHdhcm5pbmc6IGZ1bmN0aW9uIHdhcm5pbmcoZXJyb3IpIHtcbiAgICBjb25zb2xlLndhcm4oJ1t4bWxkb20gd2FybmluZ11cXHQnICsgZXJyb3IsIF9sb2NhdG9yKHRoaXMubG9jYXRvcikpO1xuICB9LFxuICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoX2Vycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW3htbGRvbSBlcnJvcl1cXHQnICsgX2Vycm9yLCBfbG9jYXRvcih0aGlzLmxvY2F0b3IpKTtcbiAgfSxcbiAgZmF0YWxFcnJvcjogZnVuY3Rpb24gZmF0YWxFcnJvcihlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1t4bWxkb20gZmF0YWxFcnJvcl1cXHQnICsgZXJyb3IsIF9sb2NhdG9yKHRoaXMubG9jYXRvcikpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuZnVuY3Rpb24gX2xvY2F0b3IobCkge1xuICBpZiAobCkge1xuICAgIHJldHVybiAnXFxuQCcgKyAobC5zeXN0ZW1JZCB8fCAnJykgKyAnI1tsaW5lOicgKyBsLmxpbmVOdW1iZXIgKyAnLGNvbDonICsgbC5jb2x1bW5OdW1iZXIgKyAnXSc7XG4gIH1cbn1cbmZ1bmN0aW9uIF90b1N0cmluZyhjaGFycywgc3RhcnQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIGNoYXJzID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGNoYXJzLnN1YnN0cihzdGFydCwgbGVuZ3RoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoY2hhcnMubGVuZ3RoID49IHN0YXJ0ICsgbGVuZ3RoIHx8IHN0YXJ0KSB7XG4gICAgICByZXR1cm4gbmV3IGphdmEubGFuZy5TdHJpbmcoY2hhcnMsIHN0YXJ0LCBsZW5ndGgpICsgJyc7XG4gICAgfVxuICAgIHJldHVybiBjaGFycztcbiAgfVxufVxuXCJlbmREVEQsc3RhcnRFbnRpdHksZW5kRW50aXR5LGF0dHJpYnV0ZURlY2wsZWxlbWVudERlY2wsZXh0ZXJuYWxFbnRpdHlEZWNsLGludGVybmFsRW50aXR5RGVjbCxyZXNvbHZlRW50aXR5LGdldEV4dGVybmFsU3Vic2V0LG5vdGF0aW9uRGVjbCx1bnBhcnNlZEVudGl0eURlY2xcIi5yZXBsYWNlKC9cXHcrL2csIGZ1bmN0aW9uIChrZXkpIHtcbiAgRE9NSGFuZGxlci5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn0pO1xuZnVuY3Rpb24gYXBwZW5kRWxlbWVudChoYW5kZXIsIG5vZGUpIHtcbiAgaWYgKCFoYW5kZXIuY3VycmVudEVsZW1lbnQpIHtcbiAgICBoYW5kZXIuZG9jLmFwcGVuZENoaWxkKG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGhhbmRlci5jdXJyZW50RWxlbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgfVxufVxudmFyIGh0bWxFbnRpdHkgPSByZXF1aXJlKCcuL2VudGl0aWVzJyk7XG52YXIgWE1MUmVhZGVyID0gcmVxdWlyZSgnLi9zYXgnKS5YTUxSZWFkZXI7XG52YXIgRE9NSW1wbGVtZW50YXRpb24gPSBleHBvcnRzLkRPTUltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9kb20nKS5ET01JbXBsZW1lbnRhdGlvbjtcbmV4cG9ydHMuWE1MU2VyaWFsaXplciA9IHJlcXVpcmUoJy4vZG9tJykuWE1MU2VyaWFsaXplcjtcbmV4cG9ydHMuRE9NUGFyc2VyID0gRE9NUGFyc2VyO1xuXG59LHtcIi4vZG9tXCI6NjEsXCIuL2VudGl0aWVzXCI6NjIsXCIuL3NheFwiOjYzfV0sNjE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIGNvcHkoc3JjLCBkZXN0KSB7XG4gIGZvciAodmFyIHAgaW4gc3JjKSB7XG4gICAgZGVzdFtwXSA9IHNyY1twXTtcbiAgfVxufVxuZnVuY3Rpb24gX2V4dGVuZHMoQ2xhc3MsIFN1cGVyKSB7XG4gIHZhciBwdCA9IENsYXNzLnByb3RvdHlwZTtcbiAgaWYgKCEocHQgaW5zdGFuY2VvZiBTdXBlcikpIHtcbiAgICB2YXIgdCA9IGZ1bmN0aW9uIHQoKSB7fTtcbiAgICA7XG4gICAgdC5wcm90b3R5cGUgPSBTdXBlci5wcm90b3R5cGU7XG4gICAgdCA9IG5ldyB0KCk7XG4gICAgY29weShwdCwgdCk7XG4gICAgQ2xhc3MucHJvdG90eXBlID0gcHQgPSB0O1xuICB9XG4gIGlmIChwdC5jb25zdHJ1Y3RvciAhPSBDbGFzcykge1xuICAgIGlmICh0eXBlb2YgQ2xhc3MgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcihcInVua25vdyBDbGFzczpcIiArIENsYXNzKTtcbiAgICB9XG4gICAgcHQuY29uc3RydWN0b3IgPSBDbGFzcztcbiAgfVxufVxudmFyIGh0bWxucyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbnZhciBOb2RlVHlwZSA9IHt9O1xudmFyIEVMRU1FTlRfTk9ERSA9IE5vZGVUeXBlLkVMRU1FTlRfTk9ERSA9IDE7XG52YXIgQVRUUklCVVRFX05PREUgPSBOb2RlVHlwZS5BVFRSSUJVVEVfTk9ERSA9IDI7XG52YXIgVEVYVF9OT0RFID0gTm9kZVR5cGUuVEVYVF9OT0RFID0gMztcbnZhciBDREFUQV9TRUNUSU9OX05PREUgPSBOb2RlVHlwZS5DREFUQV9TRUNUSU9OX05PREUgPSA0O1xudmFyIEVOVElUWV9SRUZFUkVOQ0VfTk9ERSA9IE5vZGVUeXBlLkVOVElUWV9SRUZFUkVOQ0VfTk9ERSA9IDU7XG52YXIgRU5USVRZX05PREUgPSBOb2RlVHlwZS5FTlRJVFlfTk9ERSA9IDY7XG52YXIgUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFID0gTm9kZVR5cGUuUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFID0gNztcbnZhciBDT01NRU5UX05PREUgPSBOb2RlVHlwZS5DT01NRU5UX05PREUgPSA4O1xudmFyIERPQ1VNRU5UX05PREUgPSBOb2RlVHlwZS5ET0NVTUVOVF9OT0RFID0gOTtcbnZhciBET0NVTUVOVF9UWVBFX05PREUgPSBOb2RlVHlwZS5ET0NVTUVOVF9UWVBFX05PREUgPSAxMDtcbnZhciBET0NVTUVOVF9GUkFHTUVOVF9OT0RFID0gTm9kZVR5cGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSA9IDExO1xudmFyIE5PVEFUSU9OX05PREUgPSBOb2RlVHlwZS5OT1RBVElPTl9OT0RFID0gMTI7XG52YXIgRXhjZXB0aW9uQ29kZSA9IHt9O1xudmFyIEV4Y2VwdGlvbk1lc3NhZ2UgPSB7fTtcbnZhciBJTkRFWF9TSVpFX0VSUiA9IEV4Y2VwdGlvbkNvZGUuSU5ERVhfU0laRV9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxXSA9IFwiSW5kZXggc2l6ZSBlcnJvclwiLCAxKTtcbnZhciBET01TVFJJTkdfU0laRV9FUlIgPSBFeGNlcHRpb25Db2RlLkRPTVNUUklOR19TSVpFX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzJdID0gXCJET01TdHJpbmcgc2l6ZSBlcnJvclwiLCAyKTtcbnZhciBISUVSQVJDSFlfUkVRVUVTVF9FUlIgPSBFeGNlcHRpb25Db2RlLkhJRVJBUkNIWV9SRVFVRVNUX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzNdID0gXCJIaWVyYXJjaHkgcmVxdWVzdCBlcnJvclwiLCAzKTtcbnZhciBXUk9OR19ET0NVTUVOVF9FUlIgPSBFeGNlcHRpb25Db2RlLldST05HX0RPQ1VNRU5UX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzRdID0gXCJXcm9uZyBkb2N1bWVudFwiLCA0KTtcbnZhciBJTlZBTElEX0NIQVJBQ1RFUl9FUlIgPSBFeGNlcHRpb25Db2RlLklOVkFMSURfQ0hBUkFDVEVSX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzVdID0gXCJJbnZhbGlkIGNoYXJhY3RlclwiLCA1KTtcbnZhciBOT19EQVRBX0FMTE9XRURfRVJSID0gRXhjZXB0aW9uQ29kZS5OT19EQVRBX0FMTE9XRURfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbNl0gPSBcIk5vIGRhdGEgYWxsb3dlZFwiLCA2KTtcbnZhciBOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlIgPSBFeGNlcHRpb25Db2RlLk5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzddID0gXCJObyBtb2RpZmljYXRpb24gYWxsb3dlZFwiLCA3KTtcbnZhciBOT1RfRk9VTkRfRVJSID0gRXhjZXB0aW9uQ29kZS5OT1RfRk9VTkRfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbOF0gPSBcIk5vdCBmb3VuZFwiLCA4KTtcbnZhciBOT1RfU1VQUE9SVEVEX0VSUiA9IEV4Y2VwdGlvbkNvZGUuTk9UX1NVUFBPUlRFRF9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVs5XSA9IFwiTm90IHN1cHBvcnRlZFwiLCA5KTtcbnZhciBJTlVTRV9BVFRSSUJVVEVfRVJSID0gRXhjZXB0aW9uQ29kZS5JTlVTRV9BVFRSSUJVVEVfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbMTBdID0gXCJBdHRyaWJ1dGUgaW4gdXNlXCIsIDEwKTtcbnZhciBJTlZBTElEX1NUQVRFX0VSUiA9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9TVEFURV9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxMV0gPSBcIkludmFsaWQgc3RhdGVcIiwgMTEpO1xudmFyIFNZTlRBWF9FUlIgPSBFeGNlcHRpb25Db2RlLlNZTlRBWF9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxMl0gPSBcIlN5bnRheCBlcnJvclwiLCAxMik7XG52YXIgSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSID0gRXhjZXB0aW9uQ29kZS5JTlZBTElEX01PRElGSUNBVElPTl9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxM10gPSBcIkludmFsaWQgbW9kaWZpY2F0aW9uXCIsIDEzKTtcbnZhciBOQU1FU1BBQ0VfRVJSID0gRXhjZXB0aW9uQ29kZS5OQU1FU1BBQ0VfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbMTRdID0gXCJJbnZhbGlkIG5hbWVzcGFjZVwiLCAxNCk7XG52YXIgSU5WQUxJRF9BQ0NFU1NfRVJSID0gRXhjZXB0aW9uQ29kZS5JTlZBTElEX0FDQ0VTU19FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxNV0gPSBcIkludmFsaWQgYWNjZXNzXCIsIDE1KTtcbmZ1bmN0aW9uIERPTUV4Y2VwdGlvbihjb2RlLCBtZXNzYWdlKSB7XG4gIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICB2YXIgZXJyb3IgPSBtZXNzYWdlO1xuICB9IGVsc2Uge1xuICAgIGVycm9yID0gdGhpcztcbiAgICBFcnJvci5jYWxsKHRoaXMsIEV4Y2VwdGlvbk1lc3NhZ2VbY29kZV0pO1xuICAgIHRoaXMubWVzc2FnZSA9IEV4Y2VwdGlvbk1lc3NhZ2VbY29kZV07XG4gICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBET01FeGNlcHRpb24pO1xuICB9XG4gIGVycm9yLmNvZGUgPSBjb2RlO1xuICBpZiAobWVzc2FnZSkgdGhpcy5tZXNzYWdlID0gdGhpcy5tZXNzYWdlICsgXCI6IFwiICsgbWVzc2FnZTtcbiAgcmV0dXJuIGVycm9yO1xufVxuO1xuRE9NRXhjZXB0aW9uLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcbmNvcHkoRXhjZXB0aW9uQ29kZSwgRE9NRXhjZXB0aW9uKTtcbmZ1bmN0aW9uIE5vZGVMaXN0KCkge31cbjtcbk5vZGVMaXN0LnByb3RvdHlwZSA9IHtcbiAgbGVuZ3RoOiAwLFxuICBpdGVtOiBmdW5jdGlvbiBpdGVtKGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXNbaW5kZXhdIHx8IG51bGw7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZyhpc0hUTUwsIG5vZGVGaWx0ZXIpIHtcbiAgICBmb3IgKHZhciBidWYgPSBbXSwgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzZXJpYWxpemVUb1N0cmluZyh0aGlzW2ldLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlcik7XG4gICAgfVxuICAgIHJldHVybiBidWYuam9pbignJyk7XG4gIH1cbn07XG5mdW5jdGlvbiBMaXZlTm9kZUxpc3Qobm9kZSwgcmVmcmVzaCkge1xuICB0aGlzLl9ub2RlID0gbm9kZTtcbiAgdGhpcy5fcmVmcmVzaCA9IHJlZnJlc2g7XG4gIF91cGRhdGVMaXZlTGlzdCh0aGlzKTtcbn1cbmZ1bmN0aW9uIF91cGRhdGVMaXZlTGlzdChsaXN0KSB7XG4gIHZhciBpbmMgPSBsaXN0Ll9ub2RlLl9pbmMgfHwgbGlzdC5fbm9kZS5vd25lckRvY3VtZW50Ll9pbmM7XG4gIGlmIChsaXN0Ll9pbmMgIT0gaW5jKSB7XG4gICAgdmFyIGxzID0gbGlzdC5fcmVmcmVzaChsaXN0Ll9ub2RlKTtcbiAgICBfX3NldF9fKGxpc3QsICdsZW5ndGgnLCBscy5sZW5ndGgpO1xuICAgIGNvcHkobHMsIGxpc3QpO1xuICAgIGxpc3QuX2luYyA9IGluYztcbiAgfVxufVxuTGl2ZU5vZGVMaXN0LnByb3RvdHlwZS5pdGVtID0gZnVuY3Rpb24gKGkpIHtcbiAgX3VwZGF0ZUxpdmVMaXN0KHRoaXMpO1xuICByZXR1cm4gdGhpc1tpXTtcbn07XG5fZXh0ZW5kcyhMaXZlTm9kZUxpc3QsIE5vZGVMaXN0KTtcbmZ1bmN0aW9uIE5hbWVkTm9kZU1hcCgpIHt9XG47XG5mdW5jdGlvbiBfZmluZE5vZGVJbmRleChsaXN0LCBub2RlKSB7XG4gIHZhciBpID0gbGlzdC5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZiAobGlzdFtpXSA9PT0gbm9kZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBfYWRkTmFtZWROb2RlKGVsLCBsaXN0LCBuZXdBdHRyLCBvbGRBdHRyKSB7XG4gIGlmIChvbGRBdHRyKSB7XG4gICAgbGlzdFtfZmluZE5vZGVJbmRleChsaXN0LCBvbGRBdHRyKV0gPSBuZXdBdHRyO1xuICB9IGVsc2Uge1xuICAgIGxpc3RbbGlzdC5sZW5ndGgrK10gPSBuZXdBdHRyO1xuICB9XG4gIGlmIChlbCkge1xuICAgIG5ld0F0dHIub3duZXJFbGVtZW50ID0gZWw7XG4gICAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG4gICAgaWYgKGRvYykge1xuICAgICAgb2xkQXR0ciAmJiBfb25SZW1vdmVBdHRyaWJ1dGUoZG9jLCBlbCwgb2xkQXR0cik7XG4gICAgICBfb25BZGRBdHRyaWJ1dGUoZG9jLCBlbCwgbmV3QXR0cik7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBfcmVtb3ZlTmFtZWROb2RlKGVsLCBsaXN0LCBhdHRyKSB7XG4gIHZhciBpID0gX2ZpbmROb2RlSW5kZXgobGlzdCwgYXR0cik7XG4gIGlmIChpID49IDApIHtcbiAgICB2YXIgbGFzdEluZGV4ID0gbGlzdC5sZW5ndGggLSAxO1xuICAgIHdoaWxlIChpIDwgbGFzdEluZGV4KSB7XG4gICAgICBsaXN0W2ldID0gbGlzdFsrK2ldO1xuICAgIH1cbiAgICBsaXN0Lmxlbmd0aCA9IGxhc3RJbmRleDtcbiAgICBpZiAoZWwpIHtcbiAgICAgIHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50O1xuICAgICAgaWYgKGRvYykge1xuICAgICAgICBfb25SZW1vdmVBdHRyaWJ1dGUoZG9jLCBlbCwgYXR0cik7XG4gICAgICAgIGF0dHIub3duZXJFbGVtZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRE9NRXhjZXB0aW9uKE5PVF9GT1VORF9FUlIsIG5ldyBFcnJvcihlbC50YWdOYW1lICsgJ0AnICsgYXR0cikpO1xuICB9XG59XG5OYW1lZE5vZGVNYXAucHJvdG90eXBlID0ge1xuICBsZW5ndGg6IDAsXG4gIGl0ZW06IE5vZGVMaXN0LnByb3RvdHlwZS5pdGVtLFxuICBnZXROYW1lZEl0ZW06IGZ1bmN0aW9uIGdldE5hbWVkSXRlbShrZXkpIHtcbiAgICB2YXIgaSA9IHRoaXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciBhdHRyID0gdGhpc1tpXTtcbiAgICAgIGlmIChhdHRyLm5vZGVOYW1lID09IGtleSkge1xuICAgICAgICByZXR1cm4gYXR0cjtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNldE5hbWVkSXRlbTogZnVuY3Rpb24gc2V0TmFtZWRJdGVtKGF0dHIpIHtcbiAgICB2YXIgZWwgPSBhdHRyLm93bmVyRWxlbWVudDtcbiAgICBpZiAoZWwgJiYgZWwgIT0gdGhpcy5fb3duZXJFbGVtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKElOVVNFX0FUVFJJQlVURV9FUlIpO1xuICAgIH1cbiAgICB2YXIgb2xkQXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtKGF0dHIubm9kZU5hbWUpO1xuICAgIF9hZGROYW1lZE5vZGUodGhpcy5fb3duZXJFbGVtZW50LCB0aGlzLCBhdHRyLCBvbGRBdHRyKTtcbiAgICByZXR1cm4gb2xkQXR0cjtcbiAgfSxcbiAgc2V0TmFtZWRJdGVtTlM6IGZ1bmN0aW9uIHNldE5hbWVkSXRlbU5TKGF0dHIpIHtcbiAgICB2YXIgZWwgPSBhdHRyLm93bmVyRWxlbWVudCxcbiAgICAgIG9sZEF0dHI7XG4gICAgaWYgKGVsICYmIGVsICE9IHRoaXMuX293bmVyRWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihJTlVTRV9BVFRSSUJVVEVfRVJSKTtcbiAgICB9XG4gICAgb2xkQXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtTlMoYXR0ci5uYW1lc3BhY2VVUkksIGF0dHIubG9jYWxOYW1lKTtcbiAgICBfYWRkTmFtZWROb2RlKHRoaXMuX293bmVyRWxlbWVudCwgdGhpcywgYXR0ciwgb2xkQXR0cik7XG4gICAgcmV0dXJuIG9sZEF0dHI7XG4gIH0sXG4gIHJlbW92ZU5hbWVkSXRlbTogZnVuY3Rpb24gcmVtb3ZlTmFtZWRJdGVtKGtleSkge1xuICAgIHZhciBhdHRyID0gdGhpcy5nZXROYW1lZEl0ZW0oa2V5KTtcbiAgICBfcmVtb3ZlTmFtZWROb2RlKHRoaXMuX293bmVyRWxlbWVudCwgdGhpcywgYXR0cik7XG4gICAgcmV0dXJuIGF0dHI7XG4gIH0sXG4gIHJlbW92ZU5hbWVkSXRlbU5TOiBmdW5jdGlvbiByZW1vdmVOYW1lZEl0ZW1OUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuICAgIHZhciBhdHRyID0gdGhpcy5nZXROYW1lZEl0ZW1OUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSk7XG4gICAgX3JlbW92ZU5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsIHRoaXMsIGF0dHIpO1xuICAgIHJldHVybiBhdHRyO1xuICB9LFxuICBnZXROYW1lZEl0ZW1OUzogZnVuY3Rpb24gZ2V0TmFtZWRJdGVtTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciBub2RlID0gdGhpc1tpXTtcbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSA9PSBsb2NhbE5hbWUgJiYgbm9kZS5uYW1lc3BhY2VVUkkgPT0gbmFtZXNwYWNlVVJJKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbmZ1bmN0aW9uIERPTUltcGxlbWVudGF0aW9uKGZlYXR1cmVzKSB7XG4gIHRoaXMuX2ZlYXR1cmVzID0ge307XG4gIGlmIChmZWF0dXJlcykge1xuICAgIGZvciAodmFyIGZlYXR1cmUgaW4gZmVhdHVyZXMpIHtcbiAgICAgIHRoaXMuX2ZlYXR1cmVzID0gZmVhdHVyZXNbZmVhdHVyZV07XG4gICAgfVxuICB9XG59XG47XG5ET01JbXBsZW1lbnRhdGlvbi5wcm90b3R5cGUgPSB7XG4gIGhhc0ZlYXR1cmU6IGZ1bmN0aW9uIGhhc0ZlYXR1cmUoZmVhdHVyZSwgdmVyc2lvbikge1xuICAgIHZhciB2ZXJzaW9ucyA9IHRoaXMuX2ZlYXR1cmVzW2ZlYXR1cmUudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKHZlcnNpb25zICYmICghdmVyc2lvbiB8fCB2ZXJzaW9uIGluIHZlcnNpb25zKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZURvY3VtZW50OiBmdW5jdGlvbiBjcmVhdGVEb2N1bWVudChuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUsIGRvY3R5cGUpIHtcbiAgICB2YXIgZG9jID0gbmV3IERvY3VtZW50KCk7XG4gICAgZG9jLmltcGxlbWVudGF0aW9uID0gdGhpcztcbiAgICBkb2MuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuICAgIGRvYy5kb2N0eXBlID0gZG9jdHlwZTtcbiAgICBpZiAoZG9jdHlwZSkge1xuICAgICAgZG9jLmFwcGVuZENoaWxkKGRvY3R5cGUpO1xuICAgIH1cbiAgICBpZiAocXVhbGlmaWVkTmFtZSkge1xuICAgICAgdmFyIHJvb3QgPSBkb2MuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSk7XG4gICAgICBkb2MuYXBwZW5kQ2hpbGQocm9vdCk7XG4gICAgfVxuICAgIHJldHVybiBkb2M7XG4gIH0sXG4gIGNyZWF0ZURvY3VtZW50VHlwZTogZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnRUeXBlKHF1YWxpZmllZE5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCkge1xuICAgIHZhciBub2RlID0gbmV3IERvY3VtZW50VHlwZSgpO1xuICAgIG5vZGUubmFtZSA9IHF1YWxpZmllZE5hbWU7XG4gICAgbm9kZS5ub2RlTmFtZSA9IHF1YWxpZmllZE5hbWU7XG4gICAgbm9kZS5wdWJsaWNJZCA9IHB1YmxpY0lkO1xuICAgIG5vZGUuc3lzdGVtSWQgPSBzeXN0ZW1JZDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufTtcbmZ1bmN0aW9uIE5vZGUoKSB7fVxuO1xuTm9kZS5wcm90b3R5cGUgPSB7XG4gIGZpcnN0Q2hpbGQ6IG51bGwsXG4gIGxhc3RDaGlsZDogbnVsbCxcbiAgcHJldmlvdXNTaWJsaW5nOiBudWxsLFxuICBuZXh0U2libGluZzogbnVsbCxcbiAgYXR0cmlidXRlczogbnVsbCxcbiAgcGFyZW50Tm9kZTogbnVsbCxcbiAgY2hpbGROb2RlczogbnVsbCxcbiAgb3duZXJEb2N1bWVudDogbnVsbCxcbiAgbm9kZVZhbHVlOiBudWxsLFxuICBuYW1lc3BhY2VVUkk6IG51bGwsXG4gIHByZWZpeDogbnVsbCxcbiAgbG9jYWxOYW1lOiBudWxsLFxuICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIGluc2VydEJlZm9yZShuZXdDaGlsZCwgcmVmQ2hpbGQpIHtcbiAgICByZXR1cm4gX2luc2VydEJlZm9yZSh0aGlzLCBuZXdDaGlsZCwgcmVmQ2hpbGQpO1xuICB9LFxuICByZXBsYWNlQ2hpbGQ6IGZ1bmN0aW9uIHJlcGxhY2VDaGlsZChuZXdDaGlsZCwgb2xkQ2hpbGQpIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShuZXdDaGlsZCwgb2xkQ2hpbGQpO1xuICAgIGlmIChvbGRDaGlsZCkge1xuICAgICAgdGhpcy5yZW1vdmVDaGlsZChvbGRDaGlsZCk7XG4gICAgfVxuICB9LFxuICByZW1vdmVDaGlsZDogZnVuY3Rpb24gcmVtb3ZlQ2hpbGQob2xkQ2hpbGQpIHtcbiAgICByZXR1cm4gX3JlbW92ZUNoaWxkKHRoaXMsIG9sZENoaWxkKTtcbiAgfSxcbiAgYXBwZW5kQ2hpbGQ6IGZ1bmN0aW9uIGFwcGVuZENoaWxkKG5ld0NoaWxkKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCBudWxsKTtcbiAgfSxcbiAgaGFzQ2hpbGROb2RlczogZnVuY3Rpb24gaGFzQ2hpbGROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdENoaWxkICE9IG51bGw7XG4gIH0sXG4gIGNsb25lTm9kZTogZnVuY3Rpb24gY2xvbmVOb2RlKGRlZXApIHtcbiAgICByZXR1cm4gX2Nsb25lTm9kZSh0aGlzLm93bmVyRG9jdW1lbnQgfHwgdGhpcywgdGhpcywgZGVlcCk7XG4gIH0sXG4gIG5vcm1hbGl6ZTogZnVuY3Rpb24gbm9ybWFsaXplKCkge1xuICAgIHZhciBjaGlsZCA9IHRoaXMuZmlyc3RDaGlsZDtcbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICBpZiAobmV4dCAmJiBuZXh0Lm5vZGVUeXBlID09IFRFWFRfTk9ERSAmJiBjaGlsZC5ub2RlVHlwZSA9PSBURVhUX05PREUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChuZXh0KTtcbiAgICAgICAgY2hpbGQuYXBwZW5kRGF0YShuZXh0LmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQubm9ybWFsaXplKCk7XG4gICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiBpc1N1cHBvcnRlZChmZWF0dXJlLCB2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHRoaXMub3duZXJEb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKGZlYXR1cmUsIHZlcnNpb24pO1xuICB9LFxuICBoYXNBdHRyaWJ1dGVzOiBmdW5jdGlvbiBoYXNBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoID4gMDtcbiAgfSxcbiAgbG9va3VwUHJlZml4OiBmdW5jdGlvbiBsb29rdXBQcmVmaXgobmFtZXNwYWNlVVJJKSB7XG4gICAgdmFyIGVsID0gdGhpcztcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgIHZhciBtYXAgPSBlbC5fbnNNYXA7XG4gICAgICBpZiAobWFwKSB7XG4gICAgICAgIGZvciAodmFyIG4gaW4gbWFwKSB7XG4gICAgICAgICAgaWYgKG1hcFtuXSA9PSBuYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWwgPSBlbC5ub2RlVHlwZSA9PSBBVFRSSUJVVEVfTk9ERSA/IGVsLm93bmVyRG9jdW1lbnQgOiBlbC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgbG9va3VwTmFtZXNwYWNlVVJJOiBmdW5jdGlvbiBsb29rdXBOYW1lc3BhY2VVUkkocHJlZml4KSB7XG4gICAgdmFyIGVsID0gdGhpcztcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgIHZhciBtYXAgPSBlbC5fbnNNYXA7XG4gICAgICBpZiAobWFwKSB7XG4gICAgICAgIGlmIChwcmVmaXggaW4gbWFwKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcFtwcmVmaXhdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbCA9IGVsLm5vZGVUeXBlID09IEFUVFJJQlVURV9OT0RFID8gZWwub3duZXJEb2N1bWVudCA6IGVsLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBpc0RlZmF1bHROYW1lc3BhY2U6IGZ1bmN0aW9uIGlzRGVmYXVsdE5hbWVzcGFjZShuYW1lc3BhY2VVUkkpIHtcbiAgICB2YXIgcHJlZml4ID0gdGhpcy5sb29rdXBQcmVmaXgobmFtZXNwYWNlVVJJKTtcbiAgICByZXR1cm4gcHJlZml4ID09IG51bGw7XG4gIH1cbn07XG5mdW5jdGlvbiBfeG1sRW5jb2RlcihjKSB7XG4gIHJldHVybiBjID09ICc8JyAmJiAnJmx0OycgfHwgYyA9PSAnPicgJiYgJyZndDsnIHx8IGMgPT0gJyYnICYmICcmYW1wOycgfHwgYyA9PSAnXCInICYmICcmcXVvdDsnIHx8ICcmIycgKyBjLmNoYXJDb2RlQXQoKSArICc7Jztcbn1cbmNvcHkoTm9kZVR5cGUsIE5vZGUpO1xuY29weShOb2RlVHlwZSwgTm9kZS5wcm90b3R5cGUpO1xuZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sobm9kZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAobm9kZSA9IG5vZGUuZmlyc3RDaGlsZCkge1xuICAgIGRvIHtcbiAgICAgIGlmIChfdmlzaXROb2RlKG5vZGUsIGNhbGxiYWNrKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChub2RlID0gbm9kZS5uZXh0U2libGluZyk7XG4gIH1cbn1cbmZ1bmN0aW9uIERvY3VtZW50KCkge31cbmZ1bmN0aW9uIF9vbkFkZEF0dHJpYnV0ZShkb2MsIGVsLCBuZXdBdHRyKSB7XG4gIGRvYyAmJiBkb2MuX2luYysrO1xuICB2YXIgbnMgPSBuZXdBdHRyLm5hbWVzcGFjZVVSSTtcbiAgaWYgKG5zID09ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycpIHtcbiAgICBlbC5fbnNNYXBbbmV3QXR0ci5wcmVmaXggPyBuZXdBdHRyLmxvY2FsTmFtZSA6ICcnXSA9IG5ld0F0dHIudmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIF9vblJlbW92ZUF0dHJpYnV0ZShkb2MsIGVsLCBuZXdBdHRyLCByZW1vdmUpIHtcbiAgZG9jICYmIGRvYy5faW5jKys7XG4gIHZhciBucyA9IG5ld0F0dHIubmFtZXNwYWNlVVJJO1xuICBpZiAobnMgPT0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJykge1xuICAgIGRlbGV0ZSBlbC5fbnNNYXBbbmV3QXR0ci5wcmVmaXggPyBuZXdBdHRyLmxvY2FsTmFtZSA6ICcnXTtcbiAgfVxufVxuZnVuY3Rpb24gX29uVXBkYXRlQ2hpbGQoZG9jLCBlbCwgbmV3Q2hpbGQpIHtcbiAgaWYgKGRvYyAmJiBkb2MuX2luYykge1xuICAgIGRvYy5faW5jKys7XG4gICAgdmFyIGNzID0gZWwuY2hpbGROb2RlcztcbiAgICBpZiAobmV3Q2hpbGQpIHtcbiAgICAgIGNzW2NzLmxlbmd0aCsrXSA9IG5ld0NoaWxkO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hpbGQgPSBlbC5maXJzdENoaWxkO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIGNzW2krK10gPSBjaGlsZDtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICAgIGNzLmxlbmd0aCA9IGk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBfcmVtb3ZlQ2hpbGQocGFyZW50Tm9kZSwgY2hpbGQpIHtcbiAgdmFyIHByZXZpb3VzID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICB2YXIgbmV4dCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICBpZiAocHJldmlvdXMpIHtcbiAgICBwcmV2aW91cy5uZXh0U2libGluZyA9IG5leHQ7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50Tm9kZS5maXJzdENoaWxkID0gbmV4dDtcbiAgfVxuICBpZiAobmV4dCkge1xuICAgIG5leHQucHJldmlvdXNTaWJsaW5nID0gcHJldmlvdXM7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50Tm9kZS5sYXN0Q2hpbGQgPSBwcmV2aW91cztcbiAgfVxuICBfb25VcGRhdGVDaGlsZChwYXJlbnROb2RlLm93bmVyRG9jdW1lbnQsIHBhcmVudE5vZGUpO1xuICByZXR1cm4gY2hpbGQ7XG59XG5mdW5jdGlvbiBfaW5zZXJ0QmVmb3JlKHBhcmVudE5vZGUsIG5ld0NoaWxkLCBuZXh0Q2hpbGQpIHtcbiAgdmFyIGNwID0gbmV3Q2hpbGQucGFyZW50Tm9kZTtcbiAgaWYgKGNwKSB7XG4gICAgY3AucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICB9XG4gIGlmIChuZXdDaGlsZC5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgIHZhciBuZXdGaXJzdCA9IG5ld0NoaWxkLmZpcnN0Q2hpbGQ7XG4gICAgaWYgKG5ld0ZpcnN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3QgPSBuZXdDaGlsZC5sYXN0Q2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgbmV3Rmlyc3QgPSBuZXdMYXN0ID0gbmV3Q2hpbGQ7XG4gIH1cbiAgdmFyIHByZSA9IG5leHRDaGlsZCA/IG5leHRDaGlsZC5wcmV2aW91c1NpYmxpbmcgOiBwYXJlbnROb2RlLmxhc3RDaGlsZDtcbiAgbmV3Rmlyc3QucHJldmlvdXNTaWJsaW5nID0gcHJlO1xuICBuZXdMYXN0Lm5leHRTaWJsaW5nID0gbmV4dENoaWxkO1xuICBpZiAocHJlKSB7XG4gICAgcHJlLm5leHRTaWJsaW5nID0gbmV3Rmlyc3Q7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50Tm9kZS5maXJzdENoaWxkID0gbmV3Rmlyc3Q7XG4gIH1cbiAgaWYgKG5leHRDaGlsZCA9PSBudWxsKSB7XG4gICAgcGFyZW50Tm9kZS5sYXN0Q2hpbGQgPSBuZXdMYXN0O1xuICB9IGVsc2Uge1xuICAgIG5leHRDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBuZXdMYXN0O1xuICB9XG4gIGRvIHtcbiAgICBuZXdGaXJzdC5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgfSB3aGlsZSAobmV3Rmlyc3QgIT09IG5ld0xhc3QgJiYgKG5ld0ZpcnN0ID0gbmV3Rmlyc3QubmV4dFNpYmxpbmcpKTtcbiAgX29uVXBkYXRlQ2hpbGQocGFyZW50Tm9kZS5vd25lckRvY3VtZW50IHx8IHBhcmVudE5vZGUsIHBhcmVudE5vZGUpO1xuICBpZiAobmV3Q2hpbGQubm9kZVR5cGUgPT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgIG5ld0NoaWxkLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZC5sYXN0Q2hpbGQgPSBudWxsO1xuICB9XG4gIHJldHVybiBuZXdDaGlsZDtcbn1cbmZ1bmN0aW9uIF9hcHBlbmRTaW5nbGVDaGlsZChwYXJlbnROb2RlLCBuZXdDaGlsZCkge1xuICB2YXIgY3AgPSBuZXdDaGlsZC5wYXJlbnROb2RlO1xuICBpZiAoY3ApIHtcbiAgICB2YXIgcHJlID0gcGFyZW50Tm9kZS5sYXN0Q2hpbGQ7XG4gICAgY3AucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICAgIHZhciBwcmUgPSBwYXJlbnROb2RlLmxhc3RDaGlsZDtcbiAgfVxuICB2YXIgcHJlID0gcGFyZW50Tm9kZS5sYXN0Q2hpbGQ7XG4gIG5ld0NoaWxkLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBwcmU7XG4gIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgaWYgKHByZSkge1xuICAgIHByZS5uZXh0U2libGluZyA9IG5ld0NoaWxkO1xuICB9IGVsc2Uge1xuICAgIHBhcmVudE5vZGUuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICB9XG4gIHBhcmVudE5vZGUubGFzdENoaWxkID0gbmV3Q2hpbGQ7XG4gIF9vblVwZGF0ZUNoaWxkKHBhcmVudE5vZGUub3duZXJEb2N1bWVudCwgcGFyZW50Tm9kZSwgbmV3Q2hpbGQpO1xuICByZXR1cm4gbmV3Q2hpbGQ7XG59XG5Eb2N1bWVudC5wcm90b3R5cGUgPSB7XG4gIG5vZGVOYW1lOiAnI2RvY3VtZW50JyxcbiAgbm9kZVR5cGU6IERPQ1VNRU5UX05PREUsXG4gIGRvY3R5cGU6IG51bGwsXG4gIGRvY3VtZW50RWxlbWVudDogbnVsbCxcbiAgX2luYzogMSxcbiAgaW5zZXJ0QmVmb3JlOiBmdW5jdGlvbiBpbnNlcnRCZWZvcmUobmV3Q2hpbGQsIHJlZkNoaWxkKSB7XG4gICAgaWYgKG5ld0NoaWxkLm5vZGVUeXBlID09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgIHZhciBjaGlsZCA9IG5ld0NoaWxkLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgdmFyIG5leHQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgdGhpcy5pbnNlcnRCZWZvcmUoY2hpbGQsIHJlZkNoaWxkKTtcbiAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgIH1cbiAgICBpZiAodGhpcy5kb2N1bWVudEVsZW1lbnQgPT0gbnVsbCAmJiBuZXdDaGlsZC5ub2RlVHlwZSA9PSBFTEVNRU5UX05PREUpIHtcbiAgICAgIHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gbmV3Q2hpbGQ7XG4gICAgfVxuICAgIHJldHVybiBfaW5zZXJ0QmVmb3JlKHRoaXMsIG5ld0NoaWxkLCByZWZDaGlsZCksIG5ld0NoaWxkLm93bmVyRG9jdW1lbnQgPSB0aGlzLCBuZXdDaGlsZDtcbiAgfSxcbiAgcmVtb3ZlQ2hpbGQ6IGZ1bmN0aW9uIHJlbW92ZUNoaWxkKG9sZENoaWxkKSB7XG4gICAgaWYgKHRoaXMuZG9jdW1lbnRFbGVtZW50ID09IG9sZENoaWxkKSB7XG4gICAgICB0aGlzLmRvY3VtZW50RWxlbWVudCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBfcmVtb3ZlQ2hpbGQodGhpcywgb2xkQ2hpbGQpO1xuICB9LFxuICBpbXBvcnROb2RlOiBmdW5jdGlvbiBpbXBvcnROb2RlKGltcG9ydGVkTm9kZSwgZGVlcCkge1xuICAgIHJldHVybiBfaW1wb3J0Tm9kZSh0aGlzLCBpbXBvcnRlZE5vZGUsIGRlZXApO1xuICB9LFxuICBnZXRFbGVtZW50QnlJZDogZnVuY3Rpb24gZ2V0RWxlbWVudEJ5SWQoaWQpIHtcbiAgICB2YXIgcnR2ID0gbnVsbDtcbiAgICBfdmlzaXROb2RlKHRoaXMuZG9jdW1lbnRFbGVtZW50LCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBpZCkge1xuICAgICAgICAgIHJ0diA9IG5vZGU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcnR2O1xuICB9LFxuICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWUpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBFbGVtZW50KCk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLm5vZGVOYW1lID0gdGFnTmFtZTtcbiAgICBub2RlLnRhZ05hbWUgPSB0YWdOYW1lO1xuICAgIG5vZGUuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuICAgIHZhciBhdHRycyA9IG5vZGUuYXR0cmlidXRlcyA9IG5ldyBOYW1lZE5vZGVNYXAoKTtcbiAgICBhdHRycy5fb3duZXJFbGVtZW50ID0gbm9kZTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlRG9jdW1lbnRGcmFnbWVudDogZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlVGV4dE5vZGU6IGZ1bmN0aW9uIGNyZWF0ZVRleHROb2RlKGRhdGEpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBUZXh0KCk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLmFwcGVuZERhdGEoZGF0YSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIGNyZWF0ZUNvbW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQoZGF0YSkge1xuICAgIHZhciBub2RlID0gbmV3IENvbW1lbnQoKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUuYXBwZW5kRGF0YShkYXRhKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlQ0RBVEFTZWN0aW9uOiBmdW5jdGlvbiBjcmVhdGVDREFUQVNlY3Rpb24oZGF0YSkge1xuICAgIHZhciBub2RlID0gbmV3IENEQVRBU2VjdGlvbigpO1xuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG4gICAgbm9kZS5hcHBlbmREYXRhKGRhdGEpO1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICBjcmVhdGVQcm9jZXNzaW5nSW5zdHJ1Y3Rpb246IGZ1bmN0aW9uIGNyZWF0ZVByb2Nlc3NpbmdJbnN0cnVjdGlvbih0YXJnZXQsIGRhdGEpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUudGFnTmFtZSA9IG5vZGUudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIG5vZGUubm9kZVZhbHVlID0gbm9kZS5kYXRhID0gZGF0YTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlQXR0cmlidXRlOiBmdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGUobmFtZSkge1xuICAgIHZhciBub2RlID0gbmV3IEF0dHIoKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUubmFtZSA9IG5hbWU7XG4gICAgbm9kZS5ub2RlTmFtZSA9IG5hbWU7XG4gICAgbm9kZS5sb2NhbE5hbWUgPSBuYW1lO1xuICAgIG5vZGUuc3BlY2lmaWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlRW50aXR5UmVmZXJlbmNlOiBmdW5jdGlvbiBjcmVhdGVFbnRpdHlSZWZlcmVuY2UobmFtZSkge1xuICAgIHZhciBub2RlID0gbmV3IEVudGl0eVJlZmVyZW5jZSgpO1xuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG4gICAgbm9kZS5ub2RlTmFtZSA9IG5hbWU7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIGNyZWF0ZUVsZW1lbnROUzogZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSkge1xuICAgIHZhciBub2RlID0gbmV3IEVsZW1lbnQoKTtcbiAgICB2YXIgcGwgPSBxdWFsaWZpZWROYW1lLnNwbGl0KCc6Jyk7XG4gICAgdmFyIGF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzID0gbmV3IE5hbWVkTm9kZU1hcCgpO1xuICAgIG5vZGUuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG4gICAgbm9kZS5ub2RlTmFtZSA9IHF1YWxpZmllZE5hbWU7XG4gICAgbm9kZS50YWdOYW1lID0gcXVhbGlmaWVkTmFtZTtcbiAgICBub2RlLm5hbWVzcGFjZVVSSSA9IG5hbWVzcGFjZVVSSTtcbiAgICBpZiAocGwubGVuZ3RoID09IDIpIHtcbiAgICAgIG5vZGUucHJlZml4ID0gcGxbMF07XG4gICAgICBub2RlLmxvY2FsTmFtZSA9IHBsWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmxvY2FsTmFtZSA9IHF1YWxpZmllZE5hbWU7XG4gICAgfVxuICAgIGF0dHJzLl9vd25lckVsZW1lbnQgPSBub2RlO1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICBjcmVhdGVBdHRyaWJ1dGVOUzogZnVuY3Rpb24gY3JlYXRlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKSB7XG4gICAgdmFyIG5vZGUgPSBuZXcgQXR0cigpO1xuICAgIHZhciBwbCA9IHF1YWxpZmllZE5hbWUuc3BsaXQoJzonKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUubm9kZU5hbWUgPSBxdWFsaWZpZWROYW1lO1xuICAgIG5vZGUubmFtZSA9IHF1YWxpZmllZE5hbWU7XG4gICAgbm9kZS5uYW1lc3BhY2VVUkkgPSBuYW1lc3BhY2VVUkk7XG4gICAgbm9kZS5zcGVjaWZpZWQgPSB0cnVlO1xuICAgIGlmIChwbC5sZW5ndGggPT0gMikge1xuICAgICAgbm9kZS5wcmVmaXggPSBwbFswXTtcbiAgICAgIG5vZGUubG9jYWxOYW1lID0gcGxbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUubG9jYWxOYW1lID0gcXVhbGlmaWVkTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn07XG5fZXh0ZW5kcyhEb2N1bWVudCwgTm9kZSk7XG5mdW5jdGlvbiBFbGVtZW50KCkge1xuICB0aGlzLl9uc01hcCA9IHt9O1xufVxuO1xuRWxlbWVudC5wcm90b3R5cGUgPSB7XG4gIG5vZGVUeXBlOiBFTEVNRU5UX05PREUsXG4gIGhhc0F0dHJpYnV0ZTogZnVuY3Rpb24gaGFzQXR0cmlidXRlKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpICE9IG51bGw7XG4gIH0sXG4gIGdldEF0dHJpYnV0ZTogZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgICB2YXIgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZShuYW1lKTtcbiAgICByZXR1cm4gYXR0ciAmJiBhdHRyLnZhbHVlIHx8ICcnO1xuICB9LFxuICBnZXRBdHRyaWJ1dGVOb2RlOiBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVOb2RlKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShuYW1lKTtcbiAgfSxcbiAgc2V0QXR0cmlidXRlOiBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgYXR0ciA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUobmFtZSk7XG4gICAgYXR0ci52YWx1ZSA9IGF0dHIubm9kZVZhbHVlID0gXCJcIiArIHZhbHVlO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlTm9kZShhdHRyKTtcbiAgfSxcbiAgcmVtb3ZlQXR0cmlidXRlOiBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobmFtZSkge1xuICAgIHZhciBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpO1xuICAgIGF0dHIgJiYgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOb2RlKGF0dHIpO1xuICB9LFxuICBhcHBlbmRDaGlsZDogZnVuY3Rpb24gYXBwZW5kQ2hpbGQobmV3Q2hpbGQpIHtcbiAgICBpZiAobmV3Q2hpbGQubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShuZXdDaGlsZCwgbnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfYXBwZW5kU2luZ2xlQ2hpbGQodGhpcywgbmV3Q2hpbGQpO1xuICAgIH1cbiAgfSxcbiAgc2V0QXR0cmlidXRlTm9kZTogZnVuY3Rpb24gc2V0QXR0cmlidXRlTm9kZShuZXdBdHRyKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcy5zZXROYW1lZEl0ZW0obmV3QXR0cik7XG4gIH0sXG4gIHNldEF0dHJpYnV0ZU5vZGVOUzogZnVuY3Rpb24gc2V0QXR0cmlidXRlTm9kZU5TKG5ld0F0dHIpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnNldE5hbWVkSXRlbU5TKG5ld0F0dHIpO1xuICB9LFxuICByZW1vdmVBdHRyaWJ1dGVOb2RlOiBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGVOb2RlKG9sZEF0dHIpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnJlbW92ZU5hbWVkSXRlbShvbGRBdHRyLm5vZGVOYW1lKTtcbiAgfSxcbiAgcmVtb3ZlQXR0cmlidXRlTlM6IGZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgdmFyIG9sZCA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKTtcbiAgICBvbGQgJiYgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOb2RlKG9sZCk7XG4gIH0sXG4gIGhhc0F0dHJpYnV0ZU5TOiBmdW5jdGlvbiBoYXNBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkgIT0gbnVsbDtcbiAgfSxcbiAgZ2V0QXR0cmlidXRlTlM6IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgdmFyIGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSk7XG4gICAgcmV0dXJuIGF0dHIgJiYgYXR0ci52YWx1ZSB8fCAnJztcbiAgfSxcbiAgc2V0QXR0cmlidXRlTlM6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgYXR0ciA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUpO1xuICAgIGF0dHIudmFsdWUgPSBhdHRyLm5vZGVWYWx1ZSA9IFwiXCIgKyB2YWx1ZTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5vZGUoYXR0cik7XG4gIH0sXG4gIGdldEF0dHJpYnV0ZU5vZGVOUzogZnVuY3Rpb24gZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW1OUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSk7XG4gIH0sXG4gIGdldEVsZW1lbnRzQnlUYWdOYW1lOiBmdW5jdGlvbiBnZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBMaXZlTm9kZUxpc3QodGhpcywgZnVuY3Rpb24gKGJhc2UpIHtcbiAgICAgIHZhciBscyA9IFtdO1xuICAgICAgX3Zpc2l0Tm9kZShiYXNlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZSAhPT0gYmFzZSAmJiBub2RlLm5vZGVUeXBlID09IEVMRU1FTlRfTk9ERSAmJiAodGFnTmFtZSA9PT0gJyonIHx8IG5vZGUudGFnTmFtZSA9PSB0YWdOYW1lKSkge1xuICAgICAgICAgIGxzLnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGxzO1xuICAgIH0pO1xuICB9LFxuICBnZXRFbGVtZW50c0J5VGFnTmFtZU5TOiBmdW5jdGlvbiBnZXRFbGVtZW50c0J5VGFnTmFtZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBMaXZlTm9kZUxpc3QodGhpcywgZnVuY3Rpb24gKGJhc2UpIHtcbiAgICAgIHZhciBscyA9IFtdO1xuICAgICAgX3Zpc2l0Tm9kZShiYXNlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZSAhPT0gYmFzZSAmJiBub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUgJiYgKG5hbWVzcGFjZVVSSSA9PT0gJyonIHx8IG5vZGUubmFtZXNwYWNlVVJJID09PSBuYW1lc3BhY2VVUkkpICYmIChsb2NhbE5hbWUgPT09ICcqJyB8fCBub2RlLmxvY2FsTmFtZSA9PSBsb2NhbE5hbWUpKSB7XG4gICAgICAgICAgbHMucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbHM7XG4gICAgfSk7XG4gIH1cbn07XG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBFbGVtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZTtcbkRvY3VtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZU5TID0gRWxlbWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWVOUztcbl9leHRlbmRzKEVsZW1lbnQsIE5vZGUpO1xuZnVuY3Rpb24gQXR0cigpIHt9XG47XG5BdHRyLnByb3RvdHlwZS5ub2RlVHlwZSA9IEFUVFJJQlVURV9OT0RFO1xuX2V4dGVuZHMoQXR0ciwgTm9kZSk7XG5mdW5jdGlvbiBDaGFyYWN0ZXJEYXRhKCkge31cbjtcbkNoYXJhY3RlckRhdGEucHJvdG90eXBlID0ge1xuICBkYXRhOiAnJyxcbiAgc3Vic3RyaW5nRGF0YTogZnVuY3Rpb24gc3Vic3RyaW5nRGF0YShvZmZzZXQsIGNvdW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zdWJzdHJpbmcob2Zmc2V0LCBvZmZzZXQgKyBjb3VudCk7XG4gIH0sXG4gIGFwcGVuZERhdGE6IGZ1bmN0aW9uIGFwcGVuZERhdGEodGV4dCkge1xuICAgIHRleHQgPSB0aGlzLmRhdGEgKyB0ZXh0O1xuICAgIHRoaXMubm9kZVZhbHVlID0gdGhpcy5kYXRhID0gdGV4dDtcbiAgICB0aGlzLmxlbmd0aCA9IHRleHQubGVuZ3RoO1xuICB9LFxuICBpbnNlcnREYXRhOiBmdW5jdGlvbiBpbnNlcnREYXRhKG9mZnNldCwgdGV4dCkge1xuICAgIHRoaXMucmVwbGFjZURhdGEob2Zmc2V0LCAwLCB0ZXh0KTtcbiAgfSxcbiAgYXBwZW5kQ2hpbGQ6IGZ1bmN0aW9uIGFwcGVuZENoaWxkKG5ld0NoaWxkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKEV4Y2VwdGlvbk1lc3NhZ2VbSElFUkFSQ0hZX1JFUVVFU1RfRVJSXSk7XG4gIH0sXG4gIGRlbGV0ZURhdGE6IGZ1bmN0aW9uIGRlbGV0ZURhdGEob2Zmc2V0LCBjb3VudCkge1xuICAgIHRoaXMucmVwbGFjZURhdGEob2Zmc2V0LCBjb3VudCwgXCJcIik7XG4gIH0sXG4gIHJlcGxhY2VEYXRhOiBmdW5jdGlvbiByZXBsYWNlRGF0YShvZmZzZXQsIGNvdW50LCB0ZXh0KSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5kYXRhLnN1YnN0cmluZygwLCBvZmZzZXQpO1xuICAgIHZhciBlbmQgPSB0aGlzLmRhdGEuc3Vic3RyaW5nKG9mZnNldCArIGNvdW50KTtcbiAgICB0ZXh0ID0gc3RhcnQgKyB0ZXh0ICsgZW5kO1xuICAgIHRoaXMubm9kZVZhbHVlID0gdGhpcy5kYXRhID0gdGV4dDtcbiAgICB0aGlzLmxlbmd0aCA9IHRleHQubGVuZ3RoO1xuICB9XG59O1xuX2V4dGVuZHMoQ2hhcmFjdGVyRGF0YSwgTm9kZSk7XG5mdW5jdGlvbiBUZXh0KCkge31cbjtcblRleHQucHJvdG90eXBlID0ge1xuICBub2RlTmFtZTogXCIjdGV4dFwiLFxuICBub2RlVHlwZTogVEVYVF9OT0RFLFxuICBzcGxpdFRleHQ6IGZ1bmN0aW9uIHNwbGl0VGV4dChvZmZzZXQpIHtcbiAgICB2YXIgdGV4dCA9IHRoaXMuZGF0YTtcbiAgICB2YXIgbmV3VGV4dCA9IHRleHQuc3Vic3RyaW5nKG9mZnNldCk7XG4gICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIG9mZnNldCk7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5ub2RlVmFsdWUgPSB0ZXh0O1xuICAgIHRoaXMubGVuZ3RoID0gdGV4dC5sZW5ndGg7XG4gICAgdmFyIG5ld05vZGUgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3VGV4dCk7XG4gICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCB0aGlzLm5leHRTaWJsaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld05vZGU7XG4gIH1cbn07XG5fZXh0ZW5kcyhUZXh0LCBDaGFyYWN0ZXJEYXRhKTtcbmZ1bmN0aW9uIENvbW1lbnQoKSB7fVxuO1xuQ29tbWVudC5wcm90b3R5cGUgPSB7XG4gIG5vZGVOYW1lOiBcIiNjb21tZW50XCIsXG4gIG5vZGVUeXBlOiBDT01NRU5UX05PREVcbn07XG5fZXh0ZW5kcyhDb21tZW50LCBDaGFyYWN0ZXJEYXRhKTtcbmZ1bmN0aW9uIENEQVRBU2VjdGlvbigpIHt9XG47XG5DREFUQVNlY3Rpb24ucHJvdG90eXBlID0ge1xuICBub2RlTmFtZTogXCIjY2RhdGEtc2VjdGlvblwiLFxuICBub2RlVHlwZTogQ0RBVEFfU0VDVElPTl9OT0RFXG59O1xuX2V4dGVuZHMoQ0RBVEFTZWN0aW9uLCBDaGFyYWN0ZXJEYXRhKTtcbmZ1bmN0aW9uIERvY3VtZW50VHlwZSgpIHt9XG47XG5Eb2N1bWVudFR5cGUucHJvdG90eXBlLm5vZGVUeXBlID0gRE9DVU1FTlRfVFlQRV9OT0RFO1xuX2V4dGVuZHMoRG9jdW1lbnRUeXBlLCBOb2RlKTtcbmZ1bmN0aW9uIE5vdGF0aW9uKCkge31cbjtcbk5vdGF0aW9uLnByb3RvdHlwZS5ub2RlVHlwZSA9IE5PVEFUSU9OX05PREU7XG5fZXh0ZW5kcyhOb3RhdGlvbiwgTm9kZSk7XG5mdW5jdGlvbiBFbnRpdHkoKSB7fVxuO1xuRW50aXR5LnByb3RvdHlwZS5ub2RlVHlwZSA9IEVOVElUWV9OT0RFO1xuX2V4dGVuZHMoRW50aXR5LCBOb2RlKTtcbmZ1bmN0aW9uIEVudGl0eVJlZmVyZW5jZSgpIHt9XG47XG5FbnRpdHlSZWZlcmVuY2UucHJvdG90eXBlLm5vZGVUeXBlID0gRU5USVRZX1JFRkVSRU5DRV9OT0RFO1xuX2V4dGVuZHMoRW50aXR5UmVmZXJlbmNlLCBOb2RlKTtcbmZ1bmN0aW9uIERvY3VtZW50RnJhZ21lbnQoKSB7fVxuO1xuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUubm9kZU5hbWUgPSBcIiNkb2N1bWVudC1mcmFnbWVudFwiO1xuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUubm9kZVR5cGUgPSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFO1xuX2V4dGVuZHMoRG9jdW1lbnRGcmFnbWVudCwgTm9kZSk7XG5mdW5jdGlvbiBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oKSB7fVxuUHJvY2Vzc2luZ0luc3RydWN0aW9uLnByb3RvdHlwZS5ub2RlVHlwZSA9IFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERTtcbl9leHRlbmRzKFByb2Nlc3NpbmdJbnN0cnVjdGlvbiwgTm9kZSk7XG5mdW5jdGlvbiBYTUxTZXJpYWxpemVyKCkge31cblhNTFNlcmlhbGl6ZXIucHJvdG90eXBlLnNlcmlhbGl6ZVRvU3RyaW5nID0gZnVuY3Rpb24gKG5vZGUsIGlzSHRtbCwgbm9kZUZpbHRlcikge1xuICByZXR1cm4gbm9kZVNlcmlhbGl6ZVRvU3RyaW5nLmNhbGwobm9kZSwgaXNIdG1sLCBub2RlRmlsdGVyKTtcbn07XG5Ob2RlLnByb3RvdHlwZS50b1N0cmluZyA9IG5vZGVTZXJpYWxpemVUb1N0cmluZztcbmZ1bmN0aW9uIG5vZGVTZXJpYWxpemVUb1N0cmluZyhpc0h0bWwsIG5vZGVGaWx0ZXIpIHtcbiAgdmFyIGJ1ZiA9IFtdO1xuICB2YXIgcmVmTm9kZSA9IHRoaXMubm9kZVR5cGUgPT0gOSAmJiB0aGlzLmRvY3VtZW50RWxlbWVudCB8fCB0aGlzO1xuICB2YXIgcHJlZml4ID0gcmVmTm9kZS5wcmVmaXg7XG4gIHZhciB1cmkgPSByZWZOb2RlLm5hbWVzcGFjZVVSSTtcbiAgaWYgKHVyaSAmJiBwcmVmaXggPT0gbnVsbCkge1xuICAgIHZhciBwcmVmaXggPSByZWZOb2RlLmxvb2t1cFByZWZpeCh1cmkpO1xuICAgIGlmIChwcmVmaXggPT0gbnVsbCkge1xuICAgICAgdmFyIHZpc2libGVOYW1lc3BhY2VzID0gW3tcbiAgICAgICAgbmFtZXNwYWNlOiB1cmksXG4gICAgICAgIHByZWZpeDogbnVsbFxuICAgICAgfV07XG4gICAgfVxuICB9XG4gIHNlcmlhbGl6ZVRvU3RyaW5nKHRoaXMsIGJ1ZiwgaXNIdG1sLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcyk7XG4gIHJldHVybiBidWYuam9pbignJyk7XG59XG5mdW5jdGlvbiBuZWVkTmFtZXNwYWNlRGVmaW5lKG5vZGUsIGlzSFRNTCwgdmlzaWJsZU5hbWVzcGFjZXMpIHtcbiAgdmFyIHByZWZpeCA9IG5vZGUucHJlZml4IHx8ICcnO1xuICB2YXIgdXJpID0gbm9kZS5uYW1lc3BhY2VVUkk7XG4gIGlmICghcHJlZml4ICYmICF1cmkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHByZWZpeCA9PT0gXCJ4bWxcIiAmJiB1cmkgPT09IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIgfHwgdXJpID09ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGkgPSB2aXNpYmxlTmFtZXNwYWNlcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgbnMgPSB2aXNpYmxlTmFtZXNwYWNlc1tpXTtcbiAgICBpZiAobnMucHJlZml4ID09IHByZWZpeCkge1xuICAgICAgcmV0dXJuIG5zLm5hbWVzcGFjZSAhPSB1cmk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gc2VyaWFsaXplVG9TdHJpbmcobm9kZSwgYnVmLCBpc0hUTUwsIG5vZGVGaWx0ZXIsIHZpc2libGVOYW1lc3BhY2VzKSB7XG4gIGlmIChub2RlRmlsdGVyKSB7XG4gICAgbm9kZSA9IG5vZGVGaWx0ZXIobm9kZSk7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PSAnc3RyaW5nJykge1xuICAgICAgICBidWYucHVzaChub2RlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuICAgIGNhc2UgRUxFTUVOVF9OT0RFOlxuICAgICAgaWYgKCF2aXNpYmxlTmFtZXNwYWNlcykgdmlzaWJsZU5hbWVzcGFjZXMgPSBbXTtcbiAgICAgIHZhciBzdGFydFZpc2libGVOYW1lc3BhY2VzID0gdmlzaWJsZU5hbWVzcGFjZXMubGVuZ3RoO1xuICAgICAgdmFyIGF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzO1xuICAgICAgdmFyIGxlbiA9IGF0dHJzLmxlbmd0aDtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgIHZhciBub2RlTmFtZSA9IG5vZGUudGFnTmFtZTtcbiAgICAgIGlzSFRNTCA9IGh0bWxucyA9PT0gbm9kZS5uYW1lc3BhY2VVUkkgfHwgaXNIVE1MO1xuICAgICAgYnVmLnB1c2goJzwnLCBub2RlTmFtZSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBhdHRyID0gYXR0cnMuaXRlbShpKTtcbiAgICAgICAgaWYgKGF0dHIucHJlZml4ID09ICd4bWxucycpIHtcbiAgICAgICAgICB2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHtcbiAgICAgICAgICAgIHByZWZpeDogYXR0ci5sb2NhbE5hbWUsXG4gICAgICAgICAgICBuYW1lc3BhY2U6IGF0dHIudmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5vZGVOYW1lID09ICd4bWxucycpIHtcbiAgICAgICAgICB2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHtcbiAgICAgICAgICAgIHByZWZpeDogJycsXG4gICAgICAgICAgICBuYW1lc3BhY2U6IGF0dHIudmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgYXR0ciA9IGF0dHJzLml0ZW0oaSk7XG4gICAgICAgIGlmIChuZWVkTmFtZXNwYWNlRGVmaW5lKGF0dHIsIGlzSFRNTCwgdmlzaWJsZU5hbWVzcGFjZXMpKSB7XG4gICAgICAgICAgdmFyIHByZWZpeCA9IGF0dHIucHJlZml4IHx8ICcnO1xuICAgICAgICAgIHZhciB1cmkgPSBhdHRyLm5hbWVzcGFjZVVSSTtcbiAgICAgICAgICB2YXIgbnMgPSBwcmVmaXggPyAnIHhtbG5zOicgKyBwcmVmaXggOiBcIiB4bWxuc1wiO1xuICAgICAgICAgIGJ1Zi5wdXNoKG5zLCAnPVwiJywgdXJpLCAnXCInKTtcbiAgICAgICAgICB2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHtcbiAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgbmFtZXNwYWNlOiB1cmlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzZXJpYWxpemVUb1N0cmluZyhhdHRyLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWROYW1lc3BhY2VEZWZpbmUobm9kZSwgaXNIVE1MLCB2aXNpYmxlTmFtZXNwYWNlcykpIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IG5vZGUucHJlZml4IHx8ICcnO1xuICAgICAgICB2YXIgdXJpID0gbm9kZS5uYW1lc3BhY2VVUkk7XG4gICAgICAgIHZhciBucyA9IHByZWZpeCA/ICcgeG1sbnM6JyArIHByZWZpeCA6IFwiIHhtbG5zXCI7XG4gICAgICAgIGJ1Zi5wdXNoKG5zLCAnPVwiJywgdXJpLCAnXCInKTtcbiAgICAgICAgdmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7XG4gICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgbmFtZXNwYWNlOiB1cmlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hpbGQgfHwgaXNIVE1MICYmICEvXig/Om1ldGF8bGlua3xpbWd8YnJ8aHJ8aW5wdXQpJC9pLnRlc3Qobm9kZU5hbWUpKSB7XG4gICAgICAgIGJ1Zi5wdXNoKCc+Jyk7XG4gICAgICAgIGlmIChpc0hUTUwgJiYgL15zY3JpcHQkL2kudGVzdChub2RlTmFtZSkpIHtcbiAgICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5kYXRhKSB7XG4gICAgICAgICAgICAgIGJ1Zi5wdXNoKGNoaWxkLmRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VyaWFsaXplVG9TdHJpbmcoY2hpbGQsIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgIHNlcmlhbGl6ZVRvU3RyaW5nKGNoaWxkLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMpO1xuICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnVmLnB1c2goJzwvJywgbm9kZU5hbWUsICc+Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidWYucHVzaCgnLz4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICBjYXNlIERPQ1VNRU5UX05PREU6XG4gICAgY2FzZSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlxuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIHNlcmlhbGl6ZVRvU3RyaW5nKGNoaWxkLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgQVRUUklCVVRFX05PREU6XG4gICAgICByZXR1cm4gYnVmLnB1c2goJyAnLCBub2RlLm5hbWUsICc9XCInLCBub2RlLnZhbHVlLnJlcGxhY2UoL1s8JlwiXS9nLCBfeG1sRW5jb2RlciksICdcIicpO1xuICAgIGNhc2UgVEVYVF9OT0RFOlxuICAgICAgcmV0dXJuIGJ1Zi5wdXNoKG5vZGUuZGF0YS5yZXBsYWNlKC9bPCZdL2csIF94bWxFbmNvZGVyKSk7XG4gICAgY2FzZSBDREFUQV9TRUNUSU9OX05PREU6XG4gICAgICByZXR1cm4gYnVmLnB1c2goJzwhW0NEQVRBWycsIG5vZGUuZGF0YSwgJ11dPicpO1xuICAgIGNhc2UgQ09NTUVOVF9OT0RFOlxuICAgICAgcmV0dXJuIGJ1Zi5wdXNoKFwiPCEtLVwiLCBub2RlLmRhdGEsIFwiLS0+XCIpO1xuICAgIGNhc2UgRE9DVU1FTlRfVFlQRV9OT0RFOlxuICAgICAgdmFyIHB1YmlkID0gbm9kZS5wdWJsaWNJZDtcbiAgICAgIHZhciBzeXNpZCA9IG5vZGUuc3lzdGVtSWQ7XG4gICAgICBidWYucHVzaCgnPCFET0NUWVBFICcsIG5vZGUubmFtZSk7XG4gICAgICBpZiAocHViaWQpIHtcbiAgICAgICAgYnVmLnB1c2goJyBQVUJMSUMgXCInLCBwdWJpZCk7XG4gICAgICAgIGlmIChzeXNpZCAmJiBzeXNpZCAhPSAnLicpIHtcbiAgICAgICAgICBidWYucHVzaCgnXCIgXCInLCBzeXNpZCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVmLnB1c2goJ1wiPicpO1xuICAgICAgfSBlbHNlIGlmIChzeXNpZCAmJiBzeXNpZCAhPSAnLicpIHtcbiAgICAgICAgYnVmLnB1c2goJyBTWVNURU0gXCInLCBzeXNpZCwgJ1wiPicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHN1YiA9IG5vZGUuaW50ZXJuYWxTdWJzZXQ7XG4gICAgICAgIGlmIChzdWIpIHtcbiAgICAgICAgICBidWYucHVzaChcIiBbXCIsIHN1YiwgXCJdXCIpO1xuICAgICAgICB9XG4gICAgICAgIGJ1Zi5wdXNoKFwiPlwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERTpcbiAgICAgIHJldHVybiBidWYucHVzaChcIjw/XCIsIG5vZGUudGFyZ2V0LCBcIiBcIiwgbm9kZS5kYXRhLCBcIj8+XCIpO1xuICAgIGNhc2UgRU5USVRZX1JFRkVSRU5DRV9OT0RFOlxuICAgICAgcmV0dXJuIGJ1Zi5wdXNoKCcmJywgbm9kZS5ub2RlTmFtZSwgJzsnKTtcbiAgICBkZWZhdWx0OlxuICAgICAgYnVmLnB1c2goJz8/Jywgbm9kZS5ub2RlTmFtZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIF9pbXBvcnROb2RlKGRvYywgbm9kZSwgZGVlcCkge1xuICB2YXIgbm9kZTI7XG4gIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuICAgIGNhc2UgRUxFTUVOVF9OT0RFOlxuICAgICAgbm9kZTIgPSBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICBub2RlMi5vd25lckRvY3VtZW50ID0gZG9jO1xuICAgIGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQVRUUklCVVRFX05PREU6XG4gICAgICBkZWVwID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGlmICghbm9kZTIpIHtcbiAgICBub2RlMiA9IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiAgfVxuICBub2RlMi5vd25lckRvY3VtZW50ID0gZG9jO1xuICBub2RlMi5wYXJlbnROb2RlID0gbnVsbDtcbiAgaWYgKGRlZXApIHtcbiAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBub2RlMi5hcHBlbmRDaGlsZChfaW1wb3J0Tm9kZShkb2MsIGNoaWxkLCBkZWVwKSk7XG4gICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbm9kZTI7XG59XG5mdW5jdGlvbiBfY2xvbmVOb2RlKGRvYywgbm9kZSwgZGVlcCkge1xuICB2YXIgbm9kZTIgPSBuZXcgbm9kZS5jb25zdHJ1Y3RvcigpO1xuICBmb3IgKHZhciBuIGluIG5vZGUpIHtcbiAgICB2YXIgdiA9IG5vZGVbbl07XG4gICAgaWYgKF90eXBlb2YodikgIT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh2ICE9IG5vZGUyW25dKSB7XG4gICAgICAgIG5vZGUyW25dID0gdjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKG5vZGUuY2hpbGROb2Rlcykge1xuICAgIG5vZGUyLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcbiAgfVxuICBub2RlMi5vd25lckRvY3VtZW50ID0gZG9jO1xuICBzd2l0Y2ggKG5vZGUyLm5vZGVUeXBlKSB7XG4gICAgY2FzZSBFTEVNRU5UX05PREU6XG4gICAgICB2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXM7XG4gICAgICB2YXIgYXR0cnMyID0gbm9kZTIuYXR0cmlidXRlcyA9IG5ldyBOYW1lZE5vZGVNYXAoKTtcbiAgICAgIHZhciBsZW4gPSBhdHRycy5sZW5ndGg7XG4gICAgICBhdHRyczIuX293bmVyRWxlbWVudCA9IG5vZGUyO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBub2RlMi5zZXRBdHRyaWJ1dGVOb2RlKF9jbG9uZU5vZGUoZG9jLCBhdHRycy5pdGVtKGkpLCB0cnVlKSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICAgIDtcbiAgICBjYXNlIEFUVFJJQlVURV9OT0RFOlxuICAgICAgZGVlcCA9IHRydWU7XG4gIH1cbiAgaWYgKGRlZXApIHtcbiAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBub2RlMi5hcHBlbmRDaGlsZChfY2xvbmVOb2RlKGRvYywgY2hpbGQsIGRlZXApKTtcbiAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiBub2RlMjtcbn1cbmZ1bmN0aW9uIF9fc2V0X18ob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG59XG50cnkge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gICAgdmFyIGdldFRleHRDb250ZW50ID0gZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQobm9kZSkge1xuICAgICAgc3dpdGNoIChub2RlLm5vZGVUeXBlKSB7XG4gICAgICAgIGNhc2UgRUxFTUVOVF9OT0RFOlxuICAgICAgICBjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG4gICAgICAgICAgdmFyIGJ1ZiA9IFtdO1xuICAgICAgICAgIG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSA3ICYmIG5vZGUubm9kZVR5cGUgIT09IDgpIHtcbiAgICAgICAgICAgICAgYnVmLnB1c2goZ2V0VGV4dENvbnRlbnQobm9kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBidWYuam9pbignJyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG5vZGUubm9kZVZhbHVlO1xuICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExpdmVOb2RlTGlzdC5wcm90b3R5cGUsICdsZW5ndGgnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgX3VwZGF0ZUxpdmVMaXN0KHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcy4kJGxlbmd0aDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsICd0ZXh0Q29udGVudCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gZ2V0VGV4dENvbnRlbnQodGhpcyk7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoZGF0YSkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMubm9kZVR5cGUpIHtcbiAgICAgICAgICBjYXNlIEVMRU1FTlRfTk9ERTpcbiAgICAgICAgICBjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhIHx8IFN0cmluZyhkYXRhKSkge1xuICAgICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSBkYXRhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgX19zZXRfXyA9IGZ1bmN0aW9uIF9fc2V0X18ob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gICAgICBvYmplY3RbJyQkJyArIGtleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG59IGNhdGNoIChlKSB7fVxuZXhwb3J0cy5ET01JbXBsZW1lbnRhdGlvbiA9IERPTUltcGxlbWVudGF0aW9uO1xuZXhwb3J0cy5YTUxTZXJpYWxpemVyID0gWE1MU2VyaWFsaXplcjtcblxufSx7fV0sNjI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuZW50aXR5TWFwID0ge1xuICBsdDogJzwnLFxuICBndDogJz4nLFxuICBhbXA6ICcmJyxcbiAgcXVvdDogJ1wiJyxcbiAgYXBvczogXCInXCIsXG4gIEFncmF2ZTogXCLDgFwiLFxuICBBYWN1dGU6IFwiw4FcIixcbiAgQWNpcmM6IFwiw4JcIixcbiAgQXRpbGRlOiBcIsODXCIsXG4gIEF1bWw6IFwiw4RcIixcbiAgQXJpbmc6IFwiw4VcIixcbiAgQUVsaWc6IFwiw4ZcIixcbiAgQ2NlZGlsOiBcIsOHXCIsXG4gIEVncmF2ZTogXCLDiFwiLFxuICBFYWN1dGU6IFwiw4lcIixcbiAgRWNpcmM6IFwiw4pcIixcbiAgRXVtbDogXCLDi1wiLFxuICBJZ3JhdmU6IFwiw4xcIixcbiAgSWFjdXRlOiBcIsONXCIsXG4gIEljaXJjOiBcIsOOXCIsXG4gIEl1bWw6IFwiw49cIixcbiAgRVRIOiBcIsOQXCIsXG4gIE50aWxkZTogXCLDkVwiLFxuICBPZ3JhdmU6IFwiw5JcIixcbiAgT2FjdXRlOiBcIsOTXCIsXG4gIE9jaXJjOiBcIsOUXCIsXG4gIE90aWxkZTogXCLDlVwiLFxuICBPdW1sOiBcIsOWXCIsXG4gIE9zbGFzaDogXCLDmFwiLFxuICBVZ3JhdmU6IFwiw5lcIixcbiAgVWFjdXRlOiBcIsOaXCIsXG4gIFVjaXJjOiBcIsObXCIsXG4gIFV1bWw6IFwiw5xcIixcbiAgWWFjdXRlOiBcIsOdXCIsXG4gIFRIT1JOOiBcIsOeXCIsXG4gIHN6bGlnOiBcIsOfXCIsXG4gIGFncmF2ZTogXCLDoFwiLFxuICBhYWN1dGU6IFwiw6FcIixcbiAgYWNpcmM6IFwiw6JcIixcbiAgYXRpbGRlOiBcIsOjXCIsXG4gIGF1bWw6IFwiw6RcIixcbiAgYXJpbmc6IFwiw6VcIixcbiAgYWVsaWc6IFwiw6ZcIixcbiAgY2NlZGlsOiBcIsOnXCIsXG4gIGVncmF2ZTogXCLDqFwiLFxuICBlYWN1dGU6IFwiw6lcIixcbiAgZWNpcmM6IFwiw6pcIixcbiAgZXVtbDogXCLDq1wiLFxuICBpZ3JhdmU6IFwiw6xcIixcbiAgaWFjdXRlOiBcIsOtXCIsXG4gIGljaXJjOiBcIsOuXCIsXG4gIGl1bWw6IFwiw69cIixcbiAgZXRoOiBcIsOwXCIsXG4gIG50aWxkZTogXCLDsVwiLFxuICBvZ3JhdmU6IFwiw7JcIixcbiAgb2FjdXRlOiBcIsOzXCIsXG4gIG9jaXJjOiBcIsO0XCIsXG4gIG90aWxkZTogXCLDtVwiLFxuICBvdW1sOiBcIsO2XCIsXG4gIG9zbGFzaDogXCLDuFwiLFxuICB1Z3JhdmU6IFwiw7lcIixcbiAgdWFjdXRlOiBcIsO6XCIsXG4gIHVjaXJjOiBcIsO7XCIsXG4gIHV1bWw6IFwiw7xcIixcbiAgeWFjdXRlOiBcIsO9XCIsXG4gIHRob3JuOiBcIsO+XCIsXG4gIHl1bWw6IFwiw79cIixcbiAgbmJzcDogXCIgXCIsXG4gIGlleGNsOiBcIsKhXCIsXG4gIGNlbnQ6IFwiwqJcIixcbiAgcG91bmQ6IFwiwqNcIixcbiAgY3VycmVuOiBcIsKkXCIsXG4gIHllbjogXCLCpVwiLFxuICBicnZiYXI6IFwiwqZcIixcbiAgc2VjdDogXCLCp1wiLFxuICB1bWw6IFwiwqhcIixcbiAgY29weTogXCLCqVwiLFxuICBvcmRmOiBcIsKqXCIsXG4gIGxhcXVvOiBcIsKrXCIsXG4gIG5vdDogXCLCrFwiLFxuICBzaHk6IFwiwq3CrVwiLFxuICByZWc6IFwiwq5cIixcbiAgbWFjcjogXCLCr1wiLFxuICBkZWc6IFwiwrBcIixcbiAgcGx1c21uOiBcIsKxXCIsXG4gIHN1cDI6IFwiwrJcIixcbiAgc3VwMzogXCLCs1wiLFxuICBhY3V0ZTogXCLCtFwiLFxuICBtaWNybzogXCLCtVwiLFxuICBwYXJhOiBcIsK2XCIsXG4gIG1pZGRvdDogXCLCt1wiLFxuICBjZWRpbDogXCLCuFwiLFxuICBzdXAxOiBcIsK5XCIsXG4gIG9yZG06IFwiwrpcIixcbiAgcmFxdW86IFwiwrtcIixcbiAgZnJhYzE0OiBcIsK8XCIsXG4gIGZyYWMxMjogXCLCvVwiLFxuICBmcmFjMzQ6IFwiwr5cIixcbiAgaXF1ZXN0OiBcIsK/XCIsXG4gIHRpbWVzOiBcIsOXXCIsXG4gIGRpdmlkZTogXCLDt1wiLFxuICBmb3JhbGw6IFwi4oiAXCIsXG4gIHBhcnQ6IFwi4oiCXCIsXG4gIGV4aXN0OiBcIuKIg1wiLFxuICBlbXB0eTogXCLiiIVcIixcbiAgbmFibGE6IFwi4oiHXCIsXG4gIGlzaW46IFwi4oiIXCIsXG4gIG5vdGluOiBcIuKIiVwiLFxuICBuaTogXCLiiItcIixcbiAgcHJvZDogXCLiiI9cIixcbiAgc3VtOiBcIuKIkVwiLFxuICBtaW51czogXCLiiJJcIixcbiAgbG93YXN0OiBcIuKIl1wiLFxuICByYWRpYzogXCLiiJpcIixcbiAgcHJvcDogXCLiiJ1cIixcbiAgaW5maW46IFwi4oieXCIsXG4gIGFuZzogXCLiiKBcIixcbiAgYW5kOiBcIuKIp1wiLFxuICBvcjogXCLiiKhcIixcbiAgY2FwOiBcIuKIqVwiLFxuICBjdXA6IFwi4oiqXCIsXG4gICdpbnQnOiBcIuKIq1wiLFxuICB0aGVyZTQ6IFwi4oi0XCIsXG4gIHNpbTogXCLiiLxcIixcbiAgY29uZzogXCLiiYVcIixcbiAgYXN5bXA6IFwi4omIXCIsXG4gIG5lOiBcIuKJoFwiLFxuICBlcXVpdjogXCLiiaFcIixcbiAgbGU6IFwi4omkXCIsXG4gIGdlOiBcIuKJpVwiLFxuICBzdWI6IFwi4oqCXCIsXG4gIHN1cDogXCLiioNcIixcbiAgbnN1YjogXCLiioRcIixcbiAgc3ViZTogXCLiioZcIixcbiAgc3VwZTogXCLiiodcIixcbiAgb3BsdXM6IFwi4oqVXCIsXG4gIG90aW1lczogXCLiipdcIixcbiAgcGVycDogXCLiiqVcIixcbiAgc2RvdDogXCLii4VcIixcbiAgQWxwaGE6IFwizpFcIixcbiAgQmV0YTogXCLOklwiLFxuICBHYW1tYTogXCLOk1wiLFxuICBEZWx0YTogXCLOlFwiLFxuICBFcHNpbG9uOiBcIs6VXCIsXG4gIFpldGE6IFwizpZcIixcbiAgRXRhOiBcIs6XXCIsXG4gIFRoZXRhOiBcIs6YXCIsXG4gIElvdGE6IFwizplcIixcbiAgS2FwcGE6IFwizppcIixcbiAgTGFtYmRhOiBcIs6bXCIsXG4gIE11OiBcIs6cXCIsXG4gIE51OiBcIs6dXCIsXG4gIFhpOiBcIs6eXCIsXG4gIE9taWNyb246IFwizp9cIixcbiAgUGk6IFwizqBcIixcbiAgUmhvOiBcIs6hXCIsXG4gIFNpZ21hOiBcIs6jXCIsXG4gIFRhdTogXCLOpFwiLFxuICBVcHNpbG9uOiBcIs6lXCIsXG4gIFBoaTogXCLOplwiLFxuICBDaGk6IFwizqdcIixcbiAgUHNpOiBcIs6oXCIsXG4gIE9tZWdhOiBcIs6pXCIsXG4gIGFscGhhOiBcIs6xXCIsXG4gIGJldGE6IFwizrJcIixcbiAgZ2FtbWE6IFwizrNcIixcbiAgZGVsdGE6IFwizrRcIixcbiAgZXBzaWxvbjogXCLOtVwiLFxuICB6ZXRhOiBcIs62XCIsXG4gIGV0YTogXCLOt1wiLFxuICB0aGV0YTogXCLOuFwiLFxuICBpb3RhOiBcIs65XCIsXG4gIGthcHBhOiBcIs66XCIsXG4gIGxhbWJkYTogXCLOu1wiLFxuICBtdTogXCLOvFwiLFxuICBudTogXCLOvVwiLFxuICB4aTogXCLOvlwiLFxuICBvbWljcm9uOiBcIs6/XCIsXG4gIHBpOiBcIs+AXCIsXG4gIHJobzogXCLPgVwiLFxuICBzaWdtYWY6IFwiz4JcIixcbiAgc2lnbWE6IFwiz4NcIixcbiAgdGF1OiBcIs+EXCIsXG4gIHVwc2lsb246IFwiz4VcIixcbiAgcGhpOiBcIs+GXCIsXG4gIGNoaTogXCLPh1wiLFxuICBwc2k6IFwiz4hcIixcbiAgb21lZ2E6IFwiz4lcIixcbiAgdGhldGFzeW06IFwiz5FcIixcbiAgdXBzaWg6IFwiz5JcIixcbiAgcGl2OiBcIs+WXCIsXG4gIE9FbGlnOiBcIsWSXCIsXG4gIG9lbGlnOiBcIsWTXCIsXG4gIFNjYXJvbjogXCLFoFwiLFxuICBzY2Fyb246IFwixaFcIixcbiAgWXVtbDogXCLFuFwiLFxuICBmbm9mOiBcIsaSXCIsXG4gIGNpcmM6IFwiy4ZcIixcbiAgdGlsZGU6IFwiy5xcIixcbiAgZW5zcDogXCLigIJcIixcbiAgZW1zcDogXCLigINcIixcbiAgdGhpbnNwOiBcIuKAiVwiLFxuICB6d25qOiBcIuKAjFwiLFxuICB6d2o6IFwi4oCNXCIsXG4gIGxybTogXCLigI5cIixcbiAgcmxtOiBcIuKAj1wiLFxuICBuZGFzaDogXCLigJNcIixcbiAgbWRhc2g6IFwi4oCUXCIsXG4gIGxzcXVvOiBcIuKAmFwiLFxuICByc3F1bzogXCLigJlcIixcbiAgc2JxdW86IFwi4oCaXCIsXG4gIGxkcXVvOiBcIuKAnFwiLFxuICByZHF1bzogXCLigJ1cIixcbiAgYmRxdW86IFwi4oCeXCIsXG4gIGRhZ2dlcjogXCLigKBcIixcbiAgRGFnZ2VyOiBcIuKAoVwiLFxuICBidWxsOiBcIuKAolwiLFxuICBoZWxsaXA6IFwi4oCmXCIsXG4gIHBlcm1pbDogXCLigLBcIixcbiAgcHJpbWU6IFwi4oCyXCIsXG4gIFByaW1lOiBcIuKAs1wiLFxuICBsc2FxdW86IFwi4oC5XCIsXG4gIHJzYXF1bzogXCLigLpcIixcbiAgb2xpbmU6IFwi4oC+XCIsXG4gIGV1cm86IFwi4oKsXCIsXG4gIHRyYWRlOiBcIuKEolwiLFxuICBsYXJyOiBcIuKGkFwiLFxuICB1YXJyOiBcIuKGkVwiLFxuICByYXJyOiBcIuKGklwiLFxuICBkYXJyOiBcIuKGk1wiLFxuICBoYXJyOiBcIuKGlFwiLFxuICBjcmFycjogXCLihrVcIixcbiAgbGNlaWw6IFwi4oyIXCIsXG4gIHJjZWlsOiBcIuKMiVwiLFxuICBsZmxvb3I6IFwi4oyKXCIsXG4gIHJmbG9vcjogXCLijItcIixcbiAgbG96OiBcIuKXilwiLFxuICBzcGFkZXM6IFwi4pmgXCIsXG4gIGNsdWJzOiBcIuKZo1wiLFxuICBoZWFydHM6IFwi4pmlXCIsXG4gIGRpYW1zOiBcIuKZplwiXG59O1xuXG59LHt9XSw2MzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG5hbWVTdGFydENoYXIgPSAvW0EtWl9hLXpcXHhDMC1cXHhENlxceEQ4LVxceEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXS87XG52YXIgbmFtZUNoYXIgPSBuZXcgUmVnRXhwKFwiW1xcXFwtXFxcXC4wLTlcIiArIG5hbWVTdGFydENoYXIuc291cmNlLnNsaWNlKDEsIC0xKSArIFwiXFxcXHUwMEI3XFxcXHUwMzAwLVxcXFx1MDM2RlxcXFx1MjAzRi1cXFxcdTIwNDBdXCIpO1xudmFyIHRhZ05hbWVQYXR0ZXJuID0gbmV3IFJlZ0V4cCgnXicgKyBuYW1lU3RhcnRDaGFyLnNvdXJjZSArIG5hbWVDaGFyLnNvdXJjZSArICcqKD86XFw6JyArIG5hbWVTdGFydENoYXIuc291cmNlICsgbmFtZUNoYXIuc291cmNlICsgJyopPyQnKTtcbnZhciBTX1RBRyA9IDA7XG52YXIgU19BVFRSID0gMTtcbnZhciBTX0FUVFJfU1BBQ0UgPSAyO1xudmFyIFNfRVEgPSAzO1xudmFyIFNfQVRUUl9OT1FVT1RfVkFMVUUgPSA0O1xudmFyIFNfQVRUUl9FTkQgPSA1O1xudmFyIFNfVEFHX1NQQUNFID0gNjtcbnZhciBTX1RBR19DTE9TRSA9IDc7XG5mdW5jdGlvbiBYTUxSZWFkZXIoKSB7fVxuWE1MUmVhZGVyLnByb3RvdHlwZSA9IHtcbiAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKHNvdXJjZSwgZGVmYXVsdE5TTWFwLCBlbnRpdHlNYXApIHtcbiAgICB2YXIgZG9tQnVpbGRlciA9IHRoaXMuZG9tQnVpbGRlcjtcbiAgICBkb21CdWlsZGVyLnN0YXJ0RG9jdW1lbnQoKTtcbiAgICBfY29weShkZWZhdWx0TlNNYXAsIGRlZmF1bHROU01hcCA9IHt9KTtcbiAgICBfcGFyc2Uoc291cmNlLCBkZWZhdWx0TlNNYXAsIGVudGl0eU1hcCwgZG9tQnVpbGRlciwgdGhpcy5lcnJvckhhbmRsZXIpO1xuICAgIGRvbUJ1aWxkZXIuZW5kRG9jdW1lbnQoKTtcbiAgfVxufTtcbmZ1bmN0aW9uIF9wYXJzZShzb3VyY2UsIGRlZmF1bHROU01hcENvcHksIGVudGl0eU1hcCwgZG9tQnVpbGRlciwgZXJyb3JIYW5kbGVyKSB7XG4gIGZ1bmN0aW9uIGZpeGVkRnJvbUNoYXJDb2RlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA+IDB4ZmZmZikge1xuICAgICAgY29kZSAtPSAweDEwMDAwO1xuICAgICAgdmFyIHN1cnJvZ2F0ZTEgPSAweGQ4MDAgKyAoY29kZSA+PiAxMCksXG4gICAgICAgIHN1cnJvZ2F0ZTIgPSAweGRjMDAgKyAoY29kZSAmIDB4M2ZmKTtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHN1cnJvZ2F0ZTEsIHN1cnJvZ2F0ZTIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZW50aXR5UmVwbGFjZXIoYSkge1xuICAgIHZhciBrID0gYS5zbGljZSgxLCAtMSk7XG4gICAgaWYgKGsgaW4gZW50aXR5TWFwKSB7XG4gICAgICByZXR1cm4gZW50aXR5TWFwW2tdO1xuICAgIH0gZWxzZSBpZiAoay5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgICAgcmV0dXJuIGZpeGVkRnJvbUNoYXJDb2RlKHBhcnNlSW50KGsuc3Vic3RyKDEpLnJlcGxhY2UoJ3gnLCAnMHgnKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvckhhbmRsZXIuZXJyb3IoJ2VudGl0eSBub3QgZm91bmQ6JyArIGEpO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGFwcGVuZFRleHQoZW5kKSB7XG4gICAgaWYgKGVuZCA+IHN0YXJ0KSB7XG4gICAgICB2YXIgeHQgPSBzb3VyY2Uuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpLnJlcGxhY2UoLyYjP1xcdys7L2csIGVudGl0eVJlcGxhY2VyKTtcbiAgICAgIGxvY2F0b3IgJiYgcG9zaXRpb24oc3RhcnQpO1xuICAgICAgZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHh0LCAwLCBlbmQgLSBzdGFydCk7XG4gICAgICBzdGFydCA9IGVuZDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcG9zaXRpb24ocCwgbSkge1xuICAgIHdoaWxlIChwID49IGxpbmVFbmQgJiYgKG0gPSBsaW5lUGF0dGVybi5leGVjKHNvdXJjZSkpKSB7XG4gICAgICBsaW5lU3RhcnQgPSBtLmluZGV4O1xuICAgICAgbGluZUVuZCA9IGxpbmVTdGFydCArIG1bMF0ubGVuZ3RoO1xuICAgICAgbG9jYXRvci5saW5lTnVtYmVyKys7XG4gICAgfVxuICAgIGxvY2F0b3IuY29sdW1uTnVtYmVyID0gcCAtIGxpbmVTdGFydCArIDE7XG4gIH1cbiAgdmFyIGxpbmVTdGFydCA9IDA7XG4gIHZhciBsaW5lRW5kID0gMDtcbiAgdmFyIGxpbmVQYXR0ZXJuID0gLy4qKD86XFxyXFxuP3xcXG4pfC4qJC9nO1xuICB2YXIgbG9jYXRvciA9IGRvbUJ1aWxkZXIubG9jYXRvcjtcbiAgdmFyIHBhcnNlU3RhY2sgPSBbe1xuICAgIGN1cnJlbnROU01hcDogZGVmYXVsdE5TTWFwQ29weVxuICB9XTtcbiAgdmFyIGNsb3NlTWFwID0ge307XG4gIHZhciBzdGFydCA9IDA7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciB0YWdTdGFydCA9IHNvdXJjZS5pbmRleE9mKCc8Jywgc3RhcnQpO1xuICAgICAgaWYgKHRhZ1N0YXJ0IDwgMCkge1xuICAgICAgICBpZiAoIXNvdXJjZS5zdWJzdHIoc3RhcnQpLm1hdGNoKC9eXFxzKiQvKSkge1xuICAgICAgICAgIHZhciBkb2MgPSBkb21CdWlsZGVyLmRvYztcbiAgICAgICAgICB2YXIgdGV4dCA9IGRvYy5jcmVhdGVUZXh0Tm9kZShzb3VyY2Uuc3Vic3RyKHN0YXJ0KSk7XG4gICAgICAgICAgZG9jLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgIGRvbUJ1aWxkZXIuY3VycmVudEVsZW1lbnQgPSB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0YWdTdGFydCA+IHN0YXJ0KSB7XG4gICAgICAgIGFwcGVuZFRleHQodGFnU3RhcnQpO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChzb3VyY2UuY2hhckF0KHRhZ1N0YXJ0ICsgMSkpIHtcbiAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgdmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCc+JywgdGFnU3RhcnQgKyAzKTtcbiAgICAgICAgICB2YXIgdGFnTmFtZSA9IHNvdXJjZS5zdWJzdHJpbmcodGFnU3RhcnQgKyAyLCBlbmQpO1xuICAgICAgICAgIHZhciBjb25maWcgPSBwYXJzZVN0YWNrLnBvcCgpO1xuICAgICAgICAgIGlmIChlbmQgPCAwKSB7XG4gICAgICAgICAgICB0YWdOYW1lID0gc291cmNlLnN1YnN0cmluZyh0YWdTdGFydCArIDIpLnJlcGxhY2UoL1tcXHM8XS4qLywgJycpO1xuICAgICAgICAgICAgZXJyb3JIYW5kbGVyLmVycm9yKFwiZW5kIHRhZyBuYW1lOiBcIiArIHRhZ05hbWUgKyAnIGlzIG5vdCBjb21wbGV0ZTonICsgY29uZmlnLnRhZ05hbWUpO1xuICAgICAgICAgICAgZW5kID0gdGFnU3RhcnQgKyAxICsgdGFnTmFtZS5sZW5ndGg7XG4gICAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lLm1hdGNoKC9cXHM8LykpIHtcbiAgICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnJlcGxhY2UoL1tcXHM8XS4qLywgJycpO1xuICAgICAgICAgICAgZXJyb3JIYW5kbGVyLmVycm9yKFwiZW5kIHRhZyBuYW1lOiBcIiArIHRhZ05hbWUgKyAnIG1heWJlIG5vdCBjb21wbGV0ZScpO1xuICAgICAgICAgICAgZW5kID0gdGFnU3RhcnQgKyAxICsgdGFnTmFtZS5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBsb2NhbE5TTWFwID0gY29uZmlnLmxvY2FsTlNNYXA7XG4gICAgICAgICAgdmFyIGVuZE1hdGNoID0gY29uZmlnLnRhZ05hbWUgPT0gdGFnTmFtZTtcbiAgICAgICAgICB2YXIgZW5kSWdub3JlQ2FzZU1hY2ggPSBlbmRNYXRjaCB8fCBjb25maWcudGFnTmFtZSAmJiBjb25maWcudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBpZiAoZW5kSWdub3JlQ2FzZU1hY2gpIHtcbiAgICAgICAgICAgIGRvbUJ1aWxkZXIuZW5kRWxlbWVudChjb25maWcudXJpLCBjb25maWcubG9jYWxOYW1lLCB0YWdOYW1lKTtcbiAgICAgICAgICAgIGlmIChsb2NhbE5TTWFwKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIHByZWZpeCBpbiBsb2NhbE5TTWFwKSB7XG4gICAgICAgICAgICAgICAgZG9tQnVpbGRlci5lbmRQcmVmaXhNYXBwaW5nKHByZWZpeCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZW5kTWF0Y2gpIHtcbiAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyLmZhdGFsRXJyb3IoXCJlbmQgdGFnIG5hbWU6IFwiICsgdGFnTmFtZSArICcgaXMgbm90IG1hdGNoIHRoZSBjdXJyZW50IHN0YXJ0IHRhZ05hbWU6JyArIGNvbmZpZy50YWdOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VTdGFjay5wdXNoKGNvbmZpZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVuZCsrO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICc/JzpcbiAgICAgICAgICBsb2NhdG9yICYmIHBvc2l0aW9uKHRhZ1N0YXJ0KTtcbiAgICAgICAgICBlbmQgPSBwYXJzZUluc3RydWN0aW9uKHNvdXJjZSwgdGFnU3RhcnQsIGRvbUJ1aWxkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICchJzpcbiAgICAgICAgICBsb2NhdG9yICYmIHBvc2l0aW9uKHRhZ1N0YXJ0KTtcbiAgICAgICAgICBlbmQgPSBwYXJzZURDQyhzb3VyY2UsIHRhZ1N0YXJ0LCBkb21CdWlsZGVyLCBlcnJvckhhbmRsZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGxvY2F0b3IgJiYgcG9zaXRpb24odGFnU3RhcnQpO1xuICAgICAgICAgIHZhciBlbCA9IG5ldyBFbGVtZW50QXR0cmlidXRlcygpO1xuICAgICAgICAgIHZhciBjdXJyZW50TlNNYXAgPSBwYXJzZVN0YWNrW3BhcnNlU3RhY2subGVuZ3RoIC0gMV0uY3VycmVudE5TTWFwO1xuICAgICAgICAgIHZhciBlbmQgPSBwYXJzZUVsZW1lbnRTdGFydFBhcnQoc291cmNlLCB0YWdTdGFydCwgZWwsIGN1cnJlbnROU01hcCwgZW50aXR5UmVwbGFjZXIsIGVycm9ySGFuZGxlcik7XG4gICAgICAgICAgdmFyIGxlbiA9IGVsLmxlbmd0aDtcbiAgICAgICAgICBpZiAoIWVsLmNsb3NlZCAmJiBmaXhTZWxmQ2xvc2VkKHNvdXJjZSwgZW5kLCBlbC50YWdOYW1lLCBjbG9zZU1hcCkpIHtcbiAgICAgICAgICAgIGVsLmNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIWVudGl0eU1hcC5uYnNwKSB7XG4gICAgICAgICAgICAgIGVycm9ySGFuZGxlci53YXJuaW5nKCd1bmNsb3NlZCB4bWwgYXR0cmlidXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChsb2NhdG9yICYmIGxlbikge1xuICAgICAgICAgICAgdmFyIGxvY2F0b3IyID0gY29weUxvY2F0b3IobG9jYXRvciwge30pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICB2YXIgYSA9IGVsW2ldO1xuICAgICAgICAgICAgICBwb3NpdGlvbihhLm9mZnNldCk7XG4gICAgICAgICAgICAgIGEubG9jYXRvciA9IGNvcHlMb2NhdG9yKGxvY2F0b3IsIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbUJ1aWxkZXIubG9jYXRvciA9IGxvY2F0b3IyO1xuICAgICAgICAgICAgaWYgKGFwcGVuZEVsZW1lbnQoZWwsIGRvbUJ1aWxkZXIsIGN1cnJlbnROU01hcCkpIHtcbiAgICAgICAgICAgICAgcGFyc2VTdGFjay5wdXNoKGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbUJ1aWxkZXIubG9jYXRvciA9IGxvY2F0b3I7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhcHBlbmRFbGVtZW50KGVsLCBkb21CdWlsZGVyLCBjdXJyZW50TlNNYXApKSB7XG4gICAgICAgICAgICAgIHBhcnNlU3RhY2sucHVzaChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlbC51cmkgPT09ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJyAmJiAhZWwuY2xvc2VkKSB7XG4gICAgICAgICAgICBlbmQgPSBwYXJzZUh0bWxTcGVjaWFsQ29udGVudChzb3VyY2UsIGVuZCwgZWwudGFnTmFtZSwgZW50aXR5UmVwbGFjZXIsIGRvbUJ1aWxkZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbmQrKztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3JIYW5kbGVyLmVycm9yKCdlbGVtZW50IHBhcnNlIGVycm9yOiAnICsgZSk7XG4gICAgICBlbmQgPSAtMTtcbiAgICB9XG4gICAgaWYgKGVuZCA+IHN0YXJ0KSB7XG4gICAgICBzdGFydCA9IGVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwZW5kVGV4dChNYXRoLm1heCh0YWdTdGFydCwgc3RhcnQpICsgMSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjb3B5TG9jYXRvcihmLCB0KSB7XG4gIHQubGluZU51bWJlciA9IGYubGluZU51bWJlcjtcbiAgdC5jb2x1bW5OdW1iZXIgPSBmLmNvbHVtbk51bWJlcjtcbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBwYXJzZUVsZW1lbnRTdGFydFBhcnQoc291cmNlLCBzdGFydCwgZWwsIGN1cnJlbnROU01hcCwgZW50aXR5UmVwbGFjZXIsIGVycm9ySGFuZGxlcikge1xuICB2YXIgYXR0ck5hbWU7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIHAgPSArK3N0YXJ0O1xuICB2YXIgcyA9IFNfVEFHO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHZhciBjID0gc291cmNlLmNoYXJBdChwKTtcbiAgICBzd2l0Y2ggKGMpIHtcbiAgICAgIGNhc2UgJz0nOlxuICAgICAgICBpZiAocyA9PT0gU19BVFRSKSB7XG4gICAgICAgICAgYXR0ck5hbWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApO1xuICAgICAgICAgIHMgPSBTX0VRO1xuICAgICAgICB9IGVsc2UgaWYgKHMgPT09IFNfQVRUUl9TUEFDRSkge1xuICAgICAgICAgIHMgPSBTX0VRO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXR0cmlidXRlIGVxdWFsIG11c3QgYWZ0ZXIgYXR0ck5hbWUnKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1xcJyc6XG4gICAgICBjYXNlICdcIic6XG4gICAgICAgIGlmIChzID09PSBTX0VRIHx8IHMgPT09IFNfQVRUUikge1xuICAgICAgICAgIGlmIChzID09PSBTX0FUVFIpIHtcbiAgICAgICAgICAgIGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgdmFsdWUgbXVzdCBhZnRlciBcIj1cIicpO1xuICAgICAgICAgICAgYXR0ck5hbWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGFydCA9IHAgKyAxO1xuICAgICAgICAgIHAgPSBzb3VyY2UuaW5kZXhPZihjLCBzdGFydCk7XG4gICAgICAgICAgaWYgKHAgPiAwKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCkucmVwbGFjZSgvJiM/XFx3KzsvZywgZW50aXR5UmVwbGFjZXIpO1xuICAgICAgICAgICAgZWwuYWRkKGF0dHJOYW1lLCB2YWx1ZSwgc3RhcnQgLSAxKTtcbiAgICAgICAgICAgIHMgPSBTX0FUVFJfRU5EO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSB2YWx1ZSBubyBlbmQgXFwnJyArIGMgKyAnXFwnIG1hdGNoJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHMgPT0gU19BVFRSX05PUVVPVF9WQUxVRSkge1xuICAgICAgICAgIHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LCBwKS5yZXBsYWNlKC8mIz9cXHcrOy9nLCBlbnRpdHlSZXBsYWNlcik7XG4gICAgICAgICAgZWwuYWRkKGF0dHJOYW1lLCB2YWx1ZSwgc3RhcnQpO1xuICAgICAgICAgIGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInICsgYXR0ck5hbWUgKyAnXCIgbWlzc2VkIHN0YXJ0IHF1b3QoJyArIGMgKyAnKSEhJyk7XG4gICAgICAgICAgc3RhcnQgPSBwICsgMTtcbiAgICAgICAgICBzID0gU19BVFRSX0VORDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSB2YWx1ZSBtdXN0IGFmdGVyIFwiPVwiJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgc3dpdGNoIChzKSB7XG4gICAgICAgICAgY2FzZSBTX1RBRzpcbiAgICAgICAgICAgIGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LCBwKSk7XG4gICAgICAgICAgY2FzZSBTX0FUVFJfRU5EOlxuICAgICAgICAgIGNhc2UgU19UQUdfU1BBQ0U6XG4gICAgICAgICAgY2FzZSBTX1RBR19DTE9TRTpcbiAgICAgICAgICAgIHMgPSBTX1RBR19DTE9TRTtcbiAgICAgICAgICAgIGVsLmNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgY2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOlxuICAgICAgICAgIGNhc2UgU19BVFRSOlxuICAgICAgICAgIGNhc2UgU19BVFRSX1NQQUNFOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF0dHJpYnV0ZSBpbnZhbGlkIGNsb3NlIGNoYXIoJy8nKVwiKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJyc6XG4gICAgICAgIGVycm9ySGFuZGxlci5lcnJvcigndW5leHBlY3RlZCBlbmQgb2YgaW5wdXQnKTtcbiAgICAgICAgaWYgKHMgPT0gU19UQUcpIHtcbiAgICAgICAgICBlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCwgcCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgY2FzZSAnPic6XG4gICAgICAgIHN3aXRjaCAocykge1xuICAgICAgICAgIGNhc2UgU19UQUc6XG4gICAgICAgICAgICBlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCwgcCkpO1xuICAgICAgICAgIGNhc2UgU19BVFRSX0VORDpcbiAgICAgICAgICBjYXNlIFNfVEFHX1NQQUNFOlxuICAgICAgICAgIGNhc2UgU19UQUdfQ0xPU0U6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFNfQVRUUl9OT1FVT1RfVkFMVUU6XG4gICAgICAgICAgY2FzZSBTX0FUVFI6XG4gICAgICAgICAgICB2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCk7XG4gICAgICAgICAgICBpZiAodmFsdWUuc2xpY2UoLTEpID09PSAnLycpIHtcbiAgICAgICAgICAgICAgZWwuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBTX0FUVFJfU1BBQ0U6XG4gICAgICAgICAgICBpZiAocyA9PT0gU19BVFRSX1NQQUNFKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gYXR0ck5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocyA9PSBTX0FUVFJfTk9RVU9UX1ZBTFVFKSB7XG4gICAgICAgICAgICAgIGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInICsgdmFsdWUgKyAnXCIgbWlzc2VkIHF1b3QoXCIpISEnKTtcbiAgICAgICAgICAgICAgZWwuYWRkKGF0dHJOYW1lLCB2YWx1ZS5yZXBsYWNlKC8mIz9cXHcrOy9nLCBlbnRpdHlSZXBsYWNlciksIHN0YXJ0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50TlNNYXBbJyddICE9PSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcgfHwgIXZhbHVlLm1hdGNoKC9eKD86ZGlzYWJsZWR8Y2hlY2tlZHxzZWxlY3RlZCkkL2kpKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicgKyB2YWx1ZSArICdcIiBtaXNzZWQgdmFsdWUhISBcIicgKyB2YWx1ZSArICdcIiBpbnN0ZWFkISEnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbC5hZGQodmFsdWUsIHZhbHVlLCBzdGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFNfRVE6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSB2YWx1ZSBtaXNzZWQhIScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgY2FzZSBcIlxceDgwXCI6XG4gICAgICAgIGMgPSAnICc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoYyA8PSAnICcpIHtcbiAgICAgICAgICBzd2l0Y2ggKHMpIHtcbiAgICAgICAgICAgIGNhc2UgU19UQUc6XG4gICAgICAgICAgICAgIGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LCBwKSk7XG4gICAgICAgICAgICAgIHMgPSBTX1RBR19TUEFDRTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNfQVRUUjpcbiAgICAgICAgICAgICAgYXR0ck5hbWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApO1xuICAgICAgICAgICAgICBzID0gU19BVFRSX1NQQUNFO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU19BVFRSX05PUVVPVF9WQUxVRTpcbiAgICAgICAgICAgICAgdmFyIHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LCBwKS5yZXBsYWNlKC8mIz9cXHcrOy9nLCBlbnRpdHlSZXBsYWNlcik7XG4gICAgICAgICAgICAgIGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInICsgdmFsdWUgKyAnXCIgbWlzc2VkIHF1b3QoXCIpISEnKTtcbiAgICAgICAgICAgICAgZWwuYWRkKGF0dHJOYW1lLCB2YWx1ZSwgc3RhcnQpO1xuICAgICAgICAgICAgY2FzZSBTX0FUVFJfRU5EOlxuICAgICAgICAgICAgICBzID0gU19UQUdfU1BBQ0U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2l0Y2ggKHMpIHtcbiAgICAgICAgICAgIGNhc2UgU19BVFRSX1NQQUNFOlxuICAgICAgICAgICAgICB2YXIgdGFnTmFtZSA9IGVsLnRhZ05hbWU7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50TlNNYXBbJyddICE9PSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcgfHwgIWF0dHJOYW1lLm1hdGNoKC9eKD86ZGlzYWJsZWR8Y2hlY2tlZHxzZWxlY3RlZCkkL2kpKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicgKyBhdHRyTmFtZSArICdcIiBtaXNzZWQgdmFsdWUhISBcIicgKyBhdHRyTmFtZSArICdcIiBpbnN0ZWFkMiEhJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWwuYWRkKGF0dHJOYW1lLCBhdHRyTmFtZSwgc3RhcnQpO1xuICAgICAgICAgICAgICBzdGFydCA9IHA7XG4gICAgICAgICAgICAgIHMgPSBTX0FUVFI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTX0FUVFJfRU5EOlxuICAgICAgICAgICAgICBlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIHNwYWNlIGlzIHJlcXVpcmVkXCInICsgYXR0ck5hbWUgKyAnXCIhIScpO1xuICAgICAgICAgICAgY2FzZSBTX1RBR19TUEFDRTpcbiAgICAgICAgICAgICAgcyA9IFNfQVRUUjtcbiAgICAgICAgICAgICAgc3RhcnQgPSBwO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU19FUTpcbiAgICAgICAgICAgICAgcyA9IFNfQVRUUl9OT1FVT1RfVkFMVUU7XG4gICAgICAgICAgICAgIHN0YXJ0ID0gcDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNfVEFHX0NMT1NFOlxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbGVtZW50cyBjbG9zZWQgY2hhcmFjdGVyICcvJyBhbmQgJz4nIG11c3QgYmUgY29ubmVjdGVkIHRvXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwKys7XG4gIH1cbn1cbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnQoZWwsIGRvbUJ1aWxkZXIsIGN1cnJlbnROU01hcCkge1xuICB2YXIgdGFnTmFtZSA9IGVsLnRhZ05hbWU7XG4gIHZhciBsb2NhbE5TTWFwID0gbnVsbDtcbiAgdmFyIGkgPSBlbC5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgYSA9IGVsW2ldO1xuICAgIHZhciBxTmFtZSA9IGEucU5hbWU7XG4gICAgdmFyIHZhbHVlID0gYS52YWx1ZTtcbiAgICB2YXIgbnNwID0gcU5hbWUuaW5kZXhPZignOicpO1xuICAgIGlmIChuc3AgPiAwKSB7XG4gICAgICB2YXIgcHJlZml4ID0gYS5wcmVmaXggPSBxTmFtZS5zbGljZSgwLCBuc3ApO1xuICAgICAgdmFyIGxvY2FsTmFtZSA9IHFOYW1lLnNsaWNlKG5zcCArIDEpO1xuICAgICAgdmFyIG5zUHJlZml4ID0gcHJlZml4ID09PSAneG1sbnMnICYmIGxvY2FsTmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxOYW1lID0gcU5hbWU7XG4gICAgICBwcmVmaXggPSBudWxsO1xuICAgICAgbnNQcmVmaXggPSBxTmFtZSA9PT0gJ3htbG5zJyAmJiAnJztcbiAgICB9XG4gICAgYS5sb2NhbE5hbWUgPSBsb2NhbE5hbWU7XG4gICAgaWYgKG5zUHJlZml4ICE9PSBmYWxzZSkge1xuICAgICAgaWYgKGxvY2FsTlNNYXAgPT0gbnVsbCkge1xuICAgICAgICBsb2NhbE5TTWFwID0ge307XG4gICAgICAgIF9jb3B5KGN1cnJlbnROU01hcCwgY3VycmVudE5TTWFwID0ge30pO1xuICAgICAgfVxuICAgICAgY3VycmVudE5TTWFwW25zUHJlZml4XSA9IGxvY2FsTlNNYXBbbnNQcmVmaXhdID0gdmFsdWU7XG4gICAgICBhLnVyaSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLyc7XG4gICAgICBkb21CdWlsZGVyLnN0YXJ0UHJlZml4TWFwcGluZyhuc1ByZWZpeCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICB2YXIgaSA9IGVsLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIGEgPSBlbFtpXTtcbiAgICB2YXIgcHJlZml4ID0gYS5wcmVmaXg7XG4gICAgaWYgKHByZWZpeCkge1xuICAgICAgaWYgKHByZWZpeCA9PT0gJ3htbCcpIHtcbiAgICAgICAgYS51cmkgPSAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJztcbiAgICAgIH1cbiAgICAgIGlmIChwcmVmaXggIT09ICd4bWxucycpIHtcbiAgICAgICAgYS51cmkgPSBjdXJyZW50TlNNYXBbcHJlZml4IHx8ICcnXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIG5zcCA9IHRhZ05hbWUuaW5kZXhPZignOicpO1xuICBpZiAobnNwID4gMCkge1xuICAgIHByZWZpeCA9IGVsLnByZWZpeCA9IHRhZ05hbWUuc2xpY2UoMCwgbnNwKTtcbiAgICBsb2NhbE5hbWUgPSBlbC5sb2NhbE5hbWUgPSB0YWdOYW1lLnNsaWNlKG5zcCArIDEpO1xuICB9IGVsc2Uge1xuICAgIHByZWZpeCA9IG51bGw7XG4gICAgbG9jYWxOYW1lID0gZWwubG9jYWxOYW1lID0gdGFnTmFtZTtcbiAgfVxuICB2YXIgbnMgPSBlbC51cmkgPSBjdXJyZW50TlNNYXBbcHJlZml4IHx8ICcnXTtcbiAgZG9tQnVpbGRlci5zdGFydEVsZW1lbnQobnMsIGxvY2FsTmFtZSwgdGFnTmFtZSwgZWwpO1xuICBpZiAoZWwuY2xvc2VkKSB7XG4gICAgZG9tQnVpbGRlci5lbmRFbGVtZW50KG5zLCBsb2NhbE5hbWUsIHRhZ05hbWUpO1xuICAgIGlmIChsb2NhbE5TTWFwKSB7XG4gICAgICBmb3IgKHByZWZpeCBpbiBsb2NhbE5TTWFwKSB7XG4gICAgICAgIGRvbUJ1aWxkZXIuZW5kUHJlZml4TWFwcGluZyhwcmVmaXgpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbC5jdXJyZW50TlNNYXAgPSBjdXJyZW50TlNNYXA7XG4gICAgZWwubG9jYWxOU01hcCA9IGxvY2FsTlNNYXA7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlSHRtbFNwZWNpYWxDb250ZW50KHNvdXJjZSwgZWxTdGFydEVuZCwgdGFnTmFtZSwgZW50aXR5UmVwbGFjZXIsIGRvbUJ1aWxkZXIpIHtcbiAgaWYgKC9eKD86c2NyaXB0fHRleHRhcmVhKSQvaS50ZXN0KHRhZ05hbWUpKSB7XG4gICAgdmFyIGVsRW5kU3RhcnQgPSBzb3VyY2UuaW5kZXhPZignPC8nICsgdGFnTmFtZSArICc+JywgZWxTdGFydEVuZCk7XG4gICAgdmFyIHRleHQgPSBzb3VyY2Uuc3Vic3RyaW5nKGVsU3RhcnRFbmQgKyAxLCBlbEVuZFN0YXJ0KTtcbiAgICBpZiAoL1smPF0vLnRlc3QodGV4dCkpIHtcbiAgICAgIGlmICgvXnNjcmlwdCQvaS50ZXN0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRvbUJ1aWxkZXIuY2hhcmFjdGVycyh0ZXh0LCAwLCB0ZXh0Lmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBlbEVuZFN0YXJ0O1xuICAgICAgfVxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvJiM/XFx3KzsvZywgZW50aXR5UmVwbGFjZXIpO1xuICAgICAgZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHRleHQsIDAsIHRleHQubGVuZ3RoKTtcbiAgICAgIHJldHVybiBlbEVuZFN0YXJ0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWxTdGFydEVuZCArIDE7XG59XG5mdW5jdGlvbiBmaXhTZWxmQ2xvc2VkKHNvdXJjZSwgZWxTdGFydEVuZCwgdGFnTmFtZSwgY2xvc2VNYXApIHtcbiAgdmFyIHBvcyA9IGNsb3NlTWFwW3RhZ05hbWVdO1xuICBpZiAocG9zID09IG51bGwpIHtcbiAgICBwb3MgPSBzb3VyY2UubGFzdEluZGV4T2YoJzwvJyArIHRhZ05hbWUgKyAnPicpO1xuICAgIGlmIChwb3MgPCBlbFN0YXJ0RW5kKSB7XG4gICAgICBwb3MgPSBzb3VyY2UubGFzdEluZGV4T2YoJzwvJyArIHRhZ05hbWUpO1xuICAgIH1cbiAgICBjbG9zZU1hcFt0YWdOYW1lXSA9IHBvcztcbiAgfVxuICByZXR1cm4gcG9zIDwgZWxTdGFydEVuZDtcbn1cbmZ1bmN0aW9uIF9jb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gIGZvciAodmFyIG4gaW4gc291cmNlKSB7XG4gICAgdGFyZ2V0W25dID0gc291cmNlW25dO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZURDQyhzb3VyY2UsIHN0YXJ0LCBkb21CdWlsZGVyLCBlcnJvckhhbmRsZXIpIHtcbiAgdmFyIG5leHQgPSBzb3VyY2UuY2hhckF0KHN0YXJ0ICsgMik7XG4gIHN3aXRjaCAobmV4dCkge1xuICAgIGNhc2UgJy0nOlxuICAgICAgaWYgKHNvdXJjZS5jaGFyQXQoc3RhcnQgKyAzKSA9PT0gJy0nKSB7XG4gICAgICAgIHZhciBlbmQgPSBzb3VyY2UuaW5kZXhPZignLS0+Jywgc3RhcnQgKyA0KTtcbiAgICAgICAgaWYgKGVuZCA+IHN0YXJ0KSB7XG4gICAgICAgICAgZG9tQnVpbGRlci5jb21tZW50KHNvdXJjZSwgc3RhcnQgKyA0LCBlbmQgLSBzdGFydCAtIDQpO1xuICAgICAgICAgIHJldHVybiBlbmQgKyAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVycm9ySGFuZGxlci5lcnJvcihcIlVuY2xvc2VkIGNvbW1lbnRcIik7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIGlmIChzb3VyY2Uuc3Vic3RyKHN0YXJ0ICsgMywgNikgPT0gJ0NEQVRBWycpIHtcbiAgICAgICAgdmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCddXT4nLCBzdGFydCArIDkpO1xuICAgICAgICBkb21CdWlsZGVyLnN0YXJ0Q0RBVEEoKTtcbiAgICAgICAgZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHNvdXJjZSwgc3RhcnQgKyA5LCBlbmQgLSBzdGFydCAtIDkpO1xuICAgICAgICBkb21CdWlsZGVyLmVuZENEQVRBKCk7XG4gICAgICAgIHJldHVybiBlbmQgKyAzO1xuICAgICAgfVxuICAgICAgdmFyIG1hdGNocyA9IHNwbGl0KHNvdXJjZSwgc3RhcnQpO1xuICAgICAgdmFyIGxlbiA9IG1hdGNocy5sZW5ndGg7XG4gICAgICBpZiAobGVuID4gMSAmJiAvIWRvY3R5cGUvaS50ZXN0KG1hdGNoc1swXVswXSkpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBtYXRjaHNbMV1bMF07XG4gICAgICAgIHZhciBwdWJpZCA9IGxlbiA+IDMgJiYgL15wdWJsaWMkL2kudGVzdChtYXRjaHNbMl1bMF0pICYmIG1hdGNoc1szXVswXTtcbiAgICAgICAgdmFyIHN5c2lkID0gbGVuID4gNCAmJiBtYXRjaHNbNF1bMF07XG4gICAgICAgIHZhciBsYXN0TWF0Y2ggPSBtYXRjaHNbbGVuIC0gMV07XG4gICAgICAgIGRvbUJ1aWxkZXIuc3RhcnREVEQobmFtZSwgcHViaWQgJiYgcHViaWQucmVwbGFjZSgvXihbJ1wiXSkoLio/KVxcMSQvLCAnJDInKSwgc3lzaWQgJiYgc3lzaWQucmVwbGFjZSgvXihbJ1wiXSkoLio/KVxcMSQvLCAnJDInKSk7XG4gICAgICAgIGRvbUJ1aWxkZXIuZW5kRFREKCk7XG4gICAgICAgIHJldHVybiBsYXN0TWF0Y2guaW5kZXggKyBsYXN0TWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIHBhcnNlSW5zdHJ1Y3Rpb24oc291cmNlLCBzdGFydCwgZG9tQnVpbGRlcikge1xuICB2YXIgZW5kID0gc291cmNlLmluZGV4T2YoJz8+Jywgc3RhcnQpO1xuICBpZiAoZW5kKSB7XG4gICAgdmFyIG1hdGNoID0gc291cmNlLnN1YnN0cmluZyhzdGFydCwgZW5kKS5tYXRjaCgvXjxcXD8oXFxTKilcXHMqKFtcXHNcXFNdKj8pXFxzKiQvKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHZhciBsZW4gPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICBkb21CdWlsZGVyLnByb2Nlc3NpbmdJbnN0cnVjdGlvbihtYXRjaFsxXSwgbWF0Y2hbMl0pO1xuICAgICAgcmV0dXJuIGVuZCArIDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gRWxlbWVudEF0dHJpYnV0ZXMoc291cmNlKSB7fVxuRWxlbWVudEF0dHJpYnV0ZXMucHJvdG90eXBlID0ge1xuICBzZXRUYWdOYW1lOiBmdW5jdGlvbiBzZXRUYWdOYW1lKHRhZ05hbWUpIHtcbiAgICBpZiAoIXRhZ05hbWVQYXR0ZXJuLnRlc3QodGFnTmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCB0YWdOYW1lOicgKyB0YWdOYW1lKTtcbiAgICB9XG4gICAgdGhpcy50YWdOYW1lID0gdGFnTmFtZTtcbiAgfSxcbiAgYWRkOiBmdW5jdGlvbiBhZGQocU5hbWUsIHZhbHVlLCBvZmZzZXQpIHtcbiAgICBpZiAoIXRhZ05hbWVQYXR0ZXJuLnRlc3QocU5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXR0cmlidXRlOicgKyBxTmFtZSk7XG4gICAgfVxuICAgIHRoaXNbdGhpcy5sZW5ndGgrK10gPSB7XG4gICAgICBxTmFtZTogcU5hbWUsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBvZmZzZXQ6IG9mZnNldFxuICAgIH07XG4gIH0sXG4gIGxlbmd0aDogMCxcbiAgZ2V0TG9jYWxOYW1lOiBmdW5jdGlvbiBnZXRMb2NhbE5hbWUoaSkge1xuICAgIHJldHVybiB0aGlzW2ldLmxvY2FsTmFtZTtcbiAgfSxcbiAgZ2V0TG9jYXRvcjogZnVuY3Rpb24gZ2V0TG9jYXRvcihpKSB7XG4gICAgcmV0dXJuIHRoaXNbaV0ubG9jYXRvcjtcbiAgfSxcbiAgZ2V0UU5hbWU6IGZ1bmN0aW9uIGdldFFOYW1lKGkpIHtcbiAgICByZXR1cm4gdGhpc1tpXS5xTmFtZTtcbiAgfSxcbiAgZ2V0VVJJOiBmdW5jdGlvbiBnZXRVUkkoaSkge1xuICAgIHJldHVybiB0aGlzW2ldLnVyaTtcbiAgfSxcbiAgZ2V0VmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKGkpIHtcbiAgICByZXR1cm4gdGhpc1tpXS52YWx1ZTtcbiAgfVxufTtcbmZ1bmN0aW9uIHNwbGl0KHNvdXJjZSwgc3RhcnQpIHtcbiAgdmFyIG1hdGNoO1xuICB2YXIgYnVmID0gW107XG4gIHZhciByZWcgPSAvJ1teJ10rJ3xcIlteXCJdK1wifFteXFxzPD5cXC89XSs9P3woXFwvP1xccyo+fDwpL2c7XG4gIHJlZy5sYXN0SW5kZXggPSBzdGFydDtcbiAgcmVnLmV4ZWMoc291cmNlKTtcbiAgd2hpbGUgKG1hdGNoID0gcmVnLmV4ZWMoc291cmNlKSkge1xuICAgIGJ1Zi5wdXNoKG1hdGNoKTtcbiAgICBpZiAobWF0Y2hbMV0pIHJldHVybiBidWY7XG4gIH1cbn1cbmV4cG9ydHMuWE1MUmVhZGVyID0gWE1MUmVhZGVyO1xuXG59LHt9XX0se30sWzU5XSk7XG4iXSwiZmlsZSI6IndlYi1hZGFwdGVyLmpzIn0=
