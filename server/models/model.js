import mongoose from "mongoose";

const todoschema=mongoose.Schema({
    name: String,
    priority: String,
    duedate: Date,
    status:{
        type:String,
        default:"Todo"
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});
const Todo=mongoose.model("test",todoschema)

export default Todo;