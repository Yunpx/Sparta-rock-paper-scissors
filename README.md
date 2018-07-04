# Sparta-rock-paper-scissors

Sparta Global
Rock, Paper, Scissors - Homework

Your homework is to create the game Rock Paper Scissors game against the computer in the browser using alerts and prompts.

Rules of the Game

There are a few basic rules to the game:-

Rock beats Scissors
Paper beats Rock
Scissors beats Paper

You will need to:-

Get the player input through the browser
Create a random move for the computer
You should play the best of five rounds between the player and the computer
You will need to check for a winner after each round
You should display the score after each round.

------------------------------------
## Solution
I have put the possible choices in an array. `var choice = ["rock","paper","scissors"];`

The score system works as follows, I have set the positon of the choices to link with the score.
eg if player1 picked rock, at position 0 in the array, and player2 picked scissors, in position 2 of the array. I used the first position to subtract the second, resulting -2. this is one out of the 2 possible win. as the other is, paper vs rock, 1-0 = 1; and scissors vs paper , 2-1= 1; so if the result of the subtraction is either -2 or 1 player1 wins, player 2 wins by switching the parameter.

The computer pick and random number between 0-2 to match the index of the array items.

While loop is set when both the score must be below 3, as max win is 3.

>Rock
0, 2 -2  s=1
0, 1 -1  s=-1
0, 0  0  s=0

>paper
1,2 -1  s=-1
1,0  1  s=1
1,1  0  s=0

>Scissors
2,0 2 s=-1
2,1 1 s=1
2,2 0 s=0

>result = 1 win ,-2 win
result = -1, 2 lose
result = 0 draw
