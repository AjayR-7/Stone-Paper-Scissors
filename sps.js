let userScore = 0;
let computerScore = 0;
let pointsLimit = null;

function setPointsLimit() {
    pointsLimit = prompt("Please set the points limit for the game:");
    if (!pointsLimit || pointsLimit <= 0 || isNaN(pointsLimit)) {
        alert("Invalid input! \n Please enter a valid number.");
        setPointsLimit(); // Retry until a valid number is entered
    } else {
        pointsLimit = parseInt(pointsLimit);
        document.getElementById('resultText').innerText = `Points Limit set to ${pointsLimit} \n Make your move!`;
    }
}

function playGame(userChoice) {
    if (!pointsLimit) {
        setPointsLimit(); // Prompt to set points limit if it hasn't been set yet
        return;
    }

    const choices = ['stone', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const resultText = document.getElementById('resultText');
    const scoreText = document.getElementById('scoreText');

    if (userChoice === computerChoice) {
        resultText.innerText = `It's a draw!\n You both chose ${userChoice}.`;
    } else if (
        (userChoice === 'stone' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'stone') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScore++;
        resultText.innerText = `You win!\n ${userChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultText.innerText = `You lose!\n ${computerChoice} beats ${userChoice}.`;
    }

    scoreText.innerText = `Your Score: ${userScore} | Our Score: ${computerScore}`;

    if (userScore >= pointsLimit) {
        resultText.innerText = 'Congratulations!\n You won the game !';
        disableButtons();
    } else if (computerScore >= pointsLimit) {
        resultText.innerText = 'Sorry!\n The We won the game !';
        disableButtons();
    }
}

function disableButtons() {
    const buttons = document.querySelectorAll('.choices button');
    buttons.forEach(button => button.disabled = true);
}

function refreshGame() {
    userScore = 0;
    computerScore = 0;
    pointsLimit = null;
    document.getElementById('resultText').innerText = 'Set a points limit !';
    document.getElementById('scoreText').innerText = 'Your Score: 0 | Our Score: 0';
    const buttons = document.querySelectorAll('.choices button');
    buttons.forEach(button => button.disabled = false);
}

function changeTheme(theme) {
    document.body.classList.remove('dark-mode', 'blue-mode');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (theme === 'blue') {
        document.body.classList.add('blue-mode');
    }
}
