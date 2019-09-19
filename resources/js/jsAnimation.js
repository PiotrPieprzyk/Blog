
let viewPortProperties = function viewPortProperties() {
  // cross-brower //
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  let arrProperties = [w, h];
  return arrProperties;
};
let sizeUp = function sizeUp(index) {
  // variables //
  let sizingElement = document.getElementById(index);
  let widthElement = window.getComputedStyle(sizingElement).width;
  let heightElement = window.getComputedStyle(sizingElement).height;
  let viewPort = viewPortProperties();
  let valueIncrement = 1;
  let setStyle = sizingElement.style;
  let positionAmount;
  let positionElement;

  // check position
  if (index == 2) { positionElement = window.getComputedStyle(sizingElement).bottom }
  if (index == 1) { positionElement = window.getComputedStyle(sizingElement).top }
  // prepare for staling // 
  setStyle.width = widthElement;
  setStyle.height = heightElement;
  setStyle.maxWidth = "10000px";
  setStyle.maxHeight = "10000px";

  if (index == 2) { setStyle.bottom = positionElement; }
  if (index == 1) { setStyle.top = positionElement; }

  // scaling // 
  let intervalSizeUp = setInterval(() => {
    setStyle.width = parseInt(setStyle.width.slice(0, -2)) + valueIncrement + "px";
    setStyle.height = parseInt(setStyle.height.slice(0, -2)) + valueIncrement + "px";

    if (index == 2) { setStyle.bottom = parseInt(setStyle.bottom.slice(0, -2)) - (valueIncrement / 3.6) + "px"; }
    if (index == 1) { setStyle.top = parseInt(setStyle.top.slice(0, -2)) - (valueIncrement / 3.6) + "px"; }

    valueIncrement++;

    if (index == 2) { positionAmount = parseInt(setStyle.bottom.slice(0, -2)); }
    if (index == 1) { positionAmount = parseInt(setStyle.top.slice(0, -2)); }

    if (parseInt(setStyle.width.slice(0, -2)) > viewPort[0] + 30 && parseInt(setStyle.height.slice(0, -2)) > viewPort[1] - positionAmount) {
      clearInterval(intervalSizeUp);
      setStyle.width = "110vw";
      setStyle.height = "110vh";
      setStyle.maxWidth = "110vw";
      setStyle.maxHeight = "110vh";
      if (index == 2) {
        setStyle.bottom = "-10px";
      }
      if (index == 1) {
        setStyle.top = "-10px";
      }


    }
  }, 15)

}

let sizeDown = function sizeUp(index) {
  // variables //
  let sizingElement = document.getElementById(index);
  let widthElement = window.getComputedStyle(sizingElement).width;
  let heightElement = window.getComputedStyle(sizingElement).height;
  let viewPort = viewPortProperties();
  let valueIncrement = 1;
  let setStyle = sizingElement.style;
  let positionAmount;
  let positionElement;

  // check position
  if (index == 2) { positionElement = window.getComputedStyle(sizingElement).bottom }
  if (index == 1) { positionElement = window.getComputedStyle(sizingElement).top }
  // prepare for staling // 
  setStyle.width = widthElement;
  setStyle.height = heightElement;
  setStyle.maxWidth = "10000px";
  setStyle.maxHeight = "10000px";
  setStyle.minWidth = "200px";
  setStyle.minHeight = "200px";

  if (index == 2) { setStyle.bottom = positionElement; }
  if (index == 1) { setStyle.top = positionElement; }

  // scaling // 
  let intervalSizeUp = setInterval(() => {
    setStyle.width = parseInt(setStyle.width.slice(0, -2)) - valueIncrement + "px";
    setStyle.height = parseInt(setStyle.height.slice(0, -2)) - valueIncrement + "px";

    if (index == 2) { setStyle.bottom = parseInt(setStyle.bottom.slice(0, -2)) + (valueIncrement / 4) + "px"; }
    if (index == 1) { setStyle.top = parseInt(setStyle.top.slice(0, -2)) + (valueIncrement / 4) + "px"; }

    valueIncrement++;

    if (index == 2) { positionAmount = parseInt(setStyle.bottom.slice(0, -2)); }
    if (index == 1) { positionAmount = parseInt(setStyle.top.slice(0, -2)); }

    if (parseInt(setStyle.width.slice(0, -2)) < parseInt(setStyle.minWidth.slice(0, -2)) && parseInt(setStyle.height.slice(0, -2)) < parseInt(setStyle.minHeight.slice(0, -2))) {
      clearInterval(intervalSizeUp);
      setStyle.width = "30vh";
      setStyle.height = "30vh";
      setStyle.maxWidth = "200px";
      setStyle.maxHeight = "200px";
      setStyle.minWidth = "0";
      setStyle.minHeight = "0";
      if (index == 2) {
        setStyle.bottom = "15vh";
      }
      if (index == 1) {
        setStyle.top = "15vh";
      }


    }
  }, 15)

}
export default {
  viewPortProperties,
  sizeUp,
  sizeDown

};

