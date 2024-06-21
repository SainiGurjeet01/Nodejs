

import http from "http";
import url from "url";
import fs from "fs";
import path,{ dirname } from "path";



http.createServer((request,response)=>{
    let parsedUrl= url.parse(request.url,true);
    console.log(parsedUrl.pathname);
    console.log(import.meta.url);
    let __filename = url.fileURLToPath(import.meta.url);
    let __dirname = dirname(__filename);

    
    if(parsedUrl.pathname == "/index" && request.method == "GET" || parsedUrl.pathname == "/"){
        let homePagePath = path.join(__dirname,"/views/index.html");
        let data = fs.readFileSync(homePagePath);
        response.write(data);
        response.end();
    }

    else if (parsedUrl.pathname.match ("\.css$")){
        let readStream = fs.createReadStream("./views"+parsedUrl.pathname);
        readStream.pipe(response);
    }



})

.listen(3000,()=>{
    console.log("server Started .........");
});