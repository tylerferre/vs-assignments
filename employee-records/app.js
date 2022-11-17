employees = []

function Employee(name, title, salary, status = "Full Time"){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = status 
}

Employee.prototype.printEmployeeForm = function(){
    console.log(this)
}

var bob = new Employee("Bob", "Doctor", "$500,000/yr")

var jim = new Employee("Jim", "Lawn mower", "$30,000/yr")

var fred = new Employee("Fred", "McDonalds shift leader", "$18,000/yr", "Part Time")

fred.printEmployeeForm()
bob.printEmployeeForm()
jim.printEmployeeForm()

employees.push(bob.name, jim.name, fred.name)
console.log(employees)