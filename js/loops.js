// for(let i=1;i<=5;i++)
// {
//     if(i==3) {break;}      //3 break
//     for(let j=1;j<=5;j++)
//     {
//         // if(i==3) {break;}      //3 break but 4 continue

//         console.log(i,j);
//     }
// }

// for(let i=1;i<=5;i++)
//     {

//         for(let j=1;j<=5;j++)
//         {
//             if(i==3 && j==3) {break;}

//             console.log(i,j);
//         }
//     }

// for(let i=1;i<=10;i++)
// {
//     if(i%2==0) break;
//     console.log(i);
// }
// console.log("outside of loop");

// let a = 0;
// let b = 1;
// let c = 0;

// let n = 5;

// if (n == 1) {
//   console.log(a);
// return ;
// }

// console.log(a + b);

// for (let i = 1; i <= n - 2; i++) {
//   c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
// }

// let a = 0;

// let b = 1;

// let c = 0;

// let n = 20;

// let m = 10;

// // let sum=10;

// if (n == 1) {
//   console.log(a);
//   return;
// }

// console.log(a + b);

// for(;;)
// {
//     if(sum<c)
//     {
//         return;
//     }
//     c=a+b;
//     a=b;
//     b=c;
//     console.log(c)
// }

// for (;;) {  //infinite loop
//   c = a + b;
//   if (c >= 10 && c <= 20) {
//     return;
//   }

//   console.log(c);

//   a = b;
//   b = c;
// }

// let a = 0;
// let b = 1;
// let c = 0;
// let n = 5;

// console.log(a);
// let flag = true;
// for (let i = 2; i <= n*2 ; i++) {
//   c = a + b;

//   if(i%2==0)
//     console.log(c);
//   a=b;
//   b=c;

// }

// let a=153;
// let count=0;
// let temp=a;

// while(a>0)
// {

//   count++;

//   a=Math.trunc(a/10);

// }
// console.log(count)

// let sum=0;

// a=temp;
// while(a>0)
// {
// let prod=1;

// let digit=a%10;

// for(let i=1;i<=count;i++)
// {
//   prod*=digit;
// }

// a=Math.trunc(a/10);
// sum+=prod;

// }

// console.log(sum)

// let a=153;
// let temp=a;

// let str=""+a; // don't take spaces
// let count=str.length;

// let power=0;

// console.log(count)

// while(a>0)
// {
//     let digit=a%10;
//     power+=Math.pow(digit,count);
//     a=Math.trunc(a/10);
// }
// console.log(power)

//neone no

// let a=9;
// a=a*a;
// let sum=0;

// while(a>0)
// {
//      let digit=a%10;
//      sum+=digit;
//      a=Math.trunc(a/10);
// }

// console.log(sum)

// let a=7837;

// let min=10;

// while(a>0)
// {
//     let digit=a%10;

//     if(digit<min)

//       min=digit;

//     a=Math.trunc(a/10);
// }

// console.log(min);

// let n=2343;

// let temp=n;

// let even=0;
// let odd=0;

// while(n>0)
// {
//   let digit=n%10;

//   if (digit % 2 === 0) {  // Check if the digit is even
//     even += digit;
//   } else {  // Otherwise, it is odd
//     odd += digit;
//   }

//     n=Math.trunc(n/10);

//   }
// console.log(even,odd);

// if(even==odd)
// {
//   console.log(true)
// }
// else{
//   console.log(false)
// }

// let a=8;
// let count=0;

// for(let i=1;i<=a;i++)
// {
//       if(a%i==0)
//       {
//         count++;
//       }

// }
//     if(count==2)
//     {
//       console.log('prime')
//     }
//     else{
//       console.log("not prime")
//     }

// let a=8;
// let res="";
// for(let i=0;i<=a;i++)
// {
//   if(a%i==0)
//   {
//     res+=i;
//   }
// }
// console.log(res);

// let a=234;
// // let min=a%10;

// max=0;
// while(a>0)
// {
//     let digit=a%10;
//     // if(min>digit)
//     if(max<digit)
//     {
//         // min=digit;
//         max=digit
//     }

//     a=Math.trunc(a/10);
// }

// // console.log(min)
// console.log(max)

// let n = 20;

// while (n > 9) {
//   let sum = 0;
//   while (n > 0) {
//     let digit = n % 10;
//     sum = digit * digit;
//     n=Math.trunc(n/10);
//   }
//   n=sum;
// }
// if(n==1)
// {
//     console.log("true");
// }
// else{
//     console.log("false")
// }


// let a=8;
// let count=0;
// for(let i=1;i<=a;i++)
// {
//     if(a%i==0)
//     {
//         count++;
//     }

   
// }
// if(count==2)
// {
//     console.log("true");
// }
// else{
//     console.log("False")
// }

let a=10;
let b=20;
let count=0;

for(let i=10;i<=20;i++)
{
    if(isPrime(i))
   console.log(i)
}

function isPrime(n) {


let count=0;
for(let i=1;i<=n;i++)
{
    if(n%i==0)
    {
        count++;
    }

   
}
if(count==2)
{
  return true;
}
else{
    return false;
}

    
}