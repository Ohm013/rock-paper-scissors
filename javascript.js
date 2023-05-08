function getComputerChoice () {
    let choice = Math.floor(Math.random() *100);

        if (choice <= 33) {
            return "Rock" ;
        }else if (choice > 33 && choice <= 66) {
            return "Paper" ;
        }else {
            return "Scissors" ;
           
        } 
    
    
}   


function playRound (playerSelection, computerSelection ) {
    playerSelection = prompt("Rock, Paper, or Scissors").toLowerCase();
    computerSelection = getComputerChoice()
        alert(`Computer chose ${computerSelection}`);  


    if ((playerSelection === "rock") && (computerSelection === "Paper" )) {
        alert ("You lose! Paper beats rock");
        
    }else if (playerSelection === "paper" && computerSelection === "Rock") {
        alert ("You win! Paper beats Rock");
    }else if (playerSelection === "rock" && computerSelection === "Scissors") {
        alert ("You win! Rock beats Scissors");
    }else if (playerSelection === "scissors" && computerSelection === "Rock") {
        alert ("You lose! Rock beats Scissors");
    }else if (playerSelection === "paper" && computerSelection === "Scissors") {
        alert ("You lose! Scissors beats Paper");
    }else if (playerSelection === "scissors" && computerSelection === "Paper") {
        alert ("You win! Scissors beats Paper");
    }else{ 
        alert ("Try again! It's a tie");
    }

}

function game () {
    let fiveTimes = playRound() ; 
        playRound();
        playRound();
        playRound();
        playRound();
        playRound();


}

game() ;












