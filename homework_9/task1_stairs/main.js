let ladder = {
    currentStair: 0,
    up: function () { // підніматиме вас на одну сходинку
        this.currentStair++;
        return this;
    },
    down: function () { // опускатиме вас на одну сходинку
        this.currentStair--;
        return this;
    },
    showStep: function () { // показує поточну сходинку
        console.log(this.currentStair);
        return this;
    }
  
};

ladder.up().up().down().showStep();