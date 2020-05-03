const mongoose = require('mongoose');

const userSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{type: String, required: true},
    email:{type: String, required: true},

    quizHTML : {type: String , required: true},
    
    // question1:{type: String, required: true},
    // question2:{type: String, required: true},
    // question3:{type: String, required: true},
    // question4:{type: String, required: true},
    // question5:{type: String, required: true},
    // question6:{type: String, required: true},
    // question7:{type: String, required: true},
    // question8:{type: String, required: true},
    // question9:{type: String, required: true},
    // question10:{type: String, required: true},

    answer1:{type: Number, required: true},
    answer2:{type: Number, required: true},
    answer3:{type: Number, required: true},
    answer4:{type: Number, required: true},
    answer5:{type: Number, required: true},
    answer6:{type: Number, required: true},
    answer7:{type: Number, required: true},
    answer8:{type: Number, required: true},
    answer9:{type: Number, required: true},
    answer10:{type: Number, required: true}
    

})
module.exports=mongoose.model('quiz',userSchema);