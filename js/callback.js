function calculator(a, b, callback) {
  let res = callback(a, b);
  return res;
}

function mul(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}

function main() {
  let addition = calculator(1, 2, add);
  console.log(addition);

  let multiply = calculator(1, 2, mul);
  console.log(multiply);
}
main();
