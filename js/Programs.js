//leap year

// let n=2000;

// if(n%400==0 || (n%4==0 && n%100!=0))
// {
//     console.log(`${n} is prime`)
// }
// else{
//     console.log(`${n} is not prime`)
// }

//prime no

// let n=33;
// let count=0
// for(let i=1;i<=n;i++)
// {
//     if(n%i==0)
//     {
//         count++;
//     }
// }
// if(count==2)
// {
//     console.log("is prime")
// }
// else{
//     console.log("is not prime")
// }

// fibonacci series

// let n=5;
// let fact=1;
// for(let i=5;i>=1;i--)
// {
//     fact*=i;
// }
// console.log(fact)

// let a=0;
// let b=1;
// let c=0;
// let n=10;
// let str=" ";

// if(n==1)
// {
//     console.log(str + a );
//     return;
// }

// console.log(str + a + " " + b + " ");

// for(let i=3;i<=n;i++)
// {
//     c=a+b;
//     console.log(str + c + " ");
//     a=b;
//     b=c;

// }

//if d belongs to n
// let a=0;
// let b=1;
// let c=0;
// let n=10;
// let d=4;

// if(n==1)
// {
//     console.log( a );
//     return;
// }

// console.log( a + b );

// for(let i=3;i<=n;i++)
// {
//     c=a+b;
//    if(d==n)
//    {
//     console.log("true")
//     break;
//    }
//    else{

//        console.log("false")
//        a=b;
//        b=c;
//    }

// }

//5 alternate fibo no

// let a=0;
// let b=1;
// let c=0;
// let n=10;

// for(let i=1;i<=n;i++)
// {
//     c=a+b;
//    if(i%2!=0)

//        console.log(c)
//        a=b;
//        b=c;

// }

// count factors and no of factors

// let a=10;
// let count=0
// for(let i=1;i<=a;i++)
// {
//  if(a%i==0)
//  {
//     count++;
//     console.log(i)
//  }
// }
// console.log(count)

//PERFECT NO
// let n = 6;
// let sum = 0;
// while (n > 0) {
//   let digit = n % 10;
//   sum += digit;
//   n = Math.trunc(n / 10);
// }

// for(;n>0;n=Math.trunc(n/10))
// {
//     let digit = n % 10;
//   sum += digit;
// }

// console.log(sum)

//pallindrome

// let n=712;
// let temp=n;
// let rev=0;

// while(n>0)
// {
//     let digit=n%10;
//     rev=rev*10+digit;
//     n=Math.trunc(n/10);
// }
// console.log(rev)

// armstrong no

// let n=135;
// let count=0;
// let temp=n;

// let sum=0;
// while(n>0)
// {
//    count++;
//    n=Math.trunc(n/10);
// }

// n=temp;
// while(n>0)
// {
//     let fact=1;
//     let digit=n%10;
//     for(let i=1;i<=count;i++)
//     {
//         fact*=digit;
//     }
// sum+=fact;
// n=Math.trunc(n/10);
// }
// console.log(sum)

// let a=153;
// let b=""+a
// b=b.length;
// let sum=0;

// while(a>0)
// {
//     let digit=a%10;
//     sum+=digit**b;
//     a=Math.trunc(a/10);
// }
// console.log(sum)

// neon no

// let a=9
// let b=a*a
// let sum=0;
// while(b>0)
// {
//     let digit=b%10;
//     sum+=digit;
//     b=Math.trunc(b/10)
// }
// console.log(sum)

//smallest no in digit

// let a=123;

// let min=a%10;

// while(a>0)
// {
//        let digit=a%10;
//        if(min>digit)
//        {
//         min=digit
//        }
//        a=Math.trunc(a/10)
// }
// console.log(min)

//largest no

// let a=123;

// let min=0;

// while(a>0)
// {
//        let digit=a%10;
//        if(min<digit)
//        {
//         min=digit
//        }
//        a=Math.trunc(a/10)
// }
// console.log(min)

