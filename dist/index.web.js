// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\weex\\myApp\\node_modules\\vue-loader\\lib\\component-normalizer.js'");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\weex\\myApp\\node_modules\\css-loader\\lib\\css-base.js'");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\weex\\myApp\\node_modules\\vue\\dist\\vue.runtime.esm.js'");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\weex\\myApp\\node_modules\\weex-ui\\index.js'");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\weex\\myApp\\node_modules\\vue-style-loader\\lib\\addStylesClient.js'");

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(10);

var _vue2 = _interopRequireDefault(_vue);

var _weexVueRender = __webpack_require__(24);

var _weexVueRender2 = _interopRequireDefault(_weexVueRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Vue */
_weexVueRender2.default.init(_vue2.default);
/* weex initialized here, please do not move this line */

var _require = __webpack_require__(25),
    router = _require.router;

var App = __webpack_require__(313);

/* eslint-disable no-new */
new _vue2.default(_vue2.default.util.extend({
  el: '#root',
  router: router
}, App));
router.push('/');

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\weex\\myApp\\node_modules\\weex-vue-render\\dist\\index.common.js'");

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _vue = __webpack_require__(10);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(26);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _index = __webpack_require__(27);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Vue */
_vue2.default.use(_vueRouter2.default);

var router = exports.router = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'BottomBar',
    component: _index2.default
  }]
});

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\weex\\myApp\\node_modules\\vue-router\\dist\\vue-router.esm.js'");

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(28)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(312),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-90611786",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\weex\\myApp\\src\\pages\\BottomBar\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-90611786", Component.options)
  } else {
    hotAPI.reload("data-v-90611786", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6c435858", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-90611786\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-90611786\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.item-container[data-v-90611786] {\n  width: 10rem;\n  background-color: #f2f3f4;\n  align-items: center;\n  justify-content: center;\n}\n.weex-ct[data-v-90611786]{\n  position: static;\n}\n", ""]);

// exports


