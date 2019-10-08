

let easeOutQuart = function (t: number, b: number, c: number, d: number) {
  t /= d;
  t--;
  return -c * (t * t * t * t - 1) + b;
};

export function scale_widthUP(store: any) {
  store.addButtonActive = true;

  let animation_id: number;
  let element: HTMLElement | null = document.querySelector('.formNewGraphic');
  let button = document.querySelector('.addGraphicButton');
  let buttonWidth: any;
  if (button) {
    buttonWidth = window.getComputedStyle(button).width;

  }
  let maxElementWidth = parseInt(buttonWidth.slice(0, -2)) * 0.7;
  let k = 1;
  let interval1 = () => {
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
  let cross: HTMLElement | null = document.querySelector(".plusItem");
  if (cross) {
    cross.style.transform = 'rotate(' + 0 + 'deg)';

  }
  let animation_id2: number;

  let i = 1;
  let interval2 = () => {
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
export function scale_widthDown(it: any) {
  let animation_id3: number;
  let element: HTMLElement | null = document.querySelector('.formNewGraphic');
  let button: HTMLElement | null = document.querySelector('.addGraphicButton');
  let buttonWidth;
  let maxElementWidth: number;
  if (button) {
    buttonWidth = window.getComputedStyle(button).width;
  }
  if (buttonWidth) {
    maxElementWidth = parseInt(buttonWidth.slice(0, -2)) * 0.7;

  }

  let k = 30;
  let interval3 = () => {
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
  let cross: HTMLElement | null = document.querySelector(".plusItem");
  let animation_id4: number;
  let i = 30;
  let interval4 = () => {
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
