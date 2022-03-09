//This program finds pair of integers equal to a target sum
let arr = [1,4,2,5,7,-2];
for(let i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        var s=arr[i]+arr[j];
        if(s===6){
            console.log(arr[i],arr[j]);
        }
        }
    }
    if(s!==6)
    {
        console.log("pair does not exists");
    }