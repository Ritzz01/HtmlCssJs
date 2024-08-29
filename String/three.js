// function occurence(arr)
// {
//          let n=arr.split(" ")

//          for(let i=0;i<n.length;i++)
//          {
//             let count=1;
//             if(n[i]==" ") continue;

//             for(let j=i+1;j<n.length;j++)
//             {
//                 if(n[i]==n[j])
//                 {
//                     count++;
//                     n[j]=" ";

//                 }
//             }
//            console.log(n[i] , count)
//          }

// }
// let a="Hello world hello world bello Hello"
// occurence(a)

// function duplicate(arr)
// {
//          let n=arr.split(" ")

//          for(let i=0;i<n.length;i++)
//          {

//             if(n[i]==" ") continue;

//             for(let j=i+1;j<n.length;j++)
//             {
//                 if(n[i]==n[j])
//                 {

//                     n[j]=" ";

//                 }
//             }
//            console.log(n[i] )
//          }

// }
// let a="Hello world hello world bello Hello"
// duplicate(a)

// function max(arr) {
//   let n = arr.split(" ");
// let max=0;
// let res=""
//   for (let i = 0; i < n.length; i++) {
//     let count=1;
//     if (n[i] == " ") continue;

//     for (let j = i + 1; j < n.length; j++) {
//       if (n[i] == n[j]) {
//         count++;
//         n[j] = " ";
//       }

//     }
//     if(count>max)
//     {
//       max=count;
//       res=n[i];
//     }
// }
// console.log(res,max);
// }
// let a = "Hello  hello hello world hello world bello Hello";
// max(a);

function minn(arr) {
  let n = arr.split(" ");
  let min = 9;
  let res = "";
  for (let i = 0; i < n.length; i++) {
      let count = 1;
    if (n[i] == " ") continue;

    for (let j = i + 1; j < n.length; j++) {
      if (n[i] == n[j]) {
        count++;
        n[j] = " ";
      }
    }
    if (count < min) {
      min = count;
      res = n[i];
    }
  }
  console.log(res, min);
}
let a = " Hello  hello hello world hello world bello Hello";
minn(a);
