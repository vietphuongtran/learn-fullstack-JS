import express from 'express';
//mean using filesystem
//import fs from 'fs';
import config from './config';
import apiRouter from './api';

const server = express();
server.get("/", (req, res) =>  {
    //send the hello express to the main page
    res.send("Hello world from Express");
});

//built in express method to display the about.html
//meaning: use this file in the public folder
server.use(express.static('public'));
server.use('/api', apiRouter);
server.use(express.static('public'));

//server.get("/about.html", (req, res) =>  {
//    //send the hello express to the about.html
//    //res.send("Hello world from Express in about page");
//    //send the file using filesystem
//    fs.readFile('./about.html', (err, data) => {
//        res.send(data.toString());
//    });
//}); 

server.listen(config.port, () => {
    console.info('Express is now on port '+ config.port);
});