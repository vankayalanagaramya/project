
//declare an array
let arr=[];

//stack operation push -- inserts an element 11 to arr
arr.push(11);

//stack operation push -- inserts an element 5 to arr
arr.push(5);

//stack operation push -- inserts an elements 2,7 to arr
arr.push(2,7);

console.log(`elements in the array are [${arr}]`);

//stack operation pop -- deletes the last element from the arr i.e, 7
let del=arr.pop(); 
console.log(`elements after deletion are [${del}]`);
console.log(`elements after deletion are [${arr}]`);