// document.write("hello");

// var array = [1, 2, 3, 4];
// var arrayBaru = [];

// for (x = 0; x < array.length; x++) {
//   arrayBaru.push(array[x] + 1);
// }
// document.write(arrayBaru);

// var number = [1, 2, 3];
// var genap = [];

// // genap.push(number[0] * 2);
// // genap.push(number[1] * 2);
// // genap.push(number[2] * 2);

// for (var n = 0; n < number.length; n++) {
//   genap.push(number[n] * 2);
// }

// document.write(genap);

var number = [1, 2, 3, 4, 5, 6];

//map
// var genap = number.map((value, key) => {
//   return value * 2;
// });

//filter
// var number2 = number.filter((value, key) => {
//   return value % 2 == 0;
// });

var hitungSeluruhElemen = number.reduce((akumulator, nilaiSaatIni) => {
  return akumulator + nilaiSaatIni;
});

console.log(hitungSeluruhElemen);
