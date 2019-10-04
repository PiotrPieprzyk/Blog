Math.easeOutQuart = function (t, b, c, d) {
  t /= d;
  t--;
  return -c * (t * t * t * t - 1) + b;
};
Math.easeOutSine = function (t, b, c, d) {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
};
Math.easeOutCos = function (t, b, c, d) {
  return c * Math.cos(t / d * (Math.PI)) + b;
};

export let crossToAnkle = function crossToAnkle() {
  let crossWrapper = document.querySelector('.animationIconDescription');
  let ankle2 = document.querySelector('.angle2');
  let rotate2 = () => {
    let i = 60;
    let j = 60;
    let rotate2Interval = setInterval(() => {
      ankle2.style.transform = "rotate(0) scale(" + Math.easeOutSine(i, -1, 2, 60) + ") translate(" + Math.easeOutSine(j, 0, 5, 60) + "px, " + Math.easeOutSine(j, 0, 5, 60) + "px) ";
      i--;
      j--;

      if (i < 1) {
        clearInterval(rotate2Interval);
        ankle2.classList.add("angle2_DONE");
        ankle2.style.transform = null;
        crossWrapper.style.transform = null;
      }
    }, 600 / 60);
  }

  let k = 1;
  let rotateInterval = setInterval(() => {
    crossWrapper.style.transform = "rotate(" + Math.easeOutSine(k, 0, 45, 60) + "deg)";
    k++;
    if (k > 60) {
      clearInterval(rotateInterval);
      crossWrapper.classList.add("animationIconDescription_DONE");
      rotate2();
    }
  }, 200 / 60);

}

export let showGraphicMenu = function showGraphicMenu() {
  let GraphicWrapper = document.querySelector(".imageDescriptionMenuWrapper");

}
