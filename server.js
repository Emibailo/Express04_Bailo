//criar a infraestrutura básica 

const express = require('express');
const mysql = require('musql2');

const app = express();

app.listen(3000,()=>{
    console.log("servidor na área mano!")
})

const connection = mysql.createConnection(mysql_config);

// app.get('/',(req,res)=>{

// })