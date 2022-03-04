const arr = [1, 3, 4, 3, 5, 3,4, 6, 8, 8];
const findDuplicates = (arr = []) => {
   let map = {};
   let res = [];
   for(let i = 0; i < arr.length; i++) {
      if(map[arr[i]]) {
         if(map[arr[i]] === 1) {
            res.push(arr[i]);
         }
         map[arr[i]] = map[arr[i]] + 1;
      } else {
         map[arr[i]] = 1;
      };
   };
   return res;
};
console.log(findDuplicates(arr));