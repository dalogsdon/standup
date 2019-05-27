webpackHotUpdate("static/development/pages/index.js",{

/***/ "./util/Utils.js":
/*!***********************!*\
  !*** ./util/Utils.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
}]);
var support = shuffle([{
  value: 'Ali'
}, {
  value: 'Betty'
}, {
  value: 'Jordan'
}, {
  value: 'Joshua'
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
}]);

function uniqueName(name, index, self) {
  return self.map(function (n) {
    return n.value === name.value;
  }).length === 1;
}

var allNames = engineers.concat(support).filter(uniqueName);
var Utils = {
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
//# sourceMappingURL=index.js.01ca6b3a8e3c4dbb8ee9.hot-update.js.map