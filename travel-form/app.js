const form = document.myForm

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const place = form.place.value

    const diet = []

    for(let i = 0; i < form.food.length; i++){
        if(form.food[i].checked){
            diet.push(form.food[i].value)
        }
    }

    form.reset()
 
    alert(`
    First Name: ${firstName}
    Last Name: ${lastName} 
    Age: ${age} 
    Gender: ${gender} 
    Diet Restrictions: ${diet} 
    Destination: ${place}
    `)
})