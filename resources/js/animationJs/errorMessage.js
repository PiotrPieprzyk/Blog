var easeOutQuart = function (t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
};
var easeInExpo = function (t, b, c, d) {
    return c * Math.pow(2, 10 * (t / d - 1)) + b;
};
export var errorDisappear = function errorDisappear(element) {
    var k = 1;
    var animation_id;
    var apperInterval = function () {
        element.style.top = "-" + easeOutQuart(k, 0, 33, 20) + "px";
        k++;
        if (k > 20) {
            window.cancelAnimationFrame(animation_id);
        }
        else {
            animation_id = window.requestAnimationFrame(apperInterval);
        }
    };
    apperInterval();
};
export var errorAppear = function errorAppear(element) {
    var k = 20;
    var animation_id;
    var apperInterval = function () {
        element.style.top = "-" + easeInExpo(k, 0, 33, 20) + "px";
        k--;
        if (k < 0) {
            window.cancelAnimationFrame(animation_id);
        }
        else {
            animation_id = window.requestAnimationFrame(apperInterval);
        }
    };
    apperInterval();
};
