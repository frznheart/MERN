console.log(1);
console.log(2);

// CALLBACK
// => a dintion passed as variables , which is meant to be executed after it's preceding taksk is completed

// function callback() {
//   console.log("i am call back");
// }
setTimeout(() => {
  console.log("callback 2");
}, 0);
console.log(3);

// Promise
// - pending
// - resolved
// - reject

let prm1 = new Promise((resolve, reject) => {
  if (true) {
    resolve(true);
  }
  //   reject(false);
});

console.log(prm1);
