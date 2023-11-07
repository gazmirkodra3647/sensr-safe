/* 
Filename: ComplexCode.js
Description: This complex JavaScript program performs advanced mathematical calculations and generates a fractal based on the Mandelbrot set.
*/

// Constants
const MAX_ITERATIONS = 1000;
const MAX_MAGNITUDE = 4;
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

// Function to calculate the Mandelbrot iterations
function calculateMandelbrot(x, y) {
  let real = 0;
  let imaginary = 0;
  
  for (let i = 0; i < MAX_ITERATIONS; i++) {
    let real2 = real * real;
    let imaginary2 = imaginary * imaginary;
    
    if (real2 + imaginary2 > MAX_MAGNITUDE)
      return i;
    
    let tempReal = real;
    real = real2 - imaginary2 + x;
    imaginary = 2 * tempReal * imaginary + y;
  }
  
  return MAX_ITERATIONS;
}

// Generate the canvas and render the Mandelbrot set
const canvas = document.createElement("canvas");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

for (let x = 0; x < CANVAS_WIDTH; x++) {
  for (let y = 0; y < CANVAS_HEIGHT; y++) {
    let a = (x - CANVAS_WIDTH / 2) * 4 / CANVAS_WIDTH;
    let b = (y - CANVAS_HEIGHT / 2) * 4 / CANVAS_HEIGHT;
    
    let iteration = calculateMandelbrot(a, b);
    let hue = iteration % 256;
    let saturation = 100;
    let lightness = iteration < MAX_ITERATIONS ? 50 : 0;
    
    ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    ctx.fillRect(x, y, 1, 1);
  }
}