/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(308)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(310),
  /* template */
  __webpack_require__(311),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-24261bc0",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\weex\\myApp\\src\\pages\\Home\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24261bc0", Component.options)
  } else {
    hotAPI.reload("data-v-24261bc0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(309);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3396b3c6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24261bc0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24261bc0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexUi = __webpack_require__(11);

var _index = __webpack_require__(307);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'BottomBar',
  components: {
    WxcTabBar: _weexUi.WxcTabBar,
    Utils: _weexUi.Utils,
    WxcButton: _weexUi.WxcButton,
    Home: _index2.default
  },
  data: function data() {
    return {
      tabTitles: [{
        title: '首页',
        icon: '/web/assets/img/home.png',
        activeIcon: '/web/assets/img/home1.png'
      }, {
        title: '找房',
        icon: '/web/assets/img/daohang.png',
        activeIcon: '/web/assets/img/daohang1.png'
      }, {
        title: '租房',
        icon: '/web/assets/img/jiahao.png',
        activeIcon: '/web/assets/img/jiahao1.png'
      }, {
        title: '业主',
        icon: '/web/assets/img/yewu.png',
        activeIcon: '/web/assets/img/yewu1.png'
      }, {
        title: '我的',
        icon: '/web/assets/img/wode.png',
        activeIcon: '/web/assets/img/wode.png'
      }],
      tabStyles: {
        bgColor: '#FFFFFF',
        titleColor: '#666666',
        activeTitleColor: '#3D3D3D',
        activeBgColor: '#FFFFFF',
        isActiveTitleBold: true,
        iconWidth: 70,
        iconHeight: 70,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10
      },
      tabIconFontStyles: {
        bgColor: '#FFFFFF',
        titleColor: '#666666',
        activeTitleColor: '#3D3D3D',
        activeBgColor: '#FFFFFF',
        isActiveTitleBold: true,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        iconFontSize: 50,
        iconFontMarginBottom: 8,
        iconFontColor: '#333333',
        activeIconFontColor: 'red',
        iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
      }
    };
  },

  props: {},
  watch: {},
  methods: {
    wxcTabBarCurrentTabSelected: function wxcTabBarCurrentTabSelected(e) {
      var index = e.page;
      console.log(index);
    }
  },
  computed: {},
  created: function created() {
    var tabPageHeight = _weexUi.Utils.env.getPageHeight();
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    var tabStyles = this.tabStyles;

    this.contentStyle = { height: tabPageHeight - tabStyles.height + 'px' };
  },
  mounted: function mounted() {},
  destroyed: function destroyed() {}
};

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexUi = __webpack_require__(11);

exports.default = {
  name: 'Home',
  components: {
    WxcTabBar: _weexUi.WxcTabBar, Utils: _weexUi.Utils
  },
  data: function data() {
    return {};
  },

  props: {},
  watch: {},
  methods: {},
  computed: {},
  created: function created() {},
  mounted: function mounted() {},
  destroyed: function destroyed() {}
}; //
//
//
//
//
//

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: " weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("首页")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-24261bc0", module.exports)
  }
}

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: " weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('wxc-tab-bar', {
    attrs: {
      "tab-titles": _vm.tabTitles,
      "tab-styles": _vm.tabStyles,
      "title-type": "icon",
      "data-evt-wxcTabBarCurrentTabSelected": ""
    },
    on: {
      "wxcTabBarCurrentTabSelected": _vm.wxcTabBarCurrentTabSelected
    }
  }, [_c('div', {
    staticClass: "item-container weex-ct weex-div",
    style: (_vm._px2rem(_vm.contentStyle, 75)),
    attrs: {
      "weex-type": "div"
    }
  }, [_c('Home')], 1), _vm._v(" "), _c('div', {
    staticClass: "item-container weex-ct weex-div",
    style: (_vm._px2rem(_vm.contentStyle, 75)),
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: " weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("找房")])]), _vm._v(" "), _c('div', {
    staticClass: "item-container weex-ct weex-div",
    style: (_vm._px2rem(_vm.contentStyle, 75)),
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: " weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("租房")])]), _vm._v(" "), _c('div', {
    staticClass: "item-container weex-ct weex-div",
    style: (_vm._px2rem(_vm.contentStyle, 75)),
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: " weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("业主")])]), _vm._v(" "), _c('div', {
    staticClass: "item-container weex-ct weex-div",
    style: (_vm._px2rem(_vm.contentStyle, 75)),
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: " weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("我的")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-90611786", module.exports)
  }
}

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(314)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(316),
  /* template */
  __webpack_require__(317),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-185d9c8f",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\weex\\myApp\\src\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-185d9c8f", Component.options)
  } else {
    hotAPI.reload("data-v-185d9c8f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(315);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("d7459eb0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-185d9c8f\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-185d9c8f\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.item-container[data-v-185d9c8f] {\n  width: 10rem;\n  background-color: #f2f3f4;\n  align-items: center;\n  justify-content: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexUi = __webpack_require__(11);

var _index = __webpack_require__(307);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'BottomBar',
  components: {
    WxcTabBar: _weexUi.WxcTabBar,
    Utils: _weexUi.Utils,
    WxcButton: _weexUi.WxcButton,
    Home: _index2.default
  },
  data: function data() {
    return {
      tabTitles: [{
        title: '首页',
        icon: '/web/assets/img/home.png',
        activeIcon: '/web/assets/img/home1.png'
      }, {
        title: '找房',
        icon: '/web/assets/img/daohang.png',
        activeIcon: '/web/assets/img/daohang1.png'
      }, {
        title: '租房',
        icon: '/web/assets/img/jiahao.png',
        activeIcon: '/web/assets/img/jiahao1.png'
      }, {
        title: '业主',
        icon: '/web/assets/img/yewu.png',
        activeIcon: '/web/assets/img/yewu1.png'
      }, {
        title: '我的',
        icon: '/web/assets/img/wode.png',
        activeIcon: '/web/assets/img/wode.png'
      }],
      tabStyles: {
        bgColor: '#FFFFFF',
        titleColor: '#666666',
        activeTitleColor: '#3D3D3D',
        activeBgColor: '#FFFFFF',
        isActiveTitleBold: true,
        iconWidth: 70,
        iconHeight: 70,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10
      },
      tabIconFontStyles: {
        bgColor: '#FFFFFF',
        titleColor: '#666666',
        activeTitleColor: '#3D3D3D',
        activeBgColor: '#FFFFFF',
        isActiveTitleBold: true,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        iconFontSize: 50,
        iconFontMarginBottom: 8,
        iconFontColor: '#333333',
        activeIconFontColor: 'red',
        iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
      }
    };
  },

  props: {},
  watch: {},
  methods: {
    wxcTabBarCurrentTabSelected: function wxcTabBarCurrentTabSelected(e) {
      var index = e.page;
      console.log(index);
    }
  },
  computed: {},
  created: function created() {
    var tabPageHeight = _weexUi.Utils.env.getPageHeight();
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    var tabStyles = this.tabStyles;

    this.contentStyle = { height: tabPageHeight - tabStyles.height + 'px' };
  },
  mounted: function mounted() {},
  destroyed: function destroyed() {}
};

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: " weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('wxc-tab-bar', {
    attrs: {
      "tab-titles": _vm.tabTitles,
      "tab-styles": _vm.tabStyles,
      "title-type": "icon",
      "data-evt-wxcTabBarCurrentTabSelected": ""
    },
    on: {
      "wxcTabBarCurrentTabSelected": _vm.wxcTabBarCurrentTabSelected
    }
  }, [_c('div', {
    staticClass: "item-container weex-ct weex-div",
    style: (_vm._px2rem(_vm.contentStyle, 75)),
    attrs: {
      "weex-type": "div"
    }
  }, [_c('Home')], 1), _vm._v(" "), _c('div', {
    staticClass: "item-container weex-ct weex-div",
    style: (_vm._px2rem(_vm.contentStyle, 75)),
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: " weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("找房")])]), _vm._v(" "), _c('div', {
    staticClass: "item-container weex-ct weex-div",
    style: (_vm._px2rem(_vm.contentStyle, 75)),
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: " weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("租房")])]), _vm._v(" "), _c('div', {
    staticClass: "item-container weex-ct weex-div",
    style: (_vm._px2rem(_vm.contentStyle, 75)),
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: " weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("业主")])]), _vm._v(" "), _c('div', {
    staticClass: "item-container weex-ct weex-div",
    style: (_vm._px2rem(_vm.contentStyle, 75)),
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: " weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("我的")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-185d9c8f", module.exports)
  }
}

/***/ })

/******/ });