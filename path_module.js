

// In Node.js, the path module is a built-in core module that provides utilities for working with file and directory paths.

// You don’t need to install it (like with npm packages) — you can just require or import it directly.

//  Why do we use the path module?

// To handle file paths in a way that works across operating systems (Windows uses \ while Linux/macOS use /).

// To avoid hardcoding file paths.

// To join, resolve, and normalize paths properly.


const path=require("path");

console.log(__dirname);
console.log(__filename);


//school folder/students/data.txt
const filePath=path.join("folder","students","data.txt");
console.log(filePath);

const parseData=path.parse(filePath);
const resolvedPath=path.resolve(filePath);
const extname=path.extname(filePath);
const basename=path.basename(filePath);
const dirname=path.dirname(filePath);

console.log(parseData);
console.log(resolvedPath);
console.log(extname);
// console.log(basename);

console.log(dirname);








