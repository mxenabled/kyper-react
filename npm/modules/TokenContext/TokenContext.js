(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/context/TokenContext.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mx-design-tokens/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/mx-design-tokens/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.dark = exports.light = exports.buildTheme = void 0;\n\nvar _core = _interopRequireDefault(__webpack_require__(/*! ./tokens/core */ \"./node_modules/mx-design-tokens/dist/tokens/core.js\"));\n\nvar _backgroundColor = _interopRequireDefault(__webpack_require__(/*! ./tokens/backgroundColor */ \"./node_modules/mx-design-tokens/dist/tokens/backgroundColor.js\"));\n\nvar _borderColor = _interopRequireDefault(__webpack_require__(/*! ./tokens/borderColor */ \"./node_modules/mx-design-tokens/dist/tokens/borderColor.js\"));\n\nvar _borderRadius = _interopRequireDefault(__webpack_require__(/*! ./tokens/borderRadius */ \"./node_modules/mx-design-tokens/dist/tokens/borderRadius.js\"));\n\nvar _boxShadow = _interopRequireDefault(__webpack_require__(/*! ./tokens/boxShadow */ \"./node_modules/mx-design-tokens/dist/tokens/boxShadow.js\"));\n\nvar _fontSize = _interopRequireDefault(__webpack_require__(/*! ./tokens/fontSize */ \"./node_modules/mx-design-tokens/dist/tokens/fontSize.js\"));\n\nvar _spacing = _interopRequireDefault(__webpack_require__(/*! ./tokens/spacing */ \"./node_modules/mx-design-tokens/dist/tokens/spacing.js\"));\n\nvar _textColor = _interopRequireDefault(__webpack_require__(/*! ./tokens/textColor */ \"./node_modules/mx-design-tokens/dist/tokens/textColor.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar buildTheme = function buildTheme(themeName) {\n  var customColors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  var customCore = _objectSpread({}, _core[\"default\"], {\n    Color: _objectSpread({}, _core[\"default\"].Color, {}, customColors)\n  });\n\n  return _objectSpread({}, _core[\"default\"], {\n    BackgroundColor: _backgroundColor[\"default\"][themeName](customCore),\n    BorderColor: _borderColor[\"default\"][themeName](customCore),\n    BorderRadius: _objectSpread({}, _core[\"default\"].BorderRadius, {}, _borderRadius[\"default\"][themeName](customCore)),\n    BoxShadow: _objectSpread({}, _core[\"default\"].BoxShadow, {}, _boxShadow[\"default\"][themeName](customCore)),\n    FontSize: _objectSpread({}, _core[\"default\"].FontSize, {}, _fontSize[\"default\"][themeName](customCore)),\n    Spacing: _objectSpread({}, _core[\"default\"].Spacing, {}, _spacing[\"default\"][themeName](customCore)),\n    TextColor: _textColor[\"default\"][themeName](customCore)\n  });\n};\n\nexports.buildTheme = buildTheme;\nvar light = buildTheme('light');\nexports.light = light;\nvar dark = buildTheme('dark');\nexports.dark = dark;\n\n//# sourceURL=webpack:///./node_modules/mx-design-tokens/dist/index.js?");

/***/ }),

