function print(array, interval) {
    let result = [];
for (let index = 0; index < array.length; index+= interval) {
   result.push (array[index]);
}

return(result);
}

print(["5", "20", "31", "4", "20"], 2);
