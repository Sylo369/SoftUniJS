function sort(array) {
  const sortedArr = [];
  let arrayLength = array.length;
  const jaggedArray = array.sort(function (a, b) {
    return a - b;
  });

  for (let index = 0; index < arrayLength; index++) {
    if (index % 2 == 0) {
      const element = jaggedArray.shift();

      sortedArr.push(element);
    } else {
      const element = jaggedArray.pop();

      sortedArr.push(element);
    }
  }
  
  return sortedArr;
}

sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]); ///NEEDS TO BE FINISHED

//-3,  1,  3, 18, 31, 48, 52, 56, 63, 65
