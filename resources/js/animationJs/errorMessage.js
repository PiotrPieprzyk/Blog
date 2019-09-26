Math.easeOutQuart = function (t, b, c, d) {
  t /= d;
  t--;
  return -c * (t * t * t * t - 1) + b;
};
Math.easeInExpo = function (t, b, c, d) {
  return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

export let errorDisappear = function errorDisappear(element) {
  console.log(element.style.top);
  let k = 1;
  let apperInterval = setInterval(() => {
    element.style.top = "-" + Math.easeOutQuart(k, 0, 32, 60) + "px";
    k++;
    if (k > 60) {
      clearInterval(apperInterval);
    }
  }, 7);
}
export let errorAppear = function errorAppear(element) {
  console.log(element.style.top);

  let k = 60;
  let apperInterval = setInterval(() => {
    element.style.top = "-" + Math.easeInExpo(k, 0, 32, 60) + "px";
    k--;
    if (k < 0) {
      clearInterval(apperInterval);
    }
  }, 7);
}