let playerScore = 0 ;
let computerScore = 0 ;
const buttons = document.querySelectorAll('div.choices button'); 
//const result = document.querySelector('result') ; 
const words = document.querySelector('h3'); 
const score = document.querySelector('h2');
const restart = document.querySelector('#restart'); 

buttons.forEach(button => {
    button.addEventListener('click', () => {
      playRound(button.value);

    });
    
});     

const options = ["Rock", "Paper","Scissors"];

function getComputerChoice () { //Generates computers choice
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice ;

}

score.textContent = "0 - 0" ; 

function playRound (playerSelection, computerSelection) { //One round of the game

   
      computerSelection = getComputerChoice();
        alert(`Computer chose ${computerSelection}`);  //Make function that pops up a picture of computerchoice


    if ((playerSelection === "Rock" && computerSelection === "Paper" ) ||
       (playerSelection === "Scissors" && computerSelection === "Rock") ||
       (playerSelection === "Paper" && computerSelection === "Scissors")) {

        words.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        ++computerScore;
        
    }else if ((playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")) {
       
        words.textContent = `You win! ${playerSelection} beats ${computerSelection}` ; 
        ++playerScore;

    }else{
      words.textContent = "Try again! It's a tie";
    }
    score.textContent = `${playerScore} - ${computerScore}` ;
    
} 

function disableBtn (buttons) {
  if ((playerScore <= 5) || (computerScore <= 5 )) {
    buttons.disabled = "disabled" ;
  }
  

}





function startOver () {

  if ((playerScore < 5) || (computerScore < 5)) {
    restart.style.visibility = 'hidden';
  }else {
    restart.style.visibility = 'visible';
  }

  

  score.textContent = "0 - 0 " ; 
  playerScore = 0;
  computerScore = 0; 
  return score ; 

}

restart.addEventListener('click', startOver) ; 




//}


// make a function to where game stops when one either side scores 5 



  //if ((playerScore = 5) {
   // words.textContent = "YOU WON! First to 5 points !"
    
    
    
   //}else if  (computerScore = 5)){
     // words.textContent = "You lose :( Click the button below to try again"
   //}