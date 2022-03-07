//completed writing the logic in 10 min but facing issue in writing console stmt for "pair does not exists"

//pgm to calculate target sum from the pair of integers of an array

let arr = [0,5,1,7,8,3];
let n = arr.length;
//let req_sum=8;
function pairSum(arr, n, req_sum){
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j] === req_sum){
            console.log(`${arr[i]},${arr[j]}`);
        }
    }
}
return false;
}
if (pairSum(arr, n, 8)){
    console.log("valid pair exists");
}
else{
    console.log("pair does not exists");
}

