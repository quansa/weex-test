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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global Vue */
/* weex initialized here, please do not move this line */
var _require = __webpack_require__(16),
    router = _require.router;

var App = __webpack_require__(258);

/* eslint-disable no-new */
new Vue(Vue.util.extend({
  el: '#root',
  router: router
}, App));
router.push('/');

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _vueRouter = __webpack_require__(17);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _index = __webpack_require__(18);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Vue */
Vue.use(_vueRouter2.default);

var router = exports.router = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'BottomBar',
    component: _index2.default
  }]
});

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\weex\\myApp\\node_modules\\vue-router\\dist\\vue-router.esm.js'");

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(19)
)

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(257)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\weex\\myApp\\src\\pages\\BottomBar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-10e3fd10"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = {
  "item-container": {
    "width": "750",
    "backgroundColor": "#f2f3f4",
    "alignItems": "center",
    "justifyContent": "center"
  }
}

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexUi = __webpack_require__(6);

var _index = __webpack_require__(253);

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

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(254)
)

/* script */
__vue_exports__ = __webpack_require__(255)

/* template */
var __vue_template__ = __webpack_require__(256)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\weex\\myApp\\src\\pages\\Home\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-130cdbd3"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexUi = __webpack_require__(6);

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

/***/ 256:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["home"]
  }, [_c('text', [_vm._v("首页")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('wxc-tab-bar', {
    attrs: {
      "tabTitles": _vm.tabTitles,
      "tabStyles": _vm.tabStyles,
      "titleType": "icon"
    },
    on: {
      "wxcTabBarCurrentTabSelected": _vm.wxcTabBarCurrentTabSelected
    }
  }, [_c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('Home')], 1), _c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('text', [_vm._v("找房")])]), _c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('text', [_vm._v("租房")])]), _c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('text', [_vm._v("业主")])]), _c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('text', [_vm._v("我的")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(259)
)

/* script */
__vue_exports__ = __webpack_require__(260)

/* template */
var __vue_template__ = __webpack_require__(261)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\weex\\myApp\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a4d8e3c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = {
  "item-container": {
    "width": "750",
    "backgroundColor": "#f2f3f4",
    "alignItems": "center",
    "justifyContent": "center"
  }
}

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexUi = __webpack_require__(6);

var _index = __webpack_require__(253);

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

/***/ 261:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('wxc-tab-bar', {
    attrs: {
      "tabTitles": _vm.tabTitles,
      "tabStyles": _vm.tabStyles,
      "titleType": "icon"
    },
    on: {
      "wxcTabBarCurrentTabSelected": _vm.wxcTabBarCurrentTabSelected
    }
  }, [_c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('Home')], 1), _c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('text', [_vm._v("找房")])]), _c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('text', [_vm._v("租房")])]), _c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('text', [_vm._v("业主")])]), _c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('text', [_vm._v("我的")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\weex\\myApp\\node_modules\\weex-ui\\index.js'");

/***/ })

/******/ });