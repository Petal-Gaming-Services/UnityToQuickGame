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
var _default = {
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
exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_util["default"].exportTo("onShow", hbs, ral);
_util["default"].exportTo("onHide", hbs, ral);
_util["default"].exportTo("offShow", hbs, ral);
_util["default"].exportTo("offHide", hbs, ral);

},{"../../util":31}],3:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_util["default"].exportTo("triggerGC", hbs, ral);
_util["default"].exportTo("getPerformance", hbs, ral);

},{"../../util":31}],4:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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

},{"../../util":31}],6:[function(require,module,exports){
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

},{"../../util":31}],9:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_util["default"].exportTo("getFileSystemManager", hbs, ral);

},{"../../util":31}],10:[function(require,module,exports){
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

},{"../feature":1,"../util":31,"./base/lifecycle":2,"./base/performance":3,"./base/subpackage":4,"./base/system-info":5,"./base/touch-event":6,"./device/accelerometer":7,"./device/battery":8,"./file/file-system-manager":9,"./interface/keyboard":11,"./interface/window":12,"./media/audio":13,"./network/download":14,"./rendering/canvas":15,"./rendering/font":16,"./rendering/frame":17,"./rendering/image":18,"./rendering/webgl":19,"./unitysdk/index":24}],11:[function(require,module,exports){
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

},{"../../util":31}],12:[function(require,module,exports){
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

},{"../../inner-context":30,"../../util":31}],14:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_util["default"].exportTo("downloadFile", hbs, ral);

},{"../../util":31}],15:[function(require,module,exports){
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

},{"../../feature":1,"../../util":31}],16:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_util["default"].exportTo("loadFont", hbs, ral);

},{"../../util":31}],17:[function(require,module,exports){
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

},{"../../feature":1,"../../util":31}],19:[function(require,module,exports){
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _default = {
  QG_GameLogin: function QG_GameLogin(conf, callbackId) {
    var args = handleLoginCallback(callbackId);
    qg.gameLoginWithReal(_objectSpread(_objectSpread({}, _base["default"].formatJsonStr(conf)), args));
  }
};
exports["default"] = _default;
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

},{"./base":21,"./constant":22}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _moduleHelper = _interopRequireDefault(require("./module-helper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
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
exports["default"] = _default;

},{"./module-helper":27}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
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
    _OnKeyboardCompleteCallback: "_OnKeyboardCompleteCallback"
  }
};
exports["default"] = _default;

},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  QG_SetPreferredFramesPerSecond: function QG_SetPreferredFramesPerSecond(fps) {
    qg.setPreferredFramesPerSecond(fps);
  }
};
exports["default"] = _default;

},{}],24:[function(require,module,exports){
"use strict";

var _account = _interopRequireDefault(require("./account"));
var _rewardedVideoAd = _interopRequireDefault(require("./rewardedVideoAd"));
var _pay = _interopRequireDefault(require("./pay"));
var _keyboard = _interopRequireDefault(require("./keyboard"));
var _localStorage = _interopRequireDefault(require("./localStorage"));
var _frameRate = _interopRequireDefault(require("./frameRate"));
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

},{"./account":20,"./frameRate":23,"./keyboard":25,"./localStorage":26,"./pay":28,"./rewardedVideoAd":29}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./base"));
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _default = {
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
exports["default"] = _default;
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

},{"./base":21,"./constant":22}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
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
exports["default"] = _default;

},{}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
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
exports["default"] = _default;

},{"./constant":22}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./base"));
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _default = {
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
exports["default"] = _default;
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

},{"./base":21,"./constant":22}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./base"));
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var rewardedVideoAds = {};
var _default = {
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
exports["default"] = _default;
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

},{"./base":21,"./constant":22}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _default = {
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
exports["default"] = _default;

},{}]},{},[10]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJyYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9mZWF0dXJlcyA9IHt9O1xudmFyIF9nZXRDYWxsYmFja3MgPSB7fTtcbnZhciBfc2V0Q2FsbGJhY2tzID0ge307XG52YXIgX0ZFQVRVUkVfVU5TVVBQT1JUID0gLTE7XG52YXIgX2RlZmF1bHQgPSB7XG4gIEZFQVRVUkVfVU5TVVBQT1JUOiBfRkVBVFVSRV9VTlNVUFBPUlQsXG4gIENBTlZBU19DT05URVhUMkRfVEVYVEJBU0VMSU5FX0FMUEhBQkVUSUM6IHtcbiAgICBuYW1lOiBcImNhbnZhcy5jb250ZXh0MmQudGV4dGJhc2VsaW5lLmFscGhhYmV0aWNcIixcbiAgICBlbmFibGU6IDEsXG4gICAgZGlzYWJsZTogMFxuICB9LFxuICBDQU5WQVNfQ09OVEVYVDJEX1RFWFRCQVNFTElORV9ERUZBVUxUOiB7XG4gICAgbmFtZTogXCJjYW52YXMuY29udGV4dDJkLnRleHRiYXNlbGluZS5kZWZhdWx0XCIsXG4gICAgYWxwaGFiZXRpYzogMSxcbiAgICBib3R0b206IDBcbiAgfSxcbiAgc2V0RmVhdHVyZTogZnVuY3Rpb24gc2V0RmVhdHVyZShmZWF0dXJlTmFtZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgdmFyIGZlYXR1cmUgPSBfZmVhdHVyZXNbZmVhdHVyZU5hbWVdO1xuICAgIGlmICghZmVhdHVyZSkge1xuICAgICAgZmVhdHVyZSA9IF9mZWF0dXJlc1tmZWF0dXJlTmFtZV0gPSB7fTtcbiAgICB9XG4gICAgZmVhdHVyZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgfSxcbiAgZ2V0RmVhdHVyZVByb3BlcnR5OiBmdW5jdGlvbiBnZXRGZWF0dXJlUHJvcGVydHkoZmVhdHVyZU5hbWUsIHByb3BlcnR5KSB7XG4gICAgdmFyIGZlYXR1cmUgPSBfZmVhdHVyZXNbZmVhdHVyZU5hbWVdO1xuICAgIHJldHVybiBmZWF0dXJlID8gZmVhdHVyZVtwcm9wZXJ0eV0gOiB1bmRlZmluZWQ7XG4gIH0sXG4gIHJlZ2lzdGVyRmVhdHVyZVByb3BlcnR5OiBmdW5jdGlvbiByZWdpc3RlckZlYXR1cmVQcm9wZXJ0eShrZXksIGdldEZ1bmN0aW9uLCBzZXRGdW5jdGlvbikge1xuICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZ2V0RnVuY3Rpb24gIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygc2V0RnVuY3Rpb24gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGdldEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9nZXRDYWxsYmFja3Nba2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc2V0RnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX3NldENhbGxiYWNrc1trZXldID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBnZXRGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBfZ2V0Q2FsbGJhY2tzW2tleV0gPSBnZXRGdW5jdGlvbjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzZXRGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBfc2V0Q2FsbGJhY2tzW2tleV0gPSBzZXRGdW5jdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIHVucmVnaXN0ZXJGZWF0dXJlUHJvcGVydHk6IGZ1bmN0aW9uIHVucmVnaXN0ZXJGZWF0dXJlUHJvcGVydHkoa2V5LCBnZXRCb29sLCBzZXRCb29sKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBnZXRCb29sICE9PSBcImJvb2xlYW5cIiB8fCB0eXBlb2Ygc2V0Qm9vbCAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGdldEJvb2wgPT09IHRydWUgJiYgdHlwZW9mIF9nZXRDYWxsYmFja3Nba2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBfZ2V0Q2FsbGJhY2tzW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChzZXRCb29sID09PSB0cnVlICYmIHR5cGVvZiBfc2V0Q2FsbGJhY2tzW2tleV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgX3NldENhbGxiYWNrc1trZXldID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZ2V0RmVhdHVyZVByb3BlcnR5SW50OiBmdW5jdGlvbiBnZXRGZWF0dXJlUHJvcGVydHlJbnQoa2V5KSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBfRkVBVFVSRV9VTlNVUFBPUlQ7XG4gICAgfVxuICAgIHZhciBnZXRGdW5jdGlvbiA9IF9nZXRDYWxsYmFja3Nba2V5XTtcbiAgICBpZiAoZ2V0RnVuY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIF9GRUFUVVJFX1VOU1VQUE9SVDtcbiAgICB9XG4gICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb24oKTtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICByZXR1cm4gX0ZFQVRVUkVfVU5TVVBQT1JUO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPCBfRkVBVFVSRV9VTlNVUFBPUlQpIHtcbiAgICAgIHZhbHVlID0gX0ZFQVRVUkVfVU5TVVBQT1JUO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIHNldEZlYXR1cmVQcm9wZXJ0eUludDogZnVuY3Rpb24gc2V0RmVhdHVyZVByb3BlcnR5SW50KGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwibnVtYmVyXCIgJiYgdmFsdWUgPCAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBzZXRGdW5jdGlvbiA9IF9zZXRDYWxsYmFja3Nba2V5XTtcbiAgICBpZiAoc2V0RnVuY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgcmV0dXJuQ29kZSA9IHNldEZ1bmN0aW9uKHZhbHVlKTtcbiAgICBpZiAodHlwZW9mIHJldHVybkNvZGUgIT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIHJldHVybkNvZGUgIT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuQ29kZSA/IHRydWUgOiBmYWxzZTtcbiAgfVxufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdXRpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJvblNob3dcIiwgaGJzLCByYWwpO1xuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwib25IaWRlXCIsIGhicywgcmFsKTtcbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcIm9mZlNob3dcIiwgaGJzLCByYWwpO1xuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwib2ZmSGlkZVwiLCBoYnMsIHJhbCk7XG5cbn0se1wiLi4vLi4vdXRpbFwiOjMxfV0sMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcInRyaWdnZXJHQ1wiLCBoYnMsIHJhbCk7XG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJnZXRQZXJmb3JtYW5jZVwiLCBoYnMsIHJhbCk7XG5cbn0se1wiLi4vLi4vdXRpbFwiOjMxfV0sNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxudmFyIF9sb2FkU3VicGFja2FnZSA9IGhicy5sb2FkU3VicGFja2FnZS5iaW5kKGhicyk7XG5yYWwubG9hZFN1YnBhY2thZ2UgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gIHZhciBvYmogPSBvYmplY3Q7XG4gIGlmIChfdHlwZW9mKG9iamVjdCkgPT09IFwib2JqZWN0XCIpIHtcbiAgICBvYmogPSBPYmplY3QuYXNzaWduKHt9LCBvYmplY3QpO1xuICAgIG9iai5zdWJwYWNrYWdlID0gb2JqZWN0Lm5hbWU7XG4gIH1cbiAgcmV0dXJuIF9sb2FkU3VicGFja2FnZS5jYWxsKHRoaXMsIG9iaik7XG59O1xuXG59LHt9XSw1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX3V0aWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlsXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiZW52XCIsIGhicywgcmFsKTtcbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImdldFN5c3RlbUluZm9cIiwgaGJzLCByYWwpO1xuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiZ2V0U3lzdGVtSW5mb1N5bmNcIiwgaGJzLCByYWwpO1xuXG59LHtcIi4uLy4uL3V0aWxcIjozMX1dLDY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfanNiID0gd2luZG93LmpzYjtcbmlmICghX2pzYikge1xuICBfanNiID0ge307XG59XG52YXIgX3RvdWNoZXMgPSBbXTtcbnZhciBfZ2V0VG91Y2hJbmRleCA9IGZ1bmN0aW9uIF9nZXRUb3VjaEluZGV4KHRvdWNoKSB7XG4gIHZhciBlbGVtZW50O1xuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgX3RvdWNoZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgZWxlbWVudCA9IF90b3VjaGVzW2luZGV4XTtcbiAgICBpZiAodG91Y2guaWRlbnRpZmllciA9PT0gZWxlbWVudC5pZGVudGlmaWVyKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn07XG52YXIgX2NvcHlPYmplY3QgPSBmdW5jdGlvbiBfY29weU9iamVjdChmcm9tT2JqLCB0b09iamVjdCkge1xuICBmb3IgKHZhciBrZXkgaW4gZnJvbU9iaikge1xuICAgIGlmIChmcm9tT2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHRvT2JqZWN0W2tleV0gPSBmcm9tT2JqW2tleV07XG4gICAgfVxuICB9XG59O1xudmFyIF9saXN0ZW5lck1hcCA9IHtcbiAgXCJ0b3VjaHN0YXJ0XCI6IFtdLFxuICBcInRvdWNobW92ZVwiOiBbXSxcbiAgXCJ0b3VjaGVuZFwiOiBbXSxcbiAgXCJ0b3VjaGNhbmNlbFwiOiBbXVxufTtcbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcihrZXksIHZhbHVlKSB7XG4gIHZhciBsaXN0ZW5lckFyciA9IF9saXN0ZW5lck1hcFtrZXldO1xuICBmb3IgKHZhciBpbmRleCA9IDAsIGxlbmd0aCA9IGxpc3RlbmVyQXJyLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICBpZiAodmFsdWUgPT09IGxpc3RlbmVyQXJyW2luZGV4XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBsaXN0ZW5lckFyci5wdXNoKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIF9yZW1vdmVMaXN0ZW5lcihrZXksIHZhbHVlKSB7XG4gIHZhciBsaXN0ZW5lckFyciA9IF9saXN0ZW5lck1hcFtrZXldIHx8IFtdO1xuICB2YXIgbGVuZ3RoID0gbGlzdGVuZXJBcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyArK2luZGV4KSB7XG4gICAgaWYgKHZhbHVlID09PSBsaXN0ZW5lckFycltpbmRleF0pIHtcbiAgICAgIGxpc3RlbmVyQXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG52YXIgX2hhc0RlbGxXaXRoID0gZmFsc2U7XG52YXIgX3N5c3RlbUluZm8gPSBoYnMuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbmlmICh3aW5kb3cuaW5uZXJXaWR0aCAmJiBfc3lzdGVtSW5mby53aW5kb3dXaWR0aCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgX2hhc0RlbGxXaXRoID0gdHJ1ZTtcbn1cbnZhciBfdG91Y2hFdmVudEhhbmRsZXJGYWN0b3J5ID0gZnVuY3Rpb24gX3RvdWNoRXZlbnRIYW5kbGVyRmFjdG9yeSh0eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY2hhbmdlZFRvdWNoZXMpIHtcbiAgICBpZiAodHlwZW9mIGNoYW5nZWRUb3VjaGVzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIF9hZGRMaXN0ZW5lcih0eXBlLCBjaGFuZ2VkVG91Y2hlcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0b3VjaEV2ZW50ID0gbmV3IFRvdWNoRXZlbnQodHlwZSk7XG4gICAgdmFyIGluZGV4O1xuICAgIGlmICh0eXBlID09PSBcInRvdWNoc3RhcnRcIikge1xuICAgICAgY2hhbmdlZFRvdWNoZXMuZm9yRWFjaChmdW5jdGlvbiAodG91Y2gpIHtcbiAgICAgICAgaW5kZXggPSBfZ2V0VG91Y2hJbmRleCh0b3VjaCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgX2NvcHlPYmplY3QodG91Y2gsIF90b3VjaGVzW2luZGV4XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHRtcCA9IHt9O1xuICAgICAgICAgIF9jb3B5T2JqZWN0KHRvdWNoLCB0bXApO1xuICAgICAgICAgIF90b3VjaGVzLnB1c2godG1wKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInRvdWNobW92ZVwiKSB7XG4gICAgICBjaGFuZ2VkVG91Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGluZGV4ID0gX2dldFRvdWNoSW5kZXgoZWxlbWVudCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgX2NvcHlPYmplY3QoZWxlbWVudCwgX3RvdWNoZXNbaW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInRvdWNoZW5kXCIgfHwgdHlwZSA9PT0gXCJ0b3VjaGNhbmNlbFwiKSB7XG4gICAgICBjaGFuZ2VkVG91Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGluZGV4ID0gX2dldFRvdWNoSW5kZXgoZWxlbWVudCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgX3RvdWNoZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHZhciB0b3VjaGVzID0gW10uY29uY2F0KF90b3VjaGVzKTtcbiAgICB2YXIgX2NoYW5nZWRUb3VjaGVzID0gW107XG4gICAgY2hhbmdlZFRvdWNoZXMuZm9yRWFjaChmdW5jdGlvbiAodG91Y2gpIHtcbiAgICAgIHZhciBsZW5ndGggPSB0b3VjaGVzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIF9pbmRleCA9IDA7IF9pbmRleCA8IGxlbmd0aDsgKytfaW5kZXgpIHtcbiAgICAgICAgdmFyIF90b3VjaCA9IHRvdWNoZXNbX2luZGV4XTtcbiAgICAgICAgaWYgKHRvdWNoLmlkZW50aWZpZXIgPT09IF90b3VjaC5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgX2NoYW5nZWRUb3VjaGVzLnB1c2goX3RvdWNoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF9jaGFuZ2VkVG91Y2hlcy5wdXNoKHRvdWNoKTtcbiAgICB9KTtcbiAgICB0b3VjaEV2ZW50LnRvdWNoZXMgPSB0b3VjaGVzO1xuICAgIHRvdWNoRXZlbnQudGFyZ2V0VG91Y2hlcyA9IHRvdWNoZXM7XG4gICAgdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlcyA9IF9jaGFuZ2VkVG91Y2hlcztcbiAgICBpZiAoX2hhc0RlbGxXaXRoKSB7XG4gICAgICB0b3VjaGVzLmZvckVhY2goZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICAgIHRvdWNoLmNsaWVudFggLz0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIHRvdWNoLmNsaWVudFkgLz0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIHRvdWNoLnBhZ2VYIC89IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICB0b3VjaC5wYWdlWSAvPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgIH0pO1xuICAgICAgaWYgKHR5cGUgPT09IFwidG91Y2hjYW5jZWxcIiB8fCB0eXBlID09PSBcInRvdWNoZW5kXCIpIHtcbiAgICAgICAgX2NoYW5nZWRUb3VjaGVzLmZvckVhY2goZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICAgICAgdG91Y2guY2xpZW50WCAvPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgICB0b3VjaC5jbGllbnRZIC89IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICAgIHRvdWNoLnBhZ2VYIC89IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICAgIHRvdWNoLnBhZ2VZIC89IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGxpc3RlbmVyQXJyID0gX2xpc3RlbmVyTWFwW3R5cGVdO1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lckFyci5sZW5ndGg7XG4gICAgZm9yICh2YXIgX2luZGV4MiA9IDA7IF9pbmRleDIgPCBsZW5ndGg7IF9pbmRleDIrKykge1xuICAgICAgbGlzdGVuZXJBcnJbX2luZGV4Ml0odG91Y2hFdmVudCk7XG4gICAgfVxuICB9O1xufTtcbmlmIChoYnMub25Ub3VjaFN0YXJ0KSB7XG4gIHJhbC5vblRvdWNoU3RhcnQgPSBoYnMub25Ub3VjaFN0YXJ0O1xuICByYWwub2ZmVG91Y2hTdGFydCA9IGhicy5vZmZUb3VjaFN0YXJ0O1xufSBlbHNlIHtcbiAgX2pzYi5vblRvdWNoU3RhcnQgPSBfdG91Y2hFdmVudEhhbmRsZXJGYWN0b3J5KCd0b3VjaHN0YXJ0Jyk7XG4gIF9qc2Iub2ZmVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIF9yZW1vdmVMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgY2FsbGJhY2spO1xuICB9O1xuICByYWwub25Ub3VjaFN0YXJ0ID0gX2pzYi5vblRvdWNoU3RhcnQuYmluZChfanNiKTtcbiAgcmFsLm9mZlRvdWNoU3RhcnQgPSBfanNiLm9mZlRvdWNoU3RhcnQuYmluZChfanNiKTtcbn1cbmlmIChoYnMub25Ub3VjaE1vdmUpIHtcbiAgcmFsLm9uVG91Y2hNb3ZlID0gaGJzLm9uVG91Y2hNb3ZlO1xuICByYWwub2ZmVG91Y2hNb3ZlID0gaGJzLm9mZlRvdWNoTW92ZTtcbn0gZWxzZSB7XG4gIF9qc2Iub25Ub3VjaE1vdmUgPSBfdG91Y2hFdmVudEhhbmRsZXJGYWN0b3J5KCd0b3VjaG1vdmUnKTtcbiAgX2pzYi5vZmZUb3VjaE1vdmUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBfcmVtb3ZlTGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgY2FsbGJhY2spO1xuICB9O1xuICByYWwub25Ub3VjaE1vdmUgPSBfanNiLm9uVG91Y2hNb3ZlLmJpbmQoX2pzYik7XG4gIHJhbC5vZmZUb3VjaE1vdmUgPSBfanNiLm9mZlRvdWNoTW92ZS5iaW5kKF9qc2IpO1xufVxuaWYgKGhicy5vblRvdWNoQ2FuY2VsKSB7XG4gIHJhbC5vblRvdWNoQ2FuY2VsID0gaGJzLm9uVG91Y2hDYW5jZWw7XG4gIHJhbC5vZmZUb3VjaENhbmNlbCA9IGhicy5vZmZUb3VjaENhbmNlbDtcbn0gZWxzZSB7XG4gIF9qc2Iub25Ub3VjaENhbmNlbCA9IF90b3VjaEV2ZW50SGFuZGxlckZhY3RvcnkoJ3RvdWNoY2FuY2VsJyk7XG4gIF9qc2Iub2ZmVG91Y2hDYW5jZWwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBfcmVtb3ZlTGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCBjYWxsYmFjayk7XG4gIH07XG4gIHJhbC5vblRvdWNoQ2FuY2VsID0gX2pzYi5vblRvdWNoQ2FuY2VsLmJpbmQoX2pzYik7XG4gIHJhbC5vZmZUb3VjaENhbmNlbCA9IF9qc2Iub2ZmVG91Y2hDYW5jZWwuYmluZChfanNiKTtcbn1cbmlmIChoYnMub25Ub3VjaEVuZCkge1xuICByYWwub25Ub3VjaEVuZCA9IGhicy5vblRvdWNoRW5kO1xuICByYWwub2ZmVG91Y2hFbmQgPSBoYnMub2ZmVG91Y2hFbmQ7XG59IGVsc2Uge1xuICBfanNiLm9uVG91Y2hFbmQgPSBfdG91Y2hFdmVudEhhbmRsZXJGYWN0b3J5KCd0b3VjaGVuZCcpO1xuICBfanNiLm9mZlRvdWNoRW5kID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgX3JlbW92ZUxpc3RlbmVyKFwidG91Y2hlbmRcIiwgY2FsbGJhY2spO1xuICB9O1xuICByYWwub25Ub3VjaEVuZCA9IF9qc2Iub25Ub3VjaEVuZC5iaW5kKF9qc2IpO1xuICByYWwub2ZmVG91Y2hFbmQgPSBfanNiLm9mZlRvdWNoRW5kLmJpbmQoX2pzYik7XG59XG5cbn0se31dLDc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfbGlzdGVuZXJzID0gW107XG5yYWwub25BY2NlbGVyb21ldGVyQ2hhbmdlID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBsZW5ndGggPSBfbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICBpZiAobGlzdGVuZXIgPT09IF9saXN0ZW5lcnNbaW5kZXhdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgfVxufTtcbnJhbC5vZmZBY2NlbGVyb21ldGVyQ2hhbmdlID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gIHZhciBsZW5ndGggPSBfbGlzdGVuZXJzLmxlbmd0aDtcbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgKytpbmRleCkge1xuICAgIGlmIChsaXN0ZW5lciA9PT0gX2xpc3RlbmVyc1tpbmRleF0pIHtcbiAgICAgIF9saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG52YXIgX2FkZEV2ZW50TGlzdGVuZXIgPSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lci5iaW5kKHdpbmRvdyk7XG52YXIgX29uQWNjZWxlcm9tZXRlckNoYW5nZTtcbnJhbC5zdGFydEFjY2VsZXJvbWV0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghX29uQWNjZWxlcm9tZXRlckNoYW5nZSkge1xuICAgIF9vbkFjY2VsZXJvbWV0ZXJDaGFuZ2UgPSBmdW5jdGlvbiBfb25BY2NlbGVyb21ldGVyQ2hhbmdlKGV2ZW50KSB7XG4gICAgICB2YXIgYWNjZWxlcmF0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eSk7XG4gICAgICBhY2NlbGVyYXRpb24ueCAvPSAtMTA7XG4gICAgICBhY2NlbGVyYXRpb24ueSAvPSAtMTA7XG4gICAgICBhY2NlbGVyYXRpb24ueiAvPSAtMTA7XG4gICAgICBfbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICB4OiBhY2NlbGVyYXRpb24ueCxcbiAgICAgICAgICB5OiBhY2NlbGVyYXRpb24ueSxcbiAgICAgICAgICB6OiBhY2NlbGVyYXRpb24ueixcbiAgICAgICAgICB0aW1lc3RhbXA6IGV2ZW50LnRpbWVTdGFtcCB8fCBEYXRlLm5vdygpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBfYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZW1vdGlvblwiLCBfb25BY2NlbGVyb21ldGVyQ2hhbmdlLCBmYWxzZSk7XG4gICAganNiLmRldmljZS5zZXRNb3Rpb25FbmFibGVkKHRydWUpO1xuICB9XG59O1xudmFyIF9yZW1vdmVFdmVudExpc3RlbmVyID0gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIuYmluZCh3aW5kb3cpO1xucmFsLnN0b3BBY2NlbGVyb21ldGVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAoX29uQWNjZWxlcm9tZXRlckNoYW5nZSkge1xuICAgIF9yZW1vdmVFdmVudExpc3RlbmVyKFwiZGV2aWNlbW90aW9uXCIsIF9vbkFjY2VsZXJvbWV0ZXJDaGFuZ2UsIGZhbHNlKTtcbiAgICBfb25BY2NlbGVyb21ldGVyQ2hhbmdlID0gbnVsbDtcbiAgICBqc2IuZGV2aWNlLnNldE1vdGlvbkVuYWJsZWQoZmFsc2UpO1xuICB9XG59O1xuXG59LHt9XSw4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX3V0aWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlsXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiZ2V0QmF0dGVyeUluZm9cIiwgaGJzLCByYWwpO1xuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiZ2V0QmF0dGVyeUluZm9TeW5jXCIsIGhicywgcmFsKTtcblxufSx7XCIuLi8uLi91dGlsXCI6MzF9XSw5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX3V0aWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlsXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiZ2V0RmlsZVN5c3RlbU1hbmFnZXJcIiwgaGJzLCByYWwpO1xuXG59LHtcIi4uLy4uL3V0aWxcIjozMX1dLDEwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX3V0aWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlsXCIpKTtcbnZhciBfZmVhdHVyZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2ZlYXR1cmVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5pZiAod2luZG93LmpzYikge1xuICB3aW5kb3cucmFsID0gT2JqZWN0LmFzc2lnbih7fSwgd2luZG93LmpzYik7XG59IGVsc2Uge1xuICB3aW5kb3cucmFsID0ge307XG59XG5yZXF1aXJlKFwiLi9iYXNlL2xpZmVjeWNsZVwiKTtcbnJlcXVpcmUoXCIuL2Jhc2Uvc3VicGFja2FnZVwiKTtcbnJlcXVpcmUoXCIuL2Jhc2Uvc3lzdGVtLWluZm9cIik7XG5yZXF1aXJlKFwiLi9iYXNlL3RvdWNoLWV2ZW50XCIpO1xucmVxdWlyZShcIi4vYmFzZS9wZXJmb3JtYW5jZVwiKTtcbnJlcXVpcmUoXCIuL2RldmljZS9hY2NlbGVyb21ldGVyXCIpO1xucmVxdWlyZShcIi4vZGV2aWNlL2JhdHRlcnlcIik7XG5yZXF1aXJlKFwiLi9maWxlL2ZpbGUtc3lzdGVtLW1hbmFnZXJcIik7XG5yZXF1aXJlKFwiLi9pbnRlcmZhY2Uva2V5Ym9hcmRcIik7XG5yZXF1aXJlKFwiLi9pbnRlcmZhY2Uvd2luZG93XCIpO1xucmVxdWlyZShcIi4vbWVkaWEvYXVkaW9cIik7XG5yZXF1aXJlKFwiLi9uZXR3b3JrL2Rvd25sb2FkXCIpO1xucmVxdWlyZShcIi4vcmVuZGVyaW5nL2NhbnZhc1wiKTtcbnJlcXVpcmUoXCIuL3JlbmRlcmluZy93ZWJnbFwiKTtcbnJlcXVpcmUoXCIuL3JlbmRlcmluZy9mb250XCIpO1xucmVxdWlyZShcIi4vcmVuZGVyaW5nL2ZyYW1lXCIpO1xucmVxdWlyZShcIi4vcmVuZGVyaW5nL2ltYWdlXCIpO1xucmVxdWlyZShcIi4vdW5pdHlzZGsvaW5kZXhcIik7XG5mb3IgKHZhciBrZXkgaW4gX2ZlYXR1cmVbXCJkZWZhdWx0XCJdKSB7XG4gIGlmIChrZXkgPT09IFwic2V0RmVhdHVyZVwiIHx8IGtleSA9PT0gXCJyZWdpc3RlckZlYXR1cmVQcm9wZXJ0eVwiIHx8IGtleSA9PT0gXCJ1bnJlZ2lzdGVyRmVhdHVyZVByb3BlcnR5XCIpIHtcbiAgICBjb250aW51ZTtcbiAgfVxuICBpZiAoX2ZlYXR1cmVbXCJkZWZhdWx0XCJdLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICBfdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oa2V5LCBfZmVhdHVyZVtcImRlZmF1bHRcIl0sIHJhbCk7XG4gIH1cbn1cblxufSx7XCIuLi9mZWF0dXJlXCI6MSxcIi4uL3V0aWxcIjozMSxcIi4vYmFzZS9saWZlY3ljbGVcIjoyLFwiLi9iYXNlL3BlcmZvcm1hbmNlXCI6MyxcIi4vYmFzZS9zdWJwYWNrYWdlXCI6NCxcIi4vYmFzZS9zeXN0ZW0taW5mb1wiOjUsXCIuL2Jhc2UvdG91Y2gtZXZlbnRcIjo2LFwiLi9kZXZpY2UvYWNjZWxlcm9tZXRlclwiOjcsXCIuL2RldmljZS9iYXR0ZXJ5XCI6OCxcIi4vZmlsZS9maWxlLXN5c3RlbS1tYW5hZ2VyXCI6OSxcIi4vaW50ZXJmYWNlL2tleWJvYXJkXCI6MTEsXCIuL2ludGVyZmFjZS93aW5kb3dcIjoxMixcIi4vbWVkaWEvYXVkaW9cIjoxMyxcIi4vbmV0d29yay9kb3dubG9hZFwiOjE0LFwiLi9yZW5kZXJpbmcvY2FudmFzXCI6MTUsXCIuL3JlbmRlcmluZy9mb250XCI6MTYsXCIuL3JlbmRlcmluZy9mcmFtZVwiOjE3LFwiLi9yZW5kZXJpbmcvaW1hZ2VcIjoxOCxcIi4vcmVuZGVyaW5nL3dlYmdsXCI6MTksXCIuL3VuaXR5c2RrL2luZGV4XCI6MjR9XSwxMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcIm9uS2V5Ym9hcmRJbnB1dFwiLCBoYnMsIHJhbCk7XG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJvbktleWJvYXJkQ29uZmlybVwiLCBoYnMsIHJhbCk7XG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJvbktleWJvYXJkQ29tcGxldGVcIiwgaGJzLCByYWwpO1xuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwib2ZmS2V5Ym9hcmRJbnB1dFwiLCBoYnMsIHJhbCk7XG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJvZmZLZXlib2FyZENvbmZpcm1cIiwgaGJzLCByYWwpO1xuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwib2ZmS2V5Ym9hcmRDb21wbGV0ZVwiLCBoYnMsIHJhbCk7XG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJoaWRlS2V5Ym9hcmRcIiwgaGJzLCByYWwpO1xuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwic2hvd0tleWJvYXJkXCIsIGhicywgcmFsKTtcbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcInVwZGF0ZUtleWJvYXJkXCIsIGhicywgcmFsKTtcblxufSx7XCIuLi8uLi91dGlsXCI6MzF9XSwxMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9vbldpbmRvd1Jlc2l6ZSA9IGhicy5vbldpbmRvd1Jlc2l6ZTtcbnJhbC5vbldpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uIChjYWxsQmFjaykge1xuICBfb25XaW5kb3dSZXNpemUoZnVuY3Rpb24gKHNpemUpIHtcbiAgICBjYWxsQmFjayhzaXplLndpZHRoIHx8IHNpemUud2luZG93V2lkdGgsIHNpemUuaGVpZ2h0IHx8IHNpemUud2luZG93SGVpZ2h0KTtcbiAgfSk7XG59O1xud2luZG93LnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS53YXJuKCd3aW5kb3cucmVzaXplKCkgaXMgZGVwcmVjYXRlZCcpO1xufTtcblxufSx7fV0sMTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW5uZXJDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vaW5uZXItY29udGV4dFwiKSk7XG52YXIgX3V0aWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlsXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiQXVkaW9FbmdpbmVcIiwgaGJzLCByYWwpO1xuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiY3JlYXRlSW5uZXJBdWRpb0NvbnRleHRcIiwgaGJzLCByYWwsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKGhicy5BdWRpb0VuZ2luZSkge1xuICAgIHJhbC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAoMCwgX2lubmVyQ29udGV4dFtcImRlZmF1bHRcIl0pKGhicy5BdWRpb0VuZ2luZSk7XG4gICAgfTtcbiAgfVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgY3R4ID0gcmFsLmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XG4gIHZhciBwcm90b3R5cGUgPSBjdHguX19wcm90b19fLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgXCJjdXJyZW50VGltZVwiKTtcbiAgaWYgKGRlc2MpIHtcbiAgICB2YXIgX2dldCA9IGRlc2MuZ2V0O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsIFwiY3VycmVudFRpbWVcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KF9nZXQuY2FsbCh0aGlzKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgdmFyIF93ZWFrTWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIG9sZFNlZWsgPSBwcm90b3R5cGUuc2VlaztcbiAgdmFyIG9sZFBsYXkgPSBwcm90b3R5cGUucGxheTtcbiAgcHJvdG90eXBlLnNlZWsgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgIF93ZWFrTWFwLnNldCh0aGlzLCB7XG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICAgICAgfSk7XG4gICAgfVxuICAgIG9sZFNlZWsuY2FsbCh0aGlzLCBwb3NpdGlvbik7XG4gIH07XG4gIHByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIG9sZFBsYXkuY2FsbCh0aGlzKTtcbiAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG4gICAgaWYgKHByaXZhdGVUaGlzICYmIHByaXZhdGVUaGlzLnBvc2l0aW9uID49IDApIHtcbiAgICAgIG9sZFNlZWsuY2FsbCh0aGlzLCBwcml2YXRlVGhpcy5wb3NpdGlvbik7XG4gICAgICBwcml2YXRlVGhpcy5wb3NpdGlvbiA9IC0xO1xuICAgIH1cbiAgfTtcbn0pO1xuXG59LHtcIi4uLy4uL2lubmVyLWNvbnRleHRcIjozMCxcIi4uLy4uL3V0aWxcIjozMX1dLDE0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX3V0aWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlsXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiZG93bmxvYWRGaWxlXCIsIGhicywgcmFsKTtcblxufSx7XCIuLi8uLi91dGlsXCI6MzF9XSwxNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbFwiKSk7XG52YXIgX2ZlYXR1cmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9mZWF0dXJlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiY3JlYXRlQ2FudmFzXCIsIGhicywgcmFsLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBmZWF0dXJlVmFsdWUgPSBcInVuc3VwcG9ydGVkXCI7XG4gIGlmIChkb2N1bWVudCAmJiB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZmVhdHVyZVZhbHVlID0gXCJ3cmFwcGVyXCI7XG4gICAgcmFsLmNyZWF0ZUNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIH07XG4gIH1cbiAgX2ZlYXR1cmVbXCJkZWZhdWx0XCJdLnNldEZlYXR1cmUoXCJyYWwuY3JlYXRlQ2FudmFzXCIsIFwic3BlY1wiLCBmZWF0dXJlVmFsdWUpO1xufSk7XG52YXIgX2hic19nZXRGZWF0dXJlID0gaGJzLmdldEZlYXR1cmU7XG52YXIgX2hic19zZXRGZWF0dXJlID0gaGJzLnNldEZlYXR1cmU7XG5fZmVhdHVyZVtcImRlZmF1bHRcIl0ucmVnaXN0ZXJGZWF0dXJlUHJvcGVydHkoX2ZlYXR1cmVbXCJkZWZhdWx0XCJdLkNBTlZBU19DT05URVhUMkRfVEVYVEJBU0VMSU5FX0FMUEhBQkVUSUMubmFtZSwgZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIF9oYnNfZ2V0RmVhdHVyZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIHZhbHVlID0gX2hic19nZXRGZWF0dXJlKF9mZWF0dXJlW1wiZGVmYXVsdFwiXS5DQU5WQVNfQ09OVEVYVDJEX1RFWFRCQVNFTElORV9BTFBIQUJFVElDLm5hbWUpO1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIF9mZWF0dXJlW1wiZGVmYXVsdFwiXS5DQU5WQVNfQ09OVEVYVDJEX1RFWFRCQVNFTElORV9BTFBIQUJFVElDLmVuYWJsZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gX2ZlYXR1cmVbXCJkZWZhdWx0XCJdLkZFQVRVUkVfVU5TVVBQT1JUO1xufSwgdW5kZWZpbmVkKTtcbl9mZWF0dXJlW1wiZGVmYXVsdFwiXS5yZWdpc3RlckZlYXR1cmVQcm9wZXJ0eShfZmVhdHVyZVtcImRlZmF1bHRcIl0uQ0FOVkFTX0NPTlRFWFQyRF9URVhUQkFTRUxJTkVfREVGQVVMVC5uYW1lLCBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgX2hic19nZXRGZWF0dXJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgdmFsdWUgPSBfaGJzX2dldEZlYXR1cmUoX2ZlYXR1cmVbXCJkZWZhdWx0XCJdLkNBTlZBU19DT05URVhUMkRfVEVYVEJBU0VMSU5FX0RFRkFVTFQubmFtZSk7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gX2ZlYXR1cmVbXCJkZWZhdWx0XCJdLkNBTlZBU19DT05URVhUMkRfVEVYVEJBU0VMSU5FX0RFRkFVTFQuYWxwaGFiZXRpYztcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIF9mZWF0dXJlW1wiZGVmYXVsdFwiXS5DQU5WQVNfQ09OVEVYVDJEX1RFWFRCQVNFTElORV9ERUZBVUxULmJvdHRvbTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gX2ZlYXR1cmVbXCJkZWZhdWx0XCJdLkZFQVRVUkVfVU5TVVBQT1JUO1xufSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgX2hic19zZXRGZWF0dXJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlIF9mZWF0dXJlW1wiZGVmYXVsdFwiXS5DQU5WQVNfQ09OVEVYVDJEX1RFWFRCQVNFTElORV9ERUZBVUxULmFscGhhYmV0aWM6XG4gICAgICAgIHZhbHVlID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIF9mZWF0dXJlW1wiZGVmYXVsdFwiXS5DQU5WQVNfQ09OVEVYVDJEX1RFWFRCQVNFTElORV9ERUZBVUxULmJvdHRvbTpcbiAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIF9oYnNfc2V0RmVhdHVyZShfZmVhdHVyZVtcImRlZmF1bHRcIl0uQ0FOVkFTX0NPTlRFWFQyRF9URVhUQkFTRUxJTkVfREVGQVVMVC5uYW1lLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSk7XG5cbn0se1wiLi4vLi4vZmVhdHVyZVwiOjEsXCIuLi8uLi91dGlsXCI6MzF9XSwxNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImxvYWRGb250XCIsIGhicywgcmFsKTtcblxufSx7XCIuLi8uLi91dGlsXCI6MzF9XSwxNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuaWYgKHdpbmRvdy5qc2IgJiYganNiLnNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZCkge1xuICByYWwuc2V0UHJlZmVycmVkRnJhbWVzUGVyU2Vjb25kID0ganNiLnNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZC5iaW5kKGpzYik7XG59IGVsc2UgaWYgKGhicy5zZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQpIHtcbiAgcmFsLnNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZCA9IGhicy5zZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQuYmluZChoYnMpO1xufSBlbHNlIHtcbiAgcmFsLnNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVGhlIHNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZCBpcyBub3QgZGVmaW5lIVwiKTtcbiAgfTtcbn1cblxufSx7fV0sMTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdXRpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxcIikpO1xudmFyIF9mZWF0dXJlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vZmVhdHVyZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImxvYWRJbWFnZURhdGFcIiwgaGJzLCByYWwsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHdpbmRvdy5qc2IgJiYgdHlwZW9mIGpzYi5sb2FkSW1hZ2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJhbC5sb2FkSW1hZ2VEYXRhID0ganNiLmxvYWRJbWFnZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKFwibG9hZEltYWdlRGF0YSBpcyBub3QgZnVuY3Rpb25cIik7XG4gIH1cbn0pO1xuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiY3JlYXRlSW1hZ2VcIiwgaGJzLCByYWwsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZlYXR1cmVWYWx1ZSA9IFwidW5zdXBwb3J0ZWRcIjtcbiAgaWYgKGRvY3VtZW50ICYmIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmZWF0dXJlVmFsdWUgPSBcIndyYXBwZXJcIjtcbiAgICByYWwuY3JlYXRlSW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltYWdlXCIpO1xuICAgIH07XG4gIH1cbn0pO1xudmFyIGZlYXR1cmVWYWx1ZSA9IFwiaHVhd2VpX3BsYXRmb3JtX3N1cHBvcnRcIjtcbl9mZWF0dXJlW1wiZGVmYXVsdFwiXS5zZXRGZWF0dXJlKFwicmFsLmNyZWF0ZUltYWdlXCIsIFwic3BlY1wiLCBmZWF0dXJlVmFsdWUpO1xuXG59LHtcIi4uLy4uL2ZlYXR1cmVcIjoxLFwiLi4vLi4vdXRpbFwiOjMxfV0sMTk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmICh3aW5kb3cuX19nbCkge1xuICB2YXIgZ2wgPSB3aW5kb3cuX19nbDtcbiAgdmFyIF9nbFRleEltYWdlMkQgPSBnbC50ZXhJbWFnZTJEO1xuICBnbC50ZXhJbWFnZTJEID0gZnVuY3Rpb24gKHRhcmdldCwgbGV2ZWwsIGludGVybmFsZm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCBib3JkZXIsIGZvcm1hdCwgdHlwZSwgcGl4ZWxzKSB7XG4gICAgdmFyIGFyZ2MgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmIChhcmdjID09PSA2KSB7XG4gICAgICB2YXIgaW1hZ2UgPSBib3JkZXI7XG4gICAgICB0eXBlID0gaGVpZ2h0O1xuICAgICAgZm9ybWF0ID0gd2lkdGg7XG4gICAgICBpZiAoaW1hZ2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgIF9nbFRleEltYWdlMkQodGFyZ2V0LCBsZXZlbCwgaW1hZ2UuX2dsSW50ZXJuYWxGb3JtYXQsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsIDAsIGltYWdlLl9nbEZvcm1hdCwgaW1hZ2UuX2dsVHlwZSwgaW1hZ2UuX2RhdGEpO1xuICAgICAgfSBlbHNlIGlmIChpbWFnZSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIGlmIChpbWFnZS5fY29udGV4dDJEICYmIGltYWdlLl9jb250ZXh0MkQuX2dldERhdGEpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IGltYWdlLl9jb250ZXh0MkQuX2dldERhdGEoKTtcbiAgICAgICAgICBfZ2xUZXhJbWFnZTJEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsZm9ybWF0LCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LCAwLCBmb3JtYXQsIHR5cGUsIGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGltYWdlIGFyZ3VtZW50IGdsLnRleEltYWdlMkQhXCIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGltYWdlLmhlaWdodCAmJiBpbWFnZS53aWR0aCAmJiBpbWFnZS5kYXRhKSB7XG4gICAgICAgIHZhciBlcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgX2dsVGV4SW1hZ2UyRCh0YXJnZXQsIGxldmVsLCBpbnRlcm5hbGZvcm1hdCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCwgMCwgZm9ybWF0LCB0eXBlLCBpbWFnZS5kYXRhKTtcbiAgICAgICAgY29uc29sZS5lcnJvciA9IGVycm9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgcGl4ZWwgYXJndW1lbnQgcGFzc2VkIHRvIGdsLnRleEltYWdlMkQhXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXJnYyA9PT0gOSkge1xuICAgICAgX2dsVGV4SW1hZ2UyRCh0YXJnZXQsIGxldmVsLCBpbnRlcm5hbGZvcm1hdCwgd2lkdGgsIGhlaWdodCwgYm9yZGVyLCBmb3JtYXQsIHR5cGUsIHBpeGVscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJnbC50ZXhJbWFnZTJEOiBpbnZhbGlkIGFyZ3VtZW50IGNvdW50IVwiKTtcbiAgICB9XG4gIH07XG4gIHZhciBfZ2xUZXhTdWJJbWFnZTJEID0gZ2wudGV4U3ViSW1hZ2UyRDtcbiAgZ2wudGV4U3ViSW1hZ2UyRCA9IGZ1bmN0aW9uICh0YXJnZXQsIGxldmVsLCB4b2Zmc2V0LCB5b2Zmc2V0LCB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIHR5cGUsIHBpeGVscykge1xuICAgIHZhciBhcmdjID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAoYXJnYyA9PT0gNykge1xuICAgICAgdmFyIGltYWdlID0gZm9ybWF0O1xuICAgICAgdHlwZSA9IGhlaWdodDtcbiAgICAgIGZvcm1hdCA9IHdpZHRoO1xuICAgICAgaWYgKGltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICBfZ2xUZXhTdWJJbWFnZTJEKHRhcmdldCwgbGV2ZWwsIHhvZmZzZXQsIHlvZmZzZXQsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsIGltYWdlLl9nbEZvcm1hdCwgaW1hZ2UuX2dsVHlwZSwgaW1hZ2UuX2RhdGEpO1xuICAgICAgfSBlbHNlIGlmIChpbWFnZSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIGlmIChpbWFnZS5fY29udGV4dDJEICYmIGltYWdlLl9jb250ZXh0MkQuX2dldERhdGEpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IGltYWdlLl9jb250ZXh0MkQuX2dldERhdGEoKTtcbiAgICAgICAgICBfZ2xUZXhTdWJJbWFnZTJEKHRhcmdldCwgbGV2ZWwsIHhvZmZzZXQsIHlvZmZzZXQsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsIGZvcm1hdCwgdHlwZSwgZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgaW1hZ2UgYXJndW1lbnQgZ2wudGV4U3ViSW1hZ2UyRCFcIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaW1hZ2UuaGVpZ2h0ICYmIGltYWdlLndpZHRoICYmIGltYWdlLmRhdGEpIHtcbiAgICAgICAgdmFyIGVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgICAgY29uc29sZS5lcnJvciA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICBfZ2xUZXhTdWJJbWFnZTJEKHRhcmdldCwgbGV2ZWwsIHhvZmZzZXQsIHlvZmZzZXQsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsIGZvcm1hdCwgdHlwZSwgaW1hZ2UuZGF0YSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IgPSBlcnJvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIHBpeGVsIGFyZ3VtZW50IHBhc3NlZCB0byBnbC50ZXhTdWJJbWFnZTJEIVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFyZ2MgPT09IDkpIHtcbiAgICAgIF9nbFRleFN1YkltYWdlMkQodGFyZ2V0LCBsZXZlbCwgeG9mZnNldCwgeW9mZnNldCwgd2lkdGgsIGhlaWdodCwgZm9ybWF0LCB0eXBlLCBwaXhlbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcImdsLnRleEltYWdlMkQ6IGludmFsaWQgYXJndW1lbnQgY291bnQhXCIpLnN0YWNrKTtcbiAgICB9XG4gIH07XG59XG5cbn0se31dLDIwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2Jhc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2VcIikpO1xudmFyIF9jb25zdGFudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29uc3RhbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbnZhciBfZGVmYXVsdCA9IHtcbiAgUUdfR2FtZUxvZ2luOiBmdW5jdGlvbiBRR19HYW1lTG9naW4oY29uZiwgY2FsbGJhY2tJZCkge1xuICAgIHZhciBhcmdzID0gaGFuZGxlTG9naW5DYWxsYmFjayhjYWxsYmFja0lkKTtcbiAgICBxZy5nYW1lTG9naW5XaXRoUmVhbChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF9iYXNlW1wiZGVmYXVsdFwiXS5mb3JtYXRKc29uU3RyKGNvbmYpKSwgYXJncykpO1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIGhhbmRsZUxvZ2luQ2FsbGJhY2soY2FsbGJhY2tJZCkge1xuICByZXR1cm4ge1xuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLnN1Y2Nlc3MsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbkdhbWVMb2dpbkNhbGxiYWNrLCByZXMpO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24gZmFpbChkYXRhLCBjb2RlKSB7XG4gICAgICB2YXIgZXJyb3IgPSB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGNvZGU6IGNvZGVcbiAgICAgIH07XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmZhaWwsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbkdhbWVMb2dpbkNhbGxiYWNrLCBlcnJvcik7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuY29tcGxldGUsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbkdhbWVMb2dpbkNhbGxiYWNrKTtcbiAgICB9XG4gIH07XG59XG5cbn0se1wiLi9iYXNlXCI6MjEsXCIuL2NvbnN0YW50XCI6MjJ9XSwyMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9tb2R1bGVIZWxwZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21vZHVsZS1oZWxwZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG52YXIgX2RlZmF1bHQgPSB7XG4gIGZvcm1hdEpzb25TdHI6IGZ1bmN0aW9uIGZvcm1hdEpzb25TdHIoc3RyKSB7XG4gICAgaWYgKCFzdHIpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgdmFyIGNvbmYgPSBKU09OLnBhcnNlKHN0cik7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjb25mKTtcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgIGlmIChjb25mW3ZdID09PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBjb25mW3ZdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb25mO1xuICB9LFxuICBvbkNhbGxiYWNrUGFyYW1ldGVyOiBmdW5jdGlvbiBvbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIGNhbGxiYWNrVHlwZSwgbWV0aG9kLCByZXNPYmopIHtcbiAgICByZXNPYmouX2NhbGxiYWNrSWQgPSBjYWxsYmFja0lkO1xuICAgIHJlc09iai5fY2FsbGJhY2tUeXBlID0gY2FsbGJhY2tUeXBlO1xuICAgIF9tb2R1bGVIZWxwZXJbXCJkZWZhdWx0XCJdLnNlbmQobWV0aG9kLCBKU09OLnN0cmluZ2lmeShyZXNPYmopKTtcbiAgfSxcbiAgb25DYWxsYmFja05vUGFyYW1ldGVyOiBmdW5jdGlvbiBvbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgY2FsbGJhY2tUeXBlLCBtZXRob2QpIHtcbiAgICBfbW9kdWxlSGVscGVyW1wiZGVmYXVsdFwiXS5zZW5kKG1ldGhvZCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgX2NhbGxiYWNrSWQ6IGNhbGxiYWNrSWQsXG4gICAgICBfY2FsbGJhY2tUeXBlOiBjYWxsYmFja1R5cGVcbiAgICB9KSk7XG4gIH0sXG4gIGNhbGxiYWNrVHlwZToge1xuICAgIHN1Y2Nlc3M6IDAsXG4gICAgZmFpbDogMSxcbiAgICBjb21wbGV0ZTogMlxuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7XCIuL21vZHVsZS1oZWxwZXJcIjoyN31dLDIyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSB7XG4gIG1vZHVsZU5hbWU6IFwiUUdTREtNYW5hZ2VySGFuZGxlclwiLFxuICBtZXRob2Q6IHtcbiAgICBfT25HYW1lTG9naW5DYWxsYmFjazogXCJfT25HYW1lTG9naW5DYWxsYmFja1wiLFxuICAgIF9SZXdhcmRlZFZpZGVvQWRPbkxvYWQ6IFwiX1Jld2FyZGVkVmlkZW9BZE9uTG9hZFwiLFxuICAgIF9SZXdhcmRlZFZpZGVvQWRPbkNsb3NlOiBcIl9SZXdhcmRlZFZpZGVvQWRPbkNsb3NlXCIsXG4gICAgX1Jld2FyZGVkVmlkZW9BZE9uRXJyb3I6IFwiX1Jld2FyZGVkVmlkZW9BZE9uRXJyb3JcIixcbiAgICBfT25DcmVhdGVSZXdhcmRlZFZpZGVvQWRDYWxsYmFjazogXCJfT25DcmVhdGVSZXdhcmRlZFZpZGVvQWRDYWxsYmFja1wiLFxuICAgIF9PbklzRW52UmVhZHlDYWxsYmFjazogXCJfT25Jc0VudlJlYWR5Q2FsbGJhY2tcIixcbiAgICBfT25Jc1NhbmRib3hBY3RpdmF0ZWRDYWxsYmFjazogXCJfT25Jc1NhbmRib3hBY3RpdmF0ZWRDYWxsYmFja1wiLFxuICAgIF9Pbk9idGFpbk93bmVkUHVyY2hhc2VzQ2FsbGJhY2s6IFwiX09uT2J0YWluT3duZWRQdXJjaGFzZXNDYWxsYmFja1wiLFxuICAgIF9Pbk9idGFpblByb2R1Y3RJbmZvQ2FsbGJhY2s6IFwiX09uT2J0YWluUHJvZHVjdEluZm9DYWxsYmFja1wiLFxuICAgIF9PbkNyZWF0ZVB1cmNoYXNlSW50ZW50Q2FsbGJhY2s6IFwiX09uQ3JlYXRlUHVyY2hhc2VJbnRlbnRDYWxsYmFja1wiLFxuICAgIF9PbkNvbnN1bWVPd25lZFB1cmNoYXNlQ2FsbGJhY2s6IFwiX09uQ29uc3VtZU93bmVkUHVyY2hhc2VDYWxsYmFja1wiLFxuICAgIF9Pbk9idGFpbk93bmVkUHVyY2hhc2VSZWNvcmRDYWxsYmFjazogXCJfT25PYnRhaW5Pd25lZFB1cmNoYXNlUmVjb3JkQ2FsbGJhY2tcIixcbiAgICBfT25TdGFydElhcEFjdGl2aXR5Q2FsbGJhY2s6IFwiX09uU3RhcnRJYXBBY3Rpdml0eUNhbGxiYWNrXCIsXG4gICAgX09uSGlkZUtleWJvYXJkQ2FsbGJhY2s6IFwiX09uSGlkZUtleWJvYXJkQ2FsbGJhY2tcIixcbiAgICBfT25TaG93S2V5Ym9hcmRDYWxsYmFjazogXCJfT25TaG93S2V5Ym9hcmRDYWxsYmFja1wiLFxuICAgIF9PblVwZGF0ZUtleWJvYXJkQ2FsbGJhY2s6IFwiX09uVXBkYXRlS2V5Ym9hcmRDYWxsYmFja1wiLFxuICAgIF9PbktleWJvYXJkSW5wdXRDYWxsYmFjazogXCJfT25LZXlib2FyZElucHV0Q2FsbGJhY2tcIixcbiAgICBfT25LZXlib2FyZENvbmZpcm1DYWxsYmFjazogXCJfT25LZXlib2FyZENvbmZpcm1DYWxsYmFja1wiLFxuICAgIF9PbktleWJvYXJkQ29tcGxldGVDYWxsYmFjazogXCJfT25LZXlib2FyZENvbXBsZXRlQ2FsbGJhY2tcIlxuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7fV0sMjM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IHtcbiAgUUdfU2V0UHJlZmVycmVkRnJhbWVzUGVyU2Vjb25kOiBmdW5jdGlvbiBRR19TZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQoZnBzKSB7XG4gICAgcWcuc2V0UHJlZmVycmVkRnJhbWVzUGVyU2Vjb25kKGZwcyk7XG4gIH1cbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHt9XSwyNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9hY2NvdW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hY2NvdW50XCIpKTtcbnZhciBfcmV3YXJkZWRWaWRlb0FkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZXdhcmRlZFZpZGVvQWRcIikpO1xudmFyIF9wYXkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BheVwiKSk7XG52YXIgX2tleWJvYXJkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9rZXlib2FyZFwiKSk7XG52YXIgX2xvY2FsU3RvcmFnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9jYWxTdG9yYWdlXCIpKTtcbnZhciBfZnJhbWVSYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9mcmFtZVJhdGVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5yYWwuUUdfR2FtZUxvZ2luID0gX2FjY291bnRbXCJkZWZhdWx0XCJdLlFHX0dhbWVMb2dpbjtcbnJhbC5RR19DcmVhdGVSZXdhcmRlZFZpZGVvQWQgPSBfcmV3YXJkZWRWaWRlb0FkW1wiZGVmYXVsdFwiXS5RR19DcmVhdGVSZXdhcmRlZFZpZGVvQWQ7XG5yYWwuUUdfUmV3YXJkZWRWaWRlb0FkTG9hZCA9IF9yZXdhcmRlZFZpZGVvQWRbXCJkZWZhdWx0XCJdLlFHX1Jld2FyZGVkVmlkZW9BZExvYWQ7XG5yYWwuUUdfUmV3YXJkZWRWaWRlb0FkU2hvdyA9IF9yZXdhcmRlZFZpZGVvQWRbXCJkZWZhdWx0XCJdLlFHX1Jld2FyZGVkVmlkZW9BZFNob3c7XG5yYWwuUUdfUmV3YXJkZWRWaWRlb0FkRGVzdHJveSA9IF9yZXdhcmRlZFZpZGVvQWRbXCJkZWZhdWx0XCJdLlFHX1Jld2FyZGVkVmlkZW9BZERlc3Ryb3k7XG5yYWwuUUdfU2V0VGFnRm9yQ2hpbGRQcm90ZWN0aW9uID0gX3Jld2FyZGVkVmlkZW9BZFtcImRlZmF1bHRcIl0uUUdfU2V0VGFnRm9yQ2hpbGRQcm90ZWN0aW9uO1xucmFsLlFHX1NldFRhZ0ZvclVuZGVyQWdlT2ZQcm9taXNlID0gX3Jld2FyZGVkVmlkZW9BZFtcImRlZmF1bHRcIl0uUUdfU2V0VGFnRm9yVW5kZXJBZ2VPZlByb21pc2U7XG5yYWwuUUdfU2V0QWRDb250ZW50Q2xhc3NpZmljYXRpb24gPSBfcmV3YXJkZWRWaWRlb0FkW1wiZGVmYXVsdFwiXS5RR19TZXRBZENvbnRlbnRDbGFzc2lmaWNhdGlvbjtcbnJhbC5RR19TZXROb25QZXJzb25hbGl6ZWRBZCA9IF9yZXdhcmRlZFZpZGVvQWRbXCJkZWZhdWx0XCJdLlFHX1NldE5vblBlcnNvbmFsaXplZEFkO1xucmFsLlFHX0lzRW52UmVhZHkgPSBfcGF5W1wiZGVmYXVsdFwiXS5RR19Jc0VudlJlYWR5O1xucmFsLlFHX0lzU2FuZGJveEFjdGl2YXRlZCA9IF9wYXlbXCJkZWZhdWx0XCJdLlFHX0lzU2FuZGJveEFjdGl2YXRlZDtcbnJhbC5RR19PYnRhaW5Pd25lZFB1cmNoYXNlcyA9IF9wYXlbXCJkZWZhdWx0XCJdLlFHX09idGFpbk93bmVkUHVyY2hhc2VzO1xucmFsLlFHX09idGFpblByb2R1Y3RJbmZvID0gX3BheVtcImRlZmF1bHRcIl0uUUdfT2J0YWluUHJvZHVjdEluZm87XG5yYWwuUUdfQ3JlYXRlUHVyY2hhc2VJbnRlbnQgPSBfcGF5W1wiZGVmYXVsdFwiXS5RR19DcmVhdGVQdXJjaGFzZUludGVudDtcbnJhbC5RR19Db25zdW1lT3duZWRQdXJjaGFzZSA9IF9wYXlbXCJkZWZhdWx0XCJdLlFHX0NvbnN1bWVPd25lZFB1cmNoYXNlO1xucmFsLlFHX09idGFpbk93bmVkUHVyY2hhc2VSZWNvcmQgPSBfcGF5W1wiZGVmYXVsdFwiXS5RR19PYnRhaW5Pd25lZFB1cmNoYXNlUmVjb3JkO1xucmFsLlFHX1N0YXJ0SWFwQWN0aXZpdHkgPSBfcGF5W1wiZGVmYXVsdFwiXS5RR19TdGFydElhcEFjdGl2aXR5O1xucmFsLlFHX0hpZGVLZXlib2FyZCA9IF9rZXlib2FyZFtcImRlZmF1bHRcIl0uUUdfSGlkZUtleWJvYXJkO1xucmFsLlFHX1Nob3dLZXlib2FyZCA9IF9rZXlib2FyZFtcImRlZmF1bHRcIl0uUUdfU2hvd0tleWJvYXJkO1xucmFsLlFHX1VwZGF0ZUtleWJvYXJkID0gX2tleWJvYXJkW1wiZGVmYXVsdFwiXS5RR19VcGRhdGVLZXlib2FyZDtcbnJhbC5RR19PbktleWJvYXJkSW5wdXQgPSBfa2V5Ym9hcmRbXCJkZWZhdWx0XCJdLlFHX09uS2V5Ym9hcmRJbnB1dDtcbnJhbC5RR19PZmZLZXlib2FyZElucHV0ID0gX2tleWJvYXJkW1wiZGVmYXVsdFwiXS5RR19PZmZLZXlib2FyZElucHV0O1xucmFsLlFHX09uS2V5Ym9hcmRDb25maXJtID0gX2tleWJvYXJkW1wiZGVmYXVsdFwiXS5RR19PbktleWJvYXJkQ29uZmlybTtcbnJhbC5RR19PZmZLZXlib2FyZENvbmZpcm0gPSBfa2V5Ym9hcmRbXCJkZWZhdWx0XCJdLlFHX09mZktleWJvYXJkQ29uZmlybTtcbnJhbC5RR19PbktleWJvYXJkQ29tcGxldGUgPSBfa2V5Ym9hcmRbXCJkZWZhdWx0XCJdLlFHX09uS2V5Ym9hcmRDb21wbGV0ZTtcbnJhbC5RR19PZmZLZXlib2FyZENvbXBsZXRlID0gX2tleWJvYXJkW1wiZGVmYXVsdFwiXS5RR19PZmZLZXlib2FyZENvbXBsZXRlO1xucmFsLlFHX0xvY2FsU3RvcmFnZUxlbmd0aCA9IF9sb2NhbFN0b3JhZ2VbXCJkZWZhdWx0XCJdLlFHX0xvY2FsU3RvcmFnZUxlbmd0aDtcbnJhbC5RR19Mb2NhbFN0b3JhZ2VDbGVhciA9IF9sb2NhbFN0b3JhZ2VbXCJkZWZhdWx0XCJdLlFHX0xvY2FsU3RvcmFnZUNsZWFyO1xucmFsLlFHX0xvY2FsU3RvcmFnZVJlbW92ZUl0ZW0gPSBfbG9jYWxTdG9yYWdlW1wiZGVmYXVsdFwiXS5RR19Mb2NhbFN0b3JhZ2VSZW1vdmVJdGVtO1xucmFsLlFHX0xvY2FsU3RvcmFnZVNldEl0ZW0gPSBfbG9jYWxTdG9yYWdlW1wiZGVmYXVsdFwiXS5RR19Mb2NhbFN0b3JhZ2VTZXRJdGVtO1xucmFsLlFHX0xvY2FsU3RvcmFnZUdldEl0ZW0gPSBfbG9jYWxTdG9yYWdlW1wiZGVmYXVsdFwiXS5RR19Mb2NhbFN0b3JhZ2VHZXRJdGVtO1xucmFsLlFHX0xvY2FsU3RvcmFnZUtleSA9IF9sb2NhbFN0b3JhZ2VbXCJkZWZhdWx0XCJdLlFHX0xvY2FsU3RvcmFnZUtleTtcbnJhbC5RR19TZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQgPSBfZnJhbWVSYXRlW1wiZGVmYXVsdFwiXS5RR19TZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQ7XG5cbn0se1wiLi9hY2NvdW50XCI6MjAsXCIuL2ZyYW1lUmF0ZVwiOjIzLFwiLi9rZXlib2FyZFwiOjI1LFwiLi9sb2NhbFN0b3JhZ2VcIjoyNixcIi4vcGF5XCI6MjgsXCIuL3Jld2FyZGVkVmlkZW9BZFwiOjI5fV0sMjU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfYmFzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYmFzZVwiKSk7XG52YXIgX2NvbnN0YW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb25zdGFudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxudmFyIF9kZWZhdWx0ID0ge1xuICBRR19IaWRlS2V5Ym9hcmQ6IGZ1bmN0aW9uIFFHX0hpZGVLZXlib2FyZChjYWxsYmFja0lkKSB7XG4gICAgdmFyIGFyZ3MgPSBoaWRlS2V5Ym9hcmRDYWxsYmFjayhjYWxsYmFja0lkKTtcbiAgICBxZy5oaWRlS2V5Ym9hcmQoX29iamVjdFNwcmVhZCh7fSwgYXJncykpO1xuICB9LFxuICBRR19TaG93S2V5Ym9hcmQ6IGZ1bmN0aW9uIFFHX1Nob3dLZXlib2FyZChjb25mLCBjYWxsYmFja0lkKSB7XG4gICAgdmFyIGFyZ3MgPSBzaG93S2V5Ym9hcmRDYWxsYmFjayhjYWxsYmFja0lkKTtcbiAgICBxZy5zaG93S2V5Ym9hcmQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfYmFzZVtcImRlZmF1bHRcIl0uZm9ybWF0SnNvblN0cihjb25mKSksIGFyZ3MpKTtcbiAgfSxcbiAgUUdfVXBkYXRlS2V5Ym9hcmQ6IGZ1bmN0aW9uIFFHX1VwZGF0ZUtleWJvYXJkKGNvbmYsIGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYXJncyA9IHVwZGF0ZUtleWJvYXJkQ2FsbGJhY2soY2FsbGJhY2tJZCk7XG4gICAgcWcudXBkYXRlS2V5Ym9hcmQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfYmFzZVtcImRlZmF1bHRcIl0uZm9ybWF0SnNvblN0cihjb25mKSksIGFyZ3MpKTtcbiAgfSxcbiAgUUdfT25LZXlib2FyZElucHV0OiBmdW5jdGlvbiBRR19PbktleWJvYXJkSW5wdXQoKSB7XG4gICAgcWcub25LZXlib2FyZElucHV0KGtleWJvYXJkSW5wdXRDYWxsYmFjay5vbktleWJvYXJkSW5wdXRDYWxsYmFjayk7XG4gIH0sXG4gIFFHX09mZktleWJvYXJkSW5wdXQ6IGZ1bmN0aW9uIFFHX09mZktleWJvYXJkSW5wdXQoKSB7XG4gICAgcWcub2ZmS2V5Ym9hcmRJbnB1dChrZXlib2FyZElucHV0Q2FsbGJhY2sub25LZXlib2FyZElucHV0Q2FsbGJhY2spO1xuICB9LFxuICBRR19PbktleWJvYXJkQ29uZmlybTogZnVuY3Rpb24gUUdfT25LZXlib2FyZENvbmZpcm0oKSB7XG4gICAgcWcub25LZXlib2FyZENvbmZpcm0oa2V5Ym9hcmRJbnB1dENhbGxiYWNrLm9uS2V5Ym9hcmRDb25maXJtQ2FsbGJhY2spO1xuICB9LFxuICBRR19PZmZLZXlib2FyZENvbmZpcm06IGZ1bmN0aW9uIFFHX09mZktleWJvYXJkQ29uZmlybSgpIHtcbiAgICBxZy5vZmZLZXlib2FyZENvbmZpcm0oa2V5Ym9hcmRJbnB1dENhbGxiYWNrLm9uS2V5Ym9hcmRDb25maXJtQ2FsbGJhY2spO1xuICB9LFxuICBRR19PbktleWJvYXJkQ29tcGxldGU6IGZ1bmN0aW9uIFFHX09uS2V5Ym9hcmRDb21wbGV0ZSgpIHtcbiAgICBxZy5vbktleWJvYXJkQ29tcGxldGUoa2V5Ym9hcmRJbnB1dENhbGxiYWNrLm9uS2V5Ym9hcmRDb21wbGV0ZUNhbGxiYWNrKTtcbiAgfSxcbiAgUUdfT2ZmS2V5Ym9hcmRDb21wbGV0ZTogZnVuY3Rpb24gUUdfT2ZmS2V5Ym9hcmRDb21wbGV0ZSgpIHtcbiAgICBxZy5vZmZLZXlib2FyZENvbXBsZXRlKGtleWJvYXJkSW5wdXRDYWxsYmFjay5vbktleWJvYXJkQ29tcGxldGVDYWxsYmFjayk7XG4gIH1cbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gaGlkZUtleWJvYXJkQ2FsbGJhY2soY2FsbGJhY2tJZCkge1xuICByZXR1cm4ge1xuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uSGlkZUtleWJvYXJkQ2FsbGJhY2spO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24gZmFpbCgpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5mYWlsLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25IaWRlS2V5Ym9hcmRDYWxsYmFjayk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuY29tcGxldGUsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbkhpZGVLZXlib2FyZENhbGxiYWNrKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBzaG93S2V5Ym9hcmRDYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25TaG93S2V5Ym9hcmRDYWxsYmFjayk7XG4gICAgfSxcbiAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmZhaWwsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PblNob3dLZXlib2FyZENhbGxiYWNrKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5jb21wbGV0ZSwgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uU2hvd0tleWJvYXJkQ2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUtleWJvYXJkQ2FsbGJhY2soY2FsbGJhY2tJZCkge1xuICByZXR1cm4ge1xuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLnN1Y2Nlc3MsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PblVwZGF0ZUtleWJvYXJkQ2FsbGJhY2ssIHJlcyk7XG4gICAgfSxcbiAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKHJlcykge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5mYWlsLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25VcGRhdGVLZXlib2FyZENhbGxiYWNrLCByZXMpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmNvbXBsZXRlLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25VcGRhdGVLZXlib2FyZENhbGxiYWNrKTtcbiAgICB9XG4gIH07XG59XG52YXIga2V5Ym9hcmRJbnB1dENhbGxiYWNrID0ge1xuICBvbktleWJvYXJkSW5wdXRDYWxsYmFjazogZnVuY3Rpb24gb25LZXlib2FyZElucHV0Q2FsbGJhY2socmVzKSB7XG4gICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoXCJcIiwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25LZXlib2FyZElucHV0Q2FsbGJhY2ssIHJlcyk7XG4gIH0sXG4gIG9uS2V5Ym9hcmRDb25maXJtQ2FsbGJhY2s6IGZ1bmN0aW9uIG9uS2V5Ym9hcmRDb25maXJtQ2FsbGJhY2socmVzKSB7XG4gICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoXCJcIiwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25LZXlib2FyZENvbmZpcm1DYWxsYmFjaywgcmVzKTtcbiAgfSxcbiAgb25LZXlib2FyZENvbXBsZXRlQ2FsbGJhY2s6IGZ1bmN0aW9uIG9uS2V5Ym9hcmRDb21wbGV0ZUNhbGxiYWNrKHJlcykge1xuICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKFwiXCIsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uS2V5Ym9hcmRDb21wbGV0ZUNhbGxiYWNrLCByZXMpO1xuICB9XG59O1xuXG59LHtcIi4vYmFzZVwiOjIxLFwiLi9jb25zdGFudFwiOjIyfV0sMjY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IHtcbiAgUUdfTG9jYWxTdG9yYWdlQ2xlYXI6IGZ1bmN0aW9uIFFHX0xvY2FsU3RvcmFnZUNsZWFyKCkge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9LFxuICBRR19Mb2NhbFN0b3JhZ2VSZW1vdmVJdGVtOiBmdW5jdGlvbiBRR19Mb2NhbFN0b3JhZ2VSZW1vdmVJdGVtKGtleSkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH0sXG4gIFFHX0xvY2FsU3RvcmFnZVNldEl0ZW06IGZ1bmN0aW9uIFFHX0xvY2FsU3RvcmFnZVNldEl0ZW0oa2V5LCB2YWx1ZSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICB9LFxuICBRR19Mb2NhbFN0b3JhZ2VHZXRJdGVtOiBmdW5jdGlvbiBRR19Mb2NhbFN0b3JhZ2VHZXRJdGVtKGtleSkge1xuICAgIHZhciBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICB2YXIgcmV0dXJuU3RyO1xuICAgIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICByZXR1cm5TdHIgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVyckNvZGU6IC0xXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuU3RyID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlcnJDb2RlOiAwLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldHVyblN0cjtcbiAgfSxcbiAgUUdfTG9jYWxTdG9yYWdlS2V5OiBmdW5jdGlvbiBRR19Mb2NhbFN0b3JhZ2VLZXkoaW5kZXgpIHtcbiAgICB2YXIga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpbmRleCk7XG4gICAgdmFyIHJldHVyblN0cjtcbiAgICBpZiAoa2V5ID09PSBudWxsIHx8IGtleSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuU3RyID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlcnJDb2RlOiAtMVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVyblN0ciA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZXJyQ29kZTogMCxcbiAgICAgICAgZGF0YToga2V5XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldHVyblN0cjtcbiAgfSxcbiAgUUdfTG9jYWxTdG9yYWdlTGVuZ3RoOiBmdW5jdGlvbiBRR19Mb2NhbFN0b3JhZ2VMZW5ndGgoKSB7XG4gICAgY29uc29sZS5sb2coXCJsZW5ndGhcIiArIGxvY2FsU3RvcmFnZS5sZW5ndGgpO1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7fV0sMjc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfY29uc3RhbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbnN0YW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxudmFyIF9kZWZhdWx0ID0ge1xuICBfc2VuZDogbnVsbCxcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0aGlzLl9zZW5kID0gcWcudW5pdHlJbnN0YW5jZS5Nb2R1bGUuU2VuZE1lc3NhZ2U7XG4gIH0sXG4gIHNlbmQ6IGZ1bmN0aW9uIHNlbmQobWV0aG9kLCBzdHIpIHtcbiAgICBpZiAoIXRoaXMuX3NlbmQpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICB0aGlzLl9zZW5kKF9jb25zdGFudFtcImRlZmF1bHRcIl0ubW9kdWxlTmFtZSwgbWV0aG9kLCBzdHIpO1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7XCIuL2NvbnN0YW50XCI6MjJ9XSwyODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9iYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iYXNlXCIpKTtcbnZhciBfY29uc3RhbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbnN0YW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG52YXIgX2RlZmF1bHQgPSB7XG4gIFFHX0lzRW52UmVhZHk6IGZ1bmN0aW9uIFFHX0lzRW52UmVhZHkoY29uZiwgY2FsbGJhY2tJZCkge1xuICAgIHZhciBhcmdzID0gaXNFbnZSZWFkeUNhbGxiYWNrKGNhbGxiYWNrSWQpO1xuICAgIHFnLmlzRW52UmVhZHkoX29iamVjdFNwcmVhZCh7XG4gICAgICBpc0VudlJlYWR5UmVxOiBfb2JqZWN0U3ByZWFkKHt9LCBfYmFzZVtcImRlZmF1bHRcIl0uZm9ybWF0SnNvblN0cihjb25mKSlcbiAgICB9LCBhcmdzKSk7XG4gIH0sXG4gIFFHX0lzU2FuZGJveEFjdGl2YXRlZDogZnVuY3Rpb24gUUdfSXNTYW5kYm94QWN0aXZhdGVkKGNvbmYsIGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYXJncyA9IGlzU2FuZGJveEFjdGl2YXRlZENhbGxiYWNrKGNhbGxiYWNrSWQpO1xuICAgIHFnLmlzU2FuZGJveEFjdGl2YXRlZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgIGlzU2FuZGJveEFjdGl2YXRlZFJlcTogX29iamVjdFNwcmVhZCh7fSwgX2Jhc2VbXCJkZWZhdWx0XCJdLmZvcm1hdEpzb25TdHIoY29uZikpXG4gICAgfSwgYXJncykpO1xuICB9LFxuICBRR19PYnRhaW5Pd25lZFB1cmNoYXNlczogZnVuY3Rpb24gUUdfT2J0YWluT3duZWRQdXJjaGFzZXMoY29uZiwgY2FsbGJhY2tJZCkge1xuICAgIHZhciBhcmdzID0gb2J0YWluT3duZWRQdXJjaGFzZXNDYWxsYmFjayhjYWxsYmFja0lkKTtcbiAgICBxZy5vYnRhaW5Pd25lZFB1cmNoYXNlcyhfb2JqZWN0U3ByZWFkKHtcbiAgICAgIG93bmVkUHVyY2hhc2VzUmVxOiBfb2JqZWN0U3ByZWFkKHt9LCBfYmFzZVtcImRlZmF1bHRcIl0uZm9ybWF0SnNvblN0cihjb25mKSlcbiAgICB9LCBhcmdzKSk7XG4gIH0sXG4gIFFHX09idGFpblByb2R1Y3RJbmZvOiBmdW5jdGlvbiBRR19PYnRhaW5Qcm9kdWN0SW5mbyhjb25mLCBjYWxsYmFja0lkKSB7XG4gICAgdmFyIGFyZ3MgPSBvYnRhaW5Qcm9kdWN0SW5mb0NhbGxiYWNrKGNhbGxiYWNrSWQpO1xuICAgIHFnLm9idGFpblByb2R1Y3RJbmZvKF9vYmplY3RTcHJlYWQoe1xuICAgICAgcHJvZHVjdEluZm9SZXE6IF9vYmplY3RTcHJlYWQoe30sIF9iYXNlW1wiZGVmYXVsdFwiXS5mb3JtYXRKc29uU3RyKGNvbmYpKVxuICAgIH0sIGFyZ3MpKTtcbiAgfSxcbiAgUUdfQ3JlYXRlUHVyY2hhc2VJbnRlbnQ6IGZ1bmN0aW9uIFFHX0NyZWF0ZVB1cmNoYXNlSW50ZW50KGNvbmYsIGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYXJncyA9IGNyZWF0ZVB1cmNoYXNlSW50ZW50Q2FsbGJhY2soY2FsbGJhY2tJZCk7XG4gICAgcWcuY3JlYXRlUHVyY2hhc2VJbnRlbnQoX29iamVjdFNwcmVhZCh7XG4gICAgICBwdXJjaGFzZUludGVudFJlcTogX29iamVjdFNwcmVhZCh7fSwgX2Jhc2VbXCJkZWZhdWx0XCJdLmZvcm1hdEpzb25TdHIoY29uZikpXG4gICAgfSwgYXJncykpO1xuICB9LFxuICBRR19Db25zdW1lT3duZWRQdXJjaGFzZTogZnVuY3Rpb24gUUdfQ29uc3VtZU93bmVkUHVyY2hhc2UoY29uZiwgY2FsbGJhY2tJZCkge1xuICAgIHZhciBhcmdzID0gY29uc3VtZU93bmVkUHVyY2hhc2VDYWxsYmFjayhjYWxsYmFja0lkKTtcbiAgICBxZy5jb25zdW1lT3duZWRQdXJjaGFzZShfb2JqZWN0U3ByZWFkKHtcbiAgICAgIGNvbnN1bWVPd25lZFB1cmNoYXNlUmVxOiBfb2JqZWN0U3ByZWFkKHt9LCBfYmFzZVtcImRlZmF1bHRcIl0uZm9ybWF0SnNvblN0cihjb25mKSlcbiAgICB9LCBhcmdzKSk7XG4gIH0sXG4gIFFHX09idGFpbk93bmVkUHVyY2hhc2VSZWNvcmQ6IGZ1bmN0aW9uIFFHX09idGFpbk93bmVkUHVyY2hhc2VSZWNvcmQoY29uZiwgY2FsbGJhY2tJZCkge1xuICAgIHZhciBhcmdzID0gb2J0YWluT3duZWRQdXJjaGFzZVJlY29yZENhbGxiYWNrKGNhbGxiYWNrSWQpO1xuICAgIHFnLm9idGFpbk93bmVkUHVyY2hhc2VSZWNvcmQoX29iamVjdFNwcmVhZCh7XG4gICAgICBvd25lZFB1cmNoYXNlc1JlY29yZFJlcTogX29iamVjdFNwcmVhZCh7fSwgX2Jhc2VbXCJkZWZhdWx0XCJdLmZvcm1hdEpzb25TdHIoY29uZikpXG4gICAgfSwgYXJncykpO1xuICB9LFxuICBRR19TdGFydElhcEFjdGl2aXR5OiBmdW5jdGlvbiBRR19TdGFydElhcEFjdGl2aXR5KGNvbmYsIGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYXJncyA9IHN0YXJ0SWFwQWN0aXZpdHlDYWxsYmFjayhjYWxsYmFja0lkKTtcbiAgICBxZy5zdGFydElhcEFjdGl2aXR5KF9vYmplY3RTcHJlYWQoe1xuICAgICAgc3RhcnRJYXBBY3Rpdml0eVJlcTogX29iamVjdFNwcmVhZCh7fSwgX2Jhc2VbXCJkZWZhdWx0XCJdLmZvcm1hdEpzb25TdHIoY29uZikpXG4gICAgfSwgYXJncykpO1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIGlzRW52UmVhZHlDYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uSXNFbnZSZWFkeUNhbGxiYWNrLCByZXMpO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24gZmFpbChkYXRhLCBjb2RlKSB7XG4gICAgICB2YXIgZXJyb3IgPSB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGNvZGU6IGNvZGVcbiAgICAgIH07XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmZhaWwsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbklzRW52UmVhZHlDYWxsYmFjaywgZXJyb3IpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmNvbXBsZXRlLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25Jc0VudlJlYWR5Q2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGlzU2FuZGJveEFjdGl2YXRlZENhbGxiYWNrKGNhbGxiYWNrSWQpIHtcbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25Jc1NhbmRib3hBY3RpdmF0ZWRDYWxsYmFjaywgcmVzKTtcbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZGF0YSwgY29kZSkge1xuICAgICAgdmFyIGVycm9yID0ge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBjb2RlOiBjb2RlXG4gICAgICB9O1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5mYWlsLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25Jc1NhbmRib3hBY3RpdmF0ZWRDYWxsYmFjaywgZXJyb3IpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmNvbXBsZXRlLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25Jc1NhbmRib3hBY3RpdmF0ZWRDYWxsYmFjayk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gb2J0YWluT3duZWRQdXJjaGFzZXNDYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uT2J0YWluT3duZWRQdXJjaGFzZXNDYWxsYmFjaywgcmVzKTtcbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZGF0YSwgY29kZSkge1xuICAgICAgdmFyIGVycm9yID0ge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBjb2RlOiBjb2RlXG4gICAgICB9O1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5mYWlsLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25PYnRhaW5Pd25lZFB1cmNoYXNlc0NhbGxiYWNrLCBlcnJvcik7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuY29tcGxldGUsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9Pbk9idGFpbk93bmVkUHVyY2hhc2VzQ2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIG9idGFpblByb2R1Y3RJbmZvQ2FsbGJhY2soY2FsbGJhY2tJZCkge1xuICByZXR1cm4ge1xuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLnN1Y2Nlc3MsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9Pbk9idGFpblByb2R1Y3RJbmZvQ2FsbGJhY2ssIHJlcyk7XG4gICAgfSxcbiAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGRhdGEsIGNvZGUpIHtcbiAgICAgIHZhciBlcnJvciA9IHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgY29kZTogY29kZVxuICAgICAgfTtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuZmFpbCwgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uT2J0YWluUHJvZHVjdEluZm9DYWxsYmFjaywgZXJyb3IpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmNvbXBsZXRlLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25PYnRhaW5Qcm9kdWN0SW5mb0NhbGxiYWNrKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVQdXJjaGFzZUludGVudENhbGxiYWNrKGNhbGxiYWNrSWQpIHtcbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25DcmVhdGVQdXJjaGFzZUludGVudENhbGxiYWNrLCByZXMpO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24gZmFpbChkYXRhLCBjb2RlKSB7XG4gICAgICB2YXIgZXJyb3IgPSB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGNvZGU6IGNvZGVcbiAgICAgIH07XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmZhaWwsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbkNyZWF0ZVB1cmNoYXNlSW50ZW50Q2FsbGJhY2ssIGVycm9yKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5jb21wbGV0ZSwgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uQ3JlYXRlUHVyY2hhc2VJbnRlbnRDYWxsYmFjayk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gY29uc3VtZU93bmVkUHVyY2hhc2VDYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uQ29uc3VtZU93bmVkUHVyY2hhc2VDYWxsYmFjaywgcmVzKTtcbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZGF0YSwgY29kZSkge1xuICAgICAgdmFyIGVycm9yID0ge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBjb2RlOiBjb2RlXG4gICAgICB9O1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5mYWlsLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25Db25zdW1lT3duZWRQdXJjaGFzZUNhbGxiYWNrLCBlcnJvcik7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuY29tcGxldGUsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbkNvbnN1bWVPd25lZFB1cmNoYXNlQ2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIG9idGFpbk93bmVkUHVyY2hhc2VSZWNvcmRDYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX09uT2J0YWluT3duZWRQdXJjaGFzZVJlY29yZENhbGxiYWNrLCByZXMpO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24gZmFpbChkYXRhLCBjb2RlKSB7XG4gICAgICB2YXIgZXJyb3IgPSB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGNvZGU6IGNvZGVcbiAgICAgIH07XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmZhaWwsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9Pbk9idGFpbk93bmVkUHVyY2hhc2VSZWNvcmRDYWxsYmFjaywgZXJyb3IpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmNvbXBsZXRlLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25PYnRhaW5Pd25lZFB1cmNoYXNlUmVjb3JkQ2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHN0YXJ0SWFwQWN0aXZpdHlDYWxsYmFjayhjYWxsYmFja0lkKSB7XG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25TdGFydElhcEFjdGl2aXR5Q2FsbGJhY2spO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24gZmFpbChkYXRhLCBjb2RlKSB7XG4gICAgICB2YXIgZXJyb3IgPSB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGNvZGU6IGNvZGVcbiAgICAgIH07XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmZhaWwsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PblN0YXJ0SWFwQWN0aXZpdHlDYWxsYmFjaywgZXJyb3IpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tOb1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmNvbXBsZXRlLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fT25TdGFydElhcEFjdGl2aXR5Q2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbn1cblxufSx7XCIuL2Jhc2VcIjoyMSxcIi4vY29uc3RhbnRcIjoyMn1dLDI5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2Jhc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2VcIikpO1xudmFyIF9jb25zdGFudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29uc3RhbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbnZhciByZXdhcmRlZFZpZGVvQWRzID0ge307XG52YXIgX2RlZmF1bHQgPSB7XG4gIFFHX0NyZWF0ZVJld2FyZGVkVmlkZW9BZDogZnVuY3Rpb24gUUdfQ3JlYXRlUmV3YXJkZWRWaWRlb0FkKGNvbmYsIGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYXJncyA9IGhhbmRsZUNyZWF0ZVJld2FyZGVkVmlkZW9BZENhbGxiYWNrKGNhbGxiYWNrSWQpO1xuICAgIHZhciBhZCA9IHFnLmNyZWF0ZVJld2FyZGVkVmlkZW9BZChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF9iYXNlW1wiZGVmYXVsdFwiXS5mb3JtYXRKc29uU3RyKGNvbmYpKSwgYXJncykpO1xuICAgIGFkLm9mZkxvYWQobnVsbCk7XG4gICAgYWQub2ZmRXJyb3IobnVsbCk7XG4gICAgYWQub2ZmQ2xvc2UobnVsbCk7XG4gICAgYWQub25Mb2FkKGZ1bmN0aW9uICgpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrTm9QYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fUmV3YXJkZWRWaWRlb0FkT25Mb2FkKTtcbiAgICB9KTtcbiAgICBhZC5vbkNsb3NlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIF9iYXNlW1wiZGVmYXVsdFwiXS5vbkNhbGxiYWNrUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuc3VjY2VzcywgX2NvbnN0YW50W1wiZGVmYXVsdFwiXS5tZXRob2QuX1Jld2FyZGVkVmlkZW9BZE9uQ2xvc2UsIHJlcyk7XG4gICAgfSk7XG4gICAgYWQub25FcnJvcihmdW5jdGlvbiAoZSkge1xuICAgICAgX2Jhc2VbXCJkZWZhdWx0XCJdLm9uQ2FsbGJhY2tQYXJhbWV0ZXIoY2FsbGJhY2tJZCwgX2Jhc2VbXCJkZWZhdWx0XCJdLmNhbGxiYWNrVHlwZS5zdWNjZXNzLCBfY29uc3RhbnRbXCJkZWZhdWx0XCJdLm1ldGhvZC5fUmV3YXJkZWRWaWRlb0FkT25FcnJvciwgZSk7XG4gICAgfSk7XG4gICAgcmV3YXJkZWRWaWRlb0Fkc1tjYWxsYmFja0lkXSA9IGFkO1xuICB9LFxuICBRR19SZXdhcmRlZFZpZGVvQWRMb2FkOiBmdW5jdGlvbiBRR19SZXdhcmRlZFZpZGVvQWRMb2FkKGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYWQgPSByZXdhcmRlZFZpZGVvQWRzW2NhbGxiYWNrSWRdO1xuICAgIGlmICghYWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWQubG9hZCgpO1xuICB9LFxuICBRR19SZXdhcmRlZFZpZGVvQWRTaG93OiBmdW5jdGlvbiBRR19SZXdhcmRlZFZpZGVvQWRTaG93KGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYWQgPSByZXdhcmRlZFZpZGVvQWRzW2NhbGxiYWNrSWRdO1xuICAgIGlmICghYWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWQuc2hvdygpO1xuICB9LFxuICBRR19SZXdhcmRlZFZpZGVvQWREZXN0cm95OiBmdW5jdGlvbiBRR19SZXdhcmRlZFZpZGVvQWREZXN0cm95KGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYWQgPSByZXdhcmRlZFZpZGVvQWRzW2NhbGxiYWNrSWRdO1xuICAgIGlmICghYWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWQuZGVzdHJveSgpO1xuICAgIGRlbGV0ZSByZXdhcmRlZFZpZGVvQWRzW2NhbGxiYWNrSWRdO1xuICB9LFxuICBRR19TZXRUYWdGb3JDaGlsZFByb3RlY3Rpb246IGZ1bmN0aW9uIFFHX1NldFRhZ0ZvckNoaWxkUHJvdGVjdGlvbihjb25mLCBjYWxsYmFja0lkKSB7XG4gICAgdmFyIGFkID0gcmV3YXJkZWRWaWRlb0Fkc1tjYWxsYmFja0lkXTtcbiAgICBpZiAoIWFkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFkLnNldFRhZ0ZvckNoaWxkUHJvdGVjdGlvbihfYmFzZVtcImRlZmF1bHRcIl0uZm9ybWF0SnNvblN0cihjb25mKS5jaGlsZFByb3RlY3Rpb24pO1xuICB9LFxuICBRR19TZXRUYWdGb3JVbmRlckFnZU9mUHJvbWlzZTogZnVuY3Rpb24gUUdfU2V0VGFnRm9yVW5kZXJBZ2VPZlByb21pc2UoY29uZiwgY2FsbGJhY2tJZCkge1xuICAgIHZhciBhZCA9IHJld2FyZGVkVmlkZW9BZHNbY2FsbGJhY2tJZF07XG4gICAgaWYgKCFhZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhZC5zZXRUYWdGb3JVbmRlckFnZU9mUHJvbWlzZShfYmFzZVtcImRlZmF1bHRcIl0uZm9ybWF0SnNvblN0cihjb25mKS51bmRlckFnZU9mUHJvbWlzZVN0cik7XG4gIH0sXG4gIFFHX1NldEFkQ29udGVudENsYXNzaWZpY2F0aW9uOiBmdW5jdGlvbiBRR19TZXRBZENvbnRlbnRDbGFzc2lmaWNhdGlvbihjb25mLCBjYWxsYmFja0lkKSB7XG4gICAgdmFyIGFkID0gcmV3YXJkZWRWaWRlb0Fkc1tjYWxsYmFja0lkXTtcbiAgICBpZiAoIWFkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFkLnNldEFkQ29udGVudENsYXNzaWZpY2F0aW9uKF9iYXNlW1wiZGVmYXVsdFwiXS5mb3JtYXRKc29uU3RyKGNvbmYpLmFkQ29udGVudENsYXNzaWZpY2F0aW9uKTtcbiAgfSxcbiAgUUdfU2V0Tm9uUGVyc29uYWxpemVkQWQ6IGZ1bmN0aW9uIFFHX1NldE5vblBlcnNvbmFsaXplZEFkKGNvbmYsIGNhbGxiYWNrSWQpIHtcbiAgICB2YXIgYWQgPSByZXdhcmRlZFZpZGVvQWRzW2NhbGxiYWNrSWRdO1xuICAgIGlmICghYWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWQuc2V0Tm9uUGVyc29uYWxpemVkQWQoX2Jhc2VbXCJkZWZhdWx0XCJdLmZvcm1hdEpzb25TdHIoY29uZikucGVyc29uYWxpemVkQWQpO1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIGhhbmRsZUNyZWF0ZVJld2FyZGVkVmlkZW9BZENhbGxiYWNrKGNhbGxiYWNrSWQpIHtcbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGNvZGUpIHtcbiAgICAgIHZhciByZXMgPSB7XG4gICAgICAgIGNvZGU6IGNvZGVcbiAgICAgIH07XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLnN1Y2Nlc3MsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbkNyZWF0ZVJld2FyZGVkVmlkZW9BZENhbGxiYWNrLCByZXMpO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24gZmFpbChkYXRhLCBjb2RlKSB7XG4gICAgICB2YXIgZXJyb3IgPSB7XG4gICAgICAgIGNvZGU6IGNvZGUsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH07XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja1BhcmFtZXRlcihjYWxsYmFja0lkLCBfYmFzZVtcImRlZmF1bHRcIl0uY2FsbGJhY2tUeXBlLmZhaWwsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbkNyZWF0ZVJld2FyZGVkVmlkZW9BZENhbGxiYWNrLCBlcnJvcik7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfYmFzZVtcImRlZmF1bHRcIl0ub25DYWxsYmFja05vUGFyYW1ldGVyKGNhbGxiYWNrSWQsIF9iYXNlW1wiZGVmYXVsdFwiXS5jYWxsYmFja1R5cGUuY29tcGxldGUsIF9jb25zdGFudFtcImRlZmF1bHRcIl0ubWV0aG9kLl9PbkNyZWF0ZVJld2FyZGVkVmlkZW9BZENhbGxiYWNrKTtcbiAgICB9XG4gIH07XG59XG5cbn0se1wiLi9iYXNlXCI6MjEsXCIuL2NvbnN0YW50XCI6MjJ9XSwzMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG52YXIgX0NBTlBMQVlfQ0FMTEJBQ0sgPSBcImNhbnBsYXlDYWxsYmFja3NcIjtcbnZhciBfRU5ERURfQ0FMTEJBQ0sgPSBcImVuZGVkQ2FsbGJhY2tzXCI7XG52YXIgX0VSUk9SX0NBTExCQUNLID0gXCJlcnJvckNhbGxiYWNrc1wiO1xudmFyIF9QQVVTRV9DQUxMQkFDSyA9IFwicGF1c2VDYWxsYmFja3NcIjtcbnZhciBfUExBWV9DQUxMQkFDSyA9IFwicGxheUNhbGxiYWNrc1wiO1xudmFyIF9TRUVLRURfQ0FMTEJBQ0sgPSBcInNlZWtlZENhbGxiYWNrc1wiO1xudmFyIF9TRUVLSU5HX0NBTExCQUNLID0gXCJzZWVraW5nQ2FsbGJhY2tzXCI7XG52YXIgX1NUT1BfQ0FMTEJBQ0sgPSBcInN0b3BDYWxsYmFja3NcIjtcbnZhciBfVElNRV9VUERBVEVfQ0FMTEJBQ0sgPSBcInRpbWVVcGRhdGVDYWxsYmFja3NcIjtcbnZhciBfV0FJVElOR19DQUxMQkFDSyA9IFwid2FpdGluZ0NhbGxiYWNrc1wiO1xudmFyIF9FUlJPUl9DT0RFID0ge1xuICBFUlJPUl9TWVNURU06IDEwMDAxLFxuICBFUlJPUl9ORVQ6IDEwMDAyLFxuICBFUlJPUl9GSUxFOiAxMDAwMyxcbiAgRVJST1JfRk9STUFUOiAxMDAwNCxcbiAgRVJST1JfVU5LTk9XTjogLTFcbn07XG52YXIgX1NUQVRFID0ge1xuICBFUlJPUjogLTEsXG4gIElOSVRJQUxJWklORzogMCxcbiAgUExBWUlORzogMSxcbiAgUEFVU0VEOiAyXG59O1xudmFyIF9hdWRpb0VuZ2luZSA9IHVuZGVmaW5lZDtcbnZhciBfd2Vha01hcCA9IG5ldyBXZWFrTWFwKCk7XG52YXIgX29mZkNhbGxiYWNrID0gZnVuY3Rpb24gX29mZkNhbGxiYWNrKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRhcmdldCk7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIiB8fCAhcHJpdmF0ZVRoaXMpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgdmFyIGNhbGxiYWNrcyA9IHByaXZhdGVUaGlzW3R5cGVdIHx8IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGNhbGxiYWNrID09PSBjYWxsYmFja3NbaV0pIHtcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICByZXR1cm4gY2FsbGJhY2subGVuZ3RoICsgMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xudmFyIF9vbkNhbGxiYWNrID0gZnVuY3Rpb24gX29uQ2FsbGJhY2sodGFyZ2V0LCB0eXBlLCBjYWxsYmFjaykge1xuICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGFyZ2V0KTtcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiIHx8ICFwcml2YXRlVGhpcykge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICB2YXIgY2FsbGJhY2tzID0gcHJpdmF0ZVRoaXNbdHlwZV07XG4gIGlmICghY2FsbGJhY2tzKSB7XG4gICAgY2FsbGJhY2tzID0gcHJpdmF0ZVRoaXNbdHlwZV0gPSBbY2FsbGJhY2tdO1xuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGlmIChjYWxsYmFjayA9PT0gY2FsbGJhY2tzW2ldKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cbiAgcmV0dXJuIGNhbGxiYWNrcy5sZW5ndGg7XG59O1xudmFyIF9kaXNwYXRjaENhbGxiYWNrID0gZnVuY3Rpb24gX2Rpc3BhdGNoQ2FsbGJhY2sodGFyZ2V0LCB0eXBlKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcbiAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRhcmdldCk7XG4gIGlmIChwcml2YXRlVGhpcykge1xuICAgIHZhciBjYWxsYmFja3MgPSBwcml2YXRlVGhpc1t0eXBlXSB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGFyZ2V0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn07XG5mdW5jdGlvbiBJbm5lckF1ZGlvQ29udGV4dCgpIHtcbiAgdGhpcy5zdGFydFRpbWUgPSAwO1xuICB0aGlzLmF1dG9wbGF5ID0gZmFsc2U7XG4gIF93ZWFrTWFwLnNldCh0aGlzLCB7XG4gICAgc3JjOiBcIlwiLFxuICAgIHZvbHVtZTogMSxcbiAgICBsb29wOiBmYWxzZSxcbiAgICBzZWVrUG9zaXRpb246IC0xXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJsb29wXCIsIHtcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgICAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRoaXMpO1xuICAgICAgaWYgKHByaXZhdGVUaGlzKSB7XG4gICAgICAgIHZhciBhdWRpb0lEID0gcHJpdmF0ZVRoaXMuYXVkaW9JRDtcbiAgICAgICAgaWYgKHR5cGVvZiBhdWRpb0lEID09PSBcIm51bWJlclwiICYmIGF1ZGlvSUQgPj0gMCkge1xuICAgICAgICAgIF9hdWRpb0VuZ2luZS5zZXRMb29wKGF1ZGlvSUQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBwcml2YXRlVGhpcy5sb29wID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcbiAgICAgIHJldHVybiBwcml2YXRlVGhpcyA/IHByaXZhdGVUaGlzLmxvb3AgOiBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJ2b2x1bWVcIiwge1xuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiAxKSB7XG4gICAgICAgICAgdmFsdWUgPSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IDE7XG4gICAgICB9XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG4gICAgICBpZiAocHJpdmF0ZVRoaXMpIHtcbiAgICAgICAgdmFyIGF1ZGlvSUQgPSBwcml2YXRlVGhpcy5hdWRpb0lEO1xuICAgICAgICBpZiAodHlwZW9mIGF1ZGlvSUQgPT09IFwibnVtYmVyXCIgJiYgYXVkaW9JRCA+PSAwKSB7XG4gICAgICAgICAgX2F1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJpdmF0ZVRoaXMudm9sdW1lID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcbiAgICAgIHJldHVybiBwcml2YXRlVGhpcyA/IHByaXZhdGVUaGlzLnZvbHVtZSA6IDE7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwic3JjXCIsIHtcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRoaXMpO1xuICAgICAgaWYgKCFwcml2YXRlVGhpcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb2xkU3JjID0gcHJpdmF0ZVRoaXMuc3JjO1xuICAgICAgcHJpdmF0ZVRoaXMuc3JjID0gdmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHZhciBhdWRpb0lEID0gcHJpdmF0ZVRoaXMuYXVkaW9JRDtcbiAgICAgICAgaWYgKHR5cGVvZiBhdWRpb0lEID09PSBcIm51bWJlclwiICYmIGF1ZGlvSUQgPj0gMCAmJiBfYXVkaW9FbmdpbmUuZ2V0U3RhdGUoYXVkaW9JRCkgPT09IF9TVEFURS5QQVVTRUQgJiYgb2xkU3JjICE9PSB2YWx1ZSkge1xuICAgICAgICAgIF9hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSUQpO1xuICAgICAgICAgIHByaXZhdGVUaGlzLmF1ZGlvSUQgPSAtMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIF9hdWRpb0VuZ2luZS5wcmVsb2FkKHZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5zcmMgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgIF9kaXNwYXRjaENhbGxiYWNrKHNlbGYsIF9DQU5QTEFZX0NBTExCQUNLKTtcbiAgICAgICAgICAgICAgaWYgKHNlbGYuYXV0b3BsYXkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXkoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRoaXMpO1xuICAgICAgcmV0dXJuIHByaXZhdGVUaGlzID8gcHJpdmF0ZVRoaXMuc3JjIDogXCJcIjtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJkdXJhdGlvblwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG4gICAgICBpZiAocHJpdmF0ZVRoaXMpIHtcbiAgICAgICAgdmFyIGF1ZGlvSUQgPSBwcml2YXRlVGhpcy5hdWRpb0lEO1xuICAgICAgICBpZiAodHlwZW9mIGF1ZGlvSUQgPT09IFwibnVtYmVyXCIgJiYgYXVkaW9JRCA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIF9hdWRpb0VuZ2luZS5nZXREdXJhdGlvbihhdWRpb0lEKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIE5hTjtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KCkge31cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImN1cnJlbnRUaW1lXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcbiAgICAgIGlmIChwcml2YXRlVGhpcykge1xuICAgICAgICB2YXIgYXVkaW9JRCA9IHByaXZhdGVUaGlzLmF1ZGlvSUQ7XG4gICAgICAgIGlmICh0eXBlb2YgYXVkaW9JRCA9PT0gXCJudW1iZXJcIiAmJiBhdWRpb0lEID49IDApIHtcbiAgICAgICAgICByZXR1cm4gX2F1ZGlvRW5naW5lLmdldEN1cnJlbnRUaW1lKGF1ZGlvSUQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KCkge31cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBhdXNlZFwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG4gICAgICBpZiAocHJpdmF0ZVRoaXMpIHtcbiAgICAgICAgdmFyIGF1ZGlvSUQgPSBwcml2YXRlVGhpcy5hdWRpb0lEO1xuICAgICAgICBpZiAodHlwZW9mIGF1ZGlvSUQgPT09IFwibnVtYmVyXCIgJiYgYXVkaW9JRCA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIF9hdWRpb0VuZ2luZS5nZXRTdGF0ZShhdWRpb0lEKSA9PT0gX1NUQVRFLlBBVVNFRDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCgpIHt9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJidWZmZXJlZFwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG4gICAgICBpZiAocHJpdmF0ZVRoaXMpIHtcbiAgICAgICAgdmFyIGF1ZGlvSUQgPSBwcml2YXRlVGhpcy5hdWRpb0lEO1xuICAgICAgICBpZiAodHlwZW9mIGF1ZGlvSUQgPT09IFwibnVtYmVyXCIgJiYgYXVkaW9JRCA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIF9hdWRpb0VuZ2luZS5nZXRCdWZmZXJlZChhdWRpb0lEKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCgpIHt9XG4gIH0pO1xufVxudmFyIF9wcm90b3R5cGUgPSBJbm5lckF1ZGlvQ29udGV4dC5wcm90b3R5cGU7XG5fcHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcbiAgaWYgKHByaXZhdGVUaGlzKSB7XG4gICAgdmFyIGF1ZGlvSUQgPSBwcml2YXRlVGhpcy5hdWRpb0lEO1xuICAgIGlmICh0eXBlb2YgYXVkaW9JRCA9PT0gXCJudW1iZXJcIiAmJiBhdWRpb0lEID49IDApIHtcbiAgICAgIF9hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSUQpO1xuICAgICAgcHJpdmF0ZVRoaXMuYXVkaW9JRCA9IC0xO1xuICAgICAgX2Rpc3BhdGNoQ2FsbGJhY2sodGhpcywgX1NUT1BfQ0FMTEJBQ0spO1xuICAgIH1cbiAgICBwcml2YXRlVGhpc1tfQ0FOUExBWV9DQUxMQkFDS10gPSBbXTtcbiAgICBwcml2YXRlVGhpc1tfRU5ERURfQ0FMTEJBQ0tdID0gW107XG4gICAgcHJpdmF0ZVRoaXNbX0VSUk9SX0NBTExCQUNLXSA9IFtdO1xuICAgIHByaXZhdGVUaGlzW19QQVVTRV9DQUxMQkFDS10gPSBbXTtcbiAgICBwcml2YXRlVGhpc1tfUExBWV9DQUxMQkFDS10gPSBbXTtcbiAgICBwcml2YXRlVGhpc1tfU0VFS0VEX0NBTExCQUNLXSA9IFtdO1xuICAgIHByaXZhdGVUaGlzW19TRUVLSU5HX0NBTExCQUNLXSA9IFtdO1xuICAgIHByaXZhdGVUaGlzW19TVE9QX0NBTExCQUNLXSA9IFtdO1xuICAgIHByaXZhdGVUaGlzW19USU1FX1VQREFURV9DQUxMQkFDS10gPSBbXTtcbiAgICBwcml2YXRlVGhpc1tfV0FJVElOR19DQUxMQkFDS10gPSBbXTtcbiAgICBjbGVhckludGVydmFsKHByaXZhdGVUaGlzLmludGVydmFsSUQpO1xuICB9XG59O1xuX3Byb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG4gIGlmICghcHJpdmF0ZVRoaXMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHNyYyA9IHByaXZhdGVUaGlzLnNyYztcbiAgdmFyIGF1ZGlvSUQgPSBwcml2YXRlVGhpcy5hdWRpb0lEO1xuICBpZiAodHlwZW9mIHNyYyAhPT0gXCJzdHJpbmdcIiB8fCBzcmMgPT09IFwiXCIpIHtcbiAgICBfZGlzcGF0Y2hDYWxsYmFjayh0aGlzLCBfRVJST1JfQ0FMTEJBQ0ssIFt7XG4gICAgICBlcnJNc2c6IFwiaW52YWxpZCBzcmNcIixcbiAgICAgIGVyckNvZGU6IF9FUlJPUl9DT0RFLkVSUk9SX0ZJTEVcbiAgICB9XSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0eXBlb2YgYXVkaW9JRCA9PT0gXCJudW1iZXJcIiAmJiBhdWRpb0lEID49IDApIHtcbiAgICBpZiAoX2F1ZGlvRW5naW5lLmdldFN0YXRlKGF1ZGlvSUQpID09PSBfU1RBVEUuUEFVU0VEKSB7XG4gICAgICBfYXVkaW9FbmdpbmUucmVzdW1lKGF1ZGlvSUQpO1xuICAgICAgX2Rpc3BhdGNoQ2FsbGJhY2sodGhpcywgX1BMQVlfQ0FMTEJBQ0spO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBfYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lEKTtcbiAgICAgIHByaXZhdGVUaGlzLmF1ZGlvSUQgPSAtMTtcbiAgICB9XG4gIH1cbiAgYXVkaW9JRCA9IF9hdWRpb0VuZ2luZS5wbGF5KHNyYywgdGhpcy5sb29wLCB0aGlzLnZvbHVtZSk7XG4gIGlmIChhdWRpb0lEID09PSAtMSkge1xuICAgIF9kaXNwYXRjaENhbGxiYWNrKHRoaXMsIF9FUlJPUl9DQUxMQkFDSywgW3tcbiAgICAgIGVyck1zZzogXCJ1bmtub3duXCIsXG4gICAgICBlcnJDb2RlOiBfRVJST1JfQ09ERS5FUlJPUl9VTktOT1dOXG4gICAgfV0pO1xuICAgIHJldHVybjtcbiAgfVxuICBwcml2YXRlVGhpcy5hdWRpb0lEID0gYXVkaW9JRDtcbiAgaWYgKHByaXZhdGVUaGlzLnNlZWtQb3NpdGlvbiA+PSAwKSB7XG4gICAgX2F1ZGlvRW5naW5lLnNldEN1cnJlbnRUaW1lKGF1ZGlvSUQsIHByaXZhdGVUaGlzLnNlZWtQb3NpdGlvbik7XG4gICAgcHJpdmF0ZVRoaXMuc2Vla1Bvc2l0aW9uID0gLTE7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnN0YXJ0VGltZSA9PT0gXCJudW1iZXJcIiAmJiB0aGlzLnN0YXJ0VGltZSA+IDApIHtcbiAgICAgIF9hdWRpb0VuZ2luZS5zZXRDdXJyZW50VGltZShhdWRpb0lELCB0aGlzLnN0YXJ0VGltZSk7XG4gICAgfVxuICB9XG4gIF9kaXNwYXRjaENhbGxiYWNrKHRoaXMsIF9XQUlUSU5HX0NBTExCQUNLKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBfYXVkaW9FbmdpbmUuc2V0Q2FuUGxheUNhbGxiYWNrKGF1ZGlvSUQsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3JjID09PSBzZWxmLnNyYykge1xuICAgICAgX2Rpc3BhdGNoQ2FsbGJhY2soc2VsZiwgX0NBTlBMQVlfQ0FMTEJBQ0spO1xuICAgICAgX2Rpc3BhdGNoQ2FsbGJhY2soc2VsZiwgX1BMQVlfQ0FMTEJBQ0spO1xuICAgIH1cbiAgfSk7XG4gIF9hdWRpb0VuZ2luZS5zZXRXYWl0aW5nQ2FsbGJhY2soYXVkaW9JRCwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChzcmMgPT09IHNlbGYuc3JjKSB7XG4gICAgICBfZGlzcGF0Y2hDYWxsYmFjayhzZWxmLCBfV0FJVElOR19DQUxMQkFDSyk7XG4gICAgfVxuICB9KTtcbiAgX2F1ZGlvRW5naW5lLnNldEVycm9yQ2FsbGJhY2soYXVkaW9JRCwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChzcmMgPT09IHNlbGYuc3JjKSB7XG4gICAgICBwcml2YXRlVGhpcy5hdWRpb0lEID0gLTE7XG4gICAgICBfZGlzcGF0Y2hDYWxsYmFjayhzZWxmLCBfRVJST1JfQ0FMTEJBQ0spO1xuICAgIH1cbiAgfSk7XG4gIF9hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhhdWRpb0lELCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNyYyA9PT0gc2VsZi5zcmMpIHtcbiAgICAgIHByaXZhdGVUaGlzLmF1ZGlvSUQgPSAtMTtcbiAgICAgIF9kaXNwYXRjaENhbGxiYWNrKHNlbGYsIF9FTkRFRF9DQUxMQkFDSyk7XG4gICAgfVxuICB9KTtcbn07XG5fcHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG4gIGlmIChwcml2YXRlVGhpcykge1xuICAgIHZhciBhdWRpb0lEID0gcHJpdmF0ZVRoaXMuYXVkaW9JRDtcbiAgICBpZiAodHlwZW9mIGF1ZGlvSUQgPT09IFwibnVtYmVyXCIgJiYgYXVkaW9JRCA+PSAwKSB7XG4gICAgICBfYXVkaW9FbmdpbmUucGF1c2UoYXVkaW9JRCk7XG4gICAgICBfZGlzcGF0Y2hDYWxsYmFjayh0aGlzLCBfUEFVU0VfQ0FMTEJBQ0spO1xuICAgIH1cbiAgfVxufTtcbl9wcm90b3R5cGUuc2VlayA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG4gIGlmIChwcml2YXRlVGhpcyAmJiB0eXBlb2YgcG9zaXRpb24gPT09IFwibnVtYmVyXCIgJiYgcG9zaXRpb24gPj0gMCkge1xuICAgIHZhciBhdWRpb0lEID0gcHJpdmF0ZVRoaXMuYXVkaW9JRDtcbiAgICBpZiAodHlwZW9mIGF1ZGlvSUQgPT09IFwibnVtYmVyXCIgJiYgYXVkaW9JRCA+PSAwKSB7XG4gICAgICBfYXVkaW9FbmdpbmUuc2V0Q3VycmVudFRpbWUoYXVkaW9JRCwgcG9zaXRpb24pO1xuICAgICAgX2Rpc3BhdGNoQ2FsbGJhY2sodGhpcywgX1NFRUtJTkdfQ0FMTEJBQ0spO1xuICAgICAgX2Rpc3BhdGNoQ2FsbGJhY2sodGhpcywgX1NFRUtFRF9DQUxMQkFDSyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByaXZhdGVUaGlzLnNlZWtQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIH1cbiAgfVxufTtcbl9wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRoaXMpO1xuICBpZiAocHJpdmF0ZVRoaXMpIHtcbiAgICB2YXIgYXVkaW9JRCA9IHByaXZhdGVUaGlzLmF1ZGlvSUQ7XG4gICAgaWYgKHR5cGVvZiBhdWRpb0lEID09PSBcIm51bWJlclwiICYmIGF1ZGlvSUQgPj0gMCkge1xuICAgICAgX2F1ZGlvRW5naW5lLnN0b3AoYXVkaW9JRCk7XG4gICAgICBwcml2YXRlVGhpcy5hdWRpb0lEID0gLTE7XG4gICAgICBfZGlzcGF0Y2hDYWxsYmFjayh0aGlzLCBfU1RPUF9DQUxMQkFDSyk7XG4gICAgfVxuICB9XG59O1xuX3Byb3RvdHlwZS5vZmZDYW5wbGF5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vZmZDYWxsYmFjayh0aGlzLCBfQ0FOUExBWV9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcbl9wcm90b3R5cGUub2ZmRW5kZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgX29mZkNhbGxiYWNrKHRoaXMsIF9FTkRFRF9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcbl9wcm90b3R5cGUub2ZmRXJyb3IgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgX29mZkNhbGxiYWNrKHRoaXMsIF9FUlJPUl9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcbl9wcm90b3R5cGUub2ZmUGF1c2UgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgX29mZkNhbGxiYWNrKHRoaXMsIF9QQVVTRV9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcbl9wcm90b3R5cGUub2ZmUGxheSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb2ZmQ2FsbGJhY2sodGhpcywgX1BMQVlfQ0FMTEJBQ0ssIGNhbGxiYWNrKTtcbn07XG5fcHJvdG90eXBlLm9mZlNlZWtlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb2ZmQ2FsbGJhY2sodGhpcywgX1NFRUtFRF9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcbl9wcm90b3R5cGUub2ZmU2Vla2luZyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb2ZmQ2FsbGJhY2sodGhpcywgX1NFRUtJTkdfQ0FMTEJBQ0ssIGNhbGxiYWNrKTtcbn07XG5fcHJvdG90eXBlLm9mZlN0b3AgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgX29mZkNhbGxiYWNrKHRoaXMsIF9TVE9QX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuX3Byb3RvdHlwZS5vZmZUaW1lVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBfb2ZmQ2FsbGJhY2sodGhpcywgX1RJTUVfVVBEQVRFX0NBTExCQUNLLCBjYWxsYmFjayk7XG4gIGlmIChyZXN1bHQgPT09IDEpIHtcbiAgICBjbGVhckludGVydmFsKF93ZWFrTWFwLmdldCh0aGlzKS5pbnRlcnZhbElEKTtcbiAgfVxufTtcbl9wcm90b3R5cGUub2ZmV2FpdGluZyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb2ZmQ2FsbGJhY2sodGhpcywgX1dBSVRJTkdfQ0FMTEJBQ0ssIGNhbGxiYWNrKTtcbn07XG5fcHJvdG90eXBlLm9uQ2FucGxheSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb25DYWxsYmFjayh0aGlzLCBfQ0FOUExBWV9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcbl9wcm90b3R5cGUub25FbmRlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb25DYWxsYmFjayh0aGlzLCBfRU5ERURfQ0FMTEJBQ0ssIGNhbGxiYWNrKTtcbn07XG5fcHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgX29uQ2FsbGJhY2sodGhpcywgX0VSUk9SX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuX3Byb3RvdHlwZS5vblBhdXNlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vbkNhbGxiYWNrKHRoaXMsIF9QQVVTRV9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcbl9wcm90b3R5cGUub25QbGF5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vbkNhbGxiYWNrKHRoaXMsIF9QTEFZX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuX3Byb3RvdHlwZS5vblNlZWtlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb25DYWxsYmFjayh0aGlzLCBfU0VFS0VEX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuX3Byb3RvdHlwZS5vblNlZWtpbmcgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgX29uQ2FsbGJhY2sodGhpcywgXCJzZWVraW5nQ2FsbGJhY2tzXCIsIGNhbGxiYWNrKTtcbn07XG5fcHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb25DYWxsYmFjayh0aGlzLCBfU1RPUF9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcbl9wcm90b3R5cGUub25UaW1lVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBfb25DYWxsYmFjayh0aGlzLCBfVElNRV9VUERBVEVfQ0FMTEJBQ0ssIGNhbGxiYWNrKTtcbiAgaWYgKHJlc3VsdCA9PT0gMSkge1xuICAgIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGludGVydmFsSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQoc2VsZik7XG4gICAgICBpZiAocHJpdmF0ZVRoaXMpIHtcbiAgICAgICAgdmFyIGF1ZGlvSUQgPSBwcml2YXRlVGhpcy5hdWRpb0lEO1xuICAgICAgICBpZiAodHlwZW9mIGF1ZGlvSUQgPT09IFwibnVtYmVyXCIgJiYgYXVkaW9JRCA+PSAwICYmIF9hdWRpb0VuZ2luZS5nZXRTdGF0ZShhdWRpb0lEKSA9PT0gX1NUQVRFLlBMQVlJTkcpIHtcbiAgICAgICAgICBfZGlzcGF0Y2hDYWxsYmFjayhzZWxmLCBfVElNRV9VUERBVEVfQ0FMTEJBQ0spO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgfVxuICAgIH0sIDUwMCk7XG4gICAgcHJpdmF0ZVRoaXMuaW50ZXJ2YWxJRCA9IGludGVydmFsSUQ7XG4gIH1cbn07XG5fcHJvdG90eXBlLm9uV2FpdGluZyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb25DYWxsYmFjayh0aGlzLCBfV0FJVElOR19DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcbmZ1bmN0aW9uIF9kZWZhdWx0KEF1ZGlvRW5naW5lKSB7XG4gIGlmIChfYXVkaW9FbmdpbmUgPT09IHVuZGVmaW5lZCkge1xuICAgIF9hdWRpb0VuZ2luZSA9IE9iamVjdC5hc3NpZ24oe30sIEF1ZGlvRW5naW5lKTtcbiAgICBPYmplY3Qua2V5cyhBdWRpb0VuZ2luZSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiBBdWRpb0VuZ2luZVtuYW1lXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIEF1ZGlvRW5naW5lW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIkF1ZGlvRW5naW5lLlwiICsgbmFtZSArIFwiIGlzIGRlcHJlY2F0ZWRcIik7XG4gICAgICAgICAgcmV0dXJuIF9hdWRpb0VuZ2luZVtuYW1lXS5hcHBseShBdWRpb0VuZ2luZSwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbmV3IElubmVyQXVkaW9Db250ZXh0KCk7XG59XG47XG5cbn0se31dLDMxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG52YXIgX2RlZmF1bHQgPSB7XG4gIGV4cG9ydFRvOiBmdW5jdGlvbiBleHBvcnRUbyhuYW1lLCBmcm9tLCB0bywgZXJyQ2FsbGJhY2ssIHN1Y2Nlc3NDYWxsYmFjaykge1xuICAgIGlmIChfdHlwZW9mKGZyb20pICE9PSBcIm9iamVjdFwiIHx8IF90eXBlb2YodG8pICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJpbnZhbGlkIGV4cG9ydFRvOiBcIiwgbmFtZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBmcm9tUHJvcGVydHkgPSBmcm9tW25hbWVdO1xuICAgIGlmICh0eXBlb2YgZnJvbVByb3BlcnR5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAodHlwZW9mIGZyb21Qcm9wZXJ0eSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRvW25hbWVdID0gZnJvbVByb3BlcnR5LmJpbmQoZnJvbSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odG9bbmFtZV0sIGZyb21Qcm9wZXJ0eSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b1tuYW1lXSA9IGZyb21Qcm9wZXJ0eTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygc3VjY2Vzc0NhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKG5hbWUgKyBcIiBpcyBub3Qgc3VwcG9ydCFcIik7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH07XG4gICAgICBpZiAodHlwZW9mIGVyckNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXJyQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHt9XX0se30sWzEwXSk7XG4iXSwiZmlsZSI6InJhbC5qcyJ9
