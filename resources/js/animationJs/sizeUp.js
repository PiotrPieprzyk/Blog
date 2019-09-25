let viewPortProperties = function viewPortProperties() {
  // cross-brower //
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  let arrProperties = [w, h];
  return arrProperties;
};

// Easy // 
Math.easeOutExpo = function (t, b, c, d, x) {
  if (t <= x) {
    return c * Math.sin(t / d / 4 * (Math.PI / 2)) + b;
  }
  if (t > x) {
    return (c + b) * (Math.cos((Math.PI / 2) * ((t - x) / (d - x))));
  }
};
Math.easeInExpo = function (t, b, c, d) {
  return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

export let sizeUp = function sizeUp(index) {
  let viewPort = viewPortProperties();
  if (viewPort[0] < viewPort[1]) {

    // GraphicProfil //
    if (index == 1) {
      // variables //
      let sizingElement = document.getElementById(index);
      let positionElement = window.getComputedStyle(sizingElement).top;
      let setStyle = sizingElement.style;
      let widthElement = window.getComputedStyle(sizingElement).width;
      let heightElement = window.getComputedStyle(sizingElement).height;

      // prepare for sizing //
      setStyle.top = positionElement;
      setStyle.width = widthElement;
      setStyle.height = heightElement;
      let endTop = parseInt(setStyle.top.slice(0, -2)) + viewPort[1] / 6;
      let endWidth = viewPort[0];
      let endHeight = viewPort[1];

      // sizing // 
      let k = 1;
      let positionInterval = setInterval(() => {
        setStyle.top = Math.easeOutExpo(k, parseInt(setStyle.top.slice(0, -2)), endTop - parseInt(setStyle.top.slice(0, -2)), 60, 30) + 'px';
        setStyle.width = Math.easeInExpo(k, parseInt(setStyle.width.slice(0, -2)), endWidth - parseInt(setStyle.width.slice(0, -2)), 60) + 'px';
        setStyle.height = Math.easeInExpo(k, parseInt(setStyle.height.slice(0, -2)), endHeight - parseInt(setStyle.height.slice(0, -2)), 60) + 'px';
        k++;
        if (k > 60) {
          clearInterval(positionInterval);
          document.getElementById(1).classList.add("activeProfilePage");

        }
      }, 10);
    }
    // GameProfil //
    if (index == 2) {
      // variables //
      let sizingElement = document.getElementById(index);
      let positionElement = window.getComputedStyle(sizingElement).bottom;
      let setStyle = sizingElement.style;
      let widthElement = window.getComputedStyle(sizingElement).width;
      let heightElement = window.getComputedStyle(sizingElement).height;
      // prepare for sizing //
      setStyle.width = widthElement;
      setStyle.height = heightElement;
      setStyle.bottom = positionElement;
      let endBottom = parseInt(setStyle.bottom.slice(0, -2)) + viewPort[1] / 6;
      let endWidth = viewPort[0];
      let endHeight = viewPort[1];

      // sizing // 
      let k = 1;
      let positionInterval = setInterval(() => {
        setStyle.bottom = Math.easeOutExpo(k, parseInt(setStyle.bottom.slice(0, -2)), endBottom - parseInt(setStyle.bottom.slice(0, -2)), 60, 40) + 'px';
        setStyle.width = Math.easeInExpo(k, parseInt(setStyle.width.slice(0, -2)), endWidth - parseInt(setStyle.width.slice(0, -2)), 60) + 'px';
        setStyle.height = Math.easeInExpo(k, parseInt(setStyle.height.slice(0, -2)), endHeight - parseInt(setStyle.height.slice(0, -2)), 60) + 'px';
        k++;
        if (k > 60) {
          clearInterval(positionInterval);

          document.getElementById(2).classList.add("activeProfilePage");


        }
      }, 6);
    }
  }
  if (viewPort[0] >= viewPort[1]) {
    // GraphicProfil //
    if (index == 1) {
      // variables //
      let sizingElement = document.getElementById(index);
      let positionElement = window.getComputedStyle(sizingElement).left;
      let setStyle = sizingElement.style;
      let widthElement = window.getComputedStyle(sizingElement).width;
      let heightElement = window.getComputedStyle(sizingElement).height;

      // prepare for sizing //
      setStyle.left = positionElement;
      setStyle.width = widthElement;
      setStyle.height = heightElement;
      let endleft = parseInt(setStyle.left.slice(0, -2)) + viewPort[0] / 4;
      let endWidth = viewPort[0];
      let endHeight = viewPort[1];

      // sizing //
      let k = 1;
      let positionInterval = setInterval(() => {
        setStyle.left = Math.easeOutExpo(k, parseInt(setStyle.left.slice(0, -2)), endleft - parseInt(setStyle.left.slice(0, -2)), 60, 40) + 'px';
        setStyle.width = Math.easeInExpo(k, parseInt(setStyle.width.slice(0, -2)), endWidth - parseInt(setStyle.width.slice(0, -2)), 60) + 'px';
        setStyle.height = Math.easeInExpo(k, parseInt(setStyle.height.slice(0, -2)), endHeight - parseInt(setStyle.height.slice(0, -2)), 60) + 'px';
        k++;
        if (k > 60) {
          clearInterval(positionInterval);

          document.getElementById(1).classList.add("activeProfilePage");


        }
      }, 6);

    }

    // GameProfil //
    if (index == 2) {
      // variables //
      let sizingElement = document.getElementById(index);
      let positionElement = window.getComputedStyle(sizingElement).right;
      let setStyle = sizingElement.style;
      let widthElement = window.getComputedStyle(sizingElement).width;
      let heightElement = window.getComputedStyle(sizingElement).height;

      // prepare for sizing //
      setStyle.right = positionElement;
      setStyle.width = widthElement;
      setStyle.height = heightElement;
      let endright = parseInt(setStyle.right.slice(0, -2)) + viewPort[0] / 4;
      let endWidth = viewPort[0];
      let endHeight = viewPort[1];

      // sizing //
      let k = 1;
      let positionInterval = setInterval(() => {
        setStyle.right = Math.easeOutExpo(k, parseInt(setStyle.right.slice(0, -2)), endright - parseInt(setStyle.right.slice(0, -2)), 60, 40) + 'px';
        setStyle.width = Math.easeInExpo(k, parseInt(setStyle.width.slice(0, -2)), endWidth - parseInt(setStyle.width.slice(0, -2)), 60) + 'px';
        setStyle.height = Math.easeInExpo(k, parseInt(setStyle.height.slice(0, -2)), endHeight - parseInt(setStyle.height.slice(0, -2)), 60) + 'px';
        k++;
        if (k > 60) {
          clearInterval(positionInterval);

          document.getElementById(2).classList.add("activeProfilePage");


        }
      }, 6);
    }
  }
}