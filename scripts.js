const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

let counterValue = 0;
function updateDisplay() {
    counterDisplay.textContent = counterValue;
}

incrementBtn.addEventListener("click",
function(){
    counterValue++;
    updateDisplay();
});

decrementBtn.addEventListener("click",
    function(){
        if (counterValue > 0) {
            counterValue--;
        }else{
            alert("Counter cannot be less than zero")
        }
        updateDisplay();
    }
);

resetBtn.addEventListener("click",
    function(){
        counterValue = 0;
        updateDisplay();
    }
);