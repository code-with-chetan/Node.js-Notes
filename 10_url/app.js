import { readFile } from "fs/promises";
import {createServer} from "http";
import path from "path";

const PORT=3000;

const server=createServer(async(req,res)=>{
            if(req.method==="GET"){
                if(req.url==="/"){
                    try{
                        const data=await readFile(path.join(process.cwd(),"public","index.html"));
                        res.writeHead(200,{"Content-Type":"text/html"});
                        res.end(data);
                    }
                    catch(error){
                        res.writeHead(404,{"Content-Type":"text/html"})
                        res.end("404 page not found.");
                        
                    }
                }
            }            
             
})

server.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
    
})