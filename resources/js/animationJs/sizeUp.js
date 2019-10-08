var viewPortProperties = function viewPortProperties() {
    // cross-brower //
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var arrProperties = [w, h];
    return arrProperties;
};
// Easy // 
var easeOutExpo = function (t, b, c, d, x) {
    if (t <= x) {
        return c * Math.sin(t / d / 4 * (Math.PI / 2)) + b;
    }
    if (t > x) {
        return (c + b) * (Math.cos((Math.PI / 2) * ((t - x) / (d - x))));
    }
};
var easeInExpo = function (t, b, c, d) {
    return c * Math.pow(2, 10 * (t / d - 1)) + b;
};
export var sizeUp = function sizeUp(index, store) {
    var viewPort = viewPortProperties();
    if (viewPort[0] < viewPort[1]) {
        // GraphicProfil //
        if (index == 1) {
            document.getElementById('2').style.zIndex = '-1';
            // variables //
            var animation_id_1;
            var sizingElement = document.getElementById(index);
            var positionElement = window.getComputedStyle(sizingElement).top;
            var setStyle_1 = sizingElement.style;
            var widthElement = window.getComputedStyle(sizingElement).width;
            var heightElement = window.getComputedStyle(sizingElement).height;
            // prepare for sizing //
            setStyle_1.top = positionElement;
            setStyle_1.width = widthElement;
            setStyle_1.height = heightElement;
            var endTop_1 = parseInt(setStyle_1.top.slice(0, -2)) + viewPort[1] / 4;
            var endWidth_1 = viewPort[0];
            var endHeight_1 = viewPort[1];
            // sizing // 
            var k_1 = 1;
            var positionInterval_1 = function () {
                setStyle_1.top = easeOutExpo(k_1, parseInt(setStyle_1.top.slice(0, -2)), endTop_1 - parseInt(setStyle_1.top.slice(0, -2)), 22, 16) + 'px';
                setStyle_1.width = easeInExpo(k_1, parseInt(setStyle_1.width.slice(0, -2)), endWidth_1 - parseInt(setStyle_1.width.slice(0, -2)), 22) + 'px';
                setStyle_1.height = easeInExpo(k_1, parseInt(setStyle_1.height.slice(0, -2)), endHeight_1 - parseInt(setStyle_1.height.slice(0, -2)), 22) + 'px';
                k_1++;
                console.log("diała");
                if (k_1 > 22) {
                    window.cancelAnimationFrame(animation_id_1);
                    document.getElementById('1').classList.replace("profileGalery", "activeProfilePage");
                    setTimeout(function () {
                        store.$store.commit("changeVisibleProfileButton1", true);
                        store.$store.commit("changebuttonProfileActive", true);
                        store.$store.commit("changeVisibleProfileButton2", false);
                        store.$store.commit("changeProfileCardActive", 1);
                        setStyle_1.top = null;
                        setStyle_1.bottom = null;
                        setStyle_1.left = null;
                        setStyle_1.right = null;
                        setStyle_1.width = null;
                        setStyle_1.height = null;
                    }, 190);
                    store.$store.commit("changeAnimationStatus", false);
                }
                else {
                    animation_id_1 = window.requestAnimationFrame(positionInterval_1);
                }
            };
            positionInterval_1();
        }
        // GameProfil //
        if (index == 2) {
            document.getElementById('1').style.zIndex = '-1';
            // variables //
            var animation_id_2;
            var sizingElement = document.getElementById(index);
            var positionElement = window.getComputedStyle(sizingElement).bottom;
            var setStyle_2 = sizingElement.style;
            var widthElement = window.getComputedStyle(sizingElement).width;
            var heightElement = window.getComputedStyle(sizingElement).height;
            // prepare for sizing //
            setStyle_2.width = widthElement;
            setStyle_2.height = heightElement;
            setStyle_2.bottom = positionElement;
            var endBottom_1 = parseInt(setStyle_2.bottom.slice(0, -2)) + viewPort[1] / 4;
            var endWidth_2 = viewPort[0];
            var endHeight_2 = viewPort[1];
            // sizing // 
            var k_2 = 1;
            var positionInterval_2 = function () {
                setStyle_2.bottom = easeOutExpo(k_2, parseInt(setStyle_2.bottom.slice(0, -2)), endBottom_1 - parseInt(setStyle_2.bottom.slice(0, -2)), 22, 16) + 'px';
                setStyle_2.width = easeInExpo(k_2, parseInt(setStyle_2.width.slice(0, -2)), endWidth_2 - parseInt(setStyle_2.width.slice(0, -2)), 22) + 'px';
                setStyle_2.height = easeInExpo(k_2, parseInt(setStyle_2.height.slice(0, -2)), endHeight_2 - parseInt(setStyle_2.height.slice(0, -2)), 22) + 'px';
                k_2++;
                if (k_2 > 22) {
                    window.cancelAnimationFrame(animation_id_2);
                    document.getElementById('2').classList.replace("profileGame", "activeProfilePage");
                    setTimeout(function () {
                        store.$store.commit("changeVisibleProfileButton1", false);
                        store.$store.commit("changebuttonProfileActive", true);
                        store.$store.commit("changeVisibleProfileButton2", true);
                        store.$store.commit("changeProfileCardActive", 1);
                        setStyle_2.top = null;
                        setStyle_2.bottom = null;
                        setStyle_2.left = null;
                        setStyle_2.right = null;
                        setStyle_2.width = null;
                        setStyle_2.height = null;
                    }, 190);
                    store.$store.commit("changeAnimationStatus", false);
                }
                else {
                    animation_id_2 = window.requestAnimationFrame(positionInterval_2);
                }
            };
            positionInterval_2();
        }
    }
    if (viewPort[0] >= viewPort[1]) {
        // GraphicProfil //
        if (index == 1) {
            document.getElementById('2').style.zIndex = '-1';
            // variables //
            var animation_id_3;
            var sizingElement = document.getElementById(index);
            var positionElement = window.getComputedStyle(sizingElement).left;
            var setStyle_3 = sizingElement.style;
            var widthElement = window.getComputedStyle(sizingElement).width;
            var heightElement = window.getComputedStyle(sizingElement).height;
            // prepare for sizing //
            setStyle_3.left = positionElement;
            setStyle_3.width = widthElement;
            setStyle_3.height = heightElement;
            var endleft_1 = parseInt(setStyle_3.left.slice(0, -2)) + viewPort[0] / 6;
            var endWidth_3 = viewPort[0];
            var endHeight_3 = viewPort[1];
            // sizing //
            var k_3 = 1;
            var positionInterval_3 = function () {
                setStyle_3.left = easeOutExpo(k_3, parseInt(setStyle_3.left.slice(0, -2)), endleft_1 - parseInt(setStyle_3.left.slice(0, -2)), 22, 16) + 'px';
                setStyle_3.width = easeInExpo(k_3, parseInt(setStyle_3.width.slice(0, -2)), endWidth_3 - parseInt(setStyle_3.width.slice(0, -2)), 22) + 'px';
                setStyle_3.height = easeInExpo(k_3, parseInt(setStyle_3.height.slice(0, -2)), endHeight_3 - parseInt(setStyle_3.height.slice(0, -2)), 22) + 'px';
                k_3++;
                if (k_3 > 22) {
                    window.cancelAnimationFrame(animation_id_3);
                    document.getElementById('1').classList.replace("profileGalery", "activeProfilePage");
                    setTimeout(function () {
                        store.$store.commit("changeVisibleProfileButton1", true);
                        store.$store.commit("changebuttonProfileActive", true);
                        store.$store.commit("changeVisibleProfileButton2", false);
                        store.$store.commit("changeProfileCardActive", 1);
                        setStyle_3.top = null;
                        setStyle_3.bottom = null;
                        setStyle_3.left = null;
                        setStyle_3.right = null;
                        setStyle_3.width = null;
                        setStyle_3.height = null;
                    }, 190);
                    store.$store.commit("changeAnimationStatus", false);
                }
                else {
                    animation_id_3 = window.requestAnimationFrame(positionInterval_3);
                }
            };
            positionInterval_3();
        }
        // GameProfil //
        if (index == 2) {
            document.getElementById('1').style.zIndex = '-1';
            // variables //
            var animation_id_4;
            var sizingElement = document.getElementById(index);
            var positionElement = window.getComputedStyle(sizingElement).right;
            var setStyle_4 = sizingElement.style;
            var widthElement = window.getComputedStyle(sizingElement).width;
            var heightElement = window.getComputedStyle(sizingElement).height;
            // prepare for sizing //
            setStyle_4.right = positionElement;
            setStyle_4.width = widthElement;
            setStyle_4.height = heightElement;
            var endright_1 = parseInt(setStyle_4.right.slice(0, -2)) + viewPort[0] / 6;
            var endWidth_4 = viewPort[0];
            var endHeight_4 = viewPort[1];
            // sizing //
            var k_4 = 1;
            var positionInterval_4 = function () {
                setStyle_4.right = easeOutExpo(k_4, parseInt(setStyle_4.right.slice(0, -2)), endright_1 - parseInt(setStyle_4.right.slice(0, -2)), 22, 16) + 'px';
                setStyle_4.width = easeInExpo(k_4, parseInt(setStyle_4.width.slice(0, -2)), endWidth_4 - parseInt(setStyle_4.width.slice(0, -2)), 22) + 'px';
                setStyle_4.height = easeInExpo(k_4, parseInt(setStyle_4.height.slice(0, -2)), endHeight_4 - parseInt(setStyle_4.height.slice(0, -2)), 22) + 'px';
                k_4++;
                if (k_4 > 22) {
                    window.cancelAnimationFrame(animation_id_4);
                    document.getElementById('2').classList.replace("profileGame", "activeProfilePage");
                    setTimeout(function () {
                        store.$store.commit("changeVisibleProfileButton1", false);
                        store.$store.commit("changebuttonProfileActive", true);
                        store.$store.commit("changeVisibleProfileButton2", true);
                        store.$store.commit("changeProfileCardActive", 1);
                        setStyle_4.top = null;
                        setStyle_4.bottom = null;
                        setStyle_4.left = null;
                        setStyle_4.right = null;
                        setStyle_4.width = null;
                        setStyle_4.height = null;
                    }, 190);
                    store.$store.commit("changeAnimationStatus", false);
                    document.getElementById('2').classList.remove("profileGame");
                }
                else {
                    animation_id_4 = window.requestAnimationFrame(positionInterval_4);
                }
            };
            positionInterval_4();
        }
    }
};
