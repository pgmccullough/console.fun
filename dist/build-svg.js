"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSvg = void 0;
var buildSvg = function (message) {
    var logLineHt = 48 * 1.45;
    var logHt = logLineHt;
    var logWid = window.innerWidth;
    var msgArr = message.split("");
    var wordsPerLine = Math.floor(logWid / 27);
    if (msgArr.length > wordsPerLine) {
        logHt *= Math.ceil(msgArr.length / wordsPerLine);
        msgArr = msgArr.map(function (msg, i) {
            return (i === 0
                ? "<tspan x='0'>" + msg
                : i % wordsPerLine === 0
                    ? msg + "</tspan><tspan x='0' dy='1.2em'>"
                    : msg);
        });
        msgArr.push("</tspan>");
    }
    var bg = "<svg xmlns=\"http://www.w3.org/2000/svg\">\n    <style>\n      @keyframes bgflash {\n        0% {fill:#ff3ac6;}\n        50% {fill:#009b00;}\n      }\n      @keyframes textflash {\n        0% {fill:#5fa41c;}\n        50% {fill:#ff1a00;}\n      }\n      .background {\n        fill:#5fa41c;\n        font-size:3rem;\n        height: ".concat(logHt, "px;\n        width: ").concat(logWid, "px;\n        animation: 0.25s bgflash infinite step-end;\n      }\n      .text {\n        fill:#5fa41c;\n        font-size:3rem;\n        width: ").concat(logWid, "px;\n        animation: 0.25s textflash infinite step-end;     \n      }\n    </style>\n    <g>\n      <rect x=\"0\" y=\"0\" class=\"background\"></rect>\n      <text x=\"0\" y=\"50\" font-family=\"Verdana\" font-size=\"35\" class=\"text\">").concat(msgArr.join(""), "</text>\n    </g>\n  </svg>");
    return { url: "data:image/svg+xml;base64,".concat(btoa(unescape(encodeURIComponent(bg)))), width: logWid, height: logHt };
};
exports.buildSvg = buildSvg;
