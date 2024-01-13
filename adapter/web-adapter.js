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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Audio = exports["default"] = function (_HTMLAudioElement) {
  _inherits(Audio, _HTMLAudioElement);
  var _super = _createSuper(Audio);
  function Audio(url) {
    _classCallCheck(this, Audio);
    return _super.call(this, url);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var DeviceMotionEvent = exports["default"] = function (_Event) {
  _inherits(DeviceMotionEvent, _Event);
  var _super = _createSuper(DeviceMotionEvent);
  function DeviceMotionEvent(initArgs) {
    var _this;
    _classCallCheck(this, DeviceMotionEvent);
    _this = _super.call(this, 'devicemotion');
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
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _html = new _HTMLHtmlElement["default"]();
var Document = exports["default"] = function (_Node) {
  _inherits(Document, _Node);
  var _super = _createSuper(Document);
  function Document() {
    var _this;
    _classCallCheck(this, Document);
    _this = _super.call(this);
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
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Element = exports["default"] = function (_Node) {
  _inherits(Element, _Node);
  var _super = _createSuper(Element);
  function Element(tagName) {
    var _this;
    _classCallCheck(this, Element);
    _this = _super.call(this, tagName);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var FontFaceSet = exports["default"] = function (_EventTarget) {
  _inherits(FontFaceSet, _EventTarget);
  var _super = _createSuper(FontFaceSet);
  function FontFaceSet() {
    var _this;
    _classCallCheck(this, FontFaceSet);
    _this = _super.call(this);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var HTMLAnchorElement = exports["default"] = function (_HTMLElement) {
  _inherits(HTMLAnchorElement, _HTMLElement);
  var _super = _createSuper(HTMLAnchorElement);
  function HTMLAnchorElement() {
    var _this;
    _classCallCheck(this, HTMLAnchorElement);
    _this = _super.call(this, "A");
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
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var HTMLAudioElement = exports["default"] = function (_HTMLMediaElement) {
  _inherits(HTMLAudioElement, _HTMLMediaElement);
  var _super = _createSuper(HTMLAudioElement);
  function HTMLAudioElement(url) {
    var _this;
    _classCallCheck(this, HTMLAudioElement);
    _this = _super.call(this, url, 'AUDIO');
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
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var HTMLBodyElement = exports["default"] = function (_HTMLElement) {
  _inherits(HTMLBodyElement, _HTMLElement);
  var _super = _createSuper(HTMLBodyElement);
  function HTMLBodyElement(parentNode) {
    var _this;
    _classCallCheck(this, HTMLBodyElement);
    _this = _super.call(this, "BODY");
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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
    var _super = _createSuper(_HTMLCanvasElement);
    function _HTMLCanvasElement(width, height) {
      var _this;
      _classCallCheck(this, _HTMLCanvasElement);
      _this = _super.call(this, 'CANVAS');
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
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var HTMLElement = exports["default"] = function (_Element) {
  _inherits(HTMLElement, _Element);
  var _super = _createSuper(HTMLElement);
  function HTMLElement(tagName) {
    var _this;
    _classCallCheck(this, HTMLElement);
    _this = _super.call(this, tagName);
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
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var HTMLHeadElement = exports["default"] = function (_HTMLElement) {
  _inherits(HTMLHeadElement, _HTMLElement);
  var _super = _createSuper(HTMLHeadElement);
  function HTMLHeadElement(parentNode) {
    var _this;
    _classCallCheck(this, HTMLHeadElement);
    _this = _super.call(this, "HEAD");
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var HTMLHtmlElement = exports["default"] = function (_HTMLElement) {
  _inherits(HTMLHtmlElement, _HTMLElement);
  var _super = _createSuper(HTMLHtmlElement);
  function HTMLHtmlElement() {
    _classCallCheck(this, HTMLHtmlElement);
    return _super.call(this, "HTML");
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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
    var _super = _createSuper(_HTMLImageElement);
    function _HTMLImageElement(width, height, isCalledFromImage) {
      var _this;
      _classCallCheck(this, _HTMLImageElement);
      if (!isCalledFromImage) {
        throw new TypeError("Illegal constructor, use 'new Image(w, h); instead!'");
      }
      _this = _super.call(this, 'IMG');
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
window.ral = window.ral || {};
var HTMLInputElement = exports["default"] = function (_HTMLElement) {
  _inherits(HTMLInputElement, _HTMLElement);
  var _super = _createSuper(HTMLInputElement);
  function HTMLInputElement() {
    _classCallCheck(this, HTMLInputElement);
    return _super.call(this, "INPUT");
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
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var HTMLMediaElement = exports["default"] = function (_HTMLElement) {
  _inherits(HTMLMediaElement, _HTMLElement);
  var _super = _createSuper(HTMLMediaElement);
  function HTMLMediaElement(url, type) {
    var _this;
    _classCallCheck(this, HTMLMediaElement);
    _this = _super.call(this, type);
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
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
  var _super = _createSuper(HTMLScriptElement);
  function HTMLScriptElement() {
    var _this;
    _classCallCheck(this, HTMLScriptElement);
    _this = _super.call(this, 'SCRIPT');
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var HTMLStyleElement = exports["default"] = function (_HTMLElement) {
  _inherits(HTMLStyleElement, _HTMLElement);
  var _super = _createSuper(HTMLStyleElement);
  function HTMLStyleElement() {
    var _this;
    _classCallCheck(this, HTMLStyleElement);
    _this = _super.call(this, "STYLE");
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var HTMLVideoElement = exports["default"] = function (_HTMLMediaElement) {
  _inherits(HTMLVideoElement, _HTMLMediaElement);
  var _super = _createSuper(HTMLVideoElement);
  function HTMLVideoElement() {
    _classCallCheck(this, HTMLVideoElement);
    return _super.call(this, 'VIDEO');
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
if (ral.getFeatureProperty("Image", "spec") === "vivo_platform_support") {
  var Image = window.Image;
  module.exports = Image;
} else {
  var _Image = window.Image;
  var _Image2 = function (_HTMLImageElement) {
    _inherits(_Image2, _HTMLImageElement);
    var _super = _createSuper(_Image2);
    function _Image2(width, height) {
      _classCallCheck(this, _Image2);
      return _super.call(this, width, height, true);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Node = exports["default"] = function (_EventTarget) {
  _inherits(Node, _EventTarget);
  var _super = _createSuper(Node);
  function Node(nodeName) {
    var _this;
    _classCallCheck(this, Node);
    _this = _super.call(this);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ScreenOrientation = exports["default"] = function (_EventTarget) {
  _inherits(ScreenOrientation, _EventTarget);
  var _super = _createSuper(ScreenOrientation);
  function ScreenOrientation() {
    var _this;
    _classCallCheck(this, ScreenOrientation);
    _this = _super.call(this);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var TouchEvent = exports["default"] = function (_Event) {
  _inherits(TouchEvent, _Event);
  var _super = _createSuper(TouchEvent);
  function TouchEvent(type) {
    var _this;
    _classCallCheck(this, TouchEvent);
    _this = _super.call(this, type);
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
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var fsm = ral.getFileSystemManager();
var _XMLHttpRequest = window.XMLHttpRequest;
window.ral = window.ral || {};
var XMLHttpRequest = exports["default"] = function (_XMLHttpRequestEventT) {
  _inherits(XMLHttpRequest, _XMLHttpRequestEventT);
  var _super = _createSuper(XMLHttpRequest);
  function XMLHttpRequest() {
    var _this;
    _classCallCheck(this, XMLHttpRequest);
    _this = _super.call(this, new _XMLHttpRequest());
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var XMLHttpRequestEventTarget = exports["default"] = function (_EventTarget) {
  _inherits(XMLHttpRequestEventTarget, _EventTarget);
  var _super = _createSuper(XMLHttpRequestEventTarget);
  function XMLHttpRequestEventTarget(xhr) {
    var _this;
    _classCallCheck(this, XMLHttpRequestEventTarget);
    _this = _super.call(this);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var AnalyserNode = function (_AudioNode) {
  _inherits(AnalyserNode, _AudioNode);
  var _super = _createSuper(AnalyserNode);
  function AnalyserNode(context, options) {
    var _this;
    _classCallCheck(this, AnalyserNode);
    _this = _super.call(this, context);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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
  var _super = _createSuper(AudioBufferSourceNode);
  function AudioBufferSourceNode(context, options) {
    var _this;
    _classCallCheck(this, AudioBufferSourceNode);
    _this = _super.call(this, context);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var AudioContext = function (_BaseAudioContext) {
  _inherits(AudioContext, _BaseAudioContext);
  var _super = _createSuper(AudioContext);
  function AudioContext(options) {
    var _this;
    _classCallCheck(this, AudioContext);
    _this = _super.call(this);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var AudioDestinationNode = function (_AudioNode) {
  _inherits(AudioDestinationNode, _AudioNode);
  var _super = _createSuper(AudioDestinationNode);
  function AudioDestinationNode(context) {
    var _this;
    _classCallCheck(this, AudioDestinationNode);
    _this = _super.call(this, context);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var AudioListener = function (_AudioNode) {
  _inherits(AudioListener, _AudioNode);
  var _super = _createSuper(AudioListener);
  function AudioListener(context) {
    var _this;
    _classCallCheck(this, AudioListener);
    _this = _super.call(this, context);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var AudioNode = function (_EventTarget) {
  _inherits(AudioNode, _EventTarget);
  var _super = _createSuper(AudioNode);
  function AudioNode(context) {
    var _this;
    _classCallCheck(this, AudioNode);
    _this = _super.call(this);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var AudioScheduledSourceNode = function (_AudioNode) {
  _inherits(AudioScheduledSourceNode, _AudioNode);
  var _super = _createSuper(AudioScheduledSourceNode);
  function AudioScheduledSourceNode(context) {
    _classCallCheck(this, AudioScheduledSourceNode);
    return _super.call(this, context);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var BaseAudioContext = function (_EventTarget) {
  _inherits(BaseAudioContext, _EventTarget);
  var _super = _createSuper(BaseAudioContext);
  function BaseAudioContext() {
    var _this;
    _classCallCheck(this, BaseAudioContext);
    _this = _super.call(this);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var DynamicsCompressorNode = function (_AudioNode) {
  _inherits(DynamicsCompressorNode, _AudioNode);
  var _super = _createSuper(DynamicsCompressorNode);
  function DynamicsCompressorNode(context) {
    var _this;
    _classCallCheck(this, DynamicsCompressorNode);
    _this = _super.call(this, context);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var GainNode = function (_AudioNode) {
  _inherits(GainNode, _AudioNode);
  var _super = _createSuper(GainNode);
  function GainNode(context, options) {
    var _this;
    _classCallCheck(this, GainNode);
    _this = _super.call(this, context);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var MediaElementAudioSourceNode = function (_AudioNode) {
  _inherits(MediaElementAudioSourceNode, _AudioNode);
  var _super = _createSuper(MediaElementAudioSourceNode);
  function MediaElementAudioSourceNode(context, options) {
    var _this;
    _classCallCheck(this, MediaElementAudioSourceNode);
    _this = _super.call(this, context);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var types = {
  "sine": 0,
  "square": 0,
  "sawtooth": 0,
  "triangle": 0,
  "custom": 0
};
var OscillatorNode = function (_AudioScheduledSource) {
  _inherits(OscillatorNode, _AudioScheduledSource);
  var _super = _createSuper(OscillatorNode);
  function OscillatorNode(context, options) {
    var _this;
    _classCallCheck(this, OscillatorNode);
    _this = _super.call(this);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var PannerNode = function (_AudioNode) {
  _inherits(PannerNode, _AudioNode);
  var _super = _createSuper(PannerNode);
  function PannerNode(context, options) {
    var _this;
    _classCallCheck(this, PannerNode);
    _this = _super.call(this, context);
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ3ZWItYWRhcHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG4hZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBlKGUpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBlO1xuICB9XG4gIHZhciB0ID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZXhwb3J0cyA/IGV4cG9ydHMgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6ICQuZ2xvYmFsLFxuICAgIHIgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCI7XG4gIGUucHJvdG90eXBlID0gbmV3IEVycm9yKCksIGUucHJvdG90eXBlLm5hbWUgPSBcIkludmFsaWRDaGFyYWN0ZXJFcnJvclwiLCB0LmJ0b2EgfHwgKHQuYnRvYSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgZm9yICh2YXIgbywgbiwgYSA9IFN0cmluZyh0KSwgaSA9IDAsIGYgPSByLCBjID0gXCJcIjsgYS5jaGFyQXQoMCB8IGkpIHx8IChmID0gXCI9XCIsIGkgJSAxKTsgYyArPSBmLmNoYXJBdCg2MyAmIG8gPj4gOCAtIGkgJSAxICogOCkpIHtcbiAgICAgIGlmIChuID0gYS5jaGFyQ29kZUF0KGkgKz0gLjc1KSwgbiA+IDI1NSkgdGhyb3cgbmV3IGUoXCInYnRvYScgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGVuY29kZWQgY29udGFpbnMgY2hhcmFjdGVycyBvdXRzaWRlIG9mIHRoZSBMYXRpbjEgcmFuZ2UuXCIpO1xuICAgICAgbyA9IG8gPDwgOCB8IG47XG4gICAgfVxuICAgIHJldHVybiBjO1xuICB9KSwgdC5hdG9iIHx8ICh0LmF0b2IgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBvID0gU3RyaW5nKHQpLnJlcGxhY2UoL1s9XSskLywgXCJcIik7XG4gICAgaWYgKG8ubGVuZ3RoICUgNCA9PSAxKSB0aHJvdyBuZXcgZShcIidhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpO1xuICAgIGZvciAodmFyIG4sIGEsIGkgPSAwLCBmID0gMCwgYyA9IFwiXCI7IGEgPSBvLmNoYXJBdChmKyspOyB+YSAmJiAobiA9IGkgJSA0ID8gNjQgKiBuICsgYSA6IGEsIGkrKyAlIDQpID8gYyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSAmIG4gPj4gKC0yICogaSAmIDYpKSA6IDApIGEgPSByLmluZGV4T2YoYSk7XG4gICAgcmV0dXJuIGM7XG4gIH0pO1xufSgpO1xuXG59LHt9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG4hZnVuY3Rpb24gKG4pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgZnVuY3Rpb24gdChuLCB0KSB7XG4gICAgdmFyIHIgPSAoNjU1MzUgJiBuKSArICg2NTUzNSAmIHQpO1xuICAgIHJldHVybiAobiA+PiAxNikgKyAodCA+PiAxNikgKyAociA+PiAxNikgPDwgMTYgfCA2NTUzNSAmIHI7XG4gIH1cbiAgZnVuY3Rpb24gcihuLCB0KSB7XG4gICAgcmV0dXJuIG4gPDwgdCB8IG4gPj4+IDMyIC0gdDtcbiAgfVxuICBmdW5jdGlvbiBlKG4sIGUsIG8sIHUsIGMsIGYpIHtcbiAgICByZXR1cm4gdChyKHQodChlLCBuKSwgdCh1LCBmKSksIGMpLCBvKTtcbiAgfVxuICBmdW5jdGlvbiBvKG4sIHQsIHIsIG8sIHUsIGMsIGYpIHtcbiAgICByZXR1cm4gZSh0ICYgciB8IH50ICYgbywgbiwgdCwgdSwgYywgZik7XG4gIH1cbiAgZnVuY3Rpb24gdShuLCB0LCByLCBvLCB1LCBjLCBmKSB7XG4gICAgcmV0dXJuIGUodCAmIG8gfCByICYgfm8sIG4sIHQsIHUsIGMsIGYpO1xuICB9XG4gIGZ1bmN0aW9uIGMobiwgdCwgciwgbywgdSwgYywgZikge1xuICAgIHJldHVybiBlKHQgXiByIF4gbywgbiwgdCwgdSwgYywgZik7XG4gIH1cbiAgZnVuY3Rpb24gZihuLCB0LCByLCBvLCB1LCBjLCBmKSB7XG4gICAgcmV0dXJuIGUociBeICh0IHwgfm8pLCBuLCB0LCB1LCBjLCBmKTtcbiAgfVxuICBmdW5jdGlvbiBpKG4sIHIpIHtcbiAgICBuW3IgPj4gNV0gfD0gMTI4IDw8IHIgJSAzMiwgblsxNCArIChyICsgNjQgPj4+IDkgPDwgNCldID0gcjtcbiAgICB2YXIgZSxcbiAgICAgIGksXG4gICAgICBhLFxuICAgICAgZCxcbiAgICAgIGgsXG4gICAgICBsID0gMTczMjU4NDE5MyxcbiAgICAgIGcgPSAtMjcxNzMzODc5LFxuICAgICAgdiA9IC0xNzMyNTg0MTk0LFxuICAgICAgbSA9IDI3MTczMzg3ODtcbiAgICBmb3IgKGUgPSAwOyBlIDwgbi5sZW5ndGg7IGUgKz0gMTYpIGkgPSBsLCBhID0gZywgZCA9IHYsIGggPSBtLCBnID0gZihnID0gZihnID0gZihnID0gZihnID0gYyhnID0gYyhnID0gYyhnID0gYyhnID0gdShnID0gdShnID0gdShnID0gdShnID0gbyhnID0gbyhnID0gbyhnID0gbyhnLCB2ID0gbyh2LCBtID0gbyhtLCBsID0gbyhsLCBnLCB2LCBtLCBuW2VdLCA3LCAtNjgwODc2OTM2KSwgZywgdiwgbltlICsgMV0sIDEyLCAtMzg5NTY0NTg2KSwgbCwgZywgbltlICsgMl0sIDE3LCA2MDYxMDU4MTkpLCBtLCBsLCBuW2UgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKSwgdiA9IG8odiwgbSA9IG8obSwgbCA9IG8obCwgZywgdiwgbSwgbltlICsgNF0sIDcsIC0xNzY0MTg4OTcpLCBnLCB2LCBuW2UgKyA1XSwgMTIsIDEyMDAwODA0MjYpLCBsLCBnLCBuW2UgKyA2XSwgMTcsIC0xNDczMjMxMzQxKSwgbSwgbCwgbltlICsgN10sIDIyLCAtNDU3MDU5ODMpLCB2ID0gbyh2LCBtID0gbyhtLCBsID0gbyhsLCBnLCB2LCBtLCBuW2UgKyA4XSwgNywgMTc3MDAzNTQxNiksIGcsIHYsIG5bZSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpLCBsLCBnLCBuW2UgKyAxMF0sIDE3LCAtNDIwNjMpLCBtLCBsLCBuW2UgKyAxMV0sIDIyLCAtMTk5MDQwNDE2MiksIHYgPSBvKHYsIG0gPSBvKG0sIGwgPSBvKGwsIGcsIHYsIG0sIG5bZSArIDEyXSwgNywgMTgwNDYwMzY4MiksIGcsIHYsIG5bZSArIDEzXSwgMTIsIC00MDM0MTEwMSksIGwsIGcsIG5bZSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKSwgbSwgbCwgbltlICsgMTVdLCAyMiwgMTIzNjUzNTMyOSksIHYgPSB1KHYsIG0gPSB1KG0sIGwgPSB1KGwsIGcsIHYsIG0sIG5bZSArIDFdLCA1LCAtMTY1Nzk2NTEwKSwgZywgdiwgbltlICsgNl0sIDksIC0xMDY5NTAxNjMyKSwgbCwgZywgbltlICsgMTFdLCAxNCwgNjQzNzE3NzEzKSwgbSwgbCwgbltlXSwgMjAsIC0zNzM4OTczMDIpLCB2ID0gdSh2LCBtID0gdShtLCBsID0gdShsLCBnLCB2LCBtLCBuW2UgKyA1XSwgNSwgLTcwMTU1ODY5MSksIGcsIHYsIG5bZSArIDEwXSwgOSwgMzgwMTYwODMpLCBsLCBnLCBuW2UgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KSwgbSwgbCwgbltlICsgNF0sIDIwLCAtNDA1NTM3ODQ4KSwgdiA9IHUodiwgbSA9IHUobSwgbCA9IHUobCwgZywgdiwgbSwgbltlICsgOV0sIDUsIDU2ODQ0NjQzOCksIGcsIHYsIG5bZSArIDE0XSwgOSwgLTEwMTk4MDM2OTApLCBsLCBnLCBuW2UgKyAzXSwgMTQsIC0xODczNjM5NjEpLCBtLCBsLCBuW2UgKyA4XSwgMjAsIDExNjM1MzE1MDEpLCB2ID0gdSh2LCBtID0gdShtLCBsID0gdShsLCBnLCB2LCBtLCBuW2UgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KSwgZywgdiwgbltlICsgMl0sIDksIC01MTQwMzc4NCksIGwsIGcsIG5bZSArIDddLCAxNCwgMTczNTMyODQ3MyksIG0sIGwsIG5bZSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KSwgdiA9IGModiwgbSA9IGMobSwgbCA9IGMobCwgZywgdiwgbSwgbltlICsgNV0sIDQsIC0zNzg1NTgpLCBnLCB2LCBuW2UgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKSwgbCwgZywgbltlICsgMTFdLCAxNiwgMTgzOTAzMDU2MiksIG0sIGwsIG5bZSArIDE0XSwgMjMsIC0zNTMwOTU1NiksIHYgPSBjKHYsIG0gPSBjKG0sIGwgPSBjKGwsIGcsIHYsIG0sIG5bZSArIDFdLCA0LCAtMTUzMDk5MjA2MCksIGcsIHYsIG5bZSArIDRdLCAxMSwgMTI3Mjg5MzM1MyksIGwsIGcsIG5bZSArIDddLCAxNiwgLTE1NTQ5NzYzMiksIG0sIGwsIG5bZSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKSwgdiA9IGModiwgbSA9IGMobSwgbCA9IGMobCwgZywgdiwgbSwgbltlICsgMTNdLCA0LCA2ODEyNzkxNzQpLCBnLCB2LCBuW2VdLCAxMSwgLTM1ODUzNzIyMiksIGwsIGcsIG5bZSArIDNdLCAxNiwgLTcyMjUyMTk3OSksIG0sIGwsIG5bZSArIDZdLCAyMywgNzYwMjkxODkpLCB2ID0gYyh2LCBtID0gYyhtLCBsID0gYyhsLCBnLCB2LCBtLCBuW2UgKyA5XSwgNCwgLTY0MDM2NDQ4NyksIGcsIHYsIG5bZSArIDEyXSwgMTEsIC00MjE4MTU4MzUpLCBsLCBnLCBuW2UgKyAxNV0sIDE2LCA1MzA3NDI1MjApLCBtLCBsLCBuW2UgKyAyXSwgMjMsIC05OTUzMzg2NTEpLCB2ID0gZih2LCBtID0gZihtLCBsID0gZihsLCBnLCB2LCBtLCBuW2VdLCA2LCAtMTk4NjMwODQ0KSwgZywgdiwgbltlICsgN10sIDEwLCAxMTI2ODkxNDE1KSwgbCwgZywgbltlICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpLCBtLCBsLCBuW2UgKyA1XSwgMjEsIC01NzQzNDA1NSksIHYgPSBmKHYsIG0gPSBmKG0sIGwgPSBmKGwsIGcsIHYsIG0sIG5bZSArIDEyXSwgNiwgMTcwMDQ4NTU3MSksIGcsIHYsIG5bZSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpLCBsLCBnLCBuW2UgKyAxMF0sIDE1LCAtMTA1MTUyMyksIG0sIGwsIG5bZSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpLCB2ID0gZih2LCBtID0gZihtLCBsID0gZihsLCBnLCB2LCBtLCBuW2UgKyA4XSwgNiwgMTg3MzMxMzM1OSksIGcsIHYsIG5bZSArIDE1XSwgMTAsIC0zMDYxMTc0NCksIGwsIGcsIG5bZSArIDZdLCAxNSwgLTE1NjAxOTgzODApLCBtLCBsLCBuW2UgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KSwgdiA9IGYodiwgbSA9IGYobSwgbCA9IGYobCwgZywgdiwgbSwgbltlICsgNF0sIDYsIC0xNDU1MjMwNzApLCBnLCB2LCBuW2UgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSksIGwsIGcsIG5bZSArIDJdLCAxNSwgNzE4Nzg3MjU5KSwgbSwgbCwgbltlICsgOV0sIDIxLCAtMzQzNDg1NTUxKSwgbCA9IHQobCwgaSksIGcgPSB0KGcsIGEpLCB2ID0gdCh2LCBkKSwgbSA9IHQobSwgaCk7XG4gICAgcmV0dXJuIFtsLCBnLCB2LCBtXTtcbiAgfVxuICBmdW5jdGlvbiBhKG4pIHtcbiAgICB2YXIgdCxcbiAgICAgIHIgPSBcIlwiLFxuICAgICAgZSA9IDMyICogbi5sZW5ndGg7XG4gICAgZm9yICh0ID0gMDsgdCA8IGU7IHQgKz0gOCkgciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5bdCA+PiA1XSA+Pj4gdCAlIDMyICYgMjU1KTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBmdW5jdGlvbiBkKG4pIHtcbiAgICB2YXIgdCxcbiAgICAgIHIgPSBbXTtcbiAgICBmb3IgKHJbKG4ubGVuZ3RoID4+IDIpIC0gMV0gPSB2b2lkIDAsIHQgPSAwOyB0IDwgci5sZW5ndGg7IHQgKz0gMSkgclt0XSA9IDA7XG4gICAgdmFyIGUgPSA4ICogbi5sZW5ndGg7XG4gICAgZm9yICh0ID0gMDsgdCA8IGU7IHQgKz0gOCkgclt0ID4+IDVdIHw9ICgyNTUgJiBuLmNoYXJDb2RlQXQodCAvIDgpKSA8PCB0ICUgMzI7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgZnVuY3Rpb24gaChuKSB7XG4gICAgcmV0dXJuIGEoaShkKG4pLCA4ICogbi5sZW5ndGgpKTtcbiAgfVxuICBmdW5jdGlvbiBsKG4sIHQpIHtcbiAgICB2YXIgcixcbiAgICAgIGUsXG4gICAgICBvID0gZChuKSxcbiAgICAgIHUgPSBbXSxcbiAgICAgIGMgPSBbXTtcbiAgICBmb3IgKHVbMTVdID0gY1sxNV0gPSB2b2lkIDAsIG8ubGVuZ3RoID4gMTYgJiYgKG8gPSBpKG8sIDggKiBuLmxlbmd0aCkpLCByID0gMDsgciA8IDE2OyByICs9IDEpIHVbcl0gPSA5MDk1MjI0ODYgXiBvW3JdLCBjW3JdID0gMTU0OTU1NjgyOCBeIG9bcl07XG4gICAgcmV0dXJuIGUgPSBpKHUuY29uY2F0KGQodCkpLCA1MTIgKyA4ICogdC5sZW5ndGgpLCBhKGkoYy5jb25jYXQoZSksIDY0MCkpO1xuICB9XG4gIGZ1bmN0aW9uIGcobikge1xuICAgIHZhciB0LFxuICAgICAgcixcbiAgICAgIGUgPSBcIlwiO1xuICAgIGZvciAociA9IDA7IHIgPCBuLmxlbmd0aDsgciArPSAxKSB0ID0gbi5jaGFyQ29kZUF0KHIpLCBlICs9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiLmNoYXJBdCh0ID4+PiA0ICYgMTUpICsgXCIwMTIzNDU2Nzg5YWJjZGVmXCIuY2hhckF0KDE1ICYgdCk7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgZnVuY3Rpb24gdihuKSB7XG4gICAgcmV0dXJuIHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChuKSk7XG4gIH1cbiAgZnVuY3Rpb24gbShuKSB7XG4gICAgcmV0dXJuIGgodihuKSk7XG4gIH1cbiAgZnVuY3Rpb24gcChuKSB7XG4gICAgcmV0dXJuIGcobShuKSk7XG4gIH1cbiAgZnVuY3Rpb24gcyhuLCB0KSB7XG4gICAgcmV0dXJuIGwodihuKSwgdih0KSk7XG4gIH1cbiAgZnVuY3Rpb24gQyhuLCB0KSB7XG4gICAgcmV0dXJuIGcocyhuLCB0KSk7XG4gIH1cbiAgZnVuY3Rpb24gQShuLCB0LCByKSB7XG4gICAgcmV0dXJuIHQgPyByID8gcyh0LCBuKSA6IEModCwgbikgOiByID8gbShuKSA6IHAobik7XG4gIH1cbiAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEE7XG4gIH0pIDogXCJvYmplY3RcIiA9PSAodHlwZW9mIG1vZHVsZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG1vZHVsZSkpICYmIG1vZHVsZS5leHBvcnRzID8gbW9kdWxlLmV4cG9ydHMgPSBBIDogbi5tZDUgPSBBO1xufSh2b2lkIDApO1xuXG59LHt9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgYXJyYXlidWZmZXJUb1N0cmluZzogZnVuY3Rpb24gYXJyYXlidWZmZXJUb1N0cmluZyhhcnJheUJ1ZmZlcikge1xuICAgIHZhciBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG4gICAgdmFyIHN0ciA9IFtdO1xuICAgIHN0ci5sZW5ndGggPSBieXRlQXJyYXkubGVuZ3RoO1xuICAgIHZhciBjdXJyZW50U3RySW5kZXggPSAwO1xuICAgIHZhciBjdXJyZW5TdHJDb2RlID0gMDtcbiAgICB2YXIgZmlyc3RCeXRlQ29kZSA9IDA7XG4gICAgdmFyIGFycmF5TGVuZ3RoID0gYnl0ZUFycmF5Lmxlbmd0aDtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGZpcnN0Qnl0ZUNvZGUgPSBieXRlQXJyYXlbaW5kZXhdO1xuICAgICAgaWYgKGZpcnN0Qnl0ZUNvZGUgPiAyNTEgJiYgZmlyc3RCeXRlQ29kZSA8IDI1NCAmJiBpbmRleCArIDUgPCBhcnJheUxlbmd0aCkge1xuICAgICAgICBjdXJyZW5TdHJDb2RlID0gKGZpcnN0Qnl0ZUNvZGUgLSAyNTIpICogMTA3Mzc0MTgyNCArIChieXRlQXJyYXlbKytpbmRleF0gLSAxMjggPDwgMjQpICsgKGJ5dGVBcnJheVsrK2luZGV4XSAtIDEyOCA8PCAxOCkgKyAoYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4IDw8IDEyKSArIChieXRlQXJyYXlbKytpbmRleF0gLSAxMjggPDwgNikgKyBieXRlQXJyYXlbKytpbmRleF0gLSAxMjg7XG4gICAgICB9IGVsc2UgaWYgKGZpcnN0Qnl0ZUNvZGUgPiAyNDcgJiYgZmlyc3RCeXRlQ29kZSA8IDI1MiAmJiBpbmRleCArIDQgPCBhcnJheUxlbmd0aCkge1xuICAgICAgICBjdXJyZW5TdHJDb2RlID0gKGZpcnN0Qnl0ZUNvZGUgLSAyNDggPDwgMjQpICsgKGJ5dGVBcnJheVsrK2luZGV4XSAtIDEyOCA8PCAxOCkgKyAoYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4IDw8IDEyKSArIChieXRlQXJyYXlbKytpbmRleF0gLSAxMjggPDwgNikgKyBieXRlQXJyYXlbKytpbmRleF0gLSAxMjg7XG4gICAgICB9IGVsc2UgaWYgKGZpcnN0Qnl0ZUNvZGUgPiAyMzkgJiYgZmlyc3RCeXRlQ29kZSA8IDI0OCAmJiBpbmRleCArIDMgPCBhcnJheUxlbmd0aCkge1xuICAgICAgICBjdXJyZW5TdHJDb2RlID0gKGZpcnN0Qnl0ZUNvZGUgLSAyNDAgPDwgMTgpICsgKGJ5dGVBcnJheVsrK2luZGV4XSAtIDEyOCA8PCAxMikgKyAoYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4IDw8IDYpICsgYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4O1xuICAgICAgfSBlbHNlIGlmIChmaXJzdEJ5dGVDb2RlID4gMjIzICYmIGZpcnN0Qnl0ZUNvZGUgPCAyNDAgJiYgaW5kZXggKyAyIDwgYXJyYXlMZW5ndGgpIHtcbiAgICAgICAgY3VycmVuU3RyQ29kZSA9IChmaXJzdEJ5dGVDb2RlIC0gMjI0IDw8IDEyKSArIChieXRlQXJyYXlbKytpbmRleF0gLSAxMjggPDwgNikgKyBieXRlQXJyYXlbKytpbmRleF0gLSAxMjg7XG4gICAgICB9IGVsc2UgaWYgKGZpcnN0Qnl0ZUNvZGUgPiAxOTEgJiYgZmlyc3RCeXRlQ29kZSA8IDIyNCAmJiBpbmRleCArIDEgPCBhcnJheUxlbmd0aCkge1xuICAgICAgICBjdXJyZW5TdHJDb2RlID0gKGZpcnN0Qnl0ZUNvZGUgLSAxOTIgPDwgNikgKyBieXRlQXJyYXlbKytpbmRleF0gLSAxMjg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW5TdHJDb2RlID0gZmlyc3RCeXRlQ29kZTtcbiAgICAgIH1cbiAgICAgIHN0cltjdXJyZW50U3RySW5kZXgrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGN1cnJlblN0ckNvZGUpO1xuICAgIH1cbiAgICBzdHIubGVuZ3RoID0gY3VycmVudFN0ckluZGV4O1xuICAgIHJldHVybiBzdHIuam9pbignJyk7XG4gIH0sXG4gIHN0cmluZ1RvQXJyYXlidWZmZXI6IGZ1bmN0aW9uIHN0cmluZ1RvQXJyYXlidWZmZXIoc3RyaW5nKSB7XG4gICAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gICAgdmFyIGJ5dGVBcnJheSA9IG5ldyBBcnJheSg2ICogbGVuZ3RoKTtcbiAgICB2YXIgYWN0dWFsTGVuZ3RoID0gMDtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgIGlmIChjb2RlIDwgMHg4MCkge1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gY29kZTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ODAwKSB7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxOTIgKyAoY29kZSA+Pj4gNik7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSAmIDYzKTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4MTAwMDApIHtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDIyNCArIChjb2RlID4+PiAxMik7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSA+Pj4gNiAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlICYgNjMpO1xuICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHgyMDAwMDApIHtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDI0MCArIChjb2RlID4+PiAxOCk7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSA+Pj4gMTIgJiA2Myk7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSA+Pj4gNiAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlICYgNjMpO1xuICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHg0MDAwMDAwKSB7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAyNDggKyAoY29kZSA+Pj4gMjQpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgPj4+IDE4ICYgNjMpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgPj4+IDEyICYgNjMpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgPj4+IDYgJiA2Myk7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSAmIDYzKTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4NDAwMDAwMCkge1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMjUyICsgKGNvZGUgPj4+IDMwKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlID4+PiAyNCAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlID4+PiAxOCAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlID4+PiAxMiAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlID4+PiA2ICYgNjMpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgJiA2Myk7XG4gICAgICB9XG4gICAgfVxuICAgIGJ5dGVBcnJheS5sZW5ndGggPSBhY3R1YWxMZW5ndGg7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ5dGVBcnJheSkuYnVmZmVyO1xuICB9LFxuICBmb3JtYXRKc29uU3RyOiBmdW5jdGlvbiBmb3JtYXRKc29uU3RyKHN0cikge1xuICAgIGlmICghc3RyKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHZhciBjb25mID0gSlNPTi5wYXJzZShzdHIpO1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29uZik7XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICBpZiAoY29uZlt2XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgY29uZlt2XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY29uZjtcbiAgfVxufTtcblxufSx7fV0sNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9IVE1MQXVkaW9FbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEF1ZGlvRWxlbWVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbnZhciBBdWRpbyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9IVE1MQXVkaW9FbGVtZW50KSB7XG4gIF9pbmhlcml0cyhBdWRpbywgX0hUTUxBdWRpb0VsZW1lbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEF1ZGlvKTtcbiAgZnVuY3Rpb24gQXVkaW8odXJsKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1ZGlvKTtcbiAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgdXJsKTtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEF1ZGlvKTtcbn0oX0hUTUxBdWRpb0VsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9IVE1MQXVkaW9FbGVtZW50XCI6MTV9XSw1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAoZ2xvYmFsKXsoZnVuY3Rpb24gKCl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbihmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIChmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgZGVmaW5lKFtcImV4cG9ydHNcIl0sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBleHBvcnRzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZXhwb3J0cykpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBleHBvcnRzLm5vZGVOYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICBmYWN0b3J5KGV4cG9ydHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmYWN0b3J5KGdsb2JhbCk7XG4gICAgfVxuICB9KShmdW5jdGlvbiAoZXhwb3J0cykge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgZXhwb3J0cy5VUkwgPSBnbG9iYWwuVVJMIHx8IGdsb2JhbC53ZWJraXRVUkw7XG4gICAgaWYgKGdsb2JhbC5CbG9iICYmIGdsb2JhbC5VUkwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIHZhciBCbG9iQnVpbGRlciA9IGdsb2JhbC5CbG9iQnVpbGRlciB8fCBnbG9iYWwuV2ViS2l0QmxvYkJ1aWxkZXIgfHwgZ2xvYmFsLk1vekJsb2JCdWlsZGVyIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBnZXRfY2xhc3MgPSBmdW5jdGlvbiBnZXRfY2xhc3Mob2JqZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpLm1hdGNoKC9eXFxbb2JqZWN0XFxzKC4qKVxcXSQvKVsxXTtcbiAgICAgICAgfSxcbiAgICAgICAgRmFrZUJsb2JCdWlsZGVyID0gZnVuY3Rpb24gQmxvYkJ1aWxkZXIoKSB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgICAgdGhpcy5fYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgRmFrZUJsb2IgPSBmdW5jdGlvbiBCbG9iKGRhdGEsIHR5cGUsIGVuY29kaW5nKSB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgICB0aGlzLnNpemUgPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICAgIHRoaXMuZW5jb2RpbmcgPSBlbmNvZGluZztcbiAgICAgICAgICB0aGlzLl9hcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcigpO1xuICAgICAgICB9LFxuICAgICAgICBGQkJfcHJvdG8gPSBGYWtlQmxvYkJ1aWxkZXIucHJvdG90eXBlLFxuICAgICAgICBGQl9wcm90byA9IEZha2VCbG9iLnByb3RvdHlwZSxcbiAgICAgICAgRmlsZVJlYWRlclN5bmMgPSBnbG9iYWwuRmlsZVJlYWRlclN5bmMsXG4gICAgICAgIEZpbGVFeGNlcHRpb24gPSBmdW5jdGlvbiBGaWxlRXhjZXB0aW9uKHR5cGUpIHtcbiAgICAgICAgICB0aGlzLmNvZGUgPSB0aGlzW3RoaXMubmFtZSA9IHR5cGVdO1xuICAgICAgICB9LFxuICAgICAgICBmaWxlX2V4X2NvZGVzID0gKFwiTk9UX0ZPVU5EX0VSUiBTRUNVUklUWV9FUlIgQUJPUlRfRVJSIE5PVF9SRUFEQUJMRV9FUlIgRU5DT0RJTkdfRVJSIFwiICsgXCJOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlIgSU5WQUxJRF9TVEFURV9FUlIgU1lOVEFYX0VSUlwiKS5zcGxpdChcIiBcIiksXG4gICAgICAgIGZpbGVfZXhfY29kZSA9IGZpbGVfZXhfY29kZXMubGVuZ3RoLFxuICAgICAgICByZWFsX1VSTCA9IGdsb2JhbC5VUkwgfHwgZ2xvYmFsLndlYmtpdFVSTCB8fCBleHBvcnRzLFxuICAgICAgICByZWFsX2NyZWF0ZV9vYmplY3RfVVJMID0gcmVhbF9VUkwuY3JlYXRlT2JqZWN0VVJMLFxuICAgICAgICByZWFsX3Jldm9rZV9vYmplY3RfVVJMID0gcmVhbF9VUkwucmV2b2tlT2JqZWN0VVJMLFxuICAgICAgICBVUkwgPSByZWFsX1VSTCxcbiAgICAgICAgYnRvYSA9IGdsb2JhbC5idG9hLFxuICAgICAgICBhdG9iID0gZ2xvYmFsLmF0b2IsXG4gICAgICAgIEFycmF5QnVmZmVyID0gZ2xvYmFsLkFycmF5QnVmZmVyLFxuICAgICAgICBVaW50OEFycmF5ID0gZ2xvYmFsLlVpbnQ4QXJyYXksXG4gICAgICAgIG9yaWdpbiA9IC9eW1xcdy1dKzpcXC8qXFxbP1tcXHdcXC46LV0rXFxdPyg/OjpbMC05XSspPy87XG4gICAgICBGYWtlQmxvYi5mYWtlID0gRkJfcHJvdG8uZmFrZSA9IHRydWU7XG4gICAgICB3aGlsZSAoZmlsZV9leF9jb2RlLS0pIHtcbiAgICAgICAgRmlsZUV4Y2VwdGlvbi5wcm90b3R5cGVbZmlsZV9leF9jb2Rlc1tmaWxlX2V4X2NvZGVdXSA9IGZpbGVfZXhfY29kZSArIDE7XG4gICAgICB9XG4gICAgICBpZiAoIXJlYWxfVVJMLmNyZWF0ZU9iamVjdFVSTCkge1xuICAgICAgICBVUkwgPSBleHBvcnRzLlVSTCA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICAgICAgICB2YXIgdXJpX2luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsIFwiYVwiKSxcbiAgICAgICAgICAgIHVyaV9vcmlnaW47XG4gICAgICAgICAgdXJpX2luZm8uaHJlZiA9IHVyaTtcbiAgICAgICAgICBpZiAoIShcIm9yaWdpblwiIGluIHVyaV9pbmZvKSkge1xuICAgICAgICAgICAgaWYgKHVyaV9pbmZvLnByb3RvY29sLnRvTG93ZXJDYXNlKCkgPT09IFwiZGF0YTpcIikge1xuICAgICAgICAgICAgICB1cmlfaW5mby5vcmlnaW4gPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXJpX29yaWdpbiA9IHVyaS5tYXRjaChvcmlnaW4pO1xuICAgICAgICAgICAgICB1cmlfaW5mby5vcmlnaW4gPSB1cmlfb3JpZ2luICYmIHVyaV9vcmlnaW5bMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB1cmlfaW5mbztcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIFVSTC5jcmVhdGVPYmplY3RVUkwgPSBmdW5jdGlvbiAoYmxvYikge1xuICAgICAgICB2YXIgdHlwZSA9IGJsb2IudHlwZSxcbiAgICAgICAgICBkYXRhX1VSSV9oZWFkZXI7XG4gICAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgICAgdHlwZSA9IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJsb2IgaW5zdGFuY2VvZiBGYWtlQmxvYikge1xuICAgICAgICAgIGRhdGFfVVJJX2hlYWRlciA9IFwiZGF0YTpcIiArIHR5cGU7XG4gICAgICAgICAgaWYgKGJsb2IuZW5jb2RpbmcgPT09IFwiYmFzZTY0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhX1VSSV9oZWFkZXIgKyBcIjtiYXNlNjQsXCIgKyBibG9iLmRhdGE7XG4gICAgICAgICAgfSBlbHNlIGlmIChibG9iLmVuY29kaW5nID09PSBcIlVSSVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YV9VUklfaGVhZGVyICsgXCIsXCIgKyBkZWNvZGVVUklDb21wb25lbnQoYmxvYi5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJ0b2EpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhX1VSSV9oZWFkZXIgKyBcIjtiYXNlNjQsXCIgKyBidG9hKGJsb2IuZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhX1VSSV9oZWFkZXIgKyBcIixcIiArIGVuY29kZVVSSUNvbXBvbmVudChibG9iLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZWFsX2NyZWF0ZV9vYmplY3RfVVJMKSB7XG4gICAgICAgICAgcmV0dXJuIHJlYWxfY3JlYXRlX29iamVjdF9VUkwuY2FsbChyZWFsX1VSTCwgYmxvYik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBVUkwucmV2b2tlT2JqZWN0VVJMID0gZnVuY3Rpb24gKG9iamVjdF9VUkwpIHtcbiAgICAgICAgaWYgKG9iamVjdF9VUkwuc3Vic3RyaW5nKDAsIDUpICE9PSBcImRhdGE6XCIgJiYgcmVhbF9yZXZva2Vfb2JqZWN0X1VSTCkge1xuICAgICAgICAgIHJlYWxfcmV2b2tlX29iamVjdF9VUkwuY2FsbChyZWFsX1VSTCwgb2JqZWN0X1VSTCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBGQkJfcHJvdG8uYXBwZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIGJiID0gdGhpcy5kYXRhO1xuICAgICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgdmFyIHN0ciA9IFwiXCIsXG4gICAgICAgICAgICBidWYgPSBuZXcgVWludDhBcnJheShkYXRhKSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgYnVmX2xlbiA9IGJ1Zi5sZW5ndGg7XG4gICAgICAgICAgZm9yICg7IGkgPCBidWZfbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJiLnB1c2goc3RyKTtcbiAgICAgICAgICB0aGlzLl9hcnJheUJ1ZmZlciA9IGRhdGEuc2xpY2UoMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2V0X2NsYXNzKGRhdGEpID09PSBcIkJsb2JcIiB8fCBnZXRfY2xhc3MoZGF0YSkgPT09IFwiRmlsZVwiKSB7XG4gICAgICAgICAgaWYgKEZpbGVSZWFkZXJTeW5jKSB7XG4gICAgICAgICAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlclN5bmMoKTtcbiAgICAgICAgICAgIGJiLnB1c2goZnIucmVhZEFzQmluYXJ5U3RyaW5nKGRhdGEpKTtcbiAgICAgICAgICAgIHRoaXMuX2FycmF5QnVmZmVyID0gZGF0YS5hcnJheUJ1ZmZlcigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRmlsZUV4Y2VwdGlvbihcIk5PVF9SRUFEQUJMRV9FUlJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBGYWtlQmxvYikge1xuICAgICAgICAgIGlmIChkYXRhLmVuY29kaW5nID09PSBcImJhc2U2NFwiICYmIGF0b2IpIHtcbiAgICAgICAgICAgIGJiLnB1c2goYXRvYihkYXRhLmRhdGEpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZW5jb2RpbmcgPT09IFwiVVJJXCIpIHtcbiAgICAgICAgICAgIGJiLnB1c2goZGVjb2RlVVJJQ29tcG9uZW50KGRhdGEuZGF0YSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5lbmNvZGluZyA9PT0gXCJyYXdcIikge1xuICAgICAgICAgICAgYmIucHVzaChkYXRhLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9hcnJheUJ1ZmZlciA9IGRhdGEuX2FycmF5QnVmZmVyLnNsaWNlKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZGF0YSArPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBiYi5wdXNoKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChkYXRhKSkpO1xuICAgICAgICAgIHRoaXMuX2FycmF5QnVmZmVyID0gX3V0aWxbXCJkZWZhdWx0XCJdLnN0cmluZ1RvQXJyYXlidWZmZXIoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIEZCQl9wcm90by5nZXRCbG9iID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgdHlwZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJsb2IgPSBuZXcgRmFrZUJsb2IodGhpcy5kYXRhLmpvaW4oXCJcIiksIHR5cGUsIFwicmF3XCIpO1xuICAgICAgICBibG9iLl9hcnJheUJ1ZmZlciA9IHRoaXMuX2FycmF5QnVmZmVyO1xuICAgICAgICByZXR1cm4gYmxvYjtcbiAgICAgIH07XG4gICAgICBGQkJfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIltvYmplY3QgQmxvYkJ1aWxkZXJdXCI7XG4gICAgICB9O1xuICAgICAgRkJfcHJvdG8uc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCwgdHlwZSkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGlmIChhcmdzIDwgMykge1xuICAgICAgICAgIHR5cGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBibG9iID0gbmV3IEZha2VCbG9iKHRoaXMuZGF0YS5zbGljZShzdGFydCwgYXJncyA+IDEgPyBlbmQgOiB0aGlzLmRhdGEubGVuZ3RoKSwgdHlwZSwgdGhpcy5lbmNvZGluZyk7XG4gICAgICAgIHZhciBhcnJheUJ1ZmZlciA9IHRoaXMuX2FycmF5QnVmZmVyO1xuICAgICAgICBpZiAoYXJyYXlCdWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIGJsb2IuX2FycmF5QnVmZmVyID0gdGhpcy5fYXJyYXlCdWZmZXIuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJsb2I7XG4gICAgICB9O1xuICAgICAgRkJfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIltvYmplY3QgQmxvYl1cIjtcbiAgICAgIH07XG4gICAgICBGQl9wcm90by5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgIH07XG4gICAgICBGQl9wcm90by5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5QnVmZmVyLnNsaWNlKDApO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBGYWtlQmxvYkJ1aWxkZXI7XG4gICAgfSgpO1xuICAgIGV4cG9ydHMuQmxvYiA9IGZ1bmN0aW9uIChibG9iUGFydHMsIG9wdGlvbnMpIHtcbiAgICAgIHZhciB0eXBlID0gb3B0aW9ucyA/IG9wdGlvbnMudHlwZSB8fCBcIlwiIDogXCJcIjtcbiAgICAgIHZhciBidWlsZGVyID0gbmV3IEJsb2JCdWlsZGVyKCk7XG4gICAgICBpZiAoYmxvYlBhcnRzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBibG9iUGFydHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBpZiAoVWludDhBcnJheSAmJiBibG9iUGFydHNbaV0gaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBidWlsZGVyLmFwcGVuZChibG9iUGFydHNbaV0uYnVmZmVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVpbGRlci5hcHBlbmQoYmxvYlBhcnRzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBibG9iID0gYnVpbGRlci5nZXRCbG9iKHR5cGUpO1xuICAgICAgaWYgKCFibG9iLnNsaWNlICYmIGJsb2Iud2Via2l0U2xpY2UpIHtcbiAgICAgICAgYmxvYi5zbGljZSA9IGJsb2Iud2Via2l0U2xpY2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gYmxvYjtcbiAgICB9O1xuICAgIHZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICByZXR1cm4gb2JqZWN0Ll9fcHJvdG9fXztcbiAgICB9O1xuICAgIGV4cG9ydHMuQmxvYi5wcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihuZXcgZXhwb3J0cy5CbG9iKCkpO1xuICB9KTtcbn0pKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYgfHwgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cgfHwgdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwgfHwgKHZvaWQgMCkuY29udGVudCB8fCB2b2lkIDApO1xuXG59KS5jYWxsKHRoaXMpfSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG59LHtcIi4uL3V0aWxcIjozfV0sNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgRE9NVG9rZW5MaXN0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERPTVRva2VuTGlzdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRE9NVG9rZW5MaXN0KTtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKERPTVRva2VuTGlzdCwgW3tcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCBhZGQgaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb250YWluc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb250YWlucygpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCBjb250YWlucyBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVudHJpZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW50cmllcygpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCBlbnRyaWVzIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9yRWFjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JFYWNoKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IGZvckVhY2ggaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpdGVtXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGl0ZW0oKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3QgaXRlbSBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImtleXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCBrZXlzIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCByZW1vdmUgaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXBsYWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGxhY2UoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3QgcmVwbGFjZSBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN1cHBvcnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1cHBvcnRzKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IHN1cHBvcnRzIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidG9nZ2xlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3QgdmFsdWUgaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWVzKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IHZhbHVlcyBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBET01Ub2tlbkxpc3Q7XG59KCk7XG5cbn0se31dLDc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbnZhciBEZXZpY2VNb3Rpb25FdmVudCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9FdmVudCkge1xuICBfaW5oZXJpdHMoRGV2aWNlTW90aW9uRXZlbnQsIF9FdmVudCk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRGV2aWNlTW90aW9uRXZlbnQpO1xuICBmdW5jdGlvbiBEZXZpY2VNb3Rpb25FdmVudChpbml0QXJncykge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGV2aWNlTW90aW9uRXZlbnQpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgJ2RldmljZW1vdGlvbicpO1xuICAgIGlmIChpbml0QXJncykge1xuICAgICAgX3RoaXMuX2FjY2VsZXJhdGlvbiA9IGluaXRBcmdzLmFjY2VsZXJhdGlvbiA/IGluaXRBcmdzLmFjY2VsZXJhdGlvbiA6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMFxuICAgICAgfTtcbiAgICAgIF90aGlzLl9hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5ID0gaW5pdEFyZ3MuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eSA/IGluaXRBcmdzLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkgOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDBcbiAgICAgIH07XG4gICAgICBfdGhpcy5fcm90YXRpb25SYXRlID0gaW5pdEFyZ3Mucm90YXRpb25SYXRlID8gaW5pdEFyZ3Mucm90YXRpb25SYXRlIDoge1xuICAgICAgICBhbHBoYTogMCxcbiAgICAgICAgYmV0YTogMCxcbiAgICAgICAgZ2FtbWE6IDBcbiAgICAgIH07XG4gICAgICBfdGhpcy5faW50ZXJ2YWwgPSBpbml0QXJncy5pbnRlcnZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMuX2FjY2VsZXJhdGlvbiA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMFxuICAgICAgfTtcbiAgICAgIF90aGlzLl9hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5ID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB6OiAwXG4gICAgICB9O1xuICAgICAgX3RoaXMuX3JvdGF0aW9uUmF0ZSA9IHtcbiAgICAgICAgYWxwaGE6IDAsXG4gICAgICAgIGJldGE6IDAsXG4gICAgICAgIGdhbW1hOiAwXG4gICAgICB9O1xuICAgICAgX3RoaXMuX2ludGVydmFsID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhEZXZpY2VNb3Rpb25FdmVudCwgW3tcbiAgICBrZXk6IFwiYWNjZWxlcmF0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWNjZWxlcmF0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicm90YXRpb25SYXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcm90YXRpb25SYXRlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbnRlcnZhbFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ludGVydmFsO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRGV2aWNlTW90aW9uRXZlbnQ7XG59KF9FdmVudDJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0V2ZW50XCI6MTB9XSw4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0F1ZGlvID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb1wiKSk7XG52YXIgX0ZvbnRGYWNlU2V0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb250RmFjZVNldFwiKSk7XG52YXIgX05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ob2RlXCIpKTtcbnZhciBfTm9kZUxpc3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05vZGVMaXN0XCIpKTtcbnZhciBfSFRNTEFuY2hvckVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxBbmNob3JFbGVtZW50XCIpKTtcbnZhciBfSFRNTEVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcbnZhciBfSFRNTEh0bWxFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MSHRtbEVsZW1lbnRcIikpO1xudmFyIF9IVE1MQm9keUVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxCb2R5RWxlbWVudFwiKSk7XG52YXIgX0hUTUxIZWFkRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEhlYWRFbGVtZW50XCIpKTtcbnZhciBfSFRNTENhbnZhc0VsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxDYW52YXNFbGVtZW50XCIpKTtcbnZhciBfSFRNTFZpZGVvRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTFZpZGVvRWxlbWVudFwiKSk7XG52YXIgX0hUTUxTY3JpcHRFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MU2NyaXB0RWxlbWVudFwiKSk7XG52YXIgX0hUTUxTdHlsZUVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxTdHlsZUVsZW1lbnRcIikpO1xudmFyIF9IVE1MSW5wdXRFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MSW5wdXRFbGVtZW50XCIpKTtcbnZhciBfV2Vha01hcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9XZWFrTWFwXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2dldCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCk7IH0gZWxzZSB7IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7IGlmICghYmFzZSkgcmV0dXJuOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpOyBpZiAoZGVzYy5nZXQpIHsgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7IH0gcmV0dXJuIGRlc2MudmFsdWU7IH07IH0gcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkgeyB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkgeyBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7IH0gcmV0dXJuIG9iamVjdDsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbnZhciBfaHRtbCA9IG5ldyBfSFRNTEh0bWxFbGVtZW50W1wiZGVmYXVsdFwiXSgpO1xudmFyIERvY3VtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX05vZGUpIHtcbiAgX2luaGVyaXRzKERvY3VtZW50LCBfTm9kZSk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRG9jdW1lbnQpO1xuICBmdW5jdGlvbiBEb2N1bWVudCgpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERvY3VtZW50KTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJoZWFkXCIsIG5ldyBfSFRNTEhlYWRFbGVtZW50W1wiZGVmYXVsdFwiXShfaHRtbCkpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJib2R5XCIsIG5ldyBfSFRNTEJvZHlFbGVtZW50W1wiZGVmYXVsdFwiXShfaHRtbCkpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJmb250c1wiLCBuZXcgX0ZvbnRGYWNlU2V0W1wiZGVmYXVsdFwiXSgpKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY29va2llXCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJkb2N1bWVudEVsZW1lbnRcIiwgX2h0bWwpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZWFkeVN0YXRlXCIsIFwiY29tcGxldGVcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInZpc2liaWxpdHlTdGF0ZVwiLCBcInZpc2libGVcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImhpZGRlblwiLCBmYWxzZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0eWxlXCIsIHt9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibG9jYXRpb25cIiwgd2luZG93LmxvY2F0aW9uKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib250b3VjaHN0YXJ0XCIsIG51bGwpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbnRvdWNobW92ZVwiLCBudWxsKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib250b3VjaGVuZFwiLCBudWxsKTtcbiAgICBfaHRtbC5hcHBlbmRDaGlsZChfdGhpcy5oZWFkKTtcbiAgICBfaHRtbC5hcHBlbmRDaGlsZChfdGhpcy5ib2R5KTtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5zY3JpcHRzID0gW107XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhEb2N1bWVudCwgW3tcbiAgICBrZXk6IFwiY2hhcmFjdGVyU2V0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJVVEYtOFwiO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzY3JpcHRzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5zY3JpcHRzLnNsaWNlKDApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVFbGVtZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0YWdOYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdGFnTmFtZSA9IHRhZ05hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGlmICh0YWdOYW1lID09PSAnQ0FOVkFTJykge1xuICAgICAgICByZXR1cm4gbmV3IF9IVE1MQ2FudmFzRWxlbWVudFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gJ0lNRycpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbWFnZSgpO1xuICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSAnVklERU8nKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0hUTUxWaWRlb0VsZW1lbnRbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09ICdTQ1JJUFQnKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0hUTUxTY3JpcHRFbGVtZW50W1wiZGVmYXVsdFwiXSgpO1xuICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcIklOUFVUXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfSFRNTElucHV0RWxlbWVudFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJBVURJT1wiKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0F1ZGlvW1wiZGVmYXVsdFwiXSgpO1xuICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcIlNUWUxFXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfSFRNTFN0eWxlRWxlbWVudFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJBXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfSFRNTEFuY2hvckVsZW1lbnRbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IF9IVE1MRWxlbWVudFtcImRlZmF1bHRcIl0odGFnTmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUVsZW1lbnROU1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVFbGVtZW50KHF1YWxpZmllZE5hbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFdmVudCh0eXBlKSB7XG4gICAgICBpZiAod2luZG93W3R5cGVdKSB7XG4gICAgICAgIHJldHVybiBuZXcgd2luZG93W3R5cGVdKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlVGV4dE5vZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlVGV4dE5vZGUoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgpIGlzIG5vdCBzdXBwb3J0IVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzcGF0Y2hFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KCkge1xuICAgICAgaWYgKF9odG1sLmRpc3BhdGNoRXZlbnQuYXBwbHkoX2h0bWwsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKERvY3VtZW50LnByb3RvdHlwZSksIFwiZGlzcGF0Y2hFdmVudFwiLCB0aGlzKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRDaGlsZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRDaGlsZChub2RlKSB7XG4gICAgICB2YXIgbm9kZU5hbWUgPSBub2RlLm5vZGVOYW1lO1xuICAgICAgaWYgKG5vZGVOYW1lID09PSBcIlNDUklQVFwiKSB7XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc2NyaXB0cy5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKERvY3VtZW50LnByb3RvdHlwZSksIFwiYXBwZW5kQ2hpbGRcIiwgdGhpcykuY2FsbCh0aGlzLCBub2RlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQ2hpbGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2hpbGQobm9kZSkge1xuICAgICAgdmFyIG5vZGVOYW1lID0gbm9kZS5ub2RlTmFtZTtcbiAgICAgIGlmIChub2RlTmFtZSA9PT0gXCJTQ1JJUFRcIikge1xuICAgICAgICB2YXIgc2NyaXB0cyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc2NyaXB0cztcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW5ndGggPSBzY3JpcHRzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgICBpZiAobm9kZSA9PT0gc2NyaXB0c1tpbmRleF0pIHtcbiAgICAgICAgICAgIHNjcmlwdHMuc2xpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoRG9jdW1lbnQucHJvdG90eXBlKSwgXCJyZW1vdmVDaGlsZFwiLCB0aGlzKS5jYWxsKHRoaXMsIG5vZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRFbGVtZW50QnlJZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRFbGVtZW50QnlJZChpZCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudEJ5SWQnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cbiAgICAgIHZhciByb290RWxlbWVudCA9IHRoaXMuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgdmFyIGVsZW1lbnRBcnIgPSBbXS5jb25jYXQocm9vdEVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICB2YXIgZWxlbWVudDtcbiAgICAgIGlmIChpZCA9PT0gXCJjYW52YXNcIiB8fCBpZCA9PT0gXCJnbGNhbnZhc1wiKSB7XG4gICAgICAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudEFyci5wb3AoKSkge1xuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09PSBcImNhbnZhc1wiIHx8IGVsZW1lbnQuaWQgPT09IFwiZ2xjYW52YXNcIikge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsZW1lbnRBcnIgPSBlbGVtZW50QXJyLmNvbmNhdChlbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnRBcnIucG9wKCkpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbGVtZW50QXJyID0gZWxlbWVudEFyci5jb25jYXQoZWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEVsZW1lbnRzQnlDbGFzc05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lcykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudHNCeUNsYXNzTmFtZScgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBuYW1lcyAhPT0gXCJzdHJpbmdcIiAmJiBuYW1lcyBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKG5hbWVzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RWxlbWVudHNCeVRhZ05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudHNCeVRhZ05hbWUnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cbiAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICB2YXIgcm9vdEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50RWxlbWVudDtcbiAgICAgIHZhciByZXN1bHQgPSBuZXcgX05vZGVMaXN0W1wiZGVmYXVsdFwiXSgpO1xuICAgICAgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgICAgIGNhc2UgXCJIRUFEXCI6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZG9jdW1lbnQuaGVhZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJCT0RZXCI6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZG9jdW1lbnQuYm9keSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChyb290RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RWxlbWVudHNCeU5hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeU5hbWUobmFtZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudHNCeU5hbWUnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cbiAgICAgIHZhciBlbGVtZW50QXJyID0gW10uY29uY2F0KHRoaXMuY2hpbGROb2Rlcyk7XG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIHZhciBlbGVtZW50O1xuICAgICAgd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50QXJyLnBvcCgpKSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50QXJyID0gZWxlbWVudEFyci5jb25jYXQoZWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInF1ZXJ5U2VsZWN0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcXVlcnlTZWxlY3RvcihzZWxlY3RvcnMpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBcIlVuY2F1Z2h0IFR5cGVFcnJvcjogRmFpbGVkIHRvIGV4ZWN1dGUgJ3F1ZXJ5U2VsZWN0b3JBbGwnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cbiAgICAgIHZhciBub2RlTGlzdCA9IG5ldyBfTm9kZUxpc3RbXCJkZWZhdWx0XCJdKCk7XG4gICAgICBzd2l0Y2ggKHNlbGVjdG9ycykge1xuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICBjYXNlIE5hTjpcbiAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICBjYXNlIFwiXCI6XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9ycyAhPT0gXCJzdHJpbmdcIiAmJiBzZWxlY3RvcnMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgdGhyb3cgXCJVbmNhdWdodCBET01FeGNlcHRpb246IEZhaWxlZCB0byBleGVjdXRlICdxdWVyeVNlbGVjdG9yQWxsJyBvbiAnRG9jdW1lbnQnOiAnXCIgKyBzZWxlY3RvcnMgKyBcIicgaXMgbm90IGEgdmFsaWQgc2VsZWN0b3IuXCI7XG4gICAgICB9XG4gICAgICB2YXIgcmVnID0gL15bQS1aYS16XSskLztcbiAgICAgIHZhciByZXN1bHQgPSBzZWxlY3RvcnMubWF0Y2gocmVnKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3JzKTtcbiAgICAgIH1cbiAgICAgIHJlZyA9IC9eXFwuW0EtWmEteiRfXVtBLVphLXokXzAtOVxcLSBdKiQvO1xuICAgICAgcmVzdWx0ID0gc2VsZWN0b3JzLm1hdGNoKHJlZyk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHZhciBzZWxlY3RvckFyciA9IHNlbGVjdG9ycy5zcGxpdChcIiBcIik7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yQXJyLnNoaWZ0KCk7XG4gICAgICAgIG5vZGVMaXN0ID0gdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yLnN1YnN0cigxKSk7XG4gICAgICAgIHZhciBsZW5ndGggPSBzZWxlY3RvckFyci5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGgpIHtcbiAgICAgICAgICBzZWxlY3RvcnMgPSBzZWxlY3RvckFyci5qb2luKFwiIFwiKTtcbiAgICAgICAgICBsZW5ndGggPSBub2RlTGlzdC5sZW5ndGg7XG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIHN1Yk5vZGVMaXN0ID0gbm9kZUxpc3RbaW5kZXhdLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzKTtcbiAgICAgICAgICAgIGlmIChzdWJOb2RlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN1Yk5vZGVMaXN0WzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZUxpc3RbMF07XG4gICAgICB9XG4gICAgICByZWcgPSAvXiNbQS1aYS16JF9dW0EtWmEteiRfMC05XFwtXSokLztcbiAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLnN1YnN0cigxKSk7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgbm9kZUxpc3QucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdG9ycyA9PT0gXCIqXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3JzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlTGlzdFswXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicXVlcnlTZWxlY3RvckFsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBxdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAncXVlcnlTZWxlY3RvckFsbCcgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuICAgICAgdmFyIG5vZGVMaXN0ID0gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIHN3aXRjaCAoc2VsZWN0b3JzKSB7XG4gICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIGNhc2UgTmFOOlxuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICByZXR1cm4gbm9kZUxpc3Q7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9ycyAhPT0gXCJzdHJpbmdcIiAmJiBzZWxlY3RvcnMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgdGhyb3cgXCJVbmNhdWdodCBET01FeGNlcHRpb246IEZhaWxlZCB0byBleGVjdXRlICdxdWVyeVNlbGVjdG9yQWxsJyBvbiAnRG9jdW1lbnQnOiAnXCIgKyBzZWxlY3RvcnMgKyBcIicgaXMgbm90IGEgdmFsaWQgc2VsZWN0b3IuXCI7XG4gICAgICB9XG4gICAgICB2YXIgcmVnID0gL15bQS1aYS16XSskLztcbiAgICAgIHZhciByZXN1bHQgPSBzZWxlY3RvcnMubWF0Y2gocmVnKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3JzKTtcbiAgICAgIH1cbiAgICAgIHJlZyA9IC9eXFwuW0EtWmEteiRfXVtBLVphLXokXzAtOVxcLV0qJC87XG4gICAgICByZXN1bHQgPSBzZWxlY3RvcnMubWF0Y2gocmVnKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZWxlY3RvcnMuc3Vic3RyKDEpKTtcbiAgICAgIH1cbiAgICAgIHJlZyA9IC9eI1tBLVphLXokX11bQS1aYS16JF8wLTlcXC1dKiQvO1xuICAgICAgcmVzdWx0ID0gc2VsZWN0b3JzLm1hdGNoKHJlZyk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50QnlJZChzZWxlY3RvcnMuc3Vic3RyKDEpKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBub2RlTGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2VsZWN0b3JzID09PSBcIipcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWxlY3RvcnMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGVMaXN0O1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRG9jdW1lbnQ7XG59KF9Ob2RlMltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vQXVkaW9cIjo0LFwiLi9Gb250RmFjZVNldFwiOjEzLFwiLi9IVE1MQW5jaG9yRWxlbWVudFwiOjE0LFwiLi9IVE1MQm9keUVsZW1lbnRcIjoxNixcIi4vSFRNTENhbnZhc0VsZW1lbnRcIjoxNyxcIi4vSFRNTEVsZW1lbnRcIjoxOCxcIi4vSFRNTEhlYWRFbGVtZW50XCI6MTksXCIuL0hUTUxIdG1sRWxlbWVudFwiOjIwLFwiLi9IVE1MSW5wdXRFbGVtZW50XCI6MjIsXCIuL0hUTUxTY3JpcHRFbGVtZW50XCI6MjQsXCIuL0hUTUxTdHlsZUVsZW1lbnRcIjoyNSxcIi4vSFRNTFZpZGVvRWxlbWVudFwiOjI2LFwiLi9Ob2RlXCI6MzIsXCIuL05vZGVMaXN0XCI6MzMsXCIuL3V0aWwvV2Vha01hcFwiOjU3fV0sOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTm9kZVwiKSk7XG52YXIgX05vZGVMaXN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ob2RlTGlzdFwiKSk7XG52YXIgX0RPTVRva2VuTGlzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRE9NVG9rZW5cXHUyMDBCTGlzdFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgRWxlbWVudCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9Ob2RlKSB7XG4gIF9pbmhlcml0cyhFbGVtZW50LCBfTm9kZSk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRWxlbWVudCk7XG4gIGZ1bmN0aW9uIEVsZW1lbnQodGFnTmFtZSkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRWxlbWVudCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0YWdOYW1lKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2xhc3NOYW1lXCIsICcnKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2hpbGRyZW5cIiwgW10pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjbGFzc0xpc3RcIiwgbmV3IF9ET01Ub2tlbkxpc3RbXCJkZWZhdWx0XCJdKCkpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ2YWx1ZVwiLCAxKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY29udGVudFwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2Nyb2xsTGVmdFwiLCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2Nyb2xsVG9wXCIsIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjbGllbnRMZWZ0XCIsIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjbGllbnRUb3BcIiwgMCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhFbGVtZW50LCBbe1xuICAgIGtleTogXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgcmlnaHQ6IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRFbGVtZW50c0J5VGFnTmFtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSB7XG4gICAgICB0YWdOYW1lID0gdGFnTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgdmFyIHJlc3VsdCA9IG5ldyBfTm9kZUxpc3RbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB2YXIgY2hpbGROb2RlcyA9IHRoaXMuY2hpbGROb2RlcztcbiAgICAgIHZhciBsZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBjaGlsZE5vZGVzW2luZGV4XTtcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gdGFnTmFtZSB8fCB0YWdOYW1lID09PSBcIipcIikge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlDbGFzc05hbWUobmFtZXMpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBcIlVuY2F1Z2h0IFR5cGVFcnJvcjogRmFpbGVkIHRvIGV4ZWN1dGUgJ2dldEVsZW1lbnRzQnlDbGFzc05hbWUnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHQgPSBuZXcgX05vZGVMaXN0W1wiZGVmYXVsdFwiXSgpO1xuICAgICAgaWYgKHR5cGVvZiBuYW1lcyAhPT0gXCJzdHJpbmdcIiAmJiBuYW1lcyBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgdmFyIGVsZW1lbnRBcnIgPSBbXS5jb25jYXQodGhpcy5jaGlsZE5vZGVzKTtcbiAgICAgIHZhciBlbGVtZW50O1xuICAgICAgd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50QXJyLnBvcCgpKSB7XG4gICAgICAgIHZhciBjbGFzc1N0ciA9IGVsZW1lbnRbXCJjbGFzc1wiXTtcbiAgICAgICAgaWYgKGNsYXNzU3RyKSB7XG4gICAgICAgICAgdmFyIGNsYXNzQXJyID0gY2xhc3NTdHIuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgIHZhciBsZW5ndGggPSBjbGFzc0Fyci5sZW5ndGg7XG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKGNsYXNzQXJyW2luZGV4XSA9PT0gbmFtZXMpIHtcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50QXJyID0gZWxlbWVudEFyci5jb25jYXQoZWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInF1ZXJ5U2VsZWN0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcXVlcnlTZWxlY3RvcihzZWxlY3RvcnMpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBcIlVuY2F1Z2h0IFR5cGVFcnJvcjogRmFpbGVkIHRvIGV4ZWN1dGUgJ3F1ZXJ5U2VsZWN0b3JBbGwnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cbiAgICAgIHZhciBub2RlTGlzdCA9IG5ldyBfTm9kZUxpc3RbXCJkZWZhdWx0XCJdKCk7XG4gICAgICBzd2l0Y2ggKHNlbGVjdG9ycykge1xuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICBjYXNlIE5hTjpcbiAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICBjYXNlIFwiXCI6XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9ycyAhPT0gXCJzdHJpbmdcIiAmJiBzZWxlY3RvcnMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgdGhyb3cgXCJVbmNhdWdodCBET01FeGNlcHRpb246IEZhaWxlZCB0byBleGVjdXRlICdxdWVyeVNlbGVjdG9yQWxsJyBvbiAnRG9jdW1lbnQnOiAnXCIgKyBzZWxlY3RvcnMgKyBcIicgaXMgbm90IGEgdmFsaWQgc2VsZWN0b3IuXCI7XG4gICAgICB9XG4gICAgICB2YXIgcmVnID0gL15bQS1aYS16XSskLztcbiAgICAgIHZhciByZXN1bHQgPSBzZWxlY3RvcnMubWF0Y2gocmVnKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3JzKTtcbiAgICAgIH1cbiAgICAgIHJlZyA9IC9eLltBLVphLXokX11bQS1aYS16JF8wLTlcXC0gXSokLztcbiAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB2YXIgc2VsZWN0b3JBcnIgPSBzZWxlY3RvcnMuc3BsaXQoXCIgXCIpO1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBzZWxlY3RvckFyci5zaGlmdCgpO1xuICAgICAgICBub2RlTGlzdCA9IHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZWxlY3Rvci5zdWJzdHIoMSkpO1xuICAgICAgICB2YXIgbGVuZ3RoID0gc2VsZWN0b3JBcnIubGVuZ3RoO1xuICAgICAgICBpZiAobGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZWN0b3JzID0gc2VsZWN0b3JBcnIuam9pbihcIiBcIik7XG4gICAgICAgICAgbGVuZ3RoID0gbm9kZUxpc3QubGVuZ3RoO1xuICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBzdWJOb2RlTGlzdCA9IG5vZGVMaXN0W2luZGV4XS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycyk7XG4gICAgICAgICAgICBpZiAoc3ViTm9kZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdWJOb2RlTGlzdFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGVMaXN0WzBdO1xuICAgICAgfVxuICAgICAgcmVnID0gL14jW0EtWmEteiRfXVtBLVphLXokXzAtOVxcLV0qJC87XG4gICAgICByZXN1bHQgPSBzZWxlY3RvcnMubWF0Y2gocmVnKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnRCeUlkKHNlbGVjdG9ycy5zdWJzdHIoMSkpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIG5vZGVMaXN0LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzZWxlY3RvcnMgPT09IFwiKlwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbGVjdG9ycyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZUxpc3RbMF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInJlcXVlc3RGdWxsc2NyZWVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RGdWxsc2NyZWVuKCkge31cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVBdHRyaWJ1dGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKSB7XG4gICAgICBpZiAoYXR0ck5hbWUgPT09IFwic3R5bGVcIikge1xuICAgICAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gdGhpc1tcInN0eWxlXCJdKSB7XG4gICAgICAgICAgdGhpc1tcInN0eWxlXCJdW3N0eWxlTmFtZV0gPSBcIlwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzW2F0dHJOYW1lXSA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEF0dHJpYnV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgICAgIGlmIChuYW1lID09PSBcInN0eWxlXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcInVuZGVmaW5lZFwiIHx8IHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiB0aGlzW1wic3R5bGVcIl0pIHtcbiAgICAgICAgICAgIHRoaXNbXCJzdHlsZVwiXVtzdHlsZU5hbWVdID0gXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXHMqL2csIFwiXCIpO1xuICAgICAgICAgIHZhciB2YWx1ZUFycmF5ID0gdmFsdWUuc3BsaXQoXCI7XCIpO1xuICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHZhbHVlQXJyYXkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZUFycmF5W2luZGV4XSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgIHZhciB2YWx1ZVRlbXAgPSB2YWx1ZUFycmF5W2luZGV4XS5zcGxpdChcIjpcIik7XG4gICAgICAgICAgICAgIHRoaXNbXCJzdHlsZVwiXVt2YWx1ZVRlbXBbMF1dID0gdmFsdWVUZW1wWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRBdHRyaWJ1dGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgICAgIHZhciBhdHRyaWJ1dGVWYWx1ZSA9IG51bGw7XG4gICAgICBpZiAobmFtZSA9PSBcInN0eWxlXCIpIHtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzW1wic3R5bGVcIl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzW25hbWVdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRBdHRyaWJ1dGVOU1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVOUyhucywgbmFtZSwgdmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9jdXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwibGFzdENoaWxkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgbGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzW3RoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgIHJldHVybiBsYXN0Q2hpbGQgPyBsYXN0Q2hpbGQgOiB0aGlzLmlubmVySFRNTCA/IG5ldyBIVE1MRWxlbWVudCgpIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaXJzdENoaWxkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICByZXR1cm4gY2hpbGQgPyBjaGlsZCA6IHRoaXMuaW5uZXJIVE1MID8gbmV3IEhUTUxFbGVtZW50KCkgOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpcnN0RWxlbWVudENoaWxkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICByZXR1cm4gY2hpbGQgPyBjaGlsZCA6IHRoaXMuaW5uZXJIVE1MID8gbmV3IEhUTUxFbGVtZW50KCkgOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsaWVudEhlaWdodFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHN0eWxlID0gdGhpcy5zdHlsZSB8fCB7fTtcbiAgICAgIHJldHVybiBwYXJzZUludChzdHlsZS5mb250U2l6ZSB8fCBcIjBcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRhZ05hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVOYW1lO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRWxlbWVudDtcbn0oX05vZGUyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9ET01Ub2tlbuKAi0xpc3RcIjo2LFwiLi9Ob2RlXCI6MzIsXCIuL05vZGVMaXN0XCI6MzN9XSwxMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgRXZlbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXZlbnQodHlwZSwgZXZlbnRJbml0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50KTtcbiAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICB0aGlzLl90YXJnZXQgPSBudWxsO1xuICAgIHRoaXMuX2V2ZW50UGhhc2UgPSAyO1xuICAgIHRoaXMuX2N1cnJlbnRUYXJnZXQgPSBudWxsO1xuICAgIHRoaXMuX2NhbmNlbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fc3RvcHBlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3Bhc3NpdmVMaXN0ZW5lciA9IG51bGw7XG4gICAgdGhpcy5fdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoRXZlbnQsIFt7XG4gICAga2V5OiBcInR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0YXJnZXRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90YXJnZXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImN1cnJlbnRUYXJnZXRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50VGFyZ2V0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1RydXN0ZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidGltZVN0YW1wXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGltZVN0YW1wO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLnR5cGUuaW5kZXhPZihcInRvdWNoXCIpKSB7XG4gICAgICAgIHRoaXMuX3RpbWVTdGFtcCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb3NlZFBhdGhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9zZWRQYXRoKCkge1xuICAgICAgdmFyIGN1cnJlbnRUYXJnZXQgPSB0aGlzLl9jdXJyZW50VGFyZ2V0O1xuICAgICAgaWYgKGN1cnJlbnRUYXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtjdXJyZW50VGFyZ2V0XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXZlbnRQaGFzZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50UGhhc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BQcm9wYWdhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSB7XG4gICAgICB0aGlzLl9zdG9wcGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYnViYmxlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5jZWxhYmxlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHJldmVudERlZmF1bHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgICBpZiAodGhpcy5fcGFzc2l2ZUxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkV2ZW50I3ByZXZlbnREZWZhdWx0KCkgd2FzIGNhbGxlZCBmcm9tIGEgcGFzc2l2ZSBsaXN0ZW5lcjpcIiwgdGhpcy5fcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNhbmNlbGFibGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2FuY2VsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0UHJldmVudGVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FuY2VsZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvc2VkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBFdmVudDtcbn0oKTtcbkV2ZW50Lk5PTkUgPSAwO1xuRXZlbnQuQ0FQVFVSSU5HX1BIQVNFID0gMTtcbkV2ZW50LkFUX1RBUkdFVCA9IDI7XG5FdmVudC5CVUJCTElOR19QSEFTRSA9IDM7XG5cbn0se31dLDExOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX1RvdWNoRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RvdWNoRXZlbnRcIikpO1xudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL1dlYWtNYXBcIikpO1xudmFyIF9EZXZpY2VNb3Rpb25FdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRGV2aWNlTW90aW9uRXZlbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbnZhciBfbGlzdGVuZXJTdGF0ID0ge307XG52YXIgX29uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIF9vblRvdWNoU3RhcnQoZSkge1xuICB2YXIgZXZlbnQgPSBuZXcgX1RvdWNoRXZlbnRbXCJkZWZhdWx0XCJdKFwidG91Y2hzdGFydFwiKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xufTtcbnZhciBfb25Ub3VjaE1vdmUgPSBmdW5jdGlvbiBfb25Ub3VjaE1vdmUoZSkge1xuICB2YXIgZXZlbnQgPSBuZXcgX1RvdWNoRXZlbnRbXCJkZWZhdWx0XCJdKFwidG91Y2htb3ZlXCIpO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG59O1xudmFyIF9vblRvdWNoQ2FuY2VsID0gZnVuY3Rpb24gX29uVG91Y2hDYW5jZWwoZSkge1xuICB2YXIgZXZlbnQgPSBuZXcgX1RvdWNoRXZlbnRbXCJkZWZhdWx0XCJdKFwidG91Y2hjYW5jZWxcIik7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbn07XG52YXIgX29uVG91Y2hFbmQgPSBmdW5jdGlvbiBfb25Ub3VjaEVuZChlKSB7XG4gIHZhciBldmVudCA9IG5ldyBfVG91Y2hFdmVudFtcImRlZmF1bHRcIl0oXCJ0b3VjaGVuZFwiKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xufTtcbnZhciBfc3lzdGVtSW5mbyA9IHJhbC5nZXRTeXN0ZW1JbmZvU3luYygpO1xudmFyIF9pc0FuZHJvaWQgPSBfc3lzdGVtSW5mby5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSBcImFuZHJvaWRcIjtcbnZhciBfYWxwaGEgPSAwLjg7XG52YXIgX2dyYXZpdHkgPSBbMCwgMCwgMF07XG52YXIgX29uQWNjZWxlcm9tZXRlckNoYW5nZSA9IGZ1bmN0aW9uIF9vbkFjY2VsZXJvbWV0ZXJDaGFuZ2UoZSkge1xuICBpZiAoX2lzQW5kcm9pZCkge1xuICAgIGUueCAqPSAtMTA7XG4gICAgZS55ICo9IC0xMDtcbiAgICBlLnogKj0gLTEwO1xuICB9IGVsc2Uge1xuICAgIGUueCAqPSAxMDtcbiAgICBlLnkgKj0gMTA7XG4gICAgZS56ICo9IDEwO1xuICB9XG4gIF9ncmF2aXR5WzBdID0gX2FscGhhICogX2dyYXZpdHlbMF0gKyAoMSAtIF9hbHBoYSkgKiBlLng7XG4gIF9ncmF2aXR5WzFdID0gX2FscGhhICogX2dyYXZpdHlbMV0gKyAoMSAtIF9hbHBoYSkgKiBlLnk7XG4gIF9ncmF2aXR5WzJdID0gX2FscGhhICogX2dyYXZpdHlbMl0gKyAoMSAtIF9hbHBoYSkgKiBlLno7XG4gIHZhciBldmVudCA9IG5ldyBfRGV2aWNlTW90aW9uRXZlbnRbXCJkZWZhdWx0XCJdKHtcbiAgICBhY2NlbGVyYXRpb246IHtcbiAgICAgIHg6IGUueCAtIF9ncmF2aXR5WzBdLFxuICAgICAgeTogZS55IC0gX2dyYXZpdHlbMV0sXG4gICAgICB6OiBlLnogLSBfZ3Jhdml0eVsyXVxuICAgIH0sXG4gICAgYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eToge1xuICAgICAgeDogZS54LFxuICAgICAgeTogZS55LFxuICAgICAgejogZS56XG4gICAgfVxuICB9KTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcbnZhciBFdmVudFRhcmdldCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFdmVudFRhcmdldCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRUYXJnZXQpO1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5zZXQodGhpcywge30pO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhFdmVudFRhcmdldCwgW3tcbiAgICBrZXk6IFwiYWRkRXZlbnRMaXN0ZW5lclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpO1xuICAgICAgaWYgKCFwcml2YXRlVGhpcykge1xuICAgICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uc2V0KHRoaXMsIHByaXZhdGVUaGlzID0ge30pO1xuICAgICAgfVxuICAgICAgdmFyIGV2ZW50cyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQocHJpdmF0ZVRoaXMpO1xuICAgICAgaWYgKCFldmVudHMpIHtcbiAgICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLnNldChwcml2YXRlVGhpcywgZXZlbnRzID0ge30pO1xuICAgICAgfVxuICAgICAgaWYgKCFldmVudHNbdHlwZV0pIHtcbiAgICAgICAgZXZlbnRzW3R5cGVdID0gW107XG4gICAgICB9XG4gICAgICB2YXIgbGlzdGVuZXJBcnJheSA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lckFycmF5Lmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgaWYgKGxpc3RlbmVyQXJyYXlbaW5kZXhdID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdGVuZXJBcnJheS5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIGlmIChfbGlzdGVuZXJTdGF0W3R5cGVdKSB7XG4gICAgICAgICsrX2xpc3RlbmVyU3RhdFt0eXBlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9saXN0ZW5lclN0YXRbdHlwZV0gPSAxO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwidG91Y2hzdGFydFwiOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByYWwub25Ub3VjaFN0YXJ0KF9vblRvdWNoU3RhcnQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFwidG91Y2htb3ZlXCI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJhbC5vblRvdWNoTW92ZShfb25Ub3VjaE1vdmUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFwidG91Y2hjYW5jZWxcIjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmFsLm9uVG91Y2hDYW5jZWwoX29uVG91Y2hDYW5jZWwpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFwidG91Y2hlbmRcIjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmFsLm9uVG91Y2hFbmQoX29uVG91Y2hFbmQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFwiZGV2aWNlbW90aW9uXCI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJhbC5vbkFjY2VsZXJvbWV0ZXJDaGFuZ2UoX29uQWNjZWxlcm9tZXRlckNoYW5nZSk7XG4gICAgICAgICAgICAgIHJhbC5zdGFydEFjY2VsZXJvbWV0ZXIoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmNhcHR1cmUpIHt9XG4gICAgICBpZiAob3B0aW9ucy5vbmNlKSB7fVxuICAgICAgaWYgKG9wdGlvbnMucGFzc2l2ZSkge31cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpO1xuICAgICAgdmFyIGV2ZW50cztcbiAgICAgIGlmIChwcml2YXRlVGhpcykge1xuICAgICAgICBldmVudHMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHByaXZhdGVUaGlzKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudHMpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcbiAgICAgICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSBsaXN0ZW5lcnMubGVuZ3RoOyBpLS07IGkgPiAwKSB7XG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpZiAoLS1fbGlzdGVuZXJTdGF0W3R5cGVdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwidG91Y2hzdGFydFwiOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmFsLm9mZlRvdWNoU3RhcnQoX29uVG91Y2hTdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaG1vdmVcIjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJhbC5vZmZUb3VjaE1vdmUoX29uVG91Y2hNb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY2FzZSBcInRvdWNoY2FuY2VsXCI6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByYWwub2ZmVG91Y2hDYW5jZWwoX29uVG91Y2hDYW5jZWwpO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjYXNlIFwidG91Y2hlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJhbC5vZmZUb3VjaEVuZChfb25Ub3VjaEVuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZXZpY2Vtb3Rpb25cIjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJhbC5vZmZBY2NlbGVyb21ldGVyQ2hhbmdlKF9vbkFjY2VsZXJvbWV0ZXJDaGFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgIHJhbC5zdG9wQWNjZWxlcm9tZXRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkaXNwYXRjaEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoKSB7XG4gICAgICB2YXIgZXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgZXZlbnQuX3RhcmdldCA9IGV2ZW50Ll9jdXJyZW50VGFyZ2V0ID0gdGhpcztcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIF9Ub3VjaEV2ZW50W1wiZGVmYXVsdFwiXSkge1xuICAgICAgICB2YXIgdG91Y2hlQXJyYXkgPSBldmVudC50b3VjaGVzO1xuICAgICAgICB2YXIgbGVuZ3RoID0gdG91Y2hlQXJyYXkubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICAgICAgdG91Y2hlQXJyYXlbaW5kZXhdLnRhcmdldCA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdG91Y2hlQXJyYXkgPSBldmVudC5jaGFuZ2VkVG91Y2hlcztcbiAgICAgICAgbGVuZ3RoID0gdG91Y2hlQXJyYXkubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBfaW5kZXggPSAwOyBfaW5kZXggPCBsZW5ndGg7ICsrX2luZGV4KSB7XG4gICAgICAgICAgdG91Y2hlQXJyYXlbX2luZGV4XS50YXJnZXQgPSB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzW1wib25cIiArIGV2ZW50LnR5cGVdO1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgfVxuICAgICAgdmFyIHByaXZhdGVUaGlzID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKTtcbiAgICAgIHZhciBldmVudHM7XG4gICAgICBpZiAocHJpdmF0ZVRoaXMpIHtcbiAgICAgICAgZXZlbnRzID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChwcml2YXRlVGhpcyk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnRzKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBldmVudHNbZXZlbnQudHlwZV07XG4gICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGlzdGVuZXJzW2ldLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXZlbnQuX3RhcmdldCA9IGV2ZW50Ll9jdXJyZW50VGFyZ2V0ID0gbnVsbDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRXZlbnRUYXJnZXQ7XG59KCk7XG5cbn0se1wiLi9EZXZpY2VNb3Rpb25FdmVudFwiOjcsXCIuL1RvdWNoRXZlbnRcIjozNixcIi4vdXRpbC9XZWFrTWFwXCI6NTd9XSwxMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL1dlYWtNYXBcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbnZhciBGb250RmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRm9udEZhY2UoZmFtaWx5LCBzb3VyY2UsIGRlc2NyaXB0b3JzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvbnRGYWNlKTtcbiAgICB0aGlzLmZhbWlseSA9IGZhbWlseTtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLmRlc2NyaXB0b3JzID0gZGVzY3JpcHRvcnM7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBfc2VsZlByaXZhdGUgPSB7XG4gICAgICBzdGF0dXM6IFwidW5sb2FkZWRcIixcbiAgICAgIF9zdGF0dXM6IFwidW5sb2FkZWRcIixcbiAgICAgIGxvYWQ6IGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJsb2FkaW5nXCI7XG4gICAgICAgIHZhciBzb3VyY2U7XG4gICAgICAgIGlmIChzZWxmLnNvdXJjZS5tYXRjaCgvdXJsXFwoXFxzKidcXHMqKC4qPylcXHMqJ1xccypcXCkvKSkge1xuICAgICAgICAgIHNvdXJjZSA9IHNlbGYuc291cmNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvdXJjZSA9IFwidXJsKCdcIiArIHNlbGYuc291cmNlICsgXCInKVwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmYW1pbHkgPSByYWwubG9hZEZvbnQoc2VsZi5mYW1pbHksIHNvdXJjZSk7XG4gICAgICAgIGlmIChmYW1pbHkpIHtcbiAgICAgICAgICB0aGlzLl9zdGF0dXMgPSBcImxvYWRlZFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IFwiZXJyb3JcIjtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgc3RhdHVzID0gX3NlbGZQcml2YXRlLnN0YXR1cyA9IF9zZWxmUHJpdmF0ZS5fc3RhdHVzO1xuICAgICAgICAgIGlmIChzdGF0dXMgPT09IFwibG9hZGVkXCIpIHtcbiAgICAgICAgICAgIF9zZWxmUHJpdmF0ZS5sb2FkUmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfc2VsZlByaXZhdGUubG9hZFJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uc2V0KHRoaXMsIF9zZWxmUHJpdmF0ZSk7XG4gICAgX3NlbGZQcml2YXRlLmxvYWRlZCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIF9zZWxmUHJpdmF0ZS5sb2FkUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICBfc2VsZlByaXZhdGUubG9hZFJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoRm9udEZhY2UsIFt7XG4gICAga2V5OiBcInN0YXR1c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc3RhdHVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmxvYWRlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5sb2FkKCk7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5sb2FkZWQ7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBGb250RmFjZTtcbn0oKTtcbm1vZHVsZS5leHBvcnRzID0gRm9udEZhY2U7XG5cbn0se1wiLi91dGlsL1dlYWtNYXBcIjo1N31dLDEzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0V2ZW50VGFyZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRUYXJnZXRcIikpO1xudmFyIF9FdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRcIikpO1xudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL1dlYWtNYXBcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG52YXIgRm9udEZhY2VTZXQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfRXZlbnRUYXJnZXQpIHtcbiAgX2luaGVyaXRzKEZvbnRGYWNlU2V0LCBfRXZlbnRUYXJnZXQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEZvbnRGYWNlU2V0KTtcbiAgZnVuY3Rpb24gRm9udEZhY2VTZXQoKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb250RmFjZVNldCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICB2YXIgc2VsZiA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLnN0YXR1cyA9IFwibG9hZGVkXCI7XG4gICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkucmVhZHkgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLnJlYWR5UmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLnJlYWR5UmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLmZvbnRGYWNlU2V0ID0gW107XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhGb250RmFjZVNldCwgW3tcbiAgICBrZXk6IFwic3RhdHVzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5zdGF0dXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlYWR5XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5yZWFkeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChmb250RmFjZSkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5mb250RmFjZVNldC5wdXNoKGZvbnRGYWNlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2hlY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJGb250RmFjZVNldC5jaGVjaygpIG5vdCBpbXBsZW1lbnRzXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkZvbnRGYWNlU2V0LmNsZWFyKCkgbm90IGltcGxlbWVudHNcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlbGV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVsZXRlKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRm9udEZhY2VTZXQuZGVsZXRlKCkgbm90IGltcGxlbWVudHNcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc3RhdHVzID0gXCJsb2FkaW5nXCI7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oJ2xvYWRpbmcnKSk7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgZm9udEZhY2VTZXQgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLmZvbnRGYWNlU2V0O1xuICAgICAgICBpZiAoZm9udEZhY2VTZXQpIHtcbiAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBmb250RmFjZVNldCkge1xuICAgICAgICAgICAgdmFyIGZvbnRGYWNlID0gZm9udEZhY2VTZXRbaW5kZXhdO1xuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoZm9udEZhY2UpLnN0YXR1cztcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IFwidW5sb2FkZWRcIiB8fCBzdGF0dXMgPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgICBmb250RmFjZS5sb2FkKCk7XG4gICAgICAgICAgICAgIGlmIChfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KGZvbnRGYWNlKS5fc3RhdHVzICE9PSBcImxvYWRlZFwiKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5zdGF0dXMgPSBcImxvYWRlZFwiO1xuICAgICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoc2VsZikucmVhZHlSZXNvbHZlKFtdLmNvbmNhdChfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLmZvbnRGYWNlU2V0KSk7XG4gICAgICAgICAgcmVzb2x2ZShbXS5jb25jYXQoX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5mb250RmFjZVNldCkpO1xuICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXSgnbG9hZGluZ2RvbmUnKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoc2VsZikuc3RhdHVzID0gXCJsb2FkZWRcIjtcbiAgICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5yZWFkeVJlamVjdCgpO1xuICAgICAgICByZWplY3QoKTtcbiAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKCdsb2FkaW5nZXJyb3InKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEZvbnRGYWNlU2V0O1xufShfRXZlbnRUYXJnZXQyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9FdmVudFwiOjEwLFwiLi9FdmVudFRhcmdldFwiOjExLFwiLi91dGlsL1dlYWtNYXBcIjo1N31dLDE0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0hUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnRcIikpO1xudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL1dlYWtNYXBcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG52YXIgSFRNTEFuY2hvckVsZW1lbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxBbmNob3JFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxBbmNob3JFbGVtZW50KTtcbiAgZnVuY3Rpb24gSFRNTEFuY2hvckVsZW1lbnQoKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MQW5jaG9yRWxlbWVudCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBcIkFcIik7XG4gICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkucHJvdG9jb2wgPSBcIjpcIjtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEhUTUxBbmNob3JFbGVtZW50LCBbe1xuICAgIGtleTogXCJwcm90b2NvbFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykucHJvdG9jb2w7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBIVE1MQW5jaG9yRWxlbWVudDtcbn0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vSFRNTEVsZW1lbnRcIjoxOCxcIi4vdXRpbC9XZWFrTWFwXCI6NTd9XSwxNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9IVE1MTWVkaWFFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTE1lZGlhRWxlbWVudFwiKSk7XG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvV2Vha01hcFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3Quc2V0KSB7IHNldCA9IFJlZmxlY3Quc2V0OyB9IGVsc2UgeyBzZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7IHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7IHZhciBkZXNjOyBpZiAoYmFzZSkgeyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7IGlmIChkZXNjLnNldCkgeyBkZXNjLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7IHJldHVybiB0cnVlOyB9IGVsc2UgaWYgKCFkZXNjLndyaXRhYmxlKSB7IHJldHVybiBmYWxzZTsgfSB9IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHJlY2VpdmVyLCBwcm9wZXJ0eSk7IGlmIChkZXNjKSB7IGlmICghZGVzYy53cml0YWJsZSkgeyByZXR1cm4gZmFsc2U7IH0gZGVzYy52YWx1ZSA9IHZhbHVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIsIHByb3BlcnR5LCBkZXNjKTsgfSBlbHNlIHsgX2RlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgdmFsdWUpOyB9IHJldHVybiB0cnVlOyB9OyB9IHJldHVybiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKTsgfVxuZnVuY3Rpb24gX3NldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIsIGlzU3RyaWN0KSB7IHZhciBzID0gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciB8fCB0YXJnZXQpOyBpZiAoIXMgJiYgaXNTdHJpY3QpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignZmFpbGVkIHRvIHNldCBwcm9wZXJ0eScpOyB9IHJldHVybiB2YWx1ZTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2dldCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCk7IH0gZWxzZSB7IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7IGlmICghYmFzZSkgcmV0dXJuOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpOyBpZiAoZGVzYy5nZXQpIHsgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7IH0gcmV0dXJuIGRlc2MudmFsdWU7IH07IH0gcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkgeyB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkgeyBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7IH0gcmV0dXJuIG9iamVjdDsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbnZhciBIVE1MQXVkaW9FbGVtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX0hUTUxNZWRpYUVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxBdWRpb0VsZW1lbnQsIF9IVE1MTWVkaWFFbGVtZW50KTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIVE1MQXVkaW9FbGVtZW50KTtcbiAgZnVuY3Rpb24gSFRNTEF1ZGlvRWxlbWVudCh1cmwpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxBdWRpb0VsZW1lbnQpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdXJsLCAnQVVESU8nKTtcbiAgICB2YXIgaW5uZXJBdWRpb0NvbnRleHQgPSByYWwuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkNhbnBsYXkoZnVuY3Rpb24gKCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5kdXJhdGlvbiA9IGlubmVyQXVkaW9Db250ZXh0LmR1cmF0aW9uO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwiY2FucGxheVwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJjYW5wbGF5dGhyb3VnaFwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJkdXJhdGlvbmNoYW5nZVwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkZWRtZXRhZGF0YVwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkZWRkYXRhXCIpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vblBsYXkoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwicGxheVwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJwbGF5aW5nXCIpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vblBhdXNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInBhdXNlXCIpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkVuZGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImVuZGVkXCIpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZHVyYXRpb24gPSBOYU47XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJlcnJvclwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJlbXB0aWVkXCIpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vbldhaXRpbmcoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwid2FpdGluZ1wiKSk7XG4gICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgaW5uZXJBdWRpb0NvbnRleHQub25TZWVrZWQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwic2Vla2VkXCIpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vblNlZWtpbmcoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwic2Vla2luZ1wiKSk7XG4gICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgaW5uZXJBdWRpb0NvbnRleHQub25UaW1lVXBkYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInRpbWV1cGRhdGVcIikpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHVybDtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5pbm5lckF1ZGlvQ29udGV4dCA9IGlubmVyQXVkaW9Db250ZXh0O1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLmR1cmF0aW9uID0gTmFOO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoSFRNTEF1ZGlvRWxlbWVudCwgW3tcbiAgICBrZXk6IFwiY3VycmVudFRpbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5uZXJBdWRpb0NvbnRleHQuc2Vlayh2YWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvb3BcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihIVE1MQXVkaW9FbGVtZW50LnByb3RvdHlwZSksIFwibG9vcFwiLCB0aGlzKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihIVE1MQXVkaW9FbGVtZW50LnByb3RvdHlwZSksIFwibG9vcFwiLCB2YWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0Lmxvb3AgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidm9sdW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoSFRNTEF1ZGlvRWxlbWVudC5wcm90b3R5cGUpLCBcInZvbHVtZVwiLCB0aGlzKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihIVE1MQXVkaW9FbGVtZW50LnByb3RvdHlwZSksIFwidm9sdW1lXCIsIHZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5uZXJBdWRpb0NvbnRleHQudm9sdW1lID0gdmFsdWU7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJ2b2x1bWVjaGFuZ2VcIikpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5QbGF5VHlwZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5QbGF5VHlwZSgpIHtcbiAgICAgIHZhciBtZWRpYVR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgICAgaWYgKHR5cGVvZiBtZWRpYVR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYVR5cGUuaW5kZXhPZignYXVkaW8vbXBlZycpID4gLTEgfHwgbWVkaWFUeXBlLmluZGV4T2YoJ2F1ZGlvL21wNCcpKSB7XG4gICAgICAgIHJldHVybiAncHJvYmFibHknO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzcmNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihIVE1MQXVkaW9FbGVtZW50LnByb3RvdHlwZSksIFwic3JjXCIsIHRoaXMpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKEhUTUxBdWRpb0VsZW1lbnQucHJvdG90eXBlKSwgXCJzcmNcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZHN0YXJ0XCIpKTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRzdGFydFwiKSk7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0LnNyYyA9IF9nZXQoX2dldFByb3RvdHlwZU9mKEhUTUxBdWRpb0VsZW1lbnQucHJvdG90eXBlKSwgXCJzcmNcIiwgdGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBhdXNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbm5lckF1ZGlvQ29udGV4dC5wYXVzZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwbGF5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0LnBsYXkoKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInByb2dyZXNzXCIpKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEhUTUxBdWRpb0VsZW1lbnQ7XG59KF9IVE1MTWVkaWFFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vSFRNTE1lZGlhRWxlbWVudFwiOjIzLFwiLi91dGlsL1dlYWtNYXBcIjo1N31dLDE2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0hUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnQuanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxudmFyIEhUTUxCb2R5RWxlbWVudCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTEJvZHlFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxCb2R5RWxlbWVudCk7XG4gIGZ1bmN0aW9uIEhUTUxCb2R5RWxlbWVudChwYXJlbnROb2RlKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MQm9keUVsZW1lbnQpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgXCJCT0RZXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwYXJlbnROb2RlXCIsIG51bGwpO1xuICAgIF90aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEhUTUxCb2R5RWxlbWVudCk7XG59KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0hUTUxFbGVtZW50LmpzXCI6MTh9XSwxNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxudmFyIF9IVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcbnZhciBfSW1hZ2VEYXRhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9JbWFnZURhdGFcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5pZiAocmFsLmdldEZlYXR1cmVQcm9wZXJ0eShcIkhUTUxDYW52YXNFbGVtZW50XCIsIFwic3BlY1wiKSA9PT0gXCJ2aXZvX3BsYXRmb3JtX3N1cHBvcnRcIikge1xuICB2YXIgSFRNTENhbnZhc0VsZW1lbnQgPSB3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQ7XG4gIG1vZHVsZS5leHBvcnRzID0gSFRNTENhbnZhc0VsZW1lbnQ7XG59IGVsc2Uge1xuICB2YXIgQ0FOVkFTX0RFRkFVTFRfV0lEVEggPSAzMDA7XG4gIHZhciBDQU5WQVNfREVGQVVMVF9IRUlHSFQgPSAxNTA7XG4gIHdpbmRvdy5yYWwgPSB3aW5kb3cucmFsIHx8IHt9O1xuICB2YXIgX2NyZWF0ZUNhbnZhcyA9IHJhbC5jcmVhdGVDYW52YXM7XG4gIHZhciBfSFRNTENhbnZhc0VsZW1lbnQgPSBmdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gICAgX2luaGVyaXRzKF9IVE1MQ2FudmFzRWxlbWVudCwgX0hUTUxFbGVtZW50KTtcbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKF9IVE1MQ2FudmFzRWxlbWVudCk7XG4gICAgZnVuY3Rpb24gX0hUTUxDYW52YXNFbGVtZW50KHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHZhciBfdGhpcztcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfSFRNTENhbnZhc0VsZW1lbnQpO1xuICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCAnQ0FOVkFTJyk7XG4gICAgICBfdGhpcy5pZCA9ICdnbGNhbnZhcyc7XG4gICAgICBfdGhpcy50eXBlID0gJ2NhbnZhcyc7XG4gICAgICBfdGhpcy50b3AgPSAwO1xuICAgICAgX3RoaXMubGVmdCA9IDA7XG4gICAgICBpZiAodHlwZW9mIHJhbC5nZXRGZWF0dXJlUHJvcGVydHkoXCJyYWwuY3JlYXRlQ2FudmFzXCIsIFwic3BlY1wiKSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB2YXIgY2FudmFzID0gX2NyZWF0ZUNhbnZhcygpO1xuICAgICAgICBjYW52YXMuX19wcm90b19fLl9fcHJvdG9fXyA9IF9IVE1MQ2FudmFzRWxlbWVudC5wcm90b3R5cGU7XG4gICAgICAgIE9iamVjdC5rZXlzKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBjYW52YXNba2V5XSA9IHRoaXNba2V5XTtcbiAgICAgICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoID49IDAgPyBNYXRoLmNlaWwod2lkdGgpIDogQ0FOVkFTX0RFRkFVTFRfV0lEVEg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgPj0gMCA/IE1hdGguY2VpbChoZWlnaHQpIDogQ0FOVkFTX0RFRkFVTFRfSEVJR0hUO1xuICAgICAgICBjYW52YXMuX3RhcmdldElEID0gX3RoaXMuX3RhcmdldElEO1xuICAgICAgICBjYW52YXMuX2xpc3RlbmVyQ291bnQgPSBfdGhpcy5fbGlzdGVuZXJDb3VudDtcbiAgICAgICAgY2FudmFzLl9saXN0ZW5lcnMgPSBfdGhpcy5fbGlzdGVuZXJzO1xuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIGNhbnZhcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5fd2lkdGggPSB3aWR0aCA/IE1hdGguY2VpbCh3aWR0aCkgOiBDQU5WQVNfREVGQVVMVF9XSURUSDtcbiAgICAgICAgX3RoaXMuX2hlaWdodCA9IGhlaWdodCA/IE1hdGguY2VpbChoZWlnaHQpIDogQ0FOVkFTX0RFRkFVTFRfSEVJR0hUO1xuICAgICAgICBfdGhpcy5fY29udGV4dDJEID0gbnVsbDtcbiAgICAgICAgX3RoaXMuX2RhdGFJbm5lciA9IG51bGw7XG4gICAgICAgIF90aGlzLl9hbGlnbm1lbnQgPSBfdGhpcy5fd2lkdGggJSAyID09PSAwID8gOCA6IDQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIF9jcmVhdGVDbGFzcyhfSFRNTENhbnZhc0VsZW1lbnQsIFt7XG4gICAgICBrZXk6IFwiZ2V0Q29udGV4dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnRleHQobmFtZSwgb3B0cykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChuYW1lID09PSAnd2ViZ2wnIHx8IG5hbWUgPT09ICdleHBlcmltZW50YWwtd2ViZ2wnKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5fX2dsO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICcyZCcpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2NvbnRleHQyRCkge1xuICAgICAgICAgICAgdGhpcy5fY29udGV4dDJEID0gbmV3IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0MkQuX2lubmVyQ2FudmFzID0gdGhpcztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQyRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2RhdGFcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICBpZiAodGhpcy5fY29udGV4dDJEID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9kYXRhSW5uZXIpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2NvbnRleHQyRC5fZ2V0RGF0YSgpO1xuICAgICAgICAgIHRoaXMuX2RhdGFJbm5lciA9IG5ldyBfSW1hZ2VEYXRhW1wiZGVmYXVsdFwiXShkYXRhLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJbm5lcjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xpZW50V2lkdGhcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xpZW50SGVpZ2h0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ3aWR0aFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh3aWR0aCkge1xuICAgICAgICB3aWR0aCA9IHBhcnNlSW50KHdpZHRoKTtcbiAgICAgICAgaWYgKGlzTmFOKHdpZHRoKSkge1xuICAgICAgICAgIHdpZHRoID0gQ0FOVkFTX0RFRkFVTFRfV0lEVEg7XG4gICAgICAgIH0gZWxzZSBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgd2lkdGggPSBDQU5WQVNfREVGQVVMVF9XSURUSDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLl9hbGlnbm1lbnQgPSB0aGlzLl93aWR0aCAlIDIgPT09IDAgPyA4IDogNDtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRleHQyRCkge1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQyRC5fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kYXRhSW5uZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJoZWlnaHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KGhlaWdodCkge1xuICAgICAgICBoZWlnaHQgPSBwYXJzZUludChoZWlnaHQpO1xuICAgICAgICBpZiAoaXNOYU4oaGVpZ2h0KSkge1xuICAgICAgICAgIGhlaWdodCA9IENBTlZBU19ERUZBVUxUX0hFSUdIVDtcbiAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gQ0FOVkFTX0RFRkFVTFRfSEVJR0hUO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRleHQyRCkge1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQyRC5faGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RhdGFJbm5lciA9IG51bGw7XG4gICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBfSFRNTENhbnZhc0VsZW1lbnQ7XG4gIH0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuICBtb2R1bGUuZXhwb3J0cyA9IF9IVE1MQ2FudmFzRWxlbWVudDtcbn1cblxufSx7XCIuL0hUTUxFbGVtZW50XCI6MTgsXCIuL0ltYWdlRGF0YVwiOjI4fV0sMTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0VsZW1lbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxudmFyIEhUTUxFbGVtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX0VsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxFbGVtZW50LCBfRWxlbWVudCk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSFRNTEVsZW1lbnQpO1xuICBmdW5jdGlvbiBIVE1MRWxlbWVudCh0YWdOYW1lKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MRWxlbWVudCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0YWdOYW1lKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2xhc3NOYW1lXCIsICcnKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2hpbGRlcm5cIiwgW10pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdHlsZVwiLCB7XG4gICAgICB3aWR0aDogXCJcIi5jb25jYXQod2luZG93LmlubmVyV2lkdGgsIFwicHhcIiksXG4gICAgICBoZWlnaHQ6IFwiXCIuY29uY2F0KHdpbmRvdy5pbm5lckhlaWdodCwgXCJweFwiKVxuICAgIH0pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbnNlcnRCZWZvcmVcIiwgZnVuY3Rpb24gKCkge30pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbm5lckhUTUxcIiwgJycpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoSFRNTEVsZW1lbnQsIFt7XG4gICAga2V5OiBcInNldEF0dHJpYnV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgICAgIHRoaXNbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QXR0cmlidXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpc1tuYW1lXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xpZW50V2lkdGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciByZXQgPSBwYXJzZUludCh0aGlzLnN0eWxlLmZvbnRTaXplLCAxMCkgKiB0aGlzLmlubmVySFRNTC5sZW5ndGg7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzTmFOKHJldCkgPyAwIDogcmV0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGllbnRIZWlnaHRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciByZXQgPSBwYXJzZUludCh0aGlzLnN0eWxlLmZvbnRTaXplLCAxMCk7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzTmFOKHJldCkgPyAwIDogcmV0O1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gSFRNTEVsZW1lbnQ7XG59KF9FbGVtZW50MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vRWxlbWVudFwiOjl9XSwxOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9IVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50LmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbnZhciBIVE1MSGVhZEVsZW1lbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxIZWFkRWxlbWVudCwgX0hUTUxFbGVtZW50KTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIVE1MSGVhZEVsZW1lbnQpO1xuICBmdW5jdGlvbiBIVE1MSGVhZEVsZW1lbnQocGFyZW50Tm9kZSkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTEhlYWRFbGVtZW50KTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFwiSEVBRFwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicGFyZW50Tm9kZVwiLCBudWxsKTtcbiAgICBfdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhIVE1MSGVhZEVsZW1lbnQpO1xufShfSFRNTEVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9IVE1MRWxlbWVudC5qc1wiOjE4fV0sMjA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbnZhciBIVE1MSHRtbEVsZW1lbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxIdG1sRWxlbWVudCwgX0hUTUxFbGVtZW50KTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIVE1MSHRtbEVsZW1lbnQpO1xuICBmdW5jdGlvbiBIVE1MSHRtbEVsZW1lbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxIdG1sRWxlbWVudCk7XG4gICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIFwiSFRNTFwiKTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoSFRNTEh0bWxFbGVtZW50LCBbe1xuICAgIGtleTogXCJ2ZXJzaW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEhUTUxIdG1sRWxlbWVudDtcbn0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vSFRNTEVsZW1lbnRcIjoxOH1dLDIxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG52YXIgX0hUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnRcIikpO1xudmFyIF9FdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5pZiAocmFsLmdldEZlYXR1cmVQcm9wZXJ0eShcIkhUTUxJbWFnZUVsZW1lbnRcIiwgXCJzcGVjXCIpID09PSBcInZpdm9fcGxhdGZvcm1fc3VwcG9ydFwiKSB7XG4gIHZhciBIVE1MSW1hZ2VFbGVtZW50ID0gd2luZG93LkhUTUxJbWFnZUVsZW1lbnQ7XG4gIG1vZHVsZS5leHBvcnRzID0gSFRNTEltYWdlRWxlbWVudDtcbn0gZWxzZSB7XG4gIHdpbmRvdy5yYWwgPSB3aW5kb3cucmFsIHx8IHt9O1xuICB2YXIgX2NyZXRlSW1hZ2UgPSByYWwuY3JlYXRlSW1hZ2U7XG4gIHZhciBfaW1hZ2U7XG4gIHZhciBfc2V0dGVyO1xuICB2YXIgX2dldHRlcjtcbiAgaWYgKHR5cGVvZiByYWwuZ2V0RmVhdHVyZVByb3BlcnR5KFwicmFsLmNyZWF0ZUltYWdlXCIsIFwic3BlY1wiKSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIF9pbWFnZSA9IF9jcmV0ZUltYWdlKCk7XG4gICAgdmFyIF9kZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfaW1hZ2UuX19wcm90b19fLCBcInNyY1wiKTtcbiAgICBfc2V0dGVyID0gX2Rlc2NyaXB0b3Iuc2V0O1xuICAgIF9nZXR0ZXIgPSBfZGVzY3JpcHRvci5nZXQ7XG4gIH1cbiAgdmFyIF9IVE1MSW1hZ2VFbGVtZW50ID0gZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICAgIF9pbmhlcml0cyhfSFRNTEltYWdlRWxlbWVudCwgX0hUTUxFbGVtZW50KTtcbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKF9IVE1MSW1hZ2VFbGVtZW50KTtcbiAgICBmdW5jdGlvbiBfSFRNTEltYWdlRWxlbWVudCh3aWR0aCwgaGVpZ2h0LCBpc0NhbGxlZEZyb21JbWFnZSkge1xuICAgICAgdmFyIF90aGlzO1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9IVE1MSW1hZ2VFbGVtZW50KTtcbiAgICAgIGlmICghaXNDYWxsZWRGcm9tSW1hZ2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgY29uc3RydWN0b3IsIHVzZSAnbmV3IEltYWdlKHcsIGgpOyBpbnN0ZWFkISdcIik7XG4gICAgICB9XG4gICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsICdJTUcnKTtcbiAgICAgIF90aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICBfdGhpcy5jcm9zc09yaWdpbiA9IG51bGw7XG4gICAgICBfdGhpcy5uYXR1cmFsV2lkdGggPSAwO1xuICAgICAgX3RoaXMubmF0dXJhbEhlaWdodCA9IDA7XG4gICAgICBfdGhpcy53aWR0aCA9IHdpZHRoIHx8IDA7XG4gICAgICBfdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgMDtcbiAgICAgIGlmICh0eXBlb2YgcmFsLmdldEZlYXR1cmVQcm9wZXJ0eShcInJhbC5jcmVhdGVJbWFnZVwiLCBcInNwZWNcIikgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdmFyIGltYWdlID0gX2NyZXRlSW1hZ2UoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIGltYWdlW2tleV0gPSB0aGlzW2tleV07XG4gICAgICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgICAgICBpbWFnZS5fb25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMubmF0dXJhbFdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgICB0aGlzLm5hdHVyYWxIZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkXCIpKTtcbiAgICAgICAgfS5iaW5kKGltYWdlKTtcbiAgICAgICAgaW1hZ2UuX29uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwiZXJyb3JcIikpO1xuICAgICAgICB9LmJpbmQoaW1hZ2UpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW1hZ2UsIFwic3JjXCIsIHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfZ2V0dGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIF9zZXR0ZXIuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBpbWFnZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIF9jcmVhdGVDbGFzcyhfSFRNTEltYWdlRWxlbWVudCwgW3tcbiAgICAgIGtleTogXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRE9NUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNyY1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcmM7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoc3JjKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgICAgICB0aGlzLl9zcmMgPSBzcmM7XG4gICAgICAgIGlmIChzcmMgPT09IFwiXCIpIHtcbiAgICAgICAgICB0aGlzLndpZHRoID0gMDtcbiAgICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgICAgdGhpcy5fZGF0YSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5faW1hZ2VNZXRhID0gbnVsbDtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9nbEZvcm1hdCA9IHRoaXMuX2dsSW50ZXJuYWxGb3JtYXQgPSAweDE5MDg7XG4gICAgICAgICAgdGhpcy5jcm9zc09yaWdpbiA9IG51bGw7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJhbC5sb2FkSW1hZ2VEYXRhKHNyYywgZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgICAgIHZhciBfZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXSgnZXJyb3InKTtcbiAgICAgICAgICAgIF90aGlzMi5kaXNwYXRjaEV2ZW50KF9ldmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIF90aGlzMi5faW1hZ2VNZXRhID0gaW5mbztcbiAgICAgICAgICBfdGhpczIud2lkdGggPSBfdGhpczIubmF0dXJhbFdpZHRoID0gaW5mby53aWR0aDtcbiAgICAgICAgICBfdGhpczIuaGVpZ2h0ID0gX3RoaXMyLm5hdHVyYWxIZWlnaHQgPSBpbmZvLmhlaWdodDtcbiAgICAgICAgICBfdGhpczIuX2RhdGEgPSBpbmZvLmRhdGE7XG4gICAgICAgICAgX3RoaXMyLl9nbEZvcm1hdCA9IGluZm8uZ2xGb3JtYXQ7XG4gICAgICAgICAgX3RoaXMyLl9nbEludGVybmFsRm9ybWF0ID0gaW5mby5nbEludGVybmFsRm9ybWF0O1xuICAgICAgICAgIF90aGlzMi5fZ2xUeXBlID0gaW5mby5nbFR5cGU7XG4gICAgICAgICAgX3RoaXMyLl9udW1iZXJPZk1pcG1hcHMgPSBpbmZvLm51bWJlck9mTWlwbWFwcztcbiAgICAgICAgICBfdGhpczIuX2NvbXByZXNzZWQgPSBpbmZvLmNvbXByZXNzZWQ7XG4gICAgICAgICAgX3RoaXMyLl9icHAgPSBpbmZvLmJwcDtcbiAgICAgICAgICBfdGhpczIuX3ByZW11bHRpcGx5QWxwaGEgPSBpbmZvLnByZW11bHRpcGx5QWxwaGE7XG4gICAgICAgICAgX3RoaXMyLl9hbGlnbm1lbnQgPSAxO1xuICAgICAgICAgIGlmICgoX3RoaXMyLl9udW1iZXJPZk1pcG1hcHMgPT0gMCB8fCBfdGhpczIuX251bWJlck9mTWlwbWFwcyA9PSAxKSAmJiAhX3RoaXMyLl9jb21wcmVzc2VkKSB7XG4gICAgICAgICAgICB2YXIgYnl0ZXNQZXJSb3cgPSBfdGhpczIud2lkdGggKiBfdGhpczIuX2JwcCAvIDg7XG4gICAgICAgICAgICBpZiAoYnl0ZXNQZXJSb3cgJSA4ID09IDApIF90aGlzMi5fYWxpZ25tZW50ID0gODtlbHNlIGlmIChieXRlc1BlclJvdyAlIDQgPT0gMCkgX3RoaXMyLl9hbGlnbm1lbnQgPSA0O2Vsc2UgaWYgKGJ5dGVzUGVyUm93ICUgMiA9PSAwKSBfdGhpczIuX2FsaWdubWVudCA9IDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIF90aGlzMi5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oJ2xvYWQnKTtcbiAgICAgICAgICBfdGhpczIuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbGllbnRXaWR0aFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpZHRoO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbGllbnRIZWlnaHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBfSFRNTEltYWdlRWxlbWVudDtcbiAgfShfSFRNTEVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG4gIG1vZHVsZS5leHBvcnRzID0gX0hUTUxJbWFnZUVsZW1lbnQ7XG59XG5cbn0se1wiLi9FdmVudFwiOjEwLFwiLi9IVE1MRWxlbWVudFwiOjE4fV0sMjI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2dldCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCk7IH0gZWxzZSB7IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7IGlmICghYmFzZSkgcmV0dXJuOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpOyBpZiAoZGVzYy5nZXQpIHsgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7IH0gcmV0dXJuIGRlc2MudmFsdWU7IH07IH0gcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkgeyB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkgeyBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7IH0gcmV0dXJuIG9iamVjdDsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbndpbmRvdy5yYWwgPSB3aW5kb3cucmFsIHx8IHt9O1xudmFyIEhUTUxJbnB1dEVsZW1lbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxJbnB1dEVsZW1lbnQsIF9IVE1MRWxlbWVudCk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSFRNTElucHV0RWxlbWVudCk7XG4gIGZ1bmN0aW9uIEhUTUxJbnB1dEVsZW1lbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxJbnB1dEVsZW1lbnQpO1xuICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBcIklOUFVUXCIpO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhIVE1MSW5wdXRFbGVtZW50LCBbe1xuICAgIGtleTogXCJmb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlKSwgXCJmb2N1c1wiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgaWYgKCF0aGlzLnRhcmdldC5lZGl0YWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB2YXIgb25LZXlib2FyZElucHV0ID0gZnVuY3Rpb24gb25LZXlib2FyZElucHV0KHJlcykge1xuICAgICAgICB2YXIgc3RyID0gcmVzID8gcmVzLnZhbHVlIDogXCJcIjtcbiAgICAgICAgdGhhdC5pbnB1dFRhcmdldC50ZXh0ID0gc3RyO1xuICAgICAgICB0aGF0LnRhcmdldC5ldmVudChcImlucHV0XCIpO1xuICAgICAgfTtcbiAgICAgIHZhciBvbktleWJvYXJkQ29uZmlybSA9IGZ1bmN0aW9uIG9uS2V5Ym9hcmRDb25maXJtKHJlcykge1xuICAgICAgICB2YXIgc3RyID0gcmVzID8gcmVzLnZhbHVlIDogXCJcIjtcbiAgICAgICAgdGhhdC50YXJnZXQudGV4dCA9IHN0cjtcbiAgICAgICAgdGhhdC50YXJnZXQuZXZlbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhhdC50YXJnZXQuZm9jdXMgPSBmYWxzZTtcbiAgICAgICAgcmFsLm9mZktleWJvYXJkQ29uZmlybShvbktleWJvYXJkQ29uZmlybSk7XG4gICAgICAgIHJhbC5vZmZLZXlib2FyZElucHV0KG9uS2V5Ym9hcmRJbnB1dCk7XG4gICAgICAgIHJhbC5oaWRlS2V5Ym9hcmQoe30pO1xuICAgICAgfTtcbiAgICAgIHJhbC5vZmZLZXlib2FyZElucHV0KG9uS2V5Ym9hcmRJbnB1dCk7XG4gICAgICByYWwub2ZmS2V5Ym9hcmRDb25maXJtKG9uS2V5Ym9hcmRDb25maXJtKTtcbiAgICAgIHJhbC5zaG93S2V5Ym9hcmQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIG1heExlbmd0aDogdGhpcy5tYXhMZW5ndGgsXG4gICAgICAgIG11bHRpcGxlOiB0aGlzLnRhcmdldC5tdWx0aWxpbmUsXG4gICAgICAgIGNvbmZpcm1Ib2xkOiBmYWxzZSxcbiAgICAgICAgaW5wdXRUeXBlOiB0aGlzLnRhcmdldC50eXBlLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge30sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwocmVzKSB7fVxuICAgICAgfSk7XG4gICAgICByYWwub25LZXlib2FyZElucHV0KG9uS2V5Ym9hcmRJbnB1dCk7XG4gICAgICByYWwub25LZXlib2FyZENvbmZpcm0ob25LZXlib2FyZENvbmZpcm0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJibHVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSksIFwiYmx1clwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgcmFsLmhpZGVLZXlib2FyZCh7fSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBIVE1MSW5wdXRFbGVtZW50O1xufShfSFRNTEVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9IVE1MRWxlbWVudFwiOjE4fV0sMjM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFwiKSk7XG52YXIgX01lZGlhRXJyb3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01lZGlhRXJyb3JcIikpO1xudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL1dlYWtNYXBcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxudmFyIEhUTUxNZWRpYUVsZW1lbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxNZWRpYUVsZW1lbnQsIF9IVE1MRWxlbWVudCk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSFRNTE1lZGlhRWxlbWVudCk7XG4gIGZ1bmN0aW9uIEhUTUxNZWRpYUVsZW1lbnQodXJsLCB0eXBlKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MTWVkaWFFbGVtZW50KTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHR5cGUpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJhdWRpb1RyYWNrc1wiLCB1bmRlZmluZWQpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJhdXRvcGxheVwiLCBmYWxzZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNvbnRyb2xsZXJcIiwgbnVsbCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNvbnRyb2xzXCIsIGZhbHNlKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY3Jvc3NPcmlnaW5cIiwgbnVsbCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImRlZmF1bHRNdXRlZFwiLCBmYWxzZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImRlZmF1bHRQbGF5YmFja1JhdGVcIiwgMS4wKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibWVkaWFHcm91cFwiLCB1bmRlZmluZWQpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJtZWRpYUtleXNcIiwgbnVsbCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm1vekF1ZGlvQ2hhbm5lbFR5cGVcIiwgdW5kZWZpbmVkKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibXV0ZWRcIiwgZmFsc2UpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJuZXR3b3JrU3RhdGVcIiwgSFRNTE1lZGlhRWxlbWVudC5ORVRXT1JLX0VNUFRZKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicGxheWJhY2tSYXRlXCIsIDEpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibG9vcFwiLCBmYWxzZSk7XG4gICAgT2JqZWN0LmFzc2lnbihfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwge1xuICAgICAgYnVmZmVyZWQ6IHVuZGVmaW5lZCxcbiAgICAgIGN1cnJlbnRTcmM6IHVybCB8fCBcIlwiLFxuICAgICAgZHVyYXRpb246IDAsXG4gICAgICBlbmRlZDogZmFsc2UsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIGluaXRpYWxUaW1lOiAwLFxuICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgcmVhZHlTdGF0ZTogSFRNTE1lZGlhRWxlbWVudC5IQVZFX05PVEhJTkcsXG4gICAgICB2b2x1bWU6IDEuMCxcbiAgICAgIGN1cnJlbnRUaW1lOiAwXG4gICAgfSk7XG4gICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZW5kZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJwbGF5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZW5kZWQgPSBmYWxzZTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZXJyb3IgPSBudWxsO1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5wYXVzZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBfdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5lcnJvciA9IHRydWU7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmVuZGVkID0gdHJ1ZTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykucGF1c2VkID0gZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhIVE1MTWVkaWFFbGVtZW50LCBbe1xuICAgIGtleTogXCJjdXJyZW50VGltZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuY3VycmVudFRpbWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5jdXJyZW50VGltZSA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzcmNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmN1cnJlbnRTcmM7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5jdXJyZW50U3JjID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJ1ZmZlcmVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5idWZmZXJlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3VycmVudFNyY1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuY3VycmVudFNyYztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZHVyYXRpb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmR1cmF0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlbmRlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZW5kZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVycm9yXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5lcnJvcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW5pdGlhbFRpbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmluaXRpYWxUaW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwYXVzZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLnBhdXNlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidm9sdW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS52b2x1bWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS52b2x1bWUgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuUGxheVR5cGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUGxheVR5cGUobWVkaWFUeXBlKSB7XG4gICAgICByZXR1cm4gJ21heWJlJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FwdHVyZVN0cmVhbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYXB0dXJlU3RyZWFtKCkge31cbiAgfSwge1xuICAgIGtleTogXCJmYXN0U2Vla1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmYXN0U2VlaygpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKCkge31cbiAgfSwge1xuICAgIGtleTogXCJwYXVzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicGxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge31cbiAgfV0sIFt7XG4gICAga2V5OiBcIk5FVFdPUktfRU1QVFlcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJORVRXT1JLX0lETEVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJORVRXT1JLX0xPQURJTkdcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJORVRXT1JLX05PX1NPVVJDRVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkhBVkVfTk9USElOR1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkhBVkVfTUVUQURBVEFcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJIQVZFX0NVUlJFTlRfREFUQVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkhBVkVfRlVUVVJFX0RBVEFcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJIQVZFX0VOT1VHSF9EQVRBXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gNDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEhUTUxNZWRpYUVsZW1lbnQ7XG59KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0hUTUxFbGVtZW50XCI6MTgsXCIuL01lZGlhRXJyb3JcIjozMCxcIi4vdXRpbC9XZWFrTWFwXCI6NTd9XSwyNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9IVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcbnZhciBfRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcbnZhciBfRmlsZUNhY2hlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL0ZpbGVDYWNoZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgX0JBU0U2NF9OQU1FID0gXCJkYXRhOmFwcGxpY2F0aW9uL2phdmFzY3JpcHQ7YmFzZTY0LFwiO1xudmFyIF9VUklfTkFNRSA9IFwiZGF0YTphcHBsaWNhdGlvbi9qYXZhc2NyaXB0LFwiO1xudmFyIF9nZXRQYXRoRnJvbUJhc2U2NFN0cmluZyA9IGZ1bmN0aW9uIF9nZXRQYXRoRnJvbUJhc2U2NFN0cmluZyhzcmMpIHtcbiAgaWYgKHNyYyA9PT0gbnVsbCB8fCBzcmMgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBzcmM7XG4gIH1cbiAgaWYgKHNyYy5zdGFydHNXaXRoKF9CQVNFNjRfTkFNRSkpIHtcbiAgICB2YXIgY29udGVudCA9IHNyYy5zdWJzdHJpbmcoX0JBU0U2NF9OQU1FLmxlbmd0aCk7XG4gICAgdmFyIHNvdXJjZSA9IHdpbmRvdy5hdG9iKGNvbnRlbnQpO1xuICAgIHZhciBsZW4gPSBzb3VyY2UubGVuZ3RoO1xuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICByZXR1cm4gX2dldERpc2tQYXRoRnJvbUFycmF5QnVmZmVyKHNvdXJjZSwgbGVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNyYztcbiAgICB9XG4gIH0gZWxzZSBpZiAoc3JjLnN0YXJ0c1dpdGgoX1VSSV9OQU1FKSkge1xuICAgIHZhciBfY29udGVudCA9IHNyYy5zdWJzdHJpbmcoX1VSSV9OQU1FLmxlbmd0aCk7XG4gICAgdmFyIF9zb3VyY2UgPSBkZWNvZGVVUklDb21wb25lbnQoX2NvbnRlbnQpO1xuICAgIHZhciBfbGVuID0gX3NvdXJjZS5sZW5ndGg7XG4gICAgaWYgKF9sZW4gPiAwKSB7XG4gICAgICByZXR1cm4gX2dldERpc2tQYXRoRnJvbUFycmF5QnVmZmVyKF9zb3VyY2UsIF9sZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3JjO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3JjO1xuICB9XG59O1xuZnVuY3Rpb24gX2dldERpc2tQYXRoRnJvbUFycmF5QnVmZmVyKHNvdXJjZSwgbGVuKSB7XG4gIHZhciBhcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihsZW4pO1xuICB2YXIgdWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHVpbnQ4QXJyYXlbaV0gPSBzb3VyY2UuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gX0ZpbGVDYWNoZVtcImRlZmF1bHRcIl0uZ2V0Q2FjaGUoYXJyYXlCdWZmZXIpO1xufVxudmFyIEhUTUxTY3JpcHRFbGVtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MU2NyaXB0RWxlbWVudCwgX0hUTUxFbGVtZW50KTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIVE1MU2NyaXB0RWxlbWVudCk7XG4gIGZ1bmN0aW9uIEhUTUxTY3JpcHRFbGVtZW50KCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTFNjcmlwdEVsZW1lbnQpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgJ1NDUklQVCcpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJub01vZHVsZVwiLCBmYWxzZSk7XG4gICAgdmFyIHNlbGYgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTtcbiAgICB2YXIgb25BcHBlbmQgPSBmdW5jdGlvbiBvbkFwcGVuZCgpIHtcbiAgICAgIHNlbGYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFwcGVuZFwiLCBvbkFwcGVuZCk7XG4gICAgICB2YXIgc3JjID0gX2dldFBhdGhGcm9tQmFzZTY0U3RyaW5nKHNlbGYuc3JjKTtcbiAgICAgIHJlcXVpcmUoc3JjKTtcbiAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXSgnbG9hZCcpKTtcbiAgICB9O1xuICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJhcHBlbmRcIiwgb25BcHBlbmQpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEhUTUxTY3JpcHRFbGVtZW50KTtcbn0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxTY3JpcHRFbGVtZW50LnByb3RvdHlwZSwgXCJub01vZHVsZVwiLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IobWVzc2FnZSwgXCJJbGxlZ2FsIGludm9jYXRpb25cIik7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtZXNzYWdlLCBcIklsbGVnYWwgaW52b2NhdGlvblwiKTtcbiAgfVxufSk7XG5cbn0se1wiLi9FdmVudFwiOjEwLFwiLi9IVE1MRWxlbWVudFwiOjE4LFwiLi91dGlsL0ZpbGVDYWNoZVwiOjU2fV0sMjU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRm9udEZhY2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ZvbnRGYWNlXCIpKTtcbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbnZhciBIVE1MU3R5bGVFbGVtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MU3R5bGVFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxTdHlsZUVsZW1lbnQpO1xuICBmdW5jdGlvbiBIVE1MU3R5bGVFbGVtZW50KCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTFN0eWxlRWxlbWVudCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBcIlNUWUxFXCIpO1xuICAgIHZhciBzZWxmID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyk7XG4gICAgdmFyIG9uQXBwZW5kID0gZnVuY3Rpb24gb25BcHBlbmQoKSB7XG4gICAgICBzZWxmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhcHBlbmRcIiwgb25BcHBlbmQpO1xuICAgICAgdmFyIHRleHRDb250ZW50ID0gc2VsZi50ZXh0Q29udGVudCB8fCBzZWxmLmlubmVySFRNTCB8fCBcIlwiO1xuICAgICAgdmFyIGZvbnRGYWNlU3RyID0gXCJcIjtcbiAgICAgIHZhciBzdGFydCA9IDA7XG4gICAgICB2YXIgbGVuZ3RoID0gdGV4dENvbnRlbnQubGVuZ3RoO1xuICAgICAgdmFyIGZsYWcgPSAwO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICBpZiAoc3RhcnQgPiAwKSB7XG4gICAgICAgICAgaWYgKHRleHRDb250ZW50W2luZGV4XSA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIGZsYWcrKztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRleHRDb250ZW50W2luZGV4XSA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIGZsYWctLTtcbiAgICAgICAgICAgIGlmIChmbGFnID09PSAwKSB7XG4gICAgICAgICAgICAgIGZvbnRGYWNlU3RyID0gdGV4dENvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0LCBpbmRleCArIDEpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmxhZyA8IDApIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0ZXh0Q29udGVudFtpbmRleF0gPT09IFwiQFwiICYmIHRleHRDb250ZW50LnN1YnN0cihpbmRleCwgXCJAZm9udC1mYWNlXCIubGVuZ3RoKSA9PT0gXCJAZm9udC1mYWNlXCIpIHtcbiAgICAgICAgICAgIGluZGV4ICs9IDk7XG4gICAgICAgICAgICBzdGFydCA9IGluZGV4ICsgMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb250RmFjZVN0cikge1xuICAgICAgICB2YXIgZm9udEZhbWlseTtcbiAgICAgICAgdmFyIF9sZW5ndGggPSBmb250RmFjZVN0ci5sZW5ndGg7XG4gICAgICAgIHZhciBfc3RhcnQgPSBmb250RmFjZVN0ci5pbmRleE9mKFwiZm9udC1mYW1pbHlcIik7XG4gICAgICAgIGlmIChfc3RhcnQgPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9zdGFydCArPSBcImZvbnQtZmFtaWx5XCIubGVuZ3RoICsgMTtcbiAgICAgICAgdmFyIGVuZCA9IF9zdGFydDtcbiAgICAgICAgZm9yICg7IGVuZCA8IF9sZW5ndGg7ICsrZW5kKSB7XG4gICAgICAgICAgaWYgKGZvbnRGYWNlU3RyW2VuZF0gPT09IFwiO1wiKSB7XG4gICAgICAgICAgICBmb250RmFtaWx5ID0gZm9udEZhY2VTdHIuc3Vic3RyaW5nKF9zdGFydCwgZW5kKS50cmltKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2UgaWYgKGZvbnRGYWNlU3RyW2VuZF0gPT09IFwiOlwiKSB7XG4gICAgICAgICAgICBfc3RhcnQgPSBlbmQgKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvbnRGYW1pbHkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZW5kID0gZm9udEZhY2VTdHIuaW5kZXhPZihcInVybChcIik7XG4gICAgICAgIF9zdGFydCA9IDA7XG4gICAgICAgIHZhciBzb3VyY2U7XG4gICAgICAgIGZvciAoOyBlbmQgPCBfbGVuZ3RoOyArK2VuZCkge1xuICAgICAgICAgIGlmIChmb250RmFjZVN0cltlbmRdID09PSBcIidcIiB8fCBmb250RmFjZVN0cltlbmRdID09PSAnXCInKSB7XG4gICAgICAgICAgICBpZiAoX3N0YXJ0ID4gMCkge1xuICAgICAgICAgICAgICBzb3VyY2UgPSBmb250RmFjZVN0ci5zdWJzdHJpbmcoX3N0YXJ0LCBlbmQpLnRyaW0oKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfc3RhcnQgPSBlbmQgKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgdmFyIGZvbnRGYWNlID0gbmV3IF9Gb250RmFjZVtcImRlZmF1bHRcIl0oZm9udEZhbWlseSwgc291cmNlKTtcbiAgICAgICAgICBmb250RmFjZS5sb2FkKCk7XG4gICAgICAgICAgZG9jdW1lbnQuZm9udHMuYWRkKGZvbnRGYWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImFwcGVuZFwiLCBvbkFwcGVuZCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoSFRNTFN0eWxlRWxlbWVudCk7XG59KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0ZvbnRGYWNlXCI6MTIsXCIuL0hUTUxFbGVtZW50XCI6MTh9XSwyNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9IVE1MTWVkaWFFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTE1lZGlhRWxlbWVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbnZhciBIVE1MVmlkZW9FbGVtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX0hUTUxNZWRpYUVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxWaWRlb0VsZW1lbnQsIF9IVE1MTWVkaWFFbGVtZW50KTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIVE1MVmlkZW9FbGVtZW50KTtcbiAgZnVuY3Rpb24gSFRNTFZpZGVvRWxlbWVudCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTFZpZGVvRWxlbWVudCk7XG4gICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsICdWSURFTycpO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhIVE1MVmlkZW9FbGVtZW50LCBbe1xuICAgIGtleTogXCJjYW5QbGF5VHlwZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5QbGF5VHlwZSh0eXBlKSB7XG4gICAgICByZXR1cm4gdHlwZSA9PT0gJ3ZpZGVvL21wNCc7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBIVE1MVmlkZW9FbGVtZW50O1xufShfSFRNTE1lZGlhRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0hUTUxNZWRpYUVsZW1lbnRcIjoyM31dLDI3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG52YXIgX0hUTUxJbWFnZUVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MSW1hZ2VFbGVtZW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuaWYgKHJhbC5nZXRGZWF0dXJlUHJvcGVydHkoXCJJbWFnZVwiLCBcInNwZWNcIikgPT09IFwidml2b19wbGF0Zm9ybV9zdXBwb3J0XCIpIHtcbiAgdmFyIEltYWdlID0gd2luZG93LkltYWdlO1xuICBtb2R1bGUuZXhwb3J0cyA9IEltYWdlO1xufSBlbHNlIHtcbiAgdmFyIF9JbWFnZSA9IHdpbmRvdy5JbWFnZTtcbiAgdmFyIF9JbWFnZTIgPSBmdW5jdGlvbiAoX0hUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICBfaW5oZXJpdHMoX0ltYWdlMiwgX0hUTUxJbWFnZUVsZW1lbnQpO1xuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoX0ltYWdlMik7XG4gICAgZnVuY3Rpb24gX0ltYWdlMih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX0ltYWdlMik7XG4gICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgd2lkdGgsIGhlaWdodCwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiBfY3JlYXRlQ2xhc3MoX0ltYWdlMik7XG4gIH0oX0hUTUxJbWFnZUVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG4gIHZhciBfY3JldGVJbWFnZSA9IHJhbC5jcmVhdGVJbWFnZTtcbiAgaWYgKF9jcmV0ZUltYWdlKSB7XG4gICAgX0ltYWdlLnByb3RvdHlwZS5fX3Byb3RvX18gPSBfSW1hZ2UyLnByb3RvdHlwZTtcbiAgfVxuICBtb2R1bGUuZXhwb3J0cyA9IF9JbWFnZTI7XG59XG5cbn0se1wiLi9IVE1MSW1hZ2VFbGVtZW50XCI6MjF9XSwyODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgSW1hZ2VEYXRhID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBJbWFnZURhdGEoYXJyYXksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW1hZ2VEYXRhKTtcbiAgICBpZiAodHlwZW9mIGFycmF5ID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygd2lkdGggPT0gJ251bWJlcicpIHtcbiAgICAgIGhlaWdodCA9IHdpZHRoO1xuICAgICAgd2lkdGggPSBhcnJheTtcbiAgICAgIGFycmF5ID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGFycmF5ID09PSBudWxsKSB7XG4gICAgICB0aGlzLl9kYXRhID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHdpZHRoICogaGVpZ2h0ICogNCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBhcnJheTtcbiAgICB9XG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEltYWdlRGF0YSwgW3tcbiAgICBrZXk6IFwiZGF0YVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIndpZHRoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhlaWdodFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEltYWdlRGF0YTtcbn0oKTtcbm1vZHVsZS5leHBvcnRzID0gSW1hZ2VEYXRhO1xuXG59LHt9XSwyOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxudmFyIExvY2F0aW9uID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExvY2F0aW9uKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhdGlvbik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYW5jZXN0b3JPcmlnaW5zXCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImhhc2hcIiwgXCJcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaG9zdFwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJob3N0bmFtZVwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJocmVmXCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9yaWdpblwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwYXNzd29yZFwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwYXRobmFtZVwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwb3J0XCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInByb3RvY29sXCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNlYXJjaFwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1c2VybmFtZVwiLCBcIlwiKTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoTG9jYXRpb24sIFt7XG4gICAga2V5OiBcImFzc2lnblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhc3NpZ24oKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInJlbG9hZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWxvYWQoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInJlcGxhY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbGFjZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIExvY2F0aW9uO1xufSgpO1xuXG59LHt9XSwzMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgTUVESUFfRVJSX0FCT1JURUQgPSAxO1xudmFyIE1FRElBX0VSUl9ORVRXT1JLID0gMjtcbnZhciBNRURJQV9FUlJfREVDT0RFID0gMztcbnZhciBNRURJQV9FUlJfU1JDX05PVF9TVVBQT1JURUQgPSA0O1xudmFyIE1lZGlhRXJyb3IgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWVkaWFFcnJvcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVkaWFFcnJvcik7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKE1lZGlhRXJyb3IsIFt7XG4gICAga2V5OiBcImNvZGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBNRURJQV9FUlJfQUJPUlRFRDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWVzc2FnZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBNZWRpYUVycm9yO1xufSgpO1xubW9kdWxlLmV4cG9ydHMgPSBNZWRpYUVycm9yO1xuXG59LHt9XSwzMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxudmFyIE5hdmlnYXRvciA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2NyZWF0ZUNsYXNzKGZ1bmN0aW9uIE5hdmlnYXRvcihwbGF0Zm9ybSwgbGFuZ3VhZ2UpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5hdmlnYXRvcik7XG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBsYXRmb3JtXCIsIFwiXCIpO1xuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJsYW5ndWFnZVwiLCBcIlwiKTtcbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXBwVmVyc2lvblwiLCAnNS4wIChpUGhvbmU7IENQVSBpUGhvbmUgT1MgOV8xIGxpa2UgTWFjIE9TIFgpIEFwcGxlV2ViS2l0LzYwMS4xLjQ2IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi85LjAgTW9iaWxlLzEzQjE0MyBTYWZhcmkvNjAxLjEnKTtcbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidXNlckFnZW50XCIsICdNb3ppbGxhLzUuMCAoaVBob25lOyBDUFUgaVBob25lIE9TIDEwXzNfMSBsaWtlIE1hYyBPUyBYKSBBcHBsZVdlYktpdC82MDMuMS4zMCAoS0hUTUwsIGxpa2UgR2Vja28pIE1vYmlsZS8xNEU4MzAxIE5ldFR5cGUvV0lGSSBMYW5ndWFnZS96aF9DTicpO1xuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvbkxpbmVcIiwgdHJ1ZSk7XG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1heFRvdWNoUG9pbnRzXCIsIDEwKTtcbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2VvbG9jYXRpb25cIiwge1xuICAgIGdldEN1cnJlbnRQb3NpdGlvbjogZnVuY3Rpb24gZ2V0Q3VycmVudFBvc2l0aW9uKCkge30sXG4gICAgd2F0Y2hQb3NpdGlvbjogZnVuY3Rpb24gd2F0Y2hQb3NpdGlvbigpIHt9LFxuICAgIGNsZWFyV2F0Y2g6IGZ1bmN0aW9uIGNsZWFyV2F0Y2goKSB7fVxuICB9KTtcbiAgdGhpcy5wbGF0Zm9ybSA9IHBsYXRmb3JtO1xuICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG59KTtcblxufSx7fV0sMzI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRXZlbnRUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFRhcmdldFwiKSk7XG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9nZXQoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkgeyBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpOyB9IGVsc2UgeyBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikgeyB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpOyBpZiAoIWJhc2UpIHJldHVybjsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTsgaWYgKGRlc2MuZ2V0KSB7IHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjLnZhbHVlOyB9OyB9IHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHsgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHsgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrOyB9IHJldHVybiBvYmplY3Q7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgTm9kZSA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICBfaW5oZXJpdHMoTm9kZSwgX0V2ZW50VGFyZ2V0KTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihOb2RlKTtcbiAgZnVuY3Rpb24gTm9kZShub2RlTmFtZSkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZSk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2hpbGROb2Rlc1wiLCBbXSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInBhcmVudE5vZGVcIiwgbnVsbCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9ub2RlTmFtZVwiLCBcIlwiKTtcbiAgICBfdGhpcy5fbm9kZU5hbWUgPSBub2RlTmFtZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKE5vZGUsIFt7XG4gICAga2V5OiBcImFwcGVuZENoaWxkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZENoaWxkKG5vZGUpIHtcbiAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgbm9kZS5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgIHZhciBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWU7XG4gICAgICBpZiAobm9kZU5hbWUgPT09IFwiU0NSSVBUXCIgfHwgbm9kZU5hbWUgPT09IFwiU1RZTEVcIikge1xuICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJhcHBlbmRcIikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsb25lTm9kZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZU5vZGUoKSB7XG4gICAgICB2YXIgY29weU5vZGUgPSBPYmplY3QuY3JlYXRlKHRoaXMpO1xuICAgICAgT2JqZWN0LmFzc2lnbihjb3B5Tm9kZSwgdGhpcyk7XG4gICAgICBjb3B5Tm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgIHJldHVybiBjb3B5Tm9kZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQ2hpbGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2hpbGQobm9kZSkge1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmZpbmRJbmRleChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkID09PSBub2RlO1xuICAgICAgfSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB2YXIgX25vZGUgPSB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKVswXTtcbiAgICAgICAgX25vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIHJldHVybiBfbm9kZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb250YWluc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb250YWlucyhub2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobm9kZSkgPiAtMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzcGF0Y2hFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHRydWU7XG4gICAgICB2YXIgbGVuZ3RoID0gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gbGVuZ3RoIC0gMTsgcmVzdWx0ICYmIGluZGV4ID49IDA7IC0taW5kZXgpIHtcbiAgICAgICAgdmFyIF90aGlzJGNoaWxkTm9kZXMkaW5kZTtcbiAgICAgICAgcmVzdWx0ID0gKF90aGlzJGNoaWxkTm9kZXMkaW5kZSA9IHRoaXMuY2hpbGROb2Rlc1tpbmRleF0pLmRpc3BhdGNoRXZlbnQuYXBwbHkoX3RoaXMkY2hpbGROb2RlcyRpbmRlLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTm9kZS5wcm90b3R5cGUpLCBcImRpc3BhdGNoRXZlbnRcIiwgdGhpcykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibm9kZU5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ub2RlTmFtZTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE5vZGU7XG59KF9FdmVudFRhcmdldDJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0V2ZW50XCI6MTAsXCIuL0V2ZW50VGFyZ2V0XCI6MTF9XSwzMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL1dlYWtNYXBcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbnZhciBOb2RlTGlzdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOb2RlTGlzdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZUxpc3QpO1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5zZXQodGhpcywge1xuICAgICAgYXJyYXk6IFtdXG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBQcm94eSh0aGlzLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIGtleSkge1xuICAgICAgICBpZiAoX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9eWzAtOV0qJC8udGVzdChrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGFyZ2V0KS5hcnJheVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXRba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5iaW5kKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoTm9kZUxpc3QsIFt7XG4gICAga2V5OiBcInB1c2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaChlbGVtZW50KSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIml0ZW1cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXRlbShpbmRleCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXJyYXlbaW5kZXhdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsZW5ndGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmFycmF5Lmxlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29uY2F0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgICAgIHZhciBhcnJheSA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXJyYXk7XG4gICAgICByZXR1cm4gYXJyYXkuY29uY2F0LmFwcGx5KGFycmF5LCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTm9kZUxpc3Q7XG59KCk7XG5cbn0se1wiLi91dGlsL1dlYWtNYXBcIjo1N31dLDM0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX1NjcmVlbk9yaWVudGF0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9TY3JlZW5PcmllbnRhdGlvblwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbndpbmRvdy5yYWwgPSB3aW5kb3cucmFsIHx8IHt9O1xudmFyIFNjcmVlbiA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTY3JlZW4oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNjcmVlbik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXZhaWxUb3BcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXZhaWxMZWZ0XCIsIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImF2YWlsSGVpZ2h0XCIsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXZhaWxXaWR0aFwiLCB3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY29sb3JEZXB0aFwiLCA4KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwaXhlbERlcHRoXCIsIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImxlZnRcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidG9wXCIsIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndpZHRoXCIsIHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoZWlnaHRcIiwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvcmllbnRhdGlvblwiLCBuZXcgX1NjcmVlbk9yaWVudGF0aW9uW1wiZGVmYXVsdFwiXSgpKTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoU2NyZWVuLCBbe1xuICAgIGtleTogXCJvbm9yaWVudGF0aW9uY2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9ub3JpZW50YXRpb25jaGFuZ2UoKSB7fVxuICB9XSk7XG4gIHJldHVybiBTY3JlZW47XG59KCk7XG5cbn0se1wiLi9TY3JlZW5PcmllbnRhdGlvblwiOjM1fV0sMzU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRXZlbnRUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFRhcmdldFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgU2NyZWVuT3JpZW50YXRpb24gPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfRXZlbnRUYXJnZXQpIHtcbiAgX2luaGVyaXRzKFNjcmVlbk9yaWVudGF0aW9uLCBfRXZlbnRUYXJnZXQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFNjcmVlbk9yaWVudGF0aW9uKTtcbiAgZnVuY3Rpb24gU2NyZWVuT3JpZW50YXRpb24oKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTY3JlZW5PcmllbnRhdGlvbik7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3R5cGVcIiwgXCJwb3J0cmFpdC1wcmltYXJ5XCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfYW5nbGVcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9pc0xvY2tlZFwiLCBmYWxzZSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhTY3JlZW5PcmllbnRhdGlvbiwgW3tcbiAgICBrZXk6IFwidHlwZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFuZ2xlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYW5nbGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uY2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uY2hhbmdlKGV2ZW50KSB7fVxuICB9LCB7XG4gICAga2V5OiBcImxvY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9jayhvcmllbnRhdGlvbikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAoX3RoaXMyLl9pc0xvY2tlZCkge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJTY3JlZW4gb3JpZW50YXRpb24gaXMgYWxyZWFkeSBsb2NrZWRcIikpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfdGhpczIuX2lzTG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVubG9ja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmxvY2soKSB7XG4gICAgICB0aGlzLl9pc0xvY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU2NyZWVuT3JpZW50YXRpb247XG59KF9FdmVudFRhcmdldDJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0V2ZW50VGFyZ2V0XCI6MTF9XSwzNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9FdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxudmFyIFRvdWNoRXZlbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfRXZlbnQpIHtcbiAgX2luaGVyaXRzKFRvdWNoRXZlbnQsIF9FdmVudCk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoVG91Y2hFdmVudCk7XG4gIGZ1bmN0aW9uIFRvdWNoRXZlbnQodHlwZSkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG91Y2hFdmVudCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0eXBlKTtcbiAgICBfdGhpcy50b3VjaGVzID0gW107XG4gICAgX3RoaXMudGFyZ2V0VG91Y2hlcyA9IFtdO1xuICAgIF90aGlzLmNoYW5nZWRUb3VjaGVzID0gW107XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoVG91Y2hFdmVudCk7XG59KF9FdmVudDJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0V2ZW50XCI6MTB9XSwzNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9FdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRcIikpO1xudmFyIF9GaWxlQ2FjaGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvRmlsZUNhY2hlXCIpKTtcbnZhciBfWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFwiKSk7XG52YXIgX1hNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9YTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07IHJldHVybiBhcnIyOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxudmFyIGZzbSA9IHJhbC5nZXRGaWxlU3lzdGVtTWFuYWdlcigpO1xudmFyIF9YTUxIdHRwUmVxdWVzdCA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdDtcbndpbmRvdy5yYWwgPSB3aW5kb3cucmFsIHx8IHt9O1xudmFyIFhNTEh0dHBSZXF1ZXN0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX1hNTEh0dHBSZXF1ZXN0RXZlbnRUKSB7XG4gIF9pbmhlcml0cyhYTUxIdHRwUmVxdWVzdCwgX1hNTEh0dHBSZXF1ZXN0RXZlbnRUKTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihYTUxIdHRwUmVxdWVzdCk7XG4gIGZ1bmN0aW9uIFhNTEh0dHBSZXF1ZXN0KCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgWE1MSHR0cFJlcXVlc3QpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbmV3IF9YTUxIdHRwUmVxdWVzdCgpKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2lzTG9jYWxcIiwgZmFsc2UpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfaXNDYWNoZVwiLCBmYWxzZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl91cmxcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3JlYWR5U3RhdGVcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9yZXNwb25zZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfcmVzcG9uc2VUZXh0XCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9yZXNwb25zZVVSTFwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfcmVzcG9uc2VYTUxcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3N0YXR1c1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfc3RhdHVzVGV4dFwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfcmVzcG9uc2VUeXBlXCIsIHZvaWQgMCk7XG4gICAgdmFyIHhociA9IF90aGlzLl94aHI7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInJlYWR5c3RhdGVjaGFuZ2VcIik7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhYTUxIdHRwUmVxdWVzdCwgW3tcbiAgICBrZXk6IFwicmVhZHlTdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuX2lzUmVtb3RlKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3hoci5yZWFkeVN0YXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWR5U3RhdGU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9pc1JlbW90ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNSZW1vdGUoKSB7XG4gICAgICByZXR1cm4gISh0aGlzLl9pc0xvY2FsIHx8IHRoaXMuX2lzQ2FjaGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNwb25zZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHJlc3BvbnNlID0gdGhpcy5faXNSZW1vdGUoKSA/IHRoaXMuX3hoci5yZXNwb25zZSA6IHRoaXMuX3Jlc3BvbnNlO1xuICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX3Jlc3BvbnNlVHlwZSA9PT0gXCJibG9iXCIgPyBuZXcgQmxvYihbcmVzcG9uc2VdKSA6IHJlc3BvbnNlO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzcG9uc2VUZXh0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5faXNSZW1vdGUoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRleHQ7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc3BvbnNlVHlwZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVHlwZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLl9yZXNwb25zZVR5cGUgPSB0aGlzLl94aHIucmVzcG9uc2VUeXBlID0gdmFsdWU7XG4gICAgICBpZiAodmFsdWUgPT09IFwiYmxvYlwiKSB7XG4gICAgICAgIHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc3BvbnNlVVJMXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5faXNSZW1vdGUoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnJlc3BvbnNlVVJMO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVVJMO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNwb25zZVhNTFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuX2lzUmVtb3RlKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3hoci5yZXNwb25zZVhNTDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVhNTDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdHVzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5faXNSZW1vdGUoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnN0YXR1cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXR1c1RleHRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc1JlbW90ZSgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94aHIuc3RhdHVzVGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXNUZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lb3V0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5feGhyLnRpbWVvdXQ7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5feGhyLnRpbWVvdXQgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBsb2FkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5feGhyLnVwbG9hZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwid2l0aENyZWRlbnRpYWxzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5feGhyLndpdGhDcmVkZW50aWFscztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLl94aHIud2l0aENyZWRlbnRpYWxzID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFib3J0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgdGhpcy5feGhyLmFib3J0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEFsbFJlc3BvbnNlSGVhZGVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRSZXNwb25zZUhlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZXNwb25zZUhlYWRlcihuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5feGhyLmdldFJlc3BvbnNlSGVhZGVyKG5hbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvcGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW4obWV0aG9kLCB1cmwsIGFzeW5jLCB1c2VyLCBwYXNzd29yZCkge1xuICAgICAgdGhpcy5fdXJsID0gdXJsO1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdmFyIF91cmwgPSB1cmwudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgaWYgKF91cmwuc3RhcnRzV2l0aChcImh0dHA6Ly9cIikgfHwgX3VybC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9cIikpIHtcbiAgICAgICAgICB2YXIgX3RoaXMkX3hocjtcbiAgICAgICAgICB0aGlzLl9pc0xvY2FsID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIChfdGhpcyRfeGhyID0gdGhpcy5feGhyKS5vcGVuLmFwcGx5KF90aGlzJF94aHIsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzTG9jYWwgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuX3JlYWR5U3RhdGUgIT09IDEpIHtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IDE7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInJlYWR5c3RhdGVjaGFuZ2VcIikpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvdmVycmlkZU1pbWVUeXBlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG92ZXJyaWRlTWltZVR5cGUoKSB7XG4gICAgICB2YXIgX3RoaXMkX3hocjI7XG4gICAgICByZXR1cm4gKF90aGlzJF94aHIyID0gdGhpcy5feGhyKS5vdmVycmlkZU1pbWVUeXBlLmFwcGx5KF90aGlzJF94aHIyLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmQoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSAxKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgRE9NRXhjZXB0aW9uOiBGYWlsZWQgdG8gZXhlY3V0ZSAnc2VuZCcgb24gJ1hNTEh0dHBSZXF1ZXN0JzogVGhlIG9iamVjdCdzIHN0YXRlIG11c3QgYmUgT1BFTkVELlwiO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2lzTG9jYWwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgaXNCaW5hcnkgPSB0aGlzLl94aHIucmVzcG9uc2VUeXBlID09PSBcImFycmF5YnVmZmVyXCI7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSAyO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJyZWFkeXN0YXRlY2hhbmdlXCIpKTtcbiAgICAgICAgZnNtLnJlYWRGaWxlKHtcbiAgICAgICAgICBmaWxlUGF0aDogdGhpcy5fdXJsLFxuICAgICAgICAgIGVuY29kaW5nOiBpc0JpbmFyeSA/IFwiYmluYXJ5XCIgOiBcInV0ZjhcIixcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgc2VsZi5fc3RhdHVzID0gMjAwO1xuICAgICAgICAgICAgc2VsZi5fcmVzcG9uc2UgPSBzZWxmLl9yZXNwb25zZVRleHQgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGlmIChpc0JpbmFyeSkge1xuICAgICAgICAgICAgICBfRmlsZUNhY2hlW1wiZGVmYXVsdFwiXS5zZXRDYWNoZShzZWxmLl91cmwsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBldmVudFByb2dyZXNzU3RhcnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgZXZlbnRQcm9ncmVzc1N0YXJ0LmxvYWRlZCA9IDA7XG4gICAgICAgICAgICBldmVudFByb2dyZXNzU3RhcnQudG90YWwgPSBpc0JpbmFyeSA/IHJlcy5kYXRhLmJ5dGVMZW5ndGggOiByZXMuZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgZXZlbnRQcm9ncmVzc0VuZCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwicHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICBldmVudFByb2dyZXNzRW5kLmxvYWRlZCA9IGV2ZW50UHJvZ3Jlc3NTdGFydC50b3RhbDtcbiAgICAgICAgICAgIGV2ZW50UHJvZ3Jlc3NFbmQudG90YWwgPSBldmVudFByb2dyZXNzU3RhcnQudG90YWw7XG4gICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2Fkc3RhcnRcIikpO1xuICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50UHJvZ3Jlc3NTdGFydCk7XG4gICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnRQcm9ncmVzc0VuZCk7XG4gICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkXCIpKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMuZXJyQ29kZSA9PT0gMSkge1xuICAgICAgICAgICAgICBzZWxmLl9zdGF0dXMgPSA0MDQ7XG4gICAgICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRzdGFydFwiKSk7XG4gICAgICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRcIikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwiZXJyb3JcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IDQ7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJyZWFkeXN0YXRlY2hhbmdlXCIpKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRlbmRcIikpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgdmFyIGNhY2hlUGF0aCA9IF9YTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlcltcImRlZmF1bHRcIl0uZ2V0SW5zdGFuY2UoKS5nZXRDYWNoZVBhdGgodGhpcy5fdXJsKTtcbiAgICAgICAgaWYgKGNhY2hlUGF0aCkge1xuICAgICAgICAgIGZzbS5yZWFkRmlsZSh7XG4gICAgICAgICAgICBmaWxlUGF0aDogY2FjaGVQYXRoLFxuICAgICAgICAgICAgZW5jb2Rpbmc6IFwiYmluYXJ5XCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2lzQ2FjaGUgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSAyMDA7XG4gICAgICAgICAgICAgIHRoaXMuX3Jlc3BvbnNlID0gdGhpcy5fcmVzcG9uc2VUZXh0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgIHZhciBldmVudFByb2dyZXNzU3RhcnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgICBldmVudFByb2dyZXNzU3RhcnQubG9hZGVkID0gMDtcbiAgICAgICAgICAgICAgZXZlbnRQcm9ncmVzc1N0YXJ0LnRvdGFsID0gcmVzLmRhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgICAgICAgdmFyIGV2ZW50UHJvZ3Jlc3NFbmQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgICBldmVudFByb2dyZXNzRW5kLmxvYWRlZCA9IGV2ZW50UHJvZ3Jlc3NTdGFydC50b3RhbDtcbiAgICAgICAgICAgICAgZXZlbnRQcm9ncmVzc0VuZC50b3RhbCA9IGV2ZW50UHJvZ3Jlc3NTdGFydC50b3RhbDtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZHN0YXJ0XCIpKTtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50UHJvZ3Jlc3NTdGFydCk7XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudFByb2dyZXNzRW5kKTtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZFwiKSk7XG4gICAgICAgICAgICAgIF9YTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlcltcImRlZmF1bHRcIl0uZ2V0SW5zdGFuY2UoKS51cGRhdGVMYXN0VGltZSh0aGlzLl91cmwpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJYTUxIdHRwUmVxdWVzdCByZWFkIGNhY2hlIGZhaWwgZmFpbDogXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSA0O1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInJlYWR5c3RhdGVjaGFuZ2VcIikpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRlbmRcIikpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyRfeGhyMztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJYTUxIdHRwUmVxdWVzdCByZWFkIGNhY2hlIGZhaWwsIGNvbnRpbnVlIHNlbmQgbmV0d29yayByZXF1ZXN0LiB1cmw6IFwiICsgdGhpcy5fdXJsKTtcbiAgICAgICAgICAgICAgICAoX3RoaXMkX3hocjMgPSB0aGlzLl94aHIpLnNlbmQuYXBwbHkoX3RoaXMkX3hocjMsIF90b0NvbnN1bWFibGVBcnJheShfYXJncykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX3RoaXMkX3hocjQ7XG4gICAgICAgICAgKF90aGlzJF94aHI0ID0gdGhpcy5feGhyKS5zZW5kLmFwcGx5KF90aGlzJF94aHI0LCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFJlcXVlc3RIZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRfeGhyNTtcbiAgICAgIChfdGhpcyRfeGhyNSA9IHRoaXMuX3hocikuc2V0UmVxdWVzdEhlYWRlci5hcHBseShfdGhpcyRfeGhyNSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFhNTEh0dHBSZXF1ZXN0O1xufShfWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFtcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXJcIjozOCxcIi4vWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFwiOjM5LFwiLi91dGlsL0ZpbGVDYWNoZVwiOjU2fV0sMzg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfZnNVdGlscyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9mc1V0aWxzXCIpKTtcbnZhciBfdXRpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3V0aWxcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKCFpdCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBpdC5jYWxsKG8pOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTsgcmV0dXJuIGFycjI7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbndpbmRvdy5yYWwgPSB3aW5kb3cucmFsIHx8IHt9O1xudmFyIFhNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFhNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlcik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiSFdfV0FTTV9DQUNIRVNcIiwgXCJod3dhc21jYWNoZXNcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiQ0FDSEVEX0ZJTEVfTkFNRVwiLCBcImNhY2hlTGlzdC5qc29uXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIkRFTEFZX1RJTUVcIiwgNTAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjYWNoZURpclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNhY2hlRmlsZUluZm9ybWF0aW9uRmlsZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNhY2hlZEZpbGVzXCIsIG5ldyBDYWNoZSgpKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ2ZXJzaW9uXCIsIFwiMS4wXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNhY2hlSWRlbnRpZmllcnNcIiwgbmV3IFNldCgpKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJleGNsdWRlQ2FjaGVJZGVudGlmaWVyc1wiLCBuZXcgU2V0KCkpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNsZWFuaW5nXCIsIGZhbHNlKTtcbiAgICB0aGlzLmNhY2hlRGlyID0gcmFsLmVudi5VU0VSX0RBVEFfUEFUSCArIFwiL1wiICsgdGhpcy5IV19XQVNNX0NBQ0hFUztcbiAgICB0aGlzLmNhY2hlRmlsZUluZm9ybWF0aW9uRmlsZSA9IHRoaXMuY2FjaGVEaXIgKyBcIi9cIiArIHRoaXMuQ0FDSEVEX0ZJTEVfTkFNRTtcbiAgICB0aGlzLmNhY2hlSWRlbnRpZmllcnMuYWRkKFwiU3RyZWFtaW5nQXNzZXRzXCIpO1xuICAgIHZhciByZXN1bHQgPSBfZnNVdGlsc1tcImRlZmF1bHRcIl0ucmVhZEpzb25TeW5jKHRoaXMuY2FjaGVGaWxlSW5mb3JtYXRpb25GaWxlKTtcbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgfHwgdGhpcy52ZXJzaW9uICE9PSByZXN1bHQudmVyc2lvbikge1xuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIgcmVhZEpzb25TeW5jIHJlc3VsdCBlcnJvciBtZXNzYWdlOiBcIiArIHJlc3VsdC5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIgcmVhZEpzb25TeW5jIHJlc3VsdCBlcnJvciB2ZXJzaW9uOiBcIiArIHJlc3VsdC52ZXJzaW9uKTtcbiAgICAgICAgX2ZzVXRpbHNbXCJkZWZhdWx0XCJdLnJtZGlyU3luYyh0aGlzLmNhY2hlRGlyLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIF9mc1V0aWxzW1wiZGVmYXVsdFwiXS5tYWtlRGlyU3luYyh0aGlzLmNhY2hlRGlyLCB0cnVlKTtcbiAgICAgIHRoaXMuX3dyaXRlQ2FjaGVGaWxlSW5mb3JtYXRpb25GaWxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FjaGVkRmlsZXMgPSBuZXcgQ2FjaGUocmVzdWx0LmZpbGVzKTtcbiAgICB9XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKFhNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyLCBbe1xuICAgIGtleTogXCJRR19BZGRDYWNoZUlkZW50aWZpZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIFFHX0FkZENhY2hlSWRlbnRpZmllcnMoY29uZikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciBqc29uT2JqID0gX3V0aWxbXCJkZWZhdWx0XCJdLmZvcm1hdEpzb25TdHIoY29uZik7XG4gICAgICBpZiAoIShcImNhY2hlSWRlbnRpZmllcnNcIiBpbiBqc29uT2JqKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgY2FjaGVJZGVudGlmaWVycyA9IGpzb25PYmpbXCJjYWNoZUlkZW50aWZpZXJzXCJdO1xuICAgICAgaWYgKCEoY2FjaGVJZGVudGlmaWVycyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYWNoZUlkZW50aWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIF90aGlzLmNhY2hlSWRlbnRpZmllcnMuYWRkKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJRR19BZGRFeGNsdWRlQ2FjaGVJZGVudGlmaWVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBRR19BZGRFeGNsdWRlQ2FjaGVJZGVudGlmaWVycyhjb25mKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgIHZhciBqc29uT2JqID0gX3V0aWxbXCJkZWZhdWx0XCJdLmZvcm1hdEpzb25TdHIoY29uZik7XG4gICAgICBpZiAoIShcImV4Y2x1ZGVDYWNoZUlkZW50aWZpZXJzXCIgaW4ganNvbk9iaikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGV4Y2x1ZGVDYWNoZUlkZW50aWZpZXJzID0ganNvbk9ialtcImV4Y2x1ZGVDYWNoZUlkZW50aWZpZXJzXCJdO1xuICAgICAgaWYgKCEoZXhjbHVkZUNhY2hlSWRlbnRpZmllcnMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXhjbHVkZUNhY2hlSWRlbnRpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgX3RoaXMyLmV4Y2x1ZGVDYWNoZUlkZW50aWZpZXJzLmFkZCh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiUUdfSGFzQ2FjaGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gUUdfSGFzQ2FjaGUodXJsKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmdldENhY2hlUGF0aCh1cmwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJRR19EZWxldGVDYWNoZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBRR19EZWxldGVDYWNoZSh1cmwpIHtcbiAgICAgIGlmICh0aGlzLmNsZWFuaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIgUUdfRGVsZXRlQ2FjaGUgaXMgY2xlYW5pbmcuIHVybDogXCIgKyB1cmwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNsZWFuaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGVkRmlsZXMuZ2V0KHVybCk7XG4gICAgICBpZiAoIWNhY2hlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIgUUdfRGVsZXRlQ2FjaGUgbm90IGV4aXN0IGNhY2hlLiB1cmw6IFwiICsgdXJsKTtcbiAgICAgICAgdGhpcy5jbGVhbmluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgbmVlZERlbGV0ZUNhY2hlcyA9IFtdO1xuICAgICAgbmVlZERlbGV0ZUNhY2hlcy5wdXNoKHtcbiAgICAgICAgb3JpZ2luVXJsOiB1cmwsXG4gICAgICAgIHVybDogY2FjaGUudXJsLFxuICAgICAgICBsYXN0VGltZTogY2FjaGUubGFzdFRpbWVcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBRR19EZWxldGVDYWNoZSBzdGFydC4gdXJsOiBcIiArIHVybCk7XG4gICAgICB0aGlzLl9kZWxheURlbGV0ZUNhY2hlRmlsZShuZWVkRGVsZXRlQ2FjaGVzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiUUdfQ2xlYXJMcnVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gUUdfQ2xlYXJMcnUoKSB7XG4gICAgICB0aGlzLl9jbGVhckxSVSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfd3JpdGVDYWNoZUZpbGVJbmZvcm1hdGlvbkZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3dyaXRlQ2FjaGVGaWxlSW5mb3JtYXRpb25GaWxlKCkge1xuICAgICAgcmV0dXJuIF9mc1V0aWxzW1wiZGVmYXVsdFwiXS53cml0ZUZpbGVTeW5jKHRoaXMuY2FjaGVGaWxlSW5mb3JtYXRpb25GaWxlLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGZpbGVzOiB0aGlzLmNhY2hlZEZpbGVzLl9tYXAsXG4gICAgICAgIHZlcnNpb246IHRoaXMudmVyc2lvblxuICAgICAgfSksICd1dGY4Jyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm5lZWRDYWNoZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWVkQ2FjaGUodXJsKSB7XG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jbGVhbmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgbmVlZENhY2hlID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIodGhpcy5jYWNoZUlkZW50aWZpZXJzKSxcbiAgICAgICAgX3N0ZXA7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciBjYWNoZUlkZW50aWZpZXIgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICBpZiAoLTEgIT09IHVybC5pbmRleE9mKGNhY2hlSWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgIG5lZWRDYWNoZSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHRoaXMuZXhjbHVkZUNhY2hlSWRlbnRpZmllcnMpLFxuICAgICAgICAgICAgICBfc3RlcDI7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgICAgICAgICAgIHZhciBleGNsdWRlQ2FjaGVJZGVudGlmaWVyID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICgtMSAhPT0gdXJsLmluZGV4T2YoZXhjbHVkZUNhY2hlSWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgICAgICAgIG5lZWRDYWNoZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG5lZWRDYWNoZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBfaXRlcmF0b3IyLmUoZXJyKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIF9pdGVyYXRvcjIuZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5lZWRDYWNoZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZWVkQ2FjaGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENhY2hlUGF0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDYWNoZVBhdGgodXJsKSB7XG4gICAgICBpZiAodGhpcy5jYWNoZWRGaWxlcy5oYXModXJsKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRGaWxlcy5nZXQodXJsKS51cmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlTGFzdFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlTGFzdFRpbWUodXJsKSB7XG4gICAgICBpZiAodGhpcy5jYWNoZWRGaWxlcy5oYXModXJsKSkge1xuICAgICAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlZEZpbGVzLmdldCh1cmwpO1xuICAgICAgICBjYWNoZS5sYXN0VGltZSA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX3dyaXRlQ2FjaGVGaWxlSW5mb3JtYXRpb25GaWxlKCk7XG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvciAmJiBfZnNVdGlsc1tcImRlZmF1bHRcIl0uaXNPdXRPZlN0b3JhZ2UocmVzdWx0Lm1lc3NhZ2UpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciB1cGRhdGVMYXN0VGltZSBuZWVkIGNsZWFyTFJVLlwiKTtcbiAgICAgICAgICB0aGlzLl9jbGVhckxSVSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIndyaXRlQ2FjaGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd3JpdGVDYWNoZSh1cmwsIHJlc3BvbnNlKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuX3dyaXRlQ2FjaGVGaWxlLmJpbmQodGhpcyksIHRoaXMuREVMQVlfVElNRSwgdXJsLCByZXNwb25zZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl93cml0ZUNhY2hlRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfd3JpdGVDYWNoZUZpbGUodXJsLCByZXNwb25zZSkge1xuICAgICAgaWYgKCF1cmwgfHwgIXJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNsZWFuaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIgX3dyaXRlQ2FjaGVGaWxlIGNsZWFuaW5nIG5vdCB3cml0ZSB1cmw6IFwiICsgdXJsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGNhY2hlUGF0aCA9IHRoaXMuY2FjaGVEaXIgKyBcIi9cIiArIHdpbmRvdy5idG9hKHVybCk7XG4gICAgICBfZnNVdGlsc1tcImRlZmF1bHRcIl0ud3JpdGVGaWxlKGNhY2hlUGF0aCwgcmVzcG9uc2UsICdiaW5hcnknLCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGlmIChyZXMgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlhNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyIF93cml0ZUNhY2hlRmlsZSBvbkNvbXBsZXRlIGVycm9yOiBcIiArIHJlcy5tZXNzYWdlKTtcbiAgICAgICAgICBpZiAoX2ZzVXRpbHNbXCJkZWZhdWx0XCJdLmlzT3V0T2ZTdG9yYWdlKHJlcy5tZXNzYWdlKSkge1xuICAgICAgICAgICAgc2VsZi5fY2xlYXJMUlUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmNsZWFuaW5nKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBfd3JpdGVDYWNoZUZpbGUgb25Db21wbGV0ZSBjbGVhbmluZyBub3Qgd3JpdGUgdXJsOiBcIiArIHVybCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuY2FjaGVkRmlsZXMuc2V0KHVybCwge1xuICAgICAgICAgIHVybDogY2FjaGVQYXRoLFxuICAgICAgICAgIGxhc3RUaW1lOiBEYXRlLm5vdygpLnRvU3RyaW5nKClcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZXN1bHQgPSBzZWxmLl93cml0ZUNhY2hlRmlsZUluZm9ybWF0aW9uRmlsZSgpO1xuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgJiYgX2ZzVXRpbHNbXCJkZWZhdWx0XCJdLmlzT3V0T2ZTdG9yYWdlKHJlc3VsdC5tZXNzYWdlKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIgX3dyaXRlQ2FjaGVGaWxlIF93cml0ZUNhY2hlRmlsZUluZm9ybWF0aW9uRmlsZSBuZWVkIGNsZWFyTFJVLlwiKTtcbiAgICAgICAgICBzZWxmLl9jbGVhckxSVSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2NsZWFyTFJVXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9jbGVhckxSVSgpIHtcbiAgICAgIGlmICh0aGlzLmNsZWFuaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIgX2NsZWFyTFJVIGlzIGNsZWFuaW5nLCBkb24ndCBuZWVkIGFnYWluLlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBfY2xlYXJMUlUgc3RhcnQuXCIpO1xuICAgICAgdGhpcy5jbGVhbmluZyA9IHRydWU7XG4gICAgICB2YXIgZGlydHlGaWxlcyA9IHRoaXMuX2dldERpcnR5RmlsZXMoKTtcbiAgICAgIGlmIChkaXJ0eUZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBfY2xlYXJMUlUgZGlydHlGaWxlcyBsZW5ndGg6IFwiICsgZGlydHlGaWxlcy5sZW5ndGgpO1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuX2RlbGF5RGVsZXRlRGlydHlGaWxlLmJpbmQodGhpcyksIHRoaXMuREVMQVlfVElNRSwgZGlydHlGaWxlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kZWxldGVDYWNoZUZpbGVzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9nZXREaXJ0eUZpbGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXREaXJ0eUZpbGVzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG4gICAgICB2YXIgZGlydHlGaWxlcyA9IFtdO1xuICAgICAgdmFyIGZpbGVzID0gX2ZzVXRpbHNbXCJkZWZhdWx0XCJdLnJlYWREaXJTeW5jKHRoaXMuY2FjaGVEaXIpO1xuICAgICAgaWYgKGZpbGVzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZmlsZXMgPSBmaWxlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbSAhPT0gX3RoaXMzLkNBQ0hFRF9GSUxFX05BTUU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmlsZXMuc2l6ZSAhPT0gMCkge1xuICAgICAgICAgIHZhciBjYWNoZWRGaWxlc0xvY2FsVXJsID0gbmV3IFNldCgpO1xuICAgICAgICAgIHRoaXMuY2FjaGVkRmlsZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgY2FjaGVkRmlsZXNMb2NhbFVybC5hZGQodmFsdWUudXJsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgX2l0ZXJhdG9yMyA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGZpbGVzKSxcbiAgICAgICAgICAgIF9zdGVwMztcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChfaXRlcmF0b3IzLnMoKTsgIShfc3RlcDMgPSBfaXRlcmF0b3IzLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICAgICAgdmFyIGZpbGUgPSBfc3RlcDMudmFsdWU7XG4gICAgICAgICAgICAgIHZhciBmaWxlcGF0aCA9IHRoaXMuY2FjaGVEaXIgKyBcIi9cIiArIGZpbGU7XG4gICAgICAgICAgICAgIGlmICghY2FjaGVkRmlsZXNMb2NhbFVybC5oYXMoZmlsZXBhdGgpKSB7XG4gICAgICAgICAgICAgICAgZGlydHlGaWxlcy5wdXNoKGZpbGVwYXRoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yMy5lKGVycik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjMuZigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRpcnR5RmlsZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9kZWxheURlbGV0ZURpcnR5RmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVsYXlEZWxldGVEaXJ0eUZpbGUoZGlydHlGaWxlc0FycmF5KSB7XG4gICAgICB2YXIgaXRlbSA9IGRpcnR5RmlsZXNBcnJheS5wb3AoKTtcbiAgICAgIF9mc1V0aWxzW1wiZGVmYXVsdFwiXS5kZWxldGVGaWxlKGl0ZW0pO1xuICAgICAgaWYgKGRpcnR5RmlsZXNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5fZGVsYXlEZWxldGVEaXJ0eUZpbGUuYmluZCh0aGlzKSwgdGhpcy5ERUxBWV9USU1FLCBkaXJ0eUZpbGVzQXJyYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGVsZXRlQ2FjaGVGaWxlcygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZGVsZXRlQ2FjaGVGaWxlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVsZXRlQ2FjaGVGaWxlcygpIHtcbiAgICAgIHZhciBuZWVkRGVsZXRlQ2FjaGVzID0gW107XG4gICAgICB0aGlzLmNhY2hlZEZpbGVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgbmVlZERlbGV0ZUNhY2hlcy5wdXNoKHtcbiAgICAgICAgICBvcmlnaW5Vcmw6IGtleSxcbiAgICAgICAgICB1cmw6IHZhbHVlLnVybCxcbiAgICAgICAgICBsYXN0VGltZTogdmFsdWUubGFzdFRpbWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIG5lZWREZWxldGVDYWNoZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5sYXN0VGltZSAtIGIubGFzdFRpbWU7XG4gICAgICB9KTtcbiAgICAgIG5lZWREZWxldGVDYWNoZXMubGVuZ3RoID0gTWF0aC5mbG9vcihuZWVkRGVsZXRlQ2FjaGVzLmxlbmd0aCAvIDMpO1xuICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBfZGVsZXRlQ2FjaGVGaWxlcyBuZWVkRGVsZXRlQ2FjaGVzIGxlbmd0aDogXCIgKyBuZWVkRGVsZXRlQ2FjaGVzLmxlbmd0aCk7XG4gICAgICBpZiAobmVlZERlbGV0ZUNhY2hlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBjbGVhbmluZyBlbmQuXCIpO1xuICAgICAgICB0aGlzLmNsZWFuaW5nID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuX2RlbGF5RGVsZXRlQ2FjaGVGaWxlLmJpbmQodGhpcyksIHRoaXMuREVMQVlfVElNRSwgbmVlZERlbGV0ZUNhY2hlcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9kZWxheURlbGV0ZUNhY2hlRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVsYXlEZWxldGVDYWNoZUZpbGUobmVlZERlbGV0ZUNhY2hlcykge1xuICAgICAgdmFyIGl0ZW0gPSBuZWVkRGVsZXRlQ2FjaGVzLnBvcCgpO1xuICAgICAgdGhpcy5jYWNoZWRGaWxlc1tcImRlbGV0ZVwiXShpdGVtLm9yaWdpblVybCk7XG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fd3JpdGVDYWNoZUZpbGVJbmZvcm1hdGlvbkZpbGUoKTtcbiAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvciAmJiAhX2ZzVXRpbHNbXCJkZWZhdWx0XCJdLmlzT3V0T2ZTdG9yYWdlKHJlc3VsdC5tZXNzYWdlKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBfZGVsYXlEZWxldGVDYWNoZUZpbGUgZXJyb3IgbWVzc2FnZS5cIiArIHJlc3VsdC5tZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBjbGVhbmluZyBlbmQuXCIpO1xuICAgICAgICB0aGlzLmNsZWFuaW5nID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfZnNVdGlsc1tcImRlZmF1bHRcIl0uZGVsZXRlRmlsZShpdGVtLnVybCk7XG4gICAgICAgIGlmIChuZWVkRGVsZXRlQ2FjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuX2RlbGF5RGVsZXRlQ2FjaGVGaWxlLmJpbmQodGhpcyksIHRoaXMuREVMQVlfVElNRSwgbmVlZERlbGV0ZUNhY2hlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlciBjbGVhbmluZyBlbmQuXCIpO1xuICAgICAgICAgIHRoaXMuY2xlYW5pbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldEluc3RhbmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKCkge1xuICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXI7XG59KCk7XG5fZGVmaW5lUHJvcGVydHkoWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIsIFwiaW5zdGFuY2VcIiwgdm9pZCAwKTtcbnZhciBDYWNoZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2FjaGUobWFwKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhY2hlKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbWFwXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2NvdW50XCIsIHZvaWQgMCk7XG4gICAgaWYgKG1hcCkge1xuICAgICAgdGhpcy5fbWFwID0gbWFwO1xuICAgICAgdGhpcy5fY291bnQgPSBPYmplY3Qua2V5cyhtYXApLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHRoaXMuX2NvdW50ID0gMDtcbiAgICB9XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKENhY2hlLCBbe1xuICAgIGtleTogXCJoYXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgcmV0dXJuIGtleSBpbiB0aGlzLl9tYXA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwW2tleV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoa2V5LCB2YWwpIHtcbiAgICAgIGlmICghKGtleSBpbiB0aGlzLl9tYXApKSB0aGlzLl9jb3VudCsrO1xuICAgICAgcmV0dXJuIHRoaXMuX21hcFtrZXldID0gdmFsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JFYWNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvckVhY2goZnVuYykge1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuX21hcCkge1xuICAgICAgICBmdW5jKHRoaXMuX21hcFtrZXldLCBrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWxldGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2RlbGV0ZShrZXkpIHtcbiAgICAgIHZhciBvdXQgPSB0aGlzLl9tYXBba2V5XTtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5fbWFwKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9tYXBba2V5XTtcbiAgICAgICAgdGhpcy5fY291bnQtLTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDYWNoZTtcbn0oKTtcblhNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG52YXIgX1hNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyID0ge1xuICBRR19BZGRDYWNoZUlkZW50aWZpZXJzOiBmdW5jdGlvbiBRR19BZGRDYWNoZUlkZW50aWZpZXJzKGNvbmYpIHtcbiAgICBYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlci5nZXRJbnN0YW5jZSgpLlFHX0FkZENhY2hlSWRlbnRpZmllcnMoY29uZik7XG4gIH0sXG4gIFFHX0FkZEV4Y2x1ZGVDYWNoZUlkZW50aWZpZXJzOiBmdW5jdGlvbiBRR19BZGRFeGNsdWRlQ2FjaGVJZGVudGlmaWVycyhjb25mKSB7XG4gICAgWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5RR19BZGRFeGNsdWRlQ2FjaGVJZGVudGlmaWVycyhjb25mKTtcbiAgfSxcbiAgUUdfSGFzQ2FjaGU6IGZ1bmN0aW9uIFFHX0hhc0NhY2hlKHVybCkge1xuICAgIHJldHVybiBYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlci5nZXRJbnN0YW5jZSgpLlFHX0hhc0NhY2hlKHVybCk7XG4gIH0sXG4gIFFHX0RlbGV0ZUNhY2hlOiBmdW5jdGlvbiBRR19EZWxldGVDYWNoZSh1cmwpIHtcbiAgICBYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlci5nZXRJbnN0YW5jZSgpLlFHX0RlbGV0ZUNhY2hlKHVybCk7XG4gIH0sXG4gIFFHX0NsZWFyTHJ1OiBmdW5jdGlvbiBRR19DbGVhckxydSgpIHtcbiAgICBYTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlci5nZXRJbnN0YW5jZSgpLlFHX0NsZWFyTHJ1KCk7XG4gIH1cbn07XG53aW5kb3cucmFsLlFHX0NhY2hlTWFuYWdlckFkZENhY2hlSWRlbnRpZmllcnMgPSBfWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIuUUdfQWRkQ2FjaGVJZGVudGlmaWVycztcbndpbmRvdy5yYWwuUUdfQ2FjaGVNYW5hZ2VyQWRkRXhjbHVkZUNhY2hlSWRlbnRpZmllcnMgPSBfWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIuUUdfQWRkRXhjbHVkZUNhY2hlSWRlbnRpZmllcnM7XG53aW5kb3cucmFsLlFHX0NhY2hlTWFuYWdlckhhc0NhQ2hlID0gX1hNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyLlFHX0hhc0NhY2hlO1xud2luZG93LnJhbC5RR19DYWNoZU1hbmFnZXJEZWxldGVDYWNoZSA9IF9YTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlci5RR19EZWxldGVDYWNoZTtcbndpbmRvdy5yYWwuUUdfQ2FjaGVNYW5hZ2VyQ2xlYXJMcnUgPSBfWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXIuUUdfQ2xlYXJMcnU7XG5cbn0se1wiLi4vdXRpbFwiOjMsXCIuL3V0aWwvZnNVdGlsc1wiOjU4fV0sMzk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRXZlbnRUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFRhcmdldFwiKSk7XG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG52YXIgX1hNTEh0dHBSZXF1ZXN0Q2FjaGVNYW5hZ2VyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9YTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICBfaW5oZXJpdHMoWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCwgX0V2ZW50VGFyZ2V0KTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0KTtcbiAgZnVuY3Rpb24gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCh4aHIpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl94aHJcIiwgdm9pZCAwKTtcbiAgICBfdGhpcy5feGhyID0geGhyO1xuICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwiYWJvcnRcIik7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJlcnJvclwiKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG4gICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICh0aGlzLnJlc3BvbnNlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgaWYgKF9YTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlcltcImRlZmF1bHRcIl0uZ2V0SW5zdGFuY2UoKS5uZWVkQ2FjaGUodGhpcy5fdXJsKSkge1xuICAgICAgICAgIF9YTUxIdHRwUmVxdWVzdENhY2hlTWFuYWdlcltcImRlZmF1bHRcIl0uZ2V0SW5zdGFuY2UoKS53cml0ZUNhY2hlKHRoaXMuX3VybCwgdGhpcy5yZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZFwiKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG4gICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICB4aHIub25sb2Fkc3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2Fkc3RhcnRcIik7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJwcm9ncmVzc1wiKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG4gICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwidGltZW91dFwiKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG4gICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZGVuZFwiKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG4gICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0KTtcbn0oX0V2ZW50VGFyZ2V0MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vRXZlbnRUYXJnZXRcIjoxMSxcIi4vWE1MSHR0cFJlcXVlc3RDYWNoZU1hbmFnZXJcIjozOH1dLDQwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0F1ZGlvTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvTm9kZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbnZhciBBbmFseXNlck5vZGUgPSBmdW5jdGlvbiAoX0F1ZGlvTm9kZSkge1xuICBfaW5oZXJpdHMoQW5hbHlzZXJOb2RlLCBfQXVkaW9Ob2RlKTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBbmFseXNlck5vZGUpO1xuICBmdW5jdGlvbiBBbmFseXNlck5vZGUoY29udGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQW5hbHlzZXJOb2RlKTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICAgIF90aGlzLl9mZnRTaXplO1xuICAgIF90aGlzLmZyZXF1ZW5jeUJpbkNvdW50O1xuICAgIF90aGlzLm1pbkRlY2liZWxzO1xuICAgIF90aGlzLm1heERlY2liZWxzO1xuICAgIF90aGlzLnNtb290aGluZ1RpbWVDb25zdGFudDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEFuYWx5c2VyTm9kZSwgW3tcbiAgICBrZXk6IFwiZ2V0RmxvYXRGcmVxdWVuY3lEYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZsb2F0RnJlcXVlbmN5RGF0YShhcnJheSkge31cbiAgfSwge1xuICAgIGtleTogXCJnZXRCeXRlRnJlcXVlbmN5RGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeXRlRnJlcXVlbmN5RGF0YShkYXRhQXJyYXkpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhQXJyYXkubGVuZ3RoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RmxvYXRUaW1lRG9tYWluRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGbG9hdFRpbWVEb21haW5EYXRhKGRhdGFBcnJheSkge31cbiAgfSwge1xuICAgIGtleTogXCJnZXRCeXRlVGltZURvbWFpbkRhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qnl0ZVRpbWVEb21haW5EYXRhKGRhdGFBcnJheSkge31cbiAgfSwge1xuICAgIGtleTogXCJmZnRTaXplXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZmZ0U2l6ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLl9mZnRTaXplID0gdmFsdWU7XG4gICAgICB0aGlzLmZyZXF1ZW5jeUJpbkNvdW50ID0gdmFsdWUgLyAyO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQW5hbHlzZXJOb2RlO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBbmFseXNlck5vZGU7XG5cbn0se1wiLi9BdWRpb05vZGVcIjo0Nn1dLDQxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0ZpbGVDYWNoZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3V0aWwvRmlsZUNhY2hlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgQXVkaW9CdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEF1ZGlvQnVmZmVyKGNvbnRleHQsIGJ1ZmZlciwgY2FsbGJhY2spIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9CdWZmZXIpO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy51cmwgPSBcIlwiO1xuICAgIHRoaXMuX3NhbXBsZVJhdGUgPSA0ODAwMDtcbiAgICB0aGlzLl9sZW5ndGggPSAzODY2ODE7XG4gICAgdGhpcy5fZHVyYXRpb24gPSAwO1xuICAgIHRoaXMuX251bWJlck9mQ2hhbm5lbHMgPSA0ODAwMDtcbiAgICBfRmlsZUNhY2hlW1wiZGVmYXVsdFwiXS5nZXRQYXRoKGJ1ZmZlciwgZnVuY3Rpb24gKHVybCkge1xuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICB2YXIgaW5uZXJBdWRpb0NvbnRleHQgPSByYWwuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHVybDtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uQ2FucGxheShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXVkaW9CdWZmZXIuX2R1cmF0aW9uID0gdGhpcy5pbm5lckF1ZGlvQ29udGV4dC5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5pbm5lckF1ZGlvQ29udGV4dC5kZXN0cm95KCk7XG4gICAgICAgIGNhbGxiYWNrKHRoaXMuYXVkaW9CdWZmZXIpO1xuICAgICAgfS5iaW5kKHtcbiAgICAgICAgYXVkaW9CdWZmZXI6IHRoaXMsXG4gICAgICAgIGlubmVyQXVkaW9Db250ZXh0OiBpbm5lckF1ZGlvQ29udGV4dFxuICAgICAgfSkpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEF1ZGlvQnVmZmVyLCBbe1xuICAgIGtleTogXCJzYW1wbGVSYXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2FtcGxlUmF0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibGVuZ3RoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkdXJhdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2R1cmF0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJPZkNoYW5uZWxzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZDaGFubmVscztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEF1ZGlvQnVmZmVyO1xufSgpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBdWRpb0J1ZmZlcjtcblxufSx7XCIuLi91dGlsL0ZpbGVDYWNoZVwiOjU2fV0sNDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbnZhciBfQXVkaW9QYXJhbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9QYXJhbVwiKSk7XG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlsL1dlYWtNYXBcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG52YXIgX2Rlc3Ryb3kgPSBmdW5jdGlvbiBfZGVzdHJveSgpIHtcbiAgdmFyIGlubmVyQXVkaW9Db250ZXh0ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzLnNvdXJjZU5vZGUpLmlubmVyQXVkaW9Db250ZXh0O1xuICBpZiAoaW5uZXJBdWRpb0NvbnRleHQgIT09IG51bGwpIHtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5kZXN0cm95KCk7XG4gICAgdmFyIGF1ZGlvQnVmZmVyU291cmNlTm9kZUFycmF5ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzLmF1ZGlvQ29udGV4dCkuYXVkaW9CdWZmZXJTb3VyY2VOb2RlQXJyYXk7XG4gICAgdmFyIGxlbmd0aCA9IGF1ZGlvQnVmZmVyU291cmNlTm9kZUFycmF5Lmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChhdWRpb0J1ZmZlclNvdXJjZU5vZGVBcnJheVtpXSkuaW5uZXJBdWRpb0NvbnRleHQgPT0gaW5uZXJBdWRpb0NvbnRleHQpIHtcbiAgICAgICAgYXVkaW9CdWZmZXJTb3VyY2VOb2RlQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzLnNvdXJjZU5vZGUpLmlubmVyQXVkaW9Db250ZXh0ID0gbnVsbDtcbiAgfVxufTtcbnZhciBBdWRpb0J1ZmZlclNvdXJjZU5vZGUgPSBmdW5jdGlvbiAoX0F1ZGlvTm9kZSkge1xuICBfaW5oZXJpdHMoQXVkaW9CdWZmZXJTb3VyY2VOb2RlLCBfQXVkaW9Ob2RlKTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBdWRpb0J1ZmZlclNvdXJjZU5vZGUpO1xuICBmdW5jdGlvbiBBdWRpb0J1ZmZlclNvdXJjZU5vZGUoY29udGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9CdWZmZXJTb3VyY2VOb2RlKTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICAgIF90aGlzLmJ1ZmZlciA9IG51bGw7XG4gICAgX3RoaXMuZGV0dW5lID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLl9sb29wID0gZmFsc2U7XG4gICAgX3RoaXMubG9vcFN0YXJ0ID0gMDtcbiAgICBfdGhpcy5sb29wRW5kID0gMDtcbiAgICBfdGhpcy5fcGxheWJhY2tSYXRlID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMS4wXG4gICAgfSk7XG4gICAgdmFyIGlubmVyQXVkaW9Db250ZXh0ID0gcmFsLmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XG4gICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkuaW5uZXJBdWRpb0NvbnRleHQgPSBpbm5lckF1ZGlvQ29udGV4dDtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkVuZGVkKF9kZXN0cm95LmJpbmQoe1xuICAgICAgc291cmNlTm9kZTogX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICBhdWRpb0NvbnRleHQ6IGNvbnRleHRcbiAgICB9KSk7XG4gICAgaW5uZXJBdWRpb0NvbnRleHQub25TdG9wKF9kZXN0cm95LmJpbmQoe1xuICAgICAgc291cmNlTm9kZTogX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICBhdWRpb0NvbnRleHQ6IGNvbnRleHRcbiAgICB9KSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhBdWRpb0J1ZmZlclNvdXJjZU5vZGUsIFt7XG4gICAga2V5OiBcInN0YXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KHdoZW4sIG9mZnNldCwgZHVyYXRpb24pIHtcbiAgICAgIGlmICh0aGlzLmJ1ZmZlcikge1xuICAgICAgICB2YXIgaW5uZXJBdWRpb0NvbnRleHQgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0O1xuICAgICAgICBpZiAoaW5uZXJBdWRpb0NvbnRleHQgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gdGhpcy5idWZmZXIudXJsO1xuICAgICAgICBpZiAoIW9mZnNldCB8fCB0eXBlb2Ygb2Zmc2V0ICE9PSAnbnVtYmVyJyB8fCBvZmZzZXQgPD0gMCkge1xuICAgICAgICAgIGlubmVyQXVkaW9Db250ZXh0LnN0YXJ0VGltZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5uZXJBdWRpb0NvbnRleHQuc3RhcnRUaW1lID0gb2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmICghd2hlbiB8fCB0eXBlb2Ygd2hlbiAhPT0gJ251bWJlcicgfHwgd2hlbiA8PSAwKSB7XG4gICAgICAgICAgaW5uZXJBdWRpb0NvbnRleHQucGxheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGF1ZGlvQ29udGV4dCA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5uZXJBdWRpb0NvbnRleHQ7XG4gICAgICAgICAgICBpZiAoYXVkaW9Db250ZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGF1ZGlvQ29udGV4dC5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfS5iaW5kKHRoaXMpLCB3aGVuICogMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKHdoZW4pIHtcbiAgICAgIHZhciBpbm5lckF1ZGlvQ29udGV4dCA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5uZXJBdWRpb0NvbnRleHQ7XG4gICAgICBpZiAoaW5uZXJBdWRpb0NvbnRleHQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF3aGVuIHx8IHR5cGVvZiB3aGVuICE9PSAnbnVtYmVyJyB8fCB3aGVuIDw9IDApIHtcbiAgICAgICAgaW5uZXJBdWRpb0NvbnRleHQuc3RvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGF1ZGlvQ29udGV4dCA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5uZXJBdWRpb0NvbnRleHQ7XG4gICAgICAgICAgaWYgKGF1ZGlvQ29udGV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgYXVkaW9Db250ZXh0LnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSwgd2hlbiAqIDEwMDApO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbmVuZGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uZW5kZWQoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInBsYXliYWNrUmF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3BsYXliYWNrUmF0ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJwbGF5YmFja1JhdGUgbm9uc3VwcG9ydFwiKTtcbiAgICAgIHRoaXMuX3BsYXliYWNrUmF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb29wXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbG9vcDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB2YXIgaW5uZXJBdWRpb0NvbnRleHQgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0O1xuICAgICAgaWYgKGlubmVyQXVkaW9Db250ZXh0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xvb3AgPSB2YWx1ZTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lmxvb3AgPSB2YWx1ZTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEF1ZGlvQnVmZmVyU291cmNlTm9kZTtcbn0oX0F1ZGlvTm9kZTJbXCJkZWZhdWx0XCJdKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQXVkaW9CdWZmZXJTb3VyY2VOb2RlO1xuXG59LHtcIi4uL3V0aWwvV2Vha01hcFwiOjU3LFwiLi9BdWRpb05vZGVcIjo0NixcIi4vQXVkaW9QYXJhbVwiOjQ3fV0sNDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQmFzZUF1ZGlvQ29udGV4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0Jhc2VBdWRpb0NvbnRleHRcIikpO1xudmFyIF9NZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZVwiKSk7XG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlsL1dlYWtNYXBcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG52YXIgQXVkaW9Db250ZXh0ID0gZnVuY3Rpb24gKF9CYXNlQXVkaW9Db250ZXh0KSB7XG4gIF9pbmhlcml0cyhBdWRpb0NvbnRleHQsIF9CYXNlQXVkaW9Db250ZXh0KTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBdWRpb0NvbnRleHQpO1xuICBmdW5jdGlvbiBBdWRpb0NvbnRleHQob3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9Db250ZXh0KTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIF90aGlzLmJhc2VMYXRlbmN5O1xuICAgIF90aGlzLm91dHB1dExhdGVuY3k7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhBdWRpb0NvbnRleHQsIFt7XG4gICAga2V5OiBcImNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgdmFyIGF1ZGlvQnVmZmVyU291cmNlTm9kZUFycmF5ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5hdWRpb0J1ZmZlclNvdXJjZU5vZGVBcnJheTtcbiAgICAgIGF1ZGlvQnVmZmVyU291cmNlTm9kZUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChlbGVtZW50KS5pbm5lckF1ZGlvQ29udGV4dC5kZXN0cm95KCk7XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoZWxlbWVudCkuaW5uZXJBdWRpb0NvbnRleHQgPSBudWxsO1xuICAgICAgfSk7XG4gICAgICBhcnJheS5sZW5ndGggPSAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKG15TWVkaWFFbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IF9NZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGVbXCJkZWZhdWx0XCJdKHRoaXMsIHtcbiAgICAgICAgbWVkaWFFbGVtZW50OiBteU1lZGlhRWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVNZWRpYVN0cmVhbURlc3RpbmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU1lZGlhU3RyZWFtRGVzdGluYXRpb24oKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZU1lZGlhU3RyZWFtVHJhY2tTb3VyY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTWVkaWFTdHJlYW1UcmFja1NvdXJjZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0T3V0cHV0VGltZXN0YW1wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE91dHB1dFRpbWVzdGFtcCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzdW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3VtZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic3VzcGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdXNwZW5kKCkge31cbiAgfV0pO1xuICByZXR1cm4gQXVkaW9Db250ZXh0O1xufShfQmFzZUF1ZGlvQ29udGV4dDJbXCJkZWZhdWx0XCJdKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQXVkaW9Db250ZXh0O1xuXG59LHtcIi4uL3V0aWwvV2Vha01hcFwiOjU3LFwiLi9CYXNlQXVkaW9Db250ZXh0XCI6NDksXCIuL01lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZVwiOjUyfV0sNDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxudmFyIEF1ZGlvRGVzdGluYXRpb25Ob2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgX2luaGVyaXRzKEF1ZGlvRGVzdGluYXRpb25Ob2RlLCBfQXVkaW9Ob2RlKTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBdWRpb0Rlc3RpbmF0aW9uTm9kZSk7XG4gIGZ1bmN0aW9uIEF1ZGlvRGVzdGluYXRpb25Ob2RlKGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1ZGlvRGVzdGluYXRpb25Ob2RlKTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICAgIF90aGlzLm1heENoYW5uZWxDb3VudCA9IDI7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoQXVkaW9EZXN0aW5hdGlvbk5vZGUpO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBdWRpb0Rlc3RpbmF0aW9uTm9kZTtcblxufSx7XCIuL0F1ZGlvTm9kZVwiOjQ2fV0sNDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbnZhciBfQXVkaW9QYXJhbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9QYXJhbVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbnZhciBBdWRpb0xpc3RlbmVyID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgX2luaGVyaXRzKEF1ZGlvTGlzdGVuZXIsIF9BdWRpb05vZGUpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEF1ZGlvTGlzdGVuZXIpO1xuICBmdW5jdGlvbiBBdWRpb0xpc3RlbmVyKGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1ZGlvTGlzdGVuZXIpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgY29udGV4dCk7XG4gICAgX3RoaXMucG9zaXRpb25YID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLnBvc2l0aW9uWSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5wb3NpdGlvblogPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMuZm9yd2FyZFggPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMuZm9yd2FyZFkgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMuZm9yd2FyZFogPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAtMVxuICAgIH0pO1xuICAgIF90aGlzLnVwWCA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy51cFkgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAxXG4gICAgfSk7XG4gICAgX3RoaXMudXBaID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoQXVkaW9MaXN0ZW5lciwgW3tcbiAgICBrZXk6IFwic2V0T3JpZW50YXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3JpZW50YXRpb24oeCwgeSwgeikge31cbiAgfSwge1xuICAgIGtleTogXCJzZXRQb3NpdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQb3NpdGlvbih4LCB5LCB6KSB7XG4gICAgICB4ID0geCB8fCAwO1xuICAgICAgeSA9IHkgfHwgMDtcbiAgICAgIHogPSB6IHx8IDA7XG4gICAgICB0aGlzLnBvc2l0aW9uWC52YWx1ZSA9IHg7XG4gICAgICB0aGlzLnBvc2l0aW9uWS52YWx1ZSA9IHk7XG4gICAgICB0aGlzLnBvc2l0aW9uWi52YWx1ZSA9IHo7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBBdWRpb0xpc3RlbmVyO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBdWRpb0xpc3RlbmVyO1xuXG59LHtcIi4vQXVkaW9Ob2RlXCI6NDYsXCIuL0F1ZGlvUGFyYW1cIjo0N31dLDQ2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0V2ZW50VGFyZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL0V2ZW50VGFyZ2V0XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxudmFyIEF1ZGlvTm9kZSA9IGZ1bmN0aW9uIChfRXZlbnRUYXJnZXQpIHtcbiAgX2luaGVyaXRzKEF1ZGlvTm9kZSwgX0V2ZW50VGFyZ2V0KTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBdWRpb05vZGUpO1xuICBmdW5jdGlvbiBBdWRpb05vZGUoY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9Ob2RlKTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIF90aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgICBfdGhpcy5udW1iZXJPZklucHV0cyA9IDE7XG4gICAgX3RoaXMubnVtYmVyT2ZPdXRwdXRzID0gMTtcbiAgICBfdGhpcy5jaGFubmVsQ291bnQgPSAyO1xuICAgIF90aGlzLmNoYW5uZWxDb3VudE1vZGUgPSBcImV4cGxpY2l0XCI7XG4gICAgX3RoaXMuY2hhbm5lbEludGVycHJldGF0aW9uID0gXCJzcGVha2Vyc1wiO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoQXVkaW9Ob2RlLCBbe1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoZGVzdGluYXRpb24sIG91dHB1dEluZGV4LCBpbnB1dEluZGV4KSB7fVxuICB9LCB7XG4gICAga2V5OiBcImRpc2Nvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNOdW1iZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNOdW1iZXIob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ251bWJlcicgfHwgb2JqIGluc3RhbmNlb2YgTnVtYmVyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb250ZXh0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEF1ZGlvTm9kZTtcbn0oX0V2ZW50VGFyZ2V0MltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBdWRpb05vZGU7XG5cbn0se1wiLi4vRXZlbnRUYXJnZXRcIjoxMX1dLDQ3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbnZhciBBdWRpb1BhcmFtID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBdWRpb1BhcmFtKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9QYXJhbSk7XG4gICAgdGhpcy5hdXRvbWF0aW9uUmF0ZSA9IG9wdGlvbnMuYXV0b21hdGlvblJhdGUgfHwgXCJhLXJhdGVcIjtcbiAgICB0aGlzLl9kZWZhdWx0VmFsdWUgPSBvcHRpb25zLmRlZmF1bHRWYWx1ZSB8fCAxO1xuICAgIHRoaXMuX21heFZhbHVlID0gb3B0aW9ucy5tYXhWYWx1ZSB8fCBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgIHRoaXMuX21pblZhbHVlID0gb3B0aW9ucy5taW5WYWx1ZSB8fCAtTnVtYmVyLk1BWF9WQUxVRTtcbiAgICB0aGlzLnZhbHVlID0gb3B0aW9ucy52YWx1ZSB8fCAxO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhBdWRpb1BhcmFtLCBbe1xuICAgIGtleTogXCJkZWZhdWx0VmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1heFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWF4VmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1pblZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWluVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBNYXRoLm1pbih0aGlzLl9tYXhWYWx1ZSwgdmFsdWUpO1xuICAgICAgdGhpcy5fdmFsdWUgPSBNYXRoLm1heCh0aGlzLl9taW5WYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRWYWx1ZUF0VGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZUF0VGltZSh2YWx1ZSwgc3RhcnRUaW1lKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHZhbHVlLCBlbmRUaW1lKSB7XG4gICAgICBpZiAoZW5kVGltZSA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGsgPSB2YWx1ZSAvIGVuZFRpbWU7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMoZHQpIHtcbiAgICAgICAgZHQgPSBkdCAvIDEwMDA7XG4gICAgICAgIGlmIChkdCA+IGVuZFRpbWUpIHtcbiAgICAgICAgICBkdCA9IGVuZFRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGR0IDwgMCkge1xuICAgICAgICAgIGR0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbmRUaW1lIC09IGR0O1xuICAgICAgICBzZWxmLnZhbHVlICs9IGR0ICogaztcbiAgICAgICAgaWYgKGVuZFRpbWUgPiAwKSB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInNldFRhcmdldEF0VGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUYXJnZXRBdFRpbWUodGFyZ2V0LCBzdGFydFRpbWUsIHRpbWVDb25zdGFudCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRhcmdldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VmFsdWVDdXJ2ZUF0VGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZUN1cnZlQXRUaW1lKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjYW5jZWxTY2hlZHVsZWRWYWx1ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuY2VsU2NoZWR1bGVkVmFsdWVzKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjYW5jZWxBbmRIb2xkQXRUaW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbmNlbEFuZEhvbGRBdFRpbWUoKSB7fVxuICB9XSk7XG4gIHJldHVybiBBdWRpb1BhcmFtO1xufSgpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBdWRpb1BhcmFtO1xuXG59LHt9XSw0ODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG52YXIgQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgX2luaGVyaXRzKEF1ZGlvU2NoZWR1bGVkU291cmNlTm9kZSwgX0F1ZGlvTm9kZSk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlKTtcbiAgZnVuY3Rpb24gQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlKGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlKTtcbiAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEF1ZGlvU2NoZWR1bGVkU291cmNlTm9kZSwgW3tcbiAgICBrZXk6IFwib25lbmRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbmVuZGVkKGV2ZW50KSB7fVxuICB9LCB7XG4gICAga2V5OiBcInN0YXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KHdoZW4sIG9mZnNldCwgZHVyYXRpb24pIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKHdoZW4pIHt9XG4gIH1dKTtcbiAgcmV0dXJuIEF1ZGlvU2NoZWR1bGVkU291cmNlTm9kZTtcbn0oX0F1ZGlvTm9kZTJbXCJkZWZhdWx0XCJdKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlO1xuXG59LHtcIi4vQXVkaW9Ob2RlXCI6NDZ9XSw0OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9FdmVudFRhcmdldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9FdmVudFRhcmdldFwiKSk7XG52YXIgX0F1ZGlvTGlzdGVuZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvTGlzdGVuZXJcIikpO1xudmFyIF9QZXJpb2RpY1dhdmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1BlcmlvZGljV2F2ZVwiKSk7XG52YXIgX0F1ZGlvQnVmZmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb0J1ZmZlclwiKSk7XG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlsL1dlYWtNYXBcIikpO1xudmFyIF9EeW5hbWljc0NvbXByZXNzb3JOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9EeW5hbWljc0NvbXByZXNzb3JOb2RlXCIpKTtcbnZhciBfQXVkaW9CdWZmZXJTb3VyY2VOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb0J1ZmZlclNvdXJjZU5vZGVcIikpO1xudmFyIF9BdWRpb0Rlc3RpbmF0aW9uTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9EZXN0aW5hdGlvbk5vZGVcIikpO1xudmFyIF9Pc2NpbGxhdG9yTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vT3NjaWxsYXRvck5vZGVcIikpO1xudmFyIF9BbmFseXNlck5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0FuYWx5c2VyTm9kZVwiKSk7XG52YXIgX1Bhbm5lck5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1Bhbm5lck5vZGVcIikpO1xudmFyIF9HYWluTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vR2Fpbk5vZGVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG52YXIgQmFzZUF1ZGlvQ29udGV4dCA9IGZ1bmN0aW9uIChfRXZlbnRUYXJnZXQpIHtcbiAgX2luaGVyaXRzKEJhc2VBdWRpb0NvbnRleHQsIF9FdmVudFRhcmdldCk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQmFzZUF1ZGlvQ29udGV4dCk7XG4gIGZ1bmN0aW9uIEJhc2VBdWRpb0NvbnRleHQoKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCYXNlQXVkaW9Db250ZXh0KTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIF90aGlzLmF1ZGlvV29ya2xldDtcbiAgICBfdGhpcy5jdXJyZW50VGltZSA9IDA7XG4gICAgX3RoaXMuZGVzdGluYXRpb24gPSBuZXcgX0F1ZGlvRGVzdGluYXRpb25Ob2RlW1wiZGVmYXVsdFwiXShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMubGlzdGVuZXIgPSBuZXcgX0F1ZGlvTGlzdGVuZXJbXCJkZWZhdWx0XCJdKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zYW1wbGVSYXRlO1xuICAgIF90aGlzLnN0YXRlID0gXCJydW5uaW5nXCI7XG4gICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkuYXVkaW9CdWZmZXJTb3VyY2VOb2RlQXJyYXkgPSBbXTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEJhc2VBdWRpb0NvbnRleHQsIFt7XG4gICAga2V5OiBcImNyZWF0ZUFuYWx5c2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUFuYWx5c2VyKCkge1xuICAgICAgcmV0dXJuIG5ldyBfQW5hbHlzZXJOb2RlW1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlQmlxdWFkRmlsdGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUJpcXVhZEZpbHRlcigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlQnVmZmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlcigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlQnVmZmVyU291cmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlclNvdXJjZSgpIHtcbiAgICAgIHZhciBzb3VyY2VOb2RlID0gbmV3IF9BdWRpb0J1ZmZlclNvdXJjZU5vZGVbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5hdWRpb0J1ZmZlclNvdXJjZU5vZGVBcnJheS5wdXNoKHNvdXJjZU5vZGUpO1xuICAgICAgcmV0dXJuIHNvdXJjZU5vZGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUNvbnN0YW50U291cmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUNvbnN0YW50U291cmNlKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVDaGFubmVsTWVyZ2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUNoYW5uZWxNZXJnZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUNoYW5uZWxTcGxpdHRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDaGFubmVsU3BsaXR0ZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUNvbnZvbHZlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDb252b2x2ZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZURlbGF5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZURlbGF5KCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVEeW5hbWljc0NvbXByZXNzb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlRHluYW1pY3NDb21wcmVzc29yKCkge1xuICAgICAgcmV0dXJuIG5ldyBfRHluYW1pY3NDb21wcmVzc29yTm9kZVtcImRlZmF1bHRcIl0odGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUdhaW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlR2FpbigpIHtcbiAgICAgIHJldHVybiBuZXcgX0dhaW5Ob2RlW1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlSUlSRmlsdGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUlJUkZpbHRlcigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlT3NjaWxsYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVPc2NpbGxhdG9yKCkge1xuICAgICAgcmV0dXJuIG5ldyBfT3NjaWxsYXRvck5vZGVbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVQYW5uZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlUGFubmVyKCkge1xuICAgICAgcmV0dXJuIG5ldyBfUGFubmVyTm9kZVtcImRlZmF1bHRcIl0odGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZVBlcmlvZGljV2F2ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVQZXJpb2RpY1dhdmUoKSB7XG4gICAgICByZXR1cm4gbmV3IF9QZXJpb2RpY1dhdmVbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVTY3JpcHRQcm9jZXNzb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlU2NyaXB0UHJvY2Vzc29yKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVTdGVyZW9QYW5uZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlU3RlcmVvUGFubmVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVXYXZlU2hhcGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVdhdmVTaGFwZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImRlY29kZUF1ZGlvRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWNvZGVBdWRpb0RhdGEoYXVkaW9EYXRhLCBjYWxsRnVuYykge1xuICAgICAgbmV3IF9BdWRpb0J1ZmZlcltcImRlZmF1bHRcIl0odGhpcywgYXVkaW9EYXRhLCBjYWxsRnVuYyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uc3RhdGVjaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25zdGF0ZWNoYW5nZSgpIHt9XG4gIH1dKTtcbiAgcmV0dXJuIEJhc2VBdWRpb0NvbnRleHQ7XG59KF9FdmVudFRhcmdldDJbXCJkZWZhdWx0XCJdKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQmFzZUF1ZGlvQ29udGV4dDtcblxufSx7XCIuLi9FdmVudFRhcmdldFwiOjExLFwiLi4vdXRpbC9XZWFrTWFwXCI6NTcsXCIuL0FuYWx5c2VyTm9kZVwiOjQwLFwiLi9BdWRpb0J1ZmZlclwiOjQxLFwiLi9BdWRpb0J1ZmZlclNvdXJjZU5vZGVcIjo0MixcIi4vQXVkaW9EZXN0aW5hdGlvbk5vZGVcIjo0NCxcIi4vQXVkaW9MaXN0ZW5lclwiOjQ1LFwiLi9EeW5hbWljc0NvbXByZXNzb3JOb2RlXCI6NTAsXCIuL0dhaW5Ob2RlXCI6NTEsXCIuL09zY2lsbGF0b3JOb2RlXCI6NTMsXCIuL1Bhbm5lck5vZGVcIjo1NCxcIi4vUGVyaW9kaWNXYXZlXCI6NTV9XSw1MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xudmFyIF9BdWRpb1BhcmFtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb1BhcmFtXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxudmFyIER5bmFtaWNzQ29tcHJlc3Nvck5vZGUgPSBmdW5jdGlvbiAoX0F1ZGlvTm9kZSkge1xuICBfaW5oZXJpdHMoRHluYW1pY3NDb21wcmVzc29yTm9kZSwgX0F1ZGlvTm9kZSk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRHluYW1pY3NDb21wcmVzc29yTm9kZSk7XG4gIGZ1bmN0aW9uIER5bmFtaWNzQ29tcHJlc3Nvck5vZGUoY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHluYW1pY3NDb21wcmVzc29yTm9kZSk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgICBfdGhpcy5fdGhyZXNob2xkID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogLTI0LFxuICAgICAgZGVmYXVsdFZhbHVlOiAtMjQsXG4gICAgICBtYXhWYWx1ZTogMCxcbiAgICAgIG1pblZhbHVlOiAtMTAwXG4gICAgfSk7XG4gICAgX3RoaXMuX2tuZWUgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAzMCxcbiAgICAgIGRlZmF1bHRWYWx1ZTogMzAsXG4gICAgICBtYXhWYWx1ZTogNDAsXG4gICAgICBtaW5WYWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLl9yYXRpbyA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDEyLFxuICAgICAgZGVmYXVsdFZhbHVlOiAxMixcbiAgICAgIG1heFZhbHVlOiAyMCxcbiAgICAgIG1pblZhbHVlOiAxXG4gICAgfSk7XG4gICAgX3RoaXMuX3JlZHVjdGlvbiA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDAsXG4gICAgICBkZWZhdWx0VmFsdWU6IDAsXG4gICAgICBtYXhWYWx1ZTogMCxcbiAgICAgIG1pblZhbHVlOiAtMjBcbiAgICB9KTtcbiAgICBfdGhpcy5fYXR0YWNrID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMC4wMDMsXG4gICAgICBkZWZhdWx0VmFsdWU6IDAuMDAzLFxuICAgICAgbWF4VmFsdWU6IDEsXG4gICAgICBtaW5WYWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLl9yZWxlYXNlID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMC4yNSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogMC4yNSxcbiAgICAgIG1heFZhbHVlOiAxLFxuICAgICAgbWluVmFsdWU6IDBcbiAgICB9KTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKER5bmFtaWNzQ29tcHJlc3Nvck5vZGUsIFt7XG4gICAga2V5OiBcInRocmVzaG9sZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwia2VlblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2tlZW47XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJhdGlvXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmF0aW87XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlZHVjdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZHVjdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXR0YWNrXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXR0YWNrO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWxlYXNlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVsZWFzZTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIER5bmFtaWNzQ29tcHJlc3Nvck5vZGU7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IER5bmFtaWNzQ29tcHJlc3Nvck5vZGU7XG5cbn0se1wiLi9BdWRpb05vZGVcIjo0NixcIi4vQXVkaW9QYXJhbVwiOjQ3fV0sNTE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbnZhciBfQXVkaW9QYXJhbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9QYXJhbVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbnZhciBHYWluTm9kZSA9IGZ1bmN0aW9uIChfQXVkaW9Ob2RlKSB7XG4gIF9pbmhlcml0cyhHYWluTm9kZSwgX0F1ZGlvTm9kZSk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoR2Fpbk5vZGUpO1xuICBmdW5jdGlvbiBHYWluTm9kZShjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHYWluTm9kZSk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgICBfdGhpcy5fZ2FpbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5nYWluIHx8IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEdhaW5Ob2RlLCBbe1xuICAgIGtleTogXCJnYWluXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2FpbjtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEdhaW5Ob2RlO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBHYWluTm9kZTtcblxufSx7XCIuL0F1ZGlvTm9kZVwiOjQ2LFwiLi9BdWRpb1BhcmFtXCI6NDd9XSw1MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG52YXIgTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgX2luaGVyaXRzKE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZSwgX0F1ZGlvTm9kZSk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlKTtcbiAgZnVuY3Rpb24gTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZSk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgICBfdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhNZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGUsIFt7XG4gICAga2V5OiBcIm1lZGlhRWxlbWVudFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMgPyB0aGlzLl9vcHRpb25zLm1lZGlhRWxlbWVudCA6IG51bGw7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBNZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGU7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZTtcblxufSx7XCIuL0F1ZGlvTm9kZVwiOjQ2fV0sNTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGVcIikpO1xudmFyIF9BdWRpb1BhcmFtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb1BhcmFtXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxudmFyIHR5cGVzID0ge1xuICBcInNpbmVcIjogMCxcbiAgXCJzcXVhcmVcIjogMCxcbiAgXCJzYXd0b290aFwiOiAwLFxuICBcInRyaWFuZ2xlXCI6IDAsXG4gIFwiY3VzdG9tXCI6IDBcbn07XG52YXIgT3NjaWxsYXRvck5vZGUgPSBmdW5jdGlvbiAoX0F1ZGlvU2NoZWR1bGVkU291cmNlKSB7XG4gIF9pbmhlcml0cyhPc2NpbGxhdG9yTm9kZSwgX0F1ZGlvU2NoZWR1bGVkU291cmNlKTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihPc2NpbGxhdG9yTm9kZSk7XG4gIGZ1bmN0aW9uIE9zY2lsbGF0b3JOb2RlKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9zY2lsbGF0b3JOb2RlKTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIF90aGlzLmZyZXF1ZW5jeSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IF90aGlzLmlzTnVtYmVyKG9wdGlvbnMuZnJlcXVlbmN5KSA/IG9wdGlvbnMuZnJlcXVlbmN5IDogNDQwXG4gICAgfSk7XG4gICAgX3RoaXMuZGV0dW5lID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogX3RoaXMuaXNOdW1iZXIob3B0aW9ucy5kZXR1bmUpID8gb3B0aW9ucy5kZXR1bmUgOiAwXG4gICAgfSk7XG4gICAgX3RoaXMudHlwZSA9IG9wdGlvbnMudHlwZSBpbiB0eXBlcyA/IG9wdGlvbnMudHlwZSA6IFwic2luZVwiO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoT3NjaWxsYXRvck5vZGUsIFt7XG4gICAga2V5OiBcInNldFBlcmlvZGljV2F2ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQZXJpb2RpY1dhdmUod2F2ZSkge31cbiAgfSwge1xuICAgIGtleTogXCJzdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCh3aGVuKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCh3ZW4pIHt9XG4gIH1dKTtcbiAgcmV0dXJuIE9zY2lsbGF0b3JOb2RlO1xufShfQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IE9zY2lsbGF0b3JOb2RlO1xuXG59LHtcIi4vQXVkaW9QYXJhbVwiOjQ3LFwiLi9BdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGVcIjo0OH1dLDU0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0F1ZGlvTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvTm9kZVwiKSk7XG52YXIgX0F1ZGlvUGFyYW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvUGFyYW1cIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG52YXIgUGFubmVyTm9kZSA9IGZ1bmN0aW9uIChfQXVkaW9Ob2RlKSB7XG4gIF9pbmhlcml0cyhQYW5uZXJOb2RlLCBfQXVkaW9Ob2RlKTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQYW5uZXJOb2RlKTtcbiAgZnVuY3Rpb24gUGFubmVyTm9kZShjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYW5uZXJOb2RlKTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICAgIF90aGlzLmNvbmVJbm5lckFuZ2xlID0gMzYwO1xuICAgIF90aGlzLmNvbmVPdXRlckFuZ2xlID0gMzYwO1xuICAgIF90aGlzLmNvbmVPdXRlckdhaW4gPSAwO1xuICAgIF90aGlzLmRpc3RhbmNlTW9kZWwgPSBcImludmVyc2VcIjtcbiAgICBfdGhpcy5tYXhEaXN0YW5jZSA9IDEwMDAwO1xuICAgIF90aGlzLm9yaWVudGF0aW9uWCA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDFcbiAgICB9KTtcbiAgICBfdGhpcy5vcmllbnRhdGlvblkgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMub3JpZW50YXRpb25aID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLnBhbm5pbmdNb2RlbCA9IFwiZXF1YWxwb3dlclwiO1xuICAgIF90aGlzLnBvc2l0aW9uWCA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5wb3NpdGlvblkgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMucG9zaXRpb25aID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLnJlZkRpc3RhbmNlID0gMTtcbiAgICBfdGhpcy5yb2xsb2ZmRmFjdG9yID0gMTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKFBhbm5lck5vZGUsIFt7XG4gICAga2V5OiBcInNldFBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBvc2l0aW9uKHgsIHksIHopIHtcbiAgICAgIHRoaXMucG9zaXRpb25YID0geDtcbiAgICAgIHRoaXMucG9zaXRpb25ZID0geTtcbiAgICAgIHRoaXMucG9zaXRpb25aID0gejtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0T3JpZW50YXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3JpZW50YXRpb24oeCwgeSwgeikge1xuICAgICAgdGhpcy5vcmllbnRhdGlvblggPSB4O1xuICAgICAgdGhpcy5vcmllbnRhdGlvblkgPSB5O1xuICAgICAgdGhpcy5vcmllbnRhdGlvblogPSB6O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRWZWxvY2l0eVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWZWxvY2l0eSgpIHt9XG4gIH1dKTtcbiAgcmV0dXJuIFBhbm5lck5vZGU7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IFBhbm5lck5vZGU7XG5cbn0se1wiLi9BdWRpb05vZGVcIjo0NixcIi4vQXVkaW9QYXJhbVwiOjQ3fV0sNTU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxudmFyIFBlcmlvZGljV2F2ZSA9IF9jcmVhdGVDbGFzcyhmdW5jdGlvbiBQZXJpb2RpY1dhdmUoY29udGV4dCwgb3B0aW9ucykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGVyaW9kaWNXYXZlKTtcbn0pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBQZXJpb2RpY1dhdmU7XG5cbn0se31dLDU2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbnZhciBtZDUgPSByZXF1aXJlKFwiLi4vLi4vbGliL21kNS5taW5cIik7XG52YXIgZmlsZU1nciA9IHJhbC5nZXRGaWxlU3lzdGVtTWFuYWdlcigpO1xudmFyIGNhY2hlRGlyID0gcmFsLmVudi5VU0VSX0RBVEFfUEFUSCArIFwiL2ZpbGVDYWNoZS9cIjtcbnZhciBGaWxlQ2FjaGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEZpbGVDYWNoZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmlsZUNhY2hlKTtcbiAgICB0aGlzLl9jYWNoZXMgPSB7fTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoRmlsZUNhY2hlLCBbe1xuICAgIGtleTogXCJnZXRDYWNoZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDYWNoZShkYXRhKSB7XG4gICAgICB2YXIga2V5ID0gRmlsZUNhY2hlLl9nZW5EYXRhS2V5KGRhdGEpO1xuICAgICAgaWYgKGtleSBpbiB0aGlzLl9jYWNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlc1trZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldENhY2hlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldENhY2hlKHBhdGgsIGRhdGEpIHtcbiAgICAgIHZhciBrZXkgPSBGaWxlQ2FjaGUuX2dlbkRhdGFLZXkoZGF0YSk7XG4gICAgICB0aGlzLl9jYWNoZXNba2V5XSA9IHBhdGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEl0ZW1cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SXRlbShkYXRhLCBwYXRoLCBrZXksIGNhbGxCYWNrKSB7XG4gICAgICBrZXkgPSBrZXkgfHwgRmlsZUNhY2hlLl9nZW5EYXRhS2V5KGRhdGEpO1xuICAgICAgdmFyIGNhY2hlcyA9IHRoaXMuX2NhY2hlcztcbiAgICAgIGlmIChrZXkgaW4gY2FjaGVzKSB7XG4gICAgICAgIGNhbGxCYWNrICYmIGNhbGxCYWNrKGNhY2hlc1trZXldKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgIHBhdGggPSBjYWNoZURpciArIGtleTtcbiAgICAgICAgZmlsZU1nci53cml0ZUZpbGUoe1xuICAgICAgICAgIGZpbGVQYXRoOiBwYXRoLFxuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgZW5jb2Rpbmc6IFwiYmluYXJ5XCIsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgICAgICAgIGNhY2hlc1trZXldID0gcGF0aDtcbiAgICAgICAgICAgIGNhbGxCYWNrICYmIGNhbGxCYWNrKHBhdGgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbCgpIHtcbiAgICAgICAgICAgIGNhbGxCYWNrICYmIGNhbGxCYWNrKCk7XG4gICAgICAgICAgICB0aHJvdyBwYXRoICsgXCJ3cml0ZUZpbGUgZmFpbCFcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRQYXRoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBhdGgoZGF0YSwgY2FsbEJhY2spIHtcbiAgICAgIHZhciBrZXkgPSBGaWxlQ2FjaGUuX2dlbkRhdGFLZXkoZGF0YSk7XG4gICAgICB2YXIgY2FjaGVzID0gdGhpcy5fY2FjaGVzO1xuICAgICAgaWYgKGtleSBpbiBjYWNoZXMpIHtcbiAgICAgICAgY2FsbEJhY2soY2FjaGVzW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtKGRhdGEsIHVuZGVmaW5lZCwga2V5LCBjYWxsQmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiX2dlbkRhdGFLZXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dlbkRhdGFLZXkoZGF0YSkge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgRGF0YVZpZXcoZGF0YSk7XG4gICAgICB2YXIgbGVuZ3RoID0gdmlldy5ieXRlTGVuZ3RoIC8gNDtcbiAgICAgIHZhciBjb3VudCA9IDEwO1xuICAgICAgdmFyIHNwYWNlID0gbGVuZ3RoIC8gY291bnQ7XG4gICAgICB2YXIga2V5ID0gXCJsZW5ndGg6XCIgKyBsZW5ndGg7XG4gICAgICBrZXkgKz0gXCJmaXJzdDpcIiArIHZpZXcuZ2V0SW50MzIoMCk7XG4gICAgICBrZXkgKz0gXCJsYXN0OlwiICsgdmlldy5nZXRJbnQzMihsZW5ndGggLSAxKTtcbiAgICAgIHdoaWxlIChjb3VudC0tKSB7XG4gICAgICAgIGtleSArPSBjb3VudCArIFwiOlwiICsgdmlldy5nZXRJbnQzMihNYXRoLmZsb29yKHNwYWNlICogY291bnQpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZDUoa2V5KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEZpbGVDYWNoZTtcbn0oKTtcbnRyeSB7XG4gIGZpbGVNZ3IuYWNjZXNzU3luYyhjYWNoZURpcik7XG4gIGZpbGVNZ3Iucm1kaXJTeW5jKGNhY2hlRGlyLCB0cnVlKTtcbn0gY2F0Y2ggKGUpIHt9XG5maWxlTWdyLm1rZGlyU3luYyhjYWNoZURpciwgdHJ1ZSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IG5ldyBGaWxlQ2FjaGUoKTtcblxufSx7XCIuLi8uLi9saWIvbWQ1Lm1pblwiOjJ9XSw1NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBuZXcgV2Vha01hcCgpO1xuXG59LHt9XSw1ODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxudmFyIGZzbSA9IHJhbC5nZXRGaWxlU3lzdGVtTWFuYWdlciA/IHJhbC5nZXRGaWxlU3lzdGVtTWFuYWdlcigpIDogbnVsbDtcbnZhciBmc1V0aWxzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBmc1V0aWxzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBmc1V0aWxzKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvdXRPZlN0b3JhZ2VSZWdFeHBcIiwgL3RoZSBtYXhpbXVtIHNpemUgb2YgdGhlIGZpbGUgc3RvcmFnZS8pO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhmc1V0aWxzLCBbe1xuICAgIGtleTogXCJpc091dE9mU3RvcmFnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc091dE9mU3RvcmFnZShlcnJNc2cpIHtcbiAgICAgIHJldHVybiB0aGlzLm91dE9mU3RvcmFnZVJlZ0V4cC50ZXN0KGVyck1zZyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIndyaXRlRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3cml0ZUZpbGUocGF0aCwgZGF0YSwgZW5jb2RpbmcsIG9uQ29tcGxldGUpIHtcbiAgICAgIGZzbS53cml0ZUZpbGUoe1xuICAgICAgICBmaWxlUGF0aDogcGF0aCxcbiAgICAgICAgZW5jb2Rpbmc6IGVuY29kaW5nLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShudWxsKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJ3cml0ZUZpbGUgZmFpbGVkOiBwYXRoOiBcIi5jb25jYXQocGF0aCwgXCIgbWVzc2FnZTogXCIpLmNvbmNhdChyZXMuZXJyTXNnKSk7XG4gICAgICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKG5ldyBFcnJvcihyZXMuZXJyTXNnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3cml0ZUZpbGVTeW5jXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdyaXRlRmlsZVN5bmMocGF0aCwgZGF0YSwgZW5jb2RpbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZzbS53cml0ZUZpbGVTeW5jKHBhdGgsIGRhdGEsIGVuY29kaW5nKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIndyaXRlRmlsZVN5bmMgZmFpbGVkOiBwYXRoOiBcIi5jb25jYXQocGF0aCwgXCIgbWVzc2FnZTogXCIpLmNvbmNhdChlKSk7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlYWRKc29uU3luY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkSnNvblN5bmMocGF0aCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHN0ciA9IGZzbS5yZWFkRmlsZVN5bmMocGF0aCwgJ3V0ZjgnKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwicmVhZEpzb25TeW5jIGZhaWxlZDogcGF0aDogXCIuY29uY2F0KHBhdGgsIFwiIG1lc3NhZ2U6IFwiKS5jb25jYXQoZSkpO1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtYWtlRGlyU3luY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYWtlRGlyU3luYyhwYXRoLCByZWN1cnNpdmUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZzbS5ta2RpclN5bmMocGF0aCwgcmVjdXJzaXZlKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIm1rZGlyU3luYyBmYWlsZWQ6IHBhdGg6IFwiLmNvbmNhdChwYXRoLCBcIiBtZXNzYWdlOiBcIikuY29uY2F0KGUpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicm1kaXJTeW5jXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJtZGlyU3luYyhkaXJQYXRoLCByZWN1cnNpdmUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZzbS5ybWRpclN5bmMoZGlyUGF0aCwgcmVjdXJzaXZlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwicm1kaXJTeW5jIGZhaWxlZDogcGF0aDogXCIuY29uY2F0KGRpclBhdGgsIFwiIG1lc3NhZ2U6IFwiKS5jb25jYXQoZSkpO1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWFkRGlyU3luY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkRGlyU3luYyhkaXJQYXRoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZnNtLnJlYWRkaXJTeW5jKGRpclBhdGgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJyZWFkZGlyU3luYyBmYWlsZWQ6IHBhdGg6IFwiLmNvbmNhdChkaXJQYXRoLCBcIiBtZXNzYWdlOiBcIikuY29uY2F0KGUpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVsZXRlRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWxldGVGaWxlKGZpbGVQYXRoLCBvbkNvbXBsZXRlKSB7XG4gICAgICBmc20udW5saW5rKHtcbiAgICAgICAgZmlsZVBhdGg6IGZpbGVQYXRoLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShudWxsKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJkZWxldGVGaWxlIGZhaWxlZDogcGF0aDogXCIuY29uY2F0KGZpbGVQYXRoLCBcIiBtZXNzYWdlOiBcIikuY29uY2F0KHJlcy5lcnJNc2cpKTtcbiAgICAgICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUobmV3IEVycm9yKHJlcy5lcnJNc2cpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBmc1V0aWxzO1xufSgpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBuZXcgZnNVdGlscygpO1xuXG59LHt9XSw1OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9BdWRpbyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9cIikpO1xudmFyIF9BdWRpb0NvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2F1ZGlvQ29udGV4dC9BdWRpb0NvbnRleHRcIikpO1xudmFyIF9EZXZpY2VNb3Rpb25FdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRGV2aWNlTW90aW9uRXZlbnRcIikpO1xudmFyIF9Eb2N1bWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRG9jdW1lbnRcIikpO1xudmFyIF9FdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRcIikpO1xudmFyIF9Gb250RmFjZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9udEZhY2VcIikpO1xudmFyIF9Gb250RmFjZVNldCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9udEZhY2VTZXRcIikpO1xudmFyIF9FdmVudFRhcmdldCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRUYXJnZXRcIikpO1xudmFyIF9IVE1MRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnRcIikpO1xudmFyIF9IVE1MQXVkaW9FbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MQXVkaW9FbGVtZW50XCIpKTtcbnZhciBfSFRNTENhbnZhc0VsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxDYW52YXNFbGVtZW50XCIpKTtcbnZhciBfSFRNTEltYWdlRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEltYWdlRWxlbWVudFwiKSk7XG52YXIgX0hUTUxWaWRlb0VsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxWaWRlb0VsZW1lbnRcIikpO1xudmFyIF9JbWFnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSW1hZ2VcIikpO1xudmFyIF9Mb2NhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTG9jYXRpb25cIikpO1xudmFyIF9OYXZpZ2F0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05hdmlnYXRvclwiKSk7XG52YXIgX1NjcmVlbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vU2NyZWVuXCIpKTtcbnZhciBfVG91Y2hFdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVG91Y2hFdmVudFwiKSk7XG52YXIgX1hNTEh0dHBSZXF1ZXN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9YTUxIdHRwUmVxdWVzdFwiKSk7XG52YXIgX0hUTUxTY3JpcHRFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MU2NyaXB0RWxlbWVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbndpbmRvdy5yYWwgPSB3aW5kb3cucmFsIHx8IHt9O1xudmFyIF9zeXN0ZW1JbmZvID0gd2luZG93LnJhbC5nZXRTeXN0ZW1JbmZvU3luYygpO1xud2luZG93LmNsaWVudFRvcCA9IDA7XG53aW5kb3cuY2xpZW50TGVmdCA9IDA7XG53aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA9IF9zeXN0ZW1JbmZvLnBpeGVsUmF0aW87XG53aW5kb3cuZG9jdW1lbnQgPSBuZXcgX0RvY3VtZW50W1wiZGVmYXVsdFwiXSgpO1xud2luZG93LmZyYW1lRWxlbWVudCA9IG51bGw7XG53aW5kb3cuZnVsbFNjcmVlbiA9IHRydWU7XG53aW5kb3cuaW5uZXJIZWlnaHQgPSBfc3lzdGVtSW5mby53aW5kb3dIZWlnaHQ7XG53aW5kb3cuaW5uZXJXaWR0aCA9IF9zeXN0ZW1JbmZvLndpbmRvd1dpZHRoO1xud2luZG93Lmxlbmd0aCA9IDA7XG53aW5kb3cubG9jYXRpb24gPSBuZXcgX0xvY2F0aW9uW1wiZGVmYXVsdFwiXSgpO1xud2luZG93Lm5hbWUgPSBcInJ1bnRpbWVcIjtcbndpbmRvdy5uYXZpZ2F0b3IgPSBuZXcgX05hdmlnYXRvcltcImRlZmF1bHRcIl0oX3N5c3RlbUluZm8ucGxhdGZvcm0sIF9zeXN0ZW1JbmZvLmxhbmd1YWdlKTtcbndpbmRvdy5vdXRlckhlaWdodCA9IF9zeXN0ZW1JbmZvLndpbmRvd0hlaWdodDtcbndpbmRvdy5vdXRlcldpZHRoID0gX3N5c3RlbUluZm8ud2luZG93V2lkdGg7XG53aW5kb3cucGFnZVhPZmZzZXQgPSAwO1xud2luZG93LnBhZ2VZT2Zmc2V0ID0gMDtcbndpbmRvdy5wYXJlbnQgPSB3aW5kb3c7XG53aW5kb3cuc2NyZWVuID0gbmV3IF9TY3JlZW5bXCJkZWZhdWx0XCJdKCk7XG53aW5kb3cuc2NyZWVuTGVmdCA9IDA7XG53aW5kb3cuc2NyZWVuVG9wID0gMDtcbndpbmRvdy5zY3JlZW5YID0gMDtcbndpbmRvdy5zY3JlZW5ZID0gMDtcbndpbmRvdy5zY3JvbGxYID0gMDtcbndpbmRvdy5zY3JvbGxZID0gMDtcbndpbmRvdy5zZWxmID0gd2luZG93O1xud2luZG93LnRvcCA9IHdpbmRvdztcbndpbmRvdy53aW5kb3cgPSB3aW5kb3c7XG53aW5kb3cuYWxlcnQgPSB3aW5kb3cuY29uc29sZS5lcnJvcjtcbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJy4uL2xpYi9iYXNlNjQubWluLmpzJyksXG4gIGJ0b2EgPSBfcmVxdWlyZS5idG9hLFxuICBhdG9iID0gX3JlcXVpcmUuYXRvYjtcbndpbmRvdy5hdG9iID0gYXRvYjtcbndpbmRvdy5idG9hID0gYnRvYTtcbndpbmRvdy5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS53YXJuKFwid2luZG93LmNsb3NlKCkgaXMgZGVwcmVjYXRlZCFcIik7XG59O1xud2luZG93LnByaW50ID0gd2luZG93LmNvbnNvbGUubG9nO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIgPSBfRXZlbnRUYXJnZXRbXCJkZWZhdWx0XCJdLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLmJpbmQod2luZG93KTtcbndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyID0gX0V2ZW50VGFyZ2V0W1wiZGVmYXVsdFwiXS5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHdpbmRvdyk7XG52YXIgX2Rpc3BhdGNoRXZlbnQgPSBfRXZlbnRUYXJnZXRbXCJkZWZhdWx0XCJdLnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50O1xud2luZG93LmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKHdpbmRvdy5kb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KSkge1xuICAgIHJldHVybiBfZGlzcGF0Y2hFdmVudC5hcHBseSh0aGlzIHx8IHdpbmRvdywgYXJndW1lbnRzKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xud2luZG93LmdldENvbXB1dGVkU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogJzBweCcsXG4gICAgdG9wOiAnMHB4JyxcbiAgICBoZWlnaHQ6ICcwcHgnLFxuICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgIGdldFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWUoa2V5KSB7XG4gICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgIH1cbiAgfTtcbn07XG5yYWwub25XaW5kb3dSZXNpemUgJiYgcmFsLm9uV2luZG93UmVzaXplKGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XG4gIHdpbmRvdy5pbm5lcldpZHRoID0gd2lkdGg7XG4gIHdpbmRvdy5pbm5lckhlaWdodCA9IGhlaWdodDtcbiAgd2luZG93Lm91dGVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgd2luZG93Lm91dGVySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgd2luZG93LnNjcmVlbi53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB3aW5kb3cuc2NyZWVuLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgdmFyIGV2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJyZXNpemVcIik7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn0pO1xucmFsLm9uRGV2aWNlT3JpZW50YXRpb25DaGFuZ2UgJiYgcmFsLm9uRGV2aWNlT3JpZW50YXRpb25DaGFuZ2UoZnVuY3Rpb24gKHJlcykge1xuICBpZiAocmVzLnZhbHVlID09PSBcInBvcnRyYWl0XCIpIHtcbiAgICB3aW5kb3cub3JpZW50YXRpb24gPSAwO1xuICB9IGVsc2UgaWYgKHJlcy52YWx1ZSA9PT0gXCJsYW5kc2NhcGVcIikge1xuICAgIHdpbmRvdy5vcmllbnRhdGlvbiA9IDkwO1xuICB9IGVsc2UgaWYgKHJlcy52YWx1ZSA9PT0gXCJsYW5kc2NhcGVSZXZlcnNlXCIpIHtcbiAgICB3aW5kb3cub3JpZW50YXRpb24gPSAtOTA7XG4gIH0gZWxzZSBpZiAocmVzLnZhbHVlID09PSBcInBvcnRyYWl0UmV2ZXJzZVwiKSB7XG4gICAgd2luZG93Lm9yaWVudGF0aW9uID0gMTgwO1xuICB9XG59KTtcbndpbmRvdy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLndhcm4oXCJ3aW5kb3cuc3RvcCgpIG5vdCBpbXBsZW1lbnRlZFwiKTtcbn07XG53aW5kb3cuQXVkaW8gPSBfQXVkaW9bXCJkZWZhdWx0XCJdO1xud2luZG93LkF1ZGlvQ29udGV4dCA9IF9BdWRpb0NvbnRleHRbXCJkZWZhdWx0XCJdO1xud2luZG93LkRldmljZU1vdGlvbkV2ZW50ID0gX0RldmljZU1vdGlvbkV2ZW50W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5FdmVudCA9IF9FdmVudFtcImRlZmF1bHRcIl07XG53aW5kb3cuRm9udEZhY2UgPSBfRm9udEZhY2VbXCJkZWZhdWx0XCJdO1xud2luZG93LkZvbnRGYWNlU2V0ID0gX0ZvbnRGYWNlU2V0W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5IVE1MRWxlbWVudCA9IF9IVE1MRWxlbWVudFtcImRlZmF1bHRcIl07XG53aW5kb3cuSFRNTEF1ZGlvRWxlbWVudCA9IF9IVE1MQXVkaW9FbGVtZW50W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5IVE1MQ2FudmFzRWxlbWVudCA9IF9IVE1MQ2FudmFzRWxlbWVudFtcImRlZmF1bHRcIl07XG53aW5kb3cuSFRNTEltYWdlRWxlbWVudCA9IF9IVE1MSW1hZ2VFbGVtZW50W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5IVE1MVmlkZW9FbGVtZW50ID0gX0hUTUxWaWRlb0VsZW1lbnRbXCJkZWZhdWx0XCJdO1xud2luZG93LkltYWdlID0gX0ltYWdlW1wiZGVmYXVsdFwiXTtcbndpbmRvdy5Ub3VjaEV2ZW50ID0gX1RvdWNoRXZlbnRbXCJkZWZhdWx0XCJdO1xud2luZG93LlhNTEh0dHBSZXF1ZXN0ID0gX1hNTEh0dHBSZXF1ZXN0W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5IVE1MU2NyaXB0RWxlbWVudCA9IF9IVE1MU2NyaXB0RWxlbWVudFtcImRlZmF1bHRcIl07XG5pZiAoIXdpbmRvdy5CbG9iIHx8ICF3aW5kb3cuVVJMKSB7XG4gIHZhciBfcmVxdWlyZTIgPSByZXF1aXJlKCcuL0Jsb2IuanMnKSxcbiAgICBCbG9iID0gX3JlcXVpcmUyLkJsb2IsXG4gICAgVVJMID0gX3JlcXVpcmUyLlVSTDtcbiAgd2luZG93LkJsb2IgPSBCbG9iO1xuICB3aW5kb3cuVVJMID0gVVJMO1xufVxuaWYgKCF3aW5kb3cuRE9NUGFyc2VyKSB7XG4gIHdpbmRvdy5ET01QYXJzZXIgPSByZXF1aXJlKCcuL3htbGRvbS9kb20tcGFyc2VyLmpzJykuRE9NUGFyc2VyO1xufVxuXG59LHtcIi4uL2xpYi9iYXNlNjQubWluLmpzXCI6MSxcIi4vQXVkaW9cIjo0LFwiLi9CbG9iLmpzXCI6NSxcIi4vRGV2aWNlTW90aW9uRXZlbnRcIjo3LFwiLi9Eb2N1bWVudFwiOjgsXCIuL0V2ZW50XCI6MTAsXCIuL0V2ZW50VGFyZ2V0XCI6MTEsXCIuL0ZvbnRGYWNlXCI6MTIsXCIuL0ZvbnRGYWNlU2V0XCI6MTMsXCIuL0hUTUxBdWRpb0VsZW1lbnRcIjoxNSxcIi4vSFRNTENhbnZhc0VsZW1lbnRcIjoxNyxcIi4vSFRNTEVsZW1lbnRcIjoxOCxcIi4vSFRNTEltYWdlRWxlbWVudFwiOjIxLFwiLi9IVE1MU2NyaXB0RWxlbWVudFwiOjI0LFwiLi9IVE1MVmlkZW9FbGVtZW50XCI6MjYsXCIuL0ltYWdlXCI6MjcsXCIuL0xvY2F0aW9uXCI6MjksXCIuL05hdmlnYXRvclwiOjMxLFwiLi9TY3JlZW5cIjozNCxcIi4vVG91Y2hFdmVudFwiOjM2LFwiLi9YTUxIdHRwUmVxdWVzdFwiOjM3LFwiLi9hdWRpb0NvbnRleHQvQXVkaW9Db250ZXh0XCI6NDMsXCIuL3htbGRvbS9kb20tcGFyc2VyLmpzXCI6NjB9XSw2MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gRE9NUGFyc2VyKG9wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7XG4gICAgbG9jYXRvcjoge31cbiAgfTtcbn1cbkRPTVBhcnNlci5wcm90b3R5cGUucGFyc2VGcm9tU3RyaW5nID0gZnVuY3Rpb24gKHNvdXJjZSwgbWltZVR5cGUpIHtcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gIHZhciBzYXggPSBuZXcgWE1MUmVhZGVyKCk7XG4gIHZhciBkb21CdWlsZGVyID0gb3B0aW9ucy5kb21CdWlsZGVyIHx8IG5ldyBET01IYW5kbGVyKCk7XG4gIHZhciBlcnJvckhhbmRsZXIgPSBvcHRpb25zLmVycm9ySGFuZGxlcjtcbiAgdmFyIGxvY2F0b3IgPSBvcHRpb25zLmxvY2F0b3I7XG4gIHZhciBkZWZhdWx0TlNNYXAgPSBvcHRpb25zLnhtbG5zIHx8IHt9O1xuICB2YXIgaXNIVE1MID0gL1xcL3g/aHRtbD8kLy50ZXN0KG1pbWVUeXBlKTtcbiAgdmFyIGVudGl0eU1hcCA9IGlzSFRNTCA/IGh0bWxFbnRpdHkuZW50aXR5TWFwIDoge1xuICAgICdsdCc6ICc8JyxcbiAgICAnZ3QnOiAnPicsXG4gICAgJ2FtcCc6ICcmJyxcbiAgICAncXVvdCc6ICdcIicsXG4gICAgJ2Fwb3MnOiBcIidcIlxuICB9O1xuICBpZiAobG9jYXRvcikge1xuICAgIGRvbUJ1aWxkZXIuc2V0RG9jdW1lbnRMb2NhdG9yKGxvY2F0b3IpO1xuICB9XG4gIHNheC5lcnJvckhhbmRsZXIgPSBidWlsZEVycm9ySGFuZGxlcihlcnJvckhhbmRsZXIsIGRvbUJ1aWxkZXIsIGxvY2F0b3IpO1xuICBzYXguZG9tQnVpbGRlciA9IG9wdGlvbnMuZG9tQnVpbGRlciB8fCBkb21CdWlsZGVyO1xuICBpZiAoaXNIVE1MKSB7XG4gICAgZGVmYXVsdE5TTWFwWycnXSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbiAgfVxuICBkZWZhdWx0TlNNYXAueG1sID0gZGVmYXVsdE5TTWFwLnhtbCB8fCAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJztcbiAgaWYgKHNvdXJjZSkge1xuICAgIHNheC5wYXJzZShzb3VyY2UsIGRlZmF1bHROU01hcCwgZW50aXR5TWFwKTtcbiAgfSBlbHNlIHtcbiAgICBzYXguZXJyb3JIYW5kbGVyLmVycm9yKFwiaW52YWxpZCBkb2Mgc291cmNlXCIpO1xuICB9XG4gIHJldHVybiBkb21CdWlsZGVyLmRvYztcbn07XG5mdW5jdGlvbiBidWlsZEVycm9ySGFuZGxlcihlcnJvckltcGwsIGRvbUJ1aWxkZXIsIGxvY2F0b3IpIHtcbiAgaWYgKCFlcnJvckltcGwpIHtcbiAgICBpZiAoZG9tQnVpbGRlciBpbnN0YW5jZW9mIERPTUhhbmRsZXIpIHtcbiAgICAgIHJldHVybiBkb21CdWlsZGVyO1xuICAgIH1cbiAgICBlcnJvckltcGwgPSBkb21CdWlsZGVyO1xuICB9XG4gIHZhciBlcnJvckhhbmRsZXIgPSB7fTtcbiAgdmFyIGlzQ2FsbGJhY2sgPSBlcnJvckltcGwgaW5zdGFuY2VvZiBGdW5jdGlvbjtcbiAgbG9jYXRvciA9IGxvY2F0b3IgfHwge307XG4gIGZ1bmN0aW9uIGJ1aWxkKGtleSkge1xuICAgIHZhciBmbiA9IGVycm9ySW1wbFtrZXldO1xuICAgIGlmICghZm4gJiYgaXNDYWxsYmFjaykge1xuICAgICAgZm4gPSBlcnJvckltcGwubGVuZ3RoID09IDIgPyBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgIGVycm9ySW1wbChrZXksIG1zZyk7XG4gICAgICB9IDogZXJyb3JJbXBsO1xuICAgIH1cbiAgICBlcnJvckhhbmRsZXJba2V5XSA9IGZuICYmIGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgIGZuKCdbeG1sZG9tICcgKyBrZXkgKyAnXVxcdCcgKyBtc2cgKyBfbG9jYXRvcihsb2NhdG9yKSk7XG4gICAgfSB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgfVxuICBidWlsZCgnd2FybmluZycpO1xuICBidWlsZCgnZXJyb3InKTtcbiAgYnVpbGQoJ2ZhdGFsRXJyb3InKTtcbiAgcmV0dXJuIGVycm9ySGFuZGxlcjtcbn1cbmZ1bmN0aW9uIERPTUhhbmRsZXIoKSB7XG4gIHRoaXMuY2RhdGEgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIHBvc2l0aW9uKGxvY2F0b3IsIG5vZGUpIHtcbiAgbm9kZS5saW5lTnVtYmVyID0gbG9jYXRvci5saW5lTnVtYmVyO1xuICBub2RlLmNvbHVtbk51bWJlciA9IGxvY2F0b3IuY29sdW1uTnVtYmVyO1xufVxuRE9NSGFuZGxlci5wcm90b3R5cGUgPSB7XG4gIHN0YXJ0RG9jdW1lbnQ6IGZ1bmN0aW9uIHN0YXJ0RG9jdW1lbnQoKSB7XG4gICAgdGhpcy5kb2MgPSBuZXcgRE9NSW1wbGVtZW50YXRpb24oKS5jcmVhdGVEb2N1bWVudChudWxsLCBudWxsLCBudWxsKTtcbiAgICBpZiAodGhpcy5sb2NhdG9yKSB7XG4gICAgICB0aGlzLmRvYy5kb2N1bWVudFVSSSA9IHRoaXMubG9jYXRvci5zeXN0ZW1JZDtcbiAgICB9XG4gIH0sXG4gIHN0YXJ0RWxlbWVudDogZnVuY3Rpb24gc3RhcnRFbGVtZW50KG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lLCBxTmFtZSwgYXR0cnMpIHtcbiAgICB2YXIgZG9jID0gdGhpcy5kb2M7XG4gICAgdmFyIGVsID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHFOYW1lIHx8IGxvY2FsTmFtZSk7XG4gICAgdmFyIGxlbiA9IGF0dHJzLmxlbmd0aDtcbiAgICBhcHBlbmRFbGVtZW50KHRoaXMsIGVsKTtcbiAgICB0aGlzLmN1cnJlbnRFbGVtZW50ID0gZWw7XG4gICAgdGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvciwgZWwpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBuYW1lc3BhY2VVUkkgPSBhdHRycy5nZXRVUkkoaSk7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRycy5nZXRWYWx1ZShpKTtcbiAgICAgIHZhciBxTmFtZSA9IGF0dHJzLmdldFFOYW1lKGkpO1xuICAgICAgdmFyIGF0dHIgPSBkb2MuY3JlYXRlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxTmFtZSk7XG4gICAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24oYXR0cnMuZ2V0TG9jYXRvcihpKSwgYXR0cik7XG4gICAgICBhdHRyLnZhbHVlID0gYXR0ci5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZU5vZGUoYXR0cik7XG4gICAgfVxuICB9LFxuICBlbmRFbGVtZW50OiBmdW5jdGlvbiBlbmRFbGVtZW50KG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lLCBxTmFtZSkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50RWxlbWVudDtcbiAgICB2YXIgdGFnTmFtZSA9IGN1cnJlbnQudGFnTmFtZTtcbiAgICB0aGlzLmN1cnJlbnRFbGVtZW50ID0gY3VycmVudC5wYXJlbnROb2RlO1xuICB9LFxuICBzdGFydFByZWZpeE1hcHBpbmc6IGZ1bmN0aW9uIHN0YXJ0UHJlZml4TWFwcGluZyhwcmVmaXgsIHVyaSkge30sXG4gIGVuZFByZWZpeE1hcHBpbmc6IGZ1bmN0aW9uIGVuZFByZWZpeE1hcHBpbmcocHJlZml4KSB7fSxcbiAgcHJvY2Vzc2luZ0luc3RydWN0aW9uOiBmdW5jdGlvbiBwcm9jZXNzaW5nSW5zdHJ1Y3Rpb24odGFyZ2V0LCBkYXRhKSB7XG4gICAgdmFyIGlucyA9IHRoaXMuZG9jLmNyZWF0ZVByb2Nlc3NpbmdJbnN0cnVjdGlvbih0YXJnZXQsIGRhdGEpO1xuICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsIGlucyk7XG4gICAgYXBwZW5kRWxlbWVudCh0aGlzLCBpbnMpO1xuICB9LFxuICBpZ25vcmFibGVXaGl0ZXNwYWNlOiBmdW5jdGlvbiBpZ25vcmFibGVXaGl0ZXNwYWNlKGNoLCBzdGFydCwgbGVuZ3RoKSB7fSxcbiAgY2hhcmFjdGVyczogZnVuY3Rpb24gY2hhcmFjdGVycyhjaGFycywgc3RhcnQsIGxlbmd0aCkge1xuICAgIGNoYXJzID0gX3RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGNoYXJzKSB7XG4gICAgICBpZiAodGhpcy5jZGF0YSkge1xuICAgICAgICB2YXIgY2hhck5vZGUgPSB0aGlzLmRvYy5jcmVhdGVDREFUQVNlY3Rpb24oY2hhcnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNoYXJOb2RlID0gdGhpcy5kb2MuY3JlYXRlVGV4dE5vZGUoY2hhcnMpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjaGFyTm9kZSk7XG4gICAgICB9IGVsc2UgaWYgKC9eXFxzKiQvLnRlc3QoY2hhcnMpKSB7XG4gICAgICAgIHRoaXMuZG9jLmFwcGVuZENoaWxkKGNoYXJOb2RlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsIGNoYXJOb2RlKTtcbiAgICB9XG4gIH0sXG4gIHNraXBwZWRFbnRpdHk6IGZ1bmN0aW9uIHNraXBwZWRFbnRpdHkobmFtZSkge30sXG4gIGVuZERvY3VtZW50OiBmdW5jdGlvbiBlbmREb2N1bWVudCgpIHtcbiAgICB0aGlzLmRvYy5ub3JtYWxpemUoKTtcbiAgfSxcbiAgc2V0RG9jdW1lbnRMb2NhdG9yOiBmdW5jdGlvbiBzZXREb2N1bWVudExvY2F0b3IobG9jYXRvcikge1xuICAgIGlmICh0aGlzLmxvY2F0b3IgPSBsb2NhdG9yKSB7XG4gICAgICBsb2NhdG9yLmxpbmVOdW1iZXIgPSAwO1xuICAgIH1cbiAgfSxcbiAgY29tbWVudDogZnVuY3Rpb24gY29tbWVudChjaGFycywgc3RhcnQsIGxlbmd0aCkge1xuICAgIGNoYXJzID0gX3RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdmFyIGNvbW0gPSB0aGlzLmRvYy5jcmVhdGVDb21tZW50KGNoYXJzKTtcbiAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLCBjb21tKTtcbiAgICBhcHBlbmRFbGVtZW50KHRoaXMsIGNvbW0pO1xuICB9LFxuICBzdGFydENEQVRBOiBmdW5jdGlvbiBzdGFydENEQVRBKCkge1xuICAgIHRoaXMuY2RhdGEgPSB0cnVlO1xuICB9LFxuICBlbmRDREFUQTogZnVuY3Rpb24gZW5kQ0RBVEEoKSB7XG4gICAgdGhpcy5jZGF0YSA9IGZhbHNlO1xuICB9LFxuICBzdGFydERURDogZnVuY3Rpb24gc3RhcnREVEQobmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKSB7XG4gICAgdmFyIGltcGwgPSB0aGlzLmRvYy5pbXBsZW1lbnRhdGlvbjtcbiAgICBpZiAoaW1wbCAmJiBpbXBsLmNyZWF0ZURvY3VtZW50VHlwZSkge1xuICAgICAgdmFyIGR0ID0gaW1wbC5jcmVhdGVEb2N1bWVudFR5cGUobmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKTtcbiAgICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsIGR0KTtcbiAgICAgIGFwcGVuZEVsZW1lbnQodGhpcywgZHQpO1xuICAgIH1cbiAgfSxcbiAgd2FybmluZzogZnVuY3Rpb24gd2FybmluZyhlcnJvcikge1xuICAgIGNvbnNvbGUud2FybignW3htbGRvbSB3YXJuaW5nXVxcdCcgKyBlcnJvciwgX2xvY2F0b3IodGhpcy5sb2NhdG9yKSk7XG4gIH0sXG4gIGVycm9yOiBmdW5jdGlvbiBlcnJvcihfZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbeG1sZG9tIGVycm9yXVxcdCcgKyBfZXJyb3IsIF9sb2NhdG9yKHRoaXMubG9jYXRvcikpO1xuICB9LFxuICBmYXRhbEVycm9yOiBmdW5jdGlvbiBmYXRhbEVycm9yKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW3htbGRvbSBmYXRhbEVycm9yXVxcdCcgKyBlcnJvciwgX2xvY2F0b3IodGhpcy5sb2NhdG9yKSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5mdW5jdGlvbiBfbG9jYXRvcihsKSB7XG4gIGlmIChsKSB7XG4gICAgcmV0dXJuICdcXG5AJyArIChsLnN5c3RlbUlkIHx8ICcnKSArICcjW2xpbmU6JyArIGwubGluZU51bWJlciArICcsY29sOicgKyBsLmNvbHVtbk51bWJlciArICddJztcbiAgfVxufVxuZnVuY3Rpb24gX3RvU3RyaW5nKGNoYXJzLCBzdGFydCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgY2hhcnMgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gY2hhcnMuc3Vic3RyKHN0YXJ0LCBsZW5ndGgpO1xuICB9IGVsc2Uge1xuICAgIGlmIChjaGFycy5sZW5ndGggPj0gc3RhcnQgKyBsZW5ndGggfHwgc3RhcnQpIHtcbiAgICAgIHJldHVybiBuZXcgamF2YS5sYW5nLlN0cmluZyhjaGFycywgc3RhcnQsIGxlbmd0aCkgKyAnJztcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzO1xuICB9XG59XG5cImVuZERURCxzdGFydEVudGl0eSxlbmRFbnRpdHksYXR0cmlidXRlRGVjbCxlbGVtZW50RGVjbCxleHRlcm5hbEVudGl0eURlY2wsaW50ZXJuYWxFbnRpdHlEZWNsLHJlc29sdmVFbnRpdHksZ2V0RXh0ZXJuYWxTdWJzZXQsbm90YXRpb25EZWNsLHVucGFyc2VkRW50aXR5RGVjbFwiLnJlcGxhY2UoL1xcdysvZywgZnVuY3Rpb24gKGtleSkge1xuICBET01IYW5kbGVyLnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9O1xufSk7XG5mdW5jdGlvbiBhcHBlbmRFbGVtZW50KGhhbmRlciwgbm9kZSkge1xuICBpZiAoIWhhbmRlci5jdXJyZW50RWxlbWVudCkge1xuICAgIGhhbmRlci5kb2MuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgaGFuZGVyLmN1cnJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICB9XG59XG52YXIgaHRtbEVudGl0eSA9IHJlcXVpcmUoJy4vZW50aXRpZXMnKTtcbnZhciBYTUxSZWFkZXIgPSByZXF1aXJlKCcuL3NheCcpLlhNTFJlYWRlcjtcbnZhciBET01JbXBsZW1lbnRhdGlvbiA9IGV4cG9ydHMuRE9NSW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2RvbScpLkRPTUltcGxlbWVudGF0aW9uO1xuZXhwb3J0cy5YTUxTZXJpYWxpemVyID0gcmVxdWlyZSgnLi9kb20nKS5YTUxTZXJpYWxpemVyO1xuZXhwb3J0cy5ET01QYXJzZXIgPSBET01QYXJzZXI7XG5cbn0se1wiLi9kb21cIjo2MSxcIi4vZW50aXRpZXNcIjo2MixcIi4vc2F4XCI6NjN9XSw2MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gY29weShzcmMsIGRlc3QpIHtcbiAgZm9yICh2YXIgcCBpbiBzcmMpIHtcbiAgICBkZXN0W3BdID0gc3JjW3BdO1xuICB9XG59XG5mdW5jdGlvbiBfZXh0ZW5kcyhDbGFzcywgU3VwZXIpIHtcbiAgdmFyIHB0ID0gQ2xhc3MucHJvdG90eXBlO1xuICBpZiAoIShwdCBpbnN0YW5jZW9mIFN1cGVyKSkge1xuICAgIHZhciB0ID0gZnVuY3Rpb24gdCgpIHt9O1xuICAgIDtcbiAgICB0LnByb3RvdHlwZSA9IFN1cGVyLnByb3RvdHlwZTtcbiAgICB0ID0gbmV3IHQoKTtcbiAgICBjb3B5KHB0LCB0KTtcbiAgICBDbGFzcy5wcm90b3R5cGUgPSBwdCA9IHQ7XG4gIH1cbiAgaWYgKHB0LmNvbnN0cnVjdG9yICE9IENsYXNzKSB7XG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwidW5rbm93IENsYXNzOlwiICsgQ2xhc3MpO1xuICAgIH1cbiAgICBwdC5jb25zdHJ1Y3RvciA9IENsYXNzO1xuICB9XG59XG52YXIgaHRtbG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xudmFyIE5vZGVUeXBlID0ge307XG52YXIgRUxFTUVOVF9OT0RFID0gTm9kZVR5cGUuRUxFTUVOVF9OT0RFID0gMTtcbnZhciBBVFRSSUJVVEVfTk9ERSA9IE5vZGVUeXBlLkFUVFJJQlVURV9OT0RFID0gMjtcbnZhciBURVhUX05PREUgPSBOb2RlVHlwZS5URVhUX05PREUgPSAzO1xudmFyIENEQVRBX1NFQ1RJT05fTk9ERSA9IE5vZGVUeXBlLkNEQVRBX1NFQ1RJT05fTk9ERSA9IDQ7XG52YXIgRU5USVRZX1JFRkVSRU5DRV9OT0RFID0gTm9kZVR5cGUuRU5USVRZX1JFRkVSRU5DRV9OT0RFID0gNTtcbnZhciBFTlRJVFlfTk9ERSA9IE5vZGVUeXBlLkVOVElUWV9OT0RFID0gNjtcbnZhciBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREUgPSBOb2RlVHlwZS5QUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREUgPSA3O1xudmFyIENPTU1FTlRfTk9ERSA9IE5vZGVUeXBlLkNPTU1FTlRfTk9ERSA9IDg7XG52YXIgRE9DVU1FTlRfTk9ERSA9IE5vZGVUeXBlLkRPQ1VNRU5UX05PREUgPSA5O1xudmFyIERPQ1VNRU5UX1RZUEVfTk9ERSA9IE5vZGVUeXBlLkRPQ1VNRU5UX1RZUEVfTk9ERSA9IDEwO1xudmFyIERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgPSBOb2RlVHlwZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFID0gMTE7XG52YXIgTk9UQVRJT05fTk9ERSA9IE5vZGVUeXBlLk5PVEFUSU9OX05PREUgPSAxMjtcbnZhciBFeGNlcHRpb25Db2RlID0ge307XG52YXIgRXhjZXB0aW9uTWVzc2FnZSA9IHt9O1xudmFyIElOREVYX1NJWkVfRVJSID0gRXhjZXB0aW9uQ29kZS5JTkRFWF9TSVpFX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzFdID0gXCJJbmRleCBzaXplIGVycm9yXCIsIDEpO1xudmFyIERPTVNUUklOR19TSVpFX0VSUiA9IEV4Y2VwdGlvbkNvZGUuRE9NU1RSSU5HX1NJWkVfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbMl0gPSBcIkRPTVN0cmluZyBzaXplIGVycm9yXCIsIDIpO1xudmFyIEhJRVJBUkNIWV9SRVFVRVNUX0VSUiA9IEV4Y2VwdGlvbkNvZGUuSElFUkFSQ0hZX1JFUVVFU1RfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbM10gPSBcIkhpZXJhcmNoeSByZXF1ZXN0IGVycm9yXCIsIDMpO1xudmFyIFdST05HX0RPQ1VNRU5UX0VSUiA9IEV4Y2VwdGlvbkNvZGUuV1JPTkdfRE9DVU1FTlRfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbNF0gPSBcIldyb25nIGRvY3VtZW50XCIsIDQpO1xudmFyIElOVkFMSURfQ0hBUkFDVEVSX0VSUiA9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9DSEFSQUNURVJfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbNV0gPSBcIkludmFsaWQgY2hhcmFjdGVyXCIsIDUpO1xudmFyIE5PX0RBVEFfQUxMT1dFRF9FUlIgPSBFeGNlcHRpb25Db2RlLk5PX0RBVEFfQUxMT1dFRF9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVs2XSA9IFwiTm8gZGF0YSBhbGxvd2VkXCIsIDYpO1xudmFyIE5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUiA9IEV4Y2VwdGlvbkNvZGUuTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbN10gPSBcIk5vIG1vZGlmaWNhdGlvbiBhbGxvd2VkXCIsIDcpO1xudmFyIE5PVF9GT1VORF9FUlIgPSBFeGNlcHRpb25Db2RlLk5PVF9GT1VORF9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVs4XSA9IFwiTm90IGZvdW5kXCIsIDgpO1xudmFyIE5PVF9TVVBQT1JURURfRVJSID0gRXhjZXB0aW9uQ29kZS5OT1RfU1VQUE9SVEVEX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzldID0gXCJOb3Qgc3VwcG9ydGVkXCIsIDkpO1xudmFyIElOVVNFX0FUVFJJQlVURV9FUlIgPSBFeGNlcHRpb25Db2RlLklOVVNFX0FUVFJJQlVURV9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxMF0gPSBcIkF0dHJpYnV0ZSBpbiB1c2VcIiwgMTApO1xudmFyIElOVkFMSURfU1RBVEVfRVJSID0gRXhjZXB0aW9uQ29kZS5JTlZBTElEX1NUQVRFX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzExXSA9IFwiSW52YWxpZCBzdGF0ZVwiLCAxMSk7XG52YXIgU1lOVEFYX0VSUiA9IEV4Y2VwdGlvbkNvZGUuU1lOVEFYX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzEyXSA9IFwiU3ludGF4IGVycm9yXCIsIDEyKTtcbnZhciBJTlZBTElEX01PRElGSUNBVElPTl9FUlIgPSBFeGNlcHRpb25Db2RlLklOVkFMSURfTU9ESUZJQ0FUSU9OX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzEzXSA9IFwiSW52YWxpZCBtb2RpZmljYXRpb25cIiwgMTMpO1xudmFyIE5BTUVTUEFDRV9FUlIgPSBFeGNlcHRpb25Db2RlLk5BTUVTUEFDRV9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxNF0gPSBcIkludmFsaWQgbmFtZXNwYWNlXCIsIDE0KTtcbnZhciBJTlZBTElEX0FDQ0VTU19FUlIgPSBFeGNlcHRpb25Db2RlLklOVkFMSURfQUNDRVNTX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzE1XSA9IFwiSW52YWxpZCBhY2Nlc3NcIiwgMTUpO1xuZnVuY3Rpb24gRE9NRXhjZXB0aW9uKGNvZGUsIG1lc3NhZ2UpIHtcbiAgaWYgKG1lc3NhZ2UgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIHZhciBlcnJvciA9IG1lc3NhZ2U7XG4gIH0gZWxzZSB7XG4gICAgZXJyb3IgPSB0aGlzO1xuICAgIEVycm9yLmNhbGwodGhpcywgRXhjZXB0aW9uTWVzc2FnZVtjb2RlXSk7XG4gICAgdGhpcy5tZXNzYWdlID0gRXhjZXB0aW9uTWVzc2FnZVtjb2RlXTtcbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIERPTUV4Y2VwdGlvbik7XG4gIH1cbiAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIGlmIChtZXNzYWdlKSB0aGlzLm1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UgKyBcIjogXCIgKyBtZXNzYWdlO1xuICByZXR1cm4gZXJyb3I7XG59XG47XG5ET01FeGNlcHRpb24ucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuY29weShFeGNlcHRpb25Db2RlLCBET01FeGNlcHRpb24pO1xuZnVuY3Rpb24gTm9kZUxpc3QoKSB7fVxuO1xuTm9kZUxpc3QucHJvdG90eXBlID0ge1xuICBsZW5ndGg6IDAsXG4gIGl0ZW06IGZ1bmN0aW9uIGl0ZW0oaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpc1tpbmRleF0gfHwgbnVsbDtcbiAgfSxcbiAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKGlzSFRNTCwgbm9kZUZpbHRlcikge1xuICAgIGZvciAodmFyIGJ1ZiA9IFtdLCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlcmlhbGl6ZVRvU3RyaW5nKHRoaXNbaV0sIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zi5qb2luKCcnKTtcbiAgfVxufTtcbmZ1bmN0aW9uIExpdmVOb2RlTGlzdChub2RlLCByZWZyZXNoKSB7XG4gIHRoaXMuX25vZGUgPSBub2RlO1xuICB0aGlzLl9yZWZyZXNoID0gcmVmcmVzaDtcbiAgX3VwZGF0ZUxpdmVMaXN0KHRoaXMpO1xufVxuZnVuY3Rpb24gX3VwZGF0ZUxpdmVMaXN0KGxpc3QpIHtcbiAgdmFyIGluYyA9IGxpc3QuX25vZGUuX2luYyB8fCBsaXN0Ll9ub2RlLm93bmVyRG9jdW1lbnQuX2luYztcbiAgaWYgKGxpc3QuX2luYyAhPSBpbmMpIHtcbiAgICB2YXIgbHMgPSBsaXN0Ll9yZWZyZXNoKGxpc3QuX25vZGUpO1xuICAgIF9fc2V0X18obGlzdCwgJ2xlbmd0aCcsIGxzLmxlbmd0aCk7XG4gICAgY29weShscywgbGlzdCk7XG4gICAgbGlzdC5faW5jID0gaW5jO1xuICB9XG59XG5MaXZlTm9kZUxpc3QucHJvdG90eXBlLml0ZW0gPSBmdW5jdGlvbiAoaSkge1xuICBfdXBkYXRlTGl2ZUxpc3QodGhpcyk7XG4gIHJldHVybiB0aGlzW2ldO1xufTtcbl9leHRlbmRzKExpdmVOb2RlTGlzdCwgTm9kZUxpc3QpO1xuZnVuY3Rpb24gTmFtZWROb2RlTWFwKCkge31cbjtcbmZ1bmN0aW9uIF9maW5kTm9kZUluZGV4KGxpc3QsIG5vZGUpIHtcbiAgdmFyIGkgPSBsaXN0Lmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIGlmIChsaXN0W2ldID09PSBub2RlKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIF9hZGROYW1lZE5vZGUoZWwsIGxpc3QsIG5ld0F0dHIsIG9sZEF0dHIpIHtcbiAgaWYgKG9sZEF0dHIpIHtcbiAgICBsaXN0W19maW5kTm9kZUluZGV4KGxpc3QsIG9sZEF0dHIpXSA9IG5ld0F0dHI7XG4gIH0gZWxzZSB7XG4gICAgbGlzdFtsaXN0Lmxlbmd0aCsrXSA9IG5ld0F0dHI7XG4gIH1cbiAgaWYgKGVsKSB7XG4gICAgbmV3QXR0ci5vd25lckVsZW1lbnQgPSBlbDtcbiAgICB2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcbiAgICBpZiAoZG9jKSB7XG4gICAgICBvbGRBdHRyICYmIF9vblJlbW92ZUF0dHJpYnV0ZShkb2MsIGVsLCBvbGRBdHRyKTtcbiAgICAgIF9vbkFkZEF0dHJpYnV0ZShkb2MsIGVsLCBuZXdBdHRyKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIF9yZW1vdmVOYW1lZE5vZGUoZWwsIGxpc3QsIGF0dHIpIHtcbiAgdmFyIGkgPSBfZmluZE5vZGVJbmRleChsaXN0LCBhdHRyKTtcbiAgaWYgKGkgPj0gMCkge1xuICAgIHZhciBsYXN0SW5kZXggPSBsaXN0Lmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKGkgPCBsYXN0SW5kZXgpIHtcbiAgICAgIGxpc3RbaV0gPSBsaXN0WysraV07XG4gICAgfVxuICAgIGxpc3QubGVuZ3RoID0gbGFzdEluZGV4O1xuICAgIGlmIChlbCkge1xuICAgICAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG4gICAgICBpZiAoZG9jKSB7XG4gICAgICAgIF9vblJlbW92ZUF0dHJpYnV0ZShkb2MsIGVsLCBhdHRyKTtcbiAgICAgICAgYXR0ci5vd25lckVsZW1lbnQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBET01FeGNlcHRpb24oTk9UX0ZPVU5EX0VSUiwgbmV3IEVycm9yKGVsLnRhZ05hbWUgKyAnQCcgKyBhdHRyKSk7XG4gIH1cbn1cbk5hbWVkTm9kZU1hcC5wcm90b3R5cGUgPSB7XG4gIGxlbmd0aDogMCxcbiAgaXRlbTogTm9kZUxpc3QucHJvdG90eXBlLml0ZW0sXG4gIGdldE5hbWVkSXRlbTogZnVuY3Rpb24gZ2V0TmFtZWRJdGVtKGtleSkge1xuICAgIHZhciBpID0gdGhpcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIGF0dHIgPSB0aGlzW2ldO1xuICAgICAgaWYgKGF0dHIubm9kZU5hbWUgPT0ga2V5KSB7XG4gICAgICAgIHJldHVybiBhdHRyO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2V0TmFtZWRJdGVtOiBmdW5jdGlvbiBzZXROYW1lZEl0ZW0oYXR0cikge1xuICAgIHZhciBlbCA9IGF0dHIub3duZXJFbGVtZW50O1xuICAgIGlmIChlbCAmJiBlbCAhPSB0aGlzLl9vd25lckVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oSU5VU0VfQVRUUklCVVRFX0VSUik7XG4gICAgfVxuICAgIHZhciBvbGRBdHRyID0gdGhpcy5nZXROYW1lZEl0ZW0oYXR0ci5ub2RlTmFtZSk7XG4gICAgX2FkZE5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsIHRoaXMsIGF0dHIsIG9sZEF0dHIpO1xuICAgIHJldHVybiBvbGRBdHRyO1xuICB9LFxuICBzZXROYW1lZEl0ZW1OUzogZnVuY3Rpb24gc2V0TmFtZWRJdGVtTlMoYXR0cikge1xuICAgIHZhciBlbCA9IGF0dHIub3duZXJFbGVtZW50LFxuICAgICAgb2xkQXR0cjtcbiAgICBpZiAoZWwgJiYgZWwgIT0gdGhpcy5fb3duZXJFbGVtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKElOVVNFX0FUVFJJQlVURV9FUlIpO1xuICAgIH1cbiAgICBvbGRBdHRyID0gdGhpcy5nZXROYW1lZEl0ZW1OUyhhdHRyLm5hbWVzcGFjZVVSSSwgYXR0ci5sb2NhbE5hbWUpO1xuICAgIF9hZGROYW1lZE5vZGUodGhpcy5fb3duZXJFbGVtZW50LCB0aGlzLCBhdHRyLCBvbGRBdHRyKTtcbiAgICByZXR1cm4gb2xkQXR0cjtcbiAgfSxcbiAgcmVtb3ZlTmFtZWRJdGVtOiBmdW5jdGlvbiByZW1vdmVOYW1lZEl0ZW0oa2V5KSB7XG4gICAgdmFyIGF0dHIgPSB0aGlzLmdldE5hbWVkSXRlbShrZXkpO1xuICAgIF9yZW1vdmVOYW1lZE5vZGUodGhpcy5fb3duZXJFbGVtZW50LCB0aGlzLCBhdHRyKTtcbiAgICByZXR1cm4gYXR0cjtcbiAgfSxcbiAgcmVtb3ZlTmFtZWRJdGVtTlM6IGZ1bmN0aW9uIHJlbW92ZU5hbWVkSXRlbU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgdmFyIGF0dHIgPSB0aGlzLmdldE5hbWVkSXRlbU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKTtcbiAgICBfcmVtb3ZlTmFtZWROb2RlKHRoaXMuX293bmVyRWxlbWVudCwgdGhpcywgYXR0cik7XG4gICAgcmV0dXJuIGF0dHI7XG4gIH0sXG4gIGdldE5hbWVkSXRlbU5TOiBmdW5jdGlvbiBnZXROYW1lZEl0ZW1OUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuICAgIHZhciBpID0gdGhpcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIG5vZGUgPSB0aGlzW2ldO1xuICAgICAgaWYgKG5vZGUubG9jYWxOYW1lID09IGxvY2FsTmFtZSAmJiBub2RlLm5hbWVzcGFjZVVSSSA9PSBuYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuZnVuY3Rpb24gRE9NSW1wbGVtZW50YXRpb24oZmVhdHVyZXMpIHtcbiAgdGhpcy5fZmVhdHVyZXMgPSB7fTtcbiAgaWYgKGZlYXR1cmVzKSB7XG4gICAgZm9yICh2YXIgZmVhdHVyZSBpbiBmZWF0dXJlcykge1xuICAgICAgdGhpcy5fZmVhdHVyZXMgPSBmZWF0dXJlc1tmZWF0dXJlXTtcbiAgICB9XG4gIH1cbn1cbjtcbkRPTUltcGxlbWVudGF0aW9uLnByb3RvdHlwZSA9IHtcbiAgaGFzRmVhdHVyZTogZnVuY3Rpb24gaGFzRmVhdHVyZShmZWF0dXJlLCB2ZXJzaW9uKSB7XG4gICAgdmFyIHZlcnNpb25zID0gdGhpcy5fZmVhdHVyZXNbZmVhdHVyZS50b0xvd2VyQ2FzZSgpXTtcbiAgICBpZiAodmVyc2lvbnMgJiYgKCF2ZXJzaW9uIHx8IHZlcnNpb24gaW4gdmVyc2lvbnMpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlRG9jdW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50KG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSwgZG9jdHlwZSkge1xuICAgIHZhciBkb2MgPSBuZXcgRG9jdW1lbnQoKTtcbiAgICBkb2MuaW1wbGVtZW50YXRpb24gPSB0aGlzO1xuICAgIGRvYy5jaGlsZE5vZGVzID0gbmV3IE5vZGVMaXN0KCk7XG4gICAgZG9jLmRvY3R5cGUgPSBkb2N0eXBlO1xuICAgIGlmIChkb2N0eXBlKSB7XG4gICAgICBkb2MuYXBwZW5kQ2hpbGQoZG9jdHlwZSk7XG4gICAgfVxuICAgIGlmIChxdWFsaWZpZWROYW1lKSB7XG4gICAgICB2YXIgcm9vdCA9IGRvYy5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKTtcbiAgICAgIGRvYy5hcHBlbmRDaGlsZChyb290KTtcbiAgICB9XG4gICAgcmV0dXJuIGRvYztcbiAgfSxcbiAgY3JlYXRlRG9jdW1lbnRUeXBlOiBmdW5jdGlvbiBjcmVhdGVEb2N1bWVudFR5cGUocXVhbGlmaWVkTmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKSB7XG4gICAgdmFyIG5vZGUgPSBuZXcgRG9jdW1lbnRUeXBlKCk7XG4gICAgbm9kZS5uYW1lID0gcXVhbGlmaWVkTmFtZTtcbiAgICBub2RlLm5vZGVOYW1lID0gcXVhbGlmaWVkTmFtZTtcbiAgICBub2RlLnB1YmxpY0lkID0gcHVibGljSWQ7XG4gICAgbm9kZS5zeXN0ZW1JZCA9IHN5c3RlbUlkO1xuICAgIHJldHVybiBub2RlO1xuICB9XG59O1xuZnVuY3Rpb24gTm9kZSgpIHt9XG47XG5Ob2RlLnByb3RvdHlwZSA9IHtcbiAgZmlyc3RDaGlsZDogbnVsbCxcbiAgbGFzdENoaWxkOiBudWxsLFxuICBwcmV2aW91c1NpYmxpbmc6IG51bGwsXG4gIG5leHRTaWJsaW5nOiBudWxsLFxuICBhdHRyaWJ1dGVzOiBudWxsLFxuICBwYXJlbnROb2RlOiBudWxsLFxuICBjaGlsZE5vZGVzOiBudWxsLFxuICBvd25lckRvY3VtZW50OiBudWxsLFxuICBub2RlVmFsdWU6IG51bGwsXG4gIG5hbWVzcGFjZVVSSTogbnVsbCxcbiAgcHJlZml4OiBudWxsLFxuICBsb2NhbE5hbWU6IG51bGwsXG4gIGluc2VydEJlZm9yZTogZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCByZWZDaGlsZCkge1xuICAgIHJldHVybiBfaW5zZXJ0QmVmb3JlKHRoaXMsIG5ld0NoaWxkLCByZWZDaGlsZCk7XG4gIH0sXG4gIHJlcGxhY2VDaGlsZDogZnVuY3Rpb24gcmVwbGFjZUNoaWxkKG5ld0NoaWxkLCBvbGRDaGlsZCkge1xuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCBvbGRDaGlsZCk7XG4gICAgaWYgKG9sZENoaWxkKSB7XG4gICAgICB0aGlzLnJlbW92ZUNoaWxkKG9sZENoaWxkKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZUNoaWxkOiBmdW5jdGlvbiByZW1vdmVDaGlsZChvbGRDaGlsZCkge1xuICAgIHJldHVybiBfcmVtb3ZlQ2hpbGQodGhpcywgb2xkQ2hpbGQpO1xuICB9LFxuICBhcHBlbmRDaGlsZDogZnVuY3Rpb24gYXBwZW5kQ2hpbGQobmV3Q2hpbGQpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsIG51bGwpO1xuICB9LFxuICBoYXNDaGlsZE5vZGVzOiBmdW5jdGlvbiBoYXNDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0Q2hpbGQgIT0gbnVsbDtcbiAgfSxcbiAgY2xvbmVOb2RlOiBmdW5jdGlvbiBjbG9uZU5vZGUoZGVlcCkge1xuICAgIHJldHVybiBfY2xvbmVOb2RlKHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLCB0aGlzLCBkZWVwKTtcbiAgfSxcbiAgbm9ybWFsaXplOiBmdW5jdGlvbiBub3JtYWxpemUoKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5maXJzdENoaWxkO1xuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgdmFyIG5leHQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIGlmIChuZXh0ICYmIG5leHQubm9kZVR5cGUgPT0gVEVYVF9OT0RFICYmIGNoaWxkLm5vZGVUeXBlID09IFRFWFRfTk9ERSkge1xuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKG5leHQpO1xuICAgICAgICBjaGlsZC5hcHBlbmREYXRhKG5leHQuZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC5ub3JtYWxpemUoKTtcbiAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgaXNTdXBwb3J0ZWQ6IGZ1bmN0aW9uIGlzU3VwcG9ydGVkKGZlYXR1cmUsIHZlcnNpb24pIHtcbiAgICByZXR1cm4gdGhpcy5vd25lckRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoZmVhdHVyZSwgdmVyc2lvbik7XG4gIH0sXG4gIGhhc0F0dHJpYnV0ZXM6IGZ1bmN0aW9uIGhhc0F0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcy5sZW5ndGggPiAwO1xuICB9LFxuICBsb29rdXBQcmVmaXg6IGZ1bmN0aW9uIGxvb2t1cFByZWZpeChuYW1lc3BhY2VVUkkpIHtcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgdmFyIG1hcCA9IGVsLl9uc01hcDtcbiAgICAgIGlmIChtYXApIHtcbiAgICAgICAgZm9yICh2YXIgbiBpbiBtYXApIHtcbiAgICAgICAgICBpZiAobWFwW25dID09IG5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbCA9IGVsLm5vZGVUeXBlID09IEFUVFJJQlVURV9OT0RFID8gZWwub3duZXJEb2N1bWVudCA6IGVsLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBsb29rdXBOYW1lc3BhY2VVUkk6IGZ1bmN0aW9uIGxvb2t1cE5hbWVzcGFjZVVSSShwcmVmaXgpIHtcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgdmFyIG1hcCA9IGVsLl9uc01hcDtcbiAgICAgIGlmIChtYXApIHtcbiAgICAgICAgaWYgKHByZWZpeCBpbiBtYXApIHtcbiAgICAgICAgICByZXR1cm4gbWFwW3ByZWZpeF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsID0gZWwubm9kZVR5cGUgPT0gQVRUUklCVVRFX05PREUgPyBlbC5vd25lckRvY3VtZW50IDogZWwucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIGlzRGVmYXVsdE5hbWVzcGFjZTogZnVuY3Rpb24gaXNEZWZhdWx0TmFtZXNwYWNlKG5hbWVzcGFjZVVSSSkge1xuICAgIHZhciBwcmVmaXggPSB0aGlzLmxvb2t1cFByZWZpeChuYW1lc3BhY2VVUkkpO1xuICAgIHJldHVybiBwcmVmaXggPT0gbnVsbDtcbiAgfVxufTtcbmZ1bmN0aW9uIF94bWxFbmNvZGVyKGMpIHtcbiAgcmV0dXJuIGMgPT0gJzwnICYmICcmbHQ7JyB8fCBjID09ICc+JyAmJiAnJmd0OycgfHwgYyA9PSAnJicgJiYgJyZhbXA7JyB8fCBjID09ICdcIicgJiYgJyZxdW90OycgfHwgJyYjJyArIGMuY2hhckNvZGVBdCgpICsgJzsnO1xufVxuY29weShOb2RlVHlwZSwgTm9kZSk7XG5jb3B5KE5vZGVUeXBlLCBOb2RlLnByb3RvdHlwZSk7XG5mdW5jdGlvbiBfdmlzaXROb2RlKG5vZGUsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayhub2RlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChub2RlID0gbm9kZS5maXJzdENoaWxkKSB7XG4gICAgZG8ge1xuICAgICAgaWYgKF92aXNpdE5vZGUobm9kZSwgY2FsbGJhY2spKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKG5vZGUgPSBub2RlLm5leHRTaWJsaW5nKTtcbiAgfVxufVxuZnVuY3Rpb24gRG9jdW1lbnQoKSB7fVxuZnVuY3Rpb24gX29uQWRkQXR0cmlidXRlKGRvYywgZWwsIG5ld0F0dHIpIHtcbiAgZG9jICYmIGRvYy5faW5jKys7XG4gIHZhciBucyA9IG5ld0F0dHIubmFtZXNwYWNlVVJJO1xuICBpZiAobnMgPT0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJykge1xuICAgIGVsLl9uc01hcFtuZXdBdHRyLnByZWZpeCA/IG5ld0F0dHIubG9jYWxOYW1lIDogJyddID0gbmV3QXR0ci52YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gX29uUmVtb3ZlQXR0cmlidXRlKGRvYywgZWwsIG5ld0F0dHIsIHJlbW92ZSkge1xuICBkb2MgJiYgZG9jLl9pbmMrKztcbiAgdmFyIG5zID0gbmV3QXR0ci5uYW1lc3BhY2VVUkk7XG4gIGlmIChucyA9PSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nKSB7XG4gICAgZGVsZXRlIGVsLl9uc01hcFtuZXdBdHRyLnByZWZpeCA/IG5ld0F0dHIubG9jYWxOYW1lIDogJyddO1xuICB9XG59XG5mdW5jdGlvbiBfb25VcGRhdGVDaGlsZChkb2MsIGVsLCBuZXdDaGlsZCkge1xuICBpZiAoZG9jICYmIGRvYy5faW5jKSB7XG4gICAgZG9jLl9pbmMrKztcbiAgICB2YXIgY3MgPSBlbC5jaGlsZE5vZGVzO1xuICAgIGlmIChuZXdDaGlsZCkge1xuICAgICAgY3NbY3MubGVuZ3RoKytdID0gbmV3Q2hpbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjaGlsZCA9IGVsLmZpcnN0Q2hpbGQ7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgY3NbaSsrXSA9IGNoaWxkO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgICAgY3MubGVuZ3RoID0gaTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIF9yZW1vdmVDaGlsZChwYXJlbnROb2RlLCBjaGlsZCkge1xuICB2YXIgcHJldmlvdXMgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gIHZhciBuZXh0ID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gIGlmIChwcmV2aW91cykge1xuICAgIHByZXZpb3VzLm5leHRTaWJsaW5nID0gbmV4dDtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnROb2RlLmZpcnN0Q2hpbGQgPSBuZXh0O1xuICB9XG4gIGlmIChuZXh0KSB7XG4gICAgbmV4dC5wcmV2aW91c1NpYmxpbmcgPSBwcmV2aW91cztcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnROb2RlLmxhc3RDaGlsZCA9IHByZXZpb3VzO1xuICB9XG4gIF9vblVwZGF0ZUNoaWxkKHBhcmVudE5vZGUub3duZXJEb2N1bWVudCwgcGFyZW50Tm9kZSk7XG4gIHJldHVybiBjaGlsZDtcbn1cbmZ1bmN0aW9uIF9pbnNlcnRCZWZvcmUocGFyZW50Tm9kZSwgbmV3Q2hpbGQsIG5leHRDaGlsZCkge1xuICB2YXIgY3AgPSBuZXdDaGlsZC5wYXJlbnROb2RlO1xuICBpZiAoY3ApIHtcbiAgICBjcC5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XG4gIH1cbiAgaWYgKG5ld0NoaWxkLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgdmFyIG5ld0ZpcnN0ID0gbmV3Q2hpbGQuZmlyc3RDaGlsZDtcbiAgICBpZiAobmV3Rmlyc3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdCA9IG5ld0NoaWxkLmxhc3RDaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBuZXdGaXJzdCA9IG5ld0xhc3QgPSBuZXdDaGlsZDtcbiAgfVxuICB2YXIgcHJlID0gbmV4dENoaWxkID8gbmV4dENoaWxkLnByZXZpb3VzU2libGluZyA6IHBhcmVudE5vZGUubGFzdENoaWxkO1xuICBuZXdGaXJzdC5wcmV2aW91c1NpYmxpbmcgPSBwcmU7XG4gIG5ld0xhc3QubmV4dFNpYmxpbmcgPSBuZXh0Q2hpbGQ7XG4gIGlmIChwcmUpIHtcbiAgICBwcmUubmV4dFNpYmxpbmcgPSBuZXdGaXJzdDtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnROb2RlLmZpcnN0Q2hpbGQgPSBuZXdGaXJzdDtcbiAgfVxuICBpZiAobmV4dENoaWxkID09IG51bGwpIHtcbiAgICBwYXJlbnROb2RlLmxhc3RDaGlsZCA9IG5ld0xhc3Q7XG4gIH0gZWxzZSB7XG4gICAgbmV4dENoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0xhc3Q7XG4gIH1cbiAgZG8ge1xuICAgIG5ld0ZpcnN0LnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9IHdoaWxlIChuZXdGaXJzdCAhPT0gbmV3TGFzdCAmJiAobmV3Rmlyc3QgPSBuZXdGaXJzdC5uZXh0U2libGluZykpO1xuICBfb25VcGRhdGVDaGlsZChwYXJlbnROb2RlLm93bmVyRG9jdW1lbnQgfHwgcGFyZW50Tm9kZSwgcGFyZW50Tm9kZSk7XG4gIGlmIChuZXdDaGlsZC5ub2RlVHlwZSA9PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgbmV3Q2hpbGQuZmlyc3RDaGlsZCA9IG5ld0NoaWxkLmxhc3RDaGlsZCA9IG51bGw7XG4gIH1cbiAgcmV0dXJuIG5ld0NoaWxkO1xufVxuZnVuY3Rpb24gX2FwcGVuZFNpbmdsZUNoaWxkKHBhcmVudE5vZGUsIG5ld0NoaWxkKSB7XG4gIHZhciBjcCA9IG5ld0NoaWxkLnBhcmVudE5vZGU7XG4gIGlmIChjcCkge1xuICAgIHZhciBwcmUgPSBwYXJlbnROb2RlLmxhc3RDaGlsZDtcbiAgICBjcC5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XG4gICAgdmFyIHByZSA9IHBhcmVudE5vZGUubGFzdENoaWxkO1xuICB9XG4gIHZhciBwcmUgPSBwYXJlbnROb2RlLmxhc3RDaGlsZDtcbiAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHByZTtcbiAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSBudWxsO1xuICBpZiAocHJlKSB7XG4gICAgcHJlLm5leHRTaWJsaW5nID0gbmV3Q2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50Tm9kZS5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG4gIH1cbiAgcGFyZW50Tm9kZS5sYXN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgX29uVXBkYXRlQ2hpbGQocGFyZW50Tm9kZS5vd25lckRvY3VtZW50LCBwYXJlbnROb2RlLCBuZXdDaGlsZCk7XG4gIHJldHVybiBuZXdDaGlsZDtcbn1cbkRvY3VtZW50LnByb3RvdHlwZSA9IHtcbiAgbm9kZU5hbWU6ICcjZG9jdW1lbnQnLFxuICBub2RlVHlwZTogRE9DVU1FTlRfTk9ERSxcbiAgZG9jdHlwZTogbnVsbCxcbiAgZG9jdW1lbnRFbGVtZW50OiBudWxsLFxuICBfaW5jOiAxLFxuICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIGluc2VydEJlZm9yZShuZXdDaGlsZCwgcmVmQ2hpbGQpIHtcbiAgICBpZiAobmV3Q2hpbGQubm9kZVR5cGUgPT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgdmFyIGNoaWxkID0gbmV3Q2hpbGQuZmlyc3RDaGlsZDtcbiAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICB2YXIgbmV4dCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB0aGlzLmluc2VydEJlZm9yZShjaGlsZCwgcmVmQ2hpbGQpO1xuICAgICAgICBjaGlsZCA9IG5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmRvY3VtZW50RWxlbWVudCA9PSBudWxsICYmIG5ld0NoaWxkLm5vZGVUeXBlID09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgdGhpcy5kb2N1bWVudEVsZW1lbnQgPSBuZXdDaGlsZDtcbiAgICB9XG4gICAgcmV0dXJuIF9pbnNlcnRCZWZvcmUodGhpcywgbmV3Q2hpbGQsIHJlZkNoaWxkKSwgbmV3Q2hpbGQub3duZXJEb2N1bWVudCA9IHRoaXMsIG5ld0NoaWxkO1xuICB9LFxuICByZW1vdmVDaGlsZDogZnVuY3Rpb24gcmVtb3ZlQ2hpbGQob2xkQ2hpbGQpIHtcbiAgICBpZiAodGhpcy5kb2N1bWVudEVsZW1lbnQgPT0gb2xkQ2hpbGQpIHtcbiAgICAgIHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIF9yZW1vdmVDaGlsZCh0aGlzLCBvbGRDaGlsZCk7XG4gIH0sXG4gIGltcG9ydE5vZGU6IGZ1bmN0aW9uIGltcG9ydE5vZGUoaW1wb3J0ZWROb2RlLCBkZWVwKSB7XG4gICAgcmV0dXJuIF9pbXBvcnROb2RlKHRoaXMsIGltcG9ydGVkTm9kZSwgZGVlcCk7XG4gIH0sXG4gIGdldEVsZW1lbnRCeUlkOiBmdW5jdGlvbiBnZXRFbGVtZW50QnlJZChpZCkge1xuICAgIHZhciBydHYgPSBudWxsO1xuICAgIF92aXNpdE5vZGUodGhpcy5kb2N1bWVudEVsZW1lbnQsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpID09IGlkKSB7XG4gICAgICAgICAgcnR2ID0gbm9kZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBydHY7XG4gIH0sXG4gIGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSkge1xuICAgIHZhciBub2RlID0gbmV3IEVsZW1lbnQoKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUubm9kZU5hbWUgPSB0YWdOYW1lO1xuICAgIG5vZGUudGFnTmFtZSA9IHRhZ05hbWU7XG4gICAgbm9kZS5jaGlsZE5vZGVzID0gbmV3IE5vZGVMaXN0KCk7XG4gICAgdmFyIGF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzID0gbmV3IE5hbWVkTm9kZU1hcCgpO1xuICAgIGF0dHJzLl9vd25lckVsZW1lbnQgPSBub2RlO1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICBjcmVhdGVEb2N1bWVudEZyYWdtZW50OiBmdW5jdGlvbiBjcmVhdGVEb2N1bWVudEZyYWdtZW50KCkge1xuICAgIHZhciBub2RlID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICBjcmVhdGVUZXh0Tm9kZTogZnVuY3Rpb24gY3JlYXRlVGV4dE5vZGUoZGF0YSkge1xuICAgIHZhciBub2RlID0gbmV3IFRleHQoKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUuYXBwZW5kRGF0YShkYXRhKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlQ29tbWVudDogZnVuY3Rpb24gY3JlYXRlQ29tbWVudChkYXRhKSB7XG4gICAgdmFyIG5vZGUgPSBuZXcgQ29tbWVudCgpO1xuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG4gICAgbm9kZS5hcHBlbmREYXRhKGRhdGEpO1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICBjcmVhdGVDREFUQVNlY3Rpb246IGZ1bmN0aW9uIGNyZWF0ZUNEQVRBU2VjdGlvbihkYXRhKSB7XG4gICAgdmFyIG5vZGUgPSBuZXcgQ0RBVEFTZWN0aW9uKCk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLmFwcGVuZERhdGEoZGF0YSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIGNyZWF0ZVByb2Nlc3NpbmdJbnN0cnVjdGlvbjogZnVuY3Rpb24gY3JlYXRlUHJvY2Vzc2luZ0luc3RydWN0aW9uKHRhcmdldCwgZGF0YSkge1xuICAgIHZhciBub2RlID0gbmV3IFByb2Nlc3NpbmdJbnN0cnVjdGlvbigpO1xuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG4gICAgbm9kZS50YWdOYW1lID0gbm9kZS50YXJnZXQgPSB0YXJnZXQ7XG4gICAgbm9kZS5ub2RlVmFsdWUgPSBub2RlLmRhdGEgPSBkYXRhO1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICBjcmVhdGVBdHRyaWJ1dGU6IGZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZShuYW1lKSB7XG4gICAgdmFyIG5vZGUgPSBuZXcgQXR0cigpO1xuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG4gICAgbm9kZS5uYW1lID0gbmFtZTtcbiAgICBub2RlLm5vZGVOYW1lID0gbmFtZTtcbiAgICBub2RlLmxvY2FsTmFtZSA9IG5hbWU7XG4gICAgbm9kZS5zcGVjaWZpZWQgPSB0cnVlO1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICBjcmVhdGVFbnRpdHlSZWZlcmVuY2U6IGZ1bmN0aW9uIGNyZWF0ZUVudGl0eVJlZmVyZW5jZShuYW1lKSB7XG4gICAgdmFyIG5vZGUgPSBuZXcgRW50aXR5UmVmZXJlbmNlKCk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLm5vZGVOYW1lID0gbmFtZTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlRWxlbWVudE5TOiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKSB7XG4gICAgdmFyIG5vZGUgPSBuZXcgRWxlbWVudCgpO1xuICAgIHZhciBwbCA9IHF1YWxpZmllZE5hbWUuc3BsaXQoJzonKTtcbiAgICB2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXMgPSBuZXcgTmFtZWROb2RlTWFwKCk7XG4gICAgbm9kZS5jaGlsZE5vZGVzID0gbmV3IE5vZGVMaXN0KCk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLm5vZGVOYW1lID0gcXVhbGlmaWVkTmFtZTtcbiAgICBub2RlLnRhZ05hbWUgPSBxdWFsaWZpZWROYW1lO1xuICAgIG5vZGUubmFtZXNwYWNlVVJJID0gbmFtZXNwYWNlVVJJO1xuICAgIGlmIChwbC5sZW5ndGggPT0gMikge1xuICAgICAgbm9kZS5wcmVmaXggPSBwbFswXTtcbiAgICAgIG5vZGUubG9jYWxOYW1lID0gcGxbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUubG9jYWxOYW1lID0gcXVhbGlmaWVkTmFtZTtcbiAgICB9XG4gICAgYXR0cnMuX293bmVyRWxlbWVudCA9IG5vZGU7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIGNyZWF0ZUF0dHJpYnV0ZU5TOiBmdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBBdHRyKCk7XG4gICAgdmFyIHBsID0gcXVhbGlmaWVkTmFtZS5zcGxpdCgnOicpO1xuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG4gICAgbm9kZS5ub2RlTmFtZSA9IHF1YWxpZmllZE5hbWU7XG4gICAgbm9kZS5uYW1lID0gcXVhbGlmaWVkTmFtZTtcbiAgICBub2RlLm5hbWVzcGFjZVVSSSA9IG5hbWVzcGFjZVVSSTtcbiAgICBub2RlLnNwZWNpZmllZCA9IHRydWU7XG4gICAgaWYgKHBsLmxlbmd0aCA9PSAyKSB7XG4gICAgICBub2RlLnByZWZpeCA9IHBsWzBdO1xuICAgICAgbm9kZS5sb2NhbE5hbWUgPSBwbFsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5sb2NhbE5hbWUgPSBxdWFsaWZpZWROYW1lO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufTtcbl9leHRlbmRzKERvY3VtZW50LCBOb2RlKTtcbmZ1bmN0aW9uIEVsZW1lbnQoKSB7XG4gIHRoaXMuX25zTWFwID0ge307XG59XG47XG5FbGVtZW50LnByb3RvdHlwZSA9IHtcbiAgbm9kZVR5cGU6IEVMRU1FTlRfTk9ERSxcbiAgaGFzQXR0cmlidXRlOiBmdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZU5vZGUobmFtZSkgIT0gbnVsbDtcbiAgfSxcbiAgZ2V0QXR0cmlidXRlOiBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICAgIHZhciBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpO1xuICAgIHJldHVybiBhdHRyICYmIGF0dHIudmFsdWUgfHwgJyc7XG4gIH0sXG4gIGdldEF0dHJpYnV0ZU5vZGU6IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZU5vZGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKG5hbWUpO1xuICB9LFxuICBzZXRBdHRyaWJ1dGU6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBhdHRyID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICBhdHRyLnZhbHVlID0gYXR0ci5ub2RlVmFsdWUgPSBcIlwiICsgdmFsdWU7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpO1xuICB9LFxuICByZW1vdmVBdHRyaWJ1dGU6IGZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7XG4gICAgdmFyIGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGUobmFtZSk7XG4gICAgYXR0ciAmJiB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cik7XG4gIH0sXG4gIGFwcGVuZENoaWxkOiBmdW5jdGlvbiBhcHBlbmRDaGlsZChuZXdDaGlsZCkge1xuICAgIGlmIChuZXdDaGlsZC5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCBudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF9hcHBlbmRTaW5nbGVDaGlsZCh0aGlzLCBuZXdDaGlsZCk7XG4gICAgfVxuICB9LFxuICBzZXRBdHRyaWJ1dGVOb2RlOiBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVOb2RlKG5ld0F0dHIpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnNldE5hbWVkSXRlbShuZXdBdHRyKTtcbiAgfSxcbiAgc2V0QXR0cmlidXRlTm9kZU5TOiBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVOb2RlTlMobmV3QXR0cikge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuc2V0TmFtZWRJdGVtTlMobmV3QXR0cik7XG4gIH0sXG4gIHJlbW92ZUF0dHJpYnV0ZU5vZGU6IGZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZU5vZGUob2xkQXR0cikge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKG9sZEF0dHIubm9kZU5hbWUpO1xuICB9LFxuICByZW1vdmVBdHRyaWJ1dGVOUzogZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcbiAgICB2YXIgb2xkID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpO1xuICAgIG9sZCAmJiB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5vZGUob2xkKTtcbiAgfSxcbiAgaGFzQXR0cmlidXRlTlM6IGZ1bmN0aW9uIGhhc0F0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSAhPSBudWxsO1xuICB9LFxuICBnZXRBdHRyaWJ1dGVOUzogZnVuY3Rpb24gZ2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcbiAgICB2YXIgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKTtcbiAgICByZXR1cm4gYXR0ciAmJiBhdHRyLnZhbHVlIHx8ICcnO1xuICB9LFxuICBzZXRBdHRyaWJ1dGVOUzogZnVuY3Rpb24gc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCB2YWx1ZSkge1xuICAgIHZhciBhdHRyID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSk7XG4gICAgYXR0ci52YWx1ZSA9IGF0dHIubm9kZVZhbHVlID0gXCJcIiArIHZhbHVlO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlTm9kZShhdHRyKTtcbiAgfSxcbiAgZ2V0QXR0cmlidXRlTm9kZU5TOiBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKTtcbiAgfSxcbiAgZ2V0RWxlbWVudHNCeVRhZ05hbWU6IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpIHtcbiAgICByZXR1cm4gbmV3IExpdmVOb2RlTGlzdCh0aGlzLCBmdW5jdGlvbiAoYmFzZSkge1xuICAgICAgdmFyIGxzID0gW107XG4gICAgICBfdmlzaXROb2RlKGJhc2UsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlICE9PSBiYXNlICYmIG5vZGUubm9kZVR5cGUgPT0gRUxFTUVOVF9OT0RFICYmICh0YWdOYW1lID09PSAnKicgfHwgbm9kZS50YWdOYW1lID09IHRhZ05hbWUpKSB7XG4gICAgICAgICAgbHMucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbHM7XG4gICAgfSk7XG4gIH0sXG4gIGdldEVsZW1lbnRzQnlUYWdOYW1lTlM6IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlUYWdOYW1lTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcbiAgICByZXR1cm4gbmV3IExpdmVOb2RlTGlzdCh0aGlzLCBmdW5jdGlvbiAoYmFzZSkge1xuICAgICAgdmFyIGxzID0gW107XG4gICAgICBfdmlzaXROb2RlKGJhc2UsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlICE9PSBiYXNlICYmIG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSAmJiAobmFtZXNwYWNlVVJJID09PSAnKicgfHwgbm9kZS5uYW1lc3BhY2VVUkkgPT09IG5hbWVzcGFjZVVSSSkgJiYgKGxvY2FsTmFtZSA9PT0gJyonIHx8IG5vZGUubG9jYWxOYW1lID09IGxvY2FsTmFtZSkpIHtcbiAgICAgICAgICBscy5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBscztcbiAgICB9KTtcbiAgfVxufTtcbkRvY3VtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZSA9IEVsZW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRzQnlUYWdOYW1lO1xuRG9jdW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRzQnlUYWdOYW1lTlMgPSBFbGVtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZU5TO1xuX2V4dGVuZHMoRWxlbWVudCwgTm9kZSk7XG5mdW5jdGlvbiBBdHRyKCkge31cbjtcbkF0dHIucHJvdG90eXBlLm5vZGVUeXBlID0gQVRUUklCVVRFX05PREU7XG5fZXh0ZW5kcyhBdHRyLCBOb2RlKTtcbmZ1bmN0aW9uIENoYXJhY3RlckRhdGEoKSB7fVxuO1xuQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUgPSB7XG4gIGRhdGE6ICcnLFxuICBzdWJzdHJpbmdEYXRhOiBmdW5jdGlvbiBzdWJzdHJpbmdEYXRhKG9mZnNldCwgY291bnQpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnN1YnN0cmluZyhvZmZzZXQsIG9mZnNldCArIGNvdW50KTtcbiAgfSxcbiAgYXBwZW5kRGF0YTogZnVuY3Rpb24gYXBwZW5kRGF0YSh0ZXh0KSB7XG4gICAgdGV4dCA9IHRoaXMuZGF0YSArIHRleHQ7XG4gICAgdGhpcy5ub2RlVmFsdWUgPSB0aGlzLmRhdGEgPSB0ZXh0O1xuICAgIHRoaXMubGVuZ3RoID0gdGV4dC5sZW5ndGg7XG4gIH0sXG4gIGluc2VydERhdGE6IGZ1bmN0aW9uIGluc2VydERhdGEob2Zmc2V0LCB0ZXh0KSB7XG4gICAgdGhpcy5yZXBsYWNlRGF0YShvZmZzZXQsIDAsIHRleHQpO1xuICB9LFxuICBhcHBlbmRDaGlsZDogZnVuY3Rpb24gYXBwZW5kQ2hpbGQobmV3Q2hpbGQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoRXhjZXB0aW9uTWVzc2FnZVtISUVSQVJDSFlfUkVRVUVTVF9FUlJdKTtcbiAgfSxcbiAgZGVsZXRlRGF0YTogZnVuY3Rpb24gZGVsZXRlRGF0YShvZmZzZXQsIGNvdW50KSB7XG4gICAgdGhpcy5yZXBsYWNlRGF0YShvZmZzZXQsIGNvdW50LCBcIlwiKTtcbiAgfSxcbiAgcmVwbGFjZURhdGE6IGZ1bmN0aW9uIHJlcGxhY2VEYXRhKG9mZnNldCwgY291bnQsIHRleHQpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmRhdGEuc3Vic3RyaW5nKDAsIG9mZnNldCk7XG4gICAgdmFyIGVuZCA9IHRoaXMuZGF0YS5zdWJzdHJpbmcob2Zmc2V0ICsgY291bnQpO1xuICAgIHRleHQgPSBzdGFydCArIHRleHQgKyBlbmQ7XG4gICAgdGhpcy5ub2RlVmFsdWUgPSB0aGlzLmRhdGEgPSB0ZXh0O1xuICAgIHRoaXMubGVuZ3RoID0gdGV4dC5sZW5ndGg7XG4gIH1cbn07XG5fZXh0ZW5kcyhDaGFyYWN0ZXJEYXRhLCBOb2RlKTtcbmZ1bmN0aW9uIFRleHQoKSB7fVxuO1xuVGV4dC5wcm90b3R5cGUgPSB7XG4gIG5vZGVOYW1lOiBcIiN0ZXh0XCIsXG4gIG5vZGVUeXBlOiBURVhUX05PREUsXG4gIHNwbGl0VGV4dDogZnVuY3Rpb24gc3BsaXRUZXh0KG9mZnNldCkge1xuICAgIHZhciB0ZXh0ID0gdGhpcy5kYXRhO1xuICAgIHZhciBuZXdUZXh0ID0gdGV4dC5zdWJzdHJpbmcob2Zmc2V0KTtcbiAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgb2Zmc2V0KTtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLm5vZGVWYWx1ZSA9IHRleHQ7XG4gICAgdGhpcy5sZW5ndGggPSB0ZXh0Lmxlbmd0aDtcbiAgICB2YXIgbmV3Tm9kZSA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuZXdUZXh0KTtcbiAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfVxufTtcbl9leHRlbmRzKFRleHQsIENoYXJhY3RlckRhdGEpO1xuZnVuY3Rpb24gQ29tbWVudCgpIHt9XG47XG5Db21tZW50LnByb3RvdHlwZSA9IHtcbiAgbm9kZU5hbWU6IFwiI2NvbW1lbnRcIixcbiAgbm9kZVR5cGU6IENPTU1FTlRfTk9ERVxufTtcbl9leHRlbmRzKENvbW1lbnQsIENoYXJhY3RlckRhdGEpO1xuZnVuY3Rpb24gQ0RBVEFTZWN0aW9uKCkge31cbjtcbkNEQVRBU2VjdGlvbi5wcm90b3R5cGUgPSB7XG4gIG5vZGVOYW1lOiBcIiNjZGF0YS1zZWN0aW9uXCIsXG4gIG5vZGVUeXBlOiBDREFUQV9TRUNUSU9OX05PREVcbn07XG5fZXh0ZW5kcyhDREFUQVNlY3Rpb24sIENoYXJhY3RlckRhdGEpO1xuZnVuY3Rpb24gRG9jdW1lbnRUeXBlKCkge31cbjtcbkRvY3VtZW50VHlwZS5wcm90b3R5cGUubm9kZVR5cGUgPSBET0NVTUVOVF9UWVBFX05PREU7XG5fZXh0ZW5kcyhEb2N1bWVudFR5cGUsIE5vZGUpO1xuZnVuY3Rpb24gTm90YXRpb24oKSB7fVxuO1xuTm90YXRpb24ucHJvdG90eXBlLm5vZGVUeXBlID0gTk9UQVRJT05fTk9ERTtcbl9leHRlbmRzKE5vdGF0aW9uLCBOb2RlKTtcbmZ1bmN0aW9uIEVudGl0eSgpIHt9XG47XG5FbnRpdHkucHJvdG90eXBlLm5vZGVUeXBlID0gRU5USVRZX05PREU7XG5fZXh0ZW5kcyhFbnRpdHksIE5vZGUpO1xuZnVuY3Rpb24gRW50aXR5UmVmZXJlbmNlKCkge31cbjtcbkVudGl0eVJlZmVyZW5jZS5wcm90b3R5cGUubm9kZVR5cGUgPSBFTlRJVFlfUkVGRVJFTkNFX05PREU7XG5fZXh0ZW5kcyhFbnRpdHlSZWZlcmVuY2UsIE5vZGUpO1xuZnVuY3Rpb24gRG9jdW1lbnRGcmFnbWVudCgpIHt9XG47XG5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5ub2RlTmFtZSA9IFwiI2RvY3VtZW50LWZyYWdtZW50XCI7XG5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5ub2RlVHlwZSA9IERPQ1VNRU5UX0ZSQUdNRU5UX05PREU7XG5fZXh0ZW5kcyhEb2N1bWVudEZyYWdtZW50LCBOb2RlKTtcbmZ1bmN0aW9uIFByb2Nlc3NpbmdJbnN0cnVjdGlvbigpIHt9XG5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24ucHJvdG90eXBlLm5vZGVUeXBlID0gUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFO1xuX2V4dGVuZHMoUHJvY2Vzc2luZ0luc3RydWN0aW9uLCBOb2RlKTtcbmZ1bmN0aW9uIFhNTFNlcmlhbGl6ZXIoKSB7fVxuWE1MU2VyaWFsaXplci5wcm90b3R5cGUuc2VyaWFsaXplVG9TdHJpbmcgPSBmdW5jdGlvbiAobm9kZSwgaXNIdG1sLCBub2RlRmlsdGVyKSB7XG4gIHJldHVybiBub2RlU2VyaWFsaXplVG9TdHJpbmcuY2FsbChub2RlLCBpc0h0bWwsIG5vZGVGaWx0ZXIpO1xufTtcbk5vZGUucHJvdG90eXBlLnRvU3RyaW5nID0gbm9kZVNlcmlhbGl6ZVRvU3RyaW5nO1xuZnVuY3Rpb24gbm9kZVNlcmlhbGl6ZVRvU3RyaW5nKGlzSHRtbCwgbm9kZUZpbHRlcikge1xuICB2YXIgYnVmID0gW107XG4gIHZhciByZWZOb2RlID0gdGhpcy5ub2RlVHlwZSA9PSA5ICYmIHRoaXMuZG9jdW1lbnRFbGVtZW50IHx8IHRoaXM7XG4gIHZhciBwcmVmaXggPSByZWZOb2RlLnByZWZpeDtcbiAgdmFyIHVyaSA9IHJlZk5vZGUubmFtZXNwYWNlVVJJO1xuICBpZiAodXJpICYmIHByZWZpeCA9PSBudWxsKSB7XG4gICAgdmFyIHByZWZpeCA9IHJlZk5vZGUubG9va3VwUHJlZml4KHVyaSk7XG4gICAgaWYgKHByZWZpeCA9PSBudWxsKSB7XG4gICAgICB2YXIgdmlzaWJsZU5hbWVzcGFjZXMgPSBbe1xuICAgICAgICBuYW1lc3BhY2U6IHVyaSxcbiAgICAgICAgcHJlZml4OiBudWxsXG4gICAgICB9XTtcbiAgICB9XG4gIH1cbiAgc2VyaWFsaXplVG9TdHJpbmcodGhpcywgYnVmLCBpc0h0bWwsIG5vZGVGaWx0ZXIsIHZpc2libGVOYW1lc3BhY2VzKTtcbiAgcmV0dXJuIGJ1Zi5qb2luKCcnKTtcbn1cbmZ1bmN0aW9uIG5lZWROYW1lc3BhY2VEZWZpbmUobm9kZSwgaXNIVE1MLCB2aXNpYmxlTmFtZXNwYWNlcykge1xuICB2YXIgcHJlZml4ID0gbm9kZS5wcmVmaXggfHwgJyc7XG4gIHZhciB1cmkgPSBub2RlLm5hbWVzcGFjZVVSSTtcbiAgaWYgKCFwcmVmaXggJiYgIXVyaSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAocHJlZml4ID09PSBcInhtbFwiICYmIHVyaSA9PT0gXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIiB8fCB1cmkgPT0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaSA9IHZpc2libGVOYW1lc3BhY2VzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciBucyA9IHZpc2libGVOYW1lc3BhY2VzW2ldO1xuICAgIGlmIChucy5wcmVmaXggPT0gcHJlZml4KSB7XG4gICAgICByZXR1cm4gbnMubmFtZXNwYWNlICE9IHVyaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBzZXJpYWxpemVUb1N0cmluZyhub2RlLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMpIHtcbiAgaWYgKG5vZGVGaWx0ZXIpIHtcbiAgICBub2RlID0gbm9kZUZpbHRlcihub2RlKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgaWYgKHR5cGVvZiBub2RlID09ICdzdHJpbmcnKSB7XG4gICAgICAgIGJ1Zi5wdXNoKG5vZGUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgc3dpdGNoIChub2RlLm5vZGVUeXBlKSB7XG4gICAgY2FzZSBFTEVNRU5UX05PREU6XG4gICAgICBpZiAoIXZpc2libGVOYW1lc3BhY2VzKSB2aXNpYmxlTmFtZXNwYWNlcyA9IFtdO1xuICAgICAgdmFyIHN0YXJ0VmlzaWJsZU5hbWVzcGFjZXMgPSB2aXNpYmxlTmFtZXNwYWNlcy5sZW5ndGg7XG4gICAgICB2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXM7XG4gICAgICB2YXIgbGVuID0gYXR0cnMubGVuZ3RoO1xuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgdmFyIG5vZGVOYW1lID0gbm9kZS50YWdOYW1lO1xuICAgICAgaXNIVE1MID0gaHRtbG5zID09PSBub2RlLm5hbWVzcGFjZVVSSSB8fCBpc0hUTUw7XG4gICAgICBidWYucHVzaCgnPCcsIG5vZGVOYW1lKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGF0dHIgPSBhdHRycy5pdGVtKGkpO1xuICAgICAgICBpZiAoYXR0ci5wcmVmaXggPT0gJ3htbG5zJykge1xuICAgICAgICAgIHZpc2libGVOYW1lc3BhY2VzLnB1c2goe1xuICAgICAgICAgICAgcHJlZml4OiBhdHRyLmxvY2FsTmFtZSxcbiAgICAgICAgICAgIG5hbWVzcGFjZTogYXR0ci52YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGF0dHIubm9kZU5hbWUgPT0gJ3htbG5zJykge1xuICAgICAgICAgIHZpc2libGVOYW1lc3BhY2VzLnB1c2goe1xuICAgICAgICAgICAgcHJlZml4OiAnJyxcbiAgICAgICAgICAgIG5hbWVzcGFjZTogYXR0ci52YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBhdHRyID0gYXR0cnMuaXRlbShpKTtcbiAgICAgICAgaWYgKG5lZWROYW1lc3BhY2VEZWZpbmUoYXR0ciwgaXNIVE1MLCB2aXNpYmxlTmFtZXNwYWNlcykpIHtcbiAgICAgICAgICB2YXIgcHJlZml4ID0gYXR0ci5wcmVmaXggfHwgJyc7XG4gICAgICAgICAgdmFyIHVyaSA9IGF0dHIubmFtZXNwYWNlVVJJO1xuICAgICAgICAgIHZhciBucyA9IHByZWZpeCA/ICcgeG1sbnM6JyArIHByZWZpeCA6IFwiIHhtbG5zXCI7XG4gICAgICAgICAgYnVmLnB1c2gobnMsICc9XCInLCB1cmksICdcIicpO1xuICAgICAgICAgIHZpc2libGVOYW1lc3BhY2VzLnB1c2goe1xuICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICBuYW1lc3BhY2U6IHVyaVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNlcmlhbGl6ZVRvU3RyaW5nKGF0dHIsIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcyk7XG4gICAgICB9XG4gICAgICBpZiAobmVlZE5hbWVzcGFjZURlZmluZShub2RlLCBpc0hUTUwsIHZpc2libGVOYW1lc3BhY2VzKSkge1xuICAgICAgICB2YXIgcHJlZml4ID0gbm9kZS5wcmVmaXggfHwgJyc7XG4gICAgICAgIHZhciB1cmkgPSBub2RlLm5hbWVzcGFjZVVSSTtcbiAgICAgICAgdmFyIG5zID0gcHJlZml4ID8gJyB4bWxuczonICsgcHJlZml4IDogXCIgeG1sbnNcIjtcbiAgICAgICAgYnVmLnB1c2gobnMsICc9XCInLCB1cmksICdcIicpO1xuICAgICAgICB2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHtcbiAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICBuYW1lc3BhY2U6IHVyaVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZCB8fCBpc0hUTUwgJiYgIS9eKD86bWV0YXxsaW5rfGltZ3xicnxocnxpbnB1dCkkL2kudGVzdChub2RlTmFtZSkpIHtcbiAgICAgICAgYnVmLnB1c2goJz4nKTtcbiAgICAgICAgaWYgKGlzSFRNTCAmJiAvXnNjcmlwdCQvaS50ZXN0KG5vZGVOYW1lKSkge1xuICAgICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmRhdGEpIHtcbiAgICAgICAgICAgICAgYnVmLnB1c2goY2hpbGQuZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXJpYWxpemVUb1N0cmluZyhjaGlsZCwgYnVmLCBpc0hUTUwsIG5vZGVGaWx0ZXIsIHZpc2libGVOYW1lc3BhY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgICAgc2VyaWFsaXplVG9TdHJpbmcoY2hpbGQsIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcyk7XG4gICAgICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBidWYucHVzaCgnPC8nLCBub2RlTmFtZSwgJz4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1Zi5wdXNoKCcvPicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgRE9DVU1FTlRfTk9ERTpcbiAgICBjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG4gICAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgc2VyaWFsaXplVG9TdHJpbmcoY2hpbGQsIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcyk7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBBVFRSSUJVVEVfTk9ERTpcbiAgICAgIHJldHVybiBidWYucHVzaCgnICcsIG5vZGUubmFtZSwgJz1cIicsIG5vZGUudmFsdWUucmVwbGFjZSgvWzwmXCJdL2csIF94bWxFbmNvZGVyKSwgJ1wiJyk7XG4gICAgY2FzZSBURVhUX05PREU6XG4gICAgICByZXR1cm4gYnVmLnB1c2gobm9kZS5kYXRhLnJlcGxhY2UoL1s8Jl0vZywgX3htbEVuY29kZXIpKTtcbiAgICBjYXNlIENEQVRBX1NFQ1RJT05fTk9ERTpcbiAgICAgIHJldHVybiBidWYucHVzaCgnPCFbQ0RBVEFbJywgbm9kZS5kYXRhLCAnXV0+Jyk7XG4gICAgY2FzZSBDT01NRU5UX05PREU6XG4gICAgICByZXR1cm4gYnVmLnB1c2goXCI8IS0tXCIsIG5vZGUuZGF0YSwgXCItLT5cIik7XG4gICAgY2FzZSBET0NVTUVOVF9UWVBFX05PREU6XG4gICAgICB2YXIgcHViaWQgPSBub2RlLnB1YmxpY0lkO1xuICAgICAgdmFyIHN5c2lkID0gbm9kZS5zeXN0ZW1JZDtcbiAgICAgIGJ1Zi5wdXNoKCc8IURPQ1RZUEUgJywgbm9kZS5uYW1lKTtcbiAgICAgIGlmIChwdWJpZCkge1xuICAgICAgICBidWYucHVzaCgnIFBVQkxJQyBcIicsIHB1YmlkKTtcbiAgICAgICAgaWYgKHN5c2lkICYmIHN5c2lkICE9ICcuJykge1xuICAgICAgICAgIGJ1Zi5wdXNoKCdcIiBcIicsIHN5c2lkKTtcbiAgICAgICAgfVxuICAgICAgICBidWYucHVzaCgnXCI+Jyk7XG4gICAgICB9IGVsc2UgaWYgKHN5c2lkICYmIHN5c2lkICE9ICcuJykge1xuICAgICAgICBidWYucHVzaCgnIFNZU1RFTSBcIicsIHN5c2lkLCAnXCI+Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc3ViID0gbm9kZS5pbnRlcm5hbFN1YnNldDtcbiAgICAgICAgaWYgKHN1Yikge1xuICAgICAgICAgIGJ1Zi5wdXNoKFwiIFtcIiwgc3ViLCBcIl1cIik7XG4gICAgICAgIH1cbiAgICAgICAgYnVmLnB1c2goXCI+XCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFOlxuICAgICAgcmV0dXJuIGJ1Zi5wdXNoKFwiPD9cIiwgbm9kZS50YXJnZXQsIFwiIFwiLCBub2RlLmRhdGEsIFwiPz5cIik7XG4gICAgY2FzZSBFTlRJVFlfUkVGRVJFTkNFX05PREU6XG4gICAgICByZXR1cm4gYnVmLnB1c2goJyYnLCBub2RlLm5vZGVOYW1lLCAnOycpO1xuICAgIGRlZmF1bHQ6XG4gICAgICBidWYucHVzaCgnPz8nLCBub2RlLm5vZGVOYW1lKTtcbiAgfVxufVxuZnVuY3Rpb24gX2ltcG9ydE5vZGUoZG9jLCBub2RlLCBkZWVwKSB7XG4gIHZhciBub2RlMjtcbiAgc3dpdGNoIChub2RlLm5vZGVUeXBlKSB7XG4gICAgY2FzZSBFTEVNRU5UX05PREU6XG4gICAgICBub2RlMiA9IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgIG5vZGUyLm93bmVyRG9jdW1lbnQgPSBkb2M7XG4gICAgY2FzZSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBBVFRSSUJVVEVfTk9ERTpcbiAgICAgIGRlZXAgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgaWYgKCFub2RlMikge1xuICAgIG5vZGUyID0gbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuICB9XG4gIG5vZGUyLm93bmVyRG9jdW1lbnQgPSBkb2M7XG4gIG5vZGUyLnBhcmVudE5vZGUgPSBudWxsO1xuICBpZiAoZGVlcCkge1xuICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIG5vZGUyLmFwcGVuZENoaWxkKF9pbXBvcnROb2RlKGRvYywgY2hpbGQsIGRlZXApKTtcbiAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiBub2RlMjtcbn1cbmZ1bmN0aW9uIF9jbG9uZU5vZGUoZG9jLCBub2RlLCBkZWVwKSB7XG4gIHZhciBub2RlMiA9IG5ldyBub2RlLmNvbnN0cnVjdG9yKCk7XG4gIGZvciAodmFyIG4gaW4gbm9kZSkge1xuICAgIHZhciB2ID0gbm9kZVtuXTtcbiAgICBpZiAoX3R5cGVvZih2KSAhPSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHYgIT0gbm9kZTJbbl0pIHtcbiAgICAgICAgbm9kZTJbbl0gPSB2O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAobm9kZS5jaGlsZE5vZGVzKSB7XG4gICAgbm9kZTIuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuICB9XG4gIG5vZGUyLm93bmVyRG9jdW1lbnQgPSBkb2M7XG4gIHN3aXRjaCAobm9kZTIubm9kZVR5cGUpIHtcbiAgICBjYXNlIEVMRU1FTlRfTk9ERTpcbiAgICAgIHZhciBhdHRycyA9IG5vZGUuYXR0cmlidXRlcztcbiAgICAgIHZhciBhdHRyczIgPSBub2RlMi5hdHRyaWJ1dGVzID0gbmV3IE5hbWVkTm9kZU1hcCgpO1xuICAgICAgdmFyIGxlbiA9IGF0dHJzLmxlbmd0aDtcbiAgICAgIGF0dHJzMi5fb3duZXJFbGVtZW50ID0gbm9kZTI7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIG5vZGUyLnNldEF0dHJpYnV0ZU5vZGUoX2Nsb25lTm9kZShkb2MsIGF0dHJzLml0ZW0oaSksIHRydWUpKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgICAgO1xuICAgIGNhc2UgQVRUUklCVVRFX05PREU6XG4gICAgICBkZWVwID0gdHJ1ZTtcbiAgfVxuICBpZiAoZGVlcCkge1xuICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIG5vZGUyLmFwcGVuZENoaWxkKF9jbG9uZU5vZGUoZG9jLCBjaGlsZCwgZGVlcCkpO1xuICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5vZGUyO1xufVxuZnVuY3Rpb24gX19zZXRfXyhvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbn1cbnRyeSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgICB2YXIgZ2V0VGV4dENvbnRlbnQgPSBmdW5jdGlvbiBnZXRUZXh0Q29udGVudChub2RlKSB7XG4gICAgICBzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcbiAgICAgICAgY2FzZSBFTEVNRU5UX05PREU6XG4gICAgICAgIGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcbiAgICAgICAgICB2YXIgYnVmID0gW107XG4gICAgICAgICAgbm9kZSA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IDcgJiYgbm9kZS5ub2RlVHlwZSAhPT0gOCkge1xuICAgICAgICAgICAgICBidWYucHVzaChnZXRUZXh0Q29udGVudChub2RlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGJ1Zi5qb2luKCcnKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbm9kZS5ub2RlVmFsdWU7XG4gICAgICB9XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGl2ZU5vZGVMaXN0LnByb3RvdHlwZSwgJ2xlbmd0aCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICBfdXBkYXRlTGl2ZUxpc3QodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLiQkbGVuZ3RoO1xuICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSwgJ3RleHRDb250ZW50Jywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBnZXRUZXh0Q29udGVudCh0aGlzKTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldChkYXRhKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5ub2RlVHlwZSkge1xuICAgICAgICAgIGNhc2UgRUxFTUVOVF9OT0RFOlxuICAgICAgICAgIGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEgfHwgU3RyaW5nKGRhdGEpKSB7XG4gICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBfX3NldF9fID0gZnVuY3Rpb24gX19zZXRfXyhvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgICAgIG9iamVjdFsnJCQnICsga2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cbn0gY2F0Y2ggKGUpIHt9XG5leHBvcnRzLkRPTUltcGxlbWVudGF0aW9uID0gRE9NSW1wbGVtZW50YXRpb247XG5leHBvcnRzLlhNTFNlcmlhbGl6ZXIgPSBYTUxTZXJpYWxpemVyO1xuXG59LHt9XSw2MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5lbnRpdHlNYXAgPSB7XG4gIGx0OiAnPCcsXG4gIGd0OiAnPicsXG4gIGFtcDogJyYnLFxuICBxdW90OiAnXCInLFxuICBhcG9zOiBcIidcIixcbiAgQWdyYXZlOiBcIsOAXCIsXG4gIEFhY3V0ZTogXCLDgVwiLFxuICBBY2lyYzogXCLDglwiLFxuICBBdGlsZGU6IFwiw4NcIixcbiAgQXVtbDogXCLDhFwiLFxuICBBcmluZzogXCLDhVwiLFxuICBBRWxpZzogXCLDhlwiLFxuICBDY2VkaWw6IFwiw4dcIixcbiAgRWdyYXZlOiBcIsOIXCIsXG4gIEVhY3V0ZTogXCLDiVwiLFxuICBFY2lyYzogXCLDilwiLFxuICBFdW1sOiBcIsOLXCIsXG4gIElncmF2ZTogXCLDjFwiLFxuICBJYWN1dGU6IFwiw41cIixcbiAgSWNpcmM6IFwiw45cIixcbiAgSXVtbDogXCLDj1wiLFxuICBFVEg6IFwiw5BcIixcbiAgTnRpbGRlOiBcIsORXCIsXG4gIE9ncmF2ZTogXCLDklwiLFxuICBPYWN1dGU6IFwiw5NcIixcbiAgT2NpcmM6IFwiw5RcIixcbiAgT3RpbGRlOiBcIsOVXCIsXG4gIE91bWw6IFwiw5ZcIixcbiAgT3NsYXNoOiBcIsOYXCIsXG4gIFVncmF2ZTogXCLDmVwiLFxuICBVYWN1dGU6IFwiw5pcIixcbiAgVWNpcmM6IFwiw5tcIixcbiAgVXVtbDogXCLDnFwiLFxuICBZYWN1dGU6IFwiw51cIixcbiAgVEhPUk46IFwiw55cIixcbiAgc3psaWc6IFwiw59cIixcbiAgYWdyYXZlOiBcIsOgXCIsXG4gIGFhY3V0ZTogXCLDoVwiLFxuICBhY2lyYzogXCLDolwiLFxuICBhdGlsZGU6IFwiw6NcIixcbiAgYXVtbDogXCLDpFwiLFxuICBhcmluZzogXCLDpVwiLFxuICBhZWxpZzogXCLDplwiLFxuICBjY2VkaWw6IFwiw6dcIixcbiAgZWdyYXZlOiBcIsOoXCIsXG4gIGVhY3V0ZTogXCLDqVwiLFxuICBlY2lyYzogXCLDqlwiLFxuICBldW1sOiBcIsOrXCIsXG4gIGlncmF2ZTogXCLDrFwiLFxuICBpYWN1dGU6IFwiw61cIixcbiAgaWNpcmM6IFwiw65cIixcbiAgaXVtbDogXCLDr1wiLFxuICBldGg6IFwiw7BcIixcbiAgbnRpbGRlOiBcIsOxXCIsXG4gIG9ncmF2ZTogXCLDslwiLFxuICBvYWN1dGU6IFwiw7NcIixcbiAgb2NpcmM6IFwiw7RcIixcbiAgb3RpbGRlOiBcIsO1XCIsXG4gIG91bWw6IFwiw7ZcIixcbiAgb3NsYXNoOiBcIsO4XCIsXG4gIHVncmF2ZTogXCLDuVwiLFxuICB1YWN1dGU6IFwiw7pcIixcbiAgdWNpcmM6IFwiw7tcIixcbiAgdXVtbDogXCLDvFwiLFxuICB5YWN1dGU6IFwiw71cIixcbiAgdGhvcm46IFwiw75cIixcbiAgeXVtbDogXCLDv1wiLFxuICBuYnNwOiBcIiBcIixcbiAgaWV4Y2w6IFwiwqFcIixcbiAgY2VudDogXCLColwiLFxuICBwb3VuZDogXCLCo1wiLFxuICBjdXJyZW46IFwiwqRcIixcbiAgeWVuOiBcIsKlXCIsXG4gIGJydmJhcjogXCLCplwiLFxuICBzZWN0OiBcIsKnXCIsXG4gIHVtbDogXCLCqFwiLFxuICBjb3B5OiBcIsKpXCIsXG4gIG9yZGY6IFwiwqpcIixcbiAgbGFxdW86IFwiwqtcIixcbiAgbm90OiBcIsKsXCIsXG4gIHNoeTogXCLCrcKtXCIsXG4gIHJlZzogXCLCrlwiLFxuICBtYWNyOiBcIsKvXCIsXG4gIGRlZzogXCLCsFwiLFxuICBwbHVzbW46IFwiwrFcIixcbiAgc3VwMjogXCLCslwiLFxuICBzdXAzOiBcIsKzXCIsXG4gIGFjdXRlOiBcIsK0XCIsXG4gIG1pY3JvOiBcIsK1XCIsXG4gIHBhcmE6IFwiwrZcIixcbiAgbWlkZG90OiBcIsK3XCIsXG4gIGNlZGlsOiBcIsK4XCIsXG4gIHN1cDE6IFwiwrlcIixcbiAgb3JkbTogXCLCulwiLFxuICByYXF1bzogXCLCu1wiLFxuICBmcmFjMTQ6IFwiwrxcIixcbiAgZnJhYzEyOiBcIsK9XCIsXG4gIGZyYWMzNDogXCLCvlwiLFxuICBpcXVlc3Q6IFwiwr9cIixcbiAgdGltZXM6IFwiw5dcIixcbiAgZGl2aWRlOiBcIsO3XCIsXG4gIGZvcmFsbDogXCLiiIBcIixcbiAgcGFydDogXCLiiIJcIixcbiAgZXhpc3Q6IFwi4oiDXCIsXG4gIGVtcHR5OiBcIuKIhVwiLFxuICBuYWJsYTogXCLiiIdcIixcbiAgaXNpbjogXCLiiIhcIixcbiAgbm90aW46IFwi4oiJXCIsXG4gIG5pOiBcIuKIi1wiLFxuICBwcm9kOiBcIuKIj1wiLFxuICBzdW06IFwi4oiRXCIsXG4gIG1pbnVzOiBcIuKIklwiLFxuICBsb3dhc3Q6IFwi4oiXXCIsXG4gIHJhZGljOiBcIuKImlwiLFxuICBwcm9wOiBcIuKInVwiLFxuICBpbmZpbjogXCLiiJ5cIixcbiAgYW5nOiBcIuKIoFwiLFxuICBhbmQ6IFwi4oinXCIsXG4gIG9yOiBcIuKIqFwiLFxuICBjYXA6IFwi4oipXCIsXG4gIGN1cDogXCLiiKpcIixcbiAgJ2ludCc6IFwi4oirXCIsXG4gIHRoZXJlNDogXCLiiLRcIixcbiAgc2ltOiBcIuKIvFwiLFxuICBjb25nOiBcIuKJhVwiLFxuICBhc3ltcDogXCLiiYhcIixcbiAgbmU6IFwi4omgXCIsXG4gIGVxdWl2OiBcIuKJoVwiLFxuICBsZTogXCLiiaRcIixcbiAgZ2U6IFwi4omlXCIsXG4gIHN1YjogXCLiioJcIixcbiAgc3VwOiBcIuKKg1wiLFxuICBuc3ViOiBcIuKKhFwiLFxuICBzdWJlOiBcIuKKhlwiLFxuICBzdXBlOiBcIuKKh1wiLFxuICBvcGx1czogXCLiipVcIixcbiAgb3RpbWVzOiBcIuKKl1wiLFxuICBwZXJwOiBcIuKKpVwiLFxuICBzZG90OiBcIuKLhVwiLFxuICBBbHBoYTogXCLOkVwiLFxuICBCZXRhOiBcIs6SXCIsXG4gIEdhbW1hOiBcIs6TXCIsXG4gIERlbHRhOiBcIs6UXCIsXG4gIEVwc2lsb246IFwizpVcIixcbiAgWmV0YTogXCLOllwiLFxuICBFdGE6IFwizpdcIixcbiAgVGhldGE6IFwizphcIixcbiAgSW90YTogXCLOmVwiLFxuICBLYXBwYTogXCLOmlwiLFxuICBMYW1iZGE6IFwizptcIixcbiAgTXU6IFwizpxcIixcbiAgTnU6IFwizp1cIixcbiAgWGk6IFwizp5cIixcbiAgT21pY3JvbjogXCLOn1wiLFxuICBQaTogXCLOoFwiLFxuICBSaG86IFwizqFcIixcbiAgU2lnbWE6IFwizqNcIixcbiAgVGF1OiBcIs6kXCIsXG4gIFVwc2lsb246IFwizqVcIixcbiAgUGhpOiBcIs6mXCIsXG4gIENoaTogXCLOp1wiLFxuICBQc2k6IFwizqhcIixcbiAgT21lZ2E6IFwizqlcIixcbiAgYWxwaGE6IFwizrFcIixcbiAgYmV0YTogXCLOslwiLFxuICBnYW1tYTogXCLOs1wiLFxuICBkZWx0YTogXCLOtFwiLFxuICBlcHNpbG9uOiBcIs61XCIsXG4gIHpldGE6IFwizrZcIixcbiAgZXRhOiBcIs63XCIsXG4gIHRoZXRhOiBcIs64XCIsXG4gIGlvdGE6IFwizrlcIixcbiAga2FwcGE6IFwizrpcIixcbiAgbGFtYmRhOiBcIs67XCIsXG4gIG11OiBcIs68XCIsXG4gIG51OiBcIs69XCIsXG4gIHhpOiBcIs6+XCIsXG4gIG9taWNyb246IFwizr9cIixcbiAgcGk6IFwiz4BcIixcbiAgcmhvOiBcIs+BXCIsXG4gIHNpZ21hZjogXCLPglwiLFxuICBzaWdtYTogXCLPg1wiLFxuICB0YXU6IFwiz4RcIixcbiAgdXBzaWxvbjogXCLPhVwiLFxuICBwaGk6IFwiz4ZcIixcbiAgY2hpOiBcIs+HXCIsXG4gIHBzaTogXCLPiFwiLFxuICBvbWVnYTogXCLPiVwiLFxuICB0aGV0YXN5bTogXCLPkVwiLFxuICB1cHNpaDogXCLPklwiLFxuICBwaXY6IFwiz5ZcIixcbiAgT0VsaWc6IFwixZJcIixcbiAgb2VsaWc6IFwixZNcIixcbiAgU2Nhcm9uOiBcIsWgXCIsXG4gIHNjYXJvbjogXCLFoVwiLFxuICBZdW1sOiBcIsW4XCIsXG4gIGZub2Y6IFwixpJcIixcbiAgY2lyYzogXCLLhlwiLFxuICB0aWxkZTogXCLLnFwiLFxuICBlbnNwOiBcIuKAglwiLFxuICBlbXNwOiBcIuKAg1wiLFxuICB0aGluc3A6IFwi4oCJXCIsXG4gIHp3bmo6IFwi4oCMXCIsXG4gIHp3ajogXCLigI1cIixcbiAgbHJtOiBcIuKAjlwiLFxuICBybG06IFwi4oCPXCIsXG4gIG5kYXNoOiBcIuKAk1wiLFxuICBtZGFzaDogXCLigJRcIixcbiAgbHNxdW86IFwi4oCYXCIsXG4gIHJzcXVvOiBcIuKAmVwiLFxuICBzYnF1bzogXCLigJpcIixcbiAgbGRxdW86IFwi4oCcXCIsXG4gIHJkcXVvOiBcIuKAnVwiLFxuICBiZHF1bzogXCLigJ5cIixcbiAgZGFnZ2VyOiBcIuKAoFwiLFxuICBEYWdnZXI6IFwi4oChXCIsXG4gIGJ1bGw6IFwi4oCiXCIsXG4gIGhlbGxpcDogXCLigKZcIixcbiAgcGVybWlsOiBcIuKAsFwiLFxuICBwcmltZTogXCLigLJcIixcbiAgUHJpbWU6IFwi4oCzXCIsXG4gIGxzYXF1bzogXCLigLlcIixcbiAgcnNhcXVvOiBcIuKAulwiLFxuICBvbGluZTogXCLigL5cIixcbiAgZXVybzogXCLigqxcIixcbiAgdHJhZGU6IFwi4oSiXCIsXG4gIGxhcnI6IFwi4oaQXCIsXG4gIHVhcnI6IFwi4oaRXCIsXG4gIHJhcnI6IFwi4oaSXCIsXG4gIGRhcnI6IFwi4oaTXCIsXG4gIGhhcnI6IFwi4oaUXCIsXG4gIGNyYXJyOiBcIuKGtVwiLFxuICBsY2VpbDogXCLijIhcIixcbiAgcmNlaWw6IFwi4oyJXCIsXG4gIGxmbG9vcjogXCLijIpcIixcbiAgcmZsb29yOiBcIuKMi1wiLFxuICBsb3o6IFwi4peKXCIsXG4gIHNwYWRlczogXCLimaBcIixcbiAgY2x1YnM6IFwi4pmjXCIsXG4gIGhlYXJ0czogXCLimaVcIixcbiAgZGlhbXM6IFwi4pmmXCJcbn07XG5cbn0se31dLDYzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgbmFtZVN0YXJ0Q2hhciA9IC9bQS1aX2EtelxceEMwLVxceEQ2XFx4RDgtXFx4RjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRdLztcbnZhciBuYW1lQ2hhciA9IG5ldyBSZWdFeHAoXCJbXFxcXC1cXFxcLjAtOVwiICsgbmFtZVN0YXJ0Q2hhci5zb3VyY2Uuc2xpY2UoMSwgLTEpICsgXCJcXFxcdTAwQjdcXFxcdTAzMDAtXFxcXHUwMzZGXFxcXHUyMDNGLVxcXFx1MjA0MF1cIik7XG52YXIgdGFnTmFtZVBhdHRlcm4gPSBuZXcgUmVnRXhwKCdeJyArIG5hbWVTdGFydENoYXIuc291cmNlICsgbmFtZUNoYXIuc291cmNlICsgJyooPzpcXDonICsgbmFtZVN0YXJ0Q2hhci5zb3VyY2UgKyBuYW1lQ2hhci5zb3VyY2UgKyAnKik/JCcpO1xudmFyIFNfVEFHID0gMDtcbnZhciBTX0FUVFIgPSAxO1xudmFyIFNfQVRUUl9TUEFDRSA9IDI7XG52YXIgU19FUSA9IDM7XG52YXIgU19BVFRSX05PUVVPVF9WQUxVRSA9IDQ7XG52YXIgU19BVFRSX0VORCA9IDU7XG52YXIgU19UQUdfU1BBQ0UgPSA2O1xudmFyIFNfVEFHX0NMT1NFID0gNztcbmZ1bmN0aW9uIFhNTFJlYWRlcigpIHt9XG5YTUxSZWFkZXIucHJvdG90eXBlID0ge1xuICBwYXJzZTogZnVuY3Rpb24gcGFyc2Uoc291cmNlLCBkZWZhdWx0TlNNYXAsIGVudGl0eU1hcCkge1xuICAgIHZhciBkb21CdWlsZGVyID0gdGhpcy5kb21CdWlsZGVyO1xuICAgIGRvbUJ1aWxkZXIuc3RhcnREb2N1bWVudCgpO1xuICAgIF9jb3B5KGRlZmF1bHROU01hcCwgZGVmYXVsdE5TTWFwID0ge30pO1xuICAgIF9wYXJzZShzb3VyY2UsIGRlZmF1bHROU01hcCwgZW50aXR5TWFwLCBkb21CdWlsZGVyLCB0aGlzLmVycm9ySGFuZGxlcik7XG4gICAgZG9tQnVpbGRlci5lbmREb2N1bWVudCgpO1xuICB9XG59O1xuZnVuY3Rpb24gX3BhcnNlKHNvdXJjZSwgZGVmYXVsdE5TTWFwQ29weSwgZW50aXR5TWFwLCBkb21CdWlsZGVyLCBlcnJvckhhbmRsZXIpIHtcbiAgZnVuY3Rpb24gZml4ZWRGcm9tQ2hhckNvZGUoY29kZSkge1xuICAgIGlmIChjb2RlID4gMHhmZmZmKSB7XG4gICAgICBjb2RlIC09IDB4MTAwMDA7XG4gICAgICB2YXIgc3Vycm9nYXRlMSA9IDB4ZDgwMCArIChjb2RlID4+IDEwKSxcbiAgICAgICAgc3Vycm9nYXRlMiA9IDB4ZGMwMCArIChjb2RlICYgMHgzZmYpO1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoc3Vycm9nYXRlMSwgc3Vycm9nYXRlMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBlbnRpdHlSZXBsYWNlcihhKSB7XG4gICAgdmFyIGsgPSBhLnNsaWNlKDEsIC0xKTtcbiAgICBpZiAoayBpbiBlbnRpdHlNYXApIHtcbiAgICAgIHJldHVybiBlbnRpdHlNYXBba107XG4gICAgfSBlbHNlIGlmIChrLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICByZXR1cm4gZml4ZWRGcm9tQ2hhckNvZGUocGFyc2VJbnQoay5zdWJzdHIoMSkucmVwbGFjZSgneCcsICcweCcpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9ySGFuZGxlci5lcnJvcignZW50aXR5IG5vdCBmb3VuZDonICsgYSk7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYXBwZW5kVGV4dChlbmQpIHtcbiAgICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICAgIHZhciB4dCA9IHNvdXJjZS5zdWJzdHJpbmcoc3RhcnQsIGVuZCkucmVwbGFjZSgvJiM/XFx3KzsvZywgZW50aXR5UmVwbGFjZXIpO1xuICAgICAgbG9jYXRvciAmJiBwb3NpdGlvbihzdGFydCk7XG4gICAgICBkb21CdWlsZGVyLmNoYXJhY3RlcnMoeHQsIDAsIGVuZCAtIHN0YXJ0KTtcbiAgICAgIHN0YXJ0ID0gZW5kO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwb3NpdGlvbihwLCBtKSB7XG4gICAgd2hpbGUgKHAgPj0gbGluZUVuZCAmJiAobSA9IGxpbmVQYXR0ZXJuLmV4ZWMoc291cmNlKSkpIHtcbiAgICAgIGxpbmVTdGFydCA9IG0uaW5kZXg7XG4gICAgICBsaW5lRW5kID0gbGluZVN0YXJ0ICsgbVswXS5sZW5ndGg7XG4gICAgICBsb2NhdG9yLmxpbmVOdW1iZXIrKztcbiAgICB9XG4gICAgbG9jYXRvci5jb2x1bW5OdW1iZXIgPSBwIC0gbGluZVN0YXJ0ICsgMTtcbiAgfVxuICB2YXIgbGluZVN0YXJ0ID0gMDtcbiAgdmFyIGxpbmVFbmQgPSAwO1xuICB2YXIgbGluZVBhdHRlcm4gPSAvLiooPzpcXHJcXG4/fFxcbil8LiokL2c7XG4gIHZhciBsb2NhdG9yID0gZG9tQnVpbGRlci5sb2NhdG9yO1xuICB2YXIgcGFyc2VTdGFjayA9IFt7XG4gICAgY3VycmVudE5TTWFwOiBkZWZhdWx0TlNNYXBDb3B5XG4gIH1dO1xuICB2YXIgY2xvc2VNYXAgPSB7fTtcbiAgdmFyIHN0YXJ0ID0gMDtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHRhZ1N0YXJ0ID0gc291cmNlLmluZGV4T2YoJzwnLCBzdGFydCk7XG4gICAgICBpZiAodGFnU3RhcnQgPCAwKSB7XG4gICAgICAgIGlmICghc291cmNlLnN1YnN0cihzdGFydCkubWF0Y2goL15cXHMqJC8pKSB7XG4gICAgICAgICAgdmFyIGRvYyA9IGRvbUJ1aWxkZXIuZG9jO1xuICAgICAgICAgIHZhciB0ZXh0ID0gZG9jLmNyZWF0ZVRleHROb2RlKHNvdXJjZS5zdWJzdHIoc3RhcnQpKTtcbiAgICAgICAgICBkb2MuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgZG9tQnVpbGRlci5jdXJyZW50RWxlbWVudCA9IHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRhZ1N0YXJ0ID4gc3RhcnQpIHtcbiAgICAgICAgYXBwZW5kVGV4dCh0YWdTdGFydCk7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHNvdXJjZS5jaGFyQXQodGFnU3RhcnQgKyAxKSkge1xuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICB2YXIgZW5kID0gc291cmNlLmluZGV4T2YoJz4nLCB0YWdTdGFydCArIDMpO1xuICAgICAgICAgIHZhciB0YWdOYW1lID0gc291cmNlLnN1YnN0cmluZyh0YWdTdGFydCArIDIsIGVuZCk7XG4gICAgICAgICAgdmFyIGNvbmZpZyA9IHBhcnNlU3RhY2sucG9wKCk7XG4gICAgICAgICAgaWYgKGVuZCA8IDApIHtcbiAgICAgICAgICAgIHRhZ05hbWUgPSBzb3VyY2Uuc3Vic3RyaW5nKHRhZ1N0YXJ0ICsgMikucmVwbGFjZSgvW1xcczxdLiovLCAnJyk7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIuZXJyb3IoXCJlbmQgdGFnIG5hbWU6IFwiICsgdGFnTmFtZSArICcgaXMgbm90IGNvbXBsZXRlOicgKyBjb25maWcudGFnTmFtZSk7XG4gICAgICAgICAgICBlbmQgPSB0YWdTdGFydCArIDEgKyB0YWdOYW1lLmxlbmd0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUubWF0Y2goL1xcczwvKSkge1xuICAgICAgICAgICAgdGFnTmFtZSA9IHRhZ05hbWUucmVwbGFjZSgvW1xcczxdLiovLCAnJyk7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIuZXJyb3IoXCJlbmQgdGFnIG5hbWU6IFwiICsgdGFnTmFtZSArICcgbWF5YmUgbm90IGNvbXBsZXRlJyk7XG4gICAgICAgICAgICBlbmQgPSB0YWdTdGFydCArIDEgKyB0YWdOYW1lLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGxvY2FsTlNNYXAgPSBjb25maWcubG9jYWxOU01hcDtcbiAgICAgICAgICB2YXIgZW5kTWF0Y2ggPSBjb25maWcudGFnTmFtZSA9PSB0YWdOYW1lO1xuICAgICAgICAgIHZhciBlbmRJZ25vcmVDYXNlTWFjaCA9IGVuZE1hdGNoIHx8IGNvbmZpZy50YWdOYW1lICYmIGNvbmZpZy50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gdGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGlmIChlbmRJZ25vcmVDYXNlTWFjaCkge1xuICAgICAgICAgICAgZG9tQnVpbGRlci5lbmRFbGVtZW50KGNvbmZpZy51cmksIGNvbmZpZy5sb2NhbE5hbWUsIHRhZ05hbWUpO1xuICAgICAgICAgICAgaWYgKGxvY2FsTlNNYXApIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgcHJlZml4IGluIGxvY2FsTlNNYXApIHtcbiAgICAgICAgICAgICAgICBkb21CdWlsZGVyLmVuZFByZWZpeE1hcHBpbmcocHJlZml4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlbmRNYXRjaCkge1xuICAgICAgICAgICAgICBlcnJvckhhbmRsZXIuZmF0YWxFcnJvcihcImVuZCB0YWcgbmFtZTogXCIgKyB0YWdOYW1lICsgJyBpcyBub3QgbWF0Y2ggdGhlIGN1cnJlbnQgc3RhcnQgdGFnTmFtZTonICsgY29uZmlnLnRhZ05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZVN0YWNrLnB1c2goY29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZW5kKys7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJz8nOlxuICAgICAgICAgIGxvY2F0b3IgJiYgcG9zaXRpb24odGFnU3RhcnQpO1xuICAgICAgICAgIGVuZCA9IHBhcnNlSW5zdHJ1Y3Rpb24oc291cmNlLCB0YWdTdGFydCwgZG9tQnVpbGRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyEnOlxuICAgICAgICAgIGxvY2F0b3IgJiYgcG9zaXRpb24odGFnU3RhcnQpO1xuICAgICAgICAgIGVuZCA9IHBhcnNlRENDKHNvdXJjZSwgdGFnU3RhcnQsIGRvbUJ1aWxkZXIsIGVycm9ySGFuZGxlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgbG9jYXRvciAmJiBwb3NpdGlvbih0YWdTdGFydCk7XG4gICAgICAgICAgdmFyIGVsID0gbmV3IEVsZW1lbnRBdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgdmFyIGN1cnJlbnROU01hcCA9IHBhcnNlU3RhY2tbcGFyc2VTdGFjay5sZW5ndGggLSAxXS5jdXJyZW50TlNNYXA7XG4gICAgICAgICAgdmFyIGVuZCA9IHBhcnNlRWxlbWVudFN0YXJ0UGFydChzb3VyY2UsIHRhZ1N0YXJ0LCBlbCwgY3VycmVudE5TTWFwLCBlbnRpdHlSZXBsYWNlciwgZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgICB2YXIgbGVuID0gZWwubGVuZ3RoO1xuICAgICAgICAgIGlmICghZWwuY2xvc2VkICYmIGZpeFNlbGZDbG9zZWQoc291cmNlLCBlbmQsIGVsLnRhZ05hbWUsIGNsb3NlTWFwKSkge1xuICAgICAgICAgICAgZWwuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghZW50aXR5TWFwLm5ic3ApIHtcbiAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyLndhcm5pbmcoJ3VuY2xvc2VkIHhtbCBhdHRyaWJ1dGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGxvY2F0b3IgJiYgbGVuKSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRvcjIgPSBjb3B5TG9jYXRvcihsb2NhdG9yLCB7fSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciBhID0gZWxbaV07XG4gICAgICAgICAgICAgIHBvc2l0aW9uKGEub2Zmc2V0KTtcbiAgICAgICAgICAgICAgYS5sb2NhdG9yID0gY29weUxvY2F0b3IobG9jYXRvciwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9tQnVpbGRlci5sb2NhdG9yID0gbG9jYXRvcjI7XG4gICAgICAgICAgICBpZiAoYXBwZW5kRWxlbWVudChlbCwgZG9tQnVpbGRlciwgY3VycmVudE5TTWFwKSkge1xuICAgICAgICAgICAgICBwYXJzZVN0YWNrLnB1c2goZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9tQnVpbGRlci5sb2NhdG9yID0gbG9jYXRvcjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFwcGVuZEVsZW1lbnQoZWwsIGRvbUJ1aWxkZXIsIGN1cnJlbnROU01hcCkpIHtcbiAgICAgICAgICAgICAgcGFyc2VTdGFjay5wdXNoKGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVsLnVyaSA9PT0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnICYmICFlbC5jbG9zZWQpIHtcbiAgICAgICAgICAgIGVuZCA9IHBhcnNlSHRtbFNwZWNpYWxDb250ZW50KHNvdXJjZSwgZW5kLCBlbC50YWdOYW1lLCBlbnRpdHlSZXBsYWNlciwgZG9tQnVpbGRlcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVuZCsrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvckhhbmRsZXIuZXJyb3IoJ2VsZW1lbnQgcGFyc2UgZXJyb3I6ICcgKyBlKTtcbiAgICAgIGVuZCA9IC0xO1xuICAgIH1cbiAgICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICAgIHN0YXJ0ID0gZW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcHBlbmRUZXh0KE1hdGgubWF4KHRhZ1N0YXJ0LCBzdGFydCkgKyAxKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNvcHlMb2NhdG9yKGYsIHQpIHtcbiAgdC5saW5lTnVtYmVyID0gZi5saW5lTnVtYmVyO1xuICB0LmNvbHVtbk51bWJlciA9IGYuY29sdW1uTnVtYmVyO1xuICByZXR1cm4gdDtcbn1cbmZ1bmN0aW9uIHBhcnNlRWxlbWVudFN0YXJ0UGFydChzb3VyY2UsIHN0YXJ0LCBlbCwgY3VycmVudE5TTWFwLCBlbnRpdHlSZXBsYWNlciwgZXJyb3JIYW5kbGVyKSB7XG4gIHZhciBhdHRyTmFtZTtcbiAgdmFyIHZhbHVlO1xuICB2YXIgcCA9ICsrc3RhcnQ7XG4gIHZhciBzID0gU19UQUc7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdmFyIGMgPSBzb3VyY2UuY2hhckF0KHApO1xuICAgIHN3aXRjaCAoYykge1xuICAgICAgY2FzZSAnPSc6XG4gICAgICAgIGlmIChzID09PSBTX0FUVFIpIHtcbiAgICAgICAgICBhdHRyTmFtZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCk7XG4gICAgICAgICAgcyA9IFNfRVE7XG4gICAgICAgIH0gZWxzZSBpZiAocyA9PT0gU19BVFRSX1NQQUNFKSB7XG4gICAgICAgICAgcyA9IFNfRVE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhdHRyaWJ1dGUgZXF1YWwgbXVzdCBhZnRlciBhdHRyTmFtZScpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnXFwnJzpcbiAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgaWYgKHMgPT09IFNfRVEgfHwgcyA9PT0gU19BVFRSKSB7XG4gICAgICAgICAgaWYgKHMgPT09IFNfQVRUUikge1xuICAgICAgICAgICAgZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSB2YWx1ZSBtdXN0IGFmdGVyIFwiPVwiJyk7XG4gICAgICAgICAgICBhdHRyTmFtZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXJ0ID0gcCArIDE7XG4gICAgICAgICAgcCA9IHNvdXJjZS5pbmRleE9mKGMsIHN0YXJ0KTtcbiAgICAgICAgICBpZiAocCA+IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LCBwKS5yZXBsYWNlKC8mIz9cXHcrOy9nLCBlbnRpdHlSZXBsYWNlcik7XG4gICAgICAgICAgICBlbC5hZGQoYXR0ck5hbWUsIHZhbHVlLCBzdGFydCAtIDEpO1xuICAgICAgICAgICAgcyA9IFNfQVRUUl9FTkQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXR0cmlidXRlIHZhbHVlIG5vIGVuZCBcXCcnICsgYyArICdcXCcgbWF0Y2gnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocyA9PSBTX0FUVFJfTk9RVU9UX1ZBTFVFKSB7XG4gICAgICAgICAgdmFsdWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApLnJlcGxhY2UoLyYjP1xcdys7L2csIGVudGl0eVJlcGxhY2VyKTtcbiAgICAgICAgICBlbC5hZGQoYXR0ck5hbWUsIHZhbHVlLCBzdGFydCk7XG4gICAgICAgICAgZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicgKyBhdHRyTmFtZSArICdcIiBtaXNzZWQgc3RhcnQgcXVvdCgnICsgYyArICcpISEnKTtcbiAgICAgICAgICBzdGFydCA9IHAgKyAxO1xuICAgICAgICAgIHMgPSBTX0FUVFJfRU5EO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXR0cmlidXRlIHZhbHVlIG11c3QgYWZ0ZXIgXCI9XCInKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgICBzd2l0Y2ggKHMpIHtcbiAgICAgICAgICBjYXNlIFNfVEFHOlxuICAgICAgICAgICAgZWwuc2V0VGFnTmFtZShzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApKTtcbiAgICAgICAgICBjYXNlIFNfQVRUUl9FTkQ6XG4gICAgICAgICAgY2FzZSBTX1RBR19TUEFDRTpcbiAgICAgICAgICBjYXNlIFNfVEFHX0NMT1NFOlxuICAgICAgICAgICAgcyA9IFNfVEFHX0NMT1NFO1xuICAgICAgICAgICAgZWwuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICBjYXNlIFNfQVRUUl9OT1FVT1RfVkFMVUU6XG4gICAgICAgICAgY2FzZSBTX0FUVFI6XG4gICAgICAgICAgY2FzZSBTX0FUVFJfU1BBQ0U6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXR0cmlidXRlIGludmFsaWQgY2xvc2UgY2hhcignLycpXCIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnJzpcbiAgICAgICAgZXJyb3JIYW5kbGVyLmVycm9yKCd1bmV4cGVjdGVkIGVuZCBvZiBpbnB1dCcpO1xuICAgICAgICBpZiAocyA9PSBTX1RBRykge1xuICAgICAgICAgIGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LCBwKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICBjYXNlICc+JzpcbiAgICAgICAgc3dpdGNoIChzKSB7XG4gICAgICAgICAgY2FzZSBTX1RBRzpcbiAgICAgICAgICAgIGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LCBwKSk7XG4gICAgICAgICAgY2FzZSBTX0FUVFJfRU5EOlxuICAgICAgICAgIGNhc2UgU19UQUdfU1BBQ0U6XG4gICAgICAgICAgY2FzZSBTX1RBR19DTE9TRTpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgU19BVFRSX05PUVVPVF9WQUxVRTpcbiAgICAgICAgICBjYXNlIFNfQVRUUjpcbiAgICAgICAgICAgIHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LCBwKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zbGljZSgtMSkgPT09ICcvJykge1xuICAgICAgICAgICAgICBlbC5jbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFNfQVRUUl9TUEFDRTpcbiAgICAgICAgICAgIGlmIChzID09PSBTX0FUVFJfU1BBQ0UpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBhdHRyTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzID09IFNfQVRUUl9OT1FVT1RfVkFMVUUpIHtcbiAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicgKyB2YWx1ZSArICdcIiBtaXNzZWQgcXVvdChcIikhIScpO1xuICAgICAgICAgICAgICBlbC5hZGQoYXR0ck5hbWUsIHZhbHVlLnJlcGxhY2UoLyYjP1xcdys7L2csIGVudGl0eVJlcGxhY2VyKSwgc3RhcnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnROU01hcFsnJ10gIT09ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJyB8fCAhdmFsdWUubWF0Y2goL14oPzpkaXNhYmxlZHxjaGVja2VkfHNlbGVjdGVkKSQvaSkpIHtcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJyArIHZhbHVlICsgJ1wiIG1pc3NlZCB2YWx1ZSEhIFwiJyArIHZhbHVlICsgJ1wiIGluc3RlYWQhIScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsLmFkZCh2YWx1ZSwgdmFsdWUsIHN0YXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgU19FUTpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXR0cmlidXRlIHZhbHVlIG1pc3NlZCEhJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICBjYXNlIFwiXFx4ODBcIjpcbiAgICAgICAgYyA9ICcgJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChjIDw9ICcgJykge1xuICAgICAgICAgIHN3aXRjaCAocykge1xuICAgICAgICAgICAgY2FzZSBTX1RBRzpcbiAgICAgICAgICAgICAgZWwuc2V0VGFnTmFtZShzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApKTtcbiAgICAgICAgICAgICAgcyA9IFNfVEFHX1NQQUNFO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU19BVFRSOlxuICAgICAgICAgICAgICBhdHRyTmFtZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCk7XG4gICAgICAgICAgICAgIHMgPSBTX0FUVFJfU1BBQ0U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOlxuICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApLnJlcGxhY2UoLyYjP1xcdys7L2csIGVudGl0eVJlcGxhY2VyKTtcbiAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicgKyB2YWx1ZSArICdcIiBtaXNzZWQgcXVvdChcIikhIScpO1xuICAgICAgICAgICAgICBlbC5hZGQoYXR0ck5hbWUsIHZhbHVlLCBzdGFydCk7XG4gICAgICAgICAgICBjYXNlIFNfQVRUUl9FTkQ6XG4gICAgICAgICAgICAgIHMgPSBTX1RBR19TUEFDRTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXRjaCAocykge1xuICAgICAgICAgICAgY2FzZSBTX0FUVFJfU1BBQ0U6XG4gICAgICAgICAgICAgIHZhciB0YWdOYW1lID0gZWwudGFnTmFtZTtcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnROU01hcFsnJ10gIT09ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJyB8fCAhYXR0ck5hbWUubWF0Y2goL14oPzpkaXNhYmxlZHxjaGVja2VkfHNlbGVjdGVkKSQvaSkpIHtcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJyArIGF0dHJOYW1lICsgJ1wiIG1pc3NlZCB2YWx1ZSEhIFwiJyArIGF0dHJOYW1lICsgJ1wiIGluc3RlYWQyISEnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbC5hZGQoYXR0ck5hbWUsIGF0dHJOYW1lLCBzdGFydCk7XG4gICAgICAgICAgICAgIHN0YXJ0ID0gcDtcbiAgICAgICAgICAgICAgcyA9IFNfQVRUUjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNfQVRUUl9FTkQ6XG4gICAgICAgICAgICAgIGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgc3BhY2UgaXMgcmVxdWlyZWRcIicgKyBhdHRyTmFtZSArICdcIiEhJyk7XG4gICAgICAgICAgICBjYXNlIFNfVEFHX1NQQUNFOlxuICAgICAgICAgICAgICBzID0gU19BVFRSO1xuICAgICAgICAgICAgICBzdGFydCA9IHA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTX0VROlxuICAgICAgICAgICAgICBzID0gU19BVFRSX05PUVVPVF9WQUxVRTtcbiAgICAgICAgICAgICAgc3RhcnQgPSBwO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU19UQUdfQ0xPU0U6XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImVsZW1lbnRzIGNsb3NlZCBjaGFyYWN0ZXIgJy8nIGFuZCAnPicgbXVzdCBiZSBjb25uZWN0ZWQgdG9cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHArKztcbiAgfVxufVxuZnVuY3Rpb24gYXBwZW5kRWxlbWVudChlbCwgZG9tQnVpbGRlciwgY3VycmVudE5TTWFwKSB7XG4gIHZhciB0YWdOYW1lID0gZWwudGFnTmFtZTtcbiAgdmFyIGxvY2FsTlNNYXAgPSBudWxsO1xuICB2YXIgaSA9IGVsLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciBhID0gZWxbaV07XG4gICAgdmFyIHFOYW1lID0gYS5xTmFtZTtcbiAgICB2YXIgdmFsdWUgPSBhLnZhbHVlO1xuICAgIHZhciBuc3AgPSBxTmFtZS5pbmRleE9mKCc6Jyk7XG4gICAgaWYgKG5zcCA+IDApIHtcbiAgICAgIHZhciBwcmVmaXggPSBhLnByZWZpeCA9IHFOYW1lLnNsaWNlKDAsIG5zcCk7XG4gICAgICB2YXIgbG9jYWxOYW1lID0gcU5hbWUuc2xpY2UobnNwICsgMSk7XG4gICAgICB2YXIgbnNQcmVmaXggPSBwcmVmaXggPT09ICd4bWxucycgJiYgbG9jYWxOYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbE5hbWUgPSBxTmFtZTtcbiAgICAgIHByZWZpeCA9IG51bGw7XG4gICAgICBuc1ByZWZpeCA9IHFOYW1lID09PSAneG1sbnMnICYmICcnO1xuICAgIH1cbiAgICBhLmxvY2FsTmFtZSA9IGxvY2FsTmFtZTtcbiAgICBpZiAobnNQcmVmaXggIT09IGZhbHNlKSB7XG4gICAgICBpZiAobG9jYWxOU01hcCA9PSBudWxsKSB7XG4gICAgICAgIGxvY2FsTlNNYXAgPSB7fTtcbiAgICAgICAgX2NvcHkoY3VycmVudE5TTWFwLCBjdXJyZW50TlNNYXAgPSB7fSk7XG4gICAgICB9XG4gICAgICBjdXJyZW50TlNNYXBbbnNQcmVmaXhdID0gbG9jYWxOU01hcFtuc1ByZWZpeF0gPSB2YWx1ZTtcbiAgICAgIGEudXJpID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJztcbiAgICAgIGRvbUJ1aWxkZXIuc3RhcnRQcmVmaXhNYXBwaW5nKG5zUHJlZml4LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHZhciBpID0gZWwubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgYSA9IGVsW2ldO1xuICAgIHZhciBwcmVmaXggPSBhLnByZWZpeDtcbiAgICBpZiAocHJlZml4KSB7XG4gICAgICBpZiAocHJlZml4ID09PSAneG1sJykge1xuICAgICAgICBhLnVyaSA9ICdodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2UnO1xuICAgICAgfVxuICAgICAgaWYgKHByZWZpeCAhPT0gJ3htbG5zJykge1xuICAgICAgICBhLnVyaSA9IGN1cnJlbnROU01hcFtwcmVmaXggfHwgJyddO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgbnNwID0gdGFnTmFtZS5pbmRleE9mKCc6Jyk7XG4gIGlmIChuc3AgPiAwKSB7XG4gICAgcHJlZml4ID0gZWwucHJlZml4ID0gdGFnTmFtZS5zbGljZSgwLCBuc3ApO1xuICAgIGxvY2FsTmFtZSA9IGVsLmxvY2FsTmFtZSA9IHRhZ05hbWUuc2xpY2UobnNwICsgMSk7XG4gIH0gZWxzZSB7XG4gICAgcHJlZml4ID0gbnVsbDtcbiAgICBsb2NhbE5hbWUgPSBlbC5sb2NhbE5hbWUgPSB0YWdOYW1lO1xuICB9XG4gIHZhciBucyA9IGVsLnVyaSA9IGN1cnJlbnROU01hcFtwcmVmaXggfHwgJyddO1xuICBkb21CdWlsZGVyLnN0YXJ0RWxlbWVudChucywgbG9jYWxOYW1lLCB0YWdOYW1lLCBlbCk7XG4gIGlmIChlbC5jbG9zZWQpIHtcbiAgICBkb21CdWlsZGVyLmVuZEVsZW1lbnQobnMsIGxvY2FsTmFtZSwgdGFnTmFtZSk7XG4gICAgaWYgKGxvY2FsTlNNYXApIHtcbiAgICAgIGZvciAocHJlZml4IGluIGxvY2FsTlNNYXApIHtcbiAgICAgICAgZG9tQnVpbGRlci5lbmRQcmVmaXhNYXBwaW5nKHByZWZpeCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVsLmN1cnJlbnROU01hcCA9IGN1cnJlbnROU01hcDtcbiAgICBlbC5sb2NhbE5TTWFwID0gbG9jYWxOU01hcDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuZnVuY3Rpb24gcGFyc2VIdG1sU3BlY2lhbENvbnRlbnQoc291cmNlLCBlbFN0YXJ0RW5kLCB0YWdOYW1lLCBlbnRpdHlSZXBsYWNlciwgZG9tQnVpbGRlcikge1xuICBpZiAoL14oPzpzY3JpcHR8dGV4dGFyZWEpJC9pLnRlc3QodGFnTmFtZSkpIHtcbiAgICB2YXIgZWxFbmRTdGFydCA9IHNvdXJjZS5pbmRleE9mKCc8LycgKyB0YWdOYW1lICsgJz4nLCBlbFN0YXJ0RW5kKTtcbiAgICB2YXIgdGV4dCA9IHNvdXJjZS5zdWJzdHJpbmcoZWxTdGFydEVuZCArIDEsIGVsRW5kU3RhcnQpO1xuICAgIGlmICgvWyY8XS8udGVzdCh0ZXh0KSkge1xuICAgICAgaWYgKC9ec2NyaXB0JC9pLnRlc3QodGFnTmFtZSkpIHtcbiAgICAgICAgZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHRleHQsIDAsIHRleHQubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGVsRW5kU3RhcnQ7XG4gICAgICB9XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8mIz9cXHcrOy9nLCBlbnRpdHlSZXBsYWNlcik7XG4gICAgICBkb21CdWlsZGVyLmNoYXJhY3RlcnModGV4dCwgMCwgdGV4dC5sZW5ndGgpO1xuICAgICAgcmV0dXJuIGVsRW5kU3RhcnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBlbFN0YXJ0RW5kICsgMTtcbn1cbmZ1bmN0aW9uIGZpeFNlbGZDbG9zZWQoc291cmNlLCBlbFN0YXJ0RW5kLCB0YWdOYW1lLCBjbG9zZU1hcCkge1xuICB2YXIgcG9zID0gY2xvc2VNYXBbdGFnTmFtZV07XG4gIGlmIChwb3MgPT0gbnVsbCkge1xuICAgIHBvcyA9IHNvdXJjZS5sYXN0SW5kZXhPZignPC8nICsgdGFnTmFtZSArICc+Jyk7XG4gICAgaWYgKHBvcyA8IGVsU3RhcnRFbmQpIHtcbiAgICAgIHBvcyA9IHNvdXJjZS5sYXN0SW5kZXhPZignPC8nICsgdGFnTmFtZSk7XG4gICAgfVxuICAgIGNsb3NlTWFwW3RhZ05hbWVdID0gcG9zO1xuICB9XG4gIHJldHVybiBwb3MgPCBlbFN0YXJ0RW5kO1xufVxuZnVuY3Rpb24gX2NvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgZm9yICh2YXIgbiBpbiBzb3VyY2UpIHtcbiAgICB0YXJnZXRbbl0gPSBzb3VyY2Vbbl07XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlRENDKHNvdXJjZSwgc3RhcnQsIGRvbUJ1aWxkZXIsIGVycm9ySGFuZGxlcikge1xuICB2YXIgbmV4dCA9IHNvdXJjZS5jaGFyQXQoc3RhcnQgKyAyKTtcbiAgc3dpdGNoIChuZXh0KSB7XG4gICAgY2FzZSAnLSc6XG4gICAgICBpZiAoc291cmNlLmNoYXJBdChzdGFydCArIDMpID09PSAnLScpIHtcbiAgICAgICAgdmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCctLT4nLCBzdGFydCArIDQpO1xuICAgICAgICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICAgICAgICBkb21CdWlsZGVyLmNvbW1lbnQoc291cmNlLCBzdGFydCArIDQsIGVuZCAtIHN0YXJ0IC0gNCk7XG4gICAgICAgICAgcmV0dXJuIGVuZCArIDM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXJyb3JIYW5kbGVyLmVycm9yKFwiVW5jbG9zZWQgY29tbWVudFwiKTtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHNvdXJjZS5zdWJzdHIoc3RhcnQgKyAzLCA2KSA9PSAnQ0RBVEFbJykge1xuICAgICAgICB2YXIgZW5kID0gc291cmNlLmluZGV4T2YoJ11dPicsIHN0YXJ0ICsgOSk7XG4gICAgICAgIGRvbUJ1aWxkZXIuc3RhcnRDREFUQSgpO1xuICAgICAgICBkb21CdWlsZGVyLmNoYXJhY3RlcnMoc291cmNlLCBzdGFydCArIDksIGVuZCAtIHN0YXJ0IC0gOSk7XG4gICAgICAgIGRvbUJ1aWxkZXIuZW5kQ0RBVEEoKTtcbiAgICAgICAgcmV0dXJuIGVuZCArIDM7XG4gICAgICB9XG4gICAgICB2YXIgbWF0Y2hzID0gc3BsaXQoc291cmNlLCBzdGFydCk7XG4gICAgICB2YXIgbGVuID0gbWF0Y2hzLmxlbmd0aDtcbiAgICAgIGlmIChsZW4gPiAxICYmIC8hZG9jdHlwZS9pLnRlc3QobWF0Y2hzWzBdWzBdKSkge1xuICAgICAgICB2YXIgbmFtZSA9IG1hdGNoc1sxXVswXTtcbiAgICAgICAgdmFyIHB1YmlkID0gbGVuID4gMyAmJiAvXnB1YmxpYyQvaS50ZXN0KG1hdGNoc1syXVswXSkgJiYgbWF0Y2hzWzNdWzBdO1xuICAgICAgICB2YXIgc3lzaWQgPSBsZW4gPiA0ICYmIG1hdGNoc1s0XVswXTtcbiAgICAgICAgdmFyIGxhc3RNYXRjaCA9IG1hdGNoc1tsZW4gLSAxXTtcbiAgICAgICAgZG9tQnVpbGRlci5zdGFydERURChuYW1lLCBwdWJpZCAmJiBwdWJpZC5yZXBsYWNlKC9eKFsnXCJdKSguKj8pXFwxJC8sICckMicpLCBzeXNpZCAmJiBzeXNpZC5yZXBsYWNlKC9eKFsnXCJdKSguKj8pXFwxJC8sICckMicpKTtcbiAgICAgICAgZG9tQnVpbGRlci5lbmREVEQoKTtcbiAgICAgICAgcmV0dXJuIGxhc3RNYXRjaC5pbmRleCArIGxhc3RNYXRjaFswXS5sZW5ndGg7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gcGFyc2VJbnN0cnVjdGlvbihzb3VyY2UsIHN0YXJ0LCBkb21CdWlsZGVyKSB7XG4gIHZhciBlbmQgPSBzb3VyY2UuaW5kZXhPZignPz4nLCBzdGFydCk7XG4gIGlmIChlbmQpIHtcbiAgICB2YXIgbWF0Y2ggPSBzb3VyY2Uuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpLm1hdGNoKC9ePFxcPyhcXFMqKVxccyooW1xcc1xcU10qPylcXHMqJC8pO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgdmFyIGxlbiA9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIGRvbUJ1aWxkZXIucHJvY2Vzc2luZ0luc3RydWN0aW9uKG1hdGNoWzFdLCBtYXRjaFsyXSk7XG4gICAgICByZXR1cm4gZW5kICsgMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5mdW5jdGlvbiBFbGVtZW50QXR0cmlidXRlcyhzb3VyY2UpIHt9XG5FbGVtZW50QXR0cmlidXRlcy5wcm90b3R5cGUgPSB7XG4gIHNldFRhZ05hbWU6IGZ1bmN0aW9uIHNldFRhZ05hbWUodGFnTmFtZSkge1xuICAgIGlmICghdGFnTmFtZVBhdHRlcm4udGVzdCh0YWdOYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHRhZ05hbWU6JyArIHRhZ05hbWUpO1xuICAgIH1cbiAgICB0aGlzLnRhZ05hbWUgPSB0YWdOYW1lO1xuICB9LFxuICBhZGQ6IGZ1bmN0aW9uIGFkZChxTmFtZSwgdmFsdWUsIG9mZnNldCkge1xuICAgIGlmICghdGFnTmFtZVBhdHRlcm4udGVzdChxTmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBhdHRyaWJ1dGU6JyArIHFOYW1lKTtcbiAgICB9XG4gICAgdGhpc1t0aGlzLmxlbmd0aCsrXSA9IHtcbiAgICAgIHFOYW1lOiBxTmFtZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIG9mZnNldDogb2Zmc2V0XG4gICAgfTtcbiAgfSxcbiAgbGVuZ3RoOiAwLFxuICBnZXRMb2NhbE5hbWU6IGZ1bmN0aW9uIGdldExvY2FsTmFtZShpKSB7XG4gICAgcmV0dXJuIHRoaXNbaV0ubG9jYWxOYW1lO1xuICB9LFxuICBnZXRMb2NhdG9yOiBmdW5jdGlvbiBnZXRMb2NhdG9yKGkpIHtcbiAgICByZXR1cm4gdGhpc1tpXS5sb2NhdG9yO1xuICB9LFxuICBnZXRRTmFtZTogZnVuY3Rpb24gZ2V0UU5hbWUoaSkge1xuICAgIHJldHVybiB0aGlzW2ldLnFOYW1lO1xuICB9LFxuICBnZXRVUkk6IGZ1bmN0aW9uIGdldFVSSShpKSB7XG4gICAgcmV0dXJuIHRoaXNbaV0udXJpO1xuICB9LFxuICBnZXRWYWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoaSkge1xuICAgIHJldHVybiB0aGlzW2ldLnZhbHVlO1xuICB9XG59O1xuZnVuY3Rpb24gc3BsaXQoc291cmNlLCBzdGFydCkge1xuICB2YXIgbWF0Y2g7XG4gIHZhciBidWYgPSBbXTtcbiAgdmFyIHJlZyA9IC8nW14nXSsnfFwiW15cIl0rXCJ8W15cXHM8PlxcLz1dKz0/fChcXC8/XFxzKj58PCkvZztcbiAgcmVnLmxhc3RJbmRleCA9IHN0YXJ0O1xuICByZWcuZXhlYyhzb3VyY2UpO1xuICB3aGlsZSAobWF0Y2ggPSByZWcuZXhlYyhzb3VyY2UpKSB7XG4gICAgYnVmLnB1c2gobWF0Y2gpO1xuICAgIGlmIChtYXRjaFsxXSkgcmV0dXJuIGJ1ZjtcbiAgfVxufVxuZXhwb3J0cy5YTUxSZWFkZXIgPSBYTUxSZWFkZXI7XG5cbn0se31dfSx7fSxbNTldKTtcbiJdLCJmaWxlIjoid2ViLWFkYXB0ZXIuanMifQ==
