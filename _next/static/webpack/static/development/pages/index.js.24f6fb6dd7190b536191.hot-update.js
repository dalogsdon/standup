webpackHotUpdate("static/development/pages/index.js",{

/***/ "./util/Utils.js":
/*!***********************!*\
  !*** ./util/Utils.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// voice
// window.speechSynthesis.getVoices();
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
    window.speechSynthesis.getVoices();
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
//# sourceMappingURL=index.js.24f6fb6dd7190b536191.hot-update.js.map