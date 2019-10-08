let easeOutSine = function (t, b, c, d) {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
};


export let crossToAnkle = function crossToAnkle() {
  let crossWrapper: HTMLElement | null = document.querySelector('.animationIconDescription');
  let ankle2: HTMLElement | null = document.querySelector('.angle2');

  let rotate2 = () => {
    let animation_id;
    let i = 30;
    let j = 30;

    if (ankle2 && crossWrapper) {
      let rotate2Interval = () => {
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
          animation_id = window.requestAnimationFrame(rotate2Interval);
        }
      }
      rotate2Interval();
    }
  }


  let k = 1;
  let animation_id;
  if (ankle2 && crossWrapper) {
    let rotateInterval = () => {
      if (ankle2 && crossWrapper) {

        crossWrapper.style.transform = "rotate(" + easeOutSine(k, 0, 45, 20) + "deg)";
        k++;
        if (k > 20) {
          window.cancelAnimationFrame(animation_id);
          crossWrapper.classList.add("animationIconDescription_DONE");
          rotate2();
        }
        else {
          animation_id = window.requestAnimationFrame(rotateInterval);
        }
      }
    }
    rotateInterval();

  }

}

export let showGraphicMenu = function showGraphicMenu() {
  let GraphicWrapper = document.querySelector(".imageDescriptionMenuWrapper");

}
