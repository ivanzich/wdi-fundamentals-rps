////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    // Variable not declared in standard form
 return move || getInput();

}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
     return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) { 
        return  "tie";
    } else if ( playerMove === "rock" && computerMove === "paper") {
       return  "computer"; 
    } else if ( playerMove === "paper" && computerMove === "scissors") { 
        return  "computer"; 
    } else if ( playerMove === "scissors" && computerMove === "rock") {
        return  "computer";
    } else if ( computerMove === "rock" && playerMove === "paper"){
        return  "player";
    } else if (computerMove === "paper" && playerMove === "scissor"){
        return  "player";
    } else if ( computerMove === "scissor" && playerMove === "rock"){
        return  "player";
    }
    else { return null;
}
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var tiedGames = 0;
    // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
 
 
 while (playerWins <= 5 && computerWins <= 5 ) {
     var playerMove = getPlayerMove();
     var computerMove = getComputerMove();
     var winner = getWinner(playerMove, computerMove);
     
     if (winner === "player") {
         playerWins += 1;
     }
else if (winner == "computer") {
         computerWins += 1;
}     
     else if ( winner === "tie") {
         tiedGames += 1;
     }
     else { 
         winner === null;
 } console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
 
 if (winner === "computer") 
     {
     console.log("Computer wins");
     }
     
     else if (winner === "player") {
     console.log ("Player wins");
 }
 else if (winner === "tie") {
     console.log("Draw game");
 }
 else { 
     getPlayerMove();
 }
 console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
 }   
 
    return [playerWins, computerWins];
}

playToFive(5);

