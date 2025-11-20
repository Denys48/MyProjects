function addWithClosure() {
    let sum = 0;
    return function (number) {
        sum += number;
        return sum;
    }
}

const sum = addWithClosure();

console.log(sum(4)); // 4

console.log(sum(6)); // 10

console.log(sum(10)); // 20

console.log(sum(7)); // 27