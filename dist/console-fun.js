"use strict";
var unfunLog = console.log;
var entries = [];
console.log = function (message) {
    !entries.includes(message) && entries.push(message);
    var phase = 0;
    setInterval(function () {
        console.clear();
        entries.forEach(function (msg) {
            return unfunLog("%c ".concat(msg, " "), phase++ % 2
                ? 'font-size:3rem;background:#ff3ac6;color:#5fa41c;'
                : 'font-size:3rem;background:#009b00;color:#ff1a00;');
        });
    }, 100);
};
