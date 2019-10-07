"use strict";
exports.__esModule = true;
var easeOutSine = function (t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
};
exports.crossToAnkle = function crossToAnkle() {
    var crossWrapper = document.querySelector('.animationIconDescription');
    var ankle2 = document.querySelector('.angle2');
    var rotate2 = function () {
        var i = 60;
        var j = 60;
        if (ankle2 && crossWrapper) {
            var rotate2Interval_1 = setInterval(function () {
                if (ankle2) {
                    ankle2.style.transform = "rotate(0) scale(" + easeOutSine(i, -1, 2, 60) + ") translate(" + easeOutSine(j, 0, 5, 60) + "px, " + easeOutSine(j, 0, 5, 60) + "px) ";
                }
                i--;
                j--;
                if (i < 1) {
                    clearInterval(rotate2Interval_1);
                    if (ankle2 && crossWrapper) {
                        ankle2.classList.add("angle2_DONE");
                        ankle2.style.transform = '';
                        crossWrapper.style.transform = '';
                    }
                }
            }, 600 / 60);
        }
    };
    var k = 1;
    if (ankle2 && crossWrapper) {
        var rotateInterval_1 = setInterval(function () {
            if (ankle2 && crossWrapper) {
                crossWrapper.style.transform = "rotate(" + easeOutSine(k, 0, 45, 60) + "deg)";
                k++;
                if (k > 60) {
                    clearInterval(rotateInterval_1);
                    crossWrapper.classList.add("animationIconDescription_DONE");
                    rotate2();
                }
            }
        }, 400 / 60);
    }
};
exports.showGraphicMenu = function showGraphicMenu() {
    var GraphicWrapper = document.querySelector(".imageDescriptionMenuWrapper");
};
