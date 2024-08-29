function pattern(n) {
  let res = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      res += " ";
    }

    for (let j =i; j >=1; j--) {
      res += j;
    }

    for (let j =2; j <=i; j++) {
      res += j;
    }
    res += "\n";
  }
  console.log(res);
}
pattern(5);
