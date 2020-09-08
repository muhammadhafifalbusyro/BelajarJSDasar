/*1. diketahui panjang = 10 cm, lebar = 5cm dan tinggi 8cm
hitunglah permukaan blok dan volume blok sehingga menampilkan output pada web
diketahi :
p =..cm
l =..cm
t =..cm
ditanyakanm
volume dari blok adalah .......cm3
luas permukaan blok adalah .. cm2
volume block dalam liter....l
volume blok ketika di perbesar 3 kali...cm3

2.diketahui segitiga memiliki alas=10, tinggin = 12cm, hitunglah luas segitiga dan memiliki keluran oupunt input?

dik:
alas =..cm
tinggi =..cm
ditanyakn 
luas segitiga adalaj ....m2
*/
//Dik
var p=10
var l=5
var t=8
var hasil1= p*l*t
//Cari Permukaan luas
var permukaan = p*l+p*t+l*t
document.write('diketahui<br> p=10 <br>l=5 <br> t=8 <br>')
document.write('Luas Permukaan Blok Adalah '+permukaan*2 +'cm2')
document.write("<br>")
//Cari volume dari balok
var vol = p*l*t
document.write('volume dari balok adalah '+vol +'cm3')
document.write("<br>")
//volume block dalam liter
var vol2 = p*l*t
var lit = 1000
var hasil = vol2 / lit
document.write('Volume Blok dalam Liter '+ hasil+' L')
document.write("<br>")
//volume blok ketika di perbesar 3 kali...cm3
document.write('Volume blok ketika diperbesar 3 kali '+ vol*6 +'cm3')
document.write("<br>")
//Soal 2
var alas = 10
var tinggi = 12
var akhir = alas*tinggi
document.write('<hr>Diketahui <br> alas=10 <br> tinggi=12 <br>')
document.write('Luas Segitiga adalah '+ akhir*0.5 +'cm2')