/***/ "./node_modules/mx-design-tokens/dist/tokens/backgroundColor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mx-design-tokens/dist/tokens/backgroundColor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar light = function light(core) {\n  return {\n    ButtonLinkHover: core.Color.Primary100,\n    ButtonPrimary: core.Color.Primary300,\n    ButtonPrimaryHover: core.Color.Primary400,\n    ButtonPrimaryDisabled: core.Color.Neutral200,\n    ButtonNeutral: core.Color.NeutralWhite,\n    ButtonNeutralHover: core.Color.NeutralWhite,\n    ButtonNeutralDisabled: core.Color.NeutralWhite,\n    ButtonTransparentHover: core.Color.Primary100,\n    ButtonDestructive: core.Color.Error300,\n    ButtonDestructiveHover: core.Color.Error400,\n    ButtonDestructiveDisabled: core.Color.Neutral200,\n    InputFocus: core.Color.NeutralWhite,\n    InputDisabled: core.Color.TransparentNeutral100,\n    Modal: core.Color.NeutralWhite,\n    ModalScrim: core.Color.TransparentScrim,\n    Body: core.Color.Neutral100,\n    Container: core.Color.NeutralWhite,\n    Card: core.Color.NeutralWhite,\n    LeftNavItem: core.Color.NeutralWhite,\n    LeftNavItemHover: core.Color.Neutral100,\n    LeftNavItemActive: core.Color.Primary100,\n    TabHover: core.Color.Neutral100,\n    HrLight: core.Color.Neutral300,\n    HrDark: core.Color.Neutral400\n  };\n};\n\nvar dark = function dark(core) {\n  return _objectSpread({}, light(core), {\n    ButtonLinkHover: core.Color.Neutral700,\n    ButtonPrimaryDisabled: core.Color.Neutral700,\n    ButtonNeutral: core.Color.Neutral800,\n    ButtonNeutralHover: core.Color.Neutral600,\n    ButtonNeutralDisabled: core.Color.Neutral700,\n    ButtonTransparentHover: core.Color.Neutral600,\n    ButtonDestructiveDisabled: core.Color.Neutral700,\n    InputFocus: core.Color.Neutral800,\n    InputDisabled: 'transparent',\n    Modal: core.Color.Neutral800,\n    ModalScrim: core.Color.TransparentScrimDarker,\n    Body: core.Color.Neutral900,\n    Container: core.Color.Neutral800,\n    Card: core.Color.Neutral800,\n    LeftNavItem: core.Color.Neutral800,\n    LeftNavItemHover: core.Color.Neutral700,\n    LeftNavItemActive: core.Color.Neutral900,\n    TabHover: core.Color.Neutral700,\n    HrLight: core.Color.Neutral600,\n    HrDark: core.Color.Neutral500\n  });\n};\n\nvar _default = {\n  light: light,\n  dark: dark\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/mx-design-tokens/dist/tokens/backgroundColor.js?");

/***/ }),

/***/ "./node_modules/mx-design-tokens/dist/tokens/borderColor.js":
/*!******************************************************************!*\
  !*** ./node_modules/mx-design-tokens/dist/tokens/borderColor.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar light = function light(core) {\n  return {\n    ButtonNeutral: core.Color.Neutral400,\n    ButtonNeutralHover: core.Color.Primary400,\n    ButtonNeutralDisabled: core.Color.Primary400,\n    Input: core.Color.Neutral600,\n    InputHover: core.Color.Neutral900,\n    InputFocus: core.Color.Primary300,\n    InputError: core.Color.Error300,\n    InputDisabled: core.Color.TransparentNeutral400,\n    ButtonLinkHover: core.Color.Primary400,\n    Dropdown: core.Color.Neutral600,\n    DropdownHover: core.Color.Neutral900,\n    DropdownFocus: core.Color.Primary300,\n    DropdownError: core.Color.Error300,\n    DropdownDisabled: core.Color.TransparentNeutral400,\n    TabActive: core.Color.Primary300\n  };\n};\n\nvar dark = function dark(core) {\n  return _objectSpread({}, light(core), {\n    ButtonNeutral: core.Color.Neutral500,\n    ButtonNeutralHover: core.Color.Neutral500,\n    ButtonNeutralDisabled: core.Color.Neutral600,\n    Input: core.Color.Neutral500,\n    InputHover: core.Color.NeutralWhite,\n    InputFocus: core.Color.Primary200,\n    InputError: core.Color.Error200,\n    InputDisabled: core.Color.Neutral600,\n    ButtonLinkHover: core.Color.NeutralWhite,\n    Dropdown: core.Color.Neutral500,\n    DropdownHover: core.Color.NeutralWhite,\n    DropdownFocus: core.Color.Primary200,\n    DropdownError: core.Color.Error200,\n    DropdownDisabled: core.Color.Neutral600,\n    TabActive: core.Color.Primary200\n  });\n};\n\nvar _default = {\n  light: light,\n  dark: dark\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/mx-design-tokens/dist/tokens/borderColor.js?");

/***/ }),

