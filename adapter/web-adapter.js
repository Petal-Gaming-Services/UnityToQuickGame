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

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = {
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
  }
};
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var Audio = function (_HTMLAudioElement) {
  _inherits(Audio, _HTMLAudioElement);
  var _super = _createSuper(Audio);
  function Audio(url) {
    _classCallCheck(this, Audio);
    return _super.call(this, url);
  }
  return _createClass(Audio);
}(_HTMLAudioElement2["default"]);
exports["default"] = Audio;

},{"./HTMLAudioElement":15}],5:[function(require,module,exports){
(function (global){(function (){
"use strict";

var _util = _interopRequireDefault(require("../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DOMTokenList = function () {
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
exports["default"] = DOMTokenList;

},{}],7:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var DeviceMotionEvent = function (_Event) {
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
exports["default"] = DeviceMotionEvent;

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var Document = function (_Node) {
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
exports["default"] = Document;

},{"./Audio":4,"./FontFaceSet":13,"./HTMLAnchorElement":14,"./HTMLBodyElement":16,"./HTMLCanvasElement":17,"./HTMLElement":18,"./HTMLHeadElement":19,"./HTMLHtmlElement":20,"./HTMLInputElement":22,"./HTMLScriptElement":24,"./HTMLStyleElement":25,"./HTMLVideoElement":26,"./Node":32,"./NodeList":33,"./util/WeakMap":56}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Node2 = _interopRequireDefault(require("./Node"));
var _NodeList = _interopRequireDefault(require("./NodeList"));
var _DOMTokenList = _interopRequireDefault(require("./DOMToken\u200BList"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var Element = function (_Node) {
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
exports["default"] = Element;

},{"./DOMToken​List":6,"./Node":32,"./NodeList":33}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Event = function () {
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
exports["default"] = Event;
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var EventTarget = function () {
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
exports["default"] = EventTarget;

},{"./DeviceMotionEvent":7,"./TouchEvent":36,"./util/WeakMap":56}],12:[function(require,module,exports){
"use strict";

var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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

},{"./util/WeakMap":56}],13:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var FontFaceSet = function (_EventTarget) {
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
exports["default"] = FontFaceSet;

},{"./Event":10,"./EventTarget":11,"./util/WeakMap":56}],14:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var HTMLAnchorElement = function (_HTMLElement) {
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
exports["default"] = HTMLAnchorElement;

},{"./HTMLElement":18,"./util/WeakMap":56}],15:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var HTMLAudioElement = function (_HTMLMediaElement) {
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
exports["default"] = HTMLAudioElement;

},{"./Event":10,"./HTMLMediaElement":23,"./util/WeakMap":56}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var HTMLBodyElement = function (_HTMLElement) {
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
exports["default"] = HTMLBodyElement;

},{"./HTMLElement.js":18}],17:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var HTMLElement = function (_Element) {
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
exports["default"] = HTMLElement;

},{"./Element":9}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var HTMLHeadElement = function (_HTMLElement) {
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
exports["default"] = HTMLHeadElement;

},{"./HTMLElement.js":18}],20:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var HTMLHtmlElement = function (_HTMLElement) {
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
exports["default"] = HTMLHtmlElement;

},{"./HTMLElement":18}],21:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var HTMLInputElement = function (_HTMLElement) {
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
exports["default"] = HTMLInputElement;

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var HTMLMediaElement = function (_HTMLElement) {
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
exports["default"] = HTMLMediaElement;

},{"./HTMLElement":18,"./MediaError":30,"./util/WeakMap":56}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
var _Event = _interopRequireDefault(require("./Event"));
var _FileCache = _interopRequireDefault(require("./util/FileCache"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var HTMLScriptElement = function (_HTMLElement) {
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
exports["default"] = HTMLScriptElement;
Object.defineProperty(HTMLScriptElement.prototype, "noModule", {
  get: function get() {
    throw new TypeError(message, "Illegal invocation");
  },
  set: function set(value) {
    throw new TypeError(message, "Illegal invocation");
  }
});

},{"./Event":10,"./HTMLElement":18,"./util/FileCache":55}],25:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var HTMLStyleElement = function (_HTMLElement) {
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
exports["default"] = HTMLStyleElement;

},{"./FontFace":12,"./HTMLElement":18}],26:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var HTMLVideoElement = function (_HTMLMediaElement) {
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
exports["default"] = HTMLVideoElement;

},{"./HTMLMediaElement":23}],27:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Location = function () {
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
exports["default"] = Location;

},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MEDIA_ERR_ABORTED = 1;
var MEDIA_ERR_NETWORK = 2;
var MEDIA_ERR_DECODE = 3;
var MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
var MediaError = function () {
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
exports["default"] = MediaError;
module.exports = MediaError;

},{}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Navigator = _createClass(function Navigator(platform, language) {
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
exports["default"] = Navigator;

},{}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventTarget2 = _interopRequireDefault(require("./EventTarget"));
var _Event = _interopRequireDefault(require("./Event"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var Node = function (_EventTarget) {
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
exports["default"] = Node;

},{"./Event":10,"./EventTarget":11}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var NodeList = function () {
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
exports["default"] = NodeList;

},{"./util/WeakMap":56}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ScreenOrientation = _interopRequireDefault(require("./ScreenOrientation"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
window.ral = window.ral || {};
var Screen = function () {
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
exports["default"] = Screen;

},{"./ScreenOrientation":35}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventTarget2 = _interopRequireDefault(require("./EventTarget"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var ScreenOrientation = function (_EventTarget) {
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
exports["default"] = ScreenOrientation;

},{"./EventTarget":11}],36:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var TouchEvent = function (_Event) {
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
exports["default"] = TouchEvent;

},{"./Event":10}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Event = _interopRequireDefault(require("./Event"));
var _FileCache = _interopRequireDefault(require("./util/FileCache"));
var _XMLHttpRequestEventTarget = _interopRequireDefault(require("./XMLHttpRequestEventTarget"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var XMLHttpRequest = function (_XMLHttpRequestEventT) {
  _inherits(XMLHttpRequest, _XMLHttpRequestEventT);
  var _super = _createSuper(XMLHttpRequest);
  function XMLHttpRequest() {
    var _this;
    _classCallCheck(this, XMLHttpRequest);
    _this = _super.call(this, new _XMLHttpRequest());
    _defineProperty(_assertThisInitialized(_this), "_isLocal", false);
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
      if (this._isLocal) {
        return this._readyState;
      } else {
        return this._xhr.readyState;
      }
    }
  }, {
    key: "response",
    get: function get() {
      var response = this._isLocal ? this._response : this._xhr.response;
      var result = this._responseType === "blob" ? new Blob([response]) : response;
      return result;
    }
  }, {
    key: "responseText",
    get: function get() {
      if (this._isLocal) {
        return this._responseText;
      } else {
        return this._xhr.responseText;
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
      if (this._isLocal) {
        return this._responseURL;
      } else {
        return this._xhr.responseURL;
      }
    }
  }, {
    key: "responseXML",
    get: function get() {
      if (this._isLocal) {
        return this._responseXML;
      } else {
        return this._xhr.responseXML;
      }
    }
  }, {
    key: "status",
    get: function get() {
      if (this._isLocal) {
        return this._status;
      } else {
        return this._xhr.status;
      }
    }
  }, {
    key: "statusText",
    get: function get() {
      if (this._isLocal) {
        return this._statusText;
      } else {
        return this._xhr.statusText;
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
      if (typeof url === "string") {
        var _url = url.toLocaleString();
        if (_url.startsWith("http://") || _url.startsWith("https://")) {
          var _this$_xhr;
          this._isLocal = false;
          return (_this$_xhr = this._xhr).open.apply(_this$_xhr, arguments);
        }
      }
      this._isLocal = true;
      this._url = url;
      if (this._readyState != 1) {
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
        var _this$_xhr3;
        (_this$_xhr3 = this._xhr).send.apply(_this$_xhr3, arguments);
      }
    }
  }, {
    key: "setRequestHeader",
    value: function setRequestHeader() {
      var _this$_xhr4;
      (_this$_xhr4 = this._xhr).setRequestHeader.apply(_this$_xhr4, arguments);
    }
  }]);
  return XMLHttpRequest;
}(_XMLHttpRequestEventTarget["default"]);
exports["default"] = XMLHttpRequest;

},{"./Event":10,"./XMLHttpRequestEventTarget":38,"./util/FileCache":55}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventTarget2 = _interopRequireDefault(require("./EventTarget"));
var _Event = _interopRequireDefault(require("./Event"));
var _FileCache = _interopRequireDefault(require("./util/FileCache"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var XMLHttpRequestEventTarget = function (_EventTarget) {
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
        _FileCache["default"].setItem(this.response, this._url);
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
exports["default"] = XMLHttpRequestEventTarget;

},{"./Event":10,"./EventTarget":11,"./util/FileCache":55}],39:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = AnalyserNode;
exports["default"] = _default;

},{"./AudioNode":45}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _FileCache = _interopRequireDefault(require("../util/FileCache"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = AudioBuffer;
exports["default"] = _default;

},{"../util/FileCache":55}],41:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = AudioBufferSourceNode;
exports["default"] = _default;

},{"../util/WeakMap":56,"./AudioNode":45,"./AudioParam":46}],42:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = AudioContext;
exports["default"] = _default;

},{"../util/WeakMap":56,"./BaseAudioContext":48,"./MediaElementAudioSourceNode":51}],43:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = AudioDestinationNode;
exports["default"] = _default;

},{"./AudioNode":45}],44:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = AudioListener;
exports["default"] = _default;

},{"./AudioNode":45,"./AudioParam":46}],45:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = AudioNode;
exports["default"] = _default;

},{"../EventTarget":11}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = AudioParam;
exports["default"] = _default;

},{}],47:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = AudioScheduledSourceNode;
exports["default"] = _default;

},{"./AudioNode":45}],48:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = BaseAudioContext;
exports["default"] = _default;

},{"../EventTarget":11,"../util/WeakMap":56,"./AnalyserNode":39,"./AudioBuffer":40,"./AudioBufferSourceNode":41,"./AudioDestinationNode":43,"./AudioListener":44,"./DynamicsCompressorNode":49,"./GainNode":50,"./OscillatorNode":52,"./PannerNode":53,"./PeriodicWave":54}],49:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = DynamicsCompressorNode;
exports["default"] = _default;

},{"./AudioNode":45,"./AudioParam":46}],50:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = GainNode;
exports["default"] = _default;

},{"./AudioNode":45,"./AudioParam":46}],51:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = MediaElementAudioSourceNode;
exports["default"] = _default;

},{"./AudioNode":45}],52:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = OscillatorNode;
exports["default"] = _default;

},{"./AudioParam":46,"./AudioScheduledSourceNode":47}],53:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = PannerNode;
exports["default"] = _default;

},{"./AudioNode":45,"./AudioParam":46}],54:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = PeriodicWave;
exports["default"] = _default;

},{}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _default = new FileCache();
exports["default"] = _default;

},{"../../lib/md5.min":2}],56:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = new WeakMap();
exports["default"] = _default;

},{}],57:[function(require,module,exports){
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

},{"../lib/base64.min.js":1,"./Audio":4,"./Blob.js":5,"./DeviceMotionEvent":7,"./Document":8,"./Event":10,"./EventTarget":11,"./FontFace":12,"./FontFaceSet":13,"./HTMLAudioElement":15,"./HTMLCanvasElement":17,"./HTMLElement":18,"./HTMLImageElement":21,"./HTMLScriptElement":24,"./HTMLVideoElement":26,"./Image":27,"./Location":29,"./Navigator":31,"./Screen":34,"./TouchEvent":36,"./XMLHttpRequest":37,"./audioContext/AudioContext":42,"./xmldom/dom-parser.js":58}],58:[function(require,module,exports){
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

},{"./dom":59,"./entities":60,"./sax":61}],59:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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

},{}],60:[function(require,module,exports){
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

},{}],61:[function(require,module,exports){
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

},{}]},{},[57]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ3ZWItYWRhcHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG4hZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBlKGUpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBlO1xuICB9XG4gIHZhciB0ID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZXhwb3J0cyA/IGV4cG9ydHMgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6ICQuZ2xvYmFsLFxuICAgIHIgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCI7XG4gIGUucHJvdG90eXBlID0gbmV3IEVycm9yKCksIGUucHJvdG90eXBlLm5hbWUgPSBcIkludmFsaWRDaGFyYWN0ZXJFcnJvclwiLCB0LmJ0b2EgfHwgKHQuYnRvYSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgZm9yICh2YXIgbywgbiwgYSA9IFN0cmluZyh0KSwgaSA9IDAsIGYgPSByLCBjID0gXCJcIjsgYS5jaGFyQXQoMCB8IGkpIHx8IChmID0gXCI9XCIsIGkgJSAxKTsgYyArPSBmLmNoYXJBdCg2MyAmIG8gPj4gOCAtIGkgJSAxICogOCkpIHtcbiAgICAgIGlmIChuID0gYS5jaGFyQ29kZUF0KGkgKz0gLjc1KSwgbiA+IDI1NSkgdGhyb3cgbmV3IGUoXCInYnRvYScgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGVuY29kZWQgY29udGFpbnMgY2hhcmFjdGVycyBvdXRzaWRlIG9mIHRoZSBMYXRpbjEgcmFuZ2UuXCIpO1xuICAgICAgbyA9IG8gPDwgOCB8IG47XG4gICAgfVxuICAgIHJldHVybiBjO1xuICB9KSwgdC5hdG9iIHx8ICh0LmF0b2IgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBvID0gU3RyaW5nKHQpLnJlcGxhY2UoL1s9XSskLywgXCJcIik7XG4gICAgaWYgKG8ubGVuZ3RoICUgNCA9PSAxKSB0aHJvdyBuZXcgZShcIidhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpO1xuICAgIGZvciAodmFyIG4sIGEsIGkgPSAwLCBmID0gMCwgYyA9IFwiXCI7IGEgPSBvLmNoYXJBdChmKyspOyB+YSAmJiAobiA9IGkgJSA0ID8gNjQgKiBuICsgYSA6IGEsIGkrKyAlIDQpID8gYyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSAmIG4gPj4gKC0yICogaSAmIDYpKSA6IDApIGEgPSByLmluZGV4T2YoYSk7XG4gICAgcmV0dXJuIGM7XG4gIH0pO1xufSgpO1xuXG59LHt9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG4hZnVuY3Rpb24gKG4pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgZnVuY3Rpb24gdChuLCB0KSB7XG4gICAgdmFyIHIgPSAoNjU1MzUgJiBuKSArICg2NTUzNSAmIHQpO1xuICAgIHJldHVybiAobiA+PiAxNikgKyAodCA+PiAxNikgKyAociA+PiAxNikgPDwgMTYgfCA2NTUzNSAmIHI7XG4gIH1cbiAgZnVuY3Rpb24gcihuLCB0KSB7XG4gICAgcmV0dXJuIG4gPDwgdCB8IG4gPj4+IDMyIC0gdDtcbiAgfVxuICBmdW5jdGlvbiBlKG4sIGUsIG8sIHUsIGMsIGYpIHtcbiAgICByZXR1cm4gdChyKHQodChlLCBuKSwgdCh1LCBmKSksIGMpLCBvKTtcbiAgfVxuICBmdW5jdGlvbiBvKG4sIHQsIHIsIG8sIHUsIGMsIGYpIHtcbiAgICByZXR1cm4gZSh0ICYgciB8IH50ICYgbywgbiwgdCwgdSwgYywgZik7XG4gIH1cbiAgZnVuY3Rpb24gdShuLCB0LCByLCBvLCB1LCBjLCBmKSB7XG4gICAgcmV0dXJuIGUodCAmIG8gfCByICYgfm8sIG4sIHQsIHUsIGMsIGYpO1xuICB9XG4gIGZ1bmN0aW9uIGMobiwgdCwgciwgbywgdSwgYywgZikge1xuICAgIHJldHVybiBlKHQgXiByIF4gbywgbiwgdCwgdSwgYywgZik7XG4gIH1cbiAgZnVuY3Rpb24gZihuLCB0LCByLCBvLCB1LCBjLCBmKSB7XG4gICAgcmV0dXJuIGUociBeICh0IHwgfm8pLCBuLCB0LCB1LCBjLCBmKTtcbiAgfVxuICBmdW5jdGlvbiBpKG4sIHIpIHtcbiAgICBuW3IgPj4gNV0gfD0gMTI4IDw8IHIgJSAzMiwgblsxNCArIChyICsgNjQgPj4+IDkgPDwgNCldID0gcjtcbiAgICB2YXIgZSxcbiAgICAgIGksXG4gICAgICBhLFxuICAgICAgZCxcbiAgICAgIGgsXG4gICAgICBsID0gMTczMjU4NDE5MyxcbiAgICAgIGcgPSAtMjcxNzMzODc5LFxuICAgICAgdiA9IC0xNzMyNTg0MTk0LFxuICAgICAgbSA9IDI3MTczMzg3ODtcbiAgICBmb3IgKGUgPSAwOyBlIDwgbi5sZW5ndGg7IGUgKz0gMTYpIGkgPSBsLCBhID0gZywgZCA9IHYsIGggPSBtLCBnID0gZihnID0gZihnID0gZihnID0gZihnID0gYyhnID0gYyhnID0gYyhnID0gYyhnID0gdShnID0gdShnID0gdShnID0gdShnID0gbyhnID0gbyhnID0gbyhnID0gbyhnLCB2ID0gbyh2LCBtID0gbyhtLCBsID0gbyhsLCBnLCB2LCBtLCBuW2VdLCA3LCAtNjgwODc2OTM2KSwgZywgdiwgbltlICsgMV0sIDEyLCAtMzg5NTY0NTg2KSwgbCwgZywgbltlICsgMl0sIDE3LCA2MDYxMDU4MTkpLCBtLCBsLCBuW2UgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKSwgdiA9IG8odiwgbSA9IG8obSwgbCA9IG8obCwgZywgdiwgbSwgbltlICsgNF0sIDcsIC0xNzY0MTg4OTcpLCBnLCB2LCBuW2UgKyA1XSwgMTIsIDEyMDAwODA0MjYpLCBsLCBnLCBuW2UgKyA2XSwgMTcsIC0xNDczMjMxMzQxKSwgbSwgbCwgbltlICsgN10sIDIyLCAtNDU3MDU5ODMpLCB2ID0gbyh2LCBtID0gbyhtLCBsID0gbyhsLCBnLCB2LCBtLCBuW2UgKyA4XSwgNywgMTc3MDAzNTQxNiksIGcsIHYsIG5bZSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpLCBsLCBnLCBuW2UgKyAxMF0sIDE3LCAtNDIwNjMpLCBtLCBsLCBuW2UgKyAxMV0sIDIyLCAtMTk5MDQwNDE2MiksIHYgPSBvKHYsIG0gPSBvKG0sIGwgPSBvKGwsIGcsIHYsIG0sIG5bZSArIDEyXSwgNywgMTgwNDYwMzY4MiksIGcsIHYsIG5bZSArIDEzXSwgMTIsIC00MDM0MTEwMSksIGwsIGcsIG5bZSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKSwgbSwgbCwgbltlICsgMTVdLCAyMiwgMTIzNjUzNTMyOSksIHYgPSB1KHYsIG0gPSB1KG0sIGwgPSB1KGwsIGcsIHYsIG0sIG5bZSArIDFdLCA1LCAtMTY1Nzk2NTEwKSwgZywgdiwgbltlICsgNl0sIDksIC0xMDY5NTAxNjMyKSwgbCwgZywgbltlICsgMTFdLCAxNCwgNjQzNzE3NzEzKSwgbSwgbCwgbltlXSwgMjAsIC0zNzM4OTczMDIpLCB2ID0gdSh2LCBtID0gdShtLCBsID0gdShsLCBnLCB2LCBtLCBuW2UgKyA1XSwgNSwgLTcwMTU1ODY5MSksIGcsIHYsIG5bZSArIDEwXSwgOSwgMzgwMTYwODMpLCBsLCBnLCBuW2UgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KSwgbSwgbCwgbltlICsgNF0sIDIwLCAtNDA1NTM3ODQ4KSwgdiA9IHUodiwgbSA9IHUobSwgbCA9IHUobCwgZywgdiwgbSwgbltlICsgOV0sIDUsIDU2ODQ0NjQzOCksIGcsIHYsIG5bZSArIDE0XSwgOSwgLTEwMTk4MDM2OTApLCBsLCBnLCBuW2UgKyAzXSwgMTQsIC0xODczNjM5NjEpLCBtLCBsLCBuW2UgKyA4XSwgMjAsIDExNjM1MzE1MDEpLCB2ID0gdSh2LCBtID0gdShtLCBsID0gdShsLCBnLCB2LCBtLCBuW2UgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KSwgZywgdiwgbltlICsgMl0sIDksIC01MTQwMzc4NCksIGwsIGcsIG5bZSArIDddLCAxNCwgMTczNTMyODQ3MyksIG0sIGwsIG5bZSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KSwgdiA9IGModiwgbSA9IGMobSwgbCA9IGMobCwgZywgdiwgbSwgbltlICsgNV0sIDQsIC0zNzg1NTgpLCBnLCB2LCBuW2UgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKSwgbCwgZywgbltlICsgMTFdLCAxNiwgMTgzOTAzMDU2MiksIG0sIGwsIG5bZSArIDE0XSwgMjMsIC0zNTMwOTU1NiksIHYgPSBjKHYsIG0gPSBjKG0sIGwgPSBjKGwsIGcsIHYsIG0sIG5bZSArIDFdLCA0LCAtMTUzMDk5MjA2MCksIGcsIHYsIG5bZSArIDRdLCAxMSwgMTI3Mjg5MzM1MyksIGwsIGcsIG5bZSArIDddLCAxNiwgLTE1NTQ5NzYzMiksIG0sIGwsIG5bZSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKSwgdiA9IGModiwgbSA9IGMobSwgbCA9IGMobCwgZywgdiwgbSwgbltlICsgMTNdLCA0LCA2ODEyNzkxNzQpLCBnLCB2LCBuW2VdLCAxMSwgLTM1ODUzNzIyMiksIGwsIGcsIG5bZSArIDNdLCAxNiwgLTcyMjUyMTk3OSksIG0sIGwsIG5bZSArIDZdLCAyMywgNzYwMjkxODkpLCB2ID0gYyh2LCBtID0gYyhtLCBsID0gYyhsLCBnLCB2LCBtLCBuW2UgKyA5XSwgNCwgLTY0MDM2NDQ4NyksIGcsIHYsIG5bZSArIDEyXSwgMTEsIC00MjE4MTU4MzUpLCBsLCBnLCBuW2UgKyAxNV0sIDE2LCA1MzA3NDI1MjApLCBtLCBsLCBuW2UgKyAyXSwgMjMsIC05OTUzMzg2NTEpLCB2ID0gZih2LCBtID0gZihtLCBsID0gZihsLCBnLCB2LCBtLCBuW2VdLCA2LCAtMTk4NjMwODQ0KSwgZywgdiwgbltlICsgN10sIDEwLCAxMTI2ODkxNDE1KSwgbCwgZywgbltlICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpLCBtLCBsLCBuW2UgKyA1XSwgMjEsIC01NzQzNDA1NSksIHYgPSBmKHYsIG0gPSBmKG0sIGwgPSBmKGwsIGcsIHYsIG0sIG5bZSArIDEyXSwgNiwgMTcwMDQ4NTU3MSksIGcsIHYsIG5bZSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpLCBsLCBnLCBuW2UgKyAxMF0sIDE1LCAtMTA1MTUyMyksIG0sIGwsIG5bZSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpLCB2ID0gZih2LCBtID0gZihtLCBsID0gZihsLCBnLCB2LCBtLCBuW2UgKyA4XSwgNiwgMTg3MzMxMzM1OSksIGcsIHYsIG5bZSArIDE1XSwgMTAsIC0zMDYxMTc0NCksIGwsIGcsIG5bZSArIDZdLCAxNSwgLTE1NjAxOTgzODApLCBtLCBsLCBuW2UgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KSwgdiA9IGYodiwgbSA9IGYobSwgbCA9IGYobCwgZywgdiwgbSwgbltlICsgNF0sIDYsIC0xNDU1MjMwNzApLCBnLCB2LCBuW2UgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSksIGwsIGcsIG5bZSArIDJdLCAxNSwgNzE4Nzg3MjU5KSwgbSwgbCwgbltlICsgOV0sIDIxLCAtMzQzNDg1NTUxKSwgbCA9IHQobCwgaSksIGcgPSB0KGcsIGEpLCB2ID0gdCh2LCBkKSwgbSA9IHQobSwgaCk7XG4gICAgcmV0dXJuIFtsLCBnLCB2LCBtXTtcbiAgfVxuICBmdW5jdGlvbiBhKG4pIHtcbiAgICB2YXIgdCxcbiAgICAgIHIgPSBcIlwiLFxuICAgICAgZSA9IDMyICogbi5sZW5ndGg7XG4gICAgZm9yICh0ID0gMDsgdCA8IGU7IHQgKz0gOCkgciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5bdCA+PiA1XSA+Pj4gdCAlIDMyICYgMjU1KTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBmdW5jdGlvbiBkKG4pIHtcbiAgICB2YXIgdCxcbiAgICAgIHIgPSBbXTtcbiAgICBmb3IgKHJbKG4ubGVuZ3RoID4+IDIpIC0gMV0gPSB2b2lkIDAsIHQgPSAwOyB0IDwgci5sZW5ndGg7IHQgKz0gMSkgclt0XSA9IDA7XG4gICAgdmFyIGUgPSA4ICogbi5sZW5ndGg7XG4gICAgZm9yICh0ID0gMDsgdCA8IGU7IHQgKz0gOCkgclt0ID4+IDVdIHw9ICgyNTUgJiBuLmNoYXJDb2RlQXQodCAvIDgpKSA8PCB0ICUgMzI7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgZnVuY3Rpb24gaChuKSB7XG4gICAgcmV0dXJuIGEoaShkKG4pLCA4ICogbi5sZW5ndGgpKTtcbiAgfVxuICBmdW5jdGlvbiBsKG4sIHQpIHtcbiAgICB2YXIgcixcbiAgICAgIGUsXG4gICAgICBvID0gZChuKSxcbiAgICAgIHUgPSBbXSxcbiAgICAgIGMgPSBbXTtcbiAgICBmb3IgKHVbMTVdID0gY1sxNV0gPSB2b2lkIDAsIG8ubGVuZ3RoID4gMTYgJiYgKG8gPSBpKG8sIDggKiBuLmxlbmd0aCkpLCByID0gMDsgciA8IDE2OyByICs9IDEpIHVbcl0gPSA5MDk1MjI0ODYgXiBvW3JdLCBjW3JdID0gMTU0OTU1NjgyOCBeIG9bcl07XG4gICAgcmV0dXJuIGUgPSBpKHUuY29uY2F0KGQodCkpLCA1MTIgKyA4ICogdC5sZW5ndGgpLCBhKGkoYy5jb25jYXQoZSksIDY0MCkpO1xuICB9XG4gIGZ1bmN0aW9uIGcobikge1xuICAgIHZhciB0LFxuICAgICAgcixcbiAgICAgIGUgPSBcIlwiO1xuICAgIGZvciAociA9IDA7IHIgPCBuLmxlbmd0aDsgciArPSAxKSB0ID0gbi5jaGFyQ29kZUF0KHIpLCBlICs9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiLmNoYXJBdCh0ID4+PiA0ICYgMTUpICsgXCIwMTIzNDU2Nzg5YWJjZGVmXCIuY2hhckF0KDE1ICYgdCk7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgZnVuY3Rpb24gdihuKSB7XG4gICAgcmV0dXJuIHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChuKSk7XG4gIH1cbiAgZnVuY3Rpb24gbShuKSB7XG4gICAgcmV0dXJuIGgodihuKSk7XG4gIH1cbiAgZnVuY3Rpb24gcChuKSB7XG4gICAgcmV0dXJuIGcobShuKSk7XG4gIH1cbiAgZnVuY3Rpb24gcyhuLCB0KSB7XG4gICAgcmV0dXJuIGwodihuKSwgdih0KSk7XG4gIH1cbiAgZnVuY3Rpb24gQyhuLCB0KSB7XG4gICAgcmV0dXJuIGcocyhuLCB0KSk7XG4gIH1cbiAgZnVuY3Rpb24gQShuLCB0LCByKSB7XG4gICAgcmV0dXJuIHQgPyByID8gcyh0LCBuKSA6IEModCwgbikgOiByID8gbShuKSA6IHAobik7XG4gIH1cbiAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEE7XG4gIH0pIDogXCJvYmplY3RcIiA9PSAodHlwZW9mIG1vZHVsZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG1vZHVsZSkpICYmIG1vZHVsZS5leHBvcnRzID8gbW9kdWxlLmV4cG9ydHMgPSBBIDogbi5tZDUgPSBBO1xufSh2b2lkIDApO1xuXG59LHt9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSB7XG4gIGFycmF5YnVmZmVyVG9TdHJpbmc6IGZ1bmN0aW9uIGFycmF5YnVmZmVyVG9TdHJpbmcoYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgYnl0ZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuICAgIHZhciBzdHIgPSBbXTtcbiAgICBzdHIubGVuZ3RoID0gYnl0ZUFycmF5Lmxlbmd0aDtcbiAgICB2YXIgY3VycmVudFN0ckluZGV4ID0gMDtcbiAgICB2YXIgY3VycmVuU3RyQ29kZSA9IDA7XG4gICAgdmFyIGZpcnN0Qnl0ZUNvZGUgPSAwO1xuICAgIHZhciBhcnJheUxlbmd0aCA9IGJ5dGVBcnJheS5sZW5ndGg7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBmaXJzdEJ5dGVDb2RlID0gYnl0ZUFycmF5W2luZGV4XTtcbiAgICAgIGlmIChmaXJzdEJ5dGVDb2RlID4gMjUxICYmIGZpcnN0Qnl0ZUNvZGUgPCAyNTQgJiYgaW5kZXggKyA1IDwgYXJyYXlMZW5ndGgpIHtcbiAgICAgICAgY3VycmVuU3RyQ29kZSA9IChmaXJzdEJ5dGVDb2RlIC0gMjUyKSAqIDEwNzM3NDE4MjQgKyAoYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4IDw8IDI0KSArIChieXRlQXJyYXlbKytpbmRleF0gLSAxMjggPDwgMTgpICsgKGJ5dGVBcnJheVsrK2luZGV4XSAtIDEyOCA8PCAxMikgKyAoYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4IDw8IDYpICsgYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4O1xuICAgICAgfSBlbHNlIGlmIChmaXJzdEJ5dGVDb2RlID4gMjQ3ICYmIGZpcnN0Qnl0ZUNvZGUgPCAyNTIgJiYgaW5kZXggKyA0IDwgYXJyYXlMZW5ndGgpIHtcbiAgICAgICAgY3VycmVuU3RyQ29kZSA9IChmaXJzdEJ5dGVDb2RlIC0gMjQ4IDw8IDI0KSArIChieXRlQXJyYXlbKytpbmRleF0gLSAxMjggPDwgMTgpICsgKGJ5dGVBcnJheVsrK2luZGV4XSAtIDEyOCA8PCAxMikgKyAoYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4IDw8IDYpICsgYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4O1xuICAgICAgfSBlbHNlIGlmIChmaXJzdEJ5dGVDb2RlID4gMjM5ICYmIGZpcnN0Qnl0ZUNvZGUgPCAyNDggJiYgaW5kZXggKyAzIDwgYXJyYXlMZW5ndGgpIHtcbiAgICAgICAgY3VycmVuU3RyQ29kZSA9IChmaXJzdEJ5dGVDb2RlIC0gMjQwIDw8IDE4KSArIChieXRlQXJyYXlbKytpbmRleF0gLSAxMjggPDwgMTIpICsgKGJ5dGVBcnJheVsrK2luZGV4XSAtIDEyOCA8PCA2KSArIGJ5dGVBcnJheVsrK2luZGV4XSAtIDEyODtcbiAgICAgIH0gZWxzZSBpZiAoZmlyc3RCeXRlQ29kZSA+IDIyMyAmJiBmaXJzdEJ5dGVDb2RlIDwgMjQwICYmIGluZGV4ICsgMiA8IGFycmF5TGVuZ3RoKSB7XG4gICAgICAgIGN1cnJlblN0ckNvZGUgPSAoZmlyc3RCeXRlQ29kZSAtIDIyNCA8PCAxMikgKyAoYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4IDw8IDYpICsgYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4O1xuICAgICAgfSBlbHNlIGlmIChmaXJzdEJ5dGVDb2RlID4gMTkxICYmIGZpcnN0Qnl0ZUNvZGUgPCAyMjQgJiYgaW5kZXggKyAxIDwgYXJyYXlMZW5ndGgpIHtcbiAgICAgICAgY3VycmVuU3RyQ29kZSA9IChmaXJzdEJ5dGVDb2RlIC0gMTkyIDw8IDYpICsgYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVuU3RyQ29kZSA9IGZpcnN0Qnl0ZUNvZGU7XG4gICAgICB9XG4gICAgICBzdHJbY3VycmVudFN0ckluZGV4KytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShjdXJyZW5TdHJDb2RlKTtcbiAgICB9XG4gICAgc3RyLmxlbmd0aCA9IGN1cnJlbnRTdHJJbmRleDtcbiAgICByZXR1cm4gc3RyLmpvaW4oJycpO1xuICB9LFxuICBzdHJpbmdUb0FycmF5YnVmZmVyOiBmdW5jdGlvbiBzdHJpbmdUb0FycmF5YnVmZmVyKHN0cmluZykge1xuICAgIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuICAgIHZhciBieXRlQXJyYXkgPSBuZXcgQXJyYXkoNiAqIGxlbmd0aCk7XG4gICAgdmFyIGFjdHVhbExlbmd0aCA9IDA7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpbmRleCk7XG4gICAgICBpZiAoY29kZSA8IDB4ODApIHtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IGNvZGU7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPCAweDgwMCkge1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTkyICsgKGNvZGUgPj4+IDYpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgJiA2Myk7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPCAweDEwMDAwKSB7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAyMjQgKyAoY29kZSA+Pj4gMTIpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgPj4+IDYgJiA2Myk7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSAmIDYzKTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4MjAwMDAwKSB7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAyNDAgKyAoY29kZSA+Pj4gMTgpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgPj4+IDEyICYgNjMpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgPj4+IDYgJiA2Myk7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSAmIDYzKTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4NDAwMDAwMCkge1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMjQ4ICsgKGNvZGUgPj4+IDI0KTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlID4+PiAxOCAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlID4+PiAxMiAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlID4+PiA2ICYgNjMpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgJiA2Myk7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPCAweDQwMDAwMDApIHtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDI1MiArIChjb2RlID4+PiAzMCk7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSA+Pj4gMjQgJiA2Myk7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSA+Pj4gMTggJiA2Myk7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSA+Pj4gMTIgJiA2Myk7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSA+Pj4gNiAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlICYgNjMpO1xuICAgICAgfVxuICAgIH1cbiAgICBieXRlQXJyYXkubGVuZ3RoID0gYWN0dWFsTGVuZ3RoO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShieXRlQXJyYXkpLmJ1ZmZlcjtcbiAgfVxufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se31dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfSFRNTEF1ZGlvRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxBdWRpb0VsZW1lbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG52YXIgQXVkaW8gPSBmdW5jdGlvbiAoX0hUTUxBdWRpb0VsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEF1ZGlvLCBfSFRNTEF1ZGlvRWxlbWVudCk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQXVkaW8pO1xuICBmdW5jdGlvbiBBdWRpbyh1cmwpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW8pO1xuICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCB1cmwpO1xuICB9XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoQXVkaW8pO1xufShfSFRNTEF1ZGlvRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQXVkaW87XG5cbn0se1wiLi9IVE1MQXVkaW9FbGVtZW50XCI6MTV9XSw1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAoZ2xvYmFsKXsoZnVuY3Rpb24gKCl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbihmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIChmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgZGVmaW5lKFtcImV4cG9ydHNcIl0sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBleHBvcnRzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZXhwb3J0cykpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBleHBvcnRzLm5vZGVOYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICBmYWN0b3J5KGV4cG9ydHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmYWN0b3J5KGdsb2JhbCk7XG4gICAgfVxuICB9KShmdW5jdGlvbiAoZXhwb3J0cykge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgZXhwb3J0cy5VUkwgPSBnbG9iYWwuVVJMIHx8IGdsb2JhbC53ZWJraXRVUkw7XG4gICAgaWYgKGdsb2JhbC5CbG9iICYmIGdsb2JhbC5VUkwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIHZhciBCbG9iQnVpbGRlciA9IGdsb2JhbC5CbG9iQnVpbGRlciB8fCBnbG9iYWwuV2ViS2l0QmxvYkJ1aWxkZXIgfHwgZ2xvYmFsLk1vekJsb2JCdWlsZGVyIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBnZXRfY2xhc3MgPSBmdW5jdGlvbiBnZXRfY2xhc3Mob2JqZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpLm1hdGNoKC9eXFxbb2JqZWN0XFxzKC4qKVxcXSQvKVsxXTtcbiAgICAgICAgfSxcbiAgICAgICAgRmFrZUJsb2JCdWlsZGVyID0gZnVuY3Rpb24gQmxvYkJ1aWxkZXIoKSB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgICAgdGhpcy5fYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgRmFrZUJsb2IgPSBmdW5jdGlvbiBCbG9iKGRhdGEsIHR5cGUsIGVuY29kaW5nKSB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgICB0aGlzLnNpemUgPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICAgIHRoaXMuZW5jb2RpbmcgPSBlbmNvZGluZztcbiAgICAgICAgICB0aGlzLl9hcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcigpO1xuICAgICAgICB9LFxuICAgICAgICBGQkJfcHJvdG8gPSBGYWtlQmxvYkJ1aWxkZXIucHJvdG90eXBlLFxuICAgICAgICBGQl9wcm90byA9IEZha2VCbG9iLnByb3RvdHlwZSxcbiAgICAgICAgRmlsZVJlYWRlclN5bmMgPSBnbG9iYWwuRmlsZVJlYWRlclN5bmMsXG4gICAgICAgIEZpbGVFeGNlcHRpb24gPSBmdW5jdGlvbiBGaWxlRXhjZXB0aW9uKHR5cGUpIHtcbiAgICAgICAgICB0aGlzLmNvZGUgPSB0aGlzW3RoaXMubmFtZSA9IHR5cGVdO1xuICAgICAgICB9LFxuICAgICAgICBmaWxlX2V4X2NvZGVzID0gKFwiTk9UX0ZPVU5EX0VSUiBTRUNVUklUWV9FUlIgQUJPUlRfRVJSIE5PVF9SRUFEQUJMRV9FUlIgRU5DT0RJTkdfRVJSIFwiICsgXCJOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlIgSU5WQUxJRF9TVEFURV9FUlIgU1lOVEFYX0VSUlwiKS5zcGxpdChcIiBcIiksXG4gICAgICAgIGZpbGVfZXhfY29kZSA9IGZpbGVfZXhfY29kZXMubGVuZ3RoLFxuICAgICAgICByZWFsX1VSTCA9IGdsb2JhbC5VUkwgfHwgZ2xvYmFsLndlYmtpdFVSTCB8fCBleHBvcnRzLFxuICAgICAgICByZWFsX2NyZWF0ZV9vYmplY3RfVVJMID0gcmVhbF9VUkwuY3JlYXRlT2JqZWN0VVJMLFxuICAgICAgICByZWFsX3Jldm9rZV9vYmplY3RfVVJMID0gcmVhbF9VUkwucmV2b2tlT2JqZWN0VVJMLFxuICAgICAgICBVUkwgPSByZWFsX1VSTCxcbiAgICAgICAgYnRvYSA9IGdsb2JhbC5idG9hLFxuICAgICAgICBhdG9iID0gZ2xvYmFsLmF0b2IsXG4gICAgICAgIEFycmF5QnVmZmVyID0gZ2xvYmFsLkFycmF5QnVmZmVyLFxuICAgICAgICBVaW50OEFycmF5ID0gZ2xvYmFsLlVpbnQ4QXJyYXksXG4gICAgICAgIG9yaWdpbiA9IC9eW1xcdy1dKzpcXC8qXFxbP1tcXHdcXC46LV0rXFxdPyg/OjpbMC05XSspPy87XG4gICAgICBGYWtlQmxvYi5mYWtlID0gRkJfcHJvdG8uZmFrZSA9IHRydWU7XG4gICAgICB3aGlsZSAoZmlsZV9leF9jb2RlLS0pIHtcbiAgICAgICAgRmlsZUV4Y2VwdGlvbi5wcm90b3R5cGVbZmlsZV9leF9jb2Rlc1tmaWxlX2V4X2NvZGVdXSA9IGZpbGVfZXhfY29kZSArIDE7XG4gICAgICB9XG4gICAgICBpZiAoIXJlYWxfVVJMLmNyZWF0ZU9iamVjdFVSTCkge1xuICAgICAgICBVUkwgPSBleHBvcnRzLlVSTCA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICAgICAgICB2YXIgdXJpX2luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsIFwiYVwiKSxcbiAgICAgICAgICAgIHVyaV9vcmlnaW47XG4gICAgICAgICAgdXJpX2luZm8uaHJlZiA9IHVyaTtcbiAgICAgICAgICBpZiAoIShcIm9yaWdpblwiIGluIHVyaV9pbmZvKSkge1xuICAgICAgICAgICAgaWYgKHVyaV9pbmZvLnByb3RvY29sLnRvTG93ZXJDYXNlKCkgPT09IFwiZGF0YTpcIikge1xuICAgICAgICAgICAgICB1cmlfaW5mby5vcmlnaW4gPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXJpX29yaWdpbiA9IHVyaS5tYXRjaChvcmlnaW4pO1xuICAgICAgICAgICAgICB1cmlfaW5mby5vcmlnaW4gPSB1cmlfb3JpZ2luICYmIHVyaV9vcmlnaW5bMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB1cmlfaW5mbztcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIFVSTC5jcmVhdGVPYmplY3RVUkwgPSBmdW5jdGlvbiAoYmxvYikge1xuICAgICAgICB2YXIgdHlwZSA9IGJsb2IudHlwZSxcbiAgICAgICAgICBkYXRhX1VSSV9oZWFkZXI7XG4gICAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgICAgdHlwZSA9IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJsb2IgaW5zdGFuY2VvZiBGYWtlQmxvYikge1xuICAgICAgICAgIGRhdGFfVVJJX2hlYWRlciA9IFwiZGF0YTpcIiArIHR5cGU7XG4gICAgICAgICAgaWYgKGJsb2IuZW5jb2RpbmcgPT09IFwiYmFzZTY0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhX1VSSV9oZWFkZXIgKyBcIjtiYXNlNjQsXCIgKyBibG9iLmRhdGE7XG4gICAgICAgICAgfSBlbHNlIGlmIChibG9iLmVuY29kaW5nID09PSBcIlVSSVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YV9VUklfaGVhZGVyICsgXCIsXCIgKyBkZWNvZGVVUklDb21wb25lbnQoYmxvYi5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJ0b2EpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhX1VSSV9oZWFkZXIgKyBcIjtiYXNlNjQsXCIgKyBidG9hKGJsb2IuZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhX1VSSV9oZWFkZXIgKyBcIixcIiArIGVuY29kZVVSSUNvbXBvbmVudChibG9iLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZWFsX2NyZWF0ZV9vYmplY3RfVVJMKSB7XG4gICAgICAgICAgcmV0dXJuIHJlYWxfY3JlYXRlX29iamVjdF9VUkwuY2FsbChyZWFsX1VSTCwgYmxvYik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBVUkwucmV2b2tlT2JqZWN0VVJMID0gZnVuY3Rpb24gKG9iamVjdF9VUkwpIHtcbiAgICAgICAgaWYgKG9iamVjdF9VUkwuc3Vic3RyaW5nKDAsIDUpICE9PSBcImRhdGE6XCIgJiYgcmVhbF9yZXZva2Vfb2JqZWN0X1VSTCkge1xuICAgICAgICAgIHJlYWxfcmV2b2tlX29iamVjdF9VUkwuY2FsbChyZWFsX1VSTCwgb2JqZWN0X1VSTCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBGQkJfcHJvdG8uYXBwZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIGJiID0gdGhpcy5kYXRhO1xuICAgICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgdmFyIHN0ciA9IFwiXCIsXG4gICAgICAgICAgICBidWYgPSBuZXcgVWludDhBcnJheShkYXRhKSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgYnVmX2xlbiA9IGJ1Zi5sZW5ndGg7XG4gICAgICAgICAgZm9yICg7IGkgPCBidWZfbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJiLnB1c2goc3RyKTtcbiAgICAgICAgICB0aGlzLl9hcnJheUJ1ZmZlciA9IGRhdGEuc2xpY2UoMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2V0X2NsYXNzKGRhdGEpID09PSBcIkJsb2JcIiB8fCBnZXRfY2xhc3MoZGF0YSkgPT09IFwiRmlsZVwiKSB7XG4gICAgICAgICAgaWYgKEZpbGVSZWFkZXJTeW5jKSB7XG4gICAgICAgICAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlclN5bmMoKTtcbiAgICAgICAgICAgIGJiLnB1c2goZnIucmVhZEFzQmluYXJ5U3RyaW5nKGRhdGEpKTtcbiAgICAgICAgICAgIHRoaXMuX2FycmF5QnVmZmVyID0gZGF0YS5hcnJheUJ1ZmZlcigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRmlsZUV4Y2VwdGlvbihcIk5PVF9SRUFEQUJMRV9FUlJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBGYWtlQmxvYikge1xuICAgICAgICAgIGlmIChkYXRhLmVuY29kaW5nID09PSBcImJhc2U2NFwiICYmIGF0b2IpIHtcbiAgICAgICAgICAgIGJiLnB1c2goYXRvYihkYXRhLmRhdGEpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZW5jb2RpbmcgPT09IFwiVVJJXCIpIHtcbiAgICAgICAgICAgIGJiLnB1c2goZGVjb2RlVVJJQ29tcG9uZW50KGRhdGEuZGF0YSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5lbmNvZGluZyA9PT0gXCJyYXdcIikge1xuICAgICAgICAgICAgYmIucHVzaChkYXRhLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9hcnJheUJ1ZmZlciA9IGRhdGEuX2FycmF5QnVmZmVyLnNsaWNlKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZGF0YSArPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBiYi5wdXNoKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChkYXRhKSkpO1xuICAgICAgICAgIHRoaXMuX2FycmF5QnVmZmVyID0gX3V0aWxbXCJkZWZhdWx0XCJdLnN0cmluZ1RvQXJyYXlidWZmZXIoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIEZCQl9wcm90by5nZXRCbG9iID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgdHlwZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJsb2IgPSBuZXcgRmFrZUJsb2IodGhpcy5kYXRhLmpvaW4oXCJcIiksIHR5cGUsIFwicmF3XCIpO1xuICAgICAgICBibG9iLl9hcnJheUJ1ZmZlciA9IHRoaXMuX2FycmF5QnVmZmVyO1xuICAgICAgICByZXR1cm4gYmxvYjtcbiAgICAgIH07XG4gICAgICBGQkJfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIltvYmplY3QgQmxvYkJ1aWxkZXJdXCI7XG4gICAgICB9O1xuICAgICAgRkJfcHJvdG8uc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCwgdHlwZSkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGlmIChhcmdzIDwgMykge1xuICAgICAgICAgIHR5cGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBibG9iID0gbmV3IEZha2VCbG9iKHRoaXMuZGF0YS5zbGljZShzdGFydCwgYXJncyA+IDEgPyBlbmQgOiB0aGlzLmRhdGEubGVuZ3RoKSwgdHlwZSwgdGhpcy5lbmNvZGluZyk7XG4gICAgICAgIHZhciBhcnJheUJ1ZmZlciA9IHRoaXMuX2FycmF5QnVmZmVyO1xuICAgICAgICBpZiAoYXJyYXlCdWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIGJsb2IuX2FycmF5QnVmZmVyID0gdGhpcy5fYXJyYXlCdWZmZXIuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJsb2I7XG4gICAgICB9O1xuICAgICAgRkJfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIltvYmplY3QgQmxvYl1cIjtcbiAgICAgIH07XG4gICAgICBGQl9wcm90by5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgIH07XG4gICAgICBGQl9wcm90by5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5QnVmZmVyLnNsaWNlKDApO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBGYWtlQmxvYkJ1aWxkZXI7XG4gICAgfSgpO1xuICAgIGV4cG9ydHMuQmxvYiA9IGZ1bmN0aW9uIChibG9iUGFydHMsIG9wdGlvbnMpIHtcbiAgICAgIHZhciB0eXBlID0gb3B0aW9ucyA/IG9wdGlvbnMudHlwZSB8fCBcIlwiIDogXCJcIjtcbiAgICAgIHZhciBidWlsZGVyID0gbmV3IEJsb2JCdWlsZGVyKCk7XG4gICAgICBpZiAoYmxvYlBhcnRzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBibG9iUGFydHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBpZiAoVWludDhBcnJheSAmJiBibG9iUGFydHNbaV0gaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBidWlsZGVyLmFwcGVuZChibG9iUGFydHNbaV0uYnVmZmVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVpbGRlci5hcHBlbmQoYmxvYlBhcnRzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBibG9iID0gYnVpbGRlci5nZXRCbG9iKHR5cGUpO1xuICAgICAgaWYgKCFibG9iLnNsaWNlICYmIGJsb2Iud2Via2l0U2xpY2UpIHtcbiAgICAgICAgYmxvYi5zbGljZSA9IGJsb2Iud2Via2l0U2xpY2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gYmxvYjtcbiAgICB9O1xuICAgIHZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICByZXR1cm4gb2JqZWN0Ll9fcHJvdG9fXztcbiAgICB9O1xuICAgIGV4cG9ydHMuQmxvYi5wcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihuZXcgZXhwb3J0cy5CbG9iKCkpO1xuICB9KTtcbn0pKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYgfHwgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cgfHwgdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwgfHwgKHZvaWQgMCkuY29udGVudCB8fCB2b2lkIDApO1xuXG59KS5jYWxsKHRoaXMpfSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG59LHtcIi4uL3V0aWxcIjozfV0sNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgRE9NVG9rZW5MaXN0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBET01Ub2tlbkxpc3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERPTVRva2VuTGlzdCk7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhET01Ub2tlbkxpc3QsIFt7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3QgYWRkIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29udGFpbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udGFpbnMoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3QgY29udGFpbnMgaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlbnRyaWVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3QgZW50cmllcyBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvckVhY2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9yRWFjaCgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCBmb3JFYWNoIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXRlbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpdGVtKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IGl0ZW0gaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJrZXlzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3Qga2V5cyBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3QgcmVtb3ZlIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVwbGFjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IHJlcGxhY2UgaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdXBwb3J0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdXBwb3J0cygpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCBzdXBwb3J0cyBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRvZ2dsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGUoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IHZhbHVlIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCB2YWx1ZXMgaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRE9NVG9rZW5MaXN0O1xufSgpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBET01Ub2tlbkxpc3Q7XG5cbn0se31dLDc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbnZhciBEZXZpY2VNb3Rpb25FdmVudCA9IGZ1bmN0aW9uIChfRXZlbnQpIHtcbiAgX2luaGVyaXRzKERldmljZU1vdGlvbkV2ZW50LCBfRXZlbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERldmljZU1vdGlvbkV2ZW50KTtcbiAgZnVuY3Rpb24gRGV2aWNlTW90aW9uRXZlbnQoaW5pdEFyZ3MpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERldmljZU1vdGlvbkV2ZW50KTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsICdkZXZpY2Vtb3Rpb24nKTtcbiAgICBpZiAoaW5pdEFyZ3MpIHtcbiAgICAgIF90aGlzLl9hY2NlbGVyYXRpb24gPSBpbml0QXJncy5hY2NlbGVyYXRpb24gPyBpbml0QXJncy5hY2NlbGVyYXRpb24gOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDBcbiAgICAgIH07XG4gICAgICBfdGhpcy5fYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eSA9IGluaXRBcmdzLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkgPyBpbml0QXJncy5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5IDoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB6OiAwXG4gICAgICB9O1xuICAgICAgX3RoaXMuX3JvdGF0aW9uUmF0ZSA9IGluaXRBcmdzLnJvdGF0aW9uUmF0ZSA/IGluaXRBcmdzLnJvdGF0aW9uUmF0ZSA6IHtcbiAgICAgICAgYWxwaGE6IDAsXG4gICAgICAgIGJldGE6IDAsXG4gICAgICAgIGdhbW1hOiAwXG4gICAgICB9O1xuICAgICAgX3RoaXMuX2ludGVydmFsID0gaW5pdEFyZ3MuaW50ZXJ2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIF90aGlzLl9hY2NlbGVyYXRpb24gPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDBcbiAgICAgIH07XG4gICAgICBfdGhpcy5fYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eSA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMFxuICAgICAgfTtcbiAgICAgIF90aGlzLl9yb3RhdGlvblJhdGUgPSB7XG4gICAgICAgIGFscGhhOiAwLFxuICAgICAgICBiZXRhOiAwLFxuICAgICAgICBnYW1tYTogMFxuICAgICAgfTtcbiAgICAgIF90aGlzLl9pbnRlcnZhbCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoRGV2aWNlTW90aW9uRXZlbnQsIFt7XG4gICAga2V5OiBcImFjY2VsZXJhdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FjY2VsZXJhdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJvdGF0aW9uUmF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0aW9uUmF0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW50ZXJ2YWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIERldmljZU1vdGlvbkV2ZW50O1xufShfRXZlbnQyW1wiZGVmYXVsdFwiXSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IERldmljZU1vdGlvbkV2ZW50O1xuXG59LHtcIi4vRXZlbnRcIjoxMH1dLDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW8gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvXCIpKTtcbnZhciBfRm9udEZhY2VTZXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ZvbnRGYWNlU2V0XCIpKTtcbnZhciBfTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05vZGVcIikpO1xudmFyIF9Ob2RlTGlzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTm9kZUxpc3RcIikpO1xudmFyIF9IVE1MQW5jaG9yRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEFuY2hvckVsZW1lbnRcIikpO1xudmFyIF9IVE1MRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnRcIikpO1xudmFyIF9IVE1MSHRtbEVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxIdG1sRWxlbWVudFwiKSk7XG52YXIgX0hUTUxCb2R5RWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEJvZHlFbGVtZW50XCIpKTtcbnZhciBfSFRNTEhlYWRFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MSGVhZEVsZW1lbnRcIikpO1xudmFyIF9IVE1MQ2FudmFzRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTENhbnZhc0VsZW1lbnRcIikpO1xudmFyIF9IVE1MVmlkZW9FbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MVmlkZW9FbGVtZW50XCIpKTtcbnZhciBfSFRNTFNjcmlwdEVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxTY3JpcHRFbGVtZW50XCIpKTtcbnZhciBfSFRNTFN0eWxlRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTFN0eWxlRWxlbWVudFwiKSk7XG52YXIgX0hUTUxJbnB1dEVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxJbnB1dEVsZW1lbnRcIikpO1xudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL1dlYWtNYXBcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfZ2V0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHsgX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKTsgfSBlbHNlIHsgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTsgaWYgKCFiYXNlKSByZXR1cm47IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7IGlmIChkZXNjLmdldCkgeyByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzYy52YWx1ZTsgfTsgfSByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7IHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7IG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhazsgfSByZXR1cm4gb2JqZWN0OyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxudmFyIF9odG1sID0gbmV3IF9IVE1MSHRtbEVsZW1lbnRbXCJkZWZhdWx0XCJdKCk7XG52YXIgRG9jdW1lbnQgPSBmdW5jdGlvbiAoX05vZGUpIHtcbiAgX2luaGVyaXRzKERvY3VtZW50LCBfTm9kZSk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRG9jdW1lbnQpO1xuICBmdW5jdGlvbiBEb2N1bWVudCgpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERvY3VtZW50KTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJoZWFkXCIsIG5ldyBfSFRNTEhlYWRFbGVtZW50W1wiZGVmYXVsdFwiXShfaHRtbCkpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJib2R5XCIsIG5ldyBfSFRNTEJvZHlFbGVtZW50W1wiZGVmYXVsdFwiXShfaHRtbCkpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJmb250c1wiLCBuZXcgX0ZvbnRGYWNlU2V0W1wiZGVmYXVsdFwiXSgpKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY29va2llXCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJkb2N1bWVudEVsZW1lbnRcIiwgX2h0bWwpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZWFkeVN0YXRlXCIsIFwiY29tcGxldGVcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInZpc2liaWxpdHlTdGF0ZVwiLCBcInZpc2libGVcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImhpZGRlblwiLCBmYWxzZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0eWxlXCIsIHt9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibG9jYXRpb25cIiwgd2luZG93LmxvY2F0aW9uKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib250b3VjaHN0YXJ0XCIsIG51bGwpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbnRvdWNobW92ZVwiLCBudWxsKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib250b3VjaGVuZFwiLCBudWxsKTtcbiAgICBfaHRtbC5hcHBlbmRDaGlsZChfdGhpcy5oZWFkKTtcbiAgICBfaHRtbC5hcHBlbmRDaGlsZChfdGhpcy5ib2R5KTtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5zY3JpcHRzID0gW107XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhEb2N1bWVudCwgW3tcbiAgICBrZXk6IFwiY2hhcmFjdGVyU2V0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJVVEYtOFwiO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzY3JpcHRzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5zY3JpcHRzLnNsaWNlKDApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVFbGVtZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0YWdOYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdGFnTmFtZSA9IHRhZ05hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGlmICh0YWdOYW1lID09PSAnQ0FOVkFTJykge1xuICAgICAgICByZXR1cm4gbmV3IF9IVE1MQ2FudmFzRWxlbWVudFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gJ0lNRycpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbWFnZSgpO1xuICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSAnVklERU8nKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0hUTUxWaWRlb0VsZW1lbnRbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09ICdTQ1JJUFQnKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0hUTUxTY3JpcHRFbGVtZW50W1wiZGVmYXVsdFwiXSgpO1xuICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcIklOUFVUXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfSFRNTElucHV0RWxlbWVudFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJBVURJT1wiKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0F1ZGlvW1wiZGVmYXVsdFwiXSgpO1xuICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcIlNUWUxFXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfSFRNTFN0eWxlRWxlbWVudFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJBXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfSFRNTEFuY2hvckVsZW1lbnRbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IF9IVE1MRWxlbWVudFtcImRlZmF1bHRcIl0odGFnTmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUVsZW1lbnROU1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVFbGVtZW50KHF1YWxpZmllZE5hbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFdmVudCh0eXBlKSB7XG4gICAgICBpZiAod2luZG93W3R5cGVdKSB7XG4gICAgICAgIHJldHVybiBuZXcgd2luZG93W3R5cGVdKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlVGV4dE5vZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlVGV4dE5vZGUoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgpIGlzIG5vdCBzdXBwb3J0IVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzcGF0Y2hFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KCkge1xuICAgICAgaWYgKF9odG1sLmRpc3BhdGNoRXZlbnQuYXBwbHkoX2h0bWwsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKERvY3VtZW50LnByb3RvdHlwZSksIFwiZGlzcGF0Y2hFdmVudFwiLCB0aGlzKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRDaGlsZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRDaGlsZChub2RlKSB7XG4gICAgICB2YXIgbm9kZU5hbWUgPSBub2RlLm5vZGVOYW1lO1xuICAgICAgaWYgKG5vZGVOYW1lID09PSBcIlNDUklQVFwiKSB7XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc2NyaXB0cy5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKERvY3VtZW50LnByb3RvdHlwZSksIFwiYXBwZW5kQ2hpbGRcIiwgdGhpcykuY2FsbCh0aGlzLCBub2RlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQ2hpbGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2hpbGQobm9kZSkge1xuICAgICAgdmFyIG5vZGVOYW1lID0gbm9kZS5ub2RlTmFtZTtcbiAgICAgIGlmIChub2RlTmFtZSA9PT0gXCJTQ1JJUFRcIikge1xuICAgICAgICB2YXIgc2NyaXB0cyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc2NyaXB0cztcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW5ndGggPSBzY3JpcHRzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgICBpZiAobm9kZSA9PT0gc2NyaXB0c1tpbmRleF0pIHtcbiAgICAgICAgICAgIHNjcmlwdHMuc2xpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoRG9jdW1lbnQucHJvdG90eXBlKSwgXCJyZW1vdmVDaGlsZFwiLCB0aGlzKS5jYWxsKHRoaXMsIG5vZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRFbGVtZW50QnlJZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRFbGVtZW50QnlJZChpZCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudEJ5SWQnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cbiAgICAgIHZhciByb290RWxlbWVudCA9IHRoaXMuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgdmFyIGVsZW1lbnRBcnIgPSBbXS5jb25jYXQocm9vdEVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICB2YXIgZWxlbWVudDtcbiAgICAgIGlmIChpZCA9PT0gXCJjYW52YXNcIiB8fCBpZCA9PT0gXCJnbGNhbnZhc1wiKSB7XG4gICAgICAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudEFyci5wb3AoKSkge1xuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09PSBcImNhbnZhc1wiIHx8IGVsZW1lbnQuaWQgPT09IFwiZ2xjYW52YXNcIikge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsZW1lbnRBcnIgPSBlbGVtZW50QXJyLmNvbmNhdChlbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnRBcnIucG9wKCkpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbGVtZW50QXJyID0gZWxlbWVudEFyci5jb25jYXQoZWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEVsZW1lbnRzQnlDbGFzc05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lcykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudHNCeUNsYXNzTmFtZScgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBuYW1lcyAhPT0gXCJzdHJpbmdcIiAmJiBuYW1lcyBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKG5hbWVzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RWxlbWVudHNCeVRhZ05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudHNCeVRhZ05hbWUnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cbiAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICB2YXIgcm9vdEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50RWxlbWVudDtcbiAgICAgIHZhciByZXN1bHQgPSBuZXcgX05vZGVMaXN0W1wiZGVmYXVsdFwiXSgpO1xuICAgICAgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgICAgIGNhc2UgXCJIRUFEXCI6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZG9jdW1lbnQuaGVhZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJCT0RZXCI6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZG9jdW1lbnQuYm9keSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChyb290RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RWxlbWVudHNCeU5hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeU5hbWUobmFtZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudHNCeU5hbWUnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cbiAgICAgIHZhciBlbGVtZW50QXJyID0gW10uY29uY2F0KHRoaXMuY2hpbGROb2Rlcyk7XG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIHZhciBlbGVtZW50O1xuICAgICAgd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50QXJyLnBvcCgpKSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50QXJyID0gZWxlbWVudEFyci5jb25jYXQoZWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInF1ZXJ5U2VsZWN0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcXVlcnlTZWxlY3RvcihzZWxlY3RvcnMpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBcIlVuY2F1Z2h0IFR5cGVFcnJvcjogRmFpbGVkIHRvIGV4ZWN1dGUgJ3F1ZXJ5U2VsZWN0b3JBbGwnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cbiAgICAgIHZhciBub2RlTGlzdCA9IG5ldyBfTm9kZUxpc3RbXCJkZWZhdWx0XCJdKCk7XG4gICAgICBzd2l0Y2ggKHNlbGVjdG9ycykge1xuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICBjYXNlIE5hTjpcbiAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICBjYXNlIFwiXCI6XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9ycyAhPT0gXCJzdHJpbmdcIiAmJiBzZWxlY3RvcnMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgdGhyb3cgXCJVbmNhdWdodCBET01FeGNlcHRpb246IEZhaWxlZCB0byBleGVjdXRlICdxdWVyeVNlbGVjdG9yQWxsJyBvbiAnRG9jdW1lbnQnOiAnXCIgKyBzZWxlY3RvcnMgKyBcIicgaXMgbm90IGEgdmFsaWQgc2VsZWN0b3IuXCI7XG4gICAgICB9XG4gICAgICB2YXIgcmVnID0gL15bQS1aYS16XSskLztcbiAgICAgIHZhciByZXN1bHQgPSBzZWxlY3RvcnMubWF0Y2gocmVnKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3JzKTtcbiAgICAgIH1cbiAgICAgIHJlZyA9IC9eXFwuW0EtWmEteiRfXVtBLVphLXokXzAtOVxcLSBdKiQvO1xuICAgICAgcmVzdWx0ID0gc2VsZWN0b3JzLm1hdGNoKHJlZyk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHZhciBzZWxlY3RvckFyciA9IHNlbGVjdG9ycy5zcGxpdChcIiBcIik7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yQXJyLnNoaWZ0KCk7XG4gICAgICAgIG5vZGVMaXN0ID0gdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yLnN1YnN0cigxKSk7XG4gICAgICAgIHZhciBsZW5ndGggPSBzZWxlY3RvckFyci5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGgpIHtcbiAgICAgICAgICBzZWxlY3RvcnMgPSBzZWxlY3RvckFyci5qb2luKFwiIFwiKTtcbiAgICAgICAgICBsZW5ndGggPSBub2RlTGlzdC5sZW5ndGg7XG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIHN1Yk5vZGVMaXN0ID0gbm9kZUxpc3RbaW5kZXhdLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzKTtcbiAgICAgICAgICAgIGlmIChzdWJOb2RlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN1Yk5vZGVMaXN0WzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZUxpc3RbMF07XG4gICAgICB9XG4gICAgICByZWcgPSAvXiNbQS1aYS16JF9dW0EtWmEteiRfMC05XFwtXSokLztcbiAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLnN1YnN0cigxKSk7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgbm9kZUxpc3QucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdG9ycyA9PT0gXCIqXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3JzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlTGlzdFswXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicXVlcnlTZWxlY3RvckFsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBxdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAncXVlcnlTZWxlY3RvckFsbCcgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuICAgICAgdmFyIG5vZGVMaXN0ID0gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIHN3aXRjaCAoc2VsZWN0b3JzKSB7XG4gICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIGNhc2UgTmFOOlxuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICByZXR1cm4gbm9kZUxpc3Q7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9ycyAhPT0gXCJzdHJpbmdcIiAmJiBzZWxlY3RvcnMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgdGhyb3cgXCJVbmNhdWdodCBET01FeGNlcHRpb246IEZhaWxlZCB0byBleGVjdXRlICdxdWVyeVNlbGVjdG9yQWxsJyBvbiAnRG9jdW1lbnQnOiAnXCIgKyBzZWxlY3RvcnMgKyBcIicgaXMgbm90IGEgdmFsaWQgc2VsZWN0b3IuXCI7XG4gICAgICB9XG4gICAgICB2YXIgcmVnID0gL15bQS1aYS16XSskLztcbiAgICAgIHZhciByZXN1bHQgPSBzZWxlY3RvcnMubWF0Y2gocmVnKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3JzKTtcbiAgICAgIH1cbiAgICAgIHJlZyA9IC9eXFwuW0EtWmEteiRfXVtBLVphLXokXzAtOVxcLV0qJC87XG4gICAgICByZXN1bHQgPSBzZWxlY3RvcnMubWF0Y2gocmVnKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZWxlY3RvcnMuc3Vic3RyKDEpKTtcbiAgICAgIH1cbiAgICAgIHJlZyA9IC9eI1tBLVphLXokX11bQS1aYS16JF8wLTlcXC1dKiQvO1xuICAgICAgcmVzdWx0ID0gc2VsZWN0b3JzLm1hdGNoKHJlZyk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50QnlJZChzZWxlY3RvcnMuc3Vic3RyKDEpKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBub2RlTGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2VsZWN0b3JzID09PSBcIipcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWxlY3RvcnMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGVMaXN0O1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRG9jdW1lbnQ7XG59KF9Ob2RlMltcImRlZmF1bHRcIl0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEb2N1bWVudDtcblxufSx7XCIuL0F1ZGlvXCI6NCxcIi4vRm9udEZhY2VTZXRcIjoxMyxcIi4vSFRNTEFuY2hvckVsZW1lbnRcIjoxNCxcIi4vSFRNTEJvZHlFbGVtZW50XCI6MTYsXCIuL0hUTUxDYW52YXNFbGVtZW50XCI6MTcsXCIuL0hUTUxFbGVtZW50XCI6MTgsXCIuL0hUTUxIZWFkRWxlbWVudFwiOjE5LFwiLi9IVE1MSHRtbEVsZW1lbnRcIjoyMCxcIi4vSFRNTElucHV0RWxlbWVudFwiOjIyLFwiLi9IVE1MU2NyaXB0RWxlbWVudFwiOjI0LFwiLi9IVE1MU3R5bGVFbGVtZW50XCI6MjUsXCIuL0hUTUxWaWRlb0VsZW1lbnRcIjoyNixcIi4vTm9kZVwiOjMyLFwiLi9Ob2RlTGlzdFwiOjMzLFwiLi91dGlsL1dlYWtNYXBcIjo1Nn1dLDk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05vZGVcIikpO1xudmFyIF9Ob2RlTGlzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTm9kZUxpc3RcIikpO1xudmFyIF9ET01Ub2tlbkxpc3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RPTVRva2VuXFx1MjAwQkxpc3RcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxudmFyIEVsZW1lbnQgPSBmdW5jdGlvbiAoX05vZGUpIHtcbiAgX2luaGVyaXRzKEVsZW1lbnQsIF9Ob2RlKTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihFbGVtZW50KTtcbiAgZnVuY3Rpb24gRWxlbWVudCh0YWdOYW1lKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbGVtZW50KTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRhZ05hbWUpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjbGFzc05hbWVcIiwgJycpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjaGlsZHJlblwiLCBbXSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNsYXNzTGlzdFwiLCBuZXcgX0RPTVRva2VuTGlzdFtcImRlZmF1bHRcIl0oKSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInZhbHVlXCIsIDEpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjb250ZW50XCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzY3JvbGxMZWZ0XCIsIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzY3JvbGxUb3BcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNsaWVudExlZnRcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNsaWVudFRvcFwiLCAwKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEVsZW1lbnQsIFt7XG4gICAga2V5OiBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICByaWdodDogd2luZG93LmlubmVyV2lkdGhcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEVsZW1lbnRzQnlUYWdOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpIHtcbiAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIHZhciBjaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzO1xuICAgICAgdmFyIGxlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGNoaWxkTm9kZXNbaW5kZXhdO1xuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSB0YWdOYW1lIHx8IHRhZ05hbWUgPT09IFwiKlwiKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEVsZW1lbnRzQnlDbGFzc05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lcykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudHNCeUNsYXNzTmFtZScgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdCA9IG5ldyBfTm9kZUxpc3RbXCJkZWZhdWx0XCJdKCk7XG4gICAgICBpZiAodHlwZW9mIG5hbWVzICE9PSBcInN0cmluZ1wiICYmIG5hbWVzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICB2YXIgZWxlbWVudEFyciA9IFtdLmNvbmNhdCh0aGlzLmNoaWxkTm9kZXMpO1xuICAgICAgdmFyIGVsZW1lbnQ7XG4gICAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnRBcnIucG9wKCkpIHtcbiAgICAgICAgdmFyIGNsYXNzU3RyID0gZWxlbWVudFtcImNsYXNzXCJdO1xuICAgICAgICBpZiAoY2xhc3NTdHIpIHtcbiAgICAgICAgICB2YXIgY2xhc3NBcnIgPSBjbGFzc1N0ci5zcGxpdChcIiBcIik7XG4gICAgICAgICAgdmFyIGxlbmd0aCA9IGNsYXNzQXJyLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NBcnJbaW5kZXhdID09PSBuYW1lcykge1xuICAgICAgICAgICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnRBcnIgPSBlbGVtZW50QXJyLmNvbmNhdChlbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicXVlcnlTZWxlY3RvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBxdWVyeVNlbGVjdG9yKHNlbGVjdG9ycykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAncXVlcnlTZWxlY3RvckFsbCcgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuICAgICAgdmFyIG5vZGVMaXN0ID0gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIHN3aXRjaCAoc2VsZWN0b3JzKSB7XG4gICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIGNhc2UgTmFOOlxuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3JzICE9PSBcInN0cmluZ1wiICYmIHNlbGVjdG9ycyBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICB0aHJvdyBcIlVuY2F1Z2h0IERPTUV4Y2VwdGlvbjogRmFpbGVkIHRvIGV4ZWN1dGUgJ3F1ZXJ5U2VsZWN0b3JBbGwnIG9uICdEb2N1bWVudCc6ICdcIiArIHNlbGVjdG9ycyArIFwiJyBpcyBub3QgYSB2YWxpZCBzZWxlY3Rvci5cIjtcbiAgICAgIH1cbiAgICAgIHZhciByZWcgPSAvXltBLVphLXpdKyQvO1xuICAgICAgdmFyIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWxlY3RvcnMpO1xuICAgICAgfVxuICAgICAgcmVnID0gL14uW0EtWmEteiRfXVtBLVphLXokXzAtOVxcLSBdKiQvO1xuICAgICAgcmVzdWx0ID0gc2VsZWN0b3JzLm1hdGNoKHJlZyk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHZhciBzZWxlY3RvckFyciA9IHNlbGVjdG9ycy5zcGxpdChcIiBcIik7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yQXJyLnNoaWZ0KCk7XG4gICAgICAgIG5vZGVMaXN0ID0gdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yLnN1YnN0cigxKSk7XG4gICAgICAgIHZhciBsZW5ndGggPSBzZWxlY3RvckFyci5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGgpIHtcbiAgICAgICAgICBzZWxlY3RvcnMgPSBzZWxlY3RvckFyci5qb2luKFwiIFwiKTtcbiAgICAgICAgICBsZW5ndGggPSBub2RlTGlzdC5sZW5ndGg7XG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIHN1Yk5vZGVMaXN0ID0gbm9kZUxpc3RbaW5kZXhdLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzKTtcbiAgICAgICAgICAgIGlmIChzdWJOb2RlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN1Yk5vZGVMaXN0WzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZUxpc3RbMF07XG4gICAgICB9XG4gICAgICByZWcgPSAvXiNbQS1aYS16JF9dW0EtWmEteiRfMC05XFwtXSokLztcbiAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLnN1YnN0cigxKSk7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgbm9kZUxpc3QucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdG9ycyA9PT0gXCIqXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3JzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlTGlzdFswXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVxdWVzdEZ1bGxzY3JlZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdEZ1bGxzY3JlZW4oKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUF0dHJpYnV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpIHtcbiAgICAgIGlmIChhdHRyTmFtZSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiB0aGlzW1wic3R5bGVcIl0pIHtcbiAgICAgICAgICB0aGlzW1wic3R5bGVcIl1bc3R5bGVOYW1lXSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXNbYXR0ck5hbWVdID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0QXR0cmlidXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgICAgaWYgKG5hbWUgPT09IFwic3R5bGVcIikge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09IFwidW5kZWZpbmVkXCIgfHwgdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIHRoaXNbXCJzdHlsZVwiXSkge1xuICAgICAgICAgICAgdGhpc1tcInN0eWxlXCJdW3N0eWxlTmFtZV0gPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xccyovZywgXCJcIik7XG4gICAgICAgICAgdmFyIHZhbHVlQXJyYXkgPSB2YWx1ZS5zcGxpdChcIjtcIik7XG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdmFsdWVBcnJheSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlQXJyYXlbaW5kZXhdICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgdmFyIHZhbHVlVGVtcCA9IHZhbHVlQXJyYXlbaW5kZXhdLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgICAgdGhpc1tcInN0eWxlXCJdW3ZhbHVlVGVtcFswXV0gPSB2YWx1ZVRlbXBbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEF0dHJpYnV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICAgICAgdmFyIGF0dHJpYnV0ZVZhbHVlID0gbnVsbDtcbiAgICAgIGlmIChuYW1lID09IFwic3R5bGVcIikge1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXNbXCJzdHlsZVwiXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXNbbmFtZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEF0dHJpYnV0ZU5TXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZU5TKG5zLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmx1clwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJsYXN0Q2hpbGRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBsYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgcmV0dXJuIGxhc3RDaGlsZCA/IGxhc3RDaGlsZCA6IHRoaXMuaW5uZXJIVE1MID8gbmV3IEhUTUxFbGVtZW50KCkgOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpcnN0Q2hpbGRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgIHJldHVybiBjaGlsZCA/IGNoaWxkIDogdGhpcy5pbm5lckhUTUwgPyBuZXcgSFRNTEVsZW1lbnQoKSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmlyc3RFbGVtZW50Q2hpbGRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgIHJldHVybiBjaGlsZCA/IGNoaWxkIDogdGhpcy5pbm5lckhUTUwgPyBuZXcgSFRNTEVsZW1lbnQoKSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xpZW50SGVpZ2h0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgc3R5bGUgPSB0aGlzLnN0eWxlIHx8IHt9O1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHN0eWxlLmZvbnRTaXplIHx8IFwiMFwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidGFnTmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZU5hbWU7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBFbGVtZW50O1xufShfTm9kZTJbXCJkZWZhdWx0XCJdKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRWxlbWVudDtcblxufSx7XCIuL0RPTVRva2Vu4oCLTGlzdFwiOjYsXCIuL05vZGVcIjozMixcIi4vTm9kZUxpc3RcIjozM31dLDEwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbnZhciBFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXZlbnQodHlwZSwgZXZlbnRJbml0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50KTtcbiAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICB0aGlzLl90YXJnZXQgPSBudWxsO1xuICAgIHRoaXMuX2V2ZW50UGhhc2UgPSAyO1xuICAgIHRoaXMuX2N1cnJlbnRUYXJnZXQgPSBudWxsO1xuICAgIHRoaXMuX2NhbmNlbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fc3RvcHBlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3Bhc3NpdmVMaXN0ZW5lciA9IG51bGw7XG4gICAgdGhpcy5fdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoRXZlbnQsIFt7XG4gICAga2V5OiBcInR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0YXJnZXRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90YXJnZXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImN1cnJlbnRUYXJnZXRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50VGFyZ2V0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1RydXN0ZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidGltZVN0YW1wXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGltZVN0YW1wO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLnR5cGUuaW5kZXhPZihcInRvdWNoXCIpKSB7XG4gICAgICAgIHRoaXMuX3RpbWVTdGFtcCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb3NlZFBhdGhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9zZWRQYXRoKCkge1xuICAgICAgdmFyIGN1cnJlbnRUYXJnZXQgPSB0aGlzLl9jdXJyZW50VGFyZ2V0O1xuICAgICAgaWYgKGN1cnJlbnRUYXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtjdXJyZW50VGFyZ2V0XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXZlbnRQaGFzZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50UGhhc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BQcm9wYWdhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSB7XG4gICAgICB0aGlzLl9zdG9wcGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYnViYmxlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5jZWxhYmxlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHJldmVudERlZmF1bHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgICBpZiAodGhpcy5fcGFzc2l2ZUxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkV2ZW50I3ByZXZlbnREZWZhdWx0KCkgd2FzIGNhbGxlZCBmcm9tIGEgcGFzc2l2ZSBsaXN0ZW5lcjpcIiwgdGhpcy5fcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNhbmNlbGFibGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2FuY2VsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0UHJldmVudGVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FuY2VsZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvc2VkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBFdmVudDtcbn0oKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRXZlbnQ7XG5FdmVudC5OT05FID0gMDtcbkV2ZW50LkNBUFRVUklOR19QSEFTRSA9IDE7XG5FdmVudC5BVF9UQVJHRVQgPSAyO1xuRXZlbnQuQlVCQkxJTkdfUEhBU0UgPSAzO1xuXG59LHt9XSwxMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9Ub3VjaEV2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ub3VjaEV2ZW50XCIpKTtcbnZhciBfV2Vha01hcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9XZWFrTWFwXCIpKTtcbnZhciBfRGV2aWNlTW90aW9uRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RldmljZU1vdGlvbkV2ZW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgX2xpc3RlbmVyU3RhdCA9IHt9O1xudmFyIF9vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiBfb25Ub3VjaFN0YXJ0KGUpIHtcbiAgdmFyIGV2ZW50ID0gbmV3IF9Ub3VjaEV2ZW50W1wiZGVmYXVsdFwiXShcInRvdWNoc3RhcnRcIik7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbn07XG52YXIgX29uVG91Y2hNb3ZlID0gZnVuY3Rpb24gX29uVG91Y2hNb3ZlKGUpIHtcbiAgdmFyIGV2ZW50ID0gbmV3IF9Ub3VjaEV2ZW50W1wiZGVmYXVsdFwiXShcInRvdWNobW92ZVwiKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xufTtcbnZhciBfb25Ub3VjaENhbmNlbCA9IGZ1bmN0aW9uIF9vblRvdWNoQ2FuY2VsKGUpIHtcbiAgdmFyIGV2ZW50ID0gbmV3IF9Ub3VjaEV2ZW50W1wiZGVmYXVsdFwiXShcInRvdWNoY2FuY2VsXCIpO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG59O1xudmFyIF9vblRvdWNoRW5kID0gZnVuY3Rpb24gX29uVG91Y2hFbmQoZSkge1xuICB2YXIgZXZlbnQgPSBuZXcgX1RvdWNoRXZlbnRbXCJkZWZhdWx0XCJdKFwidG91Y2hlbmRcIik7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbn07XG52YXIgX3N5c3RlbUluZm8gPSByYWwuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbnZhciBfaXNBbmRyb2lkID0gX3N5c3RlbUluZm8ucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gXCJhbmRyb2lkXCI7XG52YXIgX2FscGhhID0gMC44O1xudmFyIF9ncmF2aXR5ID0gWzAsIDAsIDBdO1xudmFyIF9vbkFjY2VsZXJvbWV0ZXJDaGFuZ2UgPSBmdW5jdGlvbiBfb25BY2NlbGVyb21ldGVyQ2hhbmdlKGUpIHtcbiAgaWYgKF9pc0FuZHJvaWQpIHtcbiAgICBlLnggKj0gLTEwO1xuICAgIGUueSAqPSAtMTA7XG4gICAgZS56ICo9IC0xMDtcbiAgfSBlbHNlIHtcbiAgICBlLnggKj0gMTA7XG4gICAgZS55ICo9IDEwO1xuICAgIGUueiAqPSAxMDtcbiAgfVxuICBfZ3Jhdml0eVswXSA9IF9hbHBoYSAqIF9ncmF2aXR5WzBdICsgKDEgLSBfYWxwaGEpICogZS54O1xuICBfZ3Jhdml0eVsxXSA9IF9hbHBoYSAqIF9ncmF2aXR5WzFdICsgKDEgLSBfYWxwaGEpICogZS55O1xuICBfZ3Jhdml0eVsyXSA9IF9hbHBoYSAqIF9ncmF2aXR5WzJdICsgKDEgLSBfYWxwaGEpICogZS56O1xuICB2YXIgZXZlbnQgPSBuZXcgX0RldmljZU1vdGlvbkV2ZW50W1wiZGVmYXVsdFwiXSh7XG4gICAgYWNjZWxlcmF0aW9uOiB7XG4gICAgICB4OiBlLnggLSBfZ3Jhdml0eVswXSxcbiAgICAgIHk6IGUueSAtIF9ncmF2aXR5WzFdLFxuICAgICAgejogZS56IC0gX2dyYXZpdHlbMl1cbiAgICB9LFxuICAgIGFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHk6IHtcbiAgICAgIHg6IGUueCxcbiAgICAgIHk6IGUueSxcbiAgICAgIHo6IGUuelxuICAgIH1cbiAgfSk7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG52YXIgRXZlbnRUYXJnZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEV2ZW50VGFyZ2V0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudFRhcmdldCk7XG4gICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLnNldCh0aGlzLCB7fSk7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEV2ZW50VGFyZ2V0LCBbe1xuICAgIGtleTogXCJhZGRFdmVudExpc3RlbmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcyk7XG4gICAgICBpZiAoIXByaXZhdGVUaGlzKSB7XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5zZXQodGhpcywgcHJpdmF0ZVRoaXMgPSB7fSk7XG4gICAgICB9XG4gICAgICB2YXIgZXZlbnRzID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChwcml2YXRlVGhpcyk7XG4gICAgICBpZiAoIWV2ZW50cykge1xuICAgICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uc2V0KHByaXZhdGVUaGlzLCBldmVudHMgPSB7fSk7XG4gICAgICB9XG4gICAgICBpZiAoIWV2ZW50c1t0eXBlXSkge1xuICAgICAgICBldmVudHNbdHlwZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIHZhciBsaXN0ZW5lckFycmF5ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgdmFyIGxlbmd0aCA9IGxpc3RlbmVyQXJyYXkubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICBpZiAobGlzdGVuZXJBcnJheVtpbmRleF0gPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0ZW5lckFycmF5LnB1c2gobGlzdGVuZXIpO1xuICAgICAgaWYgKF9saXN0ZW5lclN0YXRbdHlwZV0pIHtcbiAgICAgICAgKytfbGlzdGVuZXJTdGF0W3R5cGVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2xpc3RlbmVyU3RhdFt0eXBlXSA9IDE7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgXCJ0b3VjaHN0YXJ0XCI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJhbC5vblRvdWNoU3RhcnQoX29uVG91Y2hTdGFydCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJ0b3VjaG1vdmVcIjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmFsLm9uVG91Y2hNb3ZlKF9vblRvdWNoTW92ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJ0b3VjaGNhbmNlbFwiOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByYWwub25Ub3VjaENhbmNlbChfb25Ub3VjaENhbmNlbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJ0b3VjaGVuZFwiOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByYWwub25Ub3VjaEVuZChfb25Ub3VjaEVuZCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJkZXZpY2Vtb3Rpb25cIjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmFsLm9uQWNjZWxlcm9tZXRlckNoYW5nZShfb25BY2NlbGVyb21ldGVyQ2hhbmdlKTtcbiAgICAgICAgICAgICAgcmFsLnN0YXJ0QWNjZWxlcm9tZXRlcigpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuY2FwdHVyZSkge31cbiAgICAgIGlmIChvcHRpb25zLm9uY2UpIHt9XG4gICAgICBpZiAob3B0aW9ucy5wYXNzaXZlKSB7fVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVFdmVudExpc3RlbmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcyk7XG4gICAgICB2YXIgZXZlbnRzO1xuICAgICAgaWYgKHByaXZhdGVUaGlzKSB7XG4gICAgICAgIGV2ZW50cyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQocHJpdmF0ZVRoaXMpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50cykge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuICAgICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IGxpc3RlbmVycy5sZW5ndGg7IGktLTsgaSA+IDApIHtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnNbaV0gPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGlmICgtLV9saXN0ZW5lclN0YXRbdHlwZV0gPT09IDApIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaHN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByYWwub2ZmVG91Y2hTdGFydChfb25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY2FzZSBcInRvdWNobW92ZVwiOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmFsLm9mZlRvdWNoTW92ZShfb25Ub3VjaE1vdmUpO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjYXNlIFwidG91Y2hjYW5jZWxcIjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJhbC5vZmZUb3VjaENhbmNlbChfb25Ub3VjaENhbmNlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaGVuZFwiOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmFsLm9mZlRvdWNoRW5kKF9vblRvdWNoRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY2FzZSBcImRldmljZW1vdGlvblwiOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmFsLm9mZkFjY2VsZXJvbWV0ZXJDaGFuZ2UoX29uQWNjZWxlcm9tZXRlckNoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgICAgcmFsLnN0b3BBY2NlbGVyb21ldGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRpc3BhdGNoRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2hFdmVudCgpIHtcbiAgICAgIHZhciBldmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICBldmVudC5fdGFyZ2V0ID0gZXZlbnQuX2N1cnJlbnRUYXJnZXQgPSB0aGlzO1xuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgX1RvdWNoRXZlbnRbXCJkZWZhdWx0XCJdKSB7XG4gICAgICAgIHZhciB0b3VjaGVBcnJheSA9IGV2ZW50LnRvdWNoZXM7XG4gICAgICAgIHZhciBsZW5ndGggPSB0b3VjaGVBcnJheS5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgICB0b3VjaGVBcnJheVtpbmRleF0udGFyZ2V0ID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0b3VjaGVBcnJheSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuICAgICAgICBsZW5ndGggPSB0b3VjaGVBcnJheS5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIF9pbmRleCA9IDA7IF9pbmRleCA8IGxlbmd0aDsgKytfaW5kZXgpIHtcbiAgICAgICAgICB0b3VjaGVBcnJheVtfaW5kZXhdLnRhcmdldCA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBjYWxsYmFjayA9IHRoaXNbXCJvblwiICsgZXZlbnQudHlwZV07XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICB9XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpO1xuICAgICAgdmFyIGV2ZW50cztcbiAgICAgIGlmIChwcml2YXRlVGhpcykge1xuICAgICAgICBldmVudHMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHByaXZhdGVUaGlzKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudHMpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IGV2ZW50c1tldmVudC50eXBlXTtcbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbaV0uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudC5fdGFyZ2V0ID0gZXZlbnQuX2N1cnJlbnRUYXJnZXQgPSBudWxsO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBFdmVudFRhcmdldDtcbn0oKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRXZlbnRUYXJnZXQ7XG5cbn0se1wiLi9EZXZpY2VNb3Rpb25FdmVudFwiOjcsXCIuL1RvdWNoRXZlbnRcIjozNixcIi4vdXRpbC9XZWFrTWFwXCI6NTZ9XSwxMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL1dlYWtNYXBcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbnZhciBGb250RmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRm9udEZhY2UoZmFtaWx5LCBzb3VyY2UsIGRlc2NyaXB0b3JzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvbnRGYWNlKTtcbiAgICB0aGlzLmZhbWlseSA9IGZhbWlseTtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLmRlc2NyaXB0b3JzID0gZGVzY3JpcHRvcnM7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBfc2VsZlByaXZhdGUgPSB7XG4gICAgICBzdGF0dXM6IFwidW5sb2FkZWRcIixcbiAgICAgIF9zdGF0dXM6IFwidW5sb2FkZWRcIixcbiAgICAgIGxvYWQ6IGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJsb2FkaW5nXCI7XG4gICAgICAgIHZhciBzb3VyY2U7XG4gICAgICAgIGlmIChzZWxmLnNvdXJjZS5tYXRjaCgvdXJsXFwoXFxzKidcXHMqKC4qPylcXHMqJ1xccypcXCkvKSkge1xuICAgICAgICAgIHNvdXJjZSA9IHNlbGYuc291cmNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvdXJjZSA9IFwidXJsKCdcIiArIHNlbGYuc291cmNlICsgXCInKVwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmYW1pbHkgPSByYWwubG9hZEZvbnQoc2VsZi5mYW1pbHksIHNvdXJjZSk7XG4gICAgICAgIGlmIChmYW1pbHkpIHtcbiAgICAgICAgICB0aGlzLl9zdGF0dXMgPSBcImxvYWRlZFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IFwiZXJyb3JcIjtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgc3RhdHVzID0gX3NlbGZQcml2YXRlLnN0YXR1cyA9IF9zZWxmUHJpdmF0ZS5fc3RhdHVzO1xuICAgICAgICAgIGlmIChzdGF0dXMgPT09IFwibG9hZGVkXCIpIHtcbiAgICAgICAgICAgIF9zZWxmUHJpdmF0ZS5sb2FkUmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfc2VsZlByaXZhdGUubG9hZFJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uc2V0KHRoaXMsIF9zZWxmUHJpdmF0ZSk7XG4gICAgX3NlbGZQcml2YXRlLmxvYWRlZCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIF9zZWxmUHJpdmF0ZS5sb2FkUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICBfc2VsZlByaXZhdGUubG9hZFJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoRm9udEZhY2UsIFt7XG4gICAga2V5OiBcInN0YXR1c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc3RhdHVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmxvYWRlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5sb2FkKCk7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5sb2FkZWQ7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBGb250RmFjZTtcbn0oKTtcbm1vZHVsZS5leHBvcnRzID0gRm9udEZhY2U7XG5cbn0se1wiLi91dGlsL1dlYWtNYXBcIjo1Nn1dLDEzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0V2ZW50VGFyZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRUYXJnZXRcIikpO1xudmFyIF9FdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRcIikpO1xudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL1dlYWtNYXBcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG52YXIgRm9udEZhY2VTZXQgPSBmdW5jdGlvbiAoX0V2ZW50VGFyZ2V0KSB7XG4gIF9pbmhlcml0cyhGb250RmFjZVNldCwgX0V2ZW50VGFyZ2V0KTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihGb250RmFjZVNldCk7XG4gIGZ1bmN0aW9uIEZvbnRGYWNlU2V0KCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9udEZhY2VTZXQpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgdmFyIHNlbGYgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5zdGF0dXMgPSBcImxvYWRlZFwiO1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLnJlYWR5ID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5yZWFkeVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5yZWFkeVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5mb250RmFjZVNldCA9IFtdO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoRm9udEZhY2VTZXQsIFt7XG4gICAga2V5OiBcInN0YXR1c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc3RhdHVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWFkeVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykucmVhZHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoZm9udEZhY2UpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZm9udEZhY2VTZXQucHVzaChmb250RmFjZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNoZWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRm9udEZhY2VTZXQuY2hlY2soKSBub3QgaW1wbGVtZW50c1wiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xlYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJGb250RmFjZVNldC5jbGVhcigpIG5vdCBpbXBsZW1lbnRzXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWxldGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2RlbGV0ZSgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkZvbnRGYWNlU2V0LmRlbGV0ZSgpIG5vdCBpbXBsZW1lbnRzXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLnN0YXR1cyA9IFwibG9hZGluZ1wiO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKCdsb2FkaW5nJykpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGZvbnRGYWNlU2V0ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5mb250RmFjZVNldDtcbiAgICAgICAgaWYgKGZvbnRGYWNlU2V0KSB7XG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gZm9udEZhY2VTZXQpIHtcbiAgICAgICAgICAgIHZhciBmb250RmFjZSA9IGZvbnRGYWNlU2V0W2luZGV4XTtcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KGZvbnRGYWNlKS5zdGF0dXM7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSBcInVubG9hZGVkXCIgfHwgc3RhdHVzID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgICAgZm9udEZhY2UubG9hZCgpO1xuICAgICAgICAgICAgICBpZiAoX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChmb250RmFjZSkuX3N0YXR1cyAhPT0gXCJsb2FkZWRcIikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoc2VsZikuc3RhdHVzID0gXCJsb2FkZWRcIjtcbiAgICAgICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLnJlYWR5UmVzb2x2ZShbXS5jb25jYXQoX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5mb250RmFjZVNldCkpO1xuICAgICAgICAgIHJlc29sdmUoW10uY29uY2F0KF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoc2VsZikuZm9udEZhY2VTZXQpKTtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oJ2xvYWRpbmdkb25lJykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLnN0YXR1cyA9IFwibG9hZGVkXCI7XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoc2VsZikucmVhZHlSZWplY3QoKTtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXSgnbG9hZGluZ2Vycm9yJykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBGb250RmFjZVNldDtcbn0oX0V2ZW50VGFyZ2V0MltcImRlZmF1bHRcIl0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBGb250RmFjZVNldDtcblxufSx7XCIuL0V2ZW50XCI6MTAsXCIuL0V2ZW50VGFyZ2V0XCI6MTEsXCIuL3V0aWwvV2Vha01hcFwiOjU2fV0sMTQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFwiKSk7XG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvV2Vha01hcFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbnZhciBIVE1MQW5jaG9yRWxlbWVudCA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxBbmNob3JFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxBbmNob3JFbGVtZW50KTtcbiAgZnVuY3Rpb24gSFRNTEFuY2hvckVsZW1lbnQoKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MQW5jaG9yRWxlbWVudCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBcIkFcIik7XG4gICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkucHJvdG9jb2wgPSBcIjpcIjtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEhUTUxBbmNob3JFbGVtZW50LCBbe1xuICAgIGtleTogXCJwcm90b2NvbFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykucHJvdG9jb2w7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBIVE1MQW5jaG9yRWxlbWVudDtcbn0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBIVE1MQW5jaG9yRWxlbWVudDtcblxufSx7XCIuL0hUTUxFbGVtZW50XCI6MTgsXCIuL3V0aWwvV2Vha01hcFwiOjU2fV0sMTU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfSFRNTE1lZGlhRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxNZWRpYUVsZW1lbnRcIikpO1xudmFyIF9FdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRcIikpO1xudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL1dlYWtNYXBcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7IGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LnNldCkgeyBzZXQgPSBSZWZsZWN0LnNldDsgfSBlbHNlIHsgc2V0ID0gZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikgeyB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpOyB2YXIgZGVzYzsgaWYgKGJhc2UpIHsgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpOyBpZiAoZGVzYy5zZXQpIHsgZGVzYy5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpOyByZXR1cm4gdHJ1ZTsgfSBlbHNlIGlmICghZGVzYy53cml0YWJsZSkgeyByZXR1cm4gZmFsc2U7IH0gfSBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyZWNlaXZlciwgcHJvcGVydHkpOyBpZiAoZGVzYykgeyBpZiAoIWRlc2Mud3JpdGFibGUpIHsgcmV0dXJuIGZhbHNlOyB9IGRlc2MudmFsdWUgPSB2YWx1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgZGVzYyk7IH0gZWxzZSB7IF9kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIHZhbHVlKTsgfSByZXR1cm4gdHJ1ZTsgfTsgfSByZXR1cm4gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcik7IH1cbmZ1bmN0aW9uIF9zZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyLCBpc1N0cmljdCkgeyB2YXIgcyA9IHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTsgaWYgKCFzICYmIGlzU3RyaWN0KSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ2ZhaWxlZCB0byBzZXQgcHJvcGVydHknKTsgfSByZXR1cm4gdmFsdWU7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9nZXQoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkgeyBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpOyB9IGVsc2UgeyBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikgeyB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpOyBpZiAoIWJhc2UpIHJldHVybjsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTsgaWYgKGRlc2MuZ2V0KSB7IHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjLnZhbHVlOyB9OyB9IHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHsgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHsgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrOyB9IHJldHVybiBvYmplY3Q7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG52YXIgSFRNTEF1ZGlvRWxlbWVudCA9IGZ1bmN0aW9uIChfSFRNTE1lZGlhRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTEF1ZGlvRWxlbWVudCwgX0hUTUxNZWRpYUVsZW1lbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxBdWRpb0VsZW1lbnQpO1xuICBmdW5jdGlvbiBIVE1MQXVkaW9FbGVtZW50KHVybCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTEF1ZGlvRWxlbWVudCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB1cmwsICdBVURJTycpO1xuICAgIHZhciBpbm5lckF1ZGlvQ29udGV4dCA9IHJhbC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xuICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uQ2FucGxheShmdW5jdGlvbiAoKSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmR1cmF0aW9uID0gaW5uZXJBdWRpb0NvbnRleHQuZHVyYXRpb247XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJjYW5wbGF5XCIpKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImNhbnBsYXl0aHJvdWdoXCIpKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImR1cmF0aW9uY2hhbmdlXCIpKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRlZG1ldGFkYXRhXCIpKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRlZGRhdGFcIikpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uUGxheShmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJwbGF5XCIpKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInBsYXlpbmdcIikpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uUGF1c2UoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwicGF1c2VcIikpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uRW5kZWQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwiZW5kZWRcIikpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5kdXJhdGlvbiA9IE5hTjtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImVycm9yXCIpKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImVtcHRpZWRcIikpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uV2FpdGluZyhmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJ3YWl0aW5nXCIpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vblNlZWtlZChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJzZWVrZWRcIikpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uU2Vla2luZyhmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJzZWVraW5nXCIpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vblRpbWVVcGRhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwidGltZXVwZGF0ZVwiKSk7XG4gICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gdXJsO1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLmlubmVyQXVkaW9Db250ZXh0ID0gaW5uZXJBdWRpb0NvbnRleHQ7XG4gICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkuZHVyYXRpb24gPSBOYU47XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhIVE1MQXVkaW9FbGVtZW50LCBbe1xuICAgIGtleTogXCJjdXJyZW50VGltZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5uZXJBdWRpb0NvbnRleHQuY3VycmVudFRpbWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbm5lckF1ZGlvQ29udGV4dC5zZWVrKHZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9vcFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKEhUTUxBdWRpb0VsZW1lbnQucHJvdG90eXBlKSwgXCJsb29wXCIsIHRoaXMpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKEhUTUxBdWRpb0VsZW1lbnQucHJvdG90eXBlKSwgXCJsb29wXCIsIHZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5uZXJBdWRpb0NvbnRleHQubG9vcCA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2b2x1bWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihIVE1MQXVkaW9FbGVtZW50LnByb3RvdHlwZSksIFwidm9sdW1lXCIsIHRoaXMpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKEhUTUxBdWRpb0VsZW1lbnQucHJvdG90eXBlKSwgXCJ2b2x1bWVcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbm5lckF1ZGlvQ29udGV4dC52b2x1bWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInZvbHVtZWNoYW5nZVwiKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhblBsYXlUeXBlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblBsYXlUeXBlKCkge1xuICAgICAgdmFyIG1lZGlhVHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgICBpZiAodHlwZW9mIG1lZGlhVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgaWYgKG1lZGlhVHlwZS5pbmRleE9mKCdhdWRpby9tcGVnJykgPiAtMSB8fCBtZWRpYVR5cGUuaW5kZXhPZignYXVkaW8vbXA0JykpIHtcbiAgICAgICAgcmV0dXJuICdwcm9iYWJseSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNyY1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKEhUTUxBdWRpb0VsZW1lbnQucHJvdG90eXBlKSwgXCJzcmNcIiwgdGhpcyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoSFRNTEF1ZGlvRWxlbWVudC5wcm90b3R5cGUpLCBcInNyY1wiLCB2YWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2Fkc3RhcnRcIikpO1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbm5lckF1ZGlvQ29udGV4dC5zcmMgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZHN0YXJ0XCIpKTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gX2dldChfZ2V0UHJvdG90eXBlT2YoSFRNTEF1ZGlvRWxlbWVudC5wcm90b3R5cGUpLCBcInNyY1wiLCB0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicGF1c2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0LnBhdXNlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBsYXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5uZXJBdWRpb0NvbnRleHQucGxheSgpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwicHJvZ3Jlc3NcIikpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gSFRNTEF1ZGlvRWxlbWVudDtcbn0oX0hUTUxNZWRpYUVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEhUTUxBdWRpb0VsZW1lbnQ7XG5cbn0se1wiLi9FdmVudFwiOjEwLFwiLi9IVE1MTWVkaWFFbGVtZW50XCI6MjMsXCIuL3V0aWwvV2Vha01hcFwiOjU2fV0sMTY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudC5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgSFRNTEJvZHlFbGVtZW50ID0gZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTEJvZHlFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxCb2R5RWxlbWVudCk7XG4gIGZ1bmN0aW9uIEhUTUxCb2R5RWxlbWVudChwYXJlbnROb2RlKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MQm9keUVsZW1lbnQpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgXCJCT0RZXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwYXJlbnROb2RlXCIsIG51bGwpO1xuICAgIF90aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEhUTUxCb2R5RWxlbWVudCk7XG59KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSFRNTEJvZHlFbGVtZW50O1xuXG59LHtcIi4vSFRNTEVsZW1lbnQuanNcIjoxOH1dLDE3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG52YXIgX0hUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnRcIikpO1xudmFyIF9JbWFnZURhdGEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ltYWdlRGF0YVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmlmIChyYWwuZ2V0RmVhdHVyZVByb3BlcnR5KFwiSFRNTENhbnZhc0VsZW1lbnRcIiwgXCJzcGVjXCIpID09PSBcInZpdm9fcGxhdGZvcm1fc3VwcG9ydFwiKSB7XG4gIHZhciBIVE1MQ2FudmFzRWxlbWVudCA9IHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudDtcbiAgbW9kdWxlLmV4cG9ydHMgPSBIVE1MQ2FudmFzRWxlbWVudDtcbn0gZWxzZSB7XG4gIHZhciBDQU5WQVNfREVGQVVMVF9XSURUSCA9IDMwMDtcbiAgdmFyIENBTlZBU19ERUZBVUxUX0hFSUdIVCA9IDE1MDtcbiAgd2luZG93LnJhbCA9IHdpbmRvdy5yYWwgfHwge307XG4gIHZhciBfY3JlYXRlQ2FudmFzID0gcmFsLmNyZWF0ZUNhbnZhcztcbiAgdmFyIF9IVE1MQ2FudmFzRWxlbWVudCA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgICBfaW5oZXJpdHMoX0hUTUxDYW52YXNFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoX0hUTUxDYW52YXNFbGVtZW50KTtcbiAgICBmdW5jdGlvbiBfSFRNTENhbnZhc0VsZW1lbnQod2lkdGgsIGhlaWdodCkge1xuICAgICAgdmFyIF90aGlzO1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9IVE1MQ2FudmFzRWxlbWVudCk7XG4gICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsICdDQU5WQVMnKTtcbiAgICAgIF90aGlzLmlkID0gJ2dsY2FudmFzJztcbiAgICAgIF90aGlzLnR5cGUgPSAnY2FudmFzJztcbiAgICAgIF90aGlzLnRvcCA9IDA7XG4gICAgICBfdGhpcy5sZWZ0ID0gMDtcbiAgICAgIGlmICh0eXBlb2YgcmFsLmdldEZlYXR1cmVQcm9wZXJ0eShcInJhbC5jcmVhdGVDYW52YXNcIiwgXCJzcGVjXCIpID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBfY3JlYXRlQ2FudmFzKCk7XG4gICAgICAgIGNhbnZhcy5fX3Byb3RvX18uX19wcm90b19fID0gX0hUTUxDYW52YXNFbGVtZW50LnByb3RvdHlwZTtcbiAgICAgICAgT2JqZWN0LmtleXMoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIGNhbnZhc1trZXldID0gdGhpc1trZXldO1xuICAgICAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGggPj0gMCA/IE1hdGguY2VpbCh3aWR0aCkgOiBDQU5WQVNfREVGQVVMVF9XSURUSDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodCA+PSAwID8gTWF0aC5jZWlsKGhlaWdodCkgOiBDQU5WQVNfREVGQVVMVF9IRUlHSFQ7XG4gICAgICAgIGNhbnZhcy5fdGFyZ2V0SUQgPSBfdGhpcy5fdGFyZ2V0SUQ7XG4gICAgICAgIGNhbnZhcy5fbGlzdGVuZXJDb3VudCA9IF90aGlzLl9saXN0ZW5lckNvdW50O1xuICAgICAgICBjYW52YXMuX2xpc3RlbmVycyA9IF90aGlzLl9saXN0ZW5lcnM7XG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgY2FudmFzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLl93aWR0aCA9IHdpZHRoID8gTWF0aC5jZWlsKHdpZHRoKSA6IENBTlZBU19ERUZBVUxUX1dJRFRIO1xuICAgICAgICBfdGhpcy5faGVpZ2h0ID0gaGVpZ2h0ID8gTWF0aC5jZWlsKGhlaWdodCkgOiBDQU5WQVNfREVGQVVMVF9IRUlHSFQ7XG4gICAgICAgIF90aGlzLl9jb250ZXh0MkQgPSBudWxsO1xuICAgICAgICBfdGhpcy5fZGF0YUlubmVyID0gbnVsbDtcbiAgICAgICAgX3RoaXMuX2FsaWdubWVudCA9IF90aGlzLl93aWR0aCAlIDIgPT09IDAgPyA4IDogNDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgX2NyZWF0ZUNsYXNzKF9IVE1MQ2FudmFzRWxlbWVudCwgW3tcbiAgICAgIGtleTogXCJnZXRDb250ZXh0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udGV4dChuYW1lLCBvcHRzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKG5hbWUgPT09ICd3ZWJnbCcgfHwgbmFtZSA9PT0gJ2V4cGVyaW1lbnRhbC13ZWJnbCcpIHtcbiAgICAgICAgICByZXR1cm4gd2luZG93Ll9fZ2w7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJzJkJykge1xuICAgICAgICAgIGlmICghdGhpcy5fY29udGV4dDJEKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0MkQgPSBuZXcgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQyRC5faW5uZXJDYW52YXMgPSB0aGlzO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dDJEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfZGF0YVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb250ZXh0MkQgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2RhdGFJbm5lcikge1xuICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fY29udGV4dDJELl9nZXREYXRhKCk7XG4gICAgICAgICAgdGhpcy5fZGF0YUlubmVyID0gbmV3IF9JbWFnZURhdGFbXCJkZWZhdWx0XCJdKGRhdGEsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUlubmVyO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbGllbnRXaWR0aFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpZHRoO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbGllbnRIZWlnaHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIndpZHRoXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHdpZHRoKSB7XG4gICAgICAgIHdpZHRoID0gcGFyc2VJbnQod2lkdGgpO1xuICAgICAgICBpZiAoaXNOYU4od2lkdGgpKSB7XG4gICAgICAgICAgd2lkdGggPSBDQU5WQVNfREVGQVVMVF9XSURUSDtcbiAgICAgICAgfSBlbHNlIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgICB3aWR0aCA9IENBTlZBU19ERUZBVUxUX1dJRFRIO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuX2FsaWdubWVudCA9IHRoaXMuX3dpZHRoICUgMiA9PT0gMCA/IDggOiA0O1xuICAgICAgICBpZiAodGhpcy5fY29udGV4dDJEKSB7XG4gICAgICAgICAgdGhpcy5fY29udGV4dDJELl93aWR0aCA9IHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RhdGFJbm5lciA9IG51bGw7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImhlaWdodFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoaGVpZ2h0KSB7XG4gICAgICAgIGhlaWdodCA9IHBhcnNlSW50KGhlaWdodCk7XG4gICAgICAgIGlmIChpc05hTihoZWlnaHQpKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gQ0FOVkFTX0RFRkFVTFRfSEVJR0hUO1xuICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICBoZWlnaHQgPSBDQU5WQVNfREVGQVVMVF9IRUlHSFQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBpZiAodGhpcy5fY29udGV4dDJEKSB7XG4gICAgICAgICAgdGhpcy5fY29udGV4dDJELl9oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGF0YUlubmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIF9IVE1MQ2FudmFzRWxlbWVudDtcbiAgfShfSFRNTEVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG4gIG1vZHVsZS5leHBvcnRzID0gX0hUTUxDYW52YXNFbGVtZW50O1xufVxuXG59LHtcIi4vSFRNTEVsZW1lbnRcIjoxOCxcIi4vSW1hZ2VEYXRhXCI6Mjh9XSwxODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9FbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRWxlbWVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgSFRNTEVsZW1lbnQgPSBmdW5jdGlvbiAoX0VsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxFbGVtZW50LCBfRWxlbWVudCk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSFRNTEVsZW1lbnQpO1xuICBmdW5jdGlvbiBIVE1MRWxlbWVudCh0YWdOYW1lKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MRWxlbWVudCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0YWdOYW1lKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2xhc3NOYW1lXCIsICcnKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2hpbGRlcm5cIiwgW10pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdHlsZVwiLCB7XG4gICAgICB3aWR0aDogXCJcIi5jb25jYXQod2luZG93LmlubmVyV2lkdGgsIFwicHhcIiksXG4gICAgICBoZWlnaHQ6IFwiXCIuY29uY2F0KHdpbmRvdy5pbm5lckhlaWdodCwgXCJweFwiKVxuICAgIH0pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbnNlcnRCZWZvcmVcIiwgZnVuY3Rpb24gKCkge30pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbm5lckhUTUxcIiwgJycpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoSFRNTEVsZW1lbnQsIFt7XG4gICAga2V5OiBcInNldEF0dHJpYnV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgICAgIHRoaXNbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QXR0cmlidXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpc1tuYW1lXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xpZW50V2lkdGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciByZXQgPSBwYXJzZUludCh0aGlzLnN0eWxlLmZvbnRTaXplLCAxMCkgKiB0aGlzLmlubmVySFRNTC5sZW5ndGg7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzTmFOKHJldCkgPyAwIDogcmV0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGllbnRIZWlnaHRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciByZXQgPSBwYXJzZUludCh0aGlzLnN0eWxlLmZvbnRTaXplLCAxMCk7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzTmFOKHJldCkgPyAwIDogcmV0O1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gSFRNTEVsZW1lbnQ7XG59KF9FbGVtZW50MltcImRlZmF1bHRcIl0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBIVE1MRWxlbWVudDtcblxufSx7XCIuL0VsZW1lbnRcIjo5fV0sMTk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudC5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgSFRNTEhlYWRFbGVtZW50ID0gZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTEhlYWRFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxIZWFkRWxlbWVudCk7XG4gIGZ1bmN0aW9uIEhUTUxIZWFkRWxlbWVudChwYXJlbnROb2RlKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MSGVhZEVsZW1lbnQpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgXCJIRUFEXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwYXJlbnROb2RlXCIsIG51bGwpO1xuICAgIF90aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEhUTUxIZWFkRWxlbWVudCk7XG59KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSFRNTEhlYWRFbGVtZW50O1xuXG59LHtcIi4vSFRNTEVsZW1lbnQuanNcIjoxOH1dLDIwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0hUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG52YXIgSFRNTEh0bWxFbGVtZW50ID0gZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTEh0bWxFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxIdG1sRWxlbWVudCk7XG4gIGZ1bmN0aW9uIEhUTUxIdG1sRWxlbWVudCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTEh0bWxFbGVtZW50KTtcbiAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgXCJIVE1MXCIpO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhIVE1MSHRtbEVsZW1lbnQsIFt7XG4gICAga2V5OiBcInZlcnNpb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gSFRNTEh0bWxFbGVtZW50O1xufShfSFRNTEVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEhUTUxIdG1sRWxlbWVudDtcblxufSx7XCIuL0hUTUxFbGVtZW50XCI6MTh9XSwyMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxudmFyIF9IVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcbnZhciBfRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuaWYgKHJhbC5nZXRGZWF0dXJlUHJvcGVydHkoXCJIVE1MSW1hZ2VFbGVtZW50XCIsIFwic3BlY1wiKSA9PT0gXCJ2aXZvX3BsYXRmb3JtX3N1cHBvcnRcIikge1xuICB2YXIgSFRNTEltYWdlRWxlbWVudCA9IHdpbmRvdy5IVE1MSW1hZ2VFbGVtZW50O1xuICBtb2R1bGUuZXhwb3J0cyA9IEhUTUxJbWFnZUVsZW1lbnQ7XG59IGVsc2Uge1xuICB3aW5kb3cucmFsID0gd2luZG93LnJhbCB8fCB7fTtcbiAgdmFyIF9jcmV0ZUltYWdlID0gcmFsLmNyZWF0ZUltYWdlO1xuICB2YXIgX2ltYWdlO1xuICB2YXIgX3NldHRlcjtcbiAgdmFyIF9nZXR0ZXI7XG4gIGlmICh0eXBlb2YgcmFsLmdldEZlYXR1cmVQcm9wZXJ0eShcInJhbC5jcmVhdGVJbWFnZVwiLCBcInNwZWNcIikgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBfaW1hZ2UgPSBfY3JldGVJbWFnZSgpO1xuICAgIHZhciBfZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2ltYWdlLl9fcHJvdG9fXywgXCJzcmNcIik7XG4gICAgX3NldHRlciA9IF9kZXNjcmlwdG9yLnNldDtcbiAgICBfZ2V0dGVyID0gX2Rlc2NyaXB0b3IuZ2V0O1xuICB9XG4gIHZhciBfSFRNTEltYWdlRWxlbWVudCA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgICBfaW5oZXJpdHMoX0hUTUxJbWFnZUVsZW1lbnQsIF9IVE1MRWxlbWVudCk7XG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihfSFRNTEltYWdlRWxlbWVudCk7XG4gICAgZnVuY3Rpb24gX0hUTUxJbWFnZUVsZW1lbnQod2lkdGgsIGhlaWdodCwgaXNDYWxsZWRGcm9tSW1hZ2UpIHtcbiAgICAgIHZhciBfdGhpcztcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfSFRNTEltYWdlRWxlbWVudCk7XG4gICAgICBpZiAoIWlzQ2FsbGVkRnJvbUltYWdlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGNvbnN0cnVjdG9yLCB1c2UgJ25ldyBJbWFnZSh3LCBoKTsgaW5zdGVhZCEnXCIpO1xuICAgICAgfVxuICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCAnSU1HJyk7XG4gICAgICBfdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgX3RoaXMuY3Jvc3NPcmlnaW4gPSBudWxsO1xuICAgICAgX3RoaXMubmF0dXJhbFdpZHRoID0gMDtcbiAgICAgIF90aGlzLm5hdHVyYWxIZWlnaHQgPSAwO1xuICAgICAgX3RoaXMud2lkdGggPSB3aWR0aCB8fCAwO1xuICAgICAgX3RoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IDA7XG4gICAgICBpZiAodHlwZW9mIHJhbC5nZXRGZWF0dXJlUHJvcGVydHkoXCJyYWwuY3JlYXRlSW1hZ2VcIiwgXCJzcGVjXCIpID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IF9jcmV0ZUltYWdlKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBpbWFnZVtrZXldID0gdGhpc1trZXldO1xuICAgICAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICAgICAgaW1hZ2UuX29ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm5hdHVyYWxXaWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgICAgdGhpcy5uYXR1cmFsSGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZFwiKSk7XG4gICAgICAgIH0uYmluZChpbWFnZSk7XG4gICAgICAgIGltYWdlLl9vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImVycm9yXCIpKTtcbiAgICAgICAgfS5iaW5kKGltYWdlKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGltYWdlLCBcInNyY1wiLCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2dldHRlci5jYWxsKHRoaXMpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBfc2V0dGVyLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgaW1hZ2UpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBfY3JlYXRlQ2xhc3MoX0hUTUxJbWFnZUVsZW1lbnQsIFt7XG4gICAgICBrZXk6IFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkge1xuICAgICAgICByZXR1cm4gbmV3IERPTVJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzcmNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3JjO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHNyYykge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgICAgdGhpcy5fc3JjID0gc3JjO1xuICAgICAgICBpZiAoc3JjID09PSBcIlwiKSB7XG4gICAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgICAgIHRoaXMuX2RhdGEgPSBudWxsO1xuICAgICAgICAgIHRoaXMuX2ltYWdlTWV0YSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fZ2xGb3JtYXQgPSB0aGlzLl9nbEludGVybmFsRm9ybWF0ID0gMHgxOTA4O1xuICAgICAgICAgIHRoaXMuY3Jvc3NPcmlnaW4gPSBudWxsO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByYWwubG9hZEltYWdlRGF0YShzcmMsIGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgaWYgKCFpbmZvKSB7XG4gICAgICAgICAgICB2YXIgX2V2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oJ2Vycm9yJyk7XG4gICAgICAgICAgICBfdGhpczIuZGlzcGF0Y2hFdmVudChfZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfdGhpczIuX2ltYWdlTWV0YSA9IGluZm87XG4gICAgICAgICAgX3RoaXMyLndpZHRoID0gX3RoaXMyLm5hdHVyYWxXaWR0aCA9IGluZm8ud2lkdGg7XG4gICAgICAgICAgX3RoaXMyLmhlaWdodCA9IF90aGlzMi5uYXR1cmFsSGVpZ2h0ID0gaW5mby5oZWlnaHQ7XG4gICAgICAgICAgX3RoaXMyLl9kYXRhID0gaW5mby5kYXRhO1xuICAgICAgICAgIF90aGlzMi5fZ2xGb3JtYXQgPSBpbmZvLmdsRm9ybWF0O1xuICAgICAgICAgIF90aGlzMi5fZ2xJbnRlcm5hbEZvcm1hdCA9IGluZm8uZ2xJbnRlcm5hbEZvcm1hdDtcbiAgICAgICAgICBfdGhpczIuX2dsVHlwZSA9IGluZm8uZ2xUeXBlO1xuICAgICAgICAgIF90aGlzMi5fbnVtYmVyT2ZNaXBtYXBzID0gaW5mby5udW1iZXJPZk1pcG1hcHM7XG4gICAgICAgICAgX3RoaXMyLl9jb21wcmVzc2VkID0gaW5mby5jb21wcmVzc2VkO1xuICAgICAgICAgIF90aGlzMi5fYnBwID0gaW5mby5icHA7XG4gICAgICAgICAgX3RoaXMyLl9wcmVtdWx0aXBseUFscGhhID0gaW5mby5wcmVtdWx0aXBseUFscGhhO1xuICAgICAgICAgIF90aGlzMi5fYWxpZ25tZW50ID0gMTtcbiAgICAgICAgICBpZiAoKF90aGlzMi5fbnVtYmVyT2ZNaXBtYXBzID09IDAgfHwgX3RoaXMyLl9udW1iZXJPZk1pcG1hcHMgPT0gMSkgJiYgIV90aGlzMi5fY29tcHJlc3NlZCkge1xuICAgICAgICAgICAgdmFyIGJ5dGVzUGVyUm93ID0gX3RoaXMyLndpZHRoICogX3RoaXMyLl9icHAgLyA4O1xuICAgICAgICAgICAgaWYgKGJ5dGVzUGVyUm93ICUgOCA9PSAwKSBfdGhpczIuX2FsaWdubWVudCA9IDg7ZWxzZSBpZiAoYnl0ZXNQZXJSb3cgJSA0ID09IDApIF90aGlzMi5fYWxpZ25tZW50ID0gNDtlbHNlIGlmIChieXRlc1BlclJvdyAlIDIgPT0gMCkgX3RoaXMyLl9hbGlnbm1lbnQgPSAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfdGhpczIuY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKCdsb2FkJyk7XG4gICAgICAgICAgX3RoaXMyLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xpZW50V2lkdGhcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xpZW50SGVpZ2h0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gX0hUTUxJbWFnZUVsZW1lbnQ7XG4gIH0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuICBtb2R1bGUuZXhwb3J0cyA9IF9IVE1MSW1hZ2VFbGVtZW50O1xufVxuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vSFRNTEVsZW1lbnRcIjoxOH1dLDIyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0hUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9nZXQoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkgeyBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpOyB9IGVsc2UgeyBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikgeyB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpOyBpZiAoIWJhc2UpIHJldHVybjsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTsgaWYgKGRlc2MuZ2V0KSB7IHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjLnZhbHVlOyB9OyB9IHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHsgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHsgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrOyB9IHJldHVybiBvYmplY3Q7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG53aW5kb3cucmFsID0gd2luZG93LnJhbCB8fCB7fTtcbnZhciBIVE1MSW5wdXRFbGVtZW50ID0gZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTElucHV0RWxlbWVudCwgX0hUTUxFbGVtZW50KTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIVE1MSW5wdXRFbGVtZW50KTtcbiAgZnVuY3Rpb24gSFRNTElucHV0RWxlbWVudCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTElucHV0RWxlbWVudCk7XG4gICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIFwiSU5QVVRcIik7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEhUTUxJbnB1dEVsZW1lbnQsIFt7XG4gICAga2V5OiBcImZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUpLCBcImZvY3VzXCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICBpZiAoIXRoaXMudGFyZ2V0LmVkaXRhYmxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHZhciBvbktleWJvYXJkSW5wdXQgPSBmdW5jdGlvbiBvbktleWJvYXJkSW5wdXQocmVzKSB7XG4gICAgICAgIHZhciBzdHIgPSByZXMgPyByZXMudmFsdWUgOiBcIlwiO1xuICAgICAgICB0aGF0LmlucHV0VGFyZ2V0LnRleHQgPSBzdHI7XG4gICAgICAgIHRoYXQudGFyZ2V0LmV2ZW50KFwiaW5wdXRcIik7XG4gICAgICB9O1xuICAgICAgdmFyIG9uS2V5Ym9hcmRDb25maXJtID0gZnVuY3Rpb24gb25LZXlib2FyZENvbmZpcm0ocmVzKSB7XG4gICAgICAgIHZhciBzdHIgPSByZXMgPyByZXMudmFsdWUgOiBcIlwiO1xuICAgICAgICB0aGF0LnRhcmdldC50ZXh0ID0gc3RyO1xuICAgICAgICB0aGF0LnRhcmdldC5ldmVudChcImlucHV0XCIpO1xuICAgICAgICB0aGF0LnRhcmdldC5mb2N1cyA9IGZhbHNlO1xuICAgICAgICByYWwub2ZmS2V5Ym9hcmRDb25maXJtKG9uS2V5Ym9hcmRDb25maXJtKTtcbiAgICAgICAgcmFsLm9mZktleWJvYXJkSW5wdXQob25LZXlib2FyZElucHV0KTtcbiAgICAgICAgcmFsLmhpZGVLZXlib2FyZCh7fSk7XG4gICAgICB9O1xuICAgICAgcmFsLm9mZktleWJvYXJkSW5wdXQob25LZXlib2FyZElucHV0KTtcbiAgICAgIHJhbC5vZmZLZXlib2FyZENvbmZpcm0ob25LZXlib2FyZENvbmZpcm0pO1xuICAgICAgcmFsLnNob3dLZXlib2FyZCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLm1heExlbmd0aCxcbiAgICAgICAgbXVsdGlwbGU6IHRoaXMudGFyZ2V0Lm11bHRpbGluZSxcbiAgICAgICAgY29uZmlybUhvbGQ6IGZhbHNlLFxuICAgICAgICBpbnB1dFR5cGU6IHRoaXMudGFyZ2V0LnR5cGUsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7fSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChyZXMpIHt9XG4gICAgICB9KTtcbiAgICAgIHJhbC5vbktleWJvYXJkSW5wdXQob25LZXlib2FyZElucHV0KTtcbiAgICAgIHJhbC5vbktleWJvYXJkQ29uZmlybShvbktleWJvYXJkQ29uZmlybSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlKSwgXCJibHVyXCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICByYWwuaGlkZUtleWJvYXJkKHt9KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEhUTUxJbnB1dEVsZW1lbnQ7XG59KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSFRNTElucHV0RWxlbWVudDtcblxufSx7XCIuL0hUTUxFbGVtZW50XCI6MTh9XSwyMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9IVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcbnZhciBfTWVkaWFFcnJvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTWVkaWFFcnJvclwiKSk7XG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvV2Vha01hcFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgSFRNTE1lZGlhRWxlbWVudCA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxNZWRpYUVsZW1lbnQsIF9IVE1MRWxlbWVudCk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSFRNTE1lZGlhRWxlbWVudCk7XG4gIGZ1bmN0aW9uIEhUTUxNZWRpYUVsZW1lbnQodXJsLCB0eXBlKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MTWVkaWFFbGVtZW50KTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHR5cGUpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJhdWRpb1RyYWNrc1wiLCB1bmRlZmluZWQpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJhdXRvcGxheVwiLCBmYWxzZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNvbnRyb2xsZXJcIiwgbnVsbCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNvbnRyb2xzXCIsIGZhbHNlKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY3Jvc3NPcmlnaW5cIiwgbnVsbCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImRlZmF1bHRNdXRlZFwiLCBmYWxzZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImRlZmF1bHRQbGF5YmFja1JhdGVcIiwgMS4wKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibWVkaWFHcm91cFwiLCB1bmRlZmluZWQpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJtZWRpYUtleXNcIiwgbnVsbCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm1vekF1ZGlvQ2hhbm5lbFR5cGVcIiwgdW5kZWZpbmVkKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibXV0ZWRcIiwgZmFsc2UpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJuZXR3b3JrU3RhdGVcIiwgSFRNTE1lZGlhRWxlbWVudC5ORVRXT1JLX0VNUFRZKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicGxheWJhY2tSYXRlXCIsIDEpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibG9vcFwiLCBmYWxzZSk7XG4gICAgT2JqZWN0LmFzc2lnbihfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwge1xuICAgICAgYnVmZmVyZWQ6IHVuZGVmaW5lZCxcbiAgICAgIGN1cnJlbnRTcmM6IHVybCB8fCBcIlwiLFxuICAgICAgZHVyYXRpb246IDAsXG4gICAgICBlbmRlZDogZmFsc2UsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIGluaXRpYWxUaW1lOiAwLFxuICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgcmVhZHlTdGF0ZTogSFRNTE1lZGlhRWxlbWVudC5IQVZFX05PVEhJTkcsXG4gICAgICB2b2x1bWU6IDEuMCxcbiAgICAgIGN1cnJlbnRUaW1lOiAwXG4gICAgfSk7XG4gICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZW5kZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJwbGF5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZW5kZWQgPSBmYWxzZTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZXJyb3IgPSBudWxsO1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5wYXVzZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBfdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5lcnJvciA9IHRydWU7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmVuZGVkID0gdHJ1ZTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykucGF1c2VkID0gZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhIVE1MTWVkaWFFbGVtZW50LCBbe1xuICAgIGtleTogXCJjdXJyZW50VGltZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuY3VycmVudFRpbWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5jdXJyZW50VGltZSA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzcmNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmN1cnJlbnRTcmM7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5jdXJyZW50U3JjID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJ1ZmZlcmVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5idWZmZXJlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3VycmVudFNyY1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuY3VycmVudFNyYztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZHVyYXRpb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmR1cmF0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlbmRlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZW5kZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVycm9yXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5lcnJvcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW5pdGlhbFRpbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmluaXRpYWxUaW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwYXVzZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLnBhdXNlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidm9sdW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS52b2x1bWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS52b2x1bWUgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuUGxheVR5cGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUGxheVR5cGUobWVkaWFUeXBlKSB7XG4gICAgICByZXR1cm4gJ21heWJlJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FwdHVyZVN0cmVhbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYXB0dXJlU3RyZWFtKCkge31cbiAgfSwge1xuICAgIGtleTogXCJmYXN0U2Vla1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmYXN0U2VlaygpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKCkge31cbiAgfSwge1xuICAgIGtleTogXCJwYXVzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicGxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge31cbiAgfV0sIFt7XG4gICAga2V5OiBcIk5FVFdPUktfRU1QVFlcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJORVRXT1JLX0lETEVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJORVRXT1JLX0xPQURJTkdcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJORVRXT1JLX05PX1NPVVJDRVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkhBVkVfTk9USElOR1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkhBVkVfTUVUQURBVEFcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJIQVZFX0NVUlJFTlRfREFUQVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkhBVkVfRlVUVVJFX0RBVEFcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJIQVZFX0VOT1VHSF9EQVRBXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gNDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEhUTUxNZWRpYUVsZW1lbnQ7XG59KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSFRNTE1lZGlhRWxlbWVudDtcblxufSx7XCIuL0hUTUxFbGVtZW50XCI6MTgsXCIuL01lZGlhRXJyb3JcIjozMCxcIi4vdXRpbC9XZWFrTWFwXCI6NTZ9XSwyNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9IVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcbnZhciBfRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcbnZhciBfRmlsZUNhY2hlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL0ZpbGVDYWNoZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgX0JBU0U2NF9OQU1FID0gXCJkYXRhOmFwcGxpY2F0aW9uL2phdmFzY3JpcHQ7YmFzZTY0LFwiO1xudmFyIF9VUklfTkFNRSA9IFwiZGF0YTphcHBsaWNhdGlvbi9qYXZhc2NyaXB0LFwiO1xudmFyIF9nZXRQYXRoRnJvbUJhc2U2NFN0cmluZyA9IGZ1bmN0aW9uIF9nZXRQYXRoRnJvbUJhc2U2NFN0cmluZyhzcmMpIHtcbiAgaWYgKHNyYyA9PT0gbnVsbCB8fCBzcmMgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBzcmM7XG4gIH1cbiAgaWYgKHNyYy5zdGFydHNXaXRoKF9CQVNFNjRfTkFNRSkpIHtcbiAgICB2YXIgY29udGVudCA9IHNyYy5zdWJzdHJpbmcoX0JBU0U2NF9OQU1FLmxlbmd0aCk7XG4gICAgdmFyIHNvdXJjZSA9IHdpbmRvdy5hdG9iKGNvbnRlbnQpO1xuICAgIHZhciBsZW4gPSBzb3VyY2UubGVuZ3RoO1xuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICByZXR1cm4gX2dldERpc2tQYXRoRnJvbUFycmF5QnVmZmVyKHNvdXJjZSwgbGVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNyYztcbiAgICB9XG4gIH0gZWxzZSBpZiAoc3JjLnN0YXJ0c1dpdGgoX1VSSV9OQU1FKSkge1xuICAgIHZhciBfY29udGVudCA9IHNyYy5zdWJzdHJpbmcoX1VSSV9OQU1FLmxlbmd0aCk7XG4gICAgdmFyIF9zb3VyY2UgPSBkZWNvZGVVUklDb21wb25lbnQoX2NvbnRlbnQpO1xuICAgIHZhciBfbGVuID0gX3NvdXJjZS5sZW5ndGg7XG4gICAgaWYgKF9sZW4gPiAwKSB7XG4gICAgICByZXR1cm4gX2dldERpc2tQYXRoRnJvbUFycmF5QnVmZmVyKF9zb3VyY2UsIF9sZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3JjO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3JjO1xuICB9XG59O1xuZnVuY3Rpb24gX2dldERpc2tQYXRoRnJvbUFycmF5QnVmZmVyKHNvdXJjZSwgbGVuKSB7XG4gIHZhciBhcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihsZW4pO1xuICB2YXIgdWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHVpbnQ4QXJyYXlbaV0gPSBzb3VyY2UuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gX0ZpbGVDYWNoZVtcImRlZmF1bHRcIl0uZ2V0Q2FjaGUoYXJyYXlCdWZmZXIpO1xufVxudmFyIEhUTUxTY3JpcHRFbGVtZW50ID0gZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTFNjcmlwdEVsZW1lbnQsIF9IVE1MRWxlbWVudCk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSFRNTFNjcmlwdEVsZW1lbnQpO1xuICBmdW5jdGlvbiBIVE1MU2NyaXB0RWxlbWVudCgpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxTY3JpcHRFbGVtZW50KTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsICdTQ1JJUFQnKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibm9Nb2R1bGVcIiwgZmFsc2UpO1xuICAgIHZhciBzZWxmID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyk7XG4gICAgdmFyIG9uQXBwZW5kID0gZnVuY3Rpb24gb25BcHBlbmQoKSB7XG4gICAgICBzZWxmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhcHBlbmRcIiwgb25BcHBlbmQpO1xuICAgICAgdmFyIHNyYyA9IF9nZXRQYXRoRnJvbUJhc2U2NFN0cmluZyhzZWxmLnNyYyk7XG4gICAgICByZXF1aXJlKHNyYyk7XG4gICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oJ2xvYWQnKSk7XG4gICAgfTtcbiAgICBfdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiYXBwZW5kXCIsIG9uQXBwZW5kKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhIVE1MU2NyaXB0RWxlbWVudCk7XG59KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSFRNTFNjcmlwdEVsZW1lbnQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTFNjcmlwdEVsZW1lbnQucHJvdG90eXBlLCBcIm5vTW9kdWxlXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtZXNzYWdlLCBcIklsbGVnYWwgaW52b2NhdGlvblwiKTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG1lc3NhZ2UsIFwiSWxsZWdhbCBpbnZvY2F0aW9uXCIpO1xuICB9XG59KTtcblxufSx7XCIuL0V2ZW50XCI6MTAsXCIuL0hUTUxFbGVtZW50XCI6MTgsXCIuL3V0aWwvRmlsZUNhY2hlXCI6NTV9XSwyNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9Gb250RmFjZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9udEZhY2VcIikpO1xudmFyIF9IVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxudmFyIEhUTUxTdHlsZUVsZW1lbnQgPSBmdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MU3R5bGVFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxTdHlsZUVsZW1lbnQpO1xuICBmdW5jdGlvbiBIVE1MU3R5bGVFbGVtZW50KCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTFN0eWxlRWxlbWVudCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBcIlNUWUxFXCIpO1xuICAgIHZhciBzZWxmID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyk7XG4gICAgdmFyIG9uQXBwZW5kID0gZnVuY3Rpb24gb25BcHBlbmQoKSB7XG4gICAgICBzZWxmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhcHBlbmRcIiwgb25BcHBlbmQpO1xuICAgICAgdmFyIHRleHRDb250ZW50ID0gc2VsZi50ZXh0Q29udGVudCB8fCBzZWxmLmlubmVySFRNTCB8fCBcIlwiO1xuICAgICAgdmFyIGZvbnRGYWNlU3RyID0gXCJcIjtcbiAgICAgIHZhciBzdGFydCA9IDA7XG4gICAgICB2YXIgbGVuZ3RoID0gdGV4dENvbnRlbnQubGVuZ3RoO1xuICAgICAgdmFyIGZsYWcgPSAwO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICBpZiAoc3RhcnQgPiAwKSB7XG4gICAgICAgICAgaWYgKHRleHRDb250ZW50W2luZGV4XSA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIGZsYWcrKztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRleHRDb250ZW50W2luZGV4XSA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIGZsYWctLTtcbiAgICAgICAgICAgIGlmIChmbGFnID09PSAwKSB7XG4gICAgICAgICAgICAgIGZvbnRGYWNlU3RyID0gdGV4dENvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0LCBpbmRleCArIDEpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmxhZyA8IDApIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0ZXh0Q29udGVudFtpbmRleF0gPT09IFwiQFwiICYmIHRleHRDb250ZW50LnN1YnN0cihpbmRleCwgXCJAZm9udC1mYWNlXCIubGVuZ3RoKSA9PT0gXCJAZm9udC1mYWNlXCIpIHtcbiAgICAgICAgICAgIGluZGV4ICs9IDk7XG4gICAgICAgICAgICBzdGFydCA9IGluZGV4ICsgMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb250RmFjZVN0cikge1xuICAgICAgICB2YXIgZm9udEZhbWlseTtcbiAgICAgICAgdmFyIF9sZW5ndGggPSBmb250RmFjZVN0ci5sZW5ndGg7XG4gICAgICAgIHZhciBfc3RhcnQgPSBmb250RmFjZVN0ci5pbmRleE9mKFwiZm9udC1mYW1pbHlcIik7XG4gICAgICAgIGlmIChfc3RhcnQgPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9zdGFydCArPSBcImZvbnQtZmFtaWx5XCIubGVuZ3RoICsgMTtcbiAgICAgICAgdmFyIGVuZCA9IF9zdGFydDtcbiAgICAgICAgZm9yICg7IGVuZCA8IF9sZW5ndGg7ICsrZW5kKSB7XG4gICAgICAgICAgaWYgKGZvbnRGYWNlU3RyW2VuZF0gPT09IFwiO1wiKSB7XG4gICAgICAgICAgICBmb250RmFtaWx5ID0gZm9udEZhY2VTdHIuc3Vic3RyaW5nKF9zdGFydCwgZW5kKS50cmltKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2UgaWYgKGZvbnRGYWNlU3RyW2VuZF0gPT09IFwiOlwiKSB7XG4gICAgICAgICAgICBfc3RhcnQgPSBlbmQgKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvbnRGYW1pbHkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZW5kID0gZm9udEZhY2VTdHIuaW5kZXhPZihcInVybChcIik7XG4gICAgICAgIF9zdGFydCA9IDA7XG4gICAgICAgIHZhciBzb3VyY2U7XG4gICAgICAgIGZvciAoOyBlbmQgPCBfbGVuZ3RoOyArK2VuZCkge1xuICAgICAgICAgIGlmIChmb250RmFjZVN0cltlbmRdID09PSBcIidcIiB8fCBmb250RmFjZVN0cltlbmRdID09PSAnXCInKSB7XG4gICAgICAgICAgICBpZiAoX3N0YXJ0ID4gMCkge1xuICAgICAgICAgICAgICBzb3VyY2UgPSBmb250RmFjZVN0ci5zdWJzdHJpbmcoX3N0YXJ0LCBlbmQpLnRyaW0oKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfc3RhcnQgPSBlbmQgKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgdmFyIGZvbnRGYWNlID0gbmV3IF9Gb250RmFjZVtcImRlZmF1bHRcIl0oZm9udEZhbWlseSwgc291cmNlKTtcbiAgICAgICAgICBmb250RmFjZS5sb2FkKCk7XG4gICAgICAgICAgZG9jdW1lbnQuZm9udHMuYWRkKGZvbnRGYWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImFwcGVuZFwiLCBvbkFwcGVuZCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoSFRNTFN0eWxlRWxlbWVudCk7XG59KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSFRNTFN0eWxlRWxlbWVudDtcblxufSx7XCIuL0ZvbnRGYWNlXCI6MTIsXCIuL0hUTUxFbGVtZW50XCI6MTh9XSwyNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9IVE1MTWVkaWFFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTE1lZGlhRWxlbWVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbnZhciBIVE1MVmlkZW9FbGVtZW50ID0gZnVuY3Rpb24gKF9IVE1MTWVkaWFFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MVmlkZW9FbGVtZW50LCBfSFRNTE1lZGlhRWxlbWVudCk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSFRNTFZpZGVvRWxlbWVudCk7XG4gIGZ1bmN0aW9uIEhUTUxWaWRlb0VsZW1lbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxWaWRlb0VsZW1lbnQpO1xuICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCAnVklERU8nKTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoSFRNTFZpZGVvRWxlbWVudCwgW3tcbiAgICBrZXk6IFwiY2FuUGxheVR5cGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUGxheVR5cGUodHlwZSkge1xuICAgICAgcmV0dXJuIHR5cGUgPT09ICd2aWRlby9tcDQnO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gSFRNTFZpZGVvRWxlbWVudDtcbn0oX0hUTUxNZWRpYUVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEhUTUxWaWRlb0VsZW1lbnQ7XG5cbn0se1wiLi9IVE1MTWVkaWFFbGVtZW50XCI6MjN9XSwyNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxudmFyIF9IVE1MSW1hZ2VFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEltYWdlRWxlbWVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmlmIChyYWwuZ2V0RmVhdHVyZVByb3BlcnR5KFwiSW1hZ2VcIiwgXCJzcGVjXCIpID09PSBcInZpdm9fcGxhdGZvcm1fc3VwcG9ydFwiKSB7XG4gIHZhciBJbWFnZSA9IHdpbmRvdy5JbWFnZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSBJbWFnZTtcbn0gZWxzZSB7XG4gIHZhciBfSW1hZ2UgPSB3aW5kb3cuSW1hZ2U7XG4gIHZhciBfSW1hZ2UyID0gZnVuY3Rpb24gKF9IVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgX2luaGVyaXRzKF9JbWFnZTIsIF9IVE1MSW1hZ2VFbGVtZW50KTtcbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKF9JbWFnZTIpO1xuICAgIGZ1bmN0aW9uIF9JbWFnZTIod2lkdGgsIGhlaWdodCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9JbWFnZTIpO1xuICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHdpZHRoLCBoZWlnaHQsIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gX2NyZWF0ZUNsYXNzKF9JbWFnZTIpO1xuICB9KF9IVE1MSW1hZ2VFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuICB2YXIgX2NyZXRlSW1hZ2UgPSByYWwuY3JlYXRlSW1hZ2U7XG4gIGlmIChfY3JldGVJbWFnZSkge1xuICAgIF9JbWFnZS5wcm90b3R5cGUuX19wcm90b19fID0gX0ltYWdlMi5wcm90b3R5cGU7XG4gIH1cbiAgbW9kdWxlLmV4cG9ydHMgPSBfSW1hZ2UyO1xufVxuXG59LHtcIi4vSFRNTEltYWdlRWxlbWVudFwiOjIxfV0sMjg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxudmFyIEltYWdlRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSW1hZ2VEYXRhKGFycmF5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEltYWdlRGF0YSk7XG4gICAgaWYgKHR5cGVvZiBhcnJheSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHdpZHRoID09ICdudW1iZXInKSB7XG4gICAgICBoZWlnaHQgPSB3aWR0aDtcbiAgICAgIHdpZHRoID0gYXJyYXk7XG4gICAgICBhcnJheSA9IG51bGw7XG4gICAgfVxuICAgIGlmIChhcnJheSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fZGF0YSA9IG5ldyBVaW50OENsYW1wZWRBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gYXJyYXk7XG4gICAgfVxuICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG4gIF9jcmVhdGVDbGFzcyhJbWFnZURhdGEsIFt7XG4gICAga2V5OiBcImRhdGFcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3aWR0aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoZWlnaHRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBJbWFnZURhdGE7XG59KCk7XG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlRGF0YTtcblxufSx7fV0sMjk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbnZhciBMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTG9jYXRpb24oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvY2F0aW9uKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhbmNlc3Rvck9yaWdpbnNcIiwgXCJcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaGFzaFwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJob3N0XCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImhvc3RuYW1lXCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImhyZWZcIiwgXCJcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib3JpZ2luXCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBhc3N3b3JkXCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBhdGhuYW1lXCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBvcnRcIiwgXCJcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicHJvdG9jb2xcIiwgXCJcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2VhcmNoXCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInVzZXJuYW1lXCIsIFwiXCIpO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhMb2NhdGlvbiwgW3tcbiAgICBrZXk6IFwiYXNzaWduXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFzc2lnbigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbG9hZCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVwbGFjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlKCkge31cbiAgfSwge1xuICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTG9jYXRpb247XG59KCk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IExvY2F0aW9uO1xuXG59LHt9XSwzMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgTUVESUFfRVJSX0FCT1JURUQgPSAxO1xudmFyIE1FRElBX0VSUl9ORVRXT1JLID0gMjtcbnZhciBNRURJQV9FUlJfREVDT0RFID0gMztcbnZhciBNRURJQV9FUlJfU1JDX05PVF9TVVBQT1JURUQgPSA0O1xudmFyIE1lZGlhRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1lZGlhRXJyb3IoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lZGlhRXJyb3IpO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhNZWRpYUVycm9yLCBbe1xuICAgIGtleTogXCJjb2RlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gTUVESUFfRVJSX0FCT1JURUQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1lc3NhZ2VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTWVkaWFFcnJvcjtcbn0oKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTWVkaWFFcnJvcjtcbm1vZHVsZS5leHBvcnRzID0gTWVkaWFFcnJvcjtcblxufSx7fV0sMzE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbnZhciBOYXZpZ2F0b3IgPSBfY3JlYXRlQ2xhc3MoZnVuY3Rpb24gTmF2aWdhdG9yKHBsYXRmb3JtLCBsYW5ndWFnZSkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTmF2aWdhdG9yKTtcbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicGxhdGZvcm1cIiwgXCJcIik7XG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImxhbmd1YWdlXCIsIFwiXCIpO1xuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhcHBWZXJzaW9uXCIsICc1LjAgKGlQaG9uZTsgQ1BVIGlQaG9uZSBPUyA5XzEgbGlrZSBNYWMgT1MgWCkgQXBwbGVXZWJLaXQvNjAxLjEuNDYgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzkuMCBNb2JpbGUvMTNCMTQzIFNhZmFyaS82MDEuMScpO1xuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1c2VyQWdlbnRcIiwgJ01vemlsbGEvNS4wIChpUGhvbmU7IENQVSBpUGhvbmUgT1MgMTBfM18xIGxpa2UgTWFjIE9TIFgpIEFwcGxlV2ViS2l0LzYwMy4xLjMwIChLSFRNTCwgbGlrZSBHZWNrbykgTW9iaWxlLzE0RTgzMDEgTmV0VHlwZS9XSUZJIExhbmd1YWdlL3poX0NOJyk7XG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9uTGluZVwiLCB0cnVlKTtcbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWF4VG91Y2hQb2ludHNcIiwgMTApO1xuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZW9sb2NhdGlvblwiLCB7XG4gICAgZ2V0Q3VycmVudFBvc2l0aW9uOiBmdW5jdGlvbiBnZXRDdXJyZW50UG9zaXRpb24oKSB7fSxcbiAgICB3YXRjaFBvc2l0aW9uOiBmdW5jdGlvbiB3YXRjaFBvc2l0aW9uKCkge30sXG4gICAgY2xlYXJXYXRjaDogZnVuY3Rpb24gY2xlYXJXYXRjaCgpIHt9XG4gIH0pO1xuICB0aGlzLnBsYXRmb3JtID0gcGxhdGZvcm07XG4gIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBOYXZpZ2F0b3I7XG5cbn0se31dLDMyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0V2ZW50VGFyZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRUYXJnZXRcIikpO1xudmFyIF9FdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfZ2V0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHsgX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKTsgfSBlbHNlIHsgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTsgaWYgKCFiYXNlKSByZXR1cm47IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7IGlmIChkZXNjLmdldCkgeyByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzYy52YWx1ZTsgfTsgfSByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7IHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7IG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhazsgfSByZXR1cm4gb2JqZWN0OyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxudmFyIE5vZGUgPSBmdW5jdGlvbiAoX0V2ZW50VGFyZ2V0KSB7XG4gIF9pbmhlcml0cyhOb2RlLCBfRXZlbnRUYXJnZXQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE5vZGUpO1xuICBmdW5jdGlvbiBOb2RlKG5vZGVOYW1lKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlKTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjaGlsZE5vZGVzXCIsIFtdKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicGFyZW50Tm9kZVwiLCBudWxsKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX25vZGVOYW1lXCIsIFwiXCIpO1xuICAgIF90aGlzLl9ub2RlTmFtZSA9IG5vZGVOYW1lO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoTm9kZSwgW3tcbiAgICBrZXk6IFwiYXBwZW5kQ2hpbGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kQ2hpbGQobm9kZSkge1xuICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2gobm9kZSk7XG4gICAgICBub2RlLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgdmFyIG5vZGVOYW1lID0gbm9kZS5ub2RlTmFtZTtcbiAgICAgIGlmIChub2RlTmFtZSA9PT0gXCJTQ1JJUFRcIiB8fCBub2RlTmFtZSA9PT0gXCJTVFlMRVwiKSB7XG4gICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImFwcGVuZFwiKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xvbmVOb2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb25lTm9kZSgpIHtcbiAgICAgIHZhciBjb3B5Tm9kZSA9IE9iamVjdC5jcmVhdGUodGhpcyk7XG4gICAgICBPYmplY3QuYXNzaWduKGNvcHlOb2RlLCB0aGlzKTtcbiAgICAgIGNvcHlOb2RlLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgcmV0dXJuIGNvcHlOb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVDaGlsZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVDaGlsZChub2RlKSB7XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuZmluZEluZGV4KGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQgPT09IG5vZGU7XG4gICAgICB9KTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHZhciBfbm9kZSA9IHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xuICAgICAgICBfbm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF9ub2RlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbnRhaW5zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnRhaW5zKG5vZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihub2RlKSA+IC0xO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkaXNwYXRjaEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSBsZW5ndGggLSAxOyByZXN1bHQgJiYgaW5kZXggPj0gMDsgLS1pbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMkY2hpbGROb2RlcyRpbmRlO1xuICAgICAgICByZXN1bHQgPSAoX3RoaXMkY2hpbGROb2RlcyRpbmRlID0gdGhpcy5jaGlsZE5vZGVzW2luZGV4XSkuZGlzcGF0Y2hFdmVudC5hcHBseShfdGhpcyRjaGlsZE5vZGVzJGluZGUsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihOb2RlLnByb3RvdHlwZSksIFwiZGlzcGF0Y2hFdmVudFwiLCB0aGlzKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJub2RlTmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX25vZGVOYW1lO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTm9kZTtcbn0oX0V2ZW50VGFyZ2V0MltcImRlZmF1bHRcIl0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBOb2RlO1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vRXZlbnRUYXJnZXRcIjoxMX1dLDMzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvV2Vha01hcFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxudmFyIE5vZGVMaXN0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOb2RlTGlzdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZUxpc3QpO1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5zZXQodGhpcywge1xuICAgICAgYXJyYXk6IFtdXG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBQcm94eSh0aGlzLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIGtleSkge1xuICAgICAgICBpZiAoX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9eWzAtOV0qJC8udGVzdChrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGFyZ2V0KS5hcnJheVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXRba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5iaW5kKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoTm9kZUxpc3QsIFt7XG4gICAga2V5OiBcInB1c2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaChlbGVtZW50KSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIml0ZW1cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXRlbShpbmRleCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXJyYXlbaW5kZXhdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsZW5ndGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmFycmF5Lmxlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29uY2F0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgICAgIHZhciBhcnJheSA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXJyYXk7XG4gICAgICByZXR1cm4gYXJyYXkuY29uY2F0LmFwcGx5KGFycmF5LCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTm9kZUxpc3Q7XG59KCk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IE5vZGVMaXN0O1xuXG59LHtcIi4vdXRpbC9XZWFrTWFwXCI6NTZ9XSwzNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9TY3JlZW5PcmllbnRhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vU2NyZWVuT3JpZW50YXRpb25cIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG53aW5kb3cucmFsID0gd2luZG93LnJhbCB8fCB7fTtcbnZhciBTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNjcmVlbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2NyZWVuKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhdmFpbFRvcFwiLCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhdmFpbExlZnRcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXZhaWxIZWlnaHRcIiwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhdmFpbFdpZHRoXCIsIHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb2xvckRlcHRoXCIsIDgpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBpeGVsRGVwdGhcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibGVmdFwiLCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b3BcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwid2lkdGhcIiwgd2luZG93LmlubmVyV2lkdGgpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImhlaWdodFwiLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9yaWVudGF0aW9uXCIsIG5ldyBfU2NyZWVuT3JpZW50YXRpb25bXCJkZWZhdWx0XCJdKCkpO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhTY3JlZW4sIFt7XG4gICAga2V5OiBcIm9ub3JpZW50YXRpb25jaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25vcmllbnRhdGlvbmNoYW5nZSgpIHt9XG4gIH1dKTtcbiAgcmV0dXJuIFNjcmVlbjtcbn0oKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU2NyZWVuO1xuXG59LHtcIi4vU2NyZWVuT3JpZW50YXRpb25cIjozNX1dLDM1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0V2ZW50VGFyZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRUYXJnZXRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxudmFyIFNjcmVlbk9yaWVudGF0aW9uID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICBfaW5oZXJpdHMoU2NyZWVuT3JpZW50YXRpb24sIF9FdmVudFRhcmdldCk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU2NyZWVuT3JpZW50YXRpb24pO1xuICBmdW5jdGlvbiBTY3JlZW5PcmllbnRhdGlvbigpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNjcmVlbk9yaWVudGF0aW9uKTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfdHlwZVwiLCBcInBvcnRyYWl0LXByaW1hcnlcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9hbmdsZVwiLCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2lzTG9ja2VkXCIsIGZhbHNlKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKFNjcmVlbk9yaWVudGF0aW9uLCBbe1xuICAgIGtleTogXCJ0eXBlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYW5nbGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hbmdsZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25jaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25jaGFuZ2UoZXZlbnQpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9ja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2NrKG9yaWVudGF0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmIChfdGhpczIuX2lzTG9ja2VkKSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlNjcmVlbiBvcmllbnRhdGlvbiBpcyBhbHJlYWR5IGxvY2tlZFwiKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzMi5faXNMb2NrZWQgPSB0cnVlO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5sb2NrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVubG9jaygpIHtcbiAgICAgIHRoaXMuX2lzTG9ja2VkID0gZmFsc2U7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTY3JlZW5PcmllbnRhdGlvbjtcbn0oX0V2ZW50VGFyZ2V0MltcImRlZmF1bHRcIl0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTY3JlZW5PcmllbnRhdGlvbjtcblxufSx7XCIuL0V2ZW50VGFyZ2V0XCI6MTF9XSwzNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9FdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxudmFyIFRvdWNoRXZlbnQgPSBmdW5jdGlvbiAoX0V2ZW50KSB7XG4gIF9pbmhlcml0cyhUb3VjaEV2ZW50LCBfRXZlbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFRvdWNoRXZlbnQpO1xuICBmdW5jdGlvbiBUb3VjaEV2ZW50KHR5cGUpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvdWNoRXZlbnQpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHlwZSk7XG4gICAgX3RoaXMudG91Y2hlcyA9IFtdO1xuICAgIF90aGlzLnRhcmdldFRvdWNoZXMgPSBbXTtcbiAgICBfdGhpcy5jaGFuZ2VkVG91Y2hlcyA9IFtdO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKFRvdWNoRXZlbnQpO1xufShfRXZlbnQyW1wiZGVmYXVsdFwiXSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFRvdWNoRXZlbnQ7XG5cbn0se1wiLi9FdmVudFwiOjEwfV0sMzc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcbnZhciBfRmlsZUNhY2hlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL0ZpbGVDYWNoZVwiKSk7XG52YXIgX1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxudmFyIGZzbSA9IHJhbC5nZXRGaWxlU3lzdGVtTWFuYWdlcigpO1xudmFyIF9YTUxIdHRwUmVxdWVzdCA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdDtcbndpbmRvdy5yYWwgPSB3aW5kb3cucmFsIHx8IHt9O1xudmFyIFhNTEh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gKF9YTUxIdHRwUmVxdWVzdEV2ZW50VCkge1xuICBfaW5oZXJpdHMoWE1MSHR0cFJlcXVlc3QsIF9YTUxIdHRwUmVxdWVzdEV2ZW50VCk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoWE1MSHR0cFJlcXVlc3QpO1xuICBmdW5jdGlvbiBYTUxIdHRwUmVxdWVzdCgpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFhNTEh0dHBSZXF1ZXN0KTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG5ldyBfWE1MSHR0cFJlcXVlc3QoKSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9pc0xvY2FsXCIsIGZhbHNlKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3JlYWR5U3RhdGVcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9yZXNwb25zZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfcmVzcG9uc2VUZXh0XCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9yZXNwb25zZVVSTFwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfcmVzcG9uc2VYTUxcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3N0YXR1c1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfc3RhdHVzVGV4dFwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfcmVzcG9uc2VUeXBlXCIsIHZvaWQgMCk7XG4gICAgdmFyIHhociA9IF90aGlzLl94aHI7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInJlYWR5c3RhdGVjaGFuZ2VcIik7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhYTUxIdHRwUmVxdWVzdCwgW3tcbiAgICBrZXk6IFwicmVhZHlTdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuX2lzTG9jYWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWR5U3RhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnJlYWR5U3RhdGU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc3BvbnNlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB0aGlzLl9pc0xvY2FsID8gdGhpcy5fcmVzcG9uc2UgOiB0aGlzLl94aHIucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fcmVzcG9uc2VUeXBlID09PSBcImJsb2JcIiA/IG5ldyBCbG9iKFtyZXNwb25zZV0pIDogcmVzcG9uc2U7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNwb25zZVRleHRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0xvY2FsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzcG9uc2VUeXBlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUeXBlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuX3Jlc3BvbnNlVHlwZSA9IHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPSB2YWx1ZTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gXCJibG9iXCIpIHtcbiAgICAgICAgdGhpcy5feGhyLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzcG9uc2VVUkxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0xvY2FsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVVSTDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94aHIucmVzcG9uc2VVUkw7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc3BvbnNlWE1MXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5faXNMb2NhbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VYTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnJlc3BvbnNlWE1MO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0dXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0xvY2FsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnN0YXR1cztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdHVzVGV4dFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuX2lzTG9jYWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXR1c1RleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnN0YXR1c1RleHQ7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRpbWVvdXRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl94aHIudGltZW91dDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLl94aHIudGltZW91dCA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1cGxvYWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl94aHIudXBsb2FkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3aXRoQ3JlZGVudGlhbHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl94aHIud2l0aENyZWRlbnRpYWxzO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuX3hoci53aXRoQ3JlZGVudGlhbHMgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWJvcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgICB0aGlzLl94aHIuYWJvcnQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbFJlc3BvbnNlSGVhZGVycygpIHtcbiAgICAgIHJldHVybiB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFJlc3BvbnNlSGVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlc3BvbnNlSGVhZGVyKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl94aHIuZ2V0UmVzcG9uc2VIZWFkZXIobmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9wZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbihtZXRob2QsIHVybCwgYXN5bmMsIHVzZXIsIHBhc3N3b3JkKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgX3VybCA9IHVybC50b0xvY2FsZVN0cmluZygpO1xuICAgICAgICBpZiAoX3VybC5zdGFydHNXaXRoKFwiaHR0cDovL1wiKSB8fCBfdXJsLnN0YXJ0c1dpdGgoXCJodHRwczovL1wiKSkge1xuICAgICAgICAgIHZhciBfdGhpcyRfeGhyO1xuICAgICAgICAgIHRoaXMuX2lzTG9jYWwgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gKF90aGlzJF94aHIgPSB0aGlzLl94aHIpLm9wZW4uYXBwbHkoX3RoaXMkX3hociwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5faXNMb2NhbCA9IHRydWU7XG4gICAgICB0aGlzLl91cmwgPSB1cmw7XG4gICAgICBpZiAodGhpcy5fcmVhZHlTdGF0ZSAhPSAxKSB7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSAxO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJyZWFkeXN0YXRlY2hhbmdlXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib3ZlcnJpZGVNaW1lVHlwZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvdmVycmlkZU1pbWVUeXBlKCkge1xuICAgICAgdmFyIF90aGlzJF94aHIyO1xuICAgICAgcmV0dXJuIChfdGhpcyRfeGhyMiA9IHRoaXMuX3hocikub3ZlcnJpZGVNaW1lVHlwZS5hcHBseShfdGhpcyRfeGhyMiwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2VuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kKCkge1xuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSAhPT0gMSkge1xuICAgICAgICB0aHJvdyBcIlVuY2F1Z2h0IERPTUV4Y2VwdGlvbjogRmFpbGVkIHRvIGV4ZWN1dGUgJ3NlbmQnIG9uICdYTUxIdHRwUmVxdWVzdCc6IFRoZSBvYmplY3QncyBzdGF0ZSBtdXN0IGJlIE9QRU5FRC5cIjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pc0xvY2FsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGlzQmluYXJ5ID0gdGhpcy5feGhyLnJlc3BvbnNlVHlwZSA9PT0gXCJhcnJheWJ1ZmZlclwiO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gMjtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwicmVhZHlzdGF0ZWNoYW5nZVwiKSk7XG4gICAgICAgIGZzbS5yZWFkRmlsZSh7XG4gICAgICAgICAgZmlsZVBhdGg6IHRoaXMuX3VybCxcbiAgICAgICAgICBlbmNvZGluZzogaXNCaW5hcnkgPyBcImJpbmFyeVwiIDogXCJ1dGY4XCIsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgIHNlbGYuX3N0YXR1cyA9IDIwMDtcbiAgICAgICAgICAgIHNlbGYuX3Jlc3BvbnNlID0gc2VsZi5fcmVzcG9uc2VUZXh0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBpZiAoaXNCaW5hcnkpIHtcbiAgICAgICAgICAgICAgX0ZpbGVDYWNoZVtcImRlZmF1bHRcIl0uc2V0Q2FjaGUoc2VsZi5fdXJsLCByZXMuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXZlbnRQcm9ncmVzc1N0YXJ0ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJwcm9ncmVzc1wiKTtcbiAgICAgICAgICAgIGV2ZW50UHJvZ3Jlc3NTdGFydC5sb2FkZWQgPSAwO1xuICAgICAgICAgICAgZXZlbnRQcm9ncmVzc1N0YXJ0LnRvdGFsID0gaXNCaW5hcnkgPyByZXMuZGF0YS5ieXRlTGVuZ3RoIDogcmVzLmRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGV2ZW50UHJvZ3Jlc3NFbmQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgZXZlbnRQcm9ncmVzc0VuZC5sb2FkZWQgPSBldmVudFByb2dyZXNzU3RhcnQudG90YWw7XG4gICAgICAgICAgICBldmVudFByb2dyZXNzRW5kLnRvdGFsID0gZXZlbnRQcm9ncmVzc1N0YXJ0LnRvdGFsO1xuICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZHN0YXJ0XCIpKTtcbiAgICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChldmVudFByb2dyZXNzU3RhcnQpO1xuICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50UHJvZ3Jlc3NFbmQpO1xuICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZFwiKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmVyckNvZGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgc2VsZi5fc3RhdHVzID0gNDA0O1xuICAgICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2Fkc3RhcnRcIikpO1xuICAgICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkXCIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImVycm9yXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSA0O1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwicmVhZHlzdGF0ZWNoYW5nZVwiKSk7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkZW5kXCIpKTtcbiAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX3RoaXMkX3hocjM7XG4gICAgICAgIChfdGhpcyRfeGhyMyA9IHRoaXMuX3hocikuc2VuZC5hcHBseShfdGhpcyRfeGhyMywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0UmVxdWVzdEhlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKCkge1xuICAgICAgdmFyIF90aGlzJF94aHI0O1xuICAgICAgKF90aGlzJF94aHI0ID0gdGhpcy5feGhyKS5zZXRSZXF1ZXN0SGVhZGVyLmFwcGx5KF90aGlzJF94aHI0LCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gWE1MSHR0cFJlcXVlc3Q7XG59KF9YTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0W1wiZGVmYXVsdFwiXSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFhNTEh0dHBSZXF1ZXN0O1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFwiOjM4LFwiLi91dGlsL0ZpbGVDYWNoZVwiOjU1fV0sMzg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRXZlbnRUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFRhcmdldFwiKSk7XG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG52YXIgX0ZpbGVDYWNoZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9GaWxlQ2FjaGVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxudmFyIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgPSBmdW5jdGlvbiAoX0V2ZW50VGFyZ2V0KSB7XG4gIF9pbmhlcml0cyhYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0LCBfRXZlbnRUYXJnZXQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQpO1xuICBmdW5jdGlvbiBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0KHhocikge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3hoclwiLCB2b2lkIDApO1xuICAgIF90aGlzLl94aHIgPSB4aHI7XG4gICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJhYm9ydFwiKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG4gICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImVycm9yXCIpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKHRoaXMucmVzcG9uc2UgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICBfRmlsZUNhY2hlW1wiZGVmYXVsdFwiXS5zZXRJdGVtKHRoaXMucmVzcG9uc2UsIHRoaXMuX3VybCk7XG4gICAgICB9XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRcIik7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgeGhyLm9ubG9hZHN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZHN0YXJ0XCIpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwicHJvZ3Jlc3NcIik7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInRpbWVvdXRcIik7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgeGhyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRlbmRcIik7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCk7XG59KF9FdmVudFRhcmdldDJbXCJkZWZhdWx0XCJdKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldDtcblxufSx7XCIuL0V2ZW50XCI6MTAsXCIuL0V2ZW50VGFyZ2V0XCI6MTEsXCIuL3V0aWwvRmlsZUNhY2hlXCI6NTV9XSwzOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG52YXIgQW5hbHlzZXJOb2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgX2luaGVyaXRzKEFuYWx5c2VyTm9kZSwgX0F1ZGlvTm9kZSk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQW5hbHlzZXJOb2RlKTtcbiAgZnVuY3Rpb24gQW5hbHlzZXJOb2RlKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFuYWx5c2VyTm9kZSk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgICBfdGhpcy5fZmZ0U2l6ZTtcbiAgICBfdGhpcy5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICBfdGhpcy5taW5EZWNpYmVscztcbiAgICBfdGhpcy5tYXhEZWNpYmVscztcbiAgICBfdGhpcy5zbW9vdGhpbmdUaW1lQ29uc3RhbnQ7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhBbmFseXNlck5vZGUsIFt7XG4gICAga2V5OiBcImdldEZsb2F0RnJlcXVlbmN5RGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGbG9hdEZyZXF1ZW5jeURhdGEoYXJyYXkpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZGF0YUFycmF5KSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YUFycmF5Lmxlbmd0aCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEZsb2F0VGltZURvbWFpbkRhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RmxvYXRUaW1lRG9tYWluRGF0YShkYXRhQXJyYXkpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Qnl0ZVRpbWVEb21haW5EYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5dGVUaW1lRG9tYWluRGF0YShkYXRhQXJyYXkpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmZ0U2l6ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZmdFNpemU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5fZmZ0U2l6ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5mcmVxdWVuY3lCaW5Db3VudCA9IHZhbHVlIC8gMjtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEFuYWx5c2VyTm9kZTtcbn0oX0F1ZGlvTm9kZTJbXCJkZWZhdWx0XCJdKTtcbnZhciBfZGVmYXVsdCA9IEFuYWx5c2VyTm9kZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se1wiLi9BdWRpb05vZGVcIjo0NX1dLDQwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0ZpbGVDYWNoZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3V0aWwvRmlsZUNhY2hlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgQXVkaW9CdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEF1ZGlvQnVmZmVyKGNvbnRleHQsIGJ1ZmZlciwgY2FsbGJhY2spIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9CdWZmZXIpO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy51cmwgPSBcIlwiO1xuICAgIHRoaXMuX3NhbXBsZVJhdGUgPSA0ODAwMDtcbiAgICB0aGlzLl9sZW5ndGggPSAzODY2ODE7XG4gICAgdGhpcy5fZHVyYXRpb24gPSAwO1xuICAgIHRoaXMuX251bWJlck9mQ2hhbm5lbHMgPSA0ODAwMDtcbiAgICBfRmlsZUNhY2hlW1wiZGVmYXVsdFwiXS5nZXRQYXRoKGJ1ZmZlciwgZnVuY3Rpb24gKHVybCkge1xuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICB2YXIgaW5uZXJBdWRpb0NvbnRleHQgPSByYWwuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHVybDtcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uQ2FucGxheShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXVkaW9CdWZmZXIuX2R1cmF0aW9uID0gdGhpcy5pbm5lckF1ZGlvQ29udGV4dC5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5pbm5lckF1ZGlvQ29udGV4dC5kZXN0cm95KCk7XG4gICAgICAgIGNhbGxiYWNrKHRoaXMuYXVkaW9CdWZmZXIpO1xuICAgICAgfS5iaW5kKHtcbiAgICAgICAgYXVkaW9CdWZmZXI6IHRoaXMsXG4gICAgICAgIGlubmVyQXVkaW9Db250ZXh0OiBpbm5lckF1ZGlvQ29udGV4dFxuICAgICAgfSkpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEF1ZGlvQnVmZmVyLCBbe1xuICAgIGtleTogXCJzYW1wbGVSYXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2FtcGxlUmF0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibGVuZ3RoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkdXJhdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2R1cmF0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJPZkNoYW5uZWxzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZDaGFubmVscztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEF1ZGlvQnVmZmVyO1xufSgpO1xudmFyIF9kZWZhdWx0ID0gQXVkaW9CdWZmZXI7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHtcIi4uL3V0aWwvRmlsZUNhY2hlXCI6NTV9XSw0MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xudmFyIF9BdWRpb1BhcmFtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb1BhcmFtXCIpKTtcbnZhciBfV2Vha01hcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3V0aWwvV2Vha01hcFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbnZhciBfZGVzdHJveSA9IGZ1bmN0aW9uIF9kZXN0cm95KCkge1xuICB2YXIgaW5uZXJBdWRpb0NvbnRleHQgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMuc291cmNlTm9kZSkuaW5uZXJBdWRpb0NvbnRleHQ7XG4gIGlmIChpbm5lckF1ZGlvQ29udGV4dCAhPT0gbnVsbCkge1xuICAgIGlubmVyQXVkaW9Db250ZXh0LmRlc3Ryb3koKTtcbiAgICB2YXIgYXVkaW9CdWZmZXJTb3VyY2VOb2RlQXJyYXkgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMuYXVkaW9Db250ZXh0KS5hdWRpb0J1ZmZlclNvdXJjZU5vZGVBcnJheTtcbiAgICB2YXIgbGVuZ3RoID0gYXVkaW9CdWZmZXJTb3VyY2VOb2RlQXJyYXkubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KGF1ZGlvQnVmZmVyU291cmNlTm9kZUFycmF5W2ldKS5pbm5lckF1ZGlvQ29udGV4dCA9PSBpbm5lckF1ZGlvQ29udGV4dCkge1xuICAgICAgICBhdWRpb0J1ZmZlclNvdXJjZU5vZGVBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMuc291cmNlTm9kZSkuaW5uZXJBdWRpb0NvbnRleHQgPSBudWxsO1xuICB9XG59O1xudmFyIEF1ZGlvQnVmZmVyU291cmNlTm9kZSA9IGZ1bmN0aW9uIChfQXVkaW9Ob2RlKSB7XG4gIF9pbmhlcml0cyhBdWRpb0J1ZmZlclNvdXJjZU5vZGUsIF9BdWRpb05vZGUpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEF1ZGlvQnVmZmVyU291cmNlTm9kZSk7XG4gIGZ1bmN0aW9uIEF1ZGlvQnVmZmVyU291cmNlTm9kZShjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdWRpb0J1ZmZlclNvdXJjZU5vZGUpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgY29udGV4dCk7XG4gICAgX3RoaXMuYnVmZmVyID0gbnVsbDtcbiAgICBfdGhpcy5kZXR1bmUgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICBfdGhpcy5sb29wU3RhcnQgPSAwO1xuICAgIF90aGlzLmxvb3BFbmQgPSAwO1xuICAgIF90aGlzLl9wbGF5YmFja1JhdGUgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAxLjBcbiAgICB9KTtcbiAgICB2YXIgaW5uZXJBdWRpb0NvbnRleHQgPSByYWwuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5pbm5lckF1ZGlvQ29udGV4dCA9IGlubmVyQXVkaW9Db250ZXh0O1xuICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uRW5kZWQoX2Rlc3Ryb3kuYmluZCh7XG4gICAgICBzb3VyY2VOb2RlOiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgIGF1ZGlvQ29udGV4dDogY29udGV4dFxuICAgIH0pKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vblN0b3AoX2Rlc3Ryb3kuYmluZCh7XG4gICAgICBzb3VyY2VOb2RlOiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgIGF1ZGlvQ29udGV4dDogY29udGV4dFxuICAgIH0pKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEF1ZGlvQnVmZmVyU291cmNlTm9kZSwgW3tcbiAgICBrZXk6IFwic3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQod2hlbiwgb2Zmc2V0LCBkdXJhdGlvbikge1xuICAgICAgaWYgKHRoaXMuYnVmZmVyKSB7XG4gICAgICAgIHZhciBpbm5lckF1ZGlvQ29udGV4dCA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5uZXJBdWRpb0NvbnRleHQ7XG4gICAgICAgIGlmIChpbm5lckF1ZGlvQ29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5zcmMgPSB0aGlzLmJ1ZmZlci51cmw7XG4gICAgICAgIGlmICghb2Zmc2V0IHx8IHR5cGVvZiBvZmZzZXQgIT09ICdudW1iZXInIHx8IG9mZnNldCA8PSAwKSB7XG4gICAgICAgICAgaW5uZXJBdWRpb0NvbnRleHQuc3RhcnRUaW1lID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5zdGFydFRpbWUgPSBvZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF3aGVuIHx8IHR5cGVvZiB3aGVuICE9PSAnbnVtYmVyJyB8fCB3aGVuIDw9IDApIHtcbiAgICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXVkaW9Db250ZXh0ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbm5lckF1ZGlvQ29udGV4dDtcbiAgICAgICAgICAgIGlmIChhdWRpb0NvbnRleHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgYXVkaW9Db250ZXh0LnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LmJpbmQodGhpcyksIHdoZW4gKiAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdG9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3Aod2hlbikge1xuICAgICAgdmFyIGlubmVyQXVkaW9Db250ZXh0ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbm5lckF1ZGlvQ29udGV4dDtcbiAgICAgIGlmIChpbm5lckF1ZGlvQ29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXdoZW4gfHwgdHlwZW9mIHdoZW4gIT09ICdudW1iZXInIHx8IHdoZW4gPD0gMCkge1xuICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5zdG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgYXVkaW9Db250ZXh0ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbm5lckF1ZGlvQ29udGV4dDtcbiAgICAgICAgICBpZiAoYXVkaW9Db250ZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBhdWRpb0NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpLCB3aGVuICogMTAwMCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uZW5kZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25lbmRlZCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicGxheWJhY2tSYXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcGxheWJhY2tSYXRlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGNvbnNvbGUud2FybihcInBsYXliYWNrUmF0ZSBub25zdXBwb3J0XCIpO1xuICAgICAgdGhpcy5fcGxheWJhY2tSYXRlID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvb3BcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sb29wO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhciBpbm5lckF1ZGlvQ29udGV4dCA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5uZXJBdWRpb0NvbnRleHQ7XG4gICAgICBpZiAoaW5uZXJBdWRpb0NvbnRleHQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fbG9vcCA9IHZhbHVlO1xuICAgICAgaW5uZXJBdWRpb0NvbnRleHQubG9vcCA9IHZhbHVlO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQXVkaW9CdWZmZXJTb3VyY2VOb2RlO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gQXVkaW9CdWZmZXJTb3VyY2VOb2RlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7XCIuLi91dGlsL1dlYWtNYXBcIjo1NixcIi4vQXVkaW9Ob2RlXCI6NDUsXCIuL0F1ZGlvUGFyYW1cIjo0Nn1dLDQyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0Jhc2VBdWRpb0NvbnRleHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9CYXNlQXVkaW9Db250ZXh0XCIpKTtcbnZhciBfTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGVcIikpO1xudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbC9XZWFrTWFwXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxudmFyIEF1ZGlvQ29udGV4dCA9IGZ1bmN0aW9uIChfQmFzZUF1ZGlvQ29udGV4dCkge1xuICBfaW5oZXJpdHMoQXVkaW9Db250ZXh0LCBfQmFzZUF1ZGlvQ29udGV4dCk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQXVkaW9Db250ZXh0KTtcbiAgZnVuY3Rpb24gQXVkaW9Db250ZXh0KG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1ZGlvQ29udGV4dCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfdGhpcy5iYXNlTGF0ZW5jeTtcbiAgICBfdGhpcy5vdXRwdXRMYXRlbmN5O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoQXVkaW9Db250ZXh0LCBbe1xuICAgIGtleTogXCJjbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgIHZhciBhdWRpb0J1ZmZlclNvdXJjZU5vZGVBcnJheSA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXVkaW9CdWZmZXJTb3VyY2VOb2RlQXJyYXk7XG4gICAgICBhdWRpb0J1ZmZlclNvdXJjZU5vZGVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoZWxlbWVudCkuaW5uZXJBdWRpb0NvbnRleHQuZGVzdHJveSgpO1xuICAgICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KGVsZW1lbnQpLmlubmVyQXVkaW9Db250ZXh0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgICAgYXJyYXkubGVuZ3RoID0gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlTWVkaWFFbGVtZW50U291cmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShteU1lZGlhRWxlbWVudCkge1xuICAgICAgcmV0dXJuIG5ldyBfTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlW1wiZGVmYXVsdFwiXSh0aGlzLCB7XG4gICAgICAgIG1lZGlhRWxlbWVudDogbXlNZWRpYUVsZW1lbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlTWVkaWFTdHJlYW1EZXN0aW5hdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVNZWRpYVN0cmVhbURlc3RpbmF0aW9uKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVNZWRpYVN0cmVhbVRyYWNrU291cmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU1lZGlhU3RyZWFtVHJhY2tTb3VyY2UoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImdldE91dHB1dFRpbWVzdGFtcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPdXRwdXRUaW1lc3RhbXAoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInJlc3VtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXN1bWUoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInN1c3BlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3VzcGVuZCgpIHt9XG4gIH1dKTtcbiAgcmV0dXJuIEF1ZGlvQ29udGV4dDtcbn0oX0Jhc2VBdWRpb0NvbnRleHQyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBBdWRpb0NvbnRleHQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHtcIi4uL3V0aWwvV2Vha01hcFwiOjU2LFwiLi9CYXNlQXVkaW9Db250ZXh0XCI6NDgsXCIuL01lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZVwiOjUxfV0sNDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxudmFyIEF1ZGlvRGVzdGluYXRpb25Ob2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgX2luaGVyaXRzKEF1ZGlvRGVzdGluYXRpb25Ob2RlLCBfQXVkaW9Ob2RlKTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBdWRpb0Rlc3RpbmF0aW9uTm9kZSk7XG4gIGZ1bmN0aW9uIEF1ZGlvRGVzdGluYXRpb25Ob2RlKGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1ZGlvRGVzdGluYXRpb25Ob2RlKTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICAgIF90aGlzLm1heENoYW5uZWxDb3VudCA9IDI7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoQXVkaW9EZXN0aW5hdGlvbk5vZGUpO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gQXVkaW9EZXN0aW5hdGlvbk5vZGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHtcIi4vQXVkaW9Ob2RlXCI6NDV9XSw0NDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xudmFyIF9BdWRpb1BhcmFtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb1BhcmFtXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxudmFyIEF1ZGlvTGlzdGVuZXIgPSBmdW5jdGlvbiAoX0F1ZGlvTm9kZSkge1xuICBfaW5oZXJpdHMoQXVkaW9MaXN0ZW5lciwgX0F1ZGlvTm9kZSk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQXVkaW9MaXN0ZW5lcik7XG4gIGZ1bmN0aW9uIEF1ZGlvTGlzdGVuZXIoY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9MaXN0ZW5lcik7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgICBfdGhpcy5wb3NpdGlvblggPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMucG9zaXRpb25ZID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLnBvc2l0aW9uWiA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5mb3J3YXJkWCA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5mb3J3YXJkWSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5mb3J3YXJkWiA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IC0xXG4gICAgfSk7XG4gICAgX3RoaXMudXBYID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLnVwWSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDFcbiAgICB9KTtcbiAgICBfdGhpcy51cFogPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhBdWRpb0xpc3RlbmVyLCBbe1xuICAgIGtleTogXCJzZXRPcmllbnRhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcmllbnRhdGlvbih4LCB5LCB6KSB7fVxuICB9LCB7XG4gICAga2V5OiBcInNldFBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBvc2l0aW9uKHgsIHksIHopIHtcbiAgICAgIHggPSB4IHx8IDA7XG4gICAgICB5ID0geSB8fCAwO1xuICAgICAgeiA9IHogfHwgMDtcbiAgICAgIHRoaXMucG9zaXRpb25YLnZhbHVlID0geDtcbiAgICAgIHRoaXMucG9zaXRpb25ZLnZhbHVlID0geTtcbiAgICAgIHRoaXMucG9zaXRpb25aLnZhbHVlID0gejtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEF1ZGlvTGlzdGVuZXI7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBBdWRpb0xpc3RlbmVyO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7XCIuL0F1ZGlvTm9kZVwiOjQ1LFwiLi9BdWRpb1BhcmFtXCI6NDZ9XSw0NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9FdmVudFRhcmdldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9FdmVudFRhcmdldFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbnZhciBBdWRpb05vZGUgPSBmdW5jdGlvbiAoX0V2ZW50VGFyZ2V0KSB7XG4gIF9pbmhlcml0cyhBdWRpb05vZGUsIF9FdmVudFRhcmdldCk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQXVkaW9Ob2RlKTtcbiAgZnVuY3Rpb24gQXVkaW9Ob2RlKGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1ZGlvTm9kZSk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgX3RoaXMubnVtYmVyT2ZJbnB1dHMgPSAxO1xuICAgIF90aGlzLm51bWJlck9mT3V0cHV0cyA9IDE7XG4gICAgX3RoaXMuY2hhbm5lbENvdW50ID0gMjtcbiAgICBfdGhpcy5jaGFubmVsQ291bnRNb2RlID0gXCJleHBsaWNpdFwiO1xuICAgIF90aGlzLmNoYW5uZWxJbnRlcnByZXRhdGlvbiA9IFwic3BlYWtlcnNcIjtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKEF1ZGlvTm9kZSwgW3tcbiAgICBrZXk6IFwiY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KGRlc3RpbmF0aW9uLCBvdXRwdXRJbmRleCwgaW5wdXRJbmRleCkge31cbiAgfSwge1xuICAgIGtleTogXCJkaXNjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImlzTnVtYmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTnVtYmVyKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdudW1iZXInIHx8IG9iaiBpbnN0YW5jZW9mIE51bWJlcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29udGV4dFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQ7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBBdWRpb05vZGU7XG59KF9FdmVudFRhcmdldDJbXCJkZWZhdWx0XCJdKTtcbnZhciBfZGVmYXVsdCA9IEF1ZGlvTm9kZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se1wiLi4vRXZlbnRUYXJnZXRcIjoxMX1dLDQ2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbnZhciBBdWRpb1BhcmFtID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBdWRpb1BhcmFtKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9QYXJhbSk7XG4gICAgdGhpcy5hdXRvbWF0aW9uUmF0ZSA9IG9wdGlvbnMuYXV0b21hdGlvblJhdGUgfHwgXCJhLXJhdGVcIjtcbiAgICB0aGlzLl9kZWZhdWx0VmFsdWUgPSBvcHRpb25zLmRlZmF1bHRWYWx1ZSB8fCAxO1xuICAgIHRoaXMuX21heFZhbHVlID0gb3B0aW9ucy5tYXhWYWx1ZSB8fCBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgIHRoaXMuX21pblZhbHVlID0gb3B0aW9ucy5taW5WYWx1ZSB8fCAtTnVtYmVyLk1BWF9WQUxVRTtcbiAgICB0aGlzLnZhbHVlID0gb3B0aW9ucy52YWx1ZSB8fCAxO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhBdWRpb1BhcmFtLCBbe1xuICAgIGtleTogXCJkZWZhdWx0VmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1heFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWF4VmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1pblZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWluVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBNYXRoLm1pbih0aGlzLl9tYXhWYWx1ZSwgdmFsdWUpO1xuICAgICAgdGhpcy5fdmFsdWUgPSBNYXRoLm1heCh0aGlzLl9taW5WYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRWYWx1ZUF0VGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZUF0VGltZSh2YWx1ZSwgc3RhcnRUaW1lKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHZhbHVlLCBlbmRUaW1lKSB7XG4gICAgICBpZiAoZW5kVGltZSA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGsgPSB2YWx1ZSAvIGVuZFRpbWU7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMoZHQpIHtcbiAgICAgICAgZHQgPSBkdCAvIDEwMDA7XG4gICAgICAgIGlmIChkdCA+IGVuZFRpbWUpIHtcbiAgICAgICAgICBkdCA9IGVuZFRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGR0IDwgMCkge1xuICAgICAgICAgIGR0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbmRUaW1lIC09IGR0O1xuICAgICAgICBzZWxmLnZhbHVlICs9IGR0ICogaztcbiAgICAgICAgaWYgKGVuZFRpbWUgPiAwKSB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInNldFRhcmdldEF0VGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUYXJnZXRBdFRpbWUodGFyZ2V0LCBzdGFydFRpbWUsIHRpbWVDb25zdGFudCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRhcmdldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VmFsdWVDdXJ2ZUF0VGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZUN1cnZlQXRUaW1lKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjYW5jZWxTY2hlZHVsZWRWYWx1ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuY2VsU2NoZWR1bGVkVmFsdWVzKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjYW5jZWxBbmRIb2xkQXRUaW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbmNlbEFuZEhvbGRBdFRpbWUoKSB7fVxuICB9XSk7XG4gIHJldHVybiBBdWRpb1BhcmFtO1xufSgpO1xudmFyIF9kZWZhdWx0ID0gQXVkaW9QYXJhbTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se31dLDQ3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0F1ZGlvTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvTm9kZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbnZhciBBdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGUgPSBmdW5jdGlvbiAoX0F1ZGlvTm9kZSkge1xuICBfaW5oZXJpdHMoQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlLCBfQXVkaW9Ob2RlKTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGUpO1xuICBmdW5jdGlvbiBBdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGUoY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGUpO1xuICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlLCBbe1xuICAgIGtleTogXCJvbmVuZGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uZW5kZWQoZXZlbnQpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQod2hlbiwgb2Zmc2V0LCBkdXJhdGlvbikge31cbiAgfSwge1xuICAgIGtleTogXCJzdG9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3Aod2hlbikge31cbiAgfV0pO1xuICByZXR1cm4gQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7XCIuL0F1ZGlvTm9kZVwiOjQ1fV0sNDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRXZlbnRUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vRXZlbnRUYXJnZXRcIikpO1xudmFyIF9BdWRpb0xpc3RlbmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb0xpc3RlbmVyXCIpKTtcbnZhciBfUGVyaW9kaWNXYXZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9QZXJpb2RpY1dhdmVcIikpO1xudmFyIF9BdWRpb0J1ZmZlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9CdWZmZXJcIikpO1xudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbC9XZWFrTWFwXCIpKTtcbnZhciBfRHluYW1pY3NDb21wcmVzc29yTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRHluYW1pY3NDb21wcmVzc29yTm9kZVwiKSk7XG52YXIgX0F1ZGlvQnVmZmVyU291cmNlTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9CdWZmZXJTb3VyY2VOb2RlXCIpKTtcbnZhciBfQXVkaW9EZXN0aW5hdGlvbk5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvRGVzdGluYXRpb25Ob2RlXCIpKTtcbnZhciBfT3NjaWxsYXRvck5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL09zY2lsbGF0b3JOb2RlXCIpKTtcbnZhciBfQW5hbHlzZXJOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BbmFseXNlck5vZGVcIikpO1xudmFyIF9QYW5uZXJOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9QYW5uZXJOb2RlXCIpKTtcbnZhciBfR2Fpbk5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0dhaW5Ob2RlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxudmFyIEJhc2VBdWRpb0NvbnRleHQgPSBmdW5jdGlvbiAoX0V2ZW50VGFyZ2V0KSB7XG4gIF9pbmhlcml0cyhCYXNlQXVkaW9Db250ZXh0LCBfRXZlbnRUYXJnZXQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEJhc2VBdWRpb0NvbnRleHQpO1xuICBmdW5jdGlvbiBCYXNlQXVkaW9Db250ZXh0KCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmFzZUF1ZGlvQ29udGV4dCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfdGhpcy5hdWRpb1dvcmtsZXQ7XG4gICAgX3RoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgIF90aGlzLmRlc3RpbmF0aW9uID0gbmV3IF9BdWRpb0Rlc3RpbmF0aW9uTm9kZVtcImRlZmF1bHRcIl0oX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmxpc3RlbmVyID0gbmV3IF9BdWRpb0xpc3RlbmVyW1wiZGVmYXVsdFwiXShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc2FtcGxlUmF0ZTtcbiAgICBfdGhpcy5zdGF0ZSA9IFwicnVubmluZ1wiO1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLmF1ZGlvQnVmZmVyU291cmNlTm9kZUFycmF5ID0gW107XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhCYXNlQXVkaW9Db250ZXh0LCBbe1xuICAgIGtleTogXCJjcmVhdGVBbmFseXNlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVBbmFseXNlcigpIHtcbiAgICAgIHJldHVybiBuZXcgX0FuYWx5c2VyTm9kZVtcImRlZmF1bHRcIl0odGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUJpcXVhZEZpbHRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCaXF1YWRGaWx0ZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUJ1ZmZlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCdWZmZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUJ1ZmZlclNvdXJjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCdWZmZXJTb3VyY2UoKSB7XG4gICAgICB2YXIgc291cmNlTm9kZSA9IG5ldyBfQXVkaW9CdWZmZXJTb3VyY2VOb2RlW1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXVkaW9CdWZmZXJTb3VyY2VOb2RlQXJyYXkucHVzaChzb3VyY2VOb2RlKTtcbiAgICAgIHJldHVybiBzb3VyY2VOb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVDb25zdGFudFNvdXJjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDb25zdGFudFNvdXJjZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlQ2hhbm5lbE1lcmdlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDaGFubmVsTWVyZ2VyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVDaGFubmVsU3BsaXR0ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbFNwbGl0dGVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVDb252b2x2ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQ29udm9sdmVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVEZWxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVEZWxheSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlRHluYW1pY3NDb21wcmVzc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUR5bmFtaWNzQ29tcHJlc3NvcigpIHtcbiAgICAgIHJldHVybiBuZXcgX0R5bmFtaWNzQ29tcHJlc3Nvck5vZGVbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVHYWluXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUdhaW4oKSB7XG4gICAgICByZXR1cm4gbmV3IF9HYWluTm9kZVtcImRlZmF1bHRcIl0odGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUlJUkZpbHRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVJSVJGaWx0ZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZU9zY2lsbGF0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlT3NjaWxsYXRvcigpIHtcbiAgICAgIHJldHVybiBuZXcgX09zY2lsbGF0b3JOb2RlW1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlUGFubmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVBhbm5lcigpIHtcbiAgICAgIHJldHVybiBuZXcgX1Bhbm5lck5vZGVbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVQZXJpb2RpY1dhdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlUGVyaW9kaWNXYXZlKCkge1xuICAgICAgcmV0dXJuIG5ldyBfUGVyaW9kaWNXYXZlW1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlU2NyaXB0UHJvY2Vzc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVNjcmlwdFByb2Nlc3NvcigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlU3RlcmVvUGFubmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVN0ZXJlb1Bhbm5lcigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlV2F2ZVNoYXBlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVXYXZlU2hhcGVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJkZWNvZGVBdWRpb0RhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVjb2RlQXVkaW9EYXRhKGF1ZGlvRGF0YSwgY2FsbEZ1bmMpIHtcbiAgICAgIG5ldyBfQXVkaW9CdWZmZXJbXCJkZWZhdWx0XCJdKHRoaXMsIGF1ZGlvRGF0YSwgY2FsbEZ1bmMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbnN0YXRlY2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uc3RhdGVjaGFuZ2UoKSB7fVxuICB9XSk7XG4gIHJldHVybiBCYXNlQXVkaW9Db250ZXh0O1xufShfRXZlbnRUYXJnZXQyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBCYXNlQXVkaW9Db250ZXh0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7XCIuLi9FdmVudFRhcmdldFwiOjExLFwiLi4vdXRpbC9XZWFrTWFwXCI6NTYsXCIuL0FuYWx5c2VyTm9kZVwiOjM5LFwiLi9BdWRpb0J1ZmZlclwiOjQwLFwiLi9BdWRpb0J1ZmZlclNvdXJjZU5vZGVcIjo0MSxcIi4vQXVkaW9EZXN0aW5hdGlvbk5vZGVcIjo0MyxcIi4vQXVkaW9MaXN0ZW5lclwiOjQ0LFwiLi9EeW5hbWljc0NvbXByZXNzb3JOb2RlXCI6NDksXCIuL0dhaW5Ob2RlXCI6NTAsXCIuL09zY2lsbGF0b3JOb2RlXCI6NTIsXCIuL1Bhbm5lck5vZGVcIjo1MyxcIi4vUGVyaW9kaWNXYXZlXCI6NTR9XSw0OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xudmFyIF9BdWRpb1BhcmFtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb1BhcmFtXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxudmFyIER5bmFtaWNzQ29tcHJlc3Nvck5vZGUgPSBmdW5jdGlvbiAoX0F1ZGlvTm9kZSkge1xuICBfaW5oZXJpdHMoRHluYW1pY3NDb21wcmVzc29yTm9kZSwgX0F1ZGlvTm9kZSk7XG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRHluYW1pY3NDb21wcmVzc29yTm9kZSk7XG4gIGZ1bmN0aW9uIER5bmFtaWNzQ29tcHJlc3Nvck5vZGUoY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHluYW1pY3NDb21wcmVzc29yTm9kZSk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgICBfdGhpcy5fdGhyZXNob2xkID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogLTI0LFxuICAgICAgZGVmYXVsdFZhbHVlOiAtMjQsXG4gICAgICBtYXhWYWx1ZTogMCxcbiAgICAgIG1pblZhbHVlOiAtMTAwXG4gICAgfSk7XG4gICAgX3RoaXMuX2tuZWUgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAzMCxcbiAgICAgIGRlZmF1bHRWYWx1ZTogMzAsXG4gICAgICBtYXhWYWx1ZTogNDAsXG4gICAgICBtaW5WYWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLl9yYXRpbyA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDEyLFxuICAgICAgZGVmYXVsdFZhbHVlOiAxMixcbiAgICAgIG1heFZhbHVlOiAyMCxcbiAgICAgIG1pblZhbHVlOiAxXG4gICAgfSk7XG4gICAgX3RoaXMuX3JlZHVjdGlvbiA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDAsXG4gICAgICBkZWZhdWx0VmFsdWU6IDAsXG4gICAgICBtYXhWYWx1ZTogMCxcbiAgICAgIG1pblZhbHVlOiAtMjBcbiAgICB9KTtcbiAgICBfdGhpcy5fYXR0YWNrID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMC4wMDMsXG4gICAgICBkZWZhdWx0VmFsdWU6IDAuMDAzLFxuICAgICAgbWF4VmFsdWU6IDEsXG4gICAgICBtaW5WYWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLl9yZWxlYXNlID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMC4yNSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogMC4yNSxcbiAgICAgIG1heFZhbHVlOiAxLFxuICAgICAgbWluVmFsdWU6IDBcbiAgICB9KTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKER5bmFtaWNzQ29tcHJlc3Nvck5vZGUsIFt7XG4gICAga2V5OiBcInRocmVzaG9sZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwia2VlblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2tlZW47XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJhdGlvXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmF0aW87XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlZHVjdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZHVjdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXR0YWNrXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXR0YWNrO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWxlYXNlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVsZWFzZTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIER5bmFtaWNzQ29tcHJlc3Nvck5vZGU7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBEeW5hbWljc0NvbXByZXNzb3JOb2RlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7XCIuL0F1ZGlvTm9kZVwiOjQ1LFwiLi9BdWRpb1BhcmFtXCI6NDZ9XSw1MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xudmFyIF9BdWRpb1BhcmFtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb1BhcmFtXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxudmFyIEdhaW5Ob2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgX2luaGVyaXRzKEdhaW5Ob2RlLCBfQXVkaW9Ob2RlKTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihHYWluTm9kZSk7XG4gIGZ1bmN0aW9uIEdhaW5Ob2RlKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdhaW5Ob2RlKTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICAgIF90aGlzLl9nYWluID0gb3B0aW9ucyAmJiBvcHRpb25zLmdhaW4gfHwgbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSgpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoR2Fpbk5vZGUsIFt7XG4gICAga2V5OiBcImdhaW5cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nYWluO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gR2Fpbk5vZGU7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBHYWluTm9kZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se1wiLi9BdWRpb05vZGVcIjo0NSxcIi4vQXVkaW9QYXJhbVwiOjQ2fV0sNTE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxudmFyIE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZSA9IGZ1bmN0aW9uIChfQXVkaW9Ob2RlKSB7XG4gIF9pbmhlcml0cyhNZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGUsIF9BdWRpb05vZGUpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZSk7XG4gIGZ1bmN0aW9uIE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZShjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGUpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgY29udGV4dCk7XG4gICAgX3RoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlLCBbe1xuICAgIGtleTogXCJtZWRpYUVsZW1lbnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zID8gdGhpcy5fb3B0aW9ucy5tZWRpYUVsZW1lbnQgOiBudWxsO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7XCIuL0F1ZGlvTm9kZVwiOjQ1fV0sNTI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGVcIikpO1xudmFyIF9BdWRpb1BhcmFtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb1BhcmFtXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxudmFyIHR5cGVzID0ge1xuICBcInNpbmVcIjogMCxcbiAgXCJzcXVhcmVcIjogMCxcbiAgXCJzYXd0b290aFwiOiAwLFxuICBcInRyaWFuZ2xlXCI6IDAsXG4gIFwiY3VzdG9tXCI6IDBcbn07XG52YXIgT3NjaWxsYXRvck5vZGUgPSBmdW5jdGlvbiAoX0F1ZGlvU2NoZWR1bGVkU291cmNlKSB7XG4gIF9pbmhlcml0cyhPc2NpbGxhdG9yTm9kZSwgX0F1ZGlvU2NoZWR1bGVkU291cmNlKTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihPc2NpbGxhdG9yTm9kZSk7XG4gIGZ1bmN0aW9uIE9zY2lsbGF0b3JOb2RlKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9zY2lsbGF0b3JOb2RlKTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIF90aGlzLmZyZXF1ZW5jeSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IF90aGlzLmlzTnVtYmVyKG9wdGlvbnMuZnJlcXVlbmN5KSA/IG9wdGlvbnMuZnJlcXVlbmN5IDogNDQwXG4gICAgfSk7XG4gICAgX3RoaXMuZGV0dW5lID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogX3RoaXMuaXNOdW1iZXIob3B0aW9ucy5kZXR1bmUpID8gb3B0aW9ucy5kZXR1bmUgOiAwXG4gICAgfSk7XG4gICAgX3RoaXMudHlwZSA9IG9wdGlvbnMudHlwZSBpbiB0eXBlcyA/IG9wdGlvbnMudHlwZSA6IFwic2luZVwiO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoT3NjaWxsYXRvck5vZGUsIFt7XG4gICAga2V5OiBcInNldFBlcmlvZGljV2F2ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQZXJpb2RpY1dhdmUod2F2ZSkge31cbiAgfSwge1xuICAgIGtleTogXCJzdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCh3aGVuKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCh3ZW4pIHt9XG4gIH1dKTtcbiAgcmV0dXJuIE9zY2lsbGF0b3JOb2RlO1xufShfQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBPc2NpbGxhdG9yTm9kZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se1wiLi9BdWRpb1BhcmFtXCI6NDYsXCIuL0F1ZGlvU2NoZWR1bGVkU291cmNlTm9kZVwiOjQ3fV0sNTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbnZhciBfQXVkaW9QYXJhbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9QYXJhbVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbnZhciBQYW5uZXJOb2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgX2luaGVyaXRzKFBhbm5lck5vZGUsIF9BdWRpb05vZGUpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFBhbm5lck5vZGUpO1xuICBmdW5jdGlvbiBQYW5uZXJOb2RlKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhbm5lck5vZGUpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgY29udGV4dCk7XG4gICAgX3RoaXMuY29uZUlubmVyQW5nbGUgPSAzNjA7XG4gICAgX3RoaXMuY29uZU91dGVyQW5nbGUgPSAzNjA7XG4gICAgX3RoaXMuY29uZU91dGVyR2FpbiA9IDA7XG4gICAgX3RoaXMuZGlzdGFuY2VNb2RlbCA9IFwiaW52ZXJzZVwiO1xuICAgIF90aGlzLm1heERpc3RhbmNlID0gMTAwMDA7XG4gICAgX3RoaXMub3JpZW50YXRpb25YID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMVxuICAgIH0pO1xuICAgIF90aGlzLm9yaWVudGF0aW9uWSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5vcmllbnRhdGlvblogPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMucGFubmluZ01vZGVsID0gXCJlcXVhbHBvd2VyXCI7XG4gICAgX3RoaXMucG9zaXRpb25YID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLnBvc2l0aW9uWSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5wb3NpdGlvblogPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMucmVmRGlzdGFuY2UgPSAxO1xuICAgIF90aGlzLnJvbGxvZmZGYWN0b3IgPSAxO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoUGFubmVyTm9kZSwgW3tcbiAgICBrZXk6IFwic2V0UG9zaXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UG9zaXRpb24oeCwgeSwgeikge1xuICAgICAgdGhpcy5wb3NpdGlvblggPSB4O1xuICAgICAgdGhpcy5wb3NpdGlvblkgPSB5O1xuICAgICAgdGhpcy5wb3NpdGlvblogPSB6O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRPcmllbnRhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcmllbnRhdGlvbih4LCB5LCB6KSB7XG4gICAgICB0aGlzLm9yaWVudGF0aW9uWCA9IHg7XG4gICAgICB0aGlzLm9yaWVudGF0aW9uWSA9IHk7XG4gICAgICB0aGlzLm9yaWVudGF0aW9uWiA9IHo7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFZlbG9jaXR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZlbG9jaXR5KCkge31cbiAgfV0pO1xuICByZXR1cm4gUGFubmVyTm9kZTtcbn0oX0F1ZGlvTm9kZTJbXCJkZWZhdWx0XCJdKTtcbnZhciBfZGVmYXVsdCA9IFBhbm5lck5vZGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHtcIi4vQXVkaW9Ob2RlXCI6NDUsXCIuL0F1ZGlvUGFyYW1cIjo0Nn1dLDU0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbnZhciBQZXJpb2RpY1dhdmUgPSBfY3JlYXRlQ2xhc3MoZnVuY3Rpb24gUGVyaW9kaWNXYXZlKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBlcmlvZGljV2F2ZSk7XG59KTtcbnZhciBfZGVmYXVsdCA9IFBlcmlvZGljV2F2ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se31dLDU1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbnZhciBtZDUgPSByZXF1aXJlKFwiLi4vLi4vbGliL21kNS5taW5cIik7XG52YXIgZmlsZU1nciA9IHJhbC5nZXRGaWxlU3lzdGVtTWFuYWdlcigpO1xudmFyIGNhY2hlRGlyID0gcmFsLmVudi5VU0VSX0RBVEFfUEFUSCArIFwiL2ZpbGVDYWNoZS9cIjtcbnZhciBGaWxlQ2FjaGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEZpbGVDYWNoZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmlsZUNhY2hlKTtcbiAgICB0aGlzLl9jYWNoZXMgPSB7fTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoRmlsZUNhY2hlLCBbe1xuICAgIGtleTogXCJnZXRDYWNoZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDYWNoZShkYXRhKSB7XG4gICAgICB2YXIga2V5ID0gRmlsZUNhY2hlLl9nZW5EYXRhS2V5KGRhdGEpO1xuICAgICAgaWYgKGtleSBpbiB0aGlzLl9jYWNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlc1trZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldENhY2hlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldENhY2hlKHBhdGgsIGRhdGEpIHtcbiAgICAgIHZhciBrZXkgPSBGaWxlQ2FjaGUuX2dlbkRhdGFLZXkoZGF0YSk7XG4gICAgICB0aGlzLl9jYWNoZXNba2V5XSA9IHBhdGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEl0ZW1cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SXRlbShkYXRhLCBwYXRoLCBrZXksIGNhbGxCYWNrKSB7XG4gICAgICBrZXkgPSBrZXkgfHwgRmlsZUNhY2hlLl9nZW5EYXRhS2V5KGRhdGEpO1xuICAgICAgdmFyIGNhY2hlcyA9IHRoaXMuX2NhY2hlcztcbiAgICAgIGlmIChrZXkgaW4gY2FjaGVzKSB7XG4gICAgICAgIGNhbGxCYWNrICYmIGNhbGxCYWNrKGNhY2hlc1trZXldKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgIHBhdGggPSBjYWNoZURpciArIGtleTtcbiAgICAgICAgZmlsZU1nci53cml0ZUZpbGUoe1xuICAgICAgICAgIGZpbGVQYXRoOiBwYXRoLFxuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgZW5jb2Rpbmc6IFwiYmluYXJ5XCIsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgICAgICAgIGNhY2hlc1trZXldID0gcGF0aDtcbiAgICAgICAgICAgIGNhbGxCYWNrICYmIGNhbGxCYWNrKHBhdGgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbCgpIHtcbiAgICAgICAgICAgIGNhbGxCYWNrICYmIGNhbGxCYWNrKCk7XG4gICAgICAgICAgICB0aHJvdyBwYXRoICsgXCJ3cml0ZUZpbGUgZmFpbCFcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRQYXRoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBhdGgoZGF0YSwgY2FsbEJhY2spIHtcbiAgICAgIHZhciBrZXkgPSBGaWxlQ2FjaGUuX2dlbkRhdGFLZXkoZGF0YSk7XG4gICAgICB2YXIgY2FjaGVzID0gdGhpcy5fY2FjaGVzO1xuICAgICAgaWYgKGtleSBpbiBjYWNoZXMpIHtcbiAgICAgICAgY2FsbEJhY2soY2FjaGVzW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtKGRhdGEsIHVuZGVmaW5lZCwga2V5LCBjYWxsQmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiX2dlbkRhdGFLZXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dlbkRhdGFLZXkoZGF0YSkge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgRGF0YVZpZXcoZGF0YSk7XG4gICAgICB2YXIgbGVuZ3RoID0gdmlldy5ieXRlTGVuZ3RoIC8gNDtcbiAgICAgIHZhciBjb3VudCA9IDEwO1xuICAgICAgdmFyIHNwYWNlID0gbGVuZ3RoIC8gY291bnQ7XG4gICAgICB2YXIga2V5ID0gXCJsZW5ndGg6XCIgKyBsZW5ndGg7XG4gICAgICBrZXkgKz0gXCJmaXJzdDpcIiArIHZpZXcuZ2V0SW50MzIoMCk7XG4gICAgICBrZXkgKz0gXCJsYXN0OlwiICsgdmlldy5nZXRJbnQzMihsZW5ndGggLSAxKTtcbiAgICAgIHdoaWxlIChjb3VudC0tKSB7XG4gICAgICAgIGtleSArPSBjb3VudCArIFwiOlwiICsgdmlldy5nZXRJbnQzMihNYXRoLmZsb29yKHNwYWNlICogY291bnQpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZDUoa2V5KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEZpbGVDYWNoZTtcbn0oKTtcbnRyeSB7XG4gIGZpbGVNZ3IuYWNjZXNzU3luYyhjYWNoZURpcik7XG4gIGZpbGVNZ3Iucm1kaXJTeW5jKGNhY2hlRGlyLCB0cnVlKTtcbn0gY2F0Y2ggKGUpIHt9XG5maWxlTWdyLm1rZGlyU3luYyhjYWNoZURpciwgdHJ1ZSk7XG52YXIgX2RlZmF1bHQgPSBuZXcgRmlsZUNhY2hlKCk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHtcIi4uLy4uL2xpYi9tZDUubWluXCI6Mn1dLDU2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7fV0sNTc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfQXVkaW8gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvXCIpKTtcbnZhciBfQXVkaW9Db250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hdWRpb0NvbnRleHQvQXVkaW9Db250ZXh0XCIpKTtcbnZhciBfRGV2aWNlTW90aW9uRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RldmljZU1vdGlvbkV2ZW50XCIpKTtcbnZhciBfRG9jdW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RvY3VtZW50XCIpKTtcbnZhciBfRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcbnZhciBfRm9udEZhY2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ZvbnRGYWNlXCIpKTtcbnZhciBfRm9udEZhY2VTZXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ZvbnRGYWNlU2V0XCIpKTtcbnZhciBfRXZlbnRUYXJnZXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50VGFyZ2V0XCIpKTtcbnZhciBfSFRNTEVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcbnZhciBfSFRNTEF1ZGlvRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEF1ZGlvRWxlbWVudFwiKSk7XG52YXIgX0hUTUxDYW52YXNFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MQ2FudmFzRWxlbWVudFwiKSk7XG52YXIgX0hUTUxJbWFnZUVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxJbWFnZUVsZW1lbnRcIikpO1xudmFyIF9IVE1MVmlkZW9FbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MVmlkZW9FbGVtZW50XCIpKTtcbnZhciBfSW1hZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ltYWdlXCIpKTtcbnZhciBfTG9jYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0xvY2F0aW9uXCIpKTtcbnZhciBfTmF2aWdhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9OYXZpZ2F0b3JcIikpO1xudmFyIF9TY3JlZW4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1NjcmVlblwiKSk7XG52YXIgX1RvdWNoRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RvdWNoRXZlbnRcIikpO1xudmFyIF9YTUxIdHRwUmVxdWVzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vWE1MSHR0cFJlcXVlc3RcIikpO1xudmFyIF9IVE1MU2NyaXB0RWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTFNjcmlwdEVsZW1lbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG53aW5kb3cucmFsID0gd2luZG93LnJhbCB8fCB7fTtcbnZhciBfc3lzdGVtSW5mbyA9IHdpbmRvdy5yYWwuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbndpbmRvdy5jbGllbnRUb3AgPSAwO1xud2luZG93LmNsaWVudExlZnQgPSAwO1xud2luZG93LmRldmljZVBpeGVsUmF0aW8gPSBfc3lzdGVtSW5mby5waXhlbFJhdGlvO1xud2luZG93LmRvY3VtZW50ID0gbmV3IF9Eb2N1bWVudFtcImRlZmF1bHRcIl0oKTtcbndpbmRvdy5mcmFtZUVsZW1lbnQgPSBudWxsO1xud2luZG93LmZ1bGxTY3JlZW4gPSB0cnVlO1xud2luZG93LmlubmVySGVpZ2h0ID0gX3N5c3RlbUluZm8ud2luZG93SGVpZ2h0O1xud2luZG93LmlubmVyV2lkdGggPSBfc3lzdGVtSW5mby53aW5kb3dXaWR0aDtcbndpbmRvdy5sZW5ndGggPSAwO1xud2luZG93LmxvY2F0aW9uID0gbmV3IF9Mb2NhdGlvbltcImRlZmF1bHRcIl0oKTtcbndpbmRvdy5uYW1lID0gXCJydW50aW1lXCI7XG53aW5kb3cubmF2aWdhdG9yID0gbmV3IF9OYXZpZ2F0b3JbXCJkZWZhdWx0XCJdKF9zeXN0ZW1JbmZvLnBsYXRmb3JtLCBfc3lzdGVtSW5mby5sYW5ndWFnZSk7XG53aW5kb3cub3V0ZXJIZWlnaHQgPSBfc3lzdGVtSW5mby53aW5kb3dIZWlnaHQ7XG53aW5kb3cub3V0ZXJXaWR0aCA9IF9zeXN0ZW1JbmZvLndpbmRvd1dpZHRoO1xud2luZG93LnBhZ2VYT2Zmc2V0ID0gMDtcbndpbmRvdy5wYWdlWU9mZnNldCA9IDA7XG53aW5kb3cucGFyZW50ID0gd2luZG93O1xud2luZG93LnNjcmVlbiA9IG5ldyBfU2NyZWVuW1wiZGVmYXVsdFwiXSgpO1xud2luZG93LnNjcmVlbkxlZnQgPSAwO1xud2luZG93LnNjcmVlblRvcCA9IDA7XG53aW5kb3cuc2NyZWVuWCA9IDA7XG53aW5kb3cuc2NyZWVuWSA9IDA7XG53aW5kb3cuc2Nyb2xsWCA9IDA7XG53aW5kb3cuc2Nyb2xsWSA9IDA7XG53aW5kb3cuc2VsZiA9IHdpbmRvdztcbndpbmRvdy50b3AgPSB3aW5kb3c7XG53aW5kb3cud2luZG93ID0gd2luZG93O1xud2luZG93LmFsZXJ0ID0gd2luZG93LmNvbnNvbGUuZXJyb3I7XG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuLi9saWIvYmFzZTY0Lm1pbi5qcycpLFxuICBidG9hID0gX3JlcXVpcmUuYnRvYSxcbiAgYXRvYiA9IF9yZXF1aXJlLmF0b2I7XG53aW5kb3cuYXRvYiA9IGF0b2I7XG53aW5kb3cuYnRvYSA9IGJ0b2E7XG53aW5kb3cuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUud2FybihcIndpbmRvdy5jbG9zZSgpIGlzIGRlcHJlY2F0ZWQhXCIpO1xufTtcbndpbmRvdy5wcmludCA9IHdpbmRvdy5jb25zb2xlLmxvZztcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyID0gX0V2ZW50VGFyZ2V0W1wiZGVmYXVsdFwiXS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lci5iaW5kKHdpbmRvdyk7XG53aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IF9FdmVudFRhcmdldFtcImRlZmF1bHRcIl0ucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIuYmluZCh3aW5kb3cpO1xudmFyIF9kaXNwYXRjaEV2ZW50ID0gX0V2ZW50VGFyZ2V0W1wiZGVmYXVsdFwiXS5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudDtcbndpbmRvdy5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmICh3aW5kb3cuZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCkpIHtcbiAgICByZXR1cm4gX2Rpc3BhdGNoRXZlbnQuYXBwbHkodGhpcyB8fCB3aW5kb3csIGFyZ3VtZW50cyk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbndpbmRvdy5nZXRDb21wdXRlZFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6ICcwcHgnLFxuICAgIHRvcDogJzBweCcsXG4gICAgaGVpZ2h0OiAnMHB4JyxcbiAgICBwYWRkaW5nTGVmdDogMCxcbiAgICBnZXRQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXNba2V5XTtcbiAgICB9XG4gIH07XG59O1xucmFsLm9uV2luZG93UmVzaXplICYmIHJhbC5vbldpbmRvd1Jlc2l6ZShmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICB3aW5kb3cuaW5uZXJXaWR0aCA9IHdpZHRoO1xuICB3aW5kb3cuaW5uZXJIZWlnaHQgPSBoZWlnaHQ7XG4gIHdpbmRvdy5vdXRlcldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHdpbmRvdy5vdXRlckhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHdpbmRvdy5zY3JlZW4ud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgd2luZG93LnNjcmVlbi5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwicmVzaXplXCIpO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG59KTtcbnJhbC5vbkRldmljZU9yaWVudGF0aW9uQ2hhbmdlICYmIHJhbC5vbkRldmljZU9yaWVudGF0aW9uQ2hhbmdlKGZ1bmN0aW9uIChyZXMpIHtcbiAgaWYgKHJlcy52YWx1ZSA9PT0gXCJwb3J0cmFpdFwiKSB7XG4gICAgd2luZG93Lm9yaWVudGF0aW9uID0gMDtcbiAgfSBlbHNlIGlmIChyZXMudmFsdWUgPT09IFwibGFuZHNjYXBlXCIpIHtcbiAgICB3aW5kb3cub3JpZW50YXRpb24gPSA5MDtcbiAgfSBlbHNlIGlmIChyZXMudmFsdWUgPT09IFwibGFuZHNjYXBlUmV2ZXJzZVwiKSB7XG4gICAgd2luZG93Lm9yaWVudGF0aW9uID0gLTkwO1xuICB9IGVsc2UgaWYgKHJlcy52YWx1ZSA9PT0gXCJwb3J0cmFpdFJldmVyc2VcIikge1xuICAgIHdpbmRvdy5vcmllbnRhdGlvbiA9IDE4MDtcbiAgfVxufSk7XG53aW5kb3cuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS53YXJuKFwid2luZG93LnN0b3AoKSBub3QgaW1wbGVtZW50ZWRcIik7XG59O1xud2luZG93LkF1ZGlvID0gX0F1ZGlvW1wiZGVmYXVsdFwiXTtcbndpbmRvdy5BdWRpb0NvbnRleHQgPSBfQXVkaW9Db250ZXh0W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5EZXZpY2VNb3Rpb25FdmVudCA9IF9EZXZpY2VNb3Rpb25FdmVudFtcImRlZmF1bHRcIl07XG53aW5kb3cuRXZlbnQgPSBfRXZlbnRbXCJkZWZhdWx0XCJdO1xud2luZG93LkZvbnRGYWNlID0gX0ZvbnRGYWNlW1wiZGVmYXVsdFwiXTtcbndpbmRvdy5Gb250RmFjZVNldCA9IF9Gb250RmFjZVNldFtcImRlZmF1bHRcIl07XG53aW5kb3cuSFRNTEVsZW1lbnQgPSBfSFRNTEVsZW1lbnRbXCJkZWZhdWx0XCJdO1xud2luZG93LkhUTUxBdWRpb0VsZW1lbnQgPSBfSFRNTEF1ZGlvRWxlbWVudFtcImRlZmF1bHRcIl07XG53aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQgPSBfSFRNTENhbnZhc0VsZW1lbnRbXCJkZWZhdWx0XCJdO1xud2luZG93LkhUTUxJbWFnZUVsZW1lbnQgPSBfSFRNTEltYWdlRWxlbWVudFtcImRlZmF1bHRcIl07XG53aW5kb3cuSFRNTFZpZGVvRWxlbWVudCA9IF9IVE1MVmlkZW9FbGVtZW50W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5JbWFnZSA9IF9JbWFnZVtcImRlZmF1bHRcIl07XG53aW5kb3cuVG91Y2hFdmVudCA9IF9Ub3VjaEV2ZW50W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5YTUxIdHRwUmVxdWVzdCA9IF9YTUxIdHRwUmVxdWVzdFtcImRlZmF1bHRcIl07XG53aW5kb3cuSFRNTFNjcmlwdEVsZW1lbnQgPSBfSFRNTFNjcmlwdEVsZW1lbnRbXCJkZWZhdWx0XCJdO1xuaWYgKCF3aW5kb3cuQmxvYiB8fCAhd2luZG93LlVSTCkge1xuICB2YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgnLi9CbG9iLmpzJyksXG4gICAgQmxvYiA9IF9yZXF1aXJlMi5CbG9iLFxuICAgIFVSTCA9IF9yZXF1aXJlMi5VUkw7XG4gIHdpbmRvdy5CbG9iID0gQmxvYjtcbiAgd2luZG93LlVSTCA9IFVSTDtcbn1cbmlmICghd2luZG93LkRPTVBhcnNlcikge1xuICB3aW5kb3cuRE9NUGFyc2VyID0gcmVxdWlyZSgnLi94bWxkb20vZG9tLXBhcnNlci5qcycpLkRPTVBhcnNlcjtcbn1cblxufSx7XCIuLi9saWIvYmFzZTY0Lm1pbi5qc1wiOjEsXCIuL0F1ZGlvXCI6NCxcIi4vQmxvYi5qc1wiOjUsXCIuL0RldmljZU1vdGlvbkV2ZW50XCI6NyxcIi4vRG9jdW1lbnRcIjo4LFwiLi9FdmVudFwiOjEwLFwiLi9FdmVudFRhcmdldFwiOjExLFwiLi9Gb250RmFjZVwiOjEyLFwiLi9Gb250RmFjZVNldFwiOjEzLFwiLi9IVE1MQXVkaW9FbGVtZW50XCI6MTUsXCIuL0hUTUxDYW52YXNFbGVtZW50XCI6MTcsXCIuL0hUTUxFbGVtZW50XCI6MTgsXCIuL0hUTUxJbWFnZUVsZW1lbnRcIjoyMSxcIi4vSFRNTFNjcmlwdEVsZW1lbnRcIjoyNCxcIi4vSFRNTFZpZGVvRWxlbWVudFwiOjI2LFwiLi9JbWFnZVwiOjI3LFwiLi9Mb2NhdGlvblwiOjI5LFwiLi9OYXZpZ2F0b3JcIjozMSxcIi4vU2NyZWVuXCI6MzQsXCIuL1RvdWNoRXZlbnRcIjozNixcIi4vWE1MSHR0cFJlcXVlc3RcIjozNyxcIi4vYXVkaW9Db250ZXh0L0F1ZGlvQ29udGV4dFwiOjQyLFwiLi94bWxkb20vZG9tLXBhcnNlci5qc1wiOjU4fV0sNTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIERPTVBhcnNlcihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge1xuICAgIGxvY2F0b3I6IHt9XG4gIH07XG59XG5ET01QYXJzZXIucHJvdG90eXBlLnBhcnNlRnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzb3VyY2UsIG1pbWVUeXBlKSB7XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICB2YXIgc2F4ID0gbmV3IFhNTFJlYWRlcigpO1xuICB2YXIgZG9tQnVpbGRlciA9IG9wdGlvbnMuZG9tQnVpbGRlciB8fCBuZXcgRE9NSGFuZGxlcigpO1xuICB2YXIgZXJyb3JIYW5kbGVyID0gb3B0aW9ucy5lcnJvckhhbmRsZXI7XG4gIHZhciBsb2NhdG9yID0gb3B0aW9ucy5sb2NhdG9yO1xuICB2YXIgZGVmYXVsdE5TTWFwID0gb3B0aW9ucy54bWxucyB8fCB7fTtcbiAgdmFyIGlzSFRNTCA9IC9cXC94P2h0bWw/JC8udGVzdChtaW1lVHlwZSk7XG4gIHZhciBlbnRpdHlNYXAgPSBpc0hUTUwgPyBodG1sRW50aXR5LmVudGl0eU1hcCA6IHtcbiAgICAnbHQnOiAnPCcsXG4gICAgJ2d0JzogJz4nLFxuICAgICdhbXAnOiAnJicsXG4gICAgJ3F1b3QnOiAnXCInLFxuICAgICdhcG9zJzogXCInXCJcbiAgfTtcbiAgaWYgKGxvY2F0b3IpIHtcbiAgICBkb21CdWlsZGVyLnNldERvY3VtZW50TG9jYXRvcihsb2NhdG9yKTtcbiAgfVxuICBzYXguZXJyb3JIYW5kbGVyID0gYnVpbGRFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyLCBkb21CdWlsZGVyLCBsb2NhdG9yKTtcbiAgc2F4LmRvbUJ1aWxkZXIgPSBvcHRpb25zLmRvbUJ1aWxkZXIgfHwgZG9tQnVpbGRlcjtcbiAgaWYgKGlzSFRNTCkge1xuICAgIGRlZmF1bHROU01hcFsnJ10gPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG4gIH1cbiAgZGVmYXVsdE5TTWFwLnhtbCA9IGRlZmF1bHROU01hcC54bWwgfHwgJ2h0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZSc7XG4gIGlmIChzb3VyY2UpIHtcbiAgICBzYXgucGFyc2Uoc291cmNlLCBkZWZhdWx0TlNNYXAsIGVudGl0eU1hcCk7XG4gIH0gZWxzZSB7XG4gICAgc2F4LmVycm9ySGFuZGxlci5lcnJvcihcImludmFsaWQgZG9jIHNvdXJjZVwiKTtcbiAgfVxuICByZXR1cm4gZG9tQnVpbGRlci5kb2M7XG59O1xuZnVuY3Rpb24gYnVpbGRFcnJvckhhbmRsZXIoZXJyb3JJbXBsLCBkb21CdWlsZGVyLCBsb2NhdG9yKSB7XG4gIGlmICghZXJyb3JJbXBsKSB7XG4gICAgaWYgKGRvbUJ1aWxkZXIgaW5zdGFuY2VvZiBET01IYW5kbGVyKSB7XG4gICAgICByZXR1cm4gZG9tQnVpbGRlcjtcbiAgICB9XG4gICAgZXJyb3JJbXBsID0gZG9tQnVpbGRlcjtcbiAgfVxuICB2YXIgZXJyb3JIYW5kbGVyID0ge307XG4gIHZhciBpc0NhbGxiYWNrID0gZXJyb3JJbXBsIGluc3RhbmNlb2YgRnVuY3Rpb247XG4gIGxvY2F0b3IgPSBsb2NhdG9yIHx8IHt9O1xuICBmdW5jdGlvbiBidWlsZChrZXkpIHtcbiAgICB2YXIgZm4gPSBlcnJvckltcGxba2V5XTtcbiAgICBpZiAoIWZuICYmIGlzQ2FsbGJhY2spIHtcbiAgICAgIGZuID0gZXJyb3JJbXBsLmxlbmd0aCA9PSAyID8gZnVuY3Rpb24gKG1zZykge1xuICAgICAgICBlcnJvckltcGwoa2V5LCBtc2cpO1xuICAgICAgfSA6IGVycm9ySW1wbDtcbiAgICB9XG4gICAgZXJyb3JIYW5kbGVyW2tleV0gPSBmbiAmJiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICBmbignW3htbGRvbSAnICsga2V5ICsgJ11cXHQnICsgbXNnICsgX2xvY2F0b3IobG9jYXRvcikpO1xuICAgIH0gfHwgZnVuY3Rpb24gKCkge307XG4gIH1cbiAgYnVpbGQoJ3dhcm5pbmcnKTtcbiAgYnVpbGQoJ2Vycm9yJyk7XG4gIGJ1aWxkKCdmYXRhbEVycm9yJyk7XG4gIHJldHVybiBlcnJvckhhbmRsZXI7XG59XG5mdW5jdGlvbiBET01IYW5kbGVyKCkge1xuICB0aGlzLmNkYXRhID0gZmFsc2U7XG59XG5mdW5jdGlvbiBwb3NpdGlvbihsb2NhdG9yLCBub2RlKSB7XG4gIG5vZGUubGluZU51bWJlciA9IGxvY2F0b3IubGluZU51bWJlcjtcbiAgbm9kZS5jb2x1bW5OdW1iZXIgPSBsb2NhdG9yLmNvbHVtbk51bWJlcjtcbn1cbkRPTUhhbmRsZXIucHJvdG90eXBlID0ge1xuICBzdGFydERvY3VtZW50OiBmdW5jdGlvbiBzdGFydERvY3VtZW50KCkge1xuICAgIHRoaXMuZG9jID0gbmV3IERPTUltcGxlbWVudGF0aW9uKCkuY3JlYXRlRG9jdW1lbnQobnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgaWYgKHRoaXMubG9jYXRvcikge1xuICAgICAgdGhpcy5kb2MuZG9jdW1lbnRVUkkgPSB0aGlzLmxvY2F0b3Iuc3lzdGVtSWQ7XG4gICAgfVxuICB9LFxuICBzdGFydEVsZW1lbnQ6IGZ1bmN0aW9uIHN0YXJ0RWxlbWVudChuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSwgcU5hbWUsIGF0dHJzKSB7XG4gICAgdmFyIGRvYyA9IHRoaXMuZG9jO1xuICAgIHZhciBlbCA9IGRvYy5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxTmFtZSB8fCBsb2NhbE5hbWUpO1xuICAgIHZhciBsZW4gPSBhdHRycy5sZW5ndGg7XG4gICAgYXBwZW5kRWxlbWVudCh0aGlzLCBlbCk7XG4gICAgdGhpcy5jdXJyZW50RWxlbWVudCA9IGVsO1xuICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsIGVsKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgbmFtZXNwYWNlVVJJID0gYXR0cnMuZ2V0VVJJKGkpO1xuICAgICAgdmFyIHZhbHVlID0gYXR0cnMuZ2V0VmFsdWUoaSk7XG4gICAgICB2YXIgcU5hbWUgPSBhdHRycy5nZXRRTmFtZShpKTtcbiAgICAgIHZhciBhdHRyID0gZG9jLmNyZWF0ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgcU5hbWUpO1xuICAgICAgdGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKGF0dHJzLmdldExvY2F0b3IoaSksIGF0dHIpO1xuICAgICAgYXR0ci52YWx1ZSA9IGF0dHIubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpO1xuICAgIH1cbiAgfSxcbiAgZW5kRWxlbWVudDogZnVuY3Rpb24gZW5kRWxlbWVudChuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSwgcU5hbWUpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudEVsZW1lbnQ7XG4gICAgdmFyIHRhZ05hbWUgPSBjdXJyZW50LnRhZ05hbWU7XG4gICAgdGhpcy5jdXJyZW50RWxlbWVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgfSxcbiAgc3RhcnRQcmVmaXhNYXBwaW5nOiBmdW5jdGlvbiBzdGFydFByZWZpeE1hcHBpbmcocHJlZml4LCB1cmkpIHt9LFxuICBlbmRQcmVmaXhNYXBwaW5nOiBmdW5jdGlvbiBlbmRQcmVmaXhNYXBwaW5nKHByZWZpeCkge30sXG4gIHByb2Nlc3NpbmdJbnN0cnVjdGlvbjogZnVuY3Rpb24gcHJvY2Vzc2luZ0luc3RydWN0aW9uKHRhcmdldCwgZGF0YSkge1xuICAgIHZhciBpbnMgPSB0aGlzLmRvYy5jcmVhdGVQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24odGFyZ2V0LCBkYXRhKTtcbiAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLCBpbnMpO1xuICAgIGFwcGVuZEVsZW1lbnQodGhpcywgaW5zKTtcbiAgfSxcbiAgaWdub3JhYmxlV2hpdGVzcGFjZTogZnVuY3Rpb24gaWdub3JhYmxlV2hpdGVzcGFjZShjaCwgc3RhcnQsIGxlbmd0aCkge30sXG4gIGNoYXJhY3RlcnM6IGZ1bmN0aW9uIGNoYXJhY3RlcnMoY2hhcnMsIHN0YXJ0LCBsZW5ndGgpIHtcbiAgICBjaGFycyA9IF90b1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmIChjaGFycykge1xuICAgICAgaWYgKHRoaXMuY2RhdGEpIHtcbiAgICAgICAgdmFyIGNoYXJOb2RlID0gdGhpcy5kb2MuY3JlYXRlQ0RBVEFTZWN0aW9uKGNoYXJzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjaGFyTm9kZSA9IHRoaXMuZG9jLmNyZWF0ZVRleHROb2RlKGNoYXJzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY3VycmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hhck5vZGUpO1xuICAgICAgfSBlbHNlIGlmICgvXlxccyokLy50ZXN0KGNoYXJzKSkge1xuICAgICAgICB0aGlzLmRvYy5hcHBlbmRDaGlsZChjaGFyTm9kZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLCBjaGFyTm9kZSk7XG4gICAgfVxuICB9LFxuICBza2lwcGVkRW50aXR5OiBmdW5jdGlvbiBza2lwcGVkRW50aXR5KG5hbWUpIHt9LFxuICBlbmREb2N1bWVudDogZnVuY3Rpb24gZW5kRG9jdW1lbnQoKSB7XG4gICAgdGhpcy5kb2Mubm9ybWFsaXplKCk7XG4gIH0sXG4gIHNldERvY3VtZW50TG9jYXRvcjogZnVuY3Rpb24gc2V0RG9jdW1lbnRMb2NhdG9yKGxvY2F0b3IpIHtcbiAgICBpZiAodGhpcy5sb2NhdG9yID0gbG9jYXRvcikge1xuICAgICAgbG9jYXRvci5saW5lTnVtYmVyID0gMDtcbiAgICB9XG4gIH0sXG4gIGNvbW1lbnQ6IGZ1bmN0aW9uIGNvbW1lbnQoY2hhcnMsIHN0YXJ0LCBsZW5ndGgpIHtcbiAgICBjaGFycyA9IF90b1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHZhciBjb21tID0gdGhpcy5kb2MuY3JlYXRlQ29tbWVudChjaGFycyk7XG4gICAgdGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvciwgY29tbSk7XG4gICAgYXBwZW5kRWxlbWVudCh0aGlzLCBjb21tKTtcbiAgfSxcbiAgc3RhcnRDREFUQTogZnVuY3Rpb24gc3RhcnRDREFUQSgpIHtcbiAgICB0aGlzLmNkYXRhID0gdHJ1ZTtcbiAgfSxcbiAgZW5kQ0RBVEE6IGZ1bmN0aW9uIGVuZENEQVRBKCkge1xuICAgIHRoaXMuY2RhdGEgPSBmYWxzZTtcbiAgfSxcbiAgc3RhcnREVEQ6IGZ1bmN0aW9uIHN0YXJ0RFREKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCkge1xuICAgIHZhciBpbXBsID0gdGhpcy5kb2MuaW1wbGVtZW50YXRpb247XG4gICAgaWYgKGltcGwgJiYgaW1wbC5jcmVhdGVEb2N1bWVudFR5cGUpIHtcbiAgICAgIHZhciBkdCA9IGltcGwuY3JlYXRlRG9jdW1lbnRUeXBlKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCk7XG4gICAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLCBkdCk7XG4gICAgICBhcHBlbmRFbGVtZW50KHRoaXMsIGR0KTtcbiAgICB9XG4gIH0sXG4gIHdhcm5pbmc6IGZ1bmN0aW9uIHdhcm5pbmcoZXJyb3IpIHtcbiAgICBjb25zb2xlLndhcm4oJ1t4bWxkb20gd2FybmluZ11cXHQnICsgZXJyb3IsIF9sb2NhdG9yKHRoaXMubG9jYXRvcikpO1xuICB9LFxuICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoX2Vycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW3htbGRvbSBlcnJvcl1cXHQnICsgX2Vycm9yLCBfbG9jYXRvcih0aGlzLmxvY2F0b3IpKTtcbiAgfSxcbiAgZmF0YWxFcnJvcjogZnVuY3Rpb24gZmF0YWxFcnJvcihlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1t4bWxkb20gZmF0YWxFcnJvcl1cXHQnICsgZXJyb3IsIF9sb2NhdG9yKHRoaXMubG9jYXRvcikpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuZnVuY3Rpb24gX2xvY2F0b3IobCkge1xuICBpZiAobCkge1xuICAgIHJldHVybiAnXFxuQCcgKyAobC5zeXN0ZW1JZCB8fCAnJykgKyAnI1tsaW5lOicgKyBsLmxpbmVOdW1iZXIgKyAnLGNvbDonICsgbC5jb2x1bW5OdW1iZXIgKyAnXSc7XG4gIH1cbn1cbmZ1bmN0aW9uIF90b1N0cmluZyhjaGFycywgc3RhcnQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIGNoYXJzID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGNoYXJzLnN1YnN0cihzdGFydCwgbGVuZ3RoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoY2hhcnMubGVuZ3RoID49IHN0YXJ0ICsgbGVuZ3RoIHx8IHN0YXJ0KSB7XG4gICAgICByZXR1cm4gbmV3IGphdmEubGFuZy5TdHJpbmcoY2hhcnMsIHN0YXJ0LCBsZW5ndGgpICsgJyc7XG4gICAgfVxuICAgIHJldHVybiBjaGFycztcbiAgfVxufVxuXCJlbmREVEQsc3RhcnRFbnRpdHksZW5kRW50aXR5LGF0dHJpYnV0ZURlY2wsZWxlbWVudERlY2wsZXh0ZXJuYWxFbnRpdHlEZWNsLGludGVybmFsRW50aXR5RGVjbCxyZXNvbHZlRW50aXR5LGdldEV4dGVybmFsU3Vic2V0LG5vdGF0aW9uRGVjbCx1bnBhcnNlZEVudGl0eURlY2xcIi5yZXBsYWNlKC9cXHcrL2csIGZ1bmN0aW9uIChrZXkpIHtcbiAgRE9NSGFuZGxlci5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn0pO1xuZnVuY3Rpb24gYXBwZW5kRWxlbWVudChoYW5kZXIsIG5vZGUpIHtcbiAgaWYgKCFoYW5kZXIuY3VycmVudEVsZW1lbnQpIHtcbiAgICBoYW5kZXIuZG9jLmFwcGVuZENoaWxkKG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGhhbmRlci5jdXJyZW50RWxlbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgfVxufVxudmFyIGh0bWxFbnRpdHkgPSByZXF1aXJlKCcuL2VudGl0aWVzJyk7XG52YXIgWE1MUmVhZGVyID0gcmVxdWlyZSgnLi9zYXgnKS5YTUxSZWFkZXI7XG52YXIgRE9NSW1wbGVtZW50YXRpb24gPSBleHBvcnRzLkRPTUltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9kb20nKS5ET01JbXBsZW1lbnRhdGlvbjtcbmV4cG9ydHMuWE1MU2VyaWFsaXplciA9IHJlcXVpcmUoJy4vZG9tJykuWE1MU2VyaWFsaXplcjtcbmV4cG9ydHMuRE9NUGFyc2VyID0gRE9NUGFyc2VyO1xuXG59LHtcIi4vZG9tXCI6NTksXCIuL2VudGl0aWVzXCI6NjAsXCIuL3NheFwiOjYxfV0sNTk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbmZ1bmN0aW9uIGNvcHkoc3JjLCBkZXN0KSB7XG4gIGZvciAodmFyIHAgaW4gc3JjKSB7XG4gICAgZGVzdFtwXSA9IHNyY1twXTtcbiAgfVxufVxuZnVuY3Rpb24gX2V4dGVuZHMoQ2xhc3MsIFN1cGVyKSB7XG4gIHZhciBwdCA9IENsYXNzLnByb3RvdHlwZTtcbiAgaWYgKCEocHQgaW5zdGFuY2VvZiBTdXBlcikpIHtcbiAgICB2YXIgdCA9IGZ1bmN0aW9uIHQoKSB7fTtcbiAgICA7XG4gICAgdC5wcm90b3R5cGUgPSBTdXBlci5wcm90b3R5cGU7XG4gICAgdCA9IG5ldyB0KCk7XG4gICAgY29weShwdCwgdCk7XG4gICAgQ2xhc3MucHJvdG90eXBlID0gcHQgPSB0O1xuICB9XG4gIGlmIChwdC5jb25zdHJ1Y3RvciAhPSBDbGFzcykge1xuICAgIGlmICh0eXBlb2YgQ2xhc3MgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcihcInVua25vdyBDbGFzczpcIiArIENsYXNzKTtcbiAgICB9XG4gICAgcHQuY29uc3RydWN0b3IgPSBDbGFzcztcbiAgfVxufVxudmFyIGh0bWxucyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbnZhciBOb2RlVHlwZSA9IHt9O1xudmFyIEVMRU1FTlRfTk9ERSA9IE5vZGVUeXBlLkVMRU1FTlRfTk9ERSA9IDE7XG52YXIgQVRUUklCVVRFX05PREUgPSBOb2RlVHlwZS5BVFRSSUJVVEVfTk9ERSA9IDI7XG52YXIgVEVYVF9OT0RFID0gTm9kZVR5cGUuVEVYVF9OT0RFID0gMztcbnZhciBDREFUQV9TRUNUSU9OX05PREUgPSBOb2RlVHlwZS5DREFUQV9TRUNUSU9OX05PREUgPSA0O1xudmFyIEVOVElUWV9SRUZFUkVOQ0VfTk9ERSA9IE5vZGVUeXBlLkVOVElUWV9SRUZFUkVOQ0VfTk9ERSA9IDU7XG52YXIgRU5USVRZX05PREUgPSBOb2RlVHlwZS5FTlRJVFlfTk9ERSA9IDY7XG52YXIgUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFID0gTm9kZVR5cGUuUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFID0gNztcbnZhciBDT01NRU5UX05PREUgPSBOb2RlVHlwZS5DT01NRU5UX05PREUgPSA4O1xudmFyIERPQ1VNRU5UX05PREUgPSBOb2RlVHlwZS5ET0NVTUVOVF9OT0RFID0gOTtcbnZhciBET0NVTUVOVF9UWVBFX05PREUgPSBOb2RlVHlwZS5ET0NVTUVOVF9UWVBFX05PREUgPSAxMDtcbnZhciBET0NVTUVOVF9GUkFHTUVOVF9OT0RFID0gTm9kZVR5cGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSA9IDExO1xudmFyIE5PVEFUSU9OX05PREUgPSBOb2RlVHlwZS5OT1RBVElPTl9OT0RFID0gMTI7XG52YXIgRXhjZXB0aW9uQ29kZSA9IHt9O1xudmFyIEV4Y2VwdGlvbk1lc3NhZ2UgPSB7fTtcbnZhciBJTkRFWF9TSVpFX0VSUiA9IEV4Y2VwdGlvbkNvZGUuSU5ERVhfU0laRV9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxXSA9IFwiSW5kZXggc2l6ZSBlcnJvclwiLCAxKTtcbnZhciBET01TVFJJTkdfU0laRV9FUlIgPSBFeGNlcHRpb25Db2RlLkRPTVNUUklOR19TSVpFX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzJdID0gXCJET01TdHJpbmcgc2l6ZSBlcnJvclwiLCAyKTtcbnZhciBISUVSQVJDSFlfUkVRVUVTVF9FUlIgPSBFeGNlcHRpb25Db2RlLkhJRVJBUkNIWV9SRVFVRVNUX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzNdID0gXCJIaWVyYXJjaHkgcmVxdWVzdCBlcnJvclwiLCAzKTtcbnZhciBXUk9OR19ET0NVTUVOVF9FUlIgPSBFeGNlcHRpb25Db2RlLldST05HX0RPQ1VNRU5UX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzRdID0gXCJXcm9uZyBkb2N1bWVudFwiLCA0KTtcbnZhciBJTlZBTElEX0NIQVJBQ1RFUl9FUlIgPSBFeGNlcHRpb25Db2RlLklOVkFMSURfQ0hBUkFDVEVSX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzVdID0gXCJJbnZhbGlkIGNoYXJhY3RlclwiLCA1KTtcbnZhciBOT19EQVRBX0FMTE9XRURfRVJSID0gRXhjZXB0aW9uQ29kZS5OT19EQVRBX0FMTE9XRURfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbNl0gPSBcIk5vIGRhdGEgYWxsb3dlZFwiLCA2KTtcbnZhciBOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlIgPSBFeGNlcHRpb25Db2RlLk5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzddID0gXCJObyBtb2RpZmljYXRpb24gYWxsb3dlZFwiLCA3KTtcbnZhciBOT1RfRk9VTkRfRVJSID0gRXhjZXB0aW9uQ29kZS5OT1RfRk9VTkRfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbOF0gPSBcIk5vdCBmb3VuZFwiLCA4KTtcbnZhciBOT1RfU1VQUE9SVEVEX0VSUiA9IEV4Y2VwdGlvbkNvZGUuTk9UX1NVUFBPUlRFRF9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVs5XSA9IFwiTm90IHN1cHBvcnRlZFwiLCA5KTtcbnZhciBJTlVTRV9BVFRSSUJVVEVfRVJSID0gRXhjZXB0aW9uQ29kZS5JTlVTRV9BVFRSSUJVVEVfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbMTBdID0gXCJBdHRyaWJ1dGUgaW4gdXNlXCIsIDEwKTtcbnZhciBJTlZBTElEX1NUQVRFX0VSUiA9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9TVEFURV9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxMV0gPSBcIkludmFsaWQgc3RhdGVcIiwgMTEpO1xudmFyIFNZTlRBWF9FUlIgPSBFeGNlcHRpb25Db2RlLlNZTlRBWF9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxMl0gPSBcIlN5bnRheCBlcnJvclwiLCAxMik7XG52YXIgSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSID0gRXhjZXB0aW9uQ29kZS5JTlZBTElEX01PRElGSUNBVElPTl9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxM10gPSBcIkludmFsaWQgbW9kaWZpY2F0aW9uXCIsIDEzKTtcbnZhciBOQU1FU1BBQ0VfRVJSID0gRXhjZXB0aW9uQ29kZS5OQU1FU1BBQ0VfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbMTRdID0gXCJJbnZhbGlkIG5hbWVzcGFjZVwiLCAxNCk7XG52YXIgSU5WQUxJRF9BQ0NFU1NfRVJSID0gRXhjZXB0aW9uQ29kZS5JTlZBTElEX0FDQ0VTU19FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxNV0gPSBcIkludmFsaWQgYWNjZXNzXCIsIDE1KTtcbmZ1bmN0aW9uIERPTUV4Y2VwdGlvbihjb2RlLCBtZXNzYWdlKSB7XG4gIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICB2YXIgZXJyb3IgPSBtZXNzYWdlO1xuICB9IGVsc2Uge1xuICAgIGVycm9yID0gdGhpcztcbiAgICBFcnJvci5jYWxsKHRoaXMsIEV4Y2VwdGlvbk1lc3NhZ2VbY29kZV0pO1xuICAgIHRoaXMubWVzc2FnZSA9IEV4Y2VwdGlvbk1lc3NhZ2VbY29kZV07XG4gICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBET01FeGNlcHRpb24pO1xuICB9XG4gIGVycm9yLmNvZGUgPSBjb2RlO1xuICBpZiAobWVzc2FnZSkgdGhpcy5tZXNzYWdlID0gdGhpcy5tZXNzYWdlICsgXCI6IFwiICsgbWVzc2FnZTtcbiAgcmV0dXJuIGVycm9yO1xufVxuO1xuRE9NRXhjZXB0aW9uLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcbmNvcHkoRXhjZXB0aW9uQ29kZSwgRE9NRXhjZXB0aW9uKTtcbmZ1bmN0aW9uIE5vZGVMaXN0KCkge31cbjtcbk5vZGVMaXN0LnByb3RvdHlwZSA9IHtcbiAgbGVuZ3RoOiAwLFxuICBpdGVtOiBmdW5jdGlvbiBpdGVtKGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXNbaW5kZXhdIHx8IG51bGw7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZyhpc0hUTUwsIG5vZGVGaWx0ZXIpIHtcbiAgICBmb3IgKHZhciBidWYgPSBbXSwgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzZXJpYWxpemVUb1N0cmluZyh0aGlzW2ldLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlcik7XG4gICAgfVxuICAgIHJldHVybiBidWYuam9pbignJyk7XG4gIH1cbn07XG5mdW5jdGlvbiBMaXZlTm9kZUxpc3Qobm9kZSwgcmVmcmVzaCkge1xuICB0aGlzLl9ub2RlID0gbm9kZTtcbiAgdGhpcy5fcmVmcmVzaCA9IHJlZnJlc2g7XG4gIF91cGRhdGVMaXZlTGlzdCh0aGlzKTtcbn1cbmZ1bmN0aW9uIF91cGRhdGVMaXZlTGlzdChsaXN0KSB7XG4gIHZhciBpbmMgPSBsaXN0Ll9ub2RlLl9pbmMgfHwgbGlzdC5fbm9kZS5vd25lckRvY3VtZW50Ll9pbmM7XG4gIGlmIChsaXN0Ll9pbmMgIT0gaW5jKSB7XG4gICAgdmFyIGxzID0gbGlzdC5fcmVmcmVzaChsaXN0Ll9ub2RlKTtcbiAgICBfX3NldF9fKGxpc3QsICdsZW5ndGgnLCBscy5sZW5ndGgpO1xuICAgIGNvcHkobHMsIGxpc3QpO1xuICAgIGxpc3QuX2luYyA9IGluYztcbiAgfVxufVxuTGl2ZU5vZGVMaXN0LnByb3RvdHlwZS5pdGVtID0gZnVuY3Rpb24gKGkpIHtcbiAgX3VwZGF0ZUxpdmVMaXN0KHRoaXMpO1xuICByZXR1cm4gdGhpc1tpXTtcbn07XG5fZXh0ZW5kcyhMaXZlTm9kZUxpc3QsIE5vZGVMaXN0KTtcbmZ1bmN0aW9uIE5hbWVkTm9kZU1hcCgpIHt9XG47XG5mdW5jdGlvbiBfZmluZE5vZGVJbmRleChsaXN0LCBub2RlKSB7XG4gIHZhciBpID0gbGlzdC5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZiAobGlzdFtpXSA9PT0gbm9kZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBfYWRkTmFtZWROb2RlKGVsLCBsaXN0LCBuZXdBdHRyLCBvbGRBdHRyKSB7XG4gIGlmIChvbGRBdHRyKSB7XG4gICAgbGlzdFtfZmluZE5vZGVJbmRleChsaXN0LCBvbGRBdHRyKV0gPSBuZXdBdHRyO1xuICB9IGVsc2Uge1xuICAgIGxpc3RbbGlzdC5sZW5ndGgrK10gPSBuZXdBdHRyO1xuICB9XG4gIGlmIChlbCkge1xuICAgIG5ld0F0dHIub3duZXJFbGVtZW50ID0gZWw7XG4gICAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG4gICAgaWYgKGRvYykge1xuICAgICAgb2xkQXR0ciAmJiBfb25SZW1vdmVBdHRyaWJ1dGUoZG9jLCBlbCwgb2xkQXR0cik7XG4gICAgICBfb25BZGRBdHRyaWJ1dGUoZG9jLCBlbCwgbmV3QXR0cik7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBfcmVtb3ZlTmFtZWROb2RlKGVsLCBsaXN0LCBhdHRyKSB7XG4gIHZhciBpID0gX2ZpbmROb2RlSW5kZXgobGlzdCwgYXR0cik7XG4gIGlmIChpID49IDApIHtcbiAgICB2YXIgbGFzdEluZGV4ID0gbGlzdC5sZW5ndGggLSAxO1xuICAgIHdoaWxlIChpIDwgbGFzdEluZGV4KSB7XG4gICAgICBsaXN0W2ldID0gbGlzdFsrK2ldO1xuICAgIH1cbiAgICBsaXN0Lmxlbmd0aCA9IGxhc3RJbmRleDtcbiAgICBpZiAoZWwpIHtcbiAgICAgIHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50O1xuICAgICAgaWYgKGRvYykge1xuICAgICAgICBfb25SZW1vdmVBdHRyaWJ1dGUoZG9jLCBlbCwgYXR0cik7XG4gICAgICAgIGF0dHIub3duZXJFbGVtZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRE9NRXhjZXB0aW9uKE5PVF9GT1VORF9FUlIsIG5ldyBFcnJvcihlbC50YWdOYW1lICsgJ0AnICsgYXR0cikpO1xuICB9XG59XG5OYW1lZE5vZGVNYXAucHJvdG90eXBlID0ge1xuICBsZW5ndGg6IDAsXG4gIGl0ZW06IE5vZGVMaXN0LnByb3RvdHlwZS5pdGVtLFxuICBnZXROYW1lZEl0ZW06IGZ1bmN0aW9uIGdldE5hbWVkSXRlbShrZXkpIHtcbiAgICB2YXIgaSA9IHRoaXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciBhdHRyID0gdGhpc1tpXTtcbiAgICAgIGlmIChhdHRyLm5vZGVOYW1lID09IGtleSkge1xuICAgICAgICByZXR1cm4gYXR0cjtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNldE5hbWVkSXRlbTogZnVuY3Rpb24gc2V0TmFtZWRJdGVtKGF0dHIpIHtcbiAgICB2YXIgZWwgPSBhdHRyLm93bmVyRWxlbWVudDtcbiAgICBpZiAoZWwgJiYgZWwgIT0gdGhpcy5fb3duZXJFbGVtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKElOVVNFX0FUVFJJQlVURV9FUlIpO1xuICAgIH1cbiAgICB2YXIgb2xkQXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtKGF0dHIubm9kZU5hbWUpO1xuICAgIF9hZGROYW1lZE5vZGUodGhpcy5fb3duZXJFbGVtZW50LCB0aGlzLCBhdHRyLCBvbGRBdHRyKTtcbiAgICByZXR1cm4gb2xkQXR0cjtcbiAgfSxcbiAgc2V0TmFtZWRJdGVtTlM6IGZ1bmN0aW9uIHNldE5hbWVkSXRlbU5TKGF0dHIpIHtcbiAgICB2YXIgZWwgPSBhdHRyLm93bmVyRWxlbWVudCxcbiAgICAgIG9sZEF0dHI7XG4gICAgaWYgKGVsICYmIGVsICE9IHRoaXMuX293bmVyRWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihJTlVTRV9BVFRSSUJVVEVfRVJSKTtcbiAgICB9XG4gICAgb2xkQXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtTlMoYXR0ci5uYW1lc3BhY2VVUkksIGF0dHIubG9jYWxOYW1lKTtcbiAgICBfYWRkTmFtZWROb2RlKHRoaXMuX293bmVyRWxlbWVudCwgdGhpcywgYXR0ciwgb2xkQXR0cik7XG4gICAgcmV0dXJuIG9sZEF0dHI7XG4gIH0sXG4gIHJlbW92ZU5hbWVkSXRlbTogZnVuY3Rpb24gcmVtb3ZlTmFtZWRJdGVtKGtleSkge1xuICAgIHZhciBhdHRyID0gdGhpcy5nZXROYW1lZEl0ZW0oa2V5KTtcbiAgICBfcmVtb3ZlTmFtZWROb2RlKHRoaXMuX293bmVyRWxlbWVudCwgdGhpcywgYXR0cik7XG4gICAgcmV0dXJuIGF0dHI7XG4gIH0sXG4gIHJlbW92ZU5hbWVkSXRlbU5TOiBmdW5jdGlvbiByZW1vdmVOYW1lZEl0ZW1OUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuICAgIHZhciBhdHRyID0gdGhpcy5nZXROYW1lZEl0ZW1OUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSk7XG4gICAgX3JlbW92ZU5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsIHRoaXMsIGF0dHIpO1xuICAgIHJldHVybiBhdHRyO1xuICB9LFxuICBnZXROYW1lZEl0ZW1OUzogZnVuY3Rpb24gZ2V0TmFtZWRJdGVtTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciBub2RlID0gdGhpc1tpXTtcbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSA9PSBsb2NhbE5hbWUgJiYgbm9kZS5uYW1lc3BhY2VVUkkgPT0gbmFtZXNwYWNlVVJJKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbmZ1bmN0aW9uIERPTUltcGxlbWVudGF0aW9uKGZlYXR1cmVzKSB7XG4gIHRoaXMuX2ZlYXR1cmVzID0ge307XG4gIGlmIChmZWF0dXJlcykge1xuICAgIGZvciAodmFyIGZlYXR1cmUgaW4gZmVhdHVyZXMpIHtcbiAgICAgIHRoaXMuX2ZlYXR1cmVzID0gZmVhdHVyZXNbZmVhdHVyZV07XG4gICAgfVxuICB9XG59XG47XG5ET01JbXBsZW1lbnRhdGlvbi5wcm90b3R5cGUgPSB7XG4gIGhhc0ZlYXR1cmU6IGZ1bmN0aW9uIGhhc0ZlYXR1cmUoZmVhdHVyZSwgdmVyc2lvbikge1xuICAgIHZhciB2ZXJzaW9ucyA9IHRoaXMuX2ZlYXR1cmVzW2ZlYXR1cmUudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKHZlcnNpb25zICYmICghdmVyc2lvbiB8fCB2ZXJzaW9uIGluIHZlcnNpb25zKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZURvY3VtZW50OiBmdW5jdGlvbiBjcmVhdGVEb2N1bWVudChuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUsIGRvY3R5cGUpIHtcbiAgICB2YXIgZG9jID0gbmV3IERvY3VtZW50KCk7XG4gICAgZG9jLmltcGxlbWVudGF0aW9uID0gdGhpcztcbiAgICBkb2MuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuICAgIGRvYy5kb2N0eXBlID0gZG9jdHlwZTtcbiAgICBpZiAoZG9jdHlwZSkge1xuICAgICAgZG9jLmFwcGVuZENoaWxkKGRvY3R5cGUpO1xuICAgIH1cbiAgICBpZiAocXVhbGlmaWVkTmFtZSkge1xuICAgICAgdmFyIHJvb3QgPSBkb2MuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSk7XG4gICAgICBkb2MuYXBwZW5kQ2hpbGQocm9vdCk7XG4gICAgfVxuICAgIHJldHVybiBkb2M7XG4gIH0sXG4gIGNyZWF0ZURvY3VtZW50VHlwZTogZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnRUeXBlKHF1YWxpZmllZE5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCkge1xuICAgIHZhciBub2RlID0gbmV3IERvY3VtZW50VHlwZSgpO1xuICAgIG5vZGUubmFtZSA9IHF1YWxpZmllZE5hbWU7XG4gICAgbm9kZS5ub2RlTmFtZSA9IHF1YWxpZmllZE5hbWU7XG4gICAgbm9kZS5wdWJsaWNJZCA9IHB1YmxpY0lkO1xuICAgIG5vZGUuc3lzdGVtSWQgPSBzeXN0ZW1JZDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufTtcbmZ1bmN0aW9uIE5vZGUoKSB7fVxuO1xuTm9kZS5wcm90b3R5cGUgPSB7XG4gIGZpcnN0Q2hpbGQ6IG51bGwsXG4gIGxhc3RDaGlsZDogbnVsbCxcbiAgcHJldmlvdXNTaWJsaW5nOiBudWxsLFxuICBuZXh0U2libGluZzogbnVsbCxcbiAgYXR0cmlidXRlczogbnVsbCxcbiAgcGFyZW50Tm9kZTogbnVsbCxcbiAgY2hpbGROb2RlczogbnVsbCxcbiAgb3duZXJEb2N1bWVudDogbnVsbCxcbiAgbm9kZVZhbHVlOiBudWxsLFxuICBuYW1lc3BhY2VVUkk6IG51bGwsXG4gIHByZWZpeDogbnVsbCxcbiAgbG9jYWxOYW1lOiBudWxsLFxuICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIGluc2VydEJlZm9yZShuZXdDaGlsZCwgcmVmQ2hpbGQpIHtcbiAgICByZXR1cm4gX2luc2VydEJlZm9yZSh0aGlzLCBuZXdDaGlsZCwgcmVmQ2hpbGQpO1xuICB9LFxuICByZXBsYWNlQ2hpbGQ6IGZ1bmN0aW9uIHJlcGxhY2VDaGlsZChuZXdDaGlsZCwgb2xkQ2hpbGQpIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShuZXdDaGlsZCwgb2xkQ2hpbGQpO1xuICAgIGlmIChvbGRDaGlsZCkge1xuICAgICAgdGhpcy5yZW1vdmVDaGlsZChvbGRDaGlsZCk7XG4gICAgfVxuICB9LFxuICByZW1vdmVDaGlsZDogZnVuY3Rpb24gcmVtb3ZlQ2hpbGQob2xkQ2hpbGQpIHtcbiAgICByZXR1cm4gX3JlbW92ZUNoaWxkKHRoaXMsIG9sZENoaWxkKTtcbiAgfSxcbiAgYXBwZW5kQ2hpbGQ6IGZ1bmN0aW9uIGFwcGVuZENoaWxkKG5ld0NoaWxkKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCBudWxsKTtcbiAgfSxcbiAgaGFzQ2hpbGROb2RlczogZnVuY3Rpb24gaGFzQ2hpbGROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdENoaWxkICE9IG51bGw7XG4gIH0sXG4gIGNsb25lTm9kZTogZnVuY3Rpb24gY2xvbmVOb2RlKGRlZXApIHtcbiAgICByZXR1cm4gX2Nsb25lTm9kZSh0aGlzLm93bmVyRG9jdW1lbnQgfHwgdGhpcywgdGhpcywgZGVlcCk7XG4gIH0sXG4gIG5vcm1hbGl6ZTogZnVuY3Rpb24gbm9ybWFsaXplKCkge1xuICAgIHZhciBjaGlsZCA9IHRoaXMuZmlyc3RDaGlsZDtcbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICBpZiAobmV4dCAmJiBuZXh0Lm5vZGVUeXBlID09IFRFWFRfTk9ERSAmJiBjaGlsZC5ub2RlVHlwZSA9PSBURVhUX05PREUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChuZXh0KTtcbiAgICAgICAgY2hpbGQuYXBwZW5kRGF0YShuZXh0LmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQubm9ybWFsaXplKCk7XG4gICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiBpc1N1cHBvcnRlZChmZWF0dXJlLCB2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHRoaXMub3duZXJEb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKGZlYXR1cmUsIHZlcnNpb24pO1xuICB9LFxuICBoYXNBdHRyaWJ1dGVzOiBmdW5jdGlvbiBoYXNBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoID4gMDtcbiAgfSxcbiAgbG9va3VwUHJlZml4OiBmdW5jdGlvbiBsb29rdXBQcmVmaXgobmFtZXNwYWNlVVJJKSB7XG4gICAgdmFyIGVsID0gdGhpcztcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgIHZhciBtYXAgPSBlbC5fbnNNYXA7XG4gICAgICBpZiAobWFwKSB7XG4gICAgICAgIGZvciAodmFyIG4gaW4gbWFwKSB7XG4gICAgICAgICAgaWYgKG1hcFtuXSA9PSBuYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWwgPSBlbC5ub2RlVHlwZSA9PSBBVFRSSUJVVEVfTk9ERSA/IGVsLm93bmVyRG9jdW1lbnQgOiBlbC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgbG9va3VwTmFtZXNwYWNlVVJJOiBmdW5jdGlvbiBsb29rdXBOYW1lc3BhY2VVUkkocHJlZml4KSB7XG4gICAgdmFyIGVsID0gdGhpcztcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgIHZhciBtYXAgPSBlbC5fbnNNYXA7XG4gICAgICBpZiAobWFwKSB7XG4gICAgICAgIGlmIChwcmVmaXggaW4gbWFwKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcFtwcmVmaXhdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbCA9IGVsLm5vZGVUeXBlID09IEFUVFJJQlVURV9OT0RFID8gZWwub3duZXJEb2N1bWVudCA6IGVsLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBpc0RlZmF1bHROYW1lc3BhY2U6IGZ1bmN0aW9uIGlzRGVmYXVsdE5hbWVzcGFjZShuYW1lc3BhY2VVUkkpIHtcbiAgICB2YXIgcHJlZml4ID0gdGhpcy5sb29rdXBQcmVmaXgobmFtZXNwYWNlVVJJKTtcbiAgICByZXR1cm4gcHJlZml4ID09IG51bGw7XG4gIH1cbn07XG5mdW5jdGlvbiBfeG1sRW5jb2RlcihjKSB7XG4gIHJldHVybiBjID09ICc8JyAmJiAnJmx0OycgfHwgYyA9PSAnPicgJiYgJyZndDsnIHx8IGMgPT0gJyYnICYmICcmYW1wOycgfHwgYyA9PSAnXCInICYmICcmcXVvdDsnIHx8ICcmIycgKyBjLmNoYXJDb2RlQXQoKSArICc7Jztcbn1cbmNvcHkoTm9kZVR5cGUsIE5vZGUpO1xuY29weShOb2RlVHlwZSwgTm9kZS5wcm90b3R5cGUpO1xuZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sobm9kZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAobm9kZSA9IG5vZGUuZmlyc3RDaGlsZCkge1xuICAgIGRvIHtcbiAgICAgIGlmIChfdmlzaXROb2RlKG5vZGUsIGNhbGxiYWNrKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChub2RlID0gbm9kZS5uZXh0U2libGluZyk7XG4gIH1cbn1cbmZ1bmN0aW9uIERvY3VtZW50KCkge31cbmZ1bmN0aW9uIF9vbkFkZEF0dHJpYnV0ZShkb2MsIGVsLCBuZXdBdHRyKSB7XG4gIGRvYyAmJiBkb2MuX2luYysrO1xuICB2YXIgbnMgPSBuZXdBdHRyLm5hbWVzcGFjZVVSSTtcbiAgaWYgKG5zID09ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycpIHtcbiAgICBlbC5fbnNNYXBbbmV3QXR0ci5wcmVmaXggPyBuZXdBdHRyLmxvY2FsTmFtZSA6ICcnXSA9IG5ld0F0dHIudmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIF9vblJlbW92ZUF0dHJpYnV0ZShkb2MsIGVsLCBuZXdBdHRyLCByZW1vdmUpIHtcbiAgZG9jICYmIGRvYy5faW5jKys7XG4gIHZhciBucyA9IG5ld0F0dHIubmFtZXNwYWNlVVJJO1xuICBpZiAobnMgPT0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJykge1xuICAgIGRlbGV0ZSBlbC5fbnNNYXBbbmV3QXR0ci5wcmVmaXggPyBuZXdBdHRyLmxvY2FsTmFtZSA6ICcnXTtcbiAgfVxufVxuZnVuY3Rpb24gX29uVXBkYXRlQ2hpbGQoZG9jLCBlbCwgbmV3Q2hpbGQpIHtcbiAgaWYgKGRvYyAmJiBkb2MuX2luYykge1xuICAgIGRvYy5faW5jKys7XG4gICAgdmFyIGNzID0gZWwuY2hpbGROb2RlcztcbiAgICBpZiAobmV3Q2hpbGQpIHtcbiAgICAgIGNzW2NzLmxlbmd0aCsrXSA9IG5ld0NoaWxkO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hpbGQgPSBlbC5maXJzdENoaWxkO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIGNzW2krK10gPSBjaGlsZDtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICAgIGNzLmxlbmd0aCA9IGk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBfcmVtb3ZlQ2hpbGQocGFyZW50Tm9kZSwgY2hpbGQpIHtcbiAgdmFyIHByZXZpb3VzID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICB2YXIgbmV4dCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICBpZiAocHJldmlvdXMpIHtcbiAgICBwcmV2aW91cy5uZXh0U2libGluZyA9IG5leHQ7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50Tm9kZS5maXJzdENoaWxkID0gbmV4dDtcbiAgfVxuICBpZiAobmV4dCkge1xuICAgIG5leHQucHJldmlvdXNTaWJsaW5nID0gcHJldmlvdXM7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50Tm9kZS5sYXN0Q2hpbGQgPSBwcmV2aW91cztcbiAgfVxuICBfb25VcGRhdGVDaGlsZChwYXJlbnROb2RlLm93bmVyRG9jdW1lbnQsIHBhcmVudE5vZGUpO1xuICByZXR1cm4gY2hpbGQ7XG59XG5mdW5jdGlvbiBfaW5zZXJ0QmVmb3JlKHBhcmVudE5vZGUsIG5ld0NoaWxkLCBuZXh0Q2hpbGQpIHtcbiAgdmFyIGNwID0gbmV3Q2hpbGQucGFyZW50Tm9kZTtcbiAgaWYgKGNwKSB7XG4gICAgY3AucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICB9XG4gIGlmIChuZXdDaGlsZC5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgIHZhciBuZXdGaXJzdCA9IG5ld0NoaWxkLmZpcnN0Q2hpbGQ7XG4gICAgaWYgKG5ld0ZpcnN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3QgPSBuZXdDaGlsZC5sYXN0Q2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgbmV3Rmlyc3QgPSBuZXdMYXN0ID0gbmV3Q2hpbGQ7XG4gIH1cbiAgdmFyIHByZSA9IG5leHRDaGlsZCA/IG5leHRDaGlsZC5wcmV2aW91c1NpYmxpbmcgOiBwYXJlbnROb2RlLmxhc3RDaGlsZDtcbiAgbmV3Rmlyc3QucHJldmlvdXNTaWJsaW5nID0gcHJlO1xuICBuZXdMYXN0Lm5leHRTaWJsaW5nID0gbmV4dENoaWxkO1xuICBpZiAocHJlKSB7XG4gICAgcHJlLm5leHRTaWJsaW5nID0gbmV3Rmlyc3Q7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50Tm9kZS5maXJzdENoaWxkID0gbmV3Rmlyc3Q7XG4gIH1cbiAgaWYgKG5leHRDaGlsZCA9PSBudWxsKSB7XG4gICAgcGFyZW50Tm9kZS5sYXN0Q2hpbGQgPSBuZXdMYXN0O1xuICB9IGVsc2Uge1xuICAgIG5leHRDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBuZXdMYXN0O1xuICB9XG4gIGRvIHtcbiAgICBuZXdGaXJzdC5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgfSB3aGlsZSAobmV3Rmlyc3QgIT09IG5ld0xhc3QgJiYgKG5ld0ZpcnN0ID0gbmV3Rmlyc3QubmV4dFNpYmxpbmcpKTtcbiAgX29uVXBkYXRlQ2hpbGQocGFyZW50Tm9kZS5vd25lckRvY3VtZW50IHx8IHBhcmVudE5vZGUsIHBhcmVudE5vZGUpO1xuICBpZiAobmV3Q2hpbGQubm9kZVR5cGUgPT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgIG5ld0NoaWxkLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZC5sYXN0Q2hpbGQgPSBudWxsO1xuICB9XG4gIHJldHVybiBuZXdDaGlsZDtcbn1cbmZ1bmN0aW9uIF9hcHBlbmRTaW5nbGVDaGlsZChwYXJlbnROb2RlLCBuZXdDaGlsZCkge1xuICB2YXIgY3AgPSBuZXdDaGlsZC5wYXJlbnROb2RlO1xuICBpZiAoY3ApIHtcbiAgICB2YXIgcHJlID0gcGFyZW50Tm9kZS5sYXN0Q2hpbGQ7XG4gICAgY3AucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICAgIHZhciBwcmUgPSBwYXJlbnROb2RlLmxhc3RDaGlsZDtcbiAgfVxuICB2YXIgcHJlID0gcGFyZW50Tm9kZS5sYXN0Q2hpbGQ7XG4gIG5ld0NoaWxkLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBwcmU7XG4gIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgaWYgKHByZSkge1xuICAgIHByZS5uZXh0U2libGluZyA9IG5ld0NoaWxkO1xuICB9IGVsc2Uge1xuICAgIHBhcmVudE5vZGUuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICB9XG4gIHBhcmVudE5vZGUubGFzdENoaWxkID0gbmV3Q2hpbGQ7XG4gIF9vblVwZGF0ZUNoaWxkKHBhcmVudE5vZGUub3duZXJEb2N1bWVudCwgcGFyZW50Tm9kZSwgbmV3Q2hpbGQpO1xuICByZXR1cm4gbmV3Q2hpbGQ7XG59XG5Eb2N1bWVudC5wcm90b3R5cGUgPSB7XG4gIG5vZGVOYW1lOiAnI2RvY3VtZW50JyxcbiAgbm9kZVR5cGU6IERPQ1VNRU5UX05PREUsXG4gIGRvY3R5cGU6IG51bGwsXG4gIGRvY3VtZW50RWxlbWVudDogbnVsbCxcbiAgX2luYzogMSxcbiAgaW5zZXJ0QmVmb3JlOiBmdW5jdGlvbiBpbnNlcnRCZWZvcmUobmV3Q2hpbGQsIHJlZkNoaWxkKSB7XG4gICAgaWYgKG5ld0NoaWxkLm5vZGVUeXBlID09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgIHZhciBjaGlsZCA9IG5ld0NoaWxkLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgdmFyIG5leHQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgdGhpcy5pbnNlcnRCZWZvcmUoY2hpbGQsIHJlZkNoaWxkKTtcbiAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgIH1cbiAgICBpZiAodGhpcy5kb2N1bWVudEVsZW1lbnQgPT0gbnVsbCAmJiBuZXdDaGlsZC5ub2RlVHlwZSA9PSBFTEVNRU5UX05PREUpIHtcbiAgICAgIHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gbmV3Q2hpbGQ7XG4gICAgfVxuICAgIHJldHVybiBfaW5zZXJ0QmVmb3JlKHRoaXMsIG5ld0NoaWxkLCByZWZDaGlsZCksIG5ld0NoaWxkLm93bmVyRG9jdW1lbnQgPSB0aGlzLCBuZXdDaGlsZDtcbiAgfSxcbiAgcmVtb3ZlQ2hpbGQ6IGZ1bmN0aW9uIHJlbW92ZUNoaWxkKG9sZENoaWxkKSB7XG4gICAgaWYgKHRoaXMuZG9jdW1lbnRFbGVtZW50ID09IG9sZENoaWxkKSB7XG4gICAgICB0aGlzLmRvY3VtZW50RWxlbWVudCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBfcmVtb3ZlQ2hpbGQodGhpcywgb2xkQ2hpbGQpO1xuICB9LFxuICBpbXBvcnROb2RlOiBmdW5jdGlvbiBpbXBvcnROb2RlKGltcG9ydGVkTm9kZSwgZGVlcCkge1xuICAgIHJldHVybiBfaW1wb3J0Tm9kZSh0aGlzLCBpbXBvcnRlZE5vZGUsIGRlZXApO1xuICB9LFxuICBnZXRFbGVtZW50QnlJZDogZnVuY3Rpb24gZ2V0RWxlbWVudEJ5SWQoaWQpIHtcbiAgICB2YXIgcnR2ID0gbnVsbDtcbiAgICBfdmlzaXROb2RlKHRoaXMuZG9jdW1lbnRFbGVtZW50LCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBpZCkge1xuICAgICAgICAgIHJ0diA9IG5vZGU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcnR2O1xuICB9LFxuICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWUpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBFbGVtZW50KCk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLm5vZGVOYW1lID0gdGFnTmFtZTtcbiAgICBub2RlLnRhZ05hbWUgPSB0YWdOYW1lO1xuICAgIG5vZGUuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuICAgIHZhciBhdHRycyA9IG5vZGUuYXR0cmlidXRlcyA9IG5ldyBOYW1lZE5vZGVNYXAoKTtcbiAgICBhdHRycy5fb3duZXJFbGVtZW50ID0gbm9kZTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlRG9jdW1lbnRGcmFnbWVudDogZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlVGV4dE5vZGU6IGZ1bmN0aW9uIGNyZWF0ZVRleHROb2RlKGRhdGEpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBUZXh0KCk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLmFwcGVuZERhdGEoZGF0YSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIGNyZWF0ZUNvbW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQoZGF0YSkge1xuICAgIHZhciBub2RlID0gbmV3IENvbW1lbnQoKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUuYXBwZW5kRGF0YShkYXRhKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlQ0RBVEFTZWN0aW9uOiBmdW5jdGlvbiBjcmVhdGVDREFUQVNlY3Rpb24oZGF0YSkge1xuICAgIHZhciBub2RlID0gbmV3IENEQVRBU2VjdGlvbigpO1xuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG4gICAgbm9kZS5hcHBlbmREYXRhKGRhdGEpO1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICBjcmVhdGVQcm9jZXNzaW5nSW5zdHJ1Y3Rpb246IGZ1bmN0aW9uIGNyZWF0ZVByb2Nlc3NpbmdJbnN0cnVjdGlvbih0YXJnZXQsIGRhdGEpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUudGFnTmFtZSA9IG5vZGUudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIG5vZGUubm9kZVZhbHVlID0gbm9kZS5kYXRhID0gZGF0YTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlQXR0cmlidXRlOiBmdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGUobmFtZSkge1xuICAgIHZhciBub2RlID0gbmV3IEF0dHIoKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUubmFtZSA9IG5hbWU7XG4gICAgbm9kZS5ub2RlTmFtZSA9IG5hbWU7XG4gICAgbm9kZS5sb2NhbE5hbWUgPSBuYW1lO1xuICAgIG5vZGUuc3BlY2lmaWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlRW50aXR5UmVmZXJlbmNlOiBmdW5jdGlvbiBjcmVhdGVFbnRpdHlSZWZlcmVuY2UobmFtZSkge1xuICAgIHZhciBub2RlID0gbmV3IEVudGl0eVJlZmVyZW5jZSgpO1xuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG4gICAgbm9kZS5ub2RlTmFtZSA9IG5hbWU7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIGNyZWF0ZUVsZW1lbnROUzogZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSkge1xuICAgIHZhciBub2RlID0gbmV3IEVsZW1lbnQoKTtcbiAgICB2YXIgcGwgPSBxdWFsaWZpZWROYW1lLnNwbGl0KCc6Jyk7XG4gICAgdmFyIGF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzID0gbmV3IE5hbWVkTm9kZU1hcCgpO1xuICAgIG5vZGUuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG4gICAgbm9kZS5ub2RlTmFtZSA9IHF1YWxpZmllZE5hbWU7XG4gICAgbm9kZS50YWdOYW1lID0gcXVhbGlmaWVkTmFtZTtcbiAgICBub2RlLm5hbWVzcGFjZVVSSSA9IG5hbWVzcGFjZVVSSTtcbiAgICBpZiAocGwubGVuZ3RoID09IDIpIHtcbiAgICAgIG5vZGUucHJlZml4ID0gcGxbMF07XG4gICAgICBub2RlLmxvY2FsTmFtZSA9IHBsWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmxvY2FsTmFtZSA9IHF1YWxpZmllZE5hbWU7XG4gICAgfVxuICAgIGF0dHJzLl9vd25lckVsZW1lbnQgPSBub2RlO1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICBjcmVhdGVBdHRyaWJ1dGVOUzogZnVuY3Rpb24gY3JlYXRlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKSB7XG4gICAgdmFyIG5vZGUgPSBuZXcgQXR0cigpO1xuICAgIHZhciBwbCA9IHF1YWxpZmllZE5hbWUuc3BsaXQoJzonKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUubm9kZU5hbWUgPSBxdWFsaWZpZWROYW1lO1xuICAgIG5vZGUubmFtZSA9IHF1YWxpZmllZE5hbWU7XG4gICAgbm9kZS5uYW1lc3BhY2VVUkkgPSBuYW1lc3BhY2VVUkk7XG4gICAgbm9kZS5zcGVjaWZpZWQgPSB0cnVlO1xuICAgIGlmIChwbC5sZW5ndGggPT0gMikge1xuICAgICAgbm9kZS5wcmVmaXggPSBwbFswXTtcbiAgICAgIG5vZGUubG9jYWxOYW1lID0gcGxbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUubG9jYWxOYW1lID0gcXVhbGlmaWVkTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn07XG5fZXh0ZW5kcyhEb2N1bWVudCwgTm9kZSk7XG5mdW5jdGlvbiBFbGVtZW50KCkge1xuICB0aGlzLl9uc01hcCA9IHt9O1xufVxuO1xuRWxlbWVudC5wcm90b3R5cGUgPSB7XG4gIG5vZGVUeXBlOiBFTEVNRU5UX05PREUsXG4gIGhhc0F0dHJpYnV0ZTogZnVuY3Rpb24gaGFzQXR0cmlidXRlKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpICE9IG51bGw7XG4gIH0sXG4gIGdldEF0dHJpYnV0ZTogZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgICB2YXIgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZShuYW1lKTtcbiAgICByZXR1cm4gYXR0ciAmJiBhdHRyLnZhbHVlIHx8ICcnO1xuICB9LFxuICBnZXRBdHRyaWJ1dGVOb2RlOiBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVOb2RlKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShuYW1lKTtcbiAgfSxcbiAgc2V0QXR0cmlidXRlOiBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgYXR0ciA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUobmFtZSk7XG4gICAgYXR0ci52YWx1ZSA9IGF0dHIubm9kZVZhbHVlID0gXCJcIiArIHZhbHVlO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlTm9kZShhdHRyKTtcbiAgfSxcbiAgcmVtb3ZlQXR0cmlidXRlOiBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobmFtZSkge1xuICAgIHZhciBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpO1xuICAgIGF0dHIgJiYgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOb2RlKGF0dHIpO1xuICB9LFxuICBhcHBlbmRDaGlsZDogZnVuY3Rpb24gYXBwZW5kQ2hpbGQobmV3Q2hpbGQpIHtcbiAgICBpZiAobmV3Q2hpbGQubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShuZXdDaGlsZCwgbnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfYXBwZW5kU2luZ2xlQ2hpbGQodGhpcywgbmV3Q2hpbGQpO1xuICAgIH1cbiAgfSxcbiAgc2V0QXR0cmlidXRlTm9kZTogZnVuY3Rpb24gc2V0QXR0cmlidXRlTm9kZShuZXdBdHRyKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcy5zZXROYW1lZEl0ZW0obmV3QXR0cik7XG4gIH0sXG4gIHNldEF0dHJpYnV0ZU5vZGVOUzogZnVuY3Rpb24gc2V0QXR0cmlidXRlTm9kZU5TKG5ld0F0dHIpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnNldE5hbWVkSXRlbU5TKG5ld0F0dHIpO1xuICB9LFxuICByZW1vdmVBdHRyaWJ1dGVOb2RlOiBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGVOb2RlKG9sZEF0dHIpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnJlbW92ZU5hbWVkSXRlbShvbGRBdHRyLm5vZGVOYW1lKTtcbiAgfSxcbiAgcmVtb3ZlQXR0cmlidXRlTlM6IGZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgdmFyIG9sZCA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKTtcbiAgICBvbGQgJiYgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOb2RlKG9sZCk7XG4gIH0sXG4gIGhhc0F0dHJpYnV0ZU5TOiBmdW5jdGlvbiBoYXNBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkgIT0gbnVsbDtcbiAgfSxcbiAgZ2V0QXR0cmlidXRlTlM6IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgdmFyIGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSk7XG4gICAgcmV0dXJuIGF0dHIgJiYgYXR0ci52YWx1ZSB8fCAnJztcbiAgfSxcbiAgc2V0QXR0cmlidXRlTlM6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgYXR0ciA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUpO1xuICAgIGF0dHIudmFsdWUgPSBhdHRyLm5vZGVWYWx1ZSA9IFwiXCIgKyB2YWx1ZTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5vZGUoYXR0cik7XG4gIH0sXG4gIGdldEF0dHJpYnV0ZU5vZGVOUzogZnVuY3Rpb24gZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW1OUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSk7XG4gIH0sXG4gIGdldEVsZW1lbnRzQnlUYWdOYW1lOiBmdW5jdGlvbiBnZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBMaXZlTm9kZUxpc3QodGhpcywgZnVuY3Rpb24gKGJhc2UpIHtcbiAgICAgIHZhciBscyA9IFtdO1xuICAgICAgX3Zpc2l0Tm9kZShiYXNlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZSAhPT0gYmFzZSAmJiBub2RlLm5vZGVUeXBlID09IEVMRU1FTlRfTk9ERSAmJiAodGFnTmFtZSA9PT0gJyonIHx8IG5vZGUudGFnTmFtZSA9PSB0YWdOYW1lKSkge1xuICAgICAgICAgIGxzLnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGxzO1xuICAgIH0pO1xuICB9LFxuICBnZXRFbGVtZW50c0J5VGFnTmFtZU5TOiBmdW5jdGlvbiBnZXRFbGVtZW50c0J5VGFnTmFtZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBMaXZlTm9kZUxpc3QodGhpcywgZnVuY3Rpb24gKGJhc2UpIHtcbiAgICAgIHZhciBscyA9IFtdO1xuICAgICAgX3Zpc2l0Tm9kZShiYXNlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZSAhPT0gYmFzZSAmJiBub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUgJiYgKG5hbWVzcGFjZVVSSSA9PT0gJyonIHx8IG5vZGUubmFtZXNwYWNlVVJJID09PSBuYW1lc3BhY2VVUkkpICYmIChsb2NhbE5hbWUgPT09ICcqJyB8fCBub2RlLmxvY2FsTmFtZSA9PSBsb2NhbE5hbWUpKSB7XG4gICAgICAgICAgbHMucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbHM7XG4gICAgfSk7XG4gIH1cbn07XG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBFbGVtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZTtcbkRvY3VtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZU5TID0gRWxlbWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWVOUztcbl9leHRlbmRzKEVsZW1lbnQsIE5vZGUpO1xuZnVuY3Rpb24gQXR0cigpIHt9XG47XG5BdHRyLnByb3RvdHlwZS5ub2RlVHlwZSA9IEFUVFJJQlVURV9OT0RFO1xuX2V4dGVuZHMoQXR0ciwgTm9kZSk7XG5mdW5jdGlvbiBDaGFyYWN0ZXJEYXRhKCkge31cbjtcbkNoYXJhY3RlckRhdGEucHJvdG90eXBlID0ge1xuICBkYXRhOiAnJyxcbiAgc3Vic3RyaW5nRGF0YTogZnVuY3Rpb24gc3Vic3RyaW5nRGF0YShvZmZzZXQsIGNvdW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zdWJzdHJpbmcob2Zmc2V0LCBvZmZzZXQgKyBjb3VudCk7XG4gIH0sXG4gIGFwcGVuZERhdGE6IGZ1bmN0aW9uIGFwcGVuZERhdGEodGV4dCkge1xuICAgIHRleHQgPSB0aGlzLmRhdGEgKyB0ZXh0O1xuICAgIHRoaXMubm9kZVZhbHVlID0gdGhpcy5kYXRhID0gdGV4dDtcbiAgICB0aGlzLmxlbmd0aCA9IHRleHQubGVuZ3RoO1xuICB9LFxuICBpbnNlcnREYXRhOiBmdW5jdGlvbiBpbnNlcnREYXRhKG9mZnNldCwgdGV4dCkge1xuICAgIHRoaXMucmVwbGFjZURhdGEob2Zmc2V0LCAwLCB0ZXh0KTtcbiAgfSxcbiAgYXBwZW5kQ2hpbGQ6IGZ1bmN0aW9uIGFwcGVuZENoaWxkKG5ld0NoaWxkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKEV4Y2VwdGlvbk1lc3NhZ2VbSElFUkFSQ0hZX1JFUVVFU1RfRVJSXSk7XG4gIH0sXG4gIGRlbGV0ZURhdGE6IGZ1bmN0aW9uIGRlbGV0ZURhdGEob2Zmc2V0LCBjb3VudCkge1xuICAgIHRoaXMucmVwbGFjZURhdGEob2Zmc2V0LCBjb3VudCwgXCJcIik7XG4gIH0sXG4gIHJlcGxhY2VEYXRhOiBmdW5jdGlvbiByZXBsYWNlRGF0YShvZmZzZXQsIGNvdW50LCB0ZXh0KSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5kYXRhLnN1YnN0cmluZygwLCBvZmZzZXQpO1xuICAgIHZhciBlbmQgPSB0aGlzLmRhdGEuc3Vic3RyaW5nKG9mZnNldCArIGNvdW50KTtcbiAgICB0ZXh0ID0gc3RhcnQgKyB0ZXh0ICsgZW5kO1xuICAgIHRoaXMubm9kZVZhbHVlID0gdGhpcy5kYXRhID0gdGV4dDtcbiAgICB0aGlzLmxlbmd0aCA9IHRleHQubGVuZ3RoO1xuICB9XG59O1xuX2V4dGVuZHMoQ2hhcmFjdGVyRGF0YSwgTm9kZSk7XG5mdW5jdGlvbiBUZXh0KCkge31cbjtcblRleHQucHJvdG90eXBlID0ge1xuICBub2RlTmFtZTogXCIjdGV4dFwiLFxuICBub2RlVHlwZTogVEVYVF9OT0RFLFxuICBzcGxpdFRleHQ6IGZ1bmN0aW9uIHNwbGl0VGV4dChvZmZzZXQpIHtcbiAgICB2YXIgdGV4dCA9IHRoaXMuZGF0YTtcbiAgICB2YXIgbmV3VGV4dCA9IHRleHQuc3Vic3RyaW5nKG9mZnNldCk7XG4gICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIG9mZnNldCk7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5ub2RlVmFsdWUgPSB0ZXh0O1xuICAgIHRoaXMubGVuZ3RoID0gdGV4dC5sZW5ndGg7XG4gICAgdmFyIG5ld05vZGUgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3VGV4dCk7XG4gICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCB0aGlzLm5leHRTaWJsaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld05vZGU7XG4gIH1cbn07XG5fZXh0ZW5kcyhUZXh0LCBDaGFyYWN0ZXJEYXRhKTtcbmZ1bmN0aW9uIENvbW1lbnQoKSB7fVxuO1xuQ29tbWVudC5wcm90b3R5cGUgPSB7XG4gIG5vZGVOYW1lOiBcIiNjb21tZW50XCIsXG4gIG5vZGVUeXBlOiBDT01NRU5UX05PREVcbn07XG5fZXh0ZW5kcyhDb21tZW50LCBDaGFyYWN0ZXJEYXRhKTtcbmZ1bmN0aW9uIENEQVRBU2VjdGlvbigpIHt9XG47XG5DREFUQVNlY3Rpb24ucHJvdG90eXBlID0ge1xuICBub2RlTmFtZTogXCIjY2RhdGEtc2VjdGlvblwiLFxuICBub2RlVHlwZTogQ0RBVEFfU0VDVElPTl9OT0RFXG59O1xuX2V4dGVuZHMoQ0RBVEFTZWN0aW9uLCBDaGFyYWN0ZXJEYXRhKTtcbmZ1bmN0aW9uIERvY3VtZW50VHlwZSgpIHt9XG47XG5Eb2N1bWVudFR5cGUucHJvdG90eXBlLm5vZGVUeXBlID0gRE9DVU1FTlRfVFlQRV9OT0RFO1xuX2V4dGVuZHMoRG9jdW1lbnRUeXBlLCBOb2RlKTtcbmZ1bmN0aW9uIE5vdGF0aW9uKCkge31cbjtcbk5vdGF0aW9uLnByb3RvdHlwZS5ub2RlVHlwZSA9IE5PVEFUSU9OX05PREU7XG5fZXh0ZW5kcyhOb3RhdGlvbiwgTm9kZSk7XG5mdW5jdGlvbiBFbnRpdHkoKSB7fVxuO1xuRW50aXR5LnByb3RvdHlwZS5ub2RlVHlwZSA9IEVOVElUWV9OT0RFO1xuX2V4dGVuZHMoRW50aXR5LCBOb2RlKTtcbmZ1bmN0aW9uIEVudGl0eVJlZmVyZW5jZSgpIHt9XG47XG5FbnRpdHlSZWZlcmVuY2UucHJvdG90eXBlLm5vZGVUeXBlID0gRU5USVRZX1JFRkVSRU5DRV9OT0RFO1xuX2V4dGVuZHMoRW50aXR5UmVmZXJlbmNlLCBOb2RlKTtcbmZ1bmN0aW9uIERvY3VtZW50RnJhZ21lbnQoKSB7fVxuO1xuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUubm9kZU5hbWUgPSBcIiNkb2N1bWVudC1mcmFnbWVudFwiO1xuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUubm9kZVR5cGUgPSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFO1xuX2V4dGVuZHMoRG9jdW1lbnRGcmFnbWVudCwgTm9kZSk7XG5mdW5jdGlvbiBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oKSB7fVxuUHJvY2Vzc2luZ0luc3RydWN0aW9uLnByb3RvdHlwZS5ub2RlVHlwZSA9IFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERTtcbl9leHRlbmRzKFByb2Nlc3NpbmdJbnN0cnVjdGlvbiwgTm9kZSk7XG5mdW5jdGlvbiBYTUxTZXJpYWxpemVyKCkge31cblhNTFNlcmlhbGl6ZXIucHJvdG90eXBlLnNlcmlhbGl6ZVRvU3RyaW5nID0gZnVuY3Rpb24gKG5vZGUsIGlzSHRtbCwgbm9kZUZpbHRlcikge1xuICByZXR1cm4gbm9kZVNlcmlhbGl6ZVRvU3RyaW5nLmNhbGwobm9kZSwgaXNIdG1sLCBub2RlRmlsdGVyKTtcbn07XG5Ob2RlLnByb3RvdHlwZS50b1N0cmluZyA9IG5vZGVTZXJpYWxpemVUb1N0cmluZztcbmZ1bmN0aW9uIG5vZGVTZXJpYWxpemVUb1N0cmluZyhpc0h0bWwsIG5vZGVGaWx0ZXIpIHtcbiAgdmFyIGJ1ZiA9IFtdO1xuICB2YXIgcmVmTm9kZSA9IHRoaXMubm9kZVR5cGUgPT0gOSAmJiB0aGlzLmRvY3VtZW50RWxlbWVudCB8fCB0aGlzO1xuICB2YXIgcHJlZml4ID0gcmVmTm9kZS5wcmVmaXg7XG4gIHZhciB1cmkgPSByZWZOb2RlLm5hbWVzcGFjZVVSSTtcbiAgaWYgKHVyaSAmJiBwcmVmaXggPT0gbnVsbCkge1xuICAgIHZhciBwcmVmaXggPSByZWZOb2RlLmxvb2t1cFByZWZpeCh1cmkpO1xuICAgIGlmIChwcmVmaXggPT0gbnVsbCkge1xuICAgICAgdmFyIHZpc2libGVOYW1lc3BhY2VzID0gW3tcbiAgICAgICAgbmFtZXNwYWNlOiB1cmksXG4gICAgICAgIHByZWZpeDogbnVsbFxuICAgICAgfV07XG4gICAgfVxuICB9XG4gIHNlcmlhbGl6ZVRvU3RyaW5nKHRoaXMsIGJ1ZiwgaXNIdG1sLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcyk7XG4gIHJldHVybiBidWYuam9pbignJyk7XG59XG5mdW5jdGlvbiBuZWVkTmFtZXNwYWNlRGVmaW5lKG5vZGUsIGlzSFRNTCwgdmlzaWJsZU5hbWVzcGFjZXMpIHtcbiAgdmFyIHByZWZpeCA9IG5vZGUucHJlZml4IHx8ICcnO1xuICB2YXIgdXJpID0gbm9kZS5uYW1lc3BhY2VVUkk7XG4gIGlmICghcHJlZml4ICYmICF1cmkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHByZWZpeCA9PT0gXCJ4bWxcIiAmJiB1cmkgPT09IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIgfHwgdXJpID09ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGkgPSB2aXNpYmxlTmFtZXNwYWNlcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgbnMgPSB2aXNpYmxlTmFtZXNwYWNlc1tpXTtcbiAgICBpZiAobnMucHJlZml4ID09IHByZWZpeCkge1xuICAgICAgcmV0dXJuIG5zLm5hbWVzcGFjZSAhPSB1cmk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gc2VyaWFsaXplVG9TdHJpbmcobm9kZSwgYnVmLCBpc0hUTUwsIG5vZGVGaWx0ZXIsIHZpc2libGVOYW1lc3BhY2VzKSB7XG4gIGlmIChub2RlRmlsdGVyKSB7XG4gICAgbm9kZSA9IG5vZGVGaWx0ZXIobm9kZSk7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PSAnc3RyaW5nJykge1xuICAgICAgICBidWYucHVzaChub2RlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuICAgIGNhc2UgRUxFTUVOVF9OT0RFOlxuICAgICAgaWYgKCF2aXNpYmxlTmFtZXNwYWNlcykgdmlzaWJsZU5hbWVzcGFjZXMgPSBbXTtcbiAgICAgIHZhciBzdGFydFZpc2libGVOYW1lc3BhY2VzID0gdmlzaWJsZU5hbWVzcGFjZXMubGVuZ3RoO1xuICAgICAgdmFyIGF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzO1xuICAgICAgdmFyIGxlbiA9IGF0dHJzLmxlbmd0aDtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgIHZhciBub2RlTmFtZSA9IG5vZGUudGFnTmFtZTtcbiAgICAgIGlzSFRNTCA9IGh0bWxucyA9PT0gbm9kZS5uYW1lc3BhY2VVUkkgfHwgaXNIVE1MO1xuICAgICAgYnVmLnB1c2goJzwnLCBub2RlTmFtZSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBhdHRyID0gYXR0cnMuaXRlbShpKTtcbiAgICAgICAgaWYgKGF0dHIucHJlZml4ID09ICd4bWxucycpIHtcbiAgICAgICAgICB2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHtcbiAgICAgICAgICAgIHByZWZpeDogYXR0ci5sb2NhbE5hbWUsXG4gICAgICAgICAgICBuYW1lc3BhY2U6IGF0dHIudmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5vZGVOYW1lID09ICd4bWxucycpIHtcbiAgICAgICAgICB2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHtcbiAgICAgICAgICAgIHByZWZpeDogJycsXG4gICAgICAgICAgICBuYW1lc3BhY2U6IGF0dHIudmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgYXR0ciA9IGF0dHJzLml0ZW0oaSk7XG4gICAgICAgIGlmIChuZWVkTmFtZXNwYWNlRGVmaW5lKGF0dHIsIGlzSFRNTCwgdmlzaWJsZU5hbWVzcGFjZXMpKSB7XG4gICAgICAgICAgdmFyIHByZWZpeCA9IGF0dHIucHJlZml4IHx8ICcnO1xuICAgICAgICAgIHZhciB1cmkgPSBhdHRyLm5hbWVzcGFjZVVSSTtcbiAgICAgICAgICB2YXIgbnMgPSBwcmVmaXggPyAnIHhtbG5zOicgKyBwcmVmaXggOiBcIiB4bWxuc1wiO1xuICAgICAgICAgIGJ1Zi5wdXNoKG5zLCAnPVwiJywgdXJpLCAnXCInKTtcbiAgICAgICAgICB2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHtcbiAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgbmFtZXNwYWNlOiB1cmlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzZXJpYWxpemVUb1N0cmluZyhhdHRyLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWROYW1lc3BhY2VEZWZpbmUobm9kZSwgaXNIVE1MLCB2aXNpYmxlTmFtZXNwYWNlcykpIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IG5vZGUucHJlZml4IHx8ICcnO1xuICAgICAgICB2YXIgdXJpID0gbm9kZS5uYW1lc3BhY2VVUkk7XG4gICAgICAgIHZhciBucyA9IHByZWZpeCA/ICcgeG1sbnM6JyArIHByZWZpeCA6IFwiIHhtbG5zXCI7XG4gICAgICAgIGJ1Zi5wdXNoKG5zLCAnPVwiJywgdXJpLCAnXCInKTtcbiAgICAgICAgdmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7XG4gICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgbmFtZXNwYWNlOiB1cmlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hpbGQgfHwgaXNIVE1MICYmICEvXig/Om1ldGF8bGlua3xpbWd8YnJ8aHJ8aW5wdXQpJC9pLnRlc3Qobm9kZU5hbWUpKSB7XG4gICAgICAgIGJ1Zi5wdXNoKCc+Jyk7XG4gICAgICAgIGlmIChpc0hUTUwgJiYgL15zY3JpcHQkL2kudGVzdChub2RlTmFtZSkpIHtcbiAgICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5kYXRhKSB7XG4gICAgICAgICAgICAgIGJ1Zi5wdXNoKGNoaWxkLmRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VyaWFsaXplVG9TdHJpbmcoY2hpbGQsIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgIHNlcmlhbGl6ZVRvU3RyaW5nKGNoaWxkLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMpO1xuICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnVmLnB1c2goJzwvJywgbm9kZU5hbWUsICc+Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidWYucHVzaCgnLz4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICBjYXNlIERPQ1VNRU5UX05PREU6XG4gICAgY2FzZSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlxuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIHNlcmlhbGl6ZVRvU3RyaW5nKGNoaWxkLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgQVRUUklCVVRFX05PREU6XG4gICAgICByZXR1cm4gYnVmLnB1c2goJyAnLCBub2RlLm5hbWUsICc9XCInLCBub2RlLnZhbHVlLnJlcGxhY2UoL1s8JlwiXS9nLCBfeG1sRW5jb2RlciksICdcIicpO1xuICAgIGNhc2UgVEVYVF9OT0RFOlxuICAgICAgcmV0dXJuIGJ1Zi5wdXNoKG5vZGUuZGF0YS5yZXBsYWNlKC9bPCZdL2csIF94bWxFbmNvZGVyKSk7XG4gICAgY2FzZSBDREFUQV9TRUNUSU9OX05PREU6XG4gICAgICByZXR1cm4gYnVmLnB1c2goJzwhW0NEQVRBWycsIG5vZGUuZGF0YSwgJ11dPicpO1xuICAgIGNhc2UgQ09NTUVOVF9OT0RFOlxuICAgICAgcmV0dXJuIGJ1Zi5wdXNoKFwiPCEtLVwiLCBub2RlLmRhdGEsIFwiLS0+XCIpO1xuICAgIGNhc2UgRE9DVU1FTlRfVFlQRV9OT0RFOlxuICAgICAgdmFyIHB1YmlkID0gbm9kZS5wdWJsaWNJZDtcbiAgICAgIHZhciBzeXNpZCA9IG5vZGUuc3lzdGVtSWQ7XG4gICAgICBidWYucHVzaCgnPCFET0NUWVBFICcsIG5vZGUubmFtZSk7XG4gICAgICBpZiAocHViaWQpIHtcbiAgICAgICAgYnVmLnB1c2goJyBQVUJMSUMgXCInLCBwdWJpZCk7XG4gICAgICAgIGlmIChzeXNpZCAmJiBzeXNpZCAhPSAnLicpIHtcbiAgICAgICAgICBidWYucHVzaCgnXCIgXCInLCBzeXNpZCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVmLnB1c2goJ1wiPicpO1xuICAgICAgfSBlbHNlIGlmIChzeXNpZCAmJiBzeXNpZCAhPSAnLicpIHtcbiAgICAgICAgYnVmLnB1c2goJyBTWVNURU0gXCInLCBzeXNpZCwgJ1wiPicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHN1YiA9IG5vZGUuaW50ZXJuYWxTdWJzZXQ7XG4gICAgICAgIGlmIChzdWIpIHtcbiAgICAgICAgICBidWYucHVzaChcIiBbXCIsIHN1YiwgXCJdXCIpO1xuICAgICAgICB9XG4gICAgICAgIGJ1Zi5wdXNoKFwiPlwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERTpcbiAgICAgIHJldHVybiBidWYucHVzaChcIjw/XCIsIG5vZGUudGFyZ2V0LCBcIiBcIiwgbm9kZS5kYXRhLCBcIj8+XCIpO1xuICAgIGNhc2UgRU5USVRZX1JFRkVSRU5DRV9OT0RFOlxuICAgICAgcmV0dXJuIGJ1Zi5wdXNoKCcmJywgbm9kZS5ub2RlTmFtZSwgJzsnKTtcbiAgICBkZWZhdWx0OlxuICAgICAgYnVmLnB1c2goJz8/Jywgbm9kZS5ub2RlTmFtZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIF9pbXBvcnROb2RlKGRvYywgbm9kZSwgZGVlcCkge1xuICB2YXIgbm9kZTI7XG4gIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuICAgIGNhc2UgRUxFTUVOVF9OT0RFOlxuICAgICAgbm9kZTIgPSBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICBub2RlMi5vd25lckRvY3VtZW50ID0gZG9jO1xuICAgIGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQVRUUklCVVRFX05PREU6XG4gICAgICBkZWVwID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGlmICghbm9kZTIpIHtcbiAgICBub2RlMiA9IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiAgfVxuICBub2RlMi5vd25lckRvY3VtZW50ID0gZG9jO1xuICBub2RlMi5wYXJlbnROb2RlID0gbnVsbDtcbiAgaWYgKGRlZXApIHtcbiAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBub2RlMi5hcHBlbmRDaGlsZChfaW1wb3J0Tm9kZShkb2MsIGNoaWxkLCBkZWVwKSk7XG4gICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbm9kZTI7XG59XG5mdW5jdGlvbiBfY2xvbmVOb2RlKGRvYywgbm9kZSwgZGVlcCkge1xuICB2YXIgbm9kZTIgPSBuZXcgbm9kZS5jb25zdHJ1Y3RvcigpO1xuICBmb3IgKHZhciBuIGluIG5vZGUpIHtcbiAgICB2YXIgdiA9IG5vZGVbbl07XG4gICAgaWYgKF90eXBlb2YodikgIT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh2ICE9IG5vZGUyW25dKSB7XG4gICAgICAgIG5vZGUyW25dID0gdjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKG5vZGUuY2hpbGROb2Rlcykge1xuICAgIG5vZGUyLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcbiAgfVxuICBub2RlMi5vd25lckRvY3VtZW50ID0gZG9jO1xuICBzd2l0Y2ggKG5vZGUyLm5vZGVUeXBlKSB7XG4gICAgY2FzZSBFTEVNRU5UX05PREU6XG4gICAgICB2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXM7XG4gICAgICB2YXIgYXR0cnMyID0gbm9kZTIuYXR0cmlidXRlcyA9IG5ldyBOYW1lZE5vZGVNYXAoKTtcbiAgICAgIHZhciBsZW4gPSBhdHRycy5sZW5ndGg7XG4gICAgICBhdHRyczIuX293bmVyRWxlbWVudCA9IG5vZGUyO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBub2RlMi5zZXRBdHRyaWJ1dGVOb2RlKF9jbG9uZU5vZGUoZG9jLCBhdHRycy5pdGVtKGkpLCB0cnVlKSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICAgIDtcbiAgICBjYXNlIEFUVFJJQlVURV9OT0RFOlxuICAgICAgZGVlcCA9IHRydWU7XG4gIH1cbiAgaWYgKGRlZXApIHtcbiAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBub2RlMi5hcHBlbmRDaGlsZChfY2xvbmVOb2RlKGRvYywgY2hpbGQsIGRlZXApKTtcbiAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiBub2RlMjtcbn1cbmZ1bmN0aW9uIF9fc2V0X18ob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG59XG50cnkge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gICAgdmFyIGdldFRleHRDb250ZW50ID0gZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQobm9kZSkge1xuICAgICAgc3dpdGNoIChub2RlLm5vZGVUeXBlKSB7XG4gICAgICAgIGNhc2UgRUxFTUVOVF9OT0RFOlxuICAgICAgICBjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG4gICAgICAgICAgdmFyIGJ1ZiA9IFtdO1xuICAgICAgICAgIG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSA3ICYmIG5vZGUubm9kZVR5cGUgIT09IDgpIHtcbiAgICAgICAgICAgICAgYnVmLnB1c2goZ2V0VGV4dENvbnRlbnQobm9kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBidWYuam9pbignJyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG5vZGUubm9kZVZhbHVlO1xuICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExpdmVOb2RlTGlzdC5wcm90b3R5cGUsICdsZW5ndGgnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgX3VwZGF0ZUxpdmVMaXN0KHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcy4kJGxlbmd0aDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsICd0ZXh0Q29udGVudCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gZ2V0VGV4dENvbnRlbnQodGhpcyk7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoZGF0YSkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMubm9kZVR5cGUpIHtcbiAgICAgICAgICBjYXNlIEVMRU1FTlRfTk9ERTpcbiAgICAgICAgICBjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhIHx8IFN0cmluZyhkYXRhKSkge1xuICAgICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSBkYXRhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgX19zZXRfXyA9IGZ1bmN0aW9uIF9fc2V0X18ob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gICAgICBvYmplY3RbJyQkJyArIGtleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG59IGNhdGNoIChlKSB7fVxuZXhwb3J0cy5ET01JbXBsZW1lbnRhdGlvbiA9IERPTUltcGxlbWVudGF0aW9uO1xuZXhwb3J0cy5YTUxTZXJpYWxpemVyID0gWE1MU2VyaWFsaXplcjtcblxufSx7fV0sNjA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuZW50aXR5TWFwID0ge1xuICBsdDogJzwnLFxuICBndDogJz4nLFxuICBhbXA6ICcmJyxcbiAgcXVvdDogJ1wiJyxcbiAgYXBvczogXCInXCIsXG4gIEFncmF2ZTogXCLDgFwiLFxuICBBYWN1dGU6IFwiw4FcIixcbiAgQWNpcmM6IFwiw4JcIixcbiAgQXRpbGRlOiBcIsODXCIsXG4gIEF1bWw6IFwiw4RcIixcbiAgQXJpbmc6IFwiw4VcIixcbiAgQUVsaWc6IFwiw4ZcIixcbiAgQ2NlZGlsOiBcIsOHXCIsXG4gIEVncmF2ZTogXCLDiFwiLFxuICBFYWN1dGU6IFwiw4lcIixcbiAgRWNpcmM6IFwiw4pcIixcbiAgRXVtbDogXCLDi1wiLFxuICBJZ3JhdmU6IFwiw4xcIixcbiAgSWFjdXRlOiBcIsONXCIsXG4gIEljaXJjOiBcIsOOXCIsXG4gIEl1bWw6IFwiw49cIixcbiAgRVRIOiBcIsOQXCIsXG4gIE50aWxkZTogXCLDkVwiLFxuICBPZ3JhdmU6IFwiw5JcIixcbiAgT2FjdXRlOiBcIsOTXCIsXG4gIE9jaXJjOiBcIsOUXCIsXG4gIE90aWxkZTogXCLDlVwiLFxuICBPdW1sOiBcIsOWXCIsXG4gIE9zbGFzaDogXCLDmFwiLFxuICBVZ3JhdmU6IFwiw5lcIixcbiAgVWFjdXRlOiBcIsOaXCIsXG4gIFVjaXJjOiBcIsObXCIsXG4gIFV1bWw6IFwiw5xcIixcbiAgWWFjdXRlOiBcIsOdXCIsXG4gIFRIT1JOOiBcIsOeXCIsXG4gIHN6bGlnOiBcIsOfXCIsXG4gIGFncmF2ZTogXCLDoFwiLFxuICBhYWN1dGU6IFwiw6FcIixcbiAgYWNpcmM6IFwiw6JcIixcbiAgYXRpbGRlOiBcIsOjXCIsXG4gIGF1bWw6IFwiw6RcIixcbiAgYXJpbmc6IFwiw6VcIixcbiAgYWVsaWc6IFwiw6ZcIixcbiAgY2NlZGlsOiBcIsOnXCIsXG4gIGVncmF2ZTogXCLDqFwiLFxuICBlYWN1dGU6IFwiw6lcIixcbiAgZWNpcmM6IFwiw6pcIixcbiAgZXVtbDogXCLDq1wiLFxuICBpZ3JhdmU6IFwiw6xcIixcbiAgaWFjdXRlOiBcIsOtXCIsXG4gIGljaXJjOiBcIsOuXCIsXG4gIGl1bWw6IFwiw69cIixcbiAgZXRoOiBcIsOwXCIsXG4gIG50aWxkZTogXCLDsVwiLFxuICBvZ3JhdmU6IFwiw7JcIixcbiAgb2FjdXRlOiBcIsOzXCIsXG4gIG9jaXJjOiBcIsO0XCIsXG4gIG90aWxkZTogXCLDtVwiLFxuICBvdW1sOiBcIsO2XCIsXG4gIG9zbGFzaDogXCLDuFwiLFxuICB1Z3JhdmU6IFwiw7lcIixcbiAgdWFjdXRlOiBcIsO6XCIsXG4gIHVjaXJjOiBcIsO7XCIsXG4gIHV1bWw6IFwiw7xcIixcbiAgeWFjdXRlOiBcIsO9XCIsXG4gIHRob3JuOiBcIsO+XCIsXG4gIHl1bWw6IFwiw79cIixcbiAgbmJzcDogXCIgXCIsXG4gIGlleGNsOiBcIsKhXCIsXG4gIGNlbnQ6IFwiwqJcIixcbiAgcG91bmQ6IFwiwqNcIixcbiAgY3VycmVuOiBcIsKkXCIsXG4gIHllbjogXCLCpVwiLFxuICBicnZiYXI6IFwiwqZcIixcbiAgc2VjdDogXCLCp1wiLFxuICB1bWw6IFwiwqhcIixcbiAgY29weTogXCLCqVwiLFxuICBvcmRmOiBcIsKqXCIsXG4gIGxhcXVvOiBcIsKrXCIsXG4gIG5vdDogXCLCrFwiLFxuICBzaHk6IFwiwq3CrVwiLFxuICByZWc6IFwiwq5cIixcbiAgbWFjcjogXCLCr1wiLFxuICBkZWc6IFwiwrBcIixcbiAgcGx1c21uOiBcIsKxXCIsXG4gIHN1cDI6IFwiwrJcIixcbiAgc3VwMzogXCLCs1wiLFxuICBhY3V0ZTogXCLCtFwiLFxuICBtaWNybzogXCLCtVwiLFxuICBwYXJhOiBcIsK2XCIsXG4gIG1pZGRvdDogXCLCt1wiLFxuICBjZWRpbDogXCLCuFwiLFxuICBzdXAxOiBcIsK5XCIsXG4gIG9yZG06IFwiwrpcIixcbiAgcmFxdW86IFwiwrtcIixcbiAgZnJhYzE0OiBcIsK8XCIsXG4gIGZyYWMxMjogXCLCvVwiLFxuICBmcmFjMzQ6IFwiwr5cIixcbiAgaXF1ZXN0OiBcIsK/XCIsXG4gIHRpbWVzOiBcIsOXXCIsXG4gIGRpdmlkZTogXCLDt1wiLFxuICBmb3JhbGw6IFwi4oiAXCIsXG4gIHBhcnQ6IFwi4oiCXCIsXG4gIGV4aXN0OiBcIuKIg1wiLFxuICBlbXB0eTogXCLiiIVcIixcbiAgbmFibGE6IFwi4oiHXCIsXG4gIGlzaW46IFwi4oiIXCIsXG4gIG5vdGluOiBcIuKIiVwiLFxuICBuaTogXCLiiItcIixcbiAgcHJvZDogXCLiiI9cIixcbiAgc3VtOiBcIuKIkVwiLFxuICBtaW51czogXCLiiJJcIixcbiAgbG93YXN0OiBcIuKIl1wiLFxuICByYWRpYzogXCLiiJpcIixcbiAgcHJvcDogXCLiiJ1cIixcbiAgaW5maW46IFwi4oieXCIsXG4gIGFuZzogXCLiiKBcIixcbiAgYW5kOiBcIuKIp1wiLFxuICBvcjogXCLiiKhcIixcbiAgY2FwOiBcIuKIqVwiLFxuICBjdXA6IFwi4oiqXCIsXG4gICdpbnQnOiBcIuKIq1wiLFxuICB0aGVyZTQ6IFwi4oi0XCIsXG4gIHNpbTogXCLiiLxcIixcbiAgY29uZzogXCLiiYVcIixcbiAgYXN5bXA6IFwi4omIXCIsXG4gIG5lOiBcIuKJoFwiLFxuICBlcXVpdjogXCLiiaFcIixcbiAgbGU6IFwi4omkXCIsXG4gIGdlOiBcIuKJpVwiLFxuICBzdWI6IFwi4oqCXCIsXG4gIHN1cDogXCLiioNcIixcbiAgbnN1YjogXCLiioRcIixcbiAgc3ViZTogXCLiioZcIixcbiAgc3VwZTogXCLiiodcIixcbiAgb3BsdXM6IFwi4oqVXCIsXG4gIG90aW1lczogXCLiipdcIixcbiAgcGVycDogXCLiiqVcIixcbiAgc2RvdDogXCLii4VcIixcbiAgQWxwaGE6IFwizpFcIixcbiAgQmV0YTogXCLOklwiLFxuICBHYW1tYTogXCLOk1wiLFxuICBEZWx0YTogXCLOlFwiLFxuICBFcHNpbG9uOiBcIs6VXCIsXG4gIFpldGE6IFwizpZcIixcbiAgRXRhOiBcIs6XXCIsXG4gIFRoZXRhOiBcIs6YXCIsXG4gIElvdGE6IFwizplcIixcbiAgS2FwcGE6IFwizppcIixcbiAgTGFtYmRhOiBcIs6bXCIsXG4gIE11OiBcIs6cXCIsXG4gIE51OiBcIs6dXCIsXG4gIFhpOiBcIs6eXCIsXG4gIE9taWNyb246IFwizp9cIixcbiAgUGk6IFwizqBcIixcbiAgUmhvOiBcIs6hXCIsXG4gIFNpZ21hOiBcIs6jXCIsXG4gIFRhdTogXCLOpFwiLFxuICBVcHNpbG9uOiBcIs6lXCIsXG4gIFBoaTogXCLOplwiLFxuICBDaGk6IFwizqdcIixcbiAgUHNpOiBcIs6oXCIsXG4gIE9tZWdhOiBcIs6pXCIsXG4gIGFscGhhOiBcIs6xXCIsXG4gIGJldGE6IFwizrJcIixcbiAgZ2FtbWE6IFwizrNcIixcbiAgZGVsdGE6IFwizrRcIixcbiAgZXBzaWxvbjogXCLOtVwiLFxuICB6ZXRhOiBcIs62XCIsXG4gIGV0YTogXCLOt1wiLFxuICB0aGV0YTogXCLOuFwiLFxuICBpb3RhOiBcIs65XCIsXG4gIGthcHBhOiBcIs66XCIsXG4gIGxhbWJkYTogXCLOu1wiLFxuICBtdTogXCLOvFwiLFxuICBudTogXCLOvVwiLFxuICB4aTogXCLOvlwiLFxuICBvbWljcm9uOiBcIs6/XCIsXG4gIHBpOiBcIs+AXCIsXG4gIHJobzogXCLPgVwiLFxuICBzaWdtYWY6IFwiz4JcIixcbiAgc2lnbWE6IFwiz4NcIixcbiAgdGF1OiBcIs+EXCIsXG4gIHVwc2lsb246IFwiz4VcIixcbiAgcGhpOiBcIs+GXCIsXG4gIGNoaTogXCLPh1wiLFxuICBwc2k6IFwiz4hcIixcbiAgb21lZ2E6IFwiz4lcIixcbiAgdGhldGFzeW06IFwiz5FcIixcbiAgdXBzaWg6IFwiz5JcIixcbiAgcGl2OiBcIs+WXCIsXG4gIE9FbGlnOiBcIsWSXCIsXG4gIG9lbGlnOiBcIsWTXCIsXG4gIFNjYXJvbjogXCLFoFwiLFxuICBzY2Fyb246IFwixaFcIixcbiAgWXVtbDogXCLFuFwiLFxuICBmbm9mOiBcIsaSXCIsXG4gIGNpcmM6IFwiy4ZcIixcbiAgdGlsZGU6IFwiy5xcIixcbiAgZW5zcDogXCLigIJcIixcbiAgZW1zcDogXCLigINcIixcbiAgdGhpbnNwOiBcIuKAiVwiLFxuICB6d25qOiBcIuKAjFwiLFxuICB6d2o6IFwi4oCNXCIsXG4gIGxybTogXCLigI5cIixcbiAgcmxtOiBcIuKAj1wiLFxuICBuZGFzaDogXCLigJNcIixcbiAgbWRhc2g6IFwi4oCUXCIsXG4gIGxzcXVvOiBcIuKAmFwiLFxuICByc3F1bzogXCLigJlcIixcbiAgc2JxdW86IFwi4oCaXCIsXG4gIGxkcXVvOiBcIuKAnFwiLFxuICByZHF1bzogXCLigJ1cIixcbiAgYmRxdW86IFwi4oCeXCIsXG4gIGRhZ2dlcjogXCLigKBcIixcbiAgRGFnZ2VyOiBcIuKAoVwiLFxuICBidWxsOiBcIuKAolwiLFxuICBoZWxsaXA6IFwi4oCmXCIsXG4gIHBlcm1pbDogXCLigLBcIixcbiAgcHJpbWU6IFwi4oCyXCIsXG4gIFByaW1lOiBcIuKAs1wiLFxuICBsc2FxdW86IFwi4oC5XCIsXG4gIHJzYXF1bzogXCLigLpcIixcbiAgb2xpbmU6IFwi4oC+XCIsXG4gIGV1cm86IFwi4oKsXCIsXG4gIHRyYWRlOiBcIuKEolwiLFxuICBsYXJyOiBcIuKGkFwiLFxuICB1YXJyOiBcIuKGkVwiLFxuICByYXJyOiBcIuKGklwiLFxuICBkYXJyOiBcIuKGk1wiLFxuICBoYXJyOiBcIuKGlFwiLFxuICBjcmFycjogXCLihrVcIixcbiAgbGNlaWw6IFwi4oyIXCIsXG4gIHJjZWlsOiBcIuKMiVwiLFxuICBsZmxvb3I6IFwi4oyKXCIsXG4gIHJmbG9vcjogXCLijItcIixcbiAgbG96OiBcIuKXilwiLFxuICBzcGFkZXM6IFwi4pmgXCIsXG4gIGNsdWJzOiBcIuKZo1wiLFxuICBoZWFydHM6IFwi4pmlXCIsXG4gIGRpYW1zOiBcIuKZplwiXG59O1xuXG59LHt9XSw2MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG5hbWVTdGFydENoYXIgPSAvW0EtWl9hLXpcXHhDMC1cXHhENlxceEQ4LVxceEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXS87XG52YXIgbmFtZUNoYXIgPSBuZXcgUmVnRXhwKFwiW1xcXFwtXFxcXC4wLTlcIiArIG5hbWVTdGFydENoYXIuc291cmNlLnNsaWNlKDEsIC0xKSArIFwiXFxcXHUwMEI3XFxcXHUwMzAwLVxcXFx1MDM2RlxcXFx1MjAzRi1cXFxcdTIwNDBdXCIpO1xudmFyIHRhZ05hbWVQYXR0ZXJuID0gbmV3IFJlZ0V4cCgnXicgKyBuYW1lU3RhcnRDaGFyLnNvdXJjZSArIG5hbWVDaGFyLnNvdXJjZSArICcqKD86XFw6JyArIG5hbWVTdGFydENoYXIuc291cmNlICsgbmFtZUNoYXIuc291cmNlICsgJyopPyQnKTtcbnZhciBTX1RBRyA9IDA7XG52YXIgU19BVFRSID0gMTtcbnZhciBTX0FUVFJfU1BBQ0UgPSAyO1xudmFyIFNfRVEgPSAzO1xudmFyIFNfQVRUUl9OT1FVT1RfVkFMVUUgPSA0O1xudmFyIFNfQVRUUl9FTkQgPSA1O1xudmFyIFNfVEFHX1NQQUNFID0gNjtcbnZhciBTX1RBR19DTE9TRSA9IDc7XG5mdW5jdGlvbiBYTUxSZWFkZXIoKSB7fVxuWE1MUmVhZGVyLnByb3RvdHlwZSA9IHtcbiAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKHNvdXJjZSwgZGVmYXVsdE5TTWFwLCBlbnRpdHlNYXApIHtcbiAgICB2YXIgZG9tQnVpbGRlciA9IHRoaXMuZG9tQnVpbGRlcjtcbiAgICBkb21CdWlsZGVyLnN0YXJ0RG9jdW1lbnQoKTtcbiAgICBfY29weShkZWZhdWx0TlNNYXAsIGRlZmF1bHROU01hcCA9IHt9KTtcbiAgICBfcGFyc2Uoc291cmNlLCBkZWZhdWx0TlNNYXAsIGVudGl0eU1hcCwgZG9tQnVpbGRlciwgdGhpcy5lcnJvckhhbmRsZXIpO1xuICAgIGRvbUJ1aWxkZXIuZW5kRG9jdW1lbnQoKTtcbiAgfVxufTtcbmZ1bmN0aW9uIF9wYXJzZShzb3VyY2UsIGRlZmF1bHROU01hcENvcHksIGVudGl0eU1hcCwgZG9tQnVpbGRlciwgZXJyb3JIYW5kbGVyKSB7XG4gIGZ1bmN0aW9uIGZpeGVkRnJvbUNoYXJDb2RlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA+IDB4ZmZmZikge1xuICAgICAgY29kZSAtPSAweDEwMDAwO1xuICAgICAgdmFyIHN1cnJvZ2F0ZTEgPSAweGQ4MDAgKyAoY29kZSA+PiAxMCksXG4gICAgICAgIHN1cnJvZ2F0ZTIgPSAweGRjMDAgKyAoY29kZSAmIDB4M2ZmKTtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHN1cnJvZ2F0ZTEsIHN1cnJvZ2F0ZTIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZW50aXR5UmVwbGFjZXIoYSkge1xuICAgIHZhciBrID0gYS5zbGljZSgxLCAtMSk7XG4gICAgaWYgKGsgaW4gZW50aXR5TWFwKSB7XG4gICAgICByZXR1cm4gZW50aXR5TWFwW2tdO1xuICAgIH0gZWxzZSBpZiAoay5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgICAgcmV0dXJuIGZpeGVkRnJvbUNoYXJDb2RlKHBhcnNlSW50KGsuc3Vic3RyKDEpLnJlcGxhY2UoJ3gnLCAnMHgnKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvckhhbmRsZXIuZXJyb3IoJ2VudGl0eSBub3QgZm91bmQ6JyArIGEpO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGFwcGVuZFRleHQoZW5kKSB7XG4gICAgaWYgKGVuZCA+IHN0YXJ0KSB7XG4gICAgICB2YXIgeHQgPSBzb3VyY2Uuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpLnJlcGxhY2UoLyYjP1xcdys7L2csIGVudGl0eVJlcGxhY2VyKTtcbiAgICAgIGxvY2F0b3IgJiYgcG9zaXRpb24oc3RhcnQpO1xuICAgICAgZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHh0LCAwLCBlbmQgLSBzdGFydCk7XG4gICAgICBzdGFydCA9IGVuZDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcG9zaXRpb24ocCwgbSkge1xuICAgIHdoaWxlIChwID49IGxpbmVFbmQgJiYgKG0gPSBsaW5lUGF0dGVybi5leGVjKHNvdXJjZSkpKSB7XG4gICAgICBsaW5lU3RhcnQgPSBtLmluZGV4O1xuICAgICAgbGluZUVuZCA9IGxpbmVTdGFydCArIG1bMF0ubGVuZ3RoO1xuICAgICAgbG9jYXRvci5saW5lTnVtYmVyKys7XG4gICAgfVxuICAgIGxvY2F0b3IuY29sdW1uTnVtYmVyID0gcCAtIGxpbmVTdGFydCArIDE7XG4gIH1cbiAgdmFyIGxpbmVTdGFydCA9IDA7XG4gIHZhciBsaW5lRW5kID0gMDtcbiAgdmFyIGxpbmVQYXR0ZXJuID0gLy4qKD86XFxyXFxuP3xcXG4pfC4qJC9nO1xuICB2YXIgbG9jYXRvciA9IGRvbUJ1aWxkZXIubG9jYXRvcjtcbiAgdmFyIHBhcnNlU3RhY2sgPSBbe1xuICAgIGN1cnJlbnROU01hcDogZGVmYXVsdE5TTWFwQ29weVxuICB9XTtcbiAgdmFyIGNsb3NlTWFwID0ge307XG4gIHZhciBzdGFydCA9IDA7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciB0YWdTdGFydCA9IHNvdXJjZS5pbmRleE9mKCc8Jywgc3RhcnQpO1xuICAgICAgaWYgKHRhZ1N0YXJ0IDwgMCkge1xuICAgICAgICBpZiAoIXNvdXJjZS5zdWJzdHIoc3RhcnQpLm1hdGNoKC9eXFxzKiQvKSkge1xuICAgICAgICAgIHZhciBkb2MgPSBkb21CdWlsZGVyLmRvYztcbiAgICAgICAgICB2YXIgdGV4dCA9IGRvYy5jcmVhdGVUZXh0Tm9kZShzb3VyY2Uuc3Vic3RyKHN0YXJ0KSk7XG4gICAgICAgICAgZG9jLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgIGRvbUJ1aWxkZXIuY3VycmVudEVsZW1lbnQgPSB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0YWdTdGFydCA+IHN0YXJ0KSB7XG4gICAgICAgIGFwcGVuZFRleHQodGFnU3RhcnQpO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChzb3VyY2UuY2hhckF0KHRhZ1N0YXJ0ICsgMSkpIHtcbiAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgdmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCc+JywgdGFnU3RhcnQgKyAzKTtcbiAgICAgICAgICB2YXIgdGFnTmFtZSA9IHNvdXJjZS5zdWJzdHJpbmcodGFnU3RhcnQgKyAyLCBlbmQpO1xuICAgICAgICAgIHZhciBjb25maWcgPSBwYXJzZVN0YWNrLnBvcCgpO1xuICAgICAgICAgIGlmIChlbmQgPCAwKSB7XG4gICAgICAgICAgICB0YWdOYW1lID0gc291cmNlLnN1YnN0cmluZyh0YWdTdGFydCArIDIpLnJlcGxhY2UoL1tcXHM8XS4qLywgJycpO1xuICAgICAgICAgICAgZXJyb3JIYW5kbGVyLmVycm9yKFwiZW5kIHRhZyBuYW1lOiBcIiArIHRhZ05hbWUgKyAnIGlzIG5vdCBjb21wbGV0ZTonICsgY29uZmlnLnRhZ05hbWUpO1xuICAgICAgICAgICAgZW5kID0gdGFnU3RhcnQgKyAxICsgdGFnTmFtZS5sZW5ndGg7XG4gICAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lLm1hdGNoKC9cXHM8LykpIHtcbiAgICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnJlcGxhY2UoL1tcXHM8XS4qLywgJycpO1xuICAgICAgICAgICAgZXJyb3JIYW5kbGVyLmVycm9yKFwiZW5kIHRhZyBuYW1lOiBcIiArIHRhZ05hbWUgKyAnIG1heWJlIG5vdCBjb21wbGV0ZScpO1xuICAgICAgICAgICAgZW5kID0gdGFnU3RhcnQgKyAxICsgdGFnTmFtZS5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBsb2NhbE5TTWFwID0gY29uZmlnLmxvY2FsTlNNYXA7XG4gICAgICAgICAgdmFyIGVuZE1hdGNoID0gY29uZmlnLnRhZ05hbWUgPT0gdGFnTmFtZTtcbiAgICAgICAgICB2YXIgZW5kSWdub3JlQ2FzZU1hY2ggPSBlbmRNYXRjaCB8fCBjb25maWcudGFnTmFtZSAmJiBjb25maWcudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBpZiAoZW5kSWdub3JlQ2FzZU1hY2gpIHtcbiAgICAgICAgICAgIGRvbUJ1aWxkZXIuZW5kRWxlbWVudChjb25maWcudXJpLCBjb25maWcubG9jYWxOYW1lLCB0YWdOYW1lKTtcbiAgICAgICAgICAgIGlmIChsb2NhbE5TTWFwKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIHByZWZpeCBpbiBsb2NhbE5TTWFwKSB7XG4gICAgICAgICAgICAgICAgZG9tQnVpbGRlci5lbmRQcmVmaXhNYXBwaW5nKHByZWZpeCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZW5kTWF0Y2gpIHtcbiAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyLmZhdGFsRXJyb3IoXCJlbmQgdGFnIG5hbWU6IFwiICsgdGFnTmFtZSArICcgaXMgbm90IG1hdGNoIHRoZSBjdXJyZW50IHN0YXJ0IHRhZ05hbWU6JyArIGNvbmZpZy50YWdOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VTdGFjay5wdXNoKGNvbmZpZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVuZCsrO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICc/JzpcbiAgICAgICAgICBsb2NhdG9yICYmIHBvc2l0aW9uKHRhZ1N0YXJ0KTtcbiAgICAgICAgICBlbmQgPSBwYXJzZUluc3RydWN0aW9uKHNvdXJjZSwgdGFnU3RhcnQsIGRvbUJ1aWxkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICchJzpcbiAgICAgICAgICBsb2NhdG9yICYmIHBvc2l0aW9uKHRhZ1N0YXJ0KTtcbiAgICAgICAgICBlbmQgPSBwYXJzZURDQyhzb3VyY2UsIHRhZ1N0YXJ0LCBkb21CdWlsZGVyLCBlcnJvckhhbmRsZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGxvY2F0b3IgJiYgcG9zaXRpb24odGFnU3RhcnQpO1xuICAgICAgICAgIHZhciBlbCA9IG5ldyBFbGVtZW50QXR0cmlidXRlcygpO1xuICAgICAgICAgIHZhciBjdXJyZW50TlNNYXAgPSBwYXJzZVN0YWNrW3BhcnNlU3RhY2subGVuZ3RoIC0gMV0uY3VycmVudE5TTWFwO1xuICAgICAgICAgIHZhciBlbmQgPSBwYXJzZUVsZW1lbnRTdGFydFBhcnQoc291cmNlLCB0YWdTdGFydCwgZWwsIGN1cnJlbnROU01hcCwgZW50aXR5UmVwbGFjZXIsIGVycm9ySGFuZGxlcik7XG4gICAgICAgICAgdmFyIGxlbiA9IGVsLmxlbmd0aDtcbiAgICAgICAgICBpZiAoIWVsLmNsb3NlZCAmJiBmaXhTZWxmQ2xvc2VkKHNvdXJjZSwgZW5kLCBlbC50YWdOYW1lLCBjbG9zZU1hcCkpIHtcbiAgICAgICAgICAgIGVsLmNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIWVudGl0eU1hcC5uYnNwKSB7XG4gICAgICAgICAgICAgIGVycm9ySGFuZGxlci53YXJuaW5nKCd1bmNsb3NlZCB4bWwgYXR0cmlidXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChsb2NhdG9yICYmIGxlbikge1xuICAgICAgICAgICAgdmFyIGxvY2F0b3IyID0gY29weUxvY2F0b3IobG9jYXRvciwge30pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICB2YXIgYSA9IGVsW2ldO1xuICAgICAgICAgICAgICBwb3NpdGlvbihhLm9mZnNldCk7XG4gICAgICAgICAgICAgIGEubG9jYXRvciA9IGNvcHlMb2NhdG9yKGxvY2F0b3IsIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbUJ1aWxkZXIubG9jYXRvciA9IGxvY2F0b3IyO1xuICAgICAgICAgICAgaWYgKGFwcGVuZEVsZW1lbnQoZWwsIGRvbUJ1aWxkZXIsIGN1cnJlbnROU01hcCkpIHtcbiAgICAgICAgICAgICAgcGFyc2VTdGFjay5wdXNoKGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbUJ1aWxkZXIubG9jYXRvciA9IGxvY2F0b3I7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhcHBlbmRFbGVtZW50KGVsLCBkb21CdWlsZGVyLCBjdXJyZW50TlNNYXApKSB7XG4gICAgICAgICAgICAgIHBhcnNlU3RhY2sucHVzaChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlbC51cmkgPT09ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJyAmJiAhZWwuY2xvc2VkKSB7XG4gICAgICAgICAgICBlbmQgPSBwYXJzZUh0bWxTcGVjaWFsQ29udGVudChzb3VyY2UsIGVuZCwgZWwudGFnTmFtZSwgZW50aXR5UmVwbGFjZXIsIGRvbUJ1aWxkZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbmQrKztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3JIYW5kbGVyLmVycm9yKCdlbGVtZW50IHBhcnNlIGVycm9yOiAnICsgZSk7XG4gICAgICBlbmQgPSAtMTtcbiAgICB9XG4gICAgaWYgKGVuZCA+IHN0YXJ0KSB7XG4gICAgICBzdGFydCA9IGVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwZW5kVGV4dChNYXRoLm1heCh0YWdTdGFydCwgc3RhcnQpICsgMSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjb3B5TG9jYXRvcihmLCB0KSB7XG4gIHQubGluZU51bWJlciA9IGYubGluZU51bWJlcjtcbiAgdC5jb2x1bW5OdW1iZXIgPSBmLmNvbHVtbk51bWJlcjtcbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBwYXJzZUVsZW1lbnRTdGFydFBhcnQoc291cmNlLCBzdGFydCwgZWwsIGN1cnJlbnROU01hcCwgZW50aXR5UmVwbGFjZXIsIGVycm9ySGFuZGxlcikge1xuICB2YXIgYXR0ck5hbWU7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIHAgPSArK3N0YXJ0O1xuICB2YXIgcyA9IFNfVEFHO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHZhciBjID0gc291cmNlLmNoYXJBdChwKTtcbiAgICBzd2l0Y2ggKGMpIHtcbiAgICAgIGNhc2UgJz0nOlxuICAgICAgICBpZiAocyA9PT0gU19BVFRSKSB7XG4gICAgICAgICAgYXR0ck5hbWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApO1xuICAgICAgICAgIHMgPSBTX0VRO1xuICAgICAgICB9IGVsc2UgaWYgKHMgPT09IFNfQVRUUl9TUEFDRSkge1xuICAgICAgICAgIHMgPSBTX0VRO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXR0cmlidXRlIGVxdWFsIG11c3QgYWZ0ZXIgYXR0ck5hbWUnKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1xcJyc6XG4gICAgICBjYXNlICdcIic6XG4gICAgICAgIGlmIChzID09PSBTX0VRIHx8IHMgPT09IFNfQVRUUikge1xuICAgICAgICAgIGlmIChzID09PSBTX0FUVFIpIHtcbiAgICAgICAgICAgIGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgdmFsdWUgbXVzdCBhZnRlciBcIj1cIicpO1xuICAgICAgICAgICAgYXR0ck5hbWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGFydCA9IHAgKyAxO1xuICAgICAgICAgIHAgPSBzb3VyY2UuaW5kZXhPZihjLCBzdGFydCk7XG4gICAgICAgICAgaWYgKHAgPiAwKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCkucmVwbGFjZSgvJiM/XFx3KzsvZywgZW50aXR5UmVwbGFjZXIpO1xuICAgICAgICAgICAgZWwuYWRkKGF0dHJOYW1lLCB2YWx1ZSwgc3RhcnQgLSAxKTtcbiAgICAgICAgICAgIHMgPSBTX0FUVFJfRU5EO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSB2YWx1ZSBubyBlbmQgXFwnJyArIGMgKyAnXFwnIG1hdGNoJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHMgPT0gU19BVFRSX05PUVVPVF9WQUxVRSkge1xuICAgICAgICAgIHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LCBwKS5yZXBsYWNlKC8mIz9cXHcrOy9nLCBlbnRpdHlSZXBsYWNlcik7XG4gICAgICAgICAgZWwuYWRkKGF0dHJOYW1lLCB2YWx1ZSwgc3RhcnQpO1xuICAgICAgICAgIGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInICsgYXR0ck5hbWUgKyAnXCIgbWlzc2VkIHN0YXJ0IHF1b3QoJyArIGMgKyAnKSEhJyk7XG4gICAgICAgICAgc3RhcnQgPSBwICsgMTtcbiAgICAgICAgICBzID0gU19BVFRSX0VORDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSB2YWx1ZSBtdXN0IGFmdGVyIFwiPVwiJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgc3dpdGNoIChzKSB7XG4gICAgICAgICAgY2FzZSBTX1RBRzpcbiAgICAgICAgICAgIGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LCBwKSk7XG4gICAgICAgICAgY2FzZSBTX0FUVFJfRU5EOlxuICAgICAgICAgIGNhc2UgU19UQUdfU1BBQ0U6XG4gICAgICAgICAgY2FzZSBTX1RBR19DTE9TRTpcbiAgICAgICAgICAgIHMgPSBTX1RBR19DTE9TRTtcbiAgICAgICAgICAgIGVsLmNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgY2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOlxuICAgICAgICAgIGNhc2UgU19BVFRSOlxuICAgICAgICAgIGNhc2UgU19BVFRSX1NQQUNFOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF0dHJpYnV0ZSBpbnZhbGlkIGNsb3NlIGNoYXIoJy8nKVwiKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJyc6XG4gICAgICAgIGVycm9ySGFuZGxlci5lcnJvcigndW5leHBlY3RlZCBlbmQgb2YgaW5wdXQnKTtcbiAgICAgICAgaWYgKHMgPT0gU19UQUcpIHtcbiAgICAgICAgICBlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCwgcCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgY2FzZSAnPic6XG4gICAgICAgIHN3aXRjaCAocykge1xuICAgICAgICAgIGNhc2UgU19UQUc6XG4gICAgICAgICAgICBlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCwgcCkpO1xuICAgICAgICAgIGNhc2UgU19BVFRSX0VORDpcbiAgICAgICAgICBjYXNlIFNfVEFHX1NQQUNFOlxuICAgICAgICAgIGNhc2UgU19UQUdfQ0xPU0U6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFNfQVRUUl9OT1FVT1RfVkFMVUU6XG4gICAgICAgICAgY2FzZSBTX0FUVFI6XG4gICAgICAgICAgICB2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCk7XG4gICAgICAgICAgICBpZiAodmFsdWUuc2xpY2UoLTEpID09PSAnLycpIHtcbiAgICAgICAgICAgICAgZWwuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBTX0FUVFJfU1BBQ0U6XG4gICAgICAgICAgICBpZiAocyA9PT0gU19BVFRSX1NQQUNFKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gYXR0ck5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocyA9PSBTX0FUVFJfTk9RVU9UX1ZBTFVFKSB7XG4gICAgICAgICAgICAgIGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInICsgdmFsdWUgKyAnXCIgbWlzc2VkIHF1b3QoXCIpISEnKTtcbiAgICAgICAgICAgICAgZWwuYWRkKGF0dHJOYW1lLCB2YWx1ZS5yZXBsYWNlKC8mIz9cXHcrOy9nLCBlbnRpdHlSZXBsYWNlciksIHN0YXJ0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50TlNNYXBbJyddICE9PSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcgfHwgIXZhbHVlLm1hdGNoKC9eKD86ZGlzYWJsZWR8Y2hlY2tlZHxzZWxlY3RlZCkkL2kpKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicgKyB2YWx1ZSArICdcIiBtaXNzZWQgdmFsdWUhISBcIicgKyB2YWx1ZSArICdcIiBpbnN0ZWFkISEnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbC5hZGQodmFsdWUsIHZhbHVlLCBzdGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFNfRVE6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSB2YWx1ZSBtaXNzZWQhIScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgY2FzZSBcIlxceDgwXCI6XG4gICAgICAgIGMgPSAnICc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoYyA8PSAnICcpIHtcbiAgICAgICAgICBzd2l0Y2ggKHMpIHtcbiAgICAgICAgICAgIGNhc2UgU19UQUc6XG4gICAgICAgICAgICAgIGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LCBwKSk7XG4gICAgICAgICAgICAgIHMgPSBTX1RBR19TUEFDRTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNfQVRUUjpcbiAgICAgICAgICAgICAgYXR0ck5hbWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApO1xuICAgICAgICAgICAgICBzID0gU19BVFRSX1NQQUNFO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU19BVFRSX05PUVVPVF9WQUxVRTpcbiAgICAgICAgICAgICAgdmFyIHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LCBwKS5yZXBsYWNlKC8mIz9cXHcrOy9nLCBlbnRpdHlSZXBsYWNlcik7XG4gICAgICAgICAgICAgIGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInICsgdmFsdWUgKyAnXCIgbWlzc2VkIHF1b3QoXCIpISEnKTtcbiAgICAgICAgICAgICAgZWwuYWRkKGF0dHJOYW1lLCB2YWx1ZSwgc3RhcnQpO1xuICAgICAgICAgICAgY2FzZSBTX0FUVFJfRU5EOlxuICAgICAgICAgICAgICBzID0gU19UQUdfU1BBQ0U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2l0Y2ggKHMpIHtcbiAgICAgICAgICAgIGNhc2UgU19BVFRSX1NQQUNFOlxuICAgICAgICAgICAgICB2YXIgdGFnTmFtZSA9IGVsLnRhZ05hbWU7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50TlNNYXBbJyddICE9PSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcgfHwgIWF0dHJOYW1lLm1hdGNoKC9eKD86ZGlzYWJsZWR8Y2hlY2tlZHxzZWxlY3RlZCkkL2kpKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicgKyBhdHRyTmFtZSArICdcIiBtaXNzZWQgdmFsdWUhISBcIicgKyBhdHRyTmFtZSArICdcIiBpbnN0ZWFkMiEhJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWwuYWRkKGF0dHJOYW1lLCBhdHRyTmFtZSwgc3RhcnQpO1xuICAgICAgICAgICAgICBzdGFydCA9IHA7XG4gICAgICAgICAgICAgIHMgPSBTX0FUVFI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTX0FUVFJfRU5EOlxuICAgICAgICAgICAgICBlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIHNwYWNlIGlzIHJlcXVpcmVkXCInICsgYXR0ck5hbWUgKyAnXCIhIScpO1xuICAgICAgICAgICAgY2FzZSBTX1RBR19TUEFDRTpcbiAgICAgICAgICAgICAgcyA9IFNfQVRUUjtcbiAgICAgICAgICAgICAgc3RhcnQgPSBwO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU19FUTpcbiAgICAgICAgICAgICAgcyA9IFNfQVRUUl9OT1FVT1RfVkFMVUU7XG4gICAgICAgICAgICAgIHN0YXJ0ID0gcDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNfVEFHX0NMT1NFOlxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbGVtZW50cyBjbG9zZWQgY2hhcmFjdGVyICcvJyBhbmQgJz4nIG11c3QgYmUgY29ubmVjdGVkIHRvXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwKys7XG4gIH1cbn1cbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnQoZWwsIGRvbUJ1aWxkZXIsIGN1cnJlbnROU01hcCkge1xuICB2YXIgdGFnTmFtZSA9IGVsLnRhZ05hbWU7XG4gIHZhciBsb2NhbE5TTWFwID0gbnVsbDtcbiAgdmFyIGkgPSBlbC5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgYSA9IGVsW2ldO1xuICAgIHZhciBxTmFtZSA9IGEucU5hbWU7XG4gICAgdmFyIHZhbHVlID0gYS52YWx1ZTtcbiAgICB2YXIgbnNwID0gcU5hbWUuaW5kZXhPZignOicpO1xuICAgIGlmIChuc3AgPiAwKSB7XG4gICAgICB2YXIgcHJlZml4ID0gYS5wcmVmaXggPSBxTmFtZS5zbGljZSgwLCBuc3ApO1xuICAgICAgdmFyIGxvY2FsTmFtZSA9IHFOYW1lLnNsaWNlKG5zcCArIDEpO1xuICAgICAgdmFyIG5zUHJlZml4ID0gcHJlZml4ID09PSAneG1sbnMnICYmIGxvY2FsTmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxOYW1lID0gcU5hbWU7XG4gICAgICBwcmVmaXggPSBudWxsO1xuICAgICAgbnNQcmVmaXggPSBxTmFtZSA9PT0gJ3htbG5zJyAmJiAnJztcbiAgICB9XG4gICAgYS5sb2NhbE5hbWUgPSBsb2NhbE5hbWU7XG4gICAgaWYgKG5zUHJlZml4ICE9PSBmYWxzZSkge1xuICAgICAgaWYgKGxvY2FsTlNNYXAgPT0gbnVsbCkge1xuICAgICAgICBsb2NhbE5TTWFwID0ge307XG4gICAgICAgIF9jb3B5KGN1cnJlbnROU01hcCwgY3VycmVudE5TTWFwID0ge30pO1xuICAgICAgfVxuICAgICAgY3VycmVudE5TTWFwW25zUHJlZml4XSA9IGxvY2FsTlNNYXBbbnNQcmVmaXhdID0gdmFsdWU7XG4gICAgICBhLnVyaSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLyc7XG4gICAgICBkb21CdWlsZGVyLnN0YXJ0UHJlZml4TWFwcGluZyhuc1ByZWZpeCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICB2YXIgaSA9IGVsLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIGEgPSBlbFtpXTtcbiAgICB2YXIgcHJlZml4ID0gYS5wcmVmaXg7XG4gICAgaWYgKHByZWZpeCkge1xuICAgICAgaWYgKHByZWZpeCA9PT0gJ3htbCcpIHtcbiAgICAgICAgYS51cmkgPSAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJztcbiAgICAgIH1cbiAgICAgIGlmIChwcmVmaXggIT09ICd4bWxucycpIHtcbiAgICAgICAgYS51cmkgPSBjdXJyZW50TlNNYXBbcHJlZml4IHx8ICcnXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIG5zcCA9IHRhZ05hbWUuaW5kZXhPZignOicpO1xuICBpZiAobnNwID4gMCkge1xuICAgIHByZWZpeCA9IGVsLnByZWZpeCA9IHRhZ05hbWUuc2xpY2UoMCwgbnNwKTtcbiAgICBsb2NhbE5hbWUgPSBlbC5sb2NhbE5hbWUgPSB0YWdOYW1lLnNsaWNlKG5zcCArIDEpO1xuICB9IGVsc2Uge1xuICAgIHByZWZpeCA9IG51bGw7XG4gICAgbG9jYWxOYW1lID0gZWwubG9jYWxOYW1lID0gdGFnTmFtZTtcbiAgfVxuICB2YXIgbnMgPSBlbC51cmkgPSBjdXJyZW50TlNNYXBbcHJlZml4IHx8ICcnXTtcbiAgZG9tQnVpbGRlci5zdGFydEVsZW1lbnQobnMsIGxvY2FsTmFtZSwgdGFnTmFtZSwgZWwpO1xuICBpZiAoZWwuY2xvc2VkKSB7XG4gICAgZG9tQnVpbGRlci5lbmRFbGVtZW50KG5zLCBsb2NhbE5hbWUsIHRhZ05hbWUpO1xuICAgIGlmIChsb2NhbE5TTWFwKSB7XG4gICAgICBmb3IgKHByZWZpeCBpbiBsb2NhbE5TTWFwKSB7XG4gICAgICAgIGRvbUJ1aWxkZXIuZW5kUHJlZml4TWFwcGluZyhwcmVmaXgpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbC5jdXJyZW50TlNNYXAgPSBjdXJyZW50TlNNYXA7XG4gICAgZWwubG9jYWxOU01hcCA9IGxvY2FsTlNNYXA7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlSHRtbFNwZWNpYWxDb250ZW50KHNvdXJjZSwgZWxTdGFydEVuZCwgdGFnTmFtZSwgZW50aXR5UmVwbGFjZXIsIGRvbUJ1aWxkZXIpIHtcbiAgaWYgKC9eKD86c2NyaXB0fHRleHRhcmVhKSQvaS50ZXN0KHRhZ05hbWUpKSB7XG4gICAgdmFyIGVsRW5kU3RhcnQgPSBzb3VyY2UuaW5kZXhPZignPC8nICsgdGFnTmFtZSArICc+JywgZWxTdGFydEVuZCk7XG4gICAgdmFyIHRleHQgPSBzb3VyY2Uuc3Vic3RyaW5nKGVsU3RhcnRFbmQgKyAxLCBlbEVuZFN0YXJ0KTtcbiAgICBpZiAoL1smPF0vLnRlc3QodGV4dCkpIHtcbiAgICAgIGlmICgvXnNjcmlwdCQvaS50ZXN0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRvbUJ1aWxkZXIuY2hhcmFjdGVycyh0ZXh0LCAwLCB0ZXh0Lmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBlbEVuZFN0YXJ0O1xuICAgICAgfVxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvJiM/XFx3KzsvZywgZW50aXR5UmVwbGFjZXIpO1xuICAgICAgZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHRleHQsIDAsIHRleHQubGVuZ3RoKTtcbiAgICAgIHJldHVybiBlbEVuZFN0YXJ0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWxTdGFydEVuZCArIDE7XG59XG5mdW5jdGlvbiBmaXhTZWxmQ2xvc2VkKHNvdXJjZSwgZWxTdGFydEVuZCwgdGFnTmFtZSwgY2xvc2VNYXApIHtcbiAgdmFyIHBvcyA9IGNsb3NlTWFwW3RhZ05hbWVdO1xuICBpZiAocG9zID09IG51bGwpIHtcbiAgICBwb3MgPSBzb3VyY2UubGFzdEluZGV4T2YoJzwvJyArIHRhZ05hbWUgKyAnPicpO1xuICAgIGlmIChwb3MgPCBlbFN0YXJ0RW5kKSB7XG4gICAgICBwb3MgPSBzb3VyY2UubGFzdEluZGV4T2YoJzwvJyArIHRhZ05hbWUpO1xuICAgIH1cbiAgICBjbG9zZU1hcFt0YWdOYW1lXSA9IHBvcztcbiAgfVxuICByZXR1cm4gcG9zIDwgZWxTdGFydEVuZDtcbn1cbmZ1bmN0aW9uIF9jb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gIGZvciAodmFyIG4gaW4gc291cmNlKSB7XG4gICAgdGFyZ2V0W25dID0gc291cmNlW25dO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZURDQyhzb3VyY2UsIHN0YXJ0LCBkb21CdWlsZGVyLCBlcnJvckhhbmRsZXIpIHtcbiAgdmFyIG5leHQgPSBzb3VyY2UuY2hhckF0KHN0YXJ0ICsgMik7XG4gIHN3aXRjaCAobmV4dCkge1xuICAgIGNhc2UgJy0nOlxuICAgICAgaWYgKHNvdXJjZS5jaGFyQXQoc3RhcnQgKyAzKSA9PT0gJy0nKSB7XG4gICAgICAgIHZhciBlbmQgPSBzb3VyY2UuaW5kZXhPZignLS0+Jywgc3RhcnQgKyA0KTtcbiAgICAgICAgaWYgKGVuZCA+IHN0YXJ0KSB7XG4gICAgICAgICAgZG9tQnVpbGRlci5jb21tZW50KHNvdXJjZSwgc3RhcnQgKyA0LCBlbmQgLSBzdGFydCAtIDQpO1xuICAgICAgICAgIHJldHVybiBlbmQgKyAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVycm9ySGFuZGxlci5lcnJvcihcIlVuY2xvc2VkIGNvbW1lbnRcIik7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIGlmIChzb3VyY2Uuc3Vic3RyKHN0YXJ0ICsgMywgNikgPT0gJ0NEQVRBWycpIHtcbiAgICAgICAgdmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCddXT4nLCBzdGFydCArIDkpO1xuICAgICAgICBkb21CdWlsZGVyLnN0YXJ0Q0RBVEEoKTtcbiAgICAgICAgZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHNvdXJjZSwgc3RhcnQgKyA5LCBlbmQgLSBzdGFydCAtIDkpO1xuICAgICAgICBkb21CdWlsZGVyLmVuZENEQVRBKCk7XG4gICAgICAgIHJldHVybiBlbmQgKyAzO1xuICAgICAgfVxuICAgICAgdmFyIG1hdGNocyA9IHNwbGl0KHNvdXJjZSwgc3RhcnQpO1xuICAgICAgdmFyIGxlbiA9IG1hdGNocy5sZW5ndGg7XG4gICAgICBpZiAobGVuID4gMSAmJiAvIWRvY3R5cGUvaS50ZXN0KG1hdGNoc1swXVswXSkpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBtYXRjaHNbMV1bMF07XG4gICAgICAgIHZhciBwdWJpZCA9IGxlbiA+IDMgJiYgL15wdWJsaWMkL2kudGVzdChtYXRjaHNbMl1bMF0pICYmIG1hdGNoc1szXVswXTtcbiAgICAgICAgdmFyIHN5c2lkID0gbGVuID4gNCAmJiBtYXRjaHNbNF1bMF07XG4gICAgICAgIHZhciBsYXN0TWF0Y2ggPSBtYXRjaHNbbGVuIC0gMV07XG4gICAgICAgIGRvbUJ1aWxkZXIuc3RhcnREVEQobmFtZSwgcHViaWQgJiYgcHViaWQucmVwbGFjZSgvXihbJ1wiXSkoLio/KVxcMSQvLCAnJDInKSwgc3lzaWQgJiYgc3lzaWQucmVwbGFjZSgvXihbJ1wiXSkoLio/KVxcMSQvLCAnJDInKSk7XG4gICAgICAgIGRvbUJ1aWxkZXIuZW5kRFREKCk7XG4gICAgICAgIHJldHVybiBsYXN0TWF0Y2guaW5kZXggKyBsYXN0TWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIHBhcnNlSW5zdHJ1Y3Rpb24oc291cmNlLCBzdGFydCwgZG9tQnVpbGRlcikge1xuICB2YXIgZW5kID0gc291cmNlLmluZGV4T2YoJz8+Jywgc3RhcnQpO1xuICBpZiAoZW5kKSB7XG4gICAgdmFyIG1hdGNoID0gc291cmNlLnN1YnN0cmluZyhzdGFydCwgZW5kKS5tYXRjaCgvXjxcXD8oXFxTKilcXHMqKFtcXHNcXFNdKj8pXFxzKiQvKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHZhciBsZW4gPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICBkb21CdWlsZGVyLnByb2Nlc3NpbmdJbnN0cnVjdGlvbihtYXRjaFsxXSwgbWF0Y2hbMl0pO1xuICAgICAgcmV0dXJuIGVuZCArIDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gRWxlbWVudEF0dHJpYnV0ZXMoc291cmNlKSB7fVxuRWxlbWVudEF0dHJpYnV0ZXMucHJvdG90eXBlID0ge1xuICBzZXRUYWdOYW1lOiBmdW5jdGlvbiBzZXRUYWdOYW1lKHRhZ05hbWUpIHtcbiAgICBpZiAoIXRhZ05hbWVQYXR0ZXJuLnRlc3QodGFnTmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCB0YWdOYW1lOicgKyB0YWdOYW1lKTtcbiAgICB9XG4gICAgdGhpcy50YWdOYW1lID0gdGFnTmFtZTtcbiAgfSxcbiAgYWRkOiBmdW5jdGlvbiBhZGQocU5hbWUsIHZhbHVlLCBvZmZzZXQpIHtcbiAgICBpZiAoIXRhZ05hbWVQYXR0ZXJuLnRlc3QocU5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXR0cmlidXRlOicgKyBxTmFtZSk7XG4gICAgfVxuICAgIHRoaXNbdGhpcy5sZW5ndGgrK10gPSB7XG4gICAgICBxTmFtZTogcU5hbWUsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBvZmZzZXQ6IG9mZnNldFxuICAgIH07XG4gIH0sXG4gIGxlbmd0aDogMCxcbiAgZ2V0TG9jYWxOYW1lOiBmdW5jdGlvbiBnZXRMb2NhbE5hbWUoaSkge1xuICAgIHJldHVybiB0aGlzW2ldLmxvY2FsTmFtZTtcbiAgfSxcbiAgZ2V0TG9jYXRvcjogZnVuY3Rpb24gZ2V0TG9jYXRvcihpKSB7XG4gICAgcmV0dXJuIHRoaXNbaV0ubG9jYXRvcjtcbiAgfSxcbiAgZ2V0UU5hbWU6IGZ1bmN0aW9uIGdldFFOYW1lKGkpIHtcbiAgICByZXR1cm4gdGhpc1tpXS5xTmFtZTtcbiAgfSxcbiAgZ2V0VVJJOiBmdW5jdGlvbiBnZXRVUkkoaSkge1xuICAgIHJldHVybiB0aGlzW2ldLnVyaTtcbiAgfSxcbiAgZ2V0VmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKGkpIHtcbiAgICByZXR1cm4gdGhpc1tpXS52YWx1ZTtcbiAgfVxufTtcbmZ1bmN0aW9uIHNwbGl0KHNvdXJjZSwgc3RhcnQpIHtcbiAgdmFyIG1hdGNoO1xuICB2YXIgYnVmID0gW107XG4gIHZhciByZWcgPSAvJ1teJ10rJ3xcIlteXCJdK1wifFteXFxzPD5cXC89XSs9P3woXFwvP1xccyo+fDwpL2c7XG4gIHJlZy5sYXN0SW5kZXggPSBzdGFydDtcbiAgcmVnLmV4ZWMoc291cmNlKTtcbiAgd2hpbGUgKG1hdGNoID0gcmVnLmV4ZWMoc291cmNlKSkge1xuICAgIGJ1Zi5wdXNoKG1hdGNoKTtcbiAgICBpZiAobWF0Y2hbMV0pIHJldHVybiBidWY7XG4gIH1cbn1cbmV4cG9ydHMuWE1MUmVhZGVyID0gWE1MUmVhZGVyO1xuXG59LHt9XX0se30sWzU3XSk7XG4iXSwiZmlsZSI6IndlYi1hZGFwdGVyLmpzIn0=
