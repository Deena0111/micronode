const express=require('express')
const app=express()
const port=20000
app.listen(port,()=>{
    console.log(`user port is ${port}`);
})
app.get('/',(req,res)=>{
    res.send("hello user")
})