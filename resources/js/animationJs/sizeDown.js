"use strict";
exports.__esModule = true;
var viewPortProperties = function viewPortProperties() {
    // cross-brower //
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var arrProperties = [w, h];
    return arrProperties;
};
// Easy // 
var easeOutSine = function (t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
};
exports.sizeDown = function sizeDown(index, store) {
    var viewPort = viewPortProperties();
    if (viewPort[0] < viewPort[1]) {
        // GraphicProfil //
        if (index == 1) {
            // variables //
            var sizingElement = document.getElementById(index);
            var positionElement = window.getComputedStyle(sizingElement).top;
            var setStyle_1 = sizingElement.style;
            var widthElement = window.getComputedStyle(sizingElement).width;
            var heightElement = window.getComputedStyle(sizingElement).height;
            var endTop_1;
            var endWidth_1;
            var endHeight_1;
            setStyle_1.top = null;
            setStyle_1.bottom = null;
            setStyle_1.left = null;
            setStyle_1.right = null;
            // aspectRatio
            var aspectRatio = viewPort[0] / viewPort[1];
            if (aspectRatio <= 1 / 2) {
                endTop_1 = ((viewPort[1] / 2) - (viewPort[0] / 2)) / 4;
                endWidth_1 = viewPort[0] / 2;
                endHeight_1 = viewPort[0] / 2;
            }
            if (aspectRatio > 1 / 2 && aspectRatio < 1) {
                endTop_1 = viewPort[1] / 8;
                endWidth_1 = viewPort[1] / 4;
                endHeight_1 = viewPort[1] / 4;
            }
            // prepare for sizing //
            setStyle_1.top = positionElement;
            setStyle_1.width = widthElement;
            setStyle_1.height = heightElement;
            document.getElementById('1').classList.replace("activeProfilePage", "profileGalery");
            // sizing // 
            var k_1 = 80;
            var i_1 = 1;
            var positionInterval_1 = setInterval(function () {
                setStyle_1.top = easeOutSine(i_1, 0, endTop_1, 80) + 'px';
                setStyle_1.width = easeOutSine(k_1, endWidth_1, viewPort[0] - endWidth_1, 80) + 'px';
                setStyle_1.height = easeOutSine(k_1, endHeight_1, viewPort[1] - endHeight_1, 80) + 'px';
                console.log(setStyle_1.width);
                console.log(setStyle_1.height);
                console.log(setStyle_1.right);
                k_1--;
                i_1++;
                if (k_1 == 1) {
                    clearInterval(positionInterval_1);
                    setStyle_1.width = null;
                    setStyle_1.height = null;
                    setStyle_1.top = null;
                    setStyle_1.bottom = null;
                    setStyle_1.left = null;
                    setStyle_1.right = null;
                    document.getElementById('2').style.zIndex = '0';
                    document.getElementById('1').classList.remove("activeProfilePage");
                    document.getElementById('2').classList.remove("deActiveProfilePage");
                    document.getElementById('1').classList.add("profileGalery");
                    store.$store.commit("changeAnimationStatus", false);
                }
            }, 250 / 80);
        }
        // GameProfil //
        if (index == 2) {
            // variables //
            var sizingElement = document.getElementById(index);
            var positionElement = window.getComputedStyle(sizingElement).bottom;
            var setStyle_2 = sizingElement.style;
            var widthElement = window.getComputedStyle(sizingElement).width;
            var heightElement = window.getComputedStyle(sizingElement).height;
            var endBottom_1;
            var endWidth_2;
            var endHeight_2;
            setStyle_2.top = null;
            setStyle_2.bottom = null;
            setStyle_2.left = null;
            setStyle_2.right = null;
            // aspectRatio
            var aspectRatio = viewPort[0] / viewPort[1];
            if (aspectRatio <= 1 / 2) {
                endBottom_1 = ((viewPort[1] / 2) - (viewPort[0] / 2)) / 4;
                endWidth_2 = viewPort[0] / 2;
                endHeight_2 = viewPort[0] / 2;
            }
            if (aspectRatio > 1 / 2 && aspectRatio < 1) {
                endBottom_1 = viewPort[1] / 8;
                endWidth_2 = viewPort[1] / 4;
                endHeight_2 = viewPort[1] / 4;
            }
            // prepare for sizing //
            setStyle_2.width = widthElement;
            setStyle_2.height = heightElement;
            setStyle_2.bottom = positionElement;
            document.getElementById('2').classList.replace("activeProfilePage", "profileGame");
            // sizing // 
            var k_2 = 80;
            var i_2 = 1;
            var positionInterval_2 = setInterval(function () {
                setStyle_2.bottom = easeOutSine(i_2, 0, endBottom_1, 80) + 'px';
                setStyle_2.width = easeOutSine(k_2, endWidth_2, viewPort[0] - endWidth_2, 80) + 'px';
                setStyle_2.height = easeOutSine(k_2, endHeight_2, viewPort[1] - endHeight_2, 80) + 'px';
                console.log(setStyle_2.width);
                console.log(setStyle_2.height);
                console.log(setStyle_2.right);
                k_2--;
                i_2++;
                if (k_2 == 1) {
                    clearInterval(positionInterval_2);
                    setStyle_2.width = null;
                    setStyle_2.height = null;
                    setStyle_2.top = null;
                    setStyle_2.bottom = null;
                    setStyle_2.left = null;
                    setStyle_2.right = null;
                    document.getElementById('1').style.zIndex = '0';
                    document.getElementById('2').classList.remove("activeProfilePage");
                    document.getElementById('1').classList.remove("deActiveProfilePage");
                    store.$store.commit("changeAnimationStatus", false);
                    document.getElementById('2').classList.add("profileGame");
                }
            }, 250 / 80);
        }
    }
    if (viewPort[0] >= viewPort[1]) {
        // GraphicProfil //
        if (index == 1) {
            // variables //
            var sizingElement = document.getElementById(index);
            var positionElement = window.getComputedStyle(sizingElement).left;
            var setStyle_3 = sizingElement.style;
            var widthElement = window.getComputedStyle(sizingElement).width;
            var heightElement = window.getComputedStyle(sizingElement).height;
            var endleft_1;
            var endWidth_3;
            var endHeight_3;
            setStyle_3.top = null;
            setStyle_3.bottom = null;
            setStyle_3.left = null;
            setStyle_3.right = null;
            // aspectRatio
            var aspectRatio = viewPort[0] / viewPort[1];
            if (aspectRatio >= 1 && aspectRatio < 2 / 1) {
                endleft_1 = viewPort[0] / 8;
                endWidth_3 = viewPort[0] / 4;
                endHeight_3 = viewPort[0] / 4;
            }
            if (aspectRatio > 2 / 1) {
                endleft_1 = (((viewPort[0] / 2) - (viewPort[1] / 2)) / 2);
                endWidth_3 = viewPort[1] / 2;
                endHeight_3 = viewPort[1] / 2;
            }
            // prepare for sizing //
            setStyle_3.left = positionElement;
            setStyle_3.width = widthElement;
            setStyle_3.height = heightElement;
            document.getElementById('1').classList.replace("activeProfilePage", "profileGalery");
            // sizing //
            var k_3 = 80;
            var i_3 = 1;
            var positionInterval_3 = setInterval(function () {
                setStyle_3.left = easeOutSine(i_3, 0, endleft_1, 80) + 'px';
                setStyle_3.width = easeOutSine(k_3, endWidth_3, viewPort[0] - endWidth_3, 80) + 'px';
                setStyle_3.height = easeOutSine(k_3, endHeight_3, viewPort[1] - endHeight_3, 80) + 'px';
                k_3--;
                i_3++;
                if (k_3 == 1) {
                    clearInterval(positionInterval_3);
                    setStyle_3.width = null;
                    setStyle_3.height = null;
                    setStyle_3.top = null;
                    setStyle_3.bottom = null;
                    setStyle_3.left = null;
                    setStyle_3.right = null;
                    document.getElementById('2').style.zIndex = '0';
                    store.$store.commit("changeAnimationStatus", false);
                }
            }, 250 / 80);
        }
        // GameProfil //
        if (index == 2) {
            // variables //
            var sizingElement = document.getElementById(index);
            var positionElement = window.getComputedStyle(sizingElement).right;
            var setStyle_4 = sizingElement.style;
            var widthElement = window.getComputedStyle(sizingElement).width;
            var heightElement = window.getComputedStyle(sizingElement).height;
            var endRight_1;
            var endWidth_4;
            var endHeight_4;
            setStyle_4.top = null;
            setStyle_4.bottom = null;
            setStyle_4.left = null;
            setStyle_4.right = null;
            // aspectRatio
            var aspectRatio = viewPort[0] / viewPort[1];
            if (aspectRatio >= 1 && aspectRatio < 2 / 1) {
                endRight_1 = viewPort[0] / 8;
                endWidth_4 = viewPort[0] / 4;
                endHeight_4 = viewPort[0] / 4;
            }
            if (aspectRatio > 2 / 1) {
                endRight_1 = (((viewPort[0] / 2) - (viewPort[1] / 2)) / 2);
                endWidth_4 = viewPort[1] / 2;
                endHeight_4 = viewPort[1] / 2;
            }
            // prepare for sizing //
            setStyle_4.right = positionElement;
            setStyle_4.width = widthElement;
            setStyle_4.height = heightElement;
            document.getElementById('2').classList.replace("activeProfilePage", "profileGame");
            // sizing //
            var k_4 = 80;
            var i_4 = 1;
            var positionInterval_4 = setInterval(function () {
                setStyle_4.right = easeOutSine(i_4, 0, endRight_1, 80) + 'px';
                setStyle_4.width = easeOutSine(k_4, endWidth_4, viewPort[0] - endWidth_4, 80) + 'px';
                setStyle_4.height = easeOutSine(k_4, endHeight_4, viewPort[1] - endHeight_4, 80) + 'px';
                console.log(setStyle_4.width);
                console.log(setStyle_4.height);
                console.log("RIGHT " + setStyle_4.right);
                k_4--;
                i_4++;
                if (k_4 == 1) {
                    clearInterval(positionInterval_4);
                    setStyle_4.width = null;
                    setStyle_4.height = null;
                    setStyle_4.top = null;
                    setStyle_4.bottom = null;
                    setStyle_4.left = null;
                    setStyle_4.right = null;
                    document.getElementById('1').style.zIndex = '0';
                    store.$store.commit("changeAnimationStatus", false);
                }
            }, 250 / 80);
        }
    }
};
