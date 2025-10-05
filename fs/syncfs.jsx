
const fs=require("fs");
const path=require("path");

const fileName="text.txt";
const filePath=path.join(__dirname,fileName)
console.log(filePath);


//*fs.writeFileSync():Writes data to a file.If the file does not exist,it will be created.If the file exits
//* it overwrites the content.

//!syntax:-fs.writeFileSync(filePath,data,options);
//?filePath:The file path the write to.
//?data:The content to write to the file.
//?options:Optional,Includes encoding ("utf8") ,mode, or flags.



const writeFile=fs.writeFileSync(filePath,"This is a initial file updated 2","utf-8");
// console.log(writeFile);


//*fs.readFileSync():Reads a file's content and returns it as a string or buffer.
//!syntax:-const data=fs.readFileSync(filePath,options):
//?filePath:-path of the file to read.
//?options:-optional,encoding ('utf8') to get data as a string.

const readFile=fs.readFileSync(filePath,"utf-8");
// console.log(readFile.toString());
// console.log(readFile);


//*fs.appendFileSync():Appends data to a file,If the file does not exits it creates the file.
//!syntax:-fs.appendFileSync(filePath,data,options).
//?filePath:-file path for append to
//?data:-content to add to the file
//?options:-optional,encoding options('utf8).

const appendFile=fs.appendFileSync(filePath,"\nThis is the updated data","utf-8");
console.log(appendFile);


//*Delete file (fs.unlinkSync()):Deletes a file by its path.
//!syntax:-fs.unlinkSync(filepath):
//?filePath:-the path of the file to delete.

// const deleteFile=fs.unlinkSync(filePath);
// console.log(deleteFile);

// //*Renaming the file name from old name to new name.
const updatedFile="newTest.txt";
const newfilePath=path.join(__dirname,updatedFile);
const renameFile=fs.renameSync(filePath,newfilePath);
console.log(renameFile);









