webpackHotUpdate("static/development/pages/name.js",{

/***/ "./pages/name.js":
/*!***********************!*\
  !*** ./pages/name.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Name; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Utils */ "./util/Utils.js");
var _jsxFileName = "/Users/dlogsdon/GitHub/standup/pages/name.js";


var style = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "\n        @import url('https://fonts.googleapis.com/css?family=Bungee&display=swap');\n\n        body {\n            background-color: #2f2b2b;\n            color: white;\n            font-family: 'Bungee', cursive;\n            height: 100vh;\n            padding: 0;\n            margin: 0;\n        }\n        .name {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            font-size: 24px;\n        }\n        .winner {\n            color: #65bafb;\n        }\n    ");
function Name() {
  var winner = _util_Utils__WEBPACK_IMPORTED_MODULE_1__["default"].names[0];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Sorry, that doesn't work right now."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Let's just say ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "winner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, winner.value), " is the winner."), style);
}

/***/ })

})
//# sourceMappingURL=name.js.1217740d659787afe2da.hot-update.js.map