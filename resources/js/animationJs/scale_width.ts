

let easeOutQuart = function (t, b, c, d) {
  t /= d;
  t--;
  return -c * (t * t * t * t - 1) + b;
};

export function scale_widthUP(store) {
  store.addButtonActive = true;

  let animation_id;
  let element: HTMLElement | null = document.querySelector('.formNewGraphic');
  let button = document.querySelector('.addGraphicButton');
  let buttonWidth = window.getComputedStyle(button).width;
  let maxElementWidth = parseInt(buttonWidth.slice(0, -2)) * 0.7;
  let k = 1;
  let interval1 = () => {
    element.style.width = easeOutQuart(k, 1, maxElementWidth, 60) + "px";
    k++;
    if (k > 60) {
      window.cancelAnimationFrame(animation_id);
    }
    else {
      animation_id = window.requestAnimationFrame(interval1);
    }

  };
  interval1();
}

export function spin_the_crossUP() {
  let cross: HTMLElement | null = document.querySelector(".plusItem");
  cross.style.transform = 'rotate(' + 0 + 'deg)';
  let animation_id2;

  let i = 1;
  let interval2 = () => {
    cross.style.transform = 'rotate(' + easeOutQuart(i, 0, 225, 60) + 'deg)';
    i++;
    if (i > 60) {
      window.cancelAnimationFrame(animation_id2);
    }
    else {
      animation_id2 = window.requestAnimationFrame(interval2);
    }

  };
  interval2();
}
export function scale_widthDown(it) {
  let animation_id3;
  let element: HTMLElement | null = document.querySelector('.formNewGraphic');
  let button: HTMLElement | null = document.querySelector('.addGraphicButton');
  let buttonWidth = window.getComputedStyle(button).width;
  let maxElementWidth = parseInt(buttonWidth.slice(0, -2)) * 0.7;
  let k = 60;
  let interval3 = () => {
    element.style.width = easeOutQuart(k, 0, maxElementWidth, 60) + "px";
    k--;
    if (k < 0) {
      window.cancelAnimationFrame(animation_id3);
      it.addButtonActive = false;
    }
    else {
      animation_id3 = window.requestAnimationFrame(interval3);
    }

  };
  interval3();
}

export function spin_the_crossDown() {
  let cross: HTMLElement | null = document.querySelector(".plusItem");
  let animation_id4;
  let i = 60;
  let interval4 = () => {
    cross.style.transform = 'rotate(' + easeOutQuart(i, 0, 225, 60) + 'deg)';
    i--;
    if (i < 0) {
      window.cancelAnimationFrame(animation_id4);
    }
    else {
      animation_id4 = window.requestAnimationFrame(interval4);
    }

  };
  interval4();

}
