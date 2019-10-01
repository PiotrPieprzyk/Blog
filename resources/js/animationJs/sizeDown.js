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
Math.easeOutSine = function (t, b, c, d) {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
};

export let sizeDown = function sizeDown(index, store) {
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

      setStyle.top = null;
      setStyle.bottom = null;
      setStyle.left = null;
      setStyle.right = null;

      // aspectRatio
      let aspectRatio = viewPort[0] / viewPort[1];
      if (aspectRatio <= 1 / 2) {
        endTop = ((viewPort[1] / 2) - (viewPort[0] / 2)) / 4;
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
      document.getElementById(1).classList.replace("activeProfilePage", "profileGalery");

      // sizing // 
      let k = 80;
      let i = 1;
      let positionInterval = setInterval(() => {
        setStyle.top = Math.easeOutSine(i, 0, endTop, 80, 80) + 'px';
        setStyle.width = Math.easeOutSine(k, endWidth, viewPort[0] - endWidth, 80) + 'px';
        setStyle.height = Math.easeOutSine(k, endHeight, viewPort[1] - endHeight, 80) + 'px';
        console.log(setStyle.width);
        console.log(setStyle.height);
        console.log(setStyle.right);
        k--;
        i++;
        if (k == 1) {
          clearInterval(positionInterval);
          setStyle.width = null;
          setStyle.height = null;
          setStyle.top = null;
          setStyle.bottom = null;
          setStyle.left = null;
          setStyle.right = null;
          document.getElementById(2).style.zIndex = 0;
          document.getElementById(1).classList.remove("activeProfilePage");
          document.getElementById(2).classList.remove("deActiveProfilePage");
          document.getElementById(1).classList.add("profileGalery");

          store.$store.commit("changeAnimationStatus", false);


        }
      }, 250 / 80);
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

      setStyle.top = null;
      setStyle.bottom = null;
      setStyle.left = null;
      setStyle.right = null;

      // aspectRatio
      let aspectRatio = viewPort[0] / viewPort[1];
      if (aspectRatio <= 1 / 2) {
        endBottom = ((viewPort[1] / 2) - (viewPort[0] / 2)) / 4;
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
      document.getElementById(2).classList.replace("activeProfilePage", "profileGame");

      // sizing // 
      let k = 80;
      let i = 1;
      let positionInterval = setInterval(() => {
        setStyle.bottom = Math.easeOutSine(i, 0, endBottom, 80, 80) + 'px';
        setStyle.width = Math.easeOutSine(k, endWidth, viewPort[0] - endWidth, 80) + 'px';
        setStyle.height = Math.easeOutSine(k, endHeight, viewPort[1] - endHeight, 80) + 'px';
        console.log(setStyle.width);
        console.log(setStyle.height);
        console.log(setStyle.right);
        k--;
        i++;
        if (k == 1) {
          clearInterval(positionInterval);
          setStyle.width = null;
          setStyle.height = null;
          setStyle.top = null;
          setStyle.bottom = null;
          setStyle.left = null;
          setStyle.right = null;
          document.getElementById(1).style.zIndex = 0;
          document.getElementById(2).classList.remove("activeProfilePage");
          document.getElementById(1).classList.remove("deActiveProfilePage");

          store.$store.commit("changeAnimationStatus", false);
          document.getElementById(2).classList.add("profileGame");

        }
      }, 250 / 80);
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

      setStyle.top = null;
      setStyle.bottom = null;
      setStyle.left = null;
      setStyle.right = null;

      // aspectRatio
      let aspectRatio = viewPort[0] / viewPort[1];
      if (aspectRatio >= 1 && aspectRatio < 2 / 1) {
        endleft = viewPort[0] / 8;
        endWidth = viewPort[0] / 4;
        endHeight = viewPort[0] / 4;

      }
      if (aspectRatio > 2 / 1) {
        endleft = (((viewPort[0] / 2) - (viewPort[1] / 2)) / 2);
        endWidth = viewPort[1] / 2;
        endHeight = viewPort[1] / 2;
      }
      // prepare for sizing //
      setStyle.left = positionElement;
      setStyle.width = widthElement;
      setStyle.height = heightElement;
      document.getElementById(1).classList.replace("activeProfilePage", "profileGalery");

      // sizing //
      let k = 80;
      let i = 1;
      let positionInterval = setInterval(() => {
        setStyle.left = Math.easeOutSine(i, 0, endleft, 80) + 'px';
        setStyle.width = Math.easeOutSine(k, endWidth, viewPort[0] - endWidth, 80) + 'px';
        setStyle.height = Math.easeOutSine(k, endHeight, viewPort[1] - endHeight, 80) + 'px';

        k--;
        i++;
        if (k == 1) {
          clearInterval(positionInterval);
          setStyle.width = null;
          setStyle.height = null;
          setStyle.top = null;
          setStyle.bottom = null;
          setStyle.left = null;
          setStyle.right = null;
          document.getElementById(2).style.zIndex = 0;

          store.$store.commit("changeAnimationStatus", false);

        }
      }, 250 / 80);

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

      setStyle.top = null;
      setStyle.bottom = null;
      setStyle.left = null;
      setStyle.right = null;

      // aspectRatio
      let aspectRatio = viewPort[0] / viewPort[1];
      if (aspectRatio >= 1 && aspectRatio < 2 / 1) {
        endRight = viewPort[0] / 8;
        endWidth = viewPort[0] / 4;
        endHeight = viewPort[0] / 4;
      }
      if (aspectRatio > 2 / 1) {
        endRight = (((viewPort[0] / 2) - (viewPort[1] / 2)) / 2);
        endWidth = viewPort[1] / 2;
        endHeight = viewPort[1] / 2;
      }

      // prepare for sizing //
      setStyle.right = positionElement;
      setStyle.width = widthElement;
      setStyle.height = heightElement;
      document.getElementById(2).classList.replace("activeProfilePage", "profileGame");


      // sizing //
      let k = 80;
      let i = 1;
      let positionInterval = setInterval(() => {
        setStyle.right = Math.easeOutSine(i, 0, endRight, 80) + 'px';
        setStyle.width = Math.easeOutSine(k, endWidth, viewPort[0] - endWidth, 80) + 'px';
        setStyle.height = Math.easeOutSine(k, endHeight, viewPort[1] - endHeight, 80) + 'px';
        console.log(setStyle.width);
        console.log(setStyle.height);
        console.log("RIGHT " + setStyle.right);

        k--;
        i++;
        if (k == 1) {
          clearInterval(positionInterval);
          setStyle.width = null;
          setStyle.height = null;
          setStyle.top = null;
          setStyle.bottom = null;
          setStyle.left = null;
          setStyle.right = null;
          document.getElementById(1).style.zIndex = 0;

          store.$store.commit("changeAnimationStatus", false);

        }
      }, 250 / 80);
    }
  }
}