const obj = {
    name: "hello",
    age: 42,
    address:"rajshahi",
    nest:{
        city:"world"
    }
}

const {age,nest,...remaining} = obj
console.log(nest.city, remaining)
// console.log(age,remaining)

// const obj2 = {...obj};

// obj2.phone = 234234;

// console.log(obj)
// console.log(obj2)

// const {age:myAge} = obj;

// console.log(myAge)