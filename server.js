const express = require("express");
const config =require("./config/config.json")
const app = express();
app.use(express.json());


app.use('/childDetails',require('./router/child'));

app.use('/parentDetails',require('./router/parent'));

app.use('/adminDetails',require('./router/admin'));


app.listen(5000,()=>{
    console.log("server is running on port 5000 ");
})