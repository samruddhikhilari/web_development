import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/users/list',(req,res)=>{
    let users =[
        {
            "name":"abc",
            "age":20,
            "marks":25
        },
        {
            "name":"xyz",
            "age":19,
            "marks":30
        }
    ]

    res.status(200).json({users});
    console.log("data shared");
})

app.post('/api/users/add',(req,res)=>{
    let {name,age,marks} = req.body;

    let users =[
        {
            "name":"abc",
            "age":20,
            "marks":25
        },
        {
            "name":"xyz",
            "age":19,
            "marks":30
        }
    ]

    users = [...users, {
        name,
        age,
        marks
    }]

    res.status(200).json({
        users
    })
    console.log("api inserted");
})

app.put('/api/users/update',(req,res)=>{
    let {name,age,marks} = req.body;

    let user = {
        name,
        age,
        marks,
        id:Date.now(),
    }

    res.status(202).json({
        user
    })
    console.log("api update");
})

app.delete('/api/users/delete/:id',(req,res)=>{
  let users= [
        {
            "name": "abc",
            "age": 20,
            "marks": 25,
             "id":17483
        },
        {
            "name": "xyz",
            "age": 19,
            "marks": 30,
             "id":171261883
        },
        {
            "name": "samruddhi",
            "age": 20,
            "marks": 98,
            "id":1748591261883
        }
    ]

   const results = users.filter((u)=> u.id != req.params.id );

   console.log("api deleted");
   res.status(200).json({ results});
})

app.listen(3000,()=>{
    console.log("server start");
})