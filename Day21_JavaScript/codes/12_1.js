const arrayLike = {
  0: 'Value 0',
  1: 'Value 1',
  length: 2,
};

var realArray = [];
for (const element in arrayLike) {
  realArray.push(element);
}

console.log(realArray);
