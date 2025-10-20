const mongoose = require('mongoose');

const prodSchema = mongoose.Schema({
    name:String,
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model("product",prodSchema);