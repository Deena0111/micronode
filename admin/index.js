const express=require('express')
const app=express()
const port=10000
app.listen(port,()=>{
    console.log(`admin port is ${port}`);
})
app.get('/',(req,res)=>{
    res.send("hello admin")
})