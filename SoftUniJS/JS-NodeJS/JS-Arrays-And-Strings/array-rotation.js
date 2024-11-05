function rotate(array, numRotations){
//array Shift to get the first element and move every other
//array Push to insert the shifted Element infront of all other elements
for (let index = 0; index < numRotations; index++) {

   let shiftedNum = array.shift();
    array.push(shiftedNum);
}

let result = array.join(' ').toString();
console.log(result);
}


