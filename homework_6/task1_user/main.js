const user = {
  username: "John",
  age: 24,
  city: "Kyiv",
  showData() {
    console.log(`Username is ${this.username}, age is ${this.age}, city is ${this.city}`);
  }
};

user.showData();