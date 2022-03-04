// traditional functions
let a,b,c,d;
function multiply(a,b){
    console.log(a*b);
}
function divide(c,d){
    console.log(c/d);
}
multiply(1,7);
divide(4,2);

//arrow functions
const add = (a1,a2) =>{
     console.log(a1+a2);
}
add(7,12);

const subtract = (s1,s2) => (s1-s2);
console.log(subtract(9,5));