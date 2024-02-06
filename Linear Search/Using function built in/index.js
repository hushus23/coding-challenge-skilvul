// Mencari data pada array
// Buat fungsi yang menerima parameter angka yg ingin dicari dan data array
// Kembalikan dalam bentuk number
// Kembalikan undefined jika tidak dikembalikan

let array = [2,5,3,8];
let number = 3;
let result = array.find(element => element === number);
if (result === number ) {
    console.log(result); 
  } else {
    console.log("Undefined");
  }

console.log(result); 