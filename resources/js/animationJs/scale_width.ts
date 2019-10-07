

let easeOutQuart = function (t, b, c, d) {
  t /= d;
  t--;
  return -c * (t * t * t * t - 1) + b;
};

export function scale_widthUP(store) {
  store.addButtonActive = true;

  let element: HTMLElement | null = document.querySelector('.formNewGraphic');
  let button = document.querySelector('.addGraphicButton');
  let buttonWidth = window.getComputedStyle(button).width;
  let maxElementWidth = parseInt(buttonWidth.slice(0, -2)) * 0.7;
  let k = 1;
  let interval1 = setInterval(() => {
    element.style.width = easeOutQuart(k, 1, maxElementWidth, 60) + "px";
    k++;
    if (k > 60) {
      clearInterval(interval1);
    }

  }, 10);
}

export function spin_the_crossUP() {
  let cross: HTMLElement | null = document.querySelector(".plusItem");
  cross.style.transform = 'rotate(' + 0 + 'deg)';

  let i = 1;
  let interval2 = setInterval(() => {
    cross.style.transform = 'rotate(' + easeOutQuart(i, 0, 225, 60) + 'deg)';
    i++;
    if (i > 60) {
      clearInterval(interval2);
    }

  }, 10);
}
export function scale_widthDown(it) {

  let element: HTMLElement | null = document.querySelector('.formNewGraphic');
  let button: HTMLElement | null = document.querySelector('.addGraphicButton');
  let buttonWidth = window.getComputedStyle(button).width;
  let maxElementWidth = parseInt(buttonWidth.slice(0, -2)) * 0.7;
  let k = 60;
  let interval3 = setInterval(() => {
    element.style.width = easeOutQuart(k, 0, maxElementWidth, 60) + "px";
    k--;
    if (k < 0) {
      clearInterval(interval3);
      it.addButtonActive = false;
    }

  }, 10);
}

export function spin_the_crossDown() {
  let cross: HTMLElement | null = document.querySelector(".plusItem");

  let i = 60;
  let interval4 = setInterval(() => {
    cross.style.transform = 'rotate(' + easeOutQuart(i, 0, 225, 60) + 'deg)';
    i--;
    if (i < 0) {
      clearInterval(interval4);
    }

  }, 10);
}