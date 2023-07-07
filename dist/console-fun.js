"use strict";
var unfunLog = console.log;
console.log = function (message) {
    var phase = 0;
    setInterval(function () {
        console.clear();
        unfunLog("%c ".concat(message), phase++ % 2
            ? 'font-size:3rem;background:#ff3ac6;color:#5fa41c;'
            : 'font-size:3rem;background:#009b00;color:#ff1a00;');
    }, 100);
};
