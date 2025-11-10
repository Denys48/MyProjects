const contactBook = {
  contacts: [],
  findContact(){
    const searchQuerry = prompt("Who you want to find?").trim().toLowerCase();
    const result = this.contacts.filter(contact => contact.username.toLowerCase() === searchQuerry);
    if (result.length > 0) {
      console.log(result);
    } else {
      console.log("No contact found");
    }
  },
  addContact(){
    const name = prompt("Enter the contact name:").trim();
    const phone = prompt("Enter the phone number:").trim();
    const email = prompt("Enter the email:").trim();
    if (!name || !phone || !email) {
      console.log("All fields are required!");
      return;
    }
    const contact = {
      username: name,
      phone: phone,
      email: email,
    };
    this.contacts.push(contact);
      console.log("Contact successfully created"); 
  },
  
};