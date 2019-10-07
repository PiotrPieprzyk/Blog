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
  let apperInterval = setInterval(() => {
    element.style.top = "-" + easeOutQuart(k, 0, 33, 60) + "px";
    k++;
    if (k > 60) {
      clearInterval(apperInterval);
    }
  }, 500 / 60);
}
export let errorAppear = function errorAppear(element: { style: { top: string; }; }) {

  let k = 60;
  let apperInterval = setInterval(() => {
    element.style.top = "-" + easeInExpo(k, 0, 33, 60) + "px";
    k--;
    if (k < 0) {
      clearInterval(apperInterval);
    }
  }, 500 / 60);
}