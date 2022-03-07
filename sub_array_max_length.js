let arr=[0,-1,2,-1,5,-4];
let n=arr.length;
function maxLength(arr){
    for(let i=0;i<n;i++){
        let sum=0;
        for (let j=i;j<n;j++){
            sum+=arr[j];
            if(sum===0){
                let maxLen=(j+1)-i;
                let b =[];
                b.push(maxLen);
                console.log(b);
            }
        }
    }
}
maxLength(arr);
