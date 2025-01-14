function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error("Both arguments must be numbers");
  }
}

let result1 = addSafe(1, 2); // Correct
let result2 = addSafe(1, "2"); // Throws an error at compile time
console.log(result1); // Output: 3 