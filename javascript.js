
function playerSelection () {
    let input = prompt("Rock, Paper, or Scissors").toLowerCase();
    alert(`You chose ${input}!`);
}

playerSelection();



function getComputerChoice (choice) {
    choice = Math.floor(Math.random() *100);
        if (choice <= 33) {
            alert("Rock");
        }else if (choice > 33 && choice <= 66) {
            alert ("Paper") ;
        }else {
            alert ("Scissors");
        } 
}

getComputerChoice();



function playRound (playerSelection, getComputerChoice ) {
    if (playerSelection == "rock" && getComputerChoice == "Paper") {
        alert ("You lose! Paper beats rock");
    }else if (playerSelection == "paper" && getComputerChoice == "Rock") {
        alert ("You win! Paper beats Rock");
    }else if (playerSelection == "rock" && getComputerChoice == "Scissors") {
        alert ("You win! Rock beats Scissors");
    }else if (playerSelection == "scissors" && getComputerChoice == "Rock") {
        alert ("You lose! Rock beats Scissors");
    }else if (playerSelection == "paper" && getComputerChoice == "Scissors") {
        alert ("You lose! Scissors beats Paper");
    }else if (playerSelection == "scissors" && getComputerChoice == "Paper") {
        alert ("You win! Scissors beats Paper");
    }else {
        alert ("Try again! It's a tie") ;
    }
}
    
playRound();





