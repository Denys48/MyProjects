const container = document.querySelector("div");

container.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        alert(`Клікнуто по кнопці: ${event.target.textContent}`);
    }
});
