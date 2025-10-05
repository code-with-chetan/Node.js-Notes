const fs=require('fs');
const path=require('path');

const fileName="async.txt";

const filepath=path.join(__dirname,fileName);
console.log(filepath);


//? writing to a file .
// const writeFile=fs.writeFile(filepath,"This is a async data","utf-8",(error)=>{
//     if(error) console.error(error)
//         else console.log("file is created sucessfully!");
        
// })


//?Reading from the file
// const readFile=fs.readFile(filepath,"utf-8",(error,data)=>{
//    if(error) console.error(error) 
//     else console.log(data);
    
// })

//?appending to a file
// const appendFile=fs.appendFile(filepath,"\nThis is a updated data","utf-8",(error)=>{
//     if(error) console.error(error)
//         else console.log("file is updated sucessfully!");
        
// })

//?deleting a file
const deleteFile=fs.unlink(filepath,(error)=>{
    if(error) console.error(error)
        else console.log("file is deleted sucessfully!");
        
})

