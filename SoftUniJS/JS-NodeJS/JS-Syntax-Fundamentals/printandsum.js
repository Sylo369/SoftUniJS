function printAndSum(start, end){
let sum = null;
for (let index = start; index <= end; index++) {
    process.stdout.write(index + ' ');
    sum += index;
}
console.log();
console.log (`Sum: ${sum}`);
}

printAndSum(0, 26);