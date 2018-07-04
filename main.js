
var choice = ["rock","paper","scissors"];

gameStart();

function getScore(hand1, hand2){
  result = getNumber(hand1) - getNumber(hand2);
  if(result==1 || result ==-2){
      return 1;//win
    }else{
      return 0;//draw or lose
  }
}

function gameStart(){
  score=0;
  score2=0;
  var myInput;
  var computer;
  while(score<3 && score2<3){
    myInput = prompt("rock paper or scissors?");
    computer= getRndInteger(0,3);
    alert("You have drawed "+ choice[getNumber(myInput)].toUpperCase()+ " and Ai-Chan drawed "+ choice[computer].toUpperCase()+" !!!");

    score +=getScore(myInput,choice[computer]);
    score2 +=getScore(choice[computer],myInput);
    alert("The score is (You) "+score+" : "+score2+" (Ai-Chan)");
  }

  alert("GameOver");
  if (score==3) {
    alert("You win! Congratulations!");
  }else {
    alert("Ai-Chan win! ");
  }
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
