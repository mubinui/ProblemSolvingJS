var a = ['a', 9, [1,3,4],6,9,10];
a.push(1,2,3,4);
a.push(['Hello','melo']);
console.log(a);
console.log(a.pop());
console.log(a.shift(),' shift');//removes the first element
console.log(a.unshift(),' unshift');//
console.log('.............................................>> Set');
//var b = new Set(1,3,4,5,6,4,5);
var ac = [12,13,10,20,60,70];
console.log(ac.sort());
var ax = new Set([1,2,3,4,5,6,1,1,1,1]);
console.log(ax);

console.log('----------------------------------------------------------');
var testArray = [1,2,4,5,6,1,2,4];
console.log("Before : "+ JSON.stringify(testArray));
console.log(testArray.unshift(1,2,3));
console.log('------------------------------------------------------------')
console.log(testArray);
console.log(testArray.shift())

