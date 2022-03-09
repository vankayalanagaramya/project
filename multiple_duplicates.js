//This program finds the multiple duplicates in  a given array

let arr = [1,3,4,4,2,4,6,2,6,5,7,1,9,1];
let findDuplicates = (arr = []) => {
   let map = {};
   var res = [];
   for(let i = 0; i < arr.length; i++) {
      if(map[arr[i]]) {
         if(map[arr[i]] === 1) {
            res.push(arr[i]);
         }
         map[arr[i]] = map[arr[i]] + 1;
      } else {
         map[arr[i]] = 1;
      }
   }
   return res;
}
if (findDuplicates(arr)){
   console.log(`Duplicates exists: [${findDuplicates(arr)}]`)
}
else if(findDuplicates(arr)===[]) {
   console.log('There are no duplicates');
}