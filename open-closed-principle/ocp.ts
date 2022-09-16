//open closed principle
//open for extension but closed for modification
//we can add new functionality without modifying the existing code
//we can add new functionality by extending the existing code
//we can add new functionality by adding new classes
//we can add new functionality by adding new methods
//we can add new functionality by adding new properties
//we can add new functionality by adding new interfaces
//we can add new functionality by adding new modules
//we can add new functionality by adding new packages

//how this code is following open closed principle:
//if any new operation is added, we just need to extend Operation interface and implement execute method as per necessary

interface Operation {
    execute(a: number, b: number): number;
}

class Add implements Operation {
    execute(a: number, b: number) {
        return a + b;
    }
}

class Subtract implements Operation {
    execute(a: number, b: number) {
        return a - b;
    }
}

class Multiply implements Operation{
    execute(a: number, b: number): number {
        return a * b;
    }
}

class Divide implements Operation{
    execute(a: number, b: number): number {
        return a / b;
    }
}

class Calculator {
    constructor(private operation: Operation) {}

    calculate(a: number, b: number) {
        return this.operation.execute(a, b);
    }
}

const add = new Add();
const subtract = new Subtract();
const multiply = new Multiply();
const divide = new Divide();

const calculator = new Calculator(add);
console.log(calculator.calculate(10, 5));

const calculator2 = new Calculator(subtract);
console.log(calculator2.calculate(10, 5));