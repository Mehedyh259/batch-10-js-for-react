// forEach,map,find,filter,reduce

// const numbers = [3,54,2,456];

// for(let i = 0; i<numbers.length; i++)
//     console.log(numbers[i])

 

// const result = numbers.forEach((item) => console.log(item))
// console.log(result)
// const result = numbers.map((item,index) => {
//     console.log("item : ",item, " index: ",index)
//     return item*2
// })
// console.log(result)
// console.log(numbers)



// const numbers = [10,3,54,2,456];

// const sentence = `my numbers are ${numbers.forEach(item => item)}`;
// const sentence = `my numbers are ${numbers.map(item => item).join(" ")}`;
// console.log(sentence)

// const result = numbers.find((item) => item>1000)
// console.log(result)
// const result = numbers.filter((item) => item>1000)
// console.log(result)

const numbers = [1,2,3,4];

// [3,3,4]
// [6,4]
// [10]

/*
prev  = prev + current
0      = 0   +  1
1       = 1 +  2
3  = 3 + 3
6 = 6 + 4
10

*/


// let sum = 0;

// numbers.forEach((item) => sum+=item)
// console.log(sum)

// const total = numbers.reduce((previous,current) => previous + current )
// console.log(total)

const products = [
    {price:1},
    {price:2},
    {price:3},
    {price:4}
]

const total = products.reduce((previous,current) => previous + current.price, 0)
console.log(total)

