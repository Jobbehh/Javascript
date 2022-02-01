`use strict`;

// let bottles = "bottle"
// let bottlesleft = "No more bottles of beer on the wall"


for (a = 99; a >= 1; a--) {
    if (a == 1) {
      let bottles = "bottle";
      let bottlesleft = "No bottles of beer on the wall, Go to the store and buy some more, 99 bottles of beer on the wall.";
    } else {
      bottles = "bottles";
      bottlesleft = a - 1 + " bottles of beer on the wall!";
    } console.log(a+ " " + bottles + " of beer on the wall,");
    console.log(a+ " " + bottles + " of beer,");
    console.log("Take one down, pass it around,");
    console.log(bottlesleft);
    } 
    