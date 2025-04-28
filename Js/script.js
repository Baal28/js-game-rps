let humanScore = 0;
let computerScore = 0;
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

function getComputerChoice() {
    //const ROCK = 'rock';
    //const PAPER = 'paper';
    //const SCISSORS = 'scissors';
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return  ROCK;
    } else if (choice === 1) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

//getComputerChoice();

function getHumanChoice() {
    //const ROCK = 'rock';
    //const PAPER = 'paper';
    //const SCISSORS = 'scissors';
    let hChoice = prompt('Insert your choice Rock, Paper, Scissors ?').toLowerCase();

    if (hChoice === ROCK) {
        return ROCK;
    } else if (hChoice === PAPER) {
        return PAPER;
    } else if (hChoice === SCISSORS) {
        return SCISSORS;
    }

}

// getHumanChoice();

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function playRound(humanChoice, computerChoice) {
    if ( humanChoice === ROCK && computerChoice === SCISSORS || humanChoice === PAPER && computerChoice === ROCK || humanChoice === SCISSORS && computerChoice ===  PAPER) {
        humanScore++
        return alert(`You Win!, ${humanChoice} beats ${computerChoice} Your score is: ${humanScore}` );
        } else if (humanChoice === ROCK && computerChoice === ROCK || humanChoice === PAPER && computerChoice === PAPER || humanChoice === SCISSORS && computerChoice ===  SCISSORS) {
            alert('It\'s a draw! Try again! ');
        } else {
        computerScore++    
        return alert(`You Lose! ${computerChoice} beats ${humanChoice} The computer score is: ${computerScore}`)
    }
}


//console.log(computerSelection);

playRound(humanSelection, computerSelection );