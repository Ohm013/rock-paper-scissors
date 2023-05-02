
function playerSelection () {
    let input = prompt("Rock, Paper, or Scissors").toLowerCase();
    alert(`You chose ${input}!`);
}

playerSelection();



function getComputerChoice (choice) {
    choice = Math.floor(Math.random() *100);
        if (choice <= 33) {
            alert("Rock");
        }else if (choice > 33 && choice <= 66) {
            alert ("Paper") ;
        }else {
            alert ("Scissors");
        } 
    
    }


getComputerChoice(); 

function playRound (playerSelection, computerSelection ) {
    if (playerSelection == "rock" && computerSelection == "Paper") {
        alert ("You lose! Paper beats rock");
    }else if (playerSelection == "paper" && computerSelection == "Rock") {
        alert ("You win! Paper beats Rock");
    }else if (playerSelection == "rock" && computerSelection == "Scissors") {
        alert ("You win! Rock beats Scissors");
    }
    }
    }

}

const computerSelection = getComputerchoice ;

