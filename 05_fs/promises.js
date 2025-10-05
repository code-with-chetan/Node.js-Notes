const fs=require('fs');
const path=require('path');

const fileName="promise.txt";
const filepath=path.join(__dirname,fileName);


//finding the total numbers of files in the current directory (05_fs).
// const fileName1=__dirname;

// fs.promises.readdir(fileName1)
// .then((data)=>console.log(data)
// .catch((error)=>console.error(error))
// );


//* writing in a file.
// fs.promises.writeFile(filepath,"file is created in promises.","utf-8")
// .then(console.log('file created successfully!')
// )
// .catch((error)=>console.log(error)
// );

//*reading from a file.
fs.promises.readFile(filepath,'utf-8')
.then((data)=>console.log(data))
.catch((error)=>console.error(error)
)

//*updating data into a file.
// fs.promises.appendFile(filepath,"\nfile is updated in promises.","utf-8")
// .then(console.log('file updated successfully!')
// )
// .catch((error)=>console.log(error)
// );

//*deleting file
// fs.promises.unlink(filepath)
// .then(console.log("file deleted successfully!")
// )
// .catch((error)=>console.log(error)
// );




