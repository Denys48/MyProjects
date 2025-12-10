const goBtn = document.querySelector("#goBtn");
const setBtn = document.querySelector("#setBtn");

function checkURL(url) {
    try {
        new URL(url);
        return true
    } catch (e) {
        return false;  
    }
}

let link = "";

setBtn.addEventListener("click", () => {
    const input = prompt("Enter the link:"); 

    if (checkURL(input)) {
        link = input;
        alert("New URL successfully saved!");
    } else {
        alert("Please, enter valid URL");
    }
})

goBtn.addEventListener("click", () => {
    if (!link) {
        alert("You need to set valid URL first");
    }
    location.href = link;
});