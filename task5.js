let strictA = true;
let strictB = 1;
console.log(strictA == strictB);    //  True
console.log(strictA === strictB);  // False

console.log(strictA != strictB);    // False
console.log(strictA !== strictB);   //True


let age=66
if (age>=18 && age <=65){
    console.log("age within the range");
}   else if (age < 18) {
    console.log("age is below our range");
}   else if (age > 65) {
    console.log ("person is an OAP");
}   else {
    console.log("age not in range");
}

// syntax: lettibleName = condition ? val1 : val2;
let age2=49

let answer=age2 >=50 ? "50 or above" : "50 or below" ;
console.log(answer)