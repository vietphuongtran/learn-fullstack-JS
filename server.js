import express from 'express';
//mean using filesystem
//import fs from 'fs';
import config from './config';
import apiRouter from './api';

const server = express();
//this is the line to set up EJS
//EJS: Embeded JavaScript, a technique for writing HTMl with JS https://ejs.co/
server.set('view engine', 'ejs');
//server.get("/", (req, res) =>  {
//    //send the hello express to the main page
//    res.send("Hello world from Express");
//});
server.get("/", (req, res) =>  {
    //res.render send the ejs to the index page
    res.render("index", {
        //to export it as a string use <%= %>
        content: "Hello, this is Ejs file written in the server",
        //to export it as Html tag <%- %>
        anotherContent: "This content includes <div>div tag</div>"
    });
});
server.use(express.static('public'));
server.use('/api', apiRouter);
server.use(express.static('public')); 

server.listen(config.port, () => {
    console.info('Express is now on port '+ config.port);
});