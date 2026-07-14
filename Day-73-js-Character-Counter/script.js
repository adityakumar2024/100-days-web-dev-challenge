const textInput = document.getElementById("textInput");
const total = document.getElementById("total");
const remaining = document.getElementById("remaining");

textInput.addEventListener("input", () => {

    const textLength = textInput.value.length;

    total.textContent = textLength;
    remaining.textContent = 200 - textLength;

});