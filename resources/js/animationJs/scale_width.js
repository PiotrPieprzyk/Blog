

Math.easeOutQuart = function (t, b, c, d) {
  t /= d;
  t--;
  return -c * (t * t * t * t - 1) + b;
};

export function scale_widthUP(store) {
  store.addButtonActive = true;

  let element = document.querySelector('.formNewGraphic');
  let button = document.querySelector('.addGraphicButton');
  let buttonWidth = window.getComputedStyle(button).width;
  let maxElementWidth = parseInt(buttonWidth.slice(0, -2)) * 0.8;
  let k = 1;
  let interval1 = setInterval(() => {
    element.style.width = Math.easeOutQuart(k, 1, maxElementWidth, 60) + "px";
    k++;
    if (k > 60) {
      clearInterval(interval1);
    }

  }, 10);
}

export function spin_the_crossUP() {
  let cross = document.querySelector(".plusItem");
  cross.style.transform = 'rotate(' + 0 + 'deg)';

  let i = 1;
  let interval2 = setInterval(() => {
    console.log(cross.style.transform);
    cross.style.transform = 'rotate(' + Math.easeOutQuart(i, 0, 315, 60) + 'deg)';
    i++;
    if (i > 60) {
      clearInterval(interval2);
    }

  }, 10);
}
export function scale_widthDown(it) {

  let element = document.querySelector('.formNewGraphic');
  let button = document.querySelector('.addGraphicButton');
  let buttonWidth = window.getComputedStyle(button).width;
  let maxElementWidth = parseInt(buttonWidth.slice(0, -2)) * 0.8;
  let k = 59;
  let interval3 = setInterval(() => {
    element.style.width = Math.easeOutQuart(k, 0, maxElementWidth, 60) + "px";
    k--;
    console.log(element.style.width);
    if (k < 0) {
      clearInterval(interval3);
      it.addButtonActive = false;
    }

  }, 10);
}

export function spin_the_crossDown() {
  let cross = document.querySelector(".plusItem");
  cross.style.transform = 'rotate(' + 0 + 'deg)';

  let i = 60;
  let interval4 = setInterval(() => {
    cross.style.transform = 'rotate(' + Math.easeOutQuart(i, 0, 315, 60) + 'deg)';
    i--;
    if (i < 0) {
      clearInterval(interval4);
    }

  }, 10);
}