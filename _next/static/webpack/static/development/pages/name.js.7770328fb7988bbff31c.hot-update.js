webpackHotUpdate("static/development/pages/name.js",{

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
      }, "Plinko!"))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PageLayout */ "./components/PageLayout.js");
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/Utils */ "./util/Utils.js");
/* harmony import */ var _styles_name_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/name.scss */ "./styles/name.scss");
/* harmony import */ var _styles_name_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_name_scss__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/dlogsdon/GitHub/standup/pages/name.js";





var Name =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Name, _React$Component);

  function Name() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Name);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Name)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      winner: _util_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].getRandomName()
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onKeypress", function () {
      var _this$state$winner = _this.state.winner,
          spoken = _this$state$winner.spoken,
          value = _this$state$winner.value;
      _util_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].say((spoken || value) + ' is the winner.');
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Name, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _util_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].loadVoices();
      window.addEventListener('keypress', this.onKeypress);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keypress', this.onKeypress);
    }
  }, {
    key: "render",
    value: function render() {
      var winner = this.state.winner;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_PageLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "page_content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Sorry, that doesn't work right now."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Let's just say ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "winner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, winner.value), " is the winner.")));
    }
  }]);

  return Name;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=name.js.7770328fb7988bbff31c.hot-update.js.map