const express=require('express');
const router = express.Router();
const mongoose=require('mongoose');
const userModel=require('../models/userModel.js')


router.get('/:email', function(req,res){
    const email=req.params.email;
    userModel.findOne({
        email:email
    })
    .then(user=>{
            res.json(user)
    })
})



module.exports=router;