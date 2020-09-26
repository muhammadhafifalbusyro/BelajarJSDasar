// document.write("<h1>Jawaban Ujian</h1>");
// document.write("<br>");

// var n = 10;
// var nInt = parseInt(n);

// document.write("<h2>Soal No 1</h2>");
// for (var y = 1; y <= n; y++) {
//   for (var x = 1; x <= n; x++) {
//     if (y == x) {
//       document.write("* ");
//     } else {
//       document.write("- ");
//     }
//   }
//   document.write("<br>");
// }

// document.write("<h2>Soal No 2</h2>");
// for (var y = 1; y <= n; y++) {
//   for (var x = 1; x <= n; x++) {
//     if (x == n + 1 - y) {
//       document.write("* ");
//     } else {
//       document.write("- ");
//     }
//   }
//   document.write("<br>");
// }

// document.write("<h2>Soal No 3</h2>");
// for (var y = 1; y <= n; y++) {
//   for (var x = 1; x <= n; x++) {
//     if (x == n + 1 - y || y == x) {
//       document.write("* ");
//     } else {
//       document.write("- ");
//     }
//   }
//   document.write("<br>");
// }

// document.write("<h2>Soal No 4</h2>");
// for (var y = 1; y <= n; y++) {
//   for (var x = 1; x <= n; x++) {
//     if (x == n + 1 - y || y == x) {
//       document.write("* ");
//     } else if (x == n / 2 || y == n / 2) {
//       document.write("* ");
//     } else {
//       document.write("- ");
//     }
//   }
//   document.write("<br>");
// }

// document.write("<h2>Soal No 5</h2>");
// for (var y = 1; y <= n; y++) {
//   for (var x = 1; x <= n; x++) {
//     if (y >= x) {
//       document.write("* ");
//     } else {
//       document.write("- ");
//     }
//   }
//   document.write("<br>");
// }

// document.write("<h2>Soal No 6</h2>");
// for (var y = 1; y <= n; y++) {
//   for (var x = 1; x <= n; x++) {
//     if (x >= n + 1 - y) {
//       document.write("* ");
//     } else {
//       document.write("- ");
//     }
//   }
//   document.write("<br>");
// }

// document.write("<h2>Soal No 7</h2>");
// for (var y = 1; y <= n; y++) {
//   for (var x = 1; x <= n; x++) {
//     if (x <= n + 1 - y && y <= x) {
//       document.write("* ");
//     } else if (x >= n + 1 - y && y >= x) {
//       document.write("* ");
//     } else {
//       document.write("- ");
//     }
//   }
//   document.write("<br>");
// }

// document.write("<h2>Soal No 8</h2>");
// for (var y = 1; y <= n; y++) {
//   for (var x = 1; x <= n; x++) {
//     if (y == x) {
//       var ganjil = x * 2 - 1;
//       document.write(ganjil);
//     } else {
//       document.write("- ");
//     }
//   }
//   document.write("<br>");
// }

// document.write("<h2>Soal No 9</h2>");
// for (var y = 1; y <= n; y++) {
//   for (var x = 1; x <= n; x++) {
//     if (y == 1 || y == n || x == n + 1 - y) {
//       document.write("* ");
//     } else {
//       document.write("- ");
//     }
//   }
//   document.write("<br>");
// }

// document.write("<h2>Soal No 10</h2>");
// for (var y = 1; y <= n; y++) {
//   for (var x = 1; x <= n; x++) {
//     if (y == 1 || y == n) {
//       document.write("* ");
//     } else if (x == 1 && y <= n / 2) {
//       document.write("* ");
//     } else if (x == n && y >= n / 2) {
//       document.write("* ");
//     } else {
//       document.write("- ");
//     }
//   }
//   document.write("<br>");
// }

var n = 10;

// for (var y = 1; y <= n; y++) {
//   for (var x = 1; x <= n; x++) {
//     if (y == n / 2 && x <= n / 2) {
//       document.write("* ");
//     } else if (x == n / 2 && y >= n / 2) {
//       document.write("* ");
//     } else {
//       document.write("- ");
//     }
//   }
//   document.write("<br>");
// }

for (var y = 1; y <= n; y++) {
  for (var x = 1; x <= n; x++) {
    if (x == 1 && y == 1) {
      document.write("*");
    } else if (x == n / 2 && y == 1) {
      document.write("*");
    } else if (x == n && y == 1) {
      document.write("*");
    } else if (x == 1 && y == n / 2) {
      document.write("*");
    } else if (x == n / 2 && y == n / 2) {
      document.write("*");
    } else if (x == n && y == n / 2) {
      document.write("*");
    } else if (x == 1 && y == n) {
      document.write("*");
    } else if (x == n / 2 && y == n) {
      document.write("*");
    } else if (x == n && y == n) {
      document.write("*");
    } else {
      document.write("-");
    }
  }
  document.write("<br>");
}
