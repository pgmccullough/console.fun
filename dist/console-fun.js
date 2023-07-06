"use strict";
var unfunLog = console.log;
console.log = function (message) {
    var phase = 0;
    setInterval(function () {
        console.clear();
        unfunLog("%c ".concat(message), phase++ % 2
            ? 'font-size: 3rem; background: #222; color: #bada55; margin: 0;'
            : 'font-size: 3rem; background: red; color: #fff; margin: 0;');
    }, 100);
};
