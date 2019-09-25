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

export let sizeDown = function sizeDown(index) {
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
      let endTop;
      let endWidth;
      let endHeight;

      // aspectRatio
      let aspectRatio = viewPort[0] / viewPort[1];
      if (aspectRatio <= 1 / 2) {
        endTop = ((viewPort[1] / 2) - (viewPort[0] / 2)) / 2;
        endWidth = viewPort[0] / 2;
        endHeight = viewPort[0] / 2;
      }
      if (aspectRatio > 1 / 2 && aspectRatio < 1) {
        endTop = viewPort[1] / 8;
        endWidth = viewPort[1] / 4;
        endHeight = viewPort[1] / 4;
      }


      // prepare for sizing //
      setStyle.top = positionElement;
      setStyle.width = widthElement;
      setStyle.height = heightElement;


      // sizing // 
      let k = 60;
      let i = 1;
      let positionInterval = setInterval(() => {
        setStyle.top = Math.easeInExpo(i, 0, endTop, 60, 30) + 'px';
        setStyle.width = Math.easeInExpo(k, endWidth, viewPort[0] - endWidth, 60) + 'px';
        setStyle.height = Math.easeInExpo(k, endHeight, viewPort[1] - endHeight, 60) + 'px';
        k--;
        i++;
        if (k == 1) {
          clearInterval(positionInterval);
          setStyle.width = null;
          setStyle.height = null;
          setStyle.top = null;


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
      let endBottom;
      let endWidth;
      let endHeight;

      // aspectRatio
      let aspectRatio = viewPort[0] / viewPort[1];
      if (aspectRatio <= 1 / 2) {
        endBottom = ((viewPort[1] / 2) - (viewPort[0] / 2)) / 2;
        endWidth = viewPort[0] / 2;
        endHeight = viewPort[0] / 2;
      }
      if (aspectRatio > 1 / 2 && aspectRatio < 1) {
        endBottom = viewPort[1] / 8;
        endWidth = viewPort[1] / 4;
        endHeight = viewPort[1] / 4;
      }

      // prepare for sizing //
      setStyle.width = widthElement;
      setStyle.height = heightElement;
      setStyle.bottom = positionElement;

      // sizing // 
      let k = 60;
      let i = 1;
      let positionInterval = setInterval(() => {
        setStyle.bottom = Math.easeInExpo(i, 0, endBottom, 60, 30) + 'px';
        setStyle.width = Math.easeInExpo(k, endWidth, viewPort[0] - endWidth, 60) + 'px';
        setStyle.height = Math.easeInExpo(k, endHeight, viewPort[1] - endHeight, 60) + 'px';
        k--;
        i++;
        if (k == 1) {
          clearInterval(positionInterval);
          setStyle.width = null;
          setStyle.height = null;
          setStyle.bottom = null;


        }
      }, 10);
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
      let endleft;
      let endWidth;
      let endHeight;

      // aspectRatio
      let aspectRatio = viewPort[0] / viewPort[1];
      if (aspectRatio >= 1 && aspectRatio < 2 / 1) {
        endleft = viewPort[0] / 8;
        endWidth = viewPort[0] / 4;
        endHeight = viewPort[0] / 4;
      }
      if (aspectRatio > 2 / 1) {
        endleft = ((viewPort[0] / 2) - (viewPort[1] / 2) / 2);
        endWidth = viewPort[1] / 2;
        endHeight = viewPort[1] / 2;
      }

      // prepare for sizing //
      setStyle.left = positionElement;
      setStyle.width = widthElement;
      setStyle.height = heightElement;

      // sizing //
      let k = 60;
      let i = 1;
      let positionInterval = setInterval(() => {
        setStyle.left = Math.easeInExpo(i, 0, endleft, 60, 30) + 'px';
        setStyle.width = Math.easeInExpo(k, endWidth, viewPort[0] - endWidth, 60) + 'px';
        setStyle.height = Math.easeInExpo(k, endHeight, viewPort[1] - endHeight, 60) + 'px';
        k--;
        i++;
        if (k == 1) {
          clearInterval(positionInterval);
          setStyle.width = null;
          setStyle.height = null;
          setStyle.left = null;


        }
      }, 10);

    }

    // GameProfil //
    if (index == 2) {
      // variables //
      let sizingElement = document.getElementById(index);
      let positionElement = window.getComputedStyle(sizingElement).right;
      let setStyle = sizingElement.style;
      let widthElement = window.getComputedStyle(sizingElement).width;
      let heightElement = window.getComputedStyle(sizingElement).height;
      let endRight;
      let endWidth;
      let endHeight;

      // aspectRatio
      let aspectRatio = viewPort[0] / viewPort[1];
      if (aspectRatio >= 1 && aspectRatio < 2 / 1) {
        endRight = viewPort[0] / 8;
        endWidth = viewPort[0] / 4;
        endHeight = viewPort[0] / 4;
      }
      if (aspectRatio > 2 / 1) {
        endRight = ((viewPort[0] / 2) - (viewPort[1] / 2) / 2);
        endWidth = viewPort[1] / 2;
        endHeight = viewPort[1] / 2;
      }

      // prepare for sizing //
      setStyle.right = positionElement;
      setStyle.width = widthElement;
      setStyle.height = heightElement;

      // sizing //
      let k = 60;
      let i = 1;
      let positionInterval = setInterval(() => {
        setStyle.right = Math.easeInExpo(i, 0, endRight, 60, 30) + 'px';
        setStyle.width = Math.easeInExpo(k, endWidth, viewPort[0] - endWidth, 60) + 'px';
        setStyle.height = Math.easeInExpo(k, endHeight, viewPort[1] - endHeight, 60) + 'px';
        k--;
        i++;
        if (k == 1) {
          clearInterval(positionInterval);
          setStyle.width = null;
          setStyle.height = null;
          setStyle.left = null;


        }
      }, 10);
    }
  }
}