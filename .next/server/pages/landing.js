module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/landing.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/card/BoxShadowCard.tsx":
/*!*******************************************!*\
  !*** ./components/card/BoxShadowCard.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/Kyohei/Development/materix_next/materix/components/card/BoxShadowCard.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nconst BoxShadowCard = props => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n  style: props.cardStyle || null,\n  className: \"jsx-3433711706\" + \" \" + `box-shadow-card ${props.clName || \"\"} ${props.disabled ? \"disabled\" : \"\"} `,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }\n}, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  id: \"3433711706\",\n  __self: undefined\n}, \".box-shadow-card.jsx-3433711706{display:inline-block;padding:2%;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,0.4);}.box-shadow-card.top-elements__sample-card.jsx-3433711706{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:0 2%;}.box-shadow-card.top-elements__sample-card.jsx-3433711706>*.jsx-3433711706{width:40%;margin:0 2%;}.box-shadow-card.disabled.jsx-3433711706{background:rgba(0,0,0,0.3);}.landing-package-card.jsx-3433711706{margin-right:2%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9LeW9oZWkvRGV2ZWxvcG1lbnQvbWF0ZXJpeF9uZXh0L21hdGVyaXgvY29tcG9uZW50cy9jYXJkL0JveFNoYWRvd0NhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFFd0IsQUFLTixBQUlELEFBSWdCLEFBR2QsVUFOQSxNQU1DLEtBZk4sQ0FTTSxLQUdjLEtBWGIsa0JBQ29CLHdCQUdQLFdBSFEsZ0hBSXpCLFlBQUMiLCJmaWxlIjoiL1VzZXJzL0t5b2hlaS9EZXZlbG9wbWVudC9tYXRlcml4X25leHQvbWF0ZXJpeC9jb21wb25lbnRzL2NhcmQvQm94U2hhZG93Q2FyZC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgQm94U2hhZG93Q2FyZFByb3BUeXBlIHtcbiAgY2xOYW1lPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGNhcmRTdHlsZT86IGFueTtcbiAgY2hpbGRyZW4/OiBhbnk7XG59XG5cbmNvbnN0IEJveFNoYWRvd0NhcmQ6IFJlYWN0LkZDPEJveFNoYWRvd0NhcmRQcm9wVHlwZT4gPSAocHJvcHMpID0+IChcbiAgPD5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Bib3gtc2hhZG93LWNhcmQgJHtwcm9wcy5jbE5hbWUgfHwgXCJcIn0gJHtcbiAgICAgICAgcHJvcHMuZGlzYWJsZWQgPyBcImRpc2FibGVkXCIgOiBcIlwiXG4gICAgICB9IGB9XG4gICAgICBzdHlsZT17cHJvcHMuY2FyZFN0eWxlIHx8IG51bGx9XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5ib3gtc2hhZG93LWNhcmQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuXG4gICAgICAgICYudG9wLWVsZW1lbnRzX19zYW1wbGUtY2FyZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBtYXJnaW46IDAgMiU7XG5cbiAgICAgICAgICA+ICoge1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAyJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5ib3gtc2hhZG93LWNhcmQuZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICB9XG4gICAgICAubGFuZGluZy1wYWNrYWdlLWNhcmQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCb3hTaGFkb3dDYXJkO1xuIl19 */\\n/*@ sourceURL=/Users/Kyohei/Development/materix_next/materix/components/card/BoxShadowCard.tsx */\"));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoxShadowCard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmQvQm94U2hhZG93Q2FyZC50c3g/N2QyOCJdLCJuYW1lcyI6WyJCb3hTaGFkb3dDYXJkIiwicHJvcHMiLCJjYXJkU3R5bGUiLCJjbE5hbWUiLCJkaXNhYmxlZCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsTUFBTUEsYUFBOEMsR0FBSUMsS0FBRCxJQUNyRCxtRUFDRTtBQUlFLE9BQUssRUFBRUEsS0FBSyxDQUFDQyxTQUFOLElBQW1CLElBSjVCO0FBQUEsc0NBQ2MsbUJBQWtCRCxLQUFLLENBQUNFLE1BQU4sSUFBZ0IsRUFBRyxJQUMvQ0YsS0FBSyxDQUFDRyxRQUFOLEdBQWlCLFVBQWpCLEdBQThCLEVBQy9CLEdBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQU1HSCxLQUFLLENBQUNJLFFBTlQsQ0FERjtBQUFBO0FBQUE7QUFBQSxzakZBREY7O0FBc0NlTCw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY2FyZC9Cb3hTaGFkb3dDYXJkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBCb3hTaGFkb3dDYXJkUHJvcFR5cGUge1xuICBjbE5hbWU/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY2FyZFN0eWxlPzogYW55O1xuICBjaGlsZHJlbj86IGFueTtcbn1cblxuY29uc3QgQm94U2hhZG93Q2FyZDogUmVhY3QuRkM8Qm94U2hhZG93Q2FyZFByb3BUeXBlPiA9IChwcm9wcykgPT4gKFxuICA8PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGJveC1zaGFkb3ctY2FyZCAke3Byb3BzLmNsTmFtZSB8fCBcIlwifSAke1xuICAgICAgICBwcm9wcy5kaXNhYmxlZCA/IFwiZGlzYWJsZWRcIiA6IFwiXCJcbiAgICAgIH0gYH1cbiAgICAgIHN0eWxlPXtwcm9wcy5jYXJkU3R5bGUgfHwgbnVsbH1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmJveC1zaGFkb3ctY2FyZCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG5cbiAgICAgICAgJi50b3AtZWxlbWVudHNfX3NhbXBsZS1jYXJkIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIG1hcmdpbjogMCAyJTtcblxuICAgICAgICAgID4gKiB7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDIlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmJveC1zaGFkb3ctY2FyZC5kaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIH1cbiAgICAgIC5sYW5kaW5nLXBhY2thZ2UtY2FyZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJveFNoYWRvd0NhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/card/BoxShadowCard.tsx\n");

