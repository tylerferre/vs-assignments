const colors = ["red", "blue", "green"]

document.getElementById("add")
.addEventListener("click", function (e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("click", function(e){
       this.parentElement.style.backgroundColor = e.target.value
    })
    return dropDown
}

function createSubItem(e){
    
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value
    subItem.textContent = subItemValue
    const dropDown = createDropDown(e)
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}

// function createSubItem(e){
    
//     const subItemTwo = document.createElement("div")
//     var subItemValue = document.getElementById("input").value
//     subItemTwo.textContent = subItemValue
//     const dropDown = createDropDown(e)
//     subItemTwo.appendChild(dropDown)
//     subItemTwo.setAttribute("class", "subItem")
//     return subItemTwo
// }