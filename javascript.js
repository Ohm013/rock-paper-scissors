
const ask = prompt("Rock, Paper, or Scissors").toLowerCase();
    

function playerSelection () {
    alert(`You chose ${ask}!`);
    
    
}

playerSelection(); 



function getComputerChoice (option) {
    let choice = Math.floor(Math.random() *100);
        if (choice <= 33) {
            return "Rock" ;
            alert("Rock");
        }else if (choice > 33 && choice <= 66) {
            return "Paper" ;
            alert ("Paper") ;
        }else {
            return "Scissors" ;
            alert ("Scissors");
        } 
    
}        

let computerSelection = getComputerChoice() ; 




function playRound (playerSelection, computerSelection ) {
    if (playerSelection === computerSelection) {
        alert ("Try again! It's a tie");
    }else if  (playerSelection === "rock" && computerSelection === "Paper" ) {
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
        alert ("Done !"); 
    }

}

playRound();









