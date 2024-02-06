// Mencari mengubah angka fizz buzzBuat fungsi yang menerima parameter data array
// Buat fungsi yang menerima parameter data array
// Kembalikan dalam bentuk boolean
function fizzBuzz (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (num % 15 === 0) {
        result.push ("FizzBuzz");
      } else if (num % 3 === 0) {
        result.push ("Fizz");
      } else if (num % 5 === 0) {
        result.push ("Buzz");
      } else {
        result.push (num.toString ());
      }
    }
    return result;
  }

  console.log (fizzBuzz ([21, 4, 6, 7]));