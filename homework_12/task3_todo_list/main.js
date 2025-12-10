const list = document.querySelector("ul");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("input");

list.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
});

addBtn.addEventListener("click", () => {
    const newText = document.createElement("p");
    const newBtn = document.createElement("button");
    const newLi = document.createElement("li");

    newText.textContent = input.value;
    input.value = "";
    newBtn.textContent = "Видалити";

    newLi.append(newText, newBtn);
    list.append(newLi);
})

