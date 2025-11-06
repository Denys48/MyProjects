let number;

do {
    number = prompt("Enter an integer:");
    if (number === null) {
        alert("You canceled the input");
        break;
    }
    number = Number(number);

    if (!Number.isInteger(number)) {
        alert("Please, enter an integer");
    }
} while (!Number.isInteger(number));


if (number !== null) {
    if (number <= 1) {
        console.log(`The number ${number} is not prime!`);
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i++){
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        console.log(isPrime ? `The number ${number} is prime!` : `The number ${number} is not prime!`);
    }
}