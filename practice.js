// var painter = {
//   name: "Van Gogh",
//   nationality: "Dutch",
//   paintings: ["The Starry Night", "Irises", "Almond Blossoms"],
// };
// Object.freeze(painter);
// Object.freeze(painter.paintings);
// painter.birthDate = "March 30, 1853";
// painter.paintings.push("Something");

// console.log(painter);
// // Should print { name: 'Van Gogh', nationality: 'Dutch', paintings: [ 'The Starry Night', 'Irises', 'Almond Blossoms' ] }

// let prm1 = new Promise((resolve, reject) => {
//   reject("rejected");
//   resolve("true from promise 1");
// });

// prm1
//   .then((res) => {
//     console.log({ res });
//   })
//   .catch((err) => {
//     console.log({ err });
//   });

// setTimeout(() => {
//   console.log("Finally i am here");
// }, 1000);

// console.log("i am 1 sec earlier than A");

// try {
//   a = c + d;
//   console.log({ a });
// } catch (err) {
//   console.log(err.message);
// }

// a = 1;
// a == 1 ? console.log(true) : console.log(false);
