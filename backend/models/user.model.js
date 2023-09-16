const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const postSchema = new Schema({
    userName : {
        type: String,
        unique : true,
        required : true
    },
    postTitle:{
        type:String ,
        required: false,
        },
    like:{
        type : Number,
        default : 0,
        },
    comment :[{
        type : Schema.Types.ObjectId,
        ref : 'Comments'
    }],
    
    imageUrl : [{
        type : Schema.Types.ObjectId,
        ref : 'Image'
    }],

    mint : {
        type:Boolean,
        default:false
    }
       
})

const Posts = mongoose.model('Posts',postSchema);
module.exports=Posts