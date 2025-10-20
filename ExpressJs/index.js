import express from 'express';
import multer  from 'multer';
import dbmodel from './models/mongoose_connect.js';

const app = express();
const upload = multer();
app.set("view engine","ejs");
app.use(express.json());
app.use('/public',express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(upload.array())

app.post('/users',async (req,res)=>{
   const {id,username,email} = req.body;

  await dbmodel.create({
      id,
      username,
      email
   })

   res.send("operation done here ");
})

app.get('/users',async (req,res)=>{
   const id=111;
   const username="aaa";
   const email = "aa@example.com";

  await dbmodel.create({
      id,
      username,
      email
   })

   res.send("operation done here ");
})

app.listen(3000);