const getComputerChoice = () => {
    const compOption = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * compOption.length)
    const computerChoice = compOption[randomIndex];
    return computerChoice;
}