import anime from 'animejs/lib/anime.es.js';

// let sizeUp = function sizeUp(index) {
//   let element = document.getElementById(index);
//   if (index == 1) {
//     let startProperties = {
//       maxWidth: '200px',
//       maxHeight: ' 200px',
//       top: '15vh',
//       width: '30vh',
//       height: ' 30vh',
//     };
//     anime({
//       targets: startProperties,
//       width: '100vw',
//       height: '100vh',
//       maxHeight: '100vh',
//       maxWidth: '100vw',
//       top: 0,
//       duration: 400,
//       easing: 'easeOutQuad',
//       update: function () {
//         element.style.maxWidth = startProperties.maxWidth;
//         element.style.maxHeight = startProperties.maxHeight;
//         element.style.width = startProperties.width;
//         element.style.height = startProperties.height;
//         element.style.top = startProperties.top;
//       }
//     });
//   }
//   if (index == 2) {
//     let startProperties = {
//       maxWidth: '200px',
//       maxHeight: ' 200px',
//       bottom: '15vh',
//       width: '30vh',
//       height: ' 30vh',
//     };
//     anime({
//       targets: startProperties,
//       width: '100vw',
//       height: '100vh',
//       maxHeight: '100vh',
//       maxWidth: '100vw',
//       bottom: 0,
//       duration: 400,
//       easing: 'easeOutQuad',
//       update: function () {
//         element.style.maxWidth = startProperties.maxWidth;
//         element.style.maxHeight = startProperties.maxHeight;
//         element.style.width = startProperties.width;
//         element.style.height = startProperties.height;
//         element.style.top = startProperties.top;
//       }
//     });
//   }

// }
// let sizeDown = function sizeDown(index) {

//   let element = document.getElementById(index);
//   if (index == 1) {
//     let startProperties = {
//       width: '100vw',
//       height: '100vh',
//       maxHeight: '100vh',
//       maxWidth: '100vw',
//       top: '0',

//     };
//     anime({
//       targets: startProperties,
//       maxWidth: '200px',
//       maxHeight: ' 200px',
//       top: '15vh',
//       width: '30vh',
//       height: ' 30vh',
//       duration: 400,
//       easing: 'easeOutQuad',
//       direction: 'reverse',
//       update: function () {
//         element.style.maxWidth = startProperties.maxWidth;
//         element.style.maxHeight = startProperties.maxHeight;
//         element.style.width = startProperties.width;
//         element.style.height = startProperties.height;
//         element.style.top = startProperties.top;
//       }

//     });
//   }
//   if (index == 2) {
//     let startProperties = {
//       width: '100vw',
//       height: '100vh',
//       maxHeight: '100vh',
//       maxWidth: '100vw',
//       bottom: '0',
//     };
//     anime({
//       targets: startProperties,
//       maxWidth: '200px',
//       maxHeight: ' 200px',
//       bottom: '15vh',
//       width: '30vh',
//       height: ' 30vh',
//       duration: 400,
//       easing: 'easeOutQuad',
//       direction: 'reverse',
//       update: function () {
//         element.style.maxWidth = startProperties.maxWidth;
//         element.style.maxHeight = startProperties.maxHeight;
//         element.style.width = startProperties.width;
//         element.style.height = startProperties.height;
//         element.style.top = startProperties.top;
//       }

//     });
//   }

// }

