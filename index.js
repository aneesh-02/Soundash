const http = require("http"); // require the http into some variable
const port = 7000;  // specify a port for local host to run on
const server = http.createServer(requestHandler); // method to create the server

console.log("Server is up and running on port: ", port);

server.listen(port, errorHandlingFuction);  // to handle any errors on the rserver

function errorHandlingFuction(err) // error with creating server
{
    if(err)
    {
        console.log("An error has occured" + err);
        return ;
    }
}

const fs = require("fs");

function requestHandler(req,res)
{
    let filepath;

    switch(req.url)
    {
        case "/" : 
            filepath = "./index.html"; break;
        case "/singleArtist" : 
            filepath = "./singleArtist.html"; break;    
        default : 
            filepath = "./404.html"; break;
    }

    fs.readFile(filepath, function(err, data) // error regarding file creation
    {
        if(err)
        {
            console.log("Error !!!",err);
            return res.end("An error occured on the Server");
        }

        return res.end(data);
    });

    // function open(err,data)
    

}
