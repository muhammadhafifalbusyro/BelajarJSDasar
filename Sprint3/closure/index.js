// closure

function perkalian(a) {
  return function (b) {
    return a * b;
  };
}

var kali = perkalian(12);

console.log(kali(5));
