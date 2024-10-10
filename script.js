document.getElementById("button-paragraph1").addEventListener("click", () => buttonClicked(0));
document.getElementById("button-paragraph2").addEventListener("click", () => buttonClicked(1));
document.getElementById("button-paragraph3").addEventListener("click", () => buttonClicked(2));
document.getElementById("button-reset").addEventListener("click", () => resetGame());


let options = ["🖐️", "✊", "✌️"];

let pointsUser = 0;
let pointsComputer = 0;

function resetGame() {
    pointsUser = 0;
    pointsComputer = 0;
    document.getElementById("text-current-action").style.color = "#f07167";
    document.getElementById("score-player").innerHTML = pointsUser.toString();
    document.getElementById("score-computer").innerHTML = pointsComputer.toString();
    document.getElementById("text-current-action").innerHTML = "Let's start!";
    document.getElementById("left-choice-emoji").innerHTML = "❔️";
    document.getElementById("right-choice-emoji").innerHTML = "❔️";
}

function generateChoice() {
    const max = 3;
    return Math.floor(Math.random() * max);
}

function buttonClicked(choice) {
    let userChoice = choice + 1;
    let computerChoice = generateChoice() + 1;

    if (pointsUser === 4 || pointsComputer === 4) {
        resetGame();
    }

    document.getElementById("left-choice-emoji").innerHTML = options[userChoice-1];
    document.getElementById("right-choice-emoji").innerHTML = options[computerChoice-1];

    if (userChoice === 1 || computerChoice === 1) {
        userChoice %= 3;
        computerChoice %= 3;
    }

    if (userChoice === computerChoice) {
        document.getElementById("text-current-action").style.color = "orange";
        document.getElementById("text-current-action").innerHTML = "Draw!";
    } else if (userChoice < computerChoice) {
        pointsUser++;
        document.getElementById("text-current-action").style.color = "#80ed99";
        document.getElementById("score-player").innerHTML = pointsUser.toString();
        document.getElementById("text-current-action").innerHTML = "Player wins a point!";
    } else {
        pointsComputer++;
        document.getElementById("text-current-action").style.color = "#FF292E";
        document.getElementById("score-computer").innerHTML = pointsComputer.toString();
        document.getElementById("text-current-action").innerHTML = "Computer wins a point!";
    }


    if (pointsUser === 3) {
        document.getElementById("text-current-action").style.color = "#80ed99";
        document.getElementById("text-current-action").innerHTML = "Player wins the game!";
        pointsUser++;
    }
    if (pointsComputer === 3) {
        document.getElementById("text-current-action").style.color = "#FF292E";
        document.getElementById("text-current-action").innerHTML = "Computer wins the game!";
        pointsComputer++;
    }
}
