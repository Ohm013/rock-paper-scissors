const buttons = document.querySelectorAll("button"); 


buttons.forEach((button) => {
        button.addEventListener('click', function(){ 
        playRound(button.value);  

    });    
}); 

function playerSelection () {}




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



let playerScore = 0 ;
let computerScore = 0 ;



function playRound (playerChoice) {



    playerChoice = playerSelection ; 
   
    let computerSelection = getComputerChoice();
        alert(`Computer chose ${computerSelection}`);  


    if ((playerChoice === "Rock") && (computerSelection === "Paper" )) {
        alert ("You lose! Paper beats rock"); 
        ++computerScore;
        
    }else if (playerChoice === "Paper" && computerSelection === "Rock") {
        alert ("You win! Paper beats Rock");
        ++playerScore;

    }else if (playerChoice === "Rock" && computerSelection === "Scissors") {
        alert ("You win! Rock beats Scissors");
        ++playerScore;

    }else if (playerChoice === "Scissors" && computerSelection === "Rock") {
        alert ("You lose! Rock beats Scissors");
        ++computerScore;

    }else if (playerChoice === "Paper" && computerSelection === "Scissors") {
        alert ("You lose! Scissors beats Paper");
        ++computerScore;

    }else if (playerChoice === "Scissors" && computerSelection === "Paper") {
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


