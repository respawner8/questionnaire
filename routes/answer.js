const express=require('express');
const router = express.Router();
const mongoose=require('mongoose');
const answerModel=require('../models/answerModel.js')


router.post('/',function(req,res){
    const newAnswer=new answerModel({
        _id: new mongoose.Types.ObjectId,
        name:req.body.name,
        email:req.body.email,
        quizId:req.body.quizId,
        count:req.body.count
    })
    answerModel.find({email:req.body.email})
    .exec()
    .then(answer=>{
        if(answer.length>0)
            res.json({"message" : "1"})
        else{
            newAnswer.save();
            res.json({"message": "2"})
        }
    })
})



module.exports=router;