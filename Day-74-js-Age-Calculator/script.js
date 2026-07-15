const calculateBtn = document.getElementById("calculateBtn");
const dob = document.getElementById("dob");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {

    if (dob.value === "") {
        result.innerHTML = "Please select your date of birth!";
        return;
    }

    const birthDate = new Date(dob.value);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 &&
        today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    result.innerHTML = `Your Age is ${age} Years`;
});