
let viewPortProperties = function viewPortProperties() {
  // cross-brower //
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  let arrProperties = [w, h];
  return arrProperties;
};

Math.easeOutExpo = function (t, b, c, d) {
  return c * (-Math.pow(2, -10 * t / d) + 1) + b;
};



let sizeUp = function sizeUp(index) {
  let viewPort = viewPortProperties();
  if (viewPort[0] < viewPort[1]) {
    console.log("phone");
    if (index == 1) {
      // variables //
      let sizingElement = document.getElementById(index);
      let positionElement = window.getComputedStyle(sizingElement).top;
      let setStyle = sizingElement.style;

      // prepare for sizing //
      setStyle.top = positionElement;
      let endTop = parseInt(setStyle.top.slice(0, -2)) + viewPort[1] / 4;

      // sizing // 
      let k = 1;
      let positionInterval = setInterval(() => {
        setStyle.top = Math.easeOutExpo(k, parseInt(setStyle.top.slice(0, -2)), endTop - parseInt(setStyle.top.slice(0, -2)), 120) + 'px';
        k++;
        if (k > 60) {
          clearInterval(positionInterval);
        }
      }, 15);

      console.log(setStyle.top);
    }
    if (index == 2) {
      // variables //
      let sizingElement = document.getElementById(index);
      let positionElement = window.getComputedStyle(sizingElement).bottom;
      let setStyle = sizingElement.style;
      // prepare for sizing //
      setStyle.bottom = positionElement;
      let endBottom = parseInt(setStyle.bottom.slice(0, -2)) + viewPort[1] / 4;

      // sizing // 
      let k = 1;
      let positionInterval = setInterval(() => {
        setStyle.bottom = Math.easeOutExpo(k, parseInt(setStyle.bottom.slice(0, -2)), endBottom - parseInt(setStyle.bottom.slice(0, -2)), 240) + 'px';
        k++;
        if (k > 60) {
          clearInterval(positionInterval);
        }
      }, 15);


      console.log(setStyle.bottom);
    }
  }
  if (viewPort[0] >= viewPort[1]) {
    console.log("computer");
    if (index == 1) {
      // variables //
      let sizingElement = document.getElementById(index);
      let positionElement = window.getComputedStyle(sizingElement).left;
      let setStyle = sizingElement.style;

      // prepare for sizing //
      setStyle.left = positionElement;
      let endleft = parseInt(setStyle.left.slice(0, -2)) + viewPort[0] / 4;

      // sizing //
      let k = 1;
      let positionInterval = setInterval(() => {
        setStyle.left = Math.easeOutExpo(k, parseInt(setStyle.left.slice(0, -2)), endleft - parseInt(setStyle.left.slice(0, -2)), 120) + 'px';
        k++;
        console.log(Math.easeOutExpo(k, parseInt(setStyle.left.slice(0, -2)), endleft - parseInt(setStyle.left.slice(0, -2)), 120) + 'px');
        if (k > 60) {
          clearInterval(positionInterval);
        }
      }, 15);

      console.log(setStyle.left);
    }
    if (index == 2) {
      // variables //
      let sizingElement = document.getElementById(index);
      let positionElement = window.getComputedStyle(sizingElement).right;
      let setStyle = sizingElement.style;

      // prepare for sizing //
      setStyle.right = positionElement;
      let endright = parseInt(setStyle.right.slice(0, -2)) + viewPort[0] / 4;

      // sizing //
      let k = 1;
      let positionInterval = setInterval(() => {
        setStyle.right = Math.easeOutExpo(k, parseInt(setStyle.right.slice(0, -2)), endright - parseInt(setStyle.right.slice(0, -2)), 240) + 'px';
        k++;
        if (k > 60) {
          clearInterval(positionInterval);
        }
      }, 15);
    }
  }
}

export default {
  sizeUp
};
