// function show(){
//     console.log("normal function")
// }

// const show = () => {
//     console.log("arrow function")
// }
// const show1 = () => {
//     return "arrow function";
// }
// const show2 = (x) => {
//     console.log("value: ",x)
// }
// const show3 = (x) => {
//     return x*2;
// }

// show()

let addArray = (numbers) => {
    if(!Array.isArray(numbers))
        return "Invalid";
 
  let sum = 0;
  for (let number of numbers){
      sum += number;
      console.log(sum)
  }

  return sum;
};

let x = [1,2,3]
console.log(addArray(x))
