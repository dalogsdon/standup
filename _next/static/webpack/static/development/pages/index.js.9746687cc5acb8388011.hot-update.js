webpackHotUpdate("static/development/pages/index.js",{

/***/ "./util/Utils.js":
/*!***********************!*\
  !*** ./util/Utils.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);



// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
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

var engineers = [{
  value: 'Asim',
  spoken: 'Ahhsim'
}, {
  value: 'Bradley',
  spoken: 'Bradley, the paywall master'
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
  value: 'Luis'
}, {
  value: 'Megan'
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
}];
var support = [{
  value: 'Ali'
}, {
  value: 'Betty'
}, {
  value: 'Jordan'
}, {
  value: 'Karan'
}, {
  value: 'Kelsey'
}, {
  value: 'Mike',
  spoken: 'Mikey'
}, {
  value: 'Mohan'
}, {
  value: 'Nick'
}];

function formatDays(group, days) {
  return group.map(function (g) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(g, {
      days: days
    });
  });
}

var Utils = {
  names: shuffle([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(formatDays(engineers, '135')), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(formatDays(support, '12345')))),
  getRandomName: function getRandomName() {
    var i = Math.floor(Math.random() * this.names.length);
    return this.names[i];
  },
  loadVoices: function loadVoices() {
    window.speechSynthesis.getVoices();
  },
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
//# sourceMappingURL=index.js.9746687cc5acb8388011.hot-update.js.map