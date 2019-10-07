"use strict";
exports.__esModule = true;
var easeOutQuart = function (t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
};
var easeInExpo = function (t, b, c, d) {
    return c * Math.pow(2, 10 * (t / d - 1)) + b;
};
exports.errorDisappear = function errorDisappear(element) {
    var k = 1;
    var apperInterval = setInterval(function () {
        element.style.top = "-" + easeOutQuart(k, 0, 33, 60) + "px";
        k++;
        if (k > 60) {
            clearInterval(apperInterval);
        }
    }, 500 / 60);
};
exports.errorAppear = function errorAppear(element) {
    var k = 60;
    var apperInterval = setInterval(function () {
        element.style.top = "-" + easeInExpo(k, 0, 33, 60) + "px";
        k--;
        if (k < 0) {
            clearInterval(apperInterval);
        }
    }, 500 / 60);
};
