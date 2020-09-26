// soal 1
var transportasi = [
  {
    nama: "mobil",
  },
  {
    nama: "motor",
  },
];

var trs = transportasi.map((value, key) => {
  return value.nama;
});

console.log(trs);
