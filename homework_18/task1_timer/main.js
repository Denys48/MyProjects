function setTimer(evt) {
    evt.preventDefault();

    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    let time = getTime();

    if (time <= 0) return;
    
    input.value = "";
    timer.textContent = convertToMinutes(time);

    timerInterval = setInterval(function () {
        time -= 1;
        timer.textContent = convertToMinutes(time);
        if (time === 0) clearInterval(timerInterval);
    }, 1000)
}

function getTime() {
    const formData = new FormData(form);
    return Number(formData.get("time-input"));
}

function convertToMinutes(time) {
    let seconds = String(time % 60).padStart(2, "0");
    let minutes = String(Math.floor(time / 60)).padStart(2, "0");
    return `${minutes}:${seconds}`;
}

const form = document.querySelector("form");
const input = document.querySelector("input");
const timer = document.querySelector("div");

let timerInterval = null;
form.addEventListener("submit", setTimer);