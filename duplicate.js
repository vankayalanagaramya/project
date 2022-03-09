//This program is to identify the duplicates in a given array

let arr=[1,2,3,2,6,9,1];
console.log('duplicates in the array is/are :');
for(let i=0;i<arr.length-1;i++){
    //console.log(arr[i]);
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            console.log(`${arr[i]}`);
        }

    }
}