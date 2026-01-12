function Student(firstName, lastName, birthYear, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    const presence = new Array(25);

    this.getAge = function() {
        return new Date().getFullYear() - this.birthYear;
    }

    this.getAvarageGrade = function () {
        if (this.grades.length === 0) {
            return 0;
        }
        let sum = this.grades.reduce((acc, grade) => acc + grade, 0);        
        return sum / this.grades.length;
    }

    this.present = function () {
        const i = presence.indexOf(undefined);
        if (i != -1) {
            presence[i] = true;
        }
    }

    this.absent = function () {
        const i = presence.indexOf(undefined);
        if (i != -1) {
            presence[i] = false;
        }
    }

    this.summary = function() {
        let avarageGrade = this.getAvarageGrade();
        
        let total = 0;
        let attended = 0;

        for (value of presence) {
            if (value !== undefined) {
                total++;
                if (value === true) {
                    attended++;
                }
            }
        }

        let avaragePresence = total ? attended / total : 0;

        if (avarageGrade > 90 && avaragePresence > 0.9) {
            return "Молодець!";
        }
        if (avarageGrade > 90 || avaragePresence > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }

}

const student1 = new Student("Alex", "Goring", 2007, [100, 90, 89]);
student1.present();
student1.present();
student1.present();
student1.absent();

console.log(student1.summary());

const student2 = new Student("Rudolf", "Hofbratt", 2000, [85, 90, 89]);
student2.present();
student2.present();
student2.present();
student2.present();

console.log(student2.summary());

const student3 = new Student("Martin", "Bretzel", 2004, [44, 90, 89]);
student3.present();
student3.absent();
student3.present();
student3.absent();

console.log(student3.summary());