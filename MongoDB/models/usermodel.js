import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/newsystem");

const schema = mongoose.Schema({
    "id":Number,
    "username":String,
    "email":String
});

export default mongoose.model("userdetails",schema);