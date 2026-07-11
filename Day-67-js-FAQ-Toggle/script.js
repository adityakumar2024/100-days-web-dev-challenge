const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {

        faq.classList.toggle("active");

        const icon = faq.querySelector("span");

        if(faq.classList.contains("active")){
            icon.textContent = "-";
        } else {
            icon.textContent = "+";
        }

    });
});