const img = document.querySelector("img");

const randomNumber = Math.ceil(Math.random() * 9);

img.setAttribute("src", `./images/${randomNumber}.jpeg`);


