function swap() {
  let a = 10;
  let b = 5;

  console.log(` Value of a before swapping is ${a}`);
  console.log(` Value of b before swapping is ${b}`);

  // let temp=a;
  // a=b;
  // b=temp;

  a = a + b;
  b = a - b;
  a = a - b;

  console.log(` Value of a after swapping is ${a}`);
  console.log(` Value of b after swapping is ${b}`);
}

swap();
