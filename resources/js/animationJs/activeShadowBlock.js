var easeOutQuart = function (t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
};
export var activeShadowBlock = function activeShadowBlock(element) {
    var k = 1;
    var animation_id;
    var shadowInterval = function () {
        element.style.boxShadow = "1px 1px 15px rgba(0, 0, 0, " + easeOutQuart(k, 0, 0.1, 60) + ")";
        k++;
        if (k > 60) {
            window.cancelAnimationFrame(animation_id);
        }
        else {
            window.requestAnimationFrame(shadowInterval);
        }
    };
};
export var deActiveShadowBlock = function activeShadowBlock(element) {
    var k = 60;
    var animation_id;
    var shadowInterval = function () {
        element.style.boxShadow = "1px 1px 15px rgba(0, 0, 0, " + easeOutQuart(k, 0, 0.1, 60) + ")";
        k--;
        if (k < 0) {
            window.cancelAnimationFrame(animation_id);
        }
        else {
            window.requestAnimationFrame(shadowInterval);
        }
    };
    shadowInterval();
};
