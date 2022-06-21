// console.log(global);

// console.log(process);

// console.log(process.argv);

// console.log(1111);
// process.exit();
// console.log(2222);

// console.log(__filename);
// console.log(__dirname);
// console.log("hello! World");

// NODE MODULES
// core module
// local module
// third-party module
// ES6 module
//import fs from "fs"

//common JS
// const fs = require("fs");
// fs.writeFile("custom.txt", "radom string", (err, data) => {
//   if (err) console.log({ err });
//   console.log({ data });
// });
// console.log(222);

// let status = fs.writeFileSync("custom2.txt", "asdfgh");
// console.log({ status });
// console.log(333);

// fs.readFile("./custom.txt", "utf-8", (err, data) => {
//   //   console.log(data.toString());
//   console.log(data);
// });

// const path = require("path");

// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.join("custom", __filename));

// const os = require("os");

// console.log(os);

// const auth = require("./auth.js");

// console.log({ auth });

// auth.login();
// auth.signup();

//HTTP Module
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request accepted");
  res.write("request accepted");
  res.end();
});

server.listen(8000, () => {
  console.log("listening");
});

//Rest API
//HTTP VERBS/METHODS
/*
GET
post
PUT / PATCH
DELETE
*/
