function removeElement(array, item) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === item) {
            array.splice(i, 1);
        }
        
    }
}

const array = [1, 3, 4, 6, 2, 5, 7];

removeElement(array, 4);

console.log(array);