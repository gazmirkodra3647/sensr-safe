/*
 * Filename: complexCode.js
 * Description: This code performs various complex operations and calculations.
 * Author: [Your Name]
 * Date: [Current Date]
 */

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Function to find the nth Fibonacci number
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Function to sort an array using merge sort algorithm
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Class representing a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(otherComplex) {
    const realSum = this.real + otherComplex.real;
    const imaginarySum = this.imaginary + otherComplex.imaginary;

    return new ComplexNumber(realSum, imaginarySum);
  }

  multiply(otherComplex) {
    const realProduct =
      this.real * otherComplex.real - this.imaginary * otherComplex.imaginary;
    const imaginaryProduct =
      this.real * otherComplex.imaginary +
      this.imaginary * otherComplex.real;

    return new ComplexNumber(realProduct, imaginaryProduct);
  }

  toString() {
    return `${this.real} + ${this.imaginary}i`;
  }
}

// Usage example:
const num1 = new ComplexNumber(2, 3);
const num2 = new ComplexNumber(4, -1);

console.log(`Adding complex numbers: ${num1.add(num2).toString()}`);
console.log(`Multiplying complex numbers: ${num1.multiply(num2).toString()}`);

console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`8th Fibonacci number: ${fibonacci(8)}`);

const unsortedArray = [6, 2, 9, 1, 5, 3, 8, 4, 7];
console.log(`Sorted array: ${mergeSort(unsortedArray)}`);

console.log(`Is 7 a prime number? ${isPrime(7)}`);
console.log(`Is 10 a prime number? ${isPrime(10)}`);
