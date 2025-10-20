const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const cookies = require('cookie-parser');

const app = express();

app.use(cookies());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(re,res)=>{
    res.cookie("key",jwt.sign("sam","secret"));
    res.send("cookie set");
})

app.get('/read',function(req,res){
    res.send(jwt.verify(req.cookies.key,"secret"));
})


app.listen(3000)