
"use strict";

// task ------ ## 01 
// the out put is " it's a normal day. "
// because  if  the frist letter of one  string is capital and other is small letter, then strings are different string. "Monday" and "monday" is different strings. that is why

//                     task ------- ##  02
let n=200;
if (n%100===0){
console.log ("withdrawal successful");
}
else {console.log("invalid amount")};
n=501;
if (n%100===0){
console.log("withdrawal successful");
}
else {console.log ("invalid amount")};

//                   task  ------  ## 03            bulding a calculator with switch-case
let x;
let y; 
let operator;
switch (operator){
 case "+":
    console.log(x+y);
    break;

 case "-":
 console.log(x-y);
 break;

 case "*":
    console.log(x*y);
    break;

    case "/":
        console.log(c/y);
        break;

        case "%":
            console.log(x%y);
            break;

};
x=5;
y=9;
operator="+";
switch (operator){
    case "+":
       console.log(x+y);
       break;
   
    case "-":
    console.log(x-y);
    break;
   
    case "*":
       console.log(x*y);
       break;
   
       case "/":
           console.log(c/y);
           break;
   
           case "%":
               console.log(x%y);
               break;
   
   };

x=5;
y=9;
operator="*";
switch (operator){
    case "+":
       console.log(x+y);
       break;
   
    case "-":
    console.log(x-y);
    break;
   
    case "*":
       console.log(x*y);
       break;
   
       case "/":
           console.log(c/y);
           break;
   
           case "%":
               console.log(x%y);
               break;
   
   };

   //       task ---------- ## 04      pay for your movie tichet

   let age ;
   if (age<18){console.log("ticket prices= $3")}
    else if ( age>=18 && age <=60){
      console.log("ticket prices= $10");
    }
    else if (age>=60){
      console.log("ticket prices= $8");
   };

   age = 15;
   if (age<18){console.log("ticket prices= $3")}
    else if (18<= age <=60){
      console.log("ticket prices= $10");
    }
    else{
      console.log("ticket prices= $8");
   }; 

   //         task ----------   ##   05   Horoscope sign checker
 
let month;
switch (month){


   case "april" :  
   console.log("Aries")
break;

   case "may" :  
   console.log("taurus")

   case "june" :  
   console.log("Gemini")

   case " july" :  
   console.log("Cancer")

   case "august" :  
   console.log("Leo")

   case "september" :  
   console.log("virgo")

   case "october" :  
   console.log("Libra")

   case "november" :  
   console.log("Scorpio")

   case "december" :  
   console.log("Sagittarius")

   case "January" :  
   console.log("CapriCorn")

   case "february" :  
   console.log("Aquarius")
   case "march" :
   console.log("Apisces")
   default :
};

month="january";
switch (month){

   case "april" :  
   console.log("Aries")
break;
   case "may" :  
   console.log("taurus")
break;
   case "june" :  
   console.log("Gemini")
break;
   case " july" :  
   console.log("Cancer")
break;
   case "august" :  
   console.log("Leo")
break;
   case "september" :  
   console.log("virgo")
break;
   case "october" :  
   console.log("Libra")
break;
   case "november" :  
   console.log("Scorpio")
break;
   case "december" :  
   console.log("Sagittarius")
break;
   case "january" :  
   console.log("CapriCorn")
break;
   case "february" :  
   console.log("Aquarius")
   break;
  default : console.log ("some thing error")
    
};
 

 //         task ----------   ##   06  
let l=10;
let w=15;
let s=8;
if(l===w && w===s){
   console.log("Equilateral Triangle")}
    else if (l===s && w!==s){
console.log("Isosceles Triangle");

 }
  
   else {
      console.log("Scalene Triangle")    
};

l=10;s=10;w=9

if(l===w && w===s){
   console.log("Equilateral Triangle")}
    else if (l===s && w!==s){
console.log("Isosceles Triangle");

 }
  
   else {
      console.log("Scalene Triangle")    
};

l=10;s=10; w=10;
if(l===w && w===s){
   console.log("Equilateral Triangle")}
    else if (l===s && w!==s){
console.log("Isosceles Triangle");

 }
  
   else {
      console.log("Scalene Triangle")    
};
