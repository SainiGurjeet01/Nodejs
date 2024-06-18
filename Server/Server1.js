
import http from "http";


const server = http.createServer((request,response)=>{
    console.log(request.headers);
    response.write("Gurjeet Here!...Hello");
    response.end();
});

server.listen(2000,()=>{
    console.log("server started at http://localhost:2001");
});

