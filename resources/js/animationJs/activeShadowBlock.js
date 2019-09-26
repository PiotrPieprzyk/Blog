Math.easeOutQuart = function (t, b, c, d) {
  t /= d;
  t--;
  return -c * (t * t * t * t - 1) + b;
};

export let activeShadowBlock = function activeShadowBlock(element) {
  let k =1;
  let shadowInterval = setInterval(() => {
  element.style.boxShadow= "1px 1px 15px rgba(0, 0, 0, "+Math.easeOutQuart(k,0,0.1,60)+")";
  k++
    if (k > 60) {
        clearInterval(shadowInterval);
      }
      }, 10);
}
export let deActiveShadowBlock = function activeShadowBlock(element) {
  let k =60;
  let shadowInterval = setInterval(() => {
  element.style.boxShadow= "1px 1px 15px rgba(0, 0, 0, "+Math.easeOutQuart(k,0,0.1,60)+")";
  k--;
    if (k < 0) {
        clearInterval(shadowInterval);
      }
      }, 10);
}