(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _features = {};
var _getCallbacks = {};
var _setCallbacks = {};
var _FEATURE_UNSUPPORT = -1;
var _default = exports["default"] = {
  FEATURE_UNSUPPORT: _FEATURE_UNSUPPORT,
  CANVAS_CONTEXT2D_TEXTBASELINE_ALPHABETIC: {
    name: "canvas.context2d.textbaseline.alphabetic",
    enable: 1,
    disable: 0
  },
  CANVAS_CONTEXT2D_TEXTBASELINE_DEFAULT: {
    name: "canvas.context2d.textbaseline.default",
    alphabetic: 1,
    bottom: 0
  },
  setFeature: function setFeature(featureName, property, value) {
    var feature = _features[featureName];
    if (!feature) {
      feature = _features[featureName] = {};
    }
    feature[property] = value;
  },
  getFeatureProperty: function getFeatureProperty(featureName, property) {
    var feature = _features[featureName];
    return feature ? feature[property] : undefined;
  },
  registerFeatureProperty: function registerFeatureProperty(key, getFunction, setFunction) {
    if (typeof key !== "string") {
      return false;
    }
    if (typeof getFunction !== "function" && typeof setFunction !== "function") {
      return false;
    }
    if (typeof getFunction === "function" && typeof _getCallbacks[key] === "function") {
      return false;
    }
    if (typeof setFunction === "function" && typeof _setCallbacks[key] === "function") {
      return false;
    }
    if (typeof getFunction === "function") {
      _getCallbacks[key] = getFunction;
    }
    if (typeof setFunction === "function") {
      _setCallbacks[key] = setFunction;
    }
    return true;
  },
  unregisterFeatureProperty: function unregisterFeatureProperty(key, getBool, setBool) {
    if (typeof key !== "string") {
      return false;
    }
    if (typeof getBool !== "boolean" || typeof setBool !== "boolean") {
      return false;
    }
    if (getBool === true && typeof _getCallbacks[key] === "function") {
      _getCallbacks[key] = undefined;
    }
    if (setBool === true && typeof _setCallbacks[key] === "function") {
      _setCallbacks[key] = undefined;
    }
    return true;
  },
  getFeaturePropertyInt: function getFeaturePropertyInt(key) {
    if (typeof key !== "string") {
      return _FEATURE_UNSUPPORT;
    }
    var getFunction = _getCallbacks[key];
    if (getFunction === undefined) {
      return _FEATURE_UNSUPPORT;
    }
    var value = getFunction();
    if (typeof value !== "number") {
      return _FEATURE_UNSUPPORT;
    }
    if (value < _FEATURE_UNSUPPORT) {
      value = _FEATURE_UNSUPPORT;
    }
    return value;
  },
  setFeaturePropertyInt: function setFeaturePropertyInt(key, value) {
    if (typeof key !== "string" && typeof value !== "number" && value < 0) {
      return false;
    }
    var setFunction = _setCallbacks[key];
    if (setFunction === undefined) {
      return false;
    }
    var returnCode = setFunction(value);
    if (typeof returnCode !== "number" && typeof returnCode !== 'boolean') {
      return false;
    }
    return returnCode ? true : false;
  }
};

},{}],2:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_util["default"].exportTo("onShow", hbs, ral);
_util["default"].exportTo("onHide", hbs, ral);
_util["default"].exportTo("offShow", hbs, ral);
_util["default"].exportTo("offHide", hbs, ral);

},{"../../util":39}],3:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_util["default"].exportTo("triggerGC", hbs, ral);
_util["default"].exportTo("getPerformance", hbs, ral);

},{"../../util":39}],4:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _loadSubpackage = hbs.loadSubpackage.bind(hbs);
ral.loadSubpackage = function (object) {
  var obj = object;
  if (_typeof(object) === "object") {
    obj = Object.assign({}, object);
    obj.subpackage = object.name;
  }
  return _loadSubpackage.call(this, obj);
};

},{}],5:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_util["default"].exportTo("env", hbs, ral);
_util["default"].exportTo("getSystemInfo", hbs, ral);
_util["default"].exportTo("getSystemInfoSync", hbs, ral);

},{"../../util":39}],6:[function(require,module,exports){
"use strict";

var _jsb = window.jsb;
if (!_jsb) {
  _jsb = {};
}
var _touches = [];
var _getTouchIndex = function _getTouchIndex(touch) {
  var element;
  for (var index = 0; index < _touches.length; index++) {
    element = _touches[index];
    if (touch.identifier === element.identifier) {
      return index;
    }
  }
  return -1;
};
var _copyObject = function _copyObject(fromObj, toObject) {
  for (var key in fromObj) {
    if (fromObj.hasOwnProperty(key)) {
      toObject[key] = fromObj[key];
    }
  }
};
var _listenerMap = {
  "touchstart": [],
  "touchmove": [],
  "touchend": [],
  "touchcancel": []
};
function _addListener(key, value) {
  var listenerArr = _listenerMap[key];
  for (var index = 0, length = listenerArr.length; index < length; index++) {
    if (value === listenerArr[index]) {
      return;
    }
  }
  listenerArr.push(value);
}
function _removeListener(key, value) {
  var listenerArr = _listenerMap[key] || [];
  var length = listenerArr.length;
  for (var index = 0; index < length; ++index) {
    if (value === listenerArr[index]) {
      listenerArr.splice(index, 1);
      return;
    }
  }
}
var _hasDellWith = false;
var _systemInfo = hbs.getSystemInfoSync();
if (window.innerWidth && _systemInfo.windowWidth !== window.innerWidth) {
  _hasDellWith = true;
}
var _touchEventHandlerFactory = function _touchEventHandlerFactory(type) {
  return function (changedTouches) {
    if (typeof changedTouches === "function") {
      _addListener(type, changedTouches);
      return;
    }
    var touchEvent = new TouchEvent(type);
    var index;
    if (type === "touchstart") {
      changedTouches.forEach(function (touch) {
        index = _getTouchIndex(touch);
        if (index >= 0) {
          _copyObject(touch, _touches[index]);
        } else {
          var tmp = {};
          _copyObject(touch, tmp);
          _touches.push(tmp);
        }
      });
    } else if (type === "touchmove") {
      changedTouches.forEach(function (element) {
        index = _getTouchIndex(element);
        if (index >= 0) {
          _copyObject(element, _touches[index]);
        }
      });
    } else if (type === "touchend" || type === "touchcancel") {
      changedTouches.forEach(function (element) {
        index = _getTouchIndex(element);
        if (index >= 0) {
          _touches.splice(index, 1);
        }
      });
    }
    var touches = [].concat(_touches);
    var _changedTouches = [];
    changedTouches.forEach(function (touch) {
      var length = touches.length;
      for (var _index = 0; _index < length; ++_index) {
        var _touch = touches[_index];
        if (touch.identifier === _touch.identifier) {
          _changedTouches.push(_touch);
          return;
        }
      }
      _changedTouches.push(touch);
    });
    touchEvent.touches = touches;
    touchEvent.targetTouches = touches;
    touchEvent.changedTouches = _changedTouches;
    if (_hasDellWith) {
      touches.forEach(function (touch) {
        touch.clientX /= window.devicePixelRatio;
        touch.clientY /= window.devicePixelRatio;
        touch.pageX /= window.devicePixelRatio;
        touch.pageY /= window.devicePixelRatio;
      });
      if (type === "touchcancel" || type === "touchend") {
        _changedTouches.forEach(function (touch) {
          touch.clientX /= window.devicePixelRatio;
          touch.clientY /= window.devicePixelRatio;
          touch.pageX /= window.devicePixelRatio;
          touch.pageY /= window.devicePixelRatio;
        });
      }
    }
    var listenerArr = _listenerMap[type];
    var length = listenerArr.length;
    for (var _index2 = 0; _index2 < length; _index2++) {
      listenerArr[_index2](touchEvent);
    }
  };
};
if (hbs.onTouchStart) {
  ral.onTouchStart = hbs.onTouchStart;
  ral.offTouchStart = hbs.offTouchStart;
} else {
  _jsb.onTouchStart = _touchEventHandlerFactory('touchstart');
  _jsb.offTouchStart = function (callback) {
    _removeListener("touchstart", callback);
  };
  ral.onTouchStart = _jsb.onTouchStart.bind(_jsb);
  ral.offTouchStart = _jsb.offTouchStart.bind(_jsb);
}
if (hbs.onTouchMove) {
  ral.onTouchMove = hbs.onTouchMove;
  ral.offTouchMove = hbs.offTouchMove;
} else {
  _jsb.onTouchMove = _touchEventHandlerFactory('touchmove');
  _jsb.offTouchMove = function (callback) {
    _removeListener("touchmove", callback);
  };
  ral.onTouchMove = _jsb.onTouchMove.bind(_jsb);
  ral.offTouchMove = _jsb.offTouchMove.bind(_jsb);
}
if (hbs.onTouchCancel) {
  ral.onTouchCancel = hbs.onTouchCancel;
  ral.offTouchCancel = hbs.offTouchCancel;
} else {
  _jsb.onTouchCancel = _touchEventHandlerFactory('touchcancel');
  _jsb.offTouchCancel = function (callback) {
    _removeListener("touchcancel", callback);
  };
  ral.onTouchCancel = _jsb.onTouchCancel.bind(_jsb);
  ral.offTouchCancel = _jsb.offTouchCancel.bind(_jsb);
}
if (hbs.onTouchEnd) {
  ral.onTouchEnd = hbs.onTouchEnd;
  ral.offTouchEnd = hbs.offTouchEnd;
} else {
  _jsb.onTouchEnd = _touchEventHandlerFactory('touchend');
  _jsb.offTouchEnd = function (callback) {
    _removeListener("touchend", callback);
  };
  ral.onTouchEnd = _jsb.onTouchEnd.bind(_jsb);
  ral.offTouchEnd = _jsb.offTouchEnd.bind(_jsb);
}

},{}],7:[function(require,module,exports){
"use strict";

var _listeners = [];
ral.onAccelerometerChange = function (listener) {
  if (typeof listener === "function") {
    var length = _listeners.length;
    for (var index = 0; index < length; ++index) {
      if (listener === _listeners[index]) {
        return;
      }
    }
    _listeners.push(listener);
  }
};
ral.offAccelerometerChange = function (listener) {
  var length = _listeners.length;
  for (var index = 0; index < length; ++index) {
    if (listener === _listeners[index]) {
      _listeners.splice(index, 1);
      return;
    }
  }
};
var _addEventListener = window.addEventListener.bind(window);
var _onAccelerometerChange;
ral.startAccelerometer = function () {
  if (!_onAccelerometerChange) {
    _onAccelerometerChange = function _onAccelerometerChange(event) {
      var acceleration = Object.assign({}, event.accelerationIncludingGravity);
      acceleration.x /= -10;
      acceleration.y /= -10;
      acceleration.z /= -10;
      _listeners.forEach(function (listener) {
        listener({
          x: acceleration.x,
          y: acceleration.y,
          z: acceleration.z,
          timestamp: event.timeStamp || Date.now()
        });
      });
    };
    _addEventListener("devicemotion", _onAccelerometerChange, false);
    jsb.device.setMotionEnabled(true);
  }
};
var _removeEventListener = window.removeEventListener.bind(window);
ral.stopAccelerometer = function () {
  if (_onAccelerometerChange) {
    _removeEventListener("devicemotion", _onAccelerometerChange, false);
    _onAccelerometerChange = null;
    jsb.device.setMotionEnabled(false);
  }
};

},{}],8:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_util["default"].exportTo("getBatteryInfo", hbs, ral);
_util["default"].exportTo("getBatteryInfoSync", hbs, ral);

},{"../../util":39}],9:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_util["default"].exportTo("getFileSystemManager", hbs, ral);

},{"../../util":39}],10:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../util"));
var _feature = _interopRequireDefault(require("../feature"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
if (window.jsb) {
  window.ral = Object.assign({}, window.jsb);
} else {
  window.ral = {};
}
require("./base/lifecycle");
require("./base/subpackage");
require("./base/system-info");
require("./base/touch-event");
require("./base/performance");
require("./device/accelerometer");
require("./device/battery");
require("./file/file-system-manager");
require("./interface/keyboard");
require("./interface/window");
require("./media/audio");
require("./network/download");
require("./rendering/canvas");
require("./rendering/webgl");
require("./rendering/font");
require("./rendering/frame");
require("./rendering/image");
require("./unitysdk/index");
for (var key in _feature["default"]) {
  if (key === "setFeature" || key === "registerFeatureProperty" || key === "unregisterFeatureProperty") {
    continue;
  }
  if (_feature["default"].hasOwnProperty(key)) {
    _util["default"].exportTo(key, _feature["default"], ral);
  }
}

},{"../feature":1,"../util":39,"./base/lifecycle":2,"./base/performance":3,"./base/subpackage":4,"./base/system-info":5,"./base/touch-event":6,"./device/accelerometer":7,"./device/battery":8,"./file/file-system-manager":9,"./interface/keyboard":11,"./interface/window":12,"./media/audio":13,"./network/download":14,"./rendering/canvas":15,"./rendering/font":16,"./rendering/frame":17,"./rendering/image":18,"./rendering/webgl":19,"./unitysdk/index":26}],11:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_util["default"].exportTo("onKeyboardInput", hbs, ral);
_util["default"].exportTo("onKeyboardConfirm", hbs, ral);
_util["default"].exportTo("onKeyboardComplete", hbs, ral);
_util["default"].exportTo("offKeyboardInput", hbs, ral);
_util["default"].exportTo("offKeyboardConfirm", hbs, ral);
_util["default"].exportTo("offKeyboardComplete", hbs, ral);
_util["default"].exportTo("hideKeyboard", hbs, ral);
_util["default"].exportTo("showKeyboard", hbs, ral);
_util["default"].exportTo("updateKeyboard", hbs, ral);

},{"../../util":39}],12:[function(require,module,exports){
"use strict";

var _onWindowResize = hbs.onWindowResize;
ral.onWindowResize = function (callBack) {
  _onWindowResize(function (size) {
    callBack(size.width || size.windowWidth, size.height || size.windowHeight);
  });
};
window.resize = function () {
  console.warn('window.resize() is deprecated');
};

},{}],13:[function(require,module,exports){
"use strict";

var _innerContext = _interopRequireDefault(require("../../inner-context"));
var _util = _interopRequireDefault(require("../../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_util["default"].exportTo("AudioEngine", hbs, ral);
_util["default"].exportTo("createInnerAudioContext", hbs, ral, function () {
  if (hbs.AudioEngine) {
    ral.createInnerAudioContext = function () {
      return (0, _innerContext["default"])(hbs.AudioEngine);
    };
  }
}, function () {
  var ctx = ral.createInnerAudioContext();
  var prototype = ctx.__proto__.constructor.prototype;
  var desc = Object.getOwnPropertyDescriptor(prototype, "currentTime");
  if (desc) {
    var _get = desc.get;
    Object.defineProperty(prototype, "currentTime", {
      get: function get() {
        return parseFloat(_get.call(this));
      }
    });
  }
  var _weakMap = new WeakMap();
  var oldSeek = prototype.seek;
  var oldPlay = prototype.play;
  prototype.seek = function (position) {
    if (this.paused) {
      _weakMap.set(this, {
        position: position
      });
    }
    oldSeek.call(this, position);
  };
  prototype.play = function () {
    oldPlay.call(this);
    var privateThis = _weakMap.get(this);
    if (privateThis && privateThis.position >= 0) {
      oldSeek.call(this, privateThis.position);
      privateThis.position = -1;
    }
  };
});

},{"../../inner-context":38,"../../util":39}],14:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_util["default"].exportTo("downloadFile", hbs, ral);

},{"../../util":39}],15:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));
var _feature = _interopRequireDefault(require("../../feature"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_util["default"].exportTo("createCanvas", hbs, ral, function () {
  var featureValue = "unsupported";
  if (document && typeof document.createElement === "function") {
    featureValue = "wrapper";
    ral.createCanvas = function () {
      return document.createElement("canvas");
    };
  }
  _feature["default"].setFeature("ral.createCanvas", "spec", featureValue);
});
var _hbs_getFeature = hbs.getFeature;
var _hbs_setFeature = hbs.setFeature;
_feature["default"].registerFeatureProperty(_feature["default"].CANVAS_CONTEXT2D_TEXTBASELINE_ALPHABETIC.name, function () {
  if (typeof _hbs_getFeature === "function") {
    var value = _hbs_getFeature(_feature["default"].CANVAS_CONTEXT2D_TEXTBASELINE_ALPHABETIC.name);
    switch (value) {
      case 1:
        return _feature["default"].CANVAS_CONTEXT2D_TEXTBASELINE_ALPHABETIC.enable;
      default:
        break;
    }
  }
  return _feature["default"].FEATURE_UNSUPPORT;
}, undefined);
_feature["default"].registerFeatureProperty(_feature["default"].CANVAS_CONTEXT2D_TEXTBASELINE_DEFAULT.name, function () {
  if (typeof _hbs_getFeature === "function") {
    var value = _hbs_getFeature(_feature["default"].CANVAS_CONTEXT2D_TEXTBASELINE_DEFAULT.name);
    switch (value) {
      case 1:
        return _feature["default"].CANVAS_CONTEXT2D_TEXTBASELINE_DEFAULT.alphabetic;
      case 0:
        return _feature["default"].CANVAS_CONTEXT2D_TEXTBASELINE_DEFAULT.bottom;
      default:
        break;
    }
  }
  return _feature["default"].FEATURE_UNSUPPORT;
}, function (value) {
  if (typeof _hbs_setFeature === "function") {
    switch (value) {
      case _feature["default"].CANVAS_CONTEXT2D_TEXTBASELINE_DEFAULT.alphabetic:
        value = 1;
        break;
      case _feature["default"].CANVAS_CONTEXT2D_TEXTBASELINE_DEFAULT.bottom:
        value = 0;
        break;
      default:
        return false;
    }
    return _hbs_setFeature(_feature["default"].CANVAS_CONTEXT2D_TEXTBASELINE_DEFAULT.name, value);
  }
  return false;
});

},{"../../feature":1,"../../util":39}],16:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_util["default"].exportTo("loadFont", hbs, ral);

},{"../../util":39}],17:[function(require,module,exports){
"use strict";

if (window.jsb && jsb.setPreferredFramesPerSecond) {
  ral.setPreferredFramesPerSecond = jsb.setPreferredFramesPerSecond.bind(jsb);
} else if (hbs.setPreferredFramesPerSecond) {
  ral.setPreferredFramesPerSecond = hbs.setPreferredFramesPerSecond.bind(hbs);
} else {
  ral.setPreferredFramesPerSecond = function () {
    console.error("The setPreferredFramesPerSecond is not define!");
  };
}

},{}],18:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));
var _feature = _interopRequireDefault(require("../../feature"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_util["default"].exportTo("loadImageData", hbs, ral, function () {
  if (window.jsb && typeof jsb.loadImage === "function") {
    ral.loadImageData = jsb.loadImage;
  } else {
    console.error("loadImageData is not function");
  }
});
_util["default"].exportTo("createImage", hbs, ral, function () {
  var featureValue = "unsupported";
  if (document && typeof document.createElement === "function") {
    featureValue = "wrapper";
    ral.createImage = function () {
      return document.createElement("image");
    };
  }
});
var featureValue = "huawei_platform_support";
_feature["default"].setFeature("ral.createImage", "spec", featureValue);

},{"../../feature":1,"../../util":39}],19:[function(require,module,exports){
"use strict";

if (window.__gl) {
  var gl = window.__gl;
  var _glTexImage2D = gl.texImage2D;
  gl.texImage2D = function (target, level, internalformat, width, height, border, format, type, pixels) {
    var argc = arguments.length;
    if (argc === 6) {
      var image = border;
      type = height;
      format = width;
      if (image instanceof HTMLImageElement) {
        _glTexImage2D(target, level, image._glInternalFormat, image.width, image.height, 0, image._glFormat, image._glType, image._data);
      } else if (image instanceof HTMLCanvasElement) {
        if (image._context2D && image._context2D._getData) {
          var data = image._context2D._getData();
          _glTexImage2D(target, level, internalformat, image.width, image.height, 0, format, type, data);
        } else {
          console.error("Invalid image argument gl.texImage2D!");
        }
      } else if (image.height && image.width && image.data) {
        var error = console.error;
        console.error = function () {};
        _glTexImage2D(target, level, internalformat, image.width, image.height, 0, format, type, image.data);
        console.error = error;
      } else {
        console.error("Invalid pixel argument passed to gl.texImage2D!");
      }
    } else if (argc === 9) {
      _glTexImage2D(target, level, internalformat, width, height, border, format, type, pixels);
    } else {
      console.error("gl.texImage2D: invalid argument count!");
    }
  };
  var _glTexSubImage2D = gl.texSubImage2D;
  gl.texSubImage2D = function (target, level, xoffset, yoffset, width, height, format, type, pixels) {
    var argc = arguments.length;
    if (argc === 7) {
      var image = format;
      type = height;
      format = width;
      if (image instanceof HTMLImageElement) {
        _glTexSubImage2D(target, level, xoffset, yoffset, image.width, image.height, image._glFormat, image._glType, image._data);
      } else if (image instanceof HTMLCanvasElement) {
        if (image._context2D && image._context2D._getData) {
          var data = image._context2D._getData();
          _glTexSubImage2D(target, level, xoffset, yoffset, image.width, image.height, format, type, data);
        } else {
          console.error("Invalid image argument gl.texSubImage2D!");
        }
      } else if (image.height && image.width && image.data) {
        var error = console.error;
        console.error = function () {};
        _glTexSubImage2D(target, level, xoffset, yoffset, image.width, image.height, format, type, image.data);
        console.error = error;
      } else {
        console.error("Invalid pixel argument passed to gl.texSubImage2D!");
      }
    } else if (argc === 9) {
      _glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
    } else {
      console.error(new Error("gl.texImage2D: invalid argument count!").stack);
    }
  };
}

},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./base"));
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _default = exports["default"] = {
  QG_GameLogin: function QG_GameLogin(conf, callbackId) {
    var args = handleLoginCallback(callbackId);
    qg.gameLoginWithReal(_objectSpread(_objectSpread({}, _base["default"].formatJsonStr(conf)), args));
  }
};
function handleLoginCallback(callbackId) {
  return {
    success: function success(res) {
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnGameLoginCallback, res);
    },
    fail: function fail(data, code) {
      var error = {
        data: data,
        code: code
      };
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnGameLoginCallback, error);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnGameLoginCallback);
    }
  };
}

},{"./base":21,"./constant":23}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _moduleHelper = _interopRequireDefault(require("./module-helper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
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
  },
  onCallbackParameter: function onCallbackParameter(callbackId, callbackType, method, resObj) {
    resObj._callbackId = callbackId;
    resObj._callbackType = callbackType;
    _moduleHelper["default"].send(method, JSON.stringify(resObj));
  },
  onCallbackNoParameter: function onCallbackNoParameter(callbackId, callbackType, method) {
    _moduleHelper["default"].send(method, JSON.stringify({
      _callbackId: callbackId,
      _callbackType: callbackType
    }));
  },
  callbackType: {
    success: 0,
    fail: 1,
    complete: 2
  }
};

},{"./module-helper":31}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./base"));
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _default = exports["default"] = {
  QG_GetClipboardData: function QG_GetClipboardData(callbackId) {
    var args = getClipboardDataCallback(callbackId);
    qg.getClipboardData(_objectSpread({}, args));
  },
  QG_SetClipboardData: function QG_SetClipboardData(conf, callbackId) {
    var args = setClipboardDataCallback(callbackId);
    qg.setClipboardData(_objectSpread(_objectSpread({}, _base["default"].formatJsonStr(conf)), args));
  }
};
function getClipboardDataCallback(callbackId) {
  return {
    success: function success(res) {
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnGetClipboardDataCallback, res);
    },
    fail: function fail() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnGetClipboardDataCallback);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnGetClipboardDataCallback);
    }
  };
}
function setClipboardDataCallback(callbackId) {
  return {
    success: function success() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnSetClipboardDataCallback);
    },
    fail: function fail() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnSetClipboardDataCallback);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnSetClipboardDataCallback);
    }
  };
}

},{"./base":21,"./constant":23}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = {
  moduleName: "QGSDKManagerHandler",
  method: {
    _OnGameLoginCallback: "_OnGameLoginCallback",
    _RewardedVideoAdOnLoad: "_RewardedVideoAdOnLoad",
    _RewardedVideoAdOnClose: "_RewardedVideoAdOnClose",
    _RewardedVideoAdOnError: "_RewardedVideoAdOnError",
    _OnCreateRewardedVideoAdCallback: "_OnCreateRewardedVideoAdCallback",
    _OnIsEnvReadyCallback: "_OnIsEnvReadyCallback",
    _OnIsSandboxActivatedCallback: "_OnIsSandboxActivatedCallback",
    _OnObtainOwnedPurchasesCallback: "_OnObtainOwnedPurchasesCallback",
    _OnObtainProductInfoCallback: "_OnObtainProductInfoCallback",
    _OnCreatePurchaseIntentCallback: "_OnCreatePurchaseIntentCallback",
    _OnConsumeOwnedPurchaseCallback: "_OnConsumeOwnedPurchaseCallback",
    _OnObtainOwnedPurchaseRecordCallback: "_OnObtainOwnedPurchaseRecordCallback",
    _OnStartIapActivityCallback: "_OnStartIapActivityCallback",
    _OnHideKeyboardCallback: "_OnHideKeyboardCallback",
    _OnShowKeyboardCallback: "_OnShowKeyboardCallback",
    _OnUpdateKeyboardCallback: "_OnUpdateKeyboardCallback",
    _OnKeyboardInputCallback: "_OnKeyboardInputCallback",
    _OnKeyboardConfirmCallback: "_OnKeyboardConfirmCallback",
    _OnKeyboardCompleteCallback: "_OnKeyboardCompleteCallback",
    _InnerAudioContextOnEnded: "_InnerAudioContextOnEnded",
    _InnerAudioContextOnPlay: "_InnerAudioContextOnPlay",
    _InnerAudioContextOnPause: "_InnerAudioContextOnPause",
    _InnerAudioContextOnStop: "_InnerAudioContextOnStop",
    _InnerAudioContextOnError: "_InnerAudioContextOnError",
    _InnerAudioContextOnCanPlay: "_InnerAudioContextOnCanPlay",
    _InnerAudioContextOnWaiting: "_InnerAudioContextOnWaiting",
    _InnerAudioContextOnSeeking: "_InnerAudioContextOnSeeking",
    _InnerAudioContextOnSeeked: "_InnerAudioContextOnSeeked",
    _OnGetClipboardDataCallback: "_OnGetClipboardDataCallback",
    _OnSetClipboardDataCallback: "_OnSetClipboardDataCallback",
    _OnTouchStartCallback: "_OnTouchStartCallback",
    _OnTouchMoveCallback: "_OnTouchMoveCallback",
    _OnTouchEndCallback: "_OnTouchEndCallback",
    _OnTouchCancelCallback: "_OnTouchCancelCallback",
    _OnGetSystemInfoCallback: "_OnGetSystemInfoCallback",
    _OnErrorCallback: "_OnErrorCallback",
    _OnExitApplicationCallback: "_OnExitApplicationCallback",
    _OnHideCallback: "_OnHideCallback",
    _OnShowCallback: "_OnShowCallback",
    _OnNavigateToQuickAppCallback: "_OnNavigateToQuickAppCallback",
    _OnHasShortcutInstalledCallback: "_OnHasShortcutInstalledCallback",
    _OnInstallShortcutCallback: "_OnInstallShortcutCallback"
  }
};

},{}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./base"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _default = exports["default"] = {
  QG_OpenDeeplink: function QG_OpenDeeplink(conf) {
    qg.openDeeplink(_objectSpread({}, _base["default"].formatJsonStr(conf)));
  }
};

},{"./base":21}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = {
  QG_SetPreferredFramesPerSecond: function QG_SetPreferredFramesPerSecond(fps) {
    qg.setPreferredFramesPerSecond(fps);
  }
};

},{}],26:[function(require,module,exports){
"use strict";

var _account = _interopRequireDefault(require("./account"));
var _rewardedVideoAd = _interopRequireDefault(require("./rewardedVideoAd"));
var _pay = _interopRequireDefault(require("./pay"));
var _keyboard = _interopRequireDefault(require("./keyboard"));
var _localStorage = _interopRequireDefault(require("./localStorage"));
var _frameRate = _interopRequireDefault(require("./frameRate"));
var _innerAudioContext = _interopRequireDefault(require("./innerAudioContext"));
var _clipboard = _interopRequireDefault(require("./clipboard"));
var _touch = _interopRequireDefault(require("./touch"));
var _systemInfo = _interopRequireDefault(require("./systemInfo"));
var _systemEvents = _interopRequireDefault(require("./systemEvents"));
var _lifecycle = _interopRequireDefault(require("./lifecycle"));
var _deeplink = _interopRequireDefault(require("./deeplink"));
var _shortcut = _interopRequireDefault(require("./shortcut"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
ral.QG_GameLogin = _account["default"].QG_GameLogin;
ral.QG_CreateRewardedVideoAd = _rewardedVideoAd["default"].QG_CreateRewardedVideoAd;
ral.QG_RewardedVideoAdLoad = _rewardedVideoAd["default"].QG_RewardedVideoAdLoad;
ral.QG_RewardedVideoAdShow = _rewardedVideoAd["default"].QG_RewardedVideoAdShow;
ral.QG_RewardedVideoAdDestroy = _rewardedVideoAd["default"].QG_RewardedVideoAdDestroy;
ral.QG_SetTagForChildProtection = _rewardedVideoAd["default"].QG_SetTagForChildProtection;
ral.QG_SetTagForUnderAgeOfPromise = _rewardedVideoAd["default"].QG_SetTagForUnderAgeOfPromise;
ral.QG_SetAdContentClassification = _rewardedVideoAd["default"].QG_SetAdContentClassification;
ral.QG_SetNonPersonalizedAd = _rewardedVideoAd["default"].QG_SetNonPersonalizedAd;
ral.QG_IsEnvReady = _pay["default"].QG_IsEnvReady;
ral.QG_IsSandboxActivated = _pay["default"].QG_IsSandboxActivated;
ral.QG_ObtainOwnedPurchases = _pay["default"].QG_ObtainOwnedPurchases;
ral.QG_ObtainProductInfo = _pay["default"].QG_ObtainProductInfo;
ral.QG_CreatePurchaseIntent = _pay["default"].QG_CreatePurchaseIntent;
ral.QG_ConsumeOwnedPurchase = _pay["default"].QG_ConsumeOwnedPurchase;
ral.QG_ObtainOwnedPurchaseRecord = _pay["default"].QG_ObtainOwnedPurchaseRecord;
ral.QG_StartIapActivity = _pay["default"].QG_StartIapActivity;
ral.QG_HideKeyboard = _keyboard["default"].QG_HideKeyboard;
ral.QG_ShowKeyboard = _keyboard["default"].QG_ShowKeyboard;
ral.QG_UpdateKeyboard = _keyboard["default"].QG_UpdateKeyboard;
ral.QG_OnKeyboardInput = _keyboard["default"].QG_OnKeyboardInput;
ral.QG_OffKeyboardInput = _keyboard["default"].QG_OffKeyboardInput;
ral.QG_OnKeyboardConfirm = _keyboard["default"].QG_OnKeyboardConfirm;
ral.QG_OffKeyboardConfirm = _keyboard["default"].QG_OffKeyboardConfirm;
ral.QG_OnKeyboardComplete = _keyboard["default"].QG_OnKeyboardComplete;
ral.QG_OffKeyboardComplete = _keyboard["default"].QG_OffKeyboardComplete;
ral.QG_LocalStorageLength = _localStorage["default"].QG_LocalStorageLength;
ral.QG_LocalStorageClear = _localStorage["default"].QG_LocalStorageClear;
ral.QG_LocalStorageRemoveItem = _localStorage["default"].QG_LocalStorageRemoveItem;
ral.QG_LocalStorageSetItem = _localStorage["default"].QG_LocalStorageSetItem;
ral.QG_LocalStorageGetItem = _localStorage["default"].QG_LocalStorageGetItem;
ral.QG_LocalStorageKey = _localStorage["default"].QG_LocalStorageKey;
ral.QG_SetPreferredFramesPerSecond = _frameRate["default"].QG_SetPreferredFramesPerSecond;
ral.QG_CreateInnerAudioContext = _innerAudioContext["default"].QG_CreateInnerAudioContext;
ral.QG_InnerAudioContextPlay = _innerAudioContext["default"].QG_InnerAudioContextPlay;
ral.QG_InnerAudioContextPause = _innerAudioContext["default"].QG_InnerAudioContextPause;
ral.QG_InnerAudioContextStop = _innerAudioContext["default"].QG_InnerAudioContextStop;
ral.QG_InnerAudioContextSeek = _innerAudioContext["default"].QG_InnerAudioContextSeek;
ral.QG_InnerAudioContextDestroy = _innerAudioContext["default"].QG_InnerAudioContextDestroy;
ral.QG_InnerAudioContextSetBool = _innerAudioContext["default"].QG_InnerAudioContextSetBool;
ral.QG_InnerAudioContextSetString = _innerAudioContext["default"].QG_InnerAudioContextSetString;
ral.QG_InnerAudioContextSetFloat = _innerAudioContext["default"].QG_InnerAudioContextSetFloat;
ral.QG_InnerAudioContextGetBool = _innerAudioContext["default"].QG_InnerAudioContextGetBool;
ral.QG_InnerAudioContextGetString = _innerAudioContext["default"].QG_InnerAudioContextGetString;
ral.QG_InnerAudioContextGetFloat = _innerAudioContext["default"].QG_InnerAudioContextGetFloat;
ral.QG_GetClipboardData = _clipboard["default"].QG_GetClipboardData;
ral.QG_SetClipboardData = _clipboard["default"].QG_SetClipboardData;
ral.QG_OnTouchStart = _touch["default"].QG_OnTouchStart;
ral.QG_OffTouchStart = _touch["default"].QG_OffTouchStart;
ral.QG_OnTouchMove = _touch["default"].QG_OnTouchMove;
ral.QG_OffTouchMove = _touch["default"].QG_OffTouchMove;
ral.QG_OnTouchEnd = _touch["default"].QG_OnTouchEnd;
ral.QG_OffTouchEnd = _touch["default"].QG_OffTouchEnd;
ral.QG_OnTouchCancel = _touch["default"].QG_OnTouchCancel;
ral.QG_OffTouchCancel = _touch["default"].QG_OffTouchCancel;
ral.QG_GetSystemInfo = _systemInfo["default"].QG_GetSystemInfo;
ral.QG_GetSystemInfoSync = _systemInfo["default"].QG_GetSystemInfoSync;
ral.QG_OnError = _systemEvents["default"].QG_OnError;
ral.QG_OffError = _systemEvents["default"].QG_OffError;
ral.QG_ExitApplication = _lifecycle["default"].QG_ExitApplication;
ral.QG_GetLaunchOptionsSync = _lifecycle["default"].QG_GetLaunchOptionsSync;
ral.QG_OnHide = _lifecycle["default"].QG_OnHide;
ral.QG_OffHide = _lifecycle["default"].QG_OffHide;
ral.QG_OnShow = _lifecycle["default"].QG_OnShow;
ral.QG_OffShow = _lifecycle["default"].QG_OffShow;
ral.QG_NavigateToQuickApp = _lifecycle["default"].QG_NavigateToQuickApp;
ral.QG_OpenDeeplink = _deeplink["default"].QG_OpenDeeplink;
ral.QG_HasShortcutInstalled = _shortcut["default"].QG_HasShortcutInstalled;
ral.QG_InstallShortcut = _shortcut["default"].QG_InstallShortcut;

},{"./account":20,"./clipboard":22,"./deeplink":24,"./frameRate":25,"./innerAudioContext":27,"./keyboard":28,"./lifecycle":29,"./localStorage":30,"./pay":32,"./rewardedVideoAd":33,"./shortcut":34,"./systemEvents":35,"./systemInfo":36,"./touch":37}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./base"));
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var innerAudioContext = {};
var _default = exports["default"] = {
  QG_CreateInnerAudioContext: function QG_CreateInnerAudioContext(callbackId) {
    var audio = qg.createInnerAudioContext();
    audio.onEnded(function () {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._InnerAudioContextOnEnded);
    });
    audio.onPlay(function () {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._InnerAudioContextOnPlay);
    });
    audio.onPause(function () {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._InnerAudioContextOnPause);
    });
    audio.onStop(function () {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._InnerAudioContextOnStop);
    });
    audio.onError(function (e) {
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._InnerAudioContextOnError, e);
    });
    audio.onCanplay(function () {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._InnerAudioContextOnCanPlay);
    });
    audio.onWaiting(function () {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._InnerAudioContextOnWaiting);
    });
    audio.onSeeking(function () {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._InnerAudioContextOnSeeking);
    });
    audio.onSeeked(function () {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._InnerAudioContextOnSeeked);
    });
    innerAudioContext[callbackId] = audio;
  },
  QG_InnerAudioContextSetBool: function QG_InnerAudioContextSetBool(key, value, callbackId) {
    var audio = innerAudioContext[callbackId];
    if (!audio) {
      return;
    }
    if (key === "autoplay") {
      audio.autoplay = value ? true : false;
    } else if (key === "loop") {
      audio.loop = value ? true : false;
    } else if (key === "obeyMuteSwitch") {
      audio.obeyMuteSwitch = value ? true : false;
    }
  },
  QG_InnerAudioContextSetString: function QG_InnerAudioContextSetString(key, value, callbackId) {
    var audio = innerAudioContext[callbackId];
    if (!audio) {
      return;
    }
    if (key === "src") {
      audio.src = value;
    }
  },
  QG_InnerAudioContextSetFloat: function QG_InnerAudioContextSetFloat(key, value, callbackId) {
    var audio = innerAudioContext[callbackId];
    if (!audio) {
      return;
    }
    if (key === "startTime") {
      audio.startTime = value;
    } else if (key === "volume") {
      audio.volume = value;
    }
  },
  QG_InnerAudioContextGetBool: function QG_InnerAudioContextGetBool(key, callbackId) {
    var audio = innerAudioContext[callbackId];
    if (!audio) {
      return;
    }
    if (key === "autoplay") {
      return audio.autoplay;
    } else if (key === "loop") {
      return audio.loop;
    } else if (key === "obeyMuteSwitch") {
      return audio.obeyMuteSwitch;
    } else if (key === "paused") {
      return audio.paused;
    }
  },
  QG_InnerAudioContextGetString: function QG_InnerAudioContextGetString(key, callbackId) {
    var audio = innerAudioContext[callbackId];
    if (!audio) {
      return;
    }
    if (key === "src") {
      return audio.src;
    }
  },
  QG_InnerAudioContextGetFloat: function QG_InnerAudioContextGetFloat(key, callbackId) {
    var audio = innerAudioContext[callbackId];
    if (!audio) {
      return;
    }
    if (key === "startTime") {
      return audio.startTime;
    } else if (key === "volume") {
      return audio.volume;
    } else if (key === "duration") {
      return audio.duration;
    } else if (key === "currentTime") {
      return audio.currentTime;
    } else if (key === "buffered") {
      return audio.buffered;
    }
  },
  QG_InnerAudioContextPlay: function QG_InnerAudioContextPlay(callbackId) {
    var audio = innerAudioContext[callbackId];
    if (!audio) {
      return;
    }
    audio.play();
  },
  QG_InnerAudioContextPause: function QG_InnerAudioContextPause(callbackId) {
    var audio = innerAudioContext[callbackId];
    if (!audio) {
      return;
    }
    audio.pause();
  },
  QG_InnerAudioContextStop: function QG_InnerAudioContextStop(callbackId) {
    var audio = innerAudioContext[callbackId];
    if (!audio) {
      return;
    }
    audio.stop();
  },
  QG_InnerAudioContextSeek: function QG_InnerAudioContextSeek(position, callbackId) {
    var audio = innerAudioContext[callbackId];
    if (!audio) {
      return;
    }
    audio.seek(position);
  },
  QG_InnerAudioContextDestroy: function QG_InnerAudioContextDestroy(callbackId) {
    var audio = innerAudioContext[callbackId];
    if (!audio) {
      return;
    }
    audio.destroy();
    delete innerAudioContext[callbackId];
  }
};

},{"./base":21,"./constant":23}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./base"));
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _default = exports["default"] = {
  QG_HideKeyboard: function QG_HideKeyboard(callbackId) {
    var args = hideKeyboardCallback(callbackId);
    qg.hideKeyboard(_objectSpread({}, args));
  },
  QG_ShowKeyboard: function QG_ShowKeyboard(conf, callbackId) {
    var args = showKeyboardCallback(callbackId);
    qg.showKeyboard(_objectSpread(_objectSpread({}, _base["default"].formatJsonStr(conf)), args));
  },
  QG_UpdateKeyboard: function QG_UpdateKeyboard(conf, callbackId) {
    var args = updateKeyboardCallback(callbackId);
    qg.updateKeyboard(_objectSpread(_objectSpread({}, _base["default"].formatJsonStr(conf)), args));
  },
  QG_OnKeyboardInput: function QG_OnKeyboardInput() {
    qg.onKeyboardInput(keyboardInputCallback.onKeyboardInputCallback);
  },
  QG_OffKeyboardInput: function QG_OffKeyboardInput() {
    qg.offKeyboardInput(keyboardInputCallback.onKeyboardInputCallback);
  },
  QG_OnKeyboardConfirm: function QG_OnKeyboardConfirm() {
    qg.onKeyboardConfirm(keyboardInputCallback.onKeyboardConfirmCallback);
  },
  QG_OffKeyboardConfirm: function QG_OffKeyboardConfirm() {
    qg.offKeyboardConfirm(keyboardInputCallback.onKeyboardConfirmCallback);
  },
  QG_OnKeyboardComplete: function QG_OnKeyboardComplete() {
    qg.onKeyboardComplete(keyboardInputCallback.onKeyboardCompleteCallback);
  },
  QG_OffKeyboardComplete: function QG_OffKeyboardComplete() {
    qg.offKeyboardComplete(keyboardInputCallback.onKeyboardCompleteCallback);
  }
};
function hideKeyboardCallback(callbackId) {
  return {
    success: function success() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnHideKeyboardCallback);
    },
    fail: function fail() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnHideKeyboardCallback);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnHideKeyboardCallback);
    }
  };
}
function showKeyboardCallback(callbackId) {
  return {
    success: function success() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnShowKeyboardCallback);
    },
    fail: function fail() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnShowKeyboardCallback);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnShowKeyboardCallback);
    }
  };
}
function updateKeyboardCallback(callbackId) {
  return {
    success: function success(res) {
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnUpdateKeyboardCallback, res);
    },
    fail: function fail(res) {
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnUpdateKeyboardCallback, res);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnUpdateKeyboardCallback);
    }
  };
}
var keyboardInputCallback = {
  onKeyboardInputCallback: function onKeyboardInputCallback(res) {
    _base["default"].onCallbackParameter("", _base["default"].callbackType.success, _constant["default"].method._OnKeyboardInputCallback, res);
  },
  onKeyboardConfirmCallback: function onKeyboardConfirmCallback(res) {
    _base["default"].onCallbackParameter("", _base["default"].callbackType.success, _constant["default"].method._OnKeyboardConfirmCallback, res);
  },
  onKeyboardCompleteCallback: function onKeyboardCompleteCallback(res) {
    _base["default"].onCallbackParameter("", _base["default"].callbackType.success, _constant["default"].method._OnKeyboardCompleteCallback, res);
  }
};

},{"./base":21,"./constant":23}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./base"));
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _default = exports["default"] = {
  QG_ExitApplication: function QG_ExitApplication(callbackId) {
    var args = exitApplicationCallback(callbackId);
    qg.exitApplication(_objectSpread({}, args));
  },
  QG_GetLaunchOptionsSync: function QG_GetLaunchOptionsSync() {
    var res = qg.getLaunchOptionsSync();
    return JSON.stringify(res);
  },
  QG_OnHide: function QG_OnHide() {
    qg.onHide(lifecycleCallback.onHideCallback);
  },
  QG_OffHide: function QG_OffHide() {
    qg.offHide(lifecycleCallback.onHideCallback);
  },
  QG_OnShow: function QG_OnShow() {
    qg.onShow(lifecycleCallback.onShowCallback);
  },
  QG_OffShow: function QG_OffShow() {
    qg.offShow(lifecycleCallback.onShowCallback);
  },
  QG_NavigateToQuickApp: function QG_NavigateToQuickApp(conf, callbackId) {
    var args = navigateToQuickAppCallback(callbackId);
    qg.navigateToQuickApp(_objectSpread(_objectSpread({}, _base["default"].formatJsonStr(conf)), args));
  }
};
function exitApplicationCallback(callbackId) {
  return {
    success: function success() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnExitApplicationCallback);
    },
    fail: function fail() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnExitApplicationCallback);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnExitApplicationCallback);
    }
  };
}
function navigateToQuickAppCallback(callbackId) {
  return {
    success: function success() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnNavigateToQuickAppCallback);
    },
    fail: function fail() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnNavigateToQuickAppCallback);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnNavigateToQuickAppCallback);
    }
  };
}
var lifecycleCallback = {
  onHideCallback: function onHideCallback() {
    _base["default"].onCallbackNoParameter("", _base["default"].callbackType.success, _constant["default"].method._OnHideCallback);
  },
  onShowCallback: function onShowCallback(res) {
    _base["default"].onCallbackParameter("", _base["default"].callbackType.success, _constant["default"].method._OnShowCallback, res);
  }
};

},{"./base":21,"./constant":23}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = {
  QG_LocalStorageClear: function QG_LocalStorageClear() {
    localStorage.clear();
  },
  QG_LocalStorageRemoveItem: function QG_LocalStorageRemoveItem(key) {
    localStorage.removeItem(key);
  },
  QG_LocalStorageSetItem: function QG_LocalStorageSetItem(key, value) {
    localStorage.setItem(key, value);
  },
  QG_LocalStorageGetItem: function QG_LocalStorageGetItem(key) {
    var data = localStorage.getItem(key);
    var returnStr;
    if (data === null) {
      returnStr = JSON.stringify({
        errCode: -1
      });
    } else {
      returnStr = JSON.stringify({
        errCode: 0,
        data: data
      });
    }
    return returnStr;
  },
  QG_LocalStorageKey: function QG_LocalStorageKey(index) {
    var key = localStorage.key(index);
    var returnStr;
    if (key === null || key === "") {
      returnStr = JSON.stringify({
        errCode: -1
      });
    } else {
      returnStr = JSON.stringify({
        errCode: 0,
        data: key
      });
    }
    return returnStr;
  },
  QG_LocalStorageLength: function QG_LocalStorageLength() {
    console.log("length" + localStorage.length);
    return localStorage.length;
  }
};

},{}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  _send: null,
  init: function init() {
    this._send = qg.unityInstance.Module.SendMessage;
  },
  send: function send(method, str) {
    if (!this._send) {
      this.init();
    }
    this._send(_constant["default"].moduleName, method, str);
  }
};

},{"./constant":23}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./base"));
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _default = exports["default"] = {
  QG_IsEnvReady: function QG_IsEnvReady(conf, callbackId) {
    var args = isEnvReadyCallback(callbackId);
    qg.isEnvReady(_objectSpread({
      isEnvReadyReq: _objectSpread({}, _base["default"].formatJsonStr(conf))
    }, args));
  },
  QG_IsSandboxActivated: function QG_IsSandboxActivated(conf, callbackId) {
    var args = isSandboxActivatedCallback(callbackId);
    qg.isSandboxActivated(_objectSpread({
      isSandboxActivatedReq: _objectSpread({}, _base["default"].formatJsonStr(conf))
    }, args));
  },
  QG_ObtainOwnedPurchases: function QG_ObtainOwnedPurchases(conf, callbackId) {
    var args = obtainOwnedPurchasesCallback(callbackId);
    qg.obtainOwnedPurchases(_objectSpread({
      ownedPurchasesReq: _objectSpread({}, _base["default"].formatJsonStr(conf))
    }, args));
  },
  QG_ObtainProductInfo: function QG_ObtainProductInfo(conf, callbackId) {
    var args = obtainProductInfoCallback(callbackId);
    qg.obtainProductInfo(_objectSpread({
      productInfoReq: _objectSpread({}, _base["default"].formatJsonStr(conf))
    }, args));
  },
  QG_CreatePurchaseIntent: function QG_CreatePurchaseIntent(conf, callbackId) {
    var args = createPurchaseIntentCallback(callbackId);
    qg.createPurchaseIntent(_objectSpread({
      purchaseIntentReq: _objectSpread({}, _base["default"].formatJsonStr(conf))
    }, args));
  },
  QG_ConsumeOwnedPurchase: function QG_ConsumeOwnedPurchase(conf, callbackId) {
    var args = consumeOwnedPurchaseCallback(callbackId);
    qg.consumeOwnedPurchase(_objectSpread({
      consumeOwnedPurchaseReq: _objectSpread({}, _base["default"].formatJsonStr(conf))
    }, args));
  },
  QG_ObtainOwnedPurchaseRecord: function QG_ObtainOwnedPurchaseRecord(conf, callbackId) {
    var args = obtainOwnedPurchaseRecordCallback(callbackId);
    qg.obtainOwnedPurchaseRecord(_objectSpread({
      ownedPurchasesRecordReq: _objectSpread({}, _base["default"].formatJsonStr(conf))
    }, args));
  },
  QG_StartIapActivity: function QG_StartIapActivity(conf, callbackId) {
    var args = startIapActivityCallback(callbackId);
    qg.startIapActivity(_objectSpread({
      startIapActivityReq: _objectSpread({}, _base["default"].formatJsonStr(conf))
    }, args));
  }
};
function isEnvReadyCallback(callbackId) {
  return {
    success: function success(res) {
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnIsEnvReadyCallback, res);
    },
    fail: function fail(data, code) {
      var error = {
        data: data,
        code: code
      };
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnIsEnvReadyCallback, error);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnIsEnvReadyCallback);
    }
  };
}
function isSandboxActivatedCallback(callbackId) {
  return {
    success: function success(res) {
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnIsSandboxActivatedCallback, res);
    },
    fail: function fail(data, code) {
      var error = {
        data: data,
        code: code
      };
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnIsSandboxActivatedCallback, error);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnIsSandboxActivatedCallback);
    }
  };
}
function obtainOwnedPurchasesCallback(callbackId) {
  return {
    success: function success(res) {
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnObtainOwnedPurchasesCallback, res);
    },
    fail: function fail(data, code) {
      var error = {
        data: data,
        code: code
      };
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnObtainOwnedPurchasesCallback, error);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnObtainOwnedPurchasesCallback);
    }
  };
}
function obtainProductInfoCallback(callbackId) {
  return {
    success: function success(res) {
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnObtainProductInfoCallback, res);
    },
    fail: function fail(data, code) {
      var error = {
        data: data,
        code: code
      };
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnObtainProductInfoCallback, error);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnObtainProductInfoCallback);
    }
  };
}
function createPurchaseIntentCallback(callbackId) {
  return {
    success: function success(res) {
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnCreatePurchaseIntentCallback, res);
    },
    fail: function fail(data, code) {
      var error = {
        data: data,
        code: code
      };
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnCreatePurchaseIntentCallback, error);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnCreatePurchaseIntentCallback);
    }
  };
}
function consumeOwnedPurchaseCallback(callbackId) {
  return {
    success: function success(res) {
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnConsumeOwnedPurchaseCallback, res);
    },
    fail: function fail(data, code) {
      var error = {
        data: data,
        code: code
      };
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnConsumeOwnedPurchaseCallback, error);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnConsumeOwnedPurchaseCallback);
    }
  };
}
function obtainOwnedPurchaseRecordCallback(callbackId) {
  return {
    success: function success(res) {
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnObtainOwnedPurchaseRecordCallback, res);
    },
    fail: function fail(data, code) {
      var error = {
        data: data,
        code: code
      };
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnObtainOwnedPurchaseRecordCallback, error);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnObtainOwnedPurchaseRecordCallback);
    }
  };
}
function startIapActivityCallback(callbackId) {
  return {
    success: function success() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnStartIapActivityCallback);
    },
    fail: function fail(data, code) {
      var error = {
        data: data,
        code: code
      };
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnStartIapActivityCallback, error);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnStartIapActivityCallback);
    }
  };
}

},{"./base":21,"./constant":23}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./base"));
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var rewardedVideoAds = {};
var _default = exports["default"] = {
  QG_CreateRewardedVideoAd: function QG_CreateRewardedVideoAd(conf, callbackId) {
    var args = handleCreateRewardedVideoAdCallback(callbackId);
    var ad = qg.createRewardedVideoAd(_objectSpread(_objectSpread({}, _base["default"].formatJsonStr(conf)), args));
    ad.offLoad(null);
    ad.offError(null);
    ad.offClose(null);
    ad.onLoad(function () {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._RewardedVideoAdOnLoad);
    });
    ad.onClose(function (res) {
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._RewardedVideoAdOnClose, res);
    });
    ad.onError(function (e) {
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._RewardedVideoAdOnError, e);
    });
    rewardedVideoAds[callbackId] = ad;
  },
  QG_RewardedVideoAdLoad: function QG_RewardedVideoAdLoad(callbackId) {
    var ad = rewardedVideoAds[callbackId];
    if (!ad) {
      return;
    }
    ad.load();
  },
  QG_RewardedVideoAdShow: function QG_RewardedVideoAdShow(callbackId) {
    var ad = rewardedVideoAds[callbackId];
    if (!ad) {
      return;
    }
    ad.show();
  },
  QG_RewardedVideoAdDestroy: function QG_RewardedVideoAdDestroy(callbackId) {
    var ad = rewardedVideoAds[callbackId];
    if (!ad) {
      return;
    }
    ad.destroy();
    delete rewardedVideoAds[callbackId];
  },
  QG_SetTagForChildProtection: function QG_SetTagForChildProtection(conf, callbackId) {
    var ad = rewardedVideoAds[callbackId];
    if (!ad) {
      return;
    }
    ad.setTagForChildProtection(_base["default"].formatJsonStr(conf).childProtection);
  },
  QG_SetTagForUnderAgeOfPromise: function QG_SetTagForUnderAgeOfPromise(conf, callbackId) {
    var ad = rewardedVideoAds[callbackId];
    if (!ad) {
      return;
    }
    ad.setTagForUnderAgeOfPromise(_base["default"].formatJsonStr(conf).underAgeOfPromiseStr);
  },
  QG_SetAdContentClassification: function QG_SetAdContentClassification(conf, callbackId) {
    var ad = rewardedVideoAds[callbackId];
    if (!ad) {
      return;
    }
    ad.setAdContentClassification(_base["default"].formatJsonStr(conf).adContentClassification);
  },
  QG_SetNonPersonalizedAd: function QG_SetNonPersonalizedAd(conf, callbackId) {
    var ad = rewardedVideoAds[callbackId];
    if (!ad) {
      return;
    }
    ad.setNonPersonalizedAd(_base["default"].formatJsonStr(conf).personalizedAd);
  }
};
function handleCreateRewardedVideoAdCallback(callbackId) {
  return {
    success: function success(code) {
      var res = {
        code: code
      };
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnCreateRewardedVideoAdCallback, res);
    },
    fail: function fail(data, code) {
      var error = {
        code: code,
        data: data
      };
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnCreateRewardedVideoAdCallback, error);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnCreateRewardedVideoAdCallback);
    }
  };
}

},{"./base":21,"./constant":23}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./base"));
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _default = exports["default"] = {
  QG_HasShortcutInstalled: function QG_HasShortcutInstalled(callbackId) {
    var args = hasShortcutInstalledCallback(callbackId);
    qg.hasShortcutInstalled(_objectSpread({}, args));
  },
  QG_InstallShortcut: function QG_InstallShortcut(conf, callbackId) {
    var args = installShortcutCallback(callbackId);
    qg.installShortcut(_objectSpread(_objectSpread({}, _base["default"].formatJsonStr(conf)), args));
  }
};
function hasShortcutInstalledCallback(callbackId) {
  return {
    success: function success(res) {
      var obj = {
        hasShortcut: res
      };
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnHasShortcutInstalledCallback, obj);
    },
    fail: function fail(res) {
      var obj = {
        errorMsg: res
      };
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnHasShortcutInstalledCallback, obj);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnHasShortcutInstalledCallback);
    }
  };
}
function installShortcutCallback(callbackId) {
  return {
    success: function success(res) {
      var obj = {
        message: res
      };
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnInstallShortcutCallback, obj);
    },
    fail: function fail(erromsg, errocode) {
      var error = {
        erromsg: erromsg,
        errocode: errocode
      };
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnInstallShortcutCallback, error);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnInstallShortcutCallback);
    }
  };
}

},{"./base":21,"./constant":23}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./base"));
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  QG_OnError: function QG_OnError() {
    qg.onError(onErrorCallback.OnErrorCallback);
  },
  QG_OffError: function QG_OffError() {
    qg.offError(onErrorCallback.OnErrorCallback);
  }
};
var onErrorCallback = {
  OnErrorCallback: function OnErrorCallback(res) {
    _base["default"].onCallbackParameter("", _base["default"].callbackType.success, _constant["default"].method._OnErrorCallback, res);
  }
};

},{"./base":21,"./constant":23}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./base"));
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _default = exports["default"] = {
  QG_GetSystemInfo: function QG_GetSystemInfo(callbackId) {
    var args = getSystemInfoCallback(callbackId);
    qg.getSystemInfo(_objectSpread({}, args));
  },
  QG_GetSystemInfoSync: function QG_GetSystemInfoSync() {
    var res = qg.getSystemInfoSync();
    return JSON.stringify(res);
  }
};
function getSystemInfoCallback(callbackId) {
  return {
    success: function success(res) {
      _base["default"].onCallbackParameter(callbackId, _base["default"].callbackType.success, _constant["default"].method._OnGetSystemInfoCallback, res);
    },
    fail: function fail() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.fail, _constant["default"].method._OnGetSystemInfoCallback);
    },
    complete: function complete() {
      _base["default"].onCallbackNoParameter(callbackId, _base["default"].callbackType.complete, _constant["default"].method._OnGetSystemInfoCallback);
    }
  };
}

},{"./base":21,"./constant":23}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constant = _interopRequireDefault(require("./constant"));
var _moduleHelper = _interopRequireDefault(require("./module-helper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  QG_OnTouchStart: function QG_OnTouchStart() {
    jsb.onTouchStart(touchResultCallback.onTouchStartCallback);
  },
  QG_OffTouchStart: function QG_OffTouchStart() {
    jsb.offTouchStart(touchResultCallback.onTouchStartCallback);
  },
  QG_OnTouchMove: function QG_OnTouchMove() {
    jsb.onTouchMove(touchResultCallback.onTouchMoveCallback);
  },
  QG_OffTouchMove: function QG_OffTouchMove() {
    jsb.offTouchMove(touchResultCallback.onTouchMoveCallback);
  },
  QG_OnTouchEnd: function QG_OnTouchEnd() {
    jsb.onTouchEnd(touchResultCallback.onTouchEndCallback);
  },
  QG_OffTouchEnd: function QG_OffTouchEnd() {
    jsb.offTouchEnd(touchResultCallback.onTouchEndCallback);
  },
  QG_OnTouchCancel: function QG_OnTouchCancel() {
    jsb.onTouchCancel(touchResultCallback.onTouchCancelCallback);
  },
  QG_OffTouchCancel: function QG_OffTouchCancel() {
    jsb.offTouchCancel(touchResultCallback.onTouchCancelCallback);
  }
};
function formatTouchEvent(v) {
  return {
    identifier: v.identifier,
    clientX: v.clientX * window.devicePixelRatio,
    clientY: (window.innerHeight - v.clientY) * window.devicePixelRatio,
    pageX: v.pageX * window.devicePixelRatio,
    pageY: (window.innerHeight - v.pageY) * window.devicePixelRatio
  };
}
var touchResultCallback = {
  onTouchStartCallback: function onTouchStartCallback(res) {
    var resStr = JSON.stringify({
      touches: res.touches.map(function (v) {
        return formatTouchEvent(v);
      }),
      timeStamp: parseInt(res.timeStamp, 10),
      changedTouches: res.changedTouches.map(function (v) {
        return formatTouchEvent(v);
      })
    });
    _moduleHelper["default"].send(_constant["default"].method._OnTouchStartCallback, resStr);
  },
  onTouchMoveCallback: function onTouchMoveCallback(res) {
    var resStr = JSON.stringify({
      touches: res.touches.map(function (v) {
        return formatTouchEvent(v);
      }),
      timeStamp: parseInt(res.timeStamp, 10),
      changedTouches: res.changedTouches.map(function (v) {
        return formatTouchEvent(v);
      })
    });
    _moduleHelper["default"].send(_constant["default"].method._OnTouchMoveCallback, resStr);
  },
  onTouchEndCallback: function onTouchEndCallback(res) {
    var resStr = JSON.stringify({
      touches: res.touches.map(function (v) {
        return formatTouchEvent(v);
      }),
      timeStamp: parseInt(res.timeStamp, 10),
      changedTouches: res.changedTouches.map(function (v) {
        return formatTouchEvent(v);
      })
    });
    _moduleHelper["default"].send(_constant["default"].method._OnTouchEndCallback, resStr);
  },
  onTouchCancelCallback: function onTouchCancelCallback(res) {
    var resStr = JSON.stringify({
      touches: res.touches.map(function (v) {
        return formatTouchEvent(v);
      }),
      timeStamp: parseInt(res.timeStamp, 10),
      changedTouches: res.changedTouches.map(function (v) {
        return formatTouchEvent(v);
      })
    });
    _moduleHelper["default"].send(_constant["default"].method._OnTouchCancelCallback, resStr);
  }
};

},{"./constant":23,"./module-helper":31}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _CANPLAY_CALLBACK = "canplayCallbacks";
var _ENDED_CALLBACK = "endedCallbacks";
var _ERROR_CALLBACK = "errorCallbacks";
var _PAUSE_CALLBACK = "pauseCallbacks";
var _PLAY_CALLBACK = "playCallbacks";
var _SEEKED_CALLBACK = "seekedCallbacks";
var _SEEKING_CALLBACK = "seekingCallbacks";
var _STOP_CALLBACK = "stopCallbacks";
var _TIME_UPDATE_CALLBACK = "timeUpdateCallbacks";
var _WAITING_CALLBACK = "waitingCallbacks";
var _ERROR_CODE = {
  ERROR_SYSTEM: 10001,
  ERROR_NET: 10002,
  ERROR_FILE: 10003,
  ERROR_FORMAT: 10004,
  ERROR_UNKNOWN: -1
};
var _STATE = {
  ERROR: -1,
  INITIALIZING: 0,
  PLAYING: 1,
  PAUSED: 2
};
var _audioEngine = undefined;
var _weakMap = new WeakMap();
var _offCallback = function _offCallback(target, type, callback) {
  var privateThis = _weakMap.get(target);
  if (typeof callback !== "function" || !privateThis) {
    return -1;
  }
  var callbacks = privateThis[type] || [];
  for (var i = 0, len = callbacks.length; i < len; ++i) {
    if (callback === callbacks[i]) {
      callbacks.splice(i, 1);
      return callback.length + 1;
    }
  }
  return 0;
};
var _onCallback = function _onCallback(target, type, callback) {
  var privateThis = _weakMap.get(target);
  if (typeof callback !== "function" || !privateThis) {
    return -1;
  }
  var callbacks = privateThis[type];
  if (!callbacks) {
    callbacks = privateThis[type] = [callback];
  } else {
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      if (callback === callbacks[i]) {
        return 0;
      }
    }
    callbacks.push(callback);
  }
  return callbacks.length;
};
var _dispatchCallback = function _dispatchCallback(target, type) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var privateThis = _weakMap.get(target);
  if (privateThis) {
    var callbacks = privateThis[type] || [];
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(target, args);
    }
  }
};
function InnerAudioContext() {
  this.startTime = 0;
  this.autoplay = false;
  _weakMap.set(this, {
    src: "",
    volume: 1,
    loop: false,
    seekPosition: -1
  });
  Object.defineProperty(this, "loop", {
    set: function set(value) {
      value = !!value;
      var privateThis = _weakMap.get(this);
      if (privateThis) {
        var audioID = privateThis.audioID;
        if (typeof audioID === "number" && audioID >= 0) {
          _audioEngine.setLoop(audioID, value);
        }
        privateThis.loop = value;
      }
    },
    get: function get() {
      var privateThis = _weakMap.get(this);
      return privateThis ? privateThis.loop : false;
    }
  });
  Object.defineProperty(this, "volume", {
    set: function set(value) {
      if (typeof value === "number") {
        if (value < 0) {
          value = 0;
        } else if (value > 1) {
          value = 1;
        }
      } else {
        value = 1;
      }
      var privateThis = _weakMap.get(this);
      if (privateThis) {
        var audioID = privateThis.audioID;
        if (typeof audioID === "number" && audioID >= 0) {
          _audioEngine.setVolume(audioID, value);
        }
        privateThis.volume = value;
      }
    },
    get: function get() {
      var privateThis = _weakMap.get(this);
      return privateThis ? privateThis.volume : 1;
    }
  });
  Object.defineProperty(this, "src", {
    set: function set(value) {
      var privateThis = _weakMap.get(this);
      if (!privateThis) {
        return;
      }
      var oldSrc = privateThis.src;
      privateThis.src = value;
      if (typeof value === "string") {
        var audioID = privateThis.audioID;
        if (typeof audioID === "number" && audioID >= 0 && _audioEngine.getState(audioID) === _STATE.PAUSED && oldSrc !== value) {
          _audioEngine.stop(audioID);
          privateThis.audioID = -1;
        }
        var self = this;
        _audioEngine.preload(value, function () {
          setTimeout(function () {
            if (self.src === value) {
              _dispatchCallback(self, _CANPLAY_CALLBACK);
              if (self.autoplay) {
                self.play();
              }
            }
          });
        });
      }
    },
    get: function get() {
      var privateThis = _weakMap.get(this);
      return privateThis ? privateThis.src : "";
    }
  });
  Object.defineProperty(this, "duration", {
    get: function get() {
      var privateThis = _weakMap.get(this);
      if (privateThis) {
        var audioID = privateThis.audioID;
        if (typeof audioID === "number" && audioID >= 0) {
          return _audioEngine.getDuration(audioID);
        }
      }
      return NaN;
    },
    set: function set() {}
  });
  Object.defineProperty(this, "currentTime", {
    get: function get() {
      var privateThis = _weakMap.get(this);
      if (privateThis) {
        var audioID = privateThis.audioID;
        if (typeof audioID === "number" && audioID >= 0) {
          return _audioEngine.getCurrentTime(audioID);
        }
      }
      return 0;
    },
    set: function set() {}
  });
  Object.defineProperty(this, "paused", {
    get: function get() {
      var privateThis = _weakMap.get(this);
      if (privateThis) {
        var audioID = privateThis.audioID;
        if (typeof audioID === "number" && audioID >= 0) {
          return _audioEngine.getState(audioID) === _STATE.PAUSED;
        }
      }
      return true;
    },
    set: function set() {}
  });
  Object.defineProperty(this, "buffered", {
    get: function get() {
      var privateThis = _weakMap.get(this);
      if (privateThis) {
        var audioID = privateThis.audioID;
        if (typeof audioID === "number" && audioID >= 0) {
          return _audioEngine.getBuffered(audioID);
        }
      }
      return 0;
    },
    set: function set() {}
  });
}
var _prototype = InnerAudioContext.prototype;
_prototype.destroy = function () {
  var privateThis = _weakMap.get(this);
  if (privateThis) {
    var audioID = privateThis.audioID;
    if (typeof audioID === "number" && audioID >= 0) {
      _audioEngine.stop(audioID);
      privateThis.audioID = -1;
      _dispatchCallback(this, _STOP_CALLBACK);
    }
    privateThis[_CANPLAY_CALLBACK] = [];
    privateThis[_ENDED_CALLBACK] = [];
    privateThis[_ERROR_CALLBACK] = [];
    privateThis[_PAUSE_CALLBACK] = [];
    privateThis[_PLAY_CALLBACK] = [];
    privateThis[_SEEKED_CALLBACK] = [];
    privateThis[_SEEKING_CALLBACK] = [];
    privateThis[_STOP_CALLBACK] = [];
    privateThis[_TIME_UPDATE_CALLBACK] = [];
    privateThis[_WAITING_CALLBACK] = [];
    clearInterval(privateThis.intervalID);
  }
};
_prototype.play = function () {
  var privateThis = _weakMap.get(this);
  if (!privateThis) {
    return;
  }
  var src = privateThis.src;
  var audioID = privateThis.audioID;
  if (typeof src !== "string" || src === "") {
    _dispatchCallback(this, _ERROR_CALLBACK, [{
      errMsg: "invalid src",
      errCode: _ERROR_CODE.ERROR_FILE
    }]);
    return;
  }
  if (typeof audioID === "number" && audioID >= 0) {
    if (_audioEngine.getState(audioID) === _STATE.PAUSED) {
      _audioEngine.resume(audioID);
      _dispatchCallback(this, _PLAY_CALLBACK);
      return;
    } else {
      _audioEngine.stop(audioID);
      privateThis.audioID = -1;
    }
  }
  audioID = _audioEngine.play(src, this.loop, this.volume);
  if (audioID === -1) {
    _dispatchCallback(this, _ERROR_CALLBACK, [{
      errMsg: "unknown",
      errCode: _ERROR_CODE.ERROR_UNKNOWN
    }]);
    return;
  }
  privateThis.audioID = audioID;
  if (privateThis.seekPosition >= 0) {
    _audioEngine.setCurrentTime(audioID, privateThis.seekPosition);
    privateThis.seekPosition = -1;
  } else {
    if (typeof this.startTime === "number" && this.startTime > 0) {
      _audioEngine.setCurrentTime(audioID, this.startTime);
    }
  }
  _dispatchCallback(this, _WAITING_CALLBACK);
  var self = this;
  _audioEngine.setCanPlayCallback(audioID, function () {
    if (src === self.src) {
      _dispatchCallback(self, _CANPLAY_CALLBACK);
      _dispatchCallback(self, _PLAY_CALLBACK);
    }
  });
  _audioEngine.setWaitingCallback(audioID, function () {
    if (src === self.src) {
      _dispatchCallback(self, _WAITING_CALLBACK);
    }
  });
  _audioEngine.setErrorCallback(audioID, function () {
    if (src === self.src) {
      privateThis.audioID = -1;
      _dispatchCallback(self, _ERROR_CALLBACK);
    }
  });
  _audioEngine.setFinishCallback(audioID, function () {
    if (src === self.src) {
      privateThis.audioID = -1;
      _dispatchCallback(self, _ENDED_CALLBACK);
    }
  });
};
_prototype.pause = function () {
  var privateThis = _weakMap.get(this);
  if (privateThis) {
    var audioID = privateThis.audioID;
    if (typeof audioID === "number" && audioID >= 0) {
      _audioEngine.pause(audioID);
      _dispatchCallback(this, _PAUSE_CALLBACK);
    }
  }
};
_prototype.seek = function (position) {
  var privateThis = _weakMap.get(this);
  if (privateThis && typeof position === "number" && position >= 0) {
    var audioID = privateThis.audioID;
    if (typeof audioID === "number" && audioID >= 0) {
      _audioEngine.setCurrentTime(audioID, position);
      _dispatchCallback(this, _SEEKING_CALLBACK);
      _dispatchCallback(this, _SEEKED_CALLBACK);
    } else {
      privateThis.seekPosition = position;
    }
  }
};
_prototype.stop = function () {
  var privateThis = _weakMap.get(this);
  if (privateThis) {
    var audioID = privateThis.audioID;
    if (typeof audioID === "number" && audioID >= 0) {
      _audioEngine.stop(audioID);
      privateThis.audioID = -1;
      _dispatchCallback(this, _STOP_CALLBACK);
    }
  }
};
_prototype.offCanplay = function (callback) {
  _offCallback(this, _CANPLAY_CALLBACK, callback);
};
_prototype.offEnded = function (callback) {
  _offCallback(this, _ENDED_CALLBACK, callback);
};
_prototype.offError = function (callback) {
  _offCallback(this, _ERROR_CALLBACK, callback);
};
_prototype.offPause = function (callback) {
  _offCallback(this, _PAUSE_CALLBACK, callback);
};
_prototype.offPlay = function (callback) {
  _offCallback(this, _PLAY_CALLBACK, callback);
};
_prototype.offSeeked = function (callback) {
  _offCallback(this, _SEEKED_CALLBACK, callback);
};
_prototype.offSeeking = function (callback) {
  _offCallback(this, _SEEKING_CALLBACK, callback);
};
_prototype.offStop = function (callback) {
  _offCallback(this, _STOP_CALLBACK, callback);
};
_prototype.offTimeUpdate = function (callback) {
  var result = _offCallback(this, _TIME_UPDATE_CALLBACK, callback);
  if (result === 1) {
    clearInterval(_weakMap.get(this).intervalID);
  }
};
_prototype.offWaiting = function (callback) {
  _offCallback(this, _WAITING_CALLBACK, callback);
};
_prototype.onCanplay = function (callback) {
  _onCallback(this, _CANPLAY_CALLBACK, callback);
};
_prototype.onEnded = function (callback) {
  _onCallback(this, _ENDED_CALLBACK, callback);
};
_prototype.onError = function (callback) {
  _onCallback(this, _ERROR_CALLBACK, callback);
};
_prototype.onPause = function (callback) {
  _onCallback(this, _PAUSE_CALLBACK, callback);
};
_prototype.onPlay = function (callback) {
  _onCallback(this, _PLAY_CALLBACK, callback);
};
_prototype.onSeeked = function (callback) {
  _onCallback(this, _SEEKED_CALLBACK, callback);
};
_prototype.onSeeking = function (callback) {
  _onCallback(this, "seekingCallbacks", callback);
};
_prototype.onStop = function (callback) {
  _onCallback(this, _STOP_CALLBACK, callback);
};
_prototype.onTimeUpdate = function (callback) {
  var result = _onCallback(this, _TIME_UPDATE_CALLBACK, callback);
  if (result === 1) {
    var privateThis = _weakMap.get(this);
    var self = this;
    var intervalID = setInterval(function () {
      var privateThis = _weakMap.get(self);
      if (privateThis) {
        var audioID = privateThis.audioID;
        if (typeof audioID === "number" && audioID >= 0 && _audioEngine.getState(audioID) === _STATE.PLAYING) {
          _dispatchCallback(self, _TIME_UPDATE_CALLBACK);
        }
      } else {
        clearInterval(intervalID);
      }
    }, 500);
    privateThis.intervalID = intervalID;
  }
};
_prototype.onWaiting = function (callback) {
  _onCallback(this, _WAITING_CALLBACK, callback);
};
function _default(AudioEngine) {
  if (_audioEngine === undefined) {
    _audioEngine = Object.assign({}, AudioEngine);
    Object.keys(AudioEngine).forEach(function (name) {
      if (typeof AudioEngine[name] === "function") {
        AudioEngine[name] = function () {
          console.warn("AudioEngine." + name + " is deprecated");
          return _audioEngine[name].apply(AudioEngine, arguments);
        };
      }
    });
  }
  return new InnerAudioContext();
}
;

},{}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _default = exports["default"] = {
  exportTo: function exportTo(name, from, to, errCallback, successCallback) {
    if (_typeof(from) !== "object" || _typeof(to) !== "object") {
      console.warn("invalid exportTo: ", name);
      return;
    }
    var fromProperty = from[name];
    if (typeof fromProperty !== "undefined") {
      if (typeof fromProperty === "function") {
        to[name] = fromProperty.bind(from);
        Object.assign(to[name], fromProperty);
      } else {
        to[name] = fromProperty;
      }
      if (typeof successCallback === "function") {
        successCallback();
      }
    } else {
      to[name] = function () {
        console.error(name + " is not support!");
        return {};
      };
      if (typeof errCallback === "function") {
        errCallback();
      }
    }
  }
};

},{}]},{},[10]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJyYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9mZWF0dXJlcyA9IHt9O1xudmFyIF9nZXRDYWxsYmFja3MgPSB7fTtcbnZhciBfc2V0Q2FsbGJhY2tzID0ge307XG52YXIgX0ZFQVRVUkVfVU5TVVBQT1JUID0gLTE7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgRkVBVFVSRV9VTlNVUFBPUlQ6IF9GRUFUVVJFX1VOU1VQUE9SVCxcbiAgQ0FOVkFTX0NPTlRFWFQyRF9URVhUQkFTRUxJTkVfQUxQSEFCRVRJQzoge1xuICAgIG5hbWU6IFwiY2FudmFzLmNvbnRleHQyZC50ZXh0YmFzZWxpbmUuYWxwaGFiZXRpY1wiLFxuICAgIGVuYWJsZTogMSxcbiAgICBkaXNhYmxlOiAwXG4gIH0sXG4gIENBTlZBU19DT05URVhUMkRfVEVYVEJBU0VMSU5FX0RFRkFVTFQ6IHtcbiAgICBuYW1lOiBcImNhbnZhcy5jb250ZXh0MmQudGV4dGJhc2VsaW5lLmRlZmF1bHRcIixcbiAgICBhbHBoYWJldGljOiAxLFxuICAgIGJvdHRvbTogMFxuICB9LFxuICBzZXRGZWF0dXJlOiBmdW5jdGlvbiBzZXRGZWF0dXJlKGZlYXR1cmVOYW1lLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICB2YXIgZmVhdHVyZSA9IF9mZWF0dXJlc1tmZWF0dXJlTmFtZV07XG4gICAgaWYgKCFmZWF0dXJlKSB7XG4gICAgICBmZWF0dXJlID0gX2ZlYXR1cmVzW2ZlYXR1cmVOYW1lXSA9IHt9O1xuICAgIH1cbiAgICBmZWF0dXJlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICB9LFxuICBnZXRGZWF0dXJlUHJvcGVydHk6IGZ1bmN0aW9uIGdldEZlYXR1cmVQcm9wZXJ0eShmZWF0dXJlTmFtZSwgcHJvcGVydHkpIHtcbiAgICB2YXIgZmVhdHVyZSA9IF9mZWF0dXJlc1tmZWF0dXJlTmFtZV07XG4gICAgcmV0dXJuIGZlYXR1cmUgPyBmZWF0dXJlW3Byb3BlcnR5XSA6IHVuZGVmaW5lZDtcbiAgfSxcbiAgcmVnaXN0ZXJGZWF0dXJlUHJvcGVydHk6IGZ1bmN0aW9uIHJlZ2lzdGVyRmVhdHVyZVByb3BlcnR5KGtleSwgZ2V0RnVuY3Rpb24sIHNldEZ1bmN0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBnZXRGdW5jdGlvbiAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBzZXRGdW5jdGlvbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZ2V0RnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2dldENhbGxiYWNrc1trZXldID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzZXRGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfc2V0Q2FsbGJhY2tzW2tleV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGdldEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIF9nZXRDYWxsYmFja3Nba2V5XSA9IGdldEZ1bmN0aW9uO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNldEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIF9zZXRDYWxsYmFja3Nba2V5XSA9IHNldEZ1bmN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgdW5yZWdpc3RlckZlYXR1cmVQcm9wZXJ0eTogZnVuY3Rpb24gdW5yZWdpc3RlckZlYXR1cmVQcm9wZXJ0eShrZXksIGdldEJvb2wsIHNldEJvb2wpIHtcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGdldEJvb2wgIT09IFwiYm9vbGVhblwiIHx8IHR5cGVvZiBzZXRCb29sICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZ2V0Qm9vbCA9PT0gdHJ1ZSAmJiB0eXBlb2YgX2dldENhbGxiYWNrc1trZXldID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIF9nZXRDYWxsYmFja3Nba2V5XSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHNldEJvb2wgPT09IHRydWUgJiYgdHlwZW9mIF9zZXRDYWxsYmFja3Nba2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBfc2V0Q2FsbGJhY2tzW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBnZXRGZWF0dXJlUHJvcGVydHlJbnQ6IGZ1bmN0aW9uIGdldEZlYXR1cmVQcm9wZXJ0eUludChrZXkpIHtcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIF9GRUFUVVJFX1VOU1VQUE9SVDtcbiAgICB9XG4gICAgdmFyIGdldEZ1bmN0aW9uID0gX2dldENhbGxiYWNrc1trZXldO1xuICAgIGlmIChnZXRGdW5jdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gX0ZFQVRVUkVfVU5TVVBQT1JUO1xuICAgIH1cbiAgICB2YXIgdmFsdWUgPSBnZXRGdW5jdGlvbigpO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHJldHVybiBfRkVBVFVSRV9VTlNVUFBPUlQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA8IF9GRUFUVVJFX1VOU1VQUE9SVCkge1xuICAgICAgdmFsdWUgPSBfRkVBVFVSRV9VTlNVUFBPUlQ7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgc2V0RmVhdHVyZVByb3BlcnR5SW50OiBmdW5jdGlvbiBzZXRGZWF0dXJlUHJvcGVydHlJbnQoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIiAmJiB2YWx1ZSA8IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHNldEZ1bmN0aW9uID0gX3NldENhbGxiYWNrc1trZXldO1xuICAgIGlmIChzZXRGdW5jdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciByZXR1cm5Db2RlID0gc2V0RnVuY3Rpb24odmFsdWUpO1xuICAgIGlmICh0eXBlb2YgcmV0dXJuQ29kZSAhPT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgcmV0dXJuQ29kZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5Db2RlID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG59O1xuXG59LHt9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX3V0aWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlsXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwib25TaG93XCIsIGhicywgcmFsKTtcbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcIm9uSGlkZVwiLCBoYnMsIHJhbCk7XG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJvZmZTaG93XCIsIGhicywgcmFsKTtcbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcIm9mZkhpZGVcIiwgaGJzLCByYWwpO1xuXG59LHtcIi4uLy4uL3V0aWxcIjozOX1dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdXRpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJ0cmlnZ2VyR0NcIiwgaGJzLCByYWwpO1xuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiZ2V0UGVyZm9ybWFuY2VcIiwgaGJzLCByYWwpO1xuXG59LHtcIi4uLy4uL3V0aWxcIjozOX1dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbnZhciBfbG9hZFN1YnBhY2thZ2UgPSBoYnMubG9hZFN1YnBhY2thZ2UuYmluZChoYnMpO1xucmFsLmxvYWRTdWJwYWNrYWdlID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICB2YXIgb2JqID0gb2JqZWN0O1xuICBpZiAoX3R5cGVvZihvYmplY3QpID09PSBcIm9iamVjdFwiKSB7XG4gICAgb2JqID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqZWN0KTtcbiAgICBvYmouc3VicGFja2FnZSA9IG9iamVjdC5uYW1lO1xuICB9XG4gIHJldHVybiBfbG9hZFN1YnBhY2thZ2UuY2FsbCh0aGlzLCBvYmopO1xufTtcblxufSx7fV0sNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImVudlwiLCBoYnMsIHJhbCk7XG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJnZXRTeXN0ZW1JbmZvXCIsIGhicywgcmFsKTtcbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImdldFN5c3RlbUluZm9TeW5jXCIsIGhicywgcmFsKTtcblxufSx7XCIuLi8uLi91dGlsXCI6Mzl9XSw2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2pzYiA9IHdpbmRvdy5qc2I7XG5pZiAoIV9qc2IpIHtcbiAgX2pzYiA9IHt9O1xufVxudmFyIF90b3VjaGVzID0gW107XG52YXIgX2dldFRvdWNoSW5kZXggPSBmdW5jdGlvbiBfZ2V0VG91Y2hJbmRleCh0b3VjaCkge1xuICB2YXIgZWxlbWVudDtcbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IF90b3VjaGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGVsZW1lbnQgPSBfdG91Y2hlc1tpbmRleF07XG4gICAgaWYgKHRvdWNoLmlkZW50aWZpZXIgPT09IGVsZW1lbnQuaWRlbnRpZmllcikge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59O1xudmFyIF9jb3B5T2JqZWN0ID0gZnVuY3Rpb24gX2NvcHlPYmplY3QoZnJvbU9iaiwgdG9PYmplY3QpIHtcbiAgZm9yICh2YXIga2V5IGluIGZyb21PYmopIHtcbiAgICBpZiAoZnJvbU9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB0b09iamVjdFtrZXldID0gZnJvbU9ialtrZXldO1xuICAgIH1cbiAgfVxufTtcbnZhciBfbGlzdGVuZXJNYXAgPSB7XG4gIFwidG91Y2hzdGFydFwiOiBbXSxcbiAgXCJ0b3VjaG1vdmVcIjogW10sXG4gIFwidG91Y2hlbmRcIjogW10sXG4gIFwidG91Y2hjYW5jZWxcIjogW11cbn07XG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIoa2V5LCB2YWx1ZSkge1xuICB2YXIgbGlzdGVuZXJBcnIgPSBfbGlzdGVuZXJNYXBba2V5XTtcbiAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW5ndGggPSBsaXN0ZW5lckFyci5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgaWYgKHZhbHVlID09PSBsaXN0ZW5lckFycltpbmRleF0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgbGlzdGVuZXJBcnIucHVzaCh2YWx1ZSk7XG59XG5mdW5jdGlvbiBfcmVtb3ZlTGlzdGVuZXIoa2V5LCB2YWx1ZSkge1xuICB2YXIgbGlzdGVuZXJBcnIgPSBfbGlzdGVuZXJNYXBba2V5XSB8fCBbXTtcbiAgdmFyIGxlbmd0aCA9IGxpc3RlbmVyQXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgKytpbmRleCkge1xuICAgIGlmICh2YWx1ZSA9PT0gbGlzdGVuZXJBcnJbaW5kZXhdKSB7XG4gICAgICBsaXN0ZW5lckFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxudmFyIF9oYXNEZWxsV2l0aCA9IGZhbHNlO1xudmFyIF9zeXN0ZW1JbmZvID0gaGJzLmdldFN5c3RlbUluZm9TeW5jKCk7XG5pZiAod2luZG93LmlubmVyV2lkdGggJiYgX3N5c3RlbUluZm8ud2luZG93V2lkdGggIT09IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gIF9oYXNEZWxsV2l0aCA9IHRydWU7XG59XG52YXIgX3RvdWNoRXZlbnRIYW5kbGVyRmFjdG9yeSA9IGZ1bmN0aW9uIF90b3VjaEV2ZW50SGFuZGxlckZhY3RvcnkodHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNoYW5nZWRUb3VjaGVzKSB7XG4gICAgaWYgKHR5cGVvZiBjaGFuZ2VkVG91Y2hlcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBfYWRkTGlzdGVuZXIodHlwZSwgY2hhbmdlZFRvdWNoZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdG91Y2hFdmVudCA9IG5ldyBUb3VjaEV2ZW50KHR5cGUpO1xuICAgIHZhciBpbmRleDtcbiAgICBpZiAodHlwZSA9PT0gXCJ0b3VjaHN0YXJ0XCIpIHtcbiAgICAgIGNoYW5nZWRUb3VjaGVzLmZvckVhY2goZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICAgIGluZGV4ID0gX2dldFRvdWNoSW5kZXgodG91Y2gpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIF9jb3B5T2JqZWN0KHRvdWNoLCBfdG91Y2hlc1tpbmRleF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0bXAgPSB7fTtcbiAgICAgICAgICBfY29weU9iamVjdCh0b3VjaCwgdG1wKTtcbiAgICAgICAgICBfdG91Y2hlcy5wdXNoKHRtcCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ0b3VjaG1vdmVcIikge1xuICAgICAgY2hhbmdlZFRvdWNoZXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpbmRleCA9IF9nZXRUb3VjaEluZGV4KGVsZW1lbnQpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIF9jb3B5T2JqZWN0KGVsZW1lbnQsIF90b3VjaGVzW2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ0b3VjaGVuZFwiIHx8IHR5cGUgPT09IFwidG91Y2hjYW5jZWxcIikge1xuICAgICAgY2hhbmdlZFRvdWNoZXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpbmRleCA9IF9nZXRUb3VjaEluZGV4KGVsZW1lbnQpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIF90b3VjaGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgdG91Y2hlcyA9IFtdLmNvbmNhdChfdG91Y2hlcyk7XG4gICAgdmFyIF9jaGFuZ2VkVG91Y2hlcyA9IFtdO1xuICAgIGNoYW5nZWRUb3VjaGVzLmZvckVhY2goZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gdG91Y2hlcy5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBfaW5kZXggPSAwOyBfaW5kZXggPCBsZW5ndGg7ICsrX2luZGV4KSB7XG4gICAgICAgIHZhciBfdG91Y2ggPSB0b3VjaGVzW19pbmRleF07XG4gICAgICAgIGlmICh0b3VjaC5pZGVudGlmaWVyID09PSBfdG91Y2guaWRlbnRpZmllcikge1xuICAgICAgICAgIF9jaGFuZ2VkVG91Y2hlcy5wdXNoKF90b3VjaCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfY2hhbmdlZFRvdWNoZXMucHVzaCh0b3VjaCk7XG4gICAgfSk7XG4gICAgdG91Y2hFdmVudC50b3VjaGVzID0gdG91Y2hlcztcbiAgICB0b3VjaEV2ZW50LnRhcmdldFRvdWNoZXMgPSB0b3VjaGVzO1xuICAgIHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXMgPSBfY2hhbmdlZFRvdWNoZXM7XG4gICAgaWYgKF9oYXNEZWxsV2l0aCkge1xuICAgICAgdG91Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uICh0b3VjaCkge1xuICAgICAgICB0b3VjaC5jbGllbnRYIC89IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICB0b3VjaC5jbGllbnRZIC89IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICB0b3VjaC5wYWdlWCAvPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgdG91Y2gucGFnZVkgLz0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlID09PSBcInRvdWNoY2FuY2VsXCIgfHwgdHlwZSA9PT0gXCJ0b3VjaGVuZFwiKSB7XG4gICAgICAgIF9jaGFuZ2VkVG91Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uICh0b3VjaCkge1xuICAgICAgICAgIHRvdWNoLmNsaWVudFggLz0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgICAgdG91Y2guY2xpZW50WSAvPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgICB0b3VjaC5wYWdlWCAvPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgICB0b3VjaC5wYWdlWSAvPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBsaXN0ZW5lckFyciA9IF9saXN0ZW5lck1hcFt0eXBlXTtcbiAgICB2YXIgbGVuZ3RoID0gbGlzdGVuZXJBcnIubGVuZ3RoO1xuICAgIGZvciAodmFyIF9pbmRleDIgPSAwOyBfaW5kZXgyIDwgbGVuZ3RoOyBfaW5kZXgyKyspIHtcbiAgICAgIGxpc3RlbmVyQXJyW19pbmRleDJdKHRvdWNoRXZlbnQpO1xuICAgIH1cbiAgfTtcbn07XG5pZiAoaGJzLm9uVG91Y2hTdGFydCkge1xuICByYWwub25Ub3VjaFN0YXJ0ID0gaGJzLm9uVG91Y2hTdGFydDtcbiAgcmFsLm9mZlRvdWNoU3RhcnQgPSBoYnMub2ZmVG91Y2hTdGFydDtcbn0gZWxzZSB7XG4gIF9qc2Iub25Ub3VjaFN0YXJ0ID0gX3RvdWNoRXZlbnRIYW5kbGVyRmFjdG9yeSgndG91Y2hzdGFydCcpO1xuICBfanNiLm9mZlRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBfcmVtb3ZlTGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGNhbGxiYWNrKTtcbiAgfTtcbiAgcmFsLm9uVG91Y2hTdGFydCA9IF9qc2Iub25Ub3VjaFN0YXJ0LmJpbmQoX2pzYik7XG4gIHJhbC5vZmZUb3VjaFN0YXJ0ID0gX2pzYi5vZmZUb3VjaFN0YXJ0LmJpbmQoX2pzYik7XG59XG5pZiAoaGJzLm9uVG91Y2hNb3ZlKSB7XG4gIHJhbC5vblRvdWNoTW92ZSA9IGhicy5vblRvdWNoTW92ZTtcbiAgcmFsLm9mZlRvdWNoTW92ZSA9IGhicy5vZmZUb3VjaE1vdmU7XG59IGVsc2Uge1xuICBfanNiLm9uVG91Y2hNb3ZlID0gX3RvdWNoRXZlbnRIYW5kbGVyRmFjdG9yeSgndG91Y2htb3ZlJyk7XG4gIF9qc2Iub2ZmVG91Y2hNb3ZlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgX3JlbW92ZUxpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGNhbGxiYWNrKTtcbiAgfTtcbiAgcmFsLm9uVG91Y2hNb3ZlID0gX2pzYi5vblRvdWNoTW92ZS5iaW5kKF9qc2IpO1xuICByYWwub2ZmVG91Y2hNb3ZlID0gX2pzYi5vZmZUb3VjaE1vdmUuYmluZChfanNiKTtcbn1cbmlmIChoYnMub25Ub3VjaENhbmNlbCkge1xuICByYWwub25Ub3VjaENhbmNlbCA9IGhicy5vblRvdWNoQ2FuY2VsO1xuICByYWwub2ZmVG91Y2hDYW5jZWwgPSBoYnMub2ZmVG91Y2hDYW5jZWw7XG59IGVsc2Uge1xuICBfanNiLm9uVG91Y2hDYW5jZWwgPSBfdG91Y2hFdmVudEhhbmRsZXJGYWN0b3J5KCd0b3VjaGNhbmNlbCcpO1xuICBfanNiLm9mZlRvdWNoQ2FuY2VsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgX3JlbW92ZUxpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgY2FsbGJhY2spO1xuICB9O1xuICByYWwub25Ub3VjaENhbmNlbCA9IF9qc2Iub25Ub3VjaENhbmNlbC5iaW5kKF9qc2IpO1xuICByYWwub2ZmVG91Y2hDYW5jZWwgPSBfanNiLm9mZlRvdWNoQ2FuY2VsLmJpbmQoX2pzYik7XG59XG5pZiAoaGJzLm9uVG91Y2hFbmQpIHtcbiAgcmFsLm9uVG91Y2hFbmQgPSBoYnMub25Ub3VjaEVuZDtcbiAgcmFsLm9mZlRvdWNoRW5kID0gaGJzLm9mZlRvdWNoRW5kO1xufSBlbHNlIHtcbiAgX2pzYi5vblRvdWNoRW5kID0gX3RvdWNoRXZlbnRIYW5kbGVyRmFjdG9yeSgndG91Y2hlbmQnKTtcbiAgX2pzYi5vZmZUb3VjaEVuZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIF9yZW1vdmVMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGNhbGxiYWNrKTtcbiAgfTtcbiAgcmFsLm9uVG91Y2hFbmQgPSBfanNiLm9uVG91Y2hFbmQuYmluZChfanNiKTtcbiAgcmFsLm9mZlRvdWNoRW5kID0gX2pzYi5vZmZUb3VjaEVuZC5iaW5kKF9qc2IpO1xufVxuXG59LHt9XSw3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2xpc3RlbmVycyA9IFtdO1xucmFsLm9uQWNjZWxlcm9tZXRlckNoYW5nZSA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgbGVuZ3RoID0gX2xpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgKytpbmRleCkge1xuICAgICAgaWYgKGxpc3RlbmVyID09PSBfbGlzdGVuZXJzW2luZGV4XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIF9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gIH1cbn07XG5yYWwub2ZmQWNjZWxlcm9tZXRlckNoYW5nZSA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICB2YXIgbGVuZ3RoID0gX2xpc3RlbmVycy5sZW5ndGg7XG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7ICsraW5kZXgpIHtcbiAgICBpZiAobGlzdGVuZXIgPT09IF9saXN0ZW5lcnNbaW5kZXhdKSB7XG4gICAgICBfbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xudmFyIF9hZGRFdmVudExpc3RlbmVyID0gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIuYmluZCh3aW5kb3cpO1xudmFyIF9vbkFjY2VsZXJvbWV0ZXJDaGFuZ2U7XG5yYWwuc3RhcnRBY2NlbGVyb21ldGVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIV9vbkFjY2VsZXJvbWV0ZXJDaGFuZ2UpIHtcbiAgICBfb25BY2NlbGVyb21ldGVyQ2hhbmdlID0gZnVuY3Rpb24gX29uQWNjZWxlcm9tZXRlckNoYW5nZShldmVudCkge1xuICAgICAgdmFyIGFjY2VsZXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkpO1xuICAgICAgYWNjZWxlcmF0aW9uLnggLz0gLTEwO1xuICAgICAgYWNjZWxlcmF0aW9uLnkgLz0gLTEwO1xuICAgICAgYWNjZWxlcmF0aW9uLnogLz0gLTEwO1xuICAgICAgX2xpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgeDogYWNjZWxlcmF0aW9uLngsXG4gICAgICAgICAgeTogYWNjZWxlcmF0aW9uLnksXG4gICAgICAgICAgejogYWNjZWxlcmF0aW9uLnosXG4gICAgICAgICAgdGltZXN0YW1wOiBldmVudC50aW1lU3RhbXAgfHwgRGF0ZS5ub3coKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgX2FkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2Vtb3Rpb25cIiwgX29uQWNjZWxlcm9tZXRlckNoYW5nZSwgZmFsc2UpO1xuICAgIGpzYi5kZXZpY2Uuc2V0TW90aW9uRW5hYmxlZCh0cnVlKTtcbiAgfVxufTtcbnZhciBfcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyLmJpbmQod2luZG93KTtcbnJhbC5zdG9wQWNjZWxlcm9tZXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKF9vbkFjY2VsZXJvbWV0ZXJDaGFuZ2UpIHtcbiAgICBfcmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRldmljZW1vdGlvblwiLCBfb25BY2NlbGVyb21ldGVyQ2hhbmdlLCBmYWxzZSk7XG4gICAgX29uQWNjZWxlcm9tZXRlckNoYW5nZSA9IG51bGw7XG4gICAganNiLmRldmljZS5zZXRNb3Rpb25FbmFibGVkKGZhbHNlKTtcbiAgfVxufTtcblxufSx7fV0sODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImdldEJhdHRlcnlJbmZvXCIsIGhicywgcmFsKTtcbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImdldEJhdHRlcnlJbmZvU3luY1wiLCBoYnMsIHJhbCk7XG5cbn0se1wiLi4vLi4vdXRpbFwiOjM5fV0sOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImdldEZpbGVTeXN0ZW1NYW5hZ2VyXCIsIGhicywgcmFsKTtcblxufSx7XCIuLi8uLi91dGlsXCI6Mzl9XSwxMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbFwiKSk7XG52YXIgX2ZlYXR1cmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9mZWF0dXJlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuaWYgKHdpbmRvdy5qc2IpIHtcbiAgd2luZG93LnJhbCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbmRvdy5qc2IpO1xufSBlbHNlIHtcbiAgd2luZG93LnJhbCA9IHt9O1xufVxucmVxdWlyZShcIi4vYmFzZS9saWZlY3ljbGVcIik7XG5yZXF1aXJlKFwiLi9iYXNlL3N1YnBhY2thZ2VcIik7XG5yZXF1aXJlKFwiLi9iYXNlL3N5c3RlbS1pbmZvXCIpO1xucmVxdWlyZShcIi4vYmFzZS90b3VjaC1ldmVudFwiKTtcbnJlcXVpcmUoXCIuL2Jhc2UvcGVyZm9ybWFuY2VcIik7XG5yZXF1aXJlKFwiLi9kZXZpY2UvYWNjZWxlcm9tZXRlclwiKTtcbnJlcXVpcmUoXCIuL2RldmljZS9iYXR0ZXJ5XCIpO1xucmVxdWlyZShcIi4vZmlsZS9maWxlLXN5c3RlbS1tYW5hZ2VyXCIpO1xucmVxdWlyZShcIi4vaW50ZXJmYWNlL2tleWJvYXJkXCIpO1xucmVxdWlyZShcIi4vaW50ZXJmYWNlL3dpbmRvd1wiKTtcbnJlcXVpcmUoXCIuL21lZGlhL2F1ZGlvXCIpO1xucmVxdWlyZShcIi4vbmV0d29yay9kb3dubG9hZFwiKTtcbnJlcXVpcmUoXCIuL3JlbmRlcmluZy9jYW52YXNcIik7XG5yZXF1aXJlKFwiLi9yZW5kZXJpbmcvd2ViZ2xcIik7XG5yZXF1aXJlKFwiLi9yZW5kZXJpbmcvZm9udFwiKTtcbnJlcXVpcmUoXCIuL3JlbmRlcmluZy9mcmFtZVwiKTtcbnJlcXVpcmUoXCIuL3JlbmRlcmluZy9pbWFnZVwiKTtcbnJlcXVpcmUoXCIuL3VuaXR5c2RrL2luZGV4XCIpO1xuZm9yICh2YXIga2V5IGluIF9mZWF0dXJlW1wiZGVmYXVsdFwiXSkge1xuICBpZiAoa2V5ID09PSBcInNldEZlYXR1cmVcIiB8fCBrZXkgPT09IFwicmVnaXN0ZXJGZWF0dXJlUHJvcGVydHlcIiB8fCBrZXkgPT09IFwidW5yZWdpc3RlckZlYXR1cmVQcm9wZXJ0eVwiKSB7XG4gICAgY29udGludWU7XG4gIH1cbiAgaWYgKF9mZWF0dXJlW1wiZGVmYXVsdFwiXS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKGtleSwgX2ZlYXR1cmVbXCJkZWZhdWx0XCJdLCByYWwpO1xuICB9XG59XG5cbn0se1wiLi4vZmVhdHVyZVwiOjEsXCIuLi91dGlsXCI6MzksXCIuL2Jhc2UvbGlmZWN5Y2xlXCI6MixcIi4vYmFzZS9wZXJmb3JtYW5jZVwiOjMsXCIuL2Jhc2Uvc3VicGFja2FnZVwiOjQsXCIuL2Jhc2Uvc3lzdGVtLWluZm9cIjo1LFwiLi9iYXNlL3RvdWNoLWV2ZW50XCI6NixcIi4vZGV2aWNlL2FjY2VsZXJvbWV0ZXJcIjo3LFwiLi9kZXZpY2UvYmF0dGVyeVwiOjgsXCIuL2ZpbGUvZmlsZS1zeXN0ZW0tbWFuYWdlclwiOjksXCIuL2ludGVyZmFjZS9rZXlib2FyZFwiOjExLFwiLi9pbnRlcmZhY2Uvd2luZG93XCI6MTIsXCIuL21lZGlhL2F1ZGlvXCI6MTMsXCIuL25ldHdvcmsvZG93bmxvYWRcIjoxNCxcIi4vcmVuZGVyaW5nL2NhbnZhc1wiOjE1LFwiLi9yZW5kZXJpbmcvZm9udFwiOjE2LFwiLi9yZW5kZXJpbmcvZnJhbWVcIjoxNyxcIi4vcmVuZGVyaW5nL2ltYWdlXCI6MTgsXCIuL3JlbmRlcmluZy93ZWJnbFwiOjE5LFwiLi91bml0eXNkay9pbmRleFwiOjI2fV0sMTE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdXRpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJvbktleWJvYXJkSW5wdXRcIiwgaGJzLCByYWwpO1xuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwib25LZXlib2FyZENvbmZpcm1cIiwgaGJzLCByYWwpO1xuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwib25LZXlib2FyZENvbXBsZXRlXCIsIGhicywgcmFsKTtcbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcIm9mZktleWJvYXJkSW5wdXRcIiwgaGJzLCByYWwpO1xuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwib2ZmS2V5Ym9hcmRDb25maXJtXCIsIGhicywgcmFsKTtcbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcIm9mZktleWJvYXJkQ29tcGxldGVcIiwgaGJzLCByYWwpO1xuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiaGlkZUtleWJvYXJkXCIsIGhicywgcmFsKTtcbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcInNob3dLZXlib2FyZFwiLCBoYnMsIHJhbCk7XG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJ1cGRhdGVLZXlib2FyZFwiLCBoYnMsIHJhbCk7XG5cbn0se1wiLi4vLi4vdXRpbFwiOjM5fV0sMTI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfb25XaW5kb3dSZXNpemUgPSBoYnMub25XaW5kb3dSZXNpemU7XG5yYWwub25XaW5kb3dSZXNpemUgPSBmdW5jdGlvbiAoY2FsbEJhY2spIHtcbiAgX29uV2luZG93UmVzaXplKGZ1bmN0aW9uIChzaXplKSB7XG4gICAgY2FsbEJhY2soc2l6ZS53aWR0aCB8fCBzaXplLndpbmRvd1dpZHRoLCBzaXplLmhlaWdodCB8fCBzaXplLndpbmRvd0hlaWdodCk7XG4gIH0pO1xufTtcbndpbmRvdy5yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUud2Fybignd2luZG93LnJlc2l6ZSgpIGlzIGRlcHJlY2F0ZWQnKTtcbn07XG5cbn0se31dLDEzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2lubmVyQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL2lubmVyLWNvbnRleHRcIikpO1xudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcIkF1ZGlvRW5naW5lXCIsIGhicywgcmFsKTtcbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImNyZWF0ZUlubmVyQXVkaW9Db250ZXh0XCIsIGhicywgcmFsLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChoYnMuQXVkaW9FbmdpbmUpIHtcbiAgICByYWwuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKDAsIF9pbm5lckNvbnRleHRbXCJkZWZhdWx0XCJdKShoYnMuQXVkaW9FbmdpbmUpO1xuICAgIH07XG4gIH1cbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGN0eCA9IHJhbC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xuICB2YXIgcHJvdG90eXBlID0gY3R4Ll9fcHJvdG9fXy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIFwiY3VycmVudFRpbWVcIik7XG4gIGlmIChkZXNjKSB7XG4gICAgdmFyIF9nZXQgPSBkZXNjLmdldDtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCBcImN1cnJlbnRUaW1lXCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChfZ2V0LmNhbGwodGhpcykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHZhciBfd2Vha01hcCA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciBvbGRTZWVrID0gcHJvdG90eXBlLnNlZWs7XG4gIHZhciBvbGRQbGF5ID0gcHJvdG90eXBlLnBsYXk7XG4gIHByb3RvdHlwZS5zZWVrID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICBfd2Vha01hcC5zZXQodGhpcywge1xuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgICAgIH0pO1xuICAgIH1cbiAgICBvbGRTZWVrLmNhbGwodGhpcywgcG9zaXRpb24pO1xuICB9O1xuICBwcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBvbGRQbGF5LmNhbGwodGhpcyk7XG4gICAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRoaXMpO1xuICAgIGlmIChwcml2YXRlVGhpcyAmJiBwcml2YXRlVGhpcy5wb3NpdGlvbiA+PSAwKSB7XG4gICAgICBvbGRTZWVrLmNhbGwodGhpcywgcHJpdmF0ZVRoaXMucG9zaXRpb24pO1xuICAgICAgcHJpdmF0ZVRoaXMucG9zaXRpb24gPSAtMTtcbiAgICB9XG4gIH07XG59KTtcblxufSx7XCIuLi8uLi9pbm5lci1jb250ZXh0XCI6MzgsXCIuLi8uLi91dGlsXCI6Mzl9XSwxNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImRvd25sb2FkRmlsZVwiLCBoYnMsIHJhbCk7XG5cbn0se1wiLi4vLi4vdXRpbFwiOjM5fV0sMTU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdXRpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxcIikpO1xudmFyIF9mZWF0dXJlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vZmVhdHVyZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImNyZWF0ZUNhbnZhc1wiLCBoYnMsIHJhbCwgZnVuY3Rpb24gKCkge1xuICB2YXIgZmVhdHVyZVZhbHVlID0gXCJ1bnN1cHBvcnRlZFwiO1xuICBpZiAoZG9jdW1lbnQgJiYgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZlYXR1cmVWYWx1ZSA9IFwid3JhcHBlclwiO1xuICAgIHJhbC5jcmVhdGVDYW52YXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB9O1xuICB9XG4gIF9mZWF0dXJlW1wiZGVmYXVsdFwiXS5zZXRGZWF0dXJlKFwicmFsLmNyZWF0ZUNhbnZhc1wiLCBcInNwZWNcIiwgZmVhdHVyZVZhbHVlKTtcbn0pO1xudmFyIF9oYnNfZ2V0RmVhdHVyZSA9IGhicy5nZXRGZWF0dXJlO1xudmFyIF9oYnNfc2V0RmVhdHVyZSA9IGhicy5zZXRGZWF0dXJlO1xuX2ZlYXR1cmVbXCJkZWZhdWx0XCJdLnJlZ2lzdGVyRmVhdHVyZVByb3BlcnR5KF9mZWF0dXJlW1wiZGVmYXVsdFwiXS5DQU5WQVNfQ09OVEVYVDJEX1RFWFRCQVNFTElORV9BTFBIQUJFVElDLm5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBfaGJzX2dldEZlYXR1cmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciB2YWx1ZSA9IF9oYnNfZ2V0RmVhdHVyZShfZmVhdHVyZVtcImRlZmF1bHRcIl0uQ0FOVkFTX0NPTlRFWFQyRF9URVhUQkFTRUxJTkVfQUxQSEFCRVRJQy5uYW1lKTtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBfZmVhdHVyZVtcImRlZmF1bHRcIl0uQ0FOVkFTX0NPTlRFWFQyRF9URVhUQkFTRUxJTkVfQUxQSEFCRVRJQy5lbmFibGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIF9mZWF0dXJlW1wiZGVmYXVsdFwiXS5GRUFUVVJFX1VOU1VQUE9SVDtcbn0sIHVuZGVmaW5lZCk7XG5fZmVhdHVyZVtcImRlZmF1bHRcIl0ucmVnaXN0ZXJGZWF0dXJlUHJvcGVydHkoX2ZlYXR1cmVbXCJkZWZhdWx0XCJdLkNBTlZBU19DT05URVhUMkRfVEVYVEJBU0VMSU5FX0RFRkFVTFQubmFtZSwgZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIF9oYnNfZ2V0RmVhdHVyZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIHZhbHVlID0gX2hic19nZXRGZWF0dXJlKF9mZWF0dXJlW1wiZGVmYXVsdFwiXS5DQU5WQVNfQ09OVEVYVDJEX1RFWFRCQVNFTElORV9ERUZBVUxULm5hbWUpO1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIF9mZWF0dXJlW1wiZGVmYXVsdFwiXS5DQU5WQVNfQ09OVEVYVDJEX1RFWFRCQVNFTElORV9ERUZBVUxULmFscGhhYmV0aWM7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBfZmVhdHVyZVtcImRlZmF1bHRcIl0uQ0FOVkFTX0NPTlRFWFQyRF9URVhUQkFTRUxJTkVfREVGQVVMVC5ib3R0b207XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIF9mZWF0dXJlW1wiZGVmYXVsdFwiXS5GRUFUVVJFX1VOU1VQUE9SVDtcbn0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIF9oYnNfc2V0RmVhdHVyZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSBfZmVhdHVyZVtcImRlZmF1bHRcIl0uQ0FOVkFTX0NPTlRFWFQyRF9URVhUQkFTRUxJTkVfREVGQVVMVC5hbHBoYWJldGljOlxuICAgICAgICB2YWx1ZSA9IDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBfZmVhdHVyZVtcImRlZmF1bHRcIl0uQ0FOVkFTX0NPTlRFWFQyRF9URVhUQkFTRUxJTkVfREVGQVVMVC5ib3R0b206XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBfaGJzX3NldEZlYXR1cmUoX2ZlYXR1cmVbXCJkZWZhdWx0XCJdLkNBTlZBU19DT05URVhUMkRfVEVYVEJBU0VMSU5FX0RFRkFVTFQubmFtZSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn0pO1xuXG59LHtcIi4uLy4uL2ZlYXR1cmVcIjoxLFwiLi4vLi4vdXRpbFwiOjM5fV0sMTY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdXRpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJsb2FkRm9udFwiLCBoYnMsIHJhbCk7XG5cbn0se1wiLi4vLi4vdXRpbFwiOjM5fV0sMTc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmICh3aW5kb3cuanNiICYmIGpzYi5zZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQpIHtcbiAgcmFsLnNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZCA9IGpzYi5zZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQuYmluZChqc2IpO1xufSBlbHNlIGlmIChoYnMuc2V0UHJlZmVycmVkRnJhbWVzUGVyU2Vjb25kKSB7XG4gIHJhbC5zZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQgPSBoYnMuc2V0UHJlZmVycmVkRnJhbWVzUGVyU2Vjb25kLmJpbmQoaGJzKTtcbn0gZWxzZSB7XG4gIHJhbC5zZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlRoZSBzZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQgaXMgbm90IGRlZmluZSFcIik7XG4gIH07XG59XG5cbn0se31dLDE4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX3V0aWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlsXCIpKTtcbnZhciBfZmVhdHVyZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL2ZlYXR1cmVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJsb2FkSW1hZ2VEYXRhXCIsIGhicywgcmFsLCBmdW5jdGlvbiAoKSB7XG4gIGlmICh3aW5kb3cuanNiICYmIHR5cGVvZiBqc2IubG9hZEltYWdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByYWwubG9hZEltYWdlRGF0YSA9IGpzYi5sb2FkSW1hZ2U7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcImxvYWRJbWFnZURhdGEgaXMgbm90IGZ1bmN0aW9uXCIpO1xuICB9XG59KTtcbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImNyZWF0ZUltYWdlXCIsIGhicywgcmFsLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBmZWF0dXJlVmFsdWUgPSBcInVuc3VwcG9ydGVkXCI7XG4gIGlmIChkb2N1bWVudCAmJiB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZmVhdHVyZVZhbHVlID0gXCJ3cmFwcGVyXCI7XG4gICAgcmFsLmNyZWF0ZUltYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWFnZVwiKTtcbiAgICB9O1xuICB9XG59KTtcbnZhciBmZWF0dXJlVmFsdWUgPSBcImh1YXdlaV9wbGF0Zm9ybV9zdXBwb3J0XCI7XG5fZmVhdHVyZVtcImRlZmF1bHRcIl0uc2V0RmVhdHVyZShcInJhbC5jcmVhdGVJbWFnZVwiLCBcInNwZWNcIiwgZmVhdHVyZVZhbHVlKTtcblxufSx7XCIuLi8uLi9mZWF0dXJlXCI6MSxcIi4uLy4uL3V0aWxcIjozOX1dLDE5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5pZiAod2luZG93Ll9fZ2wpIHtcbiAgdmFyIGdsID0gd2luZG93Ll9fZ2w7XG4gIHZhciBfZ2xUZXhJbWFnZTJEID0gZ2wudGV4SW1hZ2UyRDtcbiAgZ2wudGV4SW1hZ2UyRCA9IGZ1bmN0aW9uICh0YXJnZXQsIGxldmVsLCBpbnRlcm5hbGZvcm1hdCwgd2lkdGgsIGhlaWdodCwgYm9yZGVyLCBmb3JtYXQsIHR5cGUsIHBpeGVscykge1xuICAgIHZhciBhcmdjID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAoYXJnYyA9PT0gNikge1xuICAgICAgdmFyIGltYWdlID0gYm9yZGVyO1xuICAgICAgdHlwZSA9IGhlaWdodDtcbiAgICAgIGZvcm1hdCA9IHdpZHRoO1xuICAgICAgaWYgKGltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICBfZ2xUZXhJbWFnZTJEKHRhcmdldCwgbGV2ZWwsIGltYWdlLl9nbEludGVybmFsRm9ybWF0LCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LCAwLCBpbWFnZS5fZ2xGb3JtYXQsIGltYWdlLl9nbFR5cGUsIGltYWdlLl9kYXRhKTtcbiAgICAgIH0gZWxzZSBpZiAoaW1hZ2UgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICBpZiAoaW1hZ2UuX2NvbnRleHQyRCAmJiBpbWFnZS5fY29udGV4dDJELl9nZXREYXRhKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSBpbWFnZS5fY29udGV4dDJELl9nZXREYXRhKCk7XG4gICAgICAgICAgX2dsVGV4SW1hZ2UyRCh0YXJnZXQsIGxldmVsLCBpbnRlcm5hbGZvcm1hdCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCwgMCwgZm9ybWF0LCB0eXBlLCBkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBpbWFnZSBhcmd1bWVudCBnbC50ZXhJbWFnZTJEIVwiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpbWFnZS5oZWlnaHQgJiYgaW1hZ2Uud2lkdGggJiYgaW1hZ2UuZGF0YSkge1xuICAgICAgICB2YXIgZXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgICBjb25zb2xlLmVycm9yID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgIF9nbFRleEltYWdlMkQodGFyZ2V0LCBsZXZlbCwgaW50ZXJuYWxmb3JtYXQsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsIDAsIGZvcm1hdCwgdHlwZSwgaW1hZ2UuZGF0YSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IgPSBlcnJvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIHBpeGVsIGFyZ3VtZW50IHBhc3NlZCB0byBnbC50ZXhJbWFnZTJEIVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFyZ2MgPT09IDkpIHtcbiAgICAgIF9nbFRleEltYWdlMkQodGFyZ2V0LCBsZXZlbCwgaW50ZXJuYWxmb3JtYXQsIHdpZHRoLCBoZWlnaHQsIGJvcmRlciwgZm9ybWF0LCB0eXBlLCBwaXhlbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiZ2wudGV4SW1hZ2UyRDogaW52YWxpZCBhcmd1bWVudCBjb3VudCFcIik7XG4gICAgfVxuICB9O1xuICB2YXIgX2dsVGV4U3ViSW1hZ2UyRCA9IGdsLnRleFN1YkltYWdlMkQ7XG4gIGdsLnRleFN1YkltYWdlMkQgPSBmdW5jdGlvbiAodGFyZ2V0LCBsZXZlbCwgeG9mZnNldCwgeW9mZnNldCwgd2lkdGgsIGhlaWdodCwgZm9ybWF0LCB0eXBlLCBwaXhlbHMpIHtcbiAgICB2YXIgYXJnYyA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKGFyZ2MgPT09IDcpIHtcbiAgICAgIHZhciBpbWFnZSA9IGZvcm1hdDtcbiAgICAgIHR5cGUgPSBoZWlnaHQ7XG4gICAgICBmb3JtYXQgPSB3aWR0aDtcbiAgICAgIGlmIChpbWFnZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgX2dsVGV4U3ViSW1hZ2UyRCh0YXJnZXQsIGxldmVsLCB4b2Zmc2V0LCB5b2Zmc2V0LCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LCBpbWFnZS5fZ2xGb3JtYXQsIGltYWdlLl9nbFR5cGUsIGltYWdlLl9kYXRhKTtcbiAgICAgIH0gZWxzZSBpZiAoaW1hZ2UgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICBpZiAoaW1hZ2UuX2NvbnRleHQyRCAmJiBpbWFnZS5fY29udGV4dDJELl9nZXREYXRhKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSBpbWFnZS5fY29udGV4dDJELl9nZXREYXRhKCk7XG4gICAgICAgICAgX2dsVGV4U3ViSW1hZ2UyRCh0YXJnZXQsIGxldmVsLCB4b2Zmc2V0LCB5b2Zmc2V0LCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LCBmb3JtYXQsIHR5cGUsIGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGltYWdlIGFyZ3VtZW50IGdsLnRleFN1YkltYWdlMkQhXCIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGltYWdlLmhlaWdodCAmJiBpbWFnZS53aWR0aCAmJiBpbWFnZS5kYXRhKSB7XG4gICAgICAgIHZhciBlcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgX2dsVGV4U3ViSW1hZ2UyRCh0YXJnZXQsIGxldmVsLCB4b2Zmc2V0LCB5b2Zmc2V0LCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LCBmb3JtYXQsIHR5cGUsIGltYWdlLmRhdGEpO1xuICAgICAgICBjb25zb2xlLmVycm9yID0gZXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBwaXhlbCBhcmd1bWVudCBwYXNzZWQgdG8gZ2wudGV4U3ViSW1hZ2UyRCFcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcmdjID09PSA5KSB7XG4gICAgICBfZ2xUZXhTdWJJbWFnZTJEKHRhcmdldCwgbGV2ZWwsIHhvZmZzZXQsIHlvZmZzZXQsIHdpZHRoLCBoZWlnaHQsIGZvcm1hdCwgdHlwZSwgcGl4ZWxzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihuZXcgRXJyb3IoXCJnbC50ZXhJbWFnZTJEOiBpbnZhbGlkIGFyZ3VtZW50IGNvdW50IVwiKS5zdGFjayk7XG4gICAgfVxuICB9O1xufVxuXG59LHt9XSwyMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9iYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iYXNlXCIpKTtcbnZhciBfY29uc3RhbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbnN0YW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gb3duS2V5cyhlLCByKSB7IHZhciB0ID0gT2JqZWN0LmtleXMoZSk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTsgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7IH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pOyB9IHJldHVybiB0OyB9XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKGUpIHsgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHsgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9OyByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBfZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7IH0pOyB9IHJldHVybiBlOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgUUdfR2FtZUxvZ2luOiBmdW5jdGlvbiBRR19HYW1lTG9naW4oY29uZiwgY2FsbGJhY2tJZCkge1xuICAgIHZhciBhcmdzID0gaGFuZGxlTG9naW5DYWxsYmFjayhjYWxsYmFja0lkKTtcbiAgICBxZy5nYW1lTG9naW5XaXRoUmVhbChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF9iYXNlW1wiZGVmYXVsdFwiXS5mb3JtYXRKc29uU3RyKGNvbmYpKSwgYXJncykpO1xuICB9XG59O1xuZnVuY3Rpb24gaGFuZGxlTG9naW5DYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uR2FtZUxvZ2luQ2FsbGJhY2ssIHJlcyk7XG4gICAgfSxcbiAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGRhdGEsIGNvZGUpIHtcbiAgICAgIHZhciBlcnJvciA9IHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgY29kZTogY29kZVxuICAgICAgfTtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuZmFpbCwgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uR2FtZUxvZ2luQ2FsbGJhY2ssIGVycm9yKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5jb21wbGV0ZSwgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uR2FtZUxvZ2luQ2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbn1cblxufSx7XCIuL2Jhc2VcIjoyMSxcIi4vY29uc3RhbnRcIjoyM31dLDIxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX21vZHVsZUhlbHBlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbW9kdWxlLWhlbHBlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICBmb3JtYXRKc29uU3RyOiBmdW5jdGlvbiBmb3JtYXRKc29uU3RyKHN0cikge1xuICAgIGlmICghc3RyKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHZhciBjb25mID0gSlNPTi5wYXJzZShzdHIpO1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29uZik7XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICBpZiAoY29uZlt2XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgY29uZlt2XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY29uZjtcbiAgfSxcbiAgb25DYWxsYmFja1BhcmFtZXRlcjogZnVuY3Rpb24gb25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBjYWxsYmFja1R5cGUsIG1ldGhvZCwgcmVzT2JqKSB7XG4gICAgcmVzT2JqLl9jYWxsYmFja0lkID0gY2FsbGJhY2tJZDtcbiAgICByZXNPYmouX2NhbGxiYWNrVHlwZSA9IGNhbGxiYWNrVHlwZTtcbiAgICBfbW9kdWxlSGVscGVyW1wiZGVmYXVsdFwiXS5zZW5kKG1ldGhvZCwgSlNPTi5zdHJpbmdpZnkocmVzT2JqKSk7XG4gIH0sXG4gIG9uQ2FsbGJhY2tOb1BhcmFtZXRlcjogZnVuY3Rpb24gb25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIGNhbGxiYWNrVHlwZSwgbWV0aG9kKSB7XG4gICAgX21vZHVsZUhlbHBlcltcImRlZmF1bHRcIl0uc2VuZChtZXRob2QsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIF9jYWxsYmFja0lkOiBjYWxsYmFja0lkLFxuICAgICAgX2NhbGxiYWNrVHlwZTogY2FsbGJhY2tUeXBlXG4gICAgfSkpO1xuICB9LFxuICBjYWxsYmFja1R5cGU6IHtcbiAgICBzdWNjZXNzOiAwLFxuICAgIGZhaWw6IDEsXG4gICAgY29tcGxldGU6IDJcbiAgfVxufTtcblxufSx7XCIuL21vZHVsZS1oZWxwZXJcIjozMX1dLDIyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2Jhc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2VcIikpO1xudmFyIF9jb25zdGFudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29uc3RhbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBvd25LZXlzKGUsIHIpIHsgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpOyByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTsgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7IH0gcmV0dXJuIHQ7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQoZSkgeyBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykgeyB2YXIgdCA9IG51bGwgIT0gYXJndW1lbnRzW3JdID8gYXJndW1lbnRzW3JdIDoge307IHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTsgfSk7IH0gcmV0dXJuIGU7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICBRR19HZXRDbGlwYm9hcmREYXRhOiBmdW5jdGlvbiBRR19HZXRDbGlwYm9hcmREYXRhKGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYXJncyA9IGdldENsaXBib2FyZERhdGFDYWxsYmFjayhjYWxsYmFja0lkKTtcbiAgICBxZy5nZXRDbGlwYm9hcmREYXRhKF9vYmplY3RTcHJlYWQoe30sIGFyZ3MpKTtcbiAgfSxcbiAgUUdfU2V0Q2xpcGJvYXJkRGF0YTogZnVuY3Rpb24gUUdfU2V0Q2xpcGJvYXJkRGF0YShjb25mLCBjYWxsYmFja0lkKSB7XG4gICAgdmFyIGFyZ3MgPSBzZXRDbGlwYm9hcmREYXRhQ2FsbGJhY2soY2FsbGJhY2tJZCk7XG4gICAgcWcuc2V0Q2xpcGJvYXJkRGF0YShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF9iYXNlW1wiZGVmYXVsdFwiXS5mb3JtYXRKc29uU3RyKGNvbmYpKSwgYXJncykpO1xuICB9XG59O1xuZnVuY3Rpb24gZ2V0Q2xpcGJvYXJkRGF0YUNhbGxiYWNrKGNhbGxiYWNrSWQpIHtcbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25HZXRDbGlwYm9hcmREYXRhQ2FsbGJhY2ssIHJlcyk7XG4gICAgfSxcbiAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmZhaWwsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbkdldENsaXBib2FyZERhdGFDYWxsYmFjayk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuY29tcGxldGUsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbkdldENsaXBib2FyZERhdGFDYWxsYmFjayk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gc2V0Q2xpcGJvYXJkRGF0YUNhbGxiYWNrKGNhbGxiYWNrSWQpIHtcbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLnN1Y2Nlc3MsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PblNldENsaXBib2FyZERhdGFDYWxsYmFjayk7XG4gICAgfSxcbiAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmZhaWwsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PblNldENsaXBib2FyZERhdGFDYWxsYmFjayk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuY29tcGxldGUsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PblNldENsaXBib2FyZERhdGFDYWxsYmFjayk7XG4gICAgfVxuICB9O1xufVxuXG59LHtcIi4vYmFzZVwiOjIxLFwiLi9jb25zdGFudFwiOjIzfV0sMjM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICBtb2R1bGVOYW1lOiBcIlFHU0RLTWFuYWdlckhhbmRsZXJcIixcbiAgbWV0aG9kOiB7XG4gICAgX09uR2FtZUxvZ2luQ2FsbGJhY2s6IFwiX09uR2FtZUxvZ2luQ2FsbGJhY2tcIixcbiAgICBfUmV3YXJkZWRWaWRlb0FkT25Mb2FkOiBcIl9SZXdhcmRlZFZpZGVvQWRPbkxvYWRcIixcbiAgICBfUmV3YXJkZWRWaWRlb0FkT25DbG9zZTogXCJfUmV3YXJkZWRWaWRlb0FkT25DbG9zZVwiLFxuICAgIF9SZXdhcmRlZFZpZGVvQWRPbkVycm9yOiBcIl9SZXdhcmRlZFZpZGVvQWRPbkVycm9yXCIsXG4gICAgX09uQ3JlYXRlUmV3YXJkZWRWaWRlb0FkQ2FsbGJhY2s6IFwiX09uQ3JlYXRlUmV3YXJkZWRWaWRlb0FkQ2FsbGJhY2tcIixcbiAgICBfT25Jc0VudlJlYWR5Q2FsbGJhY2s6IFwiX09uSXNFbnZSZWFkeUNhbGxiYWNrXCIsXG4gICAgX09uSXNTYW5kYm94QWN0aXZhdGVkQ2FsbGJhY2s6IFwiX09uSXNTYW5kYm94QWN0aXZhdGVkQ2FsbGJhY2tcIixcbiAgICBfT25PYnRhaW5Pd25lZFB1cmNoYXNlc0NhbGxiYWNrOiBcIl9Pbk9idGFpbk93bmVkUHVyY2hhc2VzQ2FsbGJhY2tcIixcbiAgICBfT25PYnRhaW5Qcm9kdWN0SW5mb0NhbGxiYWNrOiBcIl9Pbk9idGFpblByb2R1Y3RJbmZvQ2FsbGJhY2tcIixcbiAgICBfT25DcmVhdGVQdXJjaGFzZUludGVudENhbGxiYWNrOiBcIl9PbkNyZWF0ZVB1cmNoYXNlSW50ZW50Q2FsbGJhY2tcIixcbiAgICBfT25Db25zdW1lT3duZWRQdXJjaGFzZUNhbGxiYWNrOiBcIl9PbkNvbnN1bWVPd25lZFB1cmNoYXNlQ2FsbGJhY2tcIixcbiAgICBfT25PYnRhaW5Pd25lZFB1cmNoYXNlUmVjb3JkQ2FsbGJhY2s6IFwiX09uT2J0YWluT3duZWRQdXJjaGFzZVJlY29yZENhbGxiYWNrXCIsXG4gICAgX09uU3RhcnRJYXBBY3Rpdml0eUNhbGxiYWNrOiBcIl9PblN0YXJ0SWFwQWN0aXZpdHlDYWxsYmFja1wiLFxuICAgIF9PbkhpZGVLZXlib2FyZENhbGxiYWNrOiBcIl9PbkhpZGVLZXlib2FyZENhbGxiYWNrXCIsXG4gICAgX09uU2hvd0tleWJvYXJkQ2FsbGJhY2s6IFwiX09uU2hvd0tleWJvYXJkQ2FsbGJhY2tcIixcbiAgICBfT25VcGRhdGVLZXlib2FyZENhbGxiYWNrOiBcIl9PblVwZGF0ZUtleWJvYXJkQ2FsbGJhY2tcIixcbiAgICBfT25LZXlib2FyZElucHV0Q2FsbGJhY2s6IFwiX09uS2V5Ym9hcmRJbnB1dENhbGxiYWNrXCIsXG4gICAgX09uS2V5Ym9hcmRDb25maXJtQ2FsbGJhY2s6IFwiX09uS2V5Ym9hcmRDb25maXJtQ2FsbGJhY2tcIixcbiAgICBfT25LZXlib2FyZENvbXBsZXRlQ2FsbGJhY2s6IFwiX09uS2V5Ym9hcmRDb21wbGV0ZUNhbGxiYWNrXCIsXG4gICAgX0lubmVyQXVkaW9Db250ZXh0T25FbmRlZDogXCJfSW5uZXJBdWRpb0NvbnRleHRPbkVuZGVkXCIsXG4gICAgX0lubmVyQXVkaW9Db250ZXh0T25QbGF5OiBcIl9Jbm5lckF1ZGlvQ29udGV4dE9uUGxheVwiLFxuICAgIF9Jbm5lckF1ZGlvQ29udGV4dE9uUGF1c2U6IFwiX0lubmVyQXVkaW9Db250ZXh0T25QYXVzZVwiLFxuICAgIF9Jbm5lckF1ZGlvQ29udGV4dE9uU3RvcDogXCJfSW5uZXJBdWRpb0NvbnRleHRPblN0b3BcIixcbiAgICBfSW5uZXJBdWRpb0NvbnRleHRPbkVycm9yOiBcIl9Jbm5lckF1ZGlvQ29udGV4dE9uRXJyb3JcIixcbiAgICBfSW5uZXJBdWRpb0NvbnRleHRPbkNhblBsYXk6IFwiX0lubmVyQXVkaW9Db250ZXh0T25DYW5QbGF5XCIsXG4gICAgX0lubmVyQXVkaW9Db250ZXh0T25XYWl0aW5nOiBcIl9Jbm5lckF1ZGlvQ29udGV4dE9uV2FpdGluZ1wiLFxuICAgIF9Jbm5lckF1ZGlvQ29udGV4dE9uU2Vla2luZzogXCJfSW5uZXJBdWRpb0NvbnRleHRPblNlZWtpbmdcIixcbiAgICBfSW5uZXJBdWRpb0NvbnRleHRPblNlZWtlZDogXCJfSW5uZXJBdWRpb0NvbnRleHRPblNlZWtlZFwiLFxuICAgIF9PbkdldENsaXBib2FyZERhdGFDYWxsYmFjazogXCJfT25HZXRDbGlwYm9hcmREYXRhQ2FsbGJhY2tcIixcbiAgICBfT25TZXRDbGlwYm9hcmREYXRhQ2FsbGJhY2s6IFwiX09uU2V0Q2xpcGJvYXJkRGF0YUNhbGxiYWNrXCIsXG4gICAgX09uVG91Y2hTdGFydENhbGxiYWNrOiBcIl9PblRvdWNoU3RhcnRDYWxsYmFja1wiLFxuICAgIF9PblRvdWNoTW92ZUNhbGxiYWNrOiBcIl9PblRvdWNoTW92ZUNhbGxiYWNrXCIsXG4gICAgX09uVG91Y2hFbmRDYWxsYmFjazogXCJfT25Ub3VjaEVuZENhbGxiYWNrXCIsXG4gICAgX09uVG91Y2hDYW5jZWxDYWxsYmFjazogXCJfT25Ub3VjaENhbmNlbENhbGxiYWNrXCIsXG4gICAgX09uR2V0U3lzdGVtSW5mb0NhbGxiYWNrOiBcIl9PbkdldFN5c3RlbUluZm9DYWxsYmFja1wiLFxuICAgIF9PbkVycm9yQ2FsbGJhY2s6IFwiX09uRXJyb3JDYWxsYmFja1wiLFxuICAgIF9PbkV4aXRBcHBsaWNhdGlvbkNhbGxiYWNrOiBcIl9PbkV4aXRBcHBsaWNhdGlvbkNhbGxiYWNrXCIsXG4gICAgX09uSGlkZUNhbGxiYWNrOiBcIl9PbkhpZGVDYWxsYmFja1wiLFxuICAgIF9PblNob3dDYWxsYmFjazogXCJfT25TaG93Q2FsbGJhY2tcIixcbiAgICBfT25OYXZpZ2F0ZVRvUXVpY2tBcHBDYWxsYmFjazogXCJfT25OYXZpZ2F0ZVRvUXVpY2tBcHBDYWxsYmFja1wiLFxuICAgIF9Pbkhhc1Nob3J0Y3V0SW5zdGFsbGVkQ2FsbGJhY2s6IFwiX09uSGFzU2hvcnRjdXRJbnN0YWxsZWRDYWxsYmFja1wiLFxuICAgIF9Pbkluc3RhbGxTaG9ydGN1dENhbGxiYWNrOiBcIl9Pbkluc3RhbGxTaG9ydGN1dENhbGxiYWNrXCJcbiAgfVxufTtcblxufSx7fV0sMjQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfYmFzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYmFzZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIG93bktleXMoZSwgcikgeyB2YXIgdCA9IE9iamVjdC5rZXlzKGUpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7IHIgJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAocikgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlOyB9KSksIHQucHVzaC5hcHBseSh0LCBvKTsgfSByZXR1cm4gdDsgfVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZChlKSB7IGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7IHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTsgciAlIDIgPyBvd25LZXlzKE9iamVjdCh0KSwgITApLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgX2RlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyhPYmplY3QodCkpLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpOyB9KTsgfSByZXR1cm4gZTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7XG4gIFFHX09wZW5EZWVwbGluazogZnVuY3Rpb24gUUdfT3BlbkRlZXBsaW5rKGNvbmYpIHtcbiAgICBxZy5vcGVuRGVlcGxpbmsoX29iamVjdFNwcmVhZCh7fSwgX2Jhc2VbXCJkZWZhdWx0XCJdLmZvcm1hdEpzb25TdHIoY29uZikpKTtcbiAgfVxufTtcblxufSx7XCIuL2Jhc2VcIjoyMX1dLDI1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgUUdfU2V0UHJlZmVycmVkRnJhbWVzUGVyU2Vjb25kOiBmdW5jdGlvbiBRR19TZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQoZnBzKSB7XG4gICAgcWcuc2V0UHJlZmVycmVkRnJhbWVzUGVyU2Vjb25kKGZwcyk7XG4gIH1cbn07XG5cbn0se31dLDI2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2FjY291bnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2FjY291bnRcIikpO1xudmFyIF9yZXdhcmRlZFZpZGVvQWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Jld2FyZGVkVmlkZW9BZFwiKSk7XG52YXIgX3BheSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGF5XCIpKTtcbnZhciBfa2V5Ym9hcmQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2tleWJvYXJkXCIpKTtcbnZhciBfbG9jYWxTdG9yYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2NhbFN0b3JhZ2VcIikpO1xudmFyIF9mcmFtZVJhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2ZyYW1lUmF0ZVwiKSk7XG52YXIgX2lubmVyQXVkaW9Db250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pbm5lckF1ZGlvQ29udGV4dFwiKSk7XG52YXIgX2NsaXBib2FyZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY2xpcGJvYXJkXCIpKTtcbnZhciBfdG91Y2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3RvdWNoXCIpKTtcbnZhciBfc3lzdGVtSW5mbyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3lzdGVtSW5mb1wiKSk7XG52YXIgX3N5c3RlbUV2ZW50cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3lzdGVtRXZlbnRzXCIpKTtcbnZhciBfbGlmZWN5Y2xlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWZlY3ljbGVcIikpO1xudmFyIF9kZWVwbGluayA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZGVlcGxpbmtcIikpO1xudmFyIF9zaG9ydGN1dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2hvcnRjdXRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5yYWwuUUdfR2FtZUxvZ2luID0gX2FjY291bnRbXCJkZWZhdWx0XCJdLlFHX0dhbWVMb2dpbjtcbnJhbC5RR19DcmVhdGVSZXdhcmRlZFZpZGVvQWQgPSBfcmV3YXJkZWRWaWRlb0FkW1wiZGVmYXVsdFwiXS5RR19DcmVhdGVSZXdhcmRlZFZpZGVvQWQ7XG5yYWwuUUdfUmV3YXJkZWRWaWRlb0FkTG9hZCA9IF9yZXdhcmRlZFZpZGVvQWRbXCJkZWZhdWx0XCJdLlFHX1Jld2FyZGVkVmlkZW9BZExvYWQ7XG5yYWwuUUdfUmV3YXJkZWRWaWRlb0FkU2hvdyA9IF9yZXdhcmRlZFZpZGVvQWRbXCJkZWZhdWx0XCJdLlFHX1Jld2FyZGVkVmlkZW9BZFNob3c7XG5yYWwuUUdfUmV3YXJkZWRWaWRlb0FkRGVzdHJveSA9IF9yZXdhcmRlZFZpZGVvQWRbXCJkZWZhdWx0XCJdLlFHX1Jld2FyZGVkVmlkZW9BZERlc3Ryb3k7XG5yYWwuUUdfU2V0VGFnRm9yQ2hpbGRQcm90ZWN0aW9uID0gX3Jld2FyZGVkVmlkZW9BZFtcImRlZmF1bHRcIl0uUUdfU2V0VGFnRm9yQ2hpbGRQcm90ZWN0aW9uO1xucmFsLlFHX1NldFRhZ0ZvclVuZGVyQWdlT2ZQcm9taXNlID0gX3Jld2FyZGVkVmlkZW9BZFtcImRlZmF1bHRcIl0uUUdfU2V0VGFnRm9yVW5kZXJBZ2VPZlByb21pc2U7XG5yYWwuUUdfU2V0QWRDb250ZW50Q2xhc3NpZmljYXRpb24gPSBfcmV3YXJkZWRWaWRlb0FkW1wiZGVmYXVsdFwiXS5RR19TZXRBZENvbnRlbnRDbGFzc2lmaWNhdGlvbjtcbnJhbC5RR19TZXROb25QZXJzb25hbGl6ZWRBZCA9IF9yZXdhcmRlZFZpZGVvQWRbXCJkZWZhdWx0XCJdLlFHX1NldE5vblBlcnNvbmFsaXplZEFkO1xucmFsLlFHX0lzRW52UmVhZHkgPSBfcGF5W1wiZGVmYXVsdFwiXS5RR19Jc0VudlJlYWR5O1xucmFsLlFHX0lzU2FuZGJveEFjdGl2YXRlZCA9IF9wYXlbXCJkZWZhdWx0XCJdLlFHX0lzU2FuZGJveEFjdGl2YXRlZDtcbnJhbC5RR19PYnRhaW5Pd25lZFB1cmNoYXNlcyA9IF9wYXlbXCJkZWZhdWx0XCJdLlFHX09idGFpbk93bmVkUHVyY2hhc2VzO1xucmFsLlFHX09idGFpblByb2R1Y3RJbmZvID0gX3BheVtcImRlZmF1bHRcIl0uUUdfT2J0YWluUHJvZHVjdEluZm87XG5yYWwuUUdfQ3JlYXRlUHVyY2hhc2VJbnRlbnQgPSBfcGF5W1wiZGVmYXVsdFwiXS5RR19DcmVhdGVQdXJjaGFzZUludGVudDtcbnJhbC5RR19Db25zdW1lT3duZWRQdXJjaGFzZSA9IF9wYXlbXCJkZWZhdWx0XCJdLlFHX0NvbnN1bWVPd25lZFB1cmNoYXNlO1xucmFsLlFHX09idGFpbk93bmVkUHVyY2hhc2VSZWNvcmQgPSBfcGF5W1wiZGVmYXVsdFwiXS5RR19PYnRhaW5Pd25lZFB1cmNoYXNlUmVjb3JkO1xucmFsLlFHX1N0YXJ0SWFwQWN0aXZpdHkgPSBfcGF5W1wiZGVmYXVsdFwiXS5RR19TdGFydElhcEFjdGl2aXR5O1xucmFsLlFHX0hpZGVLZXlib2FyZCA9IF9rZXlib2FyZFtcImRlZmF1bHRcIl0uUUdfSGlkZUtleWJvYXJkO1xucmFsLlFHX1Nob3dLZXlib2FyZCA9IF9rZXlib2FyZFtcImRlZmF1bHRcIl0uUUdfU2hvd0tleWJvYXJkO1xucmFsLlFHX1VwZGF0ZUtleWJvYXJkID0gX2tleWJvYXJkW1wiZGVmYXVsdFwiXS5RR19VcGRhdGVLZXlib2FyZDtcbnJhbC5RR19PbktleWJvYXJkSW5wdXQgPSBfa2V5Ym9hcmRbXCJkZWZhdWx0XCJdLlFHX09uS2V5Ym9hcmRJbnB1dDtcbnJhbC5RR19PZmZLZXlib2FyZElucHV0ID0gX2tleWJvYXJkW1wiZGVmYXVsdFwiXS5RR19PZmZLZXlib2FyZElucHV0O1xucmFsLlFHX09uS2V5Ym9hcmRDb25maXJtID0gX2tleWJvYXJkW1wiZGVmYXVsdFwiXS5RR19PbktleWJvYXJkQ29uZmlybTtcbnJhbC5RR19PZmZLZXlib2FyZENvbmZpcm0gPSBfa2V5Ym9hcmRbXCJkZWZhdWx0XCJdLlFHX09mZktleWJvYXJkQ29uZmlybTtcbnJhbC5RR19PbktleWJvYXJkQ29tcGxldGUgPSBfa2V5Ym9hcmRbXCJkZWZhdWx0XCJdLlFHX09uS2V5Ym9hcmRDb21wbGV0ZTtcbnJhbC5RR19PZmZLZXlib2FyZENvbXBsZXRlID0gX2tleWJvYXJkW1wiZGVmYXVsdFwiXS5RR19PZmZLZXlib2FyZENvbXBsZXRlO1xucmFsLlFHX0xvY2FsU3RvcmFnZUxlbmd0aCA9IF9sb2NhbFN0b3JhZ2VbXCJkZWZhdWx0XCJdLlFHX0xvY2FsU3RvcmFnZUxlbmd0aDtcbnJhbC5RR19Mb2NhbFN0b3JhZ2VDbGVhciA9IF9sb2NhbFN0b3JhZ2VbXCJkZWZhdWx0XCJdLlFHX0xvY2FsU3RvcmFnZUNsZWFyO1xucmFsLlFHX0xvY2FsU3RvcmFnZVJlbW92ZUl0ZW0gPSBfbG9jYWxTdG9yYWdlW1wiZGVmYXVsdFwiXS5RR19Mb2NhbFN0b3JhZ2VSZW1vdmVJdGVtO1xucmFsLlFHX0xvY2FsU3RvcmFnZVNldEl0ZW0gPSBfbG9jYWxTdG9yYWdlW1wiZGVmYXVsdFwiXS5RR19Mb2NhbFN0b3JhZ2VTZXRJdGVtO1xucmFsLlFHX0xvY2FsU3RvcmFnZUdldEl0ZW0gPSBfbG9jYWxTdG9yYWdlW1wiZGVmYXVsdFwiXS5RR19Mb2NhbFN0b3JhZ2VHZXRJdGVtO1xucmFsLlFHX0xvY2FsU3RvcmFnZUtleSA9IF9sb2NhbFN0b3JhZ2VbXCJkZWZhdWx0XCJdLlFHX0xvY2FsU3RvcmFnZUtleTtcbnJhbC5RR19TZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQgPSBfZnJhbWVSYXRlW1wiZGVmYXVsdFwiXS5RR19TZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQ7XG5yYWwuUUdfQ3JlYXRlSW5uZXJBdWRpb0NvbnRleHQgPSBfaW5uZXJBdWRpb0NvbnRleHRbXCJkZWZhdWx0XCJdLlFHX0NyZWF0ZUlubmVyQXVkaW9Db250ZXh0O1xucmFsLlFHX0lubmVyQXVkaW9Db250ZXh0UGxheSA9IF9pbm5lckF1ZGlvQ29udGV4dFtcImRlZmF1bHRcIl0uUUdfSW5uZXJBdWRpb0NvbnRleHRQbGF5O1xucmFsLlFHX0lubmVyQXVkaW9Db250ZXh0UGF1c2UgPSBfaW5uZXJBdWRpb0NvbnRleHRbXCJkZWZhdWx0XCJdLlFHX0lubmVyQXVkaW9Db250ZXh0UGF1c2U7XG5yYWwuUUdfSW5uZXJBdWRpb0NvbnRleHRTdG9wID0gX2lubmVyQXVkaW9Db250ZXh0W1wiZGVmYXVsdFwiXS5RR19Jbm5lckF1ZGlvQ29udGV4dFN0b3A7XG5yYWwuUUdfSW5uZXJBdWRpb0NvbnRleHRTZWVrID0gX2lubmVyQXVkaW9Db250ZXh0W1wiZGVmYXVsdFwiXS5RR19Jbm5lckF1ZGlvQ29udGV4dFNlZWs7XG5yYWwuUUdfSW5uZXJBdWRpb0NvbnRleHREZXN0cm95ID0gX2lubmVyQXVkaW9Db250ZXh0W1wiZGVmYXVsdFwiXS5RR19Jbm5lckF1ZGlvQ29udGV4dERlc3Ryb3k7XG5yYWwuUUdfSW5uZXJBdWRpb0NvbnRleHRTZXRCb29sID0gX2lubmVyQXVkaW9Db250ZXh0W1wiZGVmYXVsdFwiXS5RR19Jbm5lckF1ZGlvQ29udGV4dFNldEJvb2w7XG5yYWwuUUdfSW5uZXJBdWRpb0NvbnRleHRTZXRTdHJpbmcgPSBfaW5uZXJBdWRpb0NvbnRleHRbXCJkZWZhdWx0XCJdLlFHX0lubmVyQXVkaW9Db250ZXh0U2V0U3RyaW5nO1xucmFsLlFHX0lubmVyQXVkaW9Db250ZXh0U2V0RmxvYXQgPSBfaW5uZXJBdWRpb0NvbnRleHRbXCJkZWZhdWx0XCJdLlFHX0lubmVyQXVkaW9Db250ZXh0U2V0RmxvYXQ7XG5yYWwuUUdfSW5uZXJBdWRpb0NvbnRleHRHZXRCb29sID0gX2lubmVyQXVkaW9Db250ZXh0W1wiZGVmYXVsdFwiXS5RR19Jbm5lckF1ZGlvQ29udGV4dEdldEJvb2w7XG5yYWwuUUdfSW5uZXJBdWRpb0NvbnRleHRHZXRTdHJpbmcgPSBfaW5uZXJBdWRpb0NvbnRleHRbXCJkZWZhdWx0XCJdLlFHX0lubmVyQXVkaW9Db250ZXh0R2V0U3RyaW5nO1xucmFsLlFHX0lubmVyQXVkaW9Db250ZXh0R2V0RmxvYXQgPSBfaW5uZXJBdWRpb0NvbnRleHRbXCJkZWZhdWx0XCJdLlFHX0lubmVyQXVkaW9Db250ZXh0R2V0RmxvYXQ7XG5yYWwuUUdfR2V0Q2xpcGJvYXJkRGF0YSA9IF9jbGlwYm9hcmRbXCJkZWZhdWx0XCJdLlFHX0dldENsaXBib2FyZERhdGE7XG5yYWwuUUdfU2V0Q2xpcGJvYXJkRGF0YSA9IF9jbGlwYm9hcmRbXCJkZWZhdWx0XCJdLlFHX1NldENsaXBib2FyZERhdGE7XG5yYWwuUUdfT25Ub3VjaFN0YXJ0ID0gX3RvdWNoW1wiZGVmYXVsdFwiXS5RR19PblRvdWNoU3RhcnQ7XG5yYWwuUUdfT2ZmVG91Y2hTdGFydCA9IF90b3VjaFtcImRlZmF1bHRcIl0uUUdfT2ZmVG91Y2hTdGFydDtcbnJhbC5RR19PblRvdWNoTW92ZSA9IF90b3VjaFtcImRlZmF1bHRcIl0uUUdfT25Ub3VjaE1vdmU7XG5yYWwuUUdfT2ZmVG91Y2hNb3ZlID0gX3RvdWNoW1wiZGVmYXVsdFwiXS5RR19PZmZUb3VjaE1vdmU7XG5yYWwuUUdfT25Ub3VjaEVuZCA9IF90b3VjaFtcImRlZmF1bHRcIl0uUUdfT25Ub3VjaEVuZDtcbnJhbC5RR19PZmZUb3VjaEVuZCA9IF90b3VjaFtcImRlZmF1bHRcIl0uUUdfT2ZmVG91Y2hFbmQ7XG5yYWwuUUdfT25Ub3VjaENhbmNlbCA9IF90b3VjaFtcImRlZmF1bHRcIl0uUUdfT25Ub3VjaENhbmNlbDtcbnJhbC5RR19PZmZUb3VjaENhbmNlbCA9IF90b3VjaFtcImRlZmF1bHRcIl0uUUdfT2ZmVG91Y2hDYW5jZWw7XG5yYWwuUUdfR2V0U3lzdGVtSW5mbyA9IF9zeXN0ZW1JbmZvW1wiZGVmYXVsdFwiXS5RR19HZXRTeXN0ZW1JbmZvO1xucmFsLlFHX0dldFN5c3RlbUluZm9TeW5jID0gX3N5c3RlbUluZm9bXCJkZWZhdWx0XCJdLlFHX0dldFN5c3RlbUluZm9TeW5jO1xucmFsLlFHX09uRXJyb3IgPSBfc3lzdGVtRXZlbnRzW1wiZGVmYXVsdFwiXS5RR19PbkVycm9yO1xucmFsLlFHX09mZkVycm9yID0gX3N5c3RlbUV2ZW50c1tcImRlZmF1bHRcIl0uUUdfT2ZmRXJyb3I7XG5yYWwuUUdfRXhpdEFwcGxpY2F0aW9uID0gX2xpZmVjeWNsZVtcImRlZmF1bHRcIl0uUUdfRXhpdEFwcGxpY2F0aW9uO1xucmFsLlFHX0dldExhdW5jaE9wdGlvbnNTeW5jID0gX2xpZmVjeWNsZVtcImRlZmF1bHRcIl0uUUdfR2V0TGF1bmNoT3B0aW9uc1N5bmM7XG5yYWwuUUdfT25IaWRlID0gX2xpZmVjeWNsZVtcImRlZmF1bHRcIl0uUUdfT25IaWRlO1xucmFsLlFHX09mZkhpZGUgPSBfbGlmZWN5Y2xlW1wiZGVmYXVsdFwiXS5RR19PZmZIaWRlO1xucmFsLlFHX09uU2hvdyA9IF9saWZlY3ljbGVbXCJkZWZhdWx0XCJdLlFHX09uU2hvdztcbnJhbC5RR19PZmZTaG93ID0gX2xpZmVjeWNsZVtcImRlZmF1bHRcIl0uUUdfT2ZmU2hvdztcbnJhbC5RR19OYXZpZ2F0ZVRvUXVpY2tBcHAgPSBfbGlmZWN5Y2xlW1wiZGVmYXVsdFwiXS5RR19OYXZpZ2F0ZVRvUXVpY2tBcHA7XG5yYWwuUUdfT3BlbkRlZXBsaW5rID0gX2RlZXBsaW5rW1wiZGVmYXVsdFwiXS5RR19PcGVuRGVlcGxpbms7XG5yYWwuUUdfSGFzU2hvcnRjdXRJbnN0YWxsZWQgPSBfc2hvcnRjdXRbXCJkZWZhdWx0XCJdLlFHX0hhc1Nob3J0Y3V0SW5zdGFsbGVkO1xucmFsLlFHX0luc3RhbGxTaG9ydGN1dCA9IF9zaG9ydGN1dFtcImRlZmF1bHRcIl0uUUdfSW5zdGFsbFNob3J0Y3V0O1xuXG59LHtcIi4vYWNjb3VudFwiOjIwLFwiLi9jbGlwYm9hcmRcIjoyMixcIi4vZGVlcGxpbmtcIjoyNCxcIi4vZnJhbWVSYXRlXCI6MjUsXCIuL2lubmVyQXVkaW9Db250ZXh0XCI6MjcsXCIuL2tleWJvYXJkXCI6MjgsXCIuL2xpZmVjeWNsZVwiOjI5LFwiLi9sb2NhbFN0b3JhZ2VcIjozMCxcIi4vcGF5XCI6MzIsXCIuL3Jld2FyZGVkVmlkZW9BZFwiOjMzLFwiLi9zaG9ydGN1dFwiOjM0LFwiLi9zeXN0ZW1FdmVudHNcIjozNSxcIi4vc3lzdGVtSW5mb1wiOjM2LFwiLi90b3VjaFwiOjM3fV0sMjc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfYmFzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYmFzZVwiKSk7XG52YXIgX2NvbnN0YW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb25zdGFudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbnZhciBpbm5lckF1ZGlvQ29udGV4dCA9IHt9O1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7XG4gIFFHX0NyZWF0ZUlubmVyQXVkaW9Db250ZXh0OiBmdW5jdGlvbiBRR19DcmVhdGVJbm5lckF1ZGlvQ29udGV4dChjYWxsYmFja0lkKSB7XG4gICAgdmFyIGF1ZGlvID0gcWcuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICBhdWRpby5vbkVuZGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fSW5uZXJBdWRpb0NvbnRleHRPbkVuZGVkKTtcbiAgICB9KTtcbiAgICBhdWRpby5vblBsYXkoZnVuY3Rpb24gKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLnN1Y2Nlc3MsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9Jbm5lckF1ZGlvQ29udGV4dE9uUGxheSk7XG4gICAgfSk7XG4gICAgYXVkaW8ub25QYXVzZShmdW5jdGlvbiAoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX0lubmVyQXVkaW9Db250ZXh0T25QYXVzZSk7XG4gICAgfSk7XG4gICAgYXVkaW8ub25TdG9wKGZ1bmN0aW9uICgpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fSW5uZXJBdWRpb0NvbnRleHRPblN0b3ApO1xuICAgIH0pO1xuICAgIGF1ZGlvLm9uRXJyb3IoZnVuY3Rpb24gKGUpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX0lubmVyQXVkaW9Db250ZXh0T25FcnJvciwgZSk7XG4gICAgfSk7XG4gICAgYXVkaW8ub25DYW5wbGF5KGZ1bmN0aW9uICgpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fSW5uZXJBdWRpb0NvbnRleHRPbkNhblBsYXkpO1xuICAgIH0pO1xuICAgIGF1ZGlvLm9uV2FpdGluZyhmdW5jdGlvbiAoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX0lubmVyQXVkaW9Db250ZXh0T25XYWl0aW5nKTtcbiAgICB9KTtcbiAgICBhdWRpby5vblNlZWtpbmcoZnVuY3Rpb24gKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLnN1Y2Nlc3MsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9Jbm5lckF1ZGlvQ29udGV4dE9uU2Vla2luZyk7XG4gICAgfSk7XG4gICAgYXVkaW8ub25TZWVrZWQoZnVuY3Rpb24gKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLnN1Y2Nlc3MsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9Jbm5lckF1ZGlvQ29udGV4dE9uU2Vla2VkKTtcbiAgICB9KTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dFtjYWxsYmFja0lkXSA9IGF1ZGlvO1xuICB9LFxuICBRR19Jbm5lckF1ZGlvQ29udGV4dFNldEJvb2w6IGZ1bmN0aW9uIFFHX0lubmVyQXVkaW9Db250ZXh0U2V0Qm9vbChrZXksIHZhbHVlLCBjYWxsYmFja0lkKSB7XG4gICAgdmFyIGF1ZGlvID0gaW5uZXJBdWRpb0NvbnRleHRbY2FsbGJhY2tJZF07XG4gICAgaWYgKCFhdWRpbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoa2V5ID09PSBcImF1dG9wbGF5XCIpIHtcbiAgICAgIGF1ZGlvLmF1dG9wbGF5ID0gdmFsdWUgPyB0cnVlIDogZmFsc2U7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwibG9vcFwiKSB7XG4gICAgICBhdWRpby5sb29wID0gdmFsdWUgPyB0cnVlIDogZmFsc2U7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwib2JleU11dGVTd2l0Y2hcIikge1xuICAgICAgYXVkaW8ub2JleU11dGVTd2l0Y2ggPSB2YWx1ZSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gIH0sXG4gIFFHX0lubmVyQXVkaW9Db250ZXh0U2V0U3RyaW5nOiBmdW5jdGlvbiBRR19Jbm5lckF1ZGlvQ29udGV4dFNldFN0cmluZyhrZXksIHZhbHVlLCBjYWxsYmFja0lkKSB7XG4gICAgdmFyIGF1ZGlvID0gaW5uZXJBdWRpb0NvbnRleHRbY2FsbGJhY2tJZF07XG4gICAgaWYgKCFhdWRpbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoa2V5ID09PSBcInNyY1wiKSB7XG4gICAgICBhdWRpby5zcmMgPSB2YWx1ZTtcbiAgICB9XG4gIH0sXG4gIFFHX0lubmVyQXVkaW9Db250ZXh0U2V0RmxvYXQ6IGZ1bmN0aW9uIFFHX0lubmVyQXVkaW9Db250ZXh0U2V0RmxvYXQoa2V5LCB2YWx1ZSwgY2FsbGJhY2tJZCkge1xuICAgIHZhciBhdWRpbyA9IGlubmVyQXVkaW9Db250ZXh0W2NhbGxiYWNrSWRdO1xuICAgIGlmICghYXVkaW8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGtleSA9PT0gXCJzdGFydFRpbWVcIikge1xuICAgICAgYXVkaW8uc3RhcnRUaW1lID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwidm9sdW1lXCIpIHtcbiAgICAgIGF1ZGlvLnZvbHVtZSA9IHZhbHVlO1xuICAgIH1cbiAgfSxcbiAgUUdfSW5uZXJBdWRpb0NvbnRleHRHZXRCb29sOiBmdW5jdGlvbiBRR19Jbm5lckF1ZGlvQ29udGV4dEdldEJvb2woa2V5LCBjYWxsYmFja0lkKSB7XG4gICAgdmFyIGF1ZGlvID0gaW5uZXJBdWRpb0NvbnRleHRbY2FsbGJhY2tJZF07XG4gICAgaWYgKCFhdWRpbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoa2V5ID09PSBcImF1dG9wbGF5XCIpIHtcbiAgICAgIHJldHVybiBhdWRpby5hdXRvcGxheTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJsb29wXCIpIHtcbiAgICAgIHJldHVybiBhdWRpby5sb29wO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIm9iZXlNdXRlU3dpdGNoXCIpIHtcbiAgICAgIHJldHVybiBhdWRpby5vYmV5TXV0ZVN3aXRjaDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJwYXVzZWRcIikge1xuICAgICAgcmV0dXJuIGF1ZGlvLnBhdXNlZDtcbiAgICB9XG4gIH0sXG4gIFFHX0lubmVyQXVkaW9Db250ZXh0R2V0U3RyaW5nOiBmdW5jdGlvbiBRR19Jbm5lckF1ZGlvQ29udGV4dEdldFN0cmluZyhrZXksIGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYXVkaW8gPSBpbm5lckF1ZGlvQ29udGV4dFtjYWxsYmFja0lkXTtcbiAgICBpZiAoIWF1ZGlvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChrZXkgPT09IFwic3JjXCIpIHtcbiAgICAgIHJldHVybiBhdWRpby5zcmM7XG4gICAgfVxuICB9LFxuICBRR19Jbm5lckF1ZGlvQ29udGV4dEdldEZsb2F0OiBmdW5jdGlvbiBRR19Jbm5lckF1ZGlvQ29udGV4dEdldEZsb2F0KGtleSwgY2FsbGJhY2tJZCkge1xuICAgIHZhciBhdWRpbyA9IGlubmVyQXVkaW9Db250ZXh0W2NhbGxiYWNrSWRdO1xuICAgIGlmICghYXVkaW8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGtleSA9PT0gXCJzdGFydFRpbWVcIikge1xuICAgICAgcmV0dXJuIGF1ZGlvLnN0YXJ0VGltZTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJ2b2x1bWVcIikge1xuICAgICAgcmV0dXJuIGF1ZGlvLnZvbHVtZTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJkdXJhdGlvblwiKSB7XG4gICAgICByZXR1cm4gYXVkaW8uZHVyYXRpb247XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiY3VycmVudFRpbWVcIikge1xuICAgICAgcmV0dXJuIGF1ZGlvLmN1cnJlbnRUaW1lO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcImJ1ZmZlcmVkXCIpIHtcbiAgICAgIHJldHVybiBhdWRpby5idWZmZXJlZDtcbiAgICB9XG4gIH0sXG4gIFFHX0lubmVyQXVkaW9Db250ZXh0UGxheTogZnVuY3Rpb24gUUdfSW5uZXJBdWRpb0NvbnRleHRQbGF5KGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYXVkaW8gPSBpbm5lckF1ZGlvQ29udGV4dFtjYWxsYmFja0lkXTtcbiAgICBpZiAoIWF1ZGlvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF1ZGlvLnBsYXkoKTtcbiAgfSxcbiAgUUdfSW5uZXJBdWRpb0NvbnRleHRQYXVzZTogZnVuY3Rpb24gUUdfSW5uZXJBdWRpb0NvbnRleHRQYXVzZShjYWxsYmFja0lkKSB7XG4gICAgdmFyIGF1ZGlvID0gaW5uZXJBdWRpb0NvbnRleHRbY2FsbGJhY2tJZF07XG4gICAgaWYgKCFhdWRpbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhdWRpby5wYXVzZSgpO1xuICB9LFxuICBRR19Jbm5lckF1ZGlvQ29udGV4dFN0b3A6IGZ1bmN0aW9uIFFHX0lubmVyQXVkaW9Db250ZXh0U3RvcChjYWxsYmFja0lkKSB7XG4gICAgdmFyIGF1ZGlvID0gaW5uZXJBdWRpb0NvbnRleHRbY2FsbGJhY2tJZF07XG4gICAgaWYgKCFhdWRpbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhdWRpby5zdG9wKCk7XG4gIH0sXG4gIFFHX0lubmVyQXVkaW9Db250ZXh0U2VlazogZnVuY3Rpb24gUUdfSW5uZXJBdWRpb0NvbnRleHRTZWVrKHBvc2l0aW9uLCBjYWxsYmFja0lkKSB7XG4gICAgdmFyIGF1ZGlvID0gaW5uZXJBdWRpb0NvbnRleHRbY2FsbGJhY2tJZF07XG4gICAgaWYgKCFhdWRpbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhdWRpby5zZWVrKHBvc2l0aW9uKTtcbiAgfSxcbiAgUUdfSW5uZXJBdWRpb0NvbnRleHREZXN0cm95OiBmdW5jdGlvbiBRR19Jbm5lckF1ZGlvQ29udGV4dERlc3Ryb3koY2FsbGJhY2tJZCkge1xuICAgIHZhciBhdWRpbyA9IGlubmVyQXVkaW9Db250ZXh0W2NhbGxiYWNrSWRdO1xuICAgIGlmICghYXVkaW8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXVkaW8uZGVzdHJveSgpO1xuICAgIGRlbGV0ZSBpbm5lckF1ZGlvQ29udGV4dFtjYWxsYmFja0lkXTtcbiAgfVxufTtcblxufSx7XCIuL2Jhc2VcIjoyMSxcIi4vY29uc3RhbnRcIjoyM31dLDI4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2Jhc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2VcIikpO1xudmFyIF9jb25zdGFudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29uc3RhbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBvd25LZXlzKGUsIHIpIHsgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpOyByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTsgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7IH0gcmV0dXJuIHQ7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQoZSkgeyBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykgeyB2YXIgdCA9IG51bGwgIT0gYXJndW1lbnRzW3JdID8gYXJndW1lbnRzW3JdIDoge307IHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTsgfSk7IH0gcmV0dXJuIGU7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICBRR19IaWRlS2V5Ym9hcmQ6IGZ1bmN0aW9uIFFHX0hpZGVLZXlib2FyZChjYWxsYmFja0lkKSB7XG4gICAgdmFyIGFyZ3MgPSBoaWRlS2V5Ym9hcmRDYWxsYmFjayhjYWxsYmFja0lkKTtcbiAgICBxZy5oaWRlS2V5Ym9hcmQoX29iamVjdFNwcmVhZCh7fSwgYXJncykpO1xuICB9LFxuICBRR19TaG93S2V5Ym9hcmQ6IGZ1bmN0aW9uIFFHX1Nob3dLZXlib2FyZChjb25mLCBjYWxsYmFja0lkKSB7XG4gICAgdmFyIGFyZ3MgPSBzaG93S2V5Ym9hcmRDYWxsYmFjayhjYWxsYmFja0lkKTtcbiAgICBxZy5zaG93S2V5Ym9hcmQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfYmFzZVtcImRlZmF1bHRcIl0uZm9ybWF0SnNvblN0cihjb25mKSksIGFyZ3MpKTtcbiAgfSxcbiAgUUdfVXBkYXRlS2V5Ym9hcmQ6IGZ1bmN0aW9uIFFHX1VwZGF0ZUtleWJvYXJkKGNvbmYsIGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYXJncyA9IHVwZGF0ZUtleWJvYXJkQ2FsbGJhY2soY2FsbGJhY2tJZCk7XG4gICAgcWcudXBkYXRlS2V5Ym9hcmQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfYmFzZVtcImRlZmF1bHRcIl0uZm9ybWF0SnNvblN0cihjb25mKSksIGFyZ3MpKTtcbiAgfSxcbiAgUUdfT25LZXlib2FyZElucHV0OiBmdW5jdGlvbiBRR19PbktleWJvYXJkSW5wdXQoKSB7XG4gICAgcWcub25LZXlib2FyZElucHV0KGtleWJvYXJkSW5wdXRDYWxsYmFjay5vbktleWJvYXJkSW5wdXRDYWxsYmFjayk7XG4gIH0sXG4gIFFHX09mZktleWJvYXJkSW5wdXQ6IGZ1bmN0aW9uIFFHX09mZktleWJvYXJkSW5wdXQoKSB7XG4gICAgcWcub2ZmS2V5Ym9hcmRJbnB1dChrZXlib2FyZElucHV0Q2FsbGJhY2sub25LZXlib2FyZElucHV0Q2FsbGJhY2spO1xuICB9LFxuICBRR19PbktleWJvYXJkQ29uZmlybTogZnVuY3Rpb24gUUdfT25LZXlib2FyZENvbmZpcm0oKSB7XG4gICAgcWcub25LZXlib2FyZENvbmZpcm0oa2V5Ym9hcmRJbnB1dENhbGxiYWNrLm9uS2V5Ym9hcmRDb25maXJtQ2FsbGJhY2spO1xuICB9LFxuICBRR19PZmZLZXlib2FyZENvbmZpcm06IGZ1bmN0aW9uIFFHX09mZktleWJvYXJkQ29uZmlybSgpIHtcbiAgICBxZy5vZmZLZXlib2FyZENvbmZpcm0oa2V5Ym9hcmRJbnB1dENhbGxiYWNrLm9uS2V5Ym9hcmRDb25maXJtQ2FsbGJhY2spO1xuICB9LFxuICBRR19PbktleWJvYXJkQ29tcGxldGU6IGZ1bmN0aW9uIFFHX09uS2V5Ym9hcmRDb21wbGV0ZSgpIHtcbiAgICBxZy5vbktleWJvYXJkQ29tcGxldGUoa2V5Ym9hcmRJbnB1dENhbGxiYWNrLm9uS2V5Ym9hcmRDb21wbGV0ZUNhbGxiYWNrKTtcbiAgfSxcbiAgUUdfT2ZmS2V5Ym9hcmRDb21wbGV0ZTogZnVuY3Rpb24gUUdfT2ZmS2V5Ym9hcmRDb21wbGV0ZSgpIHtcbiAgICBxZy5vZmZLZXlib2FyZENvbXBsZXRlKGtleWJvYXJkSW5wdXRDYWxsYmFjay5vbktleWJvYXJkQ29tcGxldGVDYWxsYmFjayk7XG4gIH1cbn07XG5mdW5jdGlvbiBoaWRlS2V5Ym9hcmRDYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25IaWRlS2V5Ym9hcmRDYWxsYmFjayk7XG4gICAgfSxcbiAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmZhaWwsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbkhpZGVLZXlib2FyZENhbGxiYWNrKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5jb21wbGV0ZSwgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uSGlkZUtleWJvYXJkQ2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHNob3dLZXlib2FyZENhbGxiYWNrKGNhbGxiYWNrSWQpIHtcbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLnN1Y2Nlc3MsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PblNob3dLZXlib2FyZENhbGxiYWNrKTtcbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuZmFpbCwgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uU2hvd0tleWJvYXJkQ2FsbGJhY2spO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmNvbXBsZXRlLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25TaG93S2V5Ym9hcmRDYWxsYmFjayk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gdXBkYXRlS2V5Ym9hcmRDYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uVXBkYXRlS2V5Ym9hcmRDYWxsYmFjaywgcmVzKTtcbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwocmVzKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmZhaWwsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PblVwZGF0ZUtleWJvYXJkQ2FsbGJhY2ssIHJlcyk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuY29tcGxldGUsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PblVwZGF0ZUtleWJvYXJkQ2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbn1cbnZhciBrZXlib2FyZElucHV0Q2FsbGJhY2sgPSB7XG4gIG9uS2V5Ym9hcmRJbnB1dENhbGxiYWNrOiBmdW5jdGlvbiBvbktleWJvYXJkSW5wdXRDYWxsYmFjayhyZXMpIHtcbiAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihcIlwiLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLnN1Y2Nlc3MsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbktleWJvYXJkSW5wdXRDYWxsYmFjaywgcmVzKTtcbiAgfSxcbiAgb25LZXlib2FyZENvbmZpcm1DYWxsYmFjazogZnVuY3Rpb24gb25LZXlib2FyZENvbmZpcm1DYWxsYmFjayhyZXMpIHtcbiAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihcIlwiLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLnN1Y2Nlc3MsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbktleWJvYXJkQ29uZmlybUNhbGxiYWNrLCByZXMpO1xuICB9LFxuICBvbktleWJvYXJkQ29tcGxldGVDYWxsYmFjazogZnVuY3Rpb24gb25LZXlib2FyZENvbXBsZXRlQ2FsbGJhY2socmVzKSB7XG4gICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoXCJcIiwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25LZXlib2FyZENvbXBsZXRlQ2FsbGJhY2ssIHJlcyk7XG4gIH1cbn07XG5cbn0se1wiLi9iYXNlXCI6MjEsXCIuL2NvbnN0YW50XCI6MjN9XSwyOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9iYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iYXNlXCIpKTtcbnZhciBfY29uc3RhbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbnN0YW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gb3duS2V5cyhlLCByKSB7IHZhciB0ID0gT2JqZWN0LmtleXMoZSk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTsgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7IH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pOyB9IHJldHVybiB0OyB9XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKGUpIHsgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHsgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9OyByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBfZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7IH0pOyB9IHJldHVybiBlOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgUUdfRXhpdEFwcGxpY2F0aW9uOiBmdW5jdGlvbiBRR19FeGl0QXBwbGljYXRpb24oY2FsbGJhY2tJZCkge1xuICAgIHZhciBhcmdzID0gZXhpdEFwcGxpY2F0aW9uQ2FsbGJhY2soY2FsbGJhY2tJZCk7XG4gICAgcWcuZXhpdEFwcGxpY2F0aW9uKF9vYmplY3RTcHJlYWQoe30sIGFyZ3MpKTtcbiAgfSxcbiAgUUdfR2V0TGF1bmNoT3B0aW9uc1N5bmM6IGZ1bmN0aW9uIFFHX0dldExhdW5jaE9wdGlvbnNTeW5jKCkge1xuICAgIHZhciByZXMgPSBxZy5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXMpO1xuICB9LFxuICBRR19PbkhpZGU6IGZ1bmN0aW9uIFFHX09uSGlkZSgpIHtcbiAgICBxZy5vbkhpZGUobGlmZWN5Y2xlQ2FsbGJhY2sub25IaWRlQ2FsbGJhY2spO1xuICB9LFxuICBRR19PZmZIaWRlOiBmdW5jdGlvbiBRR19PZmZIaWRlKCkge1xuICAgIHFnLm9mZkhpZGUobGlmZWN5Y2xlQ2FsbGJhY2sub25IaWRlQ2FsbGJhY2spO1xuICB9LFxuICBRR19PblNob3c6IGZ1bmN0aW9uIFFHX09uU2hvdygpIHtcbiAgICBxZy5vblNob3cobGlmZWN5Y2xlQ2FsbGJhY2sub25TaG93Q2FsbGJhY2spO1xuICB9LFxuICBRR19PZmZTaG93OiBmdW5jdGlvbiBRR19PZmZTaG93KCkge1xuICAgIHFnLm9mZlNob3cobGlmZWN5Y2xlQ2FsbGJhY2sub25TaG93Q2FsbGJhY2spO1xuICB9LFxuICBRR19OYXZpZ2F0ZVRvUXVpY2tBcHA6IGZ1bmN0aW9uIFFHX05hdmlnYXRlVG9RdWlja0FwcChjb25mLCBjYWxsYmFja0lkKSB7XG4gICAgdmFyIGFyZ3MgPSBuYXZpZ2F0ZVRvUXVpY2tBcHBDYWxsYmFjayhjYWxsYmFja0lkKTtcbiAgICBxZy5uYXZpZ2F0ZVRvUXVpY2tBcHAoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfYmFzZVtcImRlZmF1bHRcIl0uZm9ybWF0SnNvblN0cihjb25mKSksIGFyZ3MpKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGV4aXRBcHBsaWNhdGlvbkNhbGxiYWNrKGNhbGxiYWNrSWQpIHtcbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLnN1Y2Nlc3MsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbkV4aXRBcHBsaWNhdGlvbkNhbGxiYWNrKTtcbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuZmFpbCwgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uRXhpdEFwcGxpY2F0aW9uQ2FsbGJhY2spO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmNvbXBsZXRlLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25FeGl0QXBwbGljYXRpb25DYWxsYmFjayk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gbmF2aWdhdGVUb1F1aWNrQXBwQ2FsbGJhY2soY2FsbGJhY2tJZCkge1xuICByZXR1cm4ge1xuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uTmF2aWdhdGVUb1F1aWNrQXBwQ2FsbGJhY2spO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24gZmFpbCgpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5mYWlsLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25OYXZpZ2F0ZVRvUXVpY2tBcHBDYWxsYmFjayk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuY29tcGxldGUsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9Pbk5hdmlnYXRlVG9RdWlja0FwcENhbGxiYWNrKTtcbiAgICB9XG4gIH07XG59XG52YXIgbGlmZWN5Y2xlQ2FsbGJhY2sgPSB7XG4gIG9uSGlkZUNhbGxiYWNrOiBmdW5jdGlvbiBvbkhpZGVDYWxsYmFjaygpIHtcbiAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKFwiXCIsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uSGlkZUNhbGxiYWNrKTtcbiAgfSxcbiAgb25TaG93Q2FsbGJhY2s6IGZ1bmN0aW9uIG9uU2hvd0NhbGxiYWNrKHJlcykge1xuICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKFwiXCIsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uU2hvd0NhbGxiYWNrLCByZXMpO1xuICB9XG59O1xuXG59LHtcIi4vYmFzZVwiOjIxLFwiLi9jb25zdGFudFwiOjIzfV0sMzA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICBRR19Mb2NhbFN0b3JhZ2VDbGVhcjogZnVuY3Rpb24gUUdfTG9jYWxTdG9yYWdlQ2xlYXIoKSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIH0sXG4gIFFHX0xvY2FsU3RvcmFnZVJlbW92ZUl0ZW06IGZ1bmN0aW9uIFFHX0xvY2FsU3RvcmFnZVJlbW92ZUl0ZW0oa2V5KSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfSxcbiAgUUdfTG9jYWxTdG9yYWdlU2V0SXRlbTogZnVuY3Rpb24gUUdfTG9jYWxTdG9yYWdlU2V0SXRlbShrZXksIHZhbHVlKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gIH0sXG4gIFFHX0xvY2FsU3RvcmFnZUdldEl0ZW06IGZ1bmN0aW9uIFFHX0xvY2FsU3RvcmFnZUdldEl0ZW0oa2V5KSB7XG4gICAgdmFyIGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIHZhciByZXR1cm5TdHI7XG4gICAgaWYgKGRhdGEgPT09IG51bGwpIHtcbiAgICAgIHJldHVyblN0ciA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZXJyQ29kZTogLTFcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm5TdHIgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVyckNvZGU6IDAsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuU3RyO1xuICB9LFxuICBRR19Mb2NhbFN0b3JhZ2VLZXk6IGZ1bmN0aW9uIFFHX0xvY2FsU3RvcmFnZUtleShpbmRleCkge1xuICAgIHZhciBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGluZGV4KTtcbiAgICB2YXIgcmV0dXJuU3RyO1xuICAgIGlmIChrZXkgPT09IG51bGwgfHwga2V5ID09PSBcIlwiKSB7XG4gICAgICByZXR1cm5TdHIgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVyckNvZGU6IC0xXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuU3RyID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlcnJDb2RlOiAwLFxuICAgICAgICBkYXRhOiBrZXlcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuU3RyO1xuICB9LFxuICBRR19Mb2NhbFN0b3JhZ2VMZW5ndGg6IGZ1bmN0aW9uIFFHX0xvY2FsU3RvcmFnZUxlbmd0aCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImxlbmd0aFwiICsgbG9jYWxTdG9yYWdlLmxlbmd0aCk7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gIH1cbn07XG5cbn0se31dLDMxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2NvbnN0YW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb25zdGFudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICBfc2VuZDogbnVsbCxcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0aGlzLl9zZW5kID0gcWcudW5pdHlJbnN0YW5jZS5Nb2R1bGUuU2VuZE1lc3NhZ2U7XG4gIH0sXG4gIHNlbmQ6IGZ1bmN0aW9uIHNlbmQobWV0aG9kLCBzdHIpIHtcbiAgICBpZiAoIXRoaXMuX3NlbmQpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICB0aGlzLl9zZW5kKF9jb25zdGFudFtcImRlZmF1bHRcIl0ubW9kdWxlTmFtZSwgbWV0aG9kLCBzdHIpO1xuICB9XG59O1xuXG59LHtcIi4vY29uc3RhbnRcIjoyM31dLDMyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2Jhc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2VcIikpO1xudmFyIF9jb25zdGFudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29uc3RhbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBvd25LZXlzKGUsIHIpIHsgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpOyByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTsgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7IH0gcmV0dXJuIHQ7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQoZSkgeyBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykgeyB2YXIgdCA9IG51bGwgIT0gYXJndW1lbnRzW3JdID8gYXJndW1lbnRzW3JdIDoge307IHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTsgfSk7IH0gcmV0dXJuIGU7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICBRR19Jc0VudlJlYWR5OiBmdW5jdGlvbiBRR19Jc0VudlJlYWR5KGNvbmYsIGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYXJncyA9IGlzRW52UmVhZHlDYWxsYmFjayhjYWxsYmFja0lkKTtcbiAgICBxZy5pc0VudlJlYWR5KF9vYmplY3RTcHJlYWQoe1xuICAgICAgaXNFbnZSZWFkeVJlcTogX29iamVjdFNwcmVhZCh7fSwgX2Jhc2VbXCJkZWZhdWx0XCJdLmZvcm1hdEpzb25TdHIoY29uZikpXG4gICAgfSwgYXJncykpO1xuICB9LFxuICBRR19Jc1NhbmRib3hBY3RpdmF0ZWQ6IGZ1bmN0aW9uIFFHX0lzU2FuZGJveEFjdGl2YXRlZChjb25mLCBjYWxsYmFja0lkKSB7XG4gICAgdmFyIGFyZ3MgPSBpc1NhbmRib3hBY3RpdmF0ZWRDYWxsYmFjayhjYWxsYmFja0lkKTtcbiAgICBxZy5pc1NhbmRib3hBY3RpdmF0ZWQoX29iamVjdFNwcmVhZCh7XG4gICAgICBpc1NhbmRib3hBY3RpdmF0ZWRSZXE6IF9vYmplY3RTcHJlYWQoe30sIF9iYXNlW1wiZGVmYXVsdFwiXS5mb3JtYXRKc29uU3RyKGNvbmYpKVxuICAgIH0sIGFyZ3MpKTtcbiAgfSxcbiAgUUdfT2J0YWluT3duZWRQdXJjaGFzZXM6IGZ1bmN0aW9uIFFHX09idGFpbk93bmVkUHVyY2hhc2VzKGNvbmYsIGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYXJncyA9IG9idGFpbk93bmVkUHVyY2hhc2VzQ2FsbGJhY2soY2FsbGJhY2tJZCk7XG4gICAgcWcub2J0YWluT3duZWRQdXJjaGFzZXMoX29iamVjdFNwcmVhZCh7XG4gICAgICBvd25lZFB1cmNoYXNlc1JlcTogX29iamVjdFNwcmVhZCh7fSwgX2Jhc2VbXCJkZWZhdWx0XCJdLmZvcm1hdEpzb25TdHIoY29uZikpXG4gICAgfSwgYXJncykpO1xuICB9LFxuICBRR19PYnRhaW5Qcm9kdWN0SW5mbzogZnVuY3Rpb24gUUdfT2J0YWluUHJvZHVjdEluZm8oY29uZiwgY2FsbGJhY2tJZCkge1xuICAgIHZhciBhcmdzID0gb2J0YWluUHJvZHVjdEluZm9DYWxsYmFjayhjYWxsYmFja0lkKTtcbiAgICBxZy5vYnRhaW5Qcm9kdWN0SW5mbyhfb2JqZWN0U3ByZWFkKHtcbiAgICAgIHByb2R1Y3RJbmZvUmVxOiBfb2JqZWN0U3ByZWFkKHt9LCBfYmFzZVtcImRlZmF1bHRcIl0uZm9ybWF0SnNvblN0cihjb25mKSlcbiAgICB9LCBhcmdzKSk7XG4gIH0sXG4gIFFHX0NyZWF0ZVB1cmNoYXNlSW50ZW50OiBmdW5jdGlvbiBRR19DcmVhdGVQdXJjaGFzZUludGVudChjb25mLCBjYWxsYmFja0lkKSB7XG4gICAgdmFyIGFyZ3MgPSBjcmVhdGVQdXJjaGFzZUludGVudENhbGxiYWNrKGNhbGxiYWNrSWQpO1xuICAgIHFnLmNyZWF0ZVB1cmNoYXNlSW50ZW50KF9vYmplY3RTcHJlYWQoe1xuICAgICAgcHVyY2hhc2VJbnRlbnRSZXE6IF9vYmplY3RTcHJlYWQoe30sIF9iYXNlW1wiZGVmYXVsdFwiXS5mb3JtYXRKc29uU3RyKGNvbmYpKVxuICAgIH0sIGFyZ3MpKTtcbiAgfSxcbiAgUUdfQ29uc3VtZU93bmVkUHVyY2hhc2U6IGZ1bmN0aW9uIFFHX0NvbnN1bWVPd25lZFB1cmNoYXNlKGNvbmYsIGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYXJncyA9IGNvbnN1bWVPd25lZFB1cmNoYXNlQ2FsbGJhY2soY2FsbGJhY2tJZCk7XG4gICAgcWcuY29uc3VtZU93bmVkUHVyY2hhc2UoX29iamVjdFNwcmVhZCh7XG4gICAgICBjb25zdW1lT3duZWRQdXJjaGFzZVJlcTogX29iamVjdFNwcmVhZCh7fSwgX2Jhc2VbXCJkZWZhdWx0XCJdLmZvcm1hdEpzb25TdHIoY29uZikpXG4gICAgfSwgYXJncykpO1xuICB9LFxuICBRR19PYnRhaW5Pd25lZFB1cmNoYXNlUmVjb3JkOiBmdW5jdGlvbiBRR19PYnRhaW5Pd25lZFB1cmNoYXNlUmVjb3JkKGNvbmYsIGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYXJncyA9IG9idGFpbk93bmVkUHVyY2hhc2VSZWNvcmRDYWxsYmFjayhjYWxsYmFja0lkKTtcbiAgICBxZy5vYnRhaW5Pd25lZFB1cmNoYXNlUmVjb3JkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgb3duZWRQdXJjaGFzZXNSZWNvcmRSZXE6IF9vYmplY3RTcHJlYWQoe30sIF9iYXNlW1wiZGVmYXVsdFwiXS5mb3JtYXRKc29uU3RyKGNvbmYpKVxuICAgIH0sIGFyZ3MpKTtcbiAgfSxcbiAgUUdfU3RhcnRJYXBBY3Rpdml0eTogZnVuY3Rpb24gUUdfU3RhcnRJYXBBY3Rpdml0eShjb25mLCBjYWxsYmFja0lkKSB7XG4gICAgdmFyIGFyZ3MgPSBzdGFydElhcEFjdGl2aXR5Q2FsbGJhY2soY2FsbGJhY2tJZCk7XG4gICAgcWcuc3RhcnRJYXBBY3Rpdml0eShfb2JqZWN0U3ByZWFkKHtcbiAgICAgIHN0YXJ0SWFwQWN0aXZpdHlSZXE6IF9vYmplY3RTcHJlYWQoe30sIF9iYXNlW1wiZGVmYXVsdFwiXS5mb3JtYXRKc29uU3RyKGNvbmYpKVxuICAgIH0sIGFyZ3MpKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGlzRW52UmVhZHlDYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uSXNFbnZSZWFkeUNhbGxiYWNrLCByZXMpO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24gZmFpbChkYXRhLCBjb2RlKSB7XG4gICAgICB2YXIgZXJyb3IgPSB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGNvZGU6IGNvZGVcbiAgICAgIH07XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmZhaWwsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbklzRW52UmVhZHlDYWxsYmFjaywgZXJyb3IpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmNvbXBsZXRlLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25Jc0VudlJlYWR5Q2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGlzU2FuZGJveEFjdGl2YXRlZENhbGxiYWNrKGNhbGxiYWNrSWQpIHtcbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25Jc1NhbmRib3hBY3RpdmF0ZWRDYWxsYmFjaywgcmVzKTtcbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZGF0YSwgY29kZSkge1xuICAgICAgdmFyIGVycm9yID0ge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBjb2RlOiBjb2RlXG4gICAgICB9O1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5mYWlsLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25Jc1NhbmRib3hBY3RpdmF0ZWRDYWxsYmFjaywgZXJyb3IpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmNvbXBsZXRlLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25Jc1NhbmRib3hBY3RpdmF0ZWRDYWxsYmFjayk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gb2J0YWluT3duZWRQdXJjaGFzZXNDYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uT2J0YWluT3duZWRQdXJjaGFzZXNDYWxsYmFjaywgcmVzKTtcbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZGF0YSwgY29kZSkge1xuICAgICAgdmFyIGVycm9yID0ge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBjb2RlOiBjb2RlXG4gICAgICB9O1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5mYWlsLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25PYnRhaW5Pd25lZFB1cmNoYXNlc0NhbGxiYWNrLCBlcnJvcik7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuY29tcGxldGUsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9Pbk9idGFpbk93bmVkUHVyY2hhc2VzQ2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIG9idGFpblByb2R1Y3RJbmZvQ2FsbGJhY2soY2FsbGJhY2tJZCkge1xuICByZXR1cm4ge1xuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLnN1Y2Nlc3MsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9Pbk9idGFpblByb2R1Y3RJbmZvQ2FsbGJhY2ssIHJlcyk7XG4gICAgfSxcbiAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGRhdGEsIGNvZGUpIHtcbiAgICAgIHZhciBlcnJvciA9IHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgY29kZTogY29kZVxuICAgICAgfTtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuZmFpbCwgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uT2J0YWluUHJvZHVjdEluZm9DYWxsYmFjaywgZXJyb3IpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmNvbXBsZXRlLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25PYnRhaW5Qcm9kdWN0SW5mb0NhbGxiYWNrKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVQdXJjaGFzZUludGVudENhbGxiYWNrKGNhbGxiYWNrSWQpIHtcbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25DcmVhdGVQdXJjaGFzZUludGVudENhbGxiYWNrLCByZXMpO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24gZmFpbChkYXRhLCBjb2RlKSB7XG4gICAgICB2YXIgZXJyb3IgPSB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGNvZGU6IGNvZGVcbiAgICAgIH07XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmZhaWwsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbkNyZWF0ZVB1cmNoYXNlSW50ZW50Q2FsbGJhY2ssIGVycm9yKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5jb21wbGV0ZSwgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uQ3JlYXRlUHVyY2hhc2VJbnRlbnRDYWxsYmFjayk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gY29uc3VtZU93bmVkUHVyY2hhc2VDYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uQ29uc3VtZU93bmVkUHVyY2hhc2VDYWxsYmFjaywgcmVzKTtcbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZGF0YSwgY29kZSkge1xuICAgICAgdmFyIGVycm9yID0ge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBjb2RlOiBjb2RlXG4gICAgICB9O1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5mYWlsLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25Db25zdW1lT3duZWRQdXJjaGFzZUNhbGxiYWNrLCBlcnJvcik7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuY29tcGxldGUsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbkNvbnN1bWVPd25lZFB1cmNoYXNlQ2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIG9idGFpbk93bmVkUHVyY2hhc2VSZWNvcmRDYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uT2J0YWluT3duZWRQdXJjaGFzZVJlY29yZENhbGxiYWNrLCByZXMpO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24gZmFpbChkYXRhLCBjb2RlKSB7XG4gICAgICB2YXIgZXJyb3IgPSB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGNvZGU6IGNvZGVcbiAgICAgIH07XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmZhaWwsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9Pbk9idGFpbk93bmVkUHVyY2hhc2VSZWNvcmRDYWxsYmFjaywgZXJyb3IpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmNvbXBsZXRlLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25PYnRhaW5Pd25lZFB1cmNoYXNlUmVjb3JkQ2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHN0YXJ0SWFwQWN0aXZpdHlDYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25TdGFydElhcEFjdGl2aXR5Q2FsbGJhY2spO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24gZmFpbChkYXRhLCBjb2RlKSB7XG4gICAgICB2YXIgZXJyb3IgPSB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGNvZGU6IGNvZGVcbiAgICAgIH07XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmZhaWwsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PblN0YXJ0SWFwQWN0aXZpdHlDYWxsYmFjaywgZXJyb3IpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmNvbXBsZXRlLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25TdGFydElhcEFjdGl2aXR5Q2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbn1cblxufSx7XCIuL2Jhc2VcIjoyMSxcIi4vY29uc3RhbnRcIjoyM31dLDMzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2Jhc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2VcIikpO1xudmFyIF9jb25zdGFudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29uc3RhbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBvd25LZXlzKGUsIHIpIHsgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpOyByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTsgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7IH0gcmV0dXJuIHQ7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQoZSkgeyBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykgeyB2YXIgdCA9IG51bGwgIT0gYXJndW1lbnRzW3JdID8gYXJndW1lbnRzW3JdIDoge307IHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTsgfSk7IH0gcmV0dXJuIGU7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbnZhciByZXdhcmRlZFZpZGVvQWRzID0ge307XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgUUdfQ3JlYXRlUmV3YXJkZWRWaWRlb0FkOiBmdW5jdGlvbiBRR19DcmVhdGVSZXdhcmRlZFZpZGVvQWQoY29uZiwgY2FsbGJhY2tJZCkge1xuICAgIHZhciBhcmdzID0gaGFuZGxlQ3JlYXRlUmV3YXJkZWRWaWRlb0FkQ2FsbGJhY2soY2FsbGJhY2tJZCk7XG4gICAgdmFyIGFkID0gcWcuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX2Jhc2VbXCJkZWZhdWx0XCJdLmZvcm1hdEpzb25TdHIoY29uZikpLCBhcmdzKSk7XG4gICAgYWQub2ZmTG9hZChudWxsKTtcbiAgICBhZC5vZmZFcnJvcihudWxsKTtcbiAgICBhZC5vZmZDbG9zZShudWxsKTtcbiAgICBhZC5vbkxvYWQoZnVuY3Rpb24gKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLnN1Y2Nlc3MsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9SZXdhcmRlZFZpZGVvQWRPbkxvYWQpO1xuICAgIH0pO1xuICAgIGFkLm9uQ2xvc2UoZnVuY3Rpb24gKHJlcykge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fUmV3YXJkZWRWaWRlb0FkT25DbG9zZSwgcmVzKTtcbiAgICB9KTtcbiAgICBhZC5vbkVycm9yKGZ1bmN0aW9uIChlKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLnN1Y2Nlc3MsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9SZXdhcmRlZFZpZGVvQWRPbkVycm9yLCBlKTtcbiAgICB9KTtcbiAgICByZXdhcmRlZFZpZGVvQWRzW2NhbGxiYWNrSWRdID0gYWQ7XG4gIH0sXG4gIFFHX1Jld2FyZGVkVmlkZW9BZExvYWQ6IGZ1bmN0aW9uIFFHX1Jld2FyZGVkVmlkZW9BZExvYWQoY2FsbGJhY2tJZCkge1xuICAgIHZhciBhZCA9IHJld2FyZGVkVmlkZW9BZHNbY2FsbGJhY2tJZF07XG4gICAgaWYgKCFhZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhZC5sb2FkKCk7XG4gIH0sXG4gIFFHX1Jld2FyZGVkVmlkZW9BZFNob3c6IGZ1bmN0aW9uIFFHX1Jld2FyZGVkVmlkZW9BZFNob3coY2FsbGJhY2tJZCkge1xuICAgIHZhciBhZCA9IHJld2FyZGVkVmlkZW9BZHNbY2FsbGJhY2tJZF07XG4gICAgaWYgKCFhZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhZC5zaG93KCk7XG4gIH0sXG4gIFFHX1Jld2FyZGVkVmlkZW9BZERlc3Ryb3k6IGZ1bmN0aW9uIFFHX1Jld2FyZGVkVmlkZW9BZERlc3Ryb3koY2FsbGJhY2tJZCkge1xuICAgIHZhciBhZCA9IHJld2FyZGVkVmlkZW9BZHNbY2FsbGJhY2tJZF07XG4gICAgaWYgKCFhZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhZC5kZXN0cm95KCk7XG4gICAgZGVsZXRlIHJld2FyZGVkVmlkZW9BZHNbY2FsbGJhY2tJZF07XG4gIH0sXG4gIFFHX1NldFRhZ0ZvckNoaWxkUHJvdGVjdGlvbjogZnVuY3Rpb24gUUdfU2V0VGFnRm9yQ2hpbGRQcm90ZWN0aW9uKGNvbmYsIGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYWQgPSByZXdhcmRlZFZpZGVvQWRzW2NhbGxiYWNrSWRdO1xuICAgIGlmICghYWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWQuc2V0VGFnRm9yQ2hpbGRQcm90ZWN0aW9uKF9iYXNlW1wiZGVmYXVsdFwiXS5mb3JtYXRKc29uU3RyKGNvbmYpLmNoaWxkUHJvdGVjdGlvbik7XG4gIH0sXG4gIFFHX1NldFRhZ0ZvclVuZGVyQWdlT2ZQcm9taXNlOiBmdW5jdGlvbiBRR19TZXRUYWdGb3JVbmRlckFnZU9mUHJvbWlzZShjb25mLCBjYWxsYmFja0lkKSB7XG4gICAgdmFyIGFkID0gcmV3YXJkZWRWaWRlb0Fkc1tjYWxsYmFja0lkXTtcbiAgICBpZiAoIWFkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFkLnNldFRhZ0ZvclVuZGVyQWdlT2ZQcm9taXNlKF9iYXNlW1wiZGVmYXVsdFwiXS5mb3JtYXRKc29uU3RyKGNvbmYpLnVuZGVyQWdlT2ZQcm9taXNlU3RyKTtcbiAgfSxcbiAgUUdfU2V0QWRDb250ZW50Q2xhc3NpZmljYXRpb246IGZ1bmN0aW9uIFFHX1NldEFkQ29udGVudENsYXNzaWZpY2F0aW9uKGNvbmYsIGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYWQgPSByZXdhcmRlZFZpZGVvQWRzW2NhbGxiYWNrSWRdO1xuICAgIGlmICghYWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWQuc2V0QWRDb250ZW50Q2xhc3NpZmljYXRpb24oX2Jhc2VbXCJkZWZhdWx0XCJdLmZvcm1hdEpzb25TdHIoY29uZikuYWRDb250ZW50Q2xhc3NpZmljYXRpb24pO1xuICB9LFxuICBRR19TZXROb25QZXJzb25hbGl6ZWRBZDogZnVuY3Rpb24gUUdfU2V0Tm9uUGVyc29uYWxpemVkQWQoY29uZiwgY2FsbGJhY2tJZCkge1xuICAgIHZhciBhZCA9IHJld2FyZGVkVmlkZW9BZHNbY2FsbGJhY2tJZF07XG4gICAgaWYgKCFhZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhZC5zZXROb25QZXJzb25hbGl6ZWRBZChfYmFzZVtcImRlZmF1bHRcIl0uZm9ybWF0SnNvblN0cihjb25mKS5wZXJzb25hbGl6ZWRBZCk7XG4gIH1cbn07XG5mdW5jdGlvbiBoYW5kbGVDcmVhdGVSZXdhcmRlZFZpZGVvQWRDYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2Vzcyhjb2RlKSB7XG4gICAgICB2YXIgcmVzID0ge1xuICAgICAgICBjb2RlOiBjb2RlXG4gICAgICB9O1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25DcmVhdGVSZXdhcmRlZFZpZGVvQWRDYWxsYmFjaywgcmVzKTtcbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZGF0YSwgY29kZSkge1xuICAgICAgdmFyIGVycm9yID0ge1xuICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9O1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5mYWlsLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25DcmVhdGVSZXdhcmRlZFZpZGVvQWRDYWxsYmFjaywgZXJyb3IpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmNvbXBsZXRlLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25DcmVhdGVSZXdhcmRlZFZpZGVvQWRDYWxsYmFjayk7XG4gICAgfVxuICB9O1xufVxuXG59LHtcIi4vYmFzZVwiOjIxLFwiLi9jb25zdGFudFwiOjIzfV0sMzQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfYmFzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYmFzZVwiKSk7XG52YXIgX2NvbnN0YW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb25zdGFudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIG93bktleXMoZSwgcikgeyB2YXIgdCA9IE9iamVjdC5rZXlzKGUpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7IHIgJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAocikgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlOyB9KSksIHQucHVzaC5hcHBseSh0LCBvKTsgfSByZXR1cm4gdDsgfVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZChlKSB7IGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7IHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTsgciAlIDIgPyBvd25LZXlzKE9iamVjdCh0KSwgITApLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgX2RlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyhPYmplY3QodCkpLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpOyB9KTsgfSByZXR1cm4gZTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7XG4gIFFHX0hhc1Nob3J0Y3V0SW5zdGFsbGVkOiBmdW5jdGlvbiBRR19IYXNTaG9ydGN1dEluc3RhbGxlZChjYWxsYmFja0lkKSB7XG4gICAgdmFyIGFyZ3MgPSBoYXNTaG9ydGN1dEluc3RhbGxlZENhbGxiYWNrKGNhbGxiYWNrSWQpO1xuICAgIHFnLmhhc1Nob3J0Y3V0SW5zdGFsbGVkKF9vYmplY3RTcHJlYWQoe30sIGFyZ3MpKTtcbiAgfSxcbiAgUUdfSW5zdGFsbFNob3J0Y3V0OiBmdW5jdGlvbiBRR19JbnN0YWxsU2hvcnRjdXQoY29uZiwgY2FsbGJhY2tJZCkge1xuICAgIHZhciBhcmdzID0gaW5zdGFsbFNob3J0Y3V0Q2FsbGJhY2soY2FsbGJhY2tJZCk7XG4gICAgcWcuaW5zdGFsbFNob3J0Y3V0KF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX2Jhc2VbXCJkZWZhdWx0XCJdLmZvcm1hdEpzb25TdHIoY29uZikpLCBhcmdzKSk7XG4gIH1cbn07XG5mdW5jdGlvbiBoYXNTaG9ydGN1dEluc3RhbGxlZENhbGxiYWNrKGNhbGxiYWNrSWQpIHtcbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge1xuICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgaGFzU2hvcnRjdXQ6IHJlc1xuICAgICAgfTtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uSGFzU2hvcnRjdXRJbnN0YWxsZWRDYWxsYmFjaywgb2JqKTtcbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwocmVzKSB7XG4gICAgICB2YXIgb2JqID0ge1xuICAgICAgICBlcnJvck1zZzogcmVzXG4gICAgICB9O1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5mYWlsLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25IYXNTaG9ydGN1dEluc3RhbGxlZENhbGxiYWNrLCBvYmopO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmNvbXBsZXRlLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25IYXNTaG9ydGN1dEluc3RhbGxlZENhbGxiYWNrKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBpbnN0YWxsU2hvcnRjdXRDYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgIHZhciBvYmogPSB7XG4gICAgICAgIG1lc3NhZ2U6IHJlc1xuICAgICAgfTtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uSW5zdGFsbFNob3J0Y3V0Q2FsbGJhY2ssIG9iaik7XG4gICAgfSxcbiAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm9tc2csIGVycm9jb2RlKSB7XG4gICAgICB2YXIgZXJyb3IgPSB7XG4gICAgICAgIGVycm9tc2c6IGVycm9tc2csXG4gICAgICAgIGVycm9jb2RlOiBlcnJvY29kZVxuICAgICAgfTtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuZmFpbCwgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uSW5zdGFsbFNob3J0Y3V0Q2FsbGJhY2ssIGVycm9yKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5jb21wbGV0ZSwgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uSW5zdGFsbFNob3J0Y3V0Q2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbn1cblxufSx7XCIuL2Jhc2VcIjoyMSxcIi4vY29uc3RhbnRcIjoyM31dLDM1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2Jhc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2VcIikpO1xudmFyIF9jb25zdGFudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29uc3RhbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgUUdfT25FcnJvcjogZnVuY3Rpb24gUUdfT25FcnJvcigpIHtcbiAgICBxZy5vbkVycm9yKG9uRXJyb3JDYWxsYmFjay5PbkVycm9yQ2FsbGJhY2spO1xuICB9LFxuICBRR19PZmZFcnJvcjogZnVuY3Rpb24gUUdfT2ZmRXJyb3IoKSB7XG4gICAgcWcub2ZmRXJyb3Iob25FcnJvckNhbGxiYWNrLk9uRXJyb3JDYWxsYmFjayk7XG4gIH1cbn07XG52YXIgb25FcnJvckNhbGxiYWNrID0ge1xuICBPbkVycm9yQ2FsbGJhY2s6IGZ1bmN0aW9uIE9uRXJyb3JDYWxsYmFjayhyZXMpIHtcbiAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihcIlwiLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLnN1Y2Nlc3MsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbkVycm9yQ2FsbGJhY2ssIHJlcyk7XG4gIH1cbn07XG5cbn0se1wiLi9iYXNlXCI6MjEsXCIuL2NvbnN0YW50XCI6MjN9XSwzNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9iYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iYXNlXCIpKTtcbnZhciBfY29uc3RhbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbnN0YW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gb3duS2V5cyhlLCByKSB7IHZhciB0ID0gT2JqZWN0LmtleXMoZSk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTsgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7IH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pOyB9IHJldHVybiB0OyB9XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKGUpIHsgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHsgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9OyByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBfZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7IH0pOyB9IHJldHVybiBlOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgUUdfR2V0U3lzdGVtSW5mbzogZnVuY3Rpb24gUUdfR2V0U3lzdGVtSW5mbyhjYWxsYmFja0lkKSB7XG4gICAgdmFyIGFyZ3MgPSBnZXRTeXN0ZW1JbmZvQ2FsbGJhY2soY2FsbGJhY2tJZCk7XG4gICAgcWcuZ2V0U3lzdGVtSW5mbyhfb2JqZWN0U3ByZWFkKHt9LCBhcmdzKSk7XG4gIH0sXG4gIFFHX0dldFN5c3RlbUluZm9TeW5jOiBmdW5jdGlvbiBRR19HZXRTeXN0ZW1JbmZvU3luYygpIHtcbiAgICB2YXIgcmVzID0gcWcuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGdldFN5c3RlbUluZm9DYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uR2V0U3lzdGVtSW5mb0NhbGxiYWNrLCByZXMpO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24gZmFpbCgpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5mYWlsLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25HZXRTeXN0ZW1JbmZvQ2FsbGJhY2spO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmNvbXBsZXRlLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25HZXRTeXN0ZW1JbmZvQ2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbn1cblxufSx7XCIuL2Jhc2VcIjoyMSxcIi4vY29uc3RhbnRcIjoyM31dLDM3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2NvbnN0YW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb25zdGFudFwiKSk7XG52YXIgX21vZHVsZUhlbHBlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbW9kdWxlLWhlbHBlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICBRR19PblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIFFHX09uVG91Y2hTdGFydCgpIHtcbiAgICBqc2Iub25Ub3VjaFN0YXJ0KHRvdWNoUmVzdWx0Q2FsbGJhY2sub25Ub3VjaFN0YXJ0Q2FsbGJhY2spO1xuICB9LFxuICBRR19PZmZUb3VjaFN0YXJ0OiBmdW5jdGlvbiBRR19PZmZUb3VjaFN0YXJ0KCkge1xuICAgIGpzYi5vZmZUb3VjaFN0YXJ0KHRvdWNoUmVzdWx0Q2FsbGJhY2sub25Ub3VjaFN0YXJ0Q2FsbGJhY2spO1xuICB9LFxuICBRR19PblRvdWNoTW92ZTogZnVuY3Rpb24gUUdfT25Ub3VjaE1vdmUoKSB7XG4gICAganNiLm9uVG91Y2hNb3ZlKHRvdWNoUmVzdWx0Q2FsbGJhY2sub25Ub3VjaE1vdmVDYWxsYmFjayk7XG4gIH0sXG4gIFFHX09mZlRvdWNoTW92ZTogZnVuY3Rpb24gUUdfT2ZmVG91Y2hNb3ZlKCkge1xuICAgIGpzYi5vZmZUb3VjaE1vdmUodG91Y2hSZXN1bHRDYWxsYmFjay5vblRvdWNoTW92ZUNhbGxiYWNrKTtcbiAgfSxcbiAgUUdfT25Ub3VjaEVuZDogZnVuY3Rpb24gUUdfT25Ub3VjaEVuZCgpIHtcbiAgICBqc2Iub25Ub3VjaEVuZCh0b3VjaFJlc3VsdENhbGxiYWNrLm9uVG91Y2hFbmRDYWxsYmFjayk7XG4gIH0sXG4gIFFHX09mZlRvdWNoRW5kOiBmdW5jdGlvbiBRR19PZmZUb3VjaEVuZCgpIHtcbiAgICBqc2Iub2ZmVG91Y2hFbmQodG91Y2hSZXN1bHRDYWxsYmFjay5vblRvdWNoRW5kQ2FsbGJhY2spO1xuICB9LFxuICBRR19PblRvdWNoQ2FuY2VsOiBmdW5jdGlvbiBRR19PblRvdWNoQ2FuY2VsKCkge1xuICAgIGpzYi5vblRvdWNoQ2FuY2VsKHRvdWNoUmVzdWx0Q2FsbGJhY2sub25Ub3VjaENhbmNlbENhbGxiYWNrKTtcbiAgfSxcbiAgUUdfT2ZmVG91Y2hDYW5jZWw6IGZ1bmN0aW9uIFFHX09mZlRvdWNoQ2FuY2VsKCkge1xuICAgIGpzYi5vZmZUb3VjaENhbmNlbCh0b3VjaFJlc3VsdENhbGxiYWNrLm9uVG91Y2hDYW5jZWxDYWxsYmFjayk7XG4gIH1cbn07XG5mdW5jdGlvbiBmb3JtYXRUb3VjaEV2ZW50KHYpIHtcbiAgcmV0dXJuIHtcbiAgICBpZGVudGlmaWVyOiB2LmlkZW50aWZpZXIsXG4gICAgY2xpZW50WDogdi5jbGllbnRYICogd2luZG93LmRldmljZVBpeGVsUmF0aW8sXG4gICAgY2xpZW50WTogKHdpbmRvdy5pbm5lckhlaWdodCAtIHYuY2xpZW50WSkgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyxcbiAgICBwYWdlWDogdi5wYWdlWCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLFxuICAgIHBhZ2VZOiAod2luZG93LmlubmVySGVpZ2h0IC0gdi5wYWdlWSkgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuICB9O1xufVxudmFyIHRvdWNoUmVzdWx0Q2FsbGJhY2sgPSB7XG4gIG9uVG91Y2hTdGFydENhbGxiYWNrOiBmdW5jdGlvbiBvblRvdWNoU3RhcnRDYWxsYmFjayhyZXMpIHtcbiAgICB2YXIgcmVzU3RyID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdG91Y2hlczogcmVzLnRvdWNoZXMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRUb3VjaEV2ZW50KHYpO1xuICAgICAgfSksXG4gICAgICB0aW1lU3RhbXA6IHBhcnNlSW50KHJlcy50aW1lU3RhbXAsIDEwKSxcbiAgICAgIGNoYW5nZWRUb3VjaGVzOiByZXMuY2hhbmdlZFRvdWNoZXMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRUb3VjaEV2ZW50KHYpO1xuICAgICAgfSlcbiAgICB9KTtcbiAgICBfbW9kdWxlSGVscGVyW1wiZGVmYXVsdFwiXS5zZW5kKF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PblRvdWNoU3RhcnRDYWxsYmFjaywgcmVzU3RyKTtcbiAgfSxcbiAgb25Ub3VjaE1vdmVDYWxsYmFjazogZnVuY3Rpb24gb25Ub3VjaE1vdmVDYWxsYmFjayhyZXMpIHtcbiAgICB2YXIgcmVzU3RyID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdG91Y2hlczogcmVzLnRvdWNoZXMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRUb3VjaEV2ZW50KHYpO1xuICAgICAgfSksXG4gICAgICB0aW1lU3RhbXA6IHBhcnNlSW50KHJlcy50aW1lU3RhbXAsIDEwKSxcbiAgICAgIGNoYW5nZWRUb3VjaGVzOiByZXMuY2hhbmdlZFRvdWNoZXMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRUb3VjaEV2ZW50KHYpO1xuICAgICAgfSlcbiAgICB9KTtcbiAgICBfbW9kdWxlSGVscGVyW1wiZGVmYXVsdFwiXS5zZW5kKF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PblRvdWNoTW92ZUNhbGxiYWNrLCByZXNTdHIpO1xuICB9LFxuICBvblRvdWNoRW5kQ2FsbGJhY2s6IGZ1bmN0aW9uIG9uVG91Y2hFbmRDYWxsYmFjayhyZXMpIHtcbiAgICB2YXIgcmVzU3RyID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdG91Y2hlczogcmVzLnRvdWNoZXMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRUb3VjaEV2ZW50KHYpO1xuICAgICAgfSksXG4gICAgICB0aW1lU3RhbXA6IHBhcnNlSW50KHJlcy50aW1lU3RhbXAsIDEwKSxcbiAgICAgIGNoYW5nZWRUb3VjaGVzOiByZXMuY2hhbmdlZFRvdWNoZXMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRUb3VjaEV2ZW50KHYpO1xuICAgICAgfSlcbiAgICB9KTtcbiAgICBfbW9kdWxlSGVscGVyW1wiZGVmYXVsdFwiXS5zZW5kKF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PblRvdWNoRW5kQ2FsbGJhY2ssIHJlc1N0cik7XG4gIH0sXG4gIG9uVG91Y2hDYW5jZWxDYWxsYmFjazogZnVuY3Rpb24gb25Ub3VjaENhbmNlbENhbGxiYWNrKHJlcykge1xuICAgIHZhciByZXNTdHIgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB0b3VjaGVzOiByZXMudG91Y2hlcy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRvdWNoRXZlbnQodik7XG4gICAgICB9KSxcbiAgICAgIHRpbWVTdGFtcDogcGFyc2VJbnQocmVzLnRpbWVTdGFtcCwgMTApLFxuICAgICAgY2hhbmdlZFRvdWNoZXM6IHJlcy5jaGFuZ2VkVG91Y2hlcy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRvdWNoRXZlbnQodik7XG4gICAgICB9KVxuICAgIH0pO1xuICAgIF9tb2R1bGVIZWxwZXJbXCJkZWZhdWx0XCJdLnNlbmQoX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uVG91Y2hDYW5jZWxDYWxsYmFjaywgcmVzU3RyKTtcbiAgfVxufTtcblxufSx7XCIuL2NvbnN0YW50XCI6MjMsXCIuL21vZHVsZS1oZWxwZXJcIjozMX1dLDM4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbnZhciBfQ0FOUExBWV9DQUxMQkFDSyA9IFwiY2FucGxheUNhbGxiYWNrc1wiO1xudmFyIF9FTkRFRF9DQUxMQkFDSyA9IFwiZW5kZWRDYWxsYmFja3NcIjtcbnZhciBfRVJST1JfQ0FMTEJBQ0sgPSBcImVycm9yQ2FsbGJhY2tzXCI7XG52YXIgX1BBVVNFX0NBTExCQUNLID0gXCJwYXVzZUNhbGxiYWNrc1wiO1xudmFyIF9QTEFZX0NBTExCQUNLID0gXCJwbGF5Q2FsbGJhY2tzXCI7XG52YXIgX1NFRUtFRF9DQUxMQkFDSyA9IFwic2Vla2VkQ2FsbGJhY2tzXCI7XG52YXIgX1NFRUtJTkdfQ0FMTEJBQ0sgPSBcInNlZWtpbmdDYWxsYmFja3NcIjtcbnZhciBfU1RPUF9DQUxMQkFDSyA9IFwic3RvcENhbGxiYWNrc1wiO1xudmFyIF9USU1FX1VQREFURV9DQUxMQkFDSyA9IFwidGltZVVwZGF0ZUNhbGxiYWNrc1wiO1xudmFyIF9XQUlUSU5HX0NBTExCQUNLID0gXCJ3YWl0aW5nQ2FsbGJhY2tzXCI7XG52YXIgX0VSUk9SX0NPREUgPSB7XG4gIEVSUk9SX1NZU1RFTTogMTAwMDEsXG4gIEVSUk9SX05FVDogMTAwMDIsXG4gIEVSUk9SX0ZJTEU6IDEwMDAzLFxuICBFUlJPUl9GT1JNQVQ6IDEwMDA0LFxuICBFUlJPUl9VTktOT1dOOiAtMVxufTtcbnZhciBfU1RBVEUgPSB7XG4gIEVSUk9SOiAtMSxcbiAgSU5JVElBTElaSU5HOiAwLFxuICBQTEFZSU5HOiAxLFxuICBQQVVTRUQ6IDJcbn07XG52YXIgX2F1ZGlvRW5naW5lID0gdW5kZWZpbmVkO1xudmFyIF93ZWFrTWFwID0gbmV3IFdlYWtNYXAoKTtcbnZhciBfb2ZmQ2FsbGJhY2sgPSBmdW5jdGlvbiBfb2ZmQ2FsbGJhY2sodGFyZ2V0LCB0eXBlLCBjYWxsYmFjaykge1xuICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGFyZ2V0KTtcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiIHx8ICFwcml2YXRlVGhpcykge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICB2YXIgY2FsbGJhY2tzID0gcHJpdmF0ZVRoaXNbdHlwZV0gfHwgW107XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoY2FsbGJhY2sgPT09IGNhbGxiYWNrc1tpXSkge1xuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgIHJldHVybiBjYWxsYmFjay5sZW5ndGggKyAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gMDtcbn07XG52YXIgX29uQ2FsbGJhY2sgPSBmdW5jdGlvbiBfb25DYWxsYmFjayh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKSB7XG4gIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0YXJnZXQpO1xuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIgfHwgIXByaXZhdGVUaGlzKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHZhciBjYWxsYmFja3MgPSBwcml2YXRlVGhpc1t0eXBlXTtcbiAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBwcml2YXRlVGhpc1t0eXBlXSA9IFtjYWxsYmFja107XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgaWYgKGNhbGxiYWNrID09PSBjYWxsYmFja3NbaV0pIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuICByZXR1cm4gY2FsbGJhY2tzLmxlbmd0aDtcbn07XG52YXIgX2Rpc3BhdGNoQ2FsbGJhY2sgPSBmdW5jdGlvbiBfZGlzcGF0Y2hDYWxsYmFjayh0YXJnZXQsIHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGFyZ2V0KTtcbiAgaWYgKHByaXZhdGVUaGlzKSB7XG4gICAgdmFyIGNhbGxiYWNrcyA9IHByaXZhdGVUaGlzW3R5cGVdIHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0YXJnZXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufTtcbmZ1bmN0aW9uIElubmVyQXVkaW9Db250ZXh0KCkge1xuICB0aGlzLnN0YXJ0VGltZSA9IDA7XG4gIHRoaXMuYXV0b3BsYXkgPSBmYWxzZTtcbiAgX3dlYWtNYXAuc2V0KHRoaXMsIHtcbiAgICBzcmM6IFwiXCIsXG4gICAgdm9sdW1lOiAxLFxuICAgIGxvb3A6IGZhbHNlLFxuICAgIHNlZWtQb3NpdGlvbjogLTFcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImxvb3BcIiwge1xuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG4gICAgICBpZiAocHJpdmF0ZVRoaXMpIHtcbiAgICAgICAgdmFyIGF1ZGlvSUQgPSBwcml2YXRlVGhpcy5hdWRpb0lEO1xuICAgICAgICBpZiAodHlwZW9mIGF1ZGlvSUQgPT09IFwibnVtYmVyXCIgJiYgYXVkaW9JRCA+PSAwKSB7XG4gICAgICAgICAgX2F1ZGlvRW5naW5lLnNldExvb3AoYXVkaW9JRCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHByaXZhdGVUaGlzLmxvb3AgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRoaXMpO1xuICAgICAgcmV0dXJuIHByaXZhdGVUaGlzID8gcHJpdmF0ZVRoaXMubG9vcCA6IGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInZvbHVtZVwiLCB7XG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IDEpIHtcbiAgICAgICAgICB2YWx1ZSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gMTtcbiAgICAgIH1cbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcbiAgICAgIGlmIChwcml2YXRlVGhpcykge1xuICAgICAgICB2YXIgYXVkaW9JRCA9IHByaXZhdGVUaGlzLmF1ZGlvSUQ7XG4gICAgICAgIGlmICh0eXBlb2YgYXVkaW9JRCA9PT0gXCJudW1iZXJcIiAmJiBhdWRpb0lEID49IDApIHtcbiAgICAgICAgICBfYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGF1ZGlvSUQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBwcml2YXRlVGhpcy52b2x1bWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRoaXMpO1xuICAgICAgcmV0dXJuIHByaXZhdGVUaGlzID8gcHJpdmF0ZVRoaXMudm9sdW1lIDogMTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJzcmNcIiwge1xuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG4gICAgICBpZiAoIXByaXZhdGVUaGlzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvbGRTcmMgPSBwcml2YXRlVGhpcy5zcmM7XG4gICAgICBwcml2YXRlVGhpcy5zcmMgPSB2YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdmFyIGF1ZGlvSUQgPSBwcml2YXRlVGhpcy5hdWRpb0lEO1xuICAgICAgICBpZiAodHlwZW9mIGF1ZGlvSUQgPT09IFwibnVtYmVyXCIgJiYgYXVkaW9JRCA+PSAwICYmIF9hdWRpb0VuZ2luZS5nZXRTdGF0ZShhdWRpb0lEKSA9PT0gX1NUQVRFLlBBVVNFRCAmJiBvbGRTcmMgIT09IHZhbHVlKSB7XG4gICAgICAgICAgX2F1ZGlvRW5naW5lLnN0b3AoYXVkaW9JRCk7XG4gICAgICAgICAgcHJpdmF0ZVRoaXMuYXVkaW9JRCA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgX2F1ZGlvRW5naW5lLnByZWxvYWQodmFsdWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLnNyYyA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgX2Rpc3BhdGNoQ2FsbGJhY2soc2VsZiwgX0NBTlBMQVlfQ0FMTEJBQ0spO1xuICAgICAgICAgICAgICBpZiAoc2VsZi5hdXRvcGxheSkge1xuICAgICAgICAgICAgICAgIHNlbGYucGxheSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG4gICAgICByZXR1cm4gcHJpdmF0ZVRoaXMgPyBwcml2YXRlVGhpcy5zcmMgOiBcIlwiO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImR1cmF0aW9uXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcbiAgICAgIGlmIChwcml2YXRlVGhpcykge1xuICAgICAgICB2YXIgYXVkaW9JRCA9IHByaXZhdGVUaGlzLmF1ZGlvSUQ7XG4gICAgICAgIGlmICh0eXBlb2YgYXVkaW9JRCA9PT0gXCJudW1iZXJcIiAmJiBhdWRpb0lEID49IDApIHtcbiAgICAgICAgICByZXR1cm4gX2F1ZGlvRW5naW5lLmdldER1cmF0aW9uKGF1ZGlvSUQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gTmFOO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoKSB7fVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiY3VycmVudFRpbWVcIiwge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRoaXMpO1xuICAgICAgaWYgKHByaXZhdGVUaGlzKSB7XG4gICAgICAgIHZhciBhdWRpb0lEID0gcHJpdmF0ZVRoaXMuYXVkaW9JRDtcbiAgICAgICAgaWYgKHR5cGVvZiBhdWRpb0lEID09PSBcIm51bWJlclwiICYmIGF1ZGlvSUQgPj0gMCkge1xuICAgICAgICAgIHJldHVybiBfYXVkaW9FbmdpbmUuZ2V0Q3VycmVudFRpbWUoYXVkaW9JRCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoKSB7fVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwicGF1c2VkXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcbiAgICAgIGlmIChwcml2YXRlVGhpcykge1xuICAgICAgICB2YXIgYXVkaW9JRCA9IHByaXZhdGVUaGlzLmF1ZGlvSUQ7XG4gICAgICAgIGlmICh0eXBlb2YgYXVkaW9JRCA9PT0gXCJudW1iZXJcIiAmJiBhdWRpb0lEID49IDApIHtcbiAgICAgICAgICByZXR1cm4gX2F1ZGlvRW5naW5lLmdldFN0YXRlKGF1ZGlvSUQpID09PSBfU1RBVEUuUEFVU0VEO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KCkge31cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImJ1ZmZlcmVkXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcbiAgICAgIGlmIChwcml2YXRlVGhpcykge1xuICAgICAgICB2YXIgYXVkaW9JRCA9IHByaXZhdGVUaGlzLmF1ZGlvSUQ7XG4gICAgICAgIGlmICh0eXBlb2YgYXVkaW9JRCA9PT0gXCJudW1iZXJcIiAmJiBhdWRpb0lEID49IDApIHtcbiAgICAgICAgICByZXR1cm4gX2F1ZGlvRW5naW5lLmdldEJ1ZmZlcmVkKGF1ZGlvSUQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KCkge31cbiAgfSk7XG59XG52YXIgX3Byb3RvdHlwZSA9IElubmVyQXVkaW9Db250ZXh0LnByb3RvdHlwZTtcbl9wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRoaXMpO1xuICBpZiAocHJpdmF0ZVRoaXMpIHtcbiAgICB2YXIgYXVkaW9JRCA9IHByaXZhdGVUaGlzLmF1ZGlvSUQ7XG4gICAgaWYgKHR5cGVvZiBhdWRpb0lEID09PSBcIm51bWJlclwiICYmIGF1ZGlvSUQgPj0gMCkge1xuICAgICAgX2F1ZGlvRW5naW5lLnN0b3AoYXVkaW9JRCk7XG4gICAgICBwcml2YXRlVGhpcy5hdWRpb0lEID0gLTE7XG4gICAgICBfZGlzcGF0Y2hDYWxsYmFjayh0aGlzLCBfU1RPUF9DQUxMQkFDSyk7XG4gICAgfVxuICAgIHByaXZhdGVUaGlzW19DQU5QTEFZX0NBTExCQUNLXSA9IFtdO1xuICAgIHByaXZhdGVUaGlzW19FTkRFRF9DQUxMQkFDS10gPSBbXTtcbiAgICBwcml2YXRlVGhpc1tfRVJST1JfQ0FMTEJBQ0tdID0gW107XG4gICAgcHJpdmF0ZVRoaXNbX1BBVVNFX0NBTExCQUNLXSA9IFtdO1xuICAgIHByaXZhdGVUaGlzW19QTEFZX0NBTExCQUNLXSA9IFtdO1xuICAgIHByaXZhdGVUaGlzW19TRUVLRURfQ0FMTEJBQ0tdID0gW107XG4gICAgcHJpdmF0ZVRoaXNbX1NFRUtJTkdfQ0FMTEJBQ0tdID0gW107XG4gICAgcHJpdmF0ZVRoaXNbX1NUT1BfQ0FMTEJBQ0tdID0gW107XG4gICAgcHJpdmF0ZVRoaXNbX1RJTUVfVVBEQVRFX0NBTExCQUNLXSA9IFtdO1xuICAgIHByaXZhdGVUaGlzW19XQUlUSU5HX0NBTExCQUNLXSA9IFtdO1xuICAgIGNsZWFySW50ZXJ2YWwocHJpdmF0ZVRoaXMuaW50ZXJ2YWxJRCk7XG4gIH1cbn07XG5fcHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcbiAgaWYgKCFwcml2YXRlVGhpcykge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgc3JjID0gcHJpdmF0ZVRoaXMuc3JjO1xuICB2YXIgYXVkaW9JRCA9IHByaXZhdGVUaGlzLmF1ZGlvSUQ7XG4gIGlmICh0eXBlb2Ygc3JjICE9PSBcInN0cmluZ1wiIHx8IHNyYyA9PT0gXCJcIikge1xuICAgIF9kaXNwYXRjaENhbGxiYWNrKHRoaXMsIF9FUlJPUl9DQUxMQkFDSywgW3tcbiAgICAgIGVyck1zZzogXCJpbnZhbGlkIHNyY1wiLFxuICAgICAgZXJyQ29kZTogX0VSUk9SX0NPREUuRVJST1JfRklMRVxuICAgIH1dKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHR5cGVvZiBhdWRpb0lEID09PSBcIm51bWJlclwiICYmIGF1ZGlvSUQgPj0gMCkge1xuICAgIGlmIChfYXVkaW9FbmdpbmUuZ2V0U3RhdGUoYXVkaW9JRCkgPT09IF9TVEFURS5QQVVTRUQpIHtcbiAgICAgIF9hdWRpb0VuZ2luZS5yZXN1bWUoYXVkaW9JRCk7XG4gICAgICBfZGlzcGF0Y2hDYWxsYmFjayh0aGlzLCBfUExBWV9DQUxMQkFDSyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIF9hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSUQpO1xuICAgICAgcHJpdmF0ZVRoaXMuYXVkaW9JRCA9IC0xO1xuICAgIH1cbiAgfVxuICBhdWRpb0lEID0gX2F1ZGlvRW5naW5lLnBsYXkoc3JjLCB0aGlzLmxvb3AsIHRoaXMudm9sdW1lKTtcbiAgaWYgKGF1ZGlvSUQgPT09IC0xKSB7XG4gICAgX2Rpc3BhdGNoQ2FsbGJhY2sodGhpcywgX0VSUk9SX0NBTExCQUNLLCBbe1xuICAgICAgZXJyTXNnOiBcInVua25vd25cIixcbiAgICAgIGVyckNvZGU6IF9FUlJPUl9DT0RFLkVSUk9SX1VOS05PV05cbiAgICB9XSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHByaXZhdGVUaGlzLmF1ZGlvSUQgPSBhdWRpb0lEO1xuICBpZiAocHJpdmF0ZVRoaXMuc2Vla1Bvc2l0aW9uID49IDApIHtcbiAgICBfYXVkaW9FbmdpbmUuc2V0Q3VycmVudFRpbWUoYXVkaW9JRCwgcHJpdmF0ZVRoaXMuc2Vla1Bvc2l0aW9uKTtcbiAgICBwcml2YXRlVGhpcy5zZWVrUG9zaXRpb24gPSAtMTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuc3RhcnRUaW1lID09PSBcIm51bWJlclwiICYmIHRoaXMuc3RhcnRUaW1lID4gMCkge1xuICAgICAgX2F1ZGlvRW5naW5lLnNldEN1cnJlbnRUaW1lKGF1ZGlvSUQsIHRoaXMuc3RhcnRUaW1lKTtcbiAgICB9XG4gIH1cbiAgX2Rpc3BhdGNoQ2FsbGJhY2sodGhpcywgX1dBSVRJTkdfQ0FMTEJBQ0spO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIF9hdWRpb0VuZ2luZS5zZXRDYW5QbGF5Q2FsbGJhY2soYXVkaW9JRCwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChzcmMgPT09IHNlbGYuc3JjKSB7XG4gICAgICBfZGlzcGF0Y2hDYWxsYmFjayhzZWxmLCBfQ0FOUExBWV9DQUxMQkFDSyk7XG4gICAgICBfZGlzcGF0Y2hDYWxsYmFjayhzZWxmLCBfUExBWV9DQUxMQkFDSyk7XG4gICAgfVxuICB9KTtcbiAgX2F1ZGlvRW5naW5lLnNldFdhaXRpbmdDYWxsYmFjayhhdWRpb0lELCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNyYyA9PT0gc2VsZi5zcmMpIHtcbiAgICAgIF9kaXNwYXRjaENhbGxiYWNrKHNlbGYsIF9XQUlUSU5HX0NBTExCQUNLKTtcbiAgICB9XG4gIH0pO1xuICBfYXVkaW9FbmdpbmUuc2V0RXJyb3JDYWxsYmFjayhhdWRpb0lELCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNyYyA9PT0gc2VsZi5zcmMpIHtcbiAgICAgIHByaXZhdGVUaGlzLmF1ZGlvSUQgPSAtMTtcbiAgICAgIF9kaXNwYXRjaENhbGxiYWNrKHNlbGYsIF9FUlJPUl9DQUxMQkFDSyk7XG4gICAgfVxuICB9KTtcbiAgX2F1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGF1ZGlvSUQsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3JjID09PSBzZWxmLnNyYykge1xuICAgICAgcHJpdmF0ZVRoaXMuYXVkaW9JRCA9IC0xO1xuICAgICAgX2Rpc3BhdGNoQ2FsbGJhY2soc2VsZiwgX0VOREVEX0NBTExCQUNLKTtcbiAgICB9XG4gIH0pO1xufTtcbl9wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcbiAgaWYgKHByaXZhdGVUaGlzKSB7XG4gICAgdmFyIGF1ZGlvSUQgPSBwcml2YXRlVGhpcy5hdWRpb0lEO1xuICAgIGlmICh0eXBlb2YgYXVkaW9JRCA9PT0gXCJudW1iZXJcIiAmJiBhdWRpb0lEID49IDApIHtcbiAgICAgIF9hdWRpb0VuZ2luZS5wYXVzZShhdWRpb0lEKTtcbiAgICAgIF9kaXNwYXRjaENhbGxiYWNrKHRoaXMsIF9QQVVTRV9DQUxMQkFDSyk7XG4gICAgfVxuICB9XG59O1xuX3Byb3RvdHlwZS5zZWVrID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcbiAgaWYgKHByaXZhdGVUaGlzICYmIHR5cGVvZiBwb3NpdGlvbiA9PT0gXCJudW1iZXJcIiAmJiBwb3NpdGlvbiA+PSAwKSB7XG4gICAgdmFyIGF1ZGlvSUQgPSBwcml2YXRlVGhpcy5hdWRpb0lEO1xuICAgIGlmICh0eXBlb2YgYXVkaW9JRCA9PT0gXCJudW1iZXJcIiAmJiBhdWRpb0lEID49IDApIHtcbiAgICAgIF9hdWRpb0VuZ2luZS5zZXRDdXJyZW50VGltZShhdWRpb0lELCBwb3NpdGlvbik7XG4gICAgICBfZGlzcGF0Y2hDYWxsYmFjayh0aGlzLCBfU0VFS0lOR19DQUxMQkFDSyk7XG4gICAgICBfZGlzcGF0Y2hDYWxsYmFjayh0aGlzLCBfU0VFS0VEX0NBTExCQUNLKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJpdmF0ZVRoaXMuc2Vla1Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxuICB9XG59O1xuX3Byb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG4gIGlmIChwcml2YXRlVGhpcykge1xuICAgIHZhciBhdWRpb0lEID0gcHJpdmF0ZVRoaXMuYXVkaW9JRDtcbiAgICBpZiAodHlwZW9mIGF1ZGlvSUQgPT09IFwibnVtYmVyXCIgJiYgYXVkaW9JRCA+PSAwKSB7XG4gICAgICBfYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lEKTtcbiAgICAgIHByaXZhdGVUaGlzLmF1ZGlvSUQgPSAtMTtcbiAgICAgIF9kaXNwYXRjaENhbGxiYWNrKHRoaXMsIF9TVE9QX0NBTExCQUNLKTtcbiAgICB9XG4gIH1cbn07XG5fcHJvdG90eXBlLm9mZkNhbnBsYXkgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgX29mZkNhbGxiYWNrKHRoaXMsIF9DQU5QTEFZX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuX3Byb3RvdHlwZS5vZmZFbmRlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb2ZmQ2FsbGJhY2sodGhpcywgX0VOREVEX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuX3Byb3RvdHlwZS5vZmZFcnJvciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb2ZmQ2FsbGJhY2sodGhpcywgX0VSUk9SX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuX3Byb3RvdHlwZS5vZmZQYXVzZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb2ZmQ2FsbGJhY2sodGhpcywgX1BBVVNFX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuX3Byb3RvdHlwZS5vZmZQbGF5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vZmZDYWxsYmFjayh0aGlzLCBfUExBWV9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcbl9wcm90b3R5cGUub2ZmU2Vla2VkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vZmZDYWxsYmFjayh0aGlzLCBfU0VFS0VEX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuX3Byb3RvdHlwZS5vZmZTZWVraW5nID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vZmZDYWxsYmFjayh0aGlzLCBfU0VFS0lOR19DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcbl9wcm90b3R5cGUub2ZmU3RvcCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb2ZmQ2FsbGJhY2sodGhpcywgX1NUT1BfQ0FMTEJBQ0ssIGNhbGxiYWNrKTtcbn07XG5fcHJvdG90eXBlLm9mZlRpbWVVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdmFyIHJlc3VsdCA9IF9vZmZDYWxsYmFjayh0aGlzLCBfVElNRV9VUERBVEVfQ0FMTEJBQ0ssIGNhbGxiYWNrKTtcbiAgaWYgKHJlc3VsdCA9PT0gMSkge1xuICAgIGNsZWFySW50ZXJ2YWwoX3dlYWtNYXAuZ2V0KHRoaXMpLmludGVydmFsSUQpO1xuICB9XG59O1xuX3Byb3RvdHlwZS5vZmZXYWl0aW5nID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vZmZDYWxsYmFjayh0aGlzLCBfV0FJVElOR19DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcbl9wcm90b3R5cGUub25DYW5wbGF5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vbkNhbGxiYWNrKHRoaXMsIF9DQU5QTEFZX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuX3Byb3RvdHlwZS5vbkVuZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vbkNhbGxiYWNrKHRoaXMsIF9FTkRFRF9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcbl9wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb25DYWxsYmFjayh0aGlzLCBfRVJST1JfQ0FMTEJBQ0ssIGNhbGxiYWNrKTtcbn07XG5fcHJvdG90eXBlLm9uUGF1c2UgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgX29uQ2FsbGJhY2sodGhpcywgX1BBVVNFX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuX3Byb3RvdHlwZS5vblBsYXkgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgX29uQ2FsbGJhY2sodGhpcywgX1BMQVlfQ0FMTEJBQ0ssIGNhbGxiYWNrKTtcbn07XG5fcHJvdG90eXBlLm9uU2Vla2VkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vbkNhbGxiYWNrKHRoaXMsIF9TRUVLRURfQ0FMTEJBQ0ssIGNhbGxiYWNrKTtcbn07XG5fcHJvdG90eXBlLm9uU2Vla2luZyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb25DYWxsYmFjayh0aGlzLCBcInNlZWtpbmdDYWxsYmFja3NcIiwgY2FsbGJhY2spO1xufTtcbl9wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vbkNhbGxiYWNrKHRoaXMsIF9TVE9QX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuX3Byb3RvdHlwZS5vblRpbWVVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdmFyIHJlc3VsdCA9IF9vbkNhbGxiYWNrKHRoaXMsIF9USU1FX1VQREFURV9DQUxMQkFDSywgY2FsbGJhY2spO1xuICBpZiAocmVzdWx0ID09PSAxKSB7XG4gICAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRoaXMpO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldChzZWxmKTtcbiAgICAgIGlmIChwcml2YXRlVGhpcykge1xuICAgICAgICB2YXIgYXVkaW9JRCA9IHByaXZhdGVUaGlzLmF1ZGlvSUQ7XG4gICAgICAgIGlmICh0eXBlb2YgYXVkaW9JRCA9PT0gXCJudW1iZXJcIiAmJiBhdWRpb0lEID49IDAgJiYgX2F1ZGlvRW5naW5lLmdldFN0YXRlKGF1ZGlvSUQpID09PSBfU1RBVEUuUExBWUlORykge1xuICAgICAgICAgIF9kaXNwYXRjaENhbGxiYWNrKHNlbGYsIF9USU1FX1VQREFURV9DQUxMQkFDSyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICB9XG4gICAgfSwgNTAwKTtcbiAgICBwcml2YXRlVGhpcy5pbnRlcnZhbElEID0gaW50ZXJ2YWxJRDtcbiAgfVxufTtcbl9wcm90b3R5cGUub25XYWl0aW5nID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vbkNhbGxiYWNrKHRoaXMsIF9XQUlUSU5HX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuZnVuY3Rpb24gX2RlZmF1bHQoQXVkaW9FbmdpbmUpIHtcbiAgaWYgKF9hdWRpb0VuZ2luZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgX2F1ZGlvRW5naW5lID0gT2JqZWN0LmFzc2lnbih7fSwgQXVkaW9FbmdpbmUpO1xuICAgIE9iamVjdC5rZXlzKEF1ZGlvRW5naW5lKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIEF1ZGlvRW5naW5lW25hbWVdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgQXVkaW9FbmdpbmVbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiQXVkaW9FbmdpbmUuXCIgKyBuYW1lICsgXCIgaXMgZGVwcmVjYXRlZFwiKTtcbiAgICAgICAgICByZXR1cm4gX2F1ZGlvRW5naW5lW25hbWVdLmFwcGx5KEF1ZGlvRW5naW5lLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBuZXcgSW5uZXJBdWRpb0NvbnRleHQoKTtcbn1cbjtcblxufSx7fV0sMzk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICBleHBvcnRUbzogZnVuY3Rpb24gZXhwb3J0VG8obmFtZSwgZnJvbSwgdG8sIGVyckNhbGxiYWNrLCBzdWNjZXNzQ2FsbGJhY2spIHtcbiAgICBpZiAoX3R5cGVvZihmcm9tKSAhPT0gXCJvYmplY3RcIiB8fCBfdHlwZW9mKHRvKSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgY29uc29sZS53YXJuKFwiaW52YWxpZCBleHBvcnRUbzogXCIsIG5hbWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZnJvbVByb3BlcnR5ID0gZnJvbVtuYW1lXTtcbiAgICBpZiAodHlwZW9mIGZyb21Qcm9wZXJ0eSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaWYgKHR5cGVvZiBmcm9tUHJvcGVydHkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0b1tuYW1lXSA9IGZyb21Qcm9wZXJ0eS5iaW5kKGZyb20pO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRvW25hbWVdLCBmcm9tUHJvcGVydHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9bbmFtZV0gPSBmcm9tUHJvcGVydHk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHN1Y2Nlc3NDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHN1Y2Nlc3NDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b1tuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihuYW1lICsgXCIgaXMgbm90IHN1cHBvcnQhXCIpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9O1xuICAgICAgaWYgKHR5cGVvZiBlcnJDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGVyckNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG59LHt9XX0se30sWzEwXSk7XG4iXSwiZmlsZSI6InJhbC5qcyJ9
