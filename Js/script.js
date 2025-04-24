function getComputerChoice() {
    const ROCK = 'rock';
    const PAPER = 'paper';
    const SCISSORS = 'scissors'
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return console.log(ROCK);
    } else if (choice === 1) {
        return console.log(PAPER);
    } else {
        return console.log(SCISSORS);
    }
}

getComputerChoice();