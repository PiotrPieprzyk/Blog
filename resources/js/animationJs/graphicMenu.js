var easeOutSine = function (t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
};
export var crossToAnkle = function crossToAnkle() {
    var crossWrapper = document.querySelector('.animationIconDescription');
    var ankle2 = document.querySelector('.angle2');
    var rotate2 = function () {
        var animation_id;
        var i = 30;
        var j = 30;
        if (ankle2 && crossWrapper) {
            var rotate2Interval_1 = function () {
                if (ankle2) {
                    ankle2.style.transform = "rotate(0) scale(" + easeOutSine(i, -1, 2, 30) + ") translate(" + easeOutSine(j, 0, 5, 30) + "px, " + easeOutSine(j, 0, 5, 30) + "px) ";
                }
                i--;
                j--;
                if (i < 1) {
                    window.cancelAnimationFrame(animation_id);
                    if (ankle2 && crossWrapper) {
                        ankle2.classList.add("angle2_DONE");
                        ankle2.style.transform = '';
                        crossWrapper.style.transform = '';
                    }
                }
                else {
                    animation_id = window.requestAnimationFrame(rotate2Interval_1);
                }
            };
            rotate2Interval_1();
        }
    };
    var k = 1;
    var animation_id;
    if (ankle2 && crossWrapper) {
        var rotateInterval_1 = function () {
            if (ankle2 && crossWrapper) {
                crossWrapper.style.transform = "rotate(" + easeOutSine(k, 0, 45, 20) + "deg)";
                k++;
                if (k > 20) {
                    window.cancelAnimationFrame(animation_id);
                    crossWrapper.classList.add("animationIconDescription_DONE");
                    rotate2();
                }
                else {
                    animation_id = window.requestAnimationFrame(rotateInterval_1);
                }
            }
        };
        rotateInterval_1();
    }
};
export var showGraphicMenu = function showGraphicMenu() {
    var GraphicWrapper = document.querySelector(".imageDescriptionMenuWrapper");
};
