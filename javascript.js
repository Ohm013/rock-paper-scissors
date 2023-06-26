let playerScore = 0 ;
let computerScore = 0 ;
const buttons = document.querySelectorAll('button'); 
//const result = document.querySelector('result') ; 
const words = document.querySelector('h3'); 

buttons.forEach(button => {
    button.addEventListener('click', () => {
      playRound(button.value);

    });
    
});     
  
function getComputerChoice () { //Generates computers choice
    let choice = Math.floor(Math.random() *100);

      if (choice <= 33) {
        return "Rock" ;
      }else if (choice > 33 && choice <= 66) {
        return "Paper" ;
      }else {
        return "Scissors" ;
    } 
}   

function playRound (playerSelection, computerSelection) { //One round of the game

   
      computerSelection = getComputerChoice();
        alert(`Computer chose ${computerSelection}`);  


    if ((playerSelection === "Rock" && computerSelection === "Paper" ) ||
       (playerSelection === "Scissors" && computerSelection === "Rock") ||
       (playerSelection === "Paper" && computerSelection === "Scissors")) {

        words.textContent = `You lose! ${computerSelection} beats ${playerSelection}`; 
        ++computerScore;
        
    }
    else if ((playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")) {
       
        words.textContent = `You win! ${playerSelection} beats ${computerSelection}` ; 
        ++playerScore;

    }
    else{
        words.textContent = "Try again! It's a tie";
    }
   
}

// ${computerSelection} beats ${playerSelection}`; 
// ${playerSelection} beats ${computerSelection}`;




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

 




