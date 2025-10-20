import express from 'express';

const app = express();

process.on("uncaughtException",(req,res)=>{
    console.log("good night");
    res.send("b bye");
})

app.get('/',(req,res,next)=>{
        throw new Error("something to show ");
})
app.listen(3000,()=>{
    console.log("server start");
})