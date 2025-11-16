function addNumbers(arr){
    const { sum, numberQuantity } = arr.reduce((acc, el) => {
        if (Number.isFinite(el)) {
            acc.sum += el;
            acc.numberQuantity++; 
        }
        return acc;      
    }, { sum: 0, numberQuantity: 0, });

    return numberQuantity ? sum / numberQuantity : 0;  
}

let a = addNumbers([4, 7, -3, "2", null, undefined, NaN,
    +Infinity, [1, 2], { a: 1, b: 2 }, 12n, Symbol("abc"), "assa", true]);
console.log(a);