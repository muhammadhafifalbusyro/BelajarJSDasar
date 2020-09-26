// Object
// tipedata yang dapat menampung banyak nilai

// structur obejct

// var namaObject = {
//   properti1: "string",
//   properti2: 12,
//   properti3: [12, 12, "nama"],
//   methods1: function () {
//     return "hello";
//     // document.write("hello");
//   },
// };

// document.write(namaObject.properti1);
// document.write("<br>");
// document.write(namaObject.properti3[2]);
// document.write("<br>");
// namaObject.methods1();

// var dokumen = {
//   tulis: function (parameter = "") {
//     document.write(parameter);
//   },
// };
// dokumen.tulis();

// var santri = {
//   nama: "Yoga",
// };

// santri.nama = "Yamin";
// santri.nama = "Fathul";

// document.write(santri.nama);

var santri = [
  {
    nama: "Yoga",
    jurusan: "mobile",
  },
  {
    nama: "Yamin",
    jurusan: "mobile",
  },
  {
    nama: "Iqbal",
    jurusan: "backend",
  },
  {
    nama: "faris",
    jurusan: "frontend",
  },
];
var filter = prompt("ketik jurusan ?");

for (var n = 0; n < santri.length; n++) {
  if (santri[n].jurusan == filter) {
    document.write("nama = " + santri[n].nama + "</br>");
    document.write("jurusan = " + santri[n].jurusan + "</br>");
    document.write("<br>");
  }
}
