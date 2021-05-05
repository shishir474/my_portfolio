const mongoose = require('mongoose');
//creating schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true // this line implies that giving name is mandatory.It can't be skipped. In fact all the validations are put over here.
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

//telling the name of the collection using this schema
const User = mongoose.model('User',userSchema);
module.exports = User;