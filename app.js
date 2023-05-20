const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const res = require('express/lib/response');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5050;


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("view",".NODE.JS/app.js");
app.set("app.js engine", "ejs")

app.get("/", (req, res) =>{

    res.render('index', {username: 'Snack', customer:["Nakative16", "Sapphaya", "Kingdom"]});

}) 

app.listen(port, ()=>{
    debug("Listerning on port : " + chalk.yellow(port));
})