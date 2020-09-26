// alert("hello logic");

var n = prompt("Masukan jumlah perulangan");
var nInt = parseInt(n);

// for (var a = 1; a <= nInt; a++) {
//   document.write("hello wolrd " + a + " kali <br>");
// }

// document.write("<hr>");
// document.write("<br>");

// for (var y = 1; y <= nInt; y++) {
//   for (var x = 1; x <= nInt; x++) {
//     document.write("+");
//   }
//   document.write("<br>");
// }
// document.write("<hr>");
// document.write("<br>");

// for (var y = 1; y <= nInt; y++) {
//   for (var x = 1; x <= nInt; x++) {
//     if (y == x) {
//       document.write("*");
//     } else {
//       document.write("-");
//     }
//   }
//   document.write("<br>");
// }

// document.write('<hr>')
// document.write('<br>')

document.write("<h1>Logic Challenge</h1>");
document.write("<h2>Soal No 1</h2>");

for (var y = 1; y <= nInt; y++) {
  for (var x = 1; x <= nInt; x++) {
    if (y == x) {
      document.write("* ");
    } else {
      document.write("- ");
    }
  }
  document.write("<br>");
}

document.write("<h2>Soal No 2</h2>");

for (var y = 1; y <= nInt; y++) {
  for (var x = 1; x <= nInt; x++) {
    if (x == nInt + 1 - y) {
      document.write("* ");
    } else {
      document.write("- ");
    }
  }
  document.write("<br>");
}
document.write("<h2>soal no 3</h2>");

for (var y = 1; y <= nInt; y++) {
  for (var x = 1; x <= nInt; x++) {
    if (y == x || x == nInt + 1 - y) {
      document.write("*");
    } else {
      document.write("- ");
    }
  }
  document.write("<br>");
}
