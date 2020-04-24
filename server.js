//import config, { nodeEnv, logStars } from './config';
//
//console.log(config, nodeEnv);
//
//logStars('Function');
//import https from 'https';
//get the status code of lynda.com and its data
//https.get('https://www.lynda.com', res => {
//    console.log('Status code ', res.statusCode);
//    res.on('data', chunk => {
//        console.log(chunk.toString());
//    });
//});
//import http from 'http';
//const server = http.createServer();
//server.on('request', (req, res) => {
//    res.write('Hello HTTP!\n');
//    setTimeout(() => {
//    res.write('I can stream!\n');
//    res.end();
//  }, 3000);
//});
//server.listen(8080);
import express from 'express';
import config from './config';

const server = express();
server.listen(config.port, () => {
    console.info('Express is now on port '+ config.port);
});