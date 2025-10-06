const http=require('http');


const server=http.createServer((req,res)=>{
            if(req.url==="/"){
                res.setHeader("Content-Type","text/html");
                res.write('<h1>hy,this is a homepage of website love love love love</h1>')
                res.end();
            }

            else  if(req.url==="/about"){
                res.write('hy,this is a about page of website. learn about us.')
                res.end();
            }

               else if(req.url==="/source-code"){
                res.setHeader("Content-Type","text/plain");
                res.write('hy,source code is freely available.')
                res.end();
            }
});

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`listening on PORT ${PORT}`);
    
})