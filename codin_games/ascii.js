/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
const L = 4;
const H = 5;
const T = "MAN HAT TAN";
var store = [
  ' #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ### ',
  '# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #   # ',
  '### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #   ## ',
  '# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #       ',
  '# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###  #  '
];
var gArray = [];
for (var k = 0; k < T.length; k++) {
  var t = T[k].charCodeAt() - 65;
  if (T[k].charCodeAt() > 90 || T[k].charCodeAt() < 65) 
  {
    t = "Z".charCodeAt() - 65 + 1;
    var finalPrint = "";
    for (var i = 0; i < store.length; i++) {
      var tempString = "";
      for (var j = L * t; j < (L * t) + L; j++) {
        tempString += store[i][j];
      }
      if (!(i + 1 == store.length)) {
        finalPrint = finalPrint + tempString + '\n';
      }
      else {
        finalPrint = finalPrint + tempString;
      }
    }
    gArray.push(finalPrint);
  }
  else 
  {
    var finalPrint = "";
    for (var i = 0; i < store.length; i++) {
      var tempString = "";
      for (var j = L * t; j < (L * t) + L; j++) {
        tempString += store[i][j];
      }
      if (!(i + 1 == store.length)) {
        finalPrint = finalPrint + tempString + '\n';
      }
      else {
        finalPrint = finalPrint + tempString;
      }
    }
    gArray.push(finalPrint);
  }
}
// console.log(gArray);
var y = 0;
for (var k = 0; k < H; k++) {
  var tempString = "";
  for (var i = 0; i < gArray.length; i++) {
    for (var j = y; j < y + L; j++) {
      tempString += gArray[i][j];
    }
  }
  y = y + L + 1;
  console.log(tempString);
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
// console.log('answer');
//  process.stdout.write("I am TBG");
//  process.stdout.write("I am TBG");
// var util = require('util');

// for (var i = 0; i < 10; i++) {
//     util.
// }
// process.stdout.write(`lijoj`)