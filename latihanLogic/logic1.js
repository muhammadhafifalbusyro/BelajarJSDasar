// mukadimah
// *********

//dengan cara statis

// document.write("*");
// document.write("*");
// document.write("*");
// document.write("*");
// document.write("*");
// document.write("*");
// document.write("*");
// document.write("*");
// document.write("*");
// document.write("<br>");
// document.write("*");
// document.write("*");
// document.write("*");
// document.write("*");
// document.write("*");
// document.write("*");
// document.write("*");
// document.write("*");
// document.write("*");
// for (var y = 1; y < 3; y++) {
//   for (var x = 1; x < 3; x++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// document.write("<hr>");

// document.write("*");
// document.write("*");
// document.write("<br>");
// document.write("*");
// document.write("*");
//dengan cara pengulangan

// for (var x = 1; x < 10; x++) {
//   document.write("*");
// }

// for (var y = 1; y < 10; y++) {
//   document.write(y + "<br>");
// }

// for (var y = 1; y < 10; y++) {
//   for (var x = 1; x < 10; x++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

var pola = "*";
var number = parseInt(prompt("masukan perulangan ?"));

for (var y = 1; y <= number; y++) {
  for (var x = 1; x <= number; x++) {
    if (x == 1 || x == number || y == number / 2) {
      document.write("* ");
    } else {
      document.write("- ");
    }
  }
  document.write("<br>");
}

document.write("<br>");

// for (var y = 1; y < 6; y++) {
//   for (var x = 1; x < 6; x++) {
//     if (y == 1) {
//       document.write(pola);
//     } else if (x == 1) {
//       document.write(pola);
//     } else if (x == 5) {
//       document.write(pola);
//     } else if (y == 3) {
//       document.write(pola);
//     } else {
//       document.write("-");
//     }
//   }
//   document.write("<br>");
// }
