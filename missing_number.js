/* This logic is used when the numbers in an array are in sequence

let arr = [3,4,5,7];
let n= arr.length;
//console.log(`length= ${n}`);
for(let i=0;i<arr.length-1;i++){
    let a=arr[i];
    let b=arr[i+1];
    //console.log(a,b);
    if(b!==a+1){
console.log(`The missing number is ${a+1}`);
    }
}
 */   
    
//When numbers in an array are not sorted
let arr = [1,2,3,4,5,6,7,8,9,10,11,15,13,18,12,16,17]
let n = arr.length;
//console.log(`no of elements in array is ${n}`);
let sumtotal= ((n+2) *(n+1))/2;
//console.log(`sum of n numbers is ${sumtotal}`);
var s=0;
for(var i=0;i<=arr.length-1;i++){
    //console.log(`The elements in array are ${arr[i]}`);
    s=s+arr[i];
}
//console.log(`after addition ${s}`);
console.log(`Missing element in the array is ${Math.abs(sumtotal-s)}`);