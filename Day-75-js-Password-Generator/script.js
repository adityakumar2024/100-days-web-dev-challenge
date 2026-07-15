const passwordInput = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

function generatePassword() {

    let password = "";

    for(let i = 0; i < 12; i++){
        const randomIndex = Math.floor(
            Math.random() * chars.length
        );

        password += chars[randomIndex];
    }

    passwordInput.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {

    if(passwordInput.value === ""){
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(passwordInput.value);

    alert("Password Copied!");
});