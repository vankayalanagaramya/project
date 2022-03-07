//completed writing the logic in 10 min but facing issue in writing console stmt for "pair does not exists"

//pgm to calculate target sum from the pair of integers of an array


//let req_sum=8;
function pairSum(arr, n, req_sum){
    const result = [];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j] === req_sum){
            result.push([arr[i],arr[j]]);
        }
    }
}
console.log(result);
return result;
//console.log();
}
let arr = [0,5,1,7,3,8];
let n = arr.length;
if(pairSum(arr, n, 8)){
console.log(`pair exists`);
}
else{
    console.log("pair not exist");
}