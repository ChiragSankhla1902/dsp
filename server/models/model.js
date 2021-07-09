import mongoose from "mongoose";

const todoschema=mongoose.Schema({
    first_name: String,
    last_name: String,
    email:String,
});
const Todo=mongoose.model("test",todoschema)

export default Todo;