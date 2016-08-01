
var playerEarnings = 100;

var playerBet = prompt("Place your bet (between $5 to $10)");

var playerChoice = prompt("Pick a number between 1 to 10");

var computerChoice = function getRandomInt() {
  Math.floor((Math.random() * 10) + 1);
}

compare(playerChoice, computerChoice);

while (playerEarnings > 0){
  var compare = function (playerChoice, computerChoice){
    if (playerChoice == computerChoice){
      alert("You won this round! Go again");
      return playerEarnings += playerBet;
    }
    else if (playerChoice - computerChoice == 1 || -1){
      alert("Very close, you neither won or lost your bet. Try again");
      return playerEarnings;

    }
    else{
      alert("Too bad, you lost your bet");
      return playerEarnings -= playerBet;
    }
  }
}
alert("Game Over!")
