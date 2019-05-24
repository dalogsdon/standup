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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/Utils */ "./util/Utils.js");





var _jsxFileName = "/Users/dlogsdon/GitHub/standup/pages/name.js";


var style = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "\n        @import url('https://fonts.googleapis.com/css?family=Bungee&display=swap');\n\n        body {\n            background-color: #2f2b2b;\n            color: white;\n            font-family: 'Bungee', cursive;\n            height: 100vh;\n            padding: 0;\n            margin: 0;\n        }\n        .name {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            font-size: 24px;\n        }\n        .winner {\n            color: #95fb65;\n        }\n    ");

var Name =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Name, _React$Component);

  function Name() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Name);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Name).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Name, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      _util_Utils__WEBPACK_IMPORTED_MODULE_6__["default"].loadVoices();
      this.winner = _util_Utils__WEBPACK_IMPORTED_MODULE_6__["default"].names[0];
      setTimeout(function () {
        _util_Utils__WEBPACK_IMPORTED_MODULE_6__["default"].say(_this.winner + ' is the winner.');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var winner = this.winner || '';
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Sorry, that doesn't work right now."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Let's just say ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "winner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, this.winner.value), " is the winner."), style);
    }
  }]);

  return Name;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=name.js.5a98d221df1c5faa66bc.hot-update.js.map