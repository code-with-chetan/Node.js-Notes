const fs=require('fs/promises');
const path=require('path');

const fileName="asyncAwait.txt";
const filePath=path.join(__dirname,fileName);
// console.log(filePath);

//finding directory folder.
// const file=__dirname;

// const readFolder=async()=>{
//     try{
//         const res=await fs.promises.readdir(file);
//         console.log(res);
        
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// readFolder();

//? creating/writing to a file.

// const writeFileExam=async()=>{
//     try{
//    await fs.writeFile(filePath,"this data is written in async await.","utf-8");
//    console.log("file is created successfully!");
   

//     }
//     catch(error){
//         console.error(error);
//     }
// }

// writeFileExam();


//? reading from the file.
// const readFileExam=async()=>{
//     try{
//    const data=await fs.readFile(filePath,"utf-8");
//    console.log(data);
   

//     }
//     catch(error){
//         console.error(error);
//     }
// }

// readFileExam();

//? updating data into the file.
// const appendFileExam=async()=>{
//     try{
//    await fs.appendFile(filePath,"\nthis data is updated successfully!!","utf-8");
//    console.log("file is updated successfully!");
   

//     }
//     catch(error){
//         console.error(error);
//     }
// }

// appendFileExam();


//?Deleting file.
// const deleteFileExam=async()=>{
//     try{
//    await fs.unlink(filePath);
//    console.log("file is deleted successfully!");
   

//     }
//     catch(error){
//         console.error(error.message);
//     }
// }

// deleteFileExam();




