let units = 359;

function electricity() {
  let amount = 0;

  if (units <= 200) {
    amount = 0;
  } else if (units <= 250) {
    amount = (units - 200) * 3;
  } else if (units <= 300) {
    amount = (units - 250) * 5 +( 50 * 3);
  } else {
    amount = (units - 300) * 5 + (50 * 3) + (50 * 5);
  }

  console.log("The amount is:", amount);
}

electricity();
