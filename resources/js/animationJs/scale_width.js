var easeOutQuart = function (t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
};
export function scale_widthUP(store) {
    store.addButtonActive = true;
    var animation_id;
    var element = document.querySelector('.formNewGraphic');
    var button = document.querySelector('.addGraphicButton');
    var buttonWidth;
    if (button) {
        buttonWidth = window.getComputedStyle(button).width;
    }
    var maxElementWidth = parseInt(buttonWidth.slice(0, -2)) * 0.7;
    var k = 1;
    var interval1 = function () {
        if (element) {
            element.style.width = easeOutQuart(k, 1, maxElementWidth, 30) + "px";
            k++;
            if (k > 30) {
                window.cancelAnimationFrame(animation_id);
            }
            else {
                animation_id = window.requestAnimationFrame(interval1);
            }
        }
    };
    interval1();
}
export function spin_the_crossUP() {
    var cross = document.querySelector(".plusItem");
    if (cross) {
        cross.style.transform = 'rotate(' + 0 + 'deg)';
    }
    var animation_id2;
    var i = 1;
    var interval2 = function () {
        if (cross) {
            cross.style.transform = 'rotate(' + easeOutQuart(i, 0, 225, 30) + 'deg)';
            i++;
            if (i > 30) {
                window.cancelAnimationFrame(animation_id2);
            }
            else {
                animation_id2 = window.requestAnimationFrame(interval2);
            }
        }
    };
    interval2();
}
export function scale_widthDown(it) {
    var animation_id3;
    var element = document.querySelector('.formNewGraphic');
    var button = document.querySelector('.addGraphicButton');
    var buttonWidth;
    var maxElementWidth;
    if (button) {
        buttonWidth = window.getComputedStyle(button).width;
    }
    if (buttonWidth) {
        maxElementWidth = parseInt(buttonWidth.slice(0, -2)) * 0.7;
    }
    var k = 30;
    var interval3 = function () {
        if (element) {
            element.style.width = easeOutQuart(k, 0, maxElementWidth, 30) + "px";
            k--;
            if (k < 0) {
                window.cancelAnimationFrame(animation_id3);
                it.addButtonActive = false;
            }
            else {
                animation_id3 = window.requestAnimationFrame(interval3);
            }
        }
    };
    interval3();
}
export function spin_the_crossDown() {
    var cross = document.querySelector(".plusItem");
    var animation_id4;
    var i = 30;
    var interval4 = function () {
        if (cross) {
            cross.style.transform = 'rotate(' + easeOutQuart(i, 0, 225, 30) + 'deg)';
            i--;
            if (i < 0) {
                window.cancelAnimationFrame(animation_id4);
            }
            else {
                animation_id4 = window.requestAnimationFrame(interval4);
            }
        }
    };
    interval4();
}
