
import http from "http";
import url from "url";

const server=http.createServer((request,responce)=>{
    const parsedUrl=url.parse(request.url,true);
    console.log(parsedUrl);
    if (parsedUrl.pathname == "/home" ||  parsedUrl.pathname == "/")
     responce.write("<h1>Home Page</h1>");
    else if (parsedUrl.pathname == "/about")
     responce.write("<h1>About Page</h1>");
    else if (parsedUrl.pathname == "/contact")
     responce.write("<h1>Contact Page</h1>");
    else if (parsedUrl.pathname == "/add"){
      let a = parsedUrl.query.a*1;
      let b = parsedUrl.query.b*1;
      responce.write("<h1>Addition "+(a+b)+"</h1>");
    } 
      responce.end();

});

  server.listen(4000,()=>{
    console.log("sever started at http://localhost:2003");

  })
