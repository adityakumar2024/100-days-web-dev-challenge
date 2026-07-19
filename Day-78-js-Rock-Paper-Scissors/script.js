const choices = document.querySelectorAll(".choice");

const userChoiceText = document.getElementById("userChoice");
const computerChoiceText = document.getElementById("computerChoice");
const message = document.getElementById("message");

const userScoreText = document.getElementById("userScore");
const computerScoreText = document.getElementById("computerScore");

const resetBtn = document.getElementById("resetBtn");

let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {

    choice.addEventListener("click", () => {

        const userChoice = choice.dataset.choice;

        const options = ["rock","paper","scissors"];
        const computerChoice =
        options[Math.floor(Math.random() * 3)];

        userChoiceText.textContent = userChoice;
        computerChoiceText.textContent = computerChoice;

        if(userChoice === computerChoice){
            message.textContent = "🤝 It's a Draw!";
        }

        else if(
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ){
            userScore++;
            userScoreText.textContent = userScore;
            message.textContent = "🎉 You Win!";
        }

        else{
            computerScore++;
            computerScoreText.textContent = computerScore;
            message.textContent = "😢 Computer Wins!";
        }

    });

});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;

    userScoreText.textContent = 0;
    computerScoreText.textContent = 0;

    userChoiceText.textContent = "-";
    computerChoiceText.textContent = "-";

    message.textContent = "Choose Your Move!";
});