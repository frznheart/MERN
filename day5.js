// console.log(typeof [1, 2, 3]);
// console.log(typeof null);

//Pass by value vs pass by reference

// let a = 1;
// let a = "string";
// let a = null;
// let b = a;

// console.log(a, b);

// let obj = { a: 1, b: 2 };
// // obj.a = "string";
// // console.log(obj.a);
// let obj2 = obj;
// obj2.a = "changed";

// console.log(obj, " ", obj2);

// let arr = [1, 2, 3];
// check(arr);
// function check(arr) {
//   // spread syntax
//   let arr2 = [0, ...arr]; //only copying value not the location
//   arr2[3] = "changed";
//   console.log(arr2);
// }
// console.log(arr);

// let obj = { a: 1, b: 2 };
// let obj2 = { d: 4, ...obj, e: 5 };
// obj2.c = 3;
// console.log(obj, " ", obj2);

//TERNARY Operator

// console.log(true ? "yes" : "no");
// a = true ? (false ? "yes" : "not this time") : "no";
// console.log(a);

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
//   if (i == 5) break;
// }

let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

do {
  console.log(i);
  i++;
} while (i < 10);
