import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27071/express_series");

const schema = mongoose.Schema({
    "id":Number,
    "username":String,
    "email":String
});

const dbmodel =  mongoose.model("UserDetails",schema);

export default dbmodel;
