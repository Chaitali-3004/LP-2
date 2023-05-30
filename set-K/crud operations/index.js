//Challenge Time
// 1: Create a folder named it Thapa
// 2: Create a file in it named bio.txt and data into it.

// 3: Add more data into the file at the end of the existing data.
// : Read the data without getting the buffer data at first.
// file encoding
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder

const fs = require("fs");

fs.mkdirSync("hello");

//fs.writeFileSync("hello/bio.txt", "my name is chaitali");

//fs.appendFileSync("hello/bio.txt", " From DYPCOE IT dep.");

//const data = fs.readFileSync("hello/bio.txt", "utf8"); 
//console.log(data);

//fs.renameSync("hello/bio.txt", "hello/myBio.txt");

//fs.unlinkSync("hello/myBio.txt");

//fs.rmdirSync("hello");

