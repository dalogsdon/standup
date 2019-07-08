webpackHotUpdate("static/development/pages/grid.js",{

/***/ "./util/Utils.js":
/*!***********************!*\
  !*** ./util/Utils.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);


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

var engineers = shuffle([{
  value: 'Asim',
  spoken: 'Ahhsim, the rebrander'
}, {
  value: 'Bradley',
  spoken: 'Bradley'
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
  value: 'Gregory'
}, {
  value: 'Jesse',
  spoken: 'Lorenzo'
}, {
  value: 'Jingjing'
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
  value: 'Ytalo'
}].map(function (s) {
  return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(s, {
    isSupport: true
  });
}));
var support = shuffle([{
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
}].map(function (s) {
  return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(s, {
    isSupport: true
  });
}));

function uniqueName(name, index, self) {
  return self.map(function (n) {
    return n.value;
  }).indexOf(name.value) === index;
}

var allNames = engineers.concat(support).filter(uniqueName);
var Utils = {
  getNames: function getNames() {
    return allNames;
  },
  getRandomName: function getRandomName() {
    var dayOfWeek = new Date().getDay();
    var names = dayOfWeek === 2 || dayOfWeek === 4 ? support : allNames;
    var i = Math.floor(Math.random() * names.length);
    return names[i];
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
//# sourceMappingURL=grid.js.5cc762d118b38aa6004e.hot-update.js.map