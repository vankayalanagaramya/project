let arr = [0,2,3,-5,6,-2,1];
let n =arr.length;
for(let i=0;i<n;i++){
    let sum = 0;
    for(j=i;j<n;j++){
        sum=sum+arr[j];
        if(sum===5){
            console.log(arr.slice(i,j+1));
        }
    }
}
