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

function playerSelection () {

    let option = prompt("Rock, Paper, or Scissors").toLowerCase() 
    return option ;

}



function playRound (playerchoice, computerSelection ) {
    playerchoice = playerSelection() ;
    computerSelection = getComputerChoice();
        alert(`Computer chose ${computerSelection}`);  


    if ((playerchoice === "rock") && (computerSelection === "Paper" )) {
        alert ("You lose! Paper beats rock"); 
    }else if (playerchoice === "paper" && computerSelection === "Rock") {
        alert ("You win! Paper beats Rock");
    }else if (playerchoice === "rock" && computerSelection === "Scissors") {
        alert ("You win! Rock beats Scissors");
    }else if (playerchoice === "scissors" && computerSelection === "Rock") {
        alert ("You lose! Rock beats Scissors");
    }else if (playerchoice === "paper" && computerSelection === "Scissors") {
        alert ("You lose! Scissors beats Paper");
    }else if (playerchoice === "scissors" && computerSelection === "Paper") {
        alert ("You win! Scissors beats Paper");
    }else{ 
        alert ("Try again! It's a tie");
    }

}

playRound();



function game (playerScore, computerScore) {

    playerScore = 0 ;
    computerScore = 0 ;
    let fiveTimes = playRound() ; 
    playRound();
         if (( playerSelection === "rock") && (computerSelection === "Paper" ) || (playerSelection === "scissors" && computerSelection === "Rock") || (playerSelection === "paper" && computerSelection === "Scissors")) { 
            computerScore++;
        }else if (((playerSelection === "paper" && computerSelection === "Rock")) ||  (playerSelection === "rock" && computerSelection === "Scissors") ||  (playerSelection === "scissors" && computerSelection === "Paper")){
            playerScore++;
        }else{
            alert("Tie!") ;
        }    
    playRound();
         if (( playerSelection === "rock") && (computerSelection === "Paper" ) || (playerSelection === "scissors" && computerSelection === "Rock") || (playerSelection === "paper" && computerSelection === "Scissors")) { 
            computerScore++;
        }else if (((playerSelection === "paper" && computerSelection === "Rock")) ||  (playerSelection === "rock" && computerSelection === "Scissors") ||  (playerSelection === "scissors" && computerSelection === "Paper")){
            playerScore++;
        }else{
            alert("Tie!") ;
        }    
    playRound();
         if (( playerSelection === "rock") && (computerSelection === "Paper" ) || (playerSelection === "scissors" && computerSelection === "Rock") || (playerSelection === "paper" && computerSelection === "Scissors")) { 
            computerScore++;
        }else if (((playerSelection === "paper" && computerSelection === "Rock")) ||  (playerSelection === "rock" && computerSelection === "Scissors") ||  (playerSelection === "scissors" && computerSelection === "Paper")){
            playerScore++;
        }else{
            alert("Tie!") ;
        }  
    playRound();
         if (( playerSelection === "rock") && (computerSelection === "Paper" ) || (playerSelection === "scissors" && computerSelection === "Rock") || (playerSelection === "paper" && computerSelection === "Scissors")) { 
            computerScore++;
        }else if (((playerSelection === "paper" && computerSelection === "Rock")) ||  (playerSelection === "rock" && computerSelection === "Scissors") ||  (playerSelection === "scissors" && computerSelection === "Paper")){
            playerScore++;
        }else{
            alert("Tie!") ;
        }  
    playRound();
         if (( playerSelection === "rock") && (computerSelection === "Paper" ) || (playerSelection === "scissors" && computerSelection === "Rock") || (playerSelection === "paper" && computerSelection === "Scissors")) { 
            computerScore++;
        }else if (((playerSelection === "paper" && computerSelection === "Rock")) ||  (playerSelection === "rock" && computerSelection === "Scissors") ||  (playerSelection === "scissors" && computerSelection === "Paper")){
            playerScore++;
        }else{
            alert("Tie!") ;
        }  
    

    
    playerScore(); 

}

game() ;














