" use strict";
//                 task --------  01


function fahrenheit(celsius){
    const num=32;
console.log((9/5)*celsius + num);
return console.log();
}
fahrenheit(60);

// case 02   fun as  expression 
  
// let fahrenheit= function (celsius){
//     console.log((9/5)*celsius +32);
     
// }
// fahrenheit(50);

//                     task -------- 02


// function findMax (num1, num2){
// if (num1>num2){
//     console.log(num1, "is maximum")}
// else{console.log (num2, "is maximum");
// }
// };
// findMax(25,46);
// findMax(25,-46);

// //                     task --------- 03






// //                     task ----------04
// function factorial(n){
//     return(n*factorial(n-1));
//     if (n===1){
//         return;
//     }
//   factorial (n-1);  
// }
// factorial(5);










// //                   task ---------05
// let x="bananaOrange";
//  let y=1;
//  let z=0;
 
 
// function countVowel(x){
//  let sum=0;
// for(let i=0; i<=x.length; i++){
    
//     if(x.charAt(i)===(""||"a"),(""||"e"),(""||"i"),(""||"o"),(""||"u"))
// {
//     return y;
// }
// else{
//     return z;
// }

//     }
//     return sum+=y+z;
    


// }
//  console.log(countVowel(x));
let y=1;
let z=0;
 
let x= "bananaOrange";
 for(let i=0; i<=x.length; i++){
 
switch (x ){
    case(x.charAt(i)==="a"):

    case(x.charAt(i)==="e"):
     
    case(x.charAt(i)==="i"):
   
    case(x.charAt(i)==="o"):
     
    case(x.charAt(i)==="u"):

console.log(y);
break;
};
 };





function printMe(){
    console.log("bedada");
    return "hello from printMe."
     
}

printMe();
console.log(printMe())

function calc(a,b){
    return (2*(a+b))
}
console.log(calc(2,7));

//                           task====== 06




function upperFrist(string){
    for ( let i=0; i<=string.length; i++){
      let letter = string.charAt(i);
    
        if ( i === 0){
            return letter.toUpperCase();
        } else{
            return letter();
        }

    }
}
console.log(upperFrist("bedada"));


//                         task -------- 07

 
(function (string){
    console.log("Hello"+" " + string);
})("Javascript From Bedada");



//                          task -------- 08

function Greeting(name, callBack){
    console.log("Helloo"+" "+ name,"Tapas give too challenging tasks, what shall you do ?")
    callBack();
}
Greeting("Bedada",function(){
    console.log(" Tapas Adikary thanks very much for you investing on us such kind of conceptual deep understanding ! ")
});

//  task --------  09
// f1 is excuted frist, then f2


// task ---------  10
// f2 is executed,  then f1 is executed, finally f3 is executed




