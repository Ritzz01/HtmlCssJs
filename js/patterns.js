let res=""
let n=6



for (let i = 8; i >= 3; i--) 
{
    for (let j = i; j >= 3; j--) {
        res += j + " ";
      }
    for(let j=n-i+1;j>=3;j--)
    {
         res+=j+" "
    }
    res+="\n"
}
console.log(res);
