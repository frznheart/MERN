// String Functions
// let arr = [5, 4, 3, 2, 1];

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(`index `, i, ":", arr[i]);
// }
// console.log("---------------");

// arr.forEach((element, index) => {
//   console.log("---index", index, "----element", element);
// });

// ARRAY MANIPULATION

let arr1 = [1, 2, 3, 4, 5];
// arr1 = [...arr1, 3];
// console.log(arr1);
// arr1.push(3, 4, 5, 6);
// arr1.unshift(0); //adds a value in o index of array
// console.log(arr1);
// // arr1.pop(); //removes last item of array
// arr1.shift(); //removes first item of array
// arr1.splice(3, 2); //removes from between selectively
// console.log(arr1);
//returns new array
// console.log(arr1.slice(2, 4));
// arr2 = arr1.filter((element) => {
//   if (element == 2) {
//     return true;
//   }
// });

// console.log(arr2);
arr3 = arr1.map((e1) => e1 * 2);
console.log(arr3);
