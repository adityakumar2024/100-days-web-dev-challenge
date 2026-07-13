const generateBtn = document.getElementById("generateBtn");
const number = document.getElementById("number");

generateBtn.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    number.textContent = randomNum;
});