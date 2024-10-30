function sumNums (num)
{
let sum = 0;
let remainder = 0;




for (let index = 0; num > 0; index++) {
  remainder = num % 10;
  sum += remainder;
num /= 10;
num -= remainder / 10;


}
console.log(sum)
}

