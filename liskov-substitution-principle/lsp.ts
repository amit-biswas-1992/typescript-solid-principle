//liskov substitution principle
//subtypes must be substitutable for their base types

//base class
class Employee {
    constructor(public name: string, public salary: number) {}
}

//derived class
class FullTimeEmployee extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary);
    }
}

//derived class
class PartTimeEmployee extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary);
    }
}

//derived class
class TemporaryEmployee extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary);
    }
}

class EmployeeRepository {
    employees: Employee[] = [];

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    getEmployees() {
        return this.employees;
    }
}

class EmployeeService {
    constructor(private employeeRepository: EmployeeRepository) {}

    getEmployees() {
        return this.employeeRepository.getEmployees();
    }

    addEmployee(employee: Employee) {
        this.employeeRepository.addEmployee(employee);
    }
}

class EmployeeController {
    constructor(private employeeService: EmployeeService) {}

    getEmployees() {
        return this.employeeService.getEmployees();
    }

    addEmployee(employee: Employee) {
        this.employeeService.addEmployee(employee);
    }
}

const employeeRepository = new EmployeeRepository();
const employeeService = new EmployeeService(employeeRepository);
const employeeController = new EmployeeController(employeeService);


//Here we are adding a new employee type and controller is accepting different types of employee derived classes
//and we are not modifying the existing code, it also follows open closed principle
//Derived classes are substitutable for their base classes
employeeController.addEmployee(new FullTimeEmployee("John", 1000));
employeeController.addEmployee(new PartTimeEmployee("Jane", 2000));
employeeController.addEmployee(new TemporaryEmployee("Jack", 3000));

console.log(employeeController.getEmployees()); // [Employee, Employee, Employee]
