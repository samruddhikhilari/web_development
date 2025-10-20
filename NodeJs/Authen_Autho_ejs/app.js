const express = require('express');
const cookie = require('cookie-parser');
const bcrypt = require('bcrypt');
const model = require('./models/user');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cookie())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/register',(req,res)=>{

    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(req.body.password,salt,async (err,hash)=>{
            
           const user = await model.create({
                username :req.body.username,
                password :hash,
                email :req.body.email,
                age:req.body.age,
            })
            res.redirect('/')
        });
    });

    const token = jwt.sign(req.body.email,"hiiiii");
    res.cookie("token", token);
})

app.get('/signin',(req,res)=>{
    res.render('login');
})

app.post('/login',async (req,res)=>{

    const user = await model.findOne({
        username :req.body.username
    })

    if(user){
       bcrypt.compare(req.body.password,user.password,(err,result)=>{
        if(result){
            const token = jwt.sign(user.email,"hiiiii");
            res.cookie("token", token);

            res.send("login successful !!");
        }else{
            res.send("sorry something is wrong !!");
        }
       });
    }else{
        res.send("sorry something is wrong !!");
    }
})

app.get('/logout',(req,res)=>{

    res.cookie("token"," ");
    res.send("logout successfully bro");
})
app.listen(3000);