/***/ "./node_modules/mx-design-tokens/dist/tokens/borderRadius.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mx-design-tokens/dist/tokens/borderRadius.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar light = function light(core) {\n  return {\n    Button: core.BorderRadius.Medium,\n    Input: core.BorderRadius.Medium,\n    Modal: core.BorderRadius.Medium,\n    ModalClose: core.BorderRadius.Medium,\n    DropdownToggle: core.BorderRadius.Medium,\n    DropdownMenu: core.BorderRadius.Medium,\n    Container: core.BorderRadius.Medium,\n    Card: core.BorderRadius.Medium\n  };\n};\n\nvar dark = function dark(core) {\n  return _objectSpread({}, light(core));\n};\n\nvar _default = {\n  light: light,\n  dark: dark\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/mx-design-tokens/dist/tokens/borderRadius.js?");

/***/ }),

/***/ "./node_modules/mx-design-tokens/dist/tokens/boxShadow.js":
/*!****************************************************************!*\
  !*** ./node_modules/mx-design-tokens/dist/tokens/boxShadow.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar light = function light(core) {\n  return {\n    Card: core.BoxShadow.Low,\n    Container: core.BoxShadow.Low,\n    DropdownMenu: core.BoxShadow.Medium,\n    Modal: core.BoxShadow.High,\n    BottomBar: core.BoxShadow.Top,\n    Drawer: core.BoxShadow.Left,\n    FocusRingDefault: core.BoxShadow.Focus\n  };\n};\n\nvar dark = function dark(core) {\n  return _objectSpread({}, light(core), {\n    Card: \"none\",\n    Container: \"none\",\n    DropdownMenu: \"none\",\n    Modal: \"none\",\n    BottomBar: \"none\",\n    Drawer: \"none\"\n  });\n};\n\nvar _default = {\n  light: light,\n  dark: dark\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/mx-design-tokens/dist/tokens/boxShadow.js?");

/***/ }),

/***/ "./node_modules/mx-design-tokens/dist/tokens/core.js":
/*!***********************************************************!*\
  !*** ./node_modules/mx-design-tokens/dist/tokens/core.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n// This should not be modified\nvar _default = {\n  Color: {\n    Primary100: \"#EAF1FB\",\n    Primary200: \"#6FA1EC\",\n    Primary300: \"#2F73DA\",\n    Primary400: \"#165ECC\",\n    Primary500: \"#034AB3\",\n    NeutralWhite: \"#FFFFFF\",\n    Neutral100: \"#F7F9FC\",\n    Neutral200: \"#EDF1F7\",\n    Neutral300: \"#E2E8F0\",\n    Neutral400: \"#CBD3DF\",\n    Neutral500: \"#A4B0C1\",\n    Neutral600: \"#657285\",\n    Neutral700: \"#454F5E\",\n    Neutral800: \"#1A222E\",\n    Neutral900: \"#121417\",\n    Success100: \"#B3F7D0\",\n    Success200: \"#79F3C0\",\n    Success300: \"#1AD6A8\",\n    Success400: \"#00BE8E\",\n    Success500: \"#008557\",\n    Warning100: \"#FEF7B9\",\n    Warning200: \"#FFDA6C\",\n    Warning300: \"#FFB400\",\n    Warning400: \"#FA8902\",\n    Warning500: \"#C33E01\",\n    Error100: \"#FCD2CF\",\n    Error200: \"#F45532\",\n    Error300: \"#DF320C\",\n    Error400: \"#C61A0B\",\n    Error500: \"#AE0A0A\",\n    TransparentNeutral100: \"rgba(247, 249, 252, 0.55)\",\n    TransparentNeutral400: \"rgba(203, 211, 223, 0.55)\",\n    TransparentScrim: \"rgba(0, 0, 0, 0.25)\",\n    TransparentScrimDarker: \"rgba(0, 0, 0, 0.50)\"\n  },\n  BoxShadow: {\n    Low: ' 0px 1px 3px rgba(87, 102, 117, 0.2)',\n    Medium: ' 0px 3px 8px rgba(87, 102, 117, 0.15)',\n    High: ' 0px 10px 20px rgba(87, 102, 117, 0.16)',\n    Top: ' 0px -1px 3px rgba(87, 102, 117, 0.2)',\n    Left: ' -1px 0px 3px rgba(87, 102, 117, 0.2)',\n    Right: ' 1px 0px 3px rgba(87, 102, 117, 0.2)',\n    Focus: '0px 0px 0px 2px rgba(82, 138, 224, 0.8)'\n  },\n  BorderRadius: {\n    Small: 2,\n    Medium: 4,\n    Large: 16\n  },\n  FontSize: {\n    Tiny: 10,\n    XSmall: 12,\n    Small: 14,\n    ParagraphSmall: 14,\n    Body: 16,\n    Paragraph: 16,\n    H3: 20,\n    H2: 24,\n    H1: 36\n  },\n  FontWeight: {\n    Regular: 400,\n    Semibold: 600,\n    Bold: 700\n  },\n  LineHeight: {\n    Tiny: 12,\n    XSmall: 16,\n    Small: 16,\n    ParagraphSmall: 20,\n    Body: 20,\n    Paragraph: 24,\n    H3: 24,\n    H2: 32,\n    H1: 44\n  },\n  Spacing: {\n    Tiny: 4,\n    XSmall: 8,\n    Small: 12,\n    Medium: 16,\n    Large: 24,\n    XLarge: 32,\n    XXLarge: 40,\n    XXXLarge: 48,\n    Jumbo: 64,\n    SuperJumbo: 96\n  },\n  Time: {\n    Short: \"300ms\",\n    Med: \"500ms\",\n    Long: \"1000ms\"\n  },\n  Easing: {\n    Default: \"cubic-bezier(.475,.425,0,.995)\"\n  },\n  MediaQuery: {\n    Small: 576,\n    Med: 768,\n    Large: 992,\n    XLarge: 1200\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/mx-design-tokens/dist/tokens/core.js?");

/***/ }),

