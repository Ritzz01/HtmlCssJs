//sum of digit in a given string

// let a = "ritika45@gmail.com";

// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a.charAt(i) >= '0' && a.charAt(i) <= '9') {
//     sum += Number(a[i])
//   }
// }
// console.log(sum);

//total no of vowels

// let vowel="Hello World"
// let arr=[...vowel]
// let count=0;
// for(let i=0;i<arr.length;i++)
// {
//        if(arr[i]=='a' || arr[i]=='e'||arr[i]=='o' || arr[i]=='u' || arr[i]=='i')
//        {
//         count++;
//        }
// }
// console.log( count);

// //total no of vowels  & consonant

// let vowel = "Hello World";
// let arr = [...vowel];
// let count = 0;
// let cons = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (
//     arr[i] == "a" ||
//     arr[i] == "e" ||
//     arr[i] == "o" ||
//     arr[i] == "u" ||
//     arr[i] == "i"
//   ) {
//     count++;
//   } else {
//     cons++;
//   }
// }
// console.log(count ,  cons)

//add sum and concat

// let arr='ritika89swrj1'

// let sum=0;
// let res=""
// for(let i=0;i<arr.length;i++)
// {
//       if(arr.charAt(i)>='0' && arr.charAt(i)<='9')
//       {
//         sum+=Number(arr[i]);
//       }
// }
// res=arr+sum
// console.log(res);

// reverse word in given sentence
// function reverse(n)
// {

//     let start=0;
//     let end=n.length-1
//     let res=""

//   for(let i=end;i>=start;i--)
//   {
//          res+=n[i]
//   }
//   console.log(res);

// }

// let a="hello world"
// reverse(a)

//anagram

let str1 = "decimal";
let str2 = "mediccal";
let H = new Array(26).fill(0);

if (str1.length != str2.length) {
  console.log("not anagram");
} else {
  for (let i = 0; i < str1.length; i++) {
    H[str1.charCodeAt(i) - 97] += 1;
  }

  for (let i = 0; i < str2.length; i++) {
    H[str2.charCodeAt(i) - 97] -= 1;

    if (H[str2.charCodeAt(i) - 97] < 0) {
      console.log("not anagram");
      break;
    }
  }

  if (H.every((count) => count == 0)) {
    console.log("anagram");
  }
}