/***/ }),

/***/ "./components/head/HeadTitle.tsx":
/*!***************************************!*\
  !*** ./components/head/HeadTitle.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/Kyohei/Development/materix_next/materix/components/head/HeadTitle.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst HeadTitle = props => {\n  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, props.children, \" - materix | \\u3042\\u306A\\u305F\\u5C02\\u7528\\u306E\\u554F\\u984C\\u96C6\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeadTitle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWQvSGVhZFRpdGxlLnRzeD84ZGE1Il0sIm5hbWVzIjpbIkhlYWRUaXRsZSIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsU0FBbUIsR0FBSUMsS0FBRCxJQUFXO0FBQ3JDLFNBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRQSxLQUFLLENBQUNDLFFBQWQsd0VBREYsQ0FERjtBQUtELENBTkQ7O0FBUWVGLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9oZWFkL0hlYWRUaXRsZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IEhlYWRUaXRsZTogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57cHJvcHMuY2hpbGRyZW59IC0gbWF0ZXJpeCB8IOOBguOBquOBn+WwgueUqOOBruWVj+mhjOmbhjwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZFRpdGxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/head/HeadTitle.tsx\n");

/***/ }),

/***/ "./pages/landing.tsx":
/*!***************************!*\
  !*** ./pages/landing.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_head_HeadTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/head/HeadTitle */ \"./components/head/HeadTitle.tsx\");\n/* harmony import */ var _components_card_BoxShadowCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/card/BoxShadowCard */ \"./components/card/BoxShadowCard.tsx\");\nvar _jsxFileName = \"/Users/Kyohei/Development/materix_next/materix/pages/landing.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst popularPackages = [{\n  name: \"foo\",\n  id: 1\n}, {\n  name: \"bar\",\n  id: 1\n}, {\n  name: \"baz\",\n  id: 1\n}, {\n  name: \"hoge\",\n  id: 1\n}, {\n  name: \"fuga\",\n  id: 1\n}];\nconst packageSubjects = [{\n  name: \"高校数学\",\n  id: 1,\n  disabled: false\n}, {\n  name: \"中学数学\",\n  id: 1,\n  disabled: true\n}, {\n  name: \"英語\",\n  id: 1,\n  disabled: true\n}, {\n  name: \"中学社会\",\n  id: 1,\n  disabled: true\n}];\n\nconst LandingPackageCard = data => __jsx(_components_card_BoxShadowCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  clName: \"landing-package-card\",\n  disabled: data.disabled,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 3\n  }\n}, data.name);\n\nconst Landing = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_head_HeadTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }\n}, \"\\u306F\\u3058\\u3081\\u308B\"), __jsx(\"section\", {\n  style: {\n    margin: \"0 4% 0\"\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }\n}, __jsx(\"h2\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 7\n  }\n}, \"\\u4EBA\\u6C17\\u306E\\u30D1\\u30C3\\u30B1\\u30FC\\u30B8\"), __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 7\n  }\n}, popularPackages.map(data => LandingPackageCard(data))), __jsx(\"h2\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 7\n  }\n}, \"\\u6559\\u79D1\\u5225\\u30D1\\u30C3\\u30B1\\u30FC\\u30B8\"), __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 7\n  }\n}, packageSubjects.map(data => LandingPackageCard(data))), __jsx(\"h2\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 7\n  }\n}, \"\\u554F\\u984C\\u96C6\\u3092\\u4F5C\\u308B\"), __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 7\n  }\n}, packageSubjects.map(data => LandingPackageCard(data)))));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sYW5kaW5nLnRzeD9mOWM2Il0sIm5hbWVzIjpbInBvcHVsYXJQYWNrYWdlcyIsIm5hbWUiLCJpZCIsInBhY2thZ2VTdWJqZWN0cyIsImRpc2FibGVkIiwiTGFuZGluZ1BhY2thZ2VDYXJkIiwiZGF0YSIsIkxhbmRpbmciLCJtYXJnaW4iLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNBLE1BQU1BLGVBQThCLEdBQUcsQ0FDckM7QUFDRUMsTUFBSSxFQUFFLEtBRFI7QUFFRUMsSUFBRSxFQUFFO0FBRk4sQ0FEcUMsRUFLckM7QUFDRUQsTUFBSSxFQUFFLEtBRFI7QUFFRUMsSUFBRSxFQUFFO0FBRk4sQ0FMcUMsRUFTckM7QUFDRUQsTUFBSSxFQUFFLEtBRFI7QUFFRUMsSUFBRSxFQUFFO0FBRk4sQ0FUcUMsRUFhckM7QUFDRUQsTUFBSSxFQUFFLE1BRFI7QUFFRUMsSUFBRSxFQUFFO0FBRk4sQ0FicUMsRUFpQnJDO0FBQ0VELE1BQUksRUFBRSxNQURSO0FBRUVDLElBQUUsRUFBRTtBQUZOLENBakJxQyxDQUF2QztBQXVCQSxNQUFNQyxlQUE4QixHQUFHLENBQ3JDO0FBQ0VGLE1BQUksRUFBRSxNQURSO0FBRUVDLElBQUUsRUFBRSxDQUZOO0FBR0VFLFVBQVEsRUFBRTtBQUhaLENBRHFDLEVBTXJDO0FBQ0VILE1BQUksRUFBRSxNQURSO0FBRUVDLElBQUUsRUFBRSxDQUZOO0FBR0VFLFVBQVEsRUFBRTtBQUhaLENBTnFDLEVBV3JDO0FBQ0VILE1BQUksRUFBRSxJQURSO0FBRUVDLElBQUUsRUFBRSxDQUZOO0FBR0VFLFVBQVEsRUFBRTtBQUhaLENBWHFDLEVBZ0JyQztBQUNFSCxNQUFJLEVBQUUsTUFEUjtBQUVFQyxJQUFFLEVBQUUsQ0FGTjtBQUdFRSxVQUFRLEVBQUU7QUFIWixDQWhCcUMsQ0FBdkM7O0FBdUJBLE1BQU1DLGtCQUFrQixHQUFJQyxJQUFELElBQ3pCLE1BQUMsc0VBQUQ7QUFBZSxRQUFNLEVBQUMsc0JBQXRCO0FBQTZDLFVBQVEsRUFBRUEsSUFBSSxDQUFDRixRQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0dFLElBQUksQ0FBQ0wsSUFEUixDQURGOztBQU1BLE1BQU1NLE9BQWlCLEdBQUcsTUFDeEIsbUVBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLEVBRUU7QUFDRSxPQUFLLEVBQUU7QUFDTEMsVUFBTSxFQUFFO0FBREgsR0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzREFMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTVIsZUFBZSxDQUFDUyxHQUFoQixDQUFxQkgsSUFBRCxJQUFVRCxrQkFBa0IsQ0FBQ0MsSUFBRCxDQUFoRCxDQUFOLENBTkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNEQVBGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFNSCxlQUFlLENBQUNNLEdBQWhCLENBQXFCSCxJQUFELElBQVVELGtCQUFrQixDQUFDQyxJQUFELENBQWhELENBQU4sQ0FSRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBVEYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU1ILGVBQWUsQ0FBQ00sR0FBaEIsQ0FBcUJILElBQUQsSUFBVUQsa0JBQWtCLENBQUNDLElBQUQsQ0FBaEQsQ0FBTixDQVZGLENBRkYsQ0FERjs7QUFrQmVDLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbGFuZGluZy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZFRpdGxlIGZyb20gXCJ+L2NvbXBvbmVudHMvaGVhZC9IZWFkVGl0bGVcIjtcbmltcG9ydCBCb3hTaGFkb3dDYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvY2FyZC9Cb3hTaGFkb3dDYXJkXCI7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5cbmludGVyZmFjZSBQYWNrYWdlVHlwZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBwb3B1bGFyUGFja2FnZXM6IFBhY2thZ2VUeXBlW10gPSBbXG4gIHtcbiAgICBuYW1lOiBcImZvb1wiLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJiYXJcIixcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiYmF6XCIsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImhvZ2VcIixcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZnVnYVwiLFxuICAgIGlkOiAxLFxuICB9LFxuXTtcblxuY29uc3QgcGFja2FnZVN1YmplY3RzOiBQYWNrYWdlVHlwZVtdID0gW1xuICB7XG4gICAgbmFtZTogXCLpq5jmoKHmlbDlraZcIixcbiAgICBpZDogMSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuS4reWtpuaVsOWtplwiLFxuICAgIGlkOiAxLFxuICAgIGRpc2FibGVkOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCLoi7Hoqp5cIixcbiAgICBpZDogMSxcbiAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi5Lit5a2m56S+5LyaXCIsXG4gICAgaWQ6IDEsXG4gICAgZGlzYWJsZWQ6IHRydWUsXG4gIH0sXG5dO1xuXG5jb25zdCBMYW5kaW5nUGFja2FnZUNhcmQgPSAoZGF0YTogUGFja2FnZVR5cGUpID0+IChcbiAgPEJveFNoYWRvd0NhcmQgY2xOYW1lPVwibGFuZGluZy1wYWNrYWdlLWNhcmRcIiBkaXNhYmxlZD17ZGF0YS5kaXNhYmxlZH0+XG4gICAge2RhdGEubmFtZX1cbiAgPC9Cb3hTaGFkb3dDYXJkPlxuKTtcblxuY29uc3QgTGFuZGluZzogTmV4dFBhZ2UgPSAoKSA9PiAoXG4gIDw+XG4gICAgPEhlYWRUaXRsZT7jga/jgZjjgoHjgos8L0hlYWRUaXRsZT5cbiAgICA8c2VjdGlvblxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgbWFyZ2luOiBcIjAgNCUgMFwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8aDI+5Lq65rCX44Gu44OR44OD44Kx44O844K4PC9oMj5cbiAgICAgIDxkaXY+e3BvcHVsYXJQYWNrYWdlcy5tYXAoKGRhdGEpID0+IExhbmRpbmdQYWNrYWdlQ2FyZChkYXRhKSl9PC9kaXY+XG4gICAgICA8aDI+5pWZ56eR5Yil44OR44OD44Kx44O844K4PC9oMj5cbiAgICAgIDxkaXY+e3BhY2thZ2VTdWJqZWN0cy5tYXAoKGRhdGEpID0+IExhbmRpbmdQYWNrYWdlQ2FyZChkYXRhKSl9PC9kaXY+XG4gICAgICA8aDI+5ZWP6aGM6ZuG44KS5L2c44KLPC9oMj5cbiAgICAgIDxkaXY+e3BhY2thZ2VTdWJqZWN0cy5tYXAoKGRhdGEpID0+IExhbmRpbmdQYWNrYWdlQ2FyZChkYXRhKSl9PC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/landing.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });