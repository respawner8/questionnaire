const mongoose = require('mongoose');

const answerSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{type: String, required: true},
    email:{type: String, required: true},
    quizId:{type: String, required: true},
    count:{type:Number, required: true}
})
module.exports=mongoose.model('answer',answerSchema);