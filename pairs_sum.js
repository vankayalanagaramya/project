let arr = [1,4];
for(let i=0;i<=arr.length;i++){
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
