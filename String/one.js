function Reverse(a) {
  let start = 0;
  let end = a.length - 1;

  let rev=""
  for (let i = end; i >= start; i--) {
     rev+=a[i]
  }
  console.log(rev);
  console.log(a);

  if(rev===a)
  {
    console.log(true);
    
  }
  else
  {
    console.log(false);
    
  }
  
}
Reverse("pap");
