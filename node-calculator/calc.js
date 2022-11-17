const readline = require("readline-sync")

var first = readline.question("Please enter your first number: ")
var second = readline.question("Please enter your second number: ")
var operation = readline.question("Please enter the operation to perform: +, -, *, / ")

var calculate = function (num1, num2, operation) {
    this.one = parseInt(num1);
    this.two = parseInt(num2);
    this.operation = operation;

    this.result = () => {
        var one = this.one
        var two = this.two
        var operation = this.operation

        if (operation === "+") {
            var result = one + two
        } else if (operation === "-") {
            var result = one - two
        } else if (operation === "/") {
            var result = one / two
        } else if (operation === "*") {
            var result = one * two
        } else {
            var result = "Error"
        }

     console.log("The result is: " + result + "!");
    }

}
 var calculation = new calculate(first, second, operation);
 calculation.result()


