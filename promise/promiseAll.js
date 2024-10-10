const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result of promise=>1 ");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result of promise=>2 ");
    // reject("rejected from 2")
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result of promise=>3 ");
  }, 3000);
});

console.log("calling 3 async tasks")
// promise1.then((response) => {
//   console.log(response);
//   promise2.then((response) => {
//     console.log(response);
//     promise3.then((response) => {
//       console.log(response);
//     });
//   });
// });

// Promise.all([promise1,promise2,promise3])
// .then(values => {
//     console.log(values)
// })
// .catch(err => console.log(err))

const getAllPromise = async () => {
    const [result1,result2,result3] = await Promise.all([promise1,promise2,promise3])
    console.log(result1,result2,result3)
}
getAllPromise()