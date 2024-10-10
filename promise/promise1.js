// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

// Promise => resolve/reject

const promise1 = new Promise((resolve, reject) => {
  console.log("promise is made");
  setTimeout(() => {
    const error = false;
    if (!error) {
      resolve("Promise is reloved");
    } else {
      reject("Oppss.. Error happend..");
    }
  }, 3000);
});

const getPromise = async () => {
  try {
    const response = await promise1;
    console.log(response);
  } catch (error) {
    console.log(error);
  }finally{
    console.log("finally block run")
  }
};
getPromise();

// promise1
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally block run");
//   });
