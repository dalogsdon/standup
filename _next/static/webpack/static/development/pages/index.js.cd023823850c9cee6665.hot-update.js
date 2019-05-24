webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Utils */ "./util/Utils.js");
var _jsxFileName = "/Users/dlogsdon/GitHub/standup/pages/index.js";



var style = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "\n        @import url('https://fonts.googleapis.com/css?family=Bungee&display=swap');\n\n        body {\n            background-color: black;\n            color: white;\n            font-family: 'Bungee', cursive;\n            height: 100vh;\n            padding: 0;\n            margin: 0;\n        }\n        a {\n            color: white;\n            text-decoration: none;\n        }\n        a:hover {\n            color: #65bafb;\n        }\n        p {\n            position: relative;\n        }\n        .standup-home {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            position: relative;\n        }\n        .side {\n            display: flex;\n            flex-direction: column;\n            white-space: nowrap;\n        }\n        .left-side {\n            text-align: right;\n            position: absolute;\n            right: 100%;\n            top: 28%;\n            font-size: 24px;\n        }\n        .right-side {\n            text-align: left;\n            position: absolute;\n            left: 100%;\n            top: 24%;\n            font-size: 24px;\n        }\n        .title {\n            font-size: 70px;\n            text-align: center;\n            padding: 0 1em;\n            display: flex;\n            flex-direction: column;\n        }\n        .bell {\n            cursor: pointer;\n            text-shadow: 0 0 0 white;\n            color: transparent;\n        }\n    ");

function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "standup-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "side left-side",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://go.indeed.com/prime-standup-zoom",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Standup Zoom"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://go.indeed.com/prime-kanban-overall",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Kanban Overall")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "time"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "for"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "standup"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bell",
    role: "img",
    onClick: function onClick() {
      return _util_Utils__WEBPACK_IMPORTED_MODULE_2__["default"].say('Time for standup');
    },
    "aria-label": "Time for standup!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "\uD83D\uDD14"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "side right-side",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cards",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Pick a Card!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/wheel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Spin the Wheel!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/plinko",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Plinko!")))), style);
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./util/Utils.js":
/*!***********************!*\
  !*** ./util/Utils.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// voice
window.speechSynthesis.getVoices(); // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm

function shuffle(a) {
  var j, x, i;

  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }

  return a;
}

var Utils = {
  names: shuffle([{
    value: 'Ali'
  }, {
    value: 'Asim',
    spoken: 'Ahhsim'
  }, {
    value: 'Betty'
  }, {
    value: 'Bradley'
  }, {
    value: 'Bryan'
  }, {
    value: 'Chris'
  }, {
    value: 'Drew',
    spoken: 'Drew, my humble creator,'
  }, {
    value: 'Dom'
  }, {
    value: 'Gaurav',
    spoken: 'G'
  }, {
    value: 'Gregory'
  }, {
    value: 'Jesse',
    spoken: 'Lorenzo'
  }, {
    value: 'John'
  }, {
    value: 'Jordan'
  }, //{ value: 'Karan' },
  {
    value: 'Kelsey'
  }, {
    value: 'Luis'
  }, {
    value: 'Megan'
  }, {
    value: 'Mike',
    spoken: 'Mikey'
  }, {
    value: 'Mohan'
  }, {
    value: 'Nick'
  }, {
    value: 'Rich'
  }, {
    value: 'Tyler'
  }, {
    value: 'Xiaojun'
  }, {
    value: 'Ytalo'
  }]),
  say: function say(msgTxt) {
    window.speechSynthesis.cancel();
    var msg = new SpeechSynthesisUtterance(msgTxt);
    var voices = window.speechSynthesis.getVoices().filter(function (v) {
      return v.lang === 'en-GB' && v.name.indexOf('Male') > -1;
    });
    msg.voice = voices[0];
    window.speechSynthesis.speak(msg);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Utils);

/***/ })

})
//# sourceMappingURL=index.js.cd023823850c9cee6665.hot-update.js.map