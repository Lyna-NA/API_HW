const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies

//write your code 
app.get('/user',(req,res)=>{
    console.log(req.params['name']);
    res.json({message:"Hello "+req.query.name});
})

app.post('/user',(req,res)=>{
    console.log(req.params['name']);
    res.json({message:"Hello "+req.bodyParser.name});
})


app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

