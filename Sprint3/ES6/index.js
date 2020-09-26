// // document.write("hello world");

// // Pendeklarasian Var

// // var nama = "hafif";
// // var nama = "dayat";

// // console.log(nama);

// // // pendeklarasian Let

// // let nama2 = "Rafa";
// // {
// //   let nama2 = "rais";
// // }

// // console.log(nama2);

// // class PersegiPanjang {
// //   hitungLuasPersegiPanjang(panjang, lebar) {
// //     return panjang * lebar;
// //   }
// // }

// // const Luas = new PersegiPanjang();

// // console.log(Luas.hitungLuasPersegiPanjang(12, 5));

// // class Segitiga {
// //   constructor(alas, tinggi) {
// //     this.alas = alas;
// //     this.tinggi = tinggi;
// //   }
// // }

// // const SG = new Segitiga();
// // console.log(SG);

// // class Segitiga {
// //   constructor(alas, tinggi) {
// //     this.alas = alas;
// //     this.tinggi = tinggi;
// //   }
// //   luasSegitiga() {
// //     return (this.alas * this.tinggi) / 2;
// //   }
// // }

// // const SG = new Segitiga(12, 10);

// // console.log(SG.luasSegitiga());

// class Santri {
//   sayHello(nama = "dayat", umur = 23) {
//     return nama + umur;
//   }
// }

// class Salam extends Santri {
//   constructor(salam) {
//     super();
//     this.salam = salam;
//   }
//   sayHelloWithSalam(nama, umur) {
//     return this.salam + this.sayHello(nama, umur);
//   }
// }

// const say = new Salam("Assalamualaikum");
// console.log(say.sayHelloWithSalam("Wahyu", 12));

// document.write("name");

// Pendeklarasian baru di ES 6
// Var, Let,Const

// function nama() {
//   console.log("nama");
// }
// function hewan() {
//   console.log("hewan");
// }
// // nama();
// hewan();

// {

//   {
//     // action
//     var number = 1;
//     let number2 = 2;

//   }
//   {
//     //action 2
//     console.log(number);
//     console.log(number2);
//   }
// }

// let number = 1;
// let number = 2;
// console.log(number);

// const nama = "Yamin";
// nama = "Yoga";

// console.log(nama);

// arrow function

// luasSegitiga = (alas, tinggi) => (alas * tinggi) / 2;

// console.log(luasSegitiga(12, 5));

//1. luas lingkaran, persegi, persegi panjang, kubus,balok

//class
// class itu adalah kumpulan object yang di dalamnya bisa di instansiasi properti atau method dan dapat diwariskan

// class Santri {
//   constructor(paramNama) {
//     this.nama = paramNama;
//     this.usia = 19;
//     this.jurusan = "mobile development";
//   }
//   sayHello = (params = "Hello ") => params;
//   sayHello2 = (params = "hello ") => params + this.nama;
// }

// // let promptNama = prompt("masukan nama");
// let NewSantri = new Santri("yoga");

// console.log(NewSantri.sayHello("hello siap "));
// console.log(NewSantri.sayHello2("hello siap "));
// console.log(NewSantri.nama);

class Rumah {
  tembok = (param) => " temboknya berwarna " + param;
}

class RumahRais extends Rumah {
  constructor() {
    super();
    this.nama = "Rais";
  }
  tembokRumahRais = (warna) => "Rumah " + this.nama + this.tembok(warna);
}
let NewRUmahRais = new RumahRais();
console.log(NewRUmahRais.tembokRumahRais("hijau"));
