

import http from "http";
import url from "url";
import fs from "fs";
import path,{dirname}from "path";



http.createServer((request,Response)=>{
    let parsedUrl= url.parse(request,url,true);
    console.log(parsedUrl.pathname);
    console.log(import.meta.url);
    let__filename = url.fileURLToPath(import.meta.url);
    let__dirname = dirname(__filename);

    
    if(parsedUrl.pathname == "/index" && request.method == "GET"){
        let homePagePath = path.join(__dirname,"/connect/index.html");
        let data = fs.readFileSync(homePagePath);
        Response.write(data);
        Response.end();
    }

    else if (parsedUrl.pathname.match ("\.css$")){
        let readStream = fs.createReadStream("./connect"+parsedUrl.pathname);
        readStream.pipe(Response);
    }



})

.listen(3000,()=>{
    console.log("server Started at http://localhost:3000");
});