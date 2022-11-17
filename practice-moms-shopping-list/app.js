
var form = document.inputForm

form.addEventListener("submit", function(e){
    e.preventDefault()

    var listItem = inputForm.item.value
    form.item.value = ""
    var newItem = document.createElement("li")
    var removeButton = document.createElement("button")
    removeButton.textContent = "Remove"
    newItem.textContent = listItem
    var myLi = document.getElementById("list")
    list.append(newItem, removeButton)

        newItem.style.textAlign = "center"
        newItem.style.fontFamily = "tahoma"
        newItem.style.textAlign = "center"

removeButton.setAttribute("id", "remove")
document.getElementById("remove")
.addEventListener("click", function(){

    removeButton.remove()
    newItem.remove()
})

})

document
.getElementById("enterButton")
.addEventListener("mouseover", () => {
enterButton.style.color = "green"
})

document
.getElementById("enterButton")
.addEventListener("mouseleave", () => {
enterButton.style.color = "black"
})

document
.getElementById("enterButton")
.addEventListener("mousedown", () => {
enterButton.style.color = "olive"
})

document
.getElementById("enterButton")
.addEventListener("mouseup", () => {
enterButton.style.color = "green"
})
