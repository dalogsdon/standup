webpackHotUpdate("static/development/pages/grid.js",{

/***/ "./pages/grid.js":
/*!***********************!*\
  !*** ./pages/grid.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/Utils */ "./util/Utils.js");
/* harmony import */ var _styles_grid_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/grid.scss */ "./styles/grid.scss");
/* harmony import */ var _styles_grid_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_grid_scss__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "/Users/dlogsdon/GitHub/standup/pages/grid.js";




function wrapDir(i, length) {
  var negative = i < 0 ? -1 : 1;
  var mod = negative * (i % length);

  if (mod < 0) {
    return length - mod;
  }

  return mod;
}

var Grid =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Grid, _React$Component);

  function Grid() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Grid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Grid)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      highlight: 0,
      names: _util_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].getNames(),
      stopping: false,
      winner: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "colCount", Math.ceil(Math.sqrt(_this.state.names.length)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "pickNameId", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "pickNameIds", new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "declareWinner", function () {
      var winner = _this.state.names[_this.state.highlight];
      _util_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].say("".concat(winner.spoken || winner.value, " is the winner!"));

      _this.setState({
        winner: winner
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "manuallyDeclareWinner", function (winner, highlight) {
      return function () {
        if (_this.state.winner) {
          _util_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].say("Just kidding, ".concat(winner.spoken || winner.value, " is actually the winner!"));

          _this.setState({
            winner: winner,
            highlight: highlight
          });
        }
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "pickName", function (timeout) {
      _this._pickNameRecur(timeout, ++_this.pickNameId);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_pickNameRecur", function (timeout, pickNameId) {
      if (timeout > 400) {
        _this.pickNameIds.remove(pickNameId);

        if (_this.pickNameIds.isEmpty()) {
          _this.declareWinner();
        }
      } else {
        window.setTimeout(function () {
          var c = _this.state.highlight;
          var dir = [c - _this.colCount, c - 1, c + _this.colCount, c + 1];
          var randomDir = wrapDir(dir[Math.floor(Math.random() * dir.length)], _this.state.names.length);
          var nextTimeout = _this.state.stopping ? timeout * 1.05 : timeout;

          _this.setState({
            highlight: randomDir
          }, function () {
            return _this._pickNameRecur(nextTimeout, pickNameId);
          });
        }, timeout);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "stop", function () {
      _this.setState({
        stopping: true
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Grid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _util_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].loadVoices();
      this.pickName(50);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          names = _this$state.names,
          highlight = _this$state.highlight,
          stopping = _this$state.stopping,
          winner = _this$state.winner;
      var style = {
        width: 100 / this.colCount + '%'
      };
      var stopText = 'Stop!';

      if (!winner && stopping) {
        stopText = 'Stopping!';
      } else if (winner) {
        stopText = winner.value + ' is the winner!';
      }

      var classname = "grid ".concat(stopping ? 'stopping' : '');
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, names.map(function (n, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "name-wrapper",
          key: n.value,
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "name",
          "data-highlight": i === highlight,
          "data-winner": i === highlight && !!winner,
          onClick: _this2.manuallyDeclareWinner(n, i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, n.value));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "stop-btn-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "stop-btn",
        onClick: this.stop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, stopText)));
    }
  }]);

  return Grid;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ })

})
//# sourceMappingURL=grid.js.5b76e45cdb3919e7edab.hot-update.js.map