import express from 'express';
import model from './models/usermodel.js';

const app = express();

app.set("view engine", "ejs");
app.use(express.json());

app.post('/',async (req,res)=>{
    const {id,username,email} = req.body;

//  const data = await model.find({
//     id,
//  }).then(()=>{
//     // res.send(data);  
//     console.log("data inserted "+ data);
//  }).catch((err)=>{
//    res.send("error occured");
//     console.error("error is :"+ err); 
//  })

})

app.listen(3000,()=>{
    console.log("server started !!");
});