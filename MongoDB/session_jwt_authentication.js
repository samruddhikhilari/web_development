import express from 'express';
import multer from 'multer';
import session from 'express-session';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const upload = new multer();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(upload.array());
app.use(session({
    secret:"hello",
    resave:false,
    saveUninitialized:false,
}))
const users =[];

app.post("/register",async (req,res)=>{
    console.log(req.body);
    
    const {username, password} = req.body;
    const hashpwd = await bcrypt.hash(password,10);
    users.push({
        username,
        password:hashpwd,
    })
    res.send(username + " thank you for registeration ");
    console.log("registeration done");
})

app.post('/login',async(req,res)=>{
    const {username,password} = req.body;

    //verification
     const user = users.find(u => u.username === username);
   
    if(!user ||   !(await bcrypt.compare(password,user.password))){
      return  res.send("sorry you can't login ");  
   }

   const token = jwt.sign(user.username,"hello");

   req.session.token = token;
   res.send("login doen");
})

app.get('/profile',(req,res)=>{
   if(!jwt.verify(req.session.token,"helo")){
   return res.send("unauthorized access ");
   }

   res.send("access approved");
})

app.listen(3000,()=>{
    console.log("server started ");
});