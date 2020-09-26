var name = [1, 3, 5, 7, 9];

var nameReduce = name.reduce((val, element) => {
  return val + element;
});

console.log(nameReduce);
