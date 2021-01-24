const fs = require("fs");

// Run node {file_name} to execute using node.js

// Reading files
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

// Writing files
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written!");
