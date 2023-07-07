"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // dist/build-svg.js
  var require_build_svg = __commonJS({
    "dist/build-svg.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.buildSvg = void 0;
      var buildSvg = function(message) {
        var logLineHt = 48 * 1.45;
        var logHt = logLineHt;
        var logWid = window.innerWidth * 1.25;
        var msgArr = message.split("");
        var wordsPerLine = Math.floor(logWid / 26);
        if (msgArr.length > wordsPerLine) {
          logHt *= Math.ceil(msgArr.length / wordsPerLine);
          msgArr = msgArr.map(function(msg, i) {
            return i === 0 ? "<tspan x='0'>" + msg : i % wordsPerLine === 0 ? msg + "</tspan><tspan x='0' dy='1.2em'>" : msg;
          });
          msgArr.push("</tspan>");
        }
        var bg = '<svg xmlns="http://www.w3.org/2000/svg">\n    <style>\n      @keyframes bgflash {\n        0% {fill:#ff3ac6;}\n        50% {fill:#009b00;}\n      }\n      @keyframes textflash {\n        0% {fill:#5fa41c;}\n        50% {fill:#ff1a00;}\n      }\n      .background {\n        fill:#5fa41c;\n        font-size:3rem;\n        height: '.concat(logHt, "px;\n        width: ").concat(logWid * 1.075, "px;\n        animation: 0.25s bgflash infinite step-end;\n      }\n      .text {\n        fill:#5fa41c;\n        font-size:3rem;\n        width: ").concat(logWid, 'px;\n        animation: 0.25s textflash infinite step-end;     \n      }\n    </style>\n    <g>\n      <rect x="0" y="0" class="background"></rect>\n      <text x="0" y="50" font-family="Verdana" font-size="35" class="text">').concat(msgArr.join(""), "</text>\n    </g>\n  </svg>");
        return { url: "data:image/svg+xml;base64,".concat(btoa(bg)), width: logHt, height: logWid };
      };
      exports.buildSvg = buildSvg;
    }
  });

  // dist/console-fun.js
  var require_console_fun = __commonJS({
    "dist/console-fun.js"(exports) {
      Object.defineProperty(exports, "__esModule", { value: true });
      var build_svg_1 = require_build_svg();
      var cl = console.log;
      console.log = function(message) {
        var _a = (0, build_svg_1.buildSvg)(message), url = _a.url, width = _a.width, height = _a.height;
        cl("%c ", "background-image: url(".concat(url, ");\n      padding-top: ").concat(width, "px;\n      padding-left: ").concat(height * 1.075, "px;"));
      };
    }
  });
  require_console_fun();
})();
