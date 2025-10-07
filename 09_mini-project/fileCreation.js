import readline from 'readline'
import fs from 'fs'

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


const fileCreation=()=>{
    rl.question("Enter the filename:",(name)=>{
            rl.question("Enter the content :",(content)=>{
                 fs.writeFile(`${name}.txt`,content,(error)=>{
                    if(error){
                        console.error("the error:",error.message);
                    }
                 })
                 rl.close();
            })
    })
}


fileCreation();