import express from 'express';

const app = express();

app.get('/products',(req,res,next)=>{
        res.send(req.query.key);
})

app.listen(3000,()=>{
    console.log("server start");
})