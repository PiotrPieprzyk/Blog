let easeOutSine = function (t, b, c, d) {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
};


export let crossToAnkle = function crossToAnkle() {
  let crossWrapper: HTMLElement | null = document.querySelector('.animationIconDescription');
  let ankle2: HTMLElement | null = document.querySelector('.angle2');

  let rotate2 = () => {
    let i = 60;
    let j = 60;

    if (ankle2 && crossWrapper) {
      let rotate2Interval = setInterval(() => {
        if (ankle2) {
          ankle2.style.transform = "rotate(0) scale(" + easeOutSine(i, -1, 2, 60) + ") translate(" + easeOutSine(j, 0, 5, 60) + "px, " + easeOutSine(j, 0, 5, 60) + "px) ";
        }

        i--;
        j--;

        if (i < 1) {
          clearInterval(rotate2Interval);

          if (ankle2 && crossWrapper) {
            ankle2.classList.add("angle2_DONE");
            ankle2.style.transform = '';
            crossWrapper.style.transform = '';
          }
        }
      }, 600 / 60);
    }
  }


  let k = 1;

  if (ankle2 && crossWrapper) {
    let rotateInterval = setInterval(() => {
      if (ankle2 && crossWrapper) {

        crossWrapper.style.transform = "rotate(" + easeOutSine(k, 0, 45, 60) + "deg)";
        k++;
        if (k > 60) {
          clearInterval(rotateInterval);
          crossWrapper.classList.add("animationIconDescription_DONE");
          rotate2();
        }
      }
    }, 400 / 60);

  }

}

export let showGraphicMenu = function showGraphicMenu() {
  let GraphicWrapper = document.querySelector(".imageDescriptionMenuWrapper");

}
