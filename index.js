// var myName; //DECLARATION

// var myName = 'JOhn Doe';   //INITIALIZATION
// myName = 'John Smith';     //Reinitialization
// console.log(myName);

// let myName2 = 'JOhn 2';   //Was introduced in ECMAScript in 2015
// // let myName2 = null;   //cannot reinitialiaze wing let keyword;
// myName2 = 'john smith 3';
// console.log(myName2);

// const myName3 = null;
// // myName3 = 'john smith hello';  //reinitialization not allowed in const

// console.log(myName3);

// //Naming Pattern
// var camelCase = "Camel Case";
// var snake_case = "Snake Case";

// // Naming cannot start with number or special character such as ! @ # $ but can begin with underscore '_'

// //DATA types
// // int
// // Array
// // Boolean
// // null
// // undefined

// let random;
// console.log(random);

// console.log(typeof(myName));  // to know the datatype

// // Primitive and non Primitive data type

// /* primitive
//     number
//     float
//     boolean */

// /* non-primitive //reference data type
//     object
//     JavaScript Object
//     array
//     JSON object */

// let fruit = 'apple';
// let fruit2 = 'banana';
// let age = 25;
// let arr = [fruit, fruit2, age];
// // indexing starts in array with 0
// console.log(arr[0]);
// let value =12;

// let obj = {
//     value:"Key"
// }
// let value2 = null;
// let obj2 = {
//     value,
//     value2,  //keys are also referred as attribute, property
//     arr
// }

// console.log({arr});
// console.log({obj2});
// console.log(obj2.key2);

//Opertators

/* Assignment '='   
Arithematic + - * / %  '**'(exponential) 
    increment(++) and decrement(--) 
    post and pre increment and decrement
Comparison == >= <= 
Logical
Bitwise */

//pre increment //retruns value after incremation
// let num = 100;
// console.log(++num);

//post increment // returns value befor incremation
// let num2 = 100;
// console.log(num2++);

//Logical operator //returns only one value either true or false
/* 
AND //returns true if bith condition satisfies
OR  //returns true if any one of condition is true
NOT //reverse the boolean
*/

// let status1 = true;
// let status2 = true;
// let status3 = false;

// console.log("AND " + (status1 && status2) && status3);
// console.log("NAND " + !((status1 && status2) && status3));
// console.log("OR " + (status1 && status2) || status3);
// console.log("NOR " + !((status1 && status2) || status3));
// console.log("NOT " + !status1);

//comparision
//equals to ==
//not equals to !=
//to strickly check datatype ===

//falsy value

// let num1 = 12;
// let num2 = 11;
// let str = '12';
// console.log(num1 == str); //check  the value
// console.log(num1 === str); //strickly checks datatype only

// console.log(num1 !== str);
// console.log(str + num2); //concatinates
// console.log(str - num2); // does arithematic operation

// console.log(num2 - '12a'); //NAN // cannot do arithematic operations using number and string

// CONDITIONAL
// if ({}){                        //JavaScript consider Java Object as true evenif it is empty
//     console.log("is true");
// }

//FALSY VALUE
/* 
false
null
'' //empty string
0
NaN
 */

// if('RANDOM'){
//     console.log("is true");
// }
// if (''){                            //JavaScript consider empty sting as false
//     console.log("is true 1");
// }else{
//     console.log('FALSE');
// }

/* num = 5;
switch(num){                                //switch case requires exact datatypes
    case 1:
        console.log("number is 1");
        break;
    case 2:
        console.log("number is 2");
        break;
    default:
        console.log('THE END!!! ');
        break;
} */

// var num1 = 1; //var creates global variables
// let num2 = 2;
// const num3 = 3;

// if (true) {
//   var num1 = 100;
//   let num2 = 222; //let creats a block scope variable
// }

// console.log(num1, num2);

// //DRY --> DONOT REPEAT YOURSELF

// function sum() {
//   console.log("I am inside sum");
//   console.log(num1 + num2);
// }

// //Calling sum function
// sum();

//funtion(paramenters,parameters)
// function sum(num1, num2) {
//   console.log("i am inside sum");
//   return num1 + num2;
// }
// //sum(attribute1,attribute2......)
// summed = sum(1, 2);
// console.log(summed);

//ARROW FUNCTION

// const calculatetDiff = (value1, value2) => value1 - value2; //single line arrow function

// const calculateDiff = (value1, value2) => {
//   let value3 = value1 - value2;
//   console.log(`Difference is ${value3}`);
// };

// calculateDiff(4, 6);

// let diff = calculaetDiff(5, 4);
// console.log(diff);

//FUCNTIONAL SCOPE
// var num1 = 1;
// let num2 = 2;
// const num3 = 3;

// if (true) {
//   //Block scoped

//   var num1 = 111;
//   let num2 = 222; //Blocked scoped variable  //cannot be accessed outside the scope
//   const num3 = 333; //Blocked scoped variable
// }
// function testScope() {
//   //funcitonal scope
//   var num1 = 11111111;
//   let num2 = 222222222;
//   const num3 = 333333333;
//   //   console.log(num2);
//   //   console.log(num3);
// }
// testScope();
// console.log(num1);

//Passing by value and passing by reference
