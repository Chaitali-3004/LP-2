const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log=`${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log,(err,data) => {
        switch(req.url){
            case '/': res.end("Hello From server in home");
            break;
            case '/about': res.end("You are in about us section");
            break;
            default:
                res.end("404 NOt Found");
        }
        //res.end("Hello From Server");
    });
    //console.log(req);
    //console.log("New Req Rec."); 
});

myServer.listen(8000, () => console.log("Server Started!"));