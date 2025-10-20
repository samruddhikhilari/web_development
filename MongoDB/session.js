import express from 'express';
import session from 'express-session';

const app = express();
app.use(session({
    secret:"the secrete key here",
    resave:false,
    saveUninitialized:false,
}))

app.get('/',(req,res)=>{
    if(req.session.count){
        req.session.count++;
        res.send("thank you for visiting "+ req.session.count +" times");
    }else{
        req.session.count =1;
        res.send("thank you for first time visiting ");
    }
})

app.get('/delete',(req,res)=>{

    req.session.destroy();
    res.send("sessions are deleted");
})

app.listen(3000,()=>{
    console.log("server started !");
})