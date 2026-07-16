const birthdayInput = document.getElementById("birthday");
const startBtn = document.getElementById("startBtn");
const result = document.getElementById("result");

startBtn.addEventListener("click", () => {

    const birthDate = new Date(birthdayInput.value);

    if (!birthdayInput.value) {
        result.textContent = "Please select your birthday!";
        return;
    }

    const today = new Date();

    let nextBirthday = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
    );

    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    function updateCountdown() {

        const now = new Date();
        const difference = nextBirthday - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (difference % (1000 * 60 * 60))
            / (1000 * 60)
        );

        const seconds = Math.floor(
            (difference % (1000 * 60))
            / 1000
        );

        result.innerHTML =
            `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

        if (difference <= 0) {
            result.innerHTML = "🎉 Happy Birthday! 🎂";
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});