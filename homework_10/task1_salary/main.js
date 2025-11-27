const company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        web: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

function calculateSalarySum(company) {
    let sum = 0;
    for (const value of Object.values(company)) {
        if (Array.isArray(value)) {
            sum += value.reduce((arrSum, employee) => arrSum + employee.salary, 0);
        } else {
            sum += calculateSalarySum(value);
        }
    }
    return sum;
}

console.log(calculateSalarySum(company));