// Array

// Array adalah tipe data yang dapat memiliki lebih dari satu nilai/ tipe data , bisa berupa number, string, array, object, boolean
// Array ditandai dengan kurung siku []
// struktur Array terdiri dari index dan value/nilai

document.write("<h2>Array Declaration</h2>");

// cara deklarasi Array
var array = ["string", 1, true, { object: "value" }];

// cara pemanggilan Array
// Array dipanggil berdasarkan indexnya
// index pada array dimulai dari 0,1,2,3,4

document.write(array[0]); // outputnya 'string'
document.write("<br>");
document.write(array[1]); // outputnya 1
document.write("<br>");
document.write(array[2]); // outputnya true

document.write("<hr>");

document.write("<h2>Array Mutidimensi</h2>");
// Pendeklarasian Array Mutidimensi
// Array multidimensi adalah array yang didalamnya ada array lagi
var mobil = [
  ["avanza", 2012],
  ["kijang", 2013],
  ["alphard", 2012],
];
//Pemanggilan Array Multidimensi
// deklarasikan dulu index array pertama, lalu deklarasikan index array yang ke dua

document.write(mobil[0][0]);
document.write("<br>");
document.write("<hr>");
// pemanggilan di atas adalah index pertamanya 0, dan index keduanya 0
// outputnya avanza

document.write("<h2>Method Array</h2>");
// Method array adalah fungsi manipulasi pada array
var santri = ["Rais", "Yoga", "Yamin"];

// menghitung panjang element pada array
// length
document.write(santri.length); // output: 3
document.write("<br>");

// menambah element baru di belakang array
// push()
santri.push("Abdul");
document.write(santri); // output : Rais, Yoga, Yamin,Abdul
document.write("<br>");

//menghilangkan element terbelakang pada array
// pop()
santri.pop();
document.write(santri); // output: Rais, Yoga, Yamin
document.write("<br>");
document.write("<hr>");

// Object
document.write("<h2>Object Declaration</h2>");
// object sama dengan array yaitu tipe data yang dapat memiliki banyak nilai atau value
//object ditandai dengan kurung kurawal
//Struktur object terdapat key, dan value

var object = { key1: "value1", key2: "value2" };

// pemanggilan object
// object dipanggil berdasarkan keynya

document.write(object.key1); // output : value1
document.write("<br>");
document.write(object.key2); // output : value2

document.write("<hr>");

document.write("<h2>Properti , Methods</h2>");

// Properti dan Methods
// Properti adalah variabel di dalam object
// methods adalah function di dalam object

var mobil = {
  warna: "hitam", // object mobil memiliki properti warna
  tahun: 2019, // object mobil memiliki properti tahun
  gas: function () {
    return "mobil di gas";
  }, // object mobil memiliki method gas
  gigi: function (gigi) {
    return " sekarang di gigi " + gigi;
  },
};

document.write(mobil.warna); //output:hitam
document.write("<br>");
document.write(mobil.tahun); // output:2019
document.write("<br>");
document.write(mobil.gas()); // output: mobil di gas
document.write("<br>");
document.write(mobil.gigi(1)); // output: sekarang di gigi 1

document.write("<hr>");

document.write("<h2>Object Mutable</h2>");

// Nilai di dalam object dapat berubah disebut object mutable

var santriBaru = {
  nama: "aris",
};
santri.nama = "Budi";

document.write(santriBaru.nama);

document.write("<hr>");

document.write("<h2>Practice</h2>");
var santriPondokIt = [
  {
    nama: "Hafif",
    jurusan: "Programmer",
  },
  {
    nama: "Adi",
    jurusan: "Multimedia",
  },
];

document.write("<p>Output Statis</p>");

document.write(santriPondokIt[0].nama); //output : Hafif
document.write("<br>");
document.write(santriPondokIt[0].jurusan); //output : Programmer
document.write("<br>");

document.write(santriPondokIt[1].nama); //output : Adi
document.write("<br>");
document.write(santriPondokIt[1].jurusan); //output : Multimedia
document.write("<br>");

document.write("<p>Output Dinamis</p>");

for (var n = 0; n < santriPondokIt.length; n++) {
  document.write(santriPondokIt[n].nama);
  document.write("<br>");
  document.write(santriPondokIt[n].jurusan);
  document.write("<br>");
}
