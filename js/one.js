// function isPrime(n)
// {

//     let count=0;
//     if (n <= 1) {
//         return false;
//     }

//     for(let i=1;i<=n;i++)
//     {
//           if(n%i==0)
//           {
//             count++;
//           }
//     }

//     if(count===2)
//     {
//        return true;
//     }
//     else{
//         return false;
//     }
// }

// let count=0;
// for(let i=1;i<10;i++)
// {
//     if(isPrime(i))
//     {
//         count++;
//     }
// }
// console.log(count);

// isPrime(10)

//armstrong no alternate

// let a=0;
// let b=1;
// let c=0;
// let n=10;
// let flag=true;

//     console.log(a);

// console.log(a+b)
// for(let i=2;i<n;i++)
// {
//      c=a+b;
//      console.log(c)
//      a=b;
//      b=c;
// }

// console.log(a);

// for(let i=1;i<n-2;i++)
// {
//     c=a+b;
//    if(i%2==0)
//    {
//     console.log(c);
//    }
//    a=b;
//    b=c;
// }

//armstroong no

// function armstrong(temp)
// {


// let a=temp;
// let count = 0;

// while (a > 0) {
//     count++;
//     a = Math.trunc(a / 10);
// }


// a=temp;
// let sum = 0;

// while (a > 0) {
//     let digit = a % 10;
//     let fact = 1;

//   for (let i = 1; i <=count; i++) {
//     fact *= digit;
//   }
//   a = Math.trunc(a / 10);
//   sum += fact;
// }

// return sum==temp;
// }


// for(let i=1;i<=1000;i++)
// {
//     if(armstrong(i))
//     {
//         if(i%2!=0)
//         console.log(i)
//     }
// }

