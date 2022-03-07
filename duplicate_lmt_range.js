let arr = [2,5,1,5,6,9,2];
let n=arr.length;

function duplicate(arr){
    for(let i=0;i<n;i++){
        for(j=i+1;j<n;j++){
            if(arr[i]===arr[j]){
                console.log(`duplicates are ${arr[i]}`);
            }
        }
    }
}
duplicate(arr);