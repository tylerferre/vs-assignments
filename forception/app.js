// people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
// alphabet = "abcdefghijklmnopqrstuvwxyz"
//     var alph = alphabet.split("")
//         for(var i = 0; i < people.length; i++){
//             for(var a = 0; a < people[i].length; a++){
//             // console.log(people[i] + ": " + alph)
//            var final =  people[i] + ": ".concat(alph)
//            console.log(final)
//             }
//         }



people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
alphabet = "abcdefghijklmnopqrstuvwxyz"

var alph = alphabet.split("")
        for(var i = 0; i < people.length; i++){
            for(var a = 0; a < people[i].length; a++){
            // console.log(people[i] + ": " + alph)
           var final =  people[i] + ": ".concat(alph)
                
           console.log(final)
            }
        }

    