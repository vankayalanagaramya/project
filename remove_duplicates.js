//remove duplicates using filter method

let arr = [1,2,3,4,2,3,6,4,2,4];

//let b = arr.indexOf(2,2);
//console.log(b);
  
    function remDup(arr) {
        return arr.filter((item, 
            index) => arr.indexOf(item) === index);
    }
  
    console.log(remDup(arr));