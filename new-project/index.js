console.log("Inside new-project/index.js");
console.log("Node Path is", process.env.NODE_PATH);

//Workingnpm
//var moment = require(moment");

// We can also provide the relative or absolute path
// var path = require("path");
// global.appRoot = path.resolve("../old-project/node_modules/");
//var moment = require(`${appRoot}/moment`);

const dotenv = require("dotenv");
dotenv.config();
const moment = require("moment");

console.log("dotenv is picked from ./node_modules/", dotenv);
console.log("Moment is picked from ../old-project/node_modules/", moment);
