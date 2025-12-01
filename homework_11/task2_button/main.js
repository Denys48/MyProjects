const button = document.querySelector("button");
const text = document.querySelector("p");

function handleClick() {
    text.classList.toggle("blue");
}

button.addEventListener("click", handleClick);