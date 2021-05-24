const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
//Importing routes.
const postRoute=require('./routes/posts');
app.use('/posts',postRoute);

//Routes
app.get('/',(req,res)=>{
    res.send('We are on home');
});
app.get('/posts',(req,res)=>{
    res.send('We are on posts');
});

//Connect to DB.
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>console.log('connected to DB!'));
 app.listen(3000);  