/***/ "./node_modules/mx-design-tokens/dist/tokens/fontSize.js":
/*!***************************************************************!*\
  !*** ./node_modules/mx-design-tokens/dist/tokens/fontSize.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar light = function light(core) {\n  return {\n    Input: core.FontSize.Body,\n    InputLabel: core.FontSize.Body,\n    InputHelpText: core.FontSize.Small,\n    TextArea: core.FontSize.Body,\n    TextAreaHelpText: core.FontSize.Small,\n    DropdownToggle: core.FontSize.Body,\n    DropdownItems: core.FontSize.Body,\n    ModalHeader: core.FontSize.H3,\n    ButtonLinkSmall: core.FontSize.Small,\n    ButtonLinkLarge: core.FontSize.Body,\n    Button: core.FontSize.Body\n  };\n};\n\nvar dark = function dark(core) {\n  return _objectSpread({}, light(core));\n};\n\nvar _default = {\n  light: light,\n  dark: dark\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/mx-design-tokens/dist/tokens/fontSize.js?");

/***/ }),

/***/ "./node_modules/mx-design-tokens/dist/tokens/spacing.js":
/*!**************************************************************!*\
  !*** ./node_modules/mx-design-tokens/dist/tokens/spacing.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar light = function light(core) {\n  return {\n    ButtonPadding: core.Spacing.Small,\n    CheckboxLabelMarginLeft: core.Spacing.Small,\n    CheckboxLabelMarginRight: core.Spacing.Small,\n    SwitchLabelMarginLeft: core.Spacing.Small,\n    SwitchLabelMarginRight: core.Spacing.Small,\n    InputLabelMarginBottom: core.Spacing.Tiny,\n    InputLabelMarginLeft: core.Spacing.Tiny,\n    InputPadding: \"\".concat(core.Spacing.Small, \" \").concat(core.Spacing.Medium),\n    InputHelpTextMarginTop: core.Spacing.Tiny,\n    TextAreaPadding: core.Spacing.Small,\n    DropdownToggle: core.Spacing.Small,\n    DropdownItemPaddingTopBottom: core.Spacing.Small,\n    DropdownItemPaddingLeftright: core.Spacing.XSmall,\n    ModalPadding: core.Spacing.Small,\n    ContainerSidePadding: core.Spacing.Large,\n    CardSidePadding: core.Spacing.Medium\n  };\n};\n\nvar dark = function dark(core) {\n  return _objectSpread({}, light(core));\n};\n\nvar _default = {\n  light: light,\n  dark: dark\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/mx-design-tokens/dist/tokens/spacing.js?");

/***/ }),

