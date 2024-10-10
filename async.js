const x = "hello"
console.log(x)

console.log("pizza 1 started making")

setTimeout(() => {                                          // 1,2
    console.log("pizza 1 done")
},5000)

console.log("pizza 2 started making")

setTimeout(() => {
    console.log("pizza 2 done")
},3000)

setTimeout("function",time)


console.log("pizza 3 started making")

setTimeout(() => {
    console.log("pizza 3 done")
},7000)


const callFunction = (callback) =>{
    console.log("hello")
    
    setTimeout(() => {
        callback()
    },3000)
} 

callFunction(fun1)

