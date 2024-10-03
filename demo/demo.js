/* eslint-disable no-unused-vars */
import Atrament from '../dist/index.js';

// first, we need to set up the canvas
const canvas = document.getElementById('sketcher');

const rect = canvas.getBoundingClientRect();

window.rect = rect;
window.canvas = canvas;
const { x, y } = rect;

// instantiate Atrament
const atrament = new Atrament(canvas, {
  // width: canvas.offsetWidth + 20,
  // height: canvas.offsetHeight + 20,
  // width: canvas.offsetWidth + x,
  // height: canvas.offsetHeight + y,
  width: canvas.offsetWidth,
  height: canvas.offsetHeight,
});

console.log('canvas', canvas);
console.log('atrament', atrament);
