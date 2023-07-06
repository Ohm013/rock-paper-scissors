let playerScore = 0 ;
let computerScore = 0 ;
const buttons = document.querySelectorAll('div.choices button'); 
const words = document.querySelector('h3'); 
const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.computerScore');
const restart = document.querySelector('#restart'); 
const para = document.querySelector('.compChoice'); 

buttons.forEach(button => {
    button.addEventListener('click', getPlayerChoice) 
});
 

function getPlayerChoice(e) {
  let playerSelection = e.target.id ; 
  console.log(playerSelection)
  playRound(playerSelection, getComputerChoice()); 
}

const options = ["Rock", "Paper","Scissors"];

function getComputerChoice () { //Generates computers choice
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice ;
}

pScore.textContent = "0" ;
cScore.textContent = "0";  

function playRound (playerSelection, computerSelection) { //One round of the game
 
  computerSelection = getComputerChoice();
  para.textContent = (`Computer chose ${computerSelection}`);  //Make function that pops up a picture of computerchoice
             
        
    if ((playerSelection === "Rock" && computerSelection === "Paper" ) ||
       (playerSelection === "Scissors" && computerSelection === "Rock") ||
       (playerSelection === "Paper" && computerSelection === "Scissors")) {
        ++computerScore;
        if ((computerScore === 5) && (playerScore < 5)) {
          gameOver(); //put this here  because it has to check score every round to work, if outside function then it'd only check for one round
          words.textContent = "Game Over :( Press Play Again for rematch"; 
        }else { 
          words.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
      }     
    }else if ((playerSelection === "Paper" && computerSelection === "Rock") ||
          (playerSelection === "Rock" && computerSelection === "Scissors") ||
          (playerSelection === "Scissors" && computerSelection === "Paper")) {
            ++playerScore;   
            if ((playerScore === 5) && (computerScore < 5)) {
              gameOver();
              words.textContent = "YOU WIN!!";
            }else {
              words.textContent = `You win! ${playerSelection} beats ${computerSelection}` ; 
        }      
    }else{
      words.textContent = "Try again! It's a tie";
    }
   pScore.textContent = `${playerScore}` ;
   cScore.textContent = `${computerScore}`;
  }

restart.addEventListener('click', startOver) ; 

function startOver () {
  pScore.textContent = "0" ; 
  cScore.textContent = "0" ;
  playerScore = 0;
  computerScore = 0; 
}
function gameOver () {
  buttons.forEach(button => { //make sure to include the for each or it wouldnt work
    button.removeEventListener('click', getPlayerChoice) //"button" worked but not "buttonS" 
  })
  }; 
