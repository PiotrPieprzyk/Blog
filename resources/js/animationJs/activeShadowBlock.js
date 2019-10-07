"use strict";
exports.__esModule = true;
var easeOutQuart = function (t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
};
exports.activeShadowBlock = function activeShadowBlock(element) {
    var k = 1;
    var shadowInterval = setInterval(function () {
        element.style.boxShadow = "1px 1px 15px rgba(0, 0, 0, " + easeOutQuart(k, 0, 0.1, 60) + ")";
        k++;
        if (k > 60) {
            clearInterval(shadowInterval);
        }
    }, 500 / 60);
};
exports.deActiveShadowBlock = function activeShadowBlock(element) {
    var k = 60;
    var shadowInterval = setInterval(function () {
        element.style.boxShadow = "1px 1px 15px rgba(0, 0, 0, " + easeOutQuart(k, 0, 0.1, 60) + ")";
        k--;
        if (k < 0) {
            clearInterval(shadowInterval);
        }
    }, 500 / 60);
};
