let arr=[2,6,3,7,-8,22,0];
let b = arr.sort(function(a,b) {return a-b});
console.log(`smallest integer is : ${b[0]} and largest integer is:${b[arr.length-1]} `);