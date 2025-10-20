const express = require('express');
const app = express();

const userModel = require('./models/user');
const prodModel = require('./models/product');

app.get('/user',async (req,res)=>{
    const user = await userModel.create({
        username:"sam",
        email:"abc@fgmail.comdhsg",
        age:20,
    })

})

app.get('/prod',async (req,res)=>{
    const prod = await prodModel.create({
        name:"hair accessories are  here ",
        userid:"6805068f076e4156a76111a6"
    })

    const user = await userModel.findOne({
        _id:"6805068f076e4156a76111a6",
    })


    user.prod.push(prod._id);
    user.save();
    console.log(prod._id);
})

app.listen(3000);
