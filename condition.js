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

//inline decision using ? :
let firstName = {Ram : true};
let name = !firstName.Ram
? console.log('This is not the correct name')
: console.log('This is the firstname');