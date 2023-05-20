const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const res = require('express/lib/response');
const app = express();
const port = 5050;


app.use(morgan('combined'));

app.get("/", (req, res) =>{

    res.send('Hello World');

}) 

app.listen(port, ()=>{
    debug("Listerning on port : " + chalk.yellow(port));
})