"use strict";
exports.__esModule = true;
var easeOutQuart = function (t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
};
function scale_widthUP(store) {
    store.addButtonActive = true;
    var element = document.querySelector('.formNewGraphic');
    var button = document.querySelector('.addGraphicButton');
    var buttonWidth = window.getComputedStyle(button).width;
    var maxElementWidth = parseInt(buttonWidth.slice(0, -2)) * 0.7;
    var k = 1;
    var interval1 = setInterval(function () {
        element.style.width = easeOutQuart(k, 1, maxElementWidth, 60) + "px";
        k++;
        if (k > 60) {
            clearInterval(interval1);
        }
    }, 10);
}
exports.scale_widthUP = scale_widthUP;
function spin_the_crossUP() {
    var cross = document.querySelector(".plusItem");
    cross.style.transform = 'rotate(' + 0 + 'deg)';
    var i = 1;
    var interval2 = setInterval(function () {
        cross.style.transform = 'rotate(' + easeOutQuart(i, 0, 225, 60) + 'deg)';
        i++;
        if (i > 60) {
            clearInterval(interval2);
        }
    }, 10);
}
exports.spin_the_crossUP = spin_the_crossUP;
function scale_widthDown(it) {
    var element = document.querySelector('.formNewGraphic');
    var button = document.querySelector('.addGraphicButton');
    var buttonWidth = window.getComputedStyle(button).width;
    var maxElementWidth = parseInt(buttonWidth.slice(0, -2)) * 0.7;
    var k = 60;
    var interval3 = setInterval(function () {
        element.style.width = easeOutQuart(k, 0, maxElementWidth, 60) + "px";
        k--;
        if (k < 0) {
            clearInterval(interval3);
            it.addButtonActive = false;
        }
    }, 10);
}
exports.scale_widthDown = scale_widthDown;
function spin_the_crossDown() {
    var cross = document.querySelector(".plusItem");
    var i = 60;
    var interval4 = setInterval(function () {
        cross.style.transform = 'rotate(' + easeOutQuart(i, 0, 225, 60) + 'deg)';
        i--;
        if (i < 0) {
            clearInterval(interval4);
        }
    }, 10);
}
exports.spin_the_crossDown = spin_the_crossDown;
