//
console.log("hello");
var choice = ["rock","paper","scissors"];
// var score;
// var result;
// var winScore=3;
// hand1 = "rock";
// hand2= "scissors";
// var hand1 = "paper";
// var hand2 = "rock";
//
// game()
function getScore(hand1, hand2){
  result = getNumber(hand1) - getNumber(hand2);
  // alert(result);
  if(result==1 || result ==-2){
      return 1;
    }else if (result ==-1||result ==2) {
      return -1;
    }else{
      return 0;
  }
}
game();
function game(){
  score=0;
  var myInput;
  var computer;
  while(score<3){
    myInput = prompt("rock paper or scissors?");
    computer= getRndInteger(0,3);
    alert(choice[computer]);
    alert(choice[getNumber(myInput)]);
    score +=getScore(myInput,choice[computer]);
    alert("score is "+score);
  }
  alert("You win");

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getNumber(hand1){
  for(var i = 0; i < choice.length; i++){
    if (choice[i]== hand1){
    return i;
    }
  }
}

/*
Rock beats Scissors
Paper beats Rock
Scissors beats Paper
*/

//
// Rock
// 0, 2 -2  s=1
// 0, 1 -1  s=-1
// 0, 0  0  s=0
// paper
// 1,2 -1  s=-1
// 1,0  1  s=1
// 1,1  0  s=0
// Scissors
// 2,0 2 s=-1
// 2,1 1 s=1
// 2,2 0 s=0
// 
// result = 1 win ,-2 win
// result = -1, 2 lose
// result = 0 draw
