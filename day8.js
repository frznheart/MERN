// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(a, b);

// let prm1 = new Promise((resolve, reject) => {
//   //   resolve(true)
//   reject({ data: "Server Error" });
// });

// prm1
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

try {
  a = "b" / 0;
  console.log({ a });
} catch (err) {
  console.log(err.message);
}
console.log("response is...");

//_____event queue, event loop, CALLstack queue, job queue

// console.log(1);
// console.log(2);

// // macrotask
// setTimeout(() => {
//   console.log("inside Timeout");
// }, 0);
// setTimeout(() => {
//   console.log("inside Timeout - 2");
// }, 100);

// // microtask
// pr1 = new Promise((resolve, reject) => {
//   resolve("true from promise - 1");
// });
// pr2 = new Promise((resolve, reject) => {
//   resolve("true form promise 2");
//   setTimeout(() => {
//     // resolve("true from promise  2");
//   }, 0);
// });

// pr1
//   .then((res) => {
//     console.log({ res });
//   })
//   .catch((err) => {
//     console.log({ err });
//   });
// pr2
//   .then((res) => {
//     console.log({ res });
//   })
//   .catch((err) => {
//     console.log({ err });
//   });
// console.log(3);
// console.log(4);

// console.log("dear sir,\n subject: javascript");
