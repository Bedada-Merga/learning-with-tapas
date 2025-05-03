"use strict";
let count = 5;
console.log (count++);
console.log(count);
console.log(count++);
console.log(count);
console.log(count ++);
console.log( count);
console.log(count++);
console.log(count --);
console.log(--count);

// tasks ## 1.          i'm  Bedada M    from Africa, Ethiopia . 
// be blessed my techer!! your teaching method so exiting 
// as you did teach us, i think using conditionl ternary operator is better !
// condition ? " val 1 " : " val 2 "
// by using some comparison operators fir condition 
let x=5;
let y=2;
 (x%y)!=0 ? "Even":"Odd";
x=6;
console.log((x%y)>=1 ? "Odd & ODD":"Even & EVEN");
x=9;
console.log((x%y)>0 ? "Odd~~~":"Even~~~~");
x=10;
console.log((x%y)!=0 ? "Odd":"Even");
x=15;
console.log((x%y)<=0 ? "EVEN":"ODD");
x=20;
console.log((x%y)!=0 ? "Odd":"Even");
 
// task ##2                   case -- 1            if it's correct

console.log('            case  ---- 01 ');



console.log(" hello teacher!  i was challenged by this task a lot.I consumed 4  hours on this task");

let age=18;
console.log((age>=18 && "age is elligitble") ||(age<=18 && "age is not elligitble"));
 
 age=19;
 console.log((age>=18 && "age is elligitble") ||(age<=18 && "age is not elligitble"));
 age=14;
 console.log((age>=18 && "age is elligitble") ||(age<=18 && "age is not elligitble"));
 age=22;
 console.log((age>=18 && "age is elligitble") ||(age<=18 && "age is not elligitble"));
 age=10;
 console.log((age>=18 && "age is elligitble") ||(age<=18 && "age is not elligitble"));
console.log( " checking more");
age=24;
console.log((age>=18 && "age is elligitble") ||(age<=18 && "age is not elligitble"));
age=16;
console.log((age>=18 && "age is elligitble") ||(age<=18 && "age is not elligitble"));
//                           case -- 2     using conditional oper.

console.log( "           CASE  --- 2");

let Age=18;
console.log(Age>=18 ? "AGE IS ELLIGITBLE" : "AGE IS NOT ELLIGITBLE");
Age=11;
console.log(Age>=18 ? "AGE IS ELLIGITBLE" : "AGE IS NOT ELLIGITBLE");
Age=19;
console.log(Age>=18 ? "AGE IS ELLIGITBLE" : "AGE IS NOT ELLIGITBLE");
Age=17;
console.log(Age>=18 ? "AGE IS ELLIGITBLE" : "AGE IS NOT ELLIGITBLE");
Age=21;
console.log(Age>=18 ? "AGE IS ELLIGITBLE" : "AGE IS NOT ELLIGITBLE");
Age=81;
console.log(Age>=18 ? "AGE IS ELLIGITBLE" : "AGE IS NOT ELLIGITBLE");

//            task ----- 03

let monthSalary = 12300;
let anualSalary = (12*monthSalary);
let bonus = (.2*anualSalary);
let moneyAsCtc=(anualSalary+bonus);
console.log('money per annum as a CTC =',moneyAsCtc);


//           task ------ 04

const redLight= "Stop";
const greenLight= "Go";
console.log(redLight)^console.log(greenLight);


//        task------- 05

let units ;150
let day = 1*units;
let month = 30* (day);
 console.log(units * day * month);


//         task ----- 06


let year = 2025;
let leapYear=(year%4);

console.log(leapYear!==0? "it's not leap year":"it's leap year");


 //    task ------- 07

 let p=5;
 let q=10;
 let r=15;

console.log(((p<q)&&(q<r)) && ("max is r =",r));
 


// Task  -------- 08

let counts=5;
//   5/2=2(1)
// 2/2=1(0)
// 5 = 101<<1

// shift one to left
// 0101 = 10
console.log("0101");
