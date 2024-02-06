let array = [2,5,3,8];
let number = 3;
let result = undefined; // initialize result as undefined
for (let element of array) { // loop through the array
  if (element === number) { // check if element matches number
    result = element; // assign result to element
    break; // exit the loop
  }
}
if (result === number ) {
  console.log(result); 
} else {
  console.log("Undefined");
}

console.log(result);