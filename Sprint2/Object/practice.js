document.write("<h2>Daftar Nilai Santri</h2>");

function masukanNilai() {
  var data = [];

  var nama = prompt("Masukan Nama lengkap ?");
  var nilai1 = parseInt(prompt("Masukan nilai 1"));
  var nilai2 = parseInt(prompt("Masukan nilai 2"));
  var nilai3 = parseInt(prompt("Masukan nilai 3"));

  var rataRata = (nilai1 + nilai2 + nilai3) / 3;

  data.push({
    nama: nama,
    nilai1: nilai1,
    nilai2: nilai2,
    nila13: nilai3,
    rataRata: rataRata,
  });

  for (var n = 0; n < data.length; n++) {
    document.write("Nama Lengkap : " + data[n].nama + "<br>");
    document.write("Nilai1 : " + data[n].nilai1 + "<br>");
    document.write("Nilai2 : " + data[n].nilai2 + "<br>");
    document.write("Nilai3 : " + data[n].nila13 + "<br>");
    document.write("Rata-rata : " + data[n].rataRata + "<br>");
    document.write("<br>");
  }
  var konfirmasi = confirm("Ulangi ?");
  konfirmasi ? masukanNilai() : alert("ok");
}

masukanNilai();
