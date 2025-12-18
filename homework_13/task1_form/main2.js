const nameRegex = /^[A-Za-z]+$/;
const messageRegex = /^.{5,}$/;
const phoneRegex = /^\+380( |-)?\(?\d{2}\)?( |-)?\d{3}( |-)?\d{2}( |-)?\d{2}$/;
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const messageArea = document.querySelector("textarea");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");

nameInput.addEventListener("input", () => {
    nameInput.setCustomValidity("");
});
messageArea.addEventListener("input", () => {
    messageArea.setCustomValidity("");
});
phoneInput.addEventListener("input", () => {
    phoneInput.setCustomValidity("");
});
emailInput.addEventListener("input", () => {
    emailInput.setCustomValidity("");
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const message = messageArea.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();

    if (!name) {
        nameInput.setCustomValidity("Name is required");
    } else if (!nameRegex.test(name)){
        nameInput.setCustomValidity("Name must contain only letters");
    }

    if (!message) {
        messageArea.setCustomValidity("Message is required");
    } else if (!messageRegex.test(message)) {
        messageArea.setCustomValidity("Message must contain at least 5 symbols");
    }


    if (!phone) {
        phoneInput.setCustomValidity("Phone number is required");
    } else if (!phoneRegex.test(phone)) {
        phoneInput.setCustomValidity("Phone must start with +380 and have valid format");
    }

    if (!email) {
        emailInput.setCustomValidity("Email is required");
    } else if (!emailRegex.test(email)) {
        emailInput.setCustomValidity("Email must contain @ and . and have valid format");
    }

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    console.log(`Name: ${name}\nMessage: ${message}\nPhone: ${phone}\nEmail: ${email}`);
});