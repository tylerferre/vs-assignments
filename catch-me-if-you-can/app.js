
// try{
//     sum = (x, y) => {
//         if(isNaN(x)){
//             throw new Error("Must use numbers!")
//         }else if(isNaN(y)){
//             throw new Error("Must use numbers!")
//         }
//         result = x + y
//         console.log(result)
//     }
//     sum(1, 2)
// }

// catch(err){
//     console.log(err)
// }

// finally{
//     console.log("test")
// }


user = {username: "sam", password: "123abc"};

login = (x, y) =>{
    if(x != user.username){
        throw new Error("Username does not match")
    }else if(y != user.password){
        throw new Error("Password does not match")
    }
    console.log("Login Successful!")
}

try{
    login("sam", "123abc")
}

catch(err){
    console.log(err)
}
