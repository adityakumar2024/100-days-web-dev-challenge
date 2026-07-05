document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");
    const openButton = document.getElementById("button");
    const cross = document.querySelector(".ri-close-fill");

    if (openButton && card) {
        openButton.addEventListener("click", () => {
            card.style.transform = "translateY(0)";
        });
    }

    if (cross && card) {
        cross.addEventListener("click", () => {
            card.style.transform = "translateY(-620px)";
        });
    }
});