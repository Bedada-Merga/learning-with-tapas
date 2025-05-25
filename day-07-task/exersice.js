"use strict";

// let printMe=function printMe (){
//     console.log("print Me ...")
// }
// console.log(printMe);

// function sum(a,b){
//     const result = a+b;
//     return result;
// }
//  let result =sum(10,4);
//  console.log(result);
 
// task ------------ 01
function rockPaperScissorGame(){
    const userChoicePrompt = prompt("Enter Rock,Paper,Scissor ");
let userChoice =userChoicePrompt.toLowerCase();

let computerChoice;
const randomNumber=Math.floor(Math.random()*3)+1;
let ranNum=randomNumber;
switch(ranNum){
case 1:computerChoice="rock"
break;
case 2:computerChoice= "paper"
break;
case 3: computerChoice="scissor"
break;
 default:console.log("enter the correct input!")

}
// if(randomNumber===1){
//     computerChoice="rock";
// }
// else if(randomNumber===2){
//     computerChoice="paper";
// }else{
//     computerChoice="scissor";
// }
console.log("userChoice", userChoice);
console.log("computerChoice",computerChoice);

if((userChoice==="rock"&&computerChoice==="scissor")||
(userChoice==="paper" && computerChoice==="rock")||
(userChoice==="scissor" && computerChoice==="paper")){
    console.log("you the user WIN, ya ya ya !!!");}
    else if (userChoice===computerChoice){
console.log(" the game is the Tie !");
    } else if((userChoice==="rock"&&computerChoice==="paper")||
    (userChoice==="paper" && computerChoice==="scissor")||
    (userChoice==="scissor" && computerChoice==="rock")) { 
        console.log(" oooooooh   NO.... computer WIN !!!");
    
}else{ console.log("please check the imput !");

}
const playAgainPrompt=prompt("do you want to play again?(yes/no)")
const playAgain=playAgainPrompt?playAgainPrompt.toLowerCase():"no"
if (playAgain==="yes"){
    rockPaperScissorGame();
}else{
    console.log("thanks for playing ! see you next time")
}
 }

 rockPaperScissorGame();


 // task --------------- 02

 
const min = 1;
const max= 10;

function startSecretNumberGame(){
console.log("secret number guessing game");
const userRandomNumberPrompt=parseInt(prompt("enter number from 1 to 10"));
const computerRandomNumber=Math.floor(Math.random()*max)+1;
console.log("user select," + userRandomNumberPrompt);
console.log("computer select," +  computerRandomNumber);
if(userRandomNumberPrompt===computerRandomNumber){
    console.log("Yes You Win, fantastic ! ");
    const playAgainSecretGamePrompt=prompt("do you want to play again?(yes/no)")
const playAgainSecretGame=playAgainSecretGamePrompt?playAgainSecretGamePrompt.toLowerCase():"no"
if (playAgainSecretGame==="yes"){
    startSecretNumberGame();
}else{
    console.log("thanks for playing ! see you next time")
    
}
}
else if (userRandomNumberPrompt>computerRandomNumber){
    console.log("too_large");
    startSecretNumberGame();
}
else if (userRandomNumberPrompt<computerRandomNumber){
    console.log("too Small");
    startSecretNumberGame();
}
else {console.log("please enter the number between the range !")}
}


startSecretNumberGame();











