/* eslint-disable no-unused-vars */
import Atrament from '../dist/index.js';

// first, we need to set up the canvas
const canvas = document.getElementById('sketcher');

const rect = canvas.getBoundingClientRect()

// instantiate Atrament
const atrament = new Atrament(canvas, {
  width: canvas.offsetWidth + (rect.x),
  height: canvas.offsetHeight + (rect.y),
});

console.log('atrament', atrament);
