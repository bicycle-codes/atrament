/* eslint-disable no-unused-vars */
import Atrament from '../dist/index.js';

// first, we need to set up the canvas
const canvas = document.getElementById('sketcher');

// instantiate Atrament
const atrament = new Atrament(canvas, {
  width: canvas.offsetWidth,
  height: canvas.offsetHeight,
});

console.log('atrament', atrament);
