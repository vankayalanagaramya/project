//if..else

let cookie = 'Marie gold';
if(cookie !=='Marie gold' ){
    console.log(`It is not a cookie`);
}
else{
    console.log(`The best cookie is ${cookie}`);
}
//switch
let fruit = 'Mango';
switch(fruit){
    case 'orange': console.log(`Its Orange!!`);
    case 'banana': console.log(`Its Banana!!`);
    case 'melon': console.log(`Its Melon!!`);
    case 'Mango': console.log(`King of fruits is ${fruit}!!`);
}

//ternary loop ? :
let firstName = {Ram : false};
let name = !firstName.Ram
? console.log('This is not the correct name')
: console.log('This is the firstname');

//for loop
for(let i=0;i<=10;i++){
    console.log(i);
}

let pet='dog';
console.log(pet.length);
for(let i=1;i<=(pet.length);i++){
    console.log(i);
}

//while
let i=9;
while(i>1){
    console.log(i);
    i--;
}

// traditional functions
let a,b,c,d;
function multiply(a,b){
    return a*b;
}
function divide(c,d){
    return c/d;
}
multiply(1,7);
divide(4,2);
