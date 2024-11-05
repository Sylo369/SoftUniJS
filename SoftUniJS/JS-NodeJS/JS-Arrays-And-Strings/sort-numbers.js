function sort(array){
const sortedArr = [];

   array.sort(function (a, b) {
      return a - b;
    });
console.log(`Sorted input array is ${array}`)
 for (let index = 0; index < array.length; index++) {
  if(index % 2 == 0)
  {
    const element = array.pop();
    sortedArr.push(element);
  }
  else{
    const element = array.shift();
     sortedArr.push(element);
  }   
 }
 console.log(sortedArr)
 return sortedArr;
}

sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]); ///NEEDS TO BE FINISHED

//-3,  1,  3, 18, 31, 48, 52, 56, 63, 65