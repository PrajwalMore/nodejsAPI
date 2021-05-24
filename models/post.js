const mongoose=require('mongoose');
const PostSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String ,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const userData=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mail:{
        type:mail ,
        required:true
    },
    password:{
        type:password,
        required:true
    }
})

module.exports=mongoose.model('Posts',PostSchema);