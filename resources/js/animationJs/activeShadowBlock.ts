let easeOutQuart = function (t, b, c, d) {
  t /= d;
  t--;
  return -c * (t * t * t * t - 1) + b;
};

export let activeShadowBlock = function activeShadowBlock(element: { style: { boxShadow: string; }; }) {
  let k = 1;
  let animation_id;
  let shadowInterval = () => {
    element.style.boxShadow = "1px 1px 15px rgba(0, 0, 0, " + easeOutQuart(k, 0, 0.1, 60) + ")";
    k++
    if (k > 60) {
      window.cancelAnimationFrame(animation_id);
    }
    else {
      window.requestAnimationFrame(shadowInterval);

    }
  };
}
export let deActiveShadowBlock = function activeShadowBlock(element: { style: { boxShadow: string; }; }) {
  let k = 60;
  let animation_id;

  let shadowInterval = () => {
    element.style.boxShadow = "1px 1px 15px rgba(0, 0, 0, " + easeOutQuart(k, 0, 0.1, 60) + ")";
    k--;
    if (k < 0) {
      window.cancelAnimationFrame(animation_id);
    }
    else {
      window.requestAnimationFrame(shadowInterval);
    }
  }
  shadowInterval();
}
