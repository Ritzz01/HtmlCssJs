// function upperCase(n)
// {
//        n=n.toUpperCase();
//        console.log(n);

// }
// upperCase("javascript")

// function upperCase(n) {
//   n.toUpperCase();
//   console.log(n);
// }
// upperCase("javascript");

//WAP to find occurence of each character

function occurence(n) {
  let arr = [...n];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == " ") continue;
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
        arr[j] = " ";
      }
    }
    // console.log(arr[i] + " " +count);
  }
}
occurence("banana");

//WAP a program to remove duplicate characters in a given string

function duplicate(n) {
  let arr = [...n];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == " ") continue;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr[j] = " ";
      }
    }
    // console.log(arr[i]);
  }
}
duplicate("banana");

//WAP to find maximum repeated characters in a given string

function max(n) {
  let arr = [...n];

  let max = 0;
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    let count = 1;

    if (arr[i] == " ") continue;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
        arr[j] = " ";
      }
    }

    if (max < count) {
      max = count;
      res = arr[i];
    }
  }
  //console.log(res + " " + max);


}
max("banana");


function min(n)
{
    let arr = [...n];

    let min = 9;
    let res = "";
    for (let i = 0; i < arr.length; i++) {
      let count = 1;
  
      if (arr[i] == " ") continue;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          count++;
          arr[j] = " ";
        }
      }
  
      if (min > count) {
        min = count;
        res = arr[i];
      }
    }
   console.log(res+ " " + min);
    
  

}min("banana")


//remove duplicate words
//max occurence words