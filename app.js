//Sync code
//Code is executed from top to bottom, one line at a time
//In JS, the code execution is called single-thread
// All the Sync task is put inside the 'call stack'
//The async code get passed into the 'Web APIs' and got called
//once it's time came
// functions such as setTimeout(),setInterval(), addEventListener(), fetch()
//(noted, most of these functions have a callback function).. will be added
// into the Web APIs and executed once needed without blocking the
//code flow

// function someFunc() {
//   console.log("we are some functions");
//   console.log("do some works");
// }

// console.log("Start");
// someFunc();
// console.log("End");

//Async code

// console.log("Start");
// setTimeout(() => {
//   console.log("This is in the timeout");
// }, 5000);
// console.log("End");

//How to get around the delayed issue, we use the 'callback' function
//That callback function is used to continue code execution
//after an async operation has completed
// console.log("Start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data arrived");
      resolve({userEmail: email});
    }, 1000);
  });
}

function getVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 1500);
  });
}

function videoDetails(vid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The lord of the ring...");
    }, 2000);
  });
}

// const user = loginUser("jack@test.com", 1234, (user) => {
//   console.log(user);
//   getVideos(user.email, (videos) => {
//     console.log(videos);
//     videoDetails(videos[1], (title) => {
//       console.log(title);
//     });
//   });
// });

loginUser("jack@test.com", 1234)
  .then((user) => getVideos(user.email))
  .then((videos) => videoDetails(videos[0]))
  .then((details) => console.log(details));

async function displayUser() {
  const loggedUser = await loginUser("Jackie", 123);
  const videos = await getVideos(loggedUser.email);
  const detail = await videoDetails(videos[0]);
  console.log(detail);
}

// console.log("End");

// const yt = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("Fetching from youtube");
//     resolve({videos: [1, 2, 3, 4, 5]});
//   }, 2000);
// });

// const fb = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("Fetching from facebook");
//     resolve({user: "cats"});
//   }, 2000);
// });

// Promise.all([yt, fb]).then((result) => console.log(result));
