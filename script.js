const instructionTitle = document.getElementById("instructionTitle");
const subInstructionTitle = document.getElementById("subInstructionTitle");

const humanSelection = document.getElementById("humanSelection");
const computerSelection = document.getElementById("computerSelection");

const userOptionBtn = document.querySelectorAll(".game-controls__btn");

const humanScore = document.getElementById("humanScore");
const computerScore = document.getElementById("computerScore");


const gameOverModal = document.getElementById("gameOverModal");
const modalTitle = document.getElementById("modalTitle");
const modalResetBtn = document.getElementById("modalResetBtn");

// Default Cacheing
const defaultTitle = instructionTitle.textContent;
const defaultSubTitle = subInstructionTitle.textContent;
const defaultAvatar = humanSelection.src;


// ---- Human Choice ----
userOptionBtn.forEach((button) => {
    button.addEventListener("click", (event) => {
        const humanChoice = event.currentTarget.id;
        humanSelection.src = `assets/left_${humanChoice}.png`;
        humanSelection.alt = `Human chose ${humanChoice}`;

        const computerChoice = getComputerChoice()

        playRound(humanChoice, computerChoice);
    })
})

// ---- Computer Choice ----
const getComputerChoice = () => {
    const compOption = ["paper", "scissors", "rock"];
    const randomIndex = Math.floor(Math.random() * compOption.length)
    const compChoice = compOption[randomIndex];
    computerSelection.src = `assets/right_${compChoice}.png`;
    computerSelection.alt = `Computer chose ${compChoice}`;
    return compChoice;
};

let playerPoints = 0;
let computerPoints = 0;

const playRound = (userChoice, computerChoice) => {
    if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")) {
        playerPoints += 1;
        humanScore.textContent = playerPoints;
        instructionTitle.textContent = "You Won This Round";
        subInstructionTitle.textContent = `${userChoice} beats ${computerChoice}`
    } else if (userChoice === computerChoice) {
        instructionTitle.textContent = "This Is Tie !";
        subInstructionTitle.textContent = `${userChoice} | ${computerChoice}`
    } else {
        computerPoints += 1;
        computerScore.textContent = computerPoints;
        instructionTitle.textContent = "Computer Won This Round";
        subInstructionTitle.textContent = `${computerChoice} beats ${userChoice}`
    }

    if (playerPoints === 5) {
        modalTitle.textContent = "You Won !"
        gameOverModal.classList.remove("hidden")
        gameOverModal.ariaHidden = false;
    } else if (computerPoints === 5) {
        modalTitle.textContent = "Computer Won !";
        gameOverModal.classList.remove("hidden");
        gameOverModal.ariaHidden = false;

    }
}


// ---- Reset Setting ----
modalResetBtn.addEventListener("click", (event) => {

    // 1. Release active focus from the button to satisfy W3C Accessibility rules
    event.currentTarget.blur();

    playerPoints = 0;
    computerPoints = 0;

    humanScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;

    instructionTitle.textContent = defaultTitle;
    subInstructionTitle.textContent = defaultSubTitle;

    humanSelection.src = defaultAvatar;
    computerSelection.src = defaultAvatar;

    humanSelection.alt = "Human Score Mark";
    computerSelection.alt = "Computer Score Mark";

    gameOverModal.classList.add("hidden")
    gameOverModal.ariaHidden = true;
})

