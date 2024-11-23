function min(num1, num2, num3)
{
let smallNum;

if(num1 < num2)
{
smallNum = num1;
}
else
{
    smallNum = num2;
}
if(smallNum < num3)
{
    return smallNum;
}
else
{
    return num3;
}

}

