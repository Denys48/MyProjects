function checkNumber() {
    let lastInput;
    for (let i = 0; i < 10; i++){
        lastInput = prompt("Enter the number:");

        if (lastInput.trim() === "") {
            break;
        }

        const number = Number(lastInput);

        if (number > 100 || !Number.isFinite(number)) {
            break;
        }
    }
    console.log(lastInput);
}

checkNumber();