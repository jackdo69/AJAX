const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got the user");
    resolve({user: "jack"});
  }, 2000);

  setTimeout(() => {
    reject(new Error("User not logged in"));

  }, 3000)
});
//A promise will only have either resolve or reject,
// in this case the resolve came first so the reject
// will never be executed
promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(err));
