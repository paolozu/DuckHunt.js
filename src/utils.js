export const setStyle = function(element, style) {
  for(let property in style) {
    element.style[property] = style[property];
  }
};
