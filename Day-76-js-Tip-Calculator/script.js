const billAmount = document.getElementById("billAmount");
const tipPercent = document.getElementById("tipPercent");
const calculateBtn = document.getElementById("calculateBtn");

const tip = document.getElementById("tip");
const total = document.getElementById("total");

calculateBtn.addEventListener("click", () => {

    const bill = Number(billAmount.value);
    const percentage = Number(tipPercent.value);

    if(bill <= 0 || percentage < 0){
        alert("Please enter valid values!");
        return;
    }

    const tipAmount = (bill * percentage) / 100;
    const totalAmount = bill + tipAmount;

    tip.textContent = tipAmount.toFixed(2);
    total.textContent = totalAmount.toFixed(2);

});