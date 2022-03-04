let arr=[1,2,3,2];
console.log('duplicates in the array is/are :');
for(let i=0;i<arr.length-1;i++){
    //console.log(arr[i]);
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            console.log(`${arr[i]}`);
        }
    }
}