//sum of even digit and odd digit

// let a=12345;
// let odd=0;
// let even=0;

// while(a>0)
// {
//     let digit=a%10;

// if(digit%2==0)
// {
//     even+=digit;
// }
// else{
//     odd+=digit;
// }
// a=Math.trunc(a/10)
// }
// console.log(odd ,even)

//strong no

// let a = 145;
// let sum = 0;
// let count = 0;
// while (a > 0) {
// let digit = a % 10;

// let fact = 1;
// for (let i = 1; i <= digit; i++)
//     {
//         fact*=i
//     }

//     sum+=fact;
//     a=Math.trunc(a/10)
// }

// console.log(sum)

//atomorphic no

// let a=25
// let temp=a
// let b=a*a

// let i=1;

// while(a>0)
// {
//        i*=10;
//        a=Math.trunc(a/10);
// }

// if(b%i==temp)
// {
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// //prime digit
// let n=12345;

// while(n>0)
//     {
//     let count=0;
//     let digit=n%10;
//     for(let i=digit;i>=1;i--)
//     {
//         if(digit%i==0)
//         {
//             count++;
//         }

//     }

//     if(count==2)
//         {

//             console.log(digit);
//         }
//         n=Math.trunc(n/10)
// }

//perfect no

// function perfect(n)
// {
//     let sum = 0;

//     for (let i = 1; i <= Math.floor(n/2); i++) {
//         if (n % i == 0) {

//             sum+=i;
//         }
//     }

//     return sum===n;
// }

// let guessNo=true;

//     for(let i=1;i<=1000;i++)
//     {

//             if(perfect(i))
//             {
//                 if(guessNo)
//                 {
//                    console.log(i)
//                 }
//                 guessNo=!guessNo
//             }

// }

//alternate fibo series;

// let a=0;
// let b=1;
// let c=0;
// let flag=true;
// let d=5;

// for(let i=2;i<=10;i++)
// {
//     c=a+b;
//     if(flag)
//      {
//         // if(c<d);
//             console.log(c);
//         }
//         // {
//         // console.log(true)
//         // }

//         a=b;
//         b=c;
//         flag=!flag;

// // }

// //alternate perfect no

// let flag = true;
// for (let i = 1; i <= 1000; i++) {
//   if (perfect(i)) {
//     if (flag) {
//       console.log(i);
//     }
//     flag =! flag;
//   }
// }

// function perfect(n) {
//   let sum = 0;
//   for (let i = 1; i < n; i++) {
//     if (n % i == 0) {
//       sum += i;
//     }
//   }
//   return sum==n;
// }

// second maximum pallindrome

// let largest=0;
// let second=0;
// for(let i=100;i>=1;i--)
// {
//     if(pallindrome(i))
//     {
//         if(i>largest)
//         {
//             second=largest;
//             largest=i;
//         }
//         else if (i > second && i < largest) {
//             second = i;
//         }
            
           
//     }
// }

// if (second !== -1) {
//     console.log(`The second largest palindrome number is: ${second}`);
// } else {
//     console.log('No second largest palindrome number found.');
// }

// function pallindrome(n) {
//   let temp = n;
//   let rev = 0;
//   while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = Math.trunc(n / 10);
//   }
//   return temp == rev;
// }


//second largest prime no

// let largest=-1;
// let second=-1;



// for(let i=23;i>=1;i--)
// {
//     if(isPrime(i))
//     {
//             //  if(i>largest)
//             //  {
//             //     second=largest;
//             //     largest=i;
//             //  }
//             //  else if(i>second && largest>i)
//             //  {
//             //     second=i;
//             //  }

//     }
// }

// if(second!=-1)
// {
//     console.log(second)
// }

// function isPrime(n)
// {
//     let count=0;

//     for(let i=1;i<=n;i++)
//     {
//         if(n%i==0)
//         {
//             count++;
//         }
//     }

//     return count==2;

// }



