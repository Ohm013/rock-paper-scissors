let playerScore = 0 ;
let computerScore = 0 ;
const buttons = document.querySelectorAll('div.choices button'); 
//const result = document.querySelector('result') ; 
const words = document.querySelector('h3'); 
const score = document.querySelector('h2');
const restart = document.querySelector('#restart'); 
const para = document.querySelector('p'); 
//var rock = "https://cdn2.iconfinder.com/data/icons/hand-gestures-2-1/128/Rock-Hand-Game-Right-Gesture-Win-512.png";
//var paper = "https://cdn-icons-png.flaticon.com/512/470/470827.png" ;
//var scissors = "https://cdn1.iconfinder.com/data/icons/paper-rock-scissors/100/2-512.png" ; 

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
  para.textContent = (`Computer chose ${computerSelection}`);  //Make function that pops up a picture of computerchoice
             
        
    if ((playerSelection === "Rock" && computerSelection === "Paper" ) ||
       (playerSelection === "Scissors" && computerSelection === "Rock") ||
       (playerSelection === "Paper" && computerSelection === "Scissors")) {
        ++computerScore;
        if (computerScore === 5) {
          words.textContent = "Game Over :( Press Play Again for rematch";
          disableBtn();
        }else { 
          words.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
      }     
    }else if ((playerSelection === "Paper" && computerSelection === "Rock") ||
          (playerSelection === "Rock" && computerSelection === "Scissors") ||
          (playerSelection === "Scissors" && computerSelection === "Paper")) {
            ++playerScore;     
            if (playerScore === 5) {
              words.textContent = "YOU WIN!!";
              disableBtn() ;
            }else {
              words.textContent = `You win! ${playerSelection} beats ${computerSelection}` ; 
        }      
    }else{
      words.textContent = "Try again! It's a tie";
    }
    score.textContent = `${playerScore} - ${computerScore}` ;
}    
  
restart.addEventListener('click', startOver) ; 


function reAppear () {
  if ((playerScore < 5) || (computerScore < 5)) {
    restart.style.visibility = 'hidden';
  }else {
    restart.style.visibility = 'visible';
  }

}
function startOver () {
  score.textContent = "0 - 0 " ; 
  playerScore = 0;
  computerScore = 0; 
  return score ; 

}

function disableBtn () {
  return playerScore ; 
  return computerScore ;
 if ((playerScore === 5) || (computerScore === 5 )) {
  buttons.disbaled = true ;
 }else {
  buttons.disbaled = false ;
}}


