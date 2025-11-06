let number;

do {
    number = prompt("Enter a positive integer:");
    if (number === null) {
        alert("You canceled the input")
        break;
    }
    number = Number(number);

    if (!Number.isInteger(number) || number <= 0) {
        alert("Please, enter a correct number");
    }
} while (!Number.isInteger(number)|| number <= 0);

if (number !== null) {
    for (let i = 1; i <= 100 && i ** 2 <= number; i++){
        console.log(i);
    }
}