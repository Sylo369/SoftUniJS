function sameNumbers (num)
{
let sum = 0;
let remainder = 0;
let same = true;
let lastNum = num % 10;
for (let index = 0; num > 0; index++) {
  remainder = num % 10;
  sum += remainder;
  
if(remainder == lastNum)
{
lastNum = remainder;
}
else{
    lastNum = remainder
    same = false;
}

  num /= 10;
  num -= remainder / 10;
}

console.log(same);
console.log(sum);

}

sameNumbers(12345);