/***/ "./node_modules/mx-design-tokens/dist/tokens/textColor.js":
/*!****************************************************************!*\
  !*** ./node_modules/mx-design-tokens/dist/tokens/textColor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar light = function light(core) {\n  return {\n    Default: core.Color.Neutral900,\n    Secondary: core.Color.Neutral700,\n    Active: core.Color.Primary300,\n    ActiveHover: core.Color.Primary400,\n    Error: core.Color.Error300,\n    Disabled: core.Color.Neutral500,\n    InputPlaceholder: core.Color.Neutral600,\n    ButtonLink: core.Color.Primary300,\n    ButtonLinkHover: core.Color.Primary400,\n    ButtonPrimary: core.Color.NeutralWhite,\n    ButtonPrimaryDisabled: core.Color.Neutral500,\n    ButtonNeutral: core.Color.Primary300,\n    ButtonNeutralHover: core.Color.Primary400,\n    ButtonNeutralDisabled: core.Color.Neutral600,\n    ButtonTransparent: core.Color.Primary300,\n    ButtonTransparentHover: core.Color.Primary400,\n    ButtonTransparentDisabled: core.Color.Neutral600,\n    ButtonDestructive: core.Color.NeutralWhite,\n    ButtonDestructiveDisabled: core.Color.Neutral500,\n    ButtonTransparentTertiary: core.Color.Neutral700,\n    ButtonLinkTertiary: core.Color.Neutral700,\n    TabActive: core.Color.Primary300,\n    LeftNavItemActive: core.Color.Primary400\n  };\n};\n\nvar dark = function dark(core) {\n  return _objectSpread({}, light(core), {\n    Default: core.Color.NeutralWhite,\n    Secondary: core.Color.Neutral400,\n    Active: core.Color.Primary200,\n    ActiveHover: core.Color.Primary100,\n    Error: core.Color.Error200,\n    Disabled: core.Color.Neutral600,\n    InputPlaceholder: core.Color.Neutral500,\n    ButtonLink: core.Color.Primary200,\n    ButtonLinkHover: core.Color.NeutralWhite,\n    ButtonLinkDisabled: core.Color.Neutral600,\n    ButtonPrimaryDisabled: core.Color.Neutral500,\n    ButtonNeutral: core.Color.NeutralWhite,\n    ButtonNeutralHover: core.Color.NeutralWhite,\n    ButtonNeutralDisabled: core.Color.Neutral500,\n    ButtonTransparent: core.Color.Primary200,\n    ButtonTransparentHover: core.Color.NeutralWhite,\n    ButtonTransparentDisabled: core.Color.Neutral600,\n    ButtonTransparentTertiary: core.Color.Neutral400,\n    ButtonLinkTertiary: core.Color.Neutral400,\n    TabActive: core.Color.Primary200,\n    LeftNavItemActive: core.Color.NeutralWhite\n  });\n};\n\nvar _default = {\n  light: light,\n  dark: dark\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/mx-design-tokens/dist/tokens/textColor.js?");

/***/ }),

/***/ "./src/context/TokenContext.js":
/*!*************************************!*\
  !*** ./src/context/TokenContext.js ***!
  \*************************************/
/*! exports provided: TokenContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TokenContext\", function() { return TokenContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mx_design_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mx-design-tokens */ \"./node_modules/mx-design-tokens/dist/index.js\");\n/* harmony import */ var mx_design_tokens__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mx_design_tokens__WEBPACK_IMPORTED_MODULE_1__);\n/*\n  KYPER-VERSION:0.0.1\n*/\n\n // Will be the initial value for the provider.\n\nvar TokenContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(Object(mx_design_tokens__WEBPACK_IMPORTED_MODULE_1__[\"buildTheme\"])('light'));\n\n//# sourceURL=webpack:///./src/context/TokenContext.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ });
});