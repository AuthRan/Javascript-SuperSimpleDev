let scoreCard = {
    wins: 0,
    losses: 0,
    ties: 0
};
displayResult();
function startGame(yourChoice) {
    let computerValue = Math.random();
    let result = 0;
    let computerChoice = undefined;
    if (computerValue >= 0 && computerValue <= (1 / 3)) {
        computerChoice = 'Rock'
    }
    else if (computerValue > (1 / 3) && computerValue < (2 / 3)) {
        computerChoice = 'Paper'
    }
    else if (computerValue >= (2 / 3) && computerValue < (1)) {
        computerChoice = 'Scissors'
    }
    if (yourChoice === 'Rock') {
        if (computerChoice === 'Rock') {
            scoreCard.ties++;
            displayChoices(yourChoice, computerChoice);
            displayFinalResult('Draw!');
        }
        else if (computerChoice === 'Paper') {
            scoreCard.losses++;
            displayChoices(yourChoice, computerChoice);
            displayFinalResult('You lost!');
        }
        else if (computerChoice === 'Scissors') {
            scoreCard.wins++;
            displayChoices(yourChoice, computerChoice);
            displayFinalResult('You won!');
        }
    }
    else if (yourChoice === 'Paper') {
        // console.log(computer);  found the mistake
        if (computerChoice === 'Rock') {
            scoreCard.wins++;
            displayChoices(yourChoice, computerChoice);
            displayFinalResult('You won!');
        }
        else if (computerChoice === 'Paper') {
            scoreCard.ties++;
            displayChoices(yourChoice, computerChoice);
            displayFinalResult('Draw!');
        }
        else if (computerChoice === 'Scissors') {
            scoreCard.losses++;
            displayChoices(yourChoice, computerChoice);
            displayFinalResult('You lost!');
        }
    }
    else {
        if (computerChoice === 'Rock') {
            scoreCard.losses++;
            displayChoices(yourChoice, computerChoice);
            displayFinalResult('You lost!');
        }
        else if (computerChoice === 'Paper') {
            scoreCard.wins++;
            displayChoices(yourChoice, computerChoice);
            displayFinalResult('You won!');
        }
        else if (computerChoice === 'Scissors') {
            scoreCard.ties++;
            displayChoices(yourChoice, computerChoice);
            displayFinalResult('Draw!');

        }
    }
    displayResult();
}
function displayResult() {
    document.querySelector('.resultElement').innerHTML = `\n Wins: ${scoreCard.wins}, Losses: ${scoreCard.losses}, Ties: ${scoreCard.ties}`
}
function displayFinalResult(result) {
    // document.querySelector('.result').innerHTML = `${result}`;
    document.querySelector('.resultwa').innerHTML = `${result}`;

}
function displayChoices(yourChoice, computerChoice) {
    document.querySelector('.choices').innerHTML = `Your choice: <img src="icons/${yourChoice}-emoji.png" alt="" class="result"> <br><br> Computer choice: 
                    <img src="icons/${computerChoice}-emoji.png" alt="" class="result">`;
}
let gameStatus = false;
let intervalID = null;
function khudse() {
    if (!gameStatus) {
        intervalID = setInterval(function () {
            let yourValueValue = Math.random();
            let result = 0;
            let yourChoiceChoice = undefined;
            if (yourValueValue >= 0 && yourValueValue <= (1 / 3)) {
                yourChoiceChoice = 'Rock'
            }
            else if (yourValueValue > (1 / 3) && yourValueValue < (2 / 3)) {
                yourChoiceChoice = 'Paper'
            }
            else if (yourValueValue >= (2 / 3) && yourValueValue < (1)) {
                yourChoiceChoice = 'Scissors'
            }
            startGame(yourChoiceChoice);
        }, 1000);
        gameStatus = true;
    }
    else{
        clearInterval(intervalID);
        gameStatus = false;
    }
}