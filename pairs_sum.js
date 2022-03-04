let arr = [1,4,3,2,5,12,14,54,23,0,6];
for(let i=0;i<=arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        let s=arr[i]+arr[j];
        if(s===6){
            console.log(arr[i],arr[j]);
        }
    }
}
