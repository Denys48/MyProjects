const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const messageArea = document.querySelector("textarea");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");

nameInput.addEventListener("input", () => {
    nameInput.setCustomValidity("");
})
messageArea.addEventListener("input", () => {
    messageArea.setCustomValidity("");
})
phoneInput.addEventListener("input", () => {
    phoneInput.setCustomValidity("");
})
emailInput.addEventListener("input", () => {
    emailInput.setCustomValidity("");
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const message = messageArea.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();

    if (!name) {
        nameInput.setCustomValidity("Name is required");
    }

    if (message.length < 5) {
        messageArea.setCustomValidity("Message must be at least 5 characters");
    }

    if (!phone || !phone.startsWith("+380")) {
        phoneInput.setCustomValidity("Phone must start with +380");
    }

    if (!email || !email.includes("@") || !email.includes(".")) {
        emailInput.setCustomValidity("Email must include @ and .");
    }

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    console.log(`Name: ${name}\nMessage: ${message}\nPhone: ${phone}\nEmail: ${email}`);
});
