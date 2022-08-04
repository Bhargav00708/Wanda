var howManyOddNumber = 100;
var oddPrimeArr = [];
var oddPrimeCount = 0;
var n = 2;
while(true)
{
    var count = 0;
    if(n % 2 == 0)
    {
        n++;
        continue;
    }
    for(var i = 1; i <= n; i++)
    {
        if(n % i == 0)
        {
            ++count;
        }
    }
    if(count == 2)
    {
        oddPrimeArr.push(n);
        oddPrimeCount++;
    }
    n++;
    if(oddPrimeCount == howManyOddNumber)
    {
        break;
    }
}
console.log(oddPrimeArr);