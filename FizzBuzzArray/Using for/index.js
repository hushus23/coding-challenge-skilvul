// Mencari mengubah angka fizz buzzBuat fungsi yang menerima parameter data array
// Buat fungsi yang menerima parameter data array
// Kembalikan dalam bentuk boolean

function generateOutput(num) {
  let output = "";
  if (num % 3 === 0) {
    output += "Fizz";
  }
  if (num % 5 === 0) {
    output += "Buzz";
  }
  return output || num;
}

let fizzbuzzArray = [];

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numArray.length; i++) {
  fizzbuzzArray.push(generateOutput(numArray[i]));
}

console.log(fizzbuzzArray); 





  
  