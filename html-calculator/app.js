const addForm = document.addForm
const subForm = document.subForm
const mulForm = document.mulForm

//add
addForm.addEventListener("submit", (e, num1, num2) =>{
    e.preventDefault()

    num1 = addForm.firstAdd.value
    num2 = addForm.secondAdd.value
    this.one = parseInt(num1);
    this.two = parseInt(num2);
    var result = one + two

    addForm.firstAdd.value = ""
    addForm.secondAdd.value = ""

    const newNum = document.getElementById("addResult")
    newNum.style.fontSize = "20px"
    newNum.textContent = result
    document.getElementById("addResult").append(newNum)

})

//subtract
subForm.addEventListener("submit", (e, num1, num2) =>{
    e.preventDefault()

    num1 = subForm.firstSub.value
    num2 = subForm.secondSub.value
    this.one = parseInt(num1);
    this.two = parseInt(num2);
    var result = one - two

    subForm.firstSub.value = ""
    subForm.secondSub.value = ""
    
    const newNum = document.getElementById("subResult")
    newNum.style.fontSize = "20px"
    newNum.textContent = result
    document.getElementById("subResult").append(newNum)

})

//multiply
mulForm.addEventListener("submit", (e, num1, num2) =>{
    e.preventDefault()

    num1 = mulForm.firstMul.value
    num2 = mulForm.secondMul.value
    this.one = parseInt(num1);
    this.two = parseInt(num2);
    var result = one * two

    mulForm.firstMul.value = ""
    mulForm.secondMul.value = ""
    
    const newNum = document.getElementById("mulResult")
    newNum.style.fontSize = "20px"
    newNum.textContent = result
    document.getElementById("mulResult").append(newNum)

})
