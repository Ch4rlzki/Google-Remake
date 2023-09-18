const queryInput = document.getElementsByName("q")[0];
const clearButton = document.getElementById("clearButton");

queryInput.addEventListener("input", (e) => {
    const length = e.target.value.length;
    if (length > 0) {
        clearButton.classList.replace("d-none", "d-block");
    } else {
        clearButton.classList.replace("d-block", "d-none");
    }
});

clearButton.addEventListener("click", () => {
    queryInput.value = "";
    clearButton.classList.replace("d-block", "d-none");
});