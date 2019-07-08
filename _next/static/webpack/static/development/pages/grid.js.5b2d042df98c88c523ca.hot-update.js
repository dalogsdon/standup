webpackHotUpdate("static/development/pages/grid.js",{

/***/ "./pages/grid.js":
/*!***********************!*\
  !*** ./pages/grid.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../util/Utils */ "./util/Utils.js");
/* harmony import */ var _styles_grid_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/grid.scss */ "./styles/grid.scss");
/* harmony import */ var _styles_grid_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_grid_scss__WEBPACK_IMPORTED_MODULE_16__);














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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__["default"])(Grid, _React$Component);

  function Grid() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Grid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Grid)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "state", {
      highlight: {},
      names: _util_Utils__WEBPACK_IMPORTED_MODULE_15__["default"].getNames(),
      stopping: false,
      winner: {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "colCount", Math.ceil(Math.sqrt(_this.state.names.length)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "nameIdCounter", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "nameIds", new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_6___default.a());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "_getNameId", function () {
      return ++_this.nameIdCounter;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "declareWinner", function (nameId, isEngineer) {
      _this.incrementToFilteredWinner(nameId, isEngineer).then(function () {
        var winner = _this.state.names[_this.state.highlight[nameId]];
        _util_Utils__WEBPACK_IMPORTED_MODULE_15__["default"].say("".concat(winner.spoken || winner.value, " is the winner!"));

        _this.setState(function (state) {
          return {
            winner: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, state.winner, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])({}, nameId, winner))
          };
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "manuallyDeclareWinner", function (winner, nameId, highlight) {
      return function () {
        if (_this.state.winner[nameId]) {
          _util_Utils__WEBPACK_IMPORTED_MODULE_15__["default"].say("Just kidding, ".concat(winner.spoken || winner.value, " is actually the winner!"));

          _this.setState(function (state) {
            return {
              winner: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, state.winner, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])({}, nameId, winner)),
              highlight: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, state.highlight, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])({}, nameId, highlight))
            };
          });
        }
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "incrementToFilteredWinner", function (nameId, isEngineer) {
      if (isEngineer !== undefined) {
        return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) {
          resolve();
        });
      }

      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a.resolve();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "pickName", function (timeout, isEngineer) {
      var nameId = _this._getNameId();

      _this.setState(function (state) {
        return {
          highlight: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, state.highlight, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])({}, nameId, 0))
        };
      }, function () {
        return _this._pickNameRecur(timeout, isEngineer, nameId);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "_pickNameRecur", function (timeout, isEngineer, nameId) {
      if (timeout > 400) {
        _this.nameIds.delete(nameId);

        if (_this.nameIds.size === 0) {
          _this.declareWinner(nameId, isEngineer);
        }
      } else {
        window.setTimeout(function () {
          var c = _this.state.highlight[nameId];
          var dir = [c - _this.colCount, c - 1, c + _this.colCount, c + 1];
          var randomDir = wrapDir(dir[Math.floor(Math.random() * dir.length)], _this.state.names.length);
          var nextTimeout = _this.state.stopping ? timeout * 1.05 : timeout;

          _this.setState({
            highlight: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, _this.state.highlight, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])({}, nameId, randomDir))
          }, function () {
            return _this._pickNameRecur(nextTimeout, isEngineer, nameId);
          });
        }, timeout);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "stop", function () {
      _this.setState({
        stopping: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "getNameAttrs", function (name, idx) {
      var attrs = {};

      for (var _i = 0, _Object$entries = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default()(_this.state.highlight); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Object$entries[_i], 2),
            nameId = _Object$entries$_i[0],
            _highlighted = _Object$entries$_i[1];

        if (idx === _highlighted) {
          attrs["data-highlight-".concat(nameId)] = true;

          if (winner) {
            attrs['data-winner'] = true;
          }
        }
      }

      for (var _i2 = 0, _Object$entries2 = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default()(_this.state.winner); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Object$entries2[_i2], 2),
            nameId = _Object$entries2$_i[0],
            _winner = _Object$entries2$_i[1];

        if (idx === highlighted) {
          attrs["data-highlight-".concat(nameId)] = true;

          if (_winner) {
            attrs['data-winner'] = true;
          }
        }
      }

      return attrs;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "getWinnerButtonText", function () {
      var nameIds = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.winner).sort();

      return nameIds.map(function (nameId) {
        return _this.state.winner[nameId].value;
      }).join(' and ') + ' are the winners!';
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(Grid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _util_Utils__WEBPACK_IMPORTED_MODULE_15__["default"].loadVoices();
      this.pickName(50);
      this.pickName(50);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          names = _this$state.names,
          stopping = _this$state.stopping,
          winner = _this$state.winner;
      var style = {
        width: 100 / this.colCount + '%'
      };
      var numWinners = !_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(winner).length;
      var stopText = 'Stop!';

      if (numWinners === 0 && stopping) {
        stopText = 'Stopping!';
      } else if (numWinners > 0) {
        stopText = this.getWinnerButtonText();
      }

      var classname = "grid ".concat(stopping ? 'stopping' : '');
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: classname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, names.map(function (n, i) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "name-wrapper",
          key: n.value,
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          className: "name"
        }, _this2.getNameAttrs(n, i), {
          onClick: _this2.manuallyDeclareWinner(n, 1, i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }), n.value));
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "stop-btn-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "stop-btn",
        onClick: this.stop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, stopText)));
    }
  }]);

  return Grid;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ })

})
//# sourceMappingURL=grid.js.5b2d042df98c88c523ca.hot-update.js.map