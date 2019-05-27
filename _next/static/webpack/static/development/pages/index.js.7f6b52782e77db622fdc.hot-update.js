webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PrefixedLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PrefixedLink */ "./components/PrefixedLink.js");
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/Utils */ "./util/Utils.js");
/* harmony import */ var _styles_navbar_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/navbar.scss */ "./styles/navbar.scss");
/* harmony import */ var _styles_navbar_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_scss__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/dlogsdon/GitHub/standup/components/Navbar.js";





var Navbar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navbar, _React$Component);

  function Navbar() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _util_Utils__WEBPACK_IMPORTED_MODULE_7__["default"].loadVoices();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "navbar_main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://go.indeed.com/prime-standup-zoom",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "zoom"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "title",
        onClick: function onClick() {
          return _util_Utils__WEBPACK_IMPORTED_MODULE_7__["default"].say('Time for standup');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "time for standup"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://go.indeed.com/prime-kanban-overall",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "kanban")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "navbar_links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PrefixedLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
        href: "/name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Pick a Card!")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PrefixedLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
        href: "/name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Spin the Wheel!")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PrefixedLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
        href: "/name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Plinko!")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PrefixedLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
        href: "/name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Plinko!"))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.7f6b52782e77db622fdc.hot-update.js.map