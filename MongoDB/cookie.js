import express from 'express';
import multer from 'multer';
import cookieParser from 'cookie-parser';

const app = express();

const upload = new multer();
app.use(upload.array());
app.use(cookieParser());

app.post('/',(req,res)=>{
    const {id,name} = req.body;
    res.cookie(id,name,{maxAge:5000});
    res.send("hello sam kesi ho");
    console.log("cookie created success");
})

app.get('/fetch',(req,res)=>{
    res.send(req.cookies);
    console.log("cookie access success");
})

app.get('/delete',(req,res)=>{
    res.clearCookie("name");
    console.log("cookie delted success");
    res.send(req.cookies);
});

app.listen(3000);