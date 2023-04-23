const express=require('express')
const app=express()
const proxy = require('express-http-proxy')
const bodyParser = require('body-parser')
const port=30000
// Define the URL paths for each microservice
const adminServiceUrl = 'http://localhost:10000';
const userSeviceUrl = 'http://localhost:20000';
// Define the routes for the API Gateway
app.use(bodyParser.json());
app.listen(port,()=>{
    console.log(`admin port is ${port}`);
})
// Proxy requests to the admin microservice
app.use('/admin', proxy(adminServiceUrl));

// Proxy requests to the user microservice
app.use('/user', proxy(userSeviceUrl));

app.get('/gateway',(req,res)=>{
    res.send("hello gateway")
})