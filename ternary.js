const person = {
    name:"mehedy",
    gender: "male",
    isStudent:true
}

// let sentense = "";
// if(person.isStudent){
//     sentense = "he is a student"
// }else{
//     sentense = "he is not a student"
// }

// let sentense = ""

// person.isStudent ? sentense = "he is a student" : sentense = "he is not a student";

let sentense = person.isStudent == true ? "he is a student" : "he is not a student";

console.log(sentense)