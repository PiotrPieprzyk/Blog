let easeOutQuart = function (t, b, c, d) {
  t /= d;
  t--;
  return -c * (t * t * t * t - 1) + b;
};
let easeInExpo = function (t, b, c, d) {
  return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

export let errorDisappear = function errorDisappear(element: { style: { top: string; }; }) {
  let k = 1;
  let animation_id;
  let apperInterval = () => {
    element.style.top = "-" + easeOutQuart(k, 0, 33, 20) + "px";
    k++;
    if (k > 20) {
      window.cancelAnimationFrame(animation_id);
    }
    else {
      animation_id = window.requestAnimationFrame(apperInterval);
    }
  };
  apperInterval();
}
export let errorAppear = function errorAppear(element: { style: { top: string; }; }) {

  let k = 20;
  let animation_id;
  let apperInterval = () => {
    element.style.top = "-" + easeInExpo(k, 0, 33, 20) + "px";
    k--;
    if (k < 0) {
      window.cancelAnimationFrame(animation_id);
    }
    else {
      animation_id = window.requestAnimationFrame(apperInterval);
    }
  };
  apperInterval();
}
