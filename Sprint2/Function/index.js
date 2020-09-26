//document.write("hello world");

// function adalah sebuah sub program ynag dapat dijalankan brulang kali

// syntax atau aturan dalam membuat function

// function namaFunction(){
//     // action
//     document.write('hello')
// }

// namaFunction()

// //

// var namaVariabel = 'string'

// function namaFunction(parameter) {
//   console.log(parameter);
// }

// namaFunction("string");

// function luasPersegi(sisi) {
//   document.write(sisi * sisi);
// }

// luasPersegi(12);

// document.write("<br>");

// function luasPersegiPanjang(panjang = 0, lebar = 0) {
//   //   document.write(typeof panjang);
//   //   document.write(typeof lebar);
//   alert(panjang * lebar);
//   var konfirmasi = confirm("apakah ingi diulang ?");
//   if (konfirmasi == true) {
//     var panjangPrompt = prompt("masukan panjang ?");
//     var lebarPrompt = prompt("masukan lebar?");

//     var panjangPromptInt = parseInt(panjangPrompt);
//     var lebarPromptInt = parseInt(lebarPrompt);

//     luasPersegiPanjang(panjangPromptInt, lebarPromptInt);
//   } else {
//     alert("tidak usah deh");
//   }
// }

// var panjangPrompt = prompt("masukan panjang ?");
// var lebarPrompt = prompt("masukan lebar?");

// var panjangPromptInt = parseInt(panjangPrompt);
// var lebarPromptInt = parseInt(lebarPrompt);

// luasPersegiPanjang(panjangPromptInt, lebarPromptInt);

function hitungLuas() {
  var ketik = prompt("Pilih luas ? segitiga, persegi, lingkaran");
  document.write(ketik);
  if (ketik == "segitiga") {
    var alas = prompt("masukan nilai alas");
    var tinggi = prompt("masukan tinggi");
    var alasInt = parseInt(alas);
    var tinggiInt = parseInt(tinggi);

    var luas = (alasInt * tinggiInt) / 2;
    alert(luas);

    var konfirmasi = confirm("apakah ingin diulang ?");
    if (konfirmasi == true) {
      hitungLuas();
    } else {
      alert("nooo!");
    }
  }
}

hitungLuas();
