// This is the code for rock paper scissors

//First function for getting computer choice, will need random class

// This is something we may need for choiceMath.random(3);// 0,1,2

function getComputerChoice(computerChoice) {

    computerChoice = Math.floor(Math.random() * 3);


    if (computerChoice == 0) {
        console.log("Computer picks rock");
    } else if (computerChoice == 1) {
        console.log("Computer picks paper");

    } else {
        console.log("Computer picks scissors");
    }

    return computerChoice;

}

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Enter your choice: ");
    var playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === 1) {
        console.log("Computer wins! You lose! Paper beats rock!");
    } else if (playerSelection === "rock" && computerSelection === 2) {
        console.log("You win! Rock crushes scissors!");
    } else if (playerSelection === "paper" && computerSelection === 0) {
        console.log("You win! Paper covers rock!!");

    } else if (playerSelection === "paper" && computerSelection === 2) {
        console.log("You lose! Scissors slices paper!")
    } else if (playerSelection === "scissors " && computerSelection === 0) {
        console.log("You lose! Rock crushes sicssors!");
    } else if (playerSelection === "scissors" && computerSelection === 1) {
        console.log("You win! Scissors slics paper!");
    } else {
        console.log("Its a tie!!!");
    }
}

//const playerSelection = "Rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

function game() {
    for (i = 0; i < 1; i++) {
        playRound();
    }
}
game();

//User interface


