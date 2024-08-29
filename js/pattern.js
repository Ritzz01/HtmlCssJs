// function pattern(n) {
//   let res = "";

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       res += j;
//     }

//   for (let i = 1; i <= n; i++) {
//     for (let j = i; j >= 1; j--) {
//       res += j;
//     }
//     res += "\n";
//   }

// for(let i=1;i<=n;i++)
// {
//     for(let j=1;j<i;j++)
//     {
//         res+= " "
//     }
//     for(let j=1;j<=n-i+1;j++)
//     {
//         res+=j
//     }

// for(let i=1;i<=n;i++)
//     {
//         for(let j=1;j<i;j++)
//         {
//             res+= " "
//         }
//         for(let j=i;j<=n;j++)
//         {
//             res+=j
//         }

// let stars=0
// for(let i=n;i>=1;i--)
//         {
//             for(let j=1;j<=stars;j++)
//             {
//                 res+= " "
//             }

//             for(let j=i;j>=1;j--)
//             {
//                 res+=j
//             }

// stars++;

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n-i+1; j++) {
//       res += j;
//     }

// for (let i = n; i>=1; i--) {

//     for (let j = i; j >=1; j--) {
//       res += j;
//     }

// for (let i = 1; i<=n; i++) {

//     for (let j = 1; j <=n-i; j++) {
//       res += " ";
//     }
//     for(let j=1;j<=i;j++)
//     {
//         res+=j
//     }

// for (let i = n; i>=1; i--) {

//     for(let j=n;j>=i;j--)
//     {
//         res+= j
//     }

// for (let i = n; i>=1; i--) {

//     for(let j=i;j<=n;j++)
//     {
//         res+= j
//     }

// for (let i = n; i>=1; i--) {

//     for(let j=n;j>=n;j--)
//     {
//         res+= j
//     }

// for (let i = 1; i<=n; i++) {

//     for(let j=1;j<i;j++)
//     {
//         res+= " "
//     }
//     for(let j=n;j>=i;j--)
//         {
//             res+= j
//         }

// for (let i = 1; i<=n; i++) {

//     for(let j=n;j>=i;j--)
//         {
//             res+= j
//         }

// for (let i = n; i>=1; i--) {

//   for(let j=1;j<=i-1;j++)
//   {
//     res+=" "
//   }

//     for(let j=n;j>=i;j--)
//         {
//             res+= j
//         }

// for (let i = n; i>=1; i--) {

//   for(let j=1;j<=i-1;j++)
//   {
//     res+=" "
//   }

//     for(let j=i;j<=n;j++)
//         {
//             res+= j
//         }

//   let stars = 1;
//   let spaces = n - 1;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= spaces; j++) {
//       res += " ";
//     }

//     for (let j = 1; j <= stars; j++) {
//       res += " * ";
//     }

//     spaces--;
//     stars++;
//     res += "\n";
//   }

// let stars = 1;
// let spaces = n - 1;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= spaces; j++) {
//     res += " ";
//   }

//   for (let j = 1; j <= stars; j++) {
//     if (i == n || j == 1 || j==stars) {
//       res += "*";
//     } else {
//       res += " ";
//     }
//   }

//   spaces--;
//   stars++;
//   res += "\n";

// let stars = n;
// let spaces = 0;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= spaces; j++) {
//     res += " ";
//   }

//   for (let j = 1; j <= stars; j++) {
//     if (i == 1|| j == 1 || j==stars) {
//       res += "*";
//     } else {
//       res += " ";
//     }
//   }

//   spaces++;
//   stars--;

// let stars = 1;

// for (let i = 1; i <= n; i++) {

//   for (let j = 1; j <= stars; j++) {
//       res += "*";
//   }

//   if(i<Math.trunc(n/2))
//   {
//     stars++
//   }
//   else
//   {
//     stars--
//   }

// let count=1;
// for (let i = 1; i <= n; i++) {

//   for (let j = 1; j <= n; j++) {
//       res += count++;
//      // count++;
//   }

// for (let i = 1; i <= n; i++) {
//   if (i % 2 != 0) {
//     let count=((i-1)*n)+1
//     for (let j = 1; j <= n; j++) {
//       res += count++ ;
//     }
//   }
//   else{
//     let count=n*i
//     for (let j = 1; j <= n; j++) {
//       res += count--;
//     }
//   }

//   let stars = 1;
//   let spaces = n - 1;
//   for (let i = 1; i <= n; i++) {
//     let k = i;
//     for (let j = 1; j <= spaces; j++) {
//       res += " ";
//     }

//     for (let j = 1; j <= stars; j++) {
//       if (j <= i) {
//         res += j;
//       } else {
//         res += --k;
//       }
//     }

//     spaces--;
//     stars++;
//     res += "\n";
//   }
//   console.log(res);
// }
// pattern(5);

function triangle(n) {
  let res = "";

  // let k = 4;
  // for (let i = 1; i <= n; i++) {
  //   let num=1;
  //   for (let j = 1; j <= k; j++) {
  //     res += " ";
  //     num++
  //   }

  //   for (let j = n; j >n-i; j--) {
  //     res += num;
  //     num++
  //   }
  //   k--;



  // for (let i = 1; i <= n; i++) {
  //   let num=1;
  //   for (let j = 1; j <= k; j++) {
  //     res += " ";
  //     num++
  //   }

  //   for (let j = n; j >n-i; j--) {
  //     res += num;
  //     num++
  //   }
  //   k--;
    
    
  //   res += "\n";
  // }


  // for(let i=1;i<=n;i++)
  // {
  //     for(let j=1;j<=n-i;j++)
  //     {
  //       res+=" "
  //     }
  //     for(let j=1;j<=i;j++)
  //       {
  //         res+=j
  //       }
  //       for (let j =i-1;j>=1 ;j--) {
  //         res += j;
  //       }

  for(let i=1;i<=n;i++)
  {
    for(let j=1;j<=n-i;j++)
      {
        res+=" "
      }
    for(let j=n-i+1;j<=n;j++)
    {
      res+=j
    }
    res += "\n";
  }
  
  console.log(res);
}

triangle(5);
