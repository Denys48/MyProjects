let res = "20";

for (let i = 20.5; i <= 30; i += 0.5){
    res += " " + i;
}

console.log(res);

let arr = [];

for (let i = 20; i <= 30; i += 0.5){
    arr.push(i);
}

console.log(arr.join(" "));
console.log(...arr);