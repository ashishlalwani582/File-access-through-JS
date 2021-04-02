#!/usr/bin/env node
const fs = require("fs");
//let data  = fs.readFileSync("/Users/ashishlalwani582/Desktop/Webd/wcat/package-lock.json","utf-8"); //  utf is a format which show in our file content in english we if don'y use it then it will sow a buffer 
let data = fs.readFileSync("abc.txt","utf-8"); 
console.log(data);
fs.writeFileSync("def.txt","I am very fine and checking is this working or not");
