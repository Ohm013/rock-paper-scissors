const buttons = document.querySelectorAll("button"); 

buttons.forEach((button) => {
    button.addEventListener('click', playRound)
});



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

// function playerSelection () {

  //  let option = prompt("Rock, Paper, or Scissors").toLowerCase() 
  //  return option ;

//}

let playerScore = 0 ;
let computerScore = 0 ;



function playRound (playerchoice, computerSelection) {
   
    playerchoice = button ;


    computerSelection = getComputerChoice();
        alert(`Computer chose ${computerSelection}`);  


    if ((playerchoice === "rock") && (computerSelection === "Paper" )) {
        alert ("You lose! Paper beats rock"); 
        ++computerScore;
        
    }else if (playerchoice === "paper" && computerSelection === "Rock") {
        alert ("You win! Paper beats Rock");
        ++playerScore;

    }else if (playerchoice === "rock" && computerSelection === "Scissors") {
        alert ("You win! Rock beats Scissors");
        ++playerScore;

    }else if (playerchoice === "scissors" && computerSelection === "Rock") {
        alert ("You lose! Rock beats Scissors");
        ++computerScore;

    }else if (playerchoice === "paper" && computerSelection === "Scissors") {
        alert ("You lose! Scissors beats Paper");
        ++computerScore;

    }else if (playerchoice === "scissors" && computerSelection === "Paper") {
        alert ("You win! Scissors beats Paper");
        ++playerScore;

    }else{ 
        alert ("Try again! It's a tie");
    }

}

// function game () {

   // playRound() ;
     //   alert (`The score is  ${playerScore} - ${computerScore} `) ;
    
    //playRound() ;
      //  alert (`The score is  ${playerScore} - ${computerScore} `) ;
    
    //playRound() ;
      //  alert (`The score is  ${playerScore} - ${computerScore} `) ;

   // playRound() ;
     //   alert (`The score is  ${playerScore} - ${computerScore} `) ;

    //playRound() ;
   //     alert (`The score is  ${playerScore} - ${computerScore} `) ; 
    


    //if (playerScore > computerScore) {
   //     alert (`You win ${playerScore} to ${computerScore} !`)
   // }else if (computerScore > playerScore) {
     //   alert ( `You lose ${playerScore} to ${computerScore}`)
    //}else{ 
    //    alert (`The score is a tie. ${playerScore} - ${computerScore} ` )
   // }
//}

    //game() ;


