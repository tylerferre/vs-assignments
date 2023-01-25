const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = () =>{
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data.objects[0].pokemon)
        showData(data.objects[0].pokemon)
    }
}

showData = (arr) =>{
    for(let i = 0; i < arr.length; i++){
        const p = document.createElement('p')
        p.textContent = arr[i].name
        p.style.color = "white"
        p.style.textAlign = "center"
        document.body.appendChild(p)
    }
}