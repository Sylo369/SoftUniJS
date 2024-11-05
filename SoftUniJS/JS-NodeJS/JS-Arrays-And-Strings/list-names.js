function names(array) {
array = array.sort();
let count = 1;
array.forEach(element => {
    console.log(`${count}.${element}`);
    count++;
});
}

names([
  "Echo",
  "John",
  "Kolin",
  "Bravo",
  "Golf",
  "Hotel",
  "Alpha",
  "Copper",
  "India",
  "Delta",
  "Falta",
]);