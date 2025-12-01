const pythagoreanTable = document.createElement("table");

for (let i = 0; i <= 10; i++){
    const tr = document.createElement("tr");
    pythagoreanTable.append(tr);
    
    for (let j = 0; j <= 10; j++){
        if (i === 0 && j === 0) {
            const th = document.createElement("th");
            th.textContent = "";
            tr.append(th);
        } else if (i === 0) {
            const th = document.createElement("th");
            th.textContent = j;
            tr.append(th);
        }else if (j === 0) {
            const th = document.createElement("th");
            th.textContent = i;
            tr.append(th);
        } else {
            const td = document.createElement("td");
            td.textContent = i * j;
            tr.append(td);
        }
    }
}

document.body.prepend(pythagoreanTable);

