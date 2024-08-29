// function isPrime(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i <= Math.trunc(n / 2); i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }

function isPrime(n) {
  let temp = n;
  let sum = 0;
  let length = 0;
  while (n > 0) {
    length++;
    n = Math.trunc(n / 10);
  }

  n = temp;

  while (n > 0) {
    let fact = 1;
    let digit = n % 10;
    for (let i = 1; i <= length; i++) {
      fact *= digit;
    }
    sum += fact;
    n = Math.trunc(n / 10);
  }

  if (sum == temp) {
    return true;
  } else {
    return false;
  }
}

function alternate() {
  let start = 7;

  let count = 0;
  for (let i = ++start; true; i++) {
    count++;
    if (isPrime(i)) {
      console.log(i);
      break;
    }
  }
  console.log(count);
}

function alternatePrime1() {
  let count = 0;
  for (let i = 1000; i >= 1; i--) {
    if (isPrime(i)) {
      count++;
      if (count % 2 != 0) {
        console.log(i);
      }
    }
  }
}

function alternatePrime() {
    let count = 0;
    for (let i = 1000; i >= 1; i--) {
      if (isPrime(i)) {
       
          console.log(i);
        
      }
    }
  }
alternatePrime2();


function alternatePrime2() {
    let count = 0;
    for (let i = 1000; i >= 1; i--) {
      if (isPrime(i)) {
        count++;
        if (count== 3) {
          console.log(i);
        }
      }
    }
  }