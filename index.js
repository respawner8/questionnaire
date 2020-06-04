const express=require('express')
const mongoose=require('mongoose')
const parser=require('body-parser')
const morgan=require('morgan')
const path = require('path')
const app=express();
const port=3000;


mongoose.connect("mongodb+srv://respawner:Hello%40kubuntu@questionnaire-2ydel.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology: true},function(err){
    if(err)
    {
        console.log(err);
        console.log("mongoose not connected");
    }
    else{
        console.log("mongoose connected")
    }
})

const user=require('./routes/user.js');
const quiz=require('./routes/quiz.js');
const answer=require('./routes/answer.js');

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use("*",function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');
    res.set('Access-Control-Allow-Methods', '*');
    next();
})


app.use('/user',user);
app.use('/quiz',quiz);
app.use('/answerr',answer)

app.get('/' , function(req , res) { 
    res.sendFile('index.html' , {root : path.join(__dirname , 'frontend/')});  
})

app.get('/public/font-awesome.css' , function(req , res) { 
    res.sendFile('font-awesome.css' , {root : path.join(__dirname , 'frontend/')});  
})

app.get('/public/quizCreate.css' , function(req , res) { 
    res.sendFile('quizCreate.css' , {root : path.join(__dirname , 'frontend/')});  
})

app.get('/public/index.js' , function(req , res) { 
    res.sendFile('index.js' , {root : path.join(__dirname , 'frontend/')});  
})

app.get('/public/answer.js' , function(req , res) { 
    res.sendFile('answer.js' , {root : path.join(__dirname , 'frontend/')});  
})

app.get('/public/answerLogin.js' , function(req , res) { 
    res.sendFile('answerLogin.js' , {root : path.join(__dirname , 'frontend/')});  
})
 
app.get('/quizCreate' , function(req , res) { 
    //console.log('lol1');
    res.sendFile('quizCreate.html' , {root : path.join(__dirname , 'frontend/')});  
})

app.get('/linkShare' , function(req , res) { 
    res.sendFile('linkShare.html' , {root : path.join(__dirname , 'frontend/')});  
})

app.get('/public/quizCreate.js' , function(req , res) { 
    res.sendFile('quizCreate.js' , {root : path.join(__dirname , 'frontend/')});  
})

app.get('/answer/:hash' , function(req , res) { 
    res.sendFile('answerLogin.html' , {root : path.join(__dirname , 'frontend/')});  
})

app.get('/answeR' , function(req , res) { 
    res.sendFile('answer.html' , {root : path.join(__dirname , 'frontend/')});  
})



app.listen(port,function(){
    console.log(`Server is listening on ${port}`)
})