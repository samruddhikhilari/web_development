import express from 'express';
 const router = express.Router();

router.get('/info',(req,res)=>{
    res.send("request with info get received");
})

router.get('/form',(req,res)=>{
    res.send("request with get form received");
})

export default router;