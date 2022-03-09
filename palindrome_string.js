let str="MADAM";

function reverseString(str){
 let revstr = "";
 for(i=str.length-1;i>=0;i--){
     revstr +=str[i];
     //console.log(revstr);
 }
 return revstr;
}

if(reverseString(str)===str){
    console.log(`The string ${str} is palindrome`);
}
else{
    console.log(`The string ${str} is not palindrome`)
}
