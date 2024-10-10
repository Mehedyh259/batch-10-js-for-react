const getPromise = (name) => {
    return new Promise((resolve, reject) => {
        console.log(`Hello ${name}. your promise is made`);
        setTimeout(() => {
          const error = true;
          if (!error) {
            resolve(`${name}.. your promise is resolved`);
          } else {
            reject(`Oppss.. ${name} Error happend..`);
          }
        }, 3000);
      });
}

getPromise("Mehedy")
.then(res => console.log(res))
.catch(err => console.log(err))
