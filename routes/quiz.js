const express=require('express');
const router = express.Router();
const mongoose=require('mongoose');
const quizModel=require('../models/quizModel.js')

router.get('/:hash', function(req,res){
    hash = req.params.hash;
    //console.log(hash);
    quizModel.findOne({
        _id : hash
    })
    .exec()
    .then(quiz=>{
            res.json(quiz);
    })
})


router.post('/',function(req,res){
    const newQuiz=new quizModel({
        _id: new mongoose.Types.ObjectId,
        name:req.body.name,
        email:req.body.email,
        quizHTML : req.body.quizHTML,

        // question1 : req.body.question1,
        // question2 : req.body.question2,
        // question3 : req.body.question3,
        // question4 : req.body.question4,
        // question5 : req.body.question5,
        // question6 : req.body.question6,
        // question7 : req.body.question7,
        // question8 : req.body.question8,
        // question9 : req.body.question9,
        // question10 : req.body.question10,

        answer1 : req.body.answer1,
        answer2 : req.body.answer2,
        answer3 : req.body.answer3,
        answer4 : req.body.answer4,
        answer5 : req.body.answer5,
        answer6 : req.body.answer6,
        answer7 : req.body.answer7,
        answer8 : req.body.answer8,
        answer9 : req.body.answer9,
        answer10 : req.body.answer10

    })
    quizModel.find({email:req.body.email})
    .exec()
    .then(quiz=>{
        if(quiz.length>0)
            {
                res.json({ "status" : "0"});
            }
        else{
            newQuiz.save();
            res.json({"hash" : newQuiz._id , "status" : "1"});
        }
    })
})


module.exports=router;