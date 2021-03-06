// FOR

// uses a counter
// run while a condition is met

for(let i = 0; i < 10; i++) {
    console.log(`i = ${i}`);
  }
  
  // WHILE
  
  // works with booleans
  // run while a condition is 'true'
  
  let condition = false;
  let n = 0;
  
  while(condition == true) {
  
    console.log(`increment me!`);
    n++;
  
    if( n >= 113) {
      condition = false;
    }
  
  }
  
  
  // DO-WHILE
  
  // like a while loop
  
  // always runs at least ONCE
  
  let a = false;
  
  do {
    console.log(`run forest run`);
  } while(a == true);
  
  
  // SWITCH CASES
  
  // run until break or return
  
  // often more effective than large if-else statments
  
  let num = 11;
  
  switch(num) {
    case 0:
      console.log(`number is zero`);
      break;
    case 1:
      console.log(`number is one`);
    case 4:
      console.log(`we are now at 4`);
    case 10:
      console.log(`we've reached ten!`)
      break;
    default:
      console.log(`something went wrong`);
  }
  
  // EXAMPLE FLOW CHART
  // https://i.stack.imgur.com/dr2hY.png
  
  let i = 2;
  
  while (i <= 6){
    console.log(i+1);
    i = i + 2;
  }
  
  console.log("");
  
  for(let i = 2; i <= 6; i = i + 2){
    console.log(i+1);
  }