// var number = -10;
// function armstrong(number)
// {
//     if(number < 0)
//     {
//         return `Negative number is not allowed`;
//     }
//     var sum = 0;
//     var stringNumber = number.toString();
//     for(var i = 0; i < stringNumber.length; i++)
//     {
//         sum += Math.pow(stringNumber[i],3);
//     }
//     if(sum == number)
//     {
//         return `Armstrong number`;
//     }
//     return `Not armstrong number`;
// }

// console.log(armstrong(-152));

// with number
var armstrongOrNot = 151;
const tempNumber = armstrongOrNot;
var sum = 0;
for (var i = 0; i < armstrongOrNot.toString().length; i++) {
    var cubeNumber = Math.floor(armstrongOrNot) % 10;
    armstrongOrNot = Math.floor(armstrongOrNot) / 10;
    sum += Math.pow(cubeNumber, 3);
}
if (tempNumber == sum) {
    console.log(`Armstrong number`);
}
else {
    console.log(`Not armstrong number`);
}