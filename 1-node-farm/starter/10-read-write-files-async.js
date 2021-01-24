const fs = require("fs");

// Run node {file_name} to execute using node.js

// Reading files asynchronously
fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
  if (err) return console.log("ERROR!");
  console.log(data);
});
console.log("Will read file!");

// Example callback hell
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      // Writing file asynchronously
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Your file has been written");
      });
    });
  });
});
