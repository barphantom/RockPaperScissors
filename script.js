document.getElementById("button-paragraph").addEventListener("click", myFunction)

let options = ["rock", "paper", "scissors"];

let pointsUser = 0;
let pointsComputer = 0;

function myFunction() {
    document.getElementById("text-current-action").innerHTML = "Ta funkcja naprawdę działa!"

}

function getHumanChoice() {
    let incorrect = true;
    let index;
    while (incorrect) {
        let choice = prompt("Pick your gesture?");
        if ((index = options.indexOf(choice)) !== -1) {
            incorrect = false;
        }
    }
    return index;
}

function generateChoice() {
    const max = 3;
    return Math.floor(Math.random() * max);
}

let userChoice;
let computerChoice;
while (pointsUser !== 3 && pointsComputer !== 3) {
    // userChoice = getHumanChoice() + 1;
    computerChoice = generateChoice() + 1;

    if (userChoice === 1 || computerChoice === 1) {
        userChoice %= 3;
        computerChoice %= 3;
    }

    if (userChoice === computerChoice) {
        console.log(`Draw!`);
    } else if (userChoice < computerChoice) {
        pointsUser++;
        console.log(`User wins`);
    } else {
        pointsComputer++;
        console.log(`Computer wins`);
    }
}

if (pointsUser === 3) {
    console.log(`User wins the game!`)
}
if (pointsComputer === 3) {
    console.log(`Computer wins the game!`);
}
