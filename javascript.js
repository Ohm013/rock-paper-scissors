const buttons = document.querySelectorAll('button'); 

buttons.forEach(button => {
    button.AddEventListener('click', function () { 
        playRound(button.value); 

    });    

}); 

let playerScore = 0 ;
let computerScore = 0 ;

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

function playRound (playerSelection) {
   
    let computerSelection = getComputerChoice();
        alert(`Computer chose ${computerSelection}`);  


    if ((playerSelection === "Rock" && computerSelection === "Paper" ) ||
       (playerSelection === "Scissors" && computerSelection === "Rock") ||
       (playerSelection === "Paper" && computerSelection === "Scissors")) {

        alert (`You lose! ${computerSelection} beats ${playerSelection}`); 
        ++computerScore;
        
    }
    else if ((playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")) {
       
        alert (`You win! ${playerSelection} beats ${computerSelection}`);
        ++playerScore;

    }
    else{
        alert ("Try again! It's a tie");
    }

}

//function game () {

  //  playRound() ;
    //    alert (`The score is  ${playerScore} - ${computerScore} `) ;
    
    //playRound() ;
      // alert (`The score is  ${playerScore} - ${computerScore} `) ;
    
    //playRound() ;
      //  alert (`The score is  ${playerScore} - ${computerScore} `) ;

    //playRound() ;
      //  alert (`The score is  ${playerScore} - ${computerScore} `) ;

    //playRound() ;
      //  alert (`The score is  ${playerScore} - ${computerScore} `) ; 
    


    //if (playerScore > computerScore) {
      //  alert (`You win ${playerScore} to ${computerScore} !`)
    //}else if (computerScore > playerScore) {
      // alert ( `You lose ${playerScore} to ${computerScore}`)
    //}else{ 
      //  alert (`The score is a tie. ${playerScore} - ${computerScore} ` )
   //}
//}

  //  game() ;


